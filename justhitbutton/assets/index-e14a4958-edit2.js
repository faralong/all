var Rl=Object.defineProperty;var Il=(t,e,n)=>e in t?Rl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ua=(t,e,n)=>(Il(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Fc=Object.prototype.toString;function Kc(t){switch(Fc.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Kr(t,Error)}}function Fr(t,e){return Fc.call(t)===`[object ${e}]`}function ua(t){return Fr(t,"ErrorEvent")}function Fa(t){return Fr(t,"DOMError")}function Pl(t){return Fr(t,"DOMException")}function er(t){return Fr(t,"String")}function qc(t){return t===null||typeof t!="object"&&typeof t!="function"}function jr(t){return Fr(t,"Object")}function Fi(t){return typeof Event<"u"&&Kr(t,Event)}function Cl(t){return typeof Element<"u"&&Kr(t,Element)}function jl(t){return Fr(t,"RegExp")}function la(t){return!!(t&&t.then&&typeof t.then=="function")}function Dl(t){return jr(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function $l(t){return typeof t=="number"&&t!==t}function Kr(t,e){try{return t instanceof e}catch{return!1}}function Ls(t){return t&&t.Math==Math?t:void 0}const Gt=typeof globalThis=="object"&&Ls(globalThis)||typeof window=="object"&&Ls(window)||typeof self=="object"&&Ls(self)||typeof global=="object"&&Ls(global)||function(){return this}()||{};function Cs(){return Gt}function fa(t,e,n){const r=n||Gt,s=r.__SENTRY__=r.__SENTRY__||{};return s[t]||(s[t]=e())}const ni=Cs(),Bl=80;function vo(t,e={}){try{let n=t;const r=5,s=[];let i=0,o=0;const a=" > ",u=a.length;let c;const l=Array.isArray(e)?e:e.keyAttrs,d=!Array.isArray(e)&&e.maxStringLength||Bl;for(;n&&i++<r&&(c=Ll(n,l),!(c==="html"||i>1&&o+s.length*u+c.length>=d));)s.push(c),o+=c.length,n=n.parentNode;return s.reverse().join(a)}catch{return"<unknown>"}}function Ll(t,e){const n=t,r=[];let s,i,o,a,u;if(!n||!n.tagName)return"";r.push(n.tagName.toLowerCase());const c=e&&e.length?e.filter(d=>n.getAttribute(d)).map(d=>[d,n.getAttribute(d)]):null;if(c&&c.length)c.forEach(d=>{r.push(`[${d[0]}="${d[1]}"]`)});else if(n.id&&r.push(`#${n.id}`),s=n.className,s&&er(s))for(i=s.split(/\s+/),u=0;u<i.length;u++)r.push(`.${i[u]}`);const l=["aria-label","type","name","title","alt"];for(u=0;u<l.length;u++)o=l[u],a=n.getAttribute(o),a&&r.push(`[${o}="${a}"]`);return r.join("")}function Ml(){try{return ni.document.location.href}catch{return""}}function Ul(t){return ni.document&&ni.document.querySelector?ni.document.querySelector(t):null}const Fl="Sentry Logger ",hi=["debug","info","warn","error","log","assert","trace"];function Gc(t){if(!("console"in Gt))return t();const e=Gt.console,n={};hi.forEach(r=>{const s=e[r]&&e[r].__sentry_original__;r in e&&s&&(n[r]=e[r],e[r]=s)});try{return t()}finally{Object.keys(n).forEach(r=>{e[r]=n[r]})}}function Ka(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?hi.forEach(n=>{e[n]=(...r)=>{t&&Gc(()=>{Gt.console[n](`${Fl}[${n}]:`,...r)})}}):hi.forEach(n=>{e[n]=()=>{}}),e}let pe;typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?pe=fa("logger",Ka):pe=Ka();const Kl=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function ql(t){return t==="http"||t==="https"}function Ki(t,e=!1){const{host:n,path:r,pass:s,port:i,projectId:o,protocol:a,publicKey:u}=t;return`${a}://${u}${e&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r&&`${r}/`}${o}`}function Gl(t){const e=Kl.exec(t);if(!e){console.error(`Invalid Sentry Dsn: ${t}`);return}const[n,r,s="",i,o="",a]=e.slice(1);let u="",c=a;const l=c.split("/");if(l.length>1&&(u=l.slice(0,-1).join("/"),c=l.pop()),c){const d=c.match(/^\d+/);d&&(c=d[0])}return Yc({host:i,pass:s,path:u,projectId:c,port:o,protocol:n,publicKey:r})}function Yc(t){return{protocol:t.protocol,publicKey:t.publicKey||"",pass:t.pass||"",host:t.host,port:t.port||"",path:t.path||"",projectId:t.projectId}}function Yl(t){if(!(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__))return!0;const{port:e,projectId:n,protocol:r}=t;return["protocol","publicKey","host","projectId"].find(o=>t[o]?!1:(pe.error(`Invalid Sentry Dsn: ${o} missing`),!0))?!1:n.match(/^\d+$/)?ql(r)?e&&isNaN(parseInt(e,10))?(pe.error(`Invalid Sentry Dsn: Invalid port ${e}`),!1):!0:(pe.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),!1):(pe.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),!1)}function Hl(t){const e=typeof t=="string"?Gl(t):Yc(t);if(!(!e||!Yl(e)))return e}class Xt extends Error{constructor(e,n="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=n}}function ns(t,e=0){return typeof t!="string"||e===0||t.length<=e?t:`${t.slice(0,e)}...`}function qa(t,e){if(!Array.isArray(t))return"";const n=[];for(let r=0;r<t.length;r++){const s=t[r];try{n.push(String(s))}catch{n.push("[value cannot be serialized]")}}return n.join(e)}function Vl(t,e,n=!1){return er(t)?jl(e)?e.test(t):er(e)?n?t===e:t.includes(e):!1:!1}function qi(t,e=[],n=!1){return e.some(r=>Vl(t,r,n))}function yt(t,e,n){if(!(e in t))return;const r=t[e],s=n(r);if(typeof s=="function")try{Hc(s,r)}catch{}t[e]=s}function da(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}function Hc(t,e){const n=e.prototype||{};t.prototype=e.prototype=n,da(t,"__sentry_original__",e)}function ha(t){return t.__sentry_original__}function Zl(t){return Object.keys(t).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")}function Vc(t){if(Kc(t))return{message:t.message,name:t.name,stack:t.stack,...Ya(t)};if(Fi(t)){const e={type:t.type,target:Ga(t.target),currentTarget:Ga(t.currentTarget),...Ya(t)};return typeof CustomEvent<"u"&&Kr(t,CustomEvent)&&(e.detail=t.detail),e}else return t}function Ga(t){try{return Cl(t)?vo(t):Object.prototype.toString.call(t)}catch{return"<unknown>"}}function Ya(t){if(typeof t=="object"&&t!==null){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}else return{}}function zl(t,e=40){const n=Object.keys(Vc(t));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=e)return ns(n[0],e);for(let r=n.length;r>0;r--){const s=n.slice(0,r).join(", ");if(!(s.length>e))return r===n.length?s:ns(s,e)}return""}function pa(t){return bo(t,new Map)}function bo(t,e){if(jr(t)){const n=e.get(t);if(n!==void 0)return n;const r={};e.set(t,r);for(const s of Object.keys(t))typeof t[s]<"u"&&(r[s]=bo(t[s],e));return r}if(Array.isArray(t)){const n=e.get(t);if(n!==void 0)return n;const r=[];return e.set(t,r),t.forEach(s=>{r.push(bo(s,e))}),r}return t}const Zc=50,Ha=/\(error: (.*)\)/;function zc(...t){const e=t.sort((n,r)=>n[0]-r[0]).map(n=>n[1]);return(n,r=0)=>{const s=[],i=n.split(`
`);for(let o=r;o<i.length;o++){const a=i[o];if(a.length>1024)continue;const u=Ha.test(a)?a.replace(Ha,"$1"):a;if(!u.match(/\S*Error: /)){for(const c of e){const l=c(u);if(l){s.push(l);break}}if(s.length>=Zc)break}}return Jl(s)}}function Wl(t){return Array.isArray(t)?zc(...t):t}function Jl(t){if(!t.length)return[];const e=t.slice(0,Zc),n=e[e.length-1].function;n&&/sentryWrapped/.test(n)&&e.pop(),e.reverse();const r=e[e.length-1].function;return r&&/captureMessage|captureException/.test(r)&&e.pop(),e.map(s=>({...s,filename:s.filename||e[e.length-1].filename,function:s.function||"?"}))}const to="<anonymous>";function Dn(t){try{return!t||typeof t!="function"?to:t.name||to}catch{return to}}const wo=Cs();function Wc(){if(!("fetch"in wo))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function Eo(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function Xl(){if(!Wc())return!1;if(Eo(wo.fetch))return!0;let t=!1;const e=wo.document;if(e&&typeof e.createElement=="function")try{const n=e.createElement("iframe");n.hidden=!0,e.head.appendChild(n),n.contentWindow&&n.contentWindow.fetch&&(t=Eo(n.contentWindow.fetch)),e.head.removeChild(n)}catch(n){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",n)}return t}const Ms=Cs();function Ql(){const t=Ms.chrome,e=t&&t.app&&t.app.runtime,n="history"in Ms&&!!Ms.history.pushState&&!!Ms.history.replaceState;return!e&&n}const Ve=Cs(),Wr="__sentry_xhr_v2__",rs={},Va={};function ef(t){if(!Va[t])switch(Va[t]=!0,t){case"console":tf();break;case"dom":lf();break;case"xhr":sf();break;case"fetch":nf();break;case"history":of();break;case"error":ff();break;case"unhandledrejection":df();break;default:(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("unknown instrumentation type:",t);return}}function Nn(t,e){rs[t]=rs[t]||[],rs[t].push(e),ef(t)}function tn(t,e){if(!(!t||!rs[t]))for(const n of rs[t]||[])try{n(e)}catch(r){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Dn(n)}
Error:`,r)}}function tf(){"console"in Ve&&hi.forEach(function(t){t in Ve.console&&yt(Ve.console,t,function(e){return function(...n){tn("console",{args:n,level:t}),e&&e.apply(Ve.console,n)}})})}function nf(){Xl()&&yt(Ve,"fetch",function(t){return function(...e){const{method:n,url:r}=rf(e),s={args:e,fetchData:{method:n,url:r},startTimestamp:Date.now()};return tn("fetch",{...s}),t.apply(Ve,e).then(i=>(tn("fetch",{...s,endTimestamp:Date.now(),response:i}),i),i=>{throw tn("fetch",{...s,endTimestamp:Date.now(),error:i}),i})}})}function So(t,e){return!!t&&typeof t=="object"&&!!t[e]}function Za(t){return typeof t=="string"?t:t?So(t,"url")?t.url:t.toString?t.toString():"":""}function rf(t){if(t.length===0)return{method:"GET",url:""};if(t.length===2){const[n,r]=t;return{url:Za(n),method:So(r,"method")?String(r.method).toUpperCase():"GET"}}const e=t[0];return{url:Za(e),method:So(e,"method")?String(e.method).toUpperCase():"GET"}}function sf(){if(!("XMLHttpRequest"in Ve))return;const t=XMLHttpRequest.prototype;yt(t,"open",function(e){return function(...n){const r=n[1],s=this[Wr]={method:er(n[0])?n[0].toUpperCase():n[0],url:n[1],request_headers:{}};er(r)&&s.method==="POST"&&r.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const i=()=>{const o=this[Wr];if(o&&this.readyState===4){try{o.status_code=this.status}catch{}tn("xhr",{args:n,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:this})}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?yt(this,"onreadystatechange",function(o){return function(...a){return i(),o.apply(this,a)}}):this.addEventListener("readystatechange",i),yt(this,"setRequestHeader",function(o){return function(...a){const[u,c]=a,l=this[Wr];return l&&(l.request_headers[u.toLowerCase()]=c),o.apply(this,a)}}),e.apply(this,n)}}),yt(t,"send",function(e){return function(...n){const r=this[Wr];return r&&n[0]!==void 0&&(r.body=n[0]),tn("xhr",{args:n,startTimestamp:Date.now(),xhr:this}),e.apply(this,n)}})}let Us;function of(){if(!Ql())return;const t=Ve.onpopstate;Ve.onpopstate=function(...n){const r=Ve.location.href,s=Us;if(Us=r,tn("history",{from:s,to:r}),t)try{return t.apply(this,n)}catch{}};function e(n){return function(...r){const s=r.length>2?r[2]:void 0;if(s){const i=Us,o=String(s);Us=o,tn("history",{from:i,to:o})}return n.apply(this,r)}}yt(Ve.history,"pushState",e),yt(Ve.history,"replaceState",e)}const af=1e3;let Fs,Ks;function cf(t,e){if(!t||t.type!==e.type)return!0;try{if(t.target!==e.target)return!0}catch{}return!1}function uf(t){if(t.type!=="keypress")return!1;try{const e=t.target;if(!e||!e.tagName)return!0;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)return!1}catch{}return!0}function za(t,e=!1){return n=>{if(!n||Ks===n||uf(n))return;const r=n.type==="keypress"?"input":n.type;Fs===void 0?(t({event:n,name:r,global:e}),Ks=n):cf(Ks,n)&&(t({event:n,name:r,global:e}),Ks=n),clearTimeout(Fs),Fs=Ve.setTimeout(()=>{Fs=void 0},af)}}function lf(){if(!("document"in Ve))return;const t=tn.bind(null,"dom"),e=za(t,!0);Ve.document.addEventListener("click",e,!1),Ve.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(n=>{const r=Ve[n]&&Ve[n].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(yt(r,"addEventListener",function(s){return function(i,o,a){if(i==="click"||i=="keypress")try{const u=this,c=u.__sentry_instrumentation_handlers__=u.__sentry_instrumentation_handlers__||{},l=c[i]=c[i]||{refCount:0};if(!l.handler){const d=za(t);l.handler=d,s.call(this,i,d,a)}l.refCount++}catch{}return s.call(this,i,o,a)}}),yt(r,"removeEventListener",function(s){return function(i,o,a){if(i==="click"||i=="keypress")try{const u=this,c=u.__sentry_instrumentation_handlers__||{},l=c[i];l&&(l.refCount--,l.refCount<=0&&(s.call(this,i,l.handler,a),l.handler=void 0,delete c[i]),Object.keys(c).length===0&&delete u.__sentry_instrumentation_handlers__)}catch{}return s.call(this,i,o,a)}}))})}let qs=null;function ff(){qs=Ve.onerror,Ve.onerror=function(t,e,n,r,s){return tn("error",{column:r,error:s,line:n,msg:t,url:e}),qs&&!qs.__SENTRY_LOADER__?qs.apply(this,arguments):!1},Ve.onerror.__SENTRY_INSTRUMENTED__=!0}let Gs=null;function df(){Gs=Ve.onunhandledrejection,Ve.onunhandledrejection=function(t){return tn("unhandledrejection",t),Gs&&!Gs.__SENTRY_LOADER__?Gs.apply(this,arguments):!0},Ve.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}function hf(){const t=typeof WeakSet=="function",e=t?new WeakSet:[];function n(s){if(t)return e.has(s)?!0:(e.add(s),!1);for(let i=0;i<e.length;i++)if(e[i]===s)return!0;return e.push(s),!1}function r(s){if(t)e.delete(s);else for(let i=0;i<e.length;i++)if(e[i]===s){e.splice(i,1);break}}return[n,r]}function Sr(){const t=Gt,e=t.crypto||t.msCrypto;if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");const n=e&&e.getRandomValues?()=>e.getRandomValues(new Uint8Array(1))[0]:()=>Math.random()*16;return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,r=>(r^(n()&15)>>r/4).toString(16))}function Jc(t){return t.exception&&t.exception.values?t.exception.values[0]:void 0}function An(t){const{message:e,event_id:n}=t;if(e)return e;const r=Jc(t);return r?r.type&&r.value?`${r.type}: ${r.value}`:r.type||r.value||n||"<unknown>":n||"<unknown>"}function ko(t,e,n){const r=t.exception=t.exception||{},s=r.values=r.values||[],i=s[0]=s[0]||{};i.value||(i.value=e||""),i.type||(i.type=n||"Error")}function fs(t,e){const n=Jc(t);if(!n)return;const r={type:"generic",handled:!0},s=n.mechanism;if(n.mechanism={...r,...s,...e},e&&"data"in e){const i={...s&&s.data,...e.data};n.mechanism.data=i}}function Wa(t){if(t&&t.__sentry_captured__)return!0;try{da(t,"__sentry_captured__",!0)}catch{}return!1}function Xc(t){return Array.isArray(t)?t:[t]}function pf(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function mf(){return"npm"}function yf(){return!pf()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function gf(t,e){return t.require(e)}function On(t,e=100,n=1/0){try{return xo("",t,e,n)}catch(r){return{ERROR:`**non-serializable** (${r})`}}}function Qc(t,e=3,n=100*1024){const r=On(t,e);return wf(r)>n?Qc(t,e-1,n):r}function xo(t,e,n=1/0,r=1/0,s=hf()){const[i,o]=s;if(e==null||["number","boolean","string"].includes(typeof e)&&!$l(e))return e;const a=_f(t,e);if(!a.startsWith("[object "))return a;if(e.__sentry_skip_normalization__)return e;const u=typeof e.__sentry_override_normalization_depth__=="number"?e.__sentry_override_normalization_depth__:n;if(u===0)return a.replace("object ","");if(i(e))return"[Circular ~]";const c=e;if(c&&typeof c.toJSON=="function")try{const g=c.toJSON();return xo("",g,u-1,r,s)}catch{}const l=Array.isArray(e)?[]:{};let d=0;const h=Vc(e);for(const g in h){if(!Object.prototype.hasOwnProperty.call(h,g))continue;if(d>=r){l[g]="[MaxProperties ~]";break}const v=h[g];l[g]=xo(g,v,u-1,r,s),d++}return o(e),l}function _f(t,e){try{if(t==="domain"&&e&&typeof e=="object"&&e._events)return"[Domain]";if(t==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&e===global)return"[Global]";if(typeof window<"u"&&e===window)return"[Window]";if(typeof document<"u"&&e===document)return"[Document]";if(Dl(e))return"[SyntheticEvent]";if(typeof e=="number"&&e!==e)return"[NaN]";if(typeof e=="function")return`[Function: ${Dn(e)}]`;if(typeof e=="symbol")return`[${String(e)}]`;if(typeof e=="bigint")return`[BigInt: ${String(e)}]`;const n=vf(e);return/^HTML(\w*)Element$/.test(n)?`[HTMLElement: ${n}]`:`[object ${n}]`}catch(n){return`**non-serializable** (${n})`}}function vf(t){const e=Object.getPrototypeOf(t);return e?e.constructor.name:"null prototype"}function bf(t){return~-encodeURI(t).split(/%..|./).length}function wf(t){return bf(JSON.stringify(t))}var pn;(function(t){t[t.PENDING=0]="PENDING";const n=1;t[t.RESOLVED=n]="RESOLVED";const r=2;t[t.REJECTED=r]="REJECTED"})(pn||(pn={}));function tr(t){return new kt(e=>{e(t)})}function pi(t){return new kt((e,n)=>{n(t)})}class kt{__init(){this._state=pn.PENDING}__init2(){this._handlers=[]}constructor(e){kt.prototype.__init.call(this),kt.prototype.__init2.call(this),kt.prototype.__init3.call(this),kt.prototype.__init4.call(this),kt.prototype.__init5.call(this),kt.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(n){this._reject(n)}}then(e,n){return new kt((r,s)=>{this._handlers.push([!1,i=>{if(!e)r(i);else try{r(e(i))}catch(o){s(o)}},i=>{if(!n)s(i);else try{r(n(i))}catch(o){s(o)}}]),this._executeHandlers()})}catch(e){return this.then(n=>n,e)}finally(e){return new kt((n,r)=>{let s,i;return this.then(o=>{i=!1,s=o,e&&e()},o=>{i=!0,s=o,e&&e()}).then(()=>{if(i){r(s);return}n(s)})})}__init3(){this._resolve=e=>{this._setResult(pn.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(pn.REJECTED,e)}}__init5(){this._setResult=(e,n)=>{if(this._state===pn.PENDING){if(la(n)){n.then(this._resolve,this._reject);return}this._state=e,this._value=n,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===pn.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach(n=>{n[0]||(this._state===pn.RESOLVED&&n[1](this._value),this._state===pn.REJECTED&&n[2](this._value),n[0]=!0)})}}}function Ef(t){const e=[];function n(){return t===void 0||e.length<t}function r(o){return e.splice(e.indexOf(o),1)[0]}function s(o){if(!n())return pi(new Xt("Not adding Promise because buffer limit was reached."));const a=o();return e.indexOf(a)===-1&&e.push(a),a.then(()=>r(a)).then(null,()=>r(a).then(null,()=>{})),a}function i(o){return new kt((a,u)=>{let c=e.length;if(!c)return a(!0);const l=setTimeout(()=>{o&&o>0&&a(!1)},o);e.forEach(d=>{tr(d).then(()=>{--c||(clearTimeout(l),a(!0))},u)})})}return{$:e,add:s,drain:i}}function no(t){if(!t)return{};const e=t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};const n=e[6]||"",r=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],search:n,hash:r,relative:e[5]+n+r}}const Sf=["fatal","error","warning","log","info","debug"];function kf(t){return t==="warn"?"warning":Sf.includes(t)?t:"log"}const eu=Cs(),To={nowSeconds:()=>Date.now()/1e3};function xf(){const{performance:t}=eu;if(!t||!t.now)return;const e=Date.now()-t.now();return{now:()=>t.now(),timeOrigin:e}}function Tf(){try{return gf(module,"perf_hooks").performance}catch{return}}const ro=yf()?Tf():xf(),Ja=ro===void 0?To:{nowSeconds:()=>(ro.timeOrigin+ro.now())/1e3},Gi=To.nowSeconds.bind(To),tu=Ja.nowSeconds.bind(Ja);(()=>{const{performance:t}=eu;if(!t||!t.now)return;const e=3600*1e3,n=t.now(),r=Date.now(),s=t.timeOrigin?Math.abs(t.timeOrigin+n-r):e,i=s<e,o=t.timing&&t.timing.navigationStart,u=typeof o=="number"?Math.abs(o+n-r):e,c=u<e;return i||c?s<=u?t.timeOrigin:o:r})();function js(t,e=[]){return[t,e]}function Of(t,e){const[n,r]=t;return[n,[...r,e]]}function Xa(t,e){const n=t[1];for(const r of n){const s=r[0].type;if(e(r,s))return!0}return!1}function Oo(t,e){return(e||new TextEncoder).encode(t)}function Nf(t,e){const[n,r]=t;let s=JSON.stringify(n);function i(o){typeof s=="string"?s=typeof o=="string"?s+o:[Oo(s,e),o]:s.push(typeof o=="string"?Oo(o,e):o)}for(const o of r){const[a,u]=o;if(i(`
${JSON.stringify(a)}
`),typeof u=="string"||u instanceof Uint8Array)i(u);else{let c;try{c=JSON.stringify(u)}catch{c=JSON.stringify(On(u))}i(c)}}return typeof s=="string"?s:Af(s)}function Af(t){const e=t.reduce((s,i)=>s+i.length,0),n=new Uint8Array(e);let r=0;for(const s of t)n.set(s,r),r+=s.length;return n}function Rf(t,e){const n=typeof t.data=="string"?Oo(t.data,e):t.data;return[pa({type:"attachment",length:n.length,filename:t.filename,content_type:t.contentType,attachment_type:t.attachmentType}),n]}const If={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor"};function Qa(t){return If[t]}function nu(t){if(!t||!t.sdk)return;const{name:e,version:n}=t.sdk;return{name:e,version:n}}function Pf(t,e,n,r){const s=t.sdkProcessingMetadata&&t.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:t.event_id,sent_at:new Date().toISOString(),...e&&{sdk:e},...!!n&&{dsn:Ki(r)},...s&&{trace:pa({...s})}}}function Cf(t,e,n){const r=[{type:"client_report"},{timestamp:n||Gi(),discarded_events:t}];return js(e?{dsn:e}:{},[r])}const jf=60*1e3;function Df(t,e=Date.now()){const n=parseInt(`${t}`,10);if(!isNaN(n))return n*1e3;const r=Date.parse(`${t}`);return isNaN(r)?jf:r-e}function $f(t,e){return t[e]||t.all||0}function Bf(t,e,n=Date.now()){return $f(t,e)>n}function Lf(t,{statusCode:e,headers:n},r=Date.now()){const s={...t},i=n&&n["x-sentry-rate-limits"],o=n&&n["retry-after"];if(i)for(const a of i.trim().split(",")){const[u,c]=a.split(":",2),l=parseInt(u,10),d=(isNaN(l)?60:l)*1e3;if(!c)s.all=r+d;else for(const h of c.split(";"))s[h]=r+d}else o?s.all=r+Df(o,r):e===429&&(s.all=r+60*1e3);return s}const ru="production";function Mf(t){const e=tu(),n={sid:Sr(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Ff(n)};return t&&Dr(n,t),n}function Dr(t,e={}){if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),!t.did&&!e.did&&(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||tu(),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=e.sid.length===32?e.sid:Sr()),e.init!==void 0&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),typeof e.started=="number"&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if(typeof e.duration=="number")t.duration=e.duration;else{const n=t.timestamp-t.started;t.duration=n>=0?n:0}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),typeof e.errors=="number"&&(t.errors=e.errors),e.status&&(t.status=e.status)}function Uf(t,e){let n={};e?n={status:e}:t.status==="ok"&&(n={status:"exited"}),Dr(t,n)}function Ff(t){return pa({sid:`${t.sid}`,init:t.init,started:new Date(t.started*1e3).toISOString(),timestamp:new Date(t.timestamp*1e3).toISOString(),status:t.status,errors:t.errors,did:typeof t.did=="number"||typeof t.did=="string"?`${t.did}`:void 0,duration:t.duration,attrs:{release:t.release,environment:t.environment,ip_address:t.ipAddress,user_agent:t.userAgent}})}const Kf=100;class Wn{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){const n=new Wn;return e&&(n._breadcrumbs=[...e._breadcrumbs],n._tags={...e._tags},n._extra={...e._extra},n._contexts={...e._contexts},n._user=e._user,n._level=e._level,n._span=e._span,n._session=e._session,n._transactionName=e._transactionName,n._fingerprint=e._fingerprint,n._eventProcessors=[...e._eventProcessors],n._requestSession=e._requestSession,n._attachments=[...e._attachments],n._sdkProcessingMetadata={...e._sdkProcessingMetadata}),n}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&Dr(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,n){return this._tags={...this._tags,[e]:n},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,n){return this._extra={...this._extra,[e]:n},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,n){return n===null?delete this._contexts[e]:this._contexts[e]=n,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if(typeof e=="function"){const n=e(this);return n instanceof Wn?n:this}return e instanceof Wn?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):jr(e)&&(e=e,this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,n){const r=typeof n=="number"?n:Kf;if(r<=0)return this;const s={timestamp:Gi(),...e};return this._breadcrumbs=[...this._breadcrumbs,s].slice(-r),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,n={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const r=this._span.transaction;if(r){e.sdkProcessingMetadata={dynamicSamplingContext:r.getDynamicSamplingContext(),...e.sdkProcessingMetadata};const s=r.name;s&&(e.tags={transaction:s,...e.tags})}}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...su(),...this._eventProcessors],e,n)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,n,r,s=0){return new kt((i,o)=>{const a=e[s];if(n===null||typeof a!="function")i(n);else{const u=a({...n},r);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&a.id&&u===null&&pe.log(`Event processor "${a.id}" dropped event`),la(u)?u.then(c=>this._notifyEventProcessors(e,c,r,s+1).then(i)).then(null,o):this._notifyEventProcessors(e,u,r,s+1).then(i).then(null,o)}})}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}_applyFingerprint(e){e.fingerprint=e.fingerprint?Xc(e.fingerprint):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function su(){return fa("globalEventProcessors",()=>[])}function Yi(t){su().push(t)}const iu=4,qf=100;class ou{constructor(e,n=new Wn,r=iu){this._version=r,this._stack=[{scope:n}],e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){const n=this.getStackTop();n.client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=Wn.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(e){const n=this.pushScope();try{e(n)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,n){const r=this._lastEventId=n&&n.event_id?n.event_id:Sr(),s=new Error("Sentry syntheticException");return this._withClient((i,o)=>{i.captureException(e,{originalException:e,syntheticException:s,...n,event_id:r},o)}),r}captureMessage(e,n,r){const s=this._lastEventId=r&&r.event_id?r.event_id:Sr(),i=new Error(e);return this._withClient((o,a)=>{o.captureMessage(e,n,{originalException:e,syntheticException:i,...r,event_id:s},a)}),s}captureEvent(e,n){const r=n&&n.event_id?n.event_id:Sr();return e.type||(this._lastEventId=r),this._withClient((s,i)=>{s.captureEvent(e,{...n,event_id:r},i)}),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,n){const{scope:r,client:s}=this.getStackTop();if(!s)return;const{beforeBreadcrumb:i=null,maxBreadcrumbs:o=qf}=s.getOptions&&s.getOptions()||{};if(o<=0)return;const u={timestamp:Gi(),...e},c=i?Gc(()=>i(u,n)):u;c!==null&&(s.emit&&s.emit("beforeAddBreadcrumb",c,n),r.addBreadcrumb(c,o))}setUser(e){this.getScope().setUser(e)}setTags(e){this.getScope().setTags(e)}setExtras(e){this.getScope().setExtras(e)}setTag(e,n){this.getScope().setTag(e,n)}setExtra(e,n){this.getScope().setExtra(e,n)}setContext(e,n){this.getScope().setContext(e,n)}configureScope(e){const{scope:n,client:r}=this.getStackTop();r&&e(n)}run(e){const n=ec(this);try{e(this)}finally{ec(n)}}getIntegration(e){const n=this.getClient();if(!n)return null;try{return n.getIntegration(e)}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,n){const r=this._callExtensionMethod("startTransaction",e,n);return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&!r&&console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),r}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const n=this.getStackTop().scope,r=n.getSession();r&&Uf(r),this._sendSessionUpdate(),n.setSession()}startSession(e){const{scope:n,client:r}=this.getStackTop(),{release:s,environment:i=ru}=r&&r.getOptions()||{},{userAgent:o}=Gt.navigator||{},a=Mf({release:s,environment:i,user:n.getUser(),...o&&{userAgent:o},...e}),u=n.getSession&&n.getSession();return u&&u.status==="ok"&&Dr(u,{status:"exited"}),this.endSession(),n.setSession(a),a}shouldSendDefaultPii(){const e=this.getClient(),n=e&&e.getOptions();return!!(n&&n.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:n}=this.getStackTop(),r=e.getSession();r&&n&&n.captureSession&&n.captureSession(r)}_withClient(e){const{scope:n,client:r}=this.getStackTop();r&&e(r,n)}_callExtensionMethod(e,...n){const s=Hi().__SENTRY__;if(s&&s.extensions&&typeof s.extensions[e]=="function")return s.extensions[e].apply(this,n);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Hi(){return Gt.__SENTRY__=Gt.__SENTRY__||{extensions:{},hub:void 0},Gt}function ec(t){const e=Hi(),n=No(e);return au(e,t),n}function ct(){const t=Hi();if(t.__SENTRY__&&t.__SENTRY__.acs){const e=t.__SENTRY__.acs.getCurrentHub();if(e)return e}return Gf(t)}function Gf(t=Hi()){return(!Yf(t)||No(t).isOlderThan(iu))&&au(t,new ou),No(t)}function Yf(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function No(t){return fa("hub",()=>new ou,t)}function au(t,e){if(!t)return!1;const n=t.__SENTRY__=t.__SENTRY__||{};return n.hub=e,!0}function Hf(t,e){return ct().captureException(t,{captureContext:e})}function Vf(t){ct().withScope(t)}const Zf="7";function zf(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}function Wf(t){return`${zf(t)}${t.projectId}/envelope/`}function Jf(t,e){return Zl({sentry_key:t.publicKey,sentry_version:Zf,...e&&{sentry_client:`${e.name}/${e.version}`}})}function Xf(t,e={}){const n=typeof e=="string"?e:e.tunnel,r=typeof e=="string"||!e._metadata?void 0:e._metadata.sdk;return n||`${Wf(t)}?${Jf(t,r)}`}function Qf(t,e){return e&&(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||e.name,t.sdk.version=t.sdk.version||e.version,t.sdk.integrations=[...t.sdk.integrations||[],...e.integrations||[]],t.sdk.packages=[...t.sdk.packages||[],...e.packages||[]]),t}function ed(t,e,n,r){const s=nu(n),i={sent_at:new Date().toISOString(),...s&&{sdk:s},...!!r&&{dsn:Ki(e)}},o="aggregates"in t?[{type:"sessions"},t]:[{type:"session"},t.toJSON()];return js(i,[o])}function td(t,e,n,r){const s=nu(n),i=t.type&&t.type!=="replay_event"?t.type:"event";Qf(t,n&&n.sdk);const o=Pf(t,s,r,e);return delete t.sdkProcessingMetadata,js(o,[[{type:i},t]])}const tc=[];function nd(t){const e={};return t.forEach(n=>{const{name:r}=n,s=e[r];s&&!s.isDefaultInstance&&n.isDefaultInstance||(e[r]=n)}),Object.keys(e).map(n=>e[n])}function rd(t){const e=t.defaultIntegrations||[],n=t.integrations;e.forEach(o=>{o.isDefaultInstance=!0});let r;Array.isArray(n)?r=[...e,...n]:typeof n=="function"?r=Xc(n(e)):r=e;const s=nd(r),i=id(s,o=>o.name==="Debug");if(i!==-1){const[o]=s.splice(i,1);s.push(o)}return s}function sd(t){const e={};return t.forEach(n=>{n&&cu(n,e)}),e}function cu(t,e){e[t.name]=t,tc.indexOf(t.name)===-1&&(t.setupOnce(Yi,ct),tc.push(t.name),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log(`Integration installed: ${t.name}`))}function id(t,e){for(let n=0;n<t.length;n++)if(e(t[n])===!0)return n;return-1}function od(t,e,n,r){const{normalizeDepth:s=3,normalizeMaxBreadth:i=1e3}=t,o={...e,event_id:e.event_id||n.event_id||Sr(),timestamp:e.timestamp||Gi()},a=n.integrations||t.integrations.map(l=>l.name);ad(o,t),ld(o,a),e.type===void 0&&cd(o,t.stackParser);let u=r;n.captureContext&&(u=Wn.clone(u).update(n.captureContext));let c=tr(o);if(u){if(u.getAttachments){const l=[...n.attachments||[],...u.getAttachments()];l.length&&(n.attachments=l)}c=u.applyToEvent(o,n)}return c.then(l=>(l&&ud(l),typeof s=="number"&&s>0?fd(l,s,i):l))}function ad(t,e){const{environment:n,release:r,dist:s,maxValueLength:i=250}=e;"environment"in t||(t.environment="environment"in e?n:ru),t.release===void 0&&r!==void 0&&(t.release=r),t.dist===void 0&&s!==void 0&&(t.dist=s),t.message&&(t.message=ns(t.message,i));const o=t.exception&&t.exception.values&&t.exception.values[0];o&&o.value&&(o.value=ns(o.value,i));const a=t.request;a&&a.url&&(a.url=ns(a.url,i))}const nc=new WeakMap;function cd(t,e){const n=Gt._sentryDebugIds;if(!n)return;let r;const s=nc.get(e);s?r=s:(r=new Map,nc.set(e,r));const i=Object.keys(n).reduce((o,a)=>{let u;const c=r.get(a);c?u=c:(u=e(a),r.set(a,u));for(let l=u.length-1;l>=0;l--){const d=u[l];if(d.filename){o[d.filename]=n[a];break}}return o},{});try{t.exception.values.forEach(o=>{o.stacktrace.frames.forEach(a=>{a.filename&&(a.debug_id=i[a.filename])})})}catch{}}function ud(t){const e={};try{t.exception.values.forEach(r=>{r.stacktrace.frames.forEach(s=>{s.debug_id&&(s.abs_path?e[s.abs_path]=s.debug_id:s.filename&&(e[s.filename]=s.debug_id),delete s.debug_id)})})}catch{}if(Object.keys(e).length===0)return;t.debug_meta=t.debug_meta||{},t.debug_meta.images=t.debug_meta.images||[];const n=t.debug_meta.images;Object.keys(e).forEach(r=>{n.push({type:"sourcemap",code_file:r,debug_id:e[r]})})}function ld(t,e){e.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=[...t.sdk.integrations||[],...e])}function fd(t,e,n){if(!t)return null;const r={...t,...t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(s=>({...s,...s.data&&{data:On(s.data,e,n)}}))},...t.user&&{user:On(t.user,e,n)},...t.contexts&&{contexts:On(t.contexts,e,n)},...t.extra&&{extra:On(t.extra,e,n)}};return t.contexts&&t.contexts.trace&&r.contexts&&(r.contexts.trace=t.contexts.trace,t.contexts.trace.data&&(r.contexts.trace.data=On(t.contexts.trace.data,e,n))),t.spans&&(r.spans=t.spans.map(s=>(s.data&&(s.data=On(s.data,e,n)),s))),r}const rc="Not capturing exception because it's already been captured.";class Zn{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}__init5(){this._hooks={}}constructor(e){if(Zn.prototype.__init.call(this),Zn.prototype.__init2.call(this),Zn.prototype.__init3.call(this),Zn.prototype.__init4.call(this),Zn.prototype.__init5.call(this),this._options=e,e.dsn?this._dsn=Hl(e.dsn):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("No DSN provided, client will not do anything."),this._dsn){const n=Xf(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:n})}}captureException(e,n,r){if(Wa(e)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log(rc);return}let s=n&&n.event_id;return this._process(this.eventFromException(e,n).then(i=>this._captureEvent(i,n,r)).then(i=>{s=i})),s}captureMessage(e,n,r,s){let i=r&&r.event_id;const o=qc(e)?this.eventFromMessage(String(e),n,r):this.eventFromException(e,r);return this._process(o.then(a=>this._captureEvent(a,r,s)).then(a=>{i=a})),i}captureEvent(e,n,r){if(n&&n.originalException&&Wa(n.originalException)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log(rc);return}let s=n&&n.event_id;return this._process(this._captureEvent(e,n,r).then(i=>{s=i})),s}captureSession(e){if(!this._isEnabled()){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("SDK not enabled, will not capture session.");return}typeof e.release!="string"?(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),Dr(e,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){const n=this._transport;return n?this._isClientDoneProcessing(e).then(r=>n.flush(e).then(s=>r&&s)):tr(!0)}close(e){return this.flush(e).then(n=>(this.getOptions().enabled=!1,n))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=sd(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}addIntegration(e){cu(e,this._integrations)}sendEvent(e,n={}){if(this._dsn){let r=td(e,this._dsn,this._options._metadata,this._options.tunnel);for(const i of n.attachments||[])r=Of(r,Rf(i,this._options.transportOptions&&this._options.transportOptions.textEncoder));const s=this._sendEnvelope(r);s&&s.then(i=>this.emit("afterSendEvent",e,i),null)}}sendSession(e){if(this._dsn){const n=ed(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(n)}}recordDroppedEvent(e,n,r){if(this._options.sendClientReports){const s=`${e}:${n}`;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log(`Adding outcome: "${s}"`),this._outcomes[s]=this._outcomes[s]+1||1}}on(e,n){this._hooks[e]||(this._hooks[e]=[]),this._hooks[e].push(n)}emit(e,...n){this._hooks[e]&&this._hooks[e].forEach(r=>r(...n))}_updateSessionFromEvent(e,n){let r=!1,s=!1;const i=n.exception&&n.exception.values;if(i){s=!0;for(const u of i){const c=u.mechanism;if(c&&c.handled===!1){r=!0;break}}}const o=e.status==="ok";(o&&e.errors===0||o&&r)&&(Dr(e,{...r&&{status:"crashed"},errors:e.errors||Number(s||r)}),this.captureSession(e))}_isClientDoneProcessing(e){return new kt(n=>{let r=0;const s=1,i=setInterval(()=>{this._numProcessing==0?(clearInterval(i),n(!0)):(r+=s,e&&r>=e&&(clearInterval(i),n(!1)))},s)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._dsn!==void 0}_prepareEvent(e,n,r){const s=this.getOptions(),i=Object.keys(this._integrations);return!n.integrations&&i.length>0&&(n.integrations=i),od(s,e,n,r)}_captureEvent(e,n={},r){return this._processEvent(e,n,r).then(s=>s.event_id,s=>{if(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__){const i=s;i.logLevel==="log"?pe.log(i.message):pe.warn(i)}})}_processEvent(e,n,r){const s=this.getOptions(),{sampleRate:i}=s;if(!this._isEnabled())return pi(new Xt("SDK not enabled, will not capture event.","log"));const o=lu(e),a=uu(e),u=e.type||"error",c=`before send for type \`${u}\``;if(a&&typeof i=="number"&&Math.random()>i)return this.recordDroppedEvent("sample_rate","error",e),pi(new Xt(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));const l=u==="replay_event"?"replay":u;return this._prepareEvent(e,n,r).then(d=>{if(d===null)throw this.recordDroppedEvent("event_processor",l,e),new Xt("An event processor returned `null`, will not send event.","log");if(n.data&&n.data.__sentry__===!0)return d;const g=hd(s,d,n);return dd(g,c)}).then(d=>{if(d===null)throw this.recordDroppedEvent("before_send",l,e),new Xt(`${c} returned \`null\`, will not send event.`,"log");const h=r&&r.getSession();!o&&h&&this._updateSessionFromEvent(h,d);const g=d.transaction_info;if(o&&g&&d.transaction!==e.transaction){const v="custom";d.transaction_info={...g,source:v}}return this.sendEvent(d,n),d}).then(null,d=>{throw d instanceof Xt?d:(this.captureException(d,{data:{__sentry__:!0},originalException:d}),new Xt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${d}`))})}_process(e){this._numProcessing++,e.then(n=>(this._numProcessing--,n),n=>(this._numProcessing--,n))}_sendEnvelope(e){if(this._transport&&this._dsn)return this.emit("beforeEnvelope",e),this._transport.send(e).then(null,n=>{(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.error("Error while sending event:",n)});(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.keys(e).map(n=>{const[r,s]=n.split(":");return{reason:r,category:s,quantity:e[n]}})}}function dd(t,e){const n=`${e} must return \`null\` or a valid event.`;if(la(t))return t.then(r=>{if(!jr(r)&&r!==null)throw new Xt(n);return r},r=>{throw new Xt(`${e} rejected with ${r}`)});if(!jr(t)&&t!==null)throw new Xt(n);return t}function hd(t,e,n){const{beforeSend:r,beforeSendTransaction:s}=t;return uu(e)&&r?r(e,n):lu(e)&&s?s(e,n):e}function uu(t){return t.type===void 0}function lu(t){return t.type==="transaction"}function pd(t,e){e.debug===!0&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?pe.enable():console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));const n=ct();n.getScope().update(e.initialScope);const s=new t(e);n.bindClient(s)}const md=30;function fu(t,e,n=Ef(t.bufferSize||md)){let r={};const s=o=>n.drain(o);function i(o){const a=[];if(Xa(o,(d,h)=>{const g=Qa(h);if(Bf(r,g)){const v=sc(d,h);t.recordDroppedEvent("ratelimit_backoff",g,v)}else a.push(d)}),a.length===0)return tr();const u=js(o[0],a),c=d=>{Xa(u,(h,g)=>{const v=sc(h,g);t.recordDroppedEvent(d,Qa(g),v)})},l=()=>e({body:Nf(u,t.textEncoder)}).then(d=>(d.statusCode!==void 0&&(d.statusCode<200||d.statusCode>=300)&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Sentry responded with status code ${d.statusCode} to sent event.`),r=Lf(r,d),d),d=>{throw c("network_error"),d});return n.add(l).then(d=>d,d=>{if(d instanceof Xt)return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.error("Skipped sending event because buffer is full."),c("queue_overflow"),tr();throw d})}return i.__sentry__baseTransport__=!0,{send:i,flush:s}}function sc(t,e){if(!(e!=="event"&&e!=="transaction"))return Array.isArray(t)?t[1]:void 0}const mi="7.57.0";let ic;class ds{constructor(){ds.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=ds.id}setupOnce(){ic=Function.prototype.toString;try{Function.prototype.toString=function(...e){const n=ha(this)||this;return ic.apply(n,e)}}catch{}}}ds.__initStatic();const yd=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],gd=[/^.*healthcheck.*$/,/^.*healthy.*$/,/^.*live.*$/,/^.*ready.*$/,/^.*heartbeat.*$/,/^.*\/health$/,/^.*\/healthz$/];class kr{static __initStatic(){this.id="InboundFilters"}__init(){this.name=kr.id}constructor(e={}){this._options=e,kr.prototype.__init.call(this)}setupOnce(e,n){const r=s=>{const i=n();if(i){const o=i.getIntegration(kr);if(o){const a=i.getClient(),u=a?a.getOptions():{},c=_d(o._options,u);return vd(s,c)?null:s}}return s};r.id=this.name,e(r)}}kr.__initStatic();function _d(t={},e={}){return{allowUrls:[...t.allowUrls||[],...e.allowUrls||[]],denyUrls:[...t.denyUrls||[],...e.denyUrls||[]],ignoreErrors:[...t.ignoreErrors||[],...e.ignoreErrors||[],...t.disableErrorDefaults?[]:yd],ignoreTransactions:[...t.ignoreTransactions||[],...e.ignoreTransactions||[],...t.disableTransactionDefaults?[]:gd],ignoreInternal:t.ignoreInternal!==void 0?t.ignoreInternal:!0}}function vd(t,e){return e.ignoreInternal&&xd(t)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Event dropped due to being internal Sentry Error.
Event: ${An(t)}`),!0):bd(t,e.ignoreErrors)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${An(t)}`),!0):wd(t,e.ignoreTransactions)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${An(t)}`),!0):Ed(t,e.denyUrls)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${An(t)}.
Url: ${yi(t)}`),!0):Sd(t,e.allowUrls)?!1:((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${An(t)}.
Url: ${yi(t)}`),!0)}function bd(t,e){return t.type||!e||!e.length?!1:kd(t).some(n=>qi(n,e))}function wd(t,e){if(t.type!=="transaction"||!e||!e.length)return!1;const n=t.transaction;return n?qi(n,e):!1}function Ed(t,e){if(!e||!e.length)return!1;const n=yi(t);return n?qi(n,e):!1}function Sd(t,e){if(!e||!e.length)return!0;const n=yi(t);return n?qi(n,e):!0}function kd(t){if(t.message)return[t.message];if(t.exception){const{values:e}=t.exception;try{const{type:n="",value:r=""}=e&&e[e.length-1]||{};return[`${r}`,`${n}: ${r}`]}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.error(`Cannot extract message for event ${An(t)}`),[]}}return[]}function xd(t){try{return t.exception.values[0].type==="SentryError"}catch{}return!1}function Td(t=[]){for(let e=t.length-1;e>=0;e--){const n=t[e];if(n&&n.filename!=="<anonymous>"&&n.filename!=="[native code]")return n.filename||null}return null}function yi(t){try{let e;try{e=t.exception.values[0].stacktrace.frames}catch{}return e?Td(e):null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.error(`Cannot extract url for event ${An(t)}`),null}}const Fe=Gt;let Ao=0;function du(){return Ao>0}function Od(){Ao++,setTimeout(()=>{Ao--})}function $r(t,e={},n){if(typeof t!="function")return t;try{const s=t.__sentry_wrapped__;if(s)return s;if(ha(t))return t}catch{return t}const r=function(){const s=Array.prototype.slice.call(arguments);try{n&&typeof n=="function"&&n.apply(this,arguments);const i=s.map(o=>$r(o,e));return t.apply(this,i)}catch(i){throw Od(),Vf(o=>{o.addEventProcessor(a=>(e.mechanism&&(ko(a,void 0,void 0),fs(a,e.mechanism)),a.extra={...a.extra,arguments:s},a)),Hf(i)}),i}};try{for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}catch{}Hc(r,t),da(t,"__sentry_wrapped__",r);try{Object.getOwnPropertyDescriptor(r,"name").configurable&&Object.defineProperty(r,"name",{get(){return t.name}})}catch{}return r}function hu(t,e){const n=ma(t,e),r={type:e&&e.name,value:Id(e)};return n.length&&(r.stacktrace={frames:n}),r.type===void 0&&r.value===""&&(r.value="Unrecoverable error caught"),r}function Nd(t,e,n,r){const i=ct().getClient(),o=i&&i.getOptions().normalizeDepth,a={exception:{values:[{type:Fi(e)?e.constructor.name:r?"UnhandledRejection":"Error",value:jd(e,{isUnhandledRejection:r})}]},extra:{__serialized__:Qc(e,o)}};if(n){const u=ma(t,n);u.length&&(a.exception.values[0].stacktrace={frames:u})}return a}function so(t,e){return{exception:{values:[hu(t,e)]}}}function ma(t,e){const n=e.stacktrace||e.stack||"",r=Rd(e);try{return t(n,r)}catch{}return[]}const Ad=/Minified React error #\d+;/i;function Rd(t){if(t){if(typeof t.framesToPop=="number")return t.framesToPop;if(Ad.test(t.message))return 1}return 0}function Id(t){const e=t&&t.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function Pd(t,e,n,r){const s=n&&n.syntheticException||void 0,i=ya(t,e,s,r);return fs(i),i.level="error",n&&n.event_id&&(i.event_id=n.event_id),tr(i)}function Cd(t,e,n="info",r,s){const i=r&&r.syntheticException||void 0,o=Ro(t,e,i,s);return o.level=n,r&&r.event_id&&(o.event_id=r.event_id),tr(o)}function ya(t,e,n,r,s){let i;if(ua(e)&&e.error)return so(t,e.error);if(Fa(e)||Pl(e)){const o=e;if("stack"in e)i=so(t,e);else{const a=o.name||(Fa(o)?"DOMError":"DOMException"),u=o.message?`${a}: ${o.message}`:a;i=Ro(t,u,n,r),ko(i,u)}return"code"in o&&(i.tags={...i.tags,"DOMException.code":`${o.code}`}),i}return Kc(e)?so(t,e):jr(e)||Fi(e)?(i=Nd(t,e,n,s),fs(i,{synthetic:!0}),i):(i=Ro(t,e,n,r),ko(i,`${e}`,void 0),fs(i,{synthetic:!0}),i)}function Ro(t,e,n,r){const s={message:e};if(r&&n){const i=ma(t,n);i.length&&(s.exception={values:[{value:e,stacktrace:{frames:i}}]})}return s}function jd(t,{isUnhandledRejection:e}){const n=zl(t),r=e?"promise rejection":"exception";return ua(t)?`Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``:Fi(t)?`Event \`${Dd(t)}\` (type=${t.type}) captured as ${r}`:`Object captured as ${r} with keys: ${n}`}function Dd(t){try{const e=Object.getPrototypeOf(t);return e?e.constructor.name:void 0}catch{}}const Ys=1024,pu="Breadcrumbs";class hs{static __initStatic(){this.id=pu}__init(){this.name=hs.id}constructor(e){hs.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){this.options.console&&Nn("console",Bd),this.options.dom&&Nn("dom",$d(this.options.dom)),this.options.xhr&&Nn("xhr",Ld),this.options.fetch&&Nn("fetch",Md),this.options.history&&Nn("history",Ud)}addSentryBreadcrumb(e){this.options.sentry&&ct().addBreadcrumb({category:`sentry.${e.type==="transaction"?"transaction":"event"}`,event_id:e.event_id,level:e.level,message:An(e)},{event:e})}}hs.__initStatic();function $d(t){function e(n){let r,s=typeof t=="object"?t.serializeAttribute:void 0,i=typeof t=="object"&&typeof t.maxStringLength=="number"?t.maxStringLength:void 0;i&&i>Ys&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn(`\`dom.maxStringLength\` cannot exceed ${Ys}, but a value of ${i} was configured. Sentry will use ${Ys} instead.`),i=Ys),typeof s=="string"&&(s=[s]);try{const o=n.event;r=Fd(o)?vo(o.target,{keyAttrs:s,maxStringLength:i}):vo(o,{keyAttrs:s,maxStringLength:i})}catch{r="<unknown>"}r.length!==0&&ct().addBreadcrumb({category:`ui.${n.name}`,message:r},{event:n.event,name:n.name,global:n.global})}return e}function Bd(t){for(let n=0;n<t.args.length;n++)if(t.args[n]==="ref=Ref<"){t.args[n+1]="viewRef";break}const e={category:"console",data:{arguments:t.args,logger:"console"},level:kf(t.level),message:qa(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)e.message=`Assertion failed: ${qa(t.args.slice(1)," ")||"console.assert"}`,e.data.arguments=t.args.slice(1);else return;ct().addBreadcrumb(e,{input:t.args,level:t.level})}function Ld(t){const{startTimestamp:e,endTimestamp:n}=t,r=t.xhr[Wr];if(!e||!n||!r)return;const{method:s,url:i,status_code:o,body:a}=r,u={method:s,url:i,status_code:o},c={xhr:t.xhr,input:a,startTimestamp:e,endTimestamp:n};ct().addBreadcrumb({category:"xhr",data:u,type:"http"},c)}function Md(t){const{startTimestamp:e,endTimestamp:n}=t;if(n&&!(t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"))if(t.error){const r=t.fetchData,s={data:t.error,input:t.args,startTimestamp:e,endTimestamp:n};ct().addBreadcrumb({category:"fetch",data:r,level:"error",type:"http"},s)}else{const r={...t.fetchData,status_code:t.response&&t.response.status},s={input:t.args,response:t.response,startTimestamp:e,endTimestamp:n};ct().addBreadcrumb({category:"fetch",data:r,type:"http"},s)}}function Ud(t){let e=t.from,n=t.to;const r=no(Fe.location.href);let s=no(e);const i=no(n);s.path||(s=r),r.protocol===i.protocol&&r.host===i.host&&(n=i.relative),r.protocol===s.protocol&&r.host===s.host&&(e=s.relative),ct().addBreadcrumb({category:"navigation",data:{from:e,to:n}})}function Fd(t){return!!t&&!!t.target}function Kd(t,{metadata:e,tunnel:n,dsn:r}){const s={event_id:t.event_id,sent_at:new Date().toISOString(),...e&&e.sdk&&{sdk:{name:e.sdk.name,version:e.sdk.version}},...!!n&&!!r&&{dsn:Ki(r)}},i=qd(t);return js(s,[i])}function qd(t){return[{type:"user_report"},t]}class Gd extends Zn{constructor(e){const n=Fe.SENTRY_SDK_SOURCE||mf();e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:`${n}:@sentry/browser`,version:mi}],version:mi},super(e),e.sendClientReports&&Fe.document&&Fe.document.addEventListener("visibilitychange",()=>{Fe.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(e,n){return Pd(this._options.stackParser,e,n,this._options.attachStacktrace)}eventFromMessage(e,n="info",r){return Cd(this._options.stackParser,e,n,r,this._options.attachStacktrace)}sendEvent(e,n){const r=this.getIntegrationById(pu);r&&r.addSentryBreadcrumb&&r.addSentryBreadcrumb(e),super.sendEvent(e,n)}captureUserFeedback(e){if(!this._isEnabled()){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("SDK not enabled, will not capture user feedback.");return}const n=Kd(e,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(n)}_prepareEvent(e,n,r){return e.platform=e.platform||"javascript",super._prepareEvent(e,n,r)}_flushOutcomes(){const e=this._clearOutcomes();if(e.length===0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log("No outcomes to send");return}if(!this._dsn){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log("No dsn provided, will not send outcomes");return}(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log("Sending outcomes:",e);const n=Cf(e,this._options.tunnel&&Ki(this._dsn));this._sendEnvelope(n)}}let Jr;function Yd(){if(Jr)return Jr;if(Eo(Fe.fetch))return Jr=Fe.fetch.bind(Fe);const t=Fe.document;let e=Fe.fetch;if(t&&typeof t.createElement=="function")try{const n=t.createElement("iframe");n.hidden=!0,t.head.appendChild(n);const r=n.contentWindow;r&&r.fetch&&(e=r.fetch),t.head.removeChild(n)}catch(n){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",n)}return Jr=e.bind(Fe)}function Hd(){Jr=void 0}function Vd(t,e=Yd()){let n=0,r=0;function s(i){const o=i.body.length;n+=o,r++;const a={body:i.body,method:"POST",referrerPolicy:"origin",headers:t.headers,keepalive:n<=6e4&&r<15,...t.fetchOptions};try{return e(t.url,a).then(u=>(n-=o,r--,{statusCode:u.status,headers:{"x-sentry-rate-limits":u.headers.get("X-Sentry-Rate-Limits"),"retry-after":u.headers.get("Retry-After")}}))}catch(u){return Hd(),n-=o,r--,pi(u)}}return fu(t,s)}const Zd=4;function zd(t){function e(n){return new kt((r,s)=>{const i=new XMLHttpRequest;i.onerror=s,i.onreadystatechange=()=>{i.readyState===Zd&&r({statusCode:i.status,headers:{"x-sentry-rate-limits":i.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":i.getResponseHeader("Retry-After")}})},i.open("POST",t.url);for(const o in t.headers)Object.prototype.hasOwnProperty.call(t.headers,o)&&i.setRequestHeader(o,t.headers[o]);i.send(n.body)})}return fu(t,e)}const Vi="?",Wd=30,Jd=40,Xd=50;function ga(t,e,n,r){const s={filename:t,function:e,in_app:!0};return n!==void 0&&(s.lineno=n),r!==void 0&&(s.colno=r),s}const Qd=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,eh=/\((\S*)(?::(\d+))(?::(\d+))\)/,th=t=>{const e=Qd.exec(t);if(e){if(e[2]&&e[2].indexOf("eval")===0){const i=eh.exec(e[2]);i&&(e[2]=i[1],e[3]=i[2],e[4]=i[3])}const[r,s]=mu(e[1]||Vi,e[2]);return ga(s,r,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},nh=[Wd,th],rh=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,sh=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,ih=t=>{const e=rh.exec(t);if(e){if(e[3]&&e[3].indexOf(" > eval")>-1){const i=sh.exec(e[3]);i&&(e[1]=e[1]||"eval",e[3]=i[1],e[4]=i[2],e[5]="")}let r=e[3],s=e[1]||Vi;return[s,r]=mu(s,r),ga(r,s,e[4]?+e[4]:void 0,e[5]?+e[5]:void 0)}},oh=[Xd,ih],ah=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,ch=t=>{const e=ah.exec(t);return e?ga(e[2],e[1]||Vi,+e[3],e[4]?+e[4]:void 0):void 0},uh=[Jd,ch],lh=[nh,oh,uh],fh=zc(...lh),mu=(t,e)=>{const n=t.indexOf("safari-extension")!==-1,r=t.indexOf("safari-web-extension")!==-1;return n||r?[t.indexOf("@")!==-1?t.split("@")[0]:Vi,n?`safari-extension:${e}`:`safari-web-extension:${e}`]:[t,e]};class Pn{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=Pn.id}__init2(){this._installFunc={onerror:dh,onunhandledrejection:hh}}constructor(e){Pn.prototype.__init.call(this),Pn.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;const e=this._options;for(const n in e){const r=this._installFunc[n];r&&e[n]&&(yh(n),r(),this._installFunc[n]=void 0)}}}Pn.__initStatic();function dh(){Nn("error",t=>{const[e,n,r]=_u();if(!e.getIntegration(Pn))return;const{msg:s,url:i,line:o,column:a,error:u}=t;if(du()||u&&u.__sentry_own_request__)return;const c=u===void 0&&er(s)?mh(s,i,o,a):yu(ya(n,u||s,void 0,r,!1),i,o,a);c.level="error",gu(e,u,c,"onerror")})}function hh(){Nn("unhandledrejection",t=>{const[e,n,r]=_u();if(!e.getIntegration(Pn))return;let s=t;try{"reason"in t?s=t.reason:"detail"in t&&"reason"in t.detail&&(s=t.detail.reason)}catch{}if(du()||s&&s.__sentry_own_request__)return!0;const i=qc(s)?ph(s):ya(n,s,void 0,r,!0);i.level="error",gu(e,s,i,"onunhandledrejection")})}function ph(t){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(t)}`}]}}}function mh(t,e,n,r){const s=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let i=ua(t)?t.message:t,o="Error";const a=i.match(s);return a&&(o=a[1],i=a[2]),yu({exception:{values:[{type:o,value:i}]}},e,n,r)}function yu(t,e,n,r){const s=t.exception=t.exception||{},i=s.values=s.values||[],o=i[0]=i[0]||{},a=o.stacktrace=o.stacktrace||{},u=a.frames=a.frames||[],c=isNaN(parseInt(r,10))?void 0:r,l=isNaN(parseInt(n,10))?void 0:n,d=er(e)&&e.length>0?e:Ml();return u.length===0&&u.push({colno:c,filename:d,function:"?",in_app:!0,lineno:l}),t}function yh(t){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.log(`Global Handler attached: ${t}`)}function gu(t,e,n,r){fs(n,{handled:!1,type:r}),t.captureEvent(n,{originalException:e})}function _u(){const t=ct(),e=t.getClient(),n=e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[t,n.stackParser,n.attachStacktrace]}const gh=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];class ps{static __initStatic(){this.id="TryCatch"}__init(){this.name=ps.id}constructor(e){ps.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&yt(Fe,"setTimeout",oc),this._options.setInterval&&yt(Fe,"setInterval",oc),this._options.requestAnimationFrame&&yt(Fe,"requestAnimationFrame",_h),this._options.XMLHttpRequest&&"XMLHttpRequest"in Fe&&yt(XMLHttpRequest.prototype,"send",vh);const e=this._options.eventTarget;e&&(Array.isArray(e)?e:gh).forEach(bh)}}ps.__initStatic();function oc(t){return function(...e){const n=e[0];return e[0]=$r(n,{mechanism:{data:{function:Dn(t)},handled:!0,type:"instrument"}}),t.apply(this,e)}}function _h(t){return function(e){return t.apply(this,[$r(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Dn(t)},handled:!0,type:"instrument"}})])}}function vh(t){return function(...e){const n=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(s=>{s in n&&typeof n[s]=="function"&&yt(n,s,function(i){const o={mechanism:{data:{function:s,handler:Dn(i)},handled:!0,type:"instrument"}},a=ha(i);return a&&(o.mechanism.data.handler=Dn(a)),$r(i,o)})}),t.apply(this,e)}}function bh(t){const e=Fe,n=e[t]&&e[t].prototype;!n||!n.hasOwnProperty||!n.hasOwnProperty("addEventListener")||(yt(n,"addEventListener",function(r){return function(s,i,o){try{typeof i.handleEvent=="function"&&(i.handleEvent=$r(i.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Dn(i),target:t},handled:!0,type:"instrument"}}))}catch{}return r.apply(this,[s,$r(i,{mechanism:{data:{function:"addEventListener",handler:Dn(i),target:t},handled:!0,type:"instrument"}}),o])}}),yt(n,"removeEventListener",function(r){return function(s,i,o){const a=i;try{const u=a&&a.__sentry_wrapped__;u&&r.call(this,s,u,o)}catch{}return r.call(this,s,a,o)}}))}const wh="cause",Eh=5;class xr{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=xr.id}constructor(e={}){xr.prototype.__init.call(this),this._key=e.key||wh,this._limit=e.limit||Eh}setupOnce(){const e=ct().getClient();e&&Yi((n,r)=>{const s=ct().getIntegration(xr);return s?Sh(e.getOptions().stackParser,s._key,s._limit,n,r):n})}}xr.__initStatic();function Sh(t,e,n,r,s){if(!r.exception||!r.exception.values||!s||!Kr(s.originalException,Error))return r;const i=vu(t,n,s.originalException,e);return r.exception.values=[...i,...r.exception.values],r}function vu(t,e,n,r,s=[]){if(!Kr(n[r],Error)||s.length+1>=e)return s;const i=hu(t,n[r]);return vu(t,e,n[r],r,[i,...s])}class Tr{constructor(){Tr.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=Tr.id}setupOnce(){Yi(e=>{if(ct().getIntegration(Tr)){if(!Fe.navigator&&!Fe.location&&!Fe.document)return e;const n=e.request&&e.request.url||Fe.location&&Fe.location.href,{referrer:r}=Fe.document||{},{userAgent:s}=Fe.navigator||{},i={...e.request&&e.request.headers,...r&&{Referer:r},...s&&{"User-Agent":s}},o={...e.request,...n&&{url:n},headers:i};return{...e,request:o}}return e})}}Tr.__initStatic();class Or{constructor(){Or.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=Or.id}setupOnce(e,n){const r=s=>{if(s.type)return s;const i=n().getIntegration(Or);if(i){try{if(kh(s,i._previousEvent))return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return i._previousEvent=s}return i._previousEvent=s}return s};r.id=this.name,e(r)}}Or.__initStatic();function kh(t,e){return e?!!(xh(t,e)||Th(t,e)):!1}function xh(t,e){const n=t.message,r=e.message;return!(!n&&!r||n&&!r||!n&&r||n!==r||!wu(t,e)||!bu(t,e))}function Th(t,e){const n=ac(e),r=ac(t);return!(!n||!r||n.type!==r.type||n.value!==r.value||!wu(t,e)||!bu(t,e))}function bu(t,e){let n=cc(t),r=cc(e);if(!n&&!r)return!0;if(n&&!r||!n&&r||(n=n,r=r,r.length!==n.length))return!1;for(let s=0;s<r.length;s++){const i=r[s],o=n[s];if(i.filename!==o.filename||i.lineno!==o.lineno||i.colno!==o.colno||i.function!==o.function)return!1}return!0}function wu(t,e){let n=t.fingerprint,r=e.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;n=n,r=r;try{return n.join("")===r.join("")}catch{return!1}}function ac(t){return t.exception&&t.exception.values&&t.exception.values[0]}function cc(t){const e=t.exception;if(e)try{return e.values[0].stacktrace.frames}catch{return}}const Oh=[new kr,new ds,new ps,new hs,new Pn,new xr,new Or,new Tr];function Nh(t={}){t.defaultIntegrations===void 0&&(t.defaultIntegrations=Oh),t.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(t.release=__SENTRY_RELEASE__),Fe.SENTRY_RELEASE&&Fe.SENTRY_RELEASE.id&&(t.release=Fe.SENTRY_RELEASE.id)),t.autoSessionTracking===void 0&&(t.autoSessionTracking=!0),t.sendClientReports===void 0&&(t.sendClientReports=!0);const e={...t,stackParser:Wl(t.stackParser||fh),integrations:rd(t),transport:t.transport||(Wc()?Vd:zd)};pd(Gd,e),t.autoSessionTracking&&Ah()}function uc(t){t.startSession({ignoreDuration:!0}),t.captureSession()}function Ah(){if(typeof Fe.document>"u"){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&pe.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}const t=ct();t.captureSession&&(uc(t),Nn("history",({from:e,to:n})=>{e===void 0||e===n||uc(ct())}))}function Rh(t){t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.svelte",packages:[{name:"npm:@sentry/svelte",version:mi}],version:mi},Nh(t),Ih()}function Ih(){let t;const e=n=>(t===void 0&&(t=Ph()),t&&(n.modules={svelteKit:"latest",...n.modules}),n);e.id="svelteKitProcessor",Yi(e)}function Ph(){return Ul("div#svelte-announcer")!==null}function Ne(){}const Eu=t=>t;function Su(t){return t()}function lc(){return Object.create(null)}function Gn(t){t.forEach(Su)}function Zi(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Hs;function Ch(t,e){return Hs||(Hs=document.createElement("a")),Hs.href=e,t===Hs.href}function jh(t){return Object.keys(t).length===0}function _a(t,...e){if(t==null)return Ne;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dh(t){let e;return _a(t,n=>e=n)(),e}function et(t,e,n){t.$$.on_destroy.push(_a(e,n))}const ku=typeof window<"u";let $h=ku?()=>window.performance.now():()=>Date.now(),va=ku?t=>requestAnimationFrame(t):Ne;const Nr=new Set;function xu(t){Nr.forEach(e=>{e.c(t)||(Nr.delete(e),e.f())}),Nr.size!==0&&va(xu)}function Bh(t){let e;return Nr.size===0&&va(xu),{promise:new Promise(n=>{Nr.add(e={c:t,f:n})}),abort(){Nr.delete(e)}}}function me(t,e){t.appendChild(e)}function Tu(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lh(t){const e=ze("style");return Mh(Tu(t),e),e.sheet}function Mh(t,e){return me(t.head||t,e),e.sheet}function Ge(t,e,n){t.insertBefore(e,n||null)}function Pe(t){t.parentNode&&t.parentNode.removeChild(t)}function ze(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function cr(t){return document.createTextNode(t)}function Qe(){return cr(" ")}function gi(){return cr("")}function Cn(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Uh(t){return function(e){return e.preventDefault(),t.call(this,e)}}function U(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fh(t){return Array.from(t.childNodes)}function Ou(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function st(t,e,n){t.classList[n?"add":"remove"](e)}function Kh(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const _i=new Map;let vi=0;function qh(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gh(t,e){const n={stylesheet:Lh(e),rules:{}};return _i.set(t,n),n}function Yh(t,e,n,r,s,i,o,a=0){const u=16.666/r;let c=`{
`;for(let x=0;x<=1;x+=u){const E=e+(n-e)*i(x);c+=x*100+`%{${o(E,1-E)}}
`}const l=c+`100% {${o(n,1-n)}}
}`,d=`__svelte_${qh(l)}_${a}`,h=Tu(t),{stylesheet:g,rules:v}=_i.get(h)||Gh(h,t);v[d]||(v[d]=!0,g.insertRule(`@keyframes ${d} ${l}`,g.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${d} ${r}ms linear ${s}ms 1 both`,vi+=1,d}function Hh(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),vi-=s,vi||Vh())}function Vh(){va(()=>{vi||(_i.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Pe(e)}),_i.clear())})}let ms;function ss(t){ms=t}function Nu(){if(!ms)throw new Error("Function called outside component initialization");return ms}function Yn(t){Nu().$$.on_mount.push(t)}function ln(t){Nu().$$.on_destroy.push(t)}function Zh(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const yr=[],Io=[];let Ar=[];const fc=[],zh=Promise.resolve();let Po=!1;function Wh(){Po||(Po=!0,zh.then(Au))}function bi(t){Ar.push(t)}const io=new Set;let dr=0;function Au(){if(dr!==0)return;const t=ms;do{try{for(;dr<yr.length;){const e=yr[dr];dr++,ss(e),Jh(e.$$)}}catch(e){throw yr.length=0,dr=0,e}for(ss(null),yr.length=0,dr=0;Io.length;)Io.pop()();for(let e=0;e<Ar.length;e+=1){const n=Ar[e];io.has(n)||(io.add(n),n())}Ar.length=0}while(yr.length);for(;fc.length;)fc.pop()();Po=!1,io.clear(),ss(t)}function Jh(t){if(t.fragment!==null){t.update(),Gn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(bi)}}function Xh(t){const e=[],n=[];Ar.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Ar=e}let Zr;function Qh(){return Zr||(Zr=Promise.resolve(),Zr.then(()=>{Zr=null})),Zr}function dc(t,e,n){t.dispatchEvent(Kh(`${e?"intro":"outro"}${n}`))}const ri=new Set;let In;function ba(){In={r:0,c:[],p:In}}function wa(){In.r||Gn(In.c),In=In.p}function Re(t,e){t&&t.i&&(ri.delete(t),t.i(e))}function Ue(t,e,n,r){if(t&&t.o){if(ri.has(t))return;ri.add(t),In.c.push(()=>{ri.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ep={duration:0};function tp(t,e,n){const r={direction:"out"};let s=e(t,n,r),i=!0,o;const a=In;a.r+=1;function u(){const{delay:c=0,duration:l=300,easing:d=Eu,tick:h=Ne,css:g}=s||ep;g&&(o=Yh(t,1,0,l,c,d,g));const v=$h()+c,b=v+l;bi(()=>dc(t,!1,"start")),Bh(x=>{if(i){if(x>=b)return h(0,1),dc(t,!1,"end"),--a.r||Gn(a.c),!1;if(x>=v){const E=d((x-v)/l);h(1-E,E)}}return i})}return Zi(s)?Qh().then(()=>{s=s(r),u()}):u(),{end(c){c&&s.tick&&s.tick(1,0),i&&(o&&Hh(t,o),i=!1)}}}const np=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function pt(t){t&&t.c()}function it(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||bi(()=>{const o=t.$$.on_mount.map(Su).filter(Zi);t.$$.on_destroy?t.$$.on_destroy.push(...o):Gn(o),t.$$.on_mount=[]}),i.forEach(bi)}function ot(t,e){const n=t.$$;n.fragment!==null&&(Xh(n.after_update),Gn(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rp(t,e){t.$$.dirty[0]===-1&&(yr.push(t),Wh(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(t,e,n,r,s,i,o,a=[-1]){const u=ms;ss(t);const c=t.$$={fragment:null,ctx:[],props:i,update:Ne,not_equal:s,bound:lc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:lc(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let l=!1;if(c.ctx=n?n(t,e.props||{},(d,h,...g)=>{const v=g.length?g[0]:h;return c.ctx&&s(c.ctx[d],c.ctx[d]=v)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](v),l&&rp(t,d)),h}):[],c.update(),l=!0,Gn(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=Fh(e.target);c.fragment&&c.fragment.l(d),d.forEach(Pe)}else c.fragment&&c.fragment.c();e.intro&&Re(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),Au()}ss(u)}class lt{$destroy(){ot(this,1),this.$destroy=Ne}$on(e,n){if(!Zi(n))return Ne;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!jh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function sp({userAgent:t}){return t.includes("OPX")}const hr=[];function qr(t,e){return{subscribe:Gr(t,e).subscribe}}function Gr(t,e=Ne){let n;const r=new Set;function s(a){if(rt(t,a)&&(t=a,n)){const u=!hr.length;for(const c of r)c[1](),hr.push(c,t);if(u){for(let c=0;c<hr.length;c+=2)hr[c][0](hr[c+1]);hr.length=0}}}function i(a){s(a(t))}function o(a,u=Ne){const c=[a,u];return r.add(c),r.size===1&&(n=e(s)||Ne),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function Ht(t,e,n){const r=!Array.isArray(t),s=r?[t]:t,i=e.length<2;return qr(n,o=>{let a=!1;const u=[];let c=0,l=Ne;const d=()=>{if(c)return;l();const g=e(r?u[0]:u,o);i?o(g):l=Zi(g)?g:Ne},h=s.map((g,v)=>_a(g,b=>{u[v]=b,c&=~(1<<v),a&&d()},()=>{c|=1<<v}));return a=!0,d(),function(){Gn(h),l(),a=!1}})}const ip=async()=>{if("serviceWorker"in navigator)return["localhost:","127.0.0.1:"].some(t=>location.origin.includes(t))?await navigator.serviceWorker.register("/sw.js",{scope:"/",type:"classic"}).catch(t=>{console.error("Failed to register service worked: ",t),ys.set(!0)}):await navigator.serviceWorker.register(`${location.pathname.split("/").slice(0,-1).join("/")}/sw.js`,{scope:"/",type:"classic"}).catch(t=>{console.error("Failed to register service worked: ",t),ys.set(!0)})},op=async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.getRegistration().then(async t=>{t&&await t.unregister(),ys.set(!0)}).catch(t=>{console.error("Failed to unregister service worked: ",t),ys.set(!0)})},ys=Gr(!1,t=>{if(!("serviceWorker"in navigator)){t(!0);return}navigator.serviceWorker.ready.then(()=>{t(!0)})}),is=()=>{var t;return((t=navigator.userAgentData)==null?void 0:t.mobile)||/Android|iPhone|iPod|iPad/i.test(navigator.userAgent)},ap=()=>{var t,e,n;return!!((n=(e=(t=navigator.userAgentData)==null?void 0:t.brands)==null?void 0:e.find(r=>r.brand==="Opera"))!=null&&n.version)},cp=()=>!!window.chrome,up=()=>navigator.userAgent.includes("Firefox");var Oe;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function n(s){throw new Error}t.assertNever=n,t.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},t.getValidEnumValues=s=>{const i=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),o={};for(const a of i)o[a]=s[a];return t.objectValues(o)},t.objectValues=s=>t.objectKeys(s).map(function(i){return s[i]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},t.find=(s,i)=>{for(const o of s)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(Oe||(Oe={}));var Co;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Co||(Co={}));const H=Oe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Rn=t=>{switch(typeof t){case"undefined":return H.undefined;case"string":return H.string;case"number":return isNaN(t)?H.nan:H.number;case"boolean":return H.boolean;case"function":return H.function;case"bigint":return H.bigint;case"symbol":return H.symbol;case"object":return Array.isArray(t)?H.array:t===null?H.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?H.promise:typeof Map<"u"&&t instanceof Map?H.map:typeof Set<"u"&&t instanceof Set?H.set:typeof Date<"u"&&t instanceof Date?H.date:H.object;default:return H.unknown}},M=Oe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),lp=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class nn extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let a=r,u=0;for(;u<o.path.length;){const c=o.path[u];u===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(o))):a[c]=a[c]||{_errors:[]},a=a[c],u++}}};return s(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Oe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}nn.create=t=>new nn(t);const gs=(t,e)=>{let n;switch(t.code){case M.invalid_type:t.received===H.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case M.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Oe.jsonStringifyReplacer)}`;break;case M.unrecognized_keys:n=`Unrecognized key(s) in object: ${Oe.joinValues(t.keys,", ")}`;break;case M.invalid_union:n="Invalid input";break;case M.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Oe.joinValues(t.options)}`;break;case M.invalid_enum_value:n=`Invalid enum value. Expected ${Oe.joinValues(t.options)}, received '${t.received}'`;break;case M.invalid_arguments:n="Invalid function arguments";break;case M.invalid_return_type:n="Invalid function return type";break;case M.invalid_date:n="Invalid date";break;case M.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Oe.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case M.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case M.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case M.custom:n="Invalid input";break;case M.invalid_intersection_types:n="Intersection results could not be merged";break;case M.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case M.not_finite:n="Number must be finite";break;default:n=e.defaultError,Oe.assertNever(t)}return{message:n}};let Ru=gs;function fp(t){Ru=t}function wi(){return Ru}const Ei=t=>{const{data:e,path:n,errorMaps:r,issueData:s}=t,i=[...n,...s.path||[]],o={...s,path:i};let a="";const u=r.filter(c=>!!c).slice().reverse();for(const c of u)a=c(o,{data:e,defaultError:a}).message;return{...s,path:i,message:s.message||a}},dp=[];function V(t,e){const n=Ei({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,wi(),gs].filter(r=>!!r)});t.common.issues.push(n)}class vt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const s of n){if(s.status==="aborted")return de;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const s of n)r.push({key:await s.key,value:await s.value});return vt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const s of n){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return de;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||s.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}}const de=Object.freeze({status:"aborted"}),Iu=t=>({status:"dirty",value:t}),xt=t=>({status:"valid",value:t}),jo=t=>t.status==="aborted",Do=t=>t.status==="dirty",Si=t=>t.status==="valid",ki=t=>typeof Promise<"u"&&t instanceof Promise;var re;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(re||(re={}));class an{constructor(e,n,r,s){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const hc=(t,e)=>{if(Si(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new nn(t.common.issues);return this._error=n,this._error}}};function _e(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:s}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:s}}class ve{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Rn(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Rn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new vt,ctx:{common:e.parent.common,data:e.data,parsedType:Rn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(ki(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const s={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Rn(e)},i=this._parseSync({data:e,path:s.path,parent:s});return hc(s,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Rn(e)},s=this._parse({data:e,path:r.path,parent:r}),i=await(ki(s)?s:Promise.resolve(s));return hc(r,i)}refine(e,n){const r=s=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(s):n;return this._refinement((s,i)=>{const o=e(s),a=()=>i.addIssue({code:M.custom,...r(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(u=>u?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof n=="function"?n(r,s):n),!1))}_refinement(e){return new sn({schema:this,typeName:le.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return gn.create(this,this._def)}nullable(){return sr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return rn.create(this,this._def)}promise(){return Lr.create(this,this._def)}or(e){return ws.create([this,e],this._def)}and(e){return Es.create(this,e,this._def)}transform(e){return new sn({..._e(this._def),schema:this,typeName:le.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Os({..._e(this._def),innerType:this,defaultValue:n,typeName:le.ZodDefault})}brand(){return new Cu({typeName:le.ZodBranded,type:this,..._e(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Ni({..._e(this._def),innerType:this,catchValue:n,typeName:le.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Ds.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const hp=/^c[^\s-]{8,}$/i,pp=/^[a-z][a-z0-9]*$/,mp=/[0-9A-HJKMNP-TV-Z]{26}/,yp=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,gp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,_p=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,vp=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,bp=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,wp=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Ep(t,e){return!!((e==="v4"||!e)&&vp.test(t)||(e==="v6"||!e)&&bp.test(t))}class Qt extends ve{constructor(){super(...arguments),this._regex=(e,n,r)=>this.refinement(s=>e.test(s),{validation:n,code:M.invalid_string,...re.errToObj(r)}),this.nonempty=e=>this.min(1,re.errToObj(e)),this.trim=()=>new Qt({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Qt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Qt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==H.string){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:H.string,received:i.parsedType}),de}const r=new vt;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(s=this._getOrReturnCtx(e,s),o?V(s,{code:M.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&V(s,{code:M.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")gp.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"email",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")_p.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"emoji",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")yp.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"uuid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")hp.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cuid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")pp.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cuid2",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")mp.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"ulid",code:M.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),V(s,{validation:"url",code:M.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"regex",code:M.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?wp(i).test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:M.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?Ep(e.data,i.version)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"ip",code:M.invalid_string,message:i.message}),r.dirty()):Oe.assertNever(i);return{status:r.value,value:e.data}}_addCheck(e){return new Qt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...re.errToObj(e)})}url(e){return this._addCheck({kind:"url",...re.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...re.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...re.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...re.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...re.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...re.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...re.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...re.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...re.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...re.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...re.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...re.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...re.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...re.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...re.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Qt.create=t=>{var e;return new Qt({checks:[],typeName:le.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,..._e(t)})};function Sp(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=n>r?n:r,i=parseInt(t.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}class $n extends ve{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==H.number){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:H.number,received:i.parsedType}),de}let r;const s=new vt;for(const i of this._def.checks)i.kind==="int"?Oe.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:M.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?Sp(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:M.not_finite,message:i.message}),s.dirty()):Oe.assertNever(i);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,re.toString(n))}gt(e,n){return this.setLimit("min",e,!1,re.toString(n))}lte(e,n){return this.setLimit("max",e,!0,re.toString(n))}lt(e,n){return this.setLimit("max",e,!1,re.toString(n))}setLimit(e,n,r,s){return new $n({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:re.toString(s)}]})}_addCheck(e){return new $n({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:re.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:re.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:re.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:re.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:re.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:re.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:re.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:re.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:re.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Oe.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}$n.create=t=>new $n({checks:[],typeName:le.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,..._e(t)});class Bn extends ve{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==H.bigint){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:H.bigint,received:i.parsedType}),de}let r;const s=new vt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),V(r,{code:M.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):Oe.assertNever(i);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,re.toString(n))}gt(e,n){return this.setLimit("min",e,!1,re.toString(n))}lte(e,n){return this.setLimit("max",e,!0,re.toString(n))}lt(e,n){return this.setLimit("max",e,!1,re.toString(n))}setLimit(e,n,r,s){return new Bn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:re.toString(s)}]})}_addCheck(e){return new Bn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:re.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:re.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:re.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:re.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:re.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Bn.create=t=>{var e;return new Bn({checks:[],typeName:le.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,..._e(t)})};class _s extends ve{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==H.boolean){const r=this._getOrReturnCtx(e);return V(r,{code:M.invalid_type,expected:H.boolean,received:r.parsedType}),de}return xt(e.data)}}_s.create=t=>new _s({typeName:le.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,..._e(t)});class nr extends ve{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==H.date){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_type,expected:H.date,received:i.parsedType}),de}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return V(i,{code:M.invalid_date}),de}const r=new vt;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:M.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Oe.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new nr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:re.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:re.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}nr.create=t=>new nr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:le.ZodDate,..._e(t)});class xi extends ve{_parse(e){if(this._getType(e)!==H.symbol){const r=this._getOrReturnCtx(e);return V(r,{code:M.invalid_type,expected:H.symbol,received:r.parsedType}),de}return xt(e.data)}}xi.create=t=>new xi({typeName:le.ZodSymbol,..._e(t)});class vs extends ve{_parse(e){if(this._getType(e)!==H.undefined){const r=this._getOrReturnCtx(e);return V(r,{code:M.invalid_type,expected:H.undefined,received:r.parsedType}),de}return xt(e.data)}}vs.create=t=>new vs({typeName:le.ZodUndefined,..._e(t)});class bs extends ve{_parse(e){if(this._getType(e)!==H.null){const r=this._getOrReturnCtx(e);return V(r,{code:M.invalid_type,expected:H.null,received:r.parsedType}),de}return xt(e.data)}}bs.create=t=>new bs({typeName:le.ZodNull,..._e(t)});class Br extends ve{constructor(){super(...arguments),this._any=!0}_parse(e){return xt(e.data)}}Br.create=t=>new Br({typeName:le.ZodAny,..._e(t)});class Jn extends ve{constructor(){super(...arguments),this._unknown=!0}_parse(e){return xt(e.data)}}Jn.create=t=>new Jn({typeName:le.ZodUnknown,..._e(t)});class bn extends ve{_parse(e){const n=this._getOrReturnCtx(e);return V(n,{code:M.invalid_type,expected:H.never,received:n.parsedType}),de}}bn.create=t=>new bn({typeName:le.ZodNever,..._e(t)});class Ti extends ve{_parse(e){if(this._getType(e)!==H.undefined){const r=this._getOrReturnCtx(e);return V(r,{code:M.invalid_type,expected:H.void,received:r.parsedType}),de}return xt(e.data)}}Ti.create=t=>new Ti({typeName:le.ZodVoid,..._e(t)});class rn extends ve{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),s=this._def;if(n.parsedType!==H.array)return V(n,{code:M.invalid_type,expected:H.array,received:n.parsedType}),de;if(s.exactLength!==null){const o=n.data.length>s.exactLength.value,a=n.data.length<s.exactLength.value;(o||a)&&(V(n,{code:o?M.too_big:M.too_small,minimum:a?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(V(n,{code:M.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(V(n,{code:M.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>s.type._parseAsync(new an(n,o,n.path,a)))).then(o=>vt.mergeArray(r,o));const i=[...n.data].map((o,a)=>s.type._parseSync(new an(n,o,n.path,a)));return vt.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new rn({...this._def,minLength:{value:e,message:re.toString(n)}})}max(e,n){return new rn({...this._def,maxLength:{value:e,message:re.toString(n)}})}length(e,n){return new rn({...this._def,exactLength:{value:e,message:re.toString(n)}})}nonempty(e){return this.min(1,e)}}rn.create=(t,e)=>new rn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:le.ZodArray,..._e(e)});function gr(t){if(t instanceof Ze){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=gn.create(gr(r))}return new Ze({...t._def,shape:()=>e})}else return t instanceof rn?new rn({...t._def,type:gr(t.element)}):t instanceof gn?gn.create(gr(t.unwrap())):t instanceof sr?sr.create(gr(t.unwrap())):t instanceof cn?cn.create(t.items.map(e=>gr(e))):t}class Ze extends ve{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Oe.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==H.object){const c=this._getOrReturnCtx(e);return V(c,{code:M.invalid_type,expected:H.object,received:c.parsedType}),de}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof bn&&this._def.unknownKeys==="strip"))for(const c in s.data)o.includes(c)||a.push(c);const u=[];for(const c of o){const l=i[c],d=s.data[c];u.push({key:{status:"valid",value:c},value:l._parse(new an(s,d,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof bn){const c=this._def.unknownKeys;if(c==="passthrough")for(const l of a)u.push({key:{status:"valid",value:l},value:{status:"valid",value:s.data[l]}});else if(c==="strict")a.length>0&&(V(s,{code:M.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const l of a){const d=s.data[l];u.push({key:{status:"valid",value:l},value:c._parse(new an(s,d,s.path,l)),alwaysSet:l in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const c=[];for(const l of u){const d=await l.key;c.push({key:d,value:await l.value,alwaysSet:l.alwaysSet})}return c}).then(c=>vt.mergeObjectSync(r,c)):vt.mergeObjectSync(r,u)}get shape(){return this._def.shape()}strict(e){return re.errToObj,new Ze({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var s,i,o,a;const u=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=re.errToObj(e).message)!==null&&a!==void 0?a:u}:{message:u}}}:{}})}strip(){return new Ze({...this._def,unknownKeys:"strip"})}passthrough(){return new Ze({...this._def,unknownKeys:"passthrough"})}extend(e){return new Ze({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Ze({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:le.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Ze({...this._def,catchall:e})}pick(e){const n={};return Oe.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Ze({...this._def,shape:()=>n})}omit(e){const n={};return Oe.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new Ze({...this._def,shape:()=>n})}deepPartial(){return gr(this)}partial(e){const n={};return Oe.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?n[r]=s:n[r]=s.optional()}),new Ze({...this._def,shape:()=>n})}required(e){const n={};return Oe.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof gn;)i=i._def.innerType;n[r]=i}}),new Ze({...this._def,shape:()=>n})}keyof(){return Pu(Oe.objectKeys(this.shape))}}Ze.create=(t,e)=>new Ze({shape:()=>t,unknownKeys:"strip",catchall:bn.create(),typeName:le.ZodObject,..._e(e)});Ze.strictCreate=(t,e)=>new Ze({shape:()=>t,unknownKeys:"strict",catchall:bn.create(),typeName:le.ZodObject,..._e(e)});Ze.lazycreate=(t,e)=>new Ze({shape:t,unknownKeys:"strip",catchall:bn.create(),typeName:le.ZodObject,..._e(e)});class ws extends ve{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function s(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new nn(a.ctx.common.issues));return V(n,{code:M.invalid_union,unionErrors:o}),de}if(n.common.async)return Promise.all(r.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(s);{let i;const o=[];for(const u of r){const c={...n,common:{...n.common,issues:[]},parent:null},l=u._parseSync({data:n.data,path:n.path,parent:c});if(l.status==="valid")return l;l.status==="dirty"&&!i&&(i={result:l,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(u=>new nn(u));return V(n,{code:M.invalid_union,unionErrors:a}),de}}get options(){return this._def.options}}ws.create=(t,e)=>new ws({options:t,typeName:le.ZodUnion,..._e(e)});const si=t=>t instanceof ks?si(t.schema):t instanceof sn?si(t.innerType()):t instanceof xs?[t.value]:t instanceof Ln?t.options:t instanceof Ts?Object.keys(t.enum):t instanceof Os?si(t._def.innerType):t instanceof vs?[void 0]:t instanceof bs?[null]:null;class zi extends ve{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.object)return V(n,{code:M.invalid_type,expected:H.object,received:n.parsedType}),de;const r=this.discriminator,s=n.data[r],i=this.optionsMap.get(s);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(V(n,{code:M.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),de)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const s=new Map;for(const i of n){const o=si(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,i)}}return new zi({typeName:le.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:s,..._e(r)})}}function $o(t,e){const n=Rn(t),r=Rn(e);if(t===e)return{valid:!0,data:t};if(n===H.object&&r===H.object){const s=Oe.objectKeys(e),i=Oe.objectKeys(t).filter(a=>s.indexOf(a)!==-1),o={...t,...e};for(const a of i){const u=$o(t[a],e[a]);if(!u.valid)return{valid:!1};o[a]=u.data}return{valid:!0,data:o}}else if(n===H.array&&r===H.array){if(t.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],u=$o(o,a);if(!u.valid)return{valid:!1};s.push(u.data)}return{valid:!0,data:s}}else return n===H.date&&r===H.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Es extends ve{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),s=(i,o)=>{if(jo(i)||jo(o))return de;const a=$o(i.value,o.value);return a.valid?((Do(i)||Do(o))&&n.dirty(),{status:n.value,value:a.data}):(V(r,{code:M.invalid_intersection_types}),de)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>s(i,o)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Es.create=(t,e,n)=>new Es({left:t,right:e,typeName:le.ZodIntersection,..._e(n)});class cn extends ve{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.array)return V(r,{code:M.invalid_type,expected:H.array,received:r.parsedType}),de;if(r.data.length<this._def.items.length)return V(r,{code:M.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),de;!this._def.rest&&r.data.length>this._def.items.length&&(V(r,{code:M.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((o,a)=>{const u=this._def.items[a]||this._def.rest;return u?u._parse(new an(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>vt.mergeArray(n,o)):vt.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new cn({...this._def,rest:e})}}cn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new cn({items:t,typeName:le.ZodTuple,rest:null,..._e(e)})};class Ss extends ve{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.object)return V(r,{code:M.invalid_type,expected:H.object,received:r.parsedType}),de;const s=[],i=this._def.keyType,o=this._def.valueType;for(const a in r.data)s.push({key:i._parse(new an(r,a,r.path,a)),value:o._parse(new an(r,r.data[a],r.path,a))});return r.common.async?vt.mergeObjectAsync(n,s):vt.mergeObjectSync(n,s)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof ve?new Ss({keyType:e,valueType:n,typeName:le.ZodRecord,..._e(r)}):new Ss({keyType:Qt.create(),valueType:e,typeName:le.ZodRecord,..._e(n)})}}class Oi extends ve{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.map)return V(r,{code:M.invalid_type,expected:H.map,received:r.parsedType}),de;const s=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([a,u],c)=>({key:s._parse(new an(r,a,r.path,[c,"key"])),value:i._parse(new an(r,u,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const u of o){const c=await u.key,l=await u.value;if(c.status==="aborted"||l.status==="aborted")return de;(c.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(c.value,l.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const u of o){const c=u.key,l=u.value;if(c.status==="aborted"||l.status==="aborted")return de;(c.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(c.value,l.value)}return{status:n.value,value:a}}}}Oi.create=(t,e,n)=>new Oi({valueType:e,keyType:t,typeName:le.ZodMap,..._e(n)});class rr extends ve{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.set)return V(r,{code:M.invalid_type,expected:H.set,received:r.parsedType}),de;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(V(r,{code:M.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(V(r,{code:M.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());const i=this._def.valueType;function o(u){const c=new Set;for(const l of u){if(l.status==="aborted")return de;l.status==="dirty"&&n.dirty(),c.add(l.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((u,c)=>i._parse(new an(r,u,r.path,c)));return r.common.async?Promise.all(a).then(u=>o(u)):o(a)}min(e,n){return new rr({...this._def,minSize:{value:e,message:re.toString(n)}})}max(e,n){return new rr({...this._def,maxSize:{value:e,message:re.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}rr.create=(t,e)=>new rr({valueType:t,minSize:null,maxSize:null,typeName:le.ZodSet,..._e(e)});class Rr extends ve{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.function)return V(n,{code:M.invalid_type,expected:H.function,received:n.parsedType}),de;function r(a,u){return Ei({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,wi(),gs].filter(c=>!!c),issueData:{code:M.invalid_arguments,argumentsError:u}})}function s(a,u){return Ei({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,wi(),gs].filter(c=>!!c),issueData:{code:M.invalid_return_type,returnTypeError:u}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof Lr?xt(async(...a)=>{const u=new nn([]),c=await this._def.args.parseAsync(a,i).catch(h=>{throw u.addIssue(r(a,h)),u}),l=await o(...c);return await this._def.returns._def.type.parseAsync(l,i).catch(h=>{throw u.addIssue(s(l,h)),u})}):xt((...a)=>{const u=this._def.args.safeParse(a,i);if(!u.success)throw new nn([r(a,u.error)]);const c=o(...u.data),l=this._def.returns.safeParse(c,i);if(!l.success)throw new nn([s(c,l.error)]);return l.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Rr({...this._def,args:cn.create(e).rest(Jn.create())})}returns(e){return new Rr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Rr({args:e||cn.create([]).rest(Jn.create()),returns:n||Jn.create(),typeName:le.ZodFunction,..._e(r)})}}class ks extends ve{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ks.create=(t,e)=>new ks({getter:t,typeName:le.ZodLazy,..._e(e)});class xs extends ve{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return V(n,{received:n.data,code:M.invalid_literal,expected:this._def.value}),de}return{status:"valid",value:e.data}}get value(){return this._def.value}}xs.create=(t,e)=>new xs({value:t,typeName:le.ZodLiteral,..._e(e)});function Pu(t,e){return new Ln({values:t,typeName:le.ZodEnum,..._e(e)})}class Ln extends ve{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return V(n,{expected:Oe.joinValues(r),received:n.parsedType,code:M.invalid_type}),de}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return V(n,{received:n.data,code:M.invalid_enum_value,options:r}),de}return xt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Ln.create(e)}exclude(e){return Ln.create(this.options.filter(n=>!e.includes(n)))}}Ln.create=Pu;class Ts extends ve{_parse(e){const n=Oe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==H.string&&r.parsedType!==H.number){const s=Oe.objectValues(n);return V(r,{expected:Oe.joinValues(s),received:r.parsedType,code:M.invalid_type}),de}if(n.indexOf(e.data)===-1){const s=Oe.objectValues(n);return V(r,{received:r.data,code:M.invalid_enum_value,options:s}),de}return xt(e.data)}get enum(){return this._def.values}}Ts.create=(t,e)=>new Ts({values:t,typeName:le.ZodNativeEnum,..._e(e)});class Lr extends ve{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.promise&&n.common.async===!1)return V(n,{code:M.invalid_type,expected:H.promise,received:n.parsedType}),de;const r=n.parsedType===H.promise?n.data:Promise.resolve(n.data);return xt(r.then(s=>this._def.type.parseAsync(s,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Lr.create=(t,e)=>new Lr({type:t,typeName:le.ZodPromise,..._e(e)});class sn extends ve{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===le.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),s=this._def.effect||null;if(s.type==="preprocess"){const o=s.transform(r.data);return r.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}const i={addIssue:o=>{V(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="refinement"){const o=a=>{const u=s.refinement(a,i);if(r.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?de:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?de:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(s.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Si(o))return o;const a=s.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Si(o)?Promise.resolve(s.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);Oe.assertNever(s)}}sn.create=(t,e,n)=>new sn({schema:t,typeName:le.ZodEffects,effect:e,..._e(n)});sn.createWithPreprocess=(t,e,n)=>new sn({schema:e,effect:{type:"preprocess",transform:t},typeName:le.ZodEffects,..._e(n)});class gn extends ve{_parse(e){return this._getType(e)===H.undefined?xt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}gn.create=(t,e)=>new gn({innerType:t,typeName:le.ZodOptional,..._e(e)});class sr extends ve{_parse(e){return this._getType(e)===H.null?xt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}sr.create=(t,e)=>new sr({innerType:t,typeName:le.ZodNullable,..._e(e)});class Os extends ve{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===H.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Os.create=(t,e)=>new Os({innerType:t,typeName:le.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,..._e(e)});class Ni extends ve{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ki(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new nn(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new nn(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Ni.create=(t,e)=>new Ni({innerType:t,typeName:le.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,..._e(e)});class Ai extends ve{_parse(e){if(this._getType(e)!==H.nan){const r=this._getOrReturnCtx(e);return V(r,{code:M.invalid_type,expected:H.nan,received:r.parsedType}),de}return{status:"valid",value:e.data}}}Ai.create=t=>new Ai({typeName:le.ZodNaN,..._e(t)});const kp=Symbol("zod_brand");class Cu extends ve{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Ds extends ve{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?de:i.status==="dirty"?(n.dirty(),Iu(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?de:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,n){return new Ds({in:e,out:n,typeName:le.ZodPipeline})}}const ju=(t,e={},n)=>t?Br.create().superRefine((r,s)=>{var i,o;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,u=(o=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,c=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...c,fatal:u})}}):Br.create(),xp={object:Ze.lazycreate};var le;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(le||(le={}));const Tp=(t,e={message:`Input not instance of ${t.name}`})=>ju(n=>n instanceof t,e),Du=Qt.create,$u=$n.create,Op=Ai.create,Np=Bn.create,Bu=_s.create,Ap=nr.create,Rp=xi.create,Ip=vs.create,Pp=bs.create,Cp=Br.create,jp=Jn.create,Dp=bn.create,$p=Ti.create,Bp=rn.create,Lp=Ze.create,Mp=Ze.strictCreate,Up=ws.create,Fp=zi.create,Kp=Es.create,qp=cn.create,Gp=Ss.create,Yp=Oi.create,Hp=rr.create,Vp=Rr.create,Zp=ks.create,zp=xs.create,Wp=Ln.create,Jp=Ts.create,Xp=Lr.create,pc=sn.create,Qp=gn.create,em=sr.create,tm=sn.createWithPreprocess,nm=Ds.create,rm=()=>Du().optional(),sm=()=>$u().optional(),im=()=>Bu().optional(),om={string:t=>Qt.create({...t,coerce:!0}),number:t=>$n.create({...t,coerce:!0}),boolean:t=>_s.create({...t,coerce:!0}),bigint:t=>Bn.create({...t,coerce:!0}),date:t=>nr.create({...t,coerce:!0})},am=de;var Ir=Object.freeze({__proto__:null,defaultErrorMap:gs,setErrorMap:fp,getErrorMap:wi,makeIssue:Ei,EMPTY_PATH:dp,addIssueToContext:V,ParseStatus:vt,INVALID:de,DIRTY:Iu,OK:xt,isAborted:jo,isDirty:Do,isValid:Si,isAsync:ki,get util(){return Oe},get objectUtil(){return Co},ZodParsedType:H,getParsedType:Rn,ZodType:ve,ZodString:Qt,ZodNumber:$n,ZodBigInt:Bn,ZodBoolean:_s,ZodDate:nr,ZodSymbol:xi,ZodUndefined:vs,ZodNull:bs,ZodAny:Br,ZodUnknown:Jn,ZodNever:bn,ZodVoid:Ti,ZodArray:rn,ZodObject:Ze,ZodUnion:ws,ZodDiscriminatedUnion:zi,ZodIntersection:Es,ZodTuple:cn,ZodRecord:Ss,ZodMap:Oi,ZodSet:rr,ZodFunction:Rr,ZodLazy:ks,ZodLiteral:xs,ZodEnum:Ln,ZodNativeEnum:Ts,ZodPromise:Lr,ZodEffects:sn,ZodTransformer:sn,ZodOptional:gn,ZodNullable:sr,ZodDefault:Os,ZodCatch:Ni,ZodNaN:Ai,BRAND:kp,ZodBranded:Cu,ZodPipeline:Ds,custom:ju,Schema:ve,ZodSchema:ve,late:xp,get ZodFirstPartyTypeKind(){return le},coerce:om,any:Cp,array:Bp,bigint:Np,boolean:Bu,date:Ap,discriminatedUnion:Fp,effect:pc,enum:Wp,function:Vp,instanceof:Tp,intersection:Kp,lazy:Zp,literal:zp,map:Yp,nan:Op,nativeEnum:Jp,never:Dp,null:Pp,nullable:em,number:$u,object:Lp,oboolean:im,onumber:sm,optional:Qp,ostring:rm,pipeline:nm,preprocess:tm,promise:Xp,record:Gp,set:Hp,strictObject:Mp,string:Du,symbol:Rp,transformer:pc,tuple:qp,undefined:Ip,union:Up,unknown:jp,void:$p,NEVER:am,ZodIssueCode:M,quotelessJson:lp,ZodError:nn});function cm(t){let e,n,r,s,i,o,a,u,c,l,d,h,g;return{c(){e=St("svg"),n=St("g"),r=St("path"),s=St("path"),i=St("path"),o=St("path"),a=St("path"),u=St("path"),c=St("path"),l=St("path"),d=St("defs"),h=St("clipPath"),g=St("rect"),U(r,"d","M17.25 7.5C17.25 6.10761 16.6969 4.77226 15.7123 3.78769C14.7277 2.80312 13.3924 2.25 12 2.25C10.6076 2.25 9.27226 2.80312 8.28769 3.78769C7.30312 4.77226 6.75 6.10761 6.75 7.5V8.25H17.25V7.5Z"),U(r,"stroke","currentColor"),U(r,"stroke-width","1.5"),U(r,"stroke-linecap","round"),U(r,"stroke-linejoin","round"),U(s,"d","M6.75 18C6.75 19.3924 7.30312 20.7277 8.28769 21.7123C9.27226 22.6969 10.6076 23.25 12 23.25C13.3924 23.25 14.7277 22.6969 15.7123 21.7123C16.6969 20.7277 17.25 19.3924 17.25 18V8.25H6.75V18Z"),U(s,"stroke","currentColor"),U(s,"stroke-width","1.5"),U(s,"stroke-linecap","round"),U(s,"stroke-linejoin","round"),U(i,"d","M16.594 4.959C17.4484 4.63537 18.184 4.05935 18.7031 3.3075C19.2222 2.55566 19.5002 1.66363 19.5 0.75"),U(i,"stroke","currentColor"),U(i,"stroke-width","1.5"),U(i,"stroke-linecap","round"),U(i,"stroke-linejoin","round"),U(o,"d","M7.406 4.959C6.55161 4.63537 5.81597 4.05935 5.29688 3.3075C4.77779 2.55566 4.49984 1.66363 4.5 0.75"),U(o,"stroke","currentColor"),U(o,"stroke-width","1.5"),U(o,"stroke-linecap","round"),U(o,"stroke-linejoin","round"),U(a,"d","M17.25 12.75H23.25"),U(a,"stroke","currentColor"),U(a,"stroke-width","1.5"),U(a,"stroke-linecap","round"),U(a,"stroke-linejoin","round"),U(u,"d","M23.25 18.75C21.6587 18.75 20.1326 18.1179 19.0074 16.9926C17.8821 15.8674 17.25 14.3413 17.25 12.75C17.25 11.1587 17.8821 9.63258 19.0074 8.50736C20.1326 7.38214 21.6587 6.75 23.25 6.75"),U(u,"stroke","currentColor"),U(u,"stroke-width","1.5"),U(u,"stroke-linecap","round"),U(u,"stroke-linejoin","round"),U(c,"d","M6.75 12.75H0.75"),U(c,"stroke","currentColor"),U(c,"stroke-width","1.5"),U(c,"stroke-linecap","round"),U(c,"stroke-linejoin","round"),U(l,"d","M0.75 18.75C2.3413 18.75 3.86742 18.1179 4.99264 16.9926C6.11786 15.8674 6.75 14.3413 6.75 12.75C6.75 11.1587 6.11786 9.63258 4.99264 8.50736C3.86742 7.38214 2.3413 6.75 0.75 6.75"),U(l,"stroke","currentColor"),U(l,"stroke-width","1.5"),U(l,"stroke-linecap","round"),U(l,"stroke-linejoin","round"),U(n,"clip-path","url(#clip0_546_468)"),U(g,"width","24"),U(g,"height","24"),U(g,"fill","white"),U(h,"id","clip0_546_468"),U(e,"width","24"),U(e,"height","24"),U(e,"viewBox","0 0 24 24"),U(e,"fill","none"),U(e,"xmlns","http://www.w3.org/2000/svg")},m(v,b){Ge(v,e,b),me(e,n),me(n,r),me(n,s),me(n,i),me(n,o),me(n,a),me(n,u),me(n,c),me(n,l),me(e,d),me(d,h),me(h,g)},p:Ne,i:Ne,o:Ne,d(v){v&&Pe(e)}}}class um extends lt{constructor(e){super(),ut(this,e,null,cm,rt,{})}}function lm(t){let e,n;return{c(){e=St("svg"),n=St("path"),U(n,"d","M2.45748 9C2.45748 5.13401 5.52486 2 9.30867 2C13.0925 2 16.1599 5.13401 16.1599 9C16.1599 9.42052 16.0957 10.159 15.8988 10.9191C15.8036 11.2867 15.6842 11.6324 15.5412 11.939L12.9148 7.29115C12.6445 6.81286 12.0459 6.64898 11.5778 6.92513C11.1097 7.20127 10.9493 7.81286 11.2196 8.29115L14.6799 14.4149C14.9502 14.8932 15.5488 15.057 16.0169 14.7809L22.0105 11.2454C22.4786 10.9692 22.639 10.3576 22.3687 9.87934C22.0984 9.40105 21.4999 9.23717 21.0317 9.51332L17.793 11.4238C18.0351 10.4864 18.1173 9.57803 18.1173 9C18.1173 4.02944 14.1736 0 9.30867 0C4.44377 0 0.5 4.02944 0.5 9C0.5 13.9706 4.44377 18 9.30867 18C9.84921 18 10.2874 17.5523 10.2874 17C10.2874 16.4477 9.84921 16 9.30867 16C5.52486 16 2.45748 12.866 2.45748 9Z"),U(n,"fill","currentColor"),U(e,"width","23"),U(e,"height","18"),U(e,"viewBox","0 0 23 18"),U(e,"fill","none"),U(e,"xmlns","http://www.w3.org/2000/svg")},m(r,s){Ge(r,e,s),me(e,n)},p:Ne,i:Ne,o:Ne,d(r){r&&Pe(e)}}}class fm extends lt{constructor(e){super(),ut(this,e,null,lm,rt,{})}}const bt=qr(void 0,t=>{const e=()=>{const n=new URLSearchParams(location.search),r=n.get("game")??"",s=n.get("track")??"",i=n.get("release")??"",o=n.get("coverImage")??"",a=n.get("gamePlayId")??"",u=n.get("clientId")??"",c=n.get("sessionId")??"",l=n.get("feSessionId")??"",d=n.get("source")??"",h=n.get("interpolateColors")==="true",g=n.get("autoload")==="true",v=n.get("preload")==="true",b=n.get("skipDbCheck")?n.get("skipDbCheck")==="true"?!0:n.get("skipDbCheck")==="false"?!1:void 0:void 0;t({autoloadEnabled:g,clientId:u,coverImage:o,feSessionId:l,gameId:r,gamePlayId:a,interpolateColors:h,preloadEnabled:v,releaseId:i,sessionId:c,skipDbCheck:b,source:d,trackId:s})};return e(),window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}}),un=()=>{const t=["https://gx.games","https://gxc.gg","https://canary.gxc.gmx.dev","https://alt.canary.gxc.gmx.dev"],e=Dh(bt).source;if(e)return t.includes(e)?e:void 0;if(!document.referrer){console.warn("`document.referrer` missing");return}const n=new URL(document.referrer).origin;if(!t.includes(n)){console.warn(`\`document.referrer\` origin invalid. Expected one of ${t}, found "${n}"`);return}return n};function mc(t){let e,n,r,s,i,o,a,u,c,l,d,h,g,v=t[1]&&yc(t);c=new fm({});let b=t[1]&&gc(t);return{c(){e=ze("div"),n=ze("div"),r=ze("p"),r.textContent="Error",s=Qe(),v&&v.c(),i=Qe(),o=ze("div"),a=ze("button"),u=cr("Reload game"),pt(c.$$.fragment),l=Qe(),b&&b.c(),U(r,"class","text-2xl font-medium sm:text-4xl"),U(a,"class","flex items-center justify-center gap-2 rounded bg-gray-10 px-6 py-2 text-sm transition-colors hover:bg-gray-16 sm:px-8 sm:py-3 sm:text-base [&>svg]:h-4 [&>svg]:sm:h-6"),U(o,"class","flex gap-4"),U(n,"class","bg-error relative flex h-full w-full flex-col items-start gap-4 p-[5%] font-body text-indigo-50 sm:gap-6 sm:p-[10%] svelte-1bvjea7"),U(e,"class","absolute inset-0 z-50 flex items-center")},m(x,E){Ge(x,e,E),me(e,n),me(n,r),me(n,s),v&&v.m(n,null),me(n,i),me(n,o),me(o,a),me(a,u),it(c,a,null),me(o,l),b&&b.m(o,null),d=!0,h||(g=Cn(a,"click",t[3]),h=!0)},p(x,E){x[1]?v?v.p(x,E):(v=yc(x),v.c(),v.m(n,i)):v&&(v.d(1),v=null),x[1]?b?(b.p(x,E),E&2&&Re(b,1)):(b=gc(x),b.c(),Re(b,1),b.m(o,null)):b&&(ba(),Ue(b,1,1,()=>{b=null}),wa())},i(x){d||(Re(c.$$.fragment,x),Re(b),d=!0)},o(x){Ue(c.$$.fragment,x),Ue(b),d=!1},d(x){x&&Pe(e),v&&v.d(),ot(c),b&&b.d(),h=!1,g()}}}function yc(t){let e,n=t[0].message+"",r;return{c(){e=ze("p"),r=cr(n),U(e,"class","text-base sm:text-lg")},m(s,i){Ge(s,e,i),me(e,r)},p(s,i){i&1&&n!==(n=s[0].message+"")&&Ou(r,n)},d(s){s&&Pe(e)}}}function gc(t){let e,n,r,s,i,o;return r=new um({}),{c(){e=ze("button"),n=cr("Report bug"),pt(r.$$.fragment),U(e,"class","flex items-center justify-center gap-2 rounded bg-gray-10 px-6 py-2 text-sm transition-colors hover:bg-gray-16 sm:px-8 sm:py-3 sm:text-base [&>svg]:h-4 [&>svg]:sm:h-6")},m(a,u){Ge(a,e,u),me(e,n),it(r,e,null),s=!0,i||(o=Cn(e,"click",t[4]),i=!0)},p:Ne,i(a){s||(Re(r.$$.fragment,a),s=!0)},o(a){Ue(r.$$.fragment,a),s=!1},d(a){a&&Pe(e),ot(r),i=!1,o()}}}function dm(t){let e,n,r=t[0]&&mc(t);return{c(){r&&r.c(),e=gi()},m(s,i){r&&r.m(s,i),Ge(s,e,i),n=!0},p(s,[i]){s[0]?r?(r.p(s,i),i&1&&Re(r,1)):(r=mc(s),r.c(),Re(r,1),r.m(e.parentNode,e)):r&&(ba(),Ue(r,1,1,()=>{r=null}),wa())},i(s){n||(Re(r),n=!0)},o(s){Ue(r),n=!1},d(s){r&&r.d(s),s&&Pe(e)}}}const hm=Ir.object({message:Ir.string(),stack:Ir.string().optional()}),pm=t=>hm.safeParse(t).success;function mm(t,e,n){let r,s;Yn(()=>{const u=c=>{const{error:l}=c;pm(l)?n(0,s=l):typeof l=="string"&&n(0,s=new Error(l))};return window.addEventListener("error",u),()=>window.removeEventListener("error",u)});const i=u=>{const c=un();u&&c&&window.parent.postMessage(u,c)},o=()=>{const u=new URLSearchParams(location.search);u.set("skipDbCheck","true"),location.replace(`${location.href.split("?")[0]}?${u.toString()}`)},a=()=>i(s);return t.$$.update=()=>{t.$$.dirty&1&&n(1,r=!!s&&(s==null?void 0:s.message)!=="[object Object]")},[s,r,i,o,a]}class ym extends lt{constructor(e){super(),ut(this,e,mm,dm,rt,{})}}const Ea=Gr(!1),Lu=Ht([bt,Ea],([t,e])=>e?!1:!!(t.autoloadEnabled||t.preloadEnabled)),Mu=Gr([]),gm=AudioContext,_m=gm.prototype.resume;let _c=!1;Lu.subscribe(t=>{t||_c||Mu.update(e=>(e.map(n=>(n.resume=_m,n)),e.forEach(n=>{n.resume()}),_c=!0,e))});function vm(t,e,n){let r;return et(t,Lu,s=>n(0,r=s)),Yn(()=>{const s=window.AudioContext;return window.AudioContext=class extends s{constructor(...o){super(...o),r&&(this.resume=()=>Promise.resolve(void 0),this.suspend()),Mu.update(a=>[...a,this])}},()=>{window.AudioContext=s}}),[]}class bm extends lt{constructor(e){super(),ut(this,e,vm,null,rt,{})}}async function wm(t,e){let n;const r=new Promise(s=>{n=t.subscribe(i=>{const o=e(i);o!==void 0&&s(o)})});return r.finally(()=>{n()}),r}let Vs;const vc=async()=>Vs||(Vs=wm(bt,({gamePlayId:t})=>t).then(Em),Vs),Em=async t=>{var r,s;const n=await(await fetch("https://api.gx.games/bonus/token",{body:JSON.stringify({gamePlayId:t}),cache:"no-cache",credentials:"include",headers:{"Content-type":"application/json; charset=UTF-8"},method:"POST",mode:"cors"})).json();if(!((r=n==null?void 0:n.data)!=null&&r.token)||typeof((s=n==null?void 0:n.data)==null?void 0:s.token)!="string")throw new Error(`Bad token response ${JSON.stringify(n)}`);return n.data.token},Uu=Ht([bt],([t],e)=>{t.gameId&&caches.keys().then(n=>n.map(r=>JSON.parse(r)).some(({gameId:r})=>r===t.gameId)).then(e).catch(()=>{e(!1)})},void 0),Fu=Gr(!1),Bo=Gr(!1),Ku=Ht([Bo,ys,Fu,bt],([t,e,n,r])=>[t,e,r.skipDbCheck!==!1||n].every(Boolean)),qu=Ht([bt,Uu],([t,e])=>is()||!t.autoloadEnabled&&!t.preloadEnabled||e===void 0?"on-demand":e?"autoloading":t.preloadEnabled?"preloading":"autoloading"),Sm=Ht([bt,Uu,qu,Ea],([t,e,n,r])=>r||(t.autoloadEnabled||t.preloadEnabled)&&n==="preloading"?!0:!(t.autoloadEnabled&&!is()&&!e)),Gu="https://play.gx.games",xn=(t,e)=>(t.startsWith("http")||(t=`${Gu}/${e.gameId}/${e.trackId}/${e.releaseId}/${t}`),t.replace("https://api.gxc.gg","https://api.gx.games").replace("https://play.gxc.gg","https://play.gx.games"));function km(t,e,n){let r;et(t,bt,c=>n(0,r=c));const s=c=>["http://localhost:3010/bonus/","https://bonus.gx.games"].some(l=>c.startsWith(l)),i=()=>{const c=window.fetch,l=h=>typeof h=="string"?xn(h,r):h instanceof Request?xn(h.url,r):h instanceof URL?xn(h.href,r):h,d=(h,g)=>typeof h=="string"?c(xn(h,r),g):h instanceof Request?c(new Request(xn(h.url,r),h),g):h instanceof URL?c(new URL(xn(h.href,r),h),g):c(h,g);return window.fetch=async(h,g)=>{if(!s(l(h)))return d(h,g);const v=await vc(),b=new Headers(g==null?void 0:g.headers);return b.append("Authorization",`Bearer ${v}`),d(h,{...g,headers:b})},()=>{window.fetch=c}},o=()=>{const c=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(d,h,...g){const v=xn(h instanceof URL?h.href:h,r);return this._url=v,c.call(this,d,v,...g)};const l=XMLHttpRequest.prototype.send;return XMLHttpRequest.prototype.send=function(d){if(!s(this._url)){l.call(this,d);return}const h=this;vc().then(g=>{h.setRequestHeader("Authorization",`Bearer ${g}`),l.call(h,d)})},()=>{XMLHttpRequest.prototype.open=c,XMLHttpRequest.prototype.send=l}},a=()=>(Bo.set(!0),()=>Bo.set(!1)),u=[];return Yn(()=>{u.push(...[i,o,a].map(c=>c()))}),ln(()=>{u.slice().reverse().forEach(c=>c())}),[]}class xm extends lt{constructor(e){super(),ut(this,e,km,null,rt,{})}}const{window:oo}=np;function Tm(t){let e,n;return{c:Ne,m(r,s){e||(n=[Cn(oo,"keydown",t[0]),Cn(oo,"keyup",t[1]),Cn(oo,"blur",t[2])],e=!0)},p:Ne,i:Ne,o:Ne,d(r){e=!1,Gn(n)}}}function Om(t){const e=new Map,n=i=>{const o=un();if(!o)return;const{key:a}=i;e.get(a)||e.set(a,setTimeout(()=>{window.parent.postMessage({event_id:"KEY_HELD_EVENT",key:a},o)},250))},r=i=>{const{key:o}=i,a=e.get(o);a&&(clearTimeout(a),e.delete(o))},s=()=>{e.forEach(i=>{clearTimeout(i)}),e.clear()};return ln(()=>{e.forEach(i=>{clearTimeout(i)})}),[n,r,s]}class Nm extends lt{constructor(e){super(),ut(this,e,Om,Tm,rt,{})}}function Am(t){let e,n;return{c(){e=ze("script"),e.async=!0,Ch(e.src,n="https://www.googletagmanager.com/gtag/js?id=G-J7V7XM0DL9")||U(e,"src",n)},m(r,s){me(document.head,e)},p:Ne,i:Ne,o:Ne,d(r){Pe(e)}}}function _r(...t){window.dataLayer||(window.dataLayer=[]),window.dataLayer.push(arguments)}function Rm(t,e,n){let r;et(t,bt,i=>n(1,r=i)),_r("js",new Date),r.clientId&&r.sessionId?_r("config","G-J7V7XM0DL9",{client_id:r.clientId,cookie_flags:"secure;samesite=none",session_id:r.sessionId,transport_type:"beacon"}):_r("config","G-J7V7XM0DL9",{cookie_flags:"secure;samesite=none",transport_type:"beacon"});const s=[];return Yn(()=>{const i=new Date,o=a=>{const c={metric1:(new Date().getTime()-i.getTime())/1e3,page_location:window.location.href};_r("event","page_unload",c)};window.addEventListener("pagehide",o),s.push(()=>window.removeEventListener("pagehide",o))}),ln(()=>{s.slice().reverse().forEach(i=>i())}),[_r]}class Im extends lt{constructor(e){super(),ut(this,e,Rm,Am,rt,{gtag:0})}get gtag(){return _r}}
const Pm=t=>`
    console.log('Important Note: Please note that identical LOG messages generated by the game will only appear once to avoid cluttering the console')

    function callOnce(func) {
      const calledArgs = {}
    
      return function(...args) {
        const argsKey = JSON.stringify(args)
        
        if (!calledArgs[argsKey]) {
          calledArgs[argsKey] = true
          return func(...args)
        }
      };
    }

    window.console.log = callOnce(console.log)
    window.console.info = callOnce(console.info);
    
var h;
h || (h = typeof Module !== 'undefined' ? Module : {});
h.sk || (h.sk = 0);
h.sk++;
h.ENVIRONMENT_IS_PTHREAD || function(a) {
    function b(n, q, p, t) {
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node)
            require("fs").readFile(n, function(r, C) {
                r ? t(r) : p(C.buffer)
            });
        else {
            var v = new XMLHttpRequest;
            v.open("GET", n, !0);
            v.responseType = "arraybuffer";
            v.onprogress = function(r) {
                var C = q;
                r.total && (C = r.total);
                if (r.loaded) {
                    v.Qi ? h.Mj[n].loaded = r.loaded : (v.Qi = !0,
                    h.Mj || (h.Mj = {}),
                    h.Mj[n] = {
                        loaded: r.loaded,
                        total: C
                    });
                    var y = C = r = 0, F;
                    for (F in h.Mj) {
                        var K = h.Mj[F];
                        r += K.total;
                        C += K.loaded;
                        y++
                    }
                    r = Math.ceil(r * h.sk / y);
                    h.setStatus && h.setStatus("Downloading data... (" + C + "/" + r + ")")
                } else
                    !h.Mj && h.setStatus && h.setStatus("Downloading data...")
            }
            ;
            v.onerror = function() {
                throw Error("NetworkError for: " + n);
            }
            ;
            v.onload = function() {
                if (200 == v.status || 304 == v.status || 206 == v.status || 0 == v.status && v.response)
                    p(v.response);
                else
                    throw Error(v.statusText + " : " + v.responseURL);
            }
            ;
            v.send(null)
        }
    }
    function c(n) {
        console.error("package error:", n)
    }
    function d() {
        function n(v, r, C) {
            this.start = v;
            this.end = r;
            this.audio = C
        }
        function q(v) {
            if (!v)
                throw "Loading data file failed." + Error().stack;
            if (!(v instanceof ArrayBuffer))
                throw "bad input to processPackageData" + Error().stack;
            v = new Uint8Array(v);
            n.prototype.aj = v;
            v = a.files;
            for (var r = 0; r < v.length; ++r)
                n.prototype.Qi[v[r].filename].onload();
            h.removeRunDependency("datafile_runner.data")
        }
        h.FS_createPath("/", "assets", !0, !0);
        n.prototype = {
            Qi: {},
            open: function(v, r) {
                this.name = r;
                this.Qi[r] = this;
                h.addRunDependency("fp " + this.name)
            },
            send: function() {},
            onload: function() {
                this.Wi(this.aj.subarray(this.start, this.end))
            },
            Wi: function(v) {
                h.FS_createDataFile(this.name, null, v, !0, !0, !0);
                h.removeRunDependency("fp " + this.name);
                this.Qi[this.name] = null
            }
        };
        for (var p = a.files, t = 0; t < p.length; ++t)
            (new n(p[t].start,p[t].end,p[t].audio || 0)).open("GET", p[t].filename);
        h.addRunDependency("datafile_runner.data");
        h.il || (h.il = {});
        h.il["runner.data"] = {
            km: !1
        };
        l ? (q(l),
        l = null) : g = q
    }
    "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
    "function" !== typeof h.locateFilePackage || h.locateFile || (h.locateFile = h.locateFilePackage,
    k("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
    var e = h.locateFile ? h.locateFile("runner.data", "") : "runner.data"
      , f = a.remote_package_size
      , g = null
      , l = h.getPreloadedPackage ? h.getPreloadedPackage(e, f) : null;
    l || b(e, f, function(n) {
        g ? (g(n),
        g = null) : l = n
    }, c);
    h.calledRun ? d() : (h.preRun || (h.preRun = []),
    h.preRun.push(d))
}({
    "files": [{
        "filename": "/assets/audiogroup2.dat",
        "start": 0,
        "end": 4762814,
        "audio": 0
    }, {
        "filename": "/assets/index.html",
        "start": 4762814,
        "end": 4765344,
        "audio": 0
    }, {
        "filename": "/assets/options.ini",
        "start": 4765344,
        "end": 4765518,
        "audio": 0
    }],
    "remote_package_size": 4765518,
    "package_uuid": "0b1c8ec8-d556-44c9-8d56-3b01eb8ac195"
});
this.doGMLCallback = function(a, b) {
    b = JSON.stringify(b);
    var c = aa(b) + 1
      , d = m(c);
    u(b, d, c);
    console.log("AddAsyncMethod=" + g_pAddAsyncMethod + ", methodToCall=" + a + ", stringOnWasmHeap=" + d + ", argsAsJSON=" + b);
    h.dynCall("vii", g_pAddAsyncMethod, [a, d])
}
;
this.triggerAdPrefix = function(a, b, c, d, e) {
    var f = m(80)
      , g = f + 16
      , l = f + 32
      , n = f + 48
      , q = f + 64;
    ba(f + 0, a, 16);
    ba(g, b, 16);
    ba(l, c, 16);
    ba(n, d, 16);
    ba(q, e, 16);
    return f
}
;
this.triggerAdPostfix = function(a) {
    ca(a)
}
;
this.triggerPaymentPrefix = function(a) {
    var b = m(16);
    ba(b, a, 16);
    return b
}
;
this.triggerPaymentPostfix = function(a) {
    ca(a)
}
;
var w = null
  , da = []
  , ea = null
  , ha = null
  , ia = null
  , ja = null
  , ka = null;
function la() {
    w && ("visible" === document.visibilityState ? w.resume() : w.suspend())
}
var ma = void 0;
this.OGX_startDRMCheck = function() {
    ma && h.dynCall("v", ma)
}
;
var na = void 0
  , oa = void 0
  , pa = void 0
  , qa = void 0;
this.GM_pause = function() {
    na && h.dynCall("v", na)
}
;
this.GM_unpause = function() {
    oa && h.dynCall("v", oa)
}
;
this.GM_tick = function() {
    pa && h.dynCall("vd", pa, [performance.now()])
}
;
this.GM_is_multiplayer = function() {
    return qa ? h.dynCall("i", qa) : 0
}
;
var ra = void 0
  , sa = void 0;
this.GM_get_view_status = function() {
    var a = void 0;
    if (ra) {
        var b = h.dynCall("i", ra);
        a = x(b);
        a = JSON.parse(a);
        ca(b)
    }
    return a
}
;
this.GM_set_view_status = function(a) {
    if (sa) {
        a = JSON.stringify(a);
        var b = aa(a) + 1
          , c = m(b);
        u(a, c, b);
        console.log("GM_set_view_status=" + sa + ", stringOnWasmHeap=" + c + ", argsAsJSON=" + a);
        h.dynCall("vi", sa, [c])
    }
}
;
var ta = []
  , ua = !1
  , va = !1;
this.activate_clipboard = function() {
    !ua && navigator.clipboard && navigator.permissions && !va && (va = !0,
    navigator.permissions.query({
        name: "clipboard-read",
        dm: !0
    }).then(function(a) {
        if ("granted" == a.state || "prompt" == a.state) {
            ua = !0;
            va = !1;
            for (a = 0; a < ta.length; ++a)
                navigator.clipboard.writeText(ta[a]);
            ta = [];
            navigator.clipboard.readText().then(b => {
                "" != b && ta.push(b)
            }
            ).catch( () => {}
            )
        }
    }))
}
;
this.clipboard_has_text = function() {
    if (!ua)
        return activate_clipboard(),
        !1;
    navigator.clipboard.readText().then(a => {
        "" != a && ta.push(a)
    }
    ).catch( () => {}
    );
    return 0 < ta.length
}
;
this.clipboard_get_text = function() {
    var a = "";
    ua ? 0 < ta.length && (a = ta.pop()) : activate_clipboard();
    return a
}
;
this.clipboard_set_text = function(a) {
    ua ? navigator.clipboard && navigator.clipboard.writeText(a) : (activate_clipboard(),
    ta.push(a))
}
;
var wa = {}
  , xa = {}
  , ya = "";
this.__gx_cache_file = function(a) {
    if (window.oprt && window.oprt.gameFiles) {
        var b = window.origin + "/" + a.name
          , c = new URLSearchParams(window.location.search);
        const d = c.get("game")
          , e = c.get("track");
        c = c.get("release");
        null != d && null != e && null != c && (b = window.location.origin + "/" + d + "/" + e + "/" + c + "/" + a.name);
        console.log("__gx_cache_file for " + b);
        b = new Request(b);
        let f = a.name + ":" + a.md5;
        window.oprt.gameFiles.fetchAndCache(f, ya, b).then(g => {
            g.arrayBuffer().then(function() {
                console.log("fetchAndCache complete for file:id " + f);
                xa[a.name] = {
                    name: a.name,
                    md5: a.md5,
                    fileId: f,
                    version: ya
                }
            })
        }
        )
    }
    return Promise.resolve()
}
;
this.__gx_check_cache = function(a, b) {
    var c = void 0 != xa[a];
    b && console.log("__gx_check_cache for " + a + " cached files " + JSON.stringify(xa) + " manifest files " + JSON.stringify(wa));
    !c && void 0 != wa[a] && b && this.__gx_cache_file(wa[a]);
    return c
}
;
this.__gx_prepare_cache = function(a) {
    ya = a;
    return new Promise(function(b, c) {
        if (window.oprt && window.oprt.gameFiles) {
            let e = manifestFiles().split(";");
            var d = manifestFilesMD5();
            window.oprt.gameFiles.keys().then(f => {
                console.log("current cache entries are " + JSON.stringify(f));
                var g = {};
                let l = [];
                for (var n = 0; n < f.length; ++n) {
                    var q = f[n]
                      , p = q.fileId
                      , t = ""
                      , v = p.indexOf(":");
                    0 <= v && (t = p.substring(v + 1),
                    p = p.substring(0, v));
                    v = e.indexOf(p);
                    console.log("considering file " + p + " for deleting, indexOf is " + v + " cached MD5 is " + t + " manifest md5 is " + (0 > v ? " not present" : d[v]));
                    0 > v || d[v] != t ? l.push(window.oprt.gameFiles.delete(q.fileId, q.version)) : g[p] = {
                        name: p,
                        md5: t,
                        fileId: q.fileId,
                        version: q.version
                    }
                }
                console.log("current cache files are " + JSON.stringify(g));
                xa = g;
                f = {};
                for (n = 0; n < e.length; ++n)
                    f[e[n]] = {
                        name: e[n],
                        md5: d[n]
                    };
                wa = f;
                void 0 == xa["game.unx"] ? (console.log("caching game.unx"),
                this.__gx_cache_file(wa["game.unx"]).then( () => {
                    b({
                        cachedFiles: xa,
                        allFiles: e
                    })
                }
                )) : b({
                    cachedFiles: xa,
                    allFiles: e
                })
            }
            ).catch(f => {
                c(Error("error trying to enumerate cache keys - " + JSON.stringify(f)))
            }
            )
        } else
            c(Error("unable to cache, API not found"))
    }
    )
}
;
this.__gx_async_wget2 = function(a, b, c, d, e, f, g) {
    window.oprt && window.oprt.gameFiles && (a = xa[a],
    a = window.oprt.gameFiles.match(a.fileId, a.version),
    a.catch( () => {
        h.dynCall("vi", g, [d])
    }
    ),
    a.then(l => l.arrayBuffer()).then(l => {
        l = new Uint8Array(l);
        var n = m(l.length);
        A.set(l, n);
        f && h.dynCall("viiii", f, [4294967295, d, n, l.length]);
        e && e(n)
    }
    ))
}
;
GXMFS = {
    vj: {},
    Yi: function(a) {
        return B.Yi.apply(null, arguments)
    },
    Hk: (a, b, c) => {
        GXMFS.tk(a, (d, e) => {
            if (d)
                return c(d);
            GXMFS.uk(a, (f, g) => {
                if (f)
                    return c(f);
                GXMFS.Ak(b ? g : e, b ? e : g, c)
            }
            )
        }
        )
    }
    ,
    Ol: () => {
        GXMFS.vj = {}
    }
    ,
    Dl: (a, b) => {
        var c = GXMFS.vj[a];
        c || (c = window.oprt.gameStorage.open(a),
        GXMFS.vj[a] = c);
        return b(null, c)
    }
    ,
    tk: (a, b) => {
        function c(l) {
            return "." !== l && ".." !== l
        }
        function d(l) {
            return n => za(l + "/" + n)
        }
        var e = {};
        for (a = Aa(a.xj).filter(c).map(d(a.xj)); a.length; ) {
            var f = a.pop();
            try {
                var g = Ba(f)
            } catch (l) {
                return b(l)
            }
            16384 === (g.mode & 61440) && a.push.apply(a, Aa(f).filter(c).map(d(f)));
            e[f] = {
                timestamp: g.mtime
            }
        }
        return b(null, {
            type: "local",
            entries: e
        })
    }
    ,
    uk: (a, b) => {
        GXMFS.Dl(a.xj, (c, d) => {
            if (c)
                return b(c);
            d.list().then(e => {
                b(null, {
                    type: "remote",
                    storage: d,
                    entries: e
                })
            }
            ).catch(b)
        }
        )
    }
    ,
    wk: (a, b) => {
        try {
            var c = D(a).node;
            var d = Ba(a)
        } catch (e) {
            return b(e)
        }
        return 16384 === (d.mode & 61440) ? b(null, {
            timestamp: d.mtime,
            mode: d.mode
        }) : 32768 === (d.mode & 61440) ? (c.Si = B.Wk(c),
        b(null, {
            timestamp: d.mtime,
            mode: d.mode,
            contents: c.Si
        })) : b(Error("node type not supported"))
    }
    ,
    Fk: (a, b, c) => {
        try {
            if (16384 === (b.mode & 61440))
                Ca(a, b.mode);
            else if (32768 === (b.mode & 61440))
                Da(a, b.contents);
            else
                return c(Error("node type not supported"));
            Ea(a, b.mode);
            Fa(a, b.timestamp, b.timestamp)
        } catch (d) {
            return c(d)
        }
        c(null)
    }
    ,
    Ck: (a, b) => {
        try {
            var c = Ba(a);
            16384 === (c.mode & 61440) ? Ga(a) : 32768 === (c.mode & 61440) && Ha(a)
        } catch (d) {
            return b(d)
        }
        b(null)
    }
    ,
    xk: (a, b, c) => {
        a.get(b).then(d => {
            c(null, d)
        }
        ).catch(c)
    }
    ,
    Gk: (a, b, c, d) => {
        a.put(c, b).then( () => {
            d(null)
        }
        ).catch(d)
    }
    ,
    Dk: (a, b, c) => {
        a.delete(b).then( () => {
            c(null)
        }
        ).catch(c)
    }
    ,
    Ak: (a, b, c) => {
        function d(q) {
            e--;
            if (q && !l)
                return l = !0,
                console.error("Reconcile failed"),
                c(q);
            if (0 === e && !l)
                return console.info("Reconcile finished successfully"),
                c(null)
        }
        console.info("Starting reconcile");
        var e = 0
          , f = [];
        Object.keys(a.entries).forEach(function(q) {
            var p = a.entries[q]
              , t = b.entries[q];
            t && p.timestamp.getTime() == t.timestamp.getTime() || (f.push(q),
            e++)
        });
        console.debug(`${f.length} entries to create/update on the ${"local" === b.type ? "local filesystem" : "remote filesystem"}`);
        var g = [];
        Object.keys(b.entries).forEach(function(q) {
            a.entries[q] || (g.push(q),
            e++)
        });
        console.debug(`${g.length} entries to remove from the ${"local" === b.type ? "local filesystem" : "remote filesystem"}`);
        if (0 == e)
            return c(null);
        var l = !1
          , n = "remote" === a.type ? a.storage : b.storage;
        f.sort().forEach(q => {
            "local" === b.type ? GXMFS.xk(n, q, (p, t) => {
                if (p)
                    return d(p);
                GXMFS.Fk(q, t, d)
            }
            ) : GXMFS.wk(q, (p, t) => {
                if (p)
                    return d(p);
                GXMFS.Gk(n, q, t, d)
            }
            )
        }
        );
        g.sort().reverse().forEach(q => {
            "local" === b.type ? GXMFS.Ck(q, d) : GXMFS.Dk(n, q, d)
        }
        )
    }
};
var Ia = Object.assign({}, h), Ja = [], Ka = "./this.program", La = (a, b) => {
    throw b;
}
, Ma = "object" == typeof window, Na = "function" == typeof importScripts, Oa = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, Pa = "", Qa, Ra, Sa, Ta, fs, Ua, Va;
if (Oa)
    Pa = Na ? require("path").dirname(Pa) + "/" : __dirname + "/",
    Va = () => {
        Ua || (fs = require("fs"),
        Ua = require("path"))
    }
    ,
    Qa = function(a, b) {
        Va();
        a = Ua.normalize(a);
        return fs.readFileSync(a, b ? void 0 : "utf8")
    }
    ,
    Sa = a => {
        a = Qa(a, !0);
        a.buffer || (a = new Uint8Array(a));
        return a
    }
    ,
    Ra = (a, b, c) => {
        Va();
        a = Ua.normalize(a);
        fs.readFile(a, function(d, e) {
            d ? c(d) : b(e.buffer)
        })
    }
    ,
    1 < process.argv.length && (Ka = process.argv[1].replace(/\\/g, "/")),
    Ja = process.argv.slice(2),
    "undefined" != typeof module && (module.exports = h),
    process.on("uncaughtException", function(a) {
        if (!(a instanceof Wa))
            throw a;
    }),
    process.on("unhandledRejection", function(a) {
        throw a;
    }),
    La = (a, b) => {
        if (noExitRuntime)
            throw process.exitCode = a,
            b;
        b instanceof Wa || k("exiting due to exception: " + b);
        process.exit(a)
    }
    ,
    h.inspect = function() {
        return "[Emscripten Module object]"
    }
    ;
else if (Ma || Na)
    Na = true;
    Na ? Pa = "https://cdn.jsdelivr.net/gh/faralong/all@main/justhitbutton/" : "undefined" != typeof document && document.currentScript && (Pa = document.currentScript.src),
    Pa = 0 !== Pa.indexOf("blob:") ? Pa.substr(0, Pa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
    Qa = a => {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    }
    ,
    Na && (Sa = a => {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response)
    }
    ),
    Ra = (a, b, c) => {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = () => {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
        }
        ;
        d.onerror = c;
        d.send(null)
    }
    ,
    Ta = a => {
        document.title = a
    }
    ;
var Xa = h.print || console.log.bind(console)
  , k = h.printErr || console.warn.bind(console);
Object.assign(h, Ia);
Ia = null;
h.arguments && (Ja = h.arguments);
h.thisProgram && (Ka = h.thisProgram);
h.quit && (La = h.quit);
function Ya(a) {
    Za || (Za = {});
    Za[a] || (Za[a] = 1,
    k(a))
}
var Za, $a = 0, bb;
h.wasmBinary && (bb = h.wasmBinary);
var noExitRuntime = h.noExitRuntime || !0;
"object" != typeof WebAssembly && cb("no native wasm support detected");
function db(a, b, c="i8") {
    "*" === c.charAt(c.length - 1) && (c = "i32");
    switch (c) {
    case "i1":
        E[a >> 0] = b;
        break;
    case "i8":
        E[a >> 0] = b;
        break;
    case "i16":
        eb[a >> 1] = b;
        break;
    case "i32":
        G[a >> 2] = b;
        break;
    case "i64":
        fb = [b >>> 0, (H = b,
        1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
        G[a >> 2] = fb[0];
        G[a + 4 >> 2] = fb[1];
        break;
    case "float":
        I[a >> 2] = b;
        break;
    case "double":
        gb[a >> 3] = b;
        break;
    default:
        cb("invalid type for setValue: " + c)
    }
}
function hb(a, b="i8") {
    "*" === b.charAt(b.length - 1) && (b = "i32");
    switch (b) {
    case "i1":
        return E[a >> 0];
    case "i8":
        return E[a >> 0];
    case "i16":
        return eb[a >> 1];
    case "i32":
        return G[a >> 2];
    case "i64":
        return G[a >> 2];
    case "float":
        return I[a >> 2];
    case "double":
        return Number(gb[a >> 3]);
    default:
        cb("invalid type for getValue: " + b)
    }
    return null
}
var ib, jb = !1;
function kb(a, b, c, d) {
    var e = {
        string: function(q) {
            var p = 0;
            if (null !== q && void 0 !== q && 0 !== q) {
                var t = (q.length << 2) + 1;
                p = lb(t);
                u(q, p, t)
            }
            return p
        },
        array: function(q) {
            var p = lb(q.length);
            E.set(q, p);
            return p
        }
    };
    a = h["_" + a];
    var f = []
      , g = 0;
    if (d)
        for (var l = 0; l < d.length; l++) {
            var n = e[c[l]];
            n ? (0 === g && (g = mb()),
            f[l] = n(d[l])) : f[l] = d[l]
        }
    c = a.apply(null, f);
    return c = function(q) {
        0 !== g && nb(g);
        return "string" === b ? x(q) : "boolean" === b ? !!q : q
    }(c)
}
var ob = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function pb(a, b, c) {
    var d = b + c;
    for (c = b; a[c] && !(c >= d); )
        ++c;
    if (16 < c - b && a.buffer && ob)
        return ob.decode(a.subarray(b, c));
    for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224))
                d += String.fromCharCode((e & 31) << 6 | f);
            else {
                var g = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
            }
        } else
            d += String.fromCharCode(e)
    }
    return d
}
function x(a, b) {
    return a ? pb(A, a, b) : ""
}
function qb(a, b, c, d) {
    if (!(0 < d))
        return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | l & 1023
        }
        if (127 >= g) {
            if (c >= d)
                break;
            b[c++] = g
        } else {
            if (2047 >= g) {
                if (c + 1 >= d)
                    break;
                b[c++] = 192 | g >> 6
            } else {
                if (65535 >= g) {
                    if (c + 2 >= d)
                        break;
                    b[c++] = 224 | g >> 12
                } else {
                    if (c + 3 >= d)
                        break;
                    b[c++] = 240 | g >> 18;
                    b[c++] = 128 | g >> 12 & 63
                }
                b[c++] = 128 | g >> 6 & 63
            }
            b[c++] = 128 | g & 63
        }
    }
    b[c] = 0;
    return c - e
}
function u(a, b, c) {
    return qb(a, A, b, c)
}
function aa(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
        127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
    }
    return b
}
function rb(a) {
    var b = aa(a) + 1
      , c = m(b);
    c && qb(a, E, c, b);
    return c
}
function sb(a) {
    var b = aa(a) + 1
      , c = lb(b);
    qb(a, E, c, b);
    return c
}
var tb, E, A, eb, J, G, N, I, gb;
function ub() {
    var a = ib.buffer;
    tb = a;
    h.HEAP8 = E = new Int8Array(a);
    h.HEAP16 = eb = new Int16Array(a);
    h.HEAP32 = G = new Int32Array(a);
    h.HEAPU8 = A = new Uint8Array(a);
    h.HEAPU16 = J = new Uint16Array(a);
    h.HEAPU32 = N = new Uint32Array(a);
    h.HEAPF32 = I = new Float32Array(a);
    h.HEAPF64 = gb = new Float64Array(a)
}
var vb, wb = [], xb = [], zb = [], Ab = [], Bb = [];
function Cb() {
    var a = h.preRun.shift();
    wb.unshift(a)
}
var Db = 0
  , Eb = null
  , Fb = null;
function Gb() {
    Db++;
    h.monitorRunDependencies && h.monitorRunDependencies(Db)
}
function Hb() {
    Db--;
    h.monitorRunDependencies && h.monitorRunDependencies(Db);
    if (0 == Db && (null !== Eb && (clearInterval(Eb),
    Eb = null),
    Fb)) {
        var a = Fb;
        Fb = null;
        a()
    }
}
function cb(a) {
    if (h.onAbort)
        h.onAbort(a);
    a = "Aborted(" + a + ")";
    k(a);
    jb = !0;
    throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
}
function Ib() {
    return Jb.startsWith("data:application/octet-stream;base64,")
}
var Jb;
Jb = "runner.wasm";
if (!Ib()) {
    var Kb = Jb;
    Jb = h.locateFile ? h.locateFile(Kb, Pa) : Pa + Kb
}
function Lb() {
    var a = Jb;
    try {
        if (a == Jb && bb)
            return new Uint8Array(bb);
        if (Sa)
            return Sa(a);
        throw "both async and sync fetching of the wasm failed";
    } catch (b) {
        cb(b)
    }
}
function Mb() {
    if (!bb && (Ma || Na)) {
        if ("function" == typeof fetch && !Jb.startsWith("file://"))
            return fetch(Jb, {
                credentials: "same-origin"
            }).then(function(a) {
                if (!a.ok)
                    throw "failed to load wasm binary file at '" + Jb + "'";
                return a.arrayBuffer()
            }).catch(function() {
                return Lb()
            });
        if (Ra)
            return new Promise(function(a, b) {
                Ra(Jb, function(c) {
                    a(new Uint8Array(c))
                }, b)
            }
            )
    }
    return Promise.resolve().then(function() {
        return Lb()
    })
}
var H, fb, Sb = {
    1478720: function() {
        return hasJSExceptionHandler()
    },
    1478785: function(a) {
        doJSExceptionHandler(x(a))
    },
    1478829: function() {
        return document.querySelector("canvas").getBoundingClientRect().left
    },
    1478949: function() {
        return document.querySelector("canvas").getBoundingClientRect().top
    },
    1479068: function() {
        var a = document.querySelector("canvas").getBoundingClientRect();
        return a.right - a.left
    },
    1479201: function() {
        var a = document.querySelector("canvas").getBoundingClientRect();
        return a.bottom - a.top
    },
    1479334: function(a, b, c, d, e, f) {
        gxc_request_room(x(a), x(b), c, d, x(e), x(f))
    },
    1479436: function(a, b, c, d) {
        gxc_join_room(x(a), x(b), x(c), x(d))
    },
    1479527: function() {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "visible");
        if (a = document.getElementById("log-state-button"))
            a.style.visibility = "visible"
    },
    1479776: function() {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "visible");
        if (a = document.getElementById("log-state-button"))
            a.style.visibility = "visible"
    },
    1480025: function(a, b) {
        var c = document.getElementById("multiplayer-stats-container");
        if (c && "visible" == c.style.visibility) {
            if (c = document.getElementById("multiplayer-stats"))
                c.innerHTML = x(a);
            void 0 != report_stats && report_stats(b)
        }
    },
    1480349: function(a) {
        "function" == typeof showRollbackMessage && showRollbackMessage(x(a))
    },
    1480442: function() {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "hidden");
        if (a = document.getElementById("share-button"))
            a.style.visibility = "hidden";
        if (a = document.getElementById("log-state-button"))
            a.style.visibility = "hidden"
    },
    1480804: function(a, b) {
        gxc_set_player_status(a, x(b))
    },
    1480855: function(a) {
        gxc_report_status(x(a))
    },
    1480896: function(a, b, c) {
        gxc_get_player_info(x(a), x(b), x(c))
    },
    1480975: function(a, b) {
        gxc_set_room_info(a, b)
    },
    1481006: function(a, b, c) {
        gxc_get_player_info(x(a), x(b), x(c))
    },
    1481085: function(a, b, c) {
        gxc_receive_chat_message(x(a), b, c)
    },
    1481141: function(a, b) {
        return webtransport_set_relay(x(a), b)
    },
    1481198: function(a) {
        webtransport_destroy(a)
    },
    1481228: function(a, b, c) {
        webtransport_send(a, b, c)
    },
    1481263: function(a, b, c) {
        return webtransport_receive(a, b, c)
    },
    1481308: function(a) {
        "function" == typeof wallpaper_init_config_controls && wallpaper_init_config_controls(JSON.parse(x(a)))
    },
    1481435: function(a) {
        alert(x(a))
    },
    1481465: function(a) {
        alert(x(a))
    },
    1481494: function() {
        return clipboard_has_text()
    },
    1481542: function() {
        var a = clipboard_get_text()
          , b = aa(a) + 1
          , c = m(b);
        u(a, c, b + 1);
        return c
    },
    1481718: function(a) {
        clipboard_set_text(x(a))
    },
    1481761: function() {
        var a = -1;
        window.matchMedia("(orientation:portrait)").matches ? a = 1 : window.matchMedia("(orientation:landscape)").matches && (a = 0);
        return a
    },
    1481939: function(a) {
        window.open(x(a), "_blank").focus()
    },
    1481994: function() {
        var a = document.querySelector("canvas");
        null != a.Qi && (a.Qi.pause(),
        console.log("Pausing video player"),
        a.Qi.removeAttribute("src"),
        a.Qi.load())
    },
    1482244: function(a, b, c) {
        var d = document.querySelector("canvas");
        if (null != d.Wj)
            return b = d.Wj.getImageData(0, 0, b, c),
            b = new Uint8Array(b.data.buffer),
            E.set(b, a),
            1;
        console.log("Not rendering video as context is null");
        return 0
    },
    1482581: function() {
        var a = document.querySelector("canvas");
        return null != a.Qi ? a.Qi.videoWidth : 0
    },
    1482728: function() {
        var a = document.querySelector("canvas");
        return null != a.Qi ? a.Qi.videoHeight : 0
    },
    1482876: function() {
        var a = document.querySelector("canvas");
        if (null != a.Qi) {
            if (a.Qi.paused)
                return -1;
            if (!a.Qi.ended)
                return 0
        }
        return -1
    },
    1483079: function(a) {
        var b = document.querySelector("canvas");
        null != b.Qi && (b.Qi.volume = a)
    },
    1483212: function(a) {
        function b() {
            function l() {
                const p = document.querySelector("canvas").Qi;
                null != p && (p.muted = !1)
            }
            var n = "mousedown"
              , q = "mouseup";
            "ontouchstart"in window && (n = "touchstart",
            q = "touchend");
            if (window.PointerEvent || window.navigator.pointerEnabled || window.navigator.msPointerEnabled)
                n = "pointerdown",
                q = "pointerup";
            document.body.addEventListener(n, l, {
                once: !0
            });
            document.body.addEventListener(q, l, {
                once: !0
            })
        }
        var c = document.querySelector("canvas");
        null == c.Qi ? c.Qi = document.createElement("video") : c.Qi.pause();
        const d = c.Qi;
        a = x(a);
        d.muted = !1;
        d.src = a;
        const e = {
            Zl: h.cwrap("video_playback_ended", "", "")
        }
          , f = {
            $l: h.cwrap("video_playback_started", "", "")
        };
        d.addEventListener("ended", function() {
            e.Zl()
        });
        d.addEventListener("playing", function() {
            console.log("Video playing event called");
            f.$l()
        }, !0);
        const g = () => {
            var l = document.querySelector("canvas");
            null == l.aj ? (l.aj = document.createElement("canvas"),
            l.aj.style.cssText = "position:fixed; top:1px; left:1px; width:1px; height:1px",
            l.aj.width = d.videoWidth,
            l.aj.height = d.videoHeight,
            document.body.appendChild(l.aj),
            l.Wj = l.aj.getContext("2d", {
                alpha: !1,
                em: !1,
                powerPreference: "low-power",
                desynchronized: !0,
                preserveDrawingBuffer: !0
            })) : (d.videoWidth != l.aj.width && (l.aj.width = d.videoWidth),
            l.aj.height != d.videoHeight && (l.aj.height = d.videoHeight));
            null != l.Qi && null != l.Wj && l.Wj.drawImage(l.Qi, 0, 0);
            null != l.Qi && (null != l.Qi.src ? l.Qi.requestVideoFrameCallback(g) : console.log("stopping video player callback check"))
        }
        ;
        d.requestVideoFrameCallback(g);
        d.load();
        a = d.play();
        void 0 !== a && a.then( () => {}
        ).catch( () => {
            console.log("video_open failed. User must interact with the page before video with audio can be played. Attempting to play the video muted");
            d.muted = !0;
            d.play();
            b()
        }
        )
    },
    1486282: function() {
        var a = document.querySelector("canvas");
        null != a.Qi && a.Qi.pause()
    },
    1486413: function() {
        var a = document.querySelector("canvas");
        null != a.Qi && a.Qi.play()
    },
    1486543: function(a) {
        var b = document.querySelector("canvas");
        null != b.Qi && (b.Qi.loop = .5 < a ? !0 : !1)
    },
    1486736: function(a) {
        var b = document.querySelector("canvas");
        null != b.Qi && (b.Qi.currentTime = a)
    },
    1486876: function() {
        var a = document.querySelector("canvas");
        return null == a.Qi || isNaN(a.Qi.duration) ? 0 : a.Qi.duration
    },
    1487071: function() {
        var a = document.querySelector("canvas");
        return null != a.Qi ? a.Qi.currentTime : 0
    },
    1487223: function() {
        var a = document.querySelector("canvas");
        return null != a.Qi ? a.Qi.ended ? 0 : a.Qi.paused ? 3 : a.Qi.readyState < a.Qi.HAVE_CURRENT_DATA ? 1 : 2 : 0
    },
    1487743: function() {
        var a = document.querySelector("canvas");
        return null != a.Qi ? a.Qi.loop : 0
    },
    1487888: function() {
        var a = document.querySelector("canvas");
        return null != a.Qi ? a.Qi.volume : 0
    },
    1488035: function(a, b, c, d) {
        var e = document.querySelector("canvas");
        if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
            console.log("CheckMediaRecorder::vp9 supported");
            var f = {
                mimeType: "video/webm; codecs=vp9"
            }
        } else
            MediaRecorder.isTypeSupported("video/webm;codecs=vp8") ? (f = {
                mimeType: "video/webm; codecs=vp8"
            },
            console.log("CheckMediaRecorder::vp8 supported")) : console.log("CheckMediaRecorder::No vp8 or vp9 support");
        e.Kk = e.captureStream(c);
        e.Kk.getVideoTracks().find(g => g.enabled);
        null == e.kj && (e.kj = document.createElement("canvas"),
        e.kj.style.cssText = "position:fixed; top:1px; left:1px; width:1px; height:1px",
        e.kj.width = a,
        e.kj.height = b,
        document.body.appendChild(e.kj),
        console.log("Game Canvas width:" + e.width + " height:" + e.height),
        e.kl = e.kj.getContext("2d", {
            alpha: !1,
            desynchronized: !0,
            antialias: !0,
            powerPreference: "low-power",
            preserveDrawingBuffer: !0
        }),
        e.Aj = document.createElement("video"),
        e.Aj.autoplay = !0,
        e.Aj.bm = !0,
        e.Aj.muted = !0,
        e.Aj.style.cssText = "position:fixed;top:1px;left:1px;width:1px;height:1px",
        document.body.appendChild(e.Aj),
        e.Aj.srcObject = e.Kk,
        a = e.kj.captureStream(c),
        0 < d && (d = w.createMediaStreamDestination().stream.getAudioTracks().find(g => g.enabled),
        a.addTrack(d)),
        f = new MediaRecorder(a,f),
        e.uj = [],
        f.ondataavailable = function(g) {
            e.uj.push(g.data)
        }
        ,
        e.Wi = f);
        null == e.mk && (e.mk = setInterval( () => e.kl.drawImage(e.Aj, 0, 0, e.width, e.height, 0, 0, e.kj.width, e.kj.height), 1E3 / c));
        e.Wi && "recording" != e.Wi.state && e.Wi.start()
    },
    1490531: function(a) {
        var b = document.querySelector("canvas");
        if (b.Wi && ("recording" == b.Wi.state || "paused" == b.Wi.state)) {
            var c = x(a);
            b.Wi.onstop = function() {
                var d = new Blob(b.uj,{
                    type: "video/webm"
                });
                b.uj = [];
                clearInterval(b.mk);
                b.mk = null;
                const e = {
                    yk: h.cwrap("post_video_upload_callback", "", ["string"])
                };
                if (c.startsWith("http"))
                    fetch(c, {
                        method: "PUT",
                        body: d
                    }).then( () => {
                        e.yk("upload completed")
                    }
                    ).catch(g => {
                        e.yk("Error uploading: " + g)
                    }
                    );
                else if ("" != c) {
                    d = URL.createObjectURL(d);
                    var f = document.createElement("a");
                    document.body.appendChild(f);
                    f.style = "display: none";
                    f.href = d;
                    f.download = c;
                    f.click();
                    window.URL.revokeObjectURL(d);
                    e.yk("filesaved")
                }
            }
            ;
            b.Wi.stop();
            console.log("saving chunks to movie")
        }
    },
    1491675: function() {
        var a = document.querySelector("canvas");
        a.Wi && "recording" == a.Wi.state && a.Wi.pause()
    },
    1491845: function() {
        var a = document.querySelector("canvas");
        a.Wi && "paused" == a.Wi.state && a.Wi.resume()
    },
    1492013: function(a, b, c, d, e, f) {
        triggerAd(x(a), b, c, d, e, f)
    },
    1492066: function(a, b) {
        triggerPayment(x(a), b)
    },
    1492108: function() {
        var a = 640;
        "number" == typeof window.innerWidth ? a = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? a = document.documentElement.clientWidth : document.body && document.body.clientWidth && (a = document.body.clientWidth);
        return a
    },
    1492414: function() {
        var a = void 0;
        "number" == typeof window.innerHeight ? a = window.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && document.body.clientHeight && (a = document.body.clientHeight);
        if (void 0 === a)
            return 480;
        var b = document.querySelector(".output-button");
        null != b && (a -= b.offsetHeight + 16);
        return a
    },
    1492882: function(a, b, c, d) {
        var e = -1;
        if (void 0 != window.oprt) {
            var f = window.oprt.unlockOrientation
              , g = window.oprt.lockPortraitOrientation
              , l = window.oprt.lockLandscapeOrientation;
            a = (a ? 1 : 0) | (b ? 2 : 0) | (c ? 4 : 0);
            a |= d ? 8 : 0;
            15 != (a & 15) && 0 != a || void 0 == f || "function" != typeof f || (f(),
            console.log("unlocking all orientations"));
            0 != (a & 5) && void 0 != l && "function" == typeof l ? (l(),
            console.log("Locking to Landscape"),
            e = 0) : 0 != (a & 10) && void 0 != g && "function" == typeof g && (g(),
            console.log("Locking to Portrait"),
            e = 0)
        }
        return e
    },
    1493870: function(a) {
        a ? void 0 != window.oprt && void 0 != window.oprt.enterFullscreen ? (console.log("enterFullscreen"),
        window.oprt.enterFullscreen()) : (console.log("canvas requesting enterFullscreen"),
        document.querySelector("canvas").requestFullscreen()) : void 0 != window.oprt && void 0 != window.oprt.exitFullscreen ? (console.log("exitFullscreen"),
        window.oprt.exitFullscreen()) : (console.log("exitFullscreen via document"),
        document.exitFullscreen())
    },
    1494398: function() {
        return screen.width
    },
    1494423: function() {
        return screen.height
    },
    1494449: function(a) {
        document.title = x(a)
    },
    1494488: function(a, b) {
        this.onGameSetWindowSize && onGameSetWindowSize(a, b)
    },
    1494557: function(a) {
        document.querySelector("canvas").style.cursor = x(a)
    },
    1494656: function() {
        w = new AudioContext;
        document.addEventListener("visibilitychange", la)
    },
    1494778: function() {
        w.close().then(function() {
            w = null;
            document.removeEventListener("visibilitychange", la)
        })
    },
    1494937: function() {
        function a() {
            w.resume().then(function() {
                document.body.removeEventListener(b, a);
                document.body.removeEventListener(c, a)
            })
        }
        let b = "mousedown"
          , c = "mouseup";
        "ontouchstart"in window && (b = "touchstart",
        c = "touchend");
        if (window.PointerEvent || window.navigator.pointerEnabled || window.navigator.msPointerEnabled)
            b = "pointerdown",
            c = "pointerup";
        document.body.addEventListener(b, a);
        document.body.addEventListener(c, a)
    },
    1495641: function() {
        w.suspend()
    },
    1495674: function() {
        return null != w
    },
    1495714: function() {
        if (null == w)
            return 4;
        switch (w.state) {
        case "suspended":
            return 0;
        case "running":
            return 1;
        case "closed":
            return 2;
        case "interrupted":
            return 3
        }
    },
    1495908: function() {
        return null == w ? 0 : w.currentTime
    },
    1495986: function() {
        return null == w ? 0 : w.sampleRate
    },
    1496063: function() {
        return null == w ? 0 : w.destination.channelCount
    },
    1496152: function(a, b, c, d, e, f) {
        e = w.createBuffer(b, d, e);
        for (let g = 0; g < b; ++g) {
            const l = e.getChannelData(g);
            for (let n = 0; n < d; ++n)
                l[n] = hb(a + c * (g + n * b), "float")
        }
        a = w.createBufferSource();
        a.buffer = e;
        a.connect(w.destination);
        a.start(f);
        return f + e.duration
    },
    1496798: function(a) {
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia && navigator.mediaDevices.getUserMedia({
            audio: !0
        }).then(b => {
            const c = d => {
                d = d.getAudioTracks();
                if (0 < d.length)
                    return d[0].getSettings().channelCount
            }
            ;
            ha = b;
            ia = new AudioContext({
                sampleRate: a
            });
            ia.audioWorklet.addModule("audio-worklet.js").then( () => {
                ja = new AudioWorkletNode(ia,"audio-worklet");
                ja.port.onmessage = e => {
                    da.push(e.data)
                }
                ;
                ea = new MediaStreamAudioSourceNode(ia,{
                    mediaStream: b
                });
                const d = c(b);
                1 < d ? (ka = new ChannelMergerNode(ia,{
                    numberOfInputs: d
                }),
                ea.connect(ka),
                ka.connect(ja)) : ea.connect(ja);
                ia.resume()
            }
            ).catch(d => {
                console.error(d);
                ha && ha.getTracks().forEach(e => {
                    e.stop()
                }
                );
                ka = ea = ja = ha = ia = null
            }
            )
        }
        ).catch(b => {
            console.error(b)
        }
        )
    },
    1498575: function() {
        da = [];
        ha.getTracks().forEach(a => {
            a.stop()
        }
        );
        ja.port.postMessage(!0);
        ea.disconnect();
        ea = null;
        null != ka && (ka.disconnect(),
        ka = null);
        ja.disconnect();
        ja = null;
        ia.close().then( () => {
            ia = null
        }
        ).catch(a => {
            console.error(a)
        }
        )
    },
    1499167: function(a, b, c) {
        b /= c;
        for (let d = 0; d < b; ++d) {
            const e = da.shift();
            for (let f = 0; f < c; ++f)
                db(a + 2 * (d * c + f), e[f], "i16")
        }
    },
    1499511: function(a) {
        return da.length * a
    },
    1499597: function() {
        return null != ea && null != ja ? 1 : 0
    },
    1499710: function() {
        return screen.width
    },
    1499735: function() {
        return screen.height
    },
    1499761: function() {
        return screen.width
    },
    1499786: function() {
        return screen.height
    },
    1499812: function() {
        var a = document.getElementById("canvas");
        const b = a.style.visibility;
        a.style.visibility = "hidden";
        a.offsetHeight;
        a.style.visibility = b
    },
    1500050: function(a, b) {
        g_pWadLoadCallback && g_pWadLoadCallback(a, b)
    },
    1500110: function() {
        var a = manifestFiles()
          , b = aa(a) + 1
          , c = m(b);
        u(a, c, b);
        return c
    },
    1500266: function(a) {
        return __gx_check_cache(x(a), !0) ? 1 : 0
    },
    1500328: function(a, b, c, d, e, f, g, l) {
        __gx_async_wget2(x(a), x(b), x(c), d, e, f, g, l)
    },
    1500425: function(a) {
        setAddAsyncMethod(a)
    },
    1500452: function(a, b, c, d) {
        __gx_prepare_cache(x(c)).then(e => {
            console.log("Prepare cache completed" + JSON.stringify(e));
            h.dynCall("vi", a, [b])
        }
        ).catch(e => {
            console.log("Prepare cache error " + e);
            h.dynCall("vi", a, [d])
        }
        )
    },
    1500732: function(a) {
        return __gx_check_cache(x(a), !1) ? 1 : 0
    },
    1500793: function(a, b) {
        g_pWadLoadCallback && g_pWadLoadCallback(a, b)
    },
    1500853: function(a) {
        window.location.replace(x(a))
    },
    1500900: function() {
        this.onFirstFrameRendered && onFirstFrameRendered()
    },
    1500963: function(a, b) {
        this.chrome && this.chrome.runtime && chrome.runtime.sendMessage(x(a), {
            command: x(b)
        })
    },
    1501100: function(a, b, c, d, e) {
        function f(l) {
            if (l.hash) {
                var n = 0;
                (new Uint8Array(l.hash)).every(q => {
                    n = n + q & 255;
                    return !0
                }
                );
                g.ml(n, b)
            }
        }
        const g = {
            ml: h.cwrap("YYSum", "", ["number", "number"])
        };
        this.chrome && this.chrome.runtime && (e = A.subarray(e, e + 20),
        a = x(a),
        chrome.runtime.sendMessage(x(c), {
            command: x(d),
            randomString: a,
            hash: e
        }, f))
    },
    1501660: function() {
        return window.matchMedia("(any-hover: none)").matches || window.matchMedia("(any-hover: hover) and (pointer: coarse)").matches || "undefined" != typeof window.oprt
    },
    1501833: function(a, b, c, d, e, f, g) {
        na = a;
        oa = b;
        ra = c;
        sa = d;
        pa = e;
        qa = f;
        ma = g
    },
    1501996: function(a, b) {
        a = prompt(x(a), x(b));
        b = aa(a) + 1;
        var c = m(b);
        u(a, c, b + 1);
        return c
    },
    1502192: function(a) {
        return confirm(x(a)) ? 1 : 0
    },
    1502239: function(a, b) {
        a = prompt(x(a), x(b));
        b = 1;
        a ? b += aa(a) : a = "";
        var c = m(b);
        u(a, c, b + 1);
        return c
    },
    1502470: function(a) {
        return confirm(x(a)) ? 1 : 0
    },
    1502517: function(a) {
        alert(x(a))
    },
    1502547: function() {
        Nb("/_savedata");
        window.oprt && window.oprt.gameStorage ? Ob(GXMFS, "/_savedata") : Ob(O, "/_savedata");
        Pb(!0, function() {
            kb("FSSyncCompleted", "void")
        })
    },
    1502769: function() {
        Pb(!1, function() {})
    },
    1502807: function() {
        Pb(!1, function() {})
    },
    1502844: function() {
        Pb(!1, function() {})
    },
    1502882: function() {
        return "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? !0 : !1
    },
    1503029: function() {
        return "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1
    },
    1503263: function(a) {
        "undefined" === typeof h.SDL2 && (h.SDL2 = {});
        var b = h.SDL2;
        a ? b.capture = {} : b.audio = {};
        b.Xi || ("undefined" !== typeof AudioContext ? b.Xi = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.Xi = new webkitAudioContext),
        b.Xi && Qb(b.Xi));
        return void 0 === b.Xi ? -1 : 0
    },
    1503756: function() {
        return h.SDL2.Xi.sampleRate
    },
    1503824: function(a, b, c, d) {
        function e() {}
        function f(l) {
            void 0 !== g.capture.Tj && (clearTimeout(g.capture.Tj),
            g.capture.Tj = void 0);
            g.capture.$j = g.Xi.createMediaStreamSource(l);
            g.capture.cj = g.Xi.createScriptProcessor(b, a, 1);
            g.capture.cj.onaudioprocess = function(n) {
                void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0),
                g.capture.qk = n.inputBuffer,
                Rb("vi", c, [d]))
            }
            ;
            g.capture.$j.connect(g.capture.cj);
            g.capture.cj.connect(g.Xi.destination);
            g.capture.stream = l
        }
        var g = h.SDL2;
        g.capture.fk = g.Xi.createBuffer(a, b, g.Xi.sampleRate);
        g.capture.fk.getChannelData(0).fill(0);
        g.capture.Tj = setTimeout(function() {
            g.capture.qk = g.capture.fk;
            Rb("vi", c, [d])
        }, b / g.Xi.sampleRate * 1E3);
        void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
        }).then(f).catch(e) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
            audio: !0,
            video: !1
        }, f, e)
    },
    1505476: function(a, b, c, d) {
        var e = h.SDL2;
        e.audio.cj = e.Xi.createScriptProcessor(b, 0, a);
        e.audio.cj.onaudioprocess = function(f) {
            void 0 !== e && void 0 !== e.audio && (e.audio.Sk = f.outputBuffer,
            Rb("vi", c, [d]))
        }
        ;
        e.audio.cj.connect(e.Xi.destination)
    },
    1505886: function(a, b) {
        for (var c = h.SDL2, d = c.capture.qk.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.capture.qk.getChannelData(e);
            if (f.length != b)
                throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            if (1 == d)
                for (var g = 0; g < b; ++g)
                    db(a + 4 * g, f[g], "float");
            else
                for (g = 0; g < b; ++g)
                    db(a + 4 * (g * d + e), f[g], "float")
        }
    },
    1506491: function(a, b) {
        for (var c = h.SDL2, d = c.audio.Sk.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.audio.Sk.getChannelData(e);
            if (f.length != b)
                throw "Web Audio output buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            for (var g = 0; g < b; ++g)
                f[g] = I[a + (g * d + e << 2) >> 2]
        }
    },
    1506971: function(a) {
        var b = h.SDL2;
        if (a) {
            void 0 !== b.capture.Tj && clearTimeout(b.capture.Tj);
            if (void 0 !== b.capture.stream) {
                a = b.capture.stream.getAudioTracks();
                for (var c = 0; c < a.length; c++)
                    b.capture.stream.removeTrack(a[c]);
                b.capture.stream = void 0
            }
            void 0 !== b.capture.cj && (b.capture.cj.onaudioprocess = function() {}
            ,
            b.capture.cj.disconnect(),
            b.capture.cj = void 0);
            void 0 !== b.capture.$j && (b.capture.$j.disconnect(),
            b.capture.$j = void 0);
            void 0 !== b.capture.fk && (b.capture.fk = void 0);
            b.capture = void 0
        } else
            void 0 != b.audio.cj && (b.audio.cj.disconnect(),
            b.audio.cj = void 0),
            b.audio = void 0;
        void 0 !== b.Xi && void 0 === b.audio && void 0 === b.capture && (b.Xi.close(),
        b.Xi = void 0)
    },
    1508143: function(a, b, c) {
        h.SDL2 || (h.SDL2 = {});
        var d = h.SDL2;
        d.rl !== h.canvas && (d.lj = h.createContext(h.canvas, !1, !0),
        d.rl = h.canvas);
        if (d.w !== a || d.El !== b || d.Hl !== d.lj)
            d.image = d.lj.createImageData(a, b),
            d.w = a,
            d.El = b,
            d.Hl = d.lj;
        a = d.image.data;
        b = c >> 2;
        var e = 0;
        if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
            for (c = a.length; e < c; ) {
                var f = G[b];
                a[e] = f & 255;
                a[e + 1] = f >> 8 & 255;
                a[e + 2] = f >> 16 & 255;
                a[e + 3] = 255;
                b++;
                e += 4
            }
        else if (d.tl !== a && (d.sl = new Int32Array(a.buffer),
        d.ul = new Uint8Array(a.buffer),
        d.tl = a),
        a = d.sl,
        c = a.length,
        a.set(G.subarray(b, b + c)),
        a = d.ul,
        b = 3,
        e = b + 4 * c,
        0 == c % 8)
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0;
        else
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0;
        d.lj.putImageData(d.image, 0, 0);
        return 0
    },
    1509622: function(a, b, c, d, e) {
        var f = document.createElement("canvas");
        f.width = a;
        f.height = b;
        var g = f.getContext("2d");
        a = g.createImageData(a, b);
        b = a.data;
        e >>= 2;
        var l = 0, n;
        if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
            for (n = b.length; l < n; ) {
                var q = G[e];
                b[l] = q & 255;
                b[l + 1] = q >> 8 & 255;
                b[l + 2] = q >> 16 & 255;
                b[l + 3] = q >> 24 & 255;
                e++;
                l += 4
            }
        else
            b = new Int32Array(b.buffer),
            n = b.length,
            b.set(G.subarray(e, e + n));
        g.putImageData(a, 0, 0);
        c = 0 === c && 0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
        d = m(c.length + 1);
        u(c, d, c.length + 1);
        return d
    },
    1510611: function(a) {
        h.canvas && (h.canvas.style.cursor = x(a));
        return 0
    },
    1510704: function() {
        h.canvas && (h.canvas.style.cursor = "none")
    },
    1510773: function() {
        return window.innerWidth
    },
    1510803: function() {
        return window.innerHeight
    }
};
function Tb(a, b, c) {
    a.addEventListener(b, c, {
        once: !0
    })
}
function Qb(a) {
    var b;
    b || (b = [document, document.getElementById("canvas")]);
    ["keydown", "mousedown", "touchstart"].forEach(function(c) {
        b.forEach(function(d) {
            d && Tb(d, c, function() {
                "suspended" === a.state && a.resume()
            })
        })
    })
}
function Ub(a) {
    for (; 0 < a.length; ) {
        var b = a.shift();
        if ("function" == typeof b)
            b(h);
        else {
            var c = b.Bl;
            "number" == typeof c ? void 0 === b.Xj ? P(c)() : P(c)(b.Xj) : c(void 0 === b.Xj ? null : b.Xj)
        }
    }
}
function Vb(a) {
    var b = mb();
    a = a();
    nb(b);
    return a
}
var Wb = [];
function P(a) {
    var b = Wb[a];
    b || (a >= Wb.length && (Wb.length = a + 1),
    Wb[a] = b = vb.get(a));
    return b
}
function Rb(a, b, c) {
    a.includes("j") ? (a = h["dynCall_" + a],
    b = c && c.length ? a.apply(null, [b].concat(c)) : a.call(null, b)) : b = P(b).apply(null, c);
    return b
}
function Xb(a) {
    a instanceof Wa || "unwind" == a || La(1, a)
}
var Yb = (a, b) => {
    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1),
        c++) : c && (a.splice(d, 1),
        c--)
    }
    if (b)
        for (; c; c--)
            a.unshift("..");
    return a
}
  , za = a => {
    var b = "/" === a.charAt(0)
      , c = "/" === a.substr(-1);
    (a = Yb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a
}
  , Zb = a => {
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b)
        return ".";
    b && (b = b.substr(0, b.length - 1));
    return a + b
}
  , $b = a => {
    if ("/" === a)
        return "/";
    a = za(a);
    a = a.replace(/\/$/, "");
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1)
}
;
function ac() {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
        var a = new Uint8Array(1);
        return function() {
            crypto.getRandomValues(a);
            return a[0]
        }
    }
    if (Oa)
        try {
            var b = require("crypto");
            return function() {
                return b.randomBytes(1)[0]
            }
        } catch (c) {}
    return function() {
        cb("randomDevice")
    }
}
function bc() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : cc;
        if ("string" != typeof b)
            throw new TypeError("Arguments to path.resolve must be strings");
        if (!b)
            return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = Yb(a.split("/").filter(d => !!d), !b).join("/");
    return (b ? "/" : "") + a || "."
}
var dc = (a, b) => {
    function c(g) {
        for (var l = 0; l < g.length && "" === g[l]; l++)
            ;
        for (var n = g.length - 1; 0 <= n && "" === g[n]; n--)
            ;
        return l > n ? [] : g.slice(l, n - l + 1)
    }
    a = bc(a).substr(1);
    b = bc(b).substr(1);
    a = c(a.split("/"));
    b = c(b.split("/"));
    for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++)
        if (a[f] !== b[f]) {
            e = f;
            break
        }
    d = [];
    for (f = e; f < a.length; f++)
        d.push("..");
    d = d.concat(b.slice(e));
    return d.join("/")
}
  , ec = [];
function fc(a, b) {
    ec[a] = {
        input: [],
        output: [],
        Oj: b
    };
    gc(a, hc)
}
var hc = {
    open: function(a) {
        var b = ec[a.node.rdev];
        if (!b)
            throw new Q(43);
        a.tty = b;
        a.seekable = !1
    },
    close: function(a) {
        a.tty.Oj.flush(a.tty)
    },
    flush: function(a) {
        a.tty.Oj.flush(a.tty)
    },
    read: function(a, b, c, d) {
        if (!a.tty || !a.tty.Oj.Xk)
            throw new Q(60);
        for (var e = 0, f = 0; f < d; f++) {
            try {
                var g = a.tty.Oj.Xk(a.tty)
            } catch (l) {
                throw new Q(29);
            }
            if (void 0 === g && 0 === e)
                throw new Q(6);
            if (null === g || void 0 === g)
                break;
            e++;
            b[c + f] = g
        }
        e && (a.node.timestamp = Date.now());
        return e
    },
    write: function(a, b, c, d) {
        if (!a.tty || !a.tty.Oj.zk)
            throw new Q(60);
        try {
            for (var e = 0; e < d; e++)
                a.tty.Oj.zk(a.tty, b[c + e])
        } catch (f) {
            throw new Q(29);
        }
        d && (a.node.timestamp = Date.now());
        return e
    }
}
  , jc = {
    Xk: function(a) {
        if (!a.input.length) {
            var b = null;
            if (Oa) {
                var c = Buffer.alloc(256)
                  , d = 0;
                try {
                    d = fs.readSync(process.stdin.fd, c, 0, 256, -1)
                } catch (e) {
                    if (e.toString().includes("EOF"))
                        d = 0;
                    else
                        throw e;
                }
                0 < d ? b = c.slice(0, d).toString("utf-8") : b = null
            } else
                "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "),
                null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(),
                null !== b && (b += "\n"));
            if (!b)
                return null;
            a.input = ic(b, !0)
        }
        return a.input.shift()
    },
    zk: function(a, b) {
        null === b || 10 === b ? (Xa(pb(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    flush: function(a) {
        a.output && 0 < a.output.length && (Xa(pb(a.output, 0)),
        a.output = [])
    }
}
  , kc = {
    zk: function(a, b) {
        null === b || 10 === b ? (k(pb(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    flush: function(a) {
        a.output && 0 < a.output.length && (k(pb(a.output, 0)),
        a.output = [])
    }
}
  , B = {
    nj: null,
    Yi: function() {
        return B.createNode(null, "/", 16895, 0)
    },
    createNode: function(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440))
            throw new Q(63);
        B.nj || (B.nj = {
            dir: {
                node: {
                    mj: B.Ri.mj,
                    dj: B.Ri.dj,
                    lookup: B.Ri.lookup,
                    ak: B.Ri.ak,
                    rename: B.Ri.rename,
                    unlink: B.Ri.unlink,
                    rmdir: B.Ri.rmdir,
                    readdir: B.Ri.readdir,
                    symlink: B.Ri.symlink
                },
                stream: {
                    Hj: B.Ti.Hj
                }
            },
            file: {
                node: {
                    mj: B.Ri.mj,
                    dj: B.Ri.dj
                },
                stream: {
                    Hj: B.Ti.Hj,
                    read: B.Ti.read,
                    write: B.Ti.write,
                    Mk: B.Ti.Mk,
                    cl: B.Ti.cl,
                    el: B.Ti.el
                }
            },
            link: {
                node: {
                    mj: B.Ri.mj,
                    dj: B.Ri.dj,
                    readlink: B.Ri.readlink
                },
                stream: {}
            },
            Rk: {
                node: {
                    mj: B.Ri.mj,
                    dj: B.Ri.dj
                },
                stream: lc
            }
        });
        c = mc(a, b, c, d);
        16384 === (c.mode & 61440) ? (c.Ri = B.nj.dir.node,
        c.Ti = B.nj.dir.stream,
        c.Si = {}) : 32768 === (c.mode & 61440) ? (c.Ri = B.nj.file.node,
        c.Ti = B.nj.file.stream,
        c.Ui = 0,
        c.Si = null) : 40960 === (c.mode & 61440) ? (c.Ri = B.nj.link.node,
        c.Ti = B.nj.link.stream) : 8192 === (c.mode & 61440) && (c.Ri = B.nj.Rk.node,
        c.Ti = B.nj.Rk.stream);
        c.timestamp = Date.now();
        a && (a.Si[b] = c,
        a.timestamp = c.timestamp);
        return c
    },
    Wk: function(a) {
        return a.Si ? a.Si.subarray ? a.Si.subarray(0, a.Ui) : new Uint8Array(a.Si) : new Uint8Array(0)
    },
    Uk: function(a, b) {
        var c = a.Si ? a.Si.length : 0;
        c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
        0 != c && (b = Math.max(b, 256)),
        c = a.Si,
        a.Si = new Uint8Array(b),
        0 < a.Ui && a.Si.set(c.subarray(0, a.Ui), 0))
    },
    Ql: function(a, b) {
        if (a.Ui != b)
            if (0 == b)
                a.Si = null,
                a.Ui = 0;
            else {
                var c = a.Si;
                a.Si = new Uint8Array(b);
                c && a.Si.set(c.subarray(0, Math.min(b, a.Ui)));
                a.Ui = b
            }
    },
    Ri: {
        mj: function(a) {
            var b = {};
            b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
            b.ino = a.id;
            b.mode = a.mode;
            b.nlink = 1;
            b.uid = 0;
            b.gid = 0;
            b.rdev = a.rdev;
            16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Ui : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
            b.atime = new Date(a.timestamp);
            b.mtime = new Date(a.timestamp);
            b.ctime = new Date(a.timestamp);
            b.pl = 4096;
            b.blocks = Math.ceil(b.size / b.pl);
            return b
        },
        dj: function(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            void 0 !== b.size && B.Ql(a, b.size)
        },
        lookup: function() {
            throw nc[44];
        },
        ak: function(a, b, c, d) {
            return B.createNode(a, b, c, d)
        },
        rename: function(a, b, c) {
            if (16384 === (a.mode & 61440)) {
                try {
                    var d = oc(b, c)
                } catch (f) {}
                if (d)
                    for (var e in d.Si)
                        throw new Q(55);
            }
            delete a.parent.Si[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.Si[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b
        },
        unlink: function(a, b) {
            delete a.Si[b];
            a.timestamp = Date.now()
        },
        rmdir: function(a, b) {
            var c = oc(a, b), d;
            for (d in c.Si)
                throw new Q(55);
            delete a.Si[b];
            a.timestamp = Date.now()
        },
        readdir: function(a) {
            var b = [".", ".."], c;
            for (c in a.Si)
                a.Si.hasOwnProperty(c) && b.push(c);
            return b
        },
        symlink: function(a, b, c) {
            a = B.createNode(a, b, 41471, 0);
            a.link = c;
            return a
        },
        readlink: function(a) {
            if (40960 !== (a.mode & 61440))
                throw new Q(28);
            return a.link
        }
    },
    Ti: {
        read: function(a, b, c, d, e) {
            var f = a.node.Si;
            if (e >= a.node.Ui)
                return 0;
            a = Math.min(a.node.Ui - e, d);
            if (8 < a && f.subarray)
                b.set(f.subarray(e, e + a), c);
            else
                for (d = 0; d < a; d++)
                    b[c + d] = f[e + d];
            return a
        },
        write: function(a, b, c, d, e, f) {
            b.buffer === E.buffer && (f = !1);
            if (!d)
                return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.Si || a.Si.subarray)) {
                if (f)
                    return a.Si = b.subarray(c, c + d),
                    a.Ui = d;
                if (0 === a.Ui && 0 === e)
                    return a.Si = b.slice(c, c + d),
                    a.Ui = d;
                if (e + d <= a.Ui)
                    return a.Si.set(b.subarray(c, c + d), e),
                    d
            }
            B.Uk(a, e + d);
            if (a.Si.subarray && b.subarray)
                a.Si.set(b.subarray(c, c + d), e);
            else
                for (f = 0; f < d; f++)
                    a.Si[e + f] = b[c + f];
            a.Ui = Math.max(a.Ui, e + d);
            return d
        },
        Hj: function(a, b, c) {
            1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ui);
            if (0 > b)
                throw new Q(28);
            return b
        },
        Mk: function(a, b, c) {
            B.Uk(a.node, b + c);
            a.node.Ui = Math.max(a.node.Ui, b + c)
        },
        cl: function(a, b, c, d, e, f) {
            if (0 !== b)
                throw new Q(28);
            if (32768 !== (a.node.mode & 61440))
                throw new Q(43);
            a = a.node.Si;
            if (f & 2 || a.buffer !== tb) {
                if (0 < d || d + c < a.length)
                    a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
                d = !0;
                cb();
                c = void 0;
                if (!c)
                    throw new Q(48);
                E.set(a, c)
            } else
                d = !1,
                c = a.byteOffset;
            return {
                Pj: c,
                cm: d
            }
        },
        el: function(a, b, c, d, e) {
            if (32768 !== (a.node.mode & 61440))
                throw new Q(43);
            if (e & 2)
                return 0;
            B.Ti.write(a, b, 0, d, c, !1);
            return 0
        }
    }
};
function pc(a, b, c) {
    var d = "al " + a;
    Ra(a, function(e) {
        e || cb('Loading data file "' + a + '" failed (no arrayBuffer).');
        b(new Uint8Array(e));
        d && Hb(d)
    }, function() {
        if (c)
            c();
        else
            throw 'Loading data file "' + a + '" failed.';
    });
    d && Gb(d)
}
var O = {
    vj: {},
    indexedDB: () => {
        if ("undefined" != typeof indexedDB)
            return indexedDB;
        var a = null;
        "object" == typeof window && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
        a || cb("IDBFS used, but indexedDB not supported");
        return a
    }
    ,
    ll: 21,
    zj: "FILE_DATA",
    Yi: function(a) {
        return B.Yi.apply(null, arguments)
    },
    Hk: (a, b, c) => {
        O.tk(a, (d, e) => {
            if (d)
                return c(d);
            O.uk(a, (f, g) => {
                if (f)
                    return c(f);
                O.Ak(b ? g : e, b ? e : g, c)
            }
            )
        }
        )
    }
    ,
    Ol: () => {
        Object.values(O.vj).forEach(a => a.close());
        O.vj = {}
    }
    ,
    Cl: (a, b) => {
        var c = O.vj[a];
        if (c)
            return b(null, c);
        try {
            var d = O.indexedDB().open(a, O.ll)
        } catch (e) {
            return b(e)
        }
        if (!d)
            return b("Unable to connect to IndexedDB");
        d.onupgradeneeded = e => {
            var f = e.target.result;
            e = e.target.transaction;
            var g;
            f.objectStoreNames.contains(O.zj) ? g = e.objectStore(O.zj) : g = f.createObjectStore(O.zj);
            g.indexNames.contains("timestamp") || g.createIndex("timestamp", "timestamp", {
                unique: !1
            })
        }
        ;
        d.onsuccess = () => {
            c = d.result;
            O.vj[a] = c;
            b(null, c)
        }
        ;
        d.onerror = e => {
            b(this.error);
            e.preventDefault()
        }
    }
    ,
    tk: (a, b) => {
        function c(l) {
            return "." !== l && ".." !== l
        }
        function d(l) {
            return n => za(l + "/" + n)
        }
        var e = {};
        for (a = Aa(a.xj).filter(c).map(d(a.xj)); a.length; ) {
            var f = a.pop();
            try {
                var g = Ba(f)
            } catch (l) {
                return b(l)
            }
            16384 === (g.mode & 61440) && a.push.apply(a, Aa(f).filter(c).map(d(f)));
            e[f] = {
                timestamp: g.mtime
            }
        }
        return b(null, {
            type: "local",
            entries: e
        })
    }
    ,
    uk: (a, b) => {
        var c = {};
        O.Cl(a.xj, (d, e) => {
            if (d)
                return b(d);
            try {
                var f = e.transaction([O.zj], "readonly");
                f.onerror = g => {
                    b(this.error);
                    g.preventDefault()
                }
                ;
                f.objectStore(O.zj).index("timestamp").openKeyCursor().onsuccess = g => {
                    g = g.target.result;
                    if (!g)
                        return b(null, {
                            type: "remote",
                            db: e,
                            entries: c
                        });
                    c[g.primaryKey] = {
                        timestamp: g.key
                    };
                    g.continue()
                }
            } catch (g) {
                return b(g)
            }
        }
        )
    }
    ,
    wk: (a, b) => {
        try {
            var c = D(a).node;
            var d = Ba(a)
        } catch (e) {
            return b(e)
        }
        return 16384 === (d.mode & 61440) ? b(null, {
            timestamp: d.mtime,
            mode: d.mode
        }) : 32768 === (d.mode & 61440) ? (c.Si = B.Wk(c),
        b(null, {
            timestamp: d.mtime,
            mode: d.mode,
            contents: c.Si
        })) : b(Error("node type not supported"))
    }
    ,
    Fk: (a, b, c) => {
        try {
            if (16384 === (b.mode & 61440))
                Ca(a, b.mode);
            else if (32768 === (b.mode & 61440))
                Da(a, b.contents);
            else
                return c(Error("node type not supported"));
            Ea(a, b.mode);
            Fa(a, b.timestamp, b.timestamp)
        } catch (d) {
            return c(d)
        }
        c(null)
    }
    ,
    Ck: (a, b) => {
        try {
            D(a);
            var c = Ba(a);
            16384 === (c.mode & 61440) ? Ga(a) : 32768 === (c.mode & 61440) && Ha(a)
        } catch (d) {
            return b(d)
        }
        b(null)
    }
    ,
    xk: (a, b, c) => {
        a = a.get(b);
        a.onsuccess = d => {
            c(null, d.target.result)
        }
        ;
        a.onerror = d => {
            c(this.error);
            d.preventDefault()
        }
    }
    ,
    Gk: (a, b, c, d) => {
        try {
            var e = a.put(c, b)
        } catch (f) {
            d(f);
            return
        }
        e.onsuccess = () => {
            d(null)
        }
        ;
        e.onerror = f => {
            d(this.error);
            f.preventDefault()
        }
    }
    ,
    Dk: (a, b, c) => {
        a = a.delete(b);
        a.onsuccess = () => {
            c(null)
        }
        ;
        a.onerror = d => {
            c(this.error);
            d.preventDefault()
        }
    }
    ,
    Ak: (a, b, c) => {
        function d(p) {
            if (p && !l)
                return l = !0,
                c(p)
        }
        var e = 0
          , f = [];
        Object.keys(a.entries).forEach(function(p) {
            var t = a.entries[p]
              , v = b.entries[p];
            v && t.timestamp.getTime() == v.timestamp.getTime() || (f.push(p),
            e++)
        });
        var g = [];
        Object.keys(b.entries).forEach(function(p) {
            a.entries[p] || (g.push(p),
            e++)
        });
        if (!e)
            return c(null);
        var l = !1
          , n = ("remote" === a.type ? a.db : b.db).transaction([O.zj], "readwrite")
          , q = n.objectStore(O.zj);
        n.onerror = p => {
            d(this.error);
            p.preventDefault()
        }
        ;
        n.oncomplete = () => {
            l || c(null)
        }
        ;
        f.sort().forEach(p => {
            "local" === b.type ? O.xk(q, p, (t, v) => {
                if (t)
                    return d(t);
                O.Fk(p, v, d)
            }
            ) : O.wk(p, (t, v) => {
                if (t)
                    return d(t);
                O.Gk(q, p, v, d)
            }
            )
        }
        );
        g.sort().reverse().forEach(p => {
            "local" === b.type ? O.Ck(p, d) : O.Dk(q, p, d)
        }
        )
    }
}, qc = null, rc = {}, sc = [], tc = 1, uc = null, cc = "/", vc = !0, Q = null, nc = {}, wc = 0, D = (a, b={}) => {
    a = bc(cc, a);
    if (!a)
        return {
            path: "",
            node: null
        };
    b = Object.assign({
        Vk: !0,
        Bk: 0
    }, b);
    if (8 < b.Bk)
        throw new Q(32);
    a = Yb(a.split("/").filter(g => !!g), !1);
    for (var c = qc, d = "/", e = 0; e < a.length; e++) {
        var f = e === a.length - 1;
        if (f && b.parent)
            break;
        c = oc(c, a[e]);
        d = za(d + "/" + a[e]);
        c.wj && (!f || f && b.Vk) && (c = c.wj.root);
        if (!f || b.Fj)
            for (f = 0; 40960 === (c.mode & 61440); )
                if (c = xc(d),
                d = bc(Zb(d), c),
                c = D(d, {
                    Bk: b.Bk + 1
                }).node,
                40 < f++)
                    throw new Q(32);
    }
    return {
        path: d,
        node: c
    }
}
, yc = a => {
    for (var b; ; ) {
        if (a === a.parent)
            return a = a.Yi.xj,
            b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
        b = b ? a.name + "/" + b : a.name;
        a = a.parent
    }
}
, zc = (a, b) => {
    for (var c = 0, d = 0; d < b.length; d++)
        c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % uc.length
}
, Ac = a => {
    var b = zc(a.parent.id, a.name);
    a.Nj = uc[b];
    uc[b] = a
}
, Bc = a => {
    var b = zc(a.parent.id, a.name);
    if (uc[b] === a)
        uc[b] = a.Nj;
    else
        for (b = uc[b]; b; ) {
            if (b.Nj === a) {
                b.Nj = a.Nj;
                break
            }
            b = b.Nj
        }
}
, oc = (a, b) => {
    var c;
    if (c = (c = Cc(a, "x")) ? c : a.Ri.lookup ? 0 : 2)
        throw new Q(c,a);
    for (c = uc[zc(a.id, b)]; c; c = c.Nj) {
        var d = c.name;
        if (c.parent.id === a.id && d === b)
            return c
    }
    return a.Ri.lookup(a, b)
}
, mc = (a, b, c, d) => {
    a = new Dc(a,b,c,d);
    Ac(a);
    return a
}
, Ec = {
    r: 0,
    "r+": 2,
    w: 577,
    "w+": 578,
    a: 1089,
    "a+": 1090
}, Fc = a => {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}
, Cc = (a, b) => {
    if (vc)
        return 0;
    if (!b.includes("r") || a.mode & 292) {
        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
            return 2
    } else
        return 2;
    return 0
}
, Gc = (a, b) => {
    try {
        return oc(a, b),
        20
    } catch (c) {}
    return Cc(a, "wx")
}
, Hc = (a, b, c) => {
    try {
        var d = oc(a, b)
    } catch (e) {
        return e.Vi
    }
    if (a = Cc(a, "wx"))
        return a;
    if (c) {
        if (16384 !== (d.mode & 61440))
            return 54;
        if (d === d.parent || yc(d) === cc)
            return 10
    } else if (16384 === (d.mode & 61440))
        return 31;
    return 0
}
, Ic = (a=0) => {
    for (; 4096 >= a; a++)
        if (!sc[a])
            return a;
    throw new Q(33);
}
, Kc = (a, b) => {
    Jc || (Jc = function() {
        this.ek = {}
    }
    ,
    Jc.prototype = {
        flags: {
            get: function() {
                return this.ek.flags
            },
            set: function(c) {
                this.ek.flags = c
            }
        },
        position: {
            get lm() {
                return this.ek.position
            },
            set: function(c) {
                this.ek.position = c
            }
        }
    });
    a = Object.assign(new Jc, a);
    b = Ic(b);
    a.fd = b;
    return sc[b] = a
}
, lc = {
    open: a => {
        a.Ti = rc[a.node.rdev].Ti;
        a.Ti.open && a.Ti.open(a)
    }
    ,
    Hj: () => {
        throw new Q(70);
    }
}, gc = (a, b) => {
    rc[a] = {
        Ti: b
    }
}
, Lc = () => {
    for (var a = [], b = [qc.Yi]; b.length; ) {
        var c = b.pop();
        a.push(c);
        b.push.apply(b, c.dl)
    }
    return a
}
, Pb = (a, b) => {
    function c(g) {
        wc--;
        return b(g)
    }
    function d(g) {
        if (g) {
            if (!d.xl)
                return d.xl = !0,
                c(g)
        } else
            ++f >= e.length && c(null)
    }
    "function" == typeof a && (b = a,
    a = !1);
    wc++;
    1 < wc && k("warning: " + wc + " FS.syncfs operations in flight at once, probably just doing extra work");
    var e = Lc()
      , f = 0;
    e.forEach(g => {
        if (!g.type.Hk)
            return d(null);
        g.type.Hk(g, a, d)
    }
    )
}
, Ob = (a, b) => {
    var c = "/" === b
      , d = !b;
    if (c && qc)
        throw new Q(10);
    if (!c && !d) {
        var e = D(b, {
            Vk: !1
        });
        b = e.path;
        e = e.node;
        if (e.wj)
            throw new Q(10);
        if (16384 !== (e.mode & 61440))
            throw new Q(54);
    }
    b = {
        type: a,
        qm: {},
        xj: b,
        dl: []
    };
    a = a.Yi(b);
    a.Yi = b;
    b.root = a;
    c ? qc = a : e && (e.wj = b,
    e.Yi && e.Yi.dl.push(b))
}
, Mc = (a, b, c) => {
    var d = D(a, {
        parent: !0
    }).node;
    a = $b(a);
    if (!a || "." === a || ".." === a)
        throw new Q(28);
    var e = Gc(d, a);
    if (e)
        throw new Q(e);
    if (!d.Ri.ak)
        throw new Q(63);
    return d.Ri.ak(d, a, b, c)
}
, Nb = (a, b) => Mc(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0), Ca = (a, b) => {
    a = a.split("/");
    for (var c = "", d = 0; d < a.length; ++d)
        if (a[d]) {
            c += "/" + a[d];
            try {
                Nb(c, b)
            } catch (e) {
                if (20 != e.Vi)
                    throw e;
            }
        }
}
, Nc = (a, b, c) => {
    "undefined" == typeof c && (c = b,
    b = 438);
    return Mc(a, b | 8192, c)
}
, Oc = (a, b) => {
    if (!bc(a))
        throw new Q(44);
    var c = D(b, {
        parent: !0
    }).node;
    if (!c)
        throw new Q(44);
    b = $b(b);
    var d = Gc(c, b);
    if (d)
        throw new Q(d);
    if (!c.Ri.symlink)
        throw new Q(63);
    c.Ri.symlink(c, b, a)
}
, Ga = a => {
    var b = D(a, {
        parent: !0
    }).node;
    a = $b(a);
    var c = oc(b, a)
      , d = Hc(b, a, !0);
    if (d)
        throw new Q(d);
    if (!b.Ri.rmdir)
        throw new Q(63);
    if (c.wj)
        throw new Q(10);
    b.Ri.rmdir(b, a);
    Bc(c)
}
, Aa = a => {
    a = D(a, {
        Fj: !0
    }).node;
    if (!a.Ri.readdir)
        throw new Q(54);
    return a.Ri.readdir(a)
}
, Ha = a => {
    var b = D(a, {
        parent: !0
    }).node;
    if (!b)
        throw new Q(44);
    a = $b(a);
    var c = oc(b, a)
      , d = Hc(b, a, !1);
    if (d)
        throw new Q(d);
    if (!b.Ri.unlink)
        throw new Q(63);
    if (c.wj)
        throw new Q(10);
    b.Ri.unlink(b, a);
    Bc(c)
}
, xc = a => {
    a = D(a).node;
    if (!a)
        throw new Q(44);
    if (!a.Ri.readlink)
        throw new Q(28);
    return bc(yc(a.parent), a.Ri.readlink(a))
}
, Ba = (a, b) => {
    a = D(a, {
        Fj: !b
    }).node;
    if (!a)
        throw new Q(44);
    if (!a.Ri.mj)
        throw new Q(63);
    return a.Ri.mj(a)
}
, Pc = a => Ba(a, !0), Ea = (a, b) => {
    a = "string" == typeof a ? D(a, {
        Fj: !0
    }).node : a;
    if (!a.Ri.dj)
        throw new Q(63);
    a.Ri.dj(a, {
        mode: b & 4095 | a.mode & -4096,
        timestamp: Date.now()
    })
}
, Fa = (a, b, c) => {
    a = D(a, {
        Fj: !0
    }).node;
    a.Ri.dj(a, {
        timestamp: Math.max(b, c)
    })
}
, Rc = (a, b, c) => {
    if ("" === a)
        throw new Q(44);
    if ("string" == typeof b) {
        var d = Ec[b];
        if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
        b = d
    }
    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" == typeof a)
        var e = a;
    else {
        a = za(a);
        try {
            e = D(a, {
                Fj: !(b & 131072)
            }).node
        } catch (f) {}
    }
    d = !1;
    if (b & 64)
        if (e) {
            if (b & 128)
                throw new Q(20);
        } else
            e = Mc(a, c, 0),
            d = !0;
    if (!e)
        throw new Q(44);
    8192 === (e.mode & 61440) && (b &= -513);
    if (b & 65536 && 16384 !== (e.mode & 61440))
        throw new Q(54);
    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Fc(b) || b & 512) ? 31 : Cc(e, Fc(b)) : 44))
        throw new Q(c);
    if (b & 512) {
        c = e;
        c = "string" == typeof c ? D(c, {
            Fj: !0
        }).node : c;
        if (!c.Ri.dj)
            throw new Q(63);
        if (16384 === (c.mode & 61440))
            throw new Q(31);
        if (32768 !== (c.mode & 61440))
            throw new Q(28);
        if (d = Cc(c, "w"))
            throw new Q(d);
        c.Ri.dj(c, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    e = Kc({
        node: e,
        path: yc(e),
        flags: b,
        seekable: !0,
        position: 0,
        Ti: e.Ti,
        Xl: [],
        error: !1
    });
    e.Ti.open && e.Ti.open(e);
    !h.logReadFiles || b & 1 || (Qc || (Qc = {}),
    a in Qc || (Qc[a] = 1));
    return e
}
, Sc = a => {
    if (null === a.fd)
        throw new Q(8);
    a.Gj && (a.Gj = null);
    try {
        a.Ti.close && a.Ti.close(a)
    } catch (b) {
        throw b;
    } finally {
        sc[a.fd] = null
    }
    a.fd = null
}
, Tc = (a, b, c) => {
    if (null === a.fd)
        throw new Q(8);
    if (!a.seekable || !a.Ti.Hj)
        throw new Q(70);
    if (0 != c && 1 != c && 2 != c)
        throw new Q(28);
    a.position = a.Ti.Hj(a, b, c);
    a.Xl = [];
    return a.position
}
, Uc = (a, b, c, d, e, f) => {
    if (0 > d || 0 > e)
        throw new Q(28);
    if (null === a.fd)
        throw new Q(8);
    if (0 === (a.flags & 2097155))
        throw new Q(8);
    if (16384 === (a.node.mode & 61440))
        throw new Q(31);
    if (!a.Ti.write)
        throw new Q(28);
    a.seekable && a.flags & 1024 && Tc(a, 0, 2);
    var g = "undefined" != typeof e;
    if (!g)
        e = a.position;
    else if (!a.seekable)
        throw new Q(70);
    b = a.Ti.write(a, b, c, d, e, f);
    g || (a.position += b);
    return b
}
, Da = (a, b) => {
    var c = {
        Pk: !0
    };
    c.flags = c.flags || 577;
    a = Rc(a, c.flags, c.mode);
    if ("string" == typeof b) {
        var d = new Uint8Array(aa(b) + 1);
        b = qb(b, d, 0, d.length);
        Uc(a, d, 0, b, void 0, c.Pk)
    } else if (ArrayBuffer.isView(b))
        Uc(a, b, 0, b.byteLength, void 0, c.Pk);
    else
        throw Error("Unsupported data type");
    Sc(a)
}
, Vc = () => {
    Q || (Q = function(a, b) {
        this.node = b;
        this.Rl = function(c) {
            this.Vi = c
        }
        ;
        this.Rl(a);
        this.message = "FS error"
    }
    ,
    Q.prototype = Error(),
    Q.prototype.constructor = Q,
    [44].forEach(a => {
        nc[a] = new Q(a);
        nc[a].stack = "<generic error, no stack>"
    }
    ))
}
, Wc, Xc = (a, b) => {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c
}
, Yc = (a, b) => {
    a = "string" == typeof a ? a : yc(a);
    for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
            var d = za(a + "/" + c);
            try {
                Nb(d)
            } catch (e) {}
            a = d
        }
    }
    return d
}
, Zc = (a, b, c, d) => {
    a = za(("string" == typeof a ? a : yc(a)) + "/" + b);
    c = Xc(c, d);
    return Mc(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
}
, $c = (a, b, c, d, e, f) => {
    var g = b;
    a && (a = "string" == typeof a ? a : yc(a),
    g = b ? za(a + "/" + b) : a);
    a = Xc(d, e);
    g = Mc(g, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
    if (c) {
        if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d)
                b[d] = c.charCodeAt(d);
            c = b
        }
        Ea(g, a | 146);
        b = Rc(g, 577);
        Uc(b, c, 0, c.length, 0, f);
        Sc(b);
        Ea(g, a)
    }
    return g
}
, ad = (a, b, c, d) => {
    a = za(("string" == typeof a ? a : yc(a)) + "/" + b);
    b = Xc(!!c, !!d);
    ad.al || (ad.al = 64);
    var e = ad.al++ << 8 | 0;
    gc(e, {
        open: f => {
            f.seekable = !1
        }
        ,
        close: () => {
            d && d.buffer && d.buffer.length && d(10)
        }
        ,
        read: (f, g, l, n) => {
            for (var q = 0, p = 0; p < n; p++) {
                try {
                    var t = c()
                } catch (v) {
                    throw new Q(29);
                }
                if (void 0 === t && 0 === q)
                    throw new Q(6);
                if (null === t || void 0 === t)
                    break;
                q++;
                g[l + p] = t
            }
            q && (f.node.timestamp = Date.now());
            return q
        }
        ,
        write: (f, g, l, n) => {
            for (var q = 0; q < n; q++)
                try {
                    d(g[l + q])
                } catch (p) {
                    throw new Q(29);
                }
            n && (f.node.timestamp = Date.now());
            return q
        }
    });
    return Nc(a, b, e)
}
, bd = a => {
    if (!(a.Kl || a.Ll || a.link || a.Si)) {
        if ("undefined" != typeof XMLHttpRequest)
            throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (Qa)
            try {
                a.Si = ic(Qa(a.url), !0),
                a.Ui = a.Si.length
            } catch (b) {
                throw new Q(29);
            }
        else
            throw Error("Cannot load without read() or XMLHttpRequest.");
    }
}
, cd = (a, b, c, d, e) => {
    function f() {
        this.vk = !1;
        this.uj = []
    }
    f.prototype.get = function(p) {
        if (!(p > this.length - 1 || 0 > p)) {
            var t = p % this.chunkSize;
            return this.Yk(p / this.chunkSize | 0)[t]
        }
    }
    ;
    f.prototype.Qi = function(p) {
        this.Yk = p
    }
    ;
    f.prototype.Ok = function() {
        var p = new XMLHttpRequest;
        p.open("HEAD", c, !1);
        p.send(null);
        if (!(200 <= p.status && 300 > p.status || 304 === p.status))
            throw Error("Couldn't load " + c + ". Status: " + p.status);
        var t = Number(p.getResponseHeader("Content-length")), v, r = (v = p.getResponseHeader("Accept-Ranges")) && "bytes" === v;
        p = (v = p.getResponseHeader("Content-Encoding")) && "gzip" === v;
        var C = 1048576;
        r || (C = t);
        var y = this;
        y.Qi(F => {
            var K = F * C
              , M = (F + 1) * C - 1;
            M = Math.min(M, t - 1);
            if ("undefined" == typeof y.uj[F]) {
                var z = y.uj;
                if (K > M)
                    throw Error("invalid range (" + K + ", " + M + ") or no bytes requested!");
                if (M > t - 1)
                    throw Error("only " + t + " bytes available! programmer error!");
                var L = new XMLHttpRequest;
                L.open("GET", c, !1);
                t !== C && L.setRequestHeader("Range", "bytes=" + K + "-" + M);
                L.responseType = "arraybuffer";
                L.overrideMimeType && L.overrideMimeType("text/plain; charset=x-user-defined");
                L.send(null);
                if (!(200 <= L.status && 300 > L.status || 304 === L.status))
                    throw Error("Couldn't load " + c + ". Status: " + L.status);
                K = void 0 !== L.response ? new Uint8Array(L.response || []) : ic(L.responseText || "", !0);
                z[F] = K
            }
            if ("undefined" == typeof y.uj[F])
                throw Error("doXHR failed!");
            return y.uj[F]
        }
        );
        if (p || !t)
            C = t = 1,
            C = t = this.Yk(0).length,
            Xa("LazyFiles on gzip forces download of the whole file when length is accessed");
        this.ol = t;
        this.nl = C;
        this.vk = !0
    }
    ;
    if ("undefined" != typeof XMLHttpRequest) {
        if (!Na)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var g = new f;
        Object.defineProperties(g, {
            length: {
                get: function() {
                    this.vk || this.Ok();
                    return this.ol
                }
            },
            chunkSize: {
                get: function() {
                    this.vk || this.Ok();
                    return this.nl
                }
            }
        });
        var l = void 0
    } else
        l = c,
        g = void 0;
    var n = Zc(a, b, d, e);
    g ? n.Si = g : l && (n.Si = null,
    n.url = l);
    Object.defineProperties(n, {
        Ui: {
            get: function() {
                return this.Si.length
            }
        }
    });
    var q = {};
    Object.keys(n.Ti).forEach(p => {
        var t = n.Ti[p];
        q[p] = function() {
            bd(n);
            return t.apply(null, arguments)
        }
    }
    );
    q.read = (p, t, v, r, C) => {
        bd(n);
        p = p.node.Si;
        if (C >= p.length)
            return 0;
        r = Math.min(p.length - C, r);
        if (p.slice)
            for (var y = 0; y < r; y++)
                t[v + y] = p[C + y];
        else
            for (y = 0; y < r; y++)
                t[v + y] = p.get(C + y);
        return r
    }
    ;
    n.Ti = q;
    return n
}
, ed = (a, b, c, d, e, f, g, l, n, q) => {
    function p(r) {
        function C(y) {
            q && q();
            l || $c(a, b, y, d, e, n);
            f && f();
            Hb(v)
        }
        dd(r, t, C, () => {
            g && g();
            Hb(v)
        }
        ) || C(r)
    }
    var t = b ? bc(za(a + "/" + b)) : a
      , v = "cp " + t;
    Gb(v);
    "string" == typeof c ? pc(c, r => p(r), g) : p(c)
}
, fd = {}, Jc, Qc;
function gd(a, b, c) {
    if ("/" === b.charAt(0))
        return b;
    if (-100 === a)
        a = cc;
    else {
        a = sc[a];
        if (!a)
            throw new Q(8);
        a = a.path
    }
    if (0 == b.length) {
        if (!c)
            throw new Q(44);
        return a
    }
    return za(a + "/" + b)
}
function hd(a, b, c) {
    try {
        var d = a(b)
    } catch (e) {
        if (e && e.node && za(b) !== za(yc(e.node)))
            return -54;
        throw e;
    }
    G[c >> 2] = d.dev;
    G[c + 4 >> 2] = 0;
    G[c + 8 >> 2] = d.ino;
    G[c + 12 >> 2] = d.mode;
    G[c + 16 >> 2] = d.nlink;
    G[c + 20 >> 2] = d.uid;
    G[c + 24 >> 2] = d.gid;
    G[c + 28 >> 2] = d.rdev;
    G[c + 32 >> 2] = 0;
    fb = [d.size >>> 0, (H = d.size,
    1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
    G[c + 40 >> 2] = fb[0];
    G[c + 44 >> 2] = fb[1];
    G[c + 48 >> 2] = 4096;
    G[c + 52 >> 2] = d.blocks;
    G[c + 56 >> 2] = d.atime.getTime() / 1E3 | 0;
    G[c + 60 >> 2] = 0;
    G[c + 64 >> 2] = d.mtime.getTime() / 1E3 | 0;
    G[c + 68 >> 2] = 0;
    G[c + 72 >> 2] = d.ctime.getTime() / 1E3 | 0;
    G[c + 76 >> 2] = 0;
    fb = [d.ino >>> 0, (H = d.ino,
    1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
    G[c + 80 >> 2] = fb[0];
    G[c + 84 >> 2] = fb[1];
    return 0
}
var jd = void 0;
function kd() {
    jd += 4;
    return G[jd - 4 >> 2]
}
function ld(a) {
    a = sc[a];
    if (!a)
        throw new Q(8);
    return a
}
function md(a, b, c) {
    function d(n) {
        return (n = n.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? n[1] : "GMT"
    }
    var e = (new Date).getFullYear()
      , f = new Date(e,0,1)
      , g = new Date(e,6,1);
    e = f.getTimezoneOffset();
    var l = g.getTimezoneOffset();
    G[a >> 2] = 60 * Math.max(e, l);
    G[b >> 2] = Number(e != l);
    a = d(f);
    b = d(g);
    a = rb(a);
    b = rb(b);
    l < e ? (G[c >> 2] = a,
    G[c + 4 >> 2] = b) : (G[c >> 2] = b,
    G[c + 4 >> 2] = a)
}
function nd(a, b, c) {
    nd.ql || (nd.ql = !0,
    md(a, b, c))
}
function od(a, b) {
    pd = a;
    qd = b;
    if (rd)
        if (sd || (sd = !0),
        0 == a)
            td = function() {
                var d = Math.max(0, ud + b - vd()) | 0;
                setTimeout(wd, d)
            }
            ;
        else if (1 == a)
            td = function() {
                xd(wd)
            }
            ;
        else if (2 == a) {
            if ("undefined" == typeof setImmediate) {
                var c = [];
                addEventListener("message", function(d) {
                    if ("setimmediate" === d.data || "setimmediate" === d.data.target)
                        d.stopPropagation(),
                        c.shift()()
                }, !0);
                setImmediate = function(d) {
                    c.push(d);
                    Na ? (void 0 === h.setImmediates && (h.setImmediates = []),
                    h.setImmediates.push(d),
                    postMessage({
                        target: "setimmediate"
                    })) : postMessage("setimmediate", "*")
                }
            }
            td = function() {
                setImmediate(wd)
            }
        }
}
var vd;
vd = Oa ? () => {
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6
}
: () => performance.now();
function yd(a) {
    !rd || cb("emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    rd = a;
    var b = zd;
    sd = !1;
    wd = function() {
        if (!jb)
            if (0 < Ad.length) {
                var c = Date.now()
                  , d = Ad.shift();
                d.Bl(d.Xj);
                if (Bd) {
                    var e = Bd
                      , f = 0 == e % 1 ? e - 1 : Math.floor(e);
                    Bd = d.hm ? f : (8 * e + (f + .5)) / 9
                }
                Xa('main loop blocker "' + d.name + '" took ' + (Date.now() - c) + " ms");
                h.setStatus && (c = h.statusMessage || "Please wait...",
                d = Bd,
                e = Cd.jm,
                d ? d < e ? h.setStatus(c + " (" + (e - d) + "/" + e + ")") : h.setStatus(c) : h.setStatus(""));
                b < zd || setTimeout(wd, 0)
            } else if (!(b < zd))
                if (Dd = Dd + 1 | 0,
                1 == pd && 1 < qd && 0 != Dd % qd)
                    td();
                else {
                    0 == pd && (ud = vd());
                    if (S)
                        for (c = S.Rj,
                        S.Rj = S.Vj,
                        S.Vj = c,
                        c = S.yj,
                        S.yj = S.gk,
                        S.gk = c,
                        c = Ed(2097152),
                        d = 0; d <= c; ++d)
                            S.yj[d] = 0;
                    jb || h.preMainLoop && !1 === h.preMainLoop() || (Fd(a),
                    h.postMainLoop && h.postMainLoop());
                    b < zd || ("object" == typeof SDL && SDL.audio && SDL.audio.Nl && SDL.audio.Nl(),
                    td())
                }
    }
}
function Fd(a, b) {
    if (!jb)
        if (b)
            a();
        else
            try {
                a()
            } catch (c) {
                Xb(c)
            }
}
function Gd(a) {
    setTimeout(function() {
        Fd(a)
    }, 1E4)
}
var sd = !1, td = null, zd = 0, rd = null, pd = 0, qd = 0, Dd = 0, Ad = [], Cd = {}, ud, wd, Bd, Hd = !1, Id = !1, Jd = [];
function Kd() {
    function a() {
        Id = document.pointerLockElement === h.canvas || document.mozPointerLockElement === h.canvas || document.webkitPointerLockElement === h.canvas || document.msPointerLockElement === h.canvas
    }
    h.preloadPlugins || (h.preloadPlugins = []);
    if (!Ld) {
        Ld = !0;
        try {
            Md = !0
        } catch (c) {
            Md = !1,
            Xa("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Nd = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Md ? null : Xa("warning: no BlobBuilder");
        Od = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
        h.fl || "undefined" != typeof Od || (Xa("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
        h.fl = !0);
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.fl && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function(c, d, e, f) {
                var g = null;
                if (Md)
                    try {
                        g = new Blob([c],{
                            type: Pd(d)
                        }),
                        g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer],{
                            type: Pd(d)
                        }))
                    } catch (q) {
                        Ya("Blob constructor present but fails: " + q + "; falling back to blob builder")
                    }
                g || (g = new Nd,
                g.append((new Uint8Array(c)).buffer),
                g = g.getBlob());
                var l = Od.createObjectURL(g)
                  , n = new Image;
                n.onload = () => {
                    n.complete || cb("Image " + d + " could not be decoded");
                    var q = document.createElement("canvas");
                    q.width = n.width;
                    q.height = n.height;
                    q.getContext("2d").drawImage(n, 0, 0);
                    Od.revokeObjectURL(l);
                    e && e(c)
                }
                ;
                n.onerror = () => {
                    Xa("Image " + l + " could not be decoded");
                    f && f()
                }
                ;
                n.src = l
            }
        });
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.pm && c.substr(-4)in {
                    ".ogg": 1,
                    ".wav": 1,
                    ".mp3": 1
                }
            },
            handle: function(c, d, e, f) {
                function g() {
                    n || (n = !0,
                    e && e(c))
                }
                function l() {
                    n || (n = !0,
                    new Audio,
                    f && f())
                }
                var n = !1;
                if (Md) {
                    try {
                        var q = new Blob([c],{
                            type: Pd(d)
                        })
                    } catch (t) {
                        return l()
                    }
                    q = Od.createObjectURL(q);
                    var p = new Audio;
                    p.addEventListener("canplaythrough", function() {
                        g(p)
                    }, !1);
                    p.onerror = function() {
                        if (!n) {
                            Xa("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                            for (var t = "", v = 0, r = 0, C = 0; C < c.length; C++)
                                for (v = v << 8 | c[C],
                                r += 8; 6 <= r; ) {
                                    var y = v >> r - 6 & 63;
                                    r -= 6;
                                    t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[y]
                                }
                            2 == r ? (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(v & 3) << 4],
                            t += "==") : 4 == r && (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(v & 15) << 2],
                            t += "=");
                            p.src = "data:audio/x-" + d.substr(-3) + ";base64," + t;
                            g(p)
                        }
                    }
                    ;
                    p.src = q;
                    Gd(function() {
                        g(p)
                    })
                } else
                    return l()
            }
        });
        var b = h.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {}
        ,
        b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}
        ,
        b.exitPointerLock = b.exitPointerLock.bind(document),
        document.addEventListener("pointerlockchange", a, !1),
        document.addEventListener("mozpointerlockchange", a, !1),
        document.addEventListener("webkitpointerlockchange", a, !1),
        document.addEventListener("mspointerlockchange", a, !1),
        h.elementPointerLock && b.addEventListener("click", function(c) {
            !Id && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(),
            c.preventDefault())
        }, !1))
    }
}
function dd(a, b, c, d) {
    Kd();
    var e = !1;
    h.preloadPlugins.forEach(function(f) {
        !e && f.canHandle(b) && (f.handle(a, b, c, d),
        e = !0)
    });
    return e
}
function Qd(a, b, c, d) {
    if (b && h.lj && a == h.canvas)
        return h.lj;
    var e;
    if (b) {
        var f = {
            antialias: !1,
            alpha: !1,
            Zj: "undefined" != typeof WebGL2RenderingContext ? 2 : 1
        };
        if (d)
            for (var g in d)
                f[g] = d[g];
        if ("undefined" != typeof Rd && (e = Sd(a, f)))
            var l = Td[e].jj
    } else
        l = a.getContext("2d");
    if (!l)
        return null;
    c && (b || "undefined" == typeof T || cb("cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
    h.lj = l,
    b && Ud(e),
    h.Yl = b,
    Jd.forEach(function(n) {
        n()
    }),
    Kd());
    return l
}
var Vd = !1
  , Wd = void 0
  , Xd = void 0;
function Yd(a, b) {
    function c() {
        Hd = !1;
        var f = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = Zd,
        Wd && d.requestPointerLock(),
        Hd = !0,
        Xd ? ("undefined" != typeof SDL && (G[SDL.screen >> 2] = N[SDL.screen >> 2] | 8388608),
        $d(h.canvas),
        ae()) : $d(d)) : (f.parentNode.insertBefore(d, f),
        f.parentNode.removeChild(f),
        Xd ? ("undefined" != typeof SDL && (G[SDL.screen >> 2] = N[SDL.screen >> 2] & -8388609),
        $d(h.canvas),
        ae()) : $d(d));
        if (h.onFullScreen)
            h.onFullScreen(Hd);
        if (h.onFullscreen)
            h.onFullscreen(Hd)
    }
    Wd = a;
    Xd = b;
    "undefined" == typeof Wd && (Wd = !0);
    "undefined" == typeof Xd && (Xd = !1);
    var d = h.canvas;
    Vd || (Vd = !0,
    document.addEventListener("fullscreenchange", c, !1),
    document.addEventListener("mozfullscreenchange", c, !1),
    document.addEventListener("webkitfullscreenchange", c, !1),
    document.addEventListener("MSFullscreenChange", c, !1));
    var e = document.createElement("div");
    d.parentNode.insertBefore(e, d);
    e.appendChild(d);
    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? function() {
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    }
    : null) || (e.webkitRequestFullScreen ? function() {
        e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    }
    : null);
    e.requestFullscreen()
}
function Zd() {
    if (!Hd)
        return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}
    ).apply(document, []);
    return !0
}
var be = 0;
function xd(a) {
    if ("function" == typeof requestAnimationFrame)
        requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === be)
            be = b + 1E3 / 60;
        else
            for (; b + 2 >= be; )
                be += 1E3 / 60;
        setTimeout(a, Math.max(be - b, 0))
    }
}
function Pd(a) {
    return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
    }[a.substr(a.lastIndexOf(".") + 1)]
}
var ce = [];
function ae() {
    var a = h.canvas;
    ce.forEach(function(b) {
        b(a.width, a.height)
    })
}
function $d(a, b, c) {
    b && c ? (a.am = b,
    a.Gl = c) : (b = a.am,
    c = a.Gl);
    var d = b
      , e = c;
    h.forcedAspectRatio && 0 < h.forcedAspectRatio && (d / e < h.forcedAspectRatio ? d = Math.round(e * h.forcedAspectRatio) : e = Math.round(d / h.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var f = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * f);
        e = Math.round(e * f)
    }
    Xd ? (a.width != d && (a.width = d),
    a.height != e && (a.height = e),
    "undefined" != typeof a.style && (a.style.removeProperty("width"),
    a.style.removeProperty("height"))) : (a.width != b && (a.width = b),
    a.height != c && (a.height = c),
    "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"),
    a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"),
    a.style.removeProperty("height"))))
}
var Ld, Md, Nd, Od, U = 12288, de = !1, ee = 0, fe = 0, ge = 0, he = {
    alpha: !1,
    depth: !1,
    stencil: !1,
    antialias: !1
}, ie = {}, je;
function ke(a) {
    var b = a.getExtension("ANGLE_instanced_arrays");
    b && (a.vertexAttribDivisor = function(c, d) {
        b.vertexAttribDivisorANGLE(c, d)
    }
    ,
    a.drawArraysInstanced = function(c, d, e, f) {
        b.drawArraysInstancedANGLE(c, d, e, f)
    }
    ,
    a.drawElementsInstanced = function(c, d, e, f, g) {
        b.drawElementsInstancedANGLE(c, d, e, f, g)
    }
    )
}
function le(a) {
    var b = a.getExtension("OES_vertex_array_object");
    b && (a.createVertexArray = function() {
        return b.createVertexArrayOES()
    }
    ,
    a.deleteVertexArray = function(c) {
        b.deleteVertexArrayOES(c)
    }
    ,
    a.bindVertexArray = function(c) {
        b.bindVertexArrayOES(c)
    }
    ,
    a.isVertexArray = function(c) {
        return b.isVertexArrayOES(c)
    }
    )
}
function me(a) {
    var b = a.getExtension("WEBGL_draw_buffers");
    b && (a.drawBuffers = function(c, d) {
        b.drawBuffersWEBGL(c, d)
    }
    )
}
var ne = 1
  , oe = []
  , pe = {}
  , V = []
  , qe = []
  , re = []
  , se = []
  , W = []
  , te = []
  , Td = []
  , ue = []
  , ve = []
  , we = []
  , xe = []
  , ye = [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8]
  , ze = {}
  , Ae = {}
  , Be = 4;
function X(a) {
    Ce || (Ce = a)
}
function De(a) {
    for (var b = ne++, c = a.length; c < b; c++)
        a[c] = null;
    return b
}
function Ed(a) {
    return 32 - Math.clz32(0 === a ? 0 : a - 1)
}
function Ee(a) {
    a = Ed(a);
    var b = S.Qj[a];
    if (b)
        return b;
    b = T.getParameter(34965);
    S.Qj[a] = T.createBuffer();
    T.bindBuffer(34963, S.Qj[a]);
    T.bufferData(34963, 1 << a, 35048);
    T.bindBuffer(34963, b);
    return S.Qj[a]
}
function Fe(a, b, c) {
    for (var d = "", e = 0; e < a; ++e) {
        var f = c ? G[c + 4 * e >> 2] : -1;
        d += x(G[b + 4 * e >> 2], 0 > f ? void 0 : f)
    }
    return d
}
function Ge(a) {
    He = !1;
    for (var b = 0; b < S.bl; ++b) {
        var c = S.hj[b];
        if (c.Cj && c.enabled) {
            He = !0;
            var d = c.Uj;
            d = 0 < d ? a * d : c.size * ye[c.type - 5120] * a;
            var e = Ed(d);
            var f = S.Rj[e]
              , g = S.yj[e];
            S.yj[e] = S.yj[e] + 1 & 63;
            var l = f[g];
            l ? e = l : (l = T.getParameter(34964),
            f[g] = T.createBuffer(),
            T.bindBuffer(34962, f[g]),
            T.bufferData(34962, 1 << e, 35048),
            T.bindBuffer(34962, l),
            e = f[g]);
            T.bindBuffer(34962, e);
            T.bufferSubData(34962, 0, A.subarray(c.Pj, c.Pj + d));
            c.lk.call(T, b, c.size, c.type, c.ck, c.Uj, 0)
        }
    }
}
function Ie() {
    He && T.bindBuffer(34962, oe[T.qj])
}
function Sd(a, b) {
    a.nk || (a.nk = a.getContext,
    a.getContext = function(d, e) {
        e = a.nk(d, e);
        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
    }
    );
    var c = 1 < b.Zj ? a.getContext("webgl2", b) : a.getContext("webgl", b);
    return c ? Je(c, b) : 0
}
function Je(a, b) {
    var c = De(Td)
      , d = {
        Fl: c,
        attributes: b,
        version: b.Zj,
        jj: a
    };
    a.canvas && (a.canvas.Sj = d);
    Td[c] = d;
    ("undefined" == typeof b.rk || b.rk) && Ke(d);
    d.bl = d.jj.getParameter(34921);
    d.hj = [];
    for (a = 0; a < d.bl; a++)
        d.hj[a] = {
            enabled: !1,
            Cj: !1,
            size: 0,
            type: 0,
            ck: 0,
            Uj: 0,
            Pj: 0,
            lk: null
        };
    a = Ed(2097152);
    d.yj = [];
    d.gk = [];
    d.yj.length = d.gk.length = a + 1;
    d.Rj = [];
    d.Vj = [];
    d.Rj.length = d.Vj.length = a + 1;
    d.Qj = [];
    d.Qj.length = a + 1;
    for (b = 0; b <= a; ++b) {
        d.Qj[b] = null;
        d.yj[b] = d.gk[b] = 0;
        d.Rj[b] = [];
        d.Vj[b] = [];
        var e = d.Rj[b]
          , f = d.Vj[b];
        e.length = f.length = 64;
        for (var g = 0; 64 > g; ++g)
            e[g] = f[g] = null
    }
    return c
}
function Ud(a) {
    S = Td[a];
    h.lj = T = S && S.jj;
    return !(a && !T)
}
function Ke(a) {
    a || (a = S);
    if (!a.Il) {
        a.Il = !0;
        var b = a.jj;
        ke(b);
        le(b);
        me(b);
        b.im = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
        b.nm = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
        2 <= a.version && (b.bj = b.getExtension("EXT_disjoint_timer_query_webgl2"));
        if (2 > a.version || !b.bj)
            b.bj = b.getExtension("EXT_disjoint_timer_query");
        b.om = b.getExtension("WEBGL_multi_draw");
        (b.getSupportedExtensions() || []).forEach(function(c) {
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
        })
    }
}
var Rd = {}, Ce, S, He, Le = [];
function Me(a, b, c) {
    Le.length = 0;
    var d;
    for (c >>= 2; d = A[b++]; )
        (d = 105 > d) && c & 1 && c++,
        Le.push(d ? gb[c++ >> 1] : G[c]),
        ++c;
    return Sb[a].apply(null, Le)
}
var Ne = {}
  , Oe = 0;
function Pe() {
    var a = Oe;
    Oe++;
    return a
}
var Qe = 0;
function Re() {
    for (var a = Se.length - 1; 0 <= a; --a)
        Te(a);
    Se = [];
    Ue = []
}
var Ue = [];
function Ve(a, b, c) {
    function d(g, l) {
        if (g.length != l.length)
            return !1;
        for (var n in g)
            if (g[n] != l[n])
                return !1;
        return !0
    }
    for (var e in Ue) {
        var f = Ue[e];
        if (f.Ik == a && d(f.Nk, c))
            return
    }
    Ue.push({
        Ik: a,
        hl: b,
        Nk: c
    });
    Ue.sort(function(g, l) {
        return g.hl < l.hl
    })
}
function We(a) {
    for (var b = 0; b < Ue.length; ++b)
        Ue[b].Ik == a && (Ue.splice(b, 1),
        --b)
}
function Xe() {
    if (Qe && Ye.Bj)
        for (var a = 0; a < Ue.length; ++a) {
            var b = Ue[a];
            Ue.splice(a, 1);
            --a;
            b.Ik.apply(null, b.Nk)
        }
}
var Se = [];
function Te(a) {
    var b = Se[a];
    b.target.removeEventListener(b.$i, b.yl, b.ej);
    Se.splice(a, 1)
}
function Ze(a) {
    function b(d) {
        ++Qe;
        Ye = a;
        Xe();
        a.gj(d);
        Xe();
        --Qe
    }
    if (a.fj)
        a.yl = b,
        a.target.addEventListener(a.$i, b, a.ej),
        Se.push(a),
        $e || (Ab.push(Re),
        $e = !0);
    else
        for (var c = 0; c < Se.length; ++c)
            Se[c].target == a.target && Se[c].$i == a.$i && Te(c--)
}
function af(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
}
function bf() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var cf = {}, $e, Ye, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf = {}, rf = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];
function sf(a) {
    a = 2 < a ? x(a) : a;
    return rf[a] || ("undefined" != typeof document ? document.querySelector(a) : void 0)
}
function tf(a, b, c) {
    a = sf(a);
    if (!a)
        return -4;
    G[b >> 2] = a.width;
    G[c >> 2] = a.height
}
function uf(a) {
    return Vb(function() {
        var b = lb(8)
          , c = b + 4
          , d = lb(a.id.length + 1);
        u(a.id, d, a.id.length + 1);
        tf(d, b, c);
        return [G[b >> 2], G[c >> 2]]
    })
}
function vf(a, b, c) {
    a = sf(a);
    if (!a)
        return -4;
    a.width = b;
    a.height = c;
    return 0
}
function wf(a, b, c) {
    a.gm ? Vb(function() {
        var d = lb(a.id.length + 1);
        u(a.id, d, a.id.length + 1);
        vf(d, b, c)
    }) : (a.width = b,
    a.height = c)
}
function xf(a) {
    function b() {
        document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b),
        document.removeEventListener("webkitfullscreenchange", b),
        wf(a, d, e),
        a.style.width = f,
        a.style.height = g,
        a.style.backgroundColor = l,
        n || (document.body.style.backgroundColor = "white"),
        document.body.style.backgroundColor = n,
        a.style.paddingLeft = q,
        a.style.paddingRight = p,
        a.style.paddingTop = t,
        a.style.paddingBottom = v,
        a.style.marginLeft = r,
        a.style.marginRight = C,
        a.style.marginTop = y,
        a.style.marginBottom = F,
        document.body.style.margin = K,
        document.documentElement.style.overflow = M,
        document.body.scroll = z,
        a.style.Zk = L,
        a.Sj && a.Sj.jj.viewport(0, 0, d, e),
        qf.Yj && P(qf.Yj)(37, 0, qf.Qk))
    }
    var c = uf(a)
      , d = c[0]
      , e = c[1]
      , f = a.style.width
      , g = a.style.height
      , l = a.style.backgroundColor
      , n = document.body.style.backgroundColor
      , q = a.style.paddingLeft
      , p = a.style.paddingRight
      , t = a.style.paddingTop
      , v = a.style.paddingBottom
      , r = a.style.marginLeft
      , C = a.style.marginRight
      , y = a.style.marginTop
      , F = a.style.marginBottom
      , K = document.body.style.margin
      , M = document.documentElement.style.overflow
      , z = document.body.scroll
      , L = a.style.Zk;
    document.addEventListener("fullscreenchange", b);
    document.addEventListener("webkitfullscreenchange", b)
}
function yf(a, b, c) {
    a.style.paddingLeft = a.style.paddingRight = c + "px";
    a.style.paddingTop = a.style.paddingBottom = b + "px"
}
function zf(a) {
    return 0 > rf.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    }
}
function Af(a, b) {
    if (0 != b.Ek || 0 != b.pk) {
        xf(a);
        var c = b.Sl ? innerWidth : screen.width
          , d = b.Sl ? innerHeight : screen.height
          , e = zf(a)
          , f = e.width;
        e = e.height;
        var g = uf(a)
          , l = g[0];
        g = g[1];
        3 == b.Ek ? (yf(a, (d - e) / 2, (c - f) / 2),
        c = f,
        d = e) : 2 == b.Ek && (c * g < l * d ? (f = g * c / l,
        yf(a, (d - f) / 2, 0),
        d = f) : (f = l * d / g,
        yf(a, 0, (c - f) / 2),
        c = f));
        a.style.backgroundColor || (a.style.backgroundColor = "black");
        document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
        a.style.width = c + "px";
        a.style.height = d + "px";
        1 == b.Al && (a.style.Zk = "pixelated");
        f = 2 == b.pk ? devicePixelRatio : 1;
        0 != b.pk && (c = c * f | 0,
        d = d * f | 0,
        wf(a, c, d),
        a.Sj && a.Sj.jj.viewport(0, 0, c, d))
    }
    if (a.requestFullscreen)
        a.requestFullscreen();
    else if (a.webkitRequestFullscreen)
        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    else
        return bf() ? -3 : -1;
    qf = b;
    b.Yj && P(b.Yj)(37, 0, b.Qk);
    return 0
}
function Bf(a) {
    if (a.requestPointerLock)
        a.requestPointerLock();
    else if (a.bk)
        a.bk();
    else
        return document.body.requestPointerLock || document.body.bk ? -3 : -1;
    return 0
}
function Cf(a, b) {
    gb[a >> 3] = b.timestamp;
    for (var c = 0; c < b.axes.length; ++c)
        gb[a + 8 * c + 16 >> 3] = b.axes[c];
    for (c = 0; c < b.buttons.length; ++c)
        gb[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
    for (c = 0; c < b.buttons.length; ++c)
        G[a + 4 * c + 1040 >> 2] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
    G[a + 1296 >> 2] = b.connected;
    G[a + 1300 >> 2] = b.index;
    G[a + 8 >> 2] = b.axes.length;
    G[a + 12 >> 2] = b.buttons.length;
    u(b.id, a + 1304, 64);
    u(b.mapping, a + 1368, 64)
}
var Df = [];
function Ef(a) {
    switch (a) {
    case 34962:
        a = 34964;
        break;
    case 34963:
        a = 34965;
        break;
    case 35051:
        a = 35053;
        break;
    case 35052:
        a = 35055;
        break;
    case 35982:
        a = 35983;
        break;
    case 36662:
        a = 36662;
        break;
    case 36663:
        a = 36663;
        break;
    case 35345:
        a = 35368
    }
    return (a = T.getParameter(a)) ? a.name | 0 : 0
}
function Ff(a) {
    switch (a) {
    case 34962:
    case 34963:
    case 36662:
    case 36663:
    case 35051:
    case 35052:
    case 35882:
    case 35982:
    case 35345:
        return !0;
    default:
        return !1
    }
}
function Gf(a, b, c, d) {
    for (var e = 0; e < a; e++) {
        var f = T[c]()
          , g = f && De(d);
        f ? (f.name = g,
        d[g] = f) : X(1282);
        G[b + 4 * e >> 2] = g
    }
}
function Hf(a, b, c, d, e, f, g, l) {
    b = V[b];
    if (a = T[a](b, c))
        d = l && u(a.name, l, d),
        e && (G[e >> 2] = d),
        f && (G[f >> 2] = a.size),
        g && (G[g >> 2] = a.type)
}
function If(a, b) {
    N[a >> 2] = b;
    N[a + 4 >> 2] = (b - N[a >> 2]) / 4294967296
}
function Jf(a, b, c) {
    if (b) {
        var d = void 0;
        switch (a) {
        case 36346:
            d = 1;
            break;
        case 36344:
            0 != c && 1 != c && X(1280);
            return;
        case 34814:
        case 36345:
            d = 0;
            break;
        case 34466:
            var e = T.getParameter(34467);
            d = e ? e.length : 0;
            break;
        case 33309:
            if (2 > S.version) {
                X(1282);
                return
            }
            d = 2 * (T.getSupportedExtensions() || []).length;
            break;
        case 33307:
        case 33308:
            if (2 > S.version) {
                X(1280);
                return
            }
            d = 33307 == a ? 3 : 0
        }
        if (void 0 === d)
            switch (e = T.getParameter(a),
            typeof e) {
            case "number":
                d = e;
                break;
            case "boolean":
                d = e ? 1 : 0;
                break;
            case "string":
                X(1280);
                return;
            case "object":
                if (null === e)
                    switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 36662:
                    case 36663:
                    case 35053:
                    case 35055:
                    case 36010:
                    case 35097:
                    case 35869:
                    case 32874:
                    case 36389:
                    case 35983:
                    case 35368:
                    case 34068:
                        d = 0;
                        break;
                    default:
                        X(1280);
                        return
                    }
                else {
                    if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                        for (a = 0; a < e.length; ++a)
                            switch (c) {
                            case 0:
                                G[b + 4 * a >> 2] = e[a];
                                break;
                            case 2:
                                I[b + 4 * a >> 2] = e[a];
                                break;
                            case 4:
                                E[b + a >> 0] = e[a] ? 1 : 0
                            }
                        return
                    }
                    try {
                        d = e.name | 0
                    } catch (f) {
                        X(1280);
                        k("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
                        return
                    }
                }
                break;
            default:
                X(1280);
                k("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
                return
            }
        switch (c) {
        case 1:
            If(b, d);
            break;
        case 0:
            G[b >> 2] = d;
            break;
        case 2:
            I[b >> 2] = d;
            break;
        case 4:
            E[b >> 0] = d ? 1 : 0
        }
    } else
        X(1281)
}
function Kf(a, b, c, d) {
    if (c) {
        b = T.getIndexedParameter(a, b);
        switch (typeof b) {
        case "boolean":
            a = b ? 1 : 0;
            break;
        case "number":
            a = b;
            break;
        case "object":
            if (null === b)
                switch (a) {
                case 35983:
                case 35368:
                    a = 0;
                    break;
                default:
                    X(1280);
                    return
                }
            else if (b instanceof WebGLBuffer)
                a = b.name | 0;
            else {
                X(1280);
                return
            }
            break;
        default:
            X(1280);
            return
        }
        switch (d) {
        case 1:
            If(c, a);
            break;
        case 0:
            G[c >> 2] = a;
            break;
        case 2:
            I[c >> 2] = a;
            break;
        case 4:
            E[c >> 0] = a ? 1 : 0;
            break;
        default:
            throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
        }
    } else
        X(1281)
}
function Lf(a) {
    var b = aa(a) + 1
      , c = m(b);
    u(a, c, b);
    return c
}
function Mf(a) {
    return "]" == a.slice(-1) && a.lastIndexOf("[")
}
function Nf(a) {
    var b = a.Lj, c = a.kk, d;
    if (!b)
        for (a.Lj = b = {},
        a.jl = {},
        d = 0; d < T.getProgramParameter(a, 35718); ++d) {
            var e = T.getActiveUniform(a, d);
            var f = e.name;
            e = e.size;
            var g = Mf(f);
            g = 0 < g ? f.slice(0, g) : f;
            var l = a.jk;
            a.jk += e;
            c[g] = [e, l];
            for (f = 0; f < e; ++f)
                b[l] = f,
                a.jl[l++] = g
        }
}
function Y(a) {
    var b = T.Tk;
    if (b) {
        var c = b.Lj[a];
        "number" == typeof c && (b.Lj[a] = c = T.getUniformLocation(b, b.jl[a] + (0 < c ? "[" + c + "]" : "")));
        return c
    }
    X(1282)
}
function Of(a, b, c, d) {
    if (c)
        if (a = V[a],
        Nf(a),
        a = T.getUniform(a, Y(b)),
        "number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                G[c >> 2] = a;
                break;
            case 2:
                I[c >> 2] = a
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    G[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    I[c + 4 * b >> 2] = a[b]
                }
    else
        X(1281)
}
function Pf(a, b, c, d) {
    if (c)
        if (S.hj[a].enabled && k("glGetVertexAttrib*v on client-side array: not supported, bad data returned"),
        a = T.getVertexAttrib(a, b),
        34975 == b)
            G[c >> 2] = a && a.name;
        else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                G[c >> 2] = a;
                break;
            case 2:
                I[c >> 2] = a;
                break;
            case 5:
                G[c >> 2] = Math.fround(a)
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    G[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    I[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    G[c + 4 * b >> 2] = Math.fround(a[b])
                }
    else
        X(1281)
}
function Qf(a) {
    a -= 5120;
    return 0 == a ? E : 1 == a ? A : 2 == a ? eb : 4 == a ? G : 6 == a ? I : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? N : J
}
function Rf(a) {
    return 31 - Math.clz32(a.BYTES_PER_ELEMENT)
}
function Sf(a, b, c, d, e) {
    a = Qf(a);
    var f = Rf(a)
      , g = Be;
    return a.subarray(e >> f, e + d * (c * ({
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4,
        26917: 2,
        26918: 2,
        29846: 3,
        29847: 4
    }[b - 6402] || 1) * (1 << f) + g - 1 & -g) >> f)
}
var Tf = []
  , Uf = [];
function Vf(a, b) {
    if (!bf())
        return -1;
    a = sf(a);
    return a ? a.requestFullscreen || a.webkitRequestFullscreen ? Qe && Ye.Bj ? Af(a, b) : b.vl ? (Ve(Af, 1, [a, b]),
    1) : -2 : -3 : -4
}
function Wf(a, b) {
    var c = {
        target: sf(2),
        $i: "beforeunload",
        fj: b,
        gj: function(d) {
            d = d || event;
            var e = P(b)(28, 0, a);
            e && (e = x(e));
            if (e)
                return d.preventDefault(),
                d.returnValue = e
        },
        ej: !0
    };
    Ze(c)
}
function Xf(a, b, c, d, e, f) {
    ef || (ef = m(256));
    a = {
        target: sf(a),
        $i: f,
        fj: d,
        gj: function(g) {
            g = g || event;
            var l = g.target.id ? g.target.id : ""
              , n = ef;
            u(af(g.target), n + 0, 128);
            u(l, n + 128, 128);
            P(d)(e, n, b) && g.preventDefault()
        },
        ej: c
    };
    Ze(a)
}
function Yf(a, b, c, d, e) {
    gf || (gf = m(280));
    Ze({
        target: a,
        $i: e,
        fj: d,
        gj: function(f) {
            f = f || event;
            var g = gf
              , l = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
              , n = !!l;
            G[g >> 2] = n;
            G[g + 4 >> 2] = bf();
            var q = n ? l : ff
              , p = q && q.id ? q.id : "";
            u(af(q), g + 8, 128);
            u(p, g + 136, 128);
            G[g + 264 >> 2] = q ? q.clientWidth : 0;
            G[g + 268 >> 2] = q ? q.clientHeight : 0;
            G[g + 272 >> 2] = screen.width;
            G[g + 276 >> 2] = screen.height;
            n && (ff = l);
            P(d)(19, g, b) && f.preventDefault()
        },
        ej: c
    })
}
function Zf(a, b, c, d, e) {
    hf || (hf = m(1432));
    b = {
        target: sf(2),
        Bj: !0,
        $i: e,
        fj: c,
        gj: function(f) {
            f = f || event;
            var g = hf;
            Cf(g, f.gamepad);
            P(c)(d, g, a) && f.preventDefault()
        },
        ej: b
    };
    Ze(b)
}
function $f(a, b, c, d, e, f) {
    jf || (jf = m(176));
    a = {
        target: sf(a),
        Bj: !0,
        $i: f,
        fj: d,
        gj: function(g) {
            var l = jf;
            gb[l >> 3] = g.timeStamp;
            var n = l >> 2;
            G[n + 2] = g.location;
            G[n + 3] = g.ctrlKey;
            G[n + 4] = g.shiftKey;
            G[n + 5] = g.altKey;
            G[n + 6] = g.metaKey;
            G[n + 7] = g.repeat;
            G[n + 8] = g.charCode;
            G[n + 9] = g.keyCode;
            G[n + 10] = g.which;
            u(g.key || "", l + 44, 32);
            u(g.code || "", l + 76, 32);
            u(g.char || "", l + 108, 32);
            u(g.locale || "", l + 140, 32);
            P(d)(e, l, b) && g.preventDefault()
        },
        ej: c
    };
    Ze(a)
}
function ag(a, b, c) {
    gb[a >> 3] = b.timeStamp;
    a >>= 2;
    G[a + 2] = b.screenX;
    G[a + 3] = b.screenY;
    G[a + 4] = b.clientX;
    G[a + 5] = b.clientY;
    G[a + 6] = b.ctrlKey;
    G[a + 7] = b.shiftKey;
    G[a + 8] = b.altKey;
    G[a + 9] = b.metaKey;
    eb[2 * a + 20] = b.button;
    eb[2 * a + 21] = b.buttons;
    G[a + 11] = b.movementX;
    G[a + 12] = b.movementY;
    c = zf(c);
    G[a + 13] = b.clientX - c.left;
    G[a + 14] = b.clientY - c.top
}
function bg(a, b, c, d, e, f) {
    kf || (kf = m(72));
    a = sf(a);
    Ze({
        target: a,
        Bj: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
        $i: f,
        fj: d,
        gj: function(g) {
            g = g || event;
            ag(kf, g, a);
            P(d)(e, kf, b) && g.preventDefault()
        },
        ej: c
    })
}
function cg(a, b, c, d, e) {
    lf || (lf = m(260));
    Ze({
        target: a,
        $i: e,
        fj: d,
        gj: function(f) {
            f = f || event;
            var g = lf
              , l = document.pointerLockElement || document.Wi || document.kj || document.aj;
            G[g >> 2] = !!l;
            var n = l && l.id ? l.id : "";
            u(af(l), g + 4, 128);
            u(n, g + 132, 128);
            P(d)(20, g, b) && f.preventDefault()
        },
        ej: c
    })
}
function dg(a, b, c, d) {
    mf || (mf = m(36));
    a = sf(a);
    Ze({
        target: a,
        $i: "resize",
        fj: d,
        gj: function(e) {
            e = e || event;
            if (e.target == a) {
                var f = document.body;
                if (f) {
                    var g = mf;
                    G[g >> 2] = e.detail;
                    G[g + 4 >> 2] = f.clientWidth;
                    G[g + 8 >> 2] = f.clientHeight;
                    G[g + 12 >> 2] = innerWidth;
                    G[g + 16 >> 2] = innerHeight;
                    G[g + 20 >> 2] = outerWidth;
                    G[g + 24 >> 2] = outerHeight;
                    G[g + 28 >> 2] = pageXOffset;
                    G[g + 32 >> 2] = pageYOffset;
                    P(d)(10, g, b) && e.preventDefault()
                }
            }
        },
        ej: c
    })
}
function eg(a, b, c, d, e, f) {
    nf || (nf = m(1696));
    a = sf(a);
    Ze({
        target: a,
        Bj: "touchstart" == f || "touchend" == f,
        $i: f,
        fj: d,
        gj: function(g) {
            for (var l, n = {}, q = g.touches, p = 0; p < q.length; ++p)
                l = q[p],
                l.$k = l.gl = 0,
                n[l.identifier] = l;
            for (p = 0; p < g.changedTouches.length; ++p)
                l = g.changedTouches[p],
                l.$k = 1,
                n[l.identifier] = l;
            for (p = 0; p < g.targetTouches.length; ++p)
                n[g.targetTouches[p].identifier].gl = 1;
            q = nf;
            gb[q >> 3] = g.timeStamp;
            var t = q >> 2;
            G[t + 3] = g.ctrlKey;
            G[t + 4] = g.shiftKey;
            G[t + 5] = g.altKey;
            G[t + 6] = g.metaKey;
            t += 7;
            var v = zf(a)
              , r = 0;
            for (p in n)
                if (l = n[p],
                G[t] = l.identifier,
                G[t + 1] = l.screenX,
                G[t + 2] = l.screenY,
                G[t + 3] = l.clientX,
                G[t + 4] = l.clientY,
                G[t + 5] = l.pageX,
                G[t + 6] = l.pageY,
                G[t + 7] = l.$k,
                G[t + 8] = l.gl,
                G[t + 9] = l.clientX - v.left,
                G[t + 10] = l.clientY - v.top,
                t += 13,
                31 < ++r)
                    break;
            G[q + 8 >> 2] = r;
            P(d)(e, q, b) && g.preventDefault()
        },
        ej: c
    })
}
function fg(a, b, c) {
    var d = rf[1];
    of || (of = m(8));
    Ze({
        target: d,
        $i: "visibilitychange",
        fj: c,
        gj: function(e) {
            e = e || event;
            var f = of
              , g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
            G[f >> 2] = document.hidden;
            G[f + 4 >> 2] = g;
            P(c)(21, f, a) && e.preventDefault()
        },
        ej: b
    })
}
function gg(a, b, c, d, e, f) {
    a = {
        target: sf(a),
        $i: f,
        fj: d,
        gj: function(g) {
            g = g || event;
            P(d)(e, 0, b) && g.preventDefault()
        },
        ej: c
    };
    Ze(a)
}
function hg(a, b, c, d) {
    pf || (pf = m(104));
    Ze({
        target: a,
        Bj: !0,
        $i: "wheel",
        fj: d,
        gj: function(e) {
            e = e || event;
            var f = pf;
            ag(f, e, a);
            gb[f + 72 >> 3] = e.deltaX;
            gb[f + 80 >> 3] = e.deltaY;
            gb[f + 88 >> 3] = e.deltaZ;
            G[f + 96 >> 2] = e.deltaMode;
            P(d)(9, f, b) && e.preventDefault()
        },
        ej: c
    })
}
var ig = [];
function jg(a, b) {
    N[a >> 2] = b;
    N[a + 4 >> 2] = b / 4294967296 | 0
}
var kg;
function lg(a, b, c, d, e) {
    function f(L) {
        var fa = 0
          , R = 0;
        L && (R = z.response ? z.response.byteLength : 0,
        fa = m(R),
        A.set(new Uint8Array(z.response), fa));
        N[a + 12 >> 2] = fa;
        jg(a + 16, R)
    }
    var g = N[a + 8 >> 2];
    if (g) {
        var l = x(g)
          , n = a + 112
          , q = x(n);
        q || (q = "GET");
        var p = N[n + 52 >> 2]
          , t = N[n + 56 >> 2]
          , v = !!N[n + 60 >> 2]
          , r = N[n + 68 >> 2]
          , C = N[n + 72 >> 2];
        g = N[n + 76 >> 2];
        var y = N[n + 80 >> 2]
          , F = N[n + 84 >> 2];
        n = N[n + 88 >> 2];
        var K = !!(p & 1)
          , M = !!(p & 2);
        p = !!(p & 64);
        r = r ? x(r) : void 0;
        C = C ? x(C) : void 0;
        var z = new XMLHttpRequest;
        z.withCredentials = v;
        z.open(q, l, !p, r, C);
        p || (z.timeout = t);
        z.Wi = l;
        z.responseType = "arraybuffer";
        y && (l = x(y),
        z.overrideMimeType(l));
        if (g)
            for (; ; ) {
                q = N[g >> 2];
                if (!q)
                    break;
                l = N[g + 4 >> 2];
                if (!l)
                    break;
                g += 8;
                q = x(q);
                l = x(l);
                z.setRequestHeader(q, l)
            }
        ig.push(z);
        N[a + 0 >> 2] = ig.length;
        g = F && n ? A.slice(F, F + n) : null;
        z.onload = L => {
            f(K && !M);
            var fa = z.response ? z.response.byteLength : 0;
            jg(a + 24, 0);
            fa && jg(a + 32, fa);
            J[a + 40 >> 1] = z.readyState;
            J[a + 42 >> 1] = z.status;
            z.statusText && u(z.statusText, a + 44, 64);
            200 <= z.status && 300 > z.status ? b && b(a, z, L) : c && c(a, z, L)
        }
        ;
        z.onerror = L => {
            f(K);
            var fa = z.status;
            jg(a + 24, 0);
            jg(a + 32, z.response ? z.response.byteLength : 0);
            J[a + 40 >> 1] = z.readyState;
            J[a + 42 >> 1] = fa;
            c && c(a, z, L)
        }
        ;
        z.ontimeout = L => {
            c && c(a, z, L)
        }
        ;
        z.onprogress = L => {
            var fa = K && M && z.response ? z.response.byteLength : 0
              , R = 0;
            K && M && (R = m(fa),
            A.set(new Uint8Array(z.response), R));
            N[a + 12 >> 2] = R;
            jg(a + 16, fa);
            jg(a + 24, L.loaded - fa);
            jg(a + 32, L.total);
            J[a + 40 >> 1] = z.readyState;
            3 <= z.readyState && 0 === z.status && 0 < L.loaded && (z.status = 200);
            J[a + 42 >> 1] = z.status;
            z.statusText && u(z.statusText, a + 44, 64);
            d && d(a, z, L);
            R && ca(R)
        }
        ;
        z.onreadystatechange = L => {
            J[a + 40 >> 1] = z.readyState;
            2 <= z.readyState && (J[a + 42 >> 1] = z.status);
            e && e(a, z, L)
        }
        ;
        try {
            z.send(g)
        } catch (L) {
            c && c(a, z, L)
        }
    } else
        c(a, 0, "no url specified!")
}
function mg(a, b, c, d) {
    var e = kg;
    if (e) {
        var f = N[a + 112 + 64 >> 2];
        f || (f = N[a + 8 >> 2]);
        var g = x(f);
        try {
            var l = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(b, g);
            l.onsuccess = () => {
                J[a + 40 >> 1] = 4;
                J[a + 42 >> 1] = 200;
                u("OK", a + 44, 64);
                c(a, 0, g)
            }
            ;
            l.onerror = n => {
                J[a + 40 >> 1] = 4;
                J[a + 42 >> 1] = 413;
                u("Payload Too Large", a + 44, 64);
                d(a, 0, n)
            }
        } catch (n) {
            d(a, 0, n)
        }
    } else
        d(a, 0, "IndexedDB not available!")
}
function ng(a, b, c) {
    var d = kg;
    if (d) {
        var e = N[a + 112 + 64 >> 2];
        e || (e = N[a + 8 >> 2]);
        e = x(e);
        try {
            var f = d.transaction(["FILES"], "readonly").objectStore("FILES").get(e);
            f.onsuccess = g => {
                if (g.target.result) {
                    g = g.target.result;
                    var l = g.byteLength || g.length
                      , n = m(l);
                    A.set(new Uint8Array(g), n);
                    N[a + 12 >> 2] = n;
                    jg(a + 16, l);
                    jg(a + 24, 0);
                    jg(a + 32, l);
                    J[a + 40 >> 1] = 4;
                    J[a + 42 >> 1] = 200;
                    u("OK", a + 44, 64);
                    b(a, 0, g)
                } else
                    J[a + 40 >> 1] = 4,
                    J[a + 42 >> 1] = 404,
                    u("Not Found", a + 44, 64),
                    c(a, 0, "no data")
            }
            ;
            f.onerror = g => {
                J[a + 40 >> 1] = 4;
                J[a + 42 >> 1] = 404;
                u("Not Found", a + 44, 64);
                c(a, 0, g)
            }
        } catch (g) {
            c(a, 0, g)
        }
    } else
        c(a, 0, "IndexedDB not available!")
}
function og(a, b, c) {
    var d = kg;
    if (d) {
        var e = N[a + 112 + 64 >> 2];
        e || (e = N[a + 8 >> 2]);
        e = x(e);
        try {
            var f = d.transaction(["FILES"], "readwrite").objectStore("FILES").delete(e);
            f.onsuccess = g => {
                g = g.target.result;
                N[a + 12 >> 2] = 0;
                jg(a + 16, 0);
                jg(a + 24, 0);
                jg(a + 32, 0);
                J[a + 40 >> 1] = 4;
                J[a + 42 >> 1] = 200;
                u("OK", a + 44, 64);
                b(a, 0, g)
            }
            ;
            f.onerror = g => {
                J[a + 40 >> 1] = 4;
                J[a + 42 >> 1] = 404;
                u("Not Found", a + 44, 64);
                c(a, 0, g)
            }
        } catch (g) {
            c(a, 0, g)
        }
    } else
        c(a, 0, "IndexedDB not available!")
}
var pg = ["default", "low-power", "high-performance"]
  , qg = [null]
  , Z = null
  , rg = {};
function sg() {
    if (!tg) {
        var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            _: Ka || "./this.program"
        }, b;
        for (b in rg)
            void 0 === rg[b] ? delete a[b] : a[b] = rg[b];
        var c = [];
        for (b in a)
            c.push(b + "=" + a[b]);
        tg = c
    }
    return tg
}
var tg;
function ug(a) {
    a = a.split(".");
    for (var b = 0; 4 > b; b++) {
        var c = Number(a[b]);
        if (isNaN(c))
            return null;
        a[b] = c
    }
    return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0
}
function vg(a) {
    var b, c, d = [];
    if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a))
        return null;
    if ("::" === a)
        return [0, 0, 0, 0, 0, 0, 0, 0];
    a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
    0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"),
    a = a.split(":"),
    a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]),
    a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]),
    a = a.slice(0, a.length - 2)) : a = a.split(":");
    for (b = c = 0; b < a.length; b++)
        if ("string" == typeof a[b])
            if ("Z" === a[b]) {
                for (c = 0; c < 8 - a.length + 1; c++)
                    d[b + c] = 0;
                --c
            } else
                d[b + c] = wg(parseInt(a[b], 16));
        else
            d[b + c] = a[b];
    return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]]
}
var xg = 1
  , yg = {};
function zg(a) {
    var b = ug(a);
    if (null !== b)
        return a;
    b = vg(a);
    if (null !== b)
        return a;
    yg[a] ? b = yg[a] : (b = xg++,
    65535 > b || cb("exceeded max address mappings of 65535"),
    b = "172.29." + (b & 255) + "." + (b & 65280),
    yg[a] = b);
    return b
}
function Ag(a) {
    return (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255)
}
function Bg(a) {
    return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
}
var Cg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , Dg = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Eg(a, b, c, d) {
    function e(r, C, y) {
        for (r = "number" == typeof r ? r.toString() : r || ""; r.length < C; )
            r = y[0] + r;
        return r
    }
    function f(r, C) {
        return e(r, C, "0")
    }
    function g(r, C) {
        function y(K) {
            return 0 > K ? -1 : 0 < K ? 1 : 0
        }
        var F;
        0 === (F = y(r.getFullYear() - C.getFullYear())) && 0 === (F = y(r.getMonth() - C.getMonth())) && (F = y(r.getDate() - C.getDate()));
        return F
    }
    function l(r) {
        switch (r.getDay()) {
        case 0:
            return new Date(r.getFullYear() - 1,11,29);
        case 1:
            return r;
        case 2:
            return new Date(r.getFullYear(),0,3);
        case 3:
            return new Date(r.getFullYear(),0,2);
        case 4:
            return new Date(r.getFullYear(),0,1);
        case 5:
            return new Date(r.getFullYear() - 1,11,31);
        case 6:
            return new Date(r.getFullYear() - 1,11,30)
        }
    }
    function n(r) {
        var C = r.Jj;
        for (r = new Date((new Date(r.Kj + 1900,0,1)).getTime()); 0 < C; ) {
            var y = r.getMonth()
              , F = (Bg(r.getFullYear()) ? Cg : Dg)[y];
            if (C > F - r.getDate())
                C -= F - r.getDate() + 1,
                r.setDate(1),
                11 > y ? r.setMonth(y + 1) : (r.setMonth(0),
                r.setFullYear(r.getFullYear() + 1));
            else {
                r.setDate(r.getDate() + C);
                break
            }
        }
        y = new Date(r.getFullYear() + 1,0,4);
        C = l(new Date(r.getFullYear(),0,4));
        y = l(y);
        return 0 >= g(C, r) ? 0 >= g(y, r) ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1
    }
    var q = G[d + 40 >> 2];
    d = {
        Vl: G[d >> 2],
        Ul: G[d + 4 >> 2],
        hk: G[d + 8 >> 2],
        Jk: G[d + 12 >> 2],
        ik: G[d + 16 >> 2],
        Kj: G[d + 20 >> 2],
        oj: G[d + 24 >> 2],
        Jj: G[d + 28 >> 2],
        tm: G[d + 32 >> 2],
        Tl: G[d + 36 >> 2],
        Wl: q ? x(q) : ""
    };
    c = x(c);
    q = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
    };
    for (var p in q)
        c = c.replace(new RegExp(p,"g"), q[p]);
    var t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      , v = "January February March April May June July August September October November December".split(" ");
    q = {
        "%a": function(r) {
            return t[r.oj].substring(0, 3)
        },
        "%A": function(r) {
            return t[r.oj]
        },
        "%b": function(r) {
            return v[r.ik].substring(0, 3)
        },
        "%B": function(r) {
            return v[r.ik]
        },
        "%C": function(r) {
            return f((r.Kj + 1900) / 100 | 0, 2)
        },
        "%d": function(r) {
            return f(r.Jk, 2)
        },
        "%e": function(r) {
            return e(r.Jk, 2, " ")
        },
        "%g": function(r) {
            return n(r).toString().substring(2)
        },
        "%G": function(r) {
            return n(r)
        },
        "%H": function(r) {
            return f(r.hk, 2)
        },
        "%I": function(r) {
            r = r.hk;
            0 == r ? r = 12 : 12 < r && (r -= 12);
            return f(r, 2)
        },
        "%j": function(r) {
            for (var C = 0, y = 0; y <= r.ik - 1; C += (Bg(r.Kj + 1900) ? Cg : Dg)[y++])
                ;
            return f(r.Jk + C, 3)
        },
        "%m": function(r) {
            return f(r.ik + 1, 2)
        },
        "%M": function(r) {
            return f(r.Ul, 2)
        },
        "%n": function() {
            return "\n"
        },
        "%p": function(r) {
            return 0 <= r.hk && 12 > r.hk ? "AM" : "PM"
        },
        "%S": function(r) {
            return f(r.Vl, 2)
        },
        "%t": function() {
            return "\t"
        },
        "%u": function(r) {
            return r.oj || 7
        },
        "%U": function(r) {
            return f(Math.floor((r.Jj + 7 - r.oj) / 7), 2)
        },
        "%V": function(r) {
            var C = Math.floor((r.Jj + 7 - (r.oj + 6) % 7) / 7);
            2 >= (r.oj + 371 - r.Jj - 2) % 7 && C++;
            if (C)
                53 == C && (y = (r.oj + 371 - r.Jj) % 7,
                4 == y || 3 == y && Bg(r.Kj) || (C = 1));
            else {
                C = 52;
                var y = (r.oj + 7 - r.Jj - 1) % 7;
                (4 == y || 5 == y && Bg(r.Kj % 400 - 1)) && C++
            }
            return f(C, 2)
        },
        "%w": function(r) {
            return r.oj
        },
        "%W": function(r) {
            return f(Math.floor((r.Jj + 7 - (r.oj + 6) % 7) / 7), 2)
        },
        "%y": function(r) {
            return (r.Kj + 1900).toString().substring(2)
        },
        "%Y": function(r) {
            return r.Kj + 1900
        },
        "%z": function(r) {
            r = r.Tl;
            var C = 0 <= r;
            r = Math.abs(r) / 60;
            return (C ? "+" : "-") + String("0000" + (r / 60 * 100 + r % 60)).slice(-4)
        },
        "%Z": function(r) {
            return r.Wl
        },
        "%%": function() {
            return "%"
        }
    };
    c = c.replace(/%%/g, "\x00\x00");
    for (p in q)
        c.includes(p) && (c = c.replace(new RegExp(p,"g"), q[p](d)));
    c = c.replace(/\0\0/g, "%");
    p = ic(c, !1);
    if (p.length > b)
        return 0;
    E.set(p, a);
    return p.length - 1
}
function Dc(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.Yi = a.Yi;
    this.wj = null;
    this.id = tc++;
    this.name = b;
    this.mode = c;
    this.Ri = {};
    this.Ti = {};
    this.rdev = d
}
Object.defineProperties(Dc.prototype, {
    read: {
        get: function() {
            return 365 === (this.mode & 365)
        },
        set: function(a) {
            a ? this.mode |= 365 : this.mode &= -366
        }
    },
    write: {
        get: function() {
            return 146 === (this.mode & 146)
        },
        set: function(a) {
            a ? this.mode |= 146 : this.mode &= -147
        }
    },
    Ll: {
        get: function() {
            return 16384 === (this.mode & 61440)
        }
    },
    Kl: {
        get: function() {
            return 8192 === (this.mode & 61440)
        }
    }
});
Vc();
uc = Array(4096);
Ob(B, "/");
Nb("/tmp");
Nb("/home");
Nb("/home/web_user");
( () => {
    Nb("/dev");
    gc(259, {
        read: () => 0,
        write: (b, c, d, e) => e
    });
    Nc("/dev/null", 259);
    fc(1280, jc);
    fc(1536, kc);
    Nc("/dev/tty", 1280);
    Nc("/dev/tty1", 1536);
    var a = ac();
    ad("/dev", "random", a);
    ad("/dev", "urandom", a);
    Nb("/dev/shm");
    Nb("/dev/shm/tmp")
}
)();
( () => {
    Nb("/proc");
    var a = Nb("/proc/self");
    Nb("/proc/self/fd");
    Ob({
        Yi: () => {
            var b = mc(a, "fd", 16895, 73);
            b.Ri = {
                lookup: (c, d) => {
                    var e = sc[+d];
                    if (!e)
                        throw new Q(8);
                    c = {
                        parent: null,
                        Yi: {
                            xj: "fake"
                        },
                        Ri: {
                            readlink: () => e.path
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
}
)();
h.FS_createPath = Yc;
h.FS_createDataFile = $c;
h.FS_createPreloadedFile = ed;
h.FS_unlink = Ha;
h.FS_createLazyFile = cd;
h.FS_createDevice = ad;
h.requestFullscreen = function(a, b) {
    Yd(a, b)
}
;
h.requestAnimationFrame = function(a) {
    xd(a)
}
;
h.setCanvasSize = function(a, b, c) {
    $d(h.canvas, a, b);
    c || ae()
}
;
h.pauseMainLoop = function() {
    td = null;
    zd++
}
;
h.resumeMainLoop = function() {
    zd++;
    var a = pd
      , b = qd
      , c = rd;
    rd = null;
    yd(c);
    od(a, b);
    td()
}
;
h.getUserMedia = function() {
    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(void 0)
}
;
h.createContext = function(a, b, c, d) {
    return Qd(a, b, c, d)
}
;
for (var T, Fg = 0; 32 > Fg; ++Fg)
    Df.push(Array(Fg));
var Gg = new Float32Array(288);
for (Fg = 0; 288 > Fg; ++Fg)
    Tf[Fg] = Gg.subarray(0, Fg + 1);
var Hg = new Int32Array(288);
for (Fg = 0; 288 > Fg; ++Fg)
    Uf[Fg] = Hg.subarray(0, Fg + 1);
(function(a, b) {
    try {
        var c = indexedDB.open("emscripten_filesystem", 1)
    } catch (d) {
        b(d);
        return
    }
    c.onupgradeneeded = d => {
        d = d.target.result;
        d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
        d.createObjectStore("FILES")
    }
    ;
    c.onsuccess = d => a(d.target.result);
    c.onerror = d => b(d)
}
)(a => {
    kg = a;
    Hb("library_fetch_init")
}
, () => {
    kg = !1;
    Hb("library_fetch_init")
}
);
"undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Gb("library_fetch_init");
function ic(a, b) {
    var c = Array(aa(a) + 1);
    a = qb(a, c, 0, c.length);
    b && (c.length = a);
    return c
}
var Yg = {
    Xb: function(a) {
        try {
            a = x(a);
            var b = D(a, {
                Fj: !0
            });
            if (null === b.node)
                throw new Q(44);
            if (16384 !== (b.node.mode & 61440))
                throw new Q(54);
            var c = Cc(b.node, "x");
            if (c)
                throw new Q(c);
            cc = b.path;
            return 0
        } catch (d) {
            if ("undefined" == typeof fd || !(d instanceof Q))
                throw d;
            return -d.Vi
        }
    },
    Ka: function(a, b, c) {
        jd = c;
        try {
            var d = ld(a);
            switch (b) {
            case 0:
                var e = kd();
                return 0 > e ? -28 : Kc(d, e).fd;
            case 1:
            case 2:
                return 0;
            case 3:
                return d.flags;
            case 4:
                return e = kd(),
                d.flags |= e,
                0;
            case 5:
                return e = kd(),
                eb[e + 0 >> 1] = 2,
                0;
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                return G[Ig() >> 2] = 28,
                -1;
            default:
                return -28
            }
        } catch (f) {
            if ("undefined" == typeof fd || !(f instanceof Q))
                throw f;
            return -f.Vi
        }
    },
    Gb: function(a, b, c) {
        try {
            var d = ld(a);
            d.Gj || (d.Gj = Aa(d.path));
            a = 0;
            for (var e = Tc(d, 0, 1), f = Math.floor(e / 280); f < d.Gj.length && a + 280 <= c; ) {
                var g = d.Gj[f];
                if ("." === g) {
                    var l = d.node.id;
                    var n = 4
                } else if (".." === g)
                    l = D(d.path, {
                        parent: !0
                    }).node.id,
                    n = 4;
                else {
                    var q = oc(d.node, g);
                    l = q.id;
                    n = 8192 === (q.mode & 61440) ? 2 : 16384 === (q.mode & 61440) ? 4 : 40960 === (q.mode & 61440) ? 10 : 8
                }
                fb = [l >>> 0, (H = l,
                1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
                G[b + a >> 2] = fb[0];
                G[b + a + 4 >> 2] = fb[1];
                fb = [280 * (f + 1) >>> 0, (H = 280 * (f + 1),
                1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
                G[b + a + 8 >> 2] = fb[0];
                G[b + a + 12 >> 2] = fb[1];
                eb[b + a + 16 >> 1] = 280;
                E[b + a + 18 >> 0] = n;
                u(g, b + a + 19, 256);
                a += 280;
                f += 1
            }
            Tc(d, 280 * f, 0);
            return a
        } catch (p) {
            if ("undefined" == typeof fd || !(p instanceof Q))
                throw p;
            return -p.Vi
        }
    },
    Yb: function(a, b, c) {
        jd = c;
        try {
            var d = ld(a);
            switch (b) {
            case 21509:
            case 21505:
                return d.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
                return d.tty ? 0 : -59;
            case 21519:
                if (!d.tty)
                    return -59;
                var e = kd();
                return G[e >> 2] = 0;
            case 21520:
                return d.tty ? -28 : -59;
            case 21531:
                a = e = kd();
                if (!d.Ti.Jl)
                    throw new Q(59);
                return d.Ti.Jl(d, b, a);
            case 21523:
                return d.tty ? 0 : -59;
            case 21524:
                return d.tty ? 0 : -59;
            default:
                cb("bad ioctl syscall " + b)
            }
        } catch (f) {
            if ("undefined" == typeof fd || !(f instanceof Q))
                throw f;
            return -f.Vi
        }
    },
    Kb: function(a, b) {
        try {
            return a = x(a),
            hd(Pc, a, b)
        } catch (c) {
            if ("undefined" == typeof fd || !(c instanceof Q))
                throw c;
            return -c.Vi
        }
    },
    Hb: function(a, b, c) {
        try {
            return b = x(b),
            b = gd(a, b),
            b = za(b),
            "/" === b[b.length - 1] && (b = b.substr(0, b.length - 1)),
            Nb(b, c),
            0
        } catch (d) {
            if ("undefined" == typeof fd || !(d instanceof Q))
                throw d;
            return -d.Vi
        }
    },
    Lb: function(a, b, c, d) {
        try {
            b = x(b);
            var e = d & 256;
            b = gd(a, b, d & 4096);
            return hd(e ? Pc : Ba, b, c)
        } catch (f) {
            if ("undefined" == typeof fd || !(f instanceof Q))
                throw f;
            return -f.Vi
        }
    },
    Ha: function(a, b, c, d) {
        jd = d;
        try {
            b = x(b);
            b = gd(a, b);
            var e = d ? kd() : 0;
            return Rc(b, c, e).fd
        } catch (f) {
            if ("undefined" == typeof fd || !(f instanceof Q))
                throw f;
            return -f.Vi
        }
    },
    Fb: function(a, b, c, d) {
        try {
            b = x(b);
            b = gd(a, b);
            if (0 >= d)
                var e = -28;
            else {
                var f = xc(b)
                  , g = Math.min(d, aa(f))
                  , l = E[c + g];
                u(f, c, d + 1);
                E[c + g] = l;
                e = g
            }
            return e
        } catch (n) {
            if ("undefined" == typeof fd || !(n instanceof Q))
                throw n;
            return -n.Vi
        }
    },
    Cb: function(a, b, c, d) {
        try {
            b = x(b);
            d = x(d);
            b = gd(a, b);
            d = gd(c, d);
            a = b;
            var e = Zb(a)
              , f = Zb(d)
              , g = $b(a)
              , l = $b(d);
            var n = D(a, {
                parent: !0
            });
            var q = n.node;
            n = D(d, {
                parent: !0
            });
            var p = n.node;
            if (!q || !p)
                throw new Q(44);
            if (q.Yi !== p.Yi)
                throw new Q(75);
            var t = oc(q, g)
              , v = dc(a, f);
            if ("." !== v.charAt(0))
                throw new Q(28);
            v = dc(d, e);
            if ("." !== v.charAt(0))
                throw new Q(55);
            try {
                var r = oc(p, l)
            } catch (F) {}
            if (t !== r) {
                var C = 16384 === (t.mode & 61440)
                  , y = Hc(q, g, C);
                if (y)
                    throw new Q(y);
                if (y = r ? Hc(p, l, C) : Gc(p, l))
                    throw new Q(y);
                if (!q.Ri.rename)
                    throw new Q(63);
                if (t.wj || r && r.wj)
                    throw new Q(10);
                if (p !== q && (y = Cc(q, "w")))
                    throw new Q(y);
                Bc(t);
                try {
                    q.Ri.rename(t, p, l)
                } catch (F) {
                    throw F;
                } finally {
                    Ac(t)
                }
            }
            return 0
        } catch (F) {
            if ("undefined" == typeof fd || !(F instanceof Q))
                throw F;
            return -F.Vi
        }
    },
    Db: function(a) {
        try {
            return a = x(a),
            Ga(a),
            0
        } catch (b) {
            if ("undefined" == typeof fd || !(b instanceof Q))
                throw b;
            return -b.Vi
        }
    },
    Mb: function(a, b) {
        try {
            return a = x(a),
            hd(Ba, a, b)
        } catch (c) {
            if ("undefined" == typeof fd || !(c instanceof Q))
                throw c;
            return -c.Vi
        }
    },
    Eb: function(a, b, c) {
        try {
            return b = x(b),
            b = gd(a, b),
            0 === c ? Ha(b) : 512 === c ? Ga(b) : cb("Invalid flags passed to unlinkat"),
            0
        } catch (d) {
            if ("undefined" == typeof fd || !(d instanceof Q))
                throw d;
            return -d.Vi
        }
    },
    Ub: function() {},
    Wb: function() {
        cb("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")
    },
    Vb: function() {
        cb("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")
    },
    na: function() {
        return Date.now()
    },
    jh: function(a) {
        delete ig[a - 1]
    },
    hh: function(a, b, c) {
        a = ig[a - 1].getAllResponseHeaders();
        var d = aa(a) + 1;
        u(a, b, c);
        return Math.min(d, c)
    },
    ih: function(a) {
        return aa(ig[a - 1].getAllResponseHeaders()) + 1
    },
    Nb: function() {
        return !0
    },
    Ab: function() {
        throw Infinity;
    },
    Ob: function(a, b) {
        a = new Date(1E3 * G[a >> 2]);
        G[b >> 2] = a.getUTCSeconds();
        G[b + 4 >> 2] = a.getUTCMinutes();
        G[b + 8 >> 2] = a.getUTCHours();
        G[b + 12 >> 2] = a.getUTCDate();
        G[b + 16 >> 2] = a.getUTCMonth();
        G[b + 20 >> 2] = a.getUTCFullYear() - 1900;
        G[b + 24 >> 2] = a.getUTCDay();
        G[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0
    },
    Pb: function(a, b) {
        a = new Date(1E3 * G[a >> 2]);
        G[b >> 2] = a.getSeconds();
        G[b + 4 >> 2] = a.getMinutes();
        G[b + 8 >> 2] = a.getHours();
        G[b + 12 >> 2] = a.getDate();
        G[b + 16 >> 2] = a.getMonth();
        G[b + 20 >> 2] = a.getFullYear() - 1900;
        G[b + 24 >> 2] = a.getDay();
        var c = new Date(a.getFullYear(),0,1);
        G[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
        G[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
        var d = (new Date(a.getFullYear(),6,1)).getTimezoneOffset();
        c = c.getTimezoneOffset();
        G[b + 32 >> 2] = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0
    },
    Qb: function(a) {
        var b = new Date(G[a + 20 >> 2] + 1900,G[a + 16 >> 2],G[a + 12 >> 2],G[a + 8 >> 2],G[a + 4 >> 2],G[a >> 2],0)
          , c = G[a + 32 >> 2]
          , d = b.getTimezoneOffset()
          , e = new Date(b.getFullYear(),0,1)
          , f = (new Date(b.getFullYear(),6,1)).getTimezoneOffset()
          , g = e.getTimezoneOffset()
          , l = Math.min(g, f);
        0 > c ? G[a + 32 >> 2] = Number(f != g && l == d) : 0 < c != (l == d) && (f = Math.max(g, f),
        b.setTime(b.getTime() + 6E4 * ((0 < c ? l : f) - d)));
        G[a + 24 >> 2] = b.getDay();
        G[a + 28 >> 2] = (b.getTime() - e.getTime()) / 864E5 | 0;
        G[a >> 2] = b.getSeconds();
        G[a + 4 >> 2] = b.getMinutes();
        G[a + 8 >> 2] = b.getHours();
        G[a + 12 >> 2] = b.getDate();
        G[a + 16 >> 2] = b.getMonth();
        return b.getTime() / 1E3 | 0
    },
    Rb: function(a) {
        var b = new Date(Date.UTC(G[a + 20 >> 2] + 1900, G[a + 16 >> 2], G[a + 12 >> 2], G[a + 8 >> 2], G[a + 4 >> 2], G[a >> 2], 0));
        G[a + 24 >> 2] = b.getUTCDay();
        G[a + 28 >> 2] = (b.getTime() - Date.UTC(b.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
        return b.getTime() / 1E3 | 0
    },
    Sb: nd,
    B: function() {
        cb("")
    },
    Ch: function(a) {
        if (12448 == a)
            return U = 12288,
            1;
        U = 12300;
        return 0
    },
    Fh: function(a, b, c, d, e) {
        if (62E3 != a)
            U = 12296,
            c = 0;
        else {
            if (b)
                for (; ; ) {
                    a = G[b >> 2];
                    if (12321 == a)
                        he.alpha = 0 < G[b + 4 >> 2];
                    else if (12325 == a)
                        he.depth = 0 < G[b + 4 >> 2];
                    else if (12326 == a)
                        he.stencil = 0 < G[b + 4 >> 2];
                    else if (12337 == a)
                        a = G[b + 4 >> 2],
                        he.antialias = 0 < a;
                    else if (12338 == a)
                        a = G[b + 4 >> 2],
                        he.antialias = 1 == a;
                    else if (12544 == a)
                        he.mm = 12547 != G[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            c && d || e ? (e && (G[e >> 2] = 1),
            c && 0 < d && (G[c >> 2] = 62002),
            U = 12288,
            c = 1) : (U = 12300,
            c = 0)
        }
        return c
    },
    th: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        for (a = 1; ; ) {
            b = G[d >> 2];
            if (12440 == b)
                a = G[d + 4 >> 2];
            else if (12344 == b)
                break;
            else
                return U = 12292,
                0;
            d += 8
        }
        if (2 > a || 3 < a)
            return U = 12293,
            0;
        he.Zj = a - 1;
        he.Ml = 0;
        je = Sd(h.canvas, he);
        if (0 != je)
            return U = 12288,
            Ud(je),
            h.Yl = !0,
            Jd.forEach(function(e) {
                e()
            }),
            Ud(null),
            62004;
        U = 12297;
        return 0
    },
    vh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62002 != b)
            return U = 12293,
            0;
        U = 12288;
        return 62006
    },
    uh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62004 != b)
            return U = 12294,
            0;
        a = je;
        S === Td[a] && (S = null);
        if ("object" == typeof cf)
            for (var c = Td[a].jj.canvas, d = 0; d < Se.length; ++d)
                Se[d].target != c || Te(d--);
        Td[a] && Td[a].jj.canvas && (Td[a].jj.canvas.Sj = void 0);
        Td[a] = null;
        U = 12288;
        ee == b && (ee = 0);
        return 1
    },
    wh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62006 != b)
            return U = 12301,
            1;
        fe == b && (fe = 0);
        ge == b && (ge = 0);
        U = 12288;
        return 1
    },
    Gh: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62002 != b)
            return U = 12293,
            0;
        if (!d)
            return U = 12300,
            0;
        U = 12288;
        switch (c) {
        case 12320:
            return G[d >> 2] = he.alpha ? 32 : 24,
            1;
        case 12321:
            return G[d >> 2] = he.alpha ? 8 : 0,
            1;
        case 12322:
            return G[d >> 2] = 8,
            1;
        case 12323:
            return G[d >> 2] = 8,
            1;
        case 12324:
            return G[d >> 2] = 8,
            1;
        case 12325:
            return G[d >> 2] = he.depth ? 24 : 0,
            1;
        case 12326:
            return G[d >> 2] = he.stencil ? 8 : 0,
            1;
        case 12327:
            return G[d >> 2] = 12344,
            1;
        case 12328:
            return G[d >> 2] = 62002,
            1;
        case 12329:
            return G[d >> 2] = 0,
            1;
        case 12330:
            return G[d >> 2] = 4096,
            1;
        case 12331:
            return G[d >> 2] = 16777216,
            1;
        case 12332:
            return G[d >> 2] = 4096,
            1;
        case 12333:
            return G[d >> 2] = 0,
            1;
        case 12334:
            return G[d >> 2] = 0,
            1;
        case 12335:
            return G[d >> 2] = 12344,
            1;
        case 12337:
            return G[d >> 2] = he.antialias ? 4 : 0,
            1;
        case 12338:
            return G[d >> 2] = he.antialias ? 1 : 0,
            1;
        case 12339:
            return G[d >> 2] = 4,
            1;
        case 12340:
            return G[d >> 2] = 12344,
            1;
        case 12341:
        case 12342:
        case 12343:
            return G[d >> 2] = -1,
            1;
        case 12345:
        case 12346:
            return G[d >> 2] = 0,
            1;
        case 12347:
            return G[d >> 2] = 0,
            1;
        case 12348:
            return G[d >> 2] = 1;
        case 12349:
        case 12350:
            return G[d >> 2] = 0,
            1;
        case 12351:
            return G[d >> 2] = 12430,
            1;
        case 12352:
            return G[d >> 2] = 4,
            1;
        case 12354:
            return G[d >> 2] = 0,
            1;
        default:
            return U = 12292,
            0
        }
    },
    cb: function() {
        U = 12288;
        return 62E3
    },
    sh: function() {
        return U
    },
    Dh: function(a, b, c) {
        if (62E3 == a)
            return b && (G[b >> 2] = 1),
            c && (G[c >> 2] = 4),
            de = !0,
            U = 12288,
            1;
        U = 12296;
        return 0
    },
    xh: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (0 != d && 62004 != d)
            return U = 12294,
            0;
        if (0 != c && 62006 != c || 0 != b && 62006 != b)
            return U = 12301,
            0;
        Ud(d ? je : null);
        ee = d;
        ge = b;
        fe = c;
        U = 12288;
        return 1
    },
    rh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        U = 12288;
        if (ie[b])
            return ie[b];
        switch (b) {
        case 12371:
            a = rb("Emscripten");
            break;
        case 12372:
            a = rb("1.4 Emscripten EGL");
            break;
        case 12373:
            a = rb("");
            break;
        case 12429:
            a = rb("OpenGL_ES");
            break;
        default:
            return U = 12300,
            0
        }
        return ie[b] = a
    },
    yh: function() {
        if (de)
            if (h.lj)
                if (h.lj.isContextLost())
                    U = 12302;
                else
                    return U = 12288,
                    1;
            else
                U = 12290;
        else
            U = 12289;
        return 0
    },
    zh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        0 == b ? od(0, 0) : od(1, b);
        U = 12288;
        return 1
    },
    Eh: function(a) {
        if (62E3 != a)
            return U = 12296,
            0;
        ge = fe = ee = 0;
        de = !1;
        U = 12288;
        return 1
    },
    Bh: function() {
        U = 12288;
        return 1
    },
    Ah: function() {
        U = 12288;
        return 1
    },
    A: function(a, b, c) {
        return Me(a, b, c)
    },
    c: Me,
    Rh: function(a, b, c, d, e, f, g, l) {
        function n() {
            if (g) {
                var v = 0;
                if (p.statusText) {
                    var r = aa(p.statusText) + 1;
                    v = lb(r);
                    u(p.statusText, v, r)
                }
                P(g)(t, d, p.status, v)
            }
        }
        var q = x(a);
        a = x(b);
        c = x(c);
        var p = new XMLHttpRequest;
        p.open(a, q, !0);
        p.responseType = "arraybuffer";
        var t = Pe();
        p.onload = function() {
            if (200 <= p.status && 300 > p.status || 0 === p.status && "http" != q.substr(0, 4).toLowerCase()) {
                var v = new Uint8Array(p.response)
                  , r = m(v.length);
                A.set(v, r);
                f && P(f)(t, d, r, v.length);
                e && ca(r)
            } else
                n();
            delete Ne[t]
        }
        ;
        p.onerror = function() {
            n();
            delete Ne[t]
        }
        ;
        p.onprogress = function(v) {
            l && P(l)(t, d, v.loaded, v.lengthComputable || void 0 === v.lengthComputable ? v.total : 0)
        }
        ;
        p.onabort = function() {
            delete Ne[t]
        }
        ;
        "POST" == a ? (p.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        p.send(c)) : p.send(null);
        Ne[t] = p;
        return t
    },
    Kh: function(a) {
        clearInterval(a)
    },
    mh: function() {
        if (!bf())
            return -1;
        We(Af);
        var a = rf[1];
        if (a.exitFullscreen)
            a.fullscreenElement && a.exitFullscreen();
        else if (a.webkitExitFullscreen)
            a.webkitFullscreenElement && a.webkitExitFullscreen();
        else
            return -1;
        return 0
    },
    ph: function() {
        We(Bf);
        if (document.exitPointerLock)
            document.exitPointerLock();
        else if (document.Qi)
            document.Qi();
        else
            return -1;
        return 0
    },
    Vh: tf,
    I: function() {
        return "number" == typeof devicePixelRatio && devicePixelRatio || 1
    },
    v: function(a, b, c) {
        a = sf(a);
        if (!a)
            return -4;
        a = zf(a);
        gb[b >> 3] = a.width;
        gb[c >> 3] = a.height;
        return 0
    },
    fb: function(a, b) {
        if (0 > a || a >= df.length)
            return -5;
        if (!df[a])
            return -7;
        Cf(b, df[a]);
        return 0
    },
    la: vd,
    Hh: function() {
        return df.length
    },
    qh: function(a, b) {
        G[a >> 2] = screen.width;
        G[b >> 2] = screen.height
    },
    Pg: function(a) {
        T.activeTexture(a)
    },
    Og: function(a, b) {
        T.attachShader(V[a], W[b])
    },
    Rd: function(a, b) {
        T.beginQuery(a, ue[b])
    },
    dh: function(a, b) {
        T.bj.beginQueryEXT(a, ue[b])
    },
    ud: function(a) {
        T.beginTransformFeedback(a)
    },
    Ng: function(a, b, c) {
        T.bindAttribLocation(V[a], b, x(c))
    },
    Mg: function(a, b) {
        34962 == a ? T.qj = b : 34963 == a && (T.ij = b);
        35051 == a ? T.Dj = b : 35052 == a && (T.Zi = b);
        T.bindBuffer(a, oe[b])
    },
    rd: function(a, b, c) {
        T.bindBufferBase(a, b, oe[c])
    },
    sd: function(a, b, c, d, e) {
        T.bindBufferRange(a, b, oe[c], d, e)
    },
    Lg: function(a, b) {
        T.bindFramebuffer(a, qe[b])
    },
    Kg: function(a, b) {
        T.bindRenderbuffer(a, re[b])
    },
    yc: function(a, b) {
        T.bindSampler(a, ve[b])
    },
    Jg: function(a, b) {
        T.bindTexture(a, se[b])
    },
    qc: function(a, b) {
        T.bindTransformFeedback(a, we[b])
    },
    zd: function(a) {
        T.bindVertexArray(te[a]);
        a = T.getParameter(34965);
        T.ij = a ? a.name | 0 : 0
    },
    Xg: function(a) {
        T.bindVertexArray(te[a]);
        a = T.getParameter(34965);
        T.ij = a ? a.name | 0 : 0
    },
    Ig: function(a, b, c, d) {
        T.blendColor(a, b, c, d)
    },
    Hg: function(a) {
        T.blendEquation(a)
    },
    Gg: function(a, b) {
        T.blendEquationSeparate(a, b)
    },
    Fg: function(a, b) {
        T.blendFunc(a, b)
    },
    Eg: function(a, b, c, d) {
        T.blendFuncSeparate(a, b, c, d)
    },
    Ed: function(a, b, c, d, e, f, g, l, n, q) {
        T.blitFramebuffer(a, b, c, d, e, f, g, l, n, q)
    },
    Dg: function(a, b, c, d) {
        2 <= S.version ? c ? T.bufferData(a, A, d, c, b) : T.bufferData(a, b, d) : T.bufferData(a, c ? A.subarray(c, c + b) : b, d)
    },
    Cg: function(a, b, c, d) {
        2 <= S.version ? T.bufferSubData(a, b, A, d, c) : T.bufferSubData(a, b, A.subarray(d, d + c))
    },
    Bg: function(a) {
        return T.checkFramebufferStatus(a)
    },
    Ag: function(a) {
        T.clear(a)
    },
    Vc: function(a, b, c, d) {
        T.clearBufferfi(a, b, c, d)
    },
    Wc: function(a, b, c) {
        T.clearBufferfv(a, b, I, c >> 2)
    },
    Yc: function(a, b, c) {
        T.clearBufferiv(a, b, G, c >> 2)
    },
    Xc: function(a, b, c) {
        T.clearBufferuiv(a, b, N, c >> 2)
    },
    zg: function(a, b, c, d) {
        T.clearColor(a, b, c, d)
    },
    yg: function(a) {
        T.clearDepth(a)
    },
    xg: function(a) {
        T.clearStencil(a)
    },
    Hc: function(a, b, c, d) {
        return T.clientWaitSync(xe[a], b, (c >>> 0) + 4294967296 * d)
    },
    wg: function(a, b, c, d) {
        T.colorMask(!!a, !!b, !!c, !!d)
    },
    vg: function(a) {
        T.compileShader(W[a])
    },
    ug: function(a, b, c, d, e, f, g, l) {
        2 <= S.version ? T.Zi ? T.compressedTexImage2D(a, b, c, d, e, f, g, l) : T.compressedTexImage2D(a, b, c, d, e, f, A, l, g) : T.compressedTexImage2D(a, b, c, d, e, f, l ? A.subarray(l, l + g) : null)
    },
    Wd: function(a, b, c, d, e, f, g, l, n) {
        T.Zi ? T.compressedTexImage3D(a, b, c, d, e, f, g, l, n) : T.compressedTexImage3D(a, b, c, d, e, f, g, A, n, l)
    },
    tg: function(a, b, c, d, e, f, g, l, n) {
        2 <= S.version ? T.Zi ? T.compressedTexSubImage2D(a, b, c, d, e, f, g, l, n) : T.compressedTexSubImage2D(a, b, c, d, e, f, g, A, n, l) : T.compressedTexSubImage2D(a, b, c, d, e, f, g, n ? A.subarray(n, n + l) : null)
    },
    Vd: function(a, b, c, d, e, f, g, l, n, q, p) {
        T.Zi ? T.compressedTexSubImage3D(a, b, c, d, e, f, g, l, n, q, p) : T.compressedTexSubImage3D(a, b, c, d, e, f, g, l, n, A, p, q)
    },
    Tc: function(a, b, c, d, e) {
        T.copyBufferSubData(a, b, c, d, e)
    },
    sg: function(a, b, c, d, e, f, g, l) {
        T.copyTexImage2D(a, b, c, d, e, f, g, l)
    },
    rg: function(a, b, c, d, e, f, g, l) {
        T.copyTexSubImage2D(a, b, c, d, e, f, g, l)
    },
    Xd: function(a, b, c, d, e, f, g, l, n) {
        T.copyTexSubImage3D(a, b, c, d, e, f, g, l, n)
    },
    qg: function() {
        var a = De(V)
          , b = T.createProgram();
        b.name = a;
        b.tj = b.rj = b.sj = 0;
        b.jk = 1;
        V[a] = b;
        return a
    },
    pg: function(a) {
        var b = De(W);
        W[b] = T.createShader(a);
        return b
    },
    og: function(a) {
        T.cullFace(a)
    },
    ng: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = oe[d];
            e && (T.deleteBuffer(e),
            e.name = 0,
            oe[d] = null,
            d == T.qj && (T.qj = 0),
            d == T.ij && (T.ij = 0),
            d == T.Dj && (T.Dj = 0),
            d == T.Zi && (T.Zi = 0))
        }
    },
    mg: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = G[b + 4 * c >> 2]
              , e = qe[d];
            e && (T.deleteFramebuffer(e),
            e.name = 0,
            qe[d] = null)
        }
    },
    lg: function(a) {
        if (a) {
            var b = V[a];
            b ? (T.deleteProgram(b),
            b.name = 0,
            V[a] = null) : X(1281)
        }
    },
    Td: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = ue[d];
            e && (T.deleteQuery(e),
            ue[d] = null)
        }
    },
    fh: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = ue[d];
            e && (T.bj.deleteQueryEXT(e),
            ue[d] = null)
        }
    },
    kg: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = re[d];
            e && (T.deleteRenderbuffer(e),
            e.name = 0,
            re[d] = null)
        }
    },
    Ac: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = ve[d];
            e && (T.deleteSampler(e),
            e.name = 0,
            ve[d] = null)
        }
    },
    jg: function(a) {
        if (a) {
            var b = W[a];
            b ? (T.deleteShader(b),
            W[a] = null) : X(1281)
        }
    },
    Ic: function(a) {
        if (a) {
            var b = xe[a];
            b ? (T.deleteSync(b),
            b.name = 0,
            xe[a] = null) : X(1281)
        }
    },
    ig: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = se[d];
            e && (T.deleteTexture(e),
            e.name = 0,
            se[d] = null)
        }
    },
    pc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = we[d];
            e && (T.deleteTransformFeedback(e),
            e.name = 0,
            we[d] = null)
        }
    },
    yd: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2];
            T.deleteVertexArray(te[d]);
            te[d] = null
        }
    },
    Wg: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2];
            T.deleteVertexArray(te[d]);
            te[d] = null
        }
    },
    hg: function(a) {
        T.depthFunc(a)
    },
    gg: function(a) {
        T.depthMask(!!a)
    },
    fg: function(a, b) {
        T.depthRange(a, b)
    },
    eg: function(a, b) {
        T.detachShader(V[a], W[b])
    },
    dg: function(a) {
        T.disable(a)
    },
    cg: function(a) {
        S.hj[a].enabled = !1;
        T.disableVertexAttribArray(a)
    },
    bg: function(a, b, c) {
        Ge(b + c);
        T.drawArrays(a, b, c);
        Ie()
    },
    Mc: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    Sg: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    $b: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    ce: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    ac: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    Ld: function(a, b) {
        for (var c = Df[a], d = 0; d < a; d++)
            c[d] = G[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    ae: function(a, b) {
        for (var c = Df[a], d = 0; d < a; d++)
            c[d] = G[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    Tg: function(a, b) {
        for (var c = Df[a], d = 0; d < a; d++)
            c[d] = G[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    ag: function(a, b, c, d) {
        if (!T.ij) {
            var e = 1 * ye[c - 5120] * b;
            var f = Ee(e);
            T.bindBuffer(34963, f);
            T.bufferSubData(34963, 0, A.subarray(d, d + e));
            d = 0
        }
        Ge(b);
        T.drawElements(a, b, c, d);
        Ie();
        T.ij || T.bindBuffer(34963, null)
    },
    Lc: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    Rg: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    Zb: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    _b: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    be: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    _d: function(a, b, c, d, e, f) {
        b = f;
        T.ij || (f = 1 * ye[e - 5120] * d,
        c = Ee(f),
        T.bindBuffer(34963, c),
        T.bufferSubData(34963, 0, A.subarray(b, b + f)),
        b = 0);
        Ge(d);
        T.drawElements(a, d, e, b);
        Ie();
        T.ij || T.bindBuffer(34963, null)
    },
    _f: function(a) {
        T.enable(a)
    },
    Zf: function(a) {
        S.hj[a].enabled = !0;
        T.enableVertexAttribArray(a)
    },
    Qd: function(a) {
        T.endQuery(a)
    },
    ch: function(a) {
        T.bj.endQueryEXT(a)
    },
    td: function() {
        T.endTransformFeedback()
    },
    Kc: function(a, b) {
        return (a = T.fenceSync(a, b)) ? (b = De(xe),
        a.name = b,
        xe[b] = a,
        b) : 0
    },
    Yf: function() {
        T.finish()
    },
    Xf: function() {
        T.flush()
    },
    Ad: function(a, b, c) {
        if (Ff(a)) {
            var d = pe[Ef(a)];
            d ? d.Lk & 16 ? 0 > b || 0 > c || b + c > d.length ? (X(1281),
            k("invalid range in glFlushMappedBufferRange")) : T.bufferSubData(a, d.offset, A.subarray(d.Ij + b, d.Ij + b + c)) : (X(1282),
            k("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange")) : (X(1282),
            k("buffer was never mapped in glFlushMappedBufferRange"))
        } else
            X(1280),
            k("GL_INVALID_ENUM in glFlushMappedBufferRange")
    },
    Wf: function(a, b, c, d) {
        T.framebufferRenderbuffer(a, b, c, re[d])
    },
    Vf: function(a, b, c, d, e) {
        T.framebufferTexture2D(a, b, c, se[d], e)
    },
    Cd: function(a, b, c, d, e) {
        T.framebufferTextureLayer(a, b, se[c], d, e)
    },
    Uf: function(a) {
        T.frontFace(a)
    },
    Tf: function(a, b) {
        Gf(a, b, "createBuffer", oe)
    },
    Rf: function(a, b) {
        Gf(a, b, "createFramebuffer", qe)
    },
    Ud: function(a, b) {
        Gf(a, b, "createQuery", ue)
    },
    gh: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = T.bj.createQueryEXT();
            if (!d) {
                for (X(1282); c < a; )
                    G[b + 4 * c++ >> 2] = 0;
                break
            }
            var e = De(ue);
            d.name = e;
            ue[e] = d;
            G[b + 4 * c >> 2] = e
        }
    },
    Qf: function(a, b) {
        Gf(a, b, "createRenderbuffer", re)
    },
    Bc: function(a, b) {
        Gf(a, b, "createSampler", ve)
    },
    Pf: function(a, b) {
        Gf(a, b, "createTexture", se)
    },
    oc: function(a, b) {
        Gf(a, b, "createTransformFeedback", we)
    },
    xd: function(a, b) {
        Gf(a, b, "createVertexArray", te)
    },
    Vg: function(a, b) {
        Gf(a, b, "createVertexArray", te)
    },
    Sf: function(a) {
        T.generateMipmap(a)
    },
    Of: function(a, b, c, d, e, f, g) {
        Hf("getActiveAttrib", a, b, c, d, e, f, g)
    },
    Nf: function(a, b, c, d, e, f, g) {
        Hf("getActiveUniform", a, b, c, d, e, f, g)
    },
    Oc: function(a, b, c, d, e) {
        a = V[a];
        if (a = T.getActiveUniformBlockName(a, b))
            e && 0 < c ? (c = u(a, e, c),
            d && (G[d >> 2] = c)) : d && (G[d >> 2] = 0)
    },
    Pc: function(a, b, c, d) {
        if (d)
            if (a = V[a],
            35393 == c)
                c = T.getActiveUniformBlockName(a, b),
                G[d >> 2] = c.length + 1;
            else {
                if (a = T.getActiveUniformBlockParameter(a, b, c),
                null !== a)
                    if (35395 == c)
                        for (c = 0; c < a.length; c++)
                            G[d + 4 * c >> 2] = a[c];
                    else
                        G[d >> 2] = a
            }
        else
            X(1281)
    },
    Rc: function(a, b, c, d, e) {
        if (e)
            if (0 < b && 0 == c)
                X(1281);
            else {
                a = V[a];
                for (var f = [], g = 0; g < b; g++)
                    f.push(G[c + 4 * g >> 2]);
                if (a = T.getActiveUniforms(a, f, d))
                    for (b = a.length,
                    g = 0; g < b; g++)
                        G[e + 4 * g >> 2] = a[g]
            }
        else
            X(1281)
    },
    Mf: function(a, b, c, d) {
        a = T.getAttachedShaders(V[a]);
        var e = a.length;
        e > b && (e = b);
        G[c >> 2] = e;
        for (b = 0; b < e; ++b)
            G[d + 4 * b >> 2] = W.indexOf(a[b])
    },
    Lf: function(a, b) {
        return T.getAttribLocation(V[a], x(b))
    },
    Kf: function(a, b) {
        Jf(a, b, 4)
    },
    Cc: function(a, b, c) {
        c ? If(c, T.getBufferParameter(a, b)) : X(1281)
    },
    Jf: function(a, b, c) {
        c ? G[c >> 2] = T.getBufferParameter(a, b) : X(1281)
    },
    Md: function(a, b, c) {
        if (35005 == b) {
            b = 0;
            if (a = pe[Ef(a)])
                b = a.Ij;
            G[c >> 2] = b
        } else
            X(1280),
            k("GL_INVALID_ENUM in glGetBufferPointerv")
    },
    If: function() {
        var a = T.getError() || Ce;
        Ce = 0;
        return a
    },
    Hf: function(a, b) {
        Jf(a, b, 2)
    },
    fd: function(a, b) {
        return T.getFragDataLocation(V[a], x(b))
    },
    Ff: function(a, b, c, d) {
        a = T.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
            a = a.name | 0;
        G[d >> 2] = a
    },
    Dc: function(a, b, c) {
        Kf(a, b, c, 1)
    },
    Fc: function(a, b) {
        Jf(a, b, 1)
    },
    vd: function(a, b, c) {
        Kf(a, b, c, 0)
    },
    Ef: function(a, b) {
        Jf(a, b, 0)
    },
    dc: function(a, b, c, d, e) {
        if (0 > d)
            X(1281);
        else if (e) {
            if (a = T.getInternalformatParameter(a, b, c),
            null !== a)
                for (b = 0; b < a.length && b < d; ++b)
                    G[e + 4 * b >> 2] = a[b]
        } else
            X(1281)
    },
    kc: function() {
        X(1282)
    },
    Cf: function(a, b, c, d) {
        a = T.getProgramInfoLog(V[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    Df: function(a, b, c) {
        if (c)
            if (a >= ne)
                X(1281);
            else if (a = V[a],
            35716 == b)
                a = T.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                G[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.tj)
                    for (b = 0; b < T.getProgramParameter(a, 35718); ++b)
                        a.tj = Math.max(a.tj, T.getActiveUniform(a, b).name.length + 1);
                G[c >> 2] = a.tj
            } else if (35722 == b) {
                if (!a.rj)
                    for (b = 0; b < T.getProgramParameter(a, 35721); ++b)
                        a.rj = Math.max(a.rj, T.getActiveAttrib(a, b).name.length + 1);
                G[c >> 2] = a.rj
            } else if (35381 == b) {
                if (!a.sj)
                    for (b = 0; b < T.getProgramParameter(a, 35382); ++b)
                        a.sj = Math.max(a.sj, T.getActiveUniformBlockName(a, b).length + 1);
                G[c >> 2] = a.sj
            } else
                G[c >> 2] = T.getProgramParameter(a, b);
        else
            X(1281)
    },
    Zg: function(a, b, c) {
        if (c) {
            a = ue[a];
            b = 2 > S.version ? T.bj.getQueryObjectEXT(a, b) : T.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            If(c, d)
        } else
            X(1281)
    },
    $g: function(a, b, c) {
        if (c) {
            a = T.bj.getQueryObjectEXT(ue[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            G[c >> 2] = d
        } else
            X(1281)
    },
    Yg: function(a, b, c) {
        if (c) {
            a = ue[a];
            b = 2 > S.version ? T.bj.getQueryObjectEXT(a, b) : T.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            If(c, d)
        } else
            X(1281)
    },
    Od: function(a, b, c) {
        if (c) {
            a = T.getQueryParameter(ue[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            G[c >> 2] = d
        } else
            X(1281)
    },
    _g: function(a, b, c) {
        if (c) {
            a = T.bj.getQueryObjectEXT(ue[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            G[c >> 2] = d
        } else
            X(1281)
    },
    Pd: function(a, b, c) {
        c ? G[c >> 2] = T.getQuery(a, b) : X(1281)
    },
    ah: function(a, b, c) {
        c ? G[c >> 2] = T.bj.getQueryEXT(a, b) : X(1281)
    },
    Bf: function(a, b, c) {
        c ? G[c >> 2] = T.getRenderbufferParameter(a, b) : X(1281)
    },
    sc: function(a, b, c) {
        c ? I[c >> 2] = T.getSamplerParameter(ve[a], b) : X(1281)
    },
    tc: function(a, b, c) {
        c ? G[c >> 2] = T.getSamplerParameter(ve[a], b) : X(1281)
    },
    zf: function(a, b, c, d) {
        a = T.getShaderInfoLog(W[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    yf: function(a, b, c, d) {
        a = T.getShaderPrecisionFormat(a, b);
        G[c >> 2] = a.rangeMin;
        G[c + 4 >> 2] = a.rangeMax;
        G[d >> 2] = a.precision
    },
    xf: function(a, b, c, d) {
        if (a = T.getShaderSource(W[a]))
            b = 0 < b && d ? u(a, d, b) : 0,
            c && (G[c >> 2] = b)
    },
    Af: function(a, b, c) {
        c ? 35716 == b ? (a = T.getShaderInfoLog(W[a]),
        null === a && (a = "(unknown error)"),
        G[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = T.getShaderSource(W[a]),
        G[c >> 2] = a ? a.length + 1 : 0) : G[c >> 2] = T.getShaderParameter(W[a], b) : X(1281)
    },
    wf: function(a) {
        var b = ze[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = T.getSupportedExtensions() || [];
                b = b.concat(b.map(function(d) {
                    return "GL_" + d
                }));
                b = Lf(b.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = T.getParameter(a)) || X(1280);
                b = b && Lf(b);
                break;
            case 7938:
                b = T.getParameter(7938);
                b = 2 <= S.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                b = Lf(b);
                break;
            case 35724:
                b = T.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = Lf(b);
                break;
            default:
                X(1280)
            }
            ze[a] = b
        }
        return b
    },
    Uc: function(a, b) {
        if (2 > S.version)
            return X(1282),
            0;
        var c = Ae[a];
        if (c)
            return 0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        switch (a) {
        case 7939:
            return c = T.getSupportedExtensions() || [],
            c = c.concat(c.map(function(d) {
                return "GL_" + d
            })),
            c = c.map(function(d) {
                return Lf(d)
            }),
            c = Ae[a] = c,
            0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        default:
            return X(1280),
            0
        }
    },
    Ec: function(a, b, c, d, e) {
        0 > c ? X(1281) : e ? (a = T.getSyncParameter(xe[a], b),
        null !== a && (G[e >> 2] = a,
        d && (G[d >> 2] = 1))) : X(1281)
    },
    vf: function(a, b, c) {
        c ? I[c >> 2] = T.getTexParameter(a, b) : X(1281)
    },
    uf: function(a, b, c) {
        c ? G[c >> 2] = T.getTexParameter(a, b) : X(1281)
    },
    pd: function(a, b, c, d, e, f, g) {
        a = V[a];
        if (a = T.getTransformFeedbackVarying(a, b))
            g && 0 < c ? (c = u(a.name, g, c),
            d && (G[d >> 2] = c)) : d && (G[d >> 2] = 0),
            e && (G[e >> 2] = a.size),
            f && (G[f >> 2] = a.type)
    },
    Qc: function(a, b) {
        return T.getUniformBlockIndex(V[a], x(b))
    },
    Sc: function(a, b, c, d) {
        if (d)
            if (0 < b && (0 == c || 0 == d))
                X(1281);
            else {
                a = V[a];
                for (var e = [], f = 0; f < b; f++)
                    e.push(x(G[c + 4 * f >> 2]));
                if (a = T.getUniformIndices(a, e))
                    for (b = a.length,
                    f = 0; f < b; f++)
                        G[d + 4 * f >> 2] = a[f]
            }
        else
            X(1281)
    },
    rf: function(a, b) {
        b = x(b);
        if (a = V[a]) {
            Nf(a);
            var c = a.Lj
              , d = 0
              , e = b
              , f = Mf(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
            e = b.slice(0, f));
            if ((e = a.kk[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || T.getUniformLocation(a, b)))
                return d
        } else
            X(1281);
        return -1
    },
    tf: function(a, b, c) {
        Of(a, b, c, 2)
    },
    sf: function(a, b, c) {
        Of(a, b, c, 0)
    },
    gd: function(a, b, c) {
        Of(a, b, c, 0)
    },
    nd: function(a, b, c) {
        Pf(a, b, c, 0)
    },
    md: function(a, b, c) {
        Pf(a, b, c, 0)
    },
    of: function(a, b, c) {
        c ? (S.hj[a].enabled && k("glGetVertexAttribPointer on client-side array: not supported, bad data returned"),
        G[c >> 2] = T.getVertexAttribOffset(a, b)) : X(1281)
    },
    qf: function(a, b, c) {
        Pf(a, b, c, 2)
    },
    pf: function(a, b, c) {
        Pf(a, b, c, 5)
    },
    nf: function(a, b) {
        T.hint(a, b)
    },
    hc: function(a, b, c) {
        for (var d = Df[b], e = 0; e < b; e++)
            d[e] = G[c + 4 * e >> 2];
        T.invalidateFramebuffer(a, d)
    },
    gc: function(a, b, c, d, e, f, g) {
        for (var l = Df[b], n = 0; n < b; n++)
            l[n] = G[c + 4 * n >> 2];
        T.invalidateSubFramebuffer(a, l, d, e, f, g)
    },
    mf: function(a) {
        return (a = oe[a]) ? T.isBuffer(a) : 0
    },
    kf: function(a) {
        return T.isEnabled(a)
    },
    jf: function(a) {
        return (a = qe[a]) ? T.isFramebuffer(a) : 0
    },
    hf: function(a) {
        return (a = V[a]) ? T.isProgram(a) : 0
    },
    Sd: function(a) {
        return (a = ue[a]) ? T.isQuery(a) : 0
    },
    eh: function(a) {
        return (a = ue[a]) ? T.bj.isQueryEXT(a) : 0
    },
    gf: function(a) {
        return (a = re[a]) ? T.isRenderbuffer(a) : 0
    },
    zc: function(a) {
        return (a = ve[a]) ? T.isSampler(a) : 0
    },
    ff: function(a) {
        return (a = W[a]) ? T.isShader(a) : 0
    },
    Jc: function(a) {
        return T.isSync(xe[a])
    },
    ef: function(a) {
        return (a = se[a]) ? T.isTexture(a) : 0
    },
    nc: function(a) {
        return T.isTransformFeedback(we[a])
    },
    wd: function(a) {
        return (a = te[a]) ? T.isVertexArray(a) : 0
    },
    Ug: function(a) {
        return (a = te[a]) ? T.isVertexArray(a) : 0
    },
    df: function(a) {
        T.lineWidth(a)
    },
    cf: function(a) {
        a = V[a];
        T.linkProgram(a);
        a.Lj = 0;
        a.kk = {}
    },
    Bd: function(a, b, c, d) {
        if (26 != d && 10 != d)
            return k("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER"),
            0;
        if (!Ff(a))
            return X(1280),
            k("GL_INVALID_ENUM in glMapBufferRange"),
            0;
        var e = m(c);
        if (!e)
            return 0;
        pe[Ef(a)] = {
            offset: b,
            length: c,
            Ij: e,
            Lk: d
        };
        return e
    },
    mc: function() {
        T.pauseTransformFeedback()
    },
    bf: function(a, b) {
        3317 == a && (Be = b);
        T.pixelStorei(a, b)
    },
    af: function(a, b) {
        T.polygonOffset(a, b)
    },
    jc: function() {
        X(1280)
    },
    ic: function() {
        X(1280)
    },
    bh: function(a, b) {
        T.bj.queryCounterEXT(ue[a], b)
    },
    $d: function(a) {
        T.readBuffer(a)
    },
    $e: function(a, b, c, d, e, f, g) {
        if (2 <= S.version)
            if (T.Dj)
                T.readPixels(a, b, c, d, e, f, g);
            else {
                var l = Qf(f);
                T.readPixels(a, b, c, d, e, f, l, g >> Rf(l))
            }
        else
            (g = Sf(f, e, c, d, g)) ? T.readPixels(a, b, c, d, e, f, g) : X(1280)
    },
    _e: function() {},
    Ze: function(a, b, c, d) {
        T.renderbufferStorage(a, b, c, d)
    },
    Dd: function(a, b, c, d, e) {
        T.renderbufferStorageMultisample(a, b, c, d, e)
    },
    lc: function() {
        T.resumeTransformFeedback()
    },
    Ye: function(a, b) {
        T.sampleCoverage(a, !!b)
    },
    vc: function(a, b, c) {
        T.samplerParameterf(ve[a], b, c)
    },
    uc: function(a, b, c) {
        T.samplerParameterf(ve[a], b, I[c >> 2])
    },
    xc: function(a, b, c) {
        T.samplerParameteri(ve[a], b, c)
    },
    wc: function(a, b, c) {
        T.samplerParameteri(ve[a], b, G[c >> 2])
    },
    Xe: function(a, b, c, d) {
        T.scissor(a, b, c, d)
    },
    We: function() {
        X(1280)
    },
    Ve: function(a, b, c, d) {
        b = Fe(b, c, d);
        T.shaderSource(W[a], b)
    },
    Ue: function(a, b, c) {
        T.stencilFunc(a, b, c)
    },
    Te: function(a, b, c, d) {
        T.stencilFuncSeparate(a, b, c, d)
    },
    Se: function(a) {
        T.stencilMask(a)
    },
    Re: function(a, b) {
        T.stencilMaskSeparate(a, b)
    },
    Qe: function(a, b, c) {
        T.stencilOp(a, b, c)
    },
    Pe: function(a, b, c, d) {
        T.stencilOpSeparate(a, b, c, d)
    },
    Oe: function(a, b, c, d, e, f, g, l, n) {
        if (2 <= S.version)
            if (T.Zi)
                T.texImage2D(a, b, c, d, e, f, g, l, n);
            else if (n) {
                var q = Qf(l);
                T.texImage2D(a, b, c, d, e, f, g, l, q, n >> Rf(q))
            } else
                T.texImage2D(a, b, c, d, e, f, g, l, null);
        else
            T.texImage2D(a, b, c, d, e, f, g, l, n ? Sf(l, g, d, e, n) : null)
    },
    Zd: function(a, b, c, d, e, f, g, l, n, q) {
        if (T.Zi)
            T.texImage3D(a, b, c, d, e, f, g, l, n, q);
        else if (q) {
            var p = Qf(n);
            T.texImage3D(a, b, c, d, e, f, g, l, n, p, q >> Rf(p))
        } else
            T.texImage3D(a, b, c, d, e, f, g, l, n, null)
    },
    Ne: function(a, b, c) {
        T.texParameterf(a, b, c)
    },
    Me: function(a, b, c) {
        T.texParameterf(a, b, I[c >> 2])
    },
    Le: function(a, b, c) {
        T.texParameteri(a, b, c)
    },
    Ke: function(a, b, c) {
        T.texParameteri(a, b, G[c >> 2])
    },
    fc: function(a, b, c, d, e) {
        T.texStorage2D(a, b, c, d, e)
    },
    ec: function(a, b, c, d, e, f) {
        T.texStorage3D(a, b, c, d, e, f)
    },
    Je: function(a, b, c, d, e, f, g, l, n) {
        if (2 <= S.version)
            if (T.Zi)
                T.texSubImage2D(a, b, c, d, e, f, g, l, n);
            else if (n) {
                var q = Qf(l);
                T.texSubImage2D(a, b, c, d, e, f, g, l, q, n >> Rf(q))
            } else
                T.texSubImage2D(a, b, c, d, e, f, g, l, null);
        else
            q = null,
            n && (q = Sf(l, g, e, f, n)),
            T.texSubImage2D(a, b, c, d, e, f, g, l, q)
    },
    Yd: function(a, b, c, d, e, f, g, l, n, q, p) {
        if (T.Zi)
            T.texSubImage3D(a, b, c, d, e, f, g, l, n, q, p);
        else if (p) {
            var t = Qf(q);
            T.texSubImage3D(a, b, c, d, e, f, g, l, n, q, t, p >> Rf(t))
        } else
            T.texSubImage3D(a, b, c, d, e, f, g, l, n, q, null)
    },
    qd: function(a, b, c, d) {
        a = V[a];
        for (var e = [], f = 0; f < b; f++)
            e.push(x(G[c + 4 * f >> 2]));
        T.transformFeedbackVaryings(a, e, d)
    },
    Ie: function(a, b) {
        T.uniform1f(Y(a), b)
    },
    He: function(a, b, c) {
        if (2 <= S.version)
            T.uniform1fv(Y(a), I, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = Tf[b - 1], e = 0; e < b; ++e)
                    d[e] = I[c + 4 * e >> 2];
            else
                d = I.subarray(c >> 2, c + 4 * b >> 2);
            T.uniform1fv(Y(a), d)
        }
    },
    Ge: function(a, b) {
        T.uniform1i(Y(a), b)
    },
    Fe: function(a, b, c) {
        if (2 <= S.version)
            T.uniform1iv(Y(a), G, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = Uf[b - 1], e = 0; e < b; ++e)
                    d[e] = G[c + 4 * e >> 2];
            else
                d = G.subarray(c >> 2, c + 4 * b >> 2);
            T.uniform1iv(Y(a), d)
        }
    },
    ed: function(a, b) {
        T.uniform1ui(Y(a), b)
    },
    ad: function(a, b, c) {
        T.uniform1uiv(Y(a), N, c >> 2, b)
    },
    Ee: function(a, b, c) {
        T.uniform2f(Y(a), b, c)
    },
    De: function(a, b, c) {
        if (2 <= S.version)
            T.uniform2fv(Y(a), I, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = Tf[2 * b - 1], e = 0; e < 2 * b; e += 2)
                    d[e] = I[c + 4 * e >> 2],
                    d[e + 1] = I[c + (4 * e + 4) >> 2];
            else
                d = I.subarray(c >> 2, c + 8 * b >> 2);
            T.uniform2fv(Y(a), d)
        }
    },
    Ce: function(a, b, c) {
        T.uniform2i(Y(a), b, c)
    },
    Be: function(a, b, c) {
        if (2 <= S.version)
            T.uniform2iv(Y(a), G, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = Uf[2 * b - 1], e = 0; e < 2 * b; e += 2)
                    d[e] = G[c + 4 * e >> 2],
                    d[e + 1] = G[c + (4 * e + 4) >> 2];
            else
                d = G.subarray(c >> 2, c + 8 * b >> 2);
            T.uniform2iv(Y(a), d)
        }
    },
    dd: function(a, b, c) {
        T.uniform2ui(Y(a), b, c)
    },
    $c: function(a, b, c) {
        T.uniform2uiv(Y(a), N, c >> 2, 2 * b)
    },
    Ae: function(a, b, c, d) {
        T.uniform3f(Y(a), b, c, d)
    },
    ze: function(a, b, c) {
        if (2 <= S.version)
            T.uniform3fv(Y(a), I, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = Tf[3 * b - 1], e = 0; e < 3 * b; e += 3)
                    d[e] = I[c + 4 * e >> 2],
                    d[e + 1] = I[c + (4 * e + 4) >> 2],
                    d[e + 2] = I[c + (4 * e + 8) >> 2];
            else
                d = I.subarray(c >> 2, c + 12 * b >> 2);
            T.uniform3fv(Y(a), d)
        }
    },
    ye: function(a, b, c, d) {
        T.uniform3i(Y(a), b, c, d)
    },
    xe: function(a, b, c) {
        if (2 <= S.version)
            T.uniform3iv(Y(a), G, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = Uf[3 * b - 1], e = 0; e < 3 * b; e += 3)
                    d[e] = G[c + 4 * e >> 2],
                    d[e + 1] = G[c + (4 * e + 4) >> 2],
                    d[e + 2] = G[c + (4 * e + 8) >> 2];
            else
                d = G.subarray(c >> 2, c + 12 * b >> 2);
            T.uniform3iv(Y(a), d)
        }
    },
    cd: function(a, b, c, d) {
        T.uniform3ui(Y(a), b, c, d)
    },
    _c: function(a, b, c) {
        T.uniform3uiv(Y(a), N, c >> 2, 3 * b)
    },
    we: function(a, b, c, d, e) {
        T.uniform4f(Y(a), b, c, d, e)
    },
    ve: function(a, b, c) {
        if (2 <= S.version)
            T.uniform4fv(Y(a), I, c >> 2, 4 * b);
        else {
            if (72 >= b) {
                var d = Tf[4 * b - 1]
                  , e = I;
                c >>= 2;
                for (var f = 0; f < 4 * b; f += 4) {
                    var g = c + f;
                    d[f] = e[g];
                    d[f + 1] = e[g + 1];
                    d[f + 2] = e[g + 2];
                    d[f + 3] = e[g + 3]
                }
            } else
                d = I.subarray(c >> 2, c + 16 * b >> 2);
            T.uniform4fv(Y(a), d)
        }
    },
    ue: function(a, b, c, d, e) {
        T.uniform4i(Y(a), b, c, d, e)
    },
    te: function(a, b, c) {
        if (2 <= S.version)
            T.uniform4iv(Y(a), G, c >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var d = Uf[4 * b - 1], e = 0; e < 4 * b; e += 4)
                    d[e] = G[c + 4 * e >> 2],
                    d[e + 1] = G[c + (4 * e + 4) >> 2],
                    d[e + 2] = G[c + (4 * e + 8) >> 2],
                    d[e + 3] = G[c + (4 * e + 12) >> 2];
            else
                d = G.subarray(c >> 2, c + 16 * b >> 2);
            T.uniform4iv(Y(a), d)
        }
    },
    bd: function(a, b, c, d, e) {
        T.uniform4ui(Y(a), b, c, d, e)
    },
    Zc: function(a, b, c) {
        T.uniform4uiv(Y(a), N, c >> 2, 4 * b)
    },
    Nc: function(a, b, c) {
        a = V[a];
        T.uniformBlockBinding(a, b, c)
    },
    se: function(a, b, c, d) {
        if (2 <= S.version)
            T.uniformMatrix2fv(Y(a), !!c, I, d >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var e = Tf[4 * b - 1], f = 0; f < 4 * b; f += 4)
                    e[f] = I[d + 4 * f >> 2],
                    e[f + 1] = I[d + (4 * f + 4) >> 2],
                    e[f + 2] = I[d + (4 * f + 8) >> 2],
                    e[f + 3] = I[d + (4 * f + 12) >> 2];
            else
                e = I.subarray(d >> 2, d + 16 * b >> 2);
            T.uniformMatrix2fv(Y(a), !!c, e)
        }
    },
    Kd: function(a, b, c, d) {
        T.uniformMatrix2x3fv(Y(a), !!c, I, d >> 2, 6 * b)
    },
    Id: function(a, b, c, d) {
        T.uniformMatrix2x4fv(Y(a), !!c, I, d >> 2, 8 * b)
    },
    re: function(a, b, c, d) {
        if (2 <= S.version)
            T.uniformMatrix3fv(Y(a), !!c, I, d >> 2, 9 * b);
        else {
            if (32 >= b)
                for (var e = Tf[9 * b - 1], f = 0; f < 9 * b; f += 9)
                    e[f] = I[d + 4 * f >> 2],
                    e[f + 1] = I[d + (4 * f + 4) >> 2],
                    e[f + 2] = I[d + (4 * f + 8) >> 2],
                    e[f + 3] = I[d + (4 * f + 12) >> 2],
                    e[f + 4] = I[d + (4 * f + 16) >> 2],
                    e[f + 5] = I[d + (4 * f + 20) >> 2],
                    e[f + 6] = I[d + (4 * f + 24) >> 2],
                    e[f + 7] = I[d + (4 * f + 28) >> 2],
                    e[f + 8] = I[d + (4 * f + 32) >> 2];
            else
                e = I.subarray(d >> 2, d + 36 * b >> 2);
            T.uniformMatrix3fv(Y(a), !!c, e)
        }
    },
    Jd: function(a, b, c, d) {
        T.uniformMatrix3x2fv(Y(a), !!c, I, d >> 2, 6 * b)
    },
    Gd: function(a, b, c, d) {
        T.uniformMatrix3x4fv(Y(a), !!c, I, d >> 2, 12 * b)
    },
    qe: function(a, b, c, d) {
        if (2 <= S.version)
            T.uniformMatrix4fv(Y(a), !!c, I, d >> 2, 16 * b);
        else {
            if (18 >= b) {
                var e = Tf[16 * b - 1]
                  , f = I;
                d >>= 2;
                for (var g = 0; g < 16 * b; g += 16) {
                    var l = d + g;
                    e[g] = f[l];
                    e[g + 1] = f[l + 1];
                    e[g + 2] = f[l + 2];
                    e[g + 3] = f[l + 3];
                    e[g + 4] = f[l + 4];
                    e[g + 5] = f[l + 5];
                    e[g + 6] = f[l + 6];
                    e[g + 7] = f[l + 7];
                    e[g + 8] = f[l + 8];
                    e[g + 9] = f[l + 9];
                    e[g + 10] = f[l + 10];
                    e[g + 11] = f[l + 11];
                    e[g + 12] = f[l + 12];
                    e[g + 13] = f[l + 13];
                    e[g + 14] = f[l + 14];
                    e[g + 15] = f[l + 15]
                }
            } else
                e = I.subarray(d >> 2, d + 64 * b >> 2);
            T.uniformMatrix4fv(Y(a), !!c, e)
        }
    },
    Hd: function(a, b, c, d) {
        T.uniformMatrix4x2fv(Y(a), !!c, I, d >> 2, 8 * b)
    },
    Fd: function(a, b, c, d) {
        T.uniformMatrix4x3fv(Y(a), !!c, I, d >> 2, 12 * b)
    },
    Nd: function(a) {
        if (!Ff(a))
            return X(1280),
            k("GL_INVALID_ENUM in glUnmapBuffer"),
            0;
        var b = Ef(a)
          , c = pe[b];
        if (!c)
            return X(1282),
            k("buffer was never mapped in glUnmapBuffer"),
            0;
        pe[b] = null;
        c.Lk & 16 || (2 <= S.version ? T.bufferSubData(a, c.offset, A, c.Ij, c.length) : T.bufferSubData(a, c.offset, A.subarray(c.Ij, c.Ij + c.length)));
        ca(c.Ij);
        return 1
    },
    pe: function(a) {
        a = V[a];
        T.useProgram(a);
        T.Tk = a
    },
    oe: function(a) {
        T.validateProgram(V[a])
    },
    ne: function(a, b) {
        T.vertexAttrib1f(a, b)
    },
    me: function(a, b) {
        T.vertexAttrib1f(a, I[b >> 2])
    },
    le: function(a, b, c) {
        T.vertexAttrib2f(a, b, c)
    },
    ke: function(a, b) {
        T.vertexAttrib2f(a, I[b >> 2], I[b + 4 >> 2])
    },
    je: function(a, b, c, d) {
        T.vertexAttrib3f(a, b, c, d)
    },
    ie: function(a, b) {
        T.vertexAttrib3f(a, I[b >> 2], I[b + 4 >> 2], I[b + 8 >> 2])
    },
    he: function(a, b, c, d, e) {
        T.vertexAttrib4f(a, b, c, d, e)
    },
    ge: function(a, b) {
        T.vertexAttrib4f(a, I[b >> 2], I[b + 4 >> 2], I[b + 8 >> 2], I[b + 12 >> 2])
    },
    rc: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    Qg: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    bc: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    de: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    cc: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    ld: function(a, b, c, d, e) {
        T.vertexAttribI4i(a, b, c, d, e)
    },
    jd: function(a, b) {
        T.vertexAttribI4i(a, G[b >> 2], G[b + 4 >> 2], G[b + 8 >> 2], G[b + 12 >> 2])
    },
    kd: function(a, b, c, d, e) {
        T.vertexAttribI4ui(a, b, c, d, e)
    },
    id: function(a, b) {
        T.vertexAttribI4ui(a, N[b >> 2], N[b + 4 >> 2], N[b + 8 >> 2], N[b + 12 >> 2])
    },
    od: function(a, b, c, d, e) {
        var f = S.hj[a];
        T.qj ? (f.Cj = !1,
        T.vertexAttribIPointer(a, b, c, d, e)) : (f.size = b,
        f.type = c,
        f.ck = !1,
        f.Uj = d,
        f.Pj = e,
        f.Cj = !0,
        f.lk = function(g, l, n, q, p, t) {
            this.vertexAttribIPointer(g, l, n, p, t)
        }
        )
    },
    fe: function(a, b, c, d, e, f) {
        var g = S.hj[a];
        T.qj ? (g.Cj = !1,
        T.vertexAttribPointer(a, b, c, !!d, e, f)) : (g.size = b,
        g.type = c,
        g.ck = d,
        g.Uj = e,
        g.Pj = f,
        g.Cj = !0,
        g.lk = function(l, n, q, p, t, v) {
            this.vertexAttribPointer(l, n, q, p, t, v)
        }
        )
    },
    ee: function(a, b, c, d) {
        T.viewport(a, b, c, d)
    },
    Gc: function(a, b, c, d) {
        T.waitSync(xe[a], b, (c >>> 0) + 4294967296 * d)
    },
    xa: function() {
        return !1
    },
    lh: function() {
        return !Na
    },
    Tb: function(a, b, c) {
        A.copyWithin(a, b, b + c)
    },
    Jh: function(a, b) {
        function c(d) {
            P(a)(d, b) && requestAnimationFrame(c)
        }
        return requestAnimationFrame(c)
    },
    nh: function(a, b, c) {
        return Vf(a, {
            Ek: G[c >> 2],
            pk: G[c + 4 >> 2],
            Al: G[c + 8 >> 2],
            vl: b,
            Yj: G[c + 12 >> 2],
            Qk: G[c + 16 >> 2]
        })
    },
    ab: function(a, b) {
        a = sf(a);
        return a ? a.requestPointerLock || a.bk ? Qe && Ye.Bj ? Bf(a) : b ? (Ve(Bf, 2, [a]),
        1) : -2 : -1 : -4
    },
    Bb: function(a) {
        var b = A.length;
        a >>>= 0;
        if (2147483648 < a)
            return !1;
        for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + .2 / c);
            d = Math.min(d, a + 100663296);
            var e = Math;
            d = Math.max(a, d);
            e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536);
            a: {
                try {
                    ib.grow(e - tb.byteLength + 65535 >>> 16);
                    ub();
                    var f = 1;
                    break a
                } catch (g) {}
                f = void 0
            }
            if (f)
                return !0
        }
        return !1
    },
    gb: function() {
        return (df = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
    },
    Va: function(a, b, c) {
        if ("undefined" == typeof onbeforeunload)
            return -1;
        if (1 !== c)
            return -5;
        Wf(a, b);
        return 0
    },
    Za: function(a, b, c, d) {
        Xf(a, b, c, d, 12, "blur");
        return 0
    },
    z: vf,
    ta: function(a, b, c) {
        a = sf(a);
        if (!a)
            return -4;
        a.style.width = b + "px";
        a.style.height = c + "px";
        return 0
    },
    W: function(a, b, c, d) {
        Xf(a, b, c, d, 13, "focus");
        return 0
    },
    wa: function(a, b, c, d) {
        if (!bf())
            return -1;
        a = sf(a);
        if (!a)
            return -4;
        Yf(a, b, c, d, "fullscreenchange");
        Yf(a, b, c, d, "webkitfullscreenchange");
        return 0
    },
    eb: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        Zf(a, b, c, 26, "gamepadconnected");
        return 0
    },
    db: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        Zf(a, b, c, 27, "gamepaddisconnected");
        return 0
    },
    Ih: function(a, b, c) {
        return setInterval(function() {
            Fd(function() {
                P(a)(c)
            })
        }, b)
    },
    aa: function(a, b, c, d) {
        $f(a, b, c, d, 2, "keydown");
        return 0
    },
    va: function(a, b, c, d) {
        $f(a, b, c, d, 1, "keypress");
        return 0
    },
    $: function(a, b, c, d) {
        $f(a, b, c, d, 3, "keyup");
        return 0
    },
    _: function(a, b, c, d) {
        bg(a, b, c, d, 5, "mousedown");
        return 0
    },
    $a: function(a, b, c, d) {
        bg(a, b, c, d, 33, "mouseenter");
        return 0
    },
    _a: function(a, b, c, d) {
        bg(a, b, c, d, 34, "mouseleave");
        return 0
    },
    Y: function(a, b, c, d) {
        bg(a, b, c, d, 8, "mousemove");
        return 0
    },
    Lh: function(a, b, c, d) {
        bg(a, b, c, d, 35, "mouseover");
        return 0
    },
    Z: function(a, b, c, d) {
        bg(a, b, c, d, 6, "mouseup");
        return 0
    },
    Ya: function(a, b, c, d) {
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.nk || document.body.fm || document.body.bk))
            return -1;
        a = sf(a);
        if (!a)
            return -4;
        cg(a, b, c, d, "pointerlockchange");
        cg(a, b, c, d, "mozpointerlockchange");
        cg(a, b, c, d, "webkitpointerlockchange");
        cg(a, b, c, d, "mspointerlockchange");
        return 0
    },
    Xa: function(a, b, c, d) {
        dg(a, b, c, d);
        return 0
    },
    S: function(a, b, c, d) {
        eg(a, b, c, d, 25, "touchcancel");
        return 0
    },
    U: function(a, b, c, d) {
        eg(a, b, c, d, 23, "touchend");
        return 0
    },
    T: function(a, b, c, d) {
        eg(a, b, c, d, 24, "touchmove");
        return 0
    },
    V: function(a, b, c, d) {
        eg(a, b, c, d, 22, "touchstart");
        return 0
    },
    Wa: function(a, b, c) {
        if (!rf[1])
            return -4;
        fg(a, b, c);
        return 0
    },
    Ph: function(a, b, c, d) {
        gg(a, b, c, d, 31, "webglcontextlost");
        return 0
    },
    Oh: function(a, b, c, d) {
        gg(a, b, c, d, 32, "webglcontextrestored");
        return 0
    },
    X: function(a, b, c, d) {
        a = sf(a);
        return "undefined" != typeof a.onwheel ? (hg(a, b, c, d),
        0) : -1
    },
    oh: function(a) {
        Ta(x(a))
    },
    t: function() {
        throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
    },
    kh: function(a, b, c, d, e) {
        var f = a + 112
          , g = x(f)
          , l = N[f + 36 >> 2]
          , n = N[f + 40 >> 2]
          , q = N[f + 44 >> 2]
          , p = N[f + 48 >> 2]
          , t = N[f + 52 >> 2]
          , v = !!(t & 4)
          , r = !!(t & 32)
          , C = !!(t & 16)
          , y = !!(t & 64)
          , F = R => {
            Fd( () => {
                l ? P(l)(R) : b && b(R)
            }
            , y)
        }
          , K = R => {
            Fd( () => {
                q ? P(q)(R) : d && d(R)
            }
            , y)
        }
          , M = R => {
            Fd( () => {
                n ? P(n)(R) : c && c(R)
            }
            , y)
        }
          , z = R => {
            Fd( () => {
                p ? P(p)(R) : e && e(R)
            }
            , y)
        }
        ;
        t = R => {
            lg(R, F, M, K, z)
        }
        ;
        var L = (R, yb) => {
            mg(R, yb.response, ab => {
                Fd( () => {
                    l ? P(l)(ab) : b && b(ab)
                }
                , y)
            }
            , ab => {
                Fd( () => {
                    l ? P(l)(ab) : b && b(ab)
                }
                , y)
            }
            )
        }
          , fa = R => {
            lg(R, L, M, K, z)
        }
        ;
        if ("EM_IDB_STORE" === g)
            g = N[f + 84 >> 2],
            mg(a, A.slice(g, g + N[f + 88 >> 2]), F, M);
        else if ("EM_IDB_DELETE" === g)
            og(a, F, M);
        else if (C) {
            if (r)
                return 0;
            lg(a, v ? L : F, M, K, z)
        } else
            ng(a, F, r ? M : v ? fa : t);
        return a
    },
    Th: function(a, b) {
        b >>= 2;
        b = {
            alpha: !!G[b],
            depth: !!G[b + 1],
            stencil: !!G[b + 2],
            antialias: !!G[b + 3],
            premultipliedAlpha: !!G[b + 4],
            preserveDrawingBuffer: !!G[b + 5],
            powerPreference: pg[G[b + 6]],
            failIfMajorPerformanceCaveat: !!G[b + 7],
            Zj: G[b + 8],
            Ml: G[b + 9],
            rk: G[b + 10],
            zl: G[b + 11],
            rm: G[b + 12],
            sm: G[b + 13]
        };
        a = sf(a);
        return !a || b.zl ? 0 : Sd(a, b)
    },
    Mh: function(a, b) {
        if (!b)
            return -5;
        a = Td[a];
        if (!a)
            return -3;
        var c = a.jj;
        if (!c)
            return -3;
        c = c.getContextAttributes();
        G[b >> 2] = c.alpha;
        G[b + 4 >> 2] = c.depth;
        G[b + 8 >> 2] = c.stencil;
        G[b + 12 >> 2] = c.antialias;
        G[b + 16 >> 2] = c.premultipliedAlpha;
        G[b + 20 >> 2] = c.preserveDrawingBuffer;
        G[b + 24 >> 2] = c.powerPreference && pg.indexOf(c.powerPreference);
        G[b + 28 >> 2] = c.failIfMajorPerformanceCaveat;
        G[b + 32 >> 2] = a.version;
        G[b + 36 >> 2] = 0;
        G[b + 40 >> 2] = a.attributes.rk;
        return 0
    },
    Nh: function() {
        return S ? S.Fl : 0
    },
    Qh: function(a) {
        a >>= 2;
        for (var b = 0; 14 > b; ++b)
            G[a + b] = 0;
        G[a] = G[a + 1] = G[a + 3] = G[a + 4] = G[a + 8] = G[a + 10] = 1
    },
    Sh: function(a) {
        return Ud(a) ? 0 : -5
    },
    ra: function(a) {
        var b = qg[a];
        if (!b)
            return -3;
        b.onopen = b.onerror = b.onclose = b.onmessage = null;
        delete qg[a];
        return 0
    },
    Gf: function() {
        return "undefined" != typeof WebSocket
    },
    Ua: function(a) {
        if ("undefined" == typeof WebSocket)
            return -1;
        if (!a)
            return -5;
        var b = a >> 2;
        a = x(G[b]);
        a = (b = G[b + 1]) ? new WebSocket(a,x(b).split(",")) : new WebSocket(a);
        a.binaryType = "arraybuffer";
        b = qg.length;
        qg[b] = a;
        return b
    },
    Pa: function(a, b, c) {
        a = qg[a];
        if (!a)
            return -3;
        a.send(A.subarray(b, b + c));
        return 0
    },
    $f: function(a, b) {
        a = qg[a];
        if (!a)
            return -3;
        b = x(b);
        a.send(b);
        return 0
    },
    Qa: function(a, b, c) {
        Z || (Z = m(1024));
        var d = qg[a];
        if (!d)
            return -3;
        d.onclose = function(e) {
            N[Z >> 2] = a;
            N[Z + 4 >> 2] = e.wasClean;
            N[Z + 8 >> 2] = e.code;
            u(e.reason, Z + 10, 512);
            P(c)(0, Z, b)
        }
        ;
        return 0
    },
    Ra: function(a, b, c) {
        Z || (Z = m(1024));
        var d = qg[a];
        if (!d)
            return -3;
        d.onerror = function() {
            N[Z >> 2] = a;
            P(c)(0, Z, b)
        }
        ;
        return 0
    },
    Sa: function(a, b, c) {
        Z || (Z = m(1024));
        var d = qg[a];
        if (!d)
            return -3;
        d.onmessage = function(e) {
            N[Z >> 2] = a;
            if ("string" == typeof e.data) {
                var f = aa(e.data) + 1
                  , g = m(f);
                u(e.data, g, f);
                N[Z + 12 >> 2] = 1
            } else
                f = e.data.byteLength,
                g = m(f),
                E.set(new Uint8Array(e.data), g),
                N[Z + 12 >> 2] = 0;
            N[Z + 4 >> 2] = g;
            N[Z + 8 >> 2] = f;
            P(c)(0, Z, b);
            ca(g)
        }
        ;
        return 0
    },
    Ta: function(a, b, c) {
        Z || (Z = m(1024));
        var d = qg[a];
        if (!d)
            return -3;
        d.onopen = function() {
            N[Z >> 2] = a;
            P(c)(0, Z, b)
        }
        ;
        return 0
    },
    Ib: function(a, b) {
        var c = 0;
        sg().forEach(function(d, e) {
            var f = b + c;
            e = G[a + 4 * e >> 2] = f;
            for (f = 0; f < d.length; ++f)
                E[e++ >> 0] = d.charCodeAt(f);
            E[e >> 0] = 0;
            c += d.length + 1
        });
        return 0
    },
    Jb: function(a, b) {
        var c = sg();
        G[a >> 2] = c.length;
        var d = 0;
        c.forEach(function(e) {
            d += e.length + 1
        });
        G[b >> 2] = d;
        return 0
    },
    d: function(a) {
        Jg(a)
    },
    P: function(a) {
        try {
            var b = ld(a);
            Sc(b);
            return 0
        } catch (c) {
            if ("undefined" == typeof fd || !(c instanceof Q))
                throw c;
            return c.Vi
        }
    },
    Ja: function(a, b, c, d) {
        try {
            a: {
                var e = ld(a);
                a = b;
                for (var f = b = 0; f < c; f++) {
                    var g = G[a >> 2]
                      , l = G[a + 4 >> 2];
                    a += 8;
                    var n = e
                      , q = g
                      , p = l
                      , t = void 0
                      , v = E;
                    if (0 > p || 0 > t)
                        throw new Q(28);
                    if (null === n.fd)
                        throw new Q(8);
                    if (1 === (n.flags & 2097155))
                        throw new Q(8);
                    if (16384 === (n.node.mode & 61440))
                        throw new Q(31);
                    if (!n.Ti.read)
                        throw new Q(28);
                    var r = "undefined" != typeof t;
                    if (!r)
                        t = n.position;
                    else if (!n.seekable)
                        throw new Q(70);
                    var C = n.Ti.read(n, v, q, p, t);
                    r || (n.position += C);
                    var y = C;
                    if (0 > y) {
                        var F = -1;
                        break a
                    }
                    b += y;
                    if (y < l)
                        break
                }
                F = b
            }
            G[d >> 2] = F;
            return 0
        } catch (K) {
            if ("undefined" == typeof fd || !(K instanceof Q))
                throw K;
            return K.Vi
        }
    },
    yb: function(a, b, c, d, e) {
        try {
            var f = ld(a);
            a = 4294967296 * c + (b >>> 0);
            if (-9007199254740992 >= a || 9007199254740992 <= a)
                return -61;
            Tc(f, a, d);
            fb = [f.position >>> 0, (H = f.position,
            1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
            G[e >> 2] = fb[0];
            G[e + 4 >> 2] = fb[1];
            f.Gj && 0 === a && 0 === d && (f.Gj = null);
            return 0
        } catch (g) {
            if ("undefined" == typeof fd || !(g instanceof Q))
                throw g;
            return g.Vi
        }
    },
    Ia: function(a, b, c, d) {
        try {
            a: {
                var e = ld(a);
                a = b;
                for (var f = b = 0; f < c; f++) {
                    var g = G[a >> 2]
                      , l = G[a + 4 >> 2];
                    a += 8;
                    var n = Uc(e, E, g, l);
                    if (0 > n) {
                        var q = -1;
                        break a
                    }
                    b += n
                }
                q = b
            }
            G[d >> 2] = q;
            return 0
        } catch (p) {
            if ("undefined" == typeof fd || !(p instanceof Q))
                throw p;
            return p.Vi
        }
    },
    a: function() {
        return $a
    },
    lf: function(a, b, c, d) {
        function e(t, v, r, C, y, F) {
            var K = 10 === t ? 28 : 16;
            if (10 === t)
                a: {
                    var M = "";
                    var z, L = 0, fa = 0, R = 0, yb = 0;
                    y = [y[0] & 65535, y[0] >> 16, y[1] & 65535, y[1] >> 16, y[2] & 65535, y[2] >> 16, y[3] & 65535, y[3] >> 16];
                    var ab = !0;
                    for (z = 0; 5 > z; z++)
                        if (0 !== y[z]) {
                            ab = !1;
                            break
                        }
                    if (ab) {
                        z = Ag(y[6] | y[7] << 16);
                        if (-1 === y[5]) {
                            M = "::ffff:" + z;
                            break a
                        }
                        if (0 === y[5]) {
                            "0.0.0.0" === z && (z = "");
                            "0.0.0.1" === z && (z = "1");
                            M = "::" + z;
                            break a
                        }
                    }
                    for (z = 0; 8 > z; z++)
                        0 === y[z] && (1 < z - fa && (yb = 0),
                        fa = z,
                        yb++),
                        yb > L && (L = yb,
                        R = z - L + 1);
                    for (z = 0; 8 > z; z++)
                        1 < L && 0 === y[z] && z >= R && z < R + L ? z === R && (M += ":",
                        0 === R && (M += ":")) : (M += Number(Kg(y[z] & 65535)).toString(16),
                        M += 7 > z ? ":" : "")
                }
            else
                M = Ag(y);
            y = M;
            K = m(K);
            a: {
                M = y;
                switch (t) {
                case 2:
                    M = ug(M);
                    A.fill(0, K, K + 16);
                    eb[K >> 1] = t;
                    G[K + 4 >> 2] = M;
                    eb[K + 2 >> 1] = wg(F);
                    break;
                case 10:
                    M = vg(M);
                    A.fill(0, K, K + 28);
                    G[K >> 2] = t;
                    G[K + 8 >> 2] = M[0];
                    G[K + 12 >> 2] = M[1];
                    G[K + 16 >> 2] = M[2];
                    G[K + 20 >> 2] = M[3];
                    eb[K + 2 >> 1] = wg(F);
                    break;
                default:
                    F = 5;
                    break a
                }
                F = 0
            }
            !F || cb();
            F = m(32);
            G[F + 4 >> 2] = t;
            G[F + 8 >> 2] = v;
            G[F + 12 >> 2] = r;
            G[F + 24 >> 2] = C;
            G[F + 20 >> 2] = K;
            G[F + 16 >> 2] = 10 === t ? 28 : 16;
            G[F + 28 >> 2] = 0;
            return F
        }
        var f = 0
          , g = 0
          , l = 0
          , n = 0
          , q = 0
          , p = 0;
        c && (l = G[c >> 2],
        n = G[c + 4 >> 2],
        q = G[c + 8 >> 2],
        p = G[c + 12 >> 2]);
        q && !p && (p = 2 === q ? 17 : 6);
        !q && p && (q = 17 === p ? 2 : 1);
        0 === p && (p = 6);
        0 === q && (q = 1);
        if (!a && !b)
            return -2;
        if (l & -1088 || 0 !== c && G[c >> 2] & 2 && !a)
            return -1;
        if (l & 32)
            return -2;
        if (0 !== q && 1 !== q && 2 !== q)
            return -7;
        if (0 !== n && 2 !== n && 10 !== n)
            return -6;
        if (b && (b = x(b),
        g = parseInt(b, 10),
        isNaN(g)))
            return l & 1024 ? -2 : -8;
        if (!a)
            return 0 === n && (n = 2),
            0 === (l & 1) && (2 === n ? f = Lg(2130706433) : f = [0, 0, 0, 1]),
            a = e(n, q, p, null, f, g),
            G[d >> 2] = a,
            0;
        a = x(a);
        f = ug(a);
        if (null !== f)
            if (0 === n || 2 === n)
                n = 2;
            else if (10 === n && l & 8)
                f = [0, 0, Lg(65535), f],
                n = 10;
            else
                return -2;
        else if (f = vg(a),
        null !== f)
            if (0 === n || 10 === n)
                n = 10;
            else
                return -2;
        if (null != f)
            return a = e(n, q, p, a, f, g),
            G[d >> 2] = a,
            0;
        if (l & 4)
            return -2;
        a = zg(a);
        f = ug(a);
        0 === n ? n = 2 : 10 === n && (f = [0, 0, Lg(65535), f]);
        a = e(n, q, p, null, f, g);
        G[d >> 2] = a;
        return 0
    },
    oa: function(a) {
        T.activeTexture(a)
    },
    ya: function(a, b) {
        T.attachShader(V[a], W[b])
    },
    L: function(a, b) {
        34962 == a ? T.qj = b : 34963 == a && (T.ij = b);
        35051 == a ? T.Dj = b : 35052 == a && (T.Zi = b);
        T.bindBuffer(a, oe[b])
    },
    pb: function(a, b) {
        T.bindFramebuffer(a, qe[b])
    },
    F: function(a, b) {
        T.bindRenderbuffer(a, re[b])
    },
    i: function(a, b) {
        T.bindTexture(a, se[b])
    },
    Da: function(a, b) {
        T.blendFunc(a, b)
    },
    M: function(a, b, c, d) {
        T.blendFuncSeparate(a, b, c, d)
    },
    sb: function(a, b, c, d) {
        2 <= S.version ? c ? T.bufferData(a, A, d, c, b) : T.bufferData(a, b, d) : T.bufferData(a, c ? A.subarray(c, c + b) : b, d)
    },
    N: function(a) {
        T.clear(a)
    },
    ia: function(a, b, c, d) {
        T.clearColor(a, b, c, d)
    },
    Fa: function(a) {
        T.clearDepth(a)
    },
    xb: function(a) {
        T.clearStencil(a)
    },
    ha: function(a, b, c, d) {
        T.colorMask(!!a, !!b, !!c, !!d)
    },
    mb: function(a) {
        T.compileShader(W[a])
    },
    jb: function() {
        var a = De(V)
          , b = T.createProgram();
        b.name = a;
        b.tj = b.rj = b.sj = 0;
        b.jk = 1;
        V[a] = b;
        return a
    },
    ob: function(a) {
        var b = De(W);
        W[b] = T.createShader(a);
        return b
    },
    ub: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = oe[d];
            e && (T.deleteBuffer(e),
            e.name = 0,
            oe[d] = null,
            d == T.qj && (T.qj = 0),
            d == T.ij && (T.ij = 0),
            d == T.Dj && (T.Dj = 0),
            d == T.Zi && (T.Zi = 0))
        }
    },
    ka: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = G[b + 4 * c >> 2]
              , e = qe[d];
            e && (T.deleteFramebuffer(e),
            e.name = 0,
            qe[d] = null)
        }
    },
    Aa: function(a) {
        if (a) {
            var b = V[a];
            b ? (T.deleteProgram(b),
            b.name = 0,
            V[a] = null) : X(1281)
        }
    },
    J: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = re[d];
            e && (T.deleteRenderbuffer(e),
            e.name = 0,
            re[d] = null)
        }
    },
    D: function(a) {
        if (a) {
            var b = W[a];
            b ? (T.deleteShader(b),
            W[a] = null) : X(1281)
        }
    },
    pa: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = se[d];
            e && (T.deleteTexture(e),
            e.name = 0,
            se[d] = null)
        }
    },
    Ma: function(a) {
        T.depthFunc(a)
    },
    Ea: function(a) {
        T.depthMask(!!a)
    },
    hd: function(a, b) {
        T.depthRange(a, b)
    },
    p: function(a) {
        T.disable(a)
    },
    rb: function(a) {
        S.hj[a].enabled = !1;
        T.disableVertexAttribArray(a)
    },
    qb: function(a, b, c) {
        Ge(b + c);
        T.drawArrays(a, b, c);
        Ie()
    },
    s: function(a) {
        T.enable(a)
    },
    y: function(a) {
        S.hj[a].enabled = !0;
        T.enableVertexAttribArray(a)
    },
    O: function() {
        T.flush()
    },
    E: function(a, b, c, d) {
        T.framebufferRenderbuffer(a, b, c, re[d])
    },
    G: function(a, b, c, d, e) {
        T.framebufferTexture2D(a, b, c, se[d], e)
    },
    wb: function(a) {
        T.frontFace(a)
    },
    tb: function(a, b) {
        Gf(a, b, "createBuffer", oe)
    },
    Ga: function(a, b) {
        Gf(a, b, "createFramebuffer", qe)
    },
    Ba: function(a, b) {
        Gf(a, b, "createRenderbuffer", re)
    },
    n: function(a, b) {
        Gf(a, b, "createTexture", se)
    },
    ba: function(a, b, c, d, e, f, g) {
        Hf("getActiveUniform", a, b, c, d, e, f, g)
    },
    C: function(a, b) {
        return T.getAttribLocation(V[a], x(b))
    },
    Na: function() {
        var a = T.getError() || Ce;
        Ce = 0;
        return a
    },
    Oa: function(a, b) {
        Jf(a, b, 2)
    },
    qa: function(a, b) {
        Jf(a, b, 0)
    },
    hb: function(a, b, c, d) {
        a = T.getProgramInfoLog(V[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    ca: function(a, b, c) {
        if (c)
            if (a >= ne)
                X(1281);
            else if (a = V[a],
            35716 == b)
                a = T.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                G[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.tj)
                    for (b = 0; b < T.getProgramParameter(a, 35718); ++b)
                        a.tj = Math.max(a.tj, T.getActiveUniform(a, b).name.length + 1);
                G[c >> 2] = a.tj
            } else if (35722 == b) {
                if (!a.rj)
                    for (b = 0; b < T.getProgramParameter(a, 35721); ++b)
                        a.rj = Math.max(a.rj, T.getActiveAttrib(a, b).name.length + 1);
                G[c >> 2] = a.rj
            } else if (35381 == b) {
                if (!a.sj)
                    for (b = 0; b < T.getProgramParameter(a, 35382); ++b)
                        a.sj = Math.max(a.sj, T.getActiveUniformBlockName(a, b).length + 1);
                G[c >> 2] = a.sj
            } else
                G[c >> 2] = T.getProgramParameter(a, b);
        else
            X(1281)
    },
    lb: function(a, b, c, d) {
        a = T.getShaderInfoLog(W[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    za: function(a, b, c) {
        c ? 35716 == b ? (a = T.getShaderInfoLog(W[a]),
        null === a && (a = "(unknown error)"),
        G[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = T.getShaderSource(W[a]),
        G[c >> 2] = a ? a.length + 1 : 0) : G[c >> 2] = T.getShaderParameter(W[a], b) : X(1281)
    },
    r: function(a) {
        var b = ze[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = T.getSupportedExtensions() || [];
                b = b.concat(b.map(function(d) {
                    return "GL_" + d
                }));
                b = Lf(b.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = T.getParameter(a)) || X(1280);
                b = b && Lf(b);
                break;
            case 7938:
                b = T.getParameter(7938);
                b = 2 <= S.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                b = Lf(b);
                break;
            case 35724:
                b = T.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = Lf(b);
                break;
            default:
                X(1280)
            }
            ze[a] = b
        }
        return b
    },
    g: function(a, b) {
        b = x(b);
        if (a = V[a]) {
            Nf(a);
            var c = a.Lj
              , d = 0
              , e = b
              , f = Mf(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
            e = b.slice(0, f));
            if ((e = a.kk[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || T.getUniformLocation(a, b)))
                return d
        } else
            X(1281);
        return -1
    },
    ib: function(a) {
        a = V[a];
        T.linkProgram(a);
        a.Lj = 0;
        a.kk = {}
    },
    La: function(a, b) {
        3317 == a && (Be = b);
        T.pixelStorei(a, b)
    },
    ma: function(a, b, c, d, e, f, g) {
        if (2 <= S.version)
            if (T.Dj)
                T.readPixels(a, b, c, d, e, f, g);
            else {
                var l = Qf(f);
                T.readPixels(a, b, c, d, e, f, l, g >> Rf(l))
            }
        else
            (g = Sf(f, e, c, d, g)) ? T.readPixels(a, b, c, d, e, f, g) : X(1280)
    },
    da: function(a, b, c, d) {
        T.renderbufferStorage(a, b, c, d)
    },
    H: function(a, b, c, d) {
        T.scissor(a, b, c, d)
    },
    nb: function(a, b, c, d) {
        b = Fe(b, c, d);
        T.shaderSource(W[a], b)
    },
    fa: function(a, b, c) {
        T.stencilFunc(a, b, c)
    },
    vb: function(a) {
        T.stencilMask(a)
    },
    ga: function(a, b, c) {
        T.stencilOp(a, b, c)
    },
    m: function(a, b, c, d, e, f, g, l, n) {
        if (2 <= S.version)
            if (T.Zi)
                T.texImage2D(a, b, c, d, e, f, g, l, n);
            else if (n) {
                var q = Qf(l);
                T.texImage2D(a, b, c, d, e, f, g, l, q, n >> Rf(q))
            } else
                T.texImage2D(a, b, c, d, e, f, g, l, null);
        else
            T.texImage2D(a, b, c, d, e, f, g, l, n ? Sf(l, g, d, e, n) : null)
    },
    k: function(a, b, c) {
        T.texParameterf(a, b, c)
    },
    ja: function(a, b, c, d, e, f, g, l, n) {
        if (2 <= S.version)
            if (T.Zi)
                T.texSubImage2D(a, b, c, d, e, f, g, l, n);
            else if (n) {
                var q = Qf(l);
                T.texSubImage2D(a, b, c, d, e, f, g, l, q, n >> Rf(q))
            } else
                T.texSubImage2D(a, b, c, d, e, f, g, l, null);
        else
            q = null,
            n && (q = Sf(l, g, e, f, n)),
            T.texSubImage2D(a, b, c, d, e, f, g, l, q)
    },
    ea: function(a, b) {
        T.uniform1f(Y(a), b)
    },
    ci: function(a, b, c) {
        if (2 <= S.version)
            T.uniform1fv(Y(a), I, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = Tf[b - 1], e = 0; e < b; ++e)
                    d[e] = I[c + 4 * e >> 2];
            else
                d = I.subarray(c >> 2, c + 4 * b >> 2);
            T.uniform1fv(Y(a), d)
        }
    },
    K: function(a, b) {
        T.uniform1i(Y(a), b)
    },
    $h: function(a, b, c) {
        if (2 <= S.version)
            T.uniform1iv(Y(a), G, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = Uf[b - 1], e = 0; e < b; ++e)
                    d[e] = G[c + 4 * e >> 2];
            else
                d = G.subarray(c >> 2, c + 4 * b >> 2);
            T.uniform1iv(Y(a), d)
        }
    },
    bi: function(a, b, c) {
        if (2 <= S.version)
            T.uniform2fv(Y(a), I, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = Tf[2 * b - 1], e = 0; e < 2 * b; e += 2)
                    d[e] = I[c + 4 * e >> 2],
                    d[e + 1] = I[c + (4 * e + 4) >> 2];
            else
                d = I.subarray(c >> 2, c + 8 * b >> 2);
            T.uniform2fv(Y(a), d)
        }
    },
    _h: function(a, b, c) {
        if (2 <= S.version)
            T.uniform2iv(Y(a), G, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = Uf[2 * b - 1], e = 0; e < 2 * b; e += 2)
                    d[e] = G[c + 4 * e >> 2],
                    d[e + 1] = G[c + (4 * e + 4) >> 2];
            else
                d = G.subarray(c >> 2, c + 8 * b >> 2);
            T.uniform2iv(Y(a), d)
        }
    },
    ai: function(a, b, c) {
        if (2 <= S.version)
            T.uniform3fv(Y(a), I, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = Tf[3 * b - 1], e = 0; e < 3 * b; e += 3)
                    d[e] = I[c + 4 * e >> 2],
                    d[e + 1] = I[c + (4 * e + 4) >> 2],
                    d[e + 2] = I[c + (4 * e + 8) >> 2];
            else
                d = I.subarray(c >> 2, c + 12 * b >> 2);
            T.uniform3fv(Y(a), d)
        }
    },
    Zh: function(a, b, c) {
        if (2 <= S.version)
            T.uniform3iv(Y(a), G, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = Uf[3 * b - 1], e = 0; e < 3 * b; e += 3)
                    d[e] = G[c + 4 * e >> 2],
                    d[e + 1] = G[c + (4 * e + 4) >> 2],
                    d[e + 2] = G[c + (4 * e + 8) >> 2];
            else
                d = G.subarray(c >> 2, c + 12 * b >> 2);
            T.uniform3iv(Y(a), d)
        }
    },
    w: function(a, b, c) {
        if (2 <= S.version)
            T.uniform4fv(Y(a), I, c >> 2, 4 * b);
        else {
            if (72 >= b) {
                var d = Tf[4 * b - 1]
                  , e = I;
                c >>= 2;
                for (var f = 0; f < 4 * b; f += 4) {
                    var g = c + f;
                    d[f] = e[g];
                    d[f + 1] = e[g + 1];
                    d[f + 2] = e[g + 2];
                    d[f + 3] = e[g + 3]
                }
            } else
                d = I.subarray(c >> 2, c + 16 * b >> 2);
            T.uniform4fv(Y(a), d)
        }
    },
    Yh: function(a, b, c) {
        if (2 <= S.version)
            T.uniform4iv(Y(a), G, c >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var d = Uf[4 * b - 1], e = 0; e < 4 * b; e += 4)
                    d[e] = G[c + 4 * e >> 2],
                    d[e + 1] = G[c + (4 * e + 4) >> 2],
                    d[e + 2] = G[c + (4 * e + 8) >> 2],
                    d[e + 3] = G[c + (4 * e + 12) >> 2];
            else
                d = G.subarray(c >> 2, c + 16 * b >> 2);
            T.uniform4iv(Y(a), d)
        }
    },
    Xh: function(a, b, c, d) {
        if (2 <= S.version)
            T.uniformMatrix2fv(Y(a), !!c, I, d >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var e = Tf[4 * b - 1], f = 0; f < 4 * b; f += 4)
                    e[f] = I[d + 4 * f >> 2],
                    e[f + 1] = I[d + (4 * f + 4) >> 2],
                    e[f + 2] = I[d + (4 * f + 8) >> 2],
                    e[f + 3] = I[d + (4 * f + 12) >> 2];
            else
                e = I.subarray(d >> 2, d + 16 * b >> 2);
            T.uniformMatrix2fv(Y(a), !!c, e)
        }
    },
    Wh: function(a, b, c, d) {
        if (2 <= S.version)
            T.uniformMatrix3fv(Y(a), !!c, I, d >> 2, 9 * b);
        else {
            if (32 >= b)
                for (var e = Tf[9 * b - 1], f = 0; f < 9 * b; f += 9)
                    e[f] = I[d + 4 * f >> 2],
                    e[f + 1] = I[d + (4 * f + 4) >> 2],
                    e[f + 2] = I[d + (4 * f + 8) >> 2],
                    e[f + 3] = I[d + (4 * f + 12) >> 2],
                    e[f + 4] = I[d + (4 * f + 16) >> 2],
                    e[f + 5] = I[d + (4 * f + 20) >> 2],
                    e[f + 6] = I[d + (4 * f + 24) >> 2],
                    e[f + 7] = I[d + (4 * f + 28) >> 2],
                    e[f + 8] = I[d + (4 * f + 32) >> 2];
            else
                e = I.subarray(d >> 2, d + 36 * b >> 2);
            T.uniformMatrix3fv(Y(a), !!c, e)
        }
    },
    Ca: function(a, b, c, d) {
        if (2 <= S.version)
            T.uniformMatrix4fv(Y(a), !!c, I, d >> 2, 16 * b);
        else {
            if (18 >= b) {
                var e = Tf[16 * b - 1]
                  , f = I;
                d >>= 2;
                for (var g = 0; g < 16 * b; g += 16) {
                    var l = d + g;
                    e[g] = f[l];
                    e[g + 1] = f[l + 1];
                    e[g + 2] = f[l + 2];
                    e[g + 3] = f[l + 3];
                    e[g + 4] = f[l + 4];
                    e[g + 5] = f[l + 5];
                    e[g + 6] = f[l + 6];
                    e[g + 7] = f[l + 7];
                    e[g + 8] = f[l + 8];
                    e[g + 9] = f[l + 9];
                    e[g + 10] = f[l + 10];
                    e[g + 11] = f[l + 11];
                    e[g + 12] = f[l + 12];
                    e[g + 13] = f[l + 13];
                    e[g + 14] = f[l + 14];
                    e[g + 15] = f[l + 15]
                }
            } else
                e = I.subarray(d >> 2, d + 64 * b >> 2);
            T.uniformMatrix4fv(Y(a), !!c, e)
        }
    },
    kb: function(a) {
        a = V[a];
        T.useProgram(a);
        T.Tk = a
    },
    l: function(a, b, c, d, e, f) {
        var g = S.hj[a];
        T.qj ? (g.Cj = !1,
        T.vertexAttribPointer(a, b, c, !!d, e, f)) : (g.size = b,
        g.type = c,
        g.ck = d,
        g.Uj = e,
        g.Pj = f,
        g.Cj = !0,
        g.lk = function(l, n, q, p, t, v) {
            this.vertexAttribPointer(l, n, q, p, t, v)
        }
        )
    },
    Q: function(a, b, c, d) {
        T.viewport(a, b, c, d)
    },
    j: Mg,
    q: Ng,
    h: Og,
    o: Pg,
    bb: Qg,
    ua: Rg,
    R: Sg,
    u: Tg,
    f: Ug,
    e: Vg,
    x: Wg,
    Uh: Xg,
    b: function(a) {
        $a = a
    },
    sa: Eg,
    zb: function(a, b, c, d) {
        return Eg(a, b, c, d)
    }
};
(function() {
    function a(e) {
        h.asm = e.exports;
        ib = h.asm.di;
        ub();
        vb = h.asm.fi;
        xb.unshift(h.asm.ei);
        Hb("wasm-instantiate")
    }
    function b(e) {
        a(e.instance)
    }
    function c(e) {
        return Mb().then(function(f) {
            return WebAssembly.instantiate(f, d)
        }).then(function(f) {
            return f
        }).then(e, function(f) {
            k("failed to asynchronously prepare wasm: " + f);
            cb(f)
        })
    }
    var d = {
        a: Yg
    };
    Gb("wasm-instantiate");
    if (h.instantiateWasm)
        try {
            return h.instantiateWasm(d, a)
        } catch (e) {
            return k("Module.instantiateWasm callback failed with error: " + e),
            !1
        }
    (function() {
        return bb || "function" != typeof WebAssembly.instantiateStreaming || Ib() || Jb.startsWith("file://") || "function" != typeof fetch ? c(b) : fetch(Jb, {
            credentials: "same-origin"
        }).then(function(e) {
            return WebAssembly.instantiateStreaming(e, d).then(b, function(f) {
                k("wasm streaming compile failed: " + f);
                k("falling back to ArrayBuffer instantiation");
                return c(b)
            })
        })
    }
    )();
    return {}
}
)();
h.___wasm_call_ctors = function() {
    return (h.___wasm_call_ctors = h.asm.ei).apply(null, arguments)
}
;
var ba = h._memcpy = function() {
    return (ba = h._memcpy = h.asm.gi).apply(null, arguments)
}
  , m = h._malloc = function() {
    return (m = h._malloc = h.asm.hi).apply(null, arguments)
}
  , ca = h._free = function() {
    return (ca = h._free = h.asm.ii).apply(null, arguments)
}
  , wg = h._htons = function() {
    return (wg = h._htons = h.asm.ji).apply(null, arguments)
}
  , Lg = h._htonl = function() {
    return (Lg = h._htonl = h.asm.ki).apply(null, arguments)
}
  , Kg = h._ntohs = function() {
    return (Kg = h._ntohs = h.asm.li).apply(null, arguments)
}
  , Ig = h.___errno_location = function() {
    return (Ig = h.___errno_location = h.asm.mi).apply(null, arguments)
}
;
h._chat_callback = function() {
    return (h._chat_callback = h.asm.ni).apply(null, arguments)
}
;
h._join_game_callback = function() {
    return (h._join_game_callback = h.asm.oi).apply(null, arguments)
}
;
h._api_error_callback = function() {
    return (h._api_error_callback = h.asm.pi).apply(null, arguments)
}
;
h._create_game_callback = function() {
    return (h._create_game_callback = h.asm.qi).apply(null, arguments)
}
;
h._player_info_callback = function() {
    return (h._player_info_callback = h.asm.ri).apply(null, arguments)
}
;
h._log_next_game_state = function() {
    return (h._log_next_game_state = h.asm.si).apply(null, arguments)
}
;
h._start_game = function() {
    return (h._start_game = h.asm.ti).apply(null, arguments)
}
;
h._wallpaper_update_config = function() {
    return (h._wallpaper_update_config = h.asm.ui).apply(null, arguments)
}
;
h._wallpaper_reset_config = function() {
    return (h._wallpaper_reset_config = h.asm.vi).apply(null, arguments)
}
;
h._video_playback_started = function() {
    return (h._video_playback_started = h.asm.wi).apply(null, arguments)
}
;
h._video_playback_ended = function() {
    return (h._video_playback_ended = h.asm.xi).apply(null, arguments)
}
;
h._post_video_upload_callback = function() {
    return (h._post_video_upload_callback = h.asm.yi).apply(null, arguments)
}
;
h._YYSum = function() {
    return (h._YYSum = h.asm.zi).apply(null, arguments)
}
;
h._main = function() {
    return (h._main = h.asm.Ai).apply(null, arguments)
}
;
h._FSSyncCompleted = function() {
    return (h._FSSyncCompleted = h.asm.Bi).apply(null, arguments)
}
;
var Zg = h._setThrew = function() {
    return (Zg = h._setThrew = h.asm.Ci).apply(null, arguments)
}
  , mb = h.stackSave = function() {
    return (mb = h.stackSave = h.asm.Di).apply(null, arguments)
}
  , nb = h.stackRestore = function() {
    return (nb = h.stackRestore = h.asm.Ei).apply(null, arguments)
}
  , lb = h.stackAlloc = function() {
    return (lb = h.stackAlloc = h.asm.Fi).apply(null, arguments)
}
;
h.dynCall_viij = function() {
    return (h.dynCall_viij = h.asm.Gi).apply(null, arguments)
}
;
h.dynCall_vij = function() {
    return (h.dynCall_vij = h.asm.Hi).apply(null, arguments)
}
;
h.dynCall_iiiiiij = function() {
    return (h.dynCall_iiiiiij = h.asm.Ii).apply(null, arguments)
}
;
h.dynCall_iiji = function() {
    return (h.dynCall_iiji = h.asm.Ji).apply(null, arguments)
}
;
h.dynCall_jiji = function() {
    return (h.dynCall_jiji = h.asm.Ki).apply(null, arguments)
}
;
h.dynCall_ji = function() {
    return (h.dynCall_ji = h.asm.Li).apply(null, arguments)
}
;
h.dynCall_viijii = function() {
    return (h.dynCall_viijii = h.asm.Mi).apply(null, arguments)
}
;
h.dynCall_iiiiij = function() {
    return (h.dynCall_iiiiij = h.asm.Ni).apply(null, arguments)
}
;
h.dynCall_iiiiijj = function() {
    return (h.dynCall_iiiiijj = h.asm.Oi).apply(null, arguments)
}
;
h.dynCall_iiiiiijj = function() {
    return (h.dynCall_iiiiiijj = h.asm.Pi).apply(null, arguments)
}
;
function Ng(a, b, c) {
    var d = mb();
    try {
        return P(a)(b, c)
    } catch (e) {
        nb(d);
        if (e !== e + 0)
            throw e;
        Zg(1, 0)
    }
}
function Vg(a, b, c, d) {
    var e = mb();
    try {
        P(a)(b, c, d)
    } catch (f) {
        nb(e);
        if (f !== f + 0)
            throw f;
        Zg(1, 0)
    }
}
function Pg(a, b, c, d, e) {
    var f = mb();
    try {
        return P(a)(b, c, d, e)
    } catch (g) {
        nb(f);
        if (g !== g + 0)
            throw g;
        Zg(1, 0)
    }
}
function Mg(a, b) {
    var c = mb();
    try {
        return P(a)(b)
    } catch (d) {
        nb(c);
        if (d !== d + 0)
            throw d;
        Zg(1, 0)
    }
}
function Og(a, b, c, d) {
    var e = mb();
    try {
        return P(a)(b, c, d)
    } catch (f) {
        nb(e);
        if (f !== f + 0)
            throw f;
        Zg(1, 0)
    }
}
function Ug(a, b, c) {
    var d = mb();
    try {
        P(a)(b, c)
    } catch (e) {
        nb(d);
        if (e !== e + 0)
            throw e;
        Zg(1, 0)
    }
}
function Xg(a, b, c, d, e, f, g, l, n, q) {
    var p = mb();
    try {
        P(a)(b, c, d, e, f, g, l, n, q)
    } catch (t) {
        nb(p);
        if (t !== t + 0)
            throw t;
        Zg(1, 0)
    }
}
function Tg(a, b) {
    var c = mb();
    try {
        P(a)(b)
    } catch (d) {
        nb(c);
        if (d !== d + 0)
            throw d;
        Zg(1, 0)
    }
}
function Wg(a, b, c, d, e) {
    var f = mb();
    try {
        P(a)(b, c, d, e)
    } catch (g) {
        nb(f);
        if (g !== g + 0)
            throw g;
        Zg(1, 0)
    }
}
function Sg(a) {
    var b = mb();
    try {
        P(a)()
    } catch (c) {
        nb(b);
        if (c !== c + 0)
            throw c;
        Zg(1, 0)
    }
}
function Qg(a, b, c, d, e, f) {
    var g = mb();
    try {
        return P(a)(b, c, d, e, f)
    } catch (l) {
        nb(g);
        if (l !== l + 0)
            throw l;
        Zg(1, 0)
    }
}
function Rg(a, b, c, d, e, f, g, l, n, q) {
    var p = mb();
    try {
        return P(a)(b, c, d, e, f, g, l, n, q)
    } catch (t) {
        nb(p);
        if (t !== t + 0)
            throw t;
        Zg(1, 0)
    }
}
h.cwrap = function(a, b, c, d) {
    c = c || [];
    var e = c.every(function(f) {
        return "number" === f
    });
    return "string" !== b && e && !d ? h["_" + a] : function() {
        return kb(a, b, c, arguments)
    }
}
;
h.getValue = hb;
h.addRunDependency = Gb;
h.removeRunDependency = Hb;
h.FS_createPath = Yc;
h.FS_createDataFile = $c;
h.FS_createPreloadedFile = ed;
h.FS_createLazyFile = cd;
h.FS_createDevice = ad;
h.FS_unlink = Ha;
h.dynCall = Rb;
h.dynCall = Rb;
var $g;
function Wa(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a
}
Fb = function ah() {
    $g || bh();
    $g || (Fb = ah)
}
;
function bh(a) {
    function b() {
        if (!$g && ($g = !0,
        h.calledRun = !0,
        !jb)) {
            h.noFSInit || Wc || (Wc = !0,
            Vc(),
            h.stdin = h.stdin,
            h.stdout = h.stdout,
            h.stderr = h.stderr,
            h.stdin ? ad("/dev", "stdin", h.stdin) : Oc("/dev/tty", "/dev/stdin"),
            h.stdout ? ad("/dev", "stdout", null, h.stdout) : Oc("/dev/tty", "/dev/stdout"),
            h.stderr ? ad("/dev", "stderr", null, h.stderr) : Oc("/dev/tty1", "/dev/stderr"),
            Rc("/dev/stdin", 0),
            Rc("/dev/stdout", 1),
            Rc("/dev/stderr", 1));
            vc = !1;
            Ub(xb);
            Ub(zb);
            if (h.onRuntimeInitialized)
                h.onRuntimeInitialized();
            if (ch) {
                var c = a
                  , d = h._main;
                c = c || [];
                var e = c.length + 1
                  , f = lb(4 * (e + 1));
                G[f >> 2] = sb(Ka);
                for (var g = 1; g < e; g++)
                    G[(f >> 2) + g] = sb(c[g - 1]);
                G[(f >> 2) + e] = 0;
                try {
                    var l = d(e, f);
                    Jg(l)
                } catch (n) {
                    Xb(n)
                } finally {}
            }
            if (h.postRun)
                for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length; )
                    c = h.postRun.shift(),
                    Bb.unshift(c);
            Ub(Bb)
        }
    }
    a = a || Ja;
    if (!(0 < Db)) {
        if (h.preRun)
            for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length; )
                Cb();
        Ub(wb);
        0 < Db || (h.setStatus ? (h.setStatus("Running..."),
        setTimeout(function() {
            setTimeout(function() {
                h.setStatus("")
            }, 1);
            b()
        }, 1)) : b())
    }
}
h.run = bh;
function Jg(a) {
    if (!noExitRuntime) {
        if (h.onExit)
            h.onExit(a);
        jb = !0
    }
    La(a, new Wa(a))
}
if (h.preInit)
    for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length; )
        h.preInit.pop()();
var ch = !0;
h.noInitialRun && (ch = !1);
bh();
(function() {
    if ("undefined" != typeof window && !window.Qi) {
        webtransport_async_read = async d => {
            try {
                let g = d.pj.datagrams.readable.getReader();
                for (var e = !1; !e; ) {
                    var f;
                    ({value: f, done: e} = await g.read());
                    d.dk.push(f)
                }
                console.log("Closing WebTransport connection")
            } catch (g) {
                console.error("Could not open channel to read datagrams, " + g)
            }
        }
        ;
        webtransport_async_connect = async (d, e) => {
            try {
                await d.pj.ready;
                console.log("Connected successfully to relay.");
                try {
                    d.Ej = d.pj.datagrams.writable.getWriter()
                } catch (f) {
                    console.error("Could not open channel to send datagrams, " + f)
                }
            } catch (f) {
                console.error("Connection failed to " + e + ", " + f)
            }
            d.pj.closed.then( () => {
                d.Ej = null;
                console.log("Connection to " + e + " closed gracefully")
            }
            ).catch( () => {
                d.Ej = null;
                console.error("Connection to " + e + " closed abruptly")
            }
            );
            webtransport_async_read(d)
        }
        ;
        class c {
            constructor() {
                this.Ej = this.pj = null;
                this.dk = [];
                this.url = ""
            }
            destroy() {
                null != this.pj && this.pj && (this.pj.close(),
                this.pj = null);
                this.Ej = null
            }
            async connect(d, e) {
                try {
                    d.pj = new WebTransport(e)
                } catch (f) {
                    console.error("Failed to initialise WebTransport, " + f)
                }
                await webtransport_async_connect(d, e)
            }
            async send(d, e) {
                null == this.pj && await this.connect(this, this.url);
                for (var f = 10; !this.Ej && f; )
                    await new Promise(n => setTimeout(n, 100)),
                    f--;
                if (this.Ej) {
                    d = h.HEAPU8.subarray(d, d + e);
                    f = new ArrayBuffer(e);
                    for (var g = new Uint8Array(f), l = 0; l < e; l++)
                        g[l] = d[l];
                    this.Ej.write(f)
                } else
                    console.log("DatagramWriter is not initialized. Couldn't send message.")
            }
            Pl(d, e) {
                if (0 == this.dk.length)
                    return -1;
                var f = this.dk[0];
                this.dk.shift();
                var g = f.length;
                if (g > e)
                    return -1;
                d = h.HEAPU8.subarray(d, d + g);
                for (e = 0; e < g; e++)
                    d[e] = f[e];
                return g
            }
        }
        var a = []
          , b = 0;
        webtransport_set_relay = (d, e) => {
            const f = b++;
            a[f] = new c;
            a[f].url = d + ":" + e;
            return f
        }
        ;
        webtransport_send = (d, e, f) => {
            a[d].send(e, f)
        }
        ;
        webtransport_receive = (d, e, f) => a[d].Pl(e, f);
        webtransport_destroy = d => {
            a[d].destroy();
            a[d] = null
        }
    }
}
)();
"undefined" != typeof window && (api_error_callback = h.cwrap("api_error_callback", null, ["number", "string"]),
create_game_callback = h.cwrap("create_game_callback", null, ["string", "string", "string"]),
join_game_callback = h.cwrap("join_game_callback", null, ["string"]),
chat_callback = h.cwrap("chat_callback", null, ["string", "number"]),
player_info_callback = h.cwrap("player_info_callback", null, "number string string string bool string".split(" ")),
log_next_game_state = h.cwrap("log_next_game_state", null, []),
start_game = h.cwrap("start_game", null, []),
init_request_parameters = a => {
    var b = {
        method: "POST",
        credentials: "include",
        headers: {}
    };
    b.headers["Content-Type"] = "application/json;charset=UTF-8";
    b.headers["Access-Control-Allow-Credentials"] = "true";
    b.body = JSON.stringify(a);
    return b
}
,
gxc_room_size = 4,
gxc_local_player = 0,
gxc_player_info = [],
gxc_set_room_info = (a, b) => {
    gxc_room_size = a;
    gxc_local_player = b
}
,
set_local_share_url = a => {
    window.shareUrl = a;
    if (a = document.getElementById("share-button"))
        a.style.visibility = "visible"
}
,
post_share_url = a => {
    if (window.parent) {
        var b = {
            type: "share_url"
        };
        b.shareUrl = a;
        window.parent.postMessage(b, "*")
    }
}
,
gxc_request_room = (a, b, c, d, e, f) => {
    var g = location.host.startsWith("localhost") || location.host.startsWith("test.vectorwars.gmx.dev");
    g && (e = "debug");
    console.log("Requesting " + c + "-player game with game-id " + e);
    var l = {};
    l.region = b;
    l.roomSize = c;
    l.lateJoin = !!d;
    b = init_request_parameters(l);
    fetch("https://" + a + "/gg/games/" + e + "/rooms" + (f.length ? "?trackId=" + f : ""), b).then(n => {
        n.ok ? n.json().then(q => {
            var p = q.data.shareUrl
              , t = q.data.roomUrl;
            q = q.data.joinRoomUrl;
            g ? (p = location.protocol + "//" + location.host + location.pathname + "?game=debug&roomUrl=" + t,
            set_local_share_url(p)) : post_share_url(p);
            create_game_callback(q, p, t)
        }
        ) : n.json().then(q => {
            if (window.parent) {
                var p = {
                    type: "api_error"
                };
                p.error = q.errors[0].code;
                window.parent.postMessage(p, "*")
            }
            api_error_callback(n.status, q.errors[0].code)
        }
        )
    }
    )
}
,
gxc_join_room = (a, b, c, d) => {
    console.log("Joining game '" + b + "' with track-id '" + c + "' on environment '" + a + "' using url " + d);
    var e = {};
    "debug" != b && (e.gameId = b,
    e.trackId = c);
    e.roomUrl = d;
    b = init_request_parameters(e);
    fetch("https://" + a + "/gg/rooms", b).then(f => {
        f.ok ? f.json().then(g => {
            join_game_callback(g.data.roomUrl)
        }
        ) : f.json().then(g => {
            if (window.parent) {
                var l = {
                    type: "api_error"
                };
                l.error = g.errors[0].code;
                window.parent.postMessage(l, "*")
            }
            api_error_callback(f.status, g.errors[0].code)
        }
        )
    }
    );
    location.host.startsWith("localhost") || location.host.startsWith("test.vectorwars.gmx.dev") ? set_local_share_url(window.location.href) : post_share_url(window.location.href)
}
,
gxc_get_player_info = (a, b, c) => {
    console.log("Requesting player info.");
    var d = {
        method: "GET",
        credentials: "include",
        headers: {}
    };
    d.headers["Content-Type"] = "application/json;charset=UTF-8";
    d.headers["Access-Control-Allow-Credentials"] = "true";
    let e = "https://" + b + "/images/AvatarPlaceholder.png";
    fetch("https://" + a + "/gg/v2/rooms?roomUrl=" + c, d).then(f => {
        f.ok ? f.json().then(g => {
            gxc_player_info = g.data.players;
            gxc_player_info.forEach(l => {
                null !== l.playerId && (null === l.user.userId ? (l.user.userId = "",
                l.user.guest = !0) : l.user.guest = !1,
                null === l.user.username && (l.user.username = "unknown"),
                null === l.user.avatarUrl && (l.user.avatarUrl = e))
            }
            );
            window.parent && (g = {
                type: "players"
            },
            g.roomSize = gxc_room_size,
            g.local = gxc_local_player,
            g.players = gxc_player_info,
            window.parent.postMessage(g, "*"));
            gxc_player_info.forEach(l => {
                null !== l.playerId && player_info_callback(l.playerId, l.user.username, l.user.avatarUrl, l.status, l.user.guest, l.user.userId)
            }
            )
        }
        ) : (404 == f.status && [0, 1, 2, 3].forEach(g => player_info_callback(g, "unknown", e, "JOINED", !0, "")),
        f.json().then(g => console.log(g)))
    }
    )
}
,
gxc_set_player_status = (a, b) => {
    gxc_player_info.forEach(d => {
        d.playerId === a && (d.status = b)
    }
    );
    if (window.parent) {
        var c = {
            type: "players"
        };
        c.roomSize = gxc_room_size;
        c.local = gxc_local_player;
        c.players = gxc_player_info;
        window.parent.postMessage(c, "*")
    }
}
,
window.addEventListener("message", a => {
    if (a && a.data && "parent_send_chat_message" == a.data.type) {
        var b = a.data.wl;
        if (null === b || void 0 === b)
            b = -1;
        chat_callback(a.data.content || "", b)
    }
}
),
gxc_receive_chat_message = (a, b, c) => {
    window.parent.postMessage({
        type: "receive_chat_message",
        content: a,
        src: b,
        wl: c
    }, "*")
}
,
gxc_report_status = a => {
    window.parent.postMessage({
        type: "report_status",
        status: a
    }, "*")
}
);
"undefined" != typeof window && (wallpaper_update_config = h.cwrap("wallpaper_update_config", null, ["string"]),
wallpaper_reset_config = h.cwrap("wallpaper_reset_config", null, ["string"]));

     
  `
    ,bc=(()=>{const t={};return e=>{if(t[e.reason])return e.preventDefault();console.log("Important Note: Please note that identical ERROR messages generated by the game will only appear once to avoid cluttering the console"),t[e.reason]=!0}})(),Cm=t=>{const e=t.match(/\((\d+)\/(\d+)\)/);if(!e)return;const[,n,r]=e.map(s=>parseInt(s));if(!(n!==0&&!n||r!==0&&!r))return{loaded:n,total:r}};async function ao(t){try{return{data:await t,error:null}}catch(e){return{data:null,error:e instanceof Error?e:new Error(String(e))}}}const jm=t=>{var e;return(e=t.match(/script.src = "(.*)"/m))==null?void 0:e[1]},ii="runner.js",Dm=t=>{var e;if(!t||typeof t!="object")return ii;if(t.mainJS)return t.mainJS;if(!t.manifestFiles||!Array.isArray(t.manifestFiles))return ii;{const n=(e=t.manifestFiles.find(s=>s.endsWith(".wasm")))==null?void 0:e.split(".")[0],r=t.manifestFiles.find(s=>s===`${n}.js`);if(r)return r}{const n=t.manifestFiles.find(r=>r.endsWith(".js"));if(n)return n}return ii},Sa=Ht([Ku,bt],([t],e)=>{t&&(async()=>{{const n=await ao(fetch("runner.json"));if(n.error){console.error(n.error);return}if(n.data.status!==403){e(await n.data.json());return}}{const n=await ao(fetch("runner.js"));if(n.error){console.error(n.error);return}if(n.data.status!==403){e({legacyRunner:!0,mainJS:ii});return}}{const n=await ao(fetch("runner-sw.js"));if(n.error){console.error(n.error);return}if(n.data.status!==403){const r=jm(await n.data.text());if(r){e({legacyRunner:!0,mainJS:r});return}}}console.error("No entry point found. Could not find `runner.json`, `runner.js` nor `runner-sw.js`")})()},null),$m=Ht(Sa,t=>t&&Dm(t)),Bm=qr(null,t=>(window.onGameSetWindowSize=(e,n)=>t({height:Math.abs(n),width:Math.abs(e)}),()=>{window.onGameSetWindowSize=()=>{console.info("window.onGameSetWindowSize not set")}})),ur=qr(!1,t=>(window.onFirstFrameRendered=()=>t(!0),()=>{window.onFirstFrameRendered=()=>{console.info("window.onFirstFrameRendered not set")}})),Lm=qr(null,t=>{const e=n=>{const r=Cm(n);r&&t(r)};return window.Module?window.Module.setStatus=e:window.Module={setStatus:e},()=>{window.Module&&(window.Module.setStatus=()=>{console.info("window.Module.setStatus not set")})}}),Mm=qr(null,t=>(window.g_pWadLoadCallback=(e,n)=>{t({loaded:e,total:n})},()=>{window.g_pWadLoadCallback=()=>{console.info("window.g_pWadLoadCallback not set")}})),Um=Ht([Sa,Lm,Mm,ur],([t,e,n,r])=>{if(r)return 1;if(n){const{loaded:s,total:i}=n;return!i||s<0?.5:.5+.5*(s/i)}if(e){const{loaded:s,total:i}=e;return t!=null&&t.legacyRunner?s/i:.5*(s/i)}return 0});[window.manifestFiles,window.manifestFilesMD5]=(()=>{let t,e;return Sa.subscribe(n=>{var r;t=((r=n==null?void 0:n.manifestFiles)==null?void 0:r.join(";"))??"",e=(n==null?void 0:n.manifestFilesMD5)??[]}),[()=>t,()=>e]})();window.g_pAddAsyncMethod=-1;window.setAddAsyncMethod=t=>{window.g_pAddAsyncMethod=t};window.g_pJSExceptionHandler=void 0;window.setJSExceptionHandler=t=>{typeof t=="function"&&(window.g_pJSExceptionHandler=t)};window.hasJSExceptionHandler=()=>!!window.g_pJSExceptionHandler&&typeof window.g_pJSExceptionHandler=="function";window.doJSExceptionHandler=t=>{if(typeof window.g_pJSExceptionHandler=="function"){const e=JSON.parse(t);window.g_pJSExceptionHandler(e)}};window.triggerPayment=(t,e)=>{const n=un();if(!n)return;const r=window.triggerPaymentPrefix(e),s=()=>window.doGMLCallback(r,{id:t}),i=o=>{n===o.origin&&o.data==="CHECK_PAYMENT"&&(s(),window.removeEventListener("message",i))};window.addEventListener("message",i),window.parent.postMessage({event_id:"TRIGGER_PAYMENT"},{targetOrigin:n})};const Ri=(()=>{const{subscribe:t}=Ht(ur,(e,n)=>(window.pause=r=>{(r||e)&&window.GM_pause&&(window.GM_pause(),n(!0))},window.resume=r=>{(r||e)&&window.GM_unpause&&(window.GM_unpause(),n(!1))},()=>{window.pause=()=>console.info("window.pause not set"),window.resume=()=>console.info("window.pause not set")}));return{pause:e=>{var n;(n=window.pause)==null||n.call(window,!!e)},resume:e=>{var n;(n=window.resume)==null||n.call(window,!!e)},subscribe:t}})(),Yu=(()=>{const t=()=>{var n,r,s;return!!((n=window.oprt)!=null&&n.closeTab)||!!((s=(r=window.chrome)==null?void 0:r.runtime)!=null&&s.sendMessage)},{subscribe:e}=Ht(ur,(n,r)=>{r(t())},t());return{quit:()=>{var n,r,s,i;if((n=window.oprt)!=null&&n.closeTab){window.oprt.closeTab();return}if(window.chrome){(i=(s=(r=window.chrome)==null?void 0:r.runtime)==null?void 0:s.sendMessage)==null||i.call(s,"mpojjmidmnpcpopbebmecmjdkdbgdeke",{command:"closeTab"});return}},subscribe:e}})(),Lo=()=>{var n,r,s,i,o;const t=(n=window.GM_get_view_status)==null?void 0:n.call(window);(r=window.oprt)!=null&&r.enterFullscreen&&((i=(s=window.oprt)==null?void 0:s.enterFullscreen)==null||i.call(s),t&&((o=window.GM_set_view_status)==null||o.call(window,{...t,fullscreen:!0})));const e=un();e&&window.parent.postMessage("ENTER_FULL_SCREEN",e)},Fm=()=>{var e,n,r,s,i;const t=(e=window.GM_get_view_status)==null?void 0:e.call(window);(t==null?void 0:t.landscape)===!0&&(t==null?void 0:t.portrait)===!1&&((r=(n=window.oprt)==null?void 0:n.lockLandscapeOrientation)==null||r.call(n)),(t==null?void 0:t.portrait)===!0&&(t==null?void 0:t.landscape)===!1&&((i=(s=window.oprt)==null?void 0:s.lockPortraitOrientation)==null||i.call(s))},wc=t=>Array.from(new URLSearchParams(t.search).entries()).map(([e,n])=>`${e}=${n}`);function Km(t){let e,n,r,s;return{c(){e=ze("div"),n=ze("canvas"),U(n,"height",t[6]),U(n,"width",t[5]),U(n,"class","border-none bg-black transition-all duration-75"),U(n,"id","canvas"),At(n,"height",t[1]+"px"),At(n,"width",t[0]+"px"),st(n,"[image-rendering:auto]",t[4]),st(n,"[image-rendering:pixelated]",!t[4]),st(n,"hidden",!t[2]),U(e,"class","transition-opacity duration-1000"),st(e,"opacity-0",!t[2]),st(e,"opacity-100",t[2])},m(i,o){Ge(i,e,o),me(e,n),t[19](n),r||(s=Cn(n,"contextmenu",Uh(t[18])),r=!0)},p(i,[o]){o&64&&U(n,"height",i[6]),o&32&&U(n,"width",i[5]),o&2&&At(n,"height",i[1]+"px"),o&1&&At(n,"width",i[0]+"px"),o&16&&st(n,"[image-rendering:auto]",i[4]),o&16&&st(n,"[image-rendering:pixelated]",!i[4]),o&4&&st(n,"hidden",!i[2]),o&4&&st(e,"opacity-0",!i[2]),o&4&&st(e,"opacity-100",i[2])},i:Ne,o:Ne,d(i){i&&Pe(e),t[19](null),r=!1,s()}}}function qm(t,e,n){let r,s,i,o,a,u,c,l,d,h,g,v,b;et(t,$m,C=>n(13,l=C)),et(t,bt,C=>n(14,d=C)),et(t,Sm,C=>n(15,h=C)),et(t,Ku,C=>n(16,g=C)),et(t,ur,C=>n(2,v=C)),et(t,Bm,C=>n(17,b=C));let x,E=document.body.clientHeight??1,S=document.body.clientWidth??1;const k=()=>{Lo(),Fm()};Yn(()=>{window.addEventListener("unhandledrejection",bc),window.addEventListener("message",_=>{const p=un();_.origin===p&&(_.data.eventId==="PAUSE_GAME"&&(Ri.pause(!0),p&&window.parent.postMessage({eventId:_.data.eventId,success:typeof window.GM_pause=="function"},p)),_.data.eventId==="UNPAUSE_GAME"&&Ri.resume(!0))});const C=_=>{var N;if(_.origin!==un()||_.data.eventId!=="SEND_GAMEPLAYID_TO_IFRAME")return;Ea.set(!0);const p=new URL(location.href);p.searchParams.set("gamePlayId",_.data.gamePlayId),history.pushState({},"",p),(N=_.source)==null||N.postMessage("SEND_GAMEPLAYID_TO_IFRAME_RESPONSE",{targetOrigin:_.origin}),window.dispatchEvent(new CustomEvent("popstate")),window.removeEventListener("message",C)};window.addEventListener("message",C),addEventListener("resize",()=>{n(7,E=document.body.clientHeight),n(8,S=document.body.clientWidth)}),Lo(),x.requestFullscreen||n(3,x.requestFullscreen=()=>Promise.reject(),x),window.Module?(window.Module.canvas=x,window.Module.arguments=wc(window.location)):window.Module={arguments:wc(window.location),canvas:x,print:(..._)=>{console.info(..._)},printErr:(..._)=>{console.error(..._)}}}),ln(()=>{window.removeEventListener("unhandledrejection",bc)});let D,R=!1;function P(C){Zh.call(this,t,C)}function B(C){Io[C?"unshift":"push"](()=>{x=C,n(3,x)})}return t.$$.update=()=>{var C,_;if(t.$$.dirty&131072&&n(11,r=(b==null?void 0:b.height)??1),t.$$.dirty&131072&&n(12,s=(b==null?void 0:b.width)??1),t.$$.dirty&388&&v&&(document.body.clientHeight&&E!==document.body.clientHeight&&n(7,E=document.body.clientHeight),document.body.clientWidth&&S!==document.body.clientWidth&&n(8,S=document.body.clientWidth)),t.$$.dirty&6528&&n(1,i=Math.min(S*r/s,E)),t.$$.dirty&6528&&n(0,o=Math.min(E*s/r,S)),t.$$.dirty&131074&&n(6,a=(b==null?void 0:b.height)??i),t.$$.dirty&131073&&n(5,u=(b==null?void 0:b.width)??o),t.$$.dirty&16384&&n(4,c=d.interpolateColors),t.$$.dirty&90112&&g&&(C=window==null?void 0:window.Module)!=null&&C.canvas&&l&&fetch(xn(l,d)).then(p=>p.text().then(N=>{n(9,D=N)})),t.$$.dirty&124416&&(_=window==null?void 0:window.Module)!=null&&_.canvas&&l&&g&&h&&D&&!R){n(10,R=!0);const p=document.head.getElementsByTagName("base")[0];p.href=`/${d.gameId}/${d.trackId}/${d.releaseId}/`,window.Module.mainScriptUrlOrBlob=`${Gu}/${d.gameId}/${d.trackId}/${d.releaseId}/${l}`;const N=document.createElement("script");N.onload=k,N.async=!0,N.text=Pm(D),document.head.appendChild(N)}},[o,i,v,x,c,u,a,E,S,D,R,r,s,l,d,h,g,b,P,B]}class Gm extends lt{constructor(e){super(),ut(this,e,qm,Km,rt,{})}}function Ym(t){const e=[];return Yn(()=>{if(!window.chrome){const r=window.chrome;window.chrome={},e.push(()=>{window.chrome=r})}if(!window.chrome.runtime){const r=window.chrome.runtime;window.chrome.runtime={},e.push(()=>{window.chrome.runtime=r})}const n=window.chrome.runtime.sendMessage;window.chrome.runtime.sendMessage=(...r)=>{const[s,i,o]=r;if(s!=="mpojjmidmnpcpopbebmecmjdkdbgdeke")return n(...r);switch(i.command){case"product":return setTimeout(o,0,{product:"Opera GX"}),!0;case"authenticate":return window.crypto.subtle.digest("SHA-1",new TextEncoder().encode(i.randomString+"QXyd2ZCu88ec3J0X")).then(a=>o({hash:Array.from(new Uint8Array(a))})),!0;default:return!1}},e.push(()=>{window.chrome.runtime.sendMessage=n})}),ln(()=>{e.slice().reverse().forEach(n=>n())}),[]}class Hm extends lt{constructor(e){super(),ut(this,e,Ym,null,rt,{})}}const mt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,at=Object.keys,_t=Array.isArray;function Mt(t,e){return typeof e!="object"||at(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||mt.Promise||(mt.Promise=Promise);const Mr=Object.getPrototypeOf,Vm={}.hasOwnProperty;function Pt(t,e){return Vm.call(t,e)}function Ur(t,e){typeof e=="function"&&(e=e(Mr(t))),(typeof Reflect>"u"?at:Reflect.ownKeys)(e).forEach(n=>{_n(t,n,e[n])})}const Hu=Object.defineProperty;function _n(t,e,n,r){Hu(t,e,Mt(n&&Pt(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Pr(t){return{from:function(e){return t.prototype=Object.create(e.prototype),_n(t.prototype,"constructor",t),{extend:Ur.bind(null,t.prototype)}}}}const Zm=Object.getOwnPropertyDescriptor;function ka(t,e){let n;return Zm(t,e)||(n=Mr(t))&&ka(n,e)}const zm=[].slice;function Ii(t,e,n){return zm.call(t,e,n)}function Vu(t,e){return e(t)}function Xr(t){if(!t)throw new Error("Assertion Failed")}function Zu(t){mt.setImmediate?setImmediate(t):setTimeout(t,0)}function vn(t,e){if(Pt(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=vn(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:vn(a,e.substr(o+1))}}function Yt(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){Xr(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Yt(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?_t(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var u=t[o];u&&Pt(t,o)||(u=t[o]={}),Yt(u,a,n)}}else n===void 0?_t(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function zu(t){var e={};for(var n in t)Pt(t,n)&&(e[n]=t[n]);return e}const Wm=[].concat;function Wu(t){return Wm.apply([],t)}const Jm="Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Wu([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>mt[t]),Ju=new Set(Jm.map(t=>mt[t]));function Xu(t){const e={};for(const n in t)if(Pt(t,n)){const r=t[n];e[n]=!r||typeof r!="object"||Ju.has(r.constructor)?r:Xu(r)}return e}let os=null;function Mn(t){os=new WeakMap;const e=Mo(t);return os=null,e}function Mo(t){if(!t||typeof t!="object")return t;let e=os.get(t);if(e)return e;if(_t(t)){e=[],os.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Mo(t[n]))}else if(Ju.has(t.constructor))e=t;else{const i=Mr(t);for(var s in e=i===Object.prototype?{}:Object.create(i),os.set(t,e),t)Pt(t,s)&&(e[s]=Mo(t[s]))}return e}const{toString:Xm}={};function Uo(t){return Xm.call(t).slice(8,-1)}const Fo=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Qm=typeof Fo=="symbol"?function(t){var e;return t!=null&&(e=t[Fo])&&e.apply(t)}:function(){return null};function Qr(t,e){const n=t.indexOf(e);return n>=0&&t.splice(n,1),n>=0}const vr={};function mn(t){var e,n,r,s;if(arguments.length===1){if(_t(t))return t.slice();if(this===vr&&typeof t=="string")return[t];if(s=Qm(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const xa=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var En=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Qu(t,e){En=t,el=e}var el=()=>!0;const ey=!new Error("").stack;function lr(){if(ey)try{throw lr.arguments,new Error}catch(t){return t}return new Error}function Ko(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(el).map(r=>`
`+r).join("")):""}var tl=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ta=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(tl),ty={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Cr(t,e){this._e=lr(),this.name=t,this.message=e}function nl(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Pi(t,e,n,r){this._e=lr(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=nl(t,e)}function br(t,e){this._e=lr(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=nl(t,this.failures)}Pr(Cr).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Ko(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Pr(Pi).from(Cr),Pr(br).from(Cr);var Oa=Ta.reduce((t,e)=>(t[e]=e+"Error",t),{});const ny=Cr;var oe=Ta.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=lr(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=ty[e]||n,this.inner=null)}return Pr(r).from(ny),t[e]=r,t},{});oe.Syntax=SyntaxError,oe.Type=TypeError,oe.Range=RangeError;var Ec=tl.reduce((t,e)=>(t[e+"Error"]=oe[e],t),{}),oi=Ta.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=oe[e]),t),{});function Me(){}function Ns(t){return t}function ry(t,e){return t==null||t===Ns?e:function(n){return e(t(n))}}function ir(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function sy(t,e){return t===Me?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?ir(r,this.onsuccess):r),s&&(this.onerror=this.onerror?ir(s,this.onerror):s),i!==void 0?i:n}}function iy(t,e){return t===Me?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?ir(n,this.onsuccess):n),r&&(this.onerror=this.onerror?ir(r,this.onerror):r)}}function oy(t,e){return t===Me?e:function(n){var r=t.apply(this,arguments);Mt(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?ir(s,this.onsuccess):s),i&&(this.onerror=this.onerror?ir(i,this.onerror):i),r===void 0?o===void 0?void 0:o:Mt(r,o)}}function ay(t,e){return t===Me?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Na(t,e){return t===Me?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}oi.ModifyError=Pi,oi.DexieError=Cr,oi.BulkError=br;var As={};const[Sc,Ci,cy]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Mr(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Mr(e),t]})(),uy=Ci&&Ci.then,ai=Sc&&Sc.constructor,Aa=!!cy;var qo=!1,as=function(t,e){es.push([t,e]),ji&&(queueMicrotask(fy),ji=!1)},Go=!0,ji=!0,Xn=[],ci=[],Yo=null,Ho=Ns,jn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Me,pgp:!1,env:{},finalize:Me},X=jn,es=[],Qn=0,ui=[];function Z(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=X;if(En&&(this._stackHolder=lr(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==As)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Zo(this,this._value))}this._state=null,this._value=null,++e.ref,sl(this,t)}const Vo={get:function(){var t=X,e=Di;function n(r,s){var i=!t.global&&(t!==X||e!==Di);const o=i&&!Fn();var a=new Z((u,c)=>{Ra(this,new rl($i(r,t,i,o),$i(s,t,i,o),u,c,t))});return En&&al(a,this),a}return n.prototype=As,n},set:function(t){_n(this,"then",t&&t.prototype===As?Vo:{get:function(){return t},set:Vo.set})}};function rl(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function sl(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Yr();n&&typeof n.then=="function"?sl(t,(s,i)=>{n instanceof Z?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,il(t)),r&&Hr()}},Zo.bind(null,t))}catch(n){Zo(t,n)}}function Zo(t,e){if(ci.push(e),t._state===null){var n=t._lib&&Yr();e=Ho(e),t._state=!1,t._value=e,En&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=ka(e,"stack");e._promise=t,_n(e,"stack",{get:()=>qo?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Xn.some(s=>s._value===r._value)||Xn.push(r)}(t),il(t),n&&Hr()}}function il(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)Ra(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Qn===0&&(++Qn,as(()=>{--Qn==0&&Ia()},[]))}function Ra(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Qn,as(ly,[n,t,e])}else t._listeners.push(e)}function ly(t,e,n){try{Yo=e;var r,s=e._value;e._state?r=t(s):(ci.length&&(ci=[]),r=t(s),ci.indexOf(s)===-1&&function(i){for(var o=Xn.length;o;)if(Xn[--o]._value===i._value)return void Xn.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Yo=null,--Qn==0&&Ia(),--n.psd.ref||n.psd.finalize()}}function ol(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Ko(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return En&&((r=Ko(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&ol(t._prev,e,n)),e}function al(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function fy(){or(jn,()=>{Yr()&&Hr()})}function Yr(){var t=Go;return Go=!1,ji=!1,t}function Hr(){var t,e,n;do for(;es.length>0;)for(t=es,es=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(es.length>0);Go=!0,ji=!0}function Ia(){var t=Xn;Xn=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=ui.slice(0),n=e.length;n;)e[--n]()}function Zs(t){return new Z(As,!1,t)}function He(t,e){var n=X;return function(){var r=Yr(),s=X;try{return Kn(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{Kn(s,!1),r&&Hr()}}}Ur(Z.prototype,{then:Vo,_then:function(t,e){Ra(this,new rl(null,null,t,e,X))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Zs(r)):this.then(null,r=>r&&r.name===e?n(r):Zs(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Zs(e)))},stack:{get:function(){if(this._stack)return this._stack;try{qo=!0;var t=ol(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{qo=!1}}},timeout:function(t,e){return t<1/0?new Z((n,r)=>{var s=setTimeout(()=>r(new oe.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&_n(Z.prototype,Symbol.toStringTag,"Dexie.Promise"),jn.env=cl(),Ur(Z,{all:function(){var t=mn.apply(null,arguments).map(zs);return new Z(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>Z.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof Z)return t;if(t&&typeof t.then=="function")return new Z((n,r)=>{t.then(n,r)});var e=new Z(As,!0,t);return al(e,Yo),e},reject:Zs,race:function(){var t=mn.apply(null,arguments).map(zs);return new Z((e,n)=>{t.map(r=>Z.resolve(r).then(e,n))})},PSD:{get:()=>X,set:t=>X=t},totalEchoes:{get:()=>Di},newPSD:Un,usePSD:or,scheduler:{get:()=>as,set:t=>{as=t}},rejectionMapper:{get:()=>Ho,set:t=>{Ho=t}},follow:(t,e)=>new Z((n,r)=>Un((s,i)=>{var o=X;o.unhandleds=[],o.onunhandled=i,o.finalize=ir(function(){(function(a){function u(){a(),ui.splice(ui.indexOf(u),1)}ui.push(u),++Qn,as(()=>{--Qn==0&&Ia()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),ai&&(ai.allSettled&&_n(Z,"allSettled",function(){const t=mn.apply(null,arguments).map(zs);return new Z(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>Z.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),ai.any&&typeof AggregateError<"u"&&_n(Z,"any",function(){const t=mn.apply(null,arguments).map(zs);return new Z((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>Z.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const gt={awaits:0,echoes:0,id:0};var dy=0,li=[],co=0,Di=0,hy=0;function Un(t,e,n,r){var s=X,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++hy;var o=jn.env;i.env=Aa?{Promise:Z,PromiseProp:{value:Z,configurable:!0,writable:!0},all:Z.all,race:Z.race,allSettled:Z.allSettled,any:Z.any,resolve:Z.resolve,reject:Z.reject,nthen:kc(o.nthen,i),gthen:kc(o.gthen,i)}:{},e&&Mt(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=or(i,t,n,r);return i.ref===0&&i.finalize(),a}function Vr(){return gt.id||(gt.id=++dy),++gt.awaits,gt.echoes+=100,gt.id}function Fn(){return!!gt.awaits&&(--gt.awaits==0&&(gt.id=0),gt.echoes=100*gt.awaits,!0)}function zs(t){return gt.echoes&&t&&t.constructor===ai?(Vr(),t.then(e=>(Fn(),e),e=>(Fn(),nt(e)))):t}function py(t){++Di,gt.echoes&&--gt.echoes!=0||(gt.echoes=gt.id=0),li.push(X),Kn(t,!0)}function my(){var t=li[li.length-1];li.pop(),Kn(t,!1)}function Kn(t,e){var n=X;if((e?!gt.echoes||co++&&t===X:!co||--co&&t===X)||queueMicrotask(e?py.bind(null,t):my),t!==X&&(X=t,n===jn&&(jn.env=cl()),Aa)){var r=jn.env.Promise,s=t.env;Ci.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(mt,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function cl(){var t=mt.Promise;return Aa?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(mt,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:Ci.then,gthen:t.prototype.then}:{}}function or(t,e,n,r,s){var i=X;try{return Kn(t,!0),e(n,r,s)}finally{Kn(i,!1)}}function $i(t,e,n,r){return typeof t!="function"?t:function(){var s=X;n&&Vr(),Kn(e,!0);try{return t.apply(this,arguments)}finally{Kn(s,!1),r&&queueMicrotask(Fn)}}}function kc(t,e){return function(n,r){return t.call(this,$i(n,e),$i(r,e))}}(""+uy).indexOf("[native code]")===-1&&(Vr=Fn=Me);var nt=Z.reject;function zo(t,e,n,r){if(t.idbdb&&(t._state.openComplete||X.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===Oa.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>zo(t,e,n,r))):nt(i)}return s._promise(e,(i,o)=>Un(()=>(X.trans=s,r(i,o,s)))).then(i=>{if(e==="readwrite")try{s.idbtrans.commit()}catch{}return e==="readonly"?i:s._completion.then(()=>i)})}if(t._state.openComplete)return nt(new oe.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return nt(new oe.DatabaseClosed);t.open().catch(Me)}return t._state.dbReadyPromise.then(()=>zo(t,e,n,r))}const zn=String.fromCharCode(65535),hn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",cs=[],Wi=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),yy=Wi,gy=Wi,ul=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function ar(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const ll={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ws(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Mn(e))[t],e)}function _y(){throw oe.Type()}function Ce(t,e){try{const n=xc(t),r=xc(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,u=o<a?o:a;for(let c=0;c<u;++c)if(s[c]!==i[c])return s[c]<i[c]?-1:1;return o===a?0:o<a?-1:1}(Tc(t),Tc(e));case"Array":return function(s,i){const o=s.length,a=i.length,u=o<a?o:a;for(let c=0;c<u;++c){const l=Ce(s[c],i[c]);if(l!==0)return l}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function xc(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Uo(t);return n==="ArrayBuffer"?"binary":n}function Tc(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class Oc{_trans(e,n,r){const s=this._tx||X.trans,i=this.name;function o(u,c,l){if(!l.schema[i])throw new oe.NotFound("Table "+i+" not part of transaction");return n(l.idbtrans,l)}const a=Yr();try{return s&&s.db===this.db?s===X.trans?s._promise(e,o,r):Un(()=>s._promise(e,o,r),{trans:s,transless:X.transless||X}):zo(this.db,e,[this.name],o)}finally{a&&Hr()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(_t(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=at(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>{if(c.compound&&n.every(l=>c.keyPath.indexOf(l)>=0)){for(let l=0;l<n.length;++l)if(n.indexOf(c.keyPath[l])===-1)return!1;return!0}return!1}).sort((c,l)=>c.keyPath.length-l.keyPath.length)[0];if(r&&this.db._maxKey!==zn){const c=r.keyPath.slice(0,n.length);return this.where(c).equals(c.map(l=>e[l]))}!r&&En&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(c,l){return i.cmp(c,l)===0}const[a,u]=n.reduce(([c,l],d)=>{const h=s[d],g=e[d];return[c||h,c||!h?ar(l,h&&h.multi?v=>{const b=vn(v,d);return _t(b)&&b.some(x=>o(g,x))}:v=>o(g,vn(v,d))):l]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(u):r?this.filter(u):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,_t(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){const{db:n,name:r}=this;this.schema.mappedClass=e,e.prototype instanceof _y&&(e=class extends e{get db(){return n}table(){return r}});const s=new Set;for(let o=e.prototype;o;o=Mr(o))Object.getOwnPropertyNames(o).forEach(a=>s.add(a));const i=o=>{if(!o)return o;const a=Object.create(e.prototype);for(let u in o)if(!s.has(u))try{a[u]=o[u]}catch{}return a};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e}defineClass(){return this.mapToClass(function(e){Mt(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Ws(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?Z.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Yt(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||_t(e))return this.where(":id").equals(e).modify(n);{const r=vn(e,this.schema.primKey.keyPath);return r===void 0?nt(new oe.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Ws(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?Z.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Yt(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?Z.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:ll})).then(e=>e.numFailures?Z.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:u}=this.schema.primKey;if(u&&s)throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new oe.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let l=u&&a?e.map(Ws(u)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:l,wantResults:i}).then(({numFailures:d,results:h,lastResult:g,failures:v})=>{if(d===0)return i?h:g;throw new br(`${this.name}.bulkAdd(): ${d} of ${c} operations failed`,v)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:u}=this.schema.primKey;if(u&&s)throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new oe.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let l=u&&a?e.map(Ws(u)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:l,wantResults:i}).then(({numFailures:d,results:h,lastResult:g,failures:v})=>{if(d===0)return i?h:g;throw new br(`${this.name}.bulkPut(): ${d} of ${c} operations failed`,v)})})}bulkUpdate(e){const n=this.core,r=e.map(o=>o.key),s=e.map(o=>o.changes),i=[];return this._trans("readwrite",o=>n.getMany({trans:o,keys:r,cache:"clone"}).then(a=>{const u=[],c=[];e.forEach(({key:d,changes:h},g)=>{const v=a[g];if(v){for(const b of Object.keys(h)){const x=h[b];if(b===this.schema.primKey.keyPath){if(Ce(x,d)!==0)throw new oe.Constraint("Cannot update primary key in bulkUpdate()")}else Yt(v,b,x)}i.push(g),u.push(d),c.push(v)}});const l=u.length;return n.mutate({trans:o,type:"put",keys:u,values:c,updates:{keys:r,changeSpecs:s}}).then(({numFailures:d,failures:h})=>{if(d===0)return l;for(const g of Object.keys(h)){const v=i[Number(g)];if(v!=null){const b=h[g];delete h[g],h[v]=b}}throw new br(`${this.name}.bulkUpdate(): ${d} of ${l} operations failed`,h)})}))}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new br(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function us(t){var e={},n=function(a,u){if(u){for(var c=arguments.length,l=new Array(c-1);--c;)l[c-1]=arguments[c];return e[a].subscribe.apply(null,l),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,u,c){if(typeof a=="object")return o(a);u||(u=ay),c||(c=Me);var l={subscribers:[],fire:c,subscribe:function(d){l.subscribers.indexOf(d)===-1&&(l.subscribers.push(d),l.fire=u(l.fire,d))},unsubscribe:function(d){l.subscribers=l.subscribers.filter(function(h){return h!==d}),l.fire=l.subscribers.reduce(u,c)}};return e[a]=n[a]=l,l}function o(a){at(a).forEach(function(u){var c=a[u];if(_t(c))i(u,a[u][0],a[u][1]);else{if(c!=="asap")throw new oe.InvalidArgument("Invalid event config");var l=i(u,Ns,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];l.subscribers.forEach(function(g){Zu(function(){g.apply(null,h)})})})}})}}function zr(t,e){return Pr(e).from({prototype:t}),e}function pr(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function uo(t,e){t.filter=ar(t.filter,e)}function lo(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>ar(r(),e()):e,t.justLimit=n&&!r}function fi(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new oe.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Nc(t,e,n){const r=fi(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Js(t,e,n,r){const s=t.replayFilter?ar(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,u,c)=>{if(!s||s(u,c,h=>u.stop(h),h=>u.fail(h))){var l=u.primaryKey,d=""+l;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(l)),Pt(i,d)||(i[d]=!0,e(a,u,c))}};return Promise.all([t.or._iterate(o,n),Ac(Nc(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Ac(Nc(t,r,n),ar(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Ac(t,e,n,r){var s=He(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=Me},a=>{i.fail(a),o=Me})||s(i.value,i,a=>o=a),o()})})}class vy{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,nt.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,nt.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=ar(n.algorithm,e)}_iterate(e,n){return Js(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&Mt(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Js(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(pr(r,!0))return s.count({trans:n,query:{index:fi(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Js(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(c,l){return l?o(c[r[l]],l-1):c[s]}var a=this._ctx.dir==="next"?1:-1;function u(c,l){var d=o(c,i),h=o(l,i);return d<h?-a:d>h?a:0}return this.toArray(function(c){return c.sort(u)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&pr(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=fi(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Js(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,pr(n)?lo(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):lo(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),lo(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return uo(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return uo(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=ar(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&pr(n,!0)&&n.limit>0)return this._read(s=>{var i=fi(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return uo(this._ctx,function(s){var i=s.primaryKey.toString(),o=Pt(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=at(e),o=i.length;s=function(b){for(var x=!1,E=0;E<o;++E){var S=i[E],k=e[S];vn(b,S)!==k&&(Yt(b,S,k),x=!0)}return x}}const a=n.table.core,{outbound:u,extractKey:c}=a.schema.primaryKey,l=this.db._options.modifyChunkSize||200,d=[];let h=0;const g=[],v=(b,x)=>{const{failures:E,numFailures:S}=x;h+=b-S;for(let k of at(E))d.push(E[k])};return this.clone().primaryKeys().then(b=>{const x=E=>{const S=Math.min(l,b.length-E);return a.getMany({trans:r,keys:b.slice(E,E+S),cache:"immutable"}).then(k=>{const D=[],R=[],P=u?[]:null,B=[];for(let _=0;_<S;++_){const p=k[_],N={value:Mn(p),primKey:b[E+_]};s.call(N,N.value,N)!==!1&&(N.value==null?B.push(b[E+_]):u||Ce(c(p),c(N.value))===0?(R.push(N.value),u&&P.push(b[E+_])):(B.push(b[E+_]),D.push(N.value)))}const C=pr(n)&&n.limit===1/0&&(typeof e!="function"||e===fo)&&{index:n.index,range:n.range};return Promise.resolve(D.length>0&&a.mutate({trans:r,type:"add",values:D}).then(_=>{for(let p in _.failures)B.splice(parseInt(p),1);v(D.length,_)})).then(()=>(R.length>0||C&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:P,values:R,criteria:C,changeSpec:typeof e!="function"&&e}).then(_=>v(R.length,_))).then(()=>(B.length>0||C&&e===fo)&&a.mutate({trans:r,type:"delete",keys:B,criteria:C}).then(_=>v(B.length,_))).then(()=>b.length>E+S&&x(E+l))})};return x(0).then(()=>{if(d.length>0)throw new Pi("Error modifying one or more objects",d,h,g);return b.length})})})}delete(){var e=this._ctx,n=e.range;return pr(e)&&(e.isPrimKey&&!gy||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:u,results:c,numFailures:l})=>{if(l)throw new Pi("Could not delete some values",Object.keys(a).map(d=>a[d]),o-l);return o-l}))}):this.modify(fo)}}const fo=(t,e)=>e.value=null;function by(t,e){return t<e?-1:t===e?0:1}function wy(t,e){return t>e?-1:t===e?0:1}function Lt(t,e,n){var r=t instanceof dl?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function mr(t){return new t.Collection(t,()=>fl("")).limit(0)}function Ey(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,u=0;u<o;++u){var c=e[u];if(c!==r[u])return s(t[u],n[u])<0?t.substr(0,u)+n[u]+n.substr(u+1):s(t[u],r[u])<0?t.substr(0,u)+r[u]+n.substr(u+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[u],c)<0&&(a=u)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Xs(t,e,n,r){var s,i,o,a,u,c,l,d=n.length;if(!n.every(b=>typeof b=="string"))return Lt(t,"String expected.");function h(b){s=function(E){return E==="next"?S=>S.toUpperCase():S=>S.toLowerCase()}(b),i=function(E){return E==="next"?S=>S.toLowerCase():S=>S.toUpperCase()}(b),o=b==="next"?by:wy;var x=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,S){return o(E.lower,S.lower)});a=x.map(function(E){return E.upper}),u=x.map(function(E){return E.lower}),c=b,l=b==="next"?"":r}h("next");var g=new t.Collection(t,()=>Tn(a[0],u[d-1]+r));g._ondirectionchange=function(b){h(b)};var v=0;return g._addAlgorithm(function(b,x,E){var S=b.key;if(typeof S!="string")return!1;var k=i(S);if(e(k,u,v))return!0;for(var D=null,R=v;R<d;++R){var P=Ey(S,k,a[R],u[R],o,c);P===null&&D===null?v=R+1:(D===null||o(D,P)>0)&&(D=P)}return x(D!==null?function(){b.continue(D+l)}:E),!1}),g}function Tn(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function fl(t){return{type:1,lower:t,upper:t}}class dl{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?mr(this):new this.Collection(this,()=>Tn(e,n,!r,!s))}catch{return Lt(this,hn)}}equals(e){return e==null?Lt(this,hn):new this.Collection(this,()=>fl(e))}above(e){return e==null?Lt(this,hn):new this.Collection(this,()=>Tn(e,void 0,!0))}aboveOrEqual(e){return e==null?Lt(this,hn):new this.Collection(this,()=>Tn(e,void 0,!1))}below(e){return e==null?Lt(this,hn):new this.Collection(this,()=>Tn(void 0,e,!1,!0))}belowOrEqual(e){return e==null?Lt(this,hn):new this.Collection(this,()=>Tn(void 0,e))}startsWith(e){return typeof e!="string"?Lt(this,"String expected."):this.between(e,e+zn,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Xs(this,(n,r)=>n.indexOf(r[0])===0,[e],zn)}equalsIgnoreCase(e){return Xs(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=mn.apply(vr,arguments);return e.length===0?mr(this):Xs(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=mn.apply(vr,arguments);return e.length===0?mr(this):Xs(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,zn)}anyOf(){const e=mn.apply(vr,arguments);let n=this._cmp;try{e.sort(n)}catch{return Lt(this,hn)}if(e.length===0)return mr(this);const r=new this.Collection(this,()=>Tn(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const u=i.key;for(;n(u,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(u,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=mn.apply(vr,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Lt(this,hn)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return mr(this);if(!e.every(S=>S[0]!==void 0&&S[1]!==void 0&&s(S[0],S[1])<=0))return Lt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",oe.InvalidArgument);const u=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let l,d=s;function h(S,k){return d(S[0],k[0])}try{l=e.reduce(function(S,k){let D=0,R=S.length;for(;D<R;++D){const P=S[D];if(r(k[0],P[1])<0&&r(k[1],P[0])>0){P[0]=o(P[0],k[0]),P[1]=a(P[1],k[1]);break}}return D===R&&S.push(k),S},[]),l.sort(h)}catch{return Lt(this,hn)}let g=0;const v=c?S=>s(S,l[g][1])>0:S=>s(S,l[g][1])>=0,b=u?S=>i(S,l[g][0])>0:S=>i(S,l[g][0])>=0;let x=v;const E=new this.Collection(this,()=>Tn(l[0][0],l[l.length-1][1],!u,!c));return E._ondirectionchange=S=>{S==="next"?(x=v,d=s):(x=b,d=i),l.sort(h)},E._addAlgorithm((S,k,D)=>{for(var R=S.key;x(R);)if(++g,g===l.length)return k(D),!1;return!!function(P){return!v(P)&&!b(P)}(R)||(this._cmp(R,l[g][1])===0||this._cmp(R,l[g][0])===0||k(()=>{d===s?S.continue(l[g][0]):S.continue(l[g][1])}),!1)}),E}startsWithAnyOf(){const e=mn.apply(vr,arguments);return e.every(n=>typeof n=="string")?e.length===0?mr(this):this.inAnyRange(e.map(n=>[n,n+zn])):Lt(this,"startsWithAnyOf() only works with strings")}}function on(t){return He(function(e){return Rs(e),t(e.target.error),!1})}function Rs(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const wn=us(null,"storagemutated");class Sy{_lock(){return Xr(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this}_unlock(){if(Xr(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{or(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&X.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(Xr(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new oe.DatabaseClosed(r);case"MissingAPIError":throw new oe.MissingAPI(r.message,r);default:throw new oe.OpenFailed(r)}if(!this.active)throw new oe.TransactionInactive;return Xr(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=He(s=>{Rs(s),this._reject(e.error)}),e.onabort=He(s=>{Rs(s),this.active&&this._reject(new oe.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=He(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&wn.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return nt(new oe.ReadOnly("Transaction is readonly"));if(!this.active)return nt(new oe.TransactionInactive);if(this._locked())return new Z((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},X])});if(r)return Un(()=>{var i=new Z((o,a)=>{this._lock();const u=n(o,a,this);u&&u.then&&u.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new Z((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=Z.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new Z((o,a)=>{r.then(u=>n._waitingQueue.push(He(o.bind(null,u))),u=>n._waitingQueue.push(He(a.bind(null,u)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new oe.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Pt(n,e))return n[e];const r=this.schema[e];if(!r)throw new oe.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Wo(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+hl(e)}}function hl(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function pl(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(r=n,s=i=>[i.name,i],r.reduce((i,o,a)=>{var u=s(o,a);return u&&(i[u[0]]=u[1]),i},{}))};var r,s}let Is=t=>{try{return t.only([[]]),Is=()=>[[]],[[]]}catch{return Is=()=>zn,zn}};function Jo(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>vn(n,e)}(t):e=>vn(e,t)}function Rc(t){return[].slice.call(t)}let ky=0;function ls(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function xy(t,e,n){function r(u){if(u.type===3)return null;if(u.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:l,lowerOpen:d,upperOpen:h}=u;return c===void 0?l===void 0?null:e.upperBound(l,!!h):l===void 0?e.lowerBound(c,!!d):e.bound(c,l,!!d,!!h)}const{schema:s,hasGetAll:i}=function(u,c){const l=Rc(u.objectStoreNames);return{schema:{name:u.name,tables:l.map(d=>c.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:g}=d,v=_t(h),b=h==null,x={},E={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b,compound:v,keyPath:h,autoIncrement:g,unique:!0,extractKey:Jo(h)},indexes:Rc(d.indexNames).map(S=>d.index(S)).map(S=>{const{name:k,unique:D,multiEntry:R,keyPath:P}=S,B={name:k,compound:_t(P),keyPath:P,unique:D,multiEntry:R,extractKey:Jo(P)};return x[ls(P)]=B,B}),getIndexByKeyPath:S=>x[ls(S)]};return x[":id"]=E.primaryKey,h!=null&&(x[ls(h)]=E.primaryKey),E})},hasGetAll:l.length>0&&"getAll"in c.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(u=>function(c){const l=c.name;return{name:l,schema:c,mutate:function({trans:d,type:h,keys:g,values:v,range:b}){return new Promise((x,E)=>{x=He(x);const S=d.objectStore(l),k=S.keyPath==null,D=h==="put"||h==="add";if(!D&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:R}=g||v||{length:1};if(g&&v&&g.length!==v.length)throw new Error("Given keys array must have same length as given values array.");if(R===0)return x({numFailures:0,failures:{},results:[],lastResult:void 0});let P;const B=[],C=[];let _=0;const p=O=>{++_,Rs(O)};if(h==="deleteRange"){if(b.type===4)return x({numFailures:_,failures:C,results:[],lastResult:void 0});b.type===3?B.push(P=S.clear()):B.push(P=S.delete(r(b)))}else{const[O,W]=D?k?[v,g]:[v,null]:[g,null];if(D)for(let z=0;z<R;++z)B.push(P=W&&W[z]!==void 0?S[h](O[z],W[z]):S[h](O[z])),P.onerror=p;else for(let z=0;z<R;++z)B.push(P=S[h](O[z])),P.onerror=p}const N=O=>{const W=O.target.result;B.forEach((z,ye)=>z.error!=null&&(C[ye]=z.error)),x({numFailures:_,failures:C,results:h==="delete"?g:B.map(z=>z.result),lastResult:W})};P.onerror=O=>{p(O),N(O)},P.onsuccess=N})},getMany:({trans:d,keys:h})=>new Promise((g,v)=>{g=He(g);const b=d.objectStore(l),x=h.length,E=new Array(x);let S,k=0,D=0;const R=B=>{const C=B.target;E[C._pos]=C.result,++D===k&&g(E)},P=on(v);for(let B=0;B<x;++B)h[B]!=null&&(S=b.get(h[B]),S._pos=B,S.onsuccess=R,S.onerror=P,++k);k===0&&g(E)}),get:({trans:d,key:h})=>new Promise((g,v)=>{g=He(g);const b=d.objectStore(l).get(h);b.onsuccess=x=>g(x.target.result),b.onerror=on(v)}),query:function(d){return h=>new Promise((g,v)=>{g=He(g);const{trans:b,values:x,limit:E,query:S}=h,k=E===1/0?void 0:E,{index:D,range:R}=S,P=b.objectStore(l),B=D.isPrimaryKey?P:P.index(D.name),C=r(R);if(E===0)return g({result:[]});if(d){const _=x?B.getAll(C,k):B.getAllKeys(C,k);_.onsuccess=p=>g({result:p.target.result}),_.onerror=on(v)}else{let _=0;const p=x||!("openKeyCursor"in B)?B.openCursor(C):B.openKeyCursor(C),N=[];p.onsuccess=O=>{const W=p.result;return W?(N.push(x?W.value:W.primaryKey),++_===E?g({result:N}):void W.continue()):g({result:N})},p.onerror=on(v)}})}(i),openCursor:function({trans:d,values:h,query:g,reverse:v,unique:b}){return new Promise((x,E)=>{x=He(x);const{index:S,range:k}=g,D=d.objectStore(l),R=S.isPrimaryKey?D:D.index(S.name),P=v?b?"prevunique":"prev":b?"nextunique":"next",B=h||!("openKeyCursor"in R)?R.openCursor(r(k),P):R.openKeyCursor(r(k),P);B.onerror=on(E),B.onsuccess=He(C=>{const _=B.result;if(!_)return void x(null);_.___id=++ky,_.done=!1;const p=_.continue.bind(_);let N=_.continuePrimaryKey;N&&(N=N.bind(_));const O=_.advance.bind(_),W=()=>{throw new Error("Cursor not stopped")};_.trans=d,_.stop=_.continue=_.continuePrimaryKey=_.advance=()=>{throw new Error("Cursor not started")},_.fail=He(E),_.next=function(){let z=1;return this.start(()=>z--?this.continue():this.stop()).then(()=>this)},_.start=z=>{const ye=new Promise((he,I)=>{he=He(he),B.onerror=on(I),_.fail=I,_.stop=ce=>{_.stop=_.continue=_.continuePrimaryKey=_.advance=W,he(ce)}}),fe=()=>{if(B.result)try{z()}catch(he){_.fail(he)}else _.done=!0,_.start=()=>{throw new Error("Cursor behind last entry")},_.stop()};return B.onsuccess=He(he=>{B.onsuccess=fe,fe()}),_.continue=p,_.continuePrimaryKey=N,_.advance=O,fe(),ye},x(_)},E)})},count({query:d,trans:h}){const{index:g,range:v}=d;return new Promise((b,x)=>{const E=h.objectStore(l),S=g.isPrimaryKey?E:E.index(g.name),k=r(v),D=k?S.count(k):S.count();D.onsuccess=He(R=>b(R.target.result)),D.onerror=on(x)})}}}(u)),a={};return o.forEach(u=>a[u.name]=u),{stack:"dbcore",transaction:t.transaction.bind(t),table(u){if(!a[u])throw new Error(`Table '${u}' not found`);return a[u]},MIN_KEY:-1/0,MAX_KEY:Is(e),schema:s}}function Xo(t,e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},u){return{dbcore:function(l,d){return d.reduce((h,{create:g})=>({...h,...g(h)}),l)}(xy(i,o,u),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function Bi(t,e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=ka(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?_n(o,s,{get(){return this.table(s)},set(u){Hu(this,s,{value:u,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Qo(t,e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function Ty(t,e){return t._cfg.version-e._cfg.version}function Oy(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=X.transless||X;Un(()=>{X.trans=i,X.transless=a,e===0?(at(s).forEach(u=>{ho(n,u,s[u].primKey,s[u].indexes)}),Xo(t,n),Z.follow(()=>t.on.populate.fire(i)).catch(o)):function(u,c,l,d){const h=[],g=u._versions;let v=u._dbSchema=ta(u,u.idbdb,d),b=!1;function x(){return h.length?Z.resolve(h.shift()(l.idbtrans)).then(x):Z.resolve()}return g.filter(E=>E._cfg.version>=c).forEach(E=>{h.push(()=>{const S=v,k=E._cfg.dbschema;na(u,S,d),na(u,k,d),v=u._dbSchema=k;const D=ml(S,k);D.add.forEach(P=>{ho(d,P[0],P[1].primKey,P[1].indexes)}),D.change.forEach(P=>{if(P.recreate)throw new oe.Upgrade("Not yet support for changing primary key");{const B=d.objectStore(P.name);P.add.forEach(C=>ea(B,C)),P.change.forEach(C=>{B.deleteIndex(C.name),ea(B,C)}),P.del.forEach(C=>B.deleteIndex(C))}});const R=E._cfg.contentUpgrade;if(R&&E._cfg.version>c){Xo(u,d),l._memoizedTables={},b=!0;let P=zu(k);D.del.forEach(p=>{P[p]=S[p]}),Qo(u,[u.Transaction.prototype]),Bi(u,[u.Transaction.prototype],at(P),P),l.schema=P;const B=xa(R);let C;B&&Vr();const _=Z.follow(()=>{if(C=R(l),C&&B){var p=Fn.bind(null,null);C.then(p,p)}});return C&&typeof C.then=="function"?Z.resolve(C):_.then(()=>C)}}),h.push(S=>{(!b||!yy)&&function(k,D){[].slice.call(D.db.objectStoreNames).forEach(R=>k[R]==null&&D.db.deleteObjectStore(R))}(E._cfg.dbschema,S),Qo(u,[u.Transaction.prototype]),Bi(u,[u.Transaction.prototype],u._storeNames,u._dbSchema),l.schema=u._dbSchema})}),x().then(()=>{var E,S;S=d,at(E=v).forEach(k=>{S.db.objectStoreNames.contains(k)||ho(S,k,E[k].primKey,E[k].indexes)})})}(t,e,i,n).catch(o)})}function ml(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!Wi)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,u=i.idxByName;let c;for(c in a)u[c]||o.del.push(c);for(c in u){const l=a[c],d=u[c];l?l.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function ho(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>ea(s,i)),s}function ea(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function ta(t,e,n){const r={};return Ii(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Wo(hl(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),u=[];for(let l=0;l<i.indexNames.length;++l){const d=i.index(i.indexNames[l]);o=d.keyPath;var c=Wo(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);u.push(c)}r[s]=pl(s,a,u)}),r}function na(t,e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const u=o.indexNames[a],c=o.index(u).keyPath,l=typeof c=="string"?c:"["+Ii(c).join("+")+"]";if(e[i]){const d=e[i].idxByName[l];d&&(d.name=u,delete e[i].idxByName[l],e[i].idxByName[u]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&mt.WorkerGlobalScope&&mt instanceof mt.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class Ny{_parseStoresSpec(e,n){at(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return Wo(u,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),_t(c),a===0)}),i=s.shift();if(i.multi)throw new oe.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new oe.Schema("Index must have a name and cannot be an empty string")}),n[r]=pl(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?Mt(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{Mt(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Qo(n,[n._allTables,n,n.Transaction.prototype]),Bi(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],at(i),i),n._storeNames=at(i),this}upgrade(e){return this._cfg.contentUpgrade=Na(this._cfg.contentUpgrade||Me,e),this}}function Pa(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new tt("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function Ca(t){return t&&typeof t.databases=="function"}function ra(t){return Un(function(){return X.letThrough=!0,t()})}function Ay(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function ja(t){return!("from"in t)}const Rt=function(t,e){if(!this){const n=new Rt;return t&&"d"in t&&Mt(n,t),n}Mt(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Ps(t,e,n){const r=Ce(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ja(t))return Mt(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(Ce(n,t.from)<0)return s?Ps(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Ic(t);if(Ce(e,t.to)>0)return i?Ps(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Ic(t);Ce(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),Ce(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&Li(t,s),i&&o&&Li(t,i)}function Li(t,e){ja(e)||function n(r,{from:s,to:i,l:o,r:a}){Ps(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function sa(t,e){const n=ia(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=ia(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(Ce(a.from,s.to)<=0&&Ce(a.to,s.from)>=0)return!0;Ce(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function ia(t){let e=ja(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&Ce(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||Ce(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Ic(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=Pc(o)}t.d=Pc(t)}function Pc({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}function Ji(t,e){return at(e).forEach(n=>{t[n]?Li(t[n],e[n]):t[n]=Xu(e[n])}),t}function yl(t,e){return Object.keys(t).some(n=>e[n]&&sa(e[n],t[n]))}Ur(Rt.prototype,{add(t){return Li(this,t),this},addKey(t){return Ps(this,t,t),this},addKeys(t){return t.forEach(e=>Ps(this,e,e)),this},[Fo](){return ia(this)}});const wr={};let po={},mo=!1;function yo(t){Ji(po,t),mo||(mo=!0,queueMicrotask(()=>{mo=!1;const e=po;po={},Da(e)}))}function Da(t,e=!1){const n=new Set;for(const r in t){const s=/^idb\:\/\/(.*)\/(.*)\//.exec(r);if(s){const[,i,o]=s,a=wr[`idb://${i}/${o}`];a&&Ry(a,t,n,e)}}n.forEach(r=>r())}function Ry(t,e,n,r){const s=r&&[];for(const[i,o]of Object.entries(t.queries.query)){const a=r&&[];for(const u of o)u.obsSet&&yl(e,u.obsSet)?u.subscribers.forEach(c=>n.add(c)):r&&a.push(u);r&&s.push([i,a])}if(r)for(const[i,o]of s)t.queries.query[i]=o}function Iy(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?nt(e.dbOpenError):t);En&&(e.openCanceller._stackHolder=lr()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new oe.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return Z.race([r,(typeof navigator>"u"?Z.resolve():Ay()).then(()=>new Z((u,c)=>{if(s(),!n)throw new oe.MissingAPI;const l=t.name,d=n.open(l);if(!d)throw new oe.MissingAPI;d.onerror=on(c),d.onblocked=He(t._fireOnBlocked),d.onupgradeneeded=He(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Rs,o.abort(),d.result.close();const v=n.deleteDatabase(l);v.onsuccess=v.onerror=He(()=>{c(new oe.NoSuchDatabase(`Database ${l} doesnt exist`))})}else{o.onerror=on(c);var g=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=g<1,t.idbdb=d.result,Oy(t,g/10,o,c)}},c),d.onsuccess=He(()=>{o=null;const h=t.idbdb=d.result,g=Ii(h.objectStoreNames);if(g.length>0)try{const b=h.transaction((v=g).length===1?v[0]:v,"readonly");e.autoSchema?function(x,E,S){x.verno=E.version/10;const k=x._dbSchema=ta(0,E,S);x._storeNames=Ii(E.objectStoreNames,0),Bi(x,[x._allTables],at(k),k)}(t,h,b):(na(t,t._dbSchema,b),function(x,E){const S=ml(ta(0,x.idbdb,E),x._dbSchema);return!(S.add.length||S.change.some(k=>k.add.length||k.change.length))}(t,b)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Xo(t,b)}catch{}var v;cs.push(t),h.onversionchange=He(b=>{e.vcFired=!0,t.on("versionchange").fire(b)}),h.onclose=He(b=>{t.on("close").fire(b)}),a&&function({indexedDB:b,IDBKeyRange:x},E){!Ca(b)&&E!=="__dbnames"&&Pa(b,x).put({name:E}).catch(Me)}(t._deps,l),u()},c)}))]).then(()=>(s(),e.onReadyBeingFired=[],Z.resolve(ra(()=>t.on.ready.fire(t.vip))).then(function u(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(Na,Me);return e.onReadyBeingFired=[],Z.resolve(ra(()=>c(t.vip))).then(u)}}))).finally(()=>{e.openCanceller===r&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(u=>{e.dbOpenError=u;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),nt(u)}).finally(()=>{e.openComplete=!0,i()}).then(()=>{if(a){const u={};t.tables.forEach(c=>{c.schema.indexes.forEach(l=>{l.name&&(u[`idb://${t.name}/${c.name}/${l.name}`]=new Rt(-1/0,[[[]]]))}),u[`idb://${t.name}/${c.name}/`]=u[`idb://${t.name}/${c.name}/:dels`]=new Rt(-1/0,[[[]]])}),wn("storagemutated").fire(u),Da(u,!0)}return t})}function oa(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),u=a.value;return a.done?u:u&&typeof u.then=="function"?u.then(n,r):_t(u)?Promise.all(u).then(n,r):n(u)}}return s(e)()}function Py(t,e,n){var r=arguments.length;if(r<2)throw new oe.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=Wu(s);return[t,i,n]}function gl(t,e,n,r,s){return Z.resolve().then(()=>{const i=X.transless||X,o=t._createTransaction(e,n,t._dbSchema,r);o.explicit=!0;const a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===Oa.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>gl(t,e,n,null,s))):nt(d)}const u=xa(s);let c;u&&Vr();const l=Z.follow(()=>{if(c=s.call(o,o),c)if(u){var d=Fn.bind(null,null);c.then(d,d)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=oa(c))},a);return(c&&typeof c.then=="function"?Z.resolve(c).then(d=>o.active?d:nt(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):l.then(()=>c)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),nt(d)))})}function Qs(t,e,n){const r=_t(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Cy={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(l,d,h){const g=ls(l),v=s[g]=s[g]||[],b=l==null?0:typeof l=="string"?1:l.length,x=d>0,E={...h,name:x?`${g}(virtual-from:${h.name})`:h.name,lowLevelIndex:h,isVirtual:x,keyTail:d,keyLength:b,extractKey:Jo(l),unique:!x&&h.unique};return v.push(E),E.isPrimaryKey||i.push(E),b>1&&o(b===2?l[0]:l.slice(0,b-1),d+1,h),v.sort((S,k)=>S.keyTail-k.keyTail),E}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const l of r.indexes)o(l.keyPath,0,l);function u(l){const d=l.query.index;return d.isVirtual?{...l,query:{index:d.lowLevelIndex,range:(h=l.query.range,g=d.keyTail,{type:h.type===1?2:h.type,lower:Qs(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,g),lowerOpen:!0,upper:Qs(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,g),upperOpen:!0})}}:l;var h,g}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(l){const d=s[ls(l)];return d&&d[0]}},count:l=>n.count(u(l)),query:l=>n.query(u(l)),openCursor(l){const{keyTail:d,isVirtual:h,keyLength:g}=l.query.index;return h?n.openCursor(u(l)).then(v=>v&&function(b){return Object.create(b,{continue:{value:function(E){E!=null?b.continue(Qs(E,l.reverse?t.MAX_KEY:t.MIN_KEY,d)):l.unique?b.continue(b.key.slice(0,g).concat(l.reverse?t.MIN_KEY:t.MAX_KEY,d)):b.continue()}},continuePrimaryKey:{value(E,S){b.continuePrimaryKey(Qs(E,t.MAX_KEY,d),S)}},primaryKey:{get:()=>b.primaryKey},key:{get(){const E=b.key;return g===1?E[0]:E.slice(0,g)}},value:{get:()=>b.value}})}(v)):n.openCursor(l)}}}}}};function $a(t,e,n,r){return n=n||{},r=r||"",at(t).forEach(s=>{if(Pt(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=Uo(i);a!==Uo(o)?n[r+s]=e[s]:a==="Object"?$a(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),at(e).forEach(s=>{Pt(t,s)||(n[r+s]=e[s])}),n}function Ba(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}const jy={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=X.trans,{deleting:a,creating:u,updating:c}=o.table(e).hook;switch(i.type){case"add":if(u.fire===Me)break;return o._promise("readwrite",()=>l(i),!0);case"put":if(u.fire===Me&&c.fire===Me)break;return o._promise("readwrite",()=>l(i),!0);case"delete":if(a.fire===Me)break;return o._promise("readwrite",()=>l(i),!0);case"deleteRange":if(a.fire===Me)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function l(h){const g=X.trans,v=h.keys||Ba(r,h);if(!v)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:v}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(b,x,E){return x.type==="add"?Promise.resolve([]):b.getMany({trans:x.trans,keys:E,cache:"immutable"})}(n,h,v).then(b=>{const x=v.map((E,S)=>{const k=b[S],D={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(D,E,k,g);else if(h.type==="add"||k===void 0){const R=u.fire.call(D,E,h.values[S],g);E==null&&R!=null&&(E=R,h.keys[S]=E,r.outbound||Yt(h.values[S],r.keyPath,E))}else{const R=$a(k,h.values[S]),P=c.fire.call(D,R,E,k,g);if(P){const B=h.values[S];Object.keys(P).forEach(C=>{Pt(B,C)?B[C]=P[C]:Yt(B,C,P[C])})}}return D});return n.mutate(h).then(({failures:E,results:S,numFailures:k,lastResult:D})=>{for(let R=0;R<v.length;++R){const P=S?S[R]:v[R],B=x[R];P==null?B.onerror&&B.onerror(E[R]):B.onsuccess&&B.onsuccess(h.type==="put"&&b[R]?h.values[R]:P)}return{failures:E,results:S,numFailures:k,lastResult:D}}).catch(E=>(x.forEach(S=>S.onerror&&S.onerror(E)),Promise.reject(E)))})}function d(h,g,v){return n.query({trans:h,values:!1,query:{index:r,range:g},limit:v}).then(({result:b})=>l({type:"delete",keys:b,trans:h}).then(x=>x.numFailures>0?Promise.reject(x.failures[0]):b.length<v?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...g,lower:b[b.length-1],lowerOpen:!0},v)))}}}}})};function _l(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)Ce(e.keys[s],t[i])===0&&(r.push(n?Mn(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Dy={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=_l(r.keys,r.trans._cache,r.cache==="clone");return s?Z.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Mn(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function vl(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function bl(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}const $y={stack:"dbcore",level:0,name:"Observability",create:t=>{const e=t.schema.name,n=new Rt(t.MIN_KEY,t.MAX_KEY);return{...t,transaction:(r,s,i)=>{if(X.subscr&&s!=="readonly")throw new oe.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${X.querier}`);return t.transaction(r,s,i)},table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:u}=o,c={...s,mutate:h=>{const g=h.trans,v=h.mutatedParts||(h.mutatedParts={}),b=P=>{const B=`idb://${e}/${r}/${P}`;return v[B]||(v[B]=new Rt)},x=b(""),E=b(":dels"),{type:S}=h;let[k,D]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[Ba(o,h).filter(P=>P),h.values]:[];const R=h.trans._cache;if(_t(k)){x.addKeys(k);const P=S==="delete"||k.length===D.length?_l(k,R):null;P||S==="add"||E.addKeys(k),(P||D)&&function(B,C,_,p){function N(O){const W=B(O.name||"");function z(fe){return fe!=null?O.extractKey(fe):null}const ye=fe=>O.multiEntry&&_t(fe)?fe.forEach(he=>W.addKey(he)):W.addKey(fe);(_||p).forEach((fe,he)=>{const I=_&&z(_[he]),ce=p&&z(p[he]);Ce(I,ce)!==0&&(I!=null&&ye(I),ce!=null&&ye(ce))})}C.indexes.forEach(N)}(b,i,P,D)}else if(k){const P={from:k.lower,to:k.upper};E.add(P),x.add(P)}else x.add(n),E.add(n),i.indexes.forEach(P=>b(P.name).add(n));return s.mutate(h).then(P=>(!k||h.type!=="add"&&h.type!=="put"||x.addKeys(P.results),g.mutatedParts=Ji(g.mutatedParts||{},v),P))}},l=({query:{index:h,range:g}})=>{var v,b;return[h,new Rt((v=g.lower)!==null&&v!==void 0?v:t.MIN_KEY,(b=g.upper)!==null&&b!==void 0?b:t.MAX_KEY)]},d={get:h=>[o,new Rt(h.key)],getMany:h=>[o,new Rt().addKeys(h.keys)],count:l,query:l,openCursor:l};return at(d).forEach(h=>{c[h]=function(g){const{subscr:v}=X,b=!!v,E=vl(X,s)&&bl(h,g)?g.obsSet={}:v;if(b){const S=B=>{const C=`idb://${e}/${r}/${B}`;return E[C]||(E[C]=new Rt)},k=S(""),D=S(":dels"),[R,P]=d[h](g);if(S(R.name||"").add(P),!R.isPrimaryKey){if(h!=="count"){const B=h==="query"&&u&&g.values&&s.query({...g,values:!1});return s[h].apply(this,arguments).then(C=>{if(h==="query"){if(u&&g.values)return B.then(({result:p})=>(k.addKeys(p),C));const _=g.values?C.result.map(a):C.result;g.values?k.addKeys(_):D.addKeys(_)}else if(h==="openCursor"){const _=C,p=g.values;return _&&Object.create(_,{key:{get:()=>(D.addKey(_.primaryKey),_.key)},primaryKey:{get(){const N=_.primaryKey;return D.addKey(N),N}},value:{get:()=>(p&&k.addKey(_.primaryKey),_.value)}})}return C})}D.add(n)}}return s[h].apply(this,arguments)}}),c}}}};function Cc(t,e){return function(n,r){return r.lower===void 0||(r.lowerOpen?Ce(n,r.lower)>0:Ce(n,r.lower)>=0)}(t,e)&&function(n,r){return r.upper===void 0||(r.upperOpen?Ce(n,r.upper)<0:Ce(n,r.upper)<=0)}(t,e)}function jc(t,e,n,r,s,i){if(!n||n.length===0)return t;const o=e.query.index,a=r.schema.primaryKey.extractKey,u=o.extractKey,c=(o.lowLevelIndex||o).extractKey;let l=n.reduce((d,h)=>{let g=d;const v=h.type==="add"||h.type==="put"?h.values.filter(b=>Cc(u(b),e.query.range)).map(b=>(b=Mn(b),i&&Object.freeze(b),b)):[];switch(h.type){case"add":g=d.concat(e.values?v:v.map(S=>a(S)));break;case"put":const b=new Rt().addKeys(h.values.map(S=>a(S)));g=d.filter(S=>{const k=e.values?a(S):S;return!sa(new Rt(k),b)}).concat(e.values?v:v.map(S=>a(S)));break;case"delete":const x=new Rt().addKeys(h.keys);g=d.filter(S=>{const k=e.values?a(S):S;return!sa(new Rt(k),x)});break;case"deleteRange":const E=h.range;g=d.filter(S=>!Cc(a(S),E))}return g},t);return l===t?t:(l.sort((d,h)=>Ce(c(d),c(h))||Ce(a(d),a(h))),e.limit&&e.limit<1/0&&(l.length>e.limit?l.length=e.limit:t.length===e.limit&&l.length<e.limit&&(s.dirty=!0)),i?Object.freeze(l):l)}function Dc(t,e){return Ce(t.lower,e.lower)===0&&Ce(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function By(t,e){return function(n,r,s,i){if(n===void 0)return r!==void 0?-1:0;if(r===void 0)return 1;const o=Ce(n,r);if(o===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return o}(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&function(n,r,s,i){if(n===void 0)return r!==void 0?1:0;if(r===void 0)return-1;const o=Ce(n,r);if(o===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return o}(t.upper,e.upper,t.upperOpen,e.upperOpen)>=0}function Ly(t,e,n,r){t.subscribers.add(n),r.addEventListener("abort",()=>{t.subscribers.delete(n),t.subscribers.size===0&&function(s,i){setTimeout(()=>{s.subscribers.size===0&&Qr(i,s)},3e3)}(t,e)})}const My={stack:"dbcore",level:0,name:"Cache",create:t=>{const e=t.schema.name;return{...t,transaction:(r,s,i)=>{const o=t.transaction(r,s,i);if(s==="readwrite"){const a=new AbortController,{signal:u}=a,c=l=>()=>{if(a.abort(),s==="readwrite"){const d=new Set;for(const h of r){const g=wr[`idb://${e}/${h}`],v=t.table(h);if(g){const b=g.optimisticOps.filter(x=>x.trans===o);if(b.length>0){g.optimisticOps=g.optimisticOps.filter(x=>x.trans!==o);for(const x of Object.values(g.queries.query))for(const E of x.slice())if(E.res!=null&&o.mutatedParts)if(l&&!E.dirty){const S=Object.isFrozen(E.res),k=jc(E.res,E.req,b,v,E,S);E.dirty?(Qr(x,E),E.subscribers.forEach(D=>d.add(D))):k!==E.res&&(E.res=k,E.promise=Z.resolve({result:k}))}else E.dirty&&Qr(x,E),E.subscribers.forEach(S=>d.add(S))}}}d.forEach(h=>h())}};o.addEventListener("abort",c(!1),{signal:u}),o.addEventListener("error",c(!1),{signal:u}),o.addEventListener("complete",c(!0),{signal:u})}return o},table(r){const s=t.table(r),i=s.schema.primaryKey;return{...s,mutate(a){if(i.outbound||X.trans.db._options.cache==="disabled")return s.mutate(a);const u=wr[`idb://${e}/${r}`];if(!u)return s.mutate(a);const c=s.mutate(a);return a.type!=="add"&&a.type!=="put"||!(a.values.length>=50||Ba(i,a).some(l=>l==null))?(u.optimisticOps.push(a),yo(a.mutatedParts),c.catch(()=>{Qr(u.optimisticOps,a),yo(a.mutatedParts)})):c.then(l=>{const d={...a,values:a.values.map((h,g)=>{const v=i.keyPath.includes(".")?Mn(h):{...h};return Yt(v,i.keyPath,l.results[g]),v})};u.optimisticOps.push(d),queueMicrotask(()=>yo(a.mutatedParts))}),c},query(a){if(!vl(X,s)||!bl("query",a))return s.query(a);const u=X.trans.db._options.cache==="immutable",{requery:c,signal:l}=X;let[d,h,g,v]=function(b,x,E,S){const k=wr[`idb://${b}/${x}`];if(!k)return[];const D=k.queries[E];if(!D)return[null,!1,k,null];const R=D[(S.query?S.query.index.name:null)||""];if(!R)return[null,!1,k,null];switch(E){case"query":const P=R.find(C=>C.req.limit===S.limit&&C.req.values===S.values&&Dc(C.req.query.range,S.query.range));return P?[P,!0,k,R]:[R.find(C=>("limit"in C.req?C.req.limit:1/0)>=S.limit&&(!S.values||C.req.values)&&By(C.req.query.range,S.query.range)),!1,k,R];case"count":const B=R.find(C=>Dc(C.req.query.range,S.query.range));return[B,!!B,k,R]}}(e,r,"query",a);if(d&&h)d.obsSet=a.obsSet;else{const b=s.query(a).then(x=>{const E=x.result;if(d.res=E,u){for(let S=0,k=E.length;S<k;++S)Object.freeze(E[S]);Object.freeze(E)}else x.result=Mn(E);return x}).catch(x=>(v&&d&&Qr(v,d),Promise.reject(x)));d={obsSet:a.obsSet,promise:b,subscribers:new Set,type:"query",req:a,dirty:!1},v?v.push(d):(v=[d],g||(g=wr[`idb://${e}/${r}`]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),g.queries.query[a.query.index.name||""]=v)}return Ly(d,v,c,l),d.promise.then(b=>({result:jc(b.result,a,g==null?void 0:g.optimisticOps,s,d,u)}))}}}}}};function ei(t,e){return new Proxy(t,{get:(n,r,s)=>r==="db"?e:Reflect.get(n,r,s)})}class tt{constructor(e,n){this._middlewares={},this.verno=0;const r=tt.dependencies;this._options=n={addons:tt.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,cache:"cloned",...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Me,dbReadyPromise:null,cancelOpen:Me,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new Z(u=>{i.dbReadyResolve=u}),i.openCanceller=new Z((u,c)=>{i.cancelOpen=c}),this._state=i,this.name=e,this.on=us(this,"populate","blocked","versionchange","close",{ready:[Na,Me]}),this.on.ready.subscribe=Vu(this.on.ready.subscribe,u=>(c,l)=>{tt.vip(()=>{const d=this._state;if(d.openComplete)d.dbOpenError||Z.resolve().then(c),l&&u(c);else if(d.onReadyBeingFired)d.onReadyBeingFired.push(c),l&&u(c);else{u(c);const h=this;l||u(function g(){h.on.ready.unsubscribe(c),h.on.ready.unsubscribe(g)})}})}),this.Collection=(o=this,zr(vy.prototype,function(u,c){this.db=o;let l=ll,d=null;if(c)try{l=c()}catch(b){d=b}const h=u._ctx,g=h.table,v=g.hook.reading.fire;this._ctx={table:g,index:h.index,isPrimKey:!h.index||g.schema.primKey.keyPath&&h.index===g.schema.primKey.name,range:l,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:d,or:h.or,valueMapper:v!==Ns?v:null}})),this.Table=function(u){return zr(Oc.prototype,function(c,l,d){this.db=u,this._tx=d,this.name=c,this.schema=l,this.hook=u._allTables[c]?u._allTables[c].hook:us(null,{creating:[sy,Me],reading:[ry,Ns],updating:[oy,Me],deleting:[iy,Me]})})}(this),this.Transaction=function(u){return zr(Sy.prototype,function(c,l,d,h,g){this.db=u,this.mode=c,this.storeNames=l,this.schema=d,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=us(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Z((v,b)=>{this._resolve=v,this._reject=b}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},v=>{var b=this.active;return this.active=!1,this.on.error.fire(v),this.parent?this.parent._reject(v):b&&this.idbtrans&&this.idbtrans.abort(),nt(v)})})}(this),this.Version=function(u){return zr(Ny.prototype,function(c){this.db=u,this._cfg={version:c,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(u){return zr(dl.prototype,function(c,l,d){if(this.db=u,this._ctx={table:c,index:l===":id"?null:l,or:d},this._cmp=this._ascending=Ce,this._descending=(h,g)=>Ce(g,h),this._max=(h,g)=>Ce(h,g)>0?h:g,this._min=(h,g)=>Ce(h,g)<0?h:g,this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new oe.MissingAPI})}(this),this.on("versionchange",u=>{u.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close({disableAutoOpen:!1}),this._state.openComplete=!1}),this.on("blocked",u=>{!u.newVersion||u.newVersion<u.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${u.oldVersion/10}`)}),this._maxKey=Is(n.IDBKeyRange),this._createTransaction=(u,c,l,d)=>new this.Transaction(u,c,l,this._options.chromeTransactionDurability,d),this._fireOnBlocked=u=>{this.on("blocked").fire(u),cs.filter(c=>c.name===this.name&&c!==this&&!c._state.vcFired).map(c=>c.on("versionchange").fire(u))},this.use(Dy),this.use(My),this.use($y),this.use(Cy),this.use(jy);const a=new Proxy(this,{get:(u,c,l)=>{if(c==="_vip")return!0;if(c==="table")return h=>ei(this.table(h),a);const d=Reflect.get(u,c,l);return d instanceof Oc?ei(d,a):c==="tables"?d.map(h=>ei(h,a)):c==="_createTransaction"?function(){const h=d.apply(this,arguments);return ei(h,a)}:d}});this.vip=a,s.forEach(u=>u(this))}version(e){if(isNaN(e)||e<.1)throw new oe.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new oe.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(Ty),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new Z((n,r)=>{if(this._state.openComplete)return r(new oe.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new oe.DatabaseClosed);this.open().catch(Me)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return or(jn,()=>Iy(this))}_close(){const e=this._state,n=cs.indexOf(this);if(n>=0&&cs.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.dbReadyPromise=new Z(r=>{e.dbReadyResolve=r}),e.openCanceller=new Z((r,s)=>{e.cancelOpen=s})}close({disableAutoOpen:e}={disableAutoOpen:!0}){this._close();const n=this._state;e&&(this._options.autoOpen=!1),n.dbOpenError=new oe.DatabaseClosed,n.isBeingOpened&&n.cancelOpen(n.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new Z((r,s)=>{const i=()=>{this.close({disableAutoOpen:!1});var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=He(()=>{(function({indexedDB:a,IDBKeyRange:u},c){!Ca(a)&&c!=="__dbnames"&&Pa(a,u).delete(c).catch(Me)})(this._deps,this.name),r()}),o.onerror=on(s),o.onblocked=this._fireOnBlocked};if(e)throw new oe.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return at(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Py.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=X.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(c=>{var l=c instanceof this.Table?c.name:c;if(typeof l!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return l}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new oe.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1){if(!i)throw new oe.SubTransaction("Table "+c+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(l,d)=>{d(c)}):nt(c)}const u=gl.bind(null,this,o,a,s,r);return s?s._promise(o,u,"lock"):X.trans?or(X.transless,()=>this._whenReady(u)):this._whenReady(u)}table(e){if(!Pt(this._allTables,e))throw new oe.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Uy=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Fy{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Uy](){return this}}let Mi;try{Mi={indexedDB:mt.indexedDB||mt.mozIndexedDB||mt.webkitIndexedDB||mt.msIndexedDB,IDBKeyRange:mt.IDBKeyRange||mt.webkitIDBKeyRange}}catch{Mi={indexedDB:null,IDBKeyRange:null}}function Ky(t){let e,n=!1;const r=new Fy(s=>{const i=xa(t);let o,a=!1,u={},c={};const l={get closed(){return a},unsubscribe:()=>{a||(a=!0,o&&o.abort(),d&&wn.storagemutated.unsubscribe(h))}};s.start&&s.start(l);let d=!1;const h=v=>{Ji(u,v),yl(c,u)&&g()},g=()=>{if(a||!Mi.indexedDB)return;u={};const v={};o&&o.abort(),o=new AbortController;const b={subscr:v,signal:o.signal,requery:g,querier:t,trans:null},x=function(E){const S=Yr();try{i&&Vr();const k=Un(t,E);return i&&k.finally(Fn),k}finally{S&&Hr()}}(b);Promise.resolve(x).then(E=>{n=!0,e=E,a||b.signal.aborted||(u={},c=v,function(S){for(const k in S)if(Pt(S,k))return!1;return!0}(c)||d||(wn("storagemutated",h),d=!0),s.next&&s.next(E))},E=>{if(n=!1,!["DatabaseClosedError","AbortError"].includes(E==null?void 0:E.name)){if(a)return;s.error&&s.error(E)}})};return g(),l});return r.hasValue=()=>n,r.getValue=()=>e,r}const Vn=tt;function di(t){let e=yn;try{yn=!0,wn.storagemutated.fire(t),Da(t,!0)}finally{yn=e}}Ur(Vn,{...oi,delete:t=>new Vn(t,{addons:[]}).delete(),exists:t=>new Vn(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return Ca(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):Pa(e,n).toCollection().primaryKeys()}(Vn.dependencies).then(t)}catch{return nt(new oe.MissingAPI)}},defineClass:()=>function(t){Mt(this,t)},ignoreTransaction:t=>X.trans?or(X.transless,t):t(),vip:ra,async:function(t){return function(){try{var e=oa(t.apply(this,arguments));return e&&typeof e.then=="function"?e:Z.resolve(e)}catch(n){return nt(n)}}},spawn:function(t,e,n){try{var r=oa(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:Z.resolve(r)}catch(s){return nt(s)}},currentTransaction:{get:()=>X.trans||null},waitFor:function(t,e){const n=Z.resolve(typeof t=="function"?Vn.ignoreTransaction(t):t).timeout(e||6e4);return X.trans?X.trans.waitFor(n):n},Promise:Z,debug:{get:()=>En,set:t=>{Qu(t,t==="dexie"?()=>!0:ul)}},derive:Pr,extend:Mt,props:Ur,override:Vu,Events:us,on:wn,liveQuery:Ky,extendObservabilitySet:Ji,getByKeyPath:vn,setByKeyPath:Yt,delByKeyPath:function(t,e){typeof e=="string"?Yt(t,e,void 0):"length"in e&&[].map.call(e,function(n){Yt(t,n,void 0)})},shallowClone:zu,deepClone:Mn,getObjectDiff:$a,cmp:Ce,asap:Zu,minKey:-(1/0),addons:[],connections:cs,errnames:Oa,dependencies:Mi,cache:wr,semVer:"4.0.1-alpha.25",version:"4.0.1-alpha.25".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Vn.maxKey=Is(Vn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(wn("storagemutated",t=>{if(!yn){let e;Wi?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),yn=!0,dispatchEvent(e),yn=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{yn||di(t)}));let yn=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),wn("storagemutated",e=>{yn||t.postMessage(e)}),t.onmessage=e=>{e.data&&di(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){wn("storagemutated",e=>{try{yn||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&di(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&di(e.changedParts)})}Z.rejectionMapper=function(t,e){if(!t||t instanceof Cr||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Ec[t.name])return t;var n=new Ec[t.name](e||t.message,t);return"stack"in t&&_n(n,"stack",{get:function(){return this.inner.stack}}),n},Qu(En,ul);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function qn(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{c(r.next(l))}catch(d){o(d)}}function u(l){try{c(r.throw(l))}catch(d){o(d)}}function c(l){l.done?i(l.value):s(l.value).then(a,u)}c((r=r.apply(t,e||[])).next())})}function en(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=c[0]&2?s.return:c[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,c[1])).done)return i;switch(s=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,s=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(l){c=[6,l],s=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function qy(t){var e=[t.schema.primKey].concat(t.schema.indexes);return e.map(function(n){return n.src}).join(",")}function Gy(t){for(var e={},n=0,r=t.tables;n<r.length;n++){var s=r[n];e[s.name]=s.schema}return e}function wl(t,e){return new Promise(function(n,r){var s=new FileReader;s.onabort=function(i){return r(new Error("file read aborted"))},s.onerror=function(i){return r(i.target.error)},s.onload=function(i){return n(i.target.result)},e==="binary"?s.readAsArrayBuffer(t):s.readAsText(t)})}function El(t,e){if(typeof FileReaderSync>"u")throw new Error("FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread.");var n=new FileReaderSync,r=e==="binary"?n.readAsArrayBuffer(t):n.readAsText(t);return r}var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function La(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Xi=La(function(t,e){(function(n,r){t.exports=r()})(aa,function(){function n(A){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(j){return typeof j}:n=function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},n(A)}function r(A,j,$,L,G,ke,Ae){try{var Se=A[ke](Ae),te=Se.value}catch(dt){$(dt);return}Se.done?j(te):Promise.resolve(te).then(L,G)}function s(A){return function(){var j=this,$=arguments;return new Promise(function(L,G){var ke=A.apply(j,$);function Ae(te){r(ke,L,G,Ae,Se,"next",te)}function Se(te){r(ke,L,G,Ae,Se,"throw",te)}Ae(void 0)})}}function i(A,j){if(!(A instanceof j))throw new TypeError("Cannot call a class as a function")}function o(A,j){for(var $=0;$<j.length;$++){var L=j[$];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(A,L.key,L)}}function a(A,j,$){return j&&o(A.prototype,j),$&&o(A,$),A}function u(A,j,$){return j in A?Object.defineProperty(A,j,{value:$,enumerable:!0,configurable:!0,writable:!0}):A[j]=$,A}function c(A,j){var $=Object.keys(A);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(A);j&&(L=L.filter(function(G){return Object.getOwnPropertyDescriptor(A,G).enumerable})),$.push.apply($,L)}return $}function l(A){for(var j=1;j<arguments.length;j++){var $=arguments[j]!=null?arguments[j]:{};j%2?c(Object($),!0).forEach(function(L){u(A,L,$[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors($)):c(Object($)).forEach(function(L){Object.defineProperty(A,L,Object.getOwnPropertyDescriptor($,L))})}return A}function d(A,j){return v(A)||x(A,j)||S()}function h(A){return g(A)||b(A)||E()}function g(A){if(Array.isArray(A)){for(var j=0,$=new Array(A.length);j<A.length;j++)$[j]=A[j];return $}}function v(A){if(Array.isArray(A))return A}function b(A){if(Symbol.iterator in Object(A)||Object.prototype.toString.call(A)==="[object Arguments]")return Array.from(A)}function x(A,j){if(Symbol.iterator in Object(A)||Object.prototype.toString.call(A)==="[object Arguments]"){var $=[],L=!0,G=!1,ke=void 0;try{for(var Ae=A[Symbol.iterator](),Se;!(L=(Se=Ae.next()).done)&&($.push(Se.value),!(j&&$.length===j));L=!0);}catch(te){G=!0,ke=te}finally{try{!L&&Ae.return!=null&&Ae.return()}finally{if(G)throw ke}}return $}}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function S(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var k=function A(j){i(this,A),this.p=new Promise(j)};k.__typeson__type__="TypesonPromise",typeof Symbol<"u"&&(k.prototype[Symbol.toStringTag]="TypesonPromise"),k.prototype.then=function(A,j){var $=this;return new k(function(L,G){$.p.then(function(ke){L(A?A(ke):ke)}).catch(function(ke){return j?j(ke):Promise.reject(ke)}).then(L,G)})},k.prototype.catch=function(A){return this.then(null,A)},k.resolve=function(A){return new k(function(j){j(A)})},k.reject=function(A){return new k(function(j,$){$(A)})},["all","race"].forEach(function(A){k[A]=function(j){return new k(function($,L){Promise[A](j.map(function(G){return G&&G.constructor&&G.constructor.__typeson__type__==="TypesonPromise"?G.p:G})).then($,L)})}});var D={},R=D.toString,P={}.hasOwnProperty,B=Object.getPrototypeOf,C=P.toString;function _(A,j){return z(A)&&typeof A.then=="function"&&(!j||typeof A.catch=="function")}function p(A){return R.call(A).slice(8,-1)}function N(A,j){if(!A||n(A)!=="object")return!1;var $=B(A);if(!$)return j===null;var L=P.call($,"constructor")&&$.constructor;return typeof L!="function"?j===null:j===L||j!==null&&C.call(L)===C.call(j)||typeof j=="function"&&typeof L.__typeson__type__=="string"&&L.__typeson__type__===j.__typeson__type__}function O(A){if(!A||p(A)!=="Object")return!1;var j=B(A);return j?N(A,Object):!0}function W(A){if(!A||p(A)!=="Object")return!1;var j=B(A);return j?N(A,Object)||W(j):!0}function z(A){return A&&n(A)==="object"}function ye(A){return A.replace(/~/g,"~0").replace(/\./g,"~1")}function fe(A){return A.replace(/~1/g,".").replace(/~0/g,"~")}function he(A,j){if(j==="")return A;var $=j.indexOf(".");if($>-1){var L=A[fe(j.slice(0,$))];return L===void 0?void 0:he(L,j.slice($+1))}return A[fe(j)]}function I(A,j,$){if(j==="")return $;var L=j.indexOf(".");if(L>-1){var G=A[fe(j.slice(0,L))];return I(G,j.slice(L+1),$)}return A[fe(j)]=$,A}function ce(A){return A===null?"null":Array.isArray(A)?"array":n(A)}var Ct=Object.keys,Tt=Array.isArray,Ut={}.hasOwnProperty,Sn=["type","replaced","iterateIn","iterateUnsetNumeric"];function se(A,j){if(A.keypath==="")return-1;var $=A.keypath.match(/\./g)||0,L=j.keypath.match(/\./g)||0;return $&&($=$.length),L&&(L=L.length),$>L?-1:$<L?1:A.keypath<j.keypath?-1:A.keypath>j.keypath}var De=function(){function A(j){i(this,A),this.options=j,this.plainObjectReplacers=[],this.nonplainObjectReplacers=[],this.revivers={},this.types={}}return a(A,[{key:"stringify",value:function($,L,G,ke){ke=l({},this.options,{},ke,{stringification:!0});var Ae=this.encapsulate($,null,ke);return Tt(Ae)?JSON.stringify(Ae[0],L,G):Ae.then(function(Se){return JSON.stringify(Se,L,G)})}},{key:"stringifySync",value:function($,L,G,ke){return this.stringify($,L,G,l({throwOnBadSyncType:!0},ke,{sync:!0}))}},{key:"stringifyAsync",value:function($,L,G,ke){return this.stringify($,L,G,l({throwOnBadSyncType:!0},ke,{sync:!1}))}},{key:"parse",value:function($,L,G){return G=l({},this.options,{},G,{parse:!0}),this.revive(JSON.parse($,L),G)}},{key:"parseSync",value:function($,L,G){return this.parse($,L,l({throwOnBadSyncType:!0},G,{sync:!0}))}},{key:"parseAsync",value:function($,L,G){return this.parse($,L,l({throwOnBadSyncType:!0},G,{sync:!1}))}},{key:"specialTypeNames",value:function($,L){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return G.returnTypeNames=!0,this.encapsulate($,L,G)}},{key:"rootTypeName",value:function($,L){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return G.iterateNone=!0,this.encapsulate($,L,G)}},{key:"encapsulate",value:function($,L,G){G=l({sync:!0},this.options,{},G);var ke=G,Ae=ke.sync,Se=this,te={},dt=[],Ot=[],jt=[],Vt="cyclic"in G?G.cyclic:!0,Zt=G,fn=Zt.encapsulateObserver,Dt=Be("",$,Vt,L||{},jt);function zt(Q){var y=Object.values(te);if(G.iterateNone)return y.length?y[0]:A.getJSONType(Q);if(y.length){if(G.returnTypeNames)return h(new Set(y));!Q||!O(Q)||Ut.call(Q,"$types")?Q={$:Q,$types:{$:te}}:Q.$types=te}else z(Q)&&Ut.call(Q,"$types")&&(Q={$:Q,$types:!0});return G.returnTypeNames?!1:Q}function We(Q,y){return $e.apply(this,arguments)}function $e(){return $e=s(regeneratorRuntime.mark(function Q(y,f){var m;return regeneratorRuntime.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.all(f.map(function(F){return F[1].p}));case 2:return m=T.sent,T.next=5,Promise.all(m.map(function(){var F=s(regeneratorRuntime.mark(function q(ee){var Y,ae,be,we,je,Te,xe,Ke,qe,ge,ht,J,K,ie;return regeneratorRuntime.wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(Y=[],ae=f.splice(0,1),be=d(ae,1),we=be[0],je=d(we,7),Te=je[0],xe=je[2],Ke=je[3],qe=je[4],ge=je[5],ht=je[6],J=Be(Te,ee,xe,Ke,Y,!0,ht),K=N(J,k),!(Te&&K)){ue.next=11;break}return ue.next=8,J.p;case 8:return ie=ue.sent,qe[ge]=ie,ue.abrupt("return",We(y,Y));case 11:return Te?qe[ge]=J:K?y=J.p:y=J,ue.abrupt("return",We(y,Y));case 13:case"end":return ue.stop()}},q)}));return function(q){return F.apply(this,arguments)}}()));case 5:return T.abrupt("return",y);case 6:case"end":return T.stop()}},Q)})),$e.apply(this,arguments)}function Ie(Q,y,f){Object.assign(Q,y);var m=Sn.map(function(w){var T=Q[w];return delete Q[w],T});f(),Sn.forEach(function(w,T){Q[w]=m[T]})}function Be(Q,y,f,m,w,T,F){var q,ee={},Y=n(y),ae=fn?function(K){var ie=F||m.type||A.getJSONType(y);fn(Object.assign(K||ee,{keypath:Q,value:y,cyclic:f,stateObj:m,promisesData:w,resolvingTypesonPromise:T,awaitingTypesonPromise:N(y,k)},{type:ie}))}:null;if(["string","boolean","number","undefined"].includes(Y))return y===void 0||Y==="number"&&(isNaN(y)||y===-1/0||y===1/0)?(m.replaced?q=y:q=Je(Q,y,m,w,!1,T,ae),q!==y&&(ee={replaced:q})):q=y,ae&&ae(),q;if(y===null)return ae&&ae(),y;if(f&&!m.iterateIn&&!m.iterateUnsetNumeric&&y&&n(y)==="object"){var be=dt.indexOf(y);if(be<0)f===!0&&(dt.push(y),Ot.push(Q));else return te[Q]="#",ae&&ae({cyclicKeypath:Ot[be]}),"#"+Ot[be]}var we=O(y),je=Tt(y),Te=(we||je)&&(!Se.plainObjectReplacers.length||m.replaced)||m.iterateIn?y:Je(Q,y,m,w,we||je,null,ae),xe;if(Te!==y?(q=Te,ee={replaced:Te}):Q===""&&N(y,k)?(w.push([Q,y,f,m,void 0,void 0,m.type]),q=y):je&&m.iterateIn!=="object"||m.iterateIn==="array"?(xe=new Array(y.length),ee={clone:xe}):!["function","symbol"].includes(n(y))&&!("toJSON"in y)&&!N(y,k)&&!N(y,Promise)&&!N(y,ArrayBuffer)||we||m.iterateIn==="object"?(xe={},m.addLength&&(xe.length=y.length),ee={clone:xe}):q=y,ae&&ae(),G.iterateNone)return xe||q;if(!xe)return q;if(m.iterateIn){var Ke=function(ie){var ne={ownKeys:Ut.call(y,ie)};Ie(m,ne,function(){var ue=Q+(Q?".":"")+ye(ie),Ee=Be(ue,y[ie],!!f,m,w,T);N(Ee,k)?w.push([ue,Ee,!!f,m,xe,ie,m.type]):Ee!==void 0&&(xe[ie]=Ee)})};for(var qe in y)Ke(qe);ae&&ae({endIterateIn:!0,end:!0})}else Ct(y).forEach(function(K){var ie=Q+(Q?".":"")+ye(K),ne={ownKeys:!0};Ie(m,ne,function(){var ue=Be(ie,y[K],!!f,m,w,T);N(ue,k)?w.push([ie,ue,!!f,m,xe,K,m.type]):ue!==void 0&&(xe[K]=ue)})}),ae&&ae({endIterateOwn:!0,end:!0});if(m.iterateUnsetNumeric){for(var ge=y.length,ht=function(ie){if(!(ie in y)){var ne=Q+(Q?".":"")+ie,ue={ownKeys:!1};Ie(m,ue,function(){var Ee=Be(ne,void 0,!!f,m,w,T);N(Ee,k)?w.push([ne,Ee,!!f,m,xe,ie,m.type]):Ee!==void 0&&(xe[ie]=Ee)})}},J=0;J<ge;J++)ht(J);ae&&ae({endIterateUnsetNumeric:!0,end:!0})}return xe}function Je(Q,y,f,m,w,T,F){for(var q=w?Se.plainObjectReplacers:Se.nonplainObjectReplacers,ee=q.length;ee--;){var Y=q[ee];if(Y.test(y,f)){var ae=Y.type;if(Se.revivers[ae]){var be=te[Q];te[Q]=be?[ae].concat(be):ae}if(Object.assign(f,{type:ae,replaced:!0}),(Ae||!Y.replaceAsync)&&!Y.replace)return F&&F({typeDetected:!0}),Be(Q,y,Vt&&"readonly",f,m,T,ae);F&&F({replacing:!0});var we=Ae||!Y.replaceAsync?"replace":"replaceAsync";return Be(Q,Y[we](y,f),Vt&&"readonly",f,m,T,ae)}}return y}return jt.length?Ae&&G.throwOnBadSyncType?function(){throw new TypeError("Sync method requested but async result obtained")}():Promise.resolve(We(Dt,jt)).then(zt):!Ae&&G.throwOnBadSyncType?function(){throw new TypeError("Async method requested but sync result obtained")}():G.stringification&&Ae?[zt(Dt)]:Ae?zt(Dt):Promise.resolve(zt(Dt))}},{key:"encapsulateSync",value:function($,L,G){return this.encapsulate($,L,l({throwOnBadSyncType:!0},G,{sync:!0}))}},{key:"encapsulateAsync",value:function($,L,G){return this.encapsulate($,L,l({throwOnBadSyncType:!0},G,{sync:!1}))}},{key:"revive",value:function($,L){var G=$&&$.$types;if(!G)return $;if(G===!0)return $.$;L=l({sync:!0},this.options,{},L);var ke=L,Ae=ke.sync,Se=[],te={},dt=!0;G.$&&O(G.$)&&($=$.$,G=G.$,dt=!1);var Ot=this;function jt($e,Ie){var Be=Ot.revivers[$e]||[],Je=d(Be,1),Q=Je[0];if(!Q)throw new Error("Unregistered type: "+$e);return Ae&&!("revive"in Q)?Ie:Q[Ae&&Q.revive?"revive":!Ae&&Q.reviveAsync?"reviveAsync":"revive"](Ie,te)}function Vt(){var $e=[];if(Object.entries(G).forEach(function(Ie){var Be=d(Ie,2),Je=Be[0],Q=Be[1];Q!=="#"&&[].concat(Q).forEach(function(y){var f=Ot.revivers[y]||[null,{}],m=d(f,2),w=m[1].plain;w&&($e.push({keypath:Je,type:y}),delete G[Je])})}),!!$e.length)return $e.sort(se).reduce(function Ie(Be,Je){var Q=Je.keypath,y=Je.type;if(_(Be))return Be.then(function(w){return Ie(w,{keypath:Q,type:y})});var f=he($,Q);if(f=jt(y,f),N(f,k))return f.then(function(w){var T=I($,Q,w);T===w&&($=T)});var m=I($,Q,f);m===f&&($=m)},void 0)}var Zt=[];function fn($e,Ie,Be,Je,Q){if(!(dt&&$e==="$types")){var y=G[$e],f=Tt(Ie);if(f||O(Ie)){var m=f?new Array(Ie.length):{};for(Ct(Ie).forEach(function(be){var we=fn($e+($e?".":"")+ye(be),Ie[be],Be||m,m,be),je=function(xe){return N(xe,ft)?m[be]=void 0:xe!==void 0&&(m[be]=xe),xe};N(we,k)?Zt.push(we.then(function(Te){return je(Te)})):je(we)}),Ie=m;Se.length;){var w=d(Se[0],4),T=w[0],F=w[1],q=w[2],ee=w[3],Y=he(T,F);if(Y!==void 0)q[ee]=Y;else break;Se.splice(0,1)}}if(!y)return Ie;if(y==="#"){var ae=he(Be,Ie.slice(1));return ae===void 0&&Se.push([Be,Ie.slice(1),Je,Q]),ae}return[].concat(y).reduce(function be(we,je){return N(we,k)?we.then(function(Te){return be(Te,je)}):jt(je,we)},Ie)}}function Dt($e){return N($e,ft)?void 0:$e}var zt=Vt(),We;return N(zt,k)?We=zt.then(function(){return $}):(We=fn("",$,null),Zt.length&&(We=k.resolve(We).then(function($e){return k.all([$e].concat(Zt))}).then(function($e){var Ie=d($e,1),Be=Ie[0];return Be}))),_(We)?Ae&&L.throwOnBadSyncType?function(){throw new TypeError("Sync method requested but async result obtained")}():N(We,k)?We.p.then(Dt):We:!Ae&&L.throwOnBadSyncType?function(){throw new TypeError("Async method requested but sync result obtained")}():Ae?Dt(We):Promise.resolve(Dt(We))}},{key:"reviveSync",value:function($,L){return this.revive($,l({throwOnBadSyncType:!0},L,{sync:!0}))}},{key:"reviveAsync",value:function($,L){return this.revive($,l({throwOnBadSyncType:!0},L,{sync:!1}))}},{key:"register",value:function($,L){return L=L||{},[].concat($).forEach(function G(ke){var Ae=this;if(Tt(ke))return ke.map(function(Se){return G.call(Ae,Se)});ke&&Ct(ke).forEach(function(Se){if(Se==="#")throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");if(A.JSON_TYPES.includes(Se))throw new TypeError("Plain JSON object types are reserved as type names");var te=ke[Se],dt=te&&te.testPlainObjects?this.plainObjectReplacers:this.nonplainObjectReplacers,Ot=dt.filter(function(Be){return Be.type===Se});if(Ot.length&&(dt.splice(dt.indexOf(Ot[0]),1),delete this.revivers[Se],delete this.types[Se]),typeof te=="function"){var jt=te;te={test:function(Je){return Je&&Je.constructor===jt},replace:function(Je){return l({},Je)},revive:function(Je){return Object.assign(Object.create(jt.prototype),Je)}}}else if(Tt(te)){var Vt=te,Zt=d(Vt,3),fn=Zt[0],Dt=Zt[1],zt=Zt[2];te={test:fn,replace:Dt,revive:zt}}if(!(!te||!te.test)){var We={type:Se,test:te.test.bind(te)};te.replace&&(We.replace=te.replace.bind(te)),te.replaceAsync&&(We.replaceAsync=te.replaceAsync.bind(te));var $e=typeof L.fallback=="number"?L.fallback:L.fallback?0:1/0;if(te.testPlainObjects?this.plainObjectReplacers.splice($e,0,We):this.nonplainObjectReplacers.splice($e,0,We),te.revive||te.reviveAsync){var Ie={};te.revive&&(Ie.revive=te.revive.bind(te)),te.reviveAsync&&(Ie.reviveAsync=te.reviveAsync.bind(te)),this.revivers[Se]=[Ie,{plain:te.testPlainObjects}]}this.types[Se]=te}},this)},this),this}}]),A}(),ft=function A(){i(this,A)};return ft.__typeson__type__="TypesonUndefined",De.Undefined=ft,De.Promise=k,De.isThenable=_,De.toStringTag=p,De.hasConstructorOf=N,De.isObject=z,De.isPlainObject=O,De.isUserObject=W,De.escapeKeyPathComponent=ye,De.unescapeKeyPathComponent=fe,De.getByKeyPath=he,De.getJSONType=ce,De.JSON_TYPES=["null","boolean","number","string","array","object"],De})}),Yy=La(function(t,e){(function(n,r){t.exports=r()})(aa,function(){function n(y){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f})(y)}function r(y,f){if(!(y instanceof f))throw new TypeError("Cannot call a class as a function")}function s(y,f){for(var m=0;m<f.length;m++){var w=f[m];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}function i(y,f,m){return f in y?Object.defineProperty(y,f,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[f]=m,y}function o(y,f){var m=Object.keys(y);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(y);f&&(w=w.filter(function(T){return Object.getOwnPropertyDescriptor(y,T).enumerable})),m.push.apply(m,w)}return m}function a(y){return function(m){if(Array.isArray(m))return u(m)}(y)||function(m){if(typeof Symbol<"u"&&Symbol.iterator in Object(m))return Array.from(m)}(y)||function(m,w){if(m){if(typeof m=="string")return u(m,w);var T=Object.prototype.toString.call(m).slice(8,-1);if(T==="Object"&&m.constructor&&(T=m.constructor.name),T==="Map"||T==="Set")return Array.from(m);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return u(m,w)}}(y)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function u(y,f){(f==null||f>y.length)&&(f=y.length);for(var m=0,w=new Array(f);m<f;m++)w[m]=y[m];return w}function c(y){return(c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m})(y)}function l(y,f){if(!(y instanceof f))throw new TypeError("Cannot call a class as a function")}function d(y,f){for(var m=0;m<f.length;m++){var w=f[m];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}function h(y,f,m){return f in y?Object.defineProperty(y,f,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[f]=m,y}function g(y,f){var m=Object.keys(y);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(y);f&&(w=w.filter(function(T){return Object.getOwnPropertyDescriptor(y,T).enumerable})),m.push.apply(m,w)}return m}function v(y){for(var f=1;f<arguments.length;f++){var m=arguments[f]!=null?arguments[f]:{};f%2?g(Object(m),!0).forEach(function(w){h(y,w,m[w])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(m)):g(Object(m)).forEach(function(w){Object.defineProperty(y,w,Object.getOwnPropertyDescriptor(m,w))})}return y}function b(y,f){return function(w){if(Array.isArray(w))return w}(y)||function(w,T){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(w)))){var F=[],q=!0,ee=!1,Y=void 0;try{for(var ae,be=w[Symbol.iterator]();!(q=(ae=be.next()).done)&&(F.push(ae.value),!T||F.length!==T);q=!0);}catch(we){ee=!0,Y=we}finally{try{q||be.return==null||be.return()}finally{if(ee)throw Y}}return F}}(y,f)||E(y,f)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function x(y){return function(m){if(Array.isArray(m))return S(m)}(y)||function(m){if(typeof Symbol<"u"&&Symbol.iterator in Object(m))return Array.from(m)}(y)||E(y)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function E(y,f){if(y){if(typeof y=="string")return S(y,f);var m=Object.prototype.toString.call(y).slice(8,-1);return m==="Object"&&y.constructor&&(m=y.constructor.name),m==="Map"||m==="Set"?Array.from(y):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?S(y,f):void 0}}function S(y,f){(f==null||f>y.length)&&(f=y.length);for(var m=0,w=new Array(f);m<f;m++)w[m]=y[m];return w}var k=function y(f){l(this,y),this.p=new Promise(f)};k.__typeson__type__="TypesonPromise",typeof Symbol<"u"&&(k.prototype[Symbol.toStringTag]="TypesonPromise"),k.prototype.then=function(y,f){var m=this;return new k(function(w,T){m.p.then(function(F){w(y?y(F):F)}).catch(function(F){return f?f(F):Promise.reject(F)}).then(w,T)})},k.prototype.catch=function(y){return this.then(null,y)},k.resolve=function(y){return new k(function(f){f(y)})},k.reject=function(y){return new k(function(f,m){m(y)})},["all","race"].forEach(function(y){k[y]=function(f){return new k(function(m,w){Promise[y](f.map(function(T){return T&&T.constructor&&T.constructor.__typeson__type__==="TypesonPromise"?T.p:T})).then(m,w)})}});var D={}.toString,R={}.hasOwnProperty,P=Object.getPrototypeOf,B=R.toString;function C(y,f){return O(y)&&typeof y.then=="function"&&(!f||typeof y.catch=="function")}function _(y){return D.call(y).slice(8,-1)}function p(y,f){if(!y||c(y)!=="object")return!1;var m=P(y);if(!m)return f===null;var w=R.call(m,"constructor")&&m.constructor;return typeof w!="function"?f===null:f===w||f!==null&&B.call(w)===B.call(f)||typeof f=="function"&&typeof w.__typeson__type__=="string"&&w.__typeson__type__===f.__typeson__type__}function N(y){return!(!y||_(y)!=="Object")&&(!P(y)||p(y,Object))}function O(y){return y&&c(y)==="object"}function W(y){return y.replace(/~/g,"~0").replace(/\./g,"~1")}function z(y){return y.replace(/~1/g,".").replace(/~0/g,"~")}function ye(y,f){if(f==="")return y;var m=f.indexOf(".");if(m>-1){var w=y[z(f.slice(0,m))];return w===void 0?void 0:ye(w,f.slice(m+1))}return y[z(f)]}function fe(y,f,m){if(f==="")return m;var w=f.indexOf(".");return w>-1?fe(y[z(f.slice(0,w))],f.slice(w+1),m):(y[z(f)]=m,y)}function he(y,f,m){return m?f?f(y):y:(y&&y.then||(y=Promise.resolve(y)),f?y.then(f):y)}var I=Object.keys,ce=Array.isArray,Ct={}.hasOwnProperty,Tt=["type","replaced","iterateIn","iterateUnsetNumeric"];function Ut(y){return function(){for(var f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];try{return Promise.resolve(y.apply(this,f))}catch(w){return Promise.reject(w)}}}function Sn(y,f){if(y.keypath==="")return-1;var m=y.keypath.match(/\./g)||0,w=f.keypath.match(/\./g)||0;return m&&(m=m.length),w&&(w=w.length),m>w?-1:m<w?1:y.keypath<f.keypath?-1:y.keypath>f.keypath}var se=function(){function y(f){l(this,y),this.options=f,this.plainObjectReplacers=[],this.nonplainObjectReplacers=[],this.revivers={},this.types={}}return function(m,w,T){return w&&d(m.prototype,w),T&&d(m,T),m}(y,[{key:"stringify",value:function(m,w,T,F){F=v(v(v({},this.options),F),{},{stringification:!0});var q=this.encapsulate(m,null,F);return ce(q)?JSON.stringify(q[0],w,T):q.then(function(ee){return JSON.stringify(ee,w,T)})}},{key:"stringifySync",value:function(m,w,T,F){return this.stringify(m,w,T,v(v({throwOnBadSyncType:!0},F),{},{sync:!0}))}},{key:"stringifyAsync",value:function(m,w,T,F){return this.stringify(m,w,T,v(v({throwOnBadSyncType:!0},F),{},{sync:!1}))}},{key:"parse",value:function(m,w,T){return T=v(v(v({},this.options),T),{},{parse:!0}),this.revive(JSON.parse(m,w),T)}},{key:"parseSync",value:function(m,w,T){return this.parse(m,w,v(v({throwOnBadSyncType:!0},T),{},{sync:!0}))}},{key:"parseAsync",value:function(m,w,T){return this.parse(m,w,v(v({throwOnBadSyncType:!0},T),{},{sync:!1}))}},{key:"specialTypeNames",value:function(m,w){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T.returnTypeNames=!0,this.encapsulate(m,w,T)}},{key:"rootTypeName",value:function(m,w){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T.iterateNone=!0,this.encapsulate(m,w,T)}},{key:"encapsulate",value:function(m,w,T){var F=Ut(function(J,K){return he(Promise.all(K.map(function(ie){return ie[1].p})),function(ie){return he(Promise.all(ie.map(Ut(function(ne){var ue=!1,Ee=[],$t=b(K.splice(0,1),1),Xe=b($t[0],7),Nt=Xe[0],Ft=Xe[2],Le=Xe[3],Kt=Xe[4],Ye=Xe[5],Bt=Xe[6],wt=ge(Nt,ne,Ft,Le,Ee,!0,Bt),Wt=p(wt,k);return function(Qi,$s){var fr=Qi();return fr&&fr.then?fr.then($s):$s(fr)}(function(){if(Nt&&Wt)return he(wt.p,function(Jt){return Kt[Ye]=Jt,ue=!0,F(J,Ee)})},function(Jt){return ue?Jt:(Nt?Kt[Ye]=wt:J=Wt?wt.p:wt,F(J,Ee))})}))),function(){return J})})}),q=(T=v(v({sync:!0},this.options),T)).sync,ee=this,Y={},ae=[],be=[],we=[],je=!("cyclic"in T)||T.cyclic,Te=T.encapsulateObserver,xe=ge("",m,je,w||{},we);function Ke(J){var K=Object.values(Y);if(T.iterateNone)return K.length?K[0]:y.getJSONType(J);if(K.length){if(T.returnTypeNames)return x(new Set(K));J&&N(J)&&!Ct.call(J,"$types")?J.$types=Y:J={$:J,$types:{$:Y}}}else O(J)&&Ct.call(J,"$types")&&(J={$:J,$types:!0});return!T.returnTypeNames&&J}function qe(J,K,ie){Object.assign(J,K);var ne=Tt.map(function(ue){var Ee=J[ue];return delete J[ue],Ee});ie(),Tt.forEach(function(ue,Ee){J[ue]=ne[Ee]})}function ge(J,K,ie,ne,ue,Ee,$t){var Xe,Nt={},Ft=c(K),Le=Te?function(kn){var Et=$t||ne.type||y.getJSONType(K);Te(Object.assign(kn||Nt,{keypath:J,value:K,cyclic:ie,stateObj:ne,promisesData:ue,resolvingTypesonPromise:Ee,awaitingTypesonPromise:p(K,k)},{type:Et}))}:null;if(["string","boolean","number","undefined"].includes(Ft))return K===void 0||Number.isNaN(K)||K===Number.NEGATIVE_INFINITY||K===Number.POSITIVE_INFINITY?(Xe=ne.replaced?K:ht(J,K,ne,ue,!1,Ee,Le))!==K&&(Nt={replaced:Xe}):Xe=K,Le&&Le(),Xe;if(K===null)return Le&&Le(),K;if(ie&&!ne.iterateIn&&!ne.iterateUnsetNumeric&&K&&c(K)==="object"){var Kt=ae.indexOf(K);if(!(Kt<0))return Y[J]="#",Le&&Le({cyclicKeypath:be[Kt]}),"#"+be[Kt];ie===!0&&(ae.push(K),be.push(J))}var Ye,Bt=N(K),wt=ce(K),Wt=(Bt||wt)&&(!ee.plainObjectReplacers.length||ne.replaced)||ne.iterateIn?K:ht(J,K,ne,ue,Bt||wt,null,Le);if(Wt!==K?(Xe=Wt,Nt={replaced:Wt}):J===""&&p(K,k)?(ue.push([J,K,ie,ne,void 0,void 0,ne.type]),Xe=K):wt&&ne.iterateIn!=="object"||ne.iterateIn==="array"?(Ye=new Array(K.length),Nt={clone:Ye}):(["function","symbol"].includes(c(K))||"toJSON"in K||p(K,k)||p(K,Promise)||p(K,ArrayBuffer))&&!Bt&&ne.iterateIn!=="object"?Xe=K:(Ye={},ne.addLength&&(Ye.length=K.length),Nt={clone:Ye}),Le&&Le(),T.iterateNone)return Ye||Xe;if(!Ye)return Xe;if(ne.iterateIn){var Jt=function(Et){var dn={ownKeys:Ct.call(K,Et)};qe(ne,dn,function(){var Hn=J+(J?".":"")+W(Et),Bs=ge(Hn,K[Et],!!ie,ne,ue,Ee);p(Bs,k)?ue.push([Hn,Bs,!!ie,ne,Ye,Et,ne.type]):Bs!==void 0&&(Ye[Et]=Bs)})};for(var Qi in K)Jt(Qi);Le&&Le({endIterateIn:!0,end:!0})}else I(K).forEach(function(kn){var Et=J+(J?".":"")+W(kn);qe(ne,{ownKeys:!0},function(){var dn=ge(Et,K[kn],!!ie,ne,ue,Ee);p(dn,k)?ue.push([Et,dn,!!ie,ne,Ye,kn,ne.type]):dn!==void 0&&(Ye[kn]=dn)})}),Le&&Le({endIterateOwn:!0,end:!0});if(ne.iterateUnsetNumeric){for(var $s=K.length,fr=function(Et){if(!(Et in K)){var dn=J+(J?".":"")+Et;qe(ne,{ownKeys:!1},function(){var Hn=ge(dn,void 0,!!ie,ne,ue,Ee);p(Hn,k)?ue.push([dn,Hn,!!ie,ne,Ye,Et,ne.type]):Hn!==void 0&&(Ye[Et]=Hn)})}},eo=0;eo<$s;eo++)fr(eo);Le&&Le({endIterateUnsetNumeric:!0,end:!0})}return Ye}function ht(J,K,ie,ne,ue,Ee,$t){for(var Xe=ue?ee.plainObjectReplacers:ee.nonplainObjectReplacers,Nt=Xe.length;Nt--;){var Ft=Xe[Nt];if(Ft.test(K,ie)){var Le=Ft.type;if(ee.revivers[Le]){var Kt=Y[J];Y[J]=Kt?[Le].concat(Kt):Le}return Object.assign(ie,{type:Le,replaced:!0}),!q&&Ft.replaceAsync||Ft.replace?($t&&$t({replacing:!0}),ge(J,Ft[q||!Ft.replaceAsync?"replace":"replaceAsync"](K,ie),je&&"readonly",ie,ne,Ee,Le)):($t&&$t({typeDetected:!0}),ge(J,K,je&&"readonly",ie,ne,Ee,Le))}}return K}return we.length?q&&T.throwOnBadSyncType?function(){throw new TypeError("Sync method requested but async result obtained")}():Promise.resolve(F(xe,we)).then(Ke):!q&&T.throwOnBadSyncType?function(){throw new TypeError("Async method requested but sync result obtained")}():T.stringification&&q?[Ke(xe)]:q?Ke(xe):Promise.resolve(Ke(xe))}},{key:"encapsulateSync",value:function(m,w,T){return this.encapsulate(m,w,v(v({throwOnBadSyncType:!0},T),{},{sync:!0}))}},{key:"encapsulateAsync",value:function(m,w,T){return this.encapsulate(m,w,v(v({throwOnBadSyncType:!0},T),{},{sync:!1}))}},{key:"revive",value:function(m,w){var T=m&&m.$types;if(!T)return m;if(T===!0)return m.$;var F=(w=v(v({sync:!0},this.options),w)).sync,q=[],ee={},Y=!0;T.$&&N(T.$)&&(m=m.$,T=T.$,Y=!1);var ae=this;function be(Ke,qe){var ge=b(ae.revivers[Ke]||[],1)[0];if(!ge)throw new Error("Unregistered type: "+Ke);return F&&!("revive"in ge)?qe:ge[F&&ge.revive?"revive":!F&&ge.reviveAsync?"reviveAsync":"revive"](qe,ee)}var we=[];function je(Ke){return p(Ke,De)?void 0:Ke}var Te,xe=function(){var qe=[];if(Object.entries(T).forEach(function(ge){var ht=b(ge,2),J=ht[0],K=ht[1];K!=="#"&&[].concat(K).forEach(function(ie){b(ae.revivers[ie]||[null,{}],2)[1].plain&&(qe.push({keypath:J,type:ie}),delete T[J])})}),qe.length)return qe.sort(Sn).reduce(function ge(ht,J){var K=J.keypath,ie=J.type;if(C(ht))return ht.then(function(Ee){return ge(Ee,{keypath:K,type:ie})});var ne=ye(m,K);if(p(ne=be(ie,ne),k))return ne.then(function(Ee){var $t=fe(m,K,Ee);$t===Ee&&(m=$t)});var ue=fe(m,K,ne);ue===ne&&(m=ue)},void 0)}();return p(xe,k)?Te=xe.then(function(){return m}):(Te=function Ke(qe,ge,ht,J,K){if(!Y||qe!=="$types"){var ie=T[qe],ne=ce(ge);if(ne||N(ge)){var ue=ne?new Array(ge.length):{};for(I(ge).forEach(function(Ye){var Bt=Ke(qe+(qe?".":"")+W(Ye),ge[Ye],ht||ue,ue,Ye),wt=function(Jt){return p(Jt,De)?ue[Ye]=void 0:Jt!==void 0&&(ue[Ye]=Jt),Jt};p(Bt,k)?we.push(Bt.then(function(Wt){return wt(Wt)})):wt(Bt)}),ge=ue;q.length;){var Ee=b(q[0],4),$t=Ee[0],Xe=Ee[1],Nt=Ee[2],Ft=Ee[3],Le=ye($t,Xe);if(Le===void 0)break;Nt[Ft]=Le,q.splice(0,1)}}if(!ie)return ge;if(ie==="#"){var Kt=ye(ht,ge.slice(1));return Kt===void 0&&q.push([ht,ge.slice(1),J,K]),Kt}return[].concat(ie).reduce(function Ye(Bt,wt){return p(Bt,k)?Bt.then(function(Wt){return Ye(Wt,wt)}):be(wt,Bt)},ge)}}("",m,null),we.length&&(Te=k.resolve(Te).then(function(Ke){return k.all([Ke].concat(we))}).then(function(Ke){return b(Ke,1)[0]}))),C(Te)?F&&w.throwOnBadSyncType?function(){throw new TypeError("Sync method requested but async result obtained")}():p(Te,k)?Te.p.then(je):Te:!F&&w.throwOnBadSyncType?function(){throw new TypeError("Async method requested but sync result obtained")}():F?je(Te):Promise.resolve(je(Te))}},{key:"reviveSync",value:function(m,w){return this.revive(m,v(v({throwOnBadSyncType:!0},w),{},{sync:!0}))}},{key:"reviveAsync",value:function(m,w){return this.revive(m,v(v({throwOnBadSyncType:!0},w),{},{sync:!1}))}},{key:"register",value:function(m,w){return w=w||{},[].concat(m).forEach(function T(F){var q=this;if(ce(F))return F.map(function(ee){return T.call(q,ee)});F&&I(F).forEach(function(ee){if(ee==="#")throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");if(y.JSON_TYPES.includes(ee))throw new TypeError("Plain JSON object types are reserved as type names");var Y=F[ee],ae=Y&&Y.testPlainObjects?this.plainObjectReplacers:this.nonplainObjectReplacers,be=ae.filter(function(qe){return qe.type===ee});if(be.length&&(ae.splice(ae.indexOf(be[0]),1),delete this.revivers[ee],delete this.types[ee]),typeof Y=="function"){var we=Y;Y={test:function(ge){return ge&&ge.constructor===we},replace:function(ge){return v({},ge)},revive:function(ge){return Object.assign(Object.create(we.prototype),ge)}}}else if(ce(Y)){var je=b(Y,3);Y={test:je[0],replace:je[1],revive:je[2]}}if(Y&&Y.test){var Te={type:ee,test:Y.test.bind(Y)};Y.replace&&(Te.replace=Y.replace.bind(Y)),Y.replaceAsync&&(Te.replaceAsync=Y.replaceAsync.bind(Y));var xe=typeof w.fallback=="number"?w.fallback:w.fallback?0:Number.POSITIVE_INFINITY;if(Y.testPlainObjects?this.plainObjectReplacers.splice(xe,0,Te):this.nonplainObjectReplacers.splice(xe,0,Te),Y.revive||Y.reviveAsync){var Ke={};Y.revive&&(Ke.revive=Y.revive.bind(Y)),Y.reviveAsync&&(Ke.reviveAsync=Y.reviveAsync.bind(Y)),this.revivers[ee]=[Ke,{plain:Y.testPlainObjects}]}this.types[ee]=Y}},this)},this),this}}]),y}(),De=function y(){l(this,y)};De.__typeson__type__="TypesonUndefined",se.Undefined=De,se.Promise=k,se.isThenable=C,se.toStringTag=_,se.hasConstructorOf=p,se.isObject=O,se.isPlainObject=N,se.isUserObject=function y(f){if(!f||_(f)!=="Object")return!1;var m=P(f);return!m||p(f,Object)||y(m)},se.escapeKeyPathComponent=W,se.unescapeKeyPathComponent=z,se.getByKeyPath=ye,se.getJSONType=function(f){return f===null?"null":Array.isArray(f)?"array":c(f)},se.JSON_TYPES=["null","boolean","number","string","array","object"];for(var ft={userObject:{test:function(f,m){return se.isUserObject(f)},replace:function(f){return function(w){for(var T=1;T<arguments.length;T++){var F=arguments[T]!=null?arguments[T]:{};T%2?o(Object(F),!0).forEach(function(q){i(w,q,F[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(F)):o(Object(F)).forEach(function(q){Object.defineProperty(w,q,Object.getOwnPropertyDescriptor(F,q))})}return w}({},f)},revive:function(f){return f}}},A=[{arrayNonindexKeys:{testPlainObjects:!0,test:function(f,m){return!!Array.isArray(f)&&(Object.keys(f).some(function(w){return String(Number.parseInt(w))!==w})&&(m.iterateIn="object",m.addLength=!0),!0)},replace:function(f,m){return m.iterateUnsetNumeric=!0,f},revive:function(f){if(Array.isArray(f))return f;var m=[];return Object.keys(f).forEach(function(w){var T=f[w];m[w]=T}),m}}},{sparseUndefined:{test:function(f,m){return f===void 0&&m.ownKeys===!1},replace:function(f){return 0},revive:function(f){}}}],j={undef:{test:function(f,m){return f===void 0&&(m.ownKeys||!("ownKeys"in m))},replace:function(f){return 0},revive:function(f){return new se.Undefined}}},$={StringObject:{test:function(f){return se.toStringTag(f)==="String"&&n(f)==="object"},replace:function(f){return String(f)},revive:function(f){return new String(f)}},BooleanObject:{test:function(f){return se.toStringTag(f)==="Boolean"&&n(f)==="object"},replace:function(f){return!!f},revive:function(f){return new Boolean(f)}},NumberObject:{test:function(f){return se.toStringTag(f)==="Number"&&n(f)==="object"},replace:function(f){return Number(f)},revive:function(f){return new Number(f)}}},L=[{nan:{test:function(f){return Number.isNaN(f)},replace:function(f){return"NaN"},revive:function(f){return Number.NaN}}},{infinity:{test:function(f){return f===Number.POSITIVE_INFINITY},replace:function(f){return"Infinity"},revive:function(f){return Number.POSITIVE_INFINITY}}},{negativeInfinity:{test:function(f){return f===Number.NEGATIVE_INFINITY},replace:function(f){return"-Infinity"},revive:function(f){return Number.NEGATIVE_INFINITY}}}],G={date:{test:function(f){return se.toStringTag(f)==="Date"},replace:function(f){var m=f.getTime();return Number.isNaN(m)?"NaN":m},revive:function(f){return f==="NaN"?new Date(Number.NaN):new Date(f)}}},ke={regexp:{test:function(f){return se.toStringTag(f)==="RegExp"},replace:function(f){return{source:f.source,flags:(f.global?"g":"")+(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.sticky?"y":"")+(f.unicode?"u":"")}},revive:function(f){var m=f.source,w=f.flags;return new RegExp(m,w)}}},Ae={map:{test:function(f){return se.toStringTag(f)==="Map"},replace:function(f){return a(f.entries())},revive:function(f){return new Map(f)}}},Se={set:{test:function(f){return se.toStringTag(f)==="Set"},replace:function(f){return a(f.values())},revive:function(f){return new Set(f)}}},te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",dt=new Uint8Array(256),Ot=0;Ot<te.length;Ot++)dt[te.charCodeAt(Ot)]=Ot;var jt=function(f,m,w){w==null&&(w=f.byteLength);for(var T=new Uint8Array(f,m||0,w),F=T.length,q="",ee=0;ee<F;ee+=3)q+=te[T[ee]>>2],q+=te[(3&T[ee])<<4|T[ee+1]>>4],q+=te[(15&T[ee+1])<<2|T[ee+2]>>6],q+=te[63&T[ee+2]];return F%3==2?q=q.slice(0,-1)+"=":F%3==1&&(q=q.slice(0,-2)+"=="),q},Vt=function(f){var m,w,T,F,q=f.length,ee=.75*f.length,Y=0;f[f.length-1]==="="&&(ee--,f[f.length-2]==="="&&ee--);for(var ae=new ArrayBuffer(ee),be=new Uint8Array(ae),we=0;we<q;we+=4)m=dt[f.charCodeAt(we)],w=dt[f.charCodeAt(we+1)],T=dt[f.charCodeAt(we+2)],F=dt[f.charCodeAt(we+3)],be[Y++]=m<<2|w>>4,be[Y++]=(15&w)<<4|T>>2,be[Y++]=(3&T)<<6|63&F;return ae},Zt={arraybuffer:{test:function(f){return se.toStringTag(f)==="ArrayBuffer"},replace:function(f,m){m.buffers||(m.buffers=[]);var w=m.buffers.indexOf(f);return w>-1?{index:w}:(m.buffers.push(f),jt(f))},revive:function(f,m){if(m.buffers||(m.buffers=[]),n(f)==="object")return m.buffers[f.index];var w=Vt(f);return m.buffers.push(w),w}}},fn=typeof self>"u"?aa:self,Dt={};["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"].forEach(function(y){var f=y,m=fn[f];m&&(Dt[y.toLowerCase()]={test:function(T){return se.toStringTag(T)===f},replace:function(T,F){var q=T.buffer,ee=T.byteOffset,Y=T.length;F.buffers||(F.buffers=[]);var ae=F.buffers.indexOf(q);return ae>-1?{index:ae,byteOffset:ee,length:Y}:(F.buffers.push(q),{encoded:jt(q),byteOffset:ee,length:Y})},revive:function(T,F){F.buffers||(F.buffers=[]);var q,ee=T.byteOffset,Y=T.length,ae=T.encoded,be=T.index;return"index"in T?q=F.buffers[be]:(q=Vt(ae),F.buffers.push(q)),new m(q,ee,Y)}})});var zt={dataview:{test:function(f){return se.toStringTag(f)==="DataView"},replace:function(f,m){var w=f.buffer,T=f.byteOffset,F=f.byteLength;m.buffers||(m.buffers=[]);var q=m.buffers.indexOf(w);return q>-1?{index:q,byteOffset:T,byteLength:F}:(m.buffers.push(w),{encoded:jt(w),byteOffset:T,byteLength:F})},revive:function(f,m){m.buffers||(m.buffers=[]);var w,T=f.byteOffset,F=f.byteLength,q=f.encoded,ee=f.index;return"index"in f?w=m.buffers[ee]:(w=Vt(q),m.buffers.push(w)),new DataView(w,T,F)}}},We={IntlCollator:{test:function(f){return se.hasConstructorOf(f,Intl.Collator)},replace:function(f){return f.resolvedOptions()},revive:function(f){return new Intl.Collator(f.locale,f)}},IntlDateTimeFormat:{test:function(f){return se.hasConstructorOf(f,Intl.DateTimeFormat)},replace:function(f){return f.resolvedOptions()},revive:function(f){return new Intl.DateTimeFormat(f.locale,f)}},IntlNumberFormat:{test:function(f){return se.hasConstructorOf(f,Intl.NumberFormat)},replace:function(f){return f.resolvedOptions()},revive:function(f){return new Intl.NumberFormat(f.locale,f)}}};function $e(y){for(var f=new Uint8Array(y.length),m=0;m<y.length;m++)f[m]=y.charCodeAt(m);return f.buffer}var Ie={file:{test:function(f){return se.toStringTag(f)==="File"},replace:function(f){var m=new XMLHttpRequest;if(m.overrideMimeType("text/plain; charset=x-user-defined"),m.open("GET",URL.createObjectURL(f),!1),m.send(),m.status!==200&&m.status!==0)throw new Error("Bad File access: "+m.status);return{type:f.type,stringContents:m.responseText,name:f.name,lastModified:f.lastModified}},revive:function(f){var m=f.name,w=f.type,T=f.stringContents,F=f.lastModified;return new File([$e(T)],m,{type:w,lastModified:F})},replaceAsync:function(f){return new se.Promise(function(m,w){var T=new FileReader;T.addEventListener("load",function(){m({type:f.type,stringContents:T.result,name:f.name,lastModified:f.lastModified})}),T.addEventListener("error",function(){w(T.error)}),T.readAsBinaryString(f)})}}},Be={bigint:{test:function(f){return typeof f=="bigint"},replace:function(f){return String(f)},revive:function(f){return BigInt(f)}}},Je={bigintObject:{test:function(f){return n(f)==="object"&&se.hasConstructorOf(f,BigInt)},replace:function(f){return String(f)},revive:function(f){return new Object(BigInt(f))}}},Q={cryptokey:{test:function(f){return se.toStringTag(f)==="CryptoKey"&&f.extractable},replaceAsync:function(f){return new se.Promise(function(m,w){crypto.subtle.exportKey("jwk",f).catch(function(T){w(T)}).then(function(T){m({jwk:T,algorithm:f.algorithm,usages:f.usages})})})},revive:function(f){var m=f.jwk,w=f.algorithm,T=f.usages;return crypto.subtle.importKey("jwk",m,w,!0,T)}}};return[ft,j,A,$,L,G,ke,{imagedata:{test:function(f){return se.toStringTag(f)==="ImageData"},replace:function(f){return{array:a(f.data),width:f.width,height:f.height}},revive:function(f){return new ImageData(new Uint8ClampedArray(f.array),f.width,f.height)}}},{imagebitmap:{test:function(f){return se.toStringTag(f)==="ImageBitmap"||f&&f.dataset&&f.dataset.toStringTag==="ImageBitmap"},replace:function(f){var m=document.createElement("canvas");return m.getContext("2d").drawImage(f,0,0),m.toDataURL()},revive:function(f){var m=document.createElement("canvas"),w=m.getContext("2d"),T=document.createElement("img");return T.addEventListener("load",function(){w.drawImage(T,0,0)}),T.src=f,m},reviveAsync:function(f){var m=document.createElement("canvas"),w=m.getContext("2d"),T=document.createElement("img");return T.addEventListener("load",function(){w.drawImage(T,0,0)}),T.src=f,createImageBitmap(m)}}},Ie,{file:Ie.file,filelist:{test:function(f){return se.toStringTag(f)==="FileList"},replace:function(f){for(var m=[],w=0;w<f.length;w++)m[w]=f.item(w);return m},revive:function(f){return new(function(){function m(){r(this,m),this._files=arguments[0],this.length=this._files.length}return function(T,F,q){return F&&s(T.prototype,F),q&&s(T,q),T}(m,[{key:"item",value:function(T){return this._files[T]}},{key:Symbol.toStringTag,get:function(){return"FileList"}}]),m}())(f)}}},{blob:{test:function(f){return se.toStringTag(f)==="Blob"},replace:function(f){var m=new XMLHttpRequest;if(m.overrideMimeType("text/plain; charset=x-user-defined"),m.open("GET",URL.createObjectURL(f),!1),m.send(),m.status!==200&&m.status!==0)throw new Error("Bad Blob access: "+m.status);return{type:f.type,stringContents:m.responseText}},revive:function(f){var m=f.type,w=f.stringContents;return new Blob([$e(w)],{type:m})},replaceAsync:function(f){return new se.Promise(function(m,w){var T=new FileReader;T.addEventListener("load",function(){m({type:f.type,stringContents:T.result})}),T.addEventListener("error",function(){w(T.error)}),T.readAsBinaryString(f)})}}}].concat(typeof Map=="function"?Ae:[],typeof Set=="function"?Se:[],typeof ArrayBuffer=="function"?Zt:[],typeof Uint8Array=="function"?Dt:[],typeof DataView=="function"?zt:[],typeof Intl<"u"?We:[],typeof crypto<"u"?Q:[],typeof BigInt<"u"?[Be,Je]:[])})}),Er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ts=new Uint8Array(256);for(var ti=0;ti<Er.length;ti++)ts[Er.codePointAt(ti)]=ti;var ca=function(e,n,r){r==null&&(r=e.byteLength);for(var s=new Uint8Array(e,n||0,r),i=s.length,o="",a=0;a<i;a+=3)o+=Er[s[a]>>2],o+=Er[(s[a]&3)<<4|s[a+1]>>4],o+=Er[(s[a+1]&15)<<2|s[a+2]>>6],o+=Er[s[a+2]&63];return i%3===2?o=o.slice(0,-1)+"=":i%3===1&&(o=o.slice(0,-2)+"=="),o},Sl=function(e){var n=e.length,r=e.length*.75,s=0,i,o,a,u;e[e.length-1]==="="&&(r--,e[e.length-2]==="="&&r--);for(var c=new ArrayBuffer(r),l=new Uint8Array(c),d=0;d<n;d+=4)i=ts[e.codePointAt(d)],o=ts[e.codePointAt(d+1)],a=ts[e.codePointAt(d+2)],u=ts[e.codePointAt(d+3)],l[s++]=i<<2|o>>4,l[s++]=(o&15)<<4|a>>2,l[s++]=(a&3)<<6|u&63;return c},Hy=typeof self>"u"?global:self,kl={};["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"].forEach(function(t){var e=t,n=Hy[e];n&&(kl[t.toLowerCase()+"2"]={test:function(r){return Xi.toStringTag(r)===e},replace:function(r){var s=r.buffer,i=r.byteOffset,o=r.length;return{buffer:s,byteOffset:i,length:o}},revive:function(r){var s=r.buffer,i=r.byteOffset,o=r.length;return new n(s,i,o)}})});var Vy={arraybuffer:{test:function(t){return Xi.toStringTag(t)==="ArrayBuffer"},replace:function(t){return ca(t,0,t.byteLength)},revive:function(t){var e=Sl(t);return e}}},qt=new Xi().register(Yy),Zy="FileReaderSync"in self,Ui=[],go=0;qt.register([Vy,kl,{blob2:{test:function(t){return Xi.toStringTag(t)==="Blob"},replace:function(t){if(t.isClosed)throw new Error("The Blob is closed");if(Zy){var e=El(t,"binary"),n=ca(e,0,e.byteLength);return{type:t.type,data:n}}else{Ui.push(t);var r={type:t.type,data:{start:go,end:go+t.size}};return go+=t.size,r}},finalize:function(t,e){t.data=ca(e,0,e.byteLength)},revive:function(t){var e=t.type,n=t.data;return new Blob([Sl(n)],{type:e})}}}]);qt.mustFinalize=function(){return Ui.length>0};qt.finalize=function(t){return qn(void 0,void 0,void 0,function(){var e,n,r,s,i,o,a,u,c,l;return en(this,function(d){switch(d.label){case 0:return[4,wl(new Blob(Ui),"binary")];case 1:if(e=d.sent(),t){for(n=0,r=t;n<r.length;n++)if(s=r[n],s.$types){i=s.$types,o=i.$,o&&(i=i.$);for(a in i)u=i[a],c=qt.types[u],c&&c.finalize&&(l=tt.getByKeyPath(s,o?"$."+a:a),c.finalize(l,e.slice(l.start,l.end)))}}return Ui=[],[2]}})})};var zy=2e3;function xl(t,e){return qn(this,void 0,void 0,function(){function n(){return qn(this,void 0,void 0,function(){var c,l,d,h,g,v,b,x,E;return en(this,function(S){switch(S.label){case 0:return[4,Promise.all(t.tables.map(function(k){return k.count()}))];case 1:c=S.sent(),c.forEach(function(k,D){return s[D].rowCount=k}),u.totalRows=c.reduce(function(k,D){return k+D}),l=JSON.stringify(o,void 0,i?2:void 0),d=l.lastIndexOf("]"),h=l.substring(0,d),r.push(h),g=e.filter,v=function(k){var D,R,P,B,C,_,p,N,O,W,z,ye;return en(this,function(fe){switch(fe.label){case 0:D=t.table(k),R=D.schema.primKey,P=!!R.keyPath,B=e.numRowsPerChunk||zy,C=P?{tableName:D.name,inbound:!0,rows:[]}:{tableName:D.name,inbound:!1,rows:[]},_=JSON.stringify(C,void 0,i?2:void 0),i&&(_=_.split(`
`).join(`
    `)),p=_.lastIndexOf("]"),r.push(_.substring(0,p)),N=null,O=0,W=!0,z=function(){var he,I,ce,Ct,se,Tt,Ut,Sn,se;return en(this,function(De){switch(De.label){case 0:return a&&tt.ignoreTransaction(function(){return a(u)}),he=N==null?D.limit(B):D.where(":id").above(N).limit(B),[4,he.toArray()];case 1:return I=De.sent(),I.length===0?[2,"break"]:(N!=null&&O>0&&(r.push(","),i&&r.push(`
      `)),W=I.length===B,P?(ce=g?I.filter(function(ft){return g(k,ft)}):I,Ct=ce.map(function(ft){return qt.encapsulate(ft)}),qt.mustFinalize()?[4,tt.waitFor(qt.finalize(Ct))]:[3,3]):[3,4]);case 2:De.sent(),De.label=3;case 3:return se=JSON.stringify(Ct,void 0,i?2:void 0),i&&(se=se.split(`
`).join(`
      `)),r.push(new Blob([se.substring(1,se.length-1)])),O=ce.length,N=I.length>0?tt.getByKeyPath(I[I.length-1],R.keyPath):null,[3,8];case 4:return[4,he.primaryKeys()];case 5:return Tt=De.sent(),Ut=Tt.map(function(ft,A){return[ft,I[A]]}),g&&(Ut=Ut.filter(function(ft){var A=ft[0],j=ft[1];return g(k,j,A)})),Sn=Ut.map(function(ft){return qt.encapsulate(ft)}),qt.mustFinalize()?[4,tt.waitFor(qt.finalize(Sn))]:[3,7];case 6:De.sent(),De.label=7;case 7:se=JSON.stringify(Sn,void 0,i?2:void 0),i&&(se=se.split(`
`).join(`
      `)),r.push(new Blob([se.substring(1,se.length-1)])),O=Ut.length,N=Tt.length>0?Tt[Tt.length-1]:null,De.label=8;case 8:return u.completedRows+=I.length,[2]}})},fe.label=1;case 1:return W?[5,z()]:[3,3];case 2:return ye=fe.sent(),ye==="break"?[3,3]:[3,1];case 3:return r.push(_.substr(p)),u.completedTables+=1,u.completedTables<u.totalTables&&r.push(","),[2]}})},b=0,x=s,S.label=2;case 2:return b<x.length?(E=x[b].name,[5,v(E)]):[3,5];case 3:S.sent(),S.label=4;case 4:return b++,[3,2];case 5:return r.push(l.substr(d)),u.done=!0,a&&tt.ignoreTransaction(function(){return a(u)}),[2]}})})}var r,s,i,o,a,u;return en(this,function(c){switch(c.label){case 0:e=e||{},r=[],s=t.tables.map(function(l){return{name:l.name,schema:qy(l),rowCount:0}}),i=e.prettyJson,o={formatName:"dexie",formatVersion:1,data:{databaseName:t.name,databaseVersion:t.verno,tables:s,data:[]}},a=e.progressCallback,u={done:!1,completedRows:0,completedTables:0,totalRows:NaN,totalTables:t.tables.length},c.label=1;case 1:return c.trys.push([1,,6,7]),e.noTransaction?[4,n()]:[3,3];case 2:return c.sent(),[3,5];case 3:return[4,t.transaction("r",t.tables,n)];case 4:c.sent(),c.label=5;case 5:return[3,7];case 6:return qt.finalize(),[7];case 7:return[2,new Blob(r,{type:"text/json"})]}})})}var Wy=1,Jy={Stream:function(){}},Xy=La(function(t,e){(function(n){var r=typeof process=="object"&&process.env?process.env:self;n.parser=function(_){return new g(_)},n.CParser=g,n.CStream=b,n.createStream=v,n.MAX_BUFFER_LENGTH=10*1024*1024,n.DEBUG=r.CDEBUG==="debug",n.INFO=r.CDEBUG==="debug"||r.CDEBUG==="info",n.EVENTS=["value","string","key","openobject","closeobject","openarray","closearray","error","end","ready"];var s={textNode:void 0,numberNode:""},i=n.EVENTS.filter(function(_){return _!=="error"&&_!=="end"}),o=0,a;n.STATE={BEGIN:o++,VALUE:o++,OPEN_OBJECT:o++,CLOSE_OBJECT:o++,OPEN_ARRAY:o++,CLOSE_ARRAY:o++,TEXT_ESCAPE:o++,STRING:o++,BACKSLASH:o++,END:o++,OPEN_KEY:o++,CLOSE_KEY:o++,TRUE:o++,TRUE2:o++,TRUE3:o++,FALSE:o++,FALSE2:o++,FALSE3:o++,FALSE4:o++,NULL:o++,NULL2:o++,NULL3:o++,NUMBER_DECIMAL_POINT:o++,NUMBER_DIGIT:o++};for(var u in n.STATE)n.STATE[n.STATE[u]]=u;o=n.STATE;const c={tab:9,lineFeed:10,carriageReturn:13,space:32,doubleQuote:34,plus:43,comma:44,minus:45,period:46,_0:48,_9:57,colon:58,E:69,openBracket:91,backslash:92,closeBracket:93,a:97,b:98,e:101,f:102,l:108,n:110,r:114,s:115,t:116,u:117,openBrace:123,closeBrace:125};Object.create||(Object.create=function(_){function p(){this.__proto__=_}return p.prototype=_,new p}),Object.getPrototypeOf||(Object.getPrototypeOf=function(_){return _.__proto__}),Object.keys||(Object.keys=function(_){var p=[];for(var N in _)_.hasOwnProperty(N)&&p.push(N);return p});function l(_){var p=Math.max(n.MAX_BUFFER_LENGTH,10),N=0;for(var O in s){var W=_[O]===void 0?0:_[O].length;if(W>p)switch(O){case"text":closeText(_);break;default:R(_,"Max buffer length exceeded: "+O)}N=Math.max(N,W)}_.bufferCheckPosition=n.MAX_BUFFER_LENGTH-N+_.position}function d(_){for(var p in s)_[p]=s[p]}var h=/[\\"\n]/g;function g(_){if(!(this instanceof g))return new g(_);var p=this;d(p),p.bufferCheckPosition=n.MAX_BUFFER_LENGTH,p.q=p.c=p.p="",p.opt=_||{},p.closed=p.closedRoot=p.sawRoot=!1,p.tag=p.error=null,p.state=o.BEGIN,p.stack=new Array,p.position=p.column=0,p.line=1,p.slashed=!1,p.unicodeI=0,p.unicodeS=null,p.depth=0,x(p,"onready")}g.prototype={end:function(){P(this)},write:C,resume:function(){return this.error=null,this},close:function(){return this.write(null)}};try{a=Jy.Stream}catch{a=function(){}}function v(_){return new b(_)}function b(_){if(!(this instanceof b))return new b(_);this._parser=new g(_),this.writable=!0,this.readable=!0,this.bytes_remaining=0,this.bytes_in_sequence=0,this.temp_buffs={2:new Buffer(2),3:new Buffer(3),4:new Buffer(4)},this.string="";var p=this;a.apply(p),this._parser.onend=function(){p.emit("end")},this._parser.onerror=function(N){p.emit("error",N),p._parser.error=null},i.forEach(function(N){Object.defineProperty(p,"on"+N,{get:function(){return p._parser["on"+N]},set:function(O){if(!O)return p.removeAllListeners(N),p._parser["on"+N]=O,O;p.on(N,O)},enumerable:!0,configurable:!1})})}b.prototype=Object.create(a.prototype,{constructor:{value:b}}),b.prototype.write=function(_){_=new Buffer(_);for(var p=0;p<_.length;p++){var N=_[p];if(this.bytes_remaining>0){for(var O=0;O<this.bytes_remaining;O++)this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence-this.bytes_remaining+O]=_[O];this.string=this.temp_buffs[this.bytes_in_sequence].toString(),this.bytes_in_sequence=this.bytes_remaining=0,p=p+O-1,this._parser.write(this.string),this.emit("data",this.string);continue}if(this.bytes_remaining===0&&N>=128)if(N>=194&&N<=223&&(this.bytes_in_sequence=2),N>=224&&N<=239&&(this.bytes_in_sequence=3),N>=240&&N<=244&&(this.bytes_in_sequence=4),this.bytes_in_sequence+p>_.length){for(var W=0;W<=_.length-1-p;W++)this.temp_buffs[this.bytes_in_sequence][W]=_[p+W];return this.bytes_remaining=p+this.bytes_in_sequence-_.length,!0}else{this.string=_.slice(p,p+this.bytes_in_sequence).toString(),p=p+this.bytes_in_sequence-1,this._parser.write(this.string),this.emit("data",this.string);continue}for(var z=p;z<_.length&&!(_[z]>=128);z++);this.string=_.slice(p,z).toString(),this._parser.write(this.string),this.emit("data",this.string),p=z-1}},b.prototype.end=function(_){return _&&_.length&&this._parser.write(_.toString()),this._parser.end(),!0},b.prototype.on=function(_,p){var N=this;return!N._parser["on"+_]&&i.indexOf(_)!==-1&&(N._parser["on"+_]=function(){var O=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);O.splice(0,0,_),N.emit.apply(N,O)}),a.prototype.on.call(N,_,p)},b.prototype.destroy=function(){d(this._parser),this.emit("close")};function x(_,p,N){n.INFO&&console.log("-- emit",p,N),_[p]&&_[p](N)}function E(_,p,N){S(_),x(_,p,N)}function S(_,p){_.textNode=D(_.opt,_.textNode),_.textNode!==void 0&&x(_,p||"onvalue",_.textNode),_.textNode=void 0}function k(_){_.numberNode&&x(_,"onvalue",parseFloat(_.numberNode)),_.numberNode=""}function D(_,p){return p===void 0||(_.trim&&(p=p.trim()),_.normalize&&(p=p.replace(/\s+/g," "))),p}function R(_,p){return S(_),p+=`
Line: `+_.line+`
Column: `+_.column+`
Char: `+_.c,p=new Error(p),_.error=p,x(_,"onerror",p),_}function P(_){return(_.state!==o.VALUE||_.depth!==0)&&R(_,"Unexpected end"),S(_),_.c="",_.closed=!0,x(_,"onend"),g.call(_,_.opt),_}function B(_){return _===c.carriageReturn||_===c.lineFeed||_===c.space||_===c.tab}function C(_){var p=this;if(this.error)throw this.error;if(p.closed)return R(p,"Cannot write after close. Assign an onready handler.");if(_===null)return P(p);var N=0,O=_.charCodeAt(0),W=p.p;for(n.DEBUG&&console.log("write -> ["+_+"]");O&&(W=O,p.c=O=_.charCodeAt(N++),W!==O?p.p=W:W=p.p,!!O);)switch(n.DEBUG&&console.log(N,O,n.STATE[p.state]),p.position++,O===c.lineFeed?(p.line++,p.column=0):p.column++,p.state){case o.BEGIN:O===c.openBrace?p.state=o.OPEN_OBJECT:O===c.openBracket?p.state=o.OPEN_ARRAY:B(O)||R(p,"Non-whitespace before {[.");continue;case o.OPEN_KEY:case o.OPEN_OBJECT:if(B(O))continue;if(p.state===o.OPEN_KEY)p.stack.push(o.CLOSE_KEY);else if(O===c.closeBrace){x(p,"onopenobject"),this.depth++,x(p,"oncloseobject"),this.depth--,p.state=p.stack.pop()||o.VALUE;continue}else p.stack.push(o.CLOSE_OBJECT);O===c.doubleQuote?p.state=o.STRING:R(p,'Malformed object key should start with "');continue;case o.CLOSE_KEY:case o.CLOSE_OBJECT:if(B(O))continue;p.state,o.CLOSE_KEY,O===c.colon?(p.state===o.CLOSE_OBJECT?(p.stack.push(o.CLOSE_OBJECT),S(p,"onopenobject"),this.depth++):S(p,"onkey"),p.state=o.VALUE):O===c.closeBrace?(E(p,"oncloseobject"),this.depth--,p.state=p.stack.pop()||o.VALUE):O===c.comma?(p.state===o.CLOSE_OBJECT&&p.stack.push(o.CLOSE_OBJECT),S(p),p.state=o.OPEN_KEY):R(p,"Bad object");continue;case o.OPEN_ARRAY:case o.VALUE:if(B(O))continue;if(p.state===o.OPEN_ARRAY)if(x(p,"onopenarray"),this.depth++,p.state=o.VALUE,O===c.closeBracket){x(p,"onclosearray"),this.depth--,p.state=p.stack.pop()||o.VALUE;continue}else p.stack.push(o.CLOSE_ARRAY);O===c.doubleQuote?p.state=o.STRING:O===c.openBrace?p.state=o.OPEN_OBJECT:O===c.openBracket?p.state=o.OPEN_ARRAY:O===c.t?p.state=o.TRUE:O===c.f?p.state=o.FALSE:O===c.n?p.state=o.NULL:O===c.minus?p.numberNode+="-":c._0<=O&&O<=c._9?(p.numberNode+=String.fromCharCode(O),p.state=o.NUMBER_DIGIT):R(p,"Bad value");continue;case o.CLOSE_ARRAY:if(O===c.comma)p.stack.push(o.CLOSE_ARRAY),S(p,"onvalue"),p.state=o.VALUE;else if(O===c.closeBracket)E(p,"onclosearray"),this.depth--,p.state=p.stack.pop()||o.VALUE;else{if(B(O))continue;R(p,"Bad array")}continue;case o.STRING:p.textNode===void 0&&(p.textNode="");var z=N-1,ye=p.slashed,fe=p.unicodeI;e:for(;;){for(n.DEBUG&&console.log(N,O,n.STATE[p.state],ye);fe>0;)if(p.unicodeS+=String.fromCharCode(O),O=_.charCodeAt(N++),p.position++,fe===4?(p.textNode+=String.fromCharCode(parseInt(p.unicodeS,16)),fe=0,z=N-1):fe++,!O)break e;if(O===c.doubleQuote&&!ye){p.state=p.stack.pop()||o.VALUE,p.textNode+=_.substring(z,N-1),p.position+=N-1-z;break}if(O===c.backslash&&!ye&&(ye=!0,p.textNode+=_.substring(z,N-1),p.position+=N-1-z,O=_.charCodeAt(N++),p.position++,!O))break;if(ye){if(ye=!1,O===c.n?p.textNode+=`
`:O===c.r?p.textNode+="\r":O===c.t?p.textNode+="	":O===c.f?p.textNode+="\f":O===c.b?p.textNode+="\b":O===c.u?(fe=1,p.unicodeS=""):p.textNode+=String.fromCharCode(O),O=_.charCodeAt(N++),p.position++,z=N-1,O)continue;break}h.lastIndex=N;var he=h.exec(_);if(he===null){N=_.length+1,p.textNode+=_.substring(z,N-1),p.position+=N-1-z;break}if(N=he.index+1,O=_.charCodeAt(he.index),!O){p.textNode+=_.substring(z,N-1),p.position+=N-1-z;break}}p.slashed=ye,p.unicodeI=fe;continue;case o.TRUE:O===c.r?p.state=o.TRUE2:R(p,"Invalid true started with t"+O);continue;case o.TRUE2:O===c.u?p.state=o.TRUE3:R(p,"Invalid true started with tr"+O);continue;case o.TRUE3:O===c.e?(x(p,"onvalue",!0),p.state=p.stack.pop()||o.VALUE):R(p,"Invalid true started with tru"+O);continue;case o.FALSE:O===c.a?p.state=o.FALSE2:R(p,"Invalid false started with f"+O);continue;case o.FALSE2:O===c.l?p.state=o.FALSE3:R(p,"Invalid false started with fa"+O);continue;case o.FALSE3:O===c.s?p.state=o.FALSE4:R(p,"Invalid false started with fal"+O);continue;case o.FALSE4:O===c.e?(x(p,"onvalue",!1),p.state=p.stack.pop()||o.VALUE):R(p,"Invalid false started with fals"+O);continue;case o.NULL:O===c.u?p.state=o.NULL2:R(p,"Invalid null started with n"+O);continue;case o.NULL2:O===c.l?p.state=o.NULL3:R(p,"Invalid null started with nu"+O);continue;case o.NULL3:O===c.l?(x(p,"onvalue",null),p.state=p.stack.pop()||o.VALUE):R(p,"Invalid null started with nul"+O);continue;case o.NUMBER_DECIMAL_POINT:O===c.period?(p.numberNode+=".",p.state=o.NUMBER_DIGIT):R(p,"Leading zero not followed by .");continue;case o.NUMBER_DIGIT:c._0<=O&&O<=c._9?p.numberNode+=String.fromCharCode(O):O===c.period?(p.numberNode.indexOf(".")!==-1&&R(p,"Invalid number has two dots"),p.numberNode+="."):O===c.e||O===c.E?((p.numberNode.indexOf("e")!==-1||p.numberNode.indexOf("E")!==-1)&&R(p,"Invalid number has two exponential"),p.numberNode+="e"):O===c.plus||O===c.minus?(W===c.e||W===c.E||R(p,"Invalid symbol in number"),p.numberNode+=String.fromCharCode(O)):(k(p),N--,p.state=p.stack.pop()||o.VALUE);continue;default:R(p,"Unknown state: "+p.state)}return p.position>=p.bufferCheckPosition&&l(p),p}})(e)});function Qy(t){var e=0,n=eg(!0),r={pullAsync:function(s){return qn(this,void 0,void 0,function(){var i,o,a;return en(this,function(u){switch(u.label){case 0:return i=t.slice(e,e+s),e+=s,[4,wl(i,"text")];case 1:return o=u.sent(),a=n.write(o),r.result=a||{},[2,a]}})})},pullSync:function(s){var i=t.slice(e,e+s);e+=s;var o=El(i,"text"),a=n.write(o);return r.result=a||{},a},done:function(){return n.done()},eof:function(){return e>=t.size},result:{}};return r}function eg(t){var e=Xy.parser(),n=0,r,s=[],i,o,a=!1,u=!1;return e.onopenobject=function(c){var l={};l.incomplete=!0,r||(r=l),i&&(s.push([o,i,u]),t&&(u?i.push(l):i[o]=l)),i=l,o=c,u=!1,++n},e.onkey=function(c){return o=c},e.onvalue=function(c){return u?i.push(c):i[o]=c},e.oncloseobject=function(){var c;if(delete i.incomplete,o=null,--n===0)a=!0;else{var l=i;c=s.pop(),o=c[0],i=c[1],u=c[2],t||(u?i.push(l):i[o]=l)}},e.onopenarray=function(){var c=[];c.incomplete=!0,r||(r=c),i&&(s.push([o,i,u]),t&&(u?i.push(c):i[o]=c)),i=c,u=!0,o=null,++n},e.onclosearray=function(){var c;if(delete i.incomplete,o=null,--n===0)a=!0;else{var l=i;c=s.pop(),o=c[0],i=c[1],u=c[2],t||(u?i.push(l):i[o]=l)}},{write:function(c){return e.write(c),r},done:function(){return a}}}var Tl=1024;function tg(t,e){return qn(this,void 0,void 0,function(){var n,r,s,i;return en(this,function(o){switch(o.label){case 0:return e=e||{},n=e.chunkSizeBytes||Tl*1024,[4,Ol(t,n)];case 1:return r=o.sent(),s=r.result.data,i=new tt(s.databaseName),i.version(s.databaseVersion).stores(Gy(s)),[4,Ma(i,r,e)];case 2:return o.sent(),[2,i]}})})}function Ma(t,e,n){return qn(this,void 0,void 0,function(){function r(){return qn(this,void 0,void 0,function(){var v,b,x,E,S;return en(this,function(k){switch(k.label){case 0:v=function(D){var R,P,B,C,_,p,N,O,W,z,ye,fe;return en(this,function(he){switch(he.label){case 0:if(!D.rows)return[2,"break"];if(!D.rows.incomplete&&D.rows.length===0)return[2,"continue"];if(c&&tt.ignoreTransaction(function(){return c(l)}),R=D.tableName,P=t.table(R),B=u.tables.filter(function(I){return I.name===R})[0].schema,!P){if(n.acceptMissingTables)return[2,"continue"];throw new Error("Exported table ".concat(D.tableName," is missing in installed database"))}if(!n.acceptChangedPrimaryKey&&B.split(",")[0]!=P.schema.primKey.src)throw new Error("Primary key differs for table ".concat(D.tableName,". "));for(C=D.rows,_=[],p=0;p<C.length&&(N=C[p],!N.incomplete);p++)_.push(qt.revive(N));return O=n.filter,W=O?D.inbound?_.filter(function(I){return O(R,I)}):_.filter(function(I){var ce=I[0],Ct=I[1];return O(R,Ct,ce)}):_,z=D.inbound?[void 0,W]:[W.map(function(I){return I[0]}),_.map(function(I){return I[1]})],ye=z[0],fe=z[1],n.overwriteValues?[4,P.bulkPut(fe,ye)]:[3,2];case 1:return he.sent(),[3,4];case 2:return[4,P.bulkAdd(fe,ye)];case 3:he.sent(),he.label=4;case 4:return l.completedRows+=_.length,_.incomplete||(l.completedTables+=1),C.splice(0,_.length),[2]}})},b=0,x=u.data,k.label=1;case 1:return b<x.length?(E=x[b],[5,v(E)]):[3,4];case 2:if(S=k.sent(),S==="break")return[3,4];k.label=3;case 3:return b++,[3,1];case 4:for(;u.data.length>0&&u.data[0].rows&&!u.data[0].rows.incomplete;)u.data.splice(0,1);return!i.done()&&!i.eof()?a?(i.pullSync(s),[3,7]):[3,5]:[3,8];case 5:return[4,tt.waitFor(i.pullAsync(s))];case 6:k.sent(),k.label=7;case 7:return[3,9];case 8:return[3,10];case 9:return[3,0];case 10:return[2]}})})}var s,i,o,a,u,c,l,d,h,g;return en(this,function(v){switch(v.label){case 0:return n=n||{},s=n.chunkSizeBytes||Tl*1024,[4,Ol(e,s)];case 1:if(i=v.sent(),o=i.result,a="FileReaderSync"in self,u=o.data,!n.acceptNameDiff&&t.name!==u.databaseName)throw new Error("Name differs. Current database name is ".concat(t.name," but export is ").concat(u.databaseName));if(!n.acceptVersionDiff&&t.verno!==u.databaseVersion)throw new Error("Database version differs. Current database is in version ".concat(t.verno," but export is ").concat(u.databaseVersion));if(c=n.progressCallback,l={done:!1,completedRows:0,completedTables:0,totalRows:u.tables.reduce(function(b,x){return b+x.rowCount},0),totalTables:u.tables.length},c&&tt.ignoreTransaction(function(){return c(l)}),!n.clearTablesBeforeImport)return[3,5];d=0,h=t.tables,v.label=2;case 2:return d<h.length?(g=h[d],[4,g.clear()]):[3,5];case 3:v.sent(),v.label=4;case 4:return d++,[3,2];case 5:return n.noTransaction?[4,r()]:[3,7];case 6:return v.sent(),[3,9];case 7:return[4,t.transaction("rw",t.tables,r)];case 8:v.sent(),v.label=9;case 9:return l.done=!0,c&&tt.ignoreTransaction(function(){return c(l)}),[2]}})})}function Ol(t,e){return qn(this,void 0,void 0,function(){var n,r;return en(this,function(s){switch(s.label){case 0:n="slice"in t?Qy(t):t,s.label=1;case 1:return n.eof()?[3,3]:[4,n.pullAsync(e)];case 2:return s.sent(),n.result.data&&n.result.data.data?[3,3]:[3,1];case 3:if(r=n.result,!r||r.formatName!="dexie")throw new Error("Given file is not a dexie export");if(r.formatVersion>Wy)throw new Error("Format version ".concat(r.formatVersion," not supported"));if(!r.data)throw new Error("No data in export file");if(!r.data.databaseName)throw new Error("Missing databaseName in export file");if(!r.data.databaseVersion)throw new Error("Missing databaseVersion in export file");if(!r.data.tables)throw new Error("Missing tables in export file");return[2,n]}})})}tt.prototype.export=function(t){return xl(this,t)};tt.prototype.import=function(t,e){return Ma(this,t,e)};tt.import=function(t,e){return tg(t,e)};const ng=()=>{switch("game-maker"){case"game-maker":return"_savedata";case"godot":return"userfs";case"unity":return"idbfs";default:return(t=>"")()}},Nl=ng(),rg=21;class sg extends tt{constructor(){super(`/${Nl}`);Ua(this,"FILE_DATA");this.version(rg).stores({FILE_DATA:", timestamp"})}}const It=new sg,ig=async(t,e)=>{let n=await(It==null?void 0:It.FILE_DATA.where(":id").startsWith(t).primaryKeys())??[];return e&&(n=n.filter(s=>e.test(s))),await Promise.all(n==null?void 0:n.map(async s=>{const i=await(It==null?void 0:It.FILE_DATA.get(s));return{key:s,value:i}}))},og=async(t,e)=>await(It==null?void 0:It.FILE_DATA.put(e,t)),ag=async t=>await Promise.all(t.map(({key:e,value:n})=>n&&og(e,n))),cg=async(t,e)=>It?await xl(It,{filter:(r,s,i)=>typeof i=="string"&&i.startsWith(t)&&(e?e.test(i):!0)}):void 0,ug=async(t,e)=>It?(await It.FILE_DATA.where(":id").startsWith(`/${Nl}/${e}`).delete(),await Ma(It,t,{overwriteValues:!0})):Promise.reject(new Error("Database is not initialized."));function lg(t,e,n){let r;et(t,bt,i=>n(0,r=i));const s=async i=>{const o=async(a,u)=>{const c=un();if(!(!c||i.origin!==c)&&i.data.eventId===a)try{const l=await u();window.parent.postMessage({eventId:`${a}_RESPONSE`,...l},c)}catch(l){console.error(l),window.parent.postMessage({eventId:`${a}_REJECT`},c)}};o("DB_PUT_MANY",async()=>await ag(i.data.entries)),o("DB_GET_FILES",async()=>({entries:await ig(i.data.keyStart,i.data.keyRegex)})),o("DB_SET_READY",()=>Fu.set(!0)),o("DB_GET_BLOB",async()=>({blob:await cg(i.data.keyStart,i.data.keyRegex)})),o("DB_IMPORT",async()=>await ug(i.data.blob,r.gameId))};return window.addEventListener("message",s),ln(()=>{window.removeEventListener("message",s)}),[]}class fg extends lt{constructor(e){super(),ut(this,e,lg,null,rt,{})}}function dg(t){const e=t-1;return e*e*e+1}function hg(t,{delay:e=0,duration:n=400,easing:r=Eu}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*s}`}}function $c(t){let e,n,r,s,i,o,a,u,c,l,d,h,g,v=t[2]&&Bc(t);return{c(){e=ze("div"),n=ze("div"),r=Qe(),s=ze("div"),i=Qe(),o=ze("div"),a=ze("span"),u=cr(t[4]),c=Qe(),l=ze("div"),d=Qe(),v&&v.c(),U(n,"class","absolute inset-0 z-0 bg-contain bg-center bg-no-repeat grayscale"),At(n,"background-image","url("+t[1].coverImage+")"),U(s,"class","absolute inset-0 z-0 bg-contain bg-center bg-no-repeat transition-[clip-path]"),At(s,"clip-path","inset(0 "+100*(1-t[0])+"% 0 0)"),At(s,"background-image","url("+t[1].coverImage+")"),U(a,"class","text-xs font-normal tracking-[0.3px] text-neutral-100"),U(l,"class","lower absolute bottom-0 left-0 h-[2px] svelte-1o38ugv"),At(l,"width",t[0]*100+"%"),U(o,"class","absolute bottom-0 right-0 flex h-[24px] w-full items-center bg-neutral-8/40 pl-1"),U(e,"class","absolute inset-0 m-auto aspect-[16/9]")},m(b,x){Ge(b,e,x),me(e,n),me(e,r),me(e,s),me(e,i),me(e,o),me(o,a),me(a,u),me(o,c),me(o,l),me(e,d),v&&v.m(e,null),g=!0},p(b,x){t=b,(!g||x&2)&&At(n,"background-image","url("+t[1].coverImage+")"),(!g||x&1)&&At(s,"clip-path","inset(0 "+100*(1-t[0])+"% 0 0)"),(!g||x&2)&&At(s,"background-image","url("+t[1].coverImage+")"),(!g||x&16)&&Ou(u,t[4]),(!g||x&1)&&At(l,"width",t[0]*100+"%"),t[2]?v?v.p(t,x):(v=Bc(t),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i(b){g||(h&&h.end(1),g=!0)},o(b){h=tp(e,hg,{duration:1e3,easing:dg}),g=!1},d(b){b&&Pe(e),v&&v.d(),b&&h&&h.end()}}}function Bc(t){let e;return{c(){e=ze("div"),U(e,"class","absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"),At(e,"background-image","url("+t[1].coverImage+")")},m(n,r){Ge(n,e,r)},p(n,r){r&2&&At(e,"background-image","url("+n[1].coverImage+")")},d(n){n&&Pe(e)}}}function pg(t){let e,n,r=t[3]&&$c(t);return{c(){r&&r.c(),e=gi()},m(s,i){r&&r.m(s,i),Ge(s,e,i),n=!0},p(s,[i]){s[3]?r?(r.p(s,i),i&8&&Re(r,1)):(r=$c(s),r.c(),Re(r,1),r.m(e.parentNode,e)):r&&(ba(),Ue(r,1,1,()=>{r=null}),wa())},i(s){n||(Re(r),n=!0)},o(s){Ue(r),n=!1},d(s){r&&r.d(s),s&&Pe(e)}}}function mg(t,e,n){let r,s,i,o,a;et(t,ur,h=>n(5,s=h)),et(t,Um,h=>n(0,i=h)),et(t,qu,h=>n(6,o=h)),et(t,bt,h=>n(1,a=h));const u=un(),c=setInterval(()=>{},1e3);let l=!0;setTimeout(()=>{n(2,l=i>.8)},700);let d=!0;return ln(()=>{clearInterval(c)}),t.$$.update=()=>{t.$$.dirty&67&&u&&o!=="on-demand"&&window.parent.postMessage({event_id:"LOAD_PROGRESS",gameId:a.gameId,loadingStrategy:o,progress:i},u),t.$$.dirty&1&&n(4,r=(()=>{switch(!0){case i<1:return"Downloading data";default:return"Launching game!"}})()),t.$$.dirty&32&&s&&(clearInterval(c),setTimeout(()=>{n(3,d=!1)},100))},[i,a,l,d,r,s,o]}class yg extends lt{constructor(e){super(),ut(this,e,mg,pg,rt,{})}}const gg="modulepreload",_g=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},Lc={},vg=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=_g(i,r),i in Lc)return;Lc[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const d=s[l];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":gg,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function bg(t){const e=[];return Yn(async()=>{const{default:n}=await vg(()=>import("./tick-worker-9d439ca8-edit.js"),[],import.meta.url),r=new n;e.push(()=>{r.terminate()});const s=o=>{var a;switch(o.data){case"tick":(a=window.GM_tick)==null||a.call(window,performance.now());break;default:o.data}};r.addEventListener("message",s),e.push(()=>r.removeEventListener("message",s));const i=o=>{var a;if((a=window==null?void 0:window.GM_is_multiplayer)!=null&&a.call(window))switch(document.visibilityState){case"hidden":r.postMessage("run");break;case"visible":r.postMessage("stop");break}};document.addEventListener("visibilitychange",i),e.push(()=>document.removeEventListener("visibilitychange",i))}),ln(()=>{e.slice().reverse().forEach(n=>n())}),[]}class wg extends lt{constructor(e){super(),ut(this,e,bg,null,rt,{})}}function Eg(t){let e,n,r,s,i;return{c(){e=ze("button"),n=cr("Quit"),U(e,"class","select-none rounded-md border border-solid border-primary-100 bg-primary-100/25 px-6 py-3 hover:brightness-[1.15] active:brightness-[0.85]"),e.hidden=r=!t[1]},m(o,a){Ge(o,e,a),me(e,n),s||(i=Cn(e,"click",Yu.quit),s=!0)},p(o,a){a&2&&r!==(r=!o[1])&&(e.hidden=r)},d(o){o&&Pe(e),s=!1,i()}}}function Sg(t){let e,n,r,s,i,o,a,u=Eg(t);return{c(){e=ze("div"),n=ze("div"),r=ze("div"),s=ze("button"),s.textContent="Resume",i=Qe(),u&&u.c(),U(s,"class","rounded-md border border-solid border-primary-100 bg-primary-100 px-6 py-3 font-medium hover:brightness-[1.15] active:brightness-[0.85]"),U(r,"class","flex flex-col gap-3 rounded bg-gradient-to-b from-neutral-20 from-15% via-neutral-20/80 via-55% to-neutral-20 to-90% px-6 py-10 [clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)]"),U(n,"class","rounded bg-gradient-to-br from-primary-100 to-transparent to-40% p-px [clip-path:polygon(10.5px_0,100%_0,100%_100%,0_100%,0_10.5px)]"),U(e,"class","absolute inset-0 flex flex-col justify-center p-14 font-medium text-white grayscale-0 backdrop-blur-sm backdrop-grayscale transition-all duration-500"),st(e,"invisible",!t[0]),st(e,"visible",t[0]),st(e,"opacity-0",!t[0]),st(e,"opacity-100",t[0])},m(c,l){Ge(c,e,l),me(e,n),me(n,r),me(r,s),me(r,i),u&&u.m(r,null),o||(a=Cn(s,"click",t[2]),o=!0)},p(c,[l]){u.p(c,l),l&1&&st(e,"invisible",!c[0]),l&1&&st(e,"visible",c[0]),l&1&&st(e,"opacity-0",!c[0]),l&1&&st(e,"opacity-100",c[0])},i:Ne,o:Ne,d(c){c&&Pe(e),u&&u.d(),o=!1,a()}}}function kg(t,e,n){let r,s;return et(t,Ri,o=>n(0,r=o)),et(t,Yu,o=>n(1,s=o)),[r,s,()=>{Ri.resume(),Lo()}]}class xg extends lt{constructor(e){super(),ut(this,e,kg,Sg,rt,{})}}const _o=({playState:t,playId:e})=>{const n=un();!n||!e||window.parent.postMessage({event_id:"PLAY_EVENT",playId:e,playState:t},n)},Tg=function*(){yield[0,"started"];let t=1;for(;t<10;)t++,yield[1e3,"playing-1s"];for(yield[1e3,"playing-10s"],t=2;t<6;)t++,yield[10*1e3,"playing-10s"];for(yield[10*1e3,"playing-1m"],t=2;t<60;)t++,yield[60*1e3,"playing-1m"];for(yield[60*1e3,"playing-1h"];;)yield[60*60*1e3,"playing-1h"]};function Og(t,e,n){let r;et(t,bt,a=>n(2,r=a));let{gameHasRendered:s}=e,i=[],o=!1;return Yn(()=>{const a=u=>{_o({playId:r.gamePlayId,playState:"error"})};window.addEventListener("error",a),i.push(()=>window.removeEventListener("error",a))}),ln(()=>{i.slice().reverse().forEach(a=>a())}),t.$$set=a=>{"gameHasRendered"in a&&n(0,s=a.gameHasRendered)},t.$$.update=()=>{if(t.$$.dirty&7&&!o&&s&&r.gamePlayId){n(1,o=!0);const a=Tg();let u;const c=()=>{const[d,h]=a.next().value;u=setTimeout(g=>{_o({playId:r.gamePlayId,playState:g}),c()},d,h)};c(),i.push(()=>clearTimeout(u));const l=()=>{_o({playId:r.gamePlayId,playState:"ended"})};window.addEventListener("pagehide",l),i.push(()=>window.removeEventListener("pagehide",l))}},[s,o,r]}class Ng extends lt{constructor(e){super(),ut(this,e,Og,null,rt,{gameHasRendered:0})}}function Ag(t){let e,n;return e=new Ng({props:{gameHasRendered:t[0]}}),{c(){pt(e.$$.fragment)},m(r,s){it(e,r,s),n=!0},p(r,[s]){const i={};s&1&&(i.gameHasRendered=r[0]),e.$set(i)},i(r){n||(Re(e.$$.fragment,r),n=!0)},o(r){Ue(e.$$.fragment,r),n=!1},d(r){ot(e,r)}}}function Rg(t,e,n){let r;return et(t,ur,s=>n(0,r=s)),[r]}class Ig extends lt{constructor(e){super(),ut(this,e,Rg,Ag,rt,{})}}const Mc=async({playId:t,sessionId:e,status:n})=>{t&&await fetch(`https://api.gx.games/gg/v2/game-plays/${t}`,{body:JSON.stringify({sessionId:e,status:n}),credentials:"include",headers:{"Content-type":"application/json; charset=UTF-8"},keepalive:!0,method:"PATCH"})},Pg=function*(){yield[0,"LOADED"],yield[0,"PLAYING"];for(const t of[1,2,5,10,20,30])yield[t*60*1e3,"PLAYING"];for(let t=1;;t+=1)yield[t*60*60*1e3,"PLAYING"]};function Cg(t,e,n){let r;et(t,bt,o=>n(2,r=o));let{gameHasRendered:s}=e,i=[];return ln(()=>{i.slice().reverse().forEach(o=>o())}),t.$$set=o=>{"gameHasRendered"in o&&n(0,s=o.gameHasRendered)},t.$$.update=()=>{if(t.$$.dirty&7){if(i.slice().reverse().forEach(o=>o()),n(1,i=[]),s&&r.gamePlayId){const o=Pg();let a;const u=()=>{const[l,d]=o.next().value;a=setTimeout(h=>{Mc({playId:r.gamePlayId,sessionId:r.feSessionId,status:h}),u()},l,d)};u(),i.push(()=>clearTimeout(a));const c=()=>{Mc({playId:r.gamePlayId,sessionId:r.feSessionId,status:"ENDED"})};window.addEventListener("pagehide",c),i.push(()=>window.removeEventListener("pagehide",c))}if(r.feSessionId){const o=a=>{if(a.origin!==un()||a.data.eventId!=="UPDATE_FE_SESSION_ID"||r.feSessionId===a.data.feSessionId)return;const u=new URL(location.href);u.searchParams.set("feSessionId",a.data.feSessionId),history.replaceState({},"",u),window.dispatchEvent(new CustomEvent("popstate"))};window.addEventListener("message",o),i.push(()=>window.removeEventListener("message",o))}}},[s,i,r]}class jg extends lt{constructor(e){super(),ut(this,e,Cg,null,rt,{gameHasRendered:0})}}function Dg(t){let e,n;return e=new jg({props:{gameHasRendered:t[0]}}),{c(){pt(e.$$.fragment)},m(r,s){it(e,r,s),n=!0},p(r,[s]){const i={};s&1&&(i.gameHasRendered=r[0]),e.$set(i)},i(r){n||(Re(e.$$.fragment,r),n=!0)},o(r){Ue(e.$$.fragment,r),n=!1},d(r){ot(e,r)}}}function $g(t,e,n){let r;return et(t,ur,s=>n(0,r=s)),[r]}class Bg extends lt{constructor(e){super(),ut(this,e,$g,Dg,rt,{})}}const Lg=Ir.object({data:Ir.object({title:Ir.string()})}),Al=Ht(bt,({gameId:t,trackId:e},n)=>{fetch(`https://api.gx.games/gg/games/${t}?trackId=${e}`).then(r=>r.json()).then(r=>Lg.parseAsync(r)).then(n).catch(r=>console.error(`Failed fetching game info: ${r}`))},null);Ht(Al,t=>(t==null?void 0:t.data.title)??null);function Uc(t){return document.title=t[0],{c:Ne,m:Ne,d:Ne}}function Mg(t){let e,n;return e=new xg({}),{c(){pt(e.$$.fragment)},m(r,s){it(e,r,s),n=!0},i(r){n||(Re(e.$$.fragment,r),n=!0)},o(r){Ue(e.$$.fragment,r),n=!1},d(r){ot(e,r)}}}function Ug(t){let e,n;return e=new ym({}),{c(){pt(e.$$.fragment)},m(r,s){it(e,r,s),n=!0},i(r){n||(Re(e.$$.fragment,r),n=!0)},o(r){Ue(e.$$.fragment,r),n=!1},d(r){ot(e,r)}}}function Fg(t){let e,n;return e=new fg({}),{c(){pt(e.$$.fragment)},m(r,s){it(e,r,s),n=!0},i(r){n||(Re(e.$$.fragment,r),n=!0)},o(r){Ue(e.$$.fragment,r),n=!1},d(r){ot(e,r)}}}function Kg(t){let e,n;return e=new Hm({}),{c(){pt(e.$$.fragment)},m(r,s){it(e,r,s),n=!0},i(r){n||(Re(e.$$.fragment,r),n=!0)},o(r){Ue(e.$$.fragment,r),n=!1},d(r){ot(e,r)}}}function qg(t){let e,n,r,s,i,o,a,u,c=is(),l,d=!is(),h,g,v,b,x,E,S,k,D,R,P,B,C,_,p=is()||ap()||cp()||up(),N,O,W=t[0]&&Uc(t);r=new Gm({}),i=new Nm({}),a=new yg({});let z=c&&Mg(),ye=d&&Ug();g=new wg({}),b=new Ig({}),E=new Bg({}),k=new Im({}),R=new xm({}),B=new bm({});let fe=Fg(),he=p&&Kg();return{c(){W&&W.c(),e=gi(),n=Qe(),pt(r.$$.fragment),s=Qe(),pt(i.$$.fragment),o=Qe(),pt(a.$$.fragment),u=Qe(),z&&z.c(),l=Qe(),ye&&ye.c(),h=Qe(),pt(g.$$.fragment),v=Qe(),pt(b.$$.fragment),x=Qe(),pt(E.$$.fragment),S=Qe(),pt(k.$$.fragment),D=Qe(),pt(R.$$.fragment),P=Qe(),pt(B.$$.fragment),C=Qe(),fe&&fe.c(),_=Qe(),he&&he.c(),N=gi()},m(I,ce){W&&W.m(document.head,null),me(document.head,e),Ge(I,n,ce),it(r,I,ce),Ge(I,s,ce),it(i,I,ce),Ge(I,o,ce),it(a,I,ce),Ge(I,u,ce),z&&z.m(I,ce),Ge(I,l,ce),ye&&ye.m(I,ce),Ge(I,h,ce),it(g,I,ce),Ge(I,v,ce),it(b,I,ce),Ge(I,x,ce),it(E,I,ce),Ge(I,S,ce),it(k,I,ce),Ge(I,D,ce),it(R,I,ce),Ge(I,P,ce),it(B,I,ce),Ge(I,C,ce),fe&&fe.m(I,ce),Ge(I,_,ce),he&&he.m(I,ce),Ge(I,N,ce),O=!0},p(I,[ce]){I[0]?W||(W=Uc(I),W.c(),W.m(e.parentNode,e)):W&&(W.d(1),W=null)},i(I){O||(Re(r.$$.fragment,I),Re(i.$$.fragment,I),Re(a.$$.fragment,I),Re(z),Re(ye),Re(g.$$.fragment,I),Re(b.$$.fragment,I),Re(E.$$.fragment,I),Re(k.$$.fragment,I),Re(R.$$.fragment,I),Re(B.$$.fragment,I),Re(fe),Re(he),O=!0)},o(I){Ue(r.$$.fragment,I),Ue(i.$$.fragment,I),Ue(a.$$.fragment,I),Ue(z),Ue(ye),Ue(g.$$.fragment,I),Ue(b.$$.fragment,I),Ue(E.$$.fragment,I),Ue(k.$$.fragment,I),Ue(R.$$.fragment,I),Ue(B.$$.fragment,I),Ue(fe),Ue(he),O=!1},d(I){W&&W.d(I),Pe(e),I&&Pe(n),ot(r,I),I&&Pe(s),ot(i,I),I&&Pe(o),ot(a,I),I&&Pe(u),z&&z.d(I),I&&Pe(l),ye&&ye.d(I),I&&Pe(h),ot(g,I),I&&Pe(v),ot(b,I),I&&Pe(x),ot(E,I),I&&Pe(S),ot(k,I),I&&Pe(D),ot(R,I),I&&Pe(P),ot(B,I),I&&Pe(C),fe&&fe.d(I),I&&Pe(_),he&&he.d(I),I&&Pe(N)}}}function Gg(t,e,n){let r,s;return et(t,Al,i=>n(1,s=i)),t.$$.update=()=>{var i,o,a,u;t.$$.dirty&2&&n(0,r=(i=s==null?void 0:s.data)==null?void 0:i.title),t.$$.dirty&1&&r&&((u=(a=(o=window.oprt)==null?void 0:o.gameFiles)==null?void 0:a.setDisplayName)==null||u.call(a,r))},[r,s]}class Yg extends lt{constructor(e){super(),ut(this,e,Gg,qg,rt,{})}}Rh({dsn:"https://6f66460a4f1342758c183e89efe23b22@sentry-relay.opera-api.com/512",environment:"canary",release:"1.14.0 (dc87069257) canary",tracesSampleRate:.1});{const t=[`
 ██████╗ ██╗  ██╗    ██████╗  █████╗ ███╗   ███╗███████╗███████╗
██╔════╝ ╚██╗██╔╝   ██╔════╝ ██╔══██╗████╗ ████║██╔════╝██╔════╝
██║  ███╗ ╚███╔╝    ██║  ███╗███████║██╔████╔██║█████╗  ███████╗
██║   ██║ ██╔██╗    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║
╚██████╔╝██╔╝ ██╗██╗╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗███████║
 ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝
`,"=== Game Wrapper ===","","Version   : 1.14.0 (dc87069257) canary",`Timestamp : ${new Date("2024-10-22T13:09:36.169Z")}`,"Engine    : game-maker",""],e=Math.max(...t.flatMap(n=>n.split(`
`).map(r=>r.length)));console.log(["-".repeat(e),...t,"-".repeat(e)].join(`
`))}sp(navigator)?op():ip();new Yg({target:document.body});
