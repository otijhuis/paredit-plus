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
    1
    -1))

(defn opposite-char [c]
  (when-let [p (char->pair c)]
    (if (= (:open p) c)
      (:close p)
      (:open p))))

(defn char-at-loc [ed loc]
  (let [l (editor/line ed (:line loc))
        c (get l (:ch loc))]
    c))

(defn comment-or-string? [ed loc]
  "Check wether the character at loc is part of a comment or string"
  (if-let [tokentype (editor/->token-type ed (editor/adjust-loc loc 1))]
    (or
      (str-contains? tokentype "comment-form")
      (str-contains? tokentype "comment")
      (str-contains? tokentype "string"))
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

(defn string-dir [ed loc]
  (let [token (editor/->token ed (editor/adjust-loc loc 1))
        token-end (editor/adjust-loc {:line (:line loc) :ch (:end token)} -1)]
    (when (= (:type token) "string")
      (if (<= (:ch loc) (:ch token-end))
        -1
        1))))

(defn find-match [ed startloc c]
  (when-let [p (char->pair c)]
    (let [pair-type (:type p)
          type (char-type p c)
          dir (type->dir type)
          opposite (opposite-char c)]
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
             :else (recur (rest chars) stack))))))))

(defn locate-chars [ed startloc cs dir]
  (lazy-seq
   (loop [loc startloc
          results '()]
     (let [next-loc (find-pos-h ed loc dir)
           cur-char (char-at-loc ed loc)]
       (cond
        (comment-or-string? ed loc) (recur next-loc results)
        (contains? cs cur-char) (if (= next-loc loc)
                                  (reverse (cons [cur-char loc] results))
                                  (recur next-loc (cons [cur-char loc] results)))
        (= next-loc loc) (reverse results)
        :else (recur next-loc results))))))

(defn find-unbalanced [ed startloc cs dir]
  (lazy-seq
   (loop [chars (locate-chars ed startloc cs dir)
          results '()]
     (if-not (empty? chars)
       (let [[c loc] (first chars)]
         (if-let [matchloc (find-match ed loc c)]
           (if (< (* dir (editor/pos->index ed matchloc)) (* dir (editor/pos->index ed startloc)))
             (recur (rest chars) (cons [c loc] results))
             (recur (rest chars) results))
           (recur (rest chars) (cons [c loc] results))))
       (reverse results)))))

(defn paredit-kill [ed]
  (let [startloc (editor/->cursor ed)
        c (char-at-loc ed startloc)]
    (cond
     (contains? (pair-chars :close) c) (notifos/set-msg! "Invalid starting point")
     (contains? (pair-chars :open) c) (when-let [match-loc (find-match ed startloc c)]
                                        (editor/replace ed startloc (editor/adjust-loc match-loc 1) ""))
     :else (when-let [[char loc] (first (find-unbalanced ed startloc (pair-chars :open) -1))]
             (when-let [match-loc (find-match ed startloc char)]
               (editor/replace ed startloc match-loc ""))))))


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
     (comment-or-string? ed loc) (notifos/set-msg! "Illegal context: not available in comment or string")
     (char->pair c) (when-let [match-loc (find-match ed loc c)]
                      (wrap-region ed (sort-by #(editor/pos->index ed %) [loc match-loc]) p))
     :else (let [token (editor/->token ed (editor/adjust-loc loc 1))
                 startloc {:line (:line loc) :ch (:start token)}
                 endloc (editor/adjust-loc {:line (:line loc) :ch (:end token)} -1)]
             (wrap-region ed [startloc endloc] p)))))

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


(defn paredit-test1 [ed]
  (paredit-kill ed))

(defn paredit-test [ed]
  (apply str (map (fn [[x y]] x) (find-unbalanced ed (editor/->cursor ed) (pair-chars :close) 1))))

(defn paredit-test2 [ed]
  (apply str (map (fn [[x y] x]) (locate-chars ed (editor/->cursor ed) (pair-chars :open) -1))))

(cmd/command {:command :paredit-plus.test
              :desc "Paredit Plus: Test (DO NOT USE, FOR DEV ONLY)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (js/console.log (paredit-test ed))))})

;@cmd/manager
