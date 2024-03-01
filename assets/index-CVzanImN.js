(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(i,e){const t=new Set(i.split(","));return e?n=>t.has(n.toLowerCase()):n=>t.has(n)}const ct={},xs=[],rn=()=>{},Bp=()=>!1,No=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Ul=i=>i.startsWith("onUpdate:"),It=Object.assign,Ol=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},zp=Object.prototype.hasOwnProperty,Je=(i,e)=>zp.call(i,e),He=Array.isArray,vs=i=>Uo(i)==="[object Map]",Af=i=>Uo(i)==="[object Set]",We=i=>typeof i=="function",At=i=>typeof i=="string",zs=i=>typeof i=="symbol",ft=i=>i!==null&&typeof i=="object",wf=i=>(ft(i)||We(i))&&We(i.then)&&We(i.catch),Rf=Object.prototype.toString,Uo=i=>Rf.call(i),Hp=i=>Uo(i).slice(8,-1),Cf=i=>Uo(i)==="[object Object]",Fl=i=>At(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ir=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Gp=/-(\w)/g,Pn=Oo(i=>i.replace(Gp,(e,t)=>t?t.toUpperCase():"")),Vp=/\B([A-Z])/g,Hs=Oo(i=>i.replace(Vp,"-$1").toLowerCase()),Fo=Oo(i=>i.charAt(0).toUpperCase()+i.slice(1)),ra=Oo(i=>i?`on${Fo(i)}`:""),yi=(i,e)=>!Object.is(i,e),oa=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},vo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},kp=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Lc;const Lf=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(i){if(He(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=At(n)?qp(n):Bl(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(i)||ft(i))return i}const Wp=/;(?![^(]*\))/g,Xp=/:([^]+)/,jp=/\/\*[^]*?\*\//g;function qp(i){const e={};return i.replace(jp,"").split(Wp).forEach(t=>{if(t){const n=t.split(Xp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function zl(i){let e="";if(At(i))e=i;else if(He(i))for(let t=0;t<i.length;t++){const n=zl(i[t]);n&&(e+=n+" ")}else if(ft(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=Nl(Yp);function Pf(i){return!!i||i===""}const aa=i=>At(i)?i:i==null?"":He(i)||ft(i)&&(i.toString===Rf||!We(i.toString))?JSON.stringify(i,If,2):String(i),If=(i,e)=>e&&e.__v_isRef?If(i,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[la(n,r)+" =>"]=s,t),{})}:Af(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>la(t))}:zs(e)?la(e):ft(e)&&!He(e)&&!Cf(e)?String(e):e,la=(i,e="")=>{var t;return zs(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Df{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nf(i){return new Df(i)}function $p(i,e=Kt){e&&e.active&&e.effects.push(i)}function Uf(){return Kt}function Zp(i){Kt&&Kt.cleanups.push(i)}let Oi;class Hl{constructor(e,t,n,s){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$p(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Wi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Jp(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=pi,t=Oi;try{return pi=!0,Oi=this,this._runnings++,Pc(this),this.fn()}finally{Ic(this),this._runnings--,Oi=t,pi=e}}stop(){var e;this.active&&(Pc(this),Ic(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Jp(i){return i.value}function Pc(i){i._trackId++,i._depsLength=0}function Ic(i){if(i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)Of(i.deps[e],i);i.deps.length=i._depsLength}}function Of(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let pi=!0,nl=0;const Ff=[];function Wi(){Ff.push(pi),pi=!1}function Xi(){const i=Ff.pop();pi=i===void 0?!0:i}function Gl(){nl++}function Vl(){for(nl--;!nl&&il.length;)il.shift()()}function Bf(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&Of(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const il=[];function zf(i,e,t){Gl();for(const n of i.keys()){let s;n._dirtyLevel<e&&(s??(s=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(s??(s=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&il.push(n.scheduler)))}Vl()}const Hf=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},yo=new WeakMap,Fi=Symbol(""),sl=Symbol("");function Xt(i,e,t){if(pi&&Oi){let n=yo.get(i);n||yo.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Hf(()=>n.delete(t))),Bf(Oi,s)}}function Xn(i,e,t,n,s,r){const o=yo.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!zs(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(i)?Fl(t)&&a.push(o.get("length")):(a.push(o.get(Fi)),vs(i)&&a.push(o.get(sl)));break;case"delete":He(i)||(a.push(o.get(Fi)),vs(i)&&a.push(o.get(sl)));break;case"set":vs(i)&&a.push(o.get(Fi));break}Gl();for(const l of a)l&&zf(l,4);Vl()}function Qp(i,e){var t;return(t=yo.get(i))==null?void 0:t.get(e)}const em=Nl("__proto__,__v_isRef,__isVue"),Gf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(zs)),Dc=tm();function tm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Qe(this);for(let r=0,o=this.length;r<o;r++)Xt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Qe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Wi(),Gl();const n=Qe(this)[e].apply(this,t);return Vl(),Xi(),n}}),i}function nm(i){const e=Qe(this);return Xt(e,"has",i),e.hasOwnProperty(i)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const s=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?mm:jf:r?Xf:Wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=He(e);if(!s){if(o&&Je(Dc,t))return Reflect.get(Dc,t,n);if(t==="hasOwnProperty")return nm}const a=Reflect.get(e,t,n);return(zs(t)?Gf.has(t):em(t))||(s||Xt(e,"get",t),r)?a:xt(a)?o&&Fl(t)?a:a.value:ft(a)?s?Yf(a):br(a):a}}class kf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._shallow){const l=As(r);if(!Mo(n)&&!As(n)&&(r=Qe(r),n=Qe(n)),!He(e)&&xt(r)&&!xt(n))return l?!1:(r.value=n,!0)}const o=He(e)&&Fl(t)?Number(t)<e.length:Je(e,t),a=Reflect.set(e,t,n,s);return e===Qe(s)&&(o?yi(n,r)&&Xn(e,"set",t,n):Xn(e,"add",t,n)),a}deleteProperty(e,t){const n=Je(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Xn(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!zs(t)||!Gf.has(t))&&Xt(e,"has",t),n}ownKeys(e){return Xt(e,"iterate",He(e)?"length":Fi),Reflect.ownKeys(e)}}class im extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sm=new kf,rm=new im,om=new kf(!0),kl=i=>i,Bo=i=>Reflect.getPrototypeOf(i);function Ir(i,e,t=!1,n=!1){i=i.__v_raw;const s=Qe(i),r=Qe(e);t||(yi(e,r)&&Xt(s,"get",e),Xt(s,"get",r));const{has:o}=Bo(s),a=n?kl:t?jl:pr;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Dr(i,e=!1){const t=this.__v_raw,n=Qe(t),s=Qe(i);return e||(yi(i,s)&&Xt(n,"has",i),Xt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Nr(i,e=!1){return i=i.__v_raw,!e&&Xt(Qe(i),"iterate",Fi),Reflect.get(i,"size",i)}function Nc(i){i=Qe(i);const e=Qe(this);return Bo(e).has.call(e,i)||(e.add(i),Xn(e,"add",i,i)),this}function Uc(i,e){e=Qe(e);const t=Qe(this),{has:n,get:s}=Bo(t);let r=n.call(t,i);r||(i=Qe(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?yi(e,o)&&Xn(t,"set",i,e):Xn(t,"add",i,e),this}function Oc(i){const e=Qe(this),{has:t,get:n}=Bo(e);let s=t.call(e,i);s||(i=Qe(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Xn(e,"delete",i,void 0),r}function Fc(){const i=Qe(this),e=i.size!==0,t=i.clear();return e&&Xn(i,"clear",void 0,void 0),t}function Ur(i,e){return function(n,s){const r=this,o=r.__v_raw,a=Qe(o),l=e?kl:i?jl:pr;return!i&&Xt(a,"iterate",Fi),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Or(i,e,t){return function(...n){const s=this.__v_raw,r=Qe(s),o=vs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?kl:e?jl:pr;return!e&&Xt(r,"iterate",l?sl:Fi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $n(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function am(){const i={get(r){return Ir(this,r)},get size(){return Nr(this)},has:Dr,add:Nc,set:Uc,delete:Oc,clear:Fc,forEach:Ur(!1,!1)},e={get(r){return Ir(this,r,!1,!0)},get size(){return Nr(this)},has:Dr,add:Nc,set:Uc,delete:Oc,clear:Fc,forEach:Ur(!1,!0)},t={get(r){return Ir(this,r,!0)},get size(){return Nr(this,!0)},has(r){return Dr.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Ur(!0,!1)},n={get(r){return Ir(this,r,!0,!0)},get size(){return Nr(this,!0)},has(r){return Dr.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Or(r,!1,!1),t[r]=Or(r,!0,!1),e[r]=Or(r,!1,!0),n[r]=Or(r,!0,!0)}),[i,t,e,n]}const[lm,cm,um,hm]=am();function Wl(i,e){const t=e?i?hm:um:i?cm:lm;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Je(t,s)&&s in n?t:n,s,r)}const fm={get:Wl(!1,!1)},dm={get:Wl(!1,!0)},pm={get:Wl(!0,!1)},Wf=new WeakMap,Xf=new WeakMap,jf=new WeakMap,mm=new WeakMap;function gm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(i){return i.__v_skip||!Object.isExtensible(i)?0:gm(Hp(i))}function br(i){return As(i)?i:Xl(i,!1,sm,fm,Wf)}function qf(i){return Xl(i,!1,om,dm,Xf)}function Yf(i){return Xl(i,!0,rm,pm,jf)}function Xl(i,e,t,n,s){if(!ft(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=_m(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function mi(i){return As(i)?mi(i.__v_raw):!!(i&&i.__v_isReactive)}function As(i){return!!(i&&i.__v_isReadonly)}function Mo(i){return!!(i&&i.__v_isShallow)}function Kf(i){return mi(i)||As(i)}function Qe(i){const e=i&&i.__v_raw;return e?Qe(e):i}function zo(i){return Object.isExtensible(i)&&vo(i,"__v_skip",!0),i}const pr=i=>ft(i)?br(i):i,jl=i=>ft(i)?Yf(i):i;class $f{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Hl(()=>e(this._value),()=>fo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Qe(this);return(!e._cacheable||e.effect.dirty)&&yi(e._value,e._value=e.effect.run())&&fo(e,4),Zf(e),e.effect._dirtyLevel>=2&&fo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function xm(i,e,t=!1){let n,s;const r=We(i);return r?(n=i,s=rn):(n=i.get,s=i.set),new $f(n,s,r||!s,t)}function Zf(i){var e;pi&&Oi&&(i=Qe(i),Bf(Oi,(e=i.dep)!=null?e:i.dep=Hf(()=>i.dep=void 0,i instanceof $f?i:void 0)))}function fo(i,e=4,t){i=Qe(i);const n=i.dep;n&&zf(n,e)}function xt(i){return!!(i&&i.__v_isRef===!0)}function ql(i){return Jf(i,!1)}function vm(i){return Jf(i,!0)}function Jf(i,e){return xt(i)?i:new ym(i,e)}class ym{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:pr(e)}get value(){return Zf(this),this._value}set value(e){const t=this.__v_isShallow||Mo(e)||As(e);e=t?e:Qe(e),yi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:pr(e),fo(this,4))}}function ys(i){return xt(i)?i.value:i}const Mm={get:(i,e,t)=>ys(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return xt(s)&&!xt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Qf(i){return mi(i)?i:new Proxy(i,Mm)}function Sm(i){const e=He(i)?new Array(i.length):{};for(const t in i)e[t]=Tm(i,t);return e}class Em{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qp(Qe(this._object),this._key)}}function Tm(i,e,t){const n=i[e];return xt(n)?n:new Em(i,e,t)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gi(i,e,t,n){try{return n?i(...n):i()}catch(s){Ho(s,e,t)}}function pn(i,e,t,n){if(We(i)){const r=gi(i,e,t,n);return r&&wf(r)&&r.catch(o=>{Ho(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(pn(i[r],e,t,n));return s}function Ho(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){gi(l,null,10,[i,o,a]);return}}bm(i,t,s,n)}function bm(i,e,t,n=!0){console.error(i)}let mr=!1,rl=!1;const Ft=[];let bn=0;const Ms=[];let oi=null,Ii=0;const ed=Promise.resolve();let Yl=null;function Kl(i){const e=Yl||ed;return i?e.then(this?i.bind(this):i):e}function Am(i){let e=bn+1,t=Ft.length;for(;e<t;){const n=e+t>>>1,s=Ft[n],r=gr(s);r<i||r===i&&s.pre?e=n+1:t=n}return e}function $l(i){(!Ft.length||!Ft.includes(i,mr&&i.allowRecurse?bn+1:bn))&&(i.id==null?Ft.push(i):Ft.splice(Am(i.id),0,i),td())}function td(){!mr&&!rl&&(rl=!0,Yl=ed.then(id))}function wm(i){const e=Ft.indexOf(i);e>bn&&Ft.splice(e,1)}function Rm(i){He(i)?Ms.push(...i):(!oi||!oi.includes(i,i.allowRecurse?Ii+1:Ii))&&Ms.push(i),td()}function Bc(i,e,t=mr?bn+1:0){for(;t<Ft.length;t++){const n=Ft[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;Ft.splice(t,1),t--,n()}}}function nd(i){if(Ms.length){const e=[...new Set(Ms)].sort((t,n)=>gr(t)-gr(n));if(Ms.length=0,oi){oi.push(...e);return}for(oi=e,Ii=0;Ii<oi.length;Ii++)oi[Ii]();oi=null,Ii=0}}const gr=i=>i.id==null?1/0:i.id,Cm=(i,e)=>{const t=gr(i)-gr(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function id(i){rl=!1,mr=!0,Ft.sort(Cm);try{for(bn=0;bn<Ft.length;bn++){const e=Ft[bn];e&&e.active!==!1&&gi(e,null,14)}}finally{bn=0,Ft.length=0,nd(),mr=!1,Yl=null,(Ft.length||Ms.length)&&id()}}function Lm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ct;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||ct;f&&(s=t.map(m=>At(m)?m.trim():m)),h&&(s=t.map(kp))}let a,l=n[a=ra(e)]||n[a=ra(Pn(e))];!l&&r&&(l=n[a=ra(Hs(e))]),l&&pn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,pn(c,i,6,s)}}function sd(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!We(i)){const l=c=>{const u=sd(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(ft(i)&&n.set(i,null),null):(He(r)?r.forEach(l=>o[l]=null):It(o,r),ft(i)&&n.set(i,o),o)}function Go(i,e){return!i||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(i,e[0].toLowerCase()+e.slice(1))||Je(i,Hs(e))||Je(i,e))}let on=null,Vo=null;function So(i){const e=on;return on=i,Vo=i&&i.type.__scopeId||null,e}function rd(i){Vo=i}function od(){Vo=null}function Pm(i,e=on,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Kc(-1);const r=So(e);let o;try{o=i(...s)}finally{So(r),n._d&&Kc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ca(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:_}=i;let d,p;const S=So(i);try{if(t.shapeFlag&4){const E=s||n,I=E;d=En(u.call(I,E,h,r,m,f,g)),p=l}else{const E=e;d=En(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),p=e.props?l:Im(l)}}catch(E){or.length=0,Ho(E,i,1),d=an(_r)}let v=d;if(p&&_!==!1){const E=Object.keys(p),{shapeFlag:I}=v;E.length&&I&7&&(o&&E.some(Ul)&&(p=Dm(p,o)),v=ws(v,p))}return t.dirs&&(v=ws(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),d=v,So(S),d}const Im=i=>{let e;for(const t in i)(t==="class"||t==="style"||No(t))&&((e||(e={}))[t]=i[t]);return e},Dm=(i,e)=>{const t={};for(const n in i)(!Ul(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Nm(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?zc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Go(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?zc(n,o,c):!0:!!o;return!1}function zc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Go(t,r))return!0}return!1}function Um({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const ad="components";function Om(i,e){return Bm(ad,i,!0,e)||i}const Fm=Symbol.for("v-ndc");function Bm(i,e,t=!0,n=!1){const s=on||Lt;if(s){const r=s.type;if(i===ad){const a=Ng(r,!1);if(a&&(a===e||a===Pn(e)||a===Fo(Pn(e))))return r}const o=Hc(s[i]||r[i],e)||Hc(s.appContext[i],e);return!o&&n?r:o}}function Hc(i,e){return i&&(i[e]||i[Pn(e)]||i[Fo(Pn(e))])}const zm=i=>i.__isSuspense;function Hm(i,e){e&&e.pendingBranch?He(i)?e.effects.push(...i):e.effects.push(i):Rm(i)}const Gm=Symbol.for("v-scx"),Vm=()=>Ln(Gm),Fr={};function sr(i,e,t){return ld(i,e,t)}function ld(i,e,{immediate:t,deep:n,flush:s,once:r,onTrack:o,onTrigger:a}=ct){if(e&&r){const R=e;e=(...T)=>{R(...T),I()}}const l=Lt,c=R=>n===!0?R:ms(R,n===!1?1:void 0);let u,h=!1,f=!1;if(xt(i)?(u=()=>i.value,h=Mo(i)):mi(i)?(u=()=>c(i),h=!0):He(i)?(f=!0,h=i.some(R=>mi(R)||Mo(R)),u=()=>i.map(R=>{if(xt(R))return R.value;if(mi(R))return c(R);if(We(R))return gi(R,l,2)})):We(i)?e?u=()=>gi(i,l,2):u=()=>(m&&m(),pn(i,l,3,[g])):u=rn,e&&n){const R=u;u=()=>ms(R())}let m,g=R=>{m=v.onStop=()=>{gi(R,l,4),m=v.onStop=void 0}},_;if(jo)if(g=rn,e?t&&pn(e,l,3,[u(),f?[]:void 0,g]):u(),s==="sync"){const R=Vm();_=R.__watcherHandles||(R.__watcherHandles=[])}else return rn;let d=f?new Array(i.length).fill(Fr):Fr;const p=()=>{if(!(!v.active||!v.dirty))if(e){const R=v.run();(n||h||(f?R.some((T,O)=>yi(T,d[O])):yi(R,d)))&&(m&&m(),pn(e,l,3,[R,d===Fr?void 0:f&&d[0]===Fr?[]:d,g]),d=R)}else v.run()};p.allowRecurse=!!e;let S;s==="sync"?S=p:s==="post"?S=()=>Wt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>$l(p));const v=new Hl(u,rn,S),E=Uf(),I=()=>{v.stop(),E&&Ol(E.effects,v)};return e?t?p():d=v.run():s==="post"?Wt(v.run.bind(v),l&&l.suspense):v.run(),_&&_.push(I),I}function km(i,e,t){const n=this.proxy,s=At(i)?i.includes(".")?cd(n,i):()=>n[i]:i.bind(n,n);let r;We(e)?r=e:(r=e.handler,t=e);const o=Ar(this),a=ld(s,r.bind(n),t);return o(),a}function cd(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function ms(i,e,t=0,n){if(!ft(i)||i.__v_skip)return i;if(e&&e>0){if(t>=e)return i;t++}if(n=n||new Set,n.has(i))return i;if(n.add(i),xt(i))ms(i.value,e,t,n);else if(He(i))for(let s=0;s<i.length;s++)ms(i[s],e,t,n);else if(Af(i)||vs(i))i.forEach(s=>{ms(s,e,t,n)});else if(Cf(i))for(const s in i)ms(i[s],e,t,n);return i}function Ti(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Wi(),pn(l,t,8,[i.el,a,i,e]),Xi())}}/*! #__NO_SIDE_EFFECTS__ */function ud(i,e){return We(i)?It({name:i.name},e,{setup:i}):i}const po=i=>!!i.type.__asyncLoader,hd=i=>i.type.__isKeepAlive;function Wm(i,e){fd(i,"a",e)}function Xm(i,e){fd(i,"da",e)}function fd(i,e,t=Lt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(ko(e,n,t),t){let s=t.parent;for(;s&&s.parent;)hd(s.parent.vnode)&&jm(n,e,t,s),s=s.parent}}function jm(i,e,t,n){const s=ko(e,i,n,!0);dd(()=>{Ol(n[e],s)},t)}function ko(i,e,t=Lt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Wi();const a=Ar(t),l=pn(e,t,i,o);return a(),Xi(),l});return n?s.unshift(r):s.push(r),r}}const qn=i=>(e,t=Lt)=>(!jo||i==="sp")&&ko(i,(...n)=>e(...n),t),qm=qn("bm"),Ym=qn("m"),Km=qn("bu"),$m=qn("u"),Zm=qn("bum"),dd=qn("um"),Jm=qn("sp"),Qm=qn("rtg"),eg=qn("rtc");function tg(i,e=Lt){ko("ec",i,e)}const ol=i=>i?Td(i)?nc(i)||i.proxy:ol(i.parent):null,rr=It(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ol(i.parent),$root:i=>ol(i.root),$emit:i=>i.emit,$options:i=>Zl(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,$l(i.update)}),$nextTick:i=>i.n||(i.n=Kl.bind(i.proxy)),$watch:i=>km.bind(i)}),ua=(i,e)=>i!==ct&&!i.__isScriptSetup&&Je(i,e),ng={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ua(n,e))return o[e]=1,n[e];if(s!==ct&&Je(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Je(c,e))return o[e]=3,r[e];if(t!==ct&&Je(t,e))return o[e]=4,t[e];al&&(o[e]=0)}}const u=rr[e];let h,f;if(u)return e==="$attrs"&&Xt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ct&&Je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return ua(s,e)?(s[e]=t,!0):n!==ct&&Je(n,e)?(n[e]=t,!0):Je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==ct&&Je(i,o)||ua(e,o)||(a=r[0])&&Je(a,o)||Je(n,o)||Je(rr,o)||Je(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Gc(i){return He(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let al=!0;function ig(i){const e=Zl(i),t=i.proxy,n=i.ctx;al=!1,e.beforeCreate&&Vc(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:_,deactivated:d,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:E,render:I,renderTracked:R,renderTriggered:T,errorCaptured:O,serverPrefetch:ne,expose:y,inheritAttrs:L,components:Z,directives:ue,filters:F}=e;if(c&&sg(c,n,null),o)for(const te in o){const j=o[te];We(j)&&(n[te]=j.bind(t))}if(s){const te=s.call(t,t);ft(te)&&(i.data=br(te))}if(al=!0,r)for(const te in r){const j=r[te],le=We(j)?j.bind(t,t):We(j.get)?j.get.bind(t,t):rn,ce=!We(j)&&We(j.set)?j.set.bind(t):rn,de=en({get:le,set:ce});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>de.value,set:xe=>de.value=xe})}if(a)for(const te in a)pd(a[te],n,t,te);if(l){const te=We(l)?l.call(t):l;Reflect.ownKeys(te).forEach(j=>{mo(j,te[j])})}u&&Vc(u,i,"c");function H(te,j){He(j)?j.forEach(le=>te(le.bind(t))):j&&te(j.bind(t))}if(H(qm,h),H(Ym,f),H(Km,m),H($m,g),H(Wm,_),H(Xm,d),H(tg,O),H(eg,R),H(Qm,T),H(Zm,S),H(dd,E),H(Jm,ne),He(y))if(y.length){const te=i.exposed||(i.exposed={});y.forEach(j=>{Object.defineProperty(te,j,{get:()=>t[j],set:le=>t[j]=le})})}else i.exposed||(i.exposed={});I&&i.render===rn&&(i.render=I),L!=null&&(i.inheritAttrs=L),Z&&(i.components=Z),ue&&(i.directives=ue)}function sg(i,e,t=rn){He(i)&&(i=ll(i));for(const n in i){const s=i[n];let r;ft(s)?"default"in s?r=Ln(s.from||n,s.default,!0):r=Ln(s.from||n):r=Ln(s),xt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function Vc(i,e,t){pn(He(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function pd(i,e,t,n){const s=n.includes(".")?cd(t,n):()=>t[n];if(At(i)){const r=e[i];We(r)&&sr(s,r)}else if(We(i))sr(s,i.bind(t));else if(ft(i))if(He(i))i.forEach(r=>pd(r,e,t,n));else{const r=We(i.handler)?i.handler.bind(t):e[i.handler];We(r)&&sr(s,r,i)}}function Zl(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Eo(l,c,o,!0)),Eo(l,e,o)),ft(e)&&r.set(e,l),l}function Eo(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Eo(i,r,t,!0),s&&s.forEach(o=>Eo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=rg[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const rg={data:kc,props:Wc,emits:Wc,methods:nr,computed:nr,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:nr,directives:nr,watch:ag,provide:kc,inject:og};function kc(i,e){return e?i?function(){return It(We(i)?i.call(this,this):i,We(e)?e.call(this,this):e)}:e:i}function og(i,e){return nr(ll(i),ll(e))}function ll(i){if(He(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ht(i,e){return i?[...new Set([].concat(i,e))]:e}function nr(i,e){return i?It(Object.create(null),i,e):e}function Wc(i,e){return i?He(i)&&He(e)?[...new Set([...i,...e])]:It(Object.create(null),Gc(i),Gc(e??{})):e}function ag(i,e){if(!i)return e;if(!e)return i;const t=It(Object.create(null),i);for(const n in e)t[n]=Ht(i[n],e[n]);return t}function md(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function cg(i,e){return function(n,s=null){We(n)||(n=It({},n)),s!=null&&!ft(s)&&(s=null);const r=md(),o=new WeakSet;let a=!1;const l=r.app={_uid:lg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Og,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=an(n,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,nc(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Ss;Ss=l;try{return c()}finally{Ss=u}}};return l}}let Ss=null;function mo(i,e){if(Lt){let t=Lt.provides;const n=Lt.parent&&Lt.parent.provides;n===t&&(t=Lt.provides=Object.create(n)),t[i]=e}}function Ln(i,e,t=!1){const n=Lt||on;if(n||Ss){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Ss._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&We(e)?e.call(n&&n.proxy):e}}function ug(){return!!(Lt||on||Ss)}function hg(i,e,t,n=!1){const s={},r={};vo(r,Xo,1),i.propsDefaults=Object.create(null),gd(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:qf(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function fg(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Qe(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Go(i.emitsOptions,f))continue;const m=e[f];if(l)if(Je(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=Pn(f);s[g]=cl(l,a,g,m,i,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{gd(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Je(e,h)&&((u=Hs(h))===h||!Je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=cl(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Je(e,h))&&(delete r[h],c=!0)}c&&Xn(i,"set","$attrs")}function gd(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(ir(l))continue;const c=e[l];let u;s&&Je(s,u=Pn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Go(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Qe(t),c=a||ct;for(let u=0;u<r.length;u++){const h=r[u];t[h]=cl(s,l,h,c[h],i,!Je(c,h))}}return o}function cl(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Je(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const u=Ar(s);n=c[t]=l.call(null,e),u()}}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Hs(t))&&(n=!0))}return n}function _d(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!We(i)){const u=h=>{l=!0;const[f,m]=_d(h,e,!0);It(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return ft(i)&&n.set(i,xs),xs;if(He(r))for(let u=0;u<r.length;u++){const h=Pn(r[u]);Xc(h)&&(o[h]=ct)}else if(r)for(const u in r){const h=Pn(u);if(Xc(h)){const f=r[u],m=o[h]=He(f)||We(f)?{type:f}:It({},f);if(m){const g=Yc(Boolean,m.type),_=Yc(String,m.type);m[0]=g>-1,m[1]=_<0||g<_,(g>-1||Je(m,"default"))&&a.push(h)}}}const c=[o,a];return ft(i)&&n.set(i,c),c}function Xc(i){return i[0]!=="$"&&!ir(i)}function jc(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function qc(i,e){return jc(i)===jc(e)}function Yc(i,e){return He(e)?e.findIndex(t=>qc(t,i)):We(e)&&qc(e,i)?0:-1}const xd=i=>i[0]==="_"||i==="$stable",Jl=i=>He(i)?i.map(En):[En(i)],dg=(i,e,t)=>{if(e._n)return e;const n=Pm((...s)=>Jl(e(...s)),t);return n._c=!1,n},vd=(i,e,t)=>{const n=i._ctx;for(const s in i){if(xd(s))continue;const r=i[s];if(We(r))e[s]=dg(s,r,n);else if(r!=null){const o=Jl(r);e[s]=()=>o}}},yd=(i,e)=>{const t=Jl(e);i.slots.default=()=>t},pg=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Qe(e),vo(e,"_",t)):vd(e,i.slots={})}else i.slots={},e&&yd(i,e);vo(i.slots,Xo,1)},mg=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=ct;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(It(s,e),!t&&a===1&&delete s._):(r=!e.$stable,vd(e,s)),o=e}else e&&(yd(i,e),o={default:1});if(r)for(const a in s)!xd(a)&&o[a]==null&&delete s[a]};function ul(i,e,t,n,s=!1){if(He(i)){i.forEach((f,m)=>ul(f,e&&(He(e)?e[m]:e),t,n,s));return}if(po(n)&&!s)return;const r=n.shapeFlag&4?nc(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,Je(h,c)&&(h[c]=null)):xt(c)&&(c.value=null)),We(l))gi(l,a,12,[o,u]);else{const f=At(l),m=xt(l);if(f||m){const g=()=>{if(i.f){const _=f?Je(h,l)?h[l]:u[l]:l.value;s?He(_)&&Ol(_,r):He(_)?_.includes(r)||_.push(r):f?(u[l]=[r],Je(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Je(h,l)&&(h[l]=o)):m&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Wt(g,t)):g()}}}const Wt=Hm;function gg(i){return _g(i)}function _g(i,e){const t=Lf();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=rn,insertStaticContent:g}=i,_=(A,w,U,G=null,q=null,ie=null,M=void 0,x=null,D=!!w.dynamicChildren)=>{if(A===w)return;A&&!js(A,w)&&(G=k(A),xe(A,q,ie,!0),A=null),w.patchFlag===-2&&(D=!1,w.dynamicChildren=null);const{type:B,ref:V,shapeFlag:X}=w;switch(B){case Wo:d(A,w,U,G);break;case _r:p(A,w,U,G);break;case fa:A==null&&S(w,U,G,M);break;case Sn:Z(A,w,U,G,q,ie,M,x,D);break;default:X&1?I(A,w,U,G,q,ie,M,x,D):X&6?ue(A,w,U,G,q,ie,M,x,D):(X&64||X&128)&&B.process(A,w,U,G,q,ie,M,x,D,me)}V!=null&&q&&ul(V,A&&A.ref,ie,w||A,!w)},d=(A,w,U,G)=>{if(A==null)n(w.el=a(w.children),U,G);else{const q=w.el=A.el;w.children!==A.children&&c(q,w.children)}},p=(A,w,U,G)=>{A==null?n(w.el=l(w.children||""),U,G):w.el=A.el},S=(A,w,U,G)=>{[A.el,A.anchor]=g(A.children,w,U,G,A.el,A.anchor)},v=({el:A,anchor:w},U,G)=>{let q;for(;A&&A!==w;)q=f(A),n(A,U,G),A=q;n(w,U,G)},E=({el:A,anchor:w})=>{let U;for(;A&&A!==w;)U=f(A),s(A),A=U;s(w)},I=(A,w,U,G,q,ie,M,x,D)=>{w.type==="svg"?M="svg":w.type==="math"&&(M="mathml"),A==null?R(w,U,G,q,ie,M,x,D):ne(A,w,q,ie,M,x,D)},R=(A,w,U,G,q,ie,M,x)=>{let D,B;const{props:V,shapeFlag:X,transition:ae,dirs:se}=A;if(D=A.el=o(A.type,ie,V&&V.is,V),X&8?u(D,A.children):X&16&&O(A.children,D,null,G,q,ha(A,ie),M,x),se&&Ti(A,null,G,"created"),T(D,A,A.scopeId,M,G),V){for(const ye in V)ye!=="value"&&!ir(ye)&&r(D,ye,null,V[ye],ie,A.children,G,q,ve);"value"in V&&r(D,"value",null,V.value,ie),(B=V.onVnodeBeforeMount)&&yn(B,G,A)}se&&Ti(A,null,G,"beforeMount");const he=xg(q,ae);he&&ae.beforeEnter(D),n(D,w,U),((B=V&&V.onVnodeMounted)||he||se)&&Wt(()=>{B&&yn(B,G,A),he&&ae.enter(D),se&&Ti(A,null,G,"mounted")},q)},T=(A,w,U,G,q)=>{if(U&&m(A,U),G)for(let ie=0;ie<G.length;ie++)m(A,G[ie]);if(q){let ie=q.subTree;if(w===ie){const M=q.vnode;T(A,M,M.scopeId,M.slotScopeIds,q.parent)}}},O=(A,w,U,G,q,ie,M,x,D=0)=>{for(let B=D;B<A.length;B++){const V=A[B]=x?ai(A[B]):En(A[B]);_(null,V,w,U,G,q,ie,M,x)}},ne=(A,w,U,G,q,ie,M)=>{const x=w.el=A.el;let{patchFlag:D,dynamicChildren:B,dirs:V}=w;D|=A.patchFlag&16;const X=A.props||ct,ae=w.props||ct;let se;if(U&&bi(U,!1),(se=ae.onVnodeBeforeUpdate)&&yn(se,U,w,A),V&&Ti(w,A,U,"beforeUpdate"),U&&bi(U,!0),B?y(A.dynamicChildren,B,x,U,G,ha(w,q),ie):M||j(A,w,x,null,U,G,ha(w,q),ie,!1),D>0){if(D&16)L(x,w,X,ae,U,G,q);else if(D&2&&X.class!==ae.class&&r(x,"class",null,ae.class,q),D&4&&r(x,"style",X.style,ae.style,q),D&8){const he=w.dynamicProps;for(let ye=0;ye<he.length;ye++){const be=he[ye],oe=X[be],Ge=ae[be];(Ge!==oe||be==="value")&&r(x,be,oe,Ge,q,A.children,U,G,ve)}}D&1&&A.children!==w.children&&u(x,w.children)}else!M&&B==null&&L(x,w,X,ae,U,G,q);((se=ae.onVnodeUpdated)||V)&&Wt(()=>{se&&yn(se,U,w,A),V&&Ti(w,A,U,"updated")},G)},y=(A,w,U,G,q,ie,M)=>{for(let x=0;x<w.length;x++){const D=A[x],B=w[x],V=D.el&&(D.type===Sn||!js(D,B)||D.shapeFlag&70)?h(D.el):U;_(D,B,V,null,G,q,ie,M,!0)}},L=(A,w,U,G,q,ie,M)=>{if(U!==G){if(U!==ct)for(const x in U)!ir(x)&&!(x in G)&&r(A,x,U[x],null,M,w.children,q,ie,ve);for(const x in G){if(ir(x))continue;const D=G[x],B=U[x];D!==B&&x!=="value"&&r(A,x,B,D,M,w.children,q,ie,ve)}"value"in G&&r(A,"value",U.value,G.value,M)}},Z=(A,w,U,G,q,ie,M,x,D)=>{const B=w.el=A?A.el:a(""),V=w.anchor=A?A.anchor:a("");let{patchFlag:X,dynamicChildren:ae,slotScopeIds:se}=w;se&&(x=x?x.concat(se):se),A==null?(n(B,U,G),n(V,U,G),O(w.children||[],U,V,q,ie,M,x,D)):X>0&&X&64&&ae&&A.dynamicChildren?(y(A.dynamicChildren,ae,U,q,ie,M,x),(w.key!=null||q&&w===q.subTree)&&Md(A,w,!0)):j(A,w,U,V,q,ie,M,x,D)},ue=(A,w,U,G,q,ie,M,x,D)=>{w.slotScopeIds=x,A==null?w.shapeFlag&512?q.ctx.activate(w,U,G,M,D):F(w,U,G,q,ie,M,D):K(A,w,D)},F=(A,w,U,G,q,ie,M)=>{const x=A.component=Cg(A,G,q);if(hd(A)&&(x.ctx.renderer=me),Lg(x),x.asyncDep){if(q&&q.registerDep(x,H),!A.el){const D=x.subTree=an(_r);p(null,D,w,U)}}else H(x,A,w,U,q,ie,M)},K=(A,w,U)=>{const G=w.component=A.component;if(Nm(A,w,U))if(G.asyncDep&&!G.asyncResolved){te(G,w,U);return}else G.next=w,wm(G.update),G.effect.dirty=!0,G.update();else w.el=A.el,G.vnode=w},H=(A,w,U,G,q,ie,M)=>{const x=()=>{if(A.isMounted){let{next:V,bu:X,u:ae,parent:se,vnode:he}=A;{const Fe=Sd(A);if(Fe){V&&(V.el=he.el,te(A,V,M)),Fe.asyncDep.then(()=>{A.isUnmounted||x()});return}}let ye=V,be;bi(A,!1),V?(V.el=he.el,te(A,V,M)):V=he,X&&oa(X),(be=V.props&&V.props.onVnodeBeforeUpdate)&&yn(be,se,V,he),bi(A,!0);const oe=ca(A),Ge=A.subTree;A.subTree=oe,_(Ge,oe,h(Ge.el),k(Ge),A,q,ie),V.el=oe.el,ye===null&&Um(A,oe.el),ae&&Wt(ae,q),(be=V.props&&V.props.onVnodeUpdated)&&Wt(()=>yn(be,se,V,he),q)}else{let V;const{el:X,props:ae}=w,{bm:se,m:he,parent:ye}=A,be=po(w);if(bi(A,!1),se&&oa(se),!be&&(V=ae&&ae.onVnodeBeforeMount)&&yn(V,ye,w),bi(A,!0),X&&z){const oe=()=>{A.subTree=ca(A),z(X,A.subTree,A,q,null)};be?w.type.__asyncLoader().then(()=>!A.isUnmounted&&oe()):oe()}else{const oe=A.subTree=ca(A);_(null,oe,U,G,A,q,ie),w.el=oe.el}if(he&&Wt(he,q),!be&&(V=ae&&ae.onVnodeMounted)){const oe=w;Wt(()=>yn(V,ye,oe),q)}(w.shapeFlag&256||ye&&po(ye.vnode)&&ye.vnode.shapeFlag&256)&&A.a&&Wt(A.a,q),A.isMounted=!0,w=U=G=null}},D=A.effect=new Hl(x,rn,()=>$l(B),A.scope),B=A.update=()=>{D.dirty&&D.run()};B.id=A.uid,bi(A,!0),B()},te=(A,w,U)=>{w.component=A;const G=A.vnode.props;A.vnode=w,A.next=null,fg(A,w.props,G,U),mg(A,w.children,U),Wi(),Bc(A),Xi()},j=(A,w,U,G,q,ie,M,x,D=!1)=>{const B=A&&A.children,V=A?A.shapeFlag:0,X=w.children,{patchFlag:ae,shapeFlag:se}=w;if(ae>0){if(ae&128){ce(B,X,U,G,q,ie,M,x,D);return}else if(ae&256){le(B,X,U,G,q,ie,M,x,D);return}}se&8?(V&16&&ve(B,q,ie),X!==B&&u(U,X)):V&16?se&16?ce(B,X,U,G,q,ie,M,x,D):ve(B,q,ie,!0):(V&8&&u(U,""),se&16&&O(X,U,G,q,ie,M,x,D))},le=(A,w,U,G,q,ie,M,x,D)=>{A=A||xs,w=w||xs;const B=A.length,V=w.length,X=Math.min(B,V);let ae;for(ae=0;ae<X;ae++){const se=w[ae]=D?ai(w[ae]):En(w[ae]);_(A[ae],se,U,null,q,ie,M,x,D)}B>V?ve(A,q,ie,!0,!1,X):O(w,U,G,q,ie,M,x,D,X)},ce=(A,w,U,G,q,ie,M,x,D)=>{let B=0;const V=w.length;let X=A.length-1,ae=V-1;for(;B<=X&&B<=ae;){const se=A[B],he=w[B]=D?ai(w[B]):En(w[B]);if(js(se,he))_(se,he,U,null,q,ie,M,x,D);else break;B++}for(;B<=X&&B<=ae;){const se=A[X],he=w[ae]=D?ai(w[ae]):En(w[ae]);if(js(se,he))_(se,he,U,null,q,ie,M,x,D);else break;X--,ae--}if(B>X){if(B<=ae){const se=ae+1,he=se<V?w[se].el:G;for(;B<=ae;)_(null,w[B]=D?ai(w[B]):En(w[B]),U,he,q,ie,M,x,D),B++}}else if(B>ae)for(;B<=X;)xe(A[B],q,ie,!0),B++;else{const se=B,he=B,ye=new Map;for(B=he;B<=ae;B++){const Ce=w[B]=D?ai(w[B]):En(w[B]);Ce.key!=null&&ye.set(Ce.key,B)}let be,oe=0;const Ge=ae-he+1;let Fe=!1,Ue=0;const we=new Array(Ge);for(B=0;B<Ge;B++)we[B]=0;for(B=se;B<=X;B++){const Ce=A[B];if(oe>=Ge){xe(Ce,q,ie,!0);continue}let P;if(Ce.key!=null)P=ye.get(Ce.key);else for(be=he;be<=ae;be++)if(we[be-he]===0&&js(Ce,w[be])){P=be;break}P===void 0?xe(Ce,q,ie,!0):(we[P-he]=B+1,P>=Ue?Ue=P:Fe=!0,_(Ce,w[P],U,null,q,ie,M,x,D),oe++)}const Te=Fe?vg(we):xs;for(be=Te.length-1,B=Ge-1;B>=0;B--){const Ce=he+B,P=w[Ce],ge=Ce+1<V?w[Ce+1].el:G;we[B]===0?_(null,P,U,ge,q,ie,M,x,D):Fe&&(be<0||B!==Te[be]?de(P,U,ge,2):be--)}}},de=(A,w,U,G,q=null)=>{const{el:ie,type:M,transition:x,children:D,shapeFlag:B}=A;if(B&6){de(A.component.subTree,w,U,G);return}if(B&128){A.suspense.move(w,U,G);return}if(B&64){M.move(A,w,U,me);return}if(M===Sn){n(ie,w,U);for(let X=0;X<D.length;X++)de(D[X],w,U,G);n(A.anchor,w,U);return}if(M===fa){v(A,w,U);return}if(G!==2&&B&1&&x)if(G===0)x.beforeEnter(ie),n(ie,w,U),Wt(()=>x.enter(ie),q);else{const{leave:X,delayLeave:ae,afterLeave:se}=x,he=()=>n(ie,w,U),ye=()=>{X(ie,()=>{he(),se&&se()})};ae?ae(ie,he,ye):ye()}else n(ie,w,U)},xe=(A,w,U,G=!1,q=!1)=>{const{type:ie,props:M,ref:x,children:D,dynamicChildren:B,shapeFlag:V,patchFlag:X,dirs:ae}=A;if(x!=null&&ul(x,null,U,A,!0),V&256){w.ctx.deactivate(A);return}const se=V&1&&ae,he=!po(A);let ye;if(he&&(ye=M&&M.onVnodeBeforeUnmount)&&yn(ye,w,A),V&6)fe(A.component,U,G);else{if(V&128){A.suspense.unmount(U,G);return}se&&Ti(A,null,w,"beforeUnmount"),V&64?A.type.remove(A,w,U,q,me,G):B&&(ie!==Sn||X>0&&X&64)?ve(B,w,U,!1,!0):(ie===Sn&&X&384||!q&&V&16)&&ve(D,w,U),G&&Pe(A)}(he&&(ye=M&&M.onVnodeUnmounted)||se)&&Wt(()=>{ye&&yn(ye,w,A),se&&Ti(A,null,w,"unmounted")},U)},Pe=A=>{const{type:w,el:U,anchor:G,transition:q}=A;if(w===Sn){J(U,G);return}if(w===fa){E(A);return}const ie=()=>{s(U),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:M,delayLeave:x}=q,D=()=>M(U,ie);x?x(A.el,ie,D):D()}else ie()},J=(A,w)=>{let U;for(;A!==w;)U=f(A),s(A),A=U;s(w)},fe=(A,w,U)=>{const{bum:G,scope:q,update:ie,subTree:M,um:x}=A;G&&oa(G),q.stop(),ie&&(ie.active=!1,xe(M,A,w,U)),x&&Wt(x,w),Wt(()=>{A.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},ve=(A,w,U,G=!1,q=!1,ie=0)=>{for(let M=ie;M<A.length;M++)xe(A[M],w,U,G,q)},k=A=>A.shapeFlag&6?k(A.component.subTree):A.shapeFlag&128?A.suspense.next():f(A.anchor||A.el);let re=!1;const ee=(A,w,U)=>{A==null?w._vnode&&xe(w._vnode,null,null,!0):_(w._vnode||null,A,w,null,null,null,U),re||(re=!0,Bc(),nd(),re=!1),w._vnode=A},me={p:_,um:xe,m:de,r:Pe,mt:F,mc:O,pc:j,pbc:y,n:k,o:i};let Se,z;return e&&([Se,z]=e(me)),{render:ee,hydrate:Se,createApp:cg(ee,Se)}}function ha({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function bi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function xg(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Md(i,e,t=!1){const n=i.children,s=e.children;if(He(n)&&He(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ai(s[r]),a.el=o.el),t||Md(o,a)),a.type===Wo&&(a.el=o.el)}}function vg(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Sd(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sd(e)}const yg=i=>i.__isTeleport,Sn=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),fa=Symbol.for("v-stc"),or=[];let dn=null;function Ql(i=!1){or.push(dn=i?null:[])}function Mg(){or.pop(),dn=or[or.length-1]||null}let xr=1;function Kc(i){xr+=i}function Sg(i){return i.dynamicChildren=xr>0?dn||xs:null,Mg(),xr>0&&dn&&dn.push(i),i}function ec(i,e,t,n,s,r){return Sg(Qt(i,e,t,n,s,r,!0))}function hl(i){return i?i.__v_isVNode===!0:!1}function js(i,e){return i.type===e.type&&i.key===e.key}const Xo="__vInternal",Ed=({key:i})=>i??null,go=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?At(i)||xt(i)||We(i)?{i:on,r:i,k:e,f:!!t}:i:null);function Qt(i,e=null,t=null,n=0,s=null,r=i===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Ed(e),ref:e&&go(e),scopeId:Vo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:on};return a?(tc(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),xr>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const an=Eg;function Eg(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Fm)&&(i=_r),hl(i)){const a=ws(i,e,!0);return t&&tc(a,t),xr>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(i)]=a:dn.push(a)),a.patchFlag|=-2,a}if(Ug(i)&&(i=i.__vccOpts),e){e=Tg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=zl(a)),ft(l)&&(Kf(l)&&!He(l)&&(l=It({},l)),e.style=Bl(l))}const o=At(i)?1:zm(i)?128:yg(i)?64:ft(i)?4:We(i)?2:0;return Qt(i,e,t,n,s,o,r,!0)}function Tg(i){return i?Kf(i)||Xo in i?It({},i):i:null}function ws(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?Ag(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Ed(a),ref:e&&e.ref?t&&s?He(s)?s.concat(go(e)):[s,go(e)]:go(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Sn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ws(i.ssContent),ssFallback:i.ssFallback&&ws(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function bg(i=" ",e=0){return an(Wo,null,i,e)}function En(i){return i==null||typeof i=="boolean"?an(_r):He(i)?an(Sn,null,i.slice()):typeof i=="object"?ai(i):an(Wo,null,String(i))}function ai(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ws(i)}function tc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),tc(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Xo in e)?e._ctx=on:s===3&&on&&(on.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:on},t=32):(e=String(e),n&64?(t=16,e=[bg(e)]):t=8);i.children=e,i.shapeFlag|=t}function Ag(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=zl([e.class,n.class]));else if(s==="style")e.style=Bl([e.style,n.style]);else if(No(s)){const r=e[s],o=n[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function yn(i,e,t,n=null){pn(i,e,7,[t,n])}const wg=md();let Rg=0;function Cg(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||wg,r={uid:Rg++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(n,s),emitsOptions:sd(n,s),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:n.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Lm.bind(null,r),i.ce&&i.ce(r),r}let Lt=null,To,fl;{const i=Lf(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};To=e("__VUE_INSTANCE_SETTERS__",t=>Lt=t),fl=e("__VUE_SSR_SETTERS__",t=>jo=t)}const Ar=i=>{const e=Lt;return To(i),i.scope.on(),()=>{i.scope.off(),To(e)}},$c=()=>{Lt&&Lt.scope.off(),To(null)};function Td(i){return i.vnode.shapeFlag&4}let jo=!1;function Lg(i,e=!1){e&&fl(e);const{props:t,children:n}=i.vnode,s=Td(i);hg(i,t,s,e),pg(i,n);const r=s?Pg(i,e):void 0;return e&&fl(!1),r}function Pg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=zo(new Proxy(i.ctx,ng));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Dg(i):null,r=Ar(i);Wi();const o=gi(n,i,0,[i.props,s]);if(Xi(),r(),wf(o)){if(o.then($c,$c),e)return o.then(a=>{Zc(i,a,e)}).catch(a=>{Ho(a,i,0)});i.asyncDep=o}else Zc(i,o,e)}else bd(i,e)}function Zc(i,e,t){We(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ft(e)&&(i.setupState=Qf(e)),bd(i,t)}let Jc;function bd(i,e,t){const n=i.type;if(!i.render){if(!e&&Jc&&!n.render){const s=n.template||Zl(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=It(It({isCustomElement:r,delimiters:a},o),l);n.render=Jc(s,c)}}i.render=n.render||rn}{const s=Ar(i);Wi();try{ig(i)}finally{Xi(),s()}}}function Ig(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Xt(i,"get","$attrs"),e[t]}}))}function Dg(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return Ig(i)},slots:i.slots,emit:i.emit,expose:e}}function nc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Qf(zo(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in rr)return rr[t](i)},has(e,t){return t in e||t in rr}}))}function Ng(i,e=!0){return We(i)?i.displayName||i.name:i.name||e&&i.__name}function Ug(i){return We(i)&&"__vccOpts"in i}const en=(i,e)=>xm(i,e,jo);function Ad(i,e,t){const n=arguments.length;return n===2?ft(e)&&!He(e)?hl(e)?an(i,null,[e]):an(i,e):an(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&hl(t)&&(t=[t]),an(i,e,t))}const Og="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Fg="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,Qc=li&&li.createElement("template"),zg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?li.createElementNS(Fg,i):e==="mathml"?li.createElementNS(Bg,i):li.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>li.createTextNode(i),createComment:i=>li.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>li.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qc.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=Qc.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hg=Symbol("_vtc");function Gg(i,e,t){const n=i[Hg];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const eu=Symbol("_vod"),Vg=Symbol(""),kg=/(^|;)\s*display\s*:/;function Wg(i,e,t){const n=i.style,s=At(t),r=n.display;let o=!1;if(t&&!s){if(e&&!At(e))for(const a in e)t[a]==null&&dl(n,a,"");for(const a in t)a==="display"&&(o=!0),dl(n,a,t[a])}else if(s){if(e!==t){const a=n[Vg];a&&(t+=";"+a),n.cssText=t,o=kg.test(t)}}else e&&i.removeAttribute("style");eu in i&&(i[eu]=o?n.display:"",n.display=r)}const tu=/\s*!important$/;function dl(i,e,t){if(He(t))t.forEach(n=>dl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Xg(i,e);tu.test(t)?i.setProperty(Hs(n),t.replace(tu,""),"important"):i[n]=t}}const nu=["Webkit","Moz","ms"],da={};function Xg(i,e){const t=da[e];if(t)return t;let n=Pn(e);if(n!=="filter"&&n in i)return da[e]=n;n=Fo(n);for(let s=0;s<nu.length;s++){const r=nu[s]+n;if(r in i)return da[e]=r}return e}const iu="http://www.w3.org/1999/xlink";function jg(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(iu,e.slice(6,e.length)):i.setAttributeNS(iu,e,t);else{const r=Kp(e);t==null||r&&!Pf(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function qg(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Pf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function Yg(i,e,t,n){i.addEventListener(e,t,n)}function Kg(i,e,t,n){i.removeEventListener(e,t,n)}const su=Symbol("_vei");function $g(i,e,t,n,s=null){const r=i[su]||(i[su]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Zg(e);if(n){const c=r[e]=e_(n,s);Yg(i,a,c,l)}else o&&(Kg(i,a,o,l),r[e]=void 0)}}const ru=/(?:Once|Passive|Capture)$/;function Zg(i){let e;if(ru.test(i)){e={};let n;for(;n=i.match(ru);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Hs(i.slice(2)),e]}let pa=0;const Jg=Promise.resolve(),Qg=()=>pa||(Jg.then(()=>pa=0),pa=Date.now());function e_(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;pn(t_(n,t.value),e,5,[n])};return t.value=i,t.attached=Qg(),t}function t_(i,e){if(He(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ou=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,n_=(i,e,t,n,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Gg(i,n,c):e==="style"?Wg(i,t,n):No(e)?Ul(e)||$g(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i_(i,e,n,c))?qg(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),jg(i,e,n,c))};function i_(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&ou(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ou(e)&&At(t)?!1:e in i}const s_=It({patchProp:n_},zg);let au;function r_(){return au||(au=gg(s_))}const o_=(...i)=>{const e=r_().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=l_(n);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,a_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function a_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function l_(i){return At(i)?document.querySelector(i):i}var c_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let wd;const qo=i=>wd=i,Rd=Symbol();function pl(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var ar;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(ar||(ar={}));function u_(){const i=Nf(!0),e=i.run(()=>ql({}));let t=[],n=[];const s=zo({install(r){qo(s),s._a=r,r.provide(Rd,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return!this._a&&!c_?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}const Cd=()=>{};function lu(i,e,t,n=Cd){i.push(e);const s=()=>{const r=i.indexOf(e);r>-1&&(i.splice(r,1),n())};return!t&&Uf()&&Zp(s),s}function qi(i,...e){i.slice().forEach(t=>{t(...e)})}const h_=i=>i();function ml(i,e){i instanceof Map&&e instanceof Map&&e.forEach((t,n)=>i.set(n,t)),i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],s=i[t];pl(s)&&pl(n)&&i.hasOwnProperty(t)&&!xt(n)&&!mi(n)?i[t]=ml(s,n):i[t]=n}return i}const f_=Symbol();function d_(i){return!pl(i)||!i.hasOwnProperty(f_)}const{assign:ri}=Object;function p_(i){return!!(xt(i)&&i.effect)}function m_(i,e,t,n){const{state:s,actions:r,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=s?s():{});const u=Sm(t.state.value[i]);return ri(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=zo(en(()=>{qo(t);const m=t._s.get(i);return o[f].call(m,m)})),h),{}))}return l=Ld(i,c,e,t,n,!0),l}function Ld(i,e,t={},n,s,r){let o;const a=ri({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],m;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={}),ql({});let _;function d(O){let ne;c=u=!1,typeof O=="function"?(O(n.state.value[i]),ne={type:ar.patchFunction,storeId:i,events:m}):(ml(n.state.value[i],O),ne={type:ar.patchObject,payload:O,storeId:i,events:m});const y=_=Symbol();Kl().then(()=>{_===y&&(c=!0)}),u=!0,qi(h,ne,n.state.value[i])}const p=r?function(){const{state:ne}=t,y=ne?ne():{};this.$patch(L=>{ri(L,y)})}:Cd;function S(){o.stop(),h=[],f=[],n._s.delete(i)}function v(O,ne){return function(){qo(n);const y=Array.from(arguments),L=[],Z=[];function ue(H){L.push(H)}function F(H){Z.push(H)}qi(f,{args:y,name:O,store:I,after:ue,onError:F});let K;try{K=ne.apply(this&&this.$id===i?this:I,y)}catch(H){throw qi(Z,H),H}return K instanceof Promise?K.then(H=>(qi(L,H),H)).catch(H=>(qi(Z,H),Promise.reject(H))):(qi(L,K),K)}}const E={_p:n,$id:i,$onAction:lu.bind(null,f),$patch:d,$reset:p,$subscribe(O,ne={}){const y=lu(h,O,ne.detached,()=>L()),L=o.run(()=>sr(()=>n.state.value[i],Z=>{(ne.flush==="sync"?u:c)&&O({storeId:i,type:ar.direct,events:m},Z)},ri({},l,ne)));return y},$dispose:S},I=br(E);n._s.set(i,I);const T=(n._a&&n._a.runWithContext||h_)(()=>n._e.run(()=>(o=Nf()).run(e)));for(const O in T){const ne=T[O];if(xt(ne)&&!p_(ne)||mi(ne))r||(g&&d_(ne)&&(xt(ne)?ne.value=g[O]:ml(ne,g[O])),n.state.value[i][O]=ne);else if(typeof ne=="function"){const y=v(O,ne);T[O]=y,a.actions[O]=ne}}return ri(I,T),ri(Qe(I),T),Object.defineProperty(I,"$state",{get:()=>n.state.value[i],set:O=>{d(ne=>{ri(ne,O)})}}),n._p.forEach(O=>{ri(I,o.run(()=>O({store:I,app:n._a,pinia:n,options:a})))}),g&&r&&t.hydrate&&t.hydrate(I.$state,g),c=!0,u=!0,I}function g_(i,e,t){let n,s;const r=typeof e=="function";typeof i=="string"?(n=i,s=r?t:e):(s=i,n=i.id);function o(a,l){const c=ug();return a=a||(c?Ln(Rd,null):null),a&&qo(a),a=wd,a._s.has(n)||(r?Ld(n,e,s,a):m_(n,s,a)),a._s.get(n)}return o.$id=n,o}g_("counter",{state:()=>({count:0}),actions:{increment(){this.count++},decrement(){this.count--}}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="161",Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},__=0,cu=1,x_=2,Pd=1,v_=2,Vn=3,jn=0,Vt=1,An=2,_i=0,Es=1,uu=2,hu=3,fu=4,y_=5,Di=100,M_=101,S_=102,du=103,pu=104,E_=200,T_=201,b_=202,A_=203,gl=204,_l=205,w_=206,R_=207,C_=208,L_=209,P_=210,I_=211,D_=212,N_=213,U_=214,O_=0,F_=1,B_=2,bo=3,z_=4,H_=5,G_=6,V_=7,sc=0,k_=1,W_=2,xi=0,X_=1,j_=2,q_=3,Y_=4,K_=5,$_=6,mu="attached",Z_="detached",Id=300,Rs=301,Cs=302,xl=303,vl=304,Yo=306,Ls=1e3,tn=1001,Ao=1002,Et=1003,yl=1004,ds=1005,Ot=1006,_o=1007,kn=1008,vi=1009,J_=1010,Q_=1011,rc=1012,Dd=1013,fi=1014,wn=1015,vr=1016,Nd=1017,Ud=1018,Bi=1020,e0=1021,nn=1023,t0=1024,n0=1025,zi=1026,Ps=1027,i0=1028,Od=1029,s0=1030,Fd=1031,Bd=1033,ma=33776,ga=33777,_a=33778,xa=33779,gu=35840,_u=35841,xu=35842,vu=35843,zd=36196,yu=37492,Mu=37496,Su=37808,Eu=37809,Tu=37810,bu=37811,Au=37812,wu=37813,Ru=37814,Cu=37815,Lu=37816,Pu=37817,Iu=37818,Du=37819,Nu=37820,Uu=37821,va=36492,Ou=36494,Fu=36495,r0=36283,Bu=36284,zu=36285,Hu=36286,yr=2300,Is=2301,ya=2302,Gu=2400,Vu=2401,ku=2402,o0=2500,a0=0,Hd=1,Ml=2,Gd=3e3,Hi=3001,l0=3200,c0=3201,oc=0,u0=1,sn="",pt="srgb",wt="srgb-linear",ac="display-p3",Ko="display-p3-linear",wo="linear",lt="srgb",Ro="rec709",Co="p3",$i=7680,Wu=519,h0=512,f0=513,d0=514,Vd=515,p0=516,m0=517,g0=518,_0=519,Sl=35044,Xu="300 es",El=1035,Wn=2e3,Lo=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ju=1234567;const lr=Math.PI/180,Ds=180/Math.PI;function mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function x0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function v0(i,e,t){return i!==e?(t-i)/(e-i):0}function cr(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return cr(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function S0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function T0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function b0(i,e){return i+Math.random()*(e-i)}function A0(i){return i*(.5-Math.random())}function w0(i){i!==void 0&&(ju=i);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R0(i){return i*lr}function C0(i){return i*Ds}function Tl(i){return(i&i-1)===0&&i!==0}function L0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Po(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function P0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kd={DEG2RAD:lr,RAD2DEG:Ds,generateUUID:mn,clamp:Ct,euclideanModulo:lc,mapLinear:x0,inverseLerp:v0,lerp:cr,damp:y0,pingpong:M0,smoothstep:S0,smootherstep:E0,randInt:T0,randFloat:b0,randFloatSpread:A0,seededRandom:w0,degToRad:R0,radToDeg:C0,isPowerOfTwo:Tl,ceilPowerOfTwo:L0,floorPowerOfTwo:Po,setQuaternionFromProperEuler:P0,normalize:st,denormalize:fn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=s[0],d=s[3],p=s[6],S=s[1],v=s[4],E=s[7],I=s[2],R=s[5],T=s[8];return r[0]=o*_+a*S+l*I,r[3]=o*d+a*v+l*R,r[6]=o*p+a*E+l*T,r[1]=c*_+u*S+h*I,r[4]=c*d+u*v+h*R,r[7]=c*p+u*E+h*T,r[2]=f*_+m*S+g*I,r[5]=f*d+m*v+g*R,r[8]=f*p+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Ke;function Wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function I0(){const i=Mr("canvas");return i.style.display="block",i}const qu={};function Gi(i){i in qu||(qu[i]=!0,console.warn(i))}const Yu=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[wt]:{transfer:wo,primaries:Ro,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:lt,primaries:Ro,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ko]:{transfer:wo,primaries:Co,toReference:i=>i.applyMatrix3(Ku),fromReference:i=>i.applyMatrix3(Yu)},[ac]:{transfer:lt,primaries:Co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ku),fromReference:i=>i.applyMatrix3(Yu).convertLinearToSRGB()}},D0=new Set([wt,Ko]),nt={enabled:!0,_workingColorSpace:wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!D0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Br[e].toReference,s=Br[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===sn?wo:Br[i].transfer}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class Xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Mr("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N0=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ea(s[o].image)):r.push(Ea(s[o]))}else r=Ea(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;class bt extends ji{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=tn,s=tn,r=Ot,o=kn,a=nn,l=vi,c=bt.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=mn(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hi?pt:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Hi:Gd}set encoding(e){Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?pt:sn}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Id;bt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,I=(p+1)/2,R=(u+f)/4,T=(h+_)/4,O=(g+d)/4;return v>E&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=T/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=O/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=O/r),this.set(n,s,r,t),this}let S=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O0 extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?pt:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends O0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qd extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F0 extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-a;const p=l*f+c*m+u*g+h*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const I=Math.sqrt(v),R=Math.atan2(I,p*S);d=Math.sin(d*R)/I,a=Math.sin(a*R)/I}const E=a*S;if(l=l*d+f*E,c=c*d+m*E,u=u*d+g*E,h=h*d+_*E,d===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new N,$u=new _n;class Yn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Hr.subVectors(this.max,qs),Ji.subVectors(e.a,qs),Qi.subVectors(e.b,qs),es.subVectors(e.c,qs),Zn.subVectors(Qi,Ji),Jn.subVectors(es,Qi),Ai.subVectors(Ji,es);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Ai.z,Ai.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Ai.z,0,-Ai.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Ai.y,Ai.x,0];return!ba(t,Ji,Qi,es,Hr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Ji,Qi,es,Hr))?!1:(Gr.crossVectors(Zn,Jn),t=[Gr.x,Gr.y,Gr.z],ba(t,Ji,Qi,es,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,zr=new Yn,Ji=new N,Qi=new N,es=new N,Zn=new N,Jn=new N,Ai=new N,qs=new N,Hr=new N,Gr=new N,wi=new N;function ba(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const B0=new Yn,Ys=new N,Aa=new N;class In{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Aa)),this.expandByPoint(Ys.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new N,wa=new N,Vr=new N,Qn=new N,Ra=new N,kr=new N,Ca=new N;class wr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wa.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vr),a=Qn.dot(this.direction),l=-Qn.dot(Vr),c=Qn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wa).addScaledVector(Vr,f),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){Ra.subVectors(t,e),kr.subVectors(n,e),Ca.crossVectors(Ra,kr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(kr.crossVectors(Qn,kr));if(l<0)return null;const c=a*this.direction.dot(Ra.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(Ca);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,o,a,l,c,u,h,f,m,g,_,d){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,m,g,_,d)}set(e,t,n,s,r,o,a,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,H0)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ei.crossVectors(n,qt),ei.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ei.crossVectors(n,qt)),ei.normalize(),Wr.crossVectors(qt,ei),s[0]=ei.x,s[4]=Wr.x,s[8]=qt.x,s[1]=ei.y,s[5]=Wr.y,s[9]=qt.y,s[2]=ei.z,s[6]=Wr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],S=n[3],v=n[7],E=n[11],I=n[15],R=s[0],T=s[4],O=s[8],ne=s[12],y=s[1],L=s[5],Z=s[9],ue=s[13],F=s[2],K=s[6],H=s[10],te=s[14],j=s[3],le=s[7],ce=s[11],de=s[15];return r[0]=o*R+a*y+l*F+c*j,r[4]=o*T+a*L+l*K+c*le,r[8]=o*O+a*Z+l*H+c*ce,r[12]=o*ne+a*ue+l*te+c*de,r[1]=u*R+h*y+f*F+m*j,r[5]=u*T+h*L+f*K+m*le,r[9]=u*O+h*Z+f*H+m*ce,r[13]=u*ne+h*ue+f*te+m*de,r[2]=g*R+_*y+d*F+p*j,r[6]=g*T+_*L+d*K+p*le,r[10]=g*O+_*Z+d*H+p*ce,r[14]=g*ne+_*ue+d*te+p*de,r[3]=S*R+v*y+E*F+I*j,r[7]=S*T+v*L+E*K+I*le,r[11]=S*O+v*Z+E*H+I*ce,r[15]=S*ne+v*ue+E*te+I*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],d=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+d*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],d=e[14],p=e[15],S=h*d*c-_*f*c+_*l*m-a*d*m-h*l*p+a*f*p,v=g*f*c-u*d*c-g*l*m+o*d*m+u*l*p-o*f*p,E=u*_*c-g*h*c+g*a*m-o*_*m-u*a*p+o*h*p,I=g*h*l-u*_*l-g*a*f+o*_*f+u*a*d-o*h*d,R=t*S+n*v+s*E+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=S*T,e[1]=(_*f*r-h*d*r-_*s*m+n*d*m+h*s*p-n*f*p)*T,e[2]=(a*d*r-_*l*r+_*s*c-n*d*c-a*s*p+n*l*p)*T,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*m-n*l*m)*T,e[4]=v*T,e[5]=(u*d*r-g*f*r+g*s*m-t*d*m-u*s*p+t*f*p)*T,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*p-t*l*p)*T,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*T,e[8]=E*T,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*p-t*h*p)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*T,e[12]=I*T,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*d+t*h*d)*T,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*d-t*a*d)*T,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,_=o*u,d=o*h,p=a*h,S=l*c,v=l*u,E=l*h,I=n.x,R=n.y,T=n.z;return s[0]=(1-(_+p))*I,s[1]=(m+E)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(f+p))*R,s[6]=(d+S)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(d-S)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const c=1/r,u=1/o,h=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Wn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(a===Wn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,m=(n+s)*u;let g,_;if(a===Wn)g=(o+r)*h,_=-2*h;else if(a===Lo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new N,un=new je,z0=new N(0,0,0),H0=new N(1,1,1),ei=new N,Wr=new N,qt=new N,Zu=new je,Ju=new _n;class $o{constructor(e=0,t=0,n=0,s=$o.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$o.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G0=0;const Qu=new N,ns=new _n,Fn=new je,Xr=new N,Ks=new N,V0=new N,k0=new _n,eh=new N(1,0,0),th=new N(0,1,0),nh=new N(0,0,1),W0={type:"added"},X0={type:"removed"};class ut extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new N,t=new $o,n=new _n,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ke}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ks,Xr,this.up):Fn.lookAt(Xr,Ks,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Fn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ut.DEFAULT_UP=new N(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new N,Bn=new N,La=new N,zn=new N,is=new N,ss=new N,ih=new N,Pa=new N,Ia=new N,Da=new N;class Rn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Bn.subVectors(n,t),La.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Bn),l=hn.dot(La),c=Bn.dot(Bn),u=Bn.dot(La),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Bn.subVectors(e,t),hn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),hn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),Pa.subVectors(e,n);const l=is.dot(Pa),c=ss.dot(Pa);if(l<=0&&c<=0)return t.copy(n);Ia.subVectors(e,s);const u=is.dot(Ia),h=ss.dot(Ia);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);Da.subVectors(e,r);const m=is.dot(Da),g=ss.dot(Da);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ss,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return ih.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(ih,a);const p=1/(d+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=lc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=Kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return nt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ct(Ut.r*255,0,255))*65536+Math.round(Ct(Ut.g*255,0,255))*256+Math.round(Ct(Ut.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=pt){nt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(jr);const n=cr(ti.h,jr.h,t),s=cr(ti.s,jr.s,t),r=cr(ti.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Be;Be.NAMES=Kd;let j0=0;class gn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Es,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,qr=new Ne;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class $d extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zd extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let q0=0;const Zt=new je,Ua=new ut,rs=new N,Yt=new Yn,$s=new Yn,St=new N;class vn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Zd:$d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,$s.min),Yt.expandByPoint(St),St.addVectors(Yt.max,$s.max),Yt.expandByPoint(St)):(Yt.expandByPoint($s.min),Yt.expandByPoint($s.max))}Yt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),St.add(rs)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new N,u[y]=new N;const h=new N,f=new N,m=new N,g=new Ne,_=new Ne,d=new Ne,p=new N,S=new N;function v(y,L,Z){h.fromArray(s,y*3),f.fromArray(s,L*3),m.fromArray(s,Z*3),g.fromArray(o,y*2),_.fromArray(o,L*2),d.fromArray(o,Z*2),f.sub(h),m.sub(h),_.sub(g),d.sub(g);const ue=1/(_.x*d.y-d.x*_.y);isFinite(ue)&&(p.copy(f).multiplyScalar(d.y).addScaledVector(m,-_.y).multiplyScalar(ue),S.copy(m).multiplyScalar(_.x).addScaledVector(f,-d.x).multiplyScalar(ue),c[y].add(p),c[L].add(p),c[Z].add(p),u[y].add(S),u[L].add(S),u[Z].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let y=0,L=E.length;y<L;++y){const Z=E[y],ue=Z.start,F=Z.count;for(let K=ue,H=ue+F;K<H;K+=3)v(n[K+0],n[K+1],n[K+2])}const I=new N,R=new N,T=new N,O=new N;function ne(y){T.fromArray(r,y*3),O.copy(T);const L=c[y];I.copy(L),I.sub(T.multiplyScalar(T.dot(L))).normalize(),R.crossVectors(O,L);const ue=R.dot(u[y])<0?-1:1;l[y*4]=I.x,l[y*4+1]=I.y,l[y*4+2]=I.z,l[y*4+3]=ue}for(let y=0,L=E.length;y<L;++y){const Z=E[y],ue=Z.start,F=Z.count;for(let K=ue,H=ue+F;K<H;K+=3)ne(n[K+0]),ne(n[K+1]),ne(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new je,Ri=new wr,Yr=new In,rh=new N,os=new N,as=new N,ls=new N,Oa=new N,Kr=new N,$r=new Ne,Zr=new Ne,Jr=new Ne,oh=new N,ah=new N,lh=new N,Qr=new N,eo=new N;class Pt extends ut{constructor(e=new vn,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Oa.fromBufferAttribute(h,e),o?Kr.addScaledVector(Oa,u):Kr.addScaledVector(Oa.sub(t),u))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Yr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Yr,rh)===null||Ri.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(sh.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],S=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let E=S,I=v;E<I;E+=3){const R=a.getX(E),T=a.getX(E+1),O=a.getX(E+2);s=to(this,p,e,n,c,u,h,R,T,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const S=a.getX(d),v=a.getX(d+1),E=a.getX(d+2);s=to(this,o,e,n,c,u,h,S,v,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],S=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=S,I=v;E<I;E+=3){const R=E,T=E+1,O=E+2;s=to(this,p,e,n,c,u,h,R,T,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const S=d,v=d+1,E=d+2;s=to(this,o,e,n,c,u,h,S,v,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Y0(i,e,t,n,s,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===jn,a),l===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:i}}function to(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,os),i.getVertexPosition(l,as),i.getVertexPosition(c,ls);const u=Y0(i,e,t,n,os,as,ls,Qr);if(u){s&&($r.fromBufferAttribute(s,a),Zr.fromBufferAttribute(s,l),Jr.fromBufferAttribute(s,c),u.uv=Rn.getInterpolation(Qr,os,as,ls,$r,Zr,Jr,new Ne)),r&&($r.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),u.uv1=Rn.getInterpolation(Qr,os,as,ls,$r,Zr,Jr,new Ne),u.uv2=u.uv1),o&&(oh.fromBufferAttribute(o,a),ah.fromBufferAttribute(o,l),lh.fromBufferAttribute(o,c),u.normal=Rn.getInterpolation(Qr,os,as,ls,oh,ah,lh,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Rn.getNormal(os,as,ls,h.normal),u.face=h}return u}class Rr extends vn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function g(_,d,p,S,v,E,I,R,T,O,ne){const y=E/T,L=I/O,Z=E/2,ue=I/2,F=R/2,K=T+1,H=O+1;let te=0,j=0;const le=new N;for(let ce=0;ce<H;ce++){const de=ce*L-ue;for(let xe=0;xe<K;xe++){const Pe=xe*y-Z;le[_]=Pe*S,le[d]=de*v,le[p]=F,c.push(le.x,le.y,le.z),le[_]=0,le[d]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),h.push(xe/T),h.push(1-ce/O),te+=1}}for(let ce=0;ce<O;ce++)for(let de=0;de<T;de++){const xe=f+de+K*ce,Pe=f+de+K*(ce+1),J=f+(de+1)+K*(ce+1),fe=f+(de+1)+K*ce;l.push(xe,Pe,fe),l.push(Pe,J,fe),j+=6}a.addGroup(m,j,ne),m+=j,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Ns(i[t]);for(const s in n)e[s]=n[s]}return e}function K0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jd(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const $0={clone:Ns,merge:Gt};var Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qd extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new N,ch=new Ne,uh=new Ne;class Tt extends Qd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,ch,uh),t.subVectors(uh,ch)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class Q0 extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tt(cs,us,e,t);s.layers=this.layers,this.add(s);const r=new Tt(cs,us,e,t);r.layers=this.layers,this.add(r);const o=new Tt(cs,us,e,t);o.layers=this.layers,this.add(o);const a=new Tt(cs,us,e,t);a.layers=this.layers,this.add(a);const l=new Tt(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new Tt(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ep extends bt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?pt:sn),this.texture=new ep(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rr(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:_i});r.uniforms.tEquirect.value=t;const o=new Pt(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Ot),new Q0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Fa=new N,tx=new N,nx=new Ke;class ci{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fa.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nx.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new In,no=new N;class cc{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],d=s[11],p=s[12],S=s[13],v=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,d-m,E-p).normalize(),n[1].setComponents(l+r,f+c,d+m,E+p).normalize(),n[2].setComponents(l+o,f+u,d+g,E+S).normalize(),n[3].setComponents(l-o,f-u,d-g,E-S).normalize(),n[4].setComponents(l-a,f-h,d-_,E-v).normalize(),t===Wn)n[5].setComponents(l+a,f+h,d+_,E+v).normalize();else if(t===Lo)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ix(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,d=g.length;_<d;_++){const p=g[_];t?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Zo extends vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const S=p*f-o;for(let v=0;v<c;v++){const E=v*h-r;g.push(E,-S,0),_.push(0,0,1),d.push(v/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,E=S+c*(p+1),I=S+1+c*(p+1),R=S+1+c*p;m.push(v,E,R),m.push(E,I,R)}this.setIndex(m),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_x=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ux=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ty=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,by=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:sx,alphahash_pars_fragment:rx,alphamap_fragment:ox,alphamap_pars_fragment:ax,alphatest_fragment:lx,alphatest_pars_fragment:cx,aomap_fragment:ux,aomap_pars_fragment:hx,batching_pars_vertex:fx,batching_vertex:dx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:_x,bumpmap_pars_fragment:xx,clipping_planes_fragment:vx,clipping_planes_pars_fragment:yx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:Sx,color_fragment:Ex,color_pars_fragment:Tx,color_pars_vertex:bx,color_vertex:Ax,common:wx,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Px,emissivemap_fragment:Ix,emissivemap_pars_fragment:Dx,colorspace_fragment:Nx,colorspace_pars_fragment:Ux,envmap_fragment:Ox,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Bx,envmap_pars_vertex:zx,envmap_physical_pars_fragment:Zx,envmap_vertex:Hx,fog_vertex:Gx,fog_pars_vertex:Vx,fog_fragment:kx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_fragment:jx,lightmap_pars_fragment:qx,lights_lambert_fragment:Yx,lights_lambert_pars_fragment:Kx,lights_pars_begin:$x,lights_toon_fragment:Jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:sv,lights_fragment_maps:rv,lights_fragment_end:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:uv,map_fragment:hv,map_pars_fragment:fv,map_particle_fragment:dv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphcolor_vertex:_v,morphnormal_vertex:xv,morphtarget_pars_vertex:vv,morphtarget_vertex:yv,normal_fragment_begin:Mv,normal_fragment_maps:Sv,normal_pars_fragment:Ev,normal_pars_vertex:Tv,normal_vertex:bv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Lv,opaque_fragment:Pv,packing:Iv,premultiplied_alpha_fragment:Dv,project_vertex:Nv,dithering_fragment:Uv,dithering_pars_fragment:Ov,roughnessmap_fragment:Fv,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:Hv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Vv,skinbase_vertex:kv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:jv,specularmap_fragment:qv,specularmap_pars_fragment:Yv,tonemapping_fragment:Kv,tonemapping_pars_fragment:$v,transmission_fragment:Zv,transmission_pars_fragment:Jv,uv_pars_fragment:Qv,uv_pars_vertex:ey,uv_vertex:ty,worldpos_vertex:ny,background_vert:iy,background_frag:sy,backgroundCube_vert:ry,backgroundCube_frag:oy,cube_vert:ay,cube_frag:ly,depth_vert:cy,depth_frag:uy,distanceRGBA_vert:hy,distanceRGBA_frag:fy,equirect_vert:dy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:xy,meshlambert_vert:vy,meshlambert_frag:yy,meshmatcap_vert:My,meshmatcap_frag:Sy,meshnormal_vert:Ey,meshnormal_frag:Ty,meshphong_vert:by,meshphong_frag:Ay,meshphysical_vert:wy,meshphysical_frag:Ry,meshtoon_vert:Cy,meshtoon_frag:Ly,points_vert:Py,points_frag:Iy,shadow_vert:Dy,shadow_frag:Ny,sprite_vert:Uy,sprite_frag:Oy},Me={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Tn={basic:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Gt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Gt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Gt([Me.points,Me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Gt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Gt([Me.common,Me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Gt([Me.sprite,Me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Gt([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Gt([Me.lights,Me.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tn.physical={uniforms:Gt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const io={r:0,b:0,g:0};function Fy(i,e,t,n,s,r,o){const a=new Be(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(d,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Yo)?(u===void 0&&(u=new Pt(new Rr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ns(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==lt,(h!==v||f!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pt(new Zo(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ns(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,p){d.getRGB(io,Jd(i)),n.buffers.color.setClear(io.r,io.g,io.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(a,l)},render:g}}function By(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(F,K,H,te,j){let le=!1;if(o){const ce=_(te,H,K);c!==ce&&(c=ce,m(c.object)),le=p(F,te,H,j),le&&S(F,te,H,j)}else{const ce=K.wireframe===!0;(c.geometry!==te.id||c.program!==H.id||c.wireframe!==ce)&&(c.geometry=te.id,c.program=H.id,c.wireframe=ce,le=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,O(F,K,H,te),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function _(F,K,H){const te=H.wireframe===!0;let j=a[F.id];j===void 0&&(j={},a[F.id]=j);let le=j[K.id];le===void 0&&(le={},j[K.id]=le);let ce=le[te];return ce===void 0&&(ce=d(f()),le[te]=ce),ce}function d(F){const K=[],H=[],te=[];for(let j=0;j<s;j++)K[j]=0,H[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:H,attributeDivisors:te,object:F,attributes:{},index:null}}function p(F,K,H,te){const j=c.attributes,le=K.attributes;let ce=0;const de=H.getAttributes();for(const xe in de)if(de[xe].location>=0){const J=j[xe];let fe=le[xe];if(fe===void 0&&(xe==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),xe==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;ce++}return c.attributesNum!==ce||c.index!==te}function S(F,K,H,te){const j={},le=K.attributes;let ce=0;const de=H.getAttributes();for(const xe in de)if(de[xe].location>=0){let J=le[xe];J===void 0&&(xe==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),xe==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),j[xe]=fe,ce++}c.attributes=j,c.attributesNum=ce,c.index=te}function v(){const F=c.newAttributes;for(let K=0,H=F.length;K<H;K++)F[K]=0}function E(F){I(F,0)}function I(F,K){const H=c.newAttributes,te=c.enabledAttributes,j=c.attributeDivisors;H[F]=1,te[F]===0&&(i.enableVertexAttribArray(F),te[F]=1),j[F]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,K),j[F]=K)}function R(){const F=c.newAttributes,K=c.enabledAttributes;for(let H=0,te=K.length;H<te;H++)K[H]!==F[H]&&(i.disableVertexAttribArray(H),K[H]=0)}function T(F,K,H,te,j,le,ce){ce===!0?i.vertexAttribIPointer(F,K,H,j,le):i.vertexAttribPointer(F,K,H,te,j,le)}function O(F,K,H,te){if(n.isWebGL2===!1&&(F.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=te.attributes,le=H.getAttributes(),ce=K.defaultAttributeValues;for(const de in le){const xe=le[de];if(xe.location>=0){let Pe=j[de];if(Pe===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(Pe=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(Pe=F.instanceColor)),Pe!==void 0){const J=Pe.normalized,fe=Pe.itemSize,ve=t.get(Pe);if(ve===void 0)continue;const k=ve.buffer,re=ve.type,ee=ve.bytesPerElement,me=n.isWebGL2===!0&&(re===i.INT||re===i.UNSIGNED_INT||Pe.gpuType===Dd);if(Pe.isInterleavedBufferAttribute){const Se=Pe.data,z=Se.stride,A=Pe.offset;if(Se.isInstancedInterleavedBuffer){for(let w=0;w<xe.locationSize;w++)I(xe.location+w,Se.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let w=0;w<xe.locationSize;w++)E(xe.location+w);i.bindBuffer(i.ARRAY_BUFFER,k);for(let w=0;w<xe.locationSize;w++)T(xe.location+w,fe/xe.locationSize,re,J,z*ee,(A+fe/xe.locationSize*w)*ee,me)}else{if(Pe.isInstancedBufferAttribute){for(let Se=0;Se<xe.locationSize;Se++)I(xe.location+Se,Pe.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Se=0;Se<xe.locationSize;Se++)E(xe.location+Se);i.bindBuffer(i.ARRAY_BUFFER,k);for(let Se=0;Se<xe.locationSize;Se++)T(xe.location+Se,fe/xe.locationSize,re,J,fe*ee,fe/xe.locationSize*Se*ee,me)}}else if(ce!==void 0){const J=ce[de];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(xe.location,J);break;case 3:i.vertexAttrib3fv(xe.location,J);break;case 4:i.vertexAttrib4fv(xe.location,J);break;default:i.vertexAttrib1fv(xe.location,J)}}}}R()}function ne(){Z();for(const F in a){const K=a[F];for(const H in K){const te=K[H];for(const j in te)g(te[j].object),delete te[j];delete K[H]}delete a[F]}}function y(F){if(a[F.id]===void 0)return;const K=a[F.id];for(const H in K){const te=K[H];for(const j in te)g(te[j].object),delete te[j];delete K[H]}delete a[F.id]}function L(F){for(const K in a){const H=a[K];if(H[F.id]===void 0)continue;const te=H[F.id];for(const j in te)g(te[j].object),delete te[j];delete H[F.id]}}function Z(){ue(),u=!0,c!==l&&(c=l,m(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:ue,dispose:ne,releaseStatesOfGeometry:y,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function zy(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Hy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),I=v&&E,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:R}}function Gy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ci,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const S=r?0:n,v=S*4;let E=p.clippingState||null;l.value=E,E=u(g,f,v,m);for(let I=0;I!==v;++I)E[I]=t[I];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,E=m;v!==_;++v,E+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function Vy(i){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=Rs:a===vl&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xl||a===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ex(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class uc extends Qd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,hh=[.125,.215,.35,.446,.526,.582],Ni=20,Ba=new uc,fh=new Be;let za=null,Ha=0,Ga=0;const Pi=(1+Math.sqrt(5))/2,hs=1/Pi,dh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Pi,hs),new N(0,Pi,-hs),new N(hs,0,Pi),new N(-hs,0,Pi),new N(Pi,hs,0),new N(-Pi,hs,0)];class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,Ga),e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:vr,format:nn,colorSpace:wt,depthBuffer:!1},s=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(r)),this._blurMaterial=Wy(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,s){const a=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(fh),u.toneMapping=xi,u.autoClear=!1;const m=new Cn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Pt(new Rr,m);let _=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,_=!0):(m.color.copy(fh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;so(s,S*v,p>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;so(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=dh[(s-1)%dh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),_=r/g,d=isFinite(r)?1+Math.floor(u*_):Ni;d>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ni}`);const p=[];let S=0;for(let T=0;T<Ni;++T){const O=T/_,ne=Math.exp(-O*O/2);p.push(ne),T===0?S+=ne:T<d&&(S+=2*ne)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const E=this._sizeLods[s],I=3*E*(s>v-gs?s-v+gs:0),R=4*(this._cubeSize-E);so(t,I,R,3*E,2*E),l.setRenderTarget(t),l.render(h,Ba)}}function ky(i){const e=[],t=[],n=[];let s=i;const r=i-gs+1+hh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gs?l=hh[o-i+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,S=new Float32Array(_*g*m),v=new Float32Array(d*g*m),E=new Float32Array(p*g*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,O=R>2?0:-1,ne=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];S.set(ne,_*g*R),v.set(f,d*g*R);const y=[R,R,R,R,R,R];E.set(y,p*g*R)}const I=new vn;I.setAttribute("position",new kt(S,_)),I.setAttribute("uv",new kt(v,d)),I.setAttribute("faceIndex",new kt(E,p)),e.push(I),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mh(i,e,t){const n=new Vi(i,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wy(i,e,t){const n=new Float32Array(Ni),s=new N(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function gh(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _h(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xl||l===vl,u=l===Rs||l===Cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ph(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new ph(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qy(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)e.remove(_[d])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)e.update(_[d],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,E=S.length;v<E;v+=3){const I=S[v+0],R=S[v+1],T=S[v+2];f.push(I,R,R,T,T,I)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,E=S.length/3-1;v<E;v+=3){const I=v+0,R=v+1,T=v+2;f.push(I,R,R,T,T,I)}}else return;const d=new(Wd(f)?Zd:$d)(f,1);d.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Yy(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function h(m,g,_){if(_===0)return;let d,p;if(s)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,g,a,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{d.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Ky(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $y(i,e){return i[0]-e[0]}function Zy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Jy(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==_){let K=function(){ue.dispose(),r.delete(u),u.removeEventListener("dispose",K)};var m=K;d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let ne=0;v===!0&&(ne=1),E===!0&&(ne=2),I===!0&&(ne=3);let y=u.attributes.position.count*ne,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const Z=new Float32Array(y*L*4*_),ue=new qd(Z,y,L,_);ue.type=wn,ue.needsUpdate=!0;const F=ne*4;for(let H=0;H<_;H++){const te=R[H],j=T[H],le=O[H],ce=y*L*4*H;for(let de=0;de<te.count;de++){const xe=de*F;v===!0&&(o.fromBufferAttribute(te,de),Z[ce+xe+0]=o.x,Z[ce+xe+1]=o.y,Z[ce+xe+2]=o.z,Z[ce+xe+3]=0),E===!0&&(o.fromBufferAttribute(j,de),Z[ce+xe+4]=o.x,Z[ce+xe+5]=o.y,Z[ce+xe+6]=o.z,Z[ce+xe+7]=0),I===!0&&(o.fromBufferAttribute(le,de),Z[ce+xe+8]=o.x,Z[ce+xe+9]=o.y,Z[ce+xe+10]=o.z,Z[ce+xe+11]=le.itemSize===4?o.w:1)}}d={count:_,texture:ue,size:new Ne(y,L)},r.set(u,d),u.addEventListener("dispose",K)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const I=_[E];I[0]=E,I[1]=f[E]}_.sort(Zy);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort($y);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const I=a[E],R=I[0],T=I[1];R!==Number.MAX_SAFE_INTEGER&&T?(d&&u.getAttribute("morphTarget"+E)!==d[R]&&u.setAttribute("morphTarget"+E,d[R]),p&&u.getAttribute("morphNormal"+E)!==p[R]&&u.setAttribute("morphNormal"+E,p[R]),s[E]=T,S+=T):(d&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),p&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Qy(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class np extends bt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:zi,u!==zi&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=fi),n===void 0&&u===Ps&&(n=Bi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ip=new bt,sp=new np(1,1);sp.compareFunction=Vd;const rp=new qd,op=new F0,ap=new ep,xh=[],vh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function Gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jo(i,e){let t=vh[e];t===void 0&&(t=new Int32Array(e),vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function nM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function iM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function sM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),yt(t,n)}}function rM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Mh.set(n),i.uniformMatrix3fv(this.addr,!1,Mh),yt(t,n)}}function oM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),yt(t,n)}}function aM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function cM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function uM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function hM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function dM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function pM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function mM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?sp:ip;t.setTexture2D(e||r,s)}function gM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||op,s)}function _M(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ap,s)}function xM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rp,s)}function vM(i){switch(i){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return sM;case 35675:return rM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return hM;case 36294:return fM;case 36295:return dM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return xM}}function yM(i,e){i.uniform1fv(this.addr,e)}function MM(i,e){const t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function SM(i,e){const t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function EM(i,e){const t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function TM(i,e){const t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bM(i,e){const t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function AM(i,e){const t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wM(i,e){i.uniform1iv(this.addr,e)}function RM(i,e){i.uniform2iv(this.addr,e)}function CM(i,e){i.uniform3iv(this.addr,e)}function LM(i,e){i.uniform4iv(this.addr,e)}function PM(i,e){i.uniform1uiv(this.addr,e)}function IM(i,e){i.uniform2uiv(this.addr,e)}function DM(i,e){i.uniform3uiv(this.addr,e)}function NM(i,e){i.uniform4uiv(this.addr,e)}function UM(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ip,r[o])}function OM(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||op,r[o])}function FM(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ap,r[o])}function BM(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rp,r[o])}function zM(i){switch(i){case 5126:return yM;case 35664:return MM;case 35665:return SM;case 35666:return EM;case 35674:return TM;case 35675:return bM;case 35676:return AM;case 5124:case 35670:return wM;case 35667:case 35671:return RM;case 35668:case 35672:return CM;case 35669:case 35673:return LM;case 5125:return PM;case 36294:return IM;case 36295:return DM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return BM}}class HM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}}class GM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Eh(i,e){i.seq.push(e),i.map[e.id]=e}function kM(i,e,t){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),o=Va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(t,c===void 0?new HM(a,i,e):new GM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new VM(a),Eh(t,h)),t=h}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kM(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Th(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const WM=37297;let XM=0;function jM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qM(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===Co&&t===Ro?n="LinearDisplayP3ToLinearSRGB":e===Ro&&t===Co&&(n="LinearSRGBToLinearDisplayP3"),i){case wt:case Ko:return[n,"LinearTransferOETF"];case pt:case ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jM(i.getShaderSource(e),o)}else return s}function YM(i,e){const t=qM(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function KM(i,e){let t;switch(e){case X_:t="Linear";break;case j_:t="Reinhard";break;case q_:t="OptimizedCineon";break;case Y_:t="ACESFilmic";break;case $_:t="AgX";break;case K_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $M(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function ZM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function JM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function QM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _s(i){return i!==""}function Ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(i){return i.replace(eS,nS)}const tS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nS(i,e){let t=Xe[e];if(t===void 0){const n=tS.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bl(t)}const iS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(iS,sS)}function sS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ch(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function oS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function lS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case W_:e="ENVMAP_BLENDING_ADD";break}return e}function cS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uS(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rS(t),c=oS(t),u=aS(t),h=lS(t),f=cS(t),m=t.isWebGL2?"":$M(t),g=ZM(t),_=JM(r),d=s.createProgram();let p,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_s).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_s).join(`
`),S.length>0&&(S+=`
`)):(p=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),S=[m,Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==xi?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,YM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=bl(o),o=Ah(o,t),o=wh(o,t),a=bl(a),a=Ah(a,t),a=wh(a,t),o=Rh(o),a=Rh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=v+p+o,I=v+S+a,R=Th(s,s.VERTEX_SHADER,E),T=Th(s,s.FRAGMENT_SHADER,I);s.attachShader(d,R),s.attachShader(d,T),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function O(Z){if(i.debug.checkShaderErrors){const ue=s.getProgramInfoLog(d).trim(),F=s.getShaderInfoLog(R).trim(),K=s.getShaderInfoLog(T).trim();let H=!0,te=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,R,T);else{const j=bh(s,R,"vertex"),le=bh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+ue+`
`+j+`
`+le)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(F===""||K==="")&&(te=!1);te&&(Z.diagnostics={runnable:H,programLog:ue,vertexShader:{log:F,prefix:p},fragmentShader:{log:K,prefix:S}})}s.deleteShader(R),s.deleteShader(T),ne=new xo(s,d),y=QM(s,d)}let ne;this.getUniforms=function(){return ne===void 0&&O(this),ne};let y;this.getAttributes=function(){return y===void 0&&O(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(d,WM)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=R,this.fragmentShader=T,this}let hS=0;class fS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dS(e),t.set(e,n)),n}}class dS{constructor(e){this.id=hS++,this.code=e,this.usedTimes=0}}function pS(i,e,t,n,s,r,o){const a=new Yd,l=new fS,c=new Set,u=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,L,Z,ue,F){const K=ue.fog,H=F.geometry,te=y.isMeshStandardMaterial?ue.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||te),le=j&&j.mapping===Yo?j.image.height:null,ce=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=de!==void 0?de.length:0;let Pe=0;H.morphAttributes.position!==void 0&&(Pe=1),H.morphAttributes.normal!==void 0&&(Pe=2),H.morphAttributes.color!==void 0&&(Pe=3);let J,fe,ve,k;if(ce){const $e=Tn[ce];J=$e.vertexShader,fe=$e.fragmentShader}else J=y.vertexShader,fe=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),k=l.getFragmentShaderID(y);const re=i.getRenderTarget(),ee=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,Se=!!y.map,z=!!y.matcap,A=!!j,w=!!y.aoMap,U=!!y.lightMap,G=!!y.bumpMap,q=!!y.normalMap,ie=!!y.displacementMap,M=!!y.emissiveMap,x=!!y.metalnessMap,D=!!y.roughnessMap,B=y.anisotropy>0,V=y.clearcoat>0,X=y.iridescence>0,ae=y.sheen>0,se=y.transmission>0,he=B&&!!y.anisotropyMap,ye=V&&!!y.clearcoatMap,be=V&&!!y.clearcoatNormalMap,oe=V&&!!y.clearcoatRoughnessMap,Ge=X&&!!y.iridescenceMap,Fe=X&&!!y.iridescenceThicknessMap,Ue=ae&&!!y.sheenColorMap,we=ae&&!!y.sheenRoughnessMap,Te=!!y.specularMap,Ce=!!y.specularColorMap,P=!!y.specularIntensityMap,ge=se&&!!y.transmissionMap,Ee=se&&!!y.thicknessMap,Ie=!!y.gradientMap,C=!!y.alphaMap,_e=y.alphaTest>0,pe=!!y.alphaHash,Re=!!y.extensions;let De=xi;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(De=i.toneMapping);const et={isWebGL2:h,shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:fe,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:me,instancing:ee,instancingColor:ee&&F.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:wt,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:z,envMap:A,envMapMode:A&&j.mapping,envMapCubeUVHeight:le,aoMap:w,lightMap:U,bumpMap:G,normalMap:q,displacementMap:m&&ie,emissiveMap:M,normalMapObjectSpace:q&&y.normalMapType===u0,normalMapTangentSpace:q&&y.normalMapType===oc,metalnessMap:x,roughnessMap:D,anisotropy:B,anisotropyMap:he,clearcoat:V,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:oe,iridescence:X,iridescenceMap:Ge,iridescenceThicknessMap:Fe,sheen:ae,sheenColorMap:Ue,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ce,specularIntensityMap:P,transmission:se,transmissionMap:ge,thicknessMap:Ee,gradientMap:Ie,opaque:y.transparent===!1&&y.blending===Es&&y.alphaToCoverage===!1,alphaMap:C,alphaTest:_e,alphaHash:pe,combine:y.combine,mapUv:Se&&d(y.map.channel),aoMapUv:w&&d(y.aoMap.channel),lightMapUv:U&&d(y.lightMap.channel),bumpMapUv:G&&d(y.bumpMap.channel),normalMapUv:q&&d(y.normalMap.channel),displacementMapUv:ie&&d(y.displacementMap.channel),emissiveMapUv:M&&d(y.emissiveMap.channel),metalnessMapUv:x&&d(y.metalnessMap.channel),roughnessMapUv:D&&d(y.roughnessMap.channel),anisotropyMapUv:he&&d(y.anisotropyMap.channel),clearcoatMapUv:ye&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&d(y.sheenRoughnessMap.channel),specularMapUv:Te&&d(y.specularMap.channel),specularColorMapUv:Ce&&d(y.specularColorMap.channel),specularIntensityMapUv:P&&d(y.specularIntensityMap.channel),transmissionMapUv:ge&&d(y.transmissionMap.channel),thicknessMapUv:Ee&&d(y.thicknessMap.channel),alphaMapUv:C&&d(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(q||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Se||C),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===An,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Re&&y.extensions.derivatives===!0,extensionFragDepth:Re&&y.extensions.fragDepth===!0,extensionDrawBuffers:Re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Re&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function S(y){const L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.customVertexShaderID),L.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Z in y.defines)L.push(Z),L.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(v(L,y),E(L,y),L.push(i.outputColorSpace)),L.push(y.customProgramCacheKey),L.join()}function v(y,L){y.push(L.precision),y.push(L.outputColorSpace),y.push(L.envMapMode),y.push(L.envMapCubeUVHeight),y.push(L.mapUv),y.push(L.alphaMapUv),y.push(L.lightMapUv),y.push(L.aoMapUv),y.push(L.bumpMapUv),y.push(L.normalMapUv),y.push(L.displacementMapUv),y.push(L.emissiveMapUv),y.push(L.metalnessMapUv),y.push(L.roughnessMapUv),y.push(L.anisotropyMapUv),y.push(L.clearcoatMapUv),y.push(L.clearcoatNormalMapUv),y.push(L.clearcoatRoughnessMapUv),y.push(L.iridescenceMapUv),y.push(L.iridescenceThicknessMapUv),y.push(L.sheenColorMapUv),y.push(L.sheenRoughnessMapUv),y.push(L.specularMapUv),y.push(L.specularColorMapUv),y.push(L.specularIntensityMapUv),y.push(L.transmissionMapUv),y.push(L.thicknessMapUv),y.push(L.combine),y.push(L.fogExp2),y.push(L.sizeAttenuation),y.push(L.morphTargetsCount),y.push(L.morphAttributeCount),y.push(L.numDirLights),y.push(L.numPointLights),y.push(L.numSpotLights),y.push(L.numSpotLightMaps),y.push(L.numHemiLights),y.push(L.numRectAreaLights),y.push(L.numDirLightShadows),y.push(L.numPointLightShadows),y.push(L.numSpotLightShadows),y.push(L.numSpotLightShadowsWithMaps),y.push(L.numLightProbes),y.push(L.shadowMapType),y.push(L.toneMapping),y.push(L.numClippingPlanes),y.push(L.numClipIntersection),y.push(L.depthPacking)}function E(y,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),y.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.alphaToCoverage&&a.enable(20),y.push(a.mask)}function I(y){const L=_[y.type];let Z;if(L){const ue=Tn[L];Z=$0.clone(ue.uniforms)}else Z=y.uniforms;return Z}function R(y,L){let Z;for(let ue=0,F=u.length;ue<F;ue++){const K=u[ue];if(K.cacheKey===L){Z=K,++Z.usedTimes;break}}return Z===void 0&&(Z=new uS(i,L,y,r),u.push(Z)),Z}function T(y){if(--y.usedTimes===0){const L=u.indexOf(y);u[L]=u[u.length-1],u.pop(),y.destroy()}}function O(y){l.remove(y)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:I,acquireProgram:R,releaseProgram:T,releaseShaderCache:O,programs:u,dispose:ne}}function mS(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function gS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,m,g,_,d){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),e++,p}function a(h,f,m,g,_,d){const p=o(h,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(h,f,m,g,_,d){const p=o(h,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||gS),n.length>1&&n.sort(f||Lh),s.length>1&&s.sort(f||Lh)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function _S(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ph,i.set(n,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Be};break;case"SpotLight":t={position:new N,direction:new N,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function vS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yS=0;function MS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SS(i,e){const t=new xS,n=vS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,o=new je,a=new je;function l(u,h){let f=0,m=0,g=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let _=0,d=0,p=0,S=0,v=0,E=0,I=0,R=0,T=0,O=0,ne=0;u.sort(MS);const y=h===!0?Math.PI:1;for(let Z=0,ue=u.length;Z<ue;Z++){const F=u[Z],K=F.color,H=F.intensity,te=F.distance,j=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=K.r*H*y,m+=K.g*H*y,g+=K.b*H*y;else if(F.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(F.sh.coefficients[le],H);ne++}else if(F.isDirectionalLight){const le=t.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity*y),F.castShadow){const ce=F.shadow,de=n.get(F);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,s.directionalShadow[_]=de,s.directionalShadowMap[_]=j,s.directionalShadowMatrix[_]=F.shadow.matrix,E++}s.directional[_]=le,_++}else if(F.isSpotLight){const le=t.get(F);le.position.setFromMatrixPosition(F.matrixWorld),le.color.copy(K).multiplyScalar(H*y),le.distance=te,le.coneCos=Math.cos(F.angle),le.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),le.decay=F.decay,s.spot[p]=le;const ce=F.shadow;if(F.map&&(s.spotLightMap[T]=F.map,T++,ce.updateMatrices(F),F.castShadow&&O++),s.spotLightMatrix[p]=ce.matrix,F.castShadow){const de=n.get(F);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,s.spotShadow[p]=de,s.spotShadowMap[p]=j,R++}p++}else if(F.isRectAreaLight){const le=t.get(F);le.color.copy(K).multiplyScalar(H),le.halfWidth.set(F.width*.5,0,0),le.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=le,S++}else if(F.isPointLight){const le=t.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity*y),le.distance=F.distance,le.decay=F.decay,F.castShadow){const ce=F.shadow,de=n.get(F);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,de.shadowCameraNear=ce.camera.near,de.shadowCameraFar=ce.camera.far,s.pointShadow[d]=de,s.pointShadowMap[d]=j,s.pointShadowMatrix[d]=F.shadow.matrix,I++}s.point[d]=le,d++}else if(F.isHemisphereLight){const le=t.get(F);le.skyColor.copy(F.color).multiplyScalar(H*y),le.groundColor.copy(F.groundColor).multiplyScalar(H*y),s.hemi[v]=le,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const L=s.hash;(L.directionalLength!==_||L.pointLength!==d||L.spotLength!==p||L.rectAreaLength!==S||L.hemiLength!==v||L.numDirectionalShadows!==E||L.numPointShadows!==I||L.numSpotShadows!==R||L.numSpotMaps!==T||L.numLightProbes!==ne)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=S,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+T-O,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=ne,L.directionalLength=_,L.pointLength=d,L.spotLength=p,L.rectAreaLength=S,L.hemiLength=v,L.numDirectionalShadows=E,L.numPointShadows=I,L.numSpotShadows=R,L.numSpotMaps=T,L.numLightProbes=ne,s.version=yS++)}function c(u,h){let f=0,m=0,g=0,_=0,d=0;const p=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const E=u[S];if(E.isDirectionalLight){const I=s.directional[f];I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),f++}else if(E.isSpotLight){const I=s.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const I=s.rectArea[_];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const I=s.point[m];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){const I=s.hemi[d];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:s}}function Ih(i,e){const t=new SS(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ES(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Ih(i,e),t.set(r,[l])):o>=a.length?(l=new Ih(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class TS extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bS extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RS(i,e,t){let n=new cc;const s=new Ne,r=new Ne,o=new at,a=new TS({depthPacking:c0}),l=new bS,c={},u=t.maxTextureSize,h={[jn]:Vt,[Vt]:jn,[An]:An},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:AS,fragmentShader:wS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let p=this.type;this.render=function(R,T,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const ne=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(_i),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ue=p!==Vn&&this.type===Vn,F=p===Vn&&this.type!==Vn;for(let K=0,H=R.length;K<H;K++){const te=R[K],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const le=j.getFrameExtents();if(s.multiply(le),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,j.mapSize.y=r.y)),j.map===null||ue===!0||F===!0){const de=this.type!==Vn?{minFilter:Et,magFilter:Et}:{};j.map!==null&&j.map.dispose(),j.map=new Vi(s.x,s.y,de),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ce=j.getViewportCount();for(let de=0;de<ce;de++){const xe=j.getViewport(de);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),Z.viewport(o),j.updateMatrices(te,de),n=j.getFrustum(),E(T,O,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===Vn&&S(j,O),j.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(ne,y,L)};function S(R,T){const O=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,O,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,O,m,_,null)}function v(R,T,O,ne){let y=null;const L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=y.uuid,ue=T.uuid;let F=c[Z];F===void 0&&(F={},c[Z]=F);let K=F[ue];K===void 0&&(K=y.clone(),F[ue]=K,T.addEventListener("dispose",I)),y=K}if(y.visible=T.visible,y.wireframe=T.wireframe,ne===Vn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Z=i.properties.get(y);Z.light=O}return y}function E(R,T,O,ne,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const ue=e.update(R),F=R.material;if(Array.isArray(F)){const K=ue.groups;for(let H=0,te=K.length;H<te;H++){const j=K[H],le=F[j.materialIndex];if(le&&le.visible){const ce=v(R,le,ne,y);R.onBeforeShadow(i,R,T,O,ue,ce,j),i.renderBufferDirect(O,null,ue,ce,R,j),R.onAfterShadow(i,R,T,O,ue,ce,j)}}}else if(F.visible){const K=v(R,F,ne,y);R.onBeforeShadow(i,R,T,O,ue,K,null),i.renderBufferDirect(O,null,ue,K,R,null),R.onAfterShadow(i,R,T,O,ue,K,null)}}const Z=R.children;for(let ue=0,F=Z.length;ue<F;ue++)E(Z[ue],T,O,ne,y)}function I(R){R.target.removeEventListener("dispose",I);for(const O in c){const ne=c[O],y=R.target.uuid;y in ne&&(ne[y].dispose(),delete ne[y])}}}function CS(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const _e=new at;let pe=null;const Re=new at(0,0,0,0);return{setMask:function(De){pe!==De&&!C&&(i.colorMask(De,De,De,De),pe=De)},setLocked:function(De){C=De},setClear:function(De,et,$e,ot,Rt){Rt===!0&&(De*=ot,et*=ot,$e*=ot),_e.set(De,et,$e,ot),Re.equals(_e)===!1&&(i.clearColor(De,et,$e,ot),Re.copy(_e))},reset:function(){C=!1,pe=null,Re.set(-1,0,0,0)}}}function r(){let C=!1,_e=null,pe=null,Re=null;return{setTest:function(De){De?ee(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(De){_e!==De&&!C&&(i.depthMask(De),_e=De)},setFunc:function(De){if(pe!==De){switch(De){case O_:i.depthFunc(i.NEVER);break;case F_:i.depthFunc(i.ALWAYS);break;case B_:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case z_:i.depthFunc(i.EQUAL);break;case H_:i.depthFunc(i.GEQUAL);break;case G_:i.depthFunc(i.GREATER);break;case V_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=De}},setLocked:function(De){C=De},setClear:function(De){Re!==De&&(i.clearDepth(De),Re=De)},reset:function(){C=!1,_e=null,pe=null,Re=null}}}function o(){let C=!1,_e=null,pe=null,Re=null,De=null,et=null,$e=null,ot=null,Rt=null;return{setTest:function(tt){C||(tt?ee(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(tt){_e!==tt&&!C&&(i.stencilMask(tt),_e=tt)},setFunc:function(tt,mt,Bt){(pe!==tt||Re!==mt||De!==Bt)&&(i.stencilFunc(tt,mt,Bt),pe=tt,Re=mt,De=Bt)},setOp:function(tt,mt,Bt){(et!==tt||$e!==mt||ot!==Bt)&&(i.stencilOp(tt,mt,Bt),et=tt,$e=mt,ot=Bt)},setLocked:function(tt){C=tt},setClear:function(tt){Rt!==tt&&(i.clearStencil(tt),Rt=tt)},reset:function(){C=!1,_e=null,pe=null,Re=null,De=null,et=null,$e=null,ot=null,Rt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],d=null,p=!1,S=null,v=null,E=null,I=null,R=null,T=null,O=null,ne=new Be(0,0,0),y=0,L=!1,Z=null,ue=null,F=null,K=null,H=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,le=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ce)[1]),j=le>=1):ce.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),j=le>=2);let de=null,xe={};const Pe=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),fe=new at().fromArray(Pe),ve=new at().fromArray(J);function k(C,_e,pe,Re){const De=new Uint8Array(4),et=i.createTexture();i.bindTexture(C,et),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<pe;$e++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(_e,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(_e+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return et}const re={};re[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(i.DEPTH_TEST),l.setFunc(bo),ie(!1),M(cu),ee(i.CULL_FACE),G(_i);function ee(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function me(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Se(C,_e){return m[C]!==_e?(i.bindFramebuffer(C,_e),m[C]=_e,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=_e),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=_e)),!0):!1}function z(C,_e){let pe=_,Re=!1;if(C)if(pe=g.get(_e),pe===void 0&&(pe=[],g.set(_e,pe)),C.isWebGLMultipleRenderTargets){const De=C.texture;if(pe.length!==De.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let et=0,$e=De.length;et<$e;et++)pe[et]=i.COLOR_ATTACHMENT0+et;pe.length=De.length,Re=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,Re=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,Re=!0);Re&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function A(C){return d!==C?(i.useProgram(C),d=C,!0):!1}const w={[Di]:i.FUNC_ADD,[M_]:i.FUNC_SUBTRACT,[S_]:i.FUNC_REVERSE_SUBTRACT};if(n)w[du]=i.MIN,w[pu]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(w[du]=C.MIN_EXT,w[pu]=C.MAX_EXT)}const U={[E_]:i.ZERO,[T_]:i.ONE,[b_]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[P_]:i.SRC_ALPHA_SATURATE,[C_]:i.DST_COLOR,[w_]:i.DST_ALPHA,[A_]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[L_]:i.ONE_MINUS_DST_COLOR,[R_]:i.ONE_MINUS_DST_ALPHA,[I_]:i.CONSTANT_COLOR,[D_]:i.ONE_MINUS_CONSTANT_COLOR,[N_]:i.CONSTANT_ALPHA,[U_]:i.ONE_MINUS_CONSTANT_ALPHA};function G(C,_e,pe,Re,De,et,$e,ot,Rt,tt){if(C===_i){p===!0&&(me(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),C!==y_){if(C!==S||tt!==L){if((v!==Di||R!==Di)&&(i.blendEquation(i.FUNC_ADD),v=Di,R=Di),tt)switch(C){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,I=null,T=null,O=null,ne.set(0,0,0),y=0,S=C,L=tt}return}De=De||_e,et=et||pe,$e=$e||Re,(_e!==v||De!==R)&&(i.blendEquationSeparate(w[_e],w[De]),v=_e,R=De),(pe!==E||Re!==I||et!==T||$e!==O)&&(i.blendFuncSeparate(U[pe],U[Re],U[et],U[$e]),E=pe,I=Re,T=et,O=$e),(ot.equals(ne)===!1||Rt!==y)&&(i.blendColor(ot.r,ot.g,ot.b,Rt),ne.copy(ot),y=Rt),S=C,L=!1}function q(C,_e){C.side===An?me(i.CULL_FACE):ee(i.CULL_FACE);let pe=C.side===Vt;_e&&(pe=!pe),ie(pe),C.blending===Es&&C.transparent===!1?G(_i):G(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Re=C.stencilWrite;c.setTest(Re),Re&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),D(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(C){Z!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Z=C)}function M(C){C!==__?(ee(i.CULL_FACE),C!==ue&&(C===cu?i.cullFace(i.BACK):C===x_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),ue=C}function x(C){C!==F&&(j&&i.lineWidth(C),F=C)}function D(C,_e,pe){C?(ee(i.POLYGON_OFFSET_FILL),(K!==_e||H!==pe)&&(i.polygonOffset(_e,pe),K=_e,H=pe)):me(i.POLYGON_OFFSET_FILL)}function B(C){C?ee(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function V(C){C===void 0&&(C=i.TEXTURE0+te-1),de!==C&&(i.activeTexture(C),de=C)}function X(C,_e,pe){pe===void 0&&(de===null?pe=i.TEXTURE0+te-1:pe=de);let Re=xe[pe];Re===void 0&&(Re={type:void 0,texture:void 0},xe[pe]=Re),(Re.type!==C||Re.texture!==_e)&&(de!==pe&&(i.activeTexture(pe),de=pe),i.bindTexture(C,_e||re[C]),Re.type=C,Re.texture=_e)}function ae(){const C=xe[de];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(C){fe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),fe.copy(C))}function P(C){ve.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function ge(C,_e){let pe=h.get(_e);pe===void 0&&(pe=new WeakMap,h.set(_e,pe));let Re=pe.get(C);Re===void 0&&(Re=i.getUniformBlockIndex(_e,C.name),pe.set(C,Re))}function Ee(C,_e){const Re=h.get(_e).get(C);u.get(_e)!==Re&&(i.uniformBlockBinding(_e,Re,C.__bindingPointIndex),u.set(_e,Re))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},de=null,xe={},m={},g=new WeakMap,_=[],d=null,p=!1,S=null,v=null,E=null,I=null,R=null,T=null,O=null,ne=new Be(0,0,0),y=0,L=!1,Z=null,ue=null,F=null,K=null,H=null,fe.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ee,disable:me,bindFramebuffer:Se,drawBuffers:z,useProgram:A,setBlending:G,setMaterial:q,setFlipSided:ie,setCullFace:M,setLineWidth:x,setPolygonOffset:D,setScissorTest:B,activeTexture:V,bindTexture:X,unbindTexture:ae,compressedTexImage2D:se,compressedTexImage3D:he,texImage2D:we,texImage3D:Te,updateUBOMapping:ge,uniformBlockBinding:Ee,texStorage2D:Fe,texStorage3D:Ue,texSubImage2D:ye,texSubImage3D:be,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ge,scissor:Ce,viewport:P,reset:Ie}}function LS(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return m?new OffscreenCanvas(M,x):Mr("canvas")}function _(M,x,D,B){let V=1;if((M.width>B||M.height>B)&&(V=B/Math.max(M.width,M.height)),V<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const X=x?Po:Math.floor,ae=X(V*M.width),se=X(V*M.height);h===void 0&&(h=g(ae,se));const he=D?g(ae,se):h;return he.width=ae,he.height=se,he.getContext("2d").drawImage(M,0,0,ae,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ae+"x"+se+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function d(M){return Tl(M.width)&&Tl(M.height)}function p(M){return a?!1:M.wrapS!==tn||M.wrapT!==tn||M.minFilter!==Et&&M.minFilter!==Ot}function S(M,x){return M.generateMipmaps&&x&&M.minFilter!==Et&&M.minFilter!==Ot}function v(M){i.generateMipmap(M)}function E(M,x,D,B,V=!1){if(a===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=x;if(x===i.RED&&(D===i.FLOAT&&(X=i.R32F),D===i.HALF_FLOAT&&(X=i.R16F),D===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(X=i.R8UI),D===i.UNSIGNED_SHORT&&(X=i.R16UI),D===i.UNSIGNED_INT&&(X=i.R32UI),D===i.BYTE&&(X=i.R8I),D===i.SHORT&&(X=i.R16I),D===i.INT&&(X=i.R32I)),x===i.RG&&(D===i.FLOAT&&(X=i.RG32F),D===i.HALF_FLOAT&&(X=i.RG16F),D===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RGBA){const ae=V?wo:nt.getTransfer(B);D===i.FLOAT&&(X=i.RGBA32F),D===i.HALF_FLOAT&&(X=i.RGBA16F),D===i.UNSIGNED_BYTE&&(X=ae===lt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function I(M,x,D){return S(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Et&&M.minFilter!==Ot?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){return M===Et||M===yl||M===ds?i.NEAREST:i.LINEAR}function T(M){const x=M.target;x.removeEventListener("dispose",T),ne(x),x.isVideoTexture&&u.delete(x)}function O(M){const x=M.target;x.removeEventListener("dispose",O),L(x)}function ne(M){const x=n.get(M);if(x.__webglInit===void 0)return;const D=M.source,B=f.get(D);if(B){const V=B[x.__cacheKey];V.usedTimes--,V.usedTimes===0&&y(M),Object.keys(B).length===0&&f.delete(D)}n.remove(M)}function y(M){const x=n.get(M);i.deleteTexture(x.__webglTexture);const D=M.source,B=f.get(D);delete B[x.__cacheKey],o.memory.textures--}function L(M){const x=M.texture,D=n.get(M),B=n.get(x);if(B.__webglTexture!==void 0&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(D.__webglFramebuffer[V]))for(let X=0;X<D.__webglFramebuffer[V].length;X++)i.deleteFramebuffer(D.__webglFramebuffer[V][X]);else i.deleteFramebuffer(D.__webglFramebuffer[V]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[V])}else{if(Array.isArray(D.__webglFramebuffer))for(let V=0;V<D.__webglFramebuffer.length;V++)i.deleteFramebuffer(D.__webglFramebuffer[V]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let V=0;V<D.__webglColorRenderbuffer.length;V++)D.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[V]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let V=0,X=x.length;V<X;V++){const ae=n.get(x[V]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(x[V])}n.remove(x),n.remove(M)}let Z=0;function ue(){Z=0}function F(){const M=Z;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),Z+=1,M}function K(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function H(M,x){const D=n.get(M);if(M.isVideoTexture&&q(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(D,M,x);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function te(M,x){const D=n.get(M);if(M.version>0&&D.__version!==M.version){fe(D,M,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function j(M,x){const D=n.get(M);if(M.version>0&&D.__version!==M.version){fe(D,M,x);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function le(M,x){const D=n.get(M);if(M.version>0&&D.__version!==M.version){ve(D,M,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}const ce={[Ls]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},de={[Et]:i.NEAREST,[yl]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},xe={[h0]:i.NEVER,[_0]:i.ALWAYS,[f0]:i.LESS,[Vd]:i.LEQUAL,[d0]:i.EQUAL,[g0]:i.GEQUAL,[p0]:i.GREATER,[m0]:i.NOTEQUAL};function Pe(M,x,D){if(x.type===wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ot||x.magFilter===_o||x.magFilter===ds||x.magFilter===kn||x.minFilter===Ot||x.minFilter===_o||x.minFilter===ds||x.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D?(i.texParameteri(M,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ce[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,de[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,de[x.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==tn||x.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Et&&x.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Et||x.minFilter!==ds&&x.minFilter!==kn||x.type===wn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===vr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function J(M,x){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",T));const B=x.source;let V=f.get(B);V===void 0&&(V={},f.set(B,V));const X=K(x);if(X!==M.__cacheKey){V[X]===void 0&&(V[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),V[X].usedTimes++;const ae=V[M.__cacheKey];ae!==void 0&&(V[M.__cacheKey].usedTimes--,ae.usedTimes===0&&y(x)),M.__cacheKey=X,M.__webglTexture=V[X].texture}return D}function fe(M,x,D){let B=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=i.TEXTURE_3D);const V=J(M,x),X=x.source;t.bindTexture(B,M.__webglTexture,i.TEXTURE0+D);const ae=n.get(X);if(X.version!==ae.__version||V===!0){t.activeTexture(i.TEXTURE0+D);const se=nt.getPrimaries(nt.workingColorSpace),he=x.colorSpace===sn?null:nt.getPrimaries(x.colorSpace),ye=x.colorSpace===sn||se===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const be=p(x)&&d(x.image)===!1;let oe=_(x.image,be,!1,s.maxTextureSize);oe=ie(x,oe);const Ge=d(oe)||a,Fe=r.convert(x.format,x.colorSpace);let Ue=r.convert(x.type),we=E(x.internalFormat,Fe,Ue,x.colorSpace,x.isVideoTexture);Pe(B,x,Ge);let Te;const Ce=x.mipmaps,P=a&&x.isVideoTexture!==!0&&we!==zd,ge=ae.__version===void 0||V===!0,Ee=X.dataReady,Ie=I(x,oe,Ge);if(x.isDepthTexture)we=i.DEPTH_COMPONENT,a?x.type===wn?we=i.DEPTH_COMPONENT32F:x.type===fi?we=i.DEPTH_COMPONENT24:x.type===Bi?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:x.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===zi&&we===i.DEPTH_COMPONENT&&x.type!==rc&&x.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=fi,Ue=r.convert(x.type)),x.format===Ps&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,x.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Bi,Ue=r.convert(x.type))),ge&&(P?t.texStorage2D(i.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,Fe,Ue,null));else if(x.isDataTexture)if(Ce.length>0&&Ge){P&&ge&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ce[0].width,Ce[0].height);for(let C=0,_e=Ce.length;C<_e;C++)Te=Ce[C],P?Ee&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,Te.width,Te.height,Fe,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,C,we,Te.width,Te.height,0,Fe,Ue,Te.data);x.generateMipmaps=!1}else P?(ge&&t.texStorage2D(i.TEXTURE_2D,Ie,we,oe.width,oe.height),Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Fe,Ue,oe.data)):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,Fe,Ue,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,we,Ce[0].width,Ce[0].height,oe.depth);for(let C=0,_e=Ce.length;C<_e;C++)Te=Ce[C],x.format!==nn?Fe!==null?P?Ee&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,Te.width,Te.height,oe.depth,Fe,Te.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,we,Te.width,Te.height,oe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,Te.width,Te.height,oe.depth,Fe,Ue,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,C,we,Te.width,Te.height,oe.depth,0,Fe,Ue,Te.data)}else{P&&ge&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ce[0].width,Ce[0].height);for(let C=0,_e=Ce.length;C<_e;C++)Te=Ce[C],x.format!==nn?Fe!==null?P?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,Te.width,Te.height,Fe,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,C,we,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Ee&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,Te.width,Te.height,Fe,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,C,we,Te.width,Te.height,0,Fe,Ue,Te.data)}else if(x.isDataArrayTexture)P?(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,we,oe.width,oe.height,oe.depth),Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Fe,Ue,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,Fe,Ue,oe.data);else if(x.isData3DTexture)P?(ge&&t.texStorage3D(i.TEXTURE_3D,Ie,we,oe.width,oe.height,oe.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Fe,Ue,oe.data)):t.texImage3D(i.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,Fe,Ue,oe.data);else if(x.isFramebufferTexture){if(ge)if(P)t.texStorage2D(i.TEXTURE_2D,Ie,we,oe.width,oe.height);else{let C=oe.width,_e=oe.height;for(let pe=0;pe<Ie;pe++)t.texImage2D(i.TEXTURE_2D,pe,we,C,_e,0,Fe,Ue,null),C>>=1,_e>>=1}}else if(Ce.length>0&&Ge){P&&ge&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ce[0].width,Ce[0].height);for(let C=0,_e=Ce.length;C<_e;C++)Te=Ce[C],P?Ee&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,Fe,Ue,Te):t.texImage2D(i.TEXTURE_2D,C,we,Fe,Ue,Te);x.generateMipmaps=!1}else P?(ge&&t.texStorage2D(i.TEXTURE_2D,Ie,we,oe.width,oe.height),Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Ue,oe)):t.texImage2D(i.TEXTURE_2D,0,we,Fe,Ue,oe);S(x,Ge)&&v(B),ae.__version=X.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ve(M,x,D){if(x.image.length!==6)return;const B=J(M,x),V=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const X=n.get(V);if(V.version!==X.__version||B===!0){t.activeTexture(i.TEXTURE0+D);const ae=nt.getPrimaries(nt.workingColorSpace),se=x.colorSpace===sn?null:nt.getPrimaries(x.colorSpace),he=x.colorSpace===sn||ae===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,be=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let C=0;C<6;C++)!ye&&!be?oe[C]=_(x.image[C],!1,!0,s.maxCubemapSize):oe[C]=be?x.image[C].image:x.image[C],oe[C]=ie(x,oe[C]);const Ge=oe[0],Fe=d(Ge)||a,Ue=r.convert(x.format,x.colorSpace),we=r.convert(x.type),Te=E(x.internalFormat,Ue,we,x.colorSpace),Ce=a&&x.isVideoTexture!==!0,P=X.__version===void 0||B===!0,ge=V.dataReady;let Ee=I(x,Ge,Fe);Pe(i.TEXTURE_CUBE_MAP,x,Fe);let Ie;if(ye){Ce&&P&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Te,Ge.width,Ge.height);for(let C=0;C<6;C++){Ie=oe[C].mipmaps;for(let _e=0;_e<Ie.length;_e++){const pe=Ie[_e];x.format!==nn?Ue!==null?Ce?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e,0,0,pe.width,pe.height,Ue,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e,Te,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e,0,0,pe.width,pe.height,Ue,we,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e,Te,pe.width,pe.height,0,Ue,we,pe.data)}}}else{Ie=x.mipmaps,Ce&&P&&(Ie.length>0&&Ee++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Te,oe[0].width,oe[0].height));for(let C=0;C<6;C++)if(be){Ce?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,oe[C].width,oe[C].height,Ue,we,oe[C].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Te,oe[C].width,oe[C].height,0,Ue,we,oe[C].data);for(let _e=0;_e<Ie.length;_e++){const Re=Ie[_e].image[C].image;Ce?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e+1,0,0,Re.width,Re.height,Ue,we,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e+1,Te,Re.width,Re.height,0,Ue,we,Re.data)}}else{Ce?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Ue,we,oe[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Te,Ue,we,oe[C]);for(let _e=0;_e<Ie.length;_e++){const pe=Ie[_e];Ce?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e+1,0,0,Ue,we,pe.image[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,_e+1,Te,Ue,we,pe.image[C])}}}S(x,Fe)&&v(i.TEXTURE_CUBE_MAP),X.__version=V.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function k(M,x,D,B,V,X){const ae=r.convert(D.format,D.colorSpace),se=r.convert(D.type),he=E(D.internalFormat,ae,se,D.colorSpace);if(!n.get(x).__hasExternalTextures){const be=Math.max(1,x.width>>X),oe=Math.max(1,x.height>>X);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,X,he,be,oe,x.depth,0,ae,se,null):t.texImage2D(V,X,he,be,oe,0,ae,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),G(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,V,n.get(D).__webglTexture,0,U(x)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,V,n.get(D).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(M,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let B=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(D||G(x)){const V=x.depthTexture;V&&V.isDepthTexture&&(V.type===wn?B=i.DEPTH_COMPONENT32F:V.type===fi&&(B=i.DEPTH_COMPONENT24));const X=U(x);G(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,B,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,X,B,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const B=U(x);D&&G(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,x.width,x.height):G(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let V=0;V<B.length;V++){const X=B[V],ae=r.convert(X.format,X.colorSpace),se=r.convert(X.type),he=E(X.internalFormat,ae,se,X.colorSpace),ye=U(x);D&&G(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,he,x.width,x.height):G(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const B=n.get(x.depthTexture).__webglTexture,V=U(x);if(x.depthTexture.format===zi)G(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(x.depthTexture.format===Ps)G(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function me(M){const x=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ee(x.__webglFramebuffer,M)}else if(D){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=i.createRenderbuffer(),re(x.__webglDepthbuffer[B],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),re(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(M,x,D){const B=n.get(M);x!==void 0&&k(B.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&me(M)}function z(M){const x=M.texture,D=n.get(M),B=n.get(x);M.addEventListener("dispose",O),M.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,o.memory.textures++);const V=M.isWebGLCubeRenderTarget===!0,X=M.isWebGLMultipleRenderTargets===!0,ae=d(M)||a;if(V){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let he=0;he<x.mipmaps.length;he++)D.__webglFramebuffer[se][he]=i.createFramebuffer()}else D.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)D.__webglFramebuffer[se]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(X)if(s.drawBuffers){const se=M.texture;for(let he=0,ye=se.length;he<ye;he++){const be=n.get(se[he]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&G(M)===!1){const se=X?x:[x];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const ye=se[he];D.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[he]);const be=r.convert(ye.format,ye.colorSpace),oe=r.convert(ye.type),Ge=E(ye.internalFormat,be,oe,ye.colorSpace,M.isXRRenderTarget===!0),Fe=U(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,D.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),re(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,x,ae);for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)k(D.__webglFramebuffer[se][he],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else k(D.__webglFramebuffer[se],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);S(x,ae)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const se=M.texture;for(let he=0,ye=se.length;he<ye;he++){const be=se[he],oe=n.get(be);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Pe(i.TEXTURE_2D,be,ae),k(D.__webglFramebuffer,M,be,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),S(be,ae)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?se=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,B.__webglTexture),Pe(se,x,ae),a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)k(D.__webglFramebuffer[he],M,x,i.COLOR_ATTACHMENT0,se,he);else k(D.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,se,0);S(x,ae)&&v(se),t.unbindTexture()}M.depthBuffer&&me(M)}function A(M){const x=d(M)||a,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let B=0,V=D.length;B<V;B++){const X=D[B];if(S(X,x)){const ae=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(X).__webglTexture;t.bindTexture(ae,se),v(ae),t.unbindTexture()}}}function w(M){if(a&&M.samples>0&&G(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,B=M.height;let V=i.COLOR_BUFFER_BIT;const X=[],ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){X.push(i.COLOR_ATTACHMENT0+ye),M.depthBuffer&&X.push(ae);const be=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(be===!1&&(M.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ye]),be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ae])),he){const oe=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,D,B,0,0,D,B,V,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,se.__webglColorRenderbuffer[ye]);const be=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function U(M){return Math.min(s.maxSamples,M.samples)}function G(M){const x=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function q(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function ie(M,x){const D=M.colorSpace,B=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===El||D!==wt&&D!==sn&&(nt.getTransfer(D)===lt?a===!1?e.has("EXT_sRGB")===!0&&B===nn?(M.format=El,M.minFilter=Ot,M.generateMipmaps=!1):x=Xd.sRGBToLinear(x):(B!==nn||V!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=F,this.resetTextureUnits=ue,this.setTexture2D=H,this.setTexture2DArray=te,this.setTexture3D=j,this.setTextureCube=le,this.rebindTextures=Se,this.setupRenderTarget=z,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=k,this.useMultisampledRTT=G}function PS(i,e,t){const n=t.isWebGL2;function s(r,o=sn){let a;const l=nt.getTransfer(o);if(r===vi)return i.UNSIGNED_BYTE;if(r===Nd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ud)return i.UNSIGNED_SHORT_5_5_5_1;if(r===J_)return i.BYTE;if(r===Q_)return i.SHORT;if(r===rc)return i.UNSIGNED_SHORT;if(r===Dd)return i.INT;if(r===fi)return i.UNSIGNED_INT;if(r===wn)return i.FLOAT;if(r===vr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===e0)return i.ALPHA;if(r===nn)return i.RGBA;if(r===t0)return i.LUMINANCE;if(r===n0)return i.LUMINANCE_ALPHA;if(r===zi)return i.DEPTH_COMPONENT;if(r===Ps)return i.DEPTH_STENCIL;if(r===El)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===i0)return i.RED;if(r===Od)return i.RED_INTEGER;if(r===s0)return i.RG;if(r===Fd)return i.RG_INTEGER;if(r===Bd)return i.RGBA_INTEGER;if(r===ma||r===ga||r===_a||r===xa)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gu||r===_u||r===xu||r===vu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yu||r===Mu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yu)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Mu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Su||r===Eu||r===Tu||r===bu||r===Au||r===wu||r===Ru||r===Cu||r===Lu||r===Pu||r===Iu||r===Du||r===Nu||r===Uu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Su)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Au)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ru)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Iu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Du)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uu)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===va||r===Ou||r===Fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===va)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ou)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===r0||r===Bu||r===zu||r===Hu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===va)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class IS extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ui extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,n),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Mi({extensions:{fragDepth:!0},vertexShader:NS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pt(new Zo(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class FS extends ji{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new OS,d=t.getContextAttributes();let p=null,S=null;const v=[],E=[],I=new Ne;let R=null;const T=new Tt;T.layers.enable(1),T.viewport=new at;const O=new Tt;O.layers.enable(2),O.viewport=new at;const ne=[T,O],y=new IS;y.layers.enable(1),y.layers.enable(2);let L=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=v[J];return fe===void 0&&(fe=new ka,v[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=v[J];return fe===void 0&&(fe=new ka,v[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=v[J];return fe===void 0&&(fe=new ka,v[J]=fe),fe.getHandSpace()};function ue(J){const fe=E.indexOf(J.inputSource);if(fe===-1)return;const ve=v[fe];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",K);for(let J=0;J<v.length;J++){const fe=E[J];fe!==null&&(E[J]=null,v[J].disconnect(fe))}L=null,Z=null,_.reset(),e.setRenderTarget(p),m=null,f=null,h=null,s=null,S=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",F),s.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Vi(m.framebufferWidth,m.framebufferHeight,{format:nn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let fe=null,ve=null,k=null;d.depth&&(k=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=d.stencil?Ps:zi,ve=d.stencil?Bi:fi);const re={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Vi(f.textureWidth,f.textureHeight,{format:nn,type:vi,depthTexture:new np(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const ee=e.properties.get(S);ee.__ignoreDepthValues=f.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K(J){for(let fe=0;fe<J.removed.length;fe++){const ve=J.removed[fe],k=E.indexOf(ve);k>=0&&(E[k]=null,v[k].disconnect(ve))}for(let fe=0;fe<J.added.length;fe++){const ve=J.added[fe];let k=E.indexOf(ve);if(k===-1){for(let ee=0;ee<v.length;ee++)if(ee>=E.length){E.push(ve),k=ee;break}else if(E[ee]===null){E[ee]=ve,k=ee;break}if(k===-1)break}const re=v[k];re&&re.connect(ve)}}const H=new N,te=new N;function j(J,fe,ve){H.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(ve.matrixWorld);const k=H.distanceTo(te),re=fe.projectionMatrix.elements,ee=ve.projectionMatrix.elements,me=re[14]/(re[10]-1),Se=re[14]/(re[10]+1),z=(re[9]+1)/re[5],A=(re[9]-1)/re[5],w=(re[8]-1)/re[0],U=(ee[8]+1)/ee[0],G=me*w,q=me*U,ie=k/(-w+U),M=ie*-w;fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(M),J.translateZ(ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const x=me+ie,D=Se+ie,B=G-M,V=q+(k-M),X=z*Se/D*x,ae=A*Se/D*x;J.projectionMatrix.makePerspective(B,V,X,ae,x,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function le(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),y.near=O.near=T.near=J.near,y.far=O.far=T.far=J.far,(L!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,Z=y.far,T.near=L,T.far=Z,O.near=L,O.far=Z,T.updateProjectionMatrix(),O.updateProjectionMatrix(),J.updateProjectionMatrix());const fe=J.parent,ve=y.cameras;le(y,fe);for(let k=0;k<ve.length;k++)le(ve[k],fe);ve.length===2?j(y,T,O):y.projectionMatrix.copy(T.projectionMatrix),ce(J,y,fe)};function ce(J,fe,ve){ve===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null};let de=null;function xe(J,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let k=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,k=!0);for(let ee=0;ee<ve.length;ee++){const me=ve[ee];let Se=null;if(m!==null)Se=m.getViewport(me);else{const A=h.getViewSubImage(f,me);Se=A.viewport,ee===0&&(e.setRenderTargetTextures(S,A.colorTexture,f.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(S))}let z=ne[ee];z===void 0&&(z=new Tt,z.layers.enable(ee),z.viewport=new at,ne[ee]=z),z.matrix.fromArray(me.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(me.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Se.x,Se.y,Se.width,Se.height),ee===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),k===!0&&y.cameras.push(z)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){const ee=h.getDepthInformation(ve[0]);ee&&ee.isValid&&ee.texture&&_.init(e,ee,s.renderState)}}for(let ve=0;ve<v.length;ve++){const k=E[ve],re=v[ve];k!==null&&re!==void 0&&re.update(k,fe,c||o)}_.render(e,y),de&&de(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Pe=new tp;Pe.setAnimationLoop(xe),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}}function BS(i,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Jd(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,S,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),h(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,E)):p.isMeshMatcapMaterial?(r(d,p),g(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,S,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Vt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Vt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(d.envMap.value=S,d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,S,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*S,d.scale.value=v*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,S){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const S=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zS(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const E=v.program;n.uniformBlockBinding(S,E)}function c(S,v){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",d));const I=v.program;n.updateUBOMapping(S,I);const R=e.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function u(S){const v=h();S.__bindingPointIndex=v;const E=i.createBuffer(),I=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=s[S.id],E=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,T=E.length;R<T;R++){const O=Array.isArray(E[R])?E[R]:[E[R]];for(let ne=0,y=O.length;ne<y;ne++){const L=O[ne];if(m(L,R,ne,I)===!0){const Z=L.__offset,ue=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let K=0;K<ue.length;K++){const H=ue[K],te=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,Z+F,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,F),F+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,E,I){const R=S.value,T=v+"_"+E;if(I[T]===void 0)return typeof R=="number"||typeof R=="boolean"?I[T]=R:I[T]=R.clone(),!0;{const O=I[T];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return I[T]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(S){const v=S.uniforms;let E=0;const I=16;for(let T=0,O=v.length;T<O;T++){const ne=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,L=ne.length;y<L;y++){const Z=ne[y],ue=Array.isArray(Z.value)?Z.value:[Z.value];for(let F=0,K=ue.length;F<K;F++){const H=ue[F],te=_(H),j=E%I;j!==0&&I-j<te.boundary&&(E+=I-j),Z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=te.storage}}}const R=E%I;return R>0&&(E+=I-R),S.__size=E,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){const v=S.target;v.removeEventListener("dispose",d);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Io{constructor(e={}){const{canvas:t=I0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const v=this;let E=!1,I=0,R=0,T=null,O=-1,ne=null;const y=new at,L=new at;let Z=null;const ue=new Be(0);let F=0,K=t.width,H=t.height,te=1,j=null,le=null;const ce=new at(0,0,K,H),de=new at(0,0,K,H);let xe=!1;const Pe=new cc;let J=!1,fe=!1,ve=null;const k=new je,re=new Ne,ee=new N,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return T===null?te:1}let z=n;function A(b,W){for(let $=0;$<b.length;$++){const Q=b[$],Y=t.getContext(Q,W);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),z=A(W,b),z===null)throw A(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let w,U,G,q,ie,M,x,D,B,V,X,ae,se,he,ye,be,oe,Ge,Fe,Ue,we,Te,Ce,P;function ge(){w=new jy(z),U=new Hy(z,w,e),w.init(U),Te=new PS(z,w,U),G=new CS(z,w,U),q=new Ky(z),ie=new mS,M=new LS(z,w,G,ie,U,Te,q),x=new Vy(v),D=new Xy(v),B=new ix(z,U),Ce=new By(z,w,B,U),V=new qy(z,B,q,Ce),X=new Qy(z,V,B,q),Fe=new Jy(z,U,M),be=new Gy(ie),ae=new pS(v,x,D,w,U,Ce,be),se=new BS(v,ie),he=new _S,ye=new ES(w,U),Ge=new Fy(v,x,D,G,X,f,l),oe=new RS(v,X,U),P=new zS(z,q,U,G),Ue=new zy(z,w,q,U),we=new Yy(z,w,q,U),q.programs=ae.programs,v.capabilities=U,v.extensions=w,v.properties=ie,v.renderLists=he,v.shadowMap=oe,v.state=G,v.info=q}ge();const Ee=new FS(v,z);this.xr=Ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=w.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=w.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(K,H,!1))},this.getSize=function(b){return b.set(K,H)},this.setSize=function(b,W,$=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,H=W,t.width=Math.floor(b*te),t.height=Math.floor(W*te),$===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(K*te,H*te).floor()},this.setDrawingBufferSize=function(b,W,$){K=b,H=W,te=$,t.width=Math.floor(b*$),t.height=Math.floor(W*$),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,W,$,Q){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,W,$,Q),G.viewport(y.copy(ce).multiplyScalar(te).floor())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,W,$,Q){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,W,$,Q),G.scissor(L.copy(de).multiplyScalar(te).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(b){G.setScissorTest(xe=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(b=!0,W=!0,$=!0){let Q=0;if(b){let Y=!1;if(T!==null){const Ae=T.texture.format;Y=Ae===Bd||Ae===Fd||Ae===Od}if(Y){const Ae=T.texture.type,Le=Ae===vi||Ae===fi||Ae===rc||Ae===Bi||Ae===Nd||Ae===Ud,Oe=Ge.getClearColor(),ze=Ge.getClearAlpha(),qe=Oe.r,Ve=Oe.g,ke=Oe.b;Le?(m[0]=qe,m[1]=Ve,m[2]=ke,m[3]=ze,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=qe,g[1]=Ve,g[2]=ke,g[3]=ze,z.clearBufferiv(z.COLOR,0,g))}else Q|=z.COLOR_BUFFER_BIT}W&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),he.dispose(),ye.dispose(),ie.dispose(),x.dispose(),D.dispose(),X.dispose(),Ce.dispose(),P.dispose(),ae.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Rt),Ee.removeEventListener("sessionend",tt),ve&&(ve.dispose(),ve=null),mt.stop()};function Ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=q.autoReset,W=oe.enabled,$=oe.autoUpdate,Q=oe.needsUpdate,Y=oe.type;ge(),q.autoReset=b,oe.enabled=W,oe.autoUpdate=$,oe.needsUpdate=Q,oe.type=Y}function _e(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const W=b.target;W.removeEventListener("dispose",pe),Re(W)}function Re(b){De(b),ie.remove(b)}function De(b){const W=ie.get(b).programs;W!==void 0&&(W.forEach(function($){ae.releaseProgram($)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,$,Q,Y,Ae){W===null&&(W=me);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=Np(b,W,$,Q,Y);G.setMaterial(Q,Le);let ze=$.index,qe=1;if(Q.wireframe===!0){if(ze=V.getWireframeAttribute($),ze===void 0)return;qe=2}const Ve=$.drawRange,ke=$.attributes.position;let gt=Ve.start*qe,jt=(Ve.start+Ve.count)*qe;Ae!==null&&(gt=Math.max(gt,Ae.start*qe),jt=Math.min(jt,(Ae.start+Ae.count)*qe)),ze!==null?(gt=Math.max(gt,0),jt=Math.min(jt,ze.count)):ke!=null&&(gt=Math.max(gt,0),jt=Math.min(jt,ke.count));const Mt=jt-gt;if(Mt<0||Mt===1/0)return;Ce.setup(Y,Q,Oe,$,ze);let Nn,ht=Ue;if(ze!==null&&(Nn=B.get(ze),ht=we,ht.setIndex(Nn)),Y.isMesh)Q.wireframe===!0?(G.setLineWidth(Q.wireframeLinewidth*Se()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(Y.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),G.setLineWidth(Ye*Se()),Y.isLineSegments?ht.setMode(z.LINES):Y.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else Y.isPoints?ht.setMode(z.POINTS):Y.isSprite&&ht.setMode(z.TRIANGLES);if(Y.isBatchedMesh)ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ht.renderInstances(gt,Mt,Y.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ta=Math.min($.instanceCount,Ye);ht.renderInstances(gt,Mt,ta)}else ht.render(gt,Mt)};function et(b,W,$){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,Pr(b,W,$),b.side=jn,b.needsUpdate=!0,Pr(b,W,$),b.side=An):Pr(b,W,$)}this.compile=function(b,W,$=null){$===null&&($=b),d=ye.get($),d.init(),S.push(d),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),b!==$&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(v._useLegacyLights);const Q=new Set;return b.traverse(function(Y){const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const Oe=Ae[Le];et(Oe,$,Y),Q.add(Oe)}else et(Ae,$,Y),Q.add(Ae)}),S.pop(),d=null,Q},this.compileAsync=function(b,W,$=null){const Q=this.compile(b,W,$);return new Promise(Y=>{function Ae(){if(Q.forEach(function(Le){ie.get(Le).currentProgram.isReady()&&Q.delete(Le)}),Q.size===0){Y(b);return}setTimeout(Ae,10)}w.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let $e=null;function ot(b){$e&&$e(b)}function Rt(){mt.stop()}function tt(){mt.start()}const mt=new tp;mt.setAnimationLoop(ot),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(b){$e=b,Ee.setAnimationLoop(b),b===null?mt.stop():mt.start()},Ee.addEventListener("sessionstart",Rt),Ee.addEventListener("sessionend",tt),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(W),W=Ee.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,W,T),d=ye.get(b,S.length),d.init(),S.push(d),k.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Pe.setFromProjectionMatrix(k),fe=this.localClippingEnabled,J=be.init(this.clippingPlanes,fe),_=he.get(b,p.length),_.init(),p.push(_),Bt(b,W,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,le),this.info.render.frame++,J===!0&&be.beginShadows();const $=d.state.shadowsArray;if(oe.render($,b,W),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1)&&Ge.render(_,b),d.setupLights(v._useLegacyLights),W.isArrayCamera){const Q=W.cameras;for(let Y=0,Ae=Q.length;Y<Ae;Y++){const Le=Q[Y];Tc(_,b,Le,Le.viewport)}}else Tc(_,b,W);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,W),Ce.resetDefaultState(),O=-1,ne=null,S.pop(),S.length>0?d=S[S.length-1]:d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Bt(b,W,$,Q){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pe.intersectsSprite(b)){Q&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const Le=X.update(b),Oe=b.material;Oe.visible&&_.push(b,Le,Oe,$,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pe.intersectsObject(b))){const Le=X.update(b),Oe=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ee.copy(Le.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(k)),Array.isArray(Oe)){const ze=Le.groups;for(let qe=0,Ve=ze.length;qe<Ve;qe++){const ke=ze[qe],gt=Oe[ke.materialIndex];gt&&gt.visible&&_.push(b,Le,gt,$,ee.z,ke)}}else Oe.visible&&_.push(b,Le,Oe,$,ee.z,null)}}const Ae=b.children;for(let Le=0,Oe=Ae.length;Le<Oe;Le++)Bt(Ae[Le],W,$,Q)}function Tc(b,W,$,Q){const Y=b.opaque,Ae=b.transmissive,Le=b.transparent;d.setupLightsView($),J===!0&&be.setGlobalState(v.clippingPlanes,$),Ae.length>0&&Dp(Y,Ae,W,$),Q&&G.viewport(y.copy(Q)),Y.length>0&&Lr(Y,W,$),Ae.length>0&&Lr(Ae,W,$),Le.length>0&&Lr(Le,W,$),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Dp(b,W,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Ae=U.isWebGL2;ve===null&&(ve=new Vi(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")?vr:vi,minFilter:kn,samples:Ae?4:0})),v.getDrawingBufferSize(re),Ae?ve.setSize(re.x,re.y):ve.setSize(Po(re.x),Po(re.y));const Le=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(ue),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=xi,Lr(b,$,Q),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let ze=!1;for(let qe=0,Ve=W.length;qe<Ve;qe++){const ke=W[qe],gt=ke.object,jt=ke.geometry,Mt=ke.material,Nn=ke.group;if(Mt.side===An&&gt.layers.test(Q.layers)){const ht=Mt.side;Mt.side=Vt,Mt.needsUpdate=!0,bc(gt,$,Q,jt,Mt,Nn),Mt.side=ht,Mt.needsUpdate=!0,ze=!0}}ze===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),v.setRenderTarget(Le),v.setClearColor(ue,F),v.toneMapping=Oe}function Lr(b,W,$){const Q=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ae=b.length;Y<Ae;Y++){const Le=b[Y],Oe=Le.object,ze=Le.geometry,qe=Q===null?Le.material:Q,Ve=Le.group;Oe.layers.test($.layers)&&bc(Oe,W,$,ze,qe,Ve)}}function bc(b,W,$,Q,Y,Ae){b.onBeforeRender(v,W,$,Q,Y,Ae),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(v,W,$,Q,b,Ae),Y.transparent===!0&&Y.side===An&&Y.forceSinglePass===!1?(Y.side=Vt,Y.needsUpdate=!0,v.renderBufferDirect($,W,Q,Y,b,Ae),Y.side=jn,Y.needsUpdate=!0,v.renderBufferDirect($,W,Q,Y,b,Ae),Y.side=An):v.renderBufferDirect($,W,Q,Y,b,Ae),b.onAfterRender(v,W,$,Q,Y,Ae)}function Pr(b,W,$){W.isScene!==!0&&(W=me);const Q=ie.get(b),Y=d.state.lights,Ae=d.state.shadowsArray,Le=Y.state.version,Oe=ae.getParameters(b,Y.state,Ae,W,$),ze=ae.getProgramCacheKey(Oe);let qe=Q.programs;Q.environment=b.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(b.isMeshStandardMaterial?D:x).get(b.envMap||Q.environment),qe===void 0&&(b.addEventListener("dispose",pe),qe=new Map,Q.programs=qe);let Ve=qe.get(ze);if(Ve!==void 0){if(Q.currentProgram===Ve&&Q.lightsStateVersion===Le)return wc(b,Oe),Ve}else Oe.uniforms=ae.getUniforms(b),b.onBuild($,Oe,v),b.onBeforeCompile(Oe,v),Ve=ae.acquireProgram(Oe,ze),qe.set(ze,Ve),Q.uniforms=Oe.uniforms;const ke=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=be.uniform),wc(b,Oe),Q.needsLights=Op(b),Q.lightsStateVersion=Le,Q.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Ve,Q.uniformsList=null,Ve}function Ac(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=xo.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function wc(b,W){const $=ie.get(b);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Np(b,W,$,Q,Y){W.isScene!==!0&&(W=me),M.resetTextureUnits();const Ae=W.fog,Le=Q.isMeshStandardMaterial?W.environment:null,Oe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wt,ze=(Q.isMeshStandardMaterial?D:x).get(Q.envMap||Le),qe=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!$.morphAttributes.position,gt=!!$.morphAttributes.normal,jt=!!$.morphAttributes.color;let Mt=xi;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const Nn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=Nn!==void 0?Nn.length:0,Ye=ie.get(Q),ta=d.state.lights;if(J===!0&&(fe===!0||b!==ne)){const $t=b===ne&&Q.id===O;be.setState(Q,b,$t)}let dt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ta.state.version||Ye.outputColorSpace!==Oe||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Ye.envMap!==ze||Q.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ve||Ye.morphTargets!==ke||Ye.morphNormals!==gt||Ye.morphColors!==jt||Ye.toneMapping!==Mt||U.isWebGL2===!0&&Ye.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ye.__version=Q.version);let Si=Ye.currentProgram;dt===!0&&(Si=Pr(Q,W,Y));let Rc=!1,Xs=!1,na=!1;const Dt=Si.getUniforms(),Ei=Ye.uniforms;if(G.useProgram(Si.program)&&(Rc=!0,Xs=!0,na=!0),Q.id!==O&&(O=Q.id,Xs=!0),Rc||ne!==b){Dt.setValue(z,"projectionMatrix",b.projectionMatrix),Dt.setValue(z,"viewMatrix",b.matrixWorldInverse);const $t=Dt.map.cameraPosition;$t!==void 0&&$t.setValue(z,ee.setFromMatrixPosition(b.matrixWorld)),U.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,Xs=!0,na=!0)}if(Y.isSkinnedMesh){Dt.setOptional(z,Y,"bindMatrix"),Dt.setOptional(z,Y,"bindMatrixInverse");const $t=Y.skeleton;$t&&(U.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Dt.setValue(z,"boneTexture",$t.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Dt.setOptional(z,Y,"batchingTexture"),Dt.setValue(z,"batchingTexture",Y._matricesTexture,M));const ia=$.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&U.isWebGL2===!0)&&Fe.update(Y,$,Si),(Xs||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Dt.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ei.envMap.value=ze,Ei.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Xs&&(Dt.setValue(z,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Up(Ei,na),Ae&&Q.fog===!0&&se.refreshFogUniforms(Ei,Ae),se.refreshMaterialUniforms(Ei,Q,te,H,ve),xo.upload(z,Ac(Ye),Ei,M)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xo.upload(z,Ac(Ye),Ei,M),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(z,"center",Y.center),Dt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(z,"normalMatrix",Y.normalMatrix),Dt.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const $t=Q.uniformsGroups;for(let sa=0,Fp=$t.length;sa<Fp;sa++)if(U.isWebGL2){const Cc=$t[sa];P.update(Cc,Si),P.bind(Cc,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function Up(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Op(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,W,$){ie.get(b.texture).__webglTexture=W,ie.get(b.depthTexture).__webglTexture=$;const Q=ie.get(b);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,W){const $=ie.get(b);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,$=0){T=b,I=W,R=$;let Q=!0,Y=null,Ae=!1,Le=!1;if(b){const ze=ie.get(b);ze.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1):ze.__webglFramebuffer===void 0?M.setupRenderTarget(b):ze.__hasExternalTextures&&M.rebindTextures(b,ie.get(b.texture).__webglTexture,ie.get(b.depthTexture).__webglTexture);const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ve=ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[W])?Y=Ve[W][$]:Y=Ve[W],Ae=!0):U.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?Y=ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[$]:Y=Ve,y.copy(b.viewport),L.copy(b.scissor),Z=b.scissorTest}else y.copy(ce).multiplyScalar(te).floor(),L.copy(de).multiplyScalar(te).floor(),Z=xe;if(G.bindFramebuffer(z.FRAMEBUFFER,Y)&&U.drawBuffers&&Q&&G.drawBuffers(b,Y),G.viewport(y),G.scissor(L),G.setScissorTest(Z),Ae){const ze=ie.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,$)}else if(Le){const ze=ie.get(b.texture),qe=W||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.__webglTexture,$||0,qe)}O=-1},this.readRenderTargetPixels=function(b,W,$,Q,Y,Ae,Le){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){G.bindFramebuffer(z.FRAMEBUFFER,Oe);try{const ze=b.texture,qe=ze.format,Ve=ze.type;if(qe!==nn&&Te.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ve===vr&&(w.has("EXT_color_buffer_half_float")||U.isWebGL2&&w.has("EXT_color_buffer_float"));if(Ve!==vi&&Te.convert(Ve)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===wn&&(U.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-Q&&$>=0&&$<=b.height-Y&&z.readPixels(W,$,Q,Y,Te.convert(qe),Te.convert(Ve),Ae)}finally{const ze=T!==null?ie.get(T).__webglFramebuffer:null;G.bindFramebuffer(z.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(b,W,$=0){const Q=Math.pow(2,-$),Y=Math.floor(W.image.width*Q),Ae=Math.floor(W.image.height*Q);M.setTexture2D(W,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,b.x,b.y,Y,Ae),G.unbindTexture()},this.copyTextureToTexture=function(b,W,$,Q=0){const Y=W.image.width,Ae=W.image.height,Le=Te.convert($.format),Oe=Te.convert($.type);M.setTexture2D($,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Q,b.x,b.y,Y,Ae,Le,Oe,W.image.data):W.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Q,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Le,W.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Q,b.x,b.y,Le,Oe,W.image),Q===0&&$.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(b,W,$,Q,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=b.max.x-b.min.x+1,Le=b.max.y-b.min.y+1,Oe=b.max.z-b.min.z+1,ze=Te.convert(Q.format),qe=Te.convert(Q.type);let Ve;if(Q.isData3DTexture)M.setTexture3D(Q,0),Ve=z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)M.setTexture2DArray(Q,0),Ve=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);const ke=z.getParameter(z.UNPACK_ROW_LENGTH),gt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),jt=z.getParameter(z.UNPACK_SKIP_PIXELS),Mt=z.getParameter(z.UNPACK_SKIP_ROWS),Nn=z.getParameter(z.UNPACK_SKIP_IMAGES),ht=$.isCompressedTexture?$.mipmaps[Y]:$.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ht.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?z.texSubImage3D(Ve,Y,W.x,W.y,W.z,Ae,Le,Oe,ze,qe,ht.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ve,Y,W.x,W.y,W.z,Ae,Le,Oe,ze,ht.data)):z.texSubImage3D(Ve,Y,W.x,W.y,W.z,Ae,Le,Oe,ze,qe,ht),z.pixelStorei(z.UNPACK_ROW_LENGTH,ke),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Nn),Y===0&&Q.generateMipmaps&&z.generateMipmap(Ve),G.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),G.unbindTexture()},this.resetState=function(){I=0,R=0,T=null,G.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ac?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ko?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Hi:Gd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?pt:wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class HS extends Io{}HS.prototype.isWebGL1Renderer=!0;class ur extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class GS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new N;class fc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dh=new N,Nh=new at,Uh=new at,VS=new N,Oh=new je,ro=new N,Wa=new In,Fh=new je,Xa=new wr;class kS extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ro),this.boundingBox.expandByPoint(ro)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ro),this.boundingSphere.expandByPoint(ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(s),e.ray.intersectsSphere(Wa)!==!1&&(Fh.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(Fh),!(this.boundingBox!==null&&Xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Z_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Nh.fromBufferAttribute(s.attributes.skinIndex,e),Uh.fromBufferAttribute(s.attributes.skinWeight,e),Dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Uh.getComponent(r);if(o!==0){const a=Nh.getComponent(r);Oh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(VS.copy(Dh).applyMatrix4(Oh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lp extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class WS extends bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Et,u=Et,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bh=new je,XS=new je;class dc{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:XS;Bh.multiplyMatrices(a,t[r]),Bh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new WS(t,e,e,nn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new lp),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Al extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new je,zh=new je,oo=[],Hh=new Yn,jS=new je,Zs=new Pt,Js=new In;class qS extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Hh.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Js.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),zh.multiplyMatrices(n,fs),Zs.matrixWorld=zh,Zs.raycast(e,oo);for(let o=0,a=oo.length;o<a;o++){const l=oo[o];l.instanceId=r,l.object=this,t.push(l)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class cp extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gh=new N,Vh=new N,kh=new je,ja=new wr,ao=new In;class pc extends ut{constructor(e=new vn,t=new cp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gh.fromBufferAttribute(t,s-1),Vh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gh.distanceTo(Vh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;kh.copy(s).invert(),ja.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,h=new N,f=new N,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=p,E=S-1;v<E;v+=m){const I=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(d,I),u.fromBufferAttribute(d,R),ja.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let v=p,E=S-1;v<E;v+=m){if(c.fromBufferAttribute(d,v),u.fromBufferAttribute(d,v+1),ja.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Wh=new N,Xh=new N;class YS extends pc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wh.distanceTo(Xh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KS extends pc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class up extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jh=new je,wl=new wr,lo=new In,co=new N;class $S extends ut{constructor(e=new vn,t=new up){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;jh.copy(s).invert(),wl.copy(e.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const d=c.getX(g);co.fromBufferAttribute(h,d),qh(co,d,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)co.fromBufferAttribute(h,g),qh(co,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qh(i,e,t,n,s,r,o){const a=wl.distanceSqToPoint(i);if(a<t){const l=new N;wl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Sr extends vn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const R=I/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),d.push(R+E,1-v),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const v=u[p][S+1],E=u[p][S],I=u[p+1][S],R=u[p+1][S+1];(p!==0||o>0)&&m.push(v,E,R),(p!==n-1||l<Math.PI)&&m.push(E,I,R)}this.setIndex(m),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mc extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends mc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ZS extends gn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function uo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function JS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function QS(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function hp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Cr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eE extends Cr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gu,endingEnd:Gu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vu:r=e,a=2*t-n;break;case ku:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vu:o=e,l=2*n-t;break;case ku:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,d=_*g,p=-f*d+2*f*_-f*g,S=(1+f)*d+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-m)*d+(1.5+m)*_+.5*g,E=m*d-m*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+S*o[c+I]+v*o[l+I]+E*o[h+I];return r}}class tE extends Cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class nE extends Cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&JS(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,m=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Is;class Vs extends Dn{}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=yr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class fp extends Dn{}fp.prototype.ValueTypeName="color";class Us extends Dn{}Us.prototype.ValueTypeName="number";class iE extends Cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ki extends Dn{InterpolantFactoryMethodLinear(e){return new iE(this.times,this.values,this.getValueSize(),e)}}ki.prototype.ValueTypeName="quaternion";ki.prototype.DefaultInterpolation=Is;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Dn{}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=yr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Dn{}Os.prototype.ValueTypeName="vector";class sE{constructor(e,t=-1,n,s=o0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(oE(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=QS(l);l=Yh(l,1,u),c=Yh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,g,_){if(m.length!==0){const d=[],p=[];hp(m,d,p,g),d.length!==0&&_.push(new h(f,d,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)m[f[g].morphTargets[_]]=-1;for(const _ in m){const d=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const v=f[g];d.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new Us(".morphTargetInfluence["+_+"]",d,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n(Os,m+".position",f,"pos",s),n(ki,m+".quaternion",f,"rot",s),n(Os,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Os;case"color":return fp;case"quaternion":return ki;case"bool":case"boolean":return Vs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function oE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rE(i.type);if(i.times===void 0){const t=[],n=[];hp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class aE{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const lE=new aE;class Ws{constructor(e){this.manager=e!==void 0?e:lE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class cE extends Error{constructor(e,t){super(e),this.response=t}}class dp extends Ws{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let _=0;const d=new ReadableStream({start(p){S();function S(){h.read().then(({done:v,value:E})=>{if(v)p.close();else{_+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let R=0,T=u.length;R<T;R++){const O=u[R];O.onProgress&&O.onProgress(I)}p.enqueue(E),S()}})}}});return new Response(d)}else throw new cE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{di.add(e,c);const u=Hn[e];delete Hn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uE extends Ws{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Mr("img");function l(){u(),di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class pp extends Ws{constructor(e){super(e)}load(e,t,n,s){const r=new bt,o=new uE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Qo extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qa=new je,Kh=new N,$h=new N;class gc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hE extends gc{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fE extends Qo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zh=new je,Qs=new N,Ya=new N;class dE extends gc{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class pE extends Qo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mE extends gc{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _c extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new mE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rl extends Qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gE extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(e,l),r.manager.itemStart(e)}}const xc="\\[\\]\\.:\\/",_E=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",xE="[^"+xc.replace("\\.","")+"]",vE=/((?:WC+[\/:])*)/.source.replace("WC",vc),yE=/(WCOD+)?/.source.replace("WCOD",xE),ME=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),SE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),EE=new RegExp("^"+vE+yE+ME+SE+"$"),TE=["material","materials","bones","map"];class bE{constructor(e,t,n){const s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_E,"")}static parseTrackName(e){const t=EE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);TE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=bE;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);function Qh(i,e){if(e===a0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ml||e===Hd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ml)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Do extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new LE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new kE(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=hr.extractUrlBase(e);o=hr.resolveURL(c,this.path)}else o=hr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new dp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mp){try{o[Ze.KHR_BINARY_GLTF]=new WE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new RE;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new XE(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new jE;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new qE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function AE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wE{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],wt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _c(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pE(u),c.distance=h;break;case"spot":c=new fE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class RE{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const s=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class LE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}}class PE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class IE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class NE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],wt),Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class OE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pt)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class BE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class zE{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class HE{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GE{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class VE{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,f,s.mode,s.filter),m})})}else return null}}class kE{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,m=[];for(const g of h){const _=new je,d=new N,p=new _n,S=new N(1,1,1),v=new qS(g.geometry,g.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&S.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,_.compose(d,p,S));for(const E in l)if(E==="_COLOR_0"){const I=l[E];v.instanceColor=new Al(I.array,I.itemSize,I.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);ut.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const mp="glTF",er=12,ef={JSON:1313821514,BIN:5130562};class WE{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-er,r=new DataView(e,er);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ef.JSON){const c=new Uint8Array(e,er+o,a);this.content=n.decode(c)}else if(l===ef.BIN){const c=er+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],m=bs[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(m){for(const g in m.attributes){const _=m.attributes[g],d=l[g];d!==void 0&&(_.normalized=d)}h(m)},a,c,wt,f)})})}}class jE{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qE{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class gp extends Cr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,m=f*h,g=e*c,_=g-c,d=-2*m+3*f,p=m-f,S=1-d,v=p-f+h;for(let E=0;E!==a;E++){const I=o[_+E+a],R=o[_+E+l]*u,T=o[g+E+a],O=o[g+E]*u;r[E]=S*I+v*R+d*T+p*O}return r}}const YE=new _n;class KE extends gp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return YE.fromArray(r).normalize().toArray(r),r}}const Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tf={9728:Et,9729:Ot,9984:yl,9985:_o,9986:ds,9987:kn},nf={33071:tn,33648:Ao,10497:Ls},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$E={CUBICSPLINE:void 0,LINEAR:Is,STEP:yr},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function Li(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function QE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eT(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Za(t.attributes):e=i.indices+":"+Za(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Za(i.targets[n]);return e}function Za(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ll(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const nT=new je;class iT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new pp(this.options.manager):this.textureLoader=new gE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Li(r,a,s),ui(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(hr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ka[s.type],a=bs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new kt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ka[s.type],c=bs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,d;if(m&&m!==h){const p=Math.floor(f/m),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let v=t.cache.get(S);v||(_=new c(a,p*m,s.count*m/u),v=new GS(_,m/u),t.cache.add(S,v)),d=new fc(v,l,f%m/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),d=new kt(_,l,g);if(s.sparse!==void 0){const p=Ka.SCALAR,S=bs[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,I=new S(o[1],v,s.sparse.count*p),R=new c(o[2],E,s.sparse.count*l);a!==null&&(d=new kt(d.array.slice(),d.itemSize,d.normalized));for(let T=0,O=I.length;T<O;T++){const ne=I[T];if(d.setX(ne,R[T*l]),l>=2&&d.setY(ne,R[T*l+1]),l>=3&&d.setZ(ne,R[T*l+2]),l>=4&&d.setW(ne,R[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=tf[f.magFilter]||Ot,u.minFilter=tf[f.minFilter]||kn,u.wrapS=nf[f.wrapS]||Ls,u.wrapT=nf[f.wrapT]||Ls,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const d=new bt(_);d.needsUpdate=!0,f(d)}),t.load(hr.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||tT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new up,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cp,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const h=s[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],wt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,pt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=An);const u=r.alphaMode||$a.OPAQUE;if(u===$a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===$a.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const h=r.emissiveFactor;a.emissive=new Be().setRGB(h[0],h[1],h[2],wt)}return r.emissiveTexture!==void 0&&o!==Cn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ui(h,r),t.associations.set(h,{materials:e}),r.extensions&&Li(s,h,r),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=eT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=sf(new vn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ZE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const _=u[m],d=o[m];let p;const S=c[m];if(d.mode===Jt.TRIANGLES||d.mode===Jt.TRIANGLE_STRIP||d.mode===Jt.TRIANGLE_FAN||d.mode===void 0)p=r.isSkinnedMesh===!0?new kS(_,S):new Pt(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),d.mode===Jt.TRIANGLE_STRIP?p.geometry=Qh(p.geometry,Hd):d.mode===Jt.TRIANGLE_FAN&&(p.geometry=Qh(p.geometry,Ml));else if(d.mode===Jt.LINES)p=new YS(_,S);else if(d.mode===Jt.LINE_STRIP)p=new pc(_,S);else if(d.mode===Jt.LINE_LOOP)p=new KS(_,S);else if(d.mode===Jt.POINTS)p=new $S(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(p.geometry.morphAttributes).length>0&&QE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ui(p,r),d.extensions&&Li(s,p,d),t.assignFinalMaterial(p),h.push(p)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&Li(s,h[0],r),h[0];const f=new Ui;r.extensions&&Li(s,f,r),t.associations.set(f,{meshes:e});for(let m=0,g=h.length;m<g;m++)f.add(h[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(kd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new uc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ui(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dc(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const m=s.channels[h],g=s.samplers[m.sampler],_=m.target,d=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",d)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],m=h[1],g=h[2],_=h[3],d=h[4],p=[];for(let S=0,v=f.length;S<v;S++){const E=f[S],I=m[S],R=g[S],T=_[S],O=d[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const ne=n._createAnimationTracks(E,I,R,T,O);if(ne)for(let y=0;y<ne.length;y++)p.push(ne[y])}return new sE(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,nT)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new lp:c.length>1?u=new Ui:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ui(u,r),r.extensions&&Li(n,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ui;n.name&&(r.name=s.createUniqueName(n.name)),ui(r,n),n.extensions&&Li(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,m]of s.associations)(f instanceof gn||f instanceof bt)&&h.set(f,m);return u.traverse(f=>{const m=s.associations.get(f);m!=null&&h.set(f,m)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ii[r.path]===ii.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ii[r.path]){case ii.weights:c=Us;break;case ii.rotation:c=ki;break;case ii.position:case ii.scale:c=Os;break;default:switch(n.itemSize){case 1:c=Us;break;case 2:case 3:default:c=Os;break}break}const u=s.interpolation!==void 0?$E[s.interpolation]:Is,h=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const g=new c(l[f]+"."+ii[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ll(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ki?KE:gp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sT(i,e,t){const n=e.attributes,s=new Yn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=Ll(bs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){const _=Ll(bs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new In;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function sf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Cl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),ui(i,e),sT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?JE(i,e.targets,t):i})}const rf=new N,rT=new _n,of=new N;class _p extends ut{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Mn=new je,oT=new je;class xp{constructor(e={}){const t=this;let n,s,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:s}},this.render=function(_,d){const p=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let S,v;d.isOrthographicCamera&&(S=-(d.right+d.left)/2,v=(d.top+d.bottom)/2);const E=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,I=d.isOrthographicCamera?`scale( ${E} )scale(`+p+")translate("+h(S)+"px,"+h(v)+"px)"+f(d.matrixWorldInverse):`scale( ${E} )translateZ(`+p+"px)"+f(d.matrixWorldInverse),T=(d.isPerspectiveCamera?"perspective("+p+"px) ":"")+I+"translate("+r+"px,"+o+"px)";a.camera.style!==T&&(u.style.transform=T,a.camera.style=T),g(_,_,d)},this.setSize=function(_,d){n=_,s=d,r=n/2,o=s/2,l.style.width=_+"px",l.style.height=d+"px",c.style.width=_+"px",c.style.height=d+"px",u.style.width=_+"px",u.style.height=d+"px"};function h(_){return Math.abs(_)<1e-10?0:_}function f(_){const d=_.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function m(_){const d=_.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function g(_,d,p,S){if(_.isCSS3DObject){const v=_.visible===!0&&_.layers.test(p.layers)===!0;if(_.element.style.display=v===!0?"":"none",v===!0){_.onBeforeRender(t,d,p);let E;_.isCSS3DSprite?(Mn.copy(p.matrixWorldInverse),Mn.transpose(),_.rotation2D!==0&&Mn.multiply(oT.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(rf,rT,of),Mn.setPosition(rf),Mn.scale(of),Mn.elements[3]=0,Mn.elements[7]=0,Mn.elements[11]=0,Mn.elements[15]=1,E=m(Mn)):E=m(_.matrixWorld);const I=_.element,R=a.objects.get(_);if(R===void 0||R.style!==E){I.style.transform=E;const T={style:E};a.objects.set(_,T)}I.parentNode!==u&&u.appendChild(I),_.onAfterRender(t,d,p)}}for(let v=0,E=_.children.length;v<E;v++)g(_.children[v],d,p)}}}const af={type:"change"},Ja={type:"start"},lf={type:"end"},ho=new wr,cf=new ci,aT=Math.cos(70*kd.DEG2RAD);class lT extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",ye),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(af),n.update(),r=s.NONE},this.update=function(){const P=new N,ge=new _n().setFromUnitVectors(e.up,new N(0,1,0)),Ee=ge.clone().invert(),Ie=new N,C=new _n,_e=new N,pe=2*Math.PI;return function(De=null){const et=n.object.position;P.copy(et).sub(n.target),P.applyQuaternion(ge),a.setFromVector3(P),n.autoRotate&&r===s.NONE&&Z(y(De)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $e=n.minAzimuthAngle,ot=n.maxAzimuthAngle;isFinite($e)&&isFinite(ot)&&($e<-Math.PI?$e+=pe:$e>Math.PI&&($e-=pe),ot<-Math.PI?ot+=pe:ot>Math.PI&&(ot-=pe),$e<=ot?a.theta=Math.max($e,Math.min(ot,a.theta)):a.theta=a.theta>($e+ot)/2?Math.max($e,a.theta):Math.min(ot,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=ce(a.radius):a.radius=ce(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ee),et.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Rt=!1;if(n.zoomToCursor&&R){let tt=null;if(n.object.isPerspectiveCamera){const mt=P.length();tt=ce(mt*c);const Bt=mt-tt;n.object.position.addScaledVector(E,Bt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const mt=new N(I.x,I.y,0);mt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Rt=!0;const Bt=new N(I.x,I.y,0);Bt.unproject(n.object),n.object.position.sub(Bt).add(mt),n.object.updateMatrixWorld(),tt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(ho.origin.copy(n.object.position),ho.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ho.direction))<aT?e.lookAt(n.target):(cf.setFromNormalAndCoplanarPoint(n.object.up,n.target),ho.intersectPlane(cf,n.target))))}else n.object.isOrthographicCamera&&(Rt=c!==1,Rt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,R=!1,Rt||Ie.distanceToSquared(n.object.position)>o||8*(1-C.dot(n.object.quaternion))>o||_e.distanceToSquared(n.target)>0?(n.dispatchEvent(af),Ie.copy(n.object.position),C.copy(n.object.quaternion),_e.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ge),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",D),n.domElement.removeEventListener("wheel",X),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",D),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ye),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Jh,l=new Jh;let c=1;const u=new N,h=new Ne,f=new Ne,m=new Ne,g=new Ne,_=new Ne,d=new Ne,p=new Ne,S=new Ne,v=new Ne,E=new N,I=new Ne;let R=!1;const T=[],O={};let ne=!1;function y(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function L(P){const ge=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ge)}function Z(P){l.theta-=P}function ue(P){l.phi-=P}const F=function(){const P=new N;return function(Ee,Ie){P.setFromMatrixColumn(Ie,0),P.multiplyScalar(-Ee),u.add(P)}}(),K=function(){const P=new N;return function(Ee,Ie){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ie,1):(P.setFromMatrixColumn(Ie,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ee),u.add(P)}}(),H=function(){const P=new N;return function(Ee,Ie){const C=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;P.copy(_e).sub(n.target);let pe=P.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Ee*pe/C.clientHeight,n.object.matrix),K(2*Ie*pe/C.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Ee*(n.object.right-n.object.left)/n.object.zoom/C.clientWidth,n.object.matrix),K(Ie*(n.object.top-n.object.bottom)/n.object.zoom/C.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function te(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(P,ge){if(!n.zoomToCursor)return;R=!0;const Ee=n.domElement.getBoundingClientRect(),Ie=P-Ee.left,C=ge-Ee.top,_e=Ee.width,pe=Ee.height;I.x=Ie/_e*2-1,I.y=-(C/pe)*2+1,E.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function ce(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function de(P){h.set(P.clientX,P.clientY)}function xe(P){le(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function Pe(P){g.set(P.clientX,P.clientY)}function J(P){f.set(P.clientX,P.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ge=n.domElement;Z(2*Math.PI*m.x/ge.clientHeight),ue(2*Math.PI*m.y/ge.clientHeight),h.copy(f),n.update()}function fe(P){S.set(P.clientX,P.clientY),v.subVectors(S,p),v.y>0?te(L(v.y)):v.y<0&&j(L(v.y)),p.copy(S),n.update()}function ve(P){_.set(P.clientX,P.clientY),d.subVectors(_,g).multiplyScalar(n.panSpeed),H(d.x,d.y),g.copy(_),n.update()}function k(P){le(P.clientX,P.clientY),P.deltaY<0?j(L(P.deltaY)):P.deltaY>0&&te(L(P.deltaY)),n.update()}function re(P){let ge=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ue(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ge=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ue(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ge=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ge=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ge=!0;break}ge&&(P.preventDefault(),n.update())}function ee(P){if(T.length===1)h.set(P.pageX,P.pageY);else{const ge=Te(P),Ee=.5*(P.pageX+ge.x),Ie=.5*(P.pageY+ge.y);h.set(Ee,Ie)}}function me(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const ge=Te(P),Ee=.5*(P.pageX+ge.x),Ie=.5*(P.pageY+ge.y);g.set(Ee,Ie)}}function Se(P){const ge=Te(P),Ee=P.pageX-ge.x,Ie=P.pageY-ge.y,C=Math.sqrt(Ee*Ee+Ie*Ie);p.set(0,C)}function z(P){n.enableZoom&&Se(P),n.enablePan&&me(P)}function A(P){n.enableZoom&&Se(P),n.enableRotate&&ee(P)}function w(P){if(T.length==1)f.set(P.pageX,P.pageY);else{const Ee=Te(P),Ie=.5*(P.pageX+Ee.x),C=.5*(P.pageY+Ee.y);f.set(Ie,C)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ge=n.domElement;Z(2*Math.PI*m.x/ge.clientHeight),ue(2*Math.PI*m.y/ge.clientHeight),h.copy(f)}function U(P){if(T.length===1)_.set(P.pageX,P.pageY);else{const ge=Te(P),Ee=.5*(P.pageX+ge.x),Ie=.5*(P.pageY+ge.y);_.set(Ee,Ie)}d.subVectors(_,g).multiplyScalar(n.panSpeed),H(d.x,d.y),g.copy(_)}function G(P){const ge=Te(P),Ee=P.pageX-ge.x,Ie=P.pageY-ge.y,C=Math.sqrt(Ee*Ee+Ie*Ie);S.set(0,C),v.set(0,Math.pow(S.y/p.y,n.zoomSpeed)),te(v.y),p.copy(S);const _e=(P.pageX+ge.x)*.5,pe=(P.pageY+ge.y)*.5;le(_e,pe)}function q(P){n.enableZoom&&G(P),n.enablePan&&U(P)}function ie(P){n.enableZoom&&G(P),n.enableRotate&&w(P)}function M(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",D)),Fe(P),P.pointerType==="touch"?be(P):B(P))}function x(P){n.enabled!==!1&&(P.pointerType==="touch"?oe(P):V(P))}function D(P){switch(Ue(P),T.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",D),n.dispatchEvent(lf),r=s.NONE;break;case 1:const ge=T[0],Ee=O[ge];be({pointerId:ge,pageX:Ee.x,pageY:Ee.y});break}}function B(P){let ge;switch(P.button){case 0:ge=n.mouseButtons.LEFT;break;case 1:ge=n.mouseButtons.MIDDLE;break;case 2:ge=n.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case Yi.DOLLY:if(n.enableZoom===!1)return;xe(P),r=s.DOLLY;break;case Yi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Pe(P),r=s.PAN}else{if(n.enableRotate===!1)return;de(P),r=s.ROTATE}break;case Yi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;de(P),r=s.ROTATE}else{if(n.enablePan===!1)return;Pe(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ja)}function V(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;J(P);break;case s.DOLLY:if(n.enableZoom===!1)return;fe(P);break;case s.PAN:if(n.enablePan===!1)return;ve(P);break}}function X(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(Ja),k(ae(P)),n.dispatchEvent(lf))}function ae(P){const ge=P.deltaMode,Ee={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ge){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return P.ctrlKey&&!ne&&(Ee.deltaY*=10),Ee}function se(P){P.key==="Control"&&(ne=!0,n.domElement.getRootNode().addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(P){P.key==="Control"&&(ne=!1,n.domElement.getRootNode().removeEventListener("keyup",he,{passive:!0,capture:!0}))}function ye(P){n.enabled===!1||n.enablePan===!1||re(P)}function be(P){switch(we(P),T.length){case 1:switch(n.touches.ONE){case Ki.ROTATE:if(n.enableRotate===!1)return;ee(P),r=s.TOUCH_ROTATE;break;case Ki.PAN:if(n.enablePan===!1)return;me(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(P),r=s.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ja)}function oe(P){switch(we(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;w(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;U(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(P),n.update();break;default:r=s.NONE}}function Ge(P){n.enabled!==!1&&P.preventDefault()}function Fe(P){T.push(P.pointerId)}function Ue(P){delete O[P.pointerId];for(let ge=0;ge<T.length;ge++)if(T[ge]==P.pointerId){T.splice(ge,1);return}}function we(P){let ge=O[P.pointerId];ge===void 0&&(ge=new Ne,O[P.pointerId]=ge),ge.set(P.pageX,P.pageY)}function Te(P){const ge=P.pointerId===T[0]?T[1]:T[0];return O[ge]}n.domElement.addEventListener("contextmenu",Ge),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",D),n.domElement.addEventListener("wheel",X,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}const yc=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},cT={name:"ThreeJSComponent",data(){return{camera:null,renderer:null,css3DRenderer:null,css3DObject:null,directionalLight:null,cursorPosition:{x:0,y:0},inMenu:!0,pizza:!1}},mounted(){const i=new ur;this.initThreeJS(i),this.animateCamera(),window.addEventListener("resize",this.handleWindowResize),window.addEventListener("mousemove",e=>{this.cursorPosition.x=e.clientX/window.innerWidth*2-1,this.cursorPosition.y=-(e.clientY/window.innerHeight)*2+1}),window.addEventListener("click",e=>{this.pizza&&(i.remove(i.getObjectByName("pizza")),console.log(i))})},destroyed(){window.removeEventListener("resize",this.handleWindowResize)},methods:{initThreeJS(){const i=new ur;this.camera=new Tt(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Io,this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs.canvasWrapper.appendChild(this.renderer.domElement),this.css3DRenderer=new xp,this.css3DRenderer.setSize(window.innerWidth,window.innerHeight),this.css3DRenderer.domElement.style.position="fixed",this.css3DRenderer.domElement.style.top="0px",this.css3DRenderer.domElement.style.zIndex="100",this.$refs.canvasWrapper.appendChild(this.css3DRenderer.domElement),this.directionalLight=new _c(16777215,1),this.directionalLight.position.set(-2,5,-2).normalize(),i.add(this.directionalLight);const e=new Rl(4210752);i.add(e);const t=new Sr(100,1e3,1e3),n=new Cn({map:new pp().load("background.png"),side:Vt}),s=new Pt(t,n);i.add(s),setTimeout(()=>{const a=new _p(this.addCssObject(i));a.name="menuCss",a.position.set(-750,-600,3500),a.lookAt(700,2e3,-1),i.add(a)},2e3);const r=new Do;r.load("./models/main/scene.gltf",a=>{const l=a.scene;l.name="main",i.add(l),this.camera.position.set(-1.2,1,-1.4),this.camera.lookAt(0,.3,.5)},void 0,a=>{console.error(a)}),r.load("./models/menu/scene.gltf",a=>{const l=a.scene;l.position.set(-1.5,.7,0),l.lookAt(-1,-2,-1),l.name="menu",i.add(l)},void 0,a=>{console.error(a)});const o=()=>{this.inMenu&&requestAnimationFrame(o),s.rotation.x+=0,s.rotation.y+=.001,this.renderer.render(i,this.camera),this.css3DRenderer.render(i,this.camera)};o(),this.handleWindowResize()},animateCamera(){const i=new N(-1.2,1,-1.4),e=2e3,t=new N(0,.5,0),n=()=>{const o=Date.now()-s;if(o<e){const a=o/e,l=Math.sin(a*Math.PI*.5);this.camera.position.lerpVectors(t,i,l),requestAnimationFrame(n)}else this.camera.position.copy(i)},s=Date.now();n()},handleWindowResize(){const i=window.innerWidth,e=window.innerHeight;this.camera.aspect=i/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,e),this.css3DRenderer.setSize(i,e),this.css3DObject&&this.css3DObject.element&&this.css3DObject.element},addCssObject(i,e){const t=document.createElement("div");t.style.height="auto",t.style.width="1000px",t.style.zIndex="1";const n=document.createElement("div"),s=document.createElement("div");n.innerHTML="Pizza #1",n.style.zIndex="1",n.id="pizza1",n.style.fontSize="150px",n.style.padding="50px",n.classList.add("table"),n.style.border="10px solid transparent",t.appendChild(n),s.innerHTML="Pizza #2",s.style.zIndex="1",s.classList.add("table"),s.style.fontSize="150px",s.style.padding="50px",s.style.position="relative",s.style.top="30px",s.style.border="10px solid transparent",t.appendChild(s),n.addEventListener("click",()=>{this.deleteObject(i),this.addPizza(i,1)}),s.addEventListener("click",()=>{this.deleteObject(i),this.addPizza(i,2)});let r=0;const o=()=>{r+=.01,n.style.opacity=r,s.style.opacity=r,r<1&&requestAnimationFrame(o)};return o(),n.addEventListener("mouseenter",()=>{n.style.border="10px solid black",n.style.cursor="pointer"}),n.addEventListener("mouseleave",()=>{n.style.border="10px solid transparent"}),s.addEventListener("mouseenter",()=>{s.style.border="10px solid black",s.style.cursor="pointer"}),s.addEventListener("mouseleave",()=>{s.style.border="10px solid transparent"}),t},addPizza(i,e){const t=new Do;let n=null;e===1?n="./models/pizza1/scene.gltf":n="./models/pizza2/scene.gltf",t.load(n,s=>{const r=s.scene;r.name="pizza",e==1?r.position.set(-1,.9,-1.1):r.position.set(-.8,.8,-.8),r.lookAt(.5,4,.8),i.add(r);const o=()=>{r.rotation.y+=.005,requestAnimationFrame(o)};o()},void 0,s=>{console.error(s)})},deleteObject(i){setTimeout(()=>{i.remove(i.getObjectByName("menu")),i.remove(i.getObjectByName("main")),i.remove(i.getObjectByName("menuCss")),this.pizza=!0},10)}}},uT=i=>(rd("data-v-3a2665fc"),i=i(),od(),i),hT={id:"canvasWrapper",ref:"canvasWrapper"},fT=uT(()=>Qt("div",{class:"back"},[Qt("a",{href:"/"},"To aperture")],-1));function dT(i,e,t,n,s,r){return Ql(),ec(Sn,null,[Qt("div",hT,null,512),fT],64)}const vp=yc(cT,[["render",dT],["__scopeId","data-v-3a2665fc"]]);function pT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var yp={exports:{}};(function(i,e){var t=t||function(){var n=[];return{getAll:function(){return n},removeAll:function(){n=[]},add:function(s){n.push(s)},remove:function(s){var r=n.indexOf(s);r!==-1&&n.splice(r,1)},update:function(s,r){if(n.length===0)return!1;var o=0;for(s=s!==void 0?s:t.now();o<n.length;)n[o].update(s)||r?o++:n.splice(o,1);return!0}}}();typeof window>"u"&&typeof process<"u"?t.now=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof window<"u"&&window.performance!==void 0&&window.performance.now!==void 0?t.now=window.performance.now.bind(window.performance):Date.now!==void 0?t.now=Date.now:t.now=function(){return new Date().getTime()},t.Tween=function(n){var s=n,r={},o={},a={},l=1e3,c=0,u,h=!1,f=!1,m=0,g=null,_=t.Easing.Linear.None,d=t.Interpolation.Linear,p=[],S=null,v=!1,E=null,I=null,R=null;this.to=function(T,O){return o=T,O!==void 0&&(l=O),this},this.start=function(T){t.add(this),f=!0,v=!1,g=T!==void 0?T:t.now(),g+=m;for(var O in o){if(o[O]instanceof Array){if(o[O].length===0)continue;o[O]=[s[O]].concat(o[O])}s[O]!==void 0&&(r[O]=s[O],r[O]instanceof Array||(r[O]*=1),a[O]=r[O]||0)}return this},this.stop=function(){return f?(t.remove(this),f=!1,R!==null&&R.call(s,s),this.stopChainedTweens(),this):this},this.end=function(){return this.update(g+l),this},this.stopChainedTweens=function(){for(var T=0,O=p.length;T<O;T++)p[T].stop()},this.delay=function(T){return m=T,this},this.repeat=function(T){return c=T,this},this.repeatDelay=function(T){return u=T,this},this.yoyo=function(T){return h=T,this},this.easing=function(T){return _=T,this},this.interpolation=function(T){return d=T,this},this.chain=function(){return p=arguments,this},this.onStart=function(T){return S=T,this},this.onUpdate=function(T){return E=T,this},this.onComplete=function(T){return I=T,this},this.onStop=function(T){return R=T,this},this.update=function(T){var O,ne,y;if(T<g)return!0;v===!1&&(S!==null&&S.call(s,s),v=!0),ne=(T-g)/l,ne=ne>1?1:ne,y=_(ne);for(O in o)if(r[O]!==void 0){var L=r[O]||0,Z=o[O];Z instanceof Array?s[O]=d(Z,y):(typeof Z=="string"&&(Z.charAt(0)==="+"||Z.charAt(0)==="-"?Z=L+parseFloat(Z):Z=parseFloat(Z)),typeof Z=="number"&&(s[O]=L+(Z-L)*y))}if(E!==null&&E.call(s,y),ne===1)if(c>0){isFinite(c)&&c--;for(O in a){if(typeof o[O]=="string"&&(a[O]=a[O]+parseFloat(o[O])),h){var ue=a[O];a[O]=o[O],o[O]=ue}r[O]=a[O]}return u!==void 0?g=T+u:g=T+m,!0}else{I!==null&&I.call(s,s);for(var F=0,K=p.length;F<K;F++)p[F].start(g+l);return!1}return!0}},t.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var s=1.70158;return n*n*((s+1)*n-s)},Out:function(n){var s=1.70158;return--n*n*((s+1)*n+s)+1},InOut:function(n){var s=2.5949095;return(n*=2)<1?.5*(n*n*((s+1)*n-s)):.5*((n-=2)*n*((s+1)*n+s)+2)}},Bounce:{In:function(n){return 1-t.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?t.Easing.Bounce.In(n*2)*.5:t.Easing.Bounce.Out(n*2-1)*.5+.5}}},t.Interpolation={Linear:function(n,s){var r=n.length-1,o=r*s,a=Math.floor(o),l=t.Interpolation.Utils.Linear;return s<0?l(n[0],n[1],o):s>1?l(n[r],n[r-1],r-o):l(n[a],n[a+1>r?r:a+1],o-a)},Bezier:function(n,s){for(var r=0,o=n.length-1,a=Math.pow,l=t.Interpolation.Utils.Bernstein,c=0;c<=o;c++)r+=a(1-s,o-c)*a(s,c)*n[c]*l(o,c);return r},CatmullRom:function(n,s){var r=n.length-1,o=r*s,a=Math.floor(o),l=t.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(s<0&&(a=Math.floor(o=r*(1+s))),l(n[(a-1+r)%r],n[a],n[(a+1)%r],n[(a+2)%r],o-a)):s<0?n[0]-(l(n[0],n[0],n[1],n[1],-o)-n[0]):s>1?n[r]-(l(n[r],n[r],n[r-1],n[r-1],o-r)-n[r]):l(n[a?a-1:0],n[a],n[r<a+1?r:a+1],n[r<a+2?r:a+2],o-a)},Utils:{Linear:function(n,s,r){return(s-n)*r+n},Bernstein:function(n,s){var r=t.Interpolation.Utils.Factorial;return r(n)/r(s)/r(n-s)},Factorial:function(){var n=[1];return function(s){var r=1;if(n[s])return n[s];for(var o=s;o>1;o--)r*=o;return n[s]=r,r}}(),CatmullRom:function(n,s,r,o,a){var l=(r-n)*.5,c=(o-s)*.5,u=a*a,h=a*u;return(2*s-2*r+l+c)*h+(-3*s+3*r-2*l-c)*u+l*a+s}}},function(n){i.exports=t}()})(yp);var mT=yp.exports;const gT=pT(mT),_T={components:{},data(){return{camera:null,renderer:null,css3DRenderer:null,macModelPath:"./models/mac/source/pc.fbx",controls:null,screen_position:null}},created(){this.camera=new Tt(75,window.innerWidth/window.innerHeight,0,3e3),this.camera.position.set(300,100,250)},mounted(){this.camera=new Tt(75,window.innerWidth/window.innerHeight,.1,3e3),this.renderer=new Io,this.camera.position.set(300,100,250),this.camera.lookAt(-39,85,85),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.$refs.canvasWrapper.appendChild(this.renderer.domElement),this.css3DRenderer=new xp,this.css3DRenderer.setSize(window.innerWidth,window.innerHeight),this.css3DRenderer.domElement.style.position="fixed",this.css3DRenderer.domElement.style.top="0px",this.css3DRenderer.domElement.style.zIndex="90",this.$refs.canvasWrapper.appendChild(this.css3DRenderer.domElement),new ur;const i=new ur;this.light(i),this.loadGltf(i).then(()=>this.zoomAndLookAt().then(()=>this.animate(i))).then(()=>this.css3d(i)).catch(e=>console.error(e)),this.addOrbitControls(),this.addSphere(i),this.animate(i)},methods:{addSphere(i){const e=new Sr(1e3,5,5),t=new Cn({color:16777215,wireframe:!0}),n=new Pt(e,t);i.add(n)},zoomAndLookAt(){return new Promise(i=>{setTimeout(()=>{i()},2e3)})},init3D(i){},light(i){this.directionalLight=new _c(16777215,5),this.directionalLight.position.set(-500,1e3,500).normalize(),this.directionalLight.castShadow=!0,this.directionalLight.shadow.camera.far=3e3,this.directionalLight.shadow.camera.near=.1,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.left=-500,this.directionalLight.shadow.camera.right=500,this.directionalLight.shadow.camera.top=500,this.directionalLight.shadow.camera.bottom=-500,this.directionalLight.shadow.camera.updateProjectionMatrix(),this.directionalLight.shadow.mapSize.width=1024,this.directionalLight.shadow.mapSize.height=1024,this.directionalLight.shadow.bias=-.001,i.add(this.directionalLight);const e=new Rl(4210752);e.intensity=5,i.add(e)},animate(i){requestAnimationFrame(()=>this.animate(i)),this.controls&&this.controls.update(),gT.update(),this.renderer.render(i,this.camera),this.directionalLight.position.set(-this.camera.position.x,10,-this.camera.position.z).normalize(),this.css3DRenderer.render(i,this.camera)},loadGltf(i){return new Promise((e,t)=>{new Do().load("./models/pcGLTF/scene.gltf",s=>{let r=s.scene;r.position.set(0,0,0),r.name="pc",r.scale.set(30,30,30),r.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),i.add(r),setTimeout(()=>{e()},1e3)},void 0,s=>{t(s)})})},addOrbitControls(){const i=new lT(this.camera,this.css3DRenderer.domElement);i.enableDamping=!0,i.dampingFactor=.25,i.enableZoom=!0,this.controls=i},css3d(i,e){i.getObjectByName("pc").traverse(r=>{if(r.name=="MY_SCREEN"&&(console.log(r),r.children[0]instanceof Pt)){const o=new ZS({color:0,emissive:0,emissiveIntensity:1});r.children[0].material=o}});const n=this.createElement(e),s=new _p(n);s.name="screen",s.position.set(-45,90,92),s.lookAt(320,120,90),console.log(s),i.add(s)},createElement(i){const e=document.createElement("div");e.style.width="190px",e.style.height="100px",e.style.border="1px solid black",e.style.borderRadius="2px",e.ref="innerCanvas";const t=new ur,n=new Tt(75,1,.1,1e3);n.position.z=5;let s;new Do().load("./models/cube/scene.gltf",f=>{s=f.scene,s.scale.set(1,1,1),t.add(s)});const o=new Sr(10,5,5),a=new Cn({color:16777215,wireframe:!0}),l=new Pt(o,a);t.add(l);const c=new Rl(4210752);c.intensity=5,t.add(c);const u=new Io;u.setSize(190,100),u.domElement.style.position="absolute",u.domElement.style.top="0",u.domElement.style.left="0",e.appendChild(u.domElement);const h=()=>{requestAnimationFrame(h),s&&(s.rotation.x+=.01,s.rotation.y+=.01);const f=.005;l.rotation.x+=f,l.rotation.y+=f,u.render(t,n)};return h(),e}},computed:{cameraLookAt(){const i=new N;return this.camera.getWorldDirection(i),i}}},xT=i=>(rd("data-v-6c1102bb"),i=i(),od(),i),vT={class:"main"},yT={id:"canvasWrapper",ref:"canvasWrapper"},MT={class:"stats"},ST=xT(()=>Qt("div",{class:"pizza"},[Qt("a",{href:"/pizza"},"To pizza")],-1));function ET(i,e,t,n,s,r){return Ql(),ec("div",vT,[Qt("div",yT,null,512),Qt("div",MT,[Qt("p",null,"x : "+aa(Math.trunc(s.camera.position.x)),1),Qt("p",null,"y : "+aa(Math.trunc(s.camera.position.y)),1),Qt("p",null,"z : "+aa(Math.trunc(s.camera.position.z)),1)]),ST])}const Mp=yc(_T,[["render",ET],["__scopeId","data-v-6c1102bb"]]),TT={name:"App",setup(){},components:{ThreeJs:vp,MacBook:Mp}};function bT(i,e,t,n,s,r){const o=Om("router-view");return Ql(),ec("div",null,[an(o)])}const AT=yc(TT,[["render",bT]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof document<"u";function wT(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const it=Object.assign;function Qa(i,e){const t={};for(const n in e){const s=e[n];t[n]=xn(s)?s.map(i):i(s)}return t}const fr=()=>{},xn=Array.isArray,Sp=/#/g,RT=/&/g,CT=/\//g,LT=/=/g,PT=/\?/g,Ep=/\+/g,IT=/%5B/g,DT=/%5D/g,Tp=/%5E/g,NT=/%60/g,bp=/%7B/g,UT=/%7C/g,Ap=/%7D/g,OT=/%20/g;function Mc(i){return encodeURI(""+i).replace(UT,"|").replace(IT,"[").replace(DT,"]")}function FT(i){return Mc(i).replace(bp,"{").replace(Ap,"}").replace(Tp,"^")}function Pl(i){return Mc(i).replace(Ep,"%2B").replace(OT,"+").replace(Sp,"%23").replace(RT,"%26").replace(NT,"`").replace(bp,"{").replace(Ap,"}").replace(Tp,"^")}function BT(i){return Pl(i).replace(LT,"%3D")}function zT(i){return Mc(i).replace(Sp,"%23").replace(PT,"%3F")}function HT(i){return i==null?"":zT(i).replace(CT,"%2F")}function Er(i){try{return decodeURIComponent(""+i)}catch{}return""+i}const GT=/\/$/,VT=i=>i.replace(GT,"");function el(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=jT(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:Er(o)}}function kT(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function uf(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function WT(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&Fs(e.matched[n],t.matched[s])&&wp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Fs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function wp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!XT(i[t],e[t]))return!1;return!0}function XT(i,e){return xn(i)?hf(i,e):xn(e)?hf(e,i):i===e}function hf(i,e){return xn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function jT(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(o).join("/")}var Tr;(function(i){i.pop="pop",i.push="push"})(Tr||(Tr={}));var dr;(function(i){i.back="back",i.forward="forward",i.unknown=""})(dr||(dr={}));function qT(i){if(!i)if(ps){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),VT(i)}const YT=/^[^#]+#/;function KT(i,e){return i.replace(YT,"#")+e}function $T(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const ea=()=>({left:window.scrollX,top:window.scrollY});function ZT(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=$T(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ff(i,e){return(history.state?history.state.position-e:-1)+i}const Il=new Map;function JT(i,e){Il.set(i,e)}function QT(i){const e=Il.get(i);return Il.delete(i),e}let eb=()=>location.protocol+"//"+location.host;function Rp(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),uf(l,"")}return uf(t,i)+n+s}function tb(i,e,t,n){let s=[],r=[],o=null;const a=({state:f})=>{const m=Rp(i,location),g=t.value,_=e.value;let d=0;if(f){if(t.value=m,e.value=f,o&&o===g){o=null;return}d=_?f.position-_.position:0}else n(m);s.forEach(p=>{p(t.value,g,{delta:d,type:Tr.pop,direction:d?d>0?dr.forward:dr.back:dr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const m=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(it({},f.state,{scroll:ea()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function df(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?ea():null}}function nb(i){const{history:e,location:t}=window,n={value:Rp(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:eb()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),t[u?"replace":"assign"](f)}}function o(l,c){const u=it({},e.state,df(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=it({},s.value,e.state,{forward:l,scroll:ea()});r(u.current,u,!0);const h=it({},df(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function ib(i){i=qT(i);const e=nb(i),t=tb(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=it({location:"",base:i,go:n,createHref:KT.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sb(i){return typeof i=="string"||i&&typeof i=="object"}function Cp(i){return typeof i=="string"||typeof i=="symbol"}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lp=Symbol("");var pf;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(pf||(pf={}));function Bs(i,e){return it(new Error,{type:i,[Lp]:!0},e)}function Gn(i,e){return i instanceof Error&&Lp in i&&(e==null||!!(i.type&e))}const mf="[^/]+?",rb={sensitive:!1,strict:!1,start:!0,end:!0},ob=/[.+*?^${}()[\]/\\]/g;function ab(i,e){const t=it({},rb,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let m=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(ob,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:_,optional:d,regexp:p}=f;r.push({name:g,repeatable:_,optional:d});const S=p||mf;if(S!==mf){m+=10;try{new RegExp(`(${S})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+E.message)}}let v=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(v=d&&c.length<2?`(?:/${v})`:"/"+v),d&&(v+="?"),s+=v,m+=20,d&&(m+=-8),_&&(m+=-20),S===".*"&&(m+=-50)}u.push(m)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=r[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:_,optional:d}=m,p=g in c?c[g]:"";if(xn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=xn(p)?p.join("/"):p;if(!S)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function lb(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cb(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=lb(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(gf(n))return 1;if(gf(s))return-1}return s.length-n.length}function gf(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const ub={type:0,value:""},hb=/[a-zA-Z0-9_]/;function fb(i){if(!i)return[[]];if(i==="/")return[[ub]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:hb.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function db(i,e,t){const n=ab(fb(i.path),t),s=it(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pb(i,e){const t=[],n=new Map;e=vf({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const m=!f,g=mb(u);g.aliasOf=f&&f.record;const _=vf(e,u),d=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of v)d.push(it({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let p,S;for(const v of d){const{path:E}=v;if(h&&E[0]!=="/"){const I=h.record.path,R=I[I.length-1]==="/"?"":"/";v.path=h.record.path+(E&&R+E)}if(p=db(v,h,_),f?f.alias.push(p):(S=S||p,S!==p&&S.alias.push(p),m&&u.name&&!xf(p)&&o(u.name)),g.children){const I=g.children;for(let R=0;R<I.length;R++)r(I[R],p,f&&f.children[R])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return S?()=>{o(S)}:fr}function o(u){if(Cp(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&cb(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Pp(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!xf(u)&&n.set(u.record.name,u)}function c(u,h){let f,m={},g,_;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Bs(1,{location:u});_=f.record.name,m=it(_f(h.params,f.keys.filter(S=>!S.optional).concat(f.parent?f.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&_f(u.params,f.keys.map(S=>S.name))),g=f.stringify(m)}else if(u.path!=null)g=u.path,f=t.find(S=>S.re.test(g)),f&&(m=f.parse(g),_=f.record.name);else{if(f=h.name?n.get(h.name):t.find(S=>S.re.test(h.path)),!f)throw Bs(1,{location:u,currentLocation:h});_=f.record.name,m=it({},h.params,u.params),g=f.stringify(m)}const d=[];let p=f;for(;p;)d.unshift(p.record),p=p.parent;return{name:_,path:g,params:m,matched:d,meta:_b(d)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function _f(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function mb(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:gb(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function gb(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function xf(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function _b(i){return i.reduce((e,t)=>it(e,t.meta),{})}function vf(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Pp(i,e){return e.children.some(t=>t===i||Pp(i,t))}function xb(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Ep," "),o=r.indexOf("="),a=Er(o<0?r:r.slice(0,o)),l=o<0?null:Er(r.slice(o+1));if(a in e){let c=e[a];xn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yf(i){let e="";for(let t in i){const n=i[t];if(t=BT(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(xn(n)?n.map(r=>r&&Pl(r)):[n&&Pl(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function vb(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=xn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const yb=Symbol(""),Mf=Symbol(""),Sc=Symbol(""),Ip=Symbol(""),Dl=Symbol("");function tr(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function hi(i,e,t,n,s,r=o=>o()){const o=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Bs(4,{from:t,to:e})):f instanceof Error?l(f):sb(f)?l(Bs(2,{from:e,to:f})):(o&&n.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>i.call(n&&n.instances[s],e,t,c));let h=Promise.resolve(u);i.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function tl(i,e,t,n,s=r=>r()){const r=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mb(l)){const u=(l.__vccOpts||l)[e];u&&r.push(hi(u,t,n,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=wT(u)?u.default:u;o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&hi(m,t,n,o,a,s)()}))}}return r}function Mb(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Sf(i){const e=Ln(Sc),t=Ln(Ip),n=en(()=>e.resolve(ys(i.to))),s=en(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Fs.bind(null,u));if(f>-1)return f;const m=Ef(l[c-2]);return c>1&&Ef(u)===m&&h[h.length-1].path!==m?h.findIndex(Fs.bind(null,l[c-2])):f}),r=en(()=>s.value>-1&&bb(t.params,n.value.params)),o=en(()=>s.value>-1&&s.value===t.matched.length-1&&wp(t.params,n.value.params));function a(l={}){return Tb(l)?e[ys(i.replace)?"replace":"push"](ys(i.to)).catch(fr):Promise.resolve()}return{route:n,href:en(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const Sb=ud({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sf,setup(i,{slots:e}){const t=br(Sf(i)),{options:n}=Ln(Sc),s=en(()=>({[Tf(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Tf(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:Ad("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Eb=Sb;function Tb(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function bb(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!xn(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function Ef(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Tf=(i,e,t)=>i??e??t,Ab=ud({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Ln(Dl),s=en(()=>i.route||n.value),r=Ln(Mf,0),o=en(()=>{let c=ys(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=en(()=>s.value.matched[o.value]);mo(Mf,en(()=>o.value+1)),mo(yb,a),mo(Dl,s);const l=ql();return sr(()=>[l.value,a.value,i.name],([c,u,h],[f,m,g])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Fs(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return bf(t.default,{Component:f,route:c});const m=h.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=Ad(f,it({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return bf(t.default,{Component:d,route:c})||d}}});function bf(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const wb=Ab;function Rb(i){const e=pb(i.routes,i),t=i.parseQuery||xb,n=i.stringifyQuery||yf,s=i.history,r=tr(),o=tr(),a=tr(),l=vm(si);let c=si;ps&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qa.bind(null,k=>""+k),h=Qa.bind(null,HT),f=Qa.bind(null,Er);function m(k,re){let ee,me;return Cp(k)?(ee=e.getRecordMatcher(k),me=re):me=k,e.addRoute(me,ee)}function g(k){const re=e.getRecordMatcher(k);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(k=>k.record)}function d(k){return!!e.getRecordMatcher(k)}function p(k,re){if(re=it({},re||l.value),typeof k=="string"){const w=el(t,k,re.path),U=e.resolve({path:w.path},re),G=s.createHref(w.fullPath);return it(w,U,{params:f(U.params),hash:Er(w.hash),redirectedFrom:void 0,href:G})}let ee;if(k.path!=null)ee=it({},k,{path:el(t,k.path,re.path).path});else{const w=it({},k.params);for(const U in w)w[U]==null&&delete w[U];ee=it({},k,{params:h(w)}),re.params=h(re.params)}const me=e.resolve(ee,re),Se=k.hash||"";me.params=u(f(me.params));const z=kT(n,it({},k,{hash:FT(Se),path:me.path})),A=s.createHref(z);return it({fullPath:z,hash:Se,query:n===yf?vb(k.query):k.query||{}},me,{redirectedFrom:void 0,href:A})}function S(k){return typeof k=="string"?el(t,k,l.value.path):it({},k)}function v(k,re){if(c!==k)return Bs(8,{from:re,to:k})}function E(k){return T(k)}function I(k){return E(it(S(k),{replace:!0}))}function R(k){const re=k.matched[k.matched.length-1];if(re&&re.redirect){const{redirect:ee}=re;let me=typeof ee=="function"?ee(k):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=S(me):{path:me},me.params={}),it({query:k.query,hash:k.hash,params:me.path!=null?{}:k.params},me)}}function T(k,re){const ee=c=p(k),me=l.value,Se=k.state,z=k.force,A=k.replace===!0,w=R(ee);if(w)return T(it(S(w),{state:typeof w=="object"?it({},Se,w.state):Se,force:z,replace:A}),re||ee);const U=ee;U.redirectedFrom=re;let G;return!z&&WT(n,me,ee)&&(G=Bs(16,{to:U,from:me}),de(me,me,!0,!1)),(G?Promise.resolve(G):y(U,me)).catch(q=>Gn(q)?Gn(q,2)?q:ce(q):j(q,U,me)).then(q=>{if(q){if(Gn(q,2))return T(it({replace:A},S(q.to),{state:typeof q.to=="object"?it({},Se,q.to.state):Se,force:z}),re||U)}else q=Z(U,me,!0,A,Se);return L(U,me,q),q})}function O(k,re){const ee=v(k,re);return ee?Promise.reject(ee):Promise.resolve()}function ne(k){const re=J.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(k):k()}function y(k,re){let ee;const[me,Se,z]=Cb(k,re);ee=tl(me.reverse(),"beforeRouteLeave",k,re);for(const w of me)w.leaveGuards.forEach(U=>{ee.push(hi(U,k,re))});const A=O.bind(null,k,re);return ee.push(A),ve(ee).then(()=>{ee=[];for(const w of r.list())ee.push(hi(w,k,re));return ee.push(A),ve(ee)}).then(()=>{ee=tl(Se,"beforeRouteUpdate",k,re);for(const w of Se)w.updateGuards.forEach(U=>{ee.push(hi(U,k,re))});return ee.push(A),ve(ee)}).then(()=>{ee=[];for(const w of z)if(w.beforeEnter)if(xn(w.beforeEnter))for(const U of w.beforeEnter)ee.push(hi(U,k,re));else ee.push(hi(w.beforeEnter,k,re));return ee.push(A),ve(ee)}).then(()=>(k.matched.forEach(w=>w.enterCallbacks={}),ee=tl(z,"beforeRouteEnter",k,re,ne),ee.push(A),ve(ee))).then(()=>{ee=[];for(const w of o.list())ee.push(hi(w,k,re));return ee.push(A),ve(ee)}).catch(w=>Gn(w,8)?w:Promise.reject(w))}function L(k,re,ee){a.list().forEach(me=>ne(()=>me(k,re,ee)))}function Z(k,re,ee,me,Se){const z=v(k,re);if(z)return z;const A=re===si,w=ps?history.state:{};ee&&(me||A?s.replace(k.fullPath,it({scroll:A&&w&&w.scroll},Se)):s.push(k.fullPath,Se)),l.value=k,de(k,re,ee,A),ce()}let ue;function F(){ue||(ue=s.listen((k,re,ee)=>{if(!fe.listening)return;const me=p(k),Se=R(me);if(Se){T(it(Se,{replace:!0}),me).catch(fr);return}c=me;const z=l.value;ps&&JT(ff(z.fullPath,ee.delta),ea()),y(me,z).catch(A=>Gn(A,12)?A:Gn(A,2)?(T(A.to,me).then(w=>{Gn(w,20)&&!ee.delta&&ee.type===Tr.pop&&s.go(-1,!1)}).catch(fr),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),j(A,me,z))).then(A=>{A=A||Z(me,z,!1),A&&(ee.delta&&!Gn(A,8)?s.go(-ee.delta,!1):ee.type===Tr.pop&&Gn(A,20)&&s.go(-1,!1)),L(me,z,A)}).catch(fr)}))}let K=tr(),H=tr(),te;function j(k,re,ee){ce(k);const me=H.list();return me.length?me.forEach(Se=>Se(k,re,ee)):console.error(k),Promise.reject(k)}function le(){return te&&l.value!==si?Promise.resolve():new Promise((k,re)=>{K.add([k,re])})}function ce(k){return te||(te=!k,F(),K.list().forEach(([re,ee])=>k?ee(k):re()),K.reset()),k}function de(k,re,ee,me){const{scrollBehavior:Se}=i;if(!ps||!Se)return Promise.resolve();const z=!ee&&QT(ff(k.fullPath,0))||(me||!ee)&&history.state&&history.state.scroll||null;return Kl().then(()=>Se(k,re,z)).then(A=>A&&ZT(A)).catch(A=>j(A,k,re))}const xe=k=>s.go(k);let Pe;const J=new Set,fe={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:d,getRoutes:_,resolve:p,options:i,push:E,replace:I,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:le,install(k){const re=this;k.component("RouterLink",Eb),k.component("RouterView",wb),k.config.globalProperties.$router=re,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),ps&&!Pe&&l.value===si&&(Pe=!0,E(s.location).catch(Se=>{}));const ee={};for(const Se in si)Object.defineProperty(ee,Se,{get:()=>l.value[Se],enumerable:!0});k.provide(Sc,re),k.provide(Ip,qf(ee)),k.provide(Dl,l);const me=k.unmount;J.add(k),k.unmount=function(){J.delete(k),J.size<1&&(c=si,ue&&ue(),ue=null,l.value=si,Pe=!1,te=!1),me()}}};function ve(k){return k.reduce((re,ee)=>re.then(()=>ne(ee)),Promise.resolve())}return fe}function Cb(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>Fs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Fs(c,l))||s.push(l))}return[t,n,s]}const Lb=u_(),Ec=o_(AT),Pb=Rb({history:ib(),routes:[{path:"/threejs-pages",component:Mp},{path:"/threejs-pages/pizza",component:vp}]});Ec.use(Pb);Ec.use(Lb);Ec.mount("#app");
