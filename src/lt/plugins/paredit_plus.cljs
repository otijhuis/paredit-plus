(ns lt.plugins.paredit-plus
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.context :as ctx]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.ojbs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.objs.statusbar :as status]
            [lt.util.cljs :refer [str-contains?]]))

;(editor/adjust-loc {:line 2 :ch 10} 1)

; editor/->cm-ed
; ctx/->obj :editor

;(tabs/num-tabs)

;(notifos/set-msg! "test\ndfsf\n\ndfsdf\nsfsdf")

;(js/console.log "test")

(def pairs [["(" ")"]
            ["{" "}"]
            ["\"" "\""]
            ["[" "]"]])

(defn pairs->set [p]
  "Create a set of all characters that are part of the pairs"
  (set (apply concat p)))

(defn char-in-pairs?
  ([c]
   (char-in-pairs? pairs c))
  ([p c]
   (contains? (pairs->set p) c)))

(defn comment-or-string? [ed loc]
  "Check wether the character at loc is part of a comment or string"
  (if-let [tokentype (editor/->token-type ed (editor/->cursor ed))]
    (or
      (str-contains? tokentype "comment-form")
      (str-contains? tokentype "comment")
      (str-contains? tokentype "string"))
    false))

(defn wrap-region [[start-loc end-loc] [open close]]
  nil)

(defn paredit-wrap-with-pair [ed [open close]]
  (let [loc (editor/->cursor ed)
        line (:line loc)
        ch (:ch loc)
        line-str (editor/line ed line)
        ch-str (get line-str ch)]
    (cond
     (comment-or-string? ed loc) (notifos/set-msg! "Illegal context: not available in comment or string")
     (char-in-pairs? ch-str) (notifos/set-msg! "Character in pair"))))

(cmd/command {:command :paredit-plus.wrap.round
              :desc "Paredit Plus: Wrap Round"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-wrap-with-pair ed [\( \)])))})


;@cmd/manager
