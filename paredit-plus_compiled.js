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
lt.plugins.paredit_plus.comment_BAR_string_BAR_char_QMARK_ = (function comment_BAR_string_BAR_char_QMARK_(ed,loc,allow_strings_QMARK_){var temp__4090__auto__ = lt.objs.editor.__GT_token_type.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));if(cljs.core.truth_(temp__4090__auto__))
{var tokentype = temp__4090__auto__;if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment-form")))
{return false;
} else
{if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment")))
{return true;
} else
{if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"char")))
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
}
} else
{return false;
}
});
lt.plugins.paredit_plus.index__GT_pos = (function index__GT_pos(ed,i){return lt.objs.editor.__GT_cm_ed.call(null,ed).posFromIndex(i);
});
lt.plugins.paredit_plus.loc_compare_fn = (function loc_compare_fn(f){return (function() { 
var G__13328__delegate = function (ed,locs){return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__13254_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__13254_SHARP_);
}),locs));
};
var G__13328 = function (ed,var_args){
var locs = null;if (arguments.length > 1) {
  locs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13328__delegate.call(this,ed,locs);};
G__13328.cljs$lang$maxFixedArity = 1;
G__13328.cljs$lang$applyTo = (function (arglist__13329){
var ed = cljs.core.first(arglist__13329);
var locs = cljs.core.rest(arglist__13329);
return G__13328__delegate(ed,locs);
});
G__13328.cljs$core$IFn$_invoke$arity$variadic = G__13328__delegate;
return G__13328;
})()
;
});
lt.plugins.paredit_plus.loc_LT_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._LT_);
lt.plugins.paredit_plus.loc_GT_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._GT_);
lt.plugins.paredit_plus.loc_GT__EQ_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._GT__EQ_);
lt.plugins.paredit_plus.loc_LT__EQ_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._LT__EQ_);
lt.plugins.paredit_plus.escaped_char_QMARK_ = (function escaped_char_QMARK_(ed,loc){var loc__$1 = lt.objs.editor.adjust_loc.call(null,loc,-1);var result = 0;while(true){
var vec__13256 = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"line","line",1017226086)).call(null,loc__$1);var ch = cljs.core.nth.call(null,vec__13256,0,null);var line = cljs.core.nth.call(null,vec__13256,1,null);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc__$1);if((ch < 0))
{return cljs.core.odd_QMARK_.call(null,result);
} else
{if(cljs.core._EQ_.call(null,"\\",c))
{{
var G__13330 = lt.objs.editor.adjust_loc.call(null,loc__$1,-1);
var G__13331 = (result + 1);
loc__$1 = G__13330;
result = G__13331;
continue;
}
} else
{return cljs.core.odd_QMARK_.call(null,result);
}
}
break;
}
});
lt.plugins.paredit_plus.escapes_char_QMARK_ = (function escapes_char_QMARK_(ed,loc){if(cljs.core.truth_((function (){var and__7799__auto__ = cljs.core._EQ_.call(null,"\\",lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc));if(and__7799__auto__)
{var and__7799__auto____$1 = !(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,loc));if(and__7799__auto____$1)
{return lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));
} else
{return and__7799__auto____$1;
}
} else
{return and__7799__auto__;
}
})()))
{return true;
} else
{return false;
}
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
var token_type = lt.objs.editor.__GT_token_type.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,loc,lt.plugins.paredit_plus.dir__GT_int.call(null,dir));if(cljs.core.truth_((function (){var and__7799__auto__ = token_type;if(cljs.core.truth_(and__7799__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,token_type,"string");
} else
{return and__7799__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,next_loc,loc))
{var pred__13260 = cljs.core._EQ_;var expr__13261 = dir;if(cljs.core.truth_(pred__13260.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__13261)))
{return loc;
} else
{if(cljs.core.truth_(pred__13260.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__13261)))
{return lt.objs.editor.adjust_loc.call(null,loc,-1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13261)].join('')));
}
}
} else
{{
var G__13332 = next_loc;
var G__13333 = loc;
loc = G__13332;
result = G__13333;
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
{return cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13263_SHARP_){return cljs.core._EQ_.call(null,l,p1__13263_SHARP_);
}),lt.plugins.paredit_plus.string_bounds.call(null,ed,l)));
} else
{var chars = lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cljs.core.PersistentHashSet.fromArray([c,opposite], true),dir);var stack = 0;while(true){
if(cljs.core.empty_QMARK_.call(null,chars))
{return null;
} else
{var vec__13265 = cljs.core.first.call(null,chars);var char$ = cljs.core.nth.call(null,vec__13265,0,null);var loc = cljs.core.nth.call(null,vec__13265,1,null);if(cljs.core._EQ_.call(null,loc,l))
{{
var G__13334 = cljs.core.rest.call(null,chars);
var G__13335 = stack;
chars = G__13334;
stack = G__13335;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,c))
{{
var G__13336 = cljs.core.rest.call(null,chars);
var G__13337 = (stack + 1);
chars = G__13336;
stack = G__13337;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,opposite))
{if(cljs.core._EQ_.call(null,0,stack))
{return loc;
} else
{{
var G__13338 = cljs.core.rest.call(null,chars);
var G__13339 = (stack - 1);
chars = G__13338;
stack = G__13339;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__13340 = cljs.core.rest.call(null,chars);
var G__13341 = stack;
chars = G__13340;
stack = G__13341;
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
lt.plugins.paredit_plus.locate_chars = (function locate_chars(ed,l,cs,dir){var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,l,lt.plugins.paredit_plus.dir__GT_int.call(null,dir));var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l);var pair = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_((function (){var and__7799__auto__ = pair;if(cljs.core.truth_(and__7799__auto__))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"string","string",4416885635));
} else
{return and__7799__auto__;
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
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_BAR_string_BAR_char_QMARK_.call(null,ed,l,false)))
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
lt.plugins.paredit_plus.locate_chars_on_line = (function locate_chars_on_line(ed,l,cs,dir){return cljs.core.take_while.call(null,(function (p__13268){var vec__13269 = p__13268;var c = cljs.core.nth.call(null,vec__13269,0,null);var loc = cljs.core.nth.call(null,vec__13269,1,null);return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
}),lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cs,dir));
});
lt.plugins.paredit_plus.find_unbalanced = (function() {
var find_unbalanced = null;
var find_unbalanced__4 = (function (ed,l,cs,dir){return find_unbalanced.call(null,ed,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cs,dir),l,cs,dir);
});
var find_unbalanced__5 = (function (ed,locations,l,cs,dir){if(!(cljs.core.empty_QMARK_.call(null,locations)))
{var vec__13271 = cljs.core.first.call(null,locations);var c = cljs.core.nth.call(null,vec__13271,0,null);var loc = cljs.core.nth.call(null,vec__13271,1,null);var temp__4090__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4090__auto__))
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
lt.plugins.paredit_plus.pair_boundary = (function pair_boundary(ed,l,dir){var index = lt.objs.editor.pos__GT_index.call(null,ed,l);var find_loc = ((function (index){
return (function (type,pred){var chars = lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,type),dir);var filtered_chars = cljs.core.filter.call(null,((function (chars,index){
return (function (p__13278){var vec__13279 = p__13278;var c = cljs.core.nth.call(null,vec__13279,0,null);var loc = cljs.core.nth.call(null,vec__13279,1,null);var mloc = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);return pred.call(null,lt.objs.editor.pos__GT_index.call(null,ed,mloc),index);
});})(chars,index))
,chars);var temp__4092__auto__ = cljs.core.first.call(null,filtered_chars);if(cljs.core.truth_(temp__4092__auto__))
{var vec__13280 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13280,0,null);var loc = cljs.core.nth.call(null,vec__13280,1,null);return loc;
} else
{return null;
}
});})(index))
;var pred__13281 = cljs.core._EQ_;var expr__13282 = dir;if(cljs.core.truth_(pred__13281.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__13282)))
{return find_loc.call(null,new cljs.core.Keyword(null,"close","close",1108660586),cljs.core._LT__EQ_);
} else
{if(cljs.core.truth_(pred__13281.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__13282)))
{return find_loc.call(null,new cljs.core.Keyword(null,"open","open",1017321916),cljs.core._GT__EQ_);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13282)].join('')));
}
}
});
lt.plugins.paredit_plus.pair_bounds = (function pair_bounds(ed,l){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.paredit_plus.pair_boundary.call(null,ed,l,new cljs.core.Keyword(null,"backward","backward",3135881045)),lt.plugins.paredit_plus.pair_boundary.call(null,ed,l,new cljs.core.Keyword(null,"forward","forward",4631725623))], null);
});
lt.plugins.paredit_plus.move_cursor_along_pair = (function move_cursor_along_pair(ed,l,dir,side){var loc = lt.plugins.paredit_plus.pair_boundary.call(null,ed,l,dir);var adjustment = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),0,new cljs.core.Keyword(null,"after","after",1106639182),1], null);return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,side.call(null,adjustment)));
});
lt.plugins.paredit_plus.paredit_kill = (function paredit_kill(ed){var startloc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,startloc);var all_pair_chars = clojure.set.union.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)));if(cljs.core.contains_QMARK_.call(null,all_pair_chars,c))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,startloc,c);if(cljs.core.truth_(temp__4092__auto__))
{var matchloc = temp__4092__auto__;if((lt.objs.editor.pos__GT_index.call(null,ed,matchloc) > lt.objs.editor.pos__GT_index.call(null,ed,startloc)))
{return lt.objs.editor.replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,matchloc,1),"");
} else
{return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,startloc,1),matchloc,"");
}
} else
{return null;
}
} else
{var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc);var chars = cljs.core.take_while.call(null,((function (line){
return (function (p__13294){var vec__13295 = p__13294;var c__$1 = cljs.core.nth.call(null,vec__13295,0,null);var loc = cljs.core.nth.call(null,vec__13295,1,null);return cljs.core._EQ_.call(null,line,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
});})(line))
,lt.plugins.paredit_plus.locate_chars.call(null,ed,startloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.empty_QMARK_.call(null,chars))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.kill-line","editor.kill-line",891766068));
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,startloc,-1));
}));
} else
{var temp__4090__auto__ = cljs.core.some.call(null,(function (p__13296){var vec__13297 = p__13296;var c__$1 = cljs.core.nth.call(null,vec__13297,0,null);var loc = cljs.core.nth.call(null,vec__13297,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.paredit_plus.loc_GT_.call(null,ed,startloc,mloc)))
{return loc;
} else
{return null;
}
} else
{return null;
}
}),cljs.core.filter.call(null,(function (p__13298){var vec__13299 = p__13298;var c__$1 = cljs.core.nth.call(null,vec__13299,0,null);var _ = cljs.core.nth.call(null,vec__13299,1,null);return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c__$1);
}),chars));if(cljs.core.truth_(temp__4090__auto__))
{var kl = temp__4090__auto__;return lt.objs.editor.replace.call(null,ed,startloc,kl,"");
} else
{var temp__4090__auto____$1 = cljs.core.some.call(null,(function (p__13300){var vec__13301 = p__13300;var c__$1 = cljs.core.nth.call(null,vec__13301,0,null);var loc = cljs.core.nth.call(null,vec__13301,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc) > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc)))
{return mloc;
} else
{return null;
}
} else
{return null;
}
}),cljs.core.filter.call(null,(function (p__13302){var vec__13303 = p__13302;var c__$1 = cljs.core.nth.call(null,vec__13303,0,null);var _ = cljs.core.nth.call(null,vec__13303,1,null);return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),c__$1);
}),chars));if(cljs.core.truth_(temp__4090__auto____$1))
{var kl = temp__4090__auto____$1;return lt.objs.editor.replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,kl,1),"");
} else
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.kill-line","editor.kill-line",891766068));
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,startloc,-1));
}));
}
}
}
}
});
lt.plugins.paredit_plus.wrap_region = (function wrap_region(ed,p__13304,p){var vec__13306 = p__13304;var startloc = cljs.core.nth.call(null,vec__13306,0,null);var endloc = cljs.core.nth.call(null,vec__13306,1,null);return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,endloc,1),new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p));
return lt.objs.editor.replace.call(null,ed,startloc,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p));
}));
});
lt.plugins.paredit_plus.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,p){var loc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{var bounds = lt.objs.editor.selection_bounds.call(null,ed);return lt.plugins.paredit_plus.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(bounds)], null),p);
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_BAR_string_BAR_char_QMARK_.call(null,ed,loc,true)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comments or escaped char");
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_BAR_string_BAR_char_QMARK_.call(null,ed,loc,false)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.string_bounds.call(null,ed,loc);if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,bounds,p);
} else
{return null;
}
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.char__GT_pair.call(null,c)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto__))
{var match_loc = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,cljs.core.sort_by.call(null,(function (p1__13307_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__13307_SHARP_);
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
{var vec__13309 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13309,0,null);var loc = cljs.core.nth.call(null,vec__13309,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
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
{var vec__13314 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13314,0,null);var loc = cljs.core.nth.call(null,vec__13314,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var match_loc = temp__4092__auto____$1;var pred__13315 = cljs.core._EQ_;var expr__13316 = dir;if(cljs.core.truth_(pred__13315.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__13316)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,match_loc,lt.objs.editor.__GT_cursor.call(null,ed),"");
}));
} else
{if(cljs.core.truth_(pred__13315.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__13316)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,match_loc,lt.objs.editor.adjust_loc.call(null,match_loc,1),"");
}));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13316)].join('')));
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
{var vec__13319 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13319,0,null);var loc = cljs.core.nth.call(null,vec__13319,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
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
lt.plugins.paredit_plus.paredit_join_sexps = (function paredit_join_sexps(ed){var l = lt.objs.editor.__GT_cursor.call(null,ed);var vec__13322 = cljs.core.first.call(null,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"backward","backward",3135881045)));var lc = cljs.core.nth.call(null,vec__13322,0,null);var ll = cljs.core.nth.call(null,vec__13322,1,null);var vec__13323 = cljs.core.first.call(null,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),new cljs.core.Keyword(null,"forward","forward",4631725623)));var rc = cljs.core.nth.call(null,vec__13323,0,null);var rl = cljs.core.nth.call(null,vec__13323,1,null);if(cljs.core.truth_((function (){var and__7799__auto__ = lc;if(cljs.core.truth_(and__7799__auto__))
{return rc;
} else
{return and__7799__auto__;
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
lt.plugins.paredit_plus.paredit_forward_delete = (function paredit_forward_delete(ed){var loc = lt.objs.editor.__GT_cursor.call(null,ed);var nloc = lt.objs.editor.adjust_loc.call(null,loc,1);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);var nc = lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));var pc = lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,-1));var pair = lt.plugins.paredit_plus.char__GT_pair.call(null,c);var tokentype = lt.objs.editor.__GT_token_type.call(null,ed,nloc);if(cljs.core.truth_((function (){var and__7799__auto__ = tokentype;if(cljs.core.truth_(and__7799__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");
} else
{return and__7799__auto__;
}
})()))
{if(cljs.core.truth_(nc))
{return lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
} else
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,-1),"");
}));
}
} else
{if(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,loc))
{return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1),lt.objs.editor.adjust_loc.call(null,loc,-1),"");
} else
{if(lt.plugins.paredit_plus.escapes_char_QMARK_.call(null,ed,loc))
{return lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,2),"");
} else
{if(cljs.core.truth_(pair))
{if((cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c)) && (!(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,loc))) && (cljs.core._EQ_.call(null,pc,lt.plugins.paredit_plus.opposite_char.call(null,c))))
{return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1),lt.objs.editor.adjust_loc.call(null,loc,-1),"");
} else
{if(cljs.core.truth_(nc))
{return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,1));
} else
{return null;
}
}
} else
{if(cljs.core.truth_(nc))
{return lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,-1),"");
}));
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.paredit_plus.paredit_backward_delete = (function paredit_backward_delete(ed){var loc = lt.objs.editor.__GT_cursor.call(null,ed);var ploc = lt.objs.editor.adjust_loc.call(null,loc,-1);var nloc = lt.objs.editor.adjust_loc.call(null,loc,1);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc);var pc = lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,loc,-1));var tokentype = lt.objs.editor.__GT_token_type.call(null,ed,loc);if(cljs.core.not.call(null,pc))
{return lt.objs.editor.replace.call(null,ed,loc,lt.plugins.paredit_plus.find_pos_h.call(null,ed,loc,-1),"");
} else
{if(cljs.core.truth_((function (){var and__7799__auto__ = tokentype;if(cljs.core.truth_(and__7799__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");
} else
{return and__7799__auto__;
}
})()))
{return lt.objs.editor.replace.call(null,ed,loc,ploc,"");
} else
{if(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,ploc))
{return lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,-2),"");
} else
{if(lt.plugins.paredit_plus.escapes_char_QMARK_.call(null,ed,ploc))
{return lt.objs.editor.replace.call(null,ed,nloc,ploc,"");
} else
{if(cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),pc))
{if(cljs.core._EQ_.call(null,c,lt.plugins.paredit_plus.opposite_char.call(null,pc)))
{return lt.objs.editor.replace.call(null,ed,nloc,ploc,"");
} else
{return lt.objs.editor.move_cursor.call(null,ed,ploc);
}
} else
{if(cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),pc))
{return lt.objs.editor.move_cursor.call(null,ed,ploc);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.objs.editor.replace.call(null,ed,loc,ploc,"");
} else
{return null;
}
}
}
}
}
}
}
});
lt.plugins.paredit_plus.paredit_duplicate = (function paredit_duplicate(ed){var startloc = lt.objs.editor.__GT_cursor.call(null,ed);var startindex = lt.objs.editor.pos__GT_index.call(null,ed,startloc);var all_pair_chars = clojure.set.union.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)));var endloc = (function (){var startloc__$1 = startloc;var chars = lt.plugins.paredit_plus.locate_chars_on_line.call(null,ed,startloc__$1,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623));while(true){
if(!(cljs.core.empty_QMARK_.call(null,chars)))
{var vec__13325 = cljs.core.first.call(null,chars);var c = cljs.core.nth.call(null,vec__13325,0,null);var loc = cljs.core.nth.call(null,vec__13325,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;var sline = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);var mline = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc);var mindex = lt.objs.editor.pos__GT_index.call(null,ed,mloc);if((mindex < startindex))
{return loc;
} else
{if((mline > sline))
{{
var G__13342 = mloc;
var G__13343 = lt.plugins.paredit_plus.locate_chars_on_line.call(null,ed,mloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623));
startloc__$1 = G__13342;
chars = G__13343;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__13344 = startloc__$1;
var G__13345 = cljs.core.rest.call(null,chars);
startloc__$1 = G__13344;
chars = G__13345;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc__$1)),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc__$1)], null);
}
break;
}
})();var text_to_dupl = lt.objs.editor.range.call(null,ed,startloc,endloc);return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,startloc,endloc,[cljs.core.str(text_to_dupl),cljs.core.str("\n"),cljs.core.str(text_to_dupl)].join(''));
lt.objs.editor.move_cursor.call(null,ed,lt.plugins.paredit_plus.find_pos_h.call(null,ed,startloc,(cljs.core.count.call(null,text_to_dupl) + 1)));
return lt.objs.editor.indent_lines.call(null,ed,startloc,lt.plugins.paredit_plus.find_pos_h.call(null,ed,endloc,(cljs.core.count.call(null,text_to_dupl) + 1)));
}));
});
lt.plugins.paredit_plus.delete_pair_contents = (function delete_pair_contents(ed,l){var vec__13327 = lt.plugins.paredit_plus.pair_bounds.call(null,ed,l);var start = cljs.core.nth.call(null,vec__13327,0,null);var end = cljs.core.nth.call(null,vec__13327,1,null);return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,start,1),end,"");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.new-line-before-pair-close","paredit-plus.new-line-before-pair-close",2198723115),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: New line before pair close",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.operation.call(null,ed,(function (){lt.plugins.paredit_plus.move_cursor_along_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623),new cljs.core.Keyword(null,"before","before",3915985649));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.new-line-indent","editor.new-line-indent",3360183529));
}));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.new-line-after-pair-close","paredit-plus.new-line-after-pair-close",4241192482),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: New line after pair close",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.operation.call(null,ed,(function (){lt.plugins.paredit_plus.move_cursor_along_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623),new cljs.core.Keyword(null,"after","after",1106639182));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.new-line-indent","editor.new-line-indent",3360183529));
}));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.duplicate","paredit-plus.duplicate",4489000203),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Duplicate",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_duplicate.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.delete-pair-contents","paredit-plus.delete-pair-contents",935852591),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Delete contents inside current pair",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.delete_pair_contents.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.forward-delete","paredit-plus.forward-delete",1438698839),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Forward delete",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_forward_delete.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.backward-delete","paredit-plus.backward-delete",3592606805),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Backward delete",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_backward_delete.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.join-sexps","paredit-plus.join-sexps",3200795434),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Join sexps",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_join_sexps.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.split-sexp","paredit-plus.split-sexp",2384054337),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Split sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_split_sexp.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp-killing-forward","paredit-plus.splice-sexp-killing-forward",1545227754),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp killing forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp_kill.call(null,ed,new cljs.core.Keyword(null,"forward","forward",4631725623));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp-killing-backward","paredit-plus.splice-sexp-killing-backward",1943727618),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp killing backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp_kill.call(null,ed,new cljs.core.Keyword(null,"backward","backward",3135881045));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp","paredit-plus.splice-sexp",4170175995),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-round","paredit-plus.wrap-round",4530489071),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap round",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"("));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-square","paredit-plus.wrap-square",2684315776),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap square",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"["));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-curly","paredit-plus.wrap-curly",4516812078),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap curly",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"{"));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-quote","paredit-plus.wrap-quote",4529738717),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap quote",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.plugins.paredit_plus.char__GT_pair.call(null,"\""));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=paredit-plus_compiled.js.map