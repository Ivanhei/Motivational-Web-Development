(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2407:function(n,r,t){"use strict";t.d(r,{hi:function(){return g},hs:function(){return p},Zh:function(){return m},Qg:function(){return v},_M:function(){return b},Az:function(){return w},mF:function(){return j}});var e=t(6156),u=t(7839),o=t(7922),i=(t(3404),t(7877)),c=t(9127);function a(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function f(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,e.Z)(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}var s=o.Z.storage(),l=function(n){return f(f({},n.data()),{},{id:n.id,_ref:n.ref})},d=function(n){return n.audio?s.ref().child(n.audio).getDownloadURL().then((function(r){return f(f({},n),{},{audio_url:r})})).catch((function(r){return console.error("Error while getting Audio URL. ",r.code),n})):n},h=function(n){return n.image?s.ref().child(n.image).getDownloadURL().then((function(r){return f(f({},n),{},{image_url:r})})).catch((function(r){return console.error("Error while getting Image URL. ",r.code),n})):n},g=function(n){return function(r){return r.length>n?(0,u.$A)(r,n):r}},p=((0,i.z)((function(n){return n.get()})),(0,c.U)(l)),m=(0,i.z)((function(n){return Promise.all(n.map((function(n){return n.get()})))})),v=(0,c.U)((function(n){return n.map(l)})),b=(0,c.U)((function(n){return n.docs.map(l)})),w=(0,i.z)((function(n){return Promise.all(n.map(d))})),j=((0,i.z)(d),(0,i.z)((function(n){return Promise.all(n.map(h))})));(0,i.z)(h)},930:function(n,r,t){"use strict";t.d(r,{R:function(){return i}});var e=t(5503),u=t(1480),o=t(5583);t(2407);function i(){return new u.y((function(n){var r=e.Z.auth().onAuthStateChanged((function(r){return n.next(r)}),(function(r){return n.error(r)}),(function(){return n.complete()}));return function(){r(),n.complete()}})).pipe((0,o.B)())}},7922:function(n,r,t){"use strict";var e=t(5503);0===e.Z.apps.length&&e.Z.initializeApp({apiKey:"AIzaSyDBORguQ4fUIgHevka4CiC-M44DM5DoBLQ",authDomain:"gt-uoa.firebaseapp.com",projectId:"gt-uoa",storageBucket:"gt-uoa.appspot.com",messagingSenderId:"990838040454",appId:"1:990838040454:web:25634085dc0b6184696e07"}),r.Z=e.Z},7839:function(n,r,t){"use strict";t.d(r,{$A:function(){return i},TV:function(){return c},hI:function(){return a},ly:function(){return s},A2:function(){return l},Ye:function(){return d},XF:function(){return h},X$:function(){return g},db:function(){return p},to:function(){return m}});t(7757);var e=t(5893),u=t(1163),o=t(7294);function i(n,r){var t=new Array(r),e=n.length,u=new Array(e);if(r>e)throw new RangeError("getRandom: more elements taken than available");for(;r--;){var o=Math.floor(Math.random()*e);t[r]=n[o in u?u[o]:o],u[o]=--e in u?u[e]:e}return t}function c(n){for(var r,t=n.length;0!==t;){r=Math.floor(Math.random()*t),t--;var e=[n[r],n[t]];n[t]=e[0],n[r]=e[1]}return n}function a(n){return"".concat((0,u.useRouter)().basePath).concat(n)}function f(n){var r=/^([^\[]*)\[([^\[]*)\]([^\[]*)$/g.exec(n);return r?{before:r[1],inside:r[2],after:r[3]}:null}function s(n){var r=n.sentence,t=n.inside,u=f(r);return u?(0,e.jsxs)(e.Fragment,{children:[u.before," ",(0,e.jsx)("u",{children:t})," ",u.after]}):(0,e.jsx)(e.Fragment,{children:r})}function l(n,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=f(n);if(!e)return n;var u=t?" ":"";return e.before+u+r+u+e.after}function d(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{volume:1},t=r.volume,e=(0,o.useMemo)((function(){var r=new Audio(n);return r.volume=t,r}),[n,t]),u=(0,o.useCallback)((function(){return e.currentTime=0,e.play().catch((function(n){if("NotAllowedError"!==n.name)throw n;console.log("This system does not allow audio to be auto-played.")}))}),[e]);return{audio:e,play:u}}function h(n){return Math.floor(Math.random()*n)}function g(n,r){return n.filter((function(n){return!r.some((function(r){return n.isEqual(r)}))}))}function p(n){return{minutes:Math.floor(n/60),seconds:Math.round(n%60*100)/100}}function m(n){return(r=p(n)).minutes>0?"".concat(r.minutes,"m"):" "+"".concat(r.seconds,"s");var r}},1184:function(n,r,t){"use strict";t.d(r,{Z:function(){return a}});var e=t(5893),u=t(7839),o=t(7922),i=(t(6690),t(5913)),c=t.n(i);function a(n){var r=n.signInSuccessUrl,t=(0,u.hI)(r||""),i={signInFlow:"popup",signInSuccessUrl:r?t:void 0,signInOptions:[o.Z.auth.EmailAuthProvider.PROVIDER_ID]};return(0,e.jsx)(c(),{uiConfig:i,firebaseAuth:o.Z.auth()})}},1162:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var e=t(5893),u=t(1664),o=t(9008),i=t(1184),c=t(7294),a=t(930);function f(n){var r=(0,c.useState)(void 0),t=r[0],f=r[1];return(0,c.useEffect)((function(){var n=(0,a.R)().subscribe((function(n){f(!n)}));return function(){n.unsubscribe()}}),[]),(0,e.jsxs)("div",{id:"login-container",children:[(0,e.jsx)(o.default,{children:(0,e.jsx)("title",{children:"Login"})}),t?(0,e.jsx)(i.Z,{signInSuccessUrl:"/"}):null,(0,e.jsx)(u.default,{href:"/",children:(0,e.jsx)("a",{children:"Go Back"})})]})}},7156:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(1162)}])}},function(n){n.O(0,[834,717,503,173,208,774,888,179],(function(){return r=7156,n(n.s=r);var r}));var r=n.O();_N_E=r}]);