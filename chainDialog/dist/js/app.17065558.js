(function(n){function e(e){for(var r,c,u=e[0],a=e[1],l=e[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/archived-project/chainDialog/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=a;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},1355:function(n,e,t){},"33fd":function(n,e,t){"use strict";t("fed5")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("h5",[n._v("目標：")]),n._m(0),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"bg"},[t("pre",[t("code",{staticClass:"javascript"},[n._v(n._s(n.code))])])]),n._m(1),t("Button",{on:{click:n.ShowDailog}},[n._v("顯示彈窗")]),t("h4",[n._v(n._s(n.resp))])],1)},u=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("使用"),t("code",[n._v("this.$dialog()")]),n._v("呼叫彈窗，並可以串連不同按鈕 "),t("code",[n._v("onOk, onCancel")]),n._v("等回呼函數。")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",[t("li",[n._v("透過類似 jQuery 之閉包封裝作用域，以達到非同步執行不同結果。")]),t("li",[n._v("使用 Vue Render Functions 渲染彈窗，不用要在 data 內控制顯示狀態。")])])}],a={data:function(){return{resp:"",code:"this.$dialog()\n  .onOk(() => { ... })\n  .onCancel(() => { ... });\n"}},mounted:function(){var n=this;setTimeout((function(){n.ShowDailog()}),1e3)},methods:{ShowDailog:function(){var n=this;this.resp="",this.$dialog().onOk((function(){n.resp="點擊了確認"})).onCancel((function(){n.resp="點擊了取消"}))}}},l=a,s=(t("7d5b"),t("2877")),f=Object(s["a"])(l,c,u,!1,null,null,null),d=f.exports,p={name:"App",components:{HelloWorld:d}},v=p,h=(t("5c0b"),Object(s["a"])(v,o,i,!1,null,null,null)),_=h.exports,m=(t("159b"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"dialog"}},[t("h5",[n._v("Title")]),t("div",{staticClass:"row"},[t("Button",{on:{click:function(e){return n.$emit("ok")}}},[n._v("OK")]),t("Button",{on:{click:function(e){return n.$emit("cancel")}}},[n._v("Cancel")])],1)])}),b=[],g={},y=g,O=(t("33fd"),Object(s["a"])(y,m,b,!1,null,null,null)),j=O.exports;function w(){return function(){var n=[],e=[],t={onOk:function(e){return n.push(e),t},onCancel:function(n){return e.push(n),t}};return $(n,e),t}()}function $(n,e){var t=document.createElement("div");document.body.appendChild(t);var o=new r["a"]({el:t,name:"GlobalDialog",render:function(t){return t(j,{ref:"dialog",attrs:{id:"dialog"},on:{ok:function(){n.forEach((function(n){return n()})),o.$destroy(),o.$el.remove(),o=null},cancel:function(){e.forEach((function(n){return n()})),o.$destroy(),o.$el.remove(),o=null}}})}})}r["a"].prototype.$dialog=w;t("d1ad");var k=t("dd4c"),C=t("1487"),x=t.n(C);t("c14d");r["a"].use(k["a"],{hljs:x.a}),r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(_)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";t("9c0c")},"7d5b":function(n,e,t){"use strict";t("1355")},"9c0c":function(n,e,t){},fed5:function(n,e,t){}});
//# sourceMappingURL=app.17065558.js.map