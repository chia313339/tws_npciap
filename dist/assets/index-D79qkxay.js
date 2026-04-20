(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ci(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const de={},In=[],Ct=()=>{},Er=()=>!1,Jo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ui=e=>e.startsWith("onUpdate:"),Te=Object.assign,di=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ou=Object.prototype.hasOwnProperty,re=(e,t)=>ou.call(e,t),Y=Array.isArray,_n=e=>Zo(e)==="[object Map]",Ir=e=>Zo(e)==="[object Set]",Q=e=>typeof e=="function",xe=e=>typeof e=="string",en=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",_r=e=>(ge(e)||Q(e))&&Q(e.then)&&Q(e.catch),xr=Object.prototype.toString,Zo=e=>xr.call(e),su=e=>Zo(e).slice(8,-1),Cr=e=>Zo(e)==="[object Object]",pi=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},iu=/-\w/g,ut=es(e=>e.replace(iu,t=>t.slice(1).toUpperCase())),au=/\B([A-Z])/g,tn=es(e=>e.replace(au,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),bs=es(e=>e?`on${ts(e)}`:""),Jt=(e,t)=>!Object.is(e,t),_o=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Br=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},fi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ji;const ns=()=>Ji||(Ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function os(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=xe(o)?uu(o):os(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(xe(e)||ge(e))return e}const ru=/;(?![^(]*\))/g,lu=/:([^]+)/,cu=/\/\*[^]*?\*\//g;function uu(e){const t={};return e.replace(cu,"").split(ru).forEach(n=>{if(n){const o=n.split(lu);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function ke(e){let t="";if(xe(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const o=ke(e[n]);o&&(t+=o+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const du="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pu=ci(du);function Sr(e){return!!e||e===""}const Nr=e=>!!(e&&e.__v_isRef===!0),ue=e=>xe(e)?e:e==null?"":Y(e)||ge(e)&&(e.toString===xr||!Q(e.toString))?Nr(e)?ue(e.value):JSON.stringify(e,Pr,2):String(e),Pr=(e,t)=>Nr(t)?Pr(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[ys(o,i)+" =>"]=s,n),{})}:Ir(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ys(n))}:en(t)?ys(t):ge(t)&&!Y(t)&&!Cr(t)?String(t):t,ys=(e,t="")=>{var n;return en(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class fu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mu(){return Je}let me;const vs=new WeakSet;class kr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vs.has(this)&&(vs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zi(this),Dr(this);const t=me,n=ht;me=this,ht=!0;try{return this.fn()}finally{Mr(this),me=t,ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gi(t);this.deps=this.depsTail=void 0,Zi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$s(this)&&this.run()}get dirty(){return $s(this)}}let Tr=0,Kn,zn;function Fr(e,t=!1){if(e.flags|=8,t){e.next=zn,zn=e;return}e.next=Kn,Kn=e}function mi(){Tr++}function hi(){if(--Tr>0)return;if(zn){let t=zn;for(zn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Kn;){let t=Kn;for(Kn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Dr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Mr(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),gi(o),hu(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function $s(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Or(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Or(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===to)||(e.globalVersion=to,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!$s(e))))return;e.flags|=2;const t=e.dep,n=me,o=ht;me=e,ht=!0;try{Dr(e);const s=e.fn(e._value);(t.version===0||Jt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{me=n,ht=o,Mr(e),e.flags&=-3}}function gi(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ht=!0;const $r=[];function Rt(){$r.push(ht),ht=!1}function Lt(){const e=$r.pop();ht=e===void 0?!0:e}function Zi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=me;me=void 0;try{t()}finally{me=n}}}let to=0;class gu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!ht||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new gu(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,Rr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=o)}return n}trigger(t){this.version++,to++,this.notify(t)}notify(t){mi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hi()}}}function Rr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Rr(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Rs=new WeakMap,dn=Symbol(""),Ls=Symbol(""),no=Symbol("");function De(e,t,n){if(ht&&me){let o=Rs.get(e);o||Rs.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new wi),s.map=o,s.key=n),s.track()}}function Mt(e,t,n,o,s,i){const a=Rs.get(e);if(!a){to++;return}const r=l=>{l&&l.trigger()};if(mi(),t==="clear")a.forEach(r);else{const l=Y(e),u=l&&pi(n);if(l&&n==="length"){const c=Number(o);a.forEach((d,m)=>{(m==="length"||m===no||!en(m)&&m>=c)&&r(d)})}else switch((n!==void 0||a.has(void 0))&&r(a.get(n)),u&&r(a.get(no)),t){case"add":l?u&&r(a.get("length")):(r(a.get(dn)),_n(e)&&r(a.get(Ls)));break;case"delete":l||(r(a.get(dn)),_n(e)&&r(a.get(Ls)));break;case"set":_n(e)&&r(a.get(dn));break}}hi()}function bn(e){const t=ae(e);return t===e?t:(De(t,"iterate",no),ct(e)?t:t.map(gt))}function ss(e){return De(e=ae(e),"iterate",no),e}function Gt(e,t){return Ut(e)?Nn(pn(e)?gt(t):t):gt(t)}const wu={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,e=>Gt(this,e))},concat(...e){return bn(this).concat(...e.map(t=>Y(t)?bn(t):t))},entries(){return Es(this,"entries",e=>(e[1]=Gt(this,e[1]),e))},every(e,t){return Tt(this,"every",e,t,void 0,arguments)},filter(e,t){return Tt(this,"filter",e,t,n=>n.map(o=>Gt(this,o)),arguments)},find(e,t){return Tt(this,"find",e,t,n=>Gt(this,n),arguments)},findIndex(e,t){return Tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Tt(this,"findLast",e,t,n=>Gt(this,n),arguments)},findLastIndex(e,t){return Tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Is(this,"includes",e)},indexOf(...e){return Is(this,"indexOf",e)},join(e){return bn(this).join(e)},lastIndexOf(...e){return Is(this,"lastIndexOf",e)},map(e,t){return Tt(this,"map",e,t,void 0,arguments)},pop(){return Vn(this,"pop")},push(...e){return Vn(this,"push",e)},reduce(e,...t){return ea(this,"reduce",e,t)},reduceRight(e,...t){return ea(this,"reduceRight",e,t)},shift(){return Vn(this,"shift")},some(e,t){return Tt(this,"some",e,t,void 0,arguments)},splice(...e){return Vn(this,"splice",e)},toReversed(){return bn(this).toReversed()},toSorted(e){return bn(this).toSorted(e)},toSpliced(...e){return bn(this).toSpliced(...e)},unshift(...e){return Vn(this,"unshift",e)},values(){return Es(this,"values",e=>Gt(this,e))}};function Es(e,t,n){const o=ss(e),s=o[t]();return o!==e&&!ct(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Au=Array.prototype;function Tt(e,t,n,o,s,i){const a=ss(e),r=a!==e&&!ct(e),l=a[t];if(l!==Au[t]){const d=l.apply(e,i);return r?gt(d):d}let u=n;a!==e&&(r?u=function(d,m){return n.call(this,Gt(e,d),m,e)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,e)}));const c=l.call(a,u,o);return r&&s?s(c):c}function ea(e,t,n,o){const s=ss(e);let i=n;return s!==e&&(ct(e)?n.length>3&&(i=function(a,r,l){return n.call(this,a,r,l,e)}):i=function(a,r,l){return n.call(this,a,Gt(e,r),l,e)}),s[t](i,...o)}function Is(e,t,n){const o=ae(e);De(o,"iterate",no);const s=o[t](...n);return(s===-1||s===!1)&&yi(n[0])?(n[0]=ae(n[0]),o[t](...n)):s}function Vn(e,t,n=[]){Rt(),mi();const o=ae(e)[t].apply(e,n);return hi(),Lt(),o}const bu=ci("__proto__,__v_isRef,__isVue"),Lr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(en));function yu(e){en(e)||(e=String(e));const t=ae(this);return De(t,"has",e),t.hasOwnProperty(e)}class Ur{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?Pu:Hr:i?qr:jr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const a=Y(t);if(!s){let l;if(a&&(l=wu[n]))return l;if(n==="hasOwnProperty")return yu}const r=Reflect.get(t,n,$e(t)?t:o);if((en(n)?Lr.has(n):bu(n))||(s||De(t,"get",n),i))return r;if($e(r)){const l=a&&pi(n)?r:r.value;return s&&ge(l)?Vs(l):l}return ge(r)?s?Vs(r):is(r):r}}class Vr extends Ur{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];const a=Y(t)&&pi(n);if(!this._isShallow){const u=Ut(i);if(!ct(o)&&!Ut(o)&&(i=ae(i),o=ae(o)),!a&&$e(i)&&!$e(o))return u||(i.value=o),!0}const r=a?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,o,$e(t)?t:s);return t===ae(s)&&(r?Jt(o,i)&&Mt(t,"set",n,o):Mt(t,"add",n,o)),l}deleteProperty(t,n){const o=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Mt(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!en(n)||!Lr.has(n))&&De(t,"has",n),o}ownKeys(t){return De(t,"iterate",Y(t)?"length":dn),Reflect.ownKeys(t)}}class vu extends Ur{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Eu=new Vr,Iu=new vu,_u=new Vr(!0);const Us=e=>e,wo=e=>Reflect.getPrototypeOf(e);function xu(e,t,n){return function(...o){const s=this.__v_raw,i=ae(s),a=_n(i),r=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=s[e](...o),c=n?Us:t?Nn:gt;return!t&&De(i,"iterate",l?Ls:dn),Te(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:r?[c(d[0]),c(d[1])]:c(d),done:m}}})}}function Ao(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Cu(e,t){const n={get(s){const i=this.__v_raw,a=ae(i),r=ae(s);e||(Jt(s,r)&&De(a,"get",s),De(a,"get",r));const{has:l}=wo(a),u=t?Us:e?Nn:gt;if(l.call(a,s))return u(i.get(s));if(l.call(a,r))return u(i.get(r));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&De(ae(s),"iterate",dn),s.size},has(s){const i=this.__v_raw,a=ae(i),r=ae(s);return e||(Jt(s,r)&&De(a,"has",s),De(a,"has",r)),s===r?i.has(s):i.has(s)||i.has(r)},forEach(s,i){const a=this,r=a.__v_raw,l=ae(r),u=t?Us:e?Nn:gt;return!e&&De(l,"iterate",dn),r.forEach((c,d)=>s.call(i,u(c),u(d),a))}};return Te(n,e?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){!t&&!ct(s)&&!Ut(s)&&(s=ae(s));const i=ae(this);return wo(i).has.call(i,s)||(i.add(s),Mt(i,"add",s,s)),this},set(s,i){!t&&!ct(i)&&!Ut(i)&&(i=ae(i));const a=ae(this),{has:r,get:l}=wo(a);let u=r.call(a,s);u||(s=ae(s),u=r.call(a,s));const c=l.call(a,s);return a.set(s,i),u?Jt(i,c)&&Mt(a,"set",s,i):Mt(a,"add",s,i),this},delete(s){const i=ae(this),{has:a,get:r}=wo(i);let l=a.call(i,s);l||(s=ae(s),l=a.call(i,s)),r&&r.call(i,s);const u=i.delete(s);return l&&Mt(i,"delete",s,void 0),u},clear(){const s=ae(this),i=s.size!==0,a=s.clear();return i&&Mt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xu(s,e,t)}),n}function Ai(e,t){const n=Cu(e,t);return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(re(n,s)&&s in o?n:o,s,i)}const Bu={get:Ai(!1,!1)},Su={get:Ai(!1,!0)},Nu={get:Ai(!0,!1)};const jr=new WeakMap,qr=new WeakMap,Hr=new WeakMap,Pu=new WeakMap;function ku(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tu(e){return e.__v_skip||!Object.isExtensible(e)?0:ku(su(e))}function is(e){return Ut(e)?e:bi(e,!1,Eu,Bu,jr)}function Gr(e){return bi(e,!1,_u,Su,qr)}function Vs(e){return bi(e,!0,Iu,Nu,Hr)}function bi(e,t,n,o,s){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Tu(e);if(i===0)return e;const a=s.get(e);if(a)return a;const r=new Proxy(e,i===2?o:n);return s.set(e,r),r}function pn(e){return Ut(e)?pn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function ct(e){return!!(e&&e.__v_isShallow)}function yi(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function Fu(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Br(e,"__v_skip",!0),e}const gt=e=>ge(e)?is(e):e,Nn=e=>ge(e)?Vs(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function je(e){return Wr(e,!1)}function Du(e){return Wr(e,!0)}function Wr(e,t){return $e(e)?e:new Mu(e,t)}class Mu{constructor(t,n){this.dep=new wi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ae(t),this._value=n?t:gt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||ct(t)||Ut(t);t=o?t:ae(t),Jt(t,n)&&(this._rawValue=t,this._value=o?t:gt(t),this.dep.trigger())}}function he(e){return $e(e)?e.value:e}const Ou={get:(e,t,n)=>t==="__v_raw"?e:he(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Kr(e){return pn(e)?e:new Proxy(e,Ou)}class $u{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new wi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Fr(this,!0),!0}get value(){const t=this.dep.track();return Or(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ru(e,t,n=!1){let o,s;return Q(e)?o=e:(o=e.get,s=e.set),new $u(o,s,n)}const bo={},Po=new WeakMap;let ln;function Lu(e,t=!1,n=ln){if(n){let o=Po.get(n);o||Po.set(n,o=[]),o.push(e)}}function Uu(e,t,n=de){const{immediate:o,deep:s,once:i,scheduler:a,augmentJob:r,call:l}=n,u=B=>s?B:ct(B)||s===!1||s===0?Ot(B,1):Ot(B);let c,d,m,h,A=!1,y=!1;if($e(e)?(d=()=>e.value,A=ct(e)):pn(e)?(d=()=>u(e),A=!0):Y(e)?(y=!0,A=e.some(B=>pn(B)||ct(B)),d=()=>e.map(B=>{if($e(B))return B.value;if(pn(B))return u(B);if(Q(B))return l?l(B,2):B()})):Q(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){Rt();try{m()}finally{Lt()}}const B=ln;ln=c;try{return l?l(e,3,[h]):e(h)}finally{ln=B}}:d=Ct,t&&s){const B=d,V=s===!0?1/0:s;d=()=>Ot(B(),V)}const I=mu(),_=()=>{c.stop(),I&&I.active&&di(I.effects,c)};if(i&&t){const B=t;t=(...V)=>{B(...V),_()}}let P=y?new Array(e.length).fill(bo):bo;const C=B=>{if(!(!(c.flags&1)||!c.dirty&&!B))if(t){const V=c.run();if(s||A||(y?V.some((j,G)=>Jt(j,P[G])):Jt(V,P))){m&&m();const j=ln;ln=c;try{const G=[V,P===bo?void 0:y&&P[0]===bo?[]:P,h];P=V,l?l(t,3,G):t(...G)}finally{ln=j}}}else c.run()};return r&&r(C),c=new kr(d),c.scheduler=a?()=>a(C,!1):C,h=B=>Lu(B,!1,c),m=c.onStop=()=>{const B=Po.get(c);if(B){if(l)l(B,4);else for(const V of B)V();Po.delete(c)}},t?o?C(!0):P=c.run():a?a(C.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function Ot(e,t=1/0,n){if(t<=0||!ge(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))Ot(e.value,t,n);else if(Y(e))for(let o=0;o<e.length;o++)Ot(e[o],t,n);else if(Ir(e)||_n(e))e.forEach(o=>{Ot(o,t,n)});else if(Cr(e)){for(const o in e)Ot(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Ot(e[o],t,n)}return e}function lo(e,t,n,o){try{return o?e(...o):e()}catch(s){as(s,t,n)}}function St(e,t,n,o){if(Q(e)){const s=lo(e,t,n,o);return s&&_r(s)&&s.catch(i=>{as(i,t,n)}),s}if(Y(e)){const s=[];for(let i=0;i<e.length;i++)s.push(St(e[i],t,n,o));return s}}function as(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||de;if(t){let r=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}r=r.parent}if(i){Rt(),lo(i,null,10,[e,l,u]),Lt();return}}Vu(e,n,s,o,a)}function Vu(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const qe=[];let Et=-1;const xn=[];let Wt=null,yn=0;const zr=Promise.resolve();let ko=null;function Xr(e){const t=ko||zr;return e?t.then(this?e.bind(this):e):t}function ju(e){let t=Et+1,n=qe.length;for(;t<n;){const o=t+n>>>1,s=qe[o],i=oo(s);i<e||i===e&&s.flags&2?t=o+1:n=o}return t}function vi(e){if(!(e.flags&1)){const t=oo(e),n=qe[qe.length-1];!n||!(e.flags&2)&&t>=oo(n)?qe.push(e):qe.splice(ju(t),0,e),e.flags|=1,Yr()}}function Yr(){ko||(ko=zr.then(Jr))}function qu(e){Y(e)?xn.push(...e):Wt&&e.id===-1?Wt.splice(yn+1,0,e):e.flags&1||(xn.push(e),e.flags|=1),Yr()}function ta(e,t,n=Et+1){for(;n<qe.length;n++){const o=qe[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;qe.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Qr(e){if(xn.length){const t=[...new Set(xn)].sort((n,o)=>oo(n)-oo(o));if(xn.length=0,Wt){Wt.push(...t);return}for(Wt=t,yn=0;yn<Wt.length;yn++){const n=Wt[yn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wt=null,yn=0}}const oo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Jr(e){try{for(Et=0;Et<qe.length;Et++){const t=qe[Et];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),lo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Et<qe.length;Et++){const t=qe[Et];t&&(t.flags&=-2)}Et=-1,qe.length=0,Qr(),ko=null,(qe.length||xn.length)&&Jr()}}let nt=null,Zr=null;function To(e){const t=nt;return nt=e,Zr=e&&e.type.__scopeId||null,t}function lt(e,t=nt,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Mo(-1);const i=To(t);let a;try{a=e(...s)}finally{To(i),o._d&&Mo(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function el(e,t){if(nt===null)return e;const n=ds(nt),o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,r,l=de]=t[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(a),o.push({dir:i,instance:n,value:a,oldValue:void 0,arg:r,modifiers:l}))}return e}function sn(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const r=s[a];i&&(r.oldValue=i[a].value);let l=r.dir[o];l&&(Rt(),St(l,n,8,[e.el,r,e,t]),Lt())}}function xo(e,t){if(Me){let n=Me.provides;const o=Me.parent&&Me.parent.provides;o===n&&(n=Me.provides=Object.create(o)),n[e]=t}}function Bt(e,t,n=!1){const o=qd();if(o||Bn){let s=Bn?Bn._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(o&&o.proxy):t}}const Hu=Symbol.for("v-scx"),Gu=()=>Bt(Hu);function Cn(e,t,n){return tl(e,t,n)}function tl(e,t,n=de){const{immediate:o,deep:s,flush:i,once:a}=n,r=Te({},n),l=t&&o||!t&&i!=="post";let u;if(io){if(i==="sync"){const h=Gu();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ct,h.resume=Ct,h.pause=Ct,h}}const c=Me;r.call=(h,A,y)=>St(h,c,A,y);let d=!1;i==="post"?r.scheduler=h=>{Ue(h,c&&c.suspense)}:i!=="sync"&&(d=!0,r.scheduler=(h,A)=>{A?h():vi(h)}),r.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const m=Uu(e,t,r);return io&&(u?u.push(m):l&&m()),m}function Wu(e,t,n){const o=this.proxy,s=xe(e)?e.includes(".")?nl(o,e):()=>o[e]:e.bind(o,o);let i;Q(t)?i=t:(i=t.handler,n=t);const a=co(this),r=tl(s,i.bind(o),n);return a(),r}function nl(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const ol=Symbol("_vte"),Ku=e=>e.__isTeleport,Xn=e=>e&&(e.disabled||e.disabled===""),na=e=>e&&(e.defer||e.defer===""),oa=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,js=(e,t)=>{const n=e&&e.to;return xe(n)?t?t(n):null:n},sl={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,i,a,r,l,u){const{mc:c,pc:d,pbc:m,o:{insert:h,querySelector:A,createText:y,createComment:I}}=u,_=Xn(t.props);let{shapeFlag:P,children:C,dynamicChildren:B}=t;if(e==null){const V=t.el=y(""),j=t.anchor=y("");h(V,n,o),h(j,n,o);const G=(Z,pe)=>{P&16&&c(C,Z,pe,s,i,a,r,l)},K=()=>{const Z=t.target=js(t.props,A),pe=il(Z,t,y,h);Z&&(a!=="svg"&&oa(Z)?a="svg":a!=="mathml"&&sa(Z)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(Z),_||(G(Z,pe),Co(t,!1)))};_&&(G(n,j),Co(t,!0)),na(t.props)?(t.el.__isMounted=!1,Ue(()=>{K(),delete t.el.__isMounted},i)):K()}else{if(na(t.props)&&e.el.__isMounted===!1){Ue(()=>{sl.process(e,t,n,o,s,i,a,r,l,u)},i);return}t.el=e.el,t.targetStart=e.targetStart;const V=t.anchor=e.anchor,j=t.target=e.target,G=t.targetAnchor=e.targetAnchor,K=Xn(e.props),Z=K?n:j,pe=K?V:G;if(a==="svg"||oa(j)?a="svg":(a==="mathml"||sa(j))&&(a="mathml"),B?(m(e.dynamicChildren,B,Z,s,i,a,r),Bi(e,t,!0)):l||d(e,t,Z,pe,s,i,a,r,!1),_)K?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):yo(t,n,V,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Ee=t.target=js(t.props,A);Ee&&yo(t,Ee,null,u,0)}else K&&yo(t,j,G,u,1);Co(t,_)}},remove(e,t,n,{um:o,o:{remove:s}},i){const{shapeFlag:a,children:r,anchor:l,targetStart:u,targetAnchor:c,target:d,props:m}=e;if(d&&(s(u),s(c)),i&&s(l),a&16){const h=i||!Xn(m);for(let A=0;A<r.length;A++){const y=r[A];o(y,t,n,h,!!y.dynamicChildren)}}},move:yo,hydrate:zu};function yo(e,t,n,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,n);const{el:a,anchor:r,shapeFlag:l,children:u,props:c}=e,d=i===2;if(d&&o(a,t,n),(!d||Xn(c))&&l&16)for(let m=0;m<u.length;m++)s(u[m],t,n,2);d&&o(r,t,n)}function zu(e,t,n,o,s,i,{o:{nextSibling:a,parentNode:r,querySelector:l,insert:u,createText:c}},d){function m(y,I,_,P){I.anchor=d(a(y),I,r(y),n,o,s,i),I.targetStart=_,I.targetAnchor=P}const h=t.target=js(t.props,l),A=Xn(t.props);if(h){const y=h._lpa||h.firstChild;if(t.shapeFlag&16)if(A)m(e,t,y,y&&a(y));else{t.anchor=a(e);let I=y;for(;I;){if(I&&I.nodeType===8){if(I.data==="teleport start anchor")t.targetStart=I;else if(I.data==="teleport anchor"){t.targetAnchor=I,h._lpa=t.targetAnchor&&a(t.targetAnchor);break}}I=a(I)}t.targetAnchor||il(h,t,c,u),d(y&&a(y),t,h,n,o,s,i)}Co(t,A)}else A&&t.shapeFlag&16&&m(e,t,e,a(e));return t.anchor&&a(t.anchor)}const Xu=sl;function Co(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function il(e,t,n,o){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[ol]=i,e&&(o(s,e),o(i,e)),i}const Yu=Symbol("_leaveCb");function Ei(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ei(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function al(e,t){return Q(e)?Te({name:e.name},t,{setup:e}):e}function rl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Fo=new WeakMap;function Yn(e,t,n,o,s=!1){if(Y(e)){e.forEach((A,y)=>Yn(A,t&&(Y(t)?t[y]:t),n,o,s));return}if(Qn(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Yn(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?ds(o.component):o.el,a=s?null:i,{i:r,r:l}=e,u=t&&t.r,c=r.refs===de?r.refs={}:r.refs,d=r.setupState,m=ae(d),h=d===de?Er:A=>re(m,A);if(u!=null&&u!==l){if(ia(t),xe(u))c[u]=null,h(u)&&(d[u]=null);else if($e(u)){u.value=null;const A=t;A.k&&(c[A.k]=null)}}if(Q(l))lo(l,r,12,[a,c]);else{const A=xe(l),y=$e(l);if(A||y){const I=()=>{if(e.f){const _=A?h(l)?d[l]:c[l]:l.value;if(s)Y(_)&&di(_,i);else if(Y(_))_.includes(i)||_.push(i);else if(A)c[l]=[i],h(l)&&(d[l]=c[l]);else{const P=[i];l.value=P,e.k&&(c[e.k]=P)}}else A?(c[l]=a,h(l)&&(d[l]=a)):y&&(l.value=a,e.k&&(c[e.k]=a))};if(a){const _=()=>{I(),Fo.delete(e)};_.id=-1,Fo.set(e,_),Ue(_,n)}else ia(e),I()}}}function ia(e){const t=Fo.get(e);t&&(t.flags|=8,Fo.delete(e))}ns().requestIdleCallback;ns().cancelIdleCallback;const Qn=e=>!!e.type.__asyncLoader,ll=e=>e.type.__isKeepAlive;function Qu(e,t){cl(e,"a",t)}function Ju(e,t){cl(e,"da",t)}function cl(e,t,n=Me){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(rs(t,o,n),n){let s=n.parent;for(;s&&s.parent;)ll(s.parent.vnode)&&Zu(o,t,n,s),s=s.parent}}function Zu(e,t,n,o){const s=rs(t,e,o,!0);ul(()=>{di(o[t],s)},n)}function rs(e,t,n=Me,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Rt();const r=co(n),l=St(t,n,e,a);return r(),Lt(),l});return o?s.unshift(i):s.push(i),i}}const jt=e=>(t,n=Me)=>{(!io||e==="sp")&&rs(e,(...o)=>t(...o),n)},ed=jt("bm"),Ii=jt("m"),td=jt("bu"),nd=jt("u"),_i=jt("bum"),ul=jt("um"),od=jt("sp"),sd=jt("rtg"),id=jt("rtc");function ad(e,t=Me){rs("ec",e,t)}const rd="components";function ls(e,t){return cd(rd,e,!0,t)||e}const ld=Symbol.for("v-ndc");function cd(e,t,n=!0,o=!1){const s=nt||Me;if(s){const i=s.type;{const r=zd(i,!1);if(r&&(r===t||r===ut(t)||r===ts(ut(t))))return i}const a=aa(s[e]||i[e],t)||aa(s.appContext[e],t);return!a&&o?i:a}}function aa(e,t){return e&&(e[t]||e[ut(t)]||e[ts(ut(t))])}function Oe(e,t,n,o){let s;const i=n,a=Y(e);if(a||xe(e)){const r=a&&pn(e);let l=!1,u=!1;r&&(l=!ct(e),u=Ut(e),e=ss(e)),s=new Array(e.length);for(let c=0,d=e.length;c<d;c++)s[c]=t(l?u?Nn(gt(e[c])):gt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let r=0;r<e;r++)s[r]=t(r+1,r,void 0,i)}else if(ge(e))if(e[Symbol.iterator])s=Array.from(e,(r,l)=>t(r,l,void 0,i));else{const r=Object.keys(e);s=new Array(r.length);for(let l=0,u=r.length;l<u;l++){const c=r[l];s[l]=t(e[c],c,l,i)}}else s=[];return s}const qs=e=>e?Nl(e)?ds(e):qs(e.parent):null,Jn=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qs(e.parent),$root:e=>qs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pl(e),$forceUpdate:e=>e.f||(e.f=()=>{vi(e.update)}),$nextTick:e=>e.n||(e.n=Xr.bind(e.proxy)),$watch:e=>Wu.bind(e)}),_s=(e,t)=>e!==de&&!e.__isScriptSetup&&re(e,t),ud={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:a,type:r,appContext:l}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(_s(o,t))return a[t]=1,o[t];if(s!==de&&re(s,t))return a[t]=2,s[t];if(re(i,t))return a[t]=3,i[t];if(n!==de&&re(n,t))return a[t]=4,n[t];Hs&&(a[t]=0)}}const u=Jn[t];let c,d;if(u)return t==="$attrs"&&De(e.attrs,"get",""),u(e);if((c=r.__cssModules)&&(c=c[t]))return c;if(n!==de&&re(n,t))return a[t]=4,n[t];if(d=l.config.globalProperties,re(d,t))return d[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return _s(s,t)?(s[t]=n,!0):o!==de&&re(o,t)?(o[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:i,type:a}},r){let l;return!!(n[r]||e!==de&&r[0]!=="$"&&re(e,r)||_s(t,r)||re(i,r)||re(o,r)||re(Jn,r)||re(s.config.globalProperties,r)||(l=a.__cssModules)&&l[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ra(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hs=!0;function dd(e){const t=pl(e),n=e.proxy,o=e.ctx;Hs=!1,t.beforeCreate&&la(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:r,provide:l,inject:u,created:c,beforeMount:d,mounted:m,beforeUpdate:h,updated:A,activated:y,deactivated:I,beforeDestroy:_,beforeUnmount:P,destroyed:C,unmounted:B,render:V,renderTracked:j,renderTriggered:G,errorCaptured:K,serverPrefetch:Z,expose:pe,inheritAttrs:Ee,components:Ie,directives:Fe,filters:Ae}=t;if(u&&pd(u,o,null),a)for(const U in a){const J=a[U];Q(J)&&(o[U]=J.bind(n))}if(s){const U=s.call(n,n);ge(U)&&(e.data=is(U))}if(Hs=!0,i)for(const U in i){const J=i[U],be=Q(J)?J.bind(n,n):Q(J.get)?J.get.bind(n,n):Ct,Ke=!Q(J)&&Q(J.set)?J.set.bind(n):Ct,pt=Be({get:be,set:Ke});Object.defineProperty(o,U,{enumerable:!0,configurable:!0,get:()=>pt.value,set:ze=>pt.value=ze})}if(r)for(const U in r)dl(r[U],o,n,U);if(l){const U=Q(l)?l.call(n):l;Reflect.ownKeys(U).forEach(J=>{xo(J,U[J])})}c&&la(c,e,"c");function we(U,J){Y(J)?J.forEach(be=>U(be.bind(n))):J&&U(J.bind(n))}if(we(ed,d),we(Ii,m),we(td,h),we(nd,A),we(Qu,y),we(Ju,I),we(ad,K),we(id,j),we(sd,G),we(_i,P),we(ul,B),we(od,Z),Y(pe))if(pe.length){const U=e.exposed||(e.exposed={});pe.forEach(J=>{Object.defineProperty(U,J,{get:()=>n[J],set:be=>n[J]=be,enumerable:!0})})}else e.exposed||(e.exposed={});V&&e.render===Ct&&(e.render=V),Ee!=null&&(e.inheritAttrs=Ee),Ie&&(e.components=Ie),Fe&&(e.directives=Fe),Z&&rl(e)}function pd(e,t,n=Ct){Y(e)&&(e=Gs(e));for(const o in e){const s=e[o];let i;ge(s)?"default"in s?i=Bt(s.from||o,s.default,!0):i=Bt(s.from||o):i=Bt(s),$e(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function la(e,t,n){St(Y(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function dl(e,t,n,o){let s=o.includes(".")?nl(n,o):()=>n[o];if(xe(e)){const i=t[e];Q(i)&&Cn(s,i)}else if(Q(e))Cn(s,e.bind(n));else if(ge(e))if(Y(e))e.forEach(i=>dl(i,t,n,o));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&Cn(s,i,e)}}function pl(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,r=i.get(t);let l;return r?l=r:!s.length&&!n&&!o?l=t:(l={},s.length&&s.forEach(u=>Do(l,u,a,!0)),Do(l,t,a)),ge(t)&&i.set(t,l),l}function Do(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&Do(e,i,n,!0),s&&s.forEach(a=>Do(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const r=fd[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const fd={data:ca,props:ua,emits:ua,methods:Gn,computed:Gn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Gn,directives:Gn,watch:hd,provide:ca,inject:md};function ca(e,t){return t?e?function(){return Te(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function md(e,t){return Gn(Gs(e),Gs(t))}function Gs(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?Te(Object.create(null),e,t):t}function ua(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Te(Object.create(null),ra(e),ra(t??{})):t}function hd(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const o in t)n[o]=Le(e[o],t[o]);return n}function fl(){return{app:null,config:{isNativeTag:Er,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gd=0;function wd(e,t){return function(o,s=null){Q(o)||(o=Te({},o)),s!=null&&!ge(s)&&(s=null);const i=fl(),a=new WeakSet,r=[];let l=!1;const u=i.app={_uid:gd++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:Yd,get config(){return i.config},set config(c){},use(c,...d){return a.has(c)||(c&&Q(c.install)?(a.add(c),c.install(u,...d)):Q(c)&&(a.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,m){if(!l){const h=u._ceVNode||ve(o,s);return h.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(h,c,m),l=!0,u._container=c,c.__vue_app__=u,ds(h.component)}},onUnmount(c){r.push(c)},unmount(){l&&(St(r,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=Bn;Bn=u;try{return c()}finally{Bn=d}}};return u}}let Bn=null;const Ad=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ut(t)}Modifiers`]||e[`${tn(t)}Modifiers`];function bd(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||de;let s=n;const i=t.startsWith("update:"),a=i&&Ad(o,t.slice(7));a&&(a.trim&&(s=n.map(c=>xe(c)?c.trim():c)),a.number&&(s=n.map(fi)));let r,l=o[r=bs(t)]||o[r=bs(ut(t))];!l&&i&&(l=o[r=bs(tn(t))]),l&&St(l,e,6,s);const u=o[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,St(u,e,6,s)}}const yd=new WeakMap;function ml(e,t,n=!1){const o=n?yd:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let a={},r=!1;if(!Q(e)){const l=u=>{const c=ml(u,t,!0);c&&(r=!0,Te(a,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!r?(ge(e)&&o.set(e,null),null):(Y(i)?i.forEach(l=>a[l]=null):Te(a,i),ge(e)&&o.set(e,a),a)}function cs(e,t){return!e||!Jo(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,tn(t))||re(e,t))}function da(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:a,attrs:r,emit:l,render:u,renderCache:c,props:d,data:m,setupState:h,ctx:A,inheritAttrs:y}=e,I=To(e);let _,P;try{if(n.shapeFlag&4){const B=s||o,V=B;_=_t(u.call(V,B,c,d,h,m,A)),P=r}else{const B=t;_=_t(B.length>1?B(d,{attrs:r,slots:a,emit:l}):B(d,null)),P=t.props?r:vd(r)}}catch(B){Zn.length=0,as(B,e,1),_=ve(Zt)}let C=_;if(P&&y!==!1){const B=Object.keys(P),{shapeFlag:V}=C;B.length&&V&7&&(i&&B.some(ui)&&(P=Ed(P,i)),C=Pn(C,P,!1,!0))}return n.dirs&&(C=Pn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&Ei(C,n.transition),_=C,To(I),_}const vd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jo(n))&&((t||(t={}))[n]=e[n]);return t},Ed=(e,t)=>{const n={};for(const o in e)(!ui(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Id(e,t,n){const{props:o,children:s,component:i}=e,{props:a,children:r,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return o?pa(o,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(a[m]!==o[m]&&!cs(u,m))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:o===a?!1:o?a?pa(o,a,u):!0:!!a;return!1}function pa(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!cs(n,i))return!0}return!1}function _d({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const hl={},gl=()=>Object.create(hl),wl=e=>Object.getPrototypeOf(e)===hl;function xd(e,t,n,o=!1){const s={},i=gl();e.propsDefaults=Object.create(null),Al(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=o?s:Gr(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Cd(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,r=ae(s),[l]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(cs(e.emitsOptions,m))continue;const h=t[m];if(l)if(re(i,m))h!==i[m]&&(i[m]=h,u=!0);else{const A=ut(m);s[A]=Ws(l,r,A,h,e,!1)}else h!==i[m]&&(i[m]=h,u=!0)}}}else{Al(e,t,s,i)&&(u=!0);let c;for(const d in r)(!t||!re(t,d)&&((c=tn(d))===d||!re(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(s[d]=Ws(l,r,d,void 0,e,!0)):delete s[d]);if(i!==r)for(const d in i)(!t||!re(t,d))&&(delete i[d],u=!0)}u&&Mt(e.attrs,"set","")}function Al(e,t,n,o){const[s,i]=e.propsOptions;let a=!1,r;if(t)for(let l in t){if(Wn(l))continue;const u=t[l];let c;s&&re(s,c=ut(l))?!i||!i.includes(c)?n[c]=u:(r||(r={}))[c]=u:cs(e.emitsOptions,l)||(!(l in o)||u!==o[l])&&(o[l]=u,a=!0)}if(i){const l=ae(n),u=r||de;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Ws(s,l,d,u[d],e,!re(u,d))}}return a}function Ws(e,t,n,o,s,i){const a=e[n];if(a!=null){const r=re(a,"default");if(r&&o===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Q(l)){const{propsDefaults:u}=s;if(n in u)o=u[n];else{const c=co(s);o=u[n]=l.call(null,t),c()}}else o=l;s.ce&&s.ce._setProp(n,o)}a[0]&&(i&&!r?o=!1:a[1]&&(o===""||o===tn(n))&&(o=!0))}return o}const Bd=new WeakMap;function bl(e,t,n=!1){const o=n?Bd:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,a={},r=[];let l=!1;if(!Q(e)){const c=d=>{l=!0;const[m,h]=bl(d,t,!0);Te(a,m),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ge(e)&&o.set(e,In),In;if(Y(i))for(let c=0;c<i.length;c++){const d=ut(i[c]);fa(d)&&(a[d]=de)}else if(i)for(const c in i){const d=ut(c);if(fa(d)){const m=i[c],h=a[d]=Y(m)||Q(m)?{type:m}:Te({},m),A=h.type;let y=!1,I=!0;if(Y(A))for(let _=0;_<A.length;++_){const P=A[_],C=Q(P)&&P.name;if(C==="Boolean"){y=!0;break}else C==="String"&&(I=!1)}else y=Q(A)&&A.name==="Boolean";h[0]=y,h[1]=I,(y||re(h,"default"))&&r.push(d)}}const u=[a,r];return ge(e)&&o.set(e,u),u}function fa(e){return e[0]!=="$"&&!Wn(e)}const xi=e=>e==="_"||e==="_ctx"||e==="$stable",Ci=e=>Y(e)?e.map(_t):[_t(e)],Sd=(e,t,n)=>{if(t._n)return t;const o=lt((...s)=>Ci(t(...s)),n);return o._c=!1,o},yl=(e,t,n)=>{const o=e._ctx;for(const s in e){if(xi(s))continue;const i=e[s];if(Q(i))t[s]=Sd(s,i,o);else if(i!=null){const a=Ci(i);t[s]=()=>a}}},vl=(e,t)=>{const n=Ci(t);e.slots.default=()=>n},El=(e,t,n)=>{for(const o in t)(n||!xi(o))&&(e[o]=t[o])},Nd=(e,t,n)=>{const o=e.slots=gl();if(e.vnode.shapeFlag&32){const s=t._;s?(El(o,t,n),n&&Br(o,"_",s,!0)):yl(t,o)}else t&&vl(e,t)},Pd=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,a=de;if(o.shapeFlag&32){const r=t._;r?n&&r===1?i=!1:El(s,t,n):(i=!t.$stable,yl(t,s)),a=t}else t&&(vl(e,t),a={default:1});if(i)for(const r in s)!xi(r)&&a[r]==null&&delete s[r]},Ue=Md;function kd(e){return Td(e)}function Td(e,t){const n=ns();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:a,createText:r,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:m,setScopeId:h=Ct,insertStaticContent:A}=e,y=(p,f,g,v=null,S=null,E=null,D=void 0,T=null,k=!!f.dynamicChildren)=>{if(p===f)return;p&&!jn(p,f)&&(v=x(p),ze(p,S,E,!0),p=null),f.patchFlag===-2&&(k=!1,f.dynamicChildren=null);const{type:N,ref:W,shapeFlag:O}=f;switch(N){case us:I(p,f,g,v);break;case Zt:_(p,f,g,v);break;case Bo:p==null&&P(f,g,v,D);break;case le:Ie(p,f,g,v,S,E,D,T,k);break;default:O&1?V(p,f,g,v,S,E,D,T,k):O&6?Fe(p,f,g,v,S,E,D,T,k):(O&64||O&128)&&N.process(p,f,g,v,S,E,D,T,k,q)}W!=null&&S?Yn(W,p&&p.ref,E,f||p,!f):W==null&&p&&p.ref!=null&&Yn(p.ref,null,E,p,!0)},I=(p,f,g,v)=>{if(p==null)o(f.el=r(f.children),g,v);else{const S=f.el=p.el;f.children!==p.children&&u(S,f.children)}},_=(p,f,g,v)=>{p==null?o(f.el=l(f.children||""),g,v):f.el=p.el},P=(p,f,g,v)=>{[p.el,p.anchor]=A(p.children,f,g,v,p.el,p.anchor)},C=({el:p,anchor:f},g,v)=>{let S;for(;p&&p!==f;)S=m(p),o(p,g,v),p=S;o(f,g,v)},B=({el:p,anchor:f})=>{let g;for(;p&&p!==f;)g=m(p),s(p),p=g;s(f)},V=(p,f,g,v,S,E,D,T,k)=>{if(f.type==="svg"?D="svg":f.type==="math"&&(D="mathml"),p==null)j(f,g,v,S,E,D,T,k);else{const N=p.el&&p.el._isVueCE?p.el:null;try{N&&N._beginPatch(),Z(p,f,S,E,D,T,k)}finally{N&&N._endPatch()}}},j=(p,f,g,v,S,E,D,T)=>{let k,N;const{props:W,shapeFlag:O,transition:H,dirs:X}=p;if(k=p.el=a(p.type,E,W&&W.is,W),O&8?c(k,p.children):O&16&&K(p.children,k,null,v,S,xs(p,E),D,T),X&&sn(p,null,v,"created"),G(k,p,p.scopeId,D,v),W){for(const fe in W)fe!=="value"&&!Wn(fe)&&i(k,fe,null,W[fe],E,v);"value"in W&&i(k,"value",null,W.value,E),(N=W.onVnodeBeforeMount)&&vt(N,v,p)}X&&sn(p,null,v,"beforeMount");const te=Fd(S,H);te&&H.beforeEnter(k),o(k,f,g),((N=W&&W.onVnodeMounted)||te||X)&&Ue(()=>{N&&vt(N,v,p),te&&H.enter(k),X&&sn(p,null,v,"mounted")},S)},G=(p,f,g,v,S)=>{if(g&&h(p,g),v)for(let E=0;E<v.length;E++)h(p,v[E]);if(S){let E=S.subTree;if(f===E||xl(E.type)&&(E.ssContent===f||E.ssFallback===f)){const D=S.vnode;G(p,D,D.scopeId,D.slotScopeIds,S.parent)}}},K=(p,f,g,v,S,E,D,T,k=0)=>{for(let N=k;N<p.length;N++){const W=p[N]=T?Kt(p[N]):_t(p[N]);y(null,W,f,g,v,S,E,D,T)}},Z=(p,f,g,v,S,E,D)=>{const T=f.el=p.el;let{patchFlag:k,dynamicChildren:N,dirs:W}=f;k|=p.patchFlag&16;const O=p.props||de,H=f.props||de;let X;if(g&&an(g,!1),(X=H.onVnodeBeforeUpdate)&&vt(X,g,f,p),W&&sn(f,p,g,"beforeUpdate"),g&&an(g,!0),(O.innerHTML&&H.innerHTML==null||O.textContent&&H.textContent==null)&&c(T,""),N?pe(p.dynamicChildren,N,T,g,v,xs(f,S),E):D||J(p,f,T,null,g,v,xs(f,S),E,!1),k>0){if(k&16)Ee(T,O,H,g,S);else if(k&2&&O.class!==H.class&&i(T,"class",null,H.class,S),k&4&&i(T,"style",O.style,H.style,S),k&8){const te=f.dynamicProps;for(let fe=0;fe<te.length;fe++){const ce=te[fe],Xe=O[ce],Ye=H[ce];(Ye!==Xe||ce==="value")&&i(T,ce,Xe,Ye,S,g)}}k&1&&p.children!==f.children&&c(T,f.children)}else!D&&N==null&&Ee(T,O,H,g,S);((X=H.onVnodeUpdated)||W)&&Ue(()=>{X&&vt(X,g,f,p),W&&sn(f,p,g,"updated")},v)},pe=(p,f,g,v,S,E,D)=>{for(let T=0;T<f.length;T++){const k=p[T],N=f[T],W=k.el&&(k.type===le||!jn(k,N)||k.shapeFlag&198)?d(k.el):g;y(k,N,W,null,v,S,E,D,!0)}},Ee=(p,f,g,v,S)=>{if(f!==g){if(f!==de)for(const E in f)!Wn(E)&&!(E in g)&&i(p,E,f[E],null,S,v);for(const E in g){if(Wn(E))continue;const D=g[E],T=f[E];D!==T&&E!=="value"&&i(p,E,T,D,S,v)}"value"in g&&i(p,"value",f.value,g.value,S)}},Ie=(p,f,g,v,S,E,D,T,k)=>{const N=f.el=p?p.el:r(""),W=f.anchor=p?p.anchor:r("");let{patchFlag:O,dynamicChildren:H,slotScopeIds:X}=f;X&&(T=T?T.concat(X):X),p==null?(o(N,g,v),o(W,g,v),K(f.children||[],g,W,S,E,D,T,k)):O>0&&O&64&&H&&p.dynamicChildren&&p.dynamicChildren.length===H.length?(pe(p.dynamicChildren,H,g,S,E,D,T),(f.key!=null||S&&f===S.subTree)&&Bi(p,f,!0)):J(p,f,g,W,S,E,D,T,k)},Fe=(p,f,g,v,S,E,D,T,k)=>{f.slotScopeIds=T,p==null?f.shapeFlag&512?S.ctx.activate(f,g,v,D,k):Ae(f,g,v,S,E,D,k):We(p,f,k)},Ae=(p,f,g,v,S,E,D)=>{const T=p.component=jd(p,v,S);if(ll(p)&&(T.ctx.renderer=q),Hd(T,!1,D),T.asyncDep){if(S&&S.registerDep(T,we,D),!p.el){const k=T.subTree=ve(Zt);_(null,k,f,g),p.placeholder=k.el}}else we(T,p,f,g,S,E,D)},We=(p,f,g)=>{const v=f.component=p.component;if(Id(p,f,g))if(v.asyncDep&&!v.asyncResolved){U(v,f,g);return}else v.next=f,v.update();else f.el=p.el,v.vnode=f},we=(p,f,g,v,S,E,D)=>{const T=()=>{if(p.isMounted){let{next:O,bu:H,u:X,parent:te,vnode:fe}=p;{const bt=Il(p);if(bt){O&&(O.el=fe.el,U(p,O,D)),bt.asyncDep.then(()=>{p.isUnmounted||T()});return}}let ce=O,Xe;an(p,!1),O?(O.el=fe.el,U(p,O,D)):O=fe,H&&_o(H),(Xe=O.props&&O.props.onVnodeBeforeUpdate)&&vt(Xe,te,O,fe),an(p,!0);const Ye=da(p),At=p.subTree;p.subTree=Ye,y(At,Ye,d(At.el),x(At),p,S,E),O.el=Ye.el,ce===null&&_d(p,Ye.el),X&&Ue(X,S),(Xe=O.props&&O.props.onVnodeUpdated)&&Ue(()=>vt(Xe,te,O,fe),S)}else{let O;const{el:H,props:X}=f,{bm:te,m:fe,parent:ce,root:Xe,type:Ye}=p,At=Qn(f);an(p,!1),te&&_o(te),!At&&(O=X&&X.onVnodeBeforeMount)&&vt(O,ce,f),an(p,!0);{Xe.ce&&Xe.ce._def.shadowRoot!==!1&&Xe.ce._injectChildStyle(Ye);const bt=p.subTree=da(p);y(null,bt,g,v,p,S,E),f.el=bt.el}if(fe&&Ue(fe,S),!At&&(O=X&&X.onVnodeMounted)){const bt=f;Ue(()=>vt(O,ce,bt),S)}(f.shapeFlag&256||ce&&Qn(ce.vnode)&&ce.vnode.shapeFlag&256)&&p.a&&Ue(p.a,S),p.isMounted=!0,f=g=v=null}};p.scope.on();const k=p.effect=new kr(T);p.scope.off();const N=p.update=k.run.bind(k),W=p.job=k.runIfDirty.bind(k);W.i=p,W.id=p.uid,k.scheduler=()=>vi(W),an(p,!0),N()},U=(p,f,g)=>{f.component=p;const v=p.vnode.props;p.vnode=f,p.next=null,Cd(p,f.props,v,g),Pd(p,f.children,g),Rt(),ta(p),Lt()},J=(p,f,g,v,S,E,D,T,k=!1)=>{const N=p&&p.children,W=p?p.shapeFlag:0,O=f.children,{patchFlag:H,shapeFlag:X}=f;if(H>0){if(H&128){Ke(N,O,g,v,S,E,D,T,k);return}else if(H&256){be(N,O,g,v,S,E,D,T,k);return}}X&8?(W&16&&rt(N,S,E),O!==N&&c(g,O)):W&16?X&16?Ke(N,O,g,v,S,E,D,T,k):rt(N,S,E,!0):(W&8&&c(g,""),X&16&&K(O,g,v,S,E,D,T,k))},be=(p,f,g,v,S,E,D,T,k)=>{p=p||In,f=f||In;const N=p.length,W=f.length,O=Math.min(N,W);let H;for(H=0;H<O;H++){const X=f[H]=k?Kt(f[H]):_t(f[H]);y(p[H],X,g,null,S,E,D,T,k)}N>W?rt(p,S,E,!0,!1,O):K(f,g,v,S,E,D,T,k,O)},Ke=(p,f,g,v,S,E,D,T,k)=>{let N=0;const W=f.length;let O=p.length-1,H=W-1;for(;N<=O&&N<=H;){const X=p[N],te=f[N]=k?Kt(f[N]):_t(f[N]);if(jn(X,te))y(X,te,g,null,S,E,D,T,k);else break;N++}for(;N<=O&&N<=H;){const X=p[O],te=f[H]=k?Kt(f[H]):_t(f[H]);if(jn(X,te))y(X,te,g,null,S,E,D,T,k);else break;O--,H--}if(N>O){if(N<=H){const X=H+1,te=X<W?f[X].el:v;for(;N<=H;)y(null,f[N]=k?Kt(f[N]):_t(f[N]),g,te,S,E,D,T,k),N++}}else if(N>H)for(;N<=O;)ze(p[N],S,E,!0),N++;else{const X=N,te=N,fe=new Map;for(N=te;N<=H;N++){const et=f[N]=k?Kt(f[N]):_t(f[N]);et.key!=null&&fe.set(et.key,N)}let ce,Xe=0;const Ye=H-te+1;let At=!1,bt=0;const Un=new Array(Ye);for(N=0;N<Ye;N++)Un[N]=0;for(N=X;N<=O;N++){const et=p[N];if(Xe>=Ye){ze(et,S,E,!0);continue}let yt;if(et.key!=null)yt=fe.get(et.key);else for(ce=te;ce<=H;ce++)if(Un[ce-te]===0&&jn(et,f[ce])){yt=ce;break}yt===void 0?ze(et,S,E,!0):(Un[yt-te]=N+1,yt>=bt?bt=yt:At=!0,y(et,f[yt],g,null,S,E,D,T,k),Xe++)}const Xi=At?Dd(Un):In;for(ce=Xi.length-1,N=Ye-1;N>=0;N--){const et=te+N,yt=f[et],Yi=f[et+1],Qi=et+1<W?Yi.el||_l(Yi):v;Un[N]===0?y(null,yt,g,Qi,S,E,D,T,k):At&&(ce<0||N!==Xi[ce]?pt(yt,g,Qi,2):ce--)}}},pt=(p,f,g,v,S=null)=>{const{el:E,type:D,transition:T,children:k,shapeFlag:N}=p;if(N&6){pt(p.component.subTree,f,g,v);return}if(N&128){p.suspense.move(f,g,v);return}if(N&64){D.move(p,f,g,q);return}if(D===le){o(E,f,g);for(let O=0;O<k.length;O++)pt(k[O],f,g,v);o(p.anchor,f,g);return}if(D===Bo){C(p,f,g);return}if(v!==2&&N&1&&T)if(v===0)T.beforeEnter(E),o(E,f,g),Ue(()=>T.enter(E),S);else{const{leave:O,delayLeave:H,afterLeave:X}=T,te=()=>{p.ctx.isUnmounted?s(E):o(E,f,g)},fe=()=>{E._isLeaving&&E[Yu](!0),O(E,()=>{te(),X&&X()})};H?H(E,te,fe):fe()}else o(E,f,g)},ze=(p,f,g,v=!1,S=!1)=>{const{type:E,props:D,ref:T,children:k,dynamicChildren:N,shapeFlag:W,patchFlag:O,dirs:H,cacheIndex:X}=p;if(O===-2&&(S=!1),T!=null&&(Rt(),Yn(T,null,g,p,!0),Lt()),X!=null&&(f.renderCache[X]=void 0),W&256){f.ctx.deactivate(p);return}const te=W&1&&H,fe=!Qn(p);let ce;if(fe&&(ce=D&&D.onVnodeBeforeUnmount)&&vt(ce,f,p),W&6)on(p.component,g,v);else{if(W&128){p.suspense.unmount(g,v);return}te&&sn(p,null,f,"beforeUnmount"),W&64?p.type.remove(p,f,g,q,v):N&&!N.hasOnce&&(E!==le||O>0&&O&64)?rt(N,f,g,!1,!0):(E===le&&O&384||!S&&W&16)&&rt(k,f,g),v&&wn(p)}(fe&&(ce=D&&D.onVnodeUnmounted)||te)&&Ue(()=>{ce&&vt(ce,f,p),te&&sn(p,null,f,"unmounted")},g)},wn=p=>{const{type:f,el:g,anchor:v,transition:S}=p;if(f===le){An(g,v);return}if(f===Bo){B(p);return}const E=()=>{s(g),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:D,delayLeave:T}=S,k=()=>D(g,E);T?T(p.el,E,k):k()}else E()},An=(p,f)=>{let g;for(;p!==f;)g=m(p),s(p),p=g;s(f)},on=(p,f,g)=>{const{bum:v,scope:S,job:E,subTree:D,um:T,m:k,a:N}=p;ma(k),ma(N),v&&_o(v),S.stop(),E&&(E.flags|=8,ze(D,p,f,g)),T&&Ue(T,f),Ue(()=>{p.isUnmounted=!0},f)},rt=(p,f,g,v=!1,S=!1,E=0)=>{for(let D=E;D<p.length;D++)ze(p[D],f,g,v,S)},x=p=>{if(p.shapeFlag&6)return x(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const f=m(p.anchor||p.el),g=f&&f[ol];return g?m(g):f};let $=!1;const M=(p,f,g)=>{let v;p==null?f._vnode&&(ze(f._vnode,null,null,!0),v=f._vnode.component):y(f._vnode||null,p,f,null,null,null,g),f._vnode=p,$||($=!0,ta(v),Qr(),$=!1)},q={p:y,um:ze,m:pt,r:wn,mt:Ae,mc:K,pc:J,pbc:pe,n:x,o:e};return{render:M,hydrate:void 0,createApp:wd(M)}}function xs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function an({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Bi(e,t,n=!1){const o=e.children,s=t.children;if(Y(o)&&Y(s))for(let i=0;i<o.length;i++){const a=o[i];let r=s[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[i]=Kt(s[i]),r.el=a.el),!n&&r.patchFlag!==-2&&Bi(a,r)),r.type===us&&(r.patchFlag!==-1?r.el=a.el:r.__elIndex=i+(e.type===le?1:0)),r.type===Zt&&!r.el&&(r.el=a.el)}}function Dd(e){const t=e.slice(),n=[0];let o,s,i,a,r;const l=e.length;for(o=0;o<l;o++){const u=e[o];if(u!==0){if(s=n[n.length-1],e[s]<u){t[o]=s,n.push(o);continue}for(i=0,a=n.length-1;i<a;)r=i+a>>1,e[n[r]]<u?i=r+1:a=r;u<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Il(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Il(t)}function ma(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function _l(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?_l(t.subTree):null}const xl=e=>e.__isSuspense;function Md(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):qu(e)}const le=Symbol.for("v-fgt"),us=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Zn=[];let ot=null;function F(e=!1){Zn.push(ot=e?null:[])}function Od(){Zn.pop(),ot=Zn[Zn.length-1]||null}let so=1;function Mo(e,t=!1){so+=e,e<0&&ot&&t&&(ot.hasOnce=!0)}function Cl(e){return e.dynamicChildren=so>0?ot||In:null,Od(),so>0&&ot&&ot.push(e),e}function R(e,t,n,o,s,i){return Cl(w(e,t,n,o,s,i,!0))}function Ne(e,t,n,o,s){return Cl(ve(e,t,n,o,s,!0))}function Oo(e){return e?e.__v_isVNode===!0:!1}function jn(e,t){return e.type===t.type&&e.key===t.key}const Bl=({key:e})=>e??null,So=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||Q(e)?{i:nt,r:e,k:t,f:!!n}:e:null);function w(e,t=null,n=null,o=0,s=null,i=e===le?0:1,a=!1,r=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bl(t),ref:t&&So(t),scopeId:Zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return r?(Si(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),so>0&&!a&&ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ot.push(l),l}const ve=$d;function $d(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===ld)&&(e=Zt),Oo(e)){const r=Pn(e,t,!0);return n&&Si(r,n),so>0&&!i&&ot&&(r.shapeFlag&6?ot[ot.indexOf(e)]=r:ot.push(r)),r.patchFlag=-2,r}if(Xd(e)&&(e=e.__vccOpts),t){t=Rd(t);let{class:r,style:l}=t;r&&!xe(r)&&(t.class=ke(r)),ge(l)&&(yi(l)&&!Y(l)&&(l=Te({},l)),t.style=os(l))}const a=xe(e)?1:xl(e)?128:Ku(e)?64:ge(e)?4:Q(e)?2:0;return w(e,t,n,o,s,a,i,!0)}function Rd(e){return e?yi(e)||wl(e)?Te({},e):e:null}function Pn(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:a,children:r,transition:l}=e,u=t?Ld(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Bl(u),ref:t&&t.ref?n&&i?Y(i)?i.concat(So(t)):[i,So(t)]:So(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&Ei(c,l.clone(c)),c}function ft(e=" ",t=0){return ve(us,null,e,t)}function Sl(e,t){const n=ve(Bo,null,e);return n.staticCount=t,n}function mt(e="",t=!1){return t?(F(),Ne(Zt,null,e)):ve(Zt,null,e)}function _t(e){return e==null||typeof e=="boolean"?ve(Zt):Y(e)?ve(le,null,e.slice()):Oo(e)?Kt(e):ve(us,null,String(e))}function Kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function Si(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Si(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!wl(t)?t._ctx=nt:s===3&&nt&&(nt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:nt},n=32):(t=String(t),o&64?(n=16,t=[ft(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ld(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=ke([t.class,o.class]));else if(s==="style")t.style=os([t.style,o.style]);else if(Jo(s)){const i=t[s],a=o[s];a&&i!==a&&!(Y(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=o[s])}return t}function vt(e,t,n,o=null){St(e,t,7,[n,o])}const Ud=fl();let Vd=0;function jd(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Ud,i={uid:Vd++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bl(o,s),emitsOptions:ml(o,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:o.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bd.bind(null,i),e.ce&&e.ce(i),i}let Me=null;const qd=()=>Me||nt;let $o,Ks;{const e=ns(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};$o=t("__VUE_INSTANCE_SETTERS__",n=>Me=n),Ks=t("__VUE_SSR_SETTERS__",n=>io=n)}const co=e=>{const t=Me;return $o(e),e.scope.on(),()=>{e.scope.off(),$o(t)}},ha=()=>{Me&&Me.scope.off(),$o(null)};function Nl(e){return e.vnode.shapeFlag&4}let io=!1;function Hd(e,t=!1,n=!1){t&&Ks(t);const{props:o,children:s}=e.vnode,i=Nl(e);xd(e,o,i,t),Nd(e,s,n||t);const a=i?Gd(e,t):void 0;return t&&Ks(!1),a}function Gd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ud);const{setup:o}=n;if(o){Rt();const s=e.setupContext=o.length>1?Kd(e):null,i=co(e),a=lo(o,e,0,[e.props,s]),r=_r(a);if(Lt(),i(),(r||e.sp)&&!Qn(e)&&rl(e),r){if(a.then(ha,ha),t)return a.then(l=>{ga(e,l)}).catch(l=>{as(l,e,0)});e.asyncDep=a}else ga(e,a)}else Pl(e)}function ga(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=Kr(t)),Pl(e)}function Pl(e,t,n){const o=e.type;e.render||(e.render=o.render||Ct);{const s=co(e);Rt();try{dd(e)}finally{Lt(),s()}}}const Wd={get(e,t){return De(e,"get",""),e[t]}};function Kd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Wd),slots:e.slots,emit:e.emit,expose:t}}function ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Kr(Fu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jn)return Jn[n](e)},has(t,n){return n in t||n in Jn}})):e.proxy}function zd(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Xd(e){return Q(e)&&"__vccOpts"in e}const Be=(e,t)=>Ru(e,t,io);function kl(e,t,n){try{Mo(-1);const o=arguments.length;return o===2?ge(t)&&!Y(t)?Oo(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Oo(n)&&(n=[n]),ve(e,t,n))}finally{Mo(1)}}const Yd="3.5.27";let zs;const wa=typeof window<"u"&&window.trustedTypes;if(wa)try{zs=wa.createPolicy("vue",{createHTML:e=>e})}catch{}const Tl=zs?e=>zs.createHTML(e):e=>e,Qd="http://www.w3.org/2000/svg",Jd="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,Aa=Dt&&Dt.createElement("template"),Zd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Dt.createElementNS(Qd,e):t==="mathml"?Dt.createElementNS(Jd,e):n?Dt.createElement(e,{is:n}):Dt.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Dt.createTextNode(e),createComment:e=>Dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Aa.innerHTML=Tl(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const r=Aa.content;if(o==="svg"||o==="mathml"){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ep=Symbol("_vtc");function tp(e,t,n){const o=e[ep];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ro=Symbol("_vod"),Fl=Symbol("_vsh"),np={name:"show",beforeMount(e,{value:t},{transition:n}){e[Ro]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),qn(e,!0),o.enter(e)):o.leave(e,()=>{qn(e,!1)}):qn(e,t))},beforeUnmount(e,{value:t}){qn(e,t)}};function qn(e,t){e.style.display=t?e[Ro]:"none",e[Fl]=!t}const op=Symbol(""),sp=/(?:^|;)\s*display\s*:/;function ip(e,t,n){const o=e.style,s=xe(n);let i=!1;if(n&&!s){if(t)if(xe(t))for(const a of t.split(";")){const r=a.slice(0,a.indexOf(":")).trim();n[r]==null&&No(o,r,"")}else for(const a in t)n[a]==null&&No(o,a,"");for(const a in n)a==="display"&&(i=!0),No(o,a,n[a])}else if(s){if(t!==n){const a=o[op];a&&(n+=";"+a),o.cssText=n,i=sp.test(n)}}else t&&e.removeAttribute("style");Ro in e&&(e[Ro]=i?o.display:"",e[Fl]&&(o.display="none"))}const ba=/\s*!important$/;function No(e,t,n){if(Y(n))n.forEach(o=>No(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=ap(e,t);ba.test(n)?e.setProperty(tn(o),n.replace(ba,""),"important"):e[o]=n}}const ya=["Webkit","Moz","ms"],Cs={};function ap(e,t){const n=Cs[t];if(n)return n;let o=ut(t);if(o!=="filter"&&o in e)return Cs[t]=o;o=ts(o);for(let s=0;s<ya.length;s++){const i=ya[s]+o;if(i in e)return Cs[t]=i}return t}const va="http://www.w3.org/1999/xlink";function Ea(e,t,n,o,s,i=pu(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(va,t.slice(6,t.length)):e.setAttributeNS(va,t,n):n==null||i&&!Sr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":en(n)?String(n):n)}function Ia(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Tl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(r!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Sr(n):n==null&&r==="string"?(n="",a=!0):r==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function vn(e,t,n,o){e.addEventListener(t,n,o)}function rp(e,t,n,o){e.removeEventListener(t,n,o)}const _a=Symbol("_vei");function lp(e,t,n,o,s=null){const i=e[_a]||(e[_a]={}),a=i[t];if(o&&a)a.value=o;else{const[r,l]=cp(t);if(o){const u=i[t]=pp(o,s);vn(e,r,u,l)}else a&&(rp(e,r,a,l),i[t]=void 0)}}const xa=/(?:Once|Passive|Capture)$/;function cp(e){let t;if(xa.test(e)){t={};let o;for(;o=e.match(xa);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Bs=0;const up=Promise.resolve(),dp=()=>Bs||(up.then(()=>Bs=0),Bs=Date.now());function pp(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;St(fp(o,n.value),t,5,[o])};return n.value=e,n.attached=dp(),n}function fp(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Ca=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,mp=(e,t,n,o,s,i)=>{const a=s==="svg";t==="class"?tp(e,o,a):t==="style"?ip(e,n,o):Jo(t)?ui(t)||lp(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hp(e,t,o,a))?(Ia(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ea(e,t,o,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(o))?Ia(e,ut(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ea(e,t,o,a))};function hp(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ca(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ca(t)&&xe(n)?!1:t in e}const Ba=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>_o(t,n):t};function gp(e){e.target.composing=!0}function Sa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ss=Symbol("_assign");function Na(e,t,n){return t&&(e=e.trim()),n&&(e=fi(e)),e}const wp={created(e,{modifiers:{lazy:t,trim:n,number:o}},s){e[Ss]=Ba(s);const i=o||s.props&&s.props.type==="number";vn(e,t?"change":"input",a=>{a.target.composing||e[Ss](Na(e.value,n,i))}),(n||i)&&vn(e,"change",()=>{e.value=Na(e.value,n,i)}),t||(vn(e,"compositionstart",gp),vn(e,"compositionend",Sa),vn(e,"change",Sa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:o,trim:s,number:i}},a){if(e[Ss]=Ba(a),e.composing)return;const r=(i||e.type==="number")&&!/^0\d/.test(e.value)?fi(e.value):e.value,l=t??"";r!==l&&(document.activeElement===e&&e.type!=="range"&&(o&&t===n||s&&e.value.trim()===l)||(e.value=l))}},Ap=["ctrl","shift","alt","meta"],bp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ap.some(n=>e[`${n}Key`]&&!t.includes(n))},Lo=(e,t)=>{const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((s,...i)=>{for(let a=0;a<t.length;a++){const r=bp[t[a]];if(r&&r(s,t))return}return e(s,...i)}))},yp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pa=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=(s=>{if(!("key"in s))return;const i=tn(s.key);if(t.some(a=>a===i||yp[a]===i))return e(s)}))},vp=Te({patchProp:mp},Zd);let ka;function Ep(){return ka||(ka=kd(vp))}const Ip=((...e)=>{const t=Ep().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=xp(o);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,_p(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function _p(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xp(e){return xe(e)?document.querySelector(e):e}const En=typeof document<"u";function Dl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Dl(e.default)}const ie=Object.assign;function Ns(e,t){const n={};for(const o in t){const s=t[o];n[o]=wt(s)?s.map(e):e(s)}return n}const eo=()=>{},wt=Array.isArray;function Ta(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}const Ml=/#/g,Bp=/&/g,Sp=/\//g,Np=/=/g,Pp=/\?/g,Ol=/\+/g,kp=/%5B/g,Tp=/%5D/g,$l=/%5E/g,Fp=/%60/g,Rl=/%7B/g,Dp=/%7C/g,Ll=/%7D/g,Mp=/%20/g;function Ni(e){return e==null?"":encodeURI(""+e).replace(Dp,"|").replace(kp,"[").replace(Tp,"]")}function Op(e){return Ni(e).replace(Rl,"{").replace(Ll,"}").replace($l,"^")}function Xs(e){return Ni(e).replace(Ol,"%2B").replace(Mp,"+").replace(Ml,"%23").replace(Bp,"%26").replace(Fp,"`").replace(Rl,"{").replace(Ll,"}").replace($l,"^")}function $p(e){return Xs(e).replace(Np,"%3D")}function Rp(e){return Ni(e).replace(Ml,"%23").replace(Pp,"%3F")}function Lp(e){return Rp(e).replace(Sp,"%2F")}function ao(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Up=/\/$/,Vp=e=>e.replace(Up,"");function Ps(e,t,n="/"){let o,s={},i="",a="";const r=t.indexOf("#");let l=t.indexOf("?");return l=r>=0&&l>r?-1:l,l>=0&&(o=t.slice(0,l),i=t.slice(l,r>0?r:t.length),s=e(i.slice(1))),r>=0&&(o=o||t.slice(0,r),a=t.slice(r,t.length)),o=Gp(o??t,n),{fullPath:o+i+a,path:o,query:s,hash:ao(a)}}function jp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qp(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&kn(t.matched[o],n.matched[s])&&Ul(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ul(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Hp(e[n],t[n]))return!1;return!0}function Hp(e,t){return wt(e)?Da(e,t):wt(t)?Da(t,e):e?.valueOf()===t?.valueOf()}function Da(e,t){return wt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Gp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let i=n.length-1,a,r;for(a=0;a<o.length;a++)if(r=o[a],r!==".")if(r==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+o.slice(a).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ys=(function(e){return e.pop="pop",e.push="push",e})({}),ks=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Wp(e){if(!e)if(En){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vp(e)}const Kp=/^[^#]+#/;function zp(e,t){return e.replace(Kp,"#")+t}function Xp(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const ps=()=>({left:window.scrollX,top:window.scrollY});function Yp(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Xp(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ma(e,t){return(history.state?history.state.position-t:-1)+e}const Qs=new Map;function Qp(e,t){Qs.set(e,t)}function Jp(e){const t=Qs.get(e);return Qs.delete(e),t}function Zp(e){return typeof e=="string"||e&&typeof e=="object"}function Vl(e){return typeof e=="string"||typeof e=="symbol"}let ye=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const jl=Symbol("");ye.MATCHER_NOT_FOUND+"",ye.NAVIGATION_GUARD_REDIRECT+"",ye.NAVIGATION_ABORTED+"",ye.NAVIGATION_CANCELLED+"",ye.NAVIGATION_DUPLICATED+"";function Tn(e,t){return ie(new Error,{type:e,[jl]:!0},t)}function Ft(e,t){return e instanceof Error&&jl in e&&(t==null||!!(e.type&t))}const ef=["params","query","hash"];function tf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of ef)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function nf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(Ol," "),i=s.indexOf("="),a=ao(i<0?s:s.slice(0,i)),r=i<0?null:ao(s.slice(i+1));if(a in t){let l=t[a];wt(l)||(l=t[a]=[l]),l.push(r)}else t[a]=r}return t}function Oa(e){let t="";for(let n in e){const o=e[n];if(n=$p(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(wt(o)?o.map(s=>s&&Xs(s)):[o&&Xs(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function of(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=wt(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const sf=Symbol(""),$a=Symbol(""),Pi=Symbol(""),ki=Symbol(""),Js=Symbol("");function Hn(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function zt(e,t,n,o,s,i=a=>a()){const a=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((r,l)=>{const u=m=>{m===!1?l(Tn(ye.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):Zp(m)?l(Tn(ye.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&o.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),r())},c=i(()=>e.call(o&&o.instances[s],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Ts(e,t,n,o,s=i=>i()){const i=[];for(const a of e)for(const r in a.components){let l=a.components[r];if(!(t!=="beforeRouteEnter"&&!a.instances[r]))if(Dl(l)){const u=(l.__vccOpts||l)[t];u&&i.push(zt(u,n,o,a,r,s))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${r}" at "${a.path}"`);const d=Cp(c)?c.default:c;a.mods[r]=c,a.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&zt(m,n,o,a,r,s)()}))}}return i}function af(e,t){const n=[],o=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const r=t.matched[a];r&&(e.matched.find(u=>kn(u,r))?o.push(r):n.push(r));const l=e.matched[a];l&&(t.matched.find(u=>kn(u,l))||s.push(l))}return[n,o,s]}let rf=()=>location.protocol+"//"+location.host;function ql(e,t){const{pathname:n,search:o,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,r=s.slice(a);return r[0]!=="/"&&(r="/"+r),Fa(r,"")}return Fa(n,e)+o+s}function lf(e,t,n,o){let s=[],i=[],a=null;const r=({state:m})=>{const h=ql(e,location),A=n.value,y=t.value;let I=0;if(m){if(n.value=h,t.value=m,a&&a===A){a=null;return}I=y?m.position-y.position:0}else o(h);s.forEach(_=>{_(n.value,A,{delta:I,type:Ys.pop,direction:I?I>0?ks.forward:ks.back:ks.unknown})})};function l(){a=n.value}function u(m){s.push(m);const h=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return i.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ie({},m.state,{scroll:ps()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function Ra(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?ps():null}}function cf(e){const{history:t,location:n}=window,o={value:ql(e,n)},s={value:t.state};s.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:rf()+e+l;try{t[c?"replaceState":"pushState"](u,"",m),s.value=u}catch(h){console.error(h),n[c?"replace":"assign"](m)}}function a(l,u){i(l,ie({},t.state,Ra(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),o.value=l}function r(l,u){const c=ie({},s.value,t.state,{forward:l,scroll:ps()});i(c.current,c,!0),i(l,ie({},Ra(o.value,l,null),{position:c.position+1},u),!1),o.value=l}return{location:o,state:s,push:r,replace:a}}function uf(e){e=Wp(e);const t=cf(e),n=lf(e,t.state,t.location,t.replace);function o(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=ie({location:"",base:e,go:o,createHref:zp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let un=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Se=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Se||{});const df={type:un.Static,value:""},pf=/[a-zA-Z0-9_]/;function ff(e){if(!e)return[[]];if(e==="/")return[[df]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=Se.Static,o=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let r=0,l,u="",c="";function d(){u&&(n===Se.Static?i.push({type:un.Static,value:u}):n===Se.Param||n===Se.ParamRegExp||n===Se.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:un.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;r<e.length;){if(l=e[r++],l==="\\"&&n!==Se.ParamRegExp){o=n,n=Se.EscapeNext;continue}switch(n){case Se.Static:l==="/"?(u&&d(),a()):l===":"?(d(),n=Se.Param):m();break;case Se.EscapeNext:m(),n=o;break;case Se.Param:l==="("?n=Se.ParamRegExp:pf.test(l)?m():(d(),n=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&r--);break;case Se.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Se.ParamRegExpEnd:c+=l;break;case Se.ParamRegExpEnd:d(),n=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&r--,c="";break;default:t("Unknown state");break}}return n===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),s}const La="[^/]+?",mf={sensitive:!1,strict:!1,start:!0,end:!0};var Ve=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ve||{});const hf=/[.+*?^${}()[\]/\\]/g;function gf(e,t){const n=ie({},mf,t),o=[];let s=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[Ve.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let h=Ve.Segment+(n.sensitive?Ve.BonusCaseSensitive:0);if(m.type===un.Static)d||(s+="/"),s+=m.value.replace(hf,"\\$&"),h+=Ve.Static;else if(m.type===un.Param){const{value:A,repeatable:y,optional:I,regexp:_}=m;i.push({name:A,repeatable:y,optional:I});const P=_||La;if(P!==La){h+=Ve.BonusCustomRegExp;try{`${P}`}catch(B){throw new Error(`Invalid custom RegExp for param "${A}" (${P}): `+B.message)}}let C=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(C=I&&u.length<2?`(?:/${C})`:"/"+C),I&&(C+="?"),s+=C,h+=Ve.Dynamic,I&&(h+=Ve.BonusOptional),y&&(h+=Ve.BonusRepeatable),P===".*"&&(h+=Ve.BonusWildcard)}c.push(h)}o.push(c)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=Ve.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function r(u){const c=u.match(a),d={};if(!c)return null;for(let m=1;m<c.length;m++){const h=c[m]||"",A=i[m-1];d[A.name]=h&&A.repeatable?h.split("/"):h}return d}function l(u){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of m)if(h.type===un.Static)c+=h.value;else if(h.type===un.Param){const{value:A,repeatable:y,optional:I}=h,_=A in u?u[A]:"";if(wt(_)&&!y)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const P=wt(_)?_.join("/"):_;if(!P)if(I)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=P}}return c||"/"}return{re:a,score:o,keys:i,parse:r,stringify:l}}function wf(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===Ve.Static+Ve.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ve.Static+Ve.Segment?1:-1:0}function Hl(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const i=wf(o[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-o.length)===1){if(Ua(o))return 1;if(Ua(s))return-1}return s.length-o.length}function Ua(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Af={strict:!1,end:!0,sensitive:!1};function bf(e,t,n){const o=gf(ff(e.path),n),s=ie(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function yf(e,t){const n=[],o=new Map;t=Ta(Af,t);function s(d){return o.get(d)}function i(d,m,h){const A=!h,y=ja(d);y.aliasOf=h&&h.record;const I=Ta(t,d),_=[y];if("alias"in d){const B=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of B)_.push(ja(ie({},y,{components:h?h.record.components:y.components,path:V,aliasOf:h?h.record:y})))}let P,C;for(const B of _){const{path:V}=B;if(m&&V[0]!=="/"){const j=m.record.path,G=j[j.length-1]==="/"?"":"/";B.path=m.record.path+(V&&G+V)}if(P=bf(B,m,I),h?h.alias.push(P):(C=C||P,C!==P&&C.alias.push(P),A&&d.name&&!qa(P)&&a(d.name)),Gl(P)&&l(P),y.children){const j=y.children;for(let G=0;G<j.length;G++)i(j[G],P,h&&h.children[G])}h=h||P}return C?()=>{a(C)}:eo}function a(d){if(Vl(d)){const m=o.get(d);m&&(o.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function r(){return n}function l(d){const m=If(d,n);n.splice(m,0,d),d.record.name&&!qa(d)&&o.set(d.record.name,d)}function u(d,m){let h,A={},y,I;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw Tn(ye.MATCHER_NOT_FOUND,{location:d});I=h.record.name,A=ie(Va(m.params,h.keys.filter(C=>!C.optional).concat(h.parent?h.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Va(d.params,h.keys.map(C=>C.name))),y=h.stringify(A)}else if(d.path!=null)y=d.path,h=n.find(C=>C.re.test(y)),h&&(A=h.parse(y),I=h.record.name);else{if(h=m.name?o.get(m.name):n.find(C=>C.re.test(m.path)),!h)throw Tn(ye.MATCHER_NOT_FOUND,{location:d,currentLocation:m});I=h.record.name,A=ie({},m.params,d.params),y=h.stringify(A)}const _=[];let P=h;for(;P;)_.unshift(P.record),P=P.parent;return{name:I,path:y,params:A,matched:_,meta:Ef(_)}}e.forEach(d=>i(d));function c(){n.length=0,o.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:r,getRecordMatcher:s}}function Va(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function ja(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:vf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function vf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function qa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ef(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function If(e,t){let n=0,o=t.length;for(;n!==o;){const i=n+o>>1;Hl(e,t[i])<0?o=i:n=i+1}const s=_f(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function _f(e){let t=e;for(;t=t.parent;)if(Gl(t)&&Hl(e,t)===0)return t}function Gl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ha(e){const t=Bt(Pi),n=Bt(ki),o=Be(()=>{const l=he(e.to);return t.resolve(l)}),s=Be(()=>{const{matched:l}=o.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(kn.bind(null,c));if(m>-1)return m;const h=Ga(l[u-2]);return u>1&&Ga(c)===h&&d[d.length-1].path!==h?d.findIndex(kn.bind(null,l[u-2])):m}),i=Be(()=>s.value>-1&&Sf(n.params,o.value.params)),a=Be(()=>s.value>-1&&s.value===n.matched.length-1&&Ul(n.params,o.value.params));function r(l={}){if(Bf(l)){const u=t[he(e.replace)?"replace":"push"](he(e.to)).catch(eo);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:o,href:Be(()=>o.value.href),isActive:i,isExactActive:a,navigate:r}}function xf(e){return e.length===1?e[0]:e}const Cf=al({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ha,setup(e,{slots:t}){const n=is(Ha(e)),{options:o}=Bt(Pi),s=Be(()=>({[Wa(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Wa(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&xf(t.default(n));return e.custom?i:kl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wl=Cf;function Bf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Sf(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!wt(s)||s.length!==o.length||o.some((i,a)=>i.valueOf()!==s[a].valueOf()))return!1}return!0}function Ga(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wa=(e,t,n)=>e??t??n,Nf=al({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Bt(Js),s=Be(()=>e.route||o.value),i=Bt($a,0),a=Be(()=>{let u=he(i);const{matched:c}=s.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),r=Be(()=>s.value.matched[a.value]);xo($a,Be(()=>a.value+1)),xo(sf,r),xo(Js,s);const l=je();return Cn(()=>[l.value,r.value,e.name],([u,c,d],[m,h,A])=>{c&&(c.instances[d]=u,h&&h!==c&&u&&u===m&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!kn(c,h)||!m)&&(c.enterCallbacks[d]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,d=r.value,m=d&&d.components[c];if(!m)return Ka(n.default,{Component:m,route:u});const h=d.props[c],A=h?h===!0?u.params:typeof h=="function"?h(u):h:null,I=kl(m,ie({},A,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Ka(n.default,{Component:I,route:u})||I}}});function Ka(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Kl=Nf;function Pf(e){const t=yf(e.routes,e),n=e.parseQuery||nf,o=e.stringifyQuery||Oa,s=e.history,i=Hn(),a=Hn(),r=Hn(),l=Du(Ht);let u=Ht;En&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ns.bind(null,x=>""+x),d=Ns.bind(null,Lp),m=Ns.bind(null,ao);function h(x,$){let M,q;return Vl(x)?(M=t.getRecordMatcher(x),q=$):q=x,t.addRoute(q,M)}function A(x){const $=t.getRecordMatcher(x);$&&t.removeRoute($)}function y(){return t.getRoutes().map(x=>x.record)}function I(x){return!!t.getRecordMatcher(x)}function _(x,$){if($=ie({},$||l.value),typeof x=="string"){const g=Ps(n,x,$.path),v=t.resolve({path:g.path},$),S=s.createHref(g.fullPath);return ie(g,v,{params:m(v.params),hash:ao(g.hash),redirectedFrom:void 0,href:S})}let M;if(x.path!=null)M=ie({},x,{path:Ps(n,x.path,$.path).path});else{const g=ie({},x.params);for(const v in g)g[v]==null&&delete g[v];M=ie({},x,{params:d(g)}),$.params=d($.params)}const q=t.resolve(M,$),ee=x.hash||"";q.params=c(m(q.params));const p=jp(o,ie({},x,{hash:Op(ee),path:q.path})),f=s.createHref(p);return ie({fullPath:p,hash:ee,query:o===Oa?of(x.query):x.query||{}},q,{redirectedFrom:void 0,href:f})}function P(x){return typeof x=="string"?Ps(n,x,l.value.path):ie({},x)}function C(x,$){if(u!==x)return Tn(ye.NAVIGATION_CANCELLED,{from:$,to:x})}function B(x){return G(x)}function V(x){return B(ie(P(x),{replace:!0}))}function j(x,$){const M=x.matched[x.matched.length-1];if(M&&M.redirect){const{redirect:q}=M;let ee=typeof q=="function"?q(x,$):q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=P(ee):{path:ee},ee.params={}),ie({query:x.query,hash:x.hash,params:ee.path!=null?{}:x.params},ee)}}function G(x,$){const M=u=_(x),q=l.value,ee=x.state,p=x.force,f=x.replace===!0,g=j(M,q);if(g)return G(ie(P(g),{state:typeof g=="object"?ie({},ee,g.state):ee,force:p,replace:f}),$||M);const v=M;v.redirectedFrom=$;let S;return!p&&qp(o,q,M)&&(S=Tn(ye.NAVIGATION_DUPLICATED,{to:v,from:q}),pt(q,q,!0,!1)),(S?Promise.resolve(S):pe(v,q)).catch(E=>Ft(E)?Ft(E,ye.NAVIGATION_GUARD_REDIRECT)?E:Ke(E):J(E,v,q)).then(E=>{if(E){if(Ft(E,ye.NAVIGATION_GUARD_REDIRECT))return G(ie({replace:f},P(E.to),{state:typeof E.to=="object"?ie({},ee,E.to.state):ee,force:p}),$||v)}else E=Ie(v,q,!0,f,ee);return Ee(v,q,E),E})}function K(x,$){const M=C(x,$);return M?Promise.reject(M):Promise.resolve()}function Z(x){const $=An.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(x):x()}function pe(x,$){let M;const[q,ee,p]=af(x,$);M=Ts(q.reverse(),"beforeRouteLeave",x,$);for(const g of q)g.leaveGuards.forEach(v=>{M.push(zt(v,x,$))});const f=K.bind(null,x,$);return M.push(f),rt(M).then(()=>{M=[];for(const g of i.list())M.push(zt(g,x,$));return M.push(f),rt(M)}).then(()=>{M=Ts(ee,"beforeRouteUpdate",x,$);for(const g of ee)g.updateGuards.forEach(v=>{M.push(zt(v,x,$))});return M.push(f),rt(M)}).then(()=>{M=[];for(const g of p)if(g.beforeEnter)if(wt(g.beforeEnter))for(const v of g.beforeEnter)M.push(zt(v,x,$));else M.push(zt(g.beforeEnter,x,$));return M.push(f),rt(M)}).then(()=>(x.matched.forEach(g=>g.enterCallbacks={}),M=Ts(p,"beforeRouteEnter",x,$,Z),M.push(f),rt(M))).then(()=>{M=[];for(const g of a.list())M.push(zt(g,x,$));return M.push(f),rt(M)}).catch(g=>Ft(g,ye.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function Ee(x,$,M){r.list().forEach(q=>Z(()=>q(x,$,M)))}function Ie(x,$,M,q,ee){const p=C(x,$);if(p)return p;const f=$===Ht,g=En?history.state:{};M&&(q||f?s.replace(x.fullPath,ie({scroll:f&&g&&g.scroll},ee)):s.push(x.fullPath,ee)),l.value=x,pt(x,$,M,f),Ke()}let Fe;function Ae(){Fe||(Fe=s.listen((x,$,M)=>{if(!on.listening)return;const q=_(x),ee=j(q,on.currentRoute.value);if(ee){G(ie(ee,{replace:!0,force:!0}),q).catch(eo);return}u=q;const p=l.value;En&&Qp(Ma(p.fullPath,M.delta),ps()),pe(q,p).catch(f=>Ft(f,ye.NAVIGATION_ABORTED|ye.NAVIGATION_CANCELLED)?f:Ft(f,ye.NAVIGATION_GUARD_REDIRECT)?(G(ie(P(f.to),{force:!0}),q).then(g=>{Ft(g,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&!M.delta&&M.type===Ys.pop&&s.go(-1,!1)}).catch(eo),Promise.reject()):(M.delta&&s.go(-M.delta,!1),J(f,q,p))).then(f=>{f=f||Ie(q,p,!1),f&&(M.delta&&!Ft(f,ye.NAVIGATION_CANCELLED)?s.go(-M.delta,!1):M.type===Ys.pop&&Ft(f,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Ee(q,p,f)}).catch(eo)}))}let We=Hn(),we=Hn(),U;function J(x,$,M){Ke(x);const q=we.list();return q.length?q.forEach(ee=>ee(x,$,M)):console.error(x),Promise.reject(x)}function be(){return U&&l.value!==Ht?Promise.resolve():new Promise((x,$)=>{We.add([x,$])})}function Ke(x){return U||(U=!x,Ae(),We.list().forEach(([$,M])=>x?M(x):$()),We.reset()),x}function pt(x,$,M,q){const{scrollBehavior:ee}=e;if(!En||!ee)return Promise.resolve();const p=!M&&Jp(Ma(x.fullPath,0))||(q||!M)&&history.state&&history.state.scroll||null;return Xr().then(()=>ee(x,$,p)).then(f=>f&&Yp(f)).catch(f=>J(f,x,$))}const ze=x=>s.go(x);let wn;const An=new Set,on={currentRoute:l,listening:!0,addRoute:h,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:y,resolve:_,options:e,push:B,replace:V,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:a.add,afterEach:r.add,onError:we.add,isReady:be,install(x){x.component("RouterLink",Wl),x.component("RouterView",Kl),x.config.globalProperties.$router=on,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>he(l)}),En&&!wn&&l.value===Ht&&(wn=!0,B(s.location).catch(q=>{}));const $={};for(const q in Ht)Object.defineProperty($,q,{get:()=>l.value[q],enumerable:!0});x.provide(Pi,on),x.provide(ki,Gr($)),x.provide(Js,l);const M=x.unmount;An.add(x),x.unmount=function(){An.delete(x),An.size<1&&(u=Ht,Fe&&Fe(),Fe=null,l.value=Ht,wn=!1,U=!1),M()}}};function rt(x){return x.reduce(($,M)=>$.then(()=>Z(M)),Promise.resolve())}return on}function zl(e){return Bt(ki)}const kf="/assets/1.%E5%85%83%E7%9B%9B%E7%94%9F%E9%86%AB%E9%9B%BB%E5%AD%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-9xFeGSAQ.png",Tf="/assets/10.%E8%87%BA%E7%81%A3%E9%80%9A%E7%94%A8%E7%B4%A1%E7%B9%94%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CdeLvXht.png",Ff="/assets/11.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BJnJRvFw.png",Df="/assets/12.%E6%9B%9C%E5%A4%86%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CfuFUmZA.png",Mf="/assets/13.%E7%92%BD%E6%A8%82%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BfcxwUb8.jpg",Of="/assets/2.%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-1-yJDLic-k.png",$f="/assets/2.%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-2png-7lFIHrZ3.png",Rf="/assets/2.%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-ByhzaXWh.png",Lf="/assets/3.%E6%9C%89%E5%89%B5%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-B828-lTa.jpg",Uf="/assets/4.%E8%83%8C%E6%99%AF%E6%A8%A1%E5%BC%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BSO8uzd5.png",Vf="/assets/5.%E6%BB%BF%E6%8B%93%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-njoMMypA.png",jf="/assets/6.%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Cdkxl-XF.png",qf="/assets/7.%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C_Pkf7Lo.png",Hf="/assets/8.%E7%B6%B2%E9%9A%9B%E6%99%BA%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Bef9SKMx.png",Gf="/assets/9.%E8%81%9A%E5%85%B8%E8%B3%87%E8%A8%8A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-zJZJMLYO.png",Wf="/assets/1.%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Dp2Wk1o-.png",Kf="/assets/2.%E6%BC%AB%E8%A9%B1%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DMvnMvIv.png",zf="/assets/3.%E7%B6%B2%E9%9A%9B%E6%99%BA%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Bcb3RLDm.png",Xf="/assets/1.%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-LSKM4VTf.png",Yf="/assets/2.%E6%98%93%E6%99%A8%E6%99%BA%E8%83%BD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DXrkSFVF.png",Qf="/assets/3.%E5%89%B5%E9%80%A0%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-mXYyJrfN.jpg",Jf="/assets/4.%E7%B7%AF%E8%AC%99%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C7IkgBzV.jpg",Zf="/assets/5.%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-1-2pjvLg_h.png",em="/assets/5.%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-2-BOEM1OKm.png",tm="/assets/5.%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CNq8ZUs2.png",nm="/assets/1.%E8%89%BE%E5%88%A9%E6%80%9D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C-BlGqPS.png",om="/assets/2.%E5%9F%8E%E6%99%BA%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BBVyo3fc.png",sm="/assets/3.%E8%A8%8A%E9%80%A3%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CvUd7do9.png",im="/assets/4.%E9%9B%B2%E7%BE%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CuuvKn9q.jpg",am="/assets/5.%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CFNQLGCa.png",rm="/assets/1.%E5%87%8C%E6%9D%BE%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-D2OramOJ.jpg",lm="/assets/2.%E5%81%A5%E5%BA%B7%E7%9B%9F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BATS_Mfl.png",cm="/assets/3.%E9%96%8B%E6%BA%90%E6%99%BA%E9%80%A0%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8--2smA2WD.jpg",um="/assets/1.%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DQIWmrMy.png",dm="/assets/2.%E7%94%A8%E7%9B%8A%E7%B6%B2%E8%B7%AF%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-C3kv4f52.jpg",pm="/assets/3.%E5%9C%98%E8%96%A6%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BfN_6RRN.jpg",fm="/assets/4.%E9%BA%9F%E6%95%B8%E6%93%9A%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BBol0p0-.png",mm="/assets/1.%E5%82%91%E9%A8%B0%E6%99%BA%E8%83%BD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BWR4p00w.png",hm="/assets/2.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BJJ_8-fc.png",gm="/assets/3.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CXEFAQfF.png",wm="/assets/4.%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-xqf7BDsQ.png",Am="/assets/5.%E6%91%A9%E7%B5%A1%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-XyiCdXTK.png",bm="/assets/1.%E4%BA%9E%E5%8D%9A%E7%A6%8F%E7%88%BE%E6%91%A9%E6%B2%99%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-ZgTXyIAL.jpeg",ym="/assets/2.%E4%BA%9E%E5%8D%9A%E7%A6%8F%E7%88%BE%E6%91%A9%E6%B2%99%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-H6ba0Wbg.jpg",vm="/assets/3.%E7%A4%BE%E7%BE%A4%E6%B4%9E%E5%AF%9F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-9q6PFYDL.jpg",Em="/assets/4.%E5%87%8C%E5%85%B8%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CuRnKa1t.png",Im="/assets/5.%E5%89%B5%E9%80%A0%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CObuvDsI.png",_m="/assets/6.%E7%A9%8E%E8%AB%BE%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Tq3VKIvQ.jpg",xm="/assets/1.%E5%8D%A1%E8%8F%B2%E5%8D%A1%E9%87%91%E8%9E%8D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-CXDp8Hj_.png",Cm="/assets/2.%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-B_SoCn7j.png",Bm="/assets/3.%E8%99%8E%E6%99%BA%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-r6JZ6nhQ.png",Sm="/assets/4.%E5%87%B1%E9%88%BF%E8%A1%8C%E5%8B%95%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BzY0Fobg.png",Nm="/assets/5.%E8%82%86%E6%99%82%E8%B3%87%E8%A8%8A%E8%A8%AD%E8%A8%88%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BA9zUd8F.jpg",Pm="/assets/6.%E8%A9%AE%E9%80%9A%E9%9B%BB%E8%85%A6%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BRrKhH7b.png",km="/assets/7.%E7%9D%BF%E5%8A%9B%E6%99%BA%E8%83%BD%E9%81%8B%E5%8B%95%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BZ5qfzrv.png",Tm="/assets/8.%E6%95%B8%E8%BE%B0%E5%89%B5%E8%97%9D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DmYf6DXW.png",Fm="/assets/9.%E7%92%BD%E6%A8%82%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-DumMt9FJ.jpg",Dm="/assets/1.%E8%89%BE%E6%AF%94%E4%BA%92%E5%8B%95%E5%A8%9B%E6%A8%82%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-KtWd_cKk.png",Mm="/assets/2.%E8%8F%AF%E8%8B%93%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-BwMyLRCz.png",Om="/assets/3.%E6%A5%B5%E9%A2%A8%E9%9B%B2%E5%89%B5%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-B6mHFzc0.png",Ti=JSON.parse(`[{"id":"AI市場洞察-1","category":"AI市場洞察","sequence":1,"companyName":"大數軟體有限公司","companyShortName":"大數軟體","solutionName":"InfoMiner 即時輿情分析平台","manualUrl":"https://www.youtube.com/playlist?list=PLm7Cuso7baYX2M8IpDB0em_6i-rFPI5dH","imageFileName":"1.大數軟體有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/1.大數軟體有限公司.png","bannerFileExists":true,"solutionIntro":"InfoMiner 即時輿情監測與分析平台，涵蓋新聞、社群媒體、論壇、電視等 50 萬+頻道來源，十五分鐘內以 Line/Email 通報最新輿情，適用於公關、行銷、政府與企業決策者。\\n客戶可以透過雲端平台快速搜尋、監測社群媒體上的輿情大數據，亦可以透過公司強大的人工智慧技術，蒐集各式來源訊息。\\n藉由系統自建的人工智慧引擎強大的自然語言理解能力，可以快速精準分析網路輿情大數據，從雜亂的輿情數據中萃取出價值資訊，亦可透過Email、Line 就能獲得最即時的輿情精華！\\n\\n方案價格資訊：110208 含稅，特惠價 99186","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","contactPerson":"丘先生","companyPhone":"02-2585-5080","contactEmail":"david@largitdata.com","websiteUrl":"https://largitdata.com/","specialPrice":"99,186 元（含稅）"},{"id":"AI市場洞察-2","category":"AI市場洞察","sequence":2,"companyName":"用益網路科技股份有限公司","companyShortName":"用益網路科技","solutionName":"metabiz 企業 AI Agent 智腦方案","manualUrl":"","imageFileName":"2.用益網路科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/2.用益網路科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本方案專為新北微型企業與接案工作者設計，旨在以最低門檻實現官網 AI 自動化轉型。核心採用 metabiz AI-EDP 數據中台，搭載獨家「WP 一鍵同步技術」，能自動擷取 WordPress 官網文章與產品資訊並轉化為 AI 知識庫，達成「發文即訓練」之自動化流程，解決傳統 RAG 需人工整理資料的痛點。  運算層深度整合 台智雲 (TWSC) 國家級算力與 Google Cloud 台灣機房，確保企業數據 100% 落地台灣，符合最高資安規範。\\n\\n新北專屬優惠： 免收 NT$15,000 數據清洗設定費，。\\n受輔導企業僅需支付 8 萬元（補助後實付僅 4 萬），\\n即可擁有一尊 24 小時在線、精準理解繁體中文語境的企業 AI Agent 業務代理人。","companyIntro":"metabiz自成立以來，始終專注於【智慧科技 / 會員系統】領域，致力為客戶提供最具價值的創新解決方案。我們秉持「務實應用、互利共益」的核心理念，將深厚的技術底蘊與市場需求完美結合，打造出優質的牌會員管理系統。\\n\\n憑藉著專業的團隊與敏銳的市場洞察，metabiz不僅能快速回應產業變化，更以【客製化服務 / 高效能技術】作為核心優勢，成功協助眾多企業突破【數位轉型 / 營運效能】的瓶頸，贏得了廣大客戶的高度信賴與口碑。\\n\\n展望未來，metabiz將持續精進技術與服務品質，積極拓展【新市場或新技術】。我們期盼成為業界最具影響力的創新夥伴，用最實際的行動為客戶創造最大效益，攜手共創永續發展的美好未來。","contactPerson":"黃專員","companyPhone":"02-6604-0153","contactEmail":"service@metabiz.tw","websiteUrl":"https://metabiz.tw/","specialPrice":"80,000 元（含稅）"},{"id":"AI市場洞察-3","category":"AI市場洞察","sequence":3,"companyName":"團薦科技股份有限公司","companyShortName":"團薦科技","solutionName":"「探點TanDian Pro－AI智能選址平台」賦能新北方案","manualUrl":"https://youtu.be/WJSPGerH5os","imageFileName":"3.團薦科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/3.團薦科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"「探點 TanDian Pro－AI智能選址平台」為訂閱制AI選址決策工具，專為規劃全台（含離島）展店布局之實體連鎖品牌打造，特別適合5人以上開發（展店）團隊協作使用。平台整合多元商圈數據、人口與消費結構資料，並結合自研單店營收預測模型，使用者無須自行蒐集資料或訓練模型，即可透過Web介面即時完成商圈分析、營收試算與展店評估，大幅提升選址效率與決策精準度，降低試錯與人力成本。\\n\\n「全能方案」為季訂閱制，費用為新台幣108,000元整（未稅），一次性訂閱一年期即享93折優惠。方案內容包含：全台灣（含離島）範圍分析權限、最高3人同時上線使用，以及每月345次查詢額度（原為300次每月，通過新北市政府訂閱本特別方案，則每個月額外贈送15%的使用量），支援多點位快速比較與決策評估，適合作為企業年度展店規劃之核心決策工具。\\n\\n\\n「精簡方案」為半年訂閱制，費用為新台幣144,000元整（未稅），一次性訂閱一年期即享93折優惠。方案內容包含：全台灣（含離島）範圍分析權限、最高2人同時上線使用，以及每月184次查詢額度（原為160次每月，通過新北市政府訂閱本特別方案，則每個月額外贈送15%的使用量），支援多點位快速比較與決策評估，適合作為企業年度展店規劃之核心決策工具。\\n\\n「區域方案」採一年期起訂之年度訂閱制，適合以單一或特定縣市為拓展重點之品牌使用。方案提供指定區域縣市分析權限，並包含每月138次查詢額度（原為120次每月，通過新北市政府訂閱本特別方案，則每個月額外贈送15%的使用量），協助企業進行精準區域評估與展店規劃。\\n本方案之收費機制與既有月訂制不同，改採年度整體區域授權計價模式，依據所選擇之縣市數量與區域層級一次性核定全年費用，不再採逐月基礎費加區域加價累加方式計算。企業可依實際展店布局需求彈性選定授權範圍，於簽約時確認年度總價，合約期間內價格固定，有利於年度預算規劃與成本控管。\\n\\n新北專屬優惠：\\n1. 每個月多提供15%的查詢用量\\n2. 一次性訂閱一年享有93折優惠\\n3. 免費教育訓練一小時","companyIntro":"團薦科技成立於2023年，以AI技術打造智慧零售解決方案，專注於精準選址與門市營運分析。我們相信，選址不是終點，而是實體門市成功的起點；真正的價值，在於從展店決策到長期經營的全流程數據驅動管理。\\n「探點 TanDian Pro」整合商圈數據、人口結構與消費預測模型，協助零售品牌快速找到最佳地點、降低展店風險並提升營收表現。同時，進一步提供營運優化與門市體質分析，協助品牌打造可長可久的經營模式。\\n團薦不只是 SaaS（Software as a Service），更是 SaaS（Solution as a Service），以數據與洞察陪伴品牌實現永續成長。","contactPerson":"許先生","companyPhone":"0910241880","contactEmail":"service@tangent-plus.com","websiteUrl":"https://home.tangent-plus.com","specialPrice":"全能方案：108,000 元／季（未稅）\\n精簡方案：144,000 元／半年（未稅）\\n區域方案：128,340 元起／年（未稅）"},{"id":"AI市場洞察-4","category":"AI市場洞察","sequence":4,"companyName":"麟數據科技股份有限公司","companyShortName":"麟數據科技","solutionName":"Insighta{360°}","manualUrl":"","imageFileName":"4.麟數據科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI市場洞察/4.麟數據科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"本方案提供一套「基於發票數據的生成式AI問答商業分析系統」，將原本分散且高成本的數據採購、數據分析與數位行銷整合為單一訂閱服務，協助企業以更低門檻完成從市場洞察到精準行銷的決策閉環。系統內建經清洗與去識別化的全台抽樣發票資料，涵蓋多元通路與詳細品項，真實反映消費金額與購買行為。透過無程式碼介面，企業可依品牌、品項、通路與類別進行交叉分析，即時取得關鍵指標、客群輪廓與趨勢變化。同時，AI數據分析助理支援自然語言提問，整合企業第一方資料與第三方發票數據，自動生成分析報告與市場洞察。進一步，系統可將高潛力消費族群直接轉化為精準行銷受眾包，一鍵串接Meta與Google廣告平台，提升廣告投放效率與轉換成效，讓數據從分析直接落地應用於商業成長。\\n\\n新北專屬優惠：\\n1.年訂閱享原價 92 折優惠\\n2.免費教育訓練 1 小時","companyIntro":"本公司成立於2016年，專注於AI數據科技（AI Data Technology），致力於透過先進數據技術與人工智慧，協助企業提升數據應用能力與決策效率。公司打造多元創新的SaaS平台，核心能力涵蓋數據蒐集、清洗、治理至應用的完整流程，協助企業將數據轉化為可行的商業洞察。\\n\\n透過數據整合與AI分析能力，我們協助品牌建立以數據為核心的營運模式，並打造自有數據產品與解決方案（如 Insighta360°），應用於CRM、精準行銷、廣告投放與消費者行為分析等場景，幫助企業即時掌握市場動態並提升決策效率。\\n\\n目前服務產業橫跨零售、電商、食品、汽車、金融等領域，協助企業深化顧客理解、優化行銷策略，並以更高效率與更低成本創造商業價值。\\n\\n長期目標為打造企業級數據中台與AI應用生態，促進數據資產化與跨場域應用。","contactPerson":"林小姐","companyPhone":"(02)2394-8800 分機103","contactEmail":"thea.lin@lndata.com","websiteUrl":"https://www.lndata.com","specialPrice":"275,988 元／年（未稅）"},{"id":"AI企業營運管理-1","category":"AI企業營運管理","sequence":1,"companyName":"元盛生醫電子股份有限公司","companyShortName":"元盛生醫電子","solutionName":"AI PIF生成與Agent管理系統","manualUrl":"https://www.youtube.com/watch?v=ehW7rAwDSVM","imageFileName":"1.元盛生醫電子股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/1.元盛生醫電子股份有限公司.png","bannerFileExists":true,"solutionIntro":"【AI PIF生成與Agent管理系統】\\n【AI 輕量版】\\n獨家AI生成功能及相關服務\\nAI智能分類關鍵資料\\nAI內容差異比對（從包裝到原料）\\nAI成分風險分析及法規檢測\\nAI生成PIF報告\\n權威SA專業簽署（市值約 NT$12,000/份）\\n法規資料維護與諮詢支援\\n一年保固\\n•同配方更換容量或包裝，不另收費\\n•合約期間法規變動造成PIF更動，不另收費\\n\\n方案價格說明：單次購買5份PIF報告(含SA簽核) NT$153,450(未稅)\\n新北專屬優惠：贈送一份PIF報告(含SA簽核) 平均一份NT$25,575(未稅)\\n\\n【AI 標準版】\\n獨家AI生成功能及相關服務\\nAI智能分類關鍵資料\\nAI內容差異比對（從包裝到原料）\\nAI成分風險分析及法規檢測\\nAI生成PIF報告\\n權威SA專業簽署（市值約 NT$12,000/份）\\n法規資料維護與諮詢支援\\n一年保固\\n同配方更換容量或包裝，不另收費\\n合約期間法規變動造成PIF更動，不另收費\\n\\n方案價格說明：單次購買10份PIF報告(含SA簽核) NT$240,000(未稅)\\n新北專屬優惠：贈送二份PIF報告 平均一份NT$20,000(未稅)\\n\\n【AI 商務版】\\n獨家AI生成功能及相關服務\\nAI智能分類關鍵資料\\nAI內容差異比對（從包裝到原料）\\nAI成分風險分析及法規檢測\\nAI生成PIF報告\\n權威SA專業簽署（市值約 NT$12,000/份）\\n法規資料維護與諮詢支援\\n一年保固\\n同配方更換容量或包裝，不另收費\\n合約期間法規變動造成PIF更動，不另收費\\n\\n新北專屬優惠：單次購買40份以上PIF報告 NT$ 專屬優惠價，請聯絡廠商報價。","companyIntro":"全球第一個 AI 合規平台，採用NVIDIA BioNeMo技術，從原料到報告、從法規風險到數位追蹤，一次完成，全程精準高效!我們致力於為美妝產業提供前沿的人工智能解決方案，以重新定義保養品的數位使用體驗。我們團隊擁有專業的AI專家和技術專家，致力於整合創新科技，將科學、安全和效率完美結合，dermaGPT提供安全透明的成分資訊與配方功效的驗證。我們以AI驅動的化妝品安全評估系統（CPSR）利用強大的算法和累積全球千萬筆的資料庫，迅速、準確地評估化妝品成分的安全性。我們的目標是通過技術創新，幫助企業確保其產品遵守最嚴格的法規要求，同時提升消費者對產品功效與安全的信心。","contactPerson":"林副總/先生","companyPhone":"02-25076729#66","contactEmail":"johnny@vescir.com","websiteUrl":"https://dermagpt.com/hant/home/","specialPrice":"AI 輕量版：153,450 元（未稅）\\nAI 標準版：240,000 元（未稅）\\nAI 商務版 ：請連絡廠商報價"},{"id":"AI企業營運管理-2","category":"AI企業營運管理","sequence":2,"companyName":"台聚管理顧問股份有限公司","companyShortName":"台聚管理顧問","solutionName":"IVA/PPE 智能影像分析系統","manualUrl":"","imageFileName":"2.台聚管理顧問股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司.png","bannerFileExists":true,"solutionIntro":"【IVA/PPE標準模型】\\n導入已完成訓練之人員裝備/異常行為辨識模型，並配合現場需求進行系統整合以及模型調教。\\n\\n新北專屬優惠：\\n1.免費配合現場需求勘查，並提供AI模型部屬規劃建議。\\n2.配合廠區資訊安全要求，提供資安設備與架構規劃建議。\\n3.針對專案合作範圍，提供長期(永久)模型更新與維護服務。\\n\\n【IVA/PPE客製化模組】\\n根據客戶應用需求，客製化資訊蒐集和模型訓練。\\n\\n新北專屬優惠：\\n1.免費配合現場需求勘查，並提供AI模型部屬規劃建議。\\n2.配合廠區資訊安全要求，提供資安設備與架構規劃建議。\\n3.針對專案合作範圍，提供長期(永久)模型更新與維護服務。","companyIntro":"台聚集團為因應多元化經營及未來組織發展需要，於九十年三月十六日成立台聚管理顧問公司，統籌提供集團各關係企業之人資、員工事務、財務、會計、資訊、採購、關務、授信、稽核、 法務與股務等共同性事務之資源整合與規劃管理服務，俾使各公司更能專注在產品經營與開發，提升營運整體綜效。","contactPerson":"周先生","companyPhone":"(02)8751-6888 #2809","contactEmail":"ryanchou@usig.com","websiteUrl":"","specialPrice":"IVA/PPE標準模型：40000 元（未稅）/組(買斷)\\nIVA/PPE客製化模組：60000 元（未稅）/組(買斷)"},{"id":"AI企業營運管理-3","category":"AI企業營運管理","sequence":3,"companyName":"有創科技股份有限公司","companyShortName":"有創科技","solutionName":"空品平台系統","manualUrl":"https://drive.google.com/file/d/1Up1UNXJuX9bDhiXq3YGWMfaGceJ4YrWk/view?usp=sharing","imageFileName":"3.有創科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/3.有創科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本系統採用異常偵測與趨勢分析模型，針對空氣品質感測數據（PM2.5、TVOC、CO2、HCHO 等）進行長時間序列分析，透過歷史數據學習環境變化模式，輔助判斷異常波動與潛在風險，並支援即時預警與管理決策應用。配合超標、觸發警報、復歸等設備設定與平台呈現邏輯，完整導入具備標準化管理之工廠或營業場所。並可透過分群方式，智慧排程進行新風機的遠端連動與開關控制，大幅降低手動操作之時間成本。\\n\\n新北專屬優惠：\\n新北企業1年到期後續租，平台租用再享折扣價$24,000/年(含稅) (原價36,000/年)","companyIntro":"有創公司具備大型導覽、藍芽定位、ERP等平台設計能力，且獲得數發部人工智慧行業應用能力登錄證書。並且承接許多政府單位、民間企業等開發專案，具備豐富系統開發經驗。","contactPerson":"張先生","companyPhone":"0915-277710","contactEmail":"jjchangchun@hotmail.com","websiteUrl":"","specialPrice":"80,000 元／組（含稅）"},{"id":"AI企業營運管理-4","category":"AI企業營運管理","sequence":4,"companyName":"背景模式股份有限公司","companyShortName":"背景模式","solutionName":"APIS 臨場服務員工健康管理系統＿新北優惠方案","manualUrl":"","imageFileName":"4.背景模式股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/4.背景模式股份有限公司.png","bannerFileExists":true,"solutionIntro":"在勞動部法規趨嚴與 ESG 浪潮下，「APIS 臨場服務員工健康管理系統」是企業落實職業安全衛生法規的高效利器。本系統深度整合四大保護計畫（過勞、不法侵害、人因工程及母性保護），並將繁瑣的員工健檢資料數位化，自動執行視覺化風險分級（紅、黃、綠燈），讓職護與人資能精準鎖定高風險個案進行追蹤，顯著提升 20% 以上的管理效率。\\n\\n系統具備強大的報表自動化功能，一鍵即可生成符合法規檢查要求的統計紀錄，免除人工製表的重複作業與錯誤風險。\\n\\n方案價格說明：\\n微型企業版< 300 人公司：$49,900元 /年 \\n成長企業版 300 - 1000 人：$59,900元 /年 \\n旗艦/管顧版 > 1000 人：$59,900元+員工人數*30=報價  \\n備註： \\n1. 每套會有管理權限5組免費，新增一組$5000元/年 \\n2. 人頭加購費每增加一人$30元 /年。 （以上皆未稅）        \\n\\n新北專屬優惠：\\n1. 任何版本基本費：每年一律折扣10,000元。\\n2. 人頭加購費：每增加一人20/年。\\n3. 免費教育訓練乙次\\n4. 免費試用期兩週","companyIntro":"在數位轉型的浪潮中，我們致力於成為企業最可靠的數位轉型推手。我們協助各產業開發量身設計的數位化工具，將複雜的流程化繁為簡，實質提升企業及產業效率升級。\\n而我們更在「企業健康職場」領域深耕多年。憑藉著與中部專業臨場服務單位長達一年以上的共同研發，我們針對臨場服務開發出專屬的數位化平台，大幅增強企業對員工健康照護的關懷深度。目前，這套系統已成功導入上市公司與中部指標型醫療院所，透過精準的數據管理，讓健康服務更具感溫與效率。","contactPerson":"郭培聖 總監","companyPhone":"0961117336","contactEmail":"jeffrey.kuo@bgmotion.com.tw","websiteUrl":"https://bgmotion.com.tw/","specialPrice":"微型企業版：49,900元 ／年 （未稅）\\n成長企業版 ：59,900元／年 （未稅）\\n旗艦／管顧版：59,900元＋員工人數*30＝報價（未稅）"},{"id":"AI企業營運管理-5","category":"AI企業營運管理","sequence":5,"companyName":"滿拓科技股份有限公司","companyShortName":"滿拓科技","solutionName":"Document Expert (企業級AI文件智能檢索問答平台)","manualUrl":"https://drive.google.com/drive/folders/1xB44Zdbvee4Cr87iubEbNK9YyrSVqeGL?usp=sharing","imageFileName":"5.滿拓科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/5.滿拓科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"一、 核心檢索與智能問答\\n•        企業級 RAG 增強架構：內建高精準度檢索增強生成(RAG)系統，確保AI不僅是說話，更是基於企業內部實體知識庫進行回覆，有效消除模型幻覺。\\n•        AI Agent外部聯網與協作：升級版搭載智能代理 (AI Agent)，除內部資料外，更可即時檢索外部資訊，打破資訊孤島，實現內外知識的完美融合。\\n•        可溯源的實事求查：所有回答均附帶原始文件參照連結與引用來源，方便使用者一鍵回溯查核，確保資訊的來源性與真實性。\\n二、 強大的文件解析能力\\n•        多元格式全面相容：完美相容 PDF、Word (.docx)、HTML、Markdown等多種主流格式，讓零散的文件資產即刻轉化為可利用的數據價值。\\n•        尖端圖文辨識技術：結合光學字元辨識(OCR)與視覺語言模型(VLM)，能精準讀取複雜的掃描檔、圖表、表格與圖片內容，實現真正意義上的全文本數位化。\\n三、 嚴謹的企業級管理\\n•        精細化權限控管：支援完善的角色權限設定，確保敏感資料僅限授權人員存取，符合企業資安與合規性最高標準。\\n•        多維度專案管理功能：可依據組織編制（如財務、研發、法務）或查詢類型建立獨立專案空間，讓知識分類井然有序，優化團隊協作流程。\\n\\n方案價格說明：\\n短期轉型衝刺NT$90,000 (6 個月、10 個使用者) （未稅）\\n年度數位升級NT$168,000 (12 個月、10 個使用者)（未稅）\\n\\n新北專屬優惠：\\n•免費教育訓練：凡參與本輔導計畫之企業，贈送一場「AI 實戰落地：知識即戰力，極速驅動辦公效能」線上或實體AI課程。\\n•無痛升級服務：為降低企業從雲端SaaS轉向私有化部署的門檻，本方案提供「原廠回饋折抵」機制。企業於本方案合約期間所支付之SaaS服務費用，未來兩年內可申請轉為 Document Expert或FinetuneX落地部署之建置抵用金；未來導入落地建置時，最高折抵金額上限為該專案「軟體平台授權費用」之10%","companyIntro":"滿拓科技致力於提供領先市場的「落地式 GenAI」一站式服務。憑藉獨家RAG技術與具備任務執行能力的 AI Agent，並結合高度自動化的 LLM 訓練流程，我們協助企業在確保資料隱私的前提下，快速建構專屬領域AI應用，實現從「資訊檢索」到「自主協作」的AI數位轉型。\\n\\n\\n核心產品：\\n•Document Expert：企業級AI文件智能檢索問答平台。結合 RAG 與 AI Agent 技術，除精準檢索內部資料外，更具備自主查詢外部資訊與自動化報告協作能力，能夠串接多方資訊並產出成果，直擊企業辦公痛點。\\n•FinetuneX：專為模型精煉設計的工具。透過Data Expert進行高品質數據擴增與精煉，並結合Finetune Expert平台，協助企業打造最貼合業務情境的專屬AI模型。","contactPerson":"高小姐/ 專案經理","companyPhone":"02-6604-3279 #207","contactEmail":"emma.kao@deepmentor.ai","websiteUrl":"https://www.deepmentor.ai/","specialPrice":"短期轉型衝刺：90,000 元（未稅）\\n年度數位升級：168,000 元（未稅）"},{"id":"AI企業營運管理-6","category":"AI企業營運管理","sequence":6,"companyName":"睿思創新股份有限公司","companyShortName":"睿思創新","solutionName":"CROSSBOT AI Agent Platform Basic 基礎版 (入門)","manualUrl":"https://youtu.be/SZW50d7qaKs?si=gngIw_T14gnla4O4","imageFileName":"6.睿思創新股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/6.睿思創新股份有限公司.png","bannerFileExists":true,"solutionIntro":"採用 CROSSBOT AI Agent Platform – Basic 基礎版 AI 平台服務，以標準化模組設計，提供組織可即時啟用之 AI 應用功能，無需進行客製化系統開發，即可快速導入使用。\\n方案包含模組：\\nBasic 基礎版包含以下核心模組：\\n1. 智能客服(基礎模組)\\n• 提供自然語言互動式 AI 客服服務\\n• 支援 LINE 與 Web 對話入口\\n• 可即時回應常見問題(FAQ)、服務說明與流程查詢\\n• 適用於客服諮詢量高且內容標準化之應用場景\\n2. AI KM(小型知識庫模組)\\n• 支援文件上傳與基礎知識管理(如 SOP、說明文件)\\n• 將文件內容轉換為 AI 可查詢之知識庫\\n• 透過自然語言即可查詢文件重點與相關說明\\n• 適合部門或單位層級之知識管理需求\\n\\n方案價格說明：平台服務費用：NT$ 250,000/年 （含稅）(年訂閱制)\\n新北專屬優惠：\\n1. ASUS GX10 AI 伺服器(選購)加購價格：+NT$ 150,000（含稅）\\n(適用於地端部署、資料不外流或對資安有高度需求之場域)\\n2. 平台+硬體組合優惠價\\n組合價(含 ASUS GX10)：NT$ 400,000/年（含稅）\\n(組合方案可同時滿足 AI 平台服務與地端運算需求,適合有未來擴充 AI 應用或治理需求之單位。)","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","contactPerson":"陳先生","companyPhone":"02-77297007","contactEmail":"hanchen@reas.com.tw","websiteUrl":"https://www.reas.com.tw/","specialPrice":"250,000 元／年（含稅）"},{"id":"AI企業營運管理-7","category":"AI企業營運管理","sequence":7,"companyName":"睿思創新股份有限公司","companyShortName":"睿思創新","solutionName":"CROSSBOT AI Agent Platform – Pro 專業版","manualUrl":"https://youtu.be/SZW50d7qaKs?si=gngIw_T14gnla4O4","imageFileName":"7.睿思創新股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/7.睿思創新股份有限公司.png","bannerFileExists":true,"solutionIntro":"為針對已完成 AI 入門導入、並希望進一步擴大應用範圍之組織所設計之進階平台方案。\\n提供更完整的 AI Agent 能力、進階知識管理與多角色治理機制，支援跨部門、多使用者與較高使用量之實務場景。\\n方案包含模組：\\nPro專業版包含以下核心模組(含Basic全部功能)：\\n1. 智能客服\\n2. AI KM\\n3. AI Agent 任務流程模組\\n4. AI BI (數據分析)\\n\\n方案價格說明：NT$500,000/年（含稅） (年訂閱制)\\n新北專屬優惠：\\n1. ASUS GX10 AI 伺服器(選購)加購價格：+ NT$ 150,000（含稅）\\n(適用於地端部署、資料不外流或對資安有高度需求之場域)\\n2. 平台+硬體組合優惠價\\n組合價(含 ASUS GX10)：NT$ 650,000/年（含稅）\\n(組合方案可同時滿足 AI 平台服務與地端運算需求,適合有未來擴充 AI 應用或治理需求之單位。)","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","contactPerson":"陳先生","companyPhone":"02-77297008","contactEmail":"hanchen@reas.com.tw","websiteUrl":"https://www.reas.com.tw/","specialPrice":"500,000 元／年（含稅）"},{"id":"AI企業營運管理-8","category":"AI企業營運管理","sequence":8,"companyName":"網際智慧股份有限公司","companyShortName":"網際智慧","solutionName":"快合規 – AI廣告違規風險檢核與修正建議服務平台 (https://xcomply.ai)","manualUrl":"https://www.xcomply.ai/business-intro","imageFileName":"8.網際智慧股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/8.網際智慧股份有限公司.png","bannerFileExists":true,"solutionIntro":"快合規 - 企業版 加強包 A 方案：\\n\\n① 第三代 AI 精準圖文檢核 150 次\\n② 法遵/合規審查專人諮詢 6 次\\n③ 登入帳號 不限（行銷、法遵、主管）\\n④ 可檢核文字、圖片、PDF文件\\n⑤ 提供廣告違規風險檢核報告\\n⑥ 提供圖文廣告違規風險標示（含風險段落、對應法規、相關裁罰案例、裁罰金額分析）\\n⑦ 提供合規調整建議\\n⑧ 額外提供Chrome外掛方便網頁快速檢核\\n⑨ 智慧審查及意見加註功能（行銷->法遵->主管）\\n⑩ 版本管理、完整審查歷程記錄\\n⑪ 提供自訂規則及關鍵字功能\\n⑫ 每月更新法規及裁罰案例\\n⑬ 支援食品（含健康食品）、化粧品、寵物食品、醫美、類菸品等產業\\n⑭ 使用有效期一年\\n\\n新北專屬優惠：\\n免費教育訓練","companyIntro":"網際智慧（IQT.AI）致力於建構「可信任、有溫度」的 AI Agent 體系，橫跨文字輸入、聲音表達、影音創作與法遵合規四大領域。我們屢獲金鼎獎、經濟部智慧創新大賞 Best AI Awards、台灣人工智慧協會 AI Award Best Solutions、數位發展部數位產業署－AI應用鬥智賽、AI TAIWAN 創新商務獎等頂尖殊榮。旗下主力包含：①長期穩居市佔領先的－text.tw 自然輸入法、②賦予 AI 擬真人聲的－VoAI.AI 絕好聲創，③確保企業治理與合規的－XComply.AI快合規。網際智慧不只是技術專家，更是企業數位轉型最值得信賴的 AI 夥伴！","contactPerson":"羅經理","companyPhone":"02-77087068","contactEmail":"sales@iqt.ai","websiteUrl":"www.iqt.ai","specialPrice":"80,000 元／年（含稅）"},{"id":"AI企業營運管理-9","category":"AI企業營運管理","sequence":9,"companyName":"聚典資訊股份有限公司","companyShortName":"聚典資訊","solutionName":"聚典資訊ｘ新北企業限定優惠：AI智慧轉型零門檻啟動方案","manualUrl":"","imageFileName":"9.聚典資訊股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/9.聚典資訊股份有限公司.png","bannerFileExists":true,"solutionIntro":"為協助新北市大中小企業啟動智慧轉型，本公司推出專屬優惠方案，涵蓋智慧零售與智慧製造應用。\\n\\n我們提供免費顧問諮詢，協助企業盤點流程現況、資料與營運痛點，並進行技術可行性與應用的建議，作為後續是否正式啟動轉型之決策參考。\\n\\n企業可無壓力理解 AI、ML 與大數據如何實際應用於自身場域，降低試錯風險，確保後續投入方向清楚且具效益。\\n\\n方案價格說明：需求訪談+功能規劃+技術可行性評估 原價80 萬~500 萬元\\n新北專屬優惠：\\n免費需求訪談+功能規劃+技術可行性評估。\\n另外數據盤點、系統架構、各項功能建置之專案報價，可依項目折扣，總折扣最高22萬。","companyIntro":"聚典資訊是數據價值的重述者。創立於 2019 年 3 月，由頂尖工程與專業經理人組成。深受超過300家客戶信賴，榮獲20多項獎項肯定。並擁有 ISO27001 資訊安全管理認證，以及數位發展部之 AI 技術服務能量登錄官方認證。\\n我們整合AI、AIoT與系統開發，為製造業與零售業提供智慧解決方案，包含智能生產線、ESG轉型、AI分群行銷、智能客服，以及客製化方案。導入聚典的AI解決方案，您的企業將在資料科學的支持下持續增長。","contactPerson":"卓先生","companyPhone":"(02)2785-3858","contactEmail":"evanjaw@retailingdata.com.tw","websiteUrl":"https://retailingdata.com.tw/","specialPrice":"依專案報價， 平均80 萬~500 萬（含稅）"},{"id":"AI企業營運管理-10","category":"AI企業營運管理","sequence":10,"companyName":"臺灣通用紡織科技股份有限公司","companyShortName":"臺灣通用紡織科技","solutionName":"TextileCloud™ - AI 驅動的企業級材料管理解決方案-Annual Package -Basic","manualUrl":"https://drive.google.com/file/d/1TWcRUNjPF4n6duZhjZLpeNjXMdtH4vzs/view?usp=sharing","imageFileName":"10.臺灣通用紡織科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/10.臺灣通用紡織科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"TextileCloud 協助紡織業者、服裝品牌與供應商高效管理與應用布料數據。其服務以AI與雲端為核心，納入高效的數位產品建立（DPC）流程，將實體布料轉換為可用於2D／3D設計的數位素材，集中建立於雲端布料資料平台（TextileCloud™），為企業強化數位資產管理（DAM）的核心價值\\n\\n服務項目：\\n1. 500片布料掃描，AI生成布料物理參數與擬真布料產品圖\\n2. 3組使用者帳號、1組內部工作團隊、1組外部協作帳號\\n3. 私有&公開布料資料庫，無限次數分享、即時發送需求\\n4. 3D Viewer及時預覽功能 (提供3組+球體虛擬模型)\\n5. 資料庫內支援文字語意搜尋，以圖搜圖功能","companyIntro":"Frontier 以 TextileCloud 為核心產品，提供一站式數位布料管理解決方案，整合 2D / 3D 布料影像、規格資訊與永續數據。平台涵蓋數位資產管理（DAM）、數位產品建置（DPC）流程與永續數據模組，協助企業集中管理布料資料、快速生成具物理參數與 AI 擬真效果的 3D Material，並可對接主流 3D 設計軟體。同時內建 LCA 架構，提供碳排與水耗等環境指標，支援 DPP 與 ESG 需求。相較傳統流程，無需額外硬體投資，可降低樣品寄送成本、縮短開發時程，強化品牌與供應鏈間的即時協作效率。","contactPerson":"陳映慈經理","companyPhone":"02-27528855","contactEmail":"clara@frontier.cool","websiteUrl":"https://www.frontier.cool/","specialPrice":"177,199 元／年 (含稅)"},{"id":"AI企業營運管理-11","category":"AI企業營運管理","sequence":11,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"WinChat－各產業應用的大語言模型應用平台","manualUrl":"https://drive.google.com/file/d/1R0B9quHfH9tY5psOAgWD_NX0m2L3z7fx/view?usp=drive_link","imageFileName":"11.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/11.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"WinChat為慧穩科技融合式AI解決方案WinHub.AI旗下之通用平台之一，係以AI大語言模型（LLM）為核心，結合深度文件理解與檢索增強生成技術（RAG）之對話式問答平台。\\n平台可於理解使用者問題後，自大量非結構化文件中精準擷取相關內容，並提供具引用來源之回覆結果。\\nWinChat 支援私有環境部署，無須外部雲端運算與儲存資源，適用於多元產業情境，可有效協助組織整合內部知識文件、強化作業效率並提升對外服務品質。\\n\\n系統特色說明：\\n一、深度文件理解與精準檢索\\n二、免程式碼操作介面\\n三、專屬且獨立的知識庫管理\\n四、降低生成幻覺風險\\n五、系統整合與私有化部署\\n\\n功能模組說明：\\n一、專案管理\\n二、知識庫管理\\n三、聊天助理設定\\n四、問答對話應用\\n\\n方案價格說明：\\n方案一、永久買斷方案  \\n一、 標準定價(不含電腦系統)：NT$ 600,000（未稅）\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。  \\n方案二、年授權  \\n一、標準定價(不含電腦系統)：NT$ 200,000（未稅）\\n二、模式說明：以年為單位支付訂閱費。訂閱期間即為保固期，享有免費軟體更新服務。\\n\\n新北專屬優惠：\\n方案一、永久買斷方案\\n一、 優惠折扣:9折\\n二、 首年保障：內含首年保固與維護服務。保固期限後，維護費用依客戶實際需求另計。\\n三、 服務內容:\\n1. 產品保固：首年硬體/軟體保固。\\n2. 版本更新：首年享有週期半年一次的系統更新\\n3. 技術諮詢：8x5 (工作日) 專家諮詢。\\n\\n方案二、年授權\\n一、優惠折扣:9折\\n二、服務內容:\\n1.產品保固：訂閱期間內全程享有保固服務。\\n2.版本更新：訂閱期間持續享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525580","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"永久買斷方案：600,000 元（未稅）\\n年授權：200,000 元／年（未稅）"},{"id":"AI企業營運管理-12","category":"AI企業營運管理","sequence":12,"companyName":"曜夆科技股份有限公司","companyShortName":"曜夆科技","solutionName":"AI對話型服務整合方案(產品名稱：DocInsight AI)","manualUrl":"","imageFileName":"12.曜夆科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/12.曜夆科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"讀懂你的文件內容，更懂使用者真正想問的問題。我們協助企業將現有網站內容、文件與知識庫整合為可運用的自然對話型服務。透過導入企業內部文件、FAQ、作業規範與公告內容，由 AI 協助即時回應使用者提問，並可依需求部署於官網、LINE 或內部系統，整體系統由後台統一管理，確保資料來源可控、內容可更新。\\n本方案使用 RAG檢索增強生成技術的 AI 技術，協助理解既有網站與文件內容，並將使用者以自然語言提出的問題，準確對應至相關資訊，讓查詢流程更有效率，也為後續服務建立清楚的基礎。\\n\\n新北專屬優惠：\\n本方案為整合型的解決方案，包括需求訪談、客製化導入及AI功能的月租流量服務。AI對話型服務整合方案：\\n-        設定費：$20000（未稅） (含基本教育訓練及客製化需求訪談)\\n-        月租費 ：合約24個月，可用信用卡扣款方式\\na.        網頁整合Web $14500/月（未稅）\\nb.        通訊軟體LINE整合 $ 8000/月（未稅）\\nc.        雙平台版本 21000/月（未稅）\\n客戶可以從a、b、c方案擇一進行佈建，針對新北專案以租約24個月並使用信用卡訂閱者，每月再額外多送AI使用量300萬TOKEN並減免設定費50% ($10,000)。\\n請注意：TOKEN使用量/月，會隨客戶專案的使用變動，或許會產生額外的費用(可設上限)。","companyIntro":"直接驅動營收成長與營運效率提升。月租 5,000 元起，免高額建置費，最快數日導入、模組架構、彈性擴充。由 CGSI（中華寰宇整合）提供整合規劃、客製開發與企業級部署，確保穩定上線與長期營運，轉化企業既有圖文資料為「可成交、可預測、可優化」的 AI 生產力系統：\\n．AI 商機成交助理：整合官網、LINE、電子表單訊息，LLM判讀客戶意圖與成交潛力分級，提供預期方案建議並可生成業務人員跟進摘要，打造24 小時接單機制\\n．AI CRM／ERP／MES：訂單自動轉工單，串聯庫存與產能，提供交期預估與異常預警，並整合銷售與產線數據，實現跨部門資訊整合；具備近零硬體建置成本、無須額外學習曲線與AI數據分析能力\\n\\n立即行動：留下您的需求，享免費 AI 導入諮詢，快速導入最適解決方案。","contactPerson":"王副理","companyPhone":"02-55994575","contactEmail":"stanwang@ch-si.com","websiteUrl":"www.ch-si.com","specialPrice":"21,000 元／月（未稅）"},{"id":"AI企業營運管理-13","category":"AI企業營運管理","sequence":13,"companyName":"璽樂科技股份有限公司","companyShortName":"璽樂科技","solutionName":"AI影片生成與教育訓練","manualUrl":"https://youtu.be/8hTh4_Y7W7w","imageFileName":"13.璽樂科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI企業營運管理/13.璽樂科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"AI影片生成×教育訓練，將「內容製作、受訓確認、門禁通行」一次整合。系統可依施工工項說明與提示詞，自動整理重點、注意事項與安全提醒，一鍵生成教育訓練影片，內容口徑一致、版本可快速更新，大幅降低製作與維護成本。訓練完成後，系統自動留存紀錄並與門禁權限連動：只有完成教育訓練並確認者，才會開通掃臉通行；未完成教育訓練者不可通行，確保規範真正落地。同時支援上傳人員照片建立辨識名單、上傳聲音統一講解，提升現場適配性與管理效率，讓管理者清楚掌握受訓進度、追蹤與稽核更便利，打造可驗證、可控管的安全教育流程。\\n\\n方案價格說明：\\nFACE AIO_55吋+人員管制組（人臉辨識機+閘機）NT 139,000（未稅）\\n•影片單次製作（按支計費） NT$1,500／支（48 秒）（未稅） \\n•含：影片生成＋下載（依系統流程） \\n•超過48's影片製作,另行計費\\n\\n新北專屬優惠：\\n•維護內容：\\n1.系統功能異常修復（非人為/非第三方因素）\\n2.服務可用性與例行更新（不影響既有資料）\\n3.硬體設備保固1年（非人為/非第三方因素）\\n•支援回覆：\\n1.一般問題：1 個工作日內回覆\\n2.重大故障（無法分析/無法輸出）：4 小時內回覆（工作時段：週一至週五09：00～18：00,不含國定假日）","companyIntro":"璽樂科技專注營建與公共工程場域，提供結合 AI 影像、IoT 感測與雲端管理的一站式智慧工安平台。系統涵蓋人員出入、危險區域管制、環境監測、異常警示與影像留存等功能，以模組化設計對應不同規模工地，並支援多工地雲端監控與權限管理，讓總公司可即時掌握各工地風險與狀態，同時自動產出符合金安獎、金質獎與勞檢需求的報表，降低人工整理成本。","contactPerson":"廖先生/李先生","companyPhone":"02-87515266","contactEmail":"james.liao@i-daka.com / iglee@i-daka.com","websiteUrl":"https://idaka.io/","specialPrice":"FACE AIO_55吋+人員管制組：139,000 元／組（未稅）\\n影片單次製作：1,500 元／支（未稅）\\n超過48's影片製作：請連絡廠商報價"},{"id":"AI助理-1","category":"AI助理","sequence":1,"companyName":"大數軟體有限公司","companyShortName":"大數軟體","solutionName":"RAGi 企業 AI 決策平台","manualUrl":"https://drive.google.com/file/d/1e4oXsbnAlmzFEUWnGBP1UHY-pW1oXoKb/view?usp=sharing","imageFileName":"1.大數軟體有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI助理/1.大數軟體有限公司.png","bannerFileExists":true,"solutionIntro":"RAGi 是一套企業級 AI 檢索增強生成（RAG）引擎，將大型語言模型與企業內部知識庫結合，支援地端或雲端部署，資料 100% 不外流，適用於金融、製造、政府等需要安全智慧化知識管理的場景。\\n\\nRAGi支援文字、語音、圖像、影片等多模態內容輸入，以及各種常見檔案格式和資料來源。企業可輕鬆整合內部零散數據，打造一座豐富的知識庫。而RAGi內建的混合搜尋引擎，更是結合了關鍵字搜尋和語義理解技術等混合搜尋技術，讓使用者能夠快速搜尋到最準確的內容，有效降低幻覺，大幅強化大型語言模型的問答能力。\\n\\n新北專屬優惠：\\n導入與教育訓練","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","contactPerson":"丘先生","companyPhone":"02-2585-5080","contactEmail":"david@largitdata.com","websiteUrl":"https://largitdata.com/","specialPrice":"地端：1,973,970 元（含稅）\\n雲端：121,335 元（三個月）（含稅）"},{"id":"AI助理-2","category":"AI助理","sequence":2,"companyName":"易晨智能股份有限公司","companyShortName":"易晨智能","solutionName":"語音辨識語言學習及逐字稿","manualUrl":"https://www.youtube.com/watch?v=7jdt9iYjz1c","imageFileName":"2.易晨智能股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI助理/2.易晨智能股份有限公司.png","bannerFileExists":true,"solutionIntro":"【語音辨識語言學習】\\nEZTalking AI評分自主研發「語音辨識」、「發音檢測」，精準分析 word 以及 phone 音標的分數，自主研發專利技術。AI口說學習平臺，手機APP、電腦網頁都可使用，學生可隨時隨地練習，當場練習當場評分，即時性高反應速度快，可立即重複練習仿真雙語環境。AI 評分系統可立即讓學生看到練習的分數，同時有學習紀錄完整的學習歷程。「語音辨識」演算法能將聲音辨識出文字，「發音檢測」能將聲音與文字進行精準計算。\\n\\n方案價格說明：價格4800(含稅)，一個帳號一年費用\\n服務內容：提供AI 語音學習平台，內含英文學習教材\\n\\n【會議記錄暨醫療交班紀錄逐字稿】\\n•  高精準醫療語音辨識：內建專業醫學詞庫，能精準識別艱澀的專有名詞、藥名及縮寫。在護理交班時，能自動將口述內容轉化為結構化的文字軌跡，避免資訊在口耳相傳中遺漏。一般開會會議紀錄精準國、台、英混和語系，精準辨識。\\n•  AI 自動摘要與結構化紀錄：不僅提供「逐字稿」，更利用 AI 模型進行語意分析，將冗長的會議紀錄自動歸納成重點決策；在交班紀錄中，則能依照標準化架構自動分類數據與醫囑。會議記錄完整摘要分析，快速讀取紀錄內容。\\n\\n方案價格說明：價格6300(含稅)，一個帳號一年費用\\n服務內容：提供會議記錄平台，內含會議紀錄逐字稿摘要分析","companyIntro":"易晨智能將語音辨識、自然語言分析，應用於應用在智慧教育以及智慧醫療做跨領域結合，運用機器學習、深度學習、資料探勘演算法，讓用戶有所感受。重點發展的是語音辨識以及自然語言文字分析處理以及數據分析，今年我們重點發展的項目是AI教育以及AI 醫護交班逐字稿紀錄。AI教育解決中英文口說問題，用AI進行評分及對話；AI 逐字稿交班紀錄解決醫護人員人力不足以及可即時性逐字記錄並進行摘要分類。","contactPerson":"許先生業務總監","companyPhone":"228570010","contactEmail":"mic@ez-ai.com.tw","websiteUrl":"ez-ai.com.tw","specialPrice":"語音辨識語言學習：4,800 元／年（含稅）\\n會議記錄暨醫療交班紀錄逐字稿：6300 元／年（含稅）"},{"id":"AI助理-3","category":"AI助理","sequence":3,"companyName":"創造智能科技股份有限公司","companyShortName":"創造智能科技","solutionName":"AI Sales 智能銷售助手","manualUrl":"https://www.youtube.com/watch?v=gvfrjiJozQY","imageFileName":"3.創造智能科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI助理/3.創造智能科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"AI Sales 智能銷售助手具備結合多語系對話、即時法規查詢與 CRM／ERP 串接等功能外，更可以節省人力與人事成本，達到全年24小時不間斷，智慧應對各種場景需求。另外使用知識圖譜作為知識庫，可以更有效地管理和維護知識內容，減少人工維護的工作量，達到降低維護成本，故適用於中小微企業/組織。\\n\\n方案價格說明：\\n1.網頁版虛擬人： (每月贈5萬則AI回覆，超過每個回覆以1.5元收費，Token費用)，訂閱12個月共NT$240,000(未稅) (基本上以一年計價)\\n2.設定費：NT$50,000(未稅) \\n3.串接平台：NT$50,000(未稅) \\n4.知識庫訓練費：專案報價(未稅)\\n\\n新北專屬優惠：\\n1.購買6個月贈送1個月使用期限，購買12個月贈送2個月使用期限(基本上以一年計價)。","companyIntro":"創造智能科技是一家AI Martech新創公司，專注於 AI行銷科技、LINE CRM、AI客服機器人與 AI虛擬人應用，致力於協助企業將「流量」真正轉化為「可經營的會員與數據資產」。\\n結合影音內容、行銷科技與AI應用實戰經驗，打造可快速導入、可規模化、可量化成效的AI解決方案，客戶涵蓋政府單位、大型企業、品牌客戶與文化觀光場域。\\n主要商品/服務項目：\\n•\\tLINE CRM × AI客服：協助企業建構可分析語意、貼標分眾、導流轉換的LINE官方帳營運系統。\\n•\\tAI虛擬人與互動導覽：應用於官網、line、FB message、活動、展覽、品牌互動與智慧導覽場域。\\n•\\tAIGC影音與廣告製作：加速影音內容產製，降低成本、提升產量與品質。\\n•\\tAI落地應用顧問服務：從場景設計、互動策略到實際成效落地。","contactPerson":"蔡先生","companyPhone":"02-27913588#83506","contactEmail":"erictsai@aicreate360.com","websiteUrl":"https://www.aicreate360.com/","specialPrice":"網頁版虛擬人：240,000 元／12個月（未稅）\\n設定費：50,000 元（未稅） \\n串接平台：50,000 元（未稅）\\n知識庫訓練費：專案報價（未稅）"},{"id":"AI助理-4","category":"AI助理","sequence":4,"companyName":"緯謙科技股份有限公司","companyShortName":"緯謙科技","solutionName":"WiKMS 企業知識管理助手","manualUrl":"","imageFileName":"4.緯謙科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI助理/4.緯謙科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"利用AI Agent 加上企業資料庫的串接，提供企業AI agent提升工作效率，解決中小企業人力不足、工時長的痛點。 WiKms是專為企業打造的智慧知識管理系統，其核心目標在於解決企業內部知識分散、難以檢索與應用的問題。利用先進的大型語言模型技術，結合雲地整合架構，在確保資料安全的前提下，提供高效的知識管理服務。 WiKMS 適用於多種企業知識管理場景，具有廣泛的應用彈性，能滿足不同規模與行業的企業需求。 \\n\\n方案價格說明：30萬/年(未稅)/一般方案\\n新北專屬優惠：\\n1.首年訂閱加贈3個月(共15個月)。[費用為產品訂閱授權，不含硬體及相關使用費] \\n2.加贈 4小時AI輔導顧問服務。","companyIntro":"緯謙科技 (WiAdvance) 為緯創集團旗下子公司，作為創新的雲端服務供應商，提供以Cloud、AI、Data為核心的一站式服務，，擁有強大的雲端技術團隊與豐富的場域落地經驗，深耕智慧製造、智慧醫療、智慧城市、智慧農業/零售等垂直產業應用，專注以雲端科技為企業打造數位轉型的強韌實力。","contactPerson":"客服專員","companyPhone":"0809-000-100","contactEmail":"service@wiadvance.com","websiteUrl":"www.wiadvance.com","specialPrice":"30萬元／年（未稅）"},{"id":"AI助理-5","category":"AI助理","sequence":5,"companyName":"環球睿視股份有限公司","companyShortName":"環球睿視","solutionName":"AIspeakin – AI即時/非即時語音辨識/翻譯/語譯服務","manualUrl":"https://www.loom.com/share/2e6a63c677e24fd4a4d37763ea3bdb03?sid=d0343998-e456-4cde-9b65-65f3e01e2d03","imageFileName":"5.環球睿視股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司.png","bannerFileExists":true,"solutionIntro":"(1)支援語言包含：中文、英文、日文、韓文、東南亞語文（泰文、越南文、菲律賓他加祿文、印尼文）、歐洲語文（德文、法文、西班牙文、葡萄牙文、義大利文等）、俄文、阿拉伯文、印地文、泰米爾文、烏爾都文等語言雙向轉譯，約涵蓋全球80%以上人口\\n(2)AI 即時翻譯輸出功能：\\n    2-1將語音訊息以 AI 轉譯後，提供翻譯後的文字訊號輸出，以顯示於螢幕或行動裝置\\n    2-2可操作清除，以清除前一翻譯輸出畫面。歷史對話內容不會儲存於系統主機\\n(3)AI語音辨識逐字稿功能：提供語音辨識及翻譯逐字稿\\n(4)AI語音生成功能：提供將AI翻譯內容以AI語音生成方式唸出來之功能。\\n(5)維運服務：平日5天 x 8小時之線上客服，透過電話協助引導使用人員排除故障事件，並回覆系統操作或需求相關問題\\n\\n* 時數、帳號數量可依照需求彈性調整，需要請洽環球睿視窗口詢問 carol.tsao@ubestream.com\\n\\n【即時翻譯1個帳號1年50小時服務時數】\\n新北專屬優惠：\\n1. 新北夥伴專屬：數位轉型無障礙優惠\\n只要您是透過新北合作平台或相關專區看到此資訊，即可享有專案補助價！\\n為了加速各產業導入 AI 工具、建構多語友善環境，我們打破行業與地域限制，提供新北夥伴最實質的數位升級支持\\n專案特惠價：$15,675 元（原價 $16,500）\\n適用對象：凡經由新北合作管道獲知此訊息之商家、企業\\n\\n2. 好友 +1 雙向回饋：時數大方送\\n好服務值得分享，時數回饋讓溝通更長久。\\n透過現有用戶成功介紹新用戶加入 AIspeakin 家族，雙方皆可獲得額外時數：\\n介紹人（原用戶）：成功介紹一位新夥伴，您的帳號將自動加贈 5 小時。\\n被介紹人（新用戶）：首月加碼多贈 3 小時服務時數，體驗更完整。\\n\\n【即時翻譯 1 個帳號 1 年 100 小時服務時數】\\n新北專屬優惠：\\n1. 新北夥伴專屬：數位轉型無障礙優惠\\n只要您是透過新北合作平台或相關專區看到此資訊，即可享有專案補助價！\\n為了加速各產業導入 AI 工具、建構多語友善環境，我們打破行業與地域限制，提供新北夥伴最實質的數位升級支持。\\n專案特惠價：$28,500 元（原價 $30,000）\\n適用對象：凡經由新北合作管道獲知此訊息之商家、企業。\\n2. 好友 +1 雙向回饋：時數大方送\\n好服務值得分享，時數回饋讓溝通更長久。\\n透過現有用戶成功介紹新用戶加入 AIspeakin 家族，雙方皆可獲得額外時數：\\n介紹人（原用戶）：成功介紹一位新夥伴，您的帳號將自動加贈 5 小時。\\n被介紹人（新用戶）：首月加碼多贈 3小時服務時數，體驗更完整。","companyIntro":"環球睿視 (Ubestream) 成立於 2016 年，是專注於語音人工智慧與智慧語音技術的深科技 (Deep-tech) 領導廠商，亦是首家掛牌創櫃板的 AI 創新企業 (TPEx 7587)。我們的核心優勢在於自主研發的全棧式 AI 語意語音演算法，深度整合語音識別 (STT)、語音生成 (TTS)、自然語言理解 (NLU) 與文本分析 (NLP)。憑藉卓越的技術架構，我們能將 AI 模型部署於雲端、邊緣端 (Edge)及嵌入式晶片，在無需網路連接的環境下，實現安全、低延遲且具備強大數據隱私保護的即時人機互動。旗下旗艦產品「AIspeakin 同步口譯代理人」運用串流式全雙工 (Streaming Duplex) 與 GenAI 技術，具備上下文自動校正與語種自動辨識功能，達成高準確、秒速級的雙向翻譯。已成功進駐台灣四大國際機場，提供國門級的多語服務，並廣泛應用於影音轉寫、會議紀錄及同步口譯等場域。目前已將事業版圖擴張至美國、日本、新加坡等全球市場，持續為智慧城市、交通、金融、旅遊與公共服務領域提供具高度擴展性的語音 AI 解決方案，實現 24 小時免接觸、高效率的人機協作未來","contactPerson":"白小姐","companyPhone":"02 8751 5176","contactEmail":"tech@ubestream.com","websiteUrl":"https://ubestream.com/","specialPrice":"50小時：15,675 元／月（未稅）\\n100 小時：28,500  元／月（未稅）"},{"id":"AI居家照護-1","category":"AI居家照護","sequence":1,"companyName":"凌松科技有限公司","companyShortName":"凌松科技","solutionName":"AI Coach 功能性體適能評估","manualUrl":"","imageFileName":"1.凌松科技有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI居家照護/1.凌松科技有限公司.jpg","bannerFileExists":true,"solutionIntro":"一、目的：本計畫旨在建立 AI 功能性體適能檢測系統，聚焦肌力、平衡與心肺耐力三大面向，針對長者進行肌少症風險評估，作為健康監測與運動安全的基礎。\\n二、方法：採用中低階（720p 以下）視訊鏡頭，無需穿戴式裝置，結合電腦視覺與深度學習技術，辨識人體骨骼至少 17 個以上特徵點位，於社區運動場域即時標示。系統生成動作記錄與姿勢辨識，自動給予動作評分。\\n三、創新性：突破傳統健身房依賴專業教練的限制，利用低成本設備即可完成專業姿勢檢測。強調「非穿戴式」與「即時影像辨識」的結合，提升 AI 在社區場域的應用可行性。\\n四、效益：提供長者便利的健康檢測工具，降低肌少症風險，提升運動安全性。民眾可在社區即可獲得專業姿勢訓練與數位化課程支持，促進健康促進與運動普及。\\n五、可行性：技術門檻低，設備需求簡單，適合廣泛推廣。結合既有社區運動場域與教學檔案，能快速導入並形成可持續的健康監測模式。\\n\\n標準採購價：每套設備租用1年(1組)新台幣 NT$ 200,000（含安裝與教育訓練）        \\n新北市政府專屬優惠價：每套設備新台幣 NT$ 180,000（約 10% 折扣）（含稅）","companyIntro":"凌松科技專注於健康科技整合，結合資訊、運動科學、公共衛生與人工智慧，打造 AI Coach智慧健康生態系。平台整合銀髮族、運動、營養、認知、感官與生活數據，應用於高齡城市、智慧住宅及健康促進服務。多年來協助政府、企業、學校與社區建構智慧健康照護系統，並屢獲國內獎項及聯合國教科文組織（UNESCO）專案肯定。\\n團隊擁有多項台灣與國際專利，技術涵蓋AIoT感測、生醫系統、穿戴裝置、運動訓練 及生成式AI互動平台。核心產品AI Coach平台採用多模態人工智慧（Multimodal AI），整合文字、圖像、語音、影片與感測數據，模擬人類教練的感知與判斷，提供即時、個人化、高互動性的訓練與健康引導，並協助高齡與衰弱族群進行失能預防、健康促進及預測分析。\\n以「技術驅動人機協作」為願景，結合具身智慧（Embodied AI），推動SDGs與 ESG永續發展，引領多模態AI跨入人機互動新世代，成為智慧健康產業的創新推手。","contactPerson":"戴先生","companyPhone":"62923231","contactEmail":"leadsong89@gmail.com","websiteUrl":"https://www.synergy.tw/","specialPrice":"180,000 元／年（含稅）"},{"id":"AI居家照護-2","category":"AI居家照護","sequence":2,"companyName":"健康盟股份有限公司","companyShortName":"健康盟","solutionName":"健康盟：重塑牙科營運的智慧引擎","manualUrl":"DigiMed 系統操作影片：\\n https://drive.google.com/file/d/10Mr1CLcbqNkKkN3d-VN7EsbynELEBIY3/view   \\n產品介紹影片： \\nhttps://youtu.be/KTvW4lYLe_4?si=EsGfFHw1UQdn_GVw","imageFileName":"2.健康盟股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI居家照護/2.健康盟股份有限公司.png","bannerFileExists":true,"solutionIntro":"DigiMEd 是專為牙科設計的 AI 數位諮詢助理與 CRM 系統，整合四大核心功能：（1）秒懂衛教影音庫：提供200+部由專科醫師審核之動畫與圖文，將艱澀牙科知識轉化為1分鐘內可理解的視覺內容；（2）AI 智能諮詢輔助：提供標準化諮詢流程與腳本，讓資淺助理也能專業解說療程；（3）診療椅邊精準播放：看診前推播衛教影片至螢幕，節省醫師重複解釋時間；（4）CRM 病患管理與行銷：透過 LINE/簡訊精準推播衛教資訊與術後照顧須知，提升回診黏著度。系統採用 AWS 台灣機房雲端架構，結合 AI 分析自動推薦合適內容，有效提升醫病溝通效率與自費療程接受度，為牙科診所打造完整數位轉型方案。\\n\\n方案價格說明：\\n平台月費 5,000 元/月，年費 60,000 元/年（未稅）\\n\\n新北專屬優惠：\\n1. 新北市的診所訂閱一年，優惠方式贈送兩個月（價值 1 萬元）。\\n2. 新北市的診所訂閱二年，優惠方式贈送五個月（價值 2 萬 5 千元）。","companyIntro":"健康盟公司致力於打造結合數位科技與醫療專業的整合型健康服務平台，專注於牙科與基層醫療數位轉型解決方案。我們以「數位賦能、專業升級、品牌成長」為核心理念，開發DigiMEd數位醫療系統，整合患者管理、數位衛教、療程說明與數位手術同意書簽署流程，協助診所提升溝通效率與醫病信任，同時強化內部管理與營運績效。\\n\\n目前健康盟已與全台超過700間牙醫診所合作，累積豐富實務經驗與成功案例，成為牙科數位轉型的重要推手。我們透過影音內容製作、數位行銷策略與專業教育訓練，協助醫療院所建立專業品牌形象，優化患者體驗並提升療程轉化率。\\n\\n健康盟相信，醫療不只是治療，更是溝通與信任的建立。未來將持續深化智慧醫療應用，推動數位醫療標準化，成為診所數位轉型與品牌升級最值得信賴的長期合作夥伴。","contactPerson":"王文利 CEO/王小姐","companyPhone":"02-25500189","contactEmail":"service@healthleaguex.com","websiteUrl":"https://www.healthleaguex.com/","specialPrice":"60,000 元／年（未稅）"},{"id":"AI居家照護-3","category":"AI居家照護","sequence":3,"companyName":"開源智造股份有限公司","companyShortName":"開源智造","solutionName":"居家營養照護AI工具導入- 佳灌安","manualUrl":"https://ibb.co/svQpcgp0","imageFileName":"3.開源智造股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI居家照護/3.開源智造股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本方案專為長照機構、居護所及需要長期居家照護的家庭量身打造，透過年度軟硬體整合服務，以更低門檻建立高階 AI 安全防護網。方案採年訂閱制，完整包含全年度 AI APP 服務費，並直接加贈藍牙數位聽診器乙支。\\n核心功能涵蓋：APP 灌食步驟提醒、異常聲音警示（防誤灌），以及每週一次安心 Check-in 線上支持。透過本方案的導入，不僅能為機構建立標準化、可追溯的數位照護紀錄，大幅提升多床位管理效率，更能有效降低非專業照護者的操作風險，構築安全、穩定的長照照護網絡。\\n\\n方案價格說明：\\n未稅$3,000/月 $30,000/年(加贈藍芽數位聽診器)\\n\\n新北專屬優惠：\\n1.1 次護理師到府新手教學\\n2.實體免費教育課程(團體)","companyIntro":"開源智造（OpenAIFab）深耕 AI 醫療與智能照護，創辦人因親自照顧家屬的切身經歷，深刻體會鼻胃管灌食的風險與壓力，進而自主研發「佳灌安 FeedSafe」。我們致力將尖端 AI 技術落地，提供全方位居家醫療物聯網解決方案。\\n佳灌安 FeedSafe 聚焦「鼻胃管灌食安全」，回應流程繁瑣易被省略、人力不足無法全面覆蓋的雙重痛點。結合自主研發的 AI 聲紋辨識與藍牙數位聽診器，將繁瑣的確認流程轉為直覺的安全機制，大幅降低非專業者的操作門檻，減輕家庭照顧負擔。\\n我們期盼賦能居護所、長照機構與醫療院所，無縫銜接居家照護，成為守護醫病與家庭最堅實的科技後盾，兼具產業效益與社會公益價值。","contactPerson":"黃執行長","companyPhone":"(02)2752-2531","contactEmail":"jonhuang@openaifab.co","websiteUrl":"https://www.facebook.com/openaifab/?locale=zh_TW","specialPrice":"30,000 元／年（未稅）"},{"id":"AI垂直整合方案-1","category":"AI垂直整合方案","sequence":1,"companyName":"艾利思科技股份有限公司","companyShortName":"艾利思科技","solutionName":"Aura 智慧影像及場域感知管理系統","manualUrl":"","imageFileName":"1.艾利思科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/1.艾利思科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"本案 Aura 智慧感知系統整合多元環境感測與影像 AI 分析，打造即時且可落地的場域管理方案。系統以邊緣影像AI為核心，部署於 NVIDIA Jetson 或獨立 GPU 邊緣架構，即時進行人員、物件與行為辨識，支援跌倒偵測、求救分析、電子圍籬、非法入侵與產線計數等應用，達成主動預警與風險防範。\\n\\n透過同步整合溫濕度、光照等環境數據，透過小型語言模型進行時序分析與情境理解，自動辨識異常並提供具體改善建議。系統採在地化邊緣推論，兼顧隱私與資安，具高度模組化與擴充性，可依場域需求彈性調整模型與感測模組，全面提升安全、效率與智慧管理能力。\\n\\n方案內容：\\nA.數據分析服務\\n10個感測資料接入(新北優惠價7,200每月)\\n或\\nB.影像安全感知\\n人員偵測+影像式電子圍籬+跌倒感知+求救手勢分析(新北優惠價9,450每月/每個IP Camera)\\n\\n1.產品售出後遠端軟體技術支援由90天，延長為180天\\n2.新北專屬方案贈送3個小時一對一場域管理顧問諮詢服務(價值一萬元)","companyIntro":"艾利思科技成立於 2018 年，由專業的全端工程師團隊組成，致力於以「化繁為簡，驅動企業未來」為核心理念，協助企業有效落實數位轉型。公司從企業客製化軟體服務出發，累積豐富跨產業實戰經驗，服務客戶超過 150 家，涵蓋金融、製造、零售、能源及政府公共工程等領域。\\n\\n艾利思科技近年專注於各類型場域管理，並推出Aura智慧感知系統，除了知名的精準定位系統與多元的環境感測器解決方案外，更可結合影像 AI 與環境數據分析，提供即時、可解釋且可落地的場域智慧管理能力，協助企業預防風險、保障人員安全與關鍵資產，成為企業長期信賴的端到端數位轉型夥伴。","contactPerson":"翁先生","companyPhone":"02-25853358","contactEmail":"cadi@ellis.tw","websiteUrl":"https://www.ellis.tw","specialPrice":"數據分析服務：7,200 元／月（含稅）\\n影像安全感知：9,450 元／月（含稅）"},{"id":"AI垂直整合方案-2","category":"AI垂直整合方案","sequence":2,"companyName":"城智科技股份有限公司","companyShortName":"城智科技","solutionName":"airaTrack-全場域人臉追蹤解決方案","manualUrl":"https://www.youtube.com/watch?v=0snu5LAxBXE","imageFileName":"2.城智科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/2.城智科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"在大型體育館、多樓層建物、機場、火車站等開放場域中，人員走失、物品失竊頻繁發生，要在眾多人群中找尋特定目標人物（走失人員或嫌犯、共犯），甚至是目標的完整行經路徑，用以往人工方式，逐一比對大量攝影機畫面，耗時又易出錯，錯過黃金搜尋時機。\\n使用airaTrack智慧化傳統人工逐一比對攝影機畫面流程，3小時作業縮至10分鐘完成。\\n\\n隱私優先設計：無需預先註冊目標人臉資料庫，AI模型自動偵測影像中人物，並列出人臉牆進行目標挑選。可模糊非目標人臉保護隱私。\\n整合既有攝影機：不需更換攝影機或安裝特定AI攝影機，系統可整合既有攝影機運作。\\n安全的地端部署：場域內監控影像、搜尋資料等皆存於本地儲存，不上雲無外洩風險。\\n\\n新北專屬優惠：\\n軟體買一送一（買一路軟體授權即送一路）\\n免費試用期延長至3個月（90天）","companyIntro":"AIRA城智科技是由逾20年AI影像處理經驗的團隊所組成，專注於AI領域的研究與開發。AIRA的使命是採用先進的人臉、人形與物件辨識技術，並整合於影像管理系統，開發AI+IOT+Cloud等多種整合性應用方案。\\n於2020年榮獲 Intel Gold Partner 的殊榮，並與NVIDIA, Network Optix, AWS展開深度技術合作。解決方案廣泛應用於企業、智慧建築、工廠、工地管理與零售等場域，優化場域安全與管理效率。","contactPerson":"陳小姐","companyPhone":"02-27010161","contactEmail":"sales@aira.com.tw","websiteUrl":"https://www.aira.com.tw/","specialPrice":"請洽專線提供您專屬優惠價"},{"id":"AI垂直整合方案-3","category":"AI垂直整合方案","sequence":3,"companyName":"訊連科技股份有限公司","companyShortName":"訊連科技","solutionName":"FaceMe Security 安控門禁解決方案","manualUrl":"https://youtu.be/FDYnyCxOhm4","imageFileName":"3.訊連科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/3.訊連科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"FaceMe Security 是一款專為智慧安防及門禁需求設計的開箱即用解決方案，透過人臉辨識，實現身分驗證、出勤管理暨門禁管制，具備即時監控與通知示警功能。更可基於人臉或衣著身形進行事後足跡追蹤查詢，且與各大主流 VMS 深度整合，無須任何開發，讓安防管理輕鬆有效。提供多種加值套件 ，滿足不同安控場域的應用需求，提供一站式解決方案。\\n\\n新北專屬優惠：\\n1. 售後保固延長至18個月 (原先為12個月)\\n2. 免費 60 天試用","companyIntro":"訊連科技（5203.TW）創立於 1996 年，為全球首屈一指的多媒體影音軟體及數位創意編輯軟體服務及 AI 臉部辨識、人型辨識技術開發商。訊連科技的產品及服務涵蓋數位影片及圖像內容創作、多媒體影音播放、視訊會議及直播與遠距教學、手機行動應用程式、AI 人臉辨識等多樣化解決方案，滿足消費性、商務、教育等跨領域多媒體應用。旗下威力導演、相片大師、PowerDVD 等電腦軟體和行動 App，透過零售、訂閱式服務及預載等方式，提供個人電腦品牌多樣化應用軟體。 \\n\\n訊連科技深耕 AI 人工智慧於創意內容影片圖像編輯，臉部辨識及人型辨識，透過深度學習法開發 FaceMe® AI 臉部辨識引擎，提供智慧安控、智慧差勤、智慧金融、智慧零售等垂直市場應用，卓越的辨識準確度，屢次於全球知名 NIST 人臉辨識測試獲得名列前茅佳績。","contactPerson":"嚴先生 / 業務協理","companyPhone":"(02)8667-1298","contactEmail":"FaceMe_TW@cyberlink.com","websiteUrl":"https://tw.cyberlink.com/faceme","specialPrice":"請連絡廠商報價"},{"id":"AI垂直整合方案-4","category":"AI垂直整合方案","sequence":4,"companyName":"雲義科技股份有限公司","companyShortName":"雲義科技","solutionName":"Unipicket AI安防","manualUrl":"https://www.youtube.com/watch?v=Qek_BofVCjs","imageFileName":"4.雲義科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/4.雲義科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"Unipicket AI影像辨識產品主要功能在於將場域現有監視器系統升級具有AI影像辨識與即時通報之AI安防系統，能縮短危安事件通報時間，減少危安損失。\\n\\n支援4支攝影機串流即時影像辨識，可從已建置的IPCAM 或DVR中選取其中需要的攝影機RTSP影像進行辨識設定，單支攝影機影像可同時支援多種事件之辨識功能，可依不同攝影機啟動多個辨識功能同時運作，不同辨識功能分別設定多個辨識排程及電子圍籬區域。\\n\\n辨識到設定事件發生時，能即時擷取攝影機畫面進行通報，並自動錄製事件20秒以上的影片存於辨識硬體內並發送圖片通報至電腦端CMS或是手機APP。\\n\\n針對新北專屬優惠方案特別規劃「Unipicket-新北AI安防版」，針對新北市轄內服務業、物流倉儲、製造業、店面辦公等場域提供最常用四種辨識功能如下\\n1.        人員進入-辨識顧客進出、人流時段、門禁管制\\n2.        煙霧火光-防護電力設施、廠房周界、廚房\\n3.        車輛進入-辨識車輛管制區域或時段有車輛進入\\n4.        人員離席-確保現場或產線人員即時服務\\n\\n新北專屬優惠：\\n單套新北專屬產品內容優惠方案價格為80,000未稅，內容含\\n1.AI辨識系統軟硬體(人員進入、煙霧火光、車輛進入、人員離席等4種辨識功能)\\n2.一年硬體保固服務\\n3.一年遠端維護\\n4.一次現場安裝服務與教育訓練","companyIntro":"Unipattern 雲義科技成立於2001年，公司創立以軟體研發為主，發展Data Mining演算法的核心技術，投入智慧型應用軟體產業。\\nUnipicket 視衛通是雲義科技整合影像辨識模型及演算法的AI影像辨識即時通報系統，使用市場通用的RTSP協定影像串流辨識監視器畫面內的多種異常事件並即時通報，如此可在事件發生即時或初期就辨識通報，縮短通報時間並降低災害擴大，整合通報介面可整合其他IOT感測與VMS/CMS系統，提高整體場域安全。\\nUnipicket視衛通可加強場域安全，已有不同公民營單位採用，為共同供應契約產品，參與總統盃黑克松競賽於2022年取得卓越團隊及2025年AI應用公共服務特別獎。","contactPerson":"陳先生","companyPhone":"07-6156988","contactEmail":"unipicket@unipattern.com","websiteUrl":"https://www.unipattern.com/","specialPrice":"80,000 元（未稅）"},{"id":"AI垂直整合方案-5","category":"AI垂直整合方案","sequence":5,"companyName":"睿思創新股份有限公司","companyShortName":"睿思創新","solutionName":"CROSSBOT AI Agent Platform – Enterprise 企業旗艦版","manualUrl":"https://youtu.be/SZW50d7qaKs?si=gngIw_T14gnla4O4","imageFileName":"5.睿思創新股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI垂直整合方案/5.睿思創新股份有限公司.png","bannerFileExists":true,"solutionIntro":"為 CROSSBOT 平台之最高階全功能版本,專為大型企業、集團型組織、公部門及高治理需求單位所設計。\\n本方案除完整包含 Basic 與 Pro 版本之所有功能外,進一步強化 企業級治理(Governance)、資安控管、系統整合與高可用架構，使 AI 不僅作為輔助工具，而能成為組織正式納入營運與決策流程之核心平台。\\n方案包含模組：\\nEnterprise 企業旗艦版包含以下全功能模組：\\n1. 智能客服(企業級模組)\\n2. AI KM (企業級知識治理模組)\\n3. AI Agent 任務與流程自動化模組\\n4. 企業級權限、治理與稽核模組\\n5. 異質系統整合與 API 模組\\n6. 高可用部署與資安防護模組\\n\\n新北專屬優惠：\\n1. ASUS GX10 AI 伺服器(選購)加購價格：+ NT$ 150,000 up （含稅）(依GPU/記憶體配置)\\n(適用於地端部署、資料不外流或對資安有高度需求之場域)\\n2. 平台+硬體組合優惠價\\n組合價(含 ASUS GX10)：約 NT$ 950,000 up/年（含稅）\\n(組合方案可同時滿足 AI 平台服務與地端運算需求,適合有未來擴充 AI 應用或治理需求之單位。)","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","contactPerson":"陳先生","companyPhone":"02-77297007","contactEmail":"hanchen@reas.com.tw","websiteUrl":"https://www.reas.com.tw/","specialPrice":"800,000元／年（含稅）"},{"id":"AI創作內容-1","category":"AI創作內容","sequence":1,"companyName":"大數軟體有限公司","companyShortName":"大數軟體","solutionName":"AIMochi（語音轉文字／會議逐字稿與字幕）","manualUrl":"https://drive.google.com/file/d/1bplLdG--OwuUuNj1p6Ob0Fz26jijbPzL/view?usp=drive_link","imageFileName":"1.大數軟體有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI創作內容/1.大數軟體有限公司.png","bannerFileExists":true,"solutionIntro":"AIMochi 是一 AI 語音轉文字服務，只需將錄音檔傳送給 AIMochi，即可在數分鐘內取得高品質逐字稿。\\n\\nAIMochi 採用先進語音辨識技術，支援多國語言的語音轉錄，並具備自動講者辨識功能，能精準區分不同發言者，讓會議紀錄、訪談記錄一目了然。\\n轉錄完成後，使用者還可透過內建 AI 功能進行多語言翻譯，一鍵將逐字稿轉換為其他語言版本，輕鬆產出雙語或多語字幕。搭配智慧摘要功能，長篇錄音也能自動濃縮為精煉重點，快速掌握核心內容。\\n\\n新北專屬優惠：\\n導入與免費教育訓練","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","contactPerson":"丘先生","companyPhone":"02-2585-5080","contactEmail":"david@largitdata.com","websiteUrl":"https://largitdata.com/","specialPrice":"地端：814,263 元（含稅）\\n雲端（三個月）： 72,801元（含稅）"},{"id":"AI創作內容-2","category":"AI創作內容","sequence":2,"companyName":"漫話科技股份有限公司","companyShortName":"漫話科技","solutionName":"兒少互動敘事與情緒學習AI服務平台","manualUrl":"https://youtu.be/6XjGVDcxrtU","imageFileName":"2.漫話科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI創作內容/2.漫話科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"本方案為「兒少互動敘事與情緒學習AI服務平台」，專為教育與學習服務型企業設計，協助快速導入兼具遊戲化互動、動畫敘事與情緒紀錄之AI服務能力。系統透過漫畫式情境、任務推進與角色互動，引導使用者進行表達與反思，並於互動過程中自動生成情緒標記與互動日記，作為後續學習與服務回饋之依據。核心功能包含AI遊戲化敘事引導、情緒日記與內容生成、分齡設計與情境配置、學習互動紀錄與摘要、管理後台與權限控管，適用於補教、幼教、安親、早療、特教等兒童教育服務業者之課程加值、親子服務或主題活動。\\n\\n新北專屬優惠：\\n1. 新北專屬優惠價：每套NT$38,880／年（原價NT$43,200），含1名系統管理者、2位老師帳號與30名學生帳號\\n2. 提供90天導入支援期（線上/遠端），含1次導入說明會（約60-90分鐘）與使用問題排除\\n3. 新北業者每套加贈AR情緒圖卡一套\\n4. 免費分齡情境配置（幼兒/兒童/補教高年級，擇一）\\n5. 企業可將部分授權名額以公益方式授權予新北市公立學校或非營利教育單位使用","companyIntro":"本方案為「兒少互動敘事與情緒學習AI服務平台」，專為教育與學習服務型企業設計，協助快速導入結合遊戲化互動、動畫式敘事與情緒紀錄之AI服務能力，減少教師、治療師於課前備課與課後進行情緒觀察整理與家長說明所需投入的時間，包括補教、幼教、安親、早療、特教等兒童教育服務或早療相關業者用於團課或客戶（家長）加值服務。系統包含管理後台、帳號權限、使用紀錄與成效摘要，支援企業快速導入、擴點與後續營運，並提供導入說明與技術支援，協助企業完成AI化升級。","contactPerson":"黃先生","companyPhone":"0916-234164","contactEmail":"mangaxtechnology@gmail.com","websiteUrl":"https://www.mangachat.com","specialPrice":"38,880元／年（未稅）"},{"id":"AI創作內容-3","category":"AI創作內容","sequence":3,"companyName":"網際智慧股份有限公司","companyShortName":"網際智慧","solutionName":"絕好聲創VoAI聲音創造所 - 超擬真AI語音與短影音生成服務 (https://voai.ai)","manualUrl":"https://youtu.be/GUcSVi1lrOw","imageFileName":"3.網際智慧股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI創作內容/3.網際智慧股份有限公司.png","bannerFileExists":true,"solutionIntro":"VoAI 聲音創造所 – 企業 AI 創作組合包 A 方案：\\n一、VoAI 聲音創造所 – Creator 年訂閱：\\n ① 60 位超擬真台灣口音AI聲優，男女老少、喜怒哀樂、多元情感表達；\\n ② 台灣習慣唸法，包含多音字、中英文夾雜、數字等朗讀；\\n ③ 提供 AI 短篇配音、多人長篇配音功能，不限字數；\\n ④ 提供聲音克隆功能，可快速複製您個人音色，可定義 10 角色；\\n ⑤ 聲音可輸出wav, mp3, 字幕檔；\\n ⑥ AI 生成Podcast 100 次 / 月 ；\\n ⑦ 贈送每月 AI 影像生成點數 7,200 點 / 月（1秒影片=10點）；\\n ⑧ 每1個帳號可允許 3 台裝置登入使用；\\n二、再贈送企業影像生成點數18萬點（可生成300分鐘影片），可生成虛擬人短影音、資訊與知識說明影片，應用於課程、教育訓練、產品介紹，有效期同訂閱期限。\\n\\n新北專屬優惠：\\n免費教育訓練","companyIntro":"網際智慧（IQT.AI）致力於建構「可信任、有溫度」的 AI Agent 體系，橫跨文字輸入、聲音表達、影音創作與法遵合規四大領域。我們屢獲金鼎獎、經濟部智慧創新大賞 Best AI Awards、台灣人工智慧協會 AI Award Best Solutions、數位發展部數位產業署－AI應用鬥智賽、AI TAIWAN 創新商務獎等頂尖殊榮。旗下主力包含：①長期穩居市佔領先的－text.tw 自然輸入法、②賦予 AI 擬真人聲的－VoAI.AI 絕好聲創，③確保企業治理與合規的－XComply.AI快合規。網際智慧不只是技術專家，更是企業數位轉型最值得信賴的 AI 夥伴！","contactPerson":"羅經理","companyPhone":"02-77087068","contactEmail":"sales@iqt.ai","websiteUrl":"www.iqt.ai","specialPrice":"80,000 元／年（含稅）"},{"id":"AI智能客服-1","category":"AI智能客服","sequence":1,"companyName":"亞博福爾摩沙有限公司","companyShortName":"亞博福爾摩沙","solutionName":"A.I. Chatbot(聊天機器人）","manualUrl":"https://www.youtube.com/watch?v=HJYXaXhPg5w","imageFileName":"1.亞博福爾摩沙有限公司.jpeg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/1.亞博福爾摩沙有限公司.jpeg","bannerFileExists":true,"solutionIntro":"亞博福爾摩沙搭載自研 Geniichat 引擎，將 A.I. Chatbot 從「被動問答」升級為「主動商務」。系統無縫整合網站、App 及主流社群（Line, WhatsApp, WeChat, FB），並支援流暢的文字與語音互動，是您 24 小時的金牌業務與售後管家。\\n\\n透過強大 API 串接，我們為企業解鎖四大核心功能：\\n智能導購與個人化推薦：主動分析對話意圖並推送精準產品。結合直觀的「滑動卡片 (Carousel)」展示，顧客點擊即可下單，大幅縮短購買路徑。\\n\\n系統深度整合：具備高度擴充性，可深度串接 ERP、CRM 與 POS 系統，確保前後端數據即時同步，打破資訊孤島。\\n即時庫存查詢：自動檢索後端數據，秒回貨況與預計到貨日，即時解決顧客對現貨的疑慮。\\n售後進度追蹤：顧客輸入單號即可查詢維修狀態，提供透明化體驗並有效降低客服人力成本。\\n\\n新北專屬優惠：\\n1.專案價格直降：原系統建置與授權費用，新北在地單位享專屬優惠價，現省 40%。\\n2.其他加購（Token、 API 串接、 語言）： 20,000-50,000。（未稅）\\n3.客製化功能： 一次性估價 50,000 - 200,000 。（未稅）","companyIntro":"亞博福爾摩沙打造全通路對話式AI客服系統，結合A.I.Voicebot\\n(電話語音機器人)、A.I.Ambassador(智能服務大使)、A.I. Agent、A.I.Chatbot(聊天機器人)，覆蓋語音、文字與實體互動，提供無縫且即時的智慧客服體驗。具備超過20種語言、多語夾雜辨識)、多口音辨識，可支援跨文化、跨區域應用。具備多輪對話、記憶用戶偏好、意圖辨識等進階能力，提升服務效率與使用者滿意度。平台亦可彈性整合企業內部系統，進行數據蒐集與分析，實現智慧化的客服轉型。","contactPerson":"鄭小姐","companyPhone":"02-7727-7477","contactEmail":"admin.taiwan@asiabots.com","websiteUrl":"https://www.asiabots.com.tw/","specialPrice":"160,000元（未稅）\\n此為預估報價，僅含建置與授權費；最終費用將依實際需求與用量調整。"},{"id":"AI智能客服-2","category":"AI智能客服","sequence":2,"companyName":"亞博福爾摩沙有限公司","companyShortName":"亞博福爾摩沙","solutionName":"A.I. Voicebot(聊天機器人）","manualUrl":"https://youtu.be/9-AGCiZwZbs?si=IGwJCsjLYSWtzTe0","imageFileName":"2.亞博福爾摩沙有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/2.亞博福爾摩沙有限公司.jpg","bannerFileExists":true,"solutionIntro":"亞博福爾摩沙專為企業打造 A.I. Voicebot，結合亞洲首創 LLM 整合技術（ASR、NLP、TTS），打破傳統死板腳本，提供高度擬真的人聲互動，將繁瑣的外撥工作轉化為高轉化的自動化流程。\\n\\n四大核心外撥應用：\\n\\n滿意度調查：黃金時間自動觸及，回覆率優於簡訊，數據自動結構化。\\n\\n精準開發：智慧識別意圖，篩選「溫熱名單」並即時轉接業務，專注成交。\\n\\n活動邀約：短時間內完成數千人通知與出席確認，大幅降低人工成本。\\n\\n重要通知：標準化傳達合約、權益變更，提供完整錄音軌跡確保合規。\\n\\n管理優勢：具備 No-code 直觀後台與 API 串接能力，非技術人員也能快速上線，並實現 CRM 資料自動同步。透過 24/7 運作與即時數據監控，Voicebot 能在關鍵時刻無縫轉接真人，確保服務標準化且品質不中斷。\\n\\n新北專屬優惠：\\n1.電話機器人外撥門號加購：1,200/個。\\n2.單種語言加購(含專有名詞的額外訓練與微調)：50,000/種。\\n3.語系升級折扣：因應跨國貿易需求，凡加購三國語言以上（如英、日、越、印等），每種語系直接減免 $5,000。\\n4.客製化功能加購：50,000-200,000。（未稅）\\n5.客製功能折抵：針對個別企業流程之客製化開發，除提供專業顧問估價外，新北方案客戶額外享有總價 $10,000 之開發金折抵。","companyIntro":"亞博福爾摩沙打造全通路對話式AI客服系統，結合A.I.Voicebot\\n(電話語音機器人)、A.I.Ambassador(智能服務大使)、A.I. Agent、A.I.Chatbot(聊天機器人)，覆蓋語音、文字與實體互動，提供無縫且即時的智慧客服體驗。具備超過20種語言、多語夾雜辨識)、多口音辨識，可支援跨文化、跨區域應用。具備多輪對話、記憶用戶偏好、意圖辨識等進階能力，提升服務效率與使用者滿意度。平台亦可彈性整合企業內部系統，進行數據蒐集與分析，實現智慧化的客服轉型。","contactPerson":"鄭小姐","companyPhone":"02-7727-7478","contactEmail":"admin.taiwan@asiabots.com","websiteUrl":"https://www.asiabots.com.tw/","specialPrice":"81,200元（未稅）"},{"id":"AI智能客服-3","category":"AI智能客服","sequence":3,"companyName":"社群洞察股份有限公司","companyShortName":"社群洞察","solutionName":"WebGUID網路指南針","manualUrl":"https://www.youtube.com/watch?v=HheScwXp88Y&t=1s","imageFileName":"3.社群洞察股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/3.社群洞察股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"WebGUID 為結合 AI 導覽與內容規劃的智慧網站助理，採雙 AI Agent 架構，前台提供即時問答與智慧導覽，協助使用者快速取得所需資訊；後台則透過 AI 建立知識庫、生成 FAQ 與進行行為分析，降低維運負擔並優化數位服務體驗。本方案整合智慧客服與知識推薦機制，特別適合中小型組織快速建置客服系統。相較傳統需手動整理 QA 的機器人，WebGUID 可從指定網站自動學習並建構知識庫，大幅減少人工維護成本。管理端可分析瀏覽軌跡與搜尋紀錄，掌握常見需求，並自動推薦待補強內容，協助無專責人力單位持續優化網站服務。同時支援 Web、LINE、Messenger 等多元通路，並具備分類提示、報表分析與權限管理功能，協助組織快速導入 AI、提升整體服務效能與使用體驗。\\n\\n【基礎方案】NTD 59,988/年(未稅)\\n新北專屬優惠：\\n第二年續約12個月可享9折，續約24個月可享8折，續約36個月（或更長）享75折","companyIntro":"社群洞察股份有限公司秉持「Work Smarter with GPT」理念，致力以生成式AI協助企業與政府解決知識傳遞、任務處理與品牌經營中的效率與溝通痛點。我們提供成熟的AI Agent解決方案，協助組織建立專屬任務助手，實現低門檻導入、無痛轉型與智慧化升級。旗下無程式碼平台 WebGUID.ai，讓企業以最低成本將AI整合至官網與社群渠道，即使非技術人員亦可快速建置AI應用，優化服務流程、提升互動體驗，同時大幅降低營運與客服負擔。透過AI協作機制，我們協助組織將知識轉化為可持續運作的智慧服務能力，真正落實以AI驅動成長與創新。","contactPerson":"張小姐","companyPhone":"02-2365-7153","contactEmail":"mandy@faninsights.io","websiteUrl":"https://webguid.ai/","specialPrice":"59,988／年(未稅)"},{"id":"AI智能客服-4","category":"AI智能客服","sequence":4,"companyName":"凌典科技有限公司","companyShortName":"凌典科技","solutionName":"AI全通路社群客服&預約系統","manualUrl":"https://vimeo.com/manage/videos/1155845416","imageFileName":"4.凌典科技有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/4.凌典科技有限公司.png","bannerFileExists":true,"solutionIntro":"本方案整合AI智慧客服串接模組、跨渠道AI訊息整合模組、AI主動式銷售推播模組、網站與LINE預約模組、CRM會員分級管理與金流訂閱模組，打造一站式智慧營運平台。專為多角化經營的中小型服務業設計，適用於場地空間、課程品牌、美業、健身瑜伽、顧問諮詢與各類生活服務業者。解決業者面臨人力不足、訊息分散、回覆延遲與轉換率低等問題，本方案同時結合AI語意機器人、預約與銷售等自動化工具，以AI智慧客服為核心，透過大型語言模型自動處理重複性詢問，同步管理多渠道LINE、FB、IG與官網訊息，並透過AI Flow設計預約引導與資料蒐集流程，將客服自然轉化為訂單與預約。搭配觸發式行為推播與CRM會員分群功能，實現精準再行銷與主動式銷售，讓客服不只是回覆工具，更是實現營收的成長引擎。從客服自動化、預約數位化到營收轉換提升，一站協助業者降低人力成本、提升成交效率，建立可持續放大的商業模式。\\n\\n新北專屬優惠：\\n[3+1] 品牌預約方案 買三年送一年 總價 79200元（含稅） = 原方案26400元/年 x 3年  (原方案3年份 額外加贈1年，升級為4年) 凡符合新北專屬優惠資格之業者，申請並採購三年期品牌預約系統方案，即可額外獲得一年使用權限，並含下列功能模組。 。AI智慧客服串接模組 。自訂預約流程及跨平台AI客服整合模組 。AI主動式銷售推播客服模組 。網站及LINE預約模組 。CRM管理與會員分級模組 。金流訂閱模組","companyIntro":"凌典科技有限公司，104年成立，資本額500萬。\\n 本公司致力於營運雲端預約系統服務、自動化工具推廣、第三方金流代辦、數位銷售知識教學。具備多重角色身份。\\n(1) 雲端系統服務商：本公司Saas系統「TinyBook開店系統」至今已服務超過400位品牌客戶，協助其將營運流程線上自動化，包括相聲瓦舍、雲門舞集、台塑生醫、BenQ虹韻助聽器等知名業者。\\n(2) 第三方金流經銷商：為Line Pay、街口支付、藍新金流、TapPay、PChome支付連等5間第三方金流公司授權經銷商。以及藍新電子發票經銷商。\\n(3) 政府數位轉型專案 系統服務商&顧問：\\n114年 經濟部 產業AI導入應用輔導 系統服務商\\n114年 經濟部 推廣服務業上雲補助 系統服務商\\n114年 台北市「店家數位基礎導入計畫」 系統服務商\\n114年 台北市 台北數位企業發展中心 數位轉型顧問","contactPerson":"客服專員","companyPhone":"0981465331","contactEmail":"customer@tinybook.cc","websiteUrl":"https://tinybot.cc/","specialPrice":"79,200 元（含稅）"},{"id":"AI智能客服-5","category":"AI智能客服","sequence":5,"companyName":"創造智能科技股份有限公司","companyShortName":"創造智能科技","solutionName":"AiTAGO Line CRM","manualUrl":"https://www.youtube.com/shorts/FbccQZPXQK8","imageFileName":"5.創造智能科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/5.創造智能科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"AiTAGO Line CRM是一個整合線上行銷活動、維繫客戶關係與數據洞察的數位經營平台，並可協助企業提升和客戶的互動轉換率，深度厚植品牌價值，強化顧客的忠誠度。\\nAiTAGO與LINE官方帳號後台無縫整合，系統面提供多元的管理功能，包含帳號管理、會員管理、標籤管理、受眾管理、優惠碼管理、短連結產生器、腳本觸發器、自動推播、AI生圖等。\\n\\n方案價格說明：\\nAiTAGO Line CRM採用SaaS，提供訂閱制的服務和價格。 \\n(1) LINE官方帳號SCRM SaaS月租費：12個月，價格(未稅)：  NT$3,599(會員人數小於或等於5000)、價格(未稅)：  NT$4,599(會員人數等於2萬)、價格(未稅)：  NT$5,599(會員人數等於10萬)，依會員人數級距不同收取不同月租費，基本上以一年計價。\\n(2) LINE官方帳號 SCRM & AITAGO設定費：NT$50,000(未稅)\\n\\n新北專屬優惠：\\n購買6個月贈送1個月使用期限，購買12個月贈送2個月使用期限(基本上以一年計價)。","companyIntro":"創造智能科技是一家AI Martech新創公司，專注於 AI行銷科技、LINE CRM、AI客服機器人與 AI虛擬人應用，致力於協助企業將「流量」真正轉化為「可經營的會員與數據資產」。\\n結合影音內容、行銷科技與AI應用實戰經驗，打造可快速導入、可規模化、可量化成效的AI解決方案，客戶涵蓋政府單位、大型企業、品牌客戶與文化觀光場域。\\n主要商品/服務項目：\\n•\\tLINE CRM × AI客服：協助企業建構可分析語意、貼標分眾、導流轉換的LINE官方帳營運系統。\\n•\\tAI虛擬人與互動導覽：應用於官網、line、FB message、活動、展覽、品牌互動與智慧導覽場域。\\n•\\tAIGC影音與廣告製作：加速影音內容產製，降低成本、提升產量與品質。\\n•\\tAI落地應用顧問服務：從場景設計、互動策略到實際成效落地。","contactPerson":"蔡先生","companyPhone":"02-27913588#83506","contactEmail":"erictsai@aicreate360.com","websiteUrl":"https://www.aicreate360.com/","specialPrice":"(1) LINE官方帳號SCRM SaaS月租費：\\n會員人數小於或等於5000：3,599 元／月（未稅）\\n會員人數等於2萬：4,599 元／月（未稅）\\n會員人數等於10萬5,599 元／月（未稅）\\n(2) LINE官方帳號 SCRM & AITAGO設定費：50,000 元(未稅)"},{"id":"AI智能客服-6","category":"AI智能客服","sequence":6,"companyName":"穎諾科技股份有限公司","companyShortName":"穎諾科技","solutionName":"OpsCentral｜企業級 GenAI 全通路聯絡中心 SaaS 方案","manualUrl":"https://www.youtube.com/watch?v=zo55R_U1_Ks&list=TLGGT_UClBsZ4IUyMzAyMjAyNg","imageFileName":"6.穎諾科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI智能客服/6.穎諾科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"OpsCentral 採席位制設計，企業依客服同時在線人數規劃至少 5 席基礎版（語音或訊息擇一），即可享有新北專屬優惠；後續可依營運發展彈性擴充渠道與功能模組，兼顧初期成本控管與長期成長需求。\\n\\n方案價格說明：\\n以 5 席基礎版（年繳）為例：每席 NTD 2,599／月（未稅）；一次性設定費 NTD 6,000／席（未稅），另含教育訓練 4 小時 NTD 11,000（未稅），首年初估 NTD 196,940。\\n上述金額係依本公司現行價格標準進行之概算，僅供預估參考，尚未包含 SIP Trunk 線路費、及其他電信相關費用。\\n實際報價將依雙方確認之最終需求內容及服務範圍另行提供。\\n本公司保留因產品規格調整、市場環境變動或成本結構變化而修訂價格之權利。\\n\\n新北專屬優惠：\\n1.GenAI 助理免費試用 3 個月，自系統正式上線日起算（該日視為合約起始日）\\n• 試用期間包含每月實際使用量額度，協助企業完成實際場景測試與效益評估\\n\\n2.導入顧問與操作說明共 6 小時\\n•上線前操作與設定教學 4 小時\\n•上線後使用說明與操作指引 2 小時\\n• 顧問時數須於正式上線後 3 個月內使用完畢\\n\\n3.凡於活動期間簽約並完成付款者，可再享有以下使用期間延長優惠：\\n購買 1 年方案→ 加贈 1 個月使用期\\n購買 2 年方案→ 加贈 3 個月使用期\\n購買 3 年方案→ 加贈 12 個月使用期（1 年）\\n*適用條件說明\\n•本優惠僅適用於本次新北市政府 AI 媒合專案期間申請之客戶\\n•需於簽約後一次性完成全額付款，方可適用本優惠方案\\n•加贈之使用期間將於原合約期滿後順延啟用\\n•本優惠不得與其他專案優惠或折扣併用","companyIntro":"穎諾科技核心產品為 OpsCentral 雲端全通路客服系統，協助企業整合電話、LINE、Facebook、官網與即時通訊等多元管道，集中管理顧客互動紀錄與服務流程，打造一致且高效率的客戶體驗。\\n\\n公司以雲端聯絡中心架構為基礎，結合生成式 AI 與自然語言處理技術，協助企業建置智慧客服與自動化回覆機制，提升回應速度與服務品質，同時降低人力成本與管理負擔。\\n\\n系統支援企業級權限與資安機制，並部署於國內雲端機房，導入門檻低且具高度擴充彈性，特別適合中小企業穩健推動客服數位化與營運升級，強化整體競爭力。","contactPerson":"王商業發展總監/小姐","companyPhone":"02-7746-7115","contactEmail":"cindy.wang@innovax.com.sg","websiteUrl":"https://www.innovax.systems/tw/","specialPrice":"每席： 2,599元／月（未稅）\\n一次性設定費：6,000 元／席（未稅）\\n教育訓練 4 小時:：11,000 元（未稅）"},{"id":"AI智慧製造-1","category":"AI智慧製造","sequence":1,"companyName":"傑騰智能股份有限公司","companyShortName":"傑騰智能","solutionName":"企業專業文件查詢知識管理及專業圖形AI解析","manualUrl":"","imageFileName":"1.傑騰智能股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/1.傑騰智能股份有限公司.png","bannerFileExists":true,"solutionIntro":"iMap: 聚焦解決製造、電子與建築工程領域中 SVG 設計圖高度仰賴人工解析所造成的效率與成本問題，運用 AI 進行 SVG 圖形結構解析與語義理解，將向量圖形、圖層、標註與元件資訊自動轉換為製造與工程系統可用的指令與資料格式。\\niSpec:採用自有RAG架構，結合高精度語意、檢索與可控生成。支援多來源文件整合，依權限分庫檢索，具可信度與可驗證性。並能整合來源圖片輸出，較僅能純文字生成的模型生動易懂。\\n\\n新北專屬優惠：\\n1.給予新北廠商專屬最優惠價格\\n2.免費保固延長6個月\\n3.後續加購其他模組75折或最優惠價。","companyIntro":"傑騰智能（TAO Info）專注於大數據分析與人工智慧技術，深耕製造業資料分析領域，協助企業構建智慧化生態系統。公司通過自主研發的AI演算法與關鍵分析模組，優化商業決策、強化競爭優勢。自成立以來，多次獲政府與國際企業認可。近期聚焦解決製造、電子與建築工程領域中 SVG 設計圖高度仰賴人工解析所造成的效率與成本問題，運用 AI 進行 SVG 圖形結構解析與語義理解，將向量圖形、圖層、標註與元件資訊自動轉換為製造與工程系統可用的指令與資料格式。透過建立通用解析框架，可加速設計到生產流程，降低人工作業負擔，並將專業經驗內化為可重複使用的數位能力，協助產業提升自動化程度、良率與整體競爭力。","contactPerson":"周處長or張董事長","companyPhone":"02-27755275","contactEmail":"hsinhaochou@taoinfo.com.tw","websiteUrl":"","specialPrice":"100,000 元(未稅)"},{"id":"AI智慧製造-2","category":"AI智慧製造","sequence":2,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"AIWInOps—各產業應用的影像型AI訓練平台","manualUrl":"https://drive.google.com/file/d/10B6sT08o4nzTeJkoi8u290O3-5DmNdnT/view?usp=sharing","imageFileName":"2.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/2.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"AIWinOps 為一套簡單易用且功能完整之影像型 AI 訓練平台。透過逐步引導的網頁式操作介面，整合影像標註、資料處理與決策輔助工具，使用者無須撰寫程式，即可完成 AI 模型之訓練、驗證與部署。\\n憑藉慧穩科技多年實務落地經驗，AIWinOps 已成功應用於半導體高科技、環境與綠能、精密與傳統製造、智慧影像監控、生醫與農業，以及零售服務等多元產業，具備高度產業適用性與擴充性。\\n\\n系統特色說明：\\n一、 直觀且友善之操作介面\\n二、 完整且實用之影像分析工具\\n三、 強化效率之進階功能模組\\n四、可擴充之模型庫機制\\n\\n方案價格說明：\\n方案一、永久買斷 標準定價(不含電腦系統):\\n 1. 4 GPU全功能版: NT$ 1,440,000 \\n2. 雙GPU全功能版: NT$ 900,000 \\n3. 單GPU全功能版: NT$ 540,000  \\n\\n方案二、年授權 標準定價(不含電腦系統): \\n1. 4 GPU全功能版: NT$ 480,000 \\n2. 雙GPU全功能版: NT$ 300,000 \\n3. 單GPU全功能版: NT$ 180,000  \\n\\n可加購項目：\\n 一、資料科學家服務：提供專業建模、特徵與模型優化建議。 \\n二、模型授權(標準品):落地部署。標準定價(不含電腦系統): NT$ 120,000。 \\n三、買斷制軟體更新計價方式: (限遠端連線方式，如到場服務差旅費另計) \\n1.AIWinOps 單GPU: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NT$ 180,000，如版本差異小於一年每次NTD 90,000。 \\n2.AIWinOps 雙GPU: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NT$ 300,000，如版本差異小於一年每次NTD 150,000。 \\n3.AIWinOps 4GPU: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NT$ 480,000，如版本差異小於一年每次NTD 240,000。\\"\\n\\n新北專屬優惠：\\n方案一、永久買斷\\n一、 優惠折扣:9折\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。\\n三、 首年保障：內含首年保固與維護服務。\\n四、 服務內容:\\n1.產品保固：首年硬體/軟體保固。\\n2.版本更新：首年享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\n\\n方案二、年授權\\n一、優惠折扣:9折\\n二、模式說明：以年為單位支付訂閱費。訂閱期間即為保固期，享有免費軟體更新服務。\\n三、服務內容:\\n1.產品保固：訂閱期間內全程享有保固服務。\\n2.版本更新：訂閱期間持續享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525580","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"方案一、永久買斷：\\n4 GPU全功能版:：1,440,000 元\\n雙GPU全功能版：900,000 元\\n單GPU全功能版：540,000 元\\n\\n方案二、年授權： \\n4 GPU全功能版：480,000 元 \\n雙GPU全功能版：300,000 元 \\n單GPU全功能版：180,000 元"},{"id":"AI智慧製造-3","category":"AI智慧製造","sequence":3,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"NumOps－各產業應用的數據型AI訓練平台","manualUrl":"https://drive.google.com/file/d/1BBv2pjBxlt13DDLO0OIuakX21a18fx2Z/view?usp=sharing","imageFileName":"3.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/3.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"NumOps為慧穩科技融合式AI解決方案WinHub.AI旗下之通用數據型AI平台，採用網頁式操作介面，整合數學、統計與多元AI 演算法。平台結合AutoML、深度學習與專家系統等技術，使用者無須撰寫程式，即可快速建構專屬數據AI模型，並產出直觀之統計分析與視覺化圖表，作為決策支援依據。\\n\\n系統特色說明：\\n一、 直觀友善的操作介面\\n二、 完整且實用的數據分析工具\\n三、 專家系統：規則庫的產出與落地\\n四、 強化訓練成效的資料預處理機制\\n\\n方案價格說明：\\n方案一、永久買斷  \\n一、 標準定價(不含電腦系統)：NT$ 300,000\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。  \\n\\n方案二、年授權 \\n一、標準定價(不含電腦系統)：NT$ 100,000 \\n二、模式說明：以年為單位支付訂閱費。訂閱期間即為保固期，享有免費軟體更新服務。  \\n\\n可加購項目：\\n一、 資料科學家服務：提供專業建模、特徵與模型優化建議。 \\n二、 模型授權(標準品):落地部署。標準定價(不含電腦系統): NT$ 120,000。 \\n三、買斷制軟體更新計價方式: (限遠端連線方式，如到場服務差旅費另計) \\nNumOps: 第一年免費更新，第二年起以次計價，如版本差異超過一年每次NTD 100,000，如版本差異小於一年每次NTD 50,000。\\n\\n新北專屬優惠：\\n方案一、永久買斷\\n一、優惠折扣:9折\\n二、首年保障：內含首年保固與維護服務。\\n三、服務內容:\\n1.產品保固：首年硬體/軟體保固。\\n2.版本更新：首年享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\n\\n方案二、年授權\\n一、優惠折扣:9折\\n二、服務內容:\\n1.產品保固：訂閱期間內全程享有保固服務。\\n2.版本更新：訂閱期間持續享有週期半年一次的系統更新。\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\"","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525581","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"方案一、永久買斷：300,000 元\\n方案二、年授權：100,000 元"},{"id":"AI智慧製造-4","category":"AI智慧製造","sequence":4,"companyName":"慧穩科技股份有限公司","companyShortName":"慧穩科技","solutionName":"WinEdge－各產業應用的AI邊緣運算推論系統","manualUrl":"1. https://drive.google.com/file/d/1IcWZXD7-V9l_RMdwBChvp7JXlGLudoff/view?usp=drive_link　\\n2. https://drive.google.com/file/d/1b0lvq-wgzLTKSM64o-c7z8IC0ptc_HAi/view?usp=drive_link","imageFileName":"4.慧穩科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/4.慧穩科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"WinEdge 為慧穩科技推出之融合式邊緣運算AI推論系統，整合影像型與數據型AI推論能力，可搭配影像型AI模型訓練平台 AIWinOps 與數據型AI模型訓練平台NumOps，構成完整之 WinHub.AI人工智慧落地解決方案。\\n於產線、偏遠地區或對即時性與資訊安全要求較高之場域，WinEdge可於本地端穩定執行推論，無須倚賴雲端或網際網路，確保資料隱私與系統可靠性。系統並內建多元設備與資料介接之軟體開發套件，可加速系統整合與應用落地，協助各產業導入人工智慧，提升營運效率並推動產業升級。\\n\\n系統特色說明如下：\\n一、 直觀友善的操作介面\\n二、 多元的取像裝置支援\\n三、 靈活的部署選項\\n四、 實用的AI模型推論工具\\n五、 強大的影像處理功能\\n六、 建立與管理資料源\\n七、 即時更新\\n八、 智能化儀表板\\n九、 推論後處理與結果輸出\\n\\n方案價格說明：\\n永久買斷方案 標準定價(不含電腦系統)：NT$ 140,000\\n\\n新北專屬優惠：\\n一、 優惠折扣:9折\\n二、 模式說明：一次性支付授權費用，取得產品永久使用權。\\n三、 首年保障：內含首年保固與維護服務。\\n四、 服務內容:\\n1.產品保固：首年硬體/軟體保固。\\n2.版本更新：首年享有週期半年一次的系統更新\\n3.技術諮詢：8x5 (工作日) 專家諮詢。\\n4.模型授權(標準品):落地部署。","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","contactPerson":"黃小姐","companyPhone":"04-22525582","contactEmail":"tasha@aiwin.com.tw","websiteUrl":"https://aiwin.com.tw/","specialPrice":"永久買斷方案：140,000 元"},{"id":"AI智慧製造-5","category":"AI智慧製造","sequence":5,"companyName":"摩絡人工智慧股份有限公司","companyShortName":"摩絡人工智慧","solutionName":"Morale AI Agentic Platform 領域專用大型語言模型","manualUrl":"https://moraleai-my.sharepoint.com/:v:/p/kaophill/IQCsnGRH99SnQp1xqhUk9WmaAQXg7WSIy4wEfulKdmP7wwc?e=xcgOZJ","imageFileName":"5.摩絡人工智慧股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI智慧製造/5.摩絡人工智慧股份有限公司.png","bannerFileExists":true,"solutionIntro":"本方案採用 Morale AI 之領域專屬大型語言模型（Domain-Specific Large Language Model），結合 RAG（Retrieval-Augmented Generation）架構、向量資料庫與 AI Agent 技術，可從企業內部非結構與半結構資料中進行語意理解、知識整合與智慧決策輔助。\\n同時支援 Machine Learning Function Calling，可於推論過程中動態呼叫異常偵測、趨勢分析與預測模型，產出具行動性的Insights。\\n模型與系統安裝所在地：核心 LLM 推論服務、向量資料庫、AI Agent 服務與相關應用系統，皆部署於台智雲。\\n\\n新北專屬優惠方案：\\n1.延長保固1個月（1個月>2個月）\\n2.提供新北市企業額外兩次教育訓練（每次1-2小時）","companyIntro":"Morale AI 建構專為智慧製造打造的領域專屬 AI Agent 平台，提供可擴展、可解釋且可落地的決策支援能力。Morale AI platform以領域專用 LLM 結合機器學習與資料科學，串接 MES/ERP/設備與品質資料，打造可稽核、可解釋的 Agent 工作流；提供異常預警、良率分析、製程最佳化與節能減廢決策支援，支援 On-prem / Cloud / Hybrid 快速部署。","contactPerson":"李小姐","companyPhone":"03-5320278","contactEmail":"service@moraleai.com","websiteUrl":"https://moraleai.com/","specialPrice":"POC 概念驗證方案：60萬 - 100萬元（未稅） \\n中小型 Production 方案：80萬 - 250萬元（未稅）"},{"id":"AI資訊安全-1","category":"AI資訊安全","sequence":1,"companyName":"艾比互動娛樂有限公司","companyShortName":"艾比互動娛樂","solutionName":"SOC.cool AI資安防護企業包 - 新北產業AI化輔導計畫限定版","manualUrl":"https://soc.cool","imageFileName":"1.艾比互動娛樂有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI資訊安全/1.艾比互動娛樂有限公司.png","bannerFileExists":true,"solutionIntro":"SOC.cool 是專為中小企業設計的 AI 資安防護平台，整合 SIEM 日誌管理與 SOAR 自動化響應，以 AI 驅動的威脅偵測引擎（Transformer 架構，準確率達 99.2%）即時識別網路攻擊、異常行為及內部威脅。\\n平台提供 3D 威脅視覺化儀表板、20+ 自動回應 Playbook 劇本、惡意 IP 自動阻斷、感染設備即時隔離、MITRE ATT&CK 框架對映等完整功能，並支援 LINE/Telegram/Email 多通道即時告警通知。\\n本方案為新北企業專屬 65 折優惠（原價 NT$136,200，優惠價 NT$88,000），涵蓋 5 台設備一年期授權，加碼贈送價值 NT$40,000 的遠端導入、資安健診報告及教育訓練。免安裝硬體，雲端即開即用，大幅降低中小企業資安防護門檻。\\n\\n新北專屬優惠：\\n1. 65折限定優惠：原價NT$136,200，優惠價NT$88,000（節省NT$48,200）\\n2. 免費遠端導入服務（市價NT$20,000）\\n3. 免費資安健診報告乙份（市價NT$15,000）\\n4. 免費線上教育訓練2小時（市價NT$5,000）\\n5. 保固12個月：免費軟體更新、版本升級、威脅情報每日自動更新\\n6. 加購項目享新北專屬75折優惠\\n7. 贈送總價值NT$40,000，方案總價值高達NT$176,200","companyIntro":"艾比互動娛樂有限公司 致力於用 AI 讓每家企業都能擁有世界級的資安防護能力。\\n我們的核心產品 SOC.cool 是一套 AI 驅動的資安監控平台，讓企業無需自建 SOC 團隊，即可擁有 24/7 全天候威脅偵測與自動化回應能力。\\n解決三大痛點：\\n- 資安人才難尋：AI 自動分析告警、研判風險並執行回應劇本，大幅降低對專業資安人力的依賴，1 人即可掌控全局\\n- 預算有限效益要最大：以 SaaS 訂閱制取代高額自建方案，將資源集中在核心業務發展，資安交給 AI 守護\\n- 合規要求日益嚴格：內建 ISO 27001、SOC 2 等合規報告模板，一鍵產出稽核文件，從容應對客戶與法規要求\\n平台支援 Windows、Linux、macOS 全平台，10 分鐘內完成部署即開始防護。同時提供經銷夥伴架構，IT 服務商可快速以自有品牌為客戶提供託管式資安服務（MSSP）。\\n 讓每家企業都能用 AI 守護數位資產，是我們的使命。","contactPerson":"陳先生","companyPhone":"02-26755580","contactEmail":"service@abbey-tech.com","websiteUrl":"https://soc.cool/","specialPrice":"88,000元（含稅）"},{"id":"AI資訊安全-2","category":"AI資訊安全","sequence":2,"companyName":"華苓科技股份有限公司","companyShortName":"華苓科技","solutionName":"Secorion 資安獵捕平台","manualUrl":"https://youtu.be/6x_zzGSflb4?si=OpEUGBGGmJ3LockB","imageFileName":"2.華苓科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI資訊安全/2.華苓科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"Secorion是新一代網路檢測和響應(NDR)解決方案，以Security(資安)與Orion(獵戶座)為結合體，象徵前所未有的威脅獵捕性能。Secorion具備高效能防護主機，搭配全球情資更新、高階獵捕引擎、區塊鏈存證、全視覺化管理，提供早期預警及異常行為防堵，是企業面對資料外洩、勒索病毒、設備入侵等資安事件猖獗下的黃金防線。\\n\\n新北專屬優惠：\\n保固期程：1年\\n方案內容：新一代網路檢測和響應(NDR)：全球威脅情資防護網、視覺化分析戰情室、AI智能獵捕分析、Wi-Fi路由器一台","companyIntro":"華苓科技成立於1999年，為中大型商務軟體公司，以企業流程管理系統著稱，面對大數據、社群、人工智能、雲計算、移動裝置、物聯網、區塊鏈等數位科技共同將世界推向工業4.0與數位經濟時代。華苓遂以「賦能智慧、願景無限」為願景，推出「智慧系統」以達成融合數位科技與人、系統、智能物件的萬物協同，賦與企業轉型能力以取得競爭優勢。","contactPerson":"馬經理","companyPhone":"(03) 5753331","contactEmail":"media@flowring.com","websiteUrl":"https://www.flowring.com/","specialPrice":"200,000元（含稅）"},{"id":"AI資訊安全-3","category":"AI資訊安全","sequence":3,"companyName":"極風雲創股份有限公司","companyShortName":"極風雲創","solutionName":"Across智能資安維運管理平台","manualUrl":"","imageFileName":"3.極風雲創股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI資訊安全/3.極風雲創股份有限公司.png","bannerFileExists":true,"solutionIntro":"標準版 提供AIS(AI Secutity)基礎防禦，資安 Dashboad、Data Lake(資料收容)，並提供資安事件分析與告警，AI Chat & KM 以及AIG(AI Governance)基礎管理，提供AI 模型使用分析儀表板、模型權限控制、虛擬金鑰管理、自動遮蔽個資。\\n\\n方案價格說明：\\n10萬/月，需簽2年合約(共240萬)，年繳9折=108萬+108萬＝216萬（含稅）\\n\\n新北專屬優惠：\\n1. 2年合約(共240萬)，一次付清，提供8折優惠=192萬（含稅）\\n2. 啟用後一季內，可執行免費教育訓練乙次","companyIntro":"極風雲創 Twister5 (股票代碼 7826 )，是 AI 驅動的全域安全與 AI 治理平台供應商，專注協助企業在雲端與生成式 AI 時代，建立安全、可控且可持續的防護架構。\\n我們結合國際頂尖資安品牌（如 Cloudflare、Cato Networks、Palo Alto Networks）與自研平台 Across，為企業提供從網路、應用到 AI 使用層的整合式全域安全解決方案。","contactPerson":"詹詮斌 先生","companyPhone":"02 89798887","contactEmail":"champion.chan@twister5.com.tw","websiteUrl":"https://www.twister5.com.tw/","specialPrice":"216萬元（含稅）"},{"id":"AI營運流程自動化-1","category":"AI營運流程自動化","sequence":1,"companyName":"卡菲卡金融科技股份有限公司","companyShortName":"卡菲卡金融科技","solutionName":"新北企業淨零智能會計賦能專案","manualUrl":"https://www.youtube.com/watch?v=ybzMzaD74gs\\nhttps://www.youtube.com/watch?v=Nt_HvFha-rA\\nhttps://www.youtube.com/watch?v=2tuKxQIkh2Q,\\nhttps://www.youtube.com/watch?v=JaMhpQ0CnoU\\nhttps://www.youtube.com/watch?v=GXoTiXkIZdc","imageFileName":"1.卡菲卡金融科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/1.卡菲卡金融科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"卡菲卡金融科技響應永續趨勢，專為新北市企業推出「新北淨零智匯：企業碳會計數位轉型專案」 。本專案核心技術透過 AI 碳預測模型 與 AI-OCR 引擎，首創財務—碳排雙軌自動記帳技術，將繁瑣的數據採集與勾稽自動化，讓企業透過人工智能技術從傳統的事後盤查轉向事前精算的戰略轉型 。\\n\\n透過人工智能模型「費思」精準核算，協助企業達成「自主減量計畫目標 A」，可將碳費負擔從每噸 300 元降至 50 元地板價，減免幅度最高可達 83%，建立碳管理標竿的絕對優勢。\\n\\n新北專屬優惠：\\n1. 提供額外 1 名操作用戶授權\\n2. 加贈智能憑證辨識服務一年授權\\n3. 加贈溫室氣體核算服務一年授權\\n4. 加贈 1 場次 6 人以下 2 小時教育訓練","companyIntro":"卡菲卡金融科技致力於驅動企業的「智能」與「綠色」雙軸轉型。我們自主研發的 AI 模型「費思」，深度整合財務審計的嚴謹性與環境工程邏輯，是業界領先的綠色金融智慧核心。\\n\\n透過 AI 自動化識別與分類，費思能精確勾稽企業每一筆財務支出與其對應的碳足跡，打破資訊孤島，讓財務報表與減碳績效實現無縫接軌。這不僅大幅提升了溫室氣體盤查的效率，更能協助企業精準預測並節約碳費支出。\\n\\n我們不只是技術提供者，更是企業邁向淨零碳排最值得信賴的策略夥伴。從智慧審計到淨零輔導，卡菲卡協助您將複雜的環境數據轉化為實質的競爭優勢，讓永續經營成為企業獲利的嶄新動力。","contactPerson":"鄒永煒","companyPhone":"02-25466225","contactEmail":"contact@isunfa.com","websiteUrl":"https://isunfa.com","specialPrice":"239,400 元（含稅）"},{"id":"AI營運流程自動化-2","category":"AI營運流程自動化","sequence":2,"companyName":"拉普拉斯智能科技股份有限公司","companyShortName":"拉普拉斯智能科技","solutionName":"Akashic 多代理 AI 平台","manualUrl":"https://drive.google.com/file/d/1YlQ4C16m5gzva6Cldx2-N1oDEmSlprPf/view?usp=drive_link","imageFileName":"2.拉普拉斯智能科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/2.拉普拉斯智能科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"拉普拉斯智能科技推出 Akashic 多代理 AI 平台，整合 多代理協作與可治理的知識管理能力，打造高效率、可擴充的智慧內容工作流。平台以角色化 AI Agent 搭配知識庫，支援跨情境問答、多步驟推論、資訊整理與流程引導，並提供引用與歷程紀錄，讓回應更可靠、可追溯。透過可版控的報告模板與直覺化流程，從需求輸入到資料整理、撰寫、校稿、排版與圖表生成皆可自動化，快速產出一致且高品質的文件、報告與摘要；同時支援多來源資料匯入與跨系統整合，從個人筆記到組織級知識中台都能自由延展。\\n\\n新北專屬優惠：\\n一、方案與價格折扣（未稅；5%營業稅另計）\\nA. 1年授權（純軟體）新北特惠：授權費 NTD 135,000（9折）；建置費 NTD 0（原 NTD 50,000 全免）；合計 NTD 135,000。\\nB. 2年授權優惠 新北特惠：授權費 NTD 180,000；建置費 NTD 0（原 NTD 50,000 全免）；合計 NTD 180,000。\\nC. 含機器/硬體如適用：平台授權依A之特惠價；硬體依需求另議，硬體保固依原廠；另提供硬體整合/上架作業服務費95折（上限折抵 NTD 20,000）。\\n\\n二、保固與維護加碼\\n標準：合約範圍內一年免費維護（含錯誤修復與版本更新）。\\n新北加碼：免費維護延長至18個月（加贈6個月），必要時提供處置方案與時程。\\n\\n三、免費加值（新北限定）\\n1) 免費試用45天（含線上導入顧問1次/2小時）\\n2) 線上教育訓練2場（每場2小時，含教材與Q&A）\\n3) 免費協助建立可治理模板3組（報告/會議紀錄/企劃書擇三）\\n\\n四、加購方案折扣（未稅；5%營業稅另計；新北85折）\\n1) 額外工作區（含獨立知識庫/權限）：原 NTD 6,000/組/月。\\n2) 系統串接：原 NTD 60,000/項。\\n3) 客製化模板（超出免費3組）：原 NTD 8,000/組。","companyIntro":"拉普拉斯智能科技推出 Akashic 多代理 AI 平台，結合通用報告生成、AI 助理與可治理的知識管理能力，為用戶提供高效率且可擴充的智慧內容工作流。平台透過可治理模板引擎、多代理協作與跨系統整合，協助快速產出高品質報告並提升作業效率，支援從日常到專業場景的多元應用。","contactPerson":"林先生","companyPhone":"0982163003","contactEmail":"minggatsby@laplaceai.co","websiteUrl":"https://www.laplaceai.co/","specialPrice":"135000 元（未稅）"},{"id":"AI營運流程自動化-3","category":"AI營運流程自動化","sequence":3,"companyName":"虎智科技股份有限公司","companyShortName":"虎智科技","solutionName":"以 n8n 打造 AI 智能助理-導入 no code 自動化流程運用","manualUrl":"","imageFileName":"3.虎智科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/3.虎智科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"地端AI Server租用\\n1.AI設備維護委外，AI運用不斷線\\n2.花較低的費用，使用較高等級的AI Server\\n3.協助安裝地端OpenwebUI+n8n+向量資料庫\\n4.透過開源程式運用AI，不受token的限制。\\n5.全地端運用AI，機密資料不外流。\\n\\n方案價格說明：\\nAI Sever 租用，每月1萬，年租12萬。\\n\\n新北專屬優惠：\\n1.新北優惠10萬元 （含稅）\\n2.第二年續約價6,000 （含稅）\\n3.連租2年送2T SSD。","companyIntro":"虎智科技經校內創業比賽第一名為臺科大傑出校友聯誼會攜手創新育成中心， 投資成立的創業團隊。以協助任何公司都可以輕鬆導入人工智慧。\\n致力以博碩士專業團隊、結盟傑出校友資源、臺科大教授顧問研發資源三大優勢發展 Local GPT 硬體導入、 AI 服務啟動、GPU 服務器資源管理，協助產業從教育訓練開始、評估／導入 AI 產業解決方案、資訊安全，確保 AI 綜效最大化與成功。","contactPerson":"AI導入顧問","companyPhone":"02-66058192","contactEmail":"tiger.ai.tw2024@gmail.com","websiteUrl":"https://www.tigerai.info/","specialPrice":"10萬元／年（含稅）"},{"id":"AI營運流程自動化-4","category":"AI營運流程自動化","sequence":4,"companyName":"凱鈿行動科技股份有限公司","companyShortName":"凱鈿行動科技","solutionName":"Intelligence Document Processing(IDP)","manualUrl":"https://www.youtube.com/watch?v=xbeH2ISVlME","imageFileName":"4.凱鈿行動科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/4.凱鈿行動科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"IDP 智慧文件處理平台，以人工智慧技術為核心，針對政府機關及企業在大量文件處理、資料整合與知識應用上所面臨之痛點，提供自動化、高準確度且具擴充性的解決方案。透過智慧文件解析、關鍵資訊抽取與知識庫建構，協助使用單位有效降低人工作業成本、提升資料品質與作業效率，並強化後續資料分析與決策支援能力。\\n\\n方案價格說明：\\n每十萬頁原價 NT$100,000(未稅)        \\n新北方案優惠價 8 折","companyIntro":"KDAN（凱鈿）是數位賦能的領導品牌，專注於提升企業跨平台文件交流效率，推動數據驅動決策，打造無縫接軌的工作流程體驗，並提供多元化的私有化部署服務，強化企業敏捷性，釋放無限商機。","contactPerson":"劉經理","companyPhone":"06-3131660","contactEmail":"ntcp-ai-plan-service-provider@kdanmobile.com","websiteUrl":"https://www.kdan.com/","specialPrice":"80,000元／十萬頁（未稅）"},{"id":"AI營運流程自動化-5","category":"AI營運流程自動化","sequence":5,"companyName":"肆時資訊設計有限公司","companyShortName":"肆時資訊設計","solutionName":"車輛產業AI店面管理解決方案","manualUrl":"https://youtu.be/QuVRn0qcO4Q?si=lZezq1LblhO9dcDY","imageFileName":"5.肆時資訊設計有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/5.肆時資訊設計有限公司.jpg","bannerFileExists":true,"solutionIntro":"ReMo 以雲端架構打造「車輛數據一站式服務平台」，核心功能包含： \\n一、        車輛查詢：輸入車牌號碼即可即時查詢。 \\n二、        履歷查詢：快速取得完整維修紀錄，並可列表瀏覽。 \\n三、        AI 行照辨識：透過拍照上傳，自動辨識文字資訊。 \\n四、        AI 車況報告：由歷史維修紀錄推算並產出智能車況報告。 \\n五、        強制險查詢：整合保險模組，輸入車牌與身分資訊即可查詢保單狀態。\\n\\n方案價格說明：\\n系統原訂價：NT$ 100,199/年，新北市專屬優惠價：NT$ 80,199／年（含稅） （另加碼贈送12個月使用期限）\\n\\n【本計畫專屬優惠內容】\\n\\n🔹 加碼多送 1 年系統使用期限（同優惠價格享更長服務期間）\\n🔹 免收一次性系統導入與設定費\\n🔹 AI 分析模組免費納入（無須額外加購）\\n🔹 提供完整系統功能，不限基本使用次數\\n\\n【系統保固與維運】\\n\\n🔹 上線日起 24 個月完整系統保固(可依實際營運需求彈性運用維運服務)\\n🔹 功能異常修復與錯誤排除\\n🔹 AI 模組穩定度維護\\n🔹 雲端可用性與效能優化\\n🔹 版本更新與必要資安修補\\n\\n【技術支援】\\n\\n🔹 上班時段線上技術支援\\n🔹 遠端協助與問題排除\\n\\n【延伸優惠】\\n\\n🔹 免費提供 1 場 AI 教育訓練課程\\n\\n【其他專屬保障】\\n\\n🔹 雲端架構，免額外硬體投資\\n🔹 享後續功能升級與模組擴充優先優惠\\n🔹 限新北市參與本計畫業者適用\\n🔹 不影響原有系統功能與服務品質","companyIntro":"肆時資訊設計有限公司自2019年成立以來，以資訊×服務設計為核心，專注於創新車輛產業數位管理，ReMo瑞摩智能雲端管理系統，結合工單數位化、顧客互動、法規遵循與供應鏈整合，打造全方位智慧生態系，協助機車行突破營運瓶頸，邁向數據化決策。公司具備豐富專案能量，曾執行深度高雄機車智慧產業整合計畫、數位雲服務研發補助計畫等，已推廣超過千家車行完成數位化導入，並導入 AI 技術提升維修管理效率。\\n在成果驗證上，榮獲交通部公路局第一屆資料創新應用競賽社會組創新獎；並受邀參與2024 Meet Taipei、2025國際中小企業博覽會、2025高雄智慧城市展等指標性展會。肆時資訊將持續以「降低導入門檻、放大工具槓桿、累積數據價值」為方向。","contactPerson":"簡小姐","companyPhone":"04-37071383#1205","contactEmail":"services@remo.tw","websiteUrl":"https://remo.tw/","specialPrice":"80,199 元／年（含稅）"},{"id":"AI營運流程自動化-6","category":"AI營運流程自動化","sequence":6,"companyName":"詮通電腦有限公司","companyShortName":"詮通電腦","solutionName":"Ai網路開店+雲端POS+蝦皮整合+進銷存整合方案","manualUrl":"https://www.youtube.com/watch?v=hqt_TiJAroQ&list=PLnSsaZeef6-WAfHG6NcxLPJgLvhTMRFLT","imageFileName":"6.詮通電腦有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/6.詮通電腦有限公司.png","bannerFileExists":true,"solutionIntro":"錢老闆雲端是為小微企業變得更強大而生的雲端管理平台，致力於解決老闆在經營過程中常見的混亂與不確定。從訂單、庫存到帳務，將分散的資訊整合在同一系統中，讓企業營運變得清楚、有序，不再依賴人工整理與經驗判斷。\\n\\n透過錢老闆雲端，企業可以即時掌握銷售狀況、庫存變化與營收成果，減少重複作業與人為錯誤。直覺化的操作設計，讓沒有技術背景的使用者也能快速上手，將時間從繁瑣管理中釋放，專注在業務與成長機會上。\\n\\n錢老闆雲端不只是工具，更是企業成長的基礎。它幫助小微企業建立清晰的營運流程，用數據支持決策，讓每一位努力經營的老闆，都能更安心經營事業迎接未來。\\n\\n方案價格說明：新臺幣35,000元(含稅)/6個月/5人版\\n新北專屬優惠價格：新臺幣63,000元(含稅)/12個月/5人版","companyIntro":"詮通電腦創立於2002年，深耕企業服務二十載，以深厚研發底蘊打造錢老闆雲端平台。「錢老闆」將系統轉化為您的「數位員工」，已協助數百家中小企業整合線上Ai網路開店、批發訂貨、門市POS系統，蝦皮電商整合，實現進銷存數據一站式管理，成功打通O2O銷售模式。\\n讓您在單一平台掌握各方銷售與即時庫存，徹底告別資訊破碎與混亂的理帳痛點。不只是處理訂單，這位員工更擅長財務管理，並自動為您整理應收付帳款核銷。並即時產出損益報表，讓您隨時掌握獲利狀況，進而透過數據做出精準決策。","contactPerson":"劉先生","companyPhone":"04-22370296","contactEmail":"service@moneyboss.com.tw","websiteUrl":"https://www.moneyboss.com.tw/","specialPrice":"63,000 元／12個月（含稅）"},{"id":"AI營運流程自動化-7","category":"AI營運流程自動化","sequence":7,"companyName":"睿力智能運動有限公司","companyShortName":"睿力智能運動","solutionName":"企業AI行銷獲客一站式解決方案","manualUrl":"","imageFileName":"7.睿力智能運動有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/7.睿力智能運動有限公司.png","bannerFileExists":true,"solutionIntro":"本方案整合最新人工智慧與自動化工具，為企業打造一站式智能行銷方案。系\\n統核心採用大型語言模型，能根據品牌調性、產品特色與目標客群，自動生成\\n專業且具吸引力的行銷文案。\\n系統最大亮點在於「全通路整合發佈」：只需一次操作，即可同步內容至\\nFacebook、Instagram、X、LinkedIn 等平台，並自動更新 WordPress 官網與優化\\nSEO。內建預約排程功能，可預先規劃長達一個月的內容，確保系統在最佳時段\\n自動發佈，極大化觸及率。\\n在效率提升方面，系統將原需 2 到 3 小時的產製流程縮短至 10 分鐘內，並實\\n現 24 小時不間斷運作。導入本系統能有效取代聘請專員或外包設計的成本，\\n讓企業將資源專注於高價值的策略規劃與客戶維護，同時降低廣告支出，提升\\n自然流量與開發效率。\\n\\n新北專屬優惠：\\n1. 企業AI行銷獲客一站式解決方案，新北企業專屬年約方案僅需 40,000 元（未\\n稅），相當於每月不到5,000元，比聘請一個正式員工的勞健保、勞退的費用還\\n要低。此方案為年繳，包含 AI 文案與圖片自動生成、多平台一鍵發佈\\n（Facebook、Instagram、X、Threads、LinkedIn、WordPress）、預約排程功能、成效\\n追蹤、系統教育訓練及線上技術支援。\\n2. 本方案期間享有完整保固服務，包含系統完整功能、免費軟體更新、技術問\\n題即時排除與免費教育訓練。","companyIntro":"睿力智能運動（ATTRAKFIT）深耕智慧運動科技，結合 IoT 與自動阻力演算法，推出智慧訓練車、外掛式虛擬騎乘升級模組、力量感測踏板等，協助家用與健身房精準化訓練。我們致力於讓運動科學與娛樂體驗無縫接軌，不僅提供硬體方案，更透過 AI 技術驅動數位轉型。\\n\\n在拓展業務過程中，我們深刻體會到產業的共同痛點：無論是通路商或製造商，都專注於產品銷售與製造本業，對於行銷推廣感到力不從心——聘請專職行銷人員成本高昂，外包又難以掌控品質，社群經營更是耗時費力。因此我們導入 AI 自動化行銷技術，不僅解決自身需求，更將這套系統服務化，協助同業夥伴以更低成本、更高效率進行多通路行銷與客戶開發。","contactPerson":"邱執行長","companyPhone":"02-66272829","contactEmail":"ceo@attrakfit.com","websiteUrl":"attrakfit.com","specialPrice":"40,000 元／年（未稅）"},{"id":"AI營運流程自動化-8","category":"AI營運流程自動化","sequence":8,"companyName":"數辰創藝科技股份有限公司","companyShortName":"數辰創藝科技","solutionName":"TeamSync 企業AI 協作作業系統方案","manualUrl":"","imageFileName":"8.數辰創藝科技股份有限公司.png","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/8.數辰創藝科技股份有限公司.png","bannerFileExists":true,"solutionIntro":"方案 A｜入門試行（建議 1 個部門/流程）    \\n1.系統環境開通與帳號權限建置\\n2.5組AI-AGENT群組/聊天室架構建立（公司/部門/專案）\\n3.基礎教育訓練（2 小時）\\n4.基礎知識庫建置指引（企業可自行上傳）\\n5.上線陪跑與問題排除（新北專案加值）\\n\\n新北專屬優惠：\\n1.加贈 1 個月導入陪跑支援\\n2.問題優先處理通道\\"\\n\\n方案 B｜標準導入（跨 2–3 部門）\\n包含內容（除 方案A 外加）：\\n1.DCC知識庫管理分類/標籤規劃與模板提供\\n2.AI 助理基本設定（口吻、回答規則、引用來源設定）\\n3.1 條核心流程「任務化」示範建置（例：會議待辦追蹤/門市回報/客訴處理）\\n4.5組AI-AGENT群組/聊天室架構建立\\n\\n新北專屬優惠：\\n1.加贈 1 個月導入陪跑支援\\n2.問題優先處理通道\\"\\n\\n方案 C｜進階整合（全公司擴大 + 系統串接）\\n包含內容（除方案 B 外加）：\\n1.既有系統整合（RPA/匯入匯出/或 API 串接擇一或混合）\\n2.成效KPI追蹤與改善建議報告（每月/每季）\\n3.共30組AI-AGENT群組/聊天室架構建立\\n4.獨立APP使用介面\\n\\n新北專屬優惠：\\n1.加贈 1 個月導入陪跑支援\\n2.問題優先處理通道","companyIntro":"數辰專注於 AI 軟體開發與數位解決方案，致力於為企業打造更高效、更智能的營運模式。我們的TeamSync 企業智能協作平台，結合 AI 聊天室與知識管理系統，重塑內部溝通模式，讓資訊流動更順暢、員工訓練更高效。我們亦運用 AI 技術精準鎮定目標客群，結合短影音、社群行銷與數位廣告代操，為品牌量身打造高效的市場拓展策略。透過 AI 創新與數據驅動的行銷策略，我們助力企業在競爭激烈的市場中脫穎而出。","contactPerson":"張小姐","companyPhone":"02-7748-0805","contactEmail":"zoey@shuchenai.com","websiteUrl":"https://shuchenai.com/","specialPrice":"方案 A｜入門試行：\\n● 建置/導入費：60,000 元\\n● 授權/訂閱費：65,000 元／年  \\n\\n方案 B｜標準導入：\\n● 建置/導入費：120,000 元  \\n● 授權/訂閱費：130,000 元／年      \\n\\n方案 C｜進階整合：\\n● 建置/導入費：250,000 元起（依整合範圍調整） \\n● 授權/訂閱費：270,000 元／年"},{"id":"AI營運流程自動化-9","category":"AI營運流程自動化","sequence":9,"companyName":"璽樂科技股份有限公司","companyShortName":"璽樂科技","solutionName":"AI影像缺失辨識與報告自動化方案","manualUrl":"https://youtu.be/Hr-x2ZjlRts","imageFileName":"9.璽樂科技股份有限公司.jpg","bannerAssetKey":"/src/assets/solutions/banner/AI營運流程自動化/9.璽樂科技股份有限公司.jpg","bannerFileExists":true,"solutionIntro":"本方案提供「AI影像缺失辨識與PDF報告自動化生成」一站式流程，支援單張照片與即時攝影機截圖作為輸入，AI可自動偵測影像中的缺失/異常項目，並以框選或熱區方式標註缺失位置，同時辨識同一張圖的多處缺失，讓現場問題一目了然。系統內建提示詞（Prompt）與報告撰寫邏輯，可自動產出缺失描述、風險說明與改善建議，使用者亦可依實際狀況再次編輯修正，確保內容符合現場與公司用語。報告部分可學習既有格式與欄位需求，將影像標註、缺失清單與建議措施自動整合，一鍵輸出標準化PDF報告，便於巡檢、驗收、品檢與稽核留存，大幅降低人工判讀與排版時間，提升報告一致性與交付效率。\\n\\n方案價格說明：\\n12個月方案$NT 137000(未稅) 加贈移動式攝影機\\n • 內含額度：每月 300 次影像分析 + 300 份PDF報告輸出\\n • 額度說明： \\n　o 1 次分析＝1 張影像辨識（照片/截圖） \\n　o 1 份報告＝1 次PDF輸出（含標註影像＋缺失清單＋建議）\\n\\n新北專屬優惠：\\n方案保固/維護（含於年費）\\n•        保固期間：訂閱期間內（持續有效）\\n•        維護內容：\\n1.系統功能異常修復（非人為/非第三方因素）\\n2.PDF輸出失敗/格式跑版的排除（在既定模板範圍內）\\n3.服務可用性與例行更新（不影響既有資料）\\n•        支援回覆：\\n1.一般問題：1 個工作日內回覆\\n2.重大故障（無法分析/無法輸出）：4 小時內回覆（工作時段：週一至週五09：00～18：00,不含國定假日）","companyIntro":"璽樂科技專注營建與公共工程場域，提供結合 AI 影像、IoT 感測與雲端管理的一站式智慧工安平台。系統涵蓋人員出入、危險區域管制、環境監測、異常警示與影像留存等功能，以模組化設計對應不同規模工地，並支援多工地雲端監控與權限管理，讓總公司可即時掌握各工地風險與狀態，同時自動產出符合金安獎、金質獎與勞檢需求的報表，降低人工整理成本。","contactPerson":"廖先生/李先生","companyPhone":"02-87515266","contactEmail":"james.liao@i-daka.com / iglee@i-daka.com","websiteUrl":"https://idaka.io/","specialPrice":"137,000元／12個月（未稅）"}]`),fs=[{label:"AI市場洞察",slug:"ai-market-insight"},{label:"AI企業營運管理",slug:"ai-enterprise-operations"},{label:"AI助理",slug:"ai-assistant"},{label:"AI垂直整合方案",slug:"ai-vertical-integration"},{label:"AI居家照護",slug:"ai-home-care"},{label:"AI創作內容",slug:"ai-content-creation"},{label:"AI智能客服",slug:"ai-intelligent-customer-service"},{label:"AI智慧製造",slug:"ai-smart-manufacturing"},{label:"AI資訊安全",slug:"ai-information-security"},{label:"AI營運流程自動化",slug:"ai-operation-automation"}],$m=Object.assign({"/src/assets/solutions/banner/AI企業營運管理/1.元盛生醫電子股份有限公司.png":kf,"/src/assets/solutions/banner/AI企業營運管理/10.臺灣通用紡織科技股份有限公司.png":Tf,"/src/assets/solutions/banner/AI企業營運管理/11.慧穩科技股份有限公司.png":Ff,"/src/assets/solutions/banner/AI企業營運管理/12.曜夆科技股份有限公司.png":Df,"/src/assets/solutions/banner/AI企業營運管理/13.璽樂科技股份有限公司.jpg":Mf,"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司-1.png":Of,"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司-2png.png":$f,"/src/assets/solutions/banner/AI企業營運管理/2.台聚管理顧問股份有限公司.png":Rf,"/src/assets/solutions/banner/AI企業營運管理/3.有創科技股份有限公司.jpg":Lf,"/src/assets/solutions/banner/AI企業營運管理/4.背景模式股份有限公司.png":Uf,"/src/assets/solutions/banner/AI企業營運管理/5.滿拓科技股份有限公司.png":Vf,"/src/assets/solutions/banner/AI企業營運管理/6.睿思創新股份有限公司.png":jf,"/src/assets/solutions/banner/AI企業營運管理/7.睿思創新股份有限公司.png":qf,"/src/assets/solutions/banner/AI企業營運管理/8.網際智慧股份有限公司.png":Hf,"/src/assets/solutions/banner/AI企業營運管理/9.聚典資訊股份有限公司.png":Gf,"/src/assets/solutions/banner/AI創作內容/1.大數軟體有限公司.png":Wf,"/src/assets/solutions/banner/AI創作內容/2.漫話科技股份有限公司.png":Kf,"/src/assets/solutions/banner/AI創作內容/3.網際智慧股份有限公司.png":zf,"/src/assets/solutions/banner/AI助理/1.大數軟體有限公司.png":Xf,"/src/assets/solutions/banner/AI助理/2.易晨智能股份有限公司.png":Yf,"/src/assets/solutions/banner/AI助理/3.創造智能科技股份有限公司.jpg":Qf,"/src/assets/solutions/banner/AI助理/4.緯謙科技股份有限公司.jpg":Jf,"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司-1.png":Zf,"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司-2.png":em,"/src/assets/solutions/banner/AI助理/5.環球睿視股份有限公司.png":tm,"/src/assets/solutions/banner/AI垂直整合方案/1.艾利思科技股份有限公司.png":nm,"/src/assets/solutions/banner/AI垂直整合方案/2.城智科技股份有限公司.png":om,"/src/assets/solutions/banner/AI垂直整合方案/3.訊連科技股份有限公司.png":sm,"/src/assets/solutions/banner/AI垂直整合方案/4.雲義科技股份有限公司.jpg":im,"/src/assets/solutions/banner/AI垂直整合方案/5.睿思創新股份有限公司.png":am,"/src/assets/solutions/banner/AI居家照護/1.凌松科技有限公司.jpg":rm,"/src/assets/solutions/banner/AI居家照護/2.健康盟股份有限公司.png":lm,"/src/assets/solutions/banner/AI居家照護/3.開源智造股份有限公司.jpg":cm,"/src/assets/solutions/banner/AI市場洞察/1.大數軟體有限公司.png":um,"/src/assets/solutions/banner/AI市場洞察/2.用益網路科技股份有限公司.jpg":dm,"/src/assets/solutions/banner/AI市場洞察/3.團薦科技股份有限公司.jpg":pm,"/src/assets/solutions/banner/AI市場洞察/4.麟數據科技股份有限公司.png":fm,"/src/assets/solutions/banner/AI智慧製造/1.傑騰智能股份有限公司.png":mm,"/src/assets/solutions/banner/AI智慧製造/2.慧穩科技股份有限公司.png":hm,"/src/assets/solutions/banner/AI智慧製造/3.慧穩科技股份有限公司.png":gm,"/src/assets/solutions/banner/AI智慧製造/4.慧穩科技股份有限公司.png":wm,"/src/assets/solutions/banner/AI智慧製造/5.摩絡人工智慧股份有限公司.png":Am,"/src/assets/solutions/banner/AI智能客服/1.亞博福爾摩沙有限公司.jpeg":bm,"/src/assets/solutions/banner/AI智能客服/2.亞博福爾摩沙有限公司.jpg":ym,"/src/assets/solutions/banner/AI智能客服/3.社群洞察股份有限公司.jpg":vm,"/src/assets/solutions/banner/AI智能客服/4.凌典科技有限公司.png":Em,"/src/assets/solutions/banner/AI智能客服/5.創造智能科技股份有限公司.png":Im,"/src/assets/solutions/banner/AI智能客服/6.穎諾科技股份有限公司.jpg":_m,"/src/assets/solutions/banner/AI營運流程自動化/1.卡菲卡金融科技股份有限公司.png":xm,"/src/assets/solutions/banner/AI營運流程自動化/2.拉普拉斯智能科技股份有限公司.png":Cm,"/src/assets/solutions/banner/AI營運流程自動化/3.虎智科技股份有限公司.png":Bm,"/src/assets/solutions/banner/AI營運流程自動化/4.凱鈿行動科技股份有限公司.png":Sm,"/src/assets/solutions/banner/AI營運流程自動化/5.肆時資訊設計有限公司.jpg":Nm,"/src/assets/solutions/banner/AI營運流程自動化/6.詮通電腦有限公司.png":Pm,"/src/assets/solutions/banner/AI營運流程自動化/7.睿力智能運動有限公司.png":km,"/src/assets/solutions/banner/AI營運流程自動化/8.數辰創藝科技股份有限公司.png":Tm,"/src/assets/solutions/banner/AI營運流程自動化/9.璽樂科技股份有限公司.jpg":Fm,"/src/assets/solutions/banner/AI資訊安全/1.艾比互動娛樂有限公司.png":Dm,"/src/assets/solutions/banner/AI資訊安全/2.華苓科技股份有限公司.png":Mm,"/src/assets/solutions/banner/AI資訊安全/3.極風雲創股份有限公司.png":Om}),Qe=e=>String(e??"").trim(),za=e=>{const t=Qe(e);return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""},Xl=Ti.map((e,t)=>{const n=Qe(e.category),o=Qe(e.solutionName);if(!n||!o)return null;const s=Qe(e.bannerAssetKey),i=s&&$m[s]||"";return{id:Qe(e.id)||`${n}-${t+1}`,order:Number.isFinite(Number(e.sequence))?Number(e.sequence):t+1,tag:n,company:Qe(e.companyName),companyShortName:Qe(e.companyShortName),name:o,manualUrl:za(e.manualUrl),imageFileName:Qe(e.imageFileName),image:i,detailImage:i,solutionIntro:Qe(e.solutionIntro),vendorIntro:Qe(e.companyIntro),specialPrice:Qe(e.specialPrice),contactPerson:Qe(e.contactPerson),companyPhone:Qe(e.companyPhone),contactEmail:Qe(e.contactEmail),websiteUrl:za(e.websiteUrl)}}).filter(Boolean),Rm=(e,t)=>e.order-t.order,Pt=e=>Xl.filter(t=>t.tag===e).sort(Rm).map(t=>({id:t.id,companyName:t.companyShortName||t.company,solutionName:t.name,modalData:t})),Zs=new Map;Xl.forEach(e=>{const t=e.company||e.companyShortName;!t||Zs.has(t)||Zs.set(t,e)});[...Zs.values()].map((e,t)=>({id:`vendor-${t+1}`,logo:e.image,vendorName:e.companyShortName||e.company,modalData:e}));const Lm={class:"container nav-inner"},Um={class:"nav-links nav-links--desktop"},Vm={key:0,class:"nav-separator"},jm={key:1,class:"nav-dropdown"},qm={class:"nav-submenu",role:"menu","aria-label":"方案分類子選單"},Hm=["href"],Gm=["aria-expanded"],Wm={key:0,class:"mobile-dropdown"},Km={class:"mobile-dropdown-head"},zm=["aria-expanded"],Xm=["href"],Ym={__name:"NavBar",setup(e){const t=je(!1),n=je(!1),o=je(null),s=zl(),i=[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"FAQ",to:"/faq"}],r=[{label:"方案分類",to:"/categories/ai-market-insight",children:fs.map(A=>({label:A.label,to:`/categories/${A.slug}`}))},{label:"AI服務供應商",to:"/vendors"},{label:"新北經發局",href:"https://www.economic.ntpc.gov.tw/"},{label:"聯絡我們",to:"/contact-us"},{label:"即刻申請",to:"/about"},{label:"搜尋",to:"/search"}],l=Be(()=>[...i,...r]),u=Be(()=>s.path==="/categories"||s.path.startsWith("/categories/")),c=()=>{t.value=!t.value,t.value||(n.value=!1)},d=()=>{n.value=!n.value},m=()=>{t.value=!1,n.value=!1},h=A=>{!t.value||!o.value||A.target instanceof Node&&!o.value.contains(A.target)&&m()};return Ii(()=>{document.addEventListener("pointerdown",h)}),_i(()=>{document.removeEventListener("pointerdown",h)}),Cn(()=>s.path,()=>{m()}),(A,y)=>{const I=ls("RouterLink");return F(),R("header",{ref_key:"navRoot",ref:o,class:"site-nav"},[w("div",Lm,[ve(I,{class:"brand hover-scale",to:"/"},{default:lt(()=>[...y[0]||(y[0]=[w("span",{class:"brand-title"},[w("span",{class:"brand-line brand-line--small"},"新北產業"),w("span",{class:"brand-line"},"AI化輔導計畫")],-1)])]),_:1}),w("nav",Um,[(F(),R(le,null,Oe(r,(_,P)=>(F(),R(le,{key:_.to||_.href},[P>0?(F(),R("span",Vm,"|")):mt("",!0),_.children?(F(),R("div",jm,[ve(I,{class:ke(["nav-link nav-link--dropdown hover-scale",{"router-link-active":u.value}]),to:_.to},{default:lt(()=>[ft(ue(_.label),1)]),_:2},1032,["class","to"]),w("div",qm,[(F(!0),R(le,null,Oe(_.children,C=>(F(),Ne(I,{key:C.to,class:"nav-submenu-link",to:C.to},{default:lt(()=>[ft(ue(C.label),1)]),_:2},1032,["to"]))),128))])])):_.href?(F(),R("a",{key:2,class:"nav-link hover-scale",href:_.href,target:"_blank",rel:"noopener noreferrer"},ue(_.label),9,Hm)):(F(),Ne(I,{key:3,class:"nav-link hover-scale",to:_.to},{default:lt(()=>[ft(ue(_.label),1)]),_:2},1032,["to"]))],64))),64))]),w("button",{class:"menu-toggle hover-scale",type:"button","aria-label":"Toggle navigation","aria-controls":"primary-nav","aria-expanded":t.value.toString(),onClick:c},[...y[1]||(y[1]=[w("span",{class:"bar"},null,-1),w("span",{class:"bar"},null,-1),w("span",{class:"bar"},null,-1)])],8,Gm),w("nav",{id:"primary-nav",class:ke(["nav-links nav-links--mobile",{open:t.value}])},[(F(!0),R(le,null,Oe(l.value,_=>(F(),R(le,{key:_.to||_.href},[_.children?(F(),R("div",Wm,[w("div",Km,[ve(I,{class:ke(["nav-link hover-scale",{"router-link-active":u.value}]),to:_.to},{default:lt(()=>[ft(ue(_.label),1)]),_:2},1032,["class","to"]),w("button",{class:"mobile-submenu-toggle",type:"button","aria-expanded":n.value.toString(),onClick:d},[y[2]||(y[2]=w("span",{class:"sr-only"},"展開方案分類子選單",-1)),w("i",{class:ke(["fa-solid fa-chevron-down mobile-submenu-caret",{open:n.value}])},null,2)],8,zm)]),w("div",{class:ke(["mobile-submenu",{open:n.value}])},[(F(!0),R(le,null,Oe(_.children,P=>(F(),Ne(I,{key:P.to,class:"mobile-submenu-link",to:P.to},{default:lt(()=>[ft(ue(P.label),1)]),_:2},1032,["to"]))),128))],2)])):_.href?(F(),R("a",{key:1,class:"nav-link hover-scale",href:_.href,target:"_blank",rel:"noopener noreferrer"},ue(_.label),9,Xm)):(F(),Ne(I,{key:2,class:"nav-link hover-scale",to:_.to},{default:lt(()=>[ft(ue(_.label),1)]),_:2},1032,["to"]))],64))),128))],2)])],512)}}},Qm={class:"left-tabs","aria-label":"頁面導覽"},Jm={__name:"LeftTabs",setup(e){const t=zl(),n=[{label:"關於計畫",to:"/about"},{label:"計畫時程",to:"/schedule"},{label:"FAQ",to:"/faq"}],o=Be(()=>n.some(i=>t.path===i.to)),s=(i,a)=>({"left-tab--stack-1":a===0,"left-tab--stack-2":a===1,"left-tab--stack-3":a===2,"left-tab--palette-1":a===0,"left-tab--palette-2":a===1,"left-tab--palette-3":a===2,"left-tab--muted":o.value&&t.path!==i.to});return(i,a)=>{const r=ls("RouterLink");return F(),R("aside",Qm,[(F(),R(le,null,Oe(n,(l,u)=>ve(r,{key:l.to,class:ke(["left-tab hover-scale",s(l,u)]),to:l.to},{default:lt(()=>[ft(ue(l.label),1)]),_:2},1032,["class","to"])),64))])}}},Zm={class:"app-shell"},eh={class:"main-content"},th={__name:"App",setup(e){return(t,n)=>(F(),R("div",Zm,[ve(Ym),ve(Jm),w("main",eh,[ve(he(Kl))])]))}},nh="/assets/opening-CXIbTzrF.png",oh="/assets/banner1-CFNeQ82D.png",qt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},sh={class:"opening-home"},ih={class:"container"},ah={class:"content-panel"},rh=["aria-label","onClick"],lh=["src","alt"],ch={class:"home-carousel-indicators","aria-label":"首頁輪播指示器"},uh=["aria-label","onClick"],dh={key:0,class:"opening-overlay"},ph={class:"opening-backdrop"},fh=["src"],mh={class:"opening-stage"},hh={key:0,class:"ready-content"},gh={class:"entry-actions"},wh=["onClick"],Ah={class:"banner-modal-content"},bh=["src","alt"],yh="https://docs.google.com/forms/d/e/1FAIpQLSeYelxk39eefWsEqVVhjjfvbdptAsRJBWkEDd5nY1CgmlJKrA/formResponse",vh={__name:"OpeningHomeView",setup(e){const t=[{id:1,title:"首頁輪播 1",src:oh}],n=je("ready"),o=je(0),s=je(null),i=je(0),a=je(0),r=je(!1),l=je(!1);let u,c;const d=Be(()=>n.value!=="home"),m=Be(()=>n.value==="ready"),h=[{id:"ntpc",label:"我是新北市企業",value:"是"},{id:"other",label:"其他企業",value:"否"}],A=()=>{n.value="home"},y=U=>{const J=new URLSearchParams({"entry.987539846":U,"entry.987539846_sentinel":U});fetch(yh,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:J.toString(),keepalive:!0}).catch(be=>{console.warn("Google Form submit failed:",be)})},I=U=>{y(U),A()},_=U=>{s.value=U},P=U=>{if(l.value){l.value=!1;return}_(U)},C=()=>{s.value=null},B=U=>{U.key==="Escape"&&C()},V=U=>{o.value=U,d.value||We()},j=()=>{o.value=(o.value+1)%t.length},G=()=>{o.value=(o.value-1+t.length)%t.length},K=()=>{l.value=!0,c&&window.clearTimeout(c),c=window.setTimeout(()=>{l.value=!1,c=void 0},250)},Z=U=>{U.touches.length===1&&(r.value=!0,i.value=U.touches[0].clientX,a.value=0)},pe=U=>{!r.value||U.touches.length!==1||(a.value=U.touches[0].clientX-i.value)},Ee=()=>{if(!r.value)return;const U=45,J=a.value;Math.abs(J)>=U&&(J<0?j():G(),We(),K()),r.value=!1,a.value=0},Ie=()=>{r.value=!1,a.value=0},Fe=()=>{u||d.value||(u=window.setInterval(j,6e4))},Ae=()=>{u&&(window.clearInterval(u),u=void 0)},We=()=>{Ae(),Fe()},we=U=>{document.body.style.overflow=U?"hidden":"",document.body.classList.toggle("pre-home-stage",U)};return Cn(d,U=>{if(we(U),U){Ae();return}Fe()},{immediate:!0}),_i(()=>{Ae(),we(!1),document.removeEventListener("keydown",B),c&&(window.clearTimeout(c),c=void 0)}),Ii(()=>{document.addEventListener("keydown",B)}),(U,J)=>(F(),R("section",sh,[w("div",ih,[w("div",ah,[J[0]||(J[0]=w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1"),w("span",{class:"title-line"})],-1)),w("section",{class:"home-carousel",onMouseenter:Ae,onMouseleave:Fe,onFocusin:Ae,onFocusout:Fe},[w("div",{class:"home-carousel-viewport",onTouchstartPassive:Z,onTouchmovePassive:pe,onTouchend:Ee,onTouchcancel:Ie},[w("div",{class:"home-carousel-track",style:os({transform:`translateX(-${o.value*100}%)`})},[(F(),R(le,null,Oe(t,be=>w("figure",{key:be.id,class:"home-carousel-slide"},[w("button",{type:"button",class:"home-slide-trigger","aria-label":`放大檢視 ${be.title}`,onClick:Ke=>P(be)},[w("img",{src:be.src,alt:be.title},null,8,lh)],8,rh)])),64))],4)],32),w("div",ch,[(F(),R(le,null,Oe(t,(be,Ke)=>w("button",{key:be.id,type:"button",class:ke(["home-indicator",{active:Ke===o.value}]),"aria-label":`切換到第 ${Ke+1} 張圖片`,onClick:pt=>V(Ke)},null,10,uh)),64))])],32)])]),d.value?(F(),R("div",dh,[w("div",ph,[w("img",{class:"opening-backdrop-media opening-backdrop-image",src:he(nh),alt:"開場背景"},null,8,fh)]),w("div",mh,[m.value?(F(),R("div",hh,[J[1]||(J[1]=w("h2",{class:"ready-title"},"新北產業AI化輔導計畫",-1)),J[2]||(J[2]=w("p",{class:"ready-subtitle"},"New Taipei City Industrial AI Mentoring Program",-1)),w("div",gh,[(F(),R(le,null,Oe(h,be=>w("button",{key:be.id,type:"button",class:"enter-home-btn pulse-glow",onClick:Ke=>I(be.value)},ue(be.label),9,wh)),64))])])):mt("",!0)])])):mt("",!0),s.value?(F(),R("div",{key:1,class:"banner-modal",onClick:Lo(C,["self"])},[w("div",Ah,[w("button",{type:"button",class:"banner-modal-close","aria-label":"關閉圖片放大",onClick:C}," × "),w("img",{src:s.value.src,alt:s.value.title},null,8,bh)])])):mt("",!0)]))}},Eh=qt(vh,[["__scopeId","data-v-1e2e8ad0"]]),Ih={class:"page-hero"},_h={class:"container"},xh={class:"content-panel"},Ch={class:"about-highlights","aria-label":"計畫重點資訊"},Bh={class:"about-highlight-head"},Sh={class:"about-highlight-body"},Nh={__name:"AboutView",setup(e){const t=[{title:"對象",icon:"fa-solid fa-user-tie",content:"想導入 AI 提升營運效率之新北市企業或工廠"},{title:"補助金額",icon:"fa-solid fa-dollar-sign",content:"最高 4 萬元（需自籌 50%）"},{title:"申請方式",icon:"fa-solid fa-envelope",content:"email 送件申請"},{title:"申請時間",icon:"fa-solid fa-clock",content:"依公告日期"}];return(n,o)=>(F(),R("section",Ih,[w("div",_h,[w("div",xh,[o[0]||(o[0]=Sl('<header class="title-row" data-v-4afc873b><div class="about-title-wrap" data-v-4afc873b><span class="title-line" data-v-4afc873b></span><h1 data-v-4afc873b>關於計畫</h1><span class="title-line" data-v-4afc873b></span></div><a class="about-apply-link" href="https://drive.google.com/drive/folders/1789FI1WmaAaVV_w6f5kl1i1-whT4AN_X" target="_blank" rel="noopener noreferrer" data-v-4afc873b> 申請須知與申請表 </a></header><article class="about-copy" data-v-4afc873b><p data-v-4afc873b> 為協助新北市企業加速導入人工智慧技術，提升營運效率與競爭力，新北市政府經濟發展局（下稱主辦單位）委託台灣智慧雲端服務股份有限公司（下稱執行單位）辦理「新北產業AI化輔導計畫」（下稱本計畫）。本計畫旨在回應產業升級與數位轉型需求，透過遴選AI服務供應廠商、輔導媒合本市企業實際導入AI應用方案，提升本市企業的數位競爭力，促進本市產業邁向智慧化與高值化發展。 </p><p data-v-4afc873b> 本計畫已公開徵選專業AI服務供應廠商，此次遴選具AI導入需求之新北企業進行輔導，並將透過「新北企業與AI應用方案供應商媒合平臺」及實體媒合會，協助本市具轉型需求之企業與AI服務供應廠商精準對接。 </p><p data-v-4afc873b> 另為降低企業導入AI之初期成本，主辦單位提供AI應用服務導入補助，受輔導之新北企業完成導入並提交相關憑證後，可依規定申請補助款。本計畫透過技術服務供應、輔導媒合機制與補助方案之三合一推動架構，盼加速推動新北企業導入AI應用服務，打造示範案例，為新北產業創造AI化的新價值。 </p></article>',2)),w("section",Ch,[(F(),R(le,null,Oe(t,s=>w("article",{key:s.title,class:"about-highlight-card"},[w("header",Bh,[w("span",null,ue(s.title),1),w("i",{class:ke(s.icon),"aria-hidden":"true"},null,2)]),w("div",Sh,ue(s.content),1)])),64))]),o[1]||(o[1]=w("p",{class:"about-note"},"*詳細申請資格、補助計算與審查方式，請參閱申請須知",-1))])])]))}},Ph=qt(Nh,[["__scopeId","data-v-4afc873b"]]);function Yl(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function kh(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Xa(e,t){return e.get(Yl(e,t))}function Th(e,t,n){kh(e,t),t.set(e,n)}function Fh(e,t,n){return e.set(Yl(e,t),n),n}const Dh=100,L={},Mh=()=>{L.previousActiveElement instanceof HTMLElement?(L.previousActiveElement.focus(),L.previousActiveElement=null):document.body&&document.body.focus()},Oh=e=>new Promise(t=>{if(!e)return t();const n=window.scrollX,o=window.scrollY;L.restoreFocusTimeout=setTimeout(()=>{Mh(),t()},Dh),window.scrollTo(n,o)}),Ql="swal2-",$h=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],b=$h.reduce((e,t)=>(e[t]=Ql+t,e),{}),Rh=["success","warning","info","question","error"],Uo=Rh.reduce((e,t)=>(e[t]=Ql+t,e),{}),Jl="SweetAlert2:",Fi=e=>e.charAt(0).toUpperCase()+e.slice(1),He=e=>{console.warn(`${Jl} ${typeof e=="object"?e.join(" "):e}`)},hn=e=>{console.error(`${Jl} ${e}`)},Ya=[],Lh=e=>{Ya.includes(e)||(Ya.push(e),He(e))},Zl=(e,t=null)=>{Lh(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},ms=e=>typeof e=="function"?e():e,Di=e=>e&&typeof e.toPromise=="function",uo=e=>Di(e)?e.toPromise():Promise.resolve(e),Mi=e=>e&&Promise.resolve(e)===e,Ge=()=>document.body.querySelector(`.${b.container}`),po=e=>{const t=Ge();return t?t.querySelector(e):null},it=e=>po(`.${e}`),se=()=>it(b.popup),Mn=()=>it(b.icon),Uh=()=>it(b["icon-content"]),ec=()=>it(b.title),Oi=()=>it(b["html-container"]),tc=()=>it(b.image),$i=()=>it(b["progress-steps"]),hs=()=>it(b["validation-message"]),Nt=()=>po(`.${b.actions} .${b.confirm}`),On=()=>po(`.${b.actions} .${b.cancel}`),gn=()=>po(`.${b.actions} .${b.deny}`),Vh=()=>it(b["input-label"]),$n=()=>po(`.${b.loader}`),fo=()=>it(b.actions),nc=()=>it(b.footer),gs=()=>it(b["timer-progress-bar"]),Ri=()=>it(b.close),jh=`
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
`,Li=()=>{const e=se();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(t).sort((i,a)=>{const r=parseInt(i.getAttribute("tabindex")||"0"),l=parseInt(a.getAttribute("tabindex")||"0");return r>l?1:r<l?-1:0}),o=e.querySelectorAll(jh),s=Array.from(o).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>Ze(i))},Ui=()=>$t(document.body,b.shown)&&!$t(document.body,b["toast-shown"])&&!$t(document.body,b["no-backdrop"]),ws=()=>{const e=se();return e?$t(e,b.toast):!1},qh=()=>{const e=se();return e?e.hasAttribute("data-loading"):!1},at=(e,t)=>{if(e.textContent="",t){const o=new DOMParser().parseFromString(t,"text/html"),s=o.querySelector("head");s&&Array.from(s.childNodes).forEach(a=>{e.appendChild(a)});const i=o.querySelector("body");i&&Array.from(i.childNodes).forEach(a=>{a instanceof HTMLVideoElement||a instanceof HTMLAudioElement?e.appendChild(a.cloneNode(!0)):e.appendChild(a)})}},$t=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let o=0;o<n.length;o++)if(!e.classList.contains(n[o]))return!1;return!0},Hh=(e,t)=>{Array.from(e.classList).forEach(n=>{!Object.values(b).includes(n)&&!Object.values(Uo).includes(n)&&!Object.values(t.showClass||{}).includes(n)&&e.classList.remove(n)})},st=(e,t,n)=>{if(Hh(e,t),!t.customClass)return;const o=t.customClass[n];if(o){if(typeof o!="string"&&!o.forEach){He(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`);return}ne(e,o)}},As=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${b.popup} > .${b[t]}`);case"checkbox":return e.querySelector(`.${b.popup} > .${b.checkbox} input`);case"radio":return e.querySelector(`.${b.popup} > .${b.radio} input:checked`)||e.querySelector(`.${b.popup} > .${b.radio} input:first-child`);case"range":return e.querySelector(`.${b.popup} > .${b.range} input`);default:return e.querySelector(`.${b.popup} > .${b.input}`)}},oc=e=>{if(e.focus(),e.type!=="file"){const t=e.value;e.value="",e.value=t}},sc=(e,t,n)=>{!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(o=>{Array.isArray(e)?e.forEach(s=>{n?s.classList.add(o):s.classList.remove(o)}):n?e.classList.add(o):e.classList.remove(o)}))},ne=(e,t)=>{sc(e,t,!0)},dt=(e,t)=>{sc(e,t,!1)},Xt=(e,t)=>{const n=Array.from(e.children);for(let o=0;o<n.length;o++){const s=n[o];if(s instanceof HTMLElement&&$t(s,t))return s}},fn=(e,t,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||parseInt(`${n}`)===0?e.style.setProperty(t,typeof n=="number"?`${n}px`:n):e.style.removeProperty(t)},Pe=(e,t="flex")=>{e&&(e.style.display=t)},Re=e=>{e&&(e.style.display="none")},Vi=(e,t="block")=>{e&&new MutationObserver(()=>{mo(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},Qa=(e,t,n,o)=>{const s=e.querySelector(t);s&&s.style.setProperty(n,o)},mo=(e,t,n="flex")=>{t?Pe(e,n):Re(e)},Ze=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),Gh=()=>!Ze(Nt())&&!Ze(gn())&&!Ze(On()),ei=e=>e.scrollHeight>e.clientHeight,Wh=(e,t)=>{let n=e;for(;n&&n!==t;){if(ei(n))return!0;n=n.parentElement}return!1},ic=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),o=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||o>0},ji=(e,t=!1)=>{const n=gs();n&&Ze(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"},10))},Kh=()=>{const e=gs();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=parseInt(window.getComputedStyle(e).width),o=t/n*100;e.style.width=`${o}%`},zh=()=>typeof window>"u"||typeof document>"u",Xh=`
 <div aria-labelledby="${b.title}" aria-describedby="${b["html-container"]}" class="${b.popup}" tabindex="-1">
   <button type="button" class="${b.close}"></button>
   <ul class="${b["progress-steps"]}"></ul>
   <div class="${b.icon}"></div>
   <img class="${b.image}" />
   <h2 class="${b.title}" id="${b.title}"></h2>
   <div class="${b["html-container"]}" id="${b["html-container"]}"></div>
   <input class="${b.input}" id="${b.input}" />
   <input type="file" class="${b.file}" />
   <div class="${b.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${b.select}" id="${b.select}"></select>
   <div class="${b.radio}"></div>
   <label class="${b.checkbox}">
     <input type="checkbox" id="${b.checkbox}" />
     <span class="${b.label}"></span>
   </label>
   <textarea class="${b.textarea}" id="${b.textarea}"></textarea>
   <div class="${b["validation-message"]}" id="${b["validation-message"]}"></div>
   <div class="${b.actions}">
     <div class="${b.loader}"></div>
     <button type="button" class="${b.confirm}"></button>
     <button type="button" class="${b.deny}"></button>
     <button type="button" class="${b.cancel}"></button>
   </div>
   <div class="${b.footer}"></div>
   <div class="${b["timer-progress-bar-container"]}">
     <div class="${b["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Yh=()=>{const e=Ge();return e?(e.remove(),dt([document.documentElement,document.body],[b["no-backdrop"],b["toast-shown"],b["has-column"]]),!0):!1},rn=()=>{L.currentInstance&&L.currentInstance.resetValidationMessage()},Qh=()=>{const e=se();if(!e)return;const t=Xt(e,b.input),n=Xt(e,b.file),o=e.querySelector(`.${b.range} input`),s=e.querySelector(`.${b.range} output`),i=Xt(e,b.select),a=e.querySelector(`.${b.checkbox} input`),r=Xt(e,b.textarea);t&&(t.oninput=rn),n&&(n.onchange=rn),i&&(i.onchange=rn),a&&(a.onchange=rn),r&&(r.oninput=rn),o&&s&&(o.oninput=()=>{rn(),s.value=o.value},o.onchange=()=>{rn(),s.value=o.value})},Jh=e=>{if(typeof e=="string"){const t=document.querySelector(e);if(!t)throw new Error(`Target element "${e}" not found`);return t}return e},Zh=e=>{const t=se();t&&(t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true"))},eg=e=>{window.getComputedStyle(e).direction==="rtl"&&(ne(Ge(),b.rtl),L.isRTL=!0)},tg=e=>{const t=Yh();if(zh()){hn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=b.container,t&&ne(n,b["no-transition"]),at(n,Xh),n.dataset.swal2Theme=e.theme;const o=Jh(e.target||"body");o.appendChild(n),e.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Zh(e),eg(o),Qh()},qi=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e=="object"?ng(e,t):e&&at(t,e)},ng=(e,t)=>{"jquery"in e?og(t,e):at(t,e.toString())},og=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},sg=(e,t)=>{const n=fo(),o=$n();!n||!o||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?Re(n):Pe(n),st(n,t,"actions"),ig(n,o,t),at(o,t.loaderHtml||""),st(o,t,"loader"))};function ig(e,t,n){const o=Nt(),s=gn(),i=On();!o||!s||!i||(Ds(o,"confirm",n),Ds(s,"deny",n),Ds(i,"cancel",n),ag(o,s,i,n),n.reverseButtons&&(n.toast?(e.insertBefore(i,o),e.insertBefore(s,o)):(e.insertBefore(i,t),e.insertBefore(s,t),e.insertBefore(o,t))))}function ag(e,t,n,o){if(!o.buttonsStyling){dt([e,t,n],b.styled);return}ne([e,t,n],b.styled),o.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",o.confirmButtonColor),o.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",o.denyButtonColor),o.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",o.cancelButtonColor),Fs(e),Fs(t),Fs(n)}function Fs(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Ds(e,t,n){const o=Fi(t);mo(e,n[`show${o}Button`],"inline-block"),at(e,n[`${t}ButtonText`]||""),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]||""),e.className=b[t],st(e,n,`${t}Button`)}const rg=(e,t)=>{const n=Ri();n&&(at(n,t.closeButtonHtml||""),st(n,t,"closeButton"),mo(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel||""))},lg=(e,t)=>{const n=Ge();n&&(cg(n,t.backdrop),ug(n,t.position),dg(n,t.grow),st(n,t,"container"))};function cg(e,t){typeof t=="string"?e.style.background=t:t||ne([document.documentElement,document.body],b["no-backdrop"])}function ug(e,t){t&&(t in b?ne(e,b[t]):(He('The "position" parameter is not valid, defaulting to "center"'),ne(e,b.center)))}function dg(e,t){t&&ne(e,b[`grow-${t}`])}var oe={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const pg=["input","file","range","select","radio","checkbox","textarea"],fg=(e,t)=>{const n=se();if(!n)return;const o=oe.innerParams.get(e),s=!o||t.input!==o.input;pg.forEach(i=>{const a=Xt(n,b[i]);a&&(gg(i,t.inputAttributes),a.className=b[i],s&&Re(a))}),t.input&&(s&&mg(t),wg(t))},mg=e=>{if(!e.input)return;if(!_e[e.input]){hn(`Unexpected type of input! Expected ${Object.keys(_e).join(" | ")}, got "${e.input}"`);return}const t=ac(e.input);if(!t)return;const n=_e[e.input](t,e);Pe(t),e.inputAutoFocus&&setTimeout(()=>{oc(n)})},hg=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["id","type","value","style"].includes(n)||e.removeAttribute(n)}},gg=(e,t)=>{const n=se();if(!n)return;const o=As(n,e);if(o){hg(o);for(const s in t)o.setAttribute(s,t[s])}},wg=e=>{if(!e.input)return;const t=ac(e.input);t&&st(t,e,"input")},Hi=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},ho=(e,t,n)=>{if(n.inputLabel){const o=document.createElement("label"),s=b["input-label"];o.setAttribute("for",e.id),o.className=s,typeof n.customClass=="object"&&ne(o,n.customClass.inputLabel),o.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",o)}},ac=e=>{const t=se();if(t)return Xt(t,b[e]||b.input)},Vo=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:Mi(t)||He(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},_e={};_e.text=_e.email=_e.password=_e.number=_e.tel=_e.url=_e.search=_e.date=_e["datetime-local"]=_e.time=_e.week=_e.month=(e,t)=>{const n=e;return Vo(n,t.inputValue),ho(n,n,t),Hi(n,t),n.type=t.input,n};_e.file=(e,t)=>{const n=e;return ho(n,n,t),Hi(n,t),n};_e.range=(e,t)=>{const n=e,o=n.querySelector("input"),s=n.querySelector("output");return o&&(Vo(o,t.inputValue),o.type=t.input,ho(o,e,t)),s&&Vo(s,t.inputValue),e};_e.select=(e,t)=>{const n=e;if(n.textContent="",t.inputPlaceholder){const o=document.createElement("option");at(o,t.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,n.appendChild(o)}return ho(n,n,t),n};_e.radio=e=>{const t=e;return t.textContent="",e};_e.checkbox=(e,t)=>{const n=se();if(!n)throw new Error("Popup not found");const o=As(n,"checkbox");if(!o)throw new Error("Checkbox input not found");o.value="1",o.checked=!!t.inputValue;const i=e.querySelector("span");if(i){const a=t.inputPlaceholder||t.inputLabel;a&&at(i,a)}return o};_e.textarea=(e,t)=>{const n=e;Vo(n,t.inputValue),Hi(n,t),ho(n,n,t);const o=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=se();if(!s)return;const i=parseInt(window.getComputedStyle(s).width),a=()=>{if(!document.body.contains(n))return;const r=n.offsetWidth+o(n),l=se();l&&(r>i?l.style.width=`${r}px`:fn(l,"width",t.width))};new MutationObserver(a).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const Ag=(e,t)=>{const n=Oi();n&&(Vi(n),st(n,t,"htmlContainer"),t.html?(qi(t.html,n),Pe(n,"block")):t.text?(n.textContent=t.text,Pe(n,"block")):Re(n),fg(e,t))},bg=(e,t)=>{const n=nc();n&&(Vi(n),mo(n,!!t.footer,"block"),t.footer&&qi(t.footer,n),st(n,t,"footer"))},yg=(e,t)=>{const n=oe.innerParams.get(e),o=Mn();if(!o)return;if(n&&t.icon===n.icon){Za(o,t),Ja(o,t);return}if(!t.icon&&!t.iconHtml){Re(o);return}if(t.icon&&Object.keys(Uo).indexOf(t.icon)===-1){hn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),Re(o);return}Pe(o),Za(o,t),Ja(o,t),ne(o,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",rc)},Ja=(e,t)=>{for(const[n,o]of Object.entries(Uo))t.icon!==n&&dt(e,o);ne(e,t.icon&&Uo[t.icon]),Ig(e,t),rc(),st(e,t,"icon")},rc=()=>{const e=se();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let o=0;o<n.length;o++)n[o].style.backgroundColor=t},vg=e=>`
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Eg=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Za=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let n=e.innerHTML,o="";t.iconHtml?o=er(t.iconHtml):t.icon==="success"?(o=vg(t),n=n.replace(/ style=".*?"/g,"")):t.icon==="error"?o=Eg:t.icon&&(o=er({question:"?",warning:"!",info:"i"}[t.icon])),n.trim()!==o.trim()&&at(e,o)},Ig=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Qa(e,n,"background-color",t.iconColor);Qa(e,".swal2-success-ring","border-color",t.iconColor)}},er=e=>`<div class="${b["icon-content"]}">${e}</div>`,_g=(e,t)=>{const n=tc();if(n){if(!t.imageUrl){Re(n);return}Pe(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt||""),fn(n,"width",t.imageWidth),fn(n,"height",t.imageHeight),n.className=b.image,st(n,t,"image")}};let Gi=!1,lc=0,cc=0,uc=0,dc=0;const xg=e=>{e.addEventListener("mousedown",jo),document.body.addEventListener("mousemove",qo),e.addEventListener("mouseup",Ho),e.addEventListener("touchstart",jo),document.body.addEventListener("touchmove",qo),e.addEventListener("touchend",Ho)},Cg=e=>{e.removeEventListener("mousedown",jo),document.body.removeEventListener("mousemove",qo),e.removeEventListener("mouseup",Ho),e.removeEventListener("touchstart",jo),document.body.removeEventListener("touchmove",qo),e.removeEventListener("touchend",Ho)},jo=e=>{const t=se();if(!t)return;const n=Mn();if(e.target===t||n&&n.contains(e.target)){Gi=!0;const o=pc(e);lc=o.clientX,cc=o.clientY,uc=parseInt(t.style.insetInlineStart)||0,dc=parseInt(t.style.insetBlockStart)||0,ne(t,"swal2-dragging")}},qo=e=>{const t=se();if(t&&Gi){let{clientX:n,clientY:o}=pc(e);const s=n-lc;t.style.insetInlineStart=`${uc+(L.isRTL?-s:s)}px`,t.style.insetBlockStart=`${dc+(o-cc)}px`}},Ho=()=>{const e=se();Gi=!1,dt(e,"swal2-dragging")},pc=e=>{let t=0,n=0;return e.type.startsWith("mouse")?(t=e.clientX,n=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,n=e.touches[0].clientY),{clientX:t,clientY:n}},Bg=(e,t)=>{const n=Ge(),o=se();if(!(!n||!o)){if(t.toast){fn(n,"width",t.width),o.style.width="100%";const s=$n();s&&o.insertBefore(s,Mn())}else fn(o,"width",t.width);fn(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),Re(hs()),Sg(o,t),t.draggable&&!t.toast?(ne(o,b.draggable),xg(o)):(dt(o,b.draggable),Cg(o))}},Sg=(e,t)=>{const n=t.showClass||{};e.className=`${b.popup} ${Ze(e)?n.popup:""}`,t.toast?(ne([document.documentElement,document.body],b["toast-shown"]),ne(e,b.toast)):ne(e,b.modal),st(e,t,"popup"),typeof t.customClass=="string"&&ne(e,t.customClass),t.icon&&ne(e,b[`icon-${t.icon}`])},Ng=(e,t)=>{const n=$i();if(!n)return;const{progressSteps:o,currentProgressStep:s}=t;if(!o||o.length===0||s===void 0){Re(n);return}Pe(n),n.textContent="",s>=o.length&&He("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.forEach((i,a)=>{const r=Pg(i);if(n.appendChild(r),a===s&&ne(r,b["active-progress-step"]),a!==o.length-1){const l=kg(t);n.appendChild(l)}})},Pg=e=>{const t=document.createElement("li");return ne(t,b["progress-step"]),at(t,e),t},kg=e=>{const t=document.createElement("li");return ne(t,b["progress-step-line"]),e.progressStepsDistance&&fn(t,"width",e.progressStepsDistance),t},Tg=(e,t)=>{const n=ec();n&&(Vi(n),mo(n,!!(t.title||t.titleText),"block"),t.title&&qi(t.title,n),t.titleText&&(n.innerText=t.titleText),st(n,t,"title"))},fc=(e,t)=>{var n;Bg(e,t),lg(e,t),Ng(e,t),yg(e,t),_g(e,t),Tg(e,t),rg(e,t),Ag(e,t),sg(e,t),bg(e,t);const o=se();typeof t.didRender=="function"&&o&&t.didRender(o),(n=L.eventEmitter)===null||n===void 0||n.emit("didRender",o)},Fg=()=>Ze(se()),mc=()=>{var e;return(e=Nt())===null||e===void 0?void 0:e.click()},Dg=()=>{var e;return(e=gn())===null||e===void 0?void 0:e.click()},Mg=()=>{var e;return(e=On())===null||e===void 0?void 0:e.click()},Rn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),hc=e=>{if(e.keydownTarget&&e.keydownHandlerAdded&&e.keydownHandler){const t=e.keydownHandler;e.keydownTarget.removeEventListener("keydown",t,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1}},Og=(e,t,n)=>{if(hc(e),!t.toast){const o=i=>Rg(t,i,n);e.keydownHandler=o;const s=t.keydownListenerCapture?window:se();if(s){e.keydownTarget=s,e.keydownListenerCapture=t.keydownListenerCapture;const i=o;e.keydownTarget.addEventListener("keydown",i,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0}}},ti=(e,t)=>{var n;const o=Li();if(o.length){e=e+t,e===-2&&(e=o.length-1),e===o.length?e=0:e===-1&&(e=o.length-1),o[e].focus();return}(n=se())===null||n===void 0||n.focus()},gc=["ArrowRight","ArrowDown"],$g=["ArrowLeft","ArrowUp"],Rg=(e,t,n)=>{e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?Lg(t,e):t.key==="Tab"?Ug(t):[...gc,...$g].includes(t.key)?Vg(t.key):t.key==="Escape"&&jg(t,e,n)))},Lg=(e,t)=>{if(!ms(t.allowEnterKey))return;const n=se();if(!n||!t.input)return;const o=As(n,t.input);if(e.target&&o&&e.target instanceof HTMLElement&&e.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(t.input))return;mc(),e.preventDefault()}},Ug=e=>{const t=e.target,n=Li();let o=-1;for(let s=0;s<n.length;s++)if(t===n[s]){o=s;break}e.shiftKey?ti(o,-1):ti(o,1),e.stopPropagation(),e.preventDefault()},Vg=e=>{const t=fo(),n=Nt(),o=gn(),s=On();if(!t||!n||!o||!s)return;const i=[n,o,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const a=gc.includes(e)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;if(r){for(let l=0;l<t.children.length;l++){if(r=r[a],!r)return;if(r instanceof HTMLButtonElement&&Ze(r))break}r instanceof HTMLButtonElement&&r.focus()}},jg=(e,t,n)=>{e.preventDefault(),ms(t.allowEscapeKey)&&n(Rn.esc)};var Fn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const qg=()=>{const e=Ge();Array.from(document.body.children).forEach(n=>{n.contains(e)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},wc=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Ac=typeof window<"u"&&!!window.GestureEvent,Hg=()=>{if(Ac&&!$t(document.body,b.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,ne(document.body,b.iosfix),Gg()}},Gg=()=>{const e=Ge();if(!e)return;let t;e.ontouchstart=n=>{t=Wg(n)},e.ontouchmove=n=>{t&&(n.preventDefault(),n.stopPropagation())}},Wg=e=>{const t=e.target,n=Ge(),o=Oi();return!n||!o||Kg(e)||zg(e)?!1:t===n||!ei(n)&&t instanceof HTMLElement&&!Wh(t,o)&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(ei(o)&&o.contains(t))},Kg=e=>!!(e.touches&&e.touches.length&&e.touches[0].touchType==="stylus"),zg=e=>e.touches&&e.touches.length>1,Xg=()=>{if($t(document.body,b.iosfix)){const e=parseInt(document.body.style.top,10);dt(document.body,b.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},Yg=()=>{const e=document.createElement("div");e.className=b["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let Sn=null;const Qg=e=>{Sn===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(Sn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Sn+Yg()}px`)},Jg=()=>{Sn!==null&&(document.body.style.paddingRight=`${Sn}px`,Sn=null)};function bc(e,t,n,o){ws()?tr(e,o):(Oh(n).then(()=>tr(e,o)),hc(L)),Ac?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),Ui()&&(Jg(),Xg(),wc()),Zg()}function Zg(){dt([document.documentElement,document.body],[b.shown,b["height-auto"],b["no-backdrop"],b["toast-shown"]])}function Yt(e){e=t0(e);const t=Fn.swalPromiseResolve.get(this),n=e0(this);this.isAwaitingPromise?e.isDismissed||(go(this),t(e)):n&&t(e)}const e0=e=>{const t=se();if(!t)return!1;const n=oe.innerParams.get(e);if(!n||$t(t,n.hideClass.popup))return!1;dt(t,n.showClass.popup),ne(t,n.hideClass.popup);const o=Ge();return dt(o,n.showClass.backdrop),ne(o,n.hideClass.backdrop),n0(e,t,n),!0};function yc(e){const t=Fn.swalPromiseReject.get(this);go(this),t&&t(e)}const go=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,oe.innerParams.get(e)||e._destroy())},t0=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),n0=(e,t,n)=>{var o;const s=Ge(),i=ic(t);typeof n.willClose=="function"&&n.willClose(t),(o=L.eventEmitter)===null||o===void 0||o.emit("willClose",t),i&&s?o0(e,t,s,!!n.returnFocus,n.didClose):s&&bc(e,s,!!n.returnFocus,n.didClose)},o0=(e,t,n,o,s)=>{L.swalCloseEventFinishedCallback=bc.bind(null,e,n,o,s);const i=function(a){if(a.target===t){var r;(r=L.swalCloseEventFinishedCallback)===null||r===void 0||r.call(L),delete L.swalCloseEventFinishedCallback,t.removeEventListener("animationend",i),t.removeEventListener("transitionend",i)}};t.addEventListener("animationend",i),t.addEventListener("transitionend",i)},tr=(e,t)=>{setTimeout(()=>{var n;typeof t=="function"&&t.bind(e.params)(),(n=L.eventEmitter)===null||n===void 0||n.emit("didClose"),e._destroy&&e._destroy()})},Dn=e=>{let t=se();if(t||new ro,t=se(),!t)return;const n=$n();ws()?Re(Mn()):s0(t,e),Pe(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},s0=(e,t)=>{const n=fo(),o=$n();!n||!o||(!t&&Ze(Nt())&&(t=Nt()),Pe(n),t&&(Re(t),o.setAttribute("data-button-to-replace",t.className),n.insertBefore(o,t)),ne([e,n],b.loading))},i0=(e,t)=>{t.input==="select"||t.input==="radio"?u0(e,t):["text","email","number","tel","textarea"].some(n=>n===t.input)&&(Di(t.inputValue)||Mi(t.inputValue))&&(Dn(Nt()),d0(e,t))},a0=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return r0(n);case"radio":return l0(n);case"file":return c0(n);default:return t.inputAutoTrim?n.value.trim():n.value}},r0=e=>e.checked?1:0,l0=e=>e.checked?e.value:null,c0=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,u0=(e,t)=>{const n=se();if(!n)return;const o=s=>{t.input==="select"?p0(n,Go(s),t):t.input==="radio"&&f0(n,Go(s),t)};Di(t.inputOptions)||Mi(t.inputOptions)?(Dn(Nt()),uo(t.inputOptions).then(s=>{e.hideLoading(),o(s)})):typeof t.inputOptions=="object"?o(t.inputOptions):hn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},d0=(e,t)=>{const n=e.getInput();n&&(Re(n),uo(t.inputValue).then(o=>{n.value=t.input==="number"?`${parseFloat(o)||0}`:`${o}`,Pe(n),n.focus(),e.hideLoading()}).catch(o=>{hn(`Error in inputValue promise: ${o}`),n.value="",Pe(n),n.focus(),e.hideLoading()}))};function p0(e,t,n){const o=Xt(e,b.select);if(!o)return;const s=(i,a,r)=>{const l=document.createElement("option");l.value=r,at(l,a),l.selected=vc(r,n.inputValue),i.appendChild(l)};t.forEach(i=>{const a=i[0],r=i[1];if(Array.isArray(r)){const l=document.createElement("optgroup");l.label=a,l.disabled=!1,o.appendChild(l),r.forEach(u=>s(l,u[1],u[0]))}else s(o,r,a)}),o.focus()}function f0(e,t,n){const o=Xt(e,b.radio);if(!o)return;t.forEach(i=>{const a=i[0],r=i[1],l=document.createElement("input"),u=document.createElement("label");l.type="radio",l.name=b.radio,l.value=a,vc(a,n.inputValue)&&(l.checked=!0);const c=document.createElement("span");at(c,r),c.className=b.label,u.appendChild(l),u.appendChild(c),o.appendChild(u)});const s=o.querySelectorAll("input");s.length&&s[0].focus()}const Go=e=>{const t=[];return e instanceof Map?e.forEach((n,o)=>{let s=n;typeof s=="object"&&(s=Go(s)),t.push([o,s])}):Object.keys(e).forEach(n=>{let o=e[n];typeof o=="object"&&(o=Go(o)),t.push([n,o])}),t},vc=(e,t)=>!!t&&t!==null&&t!==void 0&&t.toString()===e.toString(),m0=e=>{const t=oe.innerParams.get(e);e.disableButtons(),t.input?Ec(e,"confirm"):Ki(e,!0)},h0=e=>{const t=oe.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Ec(e,"deny"):Wi(e,!1)},g0=(e,t)=>{e.disableButtons(),t(Rn.cancel)},Ec=(e,t)=>{const n=oe.innerParams.get(e);if(!n.input){hn(`The "input" parameter is needed to be set when using returnInputValueOn${Fi(t)}`);return}const o=e.getInput(),s=a0(e,n);n.inputValidator?w0(e,s,t):o&&!o.checkValidity()?(e.enableButtons(),e.showValidationMessage(n.validationMessage||o.validationMessage)):t==="deny"?Wi(e,s):Ki(e,s)},w0=(e,t,n)=>{const o=oe.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>uo(o.inputValidator(t,o.validationMessage))).then(i=>{e.enableButtons(),e.enableInput(),i?e.showValidationMessage(i):n==="deny"?Wi(e,t):Ki(e,t)})},Wi=(e,t)=>{const n=oe.innerParams.get(e);n.showLoaderOnDeny&&Dn(gn()),n.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>uo(n.preDeny(t,n.validationMessage))).then(s=>{s===!1?(e.hideLoading(),go(e)):e.close({isDenied:!0,value:typeof s>"u"?t:s})}).catch(s=>Ic(e,s))):e.close({isDenied:!0,value:t})},nr=(e,t)=>{e.close({isConfirmed:!0,value:t})},Ic=(e,t)=>{e.rejectPromise(t)},Ki=(e,t)=>{const n=oe.innerParams.get(e);n.showLoaderOnConfirm&&Dn(),n.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>uo(n.preConfirm(t,n.validationMessage))).then(s=>{Ze(hs())||s===!1?(e.hideLoading(),go(e)):nr(e,typeof s>"u"?t:s)}).catch(s=>Ic(e,s))):nr(e,t)};function Wo(){const e=oe.innerParams.get(this);if(!e)return;const t=oe.domCache.get(this);Re(t.loader),ws()?e.icon&&Pe(Mn()):A0(t),dt([t.popup,t.actions],b.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1;const n=oe.focusedElement.get(this);n instanceof HTMLElement&&document.activeElement===document.body&&n.focus(),oe.focusedElement.delete(this)}const A0=e=>{const t=e.loader.getAttribute("data-button-to-replace"),n=t?e.popup.getElementsByClassName(t):[];n.length?Pe(n[0],"inline-block"):Gh()&&Re(e.actions)};function _c(){const e=oe.innerParams.get(this),t=oe.domCache.get(this);return t?As(t.popup,e.input):null}function xc(e,t,n){const o=oe.domCache.get(e);t.forEach(s=>{o[s].disabled=n})}function Cc(e,t){const n=se();if(!(!n||!e))if(e.type==="radio"){const o=n.querySelectorAll(`[name="${b.radio}"]`);for(let s=0;s<o.length;s++)o[s].disabled=t}else e.disabled=t}function Bc(){xc(this,["confirmButton","denyButton","cancelButton"],!1);const e=oe.focusedElement.get(this);e instanceof HTMLElement&&document.activeElement===document.body&&e.focus(),oe.focusedElement.delete(this)}function Sc(){oe.focusedElement.set(this,document.activeElement),xc(this,["confirmButton","denyButton","cancelButton"],!0)}function Nc(){Cc(this.getInput(),!1)}function Pc(){Cc(this.getInput(),!0)}function kc(e){const t=oe.domCache.get(this),n=oe.innerParams.get(this);at(t.validationMessage,e),t.validationMessage.className=b["validation-message"],n.customClass&&n.customClass.validationMessage&&ne(t.validationMessage,n.customClass.validationMessage),Pe(t.validationMessage);const o=this.getInput();o&&(o.setAttribute("aria-invalid","true"),o.setAttribute("aria-describedby",b["validation-message"]),oc(o),ne(o,b.inputerror))}function Tc(){const e=oe.domCache.get(this);e.validationMessage&&Re(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),dt(t,b.inputerror))}const Qt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},b0=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],y0={allowEnterKey:void 0},v0=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Fc=e=>Object.prototype.hasOwnProperty.call(Qt,e),Dc=e=>b0.indexOf(e)!==-1,Mc=e=>y0[e],E0=e=>{Fc(e)||He(`Unknown parameter "${e}"`)},I0=e=>{v0.includes(e)&&He(`The parameter "${e}" is incompatible with toasts`)},_0=e=>{const t=Mc(e);t&&Zl(e,t)},Oc=e=>{e.backdrop===!1&&e.allowOutsideClick&&He('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&He(`Invalid theme "${e.theme}"`);for(const t in e)E0(t),e.toast&&I0(t),_0(t)};function $c(e){const t=Ge(),n=se(),o=oe.innerParams.get(this);if(!n||$t(n,o.hideClass.popup)){He("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=x0(e),i=Object.assign({},o,s);Oc(i),t&&(t.dataset.swal2Theme=i.theme),fc(this,i),oe.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const x0=e=>{const t={};return Object.keys(e).forEach(n=>{if(Dc(n)){const o=e;t[n]=o[n]}else He(`Invalid parameter to update: ${n}`)}),t};function Rc(){var e;const t=oe.domCache.get(this),n=oe.innerParams.get(this);if(!n){Lc(this);return}t.popup&&L.swalCloseEventFinishedCallback&&(L.swalCloseEventFinishedCallback(),delete L.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),(e=L.eventEmitter)===null||e===void 0||e.emit("didDestroy"),C0(this)}const C0=e=>{Lc(e),delete e.params,delete L.keydownHandler,delete L.keydownTarget,delete L.currentInstance},Lc=e=>{e.isAwaitingPromise?(Ms(oe,e),e.isAwaitingPromise=!0):(Ms(Fn,e),Ms(oe,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},Ms=(e,t)=>{for(const n in e)e[n].delete(t)};var B0=Object.freeze({__proto__:null,_destroy:Rc,close:Yt,closeModal:Yt,closePopup:Yt,closeToast:Yt,disableButtons:Sc,disableInput:Pc,disableLoading:Wo,enableButtons:Bc,enableInput:Nc,getInput:_c,handleAwaitingPromise:go,hideLoading:Wo,rejectPromise:yc,resetValidationMessage:Tc,showValidationMessage:kc,update:$c});const S0=(e,t,n)=>{e.toast?N0(e,t,n):(k0(t),T0(t),F0(e,t,n))},N0=(e,t,n)=>{t.popup.onclick=()=>{e&&(P0(e)||e.timer||e.input)||n(Rn.close)}},P0=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let Ko=!1;const k0=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(Ko=!0)}}},T0=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(n){e.popup.onmouseup=()=>{},(n.target===e.popup||n.target instanceof HTMLElement&&e.popup.contains(n.target))&&(Ko=!0)}}},F0=(e,t,n)=>{t.container.onclick=o=>{if(Ko){Ko=!1;return}o.target===t.container&&ms(e.allowOutsideClick)&&n(Rn.backdrop)}},D0=e=>typeof e=="object"&&e!==null&&"jquery"in e,or=e=>e instanceof Element||D0(e),M0=e=>{const t={};return typeof e[0]=="object"&&!or(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach((n,o)=>{const s=e[o];typeof s=="string"||or(s)?t[n]=s:s!==void 0&&hn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),t};function O0(...e){return new this(...e)}function $0(e){class t extends this{_main(o,s){return super._main(o,Object.assign({},e,s))}}return t}const R0=()=>L.timeout&&L.timeout.getTimerLeft(),Uc=()=>{if(L.timeout)return Kh(),L.timeout.stop()},Vc=()=>{if(L.timeout){const e=L.timeout.start();return ji(e),e}},L0=()=>{const e=L.timeout;return e&&(e.running?Uc():Vc())},U0=e=>{if(L.timeout){const t=L.timeout.increase(e);return ji(t,!0),t}},V0=()=>!!(L.timeout&&L.timeout.isRunning());let sr=!1;const ni={};function j0(e="data-swal-template"){ni[e]=this,sr||(document.body.addEventListener("click",q0),sr=!0)}const q0=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const n in ni){const o=t.getAttribute&&t.getAttribute(n);if(o){ni[n].fire({template:o});return}}};class H0{constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,n){const o=this._getHandlersByEventName(t);o.includes(n)||o.push(n)}once(t,n){const o=(...s)=>{this.removeListener(t,o),n.apply(this,s)};this.on(t,o)}emit(t,...n){this._getHandlersByEventName(t).forEach(o=>{try{o.apply(this,n)}catch(s){console.error(s)}})}removeListener(t,n){const o=this._getHandlersByEventName(t),s=o.indexOf(n);s>-1&&o.splice(s,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}L.eventEmitter=new H0;const G0=(e,t)=>{L.eventEmitter&&L.eventEmitter.on(e,t)},W0=(e,t)=>{L.eventEmitter&&L.eventEmitter.once(e,t)},K0=(e,t)=>{if(L.eventEmitter){if(!e){L.eventEmitter.reset();return}t?L.eventEmitter.removeListener(e,t):L.eventEmitter.removeAllListeners(e)}};var z0=Object.freeze({__proto__:null,argsToParams:M0,bindClickHandler:j0,clickCancel:Mg,clickConfirm:mc,clickDeny:Dg,enableLoading:Dn,fire:O0,getActions:fo,getCancelButton:On,getCloseButton:Ri,getConfirmButton:Nt,getContainer:Ge,getDenyButton:gn,getFocusableElements:Li,getFooter:nc,getHtmlContainer:Oi,getIcon:Mn,getIconContent:Uh,getImage:tc,getInputLabel:Vh,getLoader:$n,getPopup:se,getProgressSteps:$i,getTimerLeft:R0,getTimerProgressBar:gs,getTitle:ec,getValidationMessage:hs,increaseTimer:U0,isDeprecatedParameter:Mc,isLoading:qh,isTimerRunning:V0,isUpdatableParameter:Dc,isValidParameter:Fc,isVisible:Fg,mixin:$0,off:K0,on:G0,once:W0,resumeTimer:Vc,showLoading:Dn,stopTimer:Uc,toggleTimer:L0});class X0{constructor(t,n){this.callback=t,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const n=this.running;return n&&this.stop(),this.remaining+=t,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const jc=["swal-title","swal-html","swal-footer"],Y0=e=>{const t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return sw(n),Object.assign(Q0(n),J0(n),Z0(n),ew(n),tw(n),nw(n),ow(n,jc))},Q0=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(o=>{mn(o,["name","value"]);const s=o.getAttribute("name"),i=o.getAttribute("value");!s||!i||(s in Qt&&typeof Qt[s]=="boolean"?t[s]=i!=="false":s in Qt&&typeof Qt[s]=="object"?t[s]=JSON.parse(i):t[s]=i)}),t},J0=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(o=>{const s=o.getAttribute("name"),i=o.getAttribute("value");!s||!i||(t[s]=new Function(`return ${i}`)())}),t},Z0=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(o=>{mn(o,["type","color","aria-label"]);const s=o.getAttribute("type");if(!(!s||!["confirm","cancel","deny"].includes(s))){if(t[`${s}ButtonText`]=o.innerHTML,t[`show${Fi(s)}Button`]=!0,o.hasAttribute("color")){const i=o.getAttribute("color");i!==null&&(t[`${s}ButtonColor`]=i)}if(o.hasAttribute("aria-label")){const i=o.getAttribute("aria-label");i!==null&&(t[`${s}ButtonAriaLabel`]=i)}}}),t},ew=e=>{const t={},n=e.querySelector("swal-image");return n&&(mn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt")||void 0)),t},tw=e=>{const t={},n=e.querySelector("swal-icon");return n&&(mn(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},nw=e=>{const t={},n=e.querySelector("swal-input");n&&(mn(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const o=Array.from(e.querySelectorAll("swal-input-option"));return o.length&&(t.inputOptions={},o.forEach(s=>{mn(s,["value"]);const i=s.getAttribute("value");if(!i)return;const a=s.innerHTML;t.inputOptions[i]=a})),t},ow=(e,t)=>{const n={};for(const o in t){const s=t[o],i=e.querySelector(s);i&&(mn(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},sw=e=>{const t=jc.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(n=>{const o=n.tagName.toLowerCase();t.includes(o)||He(`Unrecognized element <${o}>`)})},mn=(e,t)=>{Array.from(e.attributes).forEach(n=>{t.indexOf(n.name)===-1&&He([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},qc=10,iw=e=>{var t,n;const o=Ge(),s=se();if(!o||!s)return;typeof e.willOpen=="function"&&e.willOpen(s),(t=L.eventEmitter)===null||t===void 0||t.emit("willOpen",s);const a=window.getComputedStyle(document.body).overflowY;if(lw(o,s,e),setTimeout(()=>{aw(o,s)},qc),Ui()&&(rw(o,e.scrollbarPadding!==void 0?e.scrollbarPadding:!1,a),qg()),!ws()&&!L.previousActiveElement&&(L.previousActiveElement=document.activeElement),typeof e.didOpen=="function"){const r=e.didOpen;setTimeout(()=>r(s))}(n=L.eventEmitter)===null||n===void 0||n.emit("didOpen",s)},zo=e=>{const t=se();if(!t||e.target!==t)return;const n=Ge();n&&(t.removeEventListener("animationend",zo),t.removeEventListener("transitionend",zo),n.style.overflowY="auto",dt(n,b["no-transition"]))},aw=(e,t)=>{ic(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",zo),t.addEventListener("transitionend",zo)):e.style.overflowY="auto"},rw=(e,t,n)=>{Hg(),t&&n!=="hidden"&&Qg(n),setTimeout(()=>{e.scrollTop=0})},lw=(e,t,n)=>{var o;(o=n.showClass)!==null&&o!==void 0&&o.backdrop&&ne(e,n.showClass.backdrop),n.animation?(t.style.setProperty("opacity","0","important"),Pe(t,"grid"),setTimeout(()=>{var s;(s=n.showClass)!==null&&s!==void 0&&s.popup&&ne(t,n.showClass.popup),t.style.removeProperty("opacity")},qc)):Pe(t,"grid"),ne([document.documentElement,document.body],b.shown),n.heightAuto&&n.backdrop&&!n.toast&&ne([document.documentElement,document.body],b["height-auto"])};var ir={email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function cw(e){e.inputValidator||(e.input==="email"&&(e.inputValidator=ir.email),e.input==="url"&&(e.inputValidator=ir.url))}function uw(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(He('Target parameter is not valid, defaulting to "body"'),e.target="body")}function dw(e){cw(e),e.showLoaderOnConfirm&&!e.preConfirm&&He(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),uw(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),tg(e)}let It;var vo=new WeakMap;class Ce{constructor(...t){if(Th(this,vo,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;It=this;const n=Object.freeze(this.constructor.argsToParams(t));this.params=n,this.isAwaitingPromise=!1,Fh(vo,this,this._main(It.params))}_main(t,n={}){if(Oc(Object.assign({},n,t)),L.currentInstance){const i=Fn.swalPromiseResolve.get(L.currentInstance),{isAwaitingPromise:a}=L.currentInstance;L.currentInstance._destroy(),a||i({isDismissed:!0}),Ui()&&wc()}L.currentInstance=It;const o=fw(t,n);dw(o),Object.freeze(o),L.timeout&&(L.timeout.stop(),delete L.timeout),clearTimeout(L.restoreFocusTimeout);const s=mw(It);return fc(It,o),oe.innerParams.set(It,o),pw(It,s,o)}then(t){return Xa(vo,this).then(t)}finally(t){return Xa(vo,this).finally(t)}}const pw=(e,t,n)=>new Promise((o,s)=>{const i=a=>{e.close({isDismissed:!0,dismiss:a,isConfirmed:!1,isDenied:!1})};Fn.swalPromiseResolve.set(e,o),Fn.swalPromiseReject.set(e,s),t.confirmButton.onclick=()=>{m0(e)},t.denyButton.onclick=()=>{h0(e)},t.cancelButton.onclick=()=>{g0(e,i)},t.closeButton.onclick=()=>{i(Rn.close)},S0(n,t,i),Og(L,n,i),i0(e,n),iw(n),hw(L,n,i),gw(t,n),setTimeout(()=>{t.container.scrollTop=0})}),fw=(e,t)=>{const n=Y0(e),o=Object.assign({},Qt,t,n,e);return o.showClass=Object.assign({},Qt.showClass,o.showClass),o.hideClass=Object.assign({},Qt.hideClass,o.hideClass),o.animation===!1&&(o.showClass={backdrop:"swal2-noanimation"},o.hideClass={}),o},mw=e=>{const t={popup:se(),container:Ge(),actions:fo(),confirmButton:Nt(),denyButton:gn(),cancelButton:On(),loader:$n(),closeButton:Ri(),validationMessage:hs(),progressSteps:$i()};return oe.domCache.set(e,t),t},hw=(e,t,n)=>{const o=gs();Re(o),t.timer&&(e.timeout=new X0(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&o&&(Pe(o),st(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&ji(t.timer)})))},gw=(e,t)=>{if(!t.toast){if(!ms(t.allowEnterKey)){Zl("allowEnterKey","preConfirm: () => false"),e.popup.focus();return}ww(e)||Aw(e,t)||ti(-1,1)}},ww=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const n of t)if(n instanceof HTMLElement&&Ze(n))return n.focus(),!0;return!1},Aw=(e,t)=>t.focusDeny&&Ze(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Ze(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&Ze(e.confirmButton)?(e.confirmButton.focus(),!0):!1;Ce.prototype.disableButtons=Sc;Ce.prototype.enableButtons=Bc;Ce.prototype.getInput=_c;Ce.prototype.disableInput=Pc;Ce.prototype.enableInput=Nc;Ce.prototype.hideLoading=Wo;Ce.prototype.disableLoading=Wo;Ce.prototype.showValidationMessage=kc;Ce.prototype.resetValidationMessage=Tc;Ce.prototype.close=Yt;Ce.prototype.closePopup=Yt;Ce.prototype.closeModal=Yt;Ce.prototype.closeToast=Yt;Ce.prototype.rejectPromise=yc;Ce.prototype.update=$c;Ce.prototype._destroy=Rc;Object.assign(Ce,z0);Object.keys(B0).forEach(e=>{Ce[e]=function(...t){if(It&&It[e])return It[e](...t)}});Ce.DismissReason=Rn;Ce.version="11.26.21";const ro=Ce;ro.default=ro;typeof document<"u"&&(function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch{n.innerText=t}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const ar="/assets/schedule-placeholder-B7Y8SP8l.png",bw={class:"page-hero"},yw={class:"container"},vw={class:"content-panel"},Ew={class:"schedule-layout"},Iw={class:"schedule-visual"},_w=["src"],xw={__name:"ScheduleView",setup(e){const t=()=>{ro.fire({imageUrl:ar,imageAlt:"計畫時程圖",showConfirmButton:!1,showCloseButton:!0,customClass:{popup:"schedule-image-swal-popup",closeButton:"solution-swal-close"},width:"min(1200px, 96vw)",padding:"1rem",background:"#ffffff"})};return(n,o)=>(F(),R("section",bw,[w("div",yw,[w("div",vw,[o[1]||(o[1]=w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1",null,"計畫時程"),w("span",{class:"title-line"})],-1)),w("div",Ew,[o[0]||(o[0]=Sl('<article class="schedule-text" data-v-c69bd937><section class="schedule-phase" data-v-c69bd937><h2 data-v-c69bd937>公開徵選 AI 服務供應商</h2><p data-v-c69bd937>完成 AI 應用方案遴選，公告合作供應商名單。</p></section><section class="schedule-phase" data-v-c69bd937><h2 data-v-c69bd937>受輔導企業申請受理期間</h2><ul data-v-c69bd937><li data-v-c69bd937>申請作業：受理具 AI 導入需求之新北企業依公告日期申請</li><li data-v-c69bd937>審查作業：依徵件情況適時召開審查會議</li></ul></section><section class="schedule-phase" data-v-c69bd937><h2 data-v-c69bd937>實體媒合會與需求對接</h2><p data-v-c69bd937>舉辦企業 × AI供應商實體媒合活動，協助精準配對。</p></section><section class="schedule-phase" data-v-c69bd937><h2 data-v-c69bd937>專業顧問輔導與AI方案導入使用協助</h2><ul data-v-c69bd937><li data-v-c69bd937>顧問訪視與需求確認</li><li data-v-c69bd937>協助企業完成方案簽約與導入</li></ul></section><section class="schedule-phase" data-v-c69bd937><h2 data-v-c69bd937>完成購置並申請補助核銷</h2><ul data-v-c69bd937><li data-v-c69bd937>企業須先完成購置並支付費用</li><li data-v-c69bd937>檢附發票及合約辦理請款</li></ul></section></article>',1)),w("figure",Iw,[w("button",{type:"button",class:"schedule-image-trigger","aria-label":"放大檢視計畫時程圖",onClick:t},[w("img",{src:he(ar),alt:"計畫時程表暫時示意圖（1024x768）",width:"1024",height:"768"},null,8,_w)])])])])])]))}},Cw=qt(xw,[["__scopeId","data-v-c69bd937"]]),Hc=[{question:"哪些企業可以申請本計畫？",answer:`需同時符合以下條件：
• 依中華民國法律於本市完成登記之公司、商業、工廠，或經主辦單位核定改善計畫之納管工廠與特定工廠。
• 非陸資企業或外國營利事業在臺分公司
• 非政府機關及其附屬單位
• 最近3年內無重大違法或欠稅情形`},{question:"本計畫補助金額是多少？需要自籌款嗎？",answer:`• 每家企業最高補助 新臺幣4萬元
• 採實報實銷
• 企業需自籌至少 50%以上經費
• 須先全額支付AI服務費用後，始得申請補助款`},{question:"補助是先撥款還是後核銷？",answer:"採「先購置、後核銷」方式。企業須先完成與AI服務供應商簽約並支付費用，於規定期限內檢附發票、合約等文件辦理請款。"},{question:"如果公司已申請其他政府AI數位轉型補助，還可以申請本計畫嗎？",answer:`若所購買之AI應用服務方案與其他政府補助計畫屬「同一或相同性質項目」，則不得重複補助。
不同補助項目且未重疊者，須由審查單位認定。`},{question:"申請截止時間是什麼時候？",answer:`• 自公告日起至115年5月15日止。
• 並依徵件情況適時召開審查會議`},{question:"審查重點是什麼？如何提高通過率？",answer:`審查標準如下：
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

請於期限內 Email 寄送至：ntpcai@twcloud.ai`},{question:"是否只能購買一項方案？",answer:"否。企業可依需求選擇多項AI應用服務方案，惟總補助上限仍為4萬元。"}],Bw={class:"page-hero"},Sw={class:"container"},Nw={class:"content-panel"},Pw={class:"faq-list"},kw=["aria-expanded","aria-controls","onClick"],Tw={class:"faq-index"},Fw={class:"faq-main"},Dw={class:"faq-question"},Mw=["id"],Ow={class:"faq-answer-text"},$w={__name:"FAQView",setup(e){const t=je([]),n=s=>{if(t.value.includes(s)){t.value=t.value.filter(i=>i!==s);return}t.value=[...t.value,s]},o=s=>t.value.includes(s);return(s,i)=>(F(),R("section",Bw,[w("div",Sw,[w("div",Nw,[i[1]||(i[1]=w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1",null,"FAQ"),w("span",{class:"title-line"})],-1)),w("div",Pw,[(F(!0),R(le,null,Oe(he(Hc),(a,r)=>(F(),R("article",{key:a.question,class:ke(["faq-item",{open:o(r)}])},[w("button",{class:"faq-trigger",type:"button","aria-expanded":o(r).toString(),"aria-controls":`faq-answer-${r}`,onClick:l=>n(r)},[w("span",Tw,ue(r+1),1),w("span",Fw,[w("span",Dw,ue(a.question),1),i[0]||(i[0]=w("span",{class:"faq-divider","aria-hidden":"true"},null,-1))]),w("i",{class:ke(["fa-solid fa-chevron-down faq-chevron",{open:o(r)}]),"aria-hidden":"true"},null,2)],8,kw),el(w("div",{id:`faq-answer-${r}`,class:"faq-answer"},[w("p",Ow,ue(a.answer),1)],8,Mw),[[np,o(r)]])],2))),128))])])])]))}},Rw=qt($w,[["__scopeId","data-v-1a53bd7c"]]),Lw="/assets/logo1-DAX-1uNl.svg",Uw="/assets/logo2-OnW2q4Uc.svg",Vw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAACCCAMAAACTkVQxAAABPlBMVEX///8AAABI7tiOjo75+fmWlpYwMDDX19ebm5tycnLb29u1tbVO395M49yehf6nhP5K6NtQ2uBR1eKxg/5T0OSYhv5VzOa3g/5Xx+hYwumOh/5dXV2+gv3QgP057dajo6Navevt7e1cuO3KyspetO/BwcEbGxuBgYFgr/GCiP83NzcpKSnl5eVhqvMSEhKnp6dAQEBlofdPT09jpfRnm/hsbGxJSUkhISFol/pqkvxuiv9aWlq5ublwgv+MgP639+598uGl9urh+fmD6uWI5OnS8Pfc+/fL+fJ1xu6g0PVo8N622PjM4vrd6vzt9P6WtfuIp/2/yv/j3f/Z0/+wtf+Hk//Luv6Tv/fx6/++ov6hev6+lP7Sq/6Vov/mzf69eP19ff7X2P/Ylv26uP7co/3jtf6hl/6tm/7Uxv/Hhv0ZkVlgAAAIrElEQVR4nO2b/X/TRBjAc2u6dq0OFBFd2WqsbSEtbSl2ha0FHCoiMBlvjqEwERX+/3/Ae8nLc3dPuiXKkn0+z/cHVi+Xy+W+ubvnLtFxCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgPjiuhpmYa9VS4N66vbQRs/RdUkYmKYufjUGQVOXnsyH/MeR/qyKpxdryUJf1xT/w/Ib802etKGnIC6yLOrBSkFJmbLkifvgrjuOJrC7PM2on1KnHIB2VWIoSToeEnTtnebtDNm4lZO35U+b3mo5om6AdZbOziVPh7VtjM5E0YdvyUJeNdQdtxjzxtxY74EmbjFVEO3dVSpW3t8oHHEx9ZcpmrClgyyq1fKocuN9/9PHZJZ2NxI7AH1v1t8kGE/lDOph0RNM5ddl0Lhuopu4y7gQ6aDAm/MF+MOZZ+6L5o37QmbrOTJYKHDR5pg5WnxV2+h3sfPoJ4iCpH4i2V39747K6Pdla3Mx4zPorspnqrK3GpG5vyqADj5XHso2AA8bb2WlXYgde2LE0B1XRPzy7OmV2+h388BnmYCn5hMBBhc36YhIIHPDBhbWnw5HsGv6yM5aTRddvsW6JgXO9Oqs5uoNwFogdiGP+2DEdtBAHdVNBgR24lbakZdRo53PMwcaPySUFDrps2Vf3Kx24bMzc7lha4YPGaCpGeN4P+NQwih34bLQsR33oQGgbtqCDsoP2g7LtoGUpKKyD1nZcR+0+dr/AHGzcXVBW4EAVJp5pNeyMmS+mVx4HBSGJGGK4AxHRhKfW1EmOMR/0+YESmA+mvI51WepoKka5YD6osJ5Zl76toKAOvE1YxxY89CXmYMFk4IhRWfxbFwGQnEoDB2Xegp5qbm5DNC2/965sw8iBDFXlmSAu4o/yQMp0ZfUqKlhVTVeWx5zwmBmcuoPT4sB4WGA/+AlzsCAmEgzlSF/uiVvbFtH+spwVKh3eeptiAPE6IoacDXizlsSg3vDDUyciu9vjzvqDSlRg2x+MhBF3xOmJnlXvDcZ9R11G/XKXR34jPiXAB7c1LbIDT39YZuDQva8QBxu386ppWsAAy8rdIjtY1hRUwZF7XyMONn7OraYp6YLbmsTLhAI60FeRXXDk/iXMwYKotFhUwW2NnCI70FeRDXDkwZVvMAc7uVU1HTNwW3xdXWAHJWhAPC4RD69dQhwsWhgUigq8LxFmFNaBvoocgNrsXruCOFi4MJBUSxlQMWUr/E+71JmZF9KMD0YBrQfvS8ZLRXVgrCJBVOpexRwsXhhIpiwDqtWjVrEKbVt5AbArhw60hYGyVlAHxsIAhtePMAdHLAwkepR1TOTrhngSNcvUxhXTAezK0d71CCQ2VVJBHTS0hoDr41+uIw6OtTD4AA48La/hoIUdgjcWRnoFdQCflgYciB7d+NZ2cJxe8EEcdBY4gF15JUyEC4Mo0iuog1avoxiV+yB5b+vGdcvBxtKR07Hk/3ewqefVHHjgwDhMbILEONIrqAOM3b2tOebgWJ3A+QAOJkbeUsLVemFTwgkcRHqFcNBvzULq+u7W7uMn7548ebK3t/f02Xy+tWU5uHNXFVBvhsxqCVfRB45jotoVdVDC8yrgGj8cS2swM+je+Ttom49TNAPvP189uCk5PJzPL29tSQfXr/56/+EuZ2dnR9axbzbGGL9QrYJQi5p3hh5X7Yc5GCb4ksA1ftjaHswLH7W8HdTtqD0YKPdfHJxZXV09f35tbe2yQDrYevRAL6C2bRXArJ3iBUQbB0ndR4A4QF6DxQ7gm+JoYQDvFG4B5+ygD+OfELVn//zgzBnLwfyGYUALNDI5iIL4dA5qyGUjB3BDaBgmwgm8qpWeqwPkWWIqbHZfHpyzHcyfGgW4PlpCmqpnc+Bhlw0dVJA0bQJf0UvP0wGuQE5hLy+csx3M98wS8O2HKnKtRLI5AN/HbUaDYdDecGEwCU+Ac9a2UXqODrDuzNRA8oIrsBxYvcD8TC1gBblWMpkcwAvHS1/lAG4IbYYFwAncN0vPz4GHKxDbWL+9RhzMf0+su0ZCVJREFgd61GM4AMPjNGxDrcdbDZubAxcfR8Q21vPXFxEHz8wSrPgc3sexyeDAiHp0BzBMO2phEJCbA2OdHyDm41evL2IOzPrY8Xmmaqd3YG6Hag5gnBaW6MH6tezS83JgLswUYgp7zBUgDnaNAtpoAchTdgSpHVhRD3QAN4SiVzpwkwT7/jonB2hYL1dn+0KB6WDtcN8oIGFCR56yI0jrwI56gAP4YDTDk+EEjryIy8sBfFxixPeAu+vriIPDP4wCPFzBDLvYYlI6QKKeyEEZPhjRZyBwAp+gpefiIGEcEVPYe8zBobkwSJjQUy0MAlI6AFFPuB0aOVgBfqKXA3ACTwjZ8nCgvQCMEY3wZh1xcPNPswR8Qk+3MAhI5WAAp7Ew6tHf+SmiNQCcwHsJTZqDAw9XIIbyt+uIg5vWwgC7a3v5eTzS9QNAlB+pTfRywPqOBePkHbi4AhEw/LWOOLj5t1lC8oSegawO4g9ZEAdhdKZ9mpB4gZN3gG2VqoDh1WvMwZpZAD6hDzLWN6ODZnzQdhDu22rfsSSHbCfuAF/diihiXykwHZgLA+x/nmDJHf0osjmAH79aDqLoDO7qDpFiA07aAT4SyadKjUS6g4N/rGqgEjcz1zaTA/jxq+Ugis7gtgW6MAgogoNNdftvLQcHq+/sErDZoGlnOy5ZHOhTj+Eg6iLodywYJz4WWW9dtsOB8hUciy6cOzg4gxhA9okG1f9S1QwOOvr19Jep29g5i+OFE3fgdsH2ib9SB+P4qzfv198rLrx88c7cngipj+Opbtoop3lxiZWW3oGxJ6X1g2hhADt80sIgIO93+gRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBECfOvxWE8CmJaFHSAAAAAElFTkSuQmCC",jw={class:"page-hero"},qw={class:"container"},Hw={class:"content-panel"},Gw={class:"contact-layout"},Ww={class:"contact-logos","aria-label":"Logo 預留區塊"},Kw={class:"logo-row"},zw={class:"logo-slot logo-slot--gov"},Xw=["src"],Yw={class:"logo-unit"},Qw={class:"logo-slot logo-slot--host"},Jw=["src"],Zw={class:"logo-unit"},eA={class:"logo-slot logo-slot--executor"},tA=["src"],nA={__name:"ContactUsView",setup(e){return(t,n)=>(F(),R("section",jw,[w("div",qw,[w("div",Hw,[n[5]||(n[5]=w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1",null,"聯絡我們"),w("span",{class:"title-line"})],-1)),w("div",Gw,[n[4]||(n[4]=w("article",{class:"contact-info"},[w("h2",null,"聯絡資訊"),w("dl",{class:"contact-list"},[w("div",{class:"contact-row"},[w("dt",null,"諮詢電話"),w("dd",null,"(02) 2898-7447 分機 86542")]),w("div",{class:"contact-row"},[w("dt",null,"Email"),w("dd",null,"ntpcai@twcloud.ai")])])],-1)),w("section",Ww,[w("div",Kw,[w("div",zw,[w("img",{src:he(Lw),alt:"Logo 1"},null,8,Xw)]),n[2]||(n[2]=w("span",{class:"logo-divider","aria-hidden":"true"},"|",-1)),w("div",Yw,[n[0]||(n[0]=w("span",{class:"logo-label"},"主辦單位",-1)),w("div",Qw,[w("img",{src:he(Uw),alt:"Logo 2"},null,8,Jw)])]),n[3]||(n[3]=w("span",{class:"logo-divider","aria-hidden":"true"},"|",-1)),w("div",Zw,[n[1]||(n[1]=w("span",{class:"logo-label"},"執行單位",-1)),w("div",eA,[w("img",{src:he(Vw),alt:"Logo 3"},null,8,tA)])])])])])])])]))}},oA=qt(nA,[["__scopeId","data-v-2bc54d25"]]),sA=`<script setup>
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
    content: '依公告日期',
  },
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
          >
            申請須知與申請表
          </a>
        </header>

        <article class="about-copy">
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

        <section class="about-highlights" aria-label="計畫重點資訊">
          <article v-for="item in highlights" :key="item.title" class="about-highlight-card">
            <header class="about-highlight-head">
              <span>{{ item.title }}</span>
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
`,iA=`<script setup>
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
                <dd>(02) 2898-7447 分機 86542</dd>
              </div>
              <div class="contact-row">
                <dt>Email</dt>
                <dd>ntpcai@twcloud.ai</dd>
              </div>
            </dl>
          </article>

          <section class="contact-logos" aria-label="Logo 預留區塊">
            <div class="logo-row">
              <div class="logo-slot logo-slot--gov">
                <img :src="logo1" alt="Logo 1" />
              </div>
              <span class="logo-divider" aria-hidden="true">|</span>
              <div class="logo-unit">
                <span class="logo-label">主辦單位</span>
                <div class="logo-slot logo-slot--host">
                  <img :src="logo2" alt="Logo 2" />
                </div>
              </div>
              <span class="logo-divider" aria-hidden="true">|</span>
              <div class="logo-unit">
                <span class="logo-label">執行單位</span>
                <div class="logo-slot logo-slot--executor">
                  <img :src="logo3" alt="Logo 3" />
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
`,aA=`<script setup>
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
          <article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item" :class="{ open: isOpen(index) }">
            <button
              class="faq-trigger"
              type="button"
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

            <div v-show="isOpen(index)" :id="\`faq-answer-\${index}\`" class="faq-answer">
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
`,rA=`<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import openingImage from '../assets/opening.png'
import banner1 from '../assets/banner1.png'
// import banner2 from '../assets/banner2.png'
// import banner3 from '../assets/banner3.png'

const banners = [
  { id: 1, title: '首頁輪播 1', src: banner1 },
  // { id: 2, title: '首頁輪播 2', src: banner2 },
  // { id: 3, title: '首頁輪播 3', src: banner3 },
]

const stage = ref('ready')
const activeIndex = ref(0)
const selectedBanner = ref(null)
const touchStartX = ref(0)
const touchDeltaX = ref(0)
const isTouching = ref(false)
const suppressModalClick = ref(false)
let timerId
let suppressTimerId

const isOverlayVisible = computed(() => stage.value !== 'home')
const isReadyStage = computed(() => stage.value === 'ready')
const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSeYelxk39eefWsEqVVhjjfvbdptAsRJBWkEDd5nY1CgmlJKrA/formResponse'
const enterpriseOptions = [
  { id: 'ntpc', label: '我是新北市企業', value: '是' },
  { id: 'other', label: '其他企業', value: '否' },
]

const enterHome = () => {
  stage.value = 'home'
}

const submitEnterpriseChoice = (value) => {
  const payload = new URLSearchParams({
    'entry.987539846': value,
    'entry.987539846_sentinel': value,
  })

  void fetch(googleFormUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: payload.toString(),
    keepalive: true,
  }).catch((error) => {
    console.warn('Google Form submit failed:', error)
  })
}

const selectEnterpriseType = (value) => {
  submitEnterpriseChoice(value)
  enterHome()
}

const openModal = (banner) => {
  selectedBanner.value = banner
}

const onSlideClick = (banner) => {
  if (suppressModalClick.value) {
    suppressModalClick.value = false
    return
  }

  openModal(banner)
}

const closeModal = () => {
  selectedBanner.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
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

const markSuppressModalClick = () => {
  suppressModalClick.value = true

  if (suppressTimerId) {
    window.clearTimeout(suppressTimerId)
  }

  suppressTimerId = window.setTimeout(() => {
    suppressModalClick.value = false
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
    markSuppressModalClick()
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
  document.removeEventListener('keydown', handleKeydown)

  if (suppressTimerId) {
    window.clearTimeout(suppressTimerId)
    suppressTimerId = undefined
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
<\/script>

<template>
  <section class="opening-home">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1></h1>
          <span class="title-line"></span>
        </header>

        <section
          class="home-carousel"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
          @focusin="stopAutoPlay"
          @focusout="startAutoPlay"
        >
          <div
            class="home-carousel-viewport"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchCancel"
          >
            <div class="home-carousel-track" :style="{ transform: \`translateX(-\${activeIndex * 100}%)\` }">
              <figure v-for="banner in banners" :key="banner.id" class="home-carousel-slide">
                <button
                  type="button"
                  class="home-slide-trigger"
                  :aria-label="\`放大檢視 \${banner.title}\`"
                  @click="onSlideClick(banner)"
                >
                  <img :src="banner.src" :alt="banner.title" />
                </button>
              </figure>
            </div>
          </div>
          <div class="home-carousel-indicators" aria-label="首頁輪播指示器">
            <button
              v-for="(banner, index) in banners"
              :key="banner.id"
              type="button"
              class="home-indicator"
              :class="{ active: index === activeIndex }"
              :aria-label="\`切換到第 \${index + 1} 張圖片\`"
              @click="goTo(index)"
            ></button>
          </div>
        </section>
      </div>
    </div>

    <div v-if="isOverlayVisible" class="opening-overlay">
      <div class="opening-backdrop">
        <img class="opening-backdrop-media opening-backdrop-image" :src="openingImage" alt="開場背景" />
      </div>

      <div class="opening-stage">
        <div v-if="isReadyStage" class="ready-content">
          <h2 class="ready-title">新北產業AI化輔導計畫</h2>
          <p class="ready-subtitle">New Taipei City Industrial AI Mentoring Program</p>
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
        </div>
      </div>
    </div>

    <div v-if="selectedBanner" class="banner-modal" @click.self="closeModal">
      <div class="banner-modal-content">
        <button type="button" class="banner-modal-close" aria-label="關閉圖片放大" @click="closeModal">
          ×
        </button>
        <img :src="selectedBanner.src" :alt="selectedBanner.title" />
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
  cursor: zoom-in;
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

.entry-actions {
  width: min(100%, 440px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;
  margin-top: 50px;
}

.enter-home-btn {
  position: relative;
  width: 100%;
  min-width: 0;
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

.banner-modal {
  position: fixed;
  inset: 0;
  z-index: 2300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(8, 12, 34, 0.82);
  backdrop-filter: blur(8px);
}

.banner-modal-content {
  position: relative;
  width: min(1200px, 94vw);
  max-height: 88dvh;
  display: grid;
  place-items: center;
}

.banner-modal-content img {
  max-width: 100%;
  max-height: 90dvh;
  object-fit: contain;
  border-radius: 10px;
}

.banner-modal-close {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: rgba(14, 23, 68, 0.86);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-size: 1.6rem;
  line-height: 1;
}

.banner-modal-close:hover {
  background: rgba(27, 42, 120, 0.9);
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

  .entry-actions {
    width: min(100%, 360px);
    gap: 14px;
    margin-top: 28px;
  }

  .enter-home-btn {
    padding: 12px 26px;
    border-radius: 14px;
    font-size: clamp(1.25rem, 7.2vw, 1.75rem);
  }

  .home-carousel-viewport {
    width: min(100%, 92vw);
  }

  .banner-modal {
    padding: 16px;
  }

  .banner-modal-close {
    width: 36px;
    height: 36px;
    font-size: 1.4rem;
  }
}
</style>
`,lA=`<script setup>
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import schedulePlaceholder from '../assets/schedule-placeholder.png'

const openScheduleImage = () => {
  Swal.fire({
    imageUrl: schedulePlaceholder,
    imageAlt: '計畫時程圖',
    showConfirmButton: false,
    showCloseButton: true,
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
            <button type="button" class="schedule-image-trigger" aria-label="放大檢視計畫時程圖" @click="openScheduleImage">
              <img :src="schedulePlaceholder" alt="計畫時程表暫時示意圖（1024x768）" width="1024" height="768" />
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
`,cA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI助理'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,uA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI創作內容'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,dA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI企業營運管理'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,pA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI居家照護'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,fA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI資訊安全'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,mA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI智能客服'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,hA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI市場洞察'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,gA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI營運流程自動化'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,wA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI智慧製造'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,AA=`<script setup>
import SolutionCatalogView from '../../components/SolutionCatalogView.vue'
import { getCategoryCards } from '../../data/catalogData'

const title = 'AI垂直整合方案'
const items = getCategoryCards(title)
<\/script>

<template>
  <SolutionCatalogView :title="title" :items="items" mode="category" empty-text="目前尚無案例資料。" />
</template>
`,bA=`<script setup>
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

      <div class="category-nav-grid">
        <RouterLink
          v-for="item in categoryNavItems"
          :key="item.slug"
          class="category-nav-item"
          :to="\`/categories/\${item.slug}\`"
        >
          {{ item.label }}
        </RouterLink>
      </div>
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
`,yA=`<script setup>
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

      <div class="vendors-grid">
        <button
          v-for="supplier in pageItems"
          :key="supplier.companyShortName"
          class="vendor-card"
          type="button"
          @click="openSupplierModal(supplier)"
        >
          <span class="vendor-logo-wrap">
            <img
              v-if="supplier.logo"
              :src="supplier.logo"
              :alt="\`\${supplier.companyShortName} logo\`"
            />
            <span v-else class="vendor-logo-placeholder">LOGO</span>
          </span>
          <span class="vendor-name">{{ supplier.companyShortName }}</span>
        </button>
      </div>

      <div class="vendors-pagination" role="tablist" aria-label="供應商頁面切換">
        <button
          v-for="index in pageCount"
          :key="index"
          class="vendors-page-dot"
          :class="{ active: currentPage === index - 1 }"
          type="button"
          :aria-label="\`切換到第 \${index} 頁\`"
          :aria-selected="currentPage === index - 1"
          @click="changePage(index - 1)"
        ></button>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="selectedSupplier" class="supplier-modal-backdrop" @click.self="closeSupplierModal">
      <article class="supplier-modal" role="dialog" aria-modal="true" aria-label="供應商詳細資訊">
        <button class="supplier-modal-close" type="button" aria-label="關閉視窗" @click="closeSupplierModal">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="supplier-modal-layout">
          <aside class="supplier-modal-side">
            <div class="supplier-modal-logo">
              <img
                v-if="selectedSupplier.logo"
                :src="selectedSupplier.logo"
                :alt="\`\${selectedSupplier.companyShortName} logo\`"
              />
              <span v-else class="vendor-logo-placeholder">LOGO</span>
            </div>

            <a
              v-if="selectedSupplier.websiteUrl"
              :href="selectedSupplier.websiteUrl"
              class="supplier-website-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              官網
            </a>
          </aside>

          <section class="supplier-modal-main">
            <h2 class="supplier-modal-title">{{ selectedSupplier.companyName || selectedSupplier.companyShortName }}</h2>
            <p class="supplier-modal-intro">{{ selectedSupplier.companyIntro || '暫無公司簡介。' }}</p>

            <div class="supplier-modal-tags">
              <template v-for="solution in selectedSupplier.solutionLinks" :key="solution.label">
                <RouterLink
                  v-if="solution.to"
                  :to="solution.to"
                  class="supplier-solution-tag supplier-solution-tag--link"
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
`;function Vt(e){return Array.isArray?Array.isArray(e):Kc(e)==="[object Array]"}function vA(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function EA(e){return e==null?"":vA(e)}function xt(e){return typeof e=="string"}function Gc(e){return typeof e=="number"}function IA(e){return e===!0||e===!1||_A(e)&&Kc(e)=="[object Boolean]"}function Wc(e){return typeof e=="object"}function _A(e){return Wc(e)&&e!==null}function tt(e){return e!=null}function Os(e){return!e.trim().length}function Kc(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const xA="Incorrect 'index' type",CA=e=>`Invalid value for key ${e}`,BA=e=>`Pattern length exceeds max of ${e}.`,SA=e=>`Missing ${e} property in key`,NA=e=>`Property 'weight' in key '${e}' must be a positive integer`,rr=Object.prototype.hasOwnProperty;class PA{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let s=zc(o);this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function zc(e){let t=null,n=null,o=null,s=1,i=null;if(xt(e)||Vt(e))o=e,t=lr(e),n=oi(e);else{if(!rr.call(e,"name"))throw new Error(SA("name"));const a=e.name;if(o=a,rr.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(NA(a));t=lr(a),n=oi(a),i=e.getFn}return{path:t,id:n,weight:s,src:o,getFn:i}}function lr(e){return Vt(e)?e:e.split(".")}function oi(e){return Vt(e)?e.join("."):e}function kA(e,t){let n=[],o=!1;const s=(i,a,r)=>{if(tt(i))if(!a[r])n.push(i);else{let l=a[r];const u=i[l];if(!tt(u))return;if(r===a.length-1&&(xt(u)||Gc(u)||IA(u)))n.push(EA(u));else if(Vt(u)){o=!0;for(let c=0,d=u.length;c<d;c+=1)s(u[c],a,r+1)}else a.length&&s(u,a,r+1)}};return s(e,xt(t)?t.split("."):t,0),o?n:n[0]}const TA={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},FA={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},DA={location:0,threshold:.6,distance:100},MA={useExtendedSearch:!1,getFn:kA,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var z={...FA,...TA,...DA,...MA};const OA=/[^ ]+/g;function $A(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(s){const i=s.match(OA).length;if(n.has(i))return n.get(i);const a=1/Math.pow(i,.5*e),r=parseFloat(Math.round(a*o)/o);return n.set(i,r),r},clear(){n.clear()}}}class zi{constructor({getFn:t=z.getFn,fieldNormWeight:n=z.fieldNormWeight}={}){this.norm=$A(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,xt(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();xt(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!tt(t)||Os(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((s,i)=>{let a=s.getFn?s.getFn(t):this.getFn(t,s.path);if(tt(a)){if(Vt(a)){let r=[];const l=[{nestedArrIndex:-1,value:a}];for(;l.length;){const{nestedArrIndex:u,value:c}=l.pop();if(tt(c))if(xt(c)&&!Os(c)){let d={v:c,i:u,n:this.norm.get(c)};r.push(d)}else Vt(c)&&c.forEach((d,m)=>{l.push({nestedArrIndex:m,value:d})})}o.$[i]=r}else if(xt(a)&&!Os(a)){let r={v:a,n:this.norm.get(a)};o.$[i]=r}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Xc(e,t,{getFn:n=z.getFn,fieldNormWeight:o=z.fieldNormWeight}={}){const s=new zi({getFn:n,fieldNormWeight:o});return s.setKeys(e.map(zc)),s.setSources(t),s.create(),s}function RA(e,{getFn:t=z.getFn,fieldNormWeight:n=z.fieldNormWeight}={}){const{keys:o,records:s}=e,i=new zi({getFn:t,fieldNormWeight:n});return i.setKeys(o),i.setIndexRecords(s),i}function Eo(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:s=z.distance,ignoreLocation:i=z.ignoreLocation}={}){const a=t/e.length;if(i)return a;const r=Math.abs(o-n);return s?a+r/s:r?1:a}function LA(e=[],t=z.minMatchCharLength){let n=[],o=-1,s=-1,i=0;for(let a=e.length;i<a;i+=1){let r=e[i];r&&o===-1?o=i:!r&&o!==-1&&(s=i-1,s-o+1>=t&&n.push([o,s]),o=-1)}return e[i-1]&&i-o>=t&&n.push([o,i-1]),n}const cn=32;function UA(e,t,n,{location:o=z.location,distance:s=z.distance,threshold:i=z.threshold,findAllMatches:a=z.findAllMatches,minMatchCharLength:r=z.minMatchCharLength,includeMatches:l=z.includeMatches,ignoreLocation:u=z.ignoreLocation}={}){if(t.length>cn)throw new Error(BA(cn));const c=t.length,d=e.length,m=Math.max(0,Math.min(o,d));let h=i,A=m;const y=r>1||l,I=y?Array(d):[];let _;for(;(_=e.indexOf(t,A))>-1;){let G=Eo(t,{currentLocation:_,expectedLocation:m,distance:s,ignoreLocation:u});if(h=Math.min(G,h),A=_+c,y){let K=0;for(;K<c;)I[_+K]=1,K+=1}}A=-1;let P=[],C=1,B=c+d;const V=1<<c-1;for(let G=0;G<c;G+=1){let K=0,Z=B;for(;K<Z;)Eo(t,{errors:G,currentLocation:m+Z,expectedLocation:m,distance:s,ignoreLocation:u})<=h?K=Z:B=Z,Z=Math.floor((B-K)/2+K);B=Z;let pe=Math.max(1,m-Z+1),Ee=a?d:Math.min(m+Z,d)+c,Ie=Array(Ee+2);Ie[Ee+1]=(1<<G)-1;for(let Ae=Ee;Ae>=pe;Ae-=1){let We=Ae-1,we=n[e.charAt(We)];if(y&&(I[We]=+!!we),Ie[Ae]=(Ie[Ae+1]<<1|1)&we,G&&(Ie[Ae]|=(P[Ae+1]|P[Ae])<<1|1|P[Ae+1]),Ie[Ae]&V&&(C=Eo(t,{errors:G,currentLocation:We,expectedLocation:m,distance:s,ignoreLocation:u}),C<=h)){if(h=C,A=We,A<=m)break;pe=Math.max(1,2*m-A)}}if(Eo(t,{errors:G+1,currentLocation:m,expectedLocation:m,distance:s,ignoreLocation:u})>h)break;P=Ie}const j={isMatch:A>=0,score:Math.max(.001,C)};if(y){const G=LA(I,r);G.length?l&&(j.indices=G):j.isMatch=!1}return j}function VA(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<o-n-1}return t}const Xo=String.prototype.normalize?(e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(e=>e);class Yc{constructor(t,{location:n=z.location,threshold:o=z.threshold,distance:s=z.distance,includeMatches:i=z.includeMatches,findAllMatches:a=z.findAllMatches,minMatchCharLength:r=z.minMatchCharLength,isCaseSensitive:l=z.isCaseSensitive,ignoreDiacritics:u=z.ignoreDiacritics,ignoreLocation:c=z.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:s,includeMatches:i,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:l,ignoreDiacritics:u,ignoreLocation:c},t=l?t:t.toLowerCase(),t=u?Xo(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const d=(h,A)=>{this.chunks.push({pattern:h,alphabet:VA(h),startIndex:A})},m=this.pattern.length;if(m>cn){let h=0;const A=m%cn,y=m-A;for(;h<y;)d(this.pattern.substr(h,cn),h),h+=cn;if(A){const I=m-cn;d(this.pattern.substr(I),I)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:o,includeMatches:s}=this.options;if(t=n?t:t.toLowerCase(),t=o?Xo(t):t,this.pattern===t){let y={isMatch:!0,score:0};return s&&(y.indices=[[0,t.length-1]]),y}const{location:i,distance:a,threshold:r,findAllMatches:l,minMatchCharLength:u,ignoreLocation:c}=this.options;let d=[],m=0,h=!1;this.chunks.forEach(({pattern:y,alphabet:I,startIndex:_})=>{const{isMatch:P,score:C,indices:B}=UA(t,y,I,{location:i+_,distance:a,threshold:r,findAllMatches:l,minMatchCharLength:u,includeMatches:s,ignoreLocation:c});P&&(h=!0),m+=C,P&&B&&(d=[...d,...B])});let A={isMatch:h,score:h?m/this.chunks.length:1};return h&&s&&(A.indices=d),A}}class nn{constructor(t){this.pattern=t}static isMultiMatch(t){return cr(t,this.multiRegex)}static isSingleMatch(t){return cr(t,this.singleRegex)}search(){}}function cr(e,t){const n=e.match(t);return n?n[1]:null}class jA extends nn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class qA extends nn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class HA extends nn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class GA extends nn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class WA extends nn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class KA extends nn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Qc extends nn{constructor(t,{location:n=z.location,threshold:o=z.threshold,distance:s=z.distance,includeMatches:i=z.includeMatches,findAllMatches:a=z.findAllMatches,minMatchCharLength:r=z.minMatchCharLength,isCaseSensitive:l=z.isCaseSensitive,ignoreDiacritics:u=z.ignoreDiacritics,ignoreLocation:c=z.ignoreLocation}={}){super(t),this._bitapSearch=new Yc(t,{location:n,threshold:o,distance:s,includeMatches:i,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:l,ignoreDiacritics:u,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Jc extends nn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const s=[],i=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+i,s.push([o,n-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const si=[jA,Jc,HA,GA,KA,WA,qA,Qc],ur=si.length,zA=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,XA="|";function YA(e,t={}){return e.split(XA).map(n=>{let o=n.trim().split(zA).filter(i=>i&&!!i.trim()),s=[];for(let i=0,a=o.length;i<a;i+=1){const r=o[i];let l=!1,u=-1;for(;!l&&++u<ur;){const c=si[u];let d=c.isMultiMatch(r);d&&(s.push(new c(d,t)),l=!0)}if(!l)for(u=-1;++u<ur;){const c=si[u];let d=c.isSingleMatch(r);if(d){s.push(new c(d,t));break}}}return s})}const QA=new Set([Qc.type,Jc.type]);class JA{constructor(t,{isCaseSensitive:n=z.isCaseSensitive,ignoreDiacritics:o=z.ignoreDiacritics,includeMatches:s=z.includeMatches,minMatchCharLength:i=z.minMatchCharLength,ignoreLocation:a=z.ignoreLocation,findAllMatches:r=z.findAllMatches,location:l=z.location,threshold:u=z.threshold,distance:c=z.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:o,includeMatches:s,minMatchCharLength:i,findAllMatches:r,ignoreLocation:a,location:l,threshold:u,distance:c},t=n?t:t.toLowerCase(),t=o?Xo(t):t,this.pattern=t,this.query=YA(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:s,ignoreDiacritics:i}=this.options;t=s?t:t.toLowerCase(),t=i?Xo(t):t;let a=0,r=[],l=0;for(let u=0,c=n.length;u<c;u+=1){const d=n[u];r.length=0,a=0;for(let m=0,h=d.length;m<h;m+=1){const A=d[m],{isMatch:y,indices:I,score:_}=A.search(t);if(y){if(a+=1,l+=_,o){const P=A.constructor.type;QA.has(P)?r=[...r,...I]:r.push(I)}}else{l=0,a=0,r.length=0;break}}if(a){let m={isMatch:!0,score:l/a};return o&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const ii=[];function ZA(...e){ii.push(...e)}function ai(e,t){for(let n=0,o=ii.length;n<o;n+=1){let s=ii[n];if(s.condition(e,t))return new s(e,t)}return new Yc(e,t)}const Yo={AND:"$and",OR:"$or"},ri={PATH:"$path",PATTERN:"$val"},li=e=>!!(e[Yo.AND]||e[Yo.OR]),eb=e=>!!e[ri.PATH],tb=e=>!Vt(e)&&Wc(e)&&!li(e),dr=e=>({[Yo.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Zc(e,t,{auto:n=!0}={}){const o=s=>{let i=Object.keys(s);const a=eb(s);if(!a&&i.length>1&&!li(s))return o(dr(s));if(tb(s)){const l=a?s[ri.PATH]:i[0],u=a?s[ri.PATTERN]:s[l];if(!xt(u))throw new Error(CA(l));const c={keyId:oi(l),pattern:u};return n&&(c.searcher=ai(u,t)),c}let r={children:[],operator:i[0]};return i.forEach(l=>{const u=s[l];Vt(u)&&u.forEach(c=>{r.children.push(o(c))})}),r};return li(e)||(e=dr(e)),o(e)}function nb(e,{ignoreFieldNorm:t=z.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:s,norm:i,score:a})=>{const r=s?s.weight:null;o*=Math.pow(a===0&&r?Number.EPSILON:a,(r||1)*(t?1:i))}),n.score=o})}function ob(e,t){const n=e.matches;t.matches=[],tt(n)&&n.forEach(o=>{if(!tt(o.indices)||!o.indices.length)return;const{indices:s,value:i}=o;let a={indices:s,value:i};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function sb(e,t){t.score=e.score}function ib(e,t,{includeMatches:n=z.includeMatches,includeScore:o=z.includeScore}={}){const s=[];return n&&s.push(ob),o&&s.push(sb),e.map(i=>{const{idx:a}=i,r={item:t[a],refIndex:a};return s.length&&s.forEach(l=>{l(i,r)}),r})}class Ln{constructor(t,n={},o){this.options={...z,...n},this.options.useExtendedSearch,this._keyStore=new PA(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof zi))throw new Error(xA);this._myIndex=n||Xc(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){tt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,s=this._docs.length;o<s;o+=1){const i=this._docs[o];t(i,o)&&(this.removeAt(o),o-=1,s-=1,n.push(i))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:s,shouldSort:i,sortFn:a,ignoreFieldNorm:r}=this.options;let l=xt(t)?xt(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return nb(l,{ignoreFieldNorm:r}),i&&l.sort(a),Gc(n)&&n>-1&&(l=l.slice(0,n)),ib(l,this._docs,{includeMatches:o,includeScore:s})}_searchStringList(t){const n=ai(t,this.options),{records:o}=this._myIndex,s=[];return o.forEach(({v:i,i:a,n:r})=>{if(!tt(i))return;const{isMatch:l,score:u,indices:c}=n.searchIn(i);l&&s.push({item:i,idx:a,matches:[{score:u,value:i,norm:r,indices:c}]})}),s}_searchLogical(t){const n=Zc(t,this.options),o=(r,l,u)=>{if(!r.children){const{keyId:d,searcher:m}=r,h=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(l,d),searcher:m});return h&&h.length?[{idx:u,item:l,matches:h}]:[]}const c=[];for(let d=0,m=r.children.length;d<m;d+=1){const h=r.children[d],A=o(h,l,u);if(A.length)c.push(...A);else if(r.operator===Yo.AND)return[]}return c},s=this._myIndex.records,i={},a=[];return s.forEach(({$:r,i:l})=>{if(tt(r)){let u=o(n,r,l);u.length&&(i[l]||(i[l]={idx:l,item:r,matches:[]},a.push(i[l])),u.forEach(({matches:c})=>{i[l].matches.push(...c)}))}}),a}_searchObjectList(t){const n=ai(t,this.options),{keys:o,records:s}=this._myIndex,i=[];return s.forEach(({$:a,i:r})=>{if(!tt(a))return;let l=[];o.forEach((u,c)=>{l.push(...this._findMatches({key:u,value:a[c],searcher:n}))}),l.length&&i.push({idx:r,item:a,matches:l})}),i}_findMatches({key:t,value:n,searcher:o}){if(!tt(n))return[];let s=[];if(Vt(n))n.forEach(({v:i,i:a,n:r})=>{if(!tt(i))return;const{isMatch:l,score:u,indices:c}=o.searchIn(i);l&&s.push({score:u,key:t,value:i,idx:a,norm:r,indices:c})});else{const{v:i,n:a}=n,{isMatch:r,score:l,indices:u}=o.searchIn(i);r&&s.push({score:l,key:t,value:i,norm:a,indices:u})}return s}}Ln.version="7.1.0";Ln.createIndex=Xc;Ln.parseIndex=RA;Ln.config=z;Ln.parseQuery=Zc;ZA(JA);const eu=JSON.parse('[{"companyShortName":"大數軟體","companyName":"大數軟體有限公司","companyIntro":"大數軟體有限公司（LargitData.com）是台灣領先的企業情資 AI 公司，專注以 AI 整合外部威脅情報與內部知識，協助政府機關與企業做出更快、更精準的決策。公司自研產品包括 InfoMiner 即時輿情分析平台，可即時監測新聞、社群與公開資訊，掌握市場情資與潛在威脅；以及 RAGi 企業 AI 檢索增強生成引擎，支援地端部署，以大型語言模型串聯內部知識庫，快速產製研究與分析報告，將內部情資轉化為決策優勢。此外，公司亦架設線上教育平台「大數學堂」，以培養台灣大數據人才為宗旨，提供免費線上教育資源，讓更多人能接觸數據分析與大數據技術。","websiteUrl":"https://largitdata.com/","solutionNames":["InfoMiner 即時輿情分析平台","RAGi 企業 AI 決策平台","AIMochi（語音轉文字／會議逐字稿與字幕）"],"logoFileName":"大數軟體.png"},{"companyShortName":"用益網路科技","companyName":"用益網路科技股份有限公司","companyIntro":"metabiz自成立以來，始終專注於【智慧科技 / 會員系統】領域，致力為客戶提供最具價值的創新解決方案。我們秉持「務實應用、互利共益」的核心理念，將深厚的技術底蘊與市場需求完美結合，打造出優質的牌會員管理系統。\\n\\n憑藉著專業的團隊與敏銳的市場洞察，metabiz不僅能快速回應產業變化，更以【客製化服務 / 高效能技術】作為核心優勢，成功協助眾多企業突破【數位轉型 / 營運效能】的瓶頸，贏得了廣大客戶的高度信賴與口碑。\\n\\n展望未來，metabiz將持續精進技術與服務品質，積極拓展【新市場或新技術】。我們期盼成為業界最具影響力的創新夥伴，用最實際的行動為客戶創造最大效益，攜手共創永續發展的美好未來。","websiteUrl":"https://metabiz.tw/","solutionNames":["metabiz 企業 AI Agent 智腦方案"],"logoFileName":"用益網路科技.png"},{"companyShortName":"團薦科技","companyName":"團薦科技股份有限公司","companyIntro":"團薦科技成立於2023年，以AI技術打造智慧零售解決方案，專注於精準選址與門市營運分析。我們相信，選址不是終點，而是實體門市成功的起點；真正的價值，在於從展店決策到長期經營的全流程數據驅動管理。\\n「探點 TanDian Pro」整合商圈數據、人口結構與消費預測模型，協助零售品牌快速找到最佳地點、降低展店風險並提升營收表現。同時，進一步提供營運優化與門市體質分析，協助品牌打造可長可久的經營模式。\\n團薦不只是 SaaS（Software as a Service），更是 SaaS（Solution as a Service），以數據與洞察陪伴品牌實現永續成長。","websiteUrl":"https://home.tangent-plus.com","solutionNames":["「探點TanDian Pro－AI智能選址平台」賦能新北方案"],"logoFileName":"團薦科技.png"},{"companyShortName":"麟數據科技","companyName":"麟數據科技股份有限公司","companyIntro":"本公司成立於2016年，專注於AI數據科技（AI Data Technology），致力於透過先進數據技術與人工智慧，協助企業提升數據應用能力與決策效率。公司打造多元創新的SaaS平台，核心能力涵蓋數據蒐集、清洗、治理至應用的完整流程，協助企業將數據轉化為可行的商業洞察。\\n\\n透過數據整合與AI分析能力，我們協助品牌建立以數據為核心的營運模式，並打造自有數據產品與解決方案（如 Insighta360°），應用於CRM、精準行銷、廣告投放與消費者行為分析等場景，幫助企業即時掌握市場動態並提升決策效率。\\n\\n目前服務產業橫跨零售、電商、食品、汽車、金融等領域，協助企業深化顧客理解、優化行銷策略，並以更高效率與更低成本創造商業價值。\\n\\n長期目標為打造企業級數據中台與AI應用生態，促進數據資產化與跨場域應用。","websiteUrl":"https://www.lndata.com","solutionNames":["Insighta{360°}"],"logoFileName":"麟數據科技.png"},{"companyShortName":"元盛生醫電子","companyName":"元盛生醫電子股份有限公司","companyIntro":"全球第一個 AI 合規平台，採用NVIDIA BioNeMo技術，從原料到報告、從法規風險到數位追蹤，一次完成，全程精準高效!我們致力於為美妝產業提供前沿的人工智能解決方案，以重新定義保養品的數位使用體驗。我們團隊擁有專業的AI專家和技術專家，致力於整合創新科技，將科學、安全和效率完美結合，dermaGPT提供安全透明的成分資訊與配方功效的驗證。我們以AI驅動的化妝品安全評估系統（CPSR）利用強大的算法和累積全球千萬筆的資料庫，迅速、準確地評估化妝品成分的安全性。我們的目標是通過技術創新，幫助企業確保其產品遵守最嚴格的法規要求，同時提升消費者對產品功效與安全的信心。","websiteUrl":"https://dermagpt.com/hant/home/","solutionNames":["AI PIF生成與Agent管理系統"],"logoFileName":"元盛生醫電子.png"},{"companyShortName":"台聚管理顧問","companyName":"台聚管理顧問股份有限公司","companyIntro":"台聚集團為因應多元化經營及未來組織發展需要，於九十年三月十六日成立台聚管理顧問公司，統籌提供集團各關係企業之人資、員工事務、財務、會計、資訊、採購、關務、授信、稽核、 法務與股務等共同性事務之資源整合與規劃管理服務，俾使各公司更能專注在產品經營與開發，提升營運整體綜效。","websiteUrl":"","solutionNames":["IVA/PPE 智能影像分析系統"],"logoFileName":"台聚管理顧問.png"},{"companyShortName":"有創科技","companyName":"有創科技股份有限公司","companyIntro":"有創公司具備大型導覽、藍芽定位、ERP等平台設計能力，且獲得數發部人工智慧行業應用能力登錄證書。並且承接許多政府單位、民間企業等開發專案，具備豐富系統開發經驗。","websiteUrl":"","solutionNames":["空品平台系統"],"logoFileName":"有創科技.png"},{"companyShortName":"背景模式","companyName":"背景模式股份有限公司","companyIntro":"在數位轉型的浪潮中，我們致力於成為企業最可靠的數位轉型推手。我們協助各產業開發量身設計的數位化工具，將複雜的流程化繁為簡，實質提升企業及產業效率升級。\\n而我們更在「企業健康職場」領域深耕多年。憑藉著與中部專業臨場服務單位長達一年以上的共同研發，我們針對臨場服務開發出專屬的數位化平台，大幅增強企業對員工健康照護的關懷深度。目前，這套系統已成功導入上市公司與中部指標型醫療院所，透過精準的數據管理，讓健康服務更具感溫與效率。","websiteUrl":"https://bgmotion.com.tw/","solutionNames":["APIS 臨場服務員工健康管理系統＿新北優惠方案"],"logoFileName":"背景模式.png"},{"companyShortName":"滿拓科技","companyName":"滿拓科技股份有限公司","companyIntro":"滿拓科技致力於提供領先市場的「落地式 GenAI」一站式服務。憑藉獨家RAG技術與具備任務執行能力的 AI Agent，並結合高度自動化的 LLM 訓練流程，我們協助企業在確保資料隱私的前提下，快速建構專屬領域AI應用，實現從「資訊檢索」到「自主協作」的AI數位轉型。\\n\\n\\n核心產品：\\n•Document Expert：企業級AI文件智能檢索問答平台。結合 RAG 與 AI Agent 技術，除精準檢索內部資料外，更具備自主查詢外部資訊與自動化報告協作能力，能夠串接多方資訊並產出成果，直擊企業辦公痛點。\\n•FinetuneX：專為模型精煉設計的工具。透過Data Expert進行高品質數據擴增與精煉，並結合Finetune Expert平台，協助企業打造最貼合業務情境的專屬AI模型。","websiteUrl":"https://www.deepmentor.ai/","solutionNames":["Document Expert (企業級AI文件智能檢索問答平台)"],"logoFileName":"滿拓科技.png"},{"companyShortName":"睿思創新","companyName":"睿思創新股份有限公司","companyIntro":"REAS 成立於 2022 年，致力於成為亞洲領先的 AIaaS (AI as a Service) 服務供應商。我們專注於「AI 勞動力」解決方案的研發，透過獨創的混合式 AI 運算架構 (Hybrid AI Architecture) 與 軟硬整合技術，協助企業將生成式 AI 從「雲端對話」真正落地為「生產力工具」。","websiteUrl":"https://www.reas.com.tw/","solutionNames":["CROSSBOT AI Agent Platform Basic 基礎版 (入門)","CROSSBOT AI Agent Platform – Pro 專業版","CROSSBOT AI Agent Platform – Enterprise 企業旗艦版"],"logoFileName":"睿思創新.png"},{"companyShortName":"網際智慧","companyName":"網際智慧股份有限公司","companyIntro":"網際智慧（IQT.AI）致力於建構「可信任、有溫度」的 AI Agent 體系，橫跨文字輸入、聲音表達、影音創作與法遵合規四大領域。我們屢獲金鼎獎、經濟部智慧創新大賞 Best AI Awards、台灣人工智慧協會 AI Award Best Solutions、數位發展部數位產業署－AI應用鬥智賽、AI TAIWAN 創新商務獎等頂尖殊榮。旗下主力包含：①長期穩居市佔領先的－text.tw 自然輸入法、②賦予 AI 擬真人聲的－VoAI.AI 絕好聲創，③確保企業治理與合規的－XComply.AI快合規。網際智慧不只是技術專家，更是企業數位轉型最值得信賴的 AI 夥伴！","websiteUrl":"www.iqt.ai","solutionNames":["快合規 – AI廣告違規風險檢核與修正建議服務平台 (https://xcomply.ai)","絕好聲創VoAI聲音創造所 - 超擬真AI語音與短影音生成服務 (https://voai.ai)"],"logoFileName":"網際智慧.png"},{"companyShortName":"聚典資訊","companyName":"聚典資訊股份有限公司","companyIntro":"聚典資訊是數據價值的重述者。創立於 2019 年 3 月，由頂尖工程與專業經理人組成。深受超過300家客戶信賴，榮獲20多項獎項肯定。並擁有 ISO27001 資訊安全管理認證，以及數位發展部之 AI 技術服務能量登錄官方認證。\\n我們整合AI、AIoT與系統開發，為製造業與零售業提供智慧解決方案，包含智能生產線、ESG轉型、AI分群行銷、智能客服，以及客製化方案。導入聚典的AI解決方案，您的企業將在資料科學的支持下持續增長。","websiteUrl":"https://retailingdata.com.tw/","solutionNames":["聚典資訊ｘ新北企業限定優惠：AI智慧轉型零門檻啟動方案"],"logoFileName":"聚典資訊.png"},{"companyShortName":"臺灣通用紡織科技","companyName":"臺灣通用紡織科技股份有限公司","companyIntro":"Frontier 以 TextileCloud 為核心產品，提供一站式數位布料管理解決方案，整合 2D / 3D 布料影像、規格資訊與永續數據。平台涵蓋數位資產管理（DAM）、數位產品建置（DPC）流程與永續數據模組，協助企業集中管理布料資料、快速生成具物理參數與 AI 擬真效果的 3D Material，並可對接主流 3D 設計軟體。同時內建 LCA 架構，提供碳排與水耗等環境指標，支援 DPP 與 ESG 需求。相較傳統流程，無需額外硬體投資，可降低樣品寄送成本、縮短開發時程，強化品牌與供應鏈間的即時協作效率。","websiteUrl":"https://www.frontier.cool/","solutionNames":["TextileCloud™ - AI 驅動的企業級材料管理解決方案-Annual Package -Basic"],"logoFileName":"臺灣通用紡織科技.png"},{"companyShortName":"慧穩科技","companyName":"慧穩科技股份有限公司","companyIntro":"慧穩科技成立於 2016 年，為專注於 AI 落地應用的解決方案提供者，協助客戶建立AI「正循環」，提供客戶AI Agent、大模型(LLM、VLM)、電腦視覺、數據分析 (AutoML)、專家系統等融合式AI 解決方案(WinHub.AI – Fusion AI Solutions)，使客戶可以藉由一站式快速完成AI落地的開發與部屬，目前已針對半導體、智慧水務等領域完善軟硬體整合，可達開箱即落地，合作夥伴有軟體整合商、系統整合商、自動化整合商、AOI設備商等。","websiteUrl":"https://aiwin.com.tw/","solutionNames":["WinChat－各產業應用的大語言模型應用平台","AIWInOps—各產業應用的影像型AI訓練平台","NumOps－各產業應用的數據型AI訓練平台","WinEdge－各產業應用的AI邊緣運算推論系統"],"logoFileName":"慧穩科技.png"},{"companyShortName":"曜夆科技","companyName":"曜夆科技股份有限公司","companyIntro":"直接驅動營收成長與營運效率提升。月租 5,000 元起，免高額建置費，最快數日導入、模組架構、彈性擴充。由 CGSI（中華寰宇整合）提供整合規劃、客製開發與企業級部署，確保穩定上線與長期營運，轉化企業既有圖文資料為「可成交、可預測、可優化」的 AI 生產力系統：\\n．AI 商機成交助理：整合官網、LINE、電子表單訊息，LLM判讀客戶意圖與成交潛力分級，提供預期方案建議並可生成業務人員跟進摘要，打造24 小時接單機制\\n．AI CRM／ERP／MES：訂單自動轉工單，串聯庫存與產能，提供交期預估與異常預警，並整合銷售與產線數據，實現跨部門資訊整合；具備近零硬體建置成本、無須額外學習曲線與AI數據分析能力\\n\\n立即行動：留下您的需求，享免費 AI 導入諮詢，快速導入最適解決方案。","websiteUrl":"www.ch-si.com","solutionNames":["AI對話型服務整合方案(產品名稱：DocInsight AI)"],"logoFileName":"曜夆科技.png"},{"companyShortName":"璽樂科技","companyName":"璽樂科技股份有限公司","companyIntro":"璽樂科技專注營建與公共工程場域，提供結合 AI 影像、IoT 感測與雲端管理的一站式智慧工安平台。系統涵蓋人員出入、危險區域管制、環境監測、異常警示與影像留存等功能，以模組化設計對應不同規模工地，並支援多工地雲端監控與權限管理，讓總公司可即時掌握各工地風險與狀態，同時自動產出符合金安獎、金質獎與勞檢需求的報表，降低人工整理成本。","websiteUrl":"https://idaka.io/","solutionNames":["AI影片生成與教育訓練","AI影像缺失辨識與報告自動化方案"],"logoFileName":"璽樂科技.png"},{"companyShortName":"易晨智能","companyName":"易晨智能股份有限公司","companyIntro":"易晨智能將語音辨識、自然語言分析，應用於應用在智慧教育以及智慧醫療做跨領域結合，運用機器學習、深度學習、資料探勘演算法，讓用戶有所感受。重點發展的是語音辨識以及自然語言文字分析處理以及數據分析，今年我們重點發展的項目是AI教育以及AI 醫護交班逐字稿紀錄。AI教育解決中英文口說問題，用AI進行評分及對話；AI 逐字稿交班紀錄解決醫護人員人力不足以及可即時性逐字記錄並進行摘要分類。","websiteUrl":"ez-ai.com.tw","solutionNames":["語音辨識語言學習及逐字稿"],"logoFileName":"易晨智能.png"},{"companyShortName":"創造智能科技","companyName":"創造智能科技股份有限公司","companyIntro":"創造智能科技是一家AI Martech新創公司，專注於 AI行銷科技、LINE CRM、AI客服機器人與 AI虛擬人應用，致力於協助企業將「流量」真正轉化為「可經營的會員與數據資產」。\\n結合影音內容、行銷科技與AI應用實戰經驗，打造可快速導入、可規模化、可量化成效的AI解決方案，客戶涵蓋政府單位、大型企業、品牌客戶與文化觀光場域。\\n主要商品/服務項目：\\n•\\tLINE CRM × AI客服：協助企業建構可分析語意、貼標分眾、導流轉換的LINE官方帳營運系統。\\n•\\tAI虛擬人與互動導覽：應用於官網、line、FB message、活動、展覽、品牌互動與智慧導覽場域。\\n•\\tAIGC影音與廣告製作：加速影音內容產製，降低成本、提升產量與品質。\\n•\\tAI落地應用顧問服務：從場景設計、互動策略到實際成效落地。","websiteUrl":"https://www.aicreate360.com/","solutionNames":["AI Sales 智能銷售助手","AiTAGO Line CRM"],"logoFileName":"創造智能科技.png"},{"companyShortName":"緯謙科技","companyName":"緯謙科技股份有限公司","companyIntro":"緯謙科技 (WiAdvance) 為緯創集團旗下子公司，作為創新的雲端服務供應商，提供以Cloud、AI、Data為核心的一站式服務，，擁有強大的雲端技術團隊與豐富的場域落地經驗，深耕智慧製造、智慧醫療、智慧城市、智慧農業/零售等垂直產業應用，專注以雲端科技為企業打造數位轉型的強韌實力。","websiteUrl":"www.wiadvance.com","solutionNames":["WiKMS 企業知識管理助手"],"logoFileName":"緯謙科技.png"},{"companyShortName":"環球睿視","companyName":"環球睿視股份有限公司","companyIntro":"環球睿視 (Ubestream) 成立於 2016 年，是專注於語音人工智慧與智慧語音技術的深科技 (Deep-tech) 領導廠商，亦是首家掛牌創櫃板的 AI 創新企業 (TPEx 7587)。我們的核心優勢在於自主研發的全棧式 AI 語意語音演算法，深度整合語音識別 (STT)、語音生成 (TTS)、自然語言理解 (NLU) 與文本分析 (NLP)。憑藉卓越的技術架構，我們能將 AI 模型部署於雲端、邊緣端 (Edge)及嵌入式晶片，在無需網路連接的環境下，實現安全、低延遲且具備強大數據隱私保護的即時人機互動。旗下旗艦產品「AIspeakin 同步口譯代理人」運用串流式全雙工 (Streaming Duplex) 與 GenAI 技術，具備上下文自動校正與語種自動辨識功能，達成高準確、秒速級的雙向翻譯。已成功進駐台灣四大國際機場，提供國門級的多語服務，並廣泛應用於影音轉寫、會議紀錄及同步口譯等場域。目前已將事業版圖擴張至美國、日本、新加坡等全球市場，持續為智慧城市、交通、金融、旅遊與公共服務領域提供具高度擴展性的語音 AI 解決方案，實現 24 小時免接觸、高效率的人機協作未來","websiteUrl":"https://ubestream.com/","solutionNames":["AIspeakin – AI即時/非即時語音辨識/翻譯/語譯服務"],"logoFileName":"環球睿視.png"},{"companyShortName":"凌松科技","companyName":"凌松科技有限公司","companyIntro":"凌松科技專注於健康科技整合，結合資訊、運動科學、公共衛生與人工智慧，打造 AI Coach智慧健康生態系。平台整合銀髮族、運動、營養、認知、感官與生活數據，應用於高齡城市、智慧住宅及健康促進服務。多年來協助政府、企業、學校與社區建構智慧健康照護系統，並屢獲國內獎項及聯合國教科文組織（UNESCO）專案肯定。\\n團隊擁有多項台灣與國際專利，技術涵蓋AIoT感測、生醫系統、穿戴裝置、運動訓練 及生成式AI互動平台。核心產品AI Coach平台採用多模態人工智慧（Multimodal AI），整合文字、圖像、語音、影片與感測數據，模擬人類教練的感知與判斷，提供即時、個人化、高互動性的訓練與健康引導，並協助高齡與衰弱族群進行失能預防、健康促進及預測分析。\\n以「技術驅動人機協作」為願景，結合具身智慧（Embodied AI），推動SDGs與 ESG永續發展，引領多模態AI跨入人機互動新世代，成為智慧健康產業的創新推手。","websiteUrl":"https://www.synergy.tw/","solutionNames":["AI Coach 功能性體適能評估"],"logoFileName":"凌松科技.png"},{"companyShortName":"健康盟","companyName":"健康盟股份有限公司","companyIntro":"健康盟公司致力於打造結合數位科技與醫療專業的整合型健康服務平台，專注於牙科與基層醫療數位轉型解決方案。我們以「數位賦能、專業升級、品牌成長」為核心理念，開發DigiMEd數位醫療系統，整合患者管理、數位衛教、療程說明與數位手術同意書簽署流程，協助診所提升溝通效率與醫病信任，同時強化內部管理與營運績效。\\n\\n目前健康盟已與全台超過700間牙醫診所合作，累積豐富實務經驗與成功案例，成為牙科數位轉型的重要推手。我們透過影音內容製作、數位行銷策略與專業教育訓練，協助醫療院所建立專業品牌形象，優化患者體驗並提升療程轉化率。\\n\\n健康盟相信，醫療不只是治療，更是溝通與信任的建立。未來將持續深化智慧醫療應用，推動數位醫療標準化，成為診所數位轉型與品牌升級最值得信賴的長期合作夥伴。","websiteUrl":"https://www.healthleaguex.com/","solutionNames":["健康盟：重塑牙科營運的智慧引擎"],"logoFileName":"健康盟.png"},{"companyShortName":"開源智造","companyName":"開源智造股份有限公司","companyIntro":"開源智造（OpenAIFab）深耕 AI 醫療與智能照護，創辦人因親自照顧家屬的切身經歷，深刻體會鼻胃管灌食的風險與壓力，進而自主研發「佳灌安 FeedSafe」。我們致力將尖端 AI 技術落地，提供全方位居家醫療物聯網解決方案。\\n佳灌安 FeedSafe 聚焦「鼻胃管灌食安全」，回應流程繁瑣易被省略、人力不足無法全面覆蓋的雙重痛點。結合自主研發的 AI 聲紋辨識與藍牙數位聽診器，將繁瑣的確認流程轉為直覺的安全機制，大幅降低非專業者的操作門檻，減輕家庭照顧負擔。\\n我們期盼賦能居護所、長照機構與醫療院所，無縫銜接居家照護，成為守護醫病與家庭最堅實的科技後盾，兼具產業效益與社會公益價值。","websiteUrl":"https://www.facebook.com/openaifab/?locale=zh_TW","solutionNames":["居家營養照護AI工具導入- 佳灌安"],"logoFileName":"開源智造.png"},{"companyShortName":"艾利思科技","companyName":"艾利思科技股份有限公司","companyIntro":"艾利思科技成立於 2018 年，由專業的全端工程師團隊組成，致力於以「化繁為簡，驅動企業未來」為核心理念，協助企業有效落實數位轉型。公司從企業客製化軟體服務出發，累積豐富跨產業實戰經驗，服務客戶超過 150 家，涵蓋金融、製造、零售、能源及政府公共工程等領域。\\n\\n艾利思科技近年專注於各類型場域管理，並推出Aura智慧感知系統，除了知名的精準定位系統與多元的環境感測器解決方案外，更可結合影像 AI 與環境數據分析，提供即時、可解釋且可落地的場域智慧管理能力，協助企業預防風險、保障人員安全與關鍵資產，成為企業長期信賴的端到端數位轉型夥伴。","websiteUrl":"https://www.ellis.tw","solutionNames":["Aura 智慧影像及場域感知管理系統"],"logoFileName":"艾利思科技.png"},{"companyShortName":"城智科技","companyName":"城智科技股份有限公司","companyIntro":"AIRA城智科技是由逾20年AI影像處理經驗的團隊所組成，專注於AI領域的研究與開發。AIRA的使命是採用先進的人臉、人形與物件辨識技術，並整合於影像管理系統，開發AI+IOT+Cloud等多種整合性應用方案。\\n於2020年榮獲 Intel Gold Partner 的殊榮，並與NVIDIA, Network Optix, AWS展開深度技術合作。解決方案廣泛應用於企業、智慧建築、工廠、工地管理與零售等場域，優化場域安全與管理效率。","websiteUrl":"https://www.aira.com.tw/","solutionNames":["airaTrack-全場域人臉追蹤解決方案"],"logoFileName":"城智科技.png"},{"companyShortName":"訊連科技","companyName":"訊連科技股份有限公司","companyIntro":"訊連科技（5203.TW）創立於 1996 年，為全球首屈一指的多媒體影音軟體及數位創意編輯軟體服務及 AI 臉部辨識、人型辨識技術開發商。訊連科技的產品及服務涵蓋數位影片及圖像內容創作、多媒體影音播放、視訊會議及直播與遠距教學、手機行動應用程式、AI 人臉辨識等多樣化解決方案，滿足消費性、商務、教育等跨領域多媒體應用。旗下威力導演、相片大師、PowerDVD 等電腦軟體和行動 App，透過零售、訂閱式服務及預載等方式，提供個人電腦品牌多樣化應用軟體。 \\n\\n訊連科技深耕 AI 人工智慧於創意內容影片圖像編輯，臉部辨識及人型辨識，透過深度學習法開發 FaceMe® AI 臉部辨識引擎，提供智慧安控、智慧差勤、智慧金融、智慧零售等垂直市場應用，卓越的辨識準確度，屢次於全球知名 NIST 人臉辨識測試獲得名列前茅佳績。","websiteUrl":"https://tw.cyberlink.com/faceme","solutionNames":["FaceMe Security 安控門禁解決方案"],"logoFileName":"訊連科技.png"},{"companyShortName":"雲義科技","companyName":"雲義科技股份有限公司","companyIntro":"Unipattern 雲義科技成立於2001年，公司創立以軟體研發為主，發展Data Mining演算法的核心技術，投入智慧型應用軟體產業。\\nUnipicket 視衛通是雲義科技整合影像辨識模型及演算法的AI影像辨識即時通報系統，使用市場通用的RTSP協定影像串流辨識監視器畫面內的多種異常事件並即時通報，如此可在事件發生即時或初期就辨識通報，縮短通報時間並降低災害擴大，整合通報介面可整合其他IOT感測與VMS/CMS系統，提高整體場域安全。\\nUnipicket視衛通可加強場域安全，已有不同公民營單位採用，為共同供應契約產品，參與總統盃黑克松競賽於2022年取得卓越團隊及2025年AI應用公共服務特別獎。","websiteUrl":"https://www.unipattern.com/","solutionNames":["Unipicket AI安防"],"logoFileName":"雲義科技.png"},{"companyShortName":"漫話科技","companyName":"漫話科技股份有限公司","companyIntro":"本方案為「兒少互動敘事與情緒學習AI服務平台」，專為教育與學習服務型企業設計，協助快速導入結合遊戲化互動、動畫式敘事與情緒紀錄之AI服務能力，減少教師、治療師於課前備課與課後進行情緒觀察整理與家長說明所需投入的時間，包括補教、幼教、安親、早療、特教等兒童教育服務或早療相關業者用於團課或客戶（家長）加值服務。系統包含管理後台、帳號權限、使用紀錄與成效摘要，支援企業快速導入、擴點與後續營運，並提供導入說明與技術支援，協助企業完成AI化升級。","websiteUrl":"https://www.mangachat.com","solutionNames":["兒少互動敘事與情緒學習AI服務平台"],"logoFileName":"漫話科技.png"},{"companyShortName":"亞博福爾摩沙","companyName":"亞博福爾摩沙有限公司","companyIntro":"亞博福爾摩沙打造全通路對話式AI客服系統，結合A.I.Voicebot\\n(電話語音機器人)、A.I.Ambassador(智能服務大使)、A.I. Agent、A.I.Chatbot(聊天機器人)，覆蓋語音、文字與實體互動，提供無縫且即時的智慧客服體驗。具備超過20種語言、多語夾雜辨識)、多口音辨識，可支援跨文化、跨區域應用。具備多輪對話、記憶用戶偏好、意圖辨識等進階能力，提升服務效率與使用者滿意度。平台亦可彈性整合企業內部系統，進行數據蒐集與分析，實現智慧化的客服轉型。","websiteUrl":"https://www.asiabots.com.tw/","solutionNames":["A.I. Chatbot(聊天機器人）","A.I. Voicebot(聊天機器人）"],"logoFileName":"亞博福爾摩沙.png"},{"companyShortName":"社群洞察","companyName":"社群洞察股份有限公司","companyIntro":"社群洞察股份有限公司秉持「Work Smarter with GPT」理念，致力以生成式AI協助企業與政府解決知識傳遞、任務處理與品牌經營中的效率與溝通痛點。我們提供成熟的AI Agent解決方案，協助組織建立專屬任務助手，實現低門檻導入、無痛轉型與智慧化升級。旗下無程式碼平台 WebGUID.ai，讓企業以最低成本將AI整合至官網與社群渠道，即使非技術人員亦可快速建置AI應用，優化服務流程、提升互動體驗，同時大幅降低營運與客服負擔。透過AI協作機制，我們協助組織將知識轉化為可持續運作的智慧服務能力，真正落實以AI驅動成長與創新。","websiteUrl":"https://webguid.ai/","solutionNames":["WebGUID網路指南針"],"logoFileName":"社群洞察.png"},{"companyShortName":"凌典科技","companyName":"凌典科技有限公司","companyIntro":"凌典科技有限公司，104年成立，資本額500萬。\\n 本公司致力於營運雲端預約系統服務、自動化工具推廣、第三方金流代辦、數位銷售知識教學。具備多重角色身份。\\n(1) 雲端系統服務商：本公司Saas系統「TinyBook開店系統」至今已服務超過400位品牌客戶，協助其將營運流程線上自動化，包括相聲瓦舍、雲門舞集、台塑生醫、BenQ虹韻助聽器等知名業者。\\n(2) 第三方金流經銷商：為Line Pay、街口支付、藍新金流、TapPay、PChome支付連等5間第三方金流公司授權經銷商。以及藍新電子發票經銷商。\\n(3) 政府數位轉型專案 系統服務商&顧問：\\n114年 經濟部 產業AI導入應用輔導 系統服務商\\n114年 經濟部 推廣服務業上雲補助 系統服務商\\n114年 台北市「店家數位基礎導入計畫」 系統服務商\\n114年 台北市 台北數位企業發展中心 數位轉型顧問","websiteUrl":"https://tinybot.cc/","solutionNames":["AI全通路社群客服&預約系統"],"logoFileName":"凌典科技.png"},{"companyShortName":"穎諾科技","companyName":"穎諾科技股份有限公司","companyIntro":"穎諾科技核心產品為 OpsCentral 雲端全通路客服系統，協助企業整合電話、LINE、Facebook、官網與即時通訊等多元管道，集中管理顧客互動紀錄與服務流程，打造一致且高效率的客戶體驗。\\n\\n公司以雲端聯絡中心架構為基礎，結合生成式 AI 與自然語言處理技術，協助企業建置智慧客服與自動化回覆機制，提升回應速度與服務品質，同時降低人力成本與管理負擔。\\n\\n系統支援企業級權限與資安機制，並部署於國內雲端機房，導入門檻低且具高度擴充彈性，特別適合中小企業穩健推動客服數位化與營運升級，強化整體競爭力。","websiteUrl":"https://www.innovax.systems/tw/","solutionNames":["OpsCentral｜企業級 GenAI 全通路聯絡中心 SaaS 方案"],"logoFileName":"穎諾科技.png"},{"companyShortName":"傑騰智能","companyName":"傑騰智能股份有限公司","companyIntro":"傑騰智能（TAO Info）專注於大數據分析與人工智慧技術，深耕製造業資料分析領域，協助企業構建智慧化生態系統。公司通過自主研發的AI演算法與關鍵分析模組，優化商業決策、強化競爭優勢。自成立以來，多次獲政府與國際企業認可。近期聚焦解決製造、電子與建築工程領域中 SVG 設計圖高度仰賴人工解析所造成的效率與成本問題，運用 AI 進行 SVG 圖形結構解析與語義理解，將向量圖形、圖層、標註與元件資訊自動轉換為製造與工程系統可用的指令與資料格式。透過建立通用解析框架，可加速設計到生產流程，降低人工作業負擔，並將專業經驗內化為可重複使用的數位能力，協助產業提升自動化程度、良率與整體競爭力。","websiteUrl":"","solutionNames":["企業專業文件查詢知識管理及專業圖形AI解析"],"logoFileName":"傑騰智能.png"},{"companyShortName":"摩絡人工智慧","companyName":"摩絡人工智慧股份有限公司","companyIntro":"Morale AI 建構專為智慧製造打造的領域專屬 AI Agent 平台，提供可擴展、可解釋且可落地的決策支援能力。Morale AI platform以領域專用 LLM 結合機器學習與資料科學，串接 MES/ERP/設備與品質資料，打造可稽核、可解釋的 Agent 工作流；提供異常預警、良率分析、製程最佳化與節能減廢決策支援，支援 On-prem / Cloud / Hybrid 快速部署。","websiteUrl":"https://moraleai.com/","solutionNames":["Morale AI Agentic Platform 領域專用大型語言模型"],"logoFileName":"摩絡人工智慧.png"},{"companyShortName":"艾比互動娛樂","companyName":"艾比互動娛樂有限公司","companyIntro":"艾比互動娛樂有限公司 致力於用 AI 讓每家企業都能擁有世界級的資安防護能力。\\n我們的核心產品 SOC.cool 是一套 AI 驅動的資安監控平台，讓企業無需自建 SOC 團隊，即可擁有 24/7 全天候威脅偵測與自動化回應能力。\\n解決三大痛點：\\n- 資安人才難尋：AI 自動分析告警、研判風險並執行回應劇本，大幅降低對專業資安人力的依賴，1 人即可掌控全局\\n- 預算有限效益要最大：以 SaaS 訂閱制取代高額自建方案，將資源集中在核心業務發展，資安交給 AI 守護\\n- 合規要求日益嚴格：內建 ISO 27001、SOC 2 等合規報告模板，一鍵產出稽核文件，從容應對客戶與法規要求\\n平台支援 Windows、Linux、macOS 全平台，10 分鐘內完成部署即開始防護。同時提供經銷夥伴架構，IT 服務商可快速以自有品牌為客戶提供託管式資安服務（MSSP）。\\n 讓每家企業都能用 AI 守護數位資產，是我們的使命。","websiteUrl":"https://soc.cool/","solutionNames":["SOC.cool AI資安防護企業包 - 新北產業AI化輔導計畫限定版"],"logoFileName":"艾比互動娛樂.png"},{"companyShortName":"華苓科技","companyName":"華苓科技股份有限公司","companyIntro":"華苓科技成立於1999年，為中大型商務軟體公司，以企業流程管理系統著稱，面對大數據、社群、人工智能、雲計算、移動裝置、物聯網、區塊鏈等數位科技共同將世界推向工業4.0與數位經濟時代。華苓遂以「賦能智慧、願景無限」為願景，推出「智慧系統」以達成融合數位科技與人、系統、智能物件的萬物協同，賦與企業轉型能力以取得競爭優勢。","websiteUrl":"https://www.flowring.com/","solutionNames":["Secorion 資安獵捕平台"],"logoFileName":"華苓科技.png"},{"companyShortName":"極風雲創","companyName":"極風雲創股份有限公司","companyIntro":"極風雲創 Twister5 (股票代碼 7826 )，是 AI 驅動的全域安全與 AI 治理平台供應商，專注協助企業在雲端與生成式 AI 時代，建立安全、可控且可持續的防護架構。\\n我們結合國際頂尖資安品牌（如 Cloudflare、Cato Networks、Palo Alto Networks）與自研平台 Across，為企業提供從網路、應用到 AI 使用層的整合式全域安全解決方案。","websiteUrl":"https://www.twister5.com.tw/","solutionNames":["Across智能資安維運管理平台"],"logoFileName":"極風雲創.png"},{"companyShortName":"卡菲卡金融科技","companyName":"卡菲卡金融科技股份有限公司","companyIntro":"卡菲卡金融科技致力於驅動企業的「智能」與「綠色」雙軸轉型。我們自主研發的 AI 模型「費思」，深度整合財務審計的嚴謹性與環境工程邏輯，是業界領先的綠色金融智慧核心。\\n\\n透過 AI 自動化識別與分類，費思能精確勾稽企業每一筆財務支出與其對應的碳足跡，打破資訊孤島，讓財務報表與減碳績效實現無縫接軌。這不僅大幅提升了溫室氣體盤查的效率，更能協助企業精準預測並節約碳費支出。\\n\\n我們不只是技術提供者，更是企業邁向淨零碳排最值得信賴的策略夥伴。從智慧審計到淨零輔導，卡菲卡協助您將複雜的環境數據轉化為實質的競爭優勢，讓永續經營成為企業獲利的嶄新動力。","websiteUrl":"https://isunfa.com","solutionNames":["新北企業淨零智能會計賦能專案"],"logoFileName":"卡菲卡金融科技.png"},{"companyShortName":"拉普拉斯智能科技","companyName":"拉普拉斯智能科技股份有限公司","companyIntro":"拉普拉斯智能科技推出 Akashic 多代理 AI 平台，結合通用報告生成、AI 助理與可治理的知識管理能力，為用戶提供高效率且可擴充的智慧內容工作流。平台透過可治理模板引擎、多代理協作與跨系統整合，協助快速產出高品質報告並提升作業效率，支援從日常到專業場景的多元應用。","websiteUrl":"https://www.laplaceai.co/","solutionNames":["Akashic 多代理 AI 平台"],"logoFileName":"拉普拉斯智能科技.png"},{"companyShortName":"虎智科技","companyName":"虎智科技股份有限公司","companyIntro":"虎智科技經校內創業比賽第一名為臺科大傑出校友聯誼會攜手創新育成中心， 投資成立的創業團隊。以協助任何公司都可以輕鬆導入人工智慧。\\n致力以博碩士專業團隊、結盟傑出校友資源、臺科大教授顧問研發資源三大優勢發展 Local GPT 硬體導入、 AI 服務啟動、GPU 服務器資源管理，協助產業從教育訓練開始、評估／導入 AI 產業解決方案、資訊安全，確保 AI 綜效最大化與成功。","websiteUrl":"https://www.tigerai.info/","solutionNames":["以 n8n 打造 AI 智能助理-導入 no code 自動化流程運用"],"logoFileName":"虎智科技.png"},{"companyShortName":"凱鈿行動科技","companyName":"凱鈿行動科技股份有限公司","companyIntro":"KDAN（凱鈿）是數位賦能的領導品牌，專注於提升企業跨平台文件交流效率，推動數據驅動決策，打造無縫接軌的工作流程體驗，並提供多元化的私有化部署服務，強化企業敏捷性，釋放無限商機。","websiteUrl":"https://www.kdan.com/","solutionNames":["Intelligence Document Processing(IDP)"],"logoFileName":"凱鈿行動科技.png"},{"companyShortName":"肆時資訊設計","companyName":"肆時資訊設計有限公司","companyIntro":"肆時資訊設計有限公司自2019年成立以來，以資訊×服務設計為核心，專注於創新車輛產業數位管理，ReMo瑞摩智能雲端管理系統，結合工單數位化、顧客互動、法規遵循與供應鏈整合，打造全方位智慧生態系，協助機車行突破營運瓶頸，邁向數據化決策。公司具備豐富專案能量，曾執行深度高雄機車智慧產業整合計畫、數位雲服務研發補助計畫等，已推廣超過千家車行完成數位化導入，並導入 AI 技術提升維修管理效率。\\n在成果驗證上，榮獲交通部公路局第一屆資料創新應用競賽社會組創新獎；並受邀參與2024 Meet Taipei、2025國際中小企業博覽會、2025高雄智慧城市展等指標性展會。肆時資訊將持續以「降低導入門檻、放大工具槓桿、累積數據價值」為方向。","websiteUrl":"https://remo.tw/","solutionNames":["車輛產業AI店面管理解決方案"],"logoFileName":"肆時資訊設計.png"},{"companyShortName":"詮通電腦","companyName":"詮通電腦有限公司","companyIntro":"詮通電腦創立於2002年，深耕企業服務二十載，以深厚研發底蘊打造錢老闆雲端平台。「錢老闆」將系統轉化為您的「數位員工」，已協助數百家中小企業整合線上Ai網路開店、批發訂貨、門市POS系統，蝦皮電商整合，實現進銷存數據一站式管理，成功打通O2O銷售模式。\\n讓您在單一平台掌握各方銷售與即時庫存，徹底告別資訊破碎與混亂的理帳痛點。不只是處理訂單，這位員工更擅長財務管理，並自動為您整理應收付帳款核銷。並即時產出損益報表，讓您隨時掌握獲利狀況，進而透過數據做出精準決策。","websiteUrl":"https://www.moneyboss.com.tw/","solutionNames":["Ai網路開店+雲端POS+蝦皮整合+進銷存整合方案"],"logoFileName":"詮通電腦.png"},{"companyShortName":"睿力智能運動","companyName":"睿力智能運動有限公司","companyIntro":"睿力智能運動（ATTRAKFIT）深耕智慧運動科技，結合 IoT 與自動阻力演算法，推出智慧訓練車、外掛式虛擬騎乘升級模組、力量感測踏板等，協助家用與健身房精準化訓練。我們致力於讓運動科學與娛樂體驗無縫接軌，不僅提供硬體方案，更透過 AI 技術驅動數位轉型。\\n\\n在拓展業務過程中，我們深刻體會到產業的共同痛點：無論是通路商或製造商，都專注於產品銷售與製造本業，對於行銷推廣感到力不從心——聘請專職行銷人員成本高昂，外包又難以掌控品質，社群經營更是耗時費力。因此我們導入 AI 自動化行銷技術，不僅解決自身需求，更將這套系統服務化，協助同業夥伴以更低成本、更高效率進行多通路行銷與客戶開發。","websiteUrl":"attrakfit.com","solutionNames":["企業AI行銷獲客一站式解決方案"],"logoFileName":"睿力智能運動.png"},{"companyShortName":"數辰創藝科技","companyName":"數辰創藝科技股份有限公司","companyIntro":"數辰專注於 AI 軟體開發與數位解決方案，致力於為企業打造更高效、更智能的營運模式。我們的TeamSync 企業智能協作平台，結合 AI 聊天室與知識管理系統，重塑內部溝通模式，讓資訊流動更順暢、員工訓練更高效。我們亦運用 AI 技術精準鎮定目標客群，結合短影音、社群行銷與數位廣告代操，為品牌量身打造高效的市場拓展策略。透過 AI 創新與數據驅動的行銷策略，我們助力企業在競爭激烈的市場中脫穎而出。","websiteUrl":"https://shuchenai.com/","solutionNames":["TeamSync 企業AI 協作作業系統方案"],"logoFileName":"數辰創藝科技.png"}]'),ab={class:"page-hero"},rb={class:"container"},lb={class:"search-area"},cb={class:"search-results"},ub={key:0,class:"search-hint"},db={key:1,class:"search-hint"},pb={key:2,class:"result-list"},fb={class:"result-summary"},mb={__name:"SearchView",setup(e){const t=je(""),n={OpeningHomeView:{title:"首頁",path:"/",keywords:"開始探索 開頭影片 skip 跑馬燈 輪播"},AboutView:{title:"關於計畫",path:"/about",keywords:"即刻申請 申請 計畫說明"},ScheduleView:{title:"計畫時程",path:"/schedule",keywords:"時程 報名 申請截止"},FAQView:{title:"FAQ",path:"/faq",keywords:"常見問題 補助 申請條件"},CategoriesIndexView:{title:"方案分類",path:"/categories",keywords:"AI方案分類 方案總覽"},AIMarketInsightView:{title:"AI市場洞察",path:"/categories/ai-market-insight"},AIEnterpriseOperationsView:{title:"AI企業營運管理",path:"/categories/ai-enterprise-operations"},AIAssistantView:{title:"AI助理",path:"/categories/ai-assistant"},AIVerticalIntegrationView:{title:"AI垂直整合方案",path:"/categories/ai-vertical-integration"},AIHomeCareView:{title:"AI居家照護",path:"/categories/ai-home-care"},AIContentCreationView:{title:"AI創作內容",path:"/categories/ai-content-creation"},AIIntelligentCustomerServiceView:{title:"AI智能客服",path:"/categories/ai-intelligent-customer-service"},AISmartManufacturingView:{title:"AI智慧製造",path:"/categories/ai-smart-manufacturing"},AIInformationSecurityView:{title:"AI資訊安全",path:"/categories/ai-information-security"},AIOperationAutomationView:{title:"AI營運流程自動化",path:"/categories/ai-operation-automation"},AIServiceSuppliersView:{title:"AI服務供應商",path:"/vendors",keywords:"供應商 企業 官網 logo"},ContactUsView:{title:"聯絡我們",path:"/contact-us",keywords:"聯絡 電話 信箱"},SearchView:{title:"搜尋",path:"/search",keywords:"站內搜尋 關鍵字查詢"}},o=Object.assign({"./AboutView.vue":sA,"./ContactUsView.vue":iA,"./FAQView.vue":aA,"./OpeningHomeView.vue":rA,"./ScheduleView.vue":lA,"./categories/AIAssistantView.vue":cA,"./categories/AIContentCreationView.vue":uA,"./categories/AIEnterpriseOperationsView.vue":dA,"./categories/AIHomeCareView.vue":pA,"./categories/AIInformationSecurityView.vue":fA,"./categories/AIIntelligentCustomerServiceView.vue":mA,"./categories/AIMarketInsightView.vue":hA,"./categories/AIOperationAutomationView.vue":gA,"./categories/AISmartManufacturingView.vue":wA,"./categories/AIVerticalIntegrationView.vue":AA,"./categories/CategoriesIndexView.vue":bA,"./vendors/AIServiceSuppliersView.vue":yA}),s=C=>{const B=C.match(/<template>([\s\S]*?)<\/template>/i);return B?B[1]:C},i=C=>[...C.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)].map(V=>V[1]||"").join(" "),a=C=>{const B=[],V=/(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g;let j=V.exec(C);for(;j;){const K=(j[2]||"").replace(/\\n/g," ").replace(/\\r/g," ").replace(/\\t/g," ").replace(/\\"/g,'"').replace(/\\'/g,"'").replace(/\s+/g," ").trim();K.length>=2&&B.push(K),j=V.exec(C)}return B.join(" ")},r=C=>C.replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<[^>]+>/g," ").replace(/{{[\s\S]*?}}/g," ").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim(),l=C=>C.split("/").pop().replace(".vue",""),u=fs.map(C=>C.label).join(" "),c=eu.map(C=>[C.companyName,C.companyShortName,C.companyIntro,C.websiteUrl,...C.solutionNames||[]].filter(Boolean).join(" ")).join(" "),d=Hc.map(C=>[C.question,C.answer].filter(Boolean).join(" ")).join(" "),m=C=>Ti.filter(B=>B.category===C).map(B=>[B.companyShortName,B.solutionName,B.solutionIntro,B.specialPrice].filter(Boolean).join(" ")).join(" "),h=C=>C.path==="/vendors"?c:C.path==="/categories"?u:C.path==="/faq"?d:C.path.startsWith("/categories/")?m(C.title):"",A=Object.entries(o).map(([C,B])=>{const V=l(C),j=n[V];if(!j)return null;const G=s(B),K=i(B),Z=r(G),pe=a(K),Ee=h(j),Ie=`${Z} ${pe} ${j.keywords||""} ${Ee}`.trim();return{...j,content:Ie,normalized:`${j.title} ${Ie}`.toLowerCase()}}).filter(Boolean),y=new Ln(A,{includeScore:!0,threshold:.3,ignoreLocation:!0,keys:[{name:"title",weight:.45},{name:"content",weight:.55}]}),I=Be(()=>t.value.trim()),_=(C,B)=>{const V=C||"",j=B.trim().toLowerCase();if(!V)return"";const K=V.toLowerCase().indexOf(j);if(K<0)return V.slice(0,96)+(V.length>96?"...":"");const Z=Math.max(0,K-28),pe=Math.min(V.length,K+j.length+52),Ee=Z>0?"...":"",Ie=pe<V.length?"...":"";return`${Ee}${V.slice(Z,pe)}${Ie}`},P=Be(()=>{if(!I.value)return[];const C=I.value.toLowerCase(),B=A.filter(K=>K.normalized.includes(C)),V=y.search(I.value).map(K=>K.item),j=[...B,...V],G=new Map;return j.forEach(K=>{G.has(K.path)||G.set(K.path,K)}),[...G.values()].map(K=>({...K,excerpt:_(K.content,I.value)}))});return(C,B)=>{const V=ls("RouterLink");return F(),R("section",ab,[w("div",rb,[B[1]||(B[1]=w("div",{class:"page-header"},[w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1",null,"搜尋"),w("span",{class:"title-line"})])],-1)),B[2]||(B[2]=w("br",null,null,-1)),B[3]||(B[3]=w("br",null,null,-1)),w("div",lb,[el(w("input",{"onUpdate:modelValue":B[0]||(B[0]=j=>t.value=j),class:"search-input",type:"search",placeholder:"請輸入關鍵字開始搜尋...","aria-label":"搜尋網站頁面"},null,512),[[wp,t.value]])]),w("div",cb,[I.value?P.value.length===0?(F(),R("p",db,"查無符合頁面，請嘗試其他關鍵字。")):(F(),R("ul",pb,[(F(!0),R(le,null,Oe(P.value,j=>(F(),R("li",{key:j.path,class:"result-item"},[ve(V,{to:j.path,class:"result-link"},{default:lt(()=>[ft(ue(j.title),1)]),_:2},1032,["to"]),w("p",fb,ue(j.excerpt),1)]))),128))])):(F(),R("p",ub))])])])}}},hb=qt(mb,[["__scopeId","data-v-721cebbf"]]),gb={class:"page-hero"},wb={class:"container"},Ab={class:"category-nav-grid"},bb={__name:"CategoriesIndexView",setup(e){return(t,n)=>{const o=ls("RouterLink");return F(),R("section",gb,[w("div",wb,[n[0]||(n[0]=w("div",{class:"page-header"},[w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1",null,"方案分類"),w("span",{class:"title-line"})])],-1)),w("div",Ab,[(F(!0),R(le,null,Oe(he(fs),s=>(F(),Ne(o,{key:s.slug,class:"category-nav-item",to:`/categories/${s.slug}`},{default:lt(()=>[ft(ue(s.label),1)]),_:2},1032,["to"]))),128))])])])}}},yb=qt(bb,[["__scopeId","data-v-36ddc106"]]),vb={class:"page-hero"},Eb={class:"container"},Ib={class:"page-header"},_b={class:"title-row"},xb=["onClick","onKeydown"],Cb={key:0,class:"solution-image"},Bb=["src","alt"],Sb={key:0,class:"category-company"},Nb={key:1,class:"category-solution"},Pb={key:2},kb={key:0,class:"empty-state"},Tb={__name:"SolutionCatalogView",props:{title:{type:String,required:!0},items:{type:Array,default:()=>[]},mode:{type:String,default:"category"},emptyText:{type:String,default:"目前尚無資料。"}},setup(e){const t=a=>String(a||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),n=a=>{const r=String(a||"").trim();return r?/^https?:\/\//i.test(r)?r:`https://${r}`:""},o=a=>t(String(a||"")).replaceAll(`
`,"<br />"),s=({label:a,value:r,href:l=""})=>{const u=String(r||"").trim();if(!u)return"";const c=l?`<a class="solution-modal-contact-link" href="${t(l)}" target="_blank" rel="noopener noreferrer">${t(u)}</a>`:`<span class="solution-modal-contact-value">${t(u)}</span>`;return`
    <p class="solution-modal-contact-item">
      <span class="solution-modal-contact-label">${t(a)}</span>
      <span class="solution-modal-contact-sep" aria-hidden="true">|</span>
      ${c}
    </p>
  `},i=a=>{const r=a.modalData||a,l=n(r.manualUrl),u=n(r.websiteUrl),c=r.detailImage||r.image||a.logo||"",d=`${r.name||a.solutionName||a.companyName||a.vendorName||"方案"} 示意圖`,m=l?`<a class="solution-modal-manual-btn" href="${t(l)}" target="_blank" rel="noopener noreferrer">點擊看「操作說明」<i class="fa-solid fa-arrow-pointer" aria-hidden="true"></i></a>`:'<span class="solution-modal-manual-btn solution-modal-manual-btn--disabled">點擊看「操作說明」<i class="fa-solid fa-arrow-pointer" aria-hidden="true"></i></span>',h=[s({label:"聯絡人",value:r.contactPerson}),s({label:"公司聯絡電話",value:r.companyPhone}),s({label:"聯絡信箱",value:r.contactEmail}),s({label:"公司官網網址",value:r.websiteUrl,href:u})].filter(Boolean).join(""),A=`
    <div class="solution-modal">
      <section class="solution-modal-section solution-modal-section--top">
        <div class="solution-modal-top">
          <div class="solution-modal-info">
            <p class="solution-modal-tag">${t(r.tag||"")}</p>
            <p class="solution-modal-company">${t(r.company||a.vendorName||a.companyName||"")}</p>
            <h2 class="solution-modal-title">${t(r.name||a.solutionName||a.companyName||a.cardTitle||a.vendorName||"")}</h2>
            <p class="solution-modal-manual">${m}</p>
          </div>
          <figure class="solution-modal-figure">
            ${c?`<button type="button" class="solution-modal-image-trigger" data-modal-image-trigger aria-label="查看方案大圖"><img src="${t(c)}" alt="${t(d)}" /></button>`:'<div class="solution-modal-image-placeholder">尚無圖片</div>'}
          </figure>
        </div>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-section solution-modal-section--middle">
        <h3 class="solution-modal-badge">方案介紹</h3>
        <p class="solution-modal-text">${o(r.solutionIntro||"")}</p>
        <h3 class="solution-modal-badge">新北專屬優惠價</h3>
        <div class="solution-modal-price-box">
          <p class="solution-modal-price-text">${o(r.specialPrice||"")}</p>
        </div>
      </section>
      <div class="solution-modal-divider" aria-hidden="true"></div>
      <section class="solution-modal-section solution-modal-section--bottom">
        <h3 class="solution-modal-badge">洽詢聯絡資訊</h3>
        <div class="solution-modal-contact-list">
          ${h}
        </div>
      </section>
      ${c?`<div class="solution-modal-lightbox" data-modal-lightbox hidden>
              <button type="button" class="solution-modal-lightbox-close" data-modal-lightbox-close aria-label="關閉圖片預覽">&times;</button>
              <img src="${t(c)}" alt="${t(d)}" />
            </div>`:""}
    </div>
  `;ro.fire({html:A,showConfirmButton:!1,showCloseButton:!0,customClass:{popup:"solution-swal-popup",closeButton:"solution-swal-close"},width:"min(1120px, 96vw)",background:"#ffffff",padding:"1.4rem 1.4rem 1.8rem",didOpen:y=>{const I=y.querySelector("[data-modal-image-trigger]"),_=y.querySelector("[data-modal-lightbox]"),P=y.querySelector("[data-modal-lightbox-close]");I&&_&&c&&(I.addEventListener("click",()=>{_.removeAttribute("hidden")}),_.addEventListener("click",C=>{C.target===_&&_.setAttribute("hidden","")}),P?.addEventListener("click",()=>{_.setAttribute("hidden","")}))}})};return(a,r)=>(F(),R("section",vb,[w("div",Eb,[w("div",Ib,[w("header",_b,[r[0]||(r[0]=w("span",{class:"title-line"},null,-1)),w("h1",null,ue(e.title),1),r[1]||(r[1]=w("span",{class:"title-line"},null,-1))])]),w("div",{class:ke(["solutions-grid",{"solutions-grid--category":e.mode==="category"}])},[(F(!0),R(le,null,Oe(e.items,l=>(F(),R("article",{key:l.id,class:ke(["solution-card",{"solution-card--category-only":e.mode==="category","solution-card--vendor-only":e.mode==="vendor"}]),role:"button",tabindex:"0",onClick:u=>i(l),onKeydown:[Pa(Lo(u=>i(l),["prevent"]),["enter"]),Pa(Lo(u=>i(l),["prevent"]),["space"])]},[e.mode==="vendor"?(F(),R("div",Cb,[w("img",{src:l.logo,alt:l.vendorName},null,8,Bb)])):mt("",!0),w("div",{class:ke(["solution-body",{"solution-body--category-only":e.mode==="category"}])},[e.mode==="category"?(F(),R("p",Sb,ue(l.companyName||l.cardTitle),1)):mt("",!0),e.mode==="category"?(F(),R("p",Nb,ue(l.solutionName),1)):mt("",!0),e.mode==="vendor"?(F(),R("h3",Pb,ue(l.vendorName),1)):mt("",!0)],2)],42,xb))),128)),e.items.length===0?(F(),R("div",kb,[w("p",null,ue(e.emptyText),1)])):mt("",!0)],2)])]))}},kt=qt(Tb,[["__scopeId","data-v-0879f9a8"]]),pr="AI市場洞察",Fb={__name:"AIMarketInsightView",setup(e){const t=Pt(pr);return(n,o)=>(F(),Ne(kt,{title:pr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},fr="AI企業營運管理",Db={__name:"AIEnterpriseOperationsView",setup(e){const t=Pt(fr);return(n,o)=>(F(),Ne(kt,{title:fr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},mr="AI助理",Mb={__name:"AIAssistantView",setup(e){const t=Pt(mr);return(n,o)=>(F(),Ne(kt,{title:mr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},hr="AI垂直整合方案",Ob={__name:"AIVerticalIntegrationView",setup(e){const t=Pt(hr);return(n,o)=>(F(),Ne(kt,{title:hr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},gr="AI居家照護",$b={__name:"AIHomeCareView",setup(e){const t=Pt(gr);return(n,o)=>(F(),Ne(kt,{title:gr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},wr="AI創作內容",Rb={__name:"AIContentCreationView",setup(e){const t=Pt(wr);return(n,o)=>(F(),Ne(kt,{title:wr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},Ar="AI智能客服",Lb={__name:"AIIntelligentCustomerServiceView",setup(e){const t=Pt(Ar);return(n,o)=>(F(),Ne(kt,{title:Ar,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},br="AI智慧製造",Ub={__name:"AISmartManufacturingView",setup(e){const t=Pt(br);return(n,o)=>(F(),Ne(kt,{title:br,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},yr="AI資訊安全",Vb={__name:"AIInformationSecurityView",setup(e){const t=Pt(yr);return(n,o)=>(F(),Ne(kt,{title:yr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},vr="AI營運流程自動化",jb={__name:"AIOperationAutomationView",setup(e){const t=Pt(vr);return(n,o)=>(F(),Ne(kt,{title:vr,items:he(t),mode:"category","empty-text":"目前尚無案例資料。"},null,8,["items"]))}},qb="/assets/%E4%BA%9E%E5%8D%9A%E7%A6%8F%E7%88%BE%E6%91%A9%E6%B2%99-CpRZt_ac.png",Hb="/assets/%E5%81%A5%E5%BA%B7%E7%9B%9F-DAqVoO0j.png",Gb="/assets/%E5%82%91%E9%A8%B0%E6%99%BA%E8%83%BD-l0PIt35V.png",Wb="/assets/%E5%85%83%E7%9B%9B%E7%94%9F%E9%86%AB%E9%9B%BB%E5%AD%90-gt0W6m_F.png",Kb="/assets/%E5%87%8C%E5%85%B8%E7%A7%91%E6%8A%80-XipU74Bx.png",zb="/assets/%E5%87%8C%E6%9D%BE%E7%A7%91%E6%8A%80-UAJsGdlt.png",Xb="/assets/%E5%87%B1%E9%88%BF%E8%A1%8C%E5%8B%95%E7%A7%91%E6%8A%80-BoAu1W_x.png",Yb="/assets/%E5%89%B5%E9%80%A0%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80-C09V6IGy.png",Qb="/assets/%E5%8D%A1%E8%8F%B2%E5%8D%A1%E9%87%91%E8%9E%8D%E7%A7%91%E6%8A%80-DhraYHWL.png",Jb="/assets/%E5%8F%B0%E8%81%9A%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F-htT6XPN3.png",Zb="/assets/%E5%9C%98%E8%96%A6%E7%A7%91%E6%8A%80-Ca_IXQXM.png",ey="/assets/%E5%9F%8E%E6%99%BA%E7%A7%91%E6%8A%80-BZOPPYE5.png",ty="/assets/%E5%A4%A7%E6%95%B8%E8%BB%9F%E9%AB%94-DMEKcRY6.png",ny="/assets/%E6%85%A7%E7%A9%A9%E7%A7%91%E6%8A%80-Dg_mhOPi.png",oy="/assets/%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80-5EcdWAth.png",sy="/assets/%E6%91%A9%E7%B5%A1%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7-CUD_DURW.png",iy="/assets/%E6%95%B8%E8%BE%B0%E5%89%B5%E8%97%9D%E7%A7%91%E6%8A%80-a1J7myBG.png",ay="/assets/%E6%98%93%E6%99%A8%E6%99%BA%E8%83%BD-BjWCWxap.png",ry="/assets/%E6%9B%9C%E5%A4%86%E7%A7%91%E6%8A%80-3oqJlcfh.png",ly="/assets/%E6%9C%89%E5%89%B5%E7%A7%91%E6%8A%80-Cak7rXvP.png",cy="/assets/%E6%A5%B5%E9%A2%A8%E9%9B%B2%E5%89%B5-BplhEXay.png",uy="/assets/%E6%BB%BF%E6%8B%93%E7%A7%91%E6%8A%80-BwxNUtOE.png",dy="/assets/%E6%BC%AB%E8%A9%B1%E7%A7%91%E6%8A%80-BSBuitTk.png",py="/assets/%E7%92%B0%E7%90%83%E7%9D%BF%E8%A6%96-Cjb4kuOl.png",fy="/assets/%E7%92%BD%E6%A8%82%E7%A7%91%E6%8A%80-wOYU2_Io.png",my="/assets/%E7%94%A8%E7%9B%8A%E7%B6%B2%E8%B7%AF%E7%A7%91%E6%8A%80-CWggdF1m.png",hy="/assets/%E7%9D%BF%E5%8A%9B%E6%99%BA%E8%83%BD%E9%81%8B%E5%8B%95-e8SFIUys.png",gy="/assets/%E7%9D%BF%E6%80%9D%E5%89%B5%E6%96%B0-_LC7Of_Z.png",wy="/assets/%E7%A4%BE%E7%BE%A4%E6%B4%9E%E5%AF%9F-Bypg-heJ.png",Ay="/assets/%E7%A9%8E%E8%AB%BE%E7%A7%91%E6%8A%80-CozF8CfT.png",by="/assets/%E7%B6%B2%E9%9A%9B%E6%99%BA%E6%85%A7-oEHgJSBn.png",yy="/assets/%E7%B7%AF%E8%AC%99%E7%A7%91%E6%8A%80-B_CUcfP_.png",vy="/assets/%E8%81%9A%E5%85%B8%E8%B3%87%E8%A8%8A-CVvYO2nx.png",Ey="/assets/%E8%82%86%E6%99%82%E8%B3%87%E8%A8%8A%E8%A8%AD%E8%A8%88-BY6QqpAQ.png",Iy="/assets/%E8%83%8C%E6%99%AF%E6%A8%A1%E5%BC%8F-BaNh6PfK.png",_y="/assets/%E8%87%BA%E7%81%A3%E9%80%9A%E7%94%A8%E7%B4%A1%E7%B9%94%E7%A7%91%E6%8A%80-CsrrS9H-.png",xy="/assets/%E8%89%BE%E5%88%A9%E6%80%9D%E7%A7%91%E6%8A%80-BMHzul1K.png",Cy="/assets/%E8%89%BE%E6%AF%94%E4%BA%92%E5%8B%95%E5%A8%9B%E6%A8%82-CfHodtiR.png",By="/assets/%E8%8F%AF%E8%8B%93%E7%A7%91%E6%8A%80-CvTVV_Wo.png",Sy="/assets/%E8%99%8E%E6%99%BA%E7%A7%91%E6%8A%80-yNB5QCzB.png",Ny="/assets/%E8%A8%8A%E9%80%A3%E7%A7%91%E6%8A%80-B2pEIBTc.png",Py="/assets/%E8%A9%AE%E9%80%9A%E9%9B%BB%E8%85%A6-Bzyr1Ea4.png",ky="/assets/%E9%96%8B%E6%BA%90%E6%99%BA%E9%80%A0-BM5mzqQE.png",Ty="/assets/%E9%9B%B2%E7%BE%A9%E7%A7%91%E6%8A%80-qkihQrIq.png",Fy="/assets/%E9%BA%9F%E6%95%B8%E6%93%9A%E7%A7%91%E6%8A%80-Dnq3J-qf.png",Dy={class:"page-hero"},My={class:"container"},Oy={class:"vendors-grid"},$y=["onClick"],Ry={class:"vendor-logo-wrap"},Ly=["src","alt"],Uy={key:1,class:"vendor-logo-placeholder"},Vy={class:"vendor-name"},jy={class:"vendors-pagination",role:"tablist","aria-label":"供應商頁面切換"},qy=["aria-label","aria-selected","onClick"],Hy={class:"supplier-modal",role:"dialog","aria-modal":"true","aria-label":"供應商詳細資訊"},Gy={class:"supplier-modal-layout"},Wy={class:"supplier-modal-side"},Ky={class:"supplier-modal-logo"},zy=["src","alt"],Xy={key:1,class:"vendor-logo-placeholder"},Yy=["href"],Qy={class:"supplier-modal-main"},Jy={class:"supplier-modal-title"},Zy={class:"supplier-modal-intro"},e2={class:"supplier-modal-tags"},t2={key:1,class:"supplier-solution-tag"},Io=15,n2={__name:"AIServiceSuppliersView",setup(e){const t=Object.assign({"/src/assets/solutions/logo/亞博福爾摩沙.png":qb,"/src/assets/solutions/logo/健康盟.png":Hb,"/src/assets/solutions/logo/傑騰智能.png":Gb,"/src/assets/solutions/logo/元盛生醫電子.png":Wb,"/src/assets/solutions/logo/凌典科技.png":Kb,"/src/assets/solutions/logo/凌松科技.png":zb,"/src/assets/solutions/logo/凱鈿行動科技.png":Xb,"/src/assets/solutions/logo/創造智能科技.png":Yb,"/src/assets/solutions/logo/卡菲卡金融科技.png":Qb,"/src/assets/solutions/logo/台聚管理顧問.png":Jb,"/src/assets/solutions/logo/團薦科技.png":Zb,"/src/assets/solutions/logo/城智科技.png":ey,"/src/assets/solutions/logo/大數軟體.png":ty,"/src/assets/solutions/logo/慧穩科技.png":ny,"/src/assets/solutions/logo/拉普拉斯智能科技.png":oy,"/src/assets/solutions/logo/摩絡人工智慧.png":sy,"/src/assets/solutions/logo/數辰創藝科技.png":iy,"/src/assets/solutions/logo/易晨智能.png":ay,"/src/assets/solutions/logo/曜夆科技.png":ry,"/src/assets/solutions/logo/有創科技.png":ly,"/src/assets/solutions/logo/極風雲創.png":cy,"/src/assets/solutions/logo/滿拓科技.png":uy,"/src/assets/solutions/logo/漫話科技.png":dy,"/src/assets/solutions/logo/環球睿視.png":py,"/src/assets/solutions/logo/璽樂科技.png":fy,"/src/assets/solutions/logo/用益網路科技.png":my,"/src/assets/solutions/logo/睿力智能運動.png":hy,"/src/assets/solutions/logo/睿思創新.png":gy,"/src/assets/solutions/logo/社群洞察.png":wy,"/src/assets/solutions/logo/穎諾科技.png":Ay,"/src/assets/solutions/logo/網際智慧.png":by,"/src/assets/solutions/logo/緯謙科技.png":yy,"/src/assets/solutions/logo/聚典資訊.png":vy,"/src/assets/solutions/logo/肆時資訊設計.png":Ey,"/src/assets/solutions/logo/背景模式.png":Iy,"/src/assets/solutions/logo/臺灣通用紡織科技.png":_y,"/src/assets/solutions/logo/艾利思科技.png":xy,"/src/assets/solutions/logo/艾比互動娛樂.png":Cy,"/src/assets/solutions/logo/華苓科技.png":By,"/src/assets/solutions/logo/虎智科技.png":Sy,"/src/assets/solutions/logo/訊連科技.png":Ny,"/src/assets/solutions/logo/詮通電腦.png":Py,"/src/assets/solutions/logo/開源智造.png":ky,"/src/assets/solutions/logo/雲義科技.png":Ty,"/src/assets/solutions/logo/麟數據科技.png":Fy}),n=A=>{const y=String(A||"").trim();return y?/^https?:\/\//i.test(y)?y:`https://${y}`:""},o=A=>String(A??"").trim(),s=new Map(fs.map(A=>[A.label,A.slug])),i=new Map;Ti.forEach(A=>{const y=o(A.solutionName),I=o(A.category),_=o(A.companyName),P=o(A.companyShortName),C=s.get(I);if(!y||!C)return;const B=`/categories/${C}`;_&&i.set(`${_}::${y}`,B),P&&i.set(`${P}::${y}`,B),i.has(y)||i.set(y,B)});const a=eu.map(A=>({...A,websiteUrl:n(A.websiteUrl),solutionLinks:(A.solutionNames||[]).map(y=>{const I=o(y),_=i.get(`${o(A.companyName)}::${I}`)||i.get(`${o(A.companyShortName)}::${I}`)||i.get(I)||"";return{label:I,to:_}}),logo:A.logoFileName&&t[`/src/assets/solutions/logo/${A.logoFileName}`]?t[`/src/assets/solutions/logo/${A.logoFileName}`]:""})),r=je(0),l=je(null),u=Be(()=>Math.max(1,Math.ceil(a.length/Io))),c=Be(()=>a.slice(r.value*Io,r.value*Io+Io)),d=A=>{A<0||A>=u.value||(r.value=A)},m=A=>{l.value=A},h=()=>{l.value=null};return(A,y)=>(F(),R(le,null,[w("section",Dy,[w("div",My,[y[0]||(y[0]=w("div",{class:"page-header"},[w("header",{class:"title-row"},[w("span",{class:"title-line"}),w("h1",null,"AI服務供應商"),w("span",{class:"title-line"})])],-1)),w("div",Oy,[(F(!0),R(le,null,Oe(c.value,I=>(F(),R("button",{key:I.companyShortName,class:"vendor-card",type:"button",onClick:_=>m(I)},[w("span",Ry,[I.logo?(F(),R("img",{key:0,src:I.logo,alt:`${I.companyShortName} logo`},null,8,Ly)):(F(),R("span",Uy,"LOGO"))]),w("span",Vy,ue(I.companyShortName),1)],8,$y))),128))]),w("div",jy,[(F(!0),R(le,null,Oe(u.value,I=>(F(),R("button",{key:I,class:ke(["vendors-page-dot",{active:r.value===I-1}]),type:"button","aria-label":`切換到第 ${I} 頁`,"aria-selected":r.value===I-1,onClick:_=>d(I-1)},null,10,qy))),128))])])]),(F(),Ne(Xu,{to:"body"},[l.value?(F(),R("div",{key:0,class:"supplier-modal-backdrop",onClick:Lo(h,["self"])},[w("article",Hy,[w("button",{class:"supplier-modal-close",type:"button","aria-label":"關閉視窗",onClick:h},[...y[1]||(y[1]=[w("i",{class:"fa-solid fa-xmark"},null,-1)])]),w("div",Gy,[w("aside",Wy,[w("div",Ky,[l.value.logo?(F(),R("img",{key:0,src:l.value.logo,alt:`${l.value.companyShortName} logo`},null,8,zy)):(F(),R("span",Xy,"LOGO"))]),l.value.websiteUrl?(F(),R("a",{key:0,href:l.value.websiteUrl,class:"supplier-website-btn",target:"_blank",rel:"noopener noreferrer"}," 官網 ",8,Yy)):mt("",!0)]),w("section",Qy,[w("h2",Jy,ue(l.value.companyName||l.value.companyShortName),1),w("p",Zy,ue(l.value.companyIntro||"暫無公司簡介。"),1),w("div",e2,[(F(!0),R(le,null,Oe(l.value.solutionLinks,I=>(F(),R(le,{key:I.label},[I.to?(F(),Ne(he(Wl),{key:0,to:I.to,class:"supplier-solution-tag supplier-solution-tag--link",onClick:h},{default:lt(()=>[ft(ue(I.label),1)]),_:2},1032,["to"])):(F(),R("span",t2,ue(I.label),1))],64))),128))])])])])])):mt("",!0)]))],64))}},o2=qt(n2,[["__scopeId","data-v-0a7576bd"]]),s2=[{path:"/",name:"home",component:Eh},{path:"/about",name:"about",component:Ph},{path:"/schedule",name:"schedule",component:Cw},{path:"/faq",name:"faq",component:Rw},{path:"/categories",name:"categories",component:yb},{path:"/categories/ai-market-insight",name:"category-ai-market-insight",component:Fb},{path:"/categories/ai-enterprise-operations",name:"category-ai-enterprise-operations",component:Db},{path:"/categories/ai-assistant",name:"category-ai-assistant",component:Mb},{path:"/categories/ai-vertical-integration",name:"category-ai-vertical-integration",component:Ob},{path:"/categories/ai-home-care",name:"category-ai-home-care",component:$b},{path:"/categories/ai-content-creation",name:"category-ai-content-creation",component:Rb},{path:"/categories/ai-intelligent-customer-service",name:"category-ai-intelligent-customer-service",component:Lb},{path:"/categories/ai-smart-manufacturing",name:"category-ai-smart-manufacturing",component:Ub},{path:"/categories/ai-information-security",name:"category-ai-information-security",component:Vb},{path:"/categories/ai-operation-automation",name:"category-ai-operation-automation",component:jb},{path:"/vendors",name:"vendors",component:o2},{path:"/contact-us",name:"contact-us",component:oA},{path:"/search",name:"search",component:hb},{path:"/:pathMatch(.*)*",redirect:"/"}],Qo=Pf({history:uf(),routes:s2,scrollBehavior(){return{top:0,behavior:"smooth"}}}),tu=Ip(th),nu=()=>{Qo.currentRoute.value.path!=="/"&&Qo.replace("/")};Qo.onError(()=>{nu()});tu.config.errorHandler=()=>{nu()};tu.use(Qo).mount("#app");
