(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{9154:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.isNative=void 0;var e="undefined"!==typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition);n.isNative=function(t){return t===e};var i=e;n.default=i},4099:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,r=(i=e(1983))&&i.__esModule?i:{default:i},o=e(1665),s=e(9154);function a(t,n,e,i,r,o,s){try{var a=t[o](s),c=a.value}catch(u){return void e(u)}a.done?n(c):Promise.resolve(c).then(i,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var o=t.apply(n,e);function s(t){a(o,i,r,s,c,"next",t)}function c(t){a(o,i,r,s,c,"throw",t)}s(void 0)}))}}function u(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.setSpeechRecognition(n),(0,r.default)()&&(this.updateFinalTranscript=(0,o.debounce)(this.updateFinalTranscript,250,!0))}var n,e,i;return n=t,(e=[{key:"setSpeechRecognition",value:function(t){var n=!!t&&((0,s.isNative)(t)||(0,o.browserSupportsPolyfills)());n&&(this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.listening&&this.stopListening()),this.recognition=new t,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange(n)}},{key:"subscribe",value:function(t,n){this.subscribers[t]=n}},{key:"unsubscribe",value:function(t){delete this.subscribers[t]}},{key:"emitListeningChange",value:function(t){var n=this;this.listening=t,Object.keys(this.subscribers).forEach((function(e){(0,n.subscribers[e].onListeningChange)(t)}))}},{key:"emitTranscriptChange",value:function(t,n){var e=this;Object.keys(this.subscribers).forEach((function(i){(0,e.subscribers[i].onTranscriptChange)(t,n)}))}},{key:"emitClearTranscript",value:function(){var t=this;Object.keys(this.subscribers).forEach((function(n){(0,t.subscribers[n].onClearTranscript)()}))}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(t){var n=this;Object.keys(this.subscribers).forEach((function(e){var i=n.subscribers[e],r=i.onBrowserSupportsSpeechRecognitionChange,o=i.onBrowserSupportsContinuousListeningChange;r(t),o(t)}))}},{key:"disconnect",value:function(t){if(this.recognition&&this.listening)switch(t){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;case"STOP":default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(t){var n=t.results,e=t.resultIndex,i=void 0===e?n.length-1:e;this.interimTranscript="",this.finalTranscript="";for(var s=i;s<n.length;++s)n[s].isFinal&&(!(0,r.default)()||n[s][0].confidence>0)?this.updateFinalTranscript(n[s][0].transcript):this.interimTranscript=(0,o.concatTranscripts)(this.interimTranscript,n[s][0].transcript);var a=!1;""===this.interimTranscript&&""!==this.finalTranscript?(this.previousResultWasFinalOnly&&(a=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,a||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(t){this.finalTranscript=(0,o.concatTranscripts)(this.finalTranscript,t)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:function(){var t=c(regeneratorRuntime.mark((function t(){var n,e,i,r,o,s,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>0&&void 0!==a[0]?a[0]:{},e=n.continuous,i=void 0!==e&&e,r=n.language,this.recognition){t.next=3;break}return t.abrupt("return");case 3:if(o=i!==this.recognition.continuous,s=r&&r!==this.recognition.lang,!o&&!s){t.next=11;break}if(!this.listening){t.next=9;break}return t.next=9,this.stopListening();case 9:this.recognition.continuous=o?i:this.recognition.continuous,this.recognition.lang=s?r:this.recognition.lang;case 11:if(!this.listening){this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript());try{this.start()}catch(c){}this.emitListeningChange(!0)}case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"abortListening",value:function(){var t=c(regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),t.next=4,new Promise((function(t){n.onStopListening=t}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"stopListening",value:function(){var t=c(regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),t.next=4,new Promise((function(t){n.onStopListening=t}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:function(){this.recognition&&!this.listening&&(this.recognition.start(),this.listening=!0)}},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}])&&u(n.prototype,e),i&&u(n,i),t}();n.default=p},5924:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.useSpeechRecognition=void 0;var i=e(7294),r=e(1665),o=e(3697),s=e(8911),a=p(e(4099)),c=p(e(1983)),u=p(e(9154));function p(t){return t&&t.__esModule?t:{default:t}}function f(t,n,e,i,r,o,s){try{var a=t[o](s),c=a.value}catch(u){return void e(u)}a.done?n(c):Promise.resolve(c).then(i,r)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var o=t.apply(n,e);function s(t){f(o,i,r,s,a,"next",t)}function a(t){f(o,i,r,s,a,"throw",t)}s(void 0)}))}}function h(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],i=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);i=!0);}catch(c){r=!0,o=c}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return e}(t,n)||v(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){if(t){if("string"===typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,n):void 0}}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var y,b=!!u.default,T=b&&!(0,c.default)();n.useSpeechRecognition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.transcribing,e=void 0===n||n,a=t.clearTranscriptOnListen,c=void 0===a||a,u=t.commands,p=void 0===u?[]:u,f=(0,i.useState)(w.getRecognitionManager()),l=d(f,1),v=l[0],m=(0,i.useState)(b),y=d(m,2),R=y[0],S=y[1],C=(0,i.useState)(T),P=d(C,2),k=P[0],A=P[1],L=(0,i.useReducer)(s.transcriptReducer,{interimTranscript:v.interimTranscript,finalTranscript:""}),O=d(L,2),_=O[0],E=_.interimTranscript,x=_.finalTranscript,j=O[1],M=(0,i.useState)(v.listening),D=d(M,2),N=D[0],I=D[1],F=(0,i.useRef)(p);F.current=p;var z=function(){j((0,o.clearTrancript)())},W=(0,i.useCallback)((function(){v.resetTranscript(),z()}),[v]),B=function(t,n,e){var i=("object"===g(t)?t.toString():t).replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),o=(0,r.compareTwoStringsUsingDiceCoefficient)(i,n);return o>=e?{command:t,commandWithoutSpecials:i,howSimilar:o,isFuzzyMatch:!0}:null},$=function(t,n){var e=(0,r.commandToRegExp)(t).exec(n);return e?{command:t,parameters:e.slice(1)}:null},U=(0,i.useCallback)((function(t,n){F.current.forEach((function(e){var i=e.command,r=e.callback,o=e.matchInterim,s=void 0!==o&&o,a=e.isFuzzyMatch,c=void 0!==a&&a,u=e.fuzzyMatchingThreshold,p=void 0===u?.8:u,f=e.bestMatchOnly,l=void 0!==f&&f,g=!n&&s?t.trim():n.trim(),d=(Array.isArray(i)?i:[i]).map((function(t){return c?B(t,g,p):$(t,g)})).filter((function(t){return t}));if(c&&l&&d.length>=2){d.sort((function(t,n){return n.howSimilar-t.howSimilar}));var v=d[0],m=v.command,y=v.commandWithoutSpecials,b=v.howSimilar;r(y,g,b,{command:m,resetTranscript:W})}else d.forEach((function(t){if(t.isFuzzyMatch){var n=t.command,e=t.commandWithoutSpecials,i=t.howSimilar;r(e,g,i,{command:n,resetTranscript:W})}else{var o=t.command,s=t.parameters;r.apply(void 0,h(s).concat([{command:o,resetTranscript:W}]))}}))}))}),[W]),Z=(0,i.useCallback)((function(t,n){e&&j((0,o.appendTrancript)(t,n)),U(t,n)}),[U,e]),q=(0,i.useCallback)((function(){c&&z()}),[c]);(0,i.useEffect)((function(){var t=w.counter;w.counter+=1;var n={onListeningChange:I,onTranscriptChange:Z,onClearTranscript:q,onBrowserSupportsSpeechRecognitionChange:S,onBrowserSupportsContinuousListeningChange:A};return v.subscribe(t,n),function(){v.unsubscribe(t)}}),[e,c,v,Z,q]);var G=(0,r.concatTranscripts)(x,E);return{transcript:G,interimTranscript:E,finalTranscript:x,listening:N,resetTranscript:W,browserSupportsSpeechRecognition:R,browserSupportsContinuousListening:k}};var w={counter:0,applyPolyfill:function(t){y?y.setSpeechRecognition(t):y=new a.default(t);var n=!!t&&(0,r.browserSupportsPolyfills)();b=n,T=n},getRecognitionManager:function(){return y||(y=new a.default(u.default)),y},getRecognition:function(){return w.getRecognitionManager().getRecognition()},startListening:function(){var t=l(regeneratorRuntime.mark((function t(){var n,e,i,r,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},e=n.continuous,i=n.language,r=w.getRecognitionManager(),t.next=4,r.startListening({continuous:e,language:i});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),stopListening:function(){var t=l(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=w.getRecognitionManager(),t.next=3,n.stopListening();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),abortListening:function(){var t=l(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=w.getRecognitionManager(),t.next=3,n.abortListening();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),browserSupportsSpeechRecognition:function(){return b},browserSupportsContinuousListening:function(){return T}},R=w;n.default=R},3697:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appendTrancript=n.clearTrancript=void 0;var i=e(266);n.clearTrancript=function(){return{type:i.CLEAR_TRANSCRIPT}};n.appendTrancript=function(t,n){return{type:i.APPEND_TRANSCRIPT,payload:{interimTranscript:t,finalTranscript:n}}}},266:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.APPEND_TRANSCRIPT=n.CLEAR_TRANSCRIPT=void 0;n.CLEAR_TRANSCRIPT="CLEAR_TRANSCRIPT";n.APPEND_TRANSCRIPT="APPEND_TRANSCRIPT"},2515:function(t,n,e){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"x6",{enumerable:!0,get:function(){return r.useSpeechRecognition}}),n.ZP=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!==typeof t)return{default:t};var n=o();if(n&&n.has(t))return n.get(t);var e={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var a=r?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(e,s,a):e[s]=t[s]}e.default=t,n&&n.set(t,e);return e}(e(5924));function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}var s=r.default;n.ZP=s},1983:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(){return/(android)/i.test("undefined"!==typeof navigator?navigator.userAgent:"")}},8911:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.transcriptReducer=void 0;var i=e(266),r=e(1665);n.transcriptReducer=function(t,n){switch(n.type){case i.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case i.APPEND_TRANSCRIPT:return{interimTranscript:n.payload.interimTranscript,finalTranscript:(0,r.concatTranscripts)(t.finalTranscript,n.payload.finalTranscript)};default:throw new Error}}},1665:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.browserSupportsPolyfills=n.compareTwoStringsUsingDiceCoefficient=n.commandToRegExp=n.concatTranscripts=n.debounce=void 0;n.debounce=function(t,n,e){var i;return function(){var r=this,o=arguments,s=function(){i=null,e||t.apply(r,o)},a=e&&!i;clearTimeout(i),i=setTimeout(s,n),a&&t.apply(r,o)}};n.concatTranscripts=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.map((function(t){return t.trim()})).join(" ").trim()};var e=/\s*\((.*?)\)\s*/g,i=/(\(\?:[^)]+\))\?/g,r=/(\(\?)?:\w+/g,o=/\*/g,s=/[-{}[\]+?.,\\^$|#]/g;n.commandToRegExp=function(t){return t instanceof RegExp?new RegExp(t.source,"i"):(t=t.replace(s,"\\$&").replace(e,"(?:$1)?").replace(r,(function(t,n){return n?t:"([^\\s]+)"})).replace(o,"(.*?)").replace(i,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i"))};n.compareTwoStringsUsingDiceCoefficient=function(t,n){if(t=t.replace(/\s+/g,"").toLowerCase(),n=n.replace(/\s+/g,"").toLowerCase(),!t.length&&!n.length)return 1;if(!t.length||!n.length)return 0;if(t===n)return 1;if(1===t.length&&1===n.length)return 0;if(t.length<2||n.length<2)return 0;for(var e=new Map,i=0;i<t.length-1;i++){var r=t.substring(i,i+2),o=e.has(r)?e.get(r)+1:1;e.set(r,o)}for(var s=0,a=0;a<n.length-1;a++){var c=n.substring(a,a+2),u=e.has(c)?e.get(c):0;u>0&&(e.set(c,u-1),s++)}return 2*s/(t.length+n.length-2)};n.browserSupportsPolyfills=function(){return"undefined"!==typeof window&&void 0!==window.navigator&&void 0!==window.navigator.mediaDevices&&void 0!==window.navigator.mediaDevices.getUserMedia&&(void 0!==window.AudioContext||void 0!==window.webkitAudioContext)}}}]);