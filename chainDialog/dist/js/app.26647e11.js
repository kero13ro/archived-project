(function(n){function t(t){for(var r,c,u=t[0],a=t[1],l=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,u=1;u<e.length;u++){var a=e[u];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),n=c(c.s=e[0]))}return n}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=r,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)c.d(e,r,function(t){return n[t]}.bind(null,r));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/archived-project/chainDialog/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=a;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},1355:function(n,t,e){},"33fd":function(n,t,e){"use strict";e("fed5")},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[n._v("使用 this.$dialog() 呼叫彈窗，並可以串連不同按鈕之回乎函數")]),e("div",[n._v("透過閉包封裝回乎函式，串連 非同步函數呼叫")]),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"bg"},[e("pre",[e("code",{staticClass:"javascript"},[n._v(n._s(n.code))])])]),e("Button",{on:{click:n.ShowDailog}},[n._v("顯示彈窗")])],1)},u=[],a={data:function(){return{code:'this.$dialog()\n  .onOk(() => {\n    alert("點擊了確認按鈕");\n  })\n  .onCancel(() => {\n    alert("點擊了取消按鈕");\n  });\n'}},mounted:function(){var n=this;setTimeout((function(){n.ShowDailog()}),1e3)},methods:{ShowDailog:function(){this.$dialog().onOk((function(){alert("點擊了確認")})).onCancel((function(){alert("點擊了取消")}))}}},l=a,s=(e("7d5b"),e("2877")),f=Object(s["a"])(l,c,u,!1,null,null,null),d=f.exports,p={name:"App",components:{HelloWorld:d}},v=p,h=(e("5c0b"),Object(s["a"])(v,o,i,!1,null,null,null)),b=h.exports,g=(e("d3b7"),e("159b"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"dialog"}},[e("h1",[n._v("彈窗標題")]),e("div",{staticClass:"row"},[e("Button",{on:{click:function(t){return n.$emit("ok")}}},[n._v("確認")]),e("Button",{on:{click:function(t){return n.$emit("cancel")}}},[n._v("取消")])],1)])}),m=[],y={},_=y,w=(e("33fd"),Object(s["a"])(_,g,m,!1,null,null,null)),O=w.exports;function j(){return function(){var n=[],t=[],e={onOk:function(t){return n.push(t),e},onCancel:function(n){return t.push(n),e}};return $(n,t),e}()}function $(n,t){var e=document.createElement("div");document.body.appendChild(e);var o=new r["a"]({el:e,name:"GlobalDialog",render:function(e){return e(O,{ref:"dialog",attrs:{id:"dialog"},on:{ok:function(){n.forEach((function(n){return n()})),o.$destroy(),o.$el.remove(),o=null},cancel:function(){t.forEach((function(n){return n()})),o.$destroy(),o.$el.remove(),o=null}}})}})}r["a"].prototype.$dialog=j;var k=e("dd4c"),x=e("1487"),C=e.n(x);e("c14d");r["a"].use(k["a"],{hljs:C.a}),r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(b)}}).$mount("#app")},"5c0b":function(n,t,e){"use strict";e("9c0c")},"7d5b":function(n,t,e){"use strict";e("1355")},"9c0c":function(n,t,e){},fed5:function(n,t,e){}});
//# sourceMappingURL=app.26647e11.js.map