if(!lt.util.load.provided_QMARK_('lt.plugins.paredit-plus')) {
goog.provide('lt.plugins.paredit_plus');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.ojbs.console');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.ojbs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.paredit_plus.pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.Keyword(null,"open","open",1017321916),"(",new cljs.core.Keyword(null,"close","close",1108660586),")"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"open","open",1017321916),"{",new cljs.core.Keyword(null,"close","close",1108660586),"}"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"open","open",1017321916),"\"",new cljs.core.Keyword(null,"close","close",1108660586),"\""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.Keyword(null,"open","open",1017321916),"[",new cljs.core.Keyword(null,"close","close",1108660586),"]"], null)], null);
lt.plugins.paredit_plus.pair_chars = (function pair_chars(t){return cljs.core.set.call(null,cljs.core.map.call(null,t,lt.plugins.paredit_plus.pairs));
});
lt.plugins.paredit_plus.char__GT_pair = (function char__GT_pair(c){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (m){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(m),c)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(m),c));
}),lt.plugins.paredit_plus.pairs));
});
lt.plugins.paredit_plus.char_type = (function char_type(p,c){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p),c))
{return new cljs.core.Keyword(null,"open","open",1017321916);
} else
{return new cljs.core.Keyword(null,"close","close",1108660586);
}
});
lt.plugins.paredit_plus.type__GT_dir = (function type__GT_dir(t){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916),t))
{return 1;
} else
{return -1;
}
});
lt.plugins.paredit_plus.opposite_char = (function opposite_char(c){var temp__4092__auto__ = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_(temp__4092__auto__))
{var p = temp__4092__auto__;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p),c))
{return new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p);
} else
{return new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p);
}
} else
{return null;
}
});
lt.plugins.paredit_plus.char_at_loc = (function char_at_loc(ed,loc){var l = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));var c = cljs.core.get.call(null,l,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc));return c;
});
lt.plugins.paredit_plus.comment_or_string_QMARK_ = (function comment_or_string_QMARK_(ed,loc){var temp__4090__auto__ = lt.objs.editor.__GT_token_type.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));if(cljs.core.truth_(temp__4090__auto__))
{var tokentype = temp__4090__auto__;var or__7800__auto__ = lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment-form");if(cljs.core.truth_(or__7800__auto__))
{return or__7800__auto__;
} else
{var or__7800__auto____$1 = lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");if(cljs.core.truth_(or__7800__auto____$1))
{return or__7800__auto____$1;
} else
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"string");
}
}
} else
{return false;
}
});
lt.plugins.paredit_plus.index__GT_pos = (function index__GT_pos(ed,i){return lt.objs.editor.__GT_cm_ed.call(null,ed).posFromIndex(i);
});
lt.plugins.paredit_plus.find_pos_h = (function() {
var find_pos_h = null;
var find_pos_h__3 = (function (ed,loc,amount){return find_pos_h.call(null,ed,loc,amount,new cljs.core.Keyword(null,"char","char",1016956616),false);
});
var find_pos_h__5 = (function (ed,loc,amount,unit,vis_QMARK_){var pos = lt.objs.editor.__GT_cm_ed.call(null,ed).findPosH(cljs.core.clj__GT_js.call(null,loc),amount,cljs.core.name.call(null,unit),vis_QMARK_);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),pos.line,new cljs.core.Keyword(null,"ch","ch",1013907415),pos.ch], null);
});
find_pos_h = function(ed,loc,amount,unit,vis_QMARK_){
switch(arguments.length){
case 3:
return find_pos_h__3.call(this,ed,loc,amount);
case 5:
return find_pos_h__5.call(this,ed,loc,amount,unit,vis_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_pos_h.cljs$core$IFn$_invoke$arity$3 = find_pos_h__3;
find_pos_h.cljs$core$IFn$_invoke$arity$5 = find_pos_h__5;
return find_pos_h;
})()
;
lt.plugins.paredit_plus.wrap_region = (function wrap_region(p__9307,p__9308){var vec__9311 = p__9307;var start_loc = cljs.core.nth.call(null,vec__9311,0,null);var end_loc = cljs.core.nth.call(null,vec__9311,1,null);var vec__9312 = p__9308;var open = cljs.core.nth.call(null,vec__9312,0,null);var close = cljs.core.nth.call(null,vec__9312,1,null);return null;
});
lt.plugins.paredit_plus.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,p__9313){var vec__9315 = p__9313;var open = cljs.core.nth.call(null,vec__9315,0,null);var close = cljs.core.nth.call(null,vec__9315,1,null);var loc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comment or string");
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.char__GT_pair.call(null,c)))
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
lt.plugins.paredit_plus.find_match = (function find_match(ed,startloc,c){var temp__4092__auto__ = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_(temp__4092__auto__))
{var p = temp__4092__auto__;var type = lt.plugins.paredit_plus.char_type.call(null,p,c);var pair_type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p);var dir = lt.plugins.paredit_plus.type__GT_dir.call(null,type);var opposite = lt.plugins.paredit_plus.opposite_char.call(null,c);var loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,startloc,dir);var stack = 0;while(true){
var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,loc,dir);var cur_char = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc)))
{{
var G__9316 = next_loc;
var G__9317 = stack;
loc = G__9316;
stack = G__9317;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cur_char,c))
{{
var G__9318 = next_loc;
var G__9319 = (stack + 1);
loc = G__9318;
stack = G__9319;
continue;
}
} else
{if(cljs.core._EQ_.call(null,cur_char,opposite))
{if(cljs.core._EQ_.call(null,0,stack))
{return loc;
} else
{{
var G__9320 = next_loc;
var G__9321 = (stack - 1);
loc = G__9320;
stack = G__9321;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,next_loc,loc))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9322 = next_loc;
var G__9323 = stack;
loc = G__9322;
stack = G__9323;
continue;
}
} else
{return null;
}
}
}
}
}
break;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_test1 = (function paredit_test1(ed){return lt.plugins.paredit_plus.find_match.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),101,new cljs.core.Keyword(null,"ch","ch",1013907415),12], null),"(");
});
lt.plugins.paredit_plus.paredit_test = (function paredit_test(ed){return lt.objs.editor.__GT_token_type.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),102,new cljs.core.Keyword(null,"ch","ch",1013907415),35], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.test","paredit-plus.test",2146738870),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Test",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return console.log(lt.plugins.paredit_plus.paredit_test.call(null,ed));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=paredit-plus_compiled.js.map