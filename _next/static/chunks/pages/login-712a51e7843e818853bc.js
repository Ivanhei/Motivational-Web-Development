(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7922:function(n,t,r){"use strict";var e=r(5503);0===e.Z.apps.length&&e.Z.initializeApp({apiKey:"AIzaSyDBORguQ4fUIgHevka4CiC-M44DM5DoBLQ",authDomain:"gt-uoa.firebaseapp.com",projectId:"gt-uoa",storageBucket:"gt-uoa.appspot.com",messagingSenderId:"990838040454",appId:"1:990838040454:web:25634085dc0b6184696e07"}),t.Z=e.Z},7839:function(n,t,r){"use strict";r.d(t,{$A:function(){return f},TV:function(){return s},hI:function(){return l},Rt:function(){return d},ly:function(){return v},A2:function(){return g},Ye:function(){return p},XF:function(){return b},BF:function(){return m},NF:function(){return w}});r(7757);var e=r(5893),u=r(1163),o=r(7922),i=(r(6690),r(3759),r(1480)),c=r(7294),a=r(8346);function f(n,t){var r=new Array(t),e=n.length,u=new Array(e);if(t>e)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var o=Math.floor(Math.random()*e);r[t]=n[o in u?u[o]:o],u[o]=--e in u?u[e]:e}return r}function s(n){for(var t,r=n.length;0!==r;){t=Math.floor(Math.random()*r),r--;var e=[n[t],n[r]];n[r]=e[0],n[t]=e[1]}return n}function l(n){return"".concat((0,u.useRouter)().basePath).concat(n)}function d(){return new i.y((function(n){var t=o.Z.auth().onAuthStateChanged((function(t){return n.next(t)}),(function(t){return n.error(t)}),(function(){return n.complete()}));return function(){t(),n.complete()}}))}function h(n){var t=/^([^\[]*)\[([^\[]*)\]([^\[]*)$/g.exec(n);return t?{before:t[1],inside:t[2],after:t[3]}:null}function v(n){var t=n.sentence,r=n.inside,u=h(t);return u?(0,e.jsxs)(e.Fragment,{children:[u.before," ",(0,e.jsx)("u",{children:r})," ",u.after]}):(0,e.jsx)(e.Fragment,{children:t})}function g(n,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=h(n);if(!e)return n;var u=r?" ":"";return e.before+u+t+u+e.after}function p(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{volume:1},r=t.volume,e=(0,c.useMemo)((function(){var t=new Audio(n);return t.volume=r,t}),[n,r]),u=(0,c.useCallback)((function(){return e.currentTime=0,e.play().catch((function(n){if("NotAllowedError"!==n.name)throw n;console.log("This system does not allow audio to be auto-played.")}))}),[e]);return{audio:e,play:u}}function b(n){return Math.floor(Math.random()*n)}function m(){var n=(0,c.useMemo)((function(){return new a.t(1)}),[]);return(0,c.useEffect)((function(){var t=d().subscribe(n);return function(){t.unsubscribe()}}),[n]),n}function w(){var n=(0,c.useState)(!1),t=n[0],r=n[1],e=(0,c.useState)(null),u=e[0],o=e[1];return(0,c.useEffect)((function(){var n=d().subscribe((function(n){r(!0),o(n)}));return function(){n.unsubscribe()}}),[]),[t,u]}},1184:function(n,t,r){"use strict";r.d(t,{Z:function(){return a}});var e=r(5893),u=r(7839),o=r(7922),i=(r(6690),r(5913)),c=r.n(i);function a(n){var t=n.signInSuccessUrl,r=(0,u.hI)(t||""),i={signInFlow:"popup",signInSuccessUrl:t?r:void 0,signInOptions:[o.Z.auth.EmailAuthProvider.PROVIDER_ID]};return(0,e.jsx)(c(),{uiConfig:i,firebaseAuth:o.Z.auth()})}},1162:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var e=r(5893),u=r(1664),o=r(9008),i=r(1184),c=r(7294),a=r(7839);function f(n){var t=(0,c.useState)(void 0),r=t[0],f=t[1];return(0,c.useEffect)((function(){var n=(0,a.Rt)().subscribe((function(n){f(!n)}));return function(){n.unsubscribe()}}),[]),(0,e.jsxs)("div",{id:"login-container",children:[(0,e.jsx)(o.default,{children:(0,e.jsx)("title",{children:"Login"})}),r?(0,e.jsx)(i.Z,{signInSuccessUrl:"/"}):null,(0,e.jsx)(u.default,{href:"/",children:(0,e.jsx)("a",{children:"Go Back"})})]})}},7156:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(1162)}])}},function(n){n.O(0,[828,834,717,788,450,208,774,888,179],(function(){return t=7156,n(n.s=t);var t}));var t=n.O();_N_E=t}]);