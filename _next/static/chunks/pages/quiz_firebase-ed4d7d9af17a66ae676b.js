(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{7922:function(e,t,n){"use strict";var r=n(5503);0===r.Z.apps.length&&r.Z.initializeApp({apiKey:"AIzaSyDBORguQ4fUIgHevka4CiC-M44DM5DoBLQ",authDomain:"gt-uoa.firebaseapp.com",projectId:"gt-uoa",storageBucket:"gt-uoa.appspot.com",messagingSenderId:"990838040454",appId:"1:990838040454:web:25634085dc0b6184696e07"}),t.Z=r.Z},3615:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(18),s=n(7757),i=n.n(s),o=n(2137),a=n(6156),c=n(5893),l=n(7922),u=(n(3759),n(6550),n(7294)),d=n(6515),f=n(6716),x=n(2799),h=n(9127),p=n(7877);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=l.Z.firestore(),v=l.Z.storage();var j=(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 0 30.708 30.708",children:(0,c.jsx)("path",{id:"Icon_material-close","data-name":"Icon material-close",d:"M38.208,10.593,35.115,7.5,22.854,19.761,10.593,7.5,7.5,10.593,19.761,22.854,7.5,35.115l3.093,3.093L22.854,25.947,35.115,38.208l3.093-3.093L25.947,22.854Z",transform:"translate(-7.5 -7.5)",fill:"#707070"})}),b=-1,N=(new d.X(b),new f.x,new f.x,new f.x,function(e,t){var n=e.challenge,r=(0,u.useState)(""),s=r[0],i=r[1],o=(0,u.useState)(!1),a=(o[0],o[1]),l=(0,u.useState)([]);l[0],l[1];var d=(0,u.useState)(b),f=d[0],x=d[1];function h(){if(f===b){var t=("mc"===n.type?n.answer===s:n.answer.toLowerCase()===s.toLowerCase())?1:0;x(t),1==t&&e.onCorrect()}}function p(){i(""),e.onNext(1===f),x(b)}var m=new Audio(n.audio_url);function g(){m.play()}(0,u.useEffect)((function(){g()}),[n]);var w=new Audio("../assets/sounds/correct_2.mp3"),v=new Audio("../assets/sounds/incorrect_2.mp3");return w.volume=.1,v.volume=.1,(0,u.useEffect)((function(){1===f?w.play():0===f&&v.play()}),[f]),(0,c.jsxs)(u.Fragment,{children:[(0,c.jsxs)("div",{className:"flex-grow text-center p-10 px-40 lg:px-60 xl:px-80",children:[(0,c.jsx)("h2",{}),(0,c.jsxs)("div",{className:"mx-32",children:[(0,c.jsxs)("div",{className:"flex p-10 mb-10 text-3xl",children:["mc"===n.type?"Choose":"Spell"," the word you heard."]}),(0,c.jsx)("div",{children:n.audio_url?(0,c.jsx)("button",{className:"p-4 play w-20 p-4",onClick:function(e){return g()},children:(0,c.jsxs)("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("rect",{width:"100",height:"100"}),(0,c.jsx)("path",{d:"M100 50L25 93.3013L25 6.69873L100 50Z",fill:"#FF7676"})]})}):(0,c.jsx)("div",{style:{color:"red"},children:"Error while fetching audio."})}),(0,c.jsx)("div",{children:(0,c.jsx)("div",{style:{marginTop:10,marginBottom:10},children:"mc"===n.type?n.options.map((function(e,t){return(0,c.jsx)("button",{className:s===e?1===f?"correct":0===f?"incorrect":"selected":"",onClick:function(t){return i(e)},style:{margin:10,width:"50%"},children:e},t)})):(0,c.jsx)("input",{onChange:function(e){i(event.target.value)},className:s.length>0?1===f?"correct":0===f?"incorrect":"answered":"",value:s})})})]})]}),(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsxs)("div",{className:"flex flex-cols align-middle items-center",children:[(0,c.jsx)("div",{className:"flex-grow"}),(0,c.jsx)("button",{className:"",onClick:function(){a((function(e){return!e}))},children:"Hint"}),(0,c.jsx)("div",{className:"flex-grow"}),f===b?(0,c.jsx)("button",{className:"block",onClick:h,children:"answer"}):(0,c.jsx)("button",{className:"block",onClick:p,children:e.isLastQuestion?"Complete Quiz":"Go to Next"}),(0,c.jsx)("div",{className:"flex-grow"})]}),(0,c.jsxs)("div",{className:"flex flex-cols align-middle items-center messageBox correct "+(1===f?"shown":""),children:[(0,c.jsx)("div",{className:"flex-grow"}),(0,c.jsx)("div",{className:"flex-grow"}),f===b?(0,c.jsx)("button",{className:"block",onClick:h,children:"answer"}):(0,c.jsx)("button",{className:"block",onClick:p,children:e.isLastQuestion?"Complete Quiz":"Go to Next"}),(0,c.jsx)("div",{className:"flex-grow"})]}),(0,c.jsxs)("div",{className:"flex flex-cols align-middle items-center messageBox incorrect "+(0===f?"shown":""),children:[(0,c.jsx)("div",{className:"flex-grow"}),(0,c.jsx)("div",{className:"flex-grow"}),f===b?(0,c.jsx)("button",{className:"block",onClick:h,children:"answer"}):(0,c.jsx)("button",{className:"block",onClick:p,children:e.isLastQuestion?"Complete Quiz":"Go to Next"}),(0,c.jsx)("div",{className:"flex-grow"})]})]})]})});var y=function(e){var t=new Audio("../assets/sounds/finish.wav");return t.volume=.1,(0,u.useEffect)((function(){t.play()}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"Congratulations!"}),(0,c.jsx)("div",{children:"You have completed the quiz!"})]})};function k(){var e=(0,u.useState)(0),t=e[0],n=e[1],s=(0,u.useState)(0),a=s[0],l=s[1],d=(0,u.useRef)(),f=(0,u.useState)([]),m=f[0],b=f[1],k=(0,u.useState)(!1),C=k[0],O=k[1];return(0,u.useEffect)((function(){return x.Dp(w.collection("problems").get()).pipe((0,h.U)((function(e){return e.docs.map((function(e){return g(g({},e.data()),{},{id:e.id})}))}))).pipe((0,p.z)(function(){var e=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map((function(e){return v.ref().child(e.audio).getDownloadURL().then((function(t){return g(g({},e),{},{audio_url:t})})).catch((function(t){return console.error("Error while getting Audio URL. ",t),e}))}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).subscribe((function(e){b(e.length>10?function(e,t){var n=new Array(t),r=e.length,s=new Array(r);if(t>r)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var i=Math.floor(Math.random()*r);n[t]=e[i in s?s[i]:i],s[i]=--r in s?s[r]:r}return n}(e,10):e),O(!0)})),function(){}}),[]),(0,c.jsxs)("div",{className:"h-screen app-container",children:[(0,c.jsxs)("nav",{className:"flex py-16 items-center",children:[(0,c.jsx)("div",{className:"flex-grow"}),(0,c.jsx)("div",{style:{height:20,background:"#F1EEEE",borderRadius:10,opacity:C?1:0,transition:".5s",width:"60%"},children:(0,c.jsx)("div",{style:{background:"#7AF16C",height:"100%",width:100*a+"%",borderRadius:10,transition:".5s"}})}),(0,c.jsx)("div",{className:"flex-grow",style:{height:20,paddingLeft:40},children:(0,c.jsx)("a",{href:"./",children:j})})]}),t<m.length?(0,c.jsx)(N,{ref:d,challenge:m[t],isLastQuestion:t===m.length-1,onCorrect:function(){l((function(e){return e+1/m.length}))},onNext:function(e){e?n((function(e){return e+1})):b((function(e){var n=e.splice(t,1);return[].concat((0,r.Z)(e),(0,r.Z)(n))}))}}):(0,c.jsx)("div",{className:"px-40 lg:px-60 xl:px-80 text-center",children:C?(0,c.jsx)(y,{}):(0,c.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50",width:"100%",maxWidth:"72px",display:"inline-block"},children:(0,c.jsx)("path",{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:(0,c.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})]})}},8617:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz_firebase",function(){return n(3615)}])}},function(e){e.O(0,[828,503,507,774,888,179],(function(){return t=8617,e(e.s=t);var t}));var t=e.O();_N_E=t}]);