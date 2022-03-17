(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{353:function(t,e,n){"use strict";(function(t){var o,r=n(11);n(34),n(14),n(68);e.a={target:"static",ssr:!1,static:{prefix:!0},publicPath:t.env.PUBLIC_PATH||"/",defaultDataUrl:"https://orte-backend.a-thousand-channels.xyz/public/maps/queer-poems-on-places-and-lovers/layers/queer-poems-on-places-and-lovers",localDataUrl:"/_content/data",head:{title:null,titleTemplate:null,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"format-detection",content:"telephone=no"},{name:"theme-color",content:"#ffffff"},{name:"msapplication-TileColor",content:"#ffffff"}],link:[{rel:"manifest",href:"/site.webmanifest"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}]},css:["@/assets/css/fonts.css"],plugins:[{src:"@/plugins/vue-shortkey.js",mode:"client"},{src:"@/plugins/vue-awesome-swiper.js",mode:"client"},{src:"@/plugins/leaflet-curve.js",mode:"client"},{src:"@/plugins/filters.js",mode:"client"},{src:"~/plugins/preview.client.js"}],components:!0,buildModules:["@nuxtjs/tailwindcss"],modules:["@nuxtjs/axios","@nuxtjs/pwa","@nuxt/content",["nuxt-leaflet",{}]],axios:{},pwa:{manifest:{lang:"en"}},content:{},build:{extend:function(t,e){e.isClient&&(t.optimization.splitChunks.maxSize=2e5)}},router:{base:t.env.PUBLIC_PATH||"/",scrollBehavior:(o=Object(r.a)(regeneratorRuntime.mark((function e(n,o,l){var c,d,h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.env.PUBLIC_PATH),console.log("scrollBehavior"),!l){e.next=4;break}return e.abrupt("return",l);case 4:if(c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",document.querySelector(e)||new Promise((function(t,o){if(n>50)return t();setTimeout((function(){t(c(e,++n||1))}),100)})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),console.log(o),console.log(n),!n.hash){e.next=27;break}return console.log("Section: "+n.hash),e.next=11,c(n.hash);case 11:return(d=e.sent)&&("scrollBehavior"in document.documentElement.style?(console.log("Scroll smooth to "+d.offsetTop+"/"+d.offsetLeft),document.getElementById("page_inner").scrollTo({top:d.offsetTop,left:d.offsetLeft,behavior:"smooth"})):(console.log("Scroll non smooth to "+d.offsetTop+"/"+d.offsetLeft),document.getElementById("page_inner").scrollTo({top:d.offsetTop,left:d.offsetLeft}))),h=n.query.place_id,console.log("Place query "+h),e.next=17,c("#"+h);case 17:if(!(f=e.sent)){e.next=27;break}if(console.log("Place found at "+f),!("scrollBehavior"in document.documentElement.style)){e.next=25;break}return console.log("Scroll smooth to "+f.offsetTop),e.abrupt("return",document.getElementById("list_content").scrollTo({top:f.offsetTop-20,behavior:"smooth"}));case 25:return console.log("Scroll non smooth to "+f.offsetTop),e.abrupt("return",document.getElementById("list_content").scrollTo({top:f.offsetTop-20}));case 27:return e.abrupt("return",{x:0,y:0});case 28:case"end":return e.stop()}}),e)}))),function(t,e,n){return o.apply(this,arguments)})}}}).call(this,n(114))},356:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("04177602",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n(356)},365:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,"body.splash{scroll-behavior:smooth;overflow-y:scroll;overflow-x:hidden}.bg-white{background-color:hsla(0,0%,100%,.8)}.bg-a100c-1-splash{background:#6f5050;background:linear-gradient(90deg,rgba(80,80,80,.9),hsla(0,0%,77.3%,.9) 48%,rgba(80,80,80,.9))}.bg-a100c-1-splash-image{background-image:var(--background-image);background-size:cover}.bg-a100c-1-button,.bg-a100c-1-hover{background:#6f5050;background:linear-gradient(90deg,#6f5050,#dfd6b9 48%,#929965)}.bg-a100c-1{background:#6f5050;background:linear-gradient(90deg,rgba(240,235,227,.5),rgba(146,153,101,.5) 48%,rgba(111,80,80,.5) 100%)}.bg-a100c-2{background:#6f5050;background:linear-gradient(90deg,rgba(111,80,80,.5),rgba(240,235,227,.85) 48%,rgba(146,153,101,.5))}.bg-a100c-3{background:#6f5050;background:linear-gradient(90deg,rgba(146,153,101,.5),rgba(111,80,80,.5) 48%,rgba(240,235,227,.5))}.text-color{color:#373030}",""]),o.locals={},t.exports=o},371:function(t,e,n){"use strict";n.r(e);var o=n(89),r=n(11),l=(n(34),n(51),n(35),n(82)),c=n.n(l),d=n(353),h={data:function(){return{title:"A 1000 Channels map prototype",dataobj:{},data:{},places:[],places_with_relations:[],custom_data_url:"",data_url:"",default_data_url:d.a.defaultDataUrl}},head:function(){return{title:this.data.title||null,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"title",name:"title",content:this.data.title||this.title},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:this.data.title||this.title},{hid:"og:site_name",name:"og:site_name",content:this.data.title||this.title},{hid:"og:title",name:"og:title",content:this.data.title||this.title},{hid:"description",name:"description",content:this.data.subtitle||"This is the demo version of a web map, that can easily be generated and published on the web."},{hid:"og:description",name:"og:description",content:this.data.subtitle||"This is the demo version of a web map, that can easily be generated and published on the web."},{name:"og:image",content:this.data.image_link||"https://a-thousand-channels.github.io/a1000c-map-client/a-thousand-channels--logo-variant-a--short.png"},{name:"format-detection",content:"telephone=no"},{name:"theme-color",content:"#ffffff"},{name:"msapplication-TileColor",content:"#ffffff"}],link:[{hid:"icon",rel:"icon",type:"image/x-icon",href:this.data.favicon_link||"/favicon.ico"},{hid:"apple-touch-icon",rel:"apple-touch-icon",sizes:"120x120",href:this.data.favicon_link||"/apple-touch-icon.png"},{hid:"icon-32",rel:"icon",type:"image/png",sizes:"32x32",href:this.data.favicon_link||"/favicon-32x32.png"},{hid:"icon-16",rel:"icon",type:"image/png",sizes:"16x16",href:this.data.favicon_link||"/favicon-16x16.png"}]}},watch:{"$route.query":"$fetch"},mounted:function(){document.body.classList.remove("main"),document.body.classList.add("splash"),console.log("Mounted****")},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$route.query.layer?(t.custom_data_url=t.$route.query.layer,t.$store.commit("setlayerUrl",t.$route.query.layer)):t.$store.getters.getlayerUrl&&(t.custom_data_url=t.$store.getters.getlayerUrl),console.log("Start to fetch ..."),console.log(t.dataobj),t.dataobj&&t.dataobj.length>0&&console.log("Data already fetched"),t.custom_data_url?t.data_url=t.custom_data_url:t.data_url=t.default_data_url,e.next=7,t.$content(t.localDataUrl).fetch().catch((function(t){console.log("Error")}));case 7:if(!((n=e.sent).length>0)){e.next=14;break}t.dataobj=n[0],console.log("Fetch LOCAL ..."),console.log(t.dataobj),e.next=22;break;case 14:if(console.log("Fetch LOCAL unvailable ..."),null!=t.dataobj.length){e.next=22;break}return e.next=18,c.a.get(t.data_url).then((function(t){return t.data}));case 18:t.dataobj=e.sent,console.log("fetch REMOTE... "),t.$route.query.layer?console.log("fetch REMOTE URL by param ... "):console.log("fetch REMOTE URL by config ... "),console.log('Layer title: "'+t.dataobj.layer.title+'"');case 22:if(t.dataobj.map)t.data=t.dataobj.map,console.log("Data for a map "),console.log("Data for a map with "+t.data.layer.length+" accessible layers"),t.data.layer.forEach((function(e,n){var r,l;(r=t.places).push.apply(r,Object(o.a)(e.places)),(l=t.places_with_relations).push.apply(l,Object(o.a)(e.places_with_relations))})),console.log("Map with "+t.places.length+" places"),t.data.layer.forEach((function(e,n){for(var i=0;i<e.places.length;i++)t.$set(e.places[i],"state",!1)}));else if(console.log("Data for a single layer"),t.dataobj&&t.dataobj.layer)for(t.data=t.dataobj.layer,t.data.layer=[],t.data.layer[0]=t.dataobj.layer,t.data.mapcenter_lat&&t.data.mapcenter_lon&&(t.mapcenter=[t.data.mapcenter_lat,t.data.mapcenter_lon],console.log("mapcenter "+t.mapcenter)),t.data.zoom&&(t.mapzoom=t.data.zoom),console.log("Data for a map with "+t.data.layer.length+" accessible layer"),t.places=t.data.places,t.places_with_relations=t.data.places_with_relations,t.list_content=t.data.places,console.log("Layer Map with "+t.places.length+" places and "+t.places_with_relations.length+" Relations"),i=0;i<t.data.places.length;i++)t.$set(t.data.places[i],"state",!1);t.data&&t.places&&t.$refs.map&&(t.places.length>0?t.$refs.map.mapObject.fitBounds(t.places.map((function(t){return[t.lat,t.lon]}))):console.log("afterFetch: NO fitBounds w/"+t.places.length),t.data.layer&&(console.log("Check for data.layer w/"+t.data.layer.length+" layer(s)"),t.drawCurves())),t.$set(t.data,"state",!1);case 25:case"end":return e.stop()}}),e)})))()},fetchDelay:50},f=(n(364),n(55)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[this.data.backgroundimage_link&&this.data.background_color?n("style",[t._v("\n    :root {\n      --background-color: "+t._s(this.data.background_color?this.data.background_color:"")+";\n      --background-image: url('"+t._s(this.data.backgroundimage_link?this.data.backgroundimage_link:"")+"');\n    }\n      .bg-a100c-1-splash {\n        background-image: var(--background-image);\n        background-color: var(--background-color);\n        background-size: cover;\n     }\n     .bg-a100c-1-button {\n        background: none;\n        background-color: rgba(242, 71, 38, 1);\n     }\n  ")]):!this.data.backgroundimage_link&&this.data.background_color?n("style",[t._v("\n    :root {\n      --background-color: "+t._s(this.data.background_color?this.data.background_color:"")+";\n    }\n     .bg-a100c-1-splash {\n        background: var(--background-color);\n        background-color: none;\n        background-size: cover;\n     }\n     .bg-a100c-1-button {\n        background: none;\n        background-color: rgba(242, 71, 38, 1);\n     }\n      #map #map_map {\n         background-color: var(--background-color);\n      }\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"flex items-top justify-center min-h-screen bg-a100c-1-splash sm:items-center sm:pt-0"},[t.$fetchState.pending?n("p",{staticClass:"text-sm text-color"},[t._v("Loading...")]):n("div",[n("div",{staticClass:"max-w-4xl mx-auto px-6 py-3 lg:px-12 lg:py-6"},[n("div",{staticClass:"bg-white shadow sm:rounded-lg mt-4 px-8 py-4 md:px-8 lg:px-8"},[t.data.image_link?n("div",{staticClass:"lg:px-0"},[n("img",{staticClass:"mx-auto max-w-full sm:max-w-ws max-h-[34rem]",attrs:{src:t.data.image_link,alt:t.data.title}})]):t._e(),t._v(" "),n("h2",{staticClass:"text-4xl mt-4"},[this.data.title?n("span",[t._v(t._s(this.data.title))]):n("span",[t._v("Welcome to the prototype of our web map")])]),t._v(" "),n("p",{staticClass:"mt-3 text-gray-600"},[this.data.subtitle?n("span",[t._v(t._s(this.data.subtitle))]):n("span",[t._v("We are developing a web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.")])]),t._v(" "),n("p",{staticClass:"mt-4 pt-4 text-gray-800"},[n("nuxt-link",{staticClass:"bg-red-400 bg-a100c-1-button text-white text-center px-4 py-2 rounded-lg",attrs:{to:{path:"/main",hash:"map",query:{layer:this.custom_data_url}},id:"jump"}},[t._v("Check it out")])],1),t._v(" "),n("p",{staticClass:"mt-4 pt-4 text-gray-800"},[this.data.teaser?n("span",{domProps:{innerHTML:t._s(this.data.teaser)}}):n("span")])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 bg-white text-small shadow sm:rounded-lg px-8 py-4 md:px-8 lg:px-8"},[n("p",{staticClass:"mt-3 text-gray-600"},[t._v("\n            This demo map is provided by A thousand channels\n          ")]),n("p",{staticClass:"mt-3 text-gray-600"},[t._v("\n            Give us a shout if you have questions, need help or want to support us. Please visit our "),n("a",{staticStyle:{"text-decoration":"none","background-image":"linear-gradient(120deg, #fde68a 0, #fde68a 100%)","background-repeat":"no-repeat","background-size":"100% 0.4em","background-position":"0 100%"},attrs:{href:"https://www.a-thousand-channels.xyz/"}},[t._v("Website")]),t._v(".\n            We always are very happy about feedback and contributions :)\n          ")]),t._v(" "),n("p",{staticClass:"mt-3"},[n("a",{staticStyle:{"text-decoration":"none","background-image":"linear-gradient(120deg, #fde68a 0, #fde68a 100%)","background-repeat":"no-repeat","background-size":"100% 0.4em","background-position":"0 100%"},attrs:{href:"https://www.a-thousand-channels.xyz/",target:"_blank"}},[t._v("\n              A Thousand Channels – a queer 🏳️‍🌈 mapping 🌎 platform 🎁\n            ")])])])}],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e);var o={mounted:function(){}},r=n(55),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("Splash")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Splash:n(371).default})}}]);