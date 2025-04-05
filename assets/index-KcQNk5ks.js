function i1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var it=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function b0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S0={exports:{}},nl={},j0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),s1=Symbol.for("react.portal"),a1=Symbol.for("react.fragment"),l1=Symbol.for("react.strict_mode"),u1=Symbol.for("react.profiler"),c1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),p1=Symbol.for("react.suspense"),h1=Symbol.for("react.memo"),m1=Symbol.for("react.lazy"),Zf=Symbol.iterator;function g1(e){return e===null||typeof e!="object"?null:(e=Zf&&e[Zf]||e["@@iterator"],typeof e=="function"?e:null)}var k0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,E0={};function Co(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||k0}Co.prototype.isReactComponent={};Co.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Co.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $0(){}$0.prototype=Co.prototype;function fd(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||k0}var pd=fd.prototype=new $0;pd.constructor=fd;C0(pd,Co.prototype);pd.isPureReactComponent=!0;var ep=Array.isArray,_0=Object.prototype.hasOwnProperty,hd={current:null},R0={key:!0,ref:!0,__self:!0,__source:!0};function P0(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)_0.call(t,r)&&!R0.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Hi,type:e,key:i,ref:s,props:o,_owner:hd.current}}function v1(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function md(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function x1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tp=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x1(""+e.key):t.toString(36)}function Ns(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hi:case s1:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Hl(s,0):r,ep(o)?(n="",e!=null&&(n=e.replace(tp,"$&/")+"/"),Ns(o,t,n,"",function(c){return c})):o!=null&&(md(o)&&(o=v1(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(tp,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",ep(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Hl(i,l);s+=Ns(i,t,n,u,o)}else if(u=g1(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Hl(i,l++),s+=Ns(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ss(e,t,n){if(e==null)return e;var r=[],o=0;return Ns(e,r,"","",function(i){return t.call(n,i,o++)}),r}function y1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Is={transition:null},w1={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Is,ReactCurrentOwner:hd};function T0(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!md(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Co;X.Fragment=a1;X.Profiler=u1;X.PureComponent=fd;X.StrictMode=l1;X.Suspense=p1;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;X.act=T0;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=C0({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=hd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_0.call(t,u)&&!R0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Hi,type:e.type,key:o,ref:i,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:d1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c1,_context:e},e.Consumer=e};X.createElement=P0;X.createFactory=function(e){var t=P0.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:f1,render:e}};X.isValidElement=md;X.lazy=function(e){return{$$typeof:m1,_payload:{_status:-1,_result:e},_init:y1}};X.memo=function(e,t){return{$$typeof:h1,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};X.unstable_act=T0;X.useCallback=function(e,t){return We.current.useCallback(e,t)};X.useContext=function(e){return We.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return We.current.useDeferredValue(e)};X.useEffect=function(e,t){return We.current.useEffect(e,t)};X.useId=function(){return We.current.useId()};X.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return We.current.useMemo(e,t)};X.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};X.useRef=function(e){return We.current.useRef(e)};X.useState=function(e){return We.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return We.current.useTransition()};X.version="18.3.1";j0.exports=X;var y=j0.exports;const Pe=b0(y),b1=i1({__proto__:null,default:Pe},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=y,j1=Symbol.for("react.element"),k1=Symbol.for("react.fragment"),C1=Object.prototype.hasOwnProperty,E1=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$1={key:!0,ref:!0,__self:!0,__source:!0};function N0(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)C1.call(t,r)&&!$1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:j1,type:e,key:i,ref:s,props:o,_owner:E1.current}}nl.Fragment=k1;nl.jsx=N0;nl.jsxs=N0;S0.exports=nl;var a=S0.exports,I0={exports:{}},wt={},z0={exports:{}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,D){var M=I.length;I.push(D);e:for(;0<M;){var ne=M-1>>>1,re=I[ne];if(0<o(re,D))I[ne]=D,I[M]=re,M=ne;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],M=I.pop();if(M!==D){I[0]=M;e:for(var ne=0,re=I.length,fr=re>>>1;ne<fr;){var Dt=2*(ne+1)-1,Tn=I[Dt],st=Dt+1,hn=I[st];if(0>o(Tn,M))st<re&&0>o(hn,Tn)?(I[ne]=hn,I[st]=M,ne=st):(I[ne]=Tn,I[Dt]=M,ne=Dt);else if(st<re&&0>o(hn,M))I[ne]=hn,I[st]=M,ne=st;else break e}}return D}function o(I,D){var M=I.sortIndex-D.sortIndex;return M!==0?M:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,h=3,v=!1,g=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=I)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function w(I){if(S=!1,p(I),!g)if(n(u)!==null)g=!0,pn(j);else{var D=n(c);D!==null&&Ot(w,D.startTime-I)}}function j(I,D){g=!1,S&&(S=!1,x(E),E=-1),v=!0;var M=h;try{for(p(D),f=n(u);f!==null&&(!(f.expirationTime>D)||I&&!te());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var re=ne(f.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(u)&&r(u),p(D)}else r(u);f=n(u)}if(f!==null)var fr=!0;else{var Dt=n(c);Dt!==null&&Ot(w,Dt.startTime-D),fr=!1}return fr}finally{f=null,h=M,v=!1}}var C=!1,$=null,E=-1,A=5,O=-1;function te(){return!(e.unstable_now()-O<A)}function Se(){if($!==null){var I=e.unstable_now();O=I;var D=!0;try{D=$(!0,I)}finally{D?N():(C=!1,$=null)}}else C=!1}var N;if(typeof m=="function")N=function(){m(Se)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,dr=ye.port2;ye.port1.onmessage=Se,N=function(){dr.postMessage(null)}}else N=function(){b(Se,0)};function pn(I){$=I,C||(C=!0,N())}function Ot(I,D){E=b(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,pn(j))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return I()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var M=h;h=I;try{return D()}finally{h=M}},e.unstable_scheduleCallback=function(I,D,M){var ne=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ne+M:ne):M=ne,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=M+re,I={id:d++,callback:D,priorityLevel:I,startTime:M,expirationTime:re,sortIndex:-1},M>ne?(I.sortIndex=M,t(c,I),n(u)===null&&I===n(c)&&(S?(x(E),E=-1):S=!0,Ot(w,M-ne))):(I.sortIndex=re,t(u,I),g||v||(g=!0,pn(j))),I},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(I){var D=h;return function(){var M=h;h=D;try{return I.apply(this,arguments)}finally{h=M}}}})(L0);z0.exports=L0;var _1=z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=y,yt=_1;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,yi={};function Mr(e,t){fo(e,t),fo(e+"Capture",t)}function fo(e,t){for(yi[e]=t,e=0;e<t.length;e++)A0.add(t[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,P1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,np={},rp={};function T1(e){return Bu.call(rp,e)?!0:Bu.call(np,e)?!1:P1.test(e)?rp[e]=!0:(np[e]=!0,!1)}function N1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I1(e,t,n,r){if(t===null||typeof t>"u"||N1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gd,vd);Ne[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gd,vd);Ne[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gd,vd);Ne[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function xd(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I1(t,n,o,r)&&(n=null),r||o===null?T1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rn=R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),op=Symbol.iterator;function Oo(e){return e===null||typeof e!="object"?null:(e=op&&e[op]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Wl;function Go(e){if(Wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||""}return`
`+Wl+e}var ql=!1;function Gl(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Go(e):""}function z1(e){switch(e.tag){case 5:return Go(e.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Wu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case qr:return"Portal";case Uu:return"Profiler";case yd:return"StrictMode";case Vu:return"Suspense";case Hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case D0:return(e.displayName||"Context")+".Consumer";case O0:return(e._context.displayName||"Context")+".Provider";case wd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bd:return t=e.displayName||null,t!==null?t:Wu(e.type)||"Memo";case Mn:t=e._payload,e=e._init;try{return Wu(e(t))}catch{}}return null}function L1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(t);case 8:return t===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function or(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function F0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A1(e){var t=F0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=A1(e))}function B0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=F0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function la(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qu(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ip(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=or(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function U0(e,t){t=t.checked,t!=null&&xd(e,"checked",t,!1)}function Gu(e,t){U0(e,t);var n=or(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ju(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ju(e,t.type,or(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ju(e,t,n){(t!=="number"||la(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jo=Array.isArray;function io(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+or(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ap(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Jo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:or(n)}}function V0(e,t){var n=or(t.value),r=or(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function H0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?H0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,W0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){O1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function q0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function G0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=q0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var D1=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(e,t){if(t){if(D1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Yu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ec=null,so=null,ao=null;function up(e){if(e=Gi(e)){if(typeof ec!="function")throw Error(R(280));var t=e.stateNode;t&&(t=al(t),ec(e.stateNode,e.type,t))}}function J0(e){so?ao?ao.push(e):ao=[e]:so=e}function X0(){if(so){var e=so,t=ao;if(ao=so=null,up(e),t)for(e=0;e<t.length;e++)up(t[e])}}function K0(e,t){return e(t)}function Q0(){}var Jl=!1;function Y0(e,t,n){if(Jl)return e(t,n);Jl=!0;try{return K0(e,t,n)}finally{Jl=!1,(so!==null||ao!==null)&&(Q0(),X0())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var tc=!1;if(jn)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{tc=!1}function M1(e,t,n,r,o,i,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var si=!1,ua=null,ca=!1,nc=null,F1={onError:function(e){si=!0,ua=e}};function B1(e,t,n,r,o,i,s,l,u){si=!1,ua=null,M1.apply(F1,arguments)}function U1(e,t,n,r,o,i,s,l,u){if(B1.apply(this,arguments),si){if(si){var c=ua;si=!1,ua=null}else throw Error(R(198));ca||(ca=!0,nc=c)}}function Fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Z0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cp(e){if(Fr(e)!==e)throw Error(R(188))}function V1(e){var t=e.alternate;if(!t){if(t=Fr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return cp(o),e;if(i===r)return cp(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function eg(e){return e=V1(e),e!==null?tg(e):null}function tg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tg(e);if(t!==null)return t;e=e.sibling}return null}var ng=yt.unstable_scheduleCallback,dp=yt.unstable_cancelCallback,H1=yt.unstable_shouldYield,W1=yt.unstable_requestPaint,ve=yt.unstable_now,q1=yt.unstable_getCurrentPriorityLevel,jd=yt.unstable_ImmediatePriority,rg=yt.unstable_UserBlockingPriority,da=yt.unstable_NormalPriority,G1=yt.unstable_LowPriority,og=yt.unstable_IdlePriority,rl=null,un=null;function J1(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Q1,X1=Math.log,K1=Math.LN2;function Q1(e){return e>>>=0,e===0?32:31-(X1(e)/K1|0)|0}var cs=64,ds=4194304;function Xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Xo(l):(i&=s,i!==0&&(r=Xo(i)))}else s=n&~o,s!==0?r=Xo(s):i!==0&&(r=Xo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Y1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Gt(i),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=Y1(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function rc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ig(){var e=cs;return cs<<=1,!(cs&4194240)&&(cs=64),e}function Xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function ew(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function kd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function sg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ag,Cd,lg,ug,cg,oc=!1,fs=[],Jn=null,Xn=null,Kn=null,Si=new Map,ji=new Map,Bn=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fp(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function Mo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Gi(t),t!==null&&Cd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nw(e,t,n,r,o){switch(t){case"focusin":return Jn=Mo(Jn,e,t,n,r,o),!0;case"dragenter":return Xn=Mo(Xn,e,t,n,r,o),!0;case"mouseover":return Kn=Mo(Kn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Si.set(i,Mo(Si.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ji.set(i,Mo(ji.get(i)||null,e,t,n,r,o)),!0}return!1}function dg(e){var t=br(e.target);if(t!==null){var n=Fr(t);if(n!==null){if(t=n.tag,t===13){if(t=Z0(n),t!==null){e.blockedOn=t,cg(e.priority,function(){lg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ic(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zu=r,n.target.dispatchEvent(r),Zu=null}else return t=Gi(n),t!==null&&Cd(t),e.blockedOn=n,!1;t.shift()}return!0}function pp(e,t,n){zs(e)&&n.delete(t)}function rw(){oc=!1,Jn!==null&&zs(Jn)&&(Jn=null),Xn!==null&&zs(Xn)&&(Xn=null),Kn!==null&&zs(Kn)&&(Kn=null),Si.forEach(pp),ji.forEach(pp)}function Fo(e,t){e.blockedOn===t&&(e.blockedOn=null,oc||(oc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,rw)))}function ki(e){function t(o){return Fo(o,e)}if(0<fs.length){Fo(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jn!==null&&Fo(Jn,e),Xn!==null&&Fo(Xn,e),Kn!==null&&Fo(Kn,e),Si.forEach(t),ji.forEach(t),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)dg(n),n.blockedOn===null&&Bn.shift()}var lo=Rn.ReactCurrentBatchConfig,pa=!0;function ow(e,t,n,r){var o=ee,i=lo.transition;lo.transition=null;try{ee=1,Ed(e,t,n,r)}finally{ee=o,lo.transition=i}}function iw(e,t,n,r){var o=ee,i=lo.transition;lo.transition=null;try{ee=4,Ed(e,t,n,r)}finally{ee=o,lo.transition=i}}function Ed(e,t,n,r){if(pa){var o=ic(e,t,n,r);if(o===null)iu(e,t,r,ha,n),fp(e,r);else if(nw(o,e,t,n,r))r.stopPropagation();else if(fp(e,r),t&4&&-1<tw.indexOf(e)){for(;o!==null;){var i=Gi(o);if(i!==null&&ag(i),i=ic(e,t,n,r),i===null&&iu(e,t,r,ha,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else iu(e,t,r,null,n)}}var ha=null;function ic(e,t,n,r){if(ha=null,e=Sd(r),e=br(e),e!==null)if(t=Fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Z0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ha=e,null}function fg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case jd:return 1;case rg:return 4;case da:case G1:return 16;case og:return 536870912;default:return 16}default:return 16}}var Vn=null,$d=null,Ls=null;function pg(){if(Ls)return Ls;var e,t=$d,n=t.length,r,o="value"in Vn?Vn.value:Vn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ls=o.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function hp(){return!1}function bt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ps:hp,this.isPropagationStopped=hp,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=bt(Eo),qi=he({},Eo,{view:0,detail:0}),sw=bt(qi),Kl,Ql,Bo,ol=he({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Kl=e.screenX-Bo.screenX,Ql=e.screenY-Bo.screenY):Ql=Kl=0,Bo=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),mp=bt(ol),aw=he({},ol,{dataTransfer:0}),lw=bt(aw),uw=he({},qi,{relatedTarget:0}),Yl=bt(uw),cw=he({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=bt(cw),fw=he({},Eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pw=bt(fw),hw=he({},Eo,{data:0}),gp=bt(hw),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vw[e])?!!t[e]:!1}function Rd(){return xw}var yw=he({},qi,{key:function(e){if(e.key){var t=mw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ww=bt(yw),bw=he({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=bt(bw),Sw=he({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),jw=bt(Sw),kw=he({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cw=bt(kw),Ew=he({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$w=bt(Ew),_w=[9,13,27,32],Pd=jn&&"CompositionEvent"in window,ai=null;jn&&"documentMode"in document&&(ai=document.documentMode);var Rw=jn&&"TextEvent"in window&&!ai,hg=jn&&(!Pd||ai&&8<ai&&11>=ai),xp=" ",yp=!1;function mg(e,t){switch(e){case"keyup":return _w.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Pw(e,t){switch(e){case"compositionend":return gg(t);case"keypress":return t.which!==32?null:(yp=!0,xp);case"textInput":return e=t.data,e===xp&&yp?null:e;default:return null}}function Tw(e,t){if(Jr)return e==="compositionend"||!Pd&&mg(e,t)?(e=pg(),Ls=$d=Vn=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hg&&t.locale!=="ko"?null:t.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nw[e.type]:t==="textarea"}function vg(e,t,n,r){J0(r),t=ma(t,"onChange"),0<t.length&&(n=new _d("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Ci=null;function Iw(e){_g(e,0)}function il(e){var t=Qr(e);if(B0(t))return e}function zw(e,t){if(e==="change")return t}var xg=!1;if(jn){var Zl;if(jn){var eu="oninput"in document;if(!eu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),eu=typeof bp.oninput=="function"}Zl=eu}else Zl=!1;xg=Zl&&(!document.documentMode||9<document.documentMode)}function Sp(){li&&(li.detachEvent("onpropertychange",yg),Ci=li=null)}function yg(e){if(e.propertyName==="value"&&il(Ci)){var t=[];vg(t,Ci,e,Sd(e)),Y0(Iw,t)}}function Lw(e,t,n){e==="focusin"?(Sp(),li=t,Ci=n,li.attachEvent("onpropertychange",yg)):e==="focusout"&&Sp()}function Aw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Ci)}function Ow(e,t){if(e==="click")return il(t)}function Dw(e,t){if(e==="input"||e==="change")return il(t)}function Mw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Mw;function Ei(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Bu.call(t,o)||!Kt(e[o],t[o]))return!1}return!0}function jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,t){var n=jp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function wg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bg(){for(var e=window,t=la();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=la(e.document)}return t}function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fw(e){var t=bg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wg(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=kp(n,i);var s=kp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bw=jn&&"documentMode"in document&&11>=document.documentMode,Xr=null,sc=null,ui=null,ac=!1;function Cp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||Xr==null||Xr!==la(r)||(r=Xr,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ei(ui,r)||(ui=r,r=ma(sc,"onSelect"),0<r.length&&(t=new _d("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},tu={},Sg={};jn&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function sl(e){if(tu[e])return tu[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sg)return tu[e]=t[n];return e}var jg=sl("animationend"),kg=sl("animationiteration"),Cg=sl("animationstart"),Eg=sl("transitionend"),$g=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,t){$g.set(e,t),Mr(t,[e])}for(var nu=0;nu<Ep.length;nu++){var ru=Ep[nu],Uw=ru.toLowerCase(),Vw=ru[0].toUpperCase()+ru.slice(1);sr(Uw,"on"+Vw)}sr(jg,"onAnimationEnd");sr(kg,"onAnimationIteration");sr(Cg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Eg,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function $p(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U1(r,t,void 0,e),e.currentTarget=null}function _g(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;$p(o,l,c),i=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;$p(o,l,c),i=u}}}if(ca)throw e=nc,ca=!1,nc=null,e}function ae(e,t){var n=t[fc];n===void 0&&(n=t[fc]=new Set);var r=e+"__bubble";n.has(r)||(Rg(t,e,2,!1),n.add(r))}function ou(e,t,n){var r=0;t&&(r|=4),Rg(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function $i(e){if(!e[ms]){e[ms]=!0,A0.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||ou(n,!1,e),ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,ou("selectionchange",!1,t))}}function Rg(e,t,n,r){switch(fg(t)){case 1:var o=ow;break;case 4:o=iw;break;default:o=Ed}n=o.bind(null,t,n,e),o=void 0,!tc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function iu(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=br(l),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Y0(function(){var c=i,d=Sd(n),f=[];e:{var h=$g.get(e);if(h!==void 0){var v=_d,g=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":v=ww;break;case"focusin":g="focus",v=Yl;break;case"focusout":g="blur",v=Yl;break;case"beforeblur":case"afterblur":v=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=jw;break;case jg:case kg:case Cg:v=dw;break;case Eg:v=Cw;break;case"scroll":v=sw;break;case"wheel":v=$w;break;case"copy":case"cut":case"paste":v=pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=vp}var S=(t&4)!==0,b=!S&&e==="scroll",x=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,p;m!==null;){p=m;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,x!==null&&(w=bi(m,x),w!=null&&S.push(_i(m,w,p)))),b)break;m=m.return}0<S.length&&(h=new v(h,g,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Zu&&(g=n.relatedTarget||n.fromElement)&&(br(g)||g[kn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=c,g=g?br(g):null,g!==null&&(b=Fr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=c),v!==g)){if(S=mp,w="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=vp,w="onPointerLeave",x="onPointerEnter",m="pointer"),b=v==null?h:Qr(v),p=g==null?h:Qr(g),h=new S(w,m+"leave",v,n,d),h.target=b,h.relatedTarget=p,w=null,br(d)===c&&(S=new S(x,m+"enter",g,n,d),S.target=p,S.relatedTarget=b,w=S),b=w,v&&g)t:{for(S=v,x=g,m=0,p=S;p;p=Ur(p))m++;for(p=0,w=x;w;w=Ur(w))p++;for(;0<m-p;)S=Ur(S),m--;for(;0<p-m;)x=Ur(x),p--;for(;m--;){if(S===x||x!==null&&S===x.alternate)break t;S=Ur(S),x=Ur(x)}S=null}else S=null;v!==null&&_p(f,h,v,S,!1),g!==null&&b!==null&&_p(f,b,g,S,!0)}}e:{if(h=c?Qr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=zw;else if(wp(h))if(xg)j=Dw;else{j=Aw;var C=Lw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Ow);if(j&&(j=j(e,c))){vg(f,j,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ju(h,"number",h.value)}switch(C=c?Qr(c):window,e){case"focusin":(wp(C)||C.contentEditable==="true")&&(Xr=C,sc=c,ui=null);break;case"focusout":ui=sc=Xr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Cp(f,n,d);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":Cp(f,n,d)}var $;if(Pd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jr?mg(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(hg&&n.locale!=="ko"&&(Jr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jr&&($=pg()):(Vn=d,$d="value"in Vn?Vn.value:Vn.textContent,Jr=!0)),C=ma(c,E),0<C.length&&(E=new gp(E,e,null,n,d),f.push({event:E,listeners:C}),$?E.data=$:($=gg(n),$!==null&&(E.data=$)))),($=Rw?Pw(e,n):Tw(e,n))&&(c=ma(c,"onBeforeInput"),0<c.length&&(d=new gp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=$))}_g(f,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ma(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=bi(e,n),i!=null&&r.unshift(_i(e,i,o)),i=bi(e,t),i!=null&&r.push(_i(e,i,o))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _p(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=bi(n,i),u!=null&&s.unshift(_i(n,u,l))):o||(u=bi(n,i),u!=null&&s.push(_i(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ww=/\r\n?/g,qw=/\u0000|\uFFFD/g;function Rp(e){return(typeof e=="string"?e:""+e).replace(Ww,`
`).replace(qw,"")}function gs(e,t,n){if(t=Rp(t),Rp(e)!==t&&n)throw Error(R(425))}function ga(){}var lc=null,uc=null;function cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,Gw=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(e){return Pp.resolve(null).then(e).catch(Xw)}:dc;function Xw(e){setTimeout(function(){throw e})}function su(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ki(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $o=Math.random().toString(36).slice(2),sn="__reactFiber$"+$o,Ri="__reactProps$"+$o,kn="__reactContainer$"+$o,fc="__reactEvents$"+$o,Kw="__reactListeners$"+$o,Qw="__reactHandles$"+$o;function br(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tp(e);e!==null;){if(n=e[sn])return n;e=Tp(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[sn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function al(e){return e[Ri]||null}var pc=[],Yr=-1;function ar(e){return{current:e}}function ce(e){0>Yr||(e.current=pc[Yr],pc[Yr]=null,Yr--)}function se(e,t){Yr++,pc[Yr]=e.current,e.current=t}var ir={},Fe=ar(ir),et=ar(!1),Nr=ir;function po(e,t){var n=e.type.contextTypes;if(!n)return ir;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function va(){ce(et),ce(Fe)}function Np(e,t,n){if(Fe.current!==ir)throw Error(R(168));se(Fe,t),se(et,n)}function Pg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,L1(e)||"Unknown",o));return he({},n,r)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ir,Nr=Fe.current,se(Fe,e),se(et,et.current),!0}function Ip(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Pg(e,t,Nr),r.__reactInternalMemoizedMergedChildContext=e,ce(et),ce(Fe),se(Fe,e)):ce(et),se(et,n)}var xn=null,ll=!1,au=!1;function Tg(e){xn===null?xn=[e]:xn.push(e)}function Yw(e){ll=!0,Tg(e)}function lr(){if(!au&&xn!==null){au=!0;var e=0,t=ee;try{var n=xn;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xn=null,ll=!1}catch(o){throw xn!==null&&(xn=xn.slice(e+1)),ng(jd,lr),o}finally{ee=t,au=!1}}return null}var Zr=[],eo=0,ya=null,wa=0,Et=[],$t=0,Ir=null,wn=1,bn="";function mr(e,t){Zr[eo++]=wa,Zr[eo++]=ya,ya=e,wa=t}function Ng(e,t,n){Et[$t++]=wn,Et[$t++]=bn,Et[$t++]=Ir,Ir=e;var r=wn;e=bn;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var i=32-Gt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,wn=1<<32-Gt(t)+o|n<<o|r,bn=i+e}else wn=1<<i|n<<o|r,bn=e}function Nd(e){e.return!==null&&(mr(e,1),Ng(e,1,0))}function Id(e){for(;e===ya;)ya=Zr[--eo],Zr[eo]=null,wa=Zr[--eo],Zr[eo]=null;for(;e===Ir;)Ir=Et[--$t],Et[$t]=null,bn=Et[--$t],Et[$t]=null,wn=Et[--$t],Et[$t]=null}var vt=null,gt=null,de=!1,qt=null;function Ig(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,gt=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:wn,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,gt=null,!0):!1;default:return!1}}function hc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mc(e){if(de){var t=gt;if(t){var n=t;if(!zp(e,t)){if(hc(e))throw Error(R(418));t=Qn(n.nextSibling);var r=vt;t&&zp(e,t)?Ig(r,n):(e.flags=e.flags&-4097|2,de=!1,vt=e)}}else{if(hc(e))throw Error(R(418));e.flags=e.flags&-4097|2,de=!1,vt=e}}}function Lp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function vs(e){if(e!==vt)return!1;if(!de)return Lp(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cc(e.type,e.memoizedProps)),t&&(t=gt)){if(hc(e))throw zg(),Error(R(418));for(;t;)Ig(e,t),t=Qn(t.nextSibling)}if(Lp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=vt?Qn(e.stateNode.nextSibling):null;return!0}function zg(){for(var e=gt;e;)e=Qn(e.nextSibling)}function ho(){gt=vt=null,de=!1}function zd(e){qt===null?qt=[e]:qt.push(e)}var Zw=Rn.ReactCurrentBatchConfig;function Uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ap(e){var t=e._init;return t(e._payload)}function Lg(e){function t(x,m){if(e){var p=x.deletions;p===null?(x.deletions=[m],x.flags|=16):p.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function o(x,m){return x=tr(x,m),x.index=0,x.sibling=null,x}function i(x,m,p){return x.index=p,e?(p=x.alternate,p!==null?(p=p.index,p<m?(x.flags|=2,m):p):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,m,p,w){return m===null||m.tag!==6?(m=hu(p,x.mode,w),m.return=x,m):(m=o(m,p),m.return=x,m)}function u(x,m,p,w){var j=p.type;return j===Gr?d(x,m,p.props.children,w,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Mn&&Ap(j)===m.type)?(w=o(m,p.props),w.ref=Uo(x,m,p),w.return=x,w):(w=Vs(p.type,p.key,p.props,null,x.mode,w),w.ref=Uo(x,m,p),w.return=x,w)}function c(x,m,p,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=mu(p,x.mode,w),m.return=x,m):(m=o(m,p.children||[]),m.return=x,m)}function d(x,m,p,w,j){return m===null||m.tag!==7?(m=Rr(p,x.mode,w,j),m.return=x,m):(m=o(m,p),m.return=x,m)}function f(x,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=hu(""+m,x.mode,p),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case as:return p=Vs(m.type,m.key,m.props,null,x.mode,p),p.ref=Uo(x,null,m),p.return=x,p;case qr:return m=mu(m,x.mode,p),m.return=x,m;case Mn:var w=m._init;return f(x,w(m._payload),p)}if(Jo(m)||Oo(m))return m=Rr(m,x.mode,p,null),m.return=x,m;xs(x,m)}return null}function h(x,m,p,w){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:l(x,m,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case as:return p.key===j?u(x,m,p,w):null;case qr:return p.key===j?c(x,m,p,w):null;case Mn:return j=p._init,h(x,m,j(p._payload),w)}if(Jo(p)||Oo(p))return j!==null?null:d(x,m,p,w,null);xs(x,p)}return null}function v(x,m,p,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(p)||null,l(m,x,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case as:return x=x.get(w.key===null?p:w.key)||null,u(m,x,w,j);case qr:return x=x.get(w.key===null?p:w.key)||null,c(m,x,w,j);case Mn:var C=w._init;return v(x,m,p,C(w._payload),j)}if(Jo(w)||Oo(w))return x=x.get(p)||null,d(m,x,w,j,null);xs(m,w)}return null}function g(x,m,p,w){for(var j=null,C=null,$=m,E=m=0,A=null;$!==null&&E<p.length;E++){$.index>E?(A=$,$=null):A=$.sibling;var O=h(x,$,p[E],w);if(O===null){$===null&&($=A);break}e&&$&&O.alternate===null&&t(x,$),m=i(O,m,E),C===null?j=O:C.sibling=O,C=O,$=A}if(E===p.length)return n(x,$),de&&mr(x,E),j;if($===null){for(;E<p.length;E++)$=f(x,p[E],w),$!==null&&(m=i($,m,E),C===null?j=$:C.sibling=$,C=$);return de&&mr(x,E),j}for($=r(x,$);E<p.length;E++)A=v($,x,E,p[E],w),A!==null&&(e&&A.alternate!==null&&$.delete(A.key===null?E:A.key),m=i(A,m,E),C===null?j=A:C.sibling=A,C=A);return e&&$.forEach(function(te){return t(x,te)}),de&&mr(x,E),j}function S(x,m,p,w){var j=Oo(p);if(typeof j!="function")throw Error(R(150));if(p=j.call(p),p==null)throw Error(R(151));for(var C=j=null,$=m,E=m=0,A=null,O=p.next();$!==null&&!O.done;E++,O=p.next()){$.index>E?(A=$,$=null):A=$.sibling;var te=h(x,$,O.value,w);if(te===null){$===null&&($=A);break}e&&$&&te.alternate===null&&t(x,$),m=i(te,m,E),C===null?j=te:C.sibling=te,C=te,$=A}if(O.done)return n(x,$),de&&mr(x,E),j;if($===null){for(;!O.done;E++,O=p.next())O=f(x,O.value,w),O!==null&&(m=i(O,m,E),C===null?j=O:C.sibling=O,C=O);return de&&mr(x,E),j}for($=r(x,$);!O.done;E++,O=p.next())O=v($,x,E,O.value,w),O!==null&&(e&&O.alternate!==null&&$.delete(O.key===null?E:O.key),m=i(O,m,E),C===null?j=O:C.sibling=O,C=O);return e&&$.forEach(function(Se){return t(x,Se)}),de&&mr(x,E),j}function b(x,m,p,w){if(typeof p=="object"&&p!==null&&p.type===Gr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case as:e:{for(var j=p.key,C=m;C!==null;){if(C.key===j){if(j=p.type,j===Gr){if(C.tag===7){n(x,C.sibling),m=o(C,p.props.children),m.return=x,x=m;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Mn&&Ap(j)===C.type){n(x,C.sibling),m=o(C,p.props),m.ref=Uo(x,C,p),m.return=x,x=m;break e}n(x,C);break}else t(x,C);C=C.sibling}p.type===Gr?(m=Rr(p.props.children,x.mode,w,p.key),m.return=x,x=m):(w=Vs(p.type,p.key,p.props,null,x.mode,w),w.ref=Uo(x,m,p),w.return=x,x=w)}return s(x);case qr:e:{for(C=p.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(x,m.sibling),m=o(m,p.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=mu(p,x.mode,w),m.return=x,x=m}return s(x);case Mn:return C=p._init,b(x,m,C(p._payload),w)}if(Jo(p))return g(x,m,p,w);if(Oo(p))return S(x,m,p,w);xs(x,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(x,m.sibling),m=o(m,p),m.return=x,x=m):(n(x,m),m=hu(p,x.mode,w),m.return=x,x=m),s(x)):n(x,m)}return b}var mo=Lg(!0),Ag=Lg(!1),ba=ar(null),Sa=null,to=null,Ld=null;function Ad(){Ld=to=Sa=null}function Od(e){var t=ba.current;ce(ba),e._currentValue=t}function gc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function uo(e,t){Sa=e,Ld=to=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Ld!==e)if(e={context:e,memoizedValue:t,next:null},to===null){if(Sa===null)throw Error(R(308));to=e,Sa.dependencies={lanes:0,firstContext:e}}else to=to.next=e;return t}var Sr=null;function Dd(e){Sr===null?Sr=[e]:Sr.push(e)}function Og(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Dd(t)):(n.next=o.next,o.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Md(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Cn(e,n)}return o=r.interleaved,o===null?(t.next=t,Dd(r)):(t.next=o.next,o.next=t),r.interleaved=t,Cn(e,n)}function Os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kd(e,n)}}function Op(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ja(e,t,n,r){var o=e.updateQueue;Fn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;s=0,d=c=u=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,S=l;switch(h=t,v=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(v,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(v,f,h):g,h==null)break e;f=he({},f,h);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Lr|=s,e.lanes=s,e.memoizedState=f}}function Dp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Ji={},cn=ar(Ji),Pi=ar(Ji),Ti=ar(Ji);function jr(e){if(e===Ji)throw Error(R(174));return e}function Fd(e,t){switch(se(Ti,t),se(Pi,e),se(cn,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ku(t,e)}ce(cn),se(cn,t)}function go(){ce(cn),ce(Pi),ce(Ti)}function Mg(e){jr(Ti.current);var t=jr(cn.current),n=Ku(t,e.type);t!==n&&(se(Pi,e),se(cn,n))}function Bd(e){Pi.current===e&&(ce(cn),ce(Pi))}var fe=ar(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lu=[];function Ud(){for(var e=0;e<lu.length;e++)lu[e]._workInProgressVersionPrimary=null;lu.length=0}var Ds=Rn.ReactCurrentDispatcher,uu=Rn.ReactCurrentBatchConfig,zr=0,pe=null,je=null,Ce=null,Ca=!1,ci=!1,Ni=0,eb=0;function Le(){throw Error(R(321))}function Vd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function Hd(e,t,n,r,o,i){if(zr=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?ob:ib,e=n(r,o),ci){i=0;do{if(ci=!1,Ni=0,25<=i)throw Error(R(301));i+=1,Ce=je=null,t.updateQueue=null,Ds.current=sb,e=n(r,o)}while(ci)}if(Ds.current=Ea,t=je!==null&&je.next!==null,zr=0,Ce=je=pe=null,Ca=!1,t)throw Error(R(300));return e}function Wd(){var e=Ni!==0;return Ni=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?pe.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Tt(){if(je===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ce===null?pe.memoizedState:Ce.next;if(t!==null)Ce=t,je=e;else{if(e===null)throw Error(R(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ce===null?pe.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Ii(e,t){return typeof t=="function"?t(e):t}function cu(e){var t=Tt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,u=null,c=i;do{var d=c.lane;if((zr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,s=r):u=u.next=f,pe.lanes|=d,Lr|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=l,Kt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,pe.lanes|=i,Lr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function du(e){var t=Tt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Kt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fg(){}function Bg(e,t){var n=pe,r=Tt(),o=t(),i=!Kt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ze=!0),r=r.queue,qd(Hg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,zi(9,Vg.bind(null,n,r,o,t),void 0,null),$e===null)throw Error(R(349));zr&30||Ug(n,t,o)}return o}function Ug(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vg(e,t,n,r){t.value=n,t.getSnapshot=r,Wg(t)&&qg(e)}function Hg(e,t,n){return n(function(){Wg(t)&&qg(e)})}function Wg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function qg(e){var t=Cn(e,1);t!==null&&Jt(t,e,1,-1)}function Mp(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=rb.bind(null,pe,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gg(){return Tt().memoizedState}function Ms(e,t,n,r){var o=rn();pe.flags|=e,o.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=Tt();r=r===void 0?null:r;var i=void 0;if(je!==null){var s=je.memoizedState;if(i=s.destroy,r!==null&&Vd(r,s.deps)){o.memoizedState=zi(t,n,i,r);return}}pe.flags|=e,o.memoizedState=zi(1|t,n,i,r)}function Fp(e,t){return Ms(8390656,8,e,t)}function qd(e,t){return ul(2048,8,e,t)}function Jg(e,t){return ul(4,2,e,t)}function Xg(e,t){return ul(4,4,e,t)}function Kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qg(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Kg.bind(null,t,e),n)}function Gd(){}function Yg(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zg(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ev(e,t,n){return zr&21?(Kt(n,t)||(n=ig(),pe.lanes|=n,Lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function tb(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=uu.transition;uu.transition={};try{e(!1),t()}finally{ee=n,uu.transition=r}}function tv(){return Tt().memoizedState}function nb(e,t,n){var r=er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(e))rv(t,n);else if(n=Og(e,t,n,r),n!==null){var o=He();Jt(n,e,r,o),ov(n,t,r)}}function rb(e,t,n){var r=er(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(e))rv(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Kt(l,s)){var u=t.interleaved;u===null?(o.next=o,Dd(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Og(e,t,o,r),n!==null&&(o=He(),Jt(n,e,r,o),ov(n,t,r))}}function nv(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function rv(e,t){ci=Ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ov(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kd(e,n)}}var Ea={readContext:Pt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},ob={readContext:Pt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Fp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4194308,4,Kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var n=rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nb.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:Mp,useDebugValue:Gd,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=Mp(!1),t=e[0];return e=tb.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,o=rn();if(de){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),$e===null)throw Error(R(349));zr&30||Ug(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fp(Hg.bind(null,r,i,e),[e]),r.flags|=2048,zi(9,Vg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=rn(),t=$e.identifierPrefix;if(de){var n=bn,r=wn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=eb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ib={readContext:Pt,useCallback:Yg,useContext:Pt,useEffect:qd,useImperativeHandle:Qg,useInsertionEffect:Jg,useLayoutEffect:Xg,useMemo:Zg,useReducer:cu,useRef:Gg,useState:function(){return cu(Ii)},useDebugValue:Gd,useDeferredValue:function(e){var t=Tt();return ev(t,je.memoizedState,e)},useTransition:function(){var e=cu(Ii)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:Fg,useSyncExternalStore:Bg,useId:tv,unstable_isNewReconciler:!1},sb={readContext:Pt,useCallback:Yg,useContext:Pt,useEffect:qd,useImperativeHandle:Qg,useInsertionEffect:Jg,useLayoutEffect:Xg,useMemo:Zg,useReducer:du,useRef:Gg,useState:function(){return du(Ii)},useDebugValue:Gd,useDeferredValue:function(e){var t=Tt();return je===null?t.memoizedState=e:ev(t,je.memoizedState,e)},useTransition:function(){var e=du(Ii)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:Fg,useSyncExternalStore:Bg,useId:tv,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),o=er(e),i=Sn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Yn(e,i,o),t!==null&&(Jt(t,e,o,r),Os(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),o=er(e),i=Sn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yn(e,i,o),t!==null&&(Jt(t,e,o,r),Os(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=er(e),o=Sn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yn(e,o,r),t!==null&&(Jt(t,e,r,n),Os(t,e,r))}};function Bp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(o,i):!0}function iv(e,t,n){var r=!1,o=ir,i=t.contextType;return typeof i=="object"&&i!==null?i=Pt(i):(o=tt(t)?Nr:Fe.current,r=t.contextTypes,i=(r=r!=null)?po(e,o):ir),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Up(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function xc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Md(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Pt(i):(i=tt(t)?Nr:Fe.current,o.context=po(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cl.enqueueReplaceState(o,o.state,null),ja(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t){try{var n="",r=t;do n+=z1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function fu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ab=typeof WeakMap=="function"?WeakMap:Map;function sv(e,t,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_a||(_a=!0,Rc=r),yc(e,t)},n}function av(e,t,n){n=Sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){yc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){yc(e,t),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Vp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ab;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=bb.bind(null,e,t,n),t.then(e,e))}function Hp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Sn(-1,1),t.tag=2,Yn(n,t,1))),n.lanes|=1),e)}var lb=Rn.ReactCurrentOwner,Ze=!1;function Ue(e,t,n,r){t.child=e===null?Ag(t,null,n,r):mo(t,e.child,n,r)}function qp(e,t,n,r,o){n=n.render;var i=t.ref;return uo(t,o),r=Hd(e,t,n,r,i,o),n=Wd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(de&&n&&Nd(t),t.flags|=1,Ue(e,t,r,o),t.child)}function Gp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!tf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lv(e,t,i,r,o)):(e=Vs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(s,r)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=tr(i,r),e.ref=t.ref,e.return=t,t.child=e}function lv(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ei(i,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,En(e,t,o)}return wc(e,t,n,r,o)}function uv(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ro,ct),ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(ro,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(ro,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(ro,ct),ct|=r;return Ue(e,t,o,n),t.child}function cv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wc(e,t,n,r,o){var i=tt(n)?Nr:Fe.current;return i=po(t,i),uo(t,o),n=Hd(e,t,n,r,i,o),r=Wd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(de&&r&&Nd(t),t.flags|=1,Ue(e,t,n,o),t.child)}function Jp(e,t,n,r,o){if(tt(n)){var i=!0;xa(t)}else i=!1;if(uo(t,o),t.stateNode===null)Fs(e,t),iv(t,n,r),xc(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pt(c):(c=tt(n)?Nr:Fe.current,c=po(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Up(t,s,r,c),Fn=!1;var h=t.memoizedState;s.state=h,ja(t,r,s,o),u=t.memoizedState,l!==r||h!==u||et.current||Fn?(typeof d=="function"&&(vc(t,n,d,r),u=t.memoizedState),(l=Fn||Bp(t,n,l,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dg(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Vt(t.type,l),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=tt(n)?Nr:Fe.current,u=po(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==u)&&Up(t,s,r,u),Fn=!1,h=t.memoizedState,s.state=h,ja(t,r,s,o);var g=t.memoizedState;l!==f||h!==g||et.current||Fn?(typeof v=="function"&&(vc(t,n,v,r),g=t.memoizedState),(c=Fn||Bp(t,n,c,r,h,g,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bc(e,t,n,r,i,o)}function bc(e,t,n,r,o,i){cv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ip(t,n,!1),En(e,t,i);r=t.stateNode,lb.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mo(t,e.child,null,i),t.child=mo(t,null,l,i)):Ue(e,t,l,i),t.memoizedState=r.state,o&&Ip(t,n,!0),t.child}function dv(e){var t=e.stateNode;t.pendingContext?Np(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Np(e,t.context,!1),Fd(e,t.containerInfo)}function Xp(e,t,n,r,o){return ho(),zd(o),t.flags|=256,Ue(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function jc(e){return{baseLanes:e,cachePool:null,transitions:null}}function fv(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(fe,o&1),e===null)return mc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=pl(s,r,0,null),e=Rr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=jc(n),t.memoizedState=Sc,e):Jd(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ub(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=tr(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=tr(l,i):(i=Rr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?jc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Sc,r}return i=e.child,e=i.sibling,r=tr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jd(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ys(e,t,n,r){return r!==null&&zd(r),mo(t,e.child,null,n),e=Jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ub(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=fu(Error(R(422))),ys(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=pl({mode:"visible",children:r.children},o,0,null),i=Rr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&mo(t,e.child,null,s),t.child.memoizedState=jc(s),t.memoizedState=Sc,i);if(!(t.mode&1))return ys(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=fu(i,r,void 0),ys(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ze||l){if(r=$e,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Cn(e,o),Jt(r,e,o,-1))}return ef(),r=fu(Error(R(421))),ys(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sb.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gt=Qn(o.nextSibling),vt=t,de=!0,qt=null,e!==null&&(Et[$t++]=wn,Et[$t++]=bn,Et[$t++]=Ir,wn=e.id,bn=e.overflow,Ir=t),t=Jd(t,r.children),t.flags|=4096,t)}function Kp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gc(e.return,t,n)}function pu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function pv(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ue(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kp(e,n,t);else if(e.tag===19)Kp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ka(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pu(t,!0,n,null,i);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cb(e,t,n){switch(t.tag){case 3:dv(t),ho();break;case 5:Mg(t);break;case 1:tt(t.type)&&xa(t);break;case 4:Fd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?fv(e,t,n):(se(fe,fe.current&1),e=En(e,t,n),e!==null?e.sibling:null);se(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,uv(e,t,n)}return En(e,t,n)}var hv,kc,mv,gv;hv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};mv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jr(cn.current);var i=null;switch(n){case"input":o=qu(e,o),r=qu(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=Xu(e,o),r=Xu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ga)}Qu(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ae("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};gv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vo(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function db(e,t,n){var r=t.pendingProps;switch(Id(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return tt(t.type)&&va(),Ae(t),null;case 3:return r=t.stateNode,go(),ce(et),ce(Fe),Ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Nc(qt),qt=null))),kc(e,t),Ae(t),null;case 5:Bd(t);var o=jr(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)mv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ae(t),null}if(e=jr(cn.current),vs(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[sn]=t,r[Ri]=i,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(o=0;o<Ko.length;o++)ae(Ko[o],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ip(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":ap(r,i),ae("invalid",r)}Qu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),o=["children",""+l]):yi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":ls(r),sp(r,i,!0);break;case"textarea":ls(r),lp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ga)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=H0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[sn]=t,e[Ri]=r,hv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yu(n,r),n){case"dialog":ae("cancel",e),ae("close",e),o=r;break;case"iframe":case"object":case"embed":ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ko.length;o++)ae(Ko[o],e);o=r;break;case"source":ae("error",e),o=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=r;break;case"details":ae("toggle",e),o=r;break;case"input":ip(e,r),o=qu(e,r),ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),ae("invalid",e);break;case"textarea":ap(e,r),o=Xu(e,r),ae("invalid",e);break;default:o=r}Qu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?G0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&W0(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wi(e,u):typeof u=="number"&&wi(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ae("scroll",e):u!=null&&xd(e,i,u,s))}switch(n){case"input":ls(e),sp(e,r,!1);break;case"textarea":ls(e),lp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+or(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?io(e,!!r.multiple,i,!1):r.defaultValue!=null&&io(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)gv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=jr(Ti.current),jr(cn.current),vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(i=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return Ae(t),null;case 13:if(ce(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&gt!==null&&t.mode&1&&!(t.flags&128))zg(),ho(),t.flags|=98560,i=!1;else if(i=vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[sn]=t}else ho(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else qt!==null&&(Nc(qt),qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?ke===0&&(ke=3):ef())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return go(),kc(e,t),e===null&&$i(t.stateNode.containerInfo),Ae(t),null;case 10:return Od(t.type._context),Ae(t),null;case 17:return tt(t.type)&&va(),Ae(t),null;case 19:if(ce(fe),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Vo(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ka(e),s!==null){for(t.flags|=128,Vo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>xo&&(t.flags|=128,r=!0,Vo(i,!1),t.lanes=4194304)}else{if(!r)if(e=ka(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!de)return Ae(t),null}else 2*ve()-i.renderingStartTime>xo&&n!==1073741824&&(t.flags|=128,r=!0,Vo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=fe.current,se(fe,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Zd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function fb(e,t){switch(Id(t),t.tag){case 1:return tt(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return go(),ce(et),ce(Fe),Ud(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bd(t),null;case 13:if(ce(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ho()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(fe),null;case 4:return go(),null;case 10:return Od(t.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var ws=!1,De=!1,pb=typeof WeakSet=="function"?WeakSet:Set,z=null;function no(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Cc(e,t,n){try{n()}catch(r){me(e,t,r)}}var Qp=!1;function hb(e,t){if(lc=pa,e=bg(),Td(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++c===o&&(l=s),h===i&&++d===r&&(u=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(uc={focusedElem:e,selectionRange:n},pa=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,b=g.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?S:Vt(t.type,S),b);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){me(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=Qp,Qp=!1,g}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Cc(t,n,i)}o=o.next}while(o!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vv(e){var t=e.alternate;t!==null&&(e.alternate=null,vv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ri],delete t[fc],delete t[Kw],delete t[Qw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xv(e){return e.tag===5||e.tag===3||e.tag===4}function Yp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ga));else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function _c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_c(e,t,n),e=e.sibling;e!==null;)_c(e,t,n),e=e.sibling}var _e=null,Wt=!1;function In(e,t,n){for(n=n.child;n!==null;)yv(e,t,n),n=n.sibling}function yv(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:De||no(n,t);case 6:var r=_e,o=Wt;_e=null,In(e,t,n),_e=r,Wt=o,_e!==null&&(Wt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Wt?(e=_e,n=n.stateNode,e.nodeType===8?su(e.parentNode,n):e.nodeType===1&&su(e,n),ki(e)):su(_e,n.stateNode));break;case 4:r=_e,o=Wt,_e=n.stateNode.containerInfo,Wt=!0,In(e,t,n),_e=r,Wt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Cc(n,t,s),o=o.next}while(o!==r)}In(e,t,n);break;case 1:if(!De&&(no(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){me(n,t,l)}In(e,t,n);break;case 21:In(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,In(e,t,n),De=r):In(e,t,n);break;default:In(e,t,n)}}function Zp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pb),t.forEach(function(r){var o=jb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,Wt=!1;break e;case 3:_e=l.stateNode.containerInfo,Wt=!0;break e;case 4:_e=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(_e===null)throw Error(R(160));yv(i,s,o),_e=null,Wt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){me(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wv(t,e),t=t.sibling}function wv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Yt(e),r&4){try{di(3,e,e.return),dl(3,e)}catch(S){me(e,e.return,S)}try{di(5,e,e.return)}catch(S){me(e,e.return,S)}}break;case 1:Mt(t,e),Yt(e),r&512&&n!==null&&no(n,n.return);break;case 5:if(Mt(t,e),Yt(e),r&512&&n!==null&&no(n,n.return),e.flags&32){var o=e.stateNode;try{wi(o,"")}catch(S){me(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&U0(o,i),Yu(l,s);var c=Yu(l,i);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?G0(o,f):d==="dangerouslySetInnerHTML"?W0(o,f):d==="children"?wi(o,f):xd(o,d,f,c)}switch(l){case"input":Gu(o,i);break;case"textarea":V0(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?io(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?io(o,!!i.multiple,i.defaultValue,!0):io(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ri]=i}catch(S){me(e,e.return,S)}}break;case 6:if(Mt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){me(e,e.return,S)}}break;case 3:if(Mt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(S){me(e,e.return,S)}break;case 4:Mt(t,e),Yt(e);break;case 13:Mt(t,e),Yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qd=ve())),r&4&&Zp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(c=De)||d,Mt(t,e),De=c):Mt(t,e),Yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(f=z=d;z!==null;){switch(h=z,v=h.child,h.tag){case 0:case 11:case 14:case 15:di(4,h,h.return);break;case 1:no(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){me(r,n,S)}}break;case 5:no(h,h.return);break;case 22:if(h.memoizedState!==null){th(f);continue}}v!==null?(v.return=h,z=v):th(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=q0("display",s))}catch(S){me(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){me(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mt(t,e),Yt(e),r&4&&Zp(e);break;case 21:break;default:Mt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wi(o,""),r.flags&=-33);var i=Yp(e);_c(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Yp(e);$c(e,l,s);break;default:throw Error(R(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mb(e,t,n){z=e,bv(e)}function bv(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ws;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||De;l=ws;var c=De;if(ws=s,(De=u)&&!c)for(z=o;z!==null;)s=z,u=s.child,s.tag===22&&s.memoizedState!==null?nh(o):u!==null?(u.return=s,z=u):nh(o);for(;i!==null;)z=i,bv(i),i=i.sibling;z=o,ws=l,De=c}eh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):eh(e)}}function eh(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dp(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dp(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}De||t.flags&512&&Ec(t)}catch(h){me(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function th(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function nh(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(u){me(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){me(t,o,u)}}var i=t.return;try{Ec(t)}catch(u){me(t,i,u)}break;case 5:var s=t.return;try{Ec(t)}catch(u){me(t,s,u)}}}catch(u){me(t,t.return,u)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var gb=Math.ceil,$a=Rn.ReactCurrentDispatcher,Xd=Rn.ReactCurrentOwner,Rt=Rn.ReactCurrentBatchConfig,Q=0,$e=null,be=null,Te=0,ct=0,ro=ar(0),ke=0,Li=null,Lr=0,fl=0,Kd=0,fi=null,Ye=null,Qd=0,xo=1/0,gn=null,_a=!1,Rc=null,Zn=null,bs=!1,Hn=null,Ra=0,pi=0,Pc=null,Bs=-1,Us=0;function He(){return Q&6?ve():Bs!==-1?Bs:Bs=ve()}function er(e){return e.mode&1?Q&2&&Te!==0?Te&-Te:Zw.transition!==null?(Us===0&&(Us=ig()),Us):(e=ee,e!==0||(e=window.event,e=e===void 0?16:fg(e.type)),e):1}function Jt(e,t,n,r){if(50<pi)throw pi=0,Pc=null,Error(R(185));Wi(e,n,r),(!(Q&2)||e!==$e)&&(e===$e&&(!(Q&2)&&(fl|=n),ke===4&&Un(e,Te)),nt(e,r),n===1&&Q===0&&!(t.mode&1)&&(xo=ve()+500,ll&&lr()))}function nt(e,t){var n=e.callbackNode;Z1(e,t);var r=fa(e,e===$e?Te:0);if(r===0)n!==null&&dp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dp(n),t===1)e.tag===0?Yw(rh.bind(null,e)):Tg(rh.bind(null,e)),Jw(function(){!(Q&6)&&lr()}),n=null;else{switch(sg(r)){case 1:n=jd;break;case 4:n=rg;break;case 16:n=da;break;case 536870912:n=og;break;default:n=da}n=Rv(n,Sv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sv(e,t){if(Bs=-1,Us=0,Q&6)throw Error(R(327));var n=e.callbackNode;if(co()&&e.callbackNode!==n)return null;var r=fa(e,e===$e?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pa(e,r);else{t=r;var o=Q;Q|=2;var i=kv();($e!==e||Te!==t)&&(gn=null,xo=ve()+500,_r(e,t));do try{yb();break}catch(l){jv(e,l)}while(!0);Ad(),$a.current=i,Q=o,be!==null?t=0:($e=null,Te=0,t=ke)}if(t!==0){if(t===2&&(o=rc(e),o!==0&&(r=o,t=Tc(e,o))),t===1)throw n=Li,_r(e,0),Un(e,r),nt(e,ve()),n;if(t===6)Un(e,r);else{if(o=e.current.alternate,!(r&30)&&!vb(o)&&(t=Pa(e,r),t===2&&(i=rc(e),i!==0&&(r=i,t=Tc(e,i))),t===1))throw n=Li,_r(e,0),Un(e,r),nt(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:gr(e,Ye,gn);break;case 3:if(Un(e,r),(r&130023424)===r&&(t=Qd+500-ve(),10<t)){if(fa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=dc(gr.bind(null,e,Ye,gn),t);break}gr(e,Ye,gn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Gt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gb(r/1960))-r,10<r){e.timeoutHandle=dc(gr.bind(null,e,Ye,gn),r);break}gr(e,Ye,gn);break;case 5:gr(e,Ye,gn);break;default:throw Error(R(329))}}}return nt(e,ve()),e.callbackNode===n?Sv.bind(null,e):null}function Tc(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Nc(t)),e}function Nc(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function vb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Kt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~Kd,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function rh(e){if(Q&6)throw Error(R(327));co();var t=fa(e,0);if(!(t&1))return nt(e,ve()),null;var n=Pa(e,t);if(e.tag!==0&&n===2){var r=rc(e);r!==0&&(t=r,n=Tc(e,r))}if(n===1)throw n=Li,_r(e,0),Un(e,t),nt(e,ve()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,Ye,gn),nt(e,ve()),null}function Yd(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(xo=ve()+500,ll&&lr())}}function Ar(e){Hn!==null&&Hn.tag===0&&!(Q&6)&&co();var t=Q;Q|=1;var n=Rt.transition,r=ee;try{if(Rt.transition=null,ee=1,e)return e()}finally{ee=r,Rt.transition=n,Q=t,!(Q&6)&&lr()}}function Zd(){ct=ro.current,ce(ro)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gw(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:go(),ce(et),ce(Fe),Ud();break;case 5:Bd(r);break;case 4:go();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Od(r.type._context);break;case 22:case 23:Zd()}n=n.return}if($e=e,be=e=tr(e.current,null),Te=ct=t,ke=0,Li=null,Kd=fl=Lr=0,Ye=fi=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Sr=null}return e}function jv(e,t){do{var n=be;try{if(Ad(),Ds.current=Ea,Ca){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ca=!1}if(zr=0,Ce=je=pe=null,ci=!1,Ni=0,Xd.current=null,n===null||n.return===null){ke=1,Li=t,be=null;break}e:{var i=e,s=n.return,l=n,u=t;if(t=Te,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Hp(s);if(v!==null){v.flags&=-257,Wp(v,s,l,i,t),v.mode&1&&Vp(i,c,t),t=v,u=c;var g=t.updateQueue;if(g===null){var S=new Set;S.add(u),t.updateQueue=S}else g.add(u);break e}else{if(!(t&1)){Vp(i,c,t),ef();break e}u=Error(R(426))}}else if(de&&l.mode&1){var b=Hp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Wp(b,s,l,i,t),zd(vo(u,l));break e}}i=u=vo(u,l),ke!==4&&(ke=2),fi===null?fi=[i]:fi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=sv(i,u,t);Op(i,x);break e;case 1:l=u;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zn===null||!Zn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=av(i,l,t);Op(i,w);break e}}i=i.return}while(i!==null)}Ev(n)}catch(j){t=j,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function kv(){var e=$a.current;return $a.current=Ea,e===null?Ea:e}function ef(){(ke===0||ke===3||ke===2)&&(ke=4),$e===null||!(Lr&268435455)&&!(fl&268435455)||Un($e,Te)}function Pa(e,t){var n=Q;Q|=2;var r=kv();($e!==e||Te!==t)&&(gn=null,_r(e,t));do try{xb();break}catch(o){jv(e,o)}while(!0);if(Ad(),Q=n,$a.current=r,be!==null)throw Error(R(261));return $e=null,Te=0,ke}function xb(){for(;be!==null;)Cv(be)}function yb(){for(;be!==null&&!H1();)Cv(be)}function Cv(e){var t=_v(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Ev(e):be=t,Xd.current=null}function Ev(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fb(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,be=null;return}}else if(n=db(n,t,ct),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);ke===0&&(ke=5)}function gr(e,t,n){var r=ee,o=Rt.transition;try{Rt.transition=null,ee=1,wb(e,t,n,r)}finally{Rt.transition=o,ee=r}return null}function wb(e,t,n,r){do co();while(Hn!==null);if(Q&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ew(e,i),e===$e&&(be=$e=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bs||(bs=!0,Rv(da,function(){return co(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Rt.transition,Rt.transition=null;var s=ee;ee=1;var l=Q;Q|=4,Xd.current=null,hb(e,n),wv(n,e),Fw(uc),pa=!!lc,uc=lc=null,e.current=n,mb(n),W1(),Q=l,ee=s,Rt.transition=i}else e.current=n;if(bs&&(bs=!1,Hn=e,Ra=o),i=e.pendingLanes,i===0&&(Zn=null),J1(n.stateNode),nt(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_a)throw _a=!1,e=Rc,Rc=null,e;return Ra&1&&e.tag!==0&&co(),i=e.pendingLanes,i&1?e===Pc?pi++:(pi=0,Pc=e):pi=0,lr(),null}function co(){if(Hn!==null){var e=sg(Ra),t=Rt.transition,n=ee;try{if(Rt.transition=null,ee=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,Ra=0,Q&6)throw Error(R(331));var o=Q;for(Q|=4,z=e.current;z!==null;){var i=z,s=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:di(8,d,i)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var h=d.sibling,v=d.return;if(vv(d),d===c){z=null;break}if(h!==null){h.return=v,z=h;break}z=v}}}var g=i.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}z=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,z=s;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:di(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,z=x;break e}z=i.return}}var m=e.current;for(z=m;z!==null;){s=z;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,z=p;else e:for(s=m;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dl(9,l)}}catch(j){me(l,l.return,j)}if(l===s){z=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,z=w;break e}z=l.return}}if(Q=o,lr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{ee=n,Rt.transition=t}}return!1}function oh(e,t,n){t=vo(n,t),t=sv(e,t,1),e=Yn(e,t,1),t=He(),e!==null&&(Wi(e,1,t),nt(e,t))}function me(e,t,n){if(e.tag===3)oh(e,e,n);else for(;t!==null;){if(t.tag===3){oh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=vo(n,e),e=av(t,e,1),t=Yn(t,e,1),e=He(),t!==null&&(Wi(t,1,e),nt(t,e));break}}t=t.return}}function bb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Te&n)===n&&(ke===4||ke===3&&(Te&130023424)===Te&&500>ve()-Qd?_r(e,0):Kd|=n),nt(e,t)}function $v(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=He();e=Cn(e,t),e!==null&&(Wi(e,t,n),nt(e,n))}function Sb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$v(e,n)}function jb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),$v(e,n)}var _v;_v=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,cb(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,de&&t.flags&1048576&&Ng(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fs(e,t),e=t.pendingProps;var o=po(t,Fe.current);uo(t,n),o=Hd(null,t,r,e,o,n);var i=Wd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,xa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Md(t),o.updater=cl,t.stateNode=o,o._reactInternals=t,xc(t,r,e,n),t=bc(null,t,r,!0,i,n)):(t.tag=0,de&&i&&Nd(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cb(r),e=Vt(r,e),o){case 0:t=wc(null,t,r,e,n);break e;case 1:t=Jp(null,t,r,e,n);break e;case 11:t=qp(null,t,r,e,n);break e;case 14:t=Gp(null,t,r,Vt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),wc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Jp(e,t,r,o,n);case 3:e:{if(dv(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Dg(e,t),ja(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vo(Error(R(423)),t),t=Xp(e,t,r,n,o);break e}else if(r!==o){o=vo(Error(R(424)),t),t=Xp(e,t,r,n,o);break e}else for(gt=Qn(t.stateNode.containerInfo.firstChild),vt=t,de=!0,qt=null,n=Ag(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),r===o){t=En(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Mg(t),e===null&&mc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,cc(r,o)?s=null:i!==null&&cc(r,i)&&(t.flags|=32),cv(e,t),Ue(e,t,s,n),t.child;case 6:return e===null&&mc(t),null;case 13:return fv(e,t,n);case 4:return Fd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mo(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),qp(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,se(ba,r._currentValue),r._currentValue=s,i!==null)if(Kt(i.value,s)){if(i.children===o.children&&!et.current){t=En(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),gc(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,uo(t,n),o=Pt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=Vt(r,t.pendingProps),o=Vt(r.type,o),Gp(e,t,r,o,n);case 15:return lv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Fs(e,t),t.tag=1,tt(r)?(e=!0,xa(t)):e=!1,uo(t,n),iv(t,r,o),xc(t,r,o,n),bc(null,t,r,!0,e,n);case 19:return pv(e,t,n);case 22:return uv(e,t,n)}throw Error(R(156,t.tag))};function Rv(e,t){return ng(e,t)}function kb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new kb(e,t,n,r)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cb(e){if(typeof e=="function")return tf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wd)return 11;if(e===bd)return 14}return 2}function tr(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vs(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")tf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gr:return Rr(n.children,o,i,t);case yd:s=8,o|=8;break;case Uu:return e=_t(12,n,t,o|2),e.elementType=Uu,e.lanes=i,e;case Vu:return e=_t(13,n,t,o),e.elementType=Vu,e.lanes=i,e;case Hu:return e=_t(19,n,t,o),e.elementType=Hu,e.lanes=i,e;case M0:return pl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O0:s=10;break e;case D0:s=9;break e;case wd:s=11;break e;case bd:s=14;break e;case Mn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=_t(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Rr(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=_t(22,e,r,t),e.elementType=M0,e.lanes=n,e.stateNode={isHidden:!1},e}function hu(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function mu(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nf(e,t,n,r,o,i,s,l,u){return e=new Eb(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(i),e}function $b(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pv(e){if(!e)return ir;e=e._reactInternals;e:{if(Fr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(tt(n))return Pg(e,n,t)}return t}function Tv(e,t,n,r,o,i,s,l,u){return e=nf(n,r,!0,e,o,i,s,l,u),e.context=Pv(null),n=e.current,r=He(),o=er(n),i=Sn(r,o),i.callback=t??null,Yn(n,i,o),e.current.lanes=o,Wi(e,o,r),nt(e,r),e}function hl(e,t,n,r){var o=t.current,i=He(),s=er(o);return n=Pv(n),t.context===null?t.context=n:t.pendingContext=n,t=Sn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yn(o,t,s),e!==null&&(Jt(e,o,s,i),Os(e,o,s)),s}function Ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rf(e,t){ih(e,t),(e=e.alternate)&&ih(e,t)}function _b(){return null}var Nv=typeof reportError=="function"?reportError:function(e){console.error(e)};function of(e){this._internalRoot=e}ml.prototype.render=of.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));hl(e,t,null,null)};ml.prototype.unmount=of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ar(function(){hl(null,e,null,null)}),t[kn]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=ug();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&dg(e)}};function sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sh(){}function Rb(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ta(s);i.call(c)}}var s=Tv(t,r,e,0,null,!1,!1,"",sh);return e._reactRootContainer=s,e[kn]=s.current,$i(e.nodeType===8?e.parentNode:e),Ar(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Ta(u);l.call(c)}}var u=nf(e,0,!1,null,null,!1,!1,"",sh);return e._reactRootContainer=u,e[kn]=u.current,$i(e.nodeType===8?e.parentNode:e),Ar(function(){hl(t,u,n,r)}),u}function vl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var u=Ta(s);l.call(u)}}hl(t,s,e,o)}else s=Rb(n,t,e,o,r);return Ta(s)}ag=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xo(t.pendingLanes);n!==0&&(kd(t,n|1),nt(t,ve()),!(Q&6)&&(xo=ve()+500,lr()))}break;case 13:Ar(function(){var r=Cn(e,1);if(r!==null){var o=He();Jt(r,e,1,o)}}),rf(e,1)}};Cd=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=He();Jt(t,e,134217728,n)}rf(e,134217728)}};lg=function(e){if(e.tag===13){var t=er(e),n=Cn(e,t);if(n!==null){var r=He();Jt(n,e,t,r)}rf(e,t)}};ug=function(){return ee};cg=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ec=function(e,t,n){switch(t){case"input":if(Gu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=al(r);if(!o)throw Error(R(90));B0(r),Gu(r,o)}}}break;case"textarea":V0(e,n);break;case"select":t=n.value,t!=null&&io(e,!!n.multiple,t,!1)}};K0=Yd;Q0=Ar;var Pb={usingClientEntryPoint:!1,Events:[Gi,Qr,al,J0,X0,Yd]},Ho={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tb={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||_b,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{rl=Ss.inject(Tb),un=Ss}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pb;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(t))throw Error(R(200));return $b(e,t,null,n)};wt.createRoot=function(e,t){if(!sf(e))throw Error(R(299));var n=!1,r="",o=Nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nf(e,1,!1,null,null,n,!1,r,o),e[kn]=t.current,$i(e.nodeType===8?e.parentNode:e),new of(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=eg(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Ar(e)};wt.hydrate=function(e,t,n){if(!gl(t))throw Error(R(200));return vl(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!sf(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Nv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tv(t,null,e,1,n??null,o,!1,i,s),e[kn]=t.current,$i(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ml(t)};wt.render=function(e,t,n){if(!gl(t))throw Error(R(200));return vl(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!gl(e))throw Error(R(40));return e._reactRootContainer?(Ar(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};wt.unstable_batchedUpdates=Yd;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return vl(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iv)}catch(e){console.error(e)}}Iv(),I0.exports=wt;var Nb=I0.exports,zv,ah=Nb;zv=ah.createRoot,ah.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}var Wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wn||(Wn={}));const lh="popstate";function Ib(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Ic("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Na(o)}return Lb(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zb(){return Math.random().toString(36).substr(2,8)}function uh(e,t){return{usr:e.state,key:e.key,idx:t}}function Ic(e,t,n,r){return n===void 0&&(n=null),Ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_o(t):t,{state:n,key:t&&t.key||r||zb()})}function Na(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _o(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lb(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Wn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Ai({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=Wn.Pop;let b=d(),x=b==null?null:b-c;c=b,u&&u({action:l,location:S.location,delta:x})}function h(b,x){l=Wn.Push;let m=Ic(S.location,b,x);c=d()+1;let p=uh(m,c),w=S.createHref(m);try{s.pushState(p,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(w)}i&&u&&u({action:l,location:S.location,delta:1})}function v(b,x){l=Wn.Replace;let m=Ic(S.location,b,x);c=d();let p=uh(m,c),w=S.createHref(m);s.replaceState(p,"",w),i&&u&&u({action:l,location:S.location,delta:0})}function g(b){let x=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof b=="string"?b:Na(b);return m=m.replace(/ $/,"%20"),xe(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let S={get action(){return l},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(lh,f),u=b,()=>{o.removeEventListener(lh,f),u=null}},createHref(b){return t(o,b)},createURL:g,encodeLocation(b){let x=g(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:v,go(b){return s.go(b)}};return S}var ch;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ch||(ch={}));function Ab(e,t,n){return n===void 0&&(n="/"),Ob(e,t,n,!1)}function Ob(e,t,n,r){let o=typeof t=="string"?_o(t):t,i=af(o.pathname||"/",n);if(i==null)return null;let s=Av(e);Db(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=Xb(i);l=Gb(s[u],c,r)}return l}function Av(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=nr([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Av(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Wb(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let u of Ov(i.path))o(i,s,u)}),t}function Ov(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Ov(r.join("/")),l=[];return l.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Db(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mb=/^:[\w-]+$/,Fb=3,Bb=2,Ub=1,Vb=10,Hb=-2,dh=e=>e==="*";function Wb(e,t){let n=e.split("/"),r=n.length;return n.some(dh)&&(r+=Hb),t&&(r+=Bb),n.filter(o=>!dh(o)).reduce((o,i)=>o+(Mb.test(i)?Fb:i===""?Ub:Vb),r)}function qb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Gb(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=fh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),h=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=fh({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:nr([i,f.pathname]),pathnameBase:Zb(nr([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=nr([i,f.pathnameBase]))}return s}function fh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let S=l[f]||"";s=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const g=l[f];return v&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Jb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Xb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function af(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?_o(e):e;return{pathname:n?n.startsWith("/")?n:Qb(n,t):t,search:eS(r),hash:tS(o)}}function Qb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lf(e,t){let n=Yb(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=_o(e):(o=Ai({},e),xe(!o.pathname||!o.pathname.includes("?"),gu("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),gu("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),gu("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}l=f>=0?t[f]:"/"}let u=Kb(o,l),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),Zb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),eS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dv=["post","put","patch","delete"];new Set(Dv);const rS=["get",...Dv];new Set(rS);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}const cf=y.createContext(null),oS=y.createContext(null),ur=y.createContext(null),xl=y.createContext(null),dn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Mv=y.createContext(null);function iS(e,t){let{relative:n}=t===void 0?{}:t;Ro()||xe(!1);let{basename:r,navigator:o}=y.useContext(ur),{hash:i,pathname:s,search:l}=Bv(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:nr([r,s])),o.createHref({pathname:u,search:l,hash:i})}function Ro(){return y.useContext(xl)!=null}function Xi(){return Ro()||xe(!1),y.useContext(xl).location}function Fv(e){y.useContext(ur).static||y.useLayoutEffect(e)}function ge(){let{isDataRoute:e}=y.useContext(dn);return e?wS():sS()}function sS(){Ro()||xe(!1);let e=y.useContext(cf),{basename:t,future:n,navigator:r}=y.useContext(ur),{matches:o}=y.useContext(dn),{pathname:i}=Xi(),s=JSON.stringify(lf(o,n.v7_relativeSplatPath)),l=y.useRef(!1);return Fv(()=>{l.current=!0}),y.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=uf(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:nr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}const aS=y.createContext(null);function lS(e){let t=y.useContext(dn).outlet;return t&&y.createElement(aS.Provider,{value:e},t)}function cr(){let{matches:e}=y.useContext(dn),t=e[e.length-1];return t?t.params:{}}function Bv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(ur),{matches:o}=y.useContext(dn),{pathname:i}=Xi(),s=JSON.stringify(lf(o,r.v7_relativeSplatPath));return y.useMemo(()=>uf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function uS(e,t){return cS(e,t)}function cS(e,t,n,r){Ro()||xe(!1);let{navigator:o}=y.useContext(ur),{matches:i}=y.useContext(dn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Xi(),d;if(t){var f;let b=typeof t=="string"?_o(t):t;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||xe(!1),d=b}else d=c;let h=d.pathname||"/",v=h;if(u!=="/"){let b=u.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=Ab(e,{pathname:v}),S=mS(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:nr([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:nr([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&S?y.createElement(xl.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Wn.Pop}},S):S}function dS(){let e=yS(),t=nS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const fS=y.createElement(dS,null);class pS extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(dn.Provider,{value:this.props.routeContext},y.createElement(Mv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hS(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(cf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(dn.Provider,{value:t},r)}function mS(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||xe(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=n,g=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||g){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let v,g=!1,S=null,b=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,S=f.route.errorElement||fS,u&&(c<0&&h===0?(g=!0,b=null):c===h&&(g=!0,b=f.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,h+1)),m=()=>{let p;return v?p=S:g?p=b:f.route.Component?p=y.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,y.createElement(hS,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(pS,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var Uv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Uv||{}),Ia=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ia||{});function gS(e){let t=y.useContext(cf);return t||xe(!1),t}function vS(e){let t=y.useContext(oS);return t||xe(!1),t}function xS(e){let t=y.useContext(dn);return t||xe(!1),t}function Vv(e){let t=xS(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function yS(){var e;let t=y.useContext(Mv),n=vS(Ia.UseRouteError),r=Vv(Ia.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wS(){let{router:e}=gS(Uv.UseNavigateStable),t=Vv(Ia.UseNavigateStable),n=y.useRef(!1);return Fv(()=>{n.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Oi({fromRouteId:t},i)))},[e,t])}function bS(e){let{to:t,replace:n,state:r,relative:o}=e;Ro()||xe(!1);let{future:i,static:s}=y.useContext(ur),{matches:l}=y.useContext(dn),{pathname:u}=Xi(),c=ge(),d=uf(t,lf(l,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(d);return y.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function SS(e){return lS(e.context)}function q(e){xe(!1)}function jS(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Wn.Pop,navigator:i,static:s=!1,future:l}=e;Ro()&&xe(!1);let u=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:u,navigator:i,static:s,future:Oi({v7_relativeSplatPath:!1},l)}),[u,l,i,s]);typeof r=="string"&&(r=_o(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:g="default"}=r,S=y.useMemo(()=>{let b=af(d,u);return b==null?null:{location:{pathname:b,search:f,hash:h,state:v,key:g},navigationType:o}},[u,d,f,h,v,g,o]);return S==null?null:y.createElement(ur.Provider,{value:c},y.createElement(xl.Provider,{children:n,value:S}))}function kS(e){let{children:t,location:n}=e;return uS(zc(t),n)}new Promise(()=>{});function zc(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...t,o];if(r.type===y.Fragment){n.push.apply(n,zc(r.props.children,i));return}r.type!==q&&xe(!1),!r.props.index||!r.props.children||xe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=zc(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lc.apply(this,arguments)}function CS(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ES(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $S(e,t){return e.button===0&&(!t||t==="_self")&&!ES(e)}const _S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RS="6";try{window.__reactRouterVersion=RS}catch{}const PS="startTransition",ph=b1[PS];function TS(e){let{basename:t,children:n,future:r,window:o}=e,i=y.useRef();i.current==null&&(i.current=Ib({window:o,v5Compat:!0}));let s=i.current,[l,u]=y.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&ph?ph(()=>u(f)):u(f)},[u,c]);return y.useLayoutEffect(()=>s.listen(d),[s,d]),y.createElement(jS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const NS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,h=CS(t,_S),{basename:v}=y.useContext(ur),g,S=!1;if(typeof c=="string"&&IS.test(c)&&(g=c,NS))try{let p=new URL(window.location.href),w=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=af(w.pathname,v);w.origin===p.origin&&j!=null?c=j+w.search+w.hash:S=!0}catch{}let b=iS(c,{relative:o}),x=zS(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:o,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||x(p)}return y.createElement("a",Lc({},h,{href:g||b,onClick:S||i?r:m,ref:n,target:u}))});var hh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hh||(hh={}));var mh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mh||(mh={}));function zS(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,u=ge(),c=Xi(),d=Bv(e,{relative:s});return y.useCallback(f=>{if($S(f,n)){f.preventDefault();let h=r!==void 0?r:Na(c)===Na(d);u(e,{replace:h,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[c,u,d,r,o,n,e,i,s,l])}var Me=function(){return Me=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Me.apply(this,arguments)};function yo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var le="-ms-",hi="-moz-",Y="-webkit-",Hv="comm",yl="rule",df="decl",LS="@import",Wv="@keyframes",AS="@layer",qv=Math.abs,ff=String.fromCharCode,Ac=Object.assign;function OS(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function Gv(e){return e.trim()}function vn(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Hs(e,t,n){return e.indexOf(t,n)}function Ee(e,t){return e.charCodeAt(t)|0}function wo(e,t,n){return e.slice(t,n)}function on(e){return e.length}function Jv(e){return e.length}function Qo(e,t){return t.push(e),e}function DS(e,t){return e.map(t).join("")}function gh(e,t){return e.filter(function(n){return!vn(n,t)})}var wl=1,bo=1,Xv=0,Nt=0,we=0,Po="";function bl(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:wl,column:bo,length:s,return:"",siblings:l}}function An(e,t){return Ac(bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vr(e){for(;e.root;)e=An(e.root,{children:[e]});Qo(e,e.siblings)}function MS(){return we}function FS(){return we=Nt>0?Ee(Po,--Nt):0,bo--,we===10&&(bo=1,wl--),we}function Xt(){return we=Nt<Xv?Ee(Po,Nt++):0,bo++,we===10&&(bo=1,wl++),we}function Pr(){return Ee(Po,Nt)}function Ws(){return Nt}function Sl(e,t){return wo(Po,e,t)}function Oc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BS(e){return wl=bo=1,Xv=on(Po=e),Nt=0,[]}function US(e){return Po="",e}function vu(e){return Gv(Sl(Nt-1,Dc(e===91?e+2:e===40?e+1:e)))}function VS(e){for(;(we=Pr())&&we<33;)Xt();return Oc(e)>2||Oc(we)>3?"":" "}function HS(e,t){for(;--t&&Xt()&&!(we<48||we>102||we>57&&we<65||we>70&&we<97););return Sl(e,Ws()+(t<6&&Pr()==32&&Xt()==32))}function Dc(e){for(;Xt();)switch(we){case e:return Nt;case 34:case 39:e!==34&&e!==39&&Dc(we);break;case 40:e===41&&Dc(e);break;case 92:Xt();break}return Nt}function WS(e,t){for(;Xt()&&e+we!==57;)if(e+we===84&&Pr()===47)break;return"/*"+Sl(t,Nt-1)+"*"+ff(e===47?e:Xt())}function qS(e){for(;!Oc(Pr());)Xt();return Sl(e,Nt)}function GS(e){return US(qs("",null,null,null,[""],e=BS(e),0,[0],e))}function qs(e,t,n,r,o,i,s,l,u){for(var c=0,d=0,f=s,h=0,v=0,g=0,S=1,b=1,x=1,m=0,p="",w=o,j=i,C=r,$=p;b;)switch(g=m,m=Xt()){case 40:if(g!=108&&Ee($,f-1)==58){Hs($+=U(vu(m),"&","&\f"),"&\f",qv(c?l[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:$+=vu(m);break;case 9:case 10:case 13:case 32:$+=VS(g);break;case 92:$+=HS(Ws()-1,7);continue;case 47:switch(Pr()){case 42:case 47:Qo(JS(WS(Xt(),Ws()),t,n,u),u);break;default:$+="/"}break;case 123*S:l[c++]=on($)*x;case 125*S:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+d:x==-1&&($=U($,/\f/g,"")),v>0&&on($)-f&&Qo(v>32?xh($+";",r,n,f-1,u):xh(U($," ","")+";",r,n,f-2,u),u);break;case 59:$+=";";default:if(Qo(C=vh($,t,n,c,d,o,l,p,w=[],j=[],f,i),i),m===123)if(d===0)qs($,t,C,C,w,i,f,l,j);else switch(h===99&&Ee($,3)===110?100:h){case 100:case 108:case 109:case 115:qs(e,C,C,r&&Qo(vh(e,C,C,0,0,o,l,p,o,w=[],f,j),j),o,j,f,l,r?w:j);break;default:qs($,C,C,C,[""],j,0,l,j)}}c=d=v=0,S=x=1,p=$="",f=s;break;case 58:f=1+on($),v=g;default:if(S<1){if(m==123)--S;else if(m==125&&S++==0&&FS()==125)continue}switch($+=ff(m),m*S){case 38:x=d>0?1:($+="\f",-1);break;case 44:l[c++]=(on($)-1)*x,x=1;break;case 64:Pr()===45&&($+=vu(Xt())),h=Pr(),d=f=on(p=$+=qS(Ws())),m++;break;case 45:g===45&&on($)==2&&(S=0)}}return i}function vh(e,t,n,r,o,i,s,l,u,c,d,f){for(var h=o-1,v=o===0?i:[""],g=Jv(v),S=0,b=0,x=0;S<r;++S)for(var m=0,p=wo(e,h+1,h=qv(b=s[S])),w=e;m<g;++m)(w=Gv(b>0?v[m]+" "+p:U(p,/&\f/g,v[m])))&&(u[x++]=w);return bl(e,t,n,o===0?yl:l,u,c,d,f)}function JS(e,t,n,r){return bl(e,t,n,Hv,ff(MS()),wo(e,2,-2),0,r)}function xh(e,t,n,r,o){return bl(e,t,n,df,wo(e,0,r),wo(e,r+1,-1),r,o)}function Kv(e,t,n){switch(OS(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+hi+e+le+e+e;case 5936:switch(Ee(e,t+11)){case 114:return Y+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+le+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+le+e+e;case 6165:return Y+e+le+"flex-"+e+e;case 5187:return Y+e+U(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return Y+e+le+"flex-item-"+U(e,/flex-|-self/g,"")+(vn(e,/flex-|baseline/)?"":le+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Y+e+le+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+le+U(e,"shrink","negative")+e;case 5292:return Y+e+le+U(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+U(e,"-grow","")+Y+e+le+U(e,"grow","positive")+e;case 4554:return Y+U(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!vn(e,/flex-|baseline/))return le+"grid-column-align"+wo(e,t)+e;break;case 2592:case 3360:return le+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vn(r.props,/grid-\w+-end/)})?~Hs(e+(n=n[t].value),"span",0)?e:le+U(e,"-start","")+e+le+"grid-row-span:"+(~Hs(n,"span",0)?vn(n,/\d+/):+vn(n,/\d+/)-+vn(e,/\d+/))+";":le+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vn(r.props,/grid-\w+-start/)})?e:le+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+hi+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hs(e,"stretch",0)?Kv(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,u,c){return le+o+":"+i+c+(s?le+o+"-span:"+(l?u:+u-+i)+c:"")+e});case 4949:if(Ee(e,t+6)===121)return U(e,":",":"+Y)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(Ee(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+le+"$2box$3")+e;case 100:return U(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function za(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function XS(e,t,n,r){switch(e.type){case AS:if(e.children.length)break;case LS:case df:return e.return=e.return||e.value;case Hv:return"";case Wv:return e.return=e.value+"{"+za(e.children,r)+"}";case yl:if(!on(e.value=e.props.join(",")))return""}return on(n=za(e.children,r))?e.return=e.value+"{"+n+"}":""}function KS(e){var t=Jv(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function QS(e){return function(t){t.root||(t=t.return)&&e(t)}}function YS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case df:e.return=Kv(e.value,e.length,n);return;case Wv:return za([An(e,{value:U(e.value,"@","@"+Y)})],r);case yl:if(e.length)return DS(n=e.props,function(o){switch(vn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vr(An(e,{props:[U(o,/:(read-\w+)/,":"+hi+"$1")]})),Vr(An(e,{props:[o]})),Ac(e,{props:gh(n,r)});break;case"::placeholder":Vr(An(e,{props:[U(o,/:(plac\w+)/,":"+Y+"input-$1")]})),Vr(An(e,{props:[U(o,/:(plac\w+)/,":"+hi+"$1")]})),Vr(An(e,{props:[U(o,/:(plac\w+)/,le+"input-$1")]})),Vr(An(e,{props:[o]})),Ac(e,{props:gh(n,r)});break}return""})}}var ZS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},So=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",Qv="active",Yv="data-styled-version",jl="6.1.13",pf=`/*!sc*/
`,La=typeof window<"u"&&"HTMLElement"in window,ej=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),tj={},kl=Object.freeze([]),jo=Object.freeze({});function Zv(e,t,n){return n===void 0&&(n=jo),e.theme!==n.theme&&e.theme||t||n.theme}var ex=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rj=/(^-|-$)/g;function yh(e){return e.replace(nj,"-").replace(rj,"")}var oj=/(a)(d)/gi,js=52,wh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mc(e){var t,n="";for(t=Math.abs(e);t>js;t=t/js|0)n=wh(t%js)+n;return(wh(t%js)+n).replace(oj,"$1-$2")}var xu,tx=5381,oo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nx=function(e){return oo(tx,e)};function hf(e){return Mc(nx(e)>>>0)}function ij(e){return e.displayName||e.name||"Component"}function yu(e){return typeof e=="string"&&!0}var rx=typeof Symbol=="function"&&Symbol.for,ox=rx?Symbol.for("react.memo"):60115,sj=rx?Symbol.for("react.forward_ref"):60112,aj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ix={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uj=((xu={})[sj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xu[ox]=ix,xu);function bh(e){return("type"in(t=e)&&t.type.$$typeof)===ox?ix:"$$typeof"in e?uj[e.$$typeof]:aj;var t}var cj=Object.defineProperty,dj=Object.getOwnPropertyNames,Sh=Object.getOwnPropertySymbols,fj=Object.getOwnPropertyDescriptor,pj=Object.getPrototypeOf,jh=Object.prototype;function sx(e,t,n){if(typeof t!="string"){if(jh){var r=pj(t);r&&r!==jh&&sx(e,r,n)}var o=dj(t);Sh&&(o=o.concat(Sh(t)));for(var i=bh(e),s=bh(t),l=0;l<o.length;++l){var u=o[l];if(!(u in lj||n&&n[u]||s&&u in s||i&&u in i)){var c=fj(t,u);try{cj(e,u,c)}catch{}}}}return e}function ko(e){return typeof e=="function"}function mf(e){return typeof e=="object"&&"styledComponentId"in e}function kr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Aa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fc(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fc(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=Fc(e[r],t[r]);return e}function gf(e,t){Object.defineProperty(e,"toString",{value:t})}function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ki(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(pf);return n},e}(),Gs=new Map,Oa=new Map,Js=1,ks=function(e){if(Gs.has(e))return Gs.get(e);for(;Oa.has(Js);)Js++;var t=Js++;return Gs.set(e,t),Oa.set(t,e),t},mj=function(e,t){Js=t+1,Gs.set(e,t),Oa.set(t,e)},gj="style[".concat(So,"][").concat(Yv,'="').concat(jl,'"]'),vj=new RegExp("^".concat(So,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xj=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},yj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(pf),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var u=l.match(vj);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(mj(d,c),xj(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},kh=function(e){for(var t=document.querySelectorAll(gj),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(So)!==Qv&&(yj(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function wj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ax=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(So,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(So,Qv),r.setAttribute(Yv,jl);var s=wj();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},bj=function(){function e(t){this.element=ax(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Ki(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sj=function(){function e(t){this.element=ax(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ch=La,kj={isServer:!La,useCSSOMInjection:!ej},Da=function(){function e(t,n,r){t===void 0&&(t=jo),n===void 0&&(n={});var o=this;this.options=Me(Me({},kj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&La&&Ch&&(Ch=!1,kh(this)),gf(this,function(){return function(i){for(var s=i.getTag(),l=s.length,u="",c=function(f){var h=function(x){return Oa.get(x)}(f);if(h===void 0)return"continue";var v=i.names.get(h),g=s.getGroup(f);if(v===void 0||!v.size||g.length===0)return"continue";var S="".concat(So,".g").concat(f,'[id="').concat(h,'"]'),b="";v!==void 0&&v.forEach(function(x){x.length>0&&(b+="".concat(x,","))}),u+="".concat(g).concat(S,'{content:"').concat(b,'"}').concat(pf)},d=0;d<l;d++)c(d);return u}(o)})}return e.registerId=function(t){return ks(t)},e.prototype.rehydrate=function(){!this.server&&La&&kh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Me(Me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new jj(o):r?new bj(o):new Sj(o)}(this.options),new hj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ks(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ks(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ks(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cj=/&/g,Ej=/^\s*\/\/.*$/gm;function lx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lx(n.children,t)),n})}function $j(e){var t,n,r,o=jo,i=o.options,s=i===void 0?jo:i,l=o.plugins,u=l===void 0?kl:l,c=function(h,v,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},d=u.slice();d.push(function(h){h.type===yl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Cj,n).replace(r,c))}),s.prefix&&d.push(YS),d.push(XS);var f=function(h,v,g,S){v===void 0&&(v=""),g===void 0&&(g=""),S===void 0&&(S="&"),t=S,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(Ej,""),x=GS(g||v?"".concat(g," ").concat(v," { ").concat(b," }"):b);s.namespace&&(x=lx(x,s.namespace));var m=[];return za(x,KS(d.concat(QS(function(p){return m.push(p)})))),m};return f.hash=u.length?u.reduce(function(h,v){return v.name||Ki(15),oo(h,v.name)},tx).toString():"",f}var _j=new Da,Bc=$j(),ux=Pe.createContext({shouldForwardProp:void 0,styleSheet:_j,stylis:Bc});ux.Consumer;Pe.createContext(void 0);function Uc(){return y.useContext(ux)}var cx=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Bc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gf(this,function(){throw Ki(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bc),this.name+t.hash},e}(),Rj=function(e){return e>="A"&&e<="Z"};function Eh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Rj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dx=function(e){return e==null||e===!1||e===""},fx=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!dx(i)&&(Array.isArray(i)&&i.isCss||ko(i)?r.push("".concat(Eh(o),":"),i,";"):Di(i)?r.push.apply(r,yo(yo(["".concat(o," {")],fx(i),!1),["}"],!1)):r.push("".concat(Eh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ZS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rr(e,t,n,r){if(dx(e))return[];if(mf(e))return[".".concat(e.styledComponentId)];if(ko(e)){if(!ko(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return rr(o,t,n,r)}var i;return e instanceof cx?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?fx(e):Array.isArray(e)?Array.prototype.concat.apply(kl,e.map(function(s){return rr(s,t,n,r)})):[e.toString()]}function px(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ko(n)&&!mf(n))return!1}return!0}var Pj=nx(jl),Tj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&px(t),this.componentId=n,this.baseHash=oo(Pj,n),this.baseStyle=r,Da.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=kr(o,this.staticRulesId);else{var i=Aa(rr(this.rules,t,n,r)),s=Mc(oo(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=kr(o,s),this.staticRulesId=s}else{for(var u=oo(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var h=Aa(rr(f,t,n,r));u=oo(u,h+d),c+=h}}if(c){var v=Mc(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),o=kr(o,v)}}return o},e}(),vf=Pe.createContext(void 0);vf.Consumer;var wu={};function Nj(e,t,n){var r=mf(e),o=e,i=!yu(e),s=t.attrs,l=s===void 0?kl:s,u=t.componentId,c=u===void 0?function(w,j){var C=typeof w!="string"?"sc":yh(w);wu[C]=(wu[C]||0)+1;var $="".concat(C,"-").concat(hf(jl+C+wu[C]));return j?"".concat(j,"-").concat($):$}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(w){return yu(w)?"styled.".concat(w):"Styled(".concat(ij(w),")")}(e):d,h=t.displayName&&t.componentId?"".concat(yh(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(w,j){return S(w,j)&&b(w,j)}}else g=S}var x=new Tj(n,h,r?o.componentStyle:void 0);function m(w,j){return function(C,$,E){var A=C.attrs,O=C.componentStyle,te=C.defaultProps,Se=C.foldedComponentIds,N=C.styledComponentId,ye=C.target,dr=Pe.useContext(vf),pn=Uc(),Ot=C.shouldForwardProp||pn.shouldForwardProp,I=Zv($,dr,te)||jo,D=function(Tn,st,hn){for(var Ao,pr=Me(Me({},st),{className:void 0,theme:hn}),Vl=0;Vl<Tn.length;Vl+=1){var is=ko(Ao=Tn[Vl])?Ao(pr):Ao;for(var Nn in is)pr[Nn]=Nn==="className"?kr(pr[Nn],is[Nn]):Nn==="style"?Me(Me({},pr[Nn]),is[Nn]):is[Nn]}return st.className&&(pr.className=kr(pr.className,st.className)),pr}(A,$,I),M=D.as||ye,ne={};for(var re in D)D[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&D.theme===I||(re==="forwardedAs"?ne.as=D.forwardedAs:Ot&&!Ot(re,M)||(ne[re]=D[re]));var fr=function(Tn,st){var hn=Uc(),Ao=Tn.generateAndInjectStyles(st,hn.styleSheet,hn.stylis);return Ao}(O,D),Dt=kr(Se,N);return fr&&(Dt+=" "+fr),D.className&&(Dt+=" "+D.className),ne[yu(M)&&!ex.has(M)?"class":"className"]=Dt,ne.ref=E,y.createElement(M,ne)}(p,w,j)}m.displayName=f;var p=Pe.forwardRef(m);return p.attrs=v,p.componentStyle=x,p.displayName=f,p.shouldForwardProp=g,p.foldedComponentIds=r?kr(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(j){for(var C=[],$=1;$<arguments.length;$++)C[$-1]=arguments[$];for(var E=0,A=C;E<A.length;E++)Fc(j,A[E],!0);return j}({},o.defaultProps,w):w}}),gf(p,function(){return".".concat(p.styledComponentId)}),i&&sx(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function $h(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var _h=function(e){return Object.assign(e,{isCss:!0})};function xf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ko(e)||Di(e))return _h(rr($h(kl,yo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rr(r):_h(rr($h(r,t)))}function Vc(e,t,n){if(n===void 0&&(n=jo),!t)throw Ki(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,xf.apply(void 0,yo([o],i,!1)))};return r.attrs=function(o){return Vc(e,t,Me(Me({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Vc(e,t,Me(Me({},n),o))},r}var hx=function(e){return Vc(Nj,e)},k=hx;ex.forEach(function(e){k[e]=hx(e)});var Ij=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=px(t),Da.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Aa(rr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Da.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function zj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=xf.apply(void 0,yo([e],t,!1)),o="sc-global-".concat(hf(JSON.stringify(r))),i=new Ij(r,o),s=function(u){var c=Uc(),d=Pe.useContext(vf),f=Pe.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),Pe.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,h){if(i.isStatic)i.renderStyles(u,tj,d,h);else{var v=Me(Me({},c),{theme:Zv(c,f,s.defaultProps)});i.renderStyles(u,v,d,h)}}return Pe.memo(s)}function fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Aa(xf.apply(void 0,yo([e],t,!1))),o=hf(r);return new cx(o,r)}var mx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rh=Pe.createContext&&Pe.createContext(mx),Lj=["attr","size","title"];function Aj(e,t){if(e==null)return{};var n=Oj(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function Ph(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Fa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ph(Object(n),!0).forEach(function(r){Dj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ph(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dj(e,t,n){return t=Mj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mj(e){var t=Fj(e,"string");return typeof t=="symbol"?t:t+""}function Fj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gx(e){return e&&e.map((t,n)=>Pe.createElement(t.tag,Fa({key:n},t.attr),gx(t.child)))}function Ge(e){return t=>Pe.createElement(Bj,Ma({attr:Fa({},e.attr)},t),gx(e.child))}function Bj(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=Aj(e,Lj),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Pe.createElement("svg",Ma({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Fa(Fa({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Pe.createElement("title",null,i),e.children)};return Rh!==void 0?Pe.createElement(Rh.Consumer,null,n=>t(n)):t(mx)}function Uj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Vj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Hj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Wj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function qj(e){return Ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(e)}function yf(){return a.jsxs(Gj,{children:[a.jsxs(Jj,{children:[a.jsxs(Xj,{children:[a.jsx("h3",{children:"Contáctanos"}),a.jsxs("p",{children:[a.jsx(qj,{})," +123 456 789"]}),a.jsxs("p",{children:[a.jsx(Wj,{})," info@ministerio.com"]})]}),a.jsxs(Kj,{children:[a.jsx("h3",{children:"Dirección"}),a.jsx("p",{children:"República de Líbano entre Crisóstomo Álvarez y Juan Bautista Alberdi"}),a.jsx("p",{children:"Monteros, Tucumán, Argentina"})]}),a.jsxs(Qj,{children:[a.jsx("h3",{children:"Síguenos"}),a.jsxs(Yj,{children:[a.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Uj,{})}),a.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Vj,{})}),a.jsx("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Hj,{})})]})]})]}),a.jsx(Zj,{children:a.jsx("iframe",{title:"Ubicación",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4510185355699!2d-65.5108781075702!3d-27.162454067142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942235328d23ecd7%3A0xfd18499085cb2d3!2sCentro%20Cristiano%20R%C3%ADos%20de%20Vida!5e0!3m2!1ses-419!2sar!4v1734071122347!5m2!1ses-419!2sar",width:"100%",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),a.jsx(ek,{children:a.jsx("p",{children:"© 2024 Ministerio Ríos de Vida. Todos los derechos reservados."})})]})}const Gj=k.footer`
  background: #0a285c;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`,Jj=k.div`
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
`,Xj=k.div`
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
`,Yj=k.div`
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
`,Zj=k.div`
  margin: 20px 0;
  iframe {
    border-radius: 10px;
  }
`,ek=k.div`
  padding: 10px;
  background: #1e3c72;

  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
  }
`,tk=()=>{const[e,t]=y.useState(!1),n=y.useRef(null);return y.useEffect(()=>{const r=()=>{if(n.current){const o=n.current.getBoundingClientRect().top,i=window.innerHeight;o<i-100&&t(!0)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),a.jsx(ok,{ref:n,children:a.jsxs(wf,{isVisible:e,children:[a.jsx(ik,{isVisible:e,children:"Bienvenidos a Casa"}),a.jsx(sk,{isVisible:e,children:"Nos complace recibirte en nuestro Centro Cristiano. Estamos aquí para ayudarte a crecer en tu fe y experimentar una comunidad amorosa y acogedora."})]})})},nk=fn`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,rk=fn`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,ok=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
`,wf=k.div`
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
`,ik=k.h1`
  font-size: 4rem;
  color: #0077b6;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?nk:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3);

  ${wf}:hover & {
    color: white;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`,sk=k.p`
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 600px;
  margin-top: 1rem;
  opacity: ${({isVisible:e})=>e?1:0};
  animation: ${({isVisible:e})=>e?rk:""} 0.8s ease forwards;
  transition: opacity 0.5s ease, color 0.3s ease;

  ${wf}:hover & {
    color: #00a0f6;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`,bf=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1);y.useEffect(()=>{const s=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=()=>r(!n),i=s=>{const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})};return a.jsxs(ak,{scrolled:e,children:[a.jsx(lk,{scrolled:e,children:a.jsx("a",{href:"/",children:"Ríos de Vida"})}),a.jsxs(uk,{onClick:o,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs(ck,{menuOpen:n,children:[a.jsx(Wo,{as:"button",onClick:()=>i("grupoDeVida"),scrolled:e,children:"Grupos"}),a.jsx(Wo,{as:"button",onClick:()=>i("servicios"),scrolled:e,children:"Servicios"}),a.jsx(Wo,{children:a.jsx(W,{to:"/eventos",children:"Eventos"})}),a.jsx(Wo,{children:a.jsx(W,{to:"/jovenes",children:"Mas Sobre Nosotros"})}),a.jsx(Wo,{children:a.jsx(W,{to:"/notas",children:"Notas"})}),a.jsx(dk,{children:a.jsx(W,{to:"/login",children:"Login"})})]})]})},ak=k.header`
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
`,Wo=k.button`
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
`,fk=fn`
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
`,Cl=()=>{const e=Array.from({length:50},(t,n)=>a.jsx(hk,{bottom:`${Math.random()*100}%`,left:`${Math.random()*100}%`,size:`${Math.random()*25+10}px`,duration:`${Math.random()*5+5}s`,opacity:Math.random()*.5+.3},n));return a.jsx(pk,{children:e})};var Xs={},Hc;Object.defineProperty(Xs,"__esModule",{value:!0});var Yo=a,Zt=y,Ht=function(){return Ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ht.apply(this,arguments)};function mk(e,t){var n,r;switch(t.type){case"TYPE":return Ht(Ht({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return Ht(Ht({},e),{speed:t.payload});case"DELETE":return Ht(Ht({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return Ht(Ht({},e),{count:e.count+1});default:return e}}var Th=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.onLoopDone,h=e.onType,v=e.onDelete,g=e.onDelay,S=Zt.useReducer(mk,{speed:s,text:"",count:0}),b=S[0],x=b.speed,m=b.text,p=b.count,w=S[1],j=Zt.useRef(0),C=Zt.useRef(!1),$=Zt.useRef(!1),E=Zt.useRef(!1),A=Zt.useRef(!1),O=Zt.useCallback(function(){var te=p%n.length,Se=n[te];$.current?(w({type:"DELETE",payload:Se,speed:u}),m===""&&($.current=!1,w({type:"COUNT"}))):(w({type:"TYPE",payload:Se,speed:s}),E.current=!0,m===Se&&(w({type:"DELAY",payload:d}),E.current=!1,A.current=!0,setTimeout(function(){A.current=!1,$.current=!0},d),o>0&&(j.current+=1,j.current/n.length===o&&(A.current=!1,C.current=!0)))),E.current&&h&&h(j.current),$.current&&v&&v(),A.current&&g&&g()},[p,d,u,o,s,n,m,h,v,g]);return Zt.useEffect(function(){var te=setTimeout(O,x);return C.current&&clearTimeout(te),function(){return clearTimeout(te)}},[O,x]),Zt.useEffect(function(){f&&C.current&&f()},[f]),[m,{isType:E.current,isDelay:A.current,isDelete:$.current,isDone:C.current}]},gk="styles-module_blinkingCursor__yugAC",vk="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Nh=Zt.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,o=r===void 0?"|":r,i=e.cursorColor,s=i===void 0?"inherit":i;return Yo.jsx("span",Ht({style:{color:s},className:"".concat(gk," ").concat(n?vk:"")},{children:o}))});Xs.Cursor=Nh,Hc=Xs.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=r===void 0?1:r,i=e.typeSpeed,s=i===void 0?80:i,l=e.deleteSpeed,u=l===void 0?50:l,c=e.delaySpeed,d=c===void 0?1500:c,f=e.cursor,h=f!==void 0&&f,v=e.cursorStyle,g=v===void 0?"|":v,S=e.cursorColor,b=S===void 0?"inherit":S,x=e.cursorBlinking,m=x===void 0||x,p=e.onLoopDone,w=e.onType,j=e.onDelay,C=e.onDelete,$=Th({words:n,loop:o,typeSpeed:s,deleteSpeed:u,delaySpeed:d,onLoopDone:p,onType:w,onDelay:j,onDelete:C})[0];return Yo.jsxs(Yo.Fragment,{children:[Yo.jsx("span",{children:$}),h&&Yo.jsx(Nh,{cursorStyle:g,cursorColor:b,cursorBlinking:m})]})},Xs.useTypewriter=Th;const xk="https://Bravo938.github.io/RiosDeVida.pages/assets/iglefondo-BN1oqW4x.mp4",yk=`
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
`,wk=zj`${yk}`,bk=()=>{const[e,t]=y.useState(!1),n=()=>t(!0);return a.jsxs(a.Fragment,{children:[a.jsx(wk,{}),a.jsxs(Sk,{children:[a.jsx(jk,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:n,style:{opacity:e?1:0},children:a.jsx("source",{src:xk,type:"video/mp4"})}),a.jsx(kk,{style:{display:e?"none":"block"}}),a.jsxs(Ck,{children:[a.jsx(Ek,{children:a.jsx(Hc,{words:["Centro Cristiano Rios De Vida"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:3e3})}),a.jsx($k,{children:'El Centro Cristiano "Ríos de Vida" tiene la misión de predicar la Palabra de Dios cumpliendo con el mandato de Cristo de llevar su mensaje a todas las naciones.'}),a.jsx(_k,{children:a.jsx(Hc,{words:["Jesús Dijo"],loop:1,cursor:!0,cursorStyle:"|",typeSpeed:30,deleteSpeed:20,delaySpeed:1e3})}),a.jsx(Rk,{children:"Jesús se puso en pie y alzó la voz, diciendo: Si alguno tiene sed, venga a mí y beba. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. (Juan 7:37-38)"})]})]})]})},Sk=k.div`
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
`,Ck=k.div`
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
`,Ek=k.h1`
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
`;var vx={},El={},Sf={},bu={},Su={exports:{}},ju,Ih;function Pk(){if(Ih)return ju;Ih=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ju=e,ju}var ku,zh;function Tk(){if(zh)return ku;zh=1;var e=Pk();function t(){}function n(){}return n.resetWarningCache=t,ku=function(){function r(s,l,u,c,d,f){if(f!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},ku}var Lh;function Nk(){return Lh||(Lh=1,Su.exports=Tk()()),Su.exports}var Ah;function Ik(){return Ah||(Ah=1,function(e){(function(t,n){n(e,y,Nk())})(it,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=g;var o=s(n),i=s(r);function s(m){return m&&m.__esModule?m:{default:m}}var l=Object.assign||function(m){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var j in w)Object.prototype.hasOwnProperty.call(w,j)&&(m[j]=w[j])}return m};function u(m,p){var w={};for(var j in m)p.indexOf(j)>=0||Object.prototype.hasOwnProperty.call(m,j)&&(w[j]=m[j]);return w}function c(m,p){if(!(m instanceof p))throw new TypeError("Cannot call a class as a function")}var d=function(){function m(p,w){for(var j=0;j<w.length;j++){var C=w[j];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(p,C.key,C)}}return function(p,w,j){return w&&m(p.prototype,w),j&&m(p,j),p}}();function f(m,p){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:m}function h(m,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);m.prototype=Object.create(p&&p.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(m,p):m.__proto__=p)}var v=!1;function g(m){v=m}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){g(!0)}}))}catch{}function S(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return v?m:m.capture}function b(m){if("touches"in m){var p=m.touches[0],w=p.pageX,j=p.pageY;return{x:w,y:j}}var C=m.screenX,$=m.screenY;return{x:C,y:$}}var x=function(m){h(p,m);function p(){var w;c(this,p);for(var j=arguments.length,C=Array(j),$=0;$<j;$++)C[$]=arguments[$];var E=f(this,(w=p.__proto__||Object.getPrototypeOf(p)).call.apply(w,[this].concat(C)));return E._handleSwipeStart=E._handleSwipeStart.bind(E),E._handleSwipeMove=E._handleSwipeMove.bind(E),E._handleSwipeEnd=E._handleSwipeEnd.bind(E),E._onMouseDown=E._onMouseDown.bind(E),E._onMouseMove=E._onMouseMove.bind(E),E._onMouseUp=E._onMouseUp.bind(E),E._setSwiperRef=E._setSwiperRef.bind(E),E}return d(p,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(j){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(j))}},{key:"_onMouseMove",value:function(j){this.mouseDown&&this._handleSwipeMove(j)}},{key:"_onMouseUp",value:function(j){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(j)}},{key:"_handleSwipeStart",value:function(j){var C=b(j),$=C.x,E=C.y;this.moveStart={x:$,y:E},this.props.onSwipeStart(j)}},{key:"_handleSwipeMove",value:function(j){if(this.moveStart){var C=b(j),$=C.x,E=C.y,A=$-this.moveStart.x,O=E-this.moveStart.y;this.moving=!0;var te=this.props.onSwipeMove({x:A,y:O},j);te&&j.cancelable&&j.preventDefault(),this.movePosition={deltaX:A,deltaY:O}}}},{key:"_handleSwipeEnd",value:function(j){this.props.onSwipeEnd(j);var C=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-C?this.props.onSwipeLeft(1,j):this.movePosition.deltaX>C&&this.props.onSwipeRight(1,j),this.movePosition.deltaY<-C?this.props.onSwipeUp(1,j):this.movePosition.deltaY>C&&this.props.onSwipeDown(1,j)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(j){this.swiper=j,this.props.innerRef(j)}},{key:"render",value:function(){var j=this.props;j.tagName;var C=j.className,$=j.style,E=j.children;j.allowMouseEvents,j.onSwipeUp,j.onSwipeDown,j.onSwipeLeft,j.onSwipeRight,j.onSwipeStart,j.onSwipeMove,j.onSwipeEnd,j.innerRef,j.tolerance;var A=u(j,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return o.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:C,style:$},A),E)}}]),p}(n.Component);x.displayName="ReactSwipe",x.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},x.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=x})}(bu)),bu}(function(e){(function(t,n){n(e,Ik())})(it,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})(Sf);var Qi={},xx={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var l in i)t.call(i,l)&&i[l]&&(s=o(s,l));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(xx);var yx=xx.exports;const zk=b0(yx);Object.defineProperty(Qi,"__esModule",{value:!0});Qi.default=void 0;var zn=Lk(yx);function Lk(e){return e&&e.__esModule?e:{default:e}}function Ak(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ok={ROOT:function(t){return(0,zn.default)(Ak({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,zn.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,zn.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,zn.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,zn.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,zn.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,zn.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,zn.default)({dot:!0,selected:t})}};Qi.default=Ok;var Yi={},$l={};Object.defineProperty($l,"__esModule",{value:!0});$l.outerWidth=void 0;var Dk=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};$l.outerWidth=Dk;var To={};Object.defineProperty(To,"__esModule",{value:!0});To.default=void 0;var Mk=function(t,n,r){var o=t===0?t:t+n,i=r==="horizontal"?[o,0,0]:[0,o,0],s="translate3d",l="("+i.join(",")+")";return s+l};To.default=Mk;var Zi={};Object.defineProperty(Zi,"__esModule",{value:!0});Zi.default=void 0;var Fk=function(){return window};Zi.default=Fk;Object.defineProperty(Yi,"__esModule",{value:!0});Yi.default=void 0;var Ft=Vk(y),hr=_l(Qi),Bk=$l,Oh=_l(To),Uk=_l(Sf),Cs=_l(Zi);function _l(e){return e&&e.__esModule?e:{default:e}}function wx(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return wx=function(){return e},e}function Vk(e){if(e&&e.__esModule)return e;if(e===null||mi(e)!=="object"&&typeof e!="function")return{default:e};var t=wx();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function mi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mi=function(n){return typeof n}:mi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mi(e)}function Wc(){return Wc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wc.apply(this,arguments)}function Hk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wk(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qk(e,t,n){return t&&Wk(e.prototype,t),e}function Gk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qc(e,t)}function qc(e,t){return qc=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},qc(e,t)}function Jk(e){var t=Kk();return function(){var r=Ba(e),o;if(t){var i=Ba(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Xk(this,o)}}function Xk(e,t){return t&&(mi(t)==="object"||typeof t=="function")?t:Be(e)}function Be(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ba(e){return Ba=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ba(e)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qk=function(t){return t.hasOwnProperty("key")},jf=function(e){Gk(n,e);var t=Jk(n);function n(r){var o;return Hk(this,n),o=t.call(this,r),Oe(Be(o),"itemsWrapperRef",void 0),Oe(Be(o),"itemsListRef",void 0),Oe(Be(o),"thumbsRef",void 0),Oe(Be(o),"setItemsWrapperRef",function(i){o.itemsWrapperRef=i}),Oe(Be(o),"setItemsListRef",function(i){o.itemsListRef=i}),Oe(Be(o),"setThumbsRef",function(i,s){o.thumbsRef||(o.thumbsRef=[]),o.thumbsRef[s]=i}),Oe(Be(o),"updateSizes",function(){if(!(!o.props.children||!o.itemsWrapperRef||!o.thumbsRef)){var i=Ft.Children.count(o.props.children),s=o.itemsWrapperRef.clientWidth,l=o.props.thumbWidth?o.props.thumbWidth:(0,Bk.outerWidth)(o.thumbsRef[0]),u=Math.floor(s/l),c=u<i,d=c?i-u:0;o.setState(function(f,h){return{itemSize:l,visibleItems:u,firstItem:c?o.getFirstItem(h.selectedItem):0,lastPosition:d,showArrows:c}})}}),Oe(Be(o),"handleClickItem",function(i,s,l){if(!Qk(l)||l.key==="Enter"){var u=o.props.onSelectItem;typeof u=="function"&&u(i,s)}}),Oe(Be(o),"onSwipeStart",function(){o.setState({swiping:!0})}),Oe(Be(o),"onSwipeEnd",function(){o.setState({swiping:!1})}),Oe(Be(o),"onSwipeMove",function(i){var s=i.x;if(!o.state.itemSize||!o.itemsWrapperRef||!o.state.visibleItems)return!1;var l=0,u=Ft.Children.count(o.props.children),c=-(o.state.firstItem*100)/o.state.visibleItems,d=Math.max(u-o.state.visibleItems,0),f=-d*100/o.state.visibleItems;c===l&&s>0&&(s=0),c===f&&s<0&&(s=0);var h=o.itemsWrapperRef.clientWidth,v=c+100/(h/s);return o.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(g){o.itemsListRef.style[g]=(0,Oh.default)(v,"%",o.props.axis)}),!0}),Oe(Be(o),"slideRight",function(i){o.moveTo(o.state.firstItem-(typeof i=="number"?i:1))}),Oe(Be(o),"slideLeft",function(i){o.moveTo(o.state.firstItem+(typeof i=="number"?i:1))}),Oe(Be(o),"moveTo",function(i){i=i<0?0:i,i=i>=o.state.lastPosition?o.state.lastPosition:i,o.setState({firstItem:i})}),o.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},o}return qk(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(o){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==o.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Cs.default)().addEventListener("resize",this.updateSizes),(0,Cs.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Cs.default)().removeEventListener("resize",this.updateSizes),(0,Cs.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(o){var i=o;return o>=this.state.lastPosition&&(i=this.state.lastPosition),o<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),o<this.state.firstItem&&(i=o),i}},{key:"renderItems",value:function(){var o=this;return this.props.children.map(function(i,s){var l=hr.default.ITEM(!1,s===o.state.selectedItem),u={key:s,ref:function(d){return o.setThumbsRef(d,s)},className:l,onClick:o.handleClickItem.bind(o,s,o.props.children[s]),onKeyDown:o.handleClickItem.bind(o,s,o.props.children[s]),"aria-label":"".concat(o.props.labels.item," ").concat(s+1),style:{width:o.props.thumbWidth}};return Ft.default.createElement("li",Wc({},u,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var o=this;if(!this.props.children)return null;var i=Ft.Children.count(this.props.children)>1,s=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u={},c=-this.state.firstItem*(this.state.itemSize||0),d=(0,Oh.default)(c,"px",this.props.axis),f=this.props.transitionTime+"ms";return u={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f},Ft.default.createElement("div",{className:hr.default.CAROUSEL(!1)},Ft.default.createElement("div",{className:hr.default.WRAPPER(!1),ref:this.setItemsWrapperRef},Ft.default.createElement("button",{type:"button",className:hr.default.ARROW_PREV(!s),onClick:function(){return o.slideRight()},"aria-label":this.props.labels.leftArrow}),i?Ft.default.createElement(Uk.default,{tagName:"ul",className:hr.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:u,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):Ft.default.createElement("ul",{className:hr.default.SLIDER(!1,this.state.swiping),ref:function(v){return o.setItemsListRef(v)},style:u},this.renderItems()),Ft.default.createElement("button",{type:"button",className:hr.default.ARROW_NEXT(!l),onClick:function(){return o.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(Ft.Component);Yi.default=jf;Oe(jf,"displayName","Thumbs");Oe(jf,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.default=void 0;var Yk=function(){return document};Rl.default=Yk;var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.setPosition=mt.getPosition=mt.isKeyboardEvent=mt.defaultStatusFormatter=mt.noop=void 0;var Zk=y,eC=tC(To);function tC(e){return e&&e.__esModule?e:{default:e}}var nC=function(){};mt.noop=nC;var rC=function(t,n){return"".concat(t," of ").concat(n)};mt.defaultStatusFormatter=rC;var oC=function(t){return t?t.hasOwnProperty("key"):!1};mt.isKeyboardEvent=oC;var iC=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=Zk.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var o=-t*n.centerSlidePercentage,i=r-1;return t&&(t!==i||n.infiniteLoop)?o+=(100-n.centerSlidePercentage)/2:t===i&&(o+=100-n.centerSlidePercentage),o}return-t*100};mt.getPosition=iC;var sC=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(o){r[o]=(0,eC.default)(t,"%",n)}),r};mt.setPosition=sC;var an={};Object.defineProperty(an,"__esModule",{value:!0});an.fadeAnimationHandler=an.slideStopSwipingHandler=an.slideSwipeAnimationHandler=an.slideAnimationHandler=void 0;var bx=y,aC=lC(To),ln=mt;function lC(e){return e&&e.__esModule?e:{default:e}}function Dh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function vr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dh(Object(n),!0).forEach(function(r){uC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uC(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cC=function(t,n){var r={},o=n.selectedItem,i=o,s=bx.Children.count(t.children)-1,l=t.infiniteLoop&&(o<0||o>s);if(l)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,ln.setPosition)(-(s+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,ln.setPosition)(-(s+2)*100,t.axis):i>s&&(r.itemListStyle=(0,ln.setPosition)(0,t.axis)),r;var u=(0,ln.getPosition)(o,t),c=(0,aC.default)(u,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:c,msTransform:c,OTransform:c,transform:c},n.swiping||(r.itemListStyle=vr(vr({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};an.slideAnimationHandler=cC;var dC=function(t,n,r,o){var i={},s=n.axis==="horizontal",l=bx.Children.count(n.children),u=0,c=(0,ln.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,ln.getPosition)(l-1,n)-100:(0,ln.getPosition)(l-1,n),f=s?t.x:t.y,h=f;c===u&&f>0&&(h=0),c===d&&f<0&&(h=0);var v=c+100/(r.itemSize/h),g=Math.abs(f)>n.swipeScrollTolerance;return n.infiniteLoop&&g&&(r.selectedItem===0&&v>-100?v-=l*100:r.selectedItem===l-1&&v<-l*100&&(v+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||g||r.swipeMovementStarted)&&(r.swipeMovementStarted||o({swipeMovementStarted:!0}),i.itemListStyle=(0,ln.setPosition)(v,n.axis)),g&&!r.cancelClick&&o({cancelClick:!0}),i};an.slideSwipeAnimationHandler=dC;var fC=function(t,n){var r=(0,ln.getPosition)(n.selectedItem,t),o=(0,ln.setPosition)(r,t.axis);return{itemListStyle:o}};an.slideStopSwipingHandler=fC;var pC=function(t,n){var r=t.transitionTime+"ms",o="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:o,msTransitionTimingFunction:o,MozTransitionTimingFunction:o,WebkitTransitionTimingFunction:o,OTransitionTimingFunction:o};return n.swiping||(i=vr(vr({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:vr(vr({},i),{},{opacity:1,position:"relative"}),prevStyle:vr({},i)}};an.fadeAnimationHandler=pC;Object.defineProperty(El,"__esModule",{value:!0});El.default=void 0;var Z=gC(y),hC=es(Sf),yn=es(Qi),mC=es(Yi),Es=es(Rl),$s=es(Zi),Zo=mt,Ua=an;function es(e){return e&&e.__esModule?e:{default:e}}function Sx(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Sx=function(){return e},e}function gC(e){if(e&&e.__esModule)return e;if(e===null||gi(e)!=="object"&&typeof e!="function")return{default:e};var t=Sx();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function gi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gi=function(n){return typeof n}:gi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gi(e)}function Gc(){return Gc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gc.apply(this,arguments)}function Mh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mh(Object(n),!0).forEach(function(r){V(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xC(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yC(e,t,n){return t&&xC(e.prototype,t),e}function wC(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Jc(e,t)}function Jc(e,t){return Jc=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Jc(e,t)}function bC(e){var t=jC();return function(){var r=Va(e),o;if(t){var i=Va(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return SC(this,o)}}function SC(e,t){return t&&(gi(t)==="object"||typeof t=="function")?t:G(e)}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Va(e){return Va=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Va(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var kf=function(e){wC(n,e);var t=bC(n);function n(r){var o;vC(this,n),o=t.call(this,r),V(G(o),"thumbsRef",void 0),V(G(o),"carouselWrapperRef",void 0),V(G(o),"listRef",void 0),V(G(o),"itemsRef",void 0),V(G(o),"timer",void 0),V(G(o),"animationHandler",void 0),V(G(o),"setThumbsRef",function(s){o.thumbsRef=s}),V(G(o),"setCarouselWrapperRef",function(s){o.carouselWrapperRef=s}),V(G(o),"setListRef",function(s){o.listRef=s}),V(G(o),"setItemsRef",function(s,l){o.itemsRef||(o.itemsRef=[]),o.itemsRef[l]=s}),V(G(o),"autoPlay",function(){Z.Children.count(o.props.children)<=1||(o.clearAutoPlay(),o.props.autoPlay&&(o.timer=setTimeout(function(){o.increment()},o.props.interval)))}),V(G(o),"clearAutoPlay",function(){o.timer&&clearTimeout(o.timer)}),V(G(o),"resetAutoPlay",function(){o.clearAutoPlay(),o.autoPlay()}),V(G(o),"stopOnHover",function(){o.setState({isMouseEntered:!0},o.clearAutoPlay)}),V(G(o),"startOnLeave",function(){o.setState({isMouseEntered:!1},o.autoPlay)}),V(G(o),"isFocusWithinTheCarousel",function(){return o.carouselWrapperRef?!!((0,Es.default)().activeElement===o.carouselWrapperRef||o.carouselWrapperRef.contains((0,Es.default)().activeElement)):!1}),V(G(o),"navigateWithKeyboard",function(s){if(o.isFocusWithinTheCarousel()){var l=o.props.axis,u=l==="horizontal",c={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=u?c.ArrowRight:c.ArrowDown,f=u?c.ArrowLeft:c.ArrowUp;d===s.keyCode?o.increment():f===s.keyCode&&o.decrement()}}),V(G(o),"updateSizes",function(){if(!(!o.state.initialized||!o.itemsRef||o.itemsRef.length===0)){var s=o.props.axis==="horizontal",l=o.itemsRef[0];if(l){var u=s?l.clientWidth:l.clientHeight;o.setState({itemSize:u}),o.thumbsRef&&o.thumbsRef.updateSizes()}}}),V(G(o),"setMountState",function(){o.setState({hasMount:!0}),o.updateSizes()}),V(G(o),"handleClickItem",function(s,l){if(Z.Children.count(o.props.children)!==0){if(o.state.cancelClick){o.setState({cancelClick:!1});return}o.props.onClickItem(s,l),s!==o.state.selectedItem&&o.setState({selectedItem:s})}}),V(G(o),"handleOnChange",function(s,l){Z.Children.count(o.props.children)<=1||o.props.onChange(s,l)}),V(G(o),"handleClickThumb",function(s,l){o.props.onClickThumb(s,l),o.moveTo(s)}),V(G(o),"onSwipeStart",function(s){o.setState({swiping:!0}),o.props.onSwipeStart(s)}),V(G(o),"onSwipeEnd",function(s){o.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),o.props.onSwipeEnd(s),o.clearAutoPlay(),o.state.autoPlay&&o.autoPlay()}),V(G(o),"onSwipeMove",function(s,l){o.props.onSwipeMove(l);var u=o.props.swipeAnimationHandler(s,o.props,o.state,o.setState.bind(G(o)));return o.setState(Bt({},u)),!!Object.keys(u).length}),V(G(o),"decrement",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem-(typeof s=="number"?s:1))}),V(G(o),"increment",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;o.moveTo(o.state.selectedItem+(typeof s=="number"?s:1))}),V(G(o),"moveTo",function(s){if(typeof s=="number"){var l=Z.Children.count(o.props.children)-1;s<0&&(s=o.props.infiniteLoop?l:0),s>l&&(s=o.props.infiniteLoop?0:l),o.selectItem({selectedItem:s}),o.state.autoPlay&&o.state.isMouseEntered===!1&&o.resetAutoPlay()}}),V(G(o),"onClickNext",function(){o.increment(1)}),V(G(o),"onClickPrev",function(){o.decrement(1)}),V(G(o),"onSwipeForward",function(){o.increment(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),V(G(o),"onSwipeBackwards",function(){o.decrement(1),o.props.emulateTouch&&o.setState({cancelClick:!0})}),V(G(o),"changeItem",function(s){return function(l){(!(0,Zo.isKeyboardEvent)(l)||l.key==="Enter")&&o.moveTo(s)}}),V(G(o),"selectItem",function(s){o.setState(Bt({previousItem:o.state.selectedItem},s),function(){o.setState(o.animationHandler(o.props,o.state))}),o.handleOnChange(s.selectedItem,Z.Children.toArray(o.props.children)[s.selectedItem])}),V(G(o),"getInitialImage",function(){var s=o.props.selectedItem,l=o.itemsRef&&o.itemsRef[s],u=l&&l.getElementsByTagName("img")||[];return u[0]}),V(G(o),"getVariableItemHeight",function(s){var l=o.itemsRef&&o.itemsRef[s];if(o.state.hasMount&&l&&l.children.length){var u=l.children[0].getElementsByTagName("img")||[];if(u.length>0){var c=u[0];if(!c.complete){var d=function v(){o.forceUpdate(),c.removeEventListener("load",v)};c.addEventListener("load",d)}}var f=u[0]||l.children[0],h=f.clientHeight;return h>0?h:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return o.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Ua.fadeAnimationHandler||Ua.slideAnimationHandler,o.state=Bt(Bt({},i),o.animationHandler(r,i)),o}return yC(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(o,i){!o.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!o.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(Bt({},this.props.stopSwipingHandler(this.props,this.state))),(o.selectedItem!==this.props.selectedItem||o.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),o.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var o=this;this.bindEvents(),this.state.autoPlay&&Z.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=o.getInitialImage();i&&!i.complete?i.addEventListener("load",o.setMountState):o.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.addEventListener("mouseenter",this.stopOnHover),o.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var o=this.carouselWrapperRef;this.props.stopOnHover&&o&&(o.removeEventListener("mouseenter",this.stopOnHover),o.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,$s.default)().addEventListener("resize",this.updateSizes),(0,$s.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,Es.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,$s.default)().removeEventListener("resize",this.updateSizes),(0,$s.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var o=this.getInitialImage();o&&o.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,Es.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var o;(o=this.carouselWrapperRef)===null||o===void 0||o.focus()}},{key:"renderItems",value:function(o){var i=this;return this.props.children?Z.Children.map(this.props.children,function(s,l){var u=l===i.state.selectedItem,c=l===i.state.previousItem,d=u&&i.state.selectedStyle||c&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(d=Bt(Bt({},d),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(d=Bt(Bt({},d),{},{pointerEvents:"none"}));var f={ref:function(v){return i.setItemsRef(v,l)},key:"itemKey"+l+(o?"clone":""),className:yn.default.ITEM(!0,l===i.state.selectedItem,l===i.state.previousItem),onClick:i.handleClickItem.bind(i,l,s),style:d};return Z.default.createElement("li",f,i.props.renderItem(s,{isSelected:l===i.state.selectedItem,isPrevious:l===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var o=this,i=this.props,s=i.showIndicators,l=i.labels,u=i.renderIndicator,c=i.children;return s?Z.default.createElement("ul",{className:"control-dots"},Z.Children.map(c,function(d,f){return u&&u(o.changeItem(f),f===o.state.selectedItem,f,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?Z.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,Z.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||Z.Children.count(this.props.children)===0?null:Z.default.createElement(mC.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var o=this;if(!this.props.children||Z.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&Z.Children.count(this.props.children)>1,s=this.props.axis==="horizontal",l=this.props.showArrows&&Z.Children.count(this.props.children)>1,u=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,c=l&&(this.state.selectedItem<Z.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),f=d.shift(),h=d.pop(),v={className:yn.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},g={};if(s){if(v.onSwipeLeft=this.onSwipeForward,v.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var S=this.getVariableItemHeight(this.state.selectedItem);g.height=S||"auto"}}else v.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,v.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,v.style=Bt(Bt({},v.style),{},{height:this.state.itemSize}),g.height=this.state.itemSize;return Z.default.createElement("div",{"aria-label":this.props.ariaLabel,className:yn.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},Z.default.createElement("div",{className:yn.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,u,this.props.labels.leftArrow),Z.default.createElement("div",{className:yn.default.WRAPPER(!0,this.props.axis),style:g},i?Z.default.createElement(hC.default,Gc({tagName:"ul",innerRef:this.setListRef},v,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f):Z.default.createElement("ul",{className:yn.default.SLIDER(!0,this.state.swiping),ref:function(x){return o.setListRef(x)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f)),this.props.renderArrowNext(this.onClickNext,c,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(Z.default.Component);El.default=kf;V(kf,"displayName","Carousel");V(kf,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Zo.noop,onClickThumb:Zo.noop,onChange:Zo.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return Z.default.createElement("button",{type:"button","aria-label":r,className:yn.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return Z.default.createElement("button",{type:"button","aria-label":r,className:yn.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,o){return Z.default.createElement("li",{className:yn.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=Z.Children.map(t,function(r){var o=r;if(r.type!=="img"&&(o=Z.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!o)return o});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Zo.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Ua.slideSwipeAnimationHandler,stopSwipingHandler:Ua.slideStopSwipingHandler});var kC={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=o(El),n=kC,r=o(Yi);function o(i){return i&&i.__esModule?i:{default:i}}})(vx);const CC="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osUno-CfPtuQXo.jpeg",EC="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osDos-CjOjW_oM.jpeg",$C="https://Bravo938.github.io/RiosDeVida.pages/assets/ni%C3%B1osTres-AsJgpukL.jpeg",_C="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJes%C3%BAs-TIPDL7DU.jpeg",RC="https://Bravo938.github.io/RiosDeVida.pages/assets/tiketSalvaci%C3%B3n-D9lcr1qY.jpeg",PC="https://Bravo938.github.io/RiosDeVida.pages/assets/globoJuan-CdVtAiml.jpeg",TC="https://Bravo938.github.io/RiosDeVida.pages/assets/servicios-D1QGoDVa.jpg",NC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorio-CTSHckB1.jpg",IC="https://Bravo938.github.io/RiosDeVida.pages/assets/ccrv_Ser-BsoqrjkZ.jpg",zC="https://Bravo938.github.io/RiosDeVida.pages/assets/congreso-BxEsJ0Jy.jpg",LC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesArt-CN0fXW9p.jpg",AC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSect-Cbi3JT-h.jpg",OC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesFondoOscuro-B7Ek2ZSn.jpeg",DC="https://Bravo938.github.io/RiosDeVida.pages/assets/mdzzz09m-Dqg0HgdU.png",MC="https://Bravo938.github.io/RiosDeVida.pages/assets/JovenesSecOscuro-Dtk7KoD-.jpg",FC="https://Bravo938.github.io/RiosDeVida.pages/assets/congreso-BxEsJ0Jy.jpg",BC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioUno-CoIoQrq-.jpg",UC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioDos-CAVUgvvI.jpg",VC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioTres-CTjzxZYT.jpg",HC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioCuatro-1mvNma7G.jpg",WC="https://Bravo938.github.io/RiosDeVida.pages/assets/auditorioCinco-xqII1Rqe.jpg",K={niñoUno:CC,niñoDos:EC,niñoTres:$C,globoJesús:_C,tiketSalvación:RC,globoJuan:PC,servicios:TC,auditorio:NC,ccrv_Ser:IC,potenciados:zC,jovenesArt:LC,jovenesSection:AC,JovenesFondoOscuro:OC,mdzzz09m:DC,JovenesSectionOscuro:MC,congreso:FC,auditorioUno:BC,auditorioDos:UC,auditorioTres:VC,auditorioCuatro:HC,auditorioCinco:WC},qC=[K.globoJesús,K.niñoDos,K.niñoTres,K.niñoUno,K.globoJuan,K.niñoUno,K.niñoTres],GC=()=>a.jsxs(JC,{id:"grupoDeVida",children:[a.jsxs(XC,{children:[a.jsx(KC,{children:"Grupos de Vida"}),a.jsx(QC,{children:"En cada Grupo de Vida hablamos y aprendemos de la palabra de Dios y también confraternamos con los miembros."})]}),a.jsx(YC,{showArrows:!1,showThumbs:!1,showStatus:!1,autoPlay:!0,infiniteLoop:!0,interval:3e3,centerMode:!0,centerSlidePercentage:30,children:qC.map((e,t)=>a.jsx(ZC,{children:a.jsx(e2,{src:e,alt:`slide-${t}`})},t))})]}),JC=k.section`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  
`,XC=k.div`
  text-align: center;
  margin-bottom: 1rem;
`,KC=k.h2`
  font-size: 2.5rem;
  color: #00a0f6;
  margin-bottom: 0.5rem;
`,QC=k.p`
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
`,YC=k(vx.Carousel)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ZC=k.div`
  padding: 0 5px;
`,e2=k.img`
  width: 100%;
  height: 450px; /* Ajusta la altura según el tamaño que desees */
  object-fit: cover; /* Mantiene el tamaño sin cortar las imágenes */
  border-radius: 8px;
`,t2=()=>a.jsxs(n2,{id:"servicios",children:[a.jsxs(Fh,{direction:"left",children:[a.jsx(Bh,{src:K.auditorio,alt:"Auditorio Centro Cristiano"}),a.jsx(Uh,{children:"Auditorio Centro Cristiano Ríos de Vida"}),a.jsx(Vh,{children:"Leer Más"})]}),a.jsxs(Fh,{direction:"right",children:[a.jsx(Bh,{src:K.ccrv_Ser,alt:"Servicios Todos los Domingos"}),a.jsx(Uh,{children:"Servicios Todos los Domingos"}),a.jsx(Vh,{children:"Leer Más"})]})]}),n2=k.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;
  background-color: #02141747;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Fh=k.div`
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
`,Bh=k.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  

  
`,Uh=k.h3`
  font-size: 1.5rem;
  color: #00d0ff;
  margin-top: 1rem;
  text-shadow: 3px 3px 30px rgba(255, 255, 255, 0.3); // Sombra suave
`,Vh=k.button`
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
`,r2="https://Bravo938.github.io/RiosDeVida.pages/assets/manosArriba-DDg91RAo.mp4";function o2(){const[e,t]=y.useState(!1),n=()=>{t(!e)};return a.jsx(i2,{id:"potenciados",children:a.jsxs(s2,{children:[a.jsxs(a2,{children:[a.jsx(l2,{children:"Jóvenes Potenciados"}),a.jsxs(u2,{children:[a.jsxs(c2,{expanded:e,children:["¡Bienvenido a Jóvenes Potenciados! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(d2,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(f2,{children:a.jsx(p2,{autoPlay:!0,loop:!0,muted:!0,src:r2})})]})})}const i2=k.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #7148d18f 40%, #2e1f428d 40%);
`,s2=k.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,a2=k.div`
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
`,l2=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,u2=k.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,c2=k.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,d2=k.button`
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
`,f2=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,p2=k.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function h2(){return a.jsxs(m2,{children:[a.jsx(Cl,{}),a.jsx(bf,{}),a.jsx(bk,{}),a.jsx(tk,{}),a.jsx(t2,{}),a.jsx(GC,{}),a.jsx(o2,{}),a.jsx(yf,{})]})}const m2=k.div`
  //background-color: #ececec; // Cambia esta ruta por la de tu imagen
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;function Cu(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"},child:[]},{tag:"path",attr:{d:"M11.69 15c.36-.75.84-1.43 1.43-2H7v-2h11c1.07 0 2.09.25 3 .69V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.69c-.44-.91-.69-1.93-.69-3 0-.34.03-.67.08-1H7v-2h4.69zM12 2.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM7 7h10v2H7V7z"},child:[]}]})(e)}function Eu(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},child:[]}]})(e)}function It(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8V8zm-7 1V3.5L18.5 9H13zM22.71 14l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71a.996.996 0 0 0 0-1.41z"},child:[]}]})(e)}function g2(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(e)}function v2(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function zt(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"},child:[]}]})(e)}function St(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"},child:[]}]})(e)}function Hr(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"},child:[]}]})(e)}function Pn(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"},child:[]}]})(e)}function Lt(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"},child:[]}]})(e)}const jx=y.createContext(),x2=()=>{const[e,t]=y.useState(!1),n=ge(),r=()=>{t(i=>!i)},o=()=>{n("/logout")};return a.jsx(jx.Provider,{value:{darkTheme:e,toggleTheme:r},children:a.jsxs(y2,{$darkTheme:e,children:[a.jsx(w2,{onClick:o,children:a.jsx(v2,{})}),a.jsx(b2,{onClick:r,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsx(SS,{})]})})},y2=k.div`
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
    min-height: 100vh;
`,w2=k.button`
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
`,b2=k.button`
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
`,S2=()=>{const{darkTheme:e,toggleTheme:t}=y.useContext(jx),n=ge(),[r,o]=y.useState(null);y.useEffect(()=>{const l=localStorage.getItem("rol");l&&o(l)},[]);const i=l=>{n(l)},s=l=>l.includes(parseInt(r));return a.jsxs(j2,{$darkTheme:e,children:[a.jsx(C2,{onClick:t,$darkTheme:e,children:e?"🌙":"☀️"}),a.jsxs(k2,{children:[s([1])&&a.jsxs(kt,{onClick:()=>i("/miembrosLideresSupervisor"),$darkTheme:e,children:[a.jsx(Eu,{size:24})," ",a.jsx(Ct,{children:"Miembros Lider Supervisor"})]}),s([2])&&a.jsxs(kt,{onClick:()=>i("/registroLideryMiembro"),$darkTheme:e,children:[a.jsx(Eu,{size:24})," ",a.jsx(Ct,{children:"Miembros"})]}),s([3])&&a.jsxs(kt,{onClick:()=>i("/planillaLider"),$darkTheme:e,children:[a.jsx(Eu,{size:24})," ",a.jsx(Ct,{children:"Miembros"})]}),s([3])&&a.jsxs(kt,{onClick:()=>i("/asistencia"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(Ct,{children:"Asistencia"})]}),s([2])&&a.jsxs(kt,{onClick:()=>i("/asistenciaVistaSupervisor"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(Ct,{children:"Asistencia Vista Supervisor"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/asistenciaVistaAdmin"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(Ct,{children:"Asistencia "})]}),s([3])&&a.jsxs(kt,{onClick:()=>i("/generalPlanilla"),$darkTheme:e,children:[a.jsx(Cu,{size:24})," ",a.jsx(Ct,{children:"Planilla"})]}),s([2])&&a.jsxs(kt,{onClick:()=>i("/planillaGeneralSupervisor"),$darkTheme:e,children:[a.jsx(Cu,{size:24})," ",a.jsx(Ct,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/planillaGeneralAdmin"),$darkTheme:e,children:[a.jsx(Cu,{size:24})," ",a.jsx(Ct,{children:"Planillas Lideres"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/asignarSupervisor"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(Ct,{children:"Asignar Supervisor"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/registroUsuarios"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(Ct,{children:"Usuarios"})]}),s([1])&&a.jsxs(kt,{onClick:()=>i("/registroDeRoles"),$darkTheme:e,children:[a.jsx(Hr,{size:24})," ",a.jsx(Ct,{children:"Roles"})]})]})]})},j2=k.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background-color: ${({$darkTheme:e})=>e?"#343a40":"#f8f9fa"};
    color: ${({$darkTheme:e})=>e?"#f8f9fa":"#343a40"};
`,k2=k.div`
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
`,C2=k.button`
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
`,ts=y.createContext(),E2=({children:e})=>{const[t,n]=y.useState(null);return a.jsx(ts.Provider,{value:{auth:t,setAuth:n},children:e})};function kx(e,t){return function(){return e.apply(t,arguments)}}const{toString:$2}=Object.prototype,{getPrototypeOf:Cf}=Object,Pl=(e=>t=>{const n=$2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qt=e=>(e=e.toLowerCase(),t=>Pl(t)===e),Tl=e=>t=>typeof t===e,{isArray:No}=Array,Mi=Tl("undefined");function _2(e){return e!==null&&!Mi(e)&&e.constructor!==null&&!Mi(e.constructor)&&xt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Cx=Qt("ArrayBuffer");function R2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Cx(e.buffer),t}const P2=Tl("string"),xt=Tl("function"),Ex=Tl("number"),Nl=e=>e!==null&&typeof e=="object",T2=e=>e===!0||e===!1,Ks=e=>{if(Pl(e)!=="object")return!1;const t=Cf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},N2=Qt("Date"),I2=Qt("File"),z2=Qt("Blob"),L2=Qt("FileList"),A2=e=>Nl(e)&&xt(e.pipe),O2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xt(e.append)&&((t=Pl(e))==="formdata"||t==="object"&&xt(e.toString)&&e.toString()==="[object FormData]"))},D2=Qt("URLSearchParams"),[M2,F2,B2,U2]=["ReadableStream","Request","Response","Headers"].map(Qt),V2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ns(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),No(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function $x(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_x=e=>!Mi(e)&&e!==Cr;function Xc(){const{caseless:e}=_x(this)&&this||{},t={},n=(r,o)=>{const i=e&&$x(t,o)||o;Ks(t[i])&&Ks(r)?t[i]=Xc(t[i],r):Ks(r)?t[i]=Xc({},r):No(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ns(arguments[r],n);return t}const H2=(e,t,n,{allOwnKeys:r}={})=>(ns(t,(o,i)=>{n&&xt(o)?e[i]=kx(o,n):e[i]=o},{allOwnKeys:r}),e),W2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),q2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},G2=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Cf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},J2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},X2=e=>{if(!e)return null;if(No(e))return e;let t=e.length;if(!Ex(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},K2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Cf(Uint8Array)),Q2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Y2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Z2=Qt("HTMLFormElement"),eE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Hh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),tE=Qt("RegExp"),Rx=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ns(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},nE=e=>{Rx(e,(t,n)=>{if(xt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rE=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return No(e)?r(e):r(String(e).split(t)),n},oE=()=>{},iE=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,$u="abcdefghijklmnopqrstuvwxyz",Wh="0123456789",Px={DIGIT:Wh,ALPHA:$u,ALPHA_DIGIT:$u+$u.toUpperCase()+Wh},sE=(e=16,t=Px.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function aE(e){return!!(e&&xt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const lE=e=>{const t=new Array(10),n=(r,o)=>{if(Nl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=No(r)?[]:{};return ns(r,(s,l)=>{const u=n(s,o+1);!Mi(u)&&(i[l]=u)}),t[o]=void 0,i}}return r};return n(e,0)},uE=Qt("AsyncFunction"),cE=e=>e&&(Nl(e)||xt(e))&&xt(e.then)&&xt(e.catch),Tx=((e,t)=>e?setImmediate:t?((n,r)=>(Cr.addEventListener("message",({source:o,data:i})=>{o===Cr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Cr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xt(Cr.postMessage)),dE=typeof queueMicrotask<"u"?queueMicrotask.bind(Cr):typeof process<"u"&&process.nextTick||Tx,_={isArray:No,isArrayBuffer:Cx,isBuffer:_2,isFormData:O2,isArrayBufferView:R2,isString:P2,isNumber:Ex,isBoolean:T2,isObject:Nl,isPlainObject:Ks,isReadableStream:M2,isRequest:F2,isResponse:B2,isHeaders:U2,isUndefined:Mi,isDate:N2,isFile:I2,isBlob:z2,isRegExp:tE,isFunction:xt,isStream:A2,isURLSearchParams:D2,isTypedArray:K2,isFileList:L2,forEach:ns,merge:Xc,extend:H2,trim:V2,stripBOM:W2,inherits:q2,toFlatObject:G2,kindOf:Pl,kindOfTest:Qt,endsWith:J2,toArray:X2,forEachEntry:Q2,matchAll:Y2,isHTMLForm:Z2,hasOwnProperty:Hh,hasOwnProp:Hh,reduceDescriptors:Rx,freezeMethods:nE,toObjectSet:rE,toCamelCase:eE,noop:oE,toFiniteNumber:iE,findKey:$x,global:Cr,isContextDefined:_x,ALPHABET:Px,generateString:sE,isSpecCompliantForm:aE,toJSONObject:lE,isAsyncFn:uE,isThenable:cE,setImmediate:Tx,asap:dE};function F(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}_.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Nx=F.prototype,Ix={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ix[e]={value:e}});Object.defineProperties(F,Ix);Object.defineProperty(Nx,"isAxiosError",{value:!0});F.from=(e,t,n,r,o,i)=>{const s=Object.create(Nx);return _.toFlatObject(e,s,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),F.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const fE=null;function Kc(e){return _.isPlainObject(e)||_.isArray(e)}function zx(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function qh(e,t,n){return e?e.concat(t).map(function(o,i){return o=zx(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function pE(e){return _.isArray(e)&&!e.some(Kc)}const hE=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function Il(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,b){return!_.isUndefined(b[S])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(_.isDate(g))return g.toISOString();if(!u&&_.isBlob(g))throw new F("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(g)||_.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,S,b){let x=g;if(g&&!b&&typeof g=="object"){if(_.endsWith(S,"{}"))S=r?S:S.slice(0,-2),g=JSON.stringify(g);else if(_.isArray(g)&&pE(g)||(_.isFileList(g)||_.endsWith(S,"[]"))&&(x=_.toArray(g)))return S=zx(S),x.forEach(function(p,w){!(_.isUndefined(p)||p===null)&&t.append(s===!0?qh([S],w,i):s===null?S:S+"[]",c(p))}),!1}return Kc(g)?!0:(t.append(qh(b,S,i),c(g)),!1)}const f=[],h=Object.assign(hE,{defaultVisitor:d,convertValue:c,isVisitable:Kc});function v(g,S){if(!_.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+S.join("."));f.push(g),_.forEach(g,function(x,m){(!(_.isUndefined(x)||x===null)&&o.call(t,x,_.isString(m)?m.trim():m,S,h))===!0&&v(x,S?S.concat(m):[m])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Gh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ef(e,t){this._pairs=[],e&&Il(e,this,t)}const Lx=Ef.prototype;Lx.append=function(t,n){this._pairs.push([t,n])};Lx.toString=function(t){const n=t?function(r){return t.call(this,r,Gh)}:Gh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function mE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ax(e,t,n){if(!t)return e;const r=n&&n.encode||mE,o=n&&n.serialize;let i;if(o?i=o(t,n):i=_.isURLSearchParams(t)?t.toString():new Ef(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Jh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ox={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gE=typeof URLSearchParams<"u"?URLSearchParams:Ef,vE=typeof FormData<"u"?FormData:null,xE=typeof Blob<"u"?Blob:null,yE={isBrowser:!0,classes:{URLSearchParams:gE,FormData:vE,Blob:xE},protocols:["http","https","file","blob","url","data"]},$f=typeof window<"u"&&typeof document<"u",Qc=typeof navigator=="object"&&navigator||void 0,wE=$f&&(!Qc||["ReactNative","NativeScript","NS"].indexOf(Qc.product)<0),bE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",SE=$f&&window.location.href||"http://localhost",jE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$f,hasStandardBrowserEnv:wE,hasStandardBrowserWebWorkerEnv:bE,navigator:Qc,origin:SE},Symbol.toStringTag,{value:"Module"})),rt={...jE,...yE};function kE(e,t){return Il(e,new rt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return rt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function CE(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function EE(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Dx(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),u=i>=n.length;return s=!s&&_.isArray(o)?o.length:s,u?(_.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!_.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&_.isArray(o[s])&&(o[s]=EE(o[s])),!l)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,o)=>{t(CE(r),o,n,0)}),n}return null}function $E(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const rs={transitional:Ox,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o?JSON.stringify(Dx(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return kE(t,this.formSerializer).toString();if((l=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Il(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),$E(t)):t}],transformResponse:[function(t){const n=this.transitional||rs.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?F.from(l,F.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{rs.headers[e]={}});const _E=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),RE=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&_E[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Xh=Symbol("internals");function qo(e){return e&&String(e).trim().toLowerCase()}function Qs(e){return e===!1||e==null?e:_.isArray(e)?e.map(Qs):String(e)}function PE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const TE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _u(e,t,n,r,o){if(_.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function NE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function IE(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class ot{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,u,c){const d=qo(u);if(!d)throw new Error("header name must be a non-empty string");const f=_.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=Qs(l))}const s=(l,u)=>_.forEach(l,(c,d)=>i(c,d,u));if(_.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(_.isString(t)&&(t=t.trim())&&!TE(t))s(RE(t),n);else if(_.isHeaders(t))for(const[l,u]of t.entries())i(u,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=qo(t),t){const r=_.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return PE(o);if(_.isFunction(n))return n.call(this,o,r);if(_.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qo(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_u(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=qo(s),s){const l=_.findKey(r,s);l&&(!n||_u(r,r[l],l,n))&&(delete r[l],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||_u(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return _.forEach(this,(o,i)=>{const s=_.findKey(r,i);if(s){n[s]=Qs(o),delete n[i];return}const l=t?NE(i):String(i).trim();l!==i&&delete n[i],n[l]=Qs(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Xh]=this[Xh]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=qo(s);r[l]||(IE(o,s),r[l]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}ot.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(ot.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(ot);function Ru(e,t){const n=this||rs,r=t||n,o=ot.from(r.headers);let i=r.data;return _.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Mx(e){return!!(e&&e.__CANCEL__)}function Io(e,t,n){F.call(this,e??"canceled",F.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(Io,F,{__CANCEL__:!0});function Fx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function zE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function LE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const v=d&&c-d;return v?Math.round(h*1e3/v):void 0}}function AE(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const Ha=(e,t,n=3)=>{let r=0;const o=LE(50,250);return AE(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=l;r=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-s)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Kh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Qh=e=>(...t)=>_.asap(()=>e(...t)),OE=rt.hasStandardBrowserEnv?function(){const t=rt.navigator&&/(msie|trident)/i.test(rt.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=_.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),DE=rt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),_.isString(r)&&s.push("path="+r),_.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ME(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function FE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Bx(e,t){return e&&!ME(t)?FE(e,t):t}const Yh=e=>e instanceof ot?{...e}:e;function Or(e,t){t=t||{};const n={};function r(c,d,f){return _.isPlainObject(c)&&_.isPlainObject(d)?_.merge.call({caseless:f},c,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function o(c,d,f){if(_.isUndefined(d)){if(!_.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function i(c,d){if(!_.isUndefined(d))return r(void 0,d)}function s(c,d){if(_.isUndefined(d)){if(!_.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,d)=>o(Yh(c),Yh(d),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=u[d]||o,h=f(e[d],t[d],d);_.isUndefined(h)&&f!==l||(n[d]=h)}),n}const Ux=e=>{const t=Or({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=ot.from(s),t.url=Ax(Bx(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(_.isFormData(n)){if(rt.hasStandardBrowserEnv||rt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[c,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(rt.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&OE(t.url))){const c=o&&i&&DE.read(i);c&&s.set(o,c)}return t},BE=typeof XMLHttpRequest<"u",UE=BE&&function(e){return new Promise(function(n,r){const o=Ux(e);let i=o.data;const s=ot.from(o.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=o,d,f,h,v,g;function S(){v&&v(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function x(){if(!b)return;const p=ot.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:p,config:e,request:b};Fx(function($){n($),S()},function($){r($),S()},j),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(r(new F("Request aborted",F.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||Ox;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new F(w,j.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&_.forEach(s.toJSON(),function(w,j){b.setRequestHeader(j,w)}),_.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),l&&l!=="json"&&(b.responseType=o.responseType),c&&([h,g]=Ha(c,!0),b.addEventListener("progress",h)),u&&b.upload&&([f,v]=Ha(u),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",v)),(o.cancelToken||o.signal)&&(d=p=>{b&&(r(!p||p.type?new Io(null,e,b):p),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const m=zE(o.url);if(m&&rt.protocols.indexOf(m)===-1){r(new F("Unsupported protocol "+m+":",F.ERR_BAD_REQUEST,e));return}b.send(i||null)})},VE=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof F?d:new Io(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new F(`timeout ${t} of ms exceeded`,F.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>_.asap(l),u}},HE=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},WE=async function*(e,t){for await(const n of qE(e))yield*HE(n,t)},qE=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Zh=(e,t,n,r)=>{const o=WE(e,t);let i=0,s,l=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){l(),u.close();return}let f=d.byteLength;if(n){let h=i+=f;n(h)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),o.return()}},{highWaterMark:2})},zl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vx=zl&&typeof ReadableStream=="function",GE=zl&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Hx=(e,...t)=>{try{return!!e(...t)}catch{return!1}},JE=Vx&&Hx(()=>{let e=!1;const t=new Request(rt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),em=64*1024,Yc=Vx&&Hx(()=>_.isReadableStream(new Response("").body)),Wa={stream:Yc&&(e=>e.body)};zl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Wa[t]&&(Wa[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new F(`Response type '${t}' is not supported`,F.ERR_NOT_SUPPORT,r)})})})(new Response);const XE=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(rt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await GE(e)).byteLength},KE=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??XE(t)},QE=zl&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:u,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:h}=Ux(e);c=c?(c+"").toLowerCase():"text";let v=VE([o,i&&i.toAbortSignal()],s),g;const S=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let b;try{if(u&&JE&&n!=="get"&&n!=="head"&&(b=await KE(d,r))!==0){let j=new Request(t,{method:"POST",body:r,duplex:"half"}),C;if(_.isFormData(r)&&(C=j.headers.get("content-type"))&&d.setContentType(C),j.body){const[$,E]=Kh(b,Ha(Qh(u)));r=Zh(j.body,em,$,E)}}_.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;g=new Request(t,{...h,signal:v,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:x?f:void 0});let m=await fetch(g);const p=Yc&&(c==="stream"||c==="response");if(Yc&&(l||p&&S)){const j={};["status","statusText","headers"].forEach(A=>{j[A]=m[A]});const C=_.toFiniteNumber(m.headers.get("content-length")),[$,E]=l&&Kh(C,Ha(Qh(l),!0))||[];m=new Response(Zh(m.body,em,$,()=>{E&&E(),S&&S()}),j)}c=c||"text";let w=await Wa[_.findKey(Wa,c)||"text"](m,e);return!p&&S&&S(),await new Promise((j,C)=>{Fx(j,C,{data:w,headers:ot.from(m.headers),status:m.status,statusText:m.statusText,config:e,request:g})})}catch(x){throw S&&S(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new F("Network Error",F.ERR_NETWORK,e,g),{cause:x.cause||x}):F.from(x,x&&x.code,e,g)}}),Zc={http:fE,xhr:UE,fetch:QE};_.forEach(Zc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tm=e=>`- ${e}`,YE=e=>_.isFunction(e)||e===null||e===!1,Wx={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!YE(n)&&(r=Zc[(s=String(n)).toLowerCase()],r===void 0))throw new F(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(tm).join(`
`):" "+tm(i[0]):"as no adapter specified";throw new F("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Zc};function Pu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Io(null,e)}function nm(e){return Pu(e),e.headers=ot.from(e.headers),e.data=Ru.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Wx.getAdapter(e.adapter||rs.adapter)(e).then(function(r){return Pu(e),r.data=Ru.call(e,e.transformResponse,r),r.headers=ot.from(r.headers),r},function(r){return Mx(r)||(Pu(e),r&&r.response&&(r.response.data=Ru.call(e,e.transformResponse,r.response),r.response.headers=ot.from(r.response.headers))),Promise.reject(r)})}const qx="1.7.7",_f={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_f[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rm={};_f.transitional=function(t,n,r){function o(i,s){return"[Axios v"+qx+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new F(o(s," has been removed"+(n?" in "+n:"")),F.ERR_DEPRECATED);return n&&!rm[s]&&(rm[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function ZE(e,t,n){if(typeof e!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],u=l===void 0||s(l,i,e);if(u!==!0)throw new F("option "+i+" must be "+u,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F("Unknown option "+i,F.ERR_BAD_OPTION)}}const ed={assertOptions:ZE,validators:_f},Ln=ed.validators;class Tr{constructor(t){this.defaults=t,this.interceptors={request:new Jh,response:new Jh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Or(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ed.assertOptions(r,{silentJSONParsing:Ln.transitional(Ln.boolean),forcedJSONParsing:Ln.transitional(Ln.boolean),clarifyTimeoutError:Ln.transitional(Ln.boolean)},!1),o!=null&&(_.isFunction(o)?n.paramsSerializer={serialize:o}:ed.assertOptions(o,{encode:Ln.function,serialize:Ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ot.concat(s,i);const l=[];let u=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(u=u&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,f=0,h;if(!u){const g=[nm.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,c),h=g.length,d=Promise.resolve(n);f<h;)d=d.then(g[f++],g[f++]);return d}h=l.length;let v=n;for(f=0;f<h;){const g=l[f++],S=l[f++];try{v=g(v)}catch(b){S.call(this,b);break}}try{d=nm.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Or(this.defaults,t);const n=Bx(t.baseURL,t.url);return Ax(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Tr.prototype[t]=function(n,r){return this.request(Or(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(Or(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Tr.prototype[t]=n(),Tr.prototype[t+"Form"]=n(!0)});class Rf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new Io(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Rf(function(o){t=o}),cancel:t}}}function e$(e){return function(n){return e.apply(null,n)}}function t$(e){return _.isObject(e)&&e.isAxiosError===!0}const td={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(td).forEach(([e,t])=>{td[t]=e});function Gx(e){const t=new Tr(e),n=kx(Tr.prototype.request,t);return _.extend(n,Tr.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Gx(Or(e,o))},n}const P=Gx(rs);P.Axios=Tr;P.CanceledError=Io;P.CancelToken=Rf;P.isCancel=Mx;P.VERSION=qx;P.toFormData=Il;P.AxiosError=F;P.Cancel=P.CanceledError;P.all=function(t){return Promise.all(t)};P.spread=e$;P.isAxiosError=t$;P.mergeConfig=Or;P.AxiosHeaders=ot;P.formToJSON=e=>Dx(_.isHTMLForm(e)?new FormData(e):e);P.getAdapter=Wx.getAdapter;P.HttpStatusCode=td;P.default=P;function n$(){const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(null),s=ge(),{setAuth:l}=y.useContext(ts),u="http://localhost:4000";console.log("Usando API_URL:",u);const c=async d=>{d.preventDefault();try{console.log("API_URL:",void 0),console.log("Modo:","production");const f=await P.post(`${u}/api/auth/login`,{correo:e,contraseña:n});console.log("Respuesta del servidor:",f);const h=f.data.token,v=f.data.rol,g=f.data.id_usuario;h?(console.log("Token recibido:",h),l({token:h}),localStorage.setItem("token",h),localStorage.setItem("rol",v),localStorage.setItem("idUser",g),s("/menuInicio")):(i("Error al autenticar"),console.log("Token no encontrado en la respuesta"))}catch(f){console.error("Error durante la autenticación:",f),i("Credenciales inválidas")}};return a.jsxs(r$,{children:[a.jsx(o$,{children:a.jsx("div",{children:a.jsx(W,{to:"/",children:a.jsx(St,{})})})}),a.jsx(i$,{autoPlay:!0,loop:!0,muted:!0,children:a.jsx("source",{src:"https://static.educacionit.com/alumni/assets/bg-login.webm",type:"video/webm"})}),a.jsxs(s$,{onSubmit:c,children:[a.jsx("h2",{children:"Login"}),o&&a.jsx(l$,{children:o}),a.jsxs(om,{children:[a.jsx(im,{htmlFor:"username",children:"Username"}),a.jsx(sm,{type:"text",id:"username",name:"username",value:e,onChange:d=>t(d.target.value)})]}),a.jsxs(om,{children:[a.jsx(im,{htmlFor:"password",children:"Password"}),a.jsx(sm,{type:"password",id:"password",name:"password",value:n,onChange:d=>r(d.target.value)})]}),a.jsx(a$,{type:"submit",children:"Login"})]})]})}const r$=k.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`,o$=k.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  justify-content: flex-start;
  width: auto;
  font-size: 50px;
`,i$=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,s$=k.form`
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
`,om=k.div`
  margin-bottom: 1.5rem;
  text-align: left;
`,im=k.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`,sm=k.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`,a$=k.button`
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
`,l$=k.p`
  color: red;
  margin-bottom: 1rem;
`,u$=({onConfirm:e,onCancel:t})=>a.jsx(c$,{children:a.jsxs(d$,{children:[a.jsx("h2",{children:"Confirmar"}),a.jsx("p",{children:"¿Estás seguro de que deseas cerrar sesión?"}),a.jsxs(f$,{children:[a.jsx(am,{onClick:e,children:"Aceptar"}),a.jsx(am,{onClick:t,children:"Cancelar"})]})]})}),c$=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,d$=k.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`,f$=k.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`,am=k.button`
  padding: 10px 20px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`,p$=()=>{const{setAuth:e}=y.useContext(ts),t=ge(),[n,r]=y.useState(!0),o=()=>{e(null),localStorage.removeItem("token"),t("/login")},i=()=>{r(!1),t(-1)};return a.jsxs(h$,{children:[n&&a.jsx(u$,{onConfirm:o,onCancel:i}),!n&&a.jsx("div",{children:"Cerrando sesión..."})]})},h$=k.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,m$=["xxl","xl","lg","md","sm","xs"],g$="xs",v$=y.createContext({prefixes:{},breakpoints:m$,minBreakpoint:g$});function x$(e,t){const{prefixes:n}=y.useContext(v$);return e||n[t]||t}const At=y.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:s,variant:l,responsive:u,...c},d)=>{const f=x$(e,"table"),h=zk(t,f,l&&`${f}-${l}`,s&&`${f}-${s}`,n&&`${f}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${f}-bordered`,o&&`${f}-borderless`,i&&`${f}-hover`),v=a.jsx("table",{...c,className:h,ref:d});if(u){let g=`${f}-responsive`;return typeof u=="string"&&(g=`${g}-${u}`),a.jsx("div",{className:g,children:v})}return v});var jt={},Ll={},Dr={},Jx={},Pf={},Br={},zo={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=y;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ke=Object.prototype.hasOwnProperty,y$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},um={};function Kx(e){return Ke.call(um,e)?!0:Ke.call(lm,e)?!1:y$.test(e)?um[e]=!0:(lm[e]=!0,!1)}function Je(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function Nf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tf,Nf);Ie[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tf,Nf);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tf,Nf);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w$=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(e){w$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ys[t]=Ys[e]})});var b$=/["'&<>]/;function Ve(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=b$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var S$=/([A-Z])/g,j$=/^ms-/,nd=Array.isArray;function mn(e,t){return{insertionMode:e,selectedValue:t}}function k$(e,t,n){switch(t){case"select":return mn(1,n.value!=null?n.value:n.defaultValue);case"svg":return mn(2,null);case"math":return mn(3,null);case"foreignObject":return mn(1,null);case"table":return mn(4,null);case"thead":case"tbody":case"tfoot":return mn(5,null);case"colgroup":return mn(7,null);case"tr":return mn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?mn(1,null):e}var cm=new Map;function Qx(e,t,n){if(typeof n!="object")throw Error(B(62));t=!0;for(var r in n)if(Ke.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=Ve(r);o=Ve((""+o).trim())}else{i=r;var s=cm.get(i);s!==void 0||(s=Ve(i.replace(S$,"-$1").toLowerCase().replace(j$,"-ms-")),cm.set(i,s)),i=s,o=typeof o=="number"?o===0||Ke.call(Ys,r)?""+o:o+"px":Ve((""+o).trim())}t?(t=!1,e.push(' style="',i,":",o)):e.push(";",i,":",o)}}t||e.push('"')}function at(e,t,n,r){switch(n){case"style":Qx(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Ie.hasOwnProperty(n)?Ie[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',Ve(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',Ve(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',Ve(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',Ve(r),'"')}}else if(Kx(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',Ve(r),'"')}}}function Zs(e,t,n){if(t!=null){if(n!=null)throw Error(B(60));if(typeof t!="object"||!("__html"in t))throw Error(B(61));t=t.__html,t!=null&&e.push(""+t)}}function C$(e){var t="";return Xx.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Tu(e,t,n,r){e.push(en(n));var o=n=null,i;for(i in t)if(Ke.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:at(e,r,i,s)}}return e.push(">"),Zs(e,o,n),typeof n=="string"?(e.push(Ve(n)),null):n}var E$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,dm=new Map;function en(e){var t=dm.get(e);if(t===void 0){if(!E$.test(e))throw Error(B(65,e));t="<"+e,dm.set(e,t)}return t}function $$(e,t,n,r,o){switch(t){case"select":e.push(en("select"));var i=null,s=null;for(d in n)if(Ke.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:at(e,r,d,l)}}return e.push(">"),Zs(e,s,i),i;case"option":s=o.selectedValue,e.push(en("option"));var u=l=null,c=null,d=null;for(i in n)if(Ke.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:at(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:C$(l),nd(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(' selected=""');break}}else""+s===n&&e.push(' selected=""');else c&&e.push(' selected=""');return e.push(">"),Zs(e,d,l),l;case"textarea":e.push(en("textarea")),d=s=i=null;for(l in n)if(Ke.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(B(91));default:at(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(">"),d!=null){if(i!=null)throw Error(B(92));if(nd(d)&&1<d.length)throw Error(B(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i!==null&&e.push(Ve(""+i)),null;case"input":e.push(en("input")),u=d=l=i=null;for(s in n)if(Ke.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(B(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:at(e,r,s,c)}return d!==null?at(e,r,"checked",d):u!==null&&at(e,r,"checked",u),i!==null?at(e,r,"value",i):l!==null&&at(e,r,"value",l),e.push("/>"),null;case"menuitem":e.push(en("menuitem"));for(var h in n)if(Ke.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(B(400));default:at(e,r,h,i)}return e.push(">"),null;case"title":e.push(en("title")),i=null;for(f in n)if(Ke.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(B(434));default:at(e,r,f,s)}return e.push(">"),i;case"listing":case"pre":e.push(en(t)),s=i=null;for(u in n)if(Ke.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:at(e,r,u,l)}if(e.push(">"),s!=null){if(i!=null)throw Error(B(60));if(typeof s!="object"||!("__html"in s))throw Error(B(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(en(t));for(var v in n)if(Ke.call(n,v)&&(i=n[v],i!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(B(399,t));default:at(e,r,v,i)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Tu(e,n,t,r);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),Tu(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Tu(e,n,t,r);e.push(en(t)),s=i=null;for(c in n)if(Ke.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":Qx(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Kx(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(" ",c,'="',Ve(l),'"')}return e.push(">"),Zs(e,s,i),i}}function fm(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(B(395));return e.push(n),e.push('"></template>')}function _$(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(B(397))}}function R$(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(B(397))}}var P$=/[<\u2028\u2029]/g;function Nu(e){return JSON.stringify(e).replace(P$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function T$(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function pm(e,t,n,r){return n.generateStaticMarkup?(e.push(Ve(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(Ve(t)),e=!0),e)}var vi=Object.assign,N$=Symbol.for("react.element"),Yx=Symbol.for("react.portal"),Zx=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),ry=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),iy=Symbol.for("react.suspense"),sy=Symbol.for("react.suspense_list"),ay=Symbol.for("react.memo"),If=Symbol.for("react.lazy"),I$=Symbol.for("react.scope"),z$=Symbol.for("react.debug_trace_mode"),L$=Symbol.for("react.legacy_hidden"),A$=Symbol.for("react.default_value"),hm=Symbol.iterator;function rd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zx:return"Fragment";case Yx:return"Portal";case ty:return"Profiler";case ey:return"StrictMode";case iy:return"Suspense";case sy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ry:return(e.displayName||"Context")+".Consumer";case ny:return(e._context.displayName||"Context")+".Provider";case oy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ay:return t=e.displayName||null,t!==null?t:rd(e.type)||"Memo";case If:t=e._payload,e=e._init;try{return rd(e(t))}catch{}}return null}var ly={};function mm(e,t){if(e=e.contextTypes,!e)return ly;var n={},r;for(r in e)n[r]=t[r];return n}var Er=null;function Al(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(B(401))}else{if(n===null)throw Error(B(401));Al(e,n)}t.context._currentValue2=t.value}}function uy(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&uy(e)}function cy(e){var t=e.parent;t!==null&&cy(t),e.context._currentValue2=e.value}function dy(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(B(402));e.depth===t.depth?Al(e,t):dy(e,t)}function fy(e,t){var n=t.parent;if(n===null)throw Error(B(402));e.depth===n.depth?Al(e,n):fy(e,n),t.context._currentValue2=t.value}function qa(e){var t=Er;t!==e&&(t===null?cy(e):e===null?uy(t):t.depth===e.depth?Al(t,e):t.depth>e.depth?dy(t,e):fy(t,e),Er=e)}var gm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function vm(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=gm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue2:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:vi({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&gm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=vi({},i,l)):vi(i,l))}e.state=i}else i.queue=null}var O$={id:1,overflow:""};function od(e,t,n){var r=e.id;e=e.overflow;var o=32-ea(r)-1;r&=~(1<<o),n+=1;var i=32-ea(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-ea(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var ea=Math.clz32?Math.clz32:F$,D$=Math.log,M$=Math.LN2;function F$(e){return e>>>=0,e===0?32:31-(D$(e)/M$|0)|0}function B$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var U$=typeof Object.is=="function"?Object.is:B$,$n=null,zf=null,ta=null,oe=null,ei=!1,Ga=!1,Fi=0,qn=null,Ol=0;function xr(){if($n===null)throw Error(B(321));return $n}function xm(){if(0<Ol)throw Error(B(312));return{memoizedState:null,queue:null,next:null}}function Lf(){return oe===null?ta===null?(ei=!1,ta=oe=xm()):(ei=!0,oe=ta):oe.next===null?(ei=!1,oe=oe.next=xm()):(ei=!0,oe=oe.next),oe}function Af(){zf=$n=null,Ga=!1,ta=null,Ol=0,oe=qn=null}function py(e,t){return typeof t=="function"?t(e):t}function ym(e,t,n){if($n=xr(),oe=Lf(),ei){var r=oe.queue;if(t=r.dispatch,qn!==null&&(n=qn.get(r),n!==void 0)){qn.delete(r),r=oe.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return oe.memoizedState=r,[r,t]}return[oe.memoizedState,t]}return e=e===py?typeof t=="function"?t():t:n!==void 0?n(t):t,oe.memoizedState=e,e=oe.queue={last:null,dispatch:null},e=e.dispatch=V$.bind(null,$n,e),[oe.memoizedState,e]}function wm(e,t){if($n=xr(),oe=Lf(),t=t===void 0?null:t,oe!==null){var n=oe.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!U$(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),oe.memoizedState=[e,t],e}function V$(e,t,n){if(25<=Ol)throw Error(B(301));if(e===$n)if(Ga=!0,e={action:n,next:null},qn===null&&(qn=new Map),n=qn.get(t),n===void 0)qn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function H$(){throw Error(B(394))}function _s(){}var bm={readContext:function(e){return e._currentValue2},useContext:function(e){return xr(),e._currentValue2},useMemo:wm,useReducer:ym,useRef:function(e){$n=xr(),oe=Lf();var t=oe.memoizedState;return t===null?(e={current:e},oe.memoizedState=e):t},useState:function(e){return ym(py,e)},useInsertionEffect:_s,useLayoutEffect:function(){},useCallback:function(e,t){return wm(function(){return e},t)},useImperativeHandle:_s,useEffect:_s,useDebugValue:_s,useDeferredValue:function(e){return xr(),e},useTransition:function(){return xr(),[!1,H$]},useId:function(){var e=zf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-ea(e)-1)).toString(32)+t;var n=na;if(n===null)throw Error(B(404));return t=Fi++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return xr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(B(407));return n()}},na=null,Iu=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function W$(e){return console.error(e),null}function ti(){}function q$(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?W$:o,onAllReady:ti,onShellReady:s===void 0?ti:s,onShellError:ti,onFatalError:ti},n=Ja(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Of(t,e,null,n,d,ly,null,O$),c.push(e),t}function Of(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&gy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Ja(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Bi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function Xa(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function Sm(e,t,n,r,o){for($n={},zf=t,Fi=0,e=n(r,o);Ga;)Ga=!1,Fi=0,Ol+=1,oe=null,e=n(r,o);return Af(),e}function jm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(B(108,rd(r)||"Unknown",l));r=vi({},s,n)}t.legacyContext=r,dt(e,t,o),t.legacyContext=s}else dt(e,t,o)}function km(e,t){if(e&&e.defaultProps){t=vi({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function id(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=mm(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue2:o),vm(i,n,r,o),jm(e,t,i,n)}else{i=mm(n,t.legacyContext),o=Sm(e,t,n,r,i);var s=Fi!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)vm(o,n,r,i),jm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=od(r,1,0);try{dt(e,t,o)}finally{t.treeContext=r}}else dt(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=$$(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=k$(s,n,r),sd(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",n,">")}o.lastPushedText=!1}else{switch(n){case L$:case z$:case ey:case ty:case Zx:dt(e,t,r.children);return;case sy:dt(e,t,r.children);return;case I$:throw Error(B(343));case iy:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Ja(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Ja(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(sd(e,t,r),e.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),c.status=1,Ka(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Bi(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Of(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case oy:if(r=Sm(e,t,n.render,r,o),Fi!==0){n=t.treeContext,t.treeContext=od(n,1,0);try{dt(e,t,r)}finally{t.treeContext=n}}else dt(e,t,r);return;case ay:n=n.type,r=km(n,r),id(e,t,n,r,o);return;case ny:if(o=r.children,n=n._context,r=r.value,i=n._currentValue2,n._currentValue2=r,s=Er,Er=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,dt(e,t,o),e=Er,e===null)throw Error(B(403));r=e.parentValue,e.context._currentValue2=r===A$?e.context._defaultValue:r,e=Er=e.parent,t.context=e;return;case ry:r=r.children,r=r(n._currentValue2),dt(e,t,r);return;case If:o=n._init,n=o(n._payload),r=km(n,r),id(e,t,n,r,void 0);return}throw Error(B(130,n==null?n:typeof n,""))}}function dt(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case N$:id(e,t,n.type,n.props,n.ref);return;case Yx:throw Error(B(257));case If:var r=n._init;n=r(n._payload),dt(e,t,n);return}if(nd(n)){Cm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=hm&&n[hm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);Cm(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=pm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=pm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Cm(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=od(i,r,o);try{sd(e,t,n[o])}finally{t.treeContext=i}}}function sd(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return dt(e,t,n)}catch(u){if(Af(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Ja(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Of(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,qa(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,qa(i),u}}function G$(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,my(this,t,e)}function hy(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(B(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return hy(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Ka(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Ka(e,n)}else e.completedSegments.push(t)}function my(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(B(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ti,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Ka(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(G$,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Ka(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function gy(e){if(e.status!==2){var t=Er,n=Iu.current;Iu.current=bm;var r=na;na=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){qa(s.context);try{dt(l,s,s.node),l.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),s.abortSet.delete(s),u.status=1,my(l,s.blockedBoundary,u)}catch(g){if(Af(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=s.ping;g.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=g,h=Bi(l,f);if(d===null?Xa(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var v=l.onAllReady;v()}}}finally{}}}o.splice(0,i),e.destination!==null&&Df(e,e.destination)}catch(g){Bi(e,g),Xa(e,g)}finally{na=r,Iu.current=n,n===bm&&qa(t)}}}function Rs(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)t.push(r[i]);o=Dl(e,t,o)}for(;i<r.length-1;i++)t.push(r[i]);return i<r.length&&(o=t.push(r[i])),o;default:throw Error(B(390))}}function Dl(e,t,n){var r=n.boundary;if(r===null)return Rs(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=Ve(r),t.push(r),t.push('"')),t.push("></template>")),Rs(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;return o=o.boundaryPrefix+i.toString(16),r=r.id=o,fm(t,e.responseState,r),Rs(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),fm(t,e.responseState,r.id),Rs(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(B(391));return Dl(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function Em(e,t,n){return _$(t,e.responseState,n.formatContext,n.id),Dl(e,t,n),R$(t,n.formatContext)}function $m(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)vy(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(B(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function vy(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(B(392));return Em(e,t,r)}return Em(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")<\/script>')}function Df(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Dl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(r.push(l.startInlineScript),l.sentClientRenderFunction?r.push('$RX("'):(l.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(B(395));if(r.push(u),r.push('"'),c||d||f){r.push(",");var h=Nu(c||"");r.push(h)}if(d||f){r.push(",");var v=Nu(d||"");r.push(v)}if(f){r.push(",");var g=Nu(f);r.push(g)}if(!r.push(")<\/script>")){e.destination=null,i++,o.splice(0,i);return}}o.splice(0,i);var S=e.completedBoundaries;for(i=0;i<S.length;i++)if(!$m(e,t,S[i])){e.destination=null,i++,S.splice(0,i);return}S.splice(0,i);var b=e.partialBoundaries;for(i=0;i<b.length;i++){var x=b[i];e:{o=e,s=t;var m=x.completedSegments;for(l=0;l<m.length;l++)if(!vy(o,s,x,m[l])){l++,m.splice(0,l);var p=!1;break e}m.splice(0,l),p=!0}if(!p){e.destination=null,i++,b.splice(0,i);return}}b.splice(0,i);var w=e.completedBoundaries;for(i=0;i<w.length;i++)if(!$m(e,t,w[i])){e.destination=null,i++,w.splice(0,i);return}w.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function J$(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return hy(r,e,t)}),n.clear(),e.destination!==null&&Df(e,e.destination)}catch(r){Bi(e,r),Xa(e,r)}}function X$(){}function xy(e,t,n,r){var o=!1,i=null,s="",l={push:function(c){return c!==null&&(s+=c),!0},destroy:function(c){o=!0,i=c}},u=!1;if(e=q$(e,T$(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,X$,void 0,function(){u=!0}),gy(e),J$(e,r),e.status===1)e.status=2,l.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=l;try{Df(e,l)}catch(c){Bi(e,c),Xa(e,c)}}if(o)throw i;if(!u)throw Error(B(426));return s}zo.renderToNodeStream=function(){throw Error(B(207))};zo.renderToStaticMarkup=function(e,t){return xy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};zo.renderToStaticNodeStream=function(){throw Error(B(208))};zo.renderToString=function(e,t){return xy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};zo.version="18.3.1";var Mf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=y;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ft=null,pt=0;function L(e,t){if(t.length!==0)if(512<t.length)0<pt&&(e.enqueue(new Uint8Array(ft.buffer,0,pt)),ft=new Uint8Array(512),pt=0),e.enqueue(t);else{var n=ft.length-pt;n<t.length&&(n===0?e.enqueue(ft):(ft.set(t.subarray(0,n),pt),e.enqueue(ft),t=t.subarray(n)),ft=new Uint8Array(512),pt=0),ft.set(t,pt),pt+=t.length}}function ue(e,t){return L(e,t),!0}function _m(e){ft&&0<pt&&(e.enqueue(new Uint8Array(ft.buffer,0,pt)),ft=null,pt=0)}var wy=new TextEncoder;function J(e){return wy.encode(e)}function T(e){return wy.encode(e)}function by(e,t){typeof e.error=="function"?e.error(t):e.close()}var Qe=Object.prototype.hasOwnProperty,K$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function Sy(e){return Qe.call(Pm,e)?!0:Qe.call(Rm,e)?!1:K$.test(e)?Pm[e]=!0:(Rm[e]=!0,!1)}function Xe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function Bf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ff,Bf);ze[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ff,Bf);ze[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ff,Bf);ze[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q$=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(e){Q$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ra[t]=ra[e]})});var Y$=/["'&<>]/;function Re(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=Y$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var Z$=/([A-Z])/g,e_=/^ms-/,ad=Array.isArray,t_=T("<script>"),n_=T("<\/script>"),r_=T('<script src="'),o_=T('<script type="module" src="'),Tm=T('" async=""><\/script>'),i_=/(<\/|<)(s)(cript)/gi;function s_(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function a_(e,t,n,r,o){e=e===void 0?"":e,t=t===void 0?t_:T('<script nonce="'+Re(t)+'">');var i=[];if(n!==void 0&&i.push(t,J((""+n).replace(i_,s_)),n_),r!==void 0)for(n=0;n<r.length;n++)i.push(r_,J(Re(r[n])),Tm);if(o!==void 0)for(r=0;r<o.length;r++)i.push(o_,J(Re(o[r])),Tm);return{bootstrapChunks:i,startInlineScript:t,placeholderPrefix:T(e+"P:"),segmentPrefix:T(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function tn(e,t){return{insertionMode:e,selectedValue:t}}function l_(e){return tn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function u_(e,t,n){switch(t){case"select":return tn(1,n.value!=null?n.value:n.defaultValue);case"svg":return tn(2,null);case"math":return tn(3,null);case"foreignObject":return tn(1,null);case"table":return tn(4,null);case"thead":case"tbody":case"tfoot":return tn(5,null);case"colgroup":return tn(7,null);case"tr":return tn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?tn(1,null):e}var Uf=T("<!-- -->");function Nm(e,t,n,r){return t===""?r:(r&&e.push(Uf),e.push(J(Re(t))),!0)}var Im=new Map,c_=T(' style="'),zm=T(":"),d_=T(";");function jy(e,t,n){if(typeof n!="object")throw Error(H(62));t=!0;for(var r in n)if(Qe.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var i=J(Re(r));o=J(Re((""+o).trim()))}else{i=r;var s=Im.get(i);s!==void 0||(s=T(Re(i.replace(Z$,"-$1").toLowerCase().replace(e_,"-ms-"))),Im.set(i,s)),i=s,o=typeof o=="number"?o===0||Qe.call(ra,r)?J(""+o):J(o+"px"):J(Re((""+o).trim()))}t?(t=!1,e.push(c_,i,zm,o)):e.push(d_,i,zm,o)}}t||e.push(yr)}var On=T(" "),Wr=T('="'),yr=T('"'),Lm=T('=""');function lt(e,t,n,r){switch(n){case"style":jy(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=ze.hasOwnProperty(n)?ze[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=J(t.attributeName),t.type){case 3:r&&e.push(On,n,Lm);break;case 4:r===!0?e.push(On,n,Lm):r!==!1&&e.push(On,n,Wr,J(Re(r)),yr);break;case 5:isNaN(r)||e.push(On,n,Wr,J(Re(r)),yr);break;case 6:!isNaN(r)&&1<=r&&e.push(On,n,Wr,J(Re(r)),yr);break;default:t.sanitizeURL&&(r=""+r),e.push(On,n,Wr,J(Re(r)),yr)}}else if(Sy(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(On,J(n),Wr,J(Re(r)),yr)}}}var Dn=T(">"),Am=T("/>");function oa(e,t,n){if(t!=null){if(n!=null)throw Error(H(60));if(typeof t!="object"||!("__html"in t))throw Error(H(61));t=t.__html,t!=null&&e.push(J(""+t))}}function f_(e){var t="";return yy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var zu=T(' selected=""');function Lu(e,t,n,r){e.push(nn(n));var o=n=null,i;for(i in t)if(Qe.call(t,i)){var s=t[i];if(s!=null)switch(i){case"children":n=s;break;case"dangerouslySetInnerHTML":o=s;break;default:lt(e,r,i,s)}}return e.push(Dn),oa(e,o,n),typeof n=="string"?(e.push(J(Re(n))),null):n}var Au=T(`
`),p_=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Om=new Map;function nn(e){var t=Om.get(e);if(t===void 0){if(!p_.test(e))throw Error(H(65,e));t=T("<"+e),Om.set(e,t)}return t}var h_=T("<!DOCTYPE html>");function m_(e,t,n,r,o){switch(t){case"select":e.push(nn("select"));var i=null,s=null;for(d in n)if(Qe.call(n,d)){var l=n[d];if(l!=null)switch(d){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"defaultValue":case"value":break;default:lt(e,r,d,l)}}return e.push(Dn),oa(e,s,i),i;case"option":s=o.selectedValue,e.push(nn("option"));var u=l=null,c=null,d=null;for(i in n)if(Qe.call(n,i)){var f=n[i];if(f!=null)switch(i){case"children":l=f;break;case"selected":c=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":u=f;default:lt(e,r,i,f)}}if(s!=null)if(n=u!==null?""+u:f_(l),ad(s)){for(r=0;r<s.length;r++)if(""+s[r]===n){e.push(zu);break}}else""+s===n&&e.push(zu);else c&&e.push(zu);return e.push(Dn),oa(e,d,l),l;case"textarea":e.push(nn("textarea")),d=s=i=null;for(l in n)if(Qe.call(n,l)&&(u=n[l],u!=null))switch(l){case"children":d=u;break;case"value":i=u;break;case"defaultValue":s=u;break;case"dangerouslySetInnerHTML":throw Error(H(91));default:lt(e,r,l,u)}if(i===null&&s!==null&&(i=s),e.push(Dn),d!=null){if(i!=null)throw Error(H(92));if(ad(d)&&1<d.length)throw Error(H(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(Au),i!==null&&e.push(J(Re(""+i))),null;case"input":e.push(nn("input")),u=d=l=i=null;for(s in n)if(Qe.call(n,s)&&(c=n[s],c!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(H(399,"input"));case"defaultChecked":u=c;break;case"defaultValue":l=c;break;case"checked":d=c;break;case"value":i=c;break;default:lt(e,r,s,c)}return d!==null?lt(e,r,"checked",d):u!==null&&lt(e,r,"checked",u),i!==null?lt(e,r,"value",i):l!==null&&lt(e,r,"value",l),e.push(Am),null;case"menuitem":e.push(nn("menuitem"));for(var h in n)if(Qe.call(n,h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(H(400));default:lt(e,r,h,i)}return e.push(Dn),null;case"title":e.push(nn("title")),i=null;for(f in n)if(Qe.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":i=s;break;case"dangerouslySetInnerHTML":throw Error(H(434));default:lt(e,r,f,s)}return e.push(Dn),i;case"listing":case"pre":e.push(nn(t)),s=i=null;for(u in n)if(Qe.call(n,u)&&(l=n[u],l!=null))switch(u){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;default:lt(e,r,u,l)}if(e.push(Dn),s!=null){if(i!=null)throw Error(H(60));if(typeof s!="object"||!("__html"in s))throw Error(H(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Au,J(n)):e.push(J(""+n)))}return typeof i=="string"&&i[0]===`
`&&e.push(Au),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(nn(t));for(var v in n)if(Qe.call(n,v)&&(i=n[v],i!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(H(399,t));default:lt(e,r,v,i)}return e.push(Am),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Lu(e,n,t,r);case"html":return o.insertionMode===0&&e.push(h_),Lu(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Lu(e,n,t,r);e.push(nn(t)),s=i=null;for(c in n)if(Qe.call(n,c)&&(l=n[c],l!=null))switch(c){case"children":i=l;break;case"dangerouslySetInnerHTML":s=l;break;case"style":jy(e,r,l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Sy(c)&&typeof l!="function"&&typeof l!="symbol"&&e.push(On,J(c),Wr,J(Re(l)),yr)}return e.push(Dn),oa(e,s,i),i}}var g_=T("</"),v_=T(">"),x_=T('<template id="'),y_=T('"></template>'),w_=T("<!--$-->"),b_=T('<!--$?--><template id="'),S_=T('"></template>'),j_=T("<!--$!-->"),k_=T("<!--/$-->"),C_=T("<template"),E_=T('"'),$_=T(' data-dgst="');T(' data-msg="');T(' data-stck="');var __=T("></template>");function Dm(e,t,n){if(L(e,b_),n===null)throw Error(H(395));return L(e,n),ue(e,S_)}var R_=T('<div hidden id="'),P_=T('">'),T_=T("</div>"),N_=T('<svg aria-hidden="true" style="display:none" id="'),I_=T('">'),z_=T("</svg>"),L_=T('<math aria-hidden="true" style="display:none" id="'),A_=T('">'),O_=T("</math>"),D_=T('<table hidden id="'),M_=T('">'),F_=T("</table>"),B_=T('<table hidden><tbody id="'),U_=T('">'),V_=T("</tbody></table>"),H_=T('<table hidden><tr id="'),W_=T('">'),q_=T("</tr></table>"),G_=T('<table hidden><colgroup id="'),J_=T('">'),X_=T("</colgroup></table>");function K_(e,t,n,r){switch(n.insertionMode){case 0:case 1:return L(e,R_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,P_);case 2:return L(e,N_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,I_);case 3:return L(e,L_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,A_);case 4:return L(e,D_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,M_);case 5:return L(e,B_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,U_);case 6:return L(e,H_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,W_);case 7:return L(e,G_),L(e,t.segmentPrefix),L(e,J(r.toString(16))),ue(e,J_);default:throw Error(H(397))}}function Q_(e,t){switch(t.insertionMode){case 0:case 1:return ue(e,T_);case 2:return ue(e,z_);case 3:return ue(e,O_);case 4:return ue(e,F_);case 5:return ue(e,V_);case 6:return ue(e,q_);case 7:return ue(e,X_);default:throw Error(H(397))}}var Y_=T('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Z_=T('$RS("'),e3=T('","'),t3=T('")<\/script>'),n3=T('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),r3=T('$RC("'),o3=T('","'),i3=T('")<\/script>'),s3=T('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),a3=T('$RX("'),l3=T('"'),u3=T(")<\/script>"),Ou=T(","),c3=/[<\u2028\u2029]/g;function Du(e){return JSON.stringify(e).replace(c3,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var xi=Object.assign,d3=Symbol.for("react.element"),ky=Symbol.for("react.portal"),Cy=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Py=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),Ny=Symbol.for("react.suspense_list"),Iy=Symbol.for("react.memo"),Vf=Symbol.for("react.lazy"),f3=Symbol.for("react.scope"),p3=Symbol.for("react.debug_trace_mode"),h3=Symbol.for("react.legacy_hidden"),m3=Symbol.for("react.default_value"),Mm=Symbol.iterator;function ld(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cy:return"Fragment";case ky:return"Portal";case $y:return"Profiler";case Ey:return"StrictMode";case Ty:return"Suspense";case Ny:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ry:return(e.displayName||"Context")+".Consumer";case _y:return(e._context.displayName||"Context")+".Provider";case Py:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Iy:return t=e.displayName||null,t!==null?t:ld(e.type)||"Memo";case Vf:t=e._payload,e=e._init;try{return ld(e(t))}catch{}}return null}var zy={};function Fm(e,t){if(e=e.contextTypes,!e)return zy;var n={},r;for(r in e)n[r]=t[r];return n}var $r=null;function Ml(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(H(401))}else{if(n===null)throw Error(H(401));Ml(e,n)}t.context._currentValue=t.value}}function Ly(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Ly(e)}function Ay(e){var t=e.parent;t!==null&&Ay(t),e.context._currentValue=e.value}function Oy(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(H(402));e.depth===t.depth?Ml(e,t):Oy(e,t)}function Dy(e,t){var n=t.parent;if(n===null)throw Error(H(402));e.depth===n.depth?Ml(e,n):Dy(e,n),t.context._currentValue=t.value}function Qa(e){var t=$r;t!==e&&(t===null?Ay(e):e===null?Ly(t):t.depth===e.depth?Ml(t,e):t.depth>e.depth?Oy(t,e):Dy(t,e),$r=e)}var Bm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Um(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=Bm,e.props=n,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var s=t.contextType;if(e.context=typeof s=="object"&&s!==null?s._currentValue:r,s=t.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,o),o=s==null?o:xi({},o,s),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Bm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,s=i.replace,i.queue=null,i.replace=!1,s&&t.length===1)e.state=t[0];else{for(i=s?t[0]:e.state,o=!0,s=s?1:0;s<t.length;s++){var l=t[s];l=typeof l=="function"?l.call(e,i,n,r):l,l!=null&&(o?(o=!1,i=xi({},i,l)):xi(i,l))}e.state=i}else i.queue=null}var g3={id:1,overflow:""};function ud(e,t,n){var r=e.id;e=e.overflow;var o=32-ia(r)-1;r&=~(1<<o),n+=1;var i=32-ia(t)+o;if(30<i){var s=o-o%5;return i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,{id:1<<32-ia(t)+o|n<<o|r,overflow:i+e}}return{id:1<<i|n<<o|r,overflow:e}}var ia=Math.clz32?Math.clz32:y3,v3=Math.log,x3=Math.LN2;function y3(e){return e>>>=0,e===0?32:31-(v3(e)/x3|0)|0}function w3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var b3=typeof Object.is=="function"?Object.is:w3,_n=null,Hf=null,sa=null,ie=null,ni=!1,Ya=!1,Ui=0,Gn=null,Fl=0;function wr(){if(_n===null)throw Error(H(321));return _n}function Vm(){if(0<Fl)throw Error(H(312));return{memoizedState:null,queue:null,next:null}}function Wf(){return ie===null?sa===null?(ni=!1,sa=ie=Vm()):(ni=!0,ie=sa):ie.next===null?(ni=!1,ie=ie.next=Vm()):(ni=!0,ie=ie.next),ie}function qf(){Hf=_n=null,Ya=!1,sa=null,Fl=0,ie=Gn=null}function My(e,t){return typeof t=="function"?t(e):t}function Hm(e,t,n){if(_n=wr(),ie=Wf(),ni){var r=ie.queue;if(t=r.dispatch,Gn!==null&&(n=Gn.get(r),n!==void 0)){Gn.delete(r),r=ie.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return ie.memoizedState=r,[r,t]}return[ie.memoizedState,t]}return e=e===My?typeof t=="function"?t():t:n!==void 0?n(t):t,ie.memoizedState=e,e=ie.queue={last:null,dispatch:null},e=e.dispatch=S3.bind(null,_n,e),[ie.memoizedState,e]}function Wm(e,t){if(_n=wr(),ie=Wf(),t=t===void 0?null:t,ie!==null){var n=ie.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!b3(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),ie.memoizedState=[e,t],e}function S3(e,t,n){if(25<=Fl)throw Error(H(301));if(e===_n)if(Ya=!0,e={action:n,next:null},Gn===null&&(Gn=new Map),n=Gn.get(t),n===void 0)Gn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function j3(){throw Error(H(394))}function Ps(){}var qm={readContext:function(e){return e._currentValue},useContext:function(e){return wr(),e._currentValue},useMemo:Wm,useReducer:Hm,useRef:function(e){_n=wr(),ie=Wf();var t=ie.memoizedState;return t===null?(e={current:e},ie.memoizedState=e):t},useState:function(e){return Hm(My,e)},useInsertionEffect:Ps,useLayoutEffect:function(){},useCallback:function(e,t){return Wm(function(){return e},t)},useImperativeHandle:Ps,useEffect:Ps,useDebugValue:Ps,useDeferredValue:function(e){return wr(),e},useTransition:function(){return wr(),[!1,j3]},useId:function(){var e=Hf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-ia(e)-1)).toString(32)+t;var n=aa;if(n===null)throw Error(H(404));return t=Ui++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return wr(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(H(407));return n()}},aa=null,Mu=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function k3(e){return console.error(e),null}function ri(){}function C3(e,t,n,r,o,i,s,l,u){var c=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?k3:o,onAllReady:i===void 0?ri:i,onShellReady:s===void 0?ri:s,onShellError:l===void 0?ri:l,onFatalError:u===void 0?ri:u},n=Za(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Gf(t,e,null,n,d,zy,null,g3),c.push(e),t}function Gf(e,t,n,r,o,i,s,l){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var u={node:t,ping:function(){var c=e.pingedTasks;c.push(u),c.length===1&&Uy(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:i,context:s,treeContext:l};return o.add(u),u}function Za(e,t,n,r,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:i}}function Vi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function el(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,by(e.destination,t)):(e.status=1,e.fatalError=t)}function Gm(e,t,n,r,o){for(_n={},Hf=t,Ui=0,e=n(r,o);Ya;)Ya=!1,Ui=0,Fl+=1,ie=null,e=n(r,o);return qf(),e}function Jm(e,t,n,r){var o=n.render(),i=r.childContextTypes;if(i!=null){var s=t.legacyContext;if(typeof n.getChildContext!="function")r=s;else{n=n.getChildContext();for(var l in n)if(!(l in i))throw Error(H(108,ld(r)||"Unknown",l));r=xi({},s,n)}t.legacyContext=r,ht(e,t,o),t.legacyContext=s}else ht(e,t,o)}function Xm(e,t){if(e&&e.defaultProps){t=xi({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cd(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=Fm(n,t.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue:o),Um(i,n,r,o),Jm(e,t,i,n)}else{i=Fm(n,t.legacyContext),o=Gm(e,t,n,r,i);var s=Ui!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)Um(o,n,r,i),Jm(e,t,o,n);else if(s){r=t.treeContext,t.treeContext=ud(r,1,0);try{ht(e,t,o)}finally{t.treeContext=r}}else ht(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,i=m_(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,s=o.formatContext,o.formatContext=u_(s,n,r),dd(e,t,i),o.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(g_,J(n),v_)}o.lastPushedText=!1}else{switch(n){case h3:case p3:case Ey:case $y:case Cy:ht(e,t,r.children);return;case Ny:ht(e,t,r.children);return;case f3:throw Error(H(343));case Ty:e:{n=t.blockedBoundary,o=t.blockedSegment,i=r.fallback,r=r.children,s=new Set;var l={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},u=Za(e,o.chunks.length,l,o.formatContext,!1,!1);o.children.push(u),o.lastPushedText=!1;var c=Za(e,0,null,o.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=l,t.blockedSegment=c;try{if(dd(e,t,r),c.lastPushedText&&c.textEmbedded&&c.chunks.push(Uf),c.status=1,tl(l,c),l.pendingTasks===0)break e}catch(d){c.status=4,l.forceClientRender=!0,l.errorDigest=Vi(e,d)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Gf(e,i,n,u,s,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Py:if(r=Gm(e,t,n.render,r,o),Ui!==0){n=t.treeContext,t.treeContext=ud(n,1,0);try{ht(e,t,r)}finally{t.treeContext=n}}else ht(e,t,r);return;case Iy:n=n.type,r=Xm(n,r),cd(e,t,n,r,o);return;case _y:if(o=r.children,n=n._context,r=r.value,i=n._currentValue,n._currentValue=r,s=$r,$r=r={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:i,value:r},t.context=r,ht(e,t,o),e=$r,e===null)throw Error(H(403));r=e.parentValue,e.context._currentValue=r===m3?e.context._defaultValue:r,e=$r=e.parent,t.context=e;return;case Ry:r=r.children,r=r(n._currentValue),ht(e,t,r);return;case Vf:o=n._init,n=o(n._payload),r=Xm(n,r),cd(e,t,n,r,void 0);return}throw Error(H(130,n==null?n:typeof n,""))}}function ht(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case d3:cd(e,t,n.type,n.props,n.ref);return;case ky:throw Error(H(257));case Vf:var r=n._init;n=r(n._payload),ht(e,t,n);return}if(ad(n)){Km(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=Mm&&n[Mm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);Km(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=Nm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=Nm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Km(e,t,n){for(var r=n.length,o=0;o<r;o++){var i=t.treeContext;t.treeContext=ud(i,r,o);try{dd(e,t,n[o])}finally{t.treeContext=i}}}function dd(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return ht(e,t,n)}catch(u){if(qf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){n=u;var s=t.blockedSegment,l=Za(e,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(l),s.lastPushedText=!1,e=Gf(e,t.node,t.blockedBoundary,l,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Qa(i)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=i,Qa(i),u}}function E3(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,By(this,t,e)}function Fy(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(H(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return Fy(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function tl(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&tl(e,n)}else e.completedSegments.push(t)}function By(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(H(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ri,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&tl(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(E3,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(tl(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Uy(e){if(e.status!==2){var t=$r,n=Mu.current;Mu.current=qm;var r=aa;aa=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var s=o[i],l=e,u=s.blockedSegment;if(u.status===0){Qa(s.context);try{ht(l,s,s.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Uf),s.abortSet.delete(s),u.status=1,By(l,s.blockedBoundary,u)}catch(g){if(qf(),typeof g=="object"&&g!==null&&typeof g.then=="function"){var c=s.ping;g.then(c,c)}else{s.abortSet.delete(s),u.status=4;var d=s.blockedBoundary,f=g,h=Vi(l,f);if(d===null?el(l,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=h,d.parentFlushed&&l.clientRenderedBoundaries.push(d))),l.allPendingTasks--,l.allPendingTasks===0){var v=l.onAllReady;v()}}}finally{}}}o.splice(0,i),e.destination!==null&&Jf(e,e.destination)}catch(g){Vi(e,g),el(e,g)}finally{aa=r,Mu.current=n,n===qm&&Qa(t)}}}function Ts(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,L(t,x_),L(t,e.placeholderPrefix),e=J(r.toString(16)),L(t,e),ue(t,y_);case 1:n.status=2;var o=!0;r=n.chunks;var i=0;n=n.children;for(var s=0;s<n.length;s++){for(o=n[s];i<o.index;i++)L(t,r[i]);o=Bl(e,t,o)}for(;i<r.length-1;i++)L(t,r[i]);return i<r.length&&(o=ue(t,r[i])),o;default:throw Error(H(390))}}function Bl(e,t,n){var r=n.boundary;if(r===null)return Ts(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,ue(t,j_),L(t,C_),r&&(L(t,$_),L(t,J(Re(r))),L(t,E_)),ue(t,__),Ts(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,i=o.nextSuspenseID++;o=T(o.boundaryPrefix+i.toString(16)),r=r.id=o,Dm(t,e.responseState,r),Ts(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Dm(t,e.responseState,r.id),Ts(e,t,n);else{if(ue(t,w_),n=r.completedSegments,n.length!==1)throw Error(H(391));Bl(e,t,n[0])}return ue(t,k_)}function Qm(e,t,n){return K_(t,e.responseState,n.formatContext,n.id),Bl(e,t,n),Q_(t,n.formatContext)}function Ym(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)Vy(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,L(t,e.startInlineScript),e.sentCompleteBoundaryFunction?L(t,r3):(e.sentCompleteBoundaryFunction=!0,L(t,n3)),r===null)throw Error(H(395));return n=J(n.toString(16)),L(t,r),L(t,o3),L(t,e.segmentPrefix),L(t,n),ue(t,i3)}function Vy(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(H(392));return Qm(e,t,r)}return Qm(e,t,r),e=e.responseState,L(t,e.startInlineScript),e.sentCompleteSegmentFunction?L(t,Z_):(e.sentCompleteSegmentFunction=!0,L(t,Y_)),L(t,e.segmentPrefix),o=J(o.toString(16)),L(t,o),L(t,e3),L(t,e.placeholderPrefix),L(t,o),ue(t,t3)}function Jf(e,t){ft=new Uint8Array(512),pt=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Bl(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)L(t,r[n]);n<r.length&&ue(t,r[n])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var s=o[i];r=t;var l=e.responseState,u=s.id,c=s.errorDigest,d=s.errorMessage,f=s.errorComponentStack;if(L(r,l.startInlineScript),l.sentClientRenderFunction?L(r,a3):(l.sentClientRenderFunction=!0,L(r,s3)),u===null)throw Error(H(395));L(r,u),L(r,l3),(c||d||f)&&(L(r,Ou),L(r,J(Du(c||"")))),(d||f)&&(L(r,Ou),L(r,J(Du(d||"")))),f&&(L(r,Ou),L(r,J(Du(f)))),ue(r,u3)}o.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)Ym(e,t,h[i]);h.splice(0,i),_m(t),ft=new Uint8Array(512),pt=0;var v=e.partialBoundaries;for(i=0;i<v.length;i++){var g=v[i];e:{o=e,s=t;var S=g.completedSegments;for(l=0;l<S.length;l++)if(!Vy(o,s,g,S[l])){l++,S.splice(0,l);var b=!1;break e}S.splice(0,l),b=!0}if(!b){e.destination=null,i++,v.splice(0,i);return}}v.splice(0,i);var x=e.completedBoundaries;for(i=0;i<x.length;i++)Ym(e,t,x[i]);x.splice(0,i)}finally{_m(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Zm(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return Fy(r,e,t)}),n.clear(),e.destination!==null&&Jf(e,e.destination)}catch(r){Vi(e,r),el(e,r)}}Mf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var o,i,s=new Promise(function(d,f){i=d,o=f}),l=C3(e,a_(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),l_(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,i,function(){var d=new ReadableStream({type:"bytes",pull:function(f){if(l.status===1)l.status=2,by(f,l.fatalError);else if(l.status!==2&&l.destination===null){l.destination=f;try{Jf(l,f)}catch(h){Vi(l,h),el(l,h)}}},cancel:function(){Zm(l)}},{highWaterMark:0});d.allReady=s,n(d)},function(d){s.catch(function(){}),r(d)},o);if(t&&t.signal){var u=t.signal,c=function(){Zm(l,u.reason),u.removeEventListener("abort",c)};u.addEventListener("abort",c)}Uy(l)})};Mf.version="18.3.1";var Lo,Hy;Lo=zo,Hy=Mf;Br.version=Lo.version;Br.renderToString=Lo.renderToString;Br.renderToStaticMarkup=Lo.renderToStaticMarkup;Br.renderToNodeStream=Lo.renderToNodeStream;Br.renderToStaticNodeStream=Lo.renderToStaticNodeStream;Br.renderToReadableStream=Hy.renderToReadableStream;var $3=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pf,"__esModule",{value:!0});const Ut=$3(y),_3=Br,R3=["string","number","boolean"];function P3({header:e,body:t}){const n=Ut.default.createElement("tr",null,e.map(o=>Ut.default.createElement("th",{key:o},o))),r=t.map((o,i)=>Array.isArray(o)?Ut.default.createElement("tr",{key:i},o.map((s,l)=>Ut.default.createElement("th",{key:l}," ",s," "))):o!==null&&typeof o=="object"?Ut.default.createElement("tr",{key:i},Object.entries(o).map(([s,l],u)=>typeof l=="object"?(console.error(`typeof ${s} is incorrect, only accept ${R3.join(", ")} `),Ut.default.createElement("th",{key:u})):Ut.default.createElement("th",{key:u},Ut.default.createElement(Ut.default.Fragment,null,l)))):(console.error(`
       data structure is incorrect,  
       data structure type -> 
       " type data = Array<{ [key: string]: string | number | boolean }> 
                         or 
        type data = Array<(string | number | boolean)[]>"
      `),null));return(0,_3.renderToString)(Ut.default.createElement("table",null,Ut.default.createElement("tbody",null,n,r)))}Pf.default=P3;(function(e){var t=it&&it.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=e.template=e.uri=e.format=e.base64=void 0;function n(i){return window.btoa(unescape(encodeURIComponent(i)))}e.base64=n;function r(i,s){return i.replace(/{(\w+)}/g,(l,u)=>s[u])}e.format=r,e.uri="data:application/vnd.ms-excel;base64,",e.template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{table}</body></html>';var o=Pf;Object.defineProperty(e,"createTable",{enumerable:!0,get:function(){return t(o).default}})})(Jx);var T3=it&&it.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),N3=it&&it.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),I3=it&&it.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&T3(t,e,n);return N3(t,e),t};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.downloadExcel=Dr.excel=void 0;const oi=I3(Jx);function Wy(){return document?!0:((process==null?void 0:"production")!=="production"&&console.error("Failed to access document object"),!1)}function qy(e,t){const n=window.document.createElement("a");return n.href=oi.uri+oi.base64(oi.format(oi.template,t)),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),!0}function Gy(e,t){if(e)return e.cloneNode(!0).outerHTML;if(t)return oi.createTable(t);console.error("currentTableRef or tablePayload does not exist")}function z3({fileName:e,sheet:t,tablePayload:n},r){if(!Wy())return!1;const o=Gy(r,n);return qy(e,{worksheet:t||"Worksheet",table:o})}Dr.downloadExcel=z3;function L3({currentTableRef:e,filename:t,sheet:n}){function r(){if(!Wy())return!1;const o=Gy(e),i=`${t}.xls`;return qy(i,{worksheet:n||"Worksheet",table:o})}return{onDownload:r}}Dr.excel=L3;Object.defineProperty(Ll,"__esModule",{value:!0});Ll.useDownloadExcel=void 0;const Fu=y,A3=Dr;function O3({currentTableRef:e,filename:t,sheet:n}){const[r,o]=(0,Fu.useState)({});return(0,Fu.useEffect)(()=>{o({currentTableRef:e,filename:t,sheet:n})},[e,t,n]),(0,Fu.useMemo)(()=>(0,A3.excel)(r),[r])}Ll.useDownloadExcel=O3;(function(e){var t=it&&it.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(e,"__esModule",{value:!0}),e.downloadExcel=e.useDownloadExcel=e.DownloadTableExcel=void 0;const n=t(y),r=Ll;Object.defineProperty(e,"useDownloadExcel",{enumerable:!0,get:function(){return r.useDownloadExcel}});const o=Dr;Object.defineProperty(e,"downloadExcel",{enumerable:!0,get:function(){return o.downloadExcel}});const i=({currentTableRef:s,filename:l,sheet:u,children:c})=>{const{onDownload:d}=(0,r.useDownloadExcel)({currentTableRef:s,filename:l,sheet:u});return n.default.createElement("span",{onClick:d},c)};e.DownloadTableExcel=i})(jt);const Jy="https://backend-riosdevida-production.up.railway.app",e0=`${Jy}/api/miembros`,t0=`${Jy}/api/miembros/lider`;function D3(){const{auth:e}=y.useContext(ts),[t,n]=y.useState([]),[r,o]=y.useState([]),[i,s]=y.useState(null),l=y.useRef(null),u=localStorage.getItem("token"),c=localStorage.getItem("idUser"),d=localStorage.getItem("rol");y.useEffect(()=>{f(),d===2&&h()},[e]);const f=async(b=c)=>{try{const x=b?await P.get(`${t0}/${b}`,{headers:{Authorization:`Bearer ${u}`}}):await P.get(e.id_rol===3?`${t0}/${e.id_usuario}`:e0,{headers:{Authorization:`Bearer ${u}`}});n(x.data)}catch(x){console.error("Error al obtener los miembros:",x),x.response&&x.response.status===401&&console.log("Token expiró")}},h=async()=>{try{const b=await P.get(`/supervisores/${c}/lideres`,{headers:{Authorization:`Bearer ${u}`}});o(b.data)}catch(b){console.error("Error al obtener líderes:",b)}},v=async b=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${e0}/${b}`,{headers:{Authorization:`Bearer ${u}`}}),f()}catch(x){console.error("Error al eliminar el miembro:",x),x.response&&x.response.status===401?console.log("Token expiró o no autorizado."):alert("Ocurrió un error al eliminar el miembro. Por favor, intenta de nuevo.")}},g=b=>{const x=b.target.value||null;s(x),f(x)},{onDownload:S}=jt.useDownloadExcel({currentTableRef:l.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(M3,{children:[a.jsx(F3,{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})}),a.jsxs(B3,{children:[a.jsxs(W,{to:"/crearMiembro",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:S,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Miembros"]})]}),e.id_rol===2&&a.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[a.jsx("label",{htmlFor:"liderSelect",children:"Seleccionar Líder:"}),a.jsxs("select",{id:"liderSelect",onChange:g,value:i||"",style:{marginLeft:"10px"},children:[a.jsx("option",{value:"",children:"Ver todos los miembros"}),r.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.nombre," ",b.apellido]},b.id_lider))]})]}),a.jsxs(U3,{striped:!0,bordered:!0,hover:!0,ref:l,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:t.map((b,x)=>a.jsxs("tr",{children:[a.jsx("td",{children:x+1}),a.jsx("td",{children:b.nombre}),a.jsx("td",{children:b.apellido}),a.jsx("td",{children:b.Líder?`${b.Líder.nombre} ${b.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarMiembros/${b.id_miembro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>v(b.id_miembro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},b.id_miembro))})]})]})}const M3=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,F3=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,B3=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,U3=k(At)`
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
`,V3="https://backend-riosdevida-production.up.railway.app",H3=`${V3}/api/miembros`,W3=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(localStorage.getItem("idUser")),s=ge(),l=localStorage.getItem("token"),u=async d=>{d.preventDefault();try{await P.post(H3,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${l}`}}),s("/planillaLider")}catch(f){console.error("Error al crear el miembro:",f)}},c=()=>{s("/planillaLider")};return a.jsx(q3,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:u,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})},q3=k.div`
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
`,G3="https://backend-riosdevida-production.up.railway.app",n0=`${G3}/api/miembros/`,J3=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(localStorage.getItem("idUser")),s=ge(),{id:l}=cr(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await P.put(n0+l,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${u}`}}),s("/planillaLider")};y.useEffect(()=>{d()},[]);const d=async()=>{const h=await P.get(n0+l,{headers:{Authorization:`Bearer ${u}`}});t(h.data.nombre),r(h.data.apellido)},f=()=>{s("/planillaLider")};return a.jsx(X3,{children:a.jsx(K3,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:h=>t(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:h=>r(h.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},X3=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,K3=k.div`
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
`,Xy="https://backend-riosdevida-production.up.railway.app",Q3=`${Xy}/api/asistencia`,Y3=`${Xy}/api/asistencia/lider/`;function Z3(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),s=y.useRef(null);y.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const v=await P.get(`${Y3}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(v.data),r(v.data)}catch(v){console.error("Error al obtener los miembros",v),v.response&&v.response.status===401&&console.log("Token expiró")}},d=v=>{const g=v.target.value;if(i(g),g){const S=e.filter(b=>b.fecha===g);r(S)}else r(e)},f=async v=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${Q3}/${v}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(g){console.error("Error al eliminar un Miembro:",g)}},{onDownload:h}=jt.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros Lautaro",sheet:"Miembros"});return a.jsxs(eR,{children:[a.jsx(tR,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(nR,{children:[a.jsxs(W,{to:"/crearAsistencia",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Asistencia"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})]}),a.jsxs(rR,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:d})]}),a.jsxs(oR,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((v,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:v.miembro?`${v.miembro.nombre} ${v.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:v.asistencia}),a.jsx("td",{children:v.fecha}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarAsistencia/${v.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>f(v.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},v.id_miembro_planilla))})]})]})}const eR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,tR=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,nR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,rR=k.div`
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
`,oR=k(At)`
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
`,Ky="https://backend-riosdevida-production.up.railway.app",iR=`${Ky}/api/planilla`,sR=`${Ky}/api/planilla/planillasLider/`;function aR(){const[e,t]=y.useState([]),n=y.useRef(null),[r,o]=y.useState([]),[i,s]=y.useState("");y.useEffect(()=>{c()},[]);const l=localStorage.getItem("token"),u=localStorage.getItem("idUser"),c=async()=>{try{const v=await P.get(`${sR}${u}`,{headers:{Authorization:`Bearer ${l}`}});t(v.data),o(v.data)}catch(v){console.error("Error al obtener los miembros",v),v.response&&v.response.status===401&&console.log("Token expiró")}},d=v=>{const g=v.target.value;if(s(g),g){const S=e.filter(b=>b.fecha===g);o(S)}else o(e)},f=async v=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla??"))try{await P.delete(`${iR}/${v}`,{headers:{Authorization:`Bearer ${l}`}}),c()}catch(g){console.error("Error al eliminar un Planilla:",g)}},{onDownload:h}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Miembros Celula",sheet:"Miembros"});return a.jsxs(lR,{children:[a.jsx(uR,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(cR,{children:[a.jsxs(W,{to:"/crearPlanillaGeneral",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:h,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Pllanillas"]})]}),a.jsxs(fR,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:i,onChange:d})]}),a.jsxs(dR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Numero de Planilla"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrion"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jovenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:" Fecha"}),a.jsx("th",{children:" Botones"})]})}),a.jsx("tbody",{children:r.map((v,g)=>a.jsxs("tr",{children:[a.jsx("td",{children:g+1}),a.jsx("td",{children:v.id_planilla}),a.jsx("td",{children:`${v.Lider.nombre} ${v.Lider.apellido}`}),a.jsx("td",{children:`${v.Supervisor.nombre} ${v.Supervisor.apellido}`}),a.jsx("td",{children:v.anfitrion}),a.jsx("td",{children:v.ayudante}),a.jsx("td",{children:v.total_invitados}),a.jsx("td",{children:v.total_jov_adult}),a.jsx("td",{children:v.total_ninos}),a.jsx("td",{children:v.total_participantes}),a.jsx("td",{children:v.conv_rec}),a.jsx("td",{children:v.ofrenda}),a.jsx("td",{children:v.fecha}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarPlanillaGeneral/${v.id_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>f(v.id_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},v.id_planilla))})]})]})}const lR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,uR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,cR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,dR=k(At)`
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
`,fR=k.div`
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
`,Qy="https://backend-riosdevida-production.up.railway.app",pR=`${Qy}/api/planilla`,hR=`${Qy}/api/planilla/supervisorPorLider/`,mR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,v]=y.useState(""),[g,S]=y.useState(""),[b,x]=y.useState(""),[m,p]=y.useState(""),[w,j]=y.useState(localStorage.getItem("idUser")),[C,$]=y.useState([]),E=ge(),A=localStorage.getItem("token"),O=localStorage.getItem("idUser");y.useEffect(()=>{(async()=>{try{const ye=await P.get(`${hR}${O}`,{headers:{Authorization:`Bearer ${A}`}});$(ye.data)}catch(ye){console.error("Error al obtener líderes o supervisores",ye)}})()},[A]);const te=async N=>{N.preventDefault();try{await P.post(pR,{id_lider:w,id_supervisor:e,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:g,ofrenda:b,fecha:m},{headers:{Authorization:`Bearer ${A}`}}),E("/generalPlanilla")}catch(ye){console.error("Error al crear la planilla",ye)}},Se=()=>{E("/generalPlanilla")};return a.jsx(gR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:te,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:N=>t(N.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),C.map(N=>a.jsxs("option",{value:N.id_supervisor,children:[N.supervisor.nombre," ",N.supervisor.apellido]},N.id_supervisor))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:N=>r(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:N=>i(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:N=>l(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:N=>c(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:N=>f(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:N=>v(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:g,onChange:N=>S(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:N=>x(N.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:m,onChange:N=>p(N.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Se,children:"Cancelar"})]})]})]})})},gR=k.div`
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
`,vR="https://backend-riosdevida-production.up.railway.app",r0=`${vR}/api/planilla/`,xR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,v]=y.useState(""),[g,S]=y.useState(""),[b,x]=y.useState(""),m=ge(),{id:p}=cr(),w=localStorage.getItem("token"),j=async E=>{E.preventDefault(),await P.put(r0+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:g,fecha:b},{headers:{Authorization:`Bearer ${w}`}}),m("/generalPlanilla")};y.useEffect(()=>{C()},[]);const C=async()=>{const E=await P.get(r0+p,{headers:{Authorization:`Bearer ${w}`}}),{anfitrion:A,ayudante:O,total_invitados:te,total_jov_adult:Se,total_ninos:N,total_participantes:ye,conv_rec:dr,ofrenda:pn,fecha:Ot}=E.data;t(A),r(O),i(te),l(Se),c(N),f(ye),v(dr),S(pn),x(Ot)},$=()=>{m("/generalPlanilla")};return a.jsx(yR,{children:a.jsx(wR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:E=>t(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:E=>r(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:E=>i(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:E=>l(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:E=>c(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:E=>f(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:E=>v(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:g,onChange:E=>S(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:E=>x(E.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,children:"Cancelar"})]})]})]})})})},yR=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,wR=k.div`
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
`,Yy="https://backend-riosdevida-production.up.railway.app",bR=`${Yy}/api/asistencia`,SR=`${Yy}/api/miembros/lider/`,jR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState("presente"),[o,i]=y.useState(""),[s,l]=y.useState([]),[u,c]=y.useState(localStorage.getItem("idUser")),d=ge(),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");y.useEffect(()=>{(async()=>{try{const b=await P.get(`${SR}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(b.data)}catch(b){console.error("Error al obtener miembros",b)}})()},[f]);const v=async S=>{S.preventDefault();try{await P.post(bR,{id_miembro:e,asistencia:n,fecha:o,id_lider:u},{headers:{Authorization:`Bearer ${f}`}}),d("/asistencia")}catch(b){console.error("Error al crear la planilla",b)}},g=()=>{d("/asistencia")};return a.jsx(kR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asistencia"}),a.jsxs("form",{onSubmit:v,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Miembro"}),a.jsxs("select",{value:e,onChange:S=>t(S.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Miembro"}),s.map(S=>a.jsxs("option",{value:S.id_miembro,children:[S.nombre," ",S.apellido]},S.id_miembro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:S=>r(S.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:S=>i(S.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:g,children:"Cancelar"})]})]})]})})},kR=k.div`
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
`,CR="https://backend-riosdevida-production.up.railway.app",o0=`${CR}/api/asistencia/`,ER=()=>{const[e,t]=y.useState({nombre:"",apellido:""}),[n,r]=y.useState(""),[o,i]=y.useState(""),s=ge(),{id:l}=cr(),u=localStorage.getItem("token"),c=async h=>{h.preventDefault(),await P.put(o0+l,{miembro:e,asistencia:n,fecha:o},{headers:{Authorization:`Bearer ${u}`}}),s("/asistencia")};y.useEffect(()=>{d()},[]);const d=async()=>{const h=await P.get(o0+l,{headers:{Authorization:`Bearer ${u}`}});t({nombre:h.data.miembro.nombre,apellido:h.data.miembro.apellido}),r(h.data.asistencia),i(h.data.fecha)},f=()=>{s("/asistencia")};return a.jsx($R,{children:a.jsx(_R,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla de Asistencia"}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e.nombre,onChange:h=>t({...e,nombre:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:e.apellido,onChange:h=>t({...e,apellido:h.target.value}),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asistencia"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",children:[a.jsx("option",{value:"presente",children:"Presente"}),a.jsx("option",{value:"ausente",children:"Ausente"})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:o,onChange:h=>i(h.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})})},$R=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,_R=k.div`
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

`,RR="https://backend-riosdevida-production.up.railway.app",i0=`${RR}/api/usuarios/`;function PR(){const[e,t]=y.useState([]),n=y.useRef(null);y.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(i0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${i0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(TR,{children:[a.jsx(NR,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(IR,{children:[a.jsxs(W,{to:"/crearUsuario",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Usuario"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Usuarios"]})]}),a.jsxs(zR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Correo"}),a.jsx("th",{children:"Rol"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre}),a.jsx("td",{children:l.apellido}),a.jsx("td",{children:l.correo}),a.jsx("td",{children:l.Rol?l.Rol.nombre_rol:"Sin rol"}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarUsuario/${l.id_usuario}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>i(l.id_usuario),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},l.id_usuario))})]})]})}const TR=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,NR=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,IR=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,zR=k(At)`
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
`,Zy="https://backend-riosdevida-production.up.railway.app",LR=`${Zy}/api/usuarios/`,AR=`${Zy}/api/roles`,OR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState([]),h=ge(),v=localStorage.getItem("token"),g=async x=>{x.preventDefault();try{await P.post(LR,{nombre:e,apellido:n,correo:o,contraseña:s,id_rol:u},{headers:{Authorization:`Bearer ${v}`}}),h("/registroUsuarios")}catch(m){console.error("Error al crear el miembro:",m)}},S=async()=>{try{const x=await P.get(AR,{headers:{Authorization:`Bearer ${v}`}});f(x.data)}catch(x){console.error("Error al obtener los líderes:",x)}};y.useEffect(()=>{S()},[]);const b=()=>{h("/registroUsuarios")};return a.jsx(DR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:g,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:x=>t(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:x=>r(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:x=>i(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:x=>l(x.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:x=>c(x.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar "}),d.map(x=>a.jsxs("option",{value:x.id_rol,children:[x.nombre_rol,"  (ID: ",x.id_rol,")"]},x.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:b,children:"Cancelar"})]})]})]})})},DR=k.div`
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
`,MR="https://backend-riosdevida-production.up.railway.app",s0=`${MR}/api/usuarios/`,FR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState([]),h=ge(),{id:v}=cr(),g=localStorage.getItem("token"),S=async p=>{p.preventDefault(),await P.put(s0+v,{nombre:e,apellido:n,id_rol:u,correo:o,contraseña:s},{headers:{Authorization:`Bearer ${g}`}}),h("/registroUsuarios")},b=async()=>{try{const p=await P.get("http://localhost:4000/api/roles",{headers:{Authorization:`Bearer ${g}`}});f(p.data)}catch(p){console.error("Error al obtener los roles:",p)}};y.useEffect(()=>{x(),b()},[]);const x=async()=>{const p=await P.get(s0+v,{headers:{Authorization:`Bearer ${g}`}});t(p.data.nombre),r(p.data.apellido),i(p.data.correo),l(p.data.contraseña),c(p.data.id_rol)},m=()=>{h("/registroUsuarios")};return a.jsx(BR,{children:a.jsx(UR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Usuario"}),a.jsxs("form",{onSubmit:S,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:p=>t(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:p=>r(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Correo"}),a.jsx("input",{value:o,onChange:p=>i(p.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Contraseña"}),a.jsx("input",{value:s,onChange:p=>l(p.target.value),type:"password",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Asignar Rol"}),a.jsxs("select",{value:u,onChange:p=>c(p.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar"}),d.map(p=>a.jsxs("option",{value:p.id_rol,children:[p.nombre_rol," (ID: ",p.id_rol,")"]},p.id_rol))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Cancelar"})]})]})]})})})},BR=k.div`
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
`,VR="https://backend-riosdevida-production.up.railway.app",a0=`${VR}/api/supervisorLider/`;function HR(){const[e,t]=y.useState([]),n=y.useRef(null);y.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(a0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${a0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Planilla de Supervisores",sheet:"Usuarios"});return a.jsxs(WR,{children:[a.jsx(qR,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(GR,{children:[a.jsxs(W,{to:"/crearAsignarSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Asignar Supervisor"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Planilla de Supervisores"]})]}),a.jsxs(JR,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre de Supervisor"}),a.jsx("th",{children:"Nombre de Lider"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:`${l.supervisor.nombre} ${l.supervisor.apellido}`}),a.jsx("td",{children:`${l.lider.nombre} ${l.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarAsignacionSupervisor/${l.id_registro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>i(l.id_registro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},l.id_registro))})]})]})}const WR=k.div`
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
`,Xf="https://backend-riosdevida-production.up.railway.app",XR=`${Xf}/api/supervisorLider/`,KR=`${Xf}/api/usuarios/historiallider/`,QR=`${Xf}/api/usuarios/historialSupervisor/`,YR=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState([]),[s,l]=y.useState([]),u=ge(),c=localStorage.getItem("token");y.useEffect(()=>{const h=async()=>{try{const g=await P.get(KR,{headers:{Authorization:`Bearer ${c}`}});i(g.data)}catch(g){console.error("Error al obtener Lider",g)}},v=async()=>{try{const g=await P.get(QR,{headers:{Authorization:`Bearer ${c}`}});l(g.data)}catch(g){console.error("Error al obtener Supervisor",g)}};h(),v()},[c]);const d=async h=>{h.preventDefault();try{await P.post(XR,{id_lider:e,id_supervisor:n},{headers:{Authorization:`Bearer ${c}`}}),u("/asignarSupervisor")}catch(v){console.error("Error al crear la asignación",v)}},f=()=>{u("/asignarSupervisor")};return a.jsx(ZR,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Asignación de Supervisor"}),a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Lider"}),a.jsxs("select",{value:e,onChange:h=>t(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Lider"}),o.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:n,onChange:h=>r(h.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(h=>a.jsxs("option",{value:h.id_usuario,children:[h.nombre," ",h.apellido," (ID: ",h.id_usuario,")"]},h.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Cancelar"})]})]})]})})},ZR=k.div`
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
`,Kf="https://backend-riosdevida-production.up.railway.app",l0=`${Kf}/api/supervisorLider/`,e4=`${Kf}/api/usuarios/historiallider/`,t4=`${Kf}/api/usuarios/historialSupervisor/`,n4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState([]),[s,l]=y.useState([]),u=ge(),{id:c}=cr(),d=localStorage.getItem("token"),f=async v=>{v.preventDefault();try{await P.put(l0+c,{id_supervisor:e,id_lider:n},{headers:{Authorization:`Bearer ${d}`}}),u("/asignarSupervisor")}catch(g){console.error("Error al actualizar la asignación",g)}};y.useEffect(()=>{const v=async()=>{try{const b=await P.get(e4,{headers:{Authorization:`Bearer ${d}`}});i(b.data)}catch(b){console.error("Error al obtener Liders",b)}},g=async()=>{try{const b=await P.get(t4,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener Supervisores",b)}};(async()=>{try{const b=await P.get(l0+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.id_supervisor),r(b.data.id_lider)}catch(b){console.error("Error al obtener los datos del usuario",b)}})(),v(),g()},[d,c]);const h=()=>{u("/asignarSupervisor")};return a.jsx(r4,{children:a.jsx(o4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Asignación de Supervisor"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:n,onChange:v=>r(v.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),o.map(v=>a.jsxs("option",{value:v.id_usuario,children:[v.nombre," ",v.apellido," (ID: ",v.id_usuario,")"]},v.id_usuario))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Supervisor"}),a.jsxs("select",{value:e,onChange:v=>t(v.target.value),className:"form-control",children:[a.jsx("option",{value:"",children:"Seleccionar Supervisor"}),s.map(v=>a.jsxs("option",{value:v.id_usuario,children:[v.nombre," ",v.apellido," (ID: ",v.id_usuario,")"]},v.id_usuario))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"Cancelar"})]})]})]})})})},r4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,o4=k.div`
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
`,i4="https://backend-riosdevida-production.up.railway.app",u0=`${i4}/api/roles`;function s4(){const[e,t]=y.useState([]),n=y.useRef(null);y.useEffect(()=>{o()},[]);const r=localStorage.getItem("token"),o=async()=>{try{const l=await P.get(u0,{headers:{Authorization:`Bearer ${r}`}});t(l.data)}catch(l){console.error("Error al obtener los miembros",l),l.response&&l.response.status===401&&console.log("Token expiró")}},i=async l=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${u0}/${l}`,{headers:{Authorization:`Bearer ${r}`}}),o()}catch(u){console.error("Error al eliminar un Miembro:",u)}},{onDownload:s}=jt.useDownloadExcel({currentTableRef:n.current,filename:"Tabla de Usuarios",sheet:"Usuarios"});return a.jsxs(a4,{children:[a.jsx(l4,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(u4,{children:[a.jsxs(W,{to:"/crearUnRol",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Un Rol"]}),a.jsxs("button",{onClick:s,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Roles"]})]}),a.jsxs(c4,{striped:!0,bordered:!0,hover:!0,ref:n,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre Del Rol"}),a.jsx("th",{children:"Descripcion"}),a.jsx("th",{children:"Boton"})]})}),a.jsx("tbody",{children:e.map((l,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:u+1}),a.jsx("td",{children:l.nombre_rol}),a.jsx("td",{children:l.descripcion}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarRol/${l.id_rol}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>i(l.id_rol),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},l.id_rol))})]})]})}const a4=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,l4=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,u4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,c4=k(At)`
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
`,d4="https://backend-riosdevida-production.up.railway.app",f4=`${d4}/api/roles`,p4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),o=ge(),i=localStorage.getItem("token"),s=async u=>{u.preventDefault();try{await P.post(f4,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${i}`}}),o("/registroDeRoles")}catch(c){console.error("Error al crear el miembro:",c)}},l=()=>{o("/registroDeRoles")};return a.jsx(h4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Usuario"}),a.jsxs("form",{onSubmit:s,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre del Rol"}),a.jsx("input",{value:e,onChange:u=>t(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:u=>r(u.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:l,children:"Cancelar"})]})]})]})})},h4=k.div`
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
`,m4="https://backend-riosdevida-production.up.railway.app",c0=`${m4}/api/roles/`,g4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),o=ge(),{id:i}=cr(),s=localStorage.getItem("token"),l=async d=>{d.preventDefault(),await P.put(c0+i,{nombre_rol:e,descripcion:n},{headers:{Authorization:`Bearer ${s}`}}),o("/registroDeRoles")};y.useEffect(()=>{u()},[]);const u=async()=>{const d=await P.get(c0+i,{headers:{Authorization:`Bearer ${s}`}});t(d.data.nombre_rol),r(d.data.descripcion)},c=()=>{o("/registroDeRoles")};return a.jsx(v4,{children:a.jsx(x4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Cliente"}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre Del Rol"}),a.jsx("input",{value:e,onChange:d=>t(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Descripcion"}),a.jsx("input",{value:n,onChange:d=>r(d.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancelar"})]})]})]})})})},v4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,x4=k.div`
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
`,Ul="https://backend-riosdevida-production.up.railway.app",y4=`${Ul}/api/supervisorLider/supervisor/`,w4=`${Ul}/api/supervisorLider/supervisorLiderMiembro/`,b4=`${Ul}/api/miembros/lider/`,S4=`${Ul}/api/miembros/`;function j4(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),s=y.useRef(null),l=localStorage.getItem("token"),u=localStorage.getItem("idUser");y.useEffect(()=>{c(),d()},[]);const c=async()=>{try{const g=await P.get(`${y4}${u}`,{headers:{Authorization:`Bearer ${l}`}});r(g.data)}catch(g){console.error("Error al obtener los líderes",g)}},d=async(g="")=>{try{const S=g?`${b4}${g}`:`${w4}${u}`,b=await P.get(S,{headers:{Authorization:`Bearer ${l}`}});t(b.data)}catch(S){console.error("Error al obtener los miembros",S)}},f=g=>{const S=g.target.value;i(S),d(S)},h=async g=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${S4}${g}`,{headers:{Authorization:`Bearer ${l}`}}),d(o)}catch(S){console.error("Error al eliminar un miembro:",S)}},{onDownload:v}=jt.useDownloadExcel({currentTableRef:s.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(k4,{children:[a.jsx(C4,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsxs(E4,{children:[a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:o,onChange:f,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(g=>a.jsxs("option",{value:g.id_lider,children:[g.lider.nombre," ",g.lider.apellido]},g.id_lider))]})]}),a.jsxs(W,{to:"/crearMiembroSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Miembro"]}),a.jsxs("button",{onClick:v,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Roles"]})]}),a.jsxs($4,{striped:!0,bordered:!0,hover:!0,ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:e.map((g,S)=>a.jsxs("tr",{children:[a.jsx("td",{children:S+1}),a.jsx("td",{children:g.nombre}),a.jsx("td",{children:g.apellido}),a.jsx("td",{children:g.Líder?`${g.Líder.nombre} ${g.Líder.apellido}`:"@unknown"}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarMiembroSupervisor/${g.id_miembro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>h(g.id_miembro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},g.id_miembro))})]})]})}const k4=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,C4=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,E4=k.div`
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
`,$4=k(At)`
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
`,e1="https://backend-riosdevida-production.up.railway.app",_4=`${e1}/api/miembros`,R4=`${e1}/api/supervisorLider/supervisor/`,P4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState([]),u=ge(),c=localStorage.getItem("token"),d=localStorage.getItem("idUser"),f=async g=>{g.preventDefault();try{await P.post(_4,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${c}`}}),u("/registroLideryMiembro")}catch(S){console.error("Error al crear el miembro:",S)}},h=async()=>{try{const g=await P.get(`${R4}${d}`,{headers:{Authorization:`Bearer ${c}`}});l(g.data)}catch(g){console.error("Error al obtener los líderes",g)}};y.useEffect(()=>{h()},[]);const v=()=>{u("/registroLideryMiembro")};return a.jsx(T4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Miembro de Celula"}),a.jsxs("form",{onSubmit:f,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:g=>t(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:g=>r(g.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:g=>i(g.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(g=>a.jsxs("option",{value:g.id_lider,children:[g.lider.nombre," ",g.lider.apellido]},g.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:v,children:"Cancelar"})]})]})]})})},T4=k.div`
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
`,t1="https://backend-riosdevida-production.up.railway.app",d0=`${t1}/api/miembros/`,N4=`${t1}/api/supervisorLider/supervisor/`,I4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState([]),u=ge(),{id:c}=cr(),d=localStorage.getItem("token"),f=localStorage.getItem("idUser"),h=async b=>{b.preventDefault(),await P.put(d0+c,{nombre:e,apellido:n,id_líder:o},{headers:{Authorization:`Bearer ${d}`}}),u("/registroLideryMiembro")};y.useEffect(()=>{g(),v()},[]);const v=async()=>{try{const b=await P.get(`${N4}${f}`,{headers:{Authorization:`Bearer ${d}`}});l(b.data)}catch(b){console.error("Error al obtener los líderes",b)}},g=async()=>{try{const b=await P.get(d0+c,{headers:{Authorization:`Bearer ${d}`}});t(b.data.nombre),r(b.data.apellido),i(b.data.id_líder)}catch(b){console.error("Error al obtener el miembro",b)}},S=()=>{u("/registroLideryMiembro")};return a.jsx(z4,{children:a.jsx(L4,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Miembro"}),a.jsxs("form",{onSubmit:h,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Nombre"}),a.jsx("input",{value:e,onChange:b=>t(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Apellido"}),a.jsx("input",{value:n,onChange:b=>r(b.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:o,onChange:b=>i(b.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),s.map(b=>a.jsxs("option",{value:b.id_lider,children:[b.lider.nombre," ",b.lider.apellido]},b.id_lider))]})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,children:"Cancelar"})]})]})]})})})},z4=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,L4=k.div`
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
`,Qf="https://backend-riosdevida-production.up.railway.app",A4=`${Qf}/api/asistencia`,O4=`${Qf}/api/asistencia/asistenciaSupervisor/`,D4=`${Qf}/api/supervisorLider/supervisor/`;function M4(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState([]),[u,c]=y.useState(""),d=y.useRef(null),f=localStorage.getItem("token"),h=localStorage.getItem("idUser");y.useEffect(()=>{v(),g()},[]);const v=async()=>{try{const w=await P.get(`${O4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(w.data),r(w.data)}catch(w){console.error("Error al obtener las asistencias:",w)}},g=async()=>{try{const w=await P.get(`${D4}${h}`,{headers:{Authorization:`Bearer ${f}`}});l(w.data)}catch(w){console.error("Error al obtener los líderes:",w)}},S=(w,j)=>{let C=e;w&&(C=C.filter($=>$.fecha===w)),j&&(C=C.filter($=>$.id_lider===parseInt(j))),r(C)},b=w=>{const j=w.target.value;i(j),S(j,u)},x=w=>{const j=w.target.value;c(j),S(o,j)},m=async w=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await P.delete(`${A4}/${w}`,{headers:{Authorization:`Bearer ${f}`}});const j=e.filter($=>$.id_miembro_planilla!==w);t(j);const C=j.filter($=>{const E=!o||$.fecha===o,A=!u||$.id_lider===parseInt(u);return E&&A});r(C)}catch(j){console.error("Error al eliminar la asistencia:",j)}},{onDownload:p}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(F4,{children:[a.jsx(B4,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsx(U4,{children:a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})}),a.jsxs(V4,{children:[a.jsxs(f0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:b})]}),a.jsxs(f0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:x,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(w=>a.jsxs("option",{value:w.id_lider,children:[w.lider.nombre," ",w.lider.apellido]},w.id_lider))]})]})]}),a.jsxs(H4,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((w,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:w.miembro?`${w.miembro.nombre} ${w.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:w.asistencia}),a.jsx("td",{children:w.lider?`${w.lider.nombre} ${w.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:w.fecha}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarAsistencia/${w.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>m(w.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},w.id_miembro_planilla))})]})]})}const F4=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,B4=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,U4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,V4=k.div`
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
`,H4=k(At)`
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
`,Yf="https://backend-riosdevida-production.up.railway.app",W4=`${Yf}/api/planilla`,q4=`${Yf}/api/planilla/planillasLiderSupervisor/`,G4=`${Yf}/api/supervisorLider/supervisor/`;function J4(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState([]),d=y.useRef(null);y.useEffect(()=>{g(),v()},[]);const f=localStorage.getItem("token"),h=localStorage.getItem("idUser"),v=async()=>{try{const w=await P.get(`${G4}${h}`,{headers:{Authorization:`Bearer ${f}`}});c(w.data)}catch(w){console.error("Error al obtener los líderes:",w)}},g=async()=>{try{const w=await P.get(`${q4}${h}`,{headers:{Authorization:`Bearer ${f}`}});t(w.data),r(w.data)}catch(w){console.error("Error al obtener las planillas:",w)}},S=w=>{const j=w.target.value;i(j),x(j,s)},b=w=>{const j=w.target.value;l(j),x(o,j)},x=(w,j)=>{let C=e;w&&(C=C.filter($=>$.fecha===w)),j&&(C=C.filter($=>$.id_lider.toString()===j)),r(C)},m=async w=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await P.delete(`${W4}/${w}`,{headers:{Authorization:`Bearer ${f}`}}),g()}catch(j){console.error("Error al eliminar la planilla:",j)}},{onDownload:p}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(X4,{children:[a.jsx(K4,{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})}),a.jsxs(Q4,{children:[a.jsxs(W,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:p,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Planillas"]})]}),a.jsxs(Z4,{children:[a.jsxs(p0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(p0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(w=>a.jsx("option",{value:w.id_lider,children:`${w.lider.nombre} ${w.lider.apellido}`},w.id_lider))]})]})]}),a.jsxs(Y4,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((w,j)=>a.jsxs("tr",{children:[a.jsx("td",{children:j+1}),a.jsx("td",{children:w.id_planilla}),a.jsx("td",{children:`${w.Lider.nombre} ${w.Lider.apellido}`}),a.jsx("td",{children:`${w.Supervisor.nombre} ${w.Supervisor.apellido}`}),a.jsx("td",{children:w.anfitrion}),a.jsx("td",{children:w.ayudante}),a.jsx("td",{children:w.total_invitados}),a.jsx("td",{children:w.total_jov_adult}),a.jsx("td",{children:w.total_ninos}),a.jsx("td",{children:w.total_participantes}),a.jsx("td",{children:w.conv_rec}),a.jsx("td",{children:w.ofrenda}),a.jsx("td",{children:w.fecha}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarPlanillaGeneralSupervisor/${w.id_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>m(w.id_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},w.id_planilla))})]})]})}const X4=k.div`
  padding: 100px 2px;
  min-height: 100vh; 
  overflow-x: auto;
`,K4=k.div`
    margin-bottom: 20px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    font-size: 42px

`,Q4=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,Y4=k(At)`
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
`,Z4=k.div`
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
`,p0=k.div`
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
`,n1="https://backend-riosdevida-production.up.railway.app",eP=`${n1}/api/planilla`,tP=`${n1}/api/supervisorLider/supervisor/`,nP=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,v]=y.useState(""),[g,S]=y.useState(""),[b,x]=y.useState(""),[m,p]=y.useState(""),[w,j]=y.useState([]),[C,$]=y.useState(localStorage.getItem("idUser")),E=ge(),A=localStorage.getItem("token"),O=localStorage.getItem("idUser");y.useEffect(()=>{(async()=>{try{const ye=await P.get(`${tP}${O}`,{headers:{Authorization:`Bearer ${A}`}});j(ye.data)}catch(ye){console.error("Error al obtener líderes o supervisores",ye)}})()},[A]);const te=async N=>{N.preventDefault();try{await P.post(eP,{id_lider:e,id_supervisor:C,anfitrion:n,ayudante:o,total_invitados:s,total_jov_adult:u,total_ninos:d,total_participantes:h,conv_rec:g,ofrenda:b,fecha:m},{headers:{Authorization:`Bearer ${A}`}}),E("/planillaGeneralSupervisor")}catch(ye){console.error("Error al crear la planilla",ye)}},Se=()=>{E("/planillaGeneralSupervisor")};return a.jsx(rP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Crear Planilla General"}),a.jsxs("form",{onSubmit:te,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Líder"}),a.jsxs("select",{value:e,onChange:N=>t(N.target.value),className:"form-control",required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar Líder"}),w.map(N=>a.jsxs("option",{value:N.id_lider,children:[N.lider.nombre," ",N.lider.apellido]},N.id_registro))]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrión"}),a.jsx("input",{value:n,onChange:N=>r(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:o,onChange:N=>i(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:s,onChange:N=>l(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:u,onChange:N=>c(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:d,onChange:N=>f(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:h,onChange:N=>v(N.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Conversiones/Recepciones"}),a.jsx("input",{value:g,onChange:N=>S(N.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:b,onChange:N=>x(N.target.value),type:"number",step:"0.01",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:m,onChange:N=>p(N.target.value),type:"date",className:"form-control",required:!0})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Se,children:"Cancelar"})]})]})]})})},rP=k.div`
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
`,oP="https://backend-riosdevida-production.up.railway.app",h0=`${oP}/api/planilla/`,iP=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(""),[h,v]=y.useState(""),[g,S]=y.useState(""),[b,x]=y.useState(""),m=ge(),{id:p}=cr(),w=localStorage.getItem("token"),j=async E=>{E.preventDefault(),await P.put(h0+p,{anfitrion:e,ayudante:n,total_invitados:o,total_jov_adult:s,total_ninos:u,total_participantes:d,conv_rec:h,ofrenda:g,fecha:b},{headers:{Authorization:`Bearer ${w}`}}),m("/planillaGeneralSupervisor")};y.useEffect(()=>{C()},[]);const C=async()=>{const E=await P.get(h0+p,{headers:{Authorization:`Bearer ${w}`}}),{anfitrion:A,ayudante:O,total_invitados:te,total_jov_adult:Se,total_ninos:N,total_participantes:ye,conv_rec:dr,ofrenda:pn,fecha:Ot}=E.data;t(A),r(O),i(te),l(Se),c(N),f(ye),v(dr),S(pn),x(Ot)},$=()=>{m("/planillaGeneralSupervisor")};return a.jsx(sP,{children:a.jsx(aP,{children:a.jsxs("div",{className:"form-wrapper",children:[a.jsx("h3",{children:"Editar Planilla"}),a.jsxs("form",{onSubmit:j,children:[a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Anfitrion"}),a.jsx("input",{value:e,onChange:E=>t(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ayudante"}),a.jsx("input",{value:n,onChange:E=>r(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Invitados"}),a.jsx("input",{value:o,onChange:E=>i(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Jóvenes/Adultos"}),a.jsx("input",{value:s,onChange:E=>l(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Niños"}),a.jsx("input",{value:u,onChange:E=>c(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Participantes"}),a.jsx("input",{value:d,onChange:E=>f(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Total Convertidos"}),a.jsx("input",{value:h,onChange:E=>v(E.target.value),type:"text",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Ofrenda"}),a.jsx("input",{value:g,onChange:E=>S(E.target.value),type:"number",className:"form-control"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("label",{className:"form-label",children:"Fecha"}),a.jsx("input",{value:b,onChange:E=>x(E.target.value),type:"date",className:"form-control"})]}),a.jsxs("div",{className:"button-group",children:[a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,children:"Cancelar"})]})]})]})})})},sP=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
`,aP=k.div`
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
`,os="https://backend-riosdevida-production.up.railway.app",lP=`${os}/api/supervisorLider/supervisor/`,uP=`${os}/api/miembros/lider/`,cP=`${os}/api/miembros/`,dP=`${os}/api/usuarios/historiallider/`,fP=`${os}/api/usuarios/historialSupervisor/`;function pP(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState([]),[s,l]=y.useState(""),[u,c]=y.useState(""),d=y.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),y.useEffect(()=>{h(),g(),v()},[]);const h=async()=>{try{const p=await P.get(dP,{headers:{Authorization:`Bearer ${f}`}});r(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},v=async()=>{try{const p=await P.get(fP,{headers:{Authorization:`Bearer ${f}`}});i(p.data)}catch(p){console.error("Error al obtener los líderes",p)}},g=async(p="",w="")=>{try{let j=p?`${uP}${p}`:`${lP}${w}`;const C=await P.get(j,{headers:{Authorization:`Bearer ${f}`}});t(C.data)}catch(j){console.error("Error al obtener los miembros:",j)}},S=p=>{const w=p.target.value;l(w),c(""),g(w,"")},b=p=>{const w=p.target.value;c(w),l(""),g("",w)},x=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar este miembro?"))try{await P.delete(`${cP}${p}`,{headers:{Authorization:`Bearer ${f}`}}),g(s),console.log(g)}catch(w){console.error("Error al eliminar un miembro:",w)}},{onDownload:m}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Tabla de Miembros",sheet:"Miembros"});return a.jsxs(hP,{children:[a.jsx(mP,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsx(gP,{children:a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar"]})}),a.jsxs(xP,{children:[a.jsx(m0,{children:a.jsxs("label",{children:["Filtrar por Líder:",a.jsxs("select",{value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),n.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})}),a.jsx(m0,{children:a.jsxs("label",{children:["Filtrar por Supervisor:",a.jsxs("select",{value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),o.map(p=>a.jsxs("option",{value:p.id_usuario,children:[p.nombre," ",p.apellido]},p.id_lider))]})]})})]}),a.jsxs(vP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Apellido"}),a.jsx("th",{children:"Accion"})]})}),a.jsx("tbody",{children:e.map((p,w)=>a.jsxs("tr",{children:[a.jsx("td",{children:w+1}),a.jsx("td",{children:p.nombre?p.nombre:`${p.lider.nombre}`}),a.jsx("td",{children:p.apellido?p.apellido:`${p.lider.apellido}`}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarMiembroSupervisor/${p.id_miembro}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>x(p.id_miembro),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},p.id_usuario))})]})]})}const hP=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,mP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,gP=k.div`
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
`,vP=k(At)`
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
`,xP=k.div`
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
`,m0=k.div`
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
`,r1="https://backend-riosdevida-production.up.railway.app",g0=`${r1}/api/asistencia`,yP=`${r1}/api/usuarios/historiallider`;function wP(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState([]),[u,c]=y.useState(""),d=y.useRef(null),f=localStorage.getItem("token");localStorage.getItem("idUser"),y.useEffect(()=>{h(),v()},[]);const h=async()=>{try{const p=await P.get(g0,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las asistencias:",p)}},v=async()=>{try{const p=await P.get(yP,{headers:{Authorization:`Bearer ${f}`}});l(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},g=(p,w)=>{let j=e;p&&(j=j.filter(C=>C.fecha===p)),w&&(j=j.filter(C=>String(C.id_lider)===w)),r(j)},S=p=>{const w=p.target.value;i(w),g(w,u)},b=p=>{const w=p.target.value;c(w),g(o,w)},x=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta asistencia?"))try{await P.delete(`${g0}/${p}`,{headers:{Authorization:`Bearer ${f}`}});const w=e.filter(C=>C.id_miembro_planilla!==p);t(w);const j=w.filter(C=>{const $=!o||C.fecha===o,E=!u||C.id_lider===parseInt(u);return $&&E});r(j)}catch(w){console.error("Error al eliminar la asistencia:",w)}},{onDownload:m}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Asistencias",sheet:"Asistencias"});return a.jsxs(bP,{children:[a.jsx(SP,{children:a.jsx("div",{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})})}),a.jsx(jP,{children:a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Asistencia"]})}),a.jsxs(kP,{children:[a.jsxs(v0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:S})]}),a.jsxs(v0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:u,onChange:b,children:[a.jsx("option",{value:"",children:"Todos"}),s.map(p=>a.jsxs("option",{value:String(p.id_usuario),children:[p.nombre," ",p.apellido]},p.id_usuario))]})]})]}),a.jsxs(CP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Nombre y Apellido"}),a.jsx("th",{children:"Asistencia"}),a.jsx("th",{children:"Lider"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Botones"})]})}),a.jsx("tbody",{children:n.map((p,w)=>a.jsxs("tr",{children:[a.jsx("td",{children:w+1}),a.jsx("td",{children:p.miembro?`${p.miembro.nombre} ${p.miembro.apellido}`:"Miembro eliminado"}),a.jsx("td",{children:p.asistencia}),a.jsx("td",{children:p.lider?`${p.lider.nombre} ${p.lider.apellido}`:"No se encuentra Lider"}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarAsistencia/${p.id_miembro_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>x(p.id_miembro_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},p.id_miembro_planilla))})]})]})}const bP=k.div`
  padding: 100px 2px;
  min-height: 100vh;
  overflow-x: auto;
`,SP=k.div`
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 42px;
`,jP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .create-client, .download-client {
    margin: 0 10px;
  }
