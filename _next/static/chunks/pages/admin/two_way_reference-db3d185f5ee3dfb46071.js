(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{7922:function(e,r,t){"use strict";var n=t(5503);0===n.Z.apps.length&&n.Z.initializeApp({apiKey:"AIzaSyDBORguQ4fUIgHevka4CiC-M44DM5DoBLQ",authDomain:"gt-uoa.firebaseapp.com",projectId:"gt-uoa",storageBucket:"gt-uoa.appspot.com",messagingSenderId:"990838040454",appId:"1:990838040454:web:25634085dc0b6184696e07"}),r.Z=n.Z},3804:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(5893),o=t(6156),i=t(18),c=t(7922),a=(t(3759),t(7294));function u(e,r){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"===typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw i}}}}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=c.Z.firestore();function d(){var e=(0,a.useState)([]),r=e[0],t=e[1],o=(0,a.useState)([]),c=o[0],f=o[1],l=(0,a.useMemo)((function(){for(var e=(0,i.Z)(r),t=0;t<e.length;t++){e[t]._belongTopic=-1;for(var n=0;n<c.length;n++)for(var o=c[n].problems,a=0;a<o.length;a++)o[a].isEqual(e[t]._ref)&&(e[t]._belongTopic=n)}return e}),[r,c]);function d(e){var r=e._belongTopic;-1!==r&&e._ref.update({topic:c[r]._ref})}return(0,a.useEffect)((function(){var e=[p.collection("problems").onSnapshot((function(e){t(e.docs.map((function(e){return s(s({},e.data()),{},{id:e.id,_ref:e.ref})})))})),p.collection("topic").onSnapshot((function(e){f(e.docs.map((function(e){return s(s({},e.data()),{},{id:e.id,_ref:e.ref})})))}))];return function(){var r,t=u(e);try{for(t.s();!(r=t.n()).done;){(0,r.value)()}}catch(n){t.e(n)}finally{t.f()}}}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{onClick:function(){var e,r=u(l);try{for(r.s();!(e=r.n()).done;){d(e.value)}}catch(t){r.e(t)}finally{r.f()}},children:"Update problems"}),(0,n.jsx)("h1",{children:"Problems Details"}),(0,n.jsxs)("table",{className:"border-collapse",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Document ID"}),(0,n.jsx)("th",{children:"Details"})]})}),(0,n.jsx)("tbody",{children:l.map((function(e,r){var t="";for(var o in e)t+="".concat(o,": ").concat(e[o],"\n");return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"border",children:e.id}),(0,n.jsx)("td",{className:"border",children:(0,n.jsx)("pre",{children:t})})]},e.id)}))})]})]})}},5827:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/two_way_reference",function(){return t(3804)}])}},function(e){e.O(0,[828,503,158,774,888,179],(function(){return r=5827,e(e.s=r);var r}));var r=e.O();_N_E=r}]);