if(!lt.util.load.provided_QMARK_('lt.plugins.paredit-plus')) {
goog.provide('lt.plugins.paredit_plus');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.paredit_plus.pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.Keyword(null,"open","open",1017321916),"(",new cljs.core.Keyword(null,"close","close",1108660586),")"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"open","open",1017321916),"{",new cljs.core.Keyword(null,"close","close",1108660586),"}"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"open","open",1017321916),"\"",new cljs.core.Keyword(null,"close","close",1108660586),"\""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.Keyword(null,"open","open",1017321916),"[",new cljs.core.Keyword(null,"close","close",1108660586),"]"], null)], null);
lt.plugins.paredit_plus.directions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward","backward",3135881045),-1,new cljs.core.Keyword(null,"forward","forward",4631725623),1], null);
lt.plugins.paredit_plus.dir__GT_int = (function dir__GT_int(dir){return cljs.core.get.call(null,lt.plugins.paredit_plus.directions,dir);
});
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
{return new cljs.core.Keyword(null,"forward","forward",4631725623);
} else
{return new cljs.core.Keyword(null,"backward","backward",3135881045);
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
lt.plugins.paredit_plus.comment_or_string_QMARK_ = (function comment_or_string_QMARK_(ed,loc,allow_strings_QMARK_){var temp__4090__auto__ = lt.objs.editor.__GT_token_type.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));if(cljs.core.truth_(temp__4090__auto__))
{var tokentype = temp__4090__auto__;if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment-form")))
{return false;
} else
{if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment")))
{return true;
} else
{if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"string")))
{if(cljs.core.truth_(allow_strings_QMARK_))
{return null;
} else
{return true;
}
} else
{return null;
}
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
lt.plugins.paredit_plus.string_boundary = (function string_boundary(ed,l,dir){var loc = l;var result = null;while(true){
var token_type = lt.objs.editor.__GT_token_type.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,loc,lt.plugins.paredit_plus.dir__GT_int.call(null,dir));if(cljs.core.truth_((function (){var and__7788__auto__ = token_type;if(cljs.core.truth_(and__7788__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,token_type,"string");
} else
{return and__7788__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,next_loc,loc))
{var pred__9249 = cljs.core._EQ_;var expr__9250 = dir;if(cljs.core.truth_(pred__9249.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__9250)))
{return loc;
} else
{if(cljs.core.truth_(pred__9249.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__9250)))
{return lt.objs.editor.adjust_loc.call(null,loc,-1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9250)].join('')));
}
}
} else
{{
var G__9279 = next_loc;
var G__9280 = loc;
loc = G__9279;
result = G__9280;
continue;
}
}
} else
{return result;
}
break;
}
});
lt.plugins.paredit_plus.string_bounds = (function string_bounds(ed,l){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.paredit_plus.string_boundary.call(null,ed,l,new cljs.core.Keyword(null,"backward","backward",3135881045)),lt.plugins.paredit_plus.string_boundary.call(null,ed,l,new cljs.core.Keyword(null,"forward","forward",4631725623))], null);
});
lt.plugins.paredit_plus.find_match = (function find_match(ed,l,c){var temp__4092__auto__ = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_(temp__4092__auto__))
{var p = temp__4092__auto__;var pair_type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p);var type = lt.plugins.paredit_plus.char_type.call(null,p,c);var dir = lt.plugins.paredit_plus.type__GT_dir.call(null,type);var opposite = lt.plugins.paredit_plus.opposite_char.call(null,c);if(cljs.core._EQ_.call(null,pair_type,new cljs.core.Keyword(null,"string","string",4416885635)))
{return cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__9252_SHARP_){return cljs.core._EQ_.call(null,l,p1__9252_SHARP_);
}),lt.plugins.paredit_plus.string_bounds.call(null,ed,l)));
} else
{var chars = lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cljs.core.PersistentHashSet.fromArray([c,opposite], true),dir);var stack = 0;while(true){
if(cljs.core.empty_QMARK_.call(null,chars))
{return null;
} else
{var vec__9254 = cljs.core.first.call(null,chars);var char$ = cljs.core.nth.call(null,vec__9254,0,null);var loc = cljs.core.nth.call(null,vec__9254,1,null);if(cljs.core._EQ_.call(null,loc,l))
{{
var G__9281 = cljs.core.rest.call(null,chars);
var G__9282 = stack;
chars = G__9281;
stack = G__9282;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,c))
{{
var G__9283 = cljs.core.rest.call(null,chars);
var G__9284 = (stack + 1);
chars = G__9283;
stack = G__9284;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,opposite))
{if(cljs.core._EQ_.call(null,0,stack))
{return loc;
} else
{{
var G__9285 = cljs.core.rest.call(null,chars);
var G__9286 = (stack - 1);
chars = G__9285;
stack = G__9286;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9287 = cljs.core.rest.call(null,chars);
var G__9288 = stack;
chars = G__9287;
stack = G__9288;
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
}
} else
{return null;
}
});
lt.plugins.paredit_plus.locate_chars = (function locate_chars(ed,l,cs,dir){var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,l,lt.plugins.paredit_plus.dir__GT_int.call(null,dir));var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l);var pair = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_((function (){var and__7788__auto__ = pair;if(cljs.core.truth_(and__7788__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"string","string",4416885635));
} else
{return and__7788__auto__;
}
})()))
{var token = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.adjust_loc.call(null,l,1));var t = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(token);var start = new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token);var end = (new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token) - 1);if((cljs.core._EQ_.call(null,t,"string")) && ((cljs.core._EQ_.call(null,start,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(l))) || (cljs.core._EQ_.call(null,end,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(l)))))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,l], null),locate_chars.call(null,ed,next_loc,cs,dir));
}),null,null));
} else
{return (new cljs.core.LazySeq(null,(function (){return locate_chars.call(null,ed,next_loc,cs,dir);
}),null,null));
}
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,l,false)))
{return (new cljs.core.LazySeq(null,(function (){return locate_chars.call(null,ed,next_loc,cs,dir);
}),null,null));
} else
{if(cljs.core.contains_QMARK_.call(null,cs,c))
{if(cljs.core._EQ_.call(null,next_loc,l))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,l], null),cljs.core.List.EMPTY);
}),null,null));
} else
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,l], null),locate_chars.call(null,ed,next_loc,cs,dir));
}),null,null));
}
} else
{if(cljs.core._EQ_.call(null,next_loc,l))
{return cljs.core.List.EMPTY;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.LazySeq(null,(function (){return locate_chars.call(null,ed,next_loc,cs,dir);
}),null,null));
} else
{return null;
}
}
}
}
}
});
lt.plugins.paredit_plus.find_unbalanced = (function() {
var find_unbalanced = null;
var find_unbalanced__4 = (function (ed,l,cs,dir){return find_unbalanced.call(null,ed,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cs,dir),l,cs,dir);
});
var find_unbalanced__5 = (function (ed,locations,l,cs,dir){if(!(cljs.core.empty_QMARK_.call(null,locations)))
{var vec__9256 = cljs.core.first.call(null,locations);var c = cljs.core.nth.call(null,vec__9256,0,null);var loc = cljs.core.nth.call(null,vec__9256,1,null);var temp__4090__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4090__auto__))
{var matchloc = temp__4090__auto__;if(((lt.plugins.paredit_plus.dir__GT_int.call(null,dir) * lt.objs.editor.pos__GT_index.call(null,ed,matchloc)) < (lt.plugins.paredit_plus.dir__GT_int.call(null,dir) * lt.objs.editor.pos__GT_index.call(null,ed,l))))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,loc], null),find_unbalanced.call(null,ed,cljs.core.rest.call(null,locations),l,cs,dir));
}),null,null));
} else
{return (new cljs.core.LazySeq(null,(function (){return find_unbalanced.call(null,ed,cljs.core.rest.call(null,locations),l,cs,dir);
}),null,null));
}
} else
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,loc], null),find_unbalanced.call(null,ed,cljs.core.rest.call(null,locations),l,cs,dir));
}),null,null));
}
} else
{return cljs.core.List.EMPTY;
}
});
find_unbalanced = function(ed,locations,l,cs,dir){
switch(arguments.length){
case 4:
return find_unbalanced__4.call(this,ed,locations,l,cs);
case 5:
return find_unbalanced__5.call(this,ed,locations,l,cs,dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_unbalanced.cljs$core$IFn$_invoke$arity$4 = find_unbalanced__4;
find_unbalanced.cljs$core$IFn$_invoke$arity$5 = find_unbalanced__5;
return find_unbalanced;
})()
;
lt.plugins.paredit_plus.paredit_kill = (function paredit_kill(ed){var startloc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,startloc);if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"]",null,"}",null], null), null),c))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Invalid starting point");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,startloc,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4090__auto__))
{var vec__9258 = temp__4090__auto__;var char$ = cljs.core.nth.call(null,vec__9258,0,null);var loc = cljs.core.nth.call(null,vec__9258,1,null);return lt.objs.editor.replace.call(null,ed,startloc,loc,"");
} else
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,startloc,c);if(cljs.core.truth_(temp__4092__auto__))
{var match_loc = temp__4092__auto__;return lt.objs.editor.replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,match_loc,1),"");
} else
{return null;
}
}
} else
{return null;
}
}
});
lt.plugins.paredit_plus.wrap_region = (function wrap_region(ed,p__9259,p){var vec__9261 = p__9259;var startloc = cljs.core.nth.call(null,vec__9261,0,null);var endloc = cljs.core.nth.call(null,vec__9261,1,null);return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,endloc,1),new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p));
return lt.objs.editor.replace.call(null,ed,startloc,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p));
}));
});
lt.plugins.paredit_plus.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,p){var loc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{var bounds = lt.objs.editor.selection_bounds.call(null,ed);return lt.plugins.paredit_plus.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(bounds)], null),p);
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc,true)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comment");
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_or_string_QMARK_.call(null,ed,loc,false)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.string_bounds.call(null,ed,loc);if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,bounds,p);
} else
{return null;
}
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.char__GT_pair.call(null,c)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto__))
{var match_loc = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,cljs.core.sort_by.call(null,(function (p1__9262_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__9262_SHARP_);
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
}
});
lt.plugins.paredit_plus.paredit_splice_sexp = (function paredit_splice_sexp(ed){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__9264 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__9264,0,null);var loc = cljs.core.nth.call(null,vec__9264,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var match_loc = temp__4092__auto____$1;return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,match_loc,lt.objs.editor.adjust_loc.call(null,match_loc,1),"");
}));
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_splice_sexp_kill = (function paredit_splice_sexp_kill(ed,dir){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__9269 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__9269,0,null);var loc = cljs.core.nth.call(null,vec__9269,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var match_loc = temp__4092__auto____$1;var pred__9270 = cljs.core._EQ_;var expr__9271 = dir;if(cljs.core.truth_(pred__9270.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__9271)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,match_loc,lt.objs.editor.__GT_cursor.call(null,ed),"");
}));
} else
{if(cljs.core.truth_(pred__9270.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__9271)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,match_loc,lt.objs.editor.adjust_loc.call(null,match_loc,1),"");
}));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9271)].join('')));
}
}
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_split_sexp = (function paredit_split_sexp(ed){var l = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__9274 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__9274,0,null);var loc = cljs.core.nth.call(null,vec__9274,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var match_loc = temp__4092__auto____$1;var p = lt.plugins.paredit_plus.char__GT_pair.call(null,c);var s = [cljs.core.str(new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p))].join('');return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,l,s);
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,l,1));
}));
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_join_sexps = (function paredit_join_sexps(ed){var l = lt.objs.editor.__GT_cursor.call(null,ed);var vec__9277 = cljs.core.first.call(null,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"backward","backward",3135881045)));var lc = cljs.core.nth.call(null,vec__9277,0,null);var ll = cljs.core.nth.call(null,vec__9277,1,null);var vec__9278 = cljs.core.first.call(null,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),new cljs.core.Keyword(null,"forward","forward",4631725623)));var rc = cljs.core.nth.call(null,vec__9278,0,null);var rl = cljs.core.nth.call(null,vec__9278,1,null);if(cljs.core.truth_((function (){var and__7788__auto__ = lc;if(cljs.core.truth_(and__7788__auto__))
{return rc;
} else
{return and__7788__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,lc,lt.plugins.paredit_plus.opposite_char.call(null,rc)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,rl,lt.objs.editor.adjust_loc.call(null,rl,1),"");
lt.objs.editor.replace.call(null,ed,ll,lt.objs.editor.adjust_loc.call(null,ll,1),"");
return lt.objs.editor.indent_lines.call(null,ed,ll,rl,"smart");
}));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Mismatched sexps");
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.join.sexps","paredit-plus.join.sexps",3229424585),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Join Sexps",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_join_sexps.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.split.sexp","paredit-plus.split.sexp",2384977858),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Split Sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_split_sexp.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice.sexp.killing.forward","paredit-plus.splice.sexp.killing.forward",2988854825),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice Sexp Killing Forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp_kill.call(null,ed,new cljs.core.Keyword(null,"forward","forward",4631725623));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice.sexp.killing.backward","paredit-plus.splice.sexp.killing.backward",3746493859),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice Sexp Killing Backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp_kill.call(null,ed,new cljs.core.Keyword(null,"backward","backward",3135881045));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice.sexp","paredit-plus.splice.sexp",4171099516),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice Sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp.call(null,ed);
} else
{return null;
}
})], null));
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
}

//# sourceMappingURL=paredit-plus_compiled.js.map