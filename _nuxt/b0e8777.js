(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3],{300:function(n,t,e){var content=e(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("a939a93c",content,!0,{sourceMap:!1})},302:function(n,t,e){"use strict";e(300)},303:function(n,t,e){var o=e(51)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.places-list{\n  margin-top:-6px\n}\n.modal{\n  transition:all 1s ease-out;\n  opacity:0;\n  height:0;\n  width:0;\n  overflow:hidden\n}\n.modal,.modal.is-active{\n  display:block;\n  min-width:none\n}\n.modal.is-active{\n  transition:all .6s ease-in;\n  opacity:1;\n  height:auto;\n  width:auto\n}\n.modal-content{\n  min-width:18em\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},306:function(n,t,e){"use strict";e.r(t);var o={props:{list:{type:Array,required:!0}},components:{},methods:{toggleModal:function(n){n.state=!n.state}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},paginationClickable:!0,spaceBetween:50}}},computed:{},mounted:function(){}},r=(e(302),e(53)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"places-list sm:relative z-50"},n._l(n.list,(function(t,o){return e("div",[e("div",{staticClass:"modal",class:{"is-active":t.state},attrs:{id:"place-"+o}},[e("div",{staticClass:"modal-background"}),n._v(" "),e("div",{staticClass:"modal-content absolute inset-4 p-4 pt-2 m-0 z-50 sm:relative sm:inset-0 sm:mt-8 bg-white bg-a100c-white overflow-hidden shadow min-w-none sm:min-w-min"},[e("div",{staticClass:"text-right px-0 py-0 text-2xl"},[e("button",{staticClass:"close-button",attrs:{"aria-label":"close"},on:{click:function(e){return n.toggleModal(t)}}},[n._v("×")])]),n._v(" "),e("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:n.swiperOptions,expression:"swiperOptions",arg:o}]},[t.images?e("div",{staticClass:"swiper-wrapperX px-0 pb-4 sm:px-4"},n._l(t.images,(function(image,n){return e("div",{staticClass:"swiper-slideX"},[e("span",image?[e("img",{staticClass:"max-w-full sm:max-w-md",attrs:{src:image.image_url,alt:image.alt}})]:[e("img",{attrs:{src:"https://via.placeholder.com/585x870?text=Platzhalter_585x870px",alt:n}})])])})),0):n._e(),n._v(" "),e("div",{staticClass:"swiper-pagination"})]),n._v(" "),e("div",{staticClass:"modal-header"},[e("h2",[n._v(n._s(o+1)+" "),e("strong",[n._v(n._s(t.title))])])]),n._v(" "),e("div",{staticClass:"modal-content"},[e("div",{staticClass:"text-gray-500 px-4",domProps:{innerHTML:n._s(t.teaser)}})]),n._v(" "),e("div",{staticClass:"modal-player"},[e("p",{staticClass:"captions",attrs:{id:"place-"+t.id+"-infos"}}),n._v(" "),t.audio?e("div",{staticClass:"player-wrapper",attrs:{id:"audio"}},[e("audio-player",{attrs:{place:t}})],1):n._e()])])])])})),0)}),[],!1,null,null,null);t.default=component.exports},307:function(n,t,e){var content=e(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("52e3d842",content,!0,{sourceMap:!1})},309:function(n,t,e){"use strict";e(307)},310:function(n,t,e){var o=e(51),r=e(208),l=e(311),d=e(312),c=e(313),m=e(314),h=e(315),f=e(316),w=e(317),x=e(318),v=e(319),y=e(320),k=e(321),_=e(322),C=o((function(i){return i[1]})),z=r(l),M=r(d),S=r(c),$=r(m),j=r(h),L=r(f),T=r(w),R=r(x),A=r(v),F=r(y),H=r(k),O=r(_);C.push([n.i,"/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Work Sans, Graphik, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n  border-color:currentColor;\n}\nh1{\n  font-size:1.5rem;\n  line-height:2rem\n}\nh2{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n.invisible{\n  visibility:hidden;\n}\n.static{\n  position:static;\n}\n.absolute{\n  position:absolute;\n}\n.relative{\n  position:relative;\n}\n.inset-4{\n  top:1rem;\n  right:1rem;\n  bottom:1rem;\n  left:1rem;\n}\n.bottom-0{\n  bottom:0px;\n}\n.left-1\\/2{\n  left:50%;\n}\n.z-40{\n  z-index:40;\n}\n.z-50{\n  z-index:50;\n}\n.m-0{\n  margin:0px;\n}\n.m-2{\n  margin:0.5rem;\n}\n.mx-1{\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}\n.mx-5{\n  margin-left:1.25rem;\n  margin-right:1.25rem;\n}\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n.my-1{\n  margin-top:0.25rem;\n  margin-bottom:0.25rem;\n}\n.mt-2{\n  margin-top:0.5rem;\n}\n.mt-3{\n  margin-top:0.75rem;\n}\n.mt-4{\n  margin-top:1rem;\n}\n.mt-8{\n  margin-top:2rem;\n}\n.mb-4{\n  margin-bottom:1rem;\n}\n.mb-6{\n  margin-bottom:1.5rem;\n}\n.block{\n  display:block;\n}\n.inline{\n  display:inline;\n}\n.flex{\n  display:flex;\n}\n.table{\n  display:table;\n}\n.hidden{\n  display:none;\n}\n.h-full{\n  height:100%;\n}\n.max-h-screen{\n  max-height:100vh;\n}\n.min-h-screen{\n  min-height:100vh;\n}\n.w-full{\n  width:100%;\n}\n.max-w-4xl{\n  max-width:56rem;\n}\n.max-w-full{\n  max-width:100%;\n}\n.flex-shrink{\n  flex-shrink:1;\n}\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-1\\/2{\n  --tw-translate-x:-50%;\n}\n.-translate-y-1\\/2{\n  --tw-translate-y:-50%;\n}\n@-webkit-keyframes spin{\nto{\n    transform:rotate(360deg);\n}\n}\n@keyframes spin{\nto{\n    transform:rotate(360deg);\n}\n}\n@-webkit-keyframes ping{\n75%, 100%{\n    transform:scale(2);\n    opacity:0;\n}\n}\n@keyframes ping{\n75%, 100%{\n    transform:scale(2);\n    opacity:0;\n}\n}\n@-webkit-keyframes pulse{\n50%{\n    opacity:.5;\n}\n}\n@keyframes pulse{\n50%{\n    opacity:.5;\n}\n}\n@-webkit-keyframes bounce{\n0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n}\n50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n}\n}\n@keyframes bounce{\n0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n}\n50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n}\n}\n.flex-col{\n  flex-direction:column;\n}\n.content-center{\n  align-content:center;\n}\n.items-center{\n  align-items:center;\n}\n.items-stretch{\n  align-items:stretch;\n}\n.justify-center{\n  justify-content:center;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.self-center{\n  align-self:center;\n}\n.overflow-hidden{\n  overflow:hidden;\n}\n.overflow-x-auto{\n  overflow-x:auto;\n}\n.whitespace-nowrap{\n  white-space:nowrap;\n}\n.rounded{\n  border-radius:0.25rem;\n}\n.rounded-lg{\n  border-radius:0.5rem;\n}\n.border-2{\n  border-width:2px;\n}\n.border{\n  border-width:1px;\n}\n.border-t{\n  border-top-width:1px;\n}\n.border-solid{\n  border-style:solid;\n}\n.border-dashed{\n  border-style:dashed;\n}\n.bg-red-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 228, 230, var(--tw-bg-opacity));\n}\n.bg-red-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(251, 113, 133, var(--tw-bg-opacity));\n}\n.bg-pink-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(250, 232, 255, var(--tw-bg-opacity));\n}\n.bg-opacity-10{\n  --tw-bg-opacity:0.1;\n}\n.bg-opacity-30{\n  --tw-bg-opacity:0.3;\n}\n.fill-current{\n  fill:currentColor;\n}\n.p-4{\n  padding:1rem;\n}\n.p-6{\n  padding:1.5rem;\n}\n.px-0{\n  padding-left:0px;\n  padding-right:0px;\n}\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n.py-0{\n  padding-top:0px;\n  padding-bottom:0px;\n}\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n.pt-2{\n  padding-top:0.5rem;\n}\n.pt-4{\n  padding-top:1rem;\n}\n.pt-8{\n  padding-top:2rem;\n}\n.pr-2{\n  padding-right:0.5rem;\n}\n.pb-4{\n  padding-bottom:1rem;\n}\n.pb-6{\n  padding-bottom:1.5rem;\n}\n.pb-10{\n  padding-bottom:2.5rem;\n}\n.pl-1{\n  padding-left:0.25rem;\n}\n.text-center{\n  text-align:center;\n}\n.text-right{\n  text-align:right;\n}\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n.font-semibold{\n  font-weight:600;\n}\n.font-bold{\n  font-weight:700;\n}\n.leading-7{\n  line-height:1.75rem;\n}\n.text-red-300{\n  --tw-text-opacity:1;\n  color:rgba(253, 164, 175, var(--tw-text-opacity));\n}\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(14, 165, 233, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n@font-face{\n  font-family:\"Work Sans\";\n\n  font-style:normal;\n\n  font-weight:400;\n\n  src:local(\"\"),url("+z+') format("woff2"),url('+M+') format("woff")\n}\n@font-face{\n  font-family:"Work Sans";\n\n  font-style:normal;\n\n  font-weight:600;\n\n  src:local(""),url('+S+') format("woff2"),url('+$+') format("woff")\n}\n@font-face{\n  font-family:"Work Sans";\n\n  font-style:normal;\n\n  font-weight:800;\n\n  src:local(""),url('+j+') format("woff2"),url('+L+') format("woff")\n}\n@font-face{\n  font-family:"Work Sans";\n\n  font-style:italic;\n\n  font-weight:400;\n\n  src:local(""),url('+T+') format("woff2"),url('+R+') format("woff")\n}\n@font-face{\n  font-family:"Work Sans";\n\n  font-style:italic;\n\n  font-weight:600;\n\n  src:local(""),url('+A+') format("woff2"),url('+F+') format("woff")\n}\n@font-face{\n  font-family:"Work Sans";\n\n  font-style:italic;\n\n  font-weight:800;\n\n  src:local(""),url('+H+') format("woff2"),url('+O+') format("woff")\n}\na.text-link,button.text-link{\n  text-decoration:none;\n  background-image:linear-gradient(120deg,#fde68a,#fde68a);\n  background-repeat:no-repeat;\n  background-size:100% .4em;\n  background-position:0 100%\n}\nbody{\n  scroll-behavior:smooth;\n  overflow-y:hidden;\n  overflow-x:auto\n}\n#page_inner.a1000c-horizontal{\n  height:100%;\n  display:flex;\n  overflow-y:hidden;\n  overflow-x:auto;\n  -ms-scroll-snap-type:x mandatory;\n      scroll-snap-type:x mandatory;\n  scroll-snap-stop:always\n}\n#page_inner.a1000c-horizontal>.flex{\n  flex-shrink:0;\n  width:100vw;\n  scroll-snap-align:center\n}\n.nav{\n  flex-shrink:1;\n  flex-basis:4%;\n  width:20px;\n  background-color:rgba(20,20,20,0);\n  color:hsla(0,0%,100%,.1);\n  transition:all 1.5s\n}\n.nav:hover{\n  background-color:rgba(20,20,20,.05);\n  color:#fff;\n  transition:all 1s\n}\n.content{\n  flex-shrink:1;\n  flex-basis:97%\n}\n#map{\n  align-items:stretch\n}\n#map>.content{\n  flex-shrink:1;\n  flex-basis:95%\n}\n#info #list_inner,#list #list_inner,#map #map_inner{\n  height:90%;\n  width:95%;\n  align-items:none\n}\n.bg-a100c-1{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,0,249,.15),rgba(255,117,0,.15) 50%,rgba(255,0,35,.15))\n}\n.bg-a100c-2{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,0,35,.15),rgba(255,0,249,.15) 50%,rgba(255,117,0,.15))\n}\n.bg-a100c-3{\n  background:#ff00f9;\n  background:linear-gradient(90deg,rgba(255,117,0,.15),rgba(255,0,35,.15) 50%,rgba(255,0,249,.15))\n}\n.bg-a100c-white{\n  background-color:hsla(0,0%,100%,.8)\n}\n.text-white{\n  color:hsla(0,0%,100%,.8);\n  text-shadow:0 0 0 #ddd\n}\n.text-white:hover{\n  color:#fff;\n  text-shadow:0 0 3px #bbb\n}\n.border-white{\n  border-color:#fff\n}\n.vue2leaflet-map{\n  z-index:39\n}\n.leaflet-container{\n  background-color:hsla(0,0%,100%,.3);\n  background-color:transparent\n}\n.leaflet-tooltip-top:before{\n  bottom:0;\n  margin-bottom:-12px;\n  border-top-color:none\n}\n.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{\n  left:50%;\n  margin-left:-6px\n}\n.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before,.leaflet-tooltip-top:before{\n  position:absolute;\n  pointer-events:none;\n  border:6px solid transparent;\n  background:transparent;\n  content:""\n}\n.leaflet-tooltip-top{\n  margin-top:-20px\n}\n.leaflet-tooltip{\n  position:absolute;\n  padding:3px 8px;\n  background-color:rgba(252,164,148,.75);\n  border:0 solid #fff;\n  border-radius:0;\n  color:#fff;\n  font-family:monospace;\n  white-space:nowrap;\n  box-shadow:0 1px 3px rgba(0,0,0,.1)\n}\n@media (min-width: 640px){\n.sm\\:absolute{\n    position:absolute;\n}\n.sm\\:relative{\n    position:relative;\n}\n.sm\\:inset-0{\n    top:0px;\n    right:0px;\n    bottom:0px;\n    left:0px;\n}\n.sm\\:top-4{\n    top:1rem;\n}\n.sm\\:right-4{\n    right:1rem;\n}\n.sm\\:mt-8{\n    margin-top:2rem;\n}\n.sm\\:min-w-min{\n    min-width:-webkit-min-content;\n    min-width:-moz-min-content;\n    min-width:min-content;\n}\n.sm\\:max-w-md{\n    max-width:28rem;\n}\n.sm\\:items-center{\n    align-items:center;\n}\n.sm\\:rounded-lg{\n    border-radius:0.5rem;\n}\n.sm\\:px-4{\n    padding-left:1rem;\n    padding-right:1rem;\n}\n.sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n}\n.sm\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n}\n.sm\\:px-16{\n    padding-left:4rem;\n    padding-right:4rem;\n}\n.sm\\:py-4{\n    padding-top:1rem;\n    padding-bottom:1rem;\n}\n.sm\\:pt-0{\n    padding-top:0px;\n}\n.sm\\:pt-4{\n    padding-top:1rem;\n}\n.sm\\:pt-8{\n    padding-top:2rem;\n}\n.sm\\:pb-8{\n    padding-bottom:2rem;\n}\n}\n@media (min-width: 768px){\n.md\\:visible{\n    visibility:visible;\n}\n}\n@media (min-width: 1024px){\n.lg\\:px-12{\n    padding-left:3rem;\n    padding-right:3rem;\n}\n}\n@media (min-width: 1280px){\n}\n@media (min-width: 1536px){\n}',""]),C.locals={},n.exports=C},311:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-regular.dbff3f2.woff2"},312:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-regular.76cc122.woff"},313:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-600.877104d.woff2"},314:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-600.12d5796.woff"},315:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-800.4c45305.woff2"},316:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-800.46f92a2.woff"},317:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-italic.3eba87b.woff2"},318:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-italic.307f44c.woff"},319:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-600italic.bdf869f.woff2"},320:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-600italic.0d3f0e8.woff"},321:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-800italic.0779094.woff2"},322:function(n,t,e){n.exports=e.p+"fonts/work-sans-v13-latin-ext_latin-800italic.00be295.woff"},333:function(n,t,e){"use strict";e.r(t);var o=e(8),r=(e(46),e(32),e(82)),l=e.n(r),d=(e(306),{name:"App",transition:{name:"bounce",mode:"in-out",appear:!0},watch:{"$route.query":"$fetch"},mounted:function(){this.jumpToMap()},data:function(){return{data:{layer:{}},tooltip:{},data_url1:"https://staging.orte.link/public/maps/cities/layers/european-cities.json",data_url2:"https://orte.link/public/maps/queer-places-in-hamburg/layers/nachtbar.json",data_url:"https://orte.link/public/maps/from-gay-to-queer/layers/manu.json",circle:{radius:14,color:"transparent",fillcolor:"rgba(242, 71, 38, 1)",fillopacity:.85},swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},paginationClickable:!0,spaceBetween:50}}},fetch:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetch..."),t.next=3,l.a.get(n.data_url).then((function(n){return n.data}));case 3:for(n.data=t.sent,console.log("fetch... add state value"),i=0;i<n.data.layer.places.length;i++)n.$set(n.data.layer.places[i],"state",!1);case 6:case"end":return t.stop()}}),t)})))()},methods:{onMapReady:function(){var n=this;this.data.layer.places.length&&this.$nextTick((function(){n.$refs.map.mapObject.fitBounds(n.data.layer.places.map((function(n){return[n.lat,n.lon]})))}))},recenterMap:function(n,t){var e=this;console.log("recenter map to "+n+"/"+t),this.$router.push({name:"main",hash:"#map"}),this.$nextTick((function(){e.$refs.map.mapObject.flyTo([n,t],16)}))},jumpToMap:function(){console.log("jumpToMap"),this.$router.push({name:"main",hash:"#map"})},scrollX:function(n){console.log("scrollx: "+n.deltaY),console.log("from "+this.$route.hash);n.deltaY<0?(console.log("to right"),"#map"==this.$route.hash||this.$route.hash):(console.log("to left"),"#map"==this.$route.hash||this.$route.hash)},navigate_top:function(){console.log("<-- top "+this.$route.hash),this.$router.push({name:"index",hash:""})},navigate_left:function(){console.log("<-- from "+this.$route.hash);var n="";"#map"==this.$route.hash?n="#info":"#list"==this.$route.hash&&(n="#map"),n&&(this.$router.push({name:"main",hash:n}),location.hash=n)},navigate_right:function(){console.log("--\x3e from "+this.$route.hash);var n="";"#map"==this.$route.hash?n="#list":"#info"==this.$route.hash&&(n="#map"),n&&(this.$router.push({name:"main",hash:n}),location.hash=n)},handleMapClick:function(n){if(console.log("onclick"),console.log(n.target.options.id),console.log(n.target.options.title),n.target.options.title){for(var i=0;i<this.data.layer.places.length;i++)this.$set(this.data.layer.places[i],"state",!1);console.log("Clicked place: "+this.data.layer.places[n.target.options.id].title),console.log("Clicked place ID: "+this.data.layer.places[n.target.options.id].id),this.data.layer.places[n.target.options.id].state=!this.data.layer.places[n.target.options.id].state}}}}),c=(e(309),e(53)),component=Object(c.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"page"}},[e("div",{ref:"scroll_container",staticClass:"flex a1000c-horizontal",attrs:{id:"page_inner"},on:{wheelX:n.scrollX}},[e("section",{staticClass:"flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0 sm:pb-8",attrs:{id:"info"}},[e("div",{staticClass:"content flex items-top overflow-x-auto"},[e("div",{staticClass:"bg-red-100 bg-opacity-30 my-1 mx-5 pt-2 pb-6",attrs:{id:"info_inner"}},[n.$fetchState.pending?e("p",[n._v("Loading...")]):n.$fetchState.error?e("p",[n._v("An error occurred :(")]):e("div",[this.data.layer.image_link?e("span",[e("img",{staticClass:"max-w-full sm:max-w-ws",attrs:{src:this.data.layer.image_link,alt:this.data.layer.title}})]):n._e(),n._v(" "),e("h2",{staticClass:"block font-semibold text-lg bg-a100c-white px-2 py-1 rounded shadow mt-3"},[n._v(n._s(this.data.layer.title))]),n._v(" "),this.data.layer.subtitle?e("h3",{staticClass:"block font-semibold text-md bg-a100c-white px-2 py-1 rounded shadow mt-2"},[n._v(n._s(this.data.layer.subtitle))]):n._e(),n._v(" "),e("div",{staticClass:"block bg-a100c-white px-2 py-1 rounded shadow mt-2",domProps:{innerHTML:n._s(this.data.layer.text)}}),n._v(" "),this.data.layer.credits?e("div",{staticClass:"block bg-a100c-white text-sm text-black-500 px-2 py-1 rounded shadow mt-2 mb-4",domProps:{innerHTML:n._s(this.data.layer.credits)}}):n._e()])])]),n._v(" "),e("div",{staticClass:"nav flex items-center content-center justify-center"},[e("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})])])],1)]),n._v(" "),e("section",{staticClass:"flex min-h-screen max-h-screen bg-a100c-2",attrs:{id:"map"}},[e("div",{staticClass:"nav flex flex-col content-center"},[e("nuxt-link",{staticClass:"flex h-full self-center items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"info"}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])])],1),n._v(" "),e("div",{staticClass:"content items-center justify-center"},[e("div",{staticClass:"block",attrs:{id:"map_header"}},[n.$fetchState.pending?e("p",{staticClass:"text-sm text-red-300"},[n._v("Fetching places...")]):n.$fetchState.error?e("p",{staticClass:"text-sm text-red-300"},[n._v("An error occurred :(")]):e("div",[e("p",{staticClass:"text-sm text-red-300"},[e("button",{on:{click:n.$fetch}},[n._v("Refresh")]),n._v(" //\n              "),e("nuxt-link",{staticClass:"text-red-300",attrs:{to:{path:"/"}}},[n._v("Home")])],1)]),n._v(" "),e("p",[e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowup"],expression:"['arrowup']"}],staticClass:"hidden",on:{shortkey:function(t){return n.navigate_top()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"}})])]),n._v(" "),e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowleft"],expression:"['arrowleft']"}],staticClass:"hidden",on:{shortkey:function(t){return n.navigate_left()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"}})])]),n._v(" "),e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowright"],expression:"['arrowright']"}],staticClass:"hidden",on:{shortkey:function(t){return n.navigate_right()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])])])]),n._v(" "),e("div",{staticClass:"h-full bg-red-100 bg-opacity-10 my-1 mx-1",attrs:{id:"map_inner"}},[e("div",{staticClass:"h-full w-full border-solid border-2 border-white shadow z-40",attrs:{id:"map_map"}},[e("client-only",[e("l-map",{ref:"map",attrs:{zoom:4,minZoom:2,center:[55.9464418,8.1277591]},on:{ready:n.onMapReady}},[e("l-tile-layer",{attrs:{url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),n._v(" "),n._l(this.data.layer.places,(function(t,o){return e("l-circle-marker",{key:"marker-"+o,attrs:{"lat-lng":[t.lat,t.lon],radius:n.circle.radius,color:n.circle.color,stroke:n.circle.stroke,fillColor:n.circle.fillcolor,fillOpacity:n.circle.fillopacity,id:o,options:{title:"marker-"+o,id:o}},on:{click:n.handleMapClick}},[e("l-tooltip",{attrs:{content:t.title,options:{permanent:"true",direction:"top"}}})],1)}))],2)],1)],1)])]),n._v(" "),n.$fetchState.pending?e("p",{staticClass:"text-sm text-red-300"},[n._v("Fetching places...")]):n.$fetchState.error?e("p",{staticClass:"text-sm text-red-300"},[n._v("An error occurred :(")]):e("div",{staticClass:"sm:absolute sm:top-4 sm:right-4"},[e("place-modals",{attrs:{list:this.data.layer.places}})],1),n._v(" "),e("div",{staticClass:"nav flex flex-col  items-center content-center justify-center"},[e("nuxt-link",{staticClass:"flex h-full self-center items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"list"}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})])])],1)]),n._v(" "),e("section",{staticClass:"flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0",attrs:{id:"list"}},[e("div",{staticClass:"nav flex items-center content-center justify-center"},[e("nuxt-link",{staticClass:"flex h-full w-full items-center justify-center text-white font-bold",attrs:{to:{path:"/main",hash:"map"}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])])],1),n._v(" "),e("div",{staticClass:"content flex items-top overflow-x-auto pb-10"},[e("div",{staticClass:"bg-red-100 bg-opacity-30 my-1 mx-5",attrs:{id:"list_inner"}},[n.$fetchState.pending?e("p",[n._v("Loading...")]):n.$fetchState.error?e("p",[n._v("An error occurred :(")]):e("div",[e("ul",{staticClass:"pb-10"},n._l(this.data.layer.places,(function(t,o){return e("li",{staticClass:"bg-a100c-white px-4 py-2 rounded shadow mt-4"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:n.swiperOptions,expression:"swiperOptions",arg:o}]},[t.images?e("div",{staticClass:"swiper-wrapperX"},n._l(t.images,(function(image,n){return e("div",{staticClass:"swiper-slideX px-0 pb-4 pt-2 sm:px-4 sm:pt-4"},[e("span",image?[e("img",{staticClass:"max-w-full sm:max-w-ws",attrs:{src:image.image_url,alt:image.alt}})]:[e("img",{attrs:{src:"https://via.placeholder.com/585x870?text=Platzhalter_585x870px",alt:n}})])])})),0):n._e(),n._v(" "),e("div",{staticClass:"swiper-pagination"})]),n._v(" "),e("h3",{staticClass:"font-semibold text-lg px-4 py-2 sm:px-16 sm:pt-8"},[n._v(n._s(t.title))]),n._v(" "),e("div",{staticClass:"text-gray-500 px-4 sm:px-16 sm:py-4",domProps:{innerHTML:n._s(t.teaser)}}),n._v(" "),e("ul",{staticClass:"pb-4 sm:px-8"},n._l(t.annotations,(function(t,o){return e("li",{staticClass:"bg-a100c-3 px-4 py-4 rounded shadow mt-4 mb-6"},[t.title?e("h4",{staticClass:"font-semibold text-md px-4 py-2"},[n._v(n._s(t.title))]):n._e(),n._v(" "),e("div",{staticClass:"text-gray-500 px-4",domProps:{innerHTML:n._s(t.text)}})])})),0),n._v(" "),e("footer",[e("p",{staticClass:"text-gray-500  px-4 py-2 sm:px-16 sm:py-4"},[e("button",{staticClass:"text-link",on:{click:function(e){return n.recenterMap(t.lat,t.lon)}}},[n._v("Show on the map")])])])])})),0)])])])])]),n._v(" "),e("div",{staticClass:"static invisible md:visible"},[e("div",{staticClass:"absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},[e("p",{staticClass:"text-red-300 items-center whitespace-nowrap"},[n._v("\n        Navigate with arrow keys:\n        "),e("button",{staticClass:"whitespace-nowrap rounded-lg bg-red-100 pl-1 pr-2",on:{click:function(t){return n.navigate_left()}}},[e("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})]),n._v("\n          back\n        ")]),n._v(" |\n        "),e("button",{staticClass:"whitespace-nowrap rounded-lg bg-red-100 pl-1 pr-2",on:{click:function(t){return n.navigate_top()}}},[e("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"}})]),n._v("\n          home\n        ")]),n._v(" |\n        "),e("button",{staticClass:"whitespace-nowrap rounded-lg bg-red-100 pl-1 pr-2",on:{click:function(t){return n.navigate_right()}}},[e("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{staticClass:"text-red-300 fill-current",attrs:{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}})]),n._v("\n          forward\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PlaceModals:e(306).default})}}]);