(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7329:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(676);var r=i(2961);function o(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6612:function(e,n,i){"use strict";i.d(n,{U:function(){return t}});var t={en:{nav_home:"Home",nav_trophies:"Trophies",user_change_avatar:"Change Avatar",user_login:"Login",user_logout:"Logout"},jp:{nav_home:"\u30db\u30fc\u30e0",nav_trophies:"\u30c8\u30ed\u30d5\u30a3\u30fc",user_change_avatar:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5909\u66f4",user_login:"\u30ed\u30b0\u30a4\u30f3",user_logout:"\u30ed\u30b0\u30a2\u30a6\u30c8"}}},5011:function(e,n,i){"use strict";i.d(n,{Z:function(){return _}});var t=i(5893),r=i(1664),o=i(7922),s=(i(3404),i(6690),i(3006)),a=i(7294),c=i(6156),l=i(6503),u=i.n(l),d=i(1389),f=i(3062);function v(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function h(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?v(Object(i),!0).forEach((function(n){(0,c.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var m=o.Z.storage().ref();function g(e){var n=e.shown,i=e.onSave,r=e.onClose,o=(e.language,(0,a.useState)(null)),c=o[0],l=o[1],v=(0,a.useCallback)((function(e){l(e[0])}),[]),g=(0,d.u)({onDrop:v}),x=g.getRootProps,p=g.getInputProps,j=g.isDragActive,_=(0,a.useState)(void 0),b=_[0],y=_[1];(0,a.useEffect)((function(){y(c?URL.createObjectURL(c):void 0)}),[c]);var N=(0,a.useState)(!1),w=N[0],T=N[1],C=(0,a.useState)(!1),S=C[0],k=C[1];(0,a.useEffect)((function(){n?(T(!0),k(!0)):(k(!1),setTimeout((function(){T(!1)}),250))}),[n]);var B=(0,a.useState)(!1),D=B[0],O=B[1],E=(0,f.BF)(),Z=(0,a.useState)(null),U=Z[0],A=Z[1];return(0,a.useEffect)((function(){E.subscribe((function(e){A(e?e.uid:null)}))}),[E]),(0,t.jsx)("div",{className:"overlay-layout",style:{opacity:S?1:0,display:w?"flex":"none",transition:"250ms",justifyContent:"center",alignItems:"center"},children:(0,t.jsxs)("div",{className:u().box,children:[(0,t.jsxs)("div",{className:u().head,children:[(0,t.jsx)("div",{className:u().title,children:"Change Icon"}),(0,t.jsx)("div",{className:u().close,onClick:function(e){l(null),r()},children:(0,t.jsx)(s.aM,{})})]}),(0,t.jsx)("div",{className:u().content,children:(0,t.jsxs)("div",h(h({},x()),{},{className:u().imageDrag+" "+(j?u().dragging:""),children:[(0,t.jsx)("input",h({},p())),j?(0,t.jsx)("div",{children:"Drop the files here..."}):b?(0,t.jsx)("div",{className:"w-full h-full rounded-full",style:{background:"url(".concat(b,") 0% 0% / cover")}}):(0,t.jsx)("div",{children:"Drag and drop some files here, or click to select files."}),D?(0,t.jsx)("div",{className:u()["loading-overlay"],children:(0,t.jsx)("div",{className:u().icon,children:(0,t.jsx)(s.Ho,{})})}):null]}))}),(0,t.jsxs)("div",{className:u().foot,children:[(0,t.jsx)("div",{className:u().primary,children:(0,t.jsx)("button",{disabled:!c||D,onClick:function(e){O(!0),m.child("UserAvatar/"+U).put(c).then((function(){O(!1),l(null),i()})).catch((function(e){O(!1)}))},children:"Save"})}),(0,t.jsx)("div",{className:u().secondary})]})]})})}var x=i(6612),p=o.Z.storage().ref();function j(e){var n=e.link,i=e.icon,o=e.title;return(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(r.default,{href:n||"",children:(0,t.jsxs)("a",{children:[i||null,(0,t.jsx)("span",{children:o})]})})})}function _(e){var n=e.language,i=(0,f.NF)(),r=i.userLoaded,c=i.user,l=(0,a.useState)(!1),u=l[0],d=l[1],v=(0,a.useCallback)((function(){d((function(e){return!e}))}),[]),h=(0,a.useState)(!1),m=h[0],_=h[1],b=(0,a.useState)(null),y=b[0],N=b[1];(0,a.useEffect)((function(){N(null),c&&p.child("UserAvatar/"+c.uid).getDownloadURL().catch((function(e){return p.child("UserAvatar/default_male.png").getDownloadURL()})).then((function(e){N(e)}))}),[c,u]);var w=(0,a.useMemo)((function(){return x.U[n]}),[n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:"homeNav",children:(0,t.jsxs)("div",{className:"session",children:[(0,t.jsx)(j,{title:w.nav_home,icon:(0,t.jsx)(s.tv,{}),link:"/"}),(0,t.jsx)(j,{title:w.nav_trophies,icon:(0,t.jsx)(s.KW,{}),link:"/trophies"}),(0,t.jsx)("div",{className:"item",style:{paddingTop:"1.5rem",paddingBottom:"1.5rem"},children:!r||c&&!y?(0,t.jsx)("div",{className:"group relative flex items-center",children:(0,t.jsx)("div",{className:"w-16 h-16 rounded-full",children:(0,t.jsx)(s.Ho,{style:{width:"100%"}})})}):c?(0,t.jsxs)("div",{className:"group relative flex items-center",children:[(0,t.jsx)("div",{style:{backgroundImage:"url(".concat(y,")"),backgroundColor:"rgba(var(--color-text-rgb), 0.25)",backgroundSize:"cover"},className:"w-12 h-12 rounded-full"}),(0,t.jsxs)("div",{style:{top:"100%",right:-10,marginTop:-10,background:"#fff",whiteSpace:"nowrap"},className:"group-hover:block absolute shadow-xl rounded-2xl hidden text-center",children:[(0,t.jsx)("div",{className:"px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-t-2xl",onClick:function(e){_(!0)},children:w.user_change_avatar}),(0,t.jsx)("div",{className:"px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-b-2xl",onClick:function(e){o.Z.auth().signOut()},children:w.user_logout})]})]}):(0,t.jsx)(j,{title:w.user_login,link:"/login"})})]})}),(0,t.jsx)("div",{className:"overlay-container",children:(0,t.jsx)(g,{shown:m,onSave:function(){_(!1),v()},onClose:function(){_(!1)},language:n})})]})}},5779:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return C}});var t=i(7329),r=i(5893),o=i(1664),s=i(9008),a=i(7922),c=(i(3404),i(3006)),l=i(7294),u=i(6716),d=i(5720),f=i(9127),v=i(2407),h=i(1361),m=i(3062),g=i(6612),x=i(252),p=i.n(x),j=i(4698),_=i.n(j);function b(e){var n=e.shown,i=e.message,t=e.tropy,o=t.name,s=t.color;return(0,r.jsxs)("div",{className:"\n    ".concat(p().notificationBanner,"\n    ").concat(_()[s]," ").concat(_().trophy,"\n    ").concat(n?p().shown:"","\n  "),children:[(0,r.jsx)("div",{className:p().icon,children:(0,r.jsx)(c.rm,{})}),(0,r.jsxs)("div",{className:p().detail,children:[(0,r.jsx)("div",{className:p().message,children:i}),(0,r.jsx)("div",{className:p().name,children:o})]})]})}var y=i(5011),N=i(7839);function w(e){var n=e.color||"#333333";return(0,r.jsxs)("svg",{height:"100%",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fill:n,fillRule:"evenodd",clipRule:"evenodd",d:"M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM66.1112 35C66.1112 52.1822 52.1822 66.1111 35 66.1111C17.8179 66.1111 3.88893 52.1822 3.88893 35C3.88893 17.8178 17.8179 3.88892 35 3.88892C52.1822 3.88892 66.1112 17.8178 66.1112 35Z"}),(0,r.jsx)("path",{fill:n,d:"M35 61.4446C49.6049 61.4446 61.4444 49.605 61.4444 35.0001C61.4444 20.3952 49.6049 8.55566 35 8.55566C20.3951 8.55566 8.55554 20.3952 8.55554 35.0001C8.55554 49.605 20.3951 61.4446 35 61.4446Z"})]})}function T(e){var n=e.link,i=e.color,t=e.overlay,s=e.name,a=e.bestTime,c=(0,l.useMemo)((function(){return a?(0,N.to)(a):null}),[a]);return(0,r.jsxs)("div",{className:"wrap",children:[(0,r.jsx)("div",{className:"spacing"}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)(o.default,{href:n||"",children:(0,r.jsxs)("a",{children:[(0,r.jsxs)("div",{className:"icon",children:[(0,r.jsx)("div",{className:"icon-bg",children:(0,r.jsx)(w,{color:i})}),(0,r.jsx)("div",{className:"icon-main",children:t})]}),(0,r.jsx)("div",{className:"name",children:s})]})}),a?(0,r.jsxs)("div",{className:"personalBestTime",children:[(0,r.jsx)("div",{className:"title",children:"Your Best Time"}),(0,r.jsx)("div",{children:c})]}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsx)("div",{className:"spacing"}),(0,r.jsx)("div",{className:"spacing"})]})}function C(e){var n=(0,m.NF)(),i=(n.userLoaded,n.user),o=(0,m.BF)(),x=(0,m.pV)(o),p=(0,l.useRef)([]),j=(0,l.useRef)(null),_=(0,l.useState)(!1),N=_[0],w=_[1],C=(0,l.useState)({color:"string",condition:{},name:"string"}),S=C[0],k=C[1],B=(0,l.useState)(!1),D=B[0],O=B[1],E=(0,l.useMemo)((function(){return new u.x}),[]);(0,l.useEffect)((function(){var e=new d.w0;return e.add(E.subscribe((function(){j.current&&null!==i&&void 0!==i&&i.uid&&a.Z.firestore().collection("users").doc(i.uid).update({queuedTropyNotifications:a.Z.firestore.FieldValue.arrayRemove(j.current)})}))),function(){e.unsubscribe()}}),[E,null===i||void 0===i?void 0:i.uid]);var Z=(0,l.useState)(null),U=Z[0],A=Z[1];(0,l.useEffect)((function(){var e=new d.w0;return e.add(x.pipe((0,f.U)((function(e){return e.queuedTropyNotifications||[]}))).pipe(v.Zh).pipe(v.Qg).pipe(h.Q).subscribe((function(e){var n;(n=p.current).push.apply(n,(0,t.Z)(e)),w(!0)}))),e.add(x.pipe((0,f.U)((function(e){return e.bestTime}))).subscribe((function(e){A(e)}))),function(){e.unsubscribe()}}),[o,x]),(0,l.useEffect)((function(){if(N){var e=null,n=null;return i(),function(){clearTimeout(e),clearTimeout(n)}}function i(){var i=p.current.shift();i&&(j.current=i._ref,k(i),O(!0),n=setTimeout((function(){E.next()}),1e3),e=setTimeout(t,5200))}function t(){O(!1),e=setTimeout(i,200)}}),[N,E]);var P=e.language;(0,l.useMemo)((function(){return g.U[P]}),[P]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"home-container",children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"Motivational Web Development"})}),(0,r.jsx)(y.Z,{language:P}),(0,r.jsxs)("div",{className:"topics session",children:[(0,r.jsx)(T,{name:"Computer Science",color:"#EE2E22",overlay:(0,r.jsx)(c.bb,{}),link:"quiz/CSE",bestTime:null===U||void 0===U?void 0:U.CSE}),(0,r.jsx)(T,{name:"Academics",color:"#476cff",overlay:(0,r.jsx)(c.IX,{}),link:"quiz/Academics",bestTime:null===U||void 0===U?void 0:U.Academics}),(0,r.jsx)(T,{name:"Texting",color:"#0bac61",overlay:(0,r.jsx)(c.kB,{}),link:"quiz/Texting",bestTime:null===U||void 0===U?void 0:U.Casual})]})]}),(0,r.jsx)("div",{className:"overlay-container",children:(0,r.jsx)("div",{className:"overlay-layout right transparent",children:(0,r.jsx)(b,{shown:D,message:"\u30c8\u30ed\u30d5\u30a3\u30fc\u3092\u30b2\u30c3\u30c8\u3057\u307e\u3057\u305f\uff01",tropy:S})})})]})}},5301:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5779)}])},6503:function(e){e.exports={box:"DialogBox_box__S_UC-",head:"DialogBox_head__1NaSO",foot:"DialogBox_foot__FU4gZ",content:"DialogBox_content__3pSSD",title:"DialogBox_title__2uUJU",close:"DialogBox_close__1VdlZ",imageDrag:"DialogBox_imageDrag__UuMVk","loading-overlay":"DialogBox_loading-overlay__1TVoX",icon:"DialogBox_icon__1fEww",dragging:"DialogBox_dragging__21nYg"}},252:function(e){e.exports={notificationBanner:"NotificationBanner_notificationBanner__1WRT1",shown:"NotificationBanner_shown__26BpT",icon:"NotificationBanner_icon__3-jjY",detail:"NotificationBanner_detail__1Th6H",name:"NotificationBanner_name__3D3CF"}},4698:function(e){e.exports={ruby:"Trophy_ruby__1Gvag",trophy:"Trophy_trophy__3Vv97",diamond:"Trophy_diamond__A9ASF",gold:"Trophy_gold__1v1j1",silver:"Trophy_silver__2xcgp",bronze:"Trophy_bronze__FuJwY",hidden:"Trophy_hidden__2AVPA"}}},function(e){e.O(0,[774,828,834,724,503,944,173,457,389,839,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);