(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{8251:function(e,n,t){"use strict";t.d(n,{S:function(){return f}});var r=t(7922),i=(t(6257),t(7294)),s=t(6716),o=t(5720),c=t(2303),a=t(2407),u=t(1361),l=t(9127),d=r.Z.firestore();function f(){var e=(0,i.useMemo)((function(){return new s.x}),[]);return(0,i.useEffect)((function(){var n=new o.w0,t={ruby:1,diamond:2,gold:3,silver:4,bronze:5};return n.add((0,c.Dp)(d.collection("trophies").get()).pipe(a._M).pipe(u.Q).pipe((0,l.U)((function(e){return e.sort((function(e,n){return t[e.color]-t[n.color]}))}))).subscribe(e)),function(){n.unsubscribe()}}),[e]),e}},1184:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(7839),s=t(7922),o=(t(6690),t(5913)),c=t.n(o);function a(e){var n=e.signInSuccessUrl,t=(0,i.hI)(n||""),o={signInFlow:"popup",signInSuccessUrl:n?t:void 0,signInOptions:[s.Z.auth.EmailAuthProvider.PROVIDER_ID]};return(0,r.jsx)(c(),{uiConfig:o,firebaseAuth:s.Z.auth()})}},1920:function(e,n,t){"use strict";t.d(n,{Z:function(){return pe}});var r,i=t(5893),s=t(6156),o=t(7329),c=t(4699),a=t(1664),u=t(9008),l=t(3006),d=t(7294),f=t(1184),p=t(6716),h=t(2401),v=t(1751),g=t(4975),m=t(8557),_=t(7839),b={en:{hint_button:"Hint",answer_button:"Answer",next_button:"Next Question",instruction_spelling_audio:"Spell the word you heard.",instruction_mc_audio:"Select the word you heard.",instruction_mc_abbreviation:"Select the correct abbreviation.",instruction_spelling_translate:'Write "[]" in English.',instruction_mc_translate:"Translate the underlined word.",instruction_speech:'Read the word "[]".',recording_button:"Press to Speak",advice_primary:["Excellent!","Well Done!","Perfect!","Good!","Great!","Fabulous!","Marvelous!","Superb!","Amazing!","Wonderful!","Bravo!"],advice_secondary:[""]},jp:{hint_button:"\u30d2\u30f3\u30c8",answer_button:"\u6b21\u3078",next_button:"\u6b21\u3078",instruction_spelling_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",instruction_mc_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",instruction_mc_abbreviation:"\u6b63\u3057\u3044\u7565\u8a9e\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",instruction_spelling_translate:"\u300c[]\u300d\u3092\u82f1\u8a9e\u3067\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",instruction_mc_translate:"\u4e0b\u7dda\u4ed8\u304d\u6587\u5b57\u3092\u7ffb\u8a33\u3057\u3066\u304f\u3060\u3055\u3044",instruction_speech:"\u300c[]\u300d\u3092\u82f1\u8a9e\u3067\u8aad\u307f\u4e0a\u3052\u3066\u304f\u3060\u3055\u3044",recording_button:"\u62bc\u3057\u3066\u8a71\u3059",advice_primary:["\u7d20\u6674\u3089\u3057\u3044\uff01","\u3088\u304f\u3084\u3063\u305f\uff01","\u7d20\u6575\uff01","\u3059\u3054\u3044\u306d\uff01","\u3088\u304f\u3067\u304d\u305f\uff01","\u3044\u3044\u611f\u3058\uff01","\u3044\u3044\u306d\uff01","\u6b63\u89e3\uff01","\u9811\u5f35\u3063\u305f\u306d\uff01"],advice_secondary:[]}};function x(e){var n=e.audio_url,t=(0,d.useMemo)((function(){return new Audio(n)}),[n]),r=(0,d.useCallback)((function(){t.play().catch((function(e){if("NotAllowedError"!==e.name)throw e;console.log("This system does not allow audio to be auto-played.")}))}),[t]);return(0,d.useEffect)((function(){r()}),[r]),(0,i.jsx)("div",{className:"question_area audio",children:n?(0,i.jsx)("div",{className:"playbutton",onClick:function(e){return r()},children:(0,i.jsx)(l.o1,{})}):(0,i.jsx)("h3",{style:{color:"red"},children:"Error: Audio not found. "})})}!function(e){e[e.NOT_ANSWERED_YET=-1]="NOT_ANSWERED_YET",e[e.ANSWER_INCORRECT=0]="ANSWER_INCORRECT",e[e.ANSWER_CORRECT=1]="ANSWER_CORRECT"}(r||(r={}));var j=t(850),w=t.n(j);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==t.return||t.return()}finally{if(c)throw s}}}}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function C(e){var n=(0,d.useRef)(),t=(0,d.useRef)(),r=(0,d.useRef)(1),s=(0,d.useCallback)((function(e){if(t.current){var n=Math.max(Math.min(r.current*e/t.current.clientWidth,1),.1);r.current!=n&&(r.current=n,t.current.style.fontSize=r.current+"em")}}),[]);return(0,d.useEffect)((function(){var e=n.current,t=new ResizeObserver((function(e){var n,t=N(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.contentBoxSize[0]?s(r.contentBoxSize[0].inlineSize):s(r.contentRect.width)}}catch(i){t.e(i)}finally{t.f()}}));return t.observe(e),function(){t.unobserve(e),t.disconnect()}}),[s]),(0,d.useEffect)((function(){s(n.current.clientWidth)}),[s,e.children]),(0,i.jsx)("button",E(E({},e),{},{children:(0,i.jsx)("span",{className:w().outterSpan,ref:n,children:(0,i.jsx)("span",{className:w().innerSpan,ref:t,children:e.children})})}))}function A(e){var n=e.options,t=e.selected,s=e.onChange,o=e.answerState;return(0,i.jsx)("div",{className:"answer_area options",children:n.map((function(e,n){return(0,i.jsx)(C,{disabled:o!==r.NOT_ANSWERED_YET&&t!==e,className:"option "+(t===e?o===r.ANSWER_CORRECT?"correct":o===r.ANSWER_INCORRECT?"incorrect":"selected":""),onClick:function(n){return s(e)},children:e},n)}))})}function R(e,n){return e===n}function O(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_mc_audio})}var T={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,s=e.onAnswerChange,o=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(O,{lang:n}),(0,i.jsx)(x,{audio_url:t.audio_url}),(0,i.jsx)(A,{options:t.options,selected:r,onChange:s,answerState:o})]})},checkAnswer:R};function Z(e){var n=e.question,t=e.primary,r=e.secondary,s=e.image_url,o=(0,d.useMemo)((function(){return t?(0,i.jsx)(_.ly,{sentence:t,inside:n}):(0,i.jsx)(i.Fragment,{})}),[t,n]),c=(0,d.useMemo)((function(){return r?(0,i.jsx)(_.ly,{sentence:r,inside:"\u3000\u3000\u3000"}):(0,i.jsx)(i.Fragment,{})}),[r]);return(0,i.jsxs)("div",{className:"question_area ".concat(r?"multilingual":""," ").concat(s?"image_container":""),children:[t?(0,i.jsx)("div",{className:"primary",children:o}):null,r?(0,i.jsx)("div",{className:"secondary",children:c}):null,s?(0,i.jsx)("img",{src:s,alt:n}):null]})}function k(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_mc_translate})}var P={UI:function(e){var n,t,r=e.lang,s=e.challenge,o=e.currentAnswer,c=e.onAnswerChange,a=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(k,{lang:r}),(0,i.jsx)(Z,{question:s.question,primary:null===(n=s.sentence)||void 0===n?void 0:n.japanese,secondary:null===(t=s.sentence)||void 0===t?void 0:t.english,image_url:s.image_url}),(0,i.jsx)(A,{options:s.options,selected:o,onChange:c,answerState:a})]})},checkAnswer:R};function W(e){var n=e.value,t=e.onChange,s=e.answerState;return(0,i.jsx)("div",{className:"answer_area input_container",children:(0,i.jsx)("input",{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:function(e){return t(e.target.value)},className:"input "+(n.length>0?s===r.ANSWER_CORRECT?"correct":s===r.ANSWER_INCORRECT?"incorrect":"answered":""),value:n})})}function q(e,n){return e.toLowerCase()===n.toLowerCase()}function M(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_spelling_audio})}var D={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,s=e.onAnswerChange,o=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(M,{lang:n}),(0,i.jsx)(x,{audio_url:t.audio_url}),(0,i.jsx)(W,{value:r,onChange:s,answerState:o})]})},checkAnswer:q};function I(e){var n=e.lang,t=e.question;return(0,i.jsx)("div",{className:"instruction",children:(0,_.A2)(b[n].instruction_spelling_translate,t)})}var U={UI:function(e){var n,t,r=e.lang,s=e.challenge,o=e.currentAnswer,c=e.onAnswerChange,a=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(I,{lang:r,question:s.question}),(0,i.jsx)(Z,{question:s.question,primary:null===(n=s.sentence)||void 0===n?void 0:n.japanese,secondary:null===(t=s.sentence)||void 0===t?void 0:t.english,image_url:s.image_url}),(0,i.jsx)(W,{value:o,onChange:c,answerState:a})]})},checkAnswer:q};function z(e){var n=e.word,t=e.audio_url,r=e.listeningToSpeech,s=e.onPlayingStateChange,o=(0,d.useState)(!1),c=o[0],a=o[1],u=(0,d.useMemo)((function(){var e=new Audio(t);return e.addEventListener("ended",(function(e){a(!1)})),e}),[t]),f=(0,d.useCallback)((function(){u.play().catch((function(e){if("NotAllowedError"!==e.name)throw e;console.log("This system does not allow audio to be auto-played.")})).then((function(){a(!0)}))}),[u]);return(0,d.useEffect)((function(){s(c)}),[c,s]),(0,d.useEffect)((function(){r&&(u.pause(),u.currentTime=0)}),[r,u]),(0,i.jsx)("div",{className:"question_area speech",children:(0,i.jsxs)("div",{className:"primary",children:[(0,i.jsx)("div",{className:"playbutton",onClick:function(e){return f()},children:(0,i.jsx)(l.o1,{})}),(0,i.jsx)("span",{children:n})]})})}var Y=t(2515),F=(0,t(2996).createSpeechlySpeechRecognition)("95d35835-5527-45aa-ba1a-0c03ad6bc160");function L(e){var n=e.lang,t=e.answer,s=e.onChange,o=e.onNext,c=e.answerState,a=e.audioPlaying,u=e.onListeningStateChange,f=(0,Y.x6)(),p=f.transcript,h=f.listening,v=f.resetTranscript,g=f.browserSupportsSpeechRecognition;(0,d.useEffect)((function(){p.split(/[^a-zA-Z0-9]+/).some((function(e){return(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase())}))&&(v(),Y.ZP.stopListening(),s(t))}),[t,s,v,p]),(0,d.useEffect)((function(){h||o()}),[o,h]);var m=(0,d.useCallback)((function(e){a||c===r.NOT_ANSWERED_YET&&(h?Y.ZP.stopListening():Y.ZP.startListening({continuous:!1}))}),[c,a,h]);return(0,d.useEffect)((function(){u(h)}),[h,u]),(0,d.useEffect)((function(){a&&Y.ZP.stopListening()}),[a]),(0,d.useEffect)((function(){c!==r.NOT_ANSWERED_YET&&Y.ZP.stopListening()}),[c]),(0,i.jsxs)("div",{className:"answer_area speech",children:[(0,i.jsxs)("button",{className:"\n          ".concat(h?"recording":""," \n          ").concat(c===r.ANSWER_CORRECT?"correct":"","\n          ").concat(c===r.ANSWER_INCORRECT?"incorrect":"","\n        "),onClick:m,disabled:!g||a,onFocus:function(e){e.target.blur()},children:[(0,i.jsx)(l.ZO,{width:"16",height:"24"}),(0,i.jsx)("span",{children:b[n].recording_button})]}),g?"":(0,i.jsx)("div",{style:{color:"red",marginTop:"1rem"},children:"This browser does not support speech. Please use Chrome or Safari with Internet coneection."})]})}function B(e){var n=e.lang,t=e.question,r=e.question_en;return(0,i.jsx)("div",{className:"instruction",children:"en"===n?(0,_.A2)(b.en.instruction_speech,r):(0,_.A2)(b.jp.instruction_speech,t)})}Y.ZP.applyPolyfill(F);var V={UI:function(e){var n=e.lang,t=e.challenge,r=e.onAnswerChange,s=e.onNext,o=e.answerState,c=(0,d.useState)(!1),a=c[0],u=c[1],l=(0,d.useState)(!1),f=l[0],p=l[1],h=(0,d.useMemo)((function(){var e=t.answer.toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}),[t.answer]);return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(B,{lang:n,question:t.question,question_en:t.answer}),(0,i.jsx)(z,{word:h,audio_url:t.audio_url,listeningToSpeech:f,onPlayingStateChange:u}),(0,i.jsx)(L,{lang:n,answer:t.answer,onNext:s,onChange:r,answerState:o,audioPlaying:a,onListeningStateChange:p})]})},checkAnswer:function(e,n){return e.toLowerCase()===n.toLowerCase()},checkAnswerUponUpdate:!0};function X(e){var n=e.question;return(0,i.jsx)("div",{className:"question_area abbreviation",children:(0,i.jsx)("div",{className:"primary",children:n})})}function Q(e){var n=e.lang;return(0,i.jsx)("div",{className:"instruction",children:b[n].instruction_mc_abbreviation})}var $={UI:function(e){var n=e.lang,t=e.challenge,r=e.currentAnswer,s=e.onAnswerChange,o=e.answerState;return(0,i.jsxs)("div",{className:"session quizStyles question_container",children:[(0,i.jsx)(Q,{lang:n}),(0,i.jsx)(X,{question:t.question}),(0,i.jsx)(A,{options:t.options,selected:r,onChange:s,answerState:o})]})},checkAnswer:R};function G(e,n){var t=e.challenge,s=(0,d.useState)(""),o=s[0],c=s[1],a=(0,d.useState)([]),u=(a[0],a[1],(0,d.useState)(r.NOT_ANSWERED_YET)),f=u[0],x=u[1],j=(0,d.useMemo)((function(){return"mc"===t.type?"translate"===(null===t||void 0===t?void 0:t.subtype)?P:"abbrv"===(null===t||void 0===t?void 0:t.subtype)?$:T:"spelling"===t.type?"translate"===(null===t||void 0===t?void 0:t.subtype)?U:D:V}),[null===t||void 0===t?void 0:t.subtype,t.type]),w=(0,_.hI)("/assets/sounds/correct_2.mp3"),y=(0,_.hI)("/assets/sounds/incorrect_2.mp3"),E=(0,_.Ye)(w,{volume:.1}),N=(0,_.Ye)(y,{volume:.1}),S=(0,d.useCallback)((function(){if(f===r.NOT_ANSWERED_YET){var n=j.checkAnswer(t.answer,o),i=n?r.ANSWER_CORRECT:r.ANSWER_INCORRECT;x(i),n?E.play():N.play(),n&&e.onCorrect()}}),[o,f,t.answer,E,N,j,e]),C=(0,d.useCallback)((function(){c(""),e.onNext(f===r.ANSWER_CORRECT),x(r.NOT_ANSWERED_YET)}),[f,e]),A=(0,d.useCallback)((function(){f===r.NOT_ANSWERED_YET?S():C()}),[f,S,C]),R=(0,d.useMemo)((function(){return new p.x}),[]);(0,d.useEffect)((function(){var e=(0,h.R)(document,"keyup").pipe((0,g.h)((function(e){return"Enter"===e.code}))),n=(0,v.T)(R,e).pipe((0,m.b)(50)).subscribe((function(e){f===r.NOT_ANSWERED_YET&&0===o.length||A()}));return function(){n.unsubscribe()}}),[o,o.length,f,R,t.answer,S,C,A]),(0,d.useEffect)((function(){j.checkAnswerUponUpdate&&f===r.NOT_ANSWERED_YET&&j.checkAnswer(t.answer,o)&&R.next()}),[o,f,R,t.answer,S,j]);var O=e.language,Z=(0,d.useMemo)((function(){return b[O]}),[O]);return(0,i.jsxs)(d.Fragment,{children:[(0,i.jsx)(j.UI,{lang:O,currentAnswer:o,challenge:t,onNext:function(){return R.next()},onAnswerChange:function(e){f===r.NOT_ANSWERED_YET&&c(e)},answerState:f}),(0,i.jsxs)("div",{className:"footer quizStyles",children:[(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)("div",{className:"flex-grow"}),(0,i.jsx)("button",{disabled:f===r.NOT_ANSWERED_YET&&0===o.length,onClick:function(e){return R.next()},children:Z.answer_button})]}),(0,i.jsx)("div",{className:"advice ".concat(f===r.NOT_ANSWERED_YET?"":"shown"," ").concat(f===r.ANSWER_INCORRECT?"incorrect":""),children:(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)("div",{className:"indicator",children:f===r.ANSWER_CORRECT?(0,i.jsx)(l.Ye,{}):(0,i.jsx)(l.aM,{})}),(0,i.jsxs)("div",{className:"flex-grow",children:[(0,i.jsx)("div",{className:"primary",children:f===r.ANSWER_CORRECT?Z.advice_primary[(0,_.XF)(Z.advice_primary.length)]:"\u6b63\u89e3\u4f8b\uff1a"}),(0,i.jsx)("div",{className:"secondary",children:f===r.ANSWER_CORRECT?Z.advice_primary[(0,_.XF)(Z.advice_primary.length)]:t.answer})]}),(0,i.jsx)("button",{onClick:function(e){return R.next()},children:(0,i.jsx)(l.e0,{})})]})})]})]})}var H=["Congratulations!","Well done!"];function J(e){var n=e.totalTime,t=(0,d.useMemo)((function(){return H[(0,_.XF)(H.length)]}),[]),r=(0,_.hI)("/assets/sounds/finish.wav"),s=(0,_.Ye)(r,{volume:.1});(0,d.useEffect)((function(){s.play()}),[s]);var o=(0,d.useMemo)((function(){return!!n}),[n]),c=(0,d.useMemo)((function(){return n?Math.floor(n/60):null}),[n]),a=(0,d.useMemo)((function(){return n?n%60:null}),[n]);return(0,i.jsxs)("div",{className:"finishScreen session",children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("div",{children:"Let\u2019s keep going!"}),(0,i.jsx)("div",{children:o?(0,i.jsxs)(i.Fragment,{children:["Your best time: ",c>0?"".concat(c,"m"):""," ",a,"s"]}):(0,i.jsx)(i.Fragment,{})})]})}function K(){return(0,i.jsx)("div",{className:"px-40 lg:px-60 xl:px-80 text-center",children:(0,i.jsx)(l.Ho,{style:{width:"100%",maxWidth:"72px",display:"inline-block"}})})}var ee=t(3),ne=t(2334),te=t(5720),re=t(2303),ie=t(5196),se=t(7877),oe=t(5583),ce=t(9127),ae=t(2407),ue=t(7922),le=(t(6257),t(8251));function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function pe(e){var n=e.topic,t=(0,d.useState)(0),r=t[0],s=t[1],h=(0,d.useState)(0),v=h[0],m=h[1],b=(0,d.useState)(0),x=b[0],j=b[1],w=(0,d.useState)([]),y=w[0],E=w[1],N=(0,d.useState)(!1),S=N[0],C=N[1],A=(0,d.useState)(!1),R=A[0],O=A[1],T=(0,d.useMemo)((function(){return new p.x}),[]),Z=(0,_.BF)(),k=(0,d.useMemo)((function(){return new ee.t(1)}),[]),P=(0,d.useMemo)((function(){return new p.x}),[]),W=(0,le.S)(),q=(0,d.useRef)(!0);(0,d.useEffect)((function(){S&&v===r&&T.next()}),[S,v,r,T]),(0,d.useEffect)((function(){var e=new p.x,t=Z.pipe((0,g.h)((function(e){return!!e}))).pipe((0,ie.P)()).pipe((0,se.z)((function(e){return ue.Z.firestore().collection("users").doc(e.uid).collection("finishedProblems").doc(n.id).get()}))).pipe(ae.hs).pipe((0,oe.B)()),r=new p.x,i=r.pipe((0,ce.U)((function(e){return e.problems}))),a=(0,ne.a)([t.pipe((0,ce.U)((function(e){return e.problems}))),i]).pipe((0,ce.U)((function(n){var t=(0,c.Z)(n,2),r=t[0],i=t[1];if(!i)return[];if(!r)return ae.hi(10)(i);for(var s=(0,_.X$)(i,r),a=ae.hi(8)(s),u=ae.hi(2)(r),l=(0,_.X$)(s,a),d=(0,_.X$)(r,u),f=[].concat((0,o.Z)(a),(0,o.Z)(u));f.length<10;)if(l.length>0)f.push(l.splice(0,1)[0]);else{if(!(d.length>0))break;f.push(d.splice(0,1)[0])}return 0===l.length?(e.next(!0),e.complete()):(e.next(!1),e.complete()),f}))).pipe((0,ce.U)((function(e){return(0,_.TV)(e)}))).pipe((0,oe.B)()),u=a.pipe(ae.Zh).pipe(ae.Qg).pipe((0,ce.U)((function(e){return e.map((function(e){return e.options&&Array.isArray(e.options)?fe(fe({},e),{},{options:(0,_.TV)(e.options)}):e}))}))).pipe(ae.Az).pipe(ae.mF),l=new te.w0;return l.add(u.subscribe((function(e){E(e),C(!0)}))),l.add(a.subscribe((function(e){return s(e.length)}))),l.add(Z.subscribe((function(e){return O(!e)}))),l.add((0,ne.a)([r,t.pipe((0,ce.U)((function(e){return void 0===e.noMiss||null===e.noMiss||e.noMiss}))),a,Z,T]).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,5),t=(n[0],n[1],n[2],n[3]);n[4];return!!t}))).pipe((0,ie.P)()).subscribe((function(e){var n,t=(0,c.Z)(e,4),r=t[0],i=t[1],s=t[2],a=t[3];ue.Z.firestore().collection("users").doc(a.uid).collection("finishedProblems").doc(r.id).set({topic:r._ref,problems:(n=ue.Z.firestore.FieldValue).arrayUnion.apply(n,(0,o.Z)(s)),noMiss:i&&q.current},{merge:!0})}))),l.add((0,ne.a)([r,Z,e]).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,3);n[0],n[1];return n[2]}))).subscribe((function(e){var n=(0,c.Z)(e,2),t=n[0],r=n[1];ue.Z.firestore().collection("users").doc(r.uid).set({finishedTopics:ue.Z.firestore.FieldValue.arrayUnion(t._ref)},{merge:!0})}))),l.add(Z.pipe((0,se.z)((function(e){return ue.Z.firestore().collection("users").doc(e.uid).get()}))).pipe(ae.hs).subscribe(k)),l.add((0,ne.a)([r,Z,k,e]).pipe((0,se.z)((function(e){var n=(0,c.Z)(e,4),t=n[0],r=n[1],i=n[2],s=n[3],a=[];return i.finishedTopics instanceof Array&&a.push.apply(a,(0,o.Z)(i.finishedTopics)),s&&!a.some((function(e){return e.isEqual(t._ref)}))&&a.push(t._ref),Promise.all(a.map((function(e){return ue.Z.firestore().collection("users").doc(r.uid).collection("finishedProblems").doc(e.id).get().then((function(n){return{ref:e,noMiss:null===n.data()||n.data().noMiss}}))})))}))).subscribe(P)),l.add((0,re.Dp)(n.get()).pipe(ae.hs).subscribe(r)),function(){l.unsubscribe()}}),[P,T,Z,k,n]);var M=(0,d.useRef)(null),D=(0,d.useState)(null),I=D[0],U=D[1],z=(0,d.useMemo)((function(){return new ee.t(1)}),[]);return(0,d.useEffect)((function(){S&&0===v&&(M.current=Date.now())}),[S,v]),(0,d.useEffect)((function(){var e=new te.w0;return e.add(T.subscribe((function(){if(null!=M.current){var e=(Date.now()-M.current)/1e3;U(e),z.next(e)}}))),e.add((0,ne.a)([W,z,Z,k.pipe((0,ce.U)((function(e){return e.finishedTropies}))),P]).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,1)[0];return!!n&&n.length>0}))).pipe((0,g.h)((function(e){var n=(0,c.Z)(e,2);n[0];return!!n[1]}))).subscribe((function(e){var n,t,r=(0,c.Z)(e,5),i=r[0],s=r[1],o=r[2],a=r[3],u=r[4],l={clearTime:s,noMiss:q.current,finishedTopics:u,sessionFinish:!0,login:!!o},d=[];i.filter((function(e){return!a||a.every((function(n){return!e._ref.isEqual(n)}))})).forEach((function(e){console.log(e.check(l),e.color,e.name,e.condition),e.check(l)&&d.push(e._ref)})),ue.Z.firestore().collection("users").doc(o.uid).set({finishedTropies:(n=ue.Z.firestore.FieldValue).arrayUnion.apply(n,d),queuedTropyNotifications:(t=ue.Z.firestore.FieldValue).arrayUnion.apply(t,d)},{merge:!0})}))),function(){e.unsubscribe()}}),[P,T,z,W,Z,k]),(0,i.jsxs)("div",{className:"app-container",children:[(0,i.jsx)(u.default,{children:(0,i.jsx)("title",{children:"Quiz"})}),(0,i.jsxs)("nav",{className:"session progressNav",children:[(0,i.jsx)("div",{style:{opacity:S?1:0},className:"progressBar",children:(0,i.jsx)("div",{style:{width:100*x+"%"},className:"progress"})}),(0,i.jsx)("div",{className:"cross",children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)(l.aM,{})})})})]}),R?(0,i.jsx)(f.Z,{}):S?v===y.length?(0,i.jsx)(J,{totalTime:I}):(0,i.jsx)(G,{challenge:y[v],language:e.language,isLastQuestion:v===r-1,onCorrect:function(){j((function(e){return e+1/r}))},onNext:function(e){e||(q.current=!1),e?m((function(e){return e+1})):E((function(e){var n=e.splice(v,1);return[].concat((0,o.Z)(e),(0,o.Z)(n))}))}}):(0,i.jsx)(K,{})]})}},850:function(e){e.exports={outterSpan:"AutoSizeButton_outterSpan__2tvsU",innerSpan:"AutoSizeButton_innerSpan__2Gky6"}}}]);