function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function d(){return p("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):f(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return p(e)}function b(t){return v(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){(null!=e||t.value)&&(t.value=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function _(t){S=t}function A(){if(!S)throw new Error("Function called outside component initialization");return S}function R(t){A().$$.on_mount.push(t)}const L=[],P=[],N=[],j=[],q=Promise.resolve();let C=!1;function k(t){N.push(t)}let O=!1;const U=new Set;function I(){if(!O){O=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];_(e),z(e.$$)}for(L.length=0;P.length;)P.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];U.has(e)||(U.add(e),e())}N.length=0}while(L.length);for(;j.length;)j.pop()();C=!1,O=!1,U.clear()}}function z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const T=new Set;let D;function B(){D={r:0,c:[],p:D}}function J(){D.r||s(D.c),D=D.p}function V(t,e){t&&t.i&&(T.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),D.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const c=t[o],a=e[o];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in c)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:i}=t.$$;c&&c.m(e,r),k(()=>{const e=a.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(k)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(L.push(t),C||(C=!0,q.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,o,c,a,l,i=[-1]){const f=S;_(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:i};let d=!1;if(h.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&Y(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=$(n.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();n.intro&&V(e.$$.fragment),W(e,n.target,n.anchor),I()}_(f)}class Z{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const tt=[];function et(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=t){const l=[c,a];return s.push(l),1===s.length&&(r=n(o)||t),c(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const nt={};class rt extends Z{constructor(t){super(),Q(this,t,null,null,c,{})}}function st(t,e,n){const r=t.slice();return r[4]=e[n],r}function ot(t){let e,n,r,s,o,c=t[4].title+"";return{c(){e=f("li"),n=f("a"),r=p(c),o=h(),this.h()},l(t){e=y(t,"LI",{class:!0});var s=$(e);n=y(s,"A",{href:!0,class:!0});var a=$(n);r=v(a,c),a.forEach(u),o=b(s),s.forEach(u),this.h()},h(){g(n,"href",s=t[4].path),g(n,"class","svelte-zdm7m3"),g(e,"class","selected svelte-zdm7m3")},m(t,s){i(t,e,s),l(e,n),l(n,r),l(e,o)},p(t,e){1&e&&c!==(c=t[4].title+"")&&E(r,c),1&e&&s!==(s=t[4].path)&&g(n,"href",s)},d(t){t&&u(e)}}}function ct(t){let e,n,r,s,o,c=t[4].title+"";return{c(){e=f("li"),n=f("a"),r=p(c),o=h(),this.h()},l(t){e=y(t,"LI",{class:!0});var s=$(e);n=y(s,"A",{href:!0,rel:!0,class:!0});var a=$(n);r=v(a,c),a.forEach(u),o=b(s),s.forEach(u),this.h()},h(){g(n,"href",s=t[4].path),g(n,"rel","prefetch"),g(n,"class","svelte-zdm7m3"),g(e,"class","svelte-zdm7m3")},m(t,s){i(t,e,s),l(e,n),l(n,r),l(e,o)},p(t,e){1&e&&c!==(c=t[4].title+"")&&E(r,c),1&e&&s!==(s=t[4].path)&&g(n,"href",s)},d(t){t&&u(e)}}}function at(t){let e;function n(t,e){return t[1]!==t[4].title?ct:ot}let r=n(t),s=r(t);return{c(){s.c(),e=d()},l(t){s.l(t),e=d()},m(t,n){s.m(t,n),i(t,e,n)},p(t,o){r===(r=n(t))&&s?s.p(t,o):(s.d(1),s=r(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&u(e)}}}function lt(e){let n,r,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=at(st(e,s,t));return{c(){n=f("div"),r=f("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){n=y(t,"DIV",{class:!0});var e=$(n);r=y(e,"UL",{class:!0});var s=$(r);for(let t=0;t<o.length;t+=1)o[t].l(s);s.forEach(u),e.forEach(u),this.h()},h(){g(r,"class","svelte-zdm7m3"),g(n,"class","menu svelte-zdm7m3")},m(t,e){i(t,n,e),l(n,r);for(let t=0;t<o.length;t+=1)o[t].m(r,null)},p(t,[e]){if(3&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const c=st(t,s,n);o[n]?o[n].p(c,e):(o[n]=at(c),o[n].c(),o[n].m(r,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=s.length}},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}const it="home";function ut(t,e,n){let{items:r=[]}=e,{selected:s=it}=e,o=[{title:"home",path:"."}],c=s;return t.$set=t=>{"items"in t&&n(2,r=t.items),"selected"in t&&n(3,s=t.selected)},t.$$.update=()=>{5&t.$$.dirty&&n(0,o=[...o,...r]),8&t.$$.dirty&&n(1,c=s||it)},[o,c,r,s]}class ft extends Z{constructor(t){super(),Q(this,t,ut,lt,c,{items:2,selected:3})}}function pt(t){let e,n,r,s,o;const c=new rt({}),p=t[4].default,d=function(t,e,n,r){if(t){const s=a(t,e,n,r);return t[0](s)}}(p,t,t[3],null),m=new ft({props:{items:t[1],selected:t[0]}});return{c(){F(c.$$.fragment),e=h(),n=f("main"),r=f("section"),d&&d.c(),s=h(),F(m.$$.fragment),this.h()},l(t){G(c.$$.fragment,t),e=b(t),n=y(t,"MAIN",{});var o=$(n);r=y(o,"SECTION",{class:!0});var a=$(r);d&&d.l(a),a.forEach(u),s=b(o),G(m.$$.fragment,o),o.forEach(u),this.h()},h(){g(r,"class","content svelte-lgm62q")},m(t,a){W(c,t,a),i(t,e,a),i(t,n,a),l(n,r),d&&d.m(r,null),l(n,s),W(m,n,null),o=!0},p(t,[e]){d&&d.p&&8&e&&d.p(a(p,t,t[3],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(p,t[3],e,null));const n={};2&e&&(n.items=t[1]),1&e&&(n.selected=t[0]),m.$set(n)},i(t){o||(V(c.$$.fragment,t),V(d,t),V(m.$$.fragment,t),o=!0)},o(t){H(c.$$.fragment,t),H(d,t),H(m.$$.fragment,t),o=!1},d(t){X(c,t),t&&u(e),t&&u(n),d&&d.d(t),X(m)}}}async function ht(t,e){const n=await this.fetch("posts.json"),{posts:r}=await n.json();return{posts:r}}function dt(t,e,n){let{posts:r=[]}=e,{segment:s}=e,o=[];R(()=>{n(1,o=r.map(t=>({title:t,path:t})))});let{$$slots:c={},$$scope:a}=e;return t.$set=t=>{"posts"in t&&n(2,r=t.posts),"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(3,a=t.$$scope)},[s,o,r,a,c]}class mt extends Z{constructor(t){super(),Q(this,t,dt,pt,c,{posts:2,segment:0})}}function gt(t){let e,n,r=t[1].stack+"";return{c(){e=f("pre"),n=p(r)},l(t){e=y(t,"PRE",{});var s=$(e);n=v(s,r),s.forEach(u)},m(t,r){i(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function $t(e){let n,r,s,o,c,a,m,w,S,_=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&gt(e);return{c(){r=h(),s=f("h1"),o=p(e[0]),c=h(),a=f("p"),m=p(_),w=h(),A&&A.c(),S=d(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=b(t),s=y(t,"H1",{class:!0});var n=$(s);o=v(n,e[0]),n.forEach(u),c=b(t),a=y(t,"P",{class:!0});var l=$(a);m=v(l,_),l.forEach(u),w=b(t),A&&A.l(t),S=d(),this.h()},h(){g(s,"class","svelte-iy9kc2"),g(a,"class","svelte-iy9kc2")},m(t,e){i(t,r,e),i(t,s,e),l(s,o),i(t,c,e),i(t,a,e),l(a,m),i(t,w,e),A&&A.m(t,e),i(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&_!==(_=t[1].message+"")&&E(m,_),t[2]&&t[1].stack?A?A.p(t,e):(A=gt(t),A.c(),A.m(S.parentNode,S)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(c),t&&u(a),t&&u(w),A&&A.d(t),t&&u(S)}}}function yt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class vt extends Z{constructor(t){super(),Q(this,t,yt,$t,c,{status:0,error:1})}}function bt(t){let n,r;const s=[t[4].props];var o=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var a=new o(c());return{c(){a&&F(a.$$.fragment),n=d()},l(t){a&&G(a.$$.fragment,t),n=d()},m(t,e){a&&W(a,t,e),i(t,n,e),r=!0},p(t,e){const r=16&e?K(s,[M(t[4].props)]):{};if(o!==(o=t[4].component)){if(a){B();const t=a;H(t.$$.fragment,1,0,()=>{X(t,1)}),J()}o?(F((a=new o(c())).$$.fragment),V(a.$$.fragment,1),W(a,n.parentNode,n)):a=null}else o&&a.$set(r)},i(t){r||(a&&V(a.$$.fragment,t),r=!0)},o(t){a&&H(a.$$.fragment,t),r=!1},d(t){t&&u(n),a&&X(a,t)}}}function Et(t){let e;const n=new vt({props:{error:t[0],status:t[1]}});return{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,r){W(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(V(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function wt(t){let e,n,r,s;const o=[Et,bt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=o[e](t),{c(){n.c(),r=d()},l(t){n.l(t),r=d()},m(t,n){c[e].m(t,n),i(t,r,n),s=!0},p(t,s){let l=e;e=a(t),e===l?c[e].p(t,s):(B(),H(c[l],1,1,()=>{c[l]=null}),J(),n=c[e],n||(n=c[e]=o[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){s||(V(n),s=!0)},o(t){H(n),s=!1},d(t){c[e].d(t),t&&u(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[wt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new mt({props:s});return{c(){F(o.$$.fragment)},l(t){G(o.$$.fragment,t)},m(t,e){W(o,t,e),n=!0},p(t,[e]){const n=12&e?K(r,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(V(o.$$.fragment,t),n=!0)},o(t){H(o.$$.fragment,t),n=!1},d(t){X(o,t)}}}function St(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:c}=e,{level0:a}=e,{level1:l=null}=e;var i,u;return i=nt,u=r,A().$$.context.set(i,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,l=t.level1)},[s,o,c,a,l,r]}class _t extends Z{constructor(t){super(),Q(this,t,St,xt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const At=[/^\/posts.json$/],Rt=[{js:()=>import("./index.01194cd8.js"),css:[]},{js:()=>import("./translucent-borders.bffbc0de.js"),css:[]}],Lt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/translucent-borders\/?$/,parts:[{i:1}]}];const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,jt,qt,Ct=!1,kt=[],Ot="{}";const Ut={page:et({}),preloading:et(null),session:et(Pt&&Pt.session)};let It,zt;Ut.session.subscribe(async t=>{if(It=t,!Ct)return;zt=!0;const e=Mt(new URL(location.href)),n=jt={},{redirect:r,props:s,branch:o}=await Xt(e);n===jt&&await Wt(r,o,s,e.page)});let Tt,Dt=null;let Bt,Jt=1;const Vt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function Kt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Mt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Pt.baseUrl))return null;let e=t.pathname.slice(Pt.baseUrl.length);if(""===e&&(e="/"),!At.some(t=>t.test(e)))for(let n=0;n<Lt.length;n+=1){const r=Lt[n],s=r.pattern.exec(e);if(s){const n=Kt(t.search),o=r.parts[r.parts.length-1],c=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:s,page:a}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}async function Gt(t,e,n,r){if(e)Bt=e;else{const t=Ft();Ht[Bt]=t,e=Bt=++Jt,Ht[Bt]=n?t:{x:0,y:0}}Bt=e,Nt&&Ut.preloading.set(!0);const s=Dt&&Dt.href===t.href?Dt.promise:Xt(t);Dt=null;const o=jt={},{redirect:c,props:a,branch:l}=await s;if(o===jt&&(await Wt(c,l,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ht[Bt]=t,t&&scrollTo(t.x,t.y)}}async function Wt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Mt(new URL(t,document.baseURI));return n?(Vt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Gt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ut.page.set(r),Ut.preloading.set(!1),Nt)Nt.$set(n);else{n.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},n.level0={props:await qt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Qt(t.nextSibling);Qt(t),Qt(e)}Nt=new _t({target:Tt,props:n,hydrate:!0})}kt=e,Ot=JSON.stringify(r.query),Ct=!0,zt=!1}async function Xt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let a;qt||(qt=Pt.preloaded[0]||ht.call(c,{host:n.host,path:n.path,query:n.query,params:{}},It));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Ot)return!0;const s=kt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,i,s)&&(u=!0),o.segments[l]=r[a+1],!e)return{segment:f};const p=l++;if(!zt&&!u&&kt[a]&&kt[a].part===e.i)return kt[a];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Rt[e.i]);let m;return m=Ct||!Pt.preloaded[a+1]?d?await d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},It):{}:Pt.preloaded[a+1],o[`level${p}`]={component:h,props:m,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}function Yt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Qt(t){t.parentNode.removeChild(t)}function Zt(t){const e=Mt(new URL(t,document.baseURI));if(e)return Dt&&t===Dt.href||function(t,e){Dt={href:t,promise:e}}(t,Xt(e)),Dt.promise}let te;function ee(t){clearTimeout(te),te=setTimeout(()=>{ne(t)},20)}function ne(t){const e=se(t.target);e&&"prefetch"===e.rel&&Zt(e.href)}function re(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=se(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Mt(s);if(o){Gt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Vt.pushState({id:Bt},"",s.href)}}function se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function oe(t){if(Ht[Bt]=Ft(),t.state){const e=Mt(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Jt=Jt+1,function(t){Bt=t}(Jt),Vt.replaceState({id:Bt},"",location.href)}var ce;ce={target:document.querySelector("#sapper")},"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),function(t){Tt=t}(ce.target),addEventListener("click",re),addEventListener("popstate",oe),addEventListener("touchstart",ne),addEventListener("mousemove",ee),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Jt},"",e);const n=new URL(location.href);if(Pt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:c,error:a}=Pt;qt||(qt=o&&o[0]),Wt(null,[],{error:a,status:c,session:s,level0:{props:qt},level1:{props:{status:c,error:a},component:vt},segments:o},{host:e,path:n,query:Kt(r),params:{}})}();const r=Mt(n);return r?Gt(r,Jt,!0,t):void 0});export{Z as S,$ as a,g as b,y as c,u as d,f as e,i as f,l as g,w as h,Q as i,F as j,G as k,m as l,W as m,t as n,R as o,H as p,x as q,X as r,c as s,V as t};