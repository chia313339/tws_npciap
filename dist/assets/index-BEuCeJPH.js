(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Hs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},qt=[],Ze=()=>{},di=()=>!1,qn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Us=e=>e.startsWith("onUpdate:"),me=Object.assign,Gs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qo=Object.prototype.hasOwnProperty,X=(e,t)=>Qo.call(e,t),j=Array.isArray,Qt=e=>Qn(e)==="[object Map]",hi=e=>Qn(e)==="[object Set]",H=e=>typeof e=="function",ae=e=>typeof e=="string",wt=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",pi=e=>(re(e)||H(e))&&H(e.then)&&H(e.catch),mi=Object.prototype.toString,Qn=e=>mi.call(e),zo=e=>Qn(e).slice(8,-1),gi=e=>Qn(e)==="[object Object]",Ks=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Yo=/-\w/g,ke=zn(e=>e.replace(Yo,t=>t.slice(1).toUpperCase())),Jo=/\B([A-Z])/g,Vt=zn(e=>e.replace(Jo,"-$1").toLowerCase()),Yn=zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),os=zn(e=>e?`on${Yn(e)}`:""),xt=(e,t)=>!Object.is(e,t),Dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},vi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ws=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let hr;const Jn=()=>hr||(hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qs(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ae(s)?tl(s):qs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(ae(e)||re(e))return e}const Xo=/;(?![^(]*\))/g,Zo=/:([^]+)/,el=/\/\*[^]*?\*\//g;function tl(e){const t={};return e.replace(el,"").split(Xo).forEach(n=>{if(n){const s=n.split(Zo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function sn(e){let t="";if(ae(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=sn(e[n]);s&&(t+=s+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sl=Hs(nl);function _i(e){return!!e||e===""}const yi=e=>!!(e&&e.__v_isRef===!0),ge=e=>ae(e)?e:e==null?"":j(e)||re(e)&&(e.toString===mi||!H(e.toString))?yi(e)?ge(e.value):JSON.stringify(e,bi,2):String(e),bi=(e,t)=>yi(t)?bi(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[ls(s,i)+" =>"]=r,n),{})}:hi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ls(n))}:wt(t)?ls(t):re(t)&&!j(t)&&!gi(t)?String(t):t,ls=(e,t="")=>{var n;return wt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Re;class rl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){this._on>0&&--this._on===0&&(Re=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function il(){return Re}let se;const cs=new WeakSet;class Ai{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cs.has(this)&&(cs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ei(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pr(this),wi(this);const t=se,n=He;se=this,He=!0;try{return this.fn()}finally{Ci(this),se=t,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ys(t);this.deps=this.depsTail=void 0,pr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){As(this)&&this.run()}get dirty(){return As(this)}}let xi=0,dn,hn;function Ei(e,t=!1){if(e.flags|=8,t){e.next=hn,hn=e;return}e.next=dn,dn=e}function Qs(){xi++}function zs(){if(--xi>0)return;if(hn){let t=hn;for(hn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function wi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ci(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ys(s),ol(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function As(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Si(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Si(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===bn)||(e.globalVersion=bn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!As(e))))return;e.flags|=2;const t=e.dep,n=se,s=He;se=e,He=!0;try{wi(e);const r=e.fn(e._value);(t.version===0||xt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{se=n,He=s,Ci(e),e.flags&=-3}}function Ys(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ys(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ol(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let He=!0;const Ii=[];function ft(){Ii.push(He),He=!1}function dt(){const e=Ii.pop();He=e===void 0?!0:e}function pr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=se;se=void 0;try{t()}finally{se=n}}}let bn=0;class ll{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Js{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!He||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new ll(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Ri(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(t){this.version++,bn++,this.notify(t)}notify(t){Qs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zs()}}}function Ri(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ri(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xs=new WeakMap,Nt=Symbol(""),Es=Symbol(""),An=Symbol("");function ve(e,t,n){if(He&&se){let s=xs.get(e);s||xs.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Js),r.map=s,r.key=n),r.track()}}function ct(e,t,n,s,r,i){const o=xs.get(e);if(!o){bn++;return}const l=c=>{c&&c.trigger()};if(Qs(),t==="clear")o.forEach(l);else{const c=j(e),u=c&&Ks(n);if(c&&n==="length"){const a=Number(s);o.forEach((f,p)=>{(p==="length"||p===An||!wt(p)&&p>=a)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(An)),t){case"add":c?u&&l(o.get("length")):(l(o.get(Nt)),Qt(e)&&l(o.get(Es)));break;case"delete":c||(l(o.get(Nt)),Qt(e)&&l(o.get(Es)));break;case"set":Qt(e)&&l(o.get(Nt));break}}zs()}function Ut(e){const t=J(e);return t===e?t:(ve(t,"iterate",An),Le(e)?t:t.map(Ue))}function Xn(e){return ve(e=J(e),"iterate",An),e}function _t(e,t){return ht(e)?Xt(Ft(e)?Ue(t):t):Ue(t)}const cl={__proto__:null,[Symbol.iterator](){return as(this,Symbol.iterator,e=>_t(this,e))},concat(...e){return Ut(this).concat(...e.map(t=>j(t)?Ut(t):t))},entries(){return as(this,"entries",e=>(e[1]=_t(this,e[1]),e))},every(e,t){return rt(this,"every",e,t,void 0,arguments)},filter(e,t){return rt(this,"filter",e,t,n=>n.map(s=>_t(this,s)),arguments)},find(e,t){return rt(this,"find",e,t,n=>_t(this,n),arguments)},findIndex(e,t){return rt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return rt(this,"findLast",e,t,n=>_t(this,n),arguments)},findLastIndex(e,t){return rt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return rt(this,"forEach",e,t,void 0,arguments)},includes(...e){return us(this,"includes",e)},indexOf(...e){return us(this,"indexOf",e)},join(e){return Ut(this).join(e)},lastIndexOf(...e){return us(this,"lastIndexOf",e)},map(e,t){return rt(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return mr(this,"reduce",e,t)},reduceRight(e,...t){return mr(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return rt(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return Ut(this).toReversed()},toSorted(e){return Ut(this).toSorted(e)},toSpliced(...e){return Ut(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return as(this,"values",e=>_t(this,e))}};function as(e,t,n){const s=Xn(e),r=s[t]();return s!==e&&!Le(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const al=Array.prototype;function rt(e,t,n,s,r,i){const o=Xn(e),l=o!==e&&!Le(e),c=o[t];if(c!==al[t]){const f=c.apply(e,i);return l?Ue(f):f}let u=n;o!==e&&(l?u=function(f,p){return n.call(this,_t(e,f),p,e)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,e)}));const a=c.call(o,u,s);return l&&r?r(a):a}function mr(e,t,n,s){const r=Xn(e);let i=n;return r!==e&&(Le(e)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,e)}):i=function(o,l,c){return n.call(this,o,_t(e,l),c,e)}),r[t](i,...s)}function us(e,t,n){const s=J(e);ve(s,"iterate",An);const r=s[t](...n);return(r===-1||r===!1)&&er(n[0])?(n[0]=J(n[0]),s[t](...n)):r}function ln(e,t,n=[]){ft(),Qs();const s=J(e)[t].apply(e,n);return zs(),dt(),s}const ul=Hs("__proto__,__v_isRef,__isVue"),Oi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wt));function fl(e){wt(e)||(e=String(e));const t=J(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Ti{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Al:Ni:i?Pi:Di).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=j(t);if(!r){let c;if(o&&(c=cl[n]))return c;if(n==="hasOwnProperty")return fl}const l=Reflect.get(t,n,be(t)?t:s);if((wt(n)?Oi.has(n):ul(n))||(r||ve(t,"get",n),i))return l;if(be(l)){const c=o&&Ks(n)?l:l.value;return r&&re(c)?Cs(c):c}return re(l)?r?Cs(l):Jt(l):l}}class Mi extends Ti{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=j(t)&&Ks(n);if(!this._isShallow){const u=ht(i);if(!Le(s)&&!ht(s)&&(i=J(i),s=J(s)),!o&&be(i)&&!be(s))return u||(i.value=s),!0}const l=o?Number(n)<t.length:X(t,n),c=Reflect.set(t,n,s,be(t)?t:r);return t===J(r)&&(l?xt(s,i)&&ct(t,"set",n,s):ct(t,"add",n,s)),c}deleteProperty(t,n){const s=X(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&ct(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!wt(n)||!Oi.has(n))&&ve(t,"has",n),s}ownKeys(t){return ve(t,"iterate",j(t)?"length":Nt),Reflect.ownKeys(t)}}class dl extends Ti{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hl=new Mi,pl=new dl,ml=new Mi(!0);const ws=e=>e,Rn=e=>Reflect.getPrototypeOf(e);function gl(e,t,n){return function(...s){const r=this.__v_raw,i=J(r),o=Qt(i),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=r[e](...s),a=n?ws:t?Xt:Ue;return!t&&ve(i,"iterate",c?Es:Nt),me(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:l?[a(f[0]),a(f[1])]:a(f),done:p}}})}}function On(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vl(e,t){const n={get(r){const i=this.__v_raw,o=J(i),l=J(r);e||(xt(r,l)&&ve(o,"get",r),ve(o,"get",l));const{has:c}=Rn(o),u=t?ws:e?Xt:Ue;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ve(J(r),"iterate",Nt),r.size},has(r){const i=this.__v_raw,o=J(i),l=J(r);return e||(xt(r,l)&&ve(o,"has",r),ve(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=J(l),u=t?ws:e?Xt:Ue;return!e&&ve(c,"iterate",Nt),l.forEach((a,f)=>r.call(i,u(a),u(f),o))}};return me(n,e?{add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear")}:{add(r){!t&&!Le(r)&&!ht(r)&&(r=J(r));const i=J(this);return Rn(i).has.call(i,r)||(i.add(r),ct(i,"add",r,r)),this},set(r,i){!t&&!Le(i)&&!ht(i)&&(i=J(i));const o=J(this),{has:l,get:c}=Rn(o);let u=l.call(o,r);u||(r=J(r),u=l.call(o,r));const a=c.call(o,r);return o.set(r,i),u?xt(i,a)&&ct(o,"set",r,i):ct(o,"add",r,i),this},delete(r){const i=J(this),{has:o,get:l}=Rn(i);let c=o.call(i,r);c||(r=J(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&ct(i,"delete",r,void 0),u},clear(){const r=J(this),i=r.size!==0,o=r.clear();return i&&ct(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=gl(r,e,t)}),n}function Xs(e,t){const n=vl(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(X(n,r)&&r in s?n:s,r,i)}const _l={get:Xs(!1,!1)},yl={get:Xs(!1,!0)},bl={get:Xs(!0,!1)};const Di=new WeakMap,Pi=new WeakMap,Ni=new WeakMap,Al=new WeakMap;function xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(e){return e.__v_skip||!Object.isExtensible(e)?0:xl(zo(e))}function Jt(e){return ht(e)?e:Zs(e,!1,hl,_l,Di)}function Fi(e){return Zs(e,!1,ml,yl,Pi)}function Cs(e){return Zs(e,!0,pl,bl,Ni)}function Zs(e,t,n,s,r){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=El(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Ft(e){return ht(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function Le(e){return!!(e&&e.__v_isShallow)}function er(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function wl(e){return!X(e,"__v_skip")&&Object.isExtensible(e)&&vi(e,"__v_skip",!0),e}const Ue=e=>re(e)?Jt(e):e,Xt=e=>re(e)?Cs(e):e;function be(e){return e?e.__v_isRef===!0:!1}function ut(e){return Bi(e,!1)}function Cl(e){return Bi(e,!0)}function Bi(e,t){return be(e)?e:new Sl(e,t)}class Sl{constructor(t,n){this.dep=new Js,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:J(t),this._value=n?t:Ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Le(t)||ht(t);t=s?t:J(t),xt(t,n)&&(this._rawValue=t,this._value=s?t:Ue(t),this.dep.trigger())}}function Bt(e){return be(e)?e.value:e}const Il={get:(e,t,n)=>t==="__v_raw"?e:Bt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return be(r)&&!be(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Li(e){return Ft(e)?e:new Proxy(e,Il)}class Rl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Js(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Ei(this,!0),!0}get value(){const t=this.dep.track();return Si(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ol(e,t,n=!1){let s,r;return H(e)?s=e:(s=e.get,r=e.set),new Rl(s,r,n)}const Tn={},Ln=new WeakMap;let Ot;function Tl(e,t=!1,n=Ot){if(n){let s=Ln.get(n);s||Ln.set(n,s=[]),s.push(e)}}function Ml(e,t,n=te){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=P=>r?P:Le(P)||r===!1||r===0?at(P,1):at(P);let a,f,p,m,A=!1,v=!1;if(be(e)?(f=()=>e.value,A=Le(e)):Ft(e)?(f=()=>u(e),A=!0):j(e)?(v=!0,A=e.some(P=>Ft(P)||Le(P)),f=()=>e.map(P=>{if(be(P))return P.value;if(Ft(P))return u(P);if(H(P))return c?c(P,2):P()})):H(e)?t?f=c?()=>c(e,2):e:f=()=>{if(p){ft();try{p()}finally{dt()}}const P=Ot;Ot=a;try{return c?c(e,3,[m]):e(m)}finally{Ot=P}}:f=Ze,t&&r){const P=f,Q=r===!0?1/0:r;f=()=>at(P(),Q)}const D=il(),w=()=>{a.stop(),D&&D.active&&Gs(D.effects,a)};if(i&&t){const P=t;t=(...Q)=>{P(...Q),w()}}let O=v?new Array(e.length).fill(Tn):Tn;const F=P=>{if(!(!(a.flags&1)||!a.dirty&&!P))if(t){const Q=a.run();if(r||A||(v?Q.some((le,K)=>xt(le,O[K])):xt(Q,O))){p&&p();const le=Ot;Ot=a;try{const K=[Q,O===Tn?void 0:v&&O[0]===Tn?[]:O,m];O=Q,c?c(t,3,K):t(...K)}finally{Ot=le}}}else a.run()};return l&&l(F),a=new Ai(f),a.scheduler=o?()=>o(F,!1):F,m=P=>Tl(P,!1,a),p=a.onStop=()=>{const P=Ln.get(a);if(P){if(c)c(P,4);else for(const Q of P)Q();Ln.delete(a)}},t?s?F(!0):O=a.run():o?o(F.bind(null,!0),!0):a.run(),w.pause=a.pause.bind(a),w.resume=a.resume.bind(a),w.stop=w,w}function at(e,t=1/0,n){if(t<=0||!re(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,be(e))at(e.value,t,n);else if(j(e))for(let s=0;s<e.length;s++)at(e[s],t,n);else if(hi(e)||Qt(e))e.forEach(s=>{at(s,t,n)});else if(gi(e)){for(const s in e)at(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&at(e[s],t,n)}return e}function Sn(e,t,n,s){try{return s?e(...s):e()}catch(r){Zn(r,t,n)}}function tt(e,t,n,s){if(H(e)){const r=Sn(e,t,n,s);return r&&pi(r)&&r.catch(i=>{Zn(i,t,n)}),r}if(j(e)){const r=[];for(let i=0;i<e.length;i++)r.push(tt(e[i],t,n,s));return r}}function Zn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||te;if(t){let l=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let f=0;f<a.length;f++)if(a[f](e,c,u)===!1)return}l=l.parent}if(i){ft(),Sn(i,null,10,[e,c,u]),dt();return}}Dl(e,n,r,s,o)}function Dl(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Ee=[];let Ye=-1;const zt=[];let yt=null,Gt=0;const ki=Promise.resolve();let kn=null;function $i(e){const t=kn||ki;return e?t.then(this?e.bind(this):e):t}function Pl(e){let t=Ye+1,n=Ee.length;for(;t<n;){const s=t+n>>>1,r=Ee[s],i=xn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function tr(e){if(!(e.flags&1)){const t=xn(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=xn(n)?Ee.push(e):Ee.splice(Pl(t),0,e),e.flags|=1,Vi()}}function Vi(){kn||(kn=ki.then(Hi))}function Nl(e){j(e)?zt.push(...e):yt&&e.id===-1?yt.splice(Gt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1),Vi()}function gr(e,t,n=Ye+1){for(;n<Ee.length;n++){const s=Ee[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ee.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ji(e){if(zt.length){const t=[...new Set(zt)].sort((n,s)=>xn(n)-xn(s));if(zt.length=0,yt){yt.push(...t);return}for(yt=t,Gt=0;Gt<yt.length;Gt++){const n=yt[Gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,Gt=0}}const xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Hi(e){try{for(Ye=0;Ye<Ee.length;Ye++){const t=Ee[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Sn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<Ee.length;Ye++){const t=Ee[Ye];t&&(t.flags&=-2)}Ye=-1,Ee.length=0,ji(),kn=null,(Ee.length||zt.length)&&Hi()}}let Pe=null,Ui=null;function $n(e){const t=Pe;return Pe=e,Ui=e&&e.type.__scopeId||null,t}function Lt(e,t=Pe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Hn(-1);const i=$n(t);let o;try{o=e(...r)}finally{$n(i),s._d&&Hn(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Tt(e,t){if(Pe===null)return e;const n=rs(Pe),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,c=te]=t[r];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&at(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function It(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(ft(),tt(c,n,8,[e.el,l,e,t]),dt())}}function Pn(e,t){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[e]=t}}function et(e,t,n=!1){const s=Pc();if(s||Yt){let r=Yt?Yt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&H(t)?t.call(s&&s.proxy):t}}const Fl=Symbol.for("v-scx"),Bl=()=>et(Fl);function pn(e,t,n){return Gi(e,t,n)}function Gi(e,t,n=te){const{immediate:s,deep:r,flush:i,once:o}=n,l=me({},n),c=t&&s||!t&&i!=="post";let u;if(wn){if(i==="sync"){const m=Bl();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ze,m.resume=Ze,m.pause=Ze,m}}const a=_e;l.call=(m,A,v)=>tt(m,a,A,v);let f=!1;i==="post"?l.scheduler=m=>{Me(m,a&&a.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(m,A)=>{A?m():tr(m)}),l.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,a&&(m.id=a.uid,m.i=a))};const p=Ml(e,t,l);return wn&&(u?u.push(p):c&&p()),p}function Ll(e,t,n){const s=this.proxy,r=ae(e)?e.includes(".")?Ki(s,e):()=>s[e]:e.bind(s,s);let i;H(t)?i=t:(i=t.handler,n=t);const o=In(this),l=Gi(r,i.bind(s),n);return o(),l}function Ki(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const kl=Symbol("_vte"),$l=e=>e.__isTeleport,Vl=Symbol("_leaveCb");function nr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,nr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wi(e,t){return H(e)?me({name:e.name},t,{setup:e}):e}function qi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Vn=new WeakMap;function mn(e,t,n,s,r=!1){if(j(e)){e.forEach((A,v)=>mn(A,t&&(j(t)?t[v]:t),n,s,r));return}if(gn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&mn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?rs(s.component):s.el,o=r?null:i,{i:l,r:c}=e,u=t&&t.r,a=l.refs===te?l.refs={}:l.refs,f=l.setupState,p=J(f),m=f===te?di:A=>X(p,A);if(u!=null&&u!==c){if(vr(t),ae(u))a[u]=null,m(u)&&(f[u]=null);else if(be(u)){u.value=null;const A=t;A.k&&(a[A.k]=null)}}if(H(c))Sn(c,l,12,[o,a]);else{const A=ae(c),v=be(c);if(A||v){const D=()=>{if(e.f){const w=A?m(c)?f[c]:a[c]:c.value;if(r)j(w)&&Gs(w,i);else if(j(w))w.includes(i)||w.push(i);else if(A)a[c]=[i],m(c)&&(f[c]=a[c]);else{const O=[i];c.value=O,e.k&&(a[e.k]=O)}}else A?(a[c]=o,m(c)&&(f[c]=o)):v&&(c.value=o,e.k&&(a[e.k]=o))};if(o){const w=()=>{D(),Vn.delete(e)};w.id=-1,Vn.set(e,w),Me(w,n)}else vr(e),D()}}}function vr(e){const t=Vn.get(e);t&&(t.flags|=8,Vn.delete(e))}Jn().requestIdleCallback;Jn().cancelIdleCallback;const gn=e=>!!e.type.__asyncLoader,Qi=e=>e.type.__isKeepAlive;function jl(e,t){zi(e,"a",t)}function Hl(e,t){zi(e,"da",t)}function zi(e,t,n=_e){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(es(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Qi(r.parent.vnode)&&Ul(s,t,n,r),r=r.parent}}function Ul(e,t,n,s){const r=es(t,e,s,!0);Xi(()=>{Gs(s[t],r)},n)}function es(e,t,n=_e,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{ft();const l=In(n),c=tt(t,n,e,o);return l(),dt(),c});return s?r.unshift(i):r.push(i),i}}const mt=e=>(t,n=_e)=>{(!wn||e==="sp")&&es(e,(...s)=>t(...s),n)},Gl=mt("bm"),Yi=mt("m"),Kl=mt("bu"),Wl=mt("u"),Ji=mt("bum"),Xi=mt("um"),ql=mt("sp"),Ql=mt("rtg"),zl=mt("rtc");function Yl(e,t=_e){es("ec",e,t)}const Jl="components";function ts(e,t){return Zl(Jl,e,!0,t)||e}const Xl=Symbol.for("v-ndc");function Zl(e,t,n=!0,s=!1){const r=Pe||_e;if(r){const i=r.type;{const l=kc(i,!1);if(l&&(l===t||l===ke(t)||l===Yn(ke(t))))return i}const o=_r(r[e]||i[e],t)||_r(r.appContext[e],t);return!o&&s?i:o}}function _r(e,t){return e&&(e[t]||e[ke(t)]||e[Yn(ke(t))])}function kt(e,t,n,s){let r;const i=n,o=j(e);if(o||ae(e)){const l=o&&Ft(e);let c=!1,u=!1;l&&(c=!Le(e),u=ht(e),e=Xn(e)),r=new Array(e.length);for(let a=0,f=e.length;a<f;a++)r[a]=t(c?u?Xt(Ue(e[a])):Ue(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(re(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const a=l[c];r[c]=t(e[a],a,c,i)}}else r=[];return r}const Ss=e=>e?yo(e)?rs(e):Ss(e.parent):null,vn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ss(e.parent),$root:e=>Ss(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||(e.f=()=>{tr(e.update)}),$nextTick:e=>e.n||(e.n=$i.bind(e.proxy)),$watch:e=>Ll.bind(e)}),fs=(e,t)=>e!==te&&!e.__isScriptSetup&&X(e,t),ec={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(fs(s,t))return o[t]=1,s[t];if(r!==te&&X(r,t))return o[t]=2,r[t];if(X(i,t))return o[t]=3,i[t];if(n!==te&&X(n,t))return o[t]=4,n[t];Is&&(o[t]=0)}}const u=vn[t];let a,f;if(u)return t==="$attrs"&&ve(e.attrs,"get",""),u(e);if((a=l.__cssModules)&&(a=a[t]))return a;if(n!==te&&X(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,X(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return fs(r,t)?(r[t]=n,!0):s!==te&&X(s,t)?(s[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let c;return!!(n[l]||e!==te&&l[0]!=="$"&&X(e,l)||fs(t,l)||X(i,l)||X(s,l)||X(vn,l)||X(r.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function yr(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Is=!0;function tc(e){const t=eo(e),n=e.proxy,s=e.ctx;Is=!1,t.beforeCreate&&br(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:a,beforeMount:f,mounted:p,beforeUpdate:m,updated:A,activated:v,deactivated:D,beforeDestroy:w,beforeUnmount:O,destroyed:F,unmounted:P,render:Q,renderTracked:le,renderTriggered:K,errorCaptured:ue,serverPrefetch:he,expose:Oe,inheritAttrs:Fe,components:we,directives:Ve,filters:pe}=t;if(u&&nc(u,s,null),o)for(const ee in o){const z=o[ee];H(z)&&(s[ee]=z.bind(n))}if(r){const ee=r.call(n,n);re(ee)&&(e.data=Jt(ee))}if(Is=!0,i)for(const ee in i){const z=i[ee],st=H(z)?z.bind(n,n):H(z.get)?z.get.bind(n,n):Ze,gt=!H(z)&&H(z.set)?z.set.bind(n):Ze,Ke=ye({get:st,set:gt});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Ce=>Ke.value=Ce})}if(l)for(const ee in l)Zi(l[ee],s,n,ee);if(c){const ee=H(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(z=>{Pn(z,ee[z])})}a&&br(a,e,"c");function ce(ee,z){j(z)?z.forEach(st=>ee(st.bind(n))):z&&ee(z.bind(n))}if(ce(Gl,f),ce(Yi,p),ce(Kl,m),ce(Wl,A),ce(jl,v),ce(Hl,D),ce(Yl,ue),ce(zl,le),ce(Ql,K),ce(Ji,O),ce(Xi,P),ce(ql,he),j(Oe))if(Oe.length){const ee=e.exposed||(e.exposed={});Oe.forEach(z=>{Object.defineProperty(ee,z,{get:()=>n[z],set:st=>n[z]=st,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===Ze&&(e.render=Q),Fe!=null&&(e.inheritAttrs=Fe),we&&(e.components=we),Ve&&(e.directives=Ve),he&&qi(e)}function nc(e,t,n=Ze){j(e)&&(e=Rs(e));for(const s in e){const r=e[s];let i;re(r)?"default"in r?i=et(r.from||s,r.default,!0):i=et(r.from||s):i=et(r),be(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function br(e,t,n){tt(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zi(e,t,n,s){let r=s.includes(".")?Ki(n,s):()=>n[s];if(ae(e)){const i=t[e];H(i)&&pn(r,i)}else if(H(e))pn(r,e.bind(n));else if(re(e))if(j(e))e.forEach(i=>Zi(i,t,n,s));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&pn(r,i,e)}}function eo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>jn(c,u,o,!0)),jn(c,t,o)),re(t)&&i.set(t,c),c}function jn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&jn(e,i,n,!0),r&&r.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=sc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const sc={data:Ar,props:xr,emits:xr,methods:un,computed:un,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:un,directives:un,watch:ic,provide:Ar,inject:rc};function Ar(e,t){return t?e?function(){return me(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function rc(e,t){return un(Rs(e),Rs(t))}function Rs(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?me(Object.create(null),e,t):t}function xr(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:me(Object.create(null),yr(e),yr(t??{})):t}function ic(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const s in t)n[s]=Ae(e[s],t[s]);return n}function to(){return{app:null,config:{isNativeTag:di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oc=0;function lc(e,t){return function(s,r=null){H(s)||(s=me({},s)),r!=null&&!re(r)&&(r=null);const i=to(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:oc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Vc,get config(){return i.config},set config(a){},use(a,...f){return o.has(a)||(a&&H(a.install)?(o.add(a),a.install(u,...f)):H(a)&&(o.add(a),a(u,...f))),u},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),u},component(a,f){return f?(i.components[a]=f,u):i.components[a]},directive(a,f){return f?(i.directives[a]=f,u):i.directives[a]},mount(a,f,p){if(!c){const m=u._ceVNode||oe(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,a,p),c=!0,u._container=a,a.__vue_app__=u,rs(m.component)}},onUnmount(a){l.push(a)},unmount(){c&&(tt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(a,f){return i.provides[a]=f,u},runWithContext(a){const f=Yt;Yt=u;try{return a()}finally{Yt=f}}};return u}}let Yt=null;const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${Vt(t)}Modifiers`];function ac(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||te;let r=n;const i=t.startsWith("update:"),o=i&&cc(s,t.slice(7));o&&(o.trim&&(r=n.map(a=>ae(a)?a.trim():a)),o.number&&(r=n.map(Ws)));let l,c=s[l=os(t)]||s[l=os(ke(t))];!c&&i&&(c=s[l=os(Vt(t))]),c&&tt(c,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,tt(u,e,6,r)}}const uc=new WeakMap;function no(e,t,n=!1){const s=n?uc:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!H(e)){const c=u=>{const a=no(u,t,!0);a&&(l=!0,me(o,a))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(re(e)&&s.set(e,null),null):(j(i)?i.forEach(c=>o[c]=null):me(o,i),re(e)&&s.set(e,o),o)}function ns(e,t){return!e||!qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,Vt(t))||X(e,t))}function Er(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:a,props:f,data:p,setupState:m,ctx:A,inheritAttrs:v}=e,D=$n(e);let w,O;try{if(n.shapeFlag&4){const P=r||s,Q=P;w=Je(u.call(Q,P,a,f,m,p,A)),O=l}else{const P=t;w=Je(P.length>1?P(f,{attrs:l,slots:o,emit:c}):P(f,null)),O=t.props?l:fc(l)}}catch(P){_n.length=0,Zn(P,e,1),w=oe(Et)}let F=w;if(O&&v!==!1){const P=Object.keys(O),{shapeFlag:Q}=F;P.length&&Q&7&&(i&&P.some(Us)&&(O=dc(O,i)),F=Zt(F,O,!1,!0))}return n.dirs&&(F=Zt(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&nr(F,n.transition),w=F,$n(D),w}const fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||qn(n))&&((t||(t={}))[n]=e[n]);return t},dc=(e,t)=>{const n={};for(const s in e)(!Us(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function hc(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wr(s,o,u):!!o;if(c&8){const a=t.dynamicProps;for(let f=0;f<a.length;f++){const p=a[f];if(o[p]!==s[p]&&!ns(u,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?wr(s,o,u):!0:!!o;return!1}function wr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!ns(n,i))return!0}return!1}function pc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const so={},ro=()=>Object.create(so),io=e=>Object.getPrototypeOf(e)===so;function mc(e,t,n,s=!1){const r={},i=ro();e.propsDefaults=Object.create(null),oo(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Fi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function gc(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=J(r),[c]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let f=0;f<a.length;f++){let p=a[f];if(ns(e.emitsOptions,p))continue;const m=t[p];if(c)if(X(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const A=ke(p);r[A]=Os(c,l,A,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{oo(e,t,r,i)&&(u=!0);let a;for(const f in l)(!t||!X(t,f)&&((a=Vt(f))===f||!X(t,a)))&&(c?n&&(n[f]!==void 0||n[a]!==void 0)&&(r[f]=Os(c,l,f,void 0,e,!0)):delete r[f]);if(i!==l)for(const f in i)(!t||!X(t,f))&&(delete i[f],u=!0)}u&&ct(e.attrs,"set","")}function oo(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(fn(c))continue;const u=t[c];let a;r&&X(r,a=ke(c))?!i||!i.includes(a)?n[a]=u:(l||(l={}))[a]=u:ns(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=J(n),u=l||te;for(let a=0;a<i.length;a++){const f=i[a];n[f]=Os(r,c,f,u[f],e,!X(u,f))}}return o}function Os(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const a=In(r);s=u[n]=c.call(null,t),a()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Vt(n))&&(s=!0))}return s}const vc=new WeakMap;function lo(e,t,n=!1){const s=n?vc:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let c=!1;if(!H(e)){const a=f=>{c=!0;const[p,m]=lo(f,t,!0);me(o,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!c)return re(e)&&s.set(e,qt),qt;if(j(i))for(let a=0;a<i.length;a++){const f=ke(i[a]);Cr(f)&&(o[f]=te)}else if(i)for(const a in i){const f=ke(a);if(Cr(f)){const p=i[a],m=o[f]=j(p)||H(p)?{type:p}:me({},p),A=m.type;let v=!1,D=!0;if(j(A))for(let w=0;w<A.length;++w){const O=A[w],F=H(O)&&O.name;if(F==="Boolean"){v=!0;break}else F==="String"&&(D=!1)}else v=H(A)&&A.name==="Boolean";m[0]=v,m[1]=D,(v||X(m,"default"))&&l.push(f)}}const u=[o,l];return re(e)&&s.set(e,u),u}function Cr(e){return e[0]!=="$"&&!fn(e)}const sr=e=>e==="_"||e==="_ctx"||e==="$stable",rr=e=>j(e)?e.map(Je):[Je(e)],_c=(e,t,n)=>{if(t._n)return t;const s=Lt((...r)=>rr(t(...r)),n);return s._c=!1,s},co=(e,t,n)=>{const s=e._ctx;for(const r in e){if(sr(r))continue;const i=e[r];if(H(i))t[r]=_c(r,i,s);else if(i!=null){const o=rr(i);t[r]=()=>o}}},ao=(e,t)=>{const n=rr(t);e.slots.default=()=>n},uo=(e,t,n)=>{for(const s in t)(n||!sr(s))&&(e[s]=t[s])},yc=(e,t,n)=>{const s=e.slots=ro();if(e.vnode.shapeFlag&32){const r=t._;r?(uo(s,t,n),n&&vi(s,"_",r,!0)):co(t,s)}else t&&ao(e,t)},bc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=te;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:uo(r,t,n):(i=!t.$stable,co(t,r)),o=t}else t&&(ao(e,t),o={default:1});if(i)for(const l in r)!sr(l)&&o[l]==null&&delete r[l]},Me=Cc;function Ac(e){return xc(e)}function xc(e,t){const n=Jn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:a,parentNode:f,nextSibling:p,setScopeId:m=Ze,insertStaticContent:A}=e,v=(d,h,g,_=null,x=null,y=null,R=void 0,S=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!cn(d,h)&&(_=b(d),Ce(d,x,y,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:E,ref:k,shapeFlag:M}=h;switch(E){case ss:D(d,h,g,_);break;case Et:w(d,h,g,_);break;case Nn:d==null&&O(h,g,_,R);break;case de:we(d,h,g,_,x,y,R,S,C);break;default:M&1?Q(d,h,g,_,x,y,R,S,C):M&6?Ve(d,h,g,_,x,y,R,S,C):(M&64||M&128)&&E.process(d,h,g,_,x,y,R,S,C,B)}k!=null&&x?mn(k,d&&d.ref,y,h||d,!h):k==null&&d&&d.ref!=null&&mn(d.ref,null,y,d,!0)},D=(d,h,g,_)=>{if(d==null)s(h.el=l(h.children),g,_);else{const x=h.el=d.el;h.children!==d.children&&u(x,h.children)}},w=(d,h,g,_)=>{d==null?s(h.el=c(h.children||""),g,_):h.el=d.el},O=(d,h,g,_)=>{[d.el,d.anchor]=A(d.children,h,g,_,d.el,d.anchor)},F=({el:d,anchor:h},g,_)=>{let x;for(;d&&d!==h;)x=p(d),s(d,g,_),d=x;s(h,g,_)},P=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),r(d),d=g;r(h)},Q=(d,h,g,_,x,y,R,S,C)=>{if(h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),d==null)le(h,g,_,x,y,R,S,C);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),he(d,h,x,y,R,S,C)}finally{E&&E._endPatch()}}},le=(d,h,g,_,x,y,R,S)=>{let C,E;const{props:k,shapeFlag:M,transition:L,dirs:V}=d;if(C=d.el=o(d.type,y,k&&k.is,k),M&8?a(C,d.children):M&16&&ue(d.children,C,null,_,x,ds(d,y),R,S),V&&It(d,null,_,"created"),K(C,d,d.scopeId,R,_),k){for(const ne in k)ne!=="value"&&!fn(ne)&&i(C,ne,null,k[ne],y,_);"value"in k&&i(C,"value",null,k.value,y),(E=k.onVnodeBeforeMount)&&ze(E,_,d)}V&&It(d,null,_,"beforeMount");const q=Ec(x,L);q&&L.beforeEnter(C),s(C,h,g),((E=k&&k.onVnodeMounted)||q||V)&&Me(()=>{E&&ze(E,_,d),q&&L.enter(C),V&&It(d,null,_,"mounted")},x)},K=(d,h,g,_,x)=>{if(g&&m(d,g),_)for(let y=0;y<_.length;y++)m(d,_[y]);if(x){let y=x.subTree;if(h===y||mo(y.type)&&(y.ssContent===h||y.ssFallback===h)){const R=x.vnode;K(d,R,R.scopeId,R.slotScopeIds,x.parent)}}},ue=(d,h,g,_,x,y,R,S,C=0)=>{for(let E=C;E<d.length;E++){const k=d[E]=S?bt(d[E]):Je(d[E]);v(null,k,h,g,_,x,y,R,S)}},he=(d,h,g,_,x,y,R)=>{const S=h.el=d.el;let{patchFlag:C,dynamicChildren:E,dirs:k}=h;C|=d.patchFlag&16;const M=d.props||te,L=h.props||te;let V;if(g&&Rt(g,!1),(V=L.onVnodeBeforeUpdate)&&ze(V,g,h,d),k&&It(h,d,g,"beforeUpdate"),g&&Rt(g,!0),(M.innerHTML&&L.innerHTML==null||M.textContent&&L.textContent==null)&&a(S,""),E?Oe(d.dynamicChildren,E,S,g,_,ds(h,x),y):R||z(d,h,S,null,g,_,ds(h,x),y,!1),C>0){if(C&16)Fe(S,M,L,g,x);else if(C&2&&M.class!==L.class&&i(S,"class",null,L.class,x),C&4&&i(S,"style",M.style,L.style,x),C&8){const q=h.dynamicProps;for(let ne=0;ne<q.length;ne++){const Z=q[ne],Se=M[Z],Ie=L[Z];(Ie!==Se||Z==="value")&&i(S,Z,Se,Ie,x,g)}}C&1&&d.children!==h.children&&a(S,h.children)}else!R&&E==null&&Fe(S,M,L,g,x);((V=L.onVnodeUpdated)||k)&&Me(()=>{V&&ze(V,g,h,d),k&&It(h,d,g,"updated")},_)},Oe=(d,h,g,_,x,y,R)=>{for(let S=0;S<h.length;S++){const C=d[S],E=h[S],k=C.el&&(C.type===de||!cn(C,E)||C.shapeFlag&198)?f(C.el):g;v(C,E,k,null,_,x,y,R,!0)}},Fe=(d,h,g,_,x)=>{if(h!==g){if(h!==te)for(const y in h)!fn(y)&&!(y in g)&&i(d,y,h[y],null,x,_);for(const y in g){if(fn(y))continue;const R=g[y],S=h[y];R!==S&&y!=="value"&&i(d,y,S,R,x,_)}"value"in g&&i(d,"value",h.value,g.value,x)}},we=(d,h,g,_,x,y,R,S,C)=>{const E=h.el=d?d.el:l(""),k=h.anchor=d?d.anchor:l("");let{patchFlag:M,dynamicChildren:L,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),d==null?(s(E,g,_),s(k,g,_),ue(h.children||[],g,k,x,y,R,S,C)):M>0&&M&64&&L&&d.dynamicChildren&&d.dynamicChildren.length===L.length?(Oe(d.dynamicChildren,L,g,x,y,R,S),(h.key!=null||x&&h===x.subTree)&&fo(d,h,!0)):z(d,h,g,k,x,y,R,S,C)},Ve=(d,h,g,_,x,y,R,S,C)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?x.ctx.activate(h,g,_,R,C):pe(h,g,_,x,y,R,C):je(d,h,C)},pe=(d,h,g,_,x,y,R)=>{const S=d.component=Dc(d,_,x);if(Qi(d)&&(S.ctx.renderer=B),Nc(S,!1,R),S.asyncDep){if(x&&x.registerDep(S,ce,R),!d.el){const C=S.subTree=oe(Et);w(null,C,h,g),d.placeholder=C.el}}else ce(S,d,h,g,x,y,R)},je=(d,h,g)=>{const _=h.component=d.component;if(hc(d,h,g))if(_.asyncDep&&!_.asyncResolved){ee(_,h,g);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},ce=(d,h,g,_,x,y,R)=>{const S=()=>{if(d.isMounted){let{next:M,bu:L,u:V,parent:q,vnode:ne}=d;{const qe=ho(d);if(qe){M&&(M.el=ne.el,ee(d,M,R)),qe.asyncDep.then(()=>{d.isUnmounted||S()});return}}let Z=M,Se;Rt(d,!1),M?(M.el=ne.el,ee(d,M,R)):M=ne,L&&Dn(L),(Se=M.props&&M.props.onVnodeBeforeUpdate)&&ze(Se,q,M,ne),Rt(d,!0);const Ie=Er(d),We=d.subTree;d.subTree=Ie,v(We,Ie,f(We.el),b(We),d,x,y),M.el=Ie.el,Z===null&&pc(d,Ie.el),V&&Me(V,x),(Se=M.props&&M.props.onVnodeUpdated)&&Me(()=>ze(Se,q,M,ne),x)}else{let M;const{el:L,props:V}=h,{bm:q,m:ne,parent:Z,root:Se,type:Ie}=d,We=gn(h);Rt(d,!1),q&&Dn(q),!We&&(M=V&&V.onVnodeBeforeMount)&&ze(M,Z,h),Rt(d,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(Ie);const qe=d.subTree=Er(d);v(null,qe,g,_,d,x,y),h.el=qe.el}if(ne&&Me(ne,x),!We&&(M=V&&V.onVnodeMounted)){const qe=h;Me(()=>ze(M,Z,qe),x)}(h.shapeFlag&256||Z&&gn(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Me(d.a,x),d.isMounted=!0,h=g=_=null}};d.scope.on();const C=d.effect=new Ai(S);d.scope.off();const E=d.update=C.run.bind(C),k=d.job=C.runIfDirty.bind(C);k.i=d,k.id=d.uid,C.scheduler=()=>tr(k),Rt(d,!0),E()},ee=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,gc(d,h.props,_,g),bc(d,h.children,g),ft(),gr(d),dt()},z=(d,h,g,_,x,y,R,S,C=!1)=>{const E=d&&d.children,k=d?d.shapeFlag:0,M=h.children,{patchFlag:L,shapeFlag:V}=h;if(L>0){if(L&128){gt(E,M,g,_,x,y,R,S,C);return}else if(L&256){st(E,M,g,_,x,y,R,S,C);return}}V&8?(k&16&&Be(E,x,y),M!==E&&a(g,M)):k&16?V&16?gt(E,M,g,_,x,y,R,S,C):Be(E,x,y,!0):(k&8&&a(g,""),V&16&&ue(M,g,_,x,y,R,S,C))},st=(d,h,g,_,x,y,R,S,C)=>{d=d||qt,h=h||qt;const E=d.length,k=h.length,M=Math.min(E,k);let L;for(L=0;L<M;L++){const V=h[L]=C?bt(h[L]):Je(h[L]);v(d[L],V,g,null,x,y,R,S,C)}E>k?Be(d,x,y,!0,!1,M):ue(h,g,_,x,y,R,S,C,M)},gt=(d,h,g,_,x,y,R,S,C)=>{let E=0;const k=h.length;let M=d.length-1,L=k-1;for(;E<=M&&E<=L;){const V=d[E],q=h[E]=C?bt(h[E]):Je(h[E]);if(cn(V,q))v(V,q,g,null,x,y,R,S,C);else break;E++}for(;E<=M&&E<=L;){const V=d[M],q=h[L]=C?bt(h[L]):Je(h[L]);if(cn(V,q))v(V,q,g,null,x,y,R,S,C);else break;M--,L--}if(E>M){if(E<=L){const V=L+1,q=V<k?h[V].el:_;for(;E<=L;)v(null,h[E]=C?bt(h[E]):Je(h[E]),g,q,x,y,R,S,C),E++}}else if(E>L)for(;E<=M;)Ce(d[E],x,y,!0),E++;else{const V=E,q=E,ne=new Map;for(E=q;E<=L;E++){const Te=h[E]=C?bt(h[E]):Je(h[E]);Te.key!=null&&ne.set(Te.key,E)}let Z,Se=0;const Ie=L-q+1;let We=!1,qe=0;const on=new Array(Ie);for(E=0;E<Ie;E++)on[E]=0;for(E=V;E<=M;E++){const Te=d[E];if(Se>=Ie){Ce(Te,x,y,!0);continue}let Qe;if(Te.key!=null)Qe=ne.get(Te.key);else for(Z=q;Z<=L;Z++)if(on[Z-q]===0&&cn(Te,h[Z])){Qe=Z;break}Qe===void 0?Ce(Te,x,y,!0):(on[Qe-q]=E+1,Qe>=qe?qe=Qe:We=!0,v(Te,h[Qe],g,null,x,y,R,S,C),Se++)}const ur=We?wc(on):qt;for(Z=ur.length-1,E=Ie-1;E>=0;E--){const Te=q+E,Qe=h[Te],fr=h[Te+1],dr=Te+1<k?fr.el||po(fr):_;on[E]===0?v(null,Qe,g,dr,x,y,R,S,C):We&&(Z<0||E!==ur[Z]?Ke(Qe,g,dr,2):Z--)}}},Ke=(d,h,g,_,x=null)=>{const{el:y,type:R,transition:S,children:C,shapeFlag:E}=d;if(E&6){Ke(d.component.subTree,h,g,_);return}if(E&128){d.suspense.move(h,g,_);return}if(E&64){R.move(d,h,g,B);return}if(R===de){s(y,h,g);for(let M=0;M<C.length;M++)Ke(C[M],h,g,_);s(d.anchor,h,g);return}if(R===Nn){F(d,h,g);return}if(_!==2&&E&1&&S)if(_===0)S.beforeEnter(y),s(y,h,g),Me(()=>S.enter(y),x);else{const{leave:M,delayLeave:L,afterLeave:V}=S,q=()=>{d.ctx.isUnmounted?r(y):s(y,h,g)},ne=()=>{y._isLeaving&&y[Vl](!0),M(y,()=>{q(),V&&V()})};L?L(y,q,ne):ne()}else s(y,h,g)},Ce=(d,h,g,_=!1,x=!1)=>{const{type:y,props:R,ref:S,children:C,dynamicChildren:E,shapeFlag:k,patchFlag:M,dirs:L,cacheIndex:V}=d;if(M===-2&&(x=!1),S!=null&&(ft(),mn(S,null,g,d,!0),dt()),V!=null&&(h.renderCache[V]=void 0),k&256){h.ctx.deactivate(d);return}const q=k&1&&L,ne=!gn(d);let Z;if(ne&&(Z=R&&R.onVnodeBeforeUnmount)&&ze(Z,h,d),k&6)St(d.component,g,_);else{if(k&128){d.suspense.unmount(g,_);return}q&&It(d,null,h,"beforeUnmount"),k&64?d.type.remove(d,h,g,B,_):E&&!E.hasOnce&&(y!==de||M>0&&M&64)?Be(E,h,g,!1,!0):(y===de&&M&384||!x&&k&16)&&Be(C,h,g),_&&jt(d)}(ne&&(Z=R&&R.onVnodeUnmounted)||q)&&Me(()=>{Z&&ze(Z,h,d),q&&It(d,null,h,"unmounted")},g)},jt=d=>{const{type:h,el:g,anchor:_,transition:x}=d;if(h===de){Ht(g,_);return}if(h===Nn){P(d);return}const y=()=>{r(g),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:S}=x,C=()=>R(g,y);S?S(d.el,y,C):C()}else y()},Ht=(d,h)=>{let g;for(;d!==h;)g=p(d),r(d),d=g;r(h)},St=(d,h,g)=>{const{bum:_,scope:x,job:y,subTree:R,um:S,m:C,a:E}=d;Sr(C),Sr(E),_&&Dn(_),x.stop(),y&&(y.flags|=8,Ce(R,d,h,g)),S&&Me(S,h),Me(()=>{d.isUnmounted=!0},h)},Be=(d,h,g,_=!1,x=!1,y=0)=>{for(let R=y;R<d.length;R++)Ce(d[R],h,g,_,x)},b=d=>{if(d.shapeFlag&6)return b(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[kl];return g?p(g):h};let N=!1;const T=(d,h,g)=>{let _;d==null?h._vnode&&(Ce(h._vnode,null,null,!0),_=h._vnode.component):v(h._vnode||null,d,h,null,null,null,g),h._vnode=d,N||(N=!0,gr(_),ji(),N=!1)},B={p:v,um:Ce,m:Ke,r:jt,mt:pe,mc:ue,pc:z,pbc:Oe,n:b,o:e};return{render:T,hydrate:void 0,createApp:lc(T)}}function ds({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ec(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fo(e,t,n=!1){const s=e.children,r=t.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=bt(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&fo(o,l)),l.type===ss&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=i+(e.type===de?1:0)),l.type===Et&&!l.el&&(l.el=o.el)}}function wc(e){const t=e.slice(),n=[0];let s,r,i,o,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function ho(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ho(t)}function Sr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function po(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?po(t.subTree):null}const mo=e=>e.__isSuspense;function Cc(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Nl(e)}const de=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Nn=Symbol.for("v-stc"),_n=[];let Ne=null;function U(e=!1){_n.push(Ne=e?null:[])}function Sc(){_n.pop(),Ne=_n[_n.length-1]||null}let En=1;function Hn(e,t=!1){En+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function go(e){return e.dynamicChildren=En>0?Ne||qt:null,Sc(),En>0&&Ne&&Ne.push(e),e}function G(e,t,n,s,r,i){return go(I(e,t,n,s,r,i,!0))}function vo(e,t,n,s,r){return go(oe(e,t,n,s,r,!0))}function Un(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const _o=({key:e})=>e??null,Fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||be(e)||H(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function I(e,t=null,n=null,s=0,r=null,i=e===de?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_o(t),ref:t&&Fn(t),scopeId:Ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return l?(ir(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),En>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const oe=Ic;function Ic(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Xl)&&(e=Et),Un(e)){const l=Zt(e,t,!0);return n&&ir(l,n),En>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag=-2,l}if($c(e)&&(e=e.__vccOpts),t){t=Rc(t);let{class:l,style:c}=t;l&&!ae(l)&&(t.class=sn(l)),re(c)&&(er(c)&&!j(c)&&(c=me({},c)),t.style=qs(c))}const o=ae(e)?1:mo(e)?128:$l(e)?64:re(e)?4:H(e)?2:0;return I(e,t,n,s,r,o,i,!0)}function Rc(e){return e?er(e)||io(e)?me({},e):e:null}function Zt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=e,u=t?Oc(r||{},t):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&_o(u),ref:t&&t.ref?n&&i?j(i)?i.concat(Fn(t)):[i,Fn(t)]:Fn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&nr(a,c.clone(a)),a}function en(e=" ",t=0){return oe(ss,null,e,t)}function nt(e,t){const n=oe(Nn,null,e);return n.staticCount=t,n}function ot(e="",t=!1){return t?(U(),vo(Et,null,e)):oe(Et,null,e)}function Je(e){return e==null||typeof e=="boolean"?oe(Et):j(e)?oe(de,null,e.slice()):Un(e)?bt(e):oe(ss,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function ir(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ir(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!io(t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),s&64?(n=16,t=[en(t)]):n=8);e.children=t,e.shapeFlag|=n}function Oc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=sn([t.class,s.class]));else if(r==="style")t.style=qs([t.style,s.style]);else if(qn(r)){const i=t[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ze(e,t,n,s=null){tt(e,t,7,[n,s])}const Tc=to();let Mc=0;function Dc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Tc,i={uid:Mc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lo(s,r),emitsOptions:no(s,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ac.bind(null,i),e.ce&&e.ce(i),i}let _e=null;const Pc=()=>_e||Pe;let Gn,Ts;{const e=Jn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Gn=t("__VUE_INSTANCE_SETTERS__",n=>_e=n),Ts=t("__VUE_SSR_SETTERS__",n=>wn=n)}const In=e=>{const t=_e;return Gn(e),e.scope.on(),()=>{e.scope.off(),Gn(t)}},Ir=()=>{_e&&_e.scope.off(),Gn(null)};function yo(e){return e.vnode.shapeFlag&4}let wn=!1;function Nc(e,t=!1,n=!1){t&&Ts(t);const{props:s,children:r}=e.vnode,i=yo(e);mc(e,s,i,t),yc(e,r,n||t);const o=i?Fc(e,t):void 0;return t&&Ts(!1),o}function Fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ec);const{setup:s}=n;if(s){ft();const r=e.setupContext=s.length>1?Lc(e):null,i=In(e),o=Sn(s,e,0,[e.props,r]),l=pi(o);if(dt(),i(),(l||e.sp)&&!gn(e)&&qi(e),l){if(o.then(Ir,Ir),t)return o.then(c=>{Rr(e,c)}).catch(c=>{Zn(c,e,0)});e.asyncDep=o}else Rr(e,o)}else bo(e)}function Rr(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Li(t)),bo(e)}function bo(e,t,n){const s=e.type;e.render||(e.render=s.render||Ze);{const r=In(e);ft();try{tc(e)}finally{dt(),r()}}}const Bc={get(e,t){return ve(e,"get",""),e[t]}};function Lc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bc),slots:e.slots,emit:e.emit,expose:t}}function rs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Li(wl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)},has(t,n){return n in t||n in vn}})):e.proxy}function kc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function $c(e){return H(e)&&"__vccOpts"in e}const ye=(e,t)=>Ol(e,t,wn);function Ao(e,t,n){try{Hn(-1);const s=arguments.length;return s===2?re(t)&&!j(t)?Un(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Un(n)&&(n=[n]),oe(e,t,n))}finally{Hn(1)}}const Vc="3.5.27";let Ms;const Or=typeof window<"u"&&window.trustedTypes;if(Or)try{Ms=Or.createPolicy("vue",{createHTML:e=>e})}catch{}const xo=Ms?e=>Ms.createHTML(e):e=>e,jc="http://www.w3.org/2000/svg",Hc="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Tr=lt&&lt.createElement("template"),Uc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?lt.createElementNS(jc,e):t==="mathml"?lt.createElementNS(Hc,e):n?lt.createElement(e,{is:n}):lt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Tr.innerHTML=xo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Tr.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Gc=Symbol("_vtc");function Kc(e,t,n){const s=e[Gc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Mr=Symbol("_vod"),Wc=Symbol("_vsh"),qc=Symbol(""),Qc=/(?:^|;)\s*display\s*:/;function zc(e,t,n){const s=e.style,r=ae(n);let i=!1;if(n&&!r){if(t)if(ae(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Bn(s,l,"")}else for(const o in t)n[o]==null&&Bn(s,o,"");for(const o in n)o==="display"&&(i=!0),Bn(s,o,n[o])}else if(r){if(t!==n){const o=s[qc];o&&(n+=";"+o),s.cssText=n,i=Qc.test(n)}}else t&&e.removeAttribute("style");Mr in e&&(e[Mr]=i?s.display:"",e[Wc]&&(s.display="none"))}const Dr=/\s*!important$/;function Bn(e,t,n){if(j(n))n.forEach(s=>Bn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Yc(e,t);Dr.test(n)?e.setProperty(Vt(s),n.replace(Dr,""),"important"):e[s]=n}}const Pr=["Webkit","Moz","ms"],hs={};function Yc(e,t){const n=hs[t];if(n)return n;let s=ke(t);if(s!=="filter"&&s in e)return hs[t]=s;s=Yn(s);for(let r=0;r<Pr.length;r++){const i=Pr[r]+s;if(i in e)return hs[t]=i}return t}const Nr="http://www.w3.org/1999/xlink";function Fr(e,t,n,s,r,i=sl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Nr,t.slice(6,t.length)):e.setAttributeNS(Nr,t,n):n==null||i&&!_i(n)?e.removeAttribute(t):e.setAttribute(t,i?"":wt(n)?String(n):n)}function Br(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?xo(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=_i(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Kt(e,t,n,s){e.addEventListener(t,n,s)}function Jc(e,t,n,s){e.removeEventListener(t,n,s)}const Lr=Symbol("_vei");function Xc(e,t,n,s,r=null){const i=e[Lr]||(e[Lr]={}),o=i[t];if(s&&o)o.value=s;else{const[l,c]=Zc(t);if(s){const u=i[t]=na(s,r);Kt(e,l,u,c)}else o&&(Jc(e,l,o,c),i[t]=void 0)}}const kr=/(?:Once|Passive|Capture)$/;function Zc(e){let t;if(kr.test(e)){t={};let s;for(;s=e.match(kr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let ps=0;const ea=Promise.resolve(),ta=()=>ps||(ea.then(()=>ps=0),ps=Date.now());function na(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(sa(s,n.value),t,5,[s])};return n.value=e,n.attached=ta(),n}function sa(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const $r=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ra=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Kc(e,s,o):t==="style"?zc(e,n,s):qn(t)?Us(t)||Xc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ia(e,t,s,o))?(Br(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Fr(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ae(s))?Br(e,ke(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Fr(e,t,s,o))};function ia(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&$r(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $r(t)&&ae(n)?!1:t in e}const Vr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>Dn(t,n):t};function oa(e){e.target.composing=!0}function jr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ms=Symbol("_assign");function Hr(e,t,n){return t&&(e=e.trim()),n&&(e=Ws(e)),e}const Mt={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[ms]=Vr(r);const i=s||r.props&&r.props.type==="number";Kt(e,t?"change":"input",o=>{o.target.composing||e[ms](Hr(e.value,n,i))}),(n||i)&&Kt(e,"change",()=>{e.value=Hr(e.value,n,i)}),t||(Kt(e,"compositionstart",oa),Kt(e,"compositionend",jr),Kt(e,"change",jr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[ms]=Vr(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Ws(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},la=["ctrl","shift","alt","meta"],ca={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>la.some(n=>e[`${n}Key`]&&!t.includes(n))},aa=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<t.length;o++){const l=ca[t[o]];if(l&&l(r,t))return}return e(r,...i)}))},ua=me({patchProp:ra},Uc);let Ur;function fa(){return Ur||(Ur=Ac(ua))}const da=((...e)=>{const t=fa().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=pa(s);if(!r)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,ha(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function ha(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pa(e){return ae(e)?document.querySelector(e):e}const Wt=typeof document<"u";function Eo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ma(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Eo(e.default)}const Y=Object.assign;function gs(e,t){const n={};for(const s in t){const r=t[s];n[s]=Ge(r)?r.map(e):e(r)}return n}const yn=()=>{},Ge=Array.isArray;function Gr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const wo=/#/g,ga=/&/g,va=/\//g,_a=/=/g,ya=/\?/g,Co=/\+/g,ba=/%5B/g,Aa=/%5D/g,So=/%5E/g,xa=/%60/g,Io=/%7B/g,Ea=/%7C/g,Ro=/%7D/g,wa=/%20/g;function or(e){return e==null?"":encodeURI(""+e).replace(Ea,"|").replace(ba,"[").replace(Aa,"]")}function Ca(e){return or(e).replace(Io,"{").replace(Ro,"}").replace(So,"^")}function Ds(e){return or(e).replace(Co,"%2B").replace(wa,"+").replace(wo,"%23").replace(ga,"%26").replace(xa,"`").replace(Io,"{").replace(Ro,"}").replace(So,"^")}function Sa(e){return Ds(e).replace(_a,"%3D")}function Ia(e){return or(e).replace(wo,"%23").replace(ya,"%3F")}function Ra(e){return Ia(e).replace(va,"%2F")}function Cn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Oa=/\/$/,Ta=e=>e.replace(Oa,"");function vs(e,t,n="/"){let s,r={},i="",o="";const l=t.indexOf("#");let c=t.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=t.slice(0,c),i=t.slice(c,l>0?l:t.length),r=e(i.slice(1))),l>=0&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=Na(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Cn(o)}}function Ma(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Kr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Da(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&tn(t.matched[s],n.matched[r])&&Oo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Pa(e[n],t[n]))return!1;return!0}function Pa(e,t){return Ge(e)?Wr(e,t):Ge(t)?Wr(t,e):e?.valueOf()===t?.valueOf()}function Wr(e,t){return Ge(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Na(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ps=(function(e){return e.pop="pop",e.push="push",e})({}),_s=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Fa(e){if(!e)if(Wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ta(e)}const Ba=/^[^#]+#/;function La(e,t){return e.replace(Ba,"#")+t}function ka(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const is=()=>({left:window.scrollX,top:window.scrollY});function $a(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=ka(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function qr(e,t){return(history.state?history.state.position-t:-1)+e}const Ns=new Map;function Va(e,t){Ns.set(e,t)}function ja(e){const t=Ns.get(e);return Ns.delete(e),t}function Ha(e){return typeof e=="string"||e&&typeof e=="object"}function To(e){return typeof e=="string"||typeof e=="symbol"}let ie=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Mo=Symbol("");ie.MATCHER_NOT_FOUND+"",ie.NAVIGATION_GUARD_REDIRECT+"",ie.NAVIGATION_ABORTED+"",ie.NAVIGATION_CANCELLED+"",ie.NAVIGATION_DUPLICATED+"";function nn(e,t){return Y(new Error,{type:e,[Mo]:!0},t)}function it(e,t){return e instanceof Error&&Mo in e&&(t==null||!!(e.type&t))}const Ua=["params","query","hash"];function Ga(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Ua)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Ka(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Co," "),i=r.indexOf("="),o=Cn(i<0?r:r.slice(0,i)),l=i<0?null:Cn(r.slice(i+1));if(o in t){let c=t[o];Ge(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Qr(e){let t="";for(let n in e){const s=e[n];if(n=Sa(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(s)?s.map(r=>r&&Ds(r)):[s&&Ds(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Wa(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ge(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const qa=Symbol(""),zr=Symbol(""),lr=Symbol(""),cr=Symbol(""),Fs=Symbol("");function an(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function At(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=p=>{p===!1?c(nn(ie.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?c(p):Ha(p)?c(nn(ie.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),l())},a=i(()=>e.call(s&&s.instances[r],t,n,u));let f=Promise.resolve(a);e.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function ys(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let c=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Eo(c)){const u=(c.__vccOpts||c)[t];u&&i.push(At(u,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=ma(a)?a.default:a;o.mods[l]=a,o.components[l]=f;const p=(f.__vccOpts||f)[t];return p&&At(p,n,s,o,l,r)()}))}}return i}function Qa(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>tn(u,l))?s.push(l):n.push(l));const c=e.matched[o];c&&(t.matched.find(u=>tn(u,c))||r.push(c))}return[n,s,r]}let za=()=>location.protocol+"//"+location.host;function Do(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Kr(l,"")}return Kr(n,e)+s+r}function Ya(e,t,n,s){let r=[],i=[],o=null;const l=({state:p})=>{const m=Do(e,location),A=n.value,v=t.value;let D=0;if(p){if(n.value=m,t.value=p,o&&o===A){o=null;return}D=v?p.position-v.position:0}else s(m);r.forEach(w=>{w(n.value,A,{delta:D,type:Ps.pop,direction:D?D>0?_s.forward:_s.back:_s.unknown})})};function c(){o=n.value}function u(p){r.push(p);const m=()=>{const A=r.indexOf(p);A>-1&&r.splice(A,1)};return i.push(m),m}function a(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Y({},p.state,{scroll:is()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",a),document.removeEventListener("visibilitychange",a)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a),{pauseListeners:c,listen:u,destroy:f}}function Yr(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?is():null}}function Ja(e){const{history:t,location:n}=window,s={value:Do(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,a){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:za()+e+c;try{t[a?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[a?"replace":"assign"](p)}}function o(c,u){i(c,Y({},t.state,Yr(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=c}function l(c,u){const a=Y({},r.value,t.state,{forward:c,scroll:is()});i(a.current,a,!0),i(c,Y({},Yr(s.value,c,null),{position:a.position+1},u),!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function Xa(e){e=Fa(e);const t=Ja(e),n=Ya(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Y({location:"",base:e,go:s,createHref:La.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}let Pt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var fe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(fe||{});const Za={type:Pt.Static,value:""},eu=/[a-zA-Z0-9_]/;function tu(e){if(!e)return[[]];if(e==="/")return[[Za]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=fe.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",a="";function f(){u&&(n===fe.Static?i.push({type:Pt.Static,value:u}):n===fe.Param||n===fe.ParamRegExp||n===fe.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Pt.Param,value:u,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==fe.ParamRegExp){s=n,n=fe.EscapeNext;continue}switch(n){case fe.Static:c==="/"?(u&&f(),o()):c===":"?(f(),n=fe.Param):p();break;case fe.EscapeNext:p(),n=s;break;case fe.Param:c==="("?n=fe.ParamRegExp:eu.test(c)?p():(f(),n=fe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case fe.ParamRegExp:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:n=fe.ParamRegExpEnd:a+=c;break;case fe.ParamRegExpEnd:f(),n=fe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,a="";break;default:t("Unknown state");break}}return n===fe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}const Jr="[^/]+?",nu={sensitive:!1,strict:!1,start:!0,end:!0};var xe=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(xe||{});const su=/[.+*?^${}()[\]/\\]/g;function ru(e,t){const n=Y({},nu,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const a=u.length?[]:[xe.Root];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=xe.Segment+(n.sensitive?xe.BonusCaseSensitive:0);if(p.type===Pt.Static)f||(r+="/"),r+=p.value.replace(su,"\\$&"),m+=xe.Static;else if(p.type===Pt.Param){const{value:A,repeatable:v,optional:D,regexp:w}=p;i.push({name:A,repeatable:v,optional:D});const O=w||Jr;if(O!==Jr){m+=xe.BonusCustomRegExp;try{`${O}`}catch(P){throw new Error(`Invalid custom RegExp for param "${A}" (${O}): `+P.message)}}let F=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(F=D&&u.length<2?`(?:/${F})`:"/"+F),D&&(F+="?"),r+=F,m+=xe.Dynamic,D&&(m+=xe.BonusOptional),v&&(m+=xe.BonusRepeatable),O===".*"&&(m+=xe.BonusWildcard)}a.push(m)}s.push(a)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=xe.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const a=u.match(o),f={};if(!a)return null;for(let p=1;p<a.length;p++){const m=a[p]||"",A=i[p-1];f[A.name]=m&&A.repeatable?m.split("/"):m}return f}function c(u){let a="",f=!1;for(const p of e){(!f||!a.endsWith("/"))&&(a+="/"),f=!1;for(const m of p)if(m.type===Pt.Static)a+=m.value;else if(m.type===Pt.Param){const{value:A,repeatable:v,optional:D}=m,w=A in u?u[A]:"";if(Ge(w)&&!v)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const O=Ge(w)?w.join("/"):w;if(!O)if(D)p.length<2&&(a.endsWith("/")?a=a.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);a+=O}}return a||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function iu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===xe.Static+xe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===xe.Static+xe.Segment?1:-1:0}function Po(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=iu(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Xr(s))return 1;if(Xr(r))return-1}return r.length-s.length}function Xr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ou={strict:!1,end:!0,sensitive:!1};function lu(e,t,n){const s=ru(tu(e.path),n),r=Y(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function cu(e,t){const n=[],s=new Map;t=Gr(ou,t);function r(f){return s.get(f)}function i(f,p,m){const A=!m,v=ei(f);v.aliasOf=m&&m.record;const D=Gr(t,f),w=[v];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const Q of P)w.push(ei(Y({},v,{components:m?m.record.components:v.components,path:Q,aliasOf:m?m.record:v})))}let O,F;for(const P of w){const{path:Q}=P;if(p&&Q[0]!=="/"){const le=p.record.path,K=le[le.length-1]==="/"?"":"/";P.path=p.record.path+(Q&&K+Q)}if(O=lu(P,p,D),m?m.alias.push(O):(F=F||O,F!==O&&F.alias.push(O),A&&f.name&&!ti(O)&&o(f.name)),No(O)&&c(O),v.children){const le=v.children;for(let K=0;K<le.length;K++)i(le[K],O,m&&m.children[K])}m=m||O}return F?()=>{o(F)}:yn}function o(f){if(To(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const p=fu(f,n);n.splice(p,0,f),f.record.name&&!ti(f)&&s.set(f.record.name,f)}function u(f,p){let m,A={},v,D;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw nn(ie.MATCHER_NOT_FOUND,{location:f});D=m.record.name,A=Y(Zr(p.params,m.keys.filter(F=>!F.optional).concat(m.parent?m.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),f.params&&Zr(f.params,m.keys.map(F=>F.name))),v=m.stringify(A)}else if(f.path!=null)v=f.path,m=n.find(F=>F.re.test(v)),m&&(A=m.parse(v),D=m.record.name);else{if(m=p.name?s.get(p.name):n.find(F=>F.re.test(p.path)),!m)throw nn(ie.MATCHER_NOT_FOUND,{location:f,currentLocation:p});D=m.record.name,A=Y({},p.params,f.params),v=m.stringify(A)}const w=[];let O=m;for(;O;)w.unshift(O.record),O=O.parent;return{name:D,path:v,params:A,matched:w,meta:uu(w)}}e.forEach(f=>i(f));function a(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:a,getRoutes:l,getRecordMatcher:r}}function Zr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function ei(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:au(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function au(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function ti(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function uu(e){return e.reduce((t,n)=>Y(t,n.meta),{})}function fu(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Po(e,t[i])<0?s=i:n=i+1}const r=du(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function du(e){let t=e;for(;t=t.parent;)if(No(t)&&Po(e,t)===0)return t}function No({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ni(e){const t=et(lr),n=et(cr),s=ye(()=>{const c=Bt(e.to);return t.resolve(c)}),r=ye(()=>{const{matched:c}=s.value,{length:u}=c,a=c[u-1],f=n.matched;if(!a||!f.length)return-1;const p=f.findIndex(tn.bind(null,a));if(p>-1)return p;const m=si(c[u-2]);return u>1&&si(a)===m&&f[f.length-1].path!==m?f.findIndex(tn.bind(null,c[u-2])):p}),i=ye(()=>r.value>-1&&vu(n.params,s.value.params)),o=ye(()=>r.value>-1&&r.value===n.matched.length-1&&Oo(n.params,s.value.params));function l(c={}){if(gu(c)){const u=t[Bt(e.replace)?"replace":"push"](Bt(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ye(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function hu(e){return e.length===1?e[0]:e}const pu=Wi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ni,setup(e,{slots:t}){const n=Jt(ni(e)),{options:s}=et(lr),r=ye(()=>({[ri(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ri(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&hu(t.default(n));return e.custom?i:Ao("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),mu=pu;function gu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vu(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ge(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function si(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ri=(e,t,n)=>e??t??n,_u=Wi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=et(Fs),r=ye(()=>e.route||s.value),i=et(zr,0),o=ye(()=>{let u=Bt(i);const{matched:a}=r.value;let f;for(;(f=a[u])&&!f.components;)u++;return u}),l=ye(()=>r.value.matched[o.value]);Pn(zr,ye(()=>o.value+1)),Pn(qa,l),Pn(Fs,r);const c=ut();return pn(()=>[c.value,l.value,e.name],([u,a,f],[p,m,A])=>{a&&(a.instances[f]=u,m&&m!==a&&u&&u===p&&(a.leaveGuards.size||(a.leaveGuards=m.leaveGuards),a.updateGuards.size||(a.updateGuards=m.updateGuards))),u&&a&&(!m||!tn(a,m)||!p)&&(a.enterCallbacks[f]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,a=e.name,f=l.value,p=f&&f.components[a];if(!p)return ii(n.default,{Component:p,route:u});const m=f.props[a],A=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=Ao(p,Y({},A,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[a]=null)},ref:c}));return ii(n.default,{Component:D,route:u})||D}}});function ii(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Fo=_u;function yu(e){const t=cu(e.routes,e),n=e.parseQuery||Ka,s=e.stringifyQuery||Qr,r=e.history,i=an(),o=an(),l=an(),c=Cl(vt);let u=vt;Wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=gs.bind(null,b=>""+b),f=gs.bind(null,Ra),p=gs.bind(null,Cn);function m(b,N){let T,B;return To(b)?(T=t.getRecordMatcher(b),B=N):B=b,t.addRoute(B,T)}function A(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function v(){return t.getRoutes().map(b=>b.record)}function D(b){return!!t.getRecordMatcher(b)}function w(b,N){if(N=Y({},N||c.value),typeof b=="string"){const g=vs(n,b,N.path),_=t.resolve({path:g.path},N),x=r.createHref(g.fullPath);return Y(g,_,{params:p(_.params),hash:Cn(g.hash),redirectedFrom:void 0,href:x})}let T;if(b.path!=null)T=Y({},b,{path:vs(n,b.path,N.path).path});else{const g=Y({},b.params);for(const _ in g)g[_]==null&&delete g[_];T=Y({},b,{params:f(g)}),N.params=f(N.params)}const B=t.resolve(T,N),W=b.hash||"";B.params=a(p(B.params));const d=Ma(s,Y({},b,{hash:Ca(W),path:B.path})),h=r.createHref(d);return Y({fullPath:d,hash:W,query:s===Qr?Wa(b.query):b.query||{}},B,{redirectedFrom:void 0,href:h})}function O(b){return typeof b=="string"?vs(n,b,c.value.path):Y({},b)}function F(b,N){if(u!==b)return nn(ie.NAVIGATION_CANCELLED,{from:N,to:b})}function P(b){return K(b)}function Q(b){return P(Y(O(b),{replace:!0}))}function le(b,N){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:B}=T;let W=typeof B=="function"?B(b,N):B;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=O(W):{path:W},W.params={}),Y({query:b.query,hash:b.hash,params:W.path!=null?{}:b.params},W)}}function K(b,N){const T=u=w(b),B=c.value,W=b.state,d=b.force,h=b.replace===!0,g=le(T,B);if(g)return K(Y(O(g),{state:typeof g=="object"?Y({},W,g.state):W,force:d,replace:h}),N||T);const _=T;_.redirectedFrom=N;let x;return!d&&Da(s,B,T)&&(x=nn(ie.NAVIGATION_DUPLICATED,{to:_,from:B}),Ke(B,B,!0,!1)),(x?Promise.resolve(x):Oe(_,B)).catch(y=>it(y)?it(y,ie.NAVIGATION_GUARD_REDIRECT)?y:gt(y):z(y,_,B)).then(y=>{if(y){if(it(y,ie.NAVIGATION_GUARD_REDIRECT))return K(Y({replace:h},O(y.to),{state:typeof y.to=="object"?Y({},W,y.to.state):W,force:d}),N||_)}else y=we(_,B,!0,h,W);return Fe(_,B,y),y})}function ue(b,N){const T=F(b,N);return T?Promise.reject(T):Promise.resolve()}function he(b){const N=Ht.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(b):b()}function Oe(b,N){let T;const[B,W,d]=Qa(b,N);T=ys(B.reverse(),"beforeRouteLeave",b,N);for(const g of B)g.leaveGuards.forEach(_=>{T.push(At(_,b,N))});const h=ue.bind(null,b,N);return T.push(h),Be(T).then(()=>{T=[];for(const g of i.list())T.push(At(g,b,N));return T.push(h),Be(T)}).then(()=>{T=ys(W,"beforeRouteUpdate",b,N);for(const g of W)g.updateGuards.forEach(_=>{T.push(At(_,b,N))});return T.push(h),Be(T)}).then(()=>{T=[];for(const g of d)if(g.beforeEnter)if(Ge(g.beforeEnter))for(const _ of g.beforeEnter)T.push(At(_,b,N));else T.push(At(g.beforeEnter,b,N));return T.push(h),Be(T)}).then(()=>(b.matched.forEach(g=>g.enterCallbacks={}),T=ys(d,"beforeRouteEnter",b,N,he),T.push(h),Be(T))).then(()=>{T=[];for(const g of o.list())T.push(At(g,b,N));return T.push(h),Be(T)}).catch(g=>it(g,ie.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function Fe(b,N,T){l.list().forEach(B=>he(()=>B(b,N,T)))}function we(b,N,T,B,W){const d=F(b,N);if(d)return d;const h=N===vt,g=Wt?history.state:{};T&&(B||h?r.replace(b.fullPath,Y({scroll:h&&g&&g.scroll},W)):r.push(b.fullPath,W)),c.value=b,Ke(b,N,T,h),gt()}let Ve;function pe(){Ve||(Ve=r.listen((b,N,T)=>{if(!St.listening)return;const B=w(b),W=le(B,St.currentRoute.value);if(W){K(Y(W,{replace:!0,force:!0}),B).catch(yn);return}u=B;const d=c.value;Wt&&Va(qr(d.fullPath,T.delta),is()),Oe(B,d).catch(h=>it(h,ie.NAVIGATION_ABORTED|ie.NAVIGATION_CANCELLED)?h:it(h,ie.NAVIGATION_GUARD_REDIRECT)?(K(Y(O(h.to),{force:!0}),B).then(g=>{it(g,ie.NAVIGATION_ABORTED|ie.NAVIGATION_DUPLICATED)&&!T.delta&&T.type===Ps.pop&&r.go(-1,!1)}).catch(yn),Promise.reject()):(T.delta&&r.go(-T.delta,!1),z(h,B,d))).then(h=>{h=h||we(B,d,!1),h&&(T.delta&&!it(h,ie.NAVIGATION_CANCELLED)?r.go(-T.delta,!1):T.type===Ps.pop&&it(h,ie.NAVIGATION_ABORTED|ie.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),Fe(B,d,h)}).catch(yn)}))}let je=an(),ce=an(),ee;function z(b,N,T){gt(b);const B=ce.list();return B.length?B.forEach(W=>W(b,N,T)):console.error(b),Promise.reject(b)}function st(){return ee&&c.value!==vt?Promise.resolve():new Promise((b,N)=>{je.add([b,N])})}function gt(b){return ee||(ee=!b,pe(),je.list().forEach(([N,T])=>b?T(b):N()),je.reset()),b}function Ke(b,N,T,B){const{scrollBehavior:W}=e;if(!Wt||!W)return Promise.resolve();const d=!T&&ja(qr(b.fullPath,0))||(B||!T)&&history.state&&history.state.scroll||null;return $i().then(()=>W(b,N,d)).then(h=>h&&$a(h)).catch(h=>z(h,b,N))}const Ce=b=>r.go(b);let jt;const Ht=new Set,St={currentRoute:c,listening:!0,addRoute:m,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:D,getRoutes:v,resolve:w,options:e,push:P,replace:Q,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ce.add,isReady:st,install(b){b.component("RouterLink",mu),b.component("RouterView",Fo),b.config.globalProperties.$router=St,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),Wt&&!jt&&c.value===vt&&(jt=!0,P(r.location).catch(B=>{}));const N={};for(const B in vt)Object.defineProperty(N,B,{get:()=>c.value[B],enumerable:!0});b.provide(lr,St),b.provide(cr,Fi(N)),b.provide(Fs,c);const T=b.unmount;Ht.add(b),b.unmount=function(){Ht.delete(b),Ht.size<1&&(u=vt,Ve&&Ve(),Ve=null,c.value=vt,jt=!1,ee=!1),T()}}};function Be(b){return b.reduce((N,T)=>N.then(()=>he(T)),Promise.resolve())}return St}function Bo(e){return et(cr)}const bu={class:"container nav-inner"},Au={class:"nav-links nav-links--desktop"},xu={key:0,class:"nav-separator"},Eu=["aria-expanded"],wu={__name:"NavBar",setup(e){const t=ut(!1),n=ut(null),s=Bo(),r=[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"FAQ",to:"/faq"}],i=[{label:"申請須知",to:"/apply"},{label:"解決方案",to:"/solutions"},{label:"聯繫表單",to:"/contact-form"},{label:"AI客服",to:"/ai-service"},{label:"版權聲明",to:"/copyright"},{label:"無障礙標章",to:"/accessibility"},{label:"隱私權條款",to:"/privacy"},{label:"搜尋",to:"/search"}],o=ye(()=>[...r,...i]),l=()=>{t.value=!t.value},c=u=>{!t.value||!n.value||u.target instanceof Node&&!n.value.contains(u.target)&&(t.value=!1)};return Yi(()=>{document.addEventListener("pointerdown",c)}),Ji(()=>{document.removeEventListener("pointerdown",c)}),pn(()=>s.path,()=>{t.value=!1}),(u,a)=>{const f=ts("RouterLink");return U(),G("header",{ref_key:"navRoot",ref:n,class:"site-nav"},[I("div",bu,[oe(f,{class:"brand hover-scale",to:"/about"},{default:Lt(()=>[...a[0]||(a[0]=[I("span",{class:"brand-title"},[I("span",{class:"brand-line brand-line--small"},"新北產業"),I("span",{class:"brand-line"},"AI化輔導計劃")],-1)])]),_:1}),I("nav",Au,[(U(),G(de,null,kt(i,(p,m)=>(U(),G(de,{key:p.to},[m>0?(U(),G("span",xu,"|")):ot("",!0),oe(f,{class:"nav-link hover-scale",to:p.to},{default:Lt(()=>[en(ge(p.label),1)]),_:2},1032,["to"])],64))),64))]),I("button",{class:"menu-toggle hover-scale",type:"button","aria-label":"Toggle navigation","aria-controls":"primary-nav","aria-expanded":t.value.toString(),onClick:l},[...a[1]||(a[1]=[I("span",{class:"bar"},null,-1),I("span",{class:"bar"},null,-1),I("span",{class:"bar"},null,-1)])],8,Eu),I("nav",{id:"primary-nav",class:sn(["nav-links nav-links--mobile",{open:t.value}])},[(U(!0),G(de,null,kt(o.value,p=>(U(),vo(f,{key:p.to,class:"nav-link hover-scale",to:p.to},{default:Lt(()=>[en(ge(p.label),1)]),_:2},1032,["to"]))),128))],2)])],512)}}},Cu={class:"left-tabs","aria-label":"頁面導覽"},Su={__name:"LeftTabs",setup(e){const t=Bo(),n=[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"FAQ",to:"/faq"}],s=ye(()=>n.some(i=>t.path===i.to)),r=(i,o)=>({"left-tab--stack-1":o===0,"left-tab--stack-2":o===1,"left-tab--stack-3":o===2,"left-tab--palette-1":o===0,"left-tab--palette-2":o===1,"left-tab--palette-3":o===2,"left-tab--muted":s.value&&t.path!==i.to});return(i,o)=>{const l=ts("RouterLink");return U(),G("aside",Cu,[(U(),G(de,null,kt(n,(c,u)=>oe(l,{key:c.to,class:sn(["left-tab hover-scale",r(c,u)]),to:c.to},{default:Lt(()=>[en(ge(c.label),1)]),_:2},1032,["class","to"])),64))])}}},Iu={class:"app-shell"},Ru={class:"main-content"},Ou={__name:"App",setup(e){return(t,n)=>(U(),G("div",Iu,[oe(wu),oe(Su),I("main",Ru,[oe(Bt(Fo))])]))}},$e=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Tu={},Mu={class:"page-hero"};function Du(e,t){return U(),G("section",Mu,[...t[0]||(t[0]=[nt('<div class="container"><div class="content-panel"><header class="title-row"><span class="title-line"></span><h1>關於計畫</h1><span class="title-line"></span></header><article class="about-copy"><p> 為協助新北市企業加速導入人工智慧技術，提升營運效率與競爭力，新北市政府經濟發展局（下稱本局）辦理「新北產業AI化輔導計畫」（下稱本計畫），並由台灣智慧雲端服務股份有限公司（下稱執行單位）負責執行。本計畫旨在回應產業升級與數位轉型需求，透過遴選AI服務供應廠商，輔導媒合本市企業實際導入AI應用方案，提升本市企業的數位競爭力，促進本市產業邁向智慧化與高值化發展。 </p><p> 本計畫已公開徵選具備專業技術能力與服務能量之AI服務供應廠商，作為本市企業導入AI應用之合作夥伴；再遴選具AI導入需求之新北企業進行輔導，並透過此媒合平臺及實體媒合會，協助AI應用供應方案與本市具備AI數位轉型需求之企業進行精準對接，直接建立合作關係。 </p><p> 另為降低企業導入AI之初期成本，本局提供AI應用服務導入補助，受輔導之新北企業完成導入並提交相關憑證後，可依規定申請補助款。本計畫透過技術服務供應、輔導媒合機制與補助方案之三合一推動架構，盼加速推動新北企業導入AI應用服務，打造示範案例，為新北產業創造AI化的新價值。 </p></article></div></div>',1)])])}const Pu=$e(Tu,[["render",Du]]),Nu={},Fu={class:"page-hero"};function Bu(e,t){return U(),G("section",Fu,[...t[0]||(t[0]=[nt('<div class="container"><div class="content-panel"><header class="title-row"><span class="title-line"></span><h1>計畫時程</h1><span class="title-line"></span></header><div class="timeline-grid"><article class="timeline-item"><h2>第一階段</h2><p>需求盤點與企業訪談</p><p class="timeline-date">2026 Q1</p></article><article class="timeline-item"><h2>第二階段</h2><p>方案媒合與導入規劃</p><p class="timeline-date">2026 Q2</p></article><article class="timeline-item"><h2>第三階段</h2><p>場域驗證與成效追蹤</p><p class="timeline-date">2026 Q3</p></article><article class="timeline-item"><h2>第四階段</h2><p>成果發表與案例擴散</p><p class="timeline-date">2026 Q4</p></article></div></div></div>',1)])])}const Lu=$e(Nu,[["render",Bu]]),ku={},$u={class:"page-hero"};function Vu(e,t){return U(),G("section",$u,[...t[0]||(t[0]=[nt('<div class="container"><div class="content-panel"><header class="title-row"><span class="title-line"></span><h1>FAQ</h1><span class="title-line"></span></header><div class="faq-list"><article class="faq-item"><h2>哪些企業可以申請？</h2><p>凡符合新北市產業發展方向且具 AI 導入需求之企業，皆可依公告資格提出申請。</p></article><article class="faq-item"><h2>申請流程是什麼？</h2><p>完成線上申請後，將依序進行資格審查、需求評估、方案媒合與導入執行。</p></article><article class="faq-item"><h2>可以同時申請多個方案嗎？</h2><p>可提出多項需求，但實際核定內容會依審查結果與年度資源配置決定。</p></article><article class="faq-item"><h2>如何聯繫計畫窗口？</h2><p>可透過「聯繫表單」填寫需求，或於官方公告期間參與說明會取得協助。</p></article></div></div></div>',1)])])}const ju=$e(ku,[["render",Vu]]),Hu={},Uu={class:"page-hero"};function Gu(e,t){return U(),G("section",Uu,[...t[0]||(t[0]=[nt('<div class="container"><div class="page-header"><header class="title-row"><span class="title-line"></span><h1>申請須知</h1><span class="title-line"></span></header><p class="pending">等待開發中</p></div></div>',1)])])}const Ku=$e(Hu,[["render",Gu]]),Wu={class:"page-hero"},qu={class:"container"},Qu={class:"solutions-controls"},zu={class:"search-area"},Yu={class:"quick-tags"},Ju=["onClick"],Xu={class:"solutions-grid"},Zu={class:"solution-image"},ef=["src"],tf={class:"solution-body"},nf={class:"tag-list"},sf={key:0,class:"empty-state"},rf={__name:"SolutionsView",setup(e){const t=`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#f2f4ff" />
    <text x="300" y="310" text-anchor="middle" font-size="34" fill="#1c1e7f" font-family="'Noto Sans TC', sans-serif">等待上傳</text>
  </svg>`)}`,n=["全部","AAA","BBB","CCC","DDD"],s=ut("全部"),r=ut(""),i=[{id:1,name:"智慧製造排程優化",tags:["AAA","CCC"],image:t},{id:2,name:"設備預兆維護分析",tags:["BBB","DDD"],image:t},{id:3,name:"能源管理儀表板",tags:["AAA","DDD"],image:t},{id:4,name:"品質檢測影像辨識",tags:["CCC"],image:t},{id:5,name:"供應鏈風險預警",tags:["BBB","CCC"],image:t},{id:6,name:"智慧客服對話平台",tags:["AAA","BBB"],image:t},{id:7,name:"倉儲物流路線最佳化",tags:["DDD"],image:t},{id:8,name:"市場需求預測模型",tags:["BBB","CCC"],image:t},{id:9,name:"安全合規監測系統",tags:["AAA","DDD"],image:t},{id:10,name:"跨部門績效洞察",tags:["CCC","DDD"],image:t}],o=ye(()=>{const c=r.value.trim().toLowerCase();return i.filter(u=>{const a=s.value==="全部"||u.tags.includes(s.value),f=!c||u.name.toLowerCase().includes(c)||u.tags.some(p=>p.toLowerCase().includes(c));return a&&f})}),l=c=>{s.value=c};return(c,u)=>(U(),G("section",Wu,[I("div",qu,[u[2]||(u[2]=nt('<div class="page-header"><header class="title-row"><span class="title-line"></span><h1>解決方案</h1><span class="title-line"></span></header><p class="pending">等待開發中</p></div>',1)),I("div",Qu,[I("div",zu,[Tt(I("input",{"onUpdate:modelValue":u[0]||(u[0]=a=>r.value=a),class:"search-input",type:"search",placeholder:"搜尋關鍵字","aria-label":"搜尋解決方案"},null,512),[[Mt,r.value]])]),I("div",Yu,[(U(),G(de,null,kt(n,a=>I("button",{key:a,class:sn(["tag-chip",{active:s.value===a}]),type:"button",onClick:f=>l(a)},ge(a),11,Ju)),64))])]),I("div",Xu,[(U(!0),G(de,null,kt(o.value,a=>(U(),G("article",{key:a.id,class:"solution-card"},[I("div",Zu,[I("img",{src:a.image,alt:"等待上傳"},null,8,ef)]),I("div",tf,[I("h3",null,ge(a.name),1),I("div",nf,[(U(!0),G(de,null,kt(a.tags,f=>(U(),G("span",{key:f,class:"tag"},ge(f),1))),128))])])]))),128)),o.value.length===0?(U(),G("div",sf,[...u[1]||(u[1]=[I("p",null,"查無結果，請調整關鍵字或標籤。",-1)])])):ot("",!0)])])]))}},of={},lf={class:"page-hero"};function cf(e,t){return U(),G("section",lf,[...t[0]||(t[0]=[nt('<div class="container"><div class="page-header"><header class="title-row"><span class="title-line"></span><h1>AI客服</h1><span class="title-line"></span></header><p class="pending">等待開發中</p></div></div>',1)])])}const af=$e(of,[["render",cf]]),uf={},ff={class:"page-hero"};function df(e,t){return U(),G("section",ff,[...t[0]||(t[0]=[nt('<div class="container"><div class="page-header"><header class="title-row"><span class="title-line"></span><h1>版權聲明</h1><span class="title-line"></span></header><p class="pending">等待開發中</p></div></div>',1)])])}const hf=$e(uf,[["render",df]]),pf={},mf={class:"page-hero"};function gf(e,t){return U(),G("section",mf,[...t[0]||(t[0]=[nt('<div class="container"><div class="page-header"><header class="title-row"><span class="title-line"></span><h1>無障礙標章</h1><span class="title-line"></span></header><p class="pending">等待開發中</p></div></div>',1)])])}const vf=$e(pf,[["render",gf]]),_f={},yf={class:"page-hero"};function bf(e,t){return U(),G("section",yf,[...t[0]||(t[0]=[nt('<div class="container"><div class="page-header"><header class="title-row"><span class="title-line"></span><h1>隱私權條款</h1><span class="title-line"></span></header><p class="pending">等待開發中</p></div></div>',1)])])}const Af=$e(_f,[["render",bf]]),xf={class:"page-hero"},Ef={class:"container"},wf={class:"contact-wrapper"},Cf={class:"contact-card"},Sf={class:"field-group"},If={key:0,class:"field-error"},Rf={class:"field-group"},Of={key:0,class:"field-error"},Tf={class:"field-group"},Mf={key:0,class:"field-error"},Df={class:"field-group"},Pf={key:0,class:"field-error"},Nf={class:"field-group field-group--full"},Ff={key:0,class:"field-error"},Bf=["value"],Lf=["value"],kf=["value"],$f=["value"],Vf=["value"],jf={class:"form-footer field-group--full"},Hf=["disabled"],Uf={key:0,class:"status-message success"},Gf={key:1,class:"status-message error"},Kf={__name:"ContactFormView",setup(e){const t="https://docs.google.com/forms/d/e/1FAIpQLSdfvmH_c-4VnXE__OkdlBMoys0vGsxxpHlfZlMq-WAuHy6Qrg/formResponse".trim(),n=Jt({companyName:"",taxId:"",email:"",phone:"",feedback:""}),s=Jt({companyName:"",taxId:"",email:"",phone:"",feedback:""}),r=ut(!1),i=ut(!1),o=ut(""),l=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,c=/^\d{8}$/,u=/^[0-9+\-()#\s]{8,20}$/,a=()=>{Object.keys(s).forEach(A=>{s[A]=""})},f=()=>(a(),n.companyName.trim()||(s.companyName="請輸入企業名稱"),c.test(n.taxId.trim())||(s.taxId="統一編號需為 8 碼數字"),l.test(n.email.trim())||(s.email="請輸入合法的聯絡信箱"),u.test(n.phone.trim())||(s.phone="請輸入合法的聯絡電話"),n.feedback.trim()||(s.feedback="請輸入意見回饋"),!Object.values(s).some(Boolean)),p=()=>{n.companyName="",n.taxId="",n.email="",n.phone="",n.feedback=""},m=async()=>{if(i.value=!1,o.value="",!!f()){if(t.includes("REPLACE_WITH_YOUR_FORM_ID")){o.value="尚未設定 Google 表單網址，請在 .env 新增 VITE_GOOGLE_FORM_ACTION。";return}r.value=!0;try{const A=new URLSearchParams({"entry.2115518797":n.companyName.trim(),"entry.499889024":n.taxId.trim(),"entry.1885658150":n.email.trim(),"entry.1033752376":n.phone.trim(),"entry.5417155":n.feedback.trim()});await fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:A.toString()}),p(),i.value=!0}catch{o.value="送出失敗，請稍後再試。"}finally{r.value=!1}}};return(A,v)=>(U(),G("section",xf,[I("div",Ef,[v[10]||(v[10]=I("div",{class:"page-header"},[I("header",{class:"title-row"},[I("span",{class:"title-line"}),I("h1",null,"聯繫表單"),I("span",{class:"title-line"})]),I("p",null,"填寫資料後，我們將盡快與您聯繫。")],-1)),I("div",wf,[I("div",Cf,[I("form",{class:"contact-form",onSubmit:aa(m,["prevent"]),novalidate:""},[I("div",Sf,[v[5]||(v[5]=I("label",{class:"field-label",for:"companyName"},"企業名稱",-1)),Tt(I("input",{id:"companyName","onUpdate:modelValue":v[0]||(v[0]=D=>n.companyName=D),class:"field-input",type:"text",autocomplete:"organization",placeholder:"請輸入企業名稱"},null,512),[[Mt,n.companyName]]),s.companyName?(U(),G("p",If,ge(s.companyName),1)):ot("",!0)]),I("div",Rf,[v[6]||(v[6]=I("label",{class:"field-label",for:"taxId"},"統一編號",-1)),Tt(I("input",{id:"taxId","onUpdate:modelValue":v[1]||(v[1]=D=>n.taxId=D),class:"field-input",type:"text",inputmode:"numeric",maxlength:"8",placeholder:"請輸入 8 碼統一編號"},null,512),[[Mt,n.taxId]]),s.taxId?(U(),G("p",Of,ge(s.taxId),1)):ot("",!0)]),I("div",Tf,[v[7]||(v[7]=I("label",{class:"field-label",for:"email"},"聯絡信箱",-1)),Tt(I("input",{id:"email","onUpdate:modelValue":v[2]||(v[2]=D=>n.email=D),class:"field-input",type:"text",autocomplete:"email",placeholder:"name@example.com"},null,512),[[Mt,n.email]]),s.email?(U(),G("p",Mf,ge(s.email),1)):ot("",!0)]),I("div",Df,[v[8]||(v[8]=I("label",{class:"field-label",for:"phone"},"聯絡電話",-1)),Tt(I("input",{id:"phone","onUpdate:modelValue":v[3]||(v[3]=D=>n.phone=D),class:"field-input",type:"text",inputmode:"tel",autocomplete:"tel",placeholder:"請輸入聯絡電話"},null,512),[[Mt,n.phone]]),s.phone?(U(),G("p",Pf,ge(s.phone),1)):ot("",!0)]),I("div",Nf,[v[9]||(v[9]=I("label",{class:"field-label",for:"feedback"},"意見回饋",-1)),Tt(I("textarea",{id:"feedback","onUpdate:modelValue":v[4]||(v[4]=D=>n.feedback=D),class:"field-textarea",rows:"5",placeholder:"請輸入您的意見回饋"},null,512),[[Mt,n.feedback]]),s.feedback?(U(),G("p",Ff,ge(s.feedback),1)):ot("",!0)]),I("input",{type:"hidden",name:"entry.2115518797",value:n.companyName},null,8,Bf),I("input",{type:"hidden",name:"entry.499889024",value:n.taxId},null,8,Lf),I("input",{type:"hidden",name:"entry.1885658150",value:n.email},null,8,kf),I("input",{type:"hidden",name:"entry.1033752376",value:n.phone},null,8,$f),I("input",{type:"hidden",name:"entry.5417155",value:n.feedback},null,8,Vf),I("div",jf,[I("button",{class:"btn primary submit-btn",type:"submit",disabled:r.value},ge(r.value?"送出中...":"送出表單"),9,Hf),i.value?(U(),G("p",Uf,"感謝您的回覆！")):ot("",!0),o.value?(U(),G("p",Gf,ge(o.value),1)):ot("",!0)])],32)])])])]))}},Wf=$e(Kf,[["__scopeId","data-v-9643f1d3"]]),qf=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>AI客服</h1>
          <span class="title-line"></span>
        </header>
        <p class="pending">等待開發中</p>
      </div>
    </div>
  </section>
</template>
`,Qf=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>關於計畫</h1>
          <span class="title-line"></span>
        </header>

        <article class="about-copy">
          <p>
            為協助新北市企業加速導入人工智慧技術，提升營運效率與競爭力，新北市政府經濟發展局（下稱本局）辦理「新北產業AI化輔導計畫」（下稱本計畫），並由台灣智慧雲端服務股份有限公司（下稱執行單位）負責執行。本計畫旨在回應產業升級與數位轉型需求，透過遴選AI服務供應廠商，輔導媒合本市企業實際導入AI應用方案，提升本市企業的數位競爭力，促進本市產業邁向智慧化與高值化發展。
          </p>
          <p>
            本計畫已公開徵選具備專業技術能力與服務能量之AI服務供應廠商，作為本市企業導入AI應用之合作夥伴；再遴選具AI導入需求之新北企業進行輔導，並透過此媒合平臺及實體媒合會，協助AI應用供應方案與本市具備AI數位轉型需求之企業進行精準對接，直接建立合作關係。
          </p>
          <p>
            另為降低企業導入AI之初期成本，本局提供AI應用服務導入補助，受輔導之新北企業完成導入並提交相關憑證後，可依規定申請補助款。本計畫透過技術服務供應、輔導媒合機制與補助方案之三合一推動架構，盼加速推動新北企業導入AI應用服務，打造示範案例，為新北產業創造AI化的新價值。
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
`,zf=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>無障礙標章</h1>
          <span class="title-line"></span>
        </header>
        <p class="pending">等待開發中</p>
      </div>
    </div>
  </section>
</template>
`,Yf=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>申請須知</h1>
          <span class="title-line"></span>
        </header>
        <p class="pending">等待開發中</p>
      </div>
    </div>
  </section>
</template>
`,Jf=`<script setup>
import { reactive, ref } from 'vue'

const defaultGoogleFormAction = 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse'
const googleFormAction = (import.meta.env.VITE_GOOGLE_FORM_ACTION || defaultGoogleFormAction).trim()

const form = reactive({
  companyName: '',
  taxId: '',
  email: '',
  phone: '',
  feedback: '',
})

const errors = reactive({
  companyName: '',
  taxId: '',
  email: '',
  phone: '',
  feedback: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const submitError = ref('')

const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
const taxIdPattern = /^\\d{8}$/
const phonePattern = /^[0-9+\\-()#\\s]{8,20}$/

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
}

const validateForm = () => {
  clearErrors()

  if (!form.companyName.trim()) {
    errors.companyName = '請輸入企業名稱'
  }

  if (!taxIdPattern.test(form.taxId.trim())) {
    errors.taxId = '統一編號需為 8 碼數字'
  }

  if (!emailPattern.test(form.email.trim())) {
    errors.email = '請輸入合法的聯絡信箱'
  }

  if (!phonePattern.test(form.phone.trim())) {
    errors.phone = '請輸入合法的聯絡電話'
  }

  if (!form.feedback.trim()) {
    errors.feedback = '請輸入意見回饋'
  }

  return !Object.values(errors).some(Boolean)
}

const resetForm = () => {
  form.companyName = ''
  form.taxId = ''
  form.email = ''
  form.phone = ''
  form.feedback = ''
}

const handleSubmit = async () => {
  isSuccess.value = false
  submitError.value = ''

  if (!validateForm()) {
    return
  }

  if (googleFormAction.includes('REPLACE_WITH_YOUR_FORM_ID')) {
    submitError.value = '尚未設定 Google 表單網址，請在 .env 新增 VITE_GOOGLE_FORM_ACTION。'
    return
  }

  isSubmitting.value = true

  try {
    const payload = new URLSearchParams({
      'entry.2115518797': form.companyName.trim(),
      'entry.499889024': form.taxId.trim(),
      'entry.1885658150': form.email.trim(),
      'entry.1033752376': form.phone.trim(),
      'entry.5417155': form.feedback.trim(),
    })

    await fetch(googleFormAction, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: payload.toString(),
    })

    resetForm()
    isSuccess.value = true
  } catch (error) {
    submitError.value = '送出失敗，請稍後再試。'
  } finally {
    isSubmitting.value = false
  }
}
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>聯繫表單</h1>
          <span class="title-line"></span>
        </header>
        <p>填寫資料後，我們將盡快與您聯繫。</p>
      </div>

      <div class="contact-wrapper">
        <div class="contact-card">
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <div class="field-group">
              <label class="field-label" for="companyName">企業名稱</label>
              <input
                id="companyName"
                v-model="form.companyName"
                class="field-input"
                type="text"
                autocomplete="organization"
                placeholder="請輸入企業名稱"
              />
              <p v-if="errors.companyName" class="field-error">{{ errors.companyName }}</p>
            </div>

            <div class="field-group">
              <label class="field-label" for="taxId">統一編號</label>
              <input
                id="taxId"
                v-model="form.taxId"
                class="field-input"
                type="text"
                inputmode="numeric"
                maxlength="8"
                placeholder="請輸入 8 碼統一編號"
              />
              <p v-if="errors.taxId" class="field-error">{{ errors.taxId }}</p>
            </div>

            <div class="field-group">
              <label class="field-label" for="email">聯絡信箱</label>
              <input
                id="email"
                v-model="form.email"
                class="field-input"
                type="text"
                autocomplete="email"
                placeholder="name@example.com"
              />
              <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
            </div>

            <div class="field-group">
              <label class="field-label" for="phone">聯絡電話</label>
              <input
                id="phone"
                v-model="form.phone"
                class="field-input"
                type="text"
                inputmode="tel"
                autocomplete="tel"
                placeholder="請輸入聯絡電話"
              />
              <p v-if="errors.phone" class="field-error">{{ errors.phone }}</p>
            </div>

            <div class="field-group field-group--full">
              <label class="field-label" for="feedback">意見回饋</label>
              <textarea
                id="feedback"
                v-model="form.feedback"
                class="field-textarea"
                rows="5"
                placeholder="請輸入您的意見回饋"
              ></textarea>
              <p v-if="errors.feedback" class="field-error">{{ errors.feedback }}</p>
            </div>

            <input type="hidden" name="entry.2115518797" :value="form.companyName" />
            <input type="hidden" name="entry.499889024" :value="form.taxId" />
            <input type="hidden" name="entry.1885658150" :value="form.email" />
            <input type="hidden" name="entry.1033752376" :value="form.phone" />
            <input type="hidden" name="entry.5417155" :value="form.feedback" />

            <div class="form-footer field-group--full">
              <button class="btn primary submit-btn" type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? '送出中...' : '送出表單' }}
              </button>
              <p v-if="isSuccess" class="status-message success">感謝您的回覆！</p>
              <p v-if="submitError" class="status-message error">{{ submitError }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrapper {
  max-width: 920px;
}

.contact-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(28, 30, 127, 0.1);
  box-shadow: var(--shadow);
  padding: 24px;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-group--full {
  grid-column: 1 / -1;
}

.field-label {
  font-weight: 600;
  color: var(--primary-dark);
}

.field-input,
.field-textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #ffffff;
  font: inherit;
  color: var(--text);
  padding: 12px 14px;
}

.field-textarea {
  resize: vertical;
  min-height: 132px;
}

.field-input:focus,
.field-textarea:focus {
  outline: 2px solid rgba(28, 30, 127, 0.22);
  border-color: rgba(28, 30, 127, 0.35);
}

.field-error {
  margin: 0;
  color: #ba1a1a;
  font-size: 0.9rem;
}

.form-footer {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  margin: 0;
  font-weight: 600;
}

.status-message.success {
  color: #0b7a3b;
}

.status-message.error {
  color: #ba1a1a;
}

@media (max-width: 720px) {
  .contact-card {
    padding: 18px;
  }

  .contact-form {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
`,Xf=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>版權聲明</h1>
          <span class="title-line"></span>
        </header>
        <p class="pending">等待開發中</p>
      </div>
    </div>
  </section>
</template>
`,Zf=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>FAQ</h1>
          <span class="title-line"></span>
        </header>

        <div class="faq-list">
          <article class="faq-item">
            <h2>哪些企業可以申請？</h2>
            <p>凡符合新北市產業發展方向且具 AI 導入需求之企業，皆可依公告資格提出申請。</p>
          </article>
          <article class="faq-item">
            <h2>申請流程是什麼？</h2>
            <p>完成線上申請後，將依序進行資格審查、需求評估、方案媒合與導入執行。</p>
          </article>
          <article class="faq-item">
            <h2>可以同時申請多個方案嗎？</h2>
            <p>可提出多項需求，但實際核定內容會依審查結果與年度資源配置決定。</p>
          </article>
          <article class="faq-item">
            <h2>如何聯繫計畫窗口？</h2>
            <p>可透過「聯繫表單」填寫需求，或於官方公告期間參與說明會取得協助。</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
`,ed=`<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import heroOne from '../assets/hero-1.svg'
import heroTwo from '../assets/hero-2.svg'
import heroThree from '../assets/hero-3.svg'

const slides = [
  { id: 1, title: 'Demo 01', src: heroOne },
  { id: 2, title: 'Demo 02', src: heroTwo },
  { id: 3, title: 'Demo 03', src: heroThree },
]

const activeIndex = ref(0)
let timerId

const goTo = (index) => {
  activeIndex.value = index
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

const startAutoPlay = () => {
  timerId = window.setInterval(nextSlide, 4500)
}

const stopAutoPlay = () => {
  if (timerId) {
    window.clearInterval(timerId)
    timerId = undefined
  }
}

onMounted(startAutoPlay)
onBeforeUnmount(stopAutoPlay)
<\/script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <h1>新北產業AI化輔導計劃</h1>
        <p class="subtitle">New Taipei City Industrial AI Mentoring Program</p>
        <p class="pending">等待開發中</p>
        <p class="lead">
          以企業需求為核心，串聯顧問與方案資源，協助產業加速 AI 導入與轉型。
        </p>
        <div class="hero-actions">
          <RouterLink to="/apply" class="btn primary">申請須知</RouterLink>
          <RouterLink to="/solutions" class="btn ghost">解決方案</RouterLink>
        </div>
      </div>
      <div class="hero-carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <div class="carousel-viewport">
          <div
            class="carousel-track"
            :style="{ transform: \`translateX(-\${activeIndex * 100}%)\` }"
          >
            <div v-for="slide in slides" :key="slide.id" class="carousel-slide">
              <img :src="slide.src" :alt="slide.title" />
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-arrow" type="button" aria-label="上一張" @click="prevSlide">
            &#8592;
          </button>
          <div class="carousel-dots">
            <button
              v-for="(slide, index) in slides"
              :key="slide.id"
              class="carousel-dot"
              :class="{ active: index === activeIndex }"
              type="button"
              :aria-label="\`切換至第 \${index + 1} 張\`"
              @click="goTo(index)"
            ></button>
          </div>
          <button class="carousel-arrow" type="button" aria-label="下一張" @click="nextSlide">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
`,td=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="maintenance-card">
        <p class="maintenance-badge">SYSTEM STATUS</p>
        <h1>系統維護中</h1>
        <p class="maintenance-text">目前服務暫時不可用，我們正在處理中，請稍後再試。</p>
        <p class="maintenance-tip">若問題持續發生，請聯繫系統管理員。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.maintenance-card {
  max-width: 760px;
  margin: 0 auto;
  padding: 42px 28px;
  border-radius: 20px;
  border: 1px solid rgba(28, 30, 127, 0.1);
  background: #ffffff;
  box-shadow: var(--shadow);
  text-align: center;
}

.maintenance-badge {
  display: inline-block;
  margin: 0 0 10px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--soft);
  color: var(--primary);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.maintenance-card h1 {
  margin: 0 0 10px;
  color: var(--primary-dark);
}

.maintenance-text {
  margin: 0;
  color: var(--muted);
}

.maintenance-tip {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .maintenance-card {
    padding: 32px 20px;
  }
}
</style>
`,nd=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="not-found-card">
        <p class="not-found-code">404</p>
        <h1>找不到此頁面</h1>
        <p class="not-found-text">頁面不存在或發生錯誤，請返回首頁繼續瀏覽。</p>
        <RouterLink to="/" class="btn primary">回到首頁</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-card {
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 28px;
  border-radius: 20px;
  border: 1px solid rgba(28, 30, 127, 0.1);
  background: #ffffff;
  box-shadow: var(--shadow);
  text-align: center;
}

.not-found-code {
  margin: 0;
  font-size: clamp(3.2rem, 10vw, 5.6rem);
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.not-found-card h1 {
  margin: 8px 0 10px;
  color: var(--primary-dark);
}

.not-found-text {
  margin: 0 0 22px;
  color: var(--muted);
}

@media (max-width: 720px) {
  .not-found-card {
    padding: 32px 20px;
  }
}
</style>
`,sd=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>隱私權條款</h1>
          <span class="title-line"></span>
        </header>
        <p class="pending">等待開發中</p>
      </div>
    </div>
  </section>
</template>
`,rd=`<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>計畫時程</h1>
          <span class="title-line"></span>
        </header>

        <div class="timeline-grid">
          <article class="timeline-item">
            <h2>第一階段</h2>
            <p>需求盤點與企業訪談</p>
            <p class="timeline-date">2026 Q1</p>
          </article>
          <article class="timeline-item">
            <h2>第二階段</h2>
            <p>方案媒合與導入規劃</p>
            <p class="timeline-date">2026 Q2</p>
          </article>
          <article class="timeline-item">
            <h2>第三階段</h2>
            <p>場域驗證與成效追蹤</p>
            <p class="timeline-date">2026 Q3</p>
          </article>
          <article class="timeline-item">
            <h2>第四階段</h2>
            <p>成果發表與案例擴散</p>
            <p class="timeline-date">2026 Q4</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
`,id=`<script setup>
import { computed, ref } from 'vue'

const placeholderImage = \`data:image/svg+xml;utf8,\${encodeURIComponent(
  \`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="#f2f4ff" />
    <text x="300" y="310" text-anchor="middle" font-size="34" fill="#1c1e7f" font-family="'Noto Sans TC', sans-serif">等待上傳</text>
  </svg>\`
)}\` 

const tagOptions = ['全部', 'AAA', 'BBB', 'CCC', 'DDD']
const selectedTag = ref('全部')
const searchQuery = ref('')

const solutions = [
  { id: 1, name: '智慧製造排程優化', tags: ['AAA', 'CCC'], image: placeholderImage },
  { id: 2, name: '設備預兆維護分析', tags: ['BBB', 'DDD'], image: placeholderImage },
  { id: 3, name: '能源管理儀表板', tags: ['AAA', 'DDD'], image: placeholderImage },
  { id: 4, name: '品質檢測影像辨識', tags: ['CCC'], image: placeholderImage },
  { id: 5, name: '供應鏈風險預警', tags: ['BBB', 'CCC'], image: placeholderImage },
  { id: 6, name: '智慧客服對話平台', tags: ['AAA', 'BBB'], image: placeholderImage },
  { id: 7, name: '倉儲物流路線最佳化', tags: ['DDD'], image: placeholderImage },
  { id: 8, name: '市場需求預測模型', tags: ['BBB', 'CCC'], image: placeholderImage },
  { id: 9, name: '安全合規監測系統', tags: ['AAA', 'DDD'], image: placeholderImage },
  { id: 10, name: '跨部門績效洞察', tags: ['CCC', 'DDD'], image: placeholderImage },
]

const filteredSolutions = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase()
  return solutions.filter((solution) => {
    const matchesTag = selectedTag.value === '全部' || solution.tags.includes(selectedTag.value)
    const matchesKeyword =
      !keyword ||
      solution.name.toLowerCase().includes(keyword) ||
      solution.tags.some((tag) => tag.toLowerCase().includes(keyword))
    return matchesTag && matchesKeyword
  })
})

const selectTag = (tag) => {
  selectedTag.value = tag
}
<\/script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-header">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>解決方案</h1>
          <span class="title-line"></span>
        </header>
        <p class="pending">等待開發中</p>
      </div>

      <div class="solutions-controls">
        <div class="search-area">
          <input
            v-model="searchQuery"
            class="search-input"
            type="search"
            placeholder="搜尋關鍵字"
            aria-label="搜尋解決方案"
          />
        </div>

        <div class="quick-tags">
          <button
            v-for="tag in tagOptions"
            :key="tag"
            class="tag-chip"
            :class="{ active: selectedTag === tag }"
            type="button"
            @click="selectTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="solutions-grid">
        <article v-for="solution in filteredSolutions" :key="solution.id" class="solution-card">
          <div class="solution-image">
            <img :src="solution.image" alt="等待上傳" />
          </div>
          <div class="solution-body">
            <h3>{{ solution.name }}</h3>
            <div class="tag-list">
              <span v-for="tag in solution.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>

        <div v-if="filteredSolutions.length === 0" class="empty-state">
          <p>查無結果，請調整關鍵字或標籤。</p>
        </div>
      </div>
    </div>
  </section>
</template>
`;function pt(e){return Array.isArray?Array.isArray(e):$o(e)==="[object Array]"}function od(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function ld(e){return e==null?"":od(e)}function Xe(e){return typeof e=="string"}function Lo(e){return typeof e=="number"}function cd(e){return e===!0||e===!1||ad(e)&&$o(e)=="[object Boolean]"}function ko(e){return typeof e=="object"}function ad(e){return ko(e)&&e!==null}function De(e){return e!=null}function bs(e){return!e.trim().length}function $o(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ud="Incorrect 'index' type",fd=e=>`Invalid value for key ${e}`,dd=e=>`Pattern length exceeds max of ${e}.`,hd=e=>`Missing ${e} property in key`,pd=e=>`Property 'weight' in key '${e}' must be a positive integer`,oi=Object.prototype.hasOwnProperty;class md{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let r=Vo(s);this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Vo(e){let t=null,n=null,s=null,r=1,i=null;if(Xe(e)||pt(e))s=e,t=li(e),n=Bs(e);else{if(!oi.call(e,"name"))throw new Error(hd("name"));const o=e.name;if(s=o,oi.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(pd(o));t=li(o),n=Bs(o),i=e.getFn}return{path:t,id:n,weight:r,src:s,getFn:i}}function li(e){return pt(e)?e:e.split(".")}function Bs(e){return pt(e)?e.join("."):e}function gd(e,t){let n=[],s=!1;const r=(i,o,l)=>{if(De(i))if(!o[l])n.push(i);else{let c=o[l];const u=i[c];if(!De(u))return;if(l===o.length-1&&(Xe(u)||Lo(u)||cd(u)))n.push(ld(u));else if(pt(u)){s=!0;for(let a=0,f=u.length;a<f;a+=1)r(u[a],o,l+1)}else o.length&&r(u,o,l+1)}};return r(e,Xe(t)?t.split("."):t,0),s?n:n[0]}const vd={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_d={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},yd={location:0,threshold:.6,distance:100},bd={useExtendedSearch:!1,getFn:gd,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var $={..._d,...vd,...yd,...bd};const Ad=/[^ ]+/g;function xd(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(r){const i=r.match(Ad).length;if(n.has(i))return n.get(i);const o=1/Math.pow(i,.5*e),l=parseFloat(Math.round(o*s)/s);return n.set(i,l),l},clear(){n.clear()}}}class ar{constructor({getFn:t=$.getFn,fieldNormWeight:n=$.fieldNormWeight}={}){this.norm=xd(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Xe(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();Xe(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!De(t)||bs(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(t):this.getFn(t,r.path);if(De(o)){if(pt(o)){let l=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:u,value:a}=c.pop();if(De(a))if(Xe(a)&&!bs(a)){let f={v:a,i:u,n:this.norm.get(a)};l.push(f)}else pt(a)&&a.forEach((f,p)=>{c.push({nestedArrIndex:p,value:f})})}s.$[i]=l}else if(Xe(o)&&!bs(o)){let l={v:o,n:this.norm.get(o)};s.$[i]=l}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function jo(e,t,{getFn:n=$.getFn,fieldNormWeight:s=$.fieldNormWeight}={}){const r=new ar({getFn:n,fieldNormWeight:s});return r.setKeys(e.map(Vo)),r.setSources(t),r.create(),r}function Ed(e,{getFn:t=$.getFn,fieldNormWeight:n=$.fieldNormWeight}={}){const{keys:s,records:r}=e,i=new ar({getFn:t,fieldNormWeight:n});return i.setKeys(s),i.setIndexRecords(r),i}function Mn(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:r=$.distance,ignoreLocation:i=$.ignoreLocation}={}){const o=t/e.length;if(i)return o;const l=Math.abs(s-n);return r?o+l/r:l?1:o}function wd(e=[],t=$.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let o=e.length;i<o;i+=1){let l=e[i];l&&s===-1?s=i:!l&&s!==-1&&(r=i-1,r-s+1>=t&&n.push([s,r]),s=-1)}return e[i-1]&&i-s>=t&&n.push([s,i-1]),n}const Dt=32;function Cd(e,t,n,{location:s=$.location,distance:r=$.distance,threshold:i=$.threshold,findAllMatches:o=$.findAllMatches,minMatchCharLength:l=$.minMatchCharLength,includeMatches:c=$.includeMatches,ignoreLocation:u=$.ignoreLocation}={}){if(t.length>Dt)throw new Error(dd(Dt));const a=t.length,f=e.length,p=Math.max(0,Math.min(s,f));let m=i,A=p;const v=l>1||c,D=v?Array(f):[];let w;for(;(w=e.indexOf(t,A))>-1;){let K=Mn(t,{currentLocation:w,expectedLocation:p,distance:r,ignoreLocation:u});if(m=Math.min(K,m),A=w+a,v){let ue=0;for(;ue<a;)D[w+ue]=1,ue+=1}}A=-1;let O=[],F=1,P=a+f;const Q=1<<a-1;for(let K=0;K<a;K+=1){let ue=0,he=P;for(;ue<he;)Mn(t,{errors:K,currentLocation:p+he,expectedLocation:p,distance:r,ignoreLocation:u})<=m?ue=he:P=he,he=Math.floor((P-ue)/2+ue);P=he;let Oe=Math.max(1,p-he+1),Fe=o?f:Math.min(p+he,f)+a,we=Array(Fe+2);we[Fe+1]=(1<<K)-1;for(let pe=Fe;pe>=Oe;pe-=1){let je=pe-1,ce=n[e.charAt(je)];if(v&&(D[je]=+!!ce),we[pe]=(we[pe+1]<<1|1)&ce,K&&(we[pe]|=(O[pe+1]|O[pe])<<1|1|O[pe+1]),we[pe]&Q&&(F=Mn(t,{errors:K,currentLocation:je,expectedLocation:p,distance:r,ignoreLocation:u}),F<=m)){if(m=F,A=je,A<=p)break;Oe=Math.max(1,2*p-A)}}if(Mn(t,{errors:K+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:u})>m)break;O=we}const le={isMatch:A>=0,score:Math.max(.001,F)};if(v){const K=wd(D,l);K.length?c&&(le.indices=K):le.isMatch=!1}return le}function Sd(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<s-n-1}return t}const Kn=String.prototype.normalize?(e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(e=>e);class Ho{constructor(t,{location:n=$.location,threshold:s=$.threshold,distance:r=$.distance,includeMatches:i=$.includeMatches,findAllMatches:o=$.findAllMatches,minMatchCharLength:l=$.minMatchCharLength,isCaseSensitive:c=$.isCaseSensitive,ignoreDiacritics:u=$.ignoreDiacritics,ignoreLocation:a=$.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:a},t=c?t:t.toLowerCase(),t=u?Kn(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const f=(m,A)=>{this.chunks.push({pattern:m,alphabet:Sd(m),startIndex:A})},p=this.pattern.length;if(p>Dt){let m=0;const A=p%Dt,v=p-A;for(;m<v;)f(this.pattern.substr(m,Dt),m),m+=Dt;if(A){const D=p-Dt;f(this.pattern.substr(D),D)}}else f(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:s,includeMatches:r}=this.options;if(t=n?t:t.toLowerCase(),t=s?Kn(t):t,this.pattern===t){let v={isMatch:!0,score:0};return r&&(v.indices=[[0,t.length-1]]),v}const{location:i,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:a}=this.options;let f=[],p=0,m=!1;this.chunks.forEach(({pattern:v,alphabet:D,startIndex:w})=>{const{isMatch:O,score:F,indices:P}=Cd(t,v,D,{location:i+w,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:a});O&&(m=!0),p+=F,O&&P&&(f=[...f,...P])});let A={isMatch:m,score:m?p/this.chunks.length:1};return m&&r&&(A.indices=f),A}}class Ct{constructor(t){this.pattern=t}static isMultiMatch(t){return ci(t,this.multiRegex)}static isSingleMatch(t){return ci(t,this.singleRegex)}search(){}}function ci(e,t){const n=e.match(t);return n?n[1]:null}class Id extends Ct{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Rd extends Ct{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Od extends Ct{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Td extends Ct{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Md extends Ct{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Dd extends Ct{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Uo extends Ct{constructor(t,{location:n=$.location,threshold:s=$.threshold,distance:r=$.distance,includeMatches:i=$.includeMatches,findAllMatches:o=$.findAllMatches,minMatchCharLength:l=$.minMatchCharLength,isCaseSensitive:c=$.isCaseSensitive,ignoreDiacritics:u=$.ignoreDiacritics,ignoreLocation:a=$.ignoreLocation}={}){super(t),this._bitapSearch=new Ho(t,{location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Go extends Ct{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const r=[],i=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+i,r.push([s,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const Ls=[Id,Go,Od,Td,Dd,Md,Rd,Uo],ai=Ls.length,Pd=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Nd="|";function Fd(e,t={}){return e.split(Nd).map(n=>{let s=n.trim().split(Pd).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=s.length;i<o;i+=1){const l=s[i];let c=!1,u=-1;for(;!c&&++u<ai;){const a=Ls[u];let f=a.isMultiMatch(l);f&&(r.push(new a(f,t)),c=!0)}if(!c)for(u=-1;++u<ai;){const a=Ls[u];let f=a.isSingleMatch(l);if(f){r.push(new a(f,t));break}}}return r})}const Bd=new Set([Uo.type,Go.type]);class Ld{constructor(t,{isCaseSensitive:n=$.isCaseSensitive,ignoreDiacritics:s=$.ignoreDiacritics,includeMatches:r=$.includeMatches,minMatchCharLength:i=$.minMatchCharLength,ignoreLocation:o=$.ignoreLocation,findAllMatches:l=$.findAllMatches,location:c=$.location,threshold:u=$.threshold,distance:a=$.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:s,includeMatches:r,minMatchCharLength:i,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:a},t=n?t:t.toLowerCase(),t=s?Kn(t):t,this.pattern=t,this.query=Fd(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r,ignoreDiacritics:i}=this.options;t=r?t:t.toLowerCase(),t=i?Kn(t):t;let o=0,l=[],c=0;for(let u=0,a=n.length;u<a;u+=1){const f=n[u];l.length=0,o=0;for(let p=0,m=f.length;p<m;p+=1){const A=f[p],{isMatch:v,indices:D,score:w}=A.search(t);if(v){if(o+=1,c+=w,s){const O=A.constructor.type;Bd.has(O)?l=[...l,...D]:l.push(D)}}else{c=0,o=0,l.length=0;break}}if(o){let p={isMatch:!0,score:c/o};return s&&(p.indices=l),p}}return{isMatch:!1,score:1}}}const ks=[];function kd(...e){ks.push(...e)}function $s(e,t){for(let n=0,s=ks.length;n<s;n+=1){let r=ks[n];if(r.condition(e,t))return new r(e,t)}return new Ho(e,t)}const Wn={AND:"$and",OR:"$or"},Vs={PATH:"$path",PATTERN:"$val"},js=e=>!!(e[Wn.AND]||e[Wn.OR]),$d=e=>!!e[Vs.PATH],Vd=e=>!pt(e)&&ko(e)&&!js(e),ui=e=>({[Wn.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ko(e,t,{auto:n=!0}={}){const s=r=>{let i=Object.keys(r);const o=$d(r);if(!o&&i.length>1&&!js(r))return s(ui(r));if(Vd(r)){const c=o?r[Vs.PATH]:i[0],u=o?r[Vs.PATTERN]:r[c];if(!Xe(u))throw new Error(fd(c));const a={keyId:Bs(c),pattern:u};return n&&(a.searcher=$s(u,t)),a}let l={children:[],operator:i[0]};return i.forEach(c=>{const u=r[c];pt(u)&&u.forEach(a=>{l.children.push(s(a))})}),l};return js(e)||(e=ui(e)),s(e)}function jd(e,{ignoreFieldNorm:t=$.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:r,norm:i,score:o})=>{const l=r?r.weight:null;s*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(t?1:i))}),n.score=s})}function Hd(e,t){const n=e.matches;t.matches=[],De(n)&&n.forEach(s=>{if(!De(s.indices)||!s.indices.length)return;const{indices:r,value:i}=s;let o={indices:r,value:i};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),t.matches.push(o)})}function Ud(e,t){t.score=e.score}function Gd(e,t,{includeMatches:n=$.includeMatches,includeScore:s=$.includeScore}={}){const r=[];return n&&r.push(Hd),s&&r.push(Ud),e.map(i=>{const{idx:o}=i,l={item:t[o],refIndex:o};return r.length&&r.forEach(c=>{c(i,l)}),l})}class rn{constructor(t,n={},s){this.options={...$,...n},this.options.useExtendedSearch,this._keyStore=new md(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof ar))throw new Error(ud);this._myIndex=n||jo(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){De(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,r=this._docs.length;s<r;s+=1){const i=this._docs[s];t(i,s)&&(this.removeAt(s),s-=1,r-=1,n.push(i))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:l}=this.options;let c=Xe(t)?Xe(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return jd(c,{ignoreFieldNorm:l}),i&&c.sort(o),Lo(n)&&n>-1&&(c=c.slice(0,n)),Gd(c,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(t){const n=$s(t,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:i,i:o,n:l})=>{if(!De(i))return;const{isMatch:c,score:u,indices:a}=n.searchIn(i);c&&r.push({item:i,idx:o,matches:[{score:u,value:i,norm:l,indices:a}]})}),r}_searchLogical(t){const n=Ko(t,this.options),s=(l,c,u)=>{if(!l.children){const{keyId:f,searcher:p}=l,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:p});return m&&m.length?[{idx:u,item:c,matches:m}]:[]}const a=[];for(let f=0,p=l.children.length;f<p;f+=1){const m=l.children[f],A=s(m,c,u);if(A.length)a.push(...A);else if(l.operator===Wn.AND)return[]}return a},r=this._myIndex.records,i={},o=[];return r.forEach(({$:l,i:c})=>{if(De(l)){let u=s(n,l,c);u.length&&(i[c]||(i[c]={idx:c,item:l,matches:[]},o.push(i[c])),u.forEach(({matches:a})=>{i[c].matches.push(...a)}))}}),o}_searchObjectList(t){const n=$s(t,this.options),{keys:s,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:l})=>{if(!De(o))return;let c=[];s.forEach((u,a)=>{c.push(...this._findMatches({key:u,value:o[a],searcher:n}))}),c.length&&i.push({idx:l,item:o,matches:c})}),i}_findMatches({key:t,value:n,searcher:s}){if(!De(n))return[];let r=[];if(pt(n))n.forEach(({v:i,i:o,n:l})=>{if(!De(i))return;const{isMatch:c,score:u,indices:a}=s.searchIn(i);c&&r.push({score:u,key:t,value:i,idx:o,norm:l,indices:a})});else{const{v:i,n:o}=n,{isMatch:l,score:c,indices:u}=s.searchIn(i);l&&r.push({score:c,key:t,value:i,norm:o,indices:u})}return r}}rn.version="7.1.0";rn.createIndex=jo;rn.parseIndex=Ed;rn.config=$;rn.parseQuery=Ko;kd(Ld);const Kd={class:"page-hero"},Wd={class:"container"},qd={class:"search-area"},Qd={class:"search-results"},zd={key:0,class:"search-hint"},Yd={key:1,class:"search-hint"},Jd={key:2,class:"result-list"},Xd={class:"result-summary"},Zd={__name:"SearchView",setup(e){const t=ut(""),n={AboutView:{title:"關於計畫",path:"/about"},ScheduleView:{title:"計畫時程",path:"/schedule"},FAQView:{title:"FAQ",path:"/faq"},ApplyView:{title:"申請須知",path:"/apply"},SolutionsView:{title:"解決方案",path:"/solutions"},ContactFormView:{title:"聯繫表單",path:"/contact-form"},AICustomerServiceView:{title:"AI客服",path:"/ai-service"},CopyrightView:{title:"版權聲明",path:"/copyright"},AccessibilityView:{title:"無障礙標章",path:"/accessibility"},PrivacyView:{title:"隱私權條款",path:"/privacy"}},s=Object.assign({"./AICustomerServiceView.vue":qf,"./AboutView.vue":Qf,"./AccessibilityView.vue":zf,"./ApplyView.vue":Yf,"./ContactFormView.vue":Jf,"./CopyrightView.vue":Xf,"./FAQView.vue":Zf,"./HomeView.vue":ed,"./MaintenanceView.vue":td,"./NotFoundView.vue":nd,"./PrivacyView.vue":sd,"./ScheduleView.vue":rd,"./SolutionsView.vue":id}),r=p=>{const m=p.match(/<template>([\s\S]*?)<\/template>/i);return m?m[1]:p},i=p=>p.replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<[^>]+>/g," ").replace(/{{[\s\S]*?}}/g," ").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim(),o=p=>p.split("/").pop().replace(".vue",""),l=Object.entries(s).map(([p,m])=>{const A=o(p),v=n[A];if(!v)return null;const D=r(m),w=i(D);return{...v,content:w,normalized:`${v.title} ${w}`.toLowerCase()}}).filter(Boolean),c=new rn(l,{includeScore:!0,threshold:.3,ignoreLocation:!0,keys:[{name:"title",weight:.45},{name:"content",weight:.55}]}),u=ye(()=>t.value.trim()),a=(p,m)=>{const A=p||"",v=m.trim().toLowerCase();if(!A)return"";const w=A.toLowerCase().indexOf(v);if(w<0)return A.slice(0,96)+(A.length>96?"...":"");const O=Math.max(0,w-28),F=Math.min(A.length,w+v.length+52),P=O>0?"...":"",Q=F<A.length?"...":"";return`${P}${A.slice(O,F)}${Q}`},f=ye(()=>{if(!u.value)return[];const p=u.value.toLowerCase(),m=l.filter(w=>w.normalized.includes(p)),A=c.search(u.value).map(w=>w.item),v=[...m,...A],D=new Map;return v.forEach(w=>{D.has(w.path)||D.set(w.path,w)}),[...D.values()].map(w=>({...w,excerpt:a(w.content,u.value)}))});return(p,m)=>{const A=ts("RouterLink");return U(),G("section",Kd,[I("div",Wd,[m[1]||(m[1]=I("div",{class:"page-header"},[I("header",{class:"title-row"},[I("span",{class:"title-line"}),I("h1",null,"搜尋"),I("span",{class:"title-line"})])],-1)),m[2]||(m[2]=I("br",null,null,-1)),m[3]||(m[3]=I("br",null,null,-1)),I("div",qd,[Tt(I("input",{"onUpdate:modelValue":m[0]||(m[0]=v=>t.value=v),class:"search-input",type:"search",placeholder:"請輸入關鍵字開始搜尋...","aria-label":"搜尋網站頁面"},null,512),[[Mt,t.value]])]),I("div",Qd,[u.value?f.value.length===0?(U(),G("p",Yd,"查無符合頁面，請嘗試其他關鍵字。")):(U(),G("ul",Jd,[(U(!0),G(de,null,kt(f.value,v=>(U(),G("li",{key:v.path,class:"result-item"},[oe(A,{to:v.path,class:"result-link"},{default:Lt(()=>[en(ge(v.title),1)]),_:2},1032,["to"]),I("p",Xd,ge(v.excerpt),1)]))),128))])):(U(),G("p",zd))])])])}}},eh=$e(Zd,[["__scopeId","data-v-f28956f5"]]),th={},nh={class:"page-hero"},sh={class:"container"},rh={class:"not-found-card"};function ih(e,t){const n=ts("RouterLink");return U(),G("section",nh,[I("div",sh,[I("div",rh,[t[1]||(t[1]=I("p",{class:"not-found-code"},"404",-1)),t[2]||(t[2]=I("h1",null,"找不到此頁面",-1)),t[3]||(t[3]=I("p",{class:"not-found-text"},"頁面不存在或發生錯誤，請返回首頁繼續瀏覽。",-1)),oe(n,{to:"/",class:"btn primary"},{default:Lt(()=>[...t[0]||(t[0]=[en("回到首頁",-1)])]),_:1})])])])}const oh=$e(th,[["render",ih],["__scopeId","data-v-db349287"]]),lh={},ch={class:"page-hero"};function ah(e,t){return U(),G("section",ch,[...t[0]||(t[0]=[nt('<div class="container" data-v-bf831718><div class="maintenance-card" data-v-bf831718><p class="maintenance-badge" data-v-bf831718>SYSTEM STATUS</p><h1 data-v-bf831718>系統維護中</h1><p class="maintenance-text" data-v-bf831718>目前服務暫時不可用，我們正在處理中，請稍後再試。</p><p class="maintenance-tip" data-v-bf831718>若問題持續發生，請聯繫系統管理員。</p></div></div>',1)])])}const uh=$e(lh,[["render",ah],["__scopeId","data-v-bf831718"]]),fh=[{path:"/",redirect:"/about"},{path:"/about",name:"about",component:Pu},{path:"/schedule",name:"schedule",component:Lu},{path:"/faq",name:"faq",component:ju},{path:"/apply",name:"apply",component:Ku},{path:"/solutions",name:"solutions",component:rf},{path:"/ai-service",name:"ai-service",component:af},{path:"/copyright",name:"copyright",component:hf},{path:"/accessibility",name:"accessibility",component:vf},{path:"/privacy",name:"privacy",component:Af},{path:"/contact-form",name:"contact-form",component:Wf},{path:"/search",name:"search",component:eh},{path:"/404",name:"not-found",component:oh},{path:"/maintenance",name:"maintenance",component:uh},{path:"/:pathMatch(.*)*",redirect:"/404"}],$t=yu({history:Xa(),routes:fh,scrollBehavior(){return{top:0,behavior:"smooth"}}}),dh="false".toLowerCase()==="true";$t.beforeEach(e=>e.path==="/maintenance"?!0:dh?"/maintenance":!0);const Wo=da(Ou),qo=()=>{$t.currentRoute.value.path!=="/404"&&$t.replace("/404")},hh=()=>{$t.currentRoute.value.path!=="/maintenance"&&$t.replace("/maintenance")};$t.onError(()=>{qo()});Wo.config.errorHandler=()=>{qo()};const ph="false".toLowerCase()==="true",fi="".trim(),mh=15e3;if(ph&&fi){let e=0;const t=2,n=async()=>{try{if(!(await fetch(fi,{method:"GET",cache:"no-store"})).ok)throw new Error("healthcheck not ok");e=0}catch{e+=1,e>=t&&hh()}};n(),window.setInterval(n,mh)}Wo.use($t).mount("#app");