`,kP=k.div`
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
`,CP=k(At)`
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
`,o1="https://backend-riosdevida-production.up.railway.app",x0=`${o1}/api/planilla`,EP=`${o1}/api/usuarios/historiallider`;function $P(){const[e,t]=y.useState([]),[n,r]=y.useState([]),[o,i]=y.useState(""),[s,l]=y.useState(""),[u,c]=y.useState([]),d=y.useRef(null);y.useEffect(()=>{v(),h()},[]);const f=localStorage.getItem("token");localStorage.getItem("idUser");const h=async()=>{try{const p=await P.get(EP,{headers:{Authorization:`Bearer ${f}`}});c(p.data)}catch(p){console.error("Error al obtener los líderes:",p)}},v=async()=>{try{const p=await P.get(x0,{headers:{Authorization:`Bearer ${f}`}});t(p.data),r(p.data)}catch(p){console.error("Error al obtener las planillas:",p)}},g=p=>{const w=p.target.value;i(w),b(w,s)},S=p=>{const w=p.target.value;l(w),b(o,w)},b=(p,w)=>{let j=e;p&&(j=j.filter(C=>C.fecha===p)),w&&(j=j.filter(C=>C.id_lider.toString()===w)),r(j)},x=async p=>{if(window.confirm("¿Estás seguro de que deseas eliminar esta Planilla?"))try{await P.delete(`${x0}/${p}`,{headers:{Authorization:`Bearer ${f}`}}),v()}catch(w){console.error("Error al eliminar la planilla:",w)}},{onDownload:m}=jt.useDownloadExcel({currentTableRef:d.current,filename:"Planillas_Celulas",sheet:"Planillas"});return a.jsxs(_P,{children:[a.jsx(RP,{children:a.jsx(W,{to:"/menuInicio",children:a.jsx(St,{})})}),a.jsxs(PP,{children:[a.jsxs(W,{to:"/crearPlanillaGeneralSupervisor",className:"btn btn-primary create-client",children:[a.jsx(Pn,{})," Crear Planilla"]}),a.jsxs("button",{onClick:m,className:"btn btn-primary download-client",children:[a.jsx(Lt,{})," Descargar Planillas"]})]}),a.jsxs(NP,{children:[a.jsxs(y0,{children:[a.jsx("label",{htmlFor:"filter-date",children:"Filtrar por fecha:"}),a.jsx("input",{type:"date",id:"filter-date",value:o,onChange:g})]}),a.jsxs(y0,{children:[a.jsx("label",{htmlFor:"filter-lider",children:"Filtrar por líder:"}),a.jsxs("select",{id:"filter-lider",value:s,onChange:S,children:[a.jsx("option",{value:"",children:"Todos"}),u.map(p=>a.jsx("option",{value:p.id_usuario,children:`${p.nombre} ${p.apellido}`},p.id_usuario))]})]})]}),a.jsxs(TP,{striped:!0,bordered:!0,hover:!0,ref:d,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Número de Planilla"}),a.jsx("th",{children:"Líder"}),a.jsx("th",{children:"Supervisor"}),a.jsx("th",{children:"Anfitrión"}),a.jsx("th",{children:"Ayudante"}),a.jsx("th",{children:"Total Invitados"}),a.jsx("th",{children:"Total Jóvenes Adultos"}),a.jsx("th",{children:"Total Niños"}),a.jsx("th",{children:"Total Participantes"}),a.jsx("th",{children:"Total Convertidos"}),a.jsx("th",{children:"Ofrenda"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map((p,w)=>a.jsxs("tr",{children:[a.jsx("td",{children:w+1}),a.jsx("td",{children:p.id_planilla}),a.jsx("td",{children:`${p.Lider.nombre} ${p.Lider.apellido}`}),a.jsx("td",{children:`${p.Supervisor.nombre} ${p.Supervisor.apellido}`}),a.jsx("td",{children:p.anfitrion}),a.jsx("td",{children:p.ayudante}),a.jsx("td",{children:p.total_invitados}),a.jsx("td",{children:p.total_jov_adult}),a.jsx("td",{children:p.total_ninos}),a.jsx("td",{children:p.total_participantes}),a.jsx("td",{children:p.conv_rec}),a.jsx("td",{children:p.ofrenda}),a.jsx("td",{children:p.fecha}),a.jsxs("td",{children:[a.jsx(W,{to:`/editarPlanillaGeneralSupervisor/${p.id_planilla}`,className:"btn btn-info",children:a.jsx(It,{})}),a.jsx("button",{onClick:()=>x(p.id_planilla),className:"btn btn-danger",children:a.jsx(zt,{})})]})]},p.id_planilla))})]})]})}const _P=k.div`
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
    font-size: 42px

