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
lt.plugins.paredit_plus.pair__GT_set = (function pair__GT_set(p){return cljs.core.set.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"open","open",1017321916),new cljs.core.Keyword(null,"close","close",1108660586)).call(null,p));
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
lt.plugins.paredit_plus.string_dir = (function string_dir(ed,loc){var token = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));var token_end = lt.objs.editor.adjust_loc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null),-1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(token),"string"))
{if((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc) <= new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(token_end)))
{return -1;
} else
{return 1;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.find_match = (function find_match(ed,startloc,c){var temp__4092__auto__ = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_(temp__4092__auto__))
{var p = temp__4092__auto__;var pair_type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p);var type = lt.plugins.paredit_plus.char_type.call(null,p,c);var dir = lt.plugins.paredit_plus.type__GT_dir.call(null,type);var opposite = lt.plugins.paredit_plus.opposite_char.call(null,c);var chars = lt.plugins.paredit_plus.locate_chars.call(null,ed,startloc,cljs.core.PersistentHashSet.fromArray([c,opposite], true),dir);var stack = 0;while(true){
if(cljs.core.empty_QMARK_.call(null,chars))
{return null;
} else
{var vec__9658 = cljs.core.first.call(null,chars);var char$ = cljs.core.nth.call(null,vec__9658,0,null);var loc = cljs.core.nth.call(null,vec__9658,1,null);if(cljs.core._EQ_.call(null,loc,startloc))
{{
var G__9675 = cljs.core.rest.call(null,chars);
var G__9676 = stack;
chars = G__9675;
stack = G__9676;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,c))
{{
var G__9677 = cljs.core.rest.call(null,chars);
var G__9678 = (stack + 1);
chars = G__9677;
stack = G__9678;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,opposite))
{if(cljs.core._EQ_.call(null,0,stack))
{return loc;
} else
{{
var G__9679 = cljs.core.rest.call(null,chars);
var G__9680 = (stack - 1);
chars = G__9679;
stack = G__9680;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9681 = cljs.core.rest.call(null,chars);
var G__9682 = stack;
chars = G__9681;
stack = G__9682;
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
lt.plugins.paredit_plus.locate_chars = (function locate_chars(ed,startloc,cs,dir){return (new cljs.core.LazySeq(null,(function (){var loc = startloc;var results = cljs.core.List.EMPTY;while(true){
var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,loc,dir);var cur_char = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc)))
{{
var G__9683 = next_loc;
var G__9684 = results;
loc = G__9683;
results = G__9684;
continue;
}
} else
{if(cljs.core.contains_QMARK_.call(null,cs,cur_char))
{if(cljs.core._EQ_.call(null,next_loc,loc))
{return cljs.core.reverse.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_char,loc], null),results));
} else
{{
var G__9685 = next_loc;
var G__9686 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_char,loc], null),results);
loc = G__9685;
results = G__9686;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,next_loc,loc))
{return cljs.core.reverse.call(null,results);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9687 = next_loc;
var G__9688 = results;
loc = G__9687;
results = G__9688;
continue;
}
} else
{return null;
}
}
}
}
break;
}
}),null,null));
});
lt.plugins.paredit_plus.find_unbalanced = (function find_unbalanced(ed,startloc,cs,dir){return (new cljs.core.LazySeq(null,(function (){var chars = lt.plugins.paredit_plus.locate_chars.call(null,ed,startloc,cs,dir);var results = cljs.core.List.EMPTY;while(true){
if(!(cljs.core.empty_QMARK_.call(null,chars)))
{var vec__9660 = cljs.core.first.call(null,chars);var c = cljs.core.nth.call(null,vec__9660,0,null);var loc = cljs.core.nth.call(null,vec__9660,1,null);var temp__4090__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4090__auto__))
{var matchloc = temp__4090__auto__;if(((dir * lt.objs.editor.pos__GT_index.call(null,ed,matchloc)) < (dir * lt.objs.editor.pos__GT_index.call(null,ed,startloc))))
{{
var G__9689 = cljs.core.rest.call(null,chars);
var G__9690 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,loc], null),results);
chars = G__9689;
results = G__9690;
continue;
}
} else
{{
var G__9691 = cljs.core.rest.call(null,chars);
var G__9692 = results;
chars = G__9691;
results = G__9692;
continue;
}
}
} else
{{
var G__9693 = cljs.core.rest.call(null,chars);
var G__9694 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,loc], null),results);
chars = G__9693;
results = G__9694;
continue;
}
}
} else
{return cljs.core.reverse.call(null,results);
}
break;
}
}),null,null));
});
lt.plugins.paredit_plus.paredit_kill = (function paredit_kill(ed){var startloc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,startloc);if(cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Invalid starting point");
} else
{if(cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),c))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,startloc,c);if(cljs.core.truth_(temp__4092__auto__))
{var match_loc = temp__4092__auto__;return lt.objs.editor.replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,match_loc,1),"");
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,startloc,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),-1));if(cljs.core.truth_(temp__4092__auto__))
{var vec__9662 = temp__4092__auto__;var char$ = cljs.core.nth.call(null,vec__9662,0,null);var loc = cljs.core.nth.call(null,vec__9662,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,startloc,char$);if(cljs.core.truth_(temp__4092__auto____$1))
{var match_loc = temp__4092__auto____$1;return lt.objs.editor.replace.call(null,ed,startloc,match_loc,"");
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
}
}
});
lt.plugins.paredit_plus.wrap_region = (function wrap_region(ed,p__9663,p){var vec__9665 = p__9663;var startloc = cljs.core.nth.call(null,vec__9665,0,null);var endloc = cljs.core.nth.call(null,vec__9665,1,null);return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,endloc,1),new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p));
return lt.objs.editor.replace.call(null,ed,startloc,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p));
}));
});
lt.plugins.paredit_plus.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,p){var loc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{var bounds = lt.objs.editor.selection_bounds.call(null,ed);return lt.plugins.paredit_plus.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(bounds)], null),p);
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comment or string");
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.char__GT_pair.call(null,c)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto__))
{var match_loc = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,cljs.core.sort_by.call(null,(function (p1__9666_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__9666_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,match_loc], null)),p);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var token = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));var startloc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null);var endloc = lt.objs.editor.adjust_loc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null),-1);return lt.plugins.paredit_plus.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [startloc,endloc], null),p);
} else
{return null;
}
}
}
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.kill","paredit-plus.kill",2146474370),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Kill",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_kill.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap.round","paredit-plus.wrap.round",4559118222),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap Round",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"("));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap.square","paredit-plus.wrap.square",3571819457),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap Square",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"["));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap.curly","paredit-plus.wrap.curly",4545441229),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap Curly",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"{"));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap.quotes","paredit-plus.wrap.quotes",3518094363),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap Quotes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"\""));
} else
{return null;
}
})], null));
lt.plugins.paredit_plus.paredit_test1 = (function paredit_test1(ed){return lt.plugins.paredit_plus.paredit_kill.call(null,ed);
});
lt.plugins.paredit_plus.paredit_test = (function paredit_test(ed){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__9669){var vec__9670 = p__9669;var x = cljs.core.nth.call(null,vec__9670,0,null);var y = cljs.core.nth.call(null,vec__9670,1,null);return x;
}),lt.plugins.paredit_plus.find_unbalanced.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),1)));
});
lt.plugins.paredit_plus.paredit_test2 = (function paredit_test2(ed){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__9673,x){var vec__9674 = p__9673;var x__$1 = cljs.core.nth.call(null,vec__9674,0,null);var y = cljs.core.nth.call(null,vec__9674,1,null);return null;
}),lt.plugins.paredit_plus.locate_chars.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),-1)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.test","paredit-plus.test",2146738870),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Test (DO NOT USE, FOR DEV ONLY)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return console.log(lt.plugins.paredit_plus.paredit_test.call(null,ed));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=paredit-plus_compiled.js.map