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

(defn wrap-region [[start-loc end-loc] [open close]]
  nil)

(defn paredit-wrap-with-pair [ed [open close]]
  (let [loc (editor/->cursor ed)
        c (char-at-loc ed loc)]
    (cond
     (comment-or-string? ed loc) (notifos/set-msg! "Illegal context: not available in comment or string")
     (char->pair c) (notifos/set-msg! "Character in pair"))))

(cmd/command {:command :paredit-plus.wrap.round
              :desc "Paredit Plus: Wrap Round"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-wrap-with-pair ed [\( \)])))})

;; -------------------------------- TEST AREA -----------------------------------------
(defn find-match [ed startloc c]
  (when-let [p (char->pair c)]
    (let [type (char-type p c)
          pair-type (:type p)
          dir (type->dir type)
          opposite (opposite-char c)]
      (loop [loc (find-pos-h ed startloc dir)
             stack 0]
        (let [next-loc (find-pos-h ed loc dir)
              cur-char (char-at-loc ed loc)]
          (cond
           (comment-or-string? ed loc) (recur next-loc stack)
           (= cur-char c) (recur next-loc (inc stack))
           (= cur-char opposite) (if (= 0 stack)
                                   loc
                                   (recur next-loc (dec stack)))
           (= next-loc loc) nil
           :else (recur next-loc stack)))))))

(defn paredit-test1 [ed]
  (find-match ed {:line 101 :ch 12} "("))

(defn paredit-test [ed]
  (editor/->token-type ed {:line 102 :ch 35}))

(cmd/command {:command :paredit-plus.test
              :desc "Paredit Plus: Test"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (js/console.log (paredit-test ed))))})

;@cmd/manager
