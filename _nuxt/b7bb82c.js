(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{379:function(t,e,n){var o=n(10),r=n(266).values;o({target:"Object",stat:!0},{values:function(t){return r(t)}})},426:function(t,e,n){(function(n){var o,r,c;r=[],void 0===(c="function"==typeof(o=function(){"use strict";function b(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}function e(a,b,t){var e=new XMLHttpRequest;e.open("GET",a),e.responseType="blob",e.onload=function(){g(e.response,b,t)},e.onerror=function(){console.error("could not download file")},e.send()}function o(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function r(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(t){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,t){var i=c.URL||c.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?r(n):o(n.href)?e(b,g,t):r(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){r(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,g,n){if(g=g||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(b(t,n),g);else if(o(t))e(t,g,n);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){r(i)}))}}:function(b,t,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return e(b,t,n);var o="application/octet-stream"===b.type,i=/constructor/i.test(c.HTMLElement)||c.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||o&&i||a)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var a=l.result;a=r?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},l.readAsDataURL(b)}else{var d=c.URL||c.webkitURL,f=d.createObjectURL(b);g?g.location=f:location.href=f,g=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});c.saveAs=g.saveAs=g,t.exports=g})?o.apply(e,r):o)||(t.exports=c)}).call(this,n(56))},432:function(t,e,n){"use strict";n.r(e);n(4),n(6),n(3),n(7);var o=n(0),r=(n(16),n(19),n(14),n(60),n(77),n(5),n(15),n(379),n(2),n(1),n(68)),c=n(426);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"DownloadPage",data:function(){return{categoryToColumnMap:{},jsonSpacing:4,textArea:{width:5,height:800},uiText:{downloadButton:"Download Annotated Data"}}},computed:d(d(d({},Object(r.b)(["isDataAnnotated"])),Object(r.c)(["columnToCategoryMap","dataTable","missingValueLabel","toolGroups"])),{},{datasetName:function(){return this.dataTable.filename.split(".").slice(0,-1).join(".")},defaultOutputFilename:function(){return"".concat(this.datasetName,"_annotated_").concat(Date.now(),".json")},downloadButtonColor:function(){return this.isDataAnnotated?"success":"secondary"}}),mounted:function(){this.$store.dispatch("setCurrentPage","download"),this.refreshCategoryToColumnMap()},methods:{downloadAnnotatedData:function(){var t=this.transformAnnotatedTableToJSON();this.fileSaverSaveAs(t)},fileSaverSaveAs:function(t){var e=new Blob([JSON.stringify(t,null,this.jsonSpacing)],{type:"text/plain;charset=utf-8"});Object(c.saveAs)(e,this.defaultOutputFilename)},refreshCategoryToColumnMap:function(){for(var t in this.categoryToColumnMap={},this.columnToCategoryMap){var e=this.columnToCategoryMap[t];Object.keys(this.categoryToColumnMap).includes(e)||(this.categoryToColumnMap[e]=[]),this.categoryToColumnMap[e].push(t)}},transformAnnotatedTableToJSON:function(){var t=this;return{name:this.datasetName,type:"dataset",hasSamples:this.dataTable.annotated.map((function(e){return t.transformAnnotatedRowToSubjectJSON(e)}))}},transformAnnotatedRowToSubjectJSON:function(t){var e=this,n=Object.values(this.columnToCategoryMap),o={};for(var r in o.label=t[this.categoryToColumnMap["Subject ID"][0]],n.includes("Age")&&(o.age=t[this.categoryToColumnMap.Age[0]]),n.includes("Sex")&&(o.sex=t[this.categoryToColumnMap.Sex[0]]),n.includes("Diagnosis")&&(o.diagnosis=this.categoryToColumnMap.Diagnosis.map((function(e){return{identifier:t[e]}})).filter((function(t){return e.missingValueLabel!==t.identifier}))),o.assessment_tool=[],this.toolGroups){var c=r+"_avail";!0===t[c]&&o.assessment_tool.push(c)}return o}}},m=n(59),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{attrs:{bordered:"",outlined:"","sticky-header":"",striped:"","head-variant":"dark",items:t.dataTable.annotated}})],1)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"9"}}),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-button",{staticClass:"float-right",attrs:{"data-cy":"download-button",disabled:!t.isDataAnnotated,variant:t.downloadButtonColor},on:{click:t.downloadAnnotatedData}},[t._v("\n                "+t._s(t.uiText.downloadButton)+"\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);