(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{4288:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),i=t(7839),o=t(7922),s=(t(6690),t(5913)),c=t.n(s);function u(e){var n=e.signInSuccessUrl,t=(0,i.hI)(n||""),s={signInFlow:"popup",signInSuccessUrl:n?t:void 0,signInOptions:[o.Z.auth.EmailAuthProvider.PROVIDER_ID]};return(0,r.jsx)(c(),{uiConfig:s,firebaseAuth:o.Z.auth()})}},233:function(e,n,t){"use strict";t.d(n,{Z:function(){return ve}});var r,i=t(5893),o=t(6156),s=t(7329),c=t(4699),u=t(1664),a=t(9008),l=t(3006),f=t(7294),d=t(4288),p=t(6716),h=t(2401),g=t(1751),v=t(4975),m=t(7839),j={en:{hint_button:"Hint",answer_button:"Answer",instruction_spelling_audio:"Spell the word you heard.",instruction_mc_audio:"Select the word you heard.",instruction_spelling_translate:'Write "[]" in English.',instruction_mc_translate:"Translate the underlined word.",instruction_speech:'Read the word "[]".',recording_button:"Press to Speak"},jp:{hint_button:"\u30d2\u30f3\u30c8",answer_button:"\u6b21\u3078",instruction_spelling_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",instruction_mc_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",instruction_spelling_translate:"\u300c[]\u300d\u3092\u82f1\u8a9e\u3067\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",instruction_mc_translate:"\u4e0b\u7dda\u4ed8\u304d\u6587\u5b57\u3092\u7ffb\u8a33\u3057\u3066\u304f\u3060\u3055\u3044",instruction_speech:"\u300c[]\u300d\u3092\u82f1\u8a9e\u3067\u8aad\u307f\u4e0a\u3052\u3066\u304f\u3060\u3055\u3044",recording_button:"\u62bc\u3057\u3066\u8a71\u3059"}};function w(e){var n=e.audio_url,t=(0,f.useMemo)((function(){return new Audio(n)}),[n]),r=(0,f.useCallback)((function(){t.play().catch((function(e){if("NotAllowedError"!==e.name)throw e;console.log("This system does not allow audio to be auto-played.")}))}),[t]);return(0,f.useEffect)((function(){r()}),[r]),(0,i.jsx)("div",{className:"question_area audio",children:n?(0,i.jsx)("div",{className:"playbutton",onClick:function(e){return r()},children:(0,i.jsx)(l.o1,{})}):(0,i.jsx)("h3",{style:{color:"red"},children:"Error: Audio not found. "})})}!function(e){e[e.NOT_ANSWERED_YET=-1]="NOT_ANSWERED_YET",e[e.ANSWER_INCORRECT=0]="ANSWER_INCORRECT",e[e.ANSWER_CORRECT=1]="ANSWER_CORRECT"}(r||(r={}));var x=t(850),b=t.n(x);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw o}}}}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(e){var n=(0,f.useRef)(),t=(0,f.useRef)(),r=(0,f.useRef)(1),o=(0,f.useCallback)((function(e){r.current=e,t.current.style.fontSize=r.current+"em"}),[]);return(0,f.useEffect)((function(){var e=n.current,i=t.current;function s(e){var n=r.current*e/i.clientWidth;n<1?o(n):1!=r.current&&o(1)}var c=new ResizeObserver((function(e){var n,t=S(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.contentBoxSize[0]?s(r.contentBoxSize[0].inlineSize):s(r.contentRect.width)}}catch(i){t.e(i)}finally{t.f()}}));return c.observe(e),function(){c.unobserve(e),c.disconnect()}}),[o]),(0,f.useEffect)((function(){1!=r.current&&o(1)}),[e.children,o]),(0,i.jsx)("button",y(y({},e),{},{children:(0,i.jsx)("span",{className:b().outterSpan,ref:n,children:(0,i.jsx)("span",{className:b().innerSpan,ref:t,children:e.children})})}))}function C(e){var n=e.options,t=e.selected,o=e.onChange,s=e.answerState;return(0,i.jsx)("div",{className:"answer_area options",children:n.map((function(e,n){return(0,i.jsx)(E,{disabled:s!==r.NOT_ANSWERED_YET&&t!==e,className:"option "+(t===e?s===r.ANSWER_CORRECT?"correct":s===r.ANSWER_INCORRECT?"incorrect":"selected":""),onClick:function(n){return o(e)},children:e},n)}))})}function O(e,n){return e===n}function A(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:j[n].instruction_mc_audio})}var R={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,o=e.onAnswerChange,s=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(A,{lang:n}),(0,i.jsx)(w,{audio_url:t.audio_url}),(0,i.jsx)(C,{options:t.options,selected:r,onChange:o,answerState:s})]})},checkAnswer:O};function T(e){var n=e.question,t=e.primary,r=e.secondary,o=e.image_url,s=(0,f.useMemo)((function(){return t?(0,i.jsx)(m.ly,{sentence:t,inside:n}):(0,i.jsx)(i.Fragment,{})}),[t,n]),c=(0,f.useMemo)((function(){return r?(0,i.jsx)(m.ly,{sentence:r,inside:"\u3000\u3000\u3000"}):(0,i.jsx)(i.Fragment,{})}),[r]);return(0,i.jsxs)("div",{className:"question_area ".concat(r?"multilingual":""," ").concat(o?"image_container":""),children:[t?(0,i.jsx)("div",{className:"primary",children:s}):null,r?(0,i.jsx)("div",{className:"secondary",children:c}):null,o?(0,i.jsx)("img",{src:o,alt:n}):null]})}function P(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:j[n].instruction_mc_translate})}var k={UI:function(e){var n,t,r=e.lang,o=e.challenge,s=e.currentAnswer,c=e.onAnswerChange,u=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(P,{lang:r}),(0,i.jsx)(T,{question:o.question,primary:null===(n=o.sentence)||void 0===n?void 0:n.japanese,secondary:null===(t=o.sentence)||void 0===t?void 0:t.english,image_url:o.image_url}),(0,i.jsx)(C,{options:o.options,selected:s,onChange:c,answerState:u})]})},checkAnswer:O};function q(e){var n=e.value,t=e.onChange,o=e.answerState;return(0,i.jsx)("div",{className:"answer_area input_container",children:(0,i.jsx)("input",{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:function(e){return t(e.target.value)},className:"input "+(n.length>0?o===r.ANSWER_CORRECT?"correct":o===r.ANSWER_INCORRECT?"incorrect":"answered":""),value:n})})}function I(e,n){return e.toLowerCase()===n.toLowerCase()}function D(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:j[n].instruction_spelling_audio})}var z={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,o=e.onAnswerChange,s=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(D,{lang:n}),(0,i.jsx)(w,{audio_url:t.audio_url}),(0,i.jsx)(q,{value:r,onChange:o,answerState:s})]})},checkAnswer:I};function U(e){var n=e.lang,t=e.question;return(0,i.jsx)("div",{className:"instruction",children:(0,m.A2)(j[n].instruction_spelling_translate,t)})}var W={UI:function(e){var n,t,r=e.lang,o=e.challenge,s=e.currentAnswer,c=e.onAnswerChange,u=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(U,{lang:r,question:o.question}),(0,i.jsx)(T,{question:o.question,primary:null===(n=o.sentence)||void 0===n?void 0:n.japanese,secondary:null===(t=o.sentence)||void 0===t?void 0:t.english,image_url:o.image_url}),(0,i.jsx)(q,{value:s,onChange:c,answerState:u})]})},checkAnswer:I};function Z(e){var n=e.word,t=e.audio_url,r=e.listeningToSpeech,o=e.onPlayingStateChange,s=(0,f.useState)(!1),c=s[0],u=s[1],a=(0,f.useMemo)((function(){var e=new Audio(t);return e.addEventListener("ended",(function(e){u(!1)})),e}),[t]),d=(0,f.useCallback)((function(){a.play().catch((function(e){if("NotAllowedError"!==e.name)throw e;console.log("This system does not allow audio to be auto-played.")})).then((function(){u(!0)}))}),[a]);return(0,f.useEffect)((function(){o(c)}),[c,o]),(0,f.useEffect)((function(){r&&(a.pause(),a.currentTime=0)}),[r,a]),(0,i.jsx)("div",{className:"question_area speech",children:(0,i.jsxs)("div",{className:"primary",children:[(0,i.jsx)("div",{className:"playbutton",onClick:function(e){return d()},children:(0,i.jsx)(l.o1,{})}),(0,i.jsx)("span",{children:n})]})})}var L=t(2515);function M(e){var n=e.lang,t=e.answer,o=e.onChange,s=e.onNext,c=e.answerState,u=e.audioPlaying,a=e.onListeningStateChange,d=(0,L.x6)(),p=d.transcript,h=d.listening,g=d.resetTranscript,v=d.browserSupportsSpeechRecognition;(0,f.useEffect)((function(){p.split(/[^a-zA-Z0-9]+/).some((function(e){return(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase())}))&&(g(),o(t))}),[t,v,o,s,g,p]),(0,f.useEffect)((function(){h||s()}),[s,h]);var m=(0,f.useCallback)((function(e){u||(h?L.ZP.stopListening():L.ZP.startListening({continuous:!1}))}),[u,h]);return(0,f.useEffect)((function(){a(h)}),[h,a]),(0,f.useEffect)((function(){u&&L.ZP.stopListening()}),[u]),(0,i.jsxs)("div",{className:"answer_area speech",children:[(0,i.jsxs)("button",{className:"\n          ".concat(h?"recording":""," \n          ").concat(c===r.ANSWER_CORRECT?"correct":"","\n          ").concat(c===r.ANSWER_INCORRECT?"incorrect":"","\n        "),onClick:m,disabled:!v||u,onFocus:function(e){e.target.blur()},children:[(0,i.jsx)(l.ZO,{width:"16",height:"24"}),(0,i.jsx)("span",{children:j[n].recording_button})]}),v?"":(0,i.jsx)("div",{style:{color:"red",marginTop:"1rem"},children:"This browser does not support speech. Please use Chrome or Safari with Internet coneection."})]})}function Y(e){var n=e.lang,t=e.question,r=e.question_en;return(0,i.jsx)("div",{className:"instruction",children:"en"===n?(0,m.A2)(j.en.instruction_speech,r):(0,m.A2)(j.jp.instruction_speech,t)})}var B={UI:function(e){var n=e.lang,t=e.challenge,r=e.onAnswerChange,o=e.onNext,s=e.answerState,c=(0,f.useState)(!1),u=c[0],a=c[1],l=(0,f.useState)(!1),d=l[0],p=l[1],h=(0,f.useMemo)((function(){var e=t.answer.toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}),[t.answer]);return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(Y,{lang:n,question:t.question,question_en:t.answer}),(0,i.jsx)(Z,{word:h,audio_url:t.audio_url,listeningToSpeech:d,onPlayingStateChange:a}),(0,i.jsx)(M,{lang:n,answer:t.answer,onNext:o,onChange:r,answerState:s,audioPlaying:u,onListeningStateChange:p})]})},checkAnswer:function(e,n){return e.toLowerCase()===n.toLowerCase()}};function F(e,n){var t=e.challenge,o=(0,f.useState)(""),s=o[0],c=o[1],u=(0,f.useState)([]),a=(u[0],u[1],(0,f.useState)(r.NOT_ANSWERED_YET)),l=a[0],d=a[1],w=(0,f.useMemo)((function(){return"mc"===t.type?"translate"===(null===t||void 0===t?void 0:t.subtype)?k:R:"spelling"===t.type?"translate"===(null===t||void 0===t?void 0:t.subtype)?W:z:B}),[null===t||void 0===t?void 0:t.subtype,t.type]),x=(0,m.hI)("/assets/sounds/correct_2.mp3"),b=(0,m.hI)("/assets/sounds/incorrect_2.mp3"),_=(0,m.Ye)(x,{volume:.1}),y=(0,m.Ye)(b,{volume:.1}),S=(0,f.useCallback)((function(){if(l===r.NOT_ANSWERED_YET){var n=w.checkAnswer(t.answer,s),i=n?r.ANSWER_CORRECT:r.ANSWER_INCORRECT;d(i),n?_.play():y.play(),n&&e.onCorrect()}}),[s,l,t.answer,_,y,w,e]),N=(0,f.useCallback)((function(){c(""),e.onNext(l===r.ANSWER_CORRECT),d(r.NOT_ANSWERED_YET)}),[l,e]),E=(0,f.useCallback)((function(){l===r.NOT_ANSWERED_YET?S():N()}),[l,S,N]),C=(0,f.useMemo)((function(){return new p.x}),[]);(0,f.useEffect)((function(){var e=(0,h.R)(document,"keyup").pipe((0,v.h)((function(e){return"Enter"===e.code}))),n=(0,g.T)(C,e).subscribe((function(e){0!==s.length&&E()}));return function(){n.unsubscribe()}}),[s,s.length,l,C,t.answer,S,N,E]);var O=(0,f.useMemo)((function(){return"en"}),[]),A=(0,f.useMemo)((function(){return j[O]}),[O]);return(0,i.jsxs)(f.Fragment,{children:[(0,i.jsx)(w.UI,{lang:O,currentAnswer:s,challenge:t,onNext:function(){return C.next()},onAnswerChange:function(e){l===r.NOT_ANSWERED_YET&&c(e)},answerState:l}),(0,i.jsxs)("div",{className:"footer quizStyles",children:[(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)("div",{className:"flex-grow"}),(0,i.jsx)("button",{disabled:0===s.length,onClick:function(e){return C.next()},children:A.answer_button})]}),(0,i.jsx)("div",{className:"advice ".concat(l===r.NOT_ANSWERED_YET?"":"shown"),children:(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)("div",{className:"flex-grow"}),(0,i.jsx)("button",{onClick:function(e){return C.next()},children:"Next Question"})]})})]})]})}function V(e){var n=(0,m.hI)("/assets/sounds/finish.wav"),t=(0,m.Ye)(n,{volume:.1});return(0,f.useEffect)((function(){t.play()}),[t]),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h2",{children:"Congratulations!"}),(0,i.jsx)("div",{children:"You have completed the quiz!"})]})}function Q(){return(0,i.jsx)("div",{className:"px-40 lg:px-60 xl:px-80 text-center",children:(0,i.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50",width:"100%",maxWidth:"72px",display:"inline-block"},children:(0,i.jsx)("path",{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:(0,i.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})}var H=t(8346),$=t(2334),G=t(5720),J=t(2303),K=t(2890),X=t(9127),ee=t(7877),ne=t(7922);t(6550);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ie=ne.Z.storage(),oe=function(e){return re(re({},e.data()),{},{id:e.id,_ref:e.ref})},se=function(e){return e.audio?ie.ref().child(e.audio).getDownloadURL().then((function(n){return re(re({},e),{},{audio_url:n})})).catch((function(n){return console.error("Error while getting Audio URL. ",n.code),e})):e},ce=function(e){return e.image?ie.ref().child(e.image).getDownloadURL().then((function(n){return re(re({},e),{},{image_url:n})})).catch((function(n){return console.error("Error while getting Image URL. ",n.code),e})):e},ue=function(e){return function(n){return n.length>e?(0,m.$A)(n,e):n}},ae=((0,ee.z)((function(e){return e.get()})),(0,X.U)(oe)),le=(0,ee.z)((function(e){return Promise.all(e.map((function(e){return e.get()})))})),fe=(0,X.U)((function(e){return e.map(oe)})),de=((0,X.U)((function(e){return e.docs.map(oe)})),(0,ee.z)((function(e){return Promise.all(e.map(se))}))),pe=((0,ee.z)(se),(0,ee.z)((function(e){return Promise.all(e.map(ce))})));(0,ee.z)(ce),t(3759);function he(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?he(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ve(e){var n=e.topic,t=(0,f.useState)(0),r=t[0],o=t[1],h=(0,f.useState)(0),g=h[0],j=h[1],w=(0,f.useState)(0),x=w[0],b=w[1],_=(0,f.useState)([]),y=_[0],S=_[1],N=(0,f.useState)(!1),E=N[0],C=N[1],O=(0,f.useState)(!1),A=O[0],R=O[1],T=(0,f.useMemo)((function(){return new p.x}),[]),P=(0,f.useMemo)((function(){return new H.t(1)}),[]);return(0,f.useEffect)((function(){var e=(0,m.Rt)().subscribe(P);return function(){e.unsubscribe()}}),[P]),(0,f.useEffect)((function(){E&&g===r&&T.next()}),[E,g,r,T]),(0,f.useEffect)((function(){var e=P.pipe((0,v.h)((function(e){return!!e}))).pipe((0,K.P)()).pipe((0,X.U)((function(e){return ne.Z.firestore().collection("users").doc(e.uid).collection("finishedProblems").doc(n.id).get()}))).pipe((0,ee.z)((function(e){return e}))).pipe(ae).pipe((0,X.U)((function(e){return e.problems}))),t=new p.x,r=t.pipe((0,X.U)((function(e){return e.problems}))),i=(0,$.a)([e,r]).pipe((0,X.U)((function(e){var n=(0,c.Z)(e,2),t=n[0],r=n[1];if(!t)return r;var i=ue(8)(r.filter((function(e){return!t.some((function(n){return n.isEqual(e)}))}))),o=ue(2)(t);return[].concat((0,s.Z)(i),(0,s.Z)(o))}))).pipe((0,X.U)((function(e){return(0,m.TV)(e)}))),u=i.pipe(le).pipe(fe).pipe((0,X.U)((function(e){return e.map((function(e){return e.options&&Array.isArray(e.options)?ge(ge({},e),{},{options:(0,m.TV)(e.options)}):e}))}))).pipe(de).pipe(pe),a=new G.w0;return a.add(u.subscribe((function(e){S(e),C(!0)}))),a.add(i.subscribe((function(e){return o(e.length)}))),a.add(P.subscribe((function(e){return R(!e)}))),a.add((0,$.a)([t,i,P,T]).pipe((0,v.h)((function(e){var n=(0,c.Z)(e,4),t=(n[0],n[1],n[2]);n[3];return!!t}))).pipe((0,K.P)()).subscribe((function(e){var n,t=(0,c.Z)(e,4),r=t[0],i=t[1],o=t[2];t[3];ne.Z.firestore().collection("users").doc(o.uid).collection("finishedProblems").doc(r.id).set({topic:r._ref,problems:(n=ne.Z.firestore.FieldValue).arrayUnion.apply(n,(0,s.Z)(i))},{merge:!0})}))),a.add((0,J.Dp)(n.get()).pipe(ae).subscribe(t)),function(){a.unsubscribe()}}),[T,P,n]),(0,i.jsxs)("div",{className:"app-container",children:[(0,i.jsx)(a.default,{children:(0,i.jsx)("title",{children:"Quiz"})}),(0,i.jsxs)("nav",{className:"session progressNav",children:[(0,i.jsx)("div",{style:{opacity:E?1:0},className:"progressBar",children:(0,i.jsx)("div",{style:{width:100*x+"%"},className:"progress"})}),(0,i.jsx)("div",{className:"cross",children:(0,i.jsx)(u.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)(l.aM,{})})})})]}),A?(0,i.jsx)(d.Z,{}):E?g===y.length?(0,i.jsx)(V,{}):(0,i.jsx)(F,{challenge:y[g],isLastQuestion:g===r-1,onCorrect:function(){b((function(e){return e+1/r}))},onNext:function(e){e?j((function(e){return e+1})):S((function(e){var n=e.splice(g,1);return[].concat((0,s.Z)(e),(0,s.Z)(n))}))}}):(0,i.jsx)(Q,{})]})}},850:function(e){e.exports={outterSpan:"AutoSizeButton_outterSpan__2tvsU",innerSpan:"AutoSizeButton_innerSpan__2Gky6"}}}]);