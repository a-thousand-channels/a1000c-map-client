(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{353:function(e,t,o){"use strict";(function(e){var n,r=o(11);o(34),o(14),o(68);t.a={target:"static",ssr:!1,static:{prefix:!0},publicPath:e.env.PUBLIC_PATH||"/",defaultDataUrl:"https://orte.link/public/maps/queer-poems-on-places-and-lovers/layers/queer-poems-on-places-and-lovers.json",localDataUrl:"/_content/data",head:{title:"a1000c-map-client",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"},{name:"theme-color",content:"#ffffff"},{name:"msapplication-TileColor",content:"#ffffff"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}]},css:["@/assets/css/fonts.css"],plugins:[{src:"@/plugins/vue-shortkey.js",mode:"client"},{src:"@/plugins/vue-awesome-swiper.js",mode:"client"},{src:"@/plugins/leaflet-curve.js",mode:"client"},{src:"@/plugins/filters.js",mode:"client"},{src:"~/plugins/preview.client.js"}],components:!0,buildModules:["@nuxtjs/tailwindcss"],modules:["@nuxtjs/axios","@nuxtjs/pwa","@nuxt/content",["nuxt-leaflet",{}]],axios:{},pwa:{manifest:{lang:"en"}},content:{},build:{extend:function(e,t){t.isClient&&(e.optimization.splitChunks.maxSize=2e5)}},router:{base:e.env.PUBLIC_PATH||"/",scrollBehavior:(n=Object(r.a)(regeneratorRuntime.mark((function t(o,n,l){var c,d,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e.env.PUBLIC_PATH),console.log("scrollBehavior"),!l){t.next=4;break}return t.abrupt("return",l);case 4:if(c=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",document.querySelector(t)||new Promise((function(e,n){if(o>50)return e();setTimeout((function(){e(c(t,++o||1))}),100)})));case 1:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}(),console.log(n),console.log(o),!o.hash){t.next=27;break}return console.log("Section: "+o.hash),t.next=11,c(o.hash);case 11:return(d=t.sent)&&("scrollBehavior"in document.documentElement.style?(console.log("Scroll smooth to "+d.offsetTop+"/"+d.offsetLeft),document.getElementById("page_inner").scrollTo({top:d.offsetTop,left:d.offsetLeft,behavior:"smooth"})):(console.log("Scroll non smooth to "+d.offsetTop+"/"+d.offsetLeft),document.getElementById("page_inner").scrollTo({top:d.offsetTop,left:d.offsetLeft}))),f=o.query.place_id,console.log("Place query "+f),t.next=17,c("#"+f);case 17:if(!(h=t.sent)){t.next=27;break}if(console.log("Place found at "+h),!("scrollBehavior"in document.documentElement.style)){t.next=25;break}return console.log("Scroll smooth to "+h.offsetTop),t.abrupt("return",document.getElementById("list_content").scrollTo({top:h.offsetTop-20,behavior:"smooth"}));case 25:return console.log("Scroll non smooth to "+h.offsetTop),t.abrupt("return",document.getElementById("list_content").scrollTo({top:h.offsetTop-20}));case 27:return t.abrupt("return",{x:0,y:0});case 28:case"end":return t.stop()}}),t)}))),function(e,t,o){return n.apply(this,arguments)})}}}).call(this,o(114))},356:function(e,t,o){var content=o(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("04177602",content,!0,{sourceMap:!1})},364:function(e,t,o){"use strict";o(356)},365:function(e,t,o){var n=o(49)((function(i){return i[1]}));n.push([e.i,"body{scroll-behavior:smooth;overflow-y:auto;overflow-x:hidden}.bg-white{background-color:hsla(0,0%,100%,.8)}.bg-a100c-1-splash{background:#6f5050;background:linear-gradient(90deg,rgba(111,80,80,.5),rgba(240,235,227,.5) 48%,rgba(146,153,101,.5))}.bg-a100c-1-splash-image{background-image:var(--background-image);background-size:cover}.bg-a100c-1-button,.bg-a100c-1-hover{background:#6f5050;background:linear-gradient(90deg,#6f5050,#dfd6b9 48%,#929965)}.text-color{color:#373030}",""]),n.locals={},e.exports=n},371:function(e,t,o){"use strict";o.r(t);var n=o(89),r=o(11),l=(o(34),o(51),o(35),o(82)),c=o.n(l),d=o(353),f={data:function(){return{dataobj:{},data:{},places:[],places_with_relations:[],custom_data_url:"",data_url:"",default_data_url:d.a.defaultDataUrl}},watch:{"$route.query":"$fetch"},mounted:function(){console.log("Mounted****")},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$route.query.layer?(e.custom_data_url=e.$route.query.layer,e.$store.commit("setlayerUrl",e.$route.query.layer)):e.$store.getters.getlayerUrl&&(e.custom_data_url=e.$store.getters.getlayerUrl),console.log("Start to fetch ..."),console.log(e.dataobj),e.dataobj&&e.dataobj.length>0&&console.log("Data already fetched"),e.custom_data_url?e.data_url=e.custom_data_url:e.data_url=e.default_data_url,t.next=7,e.$content(e.localDataUrl).fetch().catch((function(e){console.log("Error")}));case 7:if(!((o=t.sent).length>0)){t.next=14;break}e.dataobj=o[0],console.log("Fetch LOCAL ..."),console.log(e.dataobj),t.next=22;break;case 14:if(console.log("Fetch LOCAL unvailable ..."),null!=e.dataobj.length){t.next=22;break}return t.next=18,c.a.get(e.data_url).then((function(e){return e.data}));case 18:e.dataobj=t.sent,console.log("fetch REMOTE... "),e.$route.query.layer?console.log("fetch REMOTE URL by param ... "):console.log("fetch REMOTE URL by config ... "),console.log('Layer title: "'+e.dataobj.layer.title+'"');case 22:if(e.dataobj.map)e.data=e.dataobj.map,console.log("Data for a map "),console.log("Data for a map with "+e.data.layer.length+" accessible layers"),e.data.layer.forEach((function(t,o){var r,l;(r=e.places).push.apply(r,Object(n.a)(t.places)),(l=e.places_with_relations).push.apply(l,Object(n.a)(t.places_with_relations))})),console.log("Map with "+e.places.length+" places"),e.data.layer.forEach((function(t,o){for(var i=0;i<t.places.length;i++)e.$set(t.places[i],"state",!1)}));else if(console.log("Data for a single layer"),e.dataobj&&e.dataobj.layer)for(e.data=e.dataobj.layer,e.data.layer=[],e.data.layer[0]=e.dataobj.layer,e.data.mapcenter_lat&&e.data.mapcenter_lon&&(e.mapcenter=[e.data.mapcenter_lat,e.data.mapcenter_lon],console.log("mapcenter "+e.mapcenter)),e.data.zoom&&(e.mapzoom=e.data.zoom),console.log("Data for a map with "+e.data.layer.length+" accessible layer"),e.places=e.data.places,e.places_with_relations=e.data.places_with_relations,e.list_content=e.data.places,console.log("Layer Map with "+e.places.length+" places and "+e.places_with_relations.length+" Relations"),i=0;i<e.data.places.length;i++)e.$set(e.data.places[i],"state",!1);e.data&&e.places&&e.$refs.map&&(e.places.length>0?e.$refs.map.mapObject.fitBounds(e.places.map((function(e){return[e.lat,e.lon]}))):console.log("afterFetch: NO fitBounds w/"+e.places.length),e.data.layer&&(console.log("Check for data.layer w/"+e.data.layer.length+" layer(s)"),e.drawCurves())),e.$set(e.data,"state",!1);case 25:case"end":return t.stop()}}),t)})))()}},h=(o(364),o(55)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"page"}},[this.data.backgroundimage_link||this.data.background_color?o("style",[e._v("\n  :root {\n    --background-color: "+e._s(this.data.background_color?this.data.background_color:"")+";\n    --background-image: url('"+e._s(this.data.backgroundimage_link?this.data.backgroundimage_link:"")+"');\n  }\n   .bg-a100c-1-splash {\n      background: var(--background-color);\n      background-color: var(--background-color);\n      background-image: var(--background-image);\n      background-size: cover;\n   }\n  ")]):e._e(),e._v(" "),o("div",{staticClass:"flex overflow-scroll items-top justify-center min-h-screen bg-a100c-1-splash sm:items-center sm:pt-0"},[o("div",{staticClass:"max-w-4xl mx-auto px-6 py-3 lg:px-12 lg:py-6"},[o("div",{staticClass:"overflow-hidden bg-white shadow sm:rounded-lg mt-4 px-8 py-4 md:px-8 lg:px-8"},[e.data.image_link?o("div",{staticClass:"lg:px-0"},[o("img",{staticClass:"max-w-full sm:max-w-ws max-h-[34rem]",attrs:{src:e.data.image_link,alt:e.data.title}})]):e._e(),e._v(" "),o("h2",{staticClass:"text-4xl mt-4"},[this.data.title?o("span",[e._v(e._s(this.data.title))]):o("span",[e._v("Welcome to the prototype of our web map")])]),e._v(" "),o("p",{staticClass:"mt-3 text-gray-600"},[this.data.subtitle?o("span",[e._v(e._s(this.data.subtitle))]):o("span",[e._v("We are developing a web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.")])]),e._v(" "),o("p",{staticClass:"mt-4 pt-4 text-gray-800"},[o("nuxt-link",{staticClass:"bg-red-400 bg-a100c-1-button text-white text-center px-4 py-2 rounded-lg",attrs:{to:{path:"/main",hash:"map",query:{layer:this.custom_data_url}},id:"jump"}},[e._v("Check it out")])],1),e._v(" "),o("p",{staticClass:"mt-4 pt-4 text-gray-800"},[this.data.tease?o("span",[e._v(e._s(this.data.teaser))]):o("span")])]),e._v(" "),e._m(0)])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mt-4 overflow-hidden bg-white text-small shadow sm:rounded-lg px-8 py-4 md:px-8 lg:px-8"},[o("p",{staticClass:"mt-3 text-gray-600"},[e._v("\n          This map is provided by A thousand channels\n        ")]),o("p",{staticClass:"mt-3 text-gray-600"},[e._v("\n          Give us a shout if you have questions, need help or want to support us. Please visit our "),o("a",{staticStyle:{"text-decoration":"none","background-image":"linear-gradient(120deg, #fde68a 0, #fde68a 100%)","background-repeat":"no-repeat","background-size":"100% 0.4em","background-position":"0 100%"},attrs:{href:"https://github.com/a-thousand-channels/a1000c-map-client"}},[e._v("Website")]),e._v(".\n          We always are very happy about feedback and contributions :)\n        ")]),e._v(" "),o("p",{staticClass:"mt-3"},[o("a",{staticStyle:{"text-decoration":"none","background-image":"linear-gradient(120deg, #fde68a 0, #fde68a 100%)","background-repeat":"no-repeat","background-size":"100% 0.4em","background-position":"0 100%"},attrs:{href:"https://www.a-thousand-channels.xyz/",target:"_blank"}},[e._v("\n            A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁\n          ")])])])}],!1,null,null,null);t.default=component.exports}}]);