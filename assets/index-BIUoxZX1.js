function s1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var $t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dg={exports:{}},Ha={},fg={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),a1=Symbol.for("react.portal"),l1=Symbol.for("react.fragment"),u1=Symbol.for("react.strict_mode"),c1=Symbol.for("react.profiler"),d1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),p1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),m1=Symbol.for("react.memo"),g1=Symbol.for("react.lazy"),Hf=Symbol.iterator;function x1(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,mg={};function bo(e,t,n){this.props=e,this.context=t,this.refs=mg,this.updater=n||pg}bo.prototype.isReactComponent={};bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gg(){}gg.prototype=bo.prototype;function sd(e,t,n){this.props=e,this.context=t,this.refs=mg,this.updater=n||pg}var ad=sd.prototype=new gg;ad.constructor=sd;hg(ad,bo.prototype);ad.isPureReactComponent=!0;var Wf=Array.isArray,xg=Object.prototype.hasOwnProperty,ld={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function yg(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)xg.call(t,r)&&!vg.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ai,type:e,key:i,ref:s,props:o,_owner:ld.current}}function v1(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function y1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y1(""+e.key):t.toString(36)}function ws(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ai:case a1:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+_l(s,0):r,Wf(o)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),ws(o,t,n,"",function(c){return c})):o!=null&&(ud(o)&&(o=v1(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Gf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Wf(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+_l(i,l);s+=ws(i,t,n,u,o)}else if(u=x1(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+_l(i,l++),s+=ws(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ji(e,t,n){if(e==null)return e;var r=[],o=0;return ws(e,r,"","",function(i){return t.call(n,i,o++)}),r}function w1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},bs={transition:null},b1={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:bs,ReactCurrentOwner:ld};function wg(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!ud(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=bo;Y.Fragment=l1;Y.Profiler=c1;Y.PureComponent=sd;Y.StrictMode=u1;Y.Suspense=h1;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b1;Y.act=wg;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hg({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ld.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)xg.call(t,u)&&!vg.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ai,type:e.type,key:o,ref:i,props:r,_owner:s}};Y.createContext=function(e){return e={$$typeof:f1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:d1,_context:e},e.Consumer=e};Y.createElement=yg;Y.createFactory=function(e){var t=yg.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:p1,render:e}};Y.isValidElement=ud;Y.lazy=function(e){return{$$typeof:g1,_payload:{_status:-1,_result:e},_init:w1}};Y.memo=function(e,t){return{$$typeof:m1,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};Y.unstable_act=wg;Y.useCallback=function(e,t){return Ve.current.useCallback(e,t)};Y.useContext=function(e){return Ve.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ve.current.useEffect(e,t)};Y.useId=function(){return Ve.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ve.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};Y.useRef=function(e){return Ve.current.useRef(e)};Y.useState=function(e){return Ve.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ve.current.useTransition()};Y.version="18.3.1";fg.exports=Y;var w=fg.exports;const Q=cg(w),S1=s1({__proto__:null,default:Q},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=w,E1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),k1=Object.prototype.hasOwnProperty,T1=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$1={key:!0,ref:!0,__self:!0,__source:!0};function bg(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)k1.call(t,r)&&!$1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:E1,type:e,key:i,ref:s,props:o,_owner:T1.current}}Ha.Fragment=C1;Ha.jsx=bg;Ha.jsxs=bg;dg.exports=Ha;var a=dg.exports,Sg={exports:{}},vt={},jg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var D=N.length;N.push(L);e:for(;0<D;){var K=D-1>>>1,re=N[K];if(0<o(re,L))N[K]=L,N[D]=re,D=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],D=N.pop();if(D!==L){N[0]=D;e:for(var K=0,re=N.length,sr=re>>>1;K<sr;){var At=2*(K+1)-1,kn=N[At],ot=At+1,ln=N[ot];if(0>o(kn,D))ot<re&&0>o(ln,kn)?(N[K]=ln,N[ot]=D,K=ot):(N[K]=kn,N[At]=D,K=At);else if(ot<re&&0>o(ln,D))N[K]=ln,N[ot]=D,K=ot;else break e}}return L}function o(N,L){var D=N.sortIndex-L.sortIndex;return D!==0?D:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,h=3,x=!1,m=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=N)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function y(N){if(S=!1,p(N),!m)if(n(u)!==null)m=!0,U(j);else{var L=n(c);L!==null&&ne(y,L.startTime-N)}}function j(N,L){m=!1,S&&(S=!1,g(k),k=-1),x=!0;var D=h;try{for(p(L),f=n(u);f!==null&&(!(f.expirationTime>L)||N&&!A());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var re=K(f.expirationTime<=L);L=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(u)&&r(u),p(L)}else r(u);f=n(u)}if(f!==null)var sr=!0;else{var At=n(c);At!==null&&ne(y,At.startTime-L),sr=!1}return sr}finally{f=null,h=D,x=!1}}var C=!1,T=null,k=-1,_=5,P=-1;function A(){return!(e.unstable_now()-P<_)}function F(){if(T!==null){var N=e.unstable_now();P=N;var L=!0;try{L=T(!0,N)}finally{L?R():(C=!1,T=null)}}else C=!1}var R;if(typeof v=="function")R=function(){v(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ye=ee.port2;ee.port1.onmessage=F,R=function(){ye.postMessage(null)}}else R=function(){b(F,0)};function U(N){T=N,C||(C=!0,R())}function ne(N,L){k=b(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||x||(m=!0,U(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var D=h;h=L;try{return N()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=h;h=N;try{return L()}finally{h=D}},e.unstable_scheduleCallback=function(N,L,D){var K=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?K+D:K):D=K,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,N={id:d++,callback:L,priorityLevel:N,startTime:D,expirationTime:re,sortIndex:-1},D>K?(N.sortIndex=D,t(c,N),n(u)===null&&N===n(c)&&(S?(g(k),k=-1):S=!0,ne(y,D-K))):(N.sortIndex=re,t(u,N),m||x||(m=!0,U(j))),N},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(N){var L=h;return function(){var D=h;h=L;try{return N.apply(this,arguments)}finally{h=D}}}})(Eg);jg.exports=Eg;var _1=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1=w,xt=_1;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,di={};function Ir(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(di[e]=t,e=0;e<t.length;e++)Cg.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,N1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Xf={};function R1(e){return Lu.call(Xf,e)?!0:Lu.call(qf,e)?!1:N1.test(e)?Xf[e]=!0:(qf[e]=!0,!1)}function I1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z1(e,t,n,r){if(t===null||typeof t>"u"||I1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function dd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cd,dd);Re[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cd,dd);Re[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cd,dd);Re[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function fd(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z1(t,n,o,r)&&(n=null),r||o===null?R1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=P1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Du=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function Ro(e){return e===null||typeof e!="object"?null:(e=Jf&&e[Jf]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Pl;function Bo(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Nl=!1;function Rl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bo(e):""}function L1(e){switch(e.tag){case 5:return Bo(e.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function Ou(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case Br:return"Portal";case Au:return"Profiler";case pd:return"StrictMode";case Mu:return"Suspense";case Du:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tg:return(e.displayName||"Context")+".Consumer";case kg:return(e._context.displayName||"Context")+".Provider";case hd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case md:return t=e.displayName||null,t!==null?t:Ou(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return Ou(e(t))}catch{}}return null}function A1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ou(t);case 8:return t===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _g(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M1(e){var t=_g(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=M1(e))}function Pg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_g(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fu(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ng(e,t){t=t.checked,t!=null&&fd(e,"checked",t,!1)}function Bu(e,t){Ng(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uu(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uu(e,t,n){(t!=="number"||Qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Uo=Array.isArray;function eo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Uo(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function Rg(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ig(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ig(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ki,zg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ki=Ki||document.createElement("div"),Ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D1=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(e){D1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ko[t]=Ko[e]})});function Lg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ko.hasOwnProperty(e)&&Ko[e]?(""+t).trim():t+"px"}function Ag(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Lg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var O1=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(e,t){if(t){if(O1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Gu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function gd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xu=null,to=null,no=null;function ep(e){if(e=Oi(e)){if(typeof Xu!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Ja(t),Xu(e.stateNode,e.type,t))}}function Mg(e){to?no?no.push(e):no=[e]:to=e}function Dg(){if(to){var e=to,t=no;if(no=to=null,ep(e),t)for(e=0;e<t.length;e++)ep(t[e])}}function Og(e,t){return e(t)}function Fg(){}var Il=!1;function Bg(e,t,n){if(Il)return e(t,n);Il=!0;try{return Og(e,t,n)}finally{Il=!1,(to!==null||no!==null)&&(Fg(),Dg())}}function pi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ja(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ju=!1;if(vn)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{Ju=!1}function F1(e,t,n,r,o,i,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Zo=!1,Ks=null,Zs=!1,Yu=null,B1={onError:function(e){Zo=!0,Ks=e}};function U1(e,t,n,r,o,i,s,l,u){Zo=!1,Ks=null,F1.apply(B1,arguments)}function V1(e,t,n,r,o,i,s,l,u){if(U1.apply(this,arguments),Zo){if(Zo){var c=Ks;Zo=!1,Ks=null}else throw Error(I(198));Zs||(Zs=!0,Yu=c)}}function zr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ug(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tp(e){if(zr(e)!==e)throw Error(I(188))}function H1(e){var t=e.alternate;if(!t){if(t=zr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return tp(o),e;if(i===r)return tp(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Vg(e){return e=H1(e),e!==null?Hg(e):null}function Hg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hg(e);if(t!==null)return t;e=e.sibling}return null}var Wg=xt.unstable_scheduleCallback,np=xt.unstable_cancelCallback,W1=xt.unstable_shouldYield,G1=xt.unstable_requestPaint,we=xt.unstable_now,q1=xt.unstable_getCurrentPriorityLevel,xd=xt.unstable_ImmediatePriority,Gg=xt.unstable_UserBlockingPriority,ea=xt.unstable_NormalPriority,X1=xt.unstable_LowPriority,qg=xt.unstable_IdlePriority,Wa=null,nn=null;function J1(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Wa,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:K1,Y1=Math.log,Q1=Math.LN2;function K1(e){return e>>>=0,e===0?32:31-(Y1(e)/Q1|0)|0}var Zi=64,es=4194304;function Vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Vo(l):(i&=s,i!==0&&(r=Vo(i)))}else s=n&~o,s!==0?r=Vo(s):i!==0&&(r=Vo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vt(t),o=1<<n,r|=e[n],t&=~o;return r}function Z1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ew(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Vt(i),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=Z1(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Qu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xg(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function tw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function vd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function Jg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yg,yd,Qg,Kg,Zg,Ku=!1,ts=[],Vn=null,Hn=null,Wn=null,hi=new Map,mi=new Map,Ln=[],nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function zo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Oi(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rw(e,t,n,r,o){switch(t){case"focusin":return Vn=zo(Vn,e,t,n,r,o),!0;case"dragenter":return Hn=zo(Hn,e,t,n,r,o),!0;case"mouseover":return Wn=zo(Wn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return hi.set(i,zo(hi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mi.set(i,zo(mi.get(i)||null,e,t,n,r,o)),!0}return!1}function e0(e){var t=pr(e.target);if(t!==null){var n=zr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ug(n),t!==null){e.blockedOn=t,Zg(e.priority,function(){Qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qu=r,n.target.dispatchEvent(r),qu=null}else return t=Oi(n),t!==null&&yd(t),e.blockedOn=n,!1;t.shift()}return!0}function op(e,t,n){Ss(e)&&n.delete(t)}function ow(){Ku=!1,Vn!==null&&Ss(Vn)&&(Vn=null),Hn!==null&&Ss(Hn)&&(Hn=null),Wn!==null&&Ss(Wn)&&(Wn=null),hi.forEach(op),mi.forEach(op)}function Lo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ku||(Ku=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,ow)))}function gi(e){function t(o){return Lo(o,e)}if(0<ts.length){Lo(ts[0],e);for(var n=1;n<ts.length;n++){var r=ts[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&Lo(Vn,e),Hn!==null&&Lo(Hn,e),Wn!==null&&Lo(Wn,e),hi.forEach(t),mi.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)e0(n),n.blockedOn===null&&Ln.shift()}var ro=En.ReactCurrentBatchConfig,na=!0;function iw(e,t,n,r){var o=ie,i=ro.transition;ro.transition=null;try{ie=1,wd(e,t,n,r)}finally{ie=o,ro.transition=i}}function sw(e,t,n,r){var o=ie,i=ro.transition;ro.transition=null;try{ie=4,wd(e,t,n,r)}finally{ie=o,ro.transition=i}}function wd(e,t,n,r){if(na){var o=Zu(e,t,n,r);if(o===null)Hl(e,t,r,ra,n),rp(e,r);else if(rw(o,e,t,n,r))r.stopPropagation();else if(rp(e,r),t&4&&-1<nw.indexOf(e)){for(;o!==null;){var i=Oi(o);if(i!==null&&Yg(i),i=Zu(e,t,n,r),i===null&&Hl(e,t,r,ra,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var ra=null;function Zu(e,t,n,r){if(ra=null,e=gd(r),e=pr(e),e!==null)if(t=zr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ug(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case xd:return 1;case Gg:return 4;case ea:case X1:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Mn=null,bd=null,js=null;function n0(){if(js)return js;var e,t=bd,n=t.length,r,o="value"in Mn?Mn.value:Mn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return js=o.slice(e,1<r?1-r:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ns(){return!0}function ip(){return!1}function yt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ns:ip,this.isPropagationStopped=ip,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),t}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=yt(So),Di=ge({},So,{view:0,detail:0}),aw=yt(Di),Ll,Al,Ao,Ga=ge({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(Ll=e.screenX-Ao.screenX,Al=e.screenY-Ao.screenY):Al=Ll=0,Ao=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),sp=yt(Ga),lw=ge({},Ga,{dataTransfer:0}),uw=yt(lw),cw=ge({},Di,{relatedTarget:0}),Ml=yt(cw),dw=ge({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),fw=yt(dw),pw=ge({},So,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hw=yt(pw),mw=ge({},So,{data:0}),ap=yt(mw),gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vw[e])?!!t[e]:!1}function jd(){return yw}var ww=ge({},Di,{key:function(e){if(e.key){var t=gw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bw=yt(ww),Sw=ge({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=yt(Sw),jw=ge({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),Ew=yt(jw),Cw=ge({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),kw=yt(Cw),Tw=ge({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$w=yt(Tw),_w=[9,13,27,32],Ed=vn&&"CompositionEvent"in window,ei=null;vn&&"documentMode"in document&&(ei=document.documentMode);var Pw=vn&&"TextEvent"in window&&!ei,r0=vn&&(!Ed||ei&&8<ei&&11>=ei),up=" ",cp=!1;function o0(e,t){switch(e){case"keyup":return _w.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Nw(e,t){switch(e){case"compositionend":return i0(t);case"keypress":return t.which!==32?null:(cp=!0,up);case"textInput":return e=t.data,e===up&&cp?null:e;default:return null}}function Rw(e,t){if(Vr)return e==="compositionend"||!Ed&&o0(e,t)?(e=n0(),js=bd=Mn=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return r0&&t.locale!=="ko"?null:t.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Iw[e.type]:t==="textarea"}function s0(e,t,n,r){Mg(r),t=oa(t,"onChange"),0<t.length&&(n=new Sd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ti=null,xi=null;function zw(e){x0(e,0)}function qa(e){var t=Gr(e);if(Pg(t))return e}function Lw(e,t){if(e==="change")return t}var a0=!1;if(vn){var Dl;if(vn){var Ol="oninput"in document;if(!Ol){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Ol=typeof fp.oninput=="function"}Dl=Ol}else Dl=!1;a0=Dl&&(!document.documentMode||9<document.documentMode)}function pp(){ti&&(ti.detachEvent("onpropertychange",l0),xi=ti=null)}function l0(e){if(e.propertyName==="value"&&qa(xi)){var t=[];s0(t,xi,e,gd(e)),Bg(zw,t)}}function Aw(e,t,n){e==="focusin"?(pp(),ti=t,xi=n,ti.attachEvent("onpropertychange",l0)):e==="focusout"&&pp()}function Mw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qa(xi)}function Dw(e,t){if(e==="click")return qa(t)}function Ow(e,t){if(e==="input"||e==="change")return qa(t)}function Fw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:Fw;function vi(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Lu.call(t,o)||!Gt(e[o],t[o]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,t){var n=hp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function u0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?u0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function c0(){for(var e=window,t=Qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qs(e.document)}return t}function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bw(e){var t=c0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&u0(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=mp(n,i);var s=mp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uw=vn&&"documentMode"in document&&11>=document.documentMode,Hr=null,ec=null,ni=null,tc=!1;function gp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tc||Hr==null||Hr!==Qs(r)||(r=Hr,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&vi(ni,r)||(ni=r,r=oa(ec,"onSelect"),0<r.length&&(t=new Sd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function rs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},Fl={},d0={};vn&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Xa(e){if(Fl[e])return Fl[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in d0)return Fl[e]=t[n];return e}var f0=Xa("animationend"),p0=Xa("animationiteration"),h0=Xa("animationstart"),m0=Xa("transitionend"),g0=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){g0.set(e,t),Ir(t,[e])}for(var Bl=0;Bl<xp.length;Bl++){var Ul=xp[Bl],Vw=Ul.toLowerCase(),Hw=Ul[0].toUpperCase()+Ul.slice(1);tr(Vw,"on"+Hw)}tr(f0,"onAnimationEnd");tr(p0,"onAnimationIteration");tr(h0,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(m0,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function vp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V1(r,t,void 0,e),e.currentTarget=null}function x0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;vp(o,l,c),i=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;vp(o,l,c),i=u}}}if(Zs)throw e=Yu,Zs=!1,Yu=null,e}function ue(e,t){var n=t[sc];n===void 0&&(n=t[sc]=new Set);var r=e+"__bubble";n.has(r)||(v0(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),v0(n,e,r,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function yi(e){if(!e[os]){e[os]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(Ww.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,Vl("selectionchange",!1,t))}}function v0(e,t,n,r){switch(t0(t)){case 1:var o=iw;break;case 4:o=sw;break;default:o=wd}n=o.bind(null,t,n,e),o=void 0,!Ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=pr(l),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Bg(function(){var c=i,d=gd(n),f=[];e:{var h=g0.get(e);if(h!==void 0){var x=Sd,m=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":x=bw;break;case"focusin":m="focus",x=Ml;break;case"focusout":m="blur",x=Ml;break;case"beforeblur":case"afterblur":x=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ew;break;case f0:case p0:case h0:x=fw;break;case m0:x=kw;break;case"scroll":x=aw;break;case"wheel":x=$w;break;case"copy":case"cut":case"paste":x=hw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=lp}var S=(t&4)!==0,b=!S&&e==="scroll",g=S?h!==null?h+"Capture":null:h;S=[];for(var v=c,p;v!==null;){p=v;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,g!==null&&(y=pi(v,g),y!=null&&S.push(wi(v,y,p)))),b)break;v=v.return}0<S.length&&(h=new x(h,m,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==qu&&(m=n.relatedTarget||n.fromElement)&&(pr(m)||m[yn]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(m=n.relatedTarget||n.toElement,x=c,m=m?pr(m):null,m!==null&&(b=zr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(x=null,m=c),x!==m)){if(S=sp,y="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(S=lp,y="onPointerLeave",g="onPointerEnter",v="pointer"),b=x==null?h:Gr(x),p=m==null?h:Gr(m),h=new S(y,v+"leave",x,n,d),h.target=b,h.relatedTarget=p,y=null,pr(d)===c&&(S=new S(g,v+"enter",m,n,d),S.target=p,S.relatedTarget=b,y=S),b=y,x&&m)t:{for(S=x,g=m,v=0,p=S;p;p=Ar(p))v++;for(p=0,y=g;y;y=Ar(y))p++;for(;0<v-p;)S=Ar(S),v--;for(;0<p-v;)g=Ar(g),p--;for(;v--;){if(S===g||g!==null&&S===g.alternate)break t;S=Ar(S),g=Ar(g)}S=null}else S=null;x!==null&&yp(f,h,x,S,!1),m!==null&&b!==null&&yp(f,b,m,S,!0)}}e:{if(h=c?Gr(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=Lw;else if(dp(h))if(a0)j=Ow;else{j=Mw;var C=Aw}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Dw);if(j&&(j=j(e,c))){s0(f,j,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Uu(h,"number",h.value)}switch(C=c?Gr(c):window,e){case"focusin":(dp(C)||C.contentEditable==="true")&&(Hr=C,ec=c,ni=null);break;case"focusout":ni=ec=Hr=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,gp(f,n,d);break;case"selectionchange":if(Uw)break;case"keydown":case"keyup":gp(f,n,d)}var T;if(Ed)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Vr?o0(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(r0&&n.locale!=="ko"&&(Vr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Vr&&(T=n0()):(Mn=d,bd="value"in Mn?Mn.value:Mn.textContent,Vr=!0)),C=oa(c,k),0<C.length&&(k=new ap(k,e,null,n,d),f.push({event:k,listeners:C}),T?k.data=T:(T=i0(n),T!==null&&(k.data=T)))),(T=Pw?Nw(e,n):Rw(e,n))&&(c=oa(c,"onBeforeInput"),0<c.length&&(d=new ap("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}x0(f,t)})}function wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=pi(e,n),i!=null&&r.unshift(wi(e,i,o)),i=pi(e,t),i!=null&&r.push(wi(e,i,o))),e=e.return}return r}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yp(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=pi(n,i),u!=null&&s.unshift(wi(n,u,l))):o||(u=pi(n,i),u!=null&&s.push(wi(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gw=/\r\n?/g,qw=/\u0000|\uFFFD/g;function wp(e){return(typeof e=="string"?e:""+e).replace(Gw,`
`).replace(qw,"")}function is(e,t,n){if(t=wp(t),wp(e)!==t&&n)throw Error(I(425))}function ia(){}var nc=null,rc=null;function oc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,Xw=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(e){return bp.resolve(null).then(e).catch(Yw)}:ic;function Yw(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gi(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jo=Math.random().toString(36).slice(2),tn="__reactFiber$"+jo,bi="__reactProps$"+jo,yn="__reactContainer$"+jo,sc="__reactEvents$"+jo,Qw="__reactListeners$"+jo,Kw="__reactHandles$"+jo;function pr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sp(e);e!==null;){if(n=e[tn])return n;e=Sp(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[tn]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ja(e){return e[bi]||null}var ac=[],qr=-1;function nr(e){return{current:e}}function fe(e){0>qr||(e.current=ac[qr],ac[qr]=null,qr--)}function le(e,t){qr++,ac[qr]=e.current,e.current=t}var er={},Oe=nr(er),Ze=nr(!1),Cr=er;function lo(e,t){var n=e.type.contextTypes;if(!n)return er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function sa(){fe(Ze),fe(Oe)}function jp(e,t,n){if(Oe.current!==er)throw Error(I(168));le(Oe,t),le(Ze,n)}function y0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,A1(e)||"Unknown",o));return ge({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,Cr=Oe.current,le(Oe,e),le(Ze,Ze.current),!0}function Ep(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=y0(e,t,Cr),r.__reactInternalMemoizedMergedChildContext=e,fe(Ze),fe(Oe),le(Oe,e)):fe(Ze),le(Ze,n)}var pn=null,Ya=!1,Gl=!1;function w0(e){pn===null?pn=[e]:pn.push(e)}function Zw(e){Ya=!0,w0(e)}function rr(){if(!Gl&&pn!==null){Gl=!0;var e=0,t=ie;try{var n=pn;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,Ya=!1}catch(o){throw pn!==null&&(pn=pn.slice(e+1)),Wg(xd,rr),o}finally{ie=t,Gl=!1}}return null}var Xr=[],Jr=0,la=null,ua=0,Et=[],Ct=0,kr=null,hn=1,mn="";function lr(e,t){Xr[Jr++]=ua,Xr[Jr++]=la,la=e,ua=t}function b0(e,t,n){Et[Ct++]=hn,Et[Ct++]=mn,Et[Ct++]=kr,kr=e;var r=hn;e=mn;var o=32-Vt(r)-1;r&=~(1<<o),n+=1;var i=32-Vt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,hn=1<<32-Vt(t)+o|n<<o|r,mn=i+e}else hn=1<<i|n<<o|r,mn=e}function kd(e){e.return!==null&&(lr(e,1),b0(e,1,0))}function Td(e){for(;e===la;)la=Xr[--Jr],Xr[Jr]=null,ua=Xr[--Jr],Xr[Jr]=null;for(;e===kr;)kr=Et[--Ct],Et[Ct]=null,mn=Et[--Ct],Et[Ct]=null,hn=Et[--Ct],Et[Ct]=null}var mt=null,ht=null,pe=!1,Ut=null;function S0(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,ht=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:hn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mt=e,ht=null,!0):!1;default:return!1}}function lc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uc(e){if(pe){var t=ht;if(t){var n=t;if(!Cp(e,t)){if(lc(e))throw Error(I(418));t=Gn(n.nextSibling);var r=mt;t&&Cp(e,t)?S0(r,n):(e.flags=e.flags&-4097|2,pe=!1,mt=e)}}else{if(lc(e))throw Error(I(418));e.flags=e.flags&-4097|2,pe=!1,mt=e}}}function kp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function ss(e){if(e!==mt)return!1;if(!pe)return kp(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oc(e.type,e.memoizedProps)),t&&(t=ht)){if(lc(e))throw j0(),Error(I(418));for(;t;)S0(e,t),t=Gn(t.nextSibling)}if(kp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ht=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=mt?Gn(e.stateNode.nextSibling):null;return!0}function j0(){for(var e=ht;e;)e=Gn(e.nextSibling)}function uo(){ht=mt=null,pe=!1}function $d(e){Ut===null?Ut=[e]:Ut.push(e)}var eb=En.ReactCurrentBatchConfig;function Mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tp(e){var t=e._init;return t(e._payload)}function E0(e){function t(g,v){if(e){var p=g.deletions;p===null?(g.deletions=[v],g.flags|=16):p.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function o(g,v){return g=Yn(g,v),g.index=0,g.sibling=null,g}function i(g,v,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<v?(g.flags|=2,v):p):(g.flags|=2,v)):(g.flags|=1048576,v)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,p,y){return v===null||v.tag!==6?(v=Zl(p,g.mode,y),v.return=g,v):(v=o(v,p),v.return=g,v)}function u(g,v,p,y){var j=p.type;return j===Ur?d(g,v,p.props.children,y,p.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===In&&Tp(j)===v.type)?(y=o(v,p.props),y.ref=Mo(g,v,p),y.return=g,y):(y=Ns(p.type,p.key,p.props,null,g.mode,y),y.ref=Mo(g,v,p),y.return=g,y)}function c(g,v,p,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=eu(p,g.mode,y),v.return=g,v):(v=o(v,p.children||[]),v.return=g,v)}function d(g,v,p,y,j){return v===null||v.tag!==7?(v=br(p,g.mode,y,j),v.return=g,v):(v=o(v,p),v.return=g,v)}function f(g,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Zl(""+v,g.mode,p),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yi:return p=Ns(v.type,v.key,v.props,null,g.mode,p),p.ref=Mo(g,null,v),p.return=g,p;case Br:return v=eu(v,g.mode,p),v.return=g,v;case In:var y=v._init;return f(g,y(v._payload),p)}if(Uo(v)||Ro(v))return v=br(v,g.mode,p,null),v.return=g,v;as(g,v)}return null}function h(g,v,p,y){var j=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:l(g,v,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return p.key===j?u(g,v,p,y):null;case Br:return p.key===j?c(g,v,p,y):null;case In:return j=p._init,h(g,v,j(p._payload),y)}if(Uo(p)||Ro(p))return j!==null?null:d(g,v,p,y,null);as(g,p)}return null}function x(g,v,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(p)||null,l(v,g,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yi:return g=g.get(y.key===null?p:y.key)||null,u(v,g,y,j);case Br:return g=g.get(y.key===null?p:y.key)||null,c(v,g,y,j);case In:var C=y._init;return x(g,v,p,C(y._payload),j)}if(Uo(y)||Ro(y))return g=g.get(p)||null,d(v,g,y,j,null);as(v,y)}return null}function m(g,v,p,y){for(var j=null,C=null,T=v,k=v=0,_=null;T!==null&&k<p.length;k++){T.index>k?(_=T,T=null):_=T.sibling;var P=h(g,T,p[k],y);if(P===null){T===null&&(T=_);break}e&&T&&P.alternate===null&&t(g,T),v=i(P,v,k),C===null?j=P:C.sibling=P,C=P,T=_}if(k===p.length)return n(g,T),pe&&lr(g,k),j;if(T===null){for(;k<p.length;k++)T=f(g,p[k],y),T!==null&&(v=i(T,v,k),C===null?j=T:C.sibling=T,C=T);return pe&&lr(g,k),j}for(T=r(g,T);k<p.length;k++)_=x(T,g,k,p[k],y),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?k:_.key),v=i(_,v,k),C===null?j=_:C.sibling=_,C=_);return e&&T.forEach(function(A){return t(g,A)}),pe&&lr(g,k),j}function S(g,v,p,y){var j=Ro(p);if(typeof j!="function")throw Error(I(150));if(p=j.call(p),p==null)throw Error(I(151));for(var C=j=null,T=v,k=v=0,_=null,P=p.next();T!==null&&!P.done;k++,P=p.next()){T.index>k?(_=T,T=null):_=T.sibling;var A=h(g,T,P.value,y);if(A===null){T===null&&(T=_);break}e&&T&&A.alternate===null&&t(g,T),v=i(A,v,k),C===null?j=A:C.sibling=A,C=A,T=_}if(P.done)return n(g,T),pe&&lr(g,k),j;if(T===null){for(;!P.done;k++,P=p.next())P=f(g,P.value,y),P!==null&&(v=i(P,v,k),C===null?j=P:C.sibling=P,C=P);return pe&&lr(g,k),j}for(T=r(g,T);!P.done;k++,P=p.next())P=x(T,g,k,P.value,y),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?k:P.key),v=i(P,v,k),C===null?j=P:C.sibling=P,C=P);return e&&T.forEach(function(F){return t(g,F)}),pe&&lr(g,k),j}function b(g,v,p,y){if(typeof p=="object"&&p!==null&&p.type===Ur&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:e:{for(var j=p.key,C=v;C!==null;){if(C.key===j){if(j=p.type,j===Ur){if(C.tag===7){n(g,C.sibling),v=o(C,p.props.children),v.return=g,g=v;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===In&&Tp(j)===C.type){n(g,C.sibling),v=o(C,p.props),v.ref=Mo(g,C,p),v.return=g,g=v;break e}n(g,C);break}else t(g,C);C=C.sibling}p.type===Ur?(v=br(p.props.children,g.mode,y,p.key),v.return=g,g=v):(y=Ns(p.type,p.key,p.props,null,g.mode,y),y.ref=Mo(g,v,p),y.return=g,g=y)}return s(g);case Br:e:{for(C=p.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(g,v.sibling),v=o(v,p.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=eu(p,g.mode,y),v.return=g,g=v}return s(g);case In:return C=p._init,b(g,v,C(p._payload),y)}if(Uo(p))return m(g,v,p,y);if(Ro(p))return S(g,v,p,y);as(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(g,v.sibling),v=o(v,p),v.return=g,g=v):(n(g,v),v=Zl(p,g.mode,y),v.return=g,g=v),s(g)):n(g,v)}return b}var co=E0(!0),C0=E0(!1),ca=nr(null),da=null,Yr=null,_d=null;function Pd(){_d=Yr=da=null}function Nd(e){var t=ca.current;fe(ca),e._currentValue=t}function cc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oo(e,t){da=e,_d=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(_d!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(da===null)throw Error(I(308));Yr=e,da.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var hr=null;function Rd(e){hr===null?hr=[e]:hr.push(e)}function k0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Rd(t)):(n.next=o.next,o.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function Id(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,wn(e,n)}return o=r.interleaved,o===null?(t.next=t,Rd(r)):(t.next=o.next,o.next=t),r.interleaved=t,wn(e,n)}function Cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vd(e,n)}}function $p(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fa(e,t,n,r){var o=e.updateQueue;zn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;s=0,d=c=u=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,S=l;switch(h=t,x=n,S.tag){case 1:if(m=S.payload,typeof m=="function"){f=m.call(x,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,h=typeof m=="function"?m.call(x,f,h):m,h==null)break e;f=ge({},f,h);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=x,u=f):d=d.next=x,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);$r|=s,e.lanes=s,e.memoizedState=f}}function _p(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var Fi={},rn=nr(Fi),Si=nr(Fi),ji=nr(Fi);function mr(e){if(e===Fi)throw Error(I(174));return e}function zd(e,t){switch(le(ji,t),le(Si,e),le(rn,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hu(t,e)}fe(rn),le(rn,t)}function fo(){fe(rn),fe(Si),fe(ji)}function $0(e){mr(ji.current);var t=mr(rn.current),n=Hu(t,e.type);t!==n&&(le(Si,e),le(rn,n))}function Ld(e){Si.current===e&&(fe(rn),fe(Si))}var he=nr(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Ad(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var ks=En.ReactCurrentDispatcher,Xl=En.ReactCurrentBatchConfig,Tr=0,me=null,Ee=null,ke=null,ha=!1,ri=!1,Ei=0,tb=0;function Le(){throw Error(I(321))}function Md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function Dd(e,t,n,r,o,i){if(Tr=i,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?ib:sb,e=n(r,o),ri){i=0;do{if(ri=!1,Ei=0,25<=i)throw Error(I(301));i+=1,ke=Ee=null,t.updateQueue=null,ks.current=ab,e=n(r,o)}while(ri)}if(ks.current=ma,t=Ee!==null&&Ee.next!==null,Tr=0,ke=Ee=me=null,ha=!1,t)throw Error(I(300));return e}function Od(){var e=Ei!==0;return Ei=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?me.memoizedState=ke=e:ke=ke.next=e,ke}function Pt(){if(Ee===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ke===null?me.memoizedState:ke.next;if(t!==null)ke=t,Ee=e;else{if(e===null)throw Error(I(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ke===null?me.memoizedState=ke=e:ke=ke.next=e}return ke}function Ci(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,u=null,c=i;do{var d=c.lane;if((Tr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,s=r):u=u.next=f,me.lanes|=d,$r|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=l,Gt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,me.lanes|=i,$r|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Gt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _0(){}function P0(e,t){var n=me,r=Pt(),o=t(),i=!Gt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,Fd(I0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,ki(9,R0.bind(null,n,r,o,t),void 0,null),$e===null)throw Error(I(349));Tr&30||N0(n,t,o)}return o}function N0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function R0(e,t,n,r){t.value=n,t.getSnapshot=r,z0(t)&&L0(e)}function I0(e,t,n){return n(function(){z0(t)&&L0(e)})}function z0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function L0(e){var t=wn(e,1);t!==null&&Ht(t,e,1,-1)}function Pp(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=ob.bind(null,me,e),[t.memoizedState,e]}function ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function A0(){return Pt().memoizedState}function Ts(e,t,n,r){var o=Zt();me.flags|=e,o.memoizedState=ki(1|t,n,void 0,r===void 0?null:r)}function Qa(e,t,n,r){var o=Pt();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var s=Ee.memoizedState;if(i=s.destroy,r!==null&&Md(r,s.deps)){o.memoizedState=ki(t,n,i,r);return}}me.flags|=e,o.memoizedState=ki(1|t,n,i,r)}function Np(e,t){return Ts(8390656,8,e,t)}function Fd(e,t){return Qa(2048,8,e,t)}function M0(e,t){return Qa(4,2,e,t)}function D0(e,t){return Qa(4,4,e,t)}function O0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function F0(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4,4,O0.bind(null,t,e),n)}function Bd(){}function B0(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Md(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function U0(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Md(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function V0(e,t,n){return Tr&21?(Gt(n,t)||(n=Xg(),me.lanes|=n,$r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function nb(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{ie=n,Xl.transition=r}}function H0(){return Pt().memoizedState}function rb(e,t,n){var r=Jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W0(e))G0(t,n);else if(n=k0(e,t,n,r),n!==null){var o=Ue();Ht(n,e,r,o),q0(n,t,r)}}function ob(e,t,n){var r=Jn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(e))G0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Gt(l,s)){var u=t.interleaved;u===null?(o.next=o,Rd(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=k0(e,t,o,r),n!==null&&(o=Ue(),Ht(n,e,r,o),q0(n,t,r))}}function W0(e){var t=e.alternate;return e===me||t!==null&&t===me}function G0(e,t){ri=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function q0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vd(e,n)}}var ma={readContext:_t,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},ib={readContext:_t,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ts(4194308,4,O0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ts(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rb.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:Pp,useDebugValue:Bd,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=Pp(!1),t=e[0];return e=nb.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,o=Zt();if(pe){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),$e===null)throw Error(I(349));Tr&30||N0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Np(I0.bind(null,r,i,e),[e]),r.flags|=2048,ki(9,R0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Zt(),t=$e.identifierPrefix;if(pe){var n=mn,r=hn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sb={readContext:_t,useCallback:B0,useContext:_t,useEffect:Fd,useImperativeHandle:F0,useInsertionEffect:M0,useLayoutEffect:D0,useMemo:U0,useReducer:Jl,useRef:A0,useState:function(){return Jl(Ci)},useDebugValue:Bd,useDeferredValue:function(e){var t=Pt();return V0(t,Ee.memoizedState,e)},useTransition:function(){var e=Jl(Ci)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:_0,useSyncExternalStore:P0,useId:H0,unstable_isNewReconciler:!1},ab={readContext:_t,useCallback:B0,useContext:_t,useEffect:Fd,useImperativeHandle:F0,useInsertionEffect:M0,useLayoutEffect:D0,useMemo:U0,useReducer:Yl,useRef:A0,useState:function(){return Yl(Ci)},useDebugValue:Bd,useDeferredValue:function(e){var t=Pt();return Ee===null?t.memoizedState=e:V0(t,Ee.memoizedState,e)},useTransition:function(){var e=Yl(Ci)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:_0,useSyncExternalStore:P0,useId:H0,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ka={isMounted:function(e){return(e=e._reactInternals)?zr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=Jn(e),i=xn(r,o);i.payload=t,n!=null&&(i.callback=n),t=qn(e,i,o),t!==null&&(Ht(t,e,o,r),Cs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=Jn(e),i=xn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qn(e,i,o),t!==null&&(Ht(t,e,o,r),Cs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Jn(e),o=xn(n,r);o.tag=2,t!=null&&(o.callback=t),t=qn(e,o,r),t!==null&&(Ht(t,e,r,n),Cs(t,e,r))}};function Rp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!vi(n,r)||!vi(o,i):!0}function X0(e,t,n){var r=!1,o=er,i=t.contextType;return typeof i=="object"&&i!==null?i=_t(i):(o=et(t)?Cr:Oe.current,r=t.contextTypes,i=(r=r!=null)?lo(e,o):er),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ip(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function fc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Id(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=_t(i):(i=et(t)?Cr:Oe.current,o.context=lo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(dc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ka.enqueueReplaceState(o,o.state,null),fa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function po(e,t){try{var n="",r=t;do n+=L1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lb=typeof WeakMap=="function"?WeakMap:Map;function J0(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xa||(xa=!0,jc=r),pc(e,t)},n}function Y0(e,t,n){n=xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){pc(e,t),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Sb.bind(null,e,t,n),t.then(e,e))}function Lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ap(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,qn(n,t,1))),n.lanes|=1),e)}var ub=En.ReactCurrentOwner,Ke=!1;function Fe(e,t,n,r){t.child=e===null?C0(t,null,n,r):co(t,e.child,n,r)}function Mp(e,t,n,r,o){n=n.render;var i=t.ref;return oo(t,o),r=Dd(e,t,n,r,i,o),n=Od(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bn(e,t,o)):(pe&&n&&kd(t),t.flags|=1,Fe(e,t,r,o),t.child)}function Dp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Jd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Q0(e,t,i,r,o)):(e=Ns(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(s,r)&&e.ref===t.ref)return bn(e,t,o)}return t.flags|=1,e=Yn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Q0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vi(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,bn(e,t,o)}return hc(e,t,n,r,o)}function K0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Kr,lt),lt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Kr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,le(Kr,lt),lt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,le(Kr,lt),lt|=r;return Fe(e,t,o,n),t.child}function Z0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hc(e,t,n,r,o){var i=et(n)?Cr:Oe.current;return i=lo(t,i),oo(t,o),n=Dd(e,t,n,r,i,o),r=Od(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bn(e,t,o)):(pe&&r&&kd(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Op(e,t,n,r,o){if(et(n)){var i=!0;aa(t)}else i=!1;if(oo(t,o),t.stateNode===null)$s(e,t),X0(t,n,r),fc(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=et(n)?Cr:Oe.current,c=lo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ip(t,s,r,c),zn=!1;var h=t.memoizedState;s.state=h,fa(t,r,s,o),u=t.memoizedState,l!==r||h!==u||Ze.current||zn?(typeof d=="function"&&(dc(t,n,d,r),u=t.memoizedState),(l=zn||Rp(t,n,l,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,T0(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ot(t.type,l),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=_t(u):(u=et(n)?Cr:Oe.current,u=lo(t,u));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==u)&&Ip(t,s,r,u),zn=!1,h=t.memoizedState,s.state=h,fa(t,r,s,o);var m=t.memoizedState;l!==f||h!==m||Ze.current||zn?(typeof x=="function"&&(dc(t,n,x,r),m=t.memoizedState),(c=zn||Rp(t,n,c,r,h,m,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return mc(e,t,n,r,i,o)}function mc(e,t,n,r,o,i){Z0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ep(t,n,!1),bn(e,t,i);r=t.stateNode,ub.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=co(t,e.child,null,i),t.child=co(t,null,l,i)):Fe(e,t,l,i),t.memoizedState=r.state,o&&Ep(t,n,!0),t.child}function ex(e){var t=e.stateNode;t.pendingContext?jp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jp(e,t.context,!1),zd(e,t.containerInfo)}function Fp(e,t,n,r,o){return uo(),$d(o),t.flags|=256,Fe(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function xc(e){return{baseLanes:e,cachePool:null,transitions:null}}function tx(e,t,n){var r=t.pendingProps,o=he.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),le(he,o&1),e===null)return uc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=tl(s,r,0,null),e=br(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xc(n),t.memoizedState=gc,e):Ud(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return cb(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Yn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Yn(l,i):(i=br(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?xc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=gc,r}return i=e.child,e=i.sibling,r=Yn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ud(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ls(e,t,n,r){return r!==null&&$d(r),co(t,e.child,null,n),e=Ud(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cb(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(I(422))),ls(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tl({mode:"visible",children:r.children},o,0,null),i=br(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&co(t,e.child,null,s),t.child.memoizedState=xc(s),t.memoizedState=gc,i);if(!(t.mode&1))return ls(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(I(419)),r=Ql(i,r,void 0),ls(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ke||l){if(r=$e,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,wn(e,o),Ht(r,e,o,-1))}return Xd(),r=Ql(Error(I(421))),ls(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jb.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ht=Gn(o.nextSibling),mt=t,pe=!0,Ut=null,e!==null&&(Et[Ct++]=hn,Et[Ct++]=mn,Et[Ct++]=kr,hn=e.id,mn=e.overflow,kr=t),t=Ud(t,r.children),t.flags|=4096,t)}function Bp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cc(e.return,t,n)}function Kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function nx(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bp(e,n,t);else if(e.tag===19)Bp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(he,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kl(t,!0,n,null,i);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function db(e,t,n){switch(t.tag){case 3:ex(t),uo();break;case 5:$0(t);break;case 1:et(t.type)&&aa(t);break;case 4:zd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;le(ca,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?tx(e,t,n):(le(he,he.current&1),e=bn(e,t,n),e!==null?e.sibling:null);le(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nx(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),le(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,K0(e,t,n)}return bn(e,t,n)}var rx,vc,ox,ix;rx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vc=function(){};ox=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,mr(rn.current);var i=null;switch(n){case"input":o=Fu(e,o),r=Fu(e,r),i=[];break;case"select":o=ge({},o,{value:void 0}),r=ge({},r,{value:void 0}),i=[];break;case"textarea":o=Vu(e,o),r=Vu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ia)}Wu(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(di.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(di.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ue("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ix=function(e,t,n,r){n!==r&&(t.flags|=4)};function Do(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fb(e,t,n){var r=t.pendingProps;switch(Td(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return et(t.type)&&sa(),Ae(t),null;case 3:return r=t.stateNode,fo(),fe(Ze),fe(Oe),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(kc(Ut),Ut=null))),vc(e,t),Ae(t),null;case 5:Ld(t);var o=mr(ji.current);if(n=t.type,e!==null&&t.stateNode!=null)ox(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ae(t),null}if(e=mr(rn.current),ss(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tn]=t,r[bi]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<Ho.length;o++)ue(Ho[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Yf(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":Kf(r,i),ue("invalid",r)}Wu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&is(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&is(r.textContent,l,e),o=["children",""+l]):di.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Qi(r),Qf(r,i,!0);break;case"textarea":Qi(r),Zf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ia)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ig(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tn]=t,e[bi]=r,rx(e,t,!1,!1),t.stateNode=e;e:{switch(s=Gu(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ho.length;o++)ue(Ho[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":Yf(e,r),o=Fu(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Kf(e,r),o=Vu(e,r),ue("invalid",e);break;default:o=r}Wu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Ag(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&zg(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fi(e,u):typeof u=="number"&&fi(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(di.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ue("scroll",e):u!=null&&fd(e,i,u,s))}switch(n){case"input":Qi(e),Qf(e,r,!1);break;case"textarea":Qi(e),Zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?eo(e,!!r.multiple,i,!1):r.defaultValue!=null&&eo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)ix(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=mr(ji.current),mr(rn.current),ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(i=r.nodeValue!==n)&&(e=mt,e!==null))switch(e.tag){case 3:is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return Ae(t),null;case 13:if(fe(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ht!==null&&t.mode&1&&!(t.flags&128))j0(),uo(),t.flags|=98560,i=!1;else if(i=ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[tn]=t}else uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else Ut!==null&&(kc(Ut),Ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Ce===0&&(Ce=3):Xd())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return fo(),vc(e,t),e===null&&yi(t.stateNode.containerInfo),Ae(t),null;case 10:return Nd(t.type._context),Ae(t),null;case 17:return et(t.type)&&sa(),Ae(t),null;case 19:if(fe(he),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Do(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=pa(e),s!==null){for(t.flags|=128,Do(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>ho&&(t.flags|=128,r=!0,Do(i,!1),t.lanes=4194304)}else{if(!r)if(e=pa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!pe)return Ae(t),null}else 2*we()-i.renderingStartTime>ho&&n!==1073741824&&(t.flags|=128,r=!0,Do(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,n=he.current,le(he,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return qd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function pb(e,t){switch(Td(t),t.tag){case 1:return et(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(),fe(Ze),fe(Oe),Ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ld(t),null;case 13:if(fe(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(he),null;case 4:return fo(),null;case 10:return Nd(t.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var us=!1,Me=!1,hb=typeof WeakSet=="function"?WeakSet:Set,O=null;function Qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function yc(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Up=!1;function mb(e,t){if(nc=na,e=c0(),Cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===n&&++c===o&&(l=s),h===i&&++d===r&&(u=s),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rc={focusedElem:e,selectionRange:n},na=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var S=m.memoizedProps,b=m.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ot(t.type,S),b);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){xe(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return m=Up,Up=!1,m}function oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&yc(t,n,i)}o=o.next}while(o!==r)}}function Za(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sx(e){var t=e.alternate;t!==null&&(e.alternate=null,sx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[bi],delete t[sc],delete t[Qw],delete t[Kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ax(e){return e.tag===5||e.tag===3||e.tag===4}function Vp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ax(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(r!==4&&(e=e.child,e!==null))for(bc(e,t,n),e=e.sibling;e!==null;)bc(e,t,n),e=e.sibling}function Sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}var _e=null,Bt=!1;function $n(e,t,n){for(n=n.child;n!==null;)lx(e,t,n),n=n.sibling}function lx(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:Me||Qr(n,t);case 6:var r=_e,o=Bt;_e=null,$n(e,t,n),_e=r,Bt=o,_e!==null&&(Bt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Bt?(e=_e,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),gi(e)):Wl(_e,n.stateNode));break;case 4:r=_e,o=Bt,_e=n.stateNode.containerInfo,Bt=!0,$n(e,t,n),_e=r,Bt=o;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&yc(n,t,s),o=o.next}while(o!==r)}$n(e,t,n);break;case 1:if(!Me&&(Qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}$n(e,t,n);break;case 21:$n(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,$n(e,t,n),Me=r):$n(e,t,n);break;default:$n(e,t,n)}}function Hp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hb),t.forEach(function(r){var o=Eb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,Bt=!1;break e;case 3:_e=l.stateNode.containerInfo,Bt=!0;break e;case 4:_e=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(_e===null)throw Error(I(160));lx(i,s,o),_e=null,Bt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){xe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ux(t,e),t=t.sibling}function ux(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Xt(e),r&4){try{oi(3,e,e.return),Za(3,e)}catch(S){xe(e,e.return,S)}try{oi(5,e,e.return)}catch(S){xe(e,e.return,S)}}break;case 1:Mt(t,e),Xt(e),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(Mt(t,e),Xt(e),r&512&&n!==null&&Qr(n,n.return),e.flags&32){var o=e.stateNode;try{fi(o,"")}catch(S){xe(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ng(o,i),Gu(l,s);var c=Gu(l,i);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?Ag(o,f):d==="dangerouslySetInnerHTML"?zg(o,f):d==="children"?fi(o,f):fd(o,d,f,c)}switch(l){case"input":Bu(o,i);break;case"textarea":Rg(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?eo(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?eo(o,!!i.multiple,i.defaultValue,!0):eo(o,!!i.multiple,i.multiple?[]:"",!1))}o[bi]=i}catch(S){xe(e,e.return,S)}}break;case 6:if(Mt(t,e),Xt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){xe(e,e.return,S)}}break;case 3:if(Mt(t,e),Xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(S){xe(e,e.return,S)}break;case 4:Mt(t,e),Xt(e);break;case 13:Mt(t,e),Xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wd=we())),r&4&&Hp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(c=Me)||d,Mt(t,e),Me=c):Mt(t,e),Xt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(f=O=d;O!==null;){switch(h=O,x=h.child,h.tag){case 0:case 11:case 14:case 15:oi(4,h,h.return);break;case 1:Qr(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(S){xe(r,n,S)}}break;case 5:Qr(h,h.return);break;case 22:if(h.memoizedState!==null){Gp(f);continue}}x!==null?(x.return=h,O=x):Gp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Lg("display",s))}catch(S){xe(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){xe(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mt(t,e),Xt(e),r&4&&Hp(e);break;case 21:break;default:Mt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ax(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fi(o,""),r.flags&=-33);var i=Vp(e);Sc(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Vp(e);bc(e,l,s);break;default:throw Error(I(161))}}catch(u){xe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gb(e,t,n){O=e,cx(e)}function cx(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||us;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||Me;l=us;var c=Me;if(us=s,(Me=u)&&!c)for(O=o;O!==null;)s=O,u=s.child,s.tag===22&&s.memoizedState!==null?qp(o):u!==null?(u.return=s,O=u):qp(o);for(;i!==null;)O=i,cx(i),i=i.sibling;O=o,us=l,Me=c}Wp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Wp(e)}}function Wp(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Za(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_p(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_p(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&gi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Me||t.flags&512&&wc(t)}catch(h){xe(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Gp(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function qp(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Za(4,t)}catch(u){xe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){xe(t,o,u)}}var i=t.return;try{wc(t)}catch(u){xe(t,i,u)}break;case 5:var s=t.return;try{wc(t)}catch(u){xe(t,s,u)}}}catch(u){xe(t,t.return,u)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var xb=Math.ceil,ga=En.ReactCurrentDispatcher,Vd=En.ReactCurrentOwner,Tt=En.ReactCurrentBatchConfig,te=0,$e=null,je=null,Ne=0,lt=0,Kr=nr(0),Ce=0,Ti=null,$r=0,el=0,Hd=0,ii=null,Qe=null,Wd=0,ho=1/0,dn=null,xa=!1,jc=null,Xn=null,cs=!1,Dn=null,va=0,si=0,Ec=null,_s=-1,Ps=0;function Ue(){return te&6?we():_s!==-1?_s:_s=we()}function Jn(e){return e.mode&1?te&2&&Ne!==0?Ne&-Ne:eb.transition!==null?(Ps===0&&(Ps=Xg()),Ps):(e=ie,e!==0||(e=window.event,e=e===void 0?16:t0(e.type)),e):1}function Ht(e,t,n,r){if(50<si)throw si=0,Ec=null,Error(I(185));Mi(e,n,r),(!(te&2)||e!==$e)&&(e===$e&&(!(te&2)&&(el|=n),Ce===4&&An(e,Ne)),tt(e,r),n===1&&te===0&&!(t.mode&1)&&(ho=we()+500,Ya&&rr()))}function tt(e,t){var n=e.callbackNode;ew(e,t);var r=ta(e,e===$e?Ne:0);if(r===0)n!==null&&np(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&np(n),t===1)e.tag===0?Zw(Xp.bind(null,e)):w0(Xp.bind(null,e)),Jw(function(){!(te&6)&&rr()}),n=null;else{switch(Jg(r)){case 1:n=xd;break;case 4:n=Gg;break;case 16:n=ea;break;case 536870912:n=qg;break;default:n=ea}n=vx(n,dx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dx(e,t){if(_s=-1,Ps=0,te&6)throw Error(I(327));var n=e.callbackNode;if(io()&&e.callbackNode!==n)return null;var r=ta(e,e===$e?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ya(e,r);else{t=r;var o=te;te|=2;var i=px();($e!==e||Ne!==t)&&(dn=null,ho=we()+500,wr(e,t));do try{wb();break}catch(l){fx(e,l)}while(!0);Pd(),ga.current=i,te=o,je!==null?t=0:($e=null,Ne=0,t=Ce)}if(t!==0){if(t===2&&(o=Qu(e),o!==0&&(r=o,t=Cc(e,o))),t===1)throw n=Ti,wr(e,0),An(e,r),tt(e,we()),n;if(t===6)An(e,r);else{if(o=e.current.alternate,!(r&30)&&!vb(o)&&(t=ya(e,r),t===2&&(i=Qu(e),i!==0&&(r=i,t=Cc(e,i))),t===1))throw n=Ti,wr(e,0),An(e,r),tt(e,we()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:ur(e,Qe,dn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Wd+500-we(),10<t)){if(ta(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ic(ur.bind(null,e,Qe,dn),t);break}ur(e,Qe,dn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Vt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xb(r/1960))-r,10<r){e.timeoutHandle=ic(ur.bind(null,e,Qe,dn),r);break}ur(e,Qe,dn);break;case 5:ur(e,Qe,dn);break;default:throw Error(I(329))}}}return tt(e,we()),e.callbackNode===n?dx.bind(null,e):null}function Cc(e,t){var n=ii;return e.current.memoizedState.isDehydrated&&(wr(e,t).flags|=256),e=ya(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&kc(t)),e}function kc(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function vb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Hd,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function Xp(e){if(te&6)throw Error(I(327));io();var t=ta(e,0);if(!(t&1))return tt(e,we()),null;var n=ya(e,t);if(e.tag!==0&&n===2){var r=Qu(e);r!==0&&(t=r,n=Cc(e,r))}if(n===1)throw n=Ti,wr(e,0),An(e,t),tt(e,we()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,Qe,dn),tt(e,we()),null}function Gd(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(ho=we()+500,Ya&&rr())}}function _r(e){Dn!==null&&Dn.tag===0&&!(te&6)&&io();var t=te;te|=1;var n=Tt.transition,r=ie;try{if(Tt.transition=null,ie=1,e)return e()}finally{ie=r,Tt.transition=n,te=t,!(te&6)&&rr()}}function qd(){lt=Kr.current,fe(Kr)}function wr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xw(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:fo(),fe(Ze),fe(Oe),Ad();break;case 5:Ld(r);break;case 4:fo();break;case 13:fe(he);break;case 19:fe(he);break;case 10:Nd(r.type._context);break;case 22:case 23:qd()}n=n.return}if($e=e,je=e=Yn(e.current,null),Ne=lt=t,Ce=0,Ti=null,Hd=el=$r=0,Qe=ii=null,hr!==null){for(t=0;t<hr.length;t++)if(n=hr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}hr=null}return e}function fx(e,t){do{var n=je;try{if(Pd(),ks.current=ma,ha){for(var r=me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ha=!1}if(Tr=0,ke=Ee=me=null,ri=!1,Ei=0,Vd.current=null,n===null||n.return===null){Ce=1,Ti=t,je=null;break}e:{var i=e,s=n.return,l=n,u=t;if(t=Ne,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Lp(s);if(x!==null){x.flags&=-257,Ap(x,s,l,i,t),x.mode&1&&zp(i,c,t),t=x,u=c;var m=t.updateQueue;if(m===null){var S=new Set;S.add(u),t.updateQueue=S}else m.add(u);break e}else{if(!(t&1)){zp(i,c,t),Xd();break e}u=Error(I(426))}}else if(pe&&l.mode&1){var b=Lp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ap(b,s,l,i,t),$d(po(u,l));break e}}i=u=po(u,l),Ce!==4&&(Ce=2),ii===null?ii=[i]:ii.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=J0(i,u,t);$p(i,g);break e;case 1:l=u;var v=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Xn===null||!Xn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Y0(i,l,t);$p(i,y);break e}}i=i.return}while(i!==null)}mx(n)}catch(j){t=j,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function px(){var e=ga.current;return ga.current=ma,e===null?ma:e}function Xd(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),$e===null||!($r&268435455)&&!(el&268435455)||An($e,Ne)}function ya(e,t){var n=te;te|=2;var r=px();($e!==e||Ne!==t)&&(dn=null,wr(e,t));do try{yb();break}catch(o){fx(e,o)}while(!0);if(Pd(),te=n,ga.current=r,je!==null)throw Error(I(261));return $e=null,Ne=0,Ce}function yb(){for(;je!==null;)hx(je)}function wb(){for(;je!==null&&!W1();)hx(je)}function hx(e){var t=xx(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?mx(e):je=t,Vd.current=null}function mx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pb(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,je=null;return}}else if(n=fb(n,t,lt),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ce===0&&(Ce=5)}function ur(e,t,n){var r=ie,o=Tt.transition;try{Tt.transition=null,ie=1,bb(e,t,n,r)}finally{Tt.transition=o,ie=r}return null}function bb(e,t,n,r){do io();while(Dn!==null);if(te&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tw(e,i),e===$e&&(je=$e=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,vx(ea,function(){return io(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Tt.transition,Tt.transition=null;var s=ie;ie=1;var l=te;te|=4,Vd.current=null,mb(e,n),ux(n,e),Bw(rc),na=!!nc,rc=nc=null,e.current=n,gb(n),G1(),te=l,ie=s,Tt.transition=i}else e.current=n;if(cs&&(cs=!1,Dn=e,va=o),i=e.pendingLanes,i===0&&(Xn=null),J1(n.stateNode),tt(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xa)throw xa=!1,e=jc,jc=null,e;return va&1&&e.tag!==0&&io(),i=e.pendingLanes,i&1?e===Ec?si++:(si=0,Ec=e):si=0,rr(),null}function io(){if(Dn!==null){var e=Jg(va),t=Tt.transition,n=ie;try{if(Tt.transition=null,ie=16>e?16:e,Dn===null)var r=!1;else{if(e=Dn,Dn=null,va=0,te&6)throw Error(I(331));var o=te;for(te|=4,O=e.current;O!==null;){var i=O,s=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(O=c;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:oi(8,d,i)}var f=d.child;if(f!==null)f.return=d,O=f;else for(;O!==null;){d=O;var h=d.sibling,x=d.return;if(sx(d),d===c){O=null;break}if(h!==null){h.return=x,O=h;break}O=x}}}var m=i.alternate;if(m!==null){var S=m.child;if(S!==null){m.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}O=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,O=s;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var v=e.current;for(O=v;O!==null;){s=O;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,O=p;else e:for(s=v;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Za(9,l)}}catch(j){xe(l,l.return,j)}if(l===s){O=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,O=y;break e}O=l.return}}if(te=o,rr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Wa,e)}catch{}r=!0}return r}finally{ie=n,Tt.transition=t}}return!1}function Jp(e,t,n){t=po(n,t),t=J0(e,t,1),e=qn(e,t,1),t=Ue(),e!==null&&(Mi(e,1,t),tt(e,t))}function xe(e,t,n){if(e.tag===3)Jp(e,e,n);else for(;t!==null;){if(t.tag===3){Jp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){e=po(n,e),e=Y0(t,e,1),t=qn(t,e,1),e=Ue(),t!==null&&(Mi(t,1,e),tt(t,e));break}}t=t.return}}function Sb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Ne&n)===n&&(Ce===4||Ce===3&&(Ne&130023424)===Ne&&500>we()-Wd?wr(e,0):Hd|=n),tt(e,t)}function gx(e,t){t===0&&(e.mode&1?(t=es,es<<=1,!(es&130023424)&&(es=4194304)):t=1);var n=Ue();e=wn(e,t),e!==null&&(Mi(e,t,n),tt(e,n))}function jb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gx(e,n)}function Eb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),gx(e,n)}var xx;xx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,db(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,pe&&t.flags&1048576&&b0(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var o=lo(t,Oe.current);oo(t,n),o=Dd(null,t,r,e,o,n);var i=Od();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(i=!0,aa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Id(t),o.updater=Ka,t.stateNode=o,o._reactInternals=t,fc(t,r,e,n),t=mc(null,t,r,!0,i,n)):(t.tag=0,pe&&i&&kd(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=kb(r),e=Ot(r,e),o){case 0:t=hc(null,t,r,e,n);break e;case 1:t=Op(null,t,r,e,n);break e;case 11:t=Mp(null,t,r,e,n);break e;case 14:t=Dp(null,t,r,Ot(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),hc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),Op(e,t,r,o,n);case 3:e:{if(ex(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,T0(e,t),fa(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=po(Error(I(423)),t),t=Fp(e,t,r,n,o);break e}else if(r!==o){o=po(Error(I(424)),t),t=Fp(e,t,r,n,o);break e}else for(ht=Gn(t.stateNode.containerInfo.firstChild),mt=t,pe=!0,Ut=null,n=C0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===o){t=bn(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return $0(t),e===null&&uc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,oc(r,o)?s=null:i!==null&&oc(r,i)&&(t.flags|=32),Z0(e,t),Fe(e,t,s,n),t.child;case 6:return e===null&&uc(t),null;case 13:return tx(e,t,n);case 4:return zd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=co(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),Mp(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,le(ca,r._currentValue),r._currentValue=s,i!==null)if(Gt(i.value,s)){if(i.children===o.children&&!Ze.current){t=bn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),cc(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(I(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oo(t,n),o=_t(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=Ot(r,t.pendingProps),o=Ot(r.type,o),Dp(e,t,r,o,n);case 15:return Q0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),$s(e,t),t.tag=1,et(r)?(e=!0,aa(t)):e=!1,oo(t,n),X0(t,r,o),fc(t,r,o,n),mc(null,t,r,!0,e,n);case 19:return nx(e,t,n);case 22:return K0(e,t,n)}throw Error(I(156,t.tag))};function vx(e,t){return Wg(e,t)}function Cb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new Cb(e,t,n,r)}function Jd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kb(e){if(typeof e=="function")return Jd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hd)return 11;if(e===md)return 14}return 2}function Yn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ns(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Jd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ur:return br(n.children,o,i,t);case pd:s=8,o|=8;break;case Au:return e=kt(12,n,t,o|2),e.elementType=Au,e.lanes=i,e;case Mu:return e=kt(13,n,t,o),e.elementType=Mu,e.lanes=i,e;case Du:return e=kt(19,n,t,o),e.elementType=Du,e.lanes=i,e;case $g:return tl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kg:s=10;break e;case Tg:s=9;break e;case hd:s=11;break e;case md:s=14;break e;case In:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=kt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function br(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=kt(22,e,r,t),e.elementType=$g,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yd(e,t,n,r,o,i,s,l,u){return e=new Tb(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(i),e}function $b(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yx(e){if(!e)return er;e=e._reactInternals;e:{if(zr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(et(n))return y0(e,n,t)}return t}function wx(e,t,n,r,o,i,s,l,u){return e=Yd(n,r,!0,e,o,i,s,l,u),e.context=yx(null),n=e.current,r=Ue(),o=Jn(n),i=xn(r,o),i.callback=t??null,qn(n,i,o),e.current.lanes=o,Mi(e,o,r),tt(e,r),e}function nl(e,t,n,r){var o=t.current,i=Ue(),s=Jn(o);return n=yx(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qn(o,t,s),e!==null&&(Ht(e,o,s,i),Cs(e,o,s)),s}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qd(e,t){Yp(e,t),(e=e.alternate)&&Yp(e,t)}function _b(){return null}var bx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kd(e){this._internalRoot=e}rl.prototype.render=Kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));nl(e,t,null,null)};rl.prototype.unmount=Kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){nl(null,e,null,null)}),t[yn]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&e0(e)}};function Zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Pb(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=wa(s);i.call(c)}}var s=wx(t,r,e,0,null,!1,!1,"",Qp);return e._reactRootContainer=s,e[yn]=s.current,yi(e.nodeType===8?e.parentNode:e),_r(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=wa(u);l.call(c)}}var u=Yd(e,0,!1,null,null,!1,!1,"",Qp);return e._reactRootContainer=u,e[yn]=u.current,yi(e.nodeType===8?e.parentNode:e),_r(function(){nl(t,u,n,r)}),u}function il(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var u=wa(s);l.call(u)}}nl(t,s,e,o)}else s=Pb(n,t,e,o,r);return wa(s)}Yg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vo(t.pendingLanes);n!==0&&(vd(t,n|1),tt(t,we()),!(te&6)&&(ho=we()+500,rr()))}break;case 13:_r(function(){var r=wn(e,1);if(r!==null){var o=Ue();Ht(r,e,1,o)}}),Qd(e,1)}};yd=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=Ue();Ht(t,e,134217728,n)}Qd(e,134217728)}};Qg=function(e){if(e.tag===13){var t=Jn(e),n=wn(e,t);if(n!==null){var r=Ue();Ht(n,e,t,r)}Qd(e,t)}};Kg=function(){return ie};Zg=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Xu=function(e,t,n){switch(t){case"input":if(Bu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ja(r);if(!o)throw Error(I(90));Pg(r),Bu(r,o)}}}break;case"textarea":Rg(e,n);break;case"select":t=n.value,t!=null&&eo(e,!!n.multiple,t,!1)}};Og=Gd;Fg=_r;var Nb={usingClientEntryPoint:!1,Events:[Oi,Gr,Ja,Mg,Dg,Gd]},Oo={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rb={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vg(e),e===null?null:e.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||_b,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Wa=ds.inject(Rb),nn=ds}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(t))throw Error(I(200));return $b(e,t,null,n)};vt.createRoot=function(e,t){if(!Zd(e))throw Error(I(299));var n=!1,r="",o=bx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Yd(e,1,!1,null,null,n,!1,r,o),e[yn]=t.current,yi(e.nodeType===8?e.parentNode:e),new Kd(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Vg(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return _r(e)};vt.hydrate=function(e,t,n){if(!ol(t))throw Error(I(200));return il(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!Zd(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=bx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=wx(t,null,e,1,n??null,o,!1,i,s),e[yn]=t.current,yi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rl(t)};vt.render=function(e,t,n){if(!ol(t))throw Error(I(200));return il(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!ol(e))throw Error(I(40));return e._reactRootContainer?(_r(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};vt.unstable_batchedUpdates=Gd;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return il(e,t,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(e){console.error(e)}}Sx(),Sg.exports=vt;var Ib=Sg.exports,jx,Kp=Ib;jx=Kp.createRoot,Kp.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$i.apply(this,arguments)}var On;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(On||(On={}));const Zp="popstate";function zb(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Tc("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ba(o)}return Ab(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ex(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lb(){return Math.random().toString(36).substr(2,8)}function eh(e,t){return{usr:e.state,key:e.key,idx:t}}function Tc(e,t,n,r){return n===void 0&&(n=null),$i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Eo(t):t,{state:n,key:t&&t.key||r||Lb()})}function ba(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Eo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ab(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=On.Pop,u=null,c=d();c==null&&(c=0,s.replaceState($i({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=On.Pop;let b=d(),g=b==null?null:b-c;c=b,u&&u({action:l,location:S.location,delta:g})}function h(b,g){l=On.Push;let v=Tc(S.location,b,g);c=d()+1;let p=eh(v,c),y=S.createHref(v);try{s.pushState(p,"",y)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(y)}i&&u&&u({action:l,location:S.location,delta:1})}function x(b,g){l=On.Replace;let v=Tc(S.location,b,g);c=d();let p=eh(v,c),y=S.createHref(v);s.replaceState(p,"",y),i&&u&&u({action:l,location:S.location,delta:0})}function m(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof b=="string"?b:ba(b);return v=v.replace(/ $/,"%20"),be(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let S={get action(){return l},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Zp,f),u=b,()=>{o.removeEventListener(Zp,f),u=null}},createHref(b){return t(o,b)},createURL:m,encodeLocation(b){let g=m(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:x,go(b){return s.go(b)}};return S}var th;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(th||(th={}));function Mb(e,t,n){return n===void 0&&(n="/"),Db(e,t,n,!1)}function Db(e,t,n,r){let o=typeof t=="string"?Eo(t):t,i=ef(o.pathname||"/",n);if(i==null)return null;let s=Cx(e);Ob(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=Yb(i);l=Xb(s[u],c,r)}return l}function Cx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Qn([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cx(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Gb(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let u of kx(i.path))o(i,s,u)}),t}function kx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=kx(r.join("/")),l=[];return l.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ob(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fb=/^:[\w-]+$/,Bb=3,Ub=2,Vb=1,Hb=10,Wb=-2,nh=e=>e==="*";function Gb(e,t){let n=e.split("/"),r=n.length;return n.some(nh)&&(r+=Wb),t&&(r+=Ub),n.filter(o=>!nh(o)).reduce((o,i)=>o+(Fb.test(i)?Bb:i===""?Vb:Hb),r)}function qb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xb(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=rh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),h=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=rh({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Qn([i,f.pathname]),pathnameBase:eS(Qn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Qn([i,f.pathnameBase]))}return s}function rh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:x}=d;if(h==="*"){let S=l[f]||"";s=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const m=l[f];return x&&!m?c[h]=void 0:c[h]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Jb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ex(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Yb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ex(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ef(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Eo(e):e;return{pathname:n?n.startsWith("/")?n:Kb(n,t):t,search:tS(r),hash:nS(o)}}function Kb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function tu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tf(e,t){let n=Zb(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function nf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Eo(e):(o=$i({},e),be(!o.pathname||!o.pathname.includes("?"),tu("?","pathname","search",o)),be(!o.pathname||!o.pathname.includes("#"),tu("#","pathname","hash",o)),be(!o.search||!o.search.includes("#"),tu("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}l=f>=0?t[f]:"/"}let u=Qb(o,l),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Qn=e=>e.join("/").replace(/\/\/+/g,"/"),eS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tx=["post","put","patch","delete"];new Set(Tx);const oS=["get",...Tx];new Set(oS);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(this,arguments)}const rf=w.createContext(null),iS=w.createContext(null),or=w.createContext(null),sl=w.createContext(null),sn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),$x=w.createContext(null);function sS(e,t){let{relative:n}=t===void 0?{}:t;Co()||be(!1);let{basename:r,navigator:o}=w.useContext(or),{hash:i,pathname:s,search:l}=Px(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Qn([r,s])),o.createHref({pathname:u,search:l,hash:i})}function Co(){return w.useContext(sl)!=null}function Bi(){return Co()||be(!1),w.useContext(sl).location}function _x(e){w.useContext(or).static||w.useLayoutEffect(e)}function ve(){let{isDataRoute:e}=w.useContext(sn);return e?bS():aS()}function aS(){Co()||be(!1);let e=w.useContext(rf),{basename:t,future:n,navigator:r}=w.useContext(or),{matches:o}=w.useContext(sn),{pathname:i}=Bi(),s=JSON.stringify(tf(o,n.v7_relativeSplatPath)),l=w.useRef(!1);return _x(()=>{l.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=nf(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Qn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}const lS=w.createContext(null);function uS(e){let t=w.useContext(sn).outlet;return t&&w.createElement(lS.Provider,{value:e},t)}function ir(){let{matches:e}=w.useContext(sn),t=e[e.length-1];return t?t.params:{}}function Px(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(or),{matches:o}=w.useContext(sn),{pathname:i}=Bi(),s=JSON.stringify(tf(o,r.v7_relativeSplatPath));return w.useMemo(()=>nf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function cS(e,t){return dS(e,t)}function dS(e,t,n,r){Co()||be(!1);let{navigator:o}=w.useContext(or),{matches:i}=w.useContext(sn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Bi(),d;if(t){var f;let b=typeof t=="string"?Eo(t):t;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||be(!1),d=b}else d=c;let h=d.pathname||"/",x=h;if(u!=="/"){let b=u.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=Mb(e,{pathname:x}),S=gS(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Qn([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Qn([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&S?w.createElement(sl.Provider,{value:{location:_i({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:On.Pop}},S):S}function fS(){let e=wS(),t=rS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const pS=w.createElement(fS,null);class hS extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(sn.Provider,{value:this.props.routeContext},w.createElement($x.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mS(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext(rf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(sn.Provider,{value:t},r)}function gS(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||be(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:x}=n,m=f.route.loader&&h[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||m){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let x,m=!1,S=null,b=null;n&&(x=l&&f.route.id?l[f.route.id]:void 0,S=f.route.errorElement||pS,u&&(c<0&&h===0?(m=!0,b=null):c===h&&(m=!0,b=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),v=()=>{let p;return x?p=S:m?p=b:f.route.Component?p=w.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,w.createElement(mS,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(hS,{location:n.location,revalidation:n.revalidation,component:S,error:x,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Nx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nx||{}),Sa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sa||{});function xS(e){let t=w.useContext(rf);return t||be(!1),t}function vS(e){let t=w.useContext(iS);return t||be(!1),t}function yS(e){let t=w.useContext(sn);return t||be(!1),t}function Rx(e){let t=yS(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function wS(){var e;let t=w.useContext($x),n=vS(Sa.UseRouteError),r=Rx(Sa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function bS(){let{router:e}=xS(Nx.UseNavigateStable),t=Rx(Sa.UseNavigateStable),n=w.useRef(!1);return _x(()=>{n.current=!0}),w.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,_i({fromRouteId:t},i)))},[e,t])}function SS(e){let{to:t,replace:n,state:r,relative:o}=e;Co()||be(!1);let{future:i,static:s}=w.useContext(or),{matches:l}=w.useContext(sn),{pathname:u}=Bi(),c=ve(),d=nf(t,tf(l,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(d);return w.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function jS(e){return uS(e.context)}function q(e){be(!1)}function ES(e){let{basename:t="/",children:n=null,location:r,navigationType:o=On.Pop,navigator:i,static:s=!1,future:l}=e;Co()&&be(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:i,static:s,future:_i({v7_relativeSplatPath:!1},l)}),[u,l,i,s]);typeof r=="string"&&(r=Eo(r));let{pathname:d="/",search:f="",hash:h="",state:x=null,key:m="default"}=r,S=w.useMemo(()=>{let b=ef(d,u);return b==null?null:{location:{pathname:b,search:f,hash:h,state:x,key:m},navigationType:o}},[u,d,f,h,x,m,o]);return S==null?null:w.createElement(or.Provider,{value:c},w.createElement(sl.Provider,{children:n,value:S}))}function CS(e){let{children:t,location:n}=e;return cS($c(t),n)}new Promise(()=>{});function $c(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let i=[...t,o];if(r.type===w.Fragment){n.push.apply(n,$c(r.props.children,i));return}r.type!==q&&be(!1),!r.props.index||!r.props.children||be(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=$c(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_c.apply(this,arguments)}function kS(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function TS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $S(e,t){return e.button===0&&(!t||t==="_self")&&!TS(e)}const _S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],PS="6";try{window.__reactRouterVersion=PS}catch{}const NS="startTransition",oh=S1[NS];function RS(e){let{basename:t,children:n,future:r,window:o}=e,i=w.useRef();i.current==null&&(i.current=zb({window:o,v5Compat:!0}));let s=i.current,[l,u]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=w.useCallback(f=>{c&&oh?oh(()=>u(f)):u(f)},[u,c]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.createElement(ES,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const IS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,h=kS(t,_S),{basename:x}=w.useContext(or),m,S=!1;if(typeof c=="string"&&zS.test(c)&&(m=c,IS))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=ef(y.pathname,x);y.origin===p.origin&&j!=null?c=j+y.search+y.hash:S=!0}catch{}let b=sS(c,{relative:o}),g=LS(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:o,viewTransition:f});function v(p){r&&r(p),p.defaultPrevented||g(p)}return w.createElement("a",_c({},h,{href:m||b,onClick:S||i?r:v,ref:n,target:u}))});var ih;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ih||(ih={}));var sh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sh||(sh={}));function LS(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,u=ve(),c=Bi(),d=Px(e,{relative:s});return w.useCallback(f=>{if($S(f,n)){f.preventDefault();let h=r!==void 0?r:ba(c)===ba(d);u(e,{replace:h,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[c,u,d,r,o,n,e,i,s,l])}var De=function(){return De=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},De.apply(this,arguments)};function mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ce="-ms-",ai="-moz-",oe="-webkit-",Ix="comm",al="rule",of="decl",AS="@import",zx="@keyframes",MS="@layer",Lx=Math.abs,sf=String.fromCharCode,Pc=Object.assign;function DS(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function Ax(e){return e.trim()}function fn(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Rs(e,t,n){return e.indexOf(t,n)}function Te(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function en(e){return e.length}function Mx(e){return e.length}function Wo(e,t){return t.push(e),e}function OS(e,t){return e.map(t).join("")}function ah(e,t){return e.filter(function(n){return!fn(n,t)})}var ll=1,xo=1,Dx=0,Nt=0,Se=0,ko="";function ul(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ll,column:xo,length:s,return:"",siblings:l}}function Pn(e,t){return Pc(ul("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mr(e){for(;e.root;)e=Pn(e.root,{children:[e]});Wo(e,e.siblings)}function FS(){return Se}function BS(){return Se=Nt>0?Te(ko,--Nt):0,xo--,Se===10&&(xo=1,ll--),Se}function Wt(){return Se=Nt<Dx?Te(ko,Nt++):0,xo++,Se===10&&(xo=1,ll++),Se}function Sr(){return Te(ko,Nt)}function Is(){return Nt}function cl(e,t){return go(ko,e,t)}function Nc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function US(e){return ll=xo=1,Dx=en(ko=e),Nt=0,[]}function VS(e){return ko="",e}function nu(e){return Ax(cl(Nt-1,Rc(e===91?e+2:e===40?e+1:e)))}function HS(e){for(;(Se=Sr())&&Se<33;)Wt();return Nc(e)>2||Nc(Se)>3?"":" "}function WS(e,t){for(;--t&&Wt()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return cl(e,Is()+(t<6&&Sr()==32&&Wt()==32))}function Rc(e){for(;Wt();)switch(Se){case e:return Nt;case 34:case 39:e!==34&&e!==39&&Rc(Se);break;case 40:e===41&&Rc(e);break;case 92:Wt();break}return Nt}function GS(e,t){for(;Wt()&&e+Se!==57;)if(e+Se===84&&Sr()===47)break;return"/*"+cl(t,Nt-1)+"*"+sf(e===47?e:Wt())}function qS(e){for(;!Nc(Sr());)Wt();return cl(e,Nt)}function XS(e){return VS(zs("",null,null,null,[""],e=US(e),0,[0],e))}function zs(e,t,n,r,o,i,s,l,u){for(var c=0,d=0,f=s,h=0,x=0,m=0,S=1,b=1,g=1,v=0,p="",y=o,j=i,C=r,T=p;b;)switch(m=v,v=Wt()){case 40:if(m!=108&&Te(T,f-1)==58){Rs(T+=G(nu(v),"&","&\f"),"&\f",Lx(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:T+=nu(v);break;case 9:case 10:case 13:case 32:T+=HS(m);break;case 92:T+=WS(Is()-1,7);continue;case 47:switch(Sr()){case 42:case 47:Wo(JS(GS(Wt(),Is()),t,n,u),u);break;default:T+="/"}break;case 123*S:l[c++]=en(T)*g;case 125*S:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:g==-1&&(T=G(T,/\f/g,"")),x>0&&en(T)-f&&Wo(x>32?uh(T+";",r,n,f-1,u):uh(G(T," ","")+";",r,n,f-2,u),u);break;case 59:T+=";";default:if(Wo(C=lh(T,t,n,c,d,o,l,p,y=[],j=[],f,i),i),v===123)if(d===0)zs(T,t,C,C,y,i,f,l,j);else switch(h===99&&Te(T,3)===110?100:h){case 100:case 108:case 109:case 115:zs(e,C,C,r&&Wo(lh(e,C,C,0,0,o,l,p,o,y=[],f,j),j),o,j,f,l,r?y:j);break;default:zs(T,C,C,C,[""],j,0,l,j)}}c=d=x=0,S=g=1,p=T="",f=s;break;case 58:f=1+en(T),x=m;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&BS()==125)continue}switch(T+=sf(v),v*S){case 38:g=d>0?1:(T+="\f",-1);break;case 44:l[c++]=(en(T)-1)*g,g=1;break;case 64:Sr()===45&&(T+=nu(Wt())),h=Sr(),d=f=en(p=T+=qS(Is())),v++;break;case 45:m===45&&en(T)==2&&(S=0)}}return i}function lh(e,t,n,r,o,i,s,l,u,c,d,f){for(var h=o-1,x=o===0?i:[""],m=Mx(x),S=0,b=0,g=0;S<r;++S)for(var v=0,p=go(e,h+1,h=Lx(b=s[S])),y=e;v<m;++v)(y=Ax(b>0?x[v]+" "+p:G(p,/&\f/g,x[v])))&&(u[g++]=y);return ul(e,t,n,o===0?al:l,u,c,d,f)}function JS(e,t,n,r){return ul(e,t,n,Ix,sf(FS()),go(e,2,-2),0,r)}function uh(e,t,n,r,o){return ul(e,t,n,of,go(e,0,r),go(e,r+1,-1),r,o)}function Ox(e,t,n){switch(DS(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+e+e;case 4789:return ai+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+ai+e+ce+e+e;case 5936:switch(Te(e,t+11)){case 114:return oe+e+ce+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+ce+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+ce+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return oe+e+ce+e+e;case 6165:return oe+e+ce+"flex-"+e+e;case 5187:return oe+e+G(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return oe+e+ce+"flex-item-"+G(e,/flex-|-self/g,"")+(fn(e,/flex-|baseline/)?"":ce+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return oe+e+ce+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return oe+e+ce+G(e,"shrink","negative")+e;case 5292:return oe+e+ce+G(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+G(e,"-grow","")+oe+e+ce+G(e,"grow","positive")+e;case 4554:return oe+G(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+e+e;case 4200:if(!fn(e,/flex-|baseline/))return ce+"grid-column-align"+go(e,t)+e;break;case 2592:case 3360:return ce+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,fn(r.props,/grid-\w+-end/)})?~Rs(e+(n=n[t].value),"span",0)?e:ce+G(e,"-start","")+e+ce+"grid-row-span:"+(~Rs(n,"span",0)?fn(n,/\d+/):+fn(n,/\d+/)-+fn(e,/\d+/))+";":ce+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return fn(r.props,/grid-\w+-start/)})?e:ce+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+ai+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rs(e,"stretch",0)?Ox(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,u,c){return ce+o+":"+i+c+(s?ce+o+"-span:"+(l?u:+u-+i)+c:"")+e});case 4949:if(Te(e,t+6)===121)return G(e,":",":"+oe)+e;break;case 6444:switch(Te(e,Te(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oe+(Te(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+ce+"$2box$3")+e;case 100:return G(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function ja(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function YS(e,t,n,r){switch(e.type){case MS:if(e.children.length)break;case AS:case of:return e.return=e.return||e.value;case Ix:return"";case zx:return e.return=e.value+"{"+ja(e.children,r)+"}";case al:if(!en(e.value=e.props.join(",")))return""}return en(n=ja(e.children,r))?e.return=e.value+"{"+n+"}":""}function QS(e){var t=Mx(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function KS(e){return function(t){t.root||(t=t.return)&&e(t)}}function ZS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case of:e.return=Ox(e.value,e.length,n);return;case zx:return ja([Pn(e,{value:G(e.value,"@","@"+oe)})],r);case al:if(e.length)return OS(n=e.props,function(o){switch(fn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(Pn(e,{props:[G(o,/:(read-\w+)/,":"+ai+"$1")]})),Mr(Pn(e,{props:[o]})),Pc(e,{props:ah(n,r)});break;case"::placeholder":Mr(Pn(e,{props:[G(o,/:(plac\w+)/,":"+oe+"input-$1")]})),Mr(Pn(e,{props:[G(o,/:(plac\w+)/,":"+ai+"$1")]})),Mr(Pn(e,{props:[G(o,/:(plac\w+)/,ce+"input-$1")]})),Mr(Pn(e,{props:[o]})),Pc(e,{props:ah(n,r)});break}return""})}}var ej={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at={},vo=typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",Fx="active",Bx="data-styled-version",dl="6.1.13",af=`/*!sc*/
`,Ea=typeof window<"u"&&"HTMLElement"in window,tj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY),nj={},fl=Object.freeze([]),yo=Object.freeze({});function Ux(e,t,n){return n===void 0&&(n=yo),e.theme!==n.theme&&e.theme||t||n.theme}var Vx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oj=/(^-|-$)/g;function ch(e){return e.replace(rj,"-").replace(oj,"")}var ij=/(a)(d)/gi,fs=52,dh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ic(e){var t,n="";for(t=Math.abs(e);t>fs;t=t/fs|0)n=dh(t%fs)+n;return(dh(t%fs)+n).replace(ij,"$1-$2")}var ru,Hx=5381,Zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wx=function(e){return Zr(Hx,e)};function lf(e){return Ic(Wx(e)>>>0)}function sj(e){return e.displayName||e.name||"Component"}function ou(e){return typeof e=="string"&&!0}var Gx=typeof Symbol=="function"&&Symbol.for,qx=Gx?Symbol.for("react.memo"):60115,aj=Gx?Symbol.for("react.forward_ref"):60112,lj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cj=((ru={})[aj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ru[qx]=Xx,ru);function fh(e){return("type"in(t=e)&&t.type.$$typeof)===qx?Xx:"$$typeof"in e?cj[e.$$typeof]:lj;var t}var dj=Object.defineProperty,fj=Object.getOwnPropertyNames,ph=Object.getOwnPropertySymbols,pj=Object.getOwnPropertyDescriptor,hj=Object.getPrototypeOf,hh=Object.prototype;function Jx(e,t,n){if(typeof t!="string"){if(hh){var r=hj(t);r&&r!==hh&&Jx(e,r,n)}var o=fj(t);ph&&(o=o.concat(ph(t)));for(var i=fh(e),s=fh(t),l=0;l<o.length;++l){var u=o[l];if(!(u in uj||n&&n[u]||s&&u in s||i&&u in i)){var c=pj(t,u);try{dj(e,u,c)}catch{}}}}return e}function wo(e){return typeof e=="function"}function uf(e){return typeof e=="object"&&"styledComponentId"in e}function gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ca(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Pi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function zc(e,t,n){if(n===void 0&&(n=!1),!n&&!Pi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=zc(e[r],t[r]);else if(Pi(t))for(var r in t)e[r]=zc(e[r],t[r]);return e}function cf(e,t){Object.defineProperty(e,"toString",{value:t})}function Ui(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ui(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(af);return n},e}(),Ls=new Map,ka=new Map,As=1,ps=function(e){if(Ls.has(e))return Ls.get(e);for(;ka.has(As);)As++;var t=As++;return Ls.set(e,t),ka.set(t,e),t},gj=function(e,t){As=t+1,Ls.set(e,t),ka.set(t,e)},xj="style[".concat(vo,"][").concat(Bx,'="').concat(dl,'"]'),vj=new RegExp("^".concat(vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yj=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},wj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(af),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var u=l.match(vj);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(gj(d,c),yj(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},mh=function(e){for(var t=document.querySelectorAll(xj),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(vo)!==Fx&&(wj(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function bj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Yx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(vo,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(vo,Fx),r.setAttribute(Bx,dl);var s=bj();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Sj=function(){function e(t){this.element=Yx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Ui(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jj=function(){function e(t){this.element=Yx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ej=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gh=Ea,Cj={isServer:!Ea,useCSSOMInjection:!tj},Ta=function(){function e(t,n,r){t===void 0&&(t=yo),n===void 0&&(n={});var o=this;this.options=De(De({},Cj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ea&&gh&&(gh=!1,mh(this)),cf(this,function(){return function(i){for(var s=i.getTag(),l=s.length,u="",c=function(f){var h=function(g){return ka.get(g)}(f);if(h===void 0)return"continue";var x=i.names.get(h),m=s.getGroup(f);if(x===void 0||!x.size||m.length===0)return"continue";var S="".concat(vo,".g").concat(f,'[id="').concat(h,'"]'),b="";x!==void 0&&x.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),u+="".concat(m).concat(S,'{content:"').concat(b,'"}').concat(af)},d=0;d<l;d++)c(d);return u}(o)})}return e.registerId=function(t){return ps(t)},e.prototype.rehydrate=function(){!this.server&&Ea&&mh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(De(De({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Ej(o):r?new Sj(o):new jj(o)}(this.options),new mj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ps(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ps(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ps(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kj=/&/g,Tj=/^\s*\/\/.*$/gm;function Qx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qx(n.children,t)),n})}function $j(e){var t,n,r,o=yo,i=o.options,s=i===void 0?yo:i,l=o.plugins,u=l===void 0?fl:l,c=function(h,x,m){return m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):h},d=u.slice();d.push(function(h){h.type===al&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(kj,n).replace(r,c))}),s.prefix&&d.push(ZS),d.push(YS);var f=function(h,x,m,S){x===void 0&&(x=""),m===void 0&&(m=""),S===void 0&&(S="&"),t=S,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(Tj,""),g=XS(m||x?"".concat(m," ").concat(x," { ").concat(b," }"):b);s.namespace&&(g=Qx(g,s.namespace));var v=[];return ja(g,QS(d.concat(KS(function(p){return v.push(p)})))),v};return f.hash=u.length?u.reduce(function(h,x){return x.name||Ui(15),Zr(h,x.name)},Hx).toString():"",f}var _j=new Ta,Lc=$j(),Kx=Q.createContext({shouldForwardProp:void 0,styleSheet:_j,stylis:Lc});Kx.Consumer;Q.createContext(void 0);function Ac(){return w.useContext(Kx)}var Zx=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Lc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cf(this,function(){throw Ui(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Lc),this.name+t.hash},e}(),Pj=function(e){return e>="A"&&e<="Z"};function xh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Pj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ev=function(e){return e==null||e===!1||e===""},tv=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!ev(i)&&(Array.isArray(i)&&i.isCss||wo(i)?r.push("".concat(xh(o),":"),i,";"):Pi(i)?r.push.apply(r,mo(mo(["".concat(o," {")],tv(i),!1),["}"],!1)):r.push("".concat(xh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ej||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kn(e,t,n,r){if(ev(e))return[];if(uf(e))return[".".concat(e.styledComponentId)];if(wo(e)){if(!wo(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Kn(o,t,n,r)}var i;return e instanceof Zx?n?(e.inject(n,r),[e.getName(r)]):[e]:Pi(e)?tv(e):Array.isArray(e)?Array.prototype.concat.apply(fl,e.map(function(s){return Kn(s,t,n,r)})):[e.toString()]}function nv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wo(n)&&!uf(n))return!1}return!0}var Nj=Wx(dl),Rj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nv(t),this.componentId=n,this.baseHash=Zr(Nj,n),this.baseStyle=r,Ta.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=gr(o,this.staticRulesId);else{var i=Ca(Kn(this.rules,t,n,r)),s=Ic(Zr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=gr(o,s),this.staticRulesId=s}else{for(var u=Zr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var h=Ca(Kn(f,t,n,r));u=Zr(u,h+d),c+=h}}if(c){var x=Ic(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),o=gr(o,x)}}return o},e}(),df=Q.createContext(void 0);df.Consumer;var iu={};function Ij(e,t,n){var r=uf(e),o=e,i=!ou(e),s=t.attrs,l=s===void 0?fl:s,u=t.componentId,c=u===void 0?function(y,j){var C=typeof y!="string"?"sc":ch(y);iu[C]=(iu[C]||0)+1;var T="".concat(C,"-").concat(lf(dl+C+iu[C]));return j?"".concat(j,"-").concat(T):T}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(y){return ou(y)?"styled.".concat(y):"Styled(".concat(sj(y),")")}(e):d,h=t.displayName&&t.componentId?"".concat(ch(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;m=function(y,j){return S(y,j)&&b(y,j)}}else m=S}var g=new Rj(n,h,r?o.componentStyle:void 0);function v(y,j){return function(C,T,k){var _=C.attrs,P=C.componentStyle,A=C.defaultProps,F=C.foldedComponentIds,R=C.styledComponentId,ee=C.target,ye=Q.useContext(df),U=Ac(),ne=C.shouldForwardProp||U.shouldForwardProp,N=Ux(T,ye,A)||yo,L=function(kn,ot,ln){for(var No,ar=De(De({},ot),{className:void 0,theme:ln}),$l=0;$l<kn.length;$l+=1){var Xi=wo(No=kn[$l])?No(ar):No;for(var Tn in Xi)ar[Tn]=Tn==="className"?gr(ar[Tn],Xi[Tn]):Tn==="style"?De(De({},ar[Tn]),Xi[Tn]):Xi[Tn]}return ot.className&&(ar.className=gr(ar.className,ot.className)),ar}(_,T,N),D=L.as||ee,K={};for(var re in L)L[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&L.theme===N||(re==="forwardedAs"?K.as=L.forwardedAs:ne&&!ne(re,D)||(K[re]=L[re]));var sr=function(kn,ot){var ln=Ac(),No=kn.generateAndInjectStyles(ot,ln.styleSheet,ln.stylis);return No}(P,L),At=gr(F,R);return sr&&(At+=" "+sr),L.className&&(At+=" "+L.className),K[ou(D)&&!Vx.has(D)?"class":"className"]=At,K.ref=k,w.createElement(D,K)}(p,y,j)}v.displayName=f;var p=Q.forwardRef(v);return p.attrs=x,p.componentStyle=g,p.displayName=f,p.shouldForwardProp=m,p.foldedComponentIds=r?gr(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(j){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var k=0,_=C;k<_.length;k++)zc(j,_[k],!0);return j}({},o.defaultProps,y):y}}),cf(p,function(){return".".concat(p.styledComponentId)}),i&&Jx(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function vh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var yh=function(e){return Object.assign(e,{isCss:!0})};function ff(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wo(e)||Pi(e))return yh(Kn(vh(fl,mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Kn(r):yh(Kn(vh(r,t)))}function Mc(e,t,n){if(n===void 0&&(n=yo),!t)throw Ui(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,ff.apply(void 0,mo([o],i,!1)))};return r.attrs=function(o){return Mc(e,t,De(De({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Mc(e,t,De(De({},n),o))},r}var rv=function(e){return Mc(Ij,e)},E=rv;Vx.forEach(function(e){E[e]=rv(e)});var zj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=nv(t),Ta.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ca(Kn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ta.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Lj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ff.apply(void 0,mo([e],t,!1)),o="sc-global-".concat(lf(JSON.stringify(r))),i=new zj(r,o),s=function(u){var c=Ac(),d=Q.useContext(df),f=Q.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),Q.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,h){if(i.isStatic)i.renderStyles(u,nj,d,h);else{var x=De(De({},c),{theme:Ux(c,f,s.defaultProps)});i.renderStyles(u,x,d,h)}}return Q.memo(s)}function an(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ca(ff.apply(void 0,mo([e],t,!1))),o=lf(r);return new Zx(o,r)}var ov={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wh=Q.createContext&&Q.createContext(ov),Aj=["attr","size","title"];function Mj(e,t){if(e==null)return{};var n=Dj(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function $a(){return $a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$a.apply(this,arguments)}function bh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function _a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bh(Object(n),!0).forEach(function(r){Oj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oj(e,t,n){return t=Fj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fj(e){var t=Bj(e,"string");return typeof t=="symbol"?t:t+""}function Bj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iv(e){return e&&e.map((t,n)=>Q.createElement(t.tag,_a({key:n},t.attr),iv(t.child)))}function We(e){return t=>Q.createElement(Uj,$a({attr:_a({},e.attr)},t),iv(e.child))}function Uj(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=Mj(e,Aj),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Q.createElement("svg",$a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:_a(_a({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Q.createElement("title",null,i),e.children)};return wh!==void 0?Q.createElement(wh.Consumer,null,n=>t(n)):t(ov)}function Vj(e){return We({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Hj(e){return We({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Wj(e){return We({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Gj(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function qj(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(e)}function pl(){return a.jsxs(Xj,{children:[a.jsxs(Jj,{children:[a.jsxs(Yj,{children:[a.jsx("h3",{children:"Contáctanos"}),a.jsxs("p",{children:[a.jsx(qj,{})," "]}),a.jsxs("p",{children:[a.jsx(Gj,{})," cdcmonteros@gmail.com"]})]}),a.jsxs(Qj,{children:[a.jsx("h3",{children:"Dirección"}),a.jsx("p",{children:"República de Líbano entre Crisóstomo Álvarez y Juan Bautista Alberdi"}),a.jsx("p",{children:"Monteros, Tucumán, Argentina"})]}),a.jsxs(Kj,{children:[a.jsx("h3",{children:"Síguenos"}),a.jsxs(Zj,{children:[a.jsx("a",{href:"https://www.facebook.com/CentroCristianoRiosdeVida",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Vj,{})}),a.jsx("a",{href:"https://www.instagram.com/riosdevidamonteros/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Hj,{})}),a.jsx("a",{href:"https://www.youtube.com/channel/UCA1NOnnsvSCFHGbV3JRNnNw?fbclid=IwZXh0bgNhZW0CMTAAAR6uhpBCZ7Baw92USbKovxcVjTUClnsLtI-fimWNJywkZj429oeriCE-yRyj_w_aem_2pjkpCn9A8_MR5s8uRlBgQ",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Wj,{})})]})]})]}),a.jsx(eE,{children:a.jsx("iframe",{title:"Ubicación",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4510185355699!2d-65.5108781075702!3d-27.162454067142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942235328d23ecd7%3A0xfd18499085cb2d3!2sCentro%20Cristiano%20R%C3%ADos%20de%20Vida!5e0!3m2!1ses-419!2sar!4v1734071122347!5m2!1ses-419!2sar",width:"100%",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),a.jsx(tE,{children:a.jsx("p",{children:"© 2024 Ministerio Ríos de Vida. Todos los derechos reservados."})})]})}const Xj=E.footer`
  background: #0a285c;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`,Jj=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  border-bottom: 1px solid #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,Yj=E.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,Qj=E.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`,Kj=E.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`,Zj=E.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 24px;
    color: #fff;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`,eE=E.div`
  margin: 20px 0;
  iframe {
    border-radius: 10px;
  }
`,tE=E.div`
  padding: 10px;
  background: #1e3c72;

  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
  }
`,nE=()=>{const[e,t]=w.useState(!1),n=w.useRef(null);return w.useEffect(()=>{const r=()=>{if(n.current){const o=n.current.getBoundingClientRect().top,i=window.innerHeight;o<i-100&&t(!0)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),a.jsx(iE,{ref:n,children:a.jsxs(pf,{isVisible:e,children:[a.jsx(sE,{isVisible:e,children:"Bienvenidos a Casa"}),a.jsx(aE,{isVisible:e,children:"Nos complace recibirte en nuestro Centro Cristiano. Estamos aquí para ayudarte a crecer en tu fe y experimentar una comunidad amorosa y acogedora."})]})})},rE=an`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,oE=an`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,iE=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
`,pf=E.div`
  position: relative;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 1%, transparent 10%),
                radial-gradient(circle, rgba(255, 255, 255, 0.3) 1%, transparent 10%),
                radial-gradient(circle, rgba(255, 255, 255, 0.15) 1%, transparent 10%);
    background-position: -50px -50px, -80px -80px, -120px -120px;
    background-size: 50px 50px;
    opacity: 0.3;
    z-index: -1;
    animation: dripEffect 2s infinite linear;
  }

  @keyframes dripEffect {
    0% { background-position: -50px -50px, -80px -80px, -120px -120px; }
    100% { background-position: 100% 100%, 100% 100%, 100% 100%; }
  }

  @media (max-width: 400px) {
    padding: 1rem;
  }
`,sE=E.h1`
  font-size: 4rem;
  color: #0077b6;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?rE:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3);

  ${pf}:hover & {
    color: white;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`,aE=E.p`
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 600px;
  margin-top: 1rem;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?oE:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;

  ${pf}:hover & {
    color: #00a0f6;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`,hl=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1);w.useEffect(()=>{const s=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=()=>r(!n),i=s=>{const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})};return a.jsxs(lE,{scrolled:e,children:[a.jsx(uE,{scrolled:e,children:a.jsx(V,{to:"/",children:"Ríos de Vida"})}),a.jsxs(cE,{onClick:o,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs(dE,{menuOpen:n,children:[a.jsx(Dr,{as:"button",onClick:()=>i("grupoDeVida"),scrolled:e,children:"Grupos"}),a.jsx(Dr,{as:"button",onClick:()=>i("servicios"),scrolled:e,children:"Servicios"}),a.jsx(Dr,{children:a.jsx(V,{to:"/eventos",children:"Eventos"})}),a.jsx(Dr,{children:a.jsx(V,{to:"/masSobreNosotros",children:"Mas Sobre Nosotros"})}),a.jsx(Dr,{children:a.jsx(V,{to:"/notas",children:"Notas"})}),a.jsx(Dr,{children:a.jsx(V,{to:"/pascuas",children:"Pascuas"})}),a.jsx(fE,{children:a.jsx(V,{to:"/login",children:"Login"})})]})]})},lE=E.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({scrolled:e})=>e?"#ffffff83":"transparent"};
  color: ${({scrolled:e})=>e?"#333333":"#ffffff"};
  box-shadow: ${({scrolled:e})=>e?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 1000;
`,uE=E.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${({scrolled:e})=>e?"#333333":"#ffffff"};
  }
`,cE=E.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  
  span {
    width: 25px;
    height: 3px;
    background-color: ${({scrolled:e})=>e?"#333":"#fff"};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`,dE=E.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0; /* Cambiado para alinear al lado derecho */
    width: 50%; /* Ajusta este valor para controlar el ancho del menú desplegable */
    background-color: #6da7fc9a;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    display: ${({menuOpen:e})=>e?"flex":"none"};
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra para diferenciar el menú */
  }
`,Dr=E.button`
  background: none;
  border: none;
  color: ${({scrolled:e})=>e?"#333333":"#ffffff"};
  font-weight: 500;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &:hover {
    color: #0077b6;
  }
`,fE=E.div`
  padding: 0.5rem 1rem;
  background-color: ${({scrolled:e})=>e?"#0077b6":"#00d0ff"};
  color: ${({scrolled:e})=>e?"#ffffff":"#0a3a57"};
  border-radius: 5px;
  font-weight: bold;
  
  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${({scrolled:e})=>e?"#005f8c":"#0077b6"};
  }
`,pE=an`
  0% { transform: translateX(-150%); }
  50% { transform: translateX(150%); }
  100% { transform: translateX(-150%); }
`,hE=E.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #2a4c9c 0%, #1D3C5A 100%);
  overflow: hidden;
  z-index: -1;
`,mE=E.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  width: ${({size:e})=>e||"20px"};
  height: ${({size:e})=>e||"20px"};
  border-radius: 50%;
  animation: ${pE} ${({duration:e})=>e||"15s"} ease-in-out infinite;
  bottom: ${({bottom:e})=>e||"10%"};
  left: ${({left:e})=>e||"0%"};
  opacity: ${({opacity:e})=>e||.8};
`,Vi=()=>{const e=Array.from({length:50},(t,n)=>a.jsx(mE,{bottom:`${Math.random()*100}%`,left:`${Math.random()*100}%`,size:`${Math.random()*25+10}px`,duration:`${Math.random()*5+5}s`,opacity:Math.random()*.5+.3},n));return a.jsx(hE,{children:e})};var Ms={},Dc;Object.defineProperty(Ms,"__esModule",{value:!0});var Go=a,Jt=w,Ft=function(){return Ft=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ft.apply(this,arguments)};function gE(e,t){var n,r;switch(t.type){case"TYPE":return Ft(Ft({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return Ft(Ft({},e),{speed:t.payload});case"DELETE":return Ft(Ft({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return Ft(Ft({},e),{count:e.count+1});default:return e}}var Sh=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.onLoopDone,h=e.onType,x=e.onDelete,m=e.onDelay,S=Jt.useReducer(gE,{speed:s,text:"",count:0}),b=S[0],g=b.speed,v=b.text,p=b.count,y=S[1],j=Jt.useRef(0),C=Jt.useRef(!1),T=Jt.useRef(!1),k=Jt.useRef(!1),_=Jt.useRef(!1),P=Jt.useCallback(function(){var A=p%n.length,F=n[A];T.current?(y({type:"DELETE",payload:F,speed:u}),v===""&&(T.current=!1,y({type:"COUNT"}))):(y({type:"TYPE",payload:F,speed:s}),k.current=!0,v===F&&(y({type:"DELAY",payload:d}),k.current=!1,_.current=!0,setTimeout(function(){_.current=!1,T.current=!0},d),o>0&&(j.current+=1,j.current/n.length===o&&(_.current=!1,C.current=!0)))),k.current&&h&&h(j.current),T.current&&x&&x(),_.current&&m&&m()},[p,d,u,o,s,n,v,h,x,m]);return Jt.useEffect(function(){var A=setTimeout(P,g);return C.current&&clearTimeout(A),function(){return clearTimeout(A)}},[P,g]),Jt.useEffect(function(){f&&C.current&&f()},[f]),[v,{isType:k.current,isDelay:_.current,isDelete:T.current,isDone:C.current}]},xE="styles-module_blinkingCursor__yugAC",vE="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var jh=Jt.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,o=r===void 0?"|":r,i=e.cursorColor,s=i===void 0?"inherit":i;return Go.jsx("span",Ft({style:{color:s},className:"".concat(xE," ").concat(n?vE:"")},{children:o}))});Ms.Cursor=jh,Dc=Ms.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.cursor,h=f!==void 0&&f,x=e.cursorStyle,m=x===void 0?"|":x,S=e.cursorColor,b=S===void 0?"inherit":S,g=e.cursorBlinking,v=g===void 0||g,p=e.onLoopDone,y=e.onType,j=e.onDelay,C=e.onDelete,T=Sh({words:n,loop:o,typeSpeed:s,deleteSpeed:u,delaySpeed:d,onLoopDone:p,onType:y,onDelay:j,onDelete:C})[0];return Go.jsxs(Go.Fragment,{children:[Go.jsx("span",{children:T}),h&&Go.jsx(jh,{cursorStyle:m,cursorColor:b,cursorBlinking:v})]})},Ms.useTypewriter=Sh;const yE="https://Bravo938.github.io/RiosDeVida.pages/assets/iglefondo-BN1oqW4x.mp4",wE=`
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,bE=Lj`${wE}`,SE=()=>{const[e,t]=w.useState(!1),n=()=>t(!0);return a.jsxs(a.Fragment,{children:[a.jsx(bE,{}),a.jsxs(jE,{children:[a.jsx(EE,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:n,style:{opacity:e?1:0},children:a.jsx("source",{src:yE,type:"video/mp4"})}),a.jsx(CE,{style:{display:e?"none":"block"}}),a.jsxs(kE,{children:[a.jsx(TE,{children:a.jsx(Dc,{words:["Centro Cristiano Rios De Vida"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:3e3})}),a.jsx($E,{children:'El Centro Cristiano "Ríos de Vida" tiene la misión de predicar la Palabra de Dios cumpliendo con el mandato de Cristo de llevar su mensaje a todas las naciones.'}),a.jsx(_E,{children:a.jsx(Dc,{words:["Jesús Dijo"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:1e3})}),a.jsx(PE,{children:"Jesús se puso en pie y alzó la voz, diciendo: Si alguno tiene sed, venga a mí y beba. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. (Juan 7:37-38)"})]})]})]})},jE=E.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;

  @media (max-width: 768px) {
    padding-left: 3%;
  }

  @media (max-width: 480px) {
    padding-left: 2%;
  }
`,EE=E.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;//acorte el bot un poco podria de 3600
  object-fit: cover;
  z-index: -1;
  transition: opacity 0.5s ease;
`,CE=E.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`,kE=E.div`
  position: relative;
  text-align: left;
  color: #ffffff;
  padding: 0 2rem;
  max-width: 800px;
  opacity: 0.95;
  

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`,TE=E.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #00d0ff;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
`,$E=E.p`
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 2rem;
  animation: slideInFromLeft 0.8s ease forwards;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,_E=E.h2`
  font-size: 2rem;
  color: #00d0ff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
`,PE=E.p`
  font-size: 1.25rem;
  color: #ffffff;
  animation: slideInFromLeft 0.8s ease forwards;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;function Eh(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function hf(e,t){e===void 0&&(e={}),t===void 0&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Eh(t[r])&&Eh(e[r])&&Object.keys(t[r]).length>0&&hf(e[r],t[r])})}const sv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function on(){const e=typeof document<"u"?document:{};return hf(e,sv),e}const NE={document:sv,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ge(){const e=typeof window<"u"?window:{};return hf(e,NE),e}function RE(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function IE(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Oc(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function jr(){return Date.now()}function zE(e){const t=Ge();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function LE(e,t){t===void 0&&(t="x");const n=Ge();let r,o,i;const s=zE(e);return n.WebKitCSSMatrix?(o=s.transform||s.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(l=>l.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(o==="none"?"":o)):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=i.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?o=i.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function hs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function AE(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function pt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!AE(r)){const o=Object.keys(Object(r)).filter(i=>t.indexOf(i)<0);for(let i=0,s=o.length;i<s;i+=1){const l=o[i],u=Object.getOwnPropertyDescriptor(r,l);u!==void 0&&u.enumerable&&(hs(e[l])&&hs(r[l])?r[l].__swiper__?e[l]=r[l]:pt(e[l],r[l]):!hs(e[l])&&hs(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:pt(e[l],r[l])):e[l]=r[l])}}}return e}function ms(e,t,n){e.style.setProperty(t,n)}function av(e){let{swiper:t,targetPosition:n,side:r}=e;const o=Ge(),i=-t.translate;let s=null,l;const u=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const c=n>i?"next":"prev",d=(h,x)=>c==="next"&&h>=x||c==="prev"&&h<=x,f=()=>{l=new Date().getTime(),s===null&&(s=l);const h=Math.max(Math.min((l-s)/u,1),0),x=.5-Math.cos(h*Math.PI)/2;let m=i+x*(n-i);if(d(m,n)&&(m=n),t.wrapperEl.scrollTo({[r]:m}),d(m,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:m})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(f)};f()}function gn(e,t){t===void 0&&(t="");const n=Ge(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(o=>o.matches(t)):r}function ME(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function DE(e,t){const n=Ge();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=ME(e,t))),r}function Pa(e){try{console.warn(e);return}catch{}}function Fc(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:RE(t)),n}function OE(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function FE(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Fn(e,t){return Ge().getComputedStyle(e,null).getPropertyValue(t)}function Ch(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function BE(e,t){const n=[];let r=e.parentElement;for(;r;)n.push(r),r=r.parentElement;return n}function su(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function kh(e,t,n){const r=Ge();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let au;function UE(){const e=Ge(),t=on();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function lv(){return au||(au=UE()),au}let lu;function VE(e){let{userAgent:t}=e===void 0?{}:e;const n=lv(),r=Ge(),o=r.navigator.platform,i=t||r.navigator.userAgent,s={ios:!1,android:!1},l=r.screen.width,u=r.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/);let d=i.match(/(iPad).*OS\s([\d_]+)/);const f=i.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),x=o==="Win32";let m=o==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&m&&n.touch&&S.indexOf(`${l}x${u}`)>=0&&(d=i.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),c&&!x&&(s.os="android",s.android=!0),(d||h||f)&&(s.os="ios",s.ios=!0),s}function uv(e){return e===void 0&&(e={}),lu||(lu=VE(e)),lu}let uu;function HE(){const e=Ge(),t=uv();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[u,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=u<16||u===16&&c<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),i=r(),s=i||o&&t.ios;return{isSafari:n||i,needPerspectiveFix:n,need3dFix:s,isWebView:o}}function cv(){return uu||(uu=HE()),uu}function WE(e){let{swiper:t,on:n,emit:r}=e;const o=Ge();let i=null,s=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},u=()=>{!t||t.destroyed||!t.initialized||(i=new ResizeObserver(f=>{s=o.requestAnimationFrame(()=>{const{width:h,height:x}=t;let m=h,S=x;f.forEach(b=>{let{contentBoxSize:g,contentRect:v,target:p}=b;p&&p!==t.el||(m=v?v.width:(g[0]||g).inlineSize,S=v?v.height:(g[0]||g).blockSize)}),(m!==h||S!==x)&&l()})}),i.observe(t.el))},c=()=>{s&&o.cancelAnimationFrame(s),i&&i.unobserve&&t.el&&(i.unobserve(t.el),i=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){u();return}o.addEventListener("resize",l),o.addEventListener("orientationchange",d)}),n("destroy",()=>{c(),o.removeEventListener("resize",l),o.removeEventListener("orientationchange",d)})}function GE(e){let{swiper:t,extendParams:n,on:r,emit:o}=e;const i=[],s=Ge(),l=function(d,f){f===void 0&&(f={});const h=s.MutationObserver||s.WebkitMutationObserver,x=new h(m=>{if(t.__preventObserver__)return;if(m.length===1){o("observerUpdate",m[0]);return}const S=function(){o("observerUpdate",m[0])};s.requestAnimationFrame?s.requestAnimationFrame(S):s.setTimeout(S,0)});x.observe(d,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),i.push(x)},u=()=>{if(t.params.observer){if(t.params.observeParents){const d=BE(t.hostEl);for(let f=0;f<d.length;f+=1)l(d[f])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},c=()=>{i.forEach(d=>{d.disconnect()}),i.splice(0,i.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",u),r("destroy",c)}var qE={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const o=n?"unshift":"push";return e.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][o](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function o(){r.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];t.apply(r,s)}return o.__emitterProxy=t,r.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((o,i)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[r].splice(i,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return typeof i[0]=="string"||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),r=e):(t=i[0].events,n=i[0].data,r=i[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(u=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[u,...n])}),e.eventsListeners&&e.eventsListeners[u]&&e.eventsListeners[u].forEach(c=>{c.apply(r,n)})}),e}};function XE(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Fn(r,"padding-left")||0,10)-parseInt(Fn(r,"padding-right")||0,10),n=n-parseInt(Fn(r,"padding-top")||0,10)-parseInt(Fn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function JE(){const e=this;function t(P,A){return parseFloat(P.getPropertyValue(e.getDirectionLabel(A))||0)}const n=e.params,{wrapperEl:r,slidesEl:o,size:i,rtlTranslate:s,wrongRTL:l}=e,u=e.virtual&&n.virtual.enabled,c=u?e.virtual.slides.length:e.slides.length,d=gn(o,`.${e.params.slideClass}, swiper-slide`),f=u?e.virtual.slides.length:d.length;let h=[];const x=[],m=[];let S=n.slidesOffsetBefore;typeof S=="function"&&(S=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const g=e.snapGrid.length,v=e.slidesGrid.length;let p=n.spaceBetween,y=-S,j=0,C=0;if(typeof i>"u")return;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*i:typeof p=="string"&&(p=parseFloat(p)),e.virtualSize=-p,d.forEach(P=>{s?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ms(r,"--swiper-centered-offset-before",""),ms(r,"--swiper-centered-offset-after",""));const T=n.grid&&n.grid.rows>1&&e.grid;T?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let k;const _=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(P=>typeof n.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<f;P+=1){k=0;let A;if(d[P]&&(A=d[P]),T&&e.grid.updateSlide(P,A,d),!(d[P]&&Fn(A,"display")==="none")){if(n.slidesPerView==="auto"){_&&(d[P].style[e.getDirectionLabel("width")]="");const F=getComputedStyle(A),R=A.style.transform,ee=A.style.webkitTransform;if(R&&(A.style.transform="none"),ee&&(A.style.webkitTransform="none"),n.roundLengths)k=e.isHorizontal()?kh(A,"width"):kh(A,"height");else{const ye=t(F,"width"),U=t(F,"padding-left"),ne=t(F,"padding-right"),N=t(F,"margin-left"),L=t(F,"margin-right"),D=F.getPropertyValue("box-sizing");if(D&&D==="border-box")k=ye+N+L;else{const{clientWidth:K,offsetWidth:re}=A;k=ye+U+ne+N+L+(re-K)}}R&&(A.style.transform=R),ee&&(A.style.webkitTransform=ee),n.roundLengths&&(k=Math.floor(k))}else k=(i-(n.slidesPerView-1)*p)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),d[P]&&(d[P].style[e.getDirectionLabel("width")]=`${k}px`);d[P]&&(d[P].swiperSlideSize=k),m.push(k),n.centeredSlides?(y=y+k/2+j/2+p,j===0&&P!==0&&(y=y-i/2-p),P===0&&(y=y-i/2-p),Math.abs(y)<1/1e3&&(y=0),n.roundLengths&&(y=Math.floor(y)),C%n.slidesPerGroup===0&&h.push(y),x.push(y)):(n.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&h.push(y),x.push(y),y=y+k+p),e.virtualSize+=k+p,j=k,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+b,s&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+p}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+p}px`),T&&e.grid.updateWrapperSize(k,h),!n.centeredSlides){const P=[];for(let A=0;A<h.length;A+=1){let F=h[A];n.roundLengths&&(F=Math.floor(F)),h[A]<=e.virtualSize-i&&P.push(F)}h=P,Math.floor(e.virtualSize-i)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-i)}if(u&&n.loop){const P=m[0]+p;if(n.slidesPerGroup>1){const A=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),F=P*n.slidesPerGroup;for(let R=0;R<A;R+=1)h.push(h[h.length-1]+F)}for(let A=0;A<e.virtual.slidesBefore+e.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+P),x.push(x[x.length-1]+P),e.virtualSize+=P}if(h.length===0&&(h=[0]),p!==0){const P=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");d.filter((A,F)=>!n.cssMode||n.loop?!0:F!==d.length-1).forEach(A=>{A.style[P]=`${p}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let P=0;m.forEach(F=>{P+=F+(p||0)}),P-=p;const A=P>i?P-i:0;h=h.map(F=>F<=0?-S:F>A?A+b:F)}if(n.centerInsufficientSlides){let P=0;m.forEach(F=>{P+=F+(p||0)}),P-=p;const A=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(P+A<i){const F=(i-P-A)/2;h.forEach((R,ee)=>{h[ee]=R-F}),x.forEach((R,ee)=>{x[ee]=R+F})}}if(Object.assign(e,{slides:d,snapGrid:h,slidesGrid:x,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ms(r,"--swiper-centered-offset-before",`${-h[0]}px`),ms(r,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const P=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(F=>F+P),e.slidesGrid=e.slidesGrid.map(F=>F+A)}if(f!==c&&e.emit("slidesLengthChange"),h.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),x.length!==v&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!u&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const P=`${n.containerModifierClass}backface-hidden`,A=e.el.classList.contains(P);f<=n.maxBackfaceHiddenSlides?A||e.el.classList.add(P):A&&e.el.classList.remove(P)}}function YE(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let o=0,i;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const l=t.activeIndex+i;if(l>t.slides.length&&!r)break;n.push(s(l))}else n.push(s(t.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const l=n[i].offsetHeight;o=l>o?l:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function QE(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Th=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function KE(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:o,snapGrid:i}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;o&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let u=0;u<r.length;u+=1){const c=r[u];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(s+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),h=(s-i[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),x=-(s-d),m=x+t.slidesSizesGrid[u],S=x>=0&&x<=t.size-t.slidesSizesGrid[u],b=x>=0&&x<t.size-1||m>1&&m<=t.size||x<=0&&m>=t.size;b&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(u)),Th(c,b,n.slideVisibleClass),Th(c,S,n.slideFullyVisibleClass),c.progress=o?-f:f,c.originalProgress=o?-h:h}}function ZE(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:i,isEnd:s,progressLoop:l}=t;const u=i,c=s;if(r===0)o=0,i=!0,s=!0;else{o=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;i=d||o<=0,s=f||o>=1,d&&(o=0),f&&(o=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[d],x=t.slidesGrid[f],m=t.slidesGrid[t.slidesGrid.length-1],S=Math.abs(e);S>=h?l=(S-h)/m:l=(S+m-x)/m,l>1&&(l-=1)}Object.assign(t,{progress:o,progressLoop:l,isBeginning:i,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),i&&!u&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(u&&!i||c&&!s)&&t.emit("fromEdge"),t.emit("progress",o)}const cu=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function eC(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:o}=e,i=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,l=f=>gn(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let u,c,d;if(i)if(n.loop){let f=o-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),u=l(`[data-swiper-slide-index="${f}"]`)}else u=l(`[data-swiper-slide-index="${o}"]`);else s?(u=t.find(f=>f.column===o),d=t.find(f=>f.column===o+1),c=t.find(f=>f.column===o-1)):u=t[o];u&&(s||(d=FE(u,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=OE(u,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{cu(f,f===u,n.slideActiveClass),cu(f,f===d,n.slideNextClass),cu(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Ds=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let o=r.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(r.shadowRoot?o=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(o=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},du=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Bc=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=o,l=[s-t];l.push(...Array.from({length:t}).map((u,c)=>s+r+c)),e.slides.forEach((u,c)=>{l.includes(u.column)&&du(e,c)});return}const i=o+r-1;if(e.params.rewind||e.params.loop)for(let s=o-t;s<=i+t;s+=1){const l=(s%n+n)%n;(l<o||l>i)&&du(e,l)}else for(let s=Math.max(o-t,0);s<=Math.min(i+t,n-1);s+=1)s!==o&&(s>i||s<o)&&du(e,s)};function tC(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let o;for(let i=0;i<t.length;i+=1)typeof t[i+1]<"u"?r>=t[i]&&r<t[i+1]-(t[i+1]-t[i])/2?o=i:r>=t[i]&&r<t[i+1]&&(o=i+1):r>=t[i]&&(o=i);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function nC(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:o,activeIndex:i,realIndex:s,snapIndex:l}=t;let u=e,c;const d=x=>{let m=x-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof u>"u"&&(u=tC(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const x=Math.min(o.slidesPerGroupSkip,u);c=x+Math.floor((u-x)/o.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),u===i&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(u===i&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(u);return}const f=t.grid&&o.grid&&o.grid.rows>1;let h;if(t.virtual&&o.virtual.enabled&&o.loop)h=d(u);else if(f){const x=t.slides.find(S=>S.column===u);let m=parseInt(x.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(x),0)),h=Math.floor(m/o.grid.rows)}else if(t.slides[u]){const x=t.slides[u].getAttribute("data-swiper-slide-index");x?h=parseInt(x,10):h=u}else h=u;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:s,realIndex:h,previousIndex:i,activeIndex:u}),t.initialized&&Bc(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function rC(e,t){const n=this,r=n.params;let o=e.closest(`.${r.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!o&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(o=l)});let i=!1,s;if(o){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===o){i=!0,s=l;break}}if(o&&i)n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var oC={updateSize:XE,updateSlides:JE,updateAutoHeight:YE,updateSlidesOffset:QE,updateSlidesProgress:KE,updateProgress:ZE,updateSlidesClasses:eC,updateActiveIndex:nC,updateClickedSlide:rC};function iC(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:o,wrapperEl:i}=t;if(n.virtualTranslate)return r?-o:o;if(n.cssMode)return o;let s=LE(i,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function sC(e,t){const n=this,{rtlTranslate:r,params:o,wrapperEl:i,progress:s}=n;let l=0,u=0;const c=0;n.isHorizontal()?l=r?-e:e:u=e,o.roundLengths&&(l=Math.floor(l),u=Math.floor(u)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:u,o.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-u:o.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():u-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${l}px, ${u}px, ${c}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function aC(){return-this.snapGrid[0]}function lC(){return-this.snapGrid[this.snapGrid.length-1]}function uC(e,t,n,r,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const i=this,{params:s,wrapperEl:l}=i;if(i.animating&&s.preventInteractionOnTransition)return!1;const u=i.minTranslate(),c=i.maxTranslate();let d;if(r&&e>u?d=u:r&&e<c?d=c:d=e,i.updateProgress(d),s.cssMode){const f=i.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-d;else{if(!i.support.smoothScroll)return av({swiper:i,targetPosition:-d,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(i.setTransition(0),i.setTranslate(d),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(d),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(h){!i||i.destroyed||h.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var cC={getTranslate:iC,setTranslate:sC,minTranslate:aC,maxTranslate:lC,translateTo:uC};function dC(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function dv(e){let{swiper:t,runCallbacks:n,direction:r,step:o}=e;const{activeIndex:i,previousIndex:s}=t;let l=r;if(l||(i>s?l="next":i<s?l="prev":l="reset"),t.emit(`transition${o}`),n&&i!==s){if(l==="reset"){t.emit(`slideResetTransition${o}`);return}t.emit(`slideChangeTransition${o}`),l==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`)}}function fC(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),dv({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function pC(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),dv({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var hC={setTransition:dC,transitionStart:fC,transitionEnd:pC};function mC(e,t,n,r,o){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let s=e;s<0&&(s=0);const{params:l,snapGrid:u,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:h,wrapperEl:x,enabled:m}=i;if(!m&&!r&&!o||i.destroyed||i.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=i.params.speed);const S=Math.min(i.params.slidesPerGroupSkip,s);let b=S+Math.floor((s-S)/i.params.slidesPerGroup);b>=u.length&&(b=u.length-1);const g=-u[b];if(l.normalizeSlideIndex)for(let T=0;T<c.length;T+=1){const k=-Math.floor(g*100),_=Math.floor(c[T]*100),P=Math.floor(c[T+1]*100);typeof c[T+1]<"u"?k>=_&&k<P-(P-_)/2?s=T:k>=_&&k<P&&(s=T+1):k>=_&&(s=T)}if(i.initialized&&s!==f&&(!i.allowSlideNext&&(h?g>i.translate&&g>i.minTranslate():g<i.translate&&g<i.minTranslate())||!i.allowSlidePrev&&g>i.translate&&g>i.maxTranslate()&&(f||0)!==s))return!1;s!==(d||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(g);let v;s>f?v="next":s<f?v="prev":v="reset";const p=i.virtual&&i.params.virtual.enabled;if(!(p&&o)&&(h&&-g===i.translate||!h&&g===i.translate))return i.updateActiveIndex(s),l.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),l.effect!=="slide"&&i.setTranslate(g),v!=="reset"&&(i.transitionStart(n,v),i.transitionEnd(n,v)),!1;if(l.cssMode){const T=i.isHorizontal(),k=h?g:-g;if(t===0)p&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),p&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{x[T?"scrollLeft":"scrollTop"]=k})):x[T?"scrollLeft":"scrollTop"]=k,p&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return av({swiper:i,targetPosition:k,side:T?"left":"top"}),!0;x.scrollTo({[T?"left":"top"]:k,behavior:"smooth"})}return!0}const C=cv().isSafari;return p&&!o&&C&&i.isElement&&i.virtual.update(!1,!1,s),i.setTransition(t),i.setTranslate(g),i.updateActiveIndex(s),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(n,v),t===0?i.transitionEnd(n,v):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(k){!i||i.destroyed||k.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,v))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function gC(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const i=o.grid&&o.params.grid&&o.params.grid.rows>1;let s=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)s=s+o.virtual.slidesBefore;else{let l;if(i){const h=s*o.params.grid.rows;l=o.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===h).column}else l=o.getSlideIndexByData(s);const u=i?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:c}=o.params;let d=o.params.slidesPerView;d==="auto"?d=o.slidesPerViewDynamic():(d=Math.ceil(parseFloat(o.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let f=u-l<d;if(c&&(f=f||l<Math.ceil(d/2)),r&&c&&o.params.slidesPerView!=="auto"&&!i&&(f=!1),f){const h=c?l<o.activeIndex?"prev":"next":l-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?l+1:l-u+1,slideRealIndex:h==="next"?o.realIndex:void 0})}if(i){const h=s*o.params.grid.rows;s=o.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===h).column}else s=o.getSlideIndexByData(s)}return requestAnimationFrame(()=>{o.slideTo(s,t,n,r)}),o}function xC(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:o,params:i,animating:s}=r;if(!o||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const u=r.activeIndex<i.slidesPerGroupSkip?1:l,c=r.virtual&&i.virtual.enabled;if(i.loop){if(s&&!c&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+u,e,t,n)}),!0}return i.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+u,e,t,n)}function vC(e,t,n){t===void 0&&(t=!0);const r=this,{params:o,snapGrid:i,slidesGrid:s,rtlTranslate:l,enabled:u,animating:c}=r;if(!u||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&o.virtual.enabled;if(o.loop){if(c&&!d&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=l?r.translate:-r.translate;function h(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const x=h(f),m=i.map(v=>h(v)),S=o.freeMode&&o.freeMode.enabled;let b=i[m.indexOf(x)-1];if(typeof b>"u"&&(o.cssMode||S)){let v;i.forEach((p,y)=>{x>=p&&(v=y)}),typeof v<"u"&&(b=S?i[v]:i[v>0?v-1:v])}let g=0;if(typeof b<"u"&&(g=s.indexOf(b),g<0&&(g=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),o.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(o.loop&&r.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,e,t,n)}),!0;return r.slideTo(g,e,t,n)}function yC(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function wC(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let i=o.activeIndex;const s=Math.min(o.params.slidesPerGroupSkip,i),l=s+Math.floor((i-s)/o.params.slidesPerGroup),u=o.rtlTranslate?o.translate:-o.translate;if(u>=o.snapGrid[l]){const c=o.snapGrid[l],d=o.snapGrid[l+1];u-c>(d-c)*r&&(i+=o.params.slidesPerGroup)}else{const c=o.snapGrid[l-1],d=o.snapGrid[l];u-c<=(d-c)*r&&(i-=o.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,o.slidesGrid.length-1),o.slideTo(i,e,t,n)}function bC(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.clickedIndex,i;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?o<e.loopedSlides-r/2||o>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),o=e.getSlideIndex(gn(n,`${s}[data-swiper-slide-index="${i}"]`)[0]),Oc(()=>{e.slideTo(o)})):e.slideTo(o):o>e.slides.length-r?(e.loopFix(),o=e.getSlideIndex(gn(n,`${s}[data-swiper-slide-index="${i}"]`)[0]),Oc(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var SC={slideTo:mC,slideToLoop:gC,slideNext:xC,slidePrev:vC,slideReset:yC,slideToClosest:wC,slideToClickedSlide:bC};function jC(e,t){const n=this,{params:r,slidesEl:o}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const i=()=>{gn(o,`.${r.slideClass}, swiper-slide`).forEach((h,x)=>{h.setAttribute("data-swiper-slide-index",x)})},s=n.grid&&r.grid&&r.grid.rows>1,l=r.slidesPerGroup*(s?r.grid.rows:1),u=n.slides.length%l!==0,c=s&&n.slides.length%r.grid.rows!==0,d=f=>{for(let h=0;h<f;h+=1){const x=n.isElement?Fc("swiper-slide",[r.slideBlankClass]):Fc("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(x)}};if(u){if(r.loopAddBlankSlides){const f=l-n.slides.length%l;d(f),n.recalcSlides(),n.updateSlides()}else Pa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(c){if(r.loopAddBlankSlides){const f=r.grid.rows-n.slides.length%r.grid.rows;d(f),n.recalcSlides(),n.updateSlides()}else Pa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();n.loopFix({slideRealIndex:e,direction:r.centeredSlides?void 0:"next",initial:t})}function EC(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:o,activeSlideIndex:i,initial:s,byController:l,byMousewheel:u}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:h,slidesEl:x,params:m}=c,{centeredSlides:S,initialSlide:b}=m;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&m.virtual.enabled){n&&(!m.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):m.centeredSlides&&c.snapIndex<m.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=h,c.emit("loopFix");return}let g=m.slidesPerView;g==="auto"?g=c.slidesPerViewDynamic():(g=Math.ceil(parseFloat(m.slidesPerView,10)),S&&g%2===0&&(g=g+1));const v=m.slidesPerGroupAuto?g:m.slidesPerGroup;let p=v;p%v!==0&&(p+=v-p%v),p+=m.loopAdditionalSlides,c.loopedSlides=p;const y=c.grid&&m.grid&&m.grid.rows>1;d.length<g+p||c.params.effect==="cards"&&d.length<g+p*2?Pa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&m.grid.fill==="row"&&Pa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const j=[],C=[],T=y?Math.ceil(d.length/m.grid.rows):d.length,k=s&&T-b<g&&!S;let _=k?b:c.activeIndex;typeof i>"u"?i=c.getSlideIndex(d.find(U=>U.classList.contains(m.slideActiveClass))):_=i;const P=r==="next"||!r,A=r==="prev"||!r;let F=0,R=0;const ye=(y?d[i].column:i)+(S&&typeof o>"u"?-g/2+.5:0);if(ye<p){F=Math.max(p-ye,v);for(let U=0;U<p-ye;U+=1){const ne=U-Math.floor(U/T)*T;if(y){const N=T-ne-1;for(let L=d.length-1;L>=0;L-=1)d[L].column===N&&j.push(L)}else j.push(T-ne-1)}}else if(ye+g>T-p){R=Math.max(ye-(T-p*2),v),k&&(R=Math.max(R,g-T+b+1));for(let U=0;U<R;U+=1){const ne=U-Math.floor(U/T)*T;y?d.forEach((N,L)=>{N.column===ne&&C.push(L)}):C.push(ne)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<g+p*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),j.includes(i)&&j.splice(j.indexOf(i),1)),A&&j.forEach(U=>{d[U].swiperLoopMoveDOM=!0,x.prepend(d[U]),d[U].swiperLoopMoveDOM=!1}),P&&C.forEach(U=>{d[U].swiperLoopMoveDOM=!0,x.append(d[U]),d[U].swiperLoopMoveDOM=!1}),c.recalcSlides(),m.slidesPerView==="auto"?c.updateSlides():y&&(j.length>0&&A||C.length>0&&P)&&c.slides.forEach((U,ne)=>{c.grid.updateSlide(ne,U,c.slides)}),m.watchSlidesProgress&&c.updateSlidesOffset(),n){if(j.length>0&&A){if(typeof t>"u"){const U=c.slidesGrid[_],N=c.slidesGrid[_+F]-U;u?c.setTranslate(c.translate-N):(c.slideTo(_+Math.ceil(F),0,!1,!0),o&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-N,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-N))}else if(o){const U=y?j.length/m.grid.rows:j.length;c.slideTo(c.activeIndex+U,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(C.length>0&&P)if(typeof t>"u"){const U=c.slidesGrid[_],N=c.slidesGrid[_-R]-U;u?c.setTranslate(c.translate-N):(c.slideTo(_-R,0,!1,!0),o&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-N,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-N))}else{const U=y?C.length/m.grid.rows:C.length;c.slideTo(c.activeIndex-U,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=h,c.controller&&c.controller.control&&!l){const U={slideRealIndex:t,direction:r,setTranslate:o,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(ne=>{!ne.destroyed&&ne.params.loop&&ne.loopFix({...U,slideTo:ne.params.slidesPerView===m.slidesPerView?n:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...U,slideTo:c.controller.control.params.slidesPerView===m.slidesPerView?n:!1})}c.emit("loopFix")}function CC(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(o=>{const i=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[i]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var kC={loopCreate:jC,loopFix:EC,loopDestroy:CC};function TC(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function $C(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var _C={setGrabCursor:TC,unsetGrabCursor:$C};function PC(e,t){t===void 0&&(t=this);function n(r){if(!r||r===on()||r===Ge())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(e);return!o&&!r.getRootNode?null:o||n(r.getRootNode().host)}return n(t)}function $h(e,t,n){const r=Ge(),{params:o}=e,i=o.edgeSwipeDetection,s=o.edgeSwipeThreshold;return i&&(n<=s||n>=r.innerWidth-s)?i==="prevent"?(t.preventDefault(),!0):!1:!0}function NC(e){const t=this,n=on();let r=e;r.originalEvent&&(r=r.originalEvent);const o=t.touchEventsData;if(r.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==r.pointerId)return;o.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(o.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){$h(t,r,r.targetTouches[0].pageX);return}const{params:i,touches:s,enabled:l}=t;if(!l||!i.simulateTouch&&r.pointerType==="mouse"||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let u=r.target;if(i.touchEventsTarget==="wrapper"&&!DE(u,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||o.isTouched&&o.isMoved)return;const c=!!i.noSwipingClass&&i.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(u=d[0]);const f=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(i.noSwiping&&(h?PC(f,u):u.closest(f))){t.allowClick=!0;return}if(i.swipeHandler&&!u.closest(i.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const x=s.currentX,m=s.currentY;if(!$h(t,r,x))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=x,s.startY=m,o.touchStartTime=jr(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(o.allowThresholdMove=!1);let S=!0;u.matches(o.focusableElements)&&(S=!1,u.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==u&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!u.matches(o.focusableElements))&&n.activeElement.blur();const b=S&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||b)&&!u.isContentEditable&&r.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function RC(e){const t=on(),n=this,r=n.touchEventsData,{params:o,touches:i,rtlTranslate:s,enabled:l}=n;if(!l||!o.simulateTouch&&e.pointerType==="mouse")return;let u=e;if(u.originalEvent&&(u=u.originalEvent),u.type==="pointermove"&&(r.touchId!==null||u.pointerId!==r.pointerId))return;let c;if(u.type==="touchmove"){if(c=[...u.changedTouches].find(C=>C.identifier===r.touchId),!c||c.identifier!==r.touchId)return}else c=u;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",u);return}const d=c.pageX,f=c.pageY;if(u.preventedByNestedSwiper){i.startX=d,i.startY=f;return}if(!n.allowTouchMove){u.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=jr());return}if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(f<i.startY&&n.translate<=n.maxTranslate()||f>i.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(s&&(d>i.startX&&-n.translate<=n.maxTranslate()||d<i.startX&&-n.translate>=n.minTranslate()))return;if(!s&&(d<i.startX&&n.translate<=n.maxTranslate()||d>i.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==u.target&&u.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&u.target===t.activeElement&&u.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",u),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=d,i.currentY=f;const h=i.currentX-i.startX,x=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(h**2+x**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:h*h+x*x>=25&&(C=Math.atan2(Math.abs(x),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>o.touchAngle:90-C>o.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",u),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling||u.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!o.cssMode&&u.cancelable&&u.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&u.stopPropagation();let m=n.isHorizontal()?h:x,S=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;o.oneWayMovement&&(m=Math.abs(m)*(s?1:-1),S=Math.abs(S)*(s?1:-1)),i.diff=m,m*=o.touchRatio,s&&(m=-m,S=-S);const b=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=S>0?"prev":"next";const g=n.params.loop&&!o.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let p;if(new Date().getTime(),o._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&g&&v&&Math.abs(m)>=1){Object.assign(i,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",u),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,j=o.resistanceRatio;if(o.touchReleaseOnEdges&&(j=0),m>0?(g&&v&&!p&&r.allowThresholdMove&&r.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,o.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**j))):m<0&&(g&&v&&!p&&r.allowThresholdMove&&r.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,o.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**j))),y&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(m)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function IC(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let o;if(r.type==="touchend"||r.type==="touchcancel"){if(o=[...r.changedTouches].find(j=>j.identifier===n.touchId),!o||o.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;o=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:l,rtlTranslate:u,slidesGrid:c,enabled:d}=t;if(!d||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=jr(),h=f-n.touchStartTime;if(t.allowClick){const j=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(j&&j[0]||r.target,j),t.emit("tap click",r),h<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=jr(),Oc(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let x;if(s.followFinger?x=u?t.translate:-t.translate:x=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:x});return}const m=x>=-t.maxTranslate()&&!t.params.loop;let S=0,b=t.slidesSizesGrid[0];for(let j=0;j<c.length;j+=j<s.slidesPerGroupSkip?1:s.slidesPerGroup){const C=j<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[j+C]<"u"?(m||x>=c[j]&&x<c[j+C])&&(S=j,b=c[j+C]-c[j]):(m||x>=c[j])&&(S=j,b=c[c.length-1]-c[c.length-2])}let g=null,v=null;s.rewind&&(t.isBeginning?v=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const p=(x-c[S])/b,y=S<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(h>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(p>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?g:S+y):t.slideTo(S)),t.swipeDirection==="prev"&&(p>1-s.longSwipesRatio?t.slideTo(S+y):v!==null&&p<0&&Math.abs(p)>s.longSwipesRatio?t.slideTo(v):t.slideTo(S))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(S+y):t.slideTo(S):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:S+y),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:S))}}function _h(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:i}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function zC(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function LC(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const i=e.maxTranslate()-e.minTranslate();i===0?o=0:o=(e.translate-e.minTranslate())/i,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function AC(e){const t=this;Ds(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function MC(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const fv=(e,t)=>{const n=on(),{params:r,el:o,wrapperEl:i,device:s}=e,l=!!r.nested,u=t==="on"?"addEventListener":"removeEventListener",c=t;!o||typeof o=="string"||(n[u]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),o[u]("touchstart",e.onTouchStart,{passive:!1}),o[u]("pointerdown",e.onTouchStart,{passive:!1}),n[u]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[u]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[u]("touchend",e.onTouchEnd,{passive:!0}),n[u]("pointerup",e.onTouchEnd,{passive:!0}),n[u]("pointercancel",e.onTouchEnd,{passive:!0}),n[u]("touchcancel",e.onTouchEnd,{passive:!0}),n[u]("pointerout",e.onTouchEnd,{passive:!0}),n[u]("pointerleave",e.onTouchEnd,{passive:!0}),n[u]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[u]("click",e.onClick,!0),r.cssMode&&i[u]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",_h,!0):e[c]("observerUpdate",_h,!0),o[u]("load",e.onLoad,{capture:!0}))};function DC(){const e=this,{params:t}=e;e.onTouchStart=NC.bind(e),e.onTouchMove=RC.bind(e),e.onTouchEnd=IC.bind(e),e.onDocumentTouchStart=MC.bind(e),t.cssMode&&(e.onScroll=LC.bind(e)),e.onClick=zC.bind(e),e.onLoad=AC.bind(e),fv(e,"on")}function OC(){fv(this,"off")}var FC={attachEvents:DC,detachEvents:OC};const Ph=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function BC(){const e=this,{realIndex:t,initialized:n,params:r,el:o}=e,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const s=on(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",u=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:s.querySelector(r.breakpointsBase),c=e.getBreakpoint(i,l,u);if(!c||e.currentBreakpoint===c)return;const f=(c in i?i[c]:void 0)||e.originalParams,h=Ph(e,r),x=Ph(e,f),m=e.params.grabCursor,S=f.grabCursor,b=r.enabled;h&&!x?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&x&&(o.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!S?e.unsetGrabCursor():!m&&S&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(C=>{if(typeof f[C]>"u")return;const T=r[C]&&r[C].enabled,k=f[C]&&f[C].enabled;T&&!k&&e[C].disable(),!T&&k&&e[C].enable()});const g=f.direction&&f.direction!==r.direction,v=r.loop&&(f.slidesPerView!==r.slidesPerView||g),p=r.loop;g&&n&&e.changeDirection(),pt(e.params,f);const y=e.params.enabled,j=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),b&&!y?e.disable():!b&&y&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",f),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!p&&j?(e.loopCreate(t),e.updateSlides()):p&&!j&&e.loopDestroy()),e.emit("breakpoint",f)}function UC(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const o=Ge(),i=t==="window"?o.innerHeight:n.clientHeight,s=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const u=parseFloat(l.substr(1));return{value:i*u,point:l}}return{value:l,point:l}});s.sort((l,u)=>parseInt(l.value,10)-parseInt(u.value,10));for(let l=0;l<s.length;l+=1){const{point:u,value:c}=s[l];t==="window"?o.matchMedia(`(min-width: ${c}px)`).matches&&(r=u):c<=n.clientWidth&&(r=u)}return r||"max"}var VC={setBreakpoint:BC,getBreakpoint:UC};function HC(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&n.push(t+o)}):typeof r=="string"&&n.push(t+r)}),n}function WC(){const e=this,{classNames:t,params:n,rtl:r,el:o,device:i}=e,s=HC(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),o.classList.add(...t),e.emitContainerClasses()}function GC(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var qC={addClasses:WC,removeClasses:GC};function XC(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const o=e.slides.length-1,i=e.slidesGrid[o]+e.slidesSizesGrid[o]+r*2;e.isLocked=e.size>i}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var JC={checkOverflow:XC},Uc={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function YC(e,t){return function(r){r===void 0&&(r={});const o=Object.keys(r)[0],i=r[o];if(typeof i!="object"||i===null){pt(t,r);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in i)){pt(t,r);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),pt(t,r)}}const fu={eventsEmitter:qE,update:oC,translate:cC,transition:hC,slide:SC,loop:kC,grabCursor:_C,events:FC,breakpoints:VC,checkOverflow:JC,classes:qC},pu={};let mf=class cn{constructor(){let t,n;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?n=o[0]:[t,n]=o,n||(n={}),n=pt({},n),t&&!n.el&&(n.el=t);const s=on();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const d=[];return s.querySelectorAll(n.el).forEach(f=>{const h=pt({},n,{el:f});d.push(new cn(h))}),d}const l=this;l.__swiper__=!0,l.support=lv(),l.device=uv({userAgent:n.userAgent}),l.browser=cv(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const u={};l.modules.forEach(d=>{d({params:n,swiper:l,extendParams:YC(n,u),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=pt({},Uc,u);return l.params=pt({},c,pu,n),l.originalParams=pt({},l.params),l.passedParams=pt({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(d=>{l.on(d,l.params.on[d])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,o=gn(n,`.${r.slideClass}, swiper-slide`),i=Ch(o[0]);return Ch(t)-i}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=gn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const o=r.minTranslate(),s=(r.maxTranslate()-o)*t+o;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const o=t.getSlideClasses(r);n.push({slideEl:r,classNames:o}),t.emit("_slideClass",r,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:o,slides:i,slidesGrid:s,slidesSizesGrid:l,size:u,activeIndex:c}=r;let d=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let f=i[c]?Math.ceil(i[c].swiperSlideSize):0,h;for(let x=c+1;x<i.length;x+=1)i[x]&&!h&&(f+=Math.ceil(i[x].swiperSlideSize),d+=1,f>u&&(h=!0));for(let x=c-1;x>=0;x-=1)i[x]&&!h&&(f+=i[x].swiperSlideSize,d+=1,f>u&&(h=!0))}else if(t==="current")for(let f=c+1;f<i.length;f+=1)(n?s[f]+l[f]-s[c]<u:s[f]-s[c]<u)&&(d+=1);else for(let f=c-1;f>=0;f-=1)s[c]-s[f]<u&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Ds(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const s=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;i=t.slideTo(s.length-1,0,!1,!0)}else i=t.slideTo(t.activeIndex,0,!1,!0);i||o()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,o=r.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(i=>{t==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):gn(r,o())[0];return!s&&n.params.createElements&&(s=Fc("div",n.params.wrapperClass),r.append(s),gn(r,`.${n.params.slideClass}`).forEach(l=>{s.append(l)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Fn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Fn(r,"direction")==="rtl"),wrongRTL:Fn(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const o=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(i=>{i.complete?Ds(n,i):i.addEventListener("load",s=>{Ds(n,s.target)})}),Bc(n),n.initialized=!0,Bc(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:o,el:i,wrapperEl:s,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),n&&(r.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),s&&s.removeAttribute("style"),l&&l.length&&l.forEach(u=>{u.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),u.removeAttribute("style"),u.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(u=>{r.off(u)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),IE(r)),r.destroyed=!0),null}static extendDefaults(t){pt(pu,t)}static get extendedDefaults(){return pu}static get defaults(){return Uc}static installModule(t){cn.prototype.__modules__||(cn.prototype.__modules__=[]);const n=cn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>cn.installModule(n)),cn):(cn.installModule(t),cn)}};Object.keys(fu).forEach(e=>{Object.keys(fu[e]).forEach(t=>{mf.prototype[t]=fu[e][t]})});mf.use([WE,GE]);const pv=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Pr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function so(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Pr(t[r])&&Pr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:so(e[r],t[r]):e[r]=t[r]})}function hv(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function mv(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function gv(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function xv(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function QC(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function KC(e){let{swiper:t,slides:n,passedParams:r,changedParams:o,nextEl:i,prevEl:s,scrollbarEl:l,paginationEl:u}=e;const c=o.filter(_=>_!=="children"&&_!=="direction"&&_!=="wrapperClass"),{params:d,pagination:f,navigation:h,scrollbar:x,virtual:m,thumbs:S}=t;let b,g,v,p,y,j,C,T;o.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&d.thumbs&&(!d.thumbs.swiper||d.thumbs.swiper.destroyed)&&(b=!0),o.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(g=!0),o.includes("pagination")&&r.pagination&&(r.pagination.el||u)&&(d.pagination||d.pagination===!1)&&f&&!f.el&&(v=!0),o.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(d.scrollbar||d.scrollbar===!1)&&x&&!x.el&&(p=!0),o.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||i)&&(d.navigation||d.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(y=!0);const k=_=>{t[_]&&(t[_].destroy(),_==="navigation"?(t.isElement&&(t[_].prevEl.remove(),t[_].nextEl.remove()),d[_].prevEl=void 0,d[_].nextEl=void 0,t[_].prevEl=void 0,t[_].nextEl=void 0):(t.isElement&&t[_].el.remove(),d[_].el=void 0,t[_].el=void 0))};o.includes("loop")&&t.isElement&&(d.loop&&!r.loop?j=!0:!d.loop&&r.loop?C=!0:T=!0),c.forEach(_=>{if(Pr(d[_])&&Pr(r[_]))Object.assign(d[_],r[_]),(_==="navigation"||_==="pagination"||_==="scrollbar")&&"enabled"in r[_]&&!r[_].enabled&&k(_);else{const P=r[_];(P===!0||P===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?P===!1&&k(_):d[_]=r[_]}}),c.includes("controller")&&!g&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),o.includes("children")&&n&&m&&d.virtual.enabled?(m.slides=n,m.update(!0)):o.includes("virtual")&&m&&d.virtual.enabled&&(n&&(m.slides=n),m.update(!0)),o.includes("children")&&n&&d.loop&&(T=!0),b&&S.init()&&S.update(!0),g&&(t.controller.control=d.controller.control),v&&(t.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-pagination"),u.part.add("pagination"),t.el.appendChild(u)),u&&(d.pagination.el=u),f.init(),f.render(),f.update()),p&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(d.scrollbar.el=l),x.init(),x.updateSize(),x.setTranslate()),y&&(t.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=t.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),t.el.appendChild(i)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),i&&(d.navigation.nextEl=i),s&&(d.navigation.prevEl=s),h.init(),h.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),o.includes("direction")&&t.changeDirection(r.direction,!1),(j||T)&&t.loopDestroy(),(C||T)&&t.loopCreate(),t.update()}function ZC(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},o={};so(n,Uc),n._emitClasses=!0,n.init=!1;const i={},s=pv.map(u=>u.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(u=>{typeof e[u]>"u"||(s.indexOf(u)>=0?Pr(e[u])?(n[u]={},o[u]={},so(n[u],e[u]),so(o[u],e[u])):(n[u]=e[u],o[u]=e[u]):u.search(/on[A-Z]/)===0&&typeof e[u]=="function"?t?r[`${u[2].toLowerCase()}${u.substr(3)}`]=e[u]:n.on[`${u[2].toLowerCase()}${u.substr(3)}`]=e[u]:i[u]=e[u])}),["navigation","pagination","scrollbar"].forEach(u=>{n[u]===!0&&(n[u]={}),n[u]===!1&&delete n[u]}),{params:n,passedParams:o,rest:i,events:r}}function ek(e,t){let{el:n,nextEl:r,prevEl:o,paginationEl:i,scrollbarEl:s,swiper:l}=e;hv(t)&&r&&o&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=o,l.originalParams.navigation.prevEl=o),mv(t)&&i&&(l.params.pagination.el=i,l.originalParams.pagination.el=i),gv(t)&&s&&(l.params.scrollbar.el=s,l.originalParams.scrollbar.el=s),l.init(n)}function tk(e,t,n,r,o){const i=[];if(!t)return i;const s=u=>{i.indexOf(u)<0&&i.push(u)};if(n&&r){const u=r.map(o),c=n.map(o);u.join("")!==c.join("")&&s("children"),r.length!==n.length&&s("children")}return pv.filter(u=>u[0]==="_").map(u=>u.replace(/_/,"")).forEach(u=>{if(u in e&&u in t)if(Pr(e[u])&&Pr(t[u])){const c=Object.keys(e[u]),d=Object.keys(t[u]);c.length!==d.length?s(u):(c.forEach(f=>{e[u][f]!==t[u][f]&&s(u)}),d.forEach(f=>{e[u][f]!==t[u][f]&&s(u)}))}else e[u]!==t[u]&&s(u)}),i}const nk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}function vv(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function yv(e){const t=[];return Q.Children.toArray(e).forEach(n=>{vv(n)?t.push(n):n.props&&n.props.children&&yv(n.props.children).forEach(r=>t.push(r))}),t}function rk(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(vv(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const o=yv(r.props.children);o.length>0?o.forEach(i=>t.push(i)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function ok(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:s}=n,l=e.params.loop?-t.length:0,u=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<u;d+=1)d>=i&&d<=s&&c.push(t[r(d)]);return c.map((d,f)=>Q.cloneElement(d,{swiper:e,style:o,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function li(e,t){return typeof window>"u"?w.useEffect(e,t):w.useLayoutEffect(e,t)}const Nh=w.createContext(null),ik=w.createContext(null),wv=w.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:o="div",children:i,onSwiper:s,...l}=e===void 0?{}:e,u=!1;const[c,d]=w.useState("swiper"),[f,h]=w.useState(null),[x,m]=w.useState(!1),S=w.useRef(!1),b=w.useRef(null),g=w.useRef(null),v=w.useRef(null),p=w.useRef(null),y=w.useRef(null),j=w.useRef(null),C=w.useRef(null),T=w.useRef(null),{params:k,passedParams:_,rest:P,events:A}=ZC(l),{slides:F,slots:R}=rk(i),ee=()=>{m(!x)};Object.assign(k.on,{_containerClasses(L,D){d(D)}});const ye=()=>{Object.assign(k.on,A),u=!0;const L={...k};if(delete L.wrapperClass,g.current=new mf(L),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=F;const D={cache:!1,slides:F,renderExternal:h,renderExternalUpdate:!1};so(g.current.params.virtual,D),so(g.current.originalParams.virtual,D)}};b.current||ye(),g.current&&g.current.on("_beforeBreakpoint",ee);const U=()=>{u||!A||!g.current||Object.keys(A).forEach(L=>{g.current.on(L,A[L])})},ne=()=>{!A||!g.current||Object.keys(A).forEach(L=>{g.current.off(L,A[L])})};w.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",ee)}),w.useEffect(()=>{!S.current&&g.current&&(g.current.emitSlidesClasses(),S.current=!0)}),li(()=>{if(t&&(t.current=b.current),!!b.current)return g.current.destroyed&&ye(),ek({el:b.current,nextEl:y.current,prevEl:j.current,paginationEl:C.current,scrollbarEl:T.current,swiper:g.current},k),s&&!g.current.destroyed&&s(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),li(()=>{U();const L=tk(_,v.current,F,p.current,D=>D.key);return v.current=_,p.current=F,L.length&&g.current&&!g.current.destroyed&&KC({swiper:g.current,slides:F,passedParams:_,changedParams:L,nextEl:y.current,prevEl:j.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{ne()}}),li(()=>{nk(g.current)},[f]);function N(){return k.virtual?ok(g.current,F,f):F.map((L,D)=>Q.cloneElement(L,{swiper:g.current,swiperSlideIndex:D}))}return Q.createElement(r,Na({ref:b,className:xv(`${c}${n?` ${n}`:""}`)},P),Q.createElement(ik.Provider,{value:g.current},R["container-start"],Q.createElement(o,{className:QC(k.wrapperClass)},R["wrapper-start"],N(),R["wrapper-end"]),hv(k)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:j,className:"swiper-button-prev"}),Q.createElement("div",{ref:y,className:"swiper-button-next"})),gv(k)&&Q.createElement("div",{ref:T,className:"swiper-scrollbar"}),mv(k)&&Q.createElement("div",{ref:C,className:"swiper-pagination"}),R["container-end"]))});wv.displayName="Swiper";const bv=w.forwardRef(function(e,t){let{tag:n="div",children:r,className:o="",swiper:i,zoom:s,lazy:l,virtualIndex:u,swiperSlideIndex:c,...d}=e===void 0?{}:e;const f=w.useRef(null),[h,x]=w.useState("swiper-slide"),[m,S]=w.useState(!1);function b(y,j,C){j===f.current&&x(C)}li(()=>{if(typeof c<"u"&&(f.current.swiperSlideIndex=c),t&&(t.current=f.current),!(!f.current||!i)){if(i.destroyed){h!=="swiper-slide"&&x("swiper-slide");return}return i.on("_slideClass",b),()=>{i&&i.off("_slideClass",b)}}}),li(()=>{i&&f.current&&!i.destroyed&&x(i.getSlideClasses(f.current))},[i]);const g={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},v=()=>typeof r=="function"?r(g):r,p=()=>{S(!0)};return Q.createElement(n,Na({ref:f,className:xv(`${h}${o?` ${o}`:""}`),"data-swiper-slide-index":u,onLoad:p},d),s&&Q.createElement(Nh.Provider,{value:g},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},v(),l&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&Q.createElement(Nh.Provider,{value:g},v(),l&&!m&&Q.createElement("div",{className:"swiper-lazy-preloader"})))});bv.displayName="SwiperSlide";function sk(e){let{swiper:t,extendParams:n,on:r,emit:o,params:i}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,l,u=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,d,f=new Date().getTime(),h,x,m,S,b,g,v;function p(N){!t||t.destroyed||!t.wrapperEl||N.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",p),!(v||N.detail&&N.detail.bySwiperTouchMove)&&P())}const y=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?h=!0:h&&(c=d,h=!1);const N=t.autoplay.paused?d:f+c-new Date().getTime();t.autoplay.timeLeft=N,o("autoplayTimeLeft",N,N/u),l=requestAnimationFrame(()=>{y()})},j=()=>{let N;return t.virtual&&t.params.virtual.enabled?N=t.slides.find(D=>D.classList.contains("swiper-slide-active")):N=t.slides[t.activeIndex],N?parseInt(N.getAttribute("data-swiper-autoplay"),10):void 0},C=N=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(l),y();let L=typeof N>"u"?t.params.autoplay.delay:N;u=t.params.autoplay.delay,c=t.params.autoplay.delay;const D=j();!Number.isNaN(D)&&D>0&&typeof N>"u"&&(L=D,u=D,c=D),d=L;const K=t.params.speed,re=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(K,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,K,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(K,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,K,!0,!0),o("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return L>0?(clearTimeout(s),s=setTimeout(()=>{re()},L)):requestAnimationFrame(()=>{re()}),L},T=()=>{f=new Date().getTime(),t.autoplay.running=!0,C(),o("autoplayStart")},k=()=>{t.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(l),o("autoplayStop")},_=(N,L)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(s),N||(g=!0);const D=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",p):P()};if(t.autoplay.paused=!0,L){b&&(d=t.params.autoplay.delay),b=!1,D();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),D())},P=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),g?(g=!1,C(d)):C(),t.autoplay.paused=!1,o("autoplayResume"))},A=()=>{if(t.destroyed||!t.autoplay.running)return;const N=on();N.visibilityState==="hidden"&&(g=!0,_(!0)),N.visibilityState==="visible"&&P()},F=N=>{N.pointerType==="mouse"&&(g=!0,v=!0,!(t.animating||t.autoplay.paused)&&_(!0))},R=N=>{N.pointerType==="mouse"&&(v=!1,t.autoplay.paused&&P())},ee=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",F),t.el.addEventListener("pointerleave",R))},ye=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",F),t.el.removeEventListener("pointerleave",R))},U=()=>{on().addEventListener("visibilitychange",A)},ne=()=>{on().removeEventListener("visibilitychange",A)};r("init",()=>{t.params.autoplay.enabled&&(ee(),U(),T())}),r("destroy",()=>{ye(),ne(),t.autoplay.running&&k()}),r("_freeModeStaticRelease",()=>{(m||g)&&P()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?k():_(!0,!0)}),r("beforeTransitionStart",(N,L,D)=>{t.destroyed||!t.autoplay.running||(D||!t.params.autoplay.disableOnInteraction?_(!0,!0):k())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){k();return}x=!0,m=!1,g=!1,S=setTimeout(()=>{g=!0,m=!0,_(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!x)){if(clearTimeout(S),clearTimeout(s),t.params.autoplay.disableOnInteraction){m=!1,x=!1;return}m&&t.params.cssMode&&P(),m=!1,x=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:T,stop:k,pause:_,resume:P})}function ak(e){let{swiper:t,extendParams:n,emit:r,once:o}=e;n({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function i(){if(t.params.cssMode)return;const u=t.getTranslate();t.setTranslate(u),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function s(){if(t.params.cssMode)return;const{touchEventsData:u,touches:c}=t;u.velocities.length===0&&u.velocities.push({position:c[t.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:c[t.isHorizontal()?"currentX":"currentY"],time:jr()})}function l(u){let{currentPos:c}=u;if(t.params.cssMode)return;const{params:d,wrapperEl:f,rtlTranslate:h,snapGrid:x,touchEventsData:m}=t,b=jr()-m.touchStartTime;if(c<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(c>-t.maxTranslate()){t.slides.length<x.length?t.slideTo(x.length-1):t.slideTo(t.slides.length-1);return}if(d.freeMode.momentum){if(m.velocities.length>1){const k=m.velocities.pop(),_=m.velocities.pop(),P=k.position-_.position,A=k.time-_.time;t.velocity=P/A,t.velocity/=2,Math.abs(t.velocity)<d.freeMode.minimumVelocity&&(t.velocity=0),(A>150||jr()-k.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=d.freeMode.momentumVelocityRatio,m.velocities.length=0;let g=1e3*d.freeMode.momentumRatio;const v=t.velocity*g;let p=t.translate+v;h&&(p=-p);let y=!1,j;const C=Math.abs(t.velocity)*20*d.freeMode.momentumBounceRatio;let T;if(p<t.maxTranslate())d.freeMode.momentumBounce?(p+t.maxTranslate()<-C&&(p=t.maxTranslate()-C),j=t.maxTranslate(),y=!0,m.allowMomentumBounce=!0):p=t.maxTranslate(),d.loop&&d.centeredSlides&&(T=!0);else if(p>t.minTranslate())d.freeMode.momentumBounce?(p-t.minTranslate()>C&&(p=t.minTranslate()+C),j=t.minTranslate(),y=!0,m.allowMomentumBounce=!0):p=t.minTranslate(),d.loop&&d.centeredSlides&&(T=!0);else if(d.freeMode.sticky){let k;for(let _=0;_<x.length;_+=1)if(x[_]>-p){k=_;break}Math.abs(x[k]-p)<Math.abs(x[k-1]-p)||t.swipeDirection==="next"?p=x[k]:p=x[k-1],p=-p}if(T&&o("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(h?g=Math.abs((-p-t.translate)/t.velocity):g=Math.abs((p-t.translate)/t.velocity),d.freeMode.sticky){const k=Math.abs((h?-p:p)-t.translate),_=t.slidesSizesGrid[t.activeIndex];k<_?g=d.speed:k<2*_?g=d.speed*1.5:g=d.speed*2.5}}else if(d.freeMode.sticky){t.slideToClosest();return}d.freeMode.momentumBounce&&y?(t.updateProgress(j),t.setTransition(g),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,su(f,()=>{!t||t.destroyed||!m.allowMomentumBounce||(r("momentumBounce"),t.setTransition(d.speed),setTimeout(()=>{t.setTranslate(j),su(f,()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(r("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(g),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,su(f,()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else if(d.freeMode.sticky){t.slideToClosest();return}else d.freeMode&&r("_freeModeNoMomentumRelease");(!d.freeMode.momentum||b>=d.longSwipesMs)&&(r("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:i,onTouchMove:s,onTouchEnd:l}})}const lk="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osUno-CfPtuQXo.jpeg",uk="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osDos-CjOjW_oM.jpeg",ck="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osTres-AsJgpukL.jpeg",dk="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJes%C3%BAs-TIPDL7DU.jpeg",fk="https://Bravo938.github.io/RiosDeVida.pages/assets/tiketSalvaci%C3%B3n-D9lcr1qY.jpeg",pk="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJuan-CdVtAiml.jpeg",hk="https://Bravo938.github.io/RiosDeVida.pages/assets/servicios-D1QGoDVa.jpg",mk="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorio-CTSHckB1.jpg",gk="https://Bravo938.github.io/RiosDeVida.pages/assets/ccrv_Ser-BsoqrjkZ.jpg",xk="https://Bravo938.github.io/RiosDeVida.pages/assets/congreso-BxEsJ0Jy.jpg",vk="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesArt-CN0fXW9p.jpg",yk="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSect-Cbi3JT-h.jpg",wk="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesFondoOscuro-B7Ek2ZSn.jpeg",bk="https://Bravo938.github.io/RiosDeVida.pages/assets/mdzzz09m-Dqg0HgdU.png",Sk="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSecOscuro-Dtk7KoD-.jpg",jk="https://Bravo938.github.io/RiosDeVida.pages/assets/congreso-BxEsJ0Jy.jpg",Ek="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioUno-CoIoQrq-.jpg",Ck="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioDos-CAVUgvvI.jpg",kk="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioTres-CTjzxZYT.jpg",Tk="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioCuatro-1mvNma7G.jpg",$k="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioCinco-xqII1Rqe.jpg",_k="https://Bravo938.github.io/RiosDeVida.pages/assets/grupoUno-6hV08zSd.jpg",Pk="https://Bravo938.github.io/RiosDeVida.pages/assets/grupoDos-cs2T7Edr.jpg",Nk="https://Bravo938.github.io/RiosDeVida.pages/assets/grupoTres-B5q2Adbr.jpg",Rk="https://Bravo938.github.io/RiosDeVida.pages/assets/grupoCuatro--vJuPLSn.jpg",Ik="https://Bravo938.github.io/RiosDeVida.pages/assets/grupoCinco-DKnQa4Rf.jpg",zk="https://Bravo938.github.io/RiosDeVida.pages/assets/grupoSeis-DTb7Z9oP.jpg",Z={niñoUno:lk,niñoDos:uk,niñoTres:ck,globoJesús:dk,tiketSalvación:fk,globoJuan:pk,servicios:hk,auditorio:mk,ccrv_Ser:gk,potenciados:xk,jovenesArt:vk,jovenesSection:yk,JovenesFondoOscuro:wk,mdzzz09m:bk,JovenesSectionOscuro:Sk,congreso:jk,auditorioUno:Ek,auditorioDos:Ck,auditorioTres:kk,auditorioCuatro:Tk,auditorioCinco:$k,grupoUno:_k,grupoDos:Pk,grupoTres:Nk,grupoCuatro:Rk,grupoCinco:Ik,grupoSeis:zk},Lk=[Z.grupoUno,Z.grupoDos,Z.grupoTres,Z.grupoCuatro,Z.grupoCinco,Z.grupoSeis],Ak=()=>a.jsxs(Mk,{id:"grupoDeVida",children:[a.jsxs(Dk,{children:[a.jsx(Ok,{children:"Grupos de Vida"}),a.jsx(Fk,{children:"En cada Grupo de Vida hablamos y aprendemos de la palabra de Dios y también confraternamos con los miembros."})]}),a.jsx(Bk,{modules:[sk,ak],freeMode:!0,slidesPerView:3,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1},speed:4e3,loop:!0,children:Lk.map((e,t)=>a.jsx(bv,{children:a.jsx(Uk,{src:e,alt:`slide-${t}`})},t))})]}),Mk=E.section`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
`,Dk=E.div`
  text-align: center;
  margin-bottom: 1rem;
`,Ok=E.h2`
  font-size: 2.5rem;
  color: #00a0f6;
  margin-bottom: 0.5rem;
`,Fk=E.p`
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
`,Bk=E(wv)`
  width: 100%;
  .swiper-wrapper {
    align-items: center;
  }
`,Uk=E.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
`;E.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;
  background-color: #02141747;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;E.div`
  position: relative;
  width: 45%;
  text-align: center;
  overflow: hidden;
  animation: ${({direction:e})=>e==="left"?"slideInLeft":"slideInRight"} 1s ease-out forwards;

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 1.5rem;
  }
`;E.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  

  
`;E.h3`
  font-size: 1.5rem;
  color: #00d0ff;
  margin-top: 1rem;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3); // Sombra suave
`;E.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #000000;
  background-color: #f4f4f4;
  border: none;
  border-radius: 20px;
  cursor: pointer;  

  &:hover {
    background-color: #0056b3;
  }
`;const Vk="https://Bravo938.github.io/RiosDeVida.pages/assets/manosArriba-DDg91RAo.mp4";function Hk(){const[e,t]=w.useState(!1),n=()=>{t(!e)};return a.jsx(Wk,{id:"potenciados",children:a.jsxs(Gk,{children:[a.jsxs(qk,{children:[a.jsx(Xk,{children:"Ministerio de Jóvenes"}),a.jsxs(Jk,{children:[a.jsxs(Yk,{expanded:e,children:["¡Bienvenido al Ministerio de  Jóvenes! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(Qk,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(Kk,{children:a.jsx(Zk,{autoPlay:!0,loop:!0,muted:!0,src:Vk})})]})})}const Wk=E.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #7148d18f 40%, #2e1f428d 40%);
`,Gk=E.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,qk=E.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    padding: 10%;
    text-align: center;
  }
`,Xk=E.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,Jk=E.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,Yk=E.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,Qk=E.button`
  background: #033c5d;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #022c44;
  }
`,Kk=E.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,Zk=E.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,e2=E.section`
  padding: 50px 20px;
  //background-color: #f9f9f9;
  text-align: center;
  max-width: 1400px; // 👈 Para que no se estire demasiado
  margin: 0 auto;
`,t2=E.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ffffff;
`,n2=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: flex-start; // 👈 Alinea las tarjetas arriba y permite alturas independientes
`,hu=E.div`
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px; // 👈 Fijamos el ancho pero no la altura
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 350px; // 👈 Más ancho en pantallas grandes
  }

  @media (min-width: 1440px) {
    width: 400px; // 👈 Más aún si hay mucho espacio disponible
  }
`,mu=E.img`
  width: 100%;
  height: auto;
`,gu=E.div`
  padding: 20px;
`,xu=E.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #ffffff;
`,vu=E.p`
  font-size: 1em;
  margin-bottom: 15px;
  color: #ffffff;
`,Rh=E(V)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`,r2=()=>a.jsxs(e2,{children:[a.jsx(t2,{children:"Haz parte de nuestra familia"}),a.jsxs(n2,{children:[a.jsxs(hu,{children:[a.jsx(mu,{src:Z.auditorio,alt:"Reuniones Dominicales"}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Domingos"}),a.jsx(vu,{children:"Acompáñanos a nuestras reuniones todos los domingos a las 10:00 am en Hilton Garden Inn Miami Airport West, 3550 NW 74th Ave."})]})]}),a.jsxs(hu,{children:[a.jsx(mu,{src:Z.servicios,alt:"Auditorio Rios De Vida"}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Auditorio Centro Cristiano Ríos de Vida"}),a.jsx(vu,{children:"Nos encontramos en el Auditorio Centro Cristiano Ríos de Vida, donde podrás disfrutar de un ambiente acogedor y lleno de vida. Donde cada reunion es una oportunidad para tener un encuentro con Dios y confraternizar con otros miembros de la iglesia."}),a.jsx(Rh,{children:a.jsx(V,{as:V,to:"/masSobreNosotros#auditorio-rios-de-vida",children:"Clic Aquí"})})]})]}),a.jsxs(hu,{children:[a.jsx(mu,{src:Z.congreso,alt:"Eventos"}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Eventos"}),a.jsx(vu,{children:"Durante el trasncurso del año tenemos diferentes eventos, como el congreso de jóvenes, la conferencia de mujeres y el congreso de hombres. ¡No te los pierdas!"}),a.jsx(Rh,{href:"ENLACE_A_DEVOCIONAL_ADULTOS",children:"Eventos"})]})]})]})]}),o2=E.div`
  max-width: 800px;
  
  margin: 80px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.8;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`,i2=E.h1`
  font-size: 2.5rem;
  margin-bottom: 24px;
  text-align: center;
  color: #2c3e50;
`,s2=E.p`
  font-size: 1.15rem;
  text-align: justify;
`;function Sv(){return a.jsxs(o2,{children:[a.jsx(i2,{children:"¿Qué es la Pascua?"}),a.jsxs(s2,{children:["En el contexto actual, las fiestas de Pascuas se vive de una forma muy diferente a lo que fue en la época de Cristo, con el tiempo se fue cambiando su significado o propósito. Por eso, hoy queremos contarte de donde nace esta celebración, como la vivieron los primeros discípulos junto a Jesús y qué valor debería representar para toda la humanidad. La Pascua nace como una fiesta judía para recordar que Dios había salvado a su pueblo de la muerte, pintando la parte superior de las puertas de sus casas con sangre de un cordero. Eso evitaba que la muerte ingresara al hogar y salvaba a sus hijos.",a.jsx("br",{}),a.jsx("br",{}),"A partir de Jesús esas Pascuas cobrarían un sentido diferente, Él pasaría a ser el cordero y el gran sacrificio por el cual su propia sangre traería salvación a toda la humanidad.",a.jsx("br",{}),a.jsx("br",{}),"«Jesús dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí» (Juan 14:6).",a.jsx("br",{}),a.jsx("br",{}),"A través de Él podemos llegar a Dios. El significado de Pascuas es que Dios ya te libró de todo pecado, solo queda aceptar que Él es tu Señor y Salvador.",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"Juan 3:16"}),a.jsx("br",{}),'"Porque tanto amó Dios al mundo que dio a su Hijo único, para que todo el que cree en Él no se pierda, sino que tenga vida eterna."']})]})}function a2(){return a.jsxs(l2,{children:[a.jsx(Vi,{}),a.jsx(hl,{}),a.jsx(Sv,{}),a.jsx(SE,{}),a.jsx(nE,{}),a.jsx(r2,{}),a.jsx(Ak,{}),a.jsx(Hk,{}),a.jsx(pl,{})]})}const l2=E.div`
  //background-color: #ececec; // Cambia esta ruta por la de tu imagen
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;function yu(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"},child:[]},{tag:"path",attr:{d:"M11.69 15c.36-.75.84-1.43 1.43-2H7v-2h11c1.07 0 2.09.25 3 .69V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.69c-.44-.91-.69-1.93-.69-3 0-.34.03-.67.08-1H7v-2h4.69zM12 2.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM7 7h10v2H7V7z"},child:[]}]})(e)}function wu(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},child:[]}]})(e)}function Rt(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8V8zm-7 1V3.5L18.5 9H13zM22.71 14l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71a.996.996 0 0 0 0-1.41z"},child:[]}]})(e)}function u2(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(e)}function c2(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function It(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"},child:[]}]})(e)}function wt(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"},child:[]}]})(e)}function Or(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"},child:[]}]})(e)}function Cn(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"},child:[]}]})(e)}function zt(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"},child:[]}]})(e)}const jv=w.createContext(),d2=()=>{const[e,t]=w.useState(!1),n=ve(),r=()=>{t(i=>!i)},o=()=>{n("/logout")};return a.jsx(jv.Provider,{value:{darkTheme:e,toggleTheme:r},children:a.jsxs(f2,{$darkTheme:e,children:[a.jsx(p2,{onClick:o,children:a.jsx(c2,{})}),a.jsx(h2,{onClick:r,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsx(jS,{})]})})},f2=E.div`
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
    min-height: 100vh;
`,p2=E.button`
    position: absolute;
    top: 20px;
    left: 20px;
    background: #dc3545;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 10px 15px;
    color: #ffffff;
    cursor: pointer;
`,h2=E.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: ${({$darkTheme:e})=>e?"#0056b3":"#007bff"};
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    padding: 10px 15px;
    color: #ffffff;
    cursor: pointer;
`,m2=()=>{const{darkTheme:e,toggleTheme:t}=w.useContext(jv),n=ve(),[r,o]=w.useState(null);w.useEffect(()=>{const l=localStorage.getItem("rol");l&&o(l)},[]);const i=l=>{n(l)},s=l=>l.includes(parseInt(r));return a.jsxs(g2,{$darkTheme:e,children:[a.jsx(v2,{onClick:t,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsxs(x2,{children:[s([1])&&a.jsxs(St,{onClick:()=>i("/miembrosLideresSupervisor"),$darkTheme:e,children:[a.jsx(wu,{size:24})," ",a.jsx(jt,{children:"Miembros Lider Supervisor"})]}),s([2])&&a.jsxs(St,{onClick:()=>i("/registroLideryMiembro"),$darkTheme:e,children:[a.jsx(wu,{size:24})," ",a.jsx(jt,{children:"Miembros"})]}),s([3])&&a.jsxs(St,{onClick:()=>i("/planillaLider"),$darkTheme:e,children:[a.jsx(wu,{size:24})," ",a.jsx(jt,{children:"Miembros"})]}),s([3])&&a.jsxs(St,{onClick:()=>i("/asistencia"),$darkTheme:e,children:[a.jsx(Or,{size:24})," ",a.jsx(jt,{children:"Asistencia"})]}),s([2])&&a.jsxs(St,{onClick:()=>i("/asistenciaVistaSupervisor"),$darkTheme:e,children:[a.jsx(Or,{size:24})," ",a.jsx(jt,{children:"Asistencia Vista Supervisor"})]}),s([1])&&a.jsxs(St,{onClick:()=>i("/asistenciaVistaAdmin"),$darkTheme:e,children:[a.jsx(Or,{size:24})," ",a.jsx(jt,{children:"Asistencia "})]}),s([3])&&a.jsxs(St,{onClick:()=>i("/generalPlanilla"),$darkTheme:e,children:[a.jsx(yu,{size:24})," ",a.jsx(jt,{children:"Planilla"})]}),s([2])&&a.jsxs(St,{onClick:()=>i("/planillaGeneralSupervisor"),$darkTheme:e,children:[a.jsx(yu,{size:24})," ",a.jsx(jt,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(St,{onClick:()=>i("/planillaGeneralAdmin"),$darkTheme:e,children:[a.jsx(yu,{size:24})," ",a.jsx(jt,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(St,{onClick:()=>i("/asignarSupervisor"),$darkTheme:e,children:[a.jsx(Or,{size:24})," ",a.jsx(jt,{children:"Asignar Supervisor"})]}),s([1])&&a.jsxs(St,{onClick:()=>i("/registroUsuarios"),$darkTheme:e,children:[a.jsx(Or,{size:24})," ",a.jsx(jt,{children:"Usuarios"})]}),s([1])&&a.jsxs(St,{onClick:()=>i("/registroDeRoles"),$darkTheme:e,children:[a.jsx(Or,{size:24})," ",a.jsx(jt,{children:"Roles"})]})]})]})},g2=E.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
`,x2=E.div`
    display: grid;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
`,St=E.button`
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({$darkTheme:e})=>e?"#495057":"#007bff"};
    border: none;
    border-radius: 15px;
    color: #ffffff;
    font-size: 1.2rem;
    padding: 15px;
    cursor: pointer;
    &:hover {
        background-color: ${({$darkTheme:e})=>e?"#6c757d":"#0056b3"};
    }
`,jt=E.span`
    margin-top: 10px;
`,v2=E.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: ${({$darkTheme:e})=>e?"#0056b3":"#007bff"};
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    padding: 10px 15px;
    color: #ffffff;
    cursor: pointer;
`,Hi=w.createContext(),y2=({children:e})=>{const[t,n]=w.useState(null);return a.jsx(Hi.Provider,{value:{auth:t,setAuth:n},children:e})};function Ev(e,t){return function(){return e.apply(t,arguments)}}const{toString:w2}=Object.prototype,{getPrototypeOf:gf}=Object,ml=(e=>t=>{const n=w2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qt=e=>(e=e.toLowerCase(),t=>ml(t)===e),gl=e=>t=>typeof t===e,{isArray:To}=Array,Ni=gl("undefined");function b2(e){return e!==null&&!Ni(e)&&e.constructor!==null&&!Ni(e.constructor)&&gt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Cv=qt("ArrayBuffer");function S2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Cv(e.buffer),t}const j2=gl("string"),gt=gl("function"),kv=gl("number"),xl=e=>e!==null&&typeof e=="object",E2=e=>e===!0||e===!1,Os=e=>{if(ml(e)!=="object")return!1;const t=gf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},C2=qt("Date"),k2=qt("File"),T2=qt("Blob"),$2=qt("FileList"),_2=e=>xl(e)&&gt(e.pipe),P2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||gt(e.append)&&((t=ml(e))==="formdata"||t==="object"&&gt(e.toString)&&e.toString()==="[object FormData]"))},N2=qt("URLSearchParams"),[R2,I2,z2,L2]=["ReadableStream","Request","Response","Headers"].map(qt),A2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),To(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Tv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$v=e=>!Ni(e)&&e!==xr;function Vc(){const{caseless:e}=$v(this)&&this||{},t={},n=(r,o)=>{const i=e&&Tv(t,o)||o;Os(t[i])&&Os(r)?t[i]=Vc(t[i],r):Os(r)?t[i]=Vc({},r):To(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Wi(arguments[r],n);return t}const M2=(e,t,n,{allOwnKeys:r}={})=>(Wi(t,(o,i)=>{n&&gt(o)?e[i]=Ev(o,n):e[i]=o},{allOwnKeys:r}),e),D2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),O2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},F2=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&gf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},B2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},U2=e=>{if(!e)return null;if(To(e))return e;let t=e.length;if(!kv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},V2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&gf(Uint8Array)),H2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},W2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},G2=qt("HTMLFormElement"),q2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Ih=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),X2=qt("RegExp"),_v=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wi(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},J2=e=>{_v(e,(t,n)=>{if(gt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(gt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Y2=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return To(e)?r(e):r(String(e).split(t)),n},Q2=()=>{},K2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,bu="abcdefghijklmnopqrstuvwxyz",zh="0123456789",Pv={DIGIT:zh,ALPHA:bu,ALPHA_DIGIT:bu+bu.toUpperCase()+zh},Z2=(e=16,t=Pv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function eT(e){return!!(e&&gt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tT=e=>{const t=new Array(10),n=(r,o)=>{if(xl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=To(r)?[]:{};return Wi(r,(s,l)=>{const u=n(s,o+1);!Ni(u)&&(i[l]=u)}),t[o]=void 0,i}}return r};return n(e,0)},nT=qt("AsyncFunction"),rT=e=>e&&(xl(e)||gt(e))&&gt(e.then)&&gt(e.catch),Nv=((e,t)=>e?setImmediate:t?((n,r)=>(xr.addEventListener("message",({source:o,data:i})=>{o===xr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),xr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",gt(xr.postMessage)),oT=typeof queueMicrotask<"u"?queueMicrotask.bind(xr):typeof process<"u"&&process.nextTick||Nv,$={isArray:To,isArrayBuffer:Cv,isBuffer:b2,isFormData:P2,isArrayBufferView:S2,isString:j2,isNumber:kv,isBoolean:E2,isObject:xl,isPlainObject:Os,isReadableStream:R2,isRequest:I2,isResponse:z2,isHeaders:L2,isUndefined:Ni,isDate:C2,isFile:k2,isBlob:T2,isRegExp:X2,isFunction:gt,isStream:_2,isURLSearchParams:N2,isTypedArray:V2,isFileList:$2,forEach:Wi,merge:Vc,extend:M2,trim:A2,stripBOM:D2,inherits:O2,toFlatObject:F2,kindOf:ml,kindOfTest:qt,endsWith:B2,toArray:U2,forEachEntry:H2,matchAll:W2,isHTMLForm:G2,hasOwnProperty:Ih,hasOwnProp:Ih,reduceDescriptors:_v,freezeMethods:J2,toObjectSet:Y2,toCamelCase:q2,noop:Q2,toFiniteNumber:K2,findKey:Tv,global:xr,isContextDefined:$v,ALPHABET:Pv,generateString:Z2,isSpecCompliantForm:eT,toJSONObject:tT,isAsyncFn:nT,isThenable:rT,setImmediate:Nv,asap:oT};function H(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}$.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const Rv=H.prototype,Iv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Iv[e]={value:e}});Object.defineProperties(H,Iv);Object.defineProperty(Rv,"isAxiosError",{value:!0});H.from=(e,t,n,r,o,i)=>{const s=Object.create(Rv);return $.toFlatObject(e,s,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),H.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const iT=null;function Hc(e){return $.isPlainObject(e)||$.isArray(e)}function zv(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function Lh(e,t,n){return e?e.concat(t).map(function(o,i){return o=zv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function sT(e){return $.isArray(e)&&!e.some(Hc)}const aT=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function vl(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,b){return!$.isUndefined(b[S])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if($.isDate(m))return m.toISOString();if(!u&&$.isBlob(m))throw new H("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(m)||$.isTypedArray(m)?u&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,S,b){let g=m;if(m&&!b&&typeof m=="object"){if($.endsWith(S,"{}"))S=r?S:S.slice(0,-2),m=JSON.stringify(m);else if($.isArray(m)&&sT(m)||($.isFileList(m)||$.endsWith(S,"[]"))&&(g=$.toArray(m)))return S=zv(S),g.forEach(function(p,y){!($.isUndefined(p)||p===null)&&t.append(s===!0?Lh([S],y,i):s===null?S:S+"[]",c(p))}),!1}return Hc(m)?!0:(t.append(Lh(b,S,i),c(m)),!1)}const f=[],h=Object.assign(aT,{defaultVisitor:d,convertValue:c,isVisitable:Hc});function x(m,S){if(!$.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+S.join("."));f.push(m),$.forEach(m,function(g,v){(!($.isUndefined(g)||g===null)&&o.call(t,g,$.isString(v)?v.trim():v,S,h))===!0&&x(g,S?S.concat(v):[v])}),f.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Ah(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function xf(e,t){this._pairs=[],e&&vl(e,this,t)}const Lv=xf.prototype;Lv.append=function(t,n){this._pairs.push([t,n])};Lv.toString=function(t){const n=t?function(r){return t.call(this,r,Ah)}:Ah;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function lT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Av(e,t,n){if(!t)return e;const r=n&&n.encode||lT,o=n&&n.serialize;let i;if(o?i=o(t,n):i=$.isURLSearchParams(t)?t.toString():new xf(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Mh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Mv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uT=typeof URLSearchParams<"u"?URLSearchParams:xf,cT=typeof FormData<"u"?FormData:null,dT=typeof Blob<"u"?Blob:null,fT={isBrowser:!0,classes:{URLSearchParams:uT,FormData:cT,Blob:dT},protocols:["http","https","file","blob","url","data"]},vf=typeof window<"u"&&typeof document<"u",Wc=typeof navigator=="object"&&navigator||void 0,pT=vf&&(!Wc||["ReactNative","NativeScript","NS"].indexOf(Wc.product)<0),hT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mT=vf&&window.location.href||"http://localhost",gT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vf,hasStandardBrowserEnv:pT,hasStandardBrowserWebWorkerEnv:hT,navigator:Wc,origin:mT},Symbol.toStringTag,{value:"Module"})),nt={...gT,...fT};function xT(e,t){return vl(e,new nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return nt.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function vT(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yT(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Dv(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),u=i>=n.length;return s=!s&&$.isArray(o)?o.length:s,u?($.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!$.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&$.isArray(o[s])&&(o[s]=yT(o[s])),!l)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,o)=>{t(vT(r),o,n,0)}),n}return null}function wT(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Gi={transitional:Mv,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=$.isObject(t);if(i&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(Dv(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t)||$.isReadableStream(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xT(t,this.formSerializer).toString();if((l=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return vl(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),wT(t)):t}],transformResponse:[function(t){const n=this.transitional||Gi.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if($.isResponse(t)||$.isReadableStream(t))return t;if(t&&$.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?H.from(l,H.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{Gi.headers[e]={}});const bT=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ST=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&bT[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Dh=Symbol("internals");function Fo(e){return e&&String(e).trim().toLowerCase()}function Fs(e){return e===!1||e==null?e:$.isArray(e)?e.map(Fs):String(e)}function jT(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ET=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Su(e,t,n,r,o){if($.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function CT(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function kT(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class rt{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,u,c){const d=Fo(u);if(!d)throw new Error("header name must be a non-empty string");const f=$.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=Fs(l))}const s=(l,u)=>$.forEach(l,(c,d)=>i(c,d,u));if($.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if($.isString(t)&&(t=t.trim())&&!ET(t))s(ST(t),n);else if($.isHeaders(t))for(const[l,u]of t.entries())i(u,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Fo(t),t){const r=$.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return jT(o);if($.isFunction(n))return n.call(this,o,r);if($.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Fo(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Su(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Fo(s),s){const l=$.findKey(r,s);l&&(!n||Su(r,r[l],l,n))&&(delete r[l],o=!0)}}return $.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Su(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return $.forEach(this,(o,i)=>{const s=$.findKey(r,i);if(s){n[s]=Fs(o),delete n[i];return}const l=t?CT(i):String(i).trim();l!==i&&delete n[i],n[l]=Fs(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Dh]=this[Dh]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=Fo(s);r[l]||(kT(o,s),r[l]=!0)}return $.isArray(t)?t.forEach(i):i(t),this}}rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(rt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(rt);function ju(e,t){const n=this||Gi,r=t||n,o=rt.from(r.headers);let i=r.data;return $.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Ov(e){return!!(e&&e.__CANCEL__)}function $o(e,t,n){H.call(this,e??"canceled",H.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits($o,H,{__CANCEL__:!0});function Fv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function TT(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $T(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const x=d&&c-d;return x?Math.round(h*1e3/x):void 0}}function _T(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const Ra=(e,t,n=3)=>{let r=0;const o=$T(50,250);return _T(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=l;r=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-s)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Oh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Fh=e=>(...t)=>$.asap(()=>e(...t)),PT=nt.hasStandardBrowserEnv?function(){const t=nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=$.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),NT=nt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(r)&&s.push("path="+r),$.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function RT(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function IT(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Bv(e,t){return e&&!RT(t)?IT(e,t):t}const Bh=e=>e instanceof rt?{...e}:e;function Nr(e,t){t=t||{};const n={};function r(c,d,f){return $.isPlainObject(c)&&$.isPlainObject(d)?$.merge.call({caseless:f},c,d):$.isPlainObject(d)?$.merge({},d):$.isArray(d)?d.slice():d}function o(c,d,f){if($.isUndefined(d)){if(!$.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function i(c,d){if(!$.isUndefined(d))return r(void 0,d)}function s(c,d){if($.isUndefined(d)){if(!$.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,d)=>o(Bh(c),Bh(d),!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=u[d]||o,h=f(e[d],t[d],d);$.isUndefined(h)&&f!==l||(n[d]=h)}),n}const Uv=e=>{const t=Nr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=rt.from(s),t.url=Av(Bv(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if($.isFormData(n)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[c,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(nt.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(t)),r||r!==!1&&PT(t.url))){const c=o&&i&&NT.read(i);c&&s.set(o,c)}return t},zT=typeof XMLHttpRequest<"u",LT=zT&&function(e){return new Promise(function(n,r){const o=Uv(e);let i=o.data;const s=rt.from(o.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=o,d,f,h,x,m;function S(){x&&x(),m&&m(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function g(){if(!b)return;const p=rt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:p,config:e,request:b};Fv(function(T){n(T),S()},function(T){r(T),S()},j),b=null}"onloadend"in b?b.onloadend=g:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(g)},b.onabort=function(){b&&(r(new H("Request aborted",H.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new H("Network Error",H.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||Mv;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new H(y,j.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&$.forEach(s.toJSON(),function(y,j){b.setRequestHeader(j,y)}),$.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),l&&l!=="json"&&(b.responseType=o.responseType),c&&([h,m]=Ra(c,!0),b.addEventListener("progress",h)),u&&b.upload&&([f,x]=Ra(u),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(d=p=>{b&&(r(!p||p.type?new $o(null,e,b):p),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const v=TT(o.url);if(v&&nt.protocols.indexOf(v)===-1){r(new H("Unsupported protocol "+v+":",H.ERR_BAD_REQUEST,e));return}b.send(i||null)})},AT=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof H?d:new $o(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new H(`timeout ${t} of ms exceeded`,H.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>$.asap(l),u}},MT=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},DT=async function*(e,t){for await(const n of OT(e))yield*MT(n,t)},OT=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Uh=(e,t,n,r)=>{const o=DT(e,t);let i=0,s,l=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){l(),u.close();return}let f=d.byteLength;if(n){let h=i+=f;n(h)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),o.return()}},{highWaterMark:2})},yl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vv=yl&&typeof ReadableStream=="function",FT=yl&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Hv=(e,...t)=>{try{return!!e(...t)}catch{return!1}},BT=Vv&&Hv(()=>{let e=!1;const t=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Vh=64*1024,Gc=Vv&&Hv(()=>$.isReadableStream(new Response("").body)),Ia={stream:Gc&&(e=>e.body)};yl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ia[t]&&(Ia[t]=$.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new H(`Response type '${t}' is not supported`,H.ERR_NOT_SUPPORT,r)})})})(new Response);const UT=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(nt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await FT(e)).byteLength},VT=async(e,t)=>{const n=$.toFiniteNumber(e.getContentLength());return n??UT(t)},HT=yl&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:u,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:h}=Uv(e);c=c?(c+"").toLowerCase():"text";let x=AT([o,i&&i.toAbortSignal()],s),m;const S=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let b;try{if(u&&BT&&n!=="get"&&n!=="head"&&(b=await VT(d,r))!==0){let j=new Request(t,{method:"POST",body:r,duplex:"half"}),C;if($.isFormData(r)&&(C=j.headers.get("content-type"))&&d.setContentType(C),j.body){const[T,k]=Oh(b,Ra(Fh(u)));r=Uh(j.body,Vh,T,k)}}$.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;m=new Request(t,{...h,signal:x,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:g?f:void 0});let v=await fetch(m);const p=Gc&&(c==="stream"||c==="response");if(Gc&&(l||p&&S)){const j={};["status","statusText","headers"].forEach(_=>{j[_]=v[_]});const C=$.toFiniteNumber(v.headers.get("content-length")),[T,k]=l&&Oh(C,Ra(Fh(l),!0))||[];v=new Response(Uh(v.body,Vh,T,()=>{k&&k(),S&&S()}),j)}c=c||"text";let y=await Ia[$.findKey(Ia,c)||"text"](v,e);return!p&&S&&S(),await new Promise((j,C)=>{Fv(j,C,{data:y,headers:rt.from(v.headers),status:v.status,statusText:v.statusText,config:e,request:m})})}catch(g){throw S&&S(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,e,m),{cause:g.cause||g}):H.from(g,g&&g.code,e,m)}}),qc={http:iT,xhr:LT,fetch:HT};$.forEach(qc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Hh=e=>`- ${e}`,WT=e=>$.isFunction(e)||e===null||e===!1,Wv={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!WT(n)&&(r=qc[(s=String(n)).toLowerCase()],r===void 0))throw new H(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Hh).join(`
`):" "+Hh(i[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:qc};function Eu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $o(null,e)}function Wh(e){return Eu(e),e.headers=rt.from(e.headers),e.data=ju.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Wv.getAdapter(e.adapter||Gi.adapter)(e).then(function(r){return Eu(e),r.data=ju.call(e,e.transformResponse,r),r.headers=rt.from(r.headers),r},function(r){return Ov(r)||(Eu(e),r&&r.response&&(r.response.data=ju.call(e,e.transformResponse,r.response),r.response.headers=rt.from(r.response.headers))),Promise.reject(r)})}const Gv="1.7.7",yf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Gh={};yf.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Gv+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new H(o(s," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!Gh[s]&&(Gh[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function GT(e,t,n){if(typeof e!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],u=l===void 0||s(l,i,e);if(u!==!0)throw new H("option "+i+" must be "+u,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+i,H.ERR_BAD_OPTION)}}const Xc={assertOptions:GT,validators:yf},_n=Xc.validators;class Er{constructor(t){this.defaults=t,this.interceptors={request:new Mh,response:new Mh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Nr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Xc.assertOptions(r,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),o!=null&&($.isFunction(o)?n.paramsSerializer={serialize:o}:Xc.assertOptions(o,{encode:_n.function,serialize:_n.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=rt.concat(s,i);const l=[];let u=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(u=u&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,f=0,h;if(!u){const m=[Wh.bind(this),void 0];for(m.unshift.apply(m,l),m.push.apply(m,c),h=m.length,d=Promise.resolve(n);f<h;)d=d.then(m[f++],m[f++]);return d}h=l.length;let x=n;for(f=0;f<h;){const m=l[f++],S=l[f++];try{x=m(x)}catch(b){S.call(this,b);break}}try{d=Wh.call(this,x)}catch(m){return Promise.reject(m)}for(f=0,h=c.length;f<h;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Nr(this.defaults,t);const n=Bv(t.baseURL,t.url);return Av(n,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){Er.prototype[t]=function(n,r){return this.request(Nr(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(Nr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Er.prototype[t]=n(),Er.prototype[t+"Form"]=n(!0)});class wf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new $o(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new wf(function(o){t=o}),cancel:t}}}function qT(e){return function(n){return e.apply(null,n)}}function XT(e){return $.isObject(e)&&e.isAxiosError===!0}const Jc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jc).forEach(([e,t])=>{Jc[t]=e});function qv(e){const t=new Er(e),n=Ev(Er.prototype.request,t);return $.extend(n,Er.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return qv(Nr(e,o))},n}const z=qv(Gi);z.Axios=Er;z.CanceledError=$o;z.CancelToken=wf;z.isCancel=Ov;z.VERSION=Gv;z.toFormData=vl;z.AxiosError=H;z.Cancel=z.CanceledError;z.all=function(t){return Promise.all(t)};z.spread=qT;z.isAxiosError=XT;z.mergeConfig=Nr;z.AxiosHeaders=rt;z.formToJSON=e=>Dv($.isHTMLForm(e)?new FormData(e):e);z.getAdapter=Wv.getAdapter;z.HttpStatusCode=Jc;z.default=z;function JT(){const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(null),s=ve(),{setAuth:l}=w.useContext(Hi),u="http://localhost:4000";console.log("Usando API_URL:",u);const c=async d=>{d.preventDefault();try{console.log("API_URL:",void 0),console.log("Modo:","production");const f=await z.post(`${u}/api/auth/login`,{correo:e,contraseña:n});console.log("Respuesta del servidor:",f);const h=f.data.token,x=f.data.rol,m=f.data.id_usuario;h?(console.log("Token recibido:",h),l({token:h}),localStorage.setItem("token",h),localStorage.setItem("rol",x),localStorage.setItem("idUser",m),s("/menuInicio")):(i("Error al autenticar"),console.log("Token no encontrado en la respuesta"))}catch(f){console.error("Error durante la autenticación:",f),i("Credenciales inválidas")}};return a.jsxs(YT,{children:[a.jsx(QT,{children:a.jsx("div",{children:a.jsx(V,{to:"/",children:a.jsx(wt,{})})})}),a.jsx(KT,{autoPlay:!0,loop:!0,muted:!0,children:a.jsx("source",{src:"https://static.educacionit.com/alumni/assets/bg-login.webm",type:"video/webm"})}),a.jsxs(ZT,{onSubmit:c,children:[a.jsx("h2",{children:"Login"}),o&&a.jsx(t$,{children:o}),a.jsxs(qh,{children:[a.jsx(Xh,{htmlFor:"username",children:"Username"}),a.jsx(Jh,{type:"text",id:"username",name:"username",value:e,onChange:d=>t(d.target.value)})]}),a.jsxs(qh,{children:[a.jsx(Xh,{htmlFor:"password",children:"Password"}),a.jsx(Jh,{type:"password",id:"password",name:"password",value:n,onChange:d=>r(d.target.value)})]}),a.jsx(e$,{type:"submit",children:"Login"})]})]})}const YT=E.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`,QT=E.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  justify-content: flex-start;
  width: auto;
  font-size: 50px;
`,KT=E.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,ZT=E.form`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }
`,qh=E.div`
  margin-bottom: 1.5rem;
  text-align: left;
`,Xh=E.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`,Jh=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`,e$=E.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`,t$=E.p`
  color: red;
  margin-bottom: 1rem;
`,n$=({onConfirm:e,onCancel:t})=>a.jsx(r$,{children:a.jsxs(o$,{children:[a.jsx("h2",{children:"Confirmar"}),a.jsx("p",{children:"¿Estás seguro de que deseas cerrar sesión?"}),a.jsxs(i$,{children:[a.jsx(Yh,{onClick:e,children:"Aceptar"}),a.jsx(Yh,{onClick:t,children:"Cancelar"})]})]})}),r$=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,o$=E.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`,i$=E.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`,Yh=E.button`
  padding: 10px 20px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`,s$=()=>{const{setAuth:e}=w.useContext(Hi),t=ve(),[n,r]=w.useState(!0),o=()=>{e(null),localStorage.removeItem("token"),t("/login")},i=()=>{r(!1),t(-1)};return a.jsxs(a$,{children:[n&&a.jsx(n$,{onConfirm:o,onCancel:i}),!n&&a.jsx("div",{children:"Cerrando sesión..."})]})},a$=E.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;var Xv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var l in i)t.call(i,l)&&i[l]&&(s=o(s,l));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Xv);var l$=Xv.exports;const u$=cg(l$),c$=["xxl","xl","lg","md","sm","xs"],d$="xs",f$=w.createContext({prefixes:{},breakpoints:c$,minBreakpoint:d$});function p$(e,t){const{prefixes:n}=w.useContext(f$);return e||n[t]||t}const Lt=w.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:s,variant:l,responsive:u,...c},d)=>{const f=p$(e,"table"),h=u$(t,f,l&&`${f}-${l}`,s&&`${f}-${s}`,n&&`${f}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${f}-bordered`,o&&`${f}-borderless`,i&&`${f}-hover`),x=a.jsx("table",{...c,className:h,ref:d});if(u){let m=`${f}-responsive`;return typeof u=="string"&&(m=`${m}-${u}`),a.jsx("div",{className:m,children:x})}return x});var bt={},wl={},Rr={},Jv={},bf={},Lr={},_o={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=w;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Je=Object.prototype.hasOwnProperty,h$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qh={},Kh={};function Qv(e){return Je.call(Kh,e)?!0:Je.call(Qh,e)?!1:h$.test(e)?Kh[e]=!0:(Qh[e]=!0,!1)}function qe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sf=/[\-:]([a-z])/g;function jf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sf,jf);Ie[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sf,jf);Ie[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sf,jf);Ie[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m$=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(e){m$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bs[t]=Bs[e]})});var g$=/["'&<>]/;function Be(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=g$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var x$=/([A-Z])/g,v$=/^ms-/,Yc=Array.isArray;function un(e,t){return{insertionMode:e,selectedValue:t}}function y$(e,t,n){switch(t){case"select":return un(1,n.value!=null?n.value:n.defaultValue);case"svg":return un(2,null);case"math":return un(3,null);case"foreignObject":return un(1,null);case"table":return un(4,null);case"thead":case"tbody":case"tfoot":return un(5,null);case"colgroup":return un(7,null);case"tr":return un(6,null)}return 4<=e.insertionMode||e.insertionMode===0?un(1,null):e}var Zh=new Map;function Kv(e,t,n){if(typeof n!="object")throw Error(W(62));t=!0;for(var r in n)if(Je.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=Be(r);o=Be((""+o).trim())}else{i=r;var s=Zh.get(i);s!==void 0||(s=Be(i.replace(x$,"-$1").toLowerCase().replace(v$,"-ms-")),Zh.set(i,s)),i=s,o=typeof o=="number"?o===0||Je.call(Bs,r)?""+o:o+"px":Be((""+o).trim())}t?(t=!1,e.push(' style="',i,":",o)):e.push(";",i,":",o)}}t||e.push('"')}function it(e,t,n,r){switch(n){case"style":Kv(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Ie.hasOwnProperty(n)?Ie[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',Be(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',Be(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',Be(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',Be(r),'"')}}else if(Qv(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',Be(r),'"')}}}function Us(e,t,n){if(t!=null){if(n!=null)throw Error(W(60));if(typeof t!="object"||!("__html"in t))throw Error(W(61));t=t.__html,t!=null&&e.push(""+t)}}function w$(e){var t="";return Yv.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Cu(e,t,n,r){e.push(Yt(n));var o=n=null,i;for(i in t)if(Je.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:it(e,r,i,s)}}return e.push(">"),Us(e,o,n),typeof n=="string"?(e.push(Be(n)),null):n}var b$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,em=new Map;function Yt(e){var t=em.get(e);if(t===void 0){if(!b$.test(e))throw Error(W(65,e));t="<"+e,em.set(e,t)}return t}function S$(e,t,n,r,o){switch(t){case"select":e.push(Yt("select"));var i=null,s=null;for(d in n)if(Je.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:it(e,r,d,l)}}return e.push(">"),Us(e,s,i),i;case"option":s=o.selectedValue,e.push(Yt("option"));var u=l=null,c=null,d=null;for(i in n)if(Je.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:it(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:w$(l),Yc(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(' selected=""');break}}else""+s===n&&e.push(' selected=""');else c&&e.push(' selected=""');return e.push(">"),Us(e,d,l),l;case"textarea":e.push(Yt("textarea")),d=s=i=null;for(l in n)if(Je.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(W(91));default:it(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(">"),d!=null){if(i!=null)throw Error(W(92));if(Yc(d)&&1<d.length)throw Error(W(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i!==null&&e.push(Be(""+i)),null;case"input":e.push(Yt("input")),u=d=l=i=null;for(s in n)if(Je.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(W(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:it(e,r,s,c)}return d!==null?it(e,r,"checked",d):u!==null&&it(e,r,"checked",u),i!==null?it(e,r,"value",i):l!==null&&it(e,r,"value",l),e.push("/>"),null;case"menuitem":e.push(Yt("menuitem"));for(var h in n)if(Je.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(W(400));default:it(e,r,h,i)}return e.push(">"),null;case"title":e.push(Yt("title")),i=null;for(f in n)if(Je.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(W(434));default:it(e,r,f,s)}return e.push(">"),i;case"listing":case"pre":e.push(Yt(t)),s=i=null;for(u in n)if(Je.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:it(e,r,u,l)}if(e.push(">"),s!=null){if(i!=null)throw Error(W(60));if(typeof s!="object"||!("__html"in s))throw Error(W(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Yt(t));for(var x in n)if(Je.call(n,x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(W(399,t));default:it(e,r,x,i)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Cu(e,n,t,r);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),Cu(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Cu(e,n,t,r);e.push(Yt(t)),s=i=null;for(c in n)if(Je.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":Kv(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Qv(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(" ",c,'="',Be(l),'"')}return e.push(">"),Us(e,s,i),i}}function tm(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(W(395));return e.push(n),e.push('"></template>')}function j$(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(W(397))}}function E$(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(W(397))}}var C$=/[<\u2028\u2029]/g;function ku(e){return JSON.stringify(e).replace(C$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function k$(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function nm(e,t,n,r){return n.generateStaticMarkup?(e.push(Be(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(Be(t)),e=!0),e)}var ui=Object.assign,T$=Symbol.for("react.element"),Zv=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),oy=Symbol.for("react.context"),iy=Symbol.for("react.forward_ref"),sy=Symbol.for("react.suspense"),ay=Symbol.for("react.suspense_list"),ly=Symbol.for("react.memo"),Ef=Symbol.for("react.lazy"),$$=Symbol.for("react.scope"),_$=Symbol.for("react.debug_trace_mode"),P$=Symbol.for("react.legacy_hidden"),N$=Symbol.for("react.default_value"),rm=Symbol.iterator;function Qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ey:return"Fragment";case Zv:return"Portal";case ny:return"Profiler";case ty:return"StrictMode";case sy:return"Suspense";case ay:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oy:return(e.displayName||"Context")+".Consumer";case ry:return(e._context.displayName||"Context")+".Provider";case iy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ly:return t=e.displayName||null,t!==null?t:Qc(e.type)||"Memo";case Ef:t=e._payload,e=e._init;try{return Qc(e(t))}catch{}}return null}var uy={};function om(e,t){if(e=e.contextTypes,!e)return uy;var n={},r;for(r in e)n[r]=t[r];return n}var vr=null;function bl(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(W(401))}else{if(n===null)throw Error(W(401));bl(e,n)}t.context._currentValue2=t.value}}function cy(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&cy(e)}function dy(e){var t=e.parent;t!==null&&dy(t),e.context._currentValue2=e.value}function fy(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(W(402));e.depth===t.depth?bl(e,t):fy(e,t)}function py(e,t){var n=t.parent;if(n===null)throw Error(W(402));e.depth===n.depth?bl(e,n):py(e,n),t.context._currentValue2=t.value}function za(e){var t=vr;t!==e&&(t===null?dy(e):e===null?cy(t):t.depth===e.depth?bl(t,e):t.depth>e.depth?fy(t,e):py(t,e),vr=e)}var im={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function sm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=im,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue2:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:ui({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&im.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=ui({},i,l)):ui(i,l))}e.state=i}else i.queue=null}var R$={id:1,overflow:""};function Kc(e,t,n){var r=e.id;e=e.overflow;var o=32-Vs(r)-1;r&=~(1<<o),n+=1;var i=32-Vs(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-Vs(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var Vs=Math.clz32?Math.clz32:L$,I$=Math.log,z$=Math.LN2;function L$(e){return e>>>=0,e===0?32:31-(I$(e)/z$|0)|0}function A$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var M$=typeof Object.is=="function"?Object.is:A$,Sn=null,Cf=null,Hs=null,se=null,qo=!1,La=!1,Ri=0,Bn=null,Sl=0;function cr(){if(Sn===null)throw Error(W(321));return Sn}function am(){if(0<Sl)throw Error(W(312));return{memoizedState:null,queue:null,next:null}}function kf(){return se===null?Hs===null?(qo=!1,Hs=se=am()):(qo=!0,se=Hs):se.next===null?(qo=!1,se=se.next=am()):(qo=!0,se=se.next),se}function Tf(){Cf=Sn=null,La=!1,Hs=null,Sl=0,se=Bn=null}function hy(e,t){return typeof t=="function"?t(e):t}function lm(e,t,n){if(Sn=cr(),se=kf(),qo){var r=se.queue;if(t=r.dispatch,Bn!==null&&(n=Bn.get(r),n!==void 0)){Bn.delete(r),r=se.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return se.memoizedState=r,[r,t]}return[se.memoizedState,t]}return e=e===hy?typeof t=="function"?t():t:n!==void 0?n(t):t,se.memoizedState=e,e=se.queue={last:null,dispatch:null},e=e.dispatch=D$.bind(null,Sn,e),[se.memoizedState,e]}function um(e,t){if(Sn=cr(),se=kf(),t=t===void 0?null:t,se!==null){var n=se.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!M$(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),se.memoizedState=[e,t],e}function D$(e,t,n){if(25<=Sl)throw Error(W(301));if(e===Sn)if(La=!0,e={action:n,next:null},Bn===null&&(Bn=new Map),n=Bn.get(t),n===void 0)Bn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function O$(){throw Error(W(394))}function gs(){}var cm={readContext:function(e){return e._currentValue2},useContext:function(e){return cr(),e._currentValue2},useMemo:um,useReducer:lm,useRef:function(e){Sn=cr(),se=kf();var t=se.memoizedState;return t===null?(e={current:e},se.memoizedState=e):t},useState:function(e){return lm(hy,e)},useInsertionEffect:gs,useLayoutEffect:function(){},useCallback:function(e,t){return um(function(){return e},t)},useImperativeHandle:gs,useEffect:gs,useDebugValue:gs,useDeferredValue:function(e){return cr(),e},useTransition:function(){return cr(),[!1,O$]},useId:function(){var e=Cf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Vs(e)-1)).toString(32)+t;var n=Ws;if(n===null)throw Error(W(404));return t=Ri++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return cr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(W(407));return n()}},Ws=null,Tu=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function F$(e){return console.error(e),null}function Xo(){}function B$(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?F$:o,onAllReady:Xo,onShellReady:s===void 0?Xo:s,onShellError:Xo,onFatalError:Xo},n=Aa(t,0,null,n,!1,!1),n.parentFlushed=!0,e=$f(t,e,null,n,d,uy,null,R$),c.push(e),t}function $f(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&xy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Aa(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Ii(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function Ma(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function dm(e,t,n,r,o){for(Sn={},Cf=t,Ri=0,e=n(r,o);La;)La=!1,Ri=0,Sl+=1,se=null,e=n(r,o);return Tf(),e}function fm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(W(108,Qc(r)||"Unknown",l));r=ui({},s,n)}t.legacyContext=r,ut(e,t,o),t.legacyContext=s}else ut(e,t,o)}function pm(e,t){if(e&&e.defaultProps){t=ui({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zc(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=om(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue2:o),sm(i,n,r,o),fm(e,t,i,n)}else{i=om(n,t.legacyContext),o=dm(e,t,n,r,i);var s=Ri!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)sm(o,n,r,i),fm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=Kc(r,1,0);try{ut(e,t,o)}finally{t.treeContext=r}}else ut(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=S$(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=y$(s,n,r),ed(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",n,">")}o.lastPushedText=!1}else{switch(n){case P$:case _$:case ty:case ny:case ey:ut(e,t,r.children);return;case ay:ut(e,t,r.children);return;case $$:throw Error(W(343));case sy:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Aa(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Aa(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(ed(e,t,r),e.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),c.status=1,Da(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Ii(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=$f(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case iy:if(r=dm(e,t,n.render,r,o),Ri!==0){n=t.treeContext,t.treeContext=Kc(n,1,0);try{ut(e,t,r)}finally{t.treeContext=n}}else ut(e,t,r);return;case ly:n=n.type,r=pm(n,r),Zc(e,t,n,r,o);return;case ry:if(o=r.children,n=n._context,r=r.value,i=n._currentValue2,n._currentValue2=r,s=vr,vr=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,ut(e,t,o),e=vr,e===null)throw Error(W(403));r=e.parentValue,e.context._currentValue2=r===N$?e.context._defaultValue:r,e=vr=e.parent,t.context=e;return;case oy:r=r.children,r=r(n._currentValue2),ut(e,t,r);return;case Ef:o=n._init,n=o(n._payload),r=pm(n,r),Zc(e,t,n,r,void 0);return}throw Error(W(130,n==null?n:typeof n,""))}}function ut(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case T$:Zc(e,t,n.type,n.props,n.ref);return;case Zv:throw Error(W(257));case Ef:var r=n._init;n=r(n._payload),ut(e,t,n);return}if(Yc(n)){hm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=rm&&n[rm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);hm(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=nm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=nm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function hm(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=Kc(i,r,o);try{ed(e,t,n[o])}finally{t.treeContext=i}}}function ed(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return ut(e,t,n)}catch(u){if(Tf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Aa(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=$f(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,za(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,za(i),u}}function U$(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,gy(this,t,e)}function my(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(W(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return my(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Da(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Da(e,n)}else e.completedSegments.push(t)}function gy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(W(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Xo,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Da(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(U$,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Da(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function xy(e){if(e.status!==2){var t=vr,n=Tu.current;Tu.current=cm;var r=Ws;Ws=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){za(s.context);try{ut(l,s,s.node),l.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),s.abortSet.delete(s),u.status=1,gy(l,s.blockedBoundary,u)}catch(m){if(Tf(),typeof m=="object"&&m!==null&&typeof m.then=="function"){var c=s.ping;m.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=m,h=Ii(l,f);if(d===null?Ma(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var x=l.onAllReady;x()}}}finally{}}}o.splice(0,i),e.destination!==null&&_f(e,e.destination)}catch(m){Ii(e,m),Ma(e,m)}finally{Ws=r,Tu.current=n,n===cm&&za(t)}}}function xs(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)t.push(r[i]);o=jl(e,t,o)}for(;i<r.length-1;i++)t.push(r[i]);return i<r.length&&(o=t.push(r[i])),o;default:throw Error(W(390))}}function jl(e,t,n){var r=n.boundary;if(r===null)return xs(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=Be(r),t.push(r),t.push('"')),t.push("></template>")),xs(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;return o=o.boundaryPrefix+i.toString(16),r=r.id=o,tm(t,e.responseState,r),xs(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),tm(t,e.responseState,r.id),xs(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(W(391));return jl(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function mm(e,t,n){return j$(t,e.responseState,n.formatContext,n.id),jl(e,t,n),E$(t,n.formatContext)}function gm(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)vy(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(W(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function vy(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(W(392));return mm(e,t,r)}return mm(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")<\/script>')}function _f(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){jl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(r.push(l.startInlineScript),l.sentClientRenderFunction?r.push('$RX("'):(l.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(W(395));if(r.push(u),r.push('"'),c||d||f){r.push(",");var h=ku(c||"");r.push(h)}if(d||f){r.push(",");var x=ku(d||"");r.push(x)}if(f){r.push(",");var m=ku(f);r.push(m)}if(!r.push(")<\/script>")){e.destination=null,i++,o.splice(0,i);return}}o.splice(0,i);var S=e.completedBoundaries;for(i=0;i<S.length;i++)if(!gm(e,t,S[i])){e.destination=null,i++,S.splice(0,i);return}S.splice(0,i);var b=e.partialBoundaries;for(i=0;i<b.length;i++){var g=b[i];e:{o=e,s=t;var v=g.completedSegments;for(l=0;l<v.length;l++)if(!vy(o,s,g,v[l])){l++,v.splice(0,l);var p=!1;break e}v.splice(0,l),p=!0}if(!p){e.destination=null,i++,b.splice(0,i);return}}b.splice(0,i);var y=e.completedBoundaries;for(i=0;i<y.length;i++)if(!gm(e,t,y[i])){e.destination=null,i++,y.splice(0,i);return}y.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function V$(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return my(r,e,t)}),n.clear(),e.destination!==null&&_f(e,e.destination)}catch(r){Ii(e,r),Ma(e,r)}}function H$(){}function yy(e,t,n,r){var o=!1,i=null,s="",l={push:function(c){return c!==null&&(s+=c),!0},destroy:function(c){o=!0,i=c}},u=!1;if(e=B$(e,k$(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,H$,void 0,function(){u=!0}),xy(e),V$(e,r),e.status===1)e.status=2,l.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=l;try{_f(e,l)}catch(c){Ii(e,c),Ma(e,c)}}if(o)throw i;if(!u)throw Error(W(426));return s}_o.renderToNodeStream=function(){throw Error(W(207))};_o.renderToStaticMarkup=function(e,t){return yy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};_o.renderToStaticNodeStream=function(){throw Error(W(208))};_o.renderToString=function(e,t){return yy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};_o.version="18.3.1";var Pf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=w;function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ct=null,dt=0;function B(e,t){if(t.length!==0)if(512<t.length)0<dt&&(e.enqueue(new Uint8Array(ct.buffer,0,dt)),ct=new Uint8Array(512),dt=0),e.enqueue(t);else{var n=ct.length-dt;n<t.length&&(n===0?e.enqueue(ct):(ct.set(t.subarray(0,n),dt),e.enqueue(ct),t=t.subarray(n)),ct=new Uint8Array(512),dt=0),ct.set(t,dt),dt+=t.length}}function de(e,t){return B(e,t),!0}function xm(e){ct&&0<dt&&(e.enqueue(new Uint8Array(ct.buffer,0,dt)),ct=null,dt=0)}var by=new TextEncoder;function J(e){return by.encode(e)}function M(e){return by.encode(e)}function Sy(e,t){typeof e.error=="function"?e.error(t):e.close()}var Ye=Object.prototype.hasOwnProperty,W$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vm={},ym={};function jy(e){return Ye.call(ym,e)?!0:Ye.call(vm,e)?!1:W$.test(e)?ym[e]=!0:(vm[e]=!0,!1)}function Xe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Rf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nf,Rf);ze[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nf,Rf);ze[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nf,Rf);ze[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G$=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(e){G$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gs[t]=Gs[e]})});var q$=/["'&<>]/;function Pe(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=q$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var X$=/([A-Z])/g,J$=/^ms-/,td=Array.isArray,Y$=M("<script>"),Q$=M("<\/script>"),K$=M('<script src="'),Z$=M('<script type="module" src="'),wm=M('" async=""><\/script>'),e3=/(<\/|<)(s)(cript)/gi;function t3(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function n3(e,t,n,r,o){e=e===void 0?"":e,t=t===void 0?Y$:M('<script nonce="'+Pe(t)+'">');var i=[];if(n!==void 0&&i.push(t,J((""+n).replace(e3,t3)),Q$),r!==void 0)for(n=0;n<r.length;n++)i.push(K$,J(Pe(r[n])),wm);if(o!==void 0)for(r=0;r<o.length;r++)i.push(Z$,J(Pe(o[r])),wm);return{bootstrapChunks:i,startInlineScript:t,placeholderPrefix:M(e+"P:"),segmentPrefix:M(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Qt(e,t){return{insertionMode:e,selectedValue:t}}function r3(e){return Qt(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function o3(e,t,n){switch(t){case"select":return Qt(1,n.value!=null?n.value:n.defaultValue);case"svg":return Qt(2,null);case"math":return Qt(3,null);case"foreignObject":return Qt(1,null);case"table":return Qt(4,null);case"thead":case"tbody":case"tfoot":return Qt(5,null);case"colgroup":return Qt(7,null);case"tr":return Qt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Qt(1,null):e}var If=M("<!-- -->");function bm(e,t,n,r){return t===""?r:(r&&e.push(If),e.push(J(Pe(t))),!0)}var Sm=new Map,i3=M(' style="'),jm=M(":"),s3=M(";");function Ey(e,t,n){if(typeof n!="object")throw Error(X(62));t=!0;for(var r in n)if(Ye.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=J(Pe(r));o=J(Pe((""+o).trim()))}else{i=r;var s=Sm.get(i);s!==void 0||(s=M(Pe(i.replace(X$,"-$1").toLowerCase().replace(J$,"-ms-"))),Sm.set(i,s)),i=s,o=typeof o=="number"?o===0||Ye.call(Gs,r)?J(""+o):J(o+"px"):J(Pe((""+o).trim()))}t?(t=!1,e.push(i3,i,jm,o)):e.push(s3,i,jm,o)}}t||e.push(dr)}var Nn=M(" "),Fr=M('="'),dr=M('"'),Em=M('=""');function st(e,t,n,r){switch(n){case"style":Ey(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=ze.hasOwnProperty(n)?ze[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=J(t.attributeName),t.type){case 3:r&&e.push(Nn,n,Em);break;case 4:r===!0?e.push(Nn,n,Em):r!==!1&&e.push(Nn,n,Fr,J(Pe(r)),dr);break;case 5:isNaN(r)||e.push(Nn,n,Fr,J(Pe(r)),dr);break;case 6:!isNaN(r)&&1<=r&&e.push(Nn,n,Fr,J(Pe(r)),dr);break;default:t.sanitizeURL&&(r=""+r),e.push(Nn,n,Fr,J(Pe(r)),dr)}}else if(jy(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(Nn,J(n),Fr,J(Pe(r)),dr)}}}var Rn=M(">"),Cm=M("/>");function qs(e,t,n){if(t!=null){if(n!=null)throw Error(X(60));if(typeof t!="object"||!("__html"in t))throw Error(X(61));t=t.__html,t!=null&&e.push(J(""+t))}}function a3(e){var t="";return wy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var $u=M(' selected=""');function _u(e,t,n,r){e.push(Kt(n));var o=n=null,i;for(i in t)if(Ye.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:st(e,r,i,s)}}return e.push(Rn),qs(e,o,n),typeof n=="string"?(e.push(J(Pe(n))),null):n}var Pu=M(`
`),l3=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,km=new Map;function Kt(e){var t=km.get(e);if(t===void 0){if(!l3.test(e))throw Error(X(65,e));t=M("<"+e),km.set(e,t)}return t}var u3=M("<!DOCTYPE html>");function c3(e,t,n,r,o){switch(t){case"select":e.push(Kt("select"));var i=null,s=null;for(d in n)if(Ye.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:st(e,r,d,l)}}return e.push(Rn),qs(e,s,i),i;case"option":s=o.selectedValue,e.push(Kt("option"));var u=l=null,c=null,d=null;for(i in n)if(Ye.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:st(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:a3(l),td(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push($u);break}}else""+s===n&&e.push($u);else c&&e.push($u);return e.push(Rn),qs(e,d,l),l;case"textarea":e.push(Kt("textarea")),d=s=i=null;for(l in n)if(Ye.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(X(91));default:st(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(Rn),d!=null){if(i!=null)throw Error(X(92));if(td(d)&&1<d.length)throw Error(X(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(Pu),i!==null&&e.push(J(Pe(""+i))),null;case"input":e.push(Kt("input")),u=d=l=i=null;for(s in n)if(Ye.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(X(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:st(e,r,s,c)}return d!==null?st(e,r,"checked",d):u!==null&&st(e,r,"checked",u),i!==null?st(e,r,"value",i):l!==null&&st(e,r,"value",l),e.push(Cm),null;case"menuitem":e.push(Kt("menuitem"));for(var h in n)if(Ye.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(X(400));default:st(e,r,h,i)}return e.push(Rn),null;case"title":e.push(Kt("title")),i=null;for(f in n)if(Ye.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(X(434));default:st(e,r,f,s)}return e.push(Rn),i;case"listing":case"pre":e.push(Kt(t)),s=i=null;for(u in n)if(Ye.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:st(e,r,u,l)}if(e.push(Rn),s!=null){if(i!=null)throw Error(X(60));if(typeof s!="object"||!("__html"in s))throw Error(X(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Pu,J(n)):e.push(J(""+n)))}return typeof i=="string"&&i[0]===`
`&&e.push(Pu),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Kt(t));for(var x in n)if(Ye.call(n,x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(X(399,t));default:st(e,r,x,i)}return e.push(Cm),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return _u(e,n,t,r);case"html":return o.insertionMode===0&&e.push(u3),_u(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return _u(e,n,t,r);e.push(Kt(t)),s=i=null;for(c in n)if(Ye.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":Ey(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:jy(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(Nn,J(c),Fr,J(Pe(l)),dr)}return e.push(Rn),qs(e,s,i),i}}var d3=M("</"),f3=M(">"),p3=M('<template id="'),h3=M('"></template>'),m3=M("<!--$-->"),g3=M('<!--$?--><template id="'),x3=M('"></template>'),v3=M("<!--$!-->"),y3=M("<!--/$-->"),w3=M("<template"),b3=M('"'),S3=M(' data-dgst="');M(' data-msg="');M(' data-stck="');var j3=M("></template>");function Tm(e,t,n){if(B(e,g3),n===null)throw Error(X(395));return B(e,n),de(e,x3)}var E3=M('<div hidden id="'),C3=M('">'),k3=M("</div>"),T3=M('<svg aria-hidden="true" style="display:none" id="'),$3=M('">'),_3=M("</svg>"),P3=M('<math aria-hidden="true" style="display:none" id="'),N3=M('">'),R3=M("</math>"),I3=M('<table hidden id="'),z3=M('">'),L3=M("</table>"),A3=M('<table hidden><tbody id="'),M3=M('">'),D3=M("</tbody></table>"),O3=M('<table hidden><tr id="'),F3=M('">'),B3=M("</tr></table>"),U3=M('<table hidden><colgroup id="'),V3=M('">'),H3=M("</colgroup></table>");function W3(e,t,n,r){switch(n.insertionMode){case 0:case 1:return B(e,E3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,C3);case 2:return B(e,T3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,$3);case 3:return B(e,P3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,N3);case 4:return B(e,I3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,z3);case 5:return B(e,A3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,M3);case 6:return B(e,O3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,F3);case 7:return B(e,U3),B(e,t.segmentPrefix),B(e,J(r.toString(16))),de(e,V3);default:throw Error(X(397))}}function G3(e,t){switch(t.insertionMode){case 0:case 1:return de(e,k3);case 2:return de(e,_3);case 3:return de(e,R3);case 4:return de(e,L3);case 5:return de(e,D3);case 6:return de(e,B3);case 7:return de(e,H3);default:throw Error(X(397))}}var q3=M('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),X3=M('$RS("'),J3=M('","'),Y3=M('")<\/script>'),Q3=M('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),K3=M('$RC("'),Z3=M('","'),e_=M('")<\/script>'),t_=M('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),n_=M('$RX("'),r_=M('"'),o_=M(")<\/script>"),Nu=M(","),i_=/[<\u2028\u2029]/g;function Ru(e){return JSON.stringify(e).replace(i_,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var ci=Object.assign,s_=Symbol.for("react.element"),Cy=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),Py=Symbol.for("react.context"),Ny=Symbol.for("react.forward_ref"),Ry=Symbol.for("react.suspense"),Iy=Symbol.for("react.suspense_list"),zy=Symbol.for("react.memo"),zf=Symbol.for("react.lazy"),a_=Symbol.for("react.scope"),l_=Symbol.for("react.debug_trace_mode"),u_=Symbol.for("react.legacy_hidden"),c_=Symbol.for("react.default_value"),$m=Symbol.iterator;function nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ky:return"Fragment";case Cy:return"Portal";case $y:return"Profiler";case Ty:return"StrictMode";case Ry:return"Suspense";case Iy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Py:return(e.displayName||"Context")+".Consumer";case _y:return(e._context.displayName||"Context")+".Provider";case Ny:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zy:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case zf:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}var Ly={};function _m(e,t){if(e=e.contextTypes,!e)return Ly;var n={},r;for(r in e)n[r]=t[r];return n}var yr=null;function El(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(X(401))}else{if(n===null)throw Error(X(401));El(e,n)}t.context._currentValue=t.value}}function Ay(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Ay(e)}function My(e){var t=e.parent;t!==null&&My(t),e.context._currentValue=e.value}function Dy(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(X(402));e.depth===t.depth?El(e,t):Dy(e,t)}function Oy(e,t){var n=t.parent;if(n===null)throw Error(X(402));e.depth===n.depth?El(e,n):Oy(e,n),t.context._currentValue=t.value}function Oa(e){var t=yr;t!==e&&(t===null?My(e):e===null?Ay(t):t.depth===e.depth?El(t,e):t.depth>e.depth?Dy(t,e):Oy(t,e),yr=e)}var Pm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Nm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=Pm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:ci({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Pm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=ci({},i,l)):ci(i,l))}e.state=i}else i.queue=null}var d_={id:1,overflow:""};function rd(e,t,n){var r=e.id;e=e.overflow;var o=32-Xs(r)-1;r&=~(1<<o),n+=1;var i=32-Xs(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-Xs(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var Xs=Math.clz32?Math.clz32:h_,f_=Math.log,p_=Math.LN2;function h_(e){return e>>>=0,e===0?32:31-(f_(e)/p_|0)|0}function m_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var g_=typeof Object.is=="function"?Object.is:m_,jn=null,Lf=null,Js=null,ae=null,Jo=!1,Fa=!1,zi=0,Un=null,Cl=0;function fr(){if(jn===null)throw Error(X(321));return jn}function Rm(){if(0<Cl)throw Error(X(312));return{memoizedState:null,queue:null,next:null}}function Af(){return ae===null?Js===null?(Jo=!1,Js=ae=Rm()):(Jo=!0,ae=Js):ae.next===null?(Jo=!1,ae=ae.next=Rm()):(Jo=!0,ae=ae.next),ae}function Mf(){Lf=jn=null,Fa=!1,Js=null,Cl=0,ae=Un=null}function Fy(e,t){return typeof t=="function"?t(e):t}function Im(e,t,n){if(jn=fr(),ae=Af(),Jo){var r=ae.queue;if(t=r.dispatch,Un!==null&&(n=Un.get(r),n!==void 0)){Un.delete(r),r=ae.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return ae.memoizedState=r,[r,t]}return[ae.memoizedState,t]}return e=e===Fy?typeof t=="function"?t():t:n!==void 0?n(t):t,ae.memoizedState=e,e=ae.queue={last:null,dispatch:null},e=e.dispatch=x_.bind(null,jn,e),[ae.memoizedState,e]}function zm(e,t){if(jn=fr(),ae=Af(),t=t===void 0?null:t,ae!==null){var n=ae.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!g_(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),ae.memoizedState=[e,t],e}function x_(e,t,n){if(25<=Cl)throw Error(X(301));if(e===jn)if(Fa=!0,e={action:n,next:null},Un===null&&(Un=new Map),n=Un.get(t),n===void 0)Un.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function v_(){throw Error(X(394))}function vs(){}var Lm={readContext:function(e){return e._currentValue},useContext:function(e){return fr(),e._currentValue},useMemo:zm,useReducer:Im,useRef:function(e){jn=fr(),ae=Af();var t=ae.memoizedState;return t===null?(e={current:e},ae.memoizedState=e):t},useState:function(e){return Im(Fy,e)},useInsertionEffect:vs,useLayoutEffect:function(){},useCallback:function(e,t){return zm(function(){return e},t)},useImperativeHandle:vs,useEffect:vs,useDebugValue:vs,useDeferredValue:function(e){return fr(),e},useTransition:function(){return fr(),[!1,v_]},useId:function(){var e=Lf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Xs(e)-1)).toString(32)+t;var n=Ys;if(n===null)throw Error(X(404));return t=zi++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return fr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(X(407));return n()}},Ys=null,Iu=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function y_(e){return console.error(e),null}function Yo(){}function w_(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?y_:o,onAllReady:i===void 0?Yo:i,onShellReady:s===void 0?Yo:s,onShellError:l===void 0?Yo:l,onFatalError:u===void 0?Yo:u},n=Ba(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Df(t,e,null,n,d,Ly,null,d_),c.push(e),t}function Df(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&Vy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Ba(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Li(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function Ua(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,Sy(e.destination,t)):(e.status=1,e.fatalError=t)}function Am(e,t,n,r,o){for(jn={},Lf=t,zi=0,e=n(r,o);Fa;)Fa=!1,zi=0,Cl+=1,ae=null,e=n(r,o);return Mf(),e}function Mm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(X(108,nd(r)||"Unknown",l));r=ci({},s,n)}t.legacyContext=r,ft(e,t,o),t.legacyContext=s}else ft(e,t,o)}function Dm(e,t){if(e&&e.defaultProps){t=ci({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function od(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=_m(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue:o),Nm(i,n,r,o),Mm(e,t,i,n)}else{i=_m(n,t.legacyContext),o=Am(e,t,n,r,i);var s=zi!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)Nm(o,n,r,i),Mm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=rd(r,1,0);try{ft(e,t,o)}finally{t.treeContext=r}}else ft(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=c3(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=o3(s,n,r),id(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(d3,J(n),f3)}o.lastPushedText=!1}else{switch(n){case u_:case l_:case Ty:case $y:case ky:ft(e,t,r.children);return;case Iy:ft(e,t,r.children);return;case a_:throw Error(X(343));case Ry:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Ba(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Ba(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(id(e,t,r),c.lastPushedText&&c.textEmbedded&&c.chunks.push(If),c.status=1,Va(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Li(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Df(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ny:if(r=Am(e,t,n.render,r,o),zi!==0){n=t.treeContext,t.treeContext=rd(n,1,0);try{ft(e,t,r)}finally{t.treeContext=n}}else ft(e,t,r);return;case zy:n=n.type,r=Dm(n,r),od(e,t,n,r,o);return;case _y:if(o=r.children,n=n._context,r=r.value,i=n._currentValue,n._currentValue=r,s=yr,yr=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,ft(e,t,o),e=yr,e===null)throw Error(X(403));r=e.parentValue,e.context._currentValue=r===c_?e.context._defaultValue:r,e=yr=e.parent,t.context=e;return;case Py:r=r.children,r=r(n._currentValue),ft(e,t,r);return;case zf:o=n._init,n=o(n._payload),r=Dm(n,r),od(e,t,n,r,void 0);return}throw Error(X(130,n==null?n:typeof n,""))}}function ft(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case s_:od(e,t,n.type,n.props,n.ref);return;case Cy:throw Error(X(257));case zf:var r=n._init;n=r(n._payload),ft(e,t,n);return}if(td(n)){Om(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=$m&&n[$m]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);Om(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=bm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=bm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Om(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=rd(i,r,o);try{id(e,t,n[o])}finally{t.treeContext=i}}}function id(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return ft(e,t,n)}catch(u){if(Mf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Ba(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Df(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Oa(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Oa(i),u}}function b_(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Uy(this,t,e)}function By(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(X(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return By(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Va(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Va(e,n)}else e.completedSegments.push(t)}function Uy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(X(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Yo,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Va(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(b_,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Va(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Vy(e){if(e.status!==2){var t=yr,n=Iu.current;Iu.current=Lm;var r=Ys;Ys=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){Oa(s.context);try{ft(l,s,s.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(If),s.abortSet.delete(s),u.status=1,Uy(l,s.blockedBoundary,u)}catch(m){if(Mf(),typeof m=="object"&&m!==null&&typeof m.then=="function"){var c=s.ping;m.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=m,h=Li(l,f);if(d===null?Ua(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var x=l.onAllReady;x()}}}finally{}}}o.splice(0,i),e.destination!==null&&Of(e,e.destination)}catch(m){Li(e,m),Ua(e,m)}finally{Ys=r,Iu.current=n,n===Lm&&Oa(t)}}}function ys(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,B(t,p3),B(t,e.placeholderPrefix),e=J(r.toString(16)),B(t,e),de(t,h3);case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)B(t,r[i]);o=kl(e,t,o)}for(;i<r.length-1;i++)B(t,r[i]);return i<r.length&&(o=de(t,r[i])),o;default:throw Error(X(390))}}function kl(e,t,n){var r=n.boundary;if(r===null)return ys(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,de(t,v3),B(t,w3),r&&(B(t,S3),B(t,J(Pe(r))),B(t,b3)),de(t,j3),ys(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;o=M(o.boundaryPrefix+i.toString(16)),r=r.id=o,Tm(t,e.responseState,r),ys(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Tm(t,e.responseState,r.id),ys(e,t,n);else{if(de(t,m3),n=r.completedSegments,n.length!==1)throw Error(X(391));kl(e,t,n[0])}return de(t,y3)}function Fm(e,t,n){return W3(t,e.responseState,n.formatContext,n.id),kl(e,t,n),G3(t,n.formatContext)}function Bm(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)Hy(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,B(t,e.startInlineScript),e.sentCompleteBoundaryFunction?B(t,K3):(e.sentCompleteBoundaryFunction=!0,B(t,Q3)),r===null)throw Error(X(395));return n=J(n.toString(16)),B(t,r),B(t,Z3),B(t,e.segmentPrefix),B(t,n),de(t,e_)}function Hy(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(X(392));return Fm(e,t,r)}return Fm(e,t,r),e=e.responseState,B(t,e.startInlineScript),e.sentCompleteSegmentFunction?B(t,X3):(e.sentCompleteSegmentFunction=!0,B(t,q3)),B(t,e.segmentPrefix),o=J(o.toString(16)),B(t,o),B(t,J3),B(t,e.placeholderPrefix),B(t,o),de(t,Y3)}function Of(e,t){ct=new Uint8Array(512),dt=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){kl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)B(t,r[n]);n<r.length&&de(t,r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(B(r,l.startInlineScript),l.sentClientRenderFunction?B(r,n_):(l.sentClientRenderFunction=!0,B(r,t_)),u===null)throw Error(X(395));B(r,u),B(r,r_),(c||d||f)&&(B(r,Nu),B(r,J(Ru(c||"")))),(d||f)&&(B(r,Nu),B(r,J(Ru(d||"")))),f&&(B(r,Nu),B(r,J(Ru(f)))),de(r,o_)}o.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)Bm(e,t,h[i]);h.splice(0,i),xm(t),ct=new Uint8Array(512),dt=0;var x=e.partialBoundaries;for(i=0;i<x.length;i++){var m=x[i];e:{o=e,s=t;var S=m.completedSegments;for(l=0;l<S.length;l++)if(!Hy(o,s,m,S[l])){l++,S.splice(0,l);var b=!1;break e}S.splice(0,l),b=!0}if(!b){e.destination=null,i++,x.splice(0,i);return}}x.splice(0,i);var g=e.completedBoundaries;for(i=0;i<g.length;i++)Bm(e,t,g[i]);g.splice(0,i)}finally{xm(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Um(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return By(r,e,t)}),n.clear(),e.destination!==null&&Of(e,e.destination)}catch(r){Li(e,r),Ua(e,r)}}Pf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var o,i,s=new Promise(function(d,f){i=d,o=f}),l=w_(e,n3(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),r3(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,i,function(){var d=new ReadableStream({type:"bytes",pull:function(f){if(l.status===1)l.status=2,Sy(f,l.fatalError);else if(l.status!==2&&l.destination===null){l.destination=f;try{Of(l,f)}catch(h){Li(l,h),Ua(l,h)}}},cancel:function(){Um(l)}},{highWaterMark:0});d.allReady=s,n(d)},function(d){s.catch(function(){}),r(d)},o);if(t&&t.signal){var u=t.signal,c=function(){Um(l,u.reason),u.removeEventListener("abort",c)};u.addEventListener("abort",c)}Vy(l)})};Pf.version="18.3.1";var Po,Wy;Po=_o,Wy=Pf;Lr.version=Po.version;Lr.renderToString=Po.renderToString;Lr.renderToStaticMarkup=Po.renderToStaticMarkup;Lr.renderToNodeStream=Po.renderToNodeStream;Lr.renderToStaticNodeStream=Po.renderToStaticNodeStream;Lr.renderToReadableStream=Wy.renderToReadableStream;var S_=$t&&$t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bf,"__esModule",{value:!0});const Dt=S_(w),j_=Lr,E_=["string","number","boolean"];function C_({header:e,body:t}){const n=Dt.default.createElement("tr",null,e.map(o=>Dt.default.createElement("th",{key:o},o))),r=t.map((o,i)=>Array.isArray(o)?Dt.default.createElement("tr",{key:i},o.map((s,l)=>Dt.default.createElement("th",{key:l}," ",s," "))):o!==null&&typeof o=="object"?Dt.default.createElement("tr",{key:i},Object.entries(o).map(([s,l],u)=>typeof l=="object"?(console.error(`typeof ${s} is incorrect, only accept ${E_.join(", ")} `),Dt.default.createElement("th",{key:u})):Dt.default.createElement("th",{key:u},Dt.default.createElement(Dt.default.Fragment,null,l)))):(console.error(`
       data structure is incorrect,  
       data structure type -> 
       " type data = Array<{ [key: string]: string | number | boolean }> 
                         or 
        type data = Array<(string | number | boolean)[]>"
      `),null));return(0,j_.renderToString)(Dt.default.createElement("table",null,Dt.default.createElement("tbody",null,n,r)))}bf.default=C_;(function(e){var t=$t&&$t.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=e.template=e.uri=e.format=e.base64=void 0;function n(i){return window.btoa(unescape(encodeURIComponent(i)))}e.base64=n;function r(i,s){return i.replace(/{(\w+)}/g,(l,u)=>s[u])}e.format=r,e.uri="data:application/vnd.ms-excel;base64,",e.template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{table}</body></html>';var o=bf;Object.defineProperty(e,"createTable",{enumerable:!0,get:function(){return t(o).default}})})(Jv);var k_=$t&&$t.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),T_=$t&&$t.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),$_=$t&&$t.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&k_(t,e,n);return T_(t,e),t};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.downloadExcel=Rr.excel=void 0;const Qo=$_(Jv);function Gy(){return document?!0:((process==null?void 0:"production")!=="production"&&console.error("Failed to access document object"),!1)}function qy(e,t){const n=window.document.createElement("a");return n.href=Qo.uri+Qo.base64(Qo.format(Qo.template,t)),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),!0}function Xy(e,t){if(e)return e.cloneNode(!0).outerHTML;if(t)return Qo.createTable(t);console.error("currentTableRef or tablePayload does not exist")}function __({fileName:e,sheet:t,tablePayload:n},r){if(!Gy())return!1;const o=Xy(r,n);return qy(e,{worksheet:t||"Worksheet",table:o})}Rr.downloadExcel=__;function P_({currentTableRef:e,filename:t,sheet:n}){function r(){if(!Gy())return!1;const o=Xy(e),i=`${t}.xls`;return qy(i,{worksheet:n||"Worksheet",table:o})}return{onDownload:r}}Rr.excel=P_;Object.defineProperty(wl,"__esModule",{value:!0});wl.useDownloadExcel=void 0;const zu=w,N_=Rr;function R_({currentTableRef:e,filename:t,sheet:n}){const[r,o]=(0,zu.useState)({});return(0,zu.useEffect)(()=>{o({currentTableRef:e,filename:t,sheet:n})},[e,t,n]),(0,zu.useMemo)(()=>(0,N_.excel)(r),[r])}wl.useDownloadExcel=R_;(function(e){var t=$t&&$t.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(e,"__esModule",{value:!0}),e.downloadExcel=e.useDownloadExcel=e.DownloadTableExcel=void 0;const n=t(w),r=wl;Object.defineProperty(e,"useDownloadExcel",{enumerable:!0,get:function(){return r.useDownloadExcel}});const o=Rr;Object.defineProperty(e,"downloadExcel",{enumerable:!0,get:function(){return o.downloadExcel}});const i=({currentTableRef:s,filename:l,sheet:u,children:c})=>{const{onDownload:d}=(0,r.useDownloadExcel)({currentTableRef:s,filename:l,sheet:u});return n.default.createElement("span",{onClick:d},c)};e.DownloadTableExcel=i})(bt);const Jy="https://backend-riosdevida-production.up.railway.app",Vm=`${Jy}/api/miembros`,Hm=`${Jy}/api/miembros/lider`;function I_(){const{auth:e}=w.useContext(Hi),[t,n]=w.useState([]),[r,o]=w.useState([]),[i,s]=w.useState(null),l=w.useRef(null),u=localStorage.getItem("token"),c=localStorage.getItem("idUser"),d=localStorage.getItem("rol");w.useEffect(()=>{f(),d===2&&h()},[e]);const f=async(b=c)=>{try{const g=b?await z.get(`${Hm}/${b}`,{headers:{Authorization:`Bearer ${u}`}}):await z.get(e.id_rol===3?`${Hm}/${e.id_usuario}`:Vm,{headers:{Authorization:`Bearer ${u}`}});n(g.data)}catch(g){console.error("Error al obtener los miembros:",g),g.response&&g.response.status===401&&console.log("Token expiró")}},h=async()=>{try{const b=await z.get(`/supervisores/${c}/lideres`,{headers:{Authorization:`Bearer ${u}`}});o(b.data)}catch(b){console.error("Error al obtener líderes:",b)}},x=async b=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${Vm}/${b}`,{headers:{Authorization:`Bearer ${u}`}}),f()}catch(g){console.error("Error al eliminar el miembro:",g),g.response&&g.response.status===401?console.log("Token expiró o no autorizado."):alert("Ocurrió un error al eliminar el miembro. Por favor, intenta de nuevo.")}},m=b=>{const g=b.target.value||null;s(g),f(g)},{onDownload:S}=bt.useDownloadExcel({currentTableRef:l.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(z_,{children:[a.jsx(L_,{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})}),a.jsxs(A_,{children:[a.jsxs(V,{to:"/crearMiembro",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:S,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Miembros"]})]}),e.id_rol===2&&a.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[a.jsx("label",{htmlFor:"liderSelect",children:"Seleccionar Líder:"}),a.jsxs("select",{id:"liderSelect",onChange:m,value:i||"",style:{marginLeft:"10px"},children:[a.jsx("option",{value:"",children:"Ver todos los miembros"}),r.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.nombre," ",b.apellido]},b.id_lider))]})]}),a.jsxs(M_,{striped:!0,bordered:!0,hover:!0,ref:l,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:t.map((b,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:b.nombre}),a.jsx("td",{children:b.apellido}),a.jsx("td",{children:b.Líder?`${b.Líder.nombre} ${b.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarMiembros/${b.id_miembro}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>x(b.id_miembro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},b.id_miembro))})]})]})}const z_=E.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,L_=E.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,A_=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,M_=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"};
  }
`,D_="https://backend-riosdevida-production.up.railway.app",O_=`${D_}/api/miembros`,F_=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(localStorage.getItem("idUser")),s=ve(),l=localStorage.getItem("token"),u=async d=>{d.preventDefault();try{await z.post(O_,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${l}`}}),s("/planillaLider")}catch(f){console.error("Error al crear el miembro:",f)}},c=()=>{s("/planillaLider")};return a.jsx(B_,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:u,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})},B_=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,U_="https://backend-riosdevida-production.up.railway.app",Wm=`${U_}/api/miembros/`,V_=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(localStorage.getItem("idUser")),s=ve(),{id:l}=ir(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await z.put(Wm+l,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${u}`}}),s("/planillaLider")};w.useEffect(()=>{d()},[]);const d=async()=>{const h=await z.get(Wm+l,{headers:{Authorization:`Bearer ${u}`}});t(h.data.nombre),r(h.data.apellido)},f=()=>{s("/planillaLider")};return a.jsx(H_,{children:a.jsx(W_,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:h=>t(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:h=>r(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},H_=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,W_=E.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%; // Ajuste del ancho para encajar en el sidebar
    max-width: 500px;
    box-sizing: border-box;

    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,Yy="https://backend-riosdevida-production.up.railway.app",G_=`${Yy}/api/asistencia`,q_=`${Yy}/api/asistencia/lider/`;function X_(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),s=w.useRef(null);w.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const x=await z.get(`${q_}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(x.data),r(x.data)}catch(x){console.error("Error al obtener los miembros",x),x.response&&x.response.status===401&&console.log("Token expiró")}},d=x=>{const m=x.target.value;if(i(m),m){const S=e.filter(b=>b.fecha===m);r(S)}else r(e)},f=async x=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${G_}/${x}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(m){console.error("Error al eliminar un Miembro:",m)}},{onDownload:h}=bt.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros Lautaro",sheet:"Miembros"});return a.jsxs(J_,{children:[a.jsx(Y_,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsxs(Q_,{children:[a.jsxs(V,{to:"/crearAsistencia",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Asistencia"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Asistencia"]})]}),a.jsxs(K_,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:d})]}),a.jsxs(Z_,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((x,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m+1}),a.jsx("td",{children:x.miembro?`${x.miembro.nombre} ${x.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:x.asistencia}),a.jsx("td",{children:x.fecha}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarAsistencia/${x.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>f(x.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},x.id_miembro_planilla))})]})]})}const J_=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,Y_=E.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,Q_=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,K_=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,Z_=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,Qy="https://backend-riosdevida-production.up.railway.app",eP=`${Qy}/api/planilla`,tP=`${Qy}/api/planilla/planillasLider/`;function nP(){const[e,t]=w.useState([]),n=w.useRef(null),[r,o]=w.useState([]),[i,s]=w.useState("");w.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const x=await z.get(`${tP}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(x.data),o(x.data)}catch(x){console.error("Error al obtener los miembros",x),x.response&&x.response.status===401&&console.log("Token expiró")}},d=x=>{const m=x.target.value;if(s(m),m){const S=e.filter(b=>b.fecha===m);o(S)}else o(e)},f=async x=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla??"))try{await z.delete(`${eP}/${x}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(m){console.error("Error al eliminar un Planilla:",m)}},{onDownload:h}=bt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Miembros Celula",sheet:"Miembros"});return a.jsxs(rP,{children:[a.jsx(oP,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsxs(iP,{children:[a.jsxs(V,{to:"/crearPlanillaGeneral",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Pllanillas"]})]}),a.jsxs(aP,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:i,onChange:d})]}),a.jsxs(sP,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Numero de Planilla"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrion"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jovenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:" Fecha"}),a.jsx("th",{children:" Botones"})]})}),a.jsx("tbody",{children:r.map((x,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m+1}),a.jsx("td",{children:x.id_planilla}),a.jsx("td",{children:`${x.Lider.nombre} ${x.Lider.apellido}`}),a.jsx("td",{children:`${x.Supervisor.nombre} ${x.Supervisor.apellido}`}),a.jsx("td",{children:x.anfitrion}),a.jsx("td",{children:x.ayudante}),a.jsx("td",{children:x.total_invitados}),a.jsx("td",{children:x.total_jov_adult}),a.jsx("td",{children:x.total_ninos}),a.jsx("td",{children:x.total_participantes}),a.jsx("td",{children:x.conv_rec}),a.jsx("td",{children:x.ofrenda}),a.jsx("td",{children:x.fecha}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarPlanillaGeneral/${x.id_planilla}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>f(x.id_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},x.id_planilla))})]})]})}const rP=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,oP=E.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,iP=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,sP=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,aP=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,Ky="https://backend-riosdevida-production.up.railway.app",lP=`${Ky}/api/planilla`,uP=`${Ky}/api/planilla/supervisorPorLider/`,cP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,x]=w.useState(""),[m,S]=w.useState(""),[b,g]=w.useState(""),[v,p]=w.useState(""),[y,j]=w.useState(localStorage.getItem("idUser")),[C,T]=w.useState([]),k=ve(),_=localStorage.getItem("token"),P=localStorage.getItem("idUser");w.useEffect(()=>{(async()=>{try{const ee=await z.get(`${uP}${P}`,{headers:{Authorization:`Bearer ${_}`}});T(ee.data)}catch(ee){console.error("Error al obtener líderes o supervisores",ee)}})()},[_]);const A=async R=>{R.preventDefault();try{await z.post(lP,{id_lider:y,id_supervisor:e,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:m,ofrenda:b,fecha:v},{headers:{Authorization:`Bearer ${_}`}}),k("/generalPlanilla")}catch(ee){console.error("Error al crear la planilla",ee)}},F=()=>{k("/generalPlanilla")};return a.jsx(dP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:A,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:R=>t(R.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),C.map(R=>a.jsxs("option",{value:R.id_supervisor,children:[R.supervisor.nombre," ",R.supervisor.apellido]},R.id_supervisor))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:R=>r(R.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:R=>i(R.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:R=>l(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:R=>c(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:R=>f(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:R=>x(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:m,onChange:R=>S(R.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:R=>g(R.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:v,onChange:R=>p(R.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:F,children:"Cancelar"})]})]})]})})},dP=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    @media (max-width: 600px) {
        .form-wrapper {
            width: 90%;
        }
    }
`,fP="https://backend-riosdevida-production.up.railway.app",Gm=`${fP}/api/planilla/`,pP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,x]=w.useState(""),[m,S]=w.useState(""),[b,g]=w.useState(""),v=ve(),{id:p}=ir(),y=localStorage.getItem("token"),j=async k=>{k.preventDefault(),await z.put(Gm+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:m,fecha:b},{headers:{Authorization:`Bearer ${y}`}}),v("/generalPlanilla")};w.useEffect(()=>{C()},[]);const C=async()=>{const k=await z.get(Gm+p,{headers:{Authorization:`Bearer ${y}`}}),{anfitrion:_,ayudante:P,total_invitados:A,total_jov_adult:F,total_ninos:R,total_participantes:ee,conv_rec:ye,ofrenda:U,fecha:ne}=k.data;t(_),r(P),i(A),l(F),c(R),f(ee),x(ye),S(U),g(ne)},T=()=>{v("/generalPlanilla")};return a.jsx(hP,{children:a.jsx(mP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:k=>t(k.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:k=>r(k.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:k=>i(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:k=>l(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:k=>c(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:k=>f(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:k=>x(k.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:m,onChange:k=>S(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:k=>g(k.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:T,children:"Cancelar"})]})]})]})})})},hP=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,mP=E.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    .form-wrapper {
        margin: 10px;
    }
    .form-label {
        font-weight: bold;
    }
    .form-control {
        margin-bottom: 15px;
    }
    .button-group {
        display: flex;
        justify-content: space-between;
    }
`,Zy="https://backend-riosdevida-production.up.railway.app",gP=`${Zy}/api/asistencia`,xP=`${Zy}/api/miembros/lider/`,vP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState("presente"),[o,i]=w.useState(""),[s,l]=w.useState([]),[u,c]=w.useState(localStorage.getItem("idUser")),d=ve(),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");w.useEffect(()=>{(async()=>{try{const b=await z.get(`${xP}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(b.data)}catch(b){console.error("Error al obtener miembros",b)}})()},[f]);const x=async S=>{S.preventDefault();try{await z.post(gP,{id_miembro:e,asistencia:n,fecha:o,id_lider:u},{headers:{Authorization:`Bearer ${f}`}}),d("/asistencia")}catch(b){console.error("Error al crear la planilla",b)}},m=()=>{d("/asistencia")};return a.jsx(yP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asistencia"}),a.jsxs("form",{onSubmit:x,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Miembro"}),a.jsxs("select",{value:e,onChange:S=>t(S.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Miembro"}),s.map(S=>a.jsxs("option",{value:S.id_miembro,children:[S.nombre," ",S.apellido]},S.id_miembro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:S=>r(S.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:S=>i(S.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Cancelar"})]})]})]})})},yP=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    @media (max-width: 600px) {
        .form-wrapper {
            width: 90%;
        }
    }
`,wP="https://backend-riosdevida-production.up.railway.app",qm=`${wP}/api/asistencia/`,bP=()=>{const[e,t]=w.useState({nombre:"",apellido:""}),[n,r]=w.useState(""),[o,i]=w.useState(""),s=ve(),{id:l}=ir(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await z.put(qm+l,{miembro:e,asistencia:n,fecha:o},{headers:{Authorization:`Bearer ${u}`}}),s("/asistencia")};w.useEffect(()=>{d()},[]);const d=async()=>{const h=await z.get(qm+l,{headers:{Authorization:`Bearer ${u}`}});t({nombre:h.data.miembro.nombre,apellido:h.data.miembro.apellido}),r(h.data.asistencia),i(h.data.fecha)},f=()=>{s("/asistencia")};return a.jsx(SP,{children:a.jsx(jP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla de Asistencia"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e.nombre,onChange:h=>t({...e,nombre:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:e.apellido,onChange:h=>t({...e,apellido:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:h=>i(h.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},SP=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,jP=E.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;

    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }

`,EP="https://backend-riosdevida-production.up.railway.app",Xm=`${EP}/api/usuarios/`;function CP(){const[e,t]=w.useState([]),n=w.useRef(null);w.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await z.get(Xm,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${Xm}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=bt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(kP,{children:[a.jsx(TP,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsxs($P,{children:[a.jsxs(V,{to:"/crearUsuario",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Usuario"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Usuarios"]})]}),a.jsxs(_P,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Correo"}),a.jsx("th",{children:"Rol"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre}),a.jsx("td",{children:l.apellido}),a.jsx("td",{children:l.correo}),a.jsx("td",{children:l.Rol?l.Rol.nombre_rol:"Sin rol"}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarUsuario/${l.id_usuario}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>i(l.id_usuario),className:"btn btn-danger",children:a.jsx(It,{})})]})]},l.id_usuario))})]})]})}const kP=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,TP=E.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,$P=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,_P=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,e1="https://backend-riosdevida-production.up.railway.app",PP=`${e1}/api/usuarios/`,NP=`${e1}/api/roles`,RP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState([]),h=ve(),x=localStorage.getItem("token"),m=async g=>{g.preventDefault();try{await z.post(PP,{nombre:e,apellido:n,correo:o,contraseña:s,id_rol:u},{headers:{Authorization:`Bearer ${x}`}}),h("/registroUsuarios")}catch(v){console.error("Error al crear el miembro:",v)}},S=async()=>{try{const g=await z.get(NP,{headers:{Authorization:`Bearer ${x}`}});f(g.data)}catch(g){console.error("Error al obtener los líderes:",g)}};w.useEffect(()=>{S()},[]);const b=()=>{h("/registroUsuarios")};return a.jsx(IP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:m,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:g=>t(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:g=>r(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:g=>i(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:g=>l(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:g=>c(g.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar "}),d.map(g=>a.jsxs("option",{value:g.id_rol,children:[g.nombre_rol,"  (ID: ",g.id_rol,")"]},g.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:b,children:"Cancelar"})]})]})]})})},IP=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,zP="https://backend-riosdevida-production.up.railway.app",Jm=`${zP}/api/usuarios/`,LP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState([]),h=ve(),{id:x}=ir(),m=localStorage.getItem("token"),S=async p=>{p.preventDefault(),await z.put(Jm+x,{nombre:e,apellido:n,id_rol:u,correo:o,contraseña:s},{headers:{Authorization:`Bearer ${m}`}}),h("/registroUsuarios")},b=async()=>{try{const p=await z.get("http://localhost:4000/api/roles",{headers:{Authorization:`Bearer ${m}`}});f(p.data)}catch(p){console.error("Error al obtener los roles:",p)}};w.useEffect(()=>{g(),b()},[]);const g=async()=>{const p=await z.get(Jm+x,{headers:{Authorization:`Bearer ${m}`}});t(p.data.nombre),r(p.data.apellido),i(p.data.correo),l(p.data.contraseña),c(p.data.id_rol)},v=()=>{h("/registroUsuarios")};return a.jsx(AP,{children:a.jsx(MP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Usuario"}),a.jsxs("form",{onSubmit:S,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:p=>t(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:p=>r(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:p=>i(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:p=>l(p.target.value),type:"password",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:p=>c(p.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar"}),d.map(p=>a.jsxs("option",{value:p.id_rol,children:[p.nombre_rol," (ID: ",p.id_rol,")"]},p.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:v,children:"Cancelar"})]})]})]})})})},AP=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,MP=E.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%; // Ajuste del ancho para encajar en el sidebar
    max-width: 500px;
    box-sizing: border-box;

    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,DP="https://backend-riosdevida-production.up.railway.app",Ym=`${DP}/api/supervisorLider/`;function OP(){const[e,t]=w.useState([]),n=w.useRef(null);w.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await z.get(Ym,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${Ym}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=bt.useDownloadExcel({currentTableRef:n.current,filename:"Planilla de Supervisores",sheet:"Usuarios"});return a.jsxs(FP,{children:[a.jsx(BP,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsxs(UP,{children:[a.jsxs(V,{to:"/crearAsignarSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Asignar Supervisor"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Planilla de Supervisores"]})]}),a.jsxs(VP,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre de Supervisor"}),a.jsx("th",{children:"Nombre de Lider"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:`${l.supervisor.nombre} ${l.supervisor.apellido}`}),a.jsx("td",{children:`${l.lider.nombre} ${l.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarAsignacionSupervisor/${l.id_registro}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>i(l.id_registro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},l.id_registro))})]})]})}const FP=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,BP=E.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,UP=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,VP=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,Ff="https://backend-riosdevida-production.up.railway.app",HP=`${Ff}/api/supervisorLider/`,WP=`${Ff}/api/usuarios/historiallider/`,GP=`${Ff}/api/usuarios/historialSupervisor/`,qP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState([]),[s,l]=w.useState([]),u=ve(),c=localStorage.getItem("token");w.useEffect(()=>{const h=async()=>{try{const m=await z.get(WP,{headers:{Authorization:`Bearer ${c}`}});i(m.data)}catch(m){console.error("Error al obtener Lider",m)}},x=async()=>{try{const m=await z.get(GP,{headers:{Authorization:`Bearer ${c}`}});l(m.data)}catch(m){console.error("Error al obtener Supervisor",m)}};h(),x()},[c]);const d=async h=>{h.preventDefault();try{await z.post(HP,{id_lider:e,id_supervisor:n},{headers:{Authorization:`Bearer ${c}`}}),u("/asignarSupervisor")}catch(x){console.error("Error al crear la asignación",x)}},f=()=>{u("/asignarSupervisor")};return a.jsx(XP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asignación de Supervisor"}),a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Lider"}),a.jsxs("select",{value:e,onChange:h=>t(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Lider"}),o.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})},XP=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    @media (max-width: 600px) {
        .form-wrapper {
            width: 90%;
        }
    }
`,Bf="https://backend-riosdevida-production.up.railway.app",Qm=`${Bf}/api/supervisorLider/`,JP=`${Bf}/api/usuarios/historiallider/`,YP=`${Bf}/api/usuarios/historialSupervisor/`,QP=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState([]),[s,l]=w.useState([]),u=ve(),{id:c}=ir(),d=localStorage.getItem("token"),f=async x=>{x.preventDefault();try{await z.put(Qm+c,{id_supervisor:e,id_lider:n},{headers:{Authorization:`Bearer ${d}`}}),u("/asignarSupervisor")}catch(m){console.error("Error al actualizar la asignación",m)}};w.useEffect(()=>{const x=async()=>{try{const b=await z.get(JP,{headers:{Authorization:`Bearer ${d}`}});i(b.data)}catch(b){console.error("Error al obtener Liders",b)}},m=async()=>{try{const b=await z.get(YP,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener Supervisores",b)}};(async()=>{try{const b=await z.get(Qm+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.id_supervisor),r(b.data.id_lider)}catch(b){console.error("Error al obtener los datos del usuario",b)}})(),x(),m()},[d,c]);const h=()=>{u("/asignarSupervisor")};return a.jsx(KP,{children:a.jsx(ZP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Asignación de Supervisor"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:n,onChange:x=>r(x.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),o.map(x=>a.jsxs("option",{value:x.id_usuario,children:[x.nombre," ",x.apellido," (ID: ",x.id_usuario,")"]},x.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:x=>t(x.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(x=>a.jsxs("option",{value:x.id_usuario,children:[x.nombre," ",x.apellido," (ID: ",x.id_usuario,")"]},x.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"Cancelar"})]})]})]})})})},KP=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,ZP=E.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;

    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,e4="https://backend-riosdevida-production.up.railway.app",Km=`${e4}/api/roles`;function t4(){const[e,t]=w.useState([]),n=w.useRef(null);w.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await z.get(Km,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${Km}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=bt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(n4,{children:[a.jsx(r4,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsxs(o4,{children:[a.jsxs(V,{to:"/crearUnRol",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Un Rol"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Roles"]})]}),a.jsxs(i4,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre Del Rol"}),a.jsx("th",{children:"Descripcion"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre_rol}),a.jsx("td",{children:l.descripcion}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarRol/${l.id_rol}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>i(l.id_rol),className:"btn btn-danger",children:a.jsx(It,{})})]})]},l.id_rol))})]})]})}const n4=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,r4=E.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,o4=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,i4=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,s4="https://backend-riosdevida-production.up.railway.app",a4=`${s4}/api/roles`,l4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),o=ve(),i=localStorage.getItem("token"),s=async u=>{u.preventDefault();try{await z.post(a4,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${i}`}}),o("/registroDeRoles")}catch(c){console.error("Error al crear el miembro:",c)}},l=()=>{o("/registroDeRoles")};return a.jsx(u4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:s,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre del Rol"}),a.jsx("input",{value:e,onChange:u=>t(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:u=>r(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:l,children:"Cancelar"})]})]})]})})},u4=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,c4="https://backend-riosdevida-production.up.railway.app",Zm=`${c4}/api/roles/`,d4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),o=ve(),{id:i}=ir(),s=localStorage.getItem("token"),l=async d=>{d.preventDefault(),await z.put(Zm+i,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${s}`}}),o("/registroDeRoles")};w.useEffect(()=>{u()},[]);const u=async()=>{const d=await z.get(Zm+i,{headers:{Authorization:`Bearer ${s}`}});t(d.data.nombre_rol),r(d.data.descripcion)},c=()=>{o("/registroDeRoles")};return a.jsx(f4,{children:a.jsx(p4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre Del Rol"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})})},f4=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,p4=E.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%; // Ajuste del ancho para encajar en el sidebar
    max-width: 500px;
    box-sizing: border-box;

    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,Tl="https://backend-riosdevida-production.up.railway.app",h4=`${Tl}/api/supervisorLider/supervisor/`,m4=`${Tl}/api/supervisorLider/supervisorLiderMiembro/`,g4=`${Tl}/api/miembros/lider/`,x4=`${Tl}/api/miembros/`;function v4(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),s=w.useRef(null),l=localStorage.getItem("token"),u=localStorage.getItem("idUser");w.useEffect(()=>{c(),d()},[]);const c=async()=>{try{const m=await z.get(`${h4}${u}`,{headers:{Authorization:`Bearer ${l}`}});r(m.data)}catch(m){console.error("Error al obtener los líderes",m)}},d=async(m="")=>{try{const S=m?`${g4}${m}`:`${m4}${u}`,b=await z.get(S,{headers:{Authorization:`Bearer ${l}`}});t(b.data)}catch(S){console.error("Error al obtener los miembros",S)}},f=m=>{const S=m.target.value;i(S),d(S)},h=async m=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${x4}${m}`,{headers:{Authorization:`Bearer ${l}`}}),d(o)}catch(S){console.error("Error al eliminar un miembro:",S)}},{onDownload:x}=bt.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(y4,{children:[a.jsx(w4,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsxs(b4,{children:[a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:o,onChange:f,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(m=>a.jsxs("option",{value:m.id_lider,children:[m.lider.nombre," ",m.lider.apellido]},m.id_lider))]})]}),a.jsxs(V,{to:"/crearMiembroSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:x,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Roles"]})]}),a.jsxs(S4,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:e.map((m,S)=>a.jsxs("tr",{children:[a.jsx("td",{children:S+1}),a.jsx("td",{children:m.nombre}),a.jsx("td",{children:m.apellido}),a.jsx("td",{children:m.Líder?`${m.Líder.nombre} ${m.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarMiembroSupervisor/${m.id_miembro}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>h(m.id_miembro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},m.id_miembro))})]})]})}const y4=E.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,w4=E.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,b4=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  select {
    margin-right: 20px;
    padding: 5px;
  }

  .create-client,
  .download-client {
    margin: 0 10px;
  }
`,S4=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th,
  td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"};
  }
`,t1="https://backend-riosdevida-production.up.railway.app",j4=`${t1}/api/miembros`,E4=`${t1}/api/supervisorLider/supervisor/`,C4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState([]),u=ve(),c=localStorage.getItem("token"),d=localStorage.getItem("idUser"),f=async m=>{m.preventDefault();try{await z.post(j4,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${c}`}}),u("/registroLideryMiembro")}catch(S){console.error("Error al crear el miembro:",S)}},h=async()=>{try{const m=await z.get(`${E4}${d}`,{headers:{Authorization:`Bearer ${c}`}});l(m.data)}catch(m){console.error("Error al obtener los líderes",m)}};w.useEffect(()=>{h()},[]);const x=()=>{u("/registroLideryMiembro")};return a.jsx(k4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:m=>t(m.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:m=>r(m.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:m=>i(m.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(m=>a.jsxs("option",{value:m.id_lider,children:[m.lider.nombre," ",m.lider.apellido]},m.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:x,children:"Cancelar"})]})]})]})})},k4=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,n1="https://backend-riosdevida-production.up.railway.app",eg=`${n1}/api/miembros/`,T4=`${n1}/api/supervisorLider/supervisor/`,$4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState([]),u=ve(),{id:c}=ir(),d=localStorage.getItem("token"),f=localStorage.getItem("idUser"),h=async b=>{b.preventDefault(),await z.put(eg+c,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${d}`}}),u("/registroLideryMiembro")};w.useEffect(()=>{m(),x()},[]);const x=async()=>{try{const b=await z.get(`${T4}${f}`,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener los líderes",b)}},m=async()=>{try{const b=await z.get(eg+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.nombre),r(b.data.apellido),i(b.data.id_líder)}catch(b){console.error("Error al obtener el miembro",b)}},S=()=>{u("/registroLideryMiembro")};return a.jsx(_4,{children:a.jsx(P4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Miembro"}),a.jsxs("form",{onSubmit:h,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:b=>t(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:b=>r(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:b=>i(b.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.lider.nombre," ",b.lider.apellido]},b.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,children:"Cancelar"})]})]})]})})})},_4=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,P4=E.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%; // Ajuste del ancho para encajar en el sidebar
    max-width: 500px;
    box-sizing: border-box;

    .form-wrapper {
        width: 100%;
        box-sizing: border-box;
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .button-group {
        display: flex;
        justify-content: space-between;

        .btn {
            width: 48%;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
    }
`,Uf="https://backend-riosdevida-production.up.railway.app",N4=`${Uf}/api/asistencia`,R4=`${Uf}/api/asistencia/asistenciaSupervisor/`,I4=`${Uf}/api/supervisorLider/supervisor/`;function z4(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState([]),[u,c]=w.useState(""),d=w.useRef(null),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");w.useEffect(()=>{x(),m()},[]);const x=async()=>{try{const y=await z.get(`${R4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(y.data),r(y.data)}catch(y){console.error("Error al obtener las asistencias:",y)}},m=async()=>{try{const y=await z.get(`${I4}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(y.data)}catch(y){console.error("Error al obtener los líderes:",y)}},S=(y,j)=>{let C=e;y&&(C=C.filter(T=>T.fecha===y)),j&&(C=C.filter(T=>T.id_lider===parseInt(j))),r(C)},b=y=>{const j=y.target.value;i(j),S(j,u)},g=y=>{const j=y.target.value;c(j),S(o,j)},v=async y=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await z.delete(`${N4}/${y}`,{headers:{Authorization:`Bearer ${f}`}});const j=e.filter(T=>T.id_miembro_planilla!==y);t(j);const C=j.filter(T=>{const k=!o||T.fecha===o,_=!u||T.id_lider===parseInt(u);return k&&_});r(C)}catch(j){console.error("Error al eliminar la asistencia:",j)}},{onDownload:p}=bt.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(L4,{children:[a.jsx(A4,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsx(M4,{children:a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Asistencia"]})}),a.jsxs(D4,{children:[a.jsxs(tg,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:b})]}),a.jsxs(tg,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:g,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(y=>a.jsxs("option",{value:y.id_lider,children:[y.lider.nombre," ",y.lider.apellido]},y.id_lider))]})]})]}),a.jsxs(O4,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((y,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:y.miembro?`${y.miembro.nombre} ${y.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:y.asistencia}),a.jsx("td",{children:y.lider?`${y.lider.nombre} ${y.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:y.fecha}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarAsistencia/${y.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>v(y.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},y.id_miembro_planilla))})]})]})}const L4=E.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,A4=E.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,M4=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,D4=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,tg=E.div`
  margin: 10px;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,O4=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"};
  }
`,Vf="https://backend-riosdevida-production.up.railway.app",F4=`${Vf}/api/planilla`,B4=`${Vf}/api/planilla/planillasLiderSupervisor/`,U4=`${Vf}/api/supervisorLider/supervisor/`;function V4(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState([]),d=w.useRef(null);w.useEffect(()=>{m(),x()},[]);const f=localStorage.getItem("token"),h=localStorage.getItem("idUser"),x=async()=>{try{const y=await z.get(`${U4}${h}`,{headers:{Authorization:`Bearer ${f}`}});c(y.data)}catch(y){console.error("Error al obtener los líderes:",y)}},m=async()=>{try{const y=await z.get(`${B4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(y.data),r(y.data)}catch(y){console.error("Error al obtener las planillas:",y)}},S=y=>{const j=y.target.value;i(j),g(j,s)},b=y=>{const j=y.target.value;l(j),g(o,j)},g=(y,j)=>{let C=e;y&&(C=C.filter(T=>T.fecha===y)),j&&(C=C.filter(T=>T.id_lider.toString()===j)),r(C)},v=async y=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await z.delete(`${F4}/${y}`,{headers:{Authorization:`Bearer ${f}`}}),m()}catch(j){console.error("Error al eliminar la planilla:",j)}},{onDownload:p}=bt.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(H4,{children:[a.jsx(W4,{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})}),a.jsxs(G4,{children:[a.jsxs(V,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Planillas"]})]}),a.jsxs(X4,{children:[a.jsxs(ng,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(ng,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(y=>a.jsx("option",{value:y.id_lider,children:`${y.lider.nombre} ${y.lider.apellido}`},y.id_lider))]})]})]}),a.jsxs(q4,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((y,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:y.id_planilla}),a.jsx("td",{children:`${y.Lider.nombre} ${y.Lider.apellido}`}),a.jsx("td",{children:`${y.Supervisor.nombre} ${y.Supervisor.apellido}`}),a.jsx("td",{children:y.anfitrion}),a.jsx("td",{children:y.ayudante}),a.jsx("td",{children:y.total_invitados}),a.jsx("td",{children:y.total_jov_adult}),a.jsx("td",{children:y.total_ninos}),a.jsx("td",{children:y.total_participantes}),a.jsx("td",{children:y.conv_rec}),a.jsx("td",{children:y.ofrenda}),a.jsx("td",{children:y.fecha}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarPlanillaGeneralSupervisor/${y.id_planilla}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>v(y.id_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},y.id_planilla))})]})]})}const H4=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,W4=E.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,G4=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,q4=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,X4=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,ng=E.div`
  margin: 10px;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,r1="https://backend-riosdevida-production.up.railway.app",J4=`${r1}/api/planilla`,Y4=`${r1}/api/supervisorLider/supervisor/`,Q4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,x]=w.useState(""),[m,S]=w.useState(""),[b,g]=w.useState(""),[v,p]=w.useState(""),[y,j]=w.useState([]),[C,T]=w.useState(localStorage.getItem("idUser")),k=ve(),_=localStorage.getItem("token"),P=localStorage.getItem("idUser");w.useEffect(()=>{(async()=>{try{const ee=await z.get(`${Y4}${P}`,{headers:{Authorization:`Bearer ${_}`}});j(ee.data)}catch(ee){console.error("Error al obtener líderes o supervisores",ee)}})()},[_]);const A=async R=>{R.preventDefault();try{await z.post(J4,{id_lider:e,id_supervisor:C,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:m,ofrenda:b,fecha:v},{headers:{Authorization:`Bearer ${_}`}}),k("/planillaGeneralSupervisor")}catch(ee){console.error("Error al crear la planilla",ee)}},F=()=>{k("/planillaGeneralSupervisor")};return a.jsx(K4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:A,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:e,onChange:R=>t(R.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),y.map(R=>a.jsxs("option",{value:R.id_lider,children:[R.lider.nombre," ",R.lider.apellido]},R.id_registro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:R=>r(R.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:R=>i(R.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:R=>l(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:R=>c(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:R=>f(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:R=>x(R.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:m,onChange:R=>S(R.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:R=>g(R.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:v,onChange:R=>p(R.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:F,children:"Cancelar"})]})]})]})})},K4=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;

    .form-wrapper {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        overflow-y: auto; // Añade un scroll si el contenido es demasiado grande
    }

    .form-label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    @media (max-width: 600px) {
        .form-wrapper {
            width: 90%;
        }
    }
`,Z4="https://backend-riosdevida-production.up.railway.app",rg=`${Z4}/api/planilla/`,eN=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,x]=w.useState(""),[m,S]=w.useState(""),[b,g]=w.useState(""),v=ve(),{id:p}=ir(),y=localStorage.getItem("token"),j=async k=>{k.preventDefault(),await z.put(rg+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:m,fecha:b},{headers:{Authorization:`Bearer ${y}`}}),v("/planillaGeneralSupervisor")};w.useEffect(()=>{C()},[]);const C=async()=>{const k=await z.get(rg+p,{headers:{Authorization:`Bearer ${y}`}}),{anfitrion:_,ayudante:P,total_invitados:A,total_jov_adult:F,total_ninos:R,total_participantes:ee,conv_rec:ye,ofrenda:U,fecha:ne}=k.data;t(_),r(P),i(A),l(F),c(R),f(ee),x(ye),S(U),g(ne)},T=()=>{v("/planillaGeneralSupervisor")};return a.jsx(tN,{children:a.jsx(nN,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:k=>t(k.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:k=>r(k.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:k=>i(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:k=>l(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:k=>c(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:k=>f(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:k=>x(k.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:m,onChange:k=>S(k.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:k=>g(k.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:T,children:"Cancelar"})]})]})]})})})},tN=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,nN=E.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    .form-wrapper {
        margin: 10px;
    }
    .form-label {
        font-weight: bold;
    }
    .form-control {
        margin-bottom: 15px;
    }
    .button-group {
        display: flex;
        justify-content: space-between;
    }
`,qi="https://backend-riosdevida-production.up.railway.app",rN=`${qi}/api/supervisorLider/supervisor/`,oN=`${qi}/api/miembros/lider/`,iN=`${qi}/api/miembros/`,sN=`${qi}/api/usuarios/historiallider/`,aN=`${qi}/api/usuarios/historialSupervisor/`;function lN(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState([]),[s,l]=w.useState(""),[u,c]=w.useState(""),d=w.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),w.useEffect(()=>{h(),m(),x()},[]);const h=async()=>{try{const p=await z.get(sN,{headers:{Authorization:`Bearer ${f}`}});r(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},x=async()=>{try{const p=await z.get(aN,{headers:{Authorization:`Bearer ${f}`}});i(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},m=async(p="",y="")=>{try{let j=p?`${oN}${p}`:`${rN}${y}`;const C=await z.get(j,{headers:{Authorization:`Bearer ${f}`}});t(C.data)}catch(j){console.error("Error al obtener los miembros:",j)}},S=p=>{const y=p.target.value;l(y),c(""),m(y,"")},b=p=>{const y=p.target.value;c(y),l(""),m("",y)},g=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await z.delete(`${iN}${p}`,{headers:{Authorization:`Bearer ${f}`}}),m(s),console.log(m)}catch(y){console.error("Error al eliminar un miembro:",y)}},{onDownload:v}=bt.useDownloadExcel({currentTableRef:d.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(uN,{children:[a.jsx(cN,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsx(dN,{children:a.jsxs("button",{onClick:v,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar"]})}),a.jsxs(pN,{children:[a.jsx(og,{children:a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})}),a.jsx(og,{children:a.jsxs("label",{children:["Filtrar por Supervisor:",a.jsxs("select",{value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),o.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})})]}),a.jsxs(fN,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Accion"})]})}),a.jsx("tbody",{children:e.map((p,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:y+1}),a.jsx("td",{children:p.nombre?p.nombre:`${p.lider.nombre}`}),a.jsx("td",{children:p.apellido?p.apellido:`${p.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarMiembroSupervisor/${p.id_miembro}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>g(p.id_miembro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},p.id_usuario))})]})]})}const uN=E.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,cN=E.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,dN=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  select {
    margin-right: 20px;
    padding: 5px;
  }

  .create-client,
  .download-client {
    margin: 0 10px;
  }
`,fN=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  

  th,
  td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"};
  }
`,pN=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,og=E.div`
  margin: 10px;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,o1="https://backend-riosdevida-production.up.railway.app",ig=`${o1}/api/asistencia`,hN=`${o1}/api/usuarios/historiallider`;function mN(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState([]),[u,c]=w.useState(""),d=w.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),w.useEffect(()=>{h(),x()},[]);const h=async()=>{try{const p=await z.get(ig,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las asistencias:",p)}},x=async()=>{try{const p=await z.get(hN,{headers:{Authorization:`Bearer ${f}`}});l(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},m=(p,y)=>{let j=e;p&&(j=j.filter(C=>C.fecha===p)),y&&(j=j.filter(C=>String(C.id_lider)===y)),r(j)},S=p=>{const y=p.target.value;i(y),m(y,u)},b=p=>{const y=p.target.value;c(y),m(o,y)},g=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await z.delete(`${ig}/${p}`,{headers:{Authorization:`Bearer ${f}`}});const y=e.filter(C=>C.id_miembro_planilla!==p);t(y);const j=y.filter(C=>{const T=!o||C.fecha===o,k=!u||C.id_lider===parseInt(u);return T&&k});r(j)}catch(y){console.error("Error al eliminar la asistencia:",y)}},{onDownload:v}=bt.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(gN,{children:[a.jsx(xN,{children:a.jsx("div",{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})})}),a.jsx(vN,{children:a.jsxs("button",{onClick:v,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Asistencia"]})}),a.jsxs(yN,{children:[a.jsxs(sg,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(sg,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(p=>a.jsxs("option",{value:String(p.id_usuario),children:[p.nombre," ",p.apellido]},p.id_usuario))]})]})]}),a.jsxs(wN,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((p,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:y+1}),a.jsx("td",{children:p.miembro?`${p.miembro.nombre} ${p.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:p.asistencia}),a.jsx("td",{children:p.lider?`${p.lider.nombre} ${p.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarAsistencia/${p.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>g(p.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},p.id_miembro_planilla))})]})]})}const gN=E.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,xN=E.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,vN=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,yN=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,sg=E.div`
  margin: 10px;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,wN=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"};
  }
`,i1="https://backend-riosdevida-production.up.railway.app",ag=`${i1}/api/planilla`,bN=`${i1}/api/usuarios/historiallider`;function SN(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState([]),d=w.useRef(null);w.useEffect(()=>{x(),h()},[]);const f=localStorage.getItem("token");localStorage.getItem("idUser");const h=async()=>{try{const p=await z.get(bN,{headers:{Authorization:`Bearer ${f}`}});c(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},x=async()=>{try{const p=await z.get(ag,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las planillas:",p)}},m=p=>{const y=p.target.value;i(y),b(y,s)},S=p=>{const y=p.target.value;l(y),b(o,y)},b=(p,y)=>{let j=e;p&&(j=j.filter(C=>C.fecha===p)),y&&(j=j.filter(C=>C.id_lider.toString()===y)),r(j)},g=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await z.delete(`${ag}/${p}`,{headers:{Authorization:`Bearer ${f}`}}),x()}catch(y){console.error("Error al eliminar la planilla:",y)}},{onDownload:v}=bt.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(jN,{children:[a.jsx(EN,{children:a.jsx(V,{to:"/menuInicio",children:a.jsx(wt,{})})}),a.jsxs(CN,{children:[a.jsxs(V,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Cn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:v,className:"btn btn-primary download-client",children:[a.jsx(zt,{})," Descargar Planillas"]})]}),a.jsxs(TN,{children:[a.jsxs(lg,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:m})]}),a.jsxs(lg,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(p=>a.jsx("option",{value:p.id_usuario,children:`${p.nombre} ${p.apellido}`},p.id_usuario))]})]})]}),a.jsxs(kN,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((p,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:y+1}),a.jsx("td",{children:p.id_planilla}),a.jsx("td",{children:`${p.Lider.nombre} ${p.Lider.apellido}`}),a.jsx("td",{children:`${p.Supervisor.nombre} ${p.Supervisor.apellido}`}),a.jsx("td",{children:p.anfitrion}),a.jsx("td",{children:p.ayudante}),a.jsx("td",{children:p.total_invitados}),a.jsx("td",{children:p.total_jov_adult}),a.jsx("td",{children:p.total_ninos}),a.jsx("td",{children:p.total_participantes}),a.jsx("td",{children:p.conv_rec}),a.jsx("td",{children:p.ofrenda}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(V,{to:`/editarPlanillaGeneralSupervisor/${p.id_planilla}`,className:"btn btn-info",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>g(p.id_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},p.id_planilla))})]})]})}const jN=E.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,EN=E.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,CN=E.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,kN=E(Lt)`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 15px;
    text-align: center;
  }

  th {
    background-color: ${({darkTheme:e})=>e?"#6c757d":"#e9ecef"}; 
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({darkTheme:e})=>e?"#565e64":"#f8f9fa"}; 
  }
`,TN=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,lg=E.div`
  margin: 10px;

  label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-left: 10px;
    color: #1e3c72;
    background-color: #e3f2fd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      background-color: #bbdefb;
      box-shadow: 0px 0px 5px rgba(30, 60, 114, 0.8);
    }
  }
`,ug=["Dios Te Ama","Hey! Cuando no sepas a dónde ir, andá a Dios; Él te sigue esperando.","Tu tienes un gran valor para Dios","Yo siempre estoy contigo. att: Dios","Jesús te ama una banda","Sos muy Importante Para Mí, att: Dios","A pesar de todo te sigo Amando, att: Dios","No estoy enojado con vos, Te amo, att: Dios","Esfuerzate y se valiente, Yo estoy con vos ---> Siempre. ATT: Dios","Yo sé que este año fue dificil, pero todo estara bien, porque yo estoy con vos y conozco tu futuro. ---> att: Dios ❤️","Soy el unico que puede llenar el vacio de tu corazón---> att: Jesús ❤️","No temas yo soy el que te da nuevas Fuerzas 💪 ---> att: Dios","Mis caminos y mis pensamientos son mas altos que los de ustedes mas altos que los cielos sobre la tierra. ---> att: Dios","No te angusties, no temas, Yo estoy contigo. ---> att: Dios","Mis planes son mejores ---> att: Jesús","En mi Esta Tu Identidad ---> att: Jesús","Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora⏱️. ---> Eclesiastés 3:1","Tu vales mas que el oro y la plata ---> att: Dios","Ten en cuenta a Dios en todo lo que hagas y él te guiará por el buen camino. ---> Proverbios 3:6","Dichoso el que resiste la tentación porque, al salir aprobado, recibirá la corona de la vida que Dios ha prometido a quienes lo aman. ---> Santiago 1:12","Porque si ustedes viven conforme a la naturaleza pecaminosa, morirán; pero si por el Espíritu dan muerte a los malos hábitos del cuerpo, vivirán. ---> Romanos 8:13"],$N=()=>{const[e,t]=w.useState("");return w.useEffect(()=>{const n=Math.floor(Math.random()*ug.length);t(ug[n])},[]),a.jsxs(_N,{children:[a.jsx(Vi,{}),a.jsx(PN,{children:a.jsx("div",{className:"icon",children:a.jsx(V,{to:"/",children:a.jsx(u2,{})})})}),a.jsx(NN,{children:a.jsx(RN,{children:e})})]})},_N=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //background-color: #000; /* Fondo negro */
`,PN=E.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  justify-content: flex-start;
  width: auto;
  font-size: 50px;
  a {
    color: #ffffff;
    text-decoration:none;
  }
   
`,NN=E.div`
  padding: 2rem;
  border: 4px solid #0ff; /* Borde de neón */
  border-radius: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
  box-shadow: 
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 40px #0ff,
    0 0 80px #0ff;
  animation: neonPulse 1.5s infinite alternate;

  @keyframes neonPulse {
    from {
      box-shadow: 
        0 0 5px #0ff,
        0 0 10px #0ff,
        0 0 20px #0ff;
    }
    to {
      box-shadow: 
        0 0 20px #0ff,
        0 0 40px #0ff,
        0 0 80px #0ff;
    }
  }
`,RN=E.p`
  font-size: clamp(1.5rem, 4vw, 3rem); /* Tamaño de fuente adaptable */
  color: #ff69b4; /* Color inicial */
  background: linear-gradient(90deg, #ff69b4, #00d4ff, #fff200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
`,IN=an`
  from { opacity: 0; }
  to { opacity: 1; }
`,zN=E.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden; /* Previene scroll horizontal */
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 32px;
  }
`,LN=E.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${IN} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,AN=E.div`
  width: 100%;
  max-width: 100%;
  background: rgb(255, 255, 255);
  color: #000000;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  font-size: 30px;
  border-radius: 30px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 24px;
    width: 50%;
    margin: 20px;
  }
`,MN=()=>{const e=[Z.auditorioUno,Z.auditorioDos,Z.auditorioTres,Z.auditorioCuatro,Z.auditorioCinco],[t,n]=w.useState(0),[r,o]=w.useState(!1);return w.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),w.useEffect(()=>{const i=()=>{const s=document.getElementById("auditorio-rios-de-vida");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(zN,{id:"auditorio-rios-de-vida",children:[a.jsxs(AN,{isVisible:r,children:[a.jsx("h1",{children:"Auditorio Ríos De Vida"}),a.jsx("p",{children:"Nos encontramos todos los domingos en el Auditorio Ríos De Vida, ubicado entre Calle Crisóstomo Álvarez y Calle Alberdi, a la altura del 1000 cruzando la calle República del Líbano, en el horario de 20 hs. Contamos con un espacio amplio y cómodo para que puedas disfrutar de la presencia de Dios."})]}),a.jsx(LN,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},DN="https://Bravo938.github.io/RiosDeVida.pages/assets/casaRios-1ZPgrmsG.mp4",ON=an`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #2500f9, 0 0 20px #0036f9, 0 0 40px #0071d4;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #0073ff, 0 0 30px #4400ff, 0 0 50px #0058d4;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #00b2f9, 0 0 20px #0081f9, 0 0 40px #0091d4;
  }
`,FN=E.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -1;
  transition: opacity 0.5s ease;
`,BN=E.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
`,UN=E.div`
    color: white;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;E.h1`
    font-size: 100px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    animation: ${ON} 1.5s infinite alternate;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;const VN=()=>a.jsx(BN,{children:a.jsx(UN,{children:a.jsx(FN,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:a.jsx("source",{src:DN,type:"video/mp4"})})})}),HN="https://Bravo938.github.io/RiosDeVida.pages/assets/caminata-D80zwDS-.mp4",WN=()=>{const[e,t]=w.useState(!1),n=()=>{t(!e)};return a.jsx(GN,{id:"potenciados",children:a.jsxs(qN,{children:[a.jsxs(XN,{children:[a.jsx(JN,{children:"Jóvenes Potenciados"}),a.jsxs(YN,{children:[a.jsxs(QN,{expanded:e,children:["¡Bienvenido a Jóvenes Potenciados! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(KN,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(ZN,{children:a.jsx(eR,{autoPlay:!0,loop:!0,muted:!0,src:HN})})]})})},GN=E.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #460072a2 40%, #38136980 40%);
`,qN=E.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,XN=E.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    padding: 10%;
    text-align: center;
  }
`,JN=E.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,YN=E.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,QN=E.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,KN=E.button`
  background: #033c5d;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #022c44;
  }
`,ZN=E.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,eR=E.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,tR=an`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,nR=E.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden; /* evita scroll horizontal */
  padding: 0 16px; /* espacio interno lateral para móviles */
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 32px;
  }
`,rR=E.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  animation: ${tR} 1s ease-in-out;
  margin: 10px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,oR=E.div`
  width: 100%;
  max-width: 100%;
  background: rgb(255, 255, 255);
  color: #000000;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  font-size: 30px;
  border-radius: 30px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 24px;
    width: 50%;
    margin: 20px;
  }
`,iR=()=>{const e=[Z.niñoUno,Z.niñoDos,Z.niñoTres],[t,n]=w.useState(0),[r,o]=w.useState(!1);return w.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),w.useEffect(()=>{const i=()=>{const s=document.getElementById("escuela-dominical");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(nR,{id:"escuela-dominical",children:[a.jsx(rR,{style:{backgroundImage:`url(${e[t]})`},isVisible:r}),a.jsxs(oR,{isVisible:r,children:[a.jsx("h1",{children:"Escuela Dominical"}),a.jsx("p",{children:"Contamos con una escuela dominical para todas las edades, donde se imparte la palabra de Dios de una manera didáctica y sencilla para los niños de diferentes edades. Instruir a los niños desde pequeños en la palabra de Dios es una de las prioridades de nuestra iglesia."})]})]})},sR=an`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,aR=E.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden; /* evita desborde */
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 32px;
  }
`,lR=E.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${sR} 1s ease-in-out;
  margin: 10px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,uR=E.div`
  width: 100%;
  max-width: 100%;
  background: rgb(255, 255, 255);
  color: #000000;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  font-size: 30px;
  border-radius: 30px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 24px;
    width: 50%;
    margin: 20px;
  }
`,cR=()=>{const e=[Z.niñoUno,Z.niñoDos,Z.niñoTres],[t,n]=w.useState(0),[r,o]=w.useState(!1);return w.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),w.useEffect(()=>{const i=()=>{const s=document.getElementById("casa-de-vida");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]),a.jsxs(aR,{id:"casa-de-vida",children:[a.jsxs(uR,{isVisible:r,children:[a.jsx("h1",{children:"Casa de Vida"}),a.jsx("p",{children:"Contamos con una escuela dominical para todas las edades, donde se imparte la palabra de Dios de una manera didáctica y sencilla para los niños de diferentes edades. Instruir a los niños desde pequeños en la palabra de Dios es una de las prioridades de nuestra iglesia."})]}),a.jsx(lR,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},dR=E.div`
    
    position: relative;
    //border: 2px solid #fff;
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
    }
`,fR=E.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: 'Montserrat', sans-serif;
  
`,pR=E.div`
    width: 100%;
    background: rgba(255, 255, 255, 0.353);
    color: #000000;
    text-align: center;
    padding: 20px;
    margin: 20px;
    font-size: 30px;
    border-radius: 30px;
    
    @media (min-width: 768px) {
        font-size: 24px;
        width: 50%;
        margin: 20px;
    }
`,hR=()=>a.jsx(a.Fragment,{children:a.jsx(dR,{children:a.jsxs(pR,{children:[a.jsx(fR,{children:a.jsx("h1",{children:"Centro Cristiano Rios De Vida"})}),a.jsxs("p",{children:["Somos una iglesia evangélica cristiana, que busca llevar el mensaje de salvación a todas las naciones, y ayudar a la comunidad a encontrar su propósito en la vida, Creemos que Dios tiene un plan con cada Persona en esta vida y que el propósito de Dios es que todos tengan vida y vida en abundancia.",a.jsx("br",{})]})]})})});function mR(){return a.jsxs(a.Fragment,{children:[a.jsx(Vi,{}),a.jsx(hl,{}),a.jsx(VN,{}),a.jsxs(gR,{children:[a.jsx(hR,{}),a.jsx(MN,{}),a.jsx(iR,{}),a.jsx(cR,{})]}),a.jsx(WN,{}),a.jsx(pl,{})]})}const gR=E.div`


*{
    font-family: "Bebas Neue", sans-serif;
  
  /*font-family: "Poppins", sans-serif;*/
  
}
    
`,xR=an`
  from { opacity: 0; }
  to { opacity: 1; }
`,vR=E.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 32px;
  }
`,yR=E.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  animation: ${xR} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,wR=E.div`
  width: 100%;
  max-width: 100%;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  font-size: 30px;
  border-radius: 30px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 24px;
    width: 50%;
    margin: 20px;
  }
`,bR=()=>{const e=[Z.auditorioUno,Z.auditorioDos,Z.auditorioTres,Z.auditorioCuatro,Z.auditorioCinco],[t,n]=w.useState(0),[r,o]=w.useState(!1);return w.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),w.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-cuatro");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(vR,{id:"evento-section-cuatro",children:[a.jsx(yR,{style:{backgroundImage:`url(${e[t]})`},isVisible:r}),a.jsxs(wR,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Mujeres"}),a.jsx("p",{children:"La convención de mujeres es un evento anual que reúne a mujeres de diversas localidades para compartir, fortalecer y apoyar a las mujeres en el crecimiento de su fe y en su vida diaria. Este evento es una oportunidad para aprender, crecer y conectarse con otras mujeres que comparten la misma fe y valores."})]})]})},SR=E.div`
    
    position: relative;
    //border: 2px solid #fff;
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
    }
`,jR=E.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: 'Montserrat', sans-serif;
  
`,ER=E.div`
    width: 100%;
    background: rgba(255, 255, 255, 0.353);
    color: #000000;
    text-align: center;
    padding: 20px;
    margin: 20px;
    font-size: 30px;
    border-radius: 30px;
    
    @media (min-width: 768px) {
        font-size: 24px;
        width: 50%;
        margin: 20px;
    }
`,CR=()=>a.jsx(a.Fragment,{children:a.jsx(SR,{children:a.jsxs(ER,{children:[a.jsx(jR,{children:a.jsx("h1",{children:"Nuestros Eventos"})}),a.jsxs("p",{children:["Tenemos una gran carga moral con el tratar de hacer de este mundo un lugar mejor, y es por eso que nos esforzamos en hacer eventos que ayuden a la comunidad cristiana y en ocaciones eventos para llegar a las personas que no conocen de Dios. ",a.jsx("br",{}),a.jsx("br",{})]})]})})}),kR=an`
  from { opacity: 0; }
  to { opacity: 1; }
`,TR=E.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 32px;
  }
`,$R=E.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${kR} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,_R=E.div`
  width: 100%;
  max-width: 100%;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  font-size: 30px;
  border-radius: 30px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 24px;
    width: 50%;
    margin: 20px;
  }
`,PR=()=>{const e=[Z.auditorioUno,Z.auditorioDos,Z.auditorioTres,Z.auditorioCuatro,Z.auditorioCinco],[t,n]=w.useState(0),[r,o]=w.useState(!1);return w.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),w.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-tres");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(TR,{id:"evento-section-tres",children:[a.jsxs(_R,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Jóvenes"}),a.jsx("p",{children:"La Convención de Jóvenes es un evento anual que reúne a jóvenes de diferentes lugares para compartir experiencias, aprender y crecer juntos en la fe. Durante este evento, se llevan a cabo actividades como talleres, charlas, dinámicas grupales y momentos de adoración. Es una oportunidad única para fortalecer la comunidad juvenil y fomentar el compañerismo entre los asistentes."})]}),a.jsx($R,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},NR="https://Bravo938.github.io/RiosDeVida.pages/assets/LogoRiosDeVida-CyC5MU--.png",RR="https://Bravo938.github.io/RiosDeVida.pages/assets/oscuroManos-CJPiaVel.mp4",IR=E.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`,zR=E.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 12%;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  z-index: 1;
  

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
`,LR=E.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: opacity 0.5s ease;
`,AR=E.div`
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.336);
  border-radius: 10px;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  transition: opacity 1s ease, transform 1s ease;
  z-index: 1;
`,MR=E.h2`
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
`,DR=E.p`
  font-size: 18px;
  color: #000000;
`,OR=E.div`
  width: 90%;
  max-width: 500px;
  margin-top: 20px;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  transition: opacity 1s ease, transform 1s ease;
  z-index: 1;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 40px;
  }
`,FR=E.img`
  width: 100%;
  border-radius: 10px;
`,BR=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1);w.useEffect(()=>{const i=()=>{const s=document.getElementById("eventos-section");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;t(c)}};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]);const o=()=>r(!0);return a.jsxs(IR,{children:[a.jsx(LR,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:o,style:{opacity:n?1:0},children:a.jsx("source",{src:RR,type:"video/mp4"})}),a.jsxs(zR,{id:"eventos-section",children:[a.jsxs(AR,{isVisible:e,children:[a.jsx(MR,{children:"Somos una iglesia de eventos"}),a.jsx(DR,{children:"Creemos en la importancia de compartir momentos significativos en comunidad. Nuestros eventos están diseñados para unir a las personas, fortalecer la fe y crear recuerdos inolvidables. ¡Descubre nuestras próximas actividades!"})]}),a.jsx(OR,{isVisible:e,children:a.jsx(FR,{src:NR,alt:"Eventos en nuestra iglesia"})})]})]})},UR=an`
  from { opacity: 0; }
  to { opacity: 1; }
`,VR=E.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 32px;
  }
`,HR=E.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${UR} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,WR=E.div`
  width: 100%;
  max-width: 100%;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  font-size: 30px;
  border-radius: 30px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 24px;
    width: 50%;
    margin: 20px;
  }
`,GR=()=>{const e=[Z.auditorioUno,Z.auditorioDos,Z.auditorioTres,Z.auditorioCuatro,Z.auditorioCinco],[t,n]=w.useState(0),[r,o]=w.useState(!1);return w.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),w.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-cinco");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(VR,{id:"evento-section-cinco",children:[a.jsxs(WR,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Niños"}),a.jsx("p",{children:"La convención de niños es un evento anual que reúne a niños de diversas localidades para tener un momento de aprendizaje y fortalecer su confianza y fe desde una edad temprana, todo esto de una manera divertida y amena. Este evento es una oportunidad para que los niños se conecten con otros de su edad, aprendan sobre la importancia de la fe y la comunidad, y desarrollen habilidades sociales y emocionales."})]}),a.jsx(HR,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})};function qR(){return a.jsxs(a.Fragment,{children:[a.jsx(Vi,{}),a.jsx(hl,{}),a.jsxs(XR,{children:[a.jsx(BR,{}),a.jsx(CR,{}),a.jsx(PR,{}),a.jsx(bR,{}),a.jsx(GR,{})]}),a.jsx(pl,{})]})}const XR=E.div`


*{
    /*font-family: "Bebas Neue", sans-serif;*/
  
    font-family: "Bebas Neue", sans-serif;
  
}
    
`;function JR(){return a.jsxs(a.Fragment,{children:[a.jsx(Vi,{}),a.jsx(hl,{}),a.jsx(Sv,{}),a.jsx(pl,{})]})}function YR(){const{auth:e,setAuth:t}=w.useContext(Hi);return w.useEffect(()=>{const n=localStorage.getItem("token");n&&t({token:n})},[t]),a.jsx(a.Fragment,{children:a.jsxs(CS,{children:[a.jsx(q,{path:"/login",element:a.jsx(JT,{})}),a.jsx(q,{path:"/masSobreNosotros",element:a.jsx(mR,{})}),a.jsx(q,{path:"/",element:a.jsx(a2,{})}),a.jsx(q,{path:"/notas",element:a.jsx($N,{})}),a.jsx(q,{path:"/eventos",element:a.jsx(qR,{})}),a.jsx(q,{path:"/pascuas",element:a.jsx(JR,{})}),e&&e.token?a.jsxs(q,{element:a.jsx(d2,{}),children:[a.jsx(q,{path:"/*",element:a.jsx(m2,{})}),a.jsx(q,{path:"/logout",element:a.jsx(s$,{})}),a.jsx(q,{path:"/planillaLider",element:a.jsx(I_,{})}),a.jsx(q,{path:"/planillaGeneralSupervisor",element:a.jsx(V4,{})}),a.jsx(q,{path:"/asistencia",element:a.jsx(X_,{})}),a.jsx(q,{path:"/asistenciaVistaSupervisor",element:a.jsx(z4,{})}),a.jsx(q,{path:"/asistenciaVistaAdmin",element:a.jsx(mN,{})}),a.jsx(q,{path:"/registroUsuarios",element:a.jsx(CP,{})}),a.jsx(q,{path:"/registroDeRoles",element:a.jsx(t4,{})}),a.jsx(q,{path:"/registroLideryMiembro",element:a.jsx(v4,{})}),a.jsx(q,{path:"/miembrosLideresSupervisor",element:a.jsx(lN,{})}),a.jsx(q,{path:"/generalPlanilla",element:a.jsx(nP,{})}),a.jsx(q,{path:"/planillaGeneralAdmin",element:a.jsx(SN,{})}),a.jsx(q,{path:"/asignarSupervisor",element:a.jsx(OP,{})}),a.jsx(q,{path:"/crearMiembro",element:a.jsx(F_,{})}),a.jsx(q,{path:"/crearPlanillaGeneral",element:a.jsx(cP,{})}),a.jsx(q,{path:"/crearPlanillaGeneralSupervisor",element:a.jsx(Q4,{})}),a.jsx(q,{path:"/crearAsistencia",element:a.jsx(vP,{})}),a.jsx(q,{path:"/crearUsuario",element:a.jsx(RP,{})}),a.jsx(q,{path:"/crearAsignarSupervisor",element:a.jsx(qP,{})}),a.jsx(q,{path:"/crearUnRol",element:a.jsx(l4,{})}),a.jsx(q,{path:"/crearMiembroSupervisor",element:a.jsx(C4,{})}),a.jsx(q,{path:"/editarMiembros/:id",element:a.jsx(V_,{})}),a.jsx(q,{path:"/editarPlanillaGeneral/:id",element:a.jsx(pP,{})}),a.jsx(q,{path:"/editarAsistencia/:id",element:a.jsx(bP,{})}),a.jsx(q,{path:"/editarUsuario/:id",element:a.jsx(LP,{})}),a.jsx(q,{path:"/editarAsignacionSupervisor/:id",element:a.jsx(QP,{})}),a.jsx(q,{path:"/editarRol/:id",element:a.jsx(d4,{})}),a.jsx(q,{path:"/editarMiembroSupervisor/:id",element:a.jsx($4,{})}),a.jsx(q,{path:"/editarPlanillaGeneralSupervisor/:id",element:a.jsx(eN,{})})]}):a.jsx(q,{path:"/*",element:a.jsx(SS,{to:"/"})})]})})}jx(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(RS,{children:a.jsx(y2,{children:a.jsx(YR,{})})})}));
