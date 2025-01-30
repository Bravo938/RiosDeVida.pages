function o1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y0={exports:{}},tl={},w0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi=Symbol.for("react.element"),i1=Symbol.for("react.portal"),s1=Symbol.for("react.fragment"),a1=Symbol.for("react.strict_mode"),l1=Symbol.for("react.profiler"),u1=Symbol.for("react.provider"),c1=Symbol.for("react.context"),d1=Symbol.for("react.forward_ref"),f1=Symbol.for("react.suspense"),p1=Symbol.for("react.memo"),h1=Symbol.for("react.lazy"),Qf=Symbol.iterator;function m1(e){return e===null||typeof e!="object"?null:(e=Qf&&e[Qf]||e["@@iterator"],typeof e=="function"?e:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S0=Object.assign,j0={};function ko(e,t,n){this.props=e,this.context=t,this.refs=j0,this.updater=n||b0}ko.prototype.isReactComponent={};ko.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ko.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k0(){}k0.prototype=ko.prototype;function dd(e,t,n){this.props=e,this.context=t,this.refs=j0,this.updater=n||b0}var fd=dd.prototype=new k0;fd.constructor=dd;S0(fd,ko.prototype);fd.isPureReactComponent=!0;var Xf=Array.isArray,E0=Object.prototype.hasOwnProperty,pd={current:null},C0={key:!0,ref:!0,__self:!0,__source:!0};function $0(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)E0.call(t,r)&&!C0.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Bi,type:e,key:i,ref:s,props:o,_owner:pd.current}}function g1(e,t){return{$$typeof:Bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bi}function v1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yf=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v1(""+e.key):t.toString(36)}function Ns(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Bi:case i1:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Hl(s,0):r,Xf(o)?(n="",e!=null&&(n=e.replace(Yf,"$&/")+"/"),Ns(o,t,n,"",function(c){return c})):o!=null&&(hd(o)&&(o=g1(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Yf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Xf(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Hl(i,l);s+=Ns(i,t,n,u,o)}else if(u=m1(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Hl(i,l++),s+=Ns(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function os(e,t,n){if(e==null)return e;var r=[],o=0;return Ns(e,r,"","",function(i){return t.call(n,i,o++)}),r}function x1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ts={transition:null},y1={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:pd};function _0(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:os,forEach:function(e,t,n){os(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return os(e,function(){t++}),t},toArray:function(e){return os(e,function(t){return t})||[]},only:function(e){if(!hd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=ko;K.Fragment=s1;K.Profiler=l1;K.PureComponent=dd;K.StrictMode=a1;K.Suspense=f1;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;K.act=_0;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=S0({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=pd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)E0.call(t,u)&&!C0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Bi,type:e.type,key:o,ref:i,props:r,_owner:s}};K.createContext=function(e){return e={$$typeof:c1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:u1,_context:e},e.Consumer=e};K.createElement=$0;K.createFactory=function(e){var t=$0.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:d1,render:e}};K.isValidElement=hd;K.lazy=function(e){return{$$typeof:h1,_payload:{_status:-1,_result:e},_init:x1}};K.memo=function(e,t){return{$$typeof:p1,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};K.unstable_act=_0;K.useCallback=function(e,t){return Ve.current.useCallback(e,t)};K.useContext=function(e){return Ve.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ve.current.useEffect(e,t)};K.useId=function(){return Ve.current.useId()};K.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ve.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};K.useRef=function(e){return Ve.current.useRef(e)};K.useState=function(e){return Ve.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ve.current.useTransition()};K.version="18.3.1";w0.exports=K;var w=w0.exports;const Re=x0(w),w1=o1({__proto__:null,default:Re},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=w,S1=Symbol.for("react.element"),j1=Symbol.for("react.fragment"),k1=Object.prototype.hasOwnProperty,E1=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C1={key:!0,ref:!0,__self:!0,__source:!0};function R0(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)k1.call(t,r)&&!C1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:S1,type:e,key:i,ref:s,props:o,_owner:E1.current}}tl.Fragment=j1;tl.jsx=R0;tl.jsxs=R0;y0.exports=tl;var a=y0.exports,P0={exports:{}},yt={},N0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,D){var M=I.length;I.push(D);e:for(;0<M;){var te=M-1>>>1,ne=I[te];if(0<o(ne,D))I[te]=D,I[M]=ne,M=te;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],M=I.pop();if(M!==D){I[0]=M;e:for(var te=0,ne=I.length,dr=ne>>>1;te<dr;){var zt=2*(te+1)-1,Pn=I[zt],it=zt+1,pn=I[it];if(0>o(Pn,M))it<ne&&0>o(pn,Pn)?(I[te]=pn,I[it]=M,te=it):(I[te]=Pn,I[zt]=M,te=zt);else if(it<ne&&0>o(pn,M))I[te]=pn,I[it]=M,te=it;else break e}}return D}function o(I,D){var M=I.sortIndex-D.sortIndex;return M!==0?M:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,h=3,v=!1,g=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=I)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function y(I){if(S=!1,p(I),!g)if(n(u)!==null)g=!0,fn(j);else{var D=n(c);D!==null&&Ot(y,D.startTime-I)}}function j(I,D){g=!1,S&&(S=!1,x(C),C=-1),v=!0;var M=h;try{for(p(D),f=n(u);f!==null&&(!(f.expirationTime>D)||I&&!ee());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var ne=te(f.expirationTime<=D);D=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),p(D)}else r(u);f=n(u)}if(f!==null)var dr=!0;else{var zt=n(c);zt!==null&&Ot(y,zt.startTime-D),dr=!1}return dr}finally{f=null,h=M,v=!1}}var E=!1,$=null,C=-1,O=5,z=-1;function ee(){return!(e.unstable_now()-z<O)}function be(){if($!==null){var I=e.unstable_now();z=I;var D=!0;try{D=$(!0,I)}finally{D?T():(E=!1,$=null)}}else E=!1}var T;if(typeof m=="function")T=function(){m(be)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,cr=xe.port2;xe.port1.onmessage=be,T=function(){cr.postMessage(null)}}else T=function(){b(be,0)};function fn(I){$=I,E||(E=!0,T())}function Ot(I,D){C=b(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,fn(j))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return I()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var M=h;h=I;try{return D()}finally{h=M}},e.unstable_scheduleCallback=function(I,D,M){var te=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?te+M:te):M=te,I){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=M+ne,I={id:d++,callback:D,priorityLevel:I,startTime:M,expirationTime:ne,sortIndex:-1},M>te?(I.sortIndex=M,t(c,I),n(u)===null&&I===n(c)&&(S?(x(C),C=-1):S=!0,Ot(y,M-te))):(I.sortIndex=ne,t(u,I),g||v||(g=!0,fn(j))),I},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(I){var D=h;return function(){var M=h;h=D;try{return I.apply(this,arguments)}finally{h=M}}}})(T0);N0.exports=T0;var $1=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1=w,xt=$1;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I0=new Set,vi={};function Dr(e,t){co(e,t),co(e+"Capture",t)}function co(e,t){for(vi[e]=t,e=0;e<t.length;e++)I0.add(t[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,R1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},ep={};function P1(e){return Fu.call(ep,e)?!0:Fu.call(Zf,e)?!1:R1.test(e)?ep[e]=!0:(Zf[e]=!0,!1)}function N1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T1(e,t,n,r){if(t===null||typeof t>"u"||N1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(md,gd);Ne[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(md,gd);Ne[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(md,gd);Ne[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function vd(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T1(t,n,o,r)&&(n=null),r||o===null?P1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _n=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,is=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),tp=Symbol.iterator;function Oo(e){return e===null||typeof e!="object"?null:(e=tp&&e[tp]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Vl;function Wo(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Wl=!1;function ql(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wo(e):""}function I1(e){switch(e.tag){case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Vu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Wr:return"Portal";case Uu:return"Profiler";case xd:return"StrictMode";case Bu:return"Suspense";case Hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case A0:return(e.displayName||"Context")+".Consumer";case L0:return(e._context.displayName||"Context")+".Provider";case yd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wd:return t=e.displayName||null,t!==null?t:Vu(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return Vu(e(t))}catch{}}return null}function L1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(t);case 8:return t===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function z0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A1(e){var t=z0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ss(e){e._valueTracker||(e._valueTracker=A1(e))}function D0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=z0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wu(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function np(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function M0(e,t){t=t.checked,t!=null&&vd(e,"checked",t,!1)}function qu(e,t){M0(e,t);var n=rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gu(e,t.type,rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gu(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qo=Array.isArray;function oo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ju(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function op(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(qo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rr(n)}}function F0(e,t){var n=rr(t.value),r=rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ip(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function U0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?U0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var as,B0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(as=as||document.createElement("div"),as.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=as.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){O1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function H0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function V0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=H0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var z1=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(e,t){if(t){if(z1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Xu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function bd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zu=null,io=null,so=null;function sp(e){if(e=Wi(e)){if(typeof Zu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=sl(t),Zu(e.stateNode,e.type,t))}}function W0(e){io?so?so.push(e):so=[e]:io=e}function q0(){if(io){var e=io,t=so;if(so=io=null,sp(e),t)for(e=0;e<t.length;e++)sp(t[e])}}function G0(e,t){return e(t)}function J0(){}var Gl=!1;function K0(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return G0(e,t,n)}finally{Gl=!1,(io!==null||so!==null)&&(J0(),q0())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var ec=!1;if(Sn)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){ec=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{ec=!1}function D1(e,t,n,r,o,i,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var oi=!1,la=null,ua=!1,tc=null,M1={onError:function(e){oi=!0,la=e}};function F1(e,t,n,r,o,i,s,l,u){oi=!1,la=null,D1.apply(M1,arguments)}function U1(e,t,n,r,o,i,s,l,u){if(F1.apply(this,arguments),oi){if(oi){var c=la;oi=!1,la=null}else throw Error(R(198));ua||(ua=!0,tc=c)}}function Mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ap(e){if(Mr(e)!==e)throw Error(R(188))}function B1(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ap(o),e;if(i===r)return ap(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function X0(e){return e=B1(e),e!==null?Y0(e):null}function Y0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Y0(e);if(t!==null)return t;e=e.sibling}return null}var Z0=xt.unstable_scheduleCallback,lp=xt.unstable_cancelCallback,H1=xt.unstable_shouldYield,V1=xt.unstable_requestPaint,ge=xt.unstable_now,W1=xt.unstable_getCurrentPriorityLevel,Sd=xt.unstable_ImmediatePriority,eg=xt.unstable_UserBlockingPriority,ca=xt.unstable_NormalPriority,q1=xt.unstable_LowPriority,tg=xt.unstable_IdlePriority,nl=null,un=null;function G1(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Q1,J1=Math.log,K1=Math.LN2;function Q1(e){return e>>>=0,e===0?32:31-(J1(e)/K1|0)|0}var ls=64,us=4194304;function Go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Go(l):(i&=s,i!==0&&(r=Go(i)))}else s=n&~o,s!==0?r=Go(s):i!==0&&(r=Go(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function X1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Gt(i),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=X1(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function nc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ng(){var e=ls;return ls<<=1,!(ls&4194240)&&(ls=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function Z1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function jd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function rg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var og,kd,ig,sg,ag,rc=!1,cs=[],Gn=null,Jn=null,Kn=null,wi=new Map,bi=new Map,Fn=[],ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Do(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Wi(t),t!==null&&kd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function tw(e,t,n,r,o){switch(t){case"focusin":return Gn=Do(Gn,e,t,n,r,o),!0;case"dragenter":return Jn=Do(Jn,e,t,n,r,o),!0;case"mouseover":return Kn=Do(Kn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wi.set(i,Do(wi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,bi.set(i,Do(bi.get(i)||null,e,t,n,r,o)),!0}return!1}function lg(e){var t=wr(e.target);if(t!==null){var n=Mr(t);if(n!==null){if(t=n.tag,t===13){if(t=Q0(n),t!==null){e.blockedOn=t,ag(e.priority,function(){ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yu=r,n.target.dispatchEvent(r),Yu=null}else return t=Wi(n),t!==null&&kd(t),e.blockedOn=n,!1;t.shift()}return!0}function cp(e,t,n){Is(e)&&n.delete(t)}function nw(){rc=!1,Gn!==null&&Is(Gn)&&(Gn=null),Jn!==null&&Is(Jn)&&(Jn=null),Kn!==null&&Is(Kn)&&(Kn=null),wi.forEach(cp),bi.forEach(cp)}function Mo(e,t){e.blockedOn===t&&(e.blockedOn=null,rc||(rc=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,nw)))}function Si(e){function t(o){return Mo(o,e)}if(0<cs.length){Mo(cs[0],e);for(var n=1;n<cs.length;n++){var r=cs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gn!==null&&Mo(Gn,e),Jn!==null&&Mo(Jn,e),Kn!==null&&Mo(Kn,e),wi.forEach(t),bi.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&Fn.shift()}var ao=_n.ReactCurrentBatchConfig,fa=!0;function rw(e,t,n,r){var o=Z,i=ao.transition;ao.transition=null;try{Z=1,Ed(e,t,n,r)}finally{Z=o,ao.transition=i}}function ow(e,t,n,r){var o=Z,i=ao.transition;ao.transition=null;try{Z=4,Ed(e,t,n,r)}finally{Z=o,ao.transition=i}}function Ed(e,t,n,r){if(fa){var o=oc(e,t,n,r);if(o===null)ou(e,t,r,pa,n),up(e,r);else if(tw(o,e,t,n,r))r.stopPropagation();else if(up(e,r),t&4&&-1<ew.indexOf(e)){for(;o!==null;){var i=Wi(o);if(i!==null&&og(i),i=oc(e,t,n,r),i===null&&ou(e,t,r,pa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ou(e,t,r,null,n)}}var pa=null;function oc(e,t,n,r){if(pa=null,e=bd(r),e=wr(e),e!==null)if(t=Mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Q0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function ug(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case Sd:return 1;case eg:return 4;case ca:case q1:return 16;case tg:return 536870912;default:return 16}default:return 16}}var Bn=null,Cd=null,Ls=null;function cg(){if(Ls)return Ls;var e,t=Cd,n=t.length,r,o="value"in Bn?Bn.value:Bn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ls=o.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function dp(){return!1}function wt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ds:dp,this.isPropagationStopped=dp,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),t}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=wt(Eo),Vi=pe({},Eo,{view:0,detail:0}),iw=wt(Vi),Kl,Ql,Fo,rl=pe({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fo&&(Fo&&e.type==="mousemove"?(Kl=e.screenX-Fo.screenX,Ql=e.screenY-Fo.screenY):Ql=Kl=0,Fo=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),fp=wt(rl),sw=pe({},rl,{dataTransfer:0}),aw=wt(sw),lw=pe({},Vi,{relatedTarget:0}),Xl=wt(lw),uw=pe({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),cw=wt(uw),dw=pe({},Eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fw=wt(dw),pw=pe({},Eo,{data:0}),pp=wt(pw),hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gw[e])?!!t[e]:!1}function _d(){return vw}var xw=pe({},Vi,{key:function(e){if(e.key){var t=hw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yw=wt(xw),ww=pe({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=wt(ww),bw=pe({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),Sw=wt(bw),jw=pe({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),kw=wt(jw),Ew=pe({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cw=wt(Ew),$w=[9,13,27,32],Rd=Sn&&"CompositionEvent"in window,ii=null;Sn&&"documentMode"in document&&(ii=document.documentMode);var _w=Sn&&"TextEvent"in window&&!ii,dg=Sn&&(!Rd||ii&&8<ii&&11>=ii),mp=" ",gp=!1;function fg(e,t){switch(e){case"keyup":return $w.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function Rw(e,t){switch(e){case"compositionend":return pg(t);case"keypress":return t.which!==32?null:(gp=!0,mp);case"textInput":return e=t.data,e===mp&&gp?null:e;default:return null}}function Pw(e,t){if(Gr)return e==="compositionend"||!Rd&&fg(e,t)?(e=cg(),Ls=Cd=Bn=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dg&&t.locale!=="ko"?null:t.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nw[e.type]:t==="textarea"}function hg(e,t,n,r){W0(r),t=ha(t,"onChange"),0<t.length&&(n=new $d("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,ji=null;function Tw(e){Eg(e,0)}function ol(e){var t=Qr(e);if(D0(t))return e}function Iw(e,t){if(e==="change")return t}var mg=!1;if(Sn){var Yl;if(Sn){var Zl="oninput"in document;if(!Zl){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),Zl=typeof xp.oninput=="function"}Yl=Zl}else Yl=!1;mg=Yl&&(!document.documentMode||9<document.documentMode)}function yp(){si&&(si.detachEvent("onpropertychange",gg),ji=si=null)}function gg(e){if(e.propertyName==="value"&&ol(ji)){var t=[];hg(t,ji,e,bd(e)),K0(Tw,t)}}function Lw(e,t,n){e==="focusin"?(yp(),si=t,ji=n,si.attachEvent("onpropertychange",gg)):e==="focusout"&&yp()}function Aw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(ji)}function Ow(e,t){if(e==="click")return ol(t)}function zw(e,t){if(e==="input"||e==="change")return ol(t)}function Dw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Dw;function ki(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Fu.call(t,o)||!Qt(e[o],t[o]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bp(e,t){var n=wp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wp(n)}}function vg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xg(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function Pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mw(e){var t=xg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bp(n,i);var s=bp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fw=Sn&&"documentMode"in document&&11>=document.documentMode,Jr=null,ic=null,ai=null,sc=!1;function Sp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sc||Jr==null||Jr!==aa(r)||(r=Jr,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&ki(ai,r)||(ai=r,r=ha(ic,"onSelect"),0<r.length&&(t=new $d("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionend:fs("Transition","TransitionEnd")},eu={},yg={};Sn&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function il(e){if(eu[e])return eu[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yg)return eu[e]=t[n];return e}var wg=il("animationend"),bg=il("animationiteration"),Sg=il("animationstart"),jg=il("transitionend"),kg=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){kg.set(e,t),Dr(t,[e])}for(var tu=0;tu<jp.length;tu++){var nu=jp[tu],Uw=nu.toLowerCase(),Bw=nu[0].toUpperCase()+nu.slice(1);ir(Uw,"on"+Bw)}ir(wg,"onAnimationEnd");ir(bg,"onAnimationIteration");ir(Sg,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(jg,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function kp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U1(r,t,void 0,e),e.currentTarget=null}function Eg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;kp(o,l,c),i=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;kp(o,l,c),i=u}}}if(ua)throw e=tc,ua=!1,tc=null,e}function se(e,t){var n=t[dc];n===void 0&&(n=t[dc]=new Set);var r=e+"__bubble";n.has(r)||(Cg(t,e,2,!1),n.add(r))}function ru(e,t,n){var r=0;t&&(r|=4),Cg(n,e,r,t)}var ps="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[ps]){e[ps]=!0,I0.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||ru(n,!1,e),ru(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ps]||(t[ps]=!0,ru("selectionchange",!1,t))}}function Cg(e,t,n,r){switch(ug(t)){case 1:var o=rw;break;case 4:o=ow;break;default:o=Ed}n=o.bind(null,t,n,e),o=void 0,!ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ou(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=wr(l),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}l=l.parentNode}}r=r.return}K0(function(){var c=i,d=bd(n),f=[];e:{var h=kg.get(e);if(h!==void 0){var v=$d,g=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":v=yw;break;case"focusin":g="focus",v=Xl;break;case"focusout":g="blur",v=Xl;break;case"beforeblur":case"afterblur":v=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=aw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Sw;break;case wg:case bg:case Sg:v=cw;break;case jg:v=kw;break;case"scroll":v=iw;break;case"wheel":v=Cw;break;case"copy":case"cut":case"paste":v=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=hp}var S=(t&4)!==0,b=!S&&e==="scroll",x=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,p;m!==null;){p=m;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,x!==null&&(y=yi(m,x),y!=null&&S.push(Ci(m,y,p)))),b)break;m=m.return}0<S.length&&(h=new v(h,g,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Yu&&(g=n.relatedTarget||n.fromElement)&&(wr(g)||g[jn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=c,g=g?wr(g):null,g!==null&&(b=Mr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=c),v!==g)){if(S=fp,y="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=hp,y="onPointerLeave",x="onPointerEnter",m="pointer"),b=v==null?h:Qr(v),p=g==null?h:Qr(g),h=new S(y,m+"leave",v,n,d),h.target=b,h.relatedTarget=p,y=null,wr(d)===c&&(S=new S(x,m+"enter",g,n,d),S.target=p,S.relatedTarget=b,y=S),b=y,v&&g)t:{for(S=v,x=g,m=0,p=S;p;p=Ur(p))m++;for(p=0,y=x;y;y=Ur(y))p++;for(;0<m-p;)S=Ur(S),m--;for(;0<p-m;)x=Ur(x),p--;for(;m--;){if(S===x||x!==null&&S===x.alternate)break t;S=Ur(S),x=Ur(x)}S=null}else S=null;v!==null&&Ep(f,h,v,S,!1),g!==null&&b!==null&&Ep(f,b,g,S,!0)}}e:{if(h=c?Qr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=Iw;else if(vp(h))if(mg)j=zw;else{j=Aw;var E=Lw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Ow);if(j&&(j=j(e,c))){hg(f,j,n,d);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Gu(h,"number",h.value)}switch(E=c?Qr(c):window,e){case"focusin":(vp(E)||E.contentEditable==="true")&&(Jr=E,ic=c,ai=null);break;case"focusout":ai=ic=Jr=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,Sp(f,n,d);break;case"selectionchange":if(Fw)break;case"keydown":case"keyup":Sp(f,n,d)}var $;if(Rd)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Gr?fg(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(dg&&n.locale!=="ko"&&(Gr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Gr&&($=cg()):(Bn=d,Cd="value"in Bn?Bn.value:Bn.textContent,Gr=!0)),E=ha(c,C),0<E.length&&(C=new pp(C,e,null,n,d),f.push({event:C,listeners:E}),$?C.data=$:($=pg(n),$!==null&&(C.data=$)))),($=_w?Rw(e,n):Pw(e,n))&&(c=ha(c,"onBeforeInput"),0<c.length&&(d=new pp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=$))}Eg(f,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=yi(e,n),i!=null&&r.unshift(Ci(e,i,o)),i=yi(e,t),i!=null&&r.push(Ci(e,i,o))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ep(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=yi(n,i),u!=null&&s.unshift(Ci(n,u,l))):o||(u=yi(n,i),u!=null&&s.push(Ci(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Vw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function Cp(e){return(typeof e=="string"?e:""+e).replace(Vw,`
`).replace(Ww,"")}function hs(e,t,n){if(t=Cp(t),Cp(e)!==t&&n)throw Error(R(425))}function ma(){}var ac=null,lc=null;function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,Gw=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(e){return $p.resolve(null).then(e).catch(Jw)}:cc;function Jw(e){setTimeout(function(){throw e})}function iu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Si(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Co=Math.random().toString(36).slice(2),sn="__reactFiber$"+Co,$i="__reactProps$"+Co,jn="__reactContainer$"+Co,dc="__reactEvents$"+Co,Kw="__reactListeners$"+Co,Qw="__reactHandles$"+Co;function wr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_p(e);e!==null;){if(n=e[sn])return n;e=_p(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[sn]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function sl(e){return e[$i]||null}var fc=[],Xr=-1;function sr(e){return{current:e}}function ue(e){0>Xr||(e.current=fc[Xr],fc[Xr]=null,Xr--)}function ie(e,t){Xr++,fc[Xr]=e.current,e.current=t}var or={},Me=sr(or),Ze=sr(!1),Nr=or;function fo(e,t){var n=e.type.contextTypes;if(!n)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function ga(){ue(Ze),ue(Me)}function Rp(e,t,n){if(Me.current!==or)throw Error(R(168));ie(Me,t),ie(Ze,n)}function $g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,L1(e)||"Unknown",o));return pe({},n,r)}function va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Nr=Me.current,ie(Me,e),ie(Ze,Ze.current),!0}function Pp(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=$g(e,t,Nr),r.__reactInternalMemoizedMergedChildContext=e,ue(Ze),ue(Me),ie(Me,e)):ue(Ze),ie(Ze,n)}var vn=null,al=!1,su=!1;function _g(e){vn===null?vn=[e]:vn.push(e)}function Xw(e){al=!0,_g(e)}function ar(){if(!su&&vn!==null){su=!0;var e=0,t=Z;try{var n=vn;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vn=null,al=!1}catch(o){throw vn!==null&&(vn=vn.slice(e+1)),Z0(Sd,ar),o}finally{Z=t,su=!1}}return null}var Yr=[],Zr=0,xa=null,ya=0,Et=[],Ct=0,Tr=null,yn=1,wn="";function hr(e,t){Yr[Zr++]=ya,Yr[Zr++]=xa,xa=e,ya=t}function Rg(e,t,n){Et[Ct++]=yn,Et[Ct++]=wn,Et[Ct++]=Tr,Tr=e;var r=yn;e=wn;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var i=32-Gt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,yn=1<<32-Gt(t)+o|n<<o|r,wn=i+e}else yn=1<<i|n<<o|r,wn=e}function Nd(e){e.return!==null&&(hr(e,1),Rg(e,1,0))}function Td(e){for(;e===xa;)xa=Yr[--Zr],Yr[Zr]=null,ya=Yr[--Zr],Yr[Zr]=null;for(;e===Tr;)Tr=Et[--Ct],Et[Ct]=null,wn=Et[--Ct],Et[Ct]=null,yn=Et[--Ct],Et[Ct]=null}var gt=null,mt=null,ce=!1,qt=null;function Pg(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Np(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,mt=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tr!==null?{id:yn,overflow:wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,mt=null,!0):!1;default:return!1}}function pc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hc(e){if(ce){var t=mt;if(t){var n=t;if(!Np(e,t)){if(pc(e))throw Error(R(418));t=Qn(n.nextSibling);var r=gt;t&&Np(e,t)?Pg(r,n):(e.flags=e.flags&-4097|2,ce=!1,gt=e)}}else{if(pc(e))throw Error(R(418));e.flags=e.flags&-4097|2,ce=!1,gt=e}}}function Tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function ms(e){if(e!==gt)return!1;if(!ce)return Tp(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uc(e.type,e.memoizedProps)),t&&(t=mt)){if(pc(e))throw Ng(),Error(R(418));for(;t;)Pg(e,t),t=Qn(t.nextSibling)}if(Tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=Qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=gt?Qn(e.stateNode.nextSibling):null;return!0}function Ng(){for(var e=mt;e;)e=Qn(e.nextSibling)}function po(){mt=gt=null,ce=!1}function Id(e){qt===null?qt=[e]:qt.push(e)}var Yw=_n.ReactCurrentBatchConfig;function Uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function gs(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ip(e){var t=e._init;return t(e._payload)}function Tg(e){function t(x,m){if(e){var p=x.deletions;p===null?(x.deletions=[m],x.flags|=16):p.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function o(x,m){return x=er(x,m),x.index=0,x.sibling=null,x}function i(x,m,p){return x.index=p,e?(p=x.alternate,p!==null?(p=p.index,p<m?(x.flags|=2,m):p):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,m,p,y){return m===null||m.tag!==6?(m=pu(p,x.mode,y),m.return=x,m):(m=o(m,p),m.return=x,m)}function u(x,m,p,y){var j=p.type;return j===qr?d(x,m,p.props.children,y,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&Ip(j)===m.type)?(y=o(m,p.props),y.ref=Uo(x,m,p),y.return=x,y):(y=Bs(p.type,p.key,p.props,null,x.mode,y),y.ref=Uo(x,m,p),y.return=x,y)}function c(x,m,p,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=hu(p,x.mode,y),m.return=x,m):(m=o(m,p.children||[]),m.return=x,m)}function d(x,m,p,y,j){return m===null||m.tag!==7?(m=_r(p,x.mode,y,j),m.return=x,m):(m=o(m,p),m.return=x,m)}function f(x,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=pu(""+m,x.mode,p),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case is:return p=Bs(m.type,m.key,m.props,null,x.mode,p),p.ref=Uo(x,null,m),p.return=x,p;case Wr:return m=hu(m,x.mode,p),m.return=x,m;case Dn:var y=m._init;return f(x,y(m._payload),p)}if(qo(m)||Oo(m))return m=_r(m,x.mode,p,null),m.return=x,m;gs(x,m)}return null}function h(x,m,p,y){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:l(x,m,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case is:return p.key===j?u(x,m,p,y):null;case Wr:return p.key===j?c(x,m,p,y):null;case Dn:return j=p._init,h(x,m,j(p._payload),y)}if(qo(p)||Oo(p))return j!==null?null:d(x,m,p,y,null);gs(x,p)}return null}function v(x,m,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return x=x.get(p)||null,l(m,x,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case is:return x=x.get(y.key===null?p:y.key)||null,u(m,x,y,j);case Wr:return x=x.get(y.key===null?p:y.key)||null,c(m,x,y,j);case Dn:var E=y._init;return v(x,m,p,E(y._payload),j)}if(qo(y)||Oo(y))return x=x.get(p)||null,d(m,x,y,j,null);gs(m,y)}return null}function g(x,m,p,y){for(var j=null,E=null,$=m,C=m=0,O=null;$!==null&&C<p.length;C++){$.index>C?(O=$,$=null):O=$.sibling;var z=h(x,$,p[C],y);if(z===null){$===null&&($=O);break}e&&$&&z.alternate===null&&t(x,$),m=i(z,m,C),E===null?j=z:E.sibling=z,E=z,$=O}if(C===p.length)return n(x,$),ce&&hr(x,C),j;if($===null){for(;C<p.length;C++)$=f(x,p[C],y),$!==null&&(m=i($,m,C),E===null?j=$:E.sibling=$,E=$);return ce&&hr(x,C),j}for($=r(x,$);C<p.length;C++)O=v($,x,C,p[C],y),O!==null&&(e&&O.alternate!==null&&$.delete(O.key===null?C:O.key),m=i(O,m,C),E===null?j=O:E.sibling=O,E=O);return e&&$.forEach(function(ee){return t(x,ee)}),ce&&hr(x,C),j}function S(x,m,p,y){var j=Oo(p);if(typeof j!="function")throw Error(R(150));if(p=j.call(p),p==null)throw Error(R(151));for(var E=j=null,$=m,C=m=0,O=null,z=p.next();$!==null&&!z.done;C++,z=p.next()){$.index>C?(O=$,$=null):O=$.sibling;var ee=h(x,$,z.value,y);if(ee===null){$===null&&($=O);break}e&&$&&ee.alternate===null&&t(x,$),m=i(ee,m,C),E===null?j=ee:E.sibling=ee,E=ee,$=O}if(z.done)return n(x,$),ce&&hr(x,C),j;if($===null){for(;!z.done;C++,z=p.next())z=f(x,z.value,y),z!==null&&(m=i(z,m,C),E===null?j=z:E.sibling=z,E=z);return ce&&hr(x,C),j}for($=r(x,$);!z.done;C++,z=p.next())z=v($,x,C,z.value,y),z!==null&&(e&&z.alternate!==null&&$.delete(z.key===null?C:z.key),m=i(z,m,C),E===null?j=z:E.sibling=z,E=z);return e&&$.forEach(function(be){return t(x,be)}),ce&&hr(x,C),j}function b(x,m,p,y){if(typeof p=="object"&&p!==null&&p.type===qr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case is:e:{for(var j=p.key,E=m;E!==null;){if(E.key===j){if(j=p.type,j===qr){if(E.tag===7){n(x,E.sibling),m=o(E,p.props.children),m.return=x,x=m;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&Ip(j)===E.type){n(x,E.sibling),m=o(E,p.props),m.ref=Uo(x,E,p),m.return=x,x=m;break e}n(x,E);break}else t(x,E);E=E.sibling}p.type===qr?(m=_r(p.props.children,x.mode,y,p.key),m.return=x,x=m):(y=Bs(p.type,p.key,p.props,null,x.mode,y),y.ref=Uo(x,m,p),y.return=x,x=y)}return s(x);case Wr:e:{for(E=p.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(x,m.sibling),m=o(m,p.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=hu(p,x.mode,y),m.return=x,x=m}return s(x);case Dn:return E=p._init,b(x,m,E(p._payload),y)}if(qo(p))return g(x,m,p,y);if(Oo(p))return S(x,m,p,y);gs(x,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(x,m.sibling),m=o(m,p),m.return=x,x=m):(n(x,m),m=pu(p,x.mode,y),m.return=x,x=m),s(x)):n(x,m)}return b}var ho=Tg(!0),Ig=Tg(!1),wa=sr(null),ba=null,eo=null,Ld=null;function Ad(){Ld=eo=ba=null}function Od(e){var t=wa.current;ue(wa),e._currentValue=t}function mc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lo(e,t){ba=e,Ld=eo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Ld!==e)if(e={context:e,memoizedValue:t,next:null},eo===null){if(ba===null)throw Error(R(308));eo=e,ba.dependencies={lanes:0,firstContext:e}}else eo=eo.next=e;return t}var br=null;function zd(e){br===null?br=[e]:br.push(e)}function Lg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zd(t)):(n.next=o.next,o.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ag(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kn(e,n)}return o=r.interleaved,o===null?(t.next=t,zd(r)):(t.next=o.next,o.next=t),r.interleaved=t,kn(e,n)}function Os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jd(e,n)}}function Lp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sa(e,t,n,r){var o=e.updateQueue;Mn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;s=0,d=c=u=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,S=l;switch(h=t,v=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(v,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(v,f,h):g,h==null)break e;f=pe({},f,h);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Lr|=s,e.lanes=s,e.memoizedState=f}}function Ap(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var qi={},cn=sr(qi),_i=sr(qi),Ri=sr(qi);function Sr(e){if(e===qi)throw Error(R(174));return e}function Md(e,t){switch(ie(Ri,t),ie(_i,e),ie(cn,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ku(t,e)}ue(cn),ie(cn,t)}function mo(){ue(cn),ue(_i),ue(Ri)}function Og(e){Sr(Ri.current);var t=Sr(cn.current),n=Ku(t,e.type);t!==n&&(ie(_i,e),ie(cn,n))}function Fd(e){_i.current===e&&(ue(cn),ue(_i))}var de=sr(0);function ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var au=[];function Ud(){for(var e=0;e<au.length;e++)au[e]._workInProgressVersionPrimary=null;au.length=0}var zs=_n.ReactCurrentDispatcher,lu=_n.ReactCurrentBatchConfig,Ir=0,fe=null,Se=null,ke=null,ka=!1,li=!1,Pi=0,Zw=0;function Le(){throw Error(R(321))}function Bd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function Hd(e,t,n,r,o,i){if(Ir=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zs.current=e===null||e.memoizedState===null?rb:ob,e=n(r,o),li){i=0;do{if(li=!1,Pi=0,25<=i)throw Error(R(301));i+=1,ke=Se=null,t.updateQueue=null,zs.current=ib,e=n(r,o)}while(li)}if(zs.current=Ea,t=Se!==null&&Se.next!==null,Ir=0,ke=Se=fe=null,ka=!1,t)throw Error(R(300));return e}function Vd(){var e=Pi!==0;return Pi=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?fe.memoizedState=ke=e:ke=ke.next=e,ke}function Pt(){if(Se===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=ke===null?fe.memoizedState:ke.next;if(t!==null)ke=t,Se=e;else{if(e===null)throw Error(R(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ke===null?fe.memoizedState=ke=e:ke=ke.next=e}return ke}function Ni(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,u=null,c=i;do{var d=c.lane;if((Ir&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,s=r):u=u.next=f,fe.lanes|=d,Lr|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=l,Qt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,Lr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Qt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function zg(){}function Dg(e,t){var n=fe,r=Pt(),o=t(),i=!Qt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ye=!0),r=r.queue,Wd(Ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Ti(9,Fg.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(R(349));Ir&30||Mg(n,t,o)}return o}function Mg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fg(e,t,n,r){t.value=n,t.getSnapshot=r,Bg(t)&&Hg(e)}function Ug(e,t,n){return n(function(){Bg(t)&&Hg(e)})}function Bg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function Hg(e){var t=kn(e,1);t!==null&&Jt(t,e,1,-1)}function Op(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=nb.bind(null,fe,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vg(){return Pt().memoizedState}function Ds(e,t,n,r){var o=rn();fe.flags|=e,o.memoizedState=Ti(1|t,n,void 0,r===void 0?null:r)}function ll(e,t,n,r){var o=Pt();r=r===void 0?null:r;var i=void 0;if(Se!==null){var s=Se.memoizedState;if(i=s.destroy,r!==null&&Bd(r,s.deps)){o.memoizedState=Ti(t,n,i,r);return}}fe.flags|=e,o.memoizedState=Ti(1|t,n,i,r)}function zp(e,t){return Ds(8390656,8,e,t)}function Wd(e,t){return ll(2048,8,e,t)}function Wg(e,t){return ll(4,2,e,t)}function qg(e,t){return ll(4,4,e,t)}function Gg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jg(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,Gg.bind(null,t,e),n)}function qd(){}function Kg(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qg(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xg(e,t,n){return Ir&21?(Qt(n,t)||(n=ng(),fe.lanes|=n,Lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function eb(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=lu.transition;lu.transition={};try{e(!1),t()}finally{Z=n,lu.transition=r}}function Yg(){return Pt().memoizedState}function tb(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zg(e))ev(t,n);else if(n=Lg(e,t,n,r),n!==null){var o=He();Jt(n,e,r,o),tv(n,t,r)}}function nb(e,t,n){var r=Zn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zg(e))ev(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Qt(l,s)){var u=t.interleaved;u===null?(o.next=o,zd(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Lg(e,t,o,r),n!==null&&(o=He(),Jt(n,e,r,o),tv(n,t,r))}}function Zg(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function ev(e,t){li=ka=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jd(e,n)}}var Ea={readContext:Rt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},rb={readContext:Rt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:zp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4194308,4,Gg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var n=rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tb.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:Op,useDebugValue:qd,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=Op(!1),t=e[0];return e=eb.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,o=rn();if(ce){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ce===null)throw Error(R(349));Ir&30||Mg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,zp(Ug.bind(null,r,i,e),[e]),r.flags|=2048,Ti(9,Fg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=rn(),t=Ce.identifierPrefix;if(ce){var n=wn,r=yn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ob={readContext:Rt,useCallback:Kg,useContext:Rt,useEffect:Wd,useImperativeHandle:Jg,useInsertionEffect:Wg,useLayoutEffect:qg,useMemo:Qg,useReducer:uu,useRef:Vg,useState:function(){return uu(Ni)},useDebugValue:qd,useDeferredValue:function(e){var t=Pt();return Xg(t,Se.memoizedState,e)},useTransition:function(){var e=uu(Ni)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zg,useSyncExternalStore:Dg,useId:Yg,unstable_isNewReconciler:!1},ib={readContext:Rt,useCallback:Kg,useContext:Rt,useEffect:Wd,useImperativeHandle:Jg,useInsertionEffect:Wg,useLayoutEffect:qg,useMemo:Qg,useReducer:cu,useRef:Vg,useState:function(){return cu(Ni)},useDebugValue:qd,useDeferredValue:function(e){var t=Pt();return Se===null?t.memoizedState=e:Xg(t,Se.memoizedState,e)},useTransition:function(){var e=cu(Ni)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zg,useSyncExternalStore:Dg,useId:Yg,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),o=Zn(e),i=bn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xn(e,i,o),t!==null&&(Jt(t,e,o,r),Os(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),o=Zn(e),i=bn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xn(e,i,o),t!==null&&(Jt(t,e,o,r),Os(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Zn(e),o=bn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xn(e,o,r),t!==null&&(Jt(t,e,r,n),Os(t,e,r))}};function Dp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(o,i):!0}function nv(e,t,n){var r=!1,o=or,i=t.contextType;return typeof i=="object"&&i!==null?i=Rt(i):(o=et(t)?Nr:Me.current,r=t.contextTypes,i=(r=r!=null)?fo(e,o):or),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function vc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Dd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Rt(i):(i=et(t)?Nr:Me.current,o.context=fo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(gc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ul.enqueueReplaceState(o,o.state,null),Sa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,t){try{var n="",r=t;do n+=I1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function du(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sb=typeof WeakMap=="function"?WeakMap:Map;function rv(e,t,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$a||($a=!0,_c=r),xc(e,t)},n}function ov(e,t,n){n=bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){xc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){xc(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=wb.bind(null,e,t,n),t.then(e,e))}function Up(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bn(-1,1),t.tag=2,Xn(n,t,1))),n.lanes|=1),e)}var ab=_n.ReactCurrentOwner,Ye=!1;function Ue(e,t,n,r){t.child=e===null?Ig(t,null,n,r):ho(t,e.child,n,r)}function Hp(e,t,n,r,o){n=n.render;var i=t.ref;return lo(t,o),r=Hd(e,t,n,r,i,o),n=Vd(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(ce&&n&&Nd(t),t.flags|=1,Ue(e,t,r,o),t.child)}function Vp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ef(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,iv(e,t,i,r,o)):(e=Bs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(s,r)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=er(i,r),e.ref=t.ref,e.return=t,t.child=e}function iv(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ki(i,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,En(e,t,o)}return yc(e,t,n,r,o)}function sv(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(no,ut),ut|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(no,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(no,ut),ut|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(no,ut),ut|=r;return Ue(e,t,o,n),t.child}function av(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yc(e,t,n,r,o){var i=et(n)?Nr:Me.current;return i=fo(t,i),lo(t,o),n=Hd(e,t,n,r,i,o),r=Vd(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(ce&&r&&Nd(t),t.flags|=1,Ue(e,t,n,o),t.child)}function Wp(e,t,n,r,o){if(et(n)){var i=!0;va(t)}else i=!1;if(lo(t,o),t.stateNode===null)Ms(e,t),nv(t,n,r),vc(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rt(c):(c=et(n)?Nr:Me.current,c=fo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Mp(t,s,r,c),Mn=!1;var h=t.memoizedState;s.state=h,Sa(t,r,s,o),u=t.memoizedState,l!==r||h!==u||Ze.current||Mn?(typeof d=="function"&&(gc(t,n,d,r),u=t.memoizedState),(l=Mn||Dp(t,n,l,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ag(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Bt(t.type,l),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=et(n)?Nr:Me.current,u=fo(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==u)&&Mp(t,s,r,u),Mn=!1,h=t.memoizedState,s.state=h,Sa(t,r,s,o);var g=t.memoizedState;l!==f||h!==g||Ze.current||Mn?(typeof v=="function"&&(gc(t,n,v,r),g=t.memoizedState),(c=Mn||Dp(t,n,c,r,h,g,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return wc(e,t,n,r,i,o)}function wc(e,t,n,r,o,i){av(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Pp(t,n,!1),En(e,t,i);r=t.stateNode,ab.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ho(t,e.child,null,i),t.child=ho(t,null,l,i)):Ue(e,t,l,i),t.memoizedState=r.state,o&&Pp(t,n,!0),t.child}function lv(e){var t=e.stateNode;t.pendingContext?Rp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rp(e,t.context,!1),Md(e,t.containerInfo)}function qp(e,t,n,r,o){return po(),Id(o),t.flags|=256,Ue(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function uv(e,t,n){var r=t.pendingProps,o=de.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(de,o&1),e===null)return hc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=fl(s,r,0,null),e=_r(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Sc(n),t.memoizedState=bc,e):Gd(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return lb(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=er(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=er(l,i):(i=_r(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Sc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=bc,r}return i=e.child,e=i.sibling,r=er(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gd(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,n,r){return r!==null&&Id(r),ho(t,e.child,null,n),e=Gd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lb(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=du(Error(R(422))),vs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fl({mode:"visible",children:r.children},o,0,null),i=_r(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ho(t,e.child,null,s),t.child.memoizedState=Sc(s),t.memoizedState=bc,i);if(!(t.mode&1))return vs(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=du(i,r,void 0),vs(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ye||l){if(r=Ce,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kn(e,o),Jt(r,e,o,-1))}return Zd(),r=du(Error(R(421))),vs(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bb.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,mt=Qn(o.nextSibling),gt=t,ce=!0,qt=null,e!==null&&(Et[Ct++]=yn,Et[Ct++]=wn,Et[Ct++]=Tr,yn=e.id,wn=e.overflow,Tr=t),t=Gd(t,r.children),t.flags|=4096,t)}function Gp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mc(e.return,t,n)}function fu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function cv(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ue(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gp(e,n,t);else if(e.tag===19)Gp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(de,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ja(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ja(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fu(t,!0,n,null,i);break;case"together":fu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ub(e,t,n){switch(t.tag){case 3:lv(t),po();break;case 5:Og(t);break;case 1:et(t.type)&&va(t);break;case 4:Md(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(wa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?uv(e,t,n):(ie(de,de.current&1),e=En(e,t,n),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,sv(e,t,n)}return En(e,t,n)}var dv,jc,fv,pv;dv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};fv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Sr(cn.current);var i=null;switch(n){case"input":o=Wu(e,o),r=Wu(e,r),i=[];break;case"select":o=pe({},o,{value:void 0}),r=pe({},r,{value:void 0}),i=[];break;case"textarea":o=Ju(e,o),r=Ju(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ma)}Qu(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&se("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};pv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bo(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cb(e,t,n){var r=t.pendingProps;switch(Td(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return et(t.type)&&ga(),Ae(t),null;case 3:return r=t.stateNode,mo(),ue(Ze),ue(Me),Ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ms(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Nc(qt),qt=null))),jc(e,t),Ae(t),null;case 5:Fd(t);var o=Sr(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)fv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ae(t),null}if(e=Sr(cn.current),ms(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[sn]=t,r[$i]=i,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<Jo.length;o++)se(Jo[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":np(r,i),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},se("invalid",r);break;case"textarea":op(r,i),se("invalid",r)}Qu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&hs(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&hs(r.textContent,l,e),o=["children",""+l]):vi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&se("scroll",r)}switch(n){case"input":ss(r),rp(r,i,!0);break;case"textarea":ss(r),ip(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ma)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=U0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[sn]=t,e[$i]=r,dv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Xu(n,r),n){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Jo.length;o++)se(Jo[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":np(e,r),o=Wu(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=pe({},r,{value:void 0}),se("invalid",e);break;case"textarea":op(e,r),o=Ju(e,r),se("invalid",e);break;default:o=r}Qu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?V0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B0(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xi(e,u):typeof u=="number"&&xi(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&se("scroll",e):u!=null&&vd(e,i,u,s))}switch(n){case"input":ss(e),rp(e,r,!1);break;case"textarea":ss(e),ip(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?oo(e,!!r.multiple,i,!1):r.defaultValue!=null&&oo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)pv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Sr(Ri.current),Sr(cn.current),ms(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(i=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:hs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return Ae(t),null;case 13:if(ue(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&mt!==null&&t.mode&1&&!(t.flags&128))Ng(),po(),t.flags|=98560,i=!1;else if(i=ms(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[sn]=t}else po(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else qt!==null&&(Nc(qt),qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?je===0&&(je=3):Zd())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return mo(),jc(e,t),e===null&&Ei(t.stateNode.containerInfo),Ae(t),null;case 10:return Od(t.type._context),Ae(t),null;case 17:return et(t.type)&&ga(),Ae(t),null;case 19:if(ue(de),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Bo(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ja(e),s!==null){for(t.flags|=128,Bo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(de,de.current&1|2),t.child}e=e.sibling}i.tail!==null&&ge()>vo&&(t.flags|=128,r=!0,Bo(i,!1),t.lanes=4194304)}else{if(!r)if(e=ja(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ce)return Ae(t),null}else 2*ge()-i.renderingStartTime>vo&&n!==1073741824&&(t.flags|=128,r=!0,Bo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ge(),t.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Yd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function db(e,t){switch(Td(t),t.tag){case 1:return et(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mo(),ue(Ze),ue(Me),Ud(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fd(t),null;case 13:if(ue(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(de),null;case 4:return mo(),null;case 10:return Od(t.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var xs=!1,ze=!1,fb=typeof WeakSet=="function"?WeakSet:Set,L=null;function to(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function kc(e,t,n){try{n()}catch(r){he(e,t,r)}}var Jp=!1;function pb(e,t){if(ac=fa,e=xg(),Pd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++c===o&&(l=s),h===i&&++d===r&&(u=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:e,selectionRange:n},fa=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,b=g.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?S:Bt(t.type,S),b);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(y){he(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=Jp,Jp=!1,g}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&kc(t,n,i)}o=o.next}while(o!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hv(e){var t=e.alternate;t!==null&&(e.alternate=null,hv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[$i],delete t[dc],delete t[Kw],delete t[Qw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mv(e){return e.tag===5||e.tag===3||e.tag===4}function Kp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ma));else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}var $e=null,Vt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)gv(e,t,n),n=n.sibling}function gv(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:ze||to(n,t);case 6:var r=$e,o=Vt;$e=null,Tn(e,t,n),$e=r,Vt=o,$e!==null&&(Vt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Vt?(e=$e,n=n.stateNode,e.nodeType===8?iu(e.parentNode,n):e.nodeType===1&&iu(e,n),Si(e)):iu($e,n.stateNode));break;case 4:r=$e,o=Vt,$e=n.stateNode.containerInfo,Vt=!0,Tn(e,t,n),$e=r,Vt=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&kc(n,t,s),o=o.next}while(o!==r)}Tn(e,t,n);break;case 1:if(!ze&&(to(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Tn(e,t,n),ze=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function Qp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fb),t.forEach(function(r){var o=Sb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Vt=!1;break e;case 3:$e=l.stateNode.containerInfo,Vt=!0;break e;case 4:$e=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if($e===null)throw Error(R(160));gv(i,s,o),$e=null,Vt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){he(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vv(t,e),t=t.sibling}function vv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Yt(e),r&4){try{ui(3,e,e.return),cl(3,e)}catch(S){he(e,e.return,S)}try{ui(5,e,e.return)}catch(S){he(e,e.return,S)}}break;case 1:Dt(t,e),Yt(e),r&512&&n!==null&&to(n,n.return);break;case 5:if(Dt(t,e),Yt(e),r&512&&n!==null&&to(n,n.return),e.flags&32){var o=e.stateNode;try{xi(o,"")}catch(S){he(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&M0(o,i),Xu(l,s);var c=Xu(l,i);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?V0(o,f):d==="dangerouslySetInnerHTML"?B0(o,f):d==="children"?xi(o,f):vd(o,d,f,c)}switch(l){case"input":qu(o,i);break;case"textarea":F0(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?oo(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?oo(o,!!i.multiple,i.defaultValue,!0):oo(o,!!i.multiple,i.multiple?[]:"",!1))}o[$i]=i}catch(S){he(e,e.return,S)}}break;case 6:if(Dt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){he(e,e.return,S)}}break;case 3:if(Dt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(S){he(e,e.return,S)}break;case 4:Dt(t,e),Yt(e);break;case 13:Dt(t,e),Yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qd=ge())),r&4&&Qp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(c=ze)||d,Dt(t,e),ze=c):Dt(t,e),Yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(h=L,v=h.child,h.tag){case 0:case 11:case 14:case 15:ui(4,h,h.return);break;case 1:to(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){he(r,n,S)}}break;case 5:to(h,h.return);break;case 22:if(h.memoizedState!==null){Yp(f);continue}}v!==null?(v.return=h,L=v):Yp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=H0("display",s))}catch(S){he(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){he(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dt(t,e),Yt(e),r&4&&Qp(e);break;case 21:break;default:Dt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xi(o,""),r.flags&=-33);var i=Kp(e);$c(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Kp(e);Cc(e,l,s);break;default:throw Error(R(161))}}catch(u){he(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hb(e,t,n){L=e,xv(e)}function xv(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||xs;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||ze;l=xs;var c=ze;if(xs=s,(ze=u)&&!c)for(L=o;L!==null;)s=L,u=s.child,s.tag===22&&s.memoizedState!==null?Zp(o):u!==null?(u.return=s,L=u):Zp(o);for(;i!==null;)L=i,xv(i),i=i.sibling;L=o,xs=l,ze=c}Xp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):Xp(e)}}function Xp(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ap(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ap(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Si(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ze||t.flags&512&&Ec(t)}catch(h){he(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Yp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Zp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(u){he(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){he(t,o,u)}}var i=t.return;try{Ec(t)}catch(u){he(t,i,u)}break;case 5:var s=t.return;try{Ec(t)}catch(u){he(t,s,u)}}}catch(u){he(t,t.return,u)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var mb=Math.ceil,Ca=_n.ReactCurrentDispatcher,Jd=_n.ReactCurrentOwner,_t=_n.ReactCurrentBatchConfig,Q=0,Ce=null,we=null,Pe=0,ut=0,no=sr(0),je=0,Ii=null,Lr=0,dl=0,Kd=0,ci=null,Xe=null,Qd=0,vo=1/0,mn=null,$a=!1,_c=null,Yn=null,ys=!1,Hn=null,_a=0,di=0,Rc=null,Fs=-1,Us=0;function He(){return Q&6?ge():Fs!==-1?Fs:Fs=ge()}function Zn(e){return e.mode&1?Q&2&&Pe!==0?Pe&-Pe:Yw.transition!==null?(Us===0&&(Us=ng()),Us):(e=Z,e!==0||(e=window.event,e=e===void 0?16:ug(e.type)),e):1}function Jt(e,t,n,r){if(50<di)throw di=0,Rc=null,Error(R(185));Hi(e,n,r),(!(Q&2)||e!==Ce)&&(e===Ce&&(!(Q&2)&&(dl|=n),je===4&&Un(e,Pe)),tt(e,r),n===1&&Q===0&&!(t.mode&1)&&(vo=ge()+500,al&&ar()))}function tt(e,t){var n=e.callbackNode;Y1(e,t);var r=da(e,e===Ce?Pe:0);if(r===0)n!==null&&lp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lp(n),t===1)e.tag===0?Xw(eh.bind(null,e)):_g(eh.bind(null,e)),Gw(function(){!(Q&6)&&ar()}),n=null;else{switch(rg(r)){case 1:n=Sd;break;case 4:n=eg;break;case 16:n=ca;break;case 536870912:n=tg;break;default:n=ca}n=Cv(n,yv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yv(e,t){if(Fs=-1,Us=0,Q&6)throw Error(R(327));var n=e.callbackNode;if(uo()&&e.callbackNode!==n)return null;var r=da(e,e===Ce?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ra(e,r);else{t=r;var o=Q;Q|=2;var i=bv();(Ce!==e||Pe!==t)&&(mn=null,vo=ge()+500,$r(e,t));do try{xb();break}catch(l){wv(e,l)}while(!0);Ad(),Ca.current=i,Q=o,we!==null?t=0:(Ce=null,Pe=0,t=je)}if(t!==0){if(t===2&&(o=nc(e),o!==0&&(r=o,t=Pc(e,o))),t===1)throw n=Ii,$r(e,0),Un(e,r),tt(e,ge()),n;if(t===6)Un(e,r);else{if(o=e.current.alternate,!(r&30)&&!gb(o)&&(t=Ra(e,r),t===2&&(i=nc(e),i!==0&&(r=i,t=Pc(e,i))),t===1))throw n=Ii,$r(e,0),Un(e,r),tt(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:mr(e,Xe,mn);break;case 3:if(Un(e,r),(r&130023424)===r&&(t=Qd+500-ge(),10<t)){if(da(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=cc(mr.bind(null,e,Xe,mn),t);break}mr(e,Xe,mn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Gt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mb(r/1960))-r,10<r){e.timeoutHandle=cc(mr.bind(null,e,Xe,mn),r);break}mr(e,Xe,mn);break;case 5:mr(e,Xe,mn);break;default:throw Error(R(329))}}}return tt(e,ge()),e.callbackNode===n?yv.bind(null,e):null}function Pc(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=Ra(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Nc(t)),e}function Nc(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function gb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Qt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~Kd,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function eh(e){if(Q&6)throw Error(R(327));uo();var t=da(e,0);if(!(t&1))return tt(e,ge()),null;var n=Ra(e,t);if(e.tag!==0&&n===2){var r=nc(e);r!==0&&(t=r,n=Pc(e,r))}if(n===1)throw n=Ii,$r(e,0),Un(e,t),tt(e,ge()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mr(e,Xe,mn),tt(e,ge()),null}function Xd(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(vo=ge()+500,al&&ar())}}function Ar(e){Hn!==null&&Hn.tag===0&&!(Q&6)&&uo();var t=Q;Q|=1;var n=_t.transition,r=Z;try{if(_t.transition=null,Z=1,e)return e()}finally{Z=r,_t.transition=n,Q=t,!(Q&6)&&ar()}}function Yd(){ut=no.current,ue(no)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qw(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:mo(),ue(Ze),ue(Me),Ud();break;case 5:Fd(r);break;case 4:mo();break;case 13:ue(de);break;case 19:ue(de);break;case 10:Od(r.type._context);break;case 22:case 23:Yd()}n=n.return}if(Ce=e,we=e=er(e.current,null),Pe=ut=t,je=0,Ii=null,Kd=dl=Lr=0,Xe=ci=null,br!==null){for(t=0;t<br.length;t++)if(n=br[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}br=null}return e}function wv(e,t){do{var n=we;try{if(Ad(),zs.current=Ea,ka){for(var r=fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ka=!1}if(Ir=0,ke=Se=fe=null,li=!1,Pi=0,Jd.current=null,n===null||n.return===null){je=1,Ii=t,we=null;break}e:{var i=e,s=n.return,l=n,u=t;if(t=Pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Up(s);if(v!==null){v.flags&=-257,Bp(v,s,l,i,t),v.mode&1&&Fp(i,c,t),t=v,u=c;var g=t.updateQueue;if(g===null){var S=new Set;S.add(u),t.updateQueue=S}else g.add(u);break e}else{if(!(t&1)){Fp(i,c,t),Zd();break e}u=Error(R(426))}}else if(ce&&l.mode&1){var b=Up(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Bp(b,s,l,i,t),Id(go(u,l));break e}}i=u=go(u,l),je!==4&&(je=2),ci===null?ci=[i]:ci.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=rv(i,u,t);Lp(i,x);break e;case 1:l=u;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Yn===null||!Yn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=ov(i,l,t);Lp(i,y);break e}}i=i.return}while(i!==null)}jv(n)}catch(j){t=j,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function bv(){var e=Ca.current;return Ca.current=Ea,e===null?Ea:e}function Zd(){(je===0||je===3||je===2)&&(je=4),Ce===null||!(Lr&268435455)&&!(dl&268435455)||Un(Ce,Pe)}function Ra(e,t){var n=Q;Q|=2;var r=bv();(Ce!==e||Pe!==t)&&(mn=null,$r(e,t));do try{vb();break}catch(o){wv(e,o)}while(!0);if(Ad(),Q=n,Ca.current=r,we!==null)throw Error(R(261));return Ce=null,Pe=0,je}function vb(){for(;we!==null;)Sv(we)}function xb(){for(;we!==null&&!H1();)Sv(we)}function Sv(e){var t=Ev(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?jv(e):we=t,Jd.current=null}function jv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=db(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,we=null;return}}else if(n=cb(n,t,ut),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);je===0&&(je=5)}function mr(e,t,n){var r=Z,o=_t.transition;try{_t.transition=null,Z=1,yb(e,t,n,r)}finally{_t.transition=o,Z=r}return null}function yb(e,t,n,r){do uo();while(Hn!==null);if(Q&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Z1(e,i),e===Ce&&(we=Ce=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ys||(ys=!0,Cv(ca,function(){return uo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_t.transition,_t.transition=null;var s=Z;Z=1;var l=Q;Q|=4,Jd.current=null,pb(e,n),vv(n,e),Mw(lc),fa=!!ac,lc=ac=null,e.current=n,hb(n),V1(),Q=l,Z=s,_t.transition=i}else e.current=n;if(ys&&(ys=!1,Hn=e,_a=o),i=e.pendingLanes,i===0&&(Yn=null),G1(n.stateNode),tt(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if($a)throw $a=!1,e=_c,_c=null,e;return _a&1&&e.tag!==0&&uo(),i=e.pendingLanes,i&1?e===Rc?di++:(di=0,Rc=e):di=0,ar(),null}function uo(){if(Hn!==null){var e=rg(_a),t=_t.transition,n=Z;try{if(_t.transition=null,Z=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,_a=0,Q&6)throw Error(R(331));var o=Q;for(Q|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:ui(8,d,i)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var h=d.sibling,v=d.return;if(hv(d),d===c){L=null;break}if(h!==null){h.return=v,L=h;break}L=v}}}var g=i.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ui(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,L=x;break e}L=i.return}}var m=e.current;for(L=m;L!==null;){s=L;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,L=p;else e:for(s=m;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cl(9,l)}}catch(j){he(l,l.return,j)}if(l===s){L=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,L=y;break e}L=l.return}}if(Q=o,ar(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{Z=n,_t.transition=t}}return!1}function th(e,t,n){t=go(n,t),t=rv(e,t,1),e=Xn(e,t,1),t=He(),e!==null&&(Hi(e,1,t),tt(e,t))}function he(e,t,n){if(e.tag===3)th(e,e,n);else for(;t!==null;){if(t.tag===3){th(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=go(n,e),e=ov(t,e,1),t=Xn(t,e,1),e=He(),t!==null&&(Hi(t,1,e),tt(t,e));break}}t=t.return}}function wb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Pe&n)===n&&(je===4||je===3&&(Pe&130023424)===Pe&&500>ge()-Qd?$r(e,0):Kd|=n),tt(e,t)}function kv(e,t){t===0&&(e.mode&1?(t=us,us<<=1,!(us&130023424)&&(us=4194304)):t=1);var n=He();e=kn(e,t),e!==null&&(Hi(e,t,n),tt(e,n))}function bb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kv(e,n)}function Sb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),kv(e,n)}var Ev;Ev=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,ub(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,ce&&t.flags&1048576&&Rg(t,ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ms(e,t),e=t.pendingProps;var o=fo(t,Me.current);lo(t,n),o=Hd(null,t,r,e,o,n);var i=Vd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(i=!0,va(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Dd(t),o.updater=ul,t.stateNode=o,o._reactInternals=t,vc(t,r,e,n),t=wc(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&Nd(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ms(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=kb(r),e=Bt(r,e),o){case 0:t=yc(null,t,r,e,n);break e;case 1:t=Wp(null,t,r,e,n);break e;case 11:t=Hp(null,t,r,e,n);break e;case 14:t=Vp(null,t,r,Bt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),yc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Wp(e,t,r,o,n);case 3:e:{if(lv(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ag(e,t),Sa(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=go(Error(R(423)),t),t=qp(e,t,r,n,o);break e}else if(r!==o){o=go(Error(R(424)),t),t=qp(e,t,r,n,o);break e}else for(mt=Qn(t.stateNode.containerInfo.firstChild),gt=t,ce=!0,qt=null,n=Ig(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===o){t=En(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Og(t),e===null&&hc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,uc(r,o)?s=null:i!==null&&uc(r,i)&&(t.flags|=32),av(e,t),Ue(e,t,s,n),t.child;case 6:return e===null&&hc(t),null;case 13:return uv(e,t,n);case 4:return Md(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ho(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Hp(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ie(wa,r._currentValue),r._currentValue=s,i!==null)if(Qt(i.value,s)){if(i.children===o.children&&!Ze.current){t=En(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=bn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),mc(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,lo(t,n),o=Rt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=Bt(r,t.pendingProps),o=Bt(r.type,o),Vp(e,t,r,o,n);case 15:return iv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Ms(e,t),t.tag=1,et(r)?(e=!0,va(t)):e=!1,lo(t,n),nv(t,r,o),vc(t,r,o,n),wc(null,t,r,!0,e,n);case 19:return cv(e,t,n);case 22:return sv(e,t,n)}throw Error(R(156,t.tag))};function Cv(e,t){return Z0(e,t)}function jb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new jb(e,t,n,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kb(e){if(typeof e=="function")return ef(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yd)return 11;if(e===wd)return 14}return 2}function er(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bs(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")ef(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case qr:return _r(n.children,o,i,t);case xd:s=8,o|=8;break;case Uu:return e=$t(12,n,t,o|2),e.elementType=Uu,e.lanes=i,e;case Bu:return e=$t(13,n,t,o),e.elementType=Bu,e.lanes=i,e;case Hu:return e=$t(19,n,t,o),e.elementType=Hu,e.lanes=i,e;case O0:return fl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L0:s=10;break e;case A0:s=9;break e;case yd:s=11;break e;case wd:s=14;break e;case Dn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=$t(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function _r(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=$t(22,e,r,t),e.elementType=O0,e.lanes=n,e.stateNode={isHidden:!1},e}function pu(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function hu(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tf(e,t,n,r,o,i,s,l,u){return e=new Eb(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(i),e}function Cb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $v(e){if(!e)return or;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(et(n))return $g(e,n,t)}return t}function _v(e,t,n,r,o,i,s,l,u){return e=tf(n,r,!0,e,o,i,s,l,u),e.context=$v(null),n=e.current,r=He(),o=Zn(n),i=bn(r,o),i.callback=t??null,Xn(n,i,o),e.current.lanes=o,Hi(e,o,r),tt(e,r),e}function pl(e,t,n,r){var o=t.current,i=He(),s=Zn(o);return n=$v(n),t.context===null?t.context=n:t.pendingContext=n,t=bn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xn(o,t,s),e!==null&&(Jt(e,o,s,i),Os(e,o,s)),s}function Pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nf(e,t){nh(e,t),(e=e.alternate)&&nh(e,t)}function $b(){return null}var Rv=typeof reportError=="function"?reportError:function(e){console.error(e)};function rf(e){this._internalRoot=e}hl.prototype.render=rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));pl(e,t,null,null)};hl.prototype.unmount=rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ar(function(){pl(null,e,null,null)}),t[jn]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&lg(e)}};function of(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rh(){}function _b(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Pa(s);i.call(c)}}var s=_v(t,r,e,0,null,!1,!1,"",rh);return e._reactRootContainer=s,e[jn]=s.current,Ei(e.nodeType===8?e.parentNode:e),Ar(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Pa(u);l.call(c)}}var u=tf(e,0,!1,null,null,!1,!1,"",rh);return e._reactRootContainer=u,e[jn]=u.current,Ei(e.nodeType===8?e.parentNode:e),Ar(function(){pl(t,u,n,r)}),u}function gl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var u=Pa(s);l.call(u)}}pl(t,s,e,o)}else s=_b(n,t,e,o,r);return Pa(s)}og=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Go(t.pendingLanes);n!==0&&(jd(t,n|1),tt(t,ge()),!(Q&6)&&(vo=ge()+500,ar()))}break;case 13:Ar(function(){var r=kn(e,1);if(r!==null){var o=He();Jt(r,e,1,o)}}),nf(e,1)}};kd=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=He();Jt(t,e,134217728,n)}nf(e,134217728)}};ig=function(e){if(e.tag===13){var t=Zn(e),n=kn(e,t);if(n!==null){var r=He();Jt(n,e,t,r)}nf(e,t)}};sg=function(){return Z};ag=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Zu=function(e,t,n){switch(t){case"input":if(qu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=sl(r);if(!o)throw Error(R(90));D0(r),qu(r,o)}}}break;case"textarea":F0(e,n);break;case"select":t=n.value,t!=null&&oo(e,!!n.multiple,t,!1)}};G0=Xd;J0=Ar;var Rb={usingClientEntryPoint:!1,Events:[Wi,Qr,sl,W0,q0,Xd]},Ho={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pb={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=X0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||$b,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{nl=ws.inject(Pb),un=ws}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rb;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(t))throw Error(R(200));return Cb(e,t,null,n)};yt.createRoot=function(e,t){if(!of(e))throw Error(R(299));var n=!1,r="",o=Rv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tf(e,1,!1,null,null,n,!1,r,o),e[jn]=t.current,Ei(e.nodeType===8?e.parentNode:e),new rf(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=X0(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return Ar(e)};yt.hydrate=function(e,t,n){if(!ml(t))throw Error(R(200));return gl(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!of(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=_v(t,null,e,1,n??null,o,!1,i,s),e[jn]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new hl(t)};yt.render=function(e,t,n){if(!ml(t))throw Error(R(200));return gl(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!ml(e))throw Error(R(40));return e._reactRootContainer?(Ar(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};yt.unstable_batchedUpdates=Xd;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return gl(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function Pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)}catch(e){console.error(e)}}Pv(),P0.exports=yt;var Nb=P0.exports,Nv,oh=Nb;Nv=oh.createRoot,oh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Li(){return Li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Li.apply(this,arguments)}var Vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vn||(Vn={}));const ih="popstate";function Tb(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Tc("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Na(o)}return Lb(t,n,null,e)}function ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ib(){return Math.random().toString(36).substr(2,8)}function sh(e,t){return{usr:e.state,key:e.key,idx:t}}function Tc(e,t,n,r){return n===void 0&&(n=null),Li({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$o(t):t,{state:n,key:t&&t.key||r||Ib()})}function Na(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $o(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lb(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Vn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Li({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=Vn.Pop;let b=d(),x=b==null?null:b-c;c=b,u&&u({action:l,location:S.location,delta:x})}function h(b,x){l=Vn.Push;let m=Tc(S.location,b,x);c=d()+1;let p=sh(m,c),y=S.createHref(m);try{s.pushState(p,"",y)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(y)}i&&u&&u({action:l,location:S.location,delta:1})}function v(b,x){l=Vn.Replace;let m=Tc(S.location,b,x);c=d();let p=sh(m,c),y=S.createHref(m);s.replaceState(p,"",y),i&&u&&u({action:l,location:S.location,delta:0})}function g(b){let x=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof b=="string"?b:Na(b);return m=m.replace(/ $/,"%20"),ve(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let S={get action(){return l},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(ih,f),u=b,()=>{o.removeEventListener(ih,f),u=null}},createHref(b){return t(o,b)},createURL:g,encodeLocation(b){let x=g(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:v,go(b){return s.go(b)}};return S}var ah;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ah||(ah={}));function Ab(e,t,n){return n===void 0&&(n="/"),Ob(e,t,n,!1)}function Ob(e,t,n,r){let o=typeof t=="string"?$o(t):t,i=sf(o.pathname||"/",n);if(i==null)return null;let s=Iv(e);zb(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=Jb(i);l=qb(s[u],c,r)}return l}function Iv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=tr([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Iv(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Vb(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let u of Lv(i.path))o(i,s,u)}),t}function Lv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Lv(r.join("/")),l=[];return l.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function zb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Db=/^:[\w-]+$/,Mb=3,Fb=2,Ub=1,Bb=10,Hb=-2,lh=e=>e==="*";function Vb(e,t){let n=e.split("/"),r=n.length;return n.some(lh)&&(r+=Hb),t&&(r+=Fb),n.filter(o=>!lh(o)).reduce((o,i)=>o+(Db.test(i)?Mb:i===""?Ub:Bb),r)}function Wb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qb(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=uh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),h=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=uh({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:tr([i,f.pathname]),pathnameBase:Yb(tr([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=tr([i,f.pathnameBase]))}return s}function uh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let S=l[f]||"";s=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const g=l[f];return v&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Gb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Jb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$o(e):e;return{pathname:n?n.startsWith("/")?n:Qb(n,t):t,search:Zb(r),hash:eS(o)}}function Qb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function mu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function af(e,t){let n=Xb(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$o(e):(o=Li({},e),ve(!o.pathname||!o.pathname.includes("?"),mu("?","pathname","search",o)),ve(!o.pathname||!o.pathname.includes("#"),mu("#","pathname","hash",o)),ve(!o.search||!o.search.includes("#"),mu("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}l=f>=0?t[f]:"/"}let u=Kb(o,l),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const tr=e=>e.join("/").replace(/\/\/+/g,"/"),Yb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Av=["post","put","patch","delete"];new Set(Av);const nS=["get",...Av];new Set(nS);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}const uf=w.createContext(null),rS=w.createContext(null),lr=w.createContext(null),vl=w.createContext(null),dn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ov=w.createContext(null);function oS(e,t){let{relative:n}=t===void 0?{}:t;_o()||ve(!1);let{basename:r,navigator:o}=w.useContext(lr),{hash:i,pathname:s,search:l}=Dv(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:tr([r,s])),o.createHref({pathname:u,search:l,hash:i})}function _o(){return w.useContext(vl)!=null}function Gi(){return _o()||ve(!1),w.useContext(vl).location}function zv(e){w.useContext(lr).static||w.useLayoutEffect(e)}function me(){let{isDataRoute:e}=w.useContext(dn);return e?yS():iS()}function iS(){_o()||ve(!1);let e=w.useContext(uf),{basename:t,future:n,navigator:r}=w.useContext(lr),{matches:o}=w.useContext(dn),{pathname:i}=Gi(),s=JSON.stringify(af(o,n.v7_relativeSplatPath)),l=w.useRef(!1);return zv(()=>{l.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=lf(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:tr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}const sS=w.createContext(null);function aS(e){let t=w.useContext(dn).outlet;return t&&w.createElement(sS.Provider,{value:e},t)}function ur(){let{matches:e}=w.useContext(dn),t=e[e.length-1];return t?t.params:{}}function Dv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(lr),{matches:o}=w.useContext(dn),{pathname:i}=Gi(),s=JSON.stringify(af(o,r.v7_relativeSplatPath));return w.useMemo(()=>lf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function lS(e,t){return uS(e,t)}function uS(e,t,n,r){_o()||ve(!1);let{navigator:o}=w.useContext(lr),{matches:i}=w.useContext(dn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Gi(),d;if(t){var f;let b=typeof t=="string"?$o(t):t;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||ve(!1),d=b}else d=c;let h=d.pathname||"/",v=h;if(u!=="/"){let b=u.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=Ab(e,{pathname:v}),S=hS(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:tr([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:tr([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&S?w.createElement(vl.Provider,{value:{location:Ai({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vn.Pop}},S):S}function cS(){let e=xS(),t=tS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const dS=w.createElement(cS,null);class fS extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(dn.Provider,{value:this.props.routeContext},w.createElement(Ov.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pS(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext(uf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(dn.Provider,{value:t},r)}function hS(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ve(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=n,g=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||g){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let v,g=!1,S=null,b=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,S=f.route.errorElement||dS,u&&(c<0&&h===0?(g=!0,b=null):c===h&&(g=!0,b=f.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,h+1)),m=()=>{let p;return v?p=S:g?p=b:f.route.Component?p=w.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,w.createElement(pS,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(fS,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var Mv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mv||{}),Ta=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ta||{});function mS(e){let t=w.useContext(uf);return t||ve(!1),t}function gS(e){let t=w.useContext(rS);return t||ve(!1),t}function vS(e){let t=w.useContext(dn);return t||ve(!1),t}function Fv(e){let t=vS(),n=t.matches[t.matches.length-1];return n.route.id||ve(!1),n.route.id}function xS(){var e;let t=w.useContext(Ov),n=gS(Ta.UseRouteError),r=Fv(Ta.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function yS(){let{router:e}=mS(Mv.UseNavigateStable),t=Fv(Ta.UseNavigateStable),n=w.useRef(!1);return zv(()=>{n.current=!0}),w.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ai({fromRouteId:t},i)))},[e,t])}function wS(e){let{to:t,replace:n,state:r,relative:o}=e;_o()||ve(!1);let{future:i,static:s}=w.useContext(lr),{matches:l}=w.useContext(dn),{pathname:u}=Gi(),c=me(),d=lf(t,af(l,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(d);return w.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function bS(e){return aS(e.context)}function J(e){ve(!1)}function SS(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Vn.Pop,navigator:i,static:s=!1,future:l}=e;_o()&&ve(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:i,static:s,future:Ai({v7_relativeSplatPath:!1},l)}),[u,l,i,s]);typeof r=="string"&&(r=$o(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:g="default"}=r,S=w.useMemo(()=>{let b=sf(d,u);return b==null?null:{location:{pathname:b,search:f,hash:h,state:v,key:g},navigationType:o}},[u,d,f,h,v,g,o]);return S==null?null:w.createElement(lr.Provider,{value:c},w.createElement(vl.Provider,{children:n,value:S}))}function jS(e){let{children:t,location:n}=e;return lS(Ic(t),n)}new Promise(()=>{});function Ic(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let i=[...t,o];if(r.type===w.Fragment){n.push.apply(n,Ic(r.props.children,i));return}r.type!==J&&ve(!1),!r.props.index||!r.props.children||ve(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ic(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lc.apply(this,arguments)}function kS(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ES(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function CS(e,t){return e.button===0&&(!t||t==="_self")&&!ES(e)}const $S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_S="6";try{window.__reactRouterVersion=_S}catch{}const RS="startTransition",ch=w1[RS];function PS(e){let{basename:t,children:n,future:r,window:o}=e,i=w.useRef();i.current==null&&(i.current=Tb({window:o,v5Compat:!0}));let s=i.current,[l,u]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=w.useCallback(f=>{c&&ch?ch(()=>u(f)):u(f)},[u,c]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.createElement(SS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const NS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,h=kS(t,$S),{basename:v}=w.useContext(lr),g,S=!1;if(typeof c=="string"&&TS.test(c)&&(g=c,NS))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=sf(y.pathname,v);y.origin===p.origin&&j!=null?c=j+y.search+y.hash:S=!0}catch{}let b=oS(c,{relative:o}),x=IS(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:o,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||x(p)}return w.createElement("a",Lc({},h,{href:g||b,onClick:S||i?r:m,ref:n,target:u}))});var dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var fh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fh||(fh={}));function IS(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,u=me(),c=Gi(),d=Dv(e,{relative:s});return w.useCallback(f=>{if(CS(f,n)){f.preventDefault();let h=r!==void 0?r:Na(c)===Na(d);u(e,{replace:h,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[c,u,d,r,o,n,e,i,s,l])}var De=function(){return De=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},De.apply(this,arguments)};function xo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ae="-ms-",fi="-moz-",X="-webkit-",Uv="comm",xl="rule",cf="decl",LS="@import",Bv="@keyframes",AS="@layer",Hv=Math.abs,df=String.fromCharCode,Ac=Object.assign;function OS(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function Vv(e){return e.trim()}function gn(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function Hs(e,t,n){return e.indexOf(t,n)}function Ee(e,t){return e.charCodeAt(t)|0}function yo(e,t,n){return e.slice(t,n)}function on(e){return e.length}function Wv(e){return e.length}function Ko(e,t){return t.push(e),e}function zS(e,t){return e.map(t).join("")}function ph(e,t){return e.filter(function(n){return!gn(n,t)})}var yl=1,wo=1,qv=0,Nt=0,ye=0,Ro="";function wl(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:yl,column:wo,length:s,return:"",siblings:l}}function An(e,t){return Ac(wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Br(e){for(;e.root;)e=An(e.root,{children:[e]});Ko(e,e.siblings)}function DS(){return ye}function MS(){return ye=Nt>0?Ee(Ro,--Nt):0,wo--,ye===10&&(wo=1,yl--),ye}function Kt(){return ye=Nt<qv?Ee(Ro,Nt++):0,wo++,ye===10&&(wo=1,yl++),ye}function Rr(){return Ee(Ro,Nt)}function Vs(){return Nt}function bl(e,t){return yo(Ro,e,t)}function Oc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function FS(e){return yl=wo=1,qv=on(Ro=e),Nt=0,[]}function US(e){return Ro="",e}function gu(e){return Vv(bl(Nt-1,zc(e===91?e+2:e===40?e+1:e)))}function BS(e){for(;(ye=Rr())&&ye<33;)Kt();return Oc(e)>2||Oc(ye)>3?"":" "}function HS(e,t){for(;--t&&Kt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return bl(e,Vs()+(t<6&&Rr()==32&&Kt()==32))}function zc(e){for(;Kt();)switch(ye){case e:return Nt;case 34:case 39:e!==34&&e!==39&&zc(ye);break;case 40:e===41&&zc(e);break;case 92:Kt();break}return Nt}function VS(e,t){for(;Kt()&&e+ye!==57;)if(e+ye===84&&Rr()===47)break;return"/*"+bl(t,Nt-1)+"*"+df(e===47?e:Kt())}function WS(e){for(;!Oc(Rr());)Kt();return bl(e,Nt)}function qS(e){return US(Ws("",null,null,null,[""],e=FS(e),0,[0],e))}function Ws(e,t,n,r,o,i,s,l,u){for(var c=0,d=0,f=s,h=0,v=0,g=0,S=1,b=1,x=1,m=0,p="",y=o,j=i,E=r,$=p;b;)switch(g=m,m=Kt()){case 40:if(g!=108&&Ee($,f-1)==58){Hs($+=B(gu(m),"&","&\f"),"&\f",Hv(c?l[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:$+=gu(m);break;case 9:case 10:case 13:case 32:$+=BS(g);break;case 92:$+=HS(Vs()-1,7);continue;case 47:switch(Rr()){case 42:case 47:Ko(GS(VS(Kt(),Vs()),t,n,u),u);break;default:$+="/"}break;case 123*S:l[c++]=on($)*x;case 125*S:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+d:x==-1&&($=B($,/\f/g,"")),v>0&&on($)-f&&Ko(v>32?mh($+";",r,n,f-1,u):mh(B($," ","")+";",r,n,f-2,u),u);break;case 59:$+=";";default:if(Ko(E=hh($,t,n,c,d,o,l,p,y=[],j=[],f,i),i),m===123)if(d===0)Ws($,t,E,E,y,i,f,l,j);else switch(h===99&&Ee($,3)===110?100:h){case 100:case 108:case 109:case 115:Ws(e,E,E,r&&Ko(hh(e,E,E,0,0,o,l,p,o,y=[],f,j),j),o,j,f,l,r?y:j);break;default:Ws($,E,E,E,[""],j,0,l,j)}}c=d=v=0,S=x=1,p=$="",f=s;break;case 58:f=1+on($),v=g;default:if(S<1){if(m==123)--S;else if(m==125&&S++==0&&MS()==125)continue}switch($+=df(m),m*S){case 38:x=d>0?1:($+="\f",-1);break;case 44:l[c++]=(on($)-1)*x,x=1;break;case 64:Rr()===45&&($+=gu(Kt())),h=Rr(),d=f=on(p=$+=WS(Vs())),m++;break;case 45:g===45&&on($)==2&&(S=0)}}return i}function hh(e,t,n,r,o,i,s,l,u,c,d,f){for(var h=o-1,v=o===0?i:[""],g=Wv(v),S=0,b=0,x=0;S<r;++S)for(var m=0,p=yo(e,h+1,h=Hv(b=s[S])),y=e;m<g;++m)(y=Vv(b>0?v[m]+" "+p:B(p,/&\f/g,v[m])))&&(u[x++]=y);return wl(e,t,n,o===0?xl:l,u,c,d,f)}function GS(e,t,n,r){return wl(e,t,n,Uv,df(DS()),yo(e,2,-2),0,r)}function mh(e,t,n,r,o){return wl(e,t,n,cf,yo(e,0,r),yo(e,r+1,-1),r,o)}function Gv(e,t,n){switch(OS(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+fi+e+ae+e+e;case 5936:switch(Ee(e,t+11)){case 114:return X+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+ae+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+ae+e+e;case 6165:return X+e+ae+"flex-"+e+e;case 5187:return X+e+B(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return X+e+ae+"flex-item-"+B(e,/flex-|-self/g,"")+(gn(e,/flex-|baseline/)?"":ae+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return X+e+ae+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+ae+B(e,"shrink","negative")+e;case 5292:return X+e+ae+B(e,"basis","preferred-size")+e;case 6060:return X+"box-"+B(e,"-grow","")+X+e+ae+B(e,"grow","positive")+e;case 4554:return X+B(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!gn(e,/flex-|baseline/))return ae+"grid-column-align"+yo(e,t)+e;break;case 2592:case 3360:return ae+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,gn(r.props,/grid-\w+-end/)})?~Hs(e+(n=n[t].value),"span",0)?e:ae+B(e,"-start","")+e+ae+"grid-row-span:"+(~Hs(n,"span",0)?gn(n,/\d+/):+gn(n,/\d+/)-+gn(e,/\d+/))+";":ae+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gn(r.props,/grid-\w+-start/)})?e:ae+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+fi+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hs(e,"stretch",0)?Gv(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,u,c){return ae+o+":"+i+c+(s?ae+o+"-span:"+(l?u:+u-+i)+c:"")+e});case 4949:if(Ee(e,t+6)===121)return B(e,":",":"+X)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(Ee(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+ae+"$2box$3")+e;case 100:return B(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Ia(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function JS(e,t,n,r){switch(e.type){case AS:if(e.children.length)break;case LS:case cf:return e.return=e.return||e.value;case Uv:return"";case Bv:return e.return=e.value+"{"+Ia(e.children,r)+"}";case xl:if(!on(e.value=e.props.join(",")))return""}return on(n=Ia(e.children,r))?e.return=e.value+"{"+n+"}":""}function KS(e){var t=Wv(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function QS(e){return function(t){t.root||(t=t.return)&&e(t)}}function XS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case cf:e.return=Gv(e.value,e.length,n);return;case Bv:return Ia([An(e,{value:B(e.value,"@","@"+X)})],r);case xl:if(e.length)return zS(n=e.props,function(o){switch(gn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Br(An(e,{props:[B(o,/:(read-\w+)/,":"+fi+"$1")]})),Br(An(e,{props:[o]})),Ac(e,{props:ph(n,r)});break;case"::placeholder":Br(An(e,{props:[B(o,/:(plac\w+)/,":"+X+"input-$1")]})),Br(An(e,{props:[B(o,/:(plac\w+)/,":"+fi+"$1")]})),Br(An(e,{props:[B(o,/:(plac\w+)/,ae+"input-$1")]})),Br(An(e,{props:[o]})),Ac(e,{props:ph(n,r)});break}return""})}}var YS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lt={},bo=typeof process<"u"&&lt!==void 0&&(lt.REACT_APP_SC_ATTR||lt.SC_ATTR)||"data-styled",Jv="active",Kv="data-styled-version",Sl="6.1.13",ff=`/*!sc*/
`,La=typeof window<"u"&&"HTMLElement"in window,ZS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==""?lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.SC_DISABLE_SPEEDY!==void 0&&lt.SC_DISABLE_SPEEDY!==""&&lt.SC_DISABLE_SPEEDY!=="false"&&lt.SC_DISABLE_SPEEDY),ej={},jl=Object.freeze([]),So=Object.freeze({});function Qv(e,t,n){return n===void 0&&(n=So),e.theme!==n.theme&&e.theme||t||n.theme}var Xv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nj=/(^-|-$)/g;function gh(e){return e.replace(tj,"-").replace(nj,"")}var rj=/(a)(d)/gi,bs=52,vh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dc(e){var t,n="";for(t=Math.abs(e);t>bs;t=t/bs|0)n=vh(t%bs)+n;return(vh(t%bs)+n).replace(rj,"$1-$2")}var vu,Yv=5381,ro=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zv=function(e){return ro(Yv,e)};function pf(e){return Dc(Zv(e)>>>0)}function oj(e){return e.displayName||e.name||"Component"}function xu(e){return typeof e=="string"&&!0}var ex=typeof Symbol=="function"&&Symbol.for,tx=ex?Symbol.for("react.memo"):60115,ij=ex?Symbol.for("react.forward_ref"):60112,sj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lj=((vu={})[ij]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vu[tx]=nx,vu);function xh(e){return("type"in(t=e)&&t.type.$$typeof)===tx?nx:"$$typeof"in e?lj[e.$$typeof]:sj;var t}var uj=Object.defineProperty,cj=Object.getOwnPropertyNames,yh=Object.getOwnPropertySymbols,dj=Object.getOwnPropertyDescriptor,fj=Object.getPrototypeOf,wh=Object.prototype;function rx(e,t,n){if(typeof t!="string"){if(wh){var r=fj(t);r&&r!==wh&&rx(e,r,n)}var o=cj(t);yh&&(o=o.concat(yh(t)));for(var i=xh(e),s=xh(t),l=0;l<o.length;++l){var u=o[l];if(!(u in aj||n&&n[u]||s&&u in s||i&&u in i)){var c=dj(t,u);try{uj(e,u,c)}catch{}}}}return e}function jo(e){return typeof e=="function"}function hf(e){return typeof e=="object"&&"styledComponentId"in e}function jr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Aa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Mc(e,t,n){if(n===void 0&&(n=!1),!n&&!Oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Mc(e[r],t[r]);else if(Oi(t))for(var r in t)e[r]=Mc(e[r],t[r]);return e}function mf(e,t){Object.defineProperty(e,"toString",{value:t})}function Ji(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ji(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(ff);return n},e}(),qs=new Map,Oa=new Map,Gs=1,Ss=function(e){if(qs.has(e))return qs.get(e);for(;Oa.has(Gs);)Gs++;var t=Gs++;return qs.set(e,t),Oa.set(t,e),t},hj=function(e,t){Gs=t+1,qs.set(e,t),Oa.set(t,e)},mj="style[".concat(bo,"][").concat(Kv,'="').concat(Sl,'"]'),gj=new RegExp("^".concat(bo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vj=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},xj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ff),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var u=l.match(gj);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(hj(d,c),vj(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},bh=function(e){for(var t=document.querySelectorAll(mj),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(bo)!==Jv&&(xj(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function yj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ox=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(bo,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(bo,Jv),r.setAttribute(Kv,Sl);var s=yj();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},wj=function(){function e(t){this.element=ox(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Ji(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bj=function(){function e(t){this.element=ox(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Sj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Sh=La,jj={isServer:!La,useCSSOMInjection:!ZS},za=function(){function e(t,n,r){t===void 0&&(t=So),n===void 0&&(n={});var o=this;this.options=De(De({},jj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&La&&Sh&&(Sh=!1,bh(this)),mf(this,function(){return function(i){for(var s=i.getTag(),l=s.length,u="",c=function(f){var h=function(x){return Oa.get(x)}(f);if(h===void 0)return"continue";var v=i.names.get(h),g=s.getGroup(f);if(v===void 0||!v.size||g.length===0)return"continue";var S="".concat(bo,".g").concat(f,'[id="').concat(h,'"]'),b="";v!==void 0&&v.forEach(function(x){x.length>0&&(b+="".concat(x,","))}),u+="".concat(g).concat(S,'{content:"').concat(b,'"}').concat(ff)},d=0;d<l;d++)c(d);return u}(o)})}return e.registerId=function(t){return Ss(t)},e.prototype.rehydrate=function(){!this.server&&La&&bh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(De(De({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Sj(o):r?new wj(o):new bj(o)}(this.options),new pj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ss(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ss(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ss(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kj=/&/g,Ej=/^\s*\/\/.*$/gm;function ix(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ix(n.children,t)),n})}function Cj(e){var t,n,r,o=So,i=o.options,s=i===void 0?So:i,l=o.plugins,u=l===void 0?jl:l,c=function(h,v,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},d=u.slice();d.push(function(h){h.type===xl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(kj,n).replace(r,c))}),s.prefix&&d.push(XS),d.push(JS);var f=function(h,v,g,S){v===void 0&&(v=""),g===void 0&&(g=""),S===void 0&&(S="&"),t=S,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(Ej,""),x=qS(g||v?"".concat(g," ").concat(v," { ").concat(b," }"):b);s.namespace&&(x=ix(x,s.namespace));var m=[];return Ia(x,KS(d.concat(QS(function(p){return m.push(p)})))),m};return f.hash=u.length?u.reduce(function(h,v){return v.name||Ji(15),ro(h,v.name)},Yv).toString():"",f}var $j=new za,Fc=Cj(),sx=Re.createContext({shouldForwardProp:void 0,styleSheet:$j,stylis:Fc});sx.Consumer;Re.createContext(void 0);function Uc(){return w.useContext(sx)}var ax=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Fc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,mf(this,function(){throw Ji(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Fc),this.name+t.hash},e}(),_j=function(e){return e>="A"&&e<="Z"};function jh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_j(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lx=function(e){return e==null||e===!1||e===""},ux=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!lx(i)&&(Array.isArray(i)&&i.isCss||jo(i)?r.push("".concat(jh(o),":"),i,";"):Oi(i)?r.push.apply(r,xo(xo(["".concat(o," {")],ux(i),!1),["}"],!1)):r.push("".concat(jh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in YS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function nr(e,t,n,r){if(lx(e))return[];if(hf(e))return[".".concat(e.styledComponentId)];if(jo(e)){if(!jo(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return nr(o,t,n,r)}var i;return e instanceof ax?n?(e.inject(n,r),[e.getName(r)]):[e]:Oi(e)?ux(e):Array.isArray(e)?Array.prototype.concat.apply(jl,e.map(function(s){return nr(s,t,n,r)})):[e.toString()]}function cx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jo(n)&&!hf(n))return!1}return!0}var Rj=Zv(Sl),Pj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cx(t),this.componentId=n,this.baseHash=ro(Rj,n),this.baseStyle=r,za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=jr(o,this.staticRulesId);else{var i=Aa(nr(this.rules,t,n,r)),s=Dc(ro(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=jr(o,s),this.staticRulesId=s}else{for(var u=ro(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var h=Aa(nr(f,t,n,r));u=ro(u,h+d),c+=h}}if(c){var v=Dc(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),o=jr(o,v)}}return o},e}(),gf=Re.createContext(void 0);gf.Consumer;var yu={};function Nj(e,t,n){var r=hf(e),o=e,i=!xu(e),s=t.attrs,l=s===void 0?jl:s,u=t.componentId,c=u===void 0?function(y,j){var E=typeof y!="string"?"sc":gh(y);yu[E]=(yu[E]||0)+1;var $="".concat(E,"-").concat(pf(Sl+E+yu[E]));return j?"".concat(j,"-").concat($):$}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(y){return xu(y)?"styled.".concat(y):"Styled(".concat(oj(y),")")}(e):d,h=t.displayName&&t.componentId?"".concat(gh(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(y,j){return S(y,j)&&b(y,j)}}else g=S}var x=new Pj(n,h,r?o.componentStyle:void 0);function m(y,j){return function(E,$,C){var O=E.attrs,z=E.componentStyle,ee=E.defaultProps,be=E.foldedComponentIds,T=E.styledComponentId,xe=E.target,cr=Re.useContext(gf),fn=Uc(),Ot=E.shouldForwardProp||fn.shouldForwardProp,I=Qv($,cr,ee)||So,D=function(Pn,it,pn){for(var Ao,fr=De(De({},it),{className:void 0,theme:pn}),Bl=0;Bl<Pn.length;Bl+=1){var rs=jo(Ao=Pn[Bl])?Ao(fr):Ao;for(var Nn in rs)fr[Nn]=Nn==="className"?jr(fr[Nn],rs[Nn]):Nn==="style"?De(De({},fr[Nn]),rs[Nn]):rs[Nn]}return it.className&&(fr.className=jr(fr.className,it.className)),fr}(O,$,I),M=D.as||xe,te={};for(var ne in D)D[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&D.theme===I||(ne==="forwardedAs"?te.as=D.forwardedAs:Ot&&!Ot(ne,M)||(te[ne]=D[ne]));var dr=function(Pn,it){var pn=Uc(),Ao=Pn.generateAndInjectStyles(it,pn.styleSheet,pn.stylis);return Ao}(z,D),zt=jr(be,T);return dr&&(zt+=" "+dr),D.className&&(zt+=" "+D.className),te[xu(M)&&!Xv.has(M)?"class":"className"]=zt,te.ref=C,w.createElement(M,te)}(p,y,j)}m.displayName=f;var p=Re.forwardRef(m);return p.attrs=v,p.componentStyle=x,p.displayName=f,p.shouldForwardProp=g,p.foldedComponentIds=r?jr(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(j){for(var E=[],$=1;$<arguments.length;$++)E[$-1]=arguments[$];for(var C=0,O=E;C<O.length;C++)Mc(j,O[C],!0);return j}({},o.defaultProps,y):y}}),mf(p,function(){return".".concat(p.styledComponentId)}),i&&rx(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function kh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Eh=function(e){return Object.assign(e,{isCss:!0})};function vf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jo(e)||Oi(e))return Eh(nr(kh(jl,xo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?nr(r):Eh(nr(kh(r,t)))}function Bc(e,t,n){if(n===void 0&&(n=So),!t)throw Ji(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,vf.apply(void 0,xo([o],i,!1)))};return r.attrs=function(o){return Bc(e,t,De(De({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Bc(e,t,De(De({},n),o))},r}var dx=function(e){return Bc(Nj,e)},k=dx;Xv.forEach(function(e){k[e]=dx(e)});var Tj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=cx(t),za.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Aa(nr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&za.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Ij(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=vf.apply(void 0,xo([e],t,!1)),o="sc-global-".concat(pf(JSON.stringify(r))),i=new Tj(r,o),s=function(u){var c=Uc(),d=Re.useContext(gf),f=Re.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),Re.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,h){if(i.isStatic)i.renderStyles(u,ej,d,h);else{var v=De(De({},c),{theme:Qv(c,f,s.defaultProps)});i.renderStyles(u,v,d,h)}}return Re.memo(s)}function kl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Aa(vf.apply(void 0,xo([e],t,!1))),o=pf(r);return new ax(o,r)}var fx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ch=Re.createContext&&Re.createContext(fx),Lj=["attr","size","title"];function Aj(e,t){if(e==null)return{};var n=Oj(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function $h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ma(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$h(Object(n),!0).forEach(function(r){zj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zj(e,t,n){return t=Dj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dj(e){var t=Mj(e,"string");return typeof t=="symbol"?t:t+""}function Mj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function px(e){return e&&e.map((t,n)=>Re.createElement(t.tag,Ma({key:n},t.attr),px(t.child)))}function qe(e){return t=>Re.createElement(Fj,Da({attr:Ma({},e.attr)},t),px(e.child))}function Fj(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=Aj(e,Lj),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Re.createElement("svg",Da({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Ma(Ma({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Re.createElement("title",null,i),e.children)};return Ch!==void 0?Re.createElement(Ch.Consumer,null,n=>t(n)):t(fx)}function Uj(e){return qe({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Bj(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Hj(e){return qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Vj(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Wj(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(e)}function hx(){return a.jsxs(qj,{children:[a.jsxs(Gj,{children:[a.jsxs(Jj,{children:[a.jsx("h3",{children:"Contáctanos"}),a.jsxs("p",{children:[a.jsx(Wj,{})," +123 456 789"]}),a.jsxs("p",{children:[a.jsx(Vj,{})," info@ministerio.com"]})]}),a.jsxs(Kj,{children:[a.jsx("h3",{children:"Dirección"}),a.jsx("p",{children:"República de Líbano entre Crisóstomo Álvarez y Juan Bautista Alberdi"}),a.jsx("p",{children:"Monteros, Tucumán, Argentina"})]}),a.jsxs(Qj,{children:[a.jsx("h3",{children:"Síguenos"}),a.jsxs(Xj,{children:[a.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Uj,{})}),a.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Bj,{})}),a.jsx("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Hj,{})})]})]})]}),a.jsx(Yj,{children:a.jsx("iframe",{title:"Ubicación",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4510185355699!2d-65.5108781075702!3d-27.162454067142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942235328d23ecd7%3A0xfd18499085cb2d3!2sCentro%20Cristiano%20R%C3%ADos%20de%20Vida!5e0!3m2!1ses-419!2sar!4v1734071122347!5m2!1ses-419!2sar",width:"100%",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),a.jsx(Zj,{children:a.jsx("p",{children:"© 2024 Ministerio Ríos de Vida. Todos los derechos reservados."})})]})}const qj=k.footer`
  background: #0a285c;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`,Gj=k.div`
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
`,Jj=k.div`
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
`,Kj=k.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`,Qj=k.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`,Xj=k.div`
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
`,Yj=k.div`
  margin: 20px 0;
  iframe {
    border-radius: 10px;
  }
`,Zj=k.div`
  padding: 10px;
  background: #1e3c72;

  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
  }
`,ek=()=>{const[e,t]=w.useState(!1),n=w.useRef(null);return w.useEffect(()=>{const r=()=>{if(n.current){const o=n.current.getBoundingClientRect().top,i=window.innerHeight;o<i-100&&t(!0)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),a.jsx(rk,{ref:n,children:a.jsxs(xf,{isVisible:e,children:[a.jsx(ok,{isVisible:e,children:"Bienvenidos a Casa"}),a.jsx(ik,{isVisible:e,children:"Nos complace recibirte en nuestro Centro Cristiano. Estamos aquí para ayudarte a crecer en tu fe y experimentar una comunidad amorosa y acogedora."})]})})},tk=kl`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,nk=kl`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,rk=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
`,xf=k.div`
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
`,ok=k.h1`
  font-size: 4rem;
  color: #0077b6;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?tk:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3);

  ${xf}:hover & {
    color: white;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`,ik=k.p`
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 600px;
  margin-top: 1rem;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?nk:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;

  ${xf}:hover & {
    color: #00a0f6;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`,sk=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1);w.useEffect(()=>{const s=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=()=>r(!n),i=s=>{const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})};return a.jsxs(ak,{scrolled:e,children:[a.jsx(lk,{scrolled:e,children:a.jsx("a",{href:"#home",children:"Ríos de Vida"})}),a.jsxs(uk,{onClick:o,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs(ck,{menuOpen:n,children:[a.jsx(js,{as:"button",onClick:()=>i("grupoDeVida"),scrolled:e,children:"Grupos"}),a.jsx(js,{as:"button",onClick:()=>i("servicios"),scrolled:e,children:"Servicios"}),a.jsx(js,{children:a.jsx(G,{to:"/jovenes",children:"Jovenes"})}),a.jsx(js,{children:a.jsx(G,{to:"/notas",children:"Notas"})}),a.jsx(dk,{children:a.jsx(G,{to:"/login",children:"Login"})})]})]})},ak=k.header`
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
`,lk=k.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${({scrolled:e})=>e?"#333333":"#ffffff"};
  }
`,uk=k.div`
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
`,ck=k.nav`
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
`,js=k.button`
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
`,dk=k.div`
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
`,fk=kl`
  0% { transform: translateX(-150%); }
  50% { transform: translateX(150%); }
  100% { transform: translateX(-150%); }
`,pk=k.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #2a4c9c 0%, #1D3C5A 100%);
  overflow: hidden;
  z-index: -1;
`,hk=k.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  width: ${({size:e})=>e||"20px"};
  height: ${({size:e})=>e||"20px"};
  border-radius: 50%;
  animation: ${fk} ${({duration:e})=>e||"15s"} ease-in-out infinite;
  bottom: ${({bottom:e})=>e||"10%"};
  left: ${({left:e})=>e||"0%"};
  opacity: ${({opacity:e})=>e||.8};
`,mx=()=>{const e=Array.from({length:50},(t,n)=>a.jsx(hk,{bottom:`${Math.random()*100}%`,left:`${Math.random()*100}%`,size:`${Math.random()*25+10}px`,duration:`${Math.random()*5+5}s`,opacity:Math.random()*.5+.3},n));return a.jsx(pk,{children:e})};var Js={},Hc;Object.defineProperty(Js,"__esModule",{value:!0});var Qo=a,Zt=w,Ht=function(){return Ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ht.apply(this,arguments)};function mk(e,t){var n,r;switch(t.type){case"TYPE":return Ht(Ht({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return Ht(Ht({},e),{speed:t.payload});case"DELETE":return Ht(Ht({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return Ht(Ht({},e),{count:e.count+1});default:return e}}var _h=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.onLoopDone,h=e.onType,v=e.onDelete,g=e.onDelay,S=Zt.useReducer(mk,{speed:s,text:"",count:0}),b=S[0],x=b.speed,m=b.text,p=b.count,y=S[1],j=Zt.useRef(0),E=Zt.useRef(!1),$=Zt.useRef(!1),C=Zt.useRef(!1),O=Zt.useRef(!1),z=Zt.useCallback(function(){var ee=p%n.length,be=n[ee];$.current?(y({type:"DELETE",payload:be,speed:u}),m===""&&($.current=!1,y({type:"COUNT"}))):(y({type:"TYPE",payload:be,speed:s}),C.current=!0,m===be&&(y({type:"DELAY",payload:d}),C.current=!1,O.current=!0,setTimeout(function(){O.current=!1,$.current=!0},d),o>0&&(j.current+=1,j.current/n.length===o&&(O.current=!1,E.current=!0)))),C.current&&h&&h(j.current),$.current&&v&&v(),O.current&&g&&g()},[p,d,u,o,s,n,m,h,v,g]);return Zt.useEffect(function(){var ee=setTimeout(z,x);return E.current&&clearTimeout(ee),function(){return clearTimeout(ee)}},[z,x]),Zt.useEffect(function(){f&&E.current&&f()},[f]),[m,{isType:C.current,isDelay:O.current,isDelete:$.current,isDone:E.current}]},gk="styles-module_blinkingCursor__yugAC",vk="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Rh=Zt.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,o=r===void 0?"|":r,i=e.cursorColor,s=i===void 0?"inherit":i;return Qo.jsx("span",Ht({style:{color:s},className:"".concat(gk," ").concat(n?vk:"")},{children:o}))});Js.Cursor=Rh,Hc=Js.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.cursor,h=f!==void 0&&f,v=e.cursorStyle,g=v===void 0?"|":v,S=e.cursorColor,b=S===void 0?"inherit":S,x=e.cursorBlinking,m=x===void 0||x,p=e.onLoopDone,y=e.onType,j=e.onDelay,E=e.onDelete,$=_h({words:n,loop:o,typeSpeed:s,deleteSpeed:u,delaySpeed:d,onLoopDone:p,onType:y,onDelay:j,onDelete:E})[0];return Qo.jsxs(Qo.Fragment,{children:[Qo.jsx("span",{children:$}),h&&Qo.jsx(Rh,{cursorStyle:g,cursorColor:b,cursorBlinking:m})]})},Js.useTypewriter=_h;const xk="https://Bravo938.github.io/RiosDeVida.pages/assets/iglefondo-BN1oqW4x.mp4",yk=`
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
`,wk=Ij`${yk}`,bk=()=>{const[e,t]=w.useState(!1),n=()=>t(!0);return a.jsxs(a.Fragment,{children:[a.jsx(wk,{}),a.jsxs(Sk,{children:[a.jsx(jk,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:n,style:{opacity:e?1:0},children:a.jsx("source",{src:xk,type:"video/mp4"})}),a.jsx(kk,{style:{display:e?"none":"block"}}),a.jsxs(Ek,{children:[a.jsx(Ck,{children:a.jsx(Hc,{words:["Centro Cristiano Rios De Vida"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:3e3})}),a.jsx($k,{children:'El Centro Cristiano "Ríos de Vida" tiene la misión de predicar la Palabra de Dios cumpliendo con el mandato de Cristo de llevar su mensaje a todas las naciones.'}),a.jsx(_k,{children:a.jsx(Hc,{words:["Jesús Dijo"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:1e3})}),a.jsx(Rk,{children:"Jesús se puso en pie y alzó la voz, diciendo: Si alguno tiene sed, venga a mí y beba. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. (Juan 7:37-38)"})]})]})]})},Sk=k.div`
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
`,jk=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;//acorte el bot un poco podria de 3600
  object-fit: cover;
  z-index: -1;
  transition: opacity 0.5s ease;
`,kk=k.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`,Ek=k.div`
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
`,Ck=k.h1`
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
`,$k=k.p`
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
`,_k=k.h2`
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
`,Rk=k.p`
  font-size: 1.25rem;
  color: #ffffff;
  animation: slideInFromLeft 0.8s ease forwards;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;var gx={},El={},yf={},wu={},bu={exports:{}},Su,Ph;function Pk(){if(Ph)return Su;Ph=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Su=e,Su}var ju,Nh;function Nk(){if(Nh)return ju;Nh=1;var e=Pk();function t(){}function n(){}return n.resetWarningCache=t,ju=function(){function r(s,l,u,c,d,f){if(f!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},ju}var Th;function Tk(){return Th||(Th=1,bu.exports=Nk()()),bu.exports}var Ih;function Ik(){return Ih||(Ih=1,function(e){(function(t,n){n(e,w,Tk())})(ot,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=g;var o=s(n),i=s(r);function s(m){return m&&m.__esModule?m:{default:m}}var l=Object.assign||function(m){for(var p=1;p<arguments.length;p++){var y=arguments[p];for(var j in y)Object.prototype.hasOwnProperty.call(y,j)&&(m[j]=y[j])}return m};function u(m,p){var y={};for(var j in m)p.indexOf(j)>=0||Object.prototype.hasOwnProperty.call(m,j)&&(y[j]=m[j]);return y}function c(m,p){if(!(m instanceof p))throw new TypeError("Cannot call a class as a function")}var d=function(){function m(p,y){for(var j=0;j<y.length;j++){var E=y[j];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(p,E.key,E)}}return function(p,y,j){return y&&m(p.prototype,y),j&&m(p,j),p}}();function f(m,p){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:m}function h(m,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);m.prototype=Object.create(p&&p.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(m,p):m.__proto__=p)}var v=!1;function g(m){v=m}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){g(!0)}}))}catch{}function S(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return v?m:m.capture}function b(m){if("touches"in m){var p=m.touches[0],y=p.pageX,j=p.pageY;return{x:y,y:j}}var E=m.screenX,$=m.screenY;return{x:E,y:$}}var x=function(m){h(p,m);function p(){var y;c(this,p);for(var j=arguments.length,E=Array(j),$=0;$<j;$++)E[$]=arguments[$];var C=f(this,(y=p.__proto__||Object.getPrototypeOf(p)).call.apply(y,[this].concat(E)));return C._handleSwipeStart=C._handleSwipeStart.bind(C),C._handleSwipeMove=C._handleSwipeMove.bind(C),C._handleSwipeEnd=C._handleSwipeEnd.bind(C),C._onMouseDown=C._onMouseDown.bind(C),C._onMouseMove=C._onMouseMove.bind(C),C._onMouseUp=C._onMouseUp.bind(C),C._setSwiperRef=C._setSwiperRef.bind(C),C}return d(p,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(j){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(j))}},{key:"_onMouseMove",value:function(j){this.mouseDown&&this._handleSwipeMove(j)}},{key:"_onMouseUp",value:function(j){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(j)}},{key:"_handleSwipeStart",value:function(j){var E=b(j),$=E.x,C=E.y;this.moveStart={x:$,y:C},this.props.onSwipeStart(j)}},{key:"_handleSwipeMove",value:function(j){if(this.moveStart){var E=b(j),$=E.x,C=E.y,O=$-this.moveStart.x,z=C-this.moveStart.y;this.moving=!0;var ee=this.props.onSwipeMove({x:O,y:z},j);ee&&j.cancelable&&j.preventDefault(),this.movePosition={deltaX:O,deltaY:z}}}},{key:"_handleSwipeEnd",value:function(j){this.props.onSwipeEnd(j);var E=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-E?this.props.onSwipeLeft(1,j):this.movePosition.deltaX>E&&this.props.onSwipeRight(1,j),this.movePosition.deltaY<-E?this.props.onSwipeUp(1,j):this.movePosition.deltaY>E&&this.props.onSwipeDown(1,j)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(j){this.swiper=j,this.props.innerRef(j)}},{key:"render",value:function(){var j=this.props;j.tagName;var E=j.className,$=j.style,C=j.children;j.allowMouseEvents,j.onSwipeUp,j.onSwipeDown,j.onSwipeLeft,j.onSwipeRight,j.onSwipeStart,j.onSwipeMove,j.onSwipeEnd,j.innerRef,j.tolerance;var O=u(j,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:E,style:$},O),C)}}]),p}(n.Component);x.displayName="ReactSwipe",x.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},x.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=x})}(wu)),wu}(function(e){(function(t,n){n(e,Ik())})(ot,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})(yf);var Ki={},vx={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var l in i)t.call(i,l)&&i[l]&&(s=o(s,l));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(vx);var xx=vx.exports;const Lk=x0(xx);Object.defineProperty(Ki,"__esModule",{value:!0});Ki.default=void 0;var In=Ak(xx);function Ak(e){return e&&e.__esModule?e:{default:e}}function Ok(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var zk={ROOT:function(t){return(0,In.default)(Ok({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,In.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,In.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,In.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,In.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,In.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,In.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,In.default)({dot:!0,selected:t})}};Ki.default=zk;var Qi={},Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.outerWidth=void 0;var Dk=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};Cl.outerWidth=Dk;var Po={};Object.defineProperty(Po,"__esModule",{value:!0});Po.default=void 0;var Mk=function(t,n,r){var o=t===0?t:t+n,i=r==="horizontal"?[o,0,0]:[0,o,0],s="translate3d",l="("+i.join(",")+")";return s+l};Po.default=Mk;var Xi={};Object.defineProperty(Xi,"__esModule",{value:!0});Xi.default=void 0;var Fk=function(){return window};Xi.default=Fk;Object.defineProperty(Qi,"__esModule",{value:!0});Qi.default=void 0;var Mt=Hk(w),pr=$l(Ki),Uk=Cl,Lh=$l(Po),Bk=$l(yf),ks=$l(Xi);function $l(e){return e&&e.__esModule?e:{default:e}}function yx(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return yx=function(){return e},e}function Hk(e){if(e&&e.__esModule)return e;if(e===null||pi(e)!=="object"&&typeof e!="function")return{default:e};var t=yx();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function pi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pi=function(n){return typeof n}:pi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pi(e)}function Vc(){return Vc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vc.apply(this,arguments)}function Vk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wk(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qk(e,t,n){return t&&Wk(e.prototype,t),e}function Gk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Wc(e,t)}function Wc(e,t){return Wc=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Wc(e,t)}function Jk(e){var t=Qk();return function(){var r=Fa(e),o;if(t){var i=Fa(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Kk(this,o)}}function Kk(e,t){return t&&(pi(t)==="object"||typeof t=="function")?t:Fe(e)}function Fe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Fa(e){return Fa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Fa(e)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xk=function(t){return t.hasOwnProperty("key")},wf=function(e){Gk(n,e);var t=Jk(n);function n(r){var o;return Vk(this,n),o=t.call(this,r),Oe(Fe(o),"itemsWrapperRef",void 0),Oe(Fe(o),"itemsListRef",void 0),Oe(Fe(o),"thumbsRef",void 0),Oe(Fe(o),"setItemsWrapperRef",function(i){o.itemsWrapperRef=i}),Oe(Fe(o),"setItemsListRef",function(i){o.itemsListRef=i}),Oe(Fe(o),"setThumbsRef",function(i,s){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[s]=i}),Oe(Fe(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var i=Mt.Children.count(o.props.children),s=o.itemsWrapperRef.clientWidth,l=o.props.thumbWidth?o.props.thumbWidth:(0,Uk.outerWidth)(o.thumbsRef[0]),u=Math.floor(s/l),c=u<i,d=c?i-u:0;o.setState(function(f,h){return{itemSize:l,visibleItems:u,firstItem:c?o.getFirstItem(h.selectedItem):0,lastPosition:d,showArrows:c}})}}),Oe(Fe(o),"handleClickItem",function(i,s,l){if(!Xk(l)||l.key==="Enter"){var u=o.props.onSelectItem;typeof u=="function"&&u(i,s)}}),Oe(Fe(o),"onSwipeStart",function(){o.setState({swiping:!0})}),Oe(Fe(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),Oe(Fe(o),"onSwipeMove",function(i){var s=i.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var l=0,u=Mt.Children.count(o.props.children),c=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(u-o.state.visibleItems,0),f=-d*100/o.state.visibleItems;c===l&&s>0&&(s=0),c===f&&s<0&&(s=0);var h=o.itemsWrapperRef.clientWidth,v=c+100/(h/s);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(g){o.itemsListRef.style[g]=(0,Lh.default)(v,"%",o.props.axis)}),!0}),Oe(Fe(o),"slideRight",function(i){o.moveTo(o.state.firstItem-(typeof i=="number"?i:1))}),Oe(Fe(o),"slideLeft",function(i){o.moveTo(o.state.firstItem+(typeof i=="number"?i:1))}),Oe(Fe(o),"moveTo",function(i){i=i<0?0:i,i=i>=o.state.lastPosition?o.state.lastPosition:i,o.setState({firstItem:i})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return qk(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,ks.default)().addEventListener("resize",this.updateSizes),(0,ks.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,ks.default)().removeEventListener("resize",this.updateSizes),(0,ks.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var i=o;return o>=this.state.lastPosition&&(i=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),o<this.state.firstItem&&(i=o),i}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(i,s){var l=pr.default.ITEM(!1,s===o.state.selectedItem),u={key:s,ref:function(d){return o.setThumbsRef(d,s)},className:l,onClick:o.handleClickItem.bind(o,s,o.props.children[s]),onKeyDown:o.handleClickItem.bind(o,s,o.props.children[s]),"aria-label":"".concat(o.props.labels.item," ").concat(s+1),style:{width:o.props.thumbWidth}};return Mt.default.createElement("li",Vc({},u,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var i=Mt.Children.count(this.props.children)>1,s=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u={},c=-this.state.firstItem*(this.state.itemSize||0),d=(0,Lh.default)(c,"px",this.props.axis),f=this.props.transitionTime+"ms";return u={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f},Mt.default.createElement("div",{className:pr.default.CAROUSEL(!1)},Mt.default.createElement("div",{className:pr.default.WRAPPER(!1),ref:this.setItemsWrapperRef},Mt.default.createElement("button",{type:"button",className:pr.default.ARROW_PREV(!s),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),i?Mt.default.createElement(Bk.default,{tagName:"ul",className:pr.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:u,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):Mt.default.createElement("ul",{className:pr.default.SLIDER(!1,this.state.swiping),ref:function(v){return o.setItemsListRef(v)},style:u},this.renderItems()),Mt.default.createElement("button",{type:"button",className:pr.default.ARROW_NEXT(!l),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(Mt.Component);Qi.default=wf;Oe(wf,"displayName","Thumbs");Oe(wf,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var _l={};Object.defineProperty(_l,"__esModule",{value:!0});_l.default=void 0;var Yk=function(){return document};_l.default=Yk;var ht={};Object.defineProperty(ht,"__esModule",{value:!0});ht.setPosition=ht.getPosition=ht.isKeyboardEvent=ht.defaultStatusFormatter=ht.noop=void 0;var Zk=w,eE=tE(Po);function tE(e){return e&&e.__esModule?e:{default:e}}var nE=function(){};ht.noop=nE;var rE=function(t,n){return"".concat(t," of ").concat(n)};ht.defaultStatusFormatter=rE;var oE=function(t){return t?t.hasOwnProperty("key"):!1};ht.isKeyboardEvent=oE;var iE=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=Zk.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,i=r-1;return t&&(t!==i||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===i&&(o+=100-n.centerSlidePercentage),o}return-t*100};ht.getPosition=iE;var sE=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,eE.default)(t,"%",n)}),r};ht.setPosition=sE;var an={};Object.defineProperty(an,"__esModule",{value:!0});an.fadeAnimationHandler=an.slideStopSwipingHandler=an.slideSwipeAnimationHandler=an.slideAnimationHandler=void 0;var wx=w,aE=lE(Po),ln=ht;function lE(e){return e&&e.__esModule?e:{default:e}}function Ah(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function gr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ah(Object(n),!0).forEach(function(r){uE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ah(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cE=function(t,n){var r={},o=n.selectedItem,i=o,s=wx.Children.count(t.children)-1,l=t.infiniteLoop&&(o<0||o>s);if(l)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,ln.setPosition)(-(s+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,ln.setPosition)(-(s+2)*100,t.axis):i>s&&(r.itemListStyle=(0,ln.setPosition)(0,t.axis)),r;var u=(0,ln.getPosition)(o,t),c=(0,aE.default)(u,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:c,msTransform:c,OTransform:c,transform:c},n.swiping||(r.itemListStyle=gr(gr({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};an.slideAnimationHandler=cE;var dE=function(t,n,r,o){var i={},s=n.axis==="horizontal",l=wx.Children.count(n.children),u=0,c=(0,ln.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,ln.getPosition)(l-1,n)-100:(0,ln.getPosition)(l-1,n),f=s?t.x:t.y,h=f;c===u&&f>0&&(h=0),c===d&&f<0&&(h=0);var v=c+100/(r.itemSize/h),g=Math.abs(f)>n.swipeScrollTolerance;return n.infiniteLoop&&g&&(r.selectedItem===0&&v>-100?v-=l*100:r.selectedItem===l-1&&v<-l*100&&(v+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||g||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),i.itemListStyle=(0,ln.setPosition)(v,n.axis)),g&&!r.cancelClick&&o({cancelClick:!0}),i};an.slideSwipeAnimationHandler=dE;var fE=function(t,n){var r=(0,ln.getPosition)(n.selectedItem,t),o=(0,ln.setPosition)(r,t.axis);return{itemListStyle:o}};an.slideStopSwipingHandler=fE;var pE=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(i=gr(gr({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:gr(gr({},i),{},{opacity:1,position:"relative"}),prevStyle:gr({},i)}};an.fadeAnimationHandler=pE;Object.defineProperty(El,"__esModule",{value:!0});El.default=void 0;var Y=gE(w),hE=Yi(yf),xn=Yi(Ki),mE=Yi(Qi),Es=Yi(_l),Cs=Yi(Xi),Xo=ht,Ua=an;function Yi(e){return e&&e.__esModule?e:{default:e}}function bx(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return bx=function(){return e},e}function gE(e){if(e&&e.__esModule)return e;if(e===null||hi(e)!=="object"&&typeof e!="function")return{default:e};var t=bx();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function hi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hi=function(n){return typeof n}:hi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hi(e)}function qc(){return qc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qc.apply(this,arguments)}function Oh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oh(Object(n),!0).forEach(function(r){H(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xE(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yE(e,t,n){return t&&xE(e.prototype,t),e}function wE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Gc(e,t)}function Gc(e,t){return Gc=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Gc(e,t)}function bE(e){var t=jE();return function(){var r=Ba(e),o;if(t){var i=Ba(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return SE(this,o)}}function SE(e,t){return t&&(hi(t)==="object"||typeof t=="function")?t:W(e)}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ba(e){return Ba=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ba(e)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bf=function(e){wE(n,e);var t=bE(n);function n(r){var o;vE(this,n),o=t.call(this,r),H(W(o),"thumbsRef",void 0),H(W(o),"carouselWrapperRef",void 0),H(W(o),"listRef",void 0),H(W(o),"itemsRef",void 0),H(W(o),"timer",void 0),H(W(o),"animationHandler",void 0),H(W(o),"setThumbsRef",function(s){o.thumbsRef=s}),H(W(o),"setCarouselWrapperRef",function(s){o.carouselWrapperRef=s}),H(W(o),"setListRef",function(s){o.listRef=s}),H(W(o),"setItemsRef",function(s,l){o.itemsRef||(o.itemsRef=[]),o.itemsRef[l]=s}),H(W(o),"autoPlay",function(){Y.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),H(W(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),H(W(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),H(W(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),H(W(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),H(W(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,Es.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,Es.default)().activeElement)):!1}),H(W(o),"navigateWithKeyboard",function(s){if(o.isFocusWithinTheCarousel()){var l=o.props.axis,u=l==="horizontal",c={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=u?c.ArrowRight:c.ArrowDown,f=u?c.ArrowLeft:c.ArrowUp;d===s.keyCode?o.increment():f===s.keyCode&&o.decrement()}}),H(W(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var s=o.props.axis==="horizontal",l=o.itemsRef[0];if(l){var u=s?l.clientWidth:l.clientHeight;o.setState({itemSize:u}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),H(W(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),H(W(o),"handleClickItem",function(s,l){if(Y.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(s,l),s!==o.state.selectedItem&&o.setState({selectedItem:s})}}),H(W(o),"handleOnChange",function(s,l){Y.Children.count(o.props.children)<=1||o.props.onChange(s,l)}),H(W(o),"handleClickThumb",function(s,l){o.props.onClickThumb(s,l),o.moveTo(s)}),H(W(o),"onSwipeStart",function(s){o.setState({swiping:!0}),o.props.onSwipeStart(s)}),H(W(o),"onSwipeEnd",function(s){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(s),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),H(W(o),"onSwipeMove",function(s,l){o.props.onSwipeMove(l);var u=o.props.swipeAnimationHandler(s,o.props,o.state,o.setState.bind(W(o)));return o.setState(Ft({},u)),!!Object.keys(u).length}),H(W(o),"decrement",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof s=="number"?s:1))}),H(W(o),"increment",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof s=="number"?s:1))}),H(W(o),"moveTo",function(s){if(typeof s=="number"){var l=Y.Children.count(o.props.children)-1;s<0&&(s=o.props.infiniteLoop?l:0),s>l&&(s=o.props.infiniteLoop?0:l),o.selectItem({selectedItem:s}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),H(W(o),"onClickNext",function(){o.increment(1)}),H(W(o),"onClickPrev",function(){o.decrement(1)}),H(W(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),H(W(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),H(W(o),"changeItem",function(s){return function(l){(!(0,Xo.isKeyboardEvent)(l)||l.key==="Enter")&&o.moveTo(s)}}),H(W(o),"selectItem",function(s){o.setState(Ft({previousItem:o.state.selectedItem},s),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(s.selectedItem,Y.Children.toArray(o.props.children)[s.selectedItem])}),H(W(o),"getInitialImage",function(){var s=o.props.selectedItem,l=o.itemsRef&&o.itemsRef[s],u=l&&l.getElementsByTagName("img")||[];return u[0]}),H(W(o),"getVariableItemHeight",function(s){var l=o.itemsRef&&o.itemsRef[s];if(o.state.hasMount&&l&&l.children.length){var u=l.children[0].getElementsByTagName("img")||[];if(u.length>0){var c=u[0];if(!c.complete){var d=function v(){o.forceUpdate(),c.removeEventListener("load",v)};c.addEventListener("load",d)}}var f=u[0]||l.children[0],h=f.clientHeight;return h>0?h:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Ua.fadeAnimationHandler||Ua.slideAnimationHandler,o.state=Ft(Ft({},i),o.animationHandler(r,i)),o}return yE(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,i){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(Ft({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&Y.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=o.getInitialImage();i&&!i.complete?i.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,Cs.default)().addEventListener("resize",this.updateSizes),(0,Cs.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,Es.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,Cs.default)().removeEventListener("resize",this.updateSizes),(0,Cs.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,Es.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var i=this;return this.props.children?Y.Children.map(this.props.children,function(s,l){var u=l===i.state.selectedItem,c=l===i.state.previousItem,d=u&&i.state.selectedStyle||c&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(d=Ft(Ft({},d),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(d=Ft(Ft({},d),{},{pointerEvents:"none"}));var f={ref:function(v){return i.setItemsRef(v,l)},key:"itemKey"+l+(o?"clone":""),className:xn.default.ITEM(!0,l===i.state.selectedItem,l===i.state.previousItem),onClick:i.handleClickItem.bind(i,l,s),style:d};return Y.default.createElement("li",f,i.props.renderItem(s,{isSelected:l===i.state.selectedItem,isPrevious:l===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,i=this.props,s=i.showIndicators,l=i.labels,u=i.renderIndicator,c=i.children;return s?Y.default.createElement("ul",{className:"control-dots"},Y.Children.map(c,function(d,f){return u&&u(o.changeItem(f),f===o.state.selectedItem,f,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?Y.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,Y.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||Y.Children.count(this.props.children)===0?null:Y.default.createElement(mE.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||Y.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&Y.Children.count(this.props.children)>1,s=this.props.axis==="horizontal",l=this.props.showArrows&&Y.Children.count(this.props.children)>1,u=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,c=l&&(this.state.selectedItem<Y.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),f=d.shift(),h=d.pop(),v={className:xn.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},g={};if(s){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var S=this.getVariableItemHeight(this.state.selectedItem);g.height=S||"auto"}}else v.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,v.style=Ft(Ft({},v.style),{},{height:this.state.itemSize}),g.height=this.state.itemSize;return Y.default.createElement("div",{"aria-label":this.props.ariaLabel,className:xn.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},Y.default.createElement("div",{className:xn.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,u,this.props.labels.leftArrow),Y.default.createElement("div",{className:xn.default.WRAPPER(!0,this.props.axis),style:g},i?Y.default.createElement(hE.default,qc({tagName:"ul",innerRef:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f):Y.default.createElement("ul",{className:xn.default.SLIDER(!0,this.state.swiping),ref:function(x){return o.setListRef(x)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f)),this.props.renderArrowNext(this.onClickNext,c,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(Y.default.Component);El.default=bf;H(bf,"displayName","Carousel");H(bf,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Xo.noop,onClickThumb:Xo.noop,onChange:Xo.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return Y.default.createElement("button",{type:"button","aria-label":r,className:xn.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return Y.default.createElement("button",{type:"button","aria-label":r,className:xn.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return Y.default.createElement("li",{className:xn.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=Y.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=Y.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Xo.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Ua.slideSwipeAnimationHandler,stopSwipingHandler:Ua.slideStopSwipingHandler});var kE={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(El),n=kE,r=o(Qi);function o(i){return i&&i.__esModule?i:{default:i}}})(gx);const EE="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osUno-CfPtuQXo.jpeg",CE="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osDos-CjOjW_oM.jpeg",$E="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osTres-AsJgpukL.jpeg",_E="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJes%C3%BAs-TIPDL7DU.jpeg",RE="https://Bravo938.github.io/RiosDeVida.pages/assets/tiketSalvaci%C3%B3n-D9lcr1qY.jpeg",PE="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJuan-CdVtAiml.jpeg",NE="https://Bravo938.github.io/RiosDeVida.pages/assets/servicios-D1QGoDVa.jpg",TE="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorio-CTSHckB1.jpg",IE="https://Bravo938.github.io/RiosDeVida.pages/assets/ccrv_Ser-BsoqrjkZ.jpg",LE="https://Bravo938.github.io/RiosDeVida.pages/assets/potenciados-BxEsJ0Jy.jpg",AE="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesArt-CN0fXW9p.jpg",OE="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSect-Cbi3JT-h.jpg",zE="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesFondoOscuro-B7Ek2ZSn.jpeg",DE="https://Bravo938.github.io/RiosDeVida.pages/assets/mdzzz09m-Dqg0HgdU.png",ME="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSecOscuro-Dtk7KoD-.jpg",Wt={niñoUno:EE,niñoDos:CE,niñoTres:$E,globoJesús:_E,tiketSalvación:RE,globoJuan:PE,servicios:NE,auditorio:TE,ccrv_Ser:IE,potenciados:LE,jovenesArt:AE,jovenesSection:OE,JovenesFondoOscuro:zE,mdzzz09m:DE,JovenesSectionOscuro:ME},FE=[Wt.globoJesús,Wt.niñoDos,Wt.niñoTres,Wt.niñoUno,Wt.globoJuan,Wt.niñoUno,Wt.niñoTres],UE=()=>a.jsxs(BE,{id:"grupoDeVida",children:[a.jsxs(HE,{children:[a.jsx(VE,{children:"Casas de Vida"}),a.jsx(WE,{children:"En cada Grupo de Vida hablamos y aprendemos de la palabra de Dios y también confraternamos con los miembros."})]}),a.jsx(qE,{showArrows:!1,showThumbs:!1,showStatus:!1,autoPlay:!0,infiniteLoop:!0,interval:3e3,centerMode:!0,centerSlidePercentage:30,children:FE.map((e,t)=>a.jsx(GE,{children:a.jsx(JE,{src:e,alt:`slide-${t}`})},t))})]}),BE=k.section`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  
`,HE=k.div`
  text-align: center;
  margin-bottom: 1rem;
`,VE=k.h2`
  font-size: 2.5rem;
  color: #00a0f6;
  margin-bottom: 0.5rem;
`,WE=k.p`
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
`,qE=k(gx.Carousel)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,GE=k.div`
  padding: 0 5px;
`,JE=k.img`
  width: 100%;
  height: 450px; /* Ajusta la altura según el tamaño que desees */
  object-fit: cover; /* Mantiene el tamaño sin cortar las imágenes */
  border-radius: 8px;
`,KE=()=>a.jsxs(QE,{id:"servicios",children:[a.jsxs(zh,{direction:"left",children:[a.jsx(Dh,{src:Wt.auditorio,alt:"Auditorio Centro Cristiano"}),a.jsx(Mh,{children:"Auditorio Centro Cristiano Ríos de Vida"}),a.jsx(Fh,{children:"Leer Más"})]}),a.jsxs(zh,{direction:"right",children:[a.jsx(Dh,{src:Wt.ccrv_Ser,alt:"Servicios Todos los Domingos"}),a.jsx(Mh,{children:"Servicios Todos los Domingos"}),a.jsx(Fh,{children:"Leer Más"})]})]}),QE=k.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;
  background-color: #02141747;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,zh=k.div`
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
`,Dh=k.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  

  
`,Mh=k.h3`
  font-size: 1.5rem;
  color: #00d0ff;
  margin-top: 1rem;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3); // Sombra suave
`,Fh=k.button`
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
`,XE="https://Bravo938.github.io/RiosDeVida.pages/assets/manosArriba-DDg91RAo.mp4";function YE(){const[e,t]=w.useState(!1),n=()=>{t(!e)};return a.jsx(ZE,{id:"potenciados",children:a.jsxs(eC,{children:[a.jsxs(tC,{children:[a.jsx(nC,{children:"Jóvenes Potenciados"}),a.jsxs(rC,{children:[a.jsxs(oC,{expanded:e,children:["¡Bienvenido a Jóvenes Potenciados! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(iC,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(sC,{children:a.jsx(aC,{autoPlay:!0,loop:!0,muted:!0,src:XE})})]})})}const ZE=k.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #7148d18f 40%, #2e1f428d 40%);
`,eC=k.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,tC=k.div`
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
`,nC=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,rC=k.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,oC=k.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,iC=k.button`
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
`,sC=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,aC=k.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function lC(){return a.jsxs(uC,{children:[a.jsx(mx,{}),a.jsx(sk,{}),a.jsx(bk,{}),a.jsx(ek,{}),a.jsx(KE,{}),a.jsx(UE,{}),a.jsx(YE,{}),a.jsx(hx,{})]})}const uC=k.div`
  //background-color: #ececec; // Cambia esta ruta por la de tu imagen
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;function ku(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"},child:[]},{tag:"path",attr:{d:"M11.69 15c.36-.75.84-1.43 1.43-2H7v-2h11c1.07 0 2.09.25 3 .69V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.69c-.44-.91-.69-1.93-.69-3 0-.34.03-.67.08-1H7v-2h4.69zM12 2.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM7 7h10v2H7V7z"},child:[]}]})(e)}function Eu(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},child:[]}]})(e)}function Tt(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8V8zm-7 1V3.5L18.5 9H13zM22.71 14l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71a.996.996 0 0 0 0-1.41z"},child:[]}]})(e)}function cC(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(e)}function dC(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function It(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"},child:[]}]})(e)}function bt(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"},child:[]}]})(e)}function Hr(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"},child:[]}]})(e)}function Rn(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"},child:[]}]})(e)}function Lt(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"},child:[]}]})(e)}const Sx=w.createContext(),fC=()=>{const[e,t]=w.useState(!1),n=me(),r=()=>{t(i=>!i)},o=()=>{n("/logout")};return a.jsx(Sx.Provider,{value:{darkTheme:e,toggleTheme:r},children:a.jsxs(pC,{$darkTheme:e,children:[a.jsx(hC,{onClick:o,children:a.jsx(dC,{})}),a.jsx(mC,{onClick:r,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsx(bS,{})]})})},pC=k.div`
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
    min-height: 100vh;
`,hC=k.button`
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
`,mC=k.button`
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
`,gC=()=>{const{darkTheme:e,toggleTheme:t}=w.useContext(Sx),n=me(),[r,o]=w.useState(null);w.useEffect(()=>{const l=localStorage.getItem("rol");l&&o(l)},[]);const i=l=>{n(l)},s=l=>l.includes(parseInt(r));return a.jsxs(vC,{$darkTheme:e,children:[a.jsx(yC,{onClick:t,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsxs(xC,{children:[s([1])&&a.jsxs(jt,{onClick:()=>i("/miembrosLideresSupervisor"),$darkTheme:e,children:[a.jsx(Eu,{size:24})," ",a.jsx(kt,{children:"Miembros Lider Supervisor"})]}),s([2])&&a.jsxs(jt,{onClick:()=>i("/registroLideryMiembro"),$darkTheme:e,children:[a.jsx(Eu,{size:24})," ",a.jsx(kt,{children:"Miembros"})]}),s([3])&&a.jsxs(jt,{onClick:()=>i("/planillaLider"),$darkTheme:e,children:[a.jsx(Eu,{size:24})," ",a.jsx(kt,{children:"Miembros"})]}),s([3])&&a.jsxs(jt,{onClick:()=>i("/asistencia"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(kt,{children:"Asistencia"})]}),s([2])&&a.jsxs(jt,{onClick:()=>i("/asistenciaVistaSupervisor"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(kt,{children:"Asistencia Vista Supervisor"})]}),s([1])&&a.jsxs(jt,{onClick:()=>i("/asistenciaVistaAdmin"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(kt,{children:"Asistencia "})]}),s([3])&&a.jsxs(jt,{onClick:()=>i("/generalPlanilla"),$darkTheme:e,children:[a.jsx(ku,{size:24})," ",a.jsx(kt,{children:"Planilla"})]}),s([2])&&a.jsxs(jt,{onClick:()=>i("/planillaGeneralSupervisor"),$darkTheme:e,children:[a.jsx(ku,{size:24})," ",a.jsx(kt,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(jt,{onClick:()=>i("/planillaGeneralAdmin"),$darkTheme:e,children:[a.jsx(ku,{size:24})," ",a.jsx(kt,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(jt,{onClick:()=>i("/asignarSupervisor"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(kt,{children:"Asignar Supervisor"})]}),s([1])&&a.jsxs(jt,{onClick:()=>i("/registroUsuarios"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(kt,{children:"Usuarios"})]}),s([1])&&a.jsxs(jt,{onClick:()=>i("/registroDeRoles"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(kt,{children:"Roles"})]})]})]})},vC=k.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
`,xC=k.div`
    display: grid;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
`,jt=k.button`
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
`,kt=k.span`
    margin-top: 10px;
`,yC=k.button`
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
`,Zi=w.createContext(),wC=({children:e})=>{const[t,n]=w.useState(null);return a.jsx(Zi.Provider,{value:{auth:t,setAuth:n},children:e})};function jx(e,t){return function(){return e.apply(t,arguments)}}const{toString:bC}=Object.prototype,{getPrototypeOf:Sf}=Object,Rl=(e=>t=>{const n=bC.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Xt=e=>(e=e.toLowerCase(),t=>Rl(t)===e),Pl=e=>t=>typeof t===e,{isArray:No}=Array,zi=Pl("undefined");function SC(e){return e!==null&&!zi(e)&&e.constructor!==null&&!zi(e.constructor)&&vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const kx=Xt("ArrayBuffer");function jC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&kx(e.buffer),t}const kC=Pl("string"),vt=Pl("function"),Ex=Pl("number"),Nl=e=>e!==null&&typeof e=="object",EC=e=>e===!0||e===!1,Ks=e=>{if(Rl(e)!=="object")return!1;const t=Sf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},CC=Xt("Date"),$C=Xt("File"),_C=Xt("Blob"),RC=Xt("FileList"),PC=e=>Nl(e)&&vt(e.pipe),NC=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||vt(e.append)&&((t=Rl(e))==="formdata"||t==="object"&&vt(e.toString)&&e.toString()==="[object FormData]"))},TC=Xt("URLSearchParams"),[IC,LC,AC,OC]=["ReadableStream","Request","Response","Headers"].map(Xt),zC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function es(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),No(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Cx(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$x=e=>!zi(e)&&e!==kr;function Jc(){const{caseless:e}=$x(this)&&this||{},t={},n=(r,o)=>{const i=e&&Cx(t,o)||o;Ks(t[i])&&Ks(r)?t[i]=Jc(t[i],r):Ks(r)?t[i]=Jc({},r):No(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&es(arguments[r],n);return t}const DC=(e,t,n,{allOwnKeys:r}={})=>(es(t,(o,i)=>{n&&vt(o)?e[i]=jx(o,n):e[i]=o},{allOwnKeys:r}),e),MC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),FC=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},UC=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Sf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},BC=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},HC=e=>{if(!e)return null;if(No(e))return e;let t=e.length;if(!Ex(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},VC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Sf(Uint8Array)),WC=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},qC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},GC=Xt("HTMLFormElement"),JC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Uh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),KC=Xt("RegExp"),_x=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};es(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},QC=e=>{_x(e,(t,n)=>{if(vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},XC=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return No(e)?r(e):r(String(e).split(t)),n},YC=()=>{},ZC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Cu="abcdefghijklmnopqrstuvwxyz",Bh="0123456789",Rx={DIGIT:Bh,ALPHA:Cu,ALPHA_DIGIT:Cu+Cu.toUpperCase()+Bh},e2=(e=16,t=Rx.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function t2(e){return!!(e&&vt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const n2=e=>{const t=new Array(10),n=(r,o)=>{if(Nl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=No(r)?[]:{};return es(r,(s,l)=>{const u=n(s,o+1);!zi(u)&&(i[l]=u)}),t[o]=void 0,i}}return r};return n(e,0)},r2=Xt("AsyncFunction"),o2=e=>e&&(Nl(e)||vt(e))&&vt(e.then)&&vt(e.catch),Px=((e,t)=>e?setImmediate:t?((n,r)=>(kr.addEventListener("message",({source:o,data:i})=>{o===kr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),kr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",vt(kr.postMessage)),i2=typeof queueMicrotask<"u"?queueMicrotask.bind(kr):typeof process<"u"&&process.nextTick||Px,_={isArray:No,isArrayBuffer:kx,isBuffer:SC,isFormData:NC,isArrayBufferView:jC,isString:kC,isNumber:Ex,isBoolean:EC,isObject:Nl,isPlainObject:Ks,isReadableStream:IC,isRequest:LC,isResponse:AC,isHeaders:OC,isUndefined:zi,isDate:CC,isFile:$C,isBlob:_C,isRegExp:KC,isFunction:vt,isStream:PC,isURLSearchParams:TC,isTypedArray:VC,isFileList:RC,forEach:es,merge:Jc,extend:DC,trim:zC,stripBOM:MC,inherits:FC,toFlatObject:UC,kindOf:Rl,kindOfTest:Xt,endsWith:BC,toArray:HC,forEachEntry:WC,matchAll:qC,isHTMLForm:GC,hasOwnProperty:Uh,hasOwnProp:Uh,reduceDescriptors:_x,freezeMethods:QC,toObjectSet:XC,toCamelCase:JC,noop:YC,toFiniteNumber:ZC,findKey:Cx,global:kr,isContextDefined:$x,ALPHABET:Rx,generateString:e2,isSpecCompliantForm:t2,toJSONObject:n2,isAsyncFn:r2,isThenable:o2,setImmediate:Px,asap:i2};function F(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}_.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Nx=F.prototype,Tx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Tx[e]={value:e}});Object.defineProperties(F,Tx);Object.defineProperty(Nx,"isAxiosError",{value:!0});F.from=(e,t,n,r,o,i)=>{const s=Object.create(Nx);return _.toFlatObject(e,s,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),F.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const s2=null;function Kc(e){return _.isPlainObject(e)||_.isArray(e)}function Ix(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Hh(e,t,n){return e?e.concat(t).map(function(o,i){return o=Ix(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function a2(e){return _.isArray(e)&&!e.some(Kc)}const l2=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function Tl(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,b){return!_.isUndefined(b[S])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(_.isDate(g))return g.toISOString();if(!u&&_.isBlob(g))throw new F("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(g)||_.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,S,b){let x=g;if(g&&!b&&typeof g=="object"){if(_.endsWith(S,"{}"))S=r?S:S.slice(0,-2),g=JSON.stringify(g);else if(_.isArray(g)&&a2(g)||(_.isFileList(g)||_.endsWith(S,"[]"))&&(x=_.toArray(g)))return S=Ix(S),x.forEach(function(p,y){!(_.isUndefined(p)||p===null)&&t.append(s===!0?Hh([S],y,i):s===null?S:S+"[]",c(p))}),!1}return Kc(g)?!0:(t.append(Hh(b,S,i),c(g)),!1)}const f=[],h=Object.assign(l2,{defaultVisitor:d,convertValue:c,isVisitable:Kc});function v(g,S){if(!_.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+S.join("."));f.push(g),_.forEach(g,function(x,m){(!(_.isUndefined(x)||x===null)&&o.call(t,x,_.isString(m)?m.trim():m,S,h))===!0&&v(x,S?S.concat(m):[m])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Vh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function jf(e,t){this._pairs=[],e&&Tl(e,this,t)}const Lx=jf.prototype;Lx.append=function(t,n){this._pairs.push([t,n])};Lx.toString=function(t){const n=t?function(r){return t.call(this,r,Vh)}:Vh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function u2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ax(e,t,n){if(!t)return e;const r=n&&n.encode||u2,o=n&&n.serialize;let i;if(o?i=o(t,n):i=_.isURLSearchParams(t)?t.toString():new jf(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Wh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ox={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},c2=typeof URLSearchParams<"u"?URLSearchParams:jf,d2=typeof FormData<"u"?FormData:null,f2=typeof Blob<"u"?Blob:null,p2={isBrowser:!0,classes:{URLSearchParams:c2,FormData:d2,Blob:f2},protocols:["http","https","file","blob","url","data"]},kf=typeof window<"u"&&typeof document<"u",Qc=typeof navigator=="object"&&navigator||void 0,h2=kf&&(!Qc||["ReactNative","NativeScript","NS"].indexOf(Qc.product)<0),m2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",g2=kf&&window.location.href||"http://localhost",v2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:kf,hasStandardBrowserEnv:h2,hasStandardBrowserWebWorkerEnv:m2,navigator:Qc,origin:g2},Symbol.toStringTag,{value:"Module"})),nt={...v2,...p2};function x2(e,t){return Tl(e,new nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return nt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function y2(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function w2(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function zx(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),u=i>=n.length;return s=!s&&_.isArray(o)?o.length:s,u?(_.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!_.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&_.isArray(o[s])&&(o[s]=w2(o[s])),!l)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,o)=>{t(y2(r),o,n,0)}),n}return null}function b2(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const ts={transitional:Ox,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o?JSON.stringify(zx(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return x2(t,this.formSerializer).toString();if((l=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Tl(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),b2(t)):t}],transformResponse:[function(t){const n=this.transitional||ts.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?F.from(l,F.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{ts.headers[e]={}});const S2=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),j2=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&S2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},qh=Symbol("internals");function Vo(e){return e&&String(e).trim().toLowerCase()}function Qs(e){return e===!1||e==null?e:_.isArray(e)?e.map(Qs):String(e)}function k2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const E2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $u(e,t,n,r,o){if(_.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function C2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $2(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class rt{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,u,c){const d=Vo(u);if(!d)throw new Error("header name must be a non-empty string");const f=_.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=Qs(l))}const s=(l,u)=>_.forEach(l,(c,d)=>i(c,d,u));if(_.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(_.isString(t)&&(t=t.trim())&&!E2(t))s(j2(t),n);else if(_.isHeaders(t))for(const[l,u]of t.entries())i(u,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Vo(t),t){const r=_.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return k2(o);if(_.isFunction(n))return n.call(this,o,r);if(_.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Vo(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$u(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Vo(s),s){const l=_.findKey(r,s);l&&(!n||$u(r,r[l],l,n))&&(delete r[l],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||$u(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return _.forEach(this,(o,i)=>{const s=_.findKey(r,i);if(s){n[s]=Qs(o),delete n[i];return}const l=t?C2(i):String(i).trim();l!==i&&delete n[i],n[l]=Qs(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[qh]=this[qh]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=Vo(s);r[l]||($2(o,s),r[l]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(rt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(rt);function _u(e,t){const n=this||ts,r=t||n,o=rt.from(r.headers);let i=r.data;return _.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Dx(e){return!!(e&&e.__CANCEL__)}function To(e,t,n){F.call(this,e??"canceled",F.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(To,F,{__CANCEL__:!0});function Mx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function _2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function R2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const v=d&&c-d;return v?Math.round(h*1e3/v):void 0}}function P2(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const Ha=(e,t,n=3)=>{let r=0;const o=R2(50,250);return P2(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=l;r=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-s)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Gh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Jh=e=>(...t)=>_.asap(()=>e(...t)),N2=nt.hasStandardBrowserEnv?function(){const t=nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=_.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),T2=nt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),_.isString(r)&&s.push("path="+r),_.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function I2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function L2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Fx(e,t){return e&&!I2(t)?L2(e,t):t}const Kh=e=>e instanceof rt?{...e}:e;function Or(e,t){t=t||{};const n={};function r(c,d,f){return _.isPlainObject(c)&&_.isPlainObject(d)?_.merge.call({caseless:f},c,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function o(c,d,f){if(_.isUndefined(d)){if(!_.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function i(c,d){if(!_.isUndefined(d))return r(void 0,d)}function s(c,d){if(_.isUndefined(d)){if(!_.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,d)=>o(Kh(c),Kh(d),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=u[d]||o,h=f(e[d],t[d],d);_.isUndefined(h)&&f!==l||(n[d]=h)}),n}const Ux=e=>{const t=Or({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=rt.from(s),t.url=Ax(Fx(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(_.isFormData(n)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[c,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(nt.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&N2(t.url))){const c=o&&i&&T2.read(i);c&&s.set(o,c)}return t},A2=typeof XMLHttpRequest<"u",O2=A2&&function(e){return new Promise(function(n,r){const o=Ux(e);let i=o.data;const s=rt.from(o.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=o,d,f,h,v,g;function S(){v&&v(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function x(){if(!b)return;const p=rt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:p,config:e,request:b};Mx(function($){n($),S()},function($){r($),S()},j),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(r(new F("Request aborted",F.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||Ox;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new F(y,j.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&_.forEach(s.toJSON(),function(y,j){b.setRequestHeader(j,y)}),_.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),l&&l!=="json"&&(b.responseType=o.responseType),c&&([h,g]=Ha(c,!0),b.addEventListener("progress",h)),u&&b.upload&&([f,v]=Ha(u),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",v)),(o.cancelToken||o.signal)&&(d=p=>{b&&(r(!p||p.type?new To(null,e,b):p),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const m=_2(o.url);if(m&&nt.protocols.indexOf(m)===-1){r(new F("Unsupported protocol "+m+":",F.ERR_BAD_REQUEST,e));return}b.send(i||null)})},z2=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof F?d:new To(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new F(`timeout ${t} of ms exceeded`,F.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>_.asap(l),u}},D2=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},M2=async function*(e,t){for await(const n of F2(e))yield*D2(n,t)},F2=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Qh=(e,t,n,r)=>{const o=M2(e,t);let i=0,s,l=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){l(),u.close();return}let f=d.byteLength;if(n){let h=i+=f;n(h)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),o.return()}},{highWaterMark:2})},Il=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Bx=Il&&typeof ReadableStream=="function",U2=Il&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Hx=(e,...t)=>{try{return!!e(...t)}catch{return!1}},B2=Bx&&Hx(()=>{let e=!1;const t=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Xh=64*1024,Xc=Bx&&Hx(()=>_.isReadableStream(new Response("").body)),Va={stream:Xc&&(e=>e.body)};Il&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Va[t]&&(Va[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new F(`Response type '${t}' is not supported`,F.ERR_NOT_SUPPORT,r)})})})(new Response);const H2=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(nt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await U2(e)).byteLength},V2=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??H2(t)},W2=Il&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:u,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:h}=Ux(e);c=c?(c+"").toLowerCase():"text";let v=z2([o,i&&i.toAbortSignal()],s),g;const S=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let b;try{if(u&&B2&&n!=="get"&&n!=="head"&&(b=await V2(d,r))!==0){let j=new Request(t,{method:"POST",body:r,duplex:"half"}),E;if(_.isFormData(r)&&(E=j.headers.get("content-type"))&&d.setContentType(E),j.body){const[$,C]=Gh(b,Ha(Jh(u)));r=Qh(j.body,Xh,$,C)}}_.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;g=new Request(t,{...h,signal:v,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:x?f:void 0});let m=await fetch(g);const p=Xc&&(c==="stream"||c==="response");if(Xc&&(l||p&&S)){const j={};["status","statusText","headers"].forEach(O=>{j[O]=m[O]});const E=_.toFiniteNumber(m.headers.get("content-length")),[$,C]=l&&Gh(E,Ha(Jh(l),!0))||[];m=new Response(Qh(m.body,Xh,$,()=>{C&&C(),S&&S()}),j)}c=c||"text";let y=await Va[_.findKey(Va,c)||"text"](m,e);return!p&&S&&S(),await new Promise((j,E)=>{Mx(j,E,{data:y,headers:rt.from(m.headers),status:m.status,statusText:m.statusText,config:e,request:g})})}catch(x){throw S&&S(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new F("Network Error",F.ERR_NETWORK,e,g),{cause:x.cause||x}):F.from(x,x&&x.code,e,g)}}),Yc={http:s2,xhr:O2,fetch:W2};_.forEach(Yc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Yh=e=>`- ${e}`,q2=e=>_.isFunction(e)||e===null||e===!1,Vx={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!q2(n)&&(r=Yc[(s=String(n)).toLowerCase()],r===void 0))throw new F(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Yh).join(`
`):" "+Yh(i[0]):"as no adapter specified";throw new F("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Yc};function Ru(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new To(null,e)}function Zh(e){return Ru(e),e.headers=rt.from(e.headers),e.data=_u.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Vx.getAdapter(e.adapter||ts.adapter)(e).then(function(r){return Ru(e),r.data=_u.call(e,e.transformResponse,r),r.headers=rt.from(r.headers),r},function(r){return Dx(r)||(Ru(e),r&&r.response&&(r.response.data=_u.call(e,e.transformResponse,r.response),r.response.headers=rt.from(r.response.headers))),Promise.reject(r)})}const Wx="1.7.7",Ef={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ef[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const em={};Ef.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Wx+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new F(o(s," has been removed"+(n?" in "+n:"")),F.ERR_DEPRECATED);return n&&!em[s]&&(em[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function G2(e,t,n){if(typeof e!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],u=l===void 0||s(l,i,e);if(u!==!0)throw new F("option "+i+" must be "+u,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F("Unknown option "+i,F.ERR_BAD_OPTION)}}const Zc={assertOptions:G2,validators:Ef},Ln=Zc.validators;class Pr{constructor(t){this.defaults=t,this.interceptors={request:new Wh,response:new Wh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Or(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Zc.assertOptions(r,{silentJSONParsing:Ln.transitional(Ln.boolean),forcedJSONParsing:Ln.transitional(Ln.boolean),clarifyTimeoutError:Ln.transitional(Ln.boolean)},!1),o!=null&&(_.isFunction(o)?n.paramsSerializer={serialize:o}:Zc.assertOptions(o,{encode:Ln.function,serialize:Ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=rt.concat(s,i);const l=[];let u=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(u=u&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,f=0,h;if(!u){const g=[Zh.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,c),h=g.length,d=Promise.resolve(n);f<h;)d=d.then(g[f++],g[f++]);return d}h=l.length;let v=n;for(f=0;f<h;){const g=l[f++],S=l[f++];try{v=g(v)}catch(b){S.call(this,b);break}}try{d=Zh.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Or(this.defaults,t);const n=Fx(t.baseURL,t.url);return Ax(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Pr.prototype[t]=function(n,r){return this.request(Or(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(Or(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Pr.prototype[t]=n(),Pr.prototype[t+"Form"]=n(!0)});class Cf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new To(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Cf(function(o){t=o}),cancel:t}}}function J2(e){return function(n){return e.apply(null,n)}}function K2(e){return _.isObject(e)&&e.isAxiosError===!0}const ed={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ed).forEach(([e,t])=>{ed[t]=e});function qx(e){const t=new Pr(e),n=jx(Pr.prototype.request,t);return _.extend(n,Pr.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return qx(Or(e,o))},n}const P=qx(ts);P.Axios=Pr;P.CanceledError=To;P.CancelToken=Cf;P.isCancel=Dx;P.VERSION=Wx;P.toFormData=Tl;P.AxiosError=F;P.Cancel=P.CanceledError;P.all=function(t){return Promise.all(t)};P.spread=J2;P.isAxiosError=K2;P.mergeConfig=Or;P.AxiosHeaders=rt;P.formToJSON=e=>zx(_.isHTMLForm(e)?new FormData(e):e);P.getAdapter=Vx.getAdapter;P.HttpStatusCode=ed;P.default=P;function Q2(){const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(null),s=me(),{setAuth:l}=w.useContext(Zi),u="https://backend-riosdevida-production.up.railway.app",c=async d=>{d.preventDefault();try{const f=await P.post(`${u}/api/auth/login`,{correo:e,contraseña:n});console.log("Respuesta del servidor:",f);const h=f.data.token,v=f.data.rol,g=f.data.id_usuario;h?(console.log("Token recibido:",h),l({token:h}),localStorage.setItem("token",h),localStorage.setItem("rol",v),localStorage.setItem("idUser",g),s("/menuInicio")):(i("Error al autenticar"),console.log("Token no encontrado en la respuesta"))}catch(f){console.error("Error durante la autenticación:",f),i("Credenciales inválidas")}};return a.jsxs(X2,{children:[a.jsx(Y2,{children:a.jsx("div",{children:a.jsx(G,{to:"/",children:a.jsx(bt,{})})})}),a.jsx(Z2,{autoPlay:!0,loop:!0,muted:!0,children:a.jsx("source",{src:"https://static.educacionit.com/alumni/assets/bg-login.webm",type:"video/webm"})}),a.jsxs(e$,{onSubmit:c,children:[a.jsx("h2",{children:"Login"}),o&&a.jsx(n$,{children:o}),a.jsxs(tm,{children:[a.jsx(nm,{htmlFor:"username",children:"Username"}),a.jsx(rm,{type:"text",id:"username",name:"username",value:e,onChange:d=>t(d.target.value)})]}),a.jsxs(tm,{children:[a.jsx(nm,{htmlFor:"password",children:"Password"}),a.jsx(rm,{type:"password",id:"password",name:"password",value:n,onChange:d=>r(d.target.value)})]}),a.jsx(t$,{type:"submit",children:"Login"})]})]})}const X2=k.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`,Y2=k.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  justify-content: flex-start;
  width: auto;
  font-size: 50px;
`,Z2=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,e$=k.form`
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
`,tm=k.div`
  margin-bottom: 1.5rem;
  text-align: left;
`,nm=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`,rm=k.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`,t$=k.button`
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
`,n$=k.p`
  color: red;
  margin-bottom: 1rem;
`,r$=({onConfirm:e,onCancel:t})=>a.jsx(o$,{children:a.jsxs(i$,{children:[a.jsx("h2",{children:"Confirmar"}),a.jsx("p",{children:"¿Estás seguro de que deseas cerrar sesión?"}),a.jsxs(s$,{children:[a.jsx(om,{onClick:e,children:"Aceptar"}),a.jsx(om,{onClick:t,children:"Cancelar"})]})]})}),o$=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,i$=k.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`,s$=k.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`,om=k.button`
  padding: 10px 20px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`,a$=()=>{const{setAuth:e}=w.useContext(Zi),t=me(),[n,r]=w.useState(!0),o=()=>{e(null),localStorage.removeItem("token"),t("/login")},i=()=>{r(!1),t(-1)};return a.jsxs(l$,{children:[n&&a.jsx(r$,{onConfirm:o,onCancel:i}),!n&&a.jsx("div",{children:"Cerrando sesión..."})]})},l$=k.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,u$=["xxl","xl","lg","md","sm","xs"],c$="xs",d$=w.createContext({prefixes:{},breakpoints:u$,minBreakpoint:c$});function f$(e,t){const{prefixes:n}=w.useContext(d$);return e||n[t]||t}const At=w.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:s,variant:l,responsive:u,...c},d)=>{const f=f$(e,"table"),h=Lk(t,f,l&&`${f}-${l}`,s&&`${f}-${s}`,n&&`${f}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${f}-bordered`,o&&`${f}-borderless`,i&&`${f}-hover`),v=a.jsx("table",{...c,className:h,ref:d});if(u){let g=`${f}-responsive`;return typeof u=="string"&&(g=`${g}-${u}`),a.jsx("div",{className:g,children:v})}return v});var St={},Ll={},zr={},Gx={},$f={},Fr={},Io={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=w;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ke=Object.prototype.hasOwnProperty,p$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,im={},sm={};function Kx(e){return Ke.call(sm,e)?!0:Ke.call(im,e)?!1:p$.test(e)?sm[e]=!0:(im[e]=!0,!1)}function Ge(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function Rf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_f,Rf);Te[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_f,Rf);Te[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_f,Rf);Te[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h$=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(e){h$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xs[t]=Xs[e]})});var m$=/["'&<>]/;function Be(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=m$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var g$=/([A-Z])/g,v$=/^ms-/,td=Array.isArray;function hn(e,t){return{insertionMode:e,selectedValue:t}}function x$(e,t,n){switch(t){case"select":return hn(1,n.value!=null?n.value:n.defaultValue);case"svg":return hn(2,null);case"math":return hn(3,null);case"foreignObject":return hn(1,null);case"table":return hn(4,null);case"thead":case"tbody":case"tfoot":return hn(5,null);case"colgroup":return hn(7,null);case"tr":return hn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?hn(1,null):e}var am=new Map;function Qx(e,t,n){if(typeof n!="object")throw Error(U(62));t=!0;for(var r in n)if(Ke.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=Be(r);o=Be((""+o).trim())}else{i=r;var s=am.get(i);s!==void 0||(s=Be(i.replace(g$,"-$1").toLowerCase().replace(v$,"-ms-")),am.set(i,s)),i=s,o=typeof o=="number"?o===0||Ke.call(Xs,r)?""+o:o+"px":Be((""+o).trim())}t?(t=!1,e.push(' style="',i,":",o)):e.push(";",i,":",o)}}t||e.push('"')}function st(e,t,n,r){switch(n){case"style":Qx(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Te.hasOwnProperty(n)?Te[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',Be(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',Be(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',Be(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',Be(r),'"')}}else if(Kx(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',Be(r),'"')}}}function Ys(e,t,n){if(t!=null){if(n!=null)throw Error(U(60));if(typeof t!="object"||!("__html"in t))throw Error(U(61));t=t.__html,t!=null&&e.push(""+t)}}function y$(e){var t="";return Jx.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Pu(e,t,n,r){e.push(en(n));var o=n=null,i;for(i in t)if(Ke.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:st(e,r,i,s)}}return e.push(">"),Ys(e,o,n),typeof n=="string"?(e.push(Be(n)),null):n}var w$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,lm=new Map;function en(e){var t=lm.get(e);if(t===void 0){if(!w$.test(e))throw Error(U(65,e));t="<"+e,lm.set(e,t)}return t}function b$(e,t,n,r,o){switch(t){case"select":e.push(en("select"));var i=null,s=null;for(d in n)if(Ke.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:st(e,r,d,l)}}return e.push(">"),Ys(e,s,i),i;case"option":s=o.selectedValue,e.push(en("option"));var u=l=null,c=null,d=null;for(i in n)if(Ke.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:st(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:y$(l),td(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(' selected=""');break}}else""+s===n&&e.push(' selected=""');else c&&e.push(' selected=""');return e.push(">"),Ys(e,d,l),l;case"textarea":e.push(en("textarea")),d=s=i=null;for(l in n)if(Ke.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(U(91));default:st(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(">"),d!=null){if(i!=null)throw Error(U(92));if(td(d)&&1<d.length)throw Error(U(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i!==null&&e.push(Be(""+i)),null;case"input":e.push(en("input")),u=d=l=i=null;for(s in n)if(Ke.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(U(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:st(e,r,s,c)}return d!==null?st(e,r,"checked",d):u!==null&&st(e,r,"checked",u),i!==null?st(e,r,"value",i):l!==null&&st(e,r,"value",l),e.push("/>"),null;case"menuitem":e.push(en("menuitem"));for(var h in n)if(Ke.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(U(400));default:st(e,r,h,i)}return e.push(">"),null;case"title":e.push(en("title")),i=null;for(f in n)if(Ke.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(U(434));default:st(e,r,f,s)}return e.push(">"),i;case"listing":case"pre":e.push(en(t)),s=i=null;for(u in n)if(Ke.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:st(e,r,u,l)}if(e.push(">"),s!=null){if(i!=null)throw Error(U(60));if(typeof s!="object"||!("__html"in s))throw Error(U(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(en(t));for(var v in n)if(Ke.call(n,v)&&(i=n[v],i!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(U(399,t));default:st(e,r,v,i)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Pu(e,n,t,r);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),Pu(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Pu(e,n,t,r);e.push(en(t)),s=i=null;for(c in n)if(Ke.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":Qx(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Kx(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(" ",c,'="',Be(l),'"')}return e.push(">"),Ys(e,s,i),i}}function um(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(U(395));return e.push(n),e.push('"></template>')}function S$(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(U(397))}}function j$(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(U(397))}}var k$=/[<\u2028\u2029]/g;function Nu(e){return JSON.stringify(e).replace(k$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function E$(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function cm(e,t,n,r){return n.generateStaticMarkup?(e.push(Be(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(Be(t)),e=!0),e)}var mi=Object.assign,C$=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),Yx=Symbol.for("react.fragment"),Zx=Symbol.for("react.strict_mode"),ey=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ny=Symbol.for("react.context"),ry=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),iy=Symbol.for("react.suspense_list"),sy=Symbol.for("react.memo"),Pf=Symbol.for("react.lazy"),$$=Symbol.for("react.scope"),_$=Symbol.for("react.debug_trace_mode"),R$=Symbol.for("react.legacy_hidden"),P$=Symbol.for("react.default_value"),dm=Symbol.iterator;function nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yx:return"Fragment";case Xx:return"Portal";case ey:return"Profiler";case Zx:return"StrictMode";case oy:return"Suspense";case iy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ny:return(e.displayName||"Context")+".Consumer";case ty:return(e._context.displayName||"Context")+".Provider";case ry:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sy:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case Pf:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}var ay={};function fm(e,t){if(e=e.contextTypes,!e)return ay;var n={},r;for(r in e)n[r]=t[r];return n}var Er=null;function Al(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(U(401))}else{if(n===null)throw Error(U(401));Al(e,n)}t.context._currentValue2=t.value}}function ly(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&ly(e)}function uy(e){var t=e.parent;t!==null&&uy(t),e.context._currentValue2=e.value}function cy(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(U(402));e.depth===t.depth?Al(e,t):cy(e,t)}function dy(e,t){var n=t.parent;if(n===null)throw Error(U(402));e.depth===n.depth?Al(e,n):dy(e,n),t.context._currentValue2=t.value}function Wa(e){var t=Er;t!==e&&(t===null?uy(e):e===null?ly(t):t.depth===e.depth?Al(t,e):t.depth>e.depth?cy(t,e):dy(t,e),Er=e)}var pm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function hm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=pm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue2:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:mi({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&pm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=mi({},i,l)):mi(i,l))}e.state=i}else i.queue=null}var N$={id:1,overflow:""};function rd(e,t,n){var r=e.id;e=e.overflow;var o=32-Zs(r)-1;r&=~(1<<o),n+=1;var i=32-Zs(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-Zs(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var Zs=Math.clz32?Math.clz32:L$,T$=Math.log,I$=Math.LN2;function L$(e){return e>>>=0,e===0?32:31-(T$(e)/I$|0)|0}function A$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O$=typeof Object.is=="function"?Object.is:A$,Cn=null,Nf=null,ea=null,re=null,Yo=!1,qa=!1,Di=0,Wn=null,Ol=0;function vr(){if(Cn===null)throw Error(U(321));return Cn}function mm(){if(0<Ol)throw Error(U(312));return{memoizedState:null,queue:null,next:null}}function Tf(){return re===null?ea===null?(Yo=!1,ea=re=mm()):(Yo=!0,re=ea):re.next===null?(Yo=!1,re=re.next=mm()):(Yo=!0,re=re.next),re}function If(){Nf=Cn=null,qa=!1,ea=null,Ol=0,re=Wn=null}function fy(e,t){return typeof t=="function"?t(e):t}function gm(e,t,n){if(Cn=vr(),re=Tf(),Yo){var r=re.queue;if(t=r.dispatch,Wn!==null&&(n=Wn.get(r),n!==void 0)){Wn.delete(r),r=re.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return re.memoizedState=r,[r,t]}return[re.memoizedState,t]}return e=e===fy?typeof t=="function"?t():t:n!==void 0?n(t):t,re.memoizedState=e,e=re.queue={last:null,dispatch:null},e=e.dispatch=z$.bind(null,Cn,e),[re.memoizedState,e]}function vm(e,t){if(Cn=vr(),re=Tf(),t=t===void 0?null:t,re!==null){var n=re.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!O$(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),re.memoizedState=[e,t],e}function z$(e,t,n){if(25<=Ol)throw Error(U(301));if(e===Cn)if(qa=!0,e={action:n,next:null},Wn===null&&(Wn=new Map),n=Wn.get(t),n===void 0)Wn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function D$(){throw Error(U(394))}function $s(){}var xm={readContext:function(e){return e._currentValue2},useContext:function(e){return vr(),e._currentValue2},useMemo:vm,useReducer:gm,useRef:function(e){Cn=vr(),re=Tf();var t=re.memoizedState;return t===null?(e={current:e},re.memoizedState=e):t},useState:function(e){return gm(fy,e)},useInsertionEffect:$s,useLayoutEffect:function(){},useCallback:function(e,t){return vm(function(){return e},t)},useImperativeHandle:$s,useEffect:$s,useDebugValue:$s,useDeferredValue:function(e){return vr(),e},useTransition:function(){return vr(),[!1,D$]},useId:function(){var e=Nf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Zs(e)-1)).toString(32)+t;var n=ta;if(n===null)throw Error(U(404));return t=Di++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return vr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(U(407));return n()}},ta=null,Tu=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function M$(e){return console.error(e),null}function Zo(){}function F$(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?M$:o,onAllReady:Zo,onShellReady:s===void 0?Zo:s,onShellError:Zo,onFatalError:Zo},n=Ga(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Lf(t,e,null,n,d,ay,null,N$),c.push(e),t}function Lf(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&my(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Ga(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Mi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function Ja(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function ym(e,t,n,r,o){for(Cn={},Nf=t,Di=0,e=n(r,o);qa;)qa=!1,Di=0,Ol+=1,re=null,e=n(r,o);return If(),e}function wm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(U(108,nd(r)||"Unknown",l));r=mi({},s,n)}t.legacyContext=r,ct(e,t,o),t.legacyContext=s}else ct(e,t,o)}function bm(e,t){if(e&&e.defaultProps){t=mi({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function od(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=fm(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue2:o),hm(i,n,r,o),wm(e,t,i,n)}else{i=fm(n,t.legacyContext),o=ym(e,t,n,r,i);var s=Di!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)hm(o,n,r,i),wm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=rd(r,1,0);try{ct(e,t,o)}finally{t.treeContext=r}}else ct(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=b$(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=x$(s,n,r),id(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",n,">")}o.lastPushedText=!1}else{switch(n){case R$:case _$:case Zx:case ey:case Yx:ct(e,t,r.children);return;case iy:ct(e,t,r.children);return;case $$:throw Error(U(343));case oy:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Ga(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Ga(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(id(e,t,r),e.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),c.status=1,Ka(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Mi(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Lf(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ry:if(r=ym(e,t,n.render,r,o),Di!==0){n=t.treeContext,t.treeContext=rd(n,1,0);try{ct(e,t,r)}finally{t.treeContext=n}}else ct(e,t,r);return;case sy:n=n.type,r=bm(n,r),od(e,t,n,r,o);return;case ty:if(o=r.children,n=n._context,r=r.value,i=n._currentValue2,n._currentValue2=r,s=Er,Er=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,ct(e,t,o),e=Er,e===null)throw Error(U(403));r=e.parentValue,e.context._currentValue2=r===P$?e.context._defaultValue:r,e=Er=e.parent,t.context=e;return;case ny:r=r.children,r=r(n._currentValue2),ct(e,t,r);return;case Pf:o=n._init,n=o(n._payload),r=bm(n,r),od(e,t,n,r,void 0);return}throw Error(U(130,n==null?n:typeof n,""))}}function ct(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case C$:od(e,t,n.type,n.props,n.ref);return;case Xx:throw Error(U(257));case Pf:var r=n._init;n=r(n._payload),ct(e,t,n);return}if(td(n)){Sm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=dm&&n[dm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);Sm(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=cm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=cm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Sm(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=rd(i,r,o);try{id(e,t,n[o])}finally{t.treeContext=i}}}function id(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return ct(e,t,n)}catch(u){if(If(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Ga(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Lf(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Wa(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Wa(i),u}}function U$(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,hy(this,t,e)}function py(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(U(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return py(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Ka(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Ka(e,n)}else e.completedSegments.push(t)}function hy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(U(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Zo,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Ka(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(U$,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Ka(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function my(e){if(e.status!==2){var t=Er,n=Tu.current;Tu.current=xm;var r=ta;ta=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){Wa(s.context);try{ct(l,s,s.node),l.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),s.abortSet.delete(s),u.status=1,hy(l,s.blockedBoundary,u)}catch(g){if(If(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=s.ping;g.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=g,h=Mi(l,f);if(d===null?Ja(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var v=l.onAllReady;v()}}}finally{}}}o.splice(0,i),e.destination!==null&&Af(e,e.destination)}catch(g){Mi(e,g),Ja(e,g)}finally{ta=r,Tu.current=n,n===xm&&Wa(t)}}}function _s(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)t.push(r[i]);o=zl(e,t,o)}for(;i<r.length-1;i++)t.push(r[i]);return i<r.length&&(o=t.push(r[i])),o;default:throw Error(U(390))}}function zl(e,t,n){var r=n.boundary;if(r===null)return _s(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=Be(r),t.push(r),t.push('"')),t.push("></template>")),_s(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;return o=o.boundaryPrefix+i.toString(16),r=r.id=o,um(t,e.responseState,r),_s(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),um(t,e.responseState,r.id),_s(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(U(391));return zl(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function jm(e,t,n){return S$(t,e.responseState,n.formatContext,n.id),zl(e,t,n),j$(t,n.formatContext)}function km(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)gy(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(U(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function gy(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(U(392));return jm(e,t,r)}return jm(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")<\/script>')}function Af(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){zl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(r.push(l.startInlineScript),l.sentClientRenderFunction?r.push('$RX("'):(l.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(U(395));if(r.push(u),r.push('"'),c||d||f){r.push(",");var h=Nu(c||"");r.push(h)}if(d||f){r.push(",");var v=Nu(d||"");r.push(v)}if(f){r.push(",");var g=Nu(f);r.push(g)}if(!r.push(")<\/script>")){e.destination=null,i++,o.splice(0,i);return}}o.splice(0,i);var S=e.completedBoundaries;for(i=0;i<S.length;i++)if(!km(e,t,S[i])){e.destination=null,i++,S.splice(0,i);return}S.splice(0,i);var b=e.partialBoundaries;for(i=0;i<b.length;i++){var x=b[i];e:{o=e,s=t;var m=x.completedSegments;for(l=0;l<m.length;l++)if(!gy(o,s,x,m[l])){l++,m.splice(0,l);var p=!1;break e}m.splice(0,l),p=!0}if(!p){e.destination=null,i++,b.splice(0,i);return}}b.splice(0,i);var y=e.completedBoundaries;for(i=0;i<y.length;i++)if(!km(e,t,y[i])){e.destination=null,i++,y.splice(0,i);return}y.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function B$(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return py(r,e,t)}),n.clear(),e.destination!==null&&Af(e,e.destination)}catch(r){Mi(e,r),Ja(e,r)}}function H$(){}function vy(e,t,n,r){var o=!1,i=null,s="",l={push:function(c){return c!==null&&(s+=c),!0},destroy:function(c){o=!0,i=c}},u=!1;if(e=F$(e,E$(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,H$,void 0,function(){u=!0}),my(e),B$(e,r),e.status===1)e.status=2,l.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=l;try{Af(e,l)}catch(c){Mi(e,c),Ja(e,c)}}if(o)throw i;if(!u)throw Error(U(426));return s}Io.renderToNodeStream=function(){throw Error(U(207))};Io.renderToStaticMarkup=function(e,t){return vy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Io.renderToStaticNodeStream=function(){throw Error(U(208))};Io.renderToString=function(e,t){return vy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Io.version="18.3.1";var Of={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=w;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dt=null,ft=0;function A(e,t){if(t.length!==0)if(512<t.length)0<ft&&(e.enqueue(new Uint8Array(dt.buffer,0,ft)),dt=new Uint8Array(512),ft=0),e.enqueue(t);else{var n=dt.length-ft;n<t.length&&(n===0?e.enqueue(dt):(dt.set(t.subarray(0,n),ft),e.enqueue(dt),t=t.subarray(n)),dt=new Uint8Array(512),ft=0),dt.set(t,ft),ft+=t.length}}function le(e,t){return A(e,t),!0}function Em(e){dt&&0<ft&&(e.enqueue(new Uint8Array(dt.buffer,0,ft)),dt=null,ft=0)}var yy=new TextEncoder;function q(e){return yy.encode(e)}function N(e){return yy.encode(e)}function wy(e,t){typeof e.error=="function"?e.error(t):e.close()}var Qe=Object.prototype.hasOwnProperty,V$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},$m={};function by(e){return Qe.call($m,e)?!0:Qe.call(Cm,e)?!1:V$.test(e)?$m[e]=!0:(Cm[e]=!0,!1)}function Je(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Df(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zf,Df);Ie[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zf,Df);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zf,Df);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W$=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(e){W$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),na[t]=na[e]})});var q$=/["'&<>]/;function _e(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=q$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var G$=/([A-Z])/g,J$=/^ms-/,sd=Array.isArray,K$=N("<script>"),Q$=N("<\/script>"),X$=N('<script src="'),Y$=N('<script type="module" src="'),_m=N('" async=""><\/script>'),Z$=/(<\/|<)(s)(cript)/gi;function e_(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function t_(e,t,n,r,o){e=e===void 0?"":e,t=t===void 0?K$:N('<script nonce="'+_e(t)+'">');var i=[];if(n!==void 0&&i.push(t,q((""+n).replace(Z$,e_)),Q$),r!==void 0)for(n=0;n<r.length;n++)i.push(X$,q(_e(r[n])),_m);if(o!==void 0)for(r=0;r<o.length;r++)i.push(Y$,q(_e(o[r])),_m);return{bootstrapChunks:i,startInlineScript:t,placeholderPrefix:N(e+"P:"),segmentPrefix:N(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function tn(e,t){return{insertionMode:e,selectedValue:t}}function n_(e){return tn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function r_(e,t,n){switch(t){case"select":return tn(1,n.value!=null?n.value:n.defaultValue);case"svg":return tn(2,null);case"math":return tn(3,null);case"foreignObject":return tn(1,null);case"table":return tn(4,null);case"thead":case"tbody":case"tfoot":return tn(5,null);case"colgroup":return tn(7,null);case"tr":return tn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?tn(1,null):e}var Mf=N("<!-- -->");function Rm(e,t,n,r){return t===""?r:(r&&e.push(Mf),e.push(q(_e(t))),!0)}var Pm=new Map,o_=N(' style="'),Nm=N(":"),i_=N(";");function Sy(e,t,n){if(typeof n!="object")throw Error(V(62));t=!0;for(var r in n)if(Qe.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=q(_e(r));o=q(_e((""+o).trim()))}else{i=r;var s=Pm.get(i);s!==void 0||(s=N(_e(i.replace(G$,"-$1").toLowerCase().replace(J$,"-ms-"))),Pm.set(i,s)),i=s,o=typeof o=="number"?o===0||Qe.call(na,r)?q(""+o):q(o+"px"):q(_e((""+o).trim()))}t?(t=!1,e.push(o_,i,Nm,o)):e.push(i_,i,Nm,o)}}t||e.push(xr)}var On=N(" "),Vr=N('="'),xr=N('"'),Tm=N('=""');function at(e,t,n,r){switch(n){case"style":Sy(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Ie.hasOwnProperty(n)?Ie[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=q(t.attributeName),t.type){case 3:r&&e.push(On,n,Tm);break;case 4:r===!0?e.push(On,n,Tm):r!==!1&&e.push(On,n,Vr,q(_e(r)),xr);break;case 5:isNaN(r)||e.push(On,n,Vr,q(_e(r)),xr);break;case 6:!isNaN(r)&&1<=r&&e.push(On,n,Vr,q(_e(r)),xr);break;default:t.sanitizeURL&&(r=""+r),e.push(On,n,Vr,q(_e(r)),xr)}}else if(by(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(On,q(n),Vr,q(_e(r)),xr)}}}var zn=N(">"),Im=N("/>");function ra(e,t,n){if(t!=null){if(n!=null)throw Error(V(60));if(typeof t!="object"||!("__html"in t))throw Error(V(61));t=t.__html,t!=null&&e.push(q(""+t))}}function s_(e){var t="";return xy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var Iu=N(' selected=""');function Lu(e,t,n,r){e.push(nn(n));var o=n=null,i;for(i in t)if(Qe.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:at(e,r,i,s)}}return e.push(zn),ra(e,o,n),typeof n=="string"?(e.push(q(_e(n))),null):n}var Au=N(`
`),a_=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Lm=new Map;function nn(e){var t=Lm.get(e);if(t===void 0){if(!a_.test(e))throw Error(V(65,e));t=N("<"+e),Lm.set(e,t)}return t}var l_=N("<!DOCTYPE html>");function u_(e,t,n,r,o){switch(t){case"select":e.push(nn("select"));var i=null,s=null;for(d in n)if(Qe.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:at(e,r,d,l)}}return e.push(zn),ra(e,s,i),i;case"option":s=o.selectedValue,e.push(nn("option"));var u=l=null,c=null,d=null;for(i in n)if(Qe.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:at(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:s_(l),sd(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(Iu);break}}else""+s===n&&e.push(Iu);else c&&e.push(Iu);return e.push(zn),ra(e,d,l),l;case"textarea":e.push(nn("textarea")),d=s=i=null;for(l in n)if(Qe.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(V(91));default:at(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(zn),d!=null){if(i!=null)throw Error(V(92));if(sd(d)&&1<d.length)throw Error(V(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(Au),i!==null&&e.push(q(_e(""+i))),null;case"input":e.push(nn("input")),u=d=l=i=null;for(s in n)if(Qe.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(V(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:at(e,r,s,c)}return d!==null?at(e,r,"checked",d):u!==null&&at(e,r,"checked",u),i!==null?at(e,r,"value",i):l!==null&&at(e,r,"value",l),e.push(Im),null;case"menuitem":e.push(nn("menuitem"));for(var h in n)if(Qe.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(V(400));default:at(e,r,h,i)}return e.push(zn),null;case"title":e.push(nn("title")),i=null;for(f in n)if(Qe.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(V(434));default:at(e,r,f,s)}return e.push(zn),i;case"listing":case"pre":e.push(nn(t)),s=i=null;for(u in n)if(Qe.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:at(e,r,u,l)}if(e.push(zn),s!=null){if(i!=null)throw Error(V(60));if(typeof s!="object"||!("__html"in s))throw Error(V(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Au,q(n)):e.push(q(""+n)))}return typeof i=="string"&&i[0]===`
`&&e.push(Au),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(nn(t));for(var v in n)if(Qe.call(n,v)&&(i=n[v],i!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(V(399,t));default:at(e,r,v,i)}return e.push(Im),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Lu(e,n,t,r);case"html":return o.insertionMode===0&&e.push(l_),Lu(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Lu(e,n,t,r);e.push(nn(t)),s=i=null;for(c in n)if(Qe.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":Sy(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:by(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(On,q(c),Vr,q(_e(l)),xr)}return e.push(zn),ra(e,s,i),i}}var c_=N("</"),d_=N(">"),f_=N('<template id="'),p_=N('"></template>'),h_=N("<!--$-->"),m_=N('<!--$?--><template id="'),g_=N('"></template>'),v_=N("<!--$!-->"),x_=N("<!--/$-->"),y_=N("<template"),w_=N('"'),b_=N(' data-dgst="');N(' data-msg="');N(' data-stck="');var S_=N("></template>");function Am(e,t,n){if(A(e,m_),n===null)throw Error(V(395));return A(e,n),le(e,g_)}var j_=N('<div hidden id="'),k_=N('">'),E_=N("</div>"),C_=N('<svg aria-hidden="true" style="display:none" id="'),$_=N('">'),__=N("</svg>"),R_=N('<math aria-hidden="true" style="display:none" id="'),P_=N('">'),N_=N("</math>"),T_=N('<table hidden id="'),I_=N('">'),L_=N("</table>"),A_=N('<table hidden><tbody id="'),O_=N('">'),z_=N("</tbody></table>"),D_=N('<table hidden><tr id="'),M_=N('">'),F_=N("</tr></table>"),U_=N('<table hidden><colgroup id="'),B_=N('">'),H_=N("</colgroup></table>");function V_(e,t,n,r){switch(n.insertionMode){case 0:case 1:return A(e,j_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,k_);case 2:return A(e,C_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,$_);case 3:return A(e,R_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,P_);case 4:return A(e,T_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,I_);case 5:return A(e,A_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,O_);case 6:return A(e,D_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,M_);case 7:return A(e,U_),A(e,t.segmentPrefix),A(e,q(r.toString(16))),le(e,B_);default:throw Error(V(397))}}function W_(e,t){switch(t.insertionMode){case 0:case 1:return le(e,E_);case 2:return le(e,__);case 3:return le(e,N_);case 4:return le(e,L_);case 5:return le(e,z_);case 6:return le(e,F_);case 7:return le(e,H_);default:throw Error(V(397))}}var q_=N('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),G_=N('$RS("'),J_=N('","'),K_=N('")<\/script>'),Q_=N('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),X_=N('$RC("'),Y_=N('","'),Z_=N('")<\/script>'),e3=N('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),t3=N('$RX("'),n3=N('"'),r3=N(")<\/script>"),Ou=N(","),o3=/[<\u2028\u2029]/g;function zu(e){return JSON.stringify(e).replace(o3,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var gi=Object.assign,i3=Symbol.for("react.element"),jy=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Cy=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),_y=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Ny=Symbol.for("react.suspense_list"),Ty=Symbol.for("react.memo"),Ff=Symbol.for("react.lazy"),s3=Symbol.for("react.scope"),a3=Symbol.for("react.debug_trace_mode"),l3=Symbol.for("react.legacy_hidden"),u3=Symbol.for("react.default_value"),Om=Symbol.iterator;function ad(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ky:return"Fragment";case jy:return"Portal";case Cy:return"Profiler";case Ey:return"StrictMode";case Py:return"Suspense";case Ny:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _y:return(e.displayName||"Context")+".Consumer";case $y:return(e._context.displayName||"Context")+".Provider";case Ry:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ty:return t=e.displayName||null,t!==null?t:ad(e.type)||"Memo";case Ff:t=e._payload,e=e._init;try{return ad(e(t))}catch{}}return null}var Iy={};function zm(e,t){if(e=e.contextTypes,!e)return Iy;var n={},r;for(r in e)n[r]=t[r];return n}var Cr=null;function Dl(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(V(401))}else{if(n===null)throw Error(V(401));Dl(e,n)}t.context._currentValue=t.value}}function Ly(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Ly(e)}function Ay(e){var t=e.parent;t!==null&&Ay(t),e.context._currentValue=e.value}function Oy(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(V(402));e.depth===t.depth?Dl(e,t):Oy(e,t)}function zy(e,t){var n=t.parent;if(n===null)throw Error(V(402));e.depth===n.depth?Dl(e,n):zy(e,n),t.context._currentValue=t.value}function Qa(e){var t=Cr;t!==e&&(t===null?Ay(e):e===null?Ly(t):t.depth===e.depth?Dl(t,e):t.depth>e.depth?Oy(t,e):zy(t,e),Cr=e)}var Dm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Mm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=Dm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:gi({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Dm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=gi({},i,l)):gi(i,l))}e.state=i}else i.queue=null}var c3={id:1,overflow:""};function ld(e,t,n){var r=e.id;e=e.overflow;var o=32-oa(r)-1;r&=~(1<<o),n+=1;var i=32-oa(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-oa(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var oa=Math.clz32?Math.clz32:p3,d3=Math.log,f3=Math.LN2;function p3(e){return e>>>=0,e===0?32:31-(d3(e)/f3|0)|0}function h3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var m3=typeof Object.is=="function"?Object.is:h3,$n=null,Uf=null,ia=null,oe=null,ei=!1,Xa=!1,Fi=0,qn=null,Ml=0;function yr(){if($n===null)throw Error(V(321));return $n}function Fm(){if(0<Ml)throw Error(V(312));return{memoizedState:null,queue:null,next:null}}function Bf(){return oe===null?ia===null?(ei=!1,ia=oe=Fm()):(ei=!0,oe=ia):oe.next===null?(ei=!1,oe=oe.next=Fm()):(ei=!0,oe=oe.next),oe}function Hf(){Uf=$n=null,Xa=!1,ia=null,Ml=0,oe=qn=null}function Dy(e,t){return typeof t=="function"?t(e):t}function Um(e,t,n){if($n=yr(),oe=Bf(),ei){var r=oe.queue;if(t=r.dispatch,qn!==null&&(n=qn.get(r),n!==void 0)){qn.delete(r),r=oe.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return oe.memoizedState=r,[r,t]}return[oe.memoizedState,t]}return e=e===Dy?typeof t=="function"?t():t:n!==void 0?n(t):t,oe.memoizedState=e,e=oe.queue={last:null,dispatch:null},e=e.dispatch=g3.bind(null,$n,e),[oe.memoizedState,e]}function Bm(e,t){if($n=yr(),oe=Bf(),t=t===void 0?null:t,oe!==null){var n=oe.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!m3(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),oe.memoizedState=[e,t],e}function g3(e,t,n){if(25<=Ml)throw Error(V(301));if(e===$n)if(Xa=!0,e={action:n,next:null},qn===null&&(qn=new Map),n=qn.get(t),n===void 0)qn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function v3(){throw Error(V(394))}function Rs(){}var Hm={readContext:function(e){return e._currentValue},useContext:function(e){return yr(),e._currentValue},useMemo:Bm,useReducer:Um,useRef:function(e){$n=yr(),oe=Bf();var t=oe.memoizedState;return t===null?(e={current:e},oe.memoizedState=e):t},useState:function(e){return Um(Dy,e)},useInsertionEffect:Rs,useLayoutEffect:function(){},useCallback:function(e,t){return Bm(function(){return e},t)},useImperativeHandle:Rs,useEffect:Rs,useDebugValue:Rs,useDeferredValue:function(e){return yr(),e},useTransition:function(){return yr(),[!1,v3]},useId:function(){var e=Uf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-oa(e)-1)).toString(32)+t;var n=sa;if(n===null)throw Error(V(404));return t=Fi++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return yr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(V(407));return n()}},sa=null,Du=xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function x3(e){return console.error(e),null}function ti(){}function y3(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?x3:o,onAllReady:i===void 0?ti:i,onShellReady:s===void 0?ti:s,onShellError:l===void 0?ti:l,onFatalError:u===void 0?ti:u},n=Ya(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Vf(t,e,null,n,d,Iy,null,c3),c.push(e),t}function Vf(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&Uy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Ya(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Ui(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function Za(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,wy(e.destination,t)):(e.status=1,e.fatalError=t)}function Vm(e,t,n,r,o){for($n={},Uf=t,Fi=0,e=n(r,o);Xa;)Xa=!1,Fi=0,Ml+=1,oe=null,e=n(r,o);return Hf(),e}function Wm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(V(108,ad(r)||"Unknown",l));r=gi({},s,n)}t.legacyContext=r,pt(e,t,o),t.legacyContext=s}else pt(e,t,o)}function qm(e,t){if(e&&e.defaultProps){t=gi({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ud(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=zm(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue:o),Mm(i,n,r,o),Wm(e,t,i,n)}else{i=zm(n,t.legacyContext),o=Vm(e,t,n,r,i);var s=Fi!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)Mm(o,n,r,i),Wm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=ld(r,1,0);try{pt(e,t,o)}finally{t.treeContext=r}}else pt(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=u_(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=r_(s,n,r),cd(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(c_,q(n),d_)}o.lastPushedText=!1}else{switch(n){case l3:case a3:case Ey:case Cy:case ky:pt(e,t,r.children);return;case Ny:pt(e,t,r.children);return;case s3:throw Error(V(343));case Py:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Ya(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Ya(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(cd(e,t,r),c.lastPushedText&&c.textEmbedded&&c.chunks.push(Mf),c.status=1,el(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Ui(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Vf(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ry:if(r=Vm(e,t,n.render,r,o),Fi!==0){n=t.treeContext,t.treeContext=ld(n,1,0);try{pt(e,t,r)}finally{t.treeContext=n}}else pt(e,t,r);return;case Ty:n=n.type,r=qm(n,r),ud(e,t,n,r,o);return;case $y:if(o=r.children,n=n._context,r=r.value,i=n._currentValue,n._currentValue=r,s=Cr,Cr=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,pt(e,t,o),e=Cr,e===null)throw Error(V(403));r=e.parentValue,e.context._currentValue=r===u3?e.context._defaultValue:r,e=Cr=e.parent,t.context=e;return;case _y:r=r.children,r=r(n._currentValue),pt(e,t,r);return;case Ff:o=n._init,n=o(n._payload),r=qm(n,r),ud(e,t,n,r,void 0);return}throw Error(V(130,n==null?n:typeof n,""))}}function pt(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case i3:ud(e,t,n.type,n.props,n.ref);return;case jy:throw Error(V(257));case Ff:var r=n._init;n=r(n._payload),pt(e,t,n);return}if(sd(n)){Gm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=Om&&n[Om]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);Gm(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=Rm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=Rm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Gm(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=ld(i,r,o);try{cd(e,t,n[o])}finally{t.treeContext=i}}}function cd(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return pt(e,t,n)}catch(u){if(Hf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Ya(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Vf(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Qa(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Qa(i),u}}function w3(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Fy(this,t,e)}function My(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(V(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return My(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function el(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&el(e,n)}else e.completedSegments.push(t)}function Fy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(V(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ti,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&el(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(w3,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(el(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Uy(e){if(e.status!==2){var t=Cr,n=Du.current;Du.current=Hm;var r=sa;sa=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){Qa(s.context);try{pt(l,s,s.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Mf),s.abortSet.delete(s),u.status=1,Fy(l,s.blockedBoundary,u)}catch(g){if(Hf(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=s.ping;g.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=g,h=Ui(l,f);if(d===null?Za(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var v=l.onAllReady;v()}}}finally{}}}o.splice(0,i),e.destination!==null&&Wf(e,e.destination)}catch(g){Ui(e,g),Za(e,g)}finally{sa=r,Du.current=n,n===Hm&&Qa(t)}}}function Ps(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,A(t,f_),A(t,e.placeholderPrefix),e=q(r.toString(16)),A(t,e),le(t,p_);case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)A(t,r[i]);o=Fl(e,t,o)}for(;i<r.length-1;i++)A(t,r[i]);return i<r.length&&(o=le(t,r[i])),o;default:throw Error(V(390))}}function Fl(e,t,n){var r=n.boundary;if(r===null)return Ps(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,le(t,v_),A(t,y_),r&&(A(t,b_),A(t,q(_e(r))),A(t,w_)),le(t,S_),Ps(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;o=N(o.boundaryPrefix+i.toString(16)),r=r.id=o,Am(t,e.responseState,r),Ps(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Am(t,e.responseState,r.id),Ps(e,t,n);else{if(le(t,h_),n=r.completedSegments,n.length!==1)throw Error(V(391));Fl(e,t,n[0])}return le(t,x_)}function Jm(e,t,n){return V_(t,e.responseState,n.formatContext,n.id),Fl(e,t,n),W_(t,n.formatContext)}function Km(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)By(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,A(t,e.startInlineScript),e.sentCompleteBoundaryFunction?A(t,X_):(e.sentCompleteBoundaryFunction=!0,A(t,Q_)),r===null)throw Error(V(395));return n=q(n.toString(16)),A(t,r),A(t,Y_),A(t,e.segmentPrefix),A(t,n),le(t,Z_)}function By(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(V(392));return Jm(e,t,r)}return Jm(e,t,r),e=e.responseState,A(t,e.startInlineScript),e.sentCompleteSegmentFunction?A(t,G_):(e.sentCompleteSegmentFunction=!0,A(t,q_)),A(t,e.segmentPrefix),o=q(o.toString(16)),A(t,o),A(t,J_),A(t,e.placeholderPrefix),A(t,o),le(t,K_)}function Wf(e,t){dt=new Uint8Array(512),ft=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Fl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)A(t,r[n]);n<r.length&&le(t,r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(A(r,l.startInlineScript),l.sentClientRenderFunction?A(r,t3):(l.sentClientRenderFunction=!0,A(r,e3)),u===null)throw Error(V(395));A(r,u),A(r,n3),(c||d||f)&&(A(r,Ou),A(r,q(zu(c||"")))),(d||f)&&(A(r,Ou),A(r,q(zu(d||"")))),f&&(A(r,Ou),A(r,q(zu(f)))),le(r,r3)}o.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)Km(e,t,h[i]);h.splice(0,i),Em(t),dt=new Uint8Array(512),ft=0;var v=e.partialBoundaries;for(i=0;i<v.length;i++){var g=v[i];e:{o=e,s=t;var S=g.completedSegments;for(l=0;l<S.length;l++)if(!By(o,s,g,S[l])){l++,S.splice(0,l);var b=!1;break e}S.splice(0,l),b=!0}if(!b){e.destination=null,i++,v.splice(0,i);return}}v.splice(0,i);var x=e.completedBoundaries;for(i=0;i<x.length;i++)Km(e,t,x[i]);x.splice(0,i)}finally{Em(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Qm(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return My(r,e,t)}),n.clear(),e.destination!==null&&Wf(e,e.destination)}catch(r){Ui(e,r),Za(e,r)}}Of.renderToReadableStream=function(e,t){return new Promise(function(n,r){var o,i,s=new Promise(function(d,f){i=d,o=f}),l=y3(e,t_(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),n_(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,i,function(){var d=new ReadableStream({type:"bytes",pull:function(f){if(l.status===1)l.status=2,wy(f,l.fatalError);else if(l.status!==2&&l.destination===null){l.destination=f;try{Wf(l,f)}catch(h){Ui(l,h),Za(l,h)}}},cancel:function(){Qm(l)}},{highWaterMark:0});d.allReady=s,n(d)},function(d){s.catch(function(){}),r(d)},o);if(t&&t.signal){var u=t.signal,c=function(){Qm(l,u.reason),u.removeEventListener("abort",c)};u.addEventListener("abort",c)}Uy(l)})};Of.version="18.3.1";var Lo,Hy;Lo=Io,Hy=Of;Fr.version=Lo.version;Fr.renderToString=Lo.renderToString;Fr.renderToStaticMarkup=Lo.renderToStaticMarkup;Fr.renderToNodeStream=Lo.renderToNodeStream;Fr.renderToStaticNodeStream=Lo.renderToStaticNodeStream;Fr.renderToReadableStream=Hy.renderToReadableStream;var b3=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty($f,"__esModule",{value:!0});const Ut=b3(w),S3=Fr,j3=["string","number","boolean"];function k3({header:e,body:t}){const n=Ut.default.createElement("tr",null,e.map(o=>Ut.default.createElement("th",{key:o},o))),r=t.map((o,i)=>Array.isArray(o)?Ut.default.createElement("tr",{key:i},o.map((s,l)=>Ut.default.createElement("th",{key:l}," ",s," "))):o!==null&&typeof o=="object"?Ut.default.createElement("tr",{key:i},Object.entries(o).map(([s,l],u)=>typeof l=="object"?(console.error(`typeof ${s} is incorrect, only accept ${j3.join(", ")} `),Ut.default.createElement("th",{key:u})):Ut.default.createElement("th",{key:u},Ut.default.createElement(Ut.default.Fragment,null,l)))):(console.error(`
       data structure is incorrect,  
       data structure type -> 
       " type data = Array<{ [key: string]: string | number | boolean }> 
                         or 
        type data = Array<(string | number | boolean)[]>"
      `),null));return(0,S3.renderToString)(Ut.default.createElement("table",null,Ut.default.createElement("tbody",null,n,r)))}$f.default=k3;(function(e){var t=ot&&ot.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=e.template=e.uri=e.format=e.base64=void 0;function n(i){return window.btoa(unescape(encodeURIComponent(i)))}e.base64=n;function r(i,s){return i.replace(/{(\w+)}/g,(l,u)=>s[u])}e.format=r,e.uri="data:application/vnd.ms-excel;base64,",e.template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{table}</body></html>';var o=$f;Object.defineProperty(e,"createTable",{enumerable:!0,get:function(){return t(o).default}})})(Gx);var E3=ot&&ot.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),C3=ot&&ot.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),$3=ot&&ot.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&E3(t,e,n);return C3(t,e),t};Object.defineProperty(zr,"__esModule",{value:!0});zr.downloadExcel=zr.excel=void 0;const ni=$3(Gx);function Vy(){return document?!0:((process==null?void 0:"production")!=="production"&&console.error("Failed to access document object"),!1)}function Wy(e,t){const n=window.document.createElement("a");return n.href=ni.uri+ni.base64(ni.format(ni.template,t)),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),!0}function qy(e,t){if(e)return e.cloneNode(!0).outerHTML;if(t)return ni.createTable(t);console.error("currentTableRef or tablePayload does not exist")}function _3({fileName:e,sheet:t,tablePayload:n},r){if(!Vy())return!1;const o=qy(r,n);return Wy(e,{worksheet:t||"Worksheet",table:o})}zr.downloadExcel=_3;function R3({currentTableRef:e,filename:t,sheet:n}){function r(){if(!Vy())return!1;const o=qy(e),i=`${t}.xls`;return Wy(i,{worksheet:n||"Worksheet",table:o})}return{onDownload:r}}zr.excel=R3;Object.defineProperty(Ll,"__esModule",{value:!0});Ll.useDownloadExcel=void 0;const Mu=w,P3=zr;function N3({currentTableRef:e,filename:t,sheet:n}){const[r,o]=(0,Mu.useState)({});return(0,Mu.useEffect)(()=>{o({currentTableRef:e,filename:t,sheet:n})},[e,t,n]),(0,Mu.useMemo)(()=>(0,P3.excel)(r),[r])}Ll.useDownloadExcel=N3;(function(e){var t=ot&&ot.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(e,"__esModule",{value:!0}),e.downloadExcel=e.useDownloadExcel=e.DownloadTableExcel=void 0;const n=t(w),r=Ll;Object.defineProperty(e,"useDownloadExcel",{enumerable:!0,get:function(){return r.useDownloadExcel}});const o=zr;Object.defineProperty(e,"downloadExcel",{enumerable:!0,get:function(){return o.downloadExcel}});const i=({currentTableRef:s,filename:l,sheet:u,children:c})=>{const{onDownload:d}=(0,r.useDownloadExcel)({currentTableRef:s,filename:l,sheet:u});return n.default.createElement("span",{onClick:d},c)};e.DownloadTableExcel=i})(St);const Gy="https://backend-riosdevida-production.up.railway.app",Xm=`${Gy}/api/miembros`,Ym=`${Gy}/api/miembros/lider`;function T3(){const{auth:e}=w.useContext(Zi),[t,n]=w.useState([]),[r,o]=w.useState([]),[i,s]=w.useState(null),l=w.useRef(null),u=localStorage.getItem("token"),c=localStorage.getItem("idUser"),d=localStorage.getItem("rol");w.useEffect(()=>{f(),d===2&&h()},[e]);const f=async(b=c)=>{try{const x=b?await P.get(`${Ym}/${b}`,{headers:{Authorization:`Bearer ${u}`}}):await P.get(e.id_rol===3?`${Ym}/${e.id_usuario}`:Xm,{headers:{Authorization:`Bearer ${u}`}});n(x.data)}catch(x){console.error("Error al obtener los miembros:",x),x.response&&x.response.status===401&&console.log("Token expiró")}},h=async()=>{try{const b=await P.get(`/supervisores/${c}/lideres`,{headers:{Authorization:`Bearer ${u}`}});o(b.data)}catch(b){console.error("Error al obtener líderes:",b)}},v=async b=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${Xm}/${b}`,{headers:{Authorization:`Bearer ${u}`}}),f()}catch(x){console.error("Error al eliminar el miembro:",x),x.response&&x.response.status===401?console.log("Token expiró o no autorizado."):alert("Ocurrió un error al eliminar el miembro. Por favor, intenta de nuevo.")}},g=b=>{const x=b.target.value||null;s(x),f(x)},{onDownload:S}=St.useDownloadExcel({currentTableRef:l.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(I3,{children:[a.jsx(L3,{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})}),a.jsxs(A3,{children:[a.jsxs(G,{to:"/crearMiembro",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:S,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Miembros"]})]}),e.id_rol===2&&a.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[a.jsx("label",{htmlFor:"liderSelect",children:"Seleccionar Líder:"}),a.jsxs("select",{id:"liderSelect",onChange:g,value:i||"",style:{marginLeft:"10px"},children:[a.jsx("option",{value:"",children:"Ver todos los miembros"}),r.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.nombre," ",b.apellido]},b.id_lider))]})]}),a.jsxs(O3,{striped:!0,bordered:!0,hover:!0,ref:l,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:t.map((b,x)=>a.jsxs("tr",{children:[a.jsx("td",{children:x+1}),a.jsx("td",{children:b.nombre}),a.jsx("td",{children:b.apellido}),a.jsx("td",{children:b.Líder?`${b.Líder.nombre} ${b.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarMiembros/${b.id_miembro}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>v(b.id_miembro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},b.id_miembro))})]})]})}const I3=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,L3=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,A3=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,O3=k(At)`
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
`,z3="https://backend-riosdevida-production.up.railway.app",D3=`${z3}/api/miembros`,M3=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(localStorage.getItem("idUser")),s=me(),l=localStorage.getItem("token"),u=async d=>{d.preventDefault();try{await P.post(D3,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${l}`}}),s("/planillaLider")}catch(f){console.error("Error al crear el miembro:",f)}},c=()=>{s("/planillaLider")};return a.jsx(F3,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:u,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})},F3=k.div`
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
`,U3="https://backend-riosdevida-production.up.railway.app",Zm=`${U3}/api/miembros/`,B3=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(localStorage.getItem("idUser")),s=me(),{id:l}=ur(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await P.put(Zm+l,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${u}`}}),s("/planillaLider")};w.useEffect(()=>{d()},[]);const d=async()=>{const h=await P.get(Zm+l,{headers:{Authorization:`Bearer ${u}`}});t(h.data.nombre),r(h.data.apellido)},f=()=>{s("/planillaLider")};return a.jsx(H3,{children:a.jsx(V3,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:h=>t(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:h=>r(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},H3=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,V3=k.div`
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
`,Jy="https://backend-riosdevida-production.up.railway.app",W3=`${Jy}/api/asistencia`,q3=`${Jy}/api/asistencia/lider/`;function G3(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),s=w.useRef(null);w.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const v=await P.get(`${q3}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(v.data),r(v.data)}catch(v){console.error("Error al obtener los miembros",v),v.response&&v.response.status===401&&console.log("Token expiró")}},d=v=>{const g=v.target.value;if(i(g),g){const S=e.filter(b=>b.fecha===g);r(S)}else r(e)},f=async v=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${W3}/${v}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(g){console.error("Error al eliminar un Miembro:",g)}},{onDownload:h}=St.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros Lautaro",sheet:"Miembros"});return a.jsxs(J3,{children:[a.jsx(K3,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsxs(Q3,{children:[a.jsxs(G,{to:"/crearAsistencia",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Asistencia"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})]}),a.jsxs(X3,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:d})]}),a.jsxs(Y3,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((v,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:v.miembro?`${v.miembro.nombre} ${v.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:v.asistencia}),a.jsx("td",{children:v.fecha}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarAsistencia/${v.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>f(v.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},v.id_miembro_planilla))})]})]})}const J3=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,K3=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,Q3=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,X3=k.div`
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
`,Y3=k(At)`
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
`,Ky="https://backend-riosdevida-production.up.railway.app",Z3=`${Ky}/api/planilla`,eR=`${Ky}/api/planilla/planillasLider/`;function tR(){const[e,t]=w.useState([]),n=w.useRef(null),[r,o]=w.useState([]),[i,s]=w.useState("");w.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const v=await P.get(`${eR}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(v.data),o(v.data)}catch(v){console.error("Error al obtener los miembros",v),v.response&&v.response.status===401&&console.log("Token expiró")}},d=v=>{const g=v.target.value;if(s(g),g){const S=e.filter(b=>b.fecha===g);o(S)}else o(e)},f=async v=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla??"))try{await P.delete(`${Z3}/${v}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(g){console.error("Error al eliminar un Planilla:",g)}},{onDownload:h}=St.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Miembros Celula",sheet:"Miembros"});return a.jsxs(nR,{children:[a.jsx(rR,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsxs(oR,{children:[a.jsxs(G,{to:"/crearPlanillaGeneral",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Pllanillas"]})]}),a.jsxs(sR,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:i,onChange:d})]}),a.jsxs(iR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Numero de Planilla"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrion"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jovenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:" Fecha"}),a.jsx("th",{children:" Botones"})]})}),a.jsx("tbody",{children:r.map((v,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:v.id_planilla}),a.jsx("td",{children:`${v.Lider.nombre} ${v.Lider.apellido}`}),a.jsx("td",{children:`${v.Supervisor.nombre} ${v.Supervisor.apellido}`}),a.jsx("td",{children:v.anfitrion}),a.jsx("td",{children:v.ayudante}),a.jsx("td",{children:v.total_invitados}),a.jsx("td",{children:v.total_jov_adult}),a.jsx("td",{children:v.total_ninos}),a.jsx("td",{children:v.total_participantes}),a.jsx("td",{children:v.conv_rec}),a.jsx("td",{children:v.ofrenda}),a.jsx("td",{children:v.fecha}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarPlanillaGeneral/${v.id_planilla}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>f(v.id_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},v.id_planilla))})]})]})}const nR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,rR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,oR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,iR=k(At)`
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
`,sR=k.div`
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
`,Qy="https://backend-riosdevida-production.up.railway.app",aR=`${Qy}/api/planilla`,lR=`${Qy}/api/planilla/supervisorPorLider/`,uR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,v]=w.useState(""),[g,S]=w.useState(""),[b,x]=w.useState(""),[m,p]=w.useState(""),[y,j]=w.useState(localStorage.getItem("idUser")),[E,$]=w.useState([]),C=me(),O=localStorage.getItem("token"),z=localStorage.getItem("idUser");w.useEffect(()=>{(async()=>{try{const xe=await P.get(`${lR}${z}`,{headers:{Authorization:`Bearer ${O}`}});$(xe.data)}catch(xe){console.error("Error al obtener líderes o supervisores",xe)}})()},[O]);const ee=async T=>{T.preventDefault();try{await P.post(aR,{id_lider:y,id_supervisor:e,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:g,ofrenda:b,fecha:m},{headers:{Authorization:`Bearer ${O}`}}),C("/generalPlanilla")}catch(xe){console.error("Error al crear la planilla",xe)}},be=()=>{C("/generalPlanilla")};return a.jsx(cR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:ee,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:T=>t(T.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),E.map(T=>a.jsxs("option",{value:T.id_supervisor,children:[T.supervisor.nombre," ",T.supervisor.apellido]},T.id_supervisor))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:T=>r(T.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:T=>i(T.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:T=>l(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:T=>c(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:T=>f(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:T=>v(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:g,onChange:T=>S(T.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:T=>x(T.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:m,onChange:T=>p(T.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:be,children:"Cancelar"})]})]})]})})},cR=k.div`
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
`,dR="https://backend-riosdevida-production.up.railway.app",e0=`${dR}/api/planilla/`,fR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,v]=w.useState(""),[g,S]=w.useState(""),[b,x]=w.useState(""),m=me(),{id:p}=ur(),y=localStorage.getItem("token"),j=async C=>{C.preventDefault(),await P.put(e0+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:g,fecha:b},{headers:{Authorization:`Bearer ${y}`}}),m("/generalPlanilla")};w.useEffect(()=>{E()},[]);const E=async()=>{const C=await P.get(e0+p,{headers:{Authorization:`Bearer ${y}`}}),{anfitrion:O,ayudante:z,total_invitados:ee,total_jov_adult:be,total_ninos:T,total_participantes:xe,conv_rec:cr,ofrenda:fn,fecha:Ot}=C.data;t(O),r(z),i(ee),l(be),c(T),f(xe),v(cr),S(fn),x(Ot)},$=()=>{m("/generalPlanilla")};return a.jsx(pR,{children:a.jsx(hR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:C=>t(C.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:C=>r(C.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:C=>i(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:C=>l(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:C=>c(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:C=>f(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:C=>v(C.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:g,onChange:C=>S(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:C=>x(C.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,children:"Cancelar"})]})]})]})})})},pR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,hR=k.div`
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
`,Xy="https://backend-riosdevida-production.up.railway.app",mR=`${Xy}/api/asistencia`,gR=`${Xy}/api/miembros/lider/`,vR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState("presente"),[o,i]=w.useState(""),[s,l]=w.useState([]),[u,c]=w.useState(localStorage.getItem("idUser")),d=me(),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");w.useEffect(()=>{(async()=>{try{const b=await P.get(`${gR}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(b.data)}catch(b){console.error("Error al obtener miembros",b)}})()},[f]);const v=async S=>{S.preventDefault();try{await P.post(mR,{id_miembro:e,asistencia:n,fecha:o,id_lider:u},{headers:{Authorization:`Bearer ${f}`}}),d("/asistencia")}catch(b){console.error("Error al crear la planilla",b)}},g=()=>{d("/asistencia")};return a.jsx(xR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asistencia"}),a.jsxs("form",{onSubmit:v,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Miembro"}),a.jsxs("select",{value:e,onChange:S=>t(S.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Miembro"}),s.map(S=>a.jsxs("option",{value:S.id_miembro,children:[S.nombre," ",S.apellido]},S.id_miembro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:S=>r(S.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:S=>i(S.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:g,children:"Cancelar"})]})]})]})})},xR=k.div`
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
`,yR="https://backend-riosdevida-production.up.railway.app",t0=`${yR}/api/asistencia/`,wR=()=>{const[e,t]=w.useState({nombre:"",apellido:""}),[n,r]=w.useState(""),[o,i]=w.useState(""),s=me(),{id:l}=ur(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await P.put(t0+l,{miembro:e,asistencia:n,fecha:o},{headers:{Authorization:`Bearer ${u}`}}),s("/asistencia")};w.useEffect(()=>{d()},[]);const d=async()=>{const h=await P.get(t0+l,{headers:{Authorization:`Bearer ${u}`}});t({nombre:h.data.miembro.nombre,apellido:h.data.miembro.apellido}),r(h.data.asistencia),i(h.data.fecha)},f=()=>{s("/asistencia")};return a.jsx(bR,{children:a.jsx(SR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla de Asistencia"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e.nombre,onChange:h=>t({...e,nombre:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:e.apellido,onChange:h=>t({...e,apellido:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:h=>i(h.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},bR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,SR=k.div`
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

`,jR="https://backend-riosdevida-production.up.railway.app",n0=`${jR}/api/usuarios/`;function kR(){const[e,t]=w.useState([]),n=w.useRef(null);w.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(n0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${n0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=St.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(ER,{children:[a.jsx(CR,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsxs($R,{children:[a.jsxs(G,{to:"/crearUsuario",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Usuario"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Usuarios"]})]}),a.jsxs(_R,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Correo"}),a.jsx("th",{children:"Rol"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre}),a.jsx("td",{children:l.apellido}),a.jsx("td",{children:l.correo}),a.jsx("td",{children:l.Rol?l.Rol.nombre_rol:"Sin rol"}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarUsuario/${l.id_usuario}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>i(l.id_usuario),className:"btn btn-danger",children:a.jsx(It,{})})]})]},l.id_usuario))})]})]})}const ER=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,CR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,$R=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,_R=k(At)`
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
`,Yy="https://backend-riosdevida-production.up.railway.app",RR=`${Yy}/api/usuarios/`,PR=`${Yy}/api/roles`,NR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState([]),h=me(),v=localStorage.getItem("token"),g=async x=>{x.preventDefault();try{await P.post(RR,{nombre:e,apellido:n,correo:o,contraseña:s,id_rol:u},{headers:{Authorization:`Bearer ${v}`}}),h("/registroUsuarios")}catch(m){console.error("Error al crear el miembro:",m)}},S=async()=>{try{const x=await P.get(PR,{headers:{Authorization:`Bearer ${v}`}});f(x.data)}catch(x){console.error("Error al obtener los líderes:",x)}};w.useEffect(()=>{S()},[]);const b=()=>{h("/registroUsuarios")};return a.jsx(TR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:g,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:x=>t(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:x=>r(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:x=>i(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:x=>l(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:x=>c(x.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar "}),d.map(x=>a.jsxs("option",{value:x.id_rol,children:[x.nombre_rol,"  (ID: ",x.id_rol,")"]},x.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:b,children:"Cancelar"})]})]})]})})},TR=k.div`
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
`,IR="https://backend-riosdevida-production.up.railway.app",r0=`${IR}/api/usuarios/`,LR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState([]),h=me(),{id:v}=ur(),g=localStorage.getItem("token"),S=async p=>{p.preventDefault(),await P.put(r0+v,{nombre:e,apellido:n,id_rol:u,correo:o,contraseña:s},{headers:{Authorization:`Bearer ${g}`}}),h("/registroUsuarios")},b=async()=>{try{const p=await P.get("http://localhost:4000/api/roles",{headers:{Authorization:`Bearer ${g}`}});f(p.data)}catch(p){console.error("Error al obtener los roles:",p)}};w.useEffect(()=>{x(),b()},[]);const x=async()=>{const p=await P.get(r0+v,{headers:{Authorization:`Bearer ${g}`}});t(p.data.nombre),r(p.data.apellido),i(p.data.correo),l(p.data.contraseña),c(p.data.id_rol)},m=()=>{h("/registroUsuarios")};return a.jsx(AR,{children:a.jsx(OR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Usuario"}),a.jsxs("form",{onSubmit:S,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:p=>t(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:p=>r(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:p=>i(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:p=>l(p.target.value),type:"password",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:p=>c(p.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar"}),d.map(p=>a.jsxs("option",{value:p.id_rol,children:[p.nombre_rol," (ID: ",p.id_rol,")"]},p.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Cancelar"})]})]})]})})})},AR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,OR=k.div`
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
`,zR="https://backend-riosdevida-production.up.railway.app",o0=`${zR}/api/supervisorLider/`;function DR(){const[e,t]=w.useState([]),n=w.useRef(null);w.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(o0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${o0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=St.useDownloadExcel({currentTableRef:n.current,filename:"Planilla de Supervisores",sheet:"Usuarios"});return a.jsxs(MR,{children:[a.jsx(FR,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsxs(UR,{children:[a.jsxs(G,{to:"/crearAsignarSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Asignar Supervisor"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Planilla de Supervisores"]})]}),a.jsxs(BR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre de Supervisor"}),a.jsx("th",{children:"Nombre de Lider"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:`${l.supervisor.nombre} ${l.supervisor.apellido}`}),a.jsx("td",{children:`${l.lider.nombre} ${l.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarAsignacionSupervisor/${l.id_registro}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>i(l.id_registro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},l.id_registro))})]})]})}const MR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,FR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,UR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,BR=k(At)`
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
`,qf="https://backend-riosdevida-production.up.railway.app",HR=`${qf}/api/supervisorLider/`,VR=`${qf}/api/usuarios/historiallider/`,WR=`${qf}/api/usuarios/historialSupervisor/`,qR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState([]),[s,l]=w.useState([]),u=me(),c=localStorage.getItem("token");w.useEffect(()=>{const h=async()=>{try{const g=await P.get(VR,{headers:{Authorization:`Bearer ${c}`}});i(g.data)}catch(g){console.error("Error al obtener Lider",g)}},v=async()=>{try{const g=await P.get(WR,{headers:{Authorization:`Bearer ${c}`}});l(g.data)}catch(g){console.error("Error al obtener Supervisor",g)}};h(),v()},[c]);const d=async h=>{h.preventDefault();try{await P.post(HR,{id_lider:e,id_supervisor:n},{headers:{Authorization:`Bearer ${c}`}}),u("/asignarSupervisor")}catch(v){console.error("Error al crear la asignación",v)}},f=()=>{u("/asignarSupervisor")};return a.jsx(GR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asignación de Supervisor"}),a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Lider"}),a.jsxs("select",{value:e,onChange:h=>t(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Lider"}),o.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})},GR=k.div`
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
`,Gf="https://backend-riosdevida-production.up.railway.app",i0=`${Gf}/api/supervisorLider/`,JR=`${Gf}/api/usuarios/historiallider/`,KR=`${Gf}/api/usuarios/historialSupervisor/`,QR=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState([]),[s,l]=w.useState([]),u=me(),{id:c}=ur(),d=localStorage.getItem("token"),f=async v=>{v.preventDefault();try{await P.put(i0+c,{id_supervisor:e,id_lider:n},{headers:{Authorization:`Bearer ${d}`}}),u("/asignarSupervisor")}catch(g){console.error("Error al actualizar la asignación",g)}};w.useEffect(()=>{const v=async()=>{try{const b=await P.get(JR,{headers:{Authorization:`Bearer ${d}`}});i(b.data)}catch(b){console.error("Error al obtener Liders",b)}},g=async()=>{try{const b=await P.get(KR,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener Supervisores",b)}};(async()=>{try{const b=await P.get(i0+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.id_supervisor),r(b.data.id_lider)}catch(b){console.error("Error al obtener los datos del usuario",b)}})(),v(),g()},[d,c]);const h=()=>{u("/asignarSupervisor")};return a.jsx(XR,{children:a.jsx(YR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Asignación de Supervisor"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:n,onChange:v=>r(v.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),o.map(v=>a.jsxs("option",{value:v.id_usuario,children:[v.nombre," ",v.apellido," (ID: ",v.id_usuario,")"]},v.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:v=>t(v.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(v=>a.jsxs("option",{value:v.id_usuario,children:[v.nombre," ",v.apellido," (ID: ",v.id_usuario,")"]},v.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"Cancelar"})]})]})]})})})},XR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,YR=k.div`
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
`,ZR="https://backend-riosdevida-production.up.railway.app",s0=`${ZR}/api/roles`;function e4(){const[e,t]=w.useState([]),n=w.useRef(null);w.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(s0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${s0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=St.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(t4,{children:[a.jsx(n4,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsxs(r4,{children:[a.jsxs(G,{to:"/crearUnRol",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Un Rol"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Roles"]})]}),a.jsxs(o4,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre Del Rol"}),a.jsx("th",{children:"Descripcion"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre_rol}),a.jsx("td",{children:l.descripcion}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarRol/${l.id_rol}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>i(l.id_rol),className:"btn btn-danger",children:a.jsx(It,{})})]})]},l.id_rol))})]})]})}const t4=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,n4=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,r4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,o4=k(At)`
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
`,i4="https://backend-riosdevida-production.up.railway.app",s4=`${i4}/api/roles`,a4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),o=me(),i=localStorage.getItem("token"),s=async u=>{u.preventDefault();try{await P.post(s4,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${i}`}}),o("/registroDeRoles")}catch(c){console.error("Error al crear el miembro:",c)}},l=()=>{o("/registroDeRoles")};return a.jsx(l4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:s,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre del Rol"}),a.jsx("input",{value:e,onChange:u=>t(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:u=>r(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:l,children:"Cancelar"})]})]})]})})},l4=k.div`
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
`,u4="https://backend-riosdevida-production.up.railway.app",a0=`${u4}/api/roles/`,c4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),o=me(),{id:i}=ur(),s=localStorage.getItem("token"),l=async d=>{d.preventDefault(),await P.put(a0+i,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${s}`}}),o("/registroDeRoles")};w.useEffect(()=>{u()},[]);const u=async()=>{const d=await P.get(a0+i,{headers:{Authorization:`Bearer ${s}`}});t(d.data.nombre_rol),r(d.data.descripcion)},c=()=>{o("/registroDeRoles")};return a.jsx(d4,{children:a.jsx(f4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre Del Rol"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})})},d4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,f4=k.div`
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
`,Ul="https://backend-riosdevida-production.up.railway.app",p4=`${Ul}/api/supervisorLider/supervisor/`,h4=`${Ul}/api/supervisorLider/supervisorLiderMiembro/`,m4=`${Ul}/api/miembros/lider/`,g4=`${Ul}/api/miembros/`;function v4(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),s=w.useRef(null),l=localStorage.getItem("token"),u=localStorage.getItem("idUser");w.useEffect(()=>{c(),d()},[]);const c=async()=>{try{const g=await P.get(`${p4}${u}`,{headers:{Authorization:`Bearer ${l}`}});r(g.data)}catch(g){console.error("Error al obtener los líderes",g)}},d=async(g="")=>{try{const S=g?`${m4}${g}`:`${h4}${u}`,b=await P.get(S,{headers:{Authorization:`Bearer ${l}`}});t(b.data)}catch(S){console.error("Error al obtener los miembros",S)}},f=g=>{const S=g.target.value;i(S),d(S)},h=async g=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${g4}${g}`,{headers:{Authorization:`Bearer ${l}`}}),d(o)}catch(S){console.error("Error al eliminar un miembro:",S)}},{onDownload:v}=St.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(x4,{children:[a.jsx(y4,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsxs(w4,{children:[a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:o,onChange:f,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(g=>a.jsxs("option",{value:g.id_lider,children:[g.lider.nombre," ",g.lider.apellido]},g.id_lider))]})]}),a.jsxs(G,{to:"/crearMiembroSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:v,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Roles"]})]}),a.jsxs(b4,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:e.map((g,S)=>a.jsxs("tr",{children:[a.jsx("td",{children:S+1}),a.jsx("td",{children:g.nombre}),a.jsx("td",{children:g.apellido}),a.jsx("td",{children:g.Líder?`${g.Líder.nombre} ${g.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarMiembroSupervisor/${g.id_miembro}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>h(g.id_miembro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},g.id_miembro))})]})]})}const x4=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,y4=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,w4=k.div`
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
`,b4=k(At)`
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
`,Zy="https://backend-riosdevida-production.up.railway.app",S4=`${Zy}/api/miembros`,j4=`${Zy}/api/supervisorLider/supervisor/`,k4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState([]),u=me(),c=localStorage.getItem("token"),d=localStorage.getItem("idUser"),f=async g=>{g.preventDefault();try{await P.post(S4,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${c}`}}),u("/registroLideryMiembro")}catch(S){console.error("Error al crear el miembro:",S)}},h=async()=>{try{const g=await P.get(`${j4}${d}`,{headers:{Authorization:`Bearer ${c}`}});l(g.data)}catch(g){console.error("Error al obtener los líderes",g)}};w.useEffect(()=>{h()},[]);const v=()=>{u("/registroLideryMiembro")};return a.jsx(E4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:g=>t(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:g=>r(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:g=>i(g.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(g=>a.jsxs("option",{value:g.id_lider,children:[g.lider.nombre," ",g.lider.apellido]},g.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:v,children:"Cancelar"})]})]})]})})},E4=k.div`
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
`,e1="https://backend-riosdevida-production.up.railway.app",l0=`${e1}/api/miembros/`,C4=`${e1}/api/supervisorLider/supervisor/`,$4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState([]),u=me(),{id:c}=ur(),d=localStorage.getItem("token"),f=localStorage.getItem("idUser"),h=async b=>{b.preventDefault(),await P.put(l0+c,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${d}`}}),u("/registroLideryMiembro")};w.useEffect(()=>{g(),v()},[]);const v=async()=>{try{const b=await P.get(`${C4}${f}`,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener los líderes",b)}},g=async()=>{try{const b=await P.get(l0+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.nombre),r(b.data.apellido),i(b.data.id_líder)}catch(b){console.error("Error al obtener el miembro",b)}},S=()=>{u("/registroLideryMiembro")};return a.jsx(_4,{children:a.jsx(R4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Miembro"}),a.jsxs("form",{onSubmit:h,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:b=>t(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:b=>r(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:b=>i(b.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.lider.nombre," ",b.lider.apellido]},b.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,children:"Cancelar"})]})]})]})})})},_4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,R4=k.div`
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
`,Jf="https://backend-riosdevida-production.up.railway.app",P4=`${Jf}/api/asistencia`,N4=`${Jf}/api/asistencia/asistenciaSupervisor/`,T4=`${Jf}/api/supervisorLider/supervisor/`;function I4(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState([]),[u,c]=w.useState(""),d=w.useRef(null),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");w.useEffect(()=>{v(),g()},[]);const v=async()=>{try{const y=await P.get(`${N4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(y.data),r(y.data)}catch(y){console.error("Error al obtener las asistencias:",y)}},g=async()=>{try{const y=await P.get(`${T4}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(y.data)}catch(y){console.error("Error al obtener los líderes:",y)}},S=(y,j)=>{let E=e;y&&(E=E.filter($=>$.fecha===y)),j&&(E=E.filter($=>$.id_lider===parseInt(j))),r(E)},b=y=>{const j=y.target.value;i(j),S(j,u)},x=y=>{const j=y.target.value;c(j),S(o,j)},m=async y=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await P.delete(`${P4}/${y}`,{headers:{Authorization:`Bearer ${f}`}});const j=e.filter($=>$.id_miembro_planilla!==y);t(j);const E=j.filter($=>{const C=!o||$.fecha===o,O=!u||$.id_lider===parseInt(u);return C&&O});r(E)}catch(j){console.error("Error al eliminar la asistencia:",j)}},{onDownload:p}=St.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(L4,{children:[a.jsx(A4,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsx(O4,{children:a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})}),a.jsxs(z4,{children:[a.jsxs(u0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:b})]}),a.jsxs(u0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:x,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(y=>a.jsxs("option",{value:y.id_lider,children:[y.lider.nombre," ",y.lider.apellido]},y.id_lider))]})]})]}),a.jsxs(D4,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((y,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:y.miembro?`${y.miembro.nombre} ${y.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:y.asistencia}),a.jsx("td",{children:y.lider?`${y.lider.nombre} ${y.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:y.fecha}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarAsistencia/${y.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>m(y.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},y.id_miembro_planilla))})]})]})}const L4=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,A4=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,O4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,z4=k.div`
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
`,u0=k.div`
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
`,D4=k(At)`
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
`,Kf="https://backend-riosdevida-production.up.railway.app",M4=`${Kf}/api/planilla`,F4=`${Kf}/api/planilla/planillasLiderSupervisor/`,U4=`${Kf}/api/supervisorLider/supervisor/`;function B4(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState([]),d=w.useRef(null);w.useEffect(()=>{g(),v()},[]);const f=localStorage.getItem("token"),h=localStorage.getItem("idUser"),v=async()=>{try{const y=await P.get(`${U4}${h}`,{headers:{Authorization:`Bearer ${f}`}});c(y.data)}catch(y){console.error("Error al obtener los líderes:",y)}},g=async()=>{try{const y=await P.get(`${F4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(y.data),r(y.data)}catch(y){console.error("Error al obtener las planillas:",y)}},S=y=>{const j=y.target.value;i(j),x(j,s)},b=y=>{const j=y.target.value;l(j),x(o,j)},x=(y,j)=>{let E=e;y&&(E=E.filter($=>$.fecha===y)),j&&(E=E.filter($=>$.id_lider.toString()===j)),r(E)},m=async y=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await P.delete(`${M4}/${y}`,{headers:{Authorization:`Bearer ${f}`}}),g()}catch(j){console.error("Error al eliminar la planilla:",j)}},{onDownload:p}=St.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(H4,{children:[a.jsx(V4,{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})}),a.jsxs(W4,{children:[a.jsxs(G,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Planillas"]})]}),a.jsxs(G4,{children:[a.jsxs(c0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(c0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(y=>a.jsx("option",{value:y.id_lider,children:`${y.lider.nombre} ${y.lider.apellido}`},y.id_lider))]})]})]}),a.jsxs(q4,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((y,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:y.id_planilla}),a.jsx("td",{children:`${y.Lider.nombre} ${y.Lider.apellido}`}),a.jsx("td",{children:`${y.Supervisor.nombre} ${y.Supervisor.apellido}`}),a.jsx("td",{children:y.anfitrion}),a.jsx("td",{children:y.ayudante}),a.jsx("td",{children:y.total_invitados}),a.jsx("td",{children:y.total_jov_adult}),a.jsx("td",{children:y.total_ninos}),a.jsx("td",{children:y.total_participantes}),a.jsx("td",{children:y.conv_rec}),a.jsx("td",{children:y.ofrenda}),a.jsx("td",{children:y.fecha}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarPlanillaGeneralSupervisor/${y.id_planilla}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>m(y.id_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},y.id_planilla))})]})]})}const H4=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,V4=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,W4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,q4=k(At)`
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
`,G4=k.div`
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
`,c0=k.div`
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
`,t1="https://backend-riosdevida-production.up.railway.app",J4=`${t1}/api/planilla`,K4=`${t1}/api/supervisorLider/supervisor/`,Q4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,v]=w.useState(""),[g,S]=w.useState(""),[b,x]=w.useState(""),[m,p]=w.useState(""),[y,j]=w.useState([]),[E,$]=w.useState(localStorage.getItem("idUser")),C=me(),O=localStorage.getItem("token"),z=localStorage.getItem("idUser");w.useEffect(()=>{(async()=>{try{const xe=await P.get(`${K4}${z}`,{headers:{Authorization:`Bearer ${O}`}});j(xe.data)}catch(xe){console.error("Error al obtener líderes o supervisores",xe)}})()},[O]);const ee=async T=>{T.preventDefault();try{await P.post(J4,{id_lider:e,id_supervisor:E,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:g,ofrenda:b,fecha:m},{headers:{Authorization:`Bearer ${O}`}}),C("/planillaGeneralSupervisor")}catch(xe){console.error("Error al crear la planilla",xe)}},be=()=>{C("/planillaGeneralSupervisor")};return a.jsx(X4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:ee,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:e,onChange:T=>t(T.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),y.map(T=>a.jsxs("option",{value:T.id_lider,children:[T.lider.nombre," ",T.lider.apellido]},T.id_registro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:T=>r(T.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:T=>i(T.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:T=>l(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:T=>c(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:T=>f(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:T=>v(T.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:g,onChange:T=>S(T.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:T=>x(T.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:m,onChange:T=>p(T.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:be,children:"Cancelar"})]})]})]})})},X4=k.div`
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
`,Y4="https://backend-riosdevida-production.up.railway.app",d0=`${Y4}/api/planilla/`,Z4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState(""),[d,f]=w.useState(""),[h,v]=w.useState(""),[g,S]=w.useState(""),[b,x]=w.useState(""),m=me(),{id:p}=ur(),y=localStorage.getItem("token"),j=async C=>{C.preventDefault(),await P.put(d0+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:g,fecha:b},{headers:{Authorization:`Bearer ${y}`}}),m("/planillaGeneralSupervisor")};w.useEffect(()=>{E()},[]);const E=async()=>{const C=await P.get(d0+p,{headers:{Authorization:`Bearer ${y}`}}),{anfitrion:O,ayudante:z,total_invitados:ee,total_jov_adult:be,total_ninos:T,total_participantes:xe,conv_rec:cr,ofrenda:fn,fecha:Ot}=C.data;t(O),r(z),i(ee),l(be),c(T),f(xe),v(cr),S(fn),x(Ot)},$=()=>{m("/planillaGeneralSupervisor")};return a.jsx(eP,{children:a.jsx(tP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:C=>t(C.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:C=>r(C.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:C=>i(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:C=>l(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:C=>c(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:C=>f(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:C=>v(C.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:g,onChange:C=>S(C.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:C=>x(C.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,children:"Cancelar"})]})]})]})})})},eP=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,tP=k.div`
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
`,ns="https://backend-riosdevida-production.up.railway.app",nP=`${ns}/api/supervisorLider/supervisor/`,rP=`${ns}/api/miembros/lider/`,oP=`${ns}/api/miembros/`,iP=`${ns}/api/usuarios/historiallider/`,sP=`${ns}/api/usuarios/historialSupervisor/`;function aP(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState([]),[s,l]=w.useState(""),[u,c]=w.useState(""),d=w.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),w.useEffect(()=>{h(),g(),v()},[]);const h=async()=>{try{const p=await P.get(iP,{headers:{Authorization:`Bearer ${f}`}});r(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},v=async()=>{try{const p=await P.get(sP,{headers:{Authorization:`Bearer ${f}`}});i(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},g=async(p="",y="")=>{try{let j=p?`${rP}${p}`:`${nP}${y}`;const E=await P.get(j,{headers:{Authorization:`Bearer ${f}`}});t(E.data)}catch(j){console.error("Error al obtener los miembros:",j)}},S=p=>{const y=p.target.value;l(y),c(""),g(y,"")},b=p=>{const y=p.target.value;c(y),l(""),g("",y)},x=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${oP}${p}`,{headers:{Authorization:`Bearer ${f}`}}),g(s),console.log(g)}catch(y){console.error("Error al eliminar un miembro:",y)}},{onDownload:m}=St.useDownloadExcel({currentTableRef:d.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(lP,{children:[a.jsx(uP,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsx(cP,{children:a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar"]})}),a.jsxs(fP,{children:[a.jsx(f0,{children:a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})}),a.jsx(f0,{children:a.jsxs("label",{children:["Filtrar por Supervisor:",a.jsxs("select",{value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),o.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})})]}),a.jsxs(dP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Accion"})]})}),a.jsx("tbody",{children:e.map((p,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:y+1}),a.jsx("td",{children:p.nombre?p.nombre:`${p.lider.nombre}`}),a.jsx("td",{children:p.apellido?p.apellido:`${p.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarMiembroSupervisor/${p.id_miembro}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>x(p.id_miembro),className:"btn btn-danger",children:a.jsx(It,{})})]})]},p.id_usuario))})]})]})}const lP=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,uP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,cP=k.div`
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
`,dP=k(At)`
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
`,fP=k.div`
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
`,f0=k.div`
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
`,n1="https://backend-riosdevida-production.up.railway.app",p0=`${n1}/api/asistencia`,pP=`${n1}/api/usuarios/historiallider`;function hP(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState([]),[u,c]=w.useState(""),d=w.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),w.useEffect(()=>{h(),v()},[]);const h=async()=>{try{const p=await P.get(p0,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las asistencias:",p)}},v=async()=>{try{const p=await P.get(pP,{headers:{Authorization:`Bearer ${f}`}});l(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},g=(p,y)=>{let j=e;p&&(j=j.filter(E=>E.fecha===p)),y&&(j=j.filter(E=>String(E.id_lider)===y)),r(j)},S=p=>{const y=p.target.value;i(y),g(y,u)},b=p=>{const y=p.target.value;c(y),g(o,y)},x=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await P.delete(`${p0}/${p}`,{headers:{Authorization:`Bearer ${f}`}});const y=e.filter(E=>E.id_miembro_planilla!==p);t(y);const j=y.filter(E=>{const $=!o||E.fecha===o,C=!u||E.id_lider===parseInt(u);return $&&C});r(j)}catch(y){console.error("Error al eliminar la asistencia:",y)}},{onDownload:m}=St.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(mP,{children:[a.jsx(gP,{children:a.jsx("div",{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})})}),a.jsx(vP,{children:a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})}),a.jsxs(xP,{children:[a.jsxs(h0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(h0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(p=>a.jsxs("option",{value:String(p.id_usuario),children:[p.nombre," ",p.apellido]},p.id_usuario))]})]})]}),a.jsxs(yP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((p,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:y+1}),a.jsx("td",{children:p.miembro?`${p.miembro.nombre} ${p.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:p.asistencia}),a.jsx("td",{children:p.lider?`${p.lider.nombre} ${p.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarAsistencia/${p.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>x(p.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},p.id_miembro_planilla))})]})]})}const mP=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,gP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,vP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,xP=k.div`
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
`,h0=k.div`
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
`,yP=k(At)`
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
`,r1="https://backend-riosdevida-production.up.railway.app",m0=`${r1}/api/planilla`,wP=`${r1}/api/usuarios/historiallider`;function bP(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[o,i]=w.useState(""),[s,l]=w.useState(""),[u,c]=w.useState([]),d=w.useRef(null);w.useEffect(()=>{v(),h()},[]);const f=localStorage.getItem("token");localStorage.getItem("idUser");const h=async()=>{try{const p=await P.get(wP,{headers:{Authorization:`Bearer ${f}`}});c(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},v=async()=>{try{const p=await P.get(m0,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las planillas:",p)}},g=p=>{const y=p.target.value;i(y),b(y,s)},S=p=>{const y=p.target.value;l(y),b(o,y)},b=(p,y)=>{let j=e;p&&(j=j.filter(E=>E.fecha===p)),y&&(j=j.filter(E=>E.id_lider.toString()===y)),r(j)},x=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await P.delete(`${m0}/${p}`,{headers:{Authorization:`Bearer ${f}`}}),v()}catch(y){console.error("Error al eliminar la planilla:",y)}},{onDownload:m}=St.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(SP,{children:[a.jsx(jP,{children:a.jsx(G,{to:"/menuInicio",children:a.jsx(bt,{})})}),a.jsxs(kP,{children:[a.jsxs(G,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Rn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Planillas"]})]}),a.jsxs(CP,{children:[a.jsxs(g0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:g})]}),a.jsxs(g0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(p=>a.jsx("option",{value:p.id_usuario,children:`${p.nombre} ${p.apellido}`},p.id_usuario))]})]})]}),a.jsxs(EP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((p,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:y+1}),a.jsx("td",{children:p.id_planilla}),a.jsx("td",{children:`${p.Lider.nombre} ${p.Lider.apellido}`}),a.jsx("td",{children:`${p.Supervisor.nombre} ${p.Supervisor.apellido}`}),a.jsx("td",{children:p.anfitrion}),a.jsx("td",{children:p.ayudante}),a.jsx("td",{children:p.total_invitados}),a.jsx("td",{children:p.total_jov_adult}),a.jsx("td",{children:p.total_ninos}),a.jsx("td",{children:p.total_participantes}),a.jsx("td",{children:p.conv_rec}),a.jsx("td",{children:p.ofrenda}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(G,{to:`/editarPlanillaGeneralSupervisor/${p.id_planilla}`,className:"btn btn-info",children:a.jsx(Tt,{})}),a.jsx("button",{onClick:()=>x(p.id_planilla),className:"btn btn-danger",children:a.jsx(It,{})})]})]},p.id_planilla))})]})]})}const SP=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,jP=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,kP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,EP=k(At)`
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
`,CP=k.div`
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
`,g0=k.div`
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
`,v0=["Dios Te Ama","Hey! Cuando no sepas a dónde ir, andá a Dios; Él te sigue esperando.","Tu tienes un gran valor para Dios","Yo siempre estoy contigo. att: Dios","Jesús te ama una banda","Sos muy Importante Para Mí, att: Dios","A pesar de todo te sigo Amando, att: Dios","No estoy enojado con vos, Te amo, att: Dios","Esfuerzate y se valiente, Yo estoy con vos ---> Siempre. ATT: Dios","Yo sé que este año fue dificil, pero todo estara bien, porque yo estoy con vos y conozco tu futuro. ---> att: Dios ❤️","Soy el unico que puede llenar el vacio de tu corazón---> att: Jesús ❤️","No temas yo soy el que te da nuevas Fuerzas 💪 ---> att: Dios","Mis caminos y mis pensamientos son mas altos que los de ustedes mas altos que los cielos sobre la tierra. ---> att: Dios","No te angusties, no temas, Yo estoy contigo. ---> att: Dios","Mis planes son mejores ---> att: Jesús","En mi Esta Tu Identidad ---> att: Jesús","Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora⏱️. ---> Eclesiastés 3:1","Tu vales mas que el oro y la plata ---> att: Dios","Ten en cuenta a Dios en todo lo que hagas y él te guiará por el buen camino. ---> Proverbios 3:6","Dichoso el que resiste la tentación porque, al salir aprobado, recibirá la corona de la vida que Dios ha prometido a quienes lo aman. ---> Santiago 1:12","Porque si ustedes viven conforme a la naturaleza pecaminosa, morirán; pero si por el Espíritu dan muerte a los malos hábitos del cuerpo, vivirán. ---> Romanos 8:13"],$P=()=>{const[e,t]=w.useState("");return w.useEffect(()=>{const n=Math.floor(Math.random()*v0.length);t(v0[n])},[]),a.jsxs(_P,{children:[a.jsx(mx,{}),a.jsx(RP,{children:a.jsx("div",{className:"icon",children:a.jsx(G,{to:"/",children:a.jsx(cC,{})})})}),a.jsx(PP,{children:a.jsx(NP,{children:e})})]})},_P=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //background-color: #000; /* Fondo negro */
`,RP=k.div`
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
   
`,PP=k.div`
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
`,NP=k.p`
  font-size: clamp(1.5rem, 4vw, 3rem); /* Tamaño de fuente adaptable */
  color: #ff69b4; /* Color inicial */
  background: linear-gradient(90deg, #ff69b4, #00d4ff, #fff200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
`,TP=k.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${Wt.jovenesArt});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`,IP=k.div`
    background: rgba(36, 5, 61, 0.553);
    color: white;
    padding: 20px;
    max-width: 400px;
    margin: 20px;
    margin-right: 70px;
    font-size: 30px;
    border-radius: 30px;

    @media (max-width: 767px) {
        text-align: center;
        font-size: 20px;
        margin-right: 10px;
    }
`,LP=()=>a.jsx(TP,{children:a.jsxs(IP,{children:[a.jsx("h1",{children:"Misión 1x1"}),a.jsx("p",{children:"Nuestro objetivo  es enseñar a los jóvenes cristianos el principio 1x1. Que se basa en llevar a un amigo al #JesusFest e    invertir en la vida de esta persona con la intención de compartir el amor de Jesús, el cual cambia corazones."})]})}),AP=kl`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #b500f9, 0 0 20px #b500f9, 0 0 40px #8a00d4;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #d400d4;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #b500f9, 0 0 20px #b500f9, 0 0 40px #8a00d4;
  }
`,OP=k.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${Wt.JovenesSectionOscuro});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
`,zP=k.div`
    background: rgba(36, 5, 61, 0.274);
    
    color: white;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`,DP=k.h1`
    font-size: 200px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    animation: ${AP} 1.5s infinite alternate;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`,MP=()=>a.jsx(OP,{children:a.jsx(zP,{children:a.jsx(DP,{children:"Potenciados"})})}),FP="https://Bravo938.github.io/RiosDeVida.pages/assets/caminata-832_7TM7.mp4",UP=()=>{const[e,t]=w.useState(!1),n=()=>{t(!e)};return a.jsx(BP,{id:"potenciados",children:a.jsxs(HP,{children:[a.jsxs(VP,{children:[a.jsx(WP,{children:"Jóvenes Potenciados"}),a.jsxs(qP,{children:[a.jsxs(GP,{expanded:e,children:["¡Bienvenido a Jóvenes Potenciados! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(JP,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(KP,{children:a.jsx(QP,{autoPlay:!0,loop:!0,muted:!0,src:FP})})]})})},BP=k.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #460072 40%, #2e1f42 40%);
`,HP=k.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,VP=k.div`
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
`,WP=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,qP=k.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,GP=k.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,JP=k.button`
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
`,KP=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,QP=k.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function XP(){return a.jsxs(a.Fragment,{children:[a.jsx(MP,{}),a.jsx(UP,{}),a.jsx(LP,{}),a.jsx(hx,{})]})}function YP(){const{auth:e,setAuth:t}=w.useContext(Zi);return w.useEffect(()=>{const n=localStorage.getItem("token");n&&t({token:n})},[t]),a.jsx(a.Fragment,{children:a.jsxs(jS,{children:[a.jsx(J,{path:"/login",element:a.jsx(Q2,{})}),a.jsx(J,{path:"/jovenes",element:a.jsx(XP,{})}),a.jsx(J,{path:"/",element:a.jsx(lC,{})}),a.jsx(J,{path:"/notas",element:a.jsx($P,{})}),e&&e.token?a.jsxs(J,{element:a.jsx(fC,{}),children:[a.jsx(J,{path:"/*",element:a.jsx(gC,{})}),a.jsx(J,{path:"/logout",element:a.jsx(a$,{})}),a.jsx(J,{path:"/planillaLider",element:a.jsx(T3,{})}),a.jsx(J,{path:"/planillaGeneralSupervisor",element:a.jsx(B4,{})}),a.jsx(J,{path:"/asistencia",element:a.jsx(G3,{})}),a.jsx(J,{path:"/asistenciaVistaSupervisor",element:a.jsx(I4,{})}),a.jsx(J,{path:"/asistenciaVistaAdmin",element:a.jsx(hP,{})}),a.jsx(J,{path:"/registroUsuarios",element:a.jsx(kR,{})}),a.jsx(J,{path:"/registroDeRoles",element:a.jsx(e4,{})}),a.jsx(J,{path:"/registroLideryMiembro",element:a.jsx(v4,{})}),a.jsx(J,{path:"/miembrosLideresSupervisor",element:a.jsx(aP,{})}),a.jsx(J,{path:"/generalPlanilla",element:a.jsx(tR,{})}),a.jsx(J,{path:"/planillaGeneralAdmin",element:a.jsx(bP,{})}),a.jsx(J,{path:"/asignarSupervisor",element:a.jsx(DR,{})}),a.jsx(J,{path:"/crearMiembro",element:a.jsx(M3,{})}),a.jsx(J,{path:"/crearPlanillaGeneral",element:a.jsx(uR,{})}),a.jsx(J,{path:"/crearPlanillaGeneralSupervisor",element:a.jsx(Q4,{})}),a.jsx(J,{path:"/crearAsistencia",element:a.jsx(vR,{})}),a.jsx(J,{path:"/crearUsuario",element:a.jsx(NR,{})}),a.jsx(J,{path:"/crearAsignarSupervisor",element:a.jsx(qR,{})}),a.jsx(J,{path:"/crearUnRol",element:a.jsx(a4,{})}),a.jsx(J,{path:"/crearMiembroSupervisor",element:a.jsx(k4,{})}),a.jsx(J,{path:"/editarMiembros/:id",element:a.jsx(B3,{})}),a.jsx(J,{path:"/editarPlanillaGeneral/:id",element:a.jsx(fR,{})}),a.jsx(J,{path:"/editarAsistencia/:id",element:a.jsx(wR,{})}),a.jsx(J,{path:"/editarUsuario/:id",element:a.jsx(LR,{})}),a.jsx(J,{path:"/editarAsignacionSupervisor/:id",element:a.jsx(QR,{})}),a.jsx(J,{path:"/editarRol/:id",element:a.jsx(c4,{})}),a.jsx(J,{path:"/editarMiembroSupervisor/:id",element:a.jsx($4,{})}),a.jsx(J,{path:"/editarPlanillaGeneralSupervisor/:id",element:a.jsx(Z4,{})})]}):a.jsx(J,{path:"/*",element:a.jsx(wS,{to:"/"})})]})})}Nv(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(PS,{children:a.jsx(wC,{children:a.jsx(YP,{})})})}));
