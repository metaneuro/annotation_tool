(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{973:function(t,e,r){"use strict";r.r(e);r(14),r(11),r(18),r(19),r(15),r(9),r(12);var n=r(3),o=r(79);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={props:{activeCategory:{type:String,default:""}},name:"AnnotExplanation",data:function(){return{uiText:{cardTitle:"Explanation",defaultText:"No category/explanation has been provided."}}},computed:l(l({},Object(o.c)(["getExplanation"])),{},{explanationText:function(){var t=this.getExplanation(this.activeCategory);return null===t?this.uiText.defaultText:t}})},f=r(114),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab",align:"center"}},[t._v("\n            "+t._s(t.uiText.cardTitle)+"\n        ")]),t._v(" "),e("b-card-body",[e("b-card-text",[e("ul",t._l(t.explanationText.split("."),(function(r,n){return e("li",{key:n},[t._v("\n                        "+t._s(r)+".\n                    ")])})),0)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);