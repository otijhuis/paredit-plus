##Paredit-Plus for Light Table##

Additional Paredit functionality for Light Table. It aims to add Paredit functions to Light Table which aren't supported (at least not yet) in the already available Paredit plugin.

*While I'm already using it myself it will likely have some rough edges and it definitely needs some cleaning up/refactoring. That said I'd really appreciate feedback and some testing help.
*

##Installation##

Install from the plugin manager within Light Table or clone this repository into your Light Table plugins folder.

##Commands##

###Insert###

**Paredit Plus: New line before pair close**  
**Paredit Plus: New line after pair close**

###Duplicate###

**Paredit Plus: Duplicate**

	// cursor on colon (:)
	{:test "abcd"} => {:test "abcd"
					   :test "abcd"}

###Delete###

**Paredit Plus: Forward delete**  
**Paredit Plus: Backward delete**  
**Paredit Plus: Delete inside current pair**
  
###Split/Join###

**Paredit Plus: Join sexps**  
Different from the emacs version.

	(abc)_(bcd) => (abc_bcd)
	(abc) def_ (ghi) => (abc def_ ghi)

So it joins the first matching sexp surrounding the cursor wether they are directly next to the cursor or not. Personally I don't mind because it doesn't get in the way of the expected behaviour but still adds some extra functionality. It will only work on pairs though. Emacs paredit allows joining of text, this version doesn't.

**Paredit Plus: Split sexp**

	[abc_def] => [abc]_[def]
	(abc_def) => (abc)_(def)

###Splice###

**Paredit Plus: Splice sexp killing forward**  
**Paredit Plus: Splice sexp killing backward**  
**Paredit Plus: Splice sexp**  

###Kill###

**Paredit Plus: Kill**

Currently works only inside forms and on form boundaries, will add extra functionality soon.

	(def [x]  _(test)) => (def [x] _)

###Wrap###

Different from the emacs version. When in the middle of a word it will wrap the whole word, not just from the cursor position till the end of the word. If you're inside a string and use the wrap commands it will wrap the whole string. If you want to wrap a part inside a string you can select the region and then use the wrap commands.

All the wrap commands support selections.

**Paredit Plus: Wrap round**  
	"some_text" => ("some text")
	(something here) => ((something) here) ; with cursor somewhere on the word "something"

**Paredit Plus: Wrap square**  
**Paredit Plus: Wrap curly**  
**Paredit Plus: Wrap quotes**  

##Vim mode##

I have the following added to my *user.behaviors* file for easy usage in vim mode:

		;; The editor tag is applied to all editors
		     :editor [:lt.objs.editor/no-wrap
		              :lt.plugins.vim/activate-vim
		              (:lt.plugins.vim/map-keys {"\\wr" ":ltexec paredit-plus.wrap-round"
		                                         "\\ws" ":ltexec paredit-plus.wrap-square"
		                                         "\\wc" ":ltexec paredit-plus.wrap-curly"
		                                         "\\wq" ":ltexec paredit-plus.wrap-quote"
		                                         "\\bs" ":ltexec paredit-plus.splice-sexp-killing-backward"
		                                         "\\fs" ":ltexec paredit-plus.splice-sexp-killing-forward"})

##Known issues##

- Has problems with strings that start with whitespace. This has to do with a clojure-mode.js bug. Already created an issue for this.
