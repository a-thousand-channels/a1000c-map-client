(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{299:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("a939a93c",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n(299)},302:function(t,e,n){var l=n(52)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.places-list{\n  margin-top:-6px\n}\n.modal{\n  transition:all 1s ease-out;\n  opacity:0;\n  height:0;\n  width:0;\n  overflow:hidden\n}\n.modal,.modal.is-active{\n  display:block;\n  min-width:none\n}\n.modal.is-active{\n  transition:all .6s ease-in;\n  opacity:1;\n  height:auto;\n  width:auto\n}\n.modal-content{\n  min-width:18em\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},305:function(t,e,n){"use strict";n.r(e);var l={props:{list:{type:Array,required:!0}},components:{},methods:{toggleModal:function(t){t.state=!t.state}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},paginationClickable:!0,spaceBetween:50}}},computed:{},mounted:function(){}},o=(n(301),n(54)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"places-list sm:relative z-50"},t._l(t.list,(function(e,l){return n("div",[n("div",{staticClass:"modal",class:{"is-active":e.state},attrs:{id:"place-"+l}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-content absolute inset-4 p-4 pt-2 m-0 z-50 sm:relative sm:inset-0 sm:mt-8 bg-white bg-a100c-white overflow-hidden shadow min-w-none sm:min-w-min"},[n("div",{staticClass:"text-right px-0 py-0 text-2xl"},[n("button",{staticClass:"close-button",attrs:{"aria-label":"close"},on:{click:function(n){return t.toggleModal(e)}}},[t._v("×")])]),t._v(" "),n("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:t.swiperOptions,expression:"swiperOptions",arg:l}]},[e.images?n("div",{staticClass:"swiper-wrapperX px-0 pb-4 sm:px-4"},t._l(e.images,(function(image,t){return n("div",{staticClass:"swiper-slideX"},[n("span",image?[n("img",{staticClass:"max-w-full sm:max-w-md",attrs:{src:image.image_url,alt:image.alt}})]:[n("img",{attrs:{src:"https://via.placeholder.com/585x870?text=Platzhalter_585x870px",alt:t}})])])})),0):t._e(),t._v(" "),n("div",{staticClass:"swiper-pagination"})]),t._v(" "),n("div",{staticClass:"modal-header"},[n("h2",[t._v(t._s(l+1)+" "),n("strong",[t._v(t._s(e.title))])])]),t._v(" "),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"text-gray-500 px-4",domProps:{innerHTML:t._s(e.teaser)}})]),t._v(" "),n("div",{staticClass:"modal-player"},[n("p",{staticClass:"captions",attrs:{id:"place-"+e.id+"-infos"}}),t._v(" "),e.audio?n("div",{staticClass:"player-wrapper",attrs:{id:"audio"}},[n("audio-player",{attrs:{place:e}})],1):t._e()])])])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);