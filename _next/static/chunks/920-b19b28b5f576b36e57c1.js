(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{1184:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(7839),s=t(7922),o=(t(6690),t(5913)),c=t.n(o);function a(e){var n=e.signInSuccessUrl,t=(0,i.hI)(n||""),o={signInFlow:"popup",signInSuccessUrl:n?t:void 0,signInOptions:[s.Z.auth.EmailAuthProvider.PROVIDER_ID]};return(0,r.jsx)(c(),{uiConfig:o,firebaseAuth:s.Z.auth()})}},1920:function(e,n,t){"use strict";t.d(n,{Z:function(){return he}});var r,i=t(5893),s=t(6156),o=t(7329),c=t(4699),a=t(1664),u=t(9008),l=t(3006),f=t(7294),d=t(1184),p=t(6716),h=t(2401),v=t(1751),g=t(4975),m=t(8557),_=t(7839),b={en:{hint_button:"Hint",answer_button:"Answer",next_button:"Next Question",instruction_spelling_audio:"Spell the word you heard.",instruction_mc_audio:"Select the word you heard.",instruction_mc_abbreviation:"Select the correct abbreviation.",instruction_spelling_translate:'Write "[]" in English.',instruction_mc_translate:"Translate the underlined word.",instruction_speech:'Read the word "[]".',recording_button:"Press to Speak"},jp:{hint_button:"\u30d2\u30f3\u30c8",answer_button:"\u6b21\u3078",next_button:"\u6b21\u3078",instruction_spelling_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",instruction_mc_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",instruction_mc_abbreviation:"\u6b63\u3057\u3044\u7565\u8a9e\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",instruction_spelling_translate:"\u300c[]\u300d\u3092\u82f1\u8a9e\u3067\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",instruction_mc_translate:"\u4e0b\u7dda\u4ed8\u304d\u6587\u5b57\u3092\u7ffb\u8a33\u3057\u3066\u304f\u3060\u3055\u3044",instruction_speech:"\u300c[]\u300d\u3092\u82f1\u8a9e\u3067\u8aad\u307f\u4e0a\u3052\u3066\u304f\u3060\u3055\u3044",recording_button:"\u62bc\u3057\u3066\u8a71\u3059"}};function x(e){var n=e.audio_url,t=(0,f.useMemo)((function(){return new Audio(n)}),[n]),r=(0,f.useCallback)((function(){t.play().catch((function(e){if("NotAllowedError"!==e.name)throw e;console.log("This system does not allow audio to be auto-played.")}))}),[t]);return(0,f.useEffect)((function(){r()}),[r]),(0,i.jsx)("div",{className:"question_area audio",children:n?(0,i.jsx)("div",{className:"playbutton",onClick:function(e){return r()},children:(0,i.jsx)(l.o1,{})}):(0,i.jsx)("h3",{style:{color:"red"},children:"Error: Audio not found. "})})}!function(e){e[e.NOT_ANSWERED_YET=-1]="NOT_ANSWERED_YET",e[e.ANSWER_INCORRECT=0]="ANSWER_INCORRECT",e[e.ANSWER_CORRECT=1]="ANSWER_CORRECT"}(r||(r={}));var w=t(850),j=t.n(w);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==t.return||t.return()}finally{if(c)throw s}}}}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function C(e){var n=(0,f.useRef)(),t=(0,f.useRef)(),r=(0,f.useRef)(1),s=(0,f.useCallback)((function(e){if(t.current){var n=Math.max(Math.min(r.current*e/t.current.clientWidth,1),.1);r.current!=n&&(r.current=n,t.current.style.fontSize=r.current+"em")}}),[]);return(0,f.useEffect)((function(){var e=n.current,t=new ResizeObserver((function(e){var n,t=N(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.contentBoxSize[0]?s(r.contentBoxSize[0].inlineSize):s(r.contentRect.width)}}catch(i){t.e(i)}finally{t.f()}}));return t.observe(e),function(){t.unobserve(e),t.disconnect()}}),[s]),(0,f.useEffect)((function(){s(n.current.clientWidth)}),[s,e.children]),(0,i.jsx)("button",E(E({},e),{},{children:(0,i.jsx)("span",{className:j().outterSpan,ref:n,children:(0,i.jsx)("span",{className:j().innerSpan,ref:t,children:e.children})})}))}function A(e){var n=e.options,t=e.selected,s=e.onChange,o=e.answerState;return(0,i.jsx)("div",{className:"answer_area options",children:n.map((function(e,n){return(0,i.jsx)(C,{disabled:o!==r.NOT_ANSWERED_YET&&t!==e,className:"option "+(t===e?o===r.ANSWER_CORRECT?"correct":o===r.ANSWER_INCORRECT?"incorrect":"selected":""),onClick:function(n){return s(e)},children:e},n)}))})}function O(e,n){return e===n}function R(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_mc_audio})}var T={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,s=e.onAnswerChange,o=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(R,{lang:n}),(0,i.jsx)(x,{audio_url:t.audio_url}),(0,i.jsx)(A,{options:t.options,selected:r,onChange:s,answerState:o})]})},checkAnswer:O};function Z(e){var n=e.question,t=e.primary,r=e.secondary,s=e.image_url,o=(0,f.useMemo)((function(){return t?(0,i.jsx)(_.ly,{sentence:t,inside:n}):(0,i.jsx)(i.Fragment,{})}),[t,n]),c=(0,f.useMemo)((function(){return r?(0,i.jsx)(_.ly,{sentence:r,inside:"\u3000\u3000\u3000"}):(0,i.jsx)(i.Fragment,{})}),[r]);return(0,i.jsxs)("div",{className:"question_area ".concat(r?"multilingual":""," ").concat(s?"image_container":""),children:[t?(0,i.jsx)("div",{className:"primary",children:o}):null,r?(0,i.jsx)("div",{className:"secondary",children:c}):null,s?(0,i.jsx)("img",{src:s,alt:n}):null]})}function k(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_mc_translate})}var P={UI:function(e){var n,t,r=e.lang,s=e.challenge,o=e.currentAnswer,c=e.onAnswerChange,a=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(k,{lang:r}),(0,i.jsx)(Z,{question:s.question,primary:null===(n=s.sentence)||void 0===n?void 0:n.japanese,secondary:null===(t=s.sentence)||void 0===t?void 0:t.english,image_url:s.image_url}),(0,i.jsx)(A,{options:s.options,selected:o,onChange:c,answerState:a})]})},checkAnswer:O};function q(e){var n=e.value,t=e.onChange,s=e.answerState;return(0,i.jsx)("div",{className:"answer_area input_container",children:(0,i.jsx)("input",{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:function(e){return t(e.target.value)},className:"input "+(n.length>0?s===r.ANSWER_CORRECT?"correct":s===r.ANSWER_INCORRECT?"incorrect":"answered":""),value:n})})}function W(e,n){return e.toLowerCase()===n.toLowerCase()}function M(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_spelling_audio})}var D={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,s=e.onAnswerChange,o=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(M,{lang:n}),(0,i.jsx)(x,{audio_url:t.audio_url}),(0,i.jsx)(q,{value:r,onChange:s,answerState:o})]})},checkAnswer:W};function I(e){var n=e.lang,t=e.question;return(0,i.jsx)("div",{className:"instruction",children:(0,_.A2)(b[n].instruction_spelling_translate,t)})}var U={UI:function(e){var n,t,r=e.lang,s=e.challenge,o=e.currentAnswer,c=e.onAnswerChange,a=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(I,{lang:r,question:s.question}),(0,i.jsx)(Z,{question:s.question,primary:null===(n=s.sentence)||void 0===n?void 0:n.japanese,secondary:null===(t=s.sentence)||void 0===t?void 0:t.english,image_url:s.image_url}),(0,i.jsx)(q,{value:o,onChange:c,answerState:a})]})},checkAnswer:W};function z(e){var n=e.word,t=e.audio_url,r=e.listeningToSpeech,s=e.onPlayingStateChange,o=(0,f.useState)(!1),c=o[0],a=o[1],u=(0,f.useMemo)((function(){var e=new Audio(t);return e.addEventListener("ended",(function(e){a(!1)})),e}),[t]),d=(0,f.useCallback)((function(){u.play().catch((function(e){if("NotAllowedError"!==e.name)throw e;console.log("This system does not allow audio to be auto-played.")})).then((function(){a(!0)}))}),[u]);return(0,f.useEffect)((function(){s(c)}),[c,s]),(0,f.useEffect)((function(){r&&(u.pause(),u.currentTime=0)}),[r,u]),(0,i.jsx)("div",{className:"question_area speech",children:(0,i.jsxs)("div",{className:"primary",children:[(0,i.jsx)("div",{className:"playbutton",onClick:function(e){return d()},children:(0,i.jsx)(l.o1,{})}),(0,i.jsx)("span",{children:n})]})})}var Y=t(2515),L=(0,t(2996).createSpeechlySpeechRecognition)("95d35835-5527-45aa-ba1a-0c03ad6bc160");function F(e){var n=e.lang,t=e.answer,s=e.onChange,o=e.onNext,c=e.answerState,a=e.audioPlaying,u=e.onListeningStateChange,d=(0,Y.x6)(),p=d.transcript,h=d.listening,v=d.resetTranscript,g=d.browserSupportsSpeechRecognition;(0,f.useEffect)((function(){p.split(/[^a-zA-Z0-9]+/).some((function(e){return(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase())}))&&(v(),Y.ZP.stopListening(),s(t))}),[t,s,v,p]),(0,f.useEffect)((function(){h||o()}),[o,h]);var m=(0,f.useCallback)((function(e){a||c===r.NOT_ANSWERED_YET&&(h?Y.ZP.stopListening():Y.ZP.startListening({continuous:!1}))}),[c,a,h]);return(0,f.useEffect)((function(){u(h)}),[h,u]),(0,f.useEffect)((function(){a&&Y.ZP.stopListening()}),[a]),(0,f.useEffect)((function(){c!==r.NOT_ANSWERED_YET&&Y.ZP.stopListening()}),[c]),(0,i.jsxs)("div",{className:"answer_area speech",children:[(0,i.jsxs)("button",{className:"\n          ".concat(h?"recording":""," \n          ").concat(c===r.ANSWER_CORRECT?"correct":"","\n          ").concat(c===r.ANSWER_INCORRECT?"incorrect":"","\n        "),onClick:m,disabled:!g||a,onFocus:function(e){e.target.blur()},children:[(0,i.jsx)(l.ZO,{width:"16",height:"24"}),(0,i.jsx)("span",{children:b[n].recording_button})]}),g?"":(0,i.jsx)("div",{style:{color:"red",marginTop:"1rem"},children:"This browser does not support speech. Please use Chrome or Safari with Internet coneection."})]})}function B(e){var n=e.lang,t=e.question,r=e.question_en;return(0,i.jsx)("div",{className:"instruction",children:"en"===n?(0,_.A2)(b.en.instruction_speech,r):(0,_.A2)(b.jp.instruction_speech,t)})}Y.ZP.applyPolyfill(L);var V={UI:function(e){var n=e.lang,t=e.challenge,r=e.onAnswerChange,s=e.onNext,o=e.answerState,c=(0,f.useState)(!1),a=c[0],u=c[1],l=(0,f.useState)(!1),d=l[0],p=l[1],h=(0,f.useMemo)((function(){var e=t.answer.toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}),[t.answer]);return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(B,{lang:n,question:t.question,question_en:t.answer}),(0,i.jsx)(z,{word:h,audio_url:t.audio_url,listeningToSpeech:d,onPlayingStateChange:u}),(0,i.jsx)(F,{lang:n,answer:t.answer,onNext:s,onChange:r,answerState:o,audioPlaying:a,onListeningStateChange:p})]})},checkAnswer:function(e,n){return e.toLowerCase()===n.toLowerCase()},checkAnswerUponUpdate:!0};function Q(e){var n=e.question;return(0,i.jsx)("div",{className:"question_area abbreviation",children:(0,i.jsx)("div",{className:"primary",children:n})})}function X(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_mc_abbreviation})}var $={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,s=e.onAnswerChange,o=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(X,{lang:n}),(0,i.jsx)(Q,{question:t.question}),(0,i.jsx)(A,{options:t.options,selected:r,onChange:s,answerState:o})]})},checkAnswer:O};function H(e,n){var t=e.challenge,s=(0,f.useState)(""),o=s[0],c=s[1],a=(0,f.useState)([]),u=(a[0],a[1],(0,f.useState)(r.NOT_ANSWERED_YET)),l=u[0],d=u[1],x=(0,f.useMemo)((function(){return"mc"===t.type?"translate"===(null===t||void 0===t?void 0:t.subtype)?P:"abbrv"===(null===t||void 0===t?void 0:t.subtype)?$:T:"spelling"===t.type?"translate"===(null===t||void 0===t?void 0:t.subtype)?U:D:V}),[null===t||void 0===t?void 0:t.subtype,t.type]),w=(0,_.hI)("/assets/sounds/correct_2.mp3"),j=(0,_.hI)("/assets/sounds/incorrect_2.mp3"),y=(0,_.Ye)(w,{volume:.1}),E=(0,_.Ye)(j,{volume:.1}),N=(0,f.useCallback)((function(){if(l===r.NOT_ANSWERED_YET){var n=x.checkAnswer(t.answer,o),i=n?r.ANSWER_CORRECT:r.ANSWER_INCORRECT;d(i),n?y.play():E.play(),n&&e.onCorrect()}}),[o,l,t.answer,y,E,x,e]),S=(0,f.useCallback)((function(){c(""),e.onNext(l===r.ANSWER_CORRECT),d(r.NOT_ANSWERED_YET)}),[l,e]),C=(0,f.useCallback)((function(){l===r.NOT_ANSWERED_YET?N():S()}),[l,N,S]),A=(0,f.useMemo)((function(){return new p.x}),[]);(0,f.useEffect)((function(){var e=(0,h.R)(document,"keyup").pipe((0,g.h)((function(e){return"Enter"===e.code}))),n=(0,v.T)(A,e).pipe((0,m.b)(50)).subscribe((function(e){l===r.NOT_ANSWERED_YET&&0===o.length||C()}));return function(){n.unsubscribe()}}),[o,o.length,l,A,t.answer,N,S,C]),(0,f.useEffect)((function(){x.checkAnswerUponUpdate&&l===r.NOT_ANSWERED_YET&&x.checkAnswer(t.answer,o)&&A.next()}),[o,l,A,t.answer,N,x]);var O=(0,f.useMemo)((function(){return"en"}),[]),R=(0,f.useMemo)((function(){return b[O]}),[O]);return(0,i.jsxs)(f.Fragment,{children:[(0,i.jsx)(x.UI,{lang:O,currentAnswer:o,challenge:t,onNext:function(){return A.next()},onAnswerChange:function(e){l===r.NOT_ANSWERED_YET&&c(e)},answerState:l}),(0,i.jsxs)("div",{className:"footer quizStyles",children:[(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)("div",{className:"flex-grow"}),(0,i.jsx)("button",{disabled:l===r.NOT_ANSWERED_YET&&0===o.length,onClick:function(e){return A.next()},children:R.answer_button})]}),(0,i.jsx)("div",{className:"advice ".concat(l===r.NOT_ANSWERED_YET?"":"shown"),children:(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)("div",{className:"flex-grow"}),(0,i.jsx)("button",{onClick:function(e){return A.next()},children:R.next_button})]})})]})]})}var G=["Congratulations!","Well done!"];function J(e){var n=e.totalTime,t=(0,f.useMemo)((function(){return G[(0,_.XF)(G.length)]}),[]),r=(0,_.hI)("/assets/sounds/finish.wav"),s=(0,_.Ye)(r,{volume:.1});(0,f.useEffect)((function(){s.play()}),[s]);var o=(0,f.useMemo)((function(){return!!n}),[n]),c=(0,f.useMemo)((function(){return n?Math.floor(n/60):null}),[n]),a=(0,f.useMemo)((function(){return n?n%60:null}),[n]);return(0,i.jsxs)("div",{className:"finishScreen session",children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("div",{children:"Let\u2019s keep going!"}),(0,i.jsx)("div",{children:o?(0,i.jsxs)(i.Fragment,{children:["Your best time: ",c>0?"".concat(c,"m"):""," ",a,"s"]}):(0,i.jsx)(i.Fragment,{})})]})}function K(){return(0,i.jsx)("div",{className:"px-40 lg:px-60 xl:px-80 text-center",children:(0,i.jsx)(l.Ho,{style:{width:"100%",maxWidth:"72px",display:"inline-block"}})})}var ee=t(3),ne=t(2334),te=t(5720),re=t(2303),ie=t(5196),se=t(7877),oe=t(5583),ce=t(9127),ae=t(2407),ue=t(1361),le=t(7922);t(6257);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var pe=le.Z.firestore();function he(e){var n=e.topic,t=(0,f.useState)(0),r=t[0],s=t[1],h=(0,f.useState)(0),v=h[0],m=h[1],b=(0,f.useState)(0),x=b[0],w=b[1],j=(0,f.useState)([]),y=j[0],E=j[1],N=(0,f.useState)(!1),S=N[0],C=N[1],A=(0,f.useState)(!1),O=A[0],R=A[1],T=(0,f.useMemo)((function(){return new p.x}),[]),Z=(0,_.BF)(),k=(0,f.useMemo)((function(){return new ee.t(1)}),[]),P=(0,f.useMemo)((function(){return new p.x}),[]),q=(0,f.useMemo)((function(){return new p.x}),[]),W=(0,f.useRef)(!0);(0,f.useEffect)((function(){S&&v===r&&T.next()}),[S,v,r,T]),(0,f.useEffect)((function(){var e=new p.x,t=Z.pipe((0,g.h)((function(e){return!!e}))).pipe((0,ie.P)()).pipe((0,se.z)((function(e){return le.Z.firestore().collection("users").doc(e.uid).collection("finishedProblems").doc(n.id).get()}))).pipe(ae.hs).pipe((0,oe.B)()),r=new p.x,i=r.pipe((0,ce.U)((function(e){return e.problems}))),a=(0,ne.a)([t.pipe((0,ce.U)((function(e){return e.problems}))),i]).pipe((0,ce.U)((function(n){var t=(0,c.Z)(n,2),r=t[0],i=t[1];if(!i)return[];if(!r)return ae.hi(10)(i);for(var s=(0,_.X$)(i,r),a=ae.hi(8)(s),u=ae.hi(2)(r),l=(0,_.X$)(s,a),f=(0,_.X$)(r,u),d=[].concat((0,o.Z)(a),(0,o.Z)(u));d.length<10;)if(l.length>0)d.push(l.splice(0,1)[0]);else{if(!(f.length>0))break;d.push(f.splice(0,1)[0])}return 0===l.length?(e.next(!0),e.complete()):(e.next(!1),e.complete()),d}))).pipe((0,ce.U)((function(e){return(0,_.TV)(e)}))).pipe((0,oe.B)()),u=a.pipe(ae.Zh).pipe(ae.Qg).pipe((0,ce.U)((function(e){return e.map((function(e){return e.options&&Array.isArray(e.options)?de(de({},e),{},{options:(0,_.TV)(e.options)}):e}))}))).pipe(ae.Az).pipe(ae.mF),l=new te.w0;return l.add(u.subscribe((function(e){E(e),C(!0)}))),l.add(a.subscribe((function(e){return s(e.length)}))),l.add(Z.subscribe((function(e){return R(!e)}))),l.add((0,ne.a)([r,t.pipe((0,ce.U)((function(e){return void 0===e.noMiss||null===e.noMiss||e.noMiss}))),a,Z,T]).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,5),t=(n[0],n[1],n[2],n[3]);n[4];return!!t}))).pipe((0,ie.P)()).subscribe((function(e){var n,t=(0,c.Z)(e,4),r=t[0],i=t[1],s=t[2],a=t[3];le.Z.firestore().collection("users").doc(a.uid).collection("finishedProblems").doc(r.id).set({topic:r._ref,problems:(n=le.Z.firestore.FieldValue).arrayUnion.apply(n,(0,o.Z)(s)),noMiss:i&&W.current},{merge:!0})}))),l.add((0,ne.a)([r,Z,e]).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,3);n[0],n[1];return n[2]}))).subscribe((function(e){var n=(0,c.Z)(e,2),t=n[0],r=n[1];le.Z.firestore().collection("users").doc(r.uid).set({finishedTopics:le.Z.firestore.FieldValue.arrayUnion(t._ref)},{merge:!0})}))),l.add(Z.pipe((0,se.z)((function(e){return le.Z.firestore().collection("users").doc(e.uid).get()}))).pipe(ae.hs).subscribe(k)),l.add((0,ne.a)([r,Z,k,e]).pipe((0,se.z)((function(e){var n=(0,c.Z)(e,4),t=n[0],r=n[1],i=n[2],s=n[3],a=[];return i.finishedTopics instanceof Array&&a.push.apply(a,(0,o.Z)(i.finishedTopics)),s&&!a.some((function(e){return e.isEqual(t._ref)}))&&a.push(t._ref),Promise.all(a.map((function(e){return le.Z.firestore().collection("users").doc(r.uid).collection("finishedProblems").doc(e.id).get().then((function(n){return{ref:e,noMiss:null===n.data()||n.data().noMiss}}))})))}))).subscribe(P)),l.add((0,re.Dp)(n.get()).pipe(ae.hs).subscribe(r)),l.add((0,re.Dp)(pe.collection("trophies").get()).pipe(ae._M).pipe(ue.Q).subscribe(q)),function(){l.unsubscribe()}}),[P,T,q,Z,k,n]);var M=(0,f.useRef)(null),D=(0,f.useState)(null),I=D[0],U=D[1],z=(0,f.useMemo)((function(){return new ee.t(1)}),[]);return(0,f.useEffect)((function(){S&&0===v&&(M.current=Date.now())}),[S,v]),(0,f.useEffect)((function(){var e=new te.w0;return e.add(T.subscribe((function(){if(null!=M.current){var e=(Date.now()-M.current)/1e3;U(e),z.next(e)}}))),e.add((0,ne.a)([q,z,Z,k.pipe((0,ce.U)((function(e){return e.finishedTropies}))),P]).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,1)[0];return!!n&&n.length>0}))).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,2);n[0];return!!n[1]}))).subscribe((function(e){var n,t,r=(0,c.Z)(e,5),i=r[0],s=r[1],o=r[2],a=r[3],u=r[4],l={clearTime:s,noMiss:W.current,finishedTopics:u,sessionFinish:!0,login:!!o},f=[];i.filter((function(e){return!a||a.every((function(n){return!e._ref.isEqual(n)}))})).forEach((function(e){console.log(e.check(l),e.color,e.name,e.condition),e.check(l)&&f.push(e._ref)})),le.Z.firestore().collection("users").doc(o.uid).set({finishedTropies:(n=le.Z.firestore.FieldValue).arrayUnion.apply(n,f),queuedTropyNotifications:(t=le.Z.firestore.FieldValue).arrayUnion.apply(t,f)},{merge:!0})}))),function(){e.unsubscribe()}}),[P,T,z,q,Z,k]),(0,i.jsxs)("div",{className:"app-container",children:[(0,i.jsx)(u.default,{children:(0,i.jsx)("title",{children:"Quiz"})}),(0,i.jsxs)("nav",{className:"session progressNav",children:[(0,i.jsx)("div",{style:{opacity:S?1:0},className:"progressBar",children:(0,i.jsx)("div",{style:{width:100*x+"%"},className:"progress"})}),(0,i.jsx)("div",{className:"cross",children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)(l.aM,{})})})})]}),O?(0,i.jsx)(d.Z,{}):S?v===y.length?(0,i.jsx)(J,{totalTime:I}):(0,i.jsx)(H,{challenge:y[v],isLastQuestion:v===r-1,onCorrect:function(){w((function(e){return e+1/r}))},onNext:function(e){e||(W.current=!1),e?m((function(e){return e+1})):E((function(e){var n=e.splice(v,1);return[].concat((0,o.Z)(e),(0,o.Z)(n))}))}}):(0,i.jsx)(K,{})]})}},850:function(e){e.exports={outterSpan:"AutoSizeButton_outterSpan__2tvsU",innerSpan:"AutoSizeButton_innerSpan__2Gky6"}}}]);