// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(t){function e(n){if(s[n])return s[n].exports;var o=s[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var s={};e.m=t,e.c=s,e.i=function(t){return t},e.d=function(t,s,n){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=148)}({111:function(t,e,s){var n,o,r=[];r.push(s(154)),n=s(151);var i=s(156);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/components/WEcharts/index.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-191a3376",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=n},148:function(t,e,s){var n,o,r=[];r.push(s(52)),n=s(36);var i=s(88);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/ui_echarts_demo.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-4f65b102",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=n,t.exports.el="true",new Vue(t.exports)},151:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=app.requireModule("eeui");e.default={name:"WEcharts",props:{baidukey:{type:String,default:"706afcb60ea4460e246fe6a24c73e0c5"},options:{type:Object,default:{title:{text:"基本的折线图（演示）"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line"}]}}},data:function(){return{loadIng:!0}},mounted:function(){n.setVariate("components::echarts::baidukey",this.baidukey),n.setVariate("components::echarts::option",JSON.stringify(this.options))},watch:{options:function(t){this.setOptions(t)}},methods:{webReady:function(){this.$refs.reflectName.setUrl(n.rewriteUrl("../components/WEcharts/echarts.html"))},webState:function(t){"start"===t.status?this.loadIng=!0:"success"!==t.status&&"error"!==t.status||(this.loadIng=!1)},setOptions:function(t){n.setVariate("components::echarts::option",JSON.stringify(t)),this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }")}}}},154:function(t,e){t.exports={app:{position:"relative"},webview:{flex:1,scrollEnabled:"false",progressbarVisibility:"false"},icon:{position:"absolute",top:0,left:0,right:0,bottom:0,content:'"tb-loading-c spin"',fontSize:"48",color:"#666666"}}},156:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:["app"]},[s("web-view",{ref:"reflectName",staticClass:["webview"],on:{ready:t.webReady,stateChanged:t.webState}}),t.loadIng?s("icon",{staticClass:["icon"]}):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},36:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(111),o=function(t){return t&&t.__esModule?t:{default:t}}(n);app.requireModule("eeui");e.default={components:{WEcharts:o.default},data:function(){return{title:"折线图 Basic Line Chart",options:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line"}]}}},mounted:function(){this.title=app.config.params.title?app.config.params.title:this.title,this.options=app.config.params.options?JSON.parse(app.config.params.options):this.options},methods:{}}},52:function(t,e){t.exports={app:{width:"750",flex:1,backgroundColor:"#ffffff"},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},main:{flex:1,justifyContent:"center"},echarts:{width:"750",height:"750"}}},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:["app"]},[s("navbar",{staticClass:["navbar"]},[s("navbar-item",{attrs:{type:"back"}}),s("navbar-item",{attrs:{type:"title"}},[s("text",{staticClass:["title"]},[t._v(t._s(t.title))])])],1),s("div",{staticClass:["main"]},[s("WEcharts",{staticClass:["echarts"],attrs:{options:t.options}})],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});