`,PP=k.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // Espaciado vertical entre el contenedor de botones y el resto del contenido

  .create-client, .download-client {
    margin: 0 10px; // Espaciado horizontal entre los botones
  }
`,TP=k(At)`
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
`,w0=["Dios Te Ama","Hey! Cuando no sepas a dónde ir, andá a Dios; Él te sigue esperando.","Tu tienes un gran valor para Dios","Yo siempre estoy contigo. att: Dios","Jesús te ama una banda","Sos muy Importante Para Mí, att: Dios","A pesar de todo te sigo Amando, att: Dios","No estoy enojado con vos, Te amo, att: Dios","Esfuerzate y se valiente, Yo estoy con vos ---> Siempre. ATT: Dios","Yo sé que este año fue dificil, pero todo estara bien, porque yo estoy con vos y conozco tu futuro. ---> att: Dios ❤️","Soy el unico que puede llenar el vacio de tu corazón---> att: Jesús ❤️","No temas yo soy el que te da nuevas Fuerzas 💪 ---> att: Dios","Mis caminos y mis pensamientos son mas altos que los de ustedes mas altos que los cielos sobre la tierra. ---> att: Dios","No te angusties, no temas, Yo estoy contigo. ---> att: Dios","Mis planes son mejores ---> att: Jesús","En mi Esta Tu Identidad ---> att: Jesús","Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora⏱️. ---> Eclesiastés 3:1","Tu vales mas que el oro y la plata ---> att: Dios","Ten en cuenta a Dios en todo lo que hagas y él te guiará por el buen camino. ---> Proverbios 3:6","Dichoso el que resiste la tentación porque, al salir aprobado, recibirá la corona de la vida que Dios ha prometido a quienes lo aman. ---> Santiago 1:12","Porque si ustedes viven conforme a la naturaleza pecaminosa, morirán; pero si por el Espíritu dan muerte a los malos hábitos del cuerpo, vivirán. ---> Romanos 8:13"],IP=()=>{const[e,t]=y.useState("");return y.useEffect(()=>{const n=Math.floor(Math.random()*w0.length);t(w0[n])},[]),a.jsxs(zP,{children:[a.jsx(Cl,{}),a.jsx(LP,{children:a.jsx("div",{className:"icon",children:a.jsx(W,{to:"/",children:a.jsx(g2,{})})})}),a.jsx(AP,{children:a.jsx(OP,{children:e})})]})},zP=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //background-color: #000; /* Fondo negro */
`,LP=k.div`
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
   
