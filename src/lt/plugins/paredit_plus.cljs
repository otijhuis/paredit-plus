(ns lt.plugins.paredit-plus
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.ojbs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.objs.statusbar :as status]
            [lt.util.cljs :refer [str-contains?]]))

(def pairs [{:type :list :open "(" :close ")"}
            {:type :map :open "{" :close "}"}
            {:type :string :open "\"" :close "\""}
            {:type :vector :open "[" :close "]"}])

(def directions {:backward -1 :forward 1})

(defn dir->int [dir]
  (get directions dir))

(defn pair-chars [t]
  (set (map t pairs)))

(defn pair->set [p]
  (set ((juxt :open :close) p)))

(defn char->pair [c]
  (first
   (filter (fn [m] (or
                     (= (:open m) c)
                     (= (:close m) c))) pairs)))

(defn char-type [p c]
  (if (= (:open p) c)
    :open
    :close))

(defn type->dir [t]
  (if (= :open t)
    :forward
    :backward))

(defn opposite-char [c]
  (when-let [p (char->pair c)]
    (if (= (:open p) c)
      (:close p)
      (:open p))))

(defn char-at-loc [ed loc]
  (let [l (editor/line ed (:line loc))
        c (get l (:ch loc))]
    c))

(defn comment-or-string? [ed loc allow-strings?]
  "Check wether the character at loc is part of a comment or string"
  (if-let [tokentype (editor/->token-type ed (editor/adjust-loc loc 1))]
    (cond
      (str-contains? tokentype "comment-form") false
      (str-contains? tokentype "comment") true
      (str-contains? tokentype "string") (when-not allow-strings? true))
    false))

(defn index->pos [ed i]
  (.posFromIndex (editor/->cm-ed ed) i))

(defn find-pos-h
  ([ed loc amount]
     (find-pos-h ed loc amount :char false))
  ([ed loc amount unit vis?]
     (let [pos (.findPosH (editor/->cm-ed ed) (clj->js loc) amount (name unit) vis?)]
       {:line (.-line pos)
        :ch (.-ch pos)})))

(defn string-boundary [ed l dir]
  (loop [loc l
         result nil]
    (let [token-type (editor/->token-type ed (editor/adjust-loc loc 1))
          next-loc (find-pos-h ed loc (dir->int dir))]
      (if (and
           token-type
           (str-contains? token-type "string") )
        (if (= next-loc loc)
          (condp = dir
                :backward loc
                :forward (editor/adjust-loc loc -1))
          (recur next-loc loc))
        result))))

(defn string-bounds [ed l]
  [(string-boundary ed l :backward) (string-boundary ed l :forward)])

