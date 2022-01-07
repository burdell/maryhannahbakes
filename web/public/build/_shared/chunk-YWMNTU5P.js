import{b as I,d as Q,f as E,g as Le,h as le}from"/build/_shared/chunk-STFD5DNB.js";E();var wt=I(Le()),H=I(Q());E();E();function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}var d=I(Q()),P=I(le());E();var v=I(Q());var ue=class extends v.default.Component{constructor(t){super(t);this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||n.error,location:n.location}}render(){return this.state.error?v.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function $e({error:e}){return console.error(e),v.default.createElement("html",{lang:"en"},v.default.createElement("head",null,v.default.createElement("meta",{charSet:"utf-8"}),v.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),v.default.createElement("title",null,"Application Error!")),v.default.createElement("body",null,v.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},v.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),v.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack)),v.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws errors than this. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}var je=v.default.createContext(void 0);function Ue(){return(0,v.useContext)(je)}function xe({catch:e,component:t,children:n}){return e?v.default.createElement(je.Provider,{value:e},v.default.createElement(t,null)):v.default.createElement(v.default.Fragment,null,n)}function Ye(){let e=Ue();return v.default.createElement("html",{lang:"en"},v.default.createElement("head",null,v.default.createElement("meta",{charSet:"utf-8"}),v.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),v.default.createElement("title",null,"Unhandled Thrown Response!")),v.default.createElement("body",null,v.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),v.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws 404s (and other responses) than this. Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}E();function B(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}E();var Je=I(Le());E();async function ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch{return window.location.reload(),new Promise(()=>{})}}function We(e,t,n){let r=e.map(o=>{var c;let m=t[o.route.id];return((c=m.links)===null||c===void 0?void 0:c.call(m))||[]}).flat(1),a=Nt(e,n);return At(r,a)}async function Ge(e){if(!e.links)return;let t=e.links();if(!t)return;let n=[];for(let a of t)!de(a)&&a.rel==="stylesheet"&&n.push({...a,rel:"preload",as:"style"});let r=n.filter(a=>!a.media||window.matchMedia(a.media).matches);await Promise.all(r.map(Tt))}async function Tt(e){return new Promise(t=>{let n=document.createElement("link");Object.assign(n,e);function r(){document.head.contains(n)&&document.head.removeChild(n)}n.onload=()=>{r(),t()},n.onerror=()=>{r(),t()},document.head.appendChild(n)})}function de(e){return e!=null&&typeof e.page=="string"}function Ft(e){return e!=null&&typeof e.rel=="string"&&typeof e.href=="string"}async function Ke(e,t){return(await Promise.all(e.map(async r=>{let a=await ce(r.route,t);return a.links?a.links():[]}))).flat(1).filter(Ft).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(({rel:r,...a})=>r==="preload"?{rel:"prefetch",...a}:{rel:"prefetch",as:"style",...a})}function Ce(e,t,n,r,a){let o=qe(e),c=(f,h)=>n[h]?f.route.id!==n[h].route.id:!0,m=(f,h)=>{var w;return n[h].pathname!==f.pathname||((w=n[h].route.path)===null||w===void 0?void 0:w.endsWith("*"))&&n[h].params["*"]!==f.params["*"]};return a==="data"&&r.search!==o.search?t.filter((f,h)=>f.route.hasLoader?c(f,h)||m(f,h)?!0:f.route.shouldReload?f.route.shouldReload({params:f.params,prevUrl:new URL(r.pathname+r.search+r.hash,window.origin),url:new URL(e,window.origin)}):!0:!1):t.filter((f,h)=>f.route.hasLoader&&(c(f,h)||m(f,h)))}function Xe(e,t,n){let r=qe(e);return Me(t.filter(a=>n.routes[a.route.id].hasLoader).map(a=>{let{pathname:o,search:c}=r,m=new URLSearchParams(c);return m.append("_data",a.route.id),`${o}?${m}`}))}function Ve(e,t){return Me(e.map(n=>{let r=t.routes[n.route.id],a=[r.module];return r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function Nt(e,t){return Me(e.map(n=>{let r=t.routes[n.route.id],a=[r.module];return r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function Me(e){return[...new Set(e)]}function At(e,t){let n=new Set,r=new Set(t);return e.reduce((a,o)=>{if(!de(o)&&o.as==="script"&&o.href&&r.has(o.href))return a;let m=JSON.stringify(o);return n.has(m)||(n.add(m),a.push(o)),a},[])}function qe(e){let t=(0,Je.parsePath)(e);return t.search===void 0&&(t.search=""),t}E();function Be(e){return{__html:e}}E();var st=I(Q());E();function ke(e){return e instanceof Response&&e.headers.get("X-Remix-Catch")!=null}function _t(e){return e instanceof Response&&e.headers.get("X-Remix-Error")!=null}function ze(e){return e instanceof Response&&e.headers.get("X-Remix-Redirect")!=null}async function De(e,t,n,r){e.searchParams.set("_data",t),e.searchParams.sort();let a=r?Ot(r,n):{credentials:"same-origin",signal:n},o=await fetch(e.href,a);if(_t(o)){let c=await o.json(),m=new Error(c.message);return m.stack=c.stack,m}return o}async function Z(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.json():e.text()}function Ot(e,t){let{encType:n,method:r,formData:a}=e,o,c=a;if(n==="application/x-www-form-urlencoded"){c=new URLSearchParams;for(let[m,i]of a)B(typeof i=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),c.append(m,i);o={"Content-Type":n}}return{method:r,body:c,signal:t,credentials:"same-origin",headers:o}}E();var Ze=I(Le());E();var Qe=I(le());function Y(e,t){let n=(0,Qe.matchRoutes)(e,t);return n?n.map(r=>({params:r.params,pathname:r.pathname,route:r.route})):null}var ee=class{constructor(t,n,r){this.status=t,this.statusText=n,this.data=r}};function et(e){return["POST","PUT","PATCH","DELETE"].includes(e.method)}function tt(e){return e.method==="GET"}function fe(e){return Boolean(e.state)&&e.state.isRedirect}function Ht(e){return fe(e)&&e.state.type==="loader"}function $t(e){return fe(e)&&e.state.type==="action"}function jt(e){return fe(e)&&e.state.type==="fetchAction"}function Ut(e){return fe(e)&&e.state.type==="loaderSubmission"}var me=class{constructor(t){this.location=typeof t=="string"?t:t.pathname+t.search}},J={state:"idle",submission:void 0,location:void 0,type:"idle"},Yt={state:"idle",type:"init",data:void 0,submission:void 0};function rt(e){let{routes:t}=e,n,r=new Map,a=0,o=-1,c=new Map,m=Y(t,e.location);m||(m=[{params:{},pathname:"",route:t[0]}]);let i={location:e.location,loaderData:e.loaderData||{},actionData:e.actionData,catch:e.catch,error:e.error,catchBoundaryId:e.catchBoundaryId||null,errorBoundaryId:e.errorBoundaryId||null,matches:m,nextMatches:void 0,transition:J,fetchers:new Map};function f(s){i=Object.assign({},i,s),e.onChange(i)}function h(){return i}function w(s){return i.fetchers.get(s)||Yt}function y(s){r.has(s)&&Se(s),c.delete(s),i.fetchers.delete(s)}async function S(s){switch(s.type){case"navigation":{let{action:l,location:u,submission:p}=s,R=Y(t,u);R?!p&&kt(u)?await Lt(u,R):l===Ze.Action.Pop?await _e(u,R):p&&et(p)?await se(u,p,R):p&&tt(p)?await bt(u,p,R):$t(u)?await Bt(u,R):Ut(u)?await Ct(u,R):Ht(u)?await xt(u,R):jt(u)?await Mt(u,R):await _e(u,R):(R=[{params:{},pathname:"",route:t[0]}],await ie(u,R)),o=-1;break}case"fetcher":{let{key:l,submission:u,href:p}=s,R=Y(t,p);B(R,"No matches found");let b=R.slice(-1)[0];r.has(l)&&Se(l),u&&et(u)?await ge(l,u,b):u&&tt(u)?await Ee(p,l,u,b):await ve(p,l,b);break}default:throw new Error(`Unknown data event type: ${s.type}`)}}function x(){F();for(let[,s]of r)s.abort()}async function ge(s,l,u){let p=i.fetchers.get(s),R={state:"submitting",type:"actionSubmission",submission:l,data:(p==null?void 0:p.data)||void 0};i.fetchers.set(s,R),f({fetchers:new Map(i.fetchers)});let b=new AbortController;r.set(s,b);let g=await at(l,u,b.signal);if(b.signal.aborted)return;if(te(g)){let U={isRedirect:!0,type:"fetchAction"};e.onRedirect(g.value.location,U);return}if(T(u,s,g)||await V(u,s,g))return;let C={state:"loading",type:"actionReload",data:g.value,submission:l};i.fetchers.set(s,C),f({fetchers:new Map(i.fetchers)});let M=Re(g)?g:void 0,N=re(g)?g:void 0,q=++a;c.set(s,q);let z=i.nextMatches||i.matches,be=W(i.transition.location||i.location),j=await nt(i,K(be),z,b.signal,M,N,l,u.route.id,C);if(b.signal.aborted)return;c.delete(s),r.delete(s);let G=ot(j);if(G){let U={isRedirect:!0,type:"loader"};e.onRedirect(G.location,U);return}let[O,Oe]=it(j,i.matches,M),[Dt,Pt]=await Ie(j,i.matches,N),It={state:"idle",type:"done",data:g.value,submission:void 0};i.fetchers.set(s,It);let He=oe(q);if(He&&ae(He),X(q)){let{transition:U}=i;B(U.state==="loading","Expected loading transition"),f({location:U.location,matches:i.nextMatches,error:O,errorBoundaryId:Oe,catch:Dt,catchBoundaryId:Pt,loaderData:Te(i,j,z),actionData:U.type==="actionReload"?i.actionData:void 0,transition:J,fetchers:new Map(i.fetchers)})}else f({fetchers:new Map(i.fetchers),error:O,errorBoundaryId:Oe,loaderData:Te(i,j,z)})}function X(s){return i.transition.state==="loading"&&o<s?(F(),!0):!1}function ae(s){for(let l of s){let u=w(l),p={state:"idle",type:"done",data:u.data,submission:void 0};i.fetchers.set(l,p)}}function oe(s){let l=[];for(let[u,p]of c)if(p<s){let R=i.fetchers.get(u);B(R,`Expected fetcher: ${u}`),R.state==="loading"&&(Se(u),c.delete(u),l.push(u))}return l.length?l:!1}async function Ee(s,l,u,p){let R=i.fetchers.get(l),b={state:"submitting",type:"loaderSubmission",submission:u,data:(R==null?void 0:R.data)||void 0};i.fetchers.set(l,b),f({fetchers:new Map(i.fetchers)});let g=new AbortController;r.set(l,g);let C=await Pe(p,K(s),g.signal);if(r.delete(l),g.signal.aborted)return;if(te(C)){let N={isRedirect:!0,type:"loader"};e.onRedirect(C.value.location,N);return}if(T(p,l,C)||await V(p,l,C))return;let M={state:"idle",type:"done",data:C.value,submission:void 0};i.fetchers.set(l,M),f({fetchers:new Map(i.fetchers)})}async function ve(s,l,u){let p=i.fetchers.get(l),R={state:"loading",type:"normalLoad",submission:void 0,data:(p==null?void 0:p.data)||void 0};i.fetchers.set(l,R),f({fetchers:new Map(i.fetchers)});let b=new AbortController;r.set(l,b);let g=await Pe(u,K(s),b.signal);if(b.signal.aborted)return;if(r.delete(l),te(g)){let M={isRedirect:!0,type:"loader"};e.onRedirect(g.value.location,M);return}if(T(u,l,g)||await V(u,l,g))return;let C={state:"idle",type:"done",data:g.value,submission:void 0};i.fetchers.set(l,C),f({fetchers:new Map(i.fetchers)})}async function V(s,l,u){if(re(u)){let p=he(s,i.matches);return i.fetchers.delete(l),f({transition:J,fetchers:new Map(i.fetchers),catch:{data:u.value.data,status:u.value.status,statusText:u.value.statusText},catchBoundaryId:p}),!0}return!1}function T(s,l,u){if(Re(u)){let p=pe(s,i.matches);return i.fetchers.delete(l),f({fetchers:new Map(i.fetchers),error:u.value,errorBoundaryId:p}),!0}return!1}async function ie(s,l){F(),f({transition:{state:"loading",type:"normalLoad",submission:void 0,location:s},nextMatches:l}),await Promise.resolve();let p=he(l[0],l);f({location:s,matches:l,catch:{data:null,status:404,statusText:"Not Found"},catchBoundaryId:p,transition:J})}async function se(s,l,u){F(),f({transition:{state:"submitting",type:"actionSubmission",submission:l,location:s},nextMatches:u});let R=new AbortController;n=R,!Jt(l.action)&&u[u.length-1].route.id.endsWith("/index")&&(u=u.slice(0,-1));let b=u.slice(-1)[0],g=await at(l,b,R.signal);if(R.signal.aborted)return;if(te(g)){let M={isRedirect:!0,type:"action"};e.onRedirect(g.value.location,M);return}if(re(g)){let[M,N]=await Ie([g],u,g);f({transition:J,catch:M,catchBoundaryId:N});return}f({transition:{state:"loading",type:"actionReload",submission:l,location:s},actionData:{[b.route.id]:g.value}}),await $(s,u,l,b.route.id,g)}async function bt(s,l,u){F(),f({transition:{state:"submitting",type:"loaderSubmission",submission:l,location:s},nextMatches:u}),await $(s,u,l)}async function Lt(s,l){F(),f({transition:{state:"loading",type:"normalLoad",submission:void 0,location:s},nextMatches:l}),await Promise.resolve(),f({location:s,matches:l,transition:J})}async function _e(s,l){F(),f({transition:{state:"loading",type:"normalLoad",submission:void 0,location:s},nextMatches:l}),await $(s,l)}async function xt(s,l){F(),f({transition:{state:"loading",type:"normalRedirect",submission:void 0,location:s},nextMatches:l}),await $(s,l)}async function Ct(s,l){F(),B(i.transition.type==="loaderSubmission",`Unexpected transition: ${JSON.stringify(i.transition)}`);let{submission:u}=i.transition;f({transition:{state:"loading",type:"loaderSubmissionRedirect",submission:u,location:s},nextMatches:l}),await $(s,l,u)}async function Mt(s,l){F(),f({transition:{state:"loading",type:"fetchActionRedirect",submission:void 0,location:s},nextMatches:l}),await $(s,l)}async function Bt(s,l){F(),B(i.transition.type==="actionSubmission"||i.transition.type==="actionReload",`Unexpected transition: ${JSON.stringify(i.transition)}`);let{submission:u}=i.transition;f({transition:{state:"loading",type:"actionRedirect",submission:u,location:s},nextMatches:l}),await $(s,l,u)}function kt(s){return W(i.location)===W(s)&&i.location.hash!==s.hash}async function $(s,l,u,p,R){let b=R&&Re(R)?R:void 0,g=R&&re(R)?R:void 0,C=new AbortController;n=C,o=++a;let M=await nt(i,K(W(s)),l,C.signal,b,g,u,p);if(C.signal.aborted)return;let N=ot(M);if(N){if(i.transition.type==="actionReload"){let O={isRedirect:!0,type:"action"};e.onRedirect(N.location,O)}else if(i.transition.type==="loaderSubmission"){let O={isRedirect:!0,type:"loaderSubmission"};e.onRedirect(N.location,O)}else{let O={isRedirect:!0,type:"loader"};e.onRedirect(N.location,O)}return}let[q,z]=it(M,l,b),[be,j]=await Ie(M,l,b),G=oe(o);G&&ae(G),f({location:s,matches:l,error:q,errorBoundaryId:z,catch:be,catchBoundaryId:j,loaderData:Te(i,M,l),actionData:i.transition.type==="actionReload"?i.actionData:void 0,transition:J,fetchers:G?new Map(i.fetchers):i.fetchers})}function F(){var s;(s=n)===null||s===void 0||s.abort()}function Se(s){let l=r.get(s);B(l,`Expected fetch controller: ${s}`),l.abort(),r.delete(s)}return{send:S,getState:h,getFetcher:w,deleteFetcher:y,dispose:x,get _internalFetchControllers(){return r}}}function Jt(e){let t=!1,n=new URLSearchParams(e.split("?",2)[1]||"");for(let r of n.getAll("index"))r||(t=!0);return t}async function nt(e,t,n,r,a,o,c,m,i){let f=Wt(e,t,n,a,o,c,m,i);return Promise.all(f.map(h=>Pe(h,t,r)))}async function Pe(e,t,n){B(e.route.loader,`Expected loader for ${e.route.id}`);try{let{params:r}=e,a=await e.route.loader({params:r,url:t,signal:n});return{match:e,value:a}}catch(r){return{match:e,value:r}}}async function at(e,t,n){if(!t.route.action)throw new Error(`Route "${t.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);try{let r=await t.route.action({url:K(e.action),params:t.params,submission:e,signal:n});return{match:t,value:r}}catch(r){return{match:t,value:r}}}function Wt(e,t,n,r,a,o,c,m){if(c&&(a||r)){let y=!1;n=n.filter(S=>y?!1:S.route.id===c?(y=!0,!1):!0)}let i=(y,S)=>e.matches[S]?y.route.id!==e.matches[S].route.id:!0,f=(y,S)=>{var x;return e.matches[S].pathname!==y.pathname||((x=e.matches[S].route.path)===null||x===void 0?void 0:x.endsWith("*"))&&e.matches[S].params["*"]!==y.params["*"]},h=(y,S)=>{if(!y.route.loader)return!1;if(i(y,S)||f(y,S))return!0;if(y.route.shouldReload){let x=K(W(e.location));return y.route.shouldReload({prevUrl:x,url:t,submission:o,params:y.params})}return!0};return e.matches.length===1?n.filter(y=>!!y.route.loader):(m==null?void 0:m.type)==="actionReload"||e.transition.type==="actionReload"||e.transition.type==="actionRedirect"||W(t)===W(e.location)||t.searchParams.toString()!==e.location.search?n.filter(h):n.filter((y,S,x)=>(r||a)&&x.length-1===S?!1:y.route.loader&&(i(y,S)||f(y,S)))}function te(e){return e.value instanceof me}function W(e){return e.pathname+e.search}function ot(e){for(let t of e)if(te(t))return t.value;return null}async function Ie(e,t,n){let r;for(let o of e)if(re(o)){r=o;break}let a=async o=>({status:o.status,statusText:o.statusText,data:o.data});if(n&&r){let o=he(r.match,t);return[await a(n.value),o]}if(r){let o=he(r.match,t);return[await a(r.value),o]}return[void 0,void 0]}function it(e,t,n){let r;for(let a of e)if(Re(a)){r=a;break}if(n&&r){let a=pe(r.match,t);return[n.value,a]}if(n){let a=pe(n.match,t);return[n.value,a]}if(r){let a=pe(r.match,t);return[r.value,a]}return[void 0,void 0]}function he(e,t){let n=null;for(let r of t)if(r.route.CatchBoundary&&(n=r.route.id),r===e)break;return n}function pe(e,t){let n=null;for(let r of t)if(r.route.ErrorBoundary&&(n=r.route.id),r===e)break;return n}function Te(e,t,n){let r={};for(let{match:o,value:c}of t)r[o.route.id]=c;let a={};for(let{route:o}of n){let c=r[o.id]!==void 0?r[o.id]:e.loaderData[o.id];c!==void 0&&(a[o.id]=c)}return a}function re(e){return e.value instanceof ee}function Re(e){return e.value instanceof Error}function K(e){return new URL(e,window.location.origin)}function Gt(e,t,n){return{caseSensitive:!!e.caseSensitive,element:st.createElement(n,{id:e.id}),id:e.id,path:e.path,index:e.index,module:e.module,loader:Xt(e,t),action:Vt(e),shouldReload:Kt(e,t),ErrorBoundary:e.hasErrorBoundary,CatchBoundary:e.hasCatchBoundary,hasLoader:e.hasLoader}}function Fe(e,t,n,r){return Object.keys(e).filter(a=>e[a].parentId===r).map(a=>{let o=Gt(e[a],t,n),c=Fe(e,t,n,o.id);return c.length>0&&(o.children=c),o})}function Kt(e,t){return r=>{let a=t[e.id];return B(a,`Expected route module to be loaded for ${e.id}`),a.unstable_shouldReload?a.unstable_shouldReload(r):!0}}async function lt(e,t){let n=await ce(e,t);return await Ge(n),n}function Xt(e,t){return async({url:r,signal:a,submission:o})=>{if(e.hasLoader){let[c]=await Promise.all([De(r,e.id,a,o),lt(e,t)]);if(c instanceof Error)throw c;let m=await ut(c);if(m)return m;if(ke(c))throw new ee(c.status,c.statusText,await Z(c.clone()));return Z(c)}else await lt(e,t)}}function Vt(e){return e.hasAction?async({url:n,signal:r,submission:a})=>{let o=await De(n,e.id,r,a);if(o instanceof Error)throw o;let c=await ut(o);if(c)return c;if(ke(o))throw new ee(o.status,o.statusText,await Z(o.clone()));return Z(o)}:void 0}async function ut(e){if(ze(e)){let t=new URL(e.headers.get("X-Remix-Redirect"),window.location.origin);if(t.origin!==window.location.origin)await new Promise(()=>{window.location.replace(t.href)});else return new me(t.pathname+t.search)}return null}var ct=d.createContext(void 0);function _(){let e=d.useContext(ct);return B(e,"You must render this element inside a <Remix> element"),e}function dt({context:e,action:t,location:n,navigator:r,static:a=!1}){let{manifest:o,routeData:c,actionData:m,routeModules:i,serverHandoffString:f,appState:h}=e,w=d.useMemo(()=>Fe(o.routes,i,Zt),[o,i]),[y,S]=d.useState(h),[x]=d.useState(()=>rt({routes:w,actionData:m,loaderData:c,location:n,catch:h.catch,catchBoundaryId:h.catchBoundaryRouteId,onRedirect:r.replace,onChange:T=>{S({catch:T.catch,error:T.error,catchBoundaryRouteId:T.catchBoundaryId,loaderBoundaryRouteId:T.errorBoundaryId,renderBoundaryRouteId:null,trackBoundaries:!1,trackCatchBoundaries:!1})}})),ge=d.useMemo(()=>({...r,push:(ie,se)=>x.getState().transition.state!=="idle"?r.replace(ie,se):r.push(ie,se)}),[r,x]),{location:X,matches:ae,loaderData:oe,actionData:Ee}=x.getState();d.useEffect(()=>{let{location:T}=x.getState();n!==T&&x.send({type:"navigation",location:n,submission:nr(),action:t})},[x,n,t]);let ve=y.error&&y.renderBoundaryRouteId===null&&y.loaderBoundaryRouteId===null?ft(y.error):void 0,V=y.catch&&y.catchBoundaryRouteId===null?y.catch:void 0;return d.createElement(ct.Provider,{value:{matches:ae,manifest:o,appState:y,routeModules:i,serverHandoffString:f,clientRoutes:w,routeData:oe,actionData:Ee,transitionManager:x}},d.createElement(ue,{location:X,component:$e,error:ve},d.createElement(xe,{location:X,component:Ye,catch:V},d.createElement(P.Router,{navigationType:t,location:X,navigator:ge,static:a},d.createElement(qt,null)))))}function ft(e){let t=new Error(e.message);return t.stack=e.stack,t}function qt(){let{clientRoutes:e}=_();return(0,P.useRoutes)(e)||e[0].element}var zt=d.createContext(void 0);function Qt({id:e}){throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`)}function Zt({id:e}){let t=(0,P.useLocation)(),{routeData:n,routeModules:r,appState:a}=_(),o=n[e],{default:c,CatchBoundary:m,ErrorBoundary:i}=r[e],f=c?d.createElement(c,null):d.createElement(Qt,{id:e}),h={data:o,id:e};if(m){let w=a.catch&&a.catchBoundaryRouteId===e?a.catch:void 0;a.trackCatchBoundaries&&(a.catchBoundaryRouteId=e),h=w?{id:e,get data(){console.error("You cannot `useLoaderData` in a catch boundary.")}}:{id:e,data:o},f=d.createElement(xe,{location:t,component:m,catch:w},f)}if(i){let w=a.error&&(a.renderBoundaryRouteId===e||a.loaderBoundaryRouteId===e)?ft(a.error):void 0;a.trackBoundaries&&(a.renderBoundaryRouteId=e),h=w?{id:e,get data(){console.error("You cannot `useLoaderData` in an error boundary.")}}:{id:e,data:o},f=d.createElement(ue,{location:t,component:i,error:w},f)}return d.createElement(zt.Provider,{value:h},f)}function mt(){let{matches:e,routeModules:t,manifest:n}=_(),r=d.useMemo(()=>We(e,t,n),[e,t,n]);return d.createElement(d.Fragment,null,r.map(a=>de(a)?d.createElement(Ne,D({key:a.page},a)):d.createElement("link",D({key:a.rel+a.href},a))))}function Ne({page:e,...t}){let{clientRoutes:n}=_(),r=d.useMemo(()=>Y(n,e),[n,e]);return r?d.createElement(tr,D({page:e,matches:r},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function er(e){let{routeModules:t}=_(),[n,r]=d.useState([]);return d.useEffect(()=>{let a=!1;return Ke(e,t).then(o=>{a||r(o)}),()=>{a=!0}},[e,t]),n}function tr({page:e,matches:t,...n}){let r=(0,P.useLocation)(),{matches:a,manifest:o}=_(),c=d.useMemo(()=>Ce(e,t,a,r,"data"),[e,t,a,r]),m=d.useMemo(()=>Ce(e,t,a,r,"assets"),[e,t,a,r]),i=d.useMemo(()=>Xe(e,c,o),[c,e,o]),f=d.useMemo(()=>Ve(m,o),[m,o]),h=er(m);return d.createElement(d.Fragment,null,i.map(w=>d.createElement("link",D({key:w,rel:"prefetch",as:"fetch",href:w},n))),f.map(w=>d.createElement("link",D({key:w,rel:"modulepreload",href:w},n))),h.map(w=>d.createElement("link",D({key:w.href},w))))}function ht(){let{matches:e,routeData:t,routeModules:n}=_(),r=(0,P.useLocation)(),a={},o={};for(let c of e){let m=c.route.id,i=t[m],f=c.params,h=n[m];if(h.meta){let w=typeof h.meta=="function"?h.meta({data:i,parentsData:o,params:f,location:r}):h.meta;Object.assign(a,w)}o[m]=i}return d.createElement(d.Fragment,null,Object.entries(a).map(([c,m])=>{let i=c.startsWith("og:");return c==="title"?d.createElement("title",{key:"title"},m):Array.isArray(m)?m.map(f=>i?d.createElement("meta",{key:c+f,property:c,content:f}):d.createElement("meta",{key:c+f,name:c,content:f})):i?d.createElement("meta",{key:c,property:c,content:m}):d.createElement("meta",{key:c,name:c,content:m})}))}var pt=!1;function Rt(e){let{manifest:t,matches:n,pendingLocation:r,clientRoutes:a,serverHandoffString:o}=_();d.useEffect(()=>{pt=!0},[]);let c=d.useMemo(()=>{let h=o?`window.__remixContext = ${o};`:"",w=`${n.map((y,S)=>`import * as route${S} from ${JSON.stringify(t.routes[y.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${n.map((y,S)=>`${JSON.stringify(y.route.id)}:route${S}`).join(",")}};`;return d.createElement(d.Fragment,null,d.createElement("script",D({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:Be(h)})),d.createElement("script",D({},e,{src:t.url})),d.createElement("script",D({},e,{dangerouslySetInnerHTML:Be(w),type:"module"})),d.createElement("script",D({},e,{src:t.entry.module,type:"module"})))},[]),m=d.useMemo(()=>{if(r){let h=Y(a,r);return B(h,`No routes match path "${r.pathname}"`),h}return[]},[r,a]),i=n.concat(m).map(h=>{let w=t.routes[h.route.id];return(w.imports||[]).concat([w.module])}).flat(1),f=t.entry.imports.concat(i);return d.createElement(d.Fragment,null,rr(f).map(h=>d.createElement("link",{key:h,rel:"modulepreload",href:h,crossOrigin:e.crossOrigin})),pt?null:c)}function rr(e){return[...new Set(e)]}var yt;function nr(){let e=yt;return yt=void 0,e}function ne(e){d.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[e])}function ye(){let{transitionManager:e}=_();return e.getState().transition}function gt(e){let t=H.useRef();t.current==null&&(t.current=(0,wt.createBrowserHistory)({window}));let n=t.current,[r,a]=H.useReducer((c,m)=>m,{action:n.action,location:n.location});H.useLayoutEffect(()=>n.listen(a),[n]);let o=window.__remixContext;return o.manifest=window.__remixManifest,o.routeModules=window.__remixRouteModules,o.appState.trackBoundaries=!1,o.appState.trackCatchBoundaries=!1,H.createElement(dt,{context:o,action:r.action,location:r.location,navigator:n})}E();var L=I(le());E();var k=I(Q()),Et=I(le());var Ae="positions",we={};if(typeof document!="undefined"){let e=sessionStorage.getItem(Ae);e&&(we=JSON.parse(e))}function vt(){return ar(),k.useEffect(()=>{window.history.scrollRestoration="manual"},[]),ne(k.useCallback(()=>{window.history.scrollRestoration="auto"},[])),k.createElement("script",{dangerouslySetInnerHTML:{__html:`
          let STORAGE_KEY = ${JSON.stringify(Ae)};
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          try {
            let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `}})}var St=!1;function ar(){let e=(0,Et.useLocation)(),t=ye(),n=k.useRef(!1);k.useEffect(()=>{t.submission&&(n.current=!0)},[t]),k.useEffect(()=>{t.location&&(we[e.key]=window.scrollY)},[t,e]),ne(k.useCallback(()=>{sessionStorage.setItem(Ae,JSON.stringify(we))},[])),typeof document!="undefined"&&k.useLayoutEffect(()=>{if(!St){St=!0;return}let r=we[e.key];if(r){window.scrollTo(0,r);return}if(e.hash){let a=document.querySelector(e.hash);if(a){a.scrollIntoView();return}}if(n.current===!0){n.current=!1;return}window.scrollTo(0,0)},[e]),k.useEffect(()=>{t.submission&&(n.current=!0)},[t])}E();export{mt as a,ht as b,Rt as c,gt as d,vt as e,L as f};
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
