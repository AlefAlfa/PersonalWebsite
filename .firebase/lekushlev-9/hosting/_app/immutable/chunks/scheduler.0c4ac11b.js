function q(){}function M(t,e){for(const n in e)t[n]=e[n];return t}function R(t,e,n,i,r){t.__svelte_meta={loc:{file:e,line:n,column:i,char:r}}}function P(t){return t()}function U(){return Object.create(null)}function B(t){t.forEach(P)}function V(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function Y(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function Z(t){return Object.keys(t).length===0}function $(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function L(t,...e){if(t==null){for(const i of e)i(void 0);return q}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function tt(t,e,n){t.$$.on_destroy.push(L(e,n))}function et(t,e,n,i){if(t){const r=N(t,e,n,i);return t[0](r)}}function N(t,e,n,i){return t[1]&&i?M(n.ctx.slice(),t[1](i(e))):n.ctx}function nt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let a=0;a<c;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function it(t,e,n,i,r,s){if(r){const c=N(e,n,i,s);t.p(c,r)}}function rt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let p=!1;function ct(){p=!0}function lt(){p=!1}function O(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const o=e[u];o.claim_order!==void 0&&l.push(o)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,o=(r>0&&e[n[r]].claim_order<=u?r+1:O(1,r,C=>e[n[C]].claim_order,u))-1;i[l]=n[o]+1;const w=o+1;n[w]=l,r=Math.max(w,r)}const s=[],c=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);a>=l;a--)c.push(e[a]);a--}for(;a>=0;a--)c.push(e[a]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const o=u<s.length?s[u]:null;t.insertBefore(c[l],o)}}function D(t,e){if(p){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function at(t,e,n){p&&!n?D(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function H(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function ot(){return v(" ")}function ft(){return v("")}function _t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ht(t){return t.dataset.svelteH}function mt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,e,n,i,r=!1){F(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const a=t[c];if(e(a)){const l=n(a);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),a}}for(let c=t.claim_info.last_index-1;c>=0;c--){const a=t[c];if(e(a)){const l=n(a);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function j(t,e,n,i){return A(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const a=r.attributes[c];n[a.name]||s.push(a.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function pt(t,e,n){return j(t,e,n,H)}function bt(t,e,n){return j(t,e,n,z)}function I(t,e){return A(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function yt(t){return I(t," ")}function gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function W(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}let m;function y(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}function xt(t){b().$$.on_mount.push(t)}function vt(t){b().$$.after_update.push(t)}function wt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=W(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Et(t,e){return b().$$.context.set(t,e),e}function kt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],E=[];let _=[];const k=[],S=Promise.resolve();let x=!1;function G(){x||(x=!0,S.then(K))}function Nt(){return G(),S}function J(t){_.push(t)}const g=new Set;let f=0;function K(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),Q(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;k.length;)k.pop()();x=!1,g.clear(),y(t)}function Q(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function At(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{J as A,Y as B,wt as C,B as D,ut as E,kt as F,L as G,V as H,U as I,st as J,K,m as L,y as M,Z as N,P as O,At as P,d as Q,G as R,ct as S,lt as T,W as U,D as V,at as W,dt as X,_t as Y,vt as a,Et as b,ot as c,yt as d,ft as e,E as f,H as g,pt as h,mt as i,gt as j,R as k,v as l,I as m,et as n,xt as o,rt as p,nt as q,tt as r,X as s,Nt as t,it as u,$ as v,q as w,ht as x,z as y,bt as z};
