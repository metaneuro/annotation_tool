(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{896:function(t,e,n){var content=n(903);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("192eb75c",content,!0,{sourceMap:!1})},902:function(t,e,n){"use strict";n(896)},903:function(t,e,n){var r=n(119)((function(i){return i[1]}));r.push([t.i,".continuous-values-card-body[data-v-5093bf36]{height:300px;overflow-y:scroll;position:relative}",""]),r.locals={},t.exports=r},909:function(t,e,n){"use strict";n.r(e);n(6),n(5),n(3),n(7),n(8);var r=n(0),o=(n(2),n(4),n(58));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{activeCategory:{type:String,required:!0}},name:"ContinuousTable",data:function(){return{exampleFields:["preview","rawValue","missingValue"],uiText:{instructions:"Review the age harmonization",missingValueButton:"Mark as missing",saveButton:"Save Annotation"}}},computed:l({},Object(o.c)(["getHarmonizedPreview","getHeuristic","getMappedColumns","getTransformOptions","getUniqueValues"])),methods:l(l({},Object(o.d)(["changeMissingStatus","setHeuristic","updateAnnotationCount"])),{},{columnValidationItems:function(t){var e=this,n=this.getUniqueValues(this.activeCategory),r=[];return n[t].forEach((function(n){r.push({preview:e.getHarmonizedPreview(t,n),rawValue:n})})),r},selectHeuristic:function(t){var e=t.columnName,n=t.heuristic;this.setHeuristic({columnName:e,heuristic:n}),this.updateAnnotationCount()}})},f=(n(902),n(92)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"annotation-card",attrs:{"no-body":""}},[e("b-card-header",[t._v(t._s(t.uiText.instructions))]),t._v(" "),e("b-card-body",{staticClass:"continuous-values-card-body"},[e("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.getMappedColumns(t.activeCategory),(function(n,r){return e("b-tab",{key:n,attrs:{active:0===r,title:n}},[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-table",{attrs:{hover:"",striped:"",id:"annotation-table","data-cy":"dataTable-"+n,fields:t.exampleFields,items:t.columnValidationItems(n)},scopedSlots:t._u([{key:"cell(missingValue)",fn:function(r){return[e("b-button",{attrs:{"data-cy":"missingValueButton_"+r.index,variant:"danger"},on:{click:function(e){return t.changeMissingStatus({column:n,value:r.item.rawValue,markAsMissing:!0})}}},[t._v("\n                                    "+t._s(t.uiText.missingValueButton)+"\n                                ")])]}}],null,!0)})],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("v-select",{attrs:{"data-cy":"selectTransform_"+n,options:t.getTransformOptions(t.activeCategory),value:t.getHeuristic(n)},on:{input:function(e){return t.selectHeuristic({columnName:n,heuristic:e})}}})],1)],1)],1)})),1)],1)],1)}),[],!1,null,"5093bf36",null);e.default=component.exports}}]);