`,AP=k.div`
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
`,OP=k.p`
  font-size: clamp(1.5rem, 4vw, 3rem); /* Tamaño de fuente adaptable */
  color: #ff69b4; /* Color inicial */
  background: linear-gradient(90deg, #ff69b4, #00d4ff, #fff200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
`,DP=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,MP=k.div`
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
`,FP=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${DP} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,BP=k.div`
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
`,UP=()=>{const e=[K.auditorioUno,K.auditorioDos,K.auditorioTres,K.auditorioCuatro,K.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("jovenes-articulo");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(MP,{id:"jovenes-articulo",children:[a.jsxs(BP,{isVisible:r,children:[a.jsx("h1",{children:"Auditorio Ríos De Vida"}),a.jsx("p",{children:"Nos encontramos todos los domingos en el Auditorio Ríos De Vida, ubicado entre Calle Crisóstomo Álvarez y Calle Alberdi, a la altura del 1000 cruzando la calle República del Líbano, en el horario de 20 hs. Contamos con un espacio amplio y cómodo para que puedas disfrutar de la presencia de Dios."})]}),a.jsx(FP,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},VP="https://Bravo938.github.io/RiosDeVida.pages/assets/casaRios-1ZPgrmsG.mp4",HP=fn`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #2500f9, 0 0 20px #0036f9, 0 0 40px #0071d4;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #0073ff, 0 0 30px #4400ff, 0 0 50px #0058d4;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #00b2f9, 0 0 20px #0081f9, 0 0 40px #0091d4;
  }
