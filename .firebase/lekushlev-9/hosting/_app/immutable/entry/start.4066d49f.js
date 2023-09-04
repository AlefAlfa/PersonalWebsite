import{o as Fe,t as we}from"../chunks/scheduler.0c4ac11b.js";import{S as Je,a as Ke,I as q,g as Me,f as He,b as ye,c as le,s as ee,i as _e,d as H,e as B,P as Ve,h as et}from"../chunks/singletons.991bb33f.js";function tt(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function nt(t){return t.split("%25").map(decodeURI).join("%25")}function at(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const rt=["href","pathname","search","searchParams","toString","toJSON"];function ot(t,r){const o=new URL(t);for(const s of rt)Object.defineProperty(o,s,{get(){return r(),t[s]},enumerable:!0,configurable:!0});return it(o),o}function it(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const st="/__data.json";function ct(t){return t.replace(/\/$/,"")+st}function lt(...t){let r=5381;for(const o of t)if(typeof o=="string"){let s=o.length;for(;s;)r=r*33^o.charCodeAt(--s)}else if(ArrayBuffer.isView(o)){const s=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);let d=s.length;for(;d;)r=r*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}let Se=0;const fe=window.fetch;function ft(){Se+=1}function ut(){Se-=1}{let t=!1;(async()=>{t=new Error().stack.includes("check_stack_trace")})(),window.fetch=(o,s)=>{const d=o instanceof Request?o.url:o.toString(),f=new Error().stack.split(`
`),E=f.findIndex(h=>h.includes("load@")||h.includes("at load")),l=f.slice(0,E+2).join(`
`);return(t?l.includes("src/runtime/client/client.js"):Se)&&console.warn(`Loading ${d} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(o instanceof Request?o.method:(s==null?void 0:s.method)||"GET")!=="GET"&&ne.delete(Re(o)),fe(o,s)}}const ne=new Map;function dt(t,r){const o=Re(t,r),s=document.querySelector(o);if(s!=null&&s.textContent){const{body:d,...f}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&ne.set(o,{body:d,init:f,ttl:1e3*Number(E)}),Promise.resolve(new Response(d,f))}return fe(t,r)}function pt(t,r,o){if(ne.size>0){const s=Re(t,o),d=ne.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(o==null?void 0:o.cache))return new Response(d.body,d.init);ne.delete(s)}}return fe(r,o)}function Re(t,r){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r!=null&&r.headers||r!=null&&r.body){const d=[];r.headers&&d.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&d.push(r.body),s+=`[data-hash="${lt(...d)}"]`}return s}const ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${wt(t).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return r.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return r.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return ve(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ve(String.fromCharCode(...w.slice(2).split("-").map(O=>parseInt(O,16))));const h=ht.exec(w);if(!h)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,x,S,j]=h;return r.push({name:S,matcher:j,optional:!!C,rest:!!x,chained:x?y===1&&E[0]==="":!1}),x?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ve(w)}).join("")}).join("")}/?$`),params:r}}function mt(t){return!/^\([^)]+\)$/.test(t)}function wt(t){return t.slice(1).split("/").filter(mt)}function yt(t,r,o){const s={},d=t.slice(1);let f=0;for(let E=0;E<r.length;E+=1){const l=r[E];let w=d[E-f];if(l.chained&&l.rest&&f&&(w=d.slice(E-f,E+1).filter(y=>y).join("/"),f=0),w===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||o[l.matcher](w)){s[l.name]=w;const y=r[E+1],h=d[E+1];y&&!y.rest&&y.optional&&h&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return s}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function _t({nodes:t,server_loads:r,dictionary:o,matchers:s}){const d=new Set(r);return Object.entries(o).map(([l,[w,y,h]])=>{const{pattern:C,params:x}=gt(l),S={id:l,exec:j=>{const O=C.exec(j);if(O)return yt(O,x,s)},errors:[1,...h||[]].map(j=>t[j]),layouts:[0,...y||[]].map(E),leaf:f(w)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function f(l){const w=l<0;return w&&(l=~l),[w,t[l]]}function E(l){return l===void 0?l:[d.has(l),t[l]]}}function We(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Ge(t,r){const o=JSON.stringify(r);try{sessionStorage[t]=o}catch{}}const vt=-1,bt=-2,Et=-3,kt=-4,St=-5,Rt=-6;function At(t,r){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const o=t,s=Array(o.length);function d(f,E=!1){if(f===vt)return;if(f===Et)return NaN;if(f===kt)return 1/0;if(f===St)return-1/0;if(f===Rt)return-0;if(E)throw new Error("Invalid input");if(f in s)return s[f];const l=o[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],y=r==null?void 0:r[w];if(y)return s[f]=y(d(l[1]));switch(w){case"Date":s[f]=new Date(l[1]);break;case"Set":const h=new Set;s[f]=h;for(let S=1;S<l.length;S+=1)h.add(d(l[S]));break;case"Map":const C=new Map;s[f]=C;for(let S=1;S<l.length;S+=2)C.set(d(l[S]),d(l[S+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);s[f]=x;for(let S=1;S<l.length;S+=2)x[l[S]]=d(l[S+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);s[f]=w;for(let y=0;y<l.length;y+=1){const h=l[y];h!==bt&&(w[y]=d(h))}}else{const w={};s[f]=w;for(const y in l){const h=l[y];w[y]=d(h)}}return s[f]}return d(0)}function $t(t){return t.filter(r=>r!=null)}function It(t){function r(o,s){if(o)for(const d in o){if(d[0]==="_"||t.has(d))continue;const f=[...t.values()],E=Lt(d,s==null?void 0:s.slice(s.lastIndexOf(".")))??`valid exports are ${f.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${s?` in ${s}`:""} (${E})`)}}return r}function Lt(t,r=".js"){const o=[];if(Ae.has(t)&&o.push(`+layout${r}`),Ye.has(t)&&o.push(`+page${r}`),Xe.has(t)&&o.push(`+layout.server${r}`),Pt.has(t)&&o.push(`+page.server${r}`),Ot.has(t)&&o.push(`+server${r}`),o.length>0)return`'${t}' is a valid export in ${o.slice(0,-1).join(", ")}${o.length>1?" or ":""}${o.at(-1)}`}const Ae=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Ye=new Set([...Ae,"entries"]),Xe=new Set([...Ae]),Pt=new Set([...Xe,"actions","entries"]),Ot=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","prerender","trailingSlash","config","entries"]),xt=It(Ye);async function jt(t){var r;for(const o in t)if(typeof((r=t[o])==null?void 0:r.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([s,d])=>[s,await d])));return t}class te{constructor(r,o){this.status=r,typeof o=="string"?this.body={message:o}:o?this.body=o:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(r,o){this.status=r,this.location=o}}function Tt(t,r){const o=/^(moz-icon|view-source|jar):/.exec(r);o&&console.warn(`${t}: Calling \`depends('${r}')\` will throw an error in Firefox because \`${o[1]}\` is a special URI scheme`)}const be="x-sveltekit-invalidated",Ut="x-sveltekit-trailing-slash",J=We(Je)??{},Q=We(Ke)??{};function Ee(t){J[t]=ee()}function Nt(t,r){var Ce;const o=_t(t),s=t.nodes[0],d=t.nodes[1];s(),d();const f=document.documentElement,E=[],l=[];let w=null;const y={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},C=!1,x=!1,S=!0,j=!1,O=!1,V=!1,G=!1,F,U=(Ce=history.state)==null?void 0:Ce[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const ue=J[U];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let M,ae,W;async function $e(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),c=X(e,!0);w=null;const n=ae={},i=c&&await he(c);if(n===ae&&i){if(i.type==="redirect")return re(new URL(i.location,e).href,{},[e.pathname],n);i.props.page!==void 0&&(M=i.props.page),F.$set(i.props)}}function Ie(e){l.some(c=>c==null?void 0:c.snapshot)&&(Q[e]=l.map(c=>{var n;return(n=c==null?void 0:c.snapshot)==null?void 0:n.capture()}))}function Le(e){var c;(c=Q[e])==null||c.forEach((n,i)=>{var a,u;(u=(a=l[i])==null?void 0:a.snapshot)==null||u.restore(n)})}function Pe(){Ee(U),Ge(Je,J),Ie(U),Ge(Ke,Q)}async function re(e,{noScroll:c=!1,replaceState:n=!1,keepFocus:i=!1,state:a={},invalidateAll:u=!1},p,b){return typeof e=="string"&&(e=new URL(e,Me(document))),ce({url:e,scroll:c?ee():null,keepfocus:i,redirect_chain:p,details:{state:a,replaceState:n},nav_token:b,accepted:()=>{u&&(G=!0)},blocked:()=>{},type:"goto"})}async function Oe(e){return w={id:e.id,promise:he(e).then(c=>(c.type==="loaded"&&c.state.error&&(w=null),c))},w.promise}async function oe(...e){const n=o.filter(i=>e.some(a=>i.exec(a))).map(i=>Promise.all([...i.layouts,i.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function xe(e){var i;if(e.state.error&&document.querySelector("vite-error-overlay"))return;h=e.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),M=e.props.page,F=new t.root({target:r,props:{...e.props,stores:H,components:l},hydrate:!0}),Le(U);const n={from:null,to:{params:h.params,route:{id:((i=h.route)==null?void 0:i.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(a=>a(n)),x=!0}async function Y({url:e,params:c,branch:n,status:i,error:a,route:u,form:p}){let b="never";for(const g of n)(g==null?void 0:g.slash)!==void 0&&(b=g.slash);e.pathname=tt(e.pathname,b),e.search=e.search;const _={type:"loaded",state:{url:e,params:c,branch:n,error:a,route:u},props:{constructors:$t(n).map(g=>g.node.component)}};p!==void 0&&(_.props.form=p);let v={},R=!M,$=0;for(let g=0;g<Math.max(n.length,h.branch.length);g+=1){const m=n[g],P=h.branch[g];(m==null?void 0:m.data)!==(P==null?void 0:P.data)&&(R=!0),m&&(v={...v,...m.data},R&&(_.props[`data_${$}`]=v),$+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||p!==void 0&&p!==M.form||R)&&(_.props.page={error:a,params:c,route:{id:(u==null?void 0:u.id)??null},status:i,url:new URL(e),form:p??null,data:R?v:M.data}),_}async function de({loader:e,parent:c,url:n,params:i,route:a,server_data_node:u}){var v,R,$;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},_=await e();if(xt(_.universal),(v=_.universal)!=null&&v.load){let A=function(...m){for(const P of m){Tt(a.id,P);const{href:T}=new URL(P,n);b.dependencies.add(T)}};const g={route:{get id(){return b.route=!0,a.id}},params:new Proxy(i,{get:(m,P)=>(b.params.add(P),m[P])}),data:(u==null?void 0:u.data)??null,url:ot(n,()=>{b.url=!0}),async fetch(m,P){let T;m instanceof Request?(T=m.url,P={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...P}):T=m;const D=new URL(T,n);return A(D.href),D.origin===n.origin&&(T=D.href.slice(n.origin.length)),x?pt(T,D.href,P):dt(T,P)},setHeaders:()=>{},depends:A,parent(){return b.parent=!0,c()}};try{if(ft(),p=await _.universal.load.call(null,g)??null,p!=null&&Object.getPrototypeOf(p)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof p!="object"?`a ${typeof p}`:p instanceof Response?"a Response object":Array.isArray(p)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{ut()}p=p?await jt(p):null}return{node:_,loader:e,server:u,universal:(R=_.universal)!=null&&R.load?{type:"data",data:p,uses:b}:null,data:p??(u==null?void 0:u.data)??null,slash:(($=_.universal)==null?void 0:$.trailingSlash)??(u==null?void 0:u.slash)}}function je(e,c,n,i,a){if(G)return!0;if(!i)return!1;if(i.parent&&e||i.route&&c||i.url&&n)return!0;for(const u of i.params)if(a[u]!==h.params[u])return!0;for(const u of i.dependencies)if(E.some(p=>p(new URL(u))))return!0;return!1}function pe(e,c){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?c??null:null}async function he({id:e,invalidating:c,url:n,params:i,route:a}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:u,layouts:p,leaf:b}=a,_=[...p,b];u.forEach(k=>k==null?void 0:k().catch(()=>{})),_.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const R=h.url?e!==h.url.pathname+h.url.search:!1,$=h.route?a.id!==h.route.id:!1;let A=!1;const g=_.map((k,L)=>{var z;const I=h.branch[L],N=!!(k!=null&&k[0])&&((I==null?void 0:I.loader)!==k[1]||je(A,$,R,(z=I.server)==null?void 0:z.uses,i));return N&&(A=!0),N});if(g.some(Boolean)){try{v=await Be(n,g)}catch(k){return ie({status:k instanceof te?k.status:500,error:await Z(k,{url:n,params:i,route:{id:a.id}}),url:n,route:a})}if(v.type==="redirect")return v}const m=v==null?void 0:v.nodes;let P=!1;const T=_.map(async(k,L)=>{var ge;if(!k)return;const I=h.branch[L],N=m==null?void 0:m[L];if((!N||N.type==="skip")&&k[1]===(I==null?void 0:I.loader)&&!je(P,$,R,(ge=I.universal)==null?void 0:ge.uses,i))return I;if(P=!0,(N==null?void 0:N.type)==="error")throw N;return de({loader:k[1],url:n,params:i,route:a,parent:async()=>{var qe;const De={};for(let me=0;me<L;me+=1)Object.assign(De,(qe=await T[me])==null?void 0:qe.data);return De},server_data_node:pe(N===void 0&&k[0]?{type:"skip"}:N??null,k[0]?I==null?void 0:I.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<_.length;k+=1)if(_[k])try{D.push(await T[k])}catch(L){if(L instanceof ze)return{type:"redirect",location:L.location};let I=500,N;if(m!=null&&m.includes(L))I=L.status??I,N=L.error;else if(L instanceof te)I=L.status,N=L.body;else{if(await H.updated.check())return await K(n);N=await Z(L,{params:i,url:n,route:{id:a.id}})}const z=await Te(k,D,u);return z?await Y({url:n,params:i,branch:D.slice(0,z.idx).concat(z.node),status:I,error:N,route:a}):await Ne(n,{id:a.id},N,I)}else D.push(void 0);return await Y({url:n,params:i,branch:D,status:200,error:null,route:a,form:c?void 0:null})}async function Te(e,c,n){for(;e--;)if(n[e]){let i=e;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:c,url:n,route:i}){const a={};let u=null;if(t.server_loads[0]===0)try{const v=await Be(n,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;u=v.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||C)&&await K(n)}const b=await de({loader:s,url:n,params:a,route:i,parent:()=>Promise.resolve({}),server_data_node:pe(u)}),_={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:n,params:a,branch:[b,_],status:e,error:c,route:null})}function X(e,c){if(_e(e,B))return;const n=se(e);for(const i of o){const a=i.exec(n);if(a)return{id:e.pathname+e.search,invalidating:c,route:i,params:at(a),url:e}}}function se(e){return nt(e.pathname.slice(B.length)||"/")}function Ue({url:e,type:c,intent:n,delta:i}){var b,_;let a=!1;const u={from:{params:h.params,route:{id:((b=h.route)==null?void 0:b.id)??null},url:h.url},to:{params:(n==null?void 0:n.params)??null,route:{id:((_=n==null?void 0:n.route)==null?void 0:_.id)??null},url:e},willUnload:!n,type:c};i!==void 0&&(u.delta=i);const p={...u,cancel:()=>{a=!0}};return O||y.before_navigate.forEach(v=>v(p)),a?null:u}async function ce({url:e,scroll:c,keepfocus:n,redirect_chain:i,details:a,type:u,delta:p,nav_token:b={},accepted:_,blocked:v}){var T,D,k;const R=X(e,!1),$=Ue({url:e,type:u,delta:p,intent:R});if(!$){v();return}const A=U;_(),O=!0,x&&H.navigating.set($),ae=b;let g=R&&await he(R);if(!g){if(_e(e,B))return await K(e);g=await Ne(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ae!==b)return!1;if(g.type==="redirect")if(i.length>10||i.includes(e.pathname))g=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(g.location,e).href,{},[...i,e.pathname],b),!1;else((T=g.props.page)==null?void 0:T.status)>=400&&await H.updated.check()&&await K(e);if(E.length=0,G=!1,j=!0,Ee(A),Ie(A),(D=g.props.page)!=null&&D.url&&g.props.page.url.pathname!==e.pathname&&(e.pathname=(k=g.props.page)==null?void 0:k.url.pathname),a){const L=a.replaceState?0:1;if(a.state[q]=U+=L,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let I=U+1;for(;Q[I]||J[I];)delete Q[I],delete J[I],I+=1}}w=null,x?(h=g.state,g.props.page&&(g.props.page.url=e),F.$set(g.props)):xe(g);const{activeElement:m}=document;if(await we(),S){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));c?scrollTo(c.x,c.y):L?L.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==m&&document.activeElement!==document.body;!n&&!P&&ke(),S=!0,g.props.page&&(M=g.props.page),O=!1,u==="popstate"&&Le(U),y.after_navigate.forEach(L=>L($)),H.navigating.set(null),j=!1}async function Ne(e,c,n,i){if(e.origin===location.origin&&e.pathname===location.pathname&&!C)return await ie({status:i,error:n,url:e,route:c});if(i!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await K(e)}function K(e){return location.href=e.href,new Promise(()=>{})}function Qe(){let e;f.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(e),e=setTimeout(()=>{i(p,2)},20)});function c(u){i(u.composedPath()[0],1)}f.addEventListener("mousedown",c),f.addEventListener("touchstart",c,{passive:!0});const n=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(oe(se(new URL(p.target.href))),n.unobserve(p.target))},{threshold:0});function i(u,p){const b=He(u,f);if(!b)return;const{url:_,external:v,download:R}=ye(b,B);if(v||R)return;const $=le(b);if(!$.reload)if(p<=$.preload_data){const A=X(_,!1);A&&Oe(A).then(g=>{g.type==="loaded"&&g.state.error&&console.warn(`Preloading data for ${A.url.pathname} failed with the following error: ${g.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else p<=$.preload_code&&oe(se(_))}function a(){n.disconnect();for(const u of f.querySelectorAll("a")){const{url:p,external:b,download:_}=ye(u,B);if(b||_)continue;const v=le(u);v.reload||(v.preload_code===Ve.viewport&&n.observe(u),v.preload_code===Ve.eager&&oe(se(p)))}}y.after_navigate.push(a),a()}function Z(e,c){return e instanceof te?e.body:(console.warn("The next HMR update will cause the page to reload"),t.hooks.handleError({error:e,event:c})??{message:c.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:e=>{Fe(()=>(y.after_navigate.push(e),()=>{const c=y.after_navigate.indexOf(e);y.after_navigate.splice(c,1)}))},before_navigate:e=>{Fe(()=>(y.before_navigate.push(e),()=>{const c=y.before_navigate.indexOf(e);y.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{if(x&&!j)throw new Error("Can only disable scroll handling during navigation");(j||!x)&&(S=!1)},goto:(e,c={})=>re(e,c,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:c}=new URL(e,location.href);E.push(n=>n.href===c)}return $e()},invalidate_all:()=>(G=!0,$e()),preload_data:async e=>{const c=new URL(e,Me(document)),n=X(c,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${c}`);await Oe(n)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const c=new URL(location.href),{branch:n,route:i}=h;if(!i)return;const a=await Te(h.branch.length,n,i.errors);if(a){const u=await Y({url:c,params:h.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:i});h=u.state,F.$set(u.props),we().then(ke)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:e.data,status:e.status}}),await we(),F.$set({form:e.data}),e.type==="success"&&ke())},_start_router:()=>{var c;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let i=!1;if(Pe(),!O){const u={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>i=!0};y.before_navigate.forEach(p=>p(u))}i?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(c=navigator.connection)!=null&&c.saveData||Qe(),f.addEventListener("click",n=>{var A;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const i=He(n.composedPath()[0],f);if(!i)return;const{url:a,external:u,target:p,download:b}=ye(i,B);if(!a)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const _=le(i);if(!(i instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||b)return;if(u||_.reload){Ue({url:a,type:"link"})?O=!0:n.preventDefault();return}const[R,$]=a.href.split("#");if($!==void 0&&R===location.href.split("#")[0]){if(h.url.hash===a.hash){n.preventDefault(),(A=i.ownerDocument.getElementById($))==null||A.scrollIntoView();return}if(V=!0,Ee(U),e(a),!_.replace_state)return;V=!1,n.preventDefault()}ce({url:a,scroll:_.noscroll?ee():null,keepfocus:_.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:_.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const i=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||i.method)!=="get")return;const p=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||i.action);if(_e(p,B))return;const b=n.target,{keep_focus:_,noscroll:v,reload:R,replace_state:$}=le(b);if(R)return;n.preventDefault(),n.stopPropagation();const A=new FormData(b),g=a==null?void 0:a.getAttribute("name");g&&A.append(g,(a==null?void 0:a.getAttribute("value"))??""),p.search=new URLSearchParams(A).toString(),ce({url:p,scroll:v?ee():null,keepfocus:_??!1,redirect_chain:[],details:{state:{},replaceState:$??p.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var i;if((i=n.state)!=null&&i[q]){if(n.state[q]===U)return;const a=J[n.state[q]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){J[U]=ee(),U=n.state[q],scrollTo(a.x,a.y);return}const u=n.state[q]-U;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=n.state[q]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&H.navigating.set(null)});function e(n){h.url=n,H.page.set({...M,url:n}),H.page.notify()}},_hydrate:async({status:e=200,error:c,node_ids:n,params:i,route:a,data:u,form:p})=>{C=!0;const b=new URL(location.href);({params:i={},route:a={id:null}}=X(b,!1)||{});let _;try{const v=n.map(async(A,g)=>{const m=u[g];return m!=null&&m.uses&&(m.uses=Ze(m.uses)),de({loader:t.nodes[A],url:b,params:i,route:a,parent:async()=>{const P={};for(let T=0;T<g;T+=1)Object.assign(P,(await v[T]).data);return P},server_data_node:pe(m)})}),R=await Promise.all(v),$=o.find(({id:A})=>A===a.id);if($){const A=$.layouts;for(let g=0;g<A.length;g++)A[g]||R.splice(g,0,void 0)}_=await Y({url:b,params:i,branch:R,status:e,error:c,form:p,route:$??null})}catch(v){if(v instanceof ze){await K(new URL(v.location,location.href));return}_=await ie({status:v instanceof te?v.status:500,error:await Z(v,{url:b,params:i,route:a}),url:b,route:a})}xe(_)}}}async function Be(t,r){const o=new URL(t);if(o.pathname=ct(t.pathname),t.pathname.endsWith("/")&&o.searchParams.append(Ut,"1"),t.searchParams.has(be))throw new Error(`Cannot used reserved query parameter "${be}"`);o.searchParams.append(be,r.map(d=>d?"1":"0").join(""));const s=await fe(o.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async d=>{var h;const f=new Map,E=s.body.getReader(),l=new TextDecoder;function w(C){return At(C,{Promise:x=>new Promise((S,j)=>{f.set(x,{fulfil:S,reject:j})})})}let y="";for(;;){const{done:C,value:x}=await E.read();if(C&&!y)break;for(y+=!x&&y?`
`:l.decode(x);;){const S=y.indexOf(`
`);if(S===-1)break;const j=JSON.parse(y.slice(0,S));if(y=y.slice(S+1),j.type==="redirect")return d(j);if(j.type==="data")(h=j.nodes)==null||h.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=Ze(O.uses),O.data=w(O.data))}),d(j);else if(j.type==="chunk"){const{id:O,data:V,error:G}=j,F=f.get(O);f.delete(O),G?F.reject(w(G)):F.fulfil(w(V))}}}})}function Ze(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function ke(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,o=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),o!==null?r.setAttribute("tabindex",o):r.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let f=0;f<s.rangeCount;f+=1)d.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===d.length){for(let f=0;f<s.rangeCount;f+=1){const E=d[f],l=s.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}{const t=console.warn;console.warn=function(...o){o.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(o[0])||t(...o)}}async function qt(t,r,o){r===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const s=Nt(t,r);et({client:s}),o?await s._hydrate(o):s.goto(location.href,{replaceState:!0}),s._start_router()}export{qt as start};
