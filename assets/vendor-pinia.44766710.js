import{bv as t,bw as e,bx as n,by as s,bz as o,bA as c,bB as a,bC as r,bD as i,bE as u,bF as f,bG as p,bH as l,bI as h,bJ as b,bK as d}from"./vendor.a6e39469.js";
/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let y;const v=t=>y=t,_=Symbol();function $(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,O;function g(){const o=t(!0),c=o.run((()=>e({})));let a=[],r=[];const i=n({install(t){v(i),i._a=t,t.provide(_,i),t.config.globalProperties.$pinia=i,r.forEach((t=>a.push(t))),r=[]},use(t){return this._a||s?a.push(t):r.push(t),this},_p:a,_a:null,_e:o,_s:new Map,state:c});return i}(O=j||(j={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const m=()=>{};function E(t,e,n,s=m){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&l()&&h(o),o}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}function S(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];$(o)&&$(s)&&t.hasOwnProperty(n)&&!a(s)&&!r(s)?t[n]=S(o,s):t[n]=s}return t}const w=Symbol();const{assign:I}=Object;function x(s,o,i={},u,l,h){let d;const y=I({actions:{}},i),_={deep:!0};let O,g,x,A=n([]),F=n([]);const M=u.state.value[s];let J;function k(t){let e;O=g=!1,"function"==typeof t?(t(u.state.value[s]),e={type:j.patchFunction,storeId:s,events:x}):(S(u.state.value[s],t),e={type:j.patchObject,payload:t,storeId:s,events:x});const n=J=Symbol();b().then((()=>{J===n&&(O=!0)})),g=!0,P(A,e,u.state.value[s])}h||M||(u.state.value[s]={}),e({});const z=m;function B(t,e){return function(){v(u);const n=Array.from(arguments),o=[],c=[];function a(t){o.push(t)}function r(t){c.push(t)}let i;P(F,{args:n,name:t,store:D,after:a,onError:r});try{i=e.apply(this&&this.$id===s?this:D,n)}catch(f){throw P(c,f),f}return i instanceof Promise?i.then((t=>(P(o,t),t))).catch((t=>(P(c,t),Promise.reject(t)))):(P(o,i),i)}}const C={_p:u,$id:s,$onAction:E.bind(null,F),$patch:k,$reset:z,$subscribe(t,e={}){const n=E(A,t,e.detached,(()=>o())),o=d.run((()=>f((()=>u.state.value[s]),(n=>{("sync"===e.flush?g:O)&&t({storeId:s,type:j.direct,events:x},n)}),I({},_,e))));return n},$dispose:function(){d.stop(),A=[],F=[],u._s.delete(s)}},D=p(I({},C));u._s.set(s,D);const G=u._e.run((()=>(d=t(),d.run((()=>o())))));for(const t in G){const e=G[t];if(a(e)&&(!a(K=e)||!K.effect)||r(e))h||(!M||$(H=e)&&H.hasOwnProperty(w)||(a(e)?e.value=M[t]:S(e,M[t])),u.state.value[s][t]=e);else if("function"==typeof e){const n=B(t,e);G[t]=n,y.actions[t]=e}}var H,K;return I(D,G),I(c(D),G),Object.defineProperty(D,"$state",{get:()=>u.state.value[s],set:t=>{k((e=>{I(e,t)}))}}),u._p.forEach((t=>{I(D,d.run((()=>t({store:D,app:u._a,pinia:u,options:y}))))})),M&&h&&i.hydrate&&i.hydrate(D.$state,M),O=!0,g=!0,D}function A(t,e,s){let c,a;const r="function"==typeof e;function i(t,s){const i=l();(t=t||i&&u(_))&&v(t),(t=y)._s.has(c)||(r?x(c,e,a,t):function(t,e,s,c){const{state:a,actions:r,getters:i}=e,u=s.state.value[t];let f;f=x(t,(function(){u||(s.state.value[t]=a?a():{});const e=o(s.state.value[t]);return I(e,r,Object.keys(i||{}).reduce(((e,o)=>(e[o]=n(d((()=>{v(s);const e=s._s.get(t);return i[o].call(e,e)}))),e)),{}))}),e,s,0,!0),f.$reset=function(){const t=a?a():{};this.$patch((e=>{I(e,t)}))}}(c,a,t));return t._s.get(c)}return"string"==typeof t?(c=t,a=r?s:e):(a=t,c=t.id),i.$id=c,i}function F(t){if(s)return o(t);{t=c(t);const e={};for(const n in t){const s=t[n];(a(s)||r(s))&&(e[n]=i(t,n))}return e}}export{g as c,A as d,F as s};