(defn find-match [ed startloc c]
  (when-let [p (char->pair c)]
    (let [pair-type (:type p)
          type (char-type p c)
          dir (type->dir type)
          opposite (opposite-char c)]
      (if (= pair-type :string)
        (first (remove #(= startloc %) (string-bounds ed startloc)))
        (loop [chars (locate-chars ed startloc #{c opposite} dir)
                    stack 0]
               (when-not (empty? chars)
                 (let [[char loc] (first chars)]
                   (cond
                    (= loc startloc) (recur (rest chars) stack)
                    (= char c) (recur (rest chars) (inc stack))
                    (= char opposite) (if (= 0 stack)
                                        loc
                                        (recur (rest chars) (dec stack)))
                    :else (recur (rest chars) stack)))))))))

(defn locate-chars [ed startloc cs dir]
  (lazy-seq
   (loop [loc startloc
          results '()]
     (let [next-loc (find-pos-h ed loc (dir->int dir))
           c (char-at-loc ed loc)
           pair (char->pair c)]
       (cond
        (and
         pair
         (= (:type pair) :string)) (let [token (editor/->token ed (editor/adjust-loc loc 1))
                                         t (:type token)
                                         start (:start token)
                                         end (- (:end token) 1)]
                                     (if (and
                                          (= t "string")
                                          (or (= start (:ch loc)) (= end (:ch loc))))
                                       (recur next-loc (cons [c loc] results))
                                       (recur next-loc results)))
        (comment-or-string? ed loc false) (recur next-loc results)
        (contains? cs c) (if (= next-loc loc)
                                  (reverse (cons [c loc] results))
                                  (recur next-loc (cons [c loc] results)))
        (= next-loc loc) (reverse results)
        :else (recur next-loc results))))))


(defn find-unbalanced [ed startloc cs dir]
  (lazy-seq
   (loop [chars (locate-chars ed startloc cs dir)
          results '()]
     (if-not (empty? chars)
       (let [[c loc] (first chars)]
         (if-let [matchloc (find-match ed loc c)]
           (if (<
                (* (dir->int dir) (editor/pos->index ed matchloc))
                (* (dir->int dir) (editor/pos->index ed startloc)))
             (recur (rest chars) (cons [c loc] results))
             (recur (rest chars) results))
           (recur (rest chars) (cons [c loc] results))))
       (reverse results)))))

;; TODO delete comments and empty lines
(defn paredit-kill [ed]
  (let [startloc (editor/->cursor ed)
        c (char-at-loc ed startloc)]
    (cond
     (contains? #{"}" "]" ")"} c) (notifos/set-msg! "Invalid starting point")
     :else (if-let [[char loc] (first (find-unbalanced ed startloc (pair-chars :close) :forward))]
             (editor/replace ed startloc loc "")
             (when-let [match-loc (find-match ed startloc c)]
               (editor/replace ed startloc (editor/adjust-loc match-loc 1) ""))))))


(defn wrap-region [ed [startloc endloc] p]
  (editor/operation ed (fn []
                         (editor/replace ed (editor/adjust-loc endloc 1) (:close p))
                         (editor/replace ed startloc (:open p)))))

(defn paredit-wrap-with-pair [ed p]
  (let [loc (editor/->cursor ed)
        c (char-at-loc ed loc)]
    (cond
     (editor/selection? ed) (let [bounds (editor/selection-bounds ed)]
                              (wrap-region ed [(:from bounds) (:to bounds)] p))
     (comment-or-string? ed loc true) (notifos/set-msg! "Illegal context: not available in comment")
     (comment-or-string? ed loc false) (when-let [bounds (string-bounds ed loc)]
                                         (wrap-region ed bounds p))
     (char->pair c) (when-let [match-loc (find-match ed loc c)]
                      (wrap-region ed (sort-by #(editor/pos->index ed %) [loc match-loc]) p))
     :else (let [token (editor/->token ed (editor/adjust-loc loc 1))
                 startloc {:line (:line loc) :ch (:start token)}
                 endloc (editor/adjust-loc {:line (:line loc) :ch (:end token)} -1)]
             (wrap-region ed [startloc endloc] p)))))

(defn paredit-splice-sexp [ed]
  (when-let [[c loc] (first (find-unbalanced ed (editor/->cursor ed) (pair-chars :close) :forward))]
    (when-let [match-loc (find-match ed loc c)]
      (editor/operation ed (fn []
                             (editor/replace ed loc (editor/adjust-loc loc 1) "")
                             (editor/replace ed match-loc (editor/adjust-loc match-loc 1) ""))))))

(defn paredit-splice-sexp-kill [ed dir]
  (when-let [[c loc] (first (find-unbalanced ed (editor/->cursor ed) (pair-chars :close) :forward))]
    (when-let [match-loc (find-match ed loc c)]
      (condp = dir
        :backward (editor/operation ed (fn []
                              (editor/replace ed loc (editor/adjust-loc loc 1) "")
                              (editor/replace ed match-loc (editor/->cursor ed) "")))
        :forward (editor/operation ed (fn []
                              (editor/replace ed (editor/->cursor ed) (editor/adjust-loc loc 1) "")
                              (editor/replace ed match-loc (editor/adjust-loc match-loc 1) "")))))))

(cmd/command {:command :paredit-plus.splice.sexp.killing.forward
              :desc "Paredit Plus: Splice Sexp Killing Forward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-splice-sexp-kill ed :forward)))})

(cmd/command {:command :paredit-plus.splice.sexp.killing.backward
              :desc "Paredit Plus: Splice Sexp Killing Backward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-splice-sexp-kill ed :backward)))})

(cmd/command {:command :paredit-plus.splice.sexp
              :desc "Paredit Plus: Splice Sexp"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-splice-sexp ed)))})

(cmd/command {:command :paredit-plus.kill
              :desc "Paredit Plus: Kill"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-kill ed)))})

(cmd/command {:command :paredit-plus.wrap.round
              :desc "Paredit Plus: Wrap Round"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-wrap-with-pair ed (char->pair "("))))})

(cmd/command {:command :paredit-plus.wrap.square
              :desc "Paredit Plus: Wrap Square"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-wrap-with-pair ed (char->pair "["))))})

(cmd/command {:command :paredit-plus.wrap.curly
              :desc "Paredit Plus: Wrap Curly"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-wrap-with-pair ed (char->pair "{"))))})

(cmd/command {:command :paredit-plus.wrap.quotes
              :desc "Paredit Plus: Wrap Quotes"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-wrap-with-pair ed (char->pair "\""))))})
;; -------------------------------- TEST AREA -----------------------------------------


(defn paredit-test [ed]
  (string-bounds ed (editor/->cursor ed)))

(defn paredit-test [ed]
  (editor/->token-type ed (editor/adjust-loc (editor/->cursor ed) 1)))

(defn paredit-test [ed]
  (find-match ed (editor/->cursor ed) ")"))

(defn paredit-test [ed]
  (apply str (map (fn [[x y]] x) (find-unbalanced ed (editor/->cursor ed) (pair-chars :close) :forward))))

(defn paredit-test [ed]
  (apply str (map (fn [[x y]] x) (locate-chars ed (editor/->cursor ed) (pair-chars :close) :forward))))

(cmd/command {:command :paredit-plus.test
              :desc "Paredit Plus: Test (DO NOT USE, FOR DEV ONLY)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (js/console.log (paredit-test ed))))})

;@cmd/manager
