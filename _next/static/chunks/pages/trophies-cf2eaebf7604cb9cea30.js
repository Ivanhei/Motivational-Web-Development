(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{4699:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(2961);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(s){i=!0,o=s}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}return r}}(e,n)||(0,t.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6257:function(e,n,r){"use strict";r(8483)},6612:function(e,n,r){"use strict";r.d(n,{U:function(){return t}});var t={en:{nav_home:"Home",nav_trophies:"Trophies",user_change_avatar:"Change Avatar",user_login:"Login",user_logout:"Logout"},jp:{nav_home:"\u30db\u30fc\u30e0",nav_trophies:"\u30c8\u30ed\u30d5\u30a3\u30fc",user_change_avatar:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5909\u66f4",user_login:"\u30ed\u30b0\u30a4\u30f3",user_logout:"\u30ed\u30b0\u30a2\u30a6\u30c8"}}},8251:function(e,n,r){"use strict";r.d(n,{Fd:function(){return j},Fr:function(){return y}});var t=r(6156),i=r(4699),o=r(7922),c=(r(6257),r(7294)),a=r(6716),s=r(5720),u=r(2303),l=r(2334),d=r(2407),f=r(1361),v=r(9127);function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var g=o.Z.firestore(),m={ruby:1,diamond:2,gold:3,silver:4,bronze:5};function b(){var e=(0,c.useMemo)((function(){return new a.x}),[]);return(0,c.useEffect)((function(){var n=new s.w0;return n.add((0,u.Dp)(g.collection("trophies").get()).pipe(d._M).pipe(f.Q).pipe((0,v.U)((function(e){return e.sort((function(e,n){return m[e.color]-m[n.color]}))}))).subscribe(e)),function(){n.unsubscribe()}}),[e]),e}function j(e){var n=b(),r=(0,c.useMemo)((function(){return new a.x}),[]);return(0,c.useEffect)((function(){var t=new s.w0;return t.add((0,l.a)([n,e.pipe((0,v.U)((function(e){return e.finishedTropies||[]})))]).pipe((0,v.U)((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1];return t&&0!==t.length?r.filter((function(e){return t.every((function(n){return!e._ref.isEqual(n)}))})):r}))).subscribe(r)),function(){t.unsubscribe()}}),[n,r,e]),r}function y(e){var n=b(),r=(0,c.useMemo)((function(){return new a.x}),[]);return(0,c.useEffect)((function(){var t=new s.w0;return t.add((0,l.a)([n,e.pipe((0,v.U)((function(e){return e.finishedTropies||[]})))]).pipe((0,v.U)((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1];return t&&0!==t.length?r.map((function(e){return p(p({},e),{},{achived:t.some((function(n){return e._ref.isEqual(n)}))})})):r.map((function(e){return p(p({},e),{},{achived:!1})}))}))).subscribe(r)),function(){t.unsubscribe()}}),[n,r,e]),r}},5011:function(e,n,r){"use strict";r.d(n,{Z:function(){return y}});var t=r(5893),i=r(1664),o=r(7922),c=(r(3404),r(6690),r(3006)),a=r(7294),s=r(6156),u=r(6503),l=r.n(u),d=r(1389),f=r(3062);function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?v(Object(r),!0).forEach((function(n){(0,s.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=o.Z.storage().ref();function g(e){var n=e.shown,r=e.onSave,i=e.onClose,o=(e.language,(0,a.useState)(null)),s=o[0],u=o[1],v=(0,a.useCallback)((function(e){u(e[0])}),[]),g=(0,d.u)({onDrop:v}),m=g.getRootProps,b=g.getInputProps,j=g.isDragActive,y=(0,a.useState)(void 0),x=y[0],_=y[1];(0,a.useEffect)((function(){_(s?URL.createObjectURL(s):void 0)}),[s]);var w=(0,a.useState)(!1),O=w[0],N=w[1],D=(0,a.useState)(!1),k=D[0],S=D[1];(0,a.useEffect)((function(){n?(N(!0),S(!0)):(S(!1),setTimeout((function(){N(!1)}),250))}),[n]);var P=(0,a.useState)(!1),E=P[0],U=P[1],T=(0,f.BF)(),A=(0,a.useState)(null),C=A[0],Z=A[1];return(0,a.useEffect)((function(){T.subscribe((function(e){Z(e?e.uid:null)}))}),[T]),(0,t.jsx)("div",{className:"overlay-layout",style:{opacity:k?1:0,display:O?"flex":"none",transition:"250ms",justifyContent:"center",alignItems:"center"},children:(0,t.jsxs)("div",{className:l().box,children:[(0,t.jsxs)("div",{className:l().head,children:[(0,t.jsx)("div",{className:l().title,children:"Change Icon"}),(0,t.jsx)("div",{className:l().close,onClick:function(e){u(null),i()},children:(0,t.jsx)(c.aM,{})})]}),(0,t.jsx)("div",{className:l().content,children:(0,t.jsxs)("div",h(h({},m()),{},{className:l().imageDrag+" "+(j?l().dragging:""),children:[(0,t.jsx)("input",h({},b())),j?(0,t.jsx)("div",{children:"Drop the files here..."}):x?(0,t.jsx)("div",{className:"w-full h-full rounded-full",style:{background:"url(".concat(x,") 0% 0% / cover")}}):(0,t.jsx)("div",{children:"Drag and drop some files here, or click to select files."}),E?(0,t.jsx)("div",{className:l()["loading-overlay"],children:(0,t.jsx)("div",{className:l().icon,children:(0,t.jsx)(c.Ho,{})})}):null]}))}),(0,t.jsxs)("div",{className:l().foot,children:[(0,t.jsx)("div",{className:l().primary,children:(0,t.jsx)("button",{disabled:!s||E,onClick:function(e){U(!0),p.child("UserAvatar/"+C).put(s).then((function(){U(!1),u(null),r()})).catch((function(e){U(!1)}))},children:"Save"})}),(0,t.jsx)("div",{className:l().secondary})]})]})})}var m=r(6612),b=o.Z.storage().ref();function j(e){var n=e.link,r=e.icon,o=e.title;return(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(i.default,{href:n||"",children:(0,t.jsxs)("a",{children:[r||null,(0,t.jsx)("span",{children:o})]})})})}function y(e){var n=e.language,r=(0,f.NF)(),i=r.userLoaded,s=r.user,u=(0,a.useState)(!1),l=u[0],d=u[1],v=(0,a.useCallback)((function(){d((function(e){return!e}))}),[]),h=(0,a.useState)(!1),p=h[0],y=h[1],x=(0,a.useState)(null),_=x[0],w=x[1];(0,a.useEffect)((function(){w(null),s&&b.child("UserAvatar/"+s.uid).getDownloadURL().catch((function(e){return b.child("UserAvatar/default_male.png").getDownloadURL()})).then((function(e){w(e)}))}),[s,l]);var O=(0,a.useMemo)((function(){return m.U[n]}),[n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:"homeNav",children:(0,t.jsxs)("div",{className:"session",children:[(0,t.jsx)(j,{title:O.nav_home,icon:(0,t.jsx)(c.tv,{}),link:"/"}),(0,t.jsx)(j,{title:O.nav_trophies,icon:(0,t.jsx)(c.KW,{}),link:"/trophies"}),(0,t.jsx)("div",{className:"item",style:{paddingTop:"1.5rem",paddingBottom:"1.5rem"},children:!i||s&&!_?(0,t.jsx)("div",{className:"group relative flex items-center",children:(0,t.jsx)("div",{className:"w-16 h-16 rounded-full",children:(0,t.jsx)(c.Ho,{style:{width:"100%"}})})}):s?(0,t.jsxs)("div",{className:"group relative flex items-center",children:[(0,t.jsx)("div",{style:{backgroundImage:"url(".concat(_,")"),backgroundColor:"rgba(var(--color-text-rgb), 0.25)",backgroundSize:"cover"},className:"w-12 h-12 rounded-full"}),(0,t.jsxs)("div",{style:{top:"100%",right:-10,marginTop:-10,background:"#fff",whiteSpace:"nowrap"},className:"group-hover:block absolute shadow-xl rounded-2xl hidden text-center",children:[(0,t.jsx)("div",{className:"px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-t-2xl",onClick:function(e){y(!0)},children:O.user_change_avatar}),(0,t.jsx)("div",{className:"px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-b-2xl",onClick:function(e){o.Z.auth().signOut()},children:O.user_logout})]})]}):(0,t.jsx)(j,{title:O.user_login,link:"/login"})})]})}),(0,t.jsx)("div",{className:"overlay-container",children:(0,t.jsx)(g,{shown:p,onSave:function(){y(!1),v()},onClose:function(){y(!1)},language:n})})]})}},7307:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(5893),i=r(9008),o=r(4698),c=r.n(o),a=r(3006),s=r(5011),u=r(7294),l=r(8251),d=r(3062);function f(e){var n=(0,u.useState)([]),r=n[0],o=n[1],f=(0,d.BF)(),v=(0,d.pV)(f),h=(0,l.Fr)(v);return(0,u.useEffect)((function(){h.subscribe((function(e){o(e)}))}),[h]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"home-container",children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"Trophies"})}),(0,t.jsx)(s.Z,{language:e.language}),(0,t.jsx)("div",{className:"tropies-container session",children:(0,t.jsx)("div",{className:"tropies",children:r.map((function(e){return(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("div",{className:"icon ".concat(e.achived?c()[e.color]:c().hidden),children:(0,t.jsx)(a.rm,{})}),(0,t.jsxs)("div",{className:"details",children:[(0,t.jsx)("div",{className:"name",children:e.achived?e.name:"\uff1f\uff1f\uff1f\uff08\uff1f\uff1f\uff1f\uff09"}),(0,t.jsx)("div",{className:"description",children:e.description})]})]},e._ref.id)}))})})]})})}},3446:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trophies",function(){return r(7307)}])},6503:function(e){e.exports={box:"DialogBox_box__S_UC-",head:"DialogBox_head__1NaSO",foot:"DialogBox_foot__FU4gZ",content:"DialogBox_content__3pSSD",title:"DialogBox_title__2uUJU",close:"DialogBox_close__1VdlZ",imageDrag:"DialogBox_imageDrag__UuMVk","loading-overlay":"DialogBox_loading-overlay__1TVoX",icon:"DialogBox_icon__1fEww",dragging:"DialogBox_dragging__21nYg"}},4698:function(e){e.exports={ruby:"Trophy_ruby__1Gvag",diamond:"Trophy_diamond__A9ASF",gold:"Trophy_gold__1v1j1",silver:"Trophy_silver__2xcgp",bronze:"Trophy_bronze__FuJwY",hidden:"Trophy_hidden__2AVPA"}},2334:function(e,n,r){"use strict";r.d(n,{a:function(){return p}});var t=r(1480),i=Array.isArray,o=Object.getPrototypeOf,c=Object.prototype,a=Object.keys;function s(e){if(1===e.length){var n=e[0];if(i(n))return{args:n,keys:null};if((t=n)&&"object"===typeof t&&o(t)===c){var r=a(n);return{args:r.map((function(e){return n[e]})),keys:r}}}var t;return{args:e,keys:null}}var u=r(2303),l=r(278),d=r(3211),f=r(7617);function v(e,n){return e.reduce((function(e,r,t){return e[r]=n[t],e}),{})}var h=r(2566);function p(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=(0,f.yG)(e),i=(0,f.jO)(e),o=s(e),c=o.args,a=o.keys;if(0===c.length)return(0,u.Dp)([],r);var h=new t.y(g(c,r,a?function(e){return v(a,e)}:l.y));return i?h.pipe((0,d.Z)(i)):h}function g(e,n,r){return void 0===r&&(r=l.y),function(t){m(n,(function(){for(var i=e.length,o=new Array(i),c=i,a=i,s=function(i){m(n,(function(){var s=(0,u.Dp)(e[i],n),l=!1;s.subscribe(new h.Q(t,(function(e){o[i]=e,l||(l=!0,a--),a||t.next(r(o.slice()))}),(function(){--c||t.complete()})))}),t)},l=0;l<i;l++)s(l)}),t)}}function m(e,n,r){e?r.add(e.schedule(n)):n()}},7617:function(e,n,r){"use strict";r.d(n,{_6:function(){return a},jO:function(){return o},yG:function(){return c}});var t=r(8474);function i(e){return e[e.length-1]}function o(e){return(0,t.m)(i(e))?e.pop():void 0}function c(e){return(n=i(e))&&(0,t.m)(n.schedule)?e.pop():void 0;var n}function a(e,n){return"number"===typeof i(e)?e.pop():n}},3211:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(5987),i=r(9127),o=Array.isArray;function c(e){return(0,i.U)((function(n){return function(e,n){return o(n)?e.apply(void 0,(0,t.ev)([],(0,t.CR)(n))):e(n)}(e,n)}))}}},function(e){e.O(0,[774,828,834,724,503,944,173,457,389,839,888,179],(function(){return n=3446,e(e.s=n);var n}));var n=e.O();_N_E=n}]);