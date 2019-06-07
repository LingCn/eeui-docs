// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=145)}({0:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){return Array.isArray(e)?e:Array.from(e)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a={isNullOrUndefined:function(e){return void 0===e||null===e},isFunction:function(e){return!a.isNullOrUndefined(e)&&"function"==typeof e},isObject:function(e){return!a.isNullOrUndefined(e)&&"object"===(void 0===e?"undefined":u(e))},likeArray:function(e){return!a.isNullOrUndefined(e)&&"number"==typeof e.length},isJson:function(e){return a.isObject(e)&&!a.likeArray(e)},getObject:function(e,t){var n=e;if(0===a.count(e)||0===a.count(t))return"";var r=t.replace(/,/g,"|").replace(/\./g,"|").split("|");return a.each(r,function(e,t){n=void 0===n[t]?"":n[t]}),n},each:function(e,t){var n=void 0,r=void 0;if(a.likeArray(e)){if("number"==typeof e.length)for(n=0;n<e.length;n++)if(!1===t.call(e[n],n,e[n]))return e}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(e[r],r,e[r]))return e;return e},last:function(e){var t=!1;return"object"===(void 0===e?"undefined":u(e))&&e.length>0&&(t=e[e.length-1]),t},delLast:function(e){var t=[];return"object"===(void 0===e?"undefined":u(e))&&e.length>0&&a.each(e,function(n,r){n<e.length-1&&t.push(r)}),t},strExists:function(e,t){return e+="",t+="",-1!==e.indexOf(t)},leftExists:function(e,t){return e+="",t+="",e.substring(0,t.length)===t},rightExists:function(e,t){return e+="",t+="",e.substring(e.length-t.length)===t},getMiddle:function(e,t,n){return e+="",a.ishave(t)&&a.strExists(e,t)&&(e=e.substring(e.indexOf(t)+t.length)),a.ishave(n)&&a.strExists(e,n)&&(e=e.substring(0,e.indexOf(n))),e},subString:function(e,t,n){return e+="",a.ishave(n)||(n=e.length),e.substring(t,n)},randomString:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",n=t.length,r="",i=0;i<e;i++)r+=t.charAt(Math.floor(Math.random()*n));return r},ishave:function(e){return!(null===e||"null"===e||void 0===e||"undefined"===e||!e)},zeroFill:function(e,t,n){if(e+="",e.length>=t)return e;for(var r="",i=0;i<t;i++)r+="0";return n||void 0===n?(r+""+e).substr(-1*t):(e+""+r).substr(0,t)},formatDate:function(e,t){if(""===e&&(e="Y-m-d H:i:s"),void 0===t)t=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(t))t*=1e3;else if(/^(-)?\d{1,13}$/.test(t))t*=1e3;else if(/^(-)?\d{1,14}$/.test(t))t*=100;else if(/^(-)?\d{1,15}$/.test(t))t*=10;else{if(!/^(-)?\d{1,16}$/.test(t))return t;t*=1}var n=new Date(t);return parseInt(n.getFullYear())+""=="NaN"?t:(e=e.replace(/Y/g,n.getFullYear()),e=e.replace(/m/g,a.zeroFill(n.getMonth()+1,2)),e=e.replace(/d/g,a.zeroFill(n.getDate(),2)),e=e.replace(/H/g,a.zeroFill(n.getHours(),2)),e=e.replace(/i/g,a.zeroFill(n.getMinutes(),2)),e=e.replace(/s/g,a.zeroFill(n.getSeconds(),2)))},isDate:function(e){var t=/^(\d{4})-(\d{2})-(\d{2})$/,n=e+"";return""!==n&&!(!t.test(n)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(e){return/^1(3|4|5|7|8)\d{9}$/.test(e)},formatMobile:function(e){return 0===a.count(e)?"":e.substring(0,3)+"****"+e.substring(e.length-4)},clone:function(e){if("object"!==(void 0===e?"undefined":u(e)))return e;if(null===e)return e;if(a.likeArray(e)){return o(e).slice(0)}return i(e,[])},count:function(e){try{if(void 0===e)return 0;if("number"==typeof e&&(e+=""),"number"==typeof e.length)return e.length;var t=0,n=void 0;for(n in e)t++;return t}catch(e){return 0}},runNum:function(e,t){var n=Number(e);if(n+""=="NaN"&&(n=0),/^[0-9]*[1-9][0-9]*$/.test(t)){n=n.toFixed(t);if(n.indexOf(".")<0){n+=".";for(var r=0;r<t;r++)n+="0"}}return n},formatSeconds:function(e){var t=parseInt(e),n=0,r=0;t>60&&(n=parseInt(t/60),t=parseInt(t%60),n>60&&(r=parseInt(n/60),n=parseInt(n%60)));var i=parseInt(t)+"秒";return n>0&&(i=parseInt(n)+"分"+i),r>0&&(i=parseInt(r)+"小时"+i),i},jsonParse:function(e,t){try{return JSON.parse(e)}catch(e){return t||{}}},jsonStringify:function(e,t){try{return JSON.stringify(e)}catch(e){return t||""}},removerNumberNaN:function(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){isNaN(Number(t))||e.push(t)}),e},runMax:function(){return Math.max.apply(Math,r(a.removerNumberNaN.apply(a,arguments)))},runMin:function(){return Math.min.apply(Math,r(a.removerNumberNaN.apply(a,arguments)))},stringConnect:function(){for(var e=null,t="",n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){null===e?e=n:n&&(n&&t&&(t+=e),t+=n)}),t},bytesToSize:function(e){if(0===e)return"0 B";var t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(1024));return void 0===t[n]?"0 B":a.runNum(e/Math.pow(1024,n),2)+" "+t[n]}};e.exports=a},1:function(e,t,n){"use strict";var r=n(0),i=app.requireModule("eeui"),o={jshome:"https://eeui.app/dist/1.0.0/pages/",openViewCode:function(e){o.openViewUrl("https://eeui.app/"+e+".html")},openViewUrl:function(e){i.openPage({url:o.jshome+"index_browser.js",pageType:"app",statusBarColor:"#3EB4FF",params:{title:"EEUI",url:e}})},checkVersion:function(e){return"function"==typeof i.getVersion&&(0,r.runNum)(i.getVersion())>=(0,r.runNum)(e)}};e.exports=o},145:function(e,t,n){var r,i,o=[];o.push(n(39)),r=n(33);var u=n(75);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/plugin_umeng.vue",i.render=u.render,i.staticRenderFns=u.staticRenderFns,i._scopeId="data-v-0a631684",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=app.requireModule("eeui"),o=app.requireModule("umeng");t.default={data:function(){return{info:""}},methods:{viewCode:function(e){(0,r.openViewCode)(e)},getToken:function(){if(void 0===o)return void i.alert({title:"温馨提示",message:"检测到未安装umeng插件，安装详细请登录https://eeui.app/"});this.info=o.getToken()}}}},39:function(e,t){e.exports={app:{width:"750",flex:1},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},iconr:{width:"100",height:"100",color:"#ffffff"},content:{flex:1,justifyContent:"center",alignItems:"center"},info:{fontSize:"22",marginBottom:"20"},button:{fontSize:"24",textAlign:"center",marginTop:"20",paddingTop:"20",paddingBottom:"20",width:"220",color:"#ffffff",backgroundColor:"#00B4FF"}}},75:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["app"]},[n("navbar",{staticClass:["navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["title"]},[e._v("友盟推送模块")])]),n("navbar-item",{attrs:{type:"right"},on:{click:function(t){e.viewCode("plugin/umeng")}}},[n("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),n("div",{staticClass:["content"]},[n("text",{staticClass:["info"]},[e._v(e._s(e.info))]),n("text",{staticClass:["button"],on:{click:e.getToken}},[e._v("获取token")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});