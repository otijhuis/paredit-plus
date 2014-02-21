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
lt.plugins.paredit_plus.whitespace_QMARK_ = (function whitespace_QMARK_(s){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [" ",null,"\t",null,"\n",null,"\f",null,"\r",null], null), null),s);
});
lt.plugins.paredit_plus.pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.Keyword(null,"open","open",1017321916),"(",new cljs.core.Keyword(null,"close","close",1108660586),")"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"open","open",1017321916),"{",new cljs.core.Keyword(null,"close","close",1108660586),"}"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"open","open",1017321916),"\"",new cljs.core.Keyword(null,"close","close",1108660586),"\""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.Keyword(null,"open","open",1017321916),"[",new cljs.core.Keyword(null,"close","close",1108660586),"]"], null)], null);
lt.plugins.paredit_plus.directions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward","backward",3135881045),-1,new cljs.core.Keyword(null,"forward","forward",4631725623),1], null);
lt.plugins.paredit_plus.dir__GT_int = (function dir__GT_int(dir){return cljs.core.get.call(null,lt.plugins.paredit_plus.directions,dir);
});
lt.plugins.paredit_plus.pair_chars = (function pair_chars(t){if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"all","all",1014000915)))
{return clojure.set.union.call(null,pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)));
} else
{return cljs.core.set.call(null,cljs.core.map.call(null,t,lt.plugins.paredit_plus.pairs));
}
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
var G__13273__delegate = function (ed,locs){return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__13191_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__13191_SHARP_);
}),locs));
};
var G__13273 = function (ed,var_args){
var locs = null;if (arguments.length > 1) {
  locs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13273__delegate.call(this,ed,locs);};
G__13273.cljs$lang$maxFixedArity = 1;
G__13273.cljs$lang$applyTo = (function (arglist__13274){
var ed = cljs.core.first(arglist__13274);
var locs = cljs.core.rest(arglist__13274);
return G__13273__delegate(ed,locs);
});
G__13273.cljs$core$IFn$_invoke$arity$variadic = G__13273__delegate;
return G__13273;
})()
;
});
lt.plugins.paredit_plus.loc_LT_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._LT_);
lt.plugins.paredit_plus.loc_GT_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._GT_);
lt.plugins.paredit_plus.loc_GT__EQ_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._GT__EQ_);
lt.plugins.paredit_plus.loc_LT__EQ_ = lt.plugins.paredit_plus.loc_compare_fn.call(null,cljs.core._LT__EQ_);
lt.plugins.paredit_plus.escaped_char_QMARK_ = (function escaped_char_QMARK_(ed,loc){var loc__$1 = lt.objs.editor.adjust_loc.call(null,loc,-1);var result = 0;while(true){
var vec__13193 = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"line","line",1017226086)).call(null,loc__$1);var ch = cljs.core.nth.call(null,vec__13193,0,null);var line = cljs.core.nth.call(null,vec__13193,1,null);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,loc__$1);if((ch < 0))
{return cljs.core.odd_QMARK_.call(null,result);
} else
{if(cljs.core._EQ_.call(null,"\\",c))
{{
var G__13275 = lt.objs.editor.adjust_loc.call(null,loc__$1,-1);
var G__13276 = (result + 1);
loc__$1 = G__13275;
result = G__13276;
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
{var pred__13197 = cljs.core._EQ_;var expr__13198 = dir;if(cljs.core.truth_(pred__13197.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__13198)))
{return loc;
} else
{if(cljs.core.truth_(pred__13197.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__13198)))
{return lt.objs.editor.adjust_loc.call(null,loc,-1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13198)].join('')));
}
}
} else
{{
var G__13277 = next_loc;
var G__13278 = loc;
loc = G__13277;
result = G__13278;
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
{return cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13200_SHARP_){return cljs.core._EQ_.call(null,l,p1__13200_SHARP_);
}),lt.plugins.paredit_plus.string_bounds.call(null,ed,l)));
} else
{var chars = lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cljs.core.PersistentHashSet.fromArray([c,opposite], true),dir);var stack = 0;while(true){
if(cljs.core.empty_QMARK_.call(null,chars))
{return null;
} else
{var vec__13202 = cljs.core.first.call(null,chars);var char$ = cljs.core.nth.call(null,vec__13202,0,null);var loc = cljs.core.nth.call(null,vec__13202,1,null);if(cljs.core._EQ_.call(null,loc,l))
{{
var G__13279 = cljs.core.rest.call(null,chars);
var G__13280 = stack;
chars = G__13279;
stack = G__13280;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,c))
{{
var G__13281 = cljs.core.rest.call(null,chars);
var G__13282 = (stack + 1);
chars = G__13281;
stack = G__13282;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,opposite))
{if(cljs.core._EQ_.call(null,0,stack))
{return loc;
} else
{{
var G__13283 = cljs.core.rest.call(null,chars);
var G__13284 = (stack - 1);
chars = G__13283;
stack = G__13284;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__13285 = cljs.core.rest.call(null,chars);
var G__13286 = stack;
chars = G__13285;
stack = G__13286;
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
lt.plugins.paredit_plus.locate_chars = (function() {
var locate_chars = null;
var locate_chars__4 = (function (ed,l,cs,dir){var next_loc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,l,lt.plugins.paredit_plus.dir__GT_int.call(null,dir));var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l);var pair = lt.plugins.paredit_plus.char__GT_pair.call(null,c);if(cljs.core.truth_((function (){var and__7799__auto__ = pair;if(cljs.core.truth_(and__7799__auto__))
{return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"string","string",4416885635))) && (cljs.core.contains_QMARK_.call(null,cs,c));
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
var locate_chars__5 = (function (ed,l,cs,dir,include_start_QMARK_){var l__$1 = (cljs.core.truth_(include_start_QMARK_)?l:lt.plugins.paredit_plus.find_pos_h.call(null,ed,l,lt.plugins.paredit_plus.dir__GT_int.call(null,dir)));return locate_chars.call(null,ed,l__$1,cs,dir);
});
locate_chars = function(ed,l,cs,dir,include_start_QMARK_){
switch(arguments.length){
case 4:
return locate_chars__4.call(this,ed,l,cs,dir);
case 5:
return locate_chars__5.call(this,ed,l,cs,dir,include_start_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
locate_chars.cljs$core$IFn$_invoke$arity$4 = locate_chars__4;
locate_chars.cljs$core$IFn$_invoke$arity$5 = locate_chars__5;
return locate_chars;
})()
;
lt.plugins.paredit_plus.locate_chars_on_line = (function locate_chars_on_line(ed,l,cs,dir){return cljs.core.take_while.call(null,(function (p__13205){var vec__13206 = p__13205;var c = cljs.core.nth.call(null,vec__13206,0,null);var loc = cljs.core.nth.call(null,vec__13206,1,null);return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
}),lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cs,dir));
});
lt.plugins.paredit_plus.find_unbalanced = (function() {
var find_unbalanced = null;
var find_unbalanced__3 = (function (ed,l,dir){var cs = (function (){var pred__13211 = cljs.core._EQ_;var expr__13212 = dir;if(cljs.core.truth_(pred__13211.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__13212)))
{return lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{if(cljs.core.truth_(pred__13211.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__13212)))
{return lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13212)].join('')));
}
}
})();return find_unbalanced.call(null,ed,l,cs,dir);
});
var find_unbalanced__4 = (function (ed,l,cs,dir){return find_unbalanced.call(null,ed,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,cs,dir),l,cs,dir);
});
var find_unbalanced__5 = (function (ed,locations,l,cs,dir){if(!(cljs.core.empty_QMARK_.call(null,locations)))
{var vec__13214 = cljs.core.first.call(null,locations);var c = cljs.core.nth.call(null,vec__13214,0,null);var loc = cljs.core.nth.call(null,vec__13214,1,null);var temp__4090__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4090__auto__))
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
case 3:
return find_unbalanced__3.call(this,ed,locations,l);
case 4:
return find_unbalanced__4.call(this,ed,locations,l,cs);
case 5:
return find_unbalanced__5.call(this,ed,locations,l,cs,dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_unbalanced.cljs$core$IFn$_invoke$arity$3 = find_unbalanced__3;
find_unbalanced.cljs$core$IFn$_invoke$arity$4 = find_unbalanced__4;
find_unbalanced.cljs$core$IFn$_invoke$arity$5 = find_unbalanced__5;
return find_unbalanced;
})()
;
lt.plugins.paredit_plus.pair_bounds = (function pair_bounds(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__13216 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13216,0,null);var loc = cljs.core.nth.call(null,vec__13216,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.paredit_plus.find_match.call(null,ed,loc,c),loc], null);
} else
{return null;
}
});
lt.plugins.paredit_plus.move_cursor_along_pair = (function move_cursor_along_pair(ed,l,dir,side){var temp__4092__auto__ = lt.plugins.paredit_plus.pair_bounds.call(null,ed,l);if(cljs.core.truth_(temp__4092__auto__))
{var vec__13218 = temp__4092__auto__;var startloc = cljs.core.nth.call(null,vec__13218,0,null);var endloc = cljs.core.nth.call(null,vec__13218,1,null);var adjustment = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),0,new cljs.core.Keyword(null,"after","after",1106639182),1], null);var dir__GT_loc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forward","forward",4631725623),endloc,new cljs.core.Keyword(null,"backward","backward",3135881045),startloc], null);return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,dir__GT_loc.call(null,dir),side.call(null,adjustment)));
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_kill = (function paredit_kill(ed){var startloc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,startloc);var all_pair_chars = lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915));if(cljs.core.contains_QMARK_.call(null,all_pair_chars,c))
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
return (function (p__13229){var vec__13230 = p__13229;var c__$1 = cljs.core.nth.call(null,vec__13230,0,null);var loc = cljs.core.nth.call(null,vec__13230,1,null);return cljs.core._EQ_.call(null,line,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
});})(line))
,lt.plugins.paredit_plus.locate_chars.call(null,ed,startloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.empty_QMARK_.call(null,chars))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.kill-line","editor.kill-line",891766068));
} else
{var temp__4090__auto__ = cljs.core.some.call(null,(function (p__13231){var vec__13232 = p__13231;var c__$1 = cljs.core.nth.call(null,vec__13232,0,null);var loc = cljs.core.nth.call(null,vec__13232,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.paredit_plus.loc_GT_.call(null,ed,startloc,mloc)))
{return loc;
} else
{return null;
}
} else
{return null;
}
}),cljs.core.filter.call(null,(function (p__13233){var vec__13234 = p__13233;var c__$1 = cljs.core.nth.call(null,vec__13234,0,null);var _ = cljs.core.nth.call(null,vec__13234,1,null);return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c__$1);
}),chars));if(cljs.core.truth_(temp__4090__auto__))
{var kl = temp__4090__auto__;return lt.objs.editor.replace.call(null,ed,startloc,kl,"");
} else
{var temp__4090__auto____$1 = cljs.core.some.call(null,(function (p__13235){var vec__13236 = p__13235;var c__$1 = cljs.core.nth.call(null,vec__13236,0,null);var loc = cljs.core.nth.call(null,vec__13236,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc) > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc)))
{return mloc;
} else
{return null;
}
} else
{return null;
}
}),cljs.core.filter.call(null,(function (p__13237){var vec__13238 = p__13237;var c__$1 = cljs.core.nth.call(null,vec__13238,0,null);var _ = cljs.core.nth.call(null,vec__13238,1,null);return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),c__$1);
}),chars));if(cljs.core.truth_(temp__4090__auto____$1))
{var kl = temp__4090__auto____$1;return lt.objs.editor.replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,kl,1),"");
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.kill-line","editor.kill-line",891766068));
}
}
}
}
});
lt.plugins.paredit_plus.wrap_region = (function() {
var wrap_region = null;
var wrap_region__3 = (function (ed,p__13239,p){var vec__13243 = p__13239;var startloc = cljs.core.nth.call(null,vec__13243,0,null);var endloc = cljs.core.nth.call(null,vec__13243,1,null);return wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [startloc,endloc], null),p,false);
});
var wrap_region__4 = (function (ed,p__13240,p,end_inclusive_QMARK_){var vec__13244 = p__13240;var startloc = cljs.core.nth.call(null,vec__13244,0,null);var endloc = cljs.core.nth.call(null,vec__13244,1,null);return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,endloc,(cljs.core.truth_(end_inclusive_QMARK_)?1:0)),new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p));
return lt.objs.editor.replace.call(null,ed,startloc,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p));
}));
});
wrap_region = function(ed,p__13240,p,end_inclusive_QMARK_){
switch(arguments.length){
case 3:
return wrap_region__3.call(this,ed,p__13240,p);
case 4:
return wrap_region__4.call(this,ed,p__13240,p,end_inclusive_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wrap_region.cljs$core$IFn$_invoke$arity$3 = wrap_region__3;
wrap_region.cljs$core$IFn$_invoke$arity$4 = wrap_region__4;
return wrap_region;
})()
;
lt.plugins.paredit_plus.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,l,p){var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l);if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{var bounds = lt.objs.editor.selection_bounds.call(null,ed);return lt.plugins.paredit_plus.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(bounds)], null),p);
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_BAR_string_BAR_char_QMARK_.call(null,ed,l,true)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comments or escaped char");
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.comment_BAR_string_BAR_char_QMARK_.call(null,ed,l,false)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.string_bounds.call(null,ed,l);if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,bounds,p,true);
} else
{return null;
}
} else
{if(cljs.core.truth_(lt.plugins.paredit_plus.char__GT_pair.call(null,c)))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,l,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;return lt.plugins.paredit_plus.wrap_region.call(null,ed,cljs.core.sort_by.call(null,(function (p1__13245_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__13245_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,mloc], null)),p,true);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var token = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.adjust_loc.call(null,l,1));var startloc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null);var endloc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null);return lt.plugins.paredit_plus.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [startloc,endloc], null),p);
} else
{return null;
}
}
}
}
}
});
lt.plugins.paredit_plus.paredit_splice_sexp = (function paredit_splice_sexp(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__13247 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13247,0,null);var loc = cljs.core.nth.call(null,vec__13247,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,mloc,lt.objs.editor.adjust_loc.call(null,mloc,1),"");
}));
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_splice_sexp_kill = (function paredit_splice_sexp_kill(ed,l,dir){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__13252 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13252,0,null);var loc = cljs.core.nth.call(null,vec__13252,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;var pred__13253 = cljs.core._EQ_;var expr__13254 = dir;if(cljs.core.truth_(pred__13253.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__13254)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,mloc,l,"");
}));
} else
{if(cljs.core.truth_(pred__13253.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__13254)))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,l,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,mloc,lt.objs.editor.adjust_loc.call(null,mloc,1),"");
}));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13254)].join('')));
}
}
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_split_sexp = (function paredit_split_sexp(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__13257 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__13257,0,null);var loc = cljs.core.nth.call(null,vec__13257,1,null);if(cljs.core.truth_(lt.plugins.paredit_plus.find_match.call(null,ed,loc,c)))
{var p = lt.plugins.paredit_plus.char__GT_pair.call(null,c);var s = [cljs.core.str(new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p))].join('');return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,l,s);
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,l,1));
}));
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_join_sexps = (function paredit_join_sexps(ed,l){var vec__13260 = cljs.core.first.call(null,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"backward","backward",3135881045)));var lc = cljs.core.nth.call(null,vec__13260,0,null);var ll = cljs.core.nth.call(null,vec__13260,1,null);var vec__13261 = cljs.core.first.call(null,lt.plugins.paredit_plus.locate_chars.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),new cljs.core.Keyword(null,"forward","forward",4631725623)));var rc = cljs.core.nth.call(null,vec__13261,0,null);var rl = cljs.core.nth.call(null,vec__13261,1,null);if(cljs.core.truth_((function (){var and__7799__auto__ = lc;if(cljs.core.truth_(and__7799__auto__))
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
lt.plugins.paredit_plus.paredit_forward_delete = (function paredit_forward_delete(ed,l){var l__$1 = lt.objs.editor.__GT_cursor.call(null,ed);var nloc = lt.objs.editor.adjust_loc.call(null,l__$1,1);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l__$1);var nc = lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,1));var pc = lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,-1));var pair = lt.plugins.paredit_plus.char__GT_pair.call(null,c);var tokentype = lt.objs.editor.__GT_token_type.call(null,ed,nloc);if(cljs.core.truth_((function (){var and__7799__auto__ = tokentype;if(cljs.core.truth_(and__7799__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");
} else
{return and__7799__auto__;
}
})()))
{if(cljs.core.truth_(nc))
{return lt.objs.editor.replace.call(null,ed,l__$1,lt.objs.editor.adjust_loc.call(null,l__$1,1),"");
} else
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,l__$1,lt.objs.editor.adjust_loc.call(null,l__$1,1),"");
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,-1),"");
}));
}
} else
{if(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,l__$1))
{return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,1),lt.objs.editor.adjust_loc.call(null,l__$1,-1),"");
} else
{if(lt.plugins.paredit_plus.escapes_char_QMARK_.call(null,ed,l__$1))
{return lt.objs.editor.replace.call(null,ed,l__$1,lt.objs.editor.adjust_loc.call(null,l__$1,2),"");
} else
{if(cljs.core.truth_(pair))
{if((cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c)) && (!(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,l__$1))) && (cljs.core._EQ_.call(null,pc,lt.plugins.paredit_plus.opposite_char.call(null,c))))
{return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,1),lt.objs.editor.adjust_loc.call(null,l__$1,-1),"");
} else
{if(cljs.core.truth_(nc))
{return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,1));
} else
{return null;
}
}
} else
{if(cljs.core.truth_(nc))
{return lt.objs.editor.replace.call(null,ed,l__$1,lt.objs.editor.adjust_loc.call(null,l__$1,1),"");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.objs.editor.operation.call(null,ed,(function (){lt.objs.editor.replace.call(null,ed,l__$1,lt.objs.editor.adjust_loc.call(null,l__$1,1),"");
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,-1),"");
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
lt.plugins.paredit_plus.paredit_backward_delete = (function paredit_backward_delete(ed,l){var l__$1 = lt.objs.editor.__GT_cursor.call(null,ed);var ploc = lt.objs.editor.adjust_loc.call(null,l__$1,-1);var nloc = lt.objs.editor.adjust_loc.call(null,l__$1,1);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l__$1);var pc = lt.plugins.paredit_plus.char_at_loc.call(null,ed,lt.objs.editor.adjust_loc.call(null,l__$1,-1));var tokentype = lt.objs.editor.__GT_token_type.call(null,ed,l__$1);if(cljs.core.not.call(null,pc))
{return lt.objs.editor.replace.call(null,ed,l__$1,lt.plugins.paredit_plus.find_pos_h.call(null,ed,l__$1,-1),"");
} else
{if(cljs.core.truth_((function (){var and__7799__auto__ = tokentype;if(cljs.core.truth_(and__7799__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");
} else
{return and__7799__auto__;
}
})()))
{return lt.objs.editor.replace.call(null,ed,l__$1,ploc,"");
} else
{if(lt.plugins.paredit_plus.escaped_char_QMARK_.call(null,ed,ploc))
{return lt.objs.editor.replace.call(null,ed,l__$1,lt.objs.editor.adjust_loc.call(null,l__$1,-2),"");
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
{return lt.objs.editor.replace.call(null,ed,l__$1,ploc,"");
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
lt.plugins.paredit_plus.paredit_duplicate = (function paredit_duplicate(ed,l){var startloc = l;var startindex = lt.objs.editor.pos__GT_index.call(null,ed,startloc);var all_pair_chars = lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915));var endloc = (function (){var startloc__$1 = startloc;var chars = lt.plugins.paredit_plus.locate_chars_on_line.call(null,ed,startloc__$1,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623));while(true){
if(!(cljs.core.empty_QMARK_.call(null,chars)))
{var vec__13263 = cljs.core.first.call(null,chars);var c = cljs.core.nth.call(null,vec__13263,0,null);var loc = cljs.core.nth.call(null,vec__13263,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;var sline = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);var mline = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc);var mindex = lt.objs.editor.pos__GT_index.call(null,ed,mloc);if((mindex < startindex))
{return loc;
} else
{if((mline > sline))
{{
var G__13287 = mloc;
var G__13288 = lt.plugins.paredit_plus.locate_chars_on_line.call(null,ed,mloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623));
startloc__$1 = G__13287;
chars = G__13288;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__13289 = startloc__$1;
var G__13290 = cljs.core.rest.call(null,chars);
startloc__$1 = G__13289;
chars = G__13290;
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
lt.plugins.paredit_plus.delete_pair_contents = (function delete_pair_contents(ed,l){var temp__4092__auto__ = lt.plugins.paredit_plus.pair_bounds.call(null,ed,l);if(cljs.core.truth_(temp__4092__auto__))
{var vec__13265 = temp__4092__auto__;var start = cljs.core.nth.call(null,vec__13265,0,null);var end = cljs.core.nth.call(null,vec__13265,1,null);return lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,start,1),end,"");
} else
{return null;
}
});
lt.plugins.paredit_plus.paredit_raise_sexp = (function paredit_raise_sexp(ed,l){while(true){
var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,l);var token = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.adjust_loc.call(null,l,1));var tokentype = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(token);var delete_surrounding = ((function (ed,l,c,token,tokentype){
return (function (p__13270){var vec__13271 = p__13270;var startloc = cljs.core.nth.call(null,vec__13271,0,null);var endloc = cljs.core.nth.call(null,vec__13271,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.pair_bounds.call(null,ed,startloc);if(cljs.core.truth_(temp__4092__auto__))
{var vec__13272 = temp__4092__auto__;var p_startloc = cljs.core.nth.call(null,vec__13272,0,null);var p_endloc = cljs.core.nth.call(null,vec__13272,1,null);return lt.objs.editor.operation.call(null,ed,((function (ed,l,vec__13272,p_startloc,p_endloc,temp__4092__auto__,vec__13271,startloc,endloc,c,token,tokentype){
return (function (){lt.objs.editor.replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,endloc,1),lt.objs.editor.adjust_loc.call(null,p_endloc,1),"");
return lt.objs.editor.replace.call(null,ed,p_startloc,startloc,"");
});})(ed,l,vec__13272,p_startloc,p_endloc,temp__4092__auto__,vec__13271,startloc,endloc,c,token,tokentype))
);
} else
{return null;
}
});})(ed,l,c,token,tokentype))
;if(cljs.core.truth_((function (){var and__7799__auto__ = tokentype;if(cljs.core.truth_(and__7799__auto__))
{var and__7799__auto____$1 = lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment");if(cljs.core.truth_(and__7799__auto____$1))
{return cljs.core.not.call(null,lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"comment-form"));
} else
{return and__7799__auto____$1;
}
} else
{return and__7799__auto__;
}
})()))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Illegal context: not available in comments");
} else
{if(cljs.core.truth_((function (){var and__7799__auto__ = tokentype;if(cljs.core.truth_(and__7799__auto__))
{return lt.util.cljs.str_contains_QMARK_.call(null,tokentype,"string");
} else
{return and__7799__auto__;
}
})()))
{return delete_surrounding.call(null,lt.plugins.paredit_plus.string_bounds.call(null,ed,l));
} else
{if(cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915)),c))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,l,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;return delete_surrounding.call(null,cljs.core.sort_by.call(null,((function (ed,l){
return (function (p1__13266_SHARP_){return lt.objs.editor.pos__GT_index.call(null,ed,p1__13266_SHARP_);
});})(ed,l))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,mloc], null)));
} else
{return null;
}
} else
{if((lt.plugins.paredit_plus.whitespace_QMARK_.call(null,c)) || ((c == null)))
{var nloc = lt.plugins.paredit_plus.find_pos_h.call(null,ed,l,1);if(cljs.core._EQ_.call(null,l,nloc))
{return null;
} else
{{
var G__13291 = ed;
var G__13292 = nloc;
ed = G__13291;
l = G__13292;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l);return delete_surrounding.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),lt.objs.editor.adjust_loc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null),-1)], null));
} else
{return null;
}
}
}
}
}
break;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.raise-sexp","paredit-plus.raise-sexp",2844782255),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Raise sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_raise_sexp.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
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
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_duplicate.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
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
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_forward_delete.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.backward-delete","paredit-plus.backward-delete",3592606805),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Backward delete",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_backward_delete.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.join-sexps","paredit-plus.join-sexps",3200795434),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Join sexps",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_join_sexps.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.split-sexp","paredit-plus.split-sexp",2384054337),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Split sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_split_sexp.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp-killing-forward","paredit-plus.splice-sexp-killing-forward",1545227754),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp killing forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp_kill.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp-killing-backward","paredit-plus.splice-sexp-killing-backward",1943727618),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp killing backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp_kill.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"backward","backward",3135881045));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp","paredit-plus.splice-sexp",4170175995),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_splice_sexp.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
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
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.char__GT_pair.call(null,"("));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-square","paredit-plus.wrap-square",2684315776),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap square",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.char__GT_pair.call(null,"["));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-curly","paredit-plus.wrap-curly",4516812078),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap curly",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.char__GT_pair.call(null,"{"));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-quote","paredit-plus.wrap-quote",4529738717),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap quote",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.paredit_plus.paredit_wrap_with_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),lt.plugins.paredit_plus.char__GT_pair.call(null,"\""));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=paredit-plus_compiled.js.map