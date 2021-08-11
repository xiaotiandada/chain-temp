(this["webpackJsonpchain-temp"]=this["webpackJsonpchain-temp"]||[]).push([[11],{1246:function(t,e,n){"use strict";n.r(e),n.d(e,"FrameConnector",(function(){return v})),n.d(e,"UserRejectedRequestError",(function(){return d}));var r=n(341),o=n(747),i=n.n(o),s=n(74);function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t,e,n){return(p=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function h(t){var e="function"===typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return p(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var d=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="The user rejected the request.",e}return c(e,t),e}(h(Error)),v=function(t){function e(e){var n;return 1!==e.supportedChainIds.length&&Object(s.a)(!1),(n=t.call(this,e)||this).handleNetworkChanged=n.handleNetworkChanged.bind(l(n)),n.handleChainChanged=n.handleChainChanged.bind(l(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(l(n)),n.handleClose=n.handleClose.bind(l(n)),n}c(e,t);var n=e.prototype;return n.handleNetworkChanged=function(t){this.emitUpdate({provider:this.provider,chainId:t})},n.handleChainChanged=function(t){this.emitUpdate({chainId:t})},n.handleAccountsChanged=function(t){this.emitUpdate({account:0===t.length?null:t[0]})},n.handleClose=function(t,e){this.emitDeactivate()},n.activate=function(){try{var t=this;return t.provider||(t.provider=i()("frame")),t.provider.on("networkChanged",t.handleNetworkChanged).on("chainChanged",t.handleChainChanged).on("accountsChanged",t.handleAccountsChanged).on("close",t.handleClose),Promise.resolve(t.provider.enable().then((function(t){return t[0]})).catch((function(t){throw t&&4001===t.code?new d:t}))).then((function(e){return{provider:t.provider,account:e}}))}catch(e){return Promise.reject(e)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(t){return Promise.reject(t)}},n.getChainId=function(){try{return Promise.resolve(this.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},n.getAccount=function(){try{return Promise.resolve(this.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},n.deactivate=function(){this.provider.removeListener("networkChanged",this.handleNetworkChanged).removeListener("chainChanged",this.handleChainChanged).removeListener("accountsChanged",this.handleAccountsChanged).removeListener("close",this.handleClose)},e}(r.a)},330:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},332:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},333:function(t,e,n){"use strict";var r,o="object"===typeof Reflect?Reflect:null,i=o&&"function"===typeof o.apply?o.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};r=o&&"function"===typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!==t};function c(){c.init.call(this)}t.exports=c,t.exports.once=function(t,e){return new Promise((function(n,r){function o(){void 0!==i&&t.removeListener("error",i),n([].slice.call(arguments))}var i;"error"!==e&&(i=function(n){t.removeListener(e,o),r(n)},t.once("error",i)),t.once(e,o)}))},c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var u=10;function a(t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function f(t){return void 0===t._maxListeners?c.defaultMaxListeners:t._maxListeners}function p(t,e,n,r){var o,i,s,c;if(a(n),void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),i=t._events),s=i[e]),void 0===s)s=i[e]=n,++t._eventsCount;else if("function"===typeof s?s=i[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=f(t))>0&&s.length>o&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,c=u,console&&console.warn&&console.warn(c)}return t}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=h.bind(r);return o.listener=n,r.wrapFn=o,o}function d(t,e,n){var r=t._events;if(void 0===r)return[];var o=r[e];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(o):m(o,o.length)}function v(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!==typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),c.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},c.prototype.getMaxListeners=function(){return f(this)},c.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var c=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw c.context=s,c}var u=o[t];if(void 0===u)return!1;if("function"===typeof u)i(u,this,e);else{var a=u.length,f=m(u,a);for(n=0;n<a;++n)i(f[n],this,e)}return!0},c.prototype.addListener=function(t,e){return p(this,t,e,!1)},c.prototype.on=c.prototype.addListener,c.prototype.prependListener=function(t,e){return p(this,t,e,!0)},c.prototype.once=function(t,e){return a(e),this.on(t,l(this,t,e)),this},c.prototype.prependOnceListener=function(t,e){return a(e),this.prependListener(t,l(this,t,e)),this},c.prototype.removeListener=function(t,e){var n,r,o,i,s;if(a(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===e||n[i].listener===e){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,o),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,s||e)}return this},c.prototype.off=c.prototype.removeListener,c.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},c.prototype.listeners=function(t){return d(this,t,!0)},c.prototype.rawListeners=function(t){return d(this,t,!1)},c.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},c.prototype.listenerCount=v,c.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},335:function(t,e,n){var r=n(357);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},336:function(t,e,n){var r=n(342),o=n(368),i=n(377);t.exports=function(t){var e=o();return function(){var n,o=r(t);if(e){var s=r(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return i(this,n)}}},338:function(t,e){function n(t,e,n,r,o,i,s){try{var c=t[i](s),u=c.value}catch(a){return void n(a)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var s=t.apply(e,r);function c(t){n(s,o,i,c,u,"next",t)}function u(t){n(s,o,i,c,u,"throw",t)}c(void 0)}))}}},341:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(333),o=n(90);var i=function(t){var e,n;function r(e){var n,r=(void 0===e?{}:e).supportedChainIds;return(n=t.call(this)||this).supportedChainIds=r,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.emitUpdate=function(t){this.emit(o.a.Update,t)},i.emitError=function(t){this.emit(o.a.Error,t)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},r}(r.EventEmitter)},342:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},353:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},356:function(t,e,n){var r=n(362);t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},357:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},362:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},367:function(t,e,n){var r=n(413),o=n(414),i=n(356),s=n(415);t.exports=function(t){return r(t)||o(t)||i(t)||s()}},368:function(t,e){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},377:function(t,e,n){var r=n(378),o=n(353);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},378:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},413:function(t,e,n){var r=n(362);t.exports=function(t){if(Array.isArray(t))return r(t)}},414:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},415:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},747:function(t,e,n){var r=n(748),o=n(749),i=n(752),s={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},c="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,u="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;s.ethereum&&(s.ethereum.__isProvider=!0);var a={injected:s.ethereum||n(753)(s.web3),ipc:n(754)("IPC connections are unavliable in the browser"),ws:n(755)(c),http:n(757)(u)};t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["injected","frame"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(a,r(t,i),e)}},748:function(t,e,n){var r=n(367),o=function(t){return"injected"===t?"injected":t.endsWith(".ipc")?"ipc":t.startsWith("wss://")||t.startsWith("ws://")?"ws":t.startsWith("https://")||t.startsWith("http://")?"http":""};t.exports=function(t,e){var n;return(n=[]).concat.apply(n,r([].concat(t).map((function(t){return e[t]?e[t].map((function(e){return{type:t,location:e,protocol:o(e)}})):{type:"custom",location:t,protocol:o(t)}})))).filter((function(t){return!(!t.protocol&&"injected"!==t.type)||(console.log('eth-provider | Invalid provider preset/location: "'+t.location+'"'),!1)}))}},749:function(t,e,n){var r=n(5),o=n(338),i=n(333),s=n(750),c=n(751),u=function(t){function e(e){t.status=e,t instanceof i&&t.emit("status",e)}function n(){return s.apply(this,arguments)}function s(){return(s=o(r.mark((function o(){return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.inSetup){r.next=2;break}return r.abrupt("return",setTimeout(n,1e3));case 2:return r.prev=2,r.next=5,t.send("eth_syncing");case 5:if(!r.sent){r.next=10;break}e("syncing"),setTimeout((function(){return n()}),5e3),r.next=11;break;case 10:e("connected");case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),e("disconnected");case 16:case"end":return r.stop()}}),o,null,[[2,13]])})))).apply(this,arguments)}return e("loading"),n(),t.on("connect",(function(){return n()})),t.on("close",(function(){return e("disconnected")})),t};t.exports=function(t,e,n){if(t.injected.__isProvider&&e.map((function(t){return t.type})).indexOf("injected")>-1)return delete t.injected.__isProvider,u(t.injected);var r=new s(new c(t,e,n));return r.setMaxListeners(128),u(r)}},750:function(t,e,n){var r=n(367),o=n(5),i=n(338),s=n(330),c=n(332),u=n(335),a=n(336),f=function(t){"use strict";u(n,t);var e=a(n);function n(t){var r;return s(this,n),(r=e.call(this)).connected=!1,r.nextId=0,r.promises={},r.subscriptions=[],r.connection=t,r.connection.on("connect",(function(){return r.checkConnection()})),r.connection.on("close",(function(){return r.emit("close")})),r.connection.on("payload",(function(t){var e=t.id,n=t.method,o=t.error,i=t.result;"undefined"!==typeof e?r.promises[e]&&(t.error?r.promises[e].reject(o):r.promises[e].resolve(i),delete r.promises[e]):n&&n.indexOf("_subscription")>-1&&(r.emit(t.params.subscription,t.params.result),r.emit(n,t.params),r.emit("data",t))})),r.on("newListener",(function(t,e){"networkChanged"===t?!r.attemptedNetworkSubscription&&r.connected&&r.startNetworkSubscription():"accountsChanged"===t&&!r.attemptedAccountsSubscription&&r.connected&&r.startAccountsSubscription()})),r}return c(n,[{key:"checkConnection",value:function(){var t=i(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=this,t.next=4,this._send("net_version");case 4:t.t1=t.sent,t.t0.emit.call(t.t0,"connect",t.t1),this.connected=!0,this.listenerCount("networkChanged")&&!this.attemptedNetworkSubscription&&this.startNetworkSubscription(),this.listenerCount("accountsChanged")&&!this.attemptedAccountsSubscription&&this.startAccountsSubscription(),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(0),this.connected=!1;case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"startNetworkSubscription",value:function(){var t=i(o.mark((function t(){var e,n=this;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.attemptedNetworkSubscription=!0,t.prev=1,t.next=4,this.subscribe("eth_subscribe","networkChanged");case 4:e=t.sent,this.on(e,(function(t){return n.emit("networkChanged",t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn("Unable to subscribe to networkChanged",t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"startAccountsSubscription",value:function(){var t=i(o.mark((function t(){var e,n=this;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.attemptedAccountsSubscription=!0,t.prev=1,t.next=4,this.subscribe("eth_subscribe","accountsChanged");case 4:e=t.sent,this.on(e,(function(t){return n.emit("accountsChanged",t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn("Unable to subscribe to accountsChanged",t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"enable",value:function(){var t=this;return new Promise((function(e,n){t._send("eth_accounts").then((function(r){if(r.length>0)t.accounts=r,t.coinbase=r[0],t.emit("enable"),e(r);else{var o=new Error("User Denied Full Provider");o.code=4001,n(o)}})).catch(n)}))}},{key:"_send",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t||"string"!==typeof t)return new Error("Method is not a valid string.");if(!(n instanceof Array))return new Error("Params is not a valid array.");var r={jsonrpc:"2.0",id:this.nextId++,method:t,params:n},o=new Promise((function(t,n){e.promises[r.id]={resolve:t,reject:n}}));return this.connection.send(r),o}},{key:"send",value:function(){return this._send.apply(this,arguments)}},{key:"_sendBatch",value:function(t){var e=this;return Promise.all(t.map((function(t){return e._send(t.method,t.params)})))}},{key:"subscribe",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this._send(t,[e].concat(r(o))).then((function(t){return n.subscriptions.push(t),t}))}},{key:"unsubscribe",value:function(t,e){var n=this;return this._send(t,[e]).then((function(t){if(t)return n.subscriptions=n.subscriptions.filter((function(t){return t!==e})),n.removeAllListeners(e),t}))}},{key:"sendAsync",value:function(t,e){return e&&"function"===typeof e?t?t instanceof Array?this.sendAsyncBatch(t,e):this._send(t.method,t.params).then((function(n){e(null,{id:t.id,jsonrpc:t.jsonrpc,result:n})})).catch((function(t){e(t)})):e(new Error("Invalid Payload")):e(new Error("Invalid or undefined callback provided to sendAsync"))}},{key:"sendAsyncBatch",value:function(t,e){return this._sendBatch(t).then((function(n){var r=n.map((function(e,n){return{id:t[n].id,jsonrpc:t[n].jsonrpc,result:e}}));e(null,r)})).catch((function(t){e(t)}))}},{key:"isConnected",value:function(){return this.connected}},{key:"close",value:function(){var t=this;this.connection.close(),this.connected=!1;var e=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((function(n){return t.emit(n,e)})),this.subscriptions=[]}}]),n}(n(333));t.exports=f},751:function(t,e,n){var r=n(330),o=n(332),i=n(335),s=n(336),c=n(333),u=!1,a=function(t){"use strict";i(n,t);var e=s(n);function n(t,o,i){var s;return r(this,n),(s=e.call(this)).targets=o,s.connections=t,s.connected=!1,s.status="loading",s.interval=i.interval||5e3,s.name=i.name||"default",s.inSetup=!0,s.connect(),s}return o(n,[{key:"connect",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.connection&&"connected"===this.connection.status&&e>=this.connection.index)u;else if(0===this.targets.length)u;else{var n=this.targets[e],r=n.protocol,o=n.location;this.connection=this.connections[r](o),this.connection.on("error",(function(n){return t.connected?t.listenerCount("error")?t.emit("error",n):void console.warn("eth-provider - Uncaught connection error: "+n.message):t.connectionError(e,n)})),this.connection.on("close",(function(e){t.connected=!1,t.emit("close"),t.closing||t.refresh()})),this.connection.on("connect",(function(){t.connection.target=t.targets[e],t.connection.index=e,t.targets[e].status=t.connection.status,t.connected=!0,t.inSetup=!1,t.emit("connect")})),this.connection.on("data",(function(e){return t.emit("data",e)})),this.connection.on("payload",(function(e){return t.emit("payload",e)}))}}},{key:"refresh",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;clearTimeout(this.connectTimer),this.connectTimer=setTimeout((function(){return t.connect()}),e)}},{key:"connectionError",value:function(t,e){this.targets[t].status=e,this.targets.length-1===t?(this.inSetup=!1,this.refresh()):this.connect(++t)}},{key:"close",value:function(){this.closing=!0,this.connection?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer)}},{key:"error",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}},{key:"send",value:function(t){var e=this;this.inSetup?setTimeout((function(){return e.send(t)}),100):this.connection.closed?this.error(t,"Not connected"):this.connection.send(t)}}]),n}(c);t.exports=a},752:function(t,e){t.exports={injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRopsten:["wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRinkeby:["wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraKovan:["wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b"]}},753:function(t,e,n){var r=n(330),o=n(335),i=n(336),s=function(t){"use strict";o(n,t);var e=i(n);function n(t,o){var i;return r(this,n),i=e.call(this),t?setTimeout((function(){return i.emit("error",new Error("Injected web3 provider is not currently supported"))}),0):setTimeout((function(){return i.emit("error",new Error("No injected provider found"))}),0),i}return n}(n(333));t.exports=function(t){return function(e){return new s(t,e)}}},754:function(t,e,n){var r=n(330),o=n(335),i=n(336),s=function(t){"use strict";o(n,t);var e=i(n);function n(t){var o;return r(this,n),o=e.call(this),setTimeout((function(){return o.emit("error",new Error(t))}),0),o}return n}(n(333));t.exports=function(t){return function(){return new s(t)}}},755:function(t,e,n){var r,o=n(330),i=n(332),s=n(335),c=n(336),u=n(333),a=n(756),f=function(t){"use strict";s(n,t);var e=c(n);function n(t,i,s){var c;return o(this,n),c=e.call(this),r=t,setTimeout((function(){return c.create(i,s)}),0),c}return i(n,[{key:"create",value:function(t,e){var n=this;r||this.emit("error",new Error("No WebSocket transport available"));try{this.socket=new r(t)}catch(o){return this.emit("error",o)}this.socket.addEventListener("error",(function(t){return n.emit("error",t)})),this.socket.addEventListener("open",(function(){n.emit("connect"),n.socket.addEventListener("message",(function(t){var e="string"===typeof t.data?t.data:"";a(e,(function(t,e){t||e.forEach((function(t){Array.isArray(t)?t.forEach((function(t){return n.emit("payload",t)})):n.emit("payload",t)}))}))})),n.socket.addEventListener("close",(function(){return n.onClose()}))}))}},{key:"onClose",value:function(){this.socket=null,this.closed=!0,this.emit("close"),this.removeAllListeners()}},{key:"close",value:function(){this.socket?this.socket.close():this.onClose()}},{key:"error",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}},{key:"send",value:function(t){var e=this;this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((function(n){return e.send(t)}),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(t,"Not connected")):this.socket.send(JSON.stringify(t))}}]),n}(u);t.exports=function(t){return function(e,n){return new f(t,e,n)}}},756:function(t,e){var n,r;t.exports=function(t,e){var o=[];t.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(t){var i;n&&(t=n+t);try{i=JSON.parse(t)}catch(s){return n=t,clearTimeout(r),void(r=setTimeout((function(){return e(new Error("Parse response timeout"))}),15e3))}clearTimeout(r),n=null,i&&o.push(i)})),e(null,o)}},757:function(t,e,n){var r,o=n(330),i=n(332),s=n(335),c=n(336),u=n(333),a=n(758),f=function(t){"use strict";s(n,t);var e=c(n);function n(t,i,s){var c;return o(this,n),c=e.call(this),r=t,c.connected=!1,c.subscriptions=!1,c.status="loading",c.url=i,c.pollId=a(),setTimeout((function(){return c.create()}),0),c}return i(n,[{key:"create",value:function(){var t=this;if(!r)return this.emit("error",new Error("No HTTP transport available"));this.on("error",(function(){t.connected&&t.close()})),this.init()}},{key:"init",value:function(){var t=this;this.send({jsonrpc:"2.0",method:"eth_syncing",params:[],id:1},(function(e,n){if(e)return t.emit("error",e);t.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[t.pollId,"immediate"]},(function(e,n){e||(t.subscriptions=!0,t.pollSubscriptions()),t.connected=!0,t.emit("connect")}))}))}},{key:"pollSubscriptions",value:function(){var t=this;this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},(function(e,n){if(e)return t.subscriptionTimeout=setTimeout((function(){return t.pollSubscriptions()}),1e4),t.emit("error",e);t.closed||(t.subscriptionTimeout=t.pollSubscriptions()),n&&n.map((function(t){var e;try{e=JSON.parse(t)}catch(n){e=!1}return e})).filter((function(t){return t})).forEach((function(e){return t.emit("payload",e)}))}))}},{key:"close",value:function(){this.closed=!0,this.emit("close"),clearTimeout(this.subscriptionTimeout),this.removeAllListeners()}},{key:"filterStatus",value:function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.res=t,e.message}},{key:"error",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}},{key:"send",value:function(t,e){var n=this;if(this.closed)return this.error(t,"Not connected");if("eth_subscribe"===t.method){if(!this.subscriptions)return this.error(t,"Subscriptions are not supported by this HTTP endpoint");t.pollId=this.pollId}var o=new r,i=!1,s=function(r,s){if(!i)if(o.abort(),i=!0,e)e(r,s);else{var c=t.id,u=t.jsonrpc,a=r?{id:c,jsonrpc:u,error:{message:r.message,code:r.code}}:{id:c,jsonrpc:u,result:s};n.emit("payload",a)}};o.open("POST",this.url,!0),o.setRequestHeader("Content-Type","application/json"),o.timeout=6e4,o.onerror=s,o.ontimeout=s,o.onreadystatechange=function(){if(4===o.readyState)try{var t=JSON.parse(o.responseText);s(t.error,t.result)}catch(e){s(e)}},o.send(JSON.stringify(t))}}]),n}(u);t.exports=function(t){return function(e,n){return new f(t,e,n)}}},758:function(t,e,n){var r=n(759),o=n(760);t.exports=function(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var s=(t=t||{}).random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var c=0;c<16;++c)e[i+c]=s[c];return e||o(s)}},759:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},760:function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}}}]);
//# sourceMappingURL=11.bbced029.chunk.js.map