if(!lt.util.load.provided_QMARK_('lt.plugins.paredit-plus')) {
goog.provide('lt.plugins.paredit_plus');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.ojbs.console');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.ojbs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

lt.plugins.paredit_plus.pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"","\""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null)], null);

lt.plugins.paredit_plus.pairs__GT_set = (function pairs__GT_set(p){return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,p));
});

lt.plugins.paredit_plus.char_in_pairs_QMARK_ = (function() {
var char_in_pairs_QMARK_ = null;
var char_in_pairs_QMARK___1 = (function (c){return char_in_pairs_QMARK_.call(null,lt.plugins.paredit_plus.pairs,c);
});
var char_in_pairs_QMARK___2 = (function (p,c){return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pairs__GT_set.call(null,p),c);
});
char_in_pairs_QMARK_ = function(p,c){
switch(arguments.length){
case 1:
return char_in_pairs_QMARK___1.call(this,p);
case 2:
return char_in_pairs_QMARK___2.call(this,p,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
char_in_pairs_QMARK_.cljs$core$IFn$_invoke$arity$1 = char_in_pairs_QMARK___1;
char_in_pairs_QMARK_.cljs$core$IFn$_invoke$arity$2 = char_in_pairs_QMARK___2;
return char_in_pairs_QMARK_;
})()
;

lt.plugins.paredit_plus.comment_or_string_QMARK_ = (function comment_or_string_QMARK_(ed,loc){var temp__4090__auto__ = lt.objs.editor.__GT_token_type.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var tokentype = temp__4090__auto__;var or__7797__auto__ = lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment-form");if(cljs.core.truth_(or__7797__auto__))
{return or__7797__auto__;
} else
{var or__7797__auto____$1 = lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");if(cljs.core.truth_(or__7797__auto____$1))
{return or__7797__auto____$1;
} else
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"string");
}
}
} else
{return false;
}
});

lt.plugins.paredit_plus.wrap_region = (function wrap_region(p__9236,p__9237){var vec__9240 = p__9236;var start_loc = cljs.core.nth.call(null,vec__9240,0,null);var end_loc = cljs.core.nth.call(null,vec__9240,1,null);var vec__9241 = p__9237;var open = cljs.core.nth.call(null,vec__9241,0,null);var close = cljs.core.nth.call(null,vec__9241,1,null);return null;
});

lt.plugins.paredit_plus.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,p__9242){var vec__9244 = p__9242;var open = cljs.core.nth.call(null,vec__9244,0,null);var close = cljs.core.nth.call(null,vec__9244,1,null);var loc = lt.objs.editor.__GT_cursor.call(null,ed);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc);var line_str = lt.objs.editor.line.call(null,ed,line);var ch_str = cljs.core.get.call(null,line_str,ch);if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comment or string");
} else
{if(lt.plugins.paredit_plus.char_in_pairs_QMARK_.call(null,ch_str))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Character in pair");
} else
{return null;
}
}
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap.round","paredit-plus.wrap.round",4559118222),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap Round",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null));
} else
{return null;
}
})], null));

}

//# sourceMappingURL=
//# sourceMappingURL=paredit-plus_compiled.js.map