`,WP=k.video`
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
`,qP=k.div`
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
`,GP=k.div`
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
    animation: ${HP} 1.5s infinite alternate;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;const JP=()=>a.jsx(qP,{children:a.jsx(GP,{children:a.jsx(WP,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:a.jsx("source",{src:VP,type:"video/mp4"})})})}),XP="https://Bravo938.github.io/RiosDeVida.pages/assets/caminata-D80zwDS-.mp4",KP=()=>{const[e,t]=y.useState(!1),n=()=>{t(!e)};return a.jsx(QP,{id:"potenciados",children:a.jsxs(YP,{children:[a.jsxs(ZP,{children:[a.jsx(eT,{children:"Jóvenes Potenciados"}),a.jsxs(tT,{children:[a.jsxs(nT,{expanded:e,children:["¡Bienvenido a Jóvenes Potenciados! Somos una comunidad dedicada a acompañar y guiar a los jóvenes en su camino de crecimiento personal, espiritual y profesional. Creemos en el potencial ilimitado de cada individuo y en su capacidad para transformar el mundo a su alrededor. Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas."," ",e&&a.jsx(a.Fragment,{children:"Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo! Nuestro objetivo es proporcionar un espacio donde puedan desarrollar sus talentos, descubrir su propósito y alcanzar nuevas alturas. Organizamos talleres, conferencias, actividades recreativas y retiros espirituales que fomentan la unión, el aprendizaje y el fortalecimiento de valores. Nos enfocamos en generar líderes con visión y pasión, que inspiren a otros a crecer y servir. ¡Únete a nosotros y sé parte del cambio que quieres ver en el mundo!"})]}),a.jsx(rT,{onClick:n,children:e?"Leer Menos":"Leer Más"})]})]}),a.jsx(oT,{children:a.jsx(iT,{autoPlay:!0,loop:!0,muted:!0,src:XP})})]})})},QP=k.section`
  position: relative;
  height: 500px;
  color: white;
  overflow: hidden;
  background: linear-gradient(70deg, #460072a2 40%, #38136980 40%);
`,YP=k.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ZP=k.div`
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
`,eT=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`,tT=k.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,nT=k.p`
  line-height: 1.6;
  font-size: 16px;
  max-height: ${e=>e.expanded?"1000px":"100px"};
  overflow: hidden;
  padding-bottom: ${e=>e.expanded?"10px":"0"};
  transition: max-height 0.8s ease-out, padding-bottom 0.8s ease-out;
