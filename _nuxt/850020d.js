(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{284:function(t,n,e){var content=e(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("52e3d842",content,!0,{sourceMap:!1})},286:function(t,n,e){"use strict";e(284)},287:function(t,n,e){var r=e(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nbody{\n  scroll-behavior:smooth;\n  overflow-y:hidden;\n  overflow-x:auto\n}\n.a1000c-horizontal{\n  height:100%;\n  display:flex;\n  overflow-y:hidden;\n  overflow-x:auto;\n  -ms-scroll-snap-type:x mandatory;\n      scroll-snap-type:x mandatory\n}\n.a1000c-horizontal>.flex{\n  flex-shrink:0;\n  width:100vw;\n  scroll-snap-align:center\n}\n.nav{\n  flex-shrink:1;\n  flex-basis:4%;\n  width:20px;\n  color:hsla(0,0%,100%,.1)\n}\n.nav,.nav:hover{\n  background-color:rgba(20,20,20,0)\n}\n.nav:hover{\n  color:#fff\n}\n.content{\n  flex-shrink:1;\n  flex-basis:97%\n}\n#map>.content{\n  flex-shrink:1;\n  flex-basis:93%\n}\n.bg-a100c-1{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,0,249,.15),rgba(255,117,0,.15) 50%,rgba(255,0,35,.15))\n}\n.bg-a100c-2{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,0,35,.15),rgba(255,0,249,.15) 50%,rgba(255,117,0,.15))\n}\n.bg-a100c-3{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,117,0,.15),rgba(255,0,35,.15) 50%,rgba(255,0,249,.15))\n}\n.bg-a100c-white{\n  background-color:hsla(0,0%,100%,.8)\n}\n.text-white{\n  color:hsla(0,0%,100%,.8);\n  text-shadow:0 0 0 #ddd\n}\n.text-white:hover{\n  color:#fff;\n  text-shadow:0 0 3px #bbb\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},290:function(t,n,e){"use strict";e.r(n);var r={name:"App",mounted:function(){this.$router.push({name:"main",hash:"#map"})},methods:{jumpToMap:function(){console.log("jumpToMap"),this.$router.push({name:"main",hash:"#map"})},scrollX:function(t){console.log("scrollx"),this.$refs.scroll_container.scrollLeft+=t.deltaY},navigate_top:function(){console.log("<-- top "+this.$route.hash),this.$router.push({name:"index",hash:""})},navigate_left:function(){console.log("<-- from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#info":"#list"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)},navigate_right:function(){console.log("--\x3e from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#list":"#info"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)}}},o=(e(286),e(51)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"page"}},[e("div",{ref:"scroll_container",staticClass:"flex a1000c-horizontal",attrs:{id:"page_inner"},on:{mousewheel:t.scrollX}},[e("section",{staticClass:"flex min-h-screen bg-a100c-1 sm:items-center sm:pt-0",attrs:{id:"info"}},[t._m(0),t._v(" "),e("nuxt-link",{staticClass:"nav flex block items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[t._v(">")])],1),t._v(" "),e("section",{staticClass:"flex min-h-screen bg-a100c-2 sm:items-center sm:pt-0",attrs:{id:"map"}},[e("nuxt-link",{staticClass:"nav flex items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"info"}}},[t._v("<")]),t._v(" "),e("div",{staticClass:"flex content items-center justify-center"},[e("h2",{staticClass:"bg-a100c-white px-2 py-1 rounded"},[t._v("Map")]),t._v(" "),e("p",[e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowup"],expression:"['arrowup']"}],staticClass:"hidden",on:{shortkey:function(n){return t.navigate_top()}}},[t._v("^")]),t._v(" "),e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowleft"],expression:"['arrowleft']"}],staticClass:"hidden",on:{shortkey:function(n){return t.navigate_left()}}},[t._v("<")]),t._v(" "),e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowright"],expression:"['arrowright']"}],staticClass:"hidden",on:{shortkey:function(n){return t.navigate_right()}}},[t._v(">")])])]),t._v(" "),e("nuxt-link",{staticClass:"nav flex block items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"list"}}},[t._v(">")])],1),t._v(" "),e("section",{staticClass:"flex min-h-screen bg-a100c-3 sm:items-center sm:pt-0",attrs:{id:"list"}},[e("nuxt-link",{staticClass:"nav flex items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[t._v("<")]),t._v(" "),t._m(1)],1)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex content items-center justify-center"},[e("h2",{staticClass:"bg-a100c-white px-2 py-1 rounded shadow mt-8"},[t._v("Info")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:" content flex items-center justify-center"},[e("h2",{staticClass:"bg-a100c-white px-2 py-1 rounded"},[t._v("List")])])}],!1,null,null,null);n.default=component.exports},303:function(t,n,e){"use strict";e.r(n);var r={},o=e(51),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Main")}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Main:e(290).default})}}]);