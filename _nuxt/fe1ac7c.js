(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{294:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("52e3d842",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n(294)},297:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\nbody{\n  scroll-behavior:smooth;\n  overflow-y:hidden;\n  overflow-x:auto\n}\n#page_inner.a1000c-horizontal{\n  height:100%;\n  display:flex;\n  overflow-y:hidden;\n  overflow-x:auto;\n  -ms-scroll-snap-type:x mandatory;\n      scroll-snap-type:x mandatory\n}\n#page_inner.a1000c-horizontal>.flex{\n  flex-shrink:0;\n  width:100vw;\n  scroll-snap-align:center\n}\n.nav{\n  flex-shrink:1;\n  flex-basis:4%;\n  width:20px;\n  background-color:rgba(20,20,20,0);\n  color:hsla(0,0%,100%,.1);\n  transition:all 1.5s\n}\n.nav:hover{\n  background-color:rgba(20,20,20,.05);\n  color:#fff;\n  transition:all 1s\n}\n.content{\n  flex-shrink:1;\n  flex-basis:97%\n}\n#map{\n  align-items:stretch\n}\n#map>.content{\n  flex-shrink:1;\n  flex-basis:95%\n}\n#info #list_inner,#list #list_inner,#map #map_inner{\n  height:90%;\n  width:95%;\n  align-items:none\n}\n.bg-a100c-1{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,0,249,.15),rgba(255,117,0,.15) 50%,rgba(255,0,35,.15))\n}\n.bg-a100c-2{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,0,35,.15),rgba(255,0,249,.15) 50%,rgba(255,117,0,.15))\n}\n.bg-a100c-3{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,117,0,.15),rgba(255,0,35,.15) 50%,rgba(255,0,249,.15))\n}\n.bg-a100c-white{\n  background-color:hsla(0,0%,100%,.8)\n}\n.text-white{\n  color:hsla(0,0%,100%,.8);\n  text-shadow:0 0 0 #ddd\n}\n.text-white:hover{\n  color:#fff;\n  text-shadow:0 0 3px #bbb\n}\n.border-white{\n  border-color:#fff\n}\n.leaflet-container{\n  background-color:hsla(0,0%,100%,.3);\n  background-color:transparent\n}\n.leaflet-tooltip-top:before{\n  bottom:0;\n  margin-bottom:-12px;\n  border-top-color:none\n}\n.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{\n  left:50%;\n  margin-left:-6px\n}\n.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before,.leaflet-tooltip-top:before{\n  position:absolute;\n  pointer-events:none;\n  border:6px solid transparent;\n  background:transparent;\n  content:""\n}\n.leaflet-tooltip-top{\n  margin-top:-20px\n}\n.leaflet-tooltip{\n  position:absolute;\n  padding:3px 8px;\n  background-color:rgba(252,164,148,.75);\n  border:0 solid #fff;\n  border-radius:0;\n  color:#fff;\n  font-family:monospace;\n  white-space:nowrap;\n  box-shadow:0 1px 3px rgba(0,0,0,.1)\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},300:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(32),n(82)),l=n.n(o),c={name:"App",watch:{"$route.query":"$fetch"},mounted:function(){this.$router.push({name:"main",hash:"#map"})},data:function(){return{data:{},tooltip:{},data_url:"https://staging.orte.link/public/maps/cities/layers/european-cities.json",circle:{radius:14,color:"transparent",fillcolor:"rgba(242, 71, 38, 1)",fillopacity:.85}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.$route.query.layer),t.$route.query.layer&&(t.data_url=t.$route.query.layer),e.next=4,l.a.get(t.data_url).then((function(t){return t.data}));case 4:t.data=e.sent;case 5:case"end":return e.stop()}}),e)})))()},methods:{jumpToMap:function(){console.log("jumpToMap"),this.$router.push({name:"main",hash:"#map"})},scrollX:function(t){console.log("scrollx: "+t.deltaY),console.log("from "+this.$route.hash);var e="";t.deltaY<0?(console.log("to right"),"#map"==this.$route.hash?e="#list":"#info"==this.$route.hash&&(e="#map")):(console.log("to left"),"#map"==this.$route.hash?e="#info":"#list"==this.$route.hash&&(e="#map")),e&&(this.$router.push({name:"main",hash:e}),location.hash=e)},navigate_top:function(){console.log("<-- top "+this.$route.hash),this.$router.push({name:"index",hash:""})},navigate_left:function(){console.log("<-- from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#info":"#list"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)},navigate_right:function(){console.log("--\x3e from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#list":"#info"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)}}},h=(n(296),n(52)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("div",{ref:"scroll_container",staticClass:"flex a1000c-horizontal",attrs:{id:"page_inner"},on:{wheel:t.scrollX}},[n("section",{staticClass:"flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0",attrs:{id:"info"}},[n("div",{staticClass:"content flex items-top"},[n("div",{staticClass:"bg-red-100 bg-opacity-30 my-1 mx-5",attrs:{id:"info_inner"}},[t.$fetchState.pending?n("p",[t._v("Loading...")]):t.$fetchState.error?n("p",[t._v("An error occurred :(")]):n("div",[n("h2",{staticClass:"block font-semibold text-lg bg-a100c-white px-2 py-1 rounded shadow mt-8"},[t._v("Info: "+t._s(this.data.layer.title))]),t._v(" "),n("div",{staticClass:"block bg-a100c-white px-2 py-1 rounded shadow mt-8",domProps:{innerHTML:t._s(this.data.layer.text)}})])])]),t._v(" "),n("div",{staticClass:"nav flex items-center content-center justify-center"},[n("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[t._v(">")])],1)]),t._v(" "),n("section",{staticClass:"flex min-h-screen max-h-screen bg-a100c-2",attrs:{id:"map"}},[n("div",{staticClass:"nav flex items-center content-center justify-center"},[n("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"info"}}},[t._v("<")])],1),t._v(" "),n("div",{staticClass:"content items-center justify-center"},[n("div",{staticClass:"block",attrs:{id:"map_header"}},[t.$fetchState.pending?n("p",{staticClass:"text-sm text-red-300"},[t._v("Fetching places...")]):t.$fetchState.error?n("p",{staticClass:"text-sm text-red-300"},[t._v("An error occurred :(")]):n("div",[n("p",{staticClass:"text-sm text-red-300"},[n("button",{on:{click:t.$fetch}},[t._v("Refresh")]),t._v(" //\n              "),n("nuxt-link",{staticClass:"text-red-300",attrs:{to:{path:"/"}}},[t._v("Home")])],1)]),t._v(" "),n("p",[n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowup"],expression:"['arrowup']"}],staticClass:"hidden",on:{shortkey:function(e){return t.navigate_top()}}},[t._v("^")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowleft"],expression:"['arrowleft']"}],staticClass:"hidden",on:{shortkey:function(e){return t.navigate_left()}}},[t._v("<")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowright"],expression:"['arrowright']"}],staticClass:"hidden",on:{shortkey:function(e){return t.navigate_right()}}},[t._v(">")])])]),t._v(" "),n("div",{staticClass:"h-full bg-red-100 bg-opacity-10 my-1 mx-1",attrs:{id:"map_inner"}},[n("div",{staticClass:"h-full w-full border-solid border-2 border-white",attrs:{id:"map_map"}},[n("client-only",[n("l-map",{attrs:{zoom:4,center:[55.9464418,8.1277591]}},[n("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),t._l(this.data.layer.places,(function(e,r){return n("l-circle-marker",{key:"marker-"+r,attrs:{"lat-lng":[e.lat,e.lon],radius:t.circle.radius,color:t.circle.color,stroke:t.circle.stroke,fillColor:t.circle.fillcolor,fillOpacity:t.circle.fillopacity}},[n("l-tooltip",{attrs:{content:e.title,options:{permanent:"true",direction:"top"}}})],1)}))],2)],1)],1)])]),t._v(" "),n("div",{staticClass:"nav flex items-center content-center justify-center"},[n("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"list"}}},[t._v(">")])],1)]),t._v(" "),n("section",{staticClass:"flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0",attrs:{id:"list"}},[n("div",{staticClass:"nav flex items-center content-center justify-center"},[n("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[t._v("<")])],1),t._v(" "),n("div",{staticClass:"content flex items-top overflow-x-auto pb-10"},[n("div",{staticClass:"bg-red-100 bg-opacity-30 my-1 mx-5",attrs:{id:"list_inner"}},[n("h2",{staticClass:"font-semibold text-lg bg-a100c-white px-4 py-2 rounded shadow mt-8"},[t._v("List: "+t._s(this.data.layer.title))]),t._v(" "),n("hr"),t._v(" "),t.$fetchState.pending?n("p",[t._v("Loading...")]):t.$fetchState.error?n("p",[t._v("An error occurred :(")]):n("div",[n("ul",{staticClass:"pb-10"},t._l(this.data.layer.places,(function(e){return n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-8"},[n("h3",{staticClass:"font-semibold text-lg px-4 py-2"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-gray-500 px-4",domProps:{innerHTML:t._s(e.teaser)}}),t._v(" "),t._m(0,!0)])})),0)])])])])]),t._v(" "),n("div",{staticClass:"static invisible md:visible"},[n("div",{staticClass:"absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},[n("p",{staticClass:"text-red-300 items-center"},[t._v("\n        You can navigate with arrow keys ("),n("button",{on:{click:function(e){return t.navigate_left()}}},[t._v("🡸 back")]),t._v(" | "),n("button",{on:{click:function(e){return t.navigate_top()}}},[t._v("🡱 home")]),t._v(" | "),n("button",{on:{click:function(e){return t.navigate_right()}}},[t._v("🡲 forward")]),t._v(")\n      ")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",{staticClass:"text-gray-500 px-4 mt-5"},[n("a",{attrs:{href:"#"}},[t._v("> Show on the map")])])])}],!1,null,null,null);e.default=component.exports}}]);