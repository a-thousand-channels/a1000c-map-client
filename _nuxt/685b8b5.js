(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{353:function(e,t,n){"use strict";(function(e){var o,r=n(11);n(34),n(14),n(68);t.a={target:"static",ssr:!1,static:{prefix:!0},publicPath:e.env.PUBLIC_PATH||"/",defaultDataUrl:"https://orte-backend.a-thousand-channels.xyz/public/maps/queer-poems-on-places-and-lovers/layers/queer-poems-on-places-and-lovers",localDataUrl:"/_content/data",head:{title:"a1000c-map-client",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"title",name:"title",content:"A 1000 Channels map prototype"},{hid:"og:title",name:"og:title",content:"A 1000 Channels map prototype"},{hid:"description",name:"description",content:"This is the demo version of a web map, that can easily be generated and published on the web."},{hid:"og:description",name:"og:description",content:"This is the demo version of a web map, that can easily be generated and published on the web."},{hid:"og:description",name:"og:image",content:"https://a-thousand-channels.github.io/a1000c-map-client/a-thousand-channels--logo-variant-a--short.png"},{name:"format-detection",content:"telephone=no"},{name:"theme-color",content:"#ffffff"},{name:"msapplication-TileColor",content:"#ffffff"}],link:[{hid:"icon",rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{hid:"apple-touch-icon",rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon.png"},{hid:"icon-32",rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{hid:"icon-16",rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"manifest",href:"/site.webmanifest"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}]},css:["@/assets/css/fonts.css"],plugins:[{src:"@/plugins/vue-shortkey.js",mode:"client"},{src:"@/plugins/vue-awesome-swiper.js",mode:"client"},{src:"@/plugins/leaflet-curve.js",mode:"client"},{src:"@/plugins/filters.js",mode:"client"},{src:"~/plugins/preview.client.js"}],components:!0,buildModules:["@nuxtjs/tailwindcss"],modules:["@nuxtjs/axios","@nuxtjs/pwa","@nuxt/content",["nuxt-leaflet",{}]],axios:{},pwa:{manifest:{lang:"en"}},content:{},build:{extend:function(e,t){t.isClient&&(e.optimization.splitChunks.maxSize=2e5)}},router:{base:e.env.PUBLIC_PATH||"/",scrollBehavior:(o=Object(r.a)(regeneratorRuntime.mark((function t(n,o,l){var c,d,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e.env.PUBLIC_PATH),console.log("scrollBehavior"),!l){t.next=4;break}return t.abrupt("return",l);case 4:if(c=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",document.querySelector(t)||new Promise((function(e,o){if(n>50)return e();setTimeout((function(){e(c(t,++n||1))}),100)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),console.log(o),console.log(n),!n.hash){t.next=27;break}return console.log("Section: "+n.hash),t.next=11,c(n.hash);case 11:return(d=t.sent)&&("scrollBehavior"in document.documentElement.style?(console.log("Scroll smooth to "+d.offsetTop+"/"+d.offsetLeft),document.getElementById("page_inner").scrollTo({top:d.offsetTop,left:d.offsetLeft,behavior:"smooth"})):(console.log("Scroll non smooth to "+d.offsetTop+"/"+d.offsetLeft),document.getElementById("page_inner").scrollTo({top:d.offsetTop,left:d.offsetLeft}))),h=n.query.place_id,console.log("Place query "+h),t.next=17,c("#"+h);case 17:if(!(m=t.sent)){t.next=27;break}if(console.log("Place found at "+m),!("scrollBehavior"in document.documentElement.style)){t.next=25;break}return console.log("Scroll smooth to "+m.offsetTop),t.abrupt("return",document.getElementById("list_content").scrollTo({top:m.offsetTop-20,behavior:"smooth"}));case 25:return console.log("Scroll non smooth to "+m.offsetTop),t.abrupt("return",document.getElementById("list_content").scrollTo({top:m.offsetTop-20}));case 27:return t.abrupt("return",{x:0,y:0});case 28:case"end":return t.stop()}}),t)}))),function(e,t,n){return o.apply(this,arguments)})}}}).call(this,n(114))},356:function(e,t,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("04177602",content,!0,{sourceMap:!1})},364:function(e,t,n){"use strict";n(356)},365:function(e,t,n){var o=n(49)((function(i){return i[1]}));o.push([e.i,"body.splash{scroll-behavior:smooth;overflow-y:scroll;overflow-x:hidden}.bg-white{background-color:hsla(0,0%,100%,.8)}.bg-a100c-1-splash{background:#6f5050;background:linear-gradient(90deg,rgba(111,80,80,.5),rgba(240,235,227,.5) 48%,rgba(146,153,101,.5))}.bg-a100c-1-splash-image{background-image:var(--background-image);background-size:cover}.bg-a100c-1-button,.bg-a100c-1-hover{background:#6f5050;background:linear-gradient(90deg,#6f5050,#dfd6b9 48%,#929965)}.bg-a100c-1{background:#6f5050;background:linear-gradient(90deg,rgba(240,235,227,.5),rgba(146,153,101,.5) 48%,rgba(111,80,80,.5) 100%)}.bg-a100c-2{background:#6f5050;background:linear-gradient(90deg,rgba(111,80,80,.5),rgba(240,235,227,.85) 48%,rgba(146,153,101,.5))}.bg-a100c-3{background:#6f5050;background:linear-gradient(90deg,rgba(146,153,101,.5),rgba(111,80,80,.5) 48%,rgba(240,235,227,.5))}.text-color{color:#373030}",""]),o.locals={},e.exports=o},371:function(e,t,n){"use strict";n.r(t);var o=n(89),r=n(11),l=(n(34),n(51),n(35),n(82)),c=n.n(l),d=n(353),h={data:function(){return{title:"A 1000 Channels map prototype",dataobj:{},data:{},places:[],places_with_relations:[],custom_data_url:"",data_url:"",default_data_url:d.a.defaultDataUrl}},head:function(){return{title:this.data.title||this.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"title",name:"title",content:this.data.title||this.title},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:this.data.title||this.title},{hid:"og:site_name",name:"og:site_name",content:this.data.title||this.title},{hid:"og:title",name:"og:title",content:this.data.title||this.title},{hid:"description",name:"description",content:this.data.subtitle||"This is the demo version of a web map, that can easily be generated and published on the web."},{hid:"og:description",name:"og:description",content:this.data.subtitle||"This is the demo version of a web map, that can easily be generated and published on the web."},{name:"og:image",content:this.data.image_link||"https://a-thousand-channels.github.io/a1000c-map-client/a-thousand-channels--logo-variant-a--short.png"},{name:"format-detection",content:"telephone=no"},{name:"theme-color",content:"#ffffff"},{name:"msapplication-TileColor",content:"#ffffff"}],link:[{hid:"icon",rel:"icon",type:"image/x-icon",href:this.data.favicon_link||"/favicon.ico"},{hid:"apple-touch-icon",rel:"apple-touch-icon",sizes:"120x120",href:this.data.favicon_link||"/apple-touch-icon.png"},{hid:"icon-32",rel:"icon",type:"image/png",sizes:"32x32",href:this.data.favicon_link||"/favicon-32x32.png"},{hid:"icon-16",rel:"icon",type:"image/png",sizes:"16x16",href:this.data.favicon_link||"/favicon-16x16.png"}]}},watch:{"$route.query":"$fetch"},mounted:function(){document.body.classList.remove("main"),document.body.classList.add("splash"),console.log("Mounted****")},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$route.query.layer?(e.custom_data_url=e.$route.query.layer,e.$store.commit("setlayerUrl",e.$route.query.layer)):e.$store.getters.getlayerUrl&&(e.custom_data_url=e.$store.getters.getlayerUrl),console.log("Start to fetch ..."),console.log(e.dataobj),e.dataobj&&e.dataobj.length>0&&console.log("Data already fetched"),e.custom_data_url?e.data_url=e.custom_data_url:e.data_url=e.default_data_url,t.next=7,e.$content(e.localDataUrl).fetch().catch((function(e){console.log("Error")}));case 7:if(!((n=t.sent).length>0)){t.next=14;break}e.dataobj=n[0],console.log("Fetch LOCAL ..."),console.log(e.dataobj),t.next=22;break;case 14:if(console.log("Fetch LOCAL unvailable ..."),null!=e.dataobj.length){t.next=22;break}return t.next=18,c.a.get(e.data_url).then((function(e){return e.data}));case 18:e.dataobj=t.sent,console.log("fetch REMOTE... "),e.$route.query.layer?console.log("fetch REMOTE URL by param ... "):console.log("fetch REMOTE URL by config ... "),console.log('Layer title: "'+e.dataobj.layer.title+'"');case 22:if(e.dataobj.map)e.data=e.dataobj.map,console.log("Data for a map "),console.log("Data for a map with "+e.data.layer.length+" accessible layers"),e.data.layer.forEach((function(t,n){var r,l;(r=e.places).push.apply(r,Object(o.a)(t.places)),(l=e.places_with_relations).push.apply(l,Object(o.a)(t.places_with_relations))})),console.log("Map with "+e.places.length+" places"),e.data.layer.forEach((function(t,n){for(var i=0;i<t.places.length;i++)e.$set(t.places[i],"state",!1)}));else if(console.log("Data for a single layer"),e.dataobj&&e.dataobj.layer)for(e.data=e.dataobj.layer,e.data.layer=[],e.data.layer[0]=e.dataobj.layer,e.data.mapcenter_lat&&e.data.mapcenter_lon&&(e.mapcenter=[e.data.mapcenter_lat,e.data.mapcenter_lon],console.log("mapcenter "+e.mapcenter)),e.data.zoom&&(e.mapzoom=e.data.zoom),console.log("Data for a map with "+e.data.layer.length+" accessible layer"),e.places=e.data.places,e.places_with_relations=e.data.places_with_relations,e.list_content=e.data.places,console.log("Layer Map with "+e.places.length+" places and "+e.places_with_relations.length+" Relations"),i=0;i<e.data.places.length;i++)e.$set(e.data.places[i],"state",!1);e.data&&e.places&&e.$refs.map&&(e.places.length>0?e.$refs.map.mapObject.fitBounds(e.places.map((function(e){return[e.lat,e.lon]}))):console.log("afterFetch: NO fitBounds w/"+e.places.length),e.data.layer&&(console.log("Check for data.layer w/"+e.data.layer.length+" layer(s)"),e.drawCurves())),e.$set(e.data,"state",!1);case 25:case"end":return t.stop()}}),t)})))()}},m=(n(364),n(55)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"page"}},[this.data.backgroundimage_link&&this.data.background_color?n("style",[e._v("\n    :root {\n      --background-color: "+e._s(this.data.background_color?this.data.background_color:"")+";\n      --background-image: url('"+e._s(this.data.backgroundimage_link?this.data.backgroundimage_link:"")+"');\n    }\n      .bg-a100c-1-splash {\n        background-image: var(--background-image);\n        background-color: var(--background-color);\n        background-size: cover;\n     }\n     .bg-a100c-1-button {\n        background: none;\n        background-color: rgba(242, 71, 38, 1);\n     }\n  ")]):!this.data.backgroundimage_link&&this.data.background_color?n("style",[e._v("\n    :root {\n      --background-color: "+e._s(this.data.background_color?this.data.background_color:"")+";\n    }\n     .bg-a100c-1-splash {\n        background: var(--background-color);\n        background-color: none;\n        background-size: cover;\n     }\n     .bg-a100c-1-button {\n        background: none;\n        background-color: rgba(242, 71, 38, 1);\n     }\n      #map #map_map {\n         background-color: var(--background-color);\n      }\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"flex items-top justify-center min-h-screen bg-a100c-1-splash sm:items-center sm:pt-0"},[n("div",{staticClass:"max-w-4xl mx-auto px-6 py-3 lg:px-12 lg:py-6"},[n("div",{staticClass:"bg-white shadow sm:rounded-lg mt-4 px-8 py-4 md:px-8 lg:px-8"},[e.data.image_link?n("div",{staticClass:"lg:px-0"},[n("img",{staticClass:"mx-auto max-w-full sm:max-w-ws max-h-[34rem]",attrs:{src:e.data.image_link,alt:e.data.title}})]):e._e(),e._v(" "),n("h2",{staticClass:"text-4xl mt-4"},[this.data.title?n("span",[e._v(e._s(this.data.title))]):n("span",[e._v("Welcome to the prototype of our web map")])]),e._v(" "),n("p",{staticClass:"mt-3 text-gray-600"},[this.data.subtitle?n("span",[e._v(e._s(this.data.subtitle))]):n("span",[e._v("We are developing a web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.")])]),e._v(" "),n("p",{staticClass:"mt-4 pt-4 text-gray-800"},[n("nuxt-link",{staticClass:"bg-red-400 bg-a100c-1-button text-white text-center px-4 py-2 rounded-lg",attrs:{to:{path:"/main",hash:"map",query:{layer:this.custom_data_url}},id:"jump"}},[e._v("Check it out")])],1),e._v(" "),n("p",{staticClass:"mt-4 pt-4 text-gray-800"},[this.data.teaser?n("span",{domProps:{innerHTML:e._s(this.data.teaser)}}):n("span")])]),e._v(" "),e._m(0)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-4 bg-white text-small shadow sm:rounded-lg px-8 py-4 md:px-8 lg:px-8"},[n("p",{staticClass:"mt-3 text-gray-600"},[e._v("\n          This demo map is provided by A thousand channels\n        ")]),n("p",{staticClass:"mt-3 text-gray-600"},[e._v("\n          Give us a shout if you have questions, need help or want to support us. Please visit our "),n("a",{staticStyle:{"text-decoration":"none","background-image":"linear-gradient(120deg, #fde68a 0, #fde68a 100%)","background-repeat":"no-repeat","background-size":"100% 0.4em","background-position":"0 100%"},attrs:{href:"https://www.a-thousand-channels.xyz/"}},[e._v("Website")]),e._v(".\n          We always are very happy about feedback and contributions :)\n        ")]),e._v(" "),n("p",{staticClass:"mt-3"},[n("a",{staticStyle:{"text-decoration":"none","background-image":"linear-gradient(120deg, #fde68a 0, #fde68a 100%)","background-repeat":"no-repeat","background-size":"100% 0.4em","background-position":"0 100%"},attrs:{href:"https://www.a-thousand-channels.xyz/",target:"_blank"}},[e._v("\n            A Thousand Channels – a queer 🏳️‍🌈 mapping 🌎 platform 🎁\n          ")])])])}],!1,null,null,null);t.default=component.exports}}]);