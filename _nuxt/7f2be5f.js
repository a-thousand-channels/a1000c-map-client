(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{342:function(t,e,n){"use strict";var r=n(17),l=n(5),o=n(8),c=n(116),m=n(25),d=n(20),h=n(225),v=n(51),x=n(115),_=n(224),w=n(9),f=n(87).f,y=n(41).f,C=n(23).f,N=n(343),I=n(226).trim,k="Number",M=l.Number,E=M.prototype,z=l.TypeError,O=o("".slice),T=o("".charCodeAt),V=function(t){var e=_(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,n,r,l,o,c,m,code,d=_(t,"number");if(x(d))throw z("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=I(d),43===(e=T(d,0))||45===e){if(88===(n=T(d,2))||120===n)return NaN}else if(48===e){switch(T(d,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(c=(o=O(d,2)).length,m=0;m<c;m++)if((code=T(o,m))<48||code>l)return NaN;return parseInt(o,r)}return+d};if(c(k,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var L,H=function(t){var e=arguments.length<1?0:M(V(t)),n=this;return v(E,n)&&w((function(){N(n)}))?h(Object(e),n,H):e},S=r?f(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;S.length>P;P++)d(M,L=S[P])&&!d(H,L)&&C(H,L,y(M,L));H.prototype=E,E.constructor=H,m(l,k,H)}},343:function(t,e,n){var r=n(8);t.exports=r(1..valueOf)},350:function(t,e,n){"use strict";n.r(e);var r=n(31),l=(n(342),n(50),{props:{places:{type:Array,required:!1},data:{type:Object,required:!1},layerindex:{type:Number,required:!1},map:{type:Object,required:!1}},components:{},methods:{recenterMap:function(t,e,n){var r=this;this.$nextTick((function(){console.log("recenter map to "+t+"/"+e),r.$router.push({name:"main",hash:"#map"}),r.map.flyTo([t,e],17)}))}},data:function(){return{swiperOptions:Object(r.a)({width:null,slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},paginationClickable:!0},"spaceBetween",50)}},computed:{},mounted:function(){}}),o=n(55),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ul",{staticClass:"pb-10"},[0==t.places.length?n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"}})]),t._v("\n      Please go left to see\n      "),n("nuxt-link",{staticClass:"text-link",attrs:{to:{path:"/main",hash:"map"}}},[t._v("\n        our map\n      ")]),t._v("\n      and select a place or layer to see more details here.\n    ")],1):t._e(),t._v(" "),t.places?n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4 "},[n("h2",{staticClass:"font-semibold pl-0 md:pl-12"},[t.data.title!=t.data.layer[parseInt(t.layerindex)].title?n("span",[t._v(t._s(t.data.title))]):n("span",[n("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Start")])],1),t._v(" "),t.data.layer[parseInt(t.layerindex)]?n("span",[t._v("— "+t._s(t.data.layer[parseInt(t.layerindex)].title))]):t._e()])]):n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z"}})]),t._v(" Or check the\n      "),n("nuxt-link",{staticClass:"text-link",attrs:{to:{path:"/main",hash:"info"}}},[t._v("\n        info page\n      ")]),t._v("\n      to learn more about this map :)\n    ")],1),t._v(" "),t._l(t.places,(function(e,r){return n("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4",attrs:{id:"list-place-"+e.id}},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:t.swiperOptions,expression:"swiperOptions",arg:r}],staticClass:"md:px-12"},[e.images?n("div",{staticClass:"swiper-wrapper"},t._l(e.images,(function(image,r){return n("div",{key:r,staticClass:"swiper-slide px-0 pb-4 pt-2 sm:px-4 sm:pt-4"},[e.images.length>1?n("p",{staticClass:"text-sm text-gray max-w-60 text-left"},[t._v("("+t._s(r+1)+"/"+t._s(e.images.length)+")")]):t._e(),t._v(" "),n("span",image?[n("img",{staticClass:"max-w-full sm:max-w-ws max-h-72 sm:max-h-80 lg:max-h-96",attrs:{src:image.image_url,alt:image.alt}}),t._v(" "),n("span",{staticClass:"text-sm leading-tight text-gray max-w-60"},[t._v(t._s(image.title))])]:[n("img",{attrs:{src:"https://via.placeholder.com/585x870?text=Platzhalter_585x870px",alt:""}})])])})),0):t._e(),t._v(" "),n("div",{staticClass:"swiper-pagination"})]),t._v(" "),n("h3",{staticClass:"font-semibold text-lg px-4 py-2 sm:px-16 sm:pt-6"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-gray-500 px-4 sm:px-16 sm:py-3",domProps:{innerHTML:t._s(e.teaser)}}),t._v(" "),e.audiolink?n("div",{staticClass:"player-wrapper px-4 sm:px-16 sm:py-3",attrs:{id:"list-audio-"+e.id},domProps:{innerHTML:t._s(e.audiolink)}}):t._e(),t._v(" "),e.annotations.length>0?n("ul",{staticClass:"pb-0 sm:px-8"},t._l(e.annotations,(function(e,r){return n("li",{staticClass:"bg-a100c-3 px-4 py-6 rounded shadow mt-4 mb-6"},[e.title?n("h4",{staticClass:"font-semibold text-md px-4 py-2"},[t._v(t._s(e.title))]):t._e(),t._v(" "),n("div",{staticClass:"text-gray-500 px-4",domProps:{innerHTML:t._s(e.text)}})])})),0):t._e(),t._v(" "),n("footer",{staticClass:"pb-4"},[n("p",{staticClass:"text-gray-500 px-4 py-2 sm:px-16 sm:py-3"},[n("button",{staticClass:"text-link",on:{click:function(n){return t.recenterMap(e.lat,e.lon,r)}}},[t._v("Show on the map")])])])])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);