(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function pi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ge={},xn=[],Ct=()=>{},Sr=()=>!1,no=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fi=e=>e.startsWith("onUpdate:"),$e=Object.assign,mi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},lu=Object.prototype.hasOwnProperty,de=(e,t)=>lu.call(e,t),Q=Array.isArray,Cn=e=>so(e)==="[object Map]",Br=e=>so(e)==="[object Set]",J=e=>typeof e=="function",xe=e=>typeof e=="string",nn=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Nr=e=>(ye(e)||J(e))&&J(e.then)&&J(e.catch),Pr=Object.prototype.toString,so=e=>Pr.call(e),cu=e=>so(e).slice(8,-1),kr=e=>so(e)==="[object Object]",hi=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},uu=/-\w/g,ut=oo(e=>e.replace(uu,t=>t.slice(1).toUpperCase())),du=/\B([A-Z])/g,gn=oo(e=>e.replace(du,"-$1").toLowerCase()),io=oo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Io=oo(e=>e?`on${io(e)}`:""),en=(e,t)=>!Object.is(e,t),Ps=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Tr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},gi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ta;const ao=()=>ta||(ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ro(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=xe(s)?hu(s):ro(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(xe(e)||ye(e))return e}const pu=/;(?![^(]*\))/g,fu=/:([^]+)/,mu=/\/\*[^]*?\*\//g;function hu(e){const t={};return e.replace(mu,"").split(pu).forEach(n=>{if(n){const s=n.split(fu);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function De(e){let t="";if(xe(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const s=De(e[n]);s&&(t+=s+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wu=pi(gu);function Fr(e){return!!e||e===""}const Dr=e=>!!(e&&e.__v_isRef===!0),Z=e=>xe(e)?e:e==null?"":Q(e)||ye(e)&&(e.toString===Pr||!J(e.toString))?Dr(e)?Z(e.value):JSON.stringify(e,$r,2):String(e),$r=(e,t)=>Dr(t)?$r(e,t.value):Cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[Eo(s,i)+" =>"]=o,n),{})}:Br(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Eo(n))}:nn(t)?Eo(t):ye(t)&&!Q(t)&&!kr(t)?String(t):t,Eo=(e,t="")=>{var n;return nn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class bu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Au(){return Je}let be;const _o=new WeakSet;class Mr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_o.has(this)&&(_o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,na(this),Lr(this);const t=be,n=pt;be=this,pt=!0;try{return this.fn()}finally{Ur(this),be=t,pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ai(t);this.deps=this.depsTail=void 0,na(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uo(this)&&this.run()}get dirty(){return Uo(this)}}let Or=0,Yn,Qn;function Rr(e,t=!1){if(e.flags|=8,t){e.next=Qn,Qn=e;return}e.next=Yn,Yn=e}function wi(){Or++}function bi(){if(--Or>0)return;if(Qn){let t=Qn;for(Qn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yn;){let t=Yn;for(Yn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Lr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ur(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Ai(s),yu(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Uo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===os)||(e.globalVersion=os,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Uo(e))))return;e.flags|=2;const t=e.dep,n=be,s=pt;be=e,pt=!0;try{Lr(e);const o=e.fn(e._value);(t.version===0||en(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{be=n,pt=s,Ur(e),e.flags&=-3}}function Ai(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ai(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function yu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let pt=!0;const jr=[];function Lt(){jr.push(pt),pt=!1}function Ut(){const e=jr.pop();pt=e===void 0?!0:e}function na(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=be;be=void 0;try{t()}finally{be=n}}}let os=0;class vu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!be||!pt||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new vu(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,qr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=s)}return n}trigger(t){this.version++,os++,this.notify(t)}notify(t){wi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bi()}}}function qr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)qr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Vo=new WeakMap,pn=Symbol(""),jo=Symbol(""),is=Symbol("");function Me(e,t,n){if(pt&&be){let s=Vo.get(e);s||Vo.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new yi),o.map=s,o.key=n),o.track()}}function Mt(e,t,n,s,o,i){const a=Vo.get(e);if(!a){os++;return}const r=l=>{l&&l.trigger()};if(wi(),t==="clear")a.forEach(r);else{const l=Q(e),u=l&&hi(n);if(l&&n==="length"){const c=Number(s);a.forEach((d,f)=>{(f==="length"||f===is||!nn(f)&&f>=c)&&r(d)})}else switch((n!==void 0||a.has(void 0))&&r(a.get(n)),u&&r(a.get(is)),t){case"add":l?u&&r(a.get("length")):(r(a.get(pn)),Cn(e)&&r(a.get(jo)));break;case"delete":l||(r(a.get(pn)),Cn(e)&&r(a.get(jo)));break;case"set":Cn(e)&&r(a.get(pn));break}}bi()}function vn(e){const t=ue(e);return t===e?t:(Me(t,"iterate",is),ct(e)?t:t.map(ft))}function lo(e){return Me(e=ue(e),"iterate",is),e}function zt(e,t){return Vt(e)?kn(fn(e)?ft(t):t):ft(t)}const Iu={__proto__:null,[Symbol.iterator](){return xo(this,Symbol.iterator,e=>zt(this,e))},concat(...e){return vn(this).concat(...e.map(t=>Q(t)?vn(t):t))},entries(){return xo(this,"entries",e=>(e[1]=zt(this,e[1]),e))},every(e,t){return Ft(this,"every",e,t,void 0,arguments)},filter(e,t){return Ft(this,"filter",e,t,n=>n.map(s=>zt(this,s)),arguments)},find(e,t){return Ft(this,"find",e,t,n=>zt(this,n),arguments)},findIndex(e,t){return Ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ft(this,"findLast",e,t,n=>zt(this,n),arguments)},findLastIndex(e,t){return Ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return Co(this,"includes",e)},indexOf(...e){return Co(this,"indexOf",e)},join(e){return vn(this).join(e)},lastIndexOf(...e){return Co(this,"lastIndexOf",e)},map(e,t){return Ft(this,"map",e,t,void 0,arguments)},pop(){return Hn(this,"pop")},push(...e){return Hn(this,"push",e)},reduce(e,...t){return sa(this,"reduce",e,t)},reduceRight(e,...t){return sa(this,"reduceRight",e,t)},shift(){return Hn(this,"shift")},some(e,t){return Ft(this,"some",e,t,void 0,arguments)},splice(...e){return Hn(this,"splice",e)},toReversed(){return vn(this).toReversed()},toSorted(e){return vn(this).toSorted(e)},toSpliced(...e){return vn(this).toSpliced(...e)},unshift(...e){return Hn(this,"unshift",e)},values(){return xo(this,"values",e=>zt(this,e))}};function xo(e,t,n){const s=lo(e),o=s[t]();return s!==e&&!ct(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=n(i.value)),i}),o}const Eu=Array.prototype;function Ft(e,t,n,s,o,i){const a=lo(e),r=a!==e&&!ct(e),l=a[t];if(l!==Eu[t]){const d=l.apply(e,i);return r?ft(d):d}let u=n;a!==e&&(r?u=function(d,f){return n.call(this,zt(e,d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const c=l.call(a,u,s);return r&&o?o(c):c}function sa(e,t,n,s){const o=lo(e);let i=n;return o!==e&&(ct(e)?n.length>3&&(i=function(a,r,l){return n.call(this,a,r,l,e)}):i=function(a,r,l){return n.call(this,a,zt(e,r),l,e)}),o[t](i,...s)}function Co(e,t,n){const s=ue(e);Me(s,"iterate",is);const o=s[t](...n);return(o===-1||o===!1)&&Ei(n[0])?(n[0]=ue(n[0]),s[t](...n)):o}function Hn(e,t,n=[]){Lt(),wi();const s=ue(e)[t].apply(e,n);return bi(),Ut(),s}const _u=pi("__proto__,__v_isRef,__isVue"),Hr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nn));function xu(e){nn(e)||(e=String(e));const t=ue(this);return Me(t,"has",e),t.hasOwnProperty(e)}class Gr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?$u:Xr:i?Kr:zr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=Q(t);if(!o){let l;if(a&&(l=Iu[n]))return l;if(n==="hasOwnProperty")return xu}const r=Reflect.get(t,n,Re(t)?t:s);if((nn(n)?Hr.has(n):_u(n))||(o||Me(t,"get",n),i))return r;if(Re(r)){const l=a&&hi(n)?r:r.value;return o&&ye(l)?Ho(l):l}return ye(r)?o?Ho(r):co(r):r}}class Wr extends Gr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];const a=Q(t)&&hi(n);if(!this._isShallow){const u=Vt(i);if(!ct(s)&&!Vt(s)&&(i=ue(i),s=ue(s)),!a&&Re(i)&&!Re(s))return u||(i.value=s),!0}const r=a?Number(n)<t.length:de(t,n),l=Reflect.set(t,n,s,Re(t)?t:o);return t===ue(o)&&(r?en(s,i)&&Mt(t,"set",n,s):Mt(t,"add",n,s)),l}deleteProperty(t,n){const s=de(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Mt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!nn(n)||!Hr.has(n))&&Me(t,"has",n),s}ownKeys(t){return Me(t,"iterate",Q(t)?"length":pn),Reflect.ownKeys(t)}}class Cu extends Gr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Su=new Wr,Bu=new Cu,Nu=new Wr(!0);const qo=e=>e,Es=e=>Reflect.getPrototypeOf(e);function Pu(e,t,n){return function(...s){const o=this.__v_raw,i=ue(o),a=Cn(i),r=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=o[e](...s),c=n?qo:t?kn:ft;return!t&&Me(i,"iterate",l?jo:pn),$e(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:r?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function _s(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ku(e,t){const n={get(o){const i=this.__v_raw,a=ue(i),r=ue(o);e||(en(o,r)&&Me(a,"get",o),Me(a,"get",r));const{has:l}=Es(a),u=t?qo:e?kn:ft;if(l.call(a,o))return u(i.get(o));if(l.call(a,r))return u(i.get(r));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!e&&Me(ue(o),"iterate",pn),o.size},has(o){const i=this.__v_raw,a=ue(i),r=ue(o);return e||(en(o,r)&&Me(a,"has",o),Me(a,"has",r)),o===r?i.has(o):i.has(o)||i.has(r)},forEach(o,i){const a=this,r=a.__v_raw,l=ue(r),u=t?qo:e?kn:ft;return!e&&Me(l,"iterate",pn),r.forEach((c,d)=>o.call(i,u(c),u(d),a))}};return $e(n,e?{add:_s("add"),set:_s("set"),delete:_s("delete"),clear:_s("clear")}:{add(o){!t&&!ct(o)&&!Vt(o)&&(o=ue(o));const i=ue(this);return Es(i).has.call(i,o)||(i.add(o),Mt(i,"add",o,o)),this},set(o,i){!t&&!ct(i)&&!Vt(i)&&(i=ue(i));const a=ue(this),{has:r,get:l}=Es(a);let u=r.call(a,o);u||(o=ue(o),u=r.call(a,o));const c=l.call(a,o);return a.set(o,i),u?en(i,c)&&Mt(a,"set",o,i):Mt(a,"add",o,i),this},delete(o){const i=ue(this),{has:a,get:r}=Es(i);let l=a.call(i,o);l||(o=ue(o),l=a.call(i,o)),r&&r.call(i,o);const u=i.delete(o);return l&&Mt(i,"delete",o,void 0),u},clear(){const o=ue(this),i=o.size!==0,a=o.clear();return i&&Mt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Pu(o,e,t)}),n}function vi(e,t){const n=ku(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(de(n,o)&&o in s?n:s,o,i)}const Tu={get:vi(!1,!1)},Fu={get:vi(!1,!0)},Du={get:vi(!0,!1)};const zr=new WeakMap,Kr=new WeakMap,Xr=new WeakMap,$u=new WeakMap;function Mu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ou(e){return e.__v_skip||!Object.isExtensible(e)?0:Mu(cu(e))}function co(e){return Vt(e)?e:Ii(e,!1,Su,Tu,zr)}function Yr(e){return Ii(e,!1,Nu,Fu,Kr)}function Ho(e){return Ii(e,!0,Bu,Du,Xr)}function Ii(e,t,n,s,o){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ou(e);if(i===0)return e;const a=o.get(e);if(a)return a;const r=new Proxy(e,i===2?s:n);return o.set(e,r),r}function fn(e){return Vt(e)?fn(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function ct(e){return!!(e&&e.__v_isShallow)}function Ei(e){return e?!!e.__v_raw:!1}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function Ru(e){return!de(e,"__v_skip")&&Object.isExtensible(e)&&Tr(e,"__v_skip",!0),e}const ft=e=>ye(e)?co(e):e,kn=e=>ye(e)?Ho(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function qe(e){return Qr(e,!1)}function Lu(e){return Qr(e,!0)}function Qr(e,t){return Re(e)?e:new Uu(e,t)}class Uu{constructor(t,n){this.dep=new yi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ue(t),this._value=n?t:ft(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||ct(t)||Vt(t);t=s?t:ue(t),en(t,n)&&(this._rawValue=t,this._value=s?t:ft(t),this.dep.trigger())}}function me(e){return Re(e)?e.value:e}const Vu={get:(e,t,n)=>t==="__v_raw"?e:me(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Re(o)&&!Re(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Jr(e){return fn(e)?e:new Proxy(e,Vu)}class ju{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new yi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Rr(this,!0),!0}get value(){const t=this.dep.track();return Vr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function qu(e,t,n=!1){let s,o;return J(e)?s=e:(s=e.get,o=e.set),new ju(s,o,n)}const xs={},Ms=new WeakMap;let cn;function Hu(e,t=!1,n=cn){if(n){let s=Ms.get(n);s||Ms.set(n,s=[]),s.push(e)}}function Gu(e,t,n=ge){const{immediate:s,deep:o,once:i,scheduler:a,augmentJob:r,call:l}=n,u=b=>o?b:ct(b)||o===!1||o===0?Ot(b,1):Ot(b);let c,d,f,h,v=!1,C=!1;if(Re(e)?(d=()=>e.value,v=ct(e)):fn(e)?(d=()=>u(e),v=!0):Q(e)?(C=!0,v=e.some(b=>fn(b)||ct(b)),d=()=>e.map(b=>{if(Re(b))return b.value;if(fn(b))return u(b);if(J(b))return l?l(b,2):b()})):J(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){Lt();try{f()}finally{Ut()}}const b=cn;cn=c;try{return l?l(e,3,[h]):e(h)}finally{cn=b}}:d=Ct,t&&o){const b=d,T=o===!0?1/0:o;d=()=>Ot(b(),T)}const P=Au(),y=()=>{c.stop(),P&&P.active&&mi(P.effects,c)};if(i&&t){const b=t;t=(...T)=>{b(...T),y()}}let E=C?new Array(e.length).fill(xs):xs;const S=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(t){const T=c.run();if(o||v||(C?T.some((U,$)=>en(U,E[$])):en(T,E))){f&&f();const U=cn;cn=c;try{const $=[T,E===xs?void 0:C&&E[0]===xs?[]:E,h];E=T,l?l(t,3,$):t(...$)}finally{cn=U}}}else c.run()};return r&&r(S),c=new Mr(d),c.scheduler=a?()=>a(S,!1):S,h=b=>Hu(b,!1,c),f=c.onStop=()=>{const b=Ms.get(c);if(b){if(l)l(b,4);else for(const T of b)T();Ms.delete(c)}},t?s?S(!0):E=c.run():a?a(S.bind(null,!0),!0):c.run(),y.pause=c.pause.bind(c),y.resume=c.resume.bind(c),y.stop=y,y}function Ot(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Re(e))Ot(e.value,t,n);else if(Q(e))for(let s=0;s<e.length;s++)Ot(e[s],t,n);else if(Br(e)||Cn(e))e.forEach(s=>{Ot(s,t,n)});else if(kr(e)){for(const s in e)Ot(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ot(e[s],t,n)}return e}function ps(e,t,n,s){try{return s?e(...s):e()}catch(o){uo(o,t,n)}}function Bt(e,t,n,s){if(J(e)){const o=ps(e,t,n,s);return o&&Nr(o)&&o.catch(i=>{uo(i,t,n)}),o}if(Q(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Bt(e[i],t,n,s));return o}}function uo(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||ge;if(t){let r=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}r=r.parent}if(i){Lt(),ps(i,null,10,[e,l,u]),Ut();return}}Wu(e,n,o,s,a)}function Wu(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const He=[];let It=-1;const Sn=[];let Kt=null,In=0;const Zr=Promise.resolve();let Os=null;function el(e){const t=Os||Zr;return e?t.then(this?e.bind(this):e):t}function zu(e){let t=It+1,n=He.length;for(;t<n;){const s=t+n>>>1,o=He[s],i=as(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function _i(e){if(!(e.flags&1)){const t=as(e),n=He[He.length-1];!n||!(e.flags&2)&&t>=as(n)?He.push(e):He.splice(zu(t),0,e),e.flags|=1,tl()}}function tl(){Os||(Os=Zr.then(sl))}function Ku(e){Q(e)?Sn.push(...e):Kt&&e.id===-1?Kt.splice(In+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1),tl()}function oa(e,t,n=It+1){for(;n<He.length;n++){const s=He[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;He.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function nl(e){if(Sn.length){const t=[...new Set(Sn)].sort((n,s)=>as(n)-as(s));if(Sn.length=0,Kt){Kt.push(...t);return}for(Kt=t,In=0;In<Kt.length;In++){const n=Kt[In];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kt=null,In=0}}const as=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sl(e){try{for(It=0;It<He.length;It++){const t=He[It];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ps(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;It<He.length;It++){const t=He[It];t&&(t.flags&=-2)}It=-1,He.length=0,nl(),Os=null,(He.length||Sn.length)&&sl()}}let nt=null,ol=null;function Rs(e){const t=nt;return nt=e,ol=e&&e.type.__scopeId||null,t}function Fe(e,t=nt,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Vs(-1);const i=Rs(t);let a;try{a=e(...o)}finally{Rs(i),s._d&&Vs(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function il(e,t){if(nt===null)return e;const n=ho(nt),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,r,l=ge]=t[o];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(a),s.push({dir:i,instance:n,value:a,oldValue:void 0,arg:r,modifiers:l}))}return e}function an(e,t,n,s){const o=e.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const r=o[a];i&&(r.oldValue=i[a].value);let l=r.dir[s];l&&(Lt(),Bt(l,n,8,[e.el,r,e,t]),Ut())}}function ks(e,t){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[e]=t}}function St(e,t,n=!1){const s=Kd();if(s||Nn){let o=Nn?Nn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const Xu=Symbol.for("v-scx"),Yu=()=>St(Xu);function Bn(e,t,n){return al(e,t,n)}function al(e,t,n=ge){const{immediate:s,deep:o,flush:i,once:a}=n,r=$e({},n),l=t&&s||!t&&i!=="post";let u;if(ls){if(i==="sync"){const h=Yu();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ct,h.resume=Ct,h.pause=Ct,h}}const c=Oe;r.call=(h,v,C)=>Bt(h,c,v,C);let d=!1;i==="post"?r.scheduler=h=>{Ve(h,c&&c.suspense)}:i!=="sync"&&(d=!0,r.scheduler=(h,v)=>{v?h():_i(h)}),r.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Gu(e,t,r);return ls&&(u?u.push(f):l&&f()),f}function Qu(e,t,n){const s=this.proxy,o=xe(e)?e.includes(".")?rl(s,e):()=>s[e]:e.bind(s,s);let i;J(t)?i=t:(i=t.handler,n=t);const a=hs(this),r=al(o,i.bind(s),n);return a(),r}function rl(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const ll=Symbol("_vte"),Ju=e=>e.__isTeleport,Jn=e=>e&&(e.disabled||e.disabled===""),ia=e=>e&&(e.defer||e.defer===""),aa=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ra=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Go=(e,t)=>{const n=e&&e.to;return xe(n)?t?t(n):null:n},cl={name:"Teleport",__isTeleport:!0,process(e,t,n,s,o,i,a,r,l,u){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:v,createText:C,createComment:P}}=u,y=Jn(t.props);let{shapeFlag:E,children:S,dynamicChildren:b}=t;if(e==null){const T=t.el=C(""),U=t.anchor=C("");h(T,n,s),h(U,n,s);const $=(q,K)=>{E&16&&c(S,q,K,o,i,a,r,l)},X=()=>{const q=t.target=Go(t.props,v),K=ul(q,t,C,h);q&&(a!=="svg"&&aa(q)?a="svg":a!=="mathml"&&ra(q)&&(a="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(q),y||($(q,K),Ts(t,!1)))};y&&($(n,U),Ts(t,!0)),ia(t.props)?(t.el.__isMounted=!1,Ve(()=>{X(),delete t.el.__isMounted},i)):X()}else{if(ia(t.props)&&e.el.__isMounted===!1){Ve(()=>{cl.process(e,t,n,s,o,i,a,r,l,u)},i);return}t.el=e.el,t.targetStart=e.targetStart;const T=t.anchor=e.anchor,U=t.target=e.target,$=t.targetAnchor=e.targetAnchor,X=Jn(e.props),q=X?n:U,K=X?T:$;if(a==="svg"||aa(U)?a="svg":(a==="mathml"||ra(U))&&(a="mathml"),b?(f(e.dynamicChildren,b,q,o,i,a,r),Ni(e,t,!0)):l||d(e,t,q,K,o,i,a,r,!1),y)X?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Cs(t,n,T,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const te=t.target=Go(t.props,v);te&&Cs(t,te,null,u,0)}else X&&Cs(t,U,$,u,1);Ts(t,y)}},remove(e,t,n,{um:s,o:{remove:o}},i){const{shapeFlag:a,children:r,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=e;if(d&&(o(u),o(c)),i&&o(l),a&16){const h=i||!Jn(f);for(let v=0;v<r.length;v++){const C=r[v];s(C,t,n,h,!!C.dynamicChildren)}}},move:Cs,hydrate:Zu};function Cs(e,t,n,{o:{insert:s},m:o},i=2){i===0&&s(e.targetAnchor,t,n);const{el:a,anchor:r,shapeFlag:l,children:u,props:c}=e,d=i===2;if(d&&s(a,t,n),(!d||Jn(c))&&l&16)for(let f=0;f<u.length;f++)o(u[f],t,n,2);d&&s(r,t,n)}function Zu(e,t,n,s,o,i,{o:{nextSibling:a,parentNode:r,querySelector:l,insert:u,createText:c}},d){function f(C,P,y,E){P.anchor=d(a(C),P,r(C),n,s,o,i),P.targetStart=y,P.targetAnchor=E}const h=t.target=Go(t.props,l),v=Jn(t.props);if(h){const C=h._lpa||h.firstChild;if(t.shapeFlag&16)if(v)f(e,t,C,C&&a(C));else{t.anchor=a(e);let P=C;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")t.targetStart=P;else if(P.data==="teleport anchor"){t.targetAnchor=P,h._lpa=t.targetAnchor&&a(t.targetAnchor);break}}P=a(P)}t.targetAnchor||ul(h,t,c,u),d(C&&a(C),t,h,n,s,o,i)}Ts(t,v)}else v&&t.shapeFlag&16&&f(e,t,e,a(e));return t.anchor&&a(t.anchor)}const ed=cl;function Ts(e,t){const n=e.ctx;if(n&&n.ut){let s,o;for(t?(s=e.el,o=e.anchor):(s=e.targetStart,o=e.targetAnchor);s&&s!==o;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function ul(e,t,n,s){const o=t.targetStart=n(""),i=t.targetAnchor=n("");return o[ll]=i,e&&(s(o,e),s(i,e)),i}const td=Symbol("_leaveCb");function xi(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xi(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function dl(e,t){return J(e)?$e({name:e.name},t,{setup:e}):e}function pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ls=new WeakMap;function Zn(e,t,n,s,o=!1){if(Q(e)){e.forEach((v,C)=>Zn(v,t&&(Q(t)?t[C]:t),n,s,o));return}if(es(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Zn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?ho(s.component):s.el,a=o?null:i,{i:r,r:l}=e,u=t&&t.r,c=r.refs===ge?r.refs={}:r.refs,d=r.setupState,f=ue(d),h=d===ge?Sr:v=>de(f,v);if(u!=null&&u!==l){if(la(t),xe(u))c[u]=null,h(u)&&(d[u]=null);else if(Re(u)){u.value=null;const v=t;v.k&&(c[v.k]=null)}}if(J(l))ps(l,r,12,[a,c]);else{const v=xe(l),C=Re(l);if(v||C){const P=()=>{if(e.f){const y=v?h(l)?d[l]:c[l]:l.value;if(o)Q(y)&&mi(y,i);else if(Q(y))y.includes(i)||y.push(i);else if(v)c[l]=[i],h(l)&&(d[l]=c[l]);else{const E=[i];l.value=E,e.k&&(c[e.k]=E)}}else v?(c[l]=a,h(l)&&(d[l]=a)):C&&(l.value=a,e.k&&(c[e.k]=a))};if(a){const y=()=>{P(),Ls.delete(e)};y.id=-1,Ls.set(e,y),Ve(y,n)}else la(e),P()}}}function la(e){const t=Ls.get(e);t&&(t.flags|=8,Ls.delete(e))}ao().requestIdleCallback;ao().cancelIdleCallback;const es=e=>!!e.type.__asyncLoader,fl=e=>e.type.__isKeepAlive;function nd(e,t){ml(e,"a",t)}function sd(e,t){ml(e,"da",t)}function ml(e,t,n=Oe){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(po(t,s,n),n){let o=n.parent;for(;o&&o.parent;)fl(o.parent.vnode)&&od(s,t,n,o),o=o.parent}}function od(e,t,n,s){const o=po(t,e,s,!0);gl(()=>{mi(s[t],o)},n)}function po(e,t,n=Oe,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Lt();const r=hs(n),l=Bt(t,n,e,a);return r(),Ut(),l});return s?o.unshift(i):o.push(i),i}}const qt=e=>(t,n=Oe)=>{(!ls||e==="sp")&&po(e,(...s)=>t(...s),n)},id=qt("bm"),hl=qt("m"),ad=qt("bu"),rd=qt("u"),Ci=qt("bum"),gl=qt("um"),ld=qt("sp"),cd=qt("rtg"),ud=qt("rtc");function dd(e,t=Oe){po("ec",e,t)}const pd="components";function fs(e,t){return md(pd,e,!0,t)||e}const fd=Symbol.for("v-ndc");function md(e,t,n=!0,s=!1){const o=nt||Oe;if(o){const i=o.type;{const r=Zd(i,!1);if(r&&(r===t||r===ut(t)||r===io(ut(t))))return i}const a=ca(o[e]||i[e],t)||ca(o.appContext[e],t);return!a&&s?i:a}}function ca(e,t){return e&&(e[t]||e[ut(t)]||e[io(ut(t))])}function ke(e,t,n,s){let o;const i=n,a=Q(e);if(a||xe(e)){const r=a&&fn(e);let l=!1,u=!1;r&&(l=!ct(e),u=Vt(e),e=lo(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?kn(ft(e[c])):ft(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let r=0;r<e;r++)o[r]=t(r+1,r,void 0,i)}else if(ye(e))if(e[Symbol.iterator])o=Array.from(e,(r,l)=>t(r,l,void 0,i));else{const r=Object.keys(e);o=new Array(r.length);for(let l=0,u=r.length;l<u;l++){const c=r[l];o[l]=t(e[c],c,l,i)}}else o=[];return o}const Wo=e=>e?Dl(e)?ho(e):Wo(e.parent):null,ts=$e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wo(e.parent),$root:e=>Wo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bl(e),$forceUpdate:e=>e.f||(e.f=()=>{_i(e.update)}),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>Qu.bind(e)}),So=(e,t)=>e!==ge&&!e.__isScriptSetup&&de(e,t),hd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:a,type:r,appContext:l}=e;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(So(s,t))return a[t]=1,s[t];if(o!==ge&&de(o,t))return a[t]=2,o[t];if(de(i,t))return a[t]=3,i[t];if(n!==ge&&de(n,t))return a[t]=4,n[t];zo&&(a[t]=0)}}const u=ts[t];let c,d;if(u)return t==="$attrs"&&Me(e.attrs,"get",""),u(e);if((c=r.__cssModules)&&(c=c[t]))return c;if(n!==ge&&de(n,t))return a[t]=4,n[t];if(d=l.config.globalProperties,de(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return So(o,t)?(o[t]=n,!0):s!==ge&&de(s,t)?(s[t]=n,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:i,type:a}},r){let l;return!!(n[r]||e!==ge&&r[0]!=="$"&&de(e,r)||So(t,r)||de(i,r)||de(s,r)||de(ts,r)||de(o.config.globalProperties,r)||(l=a.__cssModules)&&l[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:de(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ua(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zo=!0;function gd(e){const t=bl(e),n=e.proxy,s=e.ctx;zo=!1,t.beforeCreate&&da(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:r,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:C,deactivated:P,beforeDestroy:y,beforeUnmount:E,destroyed:S,unmounted:b,render:T,renderTracked:U,renderTriggered:$,errorCaptured:X,serverPrefetch:q,expose:K,inheritAttrs:te,components:Se,directives:ee,filters:pe}=t;if(u&&wd(u,s,null),a)for(const he in a){const le=a[he];J(le)&&(s[he]=le.bind(n))}if(o){const he=o.call(n,n);ye(he)&&(e.data=co(he))}if(zo=!0,i)for(const he in i){const le=i[he],Tt=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):Ct,Ht=!J(le)&&J(le.set)?le.set.bind(n):Ct,gt=Ee({get:Tt,set:Ht});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Ke=>gt.value=Ke})}if(r)for(const he in r)wl(r[he],s,n,he);if(l){const he=J(l)?l.call(n):l;Reflect.ownKeys(he).forEach(le=>{ks(le,he[le])})}c&&da(c,e,"c");function ve(he,le){Q(le)?le.forEach(Tt=>he(Tt.bind(n))):le&&he(le.bind(n))}if(ve(id,d),ve(hl,f),ve(ad,h),ve(rd,v),ve(nd,C),ve(sd,P),ve(dd,X),ve(ud,U),ve(cd,$),ve(Ci,E),ve(gl,b),ve(ld,q),Q(K))if(K.length){const he=e.exposed||(e.exposed={});K.forEach(le=>{Object.defineProperty(he,le,{get:()=>n[le],set:Tt=>n[le]=Tt,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===Ct&&(e.render=T),te!=null&&(e.inheritAttrs=te),Se&&(e.components=Se),ee&&(e.directives=ee),q&&pl(e)}function wd(e,t,n=Ct){Q(e)&&(e=Ko(e));for(const s in e){const o=e[s];let i;ye(o)?"default"in o?i=St(o.from||s,o.default,!0):i=St(o.from||s):i=St(o),Re(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[s]=i}}function da(e,t,n){Bt(Q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function wl(e,t,n,s){let o=s.includes(".")?rl(n,s):()=>n[s];if(xe(e)){const i=t[e];J(i)&&Bn(o,i)}else if(J(e))Bn(o,e.bind(n));else if(ye(e))if(Q(e))e.forEach(i=>wl(i,t,n,s));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Bn(o,i,e)}}function bl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,r=i.get(t);let l;return r?l=r:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(u=>Us(l,u,a,!0)),Us(l,t,a)),ye(t)&&i.set(t,l),l}function Us(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&Us(e,i,n,!0),o&&o.forEach(a=>Us(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const r=bd[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const bd={data:pa,props:fa,emits:fa,methods:Kn,computed:Kn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Kn,directives:Kn,watch:yd,provide:pa,inject:Ad};function pa(e,t){return t?e?function(){return $e(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function Ad(e,t){return Kn(Ko(e),Ko(t))}function Ko(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?$e(Object.create(null),e,t):t}function fa(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:$e(Object.create(null),ua(e),ua(t??{})):t}function yd(e,t){if(!e)return t;if(!t)return e;const n=$e(Object.create(null),e);for(const s in t)n[s]=Ue(e[s],t[s]);return n}function Al(){return{app:null,config:{isNativeTag:Sr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vd=0;function Id(e,t){return function(s,o=null){J(s)||(s=$e({},s)),o!=null&&!ye(o)&&(o=null);const i=Al(),a=new WeakSet,r=[];let l=!1;const u=i.app={_uid:vd++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:tp,get config(){return i.config},set config(c){},use(c,...d){return a.has(c)||(c&&J(c.install)?(a.add(c),c.install(u,...d)):J(c)&&(a.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||Ae(s,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,u._container=c,c.__vue_app__=u,ho(h.component)}},onUnmount(c){r.push(c)},unmount(){l&&(Bt(r,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=Nn;Nn=u;try{return c()}finally{Nn=d}}};return u}}let Nn=null;const Ed=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ut(t)}Modifiers`]||e[`${gn(t)}Modifiers`];function _d(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ge;let o=n;const i=t.startsWith("update:"),a=i&&Ed(s,t.slice(7));a&&(a.trim&&(o=n.map(c=>xe(c)?c.trim():c)),a.number&&(o=n.map(gi)));let r,l=s[r=Io(t)]||s[r=Io(ut(t))];!l&&i&&(l=s[r=Io(gn(t))]),l&&Bt(l,e,6,o);const u=s[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Bt(u,e,6,o)}}const xd=new WeakMap;function yl(e,t,n=!1){const s=n?xd:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let a={},r=!1;if(!J(e)){const l=u=>{const c=yl(u,t,!0);c&&(r=!0,$e(a,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!r?(ye(e)&&s.set(e,null),null):(Q(i)?i.forEach(l=>a[l]=null):$e(a,i),ye(e)&&s.set(e,a),a)}function fo(e,t){return!e||!no(t)?!1:(t=t.slice(2).replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,gn(t))||de(e,t))}function ma(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:a,attrs:r,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:v,inheritAttrs:C}=e,P=Rs(e);let y,E;try{if(n.shapeFlag&4){const b=o||s,T=b;y=_t(u.call(T,b,c,d,h,f,v)),E=r}else{const b=t;y=_t(b.length>1?b(d,{attrs:r,slots:a,emit:l}):b(d,null)),E=t.props?r:Cd(r)}}catch(b){ns.length=0,uo(b,e,1),y=Ae(tn)}let S=y;if(E&&C!==!1){const b=Object.keys(E),{shapeFlag:T}=S;b.length&&T&7&&(i&&b.some(fi)&&(E=Sd(E,i)),S=Tn(S,E,!1,!0))}return n.dirs&&(S=Tn(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&xi(S,n.transition),y=S,Rs(P),y}const Cd=e=>{let t;for(const n in e)(n==="class"||n==="style"||no(n))&&((t||(t={}))[n]=e[n]);return t},Sd=(e,t)=>{const n={};for(const s in e)(!fi(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Bd(e,t,n){const{props:s,children:o,component:i}=e,{props:a,children:r,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ha(s,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(a[f]!==s[f]&&!fo(u,f))return!0}}}else return(o||r)&&(!r||!r.$stable)?!0:s===a?!1:s?a?ha(s,a,u):!0:!!a;return!1}function ha(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(t[i]!==e[i]&&!fo(n,i))return!0}return!1}function Nd({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const vl={},Il=()=>Object.create(vl),El=e=>Object.getPrototypeOf(e)===vl;function Pd(e,t,n,s=!1){const o={},i=Il();e.propsDefaults=Object.create(null),_l(e,t,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:Yr(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function kd(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,r=ue(o),[l]=e.propsOptions;let u=!1;if((s||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(fo(e.emitsOptions,f))continue;const h=t[f];if(l)if(de(i,f))h!==i[f]&&(i[f]=h,u=!0);else{const v=ut(f);o[v]=Xo(l,r,v,h,e,!1)}else h!==i[f]&&(i[f]=h,u=!0)}}}else{_l(e,t,o,i)&&(u=!0);let c;for(const d in r)(!t||!de(t,d)&&((c=gn(d))===d||!de(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Xo(l,r,d,void 0,e,!0)):delete o[d]);if(i!==r)for(const d in i)(!t||!de(t,d))&&(delete i[d],u=!0)}u&&Mt(e.attrs,"set","")}function _l(e,t,n,s){const[o,i]=e.propsOptions;let a=!1,r;if(t)for(let l in t){if(Xn(l))continue;const u=t[l];let c;o&&de(o,c=ut(l))?!i||!i.includes(c)?n[c]=u:(r||(r={}))[c]=u:fo(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,a=!0)}if(i){const l=ue(n),u=r||ge;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Xo(o,l,d,u[d],e,!de(u,d))}}return a}function Xo(e,t,n,s,o,i){const a=e[n];if(a!=null){const r=de(a,"default");if(r&&s===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&J(l)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const c=hs(o);s=u[n]=l.call(null,t),c()}}else s=l;o.ce&&o.ce._setProp(n,s)}a[0]&&(i&&!r?s=!1:a[1]&&(s===""||s===gn(n))&&(s=!0))}return s}const Td=new WeakMap;function xl(e,t,n=!1){const s=n?Td:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,a={},r=[];let l=!1;if(!J(e)){const c=d=>{l=!0;const[f,h]=xl(d,t,!0);$e(a,f),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ye(e)&&s.set(e,xn),xn;if(Q(i))for(let c=0;c<i.length;c++){const d=ut(i[c]);ga(d)&&(a[d]=ge)}else if(i)for(const c in i){const d=ut(c);if(ga(d)){const f=i[c],h=a[d]=Q(f)||J(f)?{type:f}:$e({},f),v=h.type;let C=!1,P=!0;if(Q(v))for(let y=0;y<v.length;++y){const E=v[y],S=J(E)&&E.name;if(S==="Boolean"){C=!0;break}else S==="String"&&(P=!1)}else C=J(v)&&v.name==="Boolean";h[0]=C,h[1]=P,(C||de(h,"default"))&&r.push(d)}}const u=[a,r];return ye(e)&&s.set(e,u),u}function ga(e){return e[0]!=="$"&&!Xn(e)}const Si=e=>e==="_"||e==="_ctx"||e==="$stable",Bi=e=>Q(e)?e.map(_t):[_t(e)],Fd=(e,t,n)=>{if(t._n)return t;const s=Fe((...o)=>Bi(t(...o)),n);return s._c=!1,s},Cl=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Si(o))continue;const i=e[o];if(J(i))t[o]=Fd(o,i,s);else if(i!=null){const a=Bi(i);t[o]=()=>a}}},Sl=(e,t)=>{const n=Bi(t);e.slots.default=()=>n},Bl=(e,t,n)=>{for(const s in t)(n||!Si(s))&&(e[s]=t[s])},Dd=(e,t,n)=>{const s=e.slots=Il();if(e.vnode.shapeFlag&32){const o=t._;o?(Bl(s,t,n),n&&Tr(s,"_",o,!0)):Cl(t,s)}else t&&Sl(e,t)},$d=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,a=ge;if(s.shapeFlag&32){const r=t._;r?n&&r===1?i=!1:Bl(o,t,n):(i=!t.$stable,Cl(t,o)),a=t}else t&&(Sl(e,t),a={default:1});if(i)for(const r in o)!Si(r)&&a[r]==null&&delete o[r]},Ve=Ud;function Md(e){return Od(e)}function Od(e,t){const n=ao();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:a,createText:r,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=Ct,insertStaticContent:v}=e,C=(p,m,w,I=null,B=null,_=null,M=void 0,D=null,F=!!m.dynamicChildren)=>{if(p===m)return;p&&!Gn(p,m)&&(I=x(p),Ke(p,B,_,!0),p=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:N,ref:W,shapeFlag:R}=m;switch(N){case mo:P(p,m,w,I);break;case tn:y(p,m,w,I);break;case Fs:p==null&&E(m,w,I,M);break;case oe:Se(p,m,w,I,B,_,M,D,F);break;default:R&1?T(p,m,w,I,B,_,M,D,F):R&6?ee(p,m,w,I,B,_,M,D,F):(R&64||R&128)&&N.process(p,m,w,I,B,_,M,D,F,H)}W!=null&&B?Zn(W,p&&p.ref,_,m||p,!m):W==null&&p&&p.ref!=null&&Zn(p.ref,null,_,p,!0)},P=(p,m,w,I)=>{if(p==null)s(m.el=r(m.children),w,I);else{const B=m.el=p.el;m.children!==p.children&&u(B,m.children)}},y=(p,m,w,I)=>{p==null?s(m.el=l(m.children||""),w,I):m.el=p.el},E=(p,m,w,I)=>{[p.el,p.anchor]=v(p.children,m,w,I,p.el,p.anchor)},S=({el:p,anchor:m},w,I)=>{let B;for(;p&&p!==m;)B=f(p),s(p,w,I),p=B;s(m,w,I)},b=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=f(p),o(p),p=w;o(m)},T=(p,m,w,I,B,_,M,D,F)=>{if(m.type==="svg"?M="svg":m.type==="math"&&(M="mathml"),p==null)U(m,w,I,B,_,M,D,F);else{const N=p.el&&p.el._isVueCE?p.el:null;try{N&&N._beginPatch(),q(p,m,B,_,M,D,F)}finally{N&&N._endPatch()}}},U=(p,m,w,I,B,_,M,D)=>{let F,N;const{props:W,shapeFlag:R,transition:G,dirs:Y}=p;if(F=p.el=a(p.type,_,W&&W.is,W),R&8?c(F,p.children):R&16&&X(p.children,F,null,I,B,Bo(p,_),M,D),Y&&an(p,null,I,"created"),$(F,p,p.scopeId,M,I),W){for(const we in W)we!=="value"&&!Xn(we)&&i(F,we,null,W[we],_,I);"value"in W&&i(F,"value",null,W.value,_),(N=W.onVnodeBeforeMount)&&yt(N,I,p)}Y&&an(p,null,I,"beforeMount");const se=Rd(B,G);se&&G.beforeEnter(F),s(F,m,w),((N=W&&W.onVnodeMounted)||se||Y)&&Ve(()=>{N&&yt(N,I,p),se&&G.enter(F),Y&&an(p,null,I,"mounted")},B)},$=(p,m,w,I,B)=>{if(w&&h(p,w),I)for(let _=0;_<I.length;_++)h(p,I[_]);if(B){let _=B.subTree;if(m===_||kl(_.type)&&(_.ssContent===m||_.ssFallback===m)){const M=B.vnode;$(p,M,M.scopeId,M.slotScopeIds,B.parent)}}},X=(p,m,w,I,B,_,M,D,F=0)=>{for(let N=F;N<p.length;N++){const W=p[N]=D?Xt(p[N]):_t(p[N]);C(null,W,m,w,I,B,_,M,D)}},q=(p,m,w,I,B,_,M)=>{const D=m.el=p.el;let{patchFlag:F,dynamicChildren:N,dirs:W}=m;F|=p.patchFlag&16;const R=p.props||ge,G=m.props||ge;let Y;if(w&&rn(w,!1),(Y=G.onVnodeBeforeUpdate)&&yt(Y,w,m,p),W&&an(m,p,w,"beforeUpdate"),w&&rn(w,!0),(R.innerHTML&&G.innerHTML==null||R.textContent&&G.textContent==null)&&c(D,""),N?K(p.dynamicChildren,N,D,w,I,Bo(m,B),_):M||le(p,m,D,null,w,I,Bo(m,B),_,!1),F>0){if(F&16)te(D,R,G,w,B);else if(F&2&&R.class!==G.class&&i(D,"class",null,G.class,B),F&4&&i(D,"style",R.style,G.style,B),F&8){const se=m.dynamicProps;for(let we=0;we<se.length;we++){const fe=se[we],Xe=R[fe],Ye=G[fe];(Ye!==Xe||fe==="value")&&i(D,fe,Xe,Ye,B,w)}}F&1&&p.children!==m.children&&c(D,m.children)}else!M&&N==null&&te(D,R,G,w,B);((Y=G.onVnodeUpdated)||W)&&Ve(()=>{Y&&yt(Y,w,m,p),W&&an(m,p,w,"updated")},I)},K=(p,m,w,I,B,_,M)=>{for(let D=0;D<m.length;D++){const F=p[D],N=m[D],W=F.el&&(F.type===oe||!Gn(F,N)||F.shapeFlag&198)?d(F.el):w;C(F,N,W,null,I,B,_,M,!0)}},te=(p,m,w,I,B)=>{if(m!==w){if(m!==ge)for(const _ in m)!Xn(_)&&!(_ in w)&&i(p,_,m[_],null,B,I);for(const _ in w){if(Xn(_))continue;const M=w[_],D=m[_];M!==D&&_!=="value"&&i(p,_,D,M,B,I)}"value"in w&&i(p,"value",m.value,w.value,B)}},Se=(p,m,w,I,B,_,M,D,F)=>{const N=m.el=p?p.el:r(""),W=m.anchor=p?p.anchor:r("");let{patchFlag:R,dynamicChildren:G,slotScopeIds:Y}=m;Y&&(D=D?D.concat(Y):Y),p==null?(s(N,w,I),s(W,w,I),X(m.children||[],w,W,B,_,M,D,F)):R>0&&R&64&&G&&p.dynamicChildren&&p.dynamicChildren.length===G.length?(K(p.dynamicChildren,G,w,B,_,M,D),(m.key!=null||B&&m===B.subTree)&&Ni(p,m,!0)):le(p,m,w,W,B,_,M,D,F)},ee=(p,m,w,I,B,_,M,D,F)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?B.ctx.activate(m,w,I,M,F):pe(m,w,I,B,_,M,F):ze(p,m,F)},pe=(p,m,w,I,B,_,M)=>{const D=p.component=zd(p,I,B);if(fl(p)&&(D.ctx.renderer=H),Xd(D,!1,M),D.asyncDep){if(B&&B.registerDep(D,ve,M),!p.el){const F=D.subTree=Ae(tn);y(null,F,m,w),p.placeholder=F.el}}else ve(D,p,m,w,B,_,M)},ze=(p,m,w)=>{const I=m.component=p.component;if(Bd(p,m,w))if(I.asyncDep&&!I.asyncResolved){he(I,m,w);return}else I.next=m,I.update();else m.el=p.el,I.vnode=m},ve=(p,m,w,I,B,_,M)=>{const D=()=>{if(p.isMounted){let{next:R,bu:G,u:Y,parent:se,vnode:we}=p;{const bt=Nl(p);if(bt){R&&(R.el=we.el,he(p,R,M)),bt.asyncDep.then(()=>{p.isUnmounted||D()});return}}let fe=R,Xe;rn(p,!1),R?(R.el=we.el,he(p,R,M)):R=we,G&&Ps(G),(Xe=R.props&&R.props.onVnodeBeforeUpdate)&&yt(Xe,se,R,we),rn(p,!0);const Ye=ma(p),wt=p.subTree;p.subTree=Ye,C(wt,Ye,d(wt.el),x(wt),p,B,_),R.el=Ye.el,fe===null&&Nd(p,Ye.el),Y&&Ve(Y,B),(Xe=R.props&&R.props.onVnodeUpdated)&&Ve(()=>yt(Xe,se,R,we),B)}else{let R;const{el:G,props:Y}=m,{bm:se,m:we,parent:fe,root:Xe,type:Ye}=p,wt=es(m);rn(p,!1),se&&Ps(se),!wt&&(R=Y&&Y.onVnodeBeforeMount)&&yt(R,fe,m),rn(p,!0);{Xe.ce&&Xe.ce._def.shadowRoot!==!1&&Xe.ce._injectChildStyle(Ye);const bt=p.subTree=ma(p);C(null,bt,w,I,p,B,_),m.el=bt.el}if(we&&Ve(we,B),!wt&&(R=Y&&Y.onVnodeMounted)){const bt=m;Ve(()=>yt(R,fe,bt),B)}(m.shapeFlag&256||fe&&es(fe.vnode)&&fe.vnode.shapeFlag&256)&&p.a&&Ve(p.a,B),p.isMounted=!0,m=w=I=null}};p.scope.on();const F=p.effect=new Mr(D);p.scope.off();const N=p.update=F.run.bind(F),W=p.job=F.runIfDirty.bind(F);W.i=p,W.id=p.uid,F.scheduler=()=>_i(W),rn(p,!0),N()},he=(p,m,w)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,kd(p,m.props,I,w),$d(p,m.children,w),Lt(),oa(p),Ut()},le=(p,m,w,I,B,_,M,D,F=!1)=>{const N=p&&p.children,W=p?p.shapeFlag:0,R=m.children,{patchFlag:G,shapeFlag:Y}=m;if(G>0){if(G&128){Ht(N,R,w,I,B,_,M,D,F);return}else if(G&256){Tt(N,R,w,I,B,_,M,D,F);return}}Y&8?(W&16&&rt(N,B,_),R!==N&&c(w,R)):W&16?Y&16?Ht(N,R,w,I,B,_,M,D,F):rt(N,B,_,!0):(W&8&&c(w,""),Y&16&&X(R,w,I,B,_,M,D,F))},Tt=(p,m,w,I,B,_,M,D,F)=>{p=p||xn,m=m||xn;const N=p.length,W=m.length,R=Math.min(N,W);let G;for(G=0;G<R;G++){const Y=m[G]=F?Xt(m[G]):_t(m[G]);C(p[G],Y,w,null,B,_,M,D,F)}N>W?rt(p,B,_,!0,!1,R):X(m,w,I,B,_,M,D,F,R)},Ht=(p,m,w,I,B,_,M,D,F)=>{let N=0;const W=m.length;let R=p.length-1,G=W-1;for(;N<=R&&N<=G;){const Y=p[N],se=m[N]=F?Xt(m[N]):_t(m[N]);if(Gn(Y,se))C(Y,se,w,null,B,_,M,D,F);else break;N++}for(;N<=R&&N<=G;){const Y=p[R],se=m[G]=F?Xt(m[G]):_t(m[G]);if(Gn(Y,se))C(Y,se,w,null,B,_,M,D,F);else break;R--,G--}if(N>R){if(N<=G){const Y=G+1,se=Y<W?m[Y].el:I;for(;N<=G;)C(null,m[N]=F?Xt(m[N]):_t(m[N]),w,se,B,_,M,D,F),N++}}else if(N>G)for(;N<=R;)Ke(p[N],B,_,!0),N++;else{const Y=N,se=N,we=new Map;for(N=se;N<=G;N++){const et=m[N]=F?Xt(m[N]):_t(m[N]);et.key!=null&&we.set(et.key,N)}let fe,Xe=0;const Ye=G-se+1;let wt=!1,bt=0;const qn=new Array(Ye);for(N=0;N<Ye;N++)qn[N]=0;for(N=Y;N<=R;N++){const et=p[N];if(Xe>=Ye){Ke(et,B,_,!0);continue}let At;if(et.key!=null)At=we.get(et.key);else for(fe=se;fe<=G;fe++)if(qn[fe-se]===0&&Gn(et,m[fe])){At=fe;break}At===void 0?Ke(et,B,_,!0):(qn[At-se]=N+1,At>=bt?bt=At:wt=!0,C(et,m[At],w,null,B,_,M,D,F),Xe++)}const Ji=wt?Ld(qn):xn;for(fe=Ji.length-1,N=Ye-1;N>=0;N--){const et=se+N,At=m[et],Zi=m[et+1],ea=et+1<W?Zi.el||Pl(Zi):I;qn[N]===0?C(null,At,w,ea,B,_,M,D,F):wt&&(fe<0||N!==Ji[fe]?gt(At,w,ea,2):fe--)}}},gt=(p,m,w,I,B=null)=>{const{el:_,type:M,transition:D,children:F,shapeFlag:N}=p;if(N&6){gt(p.component.subTree,m,w,I);return}if(N&128){p.suspense.move(m,w,I);return}if(N&64){M.move(p,m,w,H);return}if(M===oe){s(_,m,w);for(let R=0;R<F.length;R++)gt(F[R],m,w,I);s(p.anchor,m,w);return}if(M===Fs){S(p,m,w);return}if(I!==2&&N&1&&D)if(I===0)D.beforeEnter(_),s(_,m,w),Ve(()=>D.enter(_),B);else{const{leave:R,delayLeave:G,afterLeave:Y}=D,se=()=>{p.ctx.isUnmounted?o(_):s(_,m,w)},we=()=>{_._isLeaving&&_[td](!0),R(_,()=>{se(),Y&&Y()})};G?G(_,se,we):we()}else s(_,m,w)},Ke=(p,m,w,I=!1,B=!1)=>{const{type:_,props:M,ref:D,children:F,dynamicChildren:N,shapeFlag:W,patchFlag:R,dirs:G,cacheIndex:Y}=p;if(R===-2&&(B=!1),D!=null&&(Lt(),Zn(D,null,w,p,!0),Ut()),Y!=null&&(m.renderCache[Y]=void 0),W&256){m.ctx.deactivate(p);return}const se=W&1&&G,we=!es(p);let fe;if(we&&(fe=M&&M.onVnodeBeforeUnmount)&&yt(fe,m,p),W&6)on(p.component,w,I);else{if(W&128){p.suspense.unmount(w,I);return}se&&an(p,null,m,"beforeUnmount"),W&64?p.type.remove(p,m,w,H,I):N&&!N.hasOnce&&(_!==oe||R>0&&R&64)?rt(N,m,w,!1,!0):(_===oe&&R&384||!B&&W&16)&&rt(F,m,w),I&&An(p)}(we&&(fe=M&&M.onVnodeUnmounted)||se)&&Ve(()=>{fe&&yt(fe,m,p),se&&an(p,null,m,"unmounted")},w)},An=p=>{const{type:m,el:w,anchor:I,transition:B}=p;if(m===oe){yn(w,I);return}if(m===Fs){b(p);return}const _=()=>{o(w),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(p.shapeFlag&1&&B&&!B.persisted){const{leave:M,delayLeave:D}=B,F=()=>M(w,_);D?D(p.el,_,F):F()}else _()},yn=(p,m)=>{let w;for(;p!==m;)w=f(p),o(p),p=w;o(m)},on=(p,m,w)=>{const{bum:I,scope:B,job:_,subTree:M,um:D,m:F,a:N}=p;wa(F),wa(N),I&&Ps(I),B.stop(),_&&(_.flags|=8,Ke(M,p,m,w)),D&&Ve(D,m),Ve(()=>{p.isUnmounted=!0},m)},rt=(p,m,w,I=!1,B=!1,_=0)=>{for(let M=_;M<p.length;M++)Ke(p[M],m,w,I,B)},x=p=>{if(p.shapeFlag&6)return x(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=f(p.anchor||p.el),w=m&&m[ll];return w?f(w):m};let V=!1;const O=(p,m,w)=>{let I;p==null?m._vnode&&(Ke(m._vnode,null,null,!0),I=m._vnode.component):C(m._vnode||null,p,m,null,null,null,w),m._vnode=p,V||(V=!0,oa(I),nl(),V=!1)},H={p:C,um:Ke,m:gt,r:An,mt:pe,mc:X,pc:le,pbc:K,n:x,o:e};return{render:O,hydrate:void 0,createApp:Id(O)}}function Bo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Rd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ni(e,t,n=!1){const s=e.children,o=t.children;if(Q(s)&&Q(o))for(let i=0;i<s.length;i++){const a=s[i];let r=o[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=o[i]=Xt(o[i]),r.el=a.el),!n&&r.patchFlag!==-2&&Ni(a,r)),r.type===mo&&(r.patchFlag!==-1?r.el=a.el:r.__elIndex=i+(e.type===oe?1:0)),r.type===tn&&!r.el&&(r.el=a.el)}}function Ld(e){const t=e.slice(),n=[0];let s,o,i,a,r;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(i=0,a=n.length-1;i<a;)r=i+a>>1,e[n[r]]<u?i=r+1:a=r;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Nl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nl(t)}function wa(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Pl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Pl(t.subTree):null}const kl=e=>e.__isSuspense;function Ud(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):Ku(e)}const oe=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),ns=[];let st=null;function k(e=!1){ns.push(st=e?null:[])}function Vd(){ns.pop(),st=ns[ns.length-1]||null}let rs=1;function Vs(e,t=!1){rs+=e,e<0&&st&&t&&(st.hasOnce=!0)}function Tl(e){return e.dynamicChildren=rs>0?st||xn:null,Vd(),rs>0&&st&&st.push(e),e}function L(e,t,n,s,o,i){return Tl(g(e,t,n,s,o,i,!0))}function Be(e,t,n,s,o){return Tl(Ae(e,t,n,s,o,!0))}function js(e){return e?e.__v_isVNode===!0:!1}function Gn(e,t){return e.type===t.type&&e.key===t.key}const Fl=({key:e})=>e??null,Ds=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Re(e)||J(e)?{i:nt,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,s=0,o=null,i=e===oe?0:1,a=!1,r=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fl(t),ref:t&&Ds(t),scopeId:ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:nt};return r?(Pi(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),rs>0&&!a&&st&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&st.push(l),l}const Ae=jd;function jd(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===fd)&&(e=tn),js(e)){const r=Tn(e,t,!0);return n&&Pi(r,n),rs>0&&!i&&st&&(r.shapeFlag&6?st[st.indexOf(e)]=r:st.push(r)),r.patchFlag=-2,r}if(ep(e)&&(e=e.__vccOpts),t){t=qd(t);let{class:r,style:l}=t;r&&!xe(r)&&(t.class=De(r)),ye(l)&&(Ei(l)&&!Q(l)&&(l=$e({},l)),t.style=ro(l))}const a=xe(e)?1:kl(e)?128:Ju(e)?64:ye(e)?4:J(e)?2:0;return g(e,t,n,s,o,a,i,!0)}function qd(e){return e?Ei(e)||El(e)?$e({},e):e:null}function Tn(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:a,children:r,transition:l}=e,u=t?Hd(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Fl(u),ref:t&&t.ref?n&&i?Q(i)?i.concat(Ds(t)):[i,Ds(t)]:Ds(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tn(e.ssContent),ssFallback:e.ssFallback&&Tn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&xi(c,l.clone(c)),c}function Pe(e=" ",t=0){return Ae(mo,null,e,t)}function ms(e,t){const n=Ae(Fs,null,e);return n.staticCount=t,n}function lt(e="",t=!1){return t?(k(),Be(tn,null,e)):Ae(tn,null,e)}function _t(e){return e==null||typeof e=="boolean"?Ae(tn):Q(e)?Ae(oe,null,e.slice()):js(e)?Xt(e):Ae(mo,null,String(e))}function Xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tn(e)}function Pi(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Pi(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!El(t)?t._ctx=nt:o===3&&nt&&(nt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:nt},n=32):(t=String(t),s&64?(n=16,t=[Pe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hd(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=De([t.class,s.class]));else if(o==="style")t.style=ro([t.style,s.style]);else if(no(o)){const i=t[o],a=s[o];a&&i!==a&&!(Q(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=s[o])}return t}function yt(e,t,n,s=null){Bt(e,t,7,[n,s])}const Gd=Al();let Wd=0;function zd(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Gd,i={uid:Wd++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xl(s,o),emitsOptions:yl(s,o),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=_d.bind(null,i),e.ce&&e.ce(i),i}let Oe=null;const Kd=()=>Oe||nt;let qs,Yo;{const e=ao(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};qs=t("__VUE_INSTANCE_SETTERS__",n=>Oe=n),Yo=t("__VUE_SSR_SETTERS__",n=>ls=n)}const hs=e=>{const t=Oe;return qs(e),e.scope.on(),()=>{e.scope.off(),qs(t)}},ba=()=>{Oe&&Oe.scope.off(),qs(null)};function Dl(e){return e.vnode.shapeFlag&4}let ls=!1;function Xd(e,t=!1,n=!1){t&&Yo(t);const{props:s,children:o}=e.vnode,i=Dl(e);Pd(e,s,i,t),Dd(e,o,n||t);const a=i?Yd(e,t):void 0;return t&&Yo(!1),a}function Yd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hd);const{setup:s}=n;if(s){Lt();const o=e.setupContext=s.length>1?Jd(e):null,i=hs(e),a=ps(s,e,0,[e.props,o]),r=Nr(a);if(Ut(),i(),(r||e.sp)&&!es(e)&&pl(e),r){if(a.then(ba,ba),t)return a.then(l=>{Aa(e,l)}).catch(l=>{uo(l,e,0)});e.asyncDep=a}else Aa(e,a)}else $l(e)}function Aa(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=Jr(t)),$l(e)}function $l(e,t,n){const s=e.type;e.render||(e.render=s.render||Ct);{const o=hs(e);Lt();try{gd(e)}finally{Ut(),o()}}}const Qd={get(e,t){return Me(e,"get",""),e[t]}};function Jd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qd),slots:e.slots,emit:e.emit,expose:t}}function ho(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Jr(Ru(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ts)return ts[n](e)},has(t,n){return n in t||n in ts}})):e.proxy}function Zd(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function ep(e){return J(e)&&"__vccOpts"in e}const Ee=(e,t)=>qu(e,t,ls);function Ml(e,t,n){try{Vs(-1);const s=arguments.length;return s===2?ye(t)&&!Q(t)?js(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&js(n)&&(n=[n]),Ae(e,t,n))}finally{Vs(1)}}const tp="3.5.27";let Qo;const ya=typeof window<"u"&&window.trustedTypes;if(ya)try{Qo=ya.createPolicy("vue",{createHTML:e=>e})}catch{}const Ol=Qo?e=>Qo.createHTML(e):e=>e,np="http://www.w3.org/2000/svg",sp="http://www.w3.org/1998/Math/MathML",$t=typeof document<"u"?document:null,va=$t&&$t.createElement("template"),op={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?$t.createElementNS(np,e):t==="mathml"?$t.createElementNS(sp,e):n?$t.createElement(e,{is:n}):$t.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>$t.createTextNode(e),createComment:e=>$t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{va.innerHTML=Ol(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const r=va.content;if(s==="svg"||s==="mathml"){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ip=Symbol("_vtc");function ap(e,t,n){const s=e[ip];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Hs=Symbol("_vod"),Rl=Symbol("_vsh"),rp={name:"show",beforeMount(e,{value:t},{transition:n}){e[Hs]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Wn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Wn(e,!0),s.enter(e)):s.leave(e,()=>{Wn(e,!1)}):Wn(e,t))},beforeUnmount(e,{value:t}){Wn(e,t)}};function Wn(e,t){e.style.display=t?e[Hs]:"none",e[Rl]=!t}const lp=Symbol(""),cp=/(?:^|;)\s*display\s*:/;function up(e,t,n){const s=e.style,o=xe(n);let i=!1;if(n&&!o){if(t)if(xe(t))for(const a of t.split(";")){const r=a.slice(0,a.indexOf(":")).trim();n[r]==null&&$s(s,r,"")}else for(const a in t)n[a]==null&&$s(s,a,"");for(const a in n)a==="display"&&(i=!0),$s(s,a,n[a])}else if(o){if(t!==n){const a=s[lp];a&&(n+=";"+a),s.cssText=n,i=cp.test(n)}}else t&&e.removeAttribute("style");Hs in e&&(e[Hs]=i?s.display:"",e[Rl]&&(s.display="none"))}const Ia=/\s*!important$/;function $s(e,t,n){if(Q(n))n.forEach(s=>$s(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=dp(e,t);Ia.test(n)?e.setProperty(gn(s),n.replace(Ia,""),"important"):e[s]=n}}const Ea=["Webkit","Moz","ms"],No={};function dp(e,t){const n=No[t];if(n)return n;let s=ut(t);if(s!=="filter"&&s in e)return No[t]=s;s=io(s);for(let o=0;o<Ea.length;o++){const i=Ea[o]+s;if(i in e)return No[t]=i}return t}const _a="http://www.w3.org/1999/xlink";function xa(e,t,n,s,o,i=wu(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_a,t.slice(6,t.length)):e.setAttributeNS(_a,t,n):n==null||i&&!Fr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":nn(n)?String(n):n)}function Ca(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ol(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(r!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Fr(n):n==null&&r==="string"?(n="",a=!0):r==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function En(e,t,n,s){e.addEventListener(t,n,s)}function pp(e,t,n,s){e.removeEventListener(t,n,s)}const Sa=Symbol("_vei");function fp(e,t,n,s,o=null){const i=e[Sa]||(e[Sa]={}),a=i[t];if(s&&a)a.value=s;else{const[r,l]=mp(t);if(s){const u=i[t]=wp(s,o);En(e,r,u,l)}else a&&(pp(e,r,a,l),i[t]=void 0)}}const Ba=/(?:Once|Passive|Capture)$/;function mp(e){let t;if(Ba.test(e)){t={};let s;for(;s=e.match(Ba);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let Po=0;const hp=Promise.resolve(),gp=()=>Po||(hp.then(()=>Po=0),Po=Date.now());function wp(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Bt(bp(s,n.value),t,5,[s])};return n.value=e,n.attached=gp(),n}function bp(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Na=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ap=(e,t,n,s,o,i)=>{const a=o==="svg";t==="class"?ap(e,s,a):t==="style"?up(e,n,s):no(t)?fi(t)||fp(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yp(e,t,s,a))?(Ca(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xa(e,t,s,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(s))?Ca(e,ut(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),xa(e,t,s,a))};function yp(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Na(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Na(t)&&xe(n)?!1:t in e}const Pa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>Ps(t,n):t};function vp(e){e.target.composing=!0}function ka(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ko=Symbol("_assign");function Ta(e,t,n){return t&&(e=e.trim()),n&&(e=gi(e)),e}const Ip={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[ko]=Pa(o);const i=s||o.props&&o.props.type==="number";En(e,t?"change":"input",a=>{a.target.composing||e[ko](Ta(e.value,n,i))}),(n||i)&&En(e,"change",()=>{e.value=Ta(e.value,n,i)}),t||(En(e,"compositionstart",vp),En(e,"compositionend",ka),En(e,"change",ka))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:i}},a){if(e[ko]=Pa(a),e.composing)return;const r=(i||e.type==="number")&&!/^0\d/.test(e.value)?gi(e.value):e.value,l=t??"";r!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===l)||(e.value=l))}},Ep=["ctrl","shift","alt","meta"],_p={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ep.some(n=>e[`${n}Key`]&&!t.includes(n))},Ll=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...i)=>{for(let a=0;a<t.length;a++){const r=_p[t[a]];if(r&&r(o,t))return}return e(o,...i)}))},xp=$e({patchProp:Ap},op);let Fa;function Cp(){return Fa||(Fa=Md(xp))}const Sp=((...e)=>{const t=Cp().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Np(s);if(!o)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Bp(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Bp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Np(e){return xe(e)?document.querySelector(e):e}const _n=typeof document<"u";function Ul(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ul(e.default)}const ce=Object.assign;function To(e,t){const n={};for(const s in t){const o=t[s];n[s]=mt(o)?o.map(e):e(o)}return n}const ss=()=>{},mt=Array.isArray;function Da(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Vl=/#/g,kp=/&/g,Tp=/\//g,Fp=/=/g,Dp=/\?/g,jl=/\+/g,$p=/%5B/g,Mp=/%5D/g,ql=/%5E/g,Op=/%60/g,Hl=/%7B/g,Rp=/%7C/g,Gl=/%7D/g,Lp=/%20/g;function ki(e){return e==null?"":encodeURI(""+e).replace(Rp,"|").replace($p,"[").replace(Mp,"]")}function Up(e){return ki(e).replace(Hl,"{").replace(Gl,"}").replace(ql,"^")}function Jo(e){return ki(e).replace(jl,"%2B").replace(Lp,"+").replace(Vl,"%23").replace(kp,"%26").replace(Op,"`").replace(Hl,"{").replace(Gl,"}").replace(ql,"^")}function Vp(e){return Jo(e).replace(Fp,"%3D")}function jp(e){return ki(e).replace(Vl,"%23").replace(Dp,"%3F")}function qp(e){return jp(e).replace(Tp,"%2F")}function cs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Hp=/\/$/,Gp=e=>e.replace(Hp,"");function Fo(e,t,n="/"){let s,o={},i="",a="";const r=t.indexOf("#");let l=t.indexOf("?");return l=r>=0&&l>r?-1:l,l>=0&&(s=t.slice(0,l),i=t.slice(l,r>0?r:t.length),o=e(i.slice(1))),r>=0&&(s=s||t.slice(0,r),a=t.slice(r,t.length)),s=Xp(s??t,n),{fullPath:s+i+a,path:s,query:o,hash:cs(a)}}function Wp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $a(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function zp(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&Fn(t.matched[s],n.matched[o])&&Wl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Wl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Kp(e[n],t[n]))return!1;return!0}function Kp(e,t){return mt(e)?Ma(e,t):mt(t)?Ma(t,e):e?.valueOf()===t?.valueOf()}function Ma(e,t){return mt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Xp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let i=n.length-1,a,r;for(a=0;a<s.length;a++)if(r=s[a],r!==".")if(r==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(a).join("/")}const Gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Zo=(function(e){return e.pop="pop",e.push="push",e})({}),Do=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Yp(e){if(!e)if(_n){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gp(e)}const Qp=/^[^#]+#/;function Jp(e,t){return e.replace(Qp,"#")+t}function Zp(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const go=()=>({left:window.scrollX,top:window.scrollY});function ef(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Zp(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Oa(e,t){return(history.state?history.state.position-t:-1)+e}const ei=new Map;function tf(e,t){ei.set(e,t)}function nf(e){const t=ei.get(e);return ei.delete(e),t}function sf(e){return typeof e=="string"||e&&typeof e=="object"}function zl(e){return typeof e=="string"||typeof e=="symbol"}let Ie=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Kl=Symbol("");Ie.MATCHER_NOT_FOUND+"",Ie.NAVIGATION_GUARD_REDIRECT+"",Ie.NAVIGATION_ABORTED+"",Ie.NAVIGATION_CANCELLED+"",Ie.NAVIGATION_DUPLICATED+"";function Dn(e,t){return ce(new Error,{type:e,[Kl]:!0},t)}function Dt(e,t){return e instanceof Error&&Kl in e&&(t==null||!!(e.type&t))}const of=["params","query","hash"];function af(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of of)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function rf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(jl," "),i=o.indexOf("="),a=cs(i<0?o:o.slice(0,i)),r=i<0?null:cs(o.slice(i+1));if(a in t){let l=t[a];mt(l)||(l=t[a]=[l]),l.push(r)}else t[a]=r}return t}function Ra(e){let t="";for(let n in e){const s=e[n];if(n=Vp(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(mt(s)?s.map(o=>o&&Jo(o)):[s&&Jo(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function lf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=mt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const cf=Symbol(""),La=Symbol(""),Ti=Symbol(""),Fi=Symbol(""),ti=Symbol("");function zn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Yt(e,t,n,s,o,i=a=>a()){const a=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((r,l)=>{const u=f=>{f===!1?l(Dn(Ie.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?l(f):sf(f)?l(Dn(Ie.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(a&&s.enterCallbacks[o]===a&&typeof f=="function"&&a.push(f),r())},c=i(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(f=>l(f))})}function $o(e,t,n,s,o=i=>i()){const i=[];for(const a of e)for(const r in a.components){let l=a.components[r];if(!(t!=="beforeRouteEnter"&&!a.instances[r]))if(Ul(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Yt(u,n,s,a,r,o))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${r}" at "${a.path}"`);const d=Pp(c)?c.default:c;a.mods[r]=c,a.components[r]=d;const f=(d.__vccOpts||d)[t];return f&&Yt(f,n,s,a,r,o)()}))}}return i}function uf(e,t){const n=[],s=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const r=t.matched[a];r&&(e.matched.find(u=>Fn(u,r))?s.push(r):n.push(r));const l=e.matched[a];l&&(t.matched.find(u=>Fn(u,l))||o.push(l))}return[n,s,o]}let df=()=>location.protocol+"//"+location.host;function Xl(e,t){const{pathname:n,search:s,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,r=o.slice(a);return r[0]!=="/"&&(r="/"+r),$a(r,"")}return $a(n,e)+s+o}function pf(e,t,n,s){let o=[],i=[],a=null;const r=({state:f})=>{const h=Xl(e,location),v=n.value,C=t.value;let P=0;if(f){if(n.value=h,t.value=f,a&&a===v){a=null;return}P=C?f.position-C.position:0}else s(h);o.forEach(y=>{y(n.value,v,{delta:P,type:Zo.pop,direction:P?P>0?Do.forward:Do.back:Do.unknown})})};function l(){a=n.value}function u(f){o.push(f);const h=()=>{const v=o.indexOf(f);v>-1&&o.splice(v,1)};return i.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ce({},f.state,{scroll:go()}),"")}}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function Ua(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?go():null}}function ff(e){const{history:t,location:n}=window,s={value:Xl(e,n)},o={value:t.state};o.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:df()+e+l;try{t[c?"replaceState":"pushState"](u,"",f),o.value=u}catch(h){console.error(h),n[c?"replace":"assign"](f)}}function a(l,u){i(l,ce({},t.state,Ua(o.value.back,l,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=l}function r(l,u){const c=ce({},o.value,t.state,{forward:l,scroll:go()});i(c.current,c,!0),i(l,ce({},Ua(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:o,push:r,replace:a}}function mf(e){e=Yp(e);const t=ff(e),n=pf(e,t.state,t.location,t.replace);function s(i,a=!0){a||n.pauseListeners(),history.go(i)}const o=ce({location:"",base:e,go:s,createHref:Jp.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let dn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ne=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ne||{});const hf={type:dn.Static,value:""},gf=/[a-zA-Z0-9_]/;function wf(e){if(!e)return[[]];if(e==="/")return[[hf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=Ne.Static,s=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let r=0,l,u="",c="";function d(){u&&(n===Ne.Static?i.push({type:dn.Static,value:u}):n===Ne.Param||n===Ne.ParamRegExp||n===Ne.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:dn.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;r<e.length;){if(l=e[r++],l==="\\"&&n!==Ne.ParamRegExp){s=n,n=Ne.EscapeNext;continue}switch(n){case Ne.Static:l==="/"?(u&&d(),a()):l===":"?(d(),n=Ne.Param):f();break;case Ne.EscapeNext:f(),n=s;break;case Ne.Param:l==="("?n=Ne.ParamRegExp:gf.test(l)?f():(d(),n=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&r--);break;case Ne.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Ne.ParamRegExpEnd:c+=l;break;case Ne.ParamRegExpEnd:d(),n=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&r--,c="";break;default:t("Unknown state");break}}return n===Ne.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),o}const Va="[^/]+?",bf={sensitive:!1,strict:!1,start:!0,end:!0};var je=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(je||{});const Af=/[.+*?^${}()[\]/\\]/g;function yf(e,t){const n=ce({},bf,t),s=[];let o=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[je.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=je.Segment+(n.sensitive?je.BonusCaseSensitive:0);if(f.type===dn.Static)d||(o+="/"),o+=f.value.replace(Af,"\\$&"),h+=je.Static;else if(f.type===dn.Param){const{value:v,repeatable:C,optional:P,regexp:y}=f;i.push({name:v,repeatable:C,optional:P});const E=y||Va;if(E!==Va){h+=je.BonusCustomRegExp;try{`${E}`}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+b.message)}}let S=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(S=P&&u.length<2?`(?:/${S})`:"/"+S),P&&(S+="?"),o+=S,h+=je.Dynamic,P&&(h+=je.BonusOptional),C&&(h+=je.BonusRepeatable),E===".*"&&(h+=je.BonusWildcard)}c.push(h)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=je.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function r(u){const c=u.match(a),d={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",v=i[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(u){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of f)if(h.type===dn.Static)c+=h.value;else if(h.type===dn.Param){const{value:v,repeatable:C,optional:P}=h,y=v in u?u[v]:"";if(mt(y)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=mt(y)?y.join("/"):y;if(!E)if(P)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);c+=E}}return c||"/"}return{re:a,score:s,keys:i,parse:r,stringify:l}}function vf(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===je.Static+je.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===je.Static+je.Segment?1:-1:0}function Yl(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const i=vf(s[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-s.length)===1){if(ja(s))return 1;if(ja(o))return-1}return o.length-s.length}function ja(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const If={strict:!1,end:!0,sensitive:!1};function Ef(e,t,n){const s=yf(wf(e.path),n),o=ce(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function _f(e,t){const n=[],s=new Map;t=Da(If,t);function o(d){return s.get(d)}function i(d,f,h){const v=!h,C=Ha(d);C.aliasOf=h&&h.record;const P=Da(t,d),y=[C];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of b)y.push(Ha(ce({},C,{components:h?h.record.components:C.components,path:T,aliasOf:h?h.record:C})))}let E,S;for(const b of y){const{path:T}=b;if(f&&T[0]!=="/"){const U=f.record.path,$=U[U.length-1]==="/"?"":"/";b.path=f.record.path+(T&&$+T)}if(E=Ef(b,f,P),h?h.alias.push(E):(S=S||E,S!==E&&S.alias.push(E),v&&d.name&&!Ga(E)&&a(d.name)),Ql(E)&&l(E),C.children){const U=C.children;for(let $=0;$<U.length;$++)i(U[$],E,h&&h.children[$])}h=h||E}return S?()=>{a(S)}:ss}function a(d){if(zl(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function r(){return n}function l(d){const f=Sf(d,n);n.splice(f,0,d),d.record.name&&!Ga(d)&&s.set(d.record.name,d)}function u(d,f){let h,v={},C,P;if("name"in d&&d.name){if(h=s.get(d.name),!h)throw Dn(Ie.MATCHER_NOT_FOUND,{location:d});P=h.record.name,v=ce(qa(f.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),d.params&&qa(d.params,h.keys.map(S=>S.name))),C=h.stringify(v)}else if(d.path!=null)C=d.path,h=n.find(S=>S.re.test(C)),h&&(v=h.parse(C),P=h.record.name);else{if(h=f.name?s.get(f.name):n.find(S=>S.re.test(f.path)),!h)throw Dn(Ie.MATCHER_NOT_FOUND,{location:d,currentLocation:f});P=h.record.name,v=ce({},f.params,d.params),C=h.stringify(v)}const y=[];let E=h;for(;E;)y.unshift(E.record),E=E.parent;return{name:P,path:C,params:v,matched:y,meta:Cf(y)}}e.forEach(d=>i(d));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:r,getRecordMatcher:o}}function qa(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Ha(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:xf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ga(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Cf(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Sf(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Yl(e,t[i])<0?s=i:n=i+1}const o=Bf(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Bf(e){let t=e;for(;t=t.parent;)if(Ql(t)&&Yl(e,t)===0)return t}function Ql({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Wa(e){const t=St(Ti),n=St(Fi),s=Ee(()=>{const l=me(e.to);return t.resolve(l)}),o=Ee(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const f=d.findIndex(Fn.bind(null,c));if(f>-1)return f;const h=za(l[u-2]);return u>1&&za(c)===h&&d[d.length-1].path!==h?d.findIndex(Fn.bind(null,l[u-2])):f}),i=Ee(()=>o.value>-1&&Tf(n.params,s.value.params)),a=Ee(()=>o.value>-1&&o.value===n.matched.length-1&&Wl(n.params,s.value.params));function r(l={}){if(kf(l)){const u=t[me(e.replace)?"replace":"push"](me(e.to)).catch(ss);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:i,isExactActive:a,navigate:r}}function Nf(e){return e.length===1?e[0]:e}const Pf=dl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wa,setup(e,{slots:t}){const n=co(Wa(e)),{options:s}=St(Ti),o=Ee(()=>({[Ka(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ka(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Nf(t.default(n));return e.custom?i:Ml("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),$n=Pf;function kf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tf(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!mt(o)||o.length!==s.length||s.some((i,a)=>i.valueOf()!==o[a].valueOf()))return!1}return!0}function za(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ka=(e,t,n)=>e??t??n,Ff=dl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=St(ti),o=Ee(()=>e.route||s.value),i=St(La,0),a=Ee(()=>{let u=me(i);const{matched:c}=o.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),r=Ee(()=>o.value.matched[a.value]);ks(La,Ee(()=>a.value+1)),ks(cf,r),ks(ti,o);const l=qe();return Bn(()=>[l.value,r.value,e.name],([u,c,d],[f,h,v])=>{c&&(c.instances[d]=u,h&&h!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!Fn(c,h)||!f)&&(c.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,d=r.value,f=d&&d.components[c];if(!f)return Xa(n.default,{Component:f,route:u});const h=d.props[c],v=h?h===!0?u.params:typeof h=="function"?h(u):h:null,P=Ml(f,ce({},v,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Xa(n.default,{Component:P,route:u})||P}}});function Xa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Jl=Ff;function Df(e){const t=_f(e.routes,e),n=e.parseQuery||rf,s=e.stringifyQuery||Ra,o=e.history,i=zn(),a=zn(),r=zn(),l=Lu(Gt);let u=Gt;_n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=To.bind(null,x=>""+x),d=To.bind(null,qp),f=To.bind(null,cs);function h(x,V){let O,H;return zl(x)?(O=t.getRecordMatcher(x),H=V):H=x,t.addRoute(H,O)}function v(x){const V=t.getRecordMatcher(x);V&&t.removeRoute(V)}function C(){return t.getRoutes().map(x=>x.record)}function P(x){return!!t.getRecordMatcher(x)}function y(x,V){if(V=ce({},V||l.value),typeof x=="string"){const w=Fo(n,x,V.path),I=t.resolve({path:w.path},V),B=o.createHref(w.fullPath);return ce(w,I,{params:f(I.params),hash:cs(w.hash),redirectedFrom:void 0,href:B})}let O;if(x.path!=null)O=ce({},x,{path:Fo(n,x.path,V.path).path});else{const w=ce({},x.params);for(const I in w)w[I]==null&&delete w[I];O=ce({},x,{params:d(w)}),V.params=d(V.params)}const H=t.resolve(O,V),ne=x.hash||"";H.params=c(f(H.params));const p=Wp(s,ce({},x,{hash:Up(ne),path:H.path})),m=o.createHref(p);return ce({fullPath:p,hash:ne,query:s===Ra?lf(x.query):x.query||{}},H,{redirectedFrom:void 0,href:m})}function E(x){return typeof x=="string"?Fo(n,x,l.value.path):ce({},x)}function S(x,V){if(u!==x)return Dn(Ie.NAVIGATION_CANCELLED,{from:V,to:x})}function b(x){return $(x)}function T(x){return b(ce(E(x),{replace:!0}))}function U(x,V){const O=x.matched[x.matched.length-1];if(O&&O.redirect){const{redirect:H}=O;let ne=typeof H=="function"?H(x,V):H;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=E(ne):{path:ne},ne.params={}),ce({query:x.query,hash:x.hash,params:ne.path!=null?{}:x.params},ne)}}function $(x,V){const O=u=y(x),H=l.value,ne=x.state,p=x.force,m=x.replace===!0,w=U(O,H);if(w)return $(ce(E(w),{state:typeof w=="object"?ce({},ne,w.state):ne,force:p,replace:m}),V||O);const I=O;I.redirectedFrom=V;let B;return!p&&zp(s,H,O)&&(B=Dn(Ie.NAVIGATION_DUPLICATED,{to:I,from:H}),gt(H,H,!0,!1)),(B?Promise.resolve(B):K(I,H)).catch(_=>Dt(_)?Dt(_,Ie.NAVIGATION_GUARD_REDIRECT)?_:Ht(_):le(_,I,H)).then(_=>{if(_){if(Dt(_,Ie.NAVIGATION_GUARD_REDIRECT))return $(ce({replace:m},E(_.to),{state:typeof _.to=="object"?ce({},ne,_.to.state):ne,force:p}),V||I)}else _=Se(I,H,!0,m,ne);return te(I,H,_),_})}function X(x,V){const O=S(x,V);return O?Promise.reject(O):Promise.resolve()}function q(x){const V=yn.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(x):x()}function K(x,V){let O;const[H,ne,p]=uf(x,V);O=$o(H.reverse(),"beforeRouteLeave",x,V);for(const w of H)w.leaveGuards.forEach(I=>{O.push(Yt(I,x,V))});const m=X.bind(null,x,V);return O.push(m),rt(O).then(()=>{O=[];for(const w of i.list())O.push(Yt(w,x,V));return O.push(m),rt(O)}).then(()=>{O=$o(ne,"beforeRouteUpdate",x,V);for(const w of ne)w.updateGuards.forEach(I=>{O.push(Yt(I,x,V))});return O.push(m),rt(O)}).then(()=>{O=[];for(const w of p)if(w.beforeEnter)if(mt(w.beforeEnter))for(const I of w.beforeEnter)O.push(Yt(I,x,V));else O.push(Yt(w.beforeEnter,x,V));return O.push(m),rt(O)}).then(()=>(x.matched.forEach(w=>w.enterCallbacks={}),O=$o(p,"beforeRouteEnter",x,V,q),O.push(m),rt(O))).then(()=>{O=[];for(const w of a.list())O.push(Yt(w,x,V));return O.push(m),rt(O)}).catch(w=>Dt(w,Ie.NAVIGATION_CANCELLED)?w:Promise.reject(w))}function te(x,V,O){r.list().forEach(H=>q(()=>H(x,V,O)))}function Se(x,V,O,H,ne){const p=S(x,V);if(p)return p;const m=V===Gt,w=_n?history.state:{};O&&(H||m?o.replace(x.fullPath,ce({scroll:m&&w&&w.scroll},ne)):o.push(x.fullPath,ne)),l.value=x,gt(x,V,O,m),Ht()}let ee;function pe(){ee||(ee=o.listen((x,V,O)=>{if(!on.listening)return;const H=y(x),ne=U(H,on.currentRoute.value);if(ne){$(ce(ne,{replace:!0,force:!0}),H).catch(ss);return}u=H;const p=l.value;_n&&tf(Oa(p.fullPath,O.delta),go()),K(H,p).catch(m=>Dt(m,Ie.NAVIGATION_ABORTED|Ie.NAVIGATION_CANCELLED)?m:Dt(m,Ie.NAVIGATION_GUARD_REDIRECT)?($(ce(E(m.to),{force:!0}),H).then(w=>{Dt(w,Ie.NAVIGATION_ABORTED|Ie.NAVIGATION_DUPLICATED)&&!O.delta&&O.type===Zo.pop&&o.go(-1,!1)}).catch(ss),Promise.reject()):(O.delta&&o.go(-O.delta,!1),le(m,H,p))).then(m=>{m=m||Se(H,p,!1),m&&(O.delta&&!Dt(m,Ie.NAVIGATION_CANCELLED)?o.go(-O.delta,!1):O.type===Zo.pop&&Dt(m,Ie.NAVIGATION_ABORTED|Ie.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),te(H,p,m)}).catch(ss)}))}let ze=zn(),ve=zn(),he;function le(x,V,O){Ht(x);const H=ve.list();return H.length?H.forEach(ne=>ne(x,V,O)):console.error(x),Promise.reject(x)}function Tt(){return he&&l.value!==Gt?Promise.resolve():new Promise((x,V)=>{ze.add([x,V])})}function Ht(x){return he||(he=!x,pe(),ze.list().forEach(([V,O])=>x?O(x):V()),ze.reset()),x}function gt(x,V,O,H){const{scrollBehavior:ne}=e;if(!_n||!ne)return Promise.resolve();const p=!O&&nf(Oa(x.fullPath,0))||(H||!O)&&history.state&&history.state.scroll||null;return el().then(()=>ne(x,V,p)).then(m=>m&&ef(m)).catch(m=>le(m,x,V))}const Ke=x=>o.go(x);let An;const yn=new Set,on={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:C,resolve:y,options:e,push:b,replace:T,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:a.add,afterEach:r.add,onError:ve.add,isReady:Tt,install(x){x.component("RouterLink",$n),x.component("RouterView",Jl),x.config.globalProperties.$router=on,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>me(l)}),_n&&!An&&l.value===Gt&&(An=!0,b(o.location).catch(H=>{}));const V={};for(const H in Gt)Object.defineProperty(V,H,{get:()=>l.value[H],enumerable:!0});x.provide(Ti,on),x.provide(Fi,Yr(V)),x.provide(ti,l);const O=x.unmount;yn.add(x),x.unmount=function(){yn.delete(x),yn.size<1&&(u=Gt,ee&&ee(),ee=null,l.value=Gt,An=!1,he=!1),O()}}};function rt(x){return x.reduce((V,O)=>V.then(()=>q(O)),Promise.resolve())}return on}function Di(e){return St(Fi)}const $f="/assets/1.%E5%85%83%E7%9B%9B%E7%94%9F%E9%86%AB%E9%9B%BB%E5%AD%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-tZrz3saj.png",Mf="/assets/10.%E8%87%BA%E7%81%A3%E9%80%9A%E7%94%A8%E7%B4%A1%E7%B9%94%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-pISmnQe7.png",Of="/assets/11.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DVERcn3P.png",Rf="/assets/12.%E6%9B%9C%E5%A4%86%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DlUjWWYS.png",Lf="/assets/13.%E7%92%BD%E6%A8%82%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CxsqQGho.jpg",Uf="/assets/2.%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-1-B_t_j1J4.png",Vf="/assets/2.%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-2png-CVKL4UdR.png",jf="/assets/2.%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-eiNErdfK.png",qf="/assets/3.%E6%9C%89%E5%89%B5%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C5pz3A89.jpg",Hf="/assets/4.%E8%83%8C%E6%99%AF%E6%A8%A1%E5%BC%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DyQS0oFg.png",Gf="/assets/5.%E6%BB%BF%E6%8B%93%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CD6l3ARy.png",Wf="/assets/6.%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Cdkxl-XF.png",zf="/assets/7.%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C9GKSVZW.png",Kf="/assets/8.%E7%B6%B2%E9%9A%9B%E6%99%BA%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DbmVcWay.png",Xf="/assets/9.%E8%81%9A%E5%85%B8%E8%B3%87%E8%A8%8A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DTMd6iyv.png",Yf="/assets/1.%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DyWDLfOL.png",Qf="/assets/2.%E6%BC%AB%E8%A9%B1%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-B0Rk5H5g.png",Jf="/assets/3.%E7%B6%B2%E9%9A%9B%E6%99%BA%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-lRRVw5-E.png",Zf="/assets/1.%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DIyGVGCN.png",em="/assets/2.%E6%98%93%E6%99%A8%E6%99%BA%E8%83%BD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-ipWpqaDS.png",tm="/assets/3.%E5%89%B5%E9%80%A0%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-jUdGEJec.jpg",nm="/assets/4.%E7%B7%AF%E8%AC%99%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C_VmQg9r.jpg",sm="/assets/5.%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-1-DCDiMvw-.png",om="/assets/5.%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-2-BsUJz3SW.png",im="/assets/5.%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-8E6n98rT.png",am="/assets/1.%E8%89%BE%E5%88%A9%E6%80%9D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CDwx-xwY.png",rm="/assets/2.%E5%9F%8E%E6%99%BA%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DkZhLZNj.png",lm="/assets/3.%E8%A8%8A%E9%80%A3%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-H4t-wnPW.png",cm="/assets/4.%E9%9B%B2%E7%BE%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-B2NwlX3P.jpg",um="/assets/5.%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CdyuGW7h.png",dm="/assets/1.%E5%87%8C%E6%9D%BE%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BP9rKR9T.jpg",pm="/assets/2.%E5%81%A5%E5%BA%B7%E7%9B%9F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-ByDd-CWB.png",fm="/assets/3.%E9%96%8B%E6%BA%90%E6%99%BA%E9%80%A0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BLAdWHyS.jpg",mm="/assets/1.%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-D_RCGOdm.png",hm="/assets/2.%E7%94%A8%E7%9B%8A%E7%B6%B2%E8%B7%AF%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Cx9eQbiZ.jpg",gm="/assets/3.%E5%9C%98%E8%96%A6%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Bn7Q5QnP.jpg",wm="/assets/4.%E9%BA%9F%E6%95%B8%E6%93%9A%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-og6KWoUe.png",bm="/assets/1.%E5%82%91%E9%A8%B0%E6%99%BA%E8%83%BD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BTJ40gug.png",Am="/assets/2.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-yMFqtoIB.png",ym="/assets/3.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-D21l0SLI.png",vm="/assets/4.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DWNK3rYq.png",Im="/assets/5.%E6%91%A9%E7%B5%A1%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DAKF3fFO.png",Em="/assets/1.%E4%BA%9E%E5%8D%9A%E7%A6%8F%E7%88%BE%E6%91%A9%E6%B2%99%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DfTptUkV.jpeg",_m="/assets/2.%E4%BA%9E%E5%8D%9A%E7%A6%8F%E7%88%BE%E6%91%A9%E6%B2%99%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Ctx94l44.jpg",xm="/assets/3.%E7%A4%BE%E7%BE%A4%E6%B4%9E%E5%AF%9F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BTMbUotR.jpg",Cm="/assets/4.%E5%87%8C%E5%85%B8%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-S1VBaJBa.png",Sm="/assets/5.%E5%89%B5%E9%80%A0%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-P4-3ownu.png",Bm="/assets/6.%E7%A9%8E%E8%AB%BE%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BJ9gw_5r.jpg",Nm="/assets/1.%E5%8D%A1%E8%8F%B2%E5%8D%A1%E9%87%91%E8%9E%8D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BWO1U7Hb.png",Pm="/assets/2.%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DjWuKUbw.png",km="/assets/3.%E8%99%8E%E6%99%BA%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BoYeIT6O.png",Tm="/assets/4.%E5%87%B1%E9%88%BF%E8%A1%8C%E5%8B%95%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DmFOB0z-.png",Fm="/assets/5.%E8%82%86%E6%99%82%E8%B3%87%E8%A8%8A%E8%A8%AD%E8%A8%88%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Ce4Wz3Qx.jpg",Dm="/assets/6.%E8%A9%AE%E9%80%9A%E9%9B%BB%E8%85%A6%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-GCaXS8hR.png",$m="/assets/7.%E7%9D%BF%E5%8A%9B%E6%99%BA%E8%83%BD%E9%81%8B%E5%8B%95%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CSEirmLa.png",Mm="/assets/8.%E6%95%B8%E8%BE%B0%E5%89%B5%E8%97%9D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BJVC4sQE.png",Om="/assets/9.%E7%92%BD%E6%A8%82%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-ePsyorRk.jpg",Rm="/assets/1.%E8%89%BE%E6%AF%94%E4%BA%92%E5%8B%95%E5%A8%9B%E6%A8%82%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-HTqB72l_.png",Lm="/assets/2.%E8%8F%AF%E8%8B%93%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CwUEbHXC.png",Um="/assets/3.%E6%A5%B5%E9%A2%A8%E9%9B%B2%E5%89%B5%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-D6xYBz9P.png",$i=JSON.parse(`[{"id":"AI市場洞察-1","category":"AI市場洞察","sequence":1,"companyName":"大數軟體有限公司","companyShortName":"大數軟體","solutionName":"InfoMiner 即時輿情分析平台","manualUrl":"https://www.youtube.com/playlist?list=PLm7Cuso7baYX2M8IpDB0em_6i-rFPI5dH","imageFileName":"1.大數軟體有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/1.大數軟體有限公司.png","bannerFileExists":true,"solutionIntro":"InfoMiner 即時輿情監測與分析平台，涵蓋新聞、社群媒體、論壇、電視等 50 萬+頻道來源，十五分鐘內以 Line/Email 通報最新輿情，適用於公關、行銷、政府與企業決策者。\\n客戶可以透過雲端平台快速搜尋、監測社群媒體上的輿情大數據，亦可以透過公司強大的人工智慧技術，蒐集各式來源訊息。\\n藉由系統自建的人工智慧引擎強大的自然語言理解能力，可以快速精準分析網路輿情大數據，從雜亂的輿情數據中萃取出價值資訊，亦可透過Email、Line 就能獲得最即時的輿情精華！\\n\\n方案價格資訊：110208 含稅，特惠價 99186","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","contactPerson":"丘先生","companyPhone":"02-2585-5080","contactEmail":"david@largitdata.com","websiteUrl":"https://largitdata.com/","specialPrice":"99,186 元（含稅）"},{"id":"AI市場洞察-2","category":"AI市場洞察","sequence":2,"companyName":"用益網路科技股份有限公司","companyShortName":"用益網路科技","solutionName":"metabiz 企業 AI Agent 智腦方案","manualUrl":"","imageFileName":"2.用益網路科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/2.用益網路科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本方案專為新北微型企業與接案工作者設計，旨在以最低門檻實現官網 AI 自動化轉型。核心採用 metabiz AI-EDP 數據中台，搭載獨家「WP 一鍵同步技術」，能自動擷取 WordPress 官網文章與產品資訊並轉化為 AI 知識庫，達成「發文即訓練」之自動化流程，解決傳統 RAG 需人工整理資料的痛點。  運算層深度整合 台智雲 (TWSC) 國家級算力與 Google Cloud 台灣機房，確保企業數據 100% 落地台灣，符合最高資安規範。\\n\\n新北專屬優惠： 免收 NT$15,000 數據清洗設定費，。\\n受輔導企業僅需支付 8 萬元（補助後實付僅 4 萬），\\n即可擁有一尊 24 小時在線、精準理解繁體中文語境的企業 AI Agent 業務代理人。","companyIntro":"metabiz自成立以來，始終專注於【智慧科技 / 會員系統】領域，致力為客戶提供最具價值的創新解決方案。我們秉持「務實應用、互利共益」的核心理念，將深厚的技術底蘊與市場需求完美結合，打造出優質的牌會員管理系統。\\n\\n憑藉著專業的團隊與敏銳的市場洞察，metabiz不僅能快速回應產業變化，更以【客製化服務 / 高效能技術】作為核心優勢，成功協助眾多企業突破【數位轉型 / 營運效能】的瓶頸，贏得了廣大客戶的高度信賴與口碑。\\n\\n展望未來，metabiz將持續精進技術與服務品質，積極拓展【新市場或新技術】。我們期盼成為業界最具影響力的創新夥伴，用最實際的行動為客戶創造最大效益，攜手共創永續發展的美好未來。","contactPerson":"黃專員","companyPhone":"02-6604-0153","contactEmail":"service@metabiz.tw","websiteUrl":"https://metabiz.tw/","specialPrice":"80,000 元（含稅）"},{"id":"AI市場洞察-3","category":"AI市場洞察","sequence":3,"companyName":"團薦科技股份有限公司","companyShortName":"團薦科技","solutionName":"「探點TanDian Pro－AI智能選址平台」賦能新北方案","manualUrl":"https://youtu.be/WJSPGerH5os","imageFileName":"3.團薦科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/3.團薦科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"「探點 TanDian Pro－AI智能選址平台」為訂閱制AI選址決策工具，專為規劃全台（含離島）展店布局之實體連鎖品牌打造，特別適合5人以上開發（展店）團隊協作使用。平台整合多元商圈數據、人口與消費結構資料，並結合自研單店營收預測模型，使用者無須自行蒐集資料或訓練模型，即可透過Web介面即時完成商圈分析、營收試算與展店評估，大幅提升選址效率與決策精準度，降低試錯與人力成本。\\n\\n「全能方案」為季訂閱制，費用為新台幣108,000元整（未稅），一次性訂閱一年期即享93折優惠。方案內容包含：全台灣（含離島）範圍分析權限、最高3人同時上線使用，以及每月345次查詢額度（原為300次每月，通過新北市政府訂閱本特別方案，則每個月額外贈送15%的使用量），支援多點位快速比較與決策評估，適合作為企業年度展店規劃之核心決策工具。\\n\\n\\n「精簡方案」為半年訂閱制，費用為新台幣144,000元整（未稅），一次性訂閱一年期即享93折優惠。方案內容包含：全台灣（含離島）範圍分析權限、最高2人同時上線使用，以及每月184次查詢額度（原為160次每月，通過新北市政府訂閱本特別方案，則每個月額外贈送15%的使用量），支援多點位快速比較與決策評估，適合作為企業年度展店規劃之核心決策工具。\\n\\n「區域方案」採一年期起訂之年度訂閱制，適合以單一或特定縣市為拓展重點之品牌使用。方案提供指定區域縣市分析權限，並包含每月138次查詢額度（原為120次每月，通過新北市政府訂閱本特別方案，則每個月額外贈送15%的使用量），協助企業進行精準區域評估與展店規劃。\\n本方案之收費機制與既有月訂制不同，改採年度整體區域授權計價模式，依據所選擇之縣市數量與區域層級一次性核定全年費用，不再採逐月基礎費加區域加價累加方式計算。企業可依實際展店布局需求彈性選定授權範圍，於簽約時確認年度總價，合約期間內價格固定，有利於年度預算規劃與成本控管。\\n\\n新北專屬優惠：\\n1. 每個月多提供15%的查詢用量\\n2. 一次性訂閱一年享有93折優惠\\n3. 免費教育訓練一小時","companyIntro":"團薦科技成立於2023年，以AI技術打造智慧零售解決方案，專注於精準選址與門市營運分析。我們相信，選址不是終點，而是實體門市成功的起點；真正的價值，在於從展店決策到長期經營的全流程數據驅動管理。\\n「探點 TanDian Pro」整合商圈數據、人口結構與消費預測模型，協助零售品牌快速找到最佳地點、降低展店風險並提升營收表現。同時，進一步提供營運優化與門市體質分析，協助品牌打造可長可久的經營模式。\\n團薦不只是 SaaS（Software as a Service），更是 SaaS（Solution as a Service），以數據與洞察陪伴品牌實現永續成長。","contactPerson":"許先生","companyPhone":"0910241880","contactEmail":"service@tangent-plus.com","websiteUrl":"https://home.tangent-plus.com","specialPrice":"全能方案：108,000 元／季（未稅）\\n精簡方案：144,000 元／半年（未稅）\\n區域方案：128,340 元起／年（未稅）"},{"id":"AI市場洞察-4","category":"AI市場洞察","sequence":4,"companyName":"麟數據科技股份有限公司","companyShortName":"麟數據科技","solutionName":"Insighta{360°}","manualUrl":"","imageFileName":"4.麟數據科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/4.麟數據科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"本方案提供一套「基於發票數據的生成式AI問答商業分析系統」，將原本分散且高成本的數據採購、數據分析與數位行銷整合為單一訂閱服務，協助企業以更低門檻完成從市場洞察到精準行銷的決策閉環。系統內建經清洗與去識別化的全台抽樣發票資料，涵蓋多元通路與詳細品項，真實反映消費金額與購買行為。透過無程式碼介面，企業可依品牌、品項、通路與類別進行交叉分析，即時取得關鍵指標、客群輪廓與趨勢變化。同時，AI數據分析助理支援自然語言提問，整合企業第一方資料與第三方發票數據，自動生成分析報告與市場洞察。進一步，系統可將高潛力消費族群直接轉化為精準行銷受眾包，一鍵串接Meta與Google廣告平台，提升廣告投放效率與轉換成效，讓數據從分析直接落地應用於商業成長。\\n\\n新北專屬優惠：\\n1.年訂閱享原價 92 折優惠\\n2.免費教育訓練 1 小時","companyIntro":"本公司成立於2016年，專注於AI數據科技（AI Data Technology），致力於透過先進數據技術與人工智慧，協助企業提升數據應用能力與決策效率。公司打造多元創新的SaaS平台，核心能力涵蓋數據蒐集、清洗、治理至應用的完整流程，協助企業將數據轉化為可行的商業洞察。\\n\\n透過數據整合與AI分析能力，我們協助品牌建立以數據為核心的營運模式，並打造自有數據產品與解決方案（如 Insighta360°），應用於CRM、精準行銷、廣告投放與消費者行為分析等場景，幫助企業即時掌握市場動態並提升決策效率。\\n\\n目前服務產業橫跨零售、電商、食品、汽車、金融等領域，協助企業深化顧客理解、優化行銷策略，並以更高效率與更低成本創造商業價值。\\n\\n長期目標為打造企業級數據中台與AI應用生態，促進數據資產化與跨場域應用。","contactPerson":"林小姐","companyPhone":"(02)2394-8800 分機103","contactEmail":"thea.lin@lndata.com","websiteUrl":"https://www.lndata.com","specialPrice":"275,988 元／年（未稅）"},{"id":"AI企業營運管理-1","category":"AI企業營運管理","sequence":1,"companyName":"元盛生醫電子股份有限公司","companyShortName":"元盛生醫電子","solutionName":"AI PIF生成與Agent管理系統","manualUrl":"https://www.youtube.com/watch?v=ehW7rAwDSVM","imageFileName":"1.元盛生醫電子股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/1.元盛生醫電子股份有限公司.png","bannerFileExists":true,"solutionIntro":"【AI PIF生成與Agent管理系統】\\n【AI 輕量版】\\n獨家AI生成功能及相關服務\\nAI智能分類關鍵資料\\nAI內容差異比對（從包裝到原料）\\nAI成分風險分析及法規檢測\\nAI生成PIF報告\\n權威SA專業簽署（市值約 NT$12,000/份）\\n法規資料維護與諮詢支援\\n一年保固\\n•同配方更換容量或包裝，不另收費\\n•合約期間法規變動造成PIF更動，不另收費\\n\\n方案價格說明：單次購買5份PIF報告(含SA簽核) NT$153,450(未稅)\\n新北專屬優惠：贈送一份PIF報告(含SA簽核) 平均一份NT$25,575(未稅)\\n\\n【AI 標準版】\\n獨家AI生成功能及相關服務\\nAI智能分類關鍵資料\\nAI內容差異比對（從包裝到原料）\\nAI成分風險分析及法規檢測\\nAI生成PIF報告\\n權威SA專業簽署（市值約 NT$12,000/份）\\n法規資料維護與諮詢支援\\n一年保固\\n同配方更換容量或包裝，不另收費\\n合約期間法規變動造成PIF更動，不另收費\\n\\n方案價格說明：單次購買10份PIF報告(含SA簽核) NT$240,000(未稅)\\n新北專屬優惠：贈送二份PIF報告 平均一份NT$20,000(未稅)\\n\\n【AI 商務版】\\n獨家AI生成功能及相關服務\\nAI智能分類關鍵資料\\nAI內容差異比對（從包裝到原料）\\nAI成分風險分析及法規檢測\\nAI生成PIF報告\\n權威SA專業簽署（市值約 NT$12,000/份）\\n法規資料維護與諮詢支援\\n一年保固\\n同配方更換容量或包裝，不另收費\\n合約期間法規變動造成PIF更動，不另收費\\n\\n新北專屬優惠：單次購買40份以上PIF報告 NT$ 專屬優惠價，請聯絡廠商報價。","companyIntro":"全球第一個 AI 合規平台，採用NVIDIA BioNeMo技術，從原料到報告、從法規風險到數位追蹤，一次完成，全程精準高效!我們致力於為美妝產業提供前沿的人工智能解決方案，以重新定義保養品的數位使用體驗。我們團隊擁有專業的AI專家和技術專家，致力於整合創新科技，將科學、安全和效率完美結合，dermaGPT提供安全透明的成分資訊與配方功效的驗證。我們以AI驅動的化妝品安全評估系統（CPSR）利用強大的算法和累積全球千萬筆的資料庫，迅速、準確地評估化妝品成分的安全性。我們的目標是通過技術創新，幫助企業確保其產品遵守最嚴格的法規要求，同時提升消費者對產品功效與安全的信心。","contactPerson":"林副總/先生","companyPhone":"02-25076729#66","contactEmail":"johnny@vescir.com","websiteUrl":"https://dermagpt.com/hant/home/","specialPrice":"AI 輕量版：153,450 元（未稅）\\nAI 標準版：240,000 元（未稅）\\nAI 商務版 ：請連絡廠商報價"},{"id":"AI企業營運管理-2","category":"AI企業營運管理","sequence":2,"companyName":"台聚管理顧問股份有限公司","companyShortName":"台聚管理顧問","solutionName":"IVA/PPE 智能影像分析系統","manualUrl":"","imageFileName":"2.台聚管理顧問股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司.png","bannerFileExists":true,"solutionIntro":"【IVA/PPE標準模型】\\n導入已完成訓練之人員裝備/異常行為辨識模型，並配合現場需求進行系統整合以及模型調教。\\n\\n新北專屬優惠：\\n1.免費配合現場需求勘查，並提供AI模型部屬規劃建議。\\n2.配合廠區資訊安全要求，提供資安設備與架構規劃建議。\\n3.針對專案合作範圍，提供長期(永久)模型更新與維護服務。\\n\\n【IVA/PPE客製化模組】\\n根據客戶應用需求，客製化資訊蒐集和模型訓練。\\n\\n新北專屬優惠：\\n1.免費配合現場需求勘查，並提供AI模型部屬規劃建議。\\n2.配合廠區資訊安全要求，提供資安設備與架構規劃建議。\\n3.針對專案合作範圍，提供長期(永久)模型更新與維護服務。","companyIntro":"台聚集團為因應多元化經營及未來組織發展需要，於九十年三月十六日成立台聚管理顧問公司，統籌提供集團各關係企業之人資、員工事務、財務、會計、資訊、採購、關務、授信、稽核、 法務與股務等共同性事務之資源整合與規劃管理服務，俾使各公司更能專注在產品經營與開發，提升營運整體綜效。","contactPerson":"周先生","companyPhone":"(02)8751-6888 #2809","contactEmail":"ryanchou@usig.com","websiteUrl":"","specialPrice":"IVA/PPE標準模型：40000 元（未稅）/組(買斷)\\nIVA/PPE客製化模組：60000 元（未稅）/組(買斷)"},{"id":"AI企業營運管理-3","category":"AI企業營運管理","sequence":3,"companyName":"有創科技股份有限公司","companyShortName":"有創科技","solutionName":"空品平台系統","manualUrl":"https://drive.google.com/file/d/1Up1UNXJuX9bDhiXq3YGWMfaGceJ4YrWk/view?usp=sharing","imageFileName":"3.有創科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/3.有創科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本系統採用異常偵測與趨勢分析模型，針對空氣品質感測數據（PM2.5、TVOC、CO2、HCHO 等）進行長時間序列分析，透過歷史數據學習環境變化模式，輔助判斷異常波動與潛在風險，並支援即時預警與管理決策應用。配合超標、觸發警報、復歸等設備設定與平台呈現邏輯，完整導入具備標準化管理之工廠或營業場所。並可透過分群方式，智慧排程進行新風機的遠端連動與開關控制，大幅降低手動操作之時間成本。\\n\\n新北專屬優惠：\\n新北企業1年到期後續租，平台租用再享折扣價$24,000/年(含稅) (原價36,000/年)","companyIntro":"有創公司具備大型導覽、藍芽定位、ERP等平台設計能力，且獲得數發部人工智慧行業應用能力登錄證書。並且承接許多政府單位、民間企業等開發專案，具備豐富系統開發經驗。","contactPerson":"張先生","companyPhone":"0915-277710","contactEmail":"jjchangchun@hotmail.com","websiteUrl":"","specialPrice":"80,000 元／組（含稅）"},{"id":"AI企業營運管理-4","category":"AI企業營運管理","sequence":4,"companyName":"背景模式股份有限公司","companyShortName":"背景模式","solutionName":"APIS 臨場服務員工健康管理系統＿新北優惠方案","manualUrl":"","imageFileName":"4.背景模式股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/4.背景模式股份有限公司.png","bannerFileExists":true,"solutionIntro":"在勞動部法規趨嚴與 ESG 浪潮下，「APIS 臨場服務員工健康管理系統」是企業落實職業安全衛生法規的高效利器。本系統深度整合四大保護計畫（過勞、不法侵害、人因工程及母性保護），並將繁瑣的員工健檢資料數位化，自動執行視覺化風險分級（紅、黃、綠燈），讓職護與人資能精準鎖定高風險個案進行追蹤，顯著提升 20% 以上的管理效率。\\n\\n系統具備強大的報表自動化功能，一鍵即可生成符合法規檢查要求的統計紀錄，免除人工製表的重複作業與錯誤風險。\\n\\n方案價格說明：\\n微型企業版< 300 人公司：$49,900元 /年 \\n成長企業版 300 - 1000 人：$59,900元 /年 \\n旗艦/管顧版 > 1000 人：$59,900元+員工人數*30=報價  \\n備註： \\n1. 每套會有管理權限5組免費，新增一組$5000元/年 \\n2. 人頭加購費每增加一人$30元 /年。 （以上皆未稅）        \\n\\n新北專屬優惠：\\n1. 任何版本基本費：每年一律折扣10,000元。\\n2. 人頭加購費：每增加一人20/年。\\n3. 免費教育訓練乙次\\n4. 免費試用期兩週","companyIntro":"在數位轉型的浪潮中，我們致力於成為企業最可靠的數位轉型推手。我們協助各產業開發量身設計的數位化工具，將複雜的流程化繁為簡，實質提升企業及產業效率升級。\\n而我們更在「企業健康職場」領域深耕多年。憑藉著與中部專業臨場服務單位長達一年以上的共同研發，我們針對臨場服務開發出專屬的數位化平台，大幅增強企業對員工健康照護的關懷深度。目前，這套系統已成功導入上市公司與中部指標型醫療院所，透過精準的數據管理，讓健康服務更具感溫與效率。","contactPerson":"郭培聖 總監","companyPhone":"0961117336","contactEmail":"jeffrey.kuo@bgmotion.com.tw","websiteUrl":"https://bgmotion.com.tw/","specialPrice":"微型企業版：49,900元 ／年 （未稅）\\n成長企業版 ：59,900元／年 （未稅）\\n旗艦／管顧版：59,900元＋員工人數*30＝報價（未稅）"},{"id":"AI企業營運管理-5","category":"AI企業營運管理","sequence":5,"companyName":"滿拓科技股份有限公司","companyShortName":"滿拓科技","solutionName":"Document Expert (企業級AI文件智能檢索問答平台)","manualUrl":"https://drive.google.com/drive/folders/1xB44Zdbvee4Cr87iubEbNK9YyrSVqeGL?usp=sharing","imageFileName":"5.滿拓科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/5.滿拓科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"一、 核心檢索與智能問答\\n•        企業級 RAG 增強架構：內建高精準度檢索增強生成(RAG)系統，確保AI不僅是說話，更是基於企業內部實體知識庫進行回覆，有效消除模型幻覺。\\n•        AI Agent外部聯網與協作：升級版搭載智能代理 (AI Agent)，除內部資料外，更可即時檢索外部資訊，打破資訊孤島，實現內外知識的完美融合。\\n•        可溯源的實事求查：所有回答均附帶原始文件參照連結與引用來源，方便使用者一鍵回溯查核，確保資訊的來源性與真實性。\\n二、 強大的文件解析能力\\n•        多元格式全面相容：完美相容 PDF、Word (.docx)、HTML、Markdown等多種主流格式，讓零散的文件資產即刻轉化為可利用的數據價值。\\n•        尖端圖文辨識技術：結合光學字元辨識(OCR)與視覺語言模型(VLM)，能精準讀取複雜的掃描檔、圖表、表格與圖片內容，實現真正意義上的全文本數位化。\\n三、 嚴謹的企業級管理\\n•        精細化權限控管：支援完善的角色權限設定，確保敏感資料僅限授權人員存取，符合企業資安與合規性最高標準。\\n•        多維度專案管理功能：可依據組織編制（如財務、研發、法務）或查詢類型建立獨立專案空間，讓知識分類井然有序，優化團隊協作流程。\\n\\n方案價格說明：\\n短期轉型衝刺NT$90,000 (6 個月、10 個使用者) （未稅）\\n年度數位升級NT$168,000 (12 個月、10 個使用者)（未稅）\\n\\n新北專屬優惠：\\n•免費教育訓練：凡參與本輔導計畫之企業，贈送一場「AI 實戰落地：知識即戰力，極速驅動辦公效能」線上或實體AI課程。\\n•無痛升級服務：為降低企業從雲端SaaS轉向私有化部署的門檻，本方案提供「原廠回饋折抵」機制。企業於本方案合約期間所支付之SaaS服務費用，未來兩年內可申請轉為 Document Expert或FinetuneX落地部署之建置抵用金；未來導入落地建置時，最高折抵金額上限為該專案「軟體平台授權費用」之10%","companyIntro":"滿拓科技致力於提供領先市場的「落地式 GenAI」一站式服務。憑藉獨家RAG技術與具備任務執行能力的 AI Agent，並結合高度自動化的 LLM 訓練流程，我們協助企業在確保資料隱私的前提下，快速建構專屬領域AI應用，實現從「資訊檢索」到「自主協作」的AI數位轉型。\\n\\n\\n核心產品：\\n•Document Expert：企業級AI文件智能檢索問答平台。結合 RAG 與 AI Agent 技術，除精準檢索內部資料外，更具備自主查詢外部資訊與自動化報告協作能力，能夠串接多方資訊並產出成果，直擊企業辦公痛點。\\n•FinetuneX：專為模型精煉設計的工具。透過Data Expert進行高品質數據擴增與精煉，並結合Finetune Expert平台，協助企業打造最貼合業務情境的專屬AI模型。","contactPerson":"高小姐/ 專案經理","companyPhone":"02-6604-3279 #207","contactEmail":"emma.kao@deepmentor.ai","websiteUrl":"https://www.deepmentor.ai/","specialPrice":"短期轉型衝刺：90,000 元（未稅）\\n年度數位升級：168,000 元（未稅）"},{"id":"AI企業營運管理-6","category":"AI企業營運管理","sequence":6,"companyName":"睿思創新股份有限公司","companyShortName":"睿思創新","solutionName":"CROSSBOT AI Agent Platform Basic 基礎版 (入門)","manualUrl":"https://youtu.be/SZW50d7qaKs?si=gngIw_T14gnla4O4","imageFileName":"6.睿思創新股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/6.睿思創新股份有限公司.png","bannerFileExists":true,"solutionIntro":"採用 CROSSBOT AI Agent Platform – Basic 基礎版 AI 平台服務，以標準化模組設計，提供組織可即時啟用之 AI 應用功能，無需進行客製化系統開發，即可快速導入使用。\\n方案包含模組：\\nBasic 基礎版包含以下核心模組：\\n1. 智能客服(基礎模組)\\n• 提供自然語言互動式 AI 客服服務\\n• 支援 LINE 與 Web 對話入口\\n• 可即時回應常見問題(FAQ)、服務說明與流程查詢\\n• 適用於客服諮詢量高且內容標準化之應用場景\\n2. AI KM(小型知識庫模組)\\n• 支援文件上傳與基礎知識管理(如 SOP、說明文件)\\n• 將文件內容轉換為 AI 可查詢之知識庫\\n• 透過自然語言即可查詢文件重點與相關說明\\n• 適合部門或單位層級之知識管理需求\\n\\n方案價格說明：平台服務費用：NT$ 250,000/年 （含稅）(年訂閱制)\\n新北專屬優惠：\\n1. ASUS GX10 AI 伺服器(選購)加購價格：+NT$ 150,000（含稅）\\n(適用於地端部署、資料不外流或對資安有高度需求之場域)\\n2. 平台+硬體組合優惠價\\n組合價(含 ASUS GX10)：NT$ 400,000/年（含稅）\\n(組合方案可同時滿足 AI 平台服務與地端運算需求,適合有未來擴充 AI 應用或治理需求之單位。)","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","contactPerson":"陳先生","companyPhone":"02-77297007","contactEmail":"hanchen@reas.com.tw","websiteUrl":"https://www.reas.com.tw/","specialPrice":"250,000 元／年（含稅）"},{"id":"AI企業營運管理-7","category":"AI企業營運管理","sequence":7,"companyName":"睿思創新股份有限公司","companyShortName":"睿思創新","solutionName":"CROSSBOT AI Agent Platform – Pro 專業版","manualUrl":"https://youtu.be/SZW50d7qaKs?si=gngIw_T14gnla4O4","imageFileName":"7.睿思創新股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/7.睿思創新股份有限公司.png","bannerFileExists":true,"solutionIntro":"為針對已完成 AI 入門導入、並希望進一步擴大應用範圍之組織所設計之進階平台方案。\\n提供更完整的 AI Agent 能力、進階知識管理與多角色治理機制，支援跨部門、多使用者與較高使用量之實務場景。\\n方案包含模組：\\nPro專業版包含以下核心模組(含Basic全部功能)：\\n1. 智能客服\\n2. AI KM\\n3. AI Agent 任務流程模組\\n4. AI BI (數據分析)\\n\\n方案價格說明：NT$500,000/年（含稅） (年訂閱制)\\n新北專屬優惠：\\n1. ASUS GX10 AI 伺服器(選購)加購價格：+ NT$ 150,000（含稅）\\n(適用於地端部署、資料不外流或對資安有高度需求之場域)\\n2. 平台+硬體組合優惠價\\n組合價(含 ASUS GX10)：NT$ 650,000/年（含稅）\\n(組合方案可同時滿足 AI 平台服務與地端運算需求,適合有未來擴充 AI 應用或治理需求之單位。)","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","contactPerson":"陳先生","companyPhone":"02-77297008","contactEmail":"hanchen@reas.com.tw","websiteUrl":"https://www.reas.com.tw/","specialPrice":"500,000 元／年（含稅）"},{"id":"AI企業營運管理-8","category":"AI企業營運管理","sequence":8,"companyName":"網際智慧股份有限公司","companyShortName":"網際智慧","solutionName":"快合規 – AI廣告違規風險檢核與修正建議服務平台 (https://xcomply.ai)","manualUrl":"https://www.xcomply.ai/business-intro","imageFileName":"8.網際智慧股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/8.網際智慧股份有限公司.png","bannerFileExists":true,"solutionIntro":"快合規 - 企業版 加強包 A 方案：\\n\\n① 第三代 AI 精準圖文檢核 150 次\\n② 法遵/合規審查專人諮詢 6 次\\n③ 登入帳號 不限（行銷、法遵、主管）\\n④ 可檢核文字、圖片、PDF文件\\n⑤ 提供廣告違規風險檢核報告\\n⑥ 提供圖文廣告違規風險標示（含風險段落、對應法規、相關裁罰案例、裁罰金額分析）\\n⑦ 提供合規調整建議\\n⑧ 額外提供Chrome外掛方便網頁快速檢核\\n⑨ 智慧審查及意見加註功能（行銷->法遵->主管）\\n⑩ 版本管理、完整審查歷程記錄\\n⑪ 提供自訂規則及關鍵字功能\\n⑫ 每月更新法規及裁罰案例\\n⑬ 支援食品（含健康食品）、化粧品、寵物食品、醫美、類菸品等產業\\n⑭ 使用有效期一年\\n\\n新北專屬優惠：\\n免費教育訓練","companyIntro":"網際智慧（IQT.AI）致力於建構「可信任、有溫度」的 AI Agent 體系，橫跨文字輸入、聲音表達、影音創作與法遵合規四大領域。我們屢獲金鼎獎、經濟部智慧創新大賞 Best AI Awards、台灣人工智慧協會 AI Award Best Solutions、數位發展部數位產業署－AI應用鬥智賽、AI TAIWAN 創新商務獎等頂尖殊榮。旗下主力包含：①長期穩居市佔領先的－text.tw 自然輸入法、②賦予 AI 擬真人聲的－VoAI.AI 絕好聲創，③確保企業治理與合規的－XComply.AI快合規。網際智慧不只是技術專家，更是企業數位轉型最值得信賴的 AI 夥伴！","contactPerson":"羅經理","companyPhone":"02-77087068","contactEmail":"sales@iqt.ai","websiteUrl":"www.iqt.ai","specialPrice":"80,000 元／年（含稅）"},{"id":"AI企業營運管理-9","category":"AI企業營運管理","sequence":9,"companyName":"聚典資訊股份有限公司","companyShortName":"聚典資訊","solutionName":"聚典資訊ｘ新北企業限定優惠：AI智慧轉型零門檻啟動方案","manualUrl":"","imageFileName":"9.聚典資訊股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/9.聚典資訊股份有限公司.png","bannerFileExists":true,"solutionIntro":"為協助新北市大中小企業啟動智慧轉型，本公司推出專屬優惠方案，涵蓋智慧零售與智慧製造應用。\\n\\n我們提供免費顧問諮詢，協助企業盤點流程現況、資料與營運痛點，並進行技術可行性與應用的建議，作為後續是否正式啟動轉型之決策參考。\\n\\n企業可無壓力理解 AI、ML 與大數據如何實際應用於自身場域，降低試錯風險，確保後續投入方向清楚且具效益。\\n\\n方案價格說明：需求訪談+功能規劃+技術可行性評估 原價80 萬~500 萬元\\n新北專屬優惠：\\n免費需求訪談+功能規劃+技術可行性評估。\\n另外數據盤點、系統架構、各項功能建置之專案報價，可依項目折扣，總折扣最高22萬。","companyIntro":"聚典資訊是數據價值的重述者。創立於 2019 年 3 月，由頂尖工程與專業經理人組成。深受超過300家客戶信賴，榮獲20多項獎項肯定。並擁有 ISO27001 資訊安全管理認證，以及數位發展部之 AI 技術服務能量登錄官方認證。\\n我們整合AI、AIoT與系統開發，為製造業與零售業提供智慧解決方案，包含智能生產線、ESG轉型、AI分群行銷、智能客服，以及客製化方案。導入聚典的AI解決方案，您的企業將在資料科學的支持下持續增長。","contactPerson":"卓先生","companyPhone":"(02)2785-3858","contactEmail":"evanjaw@retailingdata.com.tw","websiteUrl":"https://retailingdata.com.tw/","specialPrice":"依專案報價， 平均80 萬~500 萬（含稅）"},{"id":"AI企業營運管理-10","category":"AI企業營運管理","sequence":10,"companyName":"臺灣通用紡織科技股份有限公司","companyShortName":"臺灣通用紡織科技","solutionName":"TextileCloud™ - AI 驅動的企業級材料管理解決方案-Annual Package -Basic","manualUrl":"https://drive.google.com/file/d/1TWcRUNjPF4n6duZhjZLpeNjXMdtH4vzs/view?usp=sharing","imageFileName":"10.臺灣通用紡織科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/10.臺灣通用紡織科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"TextileCloud 協助紡織業者、服裝品牌與供應商高效管理與應用布料數據。其服務以AI與雲端為核心，納入高效的數位產品建立（DPC）流程，將實體布料轉換為可用於2D／3D設計的數位素材，集中建立於雲端布料資料平台（TextileCloud™），為企業強化數位資產管理（DAM）的核心價值\\n\\n服務項目：\\n1. 500片布料掃描，AI生成布料物理參數與擬真布料產品圖\\n2. 3組使用者帳號、1組內部工作團隊、1組外部協作帳號\\n3. 私有&公開布料資料庫，無限次數分享、即時發送需求\\n4. 3D Viewer及時預覽功能 (提供3組+球體虛擬模型)\\n5. 資料庫內支援文字語意搜尋，以圖搜圖功能","companyIntro":"Frontier 以 TextileCloud 為核心產品，提供一站式數位布料管理解決方案，整合 2D / 3D 布料影像、規格資訊與永續數據。平台涵蓋數位資產管理（DAM）、數位產品建置（DPC）流程與永續數據模組，協助企業集中管理布料資料、快速生成具物理參數與 AI 擬真效果的 3D Material，並可對接主流 3D 設計軟體。同時內建 LCA 架構，提供碳排與水耗等環境指標，支援 DPP 與 ESG 需求。相較傳統流程，無需額外硬體投資，可降低樣品寄送成本、縮短開發時程，強化品牌與供應鏈間的即時協作效率。","contactPerson":"陳映慈經理","companyPhone":"02-27528855","contactEmail":"clara@frontier.cool","websiteUrl":"https://www.frontier.cool/","specialPrice":"177,199 元／年 (含稅)"},{"id":"AI企業營運管理-11","category":"AI企業營運管理","sequence":11,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"WinChat－各產業應用的大語言模型應用平台","manualUrl":"https://drive.google.com/file/d/1R0B9quHfH9tY5psOAgWD_NX0m2L3z7fx/view?usp=drive_link","imageFileName":"11.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/11.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"WinChat為慧穩科技融合式AI解決方案WinHub.AI旗下之通用平台之一，係以AI大語言模型（LLM）為核心，結合深度文件理解與檢索增強生成技術（RAG）之對話式問答平台。\\n平台可於理解使用者問題後，自大量非結構化文件中精準擷取相關內容，並提供具引用來源之回覆結果。\\nWinChat 支援私有環境部署，無須外部雲端運算與儲存資源，適用於多元產業情境，可有效協助組織整合內部知識文件、強化作業效率並提升對外服務品質。\\n\\n系統特色說明：\\n一、深度文件理解與精準檢索\\n二、免程式碼操作介面\\n三、專屬且獨立的知識庫管理\\n四、降低生成幻覺風險\\n五、系統整合與私有化部署\\n\\n功能模組說明：\\n一、專案管理\\n二、知識庫管理\\n三、聊天助理設定\\n四、問答對話應用\\n\\n方案價格說明：\\n方案一、永久買斷方案  \\n一、 標準定價(不含電腦系統)：NT$ 600,000（未稅）\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。  \\n方案二、年授權  \\n一、標準定價(不含電腦系統)：NT$ 200,000（未稅）\\n二、模式說明：以年為單位支付訂閱費。訂閱期間即為保固期，享有免費軟體更新服務。\\n\\n新北專屬優惠：\\n方案一、永久買斷方案\\n一、 優惠折扣:9折\\n二、 首年保障：內含首年保固與維護服務。保固期限後，維護費用依客戶實際需求另計。\\n三、 服務內容:\\n1. 產品保固：首年硬體/軟體保固。\\n2. 版本更新：首年享有週期半年一次的系統更新\\n3. 技術諮詢：8x5 (工作日) 專家諮詢。\\n\\n方案二、年授權\\n一、優惠折扣:9折\\n二、服務內容:\\n1.產品保固：訂閱期間內全程享有保固服務。\\n2.版本更新：訂閱期間持續享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525580","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"永久買斷方案：600,000 元（未稅）\\n年授權：200,000 元／年（未稅）"},{"id":"AI企業營運管理-12","category":"AI企業營運管理","sequence":12,"companyName":"曜夆科技股份有限公司","companyShortName":"曜夆科技","solutionName":"AI對話型服務整合方案(產品名稱：DocInsight AI)","manualUrl":"","imageFileName":"12.曜夆科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/12.曜夆科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"讀懂你的文件內容，更懂使用者真正想問的問題。我們協助企業將現有網站內容、文件與知識庫整合為可運用的自然對話型服務。透過導入企業內部文件、FAQ、作業規範與公告內容，由 AI 協助即時回應使用者提問，並可依需求部署於官網、LINE 或內部系統，整體系統由後台統一管理，確保資料來源可控、內容可更新。\\n本方案使用 RAG檢索增強生成技術的 AI 技術，協助理解既有網站與文件內容，並將使用者以自然語言提出的問題，準確對應至相關資訊，讓查詢流程更有效率，也為後續服務建立清楚的基礎。\\n\\n新北專屬優惠：\\n本方案為整合型的解決方案，包括需求訪談、客製化導入及AI功能的月租流量服務。AI對話型服務整合方案：\\n-        設定費：$20000（未稅） (含基本教育訓練及客製化需求訪談)\\n-        月租費 ：合約24個月，可用信用卡扣款方式\\na.        網頁整合Web $14500/月（未稅）\\nb.        通訊軟體LINE整合 $ 8000/月（未稅）\\nc.        雙平台版本 21000/月（未稅）\\n客戶可以從a、b、c方案擇一進行佈建，針對新北專案以租約24個月並使用信用卡訂閱者，每月再額外多送AI使用量300萬TOKEN並減免設定費50% ($10,000)。\\n請注意：TOKEN使用量/月，會隨客戶專案的使用變動，或許會產生額外的費用(可設上限)。","companyIntro":"直接驅動營收成長與營運效率提升。月租 5,000 元起，免高額建置費，最快數日導入、模組架構、彈性擴充。由 CGSI（中華寰宇整合）提供整合規劃、客製開發與企業級部署，確保穩定上線與長期營運，轉化企業既有圖文資料為「可成交、可預測、可優化」的 AI 生產力系統：\\n．AI 商機成交助理：整合官網、LINE、電子表單訊息，LLM判讀客戶意圖與成交潛力分級，提供預期方案建議並可生成業務人員跟進摘要，打造24 小時接單機制\\n．AI CRM／ERP／MES：訂單自動轉工單，串聯庫存與產能，提供交期預估與異常預警，並整合銷售與產線數據，實現跨部門資訊整合；具備近零硬體建置成本、無須額外學習曲線與AI數據分析能力\\n\\n立即行動：留下您的需求，享免費 AI 導入諮詢，快速導入最適解決方案。","contactPerson":"王副理","companyPhone":"02-55994575","contactEmail":"stanwang@ch-si.com","websiteUrl":"www.ch-si.com","specialPrice":"21,000 元／月（未稅）"},{"id":"AI企業營運管理-13","category":"AI企業營運管理","sequence":13,"companyName":"璽樂科技股份有限公司","companyShortName":"璽樂科技","solutionName":"AI影片生成與教育訓練","manualUrl":"https://youtu.be/8hTh4_Y7W7w","imageFileName":"13.璽樂科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/13.璽樂科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"AI影片生成×教育訓練，將「內容製作、受訓確認、門禁通行」一次整合。系統可依施工工項說明與提示詞，自動整理重點、注意事項與安全提醒，一鍵生成教育訓練影片，內容口徑一致、版本可快速更新，大幅降低製作與維護成本。訓練完成後，系統自動留存紀錄並與門禁權限連動：只有完成教育訓練並確認者，才會開通掃臉通行；未完成教育訓練者不可通行，確保規範真正落地。同時支援上傳人員照片建立辨識名單、上傳聲音統一講解，提升現場適配性與管理效率，讓管理者清楚掌握受訓進度、追蹤與稽核更便利，打造可驗證、可控管的安全教育流程。\\n\\n方案價格說明：\\nFACE AIO_55吋+人員管制組（人臉辨識機+閘機）NT 139,000（未稅）\\n•影片單次製作（按支計費） NT$1,500／支（48 秒）（未稅） \\n•含：影片生成＋下載（依系統流程） \\n•超過48's影片製作,另行計費\\n\\n新北專屬優惠：\\n•維護內容：\\n1.系統功能異常修復（非人為/非第三方因素）\\n2.服務可用性與例行更新（不影響既有資料）\\n3.硬體設備保固1年（非人為/非第三方因素）\\n•支援回覆：\\n1.一般問題：1 個工作日內回覆\\n2.重大故障（無法分析/無法輸出）：4 小時內回覆（工作時段：週一至週五09：00～18：00,不含國定假日）","companyIntro":"璽樂科技專注營建與公共工程場域，提供結合 AI 影像、IoT 感測與雲端管理的一站式智慧工安平台。系統涵蓋人員出入、危險區域管制、環境監測、異常警示與影像留存等功能，以模組化設計對應不同規模工地，並支援多工地雲端監控與權限管理，讓總公司可即時掌握各工地風險與狀態，同時自動產出符合金安獎、金質獎與勞檢需求的報表，降低人工整理成本。","contactPerson":"廖先生/李先生","companyPhone":"02-87515266","contactEmail":"james.liao@i-daka.com / iglee@i-daka.com","websiteUrl":"https://idaka.io/","specialPrice":"FACE AIO_55吋+人員管制組：139,000 元／組（未稅）\\n影片單次製作：1,500 元／支（未稅）\\n超過48's影片製作：請連絡廠商報價"},{"id":"AI助理-1","category":"AI助理","sequence":1,"companyName":"大數軟體有限公司","companyShortName":"大數軟體","solutionName":"RAGi 企業 AI 決策平台","manualUrl":"https://drive.google.com/file/d/1e4oXsbnAlmzFEUWnGBP1UHY-pW1oXoKb/view?usp=sharing","imageFileName":"1.大數軟體有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI助理/1.大數軟體有限公司.png","bannerFileExists":true,"solutionIntro":"RAGi 是一套企業級 AI 檢索增強生成（RAG）引擎，將大型語言模型與企業內部知識庫結合，支援地端或雲端部署，資料 100% 不外流，適用於金融、製造、政府等需要安全智慧化知識管理的場景。\\n\\nRAGi支援文字、語音、圖像、影片等多模態內容輸入，以及各種常見檔案格式和資料來源。企業可輕鬆整合內部零散數據，打造一座豐富的知識庫。而RAGi內建的混合搜尋引擎，更是結合了關鍵字搜尋和語義理解技術等混合搜尋技術，讓使用者能夠快速搜尋到最準確的內容，有效降低幻覺，大幅強化大型語言模型的問答能力。\\n\\n新北專屬優惠：\\n導入與教育訓練","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","contactPerson":"丘先生","companyPhone":"02-2585-5080","contactEmail":"david@largitdata.com","websiteUrl":"https://largitdata.com/","specialPrice":"地端：1,973,970 元（含稅）\\n雲端：121,335 元（三個月）（含稅）"},{"id":"AI助理-2","category":"AI助理","sequence":2,"companyName":"易晨智能股份有限公司","companyShortName":"易晨智能","solutionName":"語音辨識語言學習及逐字稿","manualUrl":"https://www.youtube.com/watch?v=7jdt9iYjz1c","imageFileName":"2.易晨智能股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI助理/2.易晨智能股份有限公司.png","bannerFileExists":true,"solutionIntro":"【語音辨識語言學習】\\nEZTalking AI評分自主研發「語音辨識」、「發音檢測」，精準分析 word 以及 phone 音標的分數，自主研發專利技術。AI口說學習平臺，手機APP、電腦網頁都可使用，學生可隨時隨地練習，當場練習當場評分，即時性高反應速度快，可立即重複練習仿真雙語環境。AI 評分系統可立即讓學生看到練習的分數，同時有學習紀錄完整的學習歷程。「語音辨識」演算法能將聲音辨識出文字，「發音檢測」能將聲音與文字進行精準計算。\\n\\n方案價格說明：價格4800(含稅)，一個帳號一年費用\\n服務內容：提供AI 語音學習平台，內含英文學習教材\\n\\n【會議記錄暨醫療交班紀錄逐字稿】\\n•  高精準醫療語音辨識：內建專業醫學詞庫，能精準識別艱澀的專有名詞、藥名及縮寫。在護理交班時，能自動將口述內容轉化為結構化的文字軌跡，避免資訊在口耳相傳中遺漏。一般開會會議紀錄精準國、台、英混和語系，精準辨識。\\n•  AI 自動摘要與結構化紀錄：不僅提供「逐字稿」，更利用 AI 模型進行語意分析，將冗長的會議紀錄自動歸納成重點決策；在交班紀錄中，則能依照標準化架構自動分類數據與醫囑。會議記錄完整摘要分析，快速讀取紀錄內容。\\n\\n方案價格說明：價格6300(含稅)，一個帳號一年費用\\n服務內容：提供會議記錄平台，內含會議紀錄逐字稿摘要分析","companyIntro":"易晨智能將語音辨識、自然語言分析，應用於應用在智慧教育以及智慧醫療做跨領域結合，運用機器學習、深度學習、資料探勘演算法，讓用戶有所感受。重點發展的是語音辨識以及自然語言文字分析處理以及數據分析，今年我們重點發展的項目是AI教育以及AI 醫護交班逐字稿紀錄。AI教育解決中英文口說問題，用AI進行評分及對話；AI 逐字稿交班紀錄解決醫護人員人力不足以及可即時性逐字記錄並進行摘要分類。","contactPerson":"許先生業務總監","companyPhone":"228570010","contactEmail":"mic@ez-ai.com.tw","websiteUrl":"ez-ai.com.tw","specialPrice":"語音辨識語言學習：4,800 元／年（含稅）\\n會議記錄暨醫療交班紀錄逐字稿：6300 元／年（含稅）"},{"id":"AI助理-3","category":"AI助理","sequence":3,"companyName":"創造智能科技股份有限公司","companyShortName":"創造智能科技","solutionName":"AI Sales 智能銷售助手","manualUrl":"https://www.youtube.com/watch?v=gvfrjiJozQY","imageFileName":"3.創造智能科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI助理/3.創造智能科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"AI Sales 智能銷售助手具備結合多語系對話、即時法規查詢與 CRM／ERP 串接等功能外，更可以節省人力與人事成本，達到全年24小時不間斷，智慧應對各種場景需求。另外使用知識圖譜作為知識庫，可以更有效地管理和維護知識內容，減少人工維護的工作量，達到降低維護成本，故適用於中小微企業/組織。\\n\\n方案價格說明：\\n1.網頁版虛擬人： (每月贈5萬則AI回覆，超過每個回覆以1.5元收費，Token費用)，訂閱12個月共NT$240,000(未稅) (基本上以一年計價)\\n2.設定費：NT$50,000(未稅) \\n3.串接平台：NT$50,000(未稅) \\n4.知識庫訓練費：專案報價(未稅)\\n\\n新北專屬優惠：\\n1.購買6個月贈送1個月使用期限，購買12個月贈送2個月使用期限(基本上以一年計價)。","companyIntro":"創造智能科技是一家AI Martech新創公司，專注於 AI行銷科技、LINE CRM、AI客服機器人與 AI虛擬人應用，致力於協助企業將「流量」真正轉化為「可經營的會員與數據資產」。\\n結合影音內容、行銷科技與AI應用實戰經驗，打造可快速導入、可規模化、可量化成效的AI解決方案，客戶涵蓋政府單位、大型企業、品牌客戶與文化觀光場域。\\n主要商品/服務項目：\\n•\\tLINE CRM × AI客服：協助企業建構可分析語意、貼標分眾、導流轉換的LINE官方帳營運系統。\\n•\\tAI虛擬人與互動導覽：應用於官網、line、FB message、活動、展覽、品牌互動與智慧導覽場域。\\n•\\tAIGC影音與廣告製作：加速影音內容產製，降低成本、提升產量與品質。\\n•\\tAI落地應用顧問服務：從場景設計、互動策略到實際成效落地。","contactPerson":"蔡先生","companyPhone":"02-27913588#83506","contactEmail":"erictsai@aicreate360.com","websiteUrl":"https://www.aicreate360.com/","specialPrice":"網頁版虛擬人：240,000 元／12個月（未稅）\\n設定費：50,000 元（未稅） \\n串接平台：50,000 元（未稅）\\n知識庫訓練費：專案報價（未稅）"},{"id":"AI助理-4","category":"AI助理","sequence":4,"companyName":"緯謙科技股份有限公司","companyShortName":"緯謙科技","solutionName":"WiKMS 企業知識管理助手","manualUrl":"","imageFileName":"4.緯謙科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI助理/4.緯謙科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"利用AI Agent 加上企業資料庫的串接，提供企業AI agent提升工作效率，解決中小企業人力不足、工時長的痛點。 WiKms是專為企業打造的智慧知識管理系統，其核心目標在於解決企業內部知識分散、難以檢索與應用的問題。利用先進的大型語言模型技術，結合雲地整合架構，在確保資料安全的前提下，提供高效的知識管理服務。 WiKMS 適用於多種企業知識管理場景，具有廣泛的應用彈性，能滿足不同規模與行業的企業需求。 \\n\\n方案價格說明：30萬/年(未稅)/一般方案\\n新北專屬優惠：\\n1.首年訂閱加贈3個月(共15個月)。[費用為產品訂閱授權，不含硬體及相關使用費] \\n2.加贈 4小時AI輔導顧問服務。","companyIntro":"緯謙科技 (WiAdvance) 為緯創集團旗下子公司，作為創新的雲端服務供應商，提供以Cloud、AI、Data為核心的一站式服務，，擁有強大的雲端技術團隊與豐富的場域落地經驗，深耕智慧製造、智慧醫療、智慧城市、智慧農業/零售等垂直產業應用，專注以雲端科技為企業打造數位轉型的強韌實力。","contactPerson":"客服專員","companyPhone":"0809-000-100","contactEmail":"service@wiadvance.com","websiteUrl":"www.wiadvance.com","specialPrice":"30萬元／年（未稅）"},{"id":"AI助理-5","category":"AI助理","sequence":5,"companyName":"環球睿視股份有限公司","companyShortName":"環球睿視","solutionName":"AIspeakin – AI即時/非即時語音辨識/翻譯/語譯服務","manualUrl":"https://www.loom.com/share/2e6a63c677e24fd4a4d37763ea3bdb03?sid=d0343998-e456-4cde-9b65-65f3e01e2d03","imageFileName":"5.環球睿視股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司.png","bannerFileExists":true,"solutionIntro":"(1)支援語言包含：中文、英文、日文、韓文、東南亞語文（泰文、越南文、菲律賓他加祿文、印尼文）、歐洲語文（德文、法文、西班牙文、葡萄牙文、義大利文等）、俄文、阿拉伯文、印地文、泰米爾文、烏爾都文等語言雙向轉譯，約涵蓋全球80%以上人口\\n(2)AI 即時翻譯輸出功能：\\n    2-1將語音訊息以 AI 轉譯後，提供翻譯後的文字訊號輸出，以顯示於螢幕或行動裝置\\n    2-2可操作清除，以清除前一翻譯輸出畫面。歷史對話內容不會儲存於系統主機\\n(3)AI語音辨識逐字稿功能：提供語音辨識及翻譯逐字稿\\n(4)AI語音生成功能：提供將AI翻譯內容以AI語音生成方式唸出來之功能。\\n(5)維運服務：平日5天 x 8小時之線上客服，透過電話協助引導使用人員排除故障事件，並回覆系統操作或需求相關問題\\n\\n* 時數、帳號數量可依照需求彈性調整，需要請洽環球睿視窗口詢問 carol.tsao@ubestream.com\\n\\n【即時翻譯1個帳號1年50小時服務時數】\\n新北專屬優惠：\\n1. 新北夥伴專屬：數位轉型無障礙優惠\\n只要您是透過新北合作平台或相關專區看到此資訊，即可享有專案補助價！\\n為了加速各產業導入 AI 工具、建構多語友善環境，我們打破行業與地域限制，提供新北夥伴最實質的數位升級支持\\n專案特惠價：$15,675 元（原價 $16,500）\\n適用對象：凡經由新北合作管道獲知此訊息之商家、企業\\n\\n2. 好友 +1 雙向回饋：時數大方送\\n好服務值得分享，時數回饋讓溝通更長久。\\n透過現有用戶成功介紹新用戶加入 AIspeakin 家族，雙方皆可獲得額外時數：\\n介紹人（原用戶）：成功介紹一位新夥伴，您的帳號將自動加贈 5 小時。\\n被介紹人（新用戶）：首月加碼多贈 3 小時服務時數，體驗更完整。\\n\\n【即時翻譯 1 個帳號 1 年 100 小時服務時數】\\n新北專屬優惠：\\n1. 新北夥伴專屬：數位轉型無障礙優惠\\n只要您是透過新北合作平台或相關專區看到此資訊，即可享有專案補助價！\\n為了加速各產業導入 AI 工具、建構多語友善環境，我們打破行業與地域限制，提供新北夥伴最實質的數位升級支持。\\n專案特惠價：$28,500 元（原價 $30,000）\\n適用對象：凡經由新北合作管道獲知此訊息之商家、企業。\\n2. 好友 +1 雙向回饋：時數大方送\\n好服務值得分享，時數回饋讓溝通更長久。\\n透過現有用戶成功介紹新用戶加入 AIspeakin 家族，雙方皆可獲得額外時數：\\n介紹人（原用戶）：成功介紹一位新夥伴，您的帳號將自動加贈 5 小時。\\n被介紹人（新用戶）：首月加碼多贈 3小時服務時數，體驗更完整。","companyIntro":"環球睿視 (Ubestream) 成立於 2016 年，是專注於語音人工智慧與智慧語音技術的深科技 (Deep-tech) 領導廠商，亦是首家掛牌創櫃板的 AI 創新企業 (TPEx 7587)。我們的核心優勢在於自主研發的全棧式 AI 語意語音演算法，深度整合語音識別 (STT)、語音生成 (TTS)、自然語言理解 (NLU) 與文本分析 (NLP)。憑藉卓越的技術架構，我們能將 AI 模型部署於雲端、邊緣端 (Edge)及嵌入式晶片，在無需網路連接的環境下，實現安全、低延遲且具備強大數據隱私保護的即時人機互動。旗下旗艦產品「AIspeakin 同步口譯代理人」運用串流式全雙工 (Streaming Duplex) 與 GenAI 技術，具備上下文自動校正與語種自動辨識功能，達成高準確、秒速級的雙向翻譯。已成功進駐台灣四大國際機場，提供國門級的多語服務，並廣泛應用於影音轉寫、會議紀錄及同步口譯等場域。目前已將事業版圖擴張至美國、日本、新加坡等全球市場，持續為智慧城市、交通、金融、旅遊與公共服務領域提供具高度擴展性的語音 AI 解決方案，實現 24 小時免接觸、高效率的人機協作未來","contactPerson":"白小姐","companyPhone":"02 8751 5176","contactEmail":"tech@ubestream.com","websiteUrl":"https://ubestream.com/","specialPrice":"50小時：15,675 元／月（未稅）\\n100 小時：28,500  元／月（未稅）"},{"id":"AI居家照護-1","category":"AI居家照護","sequence":1,"companyName":"凌松科技有限公司","companyShortName":"凌松科技","solutionName":"AI Coach 功能性體適能評估","manualUrl":"","imageFileName":"1.凌松科技有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI居家照護/1.凌松科技有限公司.jpg","bannerFileExists":true,"solutionIntro":"一、目的：本計畫旨在建立 AI 功能性體適能檢測系統，聚焦肌力、平衡與心肺耐力三大面向，針對長者進行肌少症風險評估，作為健康監測與運動安全的基礎。\\n二、方法：採用中低階（720p 以下）視訊鏡頭，無需穿戴式裝置，結合電腦視覺與深度學習技術，辨識人體骨骼至少 17 個以上特徵點位，於社區運動場域即時標示。系統生成動作記錄與姿勢辨識，自動給予動作評分。\\n三、創新性：突破傳統健身房依賴專業教練的限制，利用低成本設備即可完成專業姿勢檢測。強調「非穿戴式」與「即時影像辨識」的結合，提升 AI 在社區場域的應用可行性。\\n四、效益：提供長者便利的健康檢測工具，降低肌少症風險，提升運動安全性。民眾可在社區即可獲得專業姿勢訓練與數位化課程支持，促進健康促進與運動普及。\\n五、可行性：技術門檻低，設備需求簡單，適合廣泛推廣。結合既有社區運動場域與教學檔案，能快速導入並形成可持續的健康監測模式。\\n\\n標準採購價：每套設備租用1年(1組)新台幣 NT$ 200,000（含安裝與教育訓練）        \\n新北市政府專屬優惠價：每套設備新台幣 NT$ 180,000（約 10% 折扣）（含稅）","companyIntro":"凌松科技專注於健康科技整合，結合資訊、運動科學、公共衛生與人工智慧，打造 AI Coach智慧健康生態系。平台整合銀髮族、運動、營養、認知、感官與生活數據，應用於高齡城市、智慧住宅及健康促進服務。多年來協助政府、企業、學校與社區建構智慧健康照護系統，並屢獲國內獎項及聯合國教科文組織（UNESCO）專案肯定。\\n團隊擁有多項台灣與國際專利，技術涵蓋AIoT感測、生醫系統、穿戴裝置、運動訓練 及生成式AI互動平台。核心產品AI Coach平台採用多模態人工智慧（Multimodal AI），整合文字、圖像、語音、影片與感測數據，模擬人類教練的感知與判斷，提供即時、個人化、高互動性的訓練與健康引導，並協助高齡與衰弱族群進行失能預防、健康促進及預測分析。\\n以「技術驅動人機協作」為願景，結合具身智慧（Embodied AI），推動SDGs與 ESG永續發展，引領多模態AI跨入人機互動新世代，成為智慧健康產業的創新推手。","contactPerson":"戴先生","companyPhone":"62923231","contactEmail":"leadsong89@gmail.com","websiteUrl":"https://www.synergy.tw/","specialPrice":"180,000 元／年（含稅）"},{"id":"AI居家照護-2","category":"AI居家照護","sequence":2,"companyName":"健康盟股份有限公司","companyShortName":"健康盟","solutionName":"健康盟：重塑牙科營運的智慧引擎","manualUrl":"DigiMed 系統操作影片：\\n https://drive.google.com/file/d/10Mr1CLcbqNkKkN3d-VN7EsbynELEBIY3/view   \\n產品介紹影片： \\nhttps://youtu.be/KTvW4lYLe_4?si=EsGfFHw1UQdn_GVw","imageFileName":"2.健康盟股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI居家照護/2.健康盟股份有限公司.png","bannerFileExists":true,"solutionIntro":"DigiMEd 是專為牙科設計的 AI 數位諮詢助理與 CRM 系統，整合四大核心功能：（1）秒懂衛教影音庫：提供200+部由專科醫師審核之動畫與圖文，將艱澀牙科知識轉化為1分鐘內可理解的視覺內容；（2）AI 智能諮詢輔助：提供標準化諮詢流程與腳本，讓資淺助理也能專業解說療程；（3）診療椅邊精準播放：看診前推播衛教影片至螢幕，節省醫師重複解釋時間；（4）CRM 病患管理與行銷：透過 LINE/簡訊精準推播衛教資訊與術後照顧須知，提升回診黏著度。系統採用 AWS 台灣機房雲端架構，結合 AI 分析自動推薦合適內容，有效提升醫病溝通效率與自費療程接受度，為牙科診所打造完整數位轉型方案。\\n\\n方案價格說明：\\n平台月費 5,000 元/月，年費 60,000 元/年（未稅）\\n\\n新北專屬優惠：\\n1. 新北市的診所訂閱一年，優惠方式贈送兩個月（價值 1 萬元）。\\n2. 新北市的診所訂閱二年，優惠方式贈送五個月（價值 2 萬 5 千元）。","companyIntro":"健康盟公司致力於打造結合數位科技與醫療專業的整合型健康服務平台，專注於牙科與基層醫療數位轉型解決方案。我們以「數位賦能、專業升級、品牌成長」為核心理念，開發DigiMEd數位醫療系統，整合患者管理、數位衛教、療程說明與數位手術同意書簽署流程，協助診所提升溝通效率與醫病信任，同時強化內部管理與營運績效。\\n\\n目前健康盟已與全台超過700間牙醫診所合作，累積豐富實務經驗與成功案例，成為牙科數位轉型的重要推手。我們透過影音內容製作、數位行銷策略與專業教育訓練，協助醫療院所建立專業品牌形象，優化患者體驗並提升療程轉化率。\\n\\n健康盟相信，醫療不只是治療，更是溝通與信任的建立。未來將持續深化智慧醫療應用，推動數位醫療標準化，成為診所數位轉型與品牌升級最值得信賴的長期合作夥伴。","contactPerson":"王文利 CEO/王小姐","companyPhone":"02-25500189","contactEmail":"service@healthleaguex.com","websiteUrl":"https://www.healthleaguex.com/","specialPrice":"60,000 元／年（未稅）"},{"id":"AI居家照護-3","category":"AI居家照護","sequence":3,"companyName":"開源智造股份有限公司","companyShortName":"開源智造","solutionName":"居家營養照護AI工具導入- 佳灌安","manualUrl":"https://ibb.co/svQpcgp0","imageFileName":"3.開源智造股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI居家照護/3.開源智造股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本方案專為長照機構、居護所及需要長期居家照護的家庭量身打造，透過年度軟硬體整合服務，以更低門檻建立高階 AI 安全防護網。方案採年訂閱制，完整包含全年度 AI APP 服務費，並直接加贈藍牙數位聽診器乙支。\\n核心功能涵蓋：APP 灌食步驟提醒、異常聲音警示（防誤灌），以及每週一次安心 Check-in 線上支持。透過本方案的導入，不僅能為機構建立標準化、可追溯的數位照護紀錄，大幅提升多床位管理效率，更能有效降低非專業照護者的操作風險，構築安全、穩定的長照照護網絡。\\n\\n方案價格說明：\\n未稅$3,000/月 $30,000/年(加贈藍芽數位聽診器)\\n\\n新北專屬優惠：\\n1.1 次護理師到府新手教學\\n2.實體免費教育課程(團體)","companyIntro":"開源智造（OpenAIFab）深耕 AI 醫療與智能照護，創辦人因親自照顧家屬的切身經歷，深刻體會鼻胃管灌食的風險與壓力，進而自主研發「佳灌安 FeedSafe」。我們致力將尖端 AI 技術落地，提供全方位居家醫療物聯網解決方案。\\n佳灌安 FeedSafe 聚焦「鼻胃管灌食安全」，回應流程繁瑣易被省略、人力不足無法全面覆蓋的雙重痛點。結合自主研發的 AI 聲紋辨識與藍牙數位聽診器，將繁瑣的確認流程轉為直覺的安全機制，大幅降低非專業者的操作門檻，減輕家庭照顧負擔。\\n我們期盼賦能居護所、長照機構與醫療院所，無縫銜接居家照護，成為守護醫病與家庭最堅實的科技後盾，兼具產業效益與社會公益價值。","contactPerson":"黃執行長","companyPhone":"(02)2752-2531","contactEmail":"jonhuang@openaifab.co","websiteUrl":"https://www.facebook.com/openaifab/?locale=zh_TW","specialPrice":"30,000 元／年（未稅）"},{"id":"AI垂直整合方案-1","category":"AI垂直整合方案","sequence":1,"companyName":"艾利思科技股份有限公司","companyShortName":"艾利思科技","solutionName":"Aura 智慧影像及場域感知管理系統","manualUrl":"","imageFileName":"1.艾利思科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/1.艾利思科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"本案 Aura 智慧感知系統整合多元環境感測與影像 AI 分析，打造即時且可落地的場域管理方案。系統以邊緣影像AI為核心，部署於 NVIDIA Jetson 或獨立 GPU 邊緣架構，即時進行人員、物件與行為辨識，支援跌倒偵測、求救分析、電子圍籬、非法入侵與產線計數等應用，達成主動預警與風險防範。\\n\\n透過同步整合溫濕度、光照等環境數據，透過小型語言模型進行時序分析與情境理解，自動辨識異常並提供具體改善建議。系統採在地化邊緣推論，兼顧隱私與資安，具高度模組化與擴充性，可依場域需求彈性調整模型與感測模組，全面提升安全、效率與智慧管理能力。\\n\\n方案內容：\\nA.數據分析服務\\n10個感測資料接入(新北優惠價7,200每月)\\n或\\nB.影像安全感知\\n人員偵測+影像式電子圍籬+跌倒感知+求救手勢分析(新北優惠價9,450每月/每個IP Camera)\\n\\n1.產品售出後遠端軟體技術支援由90天，延長為180天\\n2.新北專屬方案贈送3個小時一對一場域管理顧問諮詢服務(價值一萬元)","companyIntro":"艾利思科技成立於 2018 年，由專業的全端工程師團隊組成，致力於以「化繁為簡，驅動企業未來」為核心理念，協助企業有效落實數位轉型。公司從企業客製化軟體服務出發，累積豐富跨產業實戰經驗，服務客戶超過 150 家，涵蓋金融、製造、零售、能源及政府公共工程等領域。\\n\\n艾利思科技近年專注於各類型場域管理，並推出Aura智慧感知系統，除了知名的精準定位系統與多元的環境感測器解決方案外，更可結合影像 AI 與環境數據分析，提供即時、可解釋且可落地的場域智慧管理能力，協助企業預防風險、保障人員安全與關鍵資產，成為企業長期信賴的端到端數位轉型夥伴。","contactPerson":"翁先生","companyPhone":"02-25853358","contactEmail":"cadi@ellis.tw","websiteUrl":"https://www.ellis.tw","specialPrice":"數據分析服務：7,200 元／月（含稅）\\n影像安全感知：9,450 元／月（含稅）"},{"id":"AI垂直整合方案-2","category":"AI垂直整合方案","sequence":2,"companyName":"城智科技股份有限公司","companyShortName":"城智科技","solutionName":"airaTrack-全場域人臉追蹤解決方案","manualUrl":"https://www.youtube.com/watch?v=0snu5LAxBXE","imageFileName":"2.城智科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/2.城智科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"在大型體育館、多樓層建物、機場、火車站等開放場域中，人員走失、物品失竊頻繁發生，要在眾多人群中找尋特定目標人物（走失人員或嫌犯、共犯），甚至是目標的完整行經路徑，用以往人工方式，逐一比對大量攝影機畫面，耗時又易出錯，錯過黃金搜尋時機。\\n使用airaTrack智慧化傳統人工逐一比對攝影機畫面流程，3小時作業縮至10分鐘完成。\\n\\n隱私優先設計：無需預先註冊目標人臉資料庫，AI模型自動偵測影像中人物，並列出人臉牆進行目標挑選。可模糊非目標人臉保護隱私。\\n整合既有攝影機：不需更換攝影機或安裝特定AI攝影機，系統可整合既有攝影機運作。\\n安全的地端部署：場域內監控影像、搜尋資料等皆存於本地儲存，不上雲無外洩風險。\\n\\n新北專屬優惠：\\n軟體買一送一（買一路軟體授權即送一路）\\n免費試用期延長至3個月（90天）","companyIntro":"AIRA城智科技是由逾20年AI影像處理經驗的團隊所組成，專注於AI領域的研究與開發。AIRA的使命是採用先進的人臉、人形與物件辨識技術，並整合於影像管理系統，開發AI+IOT+Cloud等多種整合性應用方案。\\n於2020年榮獲 Intel Gold Partner 的殊榮，並與NVIDIA, Network Optix, AWS展開深度技術合作。解決方案廣泛應用於企業、智慧建築、工廠、工地管理與零售等場域，優化場域安全與管理效率。","contactPerson":"陳小姐","companyPhone":"02-27010161","contactEmail":"sales@aira.com.tw","websiteUrl":"https://www.aira.com.tw/","specialPrice":"請洽專線提供您專屬優惠價"},{"id":"AI垂直整合方案-3","category":"AI垂直整合方案","sequence":3,"companyName":"訊連科技股份有限公司","companyShortName":"訊連科技","solutionName":"FaceMe Security 安控門禁解決方案","manualUrl":"https://youtu.be/FDYnyCxOhm4","imageFileName":"3.訊連科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/3.訊連科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"FaceMe Security 是一款專為智慧安防及門禁需求設計的開箱即用解決方案，透過人臉辨識，實現身分驗證、出勤管理暨門禁管制，具備即時監控與通知示警功能。更可基於人臉或衣著身形進行事後足跡追蹤查詢，且與各大主流 VMS 深度整合，無須任何開發，讓安防管理輕鬆有效。提供多種加值套件 ，滿足不同安控場域的應用需求，提供一站式解決方案。\\n\\n新北專屬優惠：\\n1. 售後保固延長至18個月 (原先為12個月)\\n2. 免費 60 天試用","companyIntro":"訊連科技（5203.TW）創立於 1996 年，為全球首屈一指的多媒體影音軟體及數位創意編輯軟體服務及 AI 臉部辨識、人型辨識技術開發商。訊連科技的產品及服務涵蓋數位影片及圖像內容創作、多媒體影音播放、視訊會議及直播與遠距教學、手機行動應用程式、AI 人臉辨識等多樣化解決方案，滿足消費性、商務、教育等跨領域多媒體應用。旗下威力導演、相片大師、PowerDVD 等電腦軟體和行動 App，透過零售、訂閱式服務及預載等方式，提供個人電腦品牌多樣化應用軟體。 \\n\\n訊連科技深耕 AI 人工智慧於創意內容影片圖像編輯，臉部辨識及人型辨識，透過深度學習法開發 FaceMe® AI 臉部辨識引擎，提供智慧安控、智慧差勤、智慧金融、智慧零售等垂直市場應用，卓越的辨識準確度，屢次於全球知名 NIST 人臉辨識測試獲得名列前茅佳績。","contactPerson":"嚴先生 / 業務協理","companyPhone":"(02)8667-1298","contactEmail":"FaceMe_TW@cyberlink.com","websiteUrl":"https://tw.cyberlink.com/faceme","specialPrice":"請連絡廠商報價"},{"id":"AI垂直整合方案-4","category":"AI垂直整合方案","sequence":4,"companyName":"雲義科技股份有限公司","companyShortName":"雲義科技","solutionName":"Unipicket AI安防","manualUrl":"https://www.youtube.com/watch?v=Qek_BofVCjs","imageFileName":"4.雲義科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/4.雲義科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"Unipicket AI影像辨識產品主要功能在於將場域現有監視器系統升級具有AI影像辨識與即時通報之AI安防系統，能縮短危安事件通報時間，減少危安損失。\\n\\n支援4支攝影機串流即時影像辨識，可從已建置的IPCAM 或DVR中選取其中需要的攝影機RTSP影像進行辨識設定，單支攝影機影像可同時支援多種事件之辨識功能，可依不同攝影機啟動多個辨識功能同時運作，不同辨識功能分別設定多個辨識排程及電子圍籬區域。\\n\\n辨識到設定事件發生時，能即時擷取攝影機畫面進行通報，並自動錄製事件20秒以上的影片存於辨識硬體內並發送圖片通報至電腦端CMS或是手機APP。\\n\\n針對新北專屬優惠方案特別規劃「Unipicket-新北AI安防版」，針對新北市轄內服務業、物流倉儲、製造業、店面辦公等場域提供最常用四種辨識功能如下\\n1.        人員進入-辨識顧客進出、人流時段、門禁管制\\n2.        煙霧火光-防護電力設施、廠房周界、廚房\\n3.        車輛進入-辨識車輛管制區域或時段有車輛進入\\n4.        人員離席-確保現場或產線人員即時服務\\n\\n新北專屬優惠：\\n單套新北專屬產品內容優惠方案價格為80,000未稅，內容含\\n1.AI辨識系統軟硬體(人員進入、煙霧火光、車輛進入、人員離席等4種辨識功能)\\n2.一年硬體保固服務\\n3.一年遠端維護\\n4.一次現場安裝服務與教育訓練","companyIntro":"Unipattern 雲義科技成立於2001年，公司創立以軟體研發為主，發展Data Mining演算法的核心技術，投入智慧型應用軟體產業。\\nUnipicket 視衛通是雲義科技整合影像辨識模型及演算法的AI影像辨識即時通報系統，使用市場通用的RTSP協定影像串流辨識監視器畫面內的多種異常事件並即時通報，如此可在事件發生即時或初期就辨識通報，縮短通報時間並降低災害擴大，整合通報介面可整合其他IOT感測與VMS/CMS系統，提高整體場域安全。\\nUnipicket視衛通可加強場域安全，已有不同公民營單位採用，為共同供應契約產品，參與總統盃黑克松競賽於2022年取得卓越團隊及2025年AI應用公共服務特別獎。","contactPerson":"陳先生","companyPhone":"07-6156988","contactEmail":"unipicket@unipattern.com","websiteUrl":"https://www.unipattern.com/","specialPrice":"80,000 元（未稅）"},{"id":"AI垂直整合方案-5","category":"AI垂直整合方案","sequence":5,"companyName":"睿思創新股份有限公司","companyShortName":"睿思創新","solutionName":"CROSSBOT AI Agent Platform – Enterprise 企業旗艦版","manualUrl":"https://youtu.be/SZW50d7qaKs?si=gngIw_T14gnla4O4","imageFileName":"5.睿思創新股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/5.睿思創新股份有限公司.png","bannerFileExists":true,"solutionIntro":"為 CROSSBOT 平台之最高階全功能版本,專為大型企業、集團型組織、公部門及高治理需求單位所設計。\\n本方案除完整包含 Basic 與 Pro 版本之所有功能外,進一步強化 企業級治理(Governance)、資安控管、系統整合與高可用架構，使 AI 不僅作為輔助工具，而能成為組織正式納入營運與決策流程之核心平台。\\n方案包含模組：\\nEnterprise 企業旗艦版包含以下全功能模組：\\n1. 智能客服(企業級模組)\\n2. AI KM (企業級知識治理模組)\\n3. AI Agent 任務與流程自動化模組\\n4. 企業級權限、治理與稽核模組\\n5. 異質系統整合與 API 模組\\n6. 高可用部署與資安防護模組\\n\\n新北專屬優惠：\\n1. ASUS GX10 AI 伺服器(選購)加購價格：+ NT$ 150,000 up （含稅）(依GPU/記憶體配置)\\n(適用於地端部署、資料不外流或對資安有高度需求之場域)\\n2. 平台+硬體組合優惠價\\n組合價(含 ASUS GX10)：約 NT$ 950,000 up/年（含稅）\\n(組合方案可同時滿足 AI 平台服務與地端運算需求,適合有未來擴充 AI 應用或治理需求之單位。)","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","contactPerson":"陳先生","companyPhone":"02-77297007","contactEmail":"hanchen@reas.com.tw","websiteUrl":"https://www.reas.com.tw/","specialPrice":"800,000元／年（含稅）"},{"id":"AI創作內容-1","category":"AI創作內容","sequence":1,"companyName":"大數軟體有限公司","companyShortName":"大數軟體","solutionName":"AIMochi（語音轉文字／會議逐字稿與字幕）","manualUrl":"https://drive.google.com/file/d/1bplLdG--OwuUuNj1p6Ob0Fz26jijbPzL/view?usp=drive_link","imageFileName":"1.大數軟體有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI創作內容/1.大數軟體有限公司.png","bannerFileExists":true,"solutionIntro":"AIMochi 是一 AI 語音轉文字服務，只需將錄音檔傳送給 AIMochi，即可在數分鐘內取得高品質逐字稿。\\n\\nAIMochi 採用先進語音辨識技術，支援多國語言的語音轉錄，並具備自動講者辨識功能，能精準區分不同發言者，讓會議紀錄、訪談記錄一目了然。\\n轉錄完成後，使用者還可透過內建 AI 功能進行多語言翻譯，一鍵將逐字稿轉換為其他語言版本，輕鬆產出雙語或多語字幕。搭配智慧摘要功能，長篇錄音也能自動濃縮為精煉重點，快速掌握核心內容。\\n\\n新北專屬優惠：\\n導入與免費教育訓練","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","contactPerson":"丘先生","companyPhone":"02-2585-5080","contactEmail":"david@largitdata.com","websiteUrl":"https://largitdata.com/","specialPrice":"地端：814,263 元（含稅）\\n雲端（三個月）： 72,801元（含稅）"},{"id":"AI創作內容-2","category":"AI創作內容","sequence":2,"companyName":"漫話科技股份有限公司","companyShortName":"漫話科技","solutionName":"兒少互動敘事與情緒學習AI服務平台","manualUrl":"https://youtu.be/6XjGVDcxrtU","imageFileName":"2.漫話科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI創作內容/2.漫話科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"本方案為「兒少互動敘事與情緒學習AI服務平台」，專為教育與學習服務型企業設計，協助快速導入兼具遊戲化互動、動畫敘事與情緒紀錄之AI服務能力。系統透過漫畫式情境、任務推進與角色互動，引導使用者進行表達與反思，並於互動過程中自動生成情緒標記與互動日記，作為後續學習與服務回饋之依據。核心功能包含AI遊戲化敘事引導、情緒日記與內容生成、分齡設計與情境配置、學習互動紀錄與摘要、管理後台與權限控管，適用於補教、幼教、安親、早療、特教等兒童教育服務業者之課程加值、親子服務或主題活動。\\n\\n新北專屬優惠：\\n1. 新北專屬優惠價：每套NT$38,880／年（原價NT$43,200），含1名系統管理者、2位老師帳號與30名學生帳號\\n2. 提供90天導入支援期（線上/遠端），含1次導入說明會（約60-90分鐘）與使用問題排除\\n3. 新北業者每套加贈AR情緒圖卡一套\\n4. 免費分齡情境配置（幼兒/兒童/補教高年級，擇一）\\n5. 企業可將部分授權名額以公益方式授權予新北市公立學校或非營利教育單位使用","companyIntro":"本方案為「兒少互動敘事與情緒學習AI服務平台」，專為教育與學習服務型企業設計，協助快速導入結合遊戲化互動、動畫式敘事與情緒紀錄之AI服務能力，減少教師、治療師於課前備課與課後進行情緒觀察整理與家長說明所需投入的時間，包括補教、幼教、安親、早療、特教等兒童教育服務或早療相關業者用於團課或客戶（家長）加值服務。系統包含管理後台、帳號權限、使用紀錄與成效摘要，支援企業快速導入、擴點與後續營運，並提供導入說明與技術支援，協助企業完成AI化升級。","contactPerson":"黃先生","companyPhone":"0916-234164","contactEmail":"mangaxtechnology@gmail.com","websiteUrl":"https://www.mangachat.com","specialPrice":"38,880元／年（未稅）"},{"id":"AI創作內容-3","category":"AI創作內容","sequence":3,"companyName":"網際智慧股份有限公司","companyShortName":"網際智慧","solutionName":"絕好聲創VoAI聲音創造所 - 超擬真AI語音與短影音生成服務 (https://voai.ai)","manualUrl":"https://youtu.be/GUcSVi1lrOw","imageFileName":"3.網際智慧股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI創作內容/3.網際智慧股份有限公司.png","bannerFileExists":true,"solutionIntro":"VoAI 聲音創造所 – 企業 AI 創作組合包 A 方案：\\n一、VoAI 聲音創造所 – Creator 年訂閱：\\n ① 60 位超擬真台灣口音AI聲優，男女老少、喜怒哀樂、多元情感表達；\\n ② 台灣習慣唸法，包含多音字、中英文夾雜、數字等朗讀；\\n ③ 提供 AI 短篇配音、多人長篇配音功能，不限字數；\\n ④ 提供聲音克隆功能，可快速複製您個人音色，可定義 10 角色；\\n ⑤ 聲音可輸出wav, mp3, 字幕檔；\\n ⑥ AI 生成Podcast 100 次 / 月 ；\\n ⑦ 贈送每月 AI 影像生成點數 7,200 點 / 月（1秒影片=10點）；\\n ⑧ 每1個帳號可允許 3 台裝置登入使用；\\n二、再贈送企業影像生成點數18萬點（可生成300分鐘影片），可生成虛擬人短影音、資訊與知識說明影片，應用於課程、教育訓練、產品介紹，有效期同訂閱期限。\\n\\n新北專屬優惠：\\n免費教育訓練","companyIntro":"網際智慧（IQT.AI）致力於建構「可信任、有溫度」的 AI Agent 體系，橫跨文字輸入、聲音表達、影音創作與法遵合規四大領域。我們屢獲金鼎獎、經濟部智慧創新大賞 Best AI Awards、台灣人工智慧協會 AI Award Best Solutions、數位發展部數位產業署－AI應用鬥智賽、AI TAIWAN 創新商務獎等頂尖殊榮。旗下主力包含：①長期穩居市佔領先的－text.tw 自然輸入法、②賦予 AI 擬真人聲的－VoAI.AI 絕好聲創，③確保企業治理與合規的－XComply.AI快合規。網際智慧不只是技術專家，更是企業數位轉型最值得信賴的 AI 夥伴！","contactPerson":"羅經理","companyPhone":"02-77087068","contactEmail":"sales@iqt.ai","websiteUrl":"www.iqt.ai","specialPrice":"80,000 元／年（含稅）"},{"id":"AI智能客服-1","category":"AI智能客服","sequence":1,"companyName":"亞博福爾摩沙有限公司","companyShortName":"亞博福爾摩沙","solutionName":"A.I. Chatbot(聊天機器人）","manualUrl":"https://www.youtube.com/watch?v=HJYXaXhPg5w","imageFileName":"1.亞博福爾摩沙有限公司.jpeg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/1.亞博福爾摩沙有限公司.jpeg","bannerFileExists":true,"solutionIntro":"亞博福爾摩沙搭載自研 Geniichat 引擎，將 A.I. Chatbot 從「被動問答」升級為「主動商務」。系統無縫整合網站、App 及主流社群（Line, WhatsApp, WeChat, FB），並支援流暢的文字與語音互動，是您 24 小時的金牌業務與售後管家。\\n\\n透過強大 API 串接，我們為企業解鎖四大核心功能：\\n智能導購與個人化推薦：主動分析對話意圖並推送精準產品。結合直觀的「滑動卡片 (Carousel)」展示，顧客點擊即可下單，大幅縮短購買路徑。\\n\\n系統深度整合：具備高度擴充性，可深度串接 ERP、CRM 與 POS 系統，確保前後端數據即時同步，打破資訊孤島。\\n即時庫存查詢：自動檢索後端數據，秒回貨況與預計到貨日，即時解決顧客對現貨的疑慮。\\n售後進度追蹤：顧客輸入單號即可查詢維修狀態，提供透明化體驗並有效降低客服人力成本。\\n\\n新北專屬優惠：\\n1.專案價格直降：原系統建置與授權費用，新北在地單位享專屬優惠價，現省 40%。\\n2.其他加購（Token、 API 串接、 語言）： 20,000-50,000。（未稅）\\n3.客製化功能： 一次性估價 50,000 - 200,000 。（未稅）","companyIntro":"亞博福爾摩沙打造全通路對話式AI客服系統，結合A.I.Voicebot\\n(電話語音機器人)、A.I.Ambassador(智能服務大使)、A.I. Agent、A.I.Chatbot(聊天機器人)，覆蓋語音、文字與實體互動，提供無縫且即時的智慧客服體驗。具備超過20種語言、多語夾雜辨識)、多口音辨識，可支援跨文化、跨區域應用。具備多輪對話、記憶用戶偏好、意圖辨識等進階能力，提升服務效率與使用者滿意度。平台亦可彈性整合企業內部系統，進行數據蒐集與分析，實現智慧化的客服轉型。","contactPerson":"鄭小姐","companyPhone":"02-7727-7477","contactEmail":"admin.taiwan@asiabots.com","websiteUrl":"https://www.asiabots.com.tw/","specialPrice":"160,000元（未稅）\\n此為預估報價，僅含建置與授權費；最終費用將依實際需求與用量調整。"},{"id":"AI智能客服-2","category":"AI智能客服","sequence":2,"companyName":"亞博福爾摩沙有限公司","companyShortName":"亞博福爾摩沙","solutionName":"A.I. Voicebot(聊天機器人）","manualUrl":"https://youtu.be/9-AGCiZwZbs?si=IGwJCsjLYSWtzTe0","imageFileName":"2.亞博福爾摩沙有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/2.亞博福爾摩沙有限公司.jpg","bannerFileExists":true,"solutionIntro":"亞博福爾摩沙專為企業打造 A.I. Voicebot，結合亞洲首創 LLM 整合技術（ASR、NLP、TTS），打破傳統死板腳本，提供高度擬真的人聲互動，將繁瑣的外撥工作轉化為高轉化的自動化流程。\\n\\n四大核心外撥應用：\\n\\n滿意度調查：黃金時間自動觸及，回覆率優於簡訊，數據自動結構化。\\n\\n精準開發：智慧識別意圖，篩選「溫熱名單」並即時轉接業務，專注成交。\\n\\n活動邀約：短時間內完成數千人通知與出席確認，大幅降低人工成本。\\n\\n重要通知：標準化傳達合約、權益變更，提供完整錄音軌跡確保合規。\\n\\n管理優勢：具備 No-code 直觀後台與 API 串接能力，非技術人員也能快速上線，並實現 CRM 資料自動同步。透過 24/7 運作與即時數據監控，Voicebot 能在關鍵時刻無縫轉接真人，確保服務標準化且品質不中斷。\\n\\n新北專屬優惠：\\n1.電話機器人外撥門號加購：1,200/個。\\n2.單種語言加購(含專有名詞的額外訓練與微調)：50,000/種。\\n3.語系升級折扣：因應跨國貿易需求，凡加購三國語言以上（如英、日、越、印等），每種語系直接減免 $5,000。\\n4.客製化功能加購：50,000-200,000。（未稅）\\n5.客製功能折抵：針對個別企業流程之客製化開發，除提供專業顧問估價外，新北方案客戶額外享有總價 $10,000 之開發金折抵。","companyIntro":"亞博福爾摩沙打造全通路對話式AI客服系統，結合A.I.Voicebot\\n(電話語音機器人)、A.I.Ambassador(智能服務大使)、A.I. Agent、A.I.Chatbot(聊天機器人)，覆蓋語音、文字與實體互動，提供無縫且即時的智慧客服體驗。具備超過20種語言、多語夾雜辨識)、多口音辨識，可支援跨文化、跨區域應用。具備多輪對話、記憶用戶偏好、意圖辨識等進階能力，提升服務效率與使用者滿意度。平台亦可彈性整合企業內部系統，進行數據蒐集與分析，實現智慧化的客服轉型。","contactPerson":"鄭小姐","companyPhone":"02-7727-7478","contactEmail":"admin.taiwan@asiabots.com","websiteUrl":"https://www.asiabots.com.tw/","specialPrice":"81,200元（未稅）"},{"id":"AI智能客服-3","category":"AI智能客服","sequence":3,"companyName":"社群洞察股份有限公司","companyShortName":"社群洞察","solutionName":"WebGUID網路指南針","manualUrl":"https://www.youtube.com/watch?v=HheScwXp88Y&t=1s","imageFileName":"3.社群洞察股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/3.社群洞察股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"WebGUID 為結合 AI 導覽與內容規劃的智慧網站助理，採雙 AI Agent 架構，前台提供即時問答與智慧導覽，協助使用者快速取得所需資訊；後台則透過 AI 建立知識庫、生成 FAQ 與進行行為分析，降低維運負擔並優化數位服務體驗。本方案整合智慧客服與知識推薦機制，特別適合中小型組織快速建置客服系統。相較傳統需手動整理 QA 的機器人，WebGUID 可從指定網站自動學習並建構知識庫，大幅減少人工維護成本。管理端可分析瀏覽軌跡與搜尋紀錄，掌握常見需求，並自動推薦待補強內容，協助無專責人力單位持續優化網站服務。同時支援 Web、LINE、Messenger 等多元通路，並具備分類提示、報表分析與權限管理功能，協助組織快速導入 AI、提升整體服務效能與使用體驗。\\n\\n【基礎方案】NTD 59,988/年(未稅)\\n新北專屬優惠：\\n第二年續約12個月可享9折，續約24個月可享8折，續約36個月（或更長）享75折","companyIntro":"社群洞察股份有限公司秉持「Work Smarter with GPT」理念，致力以生成式AI協助企業與政府解決知識傳遞、任務處理與品牌經營中的效率與溝通痛點。我們提供成熟的AI Agent解決方案，協助組織建立專屬任務助手，實現低門檻導入、無痛轉型與智慧化升級。旗下無程式碼平台 WebGUID.ai，讓企業以最低成本將AI整合至官網與社群渠道，即使非技術人員亦可快速建置AI應用，優化服務流程、提升互動體驗，同時大幅降低營運與客服負擔。透過AI協作機制，我們協助組織將知識轉化為可持續運作的智慧服務能力，真正落實以AI驅動成長與創新。","contactPerson":"張小姐","companyPhone":"02-2365-7153","contactEmail":"mandy@faninsights.io","websiteUrl":"https://webguid.ai/","specialPrice":"59,988／年(未稅)"},{"id":"AI智能客服-4","category":"AI智能客服","sequence":4,"companyName":"凌典科技有限公司","companyShortName":"凌典科技","solutionName":"AI全通路社群客服&預約系統","manualUrl":"https://vimeo.com/manage/videos/1155845416","imageFileName":"4.凌典科技有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/4.凌典科技有限公司.png","bannerFileExists":true,"solutionIntro":"本方案整合AI智慧客服串接模組、跨渠道AI訊息整合模組、AI主動式銷售推播模組、網站與LINE預約模組、CRM會員分級管理與金流訂閱模組，打造一站式智慧營運平台。專為多角化經營的中小型服務業設計，適用於場地空間、課程品牌、美業、健身瑜伽、顧問諮詢與各類生活服務業者。解決業者面臨人力不足、訊息分散、回覆延遲與轉換率低等問題，本方案同時結合AI語意機器人、預約與銷售等自動化工具，以AI智慧客服為核心，透過大型語言模型自動處理重複性詢問，同步管理多渠道LINE、FB、IG與官網訊息，並透過AI Flow設計預約引導與資料蒐集流程，將客服自然轉化為訂單與預約。搭配觸發式行為推播與CRM會員分群功能，實現精準再行銷與主動式銷售，讓客服不只是回覆工具，更是實現營收的成長引擎。從客服自動化、預約數位化到營收轉換提升，一站協助業者降低人力成本、提升成交效率，建立可持續放大的商業模式。\\n\\n新北專屬優惠：\\n[3+1] 品牌預約方案 買三年送一年 總價 79200元（含稅） = 原方案26400元/年 x 3年  (原方案3年份 額外加贈1年，升級為4年) 凡符合新北專屬優惠資格之業者，申請並採購三年期品牌預約系統方案，即可額外獲得一年使用權限，並含下列功能模組。 。AI智慧客服串接模組 。自訂預約流程及跨平台AI客服整合模組 。AI主動式銷售推播客服模組 。網站及LINE預約模組 。CRM管理與會員分級模組 。金流訂閱模組","companyIntro":"凌典科技有限公司，104年成立，資本額500萬。\\n 本公司致力於營運雲端預約系統服務、自動化工具推廣、第三方金流代辦、數位銷售知識教學。具備多重角色身份。\\n(1) 雲端系統服務商：本公司Saas系統「TinyBook開店系統」至今已服務超過400位品牌客戶，協助其將營運流程線上自動化，包括相聲瓦舍、雲門舞集、台塑生醫、BenQ虹韻助聽器等知名業者。\\n(2) 第三方金流經銷商：為Line Pay、街口支付、藍新金流、TapPay、PChome支付連等5間第三方金流公司授權經銷商。以及藍新電子發票經銷商。\\n(3) 政府數位轉型專案 系統服務商&顧問：\\n114年 經濟部 產業AI導入應用輔導 系統服務商\\n114年 經濟部 推廣服務業上雲補助 系統服務商\\n114年 台北市「店家數位基礎導入計畫」 系統服務商\\n114年 台北市 台北數位企業發展中心 數位轉型顧問","contactPerson":"客服專員","companyPhone":"0981465331","contactEmail":"customer@tinybook.cc","websiteUrl":"https://tinybot.cc/","specialPrice":"79,200 元（含稅）"},{"id":"AI智能客服-5","category":"AI智能客服","sequence":5,"companyName":"創造智能科技股份有限公司","companyShortName":"創造智能科技","solutionName":"AiTAGO Line CRM","manualUrl":"https://www.youtube.com/shorts/FbccQZPXQK8","imageFileName":"5.創造智能科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/5.創造智能科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"AiTAGO Line CRM是一個整合線上行銷活動、維繫客戶關係與數據洞察的數位經營平台，並可協助企業提升和客戶的互動轉換率，深度厚植品牌價值，強化顧客的忠誠度。\\nAiTAGO與LINE官方帳號後台無縫整合，系統面提供多元的管理功能，包含帳號管理、會員管理、標籤管理、受眾管理、優惠碼管理、短連結產生器、腳本觸發器、自動推播、AI生圖等。\\n\\n方案價格說明：\\nAiTAGO Line CRM採用SaaS，提供訂閱制的服務和價格。 \\n(1) LINE官方帳號SCRM SaaS月租費：12個月，價格(未稅)：  NT$3,599(會員人數小於或等於5000)、價格(未稅)：  NT$4,599(會員人數等於2萬)、價格(未稅)：  NT$5,599(會員人數等於10萬)，依會員人數級距不同收取不同月租費，基本上以一年計價。\\n(2) LINE官方帳號 SCRM & AITAGO設定費：NT$50,000(未稅)\\n\\n新北專屬優惠：\\n購買6個月贈送1個月使用期限，購買12個月贈送2個月使用期限(基本上以一年計價)。","companyIntro":"創造智能科技是一家AI Martech新創公司，專注於 AI行銷科技、LINE CRM、AI客服機器人與 AI虛擬人應用，致力於協助企業將「流量」真正轉化為「可經營的會員與數據資產」。\\n結合影音內容、行銷科技與AI應用實戰經驗，打造可快速導入、可規模化、可量化成效的AI解決方案，客戶涵蓋政府單位、大型企業、品牌客戶與文化觀光場域。\\n主要商品/服務項目：\\n•\\tLINE CRM × AI客服：協助企業建構可分析語意、貼標分眾、導流轉換的LINE官方帳營運系統。\\n•\\tAI虛擬人與互動導覽：應用於官網、line、FB message、活動、展覽、品牌互動與智慧導覽場域。\\n•\\tAIGC影音與廣告製作：加速影音內容產製，降低成本、提升產量與品質。\\n•\\tAI落地應用顧問服務：從場景設計、互動策略到實際成效落地。","contactPerson":"蔡先生","companyPhone":"02-27913588#83506","contactEmail":"erictsai@aicreate360.com","websiteUrl":"https://www.aicreate360.com/","specialPrice":"(1) LINE官方帳號SCRM SaaS月租費：\\n會員人數小於或等於5000：3,599 元／月（未稅）\\n會員人數等於2萬：4,599 元／月（未稅）\\n會員人數等於10萬5,599 元／月（未稅）\\n(2) LINE官方帳號 SCRM & AITAGO設定費：50,000 元(未稅)"},{"id":"AI智能客服-6","category":"AI智能客服","sequence":6,"companyName":"穎諾科技股份有限公司","companyShortName":"穎諾科技","solutionName":"OpsCentral｜企業級 GenAI 全通路聯絡中心 SaaS 方案","manualUrl":"https://www.youtube.com/watch?v=zo55R_U1_Ks&list=TLGGT_UClBsZ4IUyMzAyMjAyNg","imageFileName":"6.穎諾科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/6.穎諾科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"OpsCentral 採席位制設計，企業依客服同時在線人數規劃至少 5 席基礎版（語音或訊息擇一），即可享有新北專屬優惠；後續可依營運發展彈性擴充渠道與功能模組，兼顧初期成本控管與長期成長需求。\\n\\n方案價格說明：\\n以 5 席基礎版（年繳）為例：每席 NTD 2,599／月（未稅）；一次性設定費 NTD 6,000／席（未稅），另含教育訓練 4 小時 NTD 11,000（未稅），首年初估 NTD 196,940。\\n上述金額係依本公司現行價格標準進行之概算，僅供預估參考，尚未包含 SIP Trunk 線路費、及其他電信相關費用。\\n實際報價將依雙方確認之最終需求內容及服務範圍另行提供。\\n本公司保留因產品規格調整、市場環境變動或成本結構變化而修訂價格之權利。\\n\\n新北專屬優惠：\\n1.GenAI 助理免費試用 3 個月，自系統正式上線日起算（該日視為合約起始日）\\n• 試用期間包含每月實際使用量額度，協助企業完成實際場景測試與效益評估\\n\\n2.導入顧問與操作說明共 6 小時\\n•上線前操作與設定教學 4 小時\\n•上線後使用說明與操作指引 2 小時\\n• 顧問時數須於正式上線後 3 個月內使用完畢\\n\\n3.凡於活動期間簽約並完成付款者，可再享有以下使用期間延長優惠：\\n購買 1 年方案→ 加贈 1 個月使用期\\n購買 2 年方案→ 加贈 3 個月使用期\\n購買 3 年方案→ 加贈 12 個月使用期（1 年）\\n*適用條件說明\\n•本優惠僅適用於本次新北市政府 AI 媒合專案期間申請之客戶\\n•需於簽約後一次性完成全額付款，方可適用本優惠方案\\n•加贈之使用期間將於原合約期滿後順延啟用\\n•本優惠不得與其他專案優惠或折扣併用","companyIntro":"穎諾科技核心產品為 OpsCentral 雲端全通路客服系統，協助企業整合電話、LINE、Facebook、官網與即時通訊等多元管道，集中管理顧客互動紀錄與服務流程，打造一致且高效率的客戶體驗。\\n\\n公司以雲端聯絡中心架構為基礎，結合生成式 AI 與自然語言處理技術，協助企業建置智慧客服與自動化回覆機制，提升回應速度與服務品質，同時降低人力成本與管理負擔。\\n\\n系統支援企業級權限與資安機制，並部署於國內雲端機房，導入門檻低且具高度擴充彈性，特別適合中小企業穩健推動客服數位化與營運升級，強化整體競爭力。","contactPerson":"王商業發展總監/小姐","companyPhone":"02-7746-7115","contactEmail":"cindy.wang@innovax.com.sg","websiteUrl":"https://www.innovax.systems/tw/","specialPrice":"每席： 2,599元／月（未稅）\\n一次性設定費：6,000 元／席（未稅）\\n教育訓練 4 小時:：11,000 元（未稅）"},{"id":"AI智慧製造-1","category":"AI智慧製造","sequence":1,"companyName":"傑騰智能股份有限公司","companyShortName":"傑騰智能","solutionName":"企業專業文件查詢知識管理及專業圖形AI解析","manualUrl":"","imageFileName":"1.傑騰智能股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/1.傑騰智能股份有限公司.png","bannerFileExists":true,"solutionIntro":"iMap: 聚焦解決製造、電子與建築工程領域中 SVG 設計圖高度仰賴人工解析所造成的效率與成本問題，運用 AI 進行 SVG 圖形結構解析與語義理解，將向量圖形、圖層、標註與元件資訊自動轉換為製造與工程系統可用的指令與資料格式。\\niSpec:採用自有RAG架構，結合高精度語意、檢索與可控生成。支援多來源文件整合，依權限分庫檢索，具可信度與可驗證性。並能整合來源圖片輸出，較僅能純文字生成的模型生動易懂。\\n\\n新北專屬優惠：\\n1.給予新北廠商專屬最優惠價格\\n2.免費保固延長6個月\\n3.後續加購其他模組75折或最優惠價。","companyIntro":"傑騰智能（TAO Info）專注於大數據分析與人工智慧技術，深耕製造業資料分析領域，協助企業構建智慧化生態系統。公司通過自主研發的AI演算法與關鍵分析模組，優化商業決策、強化競爭優勢。自成立以來，多次獲政府與國際企業認可。近期聚焦解決製造、電子與建築工程領域中 SVG 設計圖高度仰賴人工解析所造成的效率與成本問題，運用 AI 進行 SVG 圖形結構解析與語義理解，將向量圖形、圖層、標註與元件資訊自動轉換為製造與工程系統可用的指令與資料格式。透過建立通用解析框架，可加速設計到生產流程，降低人工作業負擔，並將專業經驗內化為可重複使用的數位能力，協助產業提升自動化程度、良率與整體競爭力。","contactPerson":"周處長or張董事長","companyPhone":"02-27755275","contactEmail":"hsinhaochou@taoinfo.com.tw","websiteUrl":"","specialPrice":"100,000 元(未稅)"},{"id":"AI智慧製造-2","category":"AI智慧製造","sequence":2,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"AIWInOps—各產業應用的影像型AI訓練平台","manualUrl":"https://drive.google.com/file/d/10B6sT08o4nzTeJkoi8u290O3-5DmNdnT/view?usp=sharing","imageFileName":"2.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/2.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"AIWinOps 為一套簡單易用且功能完整之影像型 AI 訓練平台。透過逐步引導的網頁式操作介面，整合影像標註、資料處理與決策輔助工具，使用者無須撰寫程式，即可完成 AI 模型之訓練、驗證與部署。\\n憑藉慧穩科技多年實務落地經驗，AIWinOps 已成功應用於半導體高科技、環境與綠能、精密與傳統製造、智慧影像監控、生醫與農業，以及零售服務等多元產業，具備高度產業適用性與擴充性。\\n\\n系統特色說明：\\n一、 直觀且友善之操作介面\\n二、 完整且實用之影像分析工具\\n三、 強化效率之進階功能模組\\n四、可擴充之模型庫機制\\n\\n方案價格說明：\\n方案一、永久買斷 標準定價(不含電腦系統):\\n 1. 4 GPU全功能版: NT$ 1,440,000 \\n2. 雙GPU全功能版: NT$ 900,000 \\n3. 單GPU全功能版: NT$ 540,000  \\n\\n方案二、年授權 標準定價(不含電腦系統): \\n1. 4 GPU全功能版: NT$ 480,000 \\n2. 雙GPU全功能版: NT$ 300,000 \\n3. 單GPU全功能版: NT$ 180,000  \\n\\n可加購項目：\\n 一、資料科學家服務：提供專業建模、特徵與模型優化建議。 \\n二、模型授權(標準品):落地部署。標準定價(不含電腦系統): NT$ 120,000。 \\n三、買斷制軟體更新計價方式: (限遠端連線方式，如到場服務差旅費另計) \\n1.AIWinOps 單GPU: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NT$ 180,000，如版本差異小於一年每次NTD 90,000。 \\n2.AIWinOps 雙GPU: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NT$ 300,000，如版本差異小於一年每次NTD 150,000。 \\n3.AIWinOps 4GPU: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NT$ 480,000，如版本差異小於一年每次NTD 240,000。\\"\\n\\n新北專屬優惠：\\n方案一、永久買斷\\n一、 優惠折扣:9折\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。\\n三、 首年保障：內含首年保固與維護服務。\\n四、 服務內容:\\n1.產品保固：首年硬體/軟體保固。\\n2.版本更新：首年享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\n\\n方案二、年授權\\n一、優惠折扣:9折\\n二、模式說明：以年為單位支付訂閱費。訂閱期間即為保固期，享有免費軟體更新服務。\\n三、服務內容:\\n1.產品保固：訂閱期間內全程享有保固服務。\\n2.版本更新：訂閱期間持續享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525580","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"方案一、永久買斷：\\n4 GPU全功能版:：1,440,000 元\\n雙GPU全功能版：900,000 元\\n單GPU全功能版：540,000 元\\n\\n方案二、年授權： \\n4 GPU全功能版：480,000 元 \\n雙GPU全功能版：300,000 元 \\n單GPU全功能版：180,000 元"},{"id":"AI智慧製造-3","category":"AI智慧製造","sequence":3,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"NumOps－各產業應用的數據型AI訓練平台","manualUrl":"https://drive.google.com/file/d/1BBv2pjBxlt13DDLO0OIuakX21a18fx2Z/view?usp=sharing","imageFileName":"3.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/3.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"NumOps為慧穩科技融合式AI解決方案WinHub.AI旗下之通用數據型AI平台，採用網頁式操作介面，整合數學、統計與多元AI 演算法。平台結合AutoML、深度學習與專家系統等技術，使用者無須撰寫程式，即可快速建構專屬數據AI模型，並產出直觀之統計分析與視覺化圖表，作為決策支援依據。\\n\\n系統特色說明：\\n一、 直觀友善的操作介面\\n二、 完整且實用的數據分析工具\\n三、 專家系統：規則庫的產出與落地\\n四、 強化訓練成效的資料預處理機制\\n\\n方案價格說明：\\n方案一、永久買斷  \\n一、 標準定價(不含電腦系統)：NT$ 300,000\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。  \\n\\n方案二、年授權 \\n一、標準定價(不含電腦系統)：NT$ 100,000 \\n二、模式說明：以年為單位支付訂閱費。訂閱期間即為保固期，享有免費軟體更新服務。  \\n\\n可加購項目：\\n一、 資料科學家服務：提供專業建模、特徵與模型優化建議。 \\n二、 模型授權(標準品):落地部署。標準定價(不含電腦系統): NT$ 120,000。 \\n三、買斷制軟體更新計價方式: (限遠端連線方式，如到場服務差旅費另計) \\nNumOps: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NTD 100,000，如版本差異小於一年每次NTD 50,000。\\n\\n新北專屬優惠：\\n方案一、永久買斷\\n一、優惠折扣:9折\\n二、首年保障：內含首年保固與維護服務。\\n三、服務內容:\\n1.產品保固：首年硬體/軟體保固。\\n2.版本更新：首年享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\n\\n方案二、年授權\\n一、優惠折扣:9折\\n二、服務內容:\\n1.產品保固：訂閱期間內全程享有保固服務。\\n2.版本更新：訂閱期間持續享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\"","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525581","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"方案一、永久買斷：300,000 元\\n方案二、年授權：100,000 元"},{"id":"AI智慧製造-4","category":"AI智慧製造","sequence":4,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"WinEdge－各產業應用的AI邊緣運算推論系統","manualUrl":"1. https://drive.google.com/file/d/1IcWZXD7-V9l_RMdwBChvp7JXlGLudoff/view?usp=drive_link　\\n2. https://drive.google.com/file/d/1b0lvq-wgzLTKSM64o-c7z8IC0ptc_HAi/view?usp=drive_link","imageFileName":"4.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/4.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"WinEdge 為慧穩科技推出之融合式邊緣運算AI推論系統，整合影像型與數據型AI推論能力，可搭配影像型AI模型訓練平台 AIWinOps 與數據型AI模型訓練平台NumOps，構成完整之 WinHub.AI人工智慧落地解決方案。\\n於產線、偏遠地區或對即時性與資訊安全要求較高之場域，WinEdge可於本地端穩定執行推論，無須倚賴雲端或網際網路，確保資料隱私與系統可靠性。系統並內建多元設備與資料介接之軟體開發套件，可加速系統整合與應用落地，協助各產業導入人工智慧，提升營運效率並推動產業升級。\\n\\n系統特色說明如下：\\n一、 直觀友善的操作介面\\n二、 多元的取像裝置支援\\n三、 靈活的部署選項\\n四、 實用的AI模型推論工具\\n五、 強大的影像處理功能\\n六、 建立與管理資料源\\n七、 即時更新\\n八、 智能化儀表板\\n九、 推論後處理與結果輸出\\n\\n方案價格說明：\\n永久買斷方案 標準定價(不含電腦系統)：NT$ 140,000\\n\\n新北專屬優惠：\\n一、 優惠折扣:9折\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。\\n三、 首年保障：內含首年保固與維護服務。\\n四、 服務內容:\\n1.產品保固：首年硬體/軟體保固。\\n2.版本更新：首年享有週期半年一次的系統更新\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\n4.模型授權(標準品):落地部署。","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525582","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"永久買斷方案：140,000 元"},{"id":"AI智慧製造-5","category":"AI智慧製造","sequence":5,"companyName":"摩絡人工智慧股份有限公司","companyShortName":"摩絡人工智慧","solutionName":"Morale AI Agentic Platform 領域專用大型語言模型","manualUrl":"https://moraleai-my.sharepoint.com/:v:/p/kaophill/IQCsnGRH99SnQp1xqhUk9WmaAQXg7WSIy4wEfulKdmP7wwc?e=xcgOZJ","imageFileName":"5.摩絡人工智慧股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/5.摩絡人工智慧股份有限公司.png","bannerFileExists":true,"solutionIntro":"本方案採用 Morale AI 之領域專屬大型語言模型（Domain-Specific Large Language Model），結合 RAG（Retrieval-Augmented Generation）架構、向量資料庫與 AI Agent 技術，可從企業內部非結構與半結構資料中進行語意理解、知識整合與智慧決策輔助。\\n同時支援 Machine Learning Function Calling，可於推論過程中動態呼叫異常偵測、趨勢分析與預測模型，產出具行動性的Insights。\\n模型與系統安裝所在地：核心 LLM 推論服務、向量資料庫、AI Agent 服務與相關應用系統，皆部署於台智雲。\\n\\n新北專屬優惠方案：\\n1.延長保固1個月（1個月>2個月）\\n2.提供新北市企業額外兩次教育訓練（每次1-2小時）","companyIntro":"Morale AI 建構專為智慧製造打造的領域專屬 AI Agent 平台，提供可擴展、可解釋且可落地的決策支援能力。Morale AI platform以領域專用 LLM 結合機器學習與資料科學，串接 MES/ERP/設備與品質資料，打造可稽核、可解釋的 Agent 工作流；提供異常預警、良率分析、製程最佳化與節能減廢決策支援，支援 On-prem / Cloud / Hybrid 快速部署。","contactPerson":"李小姐","companyPhone":"03-5320278","contactEmail":"service@moraleai.com","websiteUrl":"https://moraleai.com/","specialPrice":"POC 概念驗證方案：60萬 - 100萬元（未稅） \\n中小型 Production 方案：80萬 - 250萬元（未稅）"},{"id":"AI資訊安全-1","category":"AI資訊安全","sequence":1,"companyName":"艾比互動娛樂有限公司","companyShortName":"艾比互動娛樂","solutionName":"SOC.cool AI資安防護企業包 - 新北產業AI化輔導計畫限定版","manualUrl":"https://soc.cool","imageFileName":"1.艾比互動娛樂有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI資訊安全/1.艾比互動娛樂有限公司.png","bannerFileExists":true,"solutionIntro":"SOC.cool 是專為中小企業設計的 AI 資安防護平台，整合 SIEM 日誌管理與 SOAR 自動化響應，以 AI 驅動的威脅偵測引擎（Transformer 架構，準確率達 99.2%）即時識別網路攻擊、異常行為及內部威脅。\\n平台提供 3D 威脅視覺化儀表板、20+ 自動回應 Playbook 劇本、惡意 IP 自動阻斷、感染設備即時隔離、MITRE ATT&CK 框架對映等完整功能，並支援 LINE/Telegram/Email 多通道即時告警通知。\\n本方案為新北企業專屬 65 折優惠（原價 NT$136,200，優惠價 NT$88,000），涵蓋 5 台設備一年期授權，加碼贈送價值 NT$40,000 的遠端導入、資安健診報告及教育訓練。免安裝硬體，雲端即開即用，大幅降低中小企業資安防護門檻。\\n\\n新北專屬優惠：\\n1. 65折限定優惠：原價NT$136,200，優惠價NT$88,000（節省NT$48,200）\\n2. 免費遠端導入服務（市價NT$20,000）\\n3. 免費資安健診報告乙份（市價NT$15,000）\\n4. 免費線上教育訓練2小時（市價NT$5,000）\\n5. 保固12個月：免費軟體更新、版本升級、威脅情報每日自動更新\\n6. 加購項目享新北專屬75折優惠\\n7. 贈送總價值NT$40,000，方案總價值高達NT$176,200","companyIntro":"艾比互動娛樂有限公司 致力於用 AI 讓每家企業都能擁有世界級的資安防護能力。\\n我們的核心產品 SOC.cool 是一套 AI 驅動的資安監控平台，讓企業無需自建 SOC 團隊，即可擁有 24/7 全天候威脅偵測與自動化回應能力。\\n解決三大痛點：\\n- 資安人才難尋：AI 自動分析告警、研判風險並執行回應劇本，大幅降低對專業資安人力的依賴，1 人即可掌控全局\\n- 預算有限效益要最大：以 SaaS 訂閱制取代高額自建方案，將資源集中在核心業務發展，資安交給 AI 守護\\n- 合規要求日益嚴格：內建 ISO 27001、SOC 2 等合規報告模板，一鍵產出稽核文件，從容應對客戶與法規要求\\n平台支援 Windows、Linux、macOS 全平台，10 分鐘內完成部署即開始防護。同時提供經銷夥伴架構，IT 服務商可快速以自有品牌為客戶提供託管式資安服務（MSSP）。\\n 讓每家企業都能用 AI 守護數位資產，是我們的使命。","contactPerson":"陳先生","companyPhone":"02-26755580","contactEmail":"service@abbey-tech.com","websiteUrl":"https://soc.cool/","specialPrice":"88,000元（含稅）"},{"id":"AI資訊安全-2","category":"AI資訊安全","sequence":2,"companyName":"華苓科技股份有限公司","companyShortName":"華苓科技","solutionName":"Secorion 資安獵捕平台","manualUrl":"https://youtu.be/6x_zzGSflb4?si=OpEUGBGGmJ3LockB","imageFileName":"2.華苓科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI資訊安全/2.華苓科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"Secorion是新一代網路檢測和響應(NDR)解決方案，以Security(資安)與Orion(獵戶座)為結合體，象徵前所未有的威脅獵捕性能。Secorion具備高效能防護主機，搭配全球情資更新、高階獵捕引擎、區塊鏈存證、全視覺化管理，提供早期預警及異常行為防堵，是企業面對資料外洩、勒索病毒、設備入侵等資安事件猖獗下的黃金防線。\\n\\n新北專屬優惠：\\n保固期程：1年\\n方案內容：新一代網路檢測和響應(NDR)：全球威脅情資防護網、視覺化分析戰情室、AI智能獵捕分析、Wi-Fi路由器一台","companyIntro":"華苓科技成立於1999年，為中大型商務軟體公司，以企業流程管理系統著稱，面對大數據、社群、人工智能、雲計算、移動裝置、物聯網、區塊鏈等數位科技共同將世界推向工業4.0與數位經濟時代。華苓遂以「賦能智慧、願景無限」為願景，推出「智慧系統」以達成融合數位科技與人、系統、智能物件的萬物協同，賦與企業轉型能力以取得競爭優勢。","contactPerson":"馬經理","companyPhone":"(03) 5753331","contactEmail":"media@flowring.com","websiteUrl":"https://www.flowring.com/","specialPrice":"200,000元（含稅）"},{"id":"AI資訊安全-3","category":"AI資訊安全","sequence":3,"companyName":"極風雲創股份有限公司","companyShortName":"極風雲創","solutionName":"Across智能資安維運管理平台","manualUrl":"","imageFileName":"3.極風雲創股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI資訊安全/3.極風雲創股份有限公司.png","bannerFileExists":true,"solutionIntro":"標準版 提供AIS(AI Secutity)基礎防禦，資安 Dashboad、Data Lake(資料收容)，並提供資安事件分析與告警，AI Chat & KM 以及AIG(AI Governance)基礎管理，提供AI 模型使用分析儀表板、模型權限控制、虛擬金鑰管理、自動遮蔽個資。\\n\\n方案價格說明：\\n10萬/月，需簽2年合約(共240萬)，年繳9折=108萬+108萬＝216萬（含稅）\\n\\n新北專屬優惠：\\n1. 2年合約(共240萬)，一次付清，提供8折優惠=192萬（含稅）\\n2. 啟用後一季內，可執行免費教育訓練乙次","companyIntro":"極風雲創 Twister5 (股票代碼 7826 )，是 AI 驅動的全域安全與 AI 治理平台供應商，專注協助企業在雲端與生成式 AI 時代，建立安全、可控且可持續的防護架構。\\n我們結合國際頂尖資安品牌（如 Cloudflare、Cato Networks、Palo Alto Networks）與自研平台 Across，為企業提供從網路、應用到 AI 使用層的整合式全域安全解決方案。","contactPerson":"詹詮斌 先生","companyPhone":"02 89798887","contactEmail":"champion.chan@twister5.com.tw","websiteUrl":"https://www.twister5.com.tw/","specialPrice":"216萬元（含稅）"},{"id":"AI營運流程自動化-1","category":"AI營運流程自動化","sequence":1,"companyName":"卡菲卡金融科技股份有限公司","companyShortName":"卡菲卡金融科技","solutionName":"新北企業淨零智能會計賦能專案","manualUrl":"https://www.youtube.com/watch?v=ybzMzaD74gs\\nhttps://www.youtube.com/watch?v=Nt_HvFha-rA\\nhttps://www.youtube.com/watch?v=2tuKxQIkh2Q,\\nhttps://www.youtube.com/watch?v=JaMhpQ0CnoU\\nhttps://www.youtube.com/watch?v=GXoTiXkIZdc","imageFileName":"1.卡菲卡金融科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/1.卡菲卡金融科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"卡菲卡金融科技響應永續趨勢，專為新北市企業推出「新北淨零智匯：企業碳會計數位轉型專案」 。本專案核心技術透過 AI 碳預測模型 與 AI-OCR 引擎，首創財務—碳排雙軌自動記帳技術，將繁瑣的數據採集與勾稽自動化，讓企業透過人工智能技術從傳統的事後盤查轉向事前精算的戰略轉型 。\\n\\n透過人工智能模型「費思」精準核算，協助企業達成「自主減量計畫目標 A」，可將碳費負擔從每噸 300 元降至 50 元地板價，減免幅度最高可達 83%，建立碳管理標竿的絕對優勢。\\n\\n新北專屬優惠：\\n1. 提供額外 1 名操作用戶授權\\n2. 加贈智能憑證辨識服務一年授權\\n3. 加贈溫室氣體核算服務一年授權\\n4. 加贈 1 場次 6 人以下 2 小時教育訓練","companyIntro":"卡菲卡金融科技致力於驅動企業的「智能」與「綠色」雙軸轉型。我們自主研發的 AI 模型「費思」，深度整合財務審計的嚴謹性與環境工程邏輯，是業界領先的綠色金融智慧核心。\\n\\n透過 AI 自動化識別與分類，費思能精確勾稽企業每一筆財務支出與其對應的碳足跡，打破資訊孤島，讓財務報表與減碳績效實現無縫接軌。這不僅大幅提升了溫室氣體盤查的效率，更能協助企業精準預測並節約碳費支出。\\n\\n我們不只是技術提供者，更是企業邁向淨零碳排最值得信賴的策略夥伴。從智慧審計到淨零輔導，卡菲卡協助您將複雜的環境數據轉化為實質的競爭優勢，讓永續經營成為企業獲利的嶄新動力。","contactPerson":"鄒永煒","companyPhone":"02-25466225","contactEmail":"contact@isunfa.com","websiteUrl":"https://isunfa.com","specialPrice":"239,400 元（含稅）"},{"id":"AI營運流程自動化-2","category":"AI營運流程自動化","sequence":2,"companyName":"拉普拉斯智能科技股份有限公司","companyShortName":"拉普拉斯智能科技","solutionName":"Akashic 多代理 AI 平台","manualUrl":"https://drive.google.com/file/d/1YlQ4C16m5gzva6Cldx2-N1oDEmSlprPf/view?usp=drive_link","imageFileName":"2.拉普拉斯智能科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/2.拉普拉斯智能科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"拉普拉斯智能科技推出 Akashic 多代理 AI 平台，整合 多代理協作與可治理的知識管理能力，打造高效率、可擴充的智慧內容工作流。平台以角色化 AI Agent 搭配知識庫，支援跨情境問答、多步驟推論、資訊整理與流程引導，並提供引用與歷程紀錄，讓回應更可靠、可追溯。透過可版控的報告模板與直覺化流程，從需求輸入到資料整理、撰寫、校稿、排版與圖表生成皆可自動化，快速產出一致且高品質的文件、報告與摘要；同時支援多來源資料匯入與跨系統整合，從個人筆記到組織級知識中台都能自由延展。\\n\\n新北專屬優惠：\\n一、方案與價格折扣（未稅；5%營業稅另計）\\nA. 1年授權（純軟體）新北特惠：授權費 NTD 135,000（9折）；建置費 NTD 0（原 NTD 50,000 全免）；合計 NTD 135,000。\\nB. 2年授權優惠 新北特惠：授權費 NTD 180,000；建置費 NTD 0（原 NTD 50,000 全免）；合計 NTD 180,000。\\nC. 含機器/硬體如適用：平台授權依A之特惠價；硬體依需求另議，硬體保固依原廠；另提供硬體整合/上架作業服務費95折（上限折抵 NTD 20,000）。\\n\\n二、保固與維護加碼\\n標準：合約範圍內一年免費維護（含錯誤修復與版本更新）。\\n新北加碼：免費維護延長至18個月（加贈6個月），必要時提供處置方案與時程。\\n\\n三、免費加值（新北限定）\\n1) 免費試用45天（含線上導入顧問1次/2小時）\\n2) 線上教育訓練2場（每場2小時，含教材與Q&A）\\n3) 免費協助建立可治理模板3組（報告/會議紀錄/企劃書擇三）\\n\\n四、加購方案折扣（未稅；5%營業稅另計；新北85折）\\n1) 額外工作區（含獨立知識庫/權限）：原 NTD 6,000/組/月。\\n2) 系統串接：原 NTD 60,000/項。\\n3) 客製化模板（超出免費3組）：原 NTD 8,000/組。","companyIntro":"拉普拉斯智能科技推出 Akashic 多代理 AI 平台，結合通用報告生成、AI 助理與可治理的知識管理能力，為用戶提供高效率且可擴充的智慧內容工作流。平台透過可治理模板引擎、多代理協作與跨系統整合，協助快速產出高品質報告並提升作業效率，支援從日常到專業場景的多元應用。","contactPerson":"林先生","companyPhone":"0982163003","contactEmail":"minggatsby@laplaceai.co","websiteUrl":"https://www.laplaceai.co/","specialPrice":"135000 元（未稅）"},{"id":"AI營運流程自動化-3","category":"AI營運流程自動化","sequence":3,"companyName":"虎智科技股份有限公司","companyShortName":"虎智科技","solutionName":"以 n8n 打造 AI 智能助理-導入 no code 自動化流程運用","manualUrl":"","imageFileName":"3.虎智科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/3.虎智科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"地端AI Server租用\\n1.AI設備維護委外，AI運用不斷線\\n2.花較低的費用，使用較高等級的AI Server\\n3.協助安裝地端OpenwebUI+n8n+向量資料庫\\n4.透過開源程式運用AI，不受token的限制。\\n5.全地端運用AI，機密資料不外流。\\n\\n方案價格說明：\\nAI Sever 租用，每月1萬，年租12萬。\\n\\n新北專屬優惠：\\n1.新北優惠10萬元 （含稅）\\n2.第二年續約價6,000 （含稅）\\n3.連租2年送2T SSD。","companyIntro":"虎智科技經校內創業比賽第一名為臺科大傑出校友聯誼會攜手創新育成中心， 投資成立的創業團隊。以協助任何公司都可以輕鬆導入人工智慧。\\n致力以博碩士專業團隊、結盟傑出校友資源、臺科大教授顧問研發資源三大優勢發展 Local GPT 硬體導入、 AI 服務啟動、GPU 服務器資源管理，協助產業從教育訓練開始、評估／導入 AI 產業解決方案、資訊安全，確保 AI 綜效最大化與成功。","contactPerson":"AI導入顧問","companyPhone":"02-66058192","contactEmail":"tiger.ai.tw2024@gmail.com","websiteUrl":"https://www.tigerai.info/","specialPrice":"10萬元／年（含稅）"},{"id":"AI營運流程自動化-4","category":"AI營運流程自動化","sequence":4,"companyName":"凱鈿行動科技股份有限公司","companyShortName":"凱鈿行動科技","solutionName":"Intelligence Document Processing(IDP)","manualUrl":"https://www.youtube.com/watch?v=xbeH2ISVlME","imageFileName":"4.凱鈿行動科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/4.凱鈿行動科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"IDP 智慧文件處理平台，以人工智慧技術為核心，針對政府機關及企業在大量文件處理、資料整合與知識應用上所面臨之痛點，提供自動化、高準確度且具擴充性的解決方案。透過智慧文件解析、關鍵資訊抽取與知識庫建構，協助使用單位有效降低人工作業成本、提升資料品質與作業效率，並強化後續資料分析與決策支援能力。\\n\\n方案價格說明：\\n每十萬頁原價 NT$100,000(未稅)        \\n新北方案優惠價 8 折","companyIntro":"KDAN（凱鈿）是數位賦能的領導品牌，專注於提升企業跨平台文件交流效率，推動數據驅動決策，打造無縫接軌的工作流程體驗，並提供多元化的私有化部署服務，強化企業敏捷性，釋放無限商機。","contactPerson":"劉經理","companyPhone":"06-3131660","contactEmail":"ntcp-ai-plan-service-provider@kdanmobile.com","websiteUrl":"https://www.kdan.com/","specialPrice":"80,000元／十萬頁（未稅）"},{"id":"AI營運流程自動化-5","category":"AI營運流程自動化","sequence":5,"companyName":"肆時資訊設計有限公司","companyShortName":"肆時資訊設計","solutionName":"車輛產業AI店面管理解決方案","manualUrl":"https://youtu.be/QuVRn0qcO4Q?si=lZezq1LblhO9dcDY","imageFileName":"5.肆時資訊設計有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/5.肆時資訊設計有限公司.jpg","bannerFileExists":true,"solutionIntro":"ReMo 以雲端架構打造「車輛數據一站式服務平台」，核心功能包含： \\n一、        車輛查詢：輸入車牌號碼即可即時查詢。 \\n二、        履歷查詢：快速取得完整維修紀錄，並可列表瀏覽。 \\n三、        AI 行照辨識：透過拍照上傳，自動辨識文字資訊。 \\n四、        AI 車況報告：由歷史維修紀錄推算並產出智能車況報告。 \\n五、        強制險查詢：整合保險模組，輸入車牌與身分資訊即可查詢保單狀態。\\n\\n方案價格說明：\\n系統原訂價：NT$ 100,199/年，新北市專屬優惠價：NT$ 80,199／年（含稅） （另加碼贈送12個月使用期限）\\n\\n【本計畫專屬優惠內容】\\n\\n🔹 加碼多送 1 年系統使用期限（同優惠價格享更長服務期間）\\n🔹 免收一次性系統導入與設定費\\n🔹 AI 分析模組免費納入（無須額外加購）\\n🔹 提供完整系統功能，不限基本使用次數\\n\\n【系統保固與維運】\\n\\n🔹 上線日起 24 個月完整系統保固(可依實際營運需求彈性運用維運服務)\\n🔹 功能異常修復與錯誤排除\\n🔹 AI 模組穩定度維護\\n🔹 雲端可用性與效能優化\\n🔹 版本更新與必要資安修補\\n\\n【技術支援】\\n\\n🔹 上班時段線上技術支援\\n🔹 遠端協助與問題排除\\n\\n【延伸優惠】\\n\\n🔹 免費提供 1 場 AI 教育訓練課程\\n\\n【其他專屬保障】\\n\\n🔹 雲端架構，免額外硬體投資\\n🔹 享後續功能升級與模組擴充優先優惠\\n🔹 限新北市參與本計畫業者適用\\n🔹 不影響原有系統功能與服務品質","companyIntro":"肆時資訊設計有限公司自2019年成立以來，以資訊×服務設計為核心，專注於創新車輛產業數位管理，ReMo瑞摩智能雲端管理系統，結合工單數位化、顧客互動、法規遵循與供應鏈整合，打造全方位智慧生態系，協助機車行突破營運瓶頸，邁向數據化決策。公司具備豐富專案能量，曾執行深度高雄機車智慧產業整合計畫、數位雲服務研發補助計畫等，已推廣超過千家車行完成數位化導入，並導入 AI 技術提升維修管理效率。\\n在成果驗證上，榮獲交通部公路局第一屆資料創新應用競賽社會組創新獎；並受邀參與2024 Meet Taipei、2025國際中小企業博覽會、2025高雄智慧城市展等指標性展會。肆時資訊將持續以「降低導入門檻、放大工具槓桿、累積數據價值」為方向。","contactPerson":"簡小姐","companyPhone":"04-37071383#1205","contactEmail":"services@remo.tw","websiteUrl":"https://remo.tw/","specialPrice":"80,199 元／年（含稅）"},{"id":"AI營運流程自動化-6","category":"AI營運流程自動化","sequence":6,"companyName":"詮通電腦有限公司","companyShortName":"詮通電腦","solutionName":"Ai網路開店+雲端POS+蝦皮整合+進銷存整合方案","manualUrl":"https://www.youtube.com/watch?v=hqt_TiJAroQ&list=PLnSsaZeef6-WAfHG6NcxLPJgLvhTMRFLT","imageFileName":"6.詮通電腦有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/6.詮通電腦有限公司.png","bannerFileExists":true,"solutionIntro":"錢老闆雲端是為小微企業變得更強大而生的雲端管理平台，致力於解決老闆在經營過程中常見的混亂與不確定。從訂單、庫存到帳務，將分散的資訊整合在同一系統中，讓企業營運變得清楚、有序，不再依賴人工整理與經驗判斷。\\n\\n透過錢老闆雲端，企業可以即時掌握銷售狀況、庫存變化與營收成果，減少重複作業與人為錯誤。直覺化的操作設計，讓沒有技術背景的使用者也能快速上手，將時間從繁瑣管理中釋放，專注在業務與成長機會上。\\n\\n錢老闆雲端不只是工具，更是企業成長的基礎。它幫助小微企業建立清晰的營運流程，用數據支持決策，讓每一位努力經營的老闆，都能更安心經營事業迎接未來。\\n\\n方案價格說明：新臺幣35,000元(含稅)/6個月/5人版\\n新北專屬優惠價格：新臺幣63,000元(含稅)/12個月/5人版","companyIntro":"詮通電腦創立於2002年，深耕企業服務二十載，以深厚研發底蘊打造錢老闆雲端平台。「錢老闆」將系統轉化為您的「數位員工」，已協助數百家中小企業整合線上Ai網路開店、批發訂貨、門市POS系統，蝦皮電商整合，實現進銷存數據一站式管理，成功打通O2O銷售模式。\\n讓您在單一平台掌握各方銷售與即時庫存，徹底告別資訊破碎與混亂的理帳痛點。不只是處理訂單，這位員工更擅長財務管理，並自動為您整理應收付帳款核銷。並即時產出損益報表，讓您隨時掌握獲利狀況，進而透過數據做出精準決策。","contactPerson":"劉先生","companyPhone":"04-22370296","contactEmail":"service@moneyboss.com.tw","websiteUrl":"https://www.moneyboss.com.tw/","specialPrice":"63,000 元／12個月（含稅）"},{"id":"AI營運流程自動化-7","category":"AI營運流程自動化","sequence":7,"companyName":"睿力智能運動有限公司","companyShortName":"睿力智能運動","solutionName":"企業AI行銷獲客一站式解決方案","manualUrl":"","imageFileName":"7.睿力智能運動有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/7.睿力智能運動有限公司.png","bannerFileExists":true,"solutionIntro":"本方案整合最新人工智慧與自動化工具，為企業打造一站式智能行銷方案。系\\n統核心採用大型語言模型，能根據品牌調性、產品特色與目標客群，自動生成\\n專業且具吸引力的行銷文案。\\n系統最大亮點在於「全通路整合發佈」：只需一次操作，即可同步內容至\\nFacebook、Instagram、X、LinkedIn 等平台，並自動更新 WordPress 官網與優化\\nSEO。內建預約排程功能，可預先規劃長達一個月的內容，確保系統在最佳時段\\n自動發佈，極大化觸及率。\\n在效率提升方面，系統將原需 2 到 3 小時的產製流程縮短至 10 分鐘內，並實\\n現 24 小時不間斷運作。導入本系統能有效取代聘請專員或外包設計的成本，\\n讓企業將資源專注於高價值的策略規劃與客戶維護，同時降低廣告支出，提升\\n自然流量與開發效率。\\n\\n新北專屬優惠：\\n1. 企業AI行銷獲客一站式解決方案，新北企業專屬年約方案僅需 40,000 元（未\\n稅），相當於每月不到5,000元，比聘請一個正式員工的勞健保、勞退的費用還\\n要低。此方案為年繳，包含 AI 文案與圖片自動生成、多平台一鍵發佈\\n（Facebook、Instagram、X、Threads、LinkedIn、WordPress）、預約排程功能、成效\\n追蹤、系統教育訓練及線上技術支援。\\n2. 本方案期間享有完整保固服務，包含系統完整功能、免費軟體更新、技術問\\n題即時排除與免費教育訓練。","companyIntro":"睿力智能運動（ATTRAKFIT）深耕智慧運動科技，結合 IoT 與自動阻力演算法，推出智慧訓練車、外掛式虛擬騎乘升級模組、力量感測踏板等，協助家用與健身房精準化訓練。我們致力於讓運動科學與娛樂體驗無縫接軌，不僅提供硬體方案，更透過 AI 技術驅動數位轉型。\\n\\n在拓展業務過程中，我們深刻體會到產業的共同痛點：無論是通路商或製造商，都專注於產品銷售與製造本業，對於行銷推廣感到力不從心——聘請專職行銷人員成本高昂，外包又難以掌控品質，社群經營更是耗時費力。因此我們導入 AI 自動化行銷技術，不僅解決自身需求，更將這套系統服務化，協助同業夥伴以更低成本、更高效率進行多通路行銷與客戶開發。","contactPerson":"邱執行長","companyPhone":"02-66272829","contactEmail":"ceo@attrakfit.com","websiteUrl":"attrakfit.com","specialPrice":"40,000 元／年（未稅）"},{"id":"AI營運流程自動化-8","category":"AI營運流程自動化","sequence":8,"companyName":"數辰創藝科技股份有限公司","companyShortName":"數辰創藝科技","solutionName":"TeamSync 企業AI 協作作業系統方案","manualUrl":"","imageFileName":"8.數辰創藝科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/8.數辰創藝科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"方案 A｜入門試行（建議 1 個部門/流程）    \\n1.系統環境開通與帳號權限建置\\n2.5組AI-AGENT群組/聊天室架構建立（公司/部門/專案）\\n3.基礎教育訓練（2 小時）\\n4.基礎知識庫建置指引（企業可自行上傳）\\n5.上線陪跑與問題排除（新北專案加值）\\n\\n新北專屬優惠：\\n1.加贈 1 個月導入陪跑支援\\n2.問題優先處理通道\\"\\n\\n方案 B｜標準導入（跨 2–3 部門）\\n包含內容（除 方案A 外加）：\\n1.DCC知識庫管理分類/標籤規劃與模板提供\\n2.AI 助理基本設定（口吻、回答規則、引用來源設定）\\n3.1 條核心流程「任務化」示範建置（例：會議待辦追蹤/門市回報/客訴處理）\\n4.5組AI-AGENT群組/聊天室架構建立\\n\\n新北專屬優惠：\\n1.加贈 1 個月導入陪跑支援\\n2.問題優先處理通道\\"\\n\\n方案 C｜進階整合（全公司擴大 + 系統串接）\\n包含內容（除方案 B 外加）：\\n1.既有系統整合（RPA/匯入匯出/或 API 串接擇一或混合）\\n2.成效KPI追蹤與改善建議報告（每月/每季）\\n3.共30組AI-AGENT群組/聊天室架構建立\\n4.獨立APP使用介面\\n\\n新北專屬優惠：\\n1.加贈 1 個月導入陪跑支援\\n2.問題優先處理通道","companyIntro":"數辰專注於 AI 軟體開發與數位解決方案，致力於為企業打造更高效、更智能的營運模式。我們的TeamSync 企業智能協作平台，結合 AI 聊天室與知識管理系統，重塑內部溝通模式，讓資訊流動更順暢、員工訓練更高效。我們亦運用 AI 技術精準鎮定目標客群，結合短影音、社群行銷與數位廣告代操，為品牌量身打造高效的市場拓展策略。透過 AI 創新與數據驅動的行銷策略，我們助力企業在競爭激烈的市場中脫穎而出。","contactPerson":"張小姐","companyPhone":"02-7748-0805","contactEmail":"zoey@shuchenai.com","websiteUrl":"https://shuchenai.com/","specialPrice":"方案 A｜入門試行：\\n● 建置/導入費：60,000 元\\n● 授權/訂閱費：65,000 元／年  \\n\\n方案 B｜標準導入：\\n● 建置/導入費：120,000 元  \\n● 授權/訂閱費：130,000 元／年      \\n\\n方案 C｜進階整合：\\n● 建置/導入費：250,000 元起（依整合範圍調整） \\n● 授權/訂閱費：270,000 元／年"},{"id":"AI營運流程自動化-9","category":"AI營運流程自動化","sequence":9,"companyName":"璽樂科技股份有限公司","companyShortName":"璽樂科技","solutionName":"AI影像缺失辨識與報告自動化方案","manualUrl":"https://youtu.be/Hr-x2ZjlRts","imageFileName":"9.璽樂科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/9.璽樂科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本方案提供「AI影像缺失辨識與PDF報告自動化生成」一站式流程，支援單張照片與即時攝影機截圖作為輸入，AI可自動偵測影像中的缺失/異常項目，並以框選或熱區方式標註缺失位置，同時辨識同一張圖的多處缺失，讓現場問題一目了然。系統內建提示詞（Prompt）與報告撰寫邏輯，可自動產出缺失描述、風險說明與改善建議，使用者亦可依實際狀況再次編輯修正，確保內容符合現場與公司用語。報告部分可學習既有格式與欄位需求，將影像標註、缺失清單與建議措施自動整合，一鍵輸出標準化PDF報告，便於巡檢、驗收、品檢與稽核留存，大幅降低人工判讀與排版時間，提升報告一致性與交付效率。\\n\\n方案價格說明：\\n12個月方案$NT 137000(未稅) 加贈移動式攝影機\\n • 內含額度：每月 300 次影像分析 + 300 份PDF報告輸出\\n • 額度說明： \\n　o 1 次分析＝1 張影像辨識（照片/截圖） \\n　o 1 份報告＝1 次PDF輸出（含標註影像＋缺失清單＋建議）\\n\\n新北專屬優惠：\\n方案保固/維護（含於年費）\\n•        保固期間：訂閱期間內（持續有效）\\n•        維護內容：\\n1.系統功能異常修復（非人為/非第三方因素）\\n2.PDF輸出失敗/格式跑版的排除（在既定模板範圍內）\\n3.服務可用性與例行更新（不影響既有資料）\\n•        支援回覆：\\n1.一般問題：1 個工作日內回覆\\n2.重大故障（無法分析/無法輸出）：4 小時內回覆（工作時段：週一至週五09：00～18：00,不含國定假日）","companyIntro":"璽樂科技專注營建與公共工程場域，提供結合 AI 影像、IoT 感測與雲端管理的一站式智慧工安平台。系統涵蓋人員出入、危險區域管制、環境監測、異常警示與影像留存等功能，以模組化設計對應不同規模工地，並支援多工地雲端監控與權限管理，讓總公司可即時掌握各工地風險與狀態，同時自動產出符合金安獎、金質獎與勞檢需求的報表，降低人工整理成本。","contactPerson":"廖先生/李先生","companyPhone":"02-87515266","contactEmail":"james.liao@i-daka.com / iglee@i-daka.com","websiteUrl":"https://idaka.io/","specialPrice":"137,000元／12個月（未稅）"}]`),gs=[{label:"AI市場洞察",slug:"ai-market-insight"},{label:"AI企業營運管理",slug:"ai-enterprise-operations"},{label:"AI助理",slug:"ai-assistant"},{label:"AI垂直整合方案",slug:"ai-vertical-integration"},{label:"AI居家照護",slug:"ai-home-care"},{label:"AI創作內容",slug:"ai-content-creation"},{label:"AI智能客服",slug:"ai-intelligent-customer-service"},{label:"AI智慧製造",slug:"ai-smart-manufacturing"},{label:"AI資訊安全",slug:"ai-information-security"},{label:"AI營運流程自動化",slug:"ai-operation-automation"}],Vm=Object.assign({"/src/assets/solutions/banner/AI企業營運管理/1.元盛生醫電子股份有限公司.png":$f,"/src/assets/solutions/banner/AI企業營運管理/10.臺灣通用紡織科技股份有限公司.png":Mf,"/src/assets/solutions/banner/AI企業營運管理/11.慧穩科技股份有限公司.png":Of,"/src/assets/solutions/banner/AI企業營運管理/12.曜夆科技股份有限公司.png":Rf,"/src/assets/solutions/banner/AI企業營運管理/13.璽樂科技股份有限公司.jpg":Lf,"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司-1.png":Uf,"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司-2png.png":Vf,"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司.png":jf,"/src/assets/solutions/banner/AI企業營運管理/3.有創科技股份有限公司.jpg":qf,"/src/assets/solutions/banner/AI企業營運管理/4.背景模式股份有限公司.png":Hf,"/src/assets/solutions/banner/AI企業營運管理/5.滿拓科技股份有限公司.png":Gf,"/src/assets/solutions/banner/AI企業營運管理/6.睿思創新股份有限公司.png":Wf,"/src/assets/solutions/banner/AI企業營運管理/7.睿思創新股份有限公司.png":zf,"/src/assets/solutions/banner/AI企業營運管理/8.網際智慧股份有限公司.png":Kf,"/src/assets/solutions/banner/AI企業營運管理/9.聚典資訊股份有限公司.png":Xf,"/src/assets/solutions/banner/AI創作內容/1.大數軟體有限公司.png":Yf,"/src/assets/solutions/banner/AI創作內容/2.漫話科技股份有限公司.png":Qf,"/src/assets/solutions/banner/AI創作內容/3.網際智慧股份有限公司.png":Jf,"/src/assets/solutions/banner/AI助理/1.大數軟體有限公司.png":Zf,"/src/assets/solutions/banner/AI助理/2.易晨智能股份有限公司.png":em,"/src/assets/solutions/banner/AI助理/3.創造智能科技股份有限公司.jpg":tm,"/src/assets/solutions/banner/AI助理/4.緯謙科技股份有限公司.jpg":nm,"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司-1.png":sm,"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司-2.png":om,"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司.png":im,"/src/assets/solutions/banner/AI垂直整合方案/1.艾利思科技股份有限公司.png":am,"/src/assets/solutions/banner/AI垂直整合方案/2.城智科技股份有限公司.png":rm,"/src/assets/solutions/banner/AI垂直整合方案/3.訊連科技股份有限公司.png":lm,"/src/assets/solutions/banner/AI垂直整合方案/4.雲義科技股份有限公司.jpg":cm,"/src/assets/solutions/banner/AI垂直整合方案/5.睿思創新股份有限公司.png":um,"/src/assets/solutions/banner/AI居家照護/1.凌松科技有限公司.jpg":dm,"/src/assets/solutions/banner/AI居家照護/2.健康盟股份有限公司.png":pm,"/src/assets/solutions/banner/AI居家照護/3.開源智造股份有限公司.jpg":fm,"/src/assets/solutions/banner/AI市場洞察/1.大數軟體有限公司.png":mm,"/src/assets/solutions/banner/AI市場洞察/2.用益網路科技股份有限公司.jpg":hm,"/src/assets/solutions/banner/AI市場洞察/3.團薦科技股份有限公司.jpg":gm,"/src/assets/solutions/banner/AI市場洞察/4.麟數據科技股份有限公司.png":wm,"/src/assets/solutions/banner/AI智慧製造/1.傑騰智能股份有限公司.png":bm,"/src/assets/solutions/banner/AI智慧製造/2.慧穩科技股份有限公司.png":Am,"/src/assets/solutions/banner/AI智慧製造/3.慧穩科技股份有限公司.png":ym,"/src/assets/solutions/banner/AI智慧製造/4.慧穩科技股份有限公司.png":vm,"/src/assets/solutions/banner/AI智慧製造/5.摩絡人工智慧股份有限公司.png":Im,"/src/assets/solutions/banner/AI智能客服/1.亞博福爾摩沙有限公司.jpeg":Em,"/src/assets/solutions/banner/AI智能客服/2.亞博福爾摩沙有限公司.jpg":_m,"/src/assets/solutions/banner/AI智能客服/3.社群洞察股份有限公司.jpg":xm,"/src/assets/solutions/banner/AI智能客服/4.凌典科技有限公司.png":Cm,"/src/assets/solutions/banner/AI智能客服/5.創造智能科技股份有限公司.png":Sm,"/src/assets/solutions/banner/AI智能客服/6.穎諾科技股份有限公司.jpg":Bm,"/src/assets/solutions/banner/AI營運流程自動化/1.卡菲卡金融科技股份有限公司.png":Nm,"/src/assets/solutions/banner/AI營運流程自動化/2.拉普拉斯智能科技股份有限公司.png":Pm,"/src/assets/solutions/banner/AI營運流程自動化/3.虎智科技股份有限公司.png":km,"/src/assets/solutions/banner/AI營運流程自動化/4.凱鈿行動科技股份有限公司.png":Tm,"/src/assets/solutions/banner/AI營運流程自動化/5.肆時資訊設計有限公司.jpg":Fm,"/src/assets/solutions/banner/AI營運流程自動化/6.詮通電腦有限公司.png":Dm,"/src/assets/solutions/banner/AI營運流程自動化/7.睿力智能運動有限公司.png":$m,"/src/assets/solutions/banner/AI營運流程自動化/8.數辰創藝科技股份有限公司.png":Mm,"/src/assets/solutions/banner/AI營運流程自動化/9.璽樂科技股份有限公司.jpg":Om,"/src/assets/solutions/banner/AI資訊安全/1.艾比互動娛樂有限公司.png":Rm,"/src/assets/solutions/banner/AI資訊安全/2.華苓科技股份有限公司.png":Lm,"/src/assets/solutions/banner/AI資訊安全/3.極風雲創股份有限公司.png":Um}),Qe=e=>String(e??"").trim(),Ya=e=>{const t=Qe(e);return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""},Zl=$i.map((e,t)=>{const n=Qe(e.category),s=Qe(e.solutionName);if(!n||!s)return null;const o=Qe(e.bannerAssetKey),i=o&&Vm[o]||"";return{id:Qe(e.id)||`${n}-${t+1}`,order:Number.isFinite(Number(e.sequence))?Number(e.sequence):t+1,tag:n,company:Qe(e.companyName),companyShortName:Qe(e.companyShortName),name:s,manualUrl:Ya(e.manualUrl),imageFileName:Qe(e.imageFileName),image:i,detailImage:i,solutionIntro:Qe(e.solutionIntro),vendorIntro:Qe(e.companyIntro),specialPrice:Qe(e.specialPrice),contactPerson:Qe(e.contactPerson),companyPhone:Qe(e.companyPhone),contactEmail:Qe(e.contactEmail),websiteUrl:Ya(e.websiteUrl)}}).filter(Boolean),jm=(e,t)=>e.order-t.order,Pt=e=>Zl.filter(t=>t.tag===e).sort(jm).map(t=>({id:t.id,companyName:t.companyShortName||t.company,solutionName:t.name,modalData:t})),ni=new Map;Zl.forEach(e=>{const t=e.company||e.companyShortName;!t||ni.has(t)||ni.set(t,e)});[...ni.values()].map((e,t)=>({id:`vendor-${t+1}`,logo:e.image,vendorName:e.companyShortName||e.company,modalData:e}));const qm={class:"container nav-inner"},Hm={class:"nav-links nav-links--desktop","aria-label":"主要導覽"},Gm={key:0,class:"nav-separator"},Wm={key:1,class:"nav-dropdown"},zm={id:"desktop-category-submenu",class:"nav-submenu",role:"group","aria-label":"方案分類子選單"},Km=["href","aria-label","title"],Xm=["aria-expanded"],Ym={key:0,class:"mobile-dropdown"},Qm={class:"mobile-dropdown-head"},Jm=["aria-expanded","aria-label","title"],Zm={class:"sr-only"},eh=["href","aria-label","title"],th={__name:"NavBar",setup(e){const t=qe(!1),n=qe(!1),s=qe(null),o=qe(null),i=Di(),a=[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"FAQ",to:"/faq"}],l=[{label:"方案分類",to:"/categories/ai-market-insight",children:gs.map(y=>({label:y.label,to:`/categories/${y.slug}`}))},{label:"AI服務供應商",to:"/vendors"},{label:"新北經發局",href:"https://www.economic.ntpc.gov.tw/"},{label:"聯絡我們",to:"/contact-us"},{label:"即刻申請",to:"/about"},{label:"搜尋",to:"/search"},{label:"網站導覽",to:"/sitemap"}],u=Ee(()=>[...a,...l]),c=Ee(()=>i.path==="/categories"||i.path.startsWith("/categories/")),d=()=>{t.value=!t.value,t.value||(n.value=!1)},f=()=>{n.value=!n.value},h=()=>{t.value=!1,n.value=!1},v=y=>{!t.value||!s.value||y.target instanceof Node&&!s.value.contains(y.target)&&h()},C=y=>{y.key==="Escape"&&t.value&&(h(),o.value?.focus())},P=()=>{t.value&&requestAnimationFrame(()=>{s.value&&!s.value.contains(document.activeElement)&&h()})};return hl(()=>{document.addEventListener("pointerdown",v),document.addEventListener("keydown",C)}),Ci(()=>{document.removeEventListener("pointerdown",v),document.removeEventListener("keydown",C)}),Bn(()=>i.path,()=>{h()}),(y,E)=>{const S=fs("RouterLink");return k(),L("header",{ref_key:"navRoot",ref:s,class:"site-nav",onFocusout:P},[g("div",qm,[Ae(S,{class:"brand hover-scale",to:"/","aria-label":"返回首頁：新北產業 AI 化輔導計畫",title:"返回首頁"},{default:Fe(()=>[...E[0]||(E[0]=[g("span",{class:"brand-title"},[g("span",{class:"brand-line brand-line--small"},"新北產業"),g("span",{class:"brand-line"},"AI化輔導計畫")],-1)])]),_:1}),g("nav",Hm,[(k(),L(oe,null,ke(l,(b,T)=>(k(),L(oe,{key:b.to||b.href},[T>0?(k(),L("span",Gm,"|")):lt("",!0),b.children?(k(),L("div",Wm,[Ae(S,{class:De(["nav-link nav-link--dropdown hover-scale",{"router-link-active":c.value}]),to:b.to,title:b.label},{default:Fe(()=>[Pe(Z(b.label),1)]),_:2},1032,["class","to","title"]),g("div",zm,[(k(!0),L(oe,null,ke(b.children,U=>(k(),Be(S,{key:U.to,class:"nav-submenu-link",to:U.to,title:U.label},{default:Fe(()=>[Pe(Z(U.label),1)]),_:2},1032,["to","title"]))),128))])])):b.href?(k(),L("a",{key:2,class:"nav-link hover-scale",href:b.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${b.label}（另開新視窗）`,title:`${b.label}（另開新視窗）`},[Pe(Z(b.label),1),E[1]||(E[1]=g("span",{class:"external-hint"},"（另開新視窗）",-1))],8,Km)):(k(),Be(S,{key:3,class:"nav-link hover-scale",to:b.to,title:b.label},{default:Fe(()=>[Pe(Z(b.label),1)]),_:2},1032,["to","title"]))],64))),64))]),g("button",{ref_key:"menuToggle",ref:o,class:"menu-toggle hover-scale",type:"button","aria-label":"切換主要導覽選單",title:"切換主要導覽選單","aria-controls":"primary-nav","aria-expanded":t.value.toString(),onClick:d},[...E[2]||(E[2]=[g("span",{class:"bar"},null,-1),g("span",{class:"bar"},null,-1),g("span",{class:"bar"},null,-1)])],8,Xm),g("nav",{id:"primary-nav",class:De(["nav-links nav-links--mobile",{open:t.value}]),"aria-label":"行動版主要導覽"},[(k(!0),L(oe,null,ke(u.value,b=>(k(),L(oe,{key:b.to||b.href},[b.children?(k(),L("div",Ym,[g("div",Qm,[Ae(S,{class:De(["nav-link hover-scale",{"router-link-active":c.value}]),to:b.to,title:b.label},{default:Fe(()=>[Pe(Z(b.label),1)]),_:2},1032,["class","to","title"]),g("button",{class:"mobile-submenu-toggle",type:"button","aria-controls":"mobile-category-submenu","aria-expanded":n.value.toString(),"aria-label":n.value?"收合方案分類子選單":"展開方案分類子選單",title:n.value?"收合方案分類子選單":"展開方案分類子選單",onClick:f},[g("span",Zm,Z(n.value?"收合方案分類子選單":"展開方案分類子選單"),1),g("i",{class:De(["fa-solid fa-chevron-down mobile-submenu-caret",{open:n.value}]),"aria-hidden":"true"},null,2)],8,Jm)]),g("div",{id:"mobile-category-submenu",class:De(["mobile-submenu",{open:n.value}])},[(k(!0),L(oe,null,ke(b.children,T=>(k(),Be(S,{key:T.to,class:"mobile-submenu-link",to:T.to,title:T.label},{default:Fe(()=>[Pe(Z(T.label),1)]),_:2},1032,["to","title"]))),128))],2)])):b.href?(k(),L("a",{key:1,class:"nav-link hover-scale",href:b.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${b.label}（另開新視窗）`,title:`${b.label}（另開新視窗）`},[Pe(Z(b.label),1),E[3]||(E[3]=g("span",{class:"external-hint"},"（另開新視窗）",-1))],8,eh)):(k(),Be(S,{key:2,class:"nav-link hover-scale",to:b.to,title:b.label},{default:Fe(()=>[Pe(Z(b.label),1)]),_:2},1032,["to","title"]))],64))),128))],2)])],544)}}},nh={class:"left-tabs","aria-label":"頁面導覽"},sh={__name:"LeftTabs",setup(e){const t=Di(),n=[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"FAQ",to:"/faq"}],s=Ee(()=>n.some(i=>t.path===i.to)),o=(i,a)=>({"left-tab--stack-1":a===0,"left-tab--stack-2":a===1,"left-tab--stack-3":a===2,"left-tab--palette-1":a===0,"left-tab--palette-2":a===1,"left-tab--palette-3":a===2,"left-tab--muted":s.value&&t.path!==i.to});return(i,a)=>{const r=fs("RouterLink");return k(),L("nav",nh,[(k(),L(oe,null,ke(n,(l,u)=>Ae(r,{key:l.to,class:De(["left-tab hover-scale",o(l,u)]),to:l.to},{default:Fe(()=>[Pe(Z(l.label),1)]),_:2},1032,["class","to"])),64))])}}},ht=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},oh={key:0,class:"breadcrumb","aria-label":"您目前的位置"},ih={class:"container"},ah={class:"breadcrumb-list"},rh={key:1,class:"breadcrumb-current","aria-current":"page"},lh={key:2,class:"breadcrumb-sep","aria-hidden":"true"},ch={__name:"Breadcrumb",setup(e){const t=Di(),n=Ee(()=>t.meta?.breadcrumb||[]);return(s,o)=>n.value.length?(k(),L("nav",oh,[g("div",ih,[g("ol",ah,[(k(!0),L(oe,null,ke(n.value,(i,a)=>(k(),L("li",{key:a,class:"breadcrumb-item"},[i.to&&a<n.value.length-1?(k(),Be(me($n),{key:0,to:i.to,class:"breadcrumb-link"},{default:Fe(()=>[Pe(Z(i.label),1)]),_:2},1032,["to"])):(k(),L("span",rh,Z(i.label),1)),a<n.value.length-1?(k(),L("span",lh,"›")):lt("",!0)]))),128))])])])):lt("",!0)}},uh=ht(ch,[["__scopeId","data-v-21f6e185"]]),dh={class:"app-shell"},ph={class:"skip-links","aria-label":"無障礙快速連結"},fh={id:"main-content",class:"main-content","aria-label":"主要內容",tabindex:"-1"},mh={__name:"App",setup(e){return(t,n)=>(k(),L("div",dh,[g("nav",ph,[n[2]||(n[2]=g("a",{href:"#main-content",accesskey:"C"},"跳到主要內容",-1)),Ae(me($n),{to:"/sitemap"},{default:Fe(()=>[...n[0]||(n[0]=[Pe("網站導覽",-1)])]),_:1}),Ae(me($n),{to:"/search",accesskey:"S"},{default:Fe(()=>[...n[1]||(n[1]=[Pe("站內搜尋",-1)])]),_:1})]),Ae(th),Ae(sh),g("main",fh,[Ae(uh),Ae(me(Jl))])]))}},hh="/assets/opening-B_a9m_NH.png",gh="/assets/banner1-0sp7AnS8.png",wh={class:"opening-home"},bh={class:"container"},Ah={class:"content-panel"},yh=["href","aria-label","title","onClick"],vh=["src","alt"],Ih=["href","aria-label","title"],Eh=["src","alt"],_h=["src","alt"],xh={class:"home-carousel-indicators",role:"group","aria-label":"首頁輪播指示器"},Ch=["aria-label","title","aria-current","aria-pressed","onClick"],Sh={class:"sr-only"},Bh={key:0,class:"opening-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"opening-title","aria-describedby":"opening-subtitle"},Nh={class:"opening-backdrop"},Ph=["src"],kh={class:"opening-stage"},Th={key:0,class:"ready-content"},Qa="新北產業AI化輔導計畫",Fh={__name:"OpeningHomeView",setup(e){const t=[{id:1,title:"政府補助挺你AI轉型",alt:"115年度新北產業 AI 化輔導計畫：政府補助挺你 AI 轉型，降低導入門檻，報名時間即日起至 115 年 5 月 15 日。",src:gh,to:"/about"}],n=qe("ready"),s=qe(0),o=qe(0),i=qe(0),a=qe(!1),r=qe(!1);let l,u;const c=Ee(()=>n.value!=="home"),d=Ee(()=>n.value==="ready"),f=()=>{n.value="home"},h=(K,te)=>{if(r.value){r.value=!1,K&&K.preventDefault();return}te&&te(K)},v=K=>{s.value=K,c.value||X()},C=()=>{s.value=(s.value+1)%t.length},P=()=>{s.value=(s.value-1+t.length)%t.length},y=()=>{r.value=!0,u&&window.clearTimeout(u),u=window.setTimeout(()=>{r.value=!1,u=void 0},250)},E=K=>{K.touches.length===1&&(a.value=!0,o.value=K.touches[0].clientX,i.value=0)},S=K=>{!a.value||K.touches.length!==1||(i.value=K.touches[0].clientX-o.value)},b=()=>{if(!a.value)return;const K=45,te=i.value;Math.abs(te)>=K&&(te<0?C():P(),X(),y()),a.value=!1,i.value=0},T=()=>{a.value=!1,i.value=0},U=()=>{l||c.value||(l=window.setInterval(C,6e4))},$=()=>{l&&(window.clearInterval(l),l=void 0)},X=()=>{$(),U()},q=K=>{document.body.style.overflow=K?"hidden":"",document.body.classList.toggle("pre-home-stage",K)};return Bn(c,K=>{if(q(K),K){$();return}U()},{immediate:!0}),Ci(()=>{$(),q(!1),u&&(window.clearTimeout(u),u=void 0)}),(K,te)=>{const Se=fs("RouterLink");return k(),L("section",wh,[g("div",bh,[g("div",Ah,[g("header",{class:"title-row"},[te[1]||(te[1]=g("span",{class:"title-line"},null,-1)),g("h1",{class:"sr-only"},Z(Qa)),te[2]||(te[2]=g("span",{class:"title-line"},null,-1))]),g("section",{class:"home-carousel",role:"region","aria-labelledby":"home-carousel-heading",onMouseenter:$,onMouseleave:U,onFocusin:$,onFocusout:U},[te[3]||(te[3]=g("h2",{id:"home-carousel-heading",class:"sr-only"},"首頁重點資訊輪播",-1)),g("div",{class:"home-carousel-viewport",onTouchstartPassive:E,onTouchmovePassive:S,onTouchend:b,onTouchcancel:T},[g("div",{class:"home-carousel-track",style:ro({transform:`translateX(-${s.value*100}%)`})},[(k(),L(oe,null,ke(t,ee=>g("figure",{key:ee.id,class:"home-carousel-slide"},[ee.to?(k(),Be(Se,{key:0,to:ee.to,custom:""},{default:Fe(({href:pe,navigate:ze})=>[g("a",{href:pe,class:"home-slide-trigger","aria-label":`${ee.title}（前往關於計畫）`,title:`${ee.title}（前往關於計畫）`,onClick:ve=>h(ve,ze)},[g("img",{src:ee.src,alt:ee.alt||ee.title},null,8,vh)],8,yh)]),_:2},1032,["to"])):ee.href?(k(),L("a",{key:1,href:ee.href,target:"_blank",rel:"noopener noreferrer",class:"home-slide-trigger","aria-label":`${ee.title}（另開新視窗）`,title:`${ee.title}（另開新視窗）`,onClick:te[0]||(te[0]=pe=>h(pe))},[g("img",{src:ee.src,alt:ee.alt||ee.title},null,8,Eh)],8,Ih)):(k(),L("img",{key:2,class:"home-slide-static",src:ee.src,alt:ee.alt||ee.title},null,8,_h))])),64))],4)],32),g("div",xh,[(k(),L(oe,null,ke(t,(ee,pe)=>g("button",{key:ee.id,type:"button",class:De(["home-indicator",{active:pe===s.value}]),"aria-label":`切換到第 ${pe+1} 張圖片`,title:`切換到第 ${pe+1} 張圖片：${ee.title}`,"aria-current":pe===s.value?"true":void 0,"aria-pressed":(pe===s.value).toString(),onClick:ze=>v(pe)},[g("span",Sh,"第 "+Z(pe+1)+" 張："+Z(ee.title),1)],10,Ch)),64))])],32)])]),c.value?(k(),L("div",Bh,[g("div",Nh,[g("img",{class:"opening-backdrop-media opening-backdrop-image",src:me(hh),alt:"","aria-hidden":"true"},null,8,Ph)]),g("div",kh,[d.value?(k(),L("div",Th,[g("h2",{id:"opening-title",class:"ready-title"},Z(Qa)),te[4]||(te[4]=g("p",{id:"opening-subtitle",class:"ready-subtitle"},"New Taipei City Industrial AI Mentoring Program",-1)),g("button",{type:"button",class:"enter-home-btn pulse-glow","aria-label":"開始探索新北產業 AI 化輔導計畫網站",title:"開始探索新北產業 AI 化輔導計畫網站",onClick:f}," 開始探索 ")])):lt("",!0)])])):lt("",!0)])}}},Dh=ht(Fh,[["__scopeId","data-v-98d41deb"]]),$h={class:"page-hero"},Mh={class:"container"},Oh={class:"content-panel"},Rh={class:"about-highlights","aria-labelledby":"about-highlights-heading"},Lh={class:"about-highlight-head"},Uh={class:"about-highlight-body"},Vh={__name:"AboutView",setup(e){const t=[{title:"對象",icon:"fa-solid fa-user-tie",content:"想導入 AI 提升營運效率之新北市企業或工廠"},{title:"補助金額",icon:"fa-solid fa-dollar-sign",content:"最高 4 萬元（需自籌 50%）"},{title:"申請方式",icon:"fa-solid fa-envelope",content:"email 送件申請"},{title:"申請時間",icon:"fa-solid fa-clock",content:"即日起按月分批審查，原則於每月15日下午5時截止收件，進行當月批次審查，經費用罄即停止受理"}];return(n,s)=>(k(),L("section",$h,[g("div",Mh,[g("div",Oh,[s[1]||(s[1]=ms('<header class="title-row" data-v-30950d2b><div class="about-title-wrap" data-v-30950d2b><span class="title-line" data-v-30950d2b></span><h1 data-v-30950d2b>關於計畫</h1><span class="title-line" data-v-30950d2b></span></div><a class="about-apply-link" href="https://drive.google.com/drive/folders/1789FI1WmaAaVV_w6f5kl1i1-whT4AN_X" target="_blank" rel="noopener noreferrer" aria-label="開啟申請須知與申請表（另開新視窗）" title="開啟申請須知與申請表（另開新視窗）" data-v-30950d2b> 申請須知與申請表<span class="external-hint" data-v-30950d2b>（另開新視窗）</span></a></header><article class="about-copy" data-v-30950d2b><h2 class="sr-only" data-v-30950d2b>計畫說明</h2><p data-v-30950d2b> 為協助新北市企業加速導入人工智慧技術，提升營運效率與競爭力，新北市政府經濟發展局（下稱主辦單位）委託台灣智慧雲端服務股份有限公司（下稱執行單位）辦理「新北產業AI化輔導計畫」（下稱本計畫）。本計畫旨在回應產業升級與數位轉型需求，透過遴選AI服務供應廠商、輔導媒合本市企業實際導入AI應用方案，提升本市企業的數位競爭力，促進本市產業邁向智慧化與高值化發展。 </p><p data-v-30950d2b> 本計畫已公開徵選專業AI服務供應廠商，此次遴選具AI導入需求之新北企業進行輔導，並將透過「新北企業與AI應用方案供應商媒合平臺」及實體媒合會，協助本市具轉型需求之企業與AI服務供應廠商精準對接。 </p><p data-v-30950d2b> 另為降低企業導入AI之初期成本，主辦單位提供AI應用服務導入補助，受輔導之新北企業完成導入並提交相關憑證後，可依規定申請補助款。本計畫透過技術服務供應、輔導媒合機制與補助方案之三合一推動架構，盼加速推動新北企業導入AI應用服務，打造示範案例，為新北產業創造AI化的新價值。 </p></article>',2)),g("section",Rh,[s[0]||(s[0]=g("h2",{id:"about-highlights-heading",class:"sr-only"},"計畫重點資訊",-1)),(k(),L(oe,null,ke(t,o=>g("article",{key:o.title,class:"about-highlight-card"},[g("header",Lh,[g("h2",null,Z(o.title),1),g("i",{class:De(o.icon),"aria-hidden":"true"},null,2)]),g("div",Uh,Z(o.content),1)])),64))]),s[2]||(s[2]=g("p",{class:"about-note"},"*詳細申請資格、補助計算與審查方式，請參閱申請須知",-1))])])]))}},jh=ht(Vh,[["__scopeId","data-v-30950d2b"]]);function ec(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function qh(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ja(e,t){return e.get(ec(e,t))}function Hh(e,t,n){qh(e,t),t.set(e,n)}function Gh(e,t,n){return e.set(ec(e,t),n),n}const Wh=100,j={},zh=()=>{j.previousActiveElement instanceof HTMLElement?(j.previousActiveElement.focus(),j.previousActiveElement=null):document.body&&document.body.focus()},Kh=e=>new Promise(t=>{if(!e)return t();const n=window.scrollX,s=window.scrollY;j.restoreFocusTimeout=setTimeout(()=>{zh(),t()},Wh),window.scrollTo(n,s)}),tc="swal2-",Xh=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],A=Xh.reduce((e,t)=>(e[t]=tc+t,e),{}),Yh=["success","warning","info","question","error"],Gs=Yh.reduce((e,t)=>(e[t]=tc+t,e),{}),nc="SweetAlert2:",Mi=e=>e.charAt(0).toUpperCase()+e.slice(1),Ge=e=>{console.warn(`${nc} ${typeof e=="object"?e.join(" "):e}`)},wn=e=>{console.error(`${nc} ${e}`)},Za=[],Qh=e=>{Za.includes(e)||(Za.push(e),Ge(e))},sc=(e,t=null)=>{Qh(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},wo=e=>typeof e=="function"?e():e,Oi=e=>e&&typeof e.toPromise=="function",ws=e=>Oi(e)?e.toPromise():Promise.resolve(e),Ri=e=>e&&Promise.resolve(e)===e,We=()=>document.body.querySelector(`.${A.container}`),bs=e=>{const t=We();return t?t.querySelector(e):null},it=e=>bs(`.${e}`),re=()=>it(A.popup),Rn=()=>it(A.icon),Jh=()=>it(A["icon-content"]),oc=()=>it(A.title),Li=()=>it(A["html-container"]),ic=()=>it(A.image),Ui=()=>it(A["progress-steps"]),bo=()=>it(A["validation-message"]),Nt=()=>bs(`.${A.actions} .${A.confirm}`),Ln=()=>bs(`.${A.actions} .${A.cancel}`),bn=()=>bs(`.${A.actions} .${A.deny}`),Zh=()=>it(A["input-label"]),Un=()=>bs(`.${A.loader}`),As=()=>it(A.actions),ac=()=>it(A.footer),Ao=()=>it(A["timer-progress-bar"]),Vi=()=>it(A.close),eg=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,ji=()=>{const e=re();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(t).sort((i,a)=>{const r=parseInt(i.getAttribute("tabindex")||"0"),l=parseInt(a.getAttribute("tabindex")||"0");return r>l?1:r<l?-1:0}),s=e.querySelectorAll(eg),o=Array.from(s).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(o))].filter(i=>Ze(i))},qi=()=>Rt(document.body,A.shown)&&!Rt(document.body,A["toast-shown"])&&!Rt(document.body,A["no-backdrop"]),yo=()=>{const e=re();return e?Rt(e,A.toast):!1},tg=()=>{const e=re();return e?e.hasAttribute("data-loading"):!1},at=(e,t)=>{if(e.textContent="",t){const s=new DOMParser().parseFromString(t,"text/html"),o=s.querySelector("head");o&&Array.from(o.childNodes).forEach(a=>{e.appendChild(a)});const i=s.querySelector("body");i&&Array.from(i.childNodes).forEach(a=>{a instanceof HTMLVideoElement||a instanceof HTMLAudioElement?e.appendChild(a.cloneNode(!0)):e.appendChild(a)})}},Rt=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let s=0;s<n.length;s++)if(!e.classList.contains(n[s]))return!1;return!0},ng=(e,t)=>{Array.from(e.classList).forEach(n=>{!Object.values(A).includes(n)&&!Object.values(Gs).includes(n)&&!Object.values(t.showClass||{}).includes(n)&&e.classList.remove(n)})},ot=(e,t,n)=>{if(ng(e,t),!t.customClass)return;const s=t.customClass[n];if(s){if(typeof s!="string"&&!s.forEach){Ge(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof s}"`);return}ie(e,s)}},vo=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${A.popup} > .${A[t]}`);case"checkbox":return e.querySelector(`.${A.popup} > .${A.checkbox} input`);case"radio":return e.querySelector(`.${A.popup} > .${A.radio} input:checked`)||e.querySelector(`.${A.popup} > .${A.radio} input:first-child`);case"range":return e.querySelector(`.${A.popup} > .${A.range} input`);default:return e.querySelector(`.${A.popup} > .${A.input}`)}},rc=e=>{if(e.focus(),e.type!=="file"){const t=e.value;e.value="",e.value=t}},lc=(e,t,n)=>{!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(s=>{Array.isArray(e)?e.forEach(o=>{n?o.classList.add(s):o.classList.remove(s)}):n?e.classList.add(s):e.classList.remove(s)}))},ie=(e,t)=>{lc(e,t,!0)},dt=(e,t)=>{lc(e,t,!1)},Qt=(e,t)=>{const n=Array.from(e.children);for(let s=0;s<n.length;s++){const o=n[s];if(o instanceof HTMLElement&&Rt(o,t))return o}},mn=(e,t,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||parseInt(`${n}`)===0?e.style.setProperty(t,typeof n=="number"?`${n}px`:n):e.style.removeProperty(t)},Te=(e,t="flex")=>{e&&(e.style.display=t)},Le=e=>{e&&(e.style.display="none")},Hi=(e,t="block")=>{e&&new MutationObserver(()=>{ys(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},er=(e,t,n,s)=>{const o=e.querySelector(t);o&&o.style.setProperty(n,s)},ys=(e,t,n="flex")=>{t?Te(e,n):Le(e)},Ze=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),sg=()=>!Ze(Nt())&&!Ze(bn())&&!Ze(Ln()),si=e=>e.scrollHeight>e.clientHeight,og=(e,t)=>{let n=e;for(;n&&n!==t;){if(si(n))return!0;n=n.parentElement}return!1},cc=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),s=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||s>0},Gi=(e,t=!1)=>{const n=Ao();n&&Ze(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"},10))},ig=()=>{const e=Ao();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=parseInt(window.getComputedStyle(e).width),s=t/n*100;e.style.width=`${s}%`},ag=()=>typeof window>"u"||typeof document>"u",rg=`
 <div aria-labelledby="${A.title}" aria-describedby="${A["html-container"]}" class="${A.popup}" tabindex="-1">
   <button type="button" class="${A.close}"></button>
   <ul class="${A["progress-steps"]}"></ul>
   <div class="${A.icon}"></div>
   <img class="${A.image}" />
   <h2 class="${A.title}" id="${A.title}"></h2>
   <div class="${A["html-container"]}" id="${A["html-container"]}"></div>
   <input class="${A.input}" id="${A.input}" />
   <input type="file" class="${A.file}" />
   <div class="${A.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${A.select}" id="${A.select}"></select>
   <div class="${A.radio}"></div>
   <label class="${A.checkbox}">
     <input type="checkbox" id="${A.checkbox}" />
     <span class="${A.label}"></span>
   </label>
   <textarea class="${A.textarea}" id="${A.textarea}"></textarea>
   <div class="${A["validation-message"]}" id="${A["validation-message"]}"></div>
   <div class="${A.actions}">
     <div class="${A.loader}"></div>
     <button type="button" class="${A.confirm}"></button>
     <button type="button" class="${A.deny}"></button>
     <button type="button" class="${A.cancel}"></button>
   </div>
   <div class="${A.footer}"></div>
   <div class="${A["timer-progress-bar-container"]}">
     <div class="${A["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),lg=()=>{const e=We();return e?(e.remove(),dt([document.documentElement,document.body],[A["no-backdrop"],A["toast-shown"],A["has-column"]]),!0):!1},ln=()=>{j.currentInstance&&j.currentInstance.resetValidationMessage()},cg=()=>{const e=re();if(!e)return;const t=Qt(e,A.input),n=Qt(e,A.file),s=e.querySelector(`.${A.range} input`),o=e.querySelector(`.${A.range} output`),i=Qt(e,A.select),a=e.querySelector(`.${A.checkbox} input`),r=Qt(e,A.textarea);t&&(t.oninput=ln),n&&(n.onchange=ln),i&&(i.onchange=ln),a&&(a.onchange=ln),r&&(r.oninput=ln),s&&o&&(s.oninput=()=>{ln(),o.value=s.value},s.onchange=()=>{ln(),o.value=s.value})},ug=e=>{if(typeof e=="string"){const t=document.querySelector(e);if(!t)throw new Error(`Target element "${e}" not found`);return t}return e},dg=e=>{const t=re();t&&(t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true"))},pg=e=>{window.getComputedStyle(e).direction==="rtl"&&(ie(We(),A.rtl),j.isRTL=!0)},fg=e=>{const t=lg();if(ag()){wn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=A.container,t&&ie(n,A["no-transition"]),at(n,rg),n.dataset.swal2Theme=e.theme;const s=ug(e.target||"body");s.appendChild(n),e.topLayer&&(n.setAttribute("popover",""),n.showPopover()),dg(e),pg(s),cg()},Wi=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e=="object"?mg(e,t):e&&at(t,e)},mg=(e,t)=>{"jquery"in e?hg(t,e):at(t,e.toString())},hg=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},gg=(e,t)=>{const n=As(),s=Un();!n||!s||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?Le(n):Te(n),ot(n,t,"actions"),wg(n,s,t),at(s,t.loaderHtml||""),ot(s,t,"loader"))};function wg(e,t,n){const s=Nt(),o=bn(),i=Ln();!s||!o||!i||(Oo(s,"confirm",n),Oo(o,"deny",n),Oo(i,"cancel",n),bg(s,o,i,n),n.reverseButtons&&(n.toast?(e.insertBefore(i,s),e.insertBefore(o,s)):(e.insertBefore(i,t),e.insertBefore(o,t),e.insertBefore(s,t))))}function bg(e,t,n,s){if(!s.buttonsStyling){dt([e,t,n],A.styled);return}ie([e,t,n],A.styled),s.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",s.confirmButtonColor),s.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",s.denyButtonColor),s.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",s.cancelButtonColor),Mo(e),Mo(t),Mo(n)}function Mo(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Oo(e,t,n){const s=Mi(t);ys(e,n[`show${s}Button`],"inline-block"),at(e,n[`${t}ButtonText`]||""),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]||""),e.className=A[t],ot(e,n,`${t}Button`)}const Ag=(e,t)=>{const n=Vi();n&&(at(n,t.closeButtonHtml||""),ot(n,t,"closeButton"),ys(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel||""))},yg=(e,t)=>{const n=We();n&&(vg(n,t.backdrop),Ig(n,t.position),Eg(n,t.grow),ot(n,t,"container"))};function vg(e,t){typeof t=="string"?e.style.background=t:t||ie([document.documentElement,document.body],A["no-backdrop"])}function Ig(e,t){t&&(t in A?ie(e,A[t]):(Ge('The "position" parameter is not valid, defaulting to "center"'),ie(e,A.center)))}function Eg(e,t){t&&ie(e,A[`grow-${t}`])}var ae={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const _g=["input","file","range","select","radio","checkbox","textarea"],xg=(e,t)=>{const n=re();if(!n)return;const s=ae.innerParams.get(e),o=!s||t.input!==s.input;_g.forEach(i=>{const a=Qt(n,A[i]);a&&(Bg(i,t.inputAttributes),a.className=A[i],o&&Le(a))}),t.input&&(o&&Cg(t),Ng(t))},Cg=e=>{if(!e.input)return;if(!_e[e.input]){wn(`Unexpected type of input! Expected ${Object.keys(_e).join(" | ")}, got "${e.input}"`);return}const t=uc(e.input);if(!t)return;const n=_e[e.input](t,e);Te(t),e.inputAutoFocus&&setTimeout(()=>{rc(n)})},Sg=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["id","type","value","style"].includes(n)||e.removeAttribute(n)}},Bg=(e,t)=>{const n=re();if(!n)return;const s=vo(n,e);if(s){Sg(s);for(const o in t)s.setAttribute(o,t[o])}},Ng=e=>{if(!e.input)return;const t=uc(e.input);t&&ot(t,e,"input")},zi=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},vs=(e,t,n)=>{if(n.inputLabel){const s=document.createElement("label"),o=A["input-label"];s.setAttribute("for",e.id),s.className=o,typeof n.customClass=="object"&&ie(s,n.customClass.inputLabel),s.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",s)}},uc=e=>{const t=re();if(t)return Qt(t,A[e]||A.input)},Ws=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:Ri(t)||Ge(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},_e={};_e.text=_e.email=_e.password=_e.number=_e.tel=_e.url=_e.search=_e.date=_e["datetime-local"]=_e.time=_e.week=_e.month=(e,t)=>{const n=e;return Ws(n,t.inputValue),vs(n,n,t),zi(n,t),n.type=t.input,n};_e.file=(e,t)=>{const n=e;return vs(n,n,t),zi(n,t),n};_e.range=(e,t)=>{const n=e,s=n.querySelector("input"),o=n.querySelector("output");return s&&(Ws(s,t.inputValue),s.type=t.input,vs(s,e,t)),o&&Ws(o,t.inputValue),e};_e.select=(e,t)=>{const n=e;if(n.textContent="",t.inputPlaceholder){const s=document.createElement("option");at(s,t.inputPlaceholder),s.value="",s.disabled=!0,s.selected=!0,n.appendChild(s)}return vs(n,n,t),n};_e.radio=e=>{const t=e;return t.textContent="",e};_e.checkbox=(e,t)=>{const n=re();if(!n)throw new Error("Popup not found");const s=vo(n,"checkbox");if(!s)throw new Error("Checkbox input not found");s.value="1",s.checked=!!t.inputValue;const i=e.querySelector("span");if(i){const a=t.inputPlaceholder||t.inputLabel;a&&at(i,a)}return s};_e.textarea=(e,t)=>{const n=e;Ws(n,t.inputValue),zi(n,t),vs(n,n,t);const s=o=>parseInt(window.getComputedStyle(o).marginLeft)+parseInt(window.getComputedStyle(o).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const o=re();if(!o)return;const i=parseInt(window.getComputedStyle(o).width),a=()=>{if(!document.body.contains(n))return;const r=n.offsetWidth+s(n),l=re();l&&(r>i?l.style.width=`${r}px`:mn(l,"width",t.width))};new MutationObserver(a).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const Pg=(e,t)=>{const n=Li();n&&(Hi(n),ot(n,t,"htmlContainer"),t.html?(Wi(t.html,n),Te(n,"block")):t.text?(n.textContent=t.text,Te(n,"block")):Le(n),xg(e,t))},kg=(e,t)=>{const n=ac();n&&(Hi(n),ys(n,!!t.footer,"block"),t.footer&&Wi(t.footer,n),ot(n,t,"footer"))},Tg=(e,t)=>{const n=ae.innerParams.get(e),s=Rn();if(!s)return;if(n&&t.icon===n.icon){nr(s,t),tr(s,t);return}if(!t.icon&&!t.iconHtml){Le(s);return}if(t.icon&&Object.keys(Gs).indexOf(t.icon)===-1){wn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),Le(s);return}Te(s),nr(s,t),tr(s,t),ie(s,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",dc)},tr=(e,t)=>{for(const[n,s]of Object.entries(Gs))t.icon!==n&&dt(e,s);ie(e,t.icon&&Gs[t.icon]),$g(e,t),dc(),ot(e,t,"icon")},dc=()=>{const e=re();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=t},Fg=e=>`
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Dg=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,nr=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let n=e.innerHTML,s="";t.iconHtml?s=sr(t.iconHtml):t.icon==="success"?(s=Fg(t),n=n.replace(/ style=".*?"/g,"")):t.icon==="error"?s=Dg:t.icon&&(s=sr({question:"?",warning:"!",info:"i"}[t.icon])),n.trim()!==s.trim()&&at(e,s)},$g=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])er(e,n,"background-color",t.iconColor);er(e,".swal2-success-ring","border-color",t.iconColor)}},sr=e=>`<div class="${A["icon-content"]}">${e}</div>`,Mg=(e,t)=>{const n=ic();if(n){if(!t.imageUrl){Le(n);return}Te(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt||""),mn(n,"width",t.imageWidth),mn(n,"height",t.imageHeight),n.className=A.image,ot(n,t,"image")}};let Ki=!1,pc=0,fc=0,mc=0,hc=0;const Og=e=>{e.addEventListener("mousedown",zs),document.body.addEventListener("mousemove",Ks),e.addEventListener("mouseup",Xs),e.addEventListener("touchstart",zs),document.body.addEventListener("touchmove",Ks),e.addEventListener("touchend",Xs)},Rg=e=>{e.removeEventListener("mousedown",zs),document.body.removeEventListener("mousemove",Ks),e.removeEventListener("mouseup",Xs),e.removeEventListener("touchstart",zs),document.body.removeEventListener("touchmove",Ks),e.removeEventListener("touchend",Xs)},zs=e=>{const t=re();if(!t)return;const n=Rn();if(e.target===t||n&&n.contains(e.target)){Ki=!0;const s=gc(e);pc=s.clientX,fc=s.clientY,mc=parseInt(t.style.insetInlineStart)||0,hc=parseInt(t.style.insetBlockStart)||0,ie(t,"swal2-dragging")}},Ks=e=>{const t=re();if(t&&Ki){let{clientX:n,clientY:s}=gc(e);const o=n-pc;t.style.insetInlineStart=`${mc+(j.isRTL?-o:o)}px`,t.style.insetBlockStart=`${hc+(s-fc)}px`}},Xs=()=>{const e=re();Ki=!1,dt(e,"swal2-dragging")},gc=e=>{let t=0,n=0;return e.type.startsWith("mouse")?(t=e.clientX,n=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,n=e.touches[0].clientY),{clientX:t,clientY:n}},Lg=(e,t)=>{const n=We(),s=re();if(!(!n||!s)){if(t.toast){mn(n,"width",t.width),s.style.width="100%";const o=Un();o&&s.insertBefore(o,Rn())}else mn(s,"width",t.width);mn(s,"padding",t.padding),t.color&&(s.style.color=t.color),t.background&&(s.style.background=t.background),Le(bo()),Ug(s,t),t.draggable&&!t.toast?(ie(s,A.draggable),Og(s)):(dt(s,A.draggable),Rg(s))}},Ug=(e,t)=>{const n=t.showClass||{};e.className=`${A.popup} ${Ze(e)?n.popup:""}`,t.toast?(ie([document.documentElement,document.body],A["toast-shown"]),ie(e,A.toast)):ie(e,A.modal),ot(e,t,"popup"),typeof t.customClass=="string"&&ie(e,t.customClass),t.icon&&ie(e,A[`icon-${t.icon}`])},Vg=(e,t)=>{const n=Ui();if(!n)return;const{progressSteps:s,currentProgressStep:o}=t;if(!s||s.length===0||o===void 0){Le(n);return}Te(n),n.textContent="",o>=s.length&&Ge("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((i,a)=>{const r=jg(i);if(n.appendChild(r),a===o&&ie(r,A["active-progress-step"]),a!==s.length-1){const l=qg(t);n.appendChild(l)}})},jg=e=>{const t=document.createElement("li");return ie(t,A["progress-step"]),at(t,e),t},qg=e=>{const t=document.createElement("li");return ie(t,A["progress-step-line"]),e.progressStepsDistance&&mn(t,"width",e.progressStepsDistance),t},Hg=(e,t)=>{const n=oc();n&&(Hi(n),ys(n,!!(t.title||t.titleText),"block"),t.title&&Wi(t.title,n),t.titleText&&(n.innerText=t.titleText),ot(n,t,"title"))},wc=(e,t)=>{var n;Lg(e,t),yg(e,t),Vg(e,t),Tg(e,t),Mg(e,t),Hg(e,t),Ag(e,t),Pg(e,t),gg(e,t),kg(e,t);const s=re();typeof t.didRender=="function"&&s&&t.didRender(s),(n=j.eventEmitter)===null||n===void 0||n.emit("didRender",s)},Gg=()=>Ze(re()),bc=()=>{var e;return(e=Nt())===null||e===void 0?void 0:e.click()},Wg=()=>{var e;return(e=bn())===null||e===void 0?void 0:e.click()},zg=()=>{var e;return(e=Ln())===null||e===void 0?void 0:e.click()},Vn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ac=e=>{if(e.keydownTarget&&e.keydownHandlerAdded&&e.keydownHandler){const t=e.keydownHandler;e.keydownTarget.removeEventListener("keydown",t,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1}},Kg=(e,t,n)=>{if(Ac(e),!t.toast){const s=i=>Yg(t,i,n);e.keydownHandler=s;const o=t.keydownListenerCapture?window:re();if(o){e.keydownTarget=o,e.keydownListenerCapture=t.keydownListenerCapture;const i=s;e.keydownTarget.addEventListener("keydown",i,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0}}},oi=(e,t)=>{var n;const s=ji();if(s.length){e=e+t,e===-2&&(e=s.length-1),e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();return}(n=re())===null||n===void 0||n.focus()},yc=["ArrowRight","ArrowDown"],Xg=["ArrowLeft","ArrowUp"],Yg=(e,t,n)=>{e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?Qg(t,e):t.key==="Tab"?Jg(t):[...yc,...Xg].includes(t.key)?Zg(t.key):t.key==="Escape"&&e0(t,e,n)))},Qg=(e,t)=>{if(!wo(t.allowEnterKey))return;const n=re();if(!n||!t.input)return;const s=vo(n,t.input);if(e.target&&s&&e.target instanceof HTMLElement&&e.target.outerHTML===s.outerHTML){if(["textarea","file"].includes(t.input))return;bc(),e.preventDefault()}},Jg=e=>{const t=e.target,n=ji();let s=-1;for(let o=0;o<n.length;o++)if(t===n[o]){s=o;break}e.shiftKey?oi(s,-1):oi(s,1),e.stopPropagation(),e.preventDefault()},Zg=e=>{const t=As(),n=Nt(),s=bn(),o=Ln();if(!t||!n||!s||!o)return;const i=[n,s,o];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const a=yc.includes(e)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;if(r){for(let l=0;l<t.children.length;l++){if(r=r[a],!r)return;if(r instanceof HTMLButtonElement&&Ze(r))break}r instanceof HTMLButtonElement&&r.focus()}},e0=(e,t,n)=>{e.preventDefault(),wo(t.allowEscapeKey)&&n(Vn.esc)};var Mn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const t0=()=>{const e=We();Array.from(document.body.children).forEach(n=>{n.contains(e)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},vc=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Ic=typeof window<"u"&&!!window.GestureEvent,n0=()=>{if(Ic&&!Rt(document.body,A.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,ie(document.body,A.iosfix),s0()}},s0=()=>{const e=We();if(!e)return;let t;e.ontouchstart=n=>{t=o0(n)},e.ontouchmove=n=>{t&&(n.preventDefault(),n.stopPropagation())}},o0=e=>{const t=e.target,n=We(),s=Li();return!n||!s||i0(e)||a0(e)?!1:t===n||!si(n)&&t instanceof HTMLElement&&!og(t,s)&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(si(s)&&s.contains(t))},i0=e=>!!(e.touches&&e.touches.length&&e.touches[0].touchType==="stylus"),a0=e=>e.touches&&e.touches.length>1,r0=()=>{if(Rt(document.body,A.iosfix)){const e=parseInt(document.body.style.top,10);dt(document.body,A.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},l0=()=>{const e=document.createElement("div");e.className=A["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let Pn=null;const c0=e=>{Pn===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(Pn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Pn+l0()}px`)},u0=()=>{Pn!==null&&(document.body.style.paddingRight=`${Pn}px`,Pn=null)};function Ec(e,t,n,s){yo()?or(e,s):(Kh(n).then(()=>or(e,s)),Ac(j)),Ic?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),qi()&&(u0(),r0(),vc()),d0()}function d0(){dt([document.documentElement,document.body],[A.shown,A["height-auto"],A["no-backdrop"],A["toast-shown"]])}function Jt(e){e=f0(e);const t=Mn.swalPromiseResolve.get(this),n=p0(this);this.isAwaitingPromise?e.isDismissed||(Is(this),t(e)):n&&t(e)}const p0=e=>{const t=re();if(!t)return!1;const n=ae.innerParams.get(e);if(!n||Rt(t,n.hideClass.popup))return!1;dt(t,n.showClass.popup),ie(t,n.hideClass.popup);const s=We();return dt(s,n.showClass.backdrop),ie(s,n.hideClass.backdrop),m0(e,t,n),!0};function _c(e){const t=Mn.swalPromiseReject.get(this);Is(this),t&&t(e)}const Is=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,ae.innerParams.get(e)||e._destroy())},f0=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),m0=(e,t,n)=>{var s;const o=We(),i=cc(t);typeof n.willClose=="function"&&n.willClose(t),(s=j.eventEmitter)===null||s===void 0||s.emit("willClose",t),i&&o?h0(e,t,o,!!n.returnFocus,n.didClose):o&&Ec(e,o,!!n.returnFocus,n.didClose)},h0=(e,t,n,s,o)=>{j.swalCloseEventFinishedCallback=Ec.bind(null,e,n,s,o);const i=function(a){if(a.target===t){var r;(r=j.swalCloseEventFinishedCallback)===null||r===void 0||r.call(j),delete j.swalCloseEventFinishedCallback,t.removeEventListener("animationend",i),t.removeEventListener("transitionend",i)}};t.addEventListener("animationend",i),t.addEventListener("transitionend",i)},or=(e,t)=>{setTimeout(()=>{var n;typeof t=="function"&&t.bind(e.params)(),(n=j.eventEmitter)===null||n===void 0||n.emit("didClose"),e._destroy&&e._destroy()})},On=e=>{let t=re();if(t||new us,t=re(),!t)return;const n=Un();yo()?Le(Rn()):g0(t,e),Te(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},g0=(e,t)=>{const n=As(),s=Un();!n||!s||(!t&&Ze(Nt())&&(t=Nt()),Te(n),t&&(Le(t),s.setAttribute("data-button-to-replace",t.className),n.insertBefore(s,t)),ie([e,n],A.loading))},w0=(e,t)=>{t.input==="select"||t.input==="radio"?I0(e,t):["text","email","number","tel","textarea"].some(n=>n===t.input)&&(Oi(t.inputValue)||Ri(t.inputValue))&&(On(Nt()),E0(e,t))},b0=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return A0(n);case"radio":return y0(n);case"file":return v0(n);default:return t.inputAutoTrim?n.value.trim():n.value}},A0=e=>e.checked?1:0,y0=e=>e.checked?e.value:null,v0=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,I0=(e,t)=>{const n=re();if(!n)return;const s=o=>{t.input==="select"?_0(n,Ys(o),t):t.input==="radio"&&x0(n,Ys(o),t)};Oi(t.inputOptions)||Ri(t.inputOptions)?(On(Nt()),ws(t.inputOptions).then(o=>{e.hideLoading(),s(o)})):typeof t.inputOptions=="object"?s(t.inputOptions):wn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},E0=(e,t)=>{const n=e.getInput();n&&(Le(n),ws(t.inputValue).then(s=>{n.value=t.input==="number"?`${parseFloat(s)||0}`:`${s}`,Te(n),n.focus(),e.hideLoading()}).catch(s=>{wn(`Error in inputValue promise: ${s}`),n.value="",Te(n),n.focus(),e.hideLoading()}))};function _0(e,t,n){const s=Qt(e,A.select);if(!s)return;const o=(i,a,r)=>{const l=document.createElement("option");l.value=r,at(l,a),l.selected=xc(r,n.inputValue),i.appendChild(l)};t.forEach(i=>{const a=i[0],r=i[1];if(Array.isArray(r)){const l=document.createElement("optgroup");l.label=a,l.disabled=!1,s.appendChild(l),r.forEach(u=>o(l,u[1],u[0]))}else o(s,r,a)}),s.focus()}function x0(e,t,n){const s=Qt(e,A.radio);if(!s)return;t.forEach(i=>{const a=i[0],r=i[1],l=document.createElement("input"),u=document.createElement("label");l.type="radio",l.name=A.radio,l.value=a,xc(a,n.inputValue)&&(l.checked=!0);const c=document.createElement("span");at(c,r),c.className=A.label,u.appendChild(l),u.appendChild(c),s.appendChild(u)});const o=s.querySelectorAll("input");o.length&&o[0].focus()}const Ys=e=>{const t=[];return e instanceof Map?e.forEach((n,s)=>{let o=n;typeof o=="object"&&(o=Ys(o)),t.push([s,o])}):Object.keys(e).forEach(n=>{let s=e[n];typeof s=="object"&&(s=Ys(s)),t.push([n,s])}),t},xc=(e,t)=>!!t&&t!==null&&t!==void 0&&t.toString()===e.toString(),C0=e=>{const t=ae.innerParams.get(e);e.disableButtons(),t.input?Cc(e,"confirm"):Yi(e,!0)},S0=e=>{const t=ae.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Cc(e,"deny"):Xi(e,!1)},B0=(e,t)=>{e.disableButtons(),t(Vn.cancel)},Cc=(e,t)=>{const n=ae.innerParams.get(e);if(!n.input){wn(`The "input" parameter is needed to be set when using returnInputValueOn${Mi(t)}`);return}const s=e.getInput(),o=b0(e,n);n.inputValidator?N0(e,o,t):s&&!s.checkValidity()?(e.enableButtons(),e.showValidationMessage(n.validationMessage||s.validationMessage)):t==="deny"?Xi(e,o):Yi(e,o)},N0=(e,t,n)=>{const s=ae.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>ws(s.inputValidator(t,s.validationMessage))).then(i=>{e.enableButtons(),e.enableInput(),i?e.showValidationMessage(i):n==="deny"?Xi(e,t):Yi(e,t)})},Xi=(e,t)=>{const n=ae.innerParams.get(e);n.showLoaderOnDeny&&On(bn()),n.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>ws(n.preDeny(t,n.validationMessage))).then(o=>{o===!1?(e.hideLoading(),Is(e)):e.close({isDenied:!0,value:typeof o>"u"?t:o})}).catch(o=>Sc(e,o))):e.close({isDenied:!0,value:t})},ir=(e,t)=>{e.close({isConfirmed:!0,value:t})},Sc=(e,t)=>{e.rejectPromise(t)},Yi=(e,t)=>{const n=ae.innerParams.get(e);n.showLoaderOnConfirm&&On(),n.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>ws(n.preConfirm(t,n.validationMessage))).then(o=>{Ze(bo())||o===!1?(e.hideLoading(),Is(e)):ir(e,typeof o>"u"?t:o)}).catch(o=>Sc(e,o))):ir(e,t)};function Qs(){const e=ae.innerParams.get(this);if(!e)return;const t=ae.domCache.get(this);Le(t.loader),yo()?e.icon&&Te(Rn()):P0(t),dt([t.popup,t.actions],A.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1;const n=ae.focusedElement.get(this);n instanceof HTMLElement&&document.activeElement===document.body&&n.focus(),ae.focusedElement.delete(this)}const P0=e=>{const t=e.loader.getAttribute("data-button-to-replace"),n=t?e.popup.getElementsByClassName(t):[];n.length?Te(n[0],"inline-block"):sg()&&Le(e.actions)};function Bc(){const e=ae.innerParams.get(this),t=ae.domCache.get(this);return t?vo(t.popup,e.input):null}function Nc(e,t,n){const s=ae.domCache.get(e);t.forEach(o=>{s[o].disabled=n})}function Pc(e,t){const n=re();if(!(!n||!e))if(e.type==="radio"){const s=n.querySelectorAll(`[name="${A.radio}"]`);for(let o=0;o<s.length;o++)s[o].disabled=t}else e.disabled=t}function kc(){Nc(this,["confirmButton","denyButton","cancelButton"],!1);const e=ae.focusedElement.get(this);e instanceof HTMLElement&&document.activeElement===document.body&&e.focus(),ae.focusedElement.delete(this)}function Tc(){ae.focusedElement.set(this,document.activeElement),Nc(this,["confirmButton","denyButton","cancelButton"],!0)}function Fc(){Pc(this.getInput(),!1)}function Dc(){Pc(this.getInput(),!0)}function $c(e){const t=ae.domCache.get(this),n=ae.innerParams.get(this);at(t.validationMessage,e),t.validationMessage.className=A["validation-message"],n.customClass&&n.customClass.validationMessage&&ie(t.validationMessage,n.customClass.validationMessage),Te(t.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",A["validation-message"]),rc(s),ie(s,A.inputerror))}function Mc(){const e=ae.domCache.get(this);e.validationMessage&&Le(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),dt(t,A.inputerror))}const Zt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},k0=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],T0={allowEnterKey:void 0},F0=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Oc=e=>Object.prototype.hasOwnProperty.call(Zt,e),Rc=e=>k0.indexOf(e)!==-1,Lc=e=>T0[e],D0=e=>{Oc(e)||Ge(`Unknown parameter "${e}"`)},$0=e=>{F0.includes(e)&&Ge(`The parameter "${e}" is incompatible with toasts`)},M0=e=>{const t=Lc(e);t&&sc(e,t)},Uc=e=>{e.backdrop===!1&&e.allowOutsideClick&&Ge('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&Ge(`Invalid theme "${e.theme}"`);for(const t in e)D0(t),e.toast&&$0(t),M0(t)};function Vc(e){const t=We(),n=re(),s=ae.innerParams.get(this);if(!n||Rt(n,s.hideClass.popup)){Ge("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const o=O0(e),i=Object.assign({},s,o);Uc(i),t&&(t.dataset.swal2Theme=i.theme),wc(this,i),ae.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const O0=e=>{const t={};return Object.keys(e).forEach(n=>{if(Rc(n)){const s=e;t[n]=s[n]}else Ge(`Invalid parameter to update: ${n}`)}),t};function jc(){var e;const t=ae.domCache.get(this),n=ae.innerParams.get(this);if(!n){qc(this);return}t.popup&&j.swalCloseEventFinishedCallback&&(j.swalCloseEventFinishedCallback(),delete j.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),(e=j.eventEmitter)===null||e===void 0||e.emit("didDestroy"),R0(this)}const R0=e=>{qc(e),delete e.params,delete j.keydownHandler,delete j.keydownTarget,delete j.currentInstance},qc=e=>{e.isAwaitingPromise?(Ro(ae,e),e.isAwaitingPromise=!0):(Ro(Mn,e),Ro(ae,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},Ro=(e,t)=>{for(const n in e)e[n].delete(t)};var L0=Object.freeze({__proto__:null,_destroy:jc,close:Jt,closeModal:Jt,closePopup:Jt,closeToast:Jt,disableButtons:Tc,disableInput:Dc,disableLoading:Qs,enableButtons:kc,enableInput:Fc,getInput:Bc,handleAwaitingPromise:Is,hideLoading:Qs,rejectPromise:_c,resetValidationMessage:Mc,showValidationMessage:$c,update:Vc});const U0=(e,t,n)=>{e.toast?V0(e,t,n):(q0(t),H0(t),G0(e,t,n))},V0=(e,t,n)=>{t.popup.onclick=()=>{e&&(j0(e)||e.timer||e.input)||n(Vn.close)}},j0=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let Js=!1;const q0=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(Js=!0)}}},H0=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(n){e.popup.onmouseup=()=>{},(n.target===e.popup||n.target instanceof HTMLElement&&e.popup.contains(n.target))&&(Js=!0)}}},G0=(e,t,n)=>{t.container.onclick=s=>{if(Js){Js=!1;return}s.target===t.container&&wo(e.allowOutsideClick)&&n(Vn.backdrop)}},W0=e=>typeof e=="object"&&e!==null&&"jquery"in e,ar=e=>e instanceof Element||W0(e),z0=e=>{const t={};return typeof e[0]=="object"&&!ar(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach((n,s)=>{const o=e[s];typeof o=="string"||ar(o)?t[n]=o:o!==void 0&&wn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`)}),t};function K0(...e){return new this(...e)}function X0(e){class t extends this{_main(s,o){return super._main(s,Object.assign({},e,o))}}return t}const Y0=()=>j.timeout&&j.timeout.getTimerLeft(),Hc=()=>{if(j.timeout)return ig(),j.timeout.stop()},Gc=()=>{if(j.timeout){const e=j.timeout.start();return Gi(e),e}},Q0=()=>{const e=j.timeout;return e&&(e.running?Hc():Gc())},J0=e=>{if(j.timeout){const t=j.timeout.increase(e);return Gi(t,!0),t}},Z0=()=>!!(j.timeout&&j.timeout.isRunning());let rr=!1;const ii={};function ew(e="data-swal-template"){ii[e]=this,rr||(document.body.addEventListener("click",tw),rr=!0)}const tw=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const n in ii){const s=t.getAttribute&&t.getAttribute(n);if(s){ii[n].fire({template:s});return}}};class nw{constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,n){const s=this._getHandlersByEventName(t);s.includes(n)||s.push(n)}once(t,n){const s=(...o)=>{this.removeListener(t,s),n.apply(this,o)};this.on(t,s)}emit(t,...n){this._getHandlersByEventName(t).forEach(s=>{try{s.apply(this,n)}catch(o){console.error(o)}})}removeListener(t,n){const s=this._getHandlersByEventName(t),o=s.indexOf(n);o>-1&&s.splice(o,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}j.eventEmitter=new nw;const sw=(e,t)=>{j.eventEmitter&&j.eventEmitter.on(e,t)},ow=(e,t)=>{j.eventEmitter&&j.eventEmitter.once(e,t)},iw=(e,t)=>{if(j.eventEmitter){if(!e){j.eventEmitter.reset();return}t?j.eventEmitter.removeListener(e,t):j.eventEmitter.removeAllListeners(e)}};var aw=Object.freeze({__proto__:null,argsToParams:z0,bindClickHandler:ew,clickCancel:zg,clickConfirm:bc,clickDeny:Wg,enableLoading:On,fire:K0,getActions:As,getCancelButton:Ln,getCloseButton:Vi,getConfirmButton:Nt,getContainer:We,getDenyButton:bn,getFocusableElements:ji,getFooter:ac,getHtmlContainer:Li,getIcon:Rn,getIconContent:Jh,getImage:ic,getInputLabel:Zh,getLoader:Un,getPopup:re,getProgressSteps:Ui,getTimerLeft:Y0,getTimerProgressBar:Ao,getTitle:oc,getValidationMessage:bo,increaseTimer:J0,isDeprecatedParameter:Lc,isLoading:tg,isTimerRunning:Z0,isUpdatableParameter:Rc,isValidParameter:Oc,isVisible:Gg,mixin:X0,off:iw,on:sw,once:ow,resumeTimer:Gc,showLoading:On,stopTimer:Hc,toggleTimer:Q0});class rw{constructor(t,n){this.callback=t,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const n=this.running;return n&&this.stop(),this.remaining+=t,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Wc=["swal-title","swal-html","swal-footer"],lw=e=>{const t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return gw(n),Object.assign(cw(n),uw(n),dw(n),pw(n),fw(n),mw(n),hw(n,Wc))},cw=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(s=>{hn(s,["name","value"]);const o=s.getAttribute("name"),i=s.getAttribute("value");!o||!i||(o in Zt&&typeof Zt[o]=="boolean"?t[o]=i!=="false":o in Zt&&typeof Zt[o]=="object"?t[o]=JSON.parse(i):t[o]=i)}),t},uw=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(s=>{const o=s.getAttribute("name"),i=s.getAttribute("value");!o||!i||(t[o]=new Function(`return ${i}`)())}),t},dw=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(s=>{hn(s,["type","color","aria-label"]);const o=s.getAttribute("type");if(!(!o||!["confirm","cancel","deny"].includes(o))){if(t[`${o}ButtonText`]=s.innerHTML,t[`show${Mi(o)}Button`]=!0,s.hasAttribute("color")){const i=s.getAttribute("color");i!==null&&(t[`${o}ButtonColor`]=i)}if(s.hasAttribute("aria-label")){const i=s.getAttribute("aria-label");i!==null&&(t[`${o}ButtonAriaLabel`]=i)}}}),t},pw=e=>{const t={},n=e.querySelector("swal-image");return n&&(hn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt")||void 0)),t},fw=e=>{const t={},n=e.querySelector("swal-icon");return n&&(hn(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},mw=e=>{const t={},n=e.querySelector("swal-input");n&&(hn(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const s=Array.from(e.querySelectorAll("swal-input-option"));return s.length&&(t.inputOptions={},s.forEach(o=>{hn(o,["value"]);const i=o.getAttribute("value");if(!i)return;const a=o.innerHTML;t.inputOptions[i]=a})),t},hw=(e,t)=>{const n={};for(const s in t){const o=t[s],i=e.querySelector(o);i&&(hn(i,[]),n[o.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},gw=e=>{const t=Wc.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(n=>{const s=n.tagName.toLowerCase();t.includes(s)||Ge(`Unrecognized element <${s}>`)})},hn=(e,t)=>{Array.from(e.attributes).forEach(n=>{t.indexOf(n.name)===-1&&Ge([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},zc=10,ww=e=>{var t,n;const s=We(),o=re();if(!s||!o)return;typeof e.willOpen=="function"&&e.willOpen(o),(t=j.eventEmitter)===null||t===void 0||t.emit("willOpen",o);const a=window.getComputedStyle(document.body).overflowY;if(yw(s,o,e),setTimeout(()=>{bw(s,o)},zc),qi()&&(Aw(s,e.scrollbarPadding!==void 0?e.scrollbarPadding:!1,a),t0()),!yo()&&!j.previousActiveElement&&(j.previousActiveElement=document.activeElement),typeof e.didOpen=="function"){const r=e.didOpen;setTimeout(()=>r(o))}(n=j.eventEmitter)===null||n===void 0||n.emit("didOpen",o)},Zs=e=>{const t=re();if(!t||e.target!==t)return;const n=We();n&&(t.removeEventListener("animationend",Zs),t.removeEventListener("transitionend",Zs),n.style.overflowY="auto",dt(n,A["no-transition"]))},bw=(e,t)=>{cc(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",Zs),t.addEventListener("transitionend",Zs)):e.style.overflowY="auto"},Aw=(e,t,n)=>{n0(),t&&n!=="hidden"&&c0(n),setTimeout(()=>{e.scrollTop=0})},yw=(e,t,n)=>{var s;(s=n.showClass)!==null&&s!==void 0&&s.backdrop&&ie(e,n.showClass.backdrop),n.animation?(t.style.setProperty("opacity","0","important"),Te(t,"grid"),setTimeout(()=>{var o;(o=n.showClass)!==null&&o!==void 0&&o.popup&&ie(t,n.showClass.popup),t.style.removeProperty("opacity")},zc)):Te(t,"grid"),ie([document.documentElement,document.body],A.shown),n.heightAuto&&n.backdrop&&!n.toast&&ie([document.documentElement,document.body],A["height-auto"])};var lr={email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function vw(e){e.inputValidator||(e.input==="email"&&(e.inputValidator=lr.email),e.input==="url"&&(e.inputValidator=lr.url))}function Iw(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(Ge('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Ew(e){vw(e),e.showLoaderOnConfirm&&!e.preConfirm&&Ge(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Iw(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),fg(e)}let Et;var Ss=new WeakMap;class Ce{constructor(...t){if(Hh(this,Ss,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;Et=this;const n=Object.freeze(this.constructor.argsToParams(t));this.params=n,this.isAwaitingPromise=!1,Gh(Ss,this,this._main(Et.params))}_main(t,n={}){if(Uc(Object.assign({},n,t)),j.currentInstance){const i=Mn.swalPromiseResolve.get(j.currentInstance),{isAwaitingPromise:a}=j.currentInstance;j.currentInstance._destroy(),a||i({isDismissed:!0}),qi()&&vc()}j.currentInstance=Et;const s=xw(t,n);Ew(s),Object.freeze(s),j.timeout&&(j.timeout.stop(),delete j.timeout),clearTimeout(j.restoreFocusTimeout);const o=Cw(Et);return wc(Et,s),ae.innerParams.set(Et,s),_w(Et,o,s)}then(t){return Ja(Ss,this).then(t)}finally(t){return Ja(Ss,this).finally(t)}}const _w=(e,t,n)=>new Promise((s,o)=>{const i=a=>{e.close({isDismissed:!0,dismiss:a,isConfirmed:!1,isDenied:!1})};Mn.swalPromiseResolve.set(e,s),Mn.swalPromiseReject.set(e,o),t.confirmButton.onclick=()=>{C0(e)},t.denyButton.onclick=()=>{S0(e)},t.cancelButton.onclick=()=>{B0(e,i)},t.closeButton.onclick=()=>{i(Vn.close)},U0(n,t,i),Kg(j,n,i),w0(e,n),ww(n),Sw(j,n,i),Bw(t,n),setTimeout(()=>{t.container.scrollTop=0})}),xw=(e,t)=>{const n=lw(e),s=Object.assign({},Zt,t,n,e);return s.showClass=Object.assign({},Zt.showClass,s.showClass),s.hideClass=Object.assign({},Zt.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},Cw=e=>{const t={popup:re(),container:We(),actions:As(),confirmButton:Nt(),denyButton:bn(),cancelButton:Ln(),loader:Un(),closeButton:Vi(),validationMessage:bo(),progressSteps:Ui()};return ae.domCache.set(e,t),t},Sw=(e,t,n)=>{const s=Ao();Le(s),t.timer&&(e.timeout=new rw(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&s&&(Te(s),ot(s,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&Gi(t.timer)})))},Bw=(e,t)=>{if(!t.toast){if(!wo(t.allowEnterKey)){sc("allowEnterKey","preConfirm: () => false"),e.popup.focus();return}Nw(e)||Pw(e,t)||oi(-1,1)}},Nw=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const n of t)if(n instanceof HTMLElement&&Ze(n))return n.focus(),!0;return!1},Pw=(e,t)=>t.focusDeny&&Ze(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Ze(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&Ze(e.confirmButton)?(e.confirmButton.focus(),!0):!1;Ce.prototype.disableButtons=Tc;Ce.prototype.enableButtons=kc;Ce.prototype.getInput=Bc;Ce.prototype.disableInput=Dc;Ce.prototype.enableInput=Fc;Ce.prototype.hideLoading=Qs;Ce.prototype.disableLoading=Qs;Ce.prototype.showValidationMessage=$c;Ce.prototype.resetValidationMessage=Mc;Ce.prototype.close=Jt;Ce.prototype.closePopup=Jt;Ce.prototype.closeModal=Jt;Ce.prototype.closeToast=Jt;Ce.prototype.rejectPromise=_c;Ce.prototype.update=Vc;Ce.prototype._destroy=jc;Object.assign(Ce,aw);Object.keys(L0).forEach(e=>{Ce[e]=function(...t){if(Et&&Et[e])return Et[e](...t)}});Ce.DismissReason=Vn;Ce.version="11.26.21";const us=Ce;us.default=us;typeof document<"u"&&(function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch{n.innerText=t}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const cr="/assets/schedule-placeholder-B7Y8SP8l.png",kw={class:"page-hero"},Tw={class:"container"},Fw={class:"content-panel"},Dw={class:"schedule-layout"},$w={class:"schedule-visual"},Mw=["src"],Ow={__name:"ScheduleView",setup(e){const t=()=>{us.fire({imageUrl:cr,imageAlt:"計畫時程圖，說明 AI 服務供應商徵選、企業申請、媒合會、顧問輔導、導入與補助核銷流程。",showConfirmButton:!1,showCloseButton:!0,closeButtonAriaLabel:"關閉計畫時程圖",customClass:{popup:"schedule-image-swal-popup",closeButton:"solution-swal-close"},width:"min(1200px, 96vw)",padding:"1rem",background:"#ffffff"})};return(n,s)=>(k(),L("section",kw,[g("div",Tw,[g("div",Fw,[s[1]||(s[1]=g("header",{class:"title-row"},[g("span",{class:"title-line"}),g("h1",null,"計畫時程"),g("span",{class:"title-line"})],-1)),g("div",Dw,[s[0]||(s[0]=ms('<article class="schedule-text" data-v-65fd8551><section class="schedule-phase" data-v-65fd8551><h2 data-v-65fd8551>公開徵選 AI 服務供應商</h2><p data-v-65fd8551>完成 AI 應用方案遴選，公告合作供應商名單。</p></section><section class="schedule-phase" data-v-65fd8551><h2 data-v-65fd8551>受輔導企業申請受理期間</h2><ul data-v-65fd8551><li data-v-65fd8551>申請作業：受理具 AI 導入需求之新北企業依公告日期申請</li><li data-v-65fd8551>審查作業：依徵件情況適時召開審查會議</li></ul></section><section class="schedule-phase" data-v-65fd8551><h2 data-v-65fd8551>實體媒合會與需求對接</h2><p data-v-65fd8551>舉辦企業 × AI供應商實體媒合活動，協助精準配對。</p></section><section class="schedule-phase" data-v-65fd8551><h2 data-v-65fd8551>專業顧問輔導與AI方案導入使用協助</h2><ul data-v-65fd8551><li data-v-65fd8551>顧問訪視與需求確認</li><li data-v-65fd8551>協助企業完成方案簽約與導入</li></ul></section><section class="schedule-phase" data-v-65fd8551><h2 data-v-65fd8551>完成購置並申請補助核銷</h2><ul data-v-65fd8551><li data-v-65fd8551>企業須先完成購置並支付費用</li><li data-v-65fd8551>檢附發票及合約辦理請款</li></ul></section></article>',1)),g("figure",$w,[g("button",{type:"button",class:"schedule-image-trigger","aria-label":"放大檢視計畫時程圖",title:"放大檢視計畫時程圖",onClick:t},[g("img",{src:me(cr),alt:"計畫時程圖，說明 AI 服務供應商徵選、企業申請、媒合會、顧問輔導、導入與補助核銷流程。",width:"1024",height:"768"},null,8,Mw)])])])])])]))}},Rw=ht(Ow,[["__scopeId","data-v-65fd8551"]]),Kc=[{question:"哪些企業可以申請本計畫？",answer:`需同時符合以下條件：
• 依中華民國法律於本市完成登記之公司、商業、工廠，或經主辦單位核定改善計畫之納管工廠與特定工廠。
• 非陸資企業或外國營利事業在臺分公司
• 非政府機關及其附屬單位
• 最近3年內無重大違法或欠稅情形`},{question:"本計畫補助金額是多少？需要自籌款嗎？",answer:`• 每家企業最高補助 新臺幣4萬元
• 採實報實銷
• 企業需自籌至少 50%以上經費
• 須先全額支付AI服務費用後，始得申請補助款`},{question:"補助是先撥款還是後核銷？",answer:"採「先購置、後核銷」方式。企業須先完成與AI服務供應商簽約並支付費用，於規定期限內檢附發票、合約等文件辦理請款。"},{question:"如果公司已申請其他政府AI數位轉型補助，還可以申請本計畫嗎？",answer:`若所購買之AI應用服務方案與其他政府補助計畫屬「同一或相同性質項目」，則不得重複補助。
不同補助項目且未重疊者，須由審查單位認定。`},{question:"申請截止時間是什麼時候？",answer:"即日起按月分批審查，原則於每月15日下午5時截止收件進行當月批次審查，經費用罄即停止受理。"},{question:"審查重點是什麼？如何提高通過率？",answer:`審查標準如下：
• 需求描述：痛點明確性、方案與需求契合度、內部資源匹配度。
• 預期效益：評估導入方案後，對企業未來經營可能產生之優化程度，擇定量化績效指標（如產能提升率、營收增長、降低成本、不良率降低等），並簡述驗證預期效益之方法。

建議：
• 清楚描述現況問題。
• 說明選擇該AI方案的原因。
• 提出具體KPI（如降低成本%、提升產能%、增加營收等）`},{question:"一定要從指定AI服務供應商中選擇方案嗎？",answer:"是。本計畫僅限選擇經公開遴選通過並公告之AI服務供應商方案。"},{question:"入選後一定要配合哪些事項？",answer:`入選企業需：
• 與AI服務供應商完成簽約
• 配合顧問訪視與輔導
• 配合計畫宣傳（如公關稿、活動參與、案例分享等）`},{question:"申請需要繳交哪些文件？",answer:`1. 受輔導企業申請表（Word檔＋用印PDF檔）
2. 個資同意書（需簽署）
3. 其他審查所需資料
4. 切結書

請於期限內 Email 寄送至：ntpcai@twcloud.ai`},{question:"是否只能購買一項方案？",answer:"否。企業可依需求選擇多項AI應用服務方案，惟總補助上限仍為4萬元。"}],Lw={class:"page-hero"},Uw={class:"container"},Vw={class:"content-panel"},jw={class:"faq-list"},qw=["id","title","aria-expanded","aria-controls","onClick"],Hw={class:"faq-index"},Gw={class:"faq-main"},Ww={class:"faq-question"},zw=["id","aria-labelledby"],Kw={class:"faq-answer-text"},Xw={__name:"FAQView",setup(e){const t=qe([]),n=o=>{if(t.value.includes(o)){t.value=t.value.filter(i=>i!==o);return}t.value=[...t.value,o]},s=o=>t.value.includes(o);return(o,i)=>(k(),L("section",Lw,[g("div",Uw,[g("div",Vw,[i[2]||(i[2]=g("header",{class:"title-row"},[g("span",{class:"title-line"}),g("h1",null,"FAQ"),g("span",{class:"title-line"})],-1)),g("div",jw,[i[1]||(i[1]=g("h2",{class:"sr-only"},"常見問題列表",-1)),(k(!0),L(oe,null,ke(me(Kc),(a,r)=>(k(),L("article",{key:a.question,class:De(["faq-item",{open:s(r)}])},[g("button",{id:`faq-question-${r}`,class:"faq-trigger",type:"button",title:a.question,"aria-expanded":s(r).toString(),"aria-controls":`faq-answer-${r}`,onClick:l=>n(r)},[g("span",Hw,Z(r+1),1),g("span",Gw,[g("span",Ww,Z(a.question),1),i[0]||(i[0]=g("span",{class:"faq-divider","aria-hidden":"true"},null,-1))]),g("i",{class:De(["fa-solid fa-chevron-down faq-chevron",{open:s(r)}]),"aria-hidden":"true"},null,2)],8,qw),il(g("div",{id:`faq-answer-${r}`,class:"faq-answer",role:"region","aria-labelledby":`faq-question-${r}`},[g("p",Kw,Z(a.answer),1)],8,zw),[[rp,s(r)]])],2))),128))])])])]))}},Yw=ht(Xw,[["__scopeId","data-v-543a62f4"]]),Qw="/assets/logo1-DAX-1uNl.svg",Jw="/assets/logo2-OnW2q4Uc.svg",Zw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAACCCAMAAACTkVQxAAABPlBMVEX///8AAABI7tiOjo75+fmWlpYwMDDX19ebm5tycnLb29u1tbVO395M49yehf6nhP5K6NtQ2uBR1eKxg/5T0OSYhv5VzOa3g/5Xx+hYwumOh/5dXV2+gv3QgP057dajo6Navevt7e1cuO3KyspetO/BwcEbGxuBgYFgr/GCiP83NzcpKSnl5eVhqvMSEhKnp6dAQEBlofdPT09jpfRnm/hsbGxJSUkhISFol/pqkvxuiv9aWlq5ublwgv+MgP639+598uGl9urh+fmD6uWI5OnS8Pfc+/fL+fJ1xu6g0PVo8N622PjM4vrd6vzt9P6WtfuIp/2/yv/j3f/Z0/+wtf+Hk//Luv6Tv/fx6/++ov6hev6+lP7Sq/6Vov/mzf69eP19ff7X2P/Ylv26uP7co/3jtf6hl/6tm/7Uxv/Hhv0ZkVlgAAAIrElEQVR4nO2b/X/TRBjAc2u6dq0OFBFd2WqsbSEtbSl2ha0FHCoiMBlvjqEwERX+/3/Ae8nLc3dPuiXKkn0+z/cHVi+Xy+W+ubvnLtFxCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgPjiuhpmYa9VS4N66vbQRs/RdUkYmKYufjUGQVOXnsyH/MeR/qyKpxdryUJf1xT/w/Ib802etKGnIC6yLOrBSkFJmbLkifvgrjuOJrC7PM2on1KnHIB2VWIoSToeEnTtnebtDNm4lZO35U+b3mo5om6AdZbOziVPh7VtjM5E0YdvyUJeNdQdtxjzxtxY74EmbjFVEO3dVSpW3t8oHHEx9ZcpmrClgyyq1fKocuN9/9PHZJZ2NxI7AH1v1t8kGE/lDOph0RNM5ddl0Lhuopu4y7gQ6aDAm/MF+MOZZ+6L5o37QmbrOTJYKHDR5pg5WnxV2+h3sfPoJ4iCpH4i2V39747K6Pdla3Mx4zPorspnqrK3GpG5vyqADj5XHso2AA8bb2WlXYgde2LE0B1XRPzy7OmV2+h388BnmYCn5hMBBhc36YhIIHPDBhbWnw5HsGv6yM5aTRddvsW6JgXO9Oqs5uoNwFogdiGP+2DEdtBAHdVNBgR24lbakZdRo53PMwcaPySUFDrps2Vf3Kx24bMzc7lha4YPGaCpGeN4P+NQwih34bLQsR33oQGgbtqCDsoP2g7LtoGUpKKyD1nZcR+0+dr/AHGzcXVBW4EAVJp5pNeyMmS+mVx4HBSGJGGK4AxHRhKfW1EmOMR/0+YESmA+mvI51WepoKka5YD6osJ5Zl76toKAOvE1YxxY89CXmYMFk4IhRWfxbFwGQnEoDB2Xegp5qbm5DNC2/965sw8iBDFXlmSAu4o/yQMp0ZfUqKlhVTVeWx5zwmBmcuoPT4sB4WGA/+AlzsCAmEgzlSF/uiVvbFtH+spwVKh3eeptiAPE6IoacDXizlsSg3vDDUyciu9vjzvqDSlRg2x+MhBF3xOmJnlXvDcZ9R11G/XKXR34jPiXAB7c1LbIDT39YZuDQva8QBxu386ppWsAAy8rdIjtY1hRUwZF7XyMONn7OraYp6YLbmsTLhAI60FeRXXDk/iXMwYKotFhUwW2NnCI70FeRDXDkwZVvMAc7uVU1HTNwW3xdXWAHJWhAPC4RD69dQhwsWhgUigq8LxFmFNaBvoocgNrsXruCOFi4MJBUSxlQMWUr/E+71JmZF9KMD0YBrQfvS8ZLRXVgrCJBVOpexRwsXhhIpiwDqtWjVrEKbVt5AbArhw60hYGyVlAHxsIAhtePMAdHLAwkepR1TOTrhngSNcvUxhXTAezK0d71CCQ2VVJBHTS0hoDr41+uIw6OtTD4AA48La/hoIUdgjcWRnoFdQCflgYciB7d+NZ2cJxe8EEcdBY4gF15JUyEC4Mo0iuog1avoxiV+yB5b+vGdcvBxtKR07Hk/3ewqefVHHjgwDhMbILEONIrqAOM3b2tOebgWJ3A+QAOJkbeUsLVemFTwgkcRHqFcNBvzULq+u7W7uMn7548ebK3t/f02Xy+tWU5uHNXFVBvhsxqCVfRB45jotoVdVDC8yrgGj8cS2swM+je+Ttom49TNAPvP189uCk5PJzPL29tSQfXr/56/+EuZ2dnR9axbzbGGL9QrYJQi5p3hh5X7Yc5GCb4ksA1ftjaHswLH7W8HdTtqD0YKPdfHJxZXV09f35tbe2yQDrYevRAL6C2bRXArJ3iBUQbB0ndR4A4QF6DxQ7gm+JoYQDvFG4B5+ygD+OfELVn//zgzBnLwfyGYUALNDI5iIL4dA5qyGUjB3BDaBgmwgm8qpWeqwPkWWIqbHZfHpyzHcyfGgW4PlpCmqpnc+Bhlw0dVJA0bQJf0UvP0wGuQE5hLy+csx3M98wS8O2HKnKtRLI5AN/HbUaDYdDecGEwCU+Ac9a2UXqODrDuzNRA8oIrsBxYvcD8TC1gBblWMpkcwAvHS1/lAG4IbYYFwAncN0vPz4GHKxDbWL+9RhzMf0+su0ZCVJREFgd61GM4AMPjNGxDrcdbDZubAxcfR8Q21vPXFxEHz8wSrPgc3sexyeDAiHp0BzBMO2phEJCbA2OdHyDm41evL2IOzPrY8Xmmaqd3YG6Hag5gnBaW6MH6tezS83JgLswUYgp7zBUgDnaNAtpoAchTdgSpHVhRD3QAN4SiVzpwkwT7/jonB2hYL1dn+0KB6WDtcN8oIGFCR56yI0jrwI56gAP4YDTDk+EEjryIy8sBfFxixPeAu+vriIPDP4wCPFzBDLvYYlI6QKKeyEEZPhjRZyBwAp+gpefiIGEcEVPYe8zBobkwSJjQUy0MAlI6AFFPuB0aOVgBfqKXA3ACTwjZ8nCgvQCMEY3wZh1xcPNPswR8Qk+3MAhI5WAAp7Ew6tHf+SmiNQCcwHsJTZqDAw9XIIbyt+uIg5vWwgC7a3v5eTzS9QNAlB+pTfRywPqOBePkHbi4AhEw/LWOOLj5t1lC8oSegawO4g9ZEAdhdKZ9mpB4gZN3gG2VqoDh1WvMwZpZAD6hDzLWN6ODZnzQdhDu22rfsSSHbCfuAF/diihiXykwHZgLA+x/nmDJHf0osjmAH79aDqLoDO7qDpFiA07aAT4SyadKjUS6g4N/rGqgEjcz1zaTA/jxq+Ugis7gtgW6MAgogoNNdftvLQcHq+/sErDZoGlnOy5ZHOhTj+Eg6iLodywYJz4WWW9dtsOB8hUciy6cOzg4gxhA9okG1f9S1QwOOvr19Jep29g5i+OFE3fgdsH2ib9SB+P4qzfv198rLrx88c7cngipj+Opbtoop3lxiZWW3oGxJ6X1g2hhADt80sIgIO93+gRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBECfOvxWE8CmJaFHSAAAAAElFTkSuQmCC",eb={class:"page-hero"},tb={class:"container"},nb={class:"content-panel"},sb={class:"contact-layout"},ob={class:"contact-logos","aria-labelledby":"contact-units-heading"},ib={class:"logo-row"},ab={class:"logo-slot logo-slot--gov"},rb=["src"],lb={class:"logo-unit"},cb={class:"logo-slot logo-slot--host"},ub=["src"],db={class:"logo-unit"},pb={class:"logo-slot logo-slot--executor"},fb=["src"],mb={__name:"ContactUsView",setup(e){return(t,n)=>(k(),L("section",eb,[g("div",tb,[g("div",nb,[n[6]||(n[6]=g("header",{class:"title-row"},[g("span",{class:"title-line"}),g("h1",null,"聯絡我們"),g("span",{class:"title-line"})],-1)),g("div",sb,[n[5]||(n[5]=ms('<article class="contact-info" data-v-0920e0d9><h2 data-v-0920e0d9>聯絡資訊</h2><dl class="contact-list" data-v-0920e0d9><div class="contact-row" data-v-0920e0d9><dt data-v-0920e0d9>諮詢電話</dt><dd data-v-0920e0d9><a href="tel:+886228987447;ext=86542" aria-label="撥打諮詢電話 02 2898 7447 分機 86542" title="撥打諮詢電話 02 2898 7447 分機 86542" data-v-0920e0d9>(02) 2898-7447 分機 86542</a></dd></div><div class="contact-row" data-v-0920e0d9><dt data-v-0920e0d9>Email</dt><dd data-v-0920e0d9><a href="mailto:ntpcai@twcloud.ai" aria-label="寄信至 ntpcai@twcloud.ai" title="寄信至 ntpcai@twcloud.ai" data-v-0920e0d9>ntpcai@twcloud.ai</a></dd></div></dl></article>',1)),g("section",ob,[n[4]||(n[4]=g("h2",{id:"contact-units-heading",class:"sr-only"},"主辦與執行單位",-1)),g("div",ib,[g("div",ab,[g("img",{src:me(Qw),alt:"新北市政府標誌"},null,8,rb)]),n[2]||(n[2]=g("span",{class:"logo-divider","aria-hidden":"true"},"|",-1)),g("div",lb,[n[0]||(n[0]=g("span",{class:"logo-label"},"主辦單位",-1)),g("div",cb,[g("img",{src:me(Jw),alt:"新北市政府經濟發展局標誌"},null,8,ub)])]),n[3]||(n[3]=g("span",{class:"logo-divider","aria-hidden":"true"},"|",-1)),g("div",db,[n[1]||(n[1]=g("span",{class:"logo-label"},"執行單位",-1)),g("div",pb,[g("img",{src:me(Zw),alt:"台灣智慧雲端服務股份有限公司標誌"},null,8,fb)])])])])])])])]))}},hb=ht(mb,[["__scopeId","data-v-0920e0d9"]]),gb=`<script setup>
const highlights = [
  {
    title: '對象',
    icon: 'fa-solid fa-user-tie',
    content: '想導入 AI 提升營運效率之新北市企業或工廠',
  },
  {
    title: '補助金額',
    icon: 'fa-solid fa-dollar-sign',
    content: '最高 4 萬元（需自籌 50%）',
  },
  {
    title: '申請方式',
    icon: 'fa-solid fa-envelope',
    content: 'email 送件申請',
  },
  {
    title: '申請時間',
    icon: 'fa-solid fa-clock',
    content: '即日起按月分批審查，原則於每月15日下午5時截止收件，進行當月批次審查，經費用罄即停止受理'},
]
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <div class="about-title-wrap">
            <span class="title-line"></span>
            <h1>關於計畫</h1>
            <span class="title-line"></span>
          </div>
          <a
            class="about-apply-link"
            href="https://drive.google.com/drive/folders/1789FI1WmaAaVV_w6f5kl1i1-whT4AN_X"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="開啟申請須知與申請表（另開新視窗）"
            title="開啟申請須知與申請表（另開新視窗）"
          >
            申請須知與申請表<span class="external-hint">（另開新視窗）</span>
          </a>
        </header>

        <article class="about-copy">
          <h2 class="sr-only">計畫說明</h2>
          <p>
            為協助新北市企業加速導入人工智慧技術，提升營運效率與競爭力，新北市政府經濟發展局（下稱主辦單位）委託台灣智慧雲端服務股份有限公司（下稱執行單位）辦理「新北產業AI化輔導計畫」（下稱本計畫）。本計畫旨在回應產業升級與數位轉型需求，透過遴選AI服務供應廠商、輔導媒合本市企業實際導入AI應用方案，提升本市企業的數位競爭力，促進本市產業邁向智慧化與高值化發展。
          </p>
          <p>
            本計畫已公開徵選專業AI服務供應廠商，此次遴選具AI導入需求之新北企業進行輔導，並將透過「新北企業與AI應用方案供應商媒合平臺」及實體媒合會，協助本市具轉型需求之企業與AI服務供應廠商精準對接。
          </p>
          <p>
            另為降低企業導入AI之初期成本，主辦單位提供AI應用服務導入補助，受輔導之新北企業完成導入並提交相關憑證後，可依規定申請補助款。本計畫透過技術服務供應、輔導媒合機制與補助方案之三合一推動架構，盼加速推動新北企業導入AI應用服務，打造示範案例，為新北產業創造AI化的新價值。
          </p>
        </article>

        <section class="about-highlights" aria-labelledby="about-highlights-heading">
          <h2 id="about-highlights-heading" class="sr-only">計畫重點資訊</h2>
          <article v-for="item in highlights" :key="item.title" class="about-highlight-card">
            <header class="about-highlight-head">
              <h2>{{ item.title }}</h2>
              <i :class="item.icon" aria-hidden="true"></i>
            </header>
            <div class="about-highlight-body">{{ item.content }}</div>
          </article>
        </section>

        <p class="about-note">*詳細申請資格、補助計算與審查方式，請參閱申請須知</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
}

.about-title-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.about-title-wrap h1 {
  margin: 0;
  white-space: nowrap;
}

.about-apply-link {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #2b49c3 0%, #1e2f8f 100%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 14px 28px rgba(36, 56, 168, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-apply-link:hover {
  transform: translateY(calc(-50% - 1px));
  box-shadow: 0 18px 32px rgba(36, 56, 168, 0.24);
}

.about-copy {
  display: grid;
  gap: 12px;
}

.about-copy p {
  margin: 0;
  color: #1a1c2e;
  font-size: clamp(1.05rem, 0.98rem + 0.38vw, 1.28rem);
  line-height: 1.78;
  font-weight: 600;
}

.about-highlights {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.about-highlight-card {
  border: 3px solid #2438a8;
  border-radius: 22px;
  background: #ffffff;
  overflow: hidden;
}

.about-highlight-head {
  min-height: 76px;
  background: #2438a8;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 12px;
  font-size: clamp(1.3rem, 1.15rem + 0.52vw, 1.9rem);
  font-weight: 800;
  line-height: 1.2;
}

.about-highlight-head h2 {
  margin: 0;
  color: inherit;
  font: inherit;
  line-height: inherit;
}

.about-highlight-body {
  min-height: 136px;
  color: #2438a8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(1.02rem, 0.96rem + 0.34vw, 1.22rem);
  font-weight: 800;
  line-height: 1.45;
  padding: 16px 14px;
  white-space: pre-line;
}

.about-note {
  margin: 22px 0 0;
  text-align: center;
  color: #d5291d;
  font-size: clamp(1.2rem, 1rem + 0.84vw, 2rem);
  font-weight: 800;
  line-height: 1.3;
}

@media (max-width: 1100px) {
  .about-highlights {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .title-row {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    min-height: unset;
  }

  .about-title-wrap {
    width: 100%;
  }

  .about-apply-link {
    position: static;
    transform: none;
    width: 100%;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .about-highlight-head {
    min-height: 68px;
  }

  .about-highlight-body {
    min-height: 112px;
    padding: 14px 12px;
  }
}
</style>
`,wb=`<script setup>
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.png'
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>聯絡我們</h1>
          <span class="title-line"></span>
        </header>

        <div class="contact-layout">
          <article class="contact-info">
            <h2>聯絡資訊</h2>
            <dl class="contact-list">
              <div class="contact-row">
                <dt>諮詢電話</dt>
                <dd><a href="tel:+886228987447;ext=86542" aria-label="撥打諮詢電話 02 2898 7447 分機 86542" title="撥打諮詢電話 02 2898 7447 分機 86542">(02) 2898-7447 分機 86542</a></dd>
              </div>
              <div class="contact-row">
                <dt>Email</dt>
                <dd><a href="mailto:ntpcai@twcloud.ai" aria-label="寄信至 ntpcai@twcloud.ai" title="寄信至 ntpcai@twcloud.ai">ntpcai@twcloud.ai</a></dd>
              </div>
            </dl>
          </article>

          <section class="contact-logos" aria-labelledby="contact-units-heading">
            <h2 id="contact-units-heading" class="sr-only">主辦與執行單位</h2>
            <div class="logo-row">
              <div class="logo-slot logo-slot--gov">
                <img :src="logo1" alt="新北市政府標誌" />
              </div>
              <span class="logo-divider" aria-hidden="true">|</span>
              <div class="logo-unit">
                <span class="logo-label">主辦單位</span>
                <div class="logo-slot logo-slot--host">
                  <img :src="logo2" alt="新北市政府經濟發展局標誌" />
                </div>
              </div>
              <span class="logo-divider" aria-hidden="true">|</span>
              <div class="logo-unit">
                <span class="logo-label">執行單位</span>
                <div class="logo-slot logo-slot--executor">
                  <img :src="logo3" alt="台灣智慧雲端服務股份有限公司標誌" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(22px, 2.4vw, 34px);
  align-items: start;
  justify-items: start;
}

.contact-info,
.contact-logos {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
}

.contact-info h2,
.contact-logos h2 {
  margin: 0 0 10px;
  color: #24379f;
  font-size: clamp(1.22rem, 1.08rem + 0.35vw, 1.52rem);
}

.contact-list {
  margin: 0;
  display: grid;
  gap: 10px;
}

.contact-row {
  display: grid;
  gap: 2px;
}

.contact-row dt {
  color: #2d4db8;
  font-weight: 700;
}

.contact-row dd {
  margin: 0;
  color: #161a2f;
  font-weight: 500;
  line-height: 1.7;
}

.logo-row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  overflow-x: auto;
  width: 100%;
}

.logo-unit {
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  white-space: nowrap;
}

.logo-label {
  color: #1f2b84;
  font-weight: 700;
  font-size: clamp(1rem, 0.9rem + 0.35vw, 1.25rem);
  white-space: nowrap;
}

.logo-divider {
  color: #25328e;
  font-weight: 700;
  font-size: clamp(1.6rem, 1.2rem + 0.8vw, 2.2rem);
  line-height: 1;
  user-select: none;
}

.logo-slot {
  min-height: 72px;
  min-width: clamp(150px, 18vw, 260px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
}

.logo-slot--executor {
  min-width: clamp(130px, 15vw, 220px);
}

.logo-slot img {
  width: 100%;
  max-width: 260px;
  max-height: 78px;
  height: auto;
  object-fit: contain;
  display: block;
}

@media (max-width: 720px) {
  .logo-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    overflow-x: visible;
  }

  .logo-divider {
    display: none;
  }

  .logo-unit {
    display: grid;
    gap: 6px;
    white-space: normal;
  }

  .logo-slot {
    min-width: 0;
  }
}
</style>
`,bb=`<script setup>
import { ref } from 'vue'
import { faqs } from '../data/faqData'

const openIndexes = ref([])

const toggleFaq = (index) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((item) => item !== index)
    return
  }

  openIndexes.value = [...openIndexes.value, index]
}

const isOpen = (index) => openIndexes.value.includes(index)
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>FAQ</h1>
          <span class="title-line"></span>
        </header>

        <div class="faq-list">
          <h2 class="sr-only">常見問題列表</h2>
          <article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item" :class="{ open: isOpen(index) }">
            <button
              :id="\`faq-question-\${index}\`"
              class="faq-trigger"
              type="button"
              :title="faq.question"
              :aria-expanded="isOpen(index).toString()"
              :aria-controls="\`faq-answer-\${index}\`"
              @click="toggleFaq(index)"
            >
              <span class="faq-index">{{ index + 1 }}</span>
              <span class="faq-main">
                <span class="faq-question">{{ faq.question }}</span>
                <span class="faq-divider" aria-hidden="true"></span>
              </span>
              <i class="fa-solid fa-chevron-down faq-chevron" :class="{ open: isOpen(index) }" aria-hidden="true"></i>
            </button>

            <div v-show="isOpen(index)" :id="\`faq-answer-\${index}\`" class="faq-answer" role="region" :aria-labelledby="\`faq-question-\${index}\`">
              <p class="faq-answer-text">{{ faq.answer }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-list {
  --faq-accent: #173ca8;
  --faq-index-size: clamp(56px, 4.8vw, 78px);
  --faq-gap: clamp(14px, 1.8vw, 18px);
  display: grid;
  gap: clamp(28px, 3vw, 38px);
}

.faq-item {
  border: 0;
  background: transparent;
}

.faq-trigger {
  width: 100%;
  display: grid;
  grid-template-columns: var(--faq-index-size) minmax(0, 1fr) 32px;
  align-items: center;
  column-gap: var(--faq-gap);
  padding: 0;
  text-align: left;
  background: transparent;
  color: var(--faq-accent);
}

.faq-trigger:hover,
.faq-trigger:focus-visible {
  transform: none;
}

.faq-main {
  min-width: 0;
  display: grid;
  align-items: center;
}

.faq-index {
  width: var(--faq-index-size);
  height: var(--faq-index-size);
  min-width: var(--faq-index-size);
  min-height: var(--faq-index-size);
  max-width: var(--faq-index-size);
  max-height: var(--faq-index-size);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 var(--faq-index-size);
  overflow: hidden;
  border-radius: 999px;
  background: var(--faq-accent);
  color: #ffffff;
  font-size: clamp(1.8rem, 2.2vw, 3rem);
  font-weight: 800;
  line-height: 1;
}

.faq-question {
  display: block;
  color: var(--faq-accent);
  font-size: clamp(1.3rem, 1rem + 1vw, 2.3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

.faq-divider {
  display: block;
  width: 100%;
  height: 3px;
  margin-top: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--faq-accent) 0%, var(--faq-accent) 88%, rgba(23, 60, 168, 0.18) 100%);
}

.faq-chevron {
  justify-self: end;
  color: var(--faq-accent);
  font-size: 1.5rem;
  line-height: 1;
  transition: transform 0.22s ease;
}

.faq-chevron.open {
  transform: rotate(180deg);
}

.faq-answer {
  margin-left: calc(var(--faq-index-size) + var(--faq-gap));
  margin-top: 14px;
  padding: 2px 0 0;
  background: transparent;
  color: #24314f;
}

.faq-answer-text {
  margin: 0;
  white-space: pre-line;
  font-size: clamp(1rem, 0.95rem + 0.18vw, 1.12rem);
  line-height: 1.9;
  font-weight: 500;
}

@media (max-width: 768px) {
  .faq-list {
    --faq-index-size: 50px;
    --faq-gap: 12px;
    gap: 24px;
  }

  .faq-trigger {
    grid-template-columns: var(--faq-index-size) minmax(0, 1fr) 24px;
  }

  .faq-question {
    font-size: clamp(1.05rem, 0.96rem + 0.65vw, 1.3rem);
  }

  .faq-divider {
    margin-top: 10px;
    height: 2px;
  }

  .faq-chevron {
    font-size: 1.15rem;
  }

  .faq-answer {
    margin-left: 0;
    padding-left: 0;
  }
}
</style>
`,Ab=`<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

import openingImage from '../assets/opening.png'
import banner1 from '../assets/banner1.png'
// import banner2 from '../assets/banner2.png'
// import banner3 from '../assets/banner3.png'

const pageTitle = '新北產業AI化輔導計畫'

const banners = [
  {
    id: 1,
    title: '政府補助挺你AI轉型',
    alt: '115年度新北產業 AI 化輔導計畫：政府補助挺你 AI 轉型，降低導入門檻，報名時間即日起至 115 年 5 月 15 日。',
    src: banner1,
    to: '/about',
  },
  // { id: 2, title: '首頁輪播 2', src: banner2 },
  // { id: 3, title: '首頁輪播 3', src: banner3 },
]

const stage = ref('ready')
const activeIndex = ref(0)
const touchStartX = ref(0)
const touchDeltaX = ref(0)
const isTouching = ref(false)
// 滑動誤觸保護旗標：滑動結束後 250ms 內若有 click 觸發，會被擋下避免意外導向 banner 連結
const suppressNextClick = ref(false)
let timerId
let suppressTimerId

const isOverlayVisible = computed(() => stage.value !== 'home')
const isReadyStage = computed(() => stage.value === 'ready')
// 暫存需求：新北市企業 / 其他企業雙按鈕與 Google Form 回傳
// const googleFormUrl =
//   'https://docs.google.com/forms/d/e/1FAIpQLSeYelxk39eefWsEqVVhjjfvbdptAsRJBWkEDd5nY1CgmlJKrA/formResponse'
// const enterpriseOptions = [
//   { id: 'ntpc', label: '我是新北市企業', value: '是' },
//   { id: 'other', label: '其他企業', value: '否' },
// ]

const enterHome = () => {
  stage.value = 'home'
}

// const submitEnterpriseChoice = (value) => {
//   const payload = new URLSearchParams({
//     'entry.987539846': value,
//     'entry.987539846_sentinel': value,
//   })
//
//   void fetch(googleFormUrl, {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//     },
//     body: payload.toString(),
//     keepalive: true,
//   }).catch((error) => {
//     console.warn('Google Form submit failed:', error)
//   })
// }
//
// const selectEnterpriseType = (value) => {
//   submitEnterpriseChoice(value)
//   enterHome()
// }

// 滑動誤觸保護：滑動後 250ms 內的 click 會 preventDefault 阻止連結跳轉
const onSlideClick = (event, navigate) => {
  if (suppressNextClick.value) {
    suppressNextClick.value = false
    if (event) {
      event.preventDefault()
    }

    return
  }

  if (navigate) {
    navigate(event)
  }
}

const goTo = (index) => {
  activeIndex.value = index
  if (!isOverlayVisible.value) {
    restartAutoPlay()
  }
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % banners.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + banners.length) % banners.length
}

const markSuppressNextClick = () => {
  suppressNextClick.value = true

  if (suppressTimerId) {
    window.clearTimeout(suppressTimerId)
  }

  suppressTimerId = window.setTimeout(() => {
    suppressNextClick.value = false
    suppressTimerId = undefined
  }, 250)
}

const onTouchStart = (event) => {
  if (event.touches.length !== 1) {
    return
  }

  isTouching.value = true
  touchStartX.value = event.touches[0].clientX
  touchDeltaX.value = 0
}

const onTouchMove = (event) => {
  if (!isTouching.value || event.touches.length !== 1) {
    return
  }

  touchDeltaX.value = event.touches[0].clientX - touchStartX.value
}

const onTouchEnd = () => {
  if (!isTouching.value) {
    return
  }

  const swipeThreshold = 45
  const delta = touchDeltaX.value

  if (Math.abs(delta) >= swipeThreshold) {
    if (delta < 0) {
      nextSlide()
    } else {
      prevSlide()
    }

    restartAutoPlay()
    markSuppressNextClick()
  }

  isTouching.value = false
  touchDeltaX.value = 0
}

const onTouchCancel = () => {
  isTouching.value = false
  touchDeltaX.value = 0
}

const startAutoPlay = () => {
  if (timerId || isOverlayVisible.value) {
    return
  }

  timerId = window.setInterval(nextSlide, 60000)
}

const stopAutoPlay = () => {
  if (!timerId) {
    return
  }

  window.clearInterval(timerId)
  timerId = undefined
}

const restartAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const setPreHomeState = (enabled) => {
  document.body.style.overflow = enabled ? 'hidden' : ''
  document.body.classList.toggle('pre-home-stage', enabled)
}

watch(
  isOverlayVisible,
  (visible) => {
    setPreHomeState(visible)
    if (visible) {
      stopAutoPlay()
      return
    }

    startAutoPlay()
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  stopAutoPlay()
  setPreHomeState(false)

  if (suppressTimerId) {
    window.clearTimeout(suppressTimerId)
    suppressTimerId = undefined
  }
})
<\/script>

<template>
  <section class="opening-home">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1 class="sr-only">{{ pageTitle }}</h1>
          <span class="title-line"></span>
        </header>

        <section
          class="home-carousel"
          role="region"
          aria-labelledby="home-carousel-heading"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
          @focusin="stopAutoPlay"
          @focusout="startAutoPlay"
        >
          <h2 id="home-carousel-heading" class="sr-only">首頁重點資訊輪播</h2>
          <div
            class="home-carousel-viewport"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchCancel"
          >
            <div class="home-carousel-track" :style="{ transform: \`translateX(-\${activeIndex * 100}%)\` }">
              <figure v-for="banner in banners" :key="banner.id" class="home-carousel-slide">
                <RouterLink
                  v-if="banner.to"
                  :to="banner.to"
                  custom
                  v-slot="{ href, navigate }"
                >
                  <a
                    :href="href"
                    class="home-slide-trigger"
                    :aria-label="\`\${banner.title}（前往關於計畫）\`"
                    :title="\`\${banner.title}（前往關於計畫）\`"
                    @click="onSlideClick($event, navigate)"
                  >
                    <img :src="banner.src" :alt="banner.alt || banner.title" />
                  </a>
                </RouterLink>
                <a
                  v-else-if="banner.href"
                  :href="banner.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="home-slide-trigger"
                  :aria-label="\`\${banner.title}（另開新視窗）\`"
                  :title="\`\${banner.title}（另開新視窗）\`"
                  @click="onSlideClick($event)"
                >
                  <img :src="banner.src" :alt="banner.alt || banner.title" />
                </a>
                <img v-else class="home-slide-static" :src="banner.src" :alt="banner.alt || banner.title" />
              </figure>
            </div>
          </div>
          <div class="home-carousel-indicators" role="group" aria-label="首頁輪播指示器">
            <button
              v-for="(banner, index) in banners"
              :key="banner.id"
              type="button"
              class="home-indicator"
              :class="{ active: index === activeIndex }"
              :aria-label="\`切換到第 \${index + 1} 張圖片\`"
              :title="\`切換到第 \${index + 1} 張圖片：\${banner.title}\`"
              :aria-current="index === activeIndex ? 'true' : undefined"
              :aria-pressed="(index === activeIndex).toString()"
              @click="goTo(index)"
            >
              <span class="sr-only">第 {{ index + 1 }} 張：{{ banner.title }}</span>
            </button>
          </div>
        </section>
      </div>
    </div>

    <div
      v-if="isOverlayVisible"
      class="opening-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="opening-title"
      aria-describedby="opening-subtitle"
    >
      <div class="opening-backdrop">
        <img class="opening-backdrop-media opening-backdrop-image" :src="openingImage" alt="" aria-hidden="true" />
      </div>

      <div class="opening-stage">
        <div v-if="isReadyStage" class="ready-content">
          <h2 id="opening-title" class="ready-title">{{ pageTitle }}</h2>
          <p id="opening-subtitle" class="ready-subtitle">New Taipei City Industrial AI Mentoring Program</p>
          <!-- 暫存需求：保留雙按鈕版本 -->
          <!--
          <div class="entry-actions">
            <button
              v-for="option in enterpriseOptions"
              :key="option.id"
              type="button"
              class="enter-home-btn pulse-glow"
              @click="selectEnterpriseType(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
          -->
          <button
            type="button"
            class="enter-home-btn pulse-glow"
            aria-label="開始探索新北產業 AI 化輔導計畫網站"
            title="開始探索新北產業 AI 化輔導計畫網站"
            @click="enterHome"
          >
            開始探索
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.opening-home {
  height: calc(100dvh - var(--nav-height) - 68px);
  padding: 8px 0 0;
  overflow: hidden;
}

.opening-home .container {
  height: 100%;
}

.opening-home .content-panel {
  height: 100%;
  padding: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.opening-home .title-row {
  margin-bottom: 8px;
}

.opening-home .title-row h1 {
  font-size: clamp(1.8rem, 2.4vw, 2.4rem);
}

.home-carousel {
  display: grid;
  gap: 12px;
  height: 100%;
  max-width: min(1020px, 100%);
  margin: 0 auto;
  align-content: center;
  justify-items: center;
  padding-bottom: 6px;
}

.home-carousel-viewport {
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  box-shadow: 0 20px 34px rgba(17, 26, 82, 0.24);
  width: min(100%, 76dvh);
  aspect-ratio: 4 / 3;
  touch-action: pan-y;
}

.home-carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease;
}

.home-carousel-slide {
  margin: 0;
  min-width: 100%;
}

.home-slide-trigger {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  transform: none;
}

.home-slide-trigger:hover {
  transform: none;
}

.home-carousel-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.home-carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.home-indicator {
  width: 11px;
  height: 11px;
  border-radius: 999px;
  background: rgba(33, 54, 150, 0.34);
}

.home-indicator.active {
  width: 34px;
  background: #2038a9;
}

.opening-overlay {
  position: fixed;
  inset: 0;
  z-index: 2100;
  overflow: hidden;
}

.opening-backdrop {
  position: absolute;
  inset: 0;
}

.opening-backdrop-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.opening-backdrop-image {
  transform: none;
  filter: none;
}

.opening-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ready-content {
  width: min(94vw, 1320px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2vh 2vw;
  transform: translateY(-5%);
}

.ready-title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(2rem, 6.2vw, 7.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-shadow:
    4px 4px 0 rgba(72, 102, 226, 0.75),
    0 10px 24px rgba(4, 11, 55, 0.5);
}

.ready-subtitle {
  margin: clamp(16px, 2vh, 28px) 0 clamp(28px, 3vh, 40px);
  color: rgba(255, 255, 255, 0.96);
  font-size: clamp(1.02rem, 2.2vw, 3rem);
  line-height: 1.3;
  text-shadow: 0 3px 12px rgba(3, 8, 42, 0.55);
}

/* 暫存需求：保留雙按鈕容器樣式 */
/*
.entry-actions {
  width: min(100%, 440px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;
  margin-top: 50px;
}
*/

.enter-home-btn {
  position: relative;
  margin-top: 50px;
  min-width: 160px;
  padding: clamp(12px, 1.3vh, 18px) clamp(26px, 2.8vw, 50px);
  border-radius: 16px;
  background: rgba(92, 116, 214, 0.42);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.74);
  font-size: clamp(1.1rem, 2.1vw, 2.5rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12) inset,
    0 12px 28px rgba(7, 15, 58, 0.34);
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0% {
    transform: scale(1);
    opacity: 0.92;
    box-shadow:
      0 0 0 1px rgba(7, 15, 58, 0.34) inset,
      0 12px 28px rgba(7, 15, 58, 0.34);
  }

  50% {
    transform: scale(1.07);
    opacity: 1;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.18) inset,
      0 0 24px rgba(171, 195, 255, 0.6),
      0 16px 34px rgba(7, 15, 58, 0.42);
  }

  100% {
    transform: scale(1);
    opacity: 0.92;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.12) inset,
      0 12px 28px rgba(7, 15, 58, 0.34);
  }
}

.enter-home-btn:hover {
  background: rgba(107, 132, 230, 0.56);
  animation-play-state: paused;
  transform: scale(1.04);
}

.home-slide-static {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 900px) {
  .opening-home {
    height: calc(100dvh - var(--nav-height) - 52px);
    padding-top: 4px;
  }

  .home-carousel-viewport {
    width: min(100%, 70dvh);
  }
}

@media (max-width: 720px) {
  .opening-home .title-row {
    margin-bottom: 6px;
  }

  .ready-content {
    transform: translateY(-2%);
    padding: 0 4vw;
  }

  .ready-title {
    font-size: clamp(1.68rem, 10.2vw, 3.2rem);
  }

  .ready-subtitle {
    margin-top: 14px;
    margin-bottom: 24px;
    font-size: clamp(0.92rem, 4.6vw, 1.2rem);
  }

  /* 暫存需求：保留雙按鈕手機版容器樣式 */
  /*
  .entry-actions {
    width: min(100%, 360px);
    gap: 14px;
    margin-top: 28px;
  }
  */

  .enter-home-btn {
    padding: 12px 26px;
    border-radius: 14px;
    font-size: clamp(1.25rem, 7.2vw, 1.75rem);
  }

  .home-carousel-viewport {
    width: min(100%, 92vw);
  }
}
</style>
`,yb=`<script setup>
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import schedulePlaceholder from '../assets/schedule-placeholder.png'

const openScheduleImage = () => {
  Swal.fire({
    imageUrl: schedulePlaceholder,
    imageAlt: '計畫時程圖，說明 AI 服務供應商徵選、企業申請、媒合會、顧問輔導、導入與補助核銷流程。',
    showConfirmButton: false,
    showCloseButton: true,
    closeButtonAriaLabel: '關閉計畫時程圖',
    customClass: {
      popup: 'schedule-image-swal-popup',
      closeButton: 'solution-swal-close',
    },
    width: 'min(1200px, 96vw)',
    padding: '1rem',
    background: '#ffffff',
  })
}
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>計畫時程</h1>
          <span class="title-line"></span>
        </header>

        <div class="schedule-layout">
          <article class="schedule-text">
            <section class="schedule-phase">
              <h2>公開徵選 AI 服務供應商</h2>
              <p>完成 AI 應用方案遴選，公告合作供應商名單。</p>
            </section>

            <section class="schedule-phase">
              <h2>受輔導企業申請受理期間</h2>
              <ul>
                <li>申請作業：受理具 AI 導入需求之新北企業依公告日期申請</li>
                <li>審查作業：依徵件情況適時召開審查會議</li>
              </ul>
            </section>

            <section class="schedule-phase">
              <h2>實體媒合會與需求對接</h2>
              <p>舉辦企業 × AI供應商實體媒合活動，協助精準配對。</p>
            </section>

            <section class="schedule-phase">
              <h2>專業顧問輔導與AI方案導入使用協助</h2>
              <ul>
                <li>顧問訪視與需求確認</li>
                <li>協助企業完成方案簽約與導入</li>
              </ul>
            </section>

            <section class="schedule-phase">
              <h2>完成購置並申請補助核銷</h2>
              <ul>
                <li>企業須先完成購置並支付費用</li>
                <li>檢附發票及合約辦理請款</li>
              </ul>
            </section>
          </article>

          <figure class="schedule-visual">
            <button type="button" class="schedule-image-trigger" aria-label="放大檢視計畫時程圖" title="放大檢視計畫時程圖" @click="openScheduleImage">
              <img :src="schedulePlaceholder" alt="計畫時程圖，說明 AI 服務供應商徵選、企業申請、媒合會、顧問輔導、導入與補助核銷流程。" width="1024" height="768" />
            </button>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.schedule-image-trigger {
  display: inline-flex;
  width: auto;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
  transform: none !important;
}

.schedule-image-trigger:hover,
.schedule-image-trigger:focus-visible {
  transform: none !important;
}

.schedule-visual {
  display: flex;
  justify-content: flex-start;
}

.schedule-visual img {
  width: min(1024px, 100%);
  height: auto;
  max-width: 100%;
  aspect-ratio: auto;
  display: block;
}
</style>
`,vb=`<script setup>
import { RouterLink } from 'vue-router'
import { categoryNavItems } from '../data/catalogData'

const sections = [
  {
    heading: '計畫資訊',
    links: [
      { label: '關於計畫', to: '/about' },
      { label: '計畫時程', to: '/schedule' },
      { label: '常見問題 FAQ', to: '/faq' },
    ],
  },
  {
    heading: '方案分類',
    links: [
      { label: '方案分類總覽', to: '/categories' },
      ...categoryNavItems.map((item) => ({ label: item.label, to: \`/categories/\${item.slug}\` })),
    ],
  },
  {
    heading: '供應商與服務',
    links: [
      { label: 'AI服務供應商', to: '/vendors' },
      { label: '聯絡我們', to: '/contact-us' },
      { label: '站內搜尋', to: '/search' },
    ],
  },
  {
    heading: '其他',
    links: [{ label: '首頁', to: '/' }],
  },
]
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>網站導覽</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <p class="sitemap-intro">本頁彙整網站所有單元連結,方便您快速前往各區內容。</p>

      <div class="sitemap-grid">
        <section v-for="group in sections" :key="group.heading" class="sitemap-group">
          <h2 class="sitemap-heading">{{ group.heading }}</h2>
          <ul class="sitemap-list">
            <li v-for="link in group.links" :key="link.to">
              <RouterLink :to="link.to" class="sitemap-link">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sitemap-intro {
  margin: 6px 0 18px;
  color: var(--muted);
  font-size: 1.05rem;
}

.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.sitemap-group {
  background: #ffffff;
  border: 1px solid rgba(28, 30, 127, 0.14);
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 10px 24px rgba(28, 30, 127, 0.08);
}

.sitemap-heading {
  margin: 0 0 12px;
  color: #1d2f8f;
  font-size: 1.2rem;
  border-bottom: 2px solid rgba(28, 30, 127, 0.12);
  padding-bottom: 8px;
}

.sitemap-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.sitemap-link {
  display: inline-block;
  color: var(--primary-dark);
  font-weight: 600;
  font-size: 1.05rem;
}

.sitemap-link::before {
  content: '›';
  margin-right: 8px;
  color: #5a78d6;
}

.sitemap-link:hover,
.sitemap-link:focus-visible {
  text-decoration: underline;
}
</style>
`,Ib=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI助理'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Eb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI創作內容'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,_b=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI企業營運管理'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,xb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI居家照護'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Cb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI資訊安全'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Sb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI智能客服'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Bb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI市場洞察'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Nb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI營運流程自動化'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Pb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI智慧製造'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,kb=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI垂直整合方案'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,Tb=`<script setup>
import { categoryNavItems } from '../../data/catalogData'
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>方案分類</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <nav class="category-nav-grid" aria-labelledby="category-nav-heading">
        <h2 id="category-nav-heading" class="sr-only">方案分類清單</h2>
        <RouterLink
          v-for="item in categoryNavItems"
          :key="item.slug"
          class="category-nav-item"
          :to="\`/categories/\${item.slug}\`"
          :title="item.label"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.category-nav-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.category-nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 86px;
  text-align: center;
  font-size: clamp(1rem, 0.94rem + 0.22vw, 1.2rem);
  font-weight: 700;
  color: #1d2f8f;
  border: 1px solid rgba(30, 50, 150, 0.22);
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(28, 30, 127, 0.1);
  padding: 10px;
}

@media (max-width: 720px) {
  .category-nav-grid {
    grid-template-columns: 1fr;
  }
}
</style>
`,Fb=`<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import vendorCompanies from '../../data/vendorCompanies.generated.json'
import metadataRows from '../../data/metadata.generated.json'
import { categoryNavItems } from '../../data/catalogData'

const PAGE_SIZE = 15

const logoModules = import.meta.glob('/src/assets/solutions/logo/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})

const normalizeUrl = (value) => {
  const text = String(value || '').trim()
  if (!text) return ''
  if (/^https?:\\/\\//i.test(text)) return text
  return \`https://\${text}\`
}

const toText = (value) => String(value ?? '').trim()

const categorySlugMap = new Map(categoryNavItems.map((item) => [item.label, item.slug]))

const solutionCategoryMap = new Map()
metadataRows.forEach((row) => {
  const solutionName = toText(row.solutionName)
  const category = toText(row.category)
  const companyName = toText(row.companyName)
  const companyShortName = toText(row.companyShortName)
  const slug = categorySlugMap.get(category)

  if (!solutionName || !slug) {
    return
  }

  const routePath = \`/categories/\${slug}\`
  if (companyName) {
    solutionCategoryMap.set(\`\${companyName}::\${solutionName}\`, routePath)
  }
  if (companyShortName) {
    solutionCategoryMap.set(\`\${companyShortName}::\${solutionName}\`, routePath)
  }
  if (!solutionCategoryMap.has(solutionName)) {
    solutionCategoryMap.set(solutionName, routePath)
  }
})

const suppliers = vendorCompanies.map((item) => ({
  ...item,
  websiteUrl: normalizeUrl(item.websiteUrl),
  solutionLinks: (item.solutionNames || []).map((solutionName) => {
    const normalizedName = toText(solutionName)
    const routePath =
      solutionCategoryMap.get(\`\${toText(item.companyName)}::\${normalizedName}\`) ||
      solutionCategoryMap.get(\`\${toText(item.companyShortName)}::\${normalizedName}\`) ||
      solutionCategoryMap.get(normalizedName) ||
      ''

    return {
      label: normalizedName,
      to: routePath,
    }
  }),
  logo:
    item.logoFileName && logoModules[\`/src/assets/solutions/logo/\${item.logoFileName}\`]
      ? logoModules[\`/src/assets/solutions/logo/\${item.logoFileName}\`]
      : '',
}))

const currentPage = ref(0)
const selectedSupplier = ref(null)

const pageCount = computed(() => Math.max(1, Math.ceil(suppliers.length / PAGE_SIZE)))
const pageItems = computed(() =>
  suppliers.slice(currentPage.value * PAGE_SIZE, currentPage.value * PAGE_SIZE + PAGE_SIZE)
)

const changePage = (index) => {
  if (index < 0 || index >= pageCount.value) return
  currentPage.value = index
}

const openSupplierModal = (supplier) => {
  selectedSupplier.value = supplier
}

const closeSupplierModal = () => {
  selectedSupplier.value = null
}

const getSupplierName = (supplier) => supplier.companyName || supplier.companyShortName || 'AI服務供應商'

const getSupplierCardLabel = (supplier) => \`查看 \${getSupplierName(supplier)} 供應商詳細資訊\`

const getSupplierWebsiteLabel = (supplier) => \`前往 \${getSupplierName(supplier)} 官網（另開新視窗）\`
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>AI服務供應商</h1>
          <span class="title-line"></span>
        </header>
      </div>

      <h2 class="sr-only">AI服務供應商清單</h2>

      <div class="vendors-grid">
        <button
          v-for="supplier in pageItems"
          :key="supplier.companyShortName"
          class="vendor-card"
          type="button"
          :aria-label="getSupplierCardLabel(supplier)"
          :title="getSupplierCardLabel(supplier)"
          @click="openSupplierModal(supplier)"
        >
          <span class="vendor-logo-wrap">
            <img
              v-if="supplier.logo"
              :src="supplier.logo"
              alt=""
            />
            <span v-else class="vendor-logo-placeholder">LOGO</span>
          </span>
          <span class="vendor-name">{{ supplier.companyShortName }}</span>
        </button>
      </div>

      <nav class="vendors-pagination" aria-label="供應商頁面切換">
        <button
          v-for="index in pageCount"
          :key="index"
          class="vendors-page-dot"
          :class="{ active: currentPage === index - 1 }"
          type="button"
          :aria-label="\`切換到第 \${index} 頁\`"
          :title="\`切換到第 \${index} 頁\`"
          :aria-current="currentPage === index - 1 ? 'page' : undefined"
          :aria-pressed="(currentPage === index - 1).toString()"
          @click="changePage(index - 1)"
        >
          <span class="sr-only">第 {{ index }} 頁</span>
        </button>
      </nav>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="selectedSupplier" class="supplier-modal-backdrop" @click.self="closeSupplierModal">
      <article
        class="supplier-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="supplier-modal-title"
        aria-describedby="supplier-modal-intro"
      >
        <button class="supplier-modal-close" type="button" aria-label="關閉供應商詳細資訊" title="關閉供應商詳細資訊" @click="closeSupplierModal">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        <div class="supplier-modal-layout">
          <aside class="supplier-modal-side">
            <div class="supplier-modal-logo">
              <img
                v-if="selectedSupplier.logo"
                :src="selectedSupplier.logo"
                alt=""
              />
              <span v-else class="vendor-logo-placeholder">LOGO</span>
            </div>

            <a
              v-if="selectedSupplier.websiteUrl"
              :href="selectedSupplier.websiteUrl"
              class="supplier-website-btn"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="getSupplierWebsiteLabel(selectedSupplier)"
              :title="getSupplierWebsiteLabel(selectedSupplier)"
            >
              官網<span class="external-hint">（另開新視窗）</span>
            </a>
          </aside>

          <section class="supplier-modal-main">
            <h2 id="supplier-modal-title" class="supplier-modal-title">{{ selectedSupplier.companyName || selectedSupplier.companyShortName }}</h2>
            <p id="supplier-modal-intro" class="supplier-modal-intro">{{ selectedSupplier.companyIntro || '暫無公司簡介。' }}</p>

            <div class="supplier-modal-tags">
              <template v-for="solution in selectedSupplier.solutionLinks" :key="solution.label">
                <RouterLink
                  v-if="solution.to"
                  :to="solution.to"
                  class="supplier-solution-tag supplier-solution-tag--link"
                  :aria-label="\`查看 \${solution.label} 方案分類\`"
                  :title="\`查看 \${solution.label} 方案分類\`"
                  @click="closeSupplierModal"
                >
                  {{ solution.label }}
                </RouterLink>
                <span v-else class="supplier-solution-tag">
                  {{ solution.label }}
                </span>
              </template>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Teleport>
</template>

<style scoped>
.vendors-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px 20px;
  margin-top: 10px;
}

.vendor-card {
  border: 0;
  background: transparent;
  display: grid;
  gap: 10px;
  justify-items: center;
  padding: 0;
}

.vendor-logo-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  border: 0;
  border-radius: 26px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  box-shadow: 0 12px 22px rgba(27, 39, 119, 0.08);
}

.vendor-logo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

.vendor-logo-placeholder {
  color: #93a0cb;
  font-weight: 700;
}

.vendor-name {
  color: #203a9f;
  font-size: clamp(1.02rem, 0.93rem + 0.24vw, 1.24rem);
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
}

.vendors-pagination {
  margin-top: 22px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.vendors-page-dot {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid #3b56b2;
  background: #ffffff;
  padding: 0;
}

.vendors-page-dot.active {
  background: #3b56b2;
}

.supplier-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(11, 18, 48, 0.65);
  z-index: 1700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.supplier-modal {
  width: min(980px, 92vw);
  max-height: min(760px, 90vh);
  overflow: auto;
  background: #ffffff;
  border-radius: 14px;
  padding: 26px 26px 28px;
  position: relative;
}

.supplier-modal-close {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 0;
  color: #3248aa;
  font-size: 2rem;
  background: transparent;
  padding: 0;
}

.supplier-modal-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 24px;
}

.supplier-modal-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.supplier-modal-logo {
  width: 208px;
  height: 208px;
  border-radius: 999px;
  border: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: none;
}

.supplier-modal-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.supplier-website-btn {
  min-width: 162px;
  min-height: 64px;
  border-radius: 20px;
  background: #324ab0;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.supplier-modal-main {
  min-width: 0;
  min-height: auto;
  display: block;
}

.supplier-modal-title {
  margin: 0 0 14px;
  color: #000000;
  font-size: clamp(2rem, 1.68rem + 1.1vw, 4.2rem);
  line-height: 1.15;
  font-weight: 800;
}

.supplier-modal-intro {
  margin: 0;
  color: #101522;
  font-size: clamp(1.1rem, 1rem + 0.54vw, 2.05rem);
  line-height: 1.68;
  white-space: pre-line;
  overflow: visible;
  padding-right: 0;
}

.supplier-modal-tags {
  margin-top: 18px;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  align-content: flex-start;
}

.supplier-solution-tag {
  background: #334cb0;
  color: #ffffff;
  border-radius: 12px;
  padding: 10px 18px;
  font-size: clamp(1rem, 0.96rem + 0.24vw, 1.28rem);
  font-weight: 700;
  line-height: 1.25;
}

.supplier-solution-tag--link {
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.supplier-solution-tag--link:hover,
.supplier-solution-tag--link:focus-visible {
  background: #243a98;
  box-shadow: 0 10px 20px rgba(36, 58, 152, 0.22);
  transform: translateY(-1px);
}

@media (max-width: 1200px) {
  .vendors-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .vendors-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .supplier-modal-layout {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .supplier-modal-side {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .supplier-modal-logo {
    width: 148px;
    height: 148px;
    border-width: 4px;
    padding: 14px;
  }

  .supplier-website-btn {
    min-height: 52px;
    font-size: 1.5rem;
    border-radius: 14px;
  }

  .supplier-modal {
    max-height: min(880px, 92vh);
    overflow: auto;
  }

  .supplier-modal-main {
    display: block;
  }

  .supplier-modal-intro {
    overflow: visible;
    padding-right: 0;
  }

  .supplier-modal-tags {
    margin-top: 18px;
    padding-top: 0;
  }
}

@media (max-width: 720px) {
  .vendors-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .vendor-logo-wrap {
    border-radius: 18px;
    border-width: 3px;
    padding: 10px;
  }

  .vendor-name {
    font-size: 0.98rem;
  }

  .vendors-page-dot {
    width: 18px;
    height: 18px;
  }

  .supplier-modal {
    padding: 20px 16px 18px;
  }

  .supplier-modal-close {
    top: 6px;
    right: 8px;
    width: 34px;
    height: 34px;
    font-size: 1.7rem;
  }

  .supplier-modal-side {
    flex-direction: column;
    align-items: center;
  }

  .supplier-modal-logo {
    width: 132px;
    height: 132px;
  }

  .supplier-website-btn {
    min-width: 138px;
    min-height: 46px;
    font-size: 1.28rem;
  }

  .supplier-modal-intro {
    font-size: 1.05rem;
  }

  .supplier-solution-tag {
    font-size: 0.94rem;
    padding: 8px 12px;
  }
}
</style>
`;function jt(e){return Array.isArray?Array.isArray(e):Qc(e)==="[object Array]"}function Db(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function $b(e){return e==null?"":Db(e)}function xt(e){return typeof e=="string"}function Xc(e){return typeof e=="number"}function Mb(e){return e===!0||e===!1||Ob(e)&&Qc(e)=="[object Boolean]"}function Yc(e){return typeof e=="object"}function Ob(e){return Yc(e)&&e!==null}function tt(e){return e!=null}function Lo(e){return!e.trim().length}function Qc(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Rb="Incorrect 'index' type",Lb=e=>`Invalid value for key ${e}`,Ub=e=>`Pattern length exceeds max of ${e}.`,Vb=e=>`Missing ${e} property in key`,jb=e=>`Property 'weight' in key '${e}' must be a positive integer`,ur=Object.prototype.hasOwnProperty;class qb{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let o=Jc(s);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Jc(e){let t=null,n=null,s=null,o=1,i=null;if(xt(e)||jt(e))s=e,t=dr(e),n=ai(e);else{if(!ur.call(e,"name"))throw new Error(Vb("name"));const a=e.name;if(s=a,ur.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(jb(a));t=dr(a),n=ai(a),i=e.getFn}return{path:t,id:n,weight:o,src:s,getFn:i}}function dr(e){return jt(e)?e:e.split(".")}function ai(e){return jt(e)?e.join("."):e}function Hb(e,t){let n=[],s=!1;const o=(i,a,r)=>{if(tt(i))if(!a[r])n.push(i);else{let l=a[r];const u=i[l];if(!tt(u))return;if(r===a.length-1&&(xt(u)||Xc(u)||Mb(u)))n.push($b(u));else if(jt(u)){s=!0;for(let c=0,d=u.length;c<d;c+=1)o(u[c],a,r+1)}else a.length&&o(u,a,r+1)}};return o(e,xt(t)?t.split("."):t,0),s?n:n[0]}const Gb={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Wb={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},zb={location:0,threshold:.6,distance:100},Kb={useExtendedSearch:!1,getFn:Hb,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var z={...Wb,...Gb,...zb,...Kb};const Xb=/[^ ]+/g;function Yb(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(o){const i=o.match(Xb).length;if(n.has(i))return n.get(i);const a=1/Math.pow(i,.5*e),r=parseFloat(Math.round(a*s)/s);return n.set(i,r),r},clear(){n.clear()}}}class Qi{constructor({getFn:t=z.getFn,fieldNormWeight:n=z.fieldNormWeight}={}){this.norm=Yb(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,xt(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();xt(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!tt(t)||Lo(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((o,i)=>{let a=o.getFn?o.getFn(t):this.getFn(t,o.path);if(tt(a)){if(jt(a)){let r=[];const l=[{nestedArrIndex:-1,value:a}];for(;l.length;){const{nestedArrIndex:u,value:c}=l.pop();if(tt(c))if(xt(c)&&!Lo(c)){let d={v:c,i:u,n:this.norm.get(c)};r.push(d)}else jt(c)&&c.forEach((d,f)=>{l.push({nestedArrIndex:f,value:d})})}s.$[i]=r}else if(xt(a)&&!Lo(a)){let r={v:a,n:this.norm.get(a)};s.$[i]=r}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function Zc(e,t,{getFn:n=z.getFn,fieldNormWeight:s=z.fieldNormWeight}={}){const o=new Qi({getFn:n,fieldNormWeight:s});return o.setKeys(e.map(Jc)),o.setSources(t),o.create(),o}function Qb(e,{getFn:t=z.getFn,fieldNormWeight:n=z.fieldNormWeight}={}){const{keys:s,records:o}=e,i=new Qi({getFn:t,fieldNormWeight:n});return i.setKeys(s),i.setIndexRecords(o),i}function Bs(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:o=z.distance,ignoreLocation:i=z.ignoreLocation}={}){const a=t/e.length;if(i)return a;const r=Math.abs(s-n);return o?a+r/o:r?1:a}function Jb(e=[],t=z.minMatchCharLength){let n=[],s=-1,o=-1,i=0;for(let a=e.length;i<a;i+=1){let r=e[i];r&&s===-1?s=i:!r&&s!==-1&&(o=i-1,o-s+1>=t&&n.push([s,o]),s=-1)}return e[i-1]&&i-s>=t&&n.push([s,i-1]),n}const un=32;function Zb(e,t,n,{location:s=z.location,distance:o=z.distance,threshold:i=z.threshold,findAllMatches:a=z.findAllMatches,minMatchCharLength:r=z.minMatchCharLength,includeMatches:l=z.includeMatches,ignoreLocation:u=z.ignoreLocation}={}){if(t.length>un)throw new Error(Ub(un));const c=t.length,d=e.length,f=Math.max(0,Math.min(s,d));let h=i,v=f;const C=r>1||l,P=C?Array(d):[];let y;for(;(y=e.indexOf(t,v))>-1;){let $=Bs(t,{currentLocation:y,expectedLocation:f,distance:o,ignoreLocation:u});if(h=Math.min($,h),v=y+c,C){let X=0;for(;X<c;)P[y+X]=1,X+=1}}v=-1;let E=[],S=1,b=c+d;const T=1<<c-1;for(let $=0;$<c;$+=1){let X=0,q=b;for(;X<q;)Bs(t,{errors:$,currentLocation:f+q,expectedLocation:f,distance:o,ignoreLocation:u})<=h?X=q:b=q,q=Math.floor((b-X)/2+X);b=q;let K=Math.max(1,f-q+1),te=a?d:Math.min(f+q,d)+c,Se=Array(te+2);Se[te+1]=(1<<$)-1;for(let pe=te;pe>=K;pe-=1){let ze=pe-1,ve=n[e.charAt(ze)];if(C&&(P[ze]=+!!ve),Se[pe]=(Se[pe+1]<<1|1)&ve,$&&(Se[pe]|=(E[pe+1]|E[pe])<<1|1|E[pe+1]),Se[pe]&T&&(S=Bs(t,{errors:$,currentLocation:ze,expectedLocation:f,distance:o,ignoreLocation:u}),S<=h)){if(h=S,v=ze,v<=f)break;K=Math.max(1,2*f-v)}}if(Bs(t,{errors:$+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:u})>h)break;E=Se}const U={isMatch:v>=0,score:Math.max(.001,S)};if(C){const $=Jb(P,r);$.length?l&&(U.indices=$):U.isMatch=!1}return U}function eA(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const o=e.charAt(n);t[o]=(t[o]||0)|1<<s-n-1}return t}const eo=String.prototype.normalize?(e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(e=>e);class eu{constructor(t,{location:n=z.location,threshold:s=z.threshold,distance:o=z.distance,includeMatches:i=z.includeMatches,findAllMatches:a=z.findAllMatches,minMatchCharLength:r=z.minMatchCharLength,isCaseSensitive:l=z.isCaseSensitive,ignoreDiacritics:u=z.ignoreDiacritics,ignoreLocation:c=z.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:o,includeMatches:i,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:l,ignoreDiacritics:u,ignoreLocation:c},t=l?t:t.toLowerCase(),t=u?eo(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const d=(h,v)=>{this.chunks.push({pattern:h,alphabet:eA(h),startIndex:v})},f=this.pattern.length;if(f>un){let h=0;const v=f%un,C=f-v;for(;h<C;)d(this.pattern.substr(h,un),h),h+=un;if(v){const P=f-un;d(this.pattern.substr(P),P)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:s,includeMatches:o}=this.options;if(t=n?t:t.toLowerCase(),t=s?eo(t):t,this.pattern===t){let C={isMatch:!0,score:0};return o&&(C.indices=[[0,t.length-1]]),C}const{location:i,distance:a,threshold:r,findAllMatches:l,minMatchCharLength:u,ignoreLocation:c}=this.options;let d=[],f=0,h=!1;this.chunks.forEach(({pattern:C,alphabet:P,startIndex:y})=>{const{isMatch:E,score:S,indices:b}=Zb(t,C,P,{location:i+y,distance:a,threshold:r,findAllMatches:l,minMatchCharLength:u,includeMatches:o,ignoreLocation:c});E&&(h=!0),f+=S,E&&b&&(d=[...d,...b])});let v={isMatch:h,score:h?f/this.chunks.length:1};return h&&o&&(v.indices=d),v}}class sn{constructor(t){this.pattern=t}static isMultiMatch(t){return pr(t,this.multiRegex)}static isSingleMatch(t){return pr(t,this.singleRegex)}search(){}}function pr(e,t){const n=e.match(t);return n?n[1]:null}class tA extends sn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class nA extends sn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class sA extends sn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class oA extends sn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class iA extends sn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class aA extends sn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class tu extends sn{constructor(t,{location:n=z.location,threshold:s=z.threshold,distance:o=z.distance,includeMatches:i=z.includeMatches,findAllMatches:a=z.findAllMatches,minMatchCharLength:r=z.minMatchCharLength,isCaseSensitive:l=z.isCaseSensitive,ignoreDiacritics:u=z.ignoreDiacritics,ignoreLocation:c=z.ignoreLocation}={}){super(t),this._bitapSearch=new eu(t,{location:n,threshold:s,distance:o,includeMatches:i,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:l,ignoreDiacritics:u,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class nu extends sn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const o=[],i=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+i,o.push([s,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const ri=[tA,nu,sA,oA,aA,iA,nA,tu],fr=ri.length,rA=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,lA="|";function cA(e,t={}){return e.split(lA).map(n=>{let s=n.trim().split(rA).filter(i=>i&&!!i.trim()),o=[];for(let i=0,a=s.length;i<a;i+=1){const r=s[i];let l=!1,u=-1;for(;!l&&++u<fr;){const c=ri[u];let d=c.isMultiMatch(r);d&&(o.push(new c(d,t)),l=!0)}if(!l)for(u=-1;++u<fr;){const c=ri[u];let d=c.isSingleMatch(r);if(d){o.push(new c(d,t));break}}}return o})}const uA=new Set([tu.type,nu.type]);class dA{constructor(t,{isCaseSensitive:n=z.isCaseSensitive,ignoreDiacritics:s=z.ignoreDiacritics,includeMatches:o=z.includeMatches,minMatchCharLength:i=z.minMatchCharLength,ignoreLocation:a=z.ignoreLocation,findAllMatches:r=z.findAllMatches,location:l=z.location,threshold:u=z.threshold,distance:c=z.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:s,includeMatches:o,minMatchCharLength:i,findAllMatches:r,ignoreLocation:a,location:l,threshold:u,distance:c},t=n?t:t.toLowerCase(),t=s?eo(t):t,this.pattern=t,this.query=cA(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:o,ignoreDiacritics:i}=this.options;t=o?t:t.toLowerCase(),t=i?eo(t):t;let a=0,r=[],l=0;for(let u=0,c=n.length;u<c;u+=1){const d=n[u];r.length=0,a=0;for(let f=0,h=d.length;f<h;f+=1){const v=d[f],{isMatch:C,indices:P,score:y}=v.search(t);if(C){if(a+=1,l+=y,s){const E=v.constructor.type;uA.has(E)?r=[...r,...P]:r.push(P)}}else{l=0,a=0,r.length=0;break}}if(a){let f={isMatch:!0,score:l/a};return s&&(f.indices=r),f}}return{isMatch:!1,score:1}}}const li=[];function pA(...e){li.push(...e)}function ci(e,t){for(let n=0,s=li.length;n<s;n+=1){let o=li[n];if(o.condition(e,t))return new o(e,t)}return new eu(e,t)}const to={AND:"$and",OR:"$or"},ui={PATH:"$path",PATTERN:"$val"},di=e=>!!(e[to.AND]||e[to.OR]),fA=e=>!!e[ui.PATH],mA=e=>!jt(e)&&Yc(e)&&!di(e),mr=e=>({[to.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function su(e,t,{auto:n=!0}={}){const s=o=>{let i=Object.keys(o);const a=fA(o);if(!a&&i.length>1&&!di(o))return s(mr(o));if(mA(o)){const l=a?o[ui.PATH]:i[0],u=a?o[ui.PATTERN]:o[l];if(!xt(u))throw new Error(Lb(l));const c={keyId:ai(l),pattern:u};return n&&(c.searcher=ci(u,t)),c}let r={children:[],operator:i[0]};return i.forEach(l=>{const u=o[l];jt(u)&&u.forEach(c=>{r.children.push(s(c))})}),r};return di(e)||(e=mr(e)),s(e)}function hA(e,{ignoreFieldNorm:t=z.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:o,norm:i,score:a})=>{const r=o?o.weight:null;s*=Math.pow(a===0&&r?Number.EPSILON:a,(r||1)*(t?1:i))}),n.score=s})}function gA(e,t){const n=e.matches;t.matches=[],tt(n)&&n.forEach(s=>{if(!tt(s.indices)||!s.indices.length)return;const{indices:o,value:i}=s;let a={indices:o,value:i};s.key&&(a.key=s.key.src),s.idx>-1&&(a.refIndex=s.idx),t.matches.push(a)})}function wA(e,t){t.score=e.score}function bA(e,t,{includeMatches:n=z.includeMatches,includeScore:s=z.includeScore}={}){const o=[];return n&&o.push(gA),s&&o.push(wA),e.map(i=>{const{idx:a}=i,r={item:t[a],refIndex:a};return o.length&&o.forEach(l=>{l(i,r)}),r})}class jn{constructor(t,n={},s){this.options={...z,...n},this.options.useExtendedSearch,this._keyStore=new qb(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Qi))throw new Error(Rb);this._myIndex=n||Zc(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){tt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,o=this._docs.length;s<o;s+=1){const i=this._docs[s];t(i,s)&&(this.removeAt(s),s-=1,o-=1,n.push(i))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:o,shouldSort:i,sortFn:a,ignoreFieldNorm:r}=this.options;let l=xt(t)?xt(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return hA(l,{ignoreFieldNorm:r}),i&&l.sort(a),Xc(n)&&n>-1&&(l=l.slice(0,n)),bA(l,this._docs,{includeMatches:s,includeScore:o})}_searchStringList(t){const n=ci(t,this.options),{records:s}=this._myIndex,o=[];return s.forEach(({v:i,i:a,n:r})=>{if(!tt(i))return;const{isMatch:l,score:u,indices:c}=n.searchIn(i);l&&o.push({item:i,idx:a,matches:[{score:u,value:i,norm:r,indices:c}]})}),o}_searchLogical(t){const n=su(t,this.options),s=(r,l,u)=>{if(!r.children){const{keyId:d,searcher:f}=r,h=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(l,d),searcher:f});return h&&h.length?[{idx:u,item:l,matches:h}]:[]}const c=[];for(let d=0,f=r.children.length;d<f;d+=1){const h=r.children[d],v=s(h,l,u);if(v.length)c.push(...v);else if(r.operator===to.AND)return[]}return c},o=this._myIndex.records,i={},a=[];return o.forEach(({$:r,i:l})=>{if(tt(r)){let u=s(n,r,l);u.length&&(i[l]||(i[l]={idx:l,item:r,matches:[]},a.push(i[l])),u.forEach(({matches:c})=>{i[l].matches.push(...c)}))}}),a}_searchObjectList(t){const n=ci(t,this.options),{keys:s,records:o}=this._myIndex,i=[];return o.forEach(({$:a,i:r})=>{if(!tt(a))return;let l=[];s.forEach((u,c)=>{l.push(...this._findMatches({key:u,value:a[c],searcher:n}))}),l.length&&i.push({idx:r,item:a,matches:l})}),i}_findMatches({key:t,value:n,searcher:s}){if(!tt(n))return[];let o=[];if(jt(n))n.forEach(({v:i,i:a,n:r})=>{if(!tt(i))return;const{isMatch:l,score:u,indices:c}=s.searchIn(i);l&&o.push({score:u,key:t,value:i,idx:a,norm:r,indices:c})});else{const{v:i,n:a}=n,{isMatch:r,score:l,indices:u}=s.searchIn(i);r&&o.push({score:l,key:t,value:i,norm:a,indices:u})}return o}}jn.version="7.1.0";jn.createIndex=Zc;jn.parseIndex=Qb;jn.config=z;jn.parseQuery=su;pA(dA);const ou=JSON.parse('[{"companyShortName":"大數軟體","companyName":"大數軟體有限公司","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","websiteUrl":"https://largitdata.com/","solutionNames":["InfoMiner 即時輿情分析平台","RAGi 企業 AI 決策平台","AIMochi（語音轉文字／會議逐字稿與字幕）"],"logoFileName":"大數軟體.png"},{"companyShortName":"用益網路科技","companyName":"用益網路科技股份有限公司","companyIntro":"metabiz自成立以來，始終專注於【智慧科技 / 會員系統】領域，致力為客戶提供最具價值的創新解決方案。我們秉持「務實應用、互利共益」的核心理念，將深厚的技術底蘊與市場需求完美結合，打造出優質的牌會員管理系統。\\n\\n憑藉著專業的團隊與敏銳的市場洞察，metabiz不僅能快速回應產業變化，更以【客製化服務 / 高效能技術】作為核心優勢，成功協助眾多企業突破【數位轉型 / 營運效能】的瓶頸，贏得了廣大客戶的高度信賴與口碑。\\n\\n展望未來，metabiz將持續精進技術與服務品質，積極拓展【新市場或新技術】。我們期盼成為業界最具影響力的創新夥伴，用最實際的行動為客戶創造最大效益，攜手共創永續發展的美好未來。","websiteUrl":"https://metabiz.tw/","solutionNames":["metabiz 企業 AI Agent 智腦方案"],"logoFileName":"用益網路科技.png"},{"companyShortName":"團薦科技","companyName":"團薦科技股份有限公司","companyIntro":"團薦科技成立於2023年，以AI技術打造智慧零售解決方案，專注於精準選址與門市營運分析。我們相信，選址不是終點，而是實體門市成功的起點；真正的價值，在於從展店決策到長期經營的全流程數據驅動管理。\\n「探點 TanDian Pro」整合商圈數據、人口結構與消費預測模型，協助零售品牌快速找到最佳地點、降低展店風險並提升營收表現。同時，進一步提供營運優化與門市體質分析，協助品牌打造可長可久的經營模式。\\n團薦不只是 SaaS（Software as a Service），更是 SaaS（Solution as a Service），以數據與洞察陪伴品牌實現永續成長。","websiteUrl":"https://home.tangent-plus.com","solutionNames":["「探點TanDian Pro－AI智能選址平台」賦能新北方案"],"logoFileName":"團薦科技.png"},{"companyShortName":"麟數據科技","companyName":"麟數據科技股份有限公司","companyIntro":"本公司成立於2016年，專注於AI數據科技（AI Data Technology），致力於透過先進數據技術與人工智慧，協助企業提升數據應用能力與決策效率。公司打造多元創新的SaaS平台，核心能力涵蓋數據蒐集、清洗、治理至應用的完整流程，協助企業將數據轉化為可行的商業洞察。\\n\\n透過數據整合與AI分析能力，我們協助品牌建立以數據為核心的營運模式，並打造自有數據產品與解決方案（如 Insighta360°），應用於CRM、精準行銷、廣告投放與消費者行為分析等場景，幫助企業即時掌握市場動態並提升決策效率。\\n\\n目前服務產業橫跨零售、電商、食品、汽車、金融等領域，協助企業深化顧客理解、優化行銷策略，並以更高效率與更低成本創造商業價值。\\n\\n長期目標為打造企業級數據中台與AI應用生態，促進數據資產化與跨場域應用。","websiteUrl":"https://www.lndata.com","solutionNames":["Insighta{360°}"],"logoFileName":"麟數據科技.png"},{"companyShortName":"元盛生醫電子","companyName":"元盛生醫電子股份有限公司","companyIntro":"全球第一個 AI 合規平台，採用NVIDIA BioNeMo技術，從原料到報告、從法規風險到數位追蹤，一次完成，全程精準高效!我們致力於為美妝產業提供前沿的人工智能解決方案，以重新定義保養品的數位使用體驗。我們團隊擁有專業的AI專家和技術專家，致力於整合創新科技，將科學、安全和效率完美結合，dermaGPT提供安全透明的成分資訊與配方功效的驗證。我們以AI驅動的化妝品安全評估系統（CPSR）利用強大的算法和累積全球千萬筆的資料庫，迅速、準確地評估化妝品成分的安全性。我們的目標是通過技術創新，幫助企業確保其產品遵守最嚴格的法規要求，同時提升消費者對產品功效與安全的信心。","websiteUrl":"https://dermagpt.com/hant/home/","solutionNames":["AI PIF生成與Agent管理系統"],"logoFileName":"元盛生醫電子.png"},{"companyShortName":"台聚管理顧問","companyName":"台聚管理顧問股份有限公司","companyIntro":"台聚集團為因應多元化經營及未來組織發展需要，於九十年三月十六日成立台聚管理顧問公司，統籌提供集團各關係企業之人資、員工事務、財務、會計、資訊、採購、關務、授信、稽核、 法務與股務等共同性事務之資源整合與規劃管理服務，俾使各公司更能專注在產品經營與開發，提升營運整體綜效。","websiteUrl":"","solutionNames":["IVA/PPE 智能影像分析系統"],"logoFileName":"台聚管理顧問.png"},{"companyShortName":"有創科技","companyName":"有創科技股份有限公司","companyIntro":"有創公司具備大型導覽、藍芽定位、ERP等平台設計能力，且獲得數發部人工智慧行業應用能力登錄證書。並且承接許多政府單位、民間企業等開發專案，具備豐富系統開發經驗。","websiteUrl":"","solutionNames":["空品平台系統"],"logoFileName":"有創科技.png"},{"companyShortName":"背景模式","companyName":"背景模式股份有限公司","companyIntro":"在數位轉型的浪潮中，我們致力於成為企業最可靠的數位轉型推手。我們協助各產業開發量身設計的數位化工具，將複雜的流程化繁為簡，實質提升企業及產業效率升級。\\n而我們更在「企業健康職場」領域深耕多年。憑藉著與中部專業臨場服務單位長達一年以上的共同研發，我們針對臨場服務開發出專屬的數位化平台，大幅增強企業對員工健康照護的關懷深度。目前，這套系統已成功導入上市公司與中部指標型醫療院所，透過精準的數據管理，讓健康服務更具感溫與效率。","websiteUrl":"https://bgmotion.com.tw/","solutionNames":["APIS 臨場服務員工健康管理系統＿新北優惠方案"],"logoFileName":"背景模式.png"},{"companyShortName":"滿拓科技","companyName":"滿拓科技股份有限公司","companyIntro":"滿拓科技致力於提供領先市場的「落地式 GenAI」一站式服務。憑藉獨家RAG技術與具備任務執行能力的 AI Agent，並結合高度自動化的 LLM 訓練流程，我們協助企業在確保資料隱私的前提下，快速建構專屬領域AI應用，實現從「資訊檢索」到「自主協作」的AI數位轉型。\\n\\n\\n核心產品：\\n•Document Expert：企業級AI文件智能檢索問答平台。結合 RAG 與 AI Agent 技術，除精準檢索內部資料外，更具備自主查詢外部資訊與自動化報告協作能力，能夠串接多方資訊並產出成果，直擊企業辦公痛點。\\n•FinetuneX：專為模型精煉設計的工具。透過Data Expert進行高品質數據擴增與精煉，並結合Finetune Expert平台，協助企業打造最貼合業務情境的專屬AI模型。","websiteUrl":"https://www.deepmentor.ai/","solutionNames":["Document Expert (企業級AI文件智能檢索問答平台)"],"logoFileName":"滿拓科技.png"},{"companyShortName":"睿思創新","companyName":"睿思創新股份有限公司","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","websiteUrl":"https://www.reas.com.tw/","solutionNames":["CROSSBOT AI Agent Platform Basic 基礎版 (入門)","CROSSBOT AI Agent Platform – Pro 專業版","CROSSBOT AI Agent Platform – Enterprise 企業旗艦版"],"logoFileName":"睿思創新.png"},{"companyShortName":"網際智慧","companyName":"網際智慧股份有限公司","companyIntro":"網際智慧（IQT.AI）致力於建構「可信任、有溫度」的 AI Agent 體系，橫跨文字輸入、聲音表達、影音創作與法遵合規四大領域。我們屢獲金鼎獎、經濟部智慧創新大賞 Best AI Awards、台灣人工智慧協會 AI Award Best Solutions、數位發展部數位產業署－AI應用鬥智賽、AI TAIWAN 創新商務獎等頂尖殊榮。旗下主力包含：①長期穩居市佔領先的－text.tw 自然輸入法、②賦予 AI 擬真人聲的－VoAI.AI 絕好聲創，③確保企業治理與合規的－XComply.AI快合規。網際智慧不只是技術專家，更是企業數位轉型最值得信賴的 AI 夥伴！","websiteUrl":"www.iqt.ai","solutionNames":["快合規 – AI廣告違規風險檢核與修正建議服務平台 (https://xcomply.ai)","絕好聲創VoAI聲音創造所 - 超擬真AI語音與短影音生成服務 (https://voai.ai)"],"logoFileName":"網際智慧.png"},{"companyShortName":"聚典資訊","companyName":"聚典資訊股份有限公司","companyIntro":"聚典資訊是數據價值的重述者。創立於 2019 年 3 月，由頂尖工程與專業經理人組成。深受超過300家客戶信賴，榮獲20多項獎項肯定。並擁有 ISO27001 資訊安全管理認證，以及數位發展部之 AI 技術服務能量登錄官方認證。\\n我們整合AI、AIoT與系統開發，為製造業與零售業提供智慧解決方案，包含智能生產線、ESG轉型、AI分群行銷、智能客服，以及客製化方案。導入聚典的AI解決方案，您的企業將在資料科學的支持下持續增長。","websiteUrl":"https://retailingdata.com.tw/","solutionNames":["聚典資訊ｘ新北企業限定優惠：AI智慧轉型零門檻啟動方案"],"logoFileName":"聚典資訊.png"},{"companyShortName":"臺灣通用紡織科技","companyName":"臺灣通用紡織科技股份有限公司","companyIntro":"Frontier 以 TextileCloud 為核心產品，提供一站式數位布料管理解決方案，整合 2D / 3D 布料影像、規格資訊與永續數據。平台涵蓋數位資產管理（DAM）、數位產品建置（DPC）流程與永續數據模組，協助企業集中管理布料資料、快速生成具物理參數與 AI 擬真效果的 3D Material，並可對接主流 3D 設計軟體。同時內建 LCA 架構，提供碳排與水耗等環境指標，支援 DPP 與 ESG 需求。相較傳統流程，無需額外硬體投資，可降低樣品寄送成本、縮短開發時程，強化品牌與供應鏈間的即時協作效率。","websiteUrl":"https://www.frontier.cool/","solutionNames":["TextileCloud™ - AI 驅動的企業級材料管理解決方案-Annual Package -Basic"],"logoFileName":"臺灣通用紡織科技.png"},{"companyShortName":"慧穩科技","companyName":"慧穩科技股份有限公司","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","websiteUrl":"https://aiwin.com.tw/","solutionNames":["WinChat－各產業應用的大語言模型應用平台","AIWInOps—各產業應用的影像型AI訓練平台","NumOps－各產業應用的數據型AI訓練平台","WinEdge－各產業應用的AI邊緣運算推論系統"],"logoFileName":"慧穩科技.png"},{"companyShortName":"曜夆科技","companyName":"曜夆科技股份有限公司","companyIntro":"直接驅動營收成長與營運效率提升。月租 5,000 元起，免高額建置費，最快數日導入、模組架構、彈性擴充。由 CGSI（中華寰宇整合）提供整合規劃、客製開發與企業級部署，確保穩定上線與長期營運，轉化企業既有圖文資料為「可成交、可預測、可優化」的 AI 生產力系統：\\n．AI 商機成交助理：整合官網、LINE、電子表單訊息，LLM判讀客戶意圖與成交潛力分級，提供預期方案建議並可生成業務人員跟進摘要，打造24 小時接單機制\\n．AI CRM／ERP／MES：訂單自動轉工單，串聯庫存與產能，提供交期預估與異常預警，並整合銷售與產線數據，實現跨部門資訊整合；具備近零硬體建置成本、無須額外學習曲線與AI數據分析能力\\n\\n立即行動：留下您的需求，享免費 AI 導入諮詢，快速導入最適解決方案。","websiteUrl":"www.ch-si.com","solutionNames":["AI對話型服務整合方案(產品名稱：DocInsight AI)"],"logoFileName":"曜夆科技.png"},{"companyShortName":"璽樂科技","companyName":"璽樂科技股份有限公司","companyIntro":"璽樂科技專注營建與公共工程場域，提供結合 AI 影像、IoT 感測與雲端管理的一站式智慧工安平台。系統涵蓋人員出入、危險區域管制、環境監測、異常警示與影像留存等功能，以模組化設計對應不同規模工地，並支援多工地雲端監控與權限管理，讓總公司可即時掌握各工地風險與狀態，同時自動產出符合金安獎、金質獎與勞檢需求的報表，降低人工整理成本。","websiteUrl":"https://idaka.io/","solutionNames":["AI影片生成與教育訓練","AI影像缺失辨識與報告自動化方案"],"logoFileName":"璽樂科技.png"},{"companyShortName":"易晨智能","companyName":"易晨智能股份有限公司","companyIntro":"易晨智能將語音辨識、自然語言分析，應用於應用在智慧教育以及智慧醫療做跨領域結合，運用機器學習、深度學習、資料探勘演算法，讓用戶有所感受。重點發展的是語音辨識以及自然語言文字分析處理以及數據分析，今年我們重點發展的項目是AI教育以及AI 醫護交班逐字稿紀錄。AI教育解決中英文口說問題，用AI進行評分及對話；AI 逐字稿交班紀錄解決醫護人員人力不足以及可即時性逐字記錄並進行摘要分類。","websiteUrl":"ez-ai.com.tw","solutionNames":["語音辨識語言學習及逐字稿"],"logoFileName":"易晨智能.png"},{"companyShortName":"創造智能科技","companyName":"創造智能科技股份有限公司","companyIntro":"創造智能科技是一家AI Martech新創公司，專注於 AI行銷科技、LINE CRM、AI客服機器人與 AI虛擬人應用，致力於協助企業將「流量」真正轉化為「可經營的會員與數據資產」。\\n結合影音內容、行銷科技與AI應用實戰經驗，打造可快速導入、可規模化、可量化成效的AI解決方案，客戶涵蓋政府單位、大型企業、品牌客戶與文化觀光場域。\\n主要商品/服務項目：\\n•\\tLINE CRM × AI客服：協助企業建構可分析語意、貼標分眾、導流轉換的LINE官方帳營運系統。\\n•\\tAI虛擬人與互動導覽：應用於官網、line、FB message、活動、展覽、品牌互動與智慧導覽場域。\\n•\\tAIGC影音與廣告製作：加速影音內容產製，降低成本、提升產量與品質。\\n•\\tAI落地應用顧問服務：從場景設計、互動策略到實際成效落地。","websiteUrl":"https://www.aicreate360.com/","solutionNames":["AI Sales 智能銷售助手","AiTAGO Line CRM"],"logoFileName":"創造智能科技.png"},{"companyShortName":"緯謙科技","companyName":"緯謙科技股份有限公司","companyIntro":"緯謙科技 (WiAdvance) 為緯創集團旗下子公司，作為創新的雲端服務供應商，提供以Cloud、AI、Data為核心的一站式服務，，擁有強大的雲端技術團隊與豐富的場域落地經驗，深耕智慧製造、智慧醫療、智慧城市、智慧農業/零售等垂直產業應用，專注以雲端科技為企業打造數位轉型的強韌實力。","websiteUrl":"www.wiadvance.com","solutionNames":["WiKMS 企業知識管理助手"],"logoFileName":"緯謙科技.png"},{"companyShortName":"環球睿視","companyName":"環球睿視股份有限公司","companyIntro":"環球睿視 (Ubestream) 成立於 2016 年，是專注於語音人工智慧與智慧語音技術的深科技 (Deep-tech) 領導廠商，亦是首家掛牌創櫃板的 AI 創新企業 (TPEx 7587)。我們的核心優勢在於自主研發的全棧式 AI 語意語音演算法，深度整合語音識別 (STT)、語音生成 (TTS)、自然語言理解 (NLU) 與文本分析 (NLP)。憑藉卓越的技術架構，我們能將 AI 模型部署於雲端、邊緣端 (Edge)及嵌入式晶片，在無需網路連接的環境下，實現安全、低延遲且具備強大數據隱私保護的即時人機互動。旗下旗艦產品「AIspeakin 同步口譯代理人」運用串流式全雙工 (Streaming Duplex) 與 GenAI 技術，具備上下文自動校正與語種自動辨識功能，達成高準確、秒速級的雙向翻譯。已成功進駐台灣四大國際機場，提供國門級的多語服務，並廣泛應用於影音轉寫、會議紀錄及同步口譯等場域。目前已將事業版圖擴張至美國、日本、新加坡等全球市場，持續為智慧城市、交通、金融、旅遊與公共服務領域提供具高度擴展性的語音 AI 解決方案，實現 24 小時免接觸、高效率的人機協作未來","websiteUrl":"https://ubestream.com/","solutionNames":["AIspeakin – AI即時/非即時語音辨識/翻譯/語譯服務"],"logoFileName":"環球睿視.png"},{"companyShortName":"凌松科技","companyName":"凌松科技有限公司","companyIntro":"凌松科技專注於健康科技整合，結合資訊、運動科學、公共衛生與人工智慧，打造 AI Coach智慧健康生態系。平台整合銀髮族、運動、營養、認知、感官與生活數據，應用於高齡城市、智慧住宅及健康促進服務。多年來協助政府、企業、學校與社區建構智慧健康照護系統，並屢獲國內獎項及聯合國教科文組織（UNESCO）專案肯定。\\n團隊擁有多項台灣與國際專利，技術涵蓋AIoT感測、生醫系統、穿戴裝置、運動訓練 及生成式AI互動平台。核心產品AI Coach平台採用多模態人工智慧（Multimodal AI），整合文字、圖像、語音、影片與感測數據，模擬人類教練的感知與判斷，提供即時、個人化、高互動性的訓練與健康引導，並協助高齡與衰弱族群進行失能預防、健康促進及預測分析。\\n以「技術驅動人機協作」為願景，結合具身智慧（Embodied AI），推動SDGs與 ESG永續發展，引領多模態AI跨入人機互動新世代，成為智慧健康產業的創新推手。","websiteUrl":"https://www.synergy.tw/","solutionNames":["AI Coach 功能性體適能評估"],"logoFileName":"凌松科技.png"},{"companyShortName":"健康盟","companyName":"健康盟股份有限公司","companyIntro":"健康盟公司致力於打造結合數位科技與醫療專業的整合型健康服務平台，專注於牙科與基層醫療數位轉型解決方案。我們以「數位賦能、專業升級、品牌成長」為核心理念，開發DigiMEd數位醫療系統，整合患者管理、數位衛教、療程說明與數位手術同意書簽署流程，協助診所提升溝通效率與醫病信任，同時強化內部管理與營運績效。\\n\\n目前健康盟已與全台超過700間牙醫診所合作，累積豐富實務經驗與成功案例，成為牙科數位轉型的重要推手。我們透過影音內容製作、數位行銷策略與專業教育訓練，協助醫療院所建立專業品牌形象，優化患者體驗並提升療程轉化率。\\n\\n健康盟相信，醫療不只是治療，更是溝通與信任的建立。未來將持續深化智慧醫療應用，推動數位醫療標準化，成為診所數位轉型與品牌升級最值得信賴的長期合作夥伴。","websiteUrl":"https://www.healthleaguex.com/","solutionNames":["健康盟：重塑牙科營運的智慧引擎"],"logoFileName":"健康盟.png"},{"companyShortName":"開源智造","companyName":"開源智造股份有限公司","companyIntro":"開源智造（OpenAIFab）深耕 AI 醫療與智能照護，創辦人因親自照顧家屬的切身經歷，深刻體會鼻胃管灌食的風險與壓力，進而自主研發「佳灌安 FeedSafe」。我們致力將尖端 AI 技術落地，提供全方位居家醫療物聯網解決方案。\\n佳灌安 FeedSafe 聚焦「鼻胃管灌食安全」，回應流程繁瑣易被省略、人力不足無法全面覆蓋的雙重痛點。結合自主研發的 AI 聲紋辨識與藍牙數位聽診器，將繁瑣的確認流程轉為直覺的安全機制，大幅降低非專業者的操作門檻，減輕家庭照顧負擔。\\n我們期盼賦能居護所、長照機構與醫療院所，無縫銜接居家照護，成為守護醫病與家庭最堅實的科技後盾，兼具產業效益與社會公益價值。","websiteUrl":"https://www.facebook.com/openaifab/?locale=zh_TW","solutionNames":["居家營養照護AI工具導入- 佳灌安"],"logoFileName":"開源智造.png"},{"companyShortName":"艾利思科技","companyName":"艾利思科技股份有限公司","companyIntro":"艾利思科技成立於 2018 年，由專業的全端工程師團隊組成，致力於以「化繁為簡，驅動企業未來」為核心理念，協助企業有效落實數位轉型。公司從企業客製化軟體服務出發，累積豐富跨產業實戰經驗，服務客戶超過 150 家，涵蓋金融、製造、零售、能源及政府公共工程等領域。\\n\\n艾利思科技近年專注於各類型場域管理，並推出Aura智慧感知系統，除了知名的精準定位系統與多元的環境感測器解決方案外，更可結合影像 AI 與環境數據分析，提供即時、可解釋且可落地的場域智慧管理能力，協助企業預防風險、保障人員安全與關鍵資產，成為企業長期信賴的端到端數位轉型夥伴。","websiteUrl":"https://www.ellis.tw","solutionNames":["Aura 智慧影像及場域感知管理系統"],"logoFileName":"艾利思科技.png"},{"companyShortName":"城智科技","companyName":"城智科技股份有限公司","companyIntro":"AIRA城智科技是由逾20年AI影像處理經驗的團隊所組成，專注於AI領域的研究與開發。AIRA的使命是採用先進的人臉、人形與物件辨識技術，並整合於影像管理系統，開發AI+IOT+Cloud等多種整合性應用方案。\\n於2020年榮獲 Intel Gold Partner 的殊榮，並與NVIDIA, Network Optix, AWS展開深度技術合作。解決方案廣泛應用於企業、智慧建築、工廠、工地管理與零售等場域，優化場域安全與管理效率。","websiteUrl":"https://www.aira.com.tw/","solutionNames":["airaTrack-全場域人臉追蹤解決方案"],"logoFileName":"城智科技.png"},{"companyShortName":"訊連科技","companyName":"訊連科技股份有限公司","companyIntro":"訊連科技（5203.TW）創立於 1996 年，為全球首屈一指的多媒體影音軟體及數位創意編輯軟體服務及 AI 臉部辨識、人型辨識技術開發商。訊連科技的產品及服務涵蓋數位影片及圖像內容創作、多媒體影音播放、視訊會議及直播與遠距教學、手機行動應用程式、AI 人臉辨識等多樣化解決方案，滿足消費性、商務、教育等跨領域多媒體應用。旗下威力導演、相片大師、PowerDVD 等電腦軟體和行動 App，透過零售、訂閱式服務及預載等方式，提供個人電腦品牌多樣化應用軟體。 \\n\\n訊連科技深耕 AI 人工智慧於創意內容影片圖像編輯，臉部辨識及人型辨識，透過深度學習法開發 FaceMe® AI 臉部辨識引擎，提供智慧安控、智慧差勤、智慧金融、智慧零售等垂直市場應用，卓越的辨識準確度，屢次於全球知名 NIST 人臉辨識測試獲得名列前茅佳績。","websiteUrl":"https://tw.cyberlink.com/faceme","solutionNames":["FaceMe Security 安控門禁解決方案"],"logoFileName":"訊連科技.png"},{"companyShortName":"雲義科技","companyName":"雲義科技股份有限公司","companyIntro":"Unipattern 雲義科技成立於2001年，公司創立以軟體研發為主，發展Data Mining演算法的核心技術，投入智慧型應用軟體產業。\\nUnipicket 視衛通是雲義科技整合影像辨識模型及演算法的AI影像辨識即時通報系統，使用市場通用的RTSP協定影像串流辨識監視器畫面內的多種異常事件並即時通報，如此可在事件發生即時或初期就辨識通報，縮短通報時間並降低災害擴大，整合通報介面可整合其他IOT感測與VMS/CMS系統，提高整體場域安全。\\nUnipicket視衛通可加強場域安全，已有不同公民營單位採用，為共同供應契約產品，參與總統盃黑克松競賽於2022年取得卓越團隊及2025年AI應用公共服務特別獎。","websiteUrl":"https://www.unipattern.com/","solutionNames":["Unipicket AI安防"],"logoFileName":"雲義科技.png"},{"companyShortName":"漫話科技","companyName":"漫話科技股份有限公司","companyIntro":"本方案為「兒少互動敘事與情緒學習AI服務平台」，專為教育與學習服務型企業設計，協助快速導入結合遊戲化互動、動畫式敘事與情緒紀錄之AI服務能力，減少教師、治療師於課前備課與課後進行情緒觀察整理與家長說明所需投入的時間，包括補教、幼教、安親、早療、特教等兒童教育服務或早療相關業者用於團課或客戶（家長）加值服務。系統包含管理後台、帳號權限、使用紀錄與成效摘要，支援企業快速導入、擴點與後續營運，並提供導入說明與技術支援，協助企業完成AI化升級。","websiteUrl":"https://www.mangachat.com","solutionNames":["兒少互動敘事與情緒學習AI服務平台"],"logoFileName":"漫話科技.png"},{"companyShortName":"亞博福爾摩沙","companyName":"亞博福爾摩沙有限公司","companyIntro":"亞博福爾摩沙打造全通路對話式AI客服系統，結合A.I.Voicebot\\n(電話語音機器人)、A.I.Ambassador(智能服務大使)、A.I. Agent、A.I.Chatbot(聊天機器人)，覆蓋語音、文字與實體互動，提供無縫且即時的智慧客服體驗。具備超過20種語言、多語夾雜辨識)、多口音辨識，可支援跨文化、跨區域應用。具備多輪對話、記憶用戶偏好、意圖辨識等進階能力，提升服務效率與使用者滿意度。平台亦可彈性整合企業內部系統，進行數據蒐集與分析，實現智慧化的客服轉型。","websiteUrl":"https://www.asiabots.com.tw/","solutionNames":["A.I. Chatbot(聊天機器人）","A.I. Voicebot(聊天機器人）"],"logoFileName":"亞博福爾摩沙.png"},{"companyShortName":"社群洞察","companyName":"社群洞察股份有限公司","companyIntro":"社群洞察股份有限公司秉持「Work Smarter with GPT」理念，致力以生成式AI協助企業與政府解決知識傳遞、任務處理與品牌經營中的效率與溝通痛點。我們提供成熟的AI Agent解決方案，協助組織建立專屬任務助手，實現低門檻導入、無痛轉型與智慧化升級。旗下無程式碼平台 WebGUID.ai，讓企業以最低成本將AI整合至官網與社群渠道，即使非技術人員亦可快速建置AI應用，優化服務流程、提升互動體驗，同時大幅降低營運與客服負擔。透過AI協作機制，我們協助組織將知識轉化為可持續運作的智慧服務能力，真正落實以AI驅動成長與創新。","websiteUrl":"https://webguid.ai/","solutionNames":["WebGUID網路指南針"],"logoFileName":"社群洞察.png"},{"companyShortName":"凌典科技","companyName":"凌典科技有限公司","companyIntro":"凌典科技有限公司，104年成立，資本額500萬。\\n 本公司致力於營運雲端預約系統服務、自動化工具推廣、第三方金流代辦、數位銷售知識教學。具備多重角色身份。\\n(1) 雲端系統服務商：本公司Saas系統「TinyBook開店系統」至今已服務超過400位品牌客戶，協助其將營運流程線上自動化，包括相聲瓦舍、雲門舞集、台塑生醫、BenQ虹韻助聽器等知名業者。\\n(2) 第三方金流經銷商：為Line Pay、街口支付、藍新金流、TapPay、PChome支付連等5間第三方金流公司授權經銷商。以及藍新電子發票經銷商。\\n(3) 政府數位轉型專案 系統服務商&顧問：\\n114年 經濟部 產業AI導入應用輔導 系統服務商\\n114年 經濟部 推廣服務業上雲補助 系統服務商\\n114年 台北市「店家數位基礎導入計畫」 系統服務商\\n114年 台北市 台北數位企業發展中心 數位轉型顧問","websiteUrl":"https://tinybot.cc/","solutionNames":["AI全通路社群客服&預約系統"],"logoFileName":"凌典科技.png"},{"companyShortName":"穎諾科技","companyName":"穎諾科技股份有限公司","companyIntro":"穎諾科技核心產品為 OpsCentral 雲端全通路客服系統，協助企業整合電話、LINE、Facebook、官網與即時通訊等多元管道，集中管理顧客互動紀錄與服務流程，打造一致且高效率的客戶體驗。\\n\\n公司以雲端聯絡中心架構為基礎，結合生成式 AI 與自然語言處理技術，協助企業建置智慧客服與自動化回覆機制，提升回應速度與服務品質，同時降低人力成本與管理負擔。\\n\\n系統支援企業級權限與資安機制，並部署於國內雲端機房，導入門檻低且具高度擴充彈性，特別適合中小企業穩健推動客服數位化與營運升級，強化整體競爭力。","websiteUrl":"https://www.innovax.systems/tw/","solutionNames":["OpsCentral｜企業級 GenAI 全通路聯絡中心 SaaS 方案"],"logoFileName":"穎諾科技.png"},{"companyShortName":"傑騰智能","companyName":"傑騰智能股份有限公司","companyIntro":"傑騰智能（TAO Info）專注於大數據分析與人工智慧技術，深耕製造業資料分析領域，協助企業構建智慧化生態系統。公司通過自主研發的AI演算法與關鍵分析模組，優化商業決策、強化競爭優勢。自成立以來，多次獲政府與國際企業認可。近期聚焦解決製造、電子與建築工程領域中 SVG 設計圖高度仰賴人工解析所造成的效率與成本問題，運用 AI 進行 SVG 圖形結構解析與語義理解，將向量圖形、圖層、標註與元件資訊自動轉換為製造與工程系統可用的指令與資料格式。透過建立通用解析框架，可加速設計到生產流程，降低人工作業負擔，並將專業經驗內化為可重複使用的數位能力，協助產業提升自動化程度、良率與整體競爭力。","websiteUrl":"","solutionNames":["企業專業文件查詢知識管理及專業圖形AI解析"],"logoFileName":"傑騰智能.png"},{"companyShortName":"摩絡人工智慧","companyName":"摩絡人工智慧股份有限公司","companyIntro":"Morale AI 建構專為智慧製造打造的領域專屬 AI Agent 平台，提供可擴展、可解釋且可落地的決策支援能力。Morale AI platform以領域專用 LLM 結合機器學習與資料科學，串接 MES/ERP/設備與品質資料，打造可稽核、可解釋的 Agent 工作流；提供異常預警、良率分析、製程最佳化與節能減廢決策支援，支援 On-prem / Cloud / Hybrid 快速部署。","websiteUrl":"https://moraleai.com/","solutionNames":["Morale AI Agentic Platform 領域專用大型語言模型"],"logoFileName":"摩絡人工智慧.png"},{"companyShortName":"艾比互動娛樂","companyName":"艾比互動娛樂有限公司","companyIntro":"艾比互動娛樂有限公司 致力於用 AI 讓每家企業都能擁有世界級的資安防護能力。\\n我們的核心產品 SOC.cool 是一套 AI 驅動的資安監控平台，讓企業無需自建 SOC 團隊，即可擁有 24/7 全天候威脅偵測與自動化回應能力。\\n解決三大痛點：\\n- 資安人才難尋：AI 自動分析告警、研判風險並執行回應劇本，大幅降低對專業資安人力的依賴，1 人即可掌控全局\\n- 預算有限效益要最大：以 SaaS 訂閱制取代高額自建方案，將資源集中在核心業務發展，資安交給 AI 守護\\n- 合規要求日益嚴格：內建 ISO 27001、SOC 2 等合規報告模板，一鍵產出稽核文件，從容應對客戶與法規要求\\n平台支援 Windows、Linux、macOS 全平台，10 分鐘內完成部署即開始防護。同時提供經銷夥伴架構，IT 服務商可快速以自有品牌為客戶提供託管式資安服務（MSSP）。\\n 讓每家企業都能用 AI 守護數位資產，是我們的使命。","websiteUrl":"https://soc.cool/","solutionNames":["SOC.cool AI資安防護企業包 - 新北產業AI化輔導計畫限定版"],"logoFileName":"艾比互動娛樂.png"},{"companyShortName":"華苓科技","companyName":"華苓科技股份有限公司","companyIntro":"華苓科技成立於1999年，為中大型商務軟體公司，以企業流程管理系統著稱，面對大數據、社群、人工智能、雲計算、移動裝置、物聯網、區塊鏈等數位科技共同將世界推向工業4.0與數位經濟時代。華苓遂以「賦能智慧、願景無限」為願景，推出「智慧系統」以達成融合數位科技與人、系統、智能物件的萬物協同，賦與企業轉型能力以取得競爭優勢。","websiteUrl":"https://www.flowring.com/","solutionNames":["Secorion 資安獵捕平台"],"logoFileName":"華苓科技.png"},{"companyShortName":"極風雲創","companyName":"極風雲創股份有限公司","companyIntro":"極風雲創 Twister5 (股票代碼 7826 )，是 AI 驅動的全域安全與 AI 治理平台供應商，專注協助企業在雲端與生成式 AI 時代，建立安全、可控且可持續的防護架構。\\n我們結合國際頂尖資安品牌（如 Cloudflare、Cato Networks、Palo Alto Networks）與自研平台 Across，為企業提供從網路、應用到 AI 使用層的整合式全域安全解決方案。","websiteUrl":"https://www.twister5.com.tw/","solutionNames":["Across智能資安維運管理平台"],"logoFileName":"極風雲創.png"},{"companyShortName":"卡菲卡金融科技","companyName":"卡菲卡金融科技股份有限公司","companyIntro":"卡菲卡金融科技致力於驅動企業的「智能」與「綠色」雙軸轉型。我們自主研發的 AI 模型「費思」，深度整合財務審計的嚴謹性與環境工程邏輯，是業界領先的綠色金融智慧核心。\\n\\n透過 AI 自動化識別與分類，費思能精確勾稽企業每一筆財務支出與其對應的碳足跡，打破資訊孤島，讓財務報表與減碳績效實現無縫接軌。這不僅大幅提升了溫室氣體盤查的效率，更能協助企業精準預測並節約碳費支出。\\n\\n我們不只是技術提供者，更是企業邁向淨零碳排最值得信賴的策略夥伴。從智慧審計到淨零輔導，卡菲卡協助您將複雜的環境數據轉化為實質的競爭優勢，讓永續經營成為企業獲利的嶄新動力。","websiteUrl":"https://isunfa.com","solutionNames":["新北企業淨零智能會計賦能專案"],"logoFileName":"卡菲卡金融科技.png"},{"companyShortName":"拉普拉斯智能科技","companyName":"拉普拉斯智能科技股份有限公司","companyIntro":"拉普拉斯智能科技推出 Akashic 多代理 AI 平台，結合通用報告生成、AI 助理與可治理的知識管理能力，為用戶提供高效率且可擴充的智慧內容工作流。平台透過可治理模板引擎、多代理協作與跨系統整合，協助快速產出高品質報告並提升作業效率，支援從日常到專業場景的多元應用。","websiteUrl":"https://www.laplaceai.co/","solutionNames":["Akashic 多代理 AI 平台"],"logoFileName":"拉普拉斯智能科技.png"},{"companyShortName":"虎智科技","companyName":"虎智科技股份有限公司","companyIntro":"虎智科技經校內創業比賽第一名為臺科大傑出校友聯誼會攜手創新育成中心， 投資成立的創業團隊。以協助任何公司都可以輕鬆導入人工智慧。\\n致力以博碩士專業團隊、結盟傑出校友資源、臺科大教授顧問研發資源三大優勢發展 Local GPT 硬體導入、 AI 服務啟動、GPU 服務器資源管理，協助產業從教育訓練開始、評估／導入 AI 產業解決方案、資訊安全，確保 AI 綜效最大化與成功。","websiteUrl":"https://www.tigerai.info/","solutionNames":["以 n8n 打造 AI 智能助理-導入 no code 自動化流程運用"],"logoFileName":"虎智科技.png"},{"companyShortName":"凱鈿行動科技","companyName":"凱鈿行動科技股份有限公司","companyIntro":"KDAN（凱鈿）是數位賦能的領導品牌，專注於提升企業跨平台文件交流效率，推動數據驅動決策，打造無縫接軌的工作流程體驗，並提供多元化的私有化部署服務，強化企業敏捷性，釋放無限商機。","websiteUrl":"https://www.kdan.com/","solutionNames":["Intelligence Document Processing(IDP)"],"logoFileName":"凱鈿行動科技.png"},{"companyShortName":"肆時資訊設計","companyName":"肆時資訊設計有限公司","companyIntro":"肆時資訊設計有限公司自2019年成立以來，以資訊×服務設計為核心，專注於創新車輛產業數位管理，ReMo瑞摩智能雲端管理系統，結合工單數位化、顧客互動、法規遵循與供應鏈整合，打造全方位智慧生態系，協助機車行突破營運瓶頸，邁向數據化決策。公司具備豐富專案能量，曾執行深度高雄機車智慧產業整合計畫、數位雲服務研發補助計畫等，已推廣超過千家車行完成數位化導入，並導入 AI 技術提升維修管理效率。\\n在成果驗證上，榮獲交通部公路局第一屆資料創新應用競賽社會組創新獎；並受邀參與2024 Meet Taipei、2025國際中小企業博覽會、2025高雄智慧城市展等指標性展會。肆時資訊將持續以「降低導入門檻、放大工具槓桿、累積數據價值」為方向。","websiteUrl":"https://remo.tw/","solutionNames":["車輛產業AI店面管理解決方案"],"logoFileName":"肆時資訊設計.png"},{"companyShortName":"詮通電腦","companyName":"詮通電腦有限公司","companyIntro":"詮通電腦創立於2002年，深耕企業服務二十載，以深厚研發底蘊打造錢老闆雲端平台。「錢老闆」將系統轉化為您的「數位員工」，已協助數百家中小企業整合線上Ai網路開店、批發訂貨、門市POS系統，蝦皮電商整合，實現進銷存數據一站式管理，成功打通O2O銷售模式。\\n讓您在單一平台掌握各方銷售與即時庫存，徹底告別資訊破碎與混亂的理帳痛點。不只是處理訂單，這位員工更擅長財務管理，並自動為您整理應收付帳款核銷。並即時產出損益報表，讓您隨時掌握獲利狀況，進而透過數據做出精準決策。","websiteUrl":"https://www.moneyboss.com.tw/","solutionNames":["Ai網路開店+雲端POS+蝦皮整合+進銷存整合方案"],"logoFileName":"詮通電腦.png"},{"companyShortName":"睿力智能運動","companyName":"睿力智能運動有限公司","companyIntro":"睿力智能運動（ATTRAKFIT）深耕智慧運動科技，結合 IoT 與自動阻力演算法，推出智慧訓練車、外掛式虛擬騎乘升級模組、力量感測踏板等，協助家用與健身房精準化訓練。我們致力於讓運動科學與娛樂體驗無縫接軌，不僅提供硬體方案，更透過 AI 技術驅動數位轉型。\\n\\n在拓展業務過程中，我們深刻體會到產業的共同痛點：無論是通路商或製造商，都專注於產品銷售與製造本業，對於行銷推廣感到力不從心——聘請專職行銷人員成本高昂，外包又難以掌控品質，社群經營更是耗時費力。因此我們導入 AI 自動化行銷技術，不僅解決自身需求，更將這套系統服務化，協助同業夥伴以更低成本、更高效率進行多通路行銷與客戶開發。","websiteUrl":"attrakfit.com","solutionNames":["企業AI行銷獲客一站式解決方案"],"logoFileName":"睿力智能運動.png"},{"companyShortName":"數辰創藝科技","companyName":"數辰創藝科技股份有限公司","companyIntro":"數辰專注於 AI 軟體開發與數位解決方案，致力於為企業打造更高效、更智能的營運模式。我們的TeamSync 企業智能協作平台，結合 AI 聊天室與知識管理系統，重塑內部溝通模式，讓資訊流動更順暢、員工訓練更高效。我們亦運用 AI 技術精準鎮定目標客群，結合短影音、社群行銷與數位廣告代操，為品牌量身打造高效的市場拓展策略。透過 AI 創新與數據驅動的行銷策略，我們助力企業在競爭激烈的市場中脫穎而出。","websiteUrl":"https://shuchenai.com/","solutionNames":["TeamSync 企業AI 協作作業系統方案"],"logoFileName":"數辰創藝科技.png"}]'),AA={class:"page-hero"},yA={class:"container"},vA={class:"search-results"},IA={class:"sr-only",role:"status","aria-live":"polite"},EA={key:0,class:"search-hint"},_A={key:1,class:"search-hint"},xA={key:2,class:"result-list"},CA={class:"result-summary"},SA={__name:"SearchView",setup(e){const t=qe(""),n={OpeningHomeView:{title:"首頁",path:"/",keywords:"開始探索 開頭影片 skip 跑馬燈 輪播"},AboutView:{title:"關於計畫",path:"/about",keywords:"即刻申請 申請 計畫說明"},ScheduleView:{title:"計畫時程",path:"/schedule",keywords:"時程 報名 申請截止"},FAQView:{title:"FAQ",path:"/faq",keywords:"常見問題 補助 申請條件"},CategoriesIndexView:{title:"方案分類",path:"/categories",keywords:"AI方案分類 方案總覽"},AIMarketInsightView:{title:"AI市場洞察",path:"/categories/ai-market-insight"},AIEnterpriseOperationsView:{title:"AI企業營運管理",path:"/categories/ai-enterprise-operations"},AIAssistantView:{title:"AI助理",path:"/categories/ai-assistant"},AIVerticalIntegrationView:{title:"AI垂直整合方案",path:"/categories/ai-vertical-integration"},AIHomeCareView:{title:"AI居家照護",path:"/categories/ai-home-care"},AIContentCreationView:{title:"AI創作內容",path:"/categories/ai-content-creation"},AIIntelligentCustomerServiceView:{title:"AI智能客服",path:"/categories/ai-intelligent-customer-service"},AISmartManufacturingView:{title:"AI智慧製造",path:"/categories/ai-smart-manufacturing"},AIInformationSecurityView:{title:"AI資訊安全",path:"/categories/ai-information-security"},AIOperationAutomationView:{title:"AI營運流程自動化",path:"/categories/ai-operation-automation"},AIServiceSuppliersView:{title:"AI服務供應商",path:"/vendors",keywords:"供應商 企業 官網 logo"},ContactUsView:{title:"聯絡我們",path:"/contact-us",keywords:"聯絡 電話 信箱"},SearchView:{title:"搜尋",path:"/search",keywords:"站內搜尋 關鍵字查詢"}},s=Object.assign({"./AboutView.vue":gb,"./ContactUsView.vue":wb,"./FAQView.vue":bb,"./OpeningHomeView.vue":Ab,"./ScheduleView.vue":yb,"./SiteMapView.vue":vb,"./categories/AIAssistantView.vue":Ib,"./categories/AIContentCreationView.vue":Eb,"./categories/AIEnterpriseOperationsView.vue":_b,"./categories/AIHomeCareView.vue":xb,"./categories/AIInformationSecurityView.vue":Cb,"./categories/AIIntelligentCustomerServiceView.vue":Sb,"./categories/AIMarketInsightView.vue":Bb,"./categories/AIOperationAutomationView.vue":Nb,"./categories/AISmartManufacturingView.vue":Pb,"./categories/AIVerticalIntegrationView.vue":kb,"./categories/CategoriesIndexView.vue":Tb,"./vendors/AIServiceSuppliersView.vue":Fb}),o=b=>{const T=b.match(/<template>([\s\S]*?)<\/template>/i);return T?T[1]:b},i=b=>[...b.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)].map(U=>U[1]||"").join(" "),a=b=>{const T=[],U=/(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g;let $=U.exec(b);for(;$;){const q=($[2]||"").replace(/\\n/g," ").replace(/\\r/g," ").replace(/\\t/g," ").replace(/\\"/g,'"').replace(/\\'/g,"'").replace(/\s+/g," ").trim();q.length>=2&&T.push(q),$=U.exec(b)}return T.join(" ")},r=b=>b.replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<[^>]+>/g," ").replace(/{{[\s\S]*?}}/g," ").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim(),l=b=>b.split("/").pop().replace(".vue",""),u=gs.map(b=>b.label).join(" "),c=ou.map(b=>[b.companyName,b.companyShortName,b.companyIntro,b.websiteUrl,...b.solutionNames||[]].filter(Boolean).join(" ")).join(" "),d=Kc.map(b=>[b.question,b.answer].filter(Boolean).join(" ")).join(" "),f=b=>$i.filter(T=>T.category===b).map(T=>[T.companyShortName,T.solutionName,T.solutionIntro,T.specialPrice].filter(Boolean).join(" ")).join(" "),h=b=>b.path==="/vendors"?c:b.path==="/categories"?u:b.path==="/faq"?d:b.path.startsWith("/categories/")?f(b.title):"",v=Object.entries(s).map(([b,T])=>{const U=l(b),$=n[U];if(!$)return null;const X=o(T),q=i(T),K=r(X),te=a(q),Se=h($),ee=`${K} ${te} ${$.keywords||""} ${Se}`.trim();return{...$,content:ee,normalized:`${$.title} ${ee}`.toLowerCase()}}).filter(Boolean),C=new jn(v,{includeScore:!0,threshold:.3,ignoreLocation:!0,keys:[{name:"title",weight:.45},{name:"content",weight:.55}]}),P=Ee(()=>t.value.trim()),y=(b,T)=>{const U=b||"",$=T.trim().toLowerCase();if(!U)return"";const q=U.toLowerCase().indexOf($);if(q<0)return U.slice(0,96)+(U.length>96?"...":"");const K=Math.max(0,q-28),te=Math.min(U.length,q+$.length+52),Se=K>0?"...":"",ee=te<U.length?"...":"";return`${Se}${U.slice(K,te)}${ee}`},E=Ee(()=>{if(!P.value)return[];const b=P.value.toLowerCase(),T=v.filter(q=>q.normalized.includes(b)),U=C.search(P.value).map(q=>q.item),$=[...T,...U],X=new Map;return $.forEach(q=>{X.has(q.path)||X.set(q.path,q)}),[...X.values()].map(q=>({...q,excerpt:y(q.content,P.value)}))}),S=Ee(()=>P.value?E.value.length>0?`找到 ${E.value.length} 筆符合「${P.value}」的結果`:`查無符合「${P.value}」的頁面`:"");return(b,T)=>{const U=fs("RouterLink");return k(),L("section",AA,[g("div",yA,[T[4]||(T[4]=g("div",{class:"page-header"},[g("header",{class:"title-row"},[g("span",{class:"title-line"}),g("h1",null,"搜尋"),g("span",{class:"title-line"})])],-1)),T[5]||(T[5]=g("br",null,null,-1)),T[6]||(T[6]=g("br",null,null,-1)),g("form",{class:"search-area",role:"search",onSubmit:T[1]||(T[1]=Ll(()=>{},["prevent"]))},[T[2]||(T[2]=g("label",{class:"sr-only",for:"site-search-input"},"站內搜尋關鍵字",-1)),il(g("input",{id:"site-search-input","onUpdate:modelValue":T[0]||(T[0]=$=>t.value=$),class:"search-input",type:"search",placeholder:"請輸入關鍵字開始搜尋...",title:"搜尋網站頁面",autocomplete:"off"},null,512),[[Ip,t.value]])],32),g("div",vA,[T[3]||(T[3]=g("h2",{class:"sr-only"},"搜尋結果",-1)),g("p",IA,Z(S.value),1),P.value?E.value.length===0?(k(),L("p",_A,"查無符合頁面，請嘗試其他關鍵字。")):(k(),L("ul",xA,[(k(!0),L(oe,null,ke(E.value,$=>(k(),L("li",{key:$.path,class:"result-item"},[Ae(U,{to:$.path,class:"result-link"},{default:Fe(()=>[Pe(Z($.title),1)]),_:2},1032,["to"]),g("p",CA,Z($.excerpt),1)]))),128))])):(k(),L("p",EA,"請輸入關鍵字搜尋網站頁面。"))])])])}}},BA=ht(SA,[["__scopeId","data-v-dd15ea85"]]),NA={class:"page-hero"},PA={class:"container"},kA={class:"sitemap-grid"},TA={class:"sitemap-heading"},FA={class:"sitemap-list"},DA={__name:"SiteMapView",setup(e){const t=[{heading:"計畫資訊",links:[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"常見問題 FAQ",to:"/faq"}]},{heading:"方案分類",links:[{label:"方案分類總覽",to:"/categories"},...gs.map(n=>({label:n.label,to:`/categories/${n.slug}`}))]},{heading:"供應商與服務",links:[{label:"AI服務供應商",to:"/vendors"},{label:"聯絡我們",to:"/contact-us"},{label:"站內搜尋",to:"/search"}]},{heading:"其他",links:[{label:"首頁",to:"/"}]}];return(n,s)=>(k(),L("section",NA,[g("div",PA,[s[0]||(s[0]=ms('<div class="page-header" data-v-59e5a2aa><header class="title-row" data-v-59e5a2aa><span class="title-line" data-v-59e5a2aa></span><h1 data-v-59e5a2aa>網站導覽</h1><span class="title-line" data-v-59e5a2aa></span></header></div><p class="sitemap-intro" data-v-59e5a2aa>本頁彙整網站所有單元連結,方便您快速前往各區內容。</p>',2)),g("div",kA,[(k(),L(oe,null,ke(t,o=>g("section",{key:o.heading,class:"sitemap-group"},[g("h2",TA,Z(o.heading),1),g("ul",FA,[(k(!0),L(oe,null,ke(o.links,i=>(k(),L("li",{key:i.to},[Ae(me($n),{to:i.to,class:"sitemap-link"},{default:Fe(()=>[Pe(Z(i.label),1)]),_:2},1032,["to"])]))),128))])])),64))])])]))}},$A=ht(DA,[["__scopeId","data-v-59e5a2aa"]]),MA={class:"page-hero"},OA={class:"container"},RA={class:"category-nav-grid","aria-labelledby":"category-nav-heading"},LA={__name:"CategoriesIndexView",setup(e){return(t,n)=>{const s=fs("RouterLink");return k(),L("section",MA,[g("div",OA,[n[1]||(n[1]=g("div",{class:"page-header"},[g("header",{class:"title-row"},[g("span",{class:"title-line"}),g("h1",null,"方案分類"),g("span",{class:"title-line"})])],-1)),g("nav",RA,[n[0]||(n[0]=g("h2",{id:"category-nav-heading",class:"sr-only"},"方案分類清單",-1)),(k(!0),L(oe,null,ke(me(gs),o=>(k(),Be(s,{key:o.slug,class:"category-nav-item",to:`/categories/${o.slug}`,title:o.label},{default:Fe(()=>[Pe(Z(o.label),1)]),_:2},1032,["to","title"]))),128))])])])}}},UA=ht(LA,[["__scopeId","data-v-af37c4c6"]]),VA={class:"page-hero"},jA={class:"container"},qA={class:"page-header"},HA={class:"title-row"},GA={class:"sr-only"},WA={key:0,class:"solution-image"},zA=["src","alt"],KA={key:0,class:"category-company"},XA={key:1,class:"category-solution"},YA={key:2,class:"solution-card-title"},QA=["aria-label","title","onClick"],JA={class:"sr-only"},ZA={key:0,class:"empty-state"},ey={__name:"SolutionCatalogView",props:{title:{type:String,required:!0},items:{type:Array,default:()=>[]},mode:{type:String,default:"category"},emptyText:{type:String,default:"目前尚無資料。"}},setup(e){const t=c=>String(c||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),n=c=>{const d=String(c||"").trim();return d?/^https?:\/\//i.test(d)?d:`https://${d}`:""},s=c=>{const d=String(c||"").trim();return!d||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)?"":`mailto:${d}`},o=c=>t(String(c||"")).replaceAll(`
`,"<br />"),i=c=>c.solutionName||c.vendorName||c.companyName||c.cardTitle||c.modalData?.name||"方案",a=c=>c.companyName||c.modalData?.companyShortName||c.modalData?.company||"",r=c=>{const d=i(c),f=a(c);return f?`查看 ${f}「${d}」方案詳細資訊`:`查看「${d}」詳細資訊`},l=({label:c,value:d,href:f="",linkLabel:h=""})=>{const v=String(d||"").trim();if(!v)return"";const C=/^https?:\/\//i.test(f),P=C?' target="_blank" rel="noopener noreferrer"':"",y=C?'<span class="external-hint">（另開新視窗）</span>':"",E=f?`<a class="solution-modal-contact-link" href="${t(f)}"${P} aria-label="${t(h||`${c}：${v}`)}" title="${t(h||`${c}：${v}`)}">${t(v)}${y}</a>`:`<span class="solution-modal-contact-value">${t(v)}</span>`;return`
    <p class="solution-modal-contact-item">
      <span class="solution-modal-contact-label">${t(c)}</span>
      <span class="solution-modal-contact-sep" aria-hidden="true">|</span>
      ${E}
    </p>
  `},u=c=>{const d=c.modalData||c,f=d.name||c.solutionName||c.companyName||c.cardTitle||c.vendorName||"方案詳細資訊",h=n(d.manualUrl),v=n(d.websiteUrl),C=s(d.contactEmail),P=d.detailImage||d.image||c.logo||"",y=`${f} 示意圖`,E=`開啟「${f}」操作說明（另開新視窗）`,S=h?`<a class="solution-modal-manual-btn" href="${t(h)}" target="_blank" rel="noopener noreferrer" aria-label="${t(E)}" title="${t(E)}">點擊看「操作說明」<span class="external-hint">（另開新視窗）</span></a>`:'<span class="solution-modal-manual-btn solution-modal-manual-btn--disabled" aria-disabled="true">尚無操作說明<i class="fa-solid fa-arrow-pointer" aria-hidden="true"></i></span>',b=[l({label:"聯絡人",value:d.contactPerson}),l({label:"公司聯絡電話",value:d.companyPhone}),l({label:"聯絡信箱",value:d.contactEmail,href:C,linkLabel:`寄信給 ${d.contactPerson||d.company||"方案聯絡窗口"}：${d.contactEmail}`}),l({label:"公司官網網址",value:d.websiteUrl,href:v,linkLabel:`前往 ${d.company||c.companyName||"公司"} 官網（另開新視窗）`})].filter(Boolean).join(""),T=`
    <div class="solution-modal">
      <section class="solution-modal-section solution-modal-section--top">
        <div class="solution-modal-top">
          <div class="solution-modal-info">
            <p class="solution-modal-tag">${t(d.tag||"")}</p>
            <p class="solution-modal-company">${t(d.company||c.vendorName||c.companyName||"")}</p>
            <h2 id="solution-modal-title" class="solution-modal-title">${t(f)}</h2>
            <p class="solution-modal-manual">${S}</p>
          </div>
          <figure class="solution-modal-figure">
            ${P?`<button type="button" class="solution-modal-image-trigger" data-modal-image-trigger aria-label="查看「${t(f)}」大圖" title="查看「${t(f)}」大圖"><img src="${t(P)}" alt="${t(y)}" /></button>`:'<div class="solution-modal-image-placeholder">尚無圖片</div>'}
          </figure>
        </div>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-section solution-modal-section--middle">
        <p class="solution-modal-badge">方案介紹</p>
        <p class="solution-modal-text">${o(d.solutionIntro||"")}</p>
        <p class="solution-modal-badge">新北專屬優惠價</p>
        <div class="solution-modal-price-box">
          <p class="solution-modal-price-text">${o(d.specialPrice||"")}</p>
        </div>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-section solution-modal-section--bottom">
        <p class="solution-modal-badge">洽詢聯絡資訊</p>
        <div class="solution-modal-contact-list">
          ${b}
        </div>
      </section>
      ${P?`<div class="solution-modal-lightbox" data-modal-lightbox hidden>
              <button type="button" class="solution-modal-lightbox-close" data-modal-lightbox-close aria-label="關閉圖片預覽" title="關閉圖片預覽">&times;</button>
              <img src="${t(P)}" alt="${t(y)}" />
            </div>`:""}
    </div>
  `;us.fire({html:T,showConfirmButton:!1,showCloseButton:!0,closeButtonAriaLabel:"關閉方案詳細資訊",customClass:{popup:"solution-swal-popup",closeButton:"solution-swal-close"},width:"min(1120px, 96vw)",background:"#ffffff",padding:"1.4rem 1.4rem 1.8rem",didOpen:U=>{U.setAttribute("aria-labelledby","solution-modal-title");const $=U.querySelector("[data-modal-image-trigger]"),X=U.querySelector("[data-modal-lightbox]"),q=U.querySelector("[data-modal-lightbox-close]");$&&X&&P&&($.addEventListener("click",()=>{X.removeAttribute("hidden")}),X.addEventListener("click",K=>{K.target===X&&X.setAttribute("hidden","")}),q?.addEventListener("click",()=>{X.setAttribute("hidden","")}))}})};return(c,d)=>(k(),L("section",VA,[g("div",jA,[g("div",qA,[g("header",HA,[d[0]||(d[0]=g("span",{class:"title-line"},null,-1)),g("h1",null,Z(e.title),1),d[1]||(d[1]=g("span",{class:"title-line"},null,-1))])]),g("h2",GA,Z(e.title)+"方案列表",1),g("div",{class:De(["solutions-grid",{"solutions-grid--category":e.mode==="category"}])},[(k(!0),L(oe,null,ke(e.items,f=>(k(),L("article",{key:f.id,class:De(["solution-card",{"solution-card--category-only":e.mode==="category","solution-card--vendor-only":e.mode==="vendor"}])},[e.mode==="vendor"?(k(),L("span",WA,[g("img",{src:f.logo,alt:`${f.vendorName} 公司標誌`},null,8,zA)])):lt("",!0),g("span",{class:De(["solution-body",{"solution-body--category-only":e.mode==="category"}])},[e.mode==="category"?(k(),L("h2",KA,Z(f.companyName||f.cardTitle),1)):lt("",!0),e.mode==="category"?(k(),L("p",XA,Z(f.solutionName),1)):lt("",!0),e.mode==="vendor"?(k(),L("h2",YA,Z(f.vendorName),1)):lt("",!0)],2),g("button",{type:"button",class:"solution-card-action","aria-label":r(f),title:r(f),onClick:h=>u(f)},[g("span",JA,Z(r(f)),1)],8,QA)],2))),128)),e.items.length===0?(k(),L("div",ZA,[g("p",null,Z(e.emptyText),1)])):lt("",!0)],2)])]))}},kt=ht(ey,[["__scopeId","data-v-e24fcddd"]]),hr="AI市場洞察",ty={__name:"AIMarketInsightView",setup(e){const t=Pt(hr);return(n,s)=>(k(),Be(kt,{title:hr,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},gr="AI企業營運管理",ny={__name:"AIEnterpriseOperationsView",setup(e){const t=Pt(gr);return(n,s)=>(k(),Be(kt,{title:gr,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},wr="AI助理",sy={__name:"AIAssistantView",setup(e){const t=Pt(wr);return(n,s)=>(k(),Be(kt,{title:wr,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},br="AI垂直整合方案",oy={__name:"AIVerticalIntegrationView",setup(e){const t=Pt(br);return(n,s)=>(k(),Be(kt,{title:br,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},Ar="AI居家照護",iy={__name:"AIHomeCareView",setup(e){const t=Pt(Ar);return(n,s)=>(k(),Be(kt,{title:Ar,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},yr="AI創作內容",ay={__name:"AIContentCreationView",setup(e){const t=Pt(yr);return(n,s)=>(k(),Be(kt,{title:yr,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},vr="AI智能客服",ry={__name:"AIIntelligentCustomerServiceView",setup(e){const t=Pt(vr);return(n,s)=>(k(),Be(kt,{title:vr,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},Ir="AI智慧製造",ly={__name:"AISmartManufacturingView",setup(e){const t=Pt(Ir);return(n,s)=>(k(),Be(kt,{title:Ir,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},Er="AI資訊安全",cy={__name:"AIInformationSecurityView",setup(e){const t=Pt(Er);return(n,s)=>(k(),Be(kt,{title:Er,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},_r="AI營運流程自動化",uy={__name:"AIOperationAutomationView",setup(e){const t=Pt(_r);return(n,s)=>(k(),Be(kt,{title:_r,items:me(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},dy="/assets/%E4%BA%9E%E5%8D%9A%E7%A6%8F%E7%88%BE%E6%91%A9%E6%B2%99-CpRZt_ac.png",py="/assets/%E5%81%A5%E5%BA%B7%E7%9B%9F-DAqVoO0j.png",fy="/assets/%E5%82%91%E9%A8%B0%E6%99%BA%E8%83%BD-l0PIt35V.png",my="/assets/%E5%85%83%E7%9B%9B%E7%94%9F%E9%86%AB%E9%9B%BB%E5%AD%90-gt0W6m_F.png",hy="/assets/%E5%87%8C%E5%85%B8%E7%A7%91%E6%8A%80-XipU74Bx.png",gy="/assets/%E5%87%8C%E6%9D%BE%E7%A7%91%E6%8A%80-UAJsGdlt.png",wy="/assets/%E5%87%B1%E9%88%BF%E8%A1%8C%E5%8B%95%E7%A7%91%E6%8A%80-BoAu1W_x.png",by="/assets/%E5%89%B5%E9%80%A0%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80-C09V6IGy.png",Ay="/assets/%E5%8D%A1%E8%8F%B2%E5%8D%A1%E9%87%91%E8%9E%8D%E7%A7%91%E6%8A%80-DhraYHWL.png",yy="/assets/%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F-htT6XPN3.png",vy="/assets/%E5%9C%98%E8%96%A6%E7%A7%91%E6%8A%80-Ca_IXQXM.png",Iy="/assets/%E5%9F%8E%E6%99%BA%E7%A7%91%E6%8A%80-BZOPPYE5.png",Ey="/assets/%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94-DMEKcRY6.png",_y="/assets/%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80-Dg_mhOPi.png",xy="/assets/%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80-5EcdWAth.png",Cy="/assets/%E6%91%A9%E7%B5%A1%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7-CUD_DURW.png",Sy="/assets/%E6%95%B8%E8%BE%B0%E5%89%B5%E8%97%9D%E7%A7%91%E6%8A%80-a1J7myBG.png",By="/assets/%E6%98%93%E6%99%A8%E6%99%BA%E8%83%BD-BjWCWxap.png",Ny="/assets/%E6%9B%9C%E5%A4%86%E7%A7%91%E6%8A%80-3oqJlcfh.png",Py="/assets/%E6%9C%89%E5%89%B5%E7%A7%91%E6%8A%80-Cak7rXvP.png",ky="/assets/%E6%A5%B5%E9%A2%A8%E9%9B%B2%E5%89%B5-BplhEXay.png",Ty="/assets/%E6%BB%BF%E6%8B%93%E7%A7%91%E6%8A%80-BwxNUtOE.png",Fy="/assets/%E6%BC%AB%E8%A9%B1%E7%A7%91%E6%8A%80-BSBuitTk.png",Dy="/assets/%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96-Cjb4kuOl.png",$y="/assets/%E7%92%BD%E6%A8%82%E7%A7%91%E6%8A%80-wOYU2_Io.png",My="/assets/%E7%94%A8%E7%9B%8A%E7%B6%B2%E8%B7%AF%E7%A7%91%E6%8A%80-CWggdF1m.png",Oy="/assets/%E7%9D%BF%E5%8A%9B%E6%99%BA%E8%83%BD%E9%81%8B%E5%8B%95-e8SFIUys.png",Ry="/assets/%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0-_LC7Of_Z.png",Ly="/assets/%E7%A4%BE%E7%BE%A4%E6%B4%9E%E5%AF%9F-Bypg-heJ.png",Uy="/assets/%E7%A9%8E%E8%AB%BE%E7%A7%91%E6%8A%80-CozF8CfT.png",Vy="/assets/%E7%B6%B2%E9%9A%9B%E6%99%BA%E6%85%A7-oEHgJSBn.png",jy="/assets/%E7%B7%AF%E8%AC%99%E7%A7%91%E6%8A%80-B_CUcfP_.png",qy="/assets/%E8%81%9A%E5%85%B8%E8%B3%87%E8%A8%8A-CVvYO2nx.png",Hy="/assets/%E8%82%86%E6%99%82%E8%B3%87%E8%A8%8A%E8%A8%AD%E8%A8%88-BY6QqpAQ.png",Gy="/assets/%E8%83%8C%E6%99%AF%E6%A8%A1%E5%BC%8F-BaNh6PfK.png",Wy="/assets/%E8%87%BA%E7%81%A3%E9%80%9A%E7%94%A8%E7%B4%A1%E7%B9%94%E7%A7%91%E6%8A%80-CsrrS9H-.png",zy="/assets/%E8%89%BE%E5%88%A9%E6%80%9D%E7%A7%91%E6%8A%80-BMHzul1K.png",Ky="/assets/%E8%89%BE%E6%AF%94%E4%BA%92%E5%8B%95%E5%A8%9B%E6%A8%82-CfHodtiR.png",Xy="/assets/%E8%8F%AF%E8%8B%93%E7%A7%91%E6%8A%80-CvTVV_Wo.png",Yy="/assets/%E8%99%8E%E6%99%BA%E7%A7%91%E6%8A%80-yNB5QCzB.png",Qy="/assets/%E8%A8%8A%E9%80%A3%E7%A7%91%E6%8A%80-B2pEIBTc.png",Jy="/assets/%E8%A9%AE%E9%80%9A%E9%9B%BB%E8%85%A6-Bzyr1Ea4.png",Zy="/assets/%E9%96%8B%E6%BA%90%E6%99%BA%E9%80%A0-BM5mzqQE.png",e2="/assets/%E9%9B%B2%E7%BE%A9%E7%A7%91%E6%8A%80-qkihQrIq.png",t2="/assets/%E9%BA%9F%E6%95%B8%E6%93%9A%E7%A7%91%E6%8A%80-Dnq3J-qf.png",n2={class:"page-hero"},s2={class:"container"},o2={class:"vendors-grid"},i2=["aria-label","title","onClick"],a2={class:"vendor-logo-wrap"},r2=["src"],l2={key:1,class:"vendor-logo-placeholder"},c2={class:"vendor-name"},u2={class:"vendors-pagination","aria-label":"供應商頁面切換"},d2=["aria-label","title","aria-current","aria-pressed","onClick"],p2={class:"sr-only"},f2={class:"supplier-modal",role:"dialog","aria-modal":"true","aria-labelledby":"supplier-modal-title","aria-describedby":"supplier-modal-intro"},m2={class:"supplier-modal-layout"},h2={class:"supplier-modal-side"},g2={class:"supplier-modal-logo"},w2=["src"],b2={key:1,class:"vendor-logo-placeholder"},A2=["href","aria-label","title"],y2={class:"supplier-modal-main"},v2={id:"supplier-modal-title",class:"supplier-modal-title"},I2={id:"supplier-modal-intro",class:"supplier-modal-intro"},E2={class:"supplier-modal-tags"},_2={key:1,class:"supplier-solution-tag"},Ns=15,x2={__name:"AIServiceSuppliersView",setup(e){const t=Object.assign({"/src/assets/solutions/logo/亞博福爾摩沙.png":dy,"/src/assets/solutions/logo/健康盟.png":py,"/src/assets/solutions/logo/傑騰智能.png":fy,"/src/assets/solutions/logo/元盛生醫電子.png":my,"/src/assets/solutions/logo/凌典科技.png":hy,"/src/assets/solutions/logo/凌松科技.png":gy,"/src/assets/solutions/logo/凱鈿行動科技.png":wy,"/src/assets/solutions/logo/創造智能科技.png":by,"/src/assets/solutions/logo/卡菲卡金融科技.png":Ay,"/src/assets/solutions/logo/台聚管理顧問.png":yy,"/src/assets/solutions/logo/團薦科技.png":vy,"/src/assets/solutions/logo/城智科技.png":Iy,"/src/assets/solutions/logo/大數軟體.png":Ey,"/src/assets/solutions/logo/慧穩科技.png":_y,"/src/assets/solutions/logo/拉普拉斯智能科技.png":xy,"/src/assets/solutions/logo/摩絡人工智慧.png":Cy,"/src/assets/solutions/logo/數辰創藝科技.png":Sy,"/src/assets/solutions/logo/易晨智能.png":By,"/src/assets/solutions/logo/曜夆科技.png":Ny,"/src/assets/solutions/logo/有創科技.png":Py,"/src/assets/solutions/logo/極風雲創.png":ky,"/src/assets/solutions/logo/滿拓科技.png":Ty,"/src/assets/solutions/logo/漫話科技.png":Fy,"/src/assets/solutions/logo/環球睿視.png":Dy,"/src/assets/solutions/logo/璽樂科技.png":$y,"/src/assets/solutions/logo/用益網路科技.png":My,"/src/assets/solutions/logo/睿力智能運動.png":Oy,"/src/assets/solutions/logo/睿思創新.png":Ry,"/src/assets/solutions/logo/社群洞察.png":Ly,"/src/assets/solutions/logo/穎諾科技.png":Uy,"/src/assets/solutions/logo/網際智慧.png":Vy,"/src/assets/solutions/logo/緯謙科技.png":jy,"/src/assets/solutions/logo/聚典資訊.png":qy,"/src/assets/solutions/logo/肆時資訊設計.png":Hy,"/src/assets/solutions/logo/背景模式.png":Gy,"/src/assets/solutions/logo/臺灣通用紡織科技.png":Wy,"/src/assets/solutions/logo/艾利思科技.png":zy,"/src/assets/solutions/logo/艾比互動娛樂.png":Ky,"/src/assets/solutions/logo/華苓科技.png":Xy,"/src/assets/solutions/logo/虎智科技.png":Yy,"/src/assets/solutions/logo/訊連科技.png":Qy,"/src/assets/solutions/logo/詮通電腦.png":Jy,"/src/assets/solutions/logo/開源智造.png":Zy,"/src/assets/solutions/logo/雲義科技.png":e2,"/src/assets/solutions/logo/麟數據科技.png":t2}),n=y=>{const E=String(y||"").trim();return E?/^https?:\/\//i.test(E)?E:`https://${E}`:""},s=y=>String(y??"").trim(),o=new Map(gs.map(y=>[y.label,y.slug])),i=new Map;$i.forEach(y=>{const E=s(y.solutionName),S=s(y.category),b=s(y.companyName),T=s(y.companyShortName),U=o.get(S);if(!E||!U)return;const $=`/categories/${U}`;b&&i.set(`${b}::${E}`,$),T&&i.set(`${T}::${E}`,$),i.has(E)||i.set(E,$)});const a=ou.map(y=>({...y,websiteUrl:n(y.websiteUrl),solutionLinks:(y.solutionNames||[]).map(E=>{const S=s(E),b=i.get(`${s(y.companyName)}::${S}`)||i.get(`${s(y.companyShortName)}::${S}`)||i.get(S)||"";return{label:S,to:b}}),logo:y.logoFileName&&t[`/src/assets/solutions/logo/${y.logoFileName}`]?t[`/src/assets/solutions/logo/${y.logoFileName}`]:""})),r=qe(0),l=qe(null),u=Ee(()=>Math.max(1,Math.ceil(a.length/Ns))),c=Ee(()=>a.slice(r.value*Ns,r.value*Ns+Ns)),d=y=>{y<0||y>=u.value||(r.value=y)},f=y=>{l.value=y},h=()=>{l.value=null},v=y=>y.companyName||y.companyShortName||"AI服務供應商",C=y=>`查看 ${v(y)} 供應商詳細資訊`,P=y=>`前往 ${v(y)} 官網（另開新視窗）`;return(y,E)=>(k(),L(oe,null,[g("section",n2,[g("div",s2,[E[0]||(E[0]=ms('<div class="page-header" data-v-b5618be2><header class="title-row" data-v-b5618be2><span class="title-line" data-v-b5618be2></span><h1 data-v-b5618be2>AI服務供應商</h1><span class="title-line" data-v-b5618be2></span></header></div><h2 class="sr-only" data-v-b5618be2>AI服務供應商清單</h2>',2)),g("div",o2,[(k(!0),L(oe,null,ke(c.value,S=>(k(),L("button",{key:S.companyShortName,class:"vendor-card",type:"button","aria-label":C(S),title:C(S),onClick:b=>f(S)},[g("span",a2,[S.logo?(k(),L("img",{key:0,src:S.logo,alt:""},null,8,r2)):(k(),L("span",l2,"LOGO"))]),g("span",c2,Z(S.companyShortName),1)],8,i2))),128))]),g("nav",u2,[(k(!0),L(oe,null,ke(u.value,S=>(k(),L("button",{key:S,class:De(["vendors-page-dot",{active:r.value===S-1}]),type:"button","aria-label":`切換到第 ${S} 頁`,title:`切換到第 ${S} 頁`,"aria-current":r.value===S-1?"page":void 0,"aria-pressed":(r.value===S-1).toString(),onClick:b=>d(S-1)},[g("span",p2,"第 "+Z(S)+" 頁",1)],10,d2))),128))])])]),(k(),Be(ed,{to:"body"},[l.value?(k(),L("div",{key:0,class:"supplier-modal-backdrop",onClick:Ll(h,["self"])},[g("article",f2,[g("button",{class:"supplier-modal-close",type:"button","aria-label":"關閉供應商詳細資訊",title:"關閉供應商詳細資訊",onClick:h},[...E[1]||(E[1]=[g("i",{class:"fa-solid fa-xmark","aria-hidden":"true"},null,-1)])]),g("div",m2,[g("aside",h2,[g("div",g2,[l.value.logo?(k(),L("img",{key:0,src:l.value.logo,alt:""},null,8,w2)):(k(),L("span",b2,"LOGO"))]),l.value.websiteUrl?(k(),L("a",{key:0,href:l.value.websiteUrl,class:"supplier-website-btn",target:"_blank",rel:"noopener noreferrer","aria-label":P(l.value),title:P(l.value)},[...E[2]||(E[2]=[Pe(" 官網",-1),g("span",{class:"external-hint"},"（另開新視窗）",-1)])],8,A2)):lt("",!0)]),g("section",y2,[g("h2",v2,Z(l.value.companyName||l.value.companyShortName),1),g("p",I2,Z(l.value.companyIntro||"暫無公司簡介。"),1),g("div",E2,[(k(!0),L(oe,null,ke(l.value.solutionLinks,S=>(k(),L(oe,{key:S.label},[S.to?(k(),Be(me($n),{key:0,to:S.to,class:"supplier-solution-tag supplier-solution-tag--link","aria-label":`查看 ${S.label} 方案分類`,title:`查看 ${S.label} 方案分類`,onClick:h},{default:Fe(()=>[Pe(Z(S.label),1)]),_:2},1032,["to","aria-label","title"])):(k(),L("span",_2,Z(S.label),1))],64))),128))])])])])])):lt("",!0)]))],64))}},C2=ht(x2,[["__scopeId","data-v-b5618be2"]]),xr="新北市政府經濟發展局新北企業與AI應用方案供應商媒合系統",iu={label:"首頁",to:"/"},Wt=e=>[iu,{label:e}],vt=e=>[iu,{label:"方案分類",to:"/categories"},{label:e}],S2=[{path:"/",name:"home",component:Dh,meta:{title:""}},{path:"/about",name:"about",component:jh,meta:{title:"關於計畫",breadcrumb:Wt("關於計畫")}},{path:"/schedule",name:"schedule",component:Rw,meta:{title:"計畫時程",breadcrumb:Wt("計畫時程")}},{path:"/faq",name:"faq",component:Yw,meta:{title:"FAQ",breadcrumb:Wt("FAQ")}},{path:"/categories",name:"categories",component:UA,meta:{title:"方案分類",breadcrumb:Wt("方案分類")}},{path:"/categories/ai-market-insight",name:"category-ai-market-insight",component:ty,meta:{title:"AI市場洞察",breadcrumb:vt("AI市場洞察")}},{path:"/categories/ai-enterprise-operations",name:"category-ai-enterprise-operations",component:ny,meta:{title:"AI企業營運管理",breadcrumb:vt("AI企業營運管理")}},{path:"/categories/ai-assistant",name:"category-ai-assistant",component:sy,meta:{title:"AI助理",breadcrumb:vt("AI助理")}},{path:"/categories/ai-vertical-integration",name:"category-ai-vertical-integration",component:oy,meta:{title:"AI垂直整合方案",breadcrumb:vt("AI垂直整合方案")}},{path:"/categories/ai-home-care",name:"category-ai-home-care",component:iy,meta:{title:"AI居家照護",breadcrumb:vt("AI居家照護")}},{path:"/categories/ai-content-creation",name:"category-ai-content-creation",component:ay,meta:{title:"AI創作內容",breadcrumb:vt("AI創作內容")}},{path:"/categories/ai-intelligent-customer-service",name:"category-ai-intelligent-customer-service",component:ry,meta:{title:"AI智能客服",breadcrumb:vt("AI智能客服")}},{path:"/categories/ai-smart-manufacturing",name:"category-ai-smart-manufacturing",component:ly,meta:{title:"AI智慧製造",breadcrumb:vt("AI智慧製造")}},{path:"/categories/ai-information-security",name:"category-ai-information-security",component:cy,meta:{title:"AI資訊安全",breadcrumb:vt("AI資訊安全")}},{path:"/categories/ai-operation-automation",name:"category-ai-operation-automation",component:uy,meta:{title:"AI營運流程自動化",breadcrumb:vt("AI營運流程自動化")}},{path:"/vendors",name:"vendors",component:C2,meta:{title:"AI服務供應商",breadcrumb:Wt("AI服務供應商")}},{path:"/contact-us",name:"contact-us",component:hb,meta:{title:"聯絡我們",breadcrumb:Wt("聯絡我們")}},{path:"/search",name:"search",component:BA,meta:{title:"搜尋",breadcrumb:Wt("搜尋")}},{path:"/sitemap",name:"sitemap",component:$A,meta:{title:"網站導覽",breadcrumb:Wt("網站導覽")}},{path:"/:pathMatch(.*)*",redirect:"/"}],ds=Df({history:mf(),routes:S2,scrollBehavior(){return{top:0,behavior:"smooth"}}});ds.afterEach(e=>{const t=e.meta?.title;document.title=t?`${t} | ${xr}`:xr,!(typeof window>"u"||typeof window.gtag!="function")&&window.gtag("event","page_view",{page_path:e.fullPath,page_title:document.title,page_location:window.location.href})});const au=Sp(mh),Cr=()=>{const e=document.getElementById("chat-icon"),t=document.getElementById("chat-popup"),n=()=>!!t&&t.offsetWidth>0&&t.offsetHeight>0&&getComputedStyle(t).display!=="none"&&getComputedStyle(t).visibility!=="hidden";if(e){const o=n(),i=o?"關閉新北經發 AI 小幫手對話視窗":"開啟新北經發 AI 小幫手對話視窗";e.setAttribute("aria-label",i),e.setAttribute("title",i),e.setAttribute("aria-expanded",String(o)),e.setAttribute("aria-haspopup","dialog"),["A","BUTTON"].includes(e.tagName)||(e.setAttribute("role","button"),e.setAttribute("tabindex","0")),e.dataset.a11yKeydown||(e.addEventListener("keydown",a=>{a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),e.click())}),e.dataset.a11yKeydown="true")}t&&(t.setAttribute("role","dialog"),t.setAttribute("aria-label","新北經發 AI 小幫手對話視窗"),!t.dataset.a11yStateObserved&&"MutationObserver"in window&&(new window.MutationObserver(()=>{const i=document.getElementById("chat-icon");if(!i)return;const a=n(),r=a?"關閉新北經發 AI 小幫手對話視窗":"開啟新北經發 AI 小幫手對話視窗";i.setAttribute("aria-expanded",String(a)),i.setAttribute("aria-label",r),i.setAttribute("title",r)}).observe(t,{attributes:!0,attributeFilter:["style","class"]}),t.dataset.a11yStateObserved="true"));const s=document.querySelector("#chat-box")||document.querySelector("#chat-popup .chatgpt-messages")||document.querySelector("#chat-messages")||document.querySelector('#chat-popup [class*="messages"]');s&&s.getAttribute("role")!=="log"&&(s.setAttribute("role","log"),s.setAttribute("aria-live","polite"),s.setAttribute("aria-label","對話訊息"))};typeof window<"u"&&(window.addEventListener("load",Cr),"MutationObserver"in window&&new window.MutationObserver(Cr).observe(document.body,{childList:!0,subtree:!0}));const ru=()=>{ds.currentRoute.value.path!=="/"&&ds.replace("/")};ds.onError(()=>{ru()});au.config.errorHandler=()=>{ru()};au.use(ds).mount("#app");
