function f1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var it=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _0={exports:{}},rl={},R0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),p1=Symbol.for("react.portal"),h1=Symbol.for("react.fragment"),m1=Symbol.for("react.strict_mode"),g1=Symbol.for("react.profiler"),x1=Symbol.for("react.provider"),v1=Symbol.for("react.context"),y1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),b1=Symbol.for("react.memo"),S1=Symbol.for("react.lazy"),op=Symbol.iterator;function j1(e){return e===null||typeof e!="object"?null:(e=op&&e[op]||e["@@iterator"],typeof e=="function"?e:null)}var P0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T0=Object.assign,N0={};function Eo(e,t,n){this.props=e,this.context=t,this.refs=N0,this.updater=n||P0}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I0(){}I0.prototype=Eo.prototype;function yd(e,t,n){this.props=e,this.context=t,this.refs=N0,this.updater=n||P0}var wd=yd.prototype=new I0;wd.constructor=yd;T0(wd,Eo.prototype);wd.isPureReactComponent=!0;var ip=Array.isArray,z0=Object.prototype.hasOwnProperty,bd={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)z0.call(t,r)&&!L0.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Hi,type:e,key:i,ref:s,props:o,_owner:bd.current}}function k1(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function C1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sp=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C1(""+e.key):t.toString(36)}function Is(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hi:case p1:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ql(s,0):r,ip(o)?(n="",e!=null&&(n=e.replace(sp,"$&/")+"/"),Is(o,t,n,"",function(c){return c})):o!=null&&(Sd(o)&&(o=k1(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(sp,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",ip(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+ql(i,l);s+=Is(i,t,n,u,o)}else if(u=j1(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+ql(i,l++),s+=Is(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function as(e,t,n){if(e==null)return e;var r=[],o=0;return Is(e,r,"","",function(i){return t.call(n,i,o++)}),r}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},zs={transition:null},$1={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:zs,ReactCurrentOwner:bd};function O0(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:as,forEach:function(e,t,n){as(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return as(e,function(){t++}),t},toArray:function(e){return as(e,function(t){return t})||[]},only:function(e){if(!Sd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Eo;K.Fragment=h1;K.Profiler=g1;K.PureComponent=yd;K.StrictMode=m1;K.Suspense=w1;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;K.act=O0;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=T0({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=bd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)z0.call(t,u)&&!L0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Hi,type:e.type,key:o,ref:i,props:r,_owner:s}};K.createContext=function(e){return e={$$typeof:v1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x1,_context:e},e.Consumer=e};K.createElement=A0;K.createFactory=function(e){var t=A0.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:y1,render:e}};K.isValidElement=Sd;K.lazy=function(e){return{$$typeof:S1,_payload:{_status:-1,_result:e},_init:E1}};K.memo=function(e,t){return{$$typeof:b1,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=zs.transition;zs.transition={};try{e()}finally{zs.transition=t}};K.unstable_act=O0;K.useCallback=function(e,t){return We.current.useCallback(e,t)};K.useContext=function(e){return We.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return We.current.useDeferredValue(e)};K.useEffect=function(e,t){return We.current.useEffect(e,t)};K.useId=function(){return We.current.useId()};K.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return We.current.useMemo(e,t)};K.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};K.useRef=function(e){return We.current.useRef(e)};K.useState=function(e){return We.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return We.current.useTransition()};K.version="18.3.1";R0.exports=K;var y=R0.exports;const Pe=$0(y),_1=f1({__proto__:null,default:Pe},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=y,P1=Symbol.for("react.element"),T1=Symbol.for("react.fragment"),N1=Object.prototype.hasOwnProperty,I1=R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z1={key:!0,ref:!0,__self:!0,__source:!0};function D0(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)N1.call(t,r)&&!z1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:P1,type:e,key:i,ref:s,props:o,_owner:I1.current}}rl.Fragment=T1;rl.jsx=D0;rl.jsxs=D0;_0.exports=rl;var a=_0.exports,M0={exports:{}},wt={},F0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,D){var F=I.length;I.push(D);e:for(;0<F;){var ne=F-1>>>1,re=I[ne];if(0<o(re,D))I[ne]=D,I[F]=re,F=ne;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],F=I.pop();if(F!==D){I[0]=F;e:for(var ne=0,re=I.length,fr=re>>>1;ne<fr;){var Dt=2*(ne+1)-1,Tn=I[Dt],st=Dt+1,hn=I[st];if(0>o(Tn,F))st<re&&0>o(hn,Tn)?(I[ne]=hn,I[st]=F,ne=st):(I[ne]=Tn,I[Dt]=F,ne=Dt);else if(st<re&&0>o(hn,F))I[ne]=hn,I[st]=F,ne=st;else break e}}return D}function o(I,D){var F=I.sortIndex-D.sortIndex;return F!==0?F:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,h=3,x=!1,g=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=I)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function w(I){if(S=!1,p(I),!g)if(n(u)!==null)g=!0,pn(j);else{var D=n(c);D!==null&&Ot(w,D.startTime-I)}}function j(I,D){g=!1,S&&(S=!1,v(E),E=-1),x=!0;var F=h;try{for(p(D),f=n(u);f!==null&&(!(f.expirationTime>D)||I&&!te());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var re=ne(f.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(u)&&r(u),p(D)}else r(u);f=n(u)}if(f!==null)var fr=!0;else{var Dt=n(c);Dt!==null&&Ot(w,Dt.startTime-D),fr=!1}return fr}finally{f=null,h=F,x=!1}}var C=!1,$=null,E=-1,A=5,O=-1;function te(){return!(e.unstable_now()-O<A)}function Se(){if($!==null){var I=e.unstable_now();O=I;var D=!0;try{D=$(!0,I)}finally{D?N():(C=!1,$=null)}}else C=!1}var N;if(typeof m=="function")N=function(){m(Se)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,dr=ye.port2;ye.port1.onmessage=Se,N=function(){dr.postMessage(null)}}else N=function(){b(Se,0)};function pn(I){$=I,C||(C=!0,N())}function Ot(I,D){E=b(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,pn(j))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var F=h;h=D;try{return I()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=h;h=I;try{return D()}finally{h=F}},e.unstable_scheduleCallback=function(I,D,F){var ne=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ne+F:ne):F=ne,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=F+re,I={id:d++,callback:D,priorityLevel:I,startTime:F,expirationTime:re,sortIndex:-1},F>ne?(I.sortIndex=F,t(c,I),n(u)===null&&I===n(c)&&(S?(v(E),E=-1):S=!0,Ot(w,F-ne))):(I.sortIndex=re,t(u,I),g||x||(g=!0,pn(j))),I},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(I){var D=h;return function(){var F=h;h=D;try{return I.apply(this,arguments)}finally{h=F}}}})(B0);F0.exports=B0;var L1=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=y,yt=L1;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U0=new Set,yi={};function Mr(e,t){po(e,t),po(e+"Capture",t)}function po(e,t){for(yi[e]=t,e=0;e<t.length;e++)U0.add(t[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,O1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ap={},lp={};function D1(e){return Ju.call(lp,e)?!0:Ju.call(ap,e)?!1:O1.test(e)?lp[e]=!0:(ap[e]=!0,!1)}function M1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F1(e,t,n,r){if(t===null||typeof t>"u"||M1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function kd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jd,kd);Ne[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jd,kd);Ne[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jd,kd);Ne[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cd(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F1(t,n,o,r)&&(n=null),r||o===null?D1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rn=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),up=Symbol.iterator;function Do(e){return e===null||typeof e!="object"?null:(e=up&&e[up]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Gl;function Go(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Jl=!1;function Xl(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Go(e):""}function B1(e){switch(e.tag){case 5:return Go(e.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return e=Xl(e.type,!1),e;case 11:return e=Xl(e.type.render,!1),e;case 1:return e=Xl(e.type,!0),e;default:return""}}function Yu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jr:return"Fragment";case Gr:return"Portal";case Xu:return"Profiler";case Ed:return"StrictMode";case Ku:return"Suspense";case Qu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H0:return(e.displayName||"Context")+".Consumer";case V0:return(e._context.displayName||"Context")+".Provider";case $d:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _d:return t=e.displayName||null,t!==null?t:Yu(e.type)||"Memo";case Mn:t=e._payload,e=e._init;try{return Yu(e(t))}catch{}}return null}function U1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(t);case 8:return t===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function or(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function q0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V1(e){var t=q0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function us(e){e._valueTracker||(e._valueTracker=V1(e))}function G0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zu(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=or(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function J0(e,t){t=t.checked,t!=null&&Cd(e,"checked",t,!1)}function ec(e,t){J0(e,t);var n=or(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tc(e,t.type,n):t.hasOwnProperty("defaultValue")&&tc(e,t.type,or(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tc(e,t,n){(t!=="number"||ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jo=Array.isArray;function so(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+or(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Jo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:or(n)}}function X0(e,t){var n=or(t.value),r=or(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function K0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?K0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,Q0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H1=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){H1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function Y0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function Z0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Y0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var W1=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(W1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function ic(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function Rd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ac=null,ao=null,lo=null;function hp(e){if(e=Gi(e)){if(typeof ac!="function")throw Error(R(280));var t=e.stateNode;t&&(t=ll(t),ac(e.stateNode,e.type,t))}}function eg(e){ao?lo?lo.push(e):lo=[e]:ao=e}function tg(){if(ao){var e=ao,t=lo;if(lo=ao=null,hp(e),t)for(e=0;e<t.length;e++)hp(t[e])}}function ng(e,t){return e(t)}function rg(){}var Kl=!1;function og(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return ng(e,t,n)}finally{Kl=!1,(ao!==null||lo!==null)&&(rg(),tg())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var lc=!1;if(jn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){lc=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{lc=!1}function q1(e,t,n,r,o,i,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var si=!1,ca=null,da=!1,uc=null,G1={onError:function(e){si=!0,ca=e}};function J1(e,t,n,r,o,i,s,l,u){si=!1,ca=null,q1.apply(G1,arguments)}function X1(e,t,n,r,o,i,s,l,u){if(J1.apply(this,arguments),si){if(si){var c=ca;si=!1,ca=null}else throw Error(R(198));da||(da=!0,uc=c)}}function Fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ig(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mp(e){if(Fr(e)!==e)throw Error(R(188))}function K1(e){var t=e.alternate;if(!t){if(t=Fr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return mp(o),e;if(i===r)return mp(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function sg(e){return e=K1(e),e!==null?ag(e):null}function ag(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ag(e);if(t!==null)return t;e=e.sibling}return null}var lg=yt.unstable_scheduleCallback,gp=yt.unstable_cancelCallback,Q1=yt.unstable_shouldYield,Y1=yt.unstable_requestPaint,xe=yt.unstable_now,Z1=yt.unstable_getCurrentPriorityLevel,Pd=yt.unstable_ImmediatePriority,ug=yt.unstable_UserBlockingPriority,fa=yt.unstable_NormalPriority,ew=yt.unstable_LowPriority,cg=yt.unstable_IdlePriority,ol=null,un=null;function tw(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:ow,nw=Math.log,rw=Math.LN2;function ow(e){return e>>>=0,e===0?32:31-(nw(e)/rw|0)|0}var ds=64,fs=4194304;function Xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Xo(l):(i&=s,i!==0&&(r=Xo(i)))}else s=n&~o,s!==0?r=Xo(s):i!==0&&(r=Xo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function iw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Gt(i),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=iw(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dg(){var e=ds;return ds<<=1,!(ds&4194240)&&(ds=64),e}function Ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function aw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function fg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pg,Nd,hg,mg,gg,dc=!1,ps=[],Jn=null,Xn=null,Kn=null,Si=new Map,ji=new Map,Bn=[],lw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function Fo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Gi(t),t!==null&&Nd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uw(e,t,n,r,o){switch(t){case"focusin":return Jn=Fo(Jn,e,t,n,r,o),!0;case"dragenter":return Xn=Fo(Xn,e,t,n,r,o),!0;case"mouseover":return Kn=Fo(Kn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Si.set(i,Fo(Si.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ji.set(i,Fo(ji.get(i)||null,e,t,n,r,o)),!0}return!1}function xg(e){var t=br(e.target);if(t!==null){var n=Fr(t);if(n!==null){if(t=n.tag,t===13){if(t=ig(n),t!==null){e.blockedOn=t,gg(e.priority,function(){hg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return t=Gi(n),t!==null&&Nd(t),e.blockedOn=n,!1;t.shift()}return!0}function vp(e,t,n){Ls(e)&&n.delete(t)}function cw(){dc=!1,Jn!==null&&Ls(Jn)&&(Jn=null),Xn!==null&&Ls(Xn)&&(Xn=null),Kn!==null&&Ls(Kn)&&(Kn=null),Si.forEach(vp),ji.forEach(vp)}function Bo(e,t){e.blockedOn===t&&(e.blockedOn=null,dc||(dc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,cw)))}function ki(e){function t(o){return Bo(o,e)}if(0<ps.length){Bo(ps[0],e);for(var n=1;n<ps.length;n++){var r=ps[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jn!==null&&Bo(Jn,e),Xn!==null&&Bo(Xn,e),Kn!==null&&Bo(Kn,e),Si.forEach(t),ji.forEach(t),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&Bn.shift()}var uo=Rn.ReactCurrentBatchConfig,ha=!0;function dw(e,t,n,r){var o=ee,i=uo.transition;uo.transition=null;try{ee=1,Id(e,t,n,r)}finally{ee=o,uo.transition=i}}function fw(e,t,n,r){var o=ee,i=uo.transition;uo.transition=null;try{ee=4,Id(e,t,n,r)}finally{ee=o,uo.transition=i}}function Id(e,t,n,r){if(ha){var o=fc(e,t,n,r);if(o===null)au(e,t,r,ma,n),xp(e,r);else if(uw(o,e,t,n,r))r.stopPropagation();else if(xp(e,r),t&4&&-1<lw.indexOf(e)){for(;o!==null;){var i=Gi(o);if(i!==null&&pg(i),i=fc(e,t,n,r),i===null&&au(e,t,r,ma,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else au(e,t,r,null,n)}}var ma=null;function fc(e,t,n,r){if(ma=null,e=Rd(r),e=br(e),e!==null)if(t=Fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ig(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ma=e,null}function vg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z1()){case Pd:return 1;case ug:return 4;case fa:case ew:return 16;case cg:return 536870912;default:return 16}default:return 16}}var Vn=null,zd=null,As=null;function yg(){if(As)return As;var e,t=zd,n=t.length,r,o="value"in Vn?Vn.value:Vn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return As=o.slice(e,1<r?1-r:void 0)}function Os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function yp(){return!1}function bt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hs:yp,this.isPropagationStopped=yp,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=bt($o),qi=he({},$o,{view:0,detail:0}),pw=bt(qi),Yl,Zl,Uo,il=he({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(Yl=e.screenX-Uo.screenX,Zl=e.screenY-Uo.screenY):Zl=Yl=0,Uo=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),wp=bt(il),hw=he({},il,{dataTransfer:0}),mw=bt(hw),gw=he({},qi,{relatedTarget:0}),eu=bt(gw),xw=he({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),vw=bt(xw),yw=he({},$o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ww=bt(yw),bw=he({},$o,{data:0}),bp=bt(bw),Sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kw[e])?!!t[e]:!1}function Ad(){return Cw}var Ew=he({},qi,{key:function(e){if(e.key){var t=Sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$w=bt(Ew),_w=he({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=bt(_w),Rw=he({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),Pw=bt(Rw),Tw=he({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nw=bt(Tw),Iw=he({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zw=bt(Iw),Lw=[9,13,27,32],Od=jn&&"CompositionEvent"in window,ai=null;jn&&"documentMode"in document&&(ai=document.documentMode);var Aw=jn&&"TextEvent"in window&&!ai,wg=jn&&(!Od||ai&&8<ai&&11>=ai),jp=" ",kp=!1;function bg(e,t){switch(e){case"keyup":return Lw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function Ow(e,t){switch(e){case"compositionend":return Sg(t);case"keypress":return t.which!==32?null:(kp=!0,jp);case"textInput":return e=t.data,e===jp&&kp?null:e;default:return null}}function Dw(e,t){if(Xr)return e==="compositionend"||!Od&&bg(e,t)?(e=yg(),As=zd=Vn=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wg&&t.locale!=="ko"?null:t.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mw[e.type]:t==="textarea"}function jg(e,t,n,r){eg(r),t=ga(t,"onChange"),0<t.length&&(n=new Ld("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Ci=null;function Fw(e){zg(e,0)}function sl(e){var t=Yr(e);if(G0(t))return e}function Bw(e,t){if(e==="change")return t}var kg=!1;if(jn){var tu;if(jn){var nu="oninput"in document;if(!nu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),nu=typeof Ep.oninput=="function"}tu=nu}else tu=!1;kg=tu&&(!document.documentMode||9<document.documentMode)}function $p(){li&&(li.detachEvent("onpropertychange",Cg),Ci=li=null)}function Cg(e){if(e.propertyName==="value"&&sl(Ci)){var t=[];jg(t,Ci,e,Rd(e)),og(Fw,t)}}function Uw(e,t,n){e==="focusin"?($p(),li=t,Ci=n,li.attachEvent("onpropertychange",Cg)):e==="focusout"&&$p()}function Vw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Ci)}function Hw(e,t){if(e==="click")return sl(t)}function Ww(e,t){if(e==="input"||e==="change")return sl(t)}function qw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:qw;function Ei(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ju.call(t,o)||!Kt(e[o],t[o]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rp(e,t){var n=_p(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function Eg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $g(){for(var e=window,t=ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ua(e.document)}return t}function Dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gw(e){var t=$g(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eg(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Rp(n,i);var s=Rp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jw=jn&&"documentMode"in document&&11>=document.documentMode,Kr=null,pc=null,ui=null,hc=!1;function Pp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||Kr==null||Kr!==ua(r)||(r=Kr,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ei(ui,r)||(ui=r,r=ga(pc,"onSelect"),0<r.length&&(t=new Ld("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},ru={},_g={};jn&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function al(e){if(ru[e])return ru[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _g)return ru[e]=t[n];return e}var Rg=al("animationend"),Pg=al("animationiteration"),Tg=al("animationstart"),Ng=al("transitionend"),Ig=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,t){Ig.set(e,t),Mr(t,[e])}for(var ou=0;ou<Tp.length;ou++){var iu=Tp[ou],Xw=iu.toLowerCase(),Kw=iu[0].toUpperCase()+iu.slice(1);sr(Xw,"on"+Kw)}sr(Rg,"onAnimationEnd");sr(Pg,"onAnimationIteration");sr(Tg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Ng,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Np(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,X1(r,t,void 0,e),e.currentTarget=null}function zg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;Np(o,l,c),i=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;Np(o,l,c),i=u}}}if(da)throw e=uc,da=!1,uc=null,e}function ae(e,t){var n=t[yc];n===void 0&&(n=t[yc]=new Set);var r=e+"__bubble";n.has(r)||(Lg(t,e,2,!1),n.add(r))}function su(e,t,n){var r=0;t&&(r|=4),Lg(n,e,r,t)}var gs="_reactListening"+Math.random().toString(36).slice(2);function $i(e){if(!e[gs]){e[gs]=!0,U0.forEach(function(n){n!=="selectionchange"&&(Qw.has(n)||su(n,!1,e),su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gs]||(t[gs]=!0,su("selectionchange",!1,t))}}function Lg(e,t,n,r){switch(vg(t)){case 1:var o=dw;break;case 4:o=fw;break;default:o=Id}n=o.bind(null,t,n,e),o=void 0,!lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function au(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=br(l),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}l=l.parentNode}}r=r.return}og(function(){var c=i,d=Rd(n),f=[];e:{var h=Ig.get(e);if(h!==void 0){var x=Ld,g=e;switch(e){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":x=$w;break;case"focusin":g="focus",x=eu;break;case"focusout":g="blur",x=eu;break;case"beforeblur":case"afterblur":x=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Pw;break;case Rg:case Pg:case Tg:x=vw;break;case Ng:x=Nw;break;case"scroll":x=pw;break;case"wheel":x=zw;break;case"copy":case"cut":case"paste":x=ww;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Sp}var S=(t&4)!==0,b=!S&&e==="scroll",v=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,p;m!==null;){p=m;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,v!==null&&(w=bi(m,v),w!=null&&S.push(_i(m,w,p)))),b)break;m=m.return}0<S.length&&(h=new x(h,g,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==sc&&(g=n.relatedTarget||n.fromElement)&&(br(g)||g[kn]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=c,g=g?br(g):null,g!==null&&(b=Fr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=c),x!==g)){if(S=wp,w="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=Sp,w="onPointerLeave",v="onPointerEnter",m="pointer"),b=x==null?h:Yr(x),p=g==null?h:Yr(g),h=new S(w,m+"leave",x,n,d),h.target=b,h.relatedTarget=p,w=null,br(d)===c&&(S=new S(v,m+"enter",g,n,d),S.target=p,S.relatedTarget=b,w=S),b=w,x&&g)t:{for(S=x,v=g,m=0,p=S;p;p=Ur(p))m++;for(p=0,w=v;w;w=Ur(w))p++;for(;0<m-p;)S=Ur(S),m--;for(;0<p-m;)v=Ur(v),p--;for(;m--;){if(S===v||v!==null&&S===v.alternate)break t;S=Ur(S),v=Ur(v)}S=null}else S=null;x!==null&&Ip(f,h,x,S,!1),g!==null&&b!==null&&Ip(f,b,g,S,!0)}}e:{if(h=c?Yr(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=Bw;else if(Cp(h))if(kg)j=Ww;else{j=Vw;var C=Uw}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Hw);if(j&&(j=j(e,c))){jg(f,j,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&tc(h,"number",h.value)}switch(C=c?Yr(c):window,e){case"focusin":(Cp(C)||C.contentEditable==="true")&&(Kr=C,pc=c,ui=null);break;case"focusout":ui=pc=Kr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Pp(f,n,d);break;case"selectionchange":if(Jw)break;case"keydown":case"keyup":Pp(f,n,d)}var $;if(Od)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xr?bg(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(wg&&n.locale!=="ko"&&(Xr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xr&&($=yg()):(Vn=d,zd="value"in Vn?Vn.value:Vn.textContent,Xr=!0)),C=ga(c,E),0<C.length&&(E=new bp(E,e,null,n,d),f.push({event:E,listeners:C}),$?E.data=$:($=Sg(n),$!==null&&(E.data=$)))),($=Aw?Ow(e,n):Dw(e,n))&&(c=ga(c,"onBeforeInput"),0<c.length&&(d=new bp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=$))}zg(f,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ga(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=bi(e,n),i!=null&&r.unshift(_i(e,i,o)),i=bi(e,t),i!=null&&r.push(_i(e,i,o))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ip(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=bi(n,i),u!=null&&s.unshift(_i(n,u,l))):o||(u=bi(n,i),u!=null&&s.push(_i(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Yw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function zp(e){return(typeof e=="string"?e:""+e).replace(Yw,`
`).replace(Zw,"")}function xs(e,t,n){if(t=zp(t),zp(e)!==t&&n)throw Error(R(425))}function xa(){}var mc=null,gc=null;function xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,eb=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(e){return Lp.resolve(null).then(e).catch(nb)}:vc;function nb(e){setTimeout(function(){throw e})}function lu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ki(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _o=Math.random().toString(36).slice(2),sn="__reactFiber$"+_o,Ri="__reactProps$"+_o,kn="__reactContainer$"+_o,yc="__reactEvents$"+_o,rb="__reactListeners$"+_o,ob="__reactHandles$"+_o;function br(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ap(e);e!==null;){if(n=e[sn])return n;e=Ap(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[sn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function ll(e){return e[Ri]||null}var wc=[],Zr=-1;function ar(e){return{current:e}}function ce(e){0>Zr||(e.current=wc[Zr],wc[Zr]=null,Zr--)}function se(e,t){Zr++,wc[Zr]=e.current,e.current=t}var ir={},Fe=ar(ir),et=ar(!1),Nr=ir;function ho(e,t){var n=e.type.contextTypes;if(!n)return ir;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function va(){ce(et),ce(Fe)}function Op(e,t,n){if(Fe.current!==ir)throw Error(R(168));se(Fe,t),se(et,n)}function Ag(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,U1(e)||"Unknown",o));return he({},n,r)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ir,Nr=Fe.current,se(Fe,e),se(et,et.current),!0}function Dp(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Ag(e,t,Nr),r.__reactInternalMemoizedMergedChildContext=e,ce(et),ce(Fe),se(Fe,e)):ce(et),se(et,n)}var vn=null,ul=!1,uu=!1;function Og(e){vn===null?vn=[e]:vn.push(e)}function ib(e){ul=!0,Og(e)}function lr(){if(!uu&&vn!==null){uu=!0;var e=0,t=ee;try{var n=vn;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vn=null,ul=!1}catch(o){throw vn!==null&&(vn=vn.slice(e+1)),lg(Pd,lr),o}finally{ee=t,uu=!1}}return null}var eo=[],to=0,wa=null,ba=0,Et=[],$t=0,Ir=null,wn=1,bn="";function mr(e,t){eo[to++]=ba,eo[to++]=wa,wa=e,ba=t}function Dg(e,t,n){Et[$t++]=wn,Et[$t++]=bn,Et[$t++]=Ir,Ir=e;var r=wn;e=bn;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var i=32-Gt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,wn=1<<32-Gt(t)+o|n<<o|r,bn=i+e}else wn=1<<i|n<<o|r,bn=e}function Md(e){e.return!==null&&(mr(e,1),Dg(e,1,0))}function Fd(e){for(;e===wa;)wa=eo[--to],eo[to]=null,ba=eo[--to],eo[to]=null;for(;e===Ir;)Ir=Et[--$t],Et[$t]=null,bn=Et[--$t],Et[$t]=null,wn=Et[--$t],Et[$t]=null}var xt=null,gt=null,de=!1,qt=null;function Mg(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,gt=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:wn,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,gt=null,!0):!1;default:return!1}}function bc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sc(e){if(de){var t=gt;if(t){var n=t;if(!Mp(e,t)){if(bc(e))throw Error(R(418));t=Qn(n.nextSibling);var r=xt;t&&Mp(e,t)?Mg(r,n):(e.flags=e.flags&-4097|2,de=!1,xt=e)}}else{if(bc(e))throw Error(R(418));e.flags=e.flags&-4097|2,de=!1,xt=e}}}function Fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function vs(e){if(e!==xt)return!1;if(!de)return Fp(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xc(e.type,e.memoizedProps)),t&&(t=gt)){if(bc(e))throw Fg(),Error(R(418));for(;t;)Mg(e,t),t=Qn(t.nextSibling)}if(Fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=xt?Qn(e.stateNode.nextSibling):null;return!0}function Fg(){for(var e=gt;e;)e=Qn(e.nextSibling)}function mo(){gt=xt=null,de=!1}function Bd(e){qt===null?qt=[e]:qt.push(e)}var sb=Rn.ReactCurrentBatchConfig;function Vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bp(e){var t=e._init;return t(e._payload)}function Bg(e){function t(v,m){if(e){var p=v.deletions;p===null?(v.deletions=[m],v.flags|=16):p.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function o(v,m){return v=tr(v,m),v.index=0,v.sibling=null,v}function i(v,m,p){return v.index=p,e?(p=v.alternate,p!==null?(p=p.index,p<m?(v.flags|=2,m):p):(v.flags|=2,m)):(v.flags|=1048576,m)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,m,p,w){return m===null||m.tag!==6?(m=gu(p,v.mode,w),m.return=v,m):(m=o(m,p),m.return=v,m)}function u(v,m,p,w){var j=p.type;return j===Jr?d(v,m,p.props.children,w,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Mn&&Bp(j)===m.type)?(w=o(m,p.props),w.ref=Vo(v,m,p),w.return=v,w):(w=Hs(p.type,p.key,p.props,null,v.mode,w),w.ref=Vo(v,m,p),w.return=v,w)}function c(v,m,p,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=xu(p,v.mode,w),m.return=v,m):(m=o(m,p.children||[]),m.return=v,m)}function d(v,m,p,w,j){return m===null||m.tag!==7?(m=Rr(p,v.mode,w,j),m.return=v,m):(m=o(m,p),m.return=v,m)}function f(v,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=gu(""+m,v.mode,p),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ls:return p=Hs(m.type,m.key,m.props,null,v.mode,p),p.ref=Vo(v,null,m),p.return=v,p;case Gr:return m=xu(m,v.mode,p),m.return=v,m;case Mn:var w=m._init;return f(v,w(m._payload),p)}if(Jo(m)||Do(m))return m=Rr(m,v.mode,p,null),m.return=v,m;ys(v,m)}return null}function h(v,m,p,w){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:l(v,m,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ls:return p.key===j?u(v,m,p,w):null;case Gr:return p.key===j?c(v,m,p,w):null;case Mn:return j=p._init,h(v,m,j(p._payload),w)}if(Jo(p)||Do(p))return j!==null?null:d(v,m,p,w,null);ys(v,p)}return null}function x(v,m,p,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(p)||null,l(m,v,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ls:return v=v.get(w.key===null?p:w.key)||null,u(m,v,w,j);case Gr:return v=v.get(w.key===null?p:w.key)||null,c(m,v,w,j);case Mn:var C=w._init;return x(v,m,p,C(w._payload),j)}if(Jo(w)||Do(w))return v=v.get(p)||null,d(m,v,w,j,null);ys(m,w)}return null}function g(v,m,p,w){for(var j=null,C=null,$=m,E=m=0,A=null;$!==null&&E<p.length;E++){$.index>E?(A=$,$=null):A=$.sibling;var O=h(v,$,p[E],w);if(O===null){$===null&&($=A);break}e&&$&&O.alternate===null&&t(v,$),m=i(O,m,E),C===null?j=O:C.sibling=O,C=O,$=A}if(E===p.length)return n(v,$),de&&mr(v,E),j;if($===null){for(;E<p.length;E++)$=f(v,p[E],w),$!==null&&(m=i($,m,E),C===null?j=$:C.sibling=$,C=$);return de&&mr(v,E),j}for($=r(v,$);E<p.length;E++)A=x($,v,E,p[E],w),A!==null&&(e&&A.alternate!==null&&$.delete(A.key===null?E:A.key),m=i(A,m,E),C===null?j=A:C.sibling=A,C=A);return e&&$.forEach(function(te){return t(v,te)}),de&&mr(v,E),j}function S(v,m,p,w){var j=Do(p);if(typeof j!="function")throw Error(R(150));if(p=j.call(p),p==null)throw Error(R(151));for(var C=j=null,$=m,E=m=0,A=null,O=p.next();$!==null&&!O.done;E++,O=p.next()){$.index>E?(A=$,$=null):A=$.sibling;var te=h(v,$,O.value,w);if(te===null){$===null&&($=A);break}e&&$&&te.alternate===null&&t(v,$),m=i(te,m,E),C===null?j=te:C.sibling=te,C=te,$=A}if(O.done)return n(v,$),de&&mr(v,E),j;if($===null){for(;!O.done;E++,O=p.next())O=f(v,O.value,w),O!==null&&(m=i(O,m,E),C===null?j=O:C.sibling=O,C=O);return de&&mr(v,E),j}for($=r(v,$);!O.done;E++,O=p.next())O=x($,v,E,O.value,w),O!==null&&(e&&O.alternate!==null&&$.delete(O.key===null?E:O.key),m=i(O,m,E),C===null?j=O:C.sibling=O,C=O);return e&&$.forEach(function(Se){return t(v,Se)}),de&&mr(v,E),j}function b(v,m,p,w){if(typeof p=="object"&&p!==null&&p.type===Jr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ls:e:{for(var j=p.key,C=m;C!==null;){if(C.key===j){if(j=p.type,j===Jr){if(C.tag===7){n(v,C.sibling),m=o(C,p.props.children),m.return=v,v=m;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Mn&&Bp(j)===C.type){n(v,C.sibling),m=o(C,p.props),m.ref=Vo(v,C,p),m.return=v,v=m;break e}n(v,C);break}else t(v,C);C=C.sibling}p.type===Jr?(m=Rr(p.props.children,v.mode,w,p.key),m.return=v,v=m):(w=Hs(p.type,p.key,p.props,null,v.mode,w),w.ref=Vo(v,m,p),w.return=v,v=w)}return s(v);case Gr:e:{for(C=p.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(v,m.sibling),m=o(m,p.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=xu(p,v.mode,w),m.return=v,v=m}return s(v);case Mn:return C=p._init,b(v,m,C(p._payload),w)}if(Jo(p))return g(v,m,p,w);if(Do(p))return S(v,m,p,w);ys(v,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(v,m.sibling),m=o(m,p),m.return=v,v=m):(n(v,m),m=gu(p,v.mode,w),m.return=v,v=m),s(v)):n(v,m)}return b}var go=Bg(!0),Ug=Bg(!1),Sa=ar(null),ja=null,no=null,Ud=null;function Vd(){Ud=no=ja=null}function Hd(e){var t=Sa.current;ce(Sa),e._currentValue=t}function jc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function co(e,t){ja=e,Ud=no=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Ud!==e)if(e={context:e,memoizedValue:t,next:null},no===null){if(ja===null)throw Error(R(308));no=e,ja.dependencies={lanes:0,firstContext:e}}else no=no.next=e;return t}var Sr=null;function Wd(e){Sr===null?Sr=[e]:Sr.push(e)}function Vg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wd(t)):(n.next=o.next,o.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Fn=!1;function qd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Cn(e,n)}return o=r.interleaved,o===null?(t.next=t,Wd(r)):(t.next=o.next,o.next=t),r.interleaved=t,Cn(e,n)}function Ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Td(e,n)}}function Up(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,r){var o=e.updateQueue;Fn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;s=0,d=c=u=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,S=l;switch(h=t,x=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(x,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(x,f,h):g,h==null)break e;f=he({},f,h);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=x,u=f):d=d.next=x,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Lr|=s,e.lanes=s,e.memoizedState=f}}function Vp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Ji={},cn=ar(Ji),Pi=ar(Ji),Ti=ar(Ji);function jr(e){if(e===Ji)throw Error(R(174));return e}function Gd(e,t){switch(se(Ti,t),se(Pi,e),se(cn,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rc(t,e)}ce(cn),se(cn,t)}function xo(){ce(cn),ce(Pi),ce(Ti)}function Wg(e){jr(Ti.current);var t=jr(cn.current),n=rc(t,e.type);t!==n&&(se(Pi,e),se(cn,n))}function Jd(e){Pi.current===e&&(ce(cn),ce(Pi))}var fe=ar(0);function Ca(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cu=[];function Xd(){for(var e=0;e<cu.length;e++)cu[e]._workInProgressVersionPrimary=null;cu.length=0}var Ms=Rn.ReactCurrentDispatcher,du=Rn.ReactCurrentBatchConfig,zr=0,pe=null,je=null,Ce=null,Ea=!1,ci=!1,Ni=0,ab=0;function Le(){throw Error(R(321))}function Kd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function Qd(e,t,n,r,o,i){if(zr=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ms.current=e===null||e.memoizedState===null?db:fb,e=n(r,o),ci){i=0;do{if(ci=!1,Ni=0,25<=i)throw Error(R(301));i+=1,Ce=je=null,t.updateQueue=null,Ms.current=pb,e=n(r,o)}while(ci)}if(Ms.current=$a,t=je!==null&&je.next!==null,zr=0,Ce=je=pe=null,Ea=!1,t)throw Error(R(300));return e}function Yd(){var e=Ni!==0;return Ni=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?pe.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Tt(){if(je===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ce===null?pe.memoizedState:Ce.next;if(t!==null)Ce=t,je=e;else{if(e===null)throw Error(R(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ce===null?pe.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Ii(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=Tt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,u=null,c=i;do{var d=c.lane;if((zr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,s=r):u=u.next=f,pe.lanes|=d,Lr|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=l,Kt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,pe.lanes|=i,Lr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pu(e){var t=Tt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Kt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qg(){}function Gg(e,t){var n=pe,r=Tt(),o=t(),i=!Kt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ze=!0),r=r.queue,Zd(Kg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,zi(9,Xg.bind(null,n,r,o,t),void 0,null),$e===null)throw Error(R(349));zr&30||Jg(n,t,o)}return o}function Jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xg(e,t,n,r){t.value=n,t.getSnapshot=r,Qg(t)&&Yg(e)}function Kg(e,t,n){return n(function(){Qg(t)&&Yg(e)})}function Qg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Yg(e){var t=Cn(e,1);t!==null&&Jt(t,e,1,-1)}function Hp(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=cb.bind(null,pe,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zg(){return Tt().memoizedState}function Fs(e,t,n,r){var o=rn();pe.flags|=e,o.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var o=Tt();r=r===void 0?null:r;var i=void 0;if(je!==null){var s=je.memoizedState;if(i=s.destroy,r!==null&&Kd(r,s.deps)){o.memoizedState=zi(t,n,i,r);return}}pe.flags|=e,o.memoizedState=zi(1|t,n,i,r)}function Wp(e,t){return Fs(8390656,8,e,t)}function Zd(e,t){return cl(2048,8,e,t)}function ex(e,t){return cl(4,2,e,t)}function tx(e,t){return cl(4,4,e,t)}function nx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rx(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,nx.bind(null,t,e),n)}function ef(){}function ox(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ix(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sx(e,t,n){return zr&21?(Kt(n,t)||(n=dg(),pe.lanes|=n,Lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function lb(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=du.transition;du.transition={};try{e(!1),t()}finally{ee=n,du.transition=r}}function ax(){return Tt().memoizedState}function ub(e,t,n){var r=er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lx(e))ux(t,n);else if(n=Vg(e,t,n,r),n!==null){var o=He();Jt(n,e,r,o),cx(n,t,r)}}function cb(e,t,n){var r=er(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(e))ux(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Kt(l,s)){var u=t.interleaved;u===null?(o.next=o,Wd(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Vg(e,t,o,r),n!==null&&(o=He(),Jt(n,e,r,o),cx(n,t,r))}}function lx(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function ux(e,t){ci=Ea=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Td(e,n)}}var $a={readContext:Pt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},db={readContext:Pt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Wp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,nx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ub.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:Hp,useDebugValue:ef,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=Hp(!1),t=e[0];return e=lb.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,o=rn();if(de){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),$e===null)throw Error(R(349));zr&30||Jg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Wp(Kg.bind(null,r,i,e),[e]),r.flags|=2048,zi(9,Xg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=rn(),t=$e.identifierPrefix;if(de){var n=bn,r=wn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ab++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fb={readContext:Pt,useCallback:ox,useContext:Pt,useEffect:Zd,useImperativeHandle:rx,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:ix,useReducer:fu,useRef:Zg,useState:function(){return fu(Ii)},useDebugValue:ef,useDeferredValue:function(e){var t=Tt();return sx(t,je.memoizedState,e)},useTransition:function(){var e=fu(Ii)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Gg,useId:ax,unstable_isNewReconciler:!1},pb={readContext:Pt,useCallback:ox,useContext:Pt,useEffect:Zd,useImperativeHandle:rx,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:ix,useReducer:pu,useRef:Zg,useState:function(){return pu(Ii)},useDebugValue:ef,useDeferredValue:function(e){var t=Tt();return je===null?t.memoizedState=e:sx(t,je.memoizedState,e)},useTransition:function(){var e=pu(Ii)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Gg,useId:ax,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),o=er(e),i=Sn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Yn(e,i,o),t!==null&&(Jt(t,e,o,r),Ds(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),o=er(e),i=Sn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yn(e,i,o),t!==null&&(Jt(t,e,o,r),Ds(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=er(e),o=Sn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yn(e,o,r),t!==null&&(Jt(t,e,r,n),Ds(t,e,r))}};function qp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(o,i):!0}function dx(e,t,n){var r=!1,o=ir,i=t.contextType;return typeof i=="object"&&i!==null?i=Pt(i):(o=tt(t)?Nr:Fe.current,r=t.contextTypes,i=(r=r!=null)?ho(e,o):ir),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Gp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Cc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},qd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Pt(i):(i=tt(t)?Nr:Fe.current,o.context=ho(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(kc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&dl.enqueueReplaceState(o,o.state,null),ka(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t){try{var n="",r=t;do n+=B1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function hu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ec(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hb=typeof WeakMap=="function"?WeakMap:Map;function fx(e,t,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ra||(Ra=!0,Ac=r),Ec(e,t)},n}function px(e,t,n){n=Sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ec(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ec(e,t),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_b.bind(null,e,t,n),t.then(e,e))}function Xp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Sn(-1,1),t.tag=2,Yn(n,t,1))),n.lanes|=1),e)}var mb=Rn.ReactCurrentOwner,Ze=!1;function Ue(e,t,n,r){t.child=e===null?Ug(t,null,n,r):go(t,e.child,n,r)}function Qp(e,t,n,r,o){n=n.render;var i=t.ref;return co(t,o),r=Qd(e,t,n,r,i,o),n=Yd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(de&&n&&Md(t),t.flags|=1,Ue(e,t,r,o),t.child)}function Yp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!uf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hx(e,t,i,r,o)):(e=Hs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(s,r)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=tr(i,r),e.ref=t.ref,e.return=t,t.child=e}function hx(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ei(i,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,En(e,t,o)}return $c(e,t,n,r,o)}function mx(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(oo,ct),ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(oo,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(oo,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(oo,ct),ct|=r;return Ue(e,t,o,n),t.child}function gx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $c(e,t,n,r,o){var i=tt(n)?Nr:Fe.current;return i=ho(t,i),co(t,o),n=Qd(e,t,n,r,i,o),r=Yd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(de&&r&&Md(t),t.flags|=1,Ue(e,t,n,o),t.child)}function Zp(e,t,n,r,o){if(tt(n)){var i=!0;ya(t)}else i=!1;if(co(t,o),t.stateNode===null)Bs(e,t),dx(t,n,r),Cc(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pt(c):(c=tt(n)?Nr:Fe.current,c=ho(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Gp(t,s,r,c),Fn=!1;var h=t.memoizedState;s.state=h,ka(t,r,s,o),u=t.memoizedState,l!==r||h!==u||et.current||Fn?(typeof d=="function"&&(kc(t,n,d,r),u=t.memoizedState),(l=Fn||qp(t,n,l,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Hg(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Vt(t.type,l),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=tt(n)?Nr:Fe.current,u=ho(t,u));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==u)&&Gp(t,s,r,u),Fn=!1,h=t.memoizedState,s.state=h,ka(t,r,s,o);var g=t.memoizedState;l!==f||h!==g||et.current||Fn?(typeof x=="function"&&(kc(t,n,x,r),g=t.memoizedState),(c=Fn||qp(t,n,c,r,h,g,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,i,o)}function _c(e,t,n,r,o,i){gx(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Dp(t,n,!1),En(e,t,i);r=t.stateNode,mb.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=go(t,e.child,null,i),t.child=go(t,null,l,i)):Ue(e,t,l,i),t.memoizedState=r.state,o&&Dp(t,n,!0),t.child}function xx(e){var t=e.stateNode;t.pendingContext?Op(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Op(e,t.context,!1),Gd(e,t.containerInfo)}function eh(e,t,n,r,o){return mo(),Bd(o),t.flags|=256,Ue(e,t,n,r),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function Pc(e){return{baseLanes:e,cachePool:null,transitions:null}}function vx(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(fe,o&1),e===null)return Sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=hl(s,r,0,null),e=Rr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pc(n),t.memoizedState=Rc,e):tf(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gb(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=tr(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=tr(l,i):(i=Rr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Pc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Rc,r}return i=e.child,e=i.sibling,r=tr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tf(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ws(e,t,n,r){return r!==null&&Bd(r),go(t,e.child,null,n),e=tf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gb(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=hu(Error(R(422))),ws(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hl({mode:"visible",children:r.children},o,0,null),i=Rr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&go(t,e.child,null,s),t.child.memoizedState=Pc(s),t.memoizedState=Rc,i);if(!(t.mode&1))return ws(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=hu(i,r,void 0),ws(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ze||l){if(r=$e,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Cn(e,o),Jt(r,e,o,-1))}return lf(),r=hu(Error(R(421))),ws(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Rb.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gt=Qn(o.nextSibling),xt=t,de=!0,qt=null,e!==null&&(Et[$t++]=wn,Et[$t++]=bn,Et[$t++]=Ir,wn=e.id,bn=e.overflow,Ir=t),t=tf(t,r.children),t.flags|=4096,t)}function th(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jc(e.return,t,n)}function mu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function yx(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ue(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&th(e,n,t);else if(e.tag===19)th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ca(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),mu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ca(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}mu(t,!0,n,null,i);break;case"together":mu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xb(e,t,n){switch(t.tag){case 3:xx(t),mo();break;case 5:Wg(t);break;case 1:tt(t.type)&&ya(t);break;case 4:Gd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(Sa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?vx(e,t,n):(se(fe,fe.current&1),e=En(e,t,n),e!==null?e.sibling:null);se(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yx(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,mx(e,t,n)}return En(e,t,n)}var wx,Tc,bx,Sx;wx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tc=function(){};bx=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jr(cn.current);var i=null;switch(n){case"input":o=Zu(e,o),r=Zu(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=nc(e,o),r=nc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xa)}oc(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ae("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Sx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ho(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vb(e,t,n){var r=t.pendingProps;switch(Fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return tt(t.type)&&va(),Ae(t),null;case 3:return r=t.stateNode,xo(),ce(et),ce(Fe),Xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Mc(qt),qt=null))),Tc(e,t),Ae(t),null;case 5:Jd(t);var o=jr(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)bx(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ae(t),null}if(e=jr(cn.current),vs(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[sn]=t,r[Ri]=i,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(o=0;o<Ko.length;o++)ae(Ko[o],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":cp(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":fp(r,i),ae("invalid",r)}oc(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&xs(r.textContent,l,e),o=["children",""+l]):yi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":us(r),dp(r,i,!0);break;case"textarea":us(r),pp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=K0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[sn]=t,e[Ri]=r,wx(e,t,!1,!1),t.stateNode=e;e:{switch(s=ic(n,r),n){case"dialog":ae("cancel",e),ae("close",e),o=r;break;case"iframe":case"object":case"embed":ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ko.length;o++)ae(Ko[o],e);o=r;break;case"source":ae("error",e),o=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=r;break;case"details":ae("toggle",e),o=r;break;case"input":cp(e,r),o=Zu(e,r),ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),ae("invalid",e);break;case"textarea":fp(e,r),o=nc(e,r),ae("invalid",e);break;default:o=r}oc(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Z0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Q0(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wi(e,u):typeof u=="number"&&wi(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ae("scroll",e):u!=null&&Cd(e,i,u,s))}switch(n){case"input":us(e),dp(e,r,!1);break;case"textarea":us(e),pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+or(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?so(e,!!r.multiple,i,!1):r.defaultValue!=null&&so(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Sx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=jr(Ti.current),jr(cn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(i=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return Ae(t),null;case 13:if(ce(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&gt!==null&&t.mode&1&&!(t.flags&128))Fg(),mo(),t.flags|=98560,i=!1;else if(i=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[sn]=t}else mo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else qt!==null&&(Mc(qt),qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?ke===0&&(ke=3):lf())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return xo(),Tc(e,t),e===null&&$i(t.stateNode.containerInfo),Ae(t),null;case 10:return Hd(t.type._context),Ae(t),null;case 17:return tt(t.type)&&va(),Ae(t),null;case 19:if(ce(fe),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Ho(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ca(e),s!==null){for(t.flags|=128,Ho(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>yo&&(t.flags|=128,r=!0,Ho(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ca(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ho(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!de)return Ae(t),null}else 2*xe()-i.renderingStartTime>yo&&n!==1073741824&&(t.flags|=128,r=!0,Ho(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=fe.current,se(fe,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return af(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function yb(e,t){switch(Fd(t),t.tag){case 1:return tt(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xo(),ce(et),ce(Fe),Xd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jd(t),null;case 13:if(ce(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(fe),null;case 4:return xo(),null;case 10:return Hd(t.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var bs=!1,De=!1,wb=typeof WeakSet=="function"?WeakSet:Set,z=null;function ro(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Nc(e,t,n){try{n()}catch(r){me(e,t,r)}}var nh=!1;function bb(e,t){if(mc=ha,e=$g(),Dd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===n&&++c===o&&(l=s),h===i&&++d===r&&(u=s),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gc={focusedElem:e,selectionRange:n},ha=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,b=g.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?S:Vt(t.type,S),b);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){me(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=nh,nh=!1,g}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Nc(t,n,i)}o=o.next}while(o!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ic(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jx(e){var t=e.alternate;t!==null&&(e.alternate=null,jx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ri],delete t[yc],delete t[rb],delete t[ob])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kx(e){return e.tag===5||e.tag===3||e.tag===4}function rh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xa));else if(r!==4&&(e=e.child,e!==null))for(zc(e,t,n),e=e.sibling;e!==null;)zc(e,t,n),e=e.sibling}function Lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lc(e,t,n),e=e.sibling;e!==null;)Lc(e,t,n),e=e.sibling}var _e=null,Wt=!1;function In(e,t,n){for(n=n.child;n!==null;)Cx(e,t,n),n=n.sibling}function Cx(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:De||ro(n,t);case 6:var r=_e,o=Wt;_e=null,In(e,t,n),_e=r,Wt=o,_e!==null&&(Wt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Wt?(e=_e,n=n.stateNode,e.nodeType===8?lu(e.parentNode,n):e.nodeType===1&&lu(e,n),ki(e)):lu(_e,n.stateNode));break;case 4:r=_e,o=Wt,_e=n.stateNode.containerInfo,Wt=!0,In(e,t,n),_e=r,Wt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Nc(n,t,s),o=o.next}while(o!==r)}In(e,t,n);break;case 1:if(!De&&(ro(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){me(n,t,l)}In(e,t,n);break;case 21:In(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,In(e,t,n),De=r):In(e,t,n);break;default:In(e,t,n)}}function oh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wb),t.forEach(function(r){var o=Pb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,Wt=!1;break e;case 3:_e=l.stateNode.containerInfo,Wt=!0;break e;case 4:_e=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(_e===null)throw Error(R(160));Cx(i,s,o),_e=null,Wt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){me(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ex(t,e),t=t.sibling}function Ex(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Yt(e),r&4){try{di(3,e,e.return),fl(3,e)}catch(S){me(e,e.return,S)}try{di(5,e,e.return)}catch(S){me(e,e.return,S)}}break;case 1:Mt(t,e),Yt(e),r&512&&n!==null&&ro(n,n.return);break;case 5:if(Mt(t,e),Yt(e),r&512&&n!==null&&ro(n,n.return),e.flags&32){var o=e.stateNode;try{wi(o,"")}catch(S){me(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&J0(o,i),ic(l,s);var c=ic(l,i);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?Z0(o,f):d==="dangerouslySetInnerHTML"?Q0(o,f):d==="children"?wi(o,f):Cd(o,d,f,c)}switch(l){case"input":ec(o,i);break;case"textarea":X0(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?so(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?so(o,!!i.multiple,i.defaultValue,!0):so(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ri]=i}catch(S){me(e,e.return,S)}}break;case 6:if(Mt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){me(e,e.return,S)}}break;case 3:if(Mt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(S){me(e,e.return,S)}break;case 4:Mt(t,e),Yt(e);break;case 13:Mt(t,e),Yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(of=xe())),r&4&&oh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(c=De)||d,Mt(t,e),De=c):Mt(t,e),Yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(f=z=d;z!==null;){switch(h=z,x=h.child,h.tag){case 0:case 11:case 14:case 15:di(4,h,h.return);break;case 1:ro(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){me(r,n,S)}}break;case 5:ro(h,h.return);break;case 22:if(h.memoizedState!==null){sh(f);continue}}x!==null?(x.return=h,z=x):sh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Y0("display",s))}catch(S){me(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){me(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mt(t,e),Yt(e),r&4&&oh(e);break;case 21:break;default:Mt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kx(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wi(o,""),r.flags&=-33);var i=rh(e);Lc(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=rh(e);zc(e,l,s);break;default:throw Error(R(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sb(e,t,n){z=e,$x(e)}function $x(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||bs;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||De;l=bs;var c=De;if(bs=s,(De=u)&&!c)for(z=o;z!==null;)s=z,u=s.child,s.tag===22&&s.memoizedState!==null?ah(o):u!==null?(u.return=s,z=u):ah(o);for(;i!==null;)z=i,$x(i),i=i.sibling;z=o,bs=l,De=c}ih(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):ih(e)}}function ih(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Vp(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vp(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}De||t.flags&512&&Ic(t)}catch(h){me(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function sh(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ah(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){me(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){me(t,o,u)}}var i=t.return;try{Ic(t)}catch(u){me(t,i,u)}break;case 5:var s=t.return;try{Ic(t)}catch(u){me(t,s,u)}}}catch(u){me(t,t.return,u)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var jb=Math.ceil,_a=Rn.ReactCurrentDispatcher,nf=Rn.ReactCurrentOwner,Rt=Rn.ReactCurrentBatchConfig,Q=0,$e=null,be=null,Te=0,ct=0,oo=ar(0),ke=0,Li=null,Lr=0,pl=0,rf=0,fi=null,Ye=null,of=0,yo=1/0,gn=null,Ra=!1,Ac=null,Zn=null,Ss=!1,Hn=null,Pa=0,pi=0,Oc=null,Us=-1,Vs=0;function He(){return Q&6?xe():Us!==-1?Us:Us=xe()}function er(e){return e.mode&1?Q&2&&Te!==0?Te&-Te:sb.transition!==null?(Vs===0&&(Vs=dg()),Vs):(e=ee,e!==0||(e=window.event,e=e===void 0?16:vg(e.type)),e):1}function Jt(e,t,n,r){if(50<pi)throw pi=0,Oc=null,Error(R(185));Wi(e,n,r),(!(Q&2)||e!==$e)&&(e===$e&&(!(Q&2)&&(pl|=n),ke===4&&Un(e,Te)),nt(e,r),n===1&&Q===0&&!(t.mode&1)&&(yo=xe()+500,ul&&lr()))}function nt(e,t){var n=e.callbackNode;sw(e,t);var r=pa(e,e===$e?Te:0);if(r===0)n!==null&&gp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gp(n),t===1)e.tag===0?ib(lh.bind(null,e)):Og(lh.bind(null,e)),tb(function(){!(Q&6)&&lr()}),n=null;else{switch(fg(r)){case 1:n=Pd;break;case 4:n=ug;break;case 16:n=fa;break;case 536870912:n=cg;break;default:n=fa}n=Lx(n,_x.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _x(e,t){if(Us=-1,Vs=0,Q&6)throw Error(R(327));var n=e.callbackNode;if(fo()&&e.callbackNode!==n)return null;var r=pa(e,e===$e?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ta(e,r);else{t=r;var o=Q;Q|=2;var i=Px();($e!==e||Te!==t)&&(gn=null,yo=xe()+500,_r(e,t));do try{Eb();break}catch(l){Rx(e,l)}while(!0);Vd(),_a.current=i,Q=o,be!==null?t=0:($e=null,Te=0,t=ke)}if(t!==0){if(t===2&&(o=cc(e),o!==0&&(r=o,t=Dc(e,o))),t===1)throw n=Li,_r(e,0),Un(e,r),nt(e,xe()),n;if(t===6)Un(e,r);else{if(o=e.current.alternate,!(r&30)&&!kb(o)&&(t=Ta(e,r),t===2&&(i=cc(e),i!==0&&(r=i,t=Dc(e,i))),t===1))throw n=Li,_r(e,0),Un(e,r),nt(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:gr(e,Ye,gn);break;case 3:if(Un(e,r),(r&130023424)===r&&(t=of+500-xe(),10<t)){if(pa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vc(gr.bind(null,e,Ye,gn),t);break}gr(e,Ye,gn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Gt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jb(r/1960))-r,10<r){e.timeoutHandle=vc(gr.bind(null,e,Ye,gn),r);break}gr(e,Ye,gn);break;case 5:gr(e,Ye,gn);break;default:throw Error(R(329))}}}return nt(e,xe()),e.callbackNode===n?_x.bind(null,e):null}function Dc(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=Ta(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Mc(t)),e}function Mc(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function kb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Kt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~rf,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function lh(e){if(Q&6)throw Error(R(327));fo();var t=pa(e,0);if(!(t&1))return nt(e,xe()),null;var n=Ta(e,t);if(e.tag!==0&&n===2){var r=cc(e);r!==0&&(t=r,n=Dc(e,r))}if(n===1)throw n=Li,_r(e,0),Un(e,t),nt(e,xe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,Ye,gn),nt(e,xe()),null}function sf(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(yo=xe()+500,ul&&lr())}}function Ar(e){Hn!==null&&Hn.tag===0&&!(Q&6)&&fo();var t=Q;Q|=1;var n=Rt.transition,r=ee;try{if(Rt.transition=null,ee=1,e)return e()}finally{ee=r,Rt.transition=n,Q=t,!(Q&6)&&lr()}}function af(){ct=oo.current,ce(oo)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eb(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:xo(),ce(et),ce(Fe),Xd();break;case 5:Jd(r);break;case 4:xo();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Hd(r.type._context);break;case 22:case 23:af()}n=n.return}if($e=e,be=e=tr(e.current,null),Te=ct=t,ke=0,Li=null,rf=pl=Lr=0,Ye=fi=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Sr=null}return e}function Rx(e,t){do{var n=be;try{if(Vd(),Ms.current=$a,Ea){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ea=!1}if(zr=0,Ce=je=pe=null,ci=!1,Ni=0,nf.current=null,n===null||n.return===null){ke=1,Li=t,be=null;break}e:{var i=e,s=n.return,l=n,u=t;if(t=Te,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Xp(s);if(x!==null){x.flags&=-257,Kp(x,s,l,i,t),x.mode&1&&Jp(i,c,t),t=x,u=c;var g=t.updateQueue;if(g===null){var S=new Set;S.add(u),t.updateQueue=S}else g.add(u);break e}else{if(!(t&1)){Jp(i,c,t),lf();break e}u=Error(R(426))}}else if(de&&l.mode&1){var b=Xp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Kp(b,s,l,i,t),Bd(vo(u,l));break e}}i=u=vo(u,l),ke!==4&&(ke=2),fi===null?fi=[i]:fi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=fx(i,u,t);Up(i,v);break e;case 1:l=u;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zn===null||!Zn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=px(i,l,t);Up(i,w);break e}}i=i.return}while(i!==null)}Nx(n)}catch(j){t=j,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Px(){var e=_a.current;return _a.current=$a,e===null?$a:e}function lf(){(ke===0||ke===3||ke===2)&&(ke=4),$e===null||!(Lr&268435455)&&!(pl&268435455)||Un($e,Te)}function Ta(e,t){var n=Q;Q|=2;var r=Px();($e!==e||Te!==t)&&(gn=null,_r(e,t));do try{Cb();break}catch(o){Rx(e,o)}while(!0);if(Vd(),Q=n,_a.current=r,be!==null)throw Error(R(261));return $e=null,Te=0,ke}function Cb(){for(;be!==null;)Tx(be)}function Eb(){for(;be!==null&&!Q1();)Tx(be)}function Tx(e){var t=zx(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Nx(e):be=t,nf.current=null}function Nx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yb(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,be=null;return}}else if(n=vb(n,t,ct),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);ke===0&&(ke=5)}function gr(e,t,n){var r=ee,o=Rt.transition;try{Rt.transition=null,ee=1,$b(e,t,n,r)}finally{Rt.transition=o,ee=r}return null}function $b(e,t,n,r){do fo();while(Hn!==null);if(Q&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(aw(e,i),e===$e&&(be=$e=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,Lx(fa,function(){return fo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Rt.transition,Rt.transition=null;var s=ee;ee=1;var l=Q;Q|=4,nf.current=null,bb(e,n),Ex(n,e),Gw(gc),ha=!!mc,gc=mc=null,e.current=n,Sb(n),Y1(),Q=l,ee=s,Rt.transition=i}else e.current=n;if(Ss&&(Ss=!1,Hn=e,Pa=o),i=e.pendingLanes,i===0&&(Zn=null),tw(n.stateNode),nt(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ra)throw Ra=!1,e=Ac,Ac=null,e;return Pa&1&&e.tag!==0&&fo(),i=e.pendingLanes,i&1?e===Oc?pi++:(pi=0,Oc=e):pi=0,lr(),null}function fo(){if(Hn!==null){var e=fg(Pa),t=Rt.transition,n=ee;try{if(Rt.transition=null,ee=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,Pa=0,Q&6)throw Error(R(331));var o=Q;for(Q|=4,z=e.current;z!==null;){var i=z,s=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:di(8,d,i)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var h=d.sibling,x=d.return;if(jx(d),d===c){z=null;break}if(h!==null){h.return=x,z=h;break}z=x}}}var g=i.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}z=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,z=s;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:di(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,z=v;break e}z=i.return}}var m=e.current;for(z=m;z!==null;){s=z;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,z=p;else e:for(s=m;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fl(9,l)}}catch(j){me(l,l.return,j)}if(l===s){z=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,z=w;break e}z=l.return}}if(Q=o,lr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{ee=n,Rt.transition=t}}return!1}function uh(e,t,n){t=vo(n,t),t=fx(e,t,1),e=Yn(e,t,1),t=He(),e!==null&&(Wi(e,1,t),nt(e,t))}function me(e,t,n){if(e.tag===3)uh(e,e,n);else for(;t!==null;){if(t.tag===3){uh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=vo(n,e),e=px(t,e,1),t=Yn(t,e,1),e=He(),t!==null&&(Wi(t,1,e),nt(t,e));break}}t=t.return}}function _b(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Te&n)===n&&(ke===4||ke===3&&(Te&130023424)===Te&&500>xe()-of?_r(e,0):rf|=n),nt(e,t)}function Ix(e,t){t===0&&(e.mode&1?(t=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):t=1);var n=He();e=Cn(e,t),e!==null&&(Wi(e,t,n),nt(e,n))}function Rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ix(e,n)}function Pb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Ix(e,n)}var zx;zx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,xb(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,de&&t.flags&1048576&&Dg(t,ba,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bs(e,t),e=t.pendingProps;var o=ho(t,Fe.current);co(t,n),o=Qd(null,t,r,e,o,n);var i=Yd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,ya(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qd(t),o.updater=dl,t.stateNode=o,o._reactInternals=t,Cc(t,r,e,n),t=_c(null,t,r,!0,i,n)):(t.tag=0,de&&i&&Md(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Nb(r),e=Vt(r,e),o){case 0:t=$c(null,t,r,e,n);break e;case 1:t=Zp(null,t,r,e,n);break e;case 11:t=Qp(null,t,r,e,n);break e;case 14:t=Yp(null,t,r,Vt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),$c(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Zp(e,t,r,o,n);case 3:e:{if(xx(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Hg(e,t),ka(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vo(Error(R(423)),t),t=eh(e,t,r,n,o);break e}else if(r!==o){o=vo(Error(R(424)),t),t=eh(e,t,r,n,o);break e}else for(gt=Qn(t.stateNode.containerInfo.firstChild),xt=t,de=!0,qt=null,n=Ug(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),r===o){t=En(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Wg(t),e===null&&Sc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,xc(r,o)?s=null:i!==null&&xc(r,i)&&(t.flags|=32),gx(e,t),Ue(e,t,s,n),t.child;case 6:return e===null&&Sc(t),null;case 13:return vx(e,t,n);case 4:return Gd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=go(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Qp(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,se(Sa,r._currentValue),r._currentValue=s,i!==null)if(Kt(i.value,s)){if(i.children===o.children&&!et.current){t=En(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),jc(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,co(t,n),o=Pt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=Vt(r,t.pendingProps),o=Vt(r.type,o),Yp(e,t,r,o,n);case 15:return hx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Bs(e,t),t.tag=1,tt(r)?(e=!0,ya(t)):e=!1,co(t,n),dx(t,r,o),Cc(t,r,o,n),_c(null,t,r,!0,e,n);case 19:return yx(e,t,n);case 22:return mx(e,t,n)}throw Error(R(156,t.tag))};function Lx(e,t){return lg(e,t)}function Tb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new Tb(e,t,n,r)}function uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nb(e){if(typeof e=="function")return uf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$d)return 11;if(e===_d)return 14}return 2}function tr(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hs(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")uf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jr:return Rr(n.children,o,i,t);case Ed:s=8,o|=8;break;case Xu:return e=_t(12,n,t,o|2),e.elementType=Xu,e.lanes=i,e;case Ku:return e=_t(13,n,t,o),e.elementType=Ku,e.lanes=i,e;case Qu:return e=_t(19,n,t,o),e.elementType=Qu,e.lanes=i,e;case W0:return hl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V0:s=10;break e;case H0:s=9;break e;case $d:s=11;break e;case _d:s=14;break e;case Mn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=_t(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Rr(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=_t(22,e,r,t),e.elementType=W0,e.lanes=n,e.stateNode={isHidden:!1},e}function gu(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function xu(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ib(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cf(e,t,n,r,o,i,s,l,u){return e=new Ib(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qd(i),e}function zb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ax(e){if(!e)return ir;e=e._reactInternals;e:{if(Fr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(tt(n))return Ag(e,n,t)}return t}function Ox(e,t,n,r,o,i,s,l,u){return e=cf(n,r,!0,e,o,i,s,l,u),e.context=Ax(null),n=e.current,r=He(),o=er(n),i=Sn(r,o),i.callback=t??null,Yn(n,i,o),e.current.lanes=o,Wi(e,o,r),nt(e,r),e}function ml(e,t,n,r){var o=t.current,i=He(),s=er(o);return n=Ax(n),t.context===null?t.context=n:t.pendingContext=n,t=Sn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yn(o,t,s),e!==null&&(Jt(e,o,s,i),Ds(e,o,s)),s}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function df(e,t){ch(e,t),(e=e.alternate)&&ch(e,t)}function Lb(){return null}var Dx=typeof reportError=="function"?reportError:function(e){console.error(e)};function ff(e){this._internalRoot=e}gl.prototype.render=ff.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ml(e,t,null,null)};gl.prototype.unmount=ff.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ar(function(){ml(null,e,null,null)}),t[kn]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&xg(e)}};function pf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dh(){}function Ab(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Na(s);i.call(c)}}var s=Ox(t,r,e,0,null,!1,!1,"",dh);return e._reactRootContainer=s,e[kn]=s.current,$i(e.nodeType===8?e.parentNode:e),Ar(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Na(u);l.call(c)}}var u=cf(e,0,!1,null,null,!1,!1,"",dh);return e._reactRootContainer=u,e[kn]=u.current,$i(e.nodeType===8?e.parentNode:e),Ar(function(){ml(t,u,n,r)}),u}function vl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var u=Na(s);l.call(u)}}ml(t,s,e,o)}else s=Ab(n,t,e,o,r);return Na(s)}pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xo(t.pendingLanes);n!==0&&(Td(t,n|1),nt(t,xe()),!(Q&6)&&(yo=xe()+500,lr()))}break;case 13:Ar(function(){var r=Cn(e,1);if(r!==null){var o=He();Jt(r,e,1,o)}}),df(e,1)}};Nd=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=He();Jt(t,e,134217728,n)}df(e,134217728)}};hg=function(e){if(e.tag===13){var t=er(e),n=Cn(e,t);if(n!==null){var r=He();Jt(n,e,t,r)}df(e,t)}};mg=function(){return ee};gg=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ac=function(e,t,n){switch(t){case"input":if(ec(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ll(r);if(!o)throw Error(R(90));G0(r),ec(r,o)}}}break;case"textarea":X0(e,n);break;case"select":t=n.value,t!=null&&so(e,!!n.multiple,t,!1)}};ng=sf;rg=Ar;var Ob={usingClientEntryPoint:!1,Events:[Gi,Yr,ll,eg,tg,sf]},Wo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Db={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sg(e),e===null?null:e.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||Lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{ol=js.inject(Db),un=js}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ob;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(t))throw Error(R(200));return zb(e,t,null,n)};wt.createRoot=function(e,t){if(!pf(e))throw Error(R(299));var n=!1,r="",o=Dx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cf(e,1,!1,null,null,n,!1,r,o),e[kn]=t.current,$i(e.nodeType===8?e.parentNode:e),new ff(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=sg(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Ar(e)};wt.hydrate=function(e,t,n){if(!xl(t))throw Error(R(200));return vl(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!pf(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Dx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ox(t,null,e,1,n??null,o,!1,i,s),e[kn]=t.current,$i(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};wt.render=function(e,t,n){if(!xl(t))throw Error(R(200));return vl(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!xl(e))throw Error(R(40));return e._reactRootContainer?(Ar(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};wt.unstable_batchedUpdates=sf;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return vl(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mx)}catch(e){console.error(e)}}Mx(),M0.exports=wt;var Mb=M0.exports,Fx,fh=Mb;Fx=fh.createRoot,fh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}var Wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wn||(Wn={}));const ph="popstate";function Fb(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Fc("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ia(o)}return Ub(t,n,null,e)}function ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bx(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bb(){return Math.random().toString(36).substr(2,8)}function hh(e,t){return{usr:e.state,key:e.key,idx:t}}function Fc(e,t,n,r){return n===void 0&&(n=null),Ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ro(t):t,{state:n,key:t&&t.key||r||Bb()})}function Ia(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ro(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ub(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Wn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Ai({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=Wn.Pop;let b=d(),v=b==null?null:b-c;c=b,u&&u({action:l,location:S.location,delta:v})}function h(b,v){l=Wn.Push;let m=Fc(S.location,b,v);c=d()+1;let p=hh(m,c),w=S.createHref(m);try{s.pushState(p,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(w)}i&&u&&u({action:l,location:S.location,delta:1})}function x(b,v){l=Wn.Replace;let m=Fc(S.location,b,v);c=d();let p=hh(m,c),w=S.createHref(m);s.replaceState(p,"",w),i&&u&&u({action:l,location:S.location,delta:0})}function g(b){let v=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof b=="string"?b:Ia(b);return m=m.replace(/ $/,"%20"),ve(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let S={get action(){return l},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(ph,f),u=b,()=>{o.removeEventListener(ph,f),u=null}},createHref(b){return t(o,b)},createURL:g,encodeLocation(b){let v=g(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:x,go(b){return s.go(b)}};return S}var mh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mh||(mh={}));function Vb(e,t,n){return n===void 0&&(n="/"),Hb(e,t,n,!1)}function Hb(e,t,n,r){let o=typeof t=="string"?Ro(t):t,i=hf(o.pathname||"/",n);if(i==null)return null;let s=Ux(e);Wb(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=nS(i);l=eS(s[u],c,r)}return l}function Ux(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=nr([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ux(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Yb(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let u of Vx(i.path))o(i,s,u)}),t}function Vx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Vx(r.join("/")),l=[];return l.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Wb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Zb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qb=/^:[\w-]+$/,Gb=3,Jb=2,Xb=1,Kb=10,Qb=-2,gh=e=>e==="*";function Yb(e,t){let n=e.split("/"),r=n.length;return n.some(gh)&&(r+=Qb),t&&(r+=Jb),n.filter(o=>!gh(o)).reduce((o,i)=>o+(qb.test(i)?Gb:i===""?Xb:Kb),r)}function Zb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function eS(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=xh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),h=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=xh({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:nr([i,f.pathname]),pathnameBase:sS(nr([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=nr([i,f.pathnameBase]))}return s}function xh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tS(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:x}=d;if(h==="*"){let S=l[f]||"";s=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const g=l[f];return x&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function tS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bx(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function nS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bx(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ro(e):e;return{pathname:n?n.startsWith("/")?n:oS(n,t):t,search:aS(r),hash:lS(o)}}function oS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function vu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mf(e,t){let n=iS(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function gf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ro(e):(o=Ai({},e),ve(!o.pathname||!o.pathname.includes("?"),vu("?","pathname","search",o)),ve(!o.pathname||!o.pathname.includes("#"),vu("#","pathname","hash",o)),ve(!o.search||!o.search.includes("#"),vu("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}l=f>=0?t[f]:"/"}let u=rS(o,l),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),sS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),aS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hx=["post","put","patch","delete"];new Set(Hx);const cS=["get",...Hx];new Set(cS);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}const xf=y.createContext(null),dS=y.createContext(null),ur=y.createContext(null),yl=y.createContext(null),dn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Wx=y.createContext(null);function fS(e,t){let{relative:n}=t===void 0?{}:t;Po()||ve(!1);let{basename:r,navigator:o}=y.useContext(ur),{hash:i,pathname:s,search:l}=Gx(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:nr([r,s])),o.createHref({pathname:u,search:l,hash:i})}function Po(){return y.useContext(yl)!=null}function Xi(){return Po()||ve(!1),y.useContext(yl).location}function qx(e){y.useContext(ur).static||y.useLayoutEffect(e)}function ge(){let{isDataRoute:e}=y.useContext(dn);return e?$S():pS()}function pS(){Po()||ve(!1);let e=y.useContext(xf),{basename:t,future:n,navigator:r}=y.useContext(ur),{matches:o}=y.useContext(dn),{pathname:i}=Xi(),s=JSON.stringify(mf(o,n.v7_relativeSplatPath)),l=y.useRef(!1);return qx(()=>{l.current=!0}),y.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=gf(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:nr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}const hS=y.createContext(null);function mS(e){let t=y.useContext(dn).outlet;return t&&y.createElement(hS.Provider,{value:e},t)}function cr(){let{matches:e}=y.useContext(dn),t=e[e.length-1];return t?t.params:{}}function Gx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(ur),{matches:o}=y.useContext(dn),{pathname:i}=Xi(),s=JSON.stringify(mf(o,r.v7_relativeSplatPath));return y.useMemo(()=>gf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function gS(e,t){return xS(e,t)}function xS(e,t,n,r){Po()||ve(!1);let{navigator:o}=y.useContext(ur),{matches:i}=y.useContext(dn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Xi(),d;if(t){var f;let b=typeof t=="string"?Ro(t):t;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||ve(!1),d=b}else d=c;let h=d.pathname||"/",x=h;if(u!=="/"){let b=u.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=Vb(e,{pathname:x}),S=SS(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:nr([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:nr([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&S?y.createElement(yl.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Wn.Pop}},S):S}function vS(){let e=ES(),t=uS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const yS=y.createElement(vS,null);class wS extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(dn.Provider,{value:this.props.routeContext},y.createElement(Wx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bS(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(xf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(dn.Provider,{value:t},r)}function SS(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ve(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:x}=n,g=f.route.loader&&h[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||g){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let x,g=!1,S=null,b=null;n&&(x=l&&f.route.id?l[f.route.id]:void 0,S=f.route.errorElement||yS,u&&(c<0&&h===0?(g=!0,b=null):c===h&&(g=!0,b=f.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,h+1)),m=()=>{let p;return x?p=S:g?p=b:f.route.Component?p=y.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,y.createElement(bS,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(wS,{location:n.location,revalidation:n.revalidation,component:S,error:x,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Jx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jx||{}),za=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(za||{});function jS(e){let t=y.useContext(xf);return t||ve(!1),t}function kS(e){let t=y.useContext(dS);return t||ve(!1),t}function CS(e){let t=y.useContext(dn);return t||ve(!1),t}function Xx(e){let t=CS(),n=t.matches[t.matches.length-1];return n.route.id||ve(!1),n.route.id}function ES(){var e;let t=y.useContext(Wx),n=kS(za.UseRouteError),r=Xx(za.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $S(){let{router:e}=jS(Jx.UseNavigateStable),t=Xx(za.UseNavigateStable),n=y.useRef(!1);return qx(()=>{n.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Oi({fromRouteId:t},i)))},[e,t])}function _S(e){let{to:t,replace:n,state:r,relative:o}=e;Po()||ve(!1);let{future:i,static:s}=y.useContext(ur),{matches:l}=y.useContext(dn),{pathname:u}=Xi(),c=ge(),d=gf(t,mf(l,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(d);return y.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function RS(e){return mS(e.context)}function H(e){ve(!1)}function PS(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Wn.Pop,navigator:i,static:s=!1,future:l}=e;Po()&&ve(!1);let u=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:u,navigator:i,static:s,future:Oi({v7_relativeSplatPath:!1},l)}),[u,l,i,s]);typeof r=="string"&&(r=Ro(r));let{pathname:d="/",search:f="",hash:h="",state:x=null,key:g="default"}=r,S=y.useMemo(()=>{let b=hf(d,u);return b==null?null:{location:{pathname:b,search:f,hash:h,state:x,key:g},navigationType:o}},[u,d,f,h,x,g,o]);return S==null?null:y.createElement(ur.Provider,{value:c},y.createElement(yl.Provider,{children:n,value:S}))}function TS(e){let{children:t,location:n}=e;return gS(Bc(t),n)}new Promise(()=>{});function Bc(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...t,o];if(r.type===y.Fragment){n.push.apply(n,Bc(r.props.children,i));return}r.type!==H&&ve(!1),!r.props.index||!r.props.children||ve(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Bc(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uc(){return Uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uc.apply(this,arguments)}function NS(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function IS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zS(e,t){return e.button===0&&(!t||t==="_self")&&!IS(e)}const LS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],AS="6";try{window.__reactRouterVersion=AS}catch{}const OS="startTransition",vh=_1[OS];function DS(e){let{basename:t,children:n,future:r,window:o}=e,i=y.useRef();i.current==null&&(i.current=Fb({window:o,v5Compat:!0}));let s=i.current,[l,u]=y.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&vh?vh(()=>u(f)):u(f)},[u,c]);return y.useLayoutEffect(()=>s.listen(d),[s,d]),y.createElement(PS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const MS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,h=NS(t,LS),{basename:x}=y.useContext(ur),g,S=!1;if(typeof c=="string"&&FS.test(c)&&(g=c,MS))try{let p=new URL(window.location.href),w=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=hf(w.pathname,x);w.origin===p.origin&&j!=null?c=j+w.search+w.hash:S=!0}catch{}let b=fS(c,{relative:o}),v=BS(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:o,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||v(p)}return y.createElement("a",Uc({},h,{href:g||b,onClick:S||i?r:m,ref:n,target:u}))});var yh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yh||(yh={}));var wh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wh||(wh={}));function BS(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,u=ge(),c=Xi(),d=Gx(e,{relative:s});return y.useCallback(f=>{if(zS(f,n)){f.preventDefault();let h=r!==void 0?r:Ia(c)===Ia(d);u(e,{replace:h,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[c,u,d,r,o,n,e,i,s,l])}var Me=function(){return Me=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Me.apply(this,arguments)};function wo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var le="-ms-",hi="-moz-",Y="-webkit-",Kx="comm",wl="rule",vf="decl",US="@import",Qx="@keyframes",VS="@layer",Yx=Math.abs,yf=String.fromCharCode,Vc=Object.assign;function HS(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function Zx(e){return e.trim()}function xn(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Ws(e,t,n){return e.indexOf(t,n)}function Ee(e,t){return e.charCodeAt(t)|0}function bo(e,t,n){return e.slice(t,n)}function on(e){return e.length}function ev(e){return e.length}function Qo(e,t){return t.push(e),e}function WS(e,t){return e.map(t).join("")}function bh(e,t){return e.filter(function(n){return!xn(n,t)})}var bl=1,So=1,tv=0,Nt=0,we=0,To="";function Sl(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:bl,column:So,length:s,return:"",siblings:l}}function An(e,t){return Vc(Sl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vr(e){for(;e.root;)e=An(e.root,{children:[e]});Qo(e,e.siblings)}function qS(){return we}function GS(){return we=Nt>0?Ee(To,--Nt):0,So--,we===10&&(So=1,bl--),we}function Xt(){return we=Nt<tv?Ee(To,Nt++):0,So++,we===10&&(So=1,bl++),we}function Pr(){return Ee(To,Nt)}function qs(){return Nt}function jl(e,t){return bo(To,e,t)}function Hc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function JS(e){return bl=So=1,tv=on(To=e),Nt=0,[]}function XS(e){return To="",e}function yu(e){return Zx(jl(Nt-1,Wc(e===91?e+2:e===40?e+1:e)))}function KS(e){for(;(we=Pr())&&we<33;)Xt();return Hc(e)>2||Hc(we)>3?"":" "}function QS(e,t){for(;--t&&Xt()&&!(we<48||we>102||we>57&&we<65||we>70&&we<97););return jl(e,qs()+(t<6&&Pr()==32&&Xt()==32))}function Wc(e){for(;Xt();)switch(we){case e:return Nt;case 34:case 39:e!==34&&e!==39&&Wc(we);break;case 40:e===41&&Wc(e);break;case 92:Xt();break}return Nt}function YS(e,t){for(;Xt()&&e+we!==57;)if(e+we===84&&Pr()===47)break;return"/*"+jl(t,Nt-1)+"*"+yf(e===47?e:Xt())}function ZS(e){for(;!Hc(Pr());)Xt();return jl(e,Nt)}function ej(e){return XS(Gs("",null,null,null,[""],e=JS(e),0,[0],e))}function Gs(e,t,n,r,o,i,s,l,u){for(var c=0,d=0,f=s,h=0,x=0,g=0,S=1,b=1,v=1,m=0,p="",w=o,j=i,C=r,$=p;b;)switch(g=m,m=Xt()){case 40:if(g!=108&&Ee($,f-1)==58){Ws($+=V(yu(m),"&","&\f"),"&\f",Yx(c?l[c-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:$+=yu(m);break;case 9:case 10:case 13:case 32:$+=KS(g);break;case 92:$+=QS(qs()-1,7);continue;case 47:switch(Pr()){case 42:case 47:Qo(tj(YS(Xt(),qs()),t,n,u),u);break;default:$+="/"}break;case 123*S:l[c++]=on($)*v;case 125*S:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+d:v==-1&&($=V($,/\f/g,"")),x>0&&on($)-f&&Qo(x>32?jh($+";",r,n,f-1,u):jh(V($," ","")+";",r,n,f-2,u),u);break;case 59:$+=";";default:if(Qo(C=Sh($,t,n,c,d,o,l,p,w=[],j=[],f,i),i),m===123)if(d===0)Gs($,t,C,C,w,i,f,l,j);else switch(h===99&&Ee($,3)===110?100:h){case 100:case 108:case 109:case 115:Gs(e,C,C,r&&Qo(Sh(e,C,C,0,0,o,l,p,o,w=[],f,j),j),o,j,f,l,r?w:j);break;default:Gs($,C,C,C,[""],j,0,l,j)}}c=d=x=0,S=v=1,p=$="",f=s;break;case 58:f=1+on($),x=g;default:if(S<1){if(m==123)--S;else if(m==125&&S++==0&&GS()==125)continue}switch($+=yf(m),m*S){case 38:v=d>0?1:($+="\f",-1);break;case 44:l[c++]=(on($)-1)*v,v=1;break;case 64:Pr()===45&&($+=yu(Xt())),h=Pr(),d=f=on(p=$+=ZS(qs())),m++;break;case 45:g===45&&on($)==2&&(S=0)}}return i}function Sh(e,t,n,r,o,i,s,l,u,c,d,f){for(var h=o-1,x=o===0?i:[""],g=ev(x),S=0,b=0,v=0;S<r;++S)for(var m=0,p=bo(e,h+1,h=Yx(b=s[S])),w=e;m<g;++m)(w=Zx(b>0?x[m]+" "+p:V(p,/&\f/g,x[m])))&&(u[v++]=w);return Sl(e,t,n,o===0?wl:l,u,c,d,f)}function tj(e,t,n,r){return Sl(e,t,n,Kx,yf(qS()),bo(e,2,-2),0,r)}function jh(e,t,n,r,o){return Sl(e,t,n,vf,bo(e,0,r),bo(e,r+1,-1),r,o)}function nv(e,t,n){switch(HS(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+hi+e+le+e+e;case 5936:switch(Ee(e,t+11)){case 114:return Y+e+le+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+le+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+le+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+le+e+e;case 6165:return Y+e+le+"flex-"+e+e;case 5187:return Y+e+V(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return Y+e+le+"flex-item-"+V(e,/flex-|-self/g,"")+(xn(e,/flex-|baseline/)?"":le+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return Y+e+le+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+le+V(e,"shrink","negative")+e;case 5292:return Y+e+le+V(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+V(e,"-grow","")+Y+e+le+V(e,"grow","positive")+e;case 4554:return Y+V(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!xn(e,/flex-|baseline/))return le+"grid-column-align"+bo(e,t)+e;break;case 2592:case 3360:return le+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,xn(r.props,/grid-\w+-end/)})?~Ws(e+(n=n[t].value),"span",0)?e:le+V(e,"-start","")+e+le+"grid-row-span:"+(~Ws(n,"span",0)?xn(n,/\d+/):+xn(n,/\d+/)-+xn(e,/\d+/))+";":le+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xn(r.props,/grid-\w+-start/)})?e:le+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+hi+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ws(e,"stretch",0)?nv(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,u,c){return le+o+":"+i+c+(s?le+o+"-span:"+(l?u:+u-+i)+c:"")+e});case 4949:if(Ee(e,t+6)===121)return V(e,":",":"+Y)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(Ee(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+le+"$2box$3")+e;case 100:return V(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function La(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nj(e,t,n,r){switch(e.type){case VS:if(e.children.length)break;case US:case vf:return e.return=e.return||e.value;case Kx:return"";case Qx:return e.return=e.value+"{"+La(e.children,r)+"}";case wl:if(!on(e.value=e.props.join(",")))return""}return on(n=La(e.children,r))?e.return=e.value+"{"+n+"}":""}function rj(e){var t=ev(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function oj(e){return function(t){t.root||(t=t.return)&&e(t)}}function ij(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vf:e.return=nv(e.value,e.length,n);return;case Qx:return La([An(e,{value:V(e.value,"@","@"+Y)})],r);case wl:if(e.length)return WS(n=e.props,function(o){switch(xn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vr(An(e,{props:[V(o,/:(read-\w+)/,":"+hi+"$1")]})),Vr(An(e,{props:[o]})),Vc(e,{props:bh(n,r)});break;case"::placeholder":Vr(An(e,{props:[V(o,/:(plac\w+)/,":"+Y+"input-$1")]})),Vr(An(e,{props:[V(o,/:(plac\w+)/,":"+hi+"$1")]})),Vr(An(e,{props:[V(o,/:(plac\w+)/,le+"input-$1")]})),Vr(An(e,{props:[o]})),Vc(e,{props:bh(n,r)});break}return""})}}var sj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},jo=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",rv="active",ov="data-styled-version",kl="6.1.13",wf=`/*!sc*/
`,Aa=typeof window<"u"&&"HTMLElement"in window,aj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),lj={},Cl=Object.freeze([]),ko=Object.freeze({});function iv(e,t,n){return n===void 0&&(n=ko),e.theme!==n.theme&&e.theme||t||n.theme}var sv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cj=/(^-|-$)/g;function kh(e){return e.replace(uj,"-").replace(cj,"")}var dj=/(a)(d)/gi,ks=52,Ch=function(e){return String.fromCharCode(e+(e>25?39:97))};function qc(e){var t,n="";for(t=Math.abs(e);t>ks;t=t/ks|0)n=Ch(t%ks)+n;return(Ch(t%ks)+n).replace(dj,"$1-$2")}var wu,av=5381,io=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lv=function(e){return io(av,e)};function bf(e){return qc(lv(e)>>>0)}function fj(e){return e.displayName||e.name||"Component"}function bu(e){return typeof e=="string"&&!0}var uv=typeof Symbol=="function"&&Symbol.for,cv=uv?Symbol.for("react.memo"):60115,pj=uv?Symbol.for("react.forward_ref"):60112,hj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gj=((wu={})[pj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wu[cv]=dv,wu);function Eh(e){return("type"in(t=e)&&t.type.$$typeof)===cv?dv:"$$typeof"in e?gj[e.$$typeof]:hj;var t}var xj=Object.defineProperty,vj=Object.getOwnPropertyNames,$h=Object.getOwnPropertySymbols,yj=Object.getOwnPropertyDescriptor,wj=Object.getPrototypeOf,_h=Object.prototype;function fv(e,t,n){if(typeof t!="string"){if(_h){var r=wj(t);r&&r!==_h&&fv(e,r,n)}var o=vj(t);$h&&(o=o.concat($h(t)));for(var i=Eh(e),s=Eh(t),l=0;l<o.length;++l){var u=o[l];if(!(u in mj||n&&n[u]||s&&u in s||i&&u in i)){var c=yj(t,u);try{xj(e,u,c)}catch{}}}}return e}function Co(e){return typeof e=="function"}function Sf(e){return typeof e=="object"&&"styledComponentId"in e}function kr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Oa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gc(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gc(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=Gc(e[r],t[r]);return e}function jf(e,t){Object.defineProperty(e,"toString",{value:t})}function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ki(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(wf);return n},e}(),Js=new Map,Da=new Map,Xs=1,Cs=function(e){if(Js.has(e))return Js.get(e);for(;Da.has(Xs);)Xs++;var t=Xs++;return Js.set(e,t),Da.set(t,e),t},Sj=function(e,t){Xs=t+1,Js.set(e,t),Da.set(t,e)},jj="style[".concat(jo,"][").concat(ov,'="').concat(kl,'"]'),kj=new RegExp("^".concat(jo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cj=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Ej=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(wf),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var u=l.match(kj);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Sj(d,c),Cj(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Rh=function(e){for(var t=document.querySelectorAll(jj),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(jo)!==rv&&(Ej(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function $j(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(jo,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(jo,rv),r.setAttribute(ov,kl);var s=$j();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},_j=function(){function e(t){this.element=pv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Ki(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Rj=function(){function e(t){this.element=pv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Pj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ph=Aa,Tj={isServer:!Aa,useCSSOMInjection:!aj},Ma=function(){function e(t,n,r){t===void 0&&(t=ko),n===void 0&&(n={});var o=this;this.options=Me(Me({},Tj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Aa&&Ph&&(Ph=!1,Rh(this)),jf(this,function(){return function(i){for(var s=i.getTag(),l=s.length,u="",c=function(f){var h=function(v){return Da.get(v)}(f);if(h===void 0)return"continue";var x=i.names.get(h),g=s.getGroup(f);if(x===void 0||!x.size||g.length===0)return"continue";var S="".concat(jo,".g").concat(f,'[id="').concat(h,'"]'),b="";x!==void 0&&x.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),u+="".concat(g).concat(S,'{content:"').concat(b,'"}').concat(wf)},d=0;d<l;d++)c(d);return u}(o)})}return e.registerId=function(t){return Cs(t)},e.prototype.rehydrate=function(){!this.server&&Aa&&Rh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Me(Me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Pj(o):r?new _j(o):new Rj(o)}(this.options),new bj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Cs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Cs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Cs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Nj=/&/g,Ij=/^\s*\/\/.*$/gm;function hv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hv(n.children,t)),n})}function zj(e){var t,n,r,o=ko,i=o.options,s=i===void 0?ko:i,l=o.plugins,u=l===void 0?Cl:l,c=function(h,x,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},d=u.slice();d.push(function(h){h.type===wl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Nj,n).replace(r,c))}),s.prefix&&d.push(ij),d.push(nj);var f=function(h,x,g,S){x===void 0&&(x=""),g===void 0&&(g=""),S===void 0&&(S="&"),t=S,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(Ij,""),v=ej(g||x?"".concat(g," ").concat(x," { ").concat(b," }"):b);s.namespace&&(v=hv(v,s.namespace));var m=[];return La(v,rj(d.concat(oj(function(p){return m.push(p)})))),m};return f.hash=u.length?u.reduce(function(h,x){return x.name||Ki(15),io(h,x.name)},av).toString():"",f}var Lj=new Ma,Jc=zj(),mv=Pe.createContext({shouldForwardProp:void 0,styleSheet:Lj,stylis:Jc});mv.Consumer;Pe.createContext(void 0);function Xc(){return y.useContext(mv)}var gv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Jc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,jf(this,function(){throw Ki(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Jc),this.name+t.hash},e}(),Aj=function(e){return e>="A"&&e<="Z"};function Th(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Aj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xv=function(e){return e==null||e===!1||e===""},vv=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!xv(i)&&(Array.isArray(i)&&i.isCss||Co(i)?r.push("".concat(Th(o),":"),i,";"):Di(i)?r.push.apply(r,wo(wo(["".concat(o," {")],vv(i),!1),["}"],!1)):r.push("".concat(Th(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in sj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rr(e,t,n,r){if(xv(e))return[];if(Sf(e))return[".".concat(e.styledComponentId)];if(Co(e)){if(!Co(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return rr(o,t,n,r)}var i;return e instanceof gv?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?vv(e):Array.isArray(e)?Array.prototype.concat.apply(Cl,e.map(function(s){return rr(s,t,n,r)})):[e.toString()]}function yv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Co(n)&&!Sf(n))return!1}return!0}var Oj=lv(kl),Dj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yv(t),this.componentId=n,this.baseHash=io(Oj,n),this.baseStyle=r,Ma.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=kr(o,this.staticRulesId);else{var i=Oa(rr(this.rules,t,n,r)),s=qc(io(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=kr(o,s),this.staticRulesId=s}else{for(var u=io(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var h=Oa(rr(f,t,n,r));u=io(u,h+d),c+=h}}if(c){var x=qc(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),o=kr(o,x)}}return o},e}(),kf=Pe.createContext(void 0);kf.Consumer;var Su={};function Mj(e,t,n){var r=Sf(e),o=e,i=!bu(e),s=t.attrs,l=s===void 0?Cl:s,u=t.componentId,c=u===void 0?function(w,j){var C=typeof w!="string"?"sc":kh(w);Su[C]=(Su[C]||0)+1;var $="".concat(C,"-").concat(bf(kl+C+Su[C]));return j?"".concat(j,"-").concat($):$}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(w){return bu(w)?"styled.".concat(w):"Styled(".concat(fj(w),")")}(e):d,h=t.displayName&&t.componentId?"".concat(kh(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(w,j){return S(w,j)&&b(w,j)}}else g=S}var v=new Dj(n,h,r?o.componentStyle:void 0);function m(w,j){return function(C,$,E){var A=C.attrs,O=C.componentStyle,te=C.defaultProps,Se=C.foldedComponentIds,N=C.styledComponentId,ye=C.target,dr=Pe.useContext(kf),pn=Xc(),Ot=C.shouldForwardProp||pn.shouldForwardProp,I=iv($,dr,te)||ko,D=function(Tn,st,hn){for(var Oo,pr=Me(Me({},st),{className:void 0,theme:hn}),Wl=0;Wl<Tn.length;Wl+=1){var ss=Co(Oo=Tn[Wl])?Oo(pr):Oo;for(var Nn in ss)pr[Nn]=Nn==="className"?kr(pr[Nn],ss[Nn]):Nn==="style"?Me(Me({},pr[Nn]),ss[Nn]):ss[Nn]}return st.className&&(pr.className=kr(pr.className,st.className)),pr}(A,$,I),F=D.as||ye,ne={};for(var re in D)D[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&D.theme===I||(re==="forwardedAs"?ne.as=D.forwardedAs:Ot&&!Ot(re,F)||(ne[re]=D[re]));var fr=function(Tn,st){var hn=Xc(),Oo=Tn.generateAndInjectStyles(st,hn.styleSheet,hn.stylis);return Oo}(O,D),Dt=kr(Se,N);return fr&&(Dt+=" "+fr),D.className&&(Dt+=" "+D.className),ne[bu(F)&&!sv.has(F)?"class":"className"]=Dt,ne.ref=E,y.createElement(F,ne)}(p,w,j)}m.displayName=f;var p=Pe.forwardRef(m);return p.attrs=x,p.componentStyle=v,p.displayName=f,p.shouldForwardProp=g,p.foldedComponentIds=r?kr(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(j){for(var C=[],$=1;$<arguments.length;$++)C[$-1]=arguments[$];for(var E=0,A=C;E<A.length;E++)Gc(j,A[E],!0);return j}({},o.defaultProps,w):w}}),jf(p,function(){return".".concat(p.styledComponentId)}),i&&fv(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Nh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ih=function(e){return Object.assign(e,{isCss:!0})};function Cf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Co(e)||Di(e))return Ih(rr(Nh(Cl,wo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rr(r):Ih(rr(Nh(r,t)))}function Kc(e,t,n){if(n===void 0&&(n=ko),!t)throw Ki(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Cf.apply(void 0,wo([o],i,!1)))};return r.attrs=function(o){return Kc(e,t,Me(Me({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Kc(e,t,Me(Me({},n),o))},r}var wv=function(e){return Kc(Mj,e)},k=wv;sv.forEach(function(e){k[e]=wv(e)});var Fj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yv(t),Ma.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Oa(rr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ma.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Bj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Cf.apply(void 0,wo([e],t,!1)),o="sc-global-".concat(bf(JSON.stringify(r))),i=new Fj(r,o),s=function(u){var c=Xc(),d=Pe.useContext(kf),f=Pe.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),Pe.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,h){if(i.isStatic)i.renderStyles(u,lj,d,h);else{var x=Me(Me({},c),{theme:iv(c,f,s.defaultProps)});i.renderStyles(u,x,d,h)}}return Pe.memo(s)}function fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Oa(Cf.apply(void 0,wo([e],t,!1))),o=bf(r);return new gv(o,r)}var bv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zh=Pe.createContext&&Pe.createContext(bv),Uj=["attr","size","title"];function Vj(e,t){if(e==null)return{};var n=Hj(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}function Lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ba(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lh(Object(n),!0).forEach(function(r){Wj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wj(e,t,n){return t=qj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qj(e){var t=Gj(e,"string");return typeof t=="symbol"?t:t+""}function Gj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Sv(e){return e&&e.map((t,n)=>Pe.createElement(t.tag,Ba({key:n},t.attr),Sv(t.child)))}function Ge(e){return t=>Pe.createElement(Jj,Fa({attr:Ba({},e.attr)},t),Sv(e.child))}function Jj(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=Vj(e,Uj),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Pe.createElement("svg",Fa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Ba(Ba({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Pe.createElement("title",null,i),e.children)};return zh!==void 0?Pe.createElement(zh.Consumer,null,n=>t(n)):t(bv)}function Xj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Kj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Qj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Yj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Zj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(e)}function El(){return a.jsxs(ek,{children:[a.jsxs(tk,{children:[a.jsxs(nk,{children:[a.jsx("h3",{children:"Contáctanos"}),a.jsxs("p",{children:[a.jsx(Zj,{})," +123 456 789"]}),a.jsxs("p",{children:[a.jsx(Yj,{})," info@ministerio.com"]})]}),a.jsxs(rk,{children:[a.jsx("h3",{children:"Dirección"}),a.jsx("p",{children:"República de Líbano entre Crisóstomo Álvarez y Juan Bautista Alberdi"}),a.jsx("p",{children:"Monteros, Tucumán, Argentina"})]}),a.jsxs(ok,{children:[a.jsx("h3",{children:"Síguenos"}),a.jsxs(ik,{children:[a.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Xj,{})}),a.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Kj,{})}),a.jsx("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Qj,{})})]})]})]}),a.jsx(sk,{children:a.jsx("iframe",{title:"Ubicación",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4510185355699!2d-65.5108781075702!3d-27.162454067142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942235328d23ecd7%3A0xfd18499085cb2d3!2sCentro%20Cristiano%20R%C3%ADos%20de%20Vida!5e0!3m2!1ses-419!2sar!4v1734071122347!5m2!1ses-419!2sar",width:"100%",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),a.jsx(ak,{children:a.jsx("p",{children:"© 2024 Ministerio Ríos de Vida. Todos los derechos reservados."})})]})}const ek=k.footer`
  background: #0a285c;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`,tk=k.div`
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
`,nk=k.div`
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
`,rk=k.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`,ok=k.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`,ik=k.div`
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
`,sk=k.div`
  margin: 20px 0;
  iframe {
    border-radius: 10px;
  }
`,ak=k.div`
  padding: 10px;
  background: #1e3c72;

  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
  }
`,lk=()=>{const[e,t]=y.useState(!1),n=y.useRef(null);return y.useEffect(()=>{const r=()=>{if(n.current){const o=n.current.getBoundingClientRect().top,i=window.innerHeight;o<i-100&&t(!0)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),a.jsx(dk,{ref:n,children:a.jsxs(Ef,{isVisible:e,children:[a.jsx(fk,{isVisible:e,children:"Bienvenidos a Casa"}),a.jsx(pk,{isVisible:e,children:"Nos complace recibirte en nuestro Centro Cristiano. Estamos aquí para ayudarte a crecer en tu fe y experimentar una comunidad amorosa y acogedora."})]})})},uk=fn`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,ck=fn`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,dk=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
`,Ef=k.div`
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
`,fk=k.h1`
  font-size: 4rem;
  color: #0077b6;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?uk:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3);

  ${Ef}:hover & {
    color: white;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`,pk=k.p`
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 600px;
  margin-top: 1rem;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?ck:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;

  ${Ef}:hover & {
    color: #00a0f6;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`,$l=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1);y.useEffect(()=>{const s=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=()=>r(!n),i=s=>{const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})};return a.jsxs(hk,{scrolled:e,children:[a.jsx(mk,{scrolled:e,children:a.jsx(M,{to:"/",children:"Ríos de Vida"})}),a.jsxs(gk,{onClick:o,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs(xk,{menuOpen:n,children:[a.jsx(Hr,{as:"button",onClick:()=>i("grupoDeVida"),scrolled:e,children:"Grupos"}),a.jsx(Hr,{as:"button",onClick:()=>i("servicios"),scrolled:e,children:"Servicios"}),a.jsx(Hr,{children:a.jsx(M,{to:"/eventos",children:"Eventos"})}),a.jsx(Hr,{children:a.jsx(M,{to:"/masSobreNosotros",children:"Mas Sobre Nosotros"})}),a.jsx(Hr,{children:a.jsx(M,{to:"/notas",children:"Notas"})}),a.jsx(Hr,{children:a.jsx(M,{to:"/pascuas",children:"Pascuas"})}),a.jsx(vk,{children:a.jsx(M,{to:"/login",children:"Login"})})]})]})},hk=k.header`
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
`,mk=k.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${({scrolled:e})=>e?"#333333":"#ffffff"};
  }
`,gk=k.div`
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
`,xk=k.nav`
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
`,Hr=k.button`
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
`,vk=k.div`
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
`,yk=fn`
  0% { transform: translateX(-150%); }
  50% { transform: translateX(150%); }
  100% { transform: translateX(-150%); }
`,wk=k.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #2a4c9c 0%, #1D3C5A 100%);
  overflow: hidden;
  z-index: -1;
`,bk=k.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  width: ${({size:e})=>e||"20px"};
  height: ${({size:e})=>e||"20px"};
  border-radius: 50%;
  animation: ${yk} ${({duration:e})=>e||"15s"} ease-in-out infinite;
  bottom: ${({bottom:e})=>e||"10%"};
  left: ${({left:e})=>e||"0%"};
  opacity: ${({opacity:e})=>e||.8};
`,Qi=()=>{const e=Array.from({length:50},(t,n)=>a.jsx(bk,{bottom:`${Math.random()*100}%`,left:`${Math.random()*100}%`,size:`${Math.random()*25+10}px`,duration:`${Math.random()*5+5}s`,opacity:Math.random()*.5+.3},n));return a.jsx(wk,{children:e})};var Ks={},Qc;Object.defineProperty(Ks,"__esModule",{value:!0});var Yo=a,Zt=y,Ht=function(){return Ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ht.apply(this,arguments)};function Sk(e,t){var n,r;switch(t.type){case"TYPE":return Ht(Ht({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return Ht(Ht({},e),{speed:t.payload});case"DELETE":return Ht(Ht({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return Ht(Ht({},e),{count:e.count+1});default:return e}}var Ah=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.onLoopDone,h=e.onType,x=e.onDelete,g=e.onDelay,S=Zt.useReducer(Sk,{speed:s,text:"",count:0}),b=S[0],v=b.speed,m=b.text,p=b.count,w=S[1],j=Zt.useRef(0),C=Zt.useRef(!1),$=Zt.useRef(!1),E=Zt.useRef(!1),A=Zt.useRef(!1),O=Zt.useCallback(function(){var te=p%n.length,Se=n[te];$.current?(w({type:"DELETE",payload:Se,speed:u}),m===""&&($.current=!1,w({type:"COUNT"}))):(w({type:"TYPE",payload:Se,speed:s}),E.current=!0,m===Se&&(w({type:"DELAY",payload:d}),E.current=!1,A.current=!0,setTimeout(function(){A.current=!1,$.current=!0},d),o>0&&(j.current+=1,j.current/n.length===o&&(A.current=!1,C.current=!0)))),E.current&&h&&h(j.current),$.current&&x&&x(),A.current&&g&&g()},[p,d,u,o,s,n,m,h,x,g]);return Zt.useEffect(function(){var te=setTimeout(O,v);return C.current&&clearTimeout(te),function(){return clearTimeout(te)}},[O,v]),Zt.useEffect(function(){f&&C.current&&f()},[f]),[m,{isType:E.current,isDelay:A.current,isDelete:$.current,isDone:C.current}]},jk="styles-module_blinkingCursor__yugAC",kk="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Oh=Zt.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,o=r===void 0?"|":r,i=e.cursorColor,s=i===void 0?"inherit":i;return Yo.jsx("span",Ht({style:{color:s},className:"".concat(jk," ").concat(n?kk:"")},{children:o}))});Ks.Cursor=Oh,Qc=Ks.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.cursor,h=f!==void 0&&f,x=e.cursorStyle,g=x===void 0?"|":x,S=e.cursorColor,b=S===void 0?"inherit":S,v=e.cursorBlinking,m=v===void 0||v,p=e.onLoopDone,w=e.onType,j=e.onDelay,C=e.onDelete,$=Ah({words:n,loop:o,typeSpeed:s,deleteSpeed:u,delaySpeed:d,onLoopDone:p,onType:w,onDelay:j,onDelete:C})[0];return Yo.jsxs(Yo.Fragment,{children:[Yo.jsx("span",{children:$}),h&&Yo.jsx(Oh,{cursorStyle:g,cursorColor:b,cursorBlinking:m})]})},Ks.useTypewriter=Ah;const Ck="https://Bravo938.github.io/RiosDeVida.pages/assets/iglefondo-BN1oqW4x.mp4",Ek=`
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
`,$k=Bj`${Ek}`,_k=()=>{const[e,t]=y.useState(!1),n=()=>t(!0);return a.jsxs(a.Fragment,{children:[a.jsx($k,{}),a.jsxs(Rk,{children:[a.jsx(Pk,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:n,style:{opacity:e?1:0},children:a.jsx("source",{src:Ck,type:"video/mp4"})}),a.jsx(Tk,{style:{display:e?"none":"block"}}),a.jsxs(Nk,{children:[a.jsx(Ik,{children:a.jsx(Qc,{words:["Centro Cristiano Rios De Vida"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:3e3})}),a.jsx(zk,{children:'El Centro Cristiano "Ríos de Vida" tiene la misión de predicar la Palabra de Dios cumpliendo con el mandato de Cristo de llevar su mensaje a todas las naciones.'}),a.jsx(Lk,{children:a.jsx(Qc,{words:["Jesús Dijo"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:1e3})}),a.jsx(Ak,{children:"Jesús se puso en pie y alzó la voz, diciendo: Si alguno tiene sed, venga a mí y beba. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. (Juan 7:37-38)"})]})]})]})},Rk=k.div`
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
`,Pk=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;//acorte el bot un poco podria de 3600
  object-fit: cover;
  z-index: -1;
  transition: opacity 0.5s ease;
`,Tk=k.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`,Nk=k.div`
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
`,Ik=k.h1`
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
`,zk=k.p`
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
`,Lk=k.h2`
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
`,Ak=k.p`
  font-size: 1.25rem;
  color: #ffffff;
  animation: slideInFromLeft 0.8s ease forwards;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;var jv={},_l={},$f={},ju={},ku={exports:{}},Cu,Dh;function Ok(){if(Dh)return Cu;Dh=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Cu=e,Cu}var Eu,Mh;function Dk(){if(Mh)return Eu;Mh=1;var e=Ok();function t(){}function n(){}return n.resetWarningCache=t,Eu=function(){function r(s,l,u,c,d,f){if(f!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Eu}var Fh;function Mk(){return Fh||(Fh=1,ku.exports=Dk()()),ku.exports}var Bh;function Fk(){return Bh||(Bh=1,function(e){(function(t,n){n(e,y,Mk())})(it,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=g;var o=s(n),i=s(r);function s(m){return m&&m.__esModule?m:{default:m}}var l=Object.assign||function(m){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var j in w)Object.prototype.hasOwnProperty.call(w,j)&&(m[j]=w[j])}return m};function u(m,p){var w={};for(var j in m)p.indexOf(j)>=0||Object.prototype.hasOwnProperty.call(m,j)&&(w[j]=m[j]);return w}function c(m,p){if(!(m instanceof p))throw new TypeError("Cannot call a class as a function")}var d=function(){function m(p,w){for(var j=0;j<w.length;j++){var C=w[j];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(p,C.key,C)}}return function(p,w,j){return w&&m(p.prototype,w),j&&m(p,j),p}}();function f(m,p){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:m}function h(m,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);m.prototype=Object.create(p&&p.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(m,p):m.__proto__=p)}var x=!1;function g(m){x=m}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){g(!0)}}))}catch{}function S(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return x?m:m.capture}function b(m){if("touches"in m){var p=m.touches[0],w=p.pageX,j=p.pageY;return{x:w,y:j}}var C=m.screenX,$=m.screenY;return{x:C,y:$}}var v=function(m){h(p,m);function p(){var w;c(this,p);for(var j=arguments.length,C=Array(j),$=0;$<j;$++)C[$]=arguments[$];var E=f(this,(w=p.__proto__||Object.getPrototypeOf(p)).call.apply(w,[this].concat(C)));return E._handleSwipeStart=E._handleSwipeStart.bind(E),E._handleSwipeMove=E._handleSwipeMove.bind(E),E._handleSwipeEnd=E._handleSwipeEnd.bind(E),E._onMouseDown=E._onMouseDown.bind(E),E._onMouseMove=E._onMouseMove.bind(E),E._onMouseUp=E._onMouseUp.bind(E),E._setSwiperRef=E._setSwiperRef.bind(E),E}return d(p,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(j){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(j))}},{key:"_onMouseMove",value:function(j){this.mouseDown&&this._handleSwipeMove(j)}},{key:"_onMouseUp",value:function(j){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(j)}},{key:"_handleSwipeStart",value:function(j){var C=b(j),$=C.x,E=C.y;this.moveStart={x:$,y:E},this.props.onSwipeStart(j)}},{key:"_handleSwipeMove",value:function(j){if(this.moveStart){var C=b(j),$=C.x,E=C.y,A=$-this.moveStart.x,O=E-this.moveStart.y;this.moving=!0;var te=this.props.onSwipeMove({x:A,y:O},j);te&&j.cancelable&&j.preventDefault(),this.movePosition={deltaX:A,deltaY:O}}}},{key:"_handleSwipeEnd",value:function(j){this.props.onSwipeEnd(j);var C=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-C?this.props.onSwipeLeft(1,j):this.movePosition.deltaX>C&&this.props.onSwipeRight(1,j),this.movePosition.deltaY<-C?this.props.onSwipeUp(1,j):this.movePosition.deltaY>C&&this.props.onSwipeDown(1,j)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(j){this.swiper=j,this.props.innerRef(j)}},{key:"render",value:function(){var j=this.props;j.tagName;var C=j.className,$=j.style,E=j.children;j.allowMouseEvents,j.onSwipeUp,j.onSwipeDown,j.onSwipeLeft,j.onSwipeRight,j.onSwipeStart,j.onSwipeMove,j.onSwipeEnd,j.innerRef,j.tolerance;var A=u(j,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:C,style:$},A),E)}}]),p}(n.Component);v.displayName="ReactSwipe",v.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},v.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=v})}(ju)),ju}(function(e){(function(t,n){n(e,Fk())})(it,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})($f);var Yi={},kv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var l in i)t.call(i,l)&&i[l]&&(s=o(s,l));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(kv);var Cv=kv.exports;const Bk=$0(Cv);Object.defineProperty(Yi,"__esModule",{value:!0});Yi.default=void 0;var zn=Uk(Cv);function Uk(e){return e&&e.__esModule?e:{default:e}}function Vk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Hk={ROOT:function(t){return(0,zn.default)(Vk({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,zn.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,zn.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,zn.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,zn.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,zn.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,zn.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,zn.default)({dot:!0,selected:t})}};Yi.default=Hk;var Zi={},Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.outerWidth=void 0;var Wk=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};Rl.outerWidth=Wk;var No={};Object.defineProperty(No,"__esModule",{value:!0});No.default=void 0;var qk=function(t,n,r){var o=t===0?t:t+n,i=r==="horizontal"?[o,0,0]:[0,o,0],s="translate3d",l="("+i.join(",")+")";return s+l};No.default=qk;var es={};Object.defineProperty(es,"__esModule",{value:!0});es.default=void 0;var Gk=function(){return window};es.default=Gk;Object.defineProperty(Zi,"__esModule",{value:!0});Zi.default=void 0;var Ft=Kk(y),hr=Pl(Yi),Jk=Rl,Uh=Pl(No),Xk=Pl($f),Es=Pl(es);function Pl(e){return e&&e.__esModule?e:{default:e}}function Ev(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Ev=function(){return e},e}function Kk(e){if(e&&e.__esModule)return e;if(e===null||mi(e)!=="object"&&typeof e!="function")return{default:e};var t=Ev();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function mi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mi=function(n){return typeof n}:mi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mi(e)}function Yc(){return Yc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yc.apply(this,arguments)}function Qk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yk(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zk(e,t,n){return t&&Yk(e.prototype,t),e}function eC(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zc(e,t)}function Zc(e,t){return Zc=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Zc(e,t)}function tC(e){var t=rC();return function(){var r=Ua(e),o;if(t){var i=Ua(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return nC(this,o)}}function nC(e,t){return t&&(mi(t)==="object"||typeof t=="function")?t:Be(e)}function Be(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ua(e){return Ua=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ua(e)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oC=function(t){return t.hasOwnProperty("key")},_f=function(e){eC(n,e);var t=tC(n);function n(r){var o;return Qk(this,n),o=t.call(this,r),Oe(Be(o),"itemsWrapperRef",void 0),Oe(Be(o),"itemsListRef",void 0),Oe(Be(o),"thumbsRef",void 0),Oe(Be(o),"setItemsWrapperRef",function(i){o.itemsWrapperRef=i}),Oe(Be(o),"setItemsListRef",function(i){o.itemsListRef=i}),Oe(Be(o),"setThumbsRef",function(i,s){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[s]=i}),Oe(Be(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var i=Ft.Children.count(o.props.children),s=o.itemsWrapperRef.clientWidth,l=o.props.thumbWidth?o.props.thumbWidth:(0,Jk.outerWidth)(o.thumbsRef[0]),u=Math.floor(s/l),c=u<i,d=c?i-u:0;o.setState(function(f,h){return{itemSize:l,visibleItems:u,firstItem:c?o.getFirstItem(h.selectedItem):0,lastPosition:d,showArrows:c}})}}),Oe(Be(o),"handleClickItem",function(i,s,l){if(!oC(l)||l.key==="Enter"){var u=o.props.onSelectItem;typeof u=="function"&&u(i,s)}}),Oe(Be(o),"onSwipeStart",function(){o.setState({swiping:!0})}),Oe(Be(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),Oe(Be(o),"onSwipeMove",function(i){var s=i.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var l=0,u=Ft.Children.count(o.props.children),c=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(u-o.state.visibleItems,0),f=-d*100/o.state.visibleItems;c===l&&s>0&&(s=0),c===f&&s<0&&(s=0);var h=o.itemsWrapperRef.clientWidth,x=c+100/(h/s);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(g){o.itemsListRef.style[g]=(0,Uh.default)(x,"%",o.props.axis)}),!0}),Oe(Be(o),"slideRight",function(i){o.moveTo(o.state.firstItem-(typeof i=="number"?i:1))}),Oe(Be(o),"slideLeft",function(i){o.moveTo(o.state.firstItem+(typeof i=="number"?i:1))}),Oe(Be(o),"moveTo",function(i){i=i<0?0:i,i=i>=o.state.lastPosition?o.state.lastPosition:i,o.setState({firstItem:i})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return Zk(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Es.default)().addEventListener("resize",this.updateSizes),(0,Es.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Es.default)().removeEventListener("resize",this.updateSizes),(0,Es.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var i=o;return o>=this.state.lastPosition&&(i=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),o<this.state.firstItem&&(i=o),i}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(i,s){var l=hr.default.ITEM(!1,s===o.state.selectedItem),u={key:s,ref:function(d){return o.setThumbsRef(d,s)},className:l,onClick:o.handleClickItem.bind(o,s,o.props.children[s]),onKeyDown:o.handleClickItem.bind(o,s,o.props.children[s]),"aria-label":"".concat(o.props.labels.item," ").concat(s+1),style:{width:o.props.thumbWidth}};return Ft.default.createElement("li",Yc({},u,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var i=Ft.Children.count(this.props.children)>1,s=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u={},c=-this.state.firstItem*(this.state.itemSize||0),d=(0,Uh.default)(c,"px",this.props.axis),f=this.props.transitionTime+"ms";return u={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f},Ft.default.createElement("div",{className:hr.default.CAROUSEL(!1)},Ft.default.createElement("div",{className:hr.default.WRAPPER(!1),ref:this.setItemsWrapperRef},Ft.default.createElement("button",{type:"button",className:hr.default.ARROW_PREV(!s),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),i?Ft.default.createElement(Xk.default,{tagName:"ul",className:hr.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:u,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):Ft.default.createElement("ul",{className:hr.default.SLIDER(!1,this.state.swiping),ref:function(x){return o.setItemsListRef(x)},style:u},this.renderItems()),Ft.default.createElement("button",{type:"button",className:hr.default.ARROW_NEXT(!l),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(Ft.Component);Zi.default=_f;Oe(_f,"displayName","Thumbs");Oe(_f,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.default=void 0;var iC=function(){return document};Tl.default=iC;var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.setPosition=mt.getPosition=mt.isKeyboardEvent=mt.defaultStatusFormatter=mt.noop=void 0;var sC=y,aC=lC(No);function lC(e){return e&&e.__esModule?e:{default:e}}var uC=function(){};mt.noop=uC;var cC=function(t,n){return"".concat(t," of ").concat(n)};mt.defaultStatusFormatter=cC;var dC=function(t){return t?t.hasOwnProperty("key"):!1};mt.isKeyboardEvent=dC;var fC=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=sC.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,i=r-1;return t&&(t!==i||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===i&&(o+=100-n.centerSlidePercentage),o}return-t*100};mt.getPosition=fC;var pC=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,aC.default)(t,"%",n)}),r};mt.setPosition=pC;var an={};Object.defineProperty(an,"__esModule",{value:!0});an.fadeAnimationHandler=an.slideStopSwipingHandler=an.slideSwipeAnimationHandler=an.slideAnimationHandler=void 0;var $v=y,hC=mC(No),ln=mt;function mC(e){return e&&e.__esModule?e:{default:e}}function Vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vh(Object(n),!0).forEach(function(r){gC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gC(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xC=function(t,n){var r={},o=n.selectedItem,i=o,s=$v.Children.count(t.children)-1,l=t.infiniteLoop&&(o<0||o>s);if(l)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,ln.setPosition)(-(s+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,ln.setPosition)(-(s+2)*100,t.axis):i>s&&(r.itemListStyle=(0,ln.setPosition)(0,t.axis)),r;var u=(0,ln.getPosition)(o,t),c=(0,hC.default)(u,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:c,msTransform:c,OTransform:c,transform:c},n.swiping||(r.itemListStyle=xr(xr({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};an.slideAnimationHandler=xC;var vC=function(t,n,r,o){var i={},s=n.axis==="horizontal",l=$v.Children.count(n.children),u=0,c=(0,ln.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,ln.getPosition)(l-1,n)-100:(0,ln.getPosition)(l-1,n),f=s?t.x:t.y,h=f;c===u&&f>0&&(h=0),c===d&&f<0&&(h=0);var x=c+100/(r.itemSize/h),g=Math.abs(f)>n.swipeScrollTolerance;return n.infiniteLoop&&g&&(r.selectedItem===0&&x>-100?x-=l*100:r.selectedItem===l-1&&x<-l*100&&(x+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||g||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),i.itemListStyle=(0,ln.setPosition)(x,n.axis)),g&&!r.cancelClick&&o({cancelClick:!0}),i};an.slideSwipeAnimationHandler=vC;var yC=function(t,n){var r=(0,ln.getPosition)(n.selectedItem,t),o=(0,ln.setPosition)(r,t.axis);return{itemListStyle:o}};an.slideStopSwipingHandler=yC;var wC=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(i=xr(xr({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:xr(xr({},i),{},{opacity:1,position:"relative"}),prevStyle:xr({},i)}};an.fadeAnimationHandler=wC;Object.defineProperty(_l,"__esModule",{value:!0});_l.default=void 0;var Z=jC(y),bC=ts($f),yn=ts(Yi),SC=ts(Zi),$s=ts(Tl),_s=ts(es),Zo=mt,Va=an;function ts(e){return e&&e.__esModule?e:{default:e}}function _v(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return _v=function(){return e},e}function jC(e){if(e&&e.__esModule)return e;if(e===null||gi(e)!=="object"&&typeof e!="function")return{default:e};var t=_v();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function gi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gi=function(n){return typeof n}:gi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gi(e)}function ed(){return ed=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ed.apply(this,arguments)}function Hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hh(Object(n),!0).forEach(function(r){W(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function CC(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function EC(e,t,n){return t&&CC(e.prototype,t),e}function $C(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&td(e,t)}function td(e,t){return td=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},td(e,t)}function _C(e){var t=PC();return function(){var r=Ha(e),o;if(t){var i=Ha(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return RC(this,o)}}function RC(e,t){return t&&(gi(t)==="object"||typeof t=="function")?t:G(e)}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ha(e){return Ha=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ha(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Rf=function(e){$C(n,e);var t=_C(n);function n(r){var o;kC(this,n),o=t.call(this,r),W(G(o),"thumbsRef",void 0),W(G(o),"carouselWrapperRef",void 0),W(G(o),"listRef",void 0),W(G(o),"itemsRef",void 0),W(G(o),"timer",void 0),W(G(o),"animationHandler",void 0),W(G(o),"setThumbsRef",function(s){o.thumbsRef=s}),W(G(o),"setCarouselWrapperRef",function(s){o.carouselWrapperRef=s}),W(G(o),"setListRef",function(s){o.listRef=s}),W(G(o),"setItemsRef",function(s,l){o.itemsRef||(o.itemsRef=[]),o.itemsRef[l]=s}),W(G(o),"autoPlay",function(){Z.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),W(G(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),W(G(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),W(G(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),W(G(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),W(G(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,$s.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,$s.default)().activeElement)):!1}),W(G(o),"navigateWithKeyboard",function(s){if(o.isFocusWithinTheCarousel()){var l=o.props.axis,u=l==="horizontal",c={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=u?c.ArrowRight:c.ArrowDown,f=u?c.ArrowLeft:c.ArrowUp;d===s.keyCode?o.increment():f===s.keyCode&&o.decrement()}}),W(G(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var s=o.props.axis==="horizontal",l=o.itemsRef[0];if(l){var u=s?l.clientWidth:l.clientHeight;o.setState({itemSize:u}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),W(G(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),W(G(o),"handleClickItem",function(s,l){if(Z.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(s,l),s!==o.state.selectedItem&&o.setState({selectedItem:s})}}),W(G(o),"handleOnChange",function(s,l){Z.Children.count(o.props.children)<=1||o.props.onChange(s,l)}),W(G(o),"handleClickThumb",function(s,l){o.props.onClickThumb(s,l),o.moveTo(s)}),W(G(o),"onSwipeStart",function(s){o.setState({swiping:!0}),o.props.onSwipeStart(s)}),W(G(o),"onSwipeEnd",function(s){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(s),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),W(G(o),"onSwipeMove",function(s,l){o.props.onSwipeMove(l);var u=o.props.swipeAnimationHandler(s,o.props,o.state,o.setState.bind(G(o)));return o.setState(Bt({},u)),!!Object.keys(u).length}),W(G(o),"decrement",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof s=="number"?s:1))}),W(G(o),"increment",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof s=="number"?s:1))}),W(G(o),"moveTo",function(s){if(typeof s=="number"){var l=Z.Children.count(o.props.children)-1;s<0&&(s=o.props.infiniteLoop?l:0),s>l&&(s=o.props.infiniteLoop?0:l),o.selectItem({selectedItem:s}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),W(G(o),"onClickNext",function(){o.increment(1)}),W(G(o),"onClickPrev",function(){o.decrement(1)}),W(G(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),W(G(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),W(G(o),"changeItem",function(s){return function(l){(!(0,Zo.isKeyboardEvent)(l)||l.key==="Enter")&&o.moveTo(s)}}),W(G(o),"selectItem",function(s){o.setState(Bt({previousItem:o.state.selectedItem},s),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(s.selectedItem,Z.Children.toArray(o.props.children)[s.selectedItem])}),W(G(o),"getInitialImage",function(){var s=o.props.selectedItem,l=o.itemsRef&&o.itemsRef[s],u=l&&l.getElementsByTagName("img")||[];return u[0]}),W(G(o),"getVariableItemHeight",function(s){var l=o.itemsRef&&o.itemsRef[s];if(o.state.hasMount&&l&&l.children.length){var u=l.children[0].getElementsByTagName("img")||[];if(u.length>0){var c=u[0];if(!c.complete){var d=function x(){o.forceUpdate(),c.removeEventListener("load",x)};c.addEventListener("load",d)}}var f=u[0]||l.children[0],h=f.clientHeight;return h>0?h:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Va.fadeAnimationHandler||Va.slideAnimationHandler,o.state=Bt(Bt({},i),o.animationHandler(r,i)),o}return EC(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,i){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(Bt({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&Z.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=o.getInitialImage();i&&!i.complete?i.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,_s.default)().addEventListener("resize",this.updateSizes),(0,_s.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,$s.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,_s.default)().removeEventListener("resize",this.updateSizes),(0,_s.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,$s.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var i=this;return this.props.children?Z.Children.map(this.props.children,function(s,l){var u=l===i.state.selectedItem,c=l===i.state.previousItem,d=u&&i.state.selectedStyle||c&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(d=Bt(Bt({},d),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(d=Bt(Bt({},d),{},{pointerEvents:"none"}));var f={ref:function(x){return i.setItemsRef(x,l)},key:"itemKey"+l+(o?"clone":""),className:yn.default.ITEM(!0,l===i.state.selectedItem,l===i.state.previousItem),onClick:i.handleClickItem.bind(i,l,s),style:d};return Z.default.createElement("li",f,i.props.renderItem(s,{isSelected:l===i.state.selectedItem,isPrevious:l===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,i=this.props,s=i.showIndicators,l=i.labels,u=i.renderIndicator,c=i.children;return s?Z.default.createElement("ul",{className:"control-dots"},Z.Children.map(c,function(d,f){return u&&u(o.changeItem(f),f===o.state.selectedItem,f,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?Z.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,Z.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||Z.Children.count(this.props.children)===0?null:Z.default.createElement(SC.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||Z.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&Z.Children.count(this.props.children)>1,s=this.props.axis==="horizontal",l=this.props.showArrows&&Z.Children.count(this.props.children)>1,u=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,c=l&&(this.state.selectedItem<Z.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),f=d.shift(),h=d.pop(),x={className:yn.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},g={};if(s){if(x.onSwipeLeft=this.onSwipeForward,x.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var S=this.getVariableItemHeight(this.state.selectedItem);g.height=S||"auto"}}else x.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,x.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,x.style=Bt(Bt({},x.style),{},{height:this.state.itemSize}),g.height=this.state.itemSize;return Z.default.createElement("div",{"aria-label":this.props.ariaLabel,className:yn.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},Z.default.createElement("div",{className:yn.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,u,this.props.labels.leftArrow),Z.default.createElement("div",{className:yn.default.WRAPPER(!0,this.props.axis),style:g},i?Z.default.createElement(bC.default,ed({tagName:"ul",innerRef:this.setListRef},x,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f):Z.default.createElement("ul",{className:yn.default.SLIDER(!0,this.state.swiping),ref:function(v){return o.setListRef(v)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f)),this.props.renderArrowNext(this.onClickNext,c,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(Z.default.Component);_l.default=Rf;W(Rf,"displayName","Carousel");W(Rf,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Zo.noop,onClickThumb:Zo.noop,onChange:Zo.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return Z.default.createElement("button",{type:"button","aria-label":r,className:yn.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return Z.default.createElement("button",{type:"button","aria-label":r,className:yn.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return Z.default.createElement("li",{className:yn.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=Z.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=Z.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Zo.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Va.slideSwipeAnimationHandler,stopSwipingHandler:Va.slideStopSwipingHandler});var TC={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(_l),n=TC,r=o(Zi);function o(i){return i&&i.__esModule?i:{default:i}}})(jv);const NC="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osUno-CfPtuQXo.jpeg",IC="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osDos-CjOjW_oM.jpeg",zC="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osTres-AsJgpukL.jpeg",LC="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJes%C3%BAs-TIPDL7DU.jpeg",AC="https://Bravo938.github.io/RiosDeVida.pages/assets/tiketSalvaci%C3%B3n-D9lcr1qY.jpeg",OC="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJuan-CdVtAiml.jpeg",DC="https://Bravo938.github.io/RiosDeVida.pages/assets/servicios-D1QGoDVa.jpg",MC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorio-CTSHckB1.jpg",FC="https://Bravo938.github.io/RiosDeVida.pages/assets/ccrv_Ser-BsoqrjkZ.jpg",BC="https://Bravo938.github.io/RiosDeVida.pages/assets/congreso-BxEsJ0Jy.jpg",UC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesArt-CN0fXW9p.jpg",VC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSect-Cbi3JT-h.jpg",HC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesFondoOscuro-B7Ek2ZSn.jpeg",WC="https://Bravo938.github.io/RiosDeVida.pages/assets/mdzzz09m-Dqg0HgdU.png",qC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSecOscuro-Dtk7KoD-.jpg",GC="https://Bravo938.github.io/RiosDeVida.pages/assets/congreso-BxEsJ0Jy.jpg",JC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioUno-CoIoQrq-.jpg",XC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioDos-CAVUgvvI.jpg",KC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioTres-CTjzxZYT.jpg",QC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioCuatro-1mvNma7G.jpg",YC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioCinco-xqII1Rqe.jpg",J={niñoUno:NC,niñoDos:IC,niñoTres:zC,globoJesús:LC,tiketSalvación:AC,globoJuan:OC,servicios:DC,auditorio:MC,ccrv_Ser:FC,potenciados:BC,jovenesArt:UC,jovenesSection:VC,JovenesFondoOscuro:HC,mdzzz09m:WC,JovenesSectionOscuro:qC,congreso:GC,auditorioUno:JC,auditorioDos:XC,auditorioTres:KC,auditorioCuatro:QC,auditorioCinco:YC},ZC=[J.globoJesús,J.niñoDos,J.niñoTres,J.niñoUno,J.globoJuan,J.niñoUno,J.niñoTres],e2=()=>a.jsxs(t2,{id:"grupoDeVida",children:[a.jsxs(n2,{children:[a.jsx(r2,{children:"Grupos de Vida"}),a.jsx(o2,{children:"En cada Grupo de Vida hablamos y aprendemos de la palabra de Dios y también confraternamos con los miembros."})]}),a.jsx(i2,{showArrows:!1,showThumbs:!1,showStatus:!1,autoPlay:!0,infiniteLoop:!0,interval:3e3,centerMode:!0,centerSlidePercentage:30,children:ZC.map((e,t)=>a.jsx(s2,{children:a.jsx(a2,{src:e,alt:`slide-${t}`})},t))})]}),t2=k.section`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  
`,n2=k.div`
  text-align: center;
  margin-bottom: 1rem;
`,r2=k.h2`
  font-size: 2.5rem;
  color: #00a0f6;
  margin-bottom: 0.5rem;
`,o2=k.p`
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
`,i2=k(jv.Carousel)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,s2=k.div`
  padding: 0 5px;
`,a2=k.img`
  width: 100%;
  height: 450px; /* Ajusta la altura según el tamaño que desees */
  object-fit: cover; /* Mantiene el tamaño sin cortar las imágenes */
  border-radius: 8px;
`,l2=()=>a.jsxs(u2,{id:"servicios",children:[a.jsxs(Wh,{direction:"left",children:[a.jsx(qh,{src:J.auditorio,alt:"Auditorio Centro Cristiano"}),a.jsx(Gh,{children:"Auditorio Centro Cristiano Ríos de Vida"}),a.jsx(Jh,{children:"Leer Más"})]}),a.jsxs(Wh,{direction:"right",children:[a.jsx(qh,{src:J.ccrv_Ser,alt:"Servicios Todos los Domingos"}),a.jsx(Gh,{children:"Servicios Todos los Domingos"}),a.jsx(Jh,{children:"Leer Más"})]})]}),u2=k.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;
  background-color: #02141747;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Wh=k.div`
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
`,qh=k.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  

  
`,Gh=k.h3`
  font-size: 1.5rem;
  color: #00d0ff;
  margin-top: 1rem;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3); // Sombra suave
`,Jh=k.button`
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
`,c2="https://Bravo938.github.io/RiosDeVida.pages/assets/manosArriba-DDg91RAo.mp4";function d2(){const[e,t]=y.useState(!1),n=()=>{t(!e)};return a.jsx(f2,{id:"potenciados",children:a.jsxs(p2,{children:[a.jsxs(h2,{children:[a.jsx(m2,{children:"Ministerio de Jóvenes"}),a.jsxs(g2,{children:[a.jsxs(x2,{expanded:e,children:["¡Bienvenido al Ministerio de  Jóvenes! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(v2,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(y2,{children:a.jsx(w2,{autoPlay:!0,loop:!0,muted:!0,src:c2})})]})})}const f2=k.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #7148d18f 40%, #2e1f428d 40%);
`,p2=k.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,h2=k.div`
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
`,m2=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,g2=k.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,x2=k.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,v2=k.button`
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
`,y2=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,w2=k.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,b2=k.section`
  padding: 50px 20px;
  //background-color: #f9f9f9;
  text-align: center;
  max-width: 1400px; // 👈 Para que no se estire demasiado
  margin: 0 auto;
`,S2=k.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ffffff;
`,j2=k.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: flex-start; // 👈 Alinea las tarjetas arriba y permite alturas independientes
`,$u=k.div`
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
`,_u=k.img`
  width: 100%;
  height: auto;
`,Ru=k.div`
  padding: 20px;
`,Pu=k.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #ffffff;
`,Tu=k.p`
  font-size: 1em;
  margin-bottom: 15px;
  color: #ffffff;
`,Xh=k(M)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`,k2=()=>a.jsxs(b2,{children:[a.jsx(S2,{children:"Haz parte de nuestra familia"}),a.jsxs(j2,{children:[a.jsxs($u,{children:[a.jsx(_u,{src:J.auditorio,alt:"Reuniones Dominicales"}),a.jsxs(Ru,{children:[a.jsx(Pu,{children:"Domingos"}),a.jsx(Tu,{children:"Acompáñanos a nuestras reuniones todos los domingos a las 10:00 am en Hilton Garden Inn Miami Airport West, 3550 NW 74th Ave."})]})]}),a.jsxs($u,{children:[a.jsx(_u,{src:J.servicios,alt:"Auditorio Rios De Vida"}),a.jsxs(Ru,{children:[a.jsx(Pu,{children:"Auditorio Centro Cristiano Ríos de Vida"}),a.jsx(Tu,{children:"Nos encontramos en el Auditorio Centro Cristiano Ríos de Vida, donde podrás disfrutar de un ambiente acogedor y lleno de vida. Donde cada reunion es una oportunidad para tener un encuentro con Dios y confraternizar con otros miembros de la iglesia."}),a.jsx(Xh,{children:a.jsx(M,{as:M,to:"/masSobreNosotros#auditorio-rios-de-vida",children:"Clic Aquí"})})]})]}),a.jsxs($u,{children:[a.jsx(_u,{src:J.congreso,alt:"Eventos"}),a.jsxs(Ru,{children:[a.jsx(Pu,{children:"Eventos"}),a.jsx(Tu,{children:"Durante el trasncurso del año tenemos diferentes eventos, como el congreso de jóvenes, la conferencia de mujeres y el congreso de hombres. ¡No te los pierdas!"}),a.jsx(Xh,{href:"ENLACE_A_DEVOCIONAL_ADULTOS",children:"Eventos"})]})]})]})]}),C2=k.div`
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
`,E2=k.h1`
  font-size: 2.5rem;
  margin-bottom: 24px;
  text-align: center;
  color: #2c3e50;
`,$2=k.p`
  font-size: 1.15rem;
  text-align: justify;
`;function Rv(){return a.jsxs(C2,{children:[a.jsx(E2,{children:"¿Qué es la Pascua?"}),a.jsxs($2,{children:["Las Pascuas en sí es un día comercial, pero detrás de todo eso existe un verdadero significado. Jesús celebró las Pascuas con sus discípulos; en sí no era como la que conocemos hoy, pero el significado era que celebraban que Dios una vez había salvado a los hijos de Israel de la muerte. Dios les pidió que en su entrada colocaran la sangre de un cordero. Esa sangre de un cordero puro evitaba que la muerte ingresara a esa casa y se llevara a los hijos.",a.jsx("br",{}),a.jsx("br",{}),"Pero ahora el Cordero iba a ser Jesús. Las Pascuas es recordar que Jesús derramó su sangre para que toda la humanidad pudiera recibir la salvación.",a.jsx("br",{}),a.jsx("br",{}),"«Jesús dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí» (Juan 14:6).",a.jsx("br",{}),a.jsx("br",{}),"A través de Él podemos llegar a Dios. El significado de Pascuas es que Dios ya te libró de todo pecado, solo queda aceptar que Él es tu Señor y Salvador.",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"Juan 3:16"}),a.jsx("br",{}),'"Porque tanto amó Dios al mundo que dio a su Hijo único, para que todo el que cree en Él no se pierda, sino que tenga vida eterna."']})]})}function _2(){return a.jsxs(R2,{children:[a.jsx(Qi,{}),a.jsx($l,{}),a.jsx(Rv,{}),a.jsx(_k,{}),a.jsx(lk,{}),a.jsx(k2,{}),a.jsx(l2,{}),a.jsx(e2,{}),a.jsx(d2,{}),a.jsx(El,{})]})}const R2=k.div`
  //background-color: #ececec; // Cambia esta ruta por la de tu imagen
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;function Nu(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"},child:[]},{tag:"path",attr:{d:"M11.69 15c.36-.75.84-1.43 1.43-2H7v-2h11c1.07 0 2.09.25 3 .69V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.69c-.44-.91-.69-1.93-.69-3 0-.34.03-.67.08-1H7v-2h4.69zM12 2.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM7 7h10v2H7V7z"},child:[]}]})(e)}function Iu(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},child:[]}]})(e)}function It(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8V8zm-7 1V3.5L18.5 9H13zM22.71 14l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71a.996.996 0 0 0 0-1.41z"},child:[]}]})(e)}function P2(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(e)}function T2(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function zt(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"},child:[]}]})(e)}function St(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"},child:[]}]})(e)}function Wr(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"},child:[]}]})(e)}function Pn(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"},child:[]}]})(e)}function Lt(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"},child:[]}]})(e)}const Pv=y.createContext(),N2=()=>{const[e,t]=y.useState(!1),n=ge(),r=()=>{t(i=>!i)},o=()=>{n("/logout")};return a.jsx(Pv.Provider,{value:{darkTheme:e,toggleTheme:r},children:a.jsxs(I2,{$darkTheme:e,children:[a.jsx(z2,{onClick:o,children:a.jsx(T2,{})}),a.jsx(L2,{onClick:r,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsx(RS,{})]})})},I2=k.div`
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
    min-height: 100vh;
`,z2=k.button`
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
`,L2=k.button`
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
`,A2=()=>{const{darkTheme:e,toggleTheme:t}=y.useContext(Pv),n=ge(),[r,o]=y.useState(null);y.useEffect(()=>{const l=localStorage.getItem("rol");l&&o(l)},[]);const i=l=>{n(l)},s=l=>l.includes(parseInt(r));return a.jsxs(O2,{$darkTheme:e,children:[a.jsx(M2,{onClick:t,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsxs(D2,{children:[s([1])&&a.jsxs(kt,{onClick:()=>i("/miembrosLideresSupervisor"),$darkTheme:e,children:[a.jsx(Iu,{size:24})," ",a.jsx(Ct,{children:"Miembros Lider Supervisor"})]}),s([2])&&a.jsxs(kt,{onClick:()=>i("/registroLideryMiembro"),$darkTheme:e,children:[a.jsx(Iu,{size:24})," ",a.jsx(Ct,{children:"Miembros"})]}),s([3])&&a.jsxs(kt,{onClick:()=>i("/planillaLider"),$darkTheme:e,children:[a.jsx(Iu,{size:24})," ",a.jsx(Ct,{children:"Miembros"})]}),s([3])&&a.jsxs(kt,{onClick:()=>i("/asistencia"),$darkTheme:e,children:[a.jsx(Wr,{size:24})," ",a.jsx(Ct,{children:"Asistencia"})]}),s([2])&&a.jsxs(kt,{onClick:()=>i("/asistenciaVistaSupervisor"),$darkTheme:e,children:[a.jsx(Wr,{size:24})," ",a.jsx(Ct,{children:"Asistencia Vista Supervisor"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/asistenciaVistaAdmin"),$darkTheme:e,children:[a.jsx(Wr,{size:24})," ",a.jsx(Ct,{children:"Asistencia "})]}),s([3])&&a.jsxs(kt,{onClick:()=>i("/generalPlanilla"),$darkTheme:e,children:[a.jsx(Nu,{size:24})," ",a.jsx(Ct,{children:"Planilla"})]}),s([2])&&a.jsxs(kt,{onClick:()=>i("/planillaGeneralSupervisor"),$darkTheme:e,children:[a.jsx(Nu,{size:24})," ",a.jsx(Ct,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/planillaGeneralAdmin"),$darkTheme:e,children:[a.jsx(Nu,{size:24})," ",a.jsx(Ct,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/asignarSupervisor"),$darkTheme:e,children:[a.jsx(Wr,{size:24})," ",a.jsx(Ct,{children:"Asignar Supervisor"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/registroUsuarios"),$darkTheme:e,children:[a.jsx(Wr,{size:24})," ",a.jsx(Ct,{children:"Usuarios"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/registroDeRoles"),$darkTheme:e,children:[a.jsx(Wr,{size:24})," ",a.jsx(Ct,{children:"Roles"})]})]})]})},O2=k.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
`,D2=k.div`
    display: grid;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
`,kt=k.button`
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
`,Ct=k.span`
    margin-top: 10px;
`,M2=k.button`
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
`,ns=y.createContext(),F2=({children:e})=>{const[t,n]=y.useState(null);return a.jsx(ns.Provider,{value:{auth:t,setAuth:n},children:e})};function Tv(e,t){return function(){return e.apply(t,arguments)}}const{toString:B2}=Object.prototype,{getPrototypeOf:Pf}=Object,Nl=(e=>t=>{const n=B2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qt=e=>(e=e.toLowerCase(),t=>Nl(t)===e),Il=e=>t=>typeof t===e,{isArray:Io}=Array,Mi=Il("undefined");function U2(e){return e!==null&&!Mi(e)&&e.constructor!==null&&!Mi(e.constructor)&&vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Nv=Qt("ArrayBuffer");function V2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Nv(e.buffer),t}const H2=Il("string"),vt=Il("function"),Iv=Il("number"),zl=e=>e!==null&&typeof e=="object",W2=e=>e===!0||e===!1,Qs=e=>{if(Nl(e)!=="object")return!1;const t=Pf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},q2=Qt("Date"),G2=Qt("File"),J2=Qt("Blob"),X2=Qt("FileList"),K2=e=>zl(e)&&vt(e.pipe),Q2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||vt(e.append)&&((t=Nl(e))==="formdata"||t==="object"&&vt(e.toString)&&e.toString()==="[object FormData]"))},Y2=Qt("URLSearchParams"),[Z2,eE,tE,nE]=["ReadableStream","Request","Response","Headers"].map(Qt),rE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Io(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function zv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lv=e=>!Mi(e)&&e!==Cr;function nd(){const{caseless:e}=Lv(this)&&this||{},t={},n=(r,o)=>{const i=e&&zv(t,o)||o;Qs(t[i])&&Qs(r)?t[i]=nd(t[i],r):Qs(r)?t[i]=nd({},r):Io(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&rs(arguments[r],n);return t}const oE=(e,t,n,{allOwnKeys:r}={})=>(rs(t,(o,i)=>{n&&vt(o)?e[i]=Tv(o,n):e[i]=o},{allOwnKeys:r}),e),iE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),sE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},aE=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Pf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},uE=e=>{if(!e)return null;if(Io(e))return e;let t=e.length;if(!Iv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},cE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pf(Uint8Array)),dE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},fE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pE=Qt("HTMLFormElement"),hE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Kh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mE=Qt("RegExp"),Av=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};rs(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},gE=e=>{Av(e,(t,n)=>{if(vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xE=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Io(e)?r(e):r(String(e).split(t)),n},vE=()=>{},yE=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,zu="abcdefghijklmnopqrstuvwxyz",Qh="0123456789",Ov={DIGIT:Qh,ALPHA:zu,ALPHA_DIGIT:zu+zu.toUpperCase()+Qh},wE=(e=16,t=Ov.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function bE(e){return!!(e&&vt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const SE=e=>{const t=new Array(10),n=(r,o)=>{if(zl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Io(r)?[]:{};return rs(r,(s,l)=>{const u=n(s,o+1);!Mi(u)&&(i[l]=u)}),t[o]=void 0,i}}return r};return n(e,0)},jE=Qt("AsyncFunction"),kE=e=>e&&(zl(e)||vt(e))&&vt(e.then)&&vt(e.catch),Dv=((e,t)=>e?setImmediate:t?((n,r)=>(Cr.addEventListener("message",({source:o,data:i})=>{o===Cr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Cr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",vt(Cr.postMessage)),CE=typeof queueMicrotask<"u"?queueMicrotask.bind(Cr):typeof process<"u"&&process.nextTick||Dv,_={isArray:Io,isArrayBuffer:Nv,isBuffer:U2,isFormData:Q2,isArrayBufferView:V2,isString:H2,isNumber:Iv,isBoolean:W2,isObject:zl,isPlainObject:Qs,isReadableStream:Z2,isRequest:eE,isResponse:tE,isHeaders:nE,isUndefined:Mi,isDate:q2,isFile:G2,isBlob:J2,isRegExp:mE,isFunction:vt,isStream:K2,isURLSearchParams:Y2,isTypedArray:cE,isFileList:X2,forEach:rs,merge:nd,extend:oE,trim:rE,stripBOM:iE,inherits:sE,toFlatObject:aE,kindOf:Nl,kindOfTest:Qt,endsWith:lE,toArray:uE,forEachEntry:dE,matchAll:fE,isHTMLForm:pE,hasOwnProperty:Kh,hasOwnProp:Kh,reduceDescriptors:Av,freezeMethods:gE,toObjectSet:xE,toCamelCase:hE,noop:vE,toFiniteNumber:yE,findKey:zv,global:Cr,isContextDefined:Lv,ALPHABET:Ov,generateString:wE,isSpecCompliantForm:bE,toJSONObject:SE,isAsyncFn:jE,isThenable:kE,setImmediate:Dv,asap:CE};function B(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}_.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Mv=B.prototype,Fv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fv[e]={value:e}});Object.defineProperties(B,Fv);Object.defineProperty(Mv,"isAxiosError",{value:!0});B.from=(e,t,n,r,o,i)=>{const s=Object.create(Mv);return _.toFlatObject(e,s,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),B.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const EE=null;function rd(e){return _.isPlainObject(e)||_.isArray(e)}function Bv(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Yh(e,t,n){return e?e.concat(t).map(function(o,i){return o=Bv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function $E(e){return _.isArray(e)&&!e.some(rd)}const _E=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function Ll(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,b){return!_.isUndefined(b[S])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(_.isDate(g))return g.toISOString();if(!u&&_.isBlob(g))throw new B("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(g)||_.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,S,b){let v=g;if(g&&!b&&typeof g=="object"){if(_.endsWith(S,"{}"))S=r?S:S.slice(0,-2),g=JSON.stringify(g);else if(_.isArray(g)&&$E(g)||(_.isFileList(g)||_.endsWith(S,"[]"))&&(v=_.toArray(g)))return S=Bv(S),v.forEach(function(p,w){!(_.isUndefined(p)||p===null)&&t.append(s===!0?Yh([S],w,i):s===null?S:S+"[]",c(p))}),!1}return rd(g)?!0:(t.append(Yh(b,S,i),c(g)),!1)}const f=[],h=Object.assign(_E,{defaultVisitor:d,convertValue:c,isVisitable:rd});function x(g,S){if(!_.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+S.join("."));f.push(g),_.forEach(g,function(v,m){(!(_.isUndefined(v)||v===null)&&o.call(t,v,_.isString(m)?m.trim():m,S,h))===!0&&x(v,S?S.concat(m):[m])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Zh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Tf(e,t){this._pairs=[],e&&Ll(e,this,t)}const Uv=Tf.prototype;Uv.append=function(t,n){this._pairs.push([t,n])};Uv.toString=function(t){const n=t?function(r){return t.call(this,r,Zh)}:Zh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function RE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vv(e,t,n){if(!t)return e;const r=n&&n.encode||RE,o=n&&n.serialize;let i;if(o?i=o(t,n):i=_.isURLSearchParams(t)?t.toString():new Tf(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class em{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Hv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},PE=typeof URLSearchParams<"u"?URLSearchParams:Tf,TE=typeof FormData<"u"?FormData:null,NE=typeof Blob<"u"?Blob:null,IE={isBrowser:!0,classes:{URLSearchParams:PE,FormData:TE,Blob:NE},protocols:["http","https","file","blob","url","data"]},Nf=typeof window<"u"&&typeof document<"u",od=typeof navigator=="object"&&navigator||void 0,zE=Nf&&(!od||["ReactNative","NativeScript","NS"].indexOf(od.product)<0),LE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",AE=Nf&&window.location.href||"http://localhost",OE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nf,hasStandardBrowserEnv:zE,hasStandardBrowserWebWorkerEnv:LE,navigator:od,origin:AE},Symbol.toStringTag,{value:"Module"})),rt={...OE,...IE};function DE(e,t){return Ll(e,new rt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return rt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function ME(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function FE(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Wv(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),u=i>=n.length;return s=!s&&_.isArray(o)?o.length:s,u?(_.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!_.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&_.isArray(o[s])&&(o[s]=FE(o[s])),!l)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,o)=>{t(ME(r),o,n,0)}),n}return null}function BE(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const os={transitional:Hv,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o?JSON.stringify(Wv(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return DE(t,this.formSerializer).toString();if((l=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ll(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),BE(t)):t}],transformResponse:[function(t){const n=this.transitional||os.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{os.headers[e]={}});const UE=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),VE=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&UE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},tm=Symbol("internals");function qo(e){return e&&String(e).trim().toLowerCase()}function Ys(e){return e===!1||e==null?e:_.isArray(e)?e.map(Ys):String(e)}function HE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const WE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Lu(e,t,n,r,o){if(_.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function qE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function GE(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class ot{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,u,c){const d=qo(u);if(!d)throw new Error("header name must be a non-empty string");const f=_.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=Ys(l))}const s=(l,u)=>_.forEach(l,(c,d)=>i(c,d,u));if(_.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(_.isString(t)&&(t=t.trim())&&!WE(t))s(VE(t),n);else if(_.isHeaders(t))for(const[l,u]of t.entries())i(u,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=qo(t),t){const r=_.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return HE(o);if(_.isFunction(n))return n.call(this,o,r);if(_.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qo(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Lu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=qo(s),s){const l=_.findKey(r,s);l&&(!n||Lu(r,r[l],l,n))&&(delete r[l],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Lu(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return _.forEach(this,(o,i)=>{const s=_.findKey(r,i);if(s){n[s]=Ys(o),delete n[i];return}const l=t?qE(i):String(i).trim();l!==i&&delete n[i],n[l]=Ys(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[tm]=this[tm]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=qo(s);r[l]||(GE(o,s),r[l]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}ot.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(ot.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(ot);function Au(e,t){const n=this||os,r=t||n,o=ot.from(r.headers);let i=r.data;return _.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function qv(e){return!!(e&&e.__CANCEL__)}function zo(e,t,n){B.call(this,e??"canceled",B.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(zo,B,{__CANCEL__:!0});function Gv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function JE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function XE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const x=d&&c-d;return x?Math.round(h*1e3/x):void 0}}function KE(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const Wa=(e,t,n=3)=>{let r=0;const o=XE(50,250);return KE(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=l;r=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-s)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},nm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},rm=e=>(...t)=>_.asap(()=>e(...t)),QE=rt.hasStandardBrowserEnv?function(){const t=rt.navigator&&/(msie|trident)/i.test(rt.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=_.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),YE=rt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),_.isString(r)&&s.push("path="+r),_.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ZE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function e$(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Jv(e,t){return e&&!ZE(t)?e$(e,t):t}const om=e=>e instanceof ot?{...e}:e;function Or(e,t){t=t||{};const n={};function r(c,d,f){return _.isPlainObject(c)&&_.isPlainObject(d)?_.merge.call({caseless:f},c,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function o(c,d,f){if(_.isUndefined(d)){if(!_.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function i(c,d){if(!_.isUndefined(d))return r(void 0,d)}function s(c,d){if(_.isUndefined(d)){if(!_.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,d)=>o(om(c),om(d),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=u[d]||o,h=f(e[d],t[d],d);_.isUndefined(h)&&f!==l||(n[d]=h)}),n}const Xv=e=>{const t=Or({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=ot.from(s),t.url=Vv(Jv(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(_.isFormData(n)){if(rt.hasStandardBrowserEnv||rt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[c,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(rt.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&QE(t.url))){const c=o&&i&&YE.read(i);c&&s.set(o,c)}return t},t$=typeof XMLHttpRequest<"u",n$=t$&&function(e){return new Promise(function(n,r){const o=Xv(e);let i=o.data;const s=ot.from(o.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=o,d,f,h,x,g;function S(){x&&x(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function v(){if(!b)return;const p=ot.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:p,config:e,request:b};Gv(function($){n($),S()},function($){r($),S()},j),b=null}"onloadend"in b?b.onloadend=v:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(v)},b.onabort=function(){b&&(r(new B("Request aborted",B.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new B("Network Error",B.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||Hv;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new B(w,j.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&_.forEach(s.toJSON(),function(w,j){b.setRequestHeader(j,w)}),_.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),l&&l!=="json"&&(b.responseType=o.responseType),c&&([h,g]=Wa(c,!0),b.addEventListener("progress",h)),u&&b.upload&&([f,x]=Wa(u),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(d=p=>{b&&(r(!p||p.type?new zo(null,e,b):p),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const m=JE(o.url);if(m&&rt.protocols.indexOf(m)===-1){r(new B("Unsupported protocol "+m+":",B.ERR_BAD_REQUEST,e));return}b.send(i||null)})},r$=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof B?d:new zo(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new B(`timeout ${t} of ms exceeded`,B.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>_.asap(l),u}},o$=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},i$=async function*(e,t){for await(const n of s$(e))yield*o$(n,t)},s$=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},im=(e,t,n,r)=>{const o=i$(e,t);let i=0,s,l=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){l(),u.close();return}let f=d.byteLength;if(n){let h=i+=f;n(h)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),o.return()}},{highWaterMark:2})},Al=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Kv=Al&&typeof ReadableStream=="function",a$=Al&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Qv=(e,...t)=>{try{return!!e(...t)}catch{return!1}},l$=Kv&&Qv(()=>{let e=!1;const t=new Request(rt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),sm=64*1024,id=Kv&&Qv(()=>_.isReadableStream(new Response("").body)),qa={stream:id&&(e=>e.body)};Al&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!qa[t]&&(qa[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new B(`Response type '${t}' is not supported`,B.ERR_NOT_SUPPORT,r)})})})(new Response);const u$=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(rt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await a$(e)).byteLength},c$=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??u$(t)},d$=Al&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:u,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:h}=Xv(e);c=c?(c+"").toLowerCase():"text";let x=r$([o,i&&i.toAbortSignal()],s),g;const S=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let b;try{if(u&&l$&&n!=="get"&&n!=="head"&&(b=await c$(d,r))!==0){let j=new Request(t,{method:"POST",body:r,duplex:"half"}),C;if(_.isFormData(r)&&(C=j.headers.get("content-type"))&&d.setContentType(C),j.body){const[$,E]=nm(b,Wa(rm(u)));r=im(j.body,sm,$,E)}}_.isString(f)||(f=f?"include":"omit");const v="credentials"in Request.prototype;g=new Request(t,{...h,signal:x,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:v?f:void 0});let m=await fetch(g);const p=id&&(c==="stream"||c==="response");if(id&&(l||p&&S)){const j={};["status","statusText","headers"].forEach(A=>{j[A]=m[A]});const C=_.toFiniteNumber(m.headers.get("content-length")),[$,E]=l&&nm(C,Wa(rm(l),!0))||[];m=new Response(im(m.body,sm,$,()=>{E&&E(),S&&S()}),j)}c=c||"text";let w=await qa[_.findKey(qa,c)||"text"](m,e);return!p&&S&&S(),await new Promise((j,C)=>{Gv(j,C,{data:w,headers:ot.from(m.headers),status:m.status,statusText:m.statusText,config:e,request:g})})}catch(v){throw S&&S(),v&&v.name==="TypeError"&&/fetch/i.test(v.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,e,g),{cause:v.cause||v}):B.from(v,v&&v.code,e,g)}}),sd={http:EE,xhr:n$,fetch:d$};_.forEach(sd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const am=e=>`- ${e}`,f$=e=>_.isFunction(e)||e===null||e===!1,Yv={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!f$(n)&&(r=sd[(s=String(n)).toLowerCase()],r===void 0))throw new B(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(am).join(`
`):" "+am(i[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:sd};function Ou(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new zo(null,e)}function lm(e){return Ou(e),e.headers=ot.from(e.headers),e.data=Au.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yv.getAdapter(e.adapter||os.adapter)(e).then(function(r){return Ou(e),r.data=Au.call(e,e.transformResponse,r),r.headers=ot.from(r.headers),r},function(r){return qv(r)||(Ou(e),r&&r.response&&(r.response.data=Au.call(e,e.transformResponse,r.response),r.response.headers=ot.from(r.response.headers))),Promise.reject(r)})}const Zv="1.7.7",If={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{If[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const um={};If.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Zv+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new B(o(s," has been removed"+(n?" in "+n:"")),B.ERR_DEPRECATED);return n&&!um[s]&&(um[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function p$(e,t,n){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],u=l===void 0||s(l,i,e);if(u!==!0)throw new B("option "+i+" must be "+u,B.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new B("Unknown option "+i,B.ERR_BAD_OPTION)}}const ad={assertOptions:p$,validators:If},Ln=ad.validators;class Tr{constructor(t){this.defaults=t,this.interceptors={request:new em,response:new em}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Or(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ad.assertOptions(r,{silentJSONParsing:Ln.transitional(Ln.boolean),forcedJSONParsing:Ln.transitional(Ln.boolean),clarifyTimeoutError:Ln.transitional(Ln.boolean)},!1),o!=null&&(_.isFunction(o)?n.paramsSerializer={serialize:o}:ad.assertOptions(o,{encode:Ln.function,serialize:Ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ot.concat(s,i);const l=[];let u=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(u=u&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,f=0,h;if(!u){const g=[lm.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,c),h=g.length,d=Promise.resolve(n);f<h;)d=d.then(g[f++],g[f++]);return d}h=l.length;let x=n;for(f=0;f<h;){const g=l[f++],S=l[f++];try{x=g(x)}catch(b){S.call(this,b);break}}try{d=lm.call(this,x)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Or(this.defaults,t);const n=Jv(t.baseURL,t.url);return Vv(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Tr.prototype[t]=function(n,r){return this.request(Or(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(Or(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Tr.prototype[t]=n(),Tr.prototype[t+"Form"]=n(!0)});class zf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new zo(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new zf(function(o){t=o}),cancel:t}}}function h$(e){return function(n){return e.apply(null,n)}}function m$(e){return _.isObject(e)&&e.isAxiosError===!0}const ld={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ld).forEach(([e,t])=>{ld[t]=e});function ey(e){const t=new Tr(e),n=Tv(Tr.prototype.request,t);return _.extend(n,Tr.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ey(Or(e,o))},n}const P=ey(os);P.Axios=Tr;P.CanceledError=zo;P.CancelToken=zf;P.isCancel=qv;P.VERSION=Zv;P.toFormData=Ll;P.AxiosError=B;P.Cancel=P.CanceledError;P.all=function(t){return Promise.all(t)};P.spread=h$;P.isAxiosError=m$;P.mergeConfig=Or;P.AxiosHeaders=ot;P.formToJSON=e=>Wv(_.isHTMLForm(e)?new FormData(e):e);P.getAdapter=Yv.getAdapter;P.HttpStatusCode=ld;P.default=P;function g$(){const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(null),s=ge(),{setAuth:l}=y.useContext(ns),u="http://localhost:4000";console.log("Usando API_URL:",u);const c=async d=>{d.preventDefault();try{console.log("API_URL:",void 0),console.log("Modo:","production");const f=await P.post(`${u}/api/auth/login`,{correo:e,contraseña:n});console.log("Respuesta del servidor:",f);const h=f.data.token,x=f.data.rol,g=f.data.id_usuario;h?(console.log("Token recibido:",h),l({token:h}),localStorage.setItem("token",h),localStorage.setItem("rol",x),localStorage.setItem("idUser",g),s("/menuInicio")):(i("Error al autenticar"),console.log("Token no encontrado en la respuesta"))}catch(f){console.error("Error durante la autenticación:",f),i("Credenciales inválidas")}};return a.jsxs(x$,{children:[a.jsx(v$,{children:a.jsx("div",{children:a.jsx(M,{to:"/",children:a.jsx(St,{})})})}),a.jsx(y$,{autoPlay:!0,loop:!0,muted:!0,children:a.jsx("source",{src:"https://static.educacionit.com/alumni/assets/bg-login.webm",type:"video/webm"})}),a.jsxs(w$,{onSubmit:c,children:[a.jsx("h2",{children:"Login"}),o&&a.jsx(S$,{children:o}),a.jsxs(cm,{children:[a.jsx(dm,{htmlFor:"username",children:"Username"}),a.jsx(fm,{type:"text",id:"username",name:"username",value:e,onChange:d=>t(d.target.value)})]}),a.jsxs(cm,{children:[a.jsx(dm,{htmlFor:"password",children:"Password"}),a.jsx(fm,{type:"password",id:"password",name:"password",value:n,onChange:d=>r(d.target.value)})]}),a.jsx(b$,{type:"submit",children:"Login"})]})]})}const x$=k.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`,v$=k.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  justify-content: flex-start;
  width: auto;
  font-size: 50px;
`,y$=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,w$=k.form`
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
`,cm=k.div`
  margin-bottom: 1.5rem;
  text-align: left;
`,dm=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`,fm=k.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`,b$=k.button`
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
`,S$=k.p`
  color: red;
  margin-bottom: 1rem;
`,j$=({onConfirm:e,onCancel:t})=>a.jsx(k$,{children:a.jsxs(C$,{children:[a.jsx("h2",{children:"Confirmar"}),a.jsx("p",{children:"¿Estás seguro de que deseas cerrar sesión?"}),a.jsxs(E$,{children:[a.jsx(pm,{onClick:e,children:"Aceptar"}),a.jsx(pm,{onClick:t,children:"Cancelar"})]})]})}),k$=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,C$=k.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`,E$=k.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`,pm=k.button`
  padding: 10px 20px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`,$$=()=>{const{setAuth:e}=y.useContext(ns),t=ge(),[n,r]=y.useState(!0),o=()=>{e(null),localStorage.removeItem("token"),t("/login")},i=()=>{r(!1),t(-1)};return a.jsxs(_$,{children:[n&&a.jsx(j$,{onConfirm:o,onCancel:i}),!n&&a.jsx("div",{children:"Cerrando sesión..."})]})},_$=k.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,R$=["xxl","xl","lg","md","sm","xs"],P$="xs",T$=y.createContext({prefixes:{},breakpoints:R$,minBreakpoint:P$});function N$(e,t){const{prefixes:n}=y.useContext(T$);return e||n[t]||t}const At=y.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:s,variant:l,responsive:u,...c},d)=>{const f=N$(e,"table"),h=Bk(t,f,l&&`${f}-${l}`,s&&`${f}-${s}`,n&&`${f}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${f}-bordered`,o&&`${f}-borderless`,i&&`${f}-hover`),x=a.jsx("table",{...c,className:h,ref:d});if(u){let g=`${f}-responsive`;return typeof u=="string"&&(g=`${g}-${u}`),a.jsx("div",{className:g,children:x})}return x});var jt={},Ol={},Dr={},ty={},Lf={},Br={},Lo={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=y;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ke=Object.prototype.hasOwnProperty,I$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},mm={};function ry(e){return Ke.call(mm,e)?!0:Ke.call(hm,e)?!1:I$.test(e)?mm[e]=!0:(hm[e]=!0,!1)}function Je(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Of(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Af,Of);Ie[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Af,Of);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Af,Of);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z$=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(e){z$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zs[t]=Zs[e]})});var L$=/["'&<>]/;function Ve(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=L$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var A$=/([A-Z])/g,O$=/^ms-/,ud=Array.isArray;function mn(e,t){return{insertionMode:e,selectedValue:t}}function D$(e,t,n){switch(t){case"select":return mn(1,n.value!=null?n.value:n.defaultValue);case"svg":return mn(2,null);case"math":return mn(3,null);case"foreignObject":return mn(1,null);case"table":return mn(4,null);case"thead":case"tbody":case"tfoot":return mn(5,null);case"colgroup":return mn(7,null);case"tr":return mn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?mn(1,null):e}var gm=new Map;function oy(e,t,n){if(typeof n!="object")throw Error(U(62));t=!0;for(var r in n)if(Ke.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=Ve(r);o=Ve((""+o).trim())}else{i=r;var s=gm.get(i);s!==void 0||(s=Ve(i.replace(A$,"-$1").toLowerCase().replace(O$,"-ms-")),gm.set(i,s)),i=s,o=typeof o=="number"?o===0||Ke.call(Zs,r)?""+o:o+"px":Ve((""+o).trim())}t?(t=!1,e.push(' style="',i,":",o)):e.push(";",i,":",o)}}t||e.push('"')}function at(e,t,n,r){switch(n){case"style":oy(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Ie.hasOwnProperty(n)?Ie[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',Ve(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',Ve(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',Ve(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',Ve(r),'"')}}else if(ry(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',Ve(r),'"')}}}function ea(e,t,n){if(t!=null){if(n!=null)throw Error(U(60));if(typeof t!="object"||!("__html"in t))throw Error(U(61));t=t.__html,t!=null&&e.push(""+t)}}function M$(e){var t="";return ny.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Du(e,t,n,r){e.push(en(n));var o=n=null,i;for(i in t)if(Ke.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:at(e,r,i,s)}}return e.push(">"),ea(e,o,n),typeof n=="string"?(e.push(Ve(n)),null):n}var F$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xm=new Map;function en(e){var t=xm.get(e);if(t===void 0){if(!F$.test(e))throw Error(U(65,e));t="<"+e,xm.set(e,t)}return t}function B$(e,t,n,r,o){switch(t){case"select":e.push(en("select"));var i=null,s=null;for(d in n)if(Ke.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:at(e,r,d,l)}}return e.push(">"),ea(e,s,i),i;case"option":s=o.selectedValue,e.push(en("option"));var u=l=null,c=null,d=null;for(i in n)if(Ke.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:at(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:M$(l),ud(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(' selected=""');break}}else""+s===n&&e.push(' selected=""');else c&&e.push(' selected=""');return e.push(">"),ea(e,d,l),l;case"textarea":e.push(en("textarea")),d=s=i=null;for(l in n)if(Ke.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(U(91));default:at(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(">"),d!=null){if(i!=null)throw Error(U(92));if(ud(d)&&1<d.length)throw Error(U(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i!==null&&e.push(Ve(""+i)),null;case"input":e.push(en("input")),u=d=l=i=null;for(s in n)if(Ke.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(U(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:at(e,r,s,c)}return d!==null?at(e,r,"checked",d):u!==null&&at(e,r,"checked",u),i!==null?at(e,r,"value",i):l!==null&&at(e,r,"value",l),e.push("/>"),null;case"menuitem":e.push(en("menuitem"));for(var h in n)if(Ke.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(U(400));default:at(e,r,h,i)}return e.push(">"),null;case"title":e.push(en("title")),i=null;for(f in n)if(Ke.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(U(434));default:at(e,r,f,s)}return e.push(">"),i;case"listing":case"pre":e.push(en(t)),s=i=null;for(u in n)if(Ke.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:at(e,r,u,l)}if(e.push(">"),s!=null){if(i!=null)throw Error(U(60));if(typeof s!="object"||!("__html"in s))throw Error(U(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(en(t));for(var x in n)if(Ke.call(n,x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(U(399,t));default:at(e,r,x,i)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Du(e,n,t,r);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),Du(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Du(e,n,t,r);e.push(en(t)),s=i=null;for(c in n)if(Ke.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":oy(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:ry(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(" ",c,'="',Ve(l),'"')}return e.push(">"),ea(e,s,i),i}}function vm(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(U(395));return e.push(n),e.push('"></template>')}function U$(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(U(397))}}function V$(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(U(397))}}var H$=/[<\u2028\u2029]/g;function Mu(e){return JSON.stringify(e).replace(H$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function W$(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function ym(e,t,n,r){return n.generateStaticMarkup?(e.push(Ve(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(Ve(t)),e=!0),e)}var xi=Object.assign,q$=Symbol.for("react.element"),iy=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),py=Symbol.for("react.suspense_list"),hy=Symbol.for("react.memo"),Df=Symbol.for("react.lazy"),G$=Symbol.for("react.scope"),J$=Symbol.for("react.debug_trace_mode"),X$=Symbol.for("react.legacy_hidden"),K$=Symbol.for("react.default_value"),wm=Symbol.iterator;function cd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sy:return"Fragment";case iy:return"Portal";case ly:return"Profiler";case ay:return"StrictMode";case fy:return"Suspense";case py:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cy:return(e.displayName||"Context")+".Consumer";case uy:return(e._context.displayName||"Context")+".Provider";case dy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hy:return t=e.displayName||null,t!==null?t:cd(e.type)||"Memo";case Df:t=e._payload,e=e._init;try{return cd(e(t))}catch{}}return null}var my={};function bm(e,t){if(e=e.contextTypes,!e)return my;var n={},r;for(r in e)n[r]=t[r];return n}var Er=null;function Dl(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(U(401))}else{if(n===null)throw Error(U(401));Dl(e,n)}t.context._currentValue2=t.value}}function gy(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&gy(e)}function xy(e){var t=e.parent;t!==null&&xy(t),e.context._currentValue2=e.value}function vy(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(U(402));e.depth===t.depth?Dl(e,t):vy(e,t)}function yy(e,t){var n=t.parent;if(n===null)throw Error(U(402));e.depth===n.depth?Dl(e,n):yy(e,n),t.context._currentValue2=t.value}function Ga(e){var t=Er;t!==e&&(t===null?xy(e):e===null?gy(t):t.depth===e.depth?Dl(t,e):t.depth>e.depth?vy(t,e):yy(t,e),Er=e)}var Sm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function jm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=Sm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue2:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:xi({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Sm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=xi({},i,l)):xi(i,l))}e.state=i}else i.queue=null}var Q$={id:1,overflow:""};function dd(e,t,n){var r=e.id;e=e.overflow;var o=32-ta(r)-1;r&=~(1<<o),n+=1;var i=32-ta(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-ta(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var ta=Math.clz32?Math.clz32:e_,Y$=Math.log,Z$=Math.LN2;function e_(e){return e>>>=0,e===0?32:31-(Y$(e)/Z$|0)|0}function t_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var n_=typeof Object.is=="function"?Object.is:t_,$n=null,Mf=null,na=null,oe=null,ei=!1,Ja=!1,Fi=0,qn=null,Ml=0;function vr(){if($n===null)throw Error(U(321));return $n}function km(){if(0<Ml)throw Error(U(312));return{memoizedState:null,queue:null,next:null}}function Ff(){return oe===null?na===null?(ei=!1,na=oe=km()):(ei=!0,oe=na):oe.next===null?(ei=!1,oe=oe.next=km()):(ei=!0,oe=oe.next),oe}function Bf(){Mf=$n=null,Ja=!1,na=null,Ml=0,oe=qn=null}function wy(e,t){return typeof t=="function"?t(e):t}function Cm(e,t,n){if($n=vr(),oe=Ff(),ei){var r=oe.queue;if(t=r.dispatch,qn!==null&&(n=qn.get(r),n!==void 0)){qn.delete(r),r=oe.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return oe.memoizedState=r,[r,t]}return[oe.memoizedState,t]}return e=e===wy?typeof t=="function"?t():t:n!==void 0?n(t):t,oe.memoizedState=e,e=oe.queue={last:null,dispatch:null},e=e.dispatch=r_.bind(null,$n,e),[oe.memoizedState,e]}function Em(e,t){if($n=vr(),oe=Ff(),t=t===void 0?null:t,oe!==null){var n=oe.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!n_(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),oe.memoizedState=[e,t],e}function r_(e,t,n){if(25<=Ml)throw Error(U(301));if(e===$n)if(Ja=!0,e={action:n,next:null},qn===null&&(qn=new Map),n=qn.get(t),n===void 0)qn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function o_(){throw Error(U(394))}function Rs(){}var $m={readContext:function(e){return e._currentValue2},useContext:function(e){return vr(),e._currentValue2},useMemo:Em,useReducer:Cm,useRef:function(e){$n=vr(),oe=Ff();var t=oe.memoizedState;return t===null?(e={current:e},oe.memoizedState=e):t},useState:function(e){return Cm(wy,e)},useInsertionEffect:Rs,useLayoutEffect:function(){},useCallback:function(e,t){return Em(function(){return e},t)},useImperativeHandle:Rs,useEffect:Rs,useDebugValue:Rs,useDeferredValue:function(e){return vr(),e},useTransition:function(){return vr(),[!1,o_]},useId:function(){var e=Mf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-ta(e)-1)).toString(32)+t;var n=ra;if(n===null)throw Error(U(404));return t=Fi++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return vr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(U(407));return n()}},ra=null,Fu=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function i_(e){return console.error(e),null}function ti(){}function s_(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?i_:o,onAllReady:ti,onShellReady:s===void 0?ti:s,onShellError:ti,onFatalError:ti},n=Xa(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Uf(t,e,null,n,d,my,null,Q$),c.push(e),t}function Uf(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&jy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Xa(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Bi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function Ka(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function _m(e,t,n,r,o){for($n={},Mf=t,Fi=0,e=n(r,o);Ja;)Ja=!1,Fi=0,Ml+=1,oe=null,e=n(r,o);return Bf(),e}function Rm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(U(108,cd(r)||"Unknown",l));r=xi({},s,n)}t.legacyContext=r,dt(e,t,o),t.legacyContext=s}else dt(e,t,o)}function Pm(e,t){if(e&&e.defaultProps){t=xi({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fd(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=bm(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue2:o),jm(i,n,r,o),Rm(e,t,i,n)}else{i=bm(n,t.legacyContext),o=_m(e,t,n,r,i);var s=Fi!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)jm(o,n,r,i),Rm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=dd(r,1,0);try{dt(e,t,o)}finally{t.treeContext=r}}else dt(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=B$(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=D$(s,n,r),pd(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",n,">")}o.lastPushedText=!1}else{switch(n){case X$:case J$:case ay:case ly:case sy:dt(e,t,r.children);return;case py:dt(e,t,r.children);return;case G$:throw Error(U(343));case fy:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Xa(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Xa(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(pd(e,t,r),e.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),c.status=1,Qa(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Bi(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Uf(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case dy:if(r=_m(e,t,n.render,r,o),Fi!==0){n=t.treeContext,t.treeContext=dd(n,1,0);try{dt(e,t,r)}finally{t.treeContext=n}}else dt(e,t,r);return;case hy:n=n.type,r=Pm(n,r),fd(e,t,n,r,o);return;case uy:if(o=r.children,n=n._context,r=r.value,i=n._currentValue2,n._currentValue2=r,s=Er,Er=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,dt(e,t,o),e=Er,e===null)throw Error(U(403));r=e.parentValue,e.context._currentValue2=r===K$?e.context._defaultValue:r,e=Er=e.parent,t.context=e;return;case cy:r=r.children,r=r(n._currentValue2),dt(e,t,r);return;case Df:o=n._init,n=o(n._payload),r=Pm(n,r),fd(e,t,n,r,void 0);return}throw Error(U(130,n==null?n:typeof n,""))}}function dt(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case q$:fd(e,t,n.type,n.props,n.ref);return;case iy:throw Error(U(257));case Df:var r=n._init;n=r(n._payload),dt(e,t,n);return}if(ud(n)){Tm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=wm&&n[wm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);Tm(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=ym(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=ym(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Tm(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=dd(i,r,o);try{pd(e,t,n[o])}finally{t.treeContext=i}}}function pd(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return dt(e,t,n)}catch(u){if(Bf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Xa(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Uf(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Ga(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Ga(i),u}}function a_(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Sy(this,t,e)}function by(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(U(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return by(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Qa(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Qa(e,n)}else e.completedSegments.push(t)}function Sy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(U(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ti,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Qa(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(a_,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Qa(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function jy(e){if(e.status!==2){var t=Er,n=Fu.current;Fu.current=$m;var r=ra;ra=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){Ga(s.context);try{dt(l,s,s.node),l.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),s.abortSet.delete(s),u.status=1,Sy(l,s.blockedBoundary,u)}catch(g){if(Bf(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=s.ping;g.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=g,h=Bi(l,f);if(d===null?Ka(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var x=l.onAllReady;x()}}}finally{}}}o.splice(0,i),e.destination!==null&&Vf(e,e.destination)}catch(g){Bi(e,g),Ka(e,g)}finally{ra=r,Fu.current=n,n===$m&&Ga(t)}}}function Ps(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)t.push(r[i]);o=Fl(e,t,o)}for(;i<r.length-1;i++)t.push(r[i]);return i<r.length&&(o=t.push(r[i])),o;default:throw Error(U(390))}}function Fl(e,t,n){var r=n.boundary;if(r===null)return Ps(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=Ve(r),t.push(r),t.push('"')),t.push("></template>")),Ps(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;return o=o.boundaryPrefix+i.toString(16),r=r.id=o,vm(t,e.responseState,r),Ps(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),vm(t,e.responseState,r.id),Ps(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(U(391));return Fl(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function Nm(e,t,n){return U$(t,e.responseState,n.formatContext,n.id),Fl(e,t,n),V$(t,n.formatContext)}function Im(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)ky(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(U(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function ky(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(U(392));return Nm(e,t,r)}return Nm(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")<\/script>')}function Vf(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Fl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(r.push(l.startInlineScript),l.sentClientRenderFunction?r.push('$RX("'):(l.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(U(395));if(r.push(u),r.push('"'),c||d||f){r.push(",");var h=Mu(c||"");r.push(h)}if(d||f){r.push(",");var x=Mu(d||"");r.push(x)}if(f){r.push(",");var g=Mu(f);r.push(g)}if(!r.push(")<\/script>")){e.destination=null,i++,o.splice(0,i);return}}o.splice(0,i);var S=e.completedBoundaries;for(i=0;i<S.length;i++)if(!Im(e,t,S[i])){e.destination=null,i++,S.splice(0,i);return}S.splice(0,i);var b=e.partialBoundaries;for(i=0;i<b.length;i++){var v=b[i];e:{o=e,s=t;var m=v.completedSegments;for(l=0;l<m.length;l++)if(!ky(o,s,v,m[l])){l++,m.splice(0,l);var p=!1;break e}m.splice(0,l),p=!0}if(!p){e.destination=null,i++,b.splice(0,i);return}}b.splice(0,i);var w=e.completedBoundaries;for(i=0;i<w.length;i++)if(!Im(e,t,w[i])){e.destination=null,i++,w.splice(0,i);return}w.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function l_(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return by(r,e,t)}),n.clear(),e.destination!==null&&Vf(e,e.destination)}catch(r){Bi(e,r),Ka(e,r)}}function u_(){}function Cy(e,t,n,r){var o=!1,i=null,s="",l={push:function(c){return c!==null&&(s+=c),!0},destroy:function(c){o=!0,i=c}},u=!1;if(e=s_(e,W$(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,u_,void 0,function(){u=!0}),jy(e),l_(e,r),e.status===1)e.status=2,l.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=l;try{Vf(e,l)}catch(c){Bi(e,c),Ka(e,c)}}if(o)throw i;if(!u)throw Error(U(426));return s}Lo.renderToNodeStream=function(){throw Error(U(207))};Lo.renderToStaticMarkup=function(e,t){return Cy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Lo.renderToStaticNodeStream=function(){throw Error(U(208))};Lo.renderToString=function(e,t){return Cy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Lo.version="18.3.1";var Hf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey=y;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ft=null,pt=0;function L(e,t){if(t.length!==0)if(512<t.length)0<pt&&(e.enqueue(new Uint8Array(ft.buffer,0,pt)),ft=new Uint8Array(512),pt=0),e.enqueue(t);else{var n=ft.length-pt;n<t.length&&(n===0?e.enqueue(ft):(ft.set(t.subarray(0,n),pt),e.enqueue(ft),t=t.subarray(n)),ft=new Uint8Array(512),pt=0),ft.set(t,pt),pt+=t.length}}function ue(e,t){return L(e,t),!0}function zm(e){ft&&0<pt&&(e.enqueue(new Uint8Array(ft.buffer,0,pt)),ft=null,pt=0)}var $y=new TextEncoder;function X(e){return $y.encode(e)}function T(e){return $y.encode(e)}function _y(e,t){typeof e.error=="function"?e.error(t):e.close()}var Qe=Object.prototype.hasOwnProperty,c_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Am={};function Ry(e){return Qe.call(Am,e)?!0:Qe.call(Lm,e)?!1:c_.test(e)?Am[e]=!0:(Lm[e]=!0,!1)}function Xe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function qf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wf,qf);ze[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wf,qf);ze[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wf,qf);ze[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d_=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){d_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oa[t]=oa[e]})});var f_=/["'&<>]/;function Re(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=f_.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var p_=/([A-Z])/g,h_=/^ms-/,hd=Array.isArray,m_=T("<script>"),g_=T("<\/script>"),x_=T('<script src="'),v_=T('<script type="module" src="'),Om=T('" async=""><\/script>'),y_=/(<\/|<)(s)(cript)/gi;function w_(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function b_(e,t,n,r,o){e=e===void 0?"":e,t=t===void 0?m_:T('<script nonce="'+Re(t)+'">');var i=[];if(n!==void 0&&i.push(t,X((""+n).replace(y_,w_)),g_),r!==void 0)for(n=0;n<r.length;n++)i.push(x_,X(Re(r[n])),Om);if(o!==void 0)for(r=0;r<o.length;r++)i.push(v_,X(Re(o[r])),Om);return{bootstrapChunks:i,startInlineScript:t,placeholderPrefix:T(e+"P:"),segmentPrefix:T(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function tn(e,t){return{insertionMode:e,selectedValue:t}}function S_(e){return tn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function j_(e,t,n){switch(t){case"select":return tn(1,n.value!=null?n.value:n.defaultValue);case"svg":return tn(2,null);case"math":return tn(3,null);case"foreignObject":return tn(1,null);case"table":return tn(4,null);case"thead":case"tbody":case"tfoot":return tn(5,null);case"colgroup":return tn(7,null);case"tr":return tn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?tn(1,null):e}var Gf=T("<!-- -->");function Dm(e,t,n,r){return t===""?r:(r&&e.push(Gf),e.push(X(Re(t))),!0)}var Mm=new Map,k_=T(' style="'),Fm=T(":"),C_=T(";");function Py(e,t,n){if(typeof n!="object")throw Error(q(62));t=!0;for(var r in n)if(Qe.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=X(Re(r));o=X(Re((""+o).trim()))}else{i=r;var s=Mm.get(i);s!==void 0||(s=T(Re(i.replace(p_,"-$1").toLowerCase().replace(h_,"-ms-"))),Mm.set(i,s)),i=s,o=typeof o=="number"?o===0||Qe.call(oa,r)?X(""+o):X(o+"px"):X(Re((""+o).trim()))}t?(t=!1,e.push(k_,i,Fm,o)):e.push(C_,i,Fm,o)}}t||e.push(yr)}var On=T(" "),qr=T('="'),yr=T('"'),Bm=T('=""');function lt(e,t,n,r){switch(n){case"style":Py(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=ze.hasOwnProperty(n)?ze[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=X(t.attributeName),t.type){case 3:r&&e.push(On,n,Bm);break;case 4:r===!0?e.push(On,n,Bm):r!==!1&&e.push(On,n,qr,X(Re(r)),yr);break;case 5:isNaN(r)||e.push(On,n,qr,X(Re(r)),yr);break;case 6:!isNaN(r)&&1<=r&&e.push(On,n,qr,X(Re(r)),yr);break;default:t.sanitizeURL&&(r=""+r),e.push(On,n,qr,X(Re(r)),yr)}}else if(Ry(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(On,X(n),qr,X(Re(r)),yr)}}}var Dn=T(">"),Um=T("/>");function ia(e,t,n){if(t!=null){if(n!=null)throw Error(q(60));if(typeof t!="object"||!("__html"in t))throw Error(q(61));t=t.__html,t!=null&&e.push(X(""+t))}}function E_(e){var t="";return Ey.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var Bu=T(' selected=""');function Uu(e,t,n,r){e.push(nn(n));var o=n=null,i;for(i in t)if(Qe.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:lt(e,r,i,s)}}return e.push(Dn),ia(e,o,n),typeof n=="string"?(e.push(X(Re(n))),null):n}var Vu=T(`
`),$_=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Vm=new Map;function nn(e){var t=Vm.get(e);if(t===void 0){if(!$_.test(e))throw Error(q(65,e));t=T("<"+e),Vm.set(e,t)}return t}var __=T("<!DOCTYPE html>");function R_(e,t,n,r,o){switch(t){case"select":e.push(nn("select"));var i=null,s=null;for(d in n)if(Qe.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:lt(e,r,d,l)}}return e.push(Dn),ia(e,s,i),i;case"option":s=o.selectedValue,e.push(nn("option"));var u=l=null,c=null,d=null;for(i in n)if(Qe.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:lt(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:E_(l),hd(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(Bu);break}}else""+s===n&&e.push(Bu);else c&&e.push(Bu);return e.push(Dn),ia(e,d,l),l;case"textarea":e.push(nn("textarea")),d=s=i=null;for(l in n)if(Qe.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(q(91));default:lt(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(Dn),d!=null){if(i!=null)throw Error(q(92));if(hd(d)&&1<d.length)throw Error(q(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(Vu),i!==null&&e.push(X(Re(""+i))),null;case"input":e.push(nn("input")),u=d=l=i=null;for(s in n)if(Qe.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(q(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:lt(e,r,s,c)}return d!==null?lt(e,r,"checked",d):u!==null&&lt(e,r,"checked",u),i!==null?lt(e,r,"value",i):l!==null&&lt(e,r,"value",l),e.push(Um),null;case"menuitem":e.push(nn("menuitem"));for(var h in n)if(Qe.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(q(400));default:lt(e,r,h,i)}return e.push(Dn),null;case"title":e.push(nn("title")),i=null;for(f in n)if(Qe.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(q(434));default:lt(e,r,f,s)}return e.push(Dn),i;case"listing":case"pre":e.push(nn(t)),s=i=null;for(u in n)if(Qe.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:lt(e,r,u,l)}if(e.push(Dn),s!=null){if(i!=null)throw Error(q(60));if(typeof s!="object"||!("__html"in s))throw Error(q(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Vu,X(n)):e.push(X(""+n)))}return typeof i=="string"&&i[0]===`
`&&e.push(Vu),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(nn(t));for(var x in n)if(Qe.call(n,x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(q(399,t));default:lt(e,r,x,i)}return e.push(Um),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Uu(e,n,t,r);case"html":return o.insertionMode===0&&e.push(__),Uu(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Uu(e,n,t,r);e.push(nn(t)),s=i=null;for(c in n)if(Qe.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":Py(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Ry(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(On,X(c),qr,X(Re(l)),yr)}return e.push(Dn),ia(e,s,i),i}}var P_=T("</"),T_=T(">"),N_=T('<template id="'),I_=T('"></template>'),z_=T("<!--$-->"),L_=T('<!--$?--><template id="'),A_=T('"></template>'),O_=T("<!--$!-->"),D_=T("<!--/$-->"),M_=T("<template"),F_=T('"'),B_=T(' data-dgst="');T(' data-msg="');T(' data-stck="');var U_=T("></template>");function Hm(e,t,n){if(L(e,L_),n===null)throw Error(q(395));return L(e,n),ue(e,A_)}var V_=T('<div hidden id="'),H_=T('">'),W_=T("</div>"),q_=T('<svg aria-hidden="true" style="display:none" id="'),G_=T('">'),J_=T("</svg>"),X_=T('<math aria-hidden="true" style="display:none" id="'),K_=T('">'),Q_=T("</math>"),Y_=T('<table hidden id="'),Z_=T('">'),e3=T("</table>"),t3=T('<table hidden><tbody id="'),n3=T('">'),r3=T("</tbody></table>"),o3=T('<table hidden><tr id="'),i3=T('">'),s3=T("</tr></table>"),a3=T('<table hidden><colgroup id="'),l3=T('">'),u3=T("</colgroup></table>");function c3(e,t,n,r){switch(n.insertionMode){case 0:case 1:return L(e,V_),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,H_);case 2:return L(e,q_),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,G_);case 3:return L(e,X_),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,K_);case 4:return L(e,Y_),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,Z_);case 5:return L(e,t3),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,n3);case 6:return L(e,o3),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,i3);case 7:return L(e,a3),L(e,t.segmentPrefix),L(e,X(r.toString(16))),ue(e,l3);default:throw Error(q(397))}}function d3(e,t){switch(t.insertionMode){case 0:case 1:return ue(e,W_);case 2:return ue(e,J_);case 3:return ue(e,Q_);case 4:return ue(e,e3);case 5:return ue(e,r3);case 6:return ue(e,s3);case 7:return ue(e,u3);default:throw Error(q(397))}}var f3=T('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),p3=T('$RS("'),h3=T('","'),m3=T('")<\/script>'),g3=T('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),x3=T('$RC("'),v3=T('","'),y3=T('")<\/script>'),w3=T('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),b3=T('$RX("'),S3=T('"'),j3=T(")<\/script>"),Hu=T(","),k3=/[<\u2028\u2029]/g;function Wu(e){return JSON.stringify(e).replace(k3,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var vi=Object.assign,C3=Symbol.for("react.element"),Ty=Symbol.for("react.portal"),Ny=Symbol.for("react.fragment"),Iy=Symbol.for("react.strict_mode"),zy=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Oy=Symbol.for("react.forward_ref"),Dy=Symbol.for("react.suspense"),My=Symbol.for("react.suspense_list"),Fy=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),E3=Symbol.for("react.scope"),$3=Symbol.for("react.debug_trace_mode"),_3=Symbol.for("react.legacy_hidden"),R3=Symbol.for("react.default_value"),Wm=Symbol.iterator;function md(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ny:return"Fragment";case Ty:return"Portal";case zy:return"Profiler";case Iy:return"StrictMode";case Dy:return"Suspense";case My:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ay:return(e.displayName||"Context")+".Consumer";case Ly:return(e._context.displayName||"Context")+".Provider";case Oy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fy:return t=e.displayName||null,t!==null?t:md(e.type)||"Memo";case Jf:t=e._payload,e=e._init;try{return md(e(t))}catch{}}return null}var By={};function qm(e,t){if(e=e.contextTypes,!e)return By;var n={},r;for(r in e)n[r]=t[r];return n}var $r=null;function Bl(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(q(401))}else{if(n===null)throw Error(q(401));Bl(e,n)}t.context._currentValue=t.value}}function Uy(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Uy(e)}function Vy(e){var t=e.parent;t!==null&&Vy(t),e.context._currentValue=e.value}function Hy(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(q(402));e.depth===t.depth?Bl(e,t):Hy(e,t)}function Wy(e,t){var n=t.parent;if(n===null)throw Error(q(402));e.depth===n.depth?Bl(e,n):Wy(e,n),t.context._currentValue=t.value}function Ya(e){var t=$r;t!==e&&(t===null?Vy(e):e===null?Uy(t):t.depth===e.depth?Bl(t,e):t.depth>e.depth?Hy(t,e):Wy(t,e),$r=e)}var Gm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Jm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=Gm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:vi({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Gm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=vi({},i,l)):vi(i,l))}e.state=i}else i.queue=null}var P3={id:1,overflow:""};function gd(e,t,n){var r=e.id;e=e.overflow;var o=32-sa(r)-1;r&=~(1<<o),n+=1;var i=32-sa(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-sa(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var sa=Math.clz32?Math.clz32:I3,T3=Math.log,N3=Math.LN2;function I3(e){return e>>>=0,e===0?32:31-(T3(e)/N3|0)|0}function z3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var L3=typeof Object.is=="function"?Object.is:z3,_n=null,Xf=null,aa=null,ie=null,ni=!1,Za=!1,Ui=0,Gn=null,Ul=0;function wr(){if(_n===null)throw Error(q(321));return _n}function Xm(){if(0<Ul)throw Error(q(312));return{memoizedState:null,queue:null,next:null}}function Kf(){return ie===null?aa===null?(ni=!1,aa=ie=Xm()):(ni=!0,ie=aa):ie.next===null?(ni=!1,ie=ie.next=Xm()):(ni=!0,ie=ie.next),ie}function Qf(){Xf=_n=null,Za=!1,aa=null,Ul=0,ie=Gn=null}function qy(e,t){return typeof t=="function"?t(e):t}function Km(e,t,n){if(_n=wr(),ie=Kf(),ni){var r=ie.queue;if(t=r.dispatch,Gn!==null&&(n=Gn.get(r),n!==void 0)){Gn.delete(r),r=ie.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return ie.memoizedState=r,[r,t]}return[ie.memoizedState,t]}return e=e===qy?typeof t=="function"?t():t:n!==void 0?n(t):t,ie.memoizedState=e,e=ie.queue={last:null,dispatch:null},e=e.dispatch=A3.bind(null,_n,e),[ie.memoizedState,e]}function Qm(e,t){if(_n=wr(),ie=Kf(),t=t===void 0?null:t,ie!==null){var n=ie.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!L3(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),ie.memoizedState=[e,t],e}function A3(e,t,n){if(25<=Ul)throw Error(q(301));if(e===_n)if(Za=!0,e={action:n,next:null},Gn===null&&(Gn=new Map),n=Gn.get(t),n===void 0)Gn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function O3(){throw Error(q(394))}function Ts(){}var Ym={readContext:function(e){return e._currentValue},useContext:function(e){return wr(),e._currentValue},useMemo:Qm,useReducer:Km,useRef:function(e){_n=wr(),ie=Kf();var t=ie.memoizedState;return t===null?(e={current:e},ie.memoizedState=e):t},useState:function(e){return Km(qy,e)},useInsertionEffect:Ts,useLayoutEffect:function(){},useCallback:function(e,t){return Qm(function(){return e},t)},useImperativeHandle:Ts,useEffect:Ts,useDebugValue:Ts,useDeferredValue:function(e){return wr(),e},useTransition:function(){return wr(),[!1,O3]},useId:function(){var e=Xf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-sa(e)-1)).toString(32)+t;var n=la;if(n===null)throw Error(q(404));return t=Ui++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return wr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(q(407));return n()}},la=null,qu=Ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function D3(e){return console.error(e),null}function ri(){}function M3(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?D3:o,onAllReady:i===void 0?ri:i,onShellReady:s===void 0?ri:s,onShellError:l===void 0?ri:l,onFatalError:u===void 0?ri:u},n=el(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Yf(t,e,null,n,d,By,null,P3),c.push(e),t}function Yf(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&Xy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function el(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Vi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function tl(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,_y(e.destination,t)):(e.status=1,e.fatalError=t)}function Zm(e,t,n,r,o){for(_n={},Xf=t,Ui=0,e=n(r,o);Za;)Za=!1,Ui=0,Ul+=1,ie=null,e=n(r,o);return Qf(),e}function e0(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(q(108,md(r)||"Unknown",l));r=vi({},s,n)}t.legacyContext=r,ht(e,t,o),t.legacyContext=s}else ht(e,t,o)}function t0(e,t){if(e&&e.defaultProps){t=vi({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xd(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=qm(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue:o),Jm(i,n,r,o),e0(e,t,i,n)}else{i=qm(n,t.legacyContext),o=Zm(e,t,n,r,i);var s=Ui!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)Jm(o,n,r,i),e0(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=gd(r,1,0);try{ht(e,t,o)}finally{t.treeContext=r}}else ht(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=R_(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=j_(s,n,r),vd(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(P_,X(n),T_)}o.lastPushedText=!1}else{switch(n){case _3:case $3:case Iy:case zy:case Ny:ht(e,t,r.children);return;case My:ht(e,t,r.children);return;case E3:throw Error(q(343));case Dy:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=el(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=el(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(vd(e,t,r),c.lastPushedText&&c.textEmbedded&&c.chunks.push(Gf),c.status=1,nl(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Vi(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Yf(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Oy:if(r=Zm(e,t,n.render,r,o),Ui!==0){n=t.treeContext,t.treeContext=gd(n,1,0);try{ht(e,t,r)}finally{t.treeContext=n}}else ht(e,t,r);return;case Fy:n=n.type,r=t0(n,r),xd(e,t,n,r,o);return;case Ly:if(o=r.children,n=n._context,r=r.value,i=n._currentValue,n._currentValue=r,s=$r,$r=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,ht(e,t,o),e=$r,e===null)throw Error(q(403));r=e.parentValue,e.context._currentValue=r===R3?e.context._defaultValue:r,e=$r=e.parent,t.context=e;return;case Ay:r=r.children,r=r(n._currentValue),ht(e,t,r);return;case Jf:o=n._init,n=o(n._payload),r=t0(n,r),xd(e,t,n,r,void 0);return}throw Error(q(130,n==null?n:typeof n,""))}}function ht(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case C3:xd(e,t,n.type,n.props,n.ref);return;case Ty:throw Error(q(257));case Jf:var r=n._init;n=r(n._payload),ht(e,t,n);return}if(hd(n)){n0(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=Wm&&n[Wm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);n0(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=Dm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=Dm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function n0(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=gd(i,r,o);try{vd(e,t,n[o])}finally{t.treeContext=i}}}function vd(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return ht(e,t,n)}catch(u){if(Qf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=el(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Yf(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Ya(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Ya(i),u}}function F3(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Jy(this,t,e)}function Gy(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(q(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return Gy(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function nl(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&nl(e,n)}else e.completedSegments.push(t)}function Jy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(q(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ri,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&nl(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(F3,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(nl(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Xy(e){if(e.status!==2){var t=$r,n=qu.current;qu.current=Ym;var r=la;la=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){Ya(s.context);try{ht(l,s,s.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Gf),s.abortSet.delete(s),u.status=1,Jy(l,s.blockedBoundary,u)}catch(g){if(Qf(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=s.ping;g.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=g,h=Vi(l,f);if(d===null?tl(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var x=l.onAllReady;x()}}}finally{}}}o.splice(0,i),e.destination!==null&&Zf(e,e.destination)}catch(g){Vi(e,g),tl(e,g)}finally{la=r,qu.current=n,n===Ym&&Ya(t)}}}function Ns(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,L(t,N_),L(t,e.placeholderPrefix),e=X(r.toString(16)),L(t,e),ue(t,I_);case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)L(t,r[i]);o=Vl(e,t,o)}for(;i<r.length-1;i++)L(t,r[i]);return i<r.length&&(o=ue(t,r[i])),o;default:throw Error(q(390))}}function Vl(e,t,n){var r=n.boundary;if(r===null)return Ns(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,ue(t,O_),L(t,M_),r&&(L(t,B_),L(t,X(Re(r))),L(t,F_)),ue(t,U_),Ns(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;o=T(o.boundaryPrefix+i.toString(16)),r=r.id=o,Hm(t,e.responseState,r),Ns(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Hm(t,e.responseState,r.id),Ns(e,t,n);else{if(ue(t,z_),n=r.completedSegments,n.length!==1)throw Error(q(391));Vl(e,t,n[0])}return ue(t,D_)}function r0(e,t,n){return c3(t,e.responseState,n.formatContext,n.id),Vl(e,t,n),d3(t,n.formatContext)}function o0(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)Ky(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,L(t,e.startInlineScript),e.sentCompleteBoundaryFunction?L(t,x3):(e.sentCompleteBoundaryFunction=!0,L(t,g3)),r===null)throw Error(q(395));return n=X(n.toString(16)),L(t,r),L(t,v3),L(t,e.segmentPrefix),L(t,n),ue(t,y3)}function Ky(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(q(392));return r0(e,t,r)}return r0(e,t,r),e=e.responseState,L(t,e.startInlineScript),e.sentCompleteSegmentFunction?L(t,p3):(e.sentCompleteSegmentFunction=!0,L(t,f3)),L(t,e.segmentPrefix),o=X(o.toString(16)),L(t,o),L(t,h3),L(t,e.placeholderPrefix),L(t,o),ue(t,m3)}function Zf(e,t){ft=new Uint8Array(512),pt=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Vl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)L(t,r[n]);n<r.length&&ue(t,r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(L(r,l.startInlineScript),l.sentClientRenderFunction?L(r,b3):(l.sentClientRenderFunction=!0,L(r,w3)),u===null)throw Error(q(395));L(r,u),L(r,S3),(c||d||f)&&(L(r,Hu),L(r,X(Wu(c||"")))),(d||f)&&(L(r,Hu),L(r,X(Wu(d||"")))),f&&(L(r,Hu),L(r,X(Wu(f)))),ue(r,j3)}o.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)o0(e,t,h[i]);h.splice(0,i),zm(t),ft=new Uint8Array(512),pt=0;var x=e.partialBoundaries;for(i=0;i<x.length;i++){var g=x[i];e:{o=e,s=t;var S=g.completedSegments;for(l=0;l<S.length;l++)if(!Ky(o,s,g,S[l])){l++,S.splice(0,l);var b=!1;break e}S.splice(0,l),b=!0}if(!b){e.destination=null,i++,x.splice(0,i);return}}x.splice(0,i);var v=e.completedBoundaries;for(i=0;i<v.length;i++)o0(e,t,v[i]);v.splice(0,i)}finally{zm(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function i0(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return Gy(r,e,t)}),n.clear(),e.destination!==null&&Zf(e,e.destination)}catch(r){Vi(e,r),tl(e,r)}}Hf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var o,i,s=new Promise(function(d,f){i=d,o=f}),l=M3(e,b_(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),S_(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,i,function(){var d=new ReadableStream({type:"bytes",pull:function(f){if(l.status===1)l.status=2,_y(f,l.fatalError);else if(l.status!==2&&l.destination===null){l.destination=f;try{Zf(l,f)}catch(h){Vi(l,h),tl(l,h)}}},cancel:function(){i0(l)}},{highWaterMark:0});d.allReady=s,n(d)},function(d){s.catch(function(){}),r(d)},o);if(t&&t.signal){var u=t.signal,c=function(){i0(l,u.reason),u.removeEventListener("abort",c)};u.addEventListener("abort",c)}Xy(l)})};Hf.version="18.3.1";var Ao,Qy;Ao=Lo,Qy=Hf;Br.version=Ao.version;Br.renderToString=Ao.renderToString;Br.renderToStaticMarkup=Ao.renderToStaticMarkup;Br.renderToNodeStream=Ao.renderToNodeStream;Br.renderToStaticNodeStream=Ao.renderToStaticNodeStream;Br.renderToReadableStream=Qy.renderToReadableStream;var B3=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lf,"__esModule",{value:!0});const Ut=B3(y),U3=Br,V3=["string","number","boolean"];function H3({header:e,body:t}){const n=Ut.default.createElement("tr",null,e.map(o=>Ut.default.createElement("th",{key:o},o))),r=t.map((o,i)=>Array.isArray(o)?Ut.default.createElement("tr",{key:i},o.map((s,l)=>Ut.default.createElement("th",{key:l}," ",s," "))):o!==null&&typeof o=="object"?Ut.default.createElement("tr",{key:i},Object.entries(o).map(([s,l],u)=>typeof l=="object"?(console.error(`typeof ${s} is incorrect, only accept ${V3.join(", ")} `),Ut.default.createElement("th",{key:u})):Ut.default.createElement("th",{key:u},Ut.default.createElement(Ut.default.Fragment,null,l)))):(console.error(`
       data structure is incorrect,  
       data structure type -> 
       " type data = Array<{ [key: string]: string | number | boolean }> 
                         or 
        type data = Array<(string | number | boolean)[]>"
      `),null));return(0,U3.renderToString)(Ut.default.createElement("table",null,Ut.default.createElement("tbody",null,n,r)))}Lf.default=H3;(function(e){var t=it&&it.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=e.template=e.uri=e.format=e.base64=void 0;function n(i){return window.btoa(unescape(encodeURIComponent(i)))}e.base64=n;function r(i,s){return i.replace(/{(\w+)}/g,(l,u)=>s[u])}e.format=r,e.uri="data:application/vnd.ms-excel;base64,",e.template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{table}</body></html>';var o=Lf;Object.defineProperty(e,"createTable",{enumerable:!0,get:function(){return t(o).default}})})(ty);var W3=it&&it.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),q3=it&&it.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),G3=it&&it.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&W3(t,e,n);return q3(t,e),t};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.downloadExcel=Dr.excel=void 0;const oi=G3(ty);function Yy(){return document?!0:((process==null?void 0:"production")!=="production"&&console.error("Failed to access document object"),!1)}function Zy(e,t){const n=window.document.createElement("a");return n.href=oi.uri+oi.base64(oi.format(oi.template,t)),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),!0}function e1(e,t){if(e)return e.cloneNode(!0).outerHTML;if(t)return oi.createTable(t);console.error("currentTableRef or tablePayload does not exist")}function J3({fileName:e,sheet:t,tablePayload:n},r){if(!Yy())return!1;const o=e1(r,n);return Zy(e,{worksheet:t||"Worksheet",table:o})}Dr.downloadExcel=J3;function X3({currentTableRef:e,filename:t,sheet:n}){function r(){if(!Yy())return!1;const o=e1(e),i=`${t}.xls`;return Zy(i,{worksheet:n||"Worksheet",table:o})}return{onDownload:r}}Dr.excel=X3;Object.defineProperty(Ol,"__esModule",{value:!0});Ol.useDownloadExcel=void 0;const Gu=y,K3=Dr;function Q3({currentTableRef:e,filename:t,sheet:n}){const[r,o]=(0,Gu.useState)({});return(0,Gu.useEffect)(()=>{o({currentTableRef:e,filename:t,sheet:n})},[e,t,n]),(0,Gu.useMemo)(()=>(0,K3.excel)(r),[r])}Ol.useDownloadExcel=Q3;(function(e){var t=it&&it.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(e,"__esModule",{value:!0}),e.downloadExcel=e.useDownloadExcel=e.DownloadTableExcel=void 0;const n=t(y),r=Ol;Object.defineProperty(e,"useDownloadExcel",{enumerable:!0,get:function(){return r.useDownloadExcel}});const o=Dr;Object.defineProperty(e,"downloadExcel",{enumerable:!0,get:function(){return o.downloadExcel}});const i=({currentTableRef:s,filename:l,sheet:u,children:c})=>{const{onDownload:d}=(0,r.useDownloadExcel)({currentTableRef:s,filename:l,sheet:u});return n.default.createElement("span",{onClick:d},c)};e.DownloadTableExcel=i})(jt);const t1="https://backend-riosdevida-production.up.railway.app",s0=`${t1}/api/miembros`,a0=`${t1}/api/miembros/lider`;function Y3(){const{auth:e}=y.useContext(ns),[t,n]=y.useState([]),[r,o]=y.useState([]),[i,s]=y.useState(null),l=y.useRef(null),u=localStorage.getItem("token"),c=localStorage.getItem("idUser"),d=localStorage.getItem("rol");y.useEffect(()=>{f(),d===2&&h()},[e]);const f=async(b=c)=>{try{const v=b?await P.get(`${a0}/${b}`,{headers:{Authorization:`Bearer ${u}`}}):await P.get(e.id_rol===3?`${a0}/${e.id_usuario}`:s0,{headers:{Authorization:`Bearer ${u}`}});n(v.data)}catch(v){console.error("Error al obtener los miembros:",v),v.response&&v.response.status===401&&console.log("Token expiró")}},h=async()=>{try{const b=await P.get(`/supervisores/${c}/lideres`,{headers:{Authorization:`Bearer ${u}`}});o(b.data)}catch(b){console.error("Error al obtener líderes:",b)}},x=async b=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${s0}/${b}`,{headers:{Authorization:`Bearer ${u}`}}),f()}catch(v){console.error("Error al eliminar el miembro:",v),v.response&&v.response.status===401?console.log("Token expiró o no autorizado."):alert("Ocurrió un error al eliminar el miembro. Por favor, intenta de nuevo.")}},g=b=>{const v=b.target.value||null;s(v),f(v)},{onDownload:S}=jt.useDownloadExcel({currentTableRef:l.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(Z3,{children:[a.jsx(eR,{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})}),a.jsxs(tR,{children:[a.jsxs(M,{to:"/crearMiembro",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:S,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Miembros"]})]}),e.id_rol===2&&a.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[a.jsx("label",{htmlFor:"liderSelect",children:"Seleccionar Líder:"}),a.jsxs("select",{id:"liderSelect",onChange:g,value:i||"",style:{marginLeft:"10px"},children:[a.jsx("option",{value:"",children:"Ver todos los miembros"}),r.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.nombre," ",b.apellido]},b.id_lider))]})]}),a.jsxs(nR,{striped:!0,bordered:!0,hover:!0,ref:l,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:t.map((b,v)=>a.jsxs("tr",{children:[a.jsx("td",{children:v+1}),a.jsx("td",{children:b.nombre}),a.jsx("td",{children:b.apellido}),a.jsx("td",{children:b.Líder?`${b.Líder.nombre} ${b.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarMiembros/${b.id_miembro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>x(b.id_miembro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},b.id_miembro))})]})]})}const Z3=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,eR=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,tR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,nR=k(At)`
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
`,rR="https://backend-riosdevida-production.up.railway.app",oR=`${rR}/api/miembros`,iR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(localStorage.getItem("idUser")),s=ge(),l=localStorage.getItem("token"),u=async d=>{d.preventDefault();try{await P.post(oR,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${l}`}}),s("/planillaLider")}catch(f){console.error("Error al crear el miembro:",f)}},c=()=>{s("/planillaLider")};return a.jsx(sR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:u,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})},sR=k.div`
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
`,aR="https://backend-riosdevida-production.up.railway.app",l0=`${aR}/api/miembros/`,lR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(localStorage.getItem("idUser")),s=ge(),{id:l}=cr(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await P.put(l0+l,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${u}`}}),s("/planillaLider")};y.useEffect(()=>{d()},[]);const d=async()=>{const h=await P.get(l0+l,{headers:{Authorization:`Bearer ${u}`}});t(h.data.nombre),r(h.data.apellido)},f=()=>{s("/planillaLider")};return a.jsx(uR,{children:a.jsx(cR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:h=>t(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:h=>r(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},uR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,cR=k.div`
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
`,n1="https://backend-riosdevida-production.up.railway.app",dR=`${n1}/api/asistencia`,fR=`${n1}/api/asistencia/lider/`;function pR(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),s=y.useRef(null);y.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const x=await P.get(`${fR}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(x.data),r(x.data)}catch(x){console.error("Error al obtener los miembros",x),x.response&&x.response.status===401&&console.log("Token expiró")}},d=x=>{const g=x.target.value;if(i(g),g){const S=e.filter(b=>b.fecha===g);r(S)}else r(e)},f=async x=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${dR}/${x}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(g){console.error("Error al eliminar un Miembro:",g)}},{onDownload:h}=jt.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros Lautaro",sheet:"Miembros"});return a.jsxs(hR,{children:[a.jsx(mR,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(gR,{children:[a.jsxs(M,{to:"/crearAsistencia",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Asistencia"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})]}),a.jsxs(xR,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:d})]}),a.jsxs(vR,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((x,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:x.miembro?`${x.miembro.nombre} ${x.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:x.asistencia}),a.jsx("td",{children:x.fecha}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarAsistencia/${x.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>f(x.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},x.id_miembro_planilla))})]})]})}const hR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,mR=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,gR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,xR=k.div`
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
`,vR=k(At)`
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
`,r1="https://backend-riosdevida-production.up.railway.app",yR=`${r1}/api/planilla`,wR=`${r1}/api/planilla/planillasLider/`;function bR(){const[e,t]=y.useState([]),n=y.useRef(null),[r,o]=y.useState([]),[i,s]=y.useState("");y.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const x=await P.get(`${wR}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(x.data),o(x.data)}catch(x){console.error("Error al obtener los miembros",x),x.response&&x.response.status===401&&console.log("Token expiró")}},d=x=>{const g=x.target.value;if(s(g),g){const S=e.filter(b=>b.fecha===g);o(S)}else o(e)},f=async x=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla??"))try{await P.delete(`${yR}/${x}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(g){console.error("Error al eliminar un Planilla:",g)}},{onDownload:h}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Miembros Celula",sheet:"Miembros"});return a.jsxs(SR,{children:[a.jsx(jR,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(kR,{children:[a.jsxs(M,{to:"/crearPlanillaGeneral",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Pllanillas"]})]}),a.jsxs(ER,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:i,onChange:d})]}),a.jsxs(CR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Numero de Planilla"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrion"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jovenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:" Fecha"}),a.jsx("th",{children:" Botones"})]})}),a.jsx("tbody",{children:r.map((x,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:x.id_planilla}),a.jsx("td",{children:`${x.Lider.nombre} ${x.Lider.apellido}`}),a.jsx("td",{children:`${x.Supervisor.nombre} ${x.Supervisor.apellido}`}),a.jsx("td",{children:x.anfitrion}),a.jsx("td",{children:x.ayudante}),a.jsx("td",{children:x.total_invitados}),a.jsx("td",{children:x.total_jov_adult}),a.jsx("td",{children:x.total_ninos}),a.jsx("td",{children:x.total_participantes}),a.jsx("td",{children:x.conv_rec}),a.jsx("td",{children:x.ofrenda}),a.jsx("td",{children:x.fecha}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarPlanillaGeneral/${x.id_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>f(x.id_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},x.id_planilla))})]})]})}const SR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,jR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,kR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,CR=k(At)`
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
`,ER=k.div`
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
`,o1="https://backend-riosdevida-production.up.railway.app",$R=`${o1}/api/planilla`,_R=`${o1}/api/planilla/supervisorPorLider/`,RR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,x]=y.useState(""),[g,S]=y.useState(""),[b,v]=y.useState(""),[m,p]=y.useState(""),[w,j]=y.useState(localStorage.getItem("idUser")),[C,$]=y.useState([]),E=ge(),A=localStorage.getItem("token"),O=localStorage.getItem("idUser");y.useEffect(()=>{(async()=>{try{const ye=await P.get(`${_R}${O}`,{headers:{Authorization:`Bearer ${A}`}});$(ye.data)}catch(ye){console.error("Error al obtener líderes o supervisores",ye)}})()},[A]);const te=async N=>{N.preventDefault();try{await P.post($R,{id_lider:w,id_supervisor:e,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:g,ofrenda:b,fecha:m},{headers:{Authorization:`Bearer ${A}`}}),E("/generalPlanilla")}catch(ye){console.error("Error al crear la planilla",ye)}},Se=()=>{E("/generalPlanilla")};return a.jsx(PR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:te,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:N=>t(N.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),C.map(N=>a.jsxs("option",{value:N.id_supervisor,children:[N.supervisor.nombre," ",N.supervisor.apellido]},N.id_supervisor))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:N=>r(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:N=>i(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:N=>l(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:N=>c(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:N=>f(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:N=>x(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:g,onChange:N=>S(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:N=>v(N.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:m,onChange:N=>p(N.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Se,children:"Cancelar"})]})]})]})})},PR=k.div`
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
`,TR="https://backend-riosdevida-production.up.railway.app",u0=`${TR}/api/planilla/`,NR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,x]=y.useState(""),[g,S]=y.useState(""),[b,v]=y.useState(""),m=ge(),{id:p}=cr(),w=localStorage.getItem("token"),j=async E=>{E.preventDefault(),await P.put(u0+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:g,fecha:b},{headers:{Authorization:`Bearer ${w}`}}),m("/generalPlanilla")};y.useEffect(()=>{C()},[]);const C=async()=>{const E=await P.get(u0+p,{headers:{Authorization:`Bearer ${w}`}}),{anfitrion:A,ayudante:O,total_invitados:te,total_jov_adult:Se,total_ninos:N,total_participantes:ye,conv_rec:dr,ofrenda:pn,fecha:Ot}=E.data;t(A),r(O),i(te),l(Se),c(N),f(ye),x(dr),S(pn),v(Ot)},$=()=>{m("/generalPlanilla")};return a.jsx(IR,{children:a.jsx(zR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:E=>t(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:E=>r(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:E=>i(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:E=>l(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:E=>c(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:E=>f(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:E=>x(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:g,onChange:E=>S(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:E=>v(E.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,children:"Cancelar"})]})]})]})})})},IR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,zR=k.div`
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
`,i1="https://backend-riosdevida-production.up.railway.app",LR=`${i1}/api/asistencia`,AR=`${i1}/api/miembros/lider/`,OR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState("presente"),[o,i]=y.useState(""),[s,l]=y.useState([]),[u,c]=y.useState(localStorage.getItem("idUser")),d=ge(),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");y.useEffect(()=>{(async()=>{try{const b=await P.get(`${AR}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(b.data)}catch(b){console.error("Error al obtener miembros",b)}})()},[f]);const x=async S=>{S.preventDefault();try{await P.post(LR,{id_miembro:e,asistencia:n,fecha:o,id_lider:u},{headers:{Authorization:`Bearer ${f}`}}),d("/asistencia")}catch(b){console.error("Error al crear la planilla",b)}},g=()=>{d("/asistencia")};return a.jsx(DR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asistencia"}),a.jsxs("form",{onSubmit:x,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Miembro"}),a.jsxs("select",{value:e,onChange:S=>t(S.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Miembro"}),s.map(S=>a.jsxs("option",{value:S.id_miembro,children:[S.nombre," ",S.apellido]},S.id_miembro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:S=>r(S.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:S=>i(S.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:g,children:"Cancelar"})]})]})]})})},DR=k.div`
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
`,MR="https://backend-riosdevida-production.up.railway.app",c0=`${MR}/api/asistencia/`,FR=()=>{const[e,t]=y.useState({nombre:"",apellido:""}),[n,r]=y.useState(""),[o,i]=y.useState(""),s=ge(),{id:l}=cr(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await P.put(c0+l,{miembro:e,asistencia:n,fecha:o},{headers:{Authorization:`Bearer ${u}`}}),s("/asistencia")};y.useEffect(()=>{d()},[]);const d=async()=>{const h=await P.get(c0+l,{headers:{Authorization:`Bearer ${u}`}});t({nombre:h.data.miembro.nombre,apellido:h.data.miembro.apellido}),r(h.data.asistencia),i(h.data.fecha)},f=()=>{s("/asistencia")};return a.jsx(BR,{children:a.jsx(UR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla de Asistencia"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e.nombre,onChange:h=>t({...e,nombre:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:e.apellido,onChange:h=>t({...e,apellido:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:h=>i(h.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},BR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,UR=k.div`
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

`,VR="https://backend-riosdevida-production.up.railway.app",d0=`${VR}/api/usuarios/`;function HR(){const[e,t]=y.useState([]),n=y.useRef(null);y.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(d0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${d0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(WR,{children:[a.jsx(qR,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(GR,{children:[a.jsxs(M,{to:"/crearUsuario",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Usuario"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Usuarios"]})]}),a.jsxs(JR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Correo"}),a.jsx("th",{children:"Rol"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre}),a.jsx("td",{children:l.apellido}),a.jsx("td",{children:l.correo}),a.jsx("td",{children:l.Rol?l.Rol.nombre_rol:"Sin rol"}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarUsuario/${l.id_usuario}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>i(l.id_usuario),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},l.id_usuario))})]})]})}const WR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,qR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,GR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,JR=k(At)`
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
`,s1="https://backend-riosdevida-production.up.railway.app",XR=`${s1}/api/usuarios/`,KR=`${s1}/api/roles`,QR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState([]),h=ge(),x=localStorage.getItem("token"),g=async v=>{v.preventDefault();try{await P.post(XR,{nombre:e,apellido:n,correo:o,contraseña:s,id_rol:u},{headers:{Authorization:`Bearer ${x}`}}),h("/registroUsuarios")}catch(m){console.error("Error al crear el miembro:",m)}},S=async()=>{try{const v=await P.get(KR,{headers:{Authorization:`Bearer ${x}`}});f(v.data)}catch(v){console.error("Error al obtener los líderes:",v)}};y.useEffect(()=>{S()},[]);const b=()=>{h("/registroUsuarios")};return a.jsx(YR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:g,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:v=>t(v.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:v=>r(v.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:v=>i(v.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:v=>l(v.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:v=>c(v.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar "}),d.map(v=>a.jsxs("option",{value:v.id_rol,children:[v.nombre_rol,"  (ID: ",v.id_rol,")"]},v.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:b,children:"Cancelar"})]})]})]})})},YR=k.div`
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
`,ZR="https://backend-riosdevida-production.up.railway.app",f0=`${ZR}/api/usuarios/`,e4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState([]),h=ge(),{id:x}=cr(),g=localStorage.getItem("token"),S=async p=>{p.preventDefault(),await P.put(f0+x,{nombre:e,apellido:n,id_rol:u,correo:o,contraseña:s},{headers:{Authorization:`Bearer ${g}`}}),h("/registroUsuarios")},b=async()=>{try{const p=await P.get("http://localhost:4000/api/roles",{headers:{Authorization:`Bearer ${g}`}});f(p.data)}catch(p){console.error("Error al obtener los roles:",p)}};y.useEffect(()=>{v(),b()},[]);const v=async()=>{const p=await P.get(f0+x,{headers:{Authorization:`Bearer ${g}`}});t(p.data.nombre),r(p.data.apellido),i(p.data.correo),l(p.data.contraseña),c(p.data.id_rol)},m=()=>{h("/registroUsuarios")};return a.jsx(t4,{children:a.jsx(n4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Usuario"}),a.jsxs("form",{onSubmit:S,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:p=>t(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:p=>r(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:p=>i(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:p=>l(p.target.value),type:"password",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:p=>c(p.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar"}),d.map(p=>a.jsxs("option",{value:p.id_rol,children:[p.nombre_rol," (ID: ",p.id_rol,")"]},p.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Cancelar"})]})]})]})})})},t4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,n4=k.div`
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
`,r4="https://backend-riosdevida-production.up.railway.app",p0=`${r4}/api/supervisorLider/`;function o4(){const[e,t]=y.useState([]),n=y.useRef(null);y.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(p0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${p0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Planilla de Supervisores",sheet:"Usuarios"});return a.jsxs(i4,{children:[a.jsx(s4,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(a4,{children:[a.jsxs(M,{to:"/crearAsignarSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Asignar Supervisor"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Planilla de Supervisores"]})]}),a.jsxs(l4,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre de Supervisor"}),a.jsx("th",{children:"Nombre de Lider"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:`${l.supervisor.nombre} ${l.supervisor.apellido}`}),a.jsx("td",{children:`${l.lider.nombre} ${l.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarAsignacionSupervisor/${l.id_registro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>i(l.id_registro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},l.id_registro))})]})]})}const i4=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,s4=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,a4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,l4=k(At)`
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
`,ep="https://backend-riosdevida-production.up.railway.app",u4=`${ep}/api/supervisorLider/`,c4=`${ep}/api/usuarios/historiallider/`,d4=`${ep}/api/usuarios/historialSupervisor/`,f4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState([]),[s,l]=y.useState([]),u=ge(),c=localStorage.getItem("token");y.useEffect(()=>{const h=async()=>{try{const g=await P.get(c4,{headers:{Authorization:`Bearer ${c}`}});i(g.data)}catch(g){console.error("Error al obtener Lider",g)}},x=async()=>{try{const g=await P.get(d4,{headers:{Authorization:`Bearer ${c}`}});l(g.data)}catch(g){console.error("Error al obtener Supervisor",g)}};h(),x()},[c]);const d=async h=>{h.preventDefault();try{await P.post(u4,{id_lider:e,id_supervisor:n},{headers:{Authorization:`Bearer ${c}`}}),u("/asignarSupervisor")}catch(x){console.error("Error al crear la asignación",x)}},f=()=>{u("/asignarSupervisor")};return a.jsx(p4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asignación de Supervisor"}),a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Lider"}),a.jsxs("select",{value:e,onChange:h=>t(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Lider"}),o.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})},p4=k.div`
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
`,tp="https://backend-riosdevida-production.up.railway.app",h0=`${tp}/api/supervisorLider/`,h4=`${tp}/api/usuarios/historiallider/`,m4=`${tp}/api/usuarios/historialSupervisor/`,g4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState([]),[s,l]=y.useState([]),u=ge(),{id:c}=cr(),d=localStorage.getItem("token"),f=async x=>{x.preventDefault();try{await P.put(h0+c,{id_supervisor:e,id_lider:n},{headers:{Authorization:`Bearer ${d}`}}),u("/asignarSupervisor")}catch(g){console.error("Error al actualizar la asignación",g)}};y.useEffect(()=>{const x=async()=>{try{const b=await P.get(h4,{headers:{Authorization:`Bearer ${d}`}});i(b.data)}catch(b){console.error("Error al obtener Liders",b)}},g=async()=>{try{const b=await P.get(m4,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener Supervisores",b)}};(async()=>{try{const b=await P.get(h0+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.id_supervisor),r(b.data.id_lider)}catch(b){console.error("Error al obtener los datos del usuario",b)}})(),x(),g()},[d,c]);const h=()=>{u("/asignarSupervisor")};return a.jsx(x4,{children:a.jsx(v4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Asignación de Supervisor"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:n,onChange:x=>r(x.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),o.map(x=>a.jsxs("option",{value:x.id_usuario,children:[x.nombre," ",x.apellido," (ID: ",x.id_usuario,")"]},x.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:x=>t(x.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(x=>a.jsxs("option",{value:x.id_usuario,children:[x.nombre," ",x.apellido," (ID: ",x.id_usuario,")"]},x.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"Cancelar"})]})]})]})})})},x4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,v4=k.div`
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
`,y4="https://backend-riosdevida-production.up.railway.app",m0=`${y4}/api/roles`;function w4(){const[e,t]=y.useState([]),n=y.useRef(null);y.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(m0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${m0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(b4,{children:[a.jsx(S4,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(j4,{children:[a.jsxs(M,{to:"/crearUnRol",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Un Rol"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Roles"]})]}),a.jsxs(k4,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre Del Rol"}),a.jsx("th",{children:"Descripcion"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre_rol}),a.jsx("td",{children:l.descripcion}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarRol/${l.id_rol}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>i(l.id_rol),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},l.id_rol))})]})]})}const b4=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,S4=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,j4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,k4=k(At)`
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
`,C4="https://backend-riosdevida-production.up.railway.app",E4=`${C4}/api/roles`,$4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),o=ge(),i=localStorage.getItem("token"),s=async u=>{u.preventDefault();try{await P.post(E4,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${i}`}}),o("/registroDeRoles")}catch(c){console.error("Error al crear el miembro:",c)}},l=()=>{o("/registroDeRoles")};return a.jsx(_4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:s,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre del Rol"}),a.jsx("input",{value:e,onChange:u=>t(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:u=>r(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:l,children:"Cancelar"})]})]})]})})},_4=k.div`
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
`,R4="https://backend-riosdevida-production.up.railway.app",g0=`${R4}/api/roles/`,P4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),o=ge(),{id:i}=cr(),s=localStorage.getItem("token"),l=async d=>{d.preventDefault(),await P.put(g0+i,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${s}`}}),o("/registroDeRoles")};y.useEffect(()=>{u()},[]);const u=async()=>{const d=await P.get(g0+i,{headers:{Authorization:`Bearer ${s}`}});t(d.data.nombre_rol),r(d.data.descripcion)},c=()=>{o("/registroDeRoles")};return a.jsx(T4,{children:a.jsx(N4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre Del Rol"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})})},T4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,N4=k.div`
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
`,Hl="https://backend-riosdevida-production.up.railway.app",I4=`${Hl}/api/supervisorLider/supervisor/`,z4=`${Hl}/api/supervisorLider/supervisorLiderMiembro/`,L4=`${Hl}/api/miembros/lider/`,A4=`${Hl}/api/miembros/`;function O4(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),s=y.useRef(null),l=localStorage.getItem("token"),u=localStorage.getItem("idUser");y.useEffect(()=>{c(),d()},[]);const c=async()=>{try{const g=await P.get(`${I4}${u}`,{headers:{Authorization:`Bearer ${l}`}});r(g.data)}catch(g){console.error("Error al obtener los líderes",g)}},d=async(g="")=>{try{const S=g?`${L4}${g}`:`${z4}${u}`,b=await P.get(S,{headers:{Authorization:`Bearer ${l}`}});t(b.data)}catch(S){console.error("Error al obtener los miembros",S)}},f=g=>{const S=g.target.value;i(S),d(S)},h=async g=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${A4}${g}`,{headers:{Authorization:`Bearer ${l}`}}),d(o)}catch(S){console.error("Error al eliminar un miembro:",S)}},{onDownload:x}=jt.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(D4,{children:[a.jsx(M4,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(F4,{children:[a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:o,onChange:f,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(g=>a.jsxs("option",{value:g.id_lider,children:[g.lider.nombre," ",g.lider.apellido]},g.id_lider))]})]}),a.jsxs(M,{to:"/crearMiembroSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:x,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Roles"]})]}),a.jsxs(B4,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:e.map((g,S)=>a.jsxs("tr",{children:[a.jsx("td",{children:S+1}),a.jsx("td",{children:g.nombre}),a.jsx("td",{children:g.apellido}),a.jsx("td",{children:g.Líder?`${g.Líder.nombre} ${g.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarMiembroSupervisor/${g.id_miembro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>h(g.id_miembro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},g.id_miembro))})]})]})}const D4=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,M4=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,F4=k.div`
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
`,B4=k(At)`
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
`,a1="https://backend-riosdevida-production.up.railway.app",U4=`${a1}/api/miembros`,V4=`${a1}/api/supervisorLider/supervisor/`,H4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState([]),u=ge(),c=localStorage.getItem("token"),d=localStorage.getItem("idUser"),f=async g=>{g.preventDefault();try{await P.post(U4,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${c}`}}),u("/registroLideryMiembro")}catch(S){console.error("Error al crear el miembro:",S)}},h=async()=>{try{const g=await P.get(`${V4}${d}`,{headers:{Authorization:`Bearer ${c}`}});l(g.data)}catch(g){console.error("Error al obtener los líderes",g)}};y.useEffect(()=>{h()},[]);const x=()=>{u("/registroLideryMiembro")};return a.jsx(W4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:g=>t(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:g=>r(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:g=>i(g.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(g=>a.jsxs("option",{value:g.id_lider,children:[g.lider.nombre," ",g.lider.apellido]},g.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:x,children:"Cancelar"})]})]})]})})},W4=k.div`
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
`,l1="https://backend-riosdevida-production.up.railway.app",x0=`${l1}/api/miembros/`,q4=`${l1}/api/supervisorLider/supervisor/`,G4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState([]),u=ge(),{id:c}=cr(),d=localStorage.getItem("token"),f=localStorage.getItem("idUser"),h=async b=>{b.preventDefault(),await P.put(x0+c,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${d}`}}),u("/registroLideryMiembro")};y.useEffect(()=>{g(),x()},[]);const x=async()=>{try{const b=await P.get(`${q4}${f}`,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener los líderes",b)}},g=async()=>{try{const b=await P.get(x0+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.nombre),r(b.data.apellido),i(b.data.id_líder)}catch(b){console.error("Error al obtener el miembro",b)}},S=()=>{u("/registroLideryMiembro")};return a.jsx(J4,{children:a.jsx(X4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Miembro"}),a.jsxs("form",{onSubmit:h,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:b=>t(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:b=>r(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:b=>i(b.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.lider.nombre," ",b.lider.apellido]},b.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,children:"Cancelar"})]})]})]})})})},J4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,X4=k.div`
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
`,np="https://backend-riosdevida-production.up.railway.app",K4=`${np}/api/asistencia`,Q4=`${np}/api/asistencia/asistenciaSupervisor/`,Y4=`${np}/api/supervisorLider/supervisor/`;function Z4(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState([]),[u,c]=y.useState(""),d=y.useRef(null),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");y.useEffect(()=>{x(),g()},[]);const x=async()=>{try{const w=await P.get(`${Q4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(w.data),r(w.data)}catch(w){console.error("Error al obtener las asistencias:",w)}},g=async()=>{try{const w=await P.get(`${Y4}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(w.data)}catch(w){console.error("Error al obtener los líderes:",w)}},S=(w,j)=>{let C=e;w&&(C=C.filter($=>$.fecha===w)),j&&(C=C.filter($=>$.id_lider===parseInt(j))),r(C)},b=w=>{const j=w.target.value;i(j),S(j,u)},v=w=>{const j=w.target.value;c(j),S(o,j)},m=async w=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await P.delete(`${K4}/${w}`,{headers:{Authorization:`Bearer ${f}`}});const j=e.filter($=>$.id_miembro_planilla!==w);t(j);const C=j.filter($=>{const E=!o||$.fecha===o,A=!u||$.id_lider===parseInt(u);return E&&A});r(C)}catch(j){console.error("Error al eliminar la asistencia:",j)}},{onDownload:p}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(eP,{children:[a.jsx(tP,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsx(nP,{children:a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})}),a.jsxs(rP,{children:[a.jsxs(v0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:b})]}),a.jsxs(v0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:v,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(w=>a.jsxs("option",{value:w.id_lider,children:[w.lider.nombre," ",w.lider.apellido]},w.id_lider))]})]})]}),a.jsxs(oP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((w,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:w.miembro?`${w.miembro.nombre} ${w.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:w.asistencia}),a.jsx("td",{children:w.lider?`${w.lider.nombre} ${w.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:w.fecha}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarAsistencia/${w.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>m(w.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},w.id_miembro_planilla))})]})]})}const eP=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,tP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,nP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,rP=k.div`
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
`,v0=k.div`
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
`,oP=k(At)`
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
`,rp="https://backend-riosdevida-production.up.railway.app",iP=`${rp}/api/planilla`,sP=`${rp}/api/planilla/planillasLiderSupervisor/`,aP=`${rp}/api/supervisorLider/supervisor/`;function lP(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState([]),d=y.useRef(null);y.useEffect(()=>{g(),x()},[]);const f=localStorage.getItem("token"),h=localStorage.getItem("idUser"),x=async()=>{try{const w=await P.get(`${aP}${h}`,{headers:{Authorization:`Bearer ${f}`}});c(w.data)}catch(w){console.error("Error al obtener los líderes:",w)}},g=async()=>{try{const w=await P.get(`${sP}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(w.data),r(w.data)}catch(w){console.error("Error al obtener las planillas:",w)}},S=w=>{const j=w.target.value;i(j),v(j,s)},b=w=>{const j=w.target.value;l(j),v(o,j)},v=(w,j)=>{let C=e;w&&(C=C.filter($=>$.fecha===w)),j&&(C=C.filter($=>$.id_lider.toString()===j)),r(C)},m=async w=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await P.delete(`${iP}/${w}`,{headers:{Authorization:`Bearer ${f}`}}),g()}catch(j){console.error("Error al eliminar la planilla:",j)}},{onDownload:p}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(uP,{children:[a.jsx(cP,{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})}),a.jsxs(dP,{children:[a.jsxs(M,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Planillas"]})]}),a.jsxs(pP,{children:[a.jsxs(y0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(y0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(w=>a.jsx("option",{value:w.id_lider,children:`${w.lider.nombre} ${w.lider.apellido}`},w.id_lider))]})]})]}),a.jsxs(fP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((w,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:w.id_planilla}),a.jsx("td",{children:`${w.Lider.nombre} ${w.Lider.apellido}`}),a.jsx("td",{children:`${w.Supervisor.nombre} ${w.Supervisor.apellido}`}),a.jsx("td",{children:w.anfitrion}),a.jsx("td",{children:w.ayudante}),a.jsx("td",{children:w.total_invitados}),a.jsx("td",{children:w.total_jov_adult}),a.jsx("td",{children:w.total_ninos}),a.jsx("td",{children:w.total_participantes}),a.jsx("td",{children:w.conv_rec}),a.jsx("td",{children:w.ofrenda}),a.jsx("td",{children:w.fecha}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarPlanillaGeneralSupervisor/${w.id_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>m(w.id_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},w.id_planilla))})]})]})}const uP=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,cP=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,dP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,fP=k(At)`
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
`,pP=k.div`
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
`,y0=k.div`
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
`,u1="https://backend-riosdevida-production.up.railway.app",hP=`${u1}/api/planilla`,mP=`${u1}/api/supervisorLider/supervisor/`,gP=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,x]=y.useState(""),[g,S]=y.useState(""),[b,v]=y.useState(""),[m,p]=y.useState(""),[w,j]=y.useState([]),[C,$]=y.useState(localStorage.getItem("idUser")),E=ge(),A=localStorage.getItem("token"),O=localStorage.getItem("idUser");y.useEffect(()=>{(async()=>{try{const ye=await P.get(`${mP}${O}`,{headers:{Authorization:`Bearer ${A}`}});j(ye.data)}catch(ye){console.error("Error al obtener líderes o supervisores",ye)}})()},[A]);const te=async N=>{N.preventDefault();try{await P.post(hP,{id_lider:e,id_supervisor:C,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:g,ofrenda:b,fecha:m},{headers:{Authorization:`Bearer ${A}`}}),E("/planillaGeneralSupervisor")}catch(ye){console.error("Error al crear la planilla",ye)}},Se=()=>{E("/planillaGeneralSupervisor")};return a.jsx(xP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:te,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:e,onChange:N=>t(N.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),w.map(N=>a.jsxs("option",{value:N.id_lider,children:[N.lider.nombre," ",N.lider.apellido]},N.id_registro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:N=>r(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:N=>i(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:N=>l(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:N=>c(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:N=>f(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:N=>x(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:g,onChange:N=>S(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:N=>v(N.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:m,onChange:N=>p(N.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Se,children:"Cancelar"})]})]})]})})},xP=k.div`
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
`,vP="https://backend-riosdevida-production.up.railway.app",w0=`${vP}/api/planilla/`,yP=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,x]=y.useState(""),[g,S]=y.useState(""),[b,v]=y.useState(""),m=ge(),{id:p}=cr(),w=localStorage.getItem("token"),j=async E=>{E.preventDefault(),await P.put(w0+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:g,fecha:b},{headers:{Authorization:`Bearer ${w}`}}),m("/planillaGeneralSupervisor")};y.useEffect(()=>{C()},[]);const C=async()=>{const E=await P.get(w0+p,{headers:{Authorization:`Bearer ${w}`}}),{anfitrion:A,ayudante:O,total_invitados:te,total_jov_adult:Se,total_ninos:N,total_participantes:ye,conv_rec:dr,ofrenda:pn,fecha:Ot}=E.data;t(A),r(O),i(te),l(Se),c(N),f(ye),x(dr),S(pn),v(Ot)},$=()=>{m("/planillaGeneralSupervisor")};return a.jsx(wP,{children:a.jsx(bP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:E=>t(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:E=>r(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:E=>i(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:E=>l(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:E=>c(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:E=>f(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:E=>x(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:g,onChange:E=>S(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:E=>v(E.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,children:"Cancelar"})]})]})]})})})},wP=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,bP=k.div`
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
`,is="https://backend-riosdevida-production.up.railway.app",SP=`${is}/api/supervisorLider/supervisor/`,jP=`${is}/api/miembros/lider/`,kP=`${is}/api/miembros/`,CP=`${is}/api/usuarios/historiallider/`,EP=`${is}/api/usuarios/historialSupervisor/`;function $P(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState([]),[s,l]=y.useState(""),[u,c]=y.useState(""),d=y.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),y.useEffect(()=>{h(),g(),x()},[]);const h=async()=>{try{const p=await P.get(CP,{headers:{Authorization:`Bearer ${f}`}});r(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},x=async()=>{try{const p=await P.get(EP,{headers:{Authorization:`Bearer ${f}`}});i(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},g=async(p="",w="")=>{try{let j=p?`${jP}${p}`:`${SP}${w}`;const C=await P.get(j,{headers:{Authorization:`Bearer ${f}`}});t(C.data)}catch(j){console.error("Error al obtener los miembros:",j)}},S=p=>{const w=p.target.value;l(w),c(""),g(w,"")},b=p=>{const w=p.target.value;c(w),l(""),g("",w)},v=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${kP}${p}`,{headers:{Authorization:`Bearer ${f}`}}),g(s),console.log(g)}catch(w){console.error("Error al eliminar un miembro:",w)}},{onDownload:m}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(_P,{children:[a.jsx(RP,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsx(PP,{children:a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar"]})}),a.jsxs(NP,{children:[a.jsx(b0,{children:a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})}),a.jsx(b0,{children:a.jsxs("label",{children:["Filtrar por Supervisor:",a.jsxs("select",{value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),o.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})})]}),a.jsxs(TP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Accion"})]})}),a.jsx("tbody",{children:e.map((p,w)=>a.jsxs("tr",{children:[a.jsx("td",{children:w+1}),a.jsx("td",{children:p.nombre?p.nombre:`${p.lider.nombre}`}),a.jsx("td",{children:p.apellido?p.apellido:`${p.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarMiembroSupervisor/${p.id_miembro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>v(p.id_miembro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},p.id_usuario))})]})]})}const _P=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,RP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,PP=k.div`
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
`,TP=k(At)`
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
`,NP=k.div`
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
`,b0=k.div`
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
`,c1="https://backend-riosdevida-production.up.railway.app",S0=`${c1}/api/asistencia`,IP=`${c1}/api/usuarios/historiallider`;function zP(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState([]),[u,c]=y.useState(""),d=y.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),y.useEffect(()=>{h(),x()},[]);const h=async()=>{try{const p=await P.get(S0,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las asistencias:",p)}},x=async()=>{try{const p=await P.get(IP,{headers:{Authorization:`Bearer ${f}`}});l(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},g=(p,w)=>{let j=e;p&&(j=j.filter(C=>C.fecha===p)),w&&(j=j.filter(C=>String(C.id_lider)===w)),r(j)},S=p=>{const w=p.target.value;i(w),g(w,u)},b=p=>{const w=p.target.value;c(w),g(o,w)},v=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await P.delete(`${S0}/${p}`,{headers:{Authorization:`Bearer ${f}`}});const w=e.filter(C=>C.id_miembro_planilla!==p);t(w);const j=w.filter(C=>{const $=!o||C.fecha===o,E=!u||C.id_lider===parseInt(u);return $&&E});r(j)}catch(w){console.error("Error al eliminar la asistencia:",w)}},{onDownload:m}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(LP,{children:[a.jsx(AP,{children:a.jsx("div",{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsx(OP,{children:a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})}),a.jsxs(DP,{children:[a.jsxs(j0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(j0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(p=>a.jsxs("option",{value:String(p.id_usuario),children:[p.nombre," ",p.apellido]},p.id_usuario))]})]})]}),a.jsxs(MP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((p,w)=>a.jsxs("tr",{children:[a.jsx("td",{children:w+1}),a.jsx("td",{children:p.miembro?`${p.miembro.nombre} ${p.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:p.asistencia}),a.jsx("td",{children:p.lider?`${p.lider.nombre} ${p.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarAsistencia/${p.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>v(p.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},p.id_miembro_planilla))})]})]})}const LP=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,AP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,OP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,DP=k.div`
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
`,j0=k.div`
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
`,MP=k(At)`
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
`,d1="https://backend-riosdevida-production.up.railway.app",k0=`${d1}/api/planilla`,FP=`${d1}/api/usuarios/historiallider`;function BP(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState([]),d=y.useRef(null);y.useEffect(()=>{x(),h()},[]);const f=localStorage.getItem("token");localStorage.getItem("idUser");const h=async()=>{try{const p=await P.get(FP,{headers:{Authorization:`Bearer ${f}`}});c(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},x=async()=>{try{const p=await P.get(k0,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las planillas:",p)}},g=p=>{const w=p.target.value;i(w),b(w,s)},S=p=>{const w=p.target.value;l(w),b(o,w)},b=(p,w)=>{let j=e;p&&(j=j.filter(C=>C.fecha===p)),w&&(j=j.filter(C=>C.id_lider.toString()===w)),r(j)},v=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await P.delete(`${k0}/${p}`,{headers:{Authorization:`Bearer ${f}`}}),x()}catch(w){console.error("Error al eliminar la planilla:",w)}},{onDownload:m}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(UP,{children:[a.jsx(VP,{children:a.jsx(M,{to:"/menuInicio",children:a.jsx(St,{})})}),a.jsxs(HP,{children:[a.jsxs(M,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Planillas"]})]}),a.jsxs(qP,{children:[a.jsxs(C0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:g})]}),a.jsxs(C0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(p=>a.jsx("option",{value:p.id_usuario,children:`${p.nombre} ${p.apellido}`},p.id_usuario))]})]})]}),a.jsxs(WP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((p,w)=>a.jsxs("tr",{children:[a.jsx("td",{children:w+1}),a.jsx("td",{children:p.id_planilla}),a.jsx("td",{children:`${p.Lider.nombre} ${p.Lider.apellido}`}),a.jsx("td",{children:`${p.Supervisor.nombre} ${p.Supervisor.apellido}`}),a.jsx("td",{children:p.anfitrion}),a.jsx("td",{children:p.ayudante}),a.jsx("td",{children:p.total_invitados}),a.jsx("td",{children:p.total_jov_adult}),a.jsx("td",{children:p.total_ninos}),a.jsx("td",{children:p.total_participantes}),a.jsx("td",{children:p.conv_rec}),a.jsx("td",{children:p.ofrenda}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(M,{to:`/editarPlanillaGeneralSupervisor/${p.id_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>v(p.id_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},p.id_planilla))})]})]})}const UP=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,VP=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,HP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,WP=k(At)`
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
`,qP=k.div`
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
`,C0=k.div`
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
`,E0=["Dios Te Ama","Hey! Cuando no sepas a dónde ir, andá a Dios; Él te sigue esperando.","Tu tienes un gran valor para Dios","Yo siempre estoy contigo. att: Dios","Jesús te ama una banda","Sos muy Importante Para Mí, att: Dios","A pesar de todo te sigo Amando, att: Dios","No estoy enojado con vos, Te amo, att: Dios","Esfuerzate y se valiente, Yo estoy con vos ---> Siempre. ATT: Dios","Yo sé que este año fue dificil, pero todo estara bien, porque yo estoy con vos y conozco tu futuro. ---> att: Dios ❤️","Soy el unico que puede llenar el vacio de tu corazón---> att: Jesús ❤️","No temas yo soy el que te da nuevas Fuerzas 💪 ---> att: Dios","Mis caminos y mis pensamientos son mas altos que los de ustedes mas altos que los cielos sobre la tierra. ---> att: Dios","No te angusties, no temas, Yo estoy contigo. ---> att: Dios","Mis planes son mejores ---> att: Jesús","En mi Esta Tu Identidad ---> att: Jesús","Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora⏱️. ---> Eclesiastés 3:1","Tu vales mas que el oro y la plata ---> att: Dios","Ten en cuenta a Dios en todo lo que hagas y él te guiará por el buen camino. ---> Proverbios 3:6","Dichoso el que resiste la tentación porque, al salir aprobado, recibirá la corona de la vida que Dios ha prometido a quienes lo aman. ---> Santiago 1:12","Porque si ustedes viven conforme a la naturaleza pecaminosa, morirán; pero si por el Espíritu dan muerte a los malos hábitos del cuerpo, vivirán. ---> Romanos 8:13"],GP=()=>{const[e,t]=y.useState("");return y.useEffect(()=>{const n=Math.floor(Math.random()*E0.length);t(E0[n])},[]),a.jsxs(JP,{children:[a.jsx(Qi,{}),a.jsx(XP,{children:a.jsx("div",{className:"icon",children:a.jsx(M,{to:"/",children:a.jsx(P2,{})})})}),a.jsx(KP,{children:a.jsx(QP,{children:e})})]})},JP=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //background-color: #000; /* Fondo negro */
`,XP=k.div`
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
   
`,KP=k.div`
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
`,QP=k.p`
  font-size: clamp(1.5rem, 4vw, 3rem); /* Tamaño de fuente adaptable */
  color: #ff69b4; /* Color inicial */
  background: linear-gradient(90deg, #ff69b4, #00d4ff, #fff200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
`,YP=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,ZP=k.div`
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
`,eT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${YP} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,tT=k.div`
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
`,nT=()=>{const e=[J.auditorioUno,J.auditorioDos,J.auditorioTres,J.auditorioCuatro,J.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("auditorio-rios-de-vida");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(ZP,{id:"auditorio-rios-de-vida",children:[a.jsxs(tT,{isVisible:r,children:[a.jsx("h1",{children:"Auditorio Ríos De Vida"}),a.jsx("p",{children:"Nos encontramos todos los domingos en el Auditorio Ríos De Vida, ubicado entre Calle Crisóstomo Álvarez y Calle Alberdi, a la altura del 1000 cruzando la calle República del Líbano, en el horario de 20 hs. Contamos con un espacio amplio y cómodo para que puedas disfrutar de la presencia de Dios."})]}),a.jsx(eT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},rT="https://Bravo938.github.io/RiosDeVida.pages/assets/casaRios-1ZPgrmsG.mp4",oT=fn`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #2500f9, 0 0 20px #0036f9, 0 0 40px #0071d4;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #0073ff, 0 0 30px #4400ff, 0 0 50px #0058d4;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #00b2f9, 0 0 20px #0081f9, 0 0 40px #0091d4;
  }
`,iT=k.video`
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
`,sT=k.div`
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
`,aT=k.div`
    color: white;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;k.h1`
    font-size: 100px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    animation: ${oT} 1.5s infinite alternate;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;const lT=()=>a.jsx(sT,{children:a.jsx(aT,{children:a.jsx(iT,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:a.jsx("source",{src:rT,type:"video/mp4"})})})}),uT="https://Bravo938.github.io/RiosDeVida.pages/assets/caminata-D80zwDS-.mp4",cT=()=>{const[e,t]=y.useState(!1),n=()=>{t(!e)};return a.jsx(dT,{id:"potenciados",children:a.jsxs(fT,{children:[a.jsxs(pT,{children:[a.jsx(hT,{children:"Jóvenes Potenciados"}),a.jsxs(mT,{children:[a.jsxs(gT,{expanded:e,children:["¡Bienvenido a Jóvenes Potenciados! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(xT,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(vT,{children:a.jsx(yT,{autoPlay:!0,loop:!0,muted:!0,src:uT})})]})})},dT=k.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #460072a2 40%, #38136980 40%);
`,fT=k.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,pT=k.div`
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
`,hT=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,mT=k.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,gT=k.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,xT=k.button`
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
`,vT=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,yT=k.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,wT=fn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,bT=k.div`
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
`,ST=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  animation: ${wT} 1s ease-in-out;
  margin: 10px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,jT=k.div`
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
`,kT=()=>{const e=[J.niñoUno,J.niñoDos,J.niñoTres],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("escuela-dominical");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(bT,{id:"escuela-dominical",children:[a.jsx(ST,{style:{backgroundImage:`url(${e[t]})`},isVisible:r}),a.jsxs(jT,{isVisible:r,children:[a.jsx("h1",{children:"Escuela Dominical"}),a.jsx("p",{children:"Contamos con una escuela dominical para todas las edades, donde se imparte la palabra de Dios de una manera didáctica y sencilla para los niños de diferentes edades. Instruir a los niños desde pequeños en la palabra de Dios es una de las prioridades de nuestra iglesia."})]})]})},CT=fn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ET=k.div`
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
`,$T=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${CT} 1s ease-in-out;
  margin: 10px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,_T=k.div`
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
`,RT=()=>{const e=[J.niñoUno,J.niñoDos,J.niñoTres],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("casa-de-vida");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]),a.jsxs(ET,{id:"casa-de-vida",children:[a.jsxs(_T,{isVisible:r,children:[a.jsx("h1",{children:"Casa de Vida"}),a.jsx("p",{children:"Contamos con una escuela dominical para todas las edades, donde se imparte la palabra de Dios de una manera didáctica y sencilla para los niños de diferentes edades. Instruir a los niños desde pequeños en la palabra de Dios es una de las prioridades de nuestra iglesia."})]}),a.jsx($T,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},PT=k.div`
    
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
`,TT=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: 'Montserrat', sans-serif;
  
`,NT=k.div`
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
`,IT=()=>a.jsx(a.Fragment,{children:a.jsx(PT,{children:a.jsxs(NT,{children:[a.jsx(TT,{children:a.jsx("h1",{children:"Centro Cristiano Rios De Vida"})}),a.jsxs("p",{children:["Somos una iglesia evangélica cristiana, que busca llevar el mensaje de salvación a todas las naciones, y ayudar a la comunidad a encontrar su propósito en la vida, Creemos que Dios tiene un plan con cada Persona en esta vida y que el propósito de Dios es que todos tengan vida y vida en abundancia.",a.jsx("br",{})]})]})})});function zT(){return a.jsxs(a.Fragment,{children:[a.jsx(Qi,{}),a.jsx($l,{}),a.jsx(lT,{}),a.jsxs(LT,{children:[a.jsx(IT,{}),a.jsx(nT,{}),a.jsx(kT,{}),a.jsx(RT,{})]}),a.jsx(cT,{}),a.jsx(El,{})]})}const LT=k.div`


*{
    font-family: "Bebas Neue", sans-serif;
  
  /*font-family: "Poppins", sans-serif;*/
  
}
    
`,AT=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,OT=k.div`
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
`,DT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  animation: ${AT} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,MT=k.div`
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
`,FT=()=>{const e=[J.auditorioUno,J.auditorioDos,J.auditorioTres,J.auditorioCuatro,J.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-cuatro");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(OT,{id:"evento-section-cuatro",children:[a.jsx(DT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r}),a.jsxs(MT,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Mujeres"}),a.jsx("p",{children:"La convención de mujeres es un evento anual que reúne a mujeres de diversas localidades para compartir, fortalecer y apoyar a las mujeres en el crecimiento de su fe y en su vida diaria. Este evento es una oportunidad para aprender, crecer y conectarse con otras mujeres que comparten la misma fe y valores."})]})]})},BT=k.div`
    
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
`,UT=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: 'Montserrat', sans-serif;
  
`,VT=k.div`
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
`,HT=()=>a.jsx(a.Fragment,{children:a.jsx(BT,{children:a.jsxs(VT,{children:[a.jsx(UT,{children:a.jsx("h1",{children:"Nuestros Eventos"})}),a.jsxs("p",{children:["Tenemos una gran carga moral con el tratar de hacer de este mundo un lugar mejor, y es por eso que nos esforzamos en hacer eventos que ayuden a la comunidad cristiana y en ocaciones eventos para llegar a las personas que no conocen de Dios. ",a.jsx("br",{}),a.jsx("br",{})]})]})})}),WT=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,qT=k.div`
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
`,GT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${WT} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,JT=k.div`
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
`,XT=()=>{const e=[J.auditorioUno,J.auditorioDos,J.auditorioTres,J.auditorioCuatro,J.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-tres");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(qT,{id:"evento-section-tres",children:[a.jsxs(JT,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Jóvenes"}),a.jsx("p",{children:"La Convención de Jóvenes es un evento anual que reúne a jóvenes de diferentes lugares para compartir experiencias, aprender y crecer juntos en la fe. Durante este evento, se llevan a cabo actividades como talleres, charlas, dinámicas grupales y momentos de adoración. Es una oportunidad única para fortalecer la comunidad juvenil y fomentar el compañerismo entre los asistentes."})]}),a.jsx(GT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},KT="https://Bravo938.github.io/RiosDeVida.pages/assets/LogoRiosDeVida-CyC5MU--.png",QT="https://Bravo938.github.io/RiosDeVida.pages/assets/oscuroManos-CJPiaVel.mp4",YT=k.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`,ZT=k.section`
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
`,eN=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: opacity 0.5s ease;
`,tN=k.div`
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.336);
  border-radius: 10px;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  transition: opacity 1s ease, transform 1s ease;
  z-index: 1;
`,nN=k.h2`
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
`,rN=k.p`
  font-size: 18px;
  color: #000000;
`,oN=k.div`
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
`,iN=k.img`
  width: 100%;
  border-radius: 10px;
`,sN=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1);y.useEffect(()=>{const i=()=>{const s=document.getElementById("eventos-section");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;t(c)}};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]);const o=()=>r(!0);return a.jsxs(YT,{children:[a.jsx(eN,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:o,style:{opacity:n?1:0},children:a.jsx("source",{src:QT,type:"video/mp4"})}),a.jsxs(ZT,{id:"eventos-section",children:[a.jsxs(tN,{isVisible:e,children:[a.jsx(nN,{children:"Somos una iglesia de eventos"}),a.jsx(rN,{children:"Creemos en la importancia de compartir momentos significativos en comunidad. Nuestros eventos están diseñados para unir a las personas, fortalecer la fe y crear recuerdos inolvidables. ¡Descubre nuestras próximas actividades!"})]}),a.jsx(oN,{isVisible:e,children:a.jsx(iN,{src:KT,alt:"Eventos en nuestra iglesia"})})]})]})},aN=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,lN=k.div`
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
`,uN=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${aN} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,cN=k.div`
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
`,dN=()=>{const e=[J.auditorioUno,J.auditorioDos,J.auditorioTres,J.auditorioCuatro,J.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-cinco");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(lN,{id:"evento-section-cinco",children:[a.jsxs(cN,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Niños"}),a.jsx("p",{children:"La convención de niños es un evento anual que reúne a niños de diversas localidades para tener un momento de aprendizaje y fortalecer su confianza y fe desde una edad temprana, todo esto de una manera divertida y amena. Este evento es una oportunidad para que los niños se conecten con otros de su edad, aprendan sobre la importancia de la fe y la comunidad, y desarrollen habilidades sociales y emocionales."})]}),a.jsx(uN,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})};function fN(){return a.jsxs(a.Fragment,{children:[a.jsx(Qi,{}),a.jsx($l,{}),a.jsxs(pN,{children:[a.jsx(sN,{}),a.jsx(HT,{}),a.jsx(XT,{}),a.jsx(FT,{}),a.jsx(dN,{})]}),a.jsx(El,{})]})}const pN=k.div`


*{
    /*font-family: "Bebas Neue", sans-serif;*/
  
    font-family: "Bebas Neue", sans-serif;
  
}
    
`;function hN(){return a.jsxs(a.Fragment,{children:[a.jsx(Qi,{}),a.jsx($l,{}),a.jsx(Rv,{}),a.jsx(El,{})]})}function mN(){const{auth:e,setAuth:t}=y.useContext(ns);return y.useEffect(()=>{const n=localStorage.getItem("token");n&&t({token:n})},[t]),a.jsx(a.Fragment,{children:a.jsxs(TS,{children:[a.jsx(H,{path:"/login",element:a.jsx(g$,{})}),a.jsx(H,{path:"/masSobreNosotros",element:a.jsx(zT,{})}),a.jsx(H,{path:"/",element:a.jsx(_2,{})}),a.jsx(H,{path:"/notas",element:a.jsx(GP,{})}),a.jsx(H,{path:"/eventos",element:a.jsx(fN,{})}),a.jsx(H,{path:"/pascuas",element:a.jsx(hN,{})}),e&&e.token?a.jsxs(H,{element:a.jsx(N2,{}),children:[a.jsx(H,{path:"/*",element:a.jsx(A2,{})}),a.jsx(H,{path:"/logout",element:a.jsx($$,{})}),a.jsx(H,{path:"/planillaLider",element:a.jsx(Y3,{})}),a.jsx(H,{path:"/planillaGeneralSupervisor",element:a.jsx(lP,{})}),a.jsx(H,{path:"/asistencia",element:a.jsx(pR,{})}),a.jsx(H,{path:"/asistenciaVistaSupervisor",element:a.jsx(Z4,{})}),a.jsx(H,{path:"/asistenciaVistaAdmin",element:a.jsx(zP,{})}),a.jsx(H,{path:"/registroUsuarios",element:a.jsx(HR,{})}),a.jsx(H,{path:"/registroDeRoles",element:a.jsx(w4,{})}),a.jsx(H,{path:"/registroLideryMiembro",element:a.jsx(O4,{})}),a.jsx(H,{path:"/miembrosLideresSupervisor",element:a.jsx($P,{})}),a.jsx(H,{path:"/generalPlanilla",element:a.jsx(bR,{})}),a.jsx(H,{path:"/planillaGeneralAdmin",element:a.jsx(BP,{})}),a.jsx(H,{path:"/asignarSupervisor",element:a.jsx(o4,{})}),a.jsx(H,{path:"/crearMiembro",element:a.jsx(iR,{})}),a.jsx(H,{path:"/crearPlanillaGeneral",element:a.jsx(RR,{})}),a.jsx(H,{path:"/crearPlanillaGeneralSupervisor",element:a.jsx(gP,{})}),a.jsx(H,{path:"/crearAsistencia",element:a.jsx(OR,{})}),a.jsx(H,{path:"/crearUsuario",element:a.jsx(QR,{})}),a.jsx(H,{path:"/crearAsignarSupervisor",element:a.jsx(f4,{})}),a.jsx(H,{path:"/crearUnRol",element:a.jsx($4,{})}),a.jsx(H,{path:"/crearMiembroSupervisor",element:a.jsx(H4,{})}),a.jsx(H,{path:"/editarMiembros/:id",element:a.jsx(lR,{})}),a.jsx(H,{path:"/editarPlanillaGeneral/:id",element:a.jsx(NR,{})}),a.jsx(H,{path:"/editarAsistencia/:id",element:a.jsx(FR,{})}),a.jsx(H,{path:"/editarUsuario/:id",element:a.jsx(e4,{})}),a.jsx(H,{path:"/editarAsignacionSupervisor/:id",element:a.jsx(g4,{})}),a.jsx(H,{path:"/editarRol/:id",element:a.jsx(P4,{})}),a.jsx(H,{path:"/editarMiembroSupervisor/:id",element:a.jsx(G4,{})}),a.jsx(H,{path:"/editarPlanillaGeneralSupervisor/:id",element:a.jsx(yP,{})})]}):a.jsx(H,{path:"/*",element:a.jsx(_S,{to:"/"})})]})})}Fx(document.getElementById("root")).render(a.jsx(y.StrictMode,{children:a.jsx(DS,{children:a.jsx(F2,{children:a.jsx(mN,{})})})}));
