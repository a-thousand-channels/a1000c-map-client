(window.webpackJsonp=window.webpackJsonp||[]).push([[0,8,9,10,11],{340:function(t,e,o){var content=o(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("a939a93c",content,!0,{sourceMap:!1})},341:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-regular.dbff3f2.woff2"},342:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-regular.76cc122.woff"},343:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-600.877104d.woff2"},344:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-600.12d5796.woff"},345:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-800.4c45305.woff2"},346:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-800.46f92a2.woff"},347:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-italic.3eba87b.woff2"},348:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-italic.307f44c.woff"},349:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-600italic.bdf869f.woff2"},350:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-600italic.0d3f0e8.woff"},351:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-800italic.0779094.woff2"},352:function(t,e,o){t.exports=o.p+"fonts/work-sans-v13-latin-ext_latin-800italic.00be295.woff"},354:function(t,e,o){"use strict";var n=o(17),l=o(5),r=o(8),c=o(116),d=o(25),h=o(20),f=o(226),m=o(51),v=o(115),x=o(225),w=o(9),_=o(87).f,y=o(41).f,k=o(23).f,C=o(355),M=o(227).trim,$="Number",z=l.Number,L=z.prototype,j=l.TypeError,T=r("".slice),I=r("".charCodeAt),N=function(t){var e=x(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,o,n,l,r,c,d,code,h=x(t,"number");if(v(h))throw j("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=M(h),43===(e=I(h,0))||45===e){if(88===(o=I(h,2))||120===o)return NaN}else if(48===e){switch(I(h,1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+h}for(c=(r=T(h,2)).length,d=0;d<c;d++)if((code=I(r,d))<48||code>l)return NaN;return parseInt(r,n)}return+h};if(c($,!z(" 0o1")||!z("0b1")||z("+0x1"))){for(var S,E=function(t){var e=arguments.length<1?0:z(N(t)),o=this;return m(L,o)&&w((function(){C(o)}))?f(Object(e),o,E):e},O=n?_(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;O.length>H;H++)h(z,S=O[H])&&!h(E,S)&&k(E,S,y(z,S));E.prototype=L,L.constructor=E,d(l,$,E)}},355:function(t,e,o){var n=o(8);t.exports=n(1..valueOf)},356:function(t,e,o){"use strict";var n=o(10),l=o(72).findIndex,r=o(114),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},357:function(t,e,o){"use strict";o(340)},358:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,".places-list{display:block;margin-top:-6px}.modal{transition:all 1s ease-out;opacity:0;height:0;width:0;overflow:hidden}.modal,.modal.is-active{display:block;min-width:none}.modal.is-active{transition:all .6s ease-in;opacity:1;height:auto;width:auto}.modal-content{min-width:15em}",""]),n.locals={},t.exports=n},362:function(t,e,o){"use strict";o.r(e);var n=o(31),l=(o(354),o(50),{props:{places:{type:Array,required:!1},data:{type:Object,required:!1},layerindex:{type:Number,required:!1},map:{type:Object,required:!1}},components:{},methods:{recenterMap:function(t,e,o){var n=this;this.$nextTick((function(){console.log("recenter map to "+t+"/"+e),n.$router.push({name:"main",hash:"#map"}),n.map.flyTo([t,e],17)}))}},data:function(){return{swiperOptions:Object(n.a)({width:null,slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},paginationClickable:!0},"spaceBetween",50)}},computed:{},mounted:function(){}}),r=o(55),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("ul",{staticClass:"pb-10"},[0==t.places.length?o("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[o("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"}})]),t._v("\n      Please go left to see\n      "),o("nuxt-link",{staticClass:"text-link",attrs:{to:{path:"/main",hash:"map"}}},[t._v("\n        our map\n      ")]),t._v("\n      and select a place or layer to see more details here.\n    ")],1):t._e(),t._v(" "),t.places?o("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4 "},[o("h2",{staticClass:"font-semibold pl-0 md:pl-12"},[t.data.title!=t.data.layer[parseInt(t.layerindex)].title?o("span",[t._v(t._s(t.data.title))]):o("span",[o("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Start")])],1),t._v(" "),t.data.layer[parseInt(t.layerindex)]?o("span",[t._v("— "+t._s(t.data.layer[parseInt(t.layerindex)].title))]):t._e()])]):o("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[o("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z"}})]),t._v(" Or check the\n      "),o("nuxt-link",{staticClass:"text-link",attrs:{to:{path:"/main",hash:"info"}}},[t._v("\n        info page\n      ")]),t._v("\n      to learn more about this map :)\n    ")],1),t._v(" "),t._l(t.places,(function(e,n){return o("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4",attrs:{id:"list-place-"+e.id}},[o("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:t.swiperOptions,expression:"swiperOptions",arg:n}],staticClass:"md:px-12"},[e.images?o("div",{staticClass:"swiper-wrapper"},t._l(e.images,(function(image,n){return o("div",{key:n,staticClass:"swiper-slide px-0 pb-4 pt-2 sm:px-4 sm:pt-4"},[e.images.length>1?o("p",{staticClass:"text-sm text-gray max-w-60 text-left"},[t._v("("+t._s(n+1)+"/"+t._s(e.images.length)+")")]):t._e(),t._v(" "),o("span",image?[o("img",{staticClass:"max-w-full sm:max-w-ws max-h-72 sm:max-h-80 lg:max-h-96",attrs:{src:image.image_url,alt:image.alt}}),t._v(" "),o("span",{staticClass:"text-sm leading-tight text-gray max-w-60"},[t._v(t._s(image.title))])]:[o("img",{attrs:{src:"https://via.placeholder.com/585x870?text=Platzhalter_585x870px",alt:""}})])])})),0):t._e(),t._v(" "),o("div",{staticClass:"swiper-pagination"})]),t._v(" "),o("h3",{staticClass:"font-semibold text-lg px-4 py-2 sm:px-16 sm:pt-6"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"text-gray-500 px-4 sm:px-16 sm:py-3",domProps:{innerHTML:t._s(e.teaser)}}),t._v(" "),e.audiolink?o("div",{staticClass:"player-wrapper px-4 sm:px-16 sm:py-3",attrs:{id:"list-audio-"+e.id},domProps:{innerHTML:t._s(e.audiolink)}}):t._e(),t._v(" "),e.annotations.length>0?o("ul",{staticClass:"pb-0 sm:px-8"},t._l(e.annotations,(function(e,n){return o("li",{staticClass:"bg-a100c-3 px-4 py-6 rounded shadow mt-4 mb-6"},[e.title?o("h4",{staticClass:"font-semibold text-md px-4 py-2"},[t._v(t._s(e.title))]):t._e(),t._v(" "),o("div",{staticClass:"text-gray-500 px-4",domProps:{innerHTML:t._s(e.text)}})])})),0):t._e(),t._v(" "),o("footer",{staticClass:"pb-4"},[o("p",{staticClass:"text-gray-500 px-4 py-2 sm:px-16 sm:py-3"},[o("button",{staticClass:"text-link",on:{click:function(o){return t.recenterMap(e.lat,e.lon,n)}}},[t._v("Show on the map")])])])])}))],2)])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,o){"use strict";o.r(e);var n={props:{data:{type:Object,required:!0}},components:{},methods:{},data:function(){return{}},computed:{},mounted:function(){}},l=o(55),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"block bg-a100c-white rounded shadow py-2 px-2 sm:px-6 lg:px-8 lg:py-8"},[t.data.image_link?o("div",{staticClass:"lg:px-8",attrs:{id:"info_image"}},[o("img",{staticClass:"max-w-full sm:max-w-ws",attrs:{src:t.data.image_link,alt:t.data.title}})]):t._e(),t._v(" "),o("div",{staticClass:"my-2",attrs:{id:"info_content"}},[o("div",{attrs:{id:"info_content_header"}},[o("h2",{staticClass:"block font-semibold text-2xl px-4 py-1 lg:px-8"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.subtitle?o("h3",{staticClass:"block font-semibold text-md px-4 py-1 lg:px-8"},[t._v(t._s(t.data.subtitle))]):t._e()]),t._v(" "),o("div",{staticClass:"block px-4 py-1 lg:px-8",domProps:{innerHTML:t._s(t.data.text)}}),t._v(" "),t.data.credits?o("div",{staticClass:"block text-sm text-grey-500  px-4 py-2 lg:px-8",domProps:{innerHTML:t._s(t.data.credits)}}):t._e()])]),t._v(" "),o("div",{staticClass:"block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4"},[o("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"}})]),t._v("\n    Please go right to see\n    "),o("nuxt-link",{staticClass:"text-link",attrs:{to:{path:"/main",hash:"map"}}},[t._v("\n      the map\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,o){"use strict";o.r(e);var n={props:{data:{type:Object,required:!0},layers:{type:Array,required:!0}},components:{},methods:{closeModal:function(t){this.data.state=!1,t.state=!1},showPlaceInList:function(t){var e=this;this.$nextTick((function(){e.data.state=!e.data.state,t.state=!t.state,console.log("show place "+t.id+" in list"),e.$router.push({name:"main",hash:"#list",query:{place_id:"list-place-"+t.id}})}))}},data:function(){return{}},computed:{},mounted:function(){}},l=(o(357),o(55)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"places-list sm:relative z-50"},t._l(t.layers,(function(e,n){return o("div",{},t._l(e.places,(function(l,r){return o("div",[o("div",{staticClass:"modal",class:{"is-active":l.state},attrs:{id:"place-"+l.id}},[o("div",{staticClass:"modal-background"}),t._v(" "),o("div",{staticClass:"modal-content absolute inset-4 p-4 pt-2 m-1 z-50 sm:relative sm:inset-0 sm:mt-7 sm:mr-10 md:mt-8 md:mr-18 bg-white bg-a100c-white overflow-hiddenX overflow-x-auto shadow min-w-none sm:min-w-min sm:max-w-md"},[o("div",{staticClass:"text-right px-0 py-0 w-8 float-right text-3xl"},[o("button",{staticClass:"close-button",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal(l)}}},[t._v("×")])]),t._v(" "),l.images&&l.images.length>0?o("div",{staticClass:"px-0 pb-4 sm:px-4"},[o("div",{},[l.images[0]?o("span",[o("img",{staticClass:"max-w-full sm:max-w-md max-h-56 sm:max-h-60 lg:max-h-64",attrs:{src:l.images[0].image_url,alt:l.images[0].alt}})]):t._e()])]):t._e(),t._v(" "),o("div",{staticClass:"modal-header pt-1 sm:pt-2 px-4"},[o("p",{staticClass:"text-sm sm:text-md my-0 sm:my-4"},[t.data.title!=e.title?o("span",[t._v(t._s(t.data.title)+" ")]):o("span",[o("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.data.layer[parseInt(n)]?o("span",[t._v("— "+t._s(t.data.layer[parseInt(n)].title))]):t._e()]),t._v(" "),o("h2",{staticClass:"text-sm sm:text-md"},[o("strong",[t._v(t._s(l.title))]),t._v(" ("+t._s(l.id)+")")])]),t._v(" "),o("div",{staticClass:"modal-content"},[l.teaser?o("div",{staticClass:"text-sm sm:text-md  text-gray-500 px-4",domProps:{innerHTML:t._f("truncate")(l.teaser,200,"...")}}):t._e()]),t._v(" "),o("div",{staticClass:"modal-player"},[o("p",{staticClass:"captions",attrs:{id:"place-"+l.id+"-infos"}}),t._v(" "),l.audio?o("div",{staticClass:"player-wrapper px-4",attrs:{id:"audio"}},[o("audio-player",{attrs:{place:l}})],1):t._e(),t._v(" "),l.audiolink?o("div",{staticClass:"player-wrapper px-4",attrs:{id:"audio"},domProps:{innerHTML:t._s(l.audiolink)}}):t._e()]),t._v(" "),o("footer",[o("p",{staticClass:"text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4"},[o("button",{staticClass:"text-link",on:{click:function(e){return t.showPlaceInList(l)}}},[t._v("Show details")])])])])])])})),0)})),0)}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,o){"use strict";o.r(e);var n={props:{},components:{},methods:{navigate_top:function(){console.log("<-- top "+this.$route.hash),this.$router.push({name:"index",hash:""})},navigate_left:function(){console.log("<-- from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#info":"#list"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)},navigate_right:function(){console.log("--\x3e from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#list":"#info"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)}},data:function(){return{}},computed:{},mounted:function(){}},l=o(55),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"static z-50 invisible md:visible"},[o("div",{staticClass:"absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3"},[o("p",{staticClass:"text-red-300 bg-red-100 px-2 py-0.5 rounded-sm text-sm items-center whitespace-nowrap"},[t._v("\n      Navigate with arrow keys:\n      "),o("button",{staticClass:"whitespace-nowrap rounded-lg pl-1 pr-2",on:{click:function(e){return t.navigate_left()}}},[o("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})]),t._v("\n        Back\n      ")]),t._v(" |\n      "),o("button",{staticClass:"whitespace-nowrap rounded-lg pl-1 pr-2",on:{click:function(e){return t.navigate_top()}}},[o("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"}})]),t._v("\n        Start\n      ")]),t._v(" |\n      "),o("button",{staticClass:"whitespace-nowrap rounded-lg pl-1 pr-2",on:{click:function(e){return t.navigate_right()}}},[o("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})]),t._v("\n        Forward\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,o){"use strict";var n,l=o(12);o(37),o(15),o(60);e.a={target:"static",static:{prefix:!0},publicPath:"/a1000c-map-client/",defaultDataUrl:"https://orte.link/public/maps/queer-poems-on-places-and-lovers/layers/queer-poems-on-places-and-lovers.json",head:{title:"a1000c-map-client",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}]},css:[],plugins:[{src:"@/plugins/vue-shortkey.js",mode:"client"},{src:"@/plugins/vue-awesome-swiper.js",mode:"client"},{src:"@/plugins/leaflet-curve.js",mode:"client"},{src:"@/plugins/filters.js",mode:"client"}],components:!0,buildModules:["@nuxtjs/tailwindcss"],modules:["@nuxtjs/axios","@nuxtjs/pwa","@nuxt/content",["nuxt-leaflet",{}]],axios:{},pwa:{manifest:{lang:"en"}},content:{},build:{extend:function(t,e){e.isClient&&(t.optimization.splitChunks.maxSize=2e5)}},router:{base:"/a1000c-map-client/",scrollBehavior:(n=Object(l.a)(regeneratorRuntime.mark((function t(e,o,n){var r,c,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("scrollBehavior"),!n){t.next=3;break}return t.abrupt("return",n);case 3:if(r=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",document.querySelector(e)||new Promise((function(t,n){if(o>50)return t();setTimeout((function(){t(r(e,++o||1))}),100)})));case 1:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),console.log(o),console.log(e),!e.hash){t.next=27;break}return console.log("Section: "+e.hash),t.next=10,r(e.hash);case 10:return(c=t.sent)&&("scrollBehavior"in document.documentElement.style?(console.log("Scroll smooth to "+c.offsetTop+"/"+c.offsetLeft),document.getElementById("page_inner").scrollTo({top:c.offsetTop,left:c.offsetLeft,behavior:"smooth"})):(console.log("Scroll non smooth to "+c.offsetTop+"/"+c.offsetLeft),document.getElementById("page_inner").scrollTo({top:c.offsetTop,left:c.offsetLeft}))),(d=o.query.place_id)||(d=e.query.place_id),console.log("Place: #"+d),t.next=17,r("#"+d);case 17:if(!(h=t.sent)){t.next=27;break}if(console.log("Place found at "+h),!("scrollBehavior"in document.documentElement.style)){t.next=25;break}return console.log("Scroll smooth to "+h.offsetTop),t.abrupt("return",document.getElementById("list_content").scrollTo({top:h.offsetTop-20,behavior:"smooth"}));case 25:return console.log("Scroll non smooth to "+h.offsetTop),t.abrupt("return",document.getElementById("list_content").scrollTo({top:h.offsetTop-20}));case 27:return t.abrupt("return",{x:0,y:0});case 28:case"end":return t.stop()}}),t)}))),function(t,e,o){return n.apply(this,arguments)})}}},367:function(t,e,o){var content=o(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("52e3d842",content,!0,{sourceMap:!1})},369:function(t,e,o){"use strict";o(367)},370:function(t,e,o){var n=o(56),l=o(224),r=o(341),c=o(342),d=o(343),h=o(344),f=o(345),m=o(346),v=o(347),x=o(348),w=o(349),_=o(350),y=o(351),k=o(352),C=n((function(i){return i[1]})),M=l(r),$=l(c),z=l(d),L=l(h),j=l(f),T=l(m),I=l(v),N=l(x),B=l(w),S=l(_),E=l(y),O=l(k);C.push([t.i,'@font-face{font-family:"Work Sans";font-style:normal;font-weight:400;src:local(""),url('+M+') format("woff2"),url('+$+') format("woff")}@font-face{font-family:"Work Sans";font-style:normal;font-weight:600;src:local(""),url('+z+') format("woff2"),url('+L+') format("woff")}@font-face{font-family:"Work Sans";font-style:normal;font-weight:800;src:local(""),url('+j+') format("woff2"),url('+T+') format("woff")}@font-face{font-family:"Work Sans";font-style:italic;font-weight:400;src:local(""),url('+I+') format("woff2"),url('+N+') format("woff")}@font-face{font-family:"Work Sans";font-style:italic;font-weight:600;src:local(""),url('+B+') format("woff2"),url('+S+') format("woff")}@font-face{font-family:"Work Sans";font-style:italic;font-weight:800;src:local(""),url('+E+') format("woff2"),url('+O+') format("woff")}a.text-link,button.text-link{text-decoration:none;background-image:linear-gradient(120deg,#fde68a,#fde68a);background-repeat:no-repeat;background-size:100% .4em;background-position:0 100%}body{scroll-behavior:smooth;overflow-y:hidden;overflow-x:auto}#page_inner.a1000c-horizontal{height:100%;display:flex;overflow-y:hidden;overflow-x:auto;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-snap-stop:always}#page_inner.a1000c-horizontal>.flex{flex-shrink:0;width:100vw;scroll-snap-align:center}.nav{flex-shrink:1;flex-basis:4%;width:20px;background-color:rgba(20,20,20,0);color:hsla(0,0%,100%,.1);transition:all 1.5s}.nav:hover{background-color:rgba(20,20,20,.05);color:#fff;transition:all 1s}.content{flex-shrink:1;flex-basis:98%}#info #info_inner,#list #list_inner,#map #map_inner{height:auto;width:auto}#info>.content::-webkit-scrollbar{display:none}#info>.content{-ms-overflow-style:none;scrollbar-width:none}#info #info_inner img{max-height:45vh}#map{align-items:stretch}#map>.content{flex-shrink:1;flex-basis:95%}#map #map_inner{width:97%;height:90%}#map #map_map{background-color:transparent}#map #map_map.dark{background-color:rgba(68,68,68,.9);border-color:transparent}#map #modals_wrapper{display:none}#map #modals_wrapper.is-active{display:block}#list #list_inner{width:97%}.bg-a100c-1{background:#ff00f9;background:linear-gradient(90deg,rgba(255,0,249,.15),rgba(255,117,0,.15) 50%,rgba(255,0,35,.15))}.bg-a100c-2{background:#ff00f9;background:linear-gradient(90deg,rgba(255,0,35,.15),rgba(255,0,249,.15) 50%,rgba(255,117,0,.15))}.bg-a100c-3{background:#ff00f9;background:linear-gradient(90deg,rgba(255,117,0,.15),rgba(255,0,35,.15) 50%,rgba(255,0,249,.15))}.bg-a100c-white{background-color:hsla(0,0%,100%,.8)}.bg-red-100{background-color:hsla(0,0%,100%,.35)}.text-gray{color:rgba(0,0,0,.3)}.text-gray:hover{color:rgba(0,0,0,.8)}.text-white{color:hsla(0,0%,100%,.8);text-shadow:0 0 0 #ddd}.text-white:hover{color:#fff;text-shadow:0 0 3px #bbb}.border-white{border-color:#fff}.inline{display:inline-block}.swiper-container{max-width:85vw;overflow:hidden}.vue2leaflet-map{z-index:39}.leaflet-container{background-color:hsla(0,0%,100%,.3);background-color:rgba(55,55,55,.3);background-color:transparent}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:none}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before,.leaflet-tooltip-top:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-top{margin-top:-20px}.leaflet-tooltip{position:absolute;padding:3px 8px;background-color:rgba(252,164,148,.75);border:0 solid #fff;border-radius:0;color:#fff;font-family:monospace;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,.1)}',""]),C.locals={},t.exports=C},380:function(t,e,o){"use strict";o.r(e);var n=o(108),l=o(12),r=(o(37),o(50),o(38),o(26),o(354),o(58),o(73),o(152),o(356),o(86)),c=o.n(r),d=(o(362),o(363),o(364),o(365),o(366)),h={name:"App",transition:{name:"bounce",mode:"in-out",appear:!0},watch:{"$route.query":"$fetch"},mounted:function(){console.log("Mounted****"),this.$route.query.layer&&(console.log(this.$route.query),console.log(this.$route.query.layer),this.custom_data_url=this.$route.query.layer),this.jumpToMap()},data:function(){return{mapobj:null,dataobj:{},data:{},places:[],places_with_relations:[],list_content:[],list_content_layer_title:"",list_content_layer_index:0,tooltip:{},data_url:"",default_data_url:d.a.defaultDataUrl,mapcenter:[0,0],mapzoom:10,circle:{radius:14,color:"transparent",fillcolor:"rgba(242, 71, 38, 1)",fillopacity:.95}}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$route.query.layer&&(t.custom_data_url=t.$route.query.layer),console.log("fetch..."),console.log(t.dataobj),t.dataobj&&console.log("data already fetched"),t.custom_data_url?t.data_url=t.custom_data_url:t.data_url=t.default_data_url,console.log(t.data_url),e.next=8,c.a.get(t.data_url).then((function(t){return t.data}));case 8:if(t.dataobj=e.sent,console.log("fetch... success"),t.dataobj.map)t.data=t.dataobj.map,console.log("Data for a map "),console.log("Data for a map with "+t.data.layer.length+" accessible layers"),t.data.layer.forEach((function(e,o){var l,r;(l=t.places).push.apply(l,Object(n.a)(e.places)),(r=t.places_with_relations).push.apply(r,Object(n.a)(e.places_with_relations))})),console.log("Map with "+t.places.length+" places"),t.data.layer.forEach((function(e,o){for(var i=0;i<e.places.length;i++)t.$set(e.places[i],"state",!1)}));else if(console.log("Data for a single layer"),t.dataobj&&t.dataobj.layer)for(t.data=t.dataobj.layer,t.data.layer=[],t.data.layer[0]=t.dataobj.layer,t.data.mapcenter_lat&&t.data.mapcenter_lon&&(t.mapcenter=[t.data.mapcenter_lat,t.data.mapcenter_lon],console.log("mapcenter "+t.mapcenter)),t.data.zoom&&(t.mapzoom=t.data.zoom),console.log("Data for a map with "+t.data.layer.length+" accessible layer"),t.places=t.data.places,t.places_with_relations=t.data.places_with_relations,t.list_content=t.data.places,console.log("Layer Map with "+t.places.length+" places and "+t.places_with_relations.length+" Relations"),i=0;i<t.data.places.length;i++)t.$set(t.data.places[i],"state",!1);t.data&&t.places&&t.$refs.map&&(t.places.length>0||console.log("afterFetch: NO fitBounds w/"+t.places.length),t.data.layer&&(console.log("Check for data.layer w/"+t.data.layer.length+" layer(s)"),t.drawCurves())),t.$set(t.data,"state",!1);case 13:case"end":return e.stop()}}),e)})))()},methods:{onLayerReady:function(t){this.mapobj=t,console.log("onLayerReady"),console.log(this.mapobj)},onLayerVisible:function(t){this.id=t,console.log("onLayerVisible"),console.log(t)},onTileLayerVisible:function(t){console.log("onTileLayerVisible"),console.log(t)},onMapReady:function(t){var e=this;this.$nextTick((function(){if(e.mapobj=t,e.data&&e.places&&e.$refs.map){e.places.length>0?(console.log("mapcenter: "+e.mapcenter[0]),0==e.mapcenter[0]&&(console.log("onMapReady: fitBounds w/"+e.places.length),e.$refs.map.mapObject.fitBounds(e.places.map((function(t){return[t.lat,t.lon]}))))):console.log("onMapReady: NO fitBounds w/"+e.places.length);var o=document.getElementsByClassName("leaflet-top leaflet-right"),n=o[0].getElementsByClassName("leaflet-control-layers");o[0].removeChild(n[0]);var l=L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:"Openstreemap + Contributors"}),r={Basemap:L.tileLayer("https://tiles.3plusx.io/world_populated_places/lightpink/{z}/{x}/{y}.png",{attribution:""}).addTo(e.$refs.map.mapObject),"Basemap (dark)":L.tileLayer("https://tiles.3plusx.io/world_populated_places/lightyellow/{z}/{x}/{y}.png",{attribution:""}),OpenStreetMap:l};L.control.layers(r).addTo(e.$refs.map.mapObject),console.log(e.mapobj),e.mapobj.on("baselayerchange",(function(t){console.log("Changed to "+t.name);var e=document.getElementById("map_map");"Basemap (dark)"==t.name?e.classList.add("dark"):e.classList.remove("dark")})),e.data.layer&&console.log("Check for data.layer w/"+e.data.layer.length+" layer(s)")}}))},drawCurves:function(){var t=this,e=L.layerGroup().addTo(this.mapobj);this.data.layer.forEach((function(o,n){o.places_with_relations&&o.places_with_relations.forEach((function(n,l){console.log("places_with_relations: "+n.relations.length),n.relations.forEach((function(n,l){console.log("Relation_from ID:  "+n.from.id);var r=[Number(n.from.lat),Number(n.from.lon)],c=[Number(n.to.lat),Number(n.to.lon)],d="hsl("+360*Math.random()+", 100%, 85%)";o.color&&(d=o.color);var h={color:d,weight:5,opacity:.75,className:"curve_normal curve_",animate:!1},f=t.calcControlPoint(r,c,5),m=(L.curve(["M",r,"Q",f,c],h).addTo(e),{mapIconUrl:"<svg height='{radius}' width='{radius}' xmlns='http://www.w3.org/2000/svg'><circle cx='15' cy='15' r='15' fill='{color}' fill-opacity='{opacity}' shape-rendering='geometricPrecision'></circle></svg>",color:d,opacity:.7,radius:30}),v=L.divIcon({className:"leaflet-data-outside-marker",html:L.Util.template(m.mapIconUrl,m),iconAnchor:[15,15],iconSize:[30,30],popupAnchor:[0,-28]});if(n.from.layer_id!=n.to.layer_id)L.marker(c,{icon:v}).bindTooltip(n.to.title,{permanent:"true",direction:"top"}).addTo(e)}))}))}))},calcControlPoint:function(t,e,o){var n=2;o>5e3||o>1e3||o>100?n=7:o>10?n=10:o>5?n=40:o>1?n=120:o<=1&&(n=1600);var l=e[1]-t[1],r=e[0]-t[0],c=Math.sqrt(Math.pow(l,0)+Math.pow(r,2)),d=Math.atan2(r,l),h=3.14/2.9,f=c/n/Math.cos(h),m=d+h,v=f*Math.cos(m)+t[1];return[f*Math.sin(m)+t[0],v]},recenterMap:function(t,e){var o=this;this.$nextTick((function(){console.log("recenter map to "+t+"/"+e),o.$router.push({name:"main",hash:"#map"}),o.$refs.map.mapObject.flyTo([t,e],16)}))},jumpToMap:function(){console.log("jumpToMap "+this.$route.hash),"#list"===this.$route.hash||"#info"===this.$route.hash?this.$router.push({name:"main",hash:this.$route.hash}):this.$router.push({name:"main",hash:"#map"})},scrollX:function(t){var e=this;console.log("scrollx: "+t.deltaY);var section=this.$route.hash.replace("#","");console.log("at section "+section);var o=this.$refs.list.getBoundingClientRect().top;console.log("pixel from top "+o);o=this.$refs.list.getBoundingClientRect().top;console.log("pixel from top "+o),console.log("pixel from ..."),console.log(this.$refs[section].scrollTop),this.$nextTick((function(){console.log("pixel (w/nextTick) from ..."),console.log(e.$refs[section].scrollTop)})),console.log("--------");t.deltaY<0?(console.log("to right"),"#map"==this.$route.hash||this.$route.hash):(console.log("to left"),"#map"==this.$route.hash||this.$route.hash)},navigate_top:function(){console.log("<-- top "+this.$route.hash),this.$router.push({name:"index",hash:""})},navigate_left:function(){console.log("<-- from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#info":"#list"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)},navigate_right:function(){console.log("--\x3e from "+this.$route.hash);var t="";"#map"==this.$route.hash?t="#list":"#info"==this.$route.hash&&(t="#map"),t&&(this.$router.push({name:"main",hash:t}),location.hash=t)},handleMapClick:function(t){if(console.log("onclick"),console.log(t.target.options.id),console.log(t.target.options.title),console.log(this.data),t.target.options.title){for(var i=0;i<this.places.length;i++)this.$set(this.places[i],"state",!1);var e=this.places.find((function(e){return e.id===t.target.options.id})),o=this.places.findIndex((function(e){return e.id===t.target.options.id}));console.log("Clicked place: "+e.title),console.log("Clicked place ID: "+e.id),console.log("Clicked place index: "+t.target.options.place_index),console.log("Clicked layer title: "+t.target.options.layer_title),console.log("Clicked layer index: "+t.target.options.layer_index),this.places[o].state=!this.places[o].state,this.data.state=!0,this.data.layer[parseInt(t.target.options.layer_index)].places[parseInt(t.target.options.place_index)].state=!this.data.layer[parseInt(t.target.options.layer_index)].places[parseInt(t.target.options.place_index)].state.state,this.list_content=[],this.list_content.push(this.places[o]),this.list_content_layer_title=t.target.options.layer_title,this.list_content_layer_index=parseInt(t.target.options.layer_index),console.log("Clicked layer index: "+this.list_content_layer_index)}}},computed:{}},f=(o(369),o(55)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page"}},[o("div",{ref:"scroll_container",staticClass:"flex a1000c-horizontal",attrs:{id:"page_inner"},on:{wheelX:t.scrollX}},[o("section",{ref:"info",staticClass:"flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0 sm:pb-8",attrs:{id:"info"}},[o("div",{staticClass:"content flex items-top overflow-x-auto"},[o("div",{staticClass:"bg-opacity-30 my-4 mx-5",attrs:{id:"info_inner"}},[t.$fetchState.pending?o("p",{staticClass:"text-sm text-red-300"},[t._v("Loading...")]):t.$fetchState.error?o("p",{staticClass:"text-sm text-red-300"},[t._v("Please wait ...")]):o("div",[o("info",{attrs:{data:this.data}})],1)])]),t._v(" "),o("div",{staticClass:"nav flex items-center content-center justify-center"},[o("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})])])],1)]),t._v(" "),o("section",{ref:"map",staticClass:"flex min-h-screen max-h-screen bg-a100c-2",attrs:{id:"map"}},[o("div",{staticClass:"nav flex flex-col content-center"},[o("nuxt-link",{staticClass:"flex h-full self-center items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"info"}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])])],1),t._v(" "),o("div",{staticClass:"content items-center justify-center"},[o("div",{staticClass:"block",attrs:{id:"map_header"}},[t.$fetchState.pending?o("p",{staticClass:"text-sm text-red-300"},[t._v("Fetching places...")]):t.$fetchState.error?o("p",{staticClass:"text-sm text-red-300"},[t._v("Please wait ...")]):o("div",[o("p",{staticClass:"text-sm text-red-300",attrs:{id:"map_header_content"}},[o("nuxt-link",{staticClass:"text-red-300",attrs:{to:{path:"/"}}},[t._v("Start")]),t._v("\n              —\n              "),o("nuxt-link",{attrs:{to:{path:"/main",hash:"info"}}},[t._v(t._s(this.data.title))])],1)]),t._v(" "),o("p",[o("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowup"],expression:"['arrowup']"}],staticClass:"hidden",on:{shortkey:function(e){return t.navigate_top()}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"}})])]),t._v(" "),o("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowleft"],expression:"['arrowleft']"}],staticClass:"hidden",on:{shortkey:function(e){return t.navigate_left()}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"}})])]),t._v(" "),o("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowright"],expression:"['arrowright']"}],staticClass:"hidden",on:{shortkey:function(e){return t.navigate_right()}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])])])]),t._v(" "),o("div",{staticClass:"h-full bg-red-0 bg-opacity-0 my-1 mx-1",attrs:{id:"map_inner"}},[o("div",{staticClass:"h-full w-full border-solid border-2 border-white shadow z-40",attrs:{id:"map_map"}},[o("client-only",[o("l-map",{ref:"map",attrs:{zoom:this.mapzoom,minZoom:2,maxZoom:19,center:this.mapcenter},on:{ready:t.onMapReady}},[o("l-control-layers",{attrs:{position:"topright"}}),t._v(" "),t._l(this.data.layer,(function(e,n){return o("l-layer-group",{key:e.id,ref:e.title,refInFor:!0,attrs:{name:e.title,"layer-type":"overlay"},on:{"update:visible":function(o){return t.onLayerVisible(e.id)}}},t._l(e.places,(function(l,r){return o("l-circle-marker",{key:"marker-"+r,attrs:{"lat-lng":[l.lat,l.lon],radius:t.circle.radius,color:t.circle.color,stroke:t.circle.stroke,fillColor:e.color,fillOpacity:t.circle.fillopacity,id:r,options:{title:"marker-"+l.id,id:l.id,place_index:r,layer_index:n,layer_title:e.title}},on:{click:t.handleMapClick}},[o("l-tooltip",{attrs:{content:l.title,options:{permanent:!1,direction:"top"}}})],1)})),1)}))],2)],1)],1)])]),t._v(" "),t.$fetchState.pending||t.$fetchState.error?o("p",{staticClass:"text-sm text-red-300"},[t._v("...")]):o("div",{staticClass:"sm:absolute sm:top-4 sm:right-4",class:{"is-active":this.data.state},attrs:{id:"modals_wrapper"}},[o("place-modals",{attrs:{layers:this.data.layer,data:this.data}})],1),t._v(" "),o("div",{staticClass:"nav flex flex-col  items-center content-center justify-center"},[o("nuxt-link",{staticClass:"flex h-full self-center items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"list"}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})])])],1)]),t._v(" "),o("section",{ref:"list",staticClass:"flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0",attrs:{id:"list"}},[o("div",{staticClass:"nav flex items-center content-center justify-center"},[o("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),o("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])])],1),t._v(" "),o("div",{staticClass:"content flex items-top overflow-x-auto pb-10",attrs:{id:"list_content"}},[o("div",{staticClass:"bg-opacity-30 my-0 mx-0 mr-6 sm:my-4 sm:mx-5",attrs:{id:"list_inner"}},[t.$fetchState.pending?o("p",[t._v("Loading...")]):t.$fetchState.error?o("p",[t._v("An error occurred :(")]):o("div",[o("list",{attrs:{places:this.list_content,layerindex:this.list_content_layer_index,data:this.data,map:this.mapobj}})],1)])])]),t._v(" "),o("keys-navigation")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Info:o(363).default,PlaceModals:o(364).default,List:o(362).default,KeysNavigation:o(365).default})}}]);