`,rT=k.button`
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
`,oT=k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`,iT=k.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,sT=fn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,aT=k.div`
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
`,lT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  animation: ${sT} 1s ease-in-out;
  margin: 10px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,uT=k.div`
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
`,cT=()=>{const e=[K.niñoUno,K.niñoDos,K.niñoTres],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("escuela-dominical");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(aT,{id:"escuela-dominical",children:[a.jsx(lT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r}),a.jsxs(uT,{isVisible:r,children:[a.jsx("h1",{children:"Escuela Dominical"}),a.jsx("p",{children:"Contamos con una escuela dominical para todas las edades, donde se imparte la palabra de Dios de una manera didáctica y sencilla para los niños de diferentes edades. Instruir a los niños desde pequeños en la palabra de Dios es una de las prioridades de nuestra iglesia."})]})]})},dT=fn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,fT=k.div`
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
`,pT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${dT} 1s ease-in-out;
  margin: 10px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,hT=k.div`
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
`,mT=()=>{const e=[K.niñoUno,K.niñoDos,K.niñoTres],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("casa-de-vida");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]),a.jsxs(fT,{id:"casa-de-vida",children:[a.jsxs(hT,{isVisible:r,children:[a.jsx("h1",{children:"Casa de Vida"}),a.jsx("p",{children:"Contamos con una escuela dominical para todas las edades, donde se imparte la palabra de Dios de una manera didáctica y sencilla para los niños de diferentes edades. Instruir a los niños desde pequeños en la palabra de Dios es una de las prioridades de nuestra iglesia."})]}),a.jsx(pT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},gT=k.div`
    
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
`,vT=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: 'Montserrat', sans-serif;
  
`,xT=k.div`
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
`,yT=()=>a.jsx(a.Fragment,{children:a.jsx(gT,{children:a.jsxs(xT,{children:[a.jsx(vT,{children:a.jsx("h1",{children:"Centro Cristiano Rios De Vida"})}),a.jsxs("p",{children:["Somos una iglesia evangélica cristiana, que busca llevar el mensaje de salvación a todas las naciones, y ayudar a la comunidad a encontrar su propósito en la vida, Creemos que Dios tiene un plan con cada Persona en esta vida y que el propósito de Dios es que todos tengan vida y vida en abundancia.",a.jsx("br",{})]})]})})});function wT(){return a.jsxs(a.Fragment,{children:[a.jsx(Cl,{}),a.jsx(bf,{}),a.jsx(JP,{}),a.jsxs(bT,{children:[a.jsx(yT,{}),a.jsx(UP,{}),a.jsx(cT,{}),a.jsx(mT,{})]}),a.jsx(KP,{}),a.jsx(yf,{})]})}const bT=k.div`


*{
    font-family: "Bebas Neue", sans-serif;
  
  /*font-family: "Poppins", sans-serif;*/
  
}
    
`,ST=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,jT=k.div`
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
`,kT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  animation: ${ST} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,CT=k.div`
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
`,ET=()=>{const e=[K.auditorioUno,K.auditorioDos,K.auditorioTres,K.auditorioCuatro,K.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-cuatro");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(jT,{id:"evento-section-cuatro",children:[a.jsx(kT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r}),a.jsxs(CT,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Mujeres"}),a.jsx("p",{children:"La convención de mujeres es un evento anual que reúne a mujeres de diversas localidades para compartir, fortalecer y apoyar a las mujeres en el crecimiento de su fe y en su vida diaria. Este evento es una oportunidad para aprender, crecer y conectarse con otras mujeres que comparten la misma fe y valores."})]})]})},$T=k.div`
    
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
`,_T=k.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f2f2f2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: 'Montserrat', sans-serif;
  
`,RT=k.div`
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
`,PT=()=>a.jsx(a.Fragment,{children:a.jsx($T,{children:a.jsxs(RT,{children:[a.jsx(_T,{children:a.jsx("h1",{children:"Nuestros Eventos"})}),a.jsxs("p",{children:["Tenemos una gran carga moral con el tratar de hacer de este mundo un lugar mejor, y es por eso que nos esforzamos en hacer eventos que ayuden a la comunidad cristiana y en ocaciones eventos para llegar a las personas que no conocen de Dios. ",a.jsx("br",{}),a.jsx("br",{})]})]})})}),TT=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,NT=k.div`
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
`,IT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${TT} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,zT=k.div`
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
`,LT=()=>{const e=[K.auditorioUno,K.auditorioDos,K.auditorioTres,K.auditorioCuatro,K.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-tres");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(NT,{id:"evento-section-tres",children:[a.jsxs(zT,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Jóvenes"}),a.jsx("p",{children:"La Convención de Jóvenes es un evento anual que reúne a jóvenes de diferentes lugares para compartir experiencias, aprender y crecer juntos en la fe. Durante este evento, se llevan a cabo actividades como talleres, charlas, dinámicas grupales y momentos de adoración. Es una oportunidad única para fortalecer la comunidad juvenil y fomentar el compañerismo entre los asistentes."})]}),a.jsx(IT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})},AT="https://Bravo938.github.io/RiosDeVida.pages/assets/LogoRiosDeVida-CyC5MU--.png",OT="https://Bravo938.github.io/RiosDeVida.pages/assets/oscuroManos-CJPiaVel.mp4",DT=k.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`,MT=k.section`
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
`,FT=k.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: opacity 0.5s ease;
`,BT=k.div`
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.336);
  border-radius: 10px;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(-100px)"};
  transition: opacity 1s ease, transform 1s ease;
  z-index: 1;
`,UT=k.h2`
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
`,VT=k.p`
  font-size: 18px;
  color: #000000;
`,HT=k.div`
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
`,WT=k.img`
  width: 100%;
  border-radius: 10px;
`,qT=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1);y.useEffect(()=>{const i=()=>{const s=document.getElementById("eventos-section");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;t(c)}};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]);const o=()=>r(!0);return a.jsxs(DT,{children:[a.jsx(FT,{autoPlay:!0,loop:!0,muted:!0,onCanPlay:o,style:{opacity:n?1:0},children:a.jsx("source",{src:OT,type:"video/mp4"})}),a.jsxs(MT,{id:"eventos-section",children:[a.jsxs(BT,{isVisible:e,children:[a.jsx(UT,{children:"Somos una iglesia de eventos"}),a.jsx(VT,{children:"Creemos en la importancia de compartir momentos significativos en comunidad. Nuestros eventos están diseñados para unir a las personas, fortalecer la fe y crear recuerdos inolvidables. ¡Descubre nuestras próximas actividades!"})]}),a.jsx(HT,{isVisible:e,children:a.jsx(WT,{src:AT,alt:"Eventos en nuestra iglesia"})})]})]})},GT=fn`
  from { opacity: 0; }
  to { opacity: 1; }
`,JT=k.div`
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
`,XT=k.div`
  width: 100%;
  max-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateX(0)":"translateX(100px)"};
  animation: ${GT} 1s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: auto;
    width: 50%;
    margin: 0;
    border-radius: 30px;
  }
`,KT=k.div`
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
`,QT=()=>{const e=[K.auditorioUno,K.auditorioDos,K.auditorioTres,K.auditorioCuatro,K.auditorioCinco],[t,n]=y.useState(0),[r,o]=y.useState(!1);return y.useEffect(()=>{const i=setInterval(()=>{n(s=>(s+1)%e.length)},5e3);return()=>clearInterval(i)},[e.length]),y.useEffect(()=>{const i=()=>{const s=document.getElementById("evento-section-cinco");if(s){const l=s.getBoundingClientRect(),u=window.innerHeight,c=l.top<u*.8&&l.bottom>u*.2;o(c)}};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),a.jsxs(JT,{id:"evento-section-cinco",children:[a.jsxs(KT,{isVisible:r,children:[a.jsx("h1",{children:"Convención de Niños"}),a.jsx("p",{children:"La convención de niños es un evento anual que reúne a niños de diversas localidades para tener un momento de aprendizaje y fortalecer su confianza y fe desde una edad temprana, todo esto de una manera divertida y amena. Este evento es una oportunidad para que los niños se conecten con otros de su edad, aprendan sobre la importancia de la fe y la comunidad, y desarrollen habilidades sociales y emocionales."})]}),a.jsx(XT,{style:{backgroundImage:`url(${e[t]})`},isVisible:r})]})};function YT(){return a.jsxs(a.Fragment,{children:[a.jsx(Cl,{}),a.jsx(bf,{}),a.jsxs(ZT,{children:[a.jsx(qT,{}),a.jsx(PT,{}),a.jsx(LT,{}),a.jsx(ET,{}),a.jsx(QT,{})]}),a.jsx(yf,{})]})}const ZT=k.div`


*{
    /*font-family: "Bebas Neue", sans-serif;*/
  
    font-family: "Bebas Neue", sans-serif;
  
}
    
`;function eN(){const{auth:e,setAuth:t}=y.useContext(ts);return y.useEffect(()=>{const n=localStorage.getItem("token");n&&t({token:n})},[t]),a.jsx(a.Fragment,{children:a.jsxs(kS,{children:[a.jsx(q,{path:"/login",element:a.jsx(n$,{})}),a.jsx(q,{path:"/jovenes",element:a.jsx(wT,{})}),a.jsx(q,{path:"/",element:a.jsx(h2,{})}),a.jsx(q,{path:"/notas",element:a.jsx(IP,{})}),a.jsx(q,{path:"/eventos",element:a.jsx(YT,{})}),e&&e.token?a.jsxs(q,{element:a.jsx(x2,{}),children:[a.jsx(q,{path:"/*",element:a.jsx(S2,{})}),a.jsx(q,{path:"/logout",element:a.jsx(p$,{})}),a.jsx(q,{path:"/planillaLider",element:a.jsx(D3,{})}),a.jsx(q,{path:"/planillaGeneralSupervisor",element:a.jsx(J4,{})}),a.jsx(q,{path:"/asistencia",element:a.jsx(Z3,{})}),a.jsx(q,{path:"/asistenciaVistaSupervisor",element:a.jsx(M4,{})}),a.jsx(q,{path:"/asistenciaVistaAdmin",element:a.jsx(wP,{})}),a.jsx(q,{path:"/registroUsuarios",element:a.jsx(PR,{})}),a.jsx(q,{path:"/registroDeRoles",element:a.jsx(s4,{})}),a.jsx(q,{path:"/registroLideryMiembro",element:a.jsx(j4,{})}),a.jsx(q,{path:"/miembrosLideresSupervisor",element:a.jsx(pP,{})}),a.jsx(q,{path:"/generalPlanilla",element:a.jsx(aR,{})}),a.jsx(q,{path:"/planillaGeneralAdmin",element:a.jsx($P,{})}),a.jsx(q,{path:"/asignarSupervisor",element:a.jsx(HR,{})}),a.jsx(q,{path:"/crearMiembro",element:a.jsx(W3,{})}),a.jsx(q,{path:"/crearPlanillaGeneral",element:a.jsx(mR,{})}),a.jsx(q,{path:"/crearPlanillaGeneralSupervisor",element:a.jsx(nP,{})}),a.jsx(q,{path:"/crearAsistencia",element:a.jsx(jR,{})}),a.jsx(q,{path:"/crearUsuario",element:a.jsx(OR,{})}),a.jsx(q,{path:"/crearAsignarSupervisor",element:a.jsx(YR,{})}),a.jsx(q,{path:"/crearUnRol",element:a.jsx(p4,{})}),a.jsx(q,{path:"/crearMiembroSupervisor",element:a.jsx(P4,{})}),a.jsx(q,{path:"/editarMiembros/:id",element:a.jsx(J3,{})}),a.jsx(q,{path:"/editarPlanillaGeneral/:id",element:a.jsx(xR,{})}),a.jsx(q,{path:"/editarAsistencia/:id",element:a.jsx(ER,{})}),a.jsx(q,{path:"/editarUsuario/:id",element:a.jsx(FR,{})}),a.jsx(q,{path:"/editarAsignacionSupervisor/:id",element:a.jsx(n4,{})}),a.jsx(q,{path:"/editarRol/:id",element:a.jsx(g4,{})}),a.jsx(q,{path:"/editarMiembroSupervisor/:id",element:a.jsx(I4,{})}),a.jsx(q,{path:"/editarPlanillaGeneralSupervisor/:id",element:a.jsx(iP,{})})]}):a.jsx(q,{path:"/*",element:a.jsx(bS,{to:"/"})})]})})}zv(document.getElementById("root")).render(a.jsx(y.StrictMode,{children:a.jsx(TS,{children:a.jsx(E2,{children:a.jsx(eN,{})})})}));
