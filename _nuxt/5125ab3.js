(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,5,6,8],{925:function(t,e,r){var content=r(928);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(144).default)("170d712b",content,!0,{sourceMap:!1})},926:function(t,e,r){var content=r(930);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(144).default)("5feec2a7",content,!0,{sourceMap:!1})},927:function(t,e,r){"use strict";r(925)},928:function(t,e,r){var n=r(143)((function(i){return i[1]}));n.push([t.i,".columns-card-body[data-v-24ed6cc2]{height:30vh;overflow-y:scroll}",""]),n.locals={},t.exports=n},929:function(t,e,r){"use strict";r(926)},930:function(t,e,r){var n=r(143)((function(i){return i[1]}));n.push([t.i,".missing-values-card-body{height:30vh;overflow-y:scroll}",""]),n.locals={},t.exports=n},933:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(9),r(16),r(12),r(17);var n=r(3),o=r(77);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={props:{activeCategory:{type:String,default:""}},name:"AnnotExplanation",data:function(){return{uiText:{cardTitle:"Explanation",defaultText:"No category/explanation has been provided."}}},computed:l(l({},Object(o.c)(["getExplanation"])),{},{explanationText:function(){var t=this.getExplanation(this.activeCategory);return null===t?this.uiText.defaultText:t}})},y=r(114),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab",align:"center"}},[t._v("\n            "+t._s(t.uiText.cardTitle)+"\n        ")]),t._v(" "),e("b-card-body",[e("b-card-text",[t._v(t._s(t.explanationText))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},934:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(9),r(16),r(12),r(17);var n=r(3),o=r(77);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={props:{activeCategory:{type:String,required:!0}},name:"AnnotColumns",data:function(){return{uiText:{instructions:"Review the annotated columns",removeButton:"remove"}}},computed:l({},Object(o.c)(["getColumnsForCategory","getColumnDescription"])),methods:l({},Object(o.d)(["alterColumnCategoryMapping"]))},y=(r(927),r(114)),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"annotation-card",attrs:{"no-body":""}},[e("b-card-header",[t._v(t._s(t.uiText.instructions))]),t._v(" "),e("b-card-body",{staticClass:"columns-card-body"},[e("b-list-group",t._l(t.getColumnsForCategory(t.activeCategory),(function(r){return e("b-list-group-item",{key:r,staticClass:"d-flex justify-content-between align-items-center",attrs:{"data-cy":"mappedColumns"}},[t._v("\n                "+t._s(r)+" "+t._s(t.getColumnDescription(r))+"\n                "),e("b-button",{attrs:{"data-cy":"remove_"+r,variant:"danger"},on:{click:function(e){return t.alterColumnCategoryMapping({category:t.activeCategory,columnName:r})}}},[t._v("\n                    "+t._s(t.uiText.removeButton)+"\n                ")])],1)})),1)],1)],1)}),[],!1,null,"24ed6cc2",null);e.default=component.exports},935:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(9),r(16),r(12),r(17),r(47),r(61),r(54),r(119),r(87),r(32),r(115),r(120),r(95);var n=r(3),o=r(77);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={name:"AnnotMissingValues",props:{activeCategory:{type:String,required:!0}},data:function(){return{fields:[{key:"column"},{key:"description"},{key:"value"},{key:"not_missing"}],uiText:{notMissingButton:"Not Missing",title:"Missing Values"}}},computed:y(y({},Object(o.c)(["getMissingValues","getValueDescription"])),{},{tableItems:function(){var t=this.getMissingValues(this.activeCategory),e=[];for(var r in t){var n,o=c(t[r]);try{for(o.s();!(n=o.n()).done;){var l=n.value;e.push({column:r,description:this.getValueDescription(r,l),value:l})}}catch(t){o.e(t)}finally{o.f()}}return e}}),methods:y(y({},Object(o.d)(["changeMissingStatus"])),{},{removeValue:function(t){this.changeMissingStatus({column:t.column,markAsMissing:!1,value:t.value})}})},d=(r(929),r(114)),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"annotation-card",attrs:{"no-body":""}},[e("b-card-header",[t._v(t._s(t.uiText.title))]),t._v(" "),e("b-card-body",{staticClass:"missing-values-card-body"},[e("b-table",{attrs:{striped:"",fields:t.fields,items:t.tableItems},scopedSlots:t._u([{key:"cell(not_missing)",fn:function(data){return[e("b-button",{attrs:{variant:"danger","data-cy":"not-missing-button-"+data.item.column+"-"+data.item.value},on:{click:function(e){return t.removeValue(data.item)}}},[t._v("\n                        "+t._s(t.uiText.notMissingButton)+"\n                    ")])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},943:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(9),r(16),r(12),r(17);var n=r(3),o=r(77);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var l={props:{activeCategory:{type:String,required:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.c)(["getAnnotationComponent"]))},f=l,y=r(114),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",{attrs:{"data-cy":t.activeCategory}},[e("annot-explanation",{attrs:{"data-cy":"annot-expl-"+t.activeCategory,"active-category":t.activeCategory}}),t._v(" "),e("annot-columns",{attrs:{"data-cy":"annot-col-"+t.activeCategory,"active-category":t.activeCategory}}),t._v(" "),e("annot-missing-values",{attrs:{"data-cy":"annot-missing-"+t.activeCategory,"active-category":t.activeCategory}}),t._v(" "),e(t.getAnnotationComponent(t.activeCategory),{tag:"component",attrs:{"data-cy":t.getAnnotationComponent(t.activeCategory)+"-"+t.activeCategory,"active-category":t.activeCategory,title:"annotate_"+t.activeCategory}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AnnotExplanation:r(933).default,AnnotColumns:r(934).default,AnnotMissingValues:r(935).default})},953:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(9),r(16),r(12),r(17);var n=r(3),o=r(77);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"AnnotationPage",data:function(){return{categorySkipList:["Subject ID"],tabNavTitle:0}},computed:l(l({},Object(o.c)(["getMappedCategories"])),Object(o.e)(["colorInfo"]))},y=r(114),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("client-only",[e("b-tabs",{attrs:{card:"",pills:"",vertical:"","data-cy":"annotation-category-tabs","nav-wrapper-class":"col-2"},model:{value:t.tabNavTitle,callback:function(e){t.tabNavTitle=e},expression:"tabNavTitle"}},t._l(t.getMappedCategories(t.categorySkipList),(function(r,n){return e("b-tab",{key:n,attrs:{title:r,"title-link-class":["annotation-tab-nav",t.colorInfo.categoryClasses[r]]}},[e("b-card-text",[e("annot-tab",{attrs:{"active-category":r}})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AnnotTab:r(943).default})}}]);