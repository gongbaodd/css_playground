function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function $(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return f(e)}function x(t){return v(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function b(t,e){(null!=e||t.value)&&(t.value=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let P;function y(t){P=t}function A(){if(!P)throw new Error("Function called outside component initialization");return P}function R(t){A().$$.on_mount.push(t)}const L=[],j=[],C=[],w=[],O=Promise.resolve();let k=!1;function D(t){C.push(t)}let H=!1;const N=new Set;function q(){if(!H){H=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];y(e),U(e.$$)}for(L.length=0;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];N.has(e)||(N.add(e),e())}C.length=0}while(L.length);for(;w.length;)w.pop()();k=!1,H=!1,N.clear()}}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const z=new Set;let I;function T(){I={r:0,c:[],p:I}}function B(){I.r||s(I.c),I=I.p}function J(t,e){t&&t.i&&(z.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),I.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,r),D(()=>{const e=i.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(D)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(L.push(t),k||(k=!0,O.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,o,a,i,c,l=[-1]){const p=P;y(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&Y(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=_(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),W(e,n.target,n.anchor),q()}y(p)}class Z{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const tt=[];function et(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const nt={};class rt extends Z{constructor(t){super(),Q(this,t,null,null,a,{})}}function st(t,e,n){const r=t.slice();return r[4]=e[n],r}function ot(t){let e,n,r,s,o,a=t[4].title+"";return{c(){e=p("li"),n=p("a"),r=f(a),o=d(),this.h()},l(t){e=$(t,"LI",{class:!0});var s=_(e);n=$(s,"A",{href:!0,class:!0});var i=_(n);r=v(i,a),i.forEach(u),o=x(s),s.forEach(u),this.h()},h(){g(n,"href",s=t[4].path),g(n,"class","svelte-zdm7m3"),g(e,"class","selected svelte-zdm7m3")},m(t,s){l(t,e,s),c(e,n),c(n,r),c(e,o)},p(t,e){1&e&&a!==(a=t[4].title+"")&&E(r,a),1&e&&s!==(s=t[4].path)&&g(n,"href",s)},d(t){t&&u(e)}}}function at(t){let e,n,r,s,o,a=t[4].title+"";return{c(){e=p("li"),n=p("a"),r=f(a),o=d(),this.h()},l(t){e=$(t,"LI",{class:!0});var s=_(e);n=$(s,"A",{href:!0,rel:!0,class:!0});var i=_(n);r=v(i,a),i.forEach(u),o=x(s),s.forEach(u),this.h()},h(){g(n,"href",s=t[4].path),g(n,"rel","prefetch"),g(n,"class","svelte-zdm7m3"),g(e,"class","svelte-zdm7m3")},m(t,s){l(t,e,s),c(e,n),c(n,r),c(e,o)},p(t,e){1&e&&a!==(a=t[4].title+"")&&E(r,a),1&e&&s!==(s=t[4].path)&&g(n,"href",s)},d(t){t&&u(e)}}}function it(t){let e;function n(t,e){return t[1]!==t[4].title?at:ot}let r=n(t),s=r(t);return{c(){s.c(),e=h()},l(t){s.l(t),e=h()},m(t,n){s.m(t,n),l(t,e,n)},p(t,o){r===(r=n(t))&&s?s.p(t,o):(s.d(1),s=r(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&u(e)}}}function ct(e){let n,r,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=it(st(e,s,t));return{c(){n=p("div"),r=p("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){n=$(t,"DIV",{class:!0});var e=_(n);r=$(e,"UL",{class:!0});var s=_(r);for(let t=0;t<o.length;t+=1)o[t].l(s);s.forEach(u),e.forEach(u),this.h()},h(){g(r,"class","svelte-zdm7m3"),g(n,"class","menu svelte-zdm7m3")},m(t,e){l(t,n,e),c(n,r);for(let t=0;t<o.length;t+=1)o[t].m(r,null)},p(t,[e]){if(3&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const a=st(t,s,n);o[n]?o[n].p(a,e):(o[n]=it(a),o[n].c(),o[n].m(r,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=s.length}},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}const lt="home";function ut(t,e,n){let{items:r=[]}=e,{selected:s=lt}=e,o=[{title:"home",path:"."}],a=s;return t.$set=t=>{"items"in t&&n(2,r=t.items),"selected"in t&&n(3,s=t.selected)},t.$$.update=()=>{5&t.$$.dirty&&n(0,o=[...o,...r]),8&t.$$.dirty&&n(1,a=s||lt)},[o,a,r,s]}class pt extends Z{constructor(t){super(),Q(this,t,ut,ct,a,{items:2,selected:3})}}function ft(t){let e,n,r,s,o;const a=new rt({}),f=t[4].default,h=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(f,t,t[3],null),m=new pt({props:{items:t[1],selected:t[0]}});return{c(){F(a.$$.fragment),e=d(),n=p("main"),r=p("section"),h&&h.c(),s=d(),F(m.$$.fragment),this.h()},l(t){G(a.$$.fragment,t),e=x(t),n=$(t,"MAIN",{});var o=_(n);r=$(o,"SECTION",{class:!0});var i=_(r);h&&h.l(i),i.forEach(u),s=x(o),G(m.$$.fragment,o),o.forEach(u),this.h()},h(){g(r,"class","content svelte-lgm62q")},m(t,i){W(a,t,i),l(t,e,i),l(t,n,i),c(n,r),h&&h.m(r,null),c(n,s),W(m,n,null),o=!0},p(t,[e]){h&&h.p&&8&e&&h.p(i(f,t,t[3],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(f,t[3],e,null));const n={};2&e&&(n.items=t[1]),1&e&&(n.selected=t[0]),m.$set(n)},i(t){o||(J(a.$$.fragment,t),J(h,t),J(m.$$.fragment,t),o=!0)},o(t){V(a.$$.fragment,t),V(h,t),V(m.$$.fragment,t),o=!1},d(t){X(a,t),t&&u(e),t&&u(n),h&&h.d(t),X(m)}}}async function dt(t,e){const n=await this.fetch("posts.json"),{posts:r}=await n.json();return{posts:r}}function ht(t,e,n){let{posts:r=[]}=e,{segment:s}=e,o=[];R(()=>{n(1,o=r.map(t=>({title:t,path:t})))});let{$$slots:a={},$$scope:i}=e;return t.$set=t=>{"posts"in t&&n(2,r=t.posts),"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(3,i=t.$$scope)},[s,o,r,i,a]}class mt extends Z{constructor(t){super(),Q(this,t,ht,ft,a,{posts:2,segment:0})}}function gt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=f(r)},l(t){e=$(t,"PRE",{});var s=_(e);n=v(s,r),s.forEach(u)},m(t,r){l(t,e,r),c(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function _t(e){let n,r,s,o,a,i,m,b,P,y=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&gt(e);return{c(){r=d(),s=p("h1"),o=f(e[0]),a=d(),i=p("p"),m=f(y),b=d(),A&&A.c(),P=h(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=x(t),s=$(t,"H1",{class:!0});var n=_(s);o=v(n,e[0]),n.forEach(u),a=x(t),i=$(t,"P",{class:!0});var c=_(i);m=v(c,y),c.forEach(u),b=x(t),A&&A.l(t),P=h(),this.h()},h(){g(s,"class","svelte-iy9kc2"),g(i,"class","svelte-iy9kc2")},m(t,e){l(t,r,e),l(t,s,e),c(s,o),l(t,a,e),l(t,i,e),c(i,m),l(t,b,e),A&&A.m(t,e),l(t,P,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&y!==(y=t[1].message+"")&&E(m,y),t[2]&&t[1].stack?A?A.p(t,e):(A=gt(t),A.c(),A.m(P.parentNode,P)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(a),t&&u(i),t&&u(b),A&&A.d(t),t&&u(P)}}}function $t(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class vt extends Z{constructor(t){super(),Q(this,t,$t,_t,a,{status:0,error:1})}}function xt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var i=new o(a());return{c(){i&&F(i.$$.fragment),n=h()},l(t){i&&G(i.$$.fragment,t),n=h()},m(t,e){i&&W(i,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?K(s,[M(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){T();const t=i;V(t.$$.fragment,1,0,()=>{X(t,1)}),B()}o?(F((i=new o(a())).$$.fragment),J(i.$$.fragment,1),W(i,n.parentNode,n)):i=null}else o&&i.$set(r)},i(t){r||(i&&J(i.$$.fragment,t),r=!0)},o(t){i&&V(i.$$.fragment,t),r=!1},d(t){t&&u(n),i&&X(i,t)}}}function Et(t){let e;const n=new vt({props:{error:t[0],status:t[1]}});return{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,r){W(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function bt(t){let e,n,r,s;const o=[Et,xt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=h()},l(t){n.l(t),r=h()},m(t,n){a[e].m(t,n),l(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(T(),V(a[c],1,1,()=>{a[c]=null}),B(),n=a[e],n||(n=a[e]=o[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){s||(J(n),s=!0)},o(t){V(n),s=!1},d(t){a[e].d(t),t&&u(r)}}}function St(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new mt({props:s});return{c(){F(o.$$.fragment)},l(t){G(o.$$.fragment,t)},m(t,e){W(o,t,e),n=!0},p(t,[e]){const n=12&e?K(r,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(J(o.$$.fragment,t),n=!0)},o(t){V(o.$$.fragment,t),n=!1},d(t){X(o,t)}}}function Pt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e;var l,u;return l=nt,u=r,A().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1)},[s,o,a,i,c,r]}class yt extends Z{constructor(t){super(),Q(this,t,Pt,St,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const At=[/^\/posts.json$/],Rt=[{js:()=>import("./index.d34ba6fd.js"),css:[]},{js:()=>import("./2x03-vintage-envelope-border-image.85ece3cd.js"),css:[]},{js:()=>import("./2x01-continouse-image-border.2064aaa3.js"),css:[]},{js:()=>import("./0x02-extended-position-bg.d6092ef3.js"),css:[]},{js:()=>import("./0x00-translucent-borders.efc8dd1c.js"),css:[]},{js:()=>import("./1x00-horizontal-stripes.f385342f.js"),css:[]},{js:()=>import("./1x03-diagnal-60-stripes.dddf000c.js"),css:[]},{js:()=>import("./0x03-background-origin.e6ccf447.js"),css:[]},{js:()=>import("./0x01-multiple-borders.717d771d.js"),css:[]},{js:()=>import("./1x01-vertical-stripes.883fef82.js"),css:[]},{js:()=>import("./1x07-checkerboard-svg.50868f56.js"),css:[]},{js:()=>import("./2x02-vintage-envelope.66bf3aec.js"),css:[]},{js:()=>import("./0x04-background-calc.a3b2a292.js"),css:[]},{js:()=>import("./1x02-diagnal-stripes.eb81abd6.js"),css:[]},{js:()=>import("./0x05-inner-rounding.def711bf.js"),css:[]},{js:()=>import("./3x00-parallelograms.4ae0b6ab.js"),css:[]},{js:()=>import("./1x06-checkerboard.0ddff6f2.js"),css:[]},{js:()=>import("./2x00-border-image.a8bd3946.js"),css:[]},{js:()=>import("./1x04-blueprint.f3eddaa6.js"),css:[]},{js:()=>import("./2x04-ant-match.aa99758e.js"),css:[]},{js:()=>import("./3x01-diamond.f7c6c2a2.js"),css:[]},{js:()=>import("./1x05-polka.8ef8ba0a.js"),css:[]}],Lt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/2x03-vintage-envelope-border-image\/?$/,parts:[{i:1}]},{pattern:/^\/2x01-continouse-image-border\/?$/,parts:[{i:2}]},{pattern:/^\/0x02-extended-position-bg\/?$/,parts:[{i:3}]},{pattern:/^\/0x00-translucent-borders\/?$/,parts:[{i:4}]},{pattern:/^\/1x00-horizontal-stripes\/?$/,parts:[{i:5}]},{pattern:/^\/1x03-diagnal-60-stripes\/?$/,parts:[{i:6}]},{pattern:/^\/0x03-background-origin\/?$/,parts:[{i:7}]},{pattern:/^\/0x01-multiple-borders\/?$/,parts:[{i:8}]},{pattern:/^\/1x01-vertical-stripes\/?$/,parts:[{i:9}]},{pattern:/^\/1x07-checkerboard-svg\/?$/,parts:[{i:10}]},{pattern:/^\/2x02-vintage-envelope\/?$/,parts:[{i:11}]},{pattern:/^\/0x04-background-calc\/?$/,parts:[{i:12}]},{pattern:/^\/1x02-diagnal-stripes\/?$/,parts:[{i:13}]},{pattern:/^\/0x05-inner-rounding\/?$/,parts:[{i:14}]},{pattern:/^\/3x00-parallelograms\/?$/,parts:[{i:15}]},{pattern:/^\/1x06-checkerboard\/?$/,parts:[{i:16}]},{pattern:/^\/2x00-border-image\/?$/,parts:[{i:17}]},{pattern:/^\/1x04-blueprint\/?$/,parts:[{i:18}]},{pattern:/^\/2x04-ant-match\/?$/,parts:[{i:19}]},{pattern:/^\/3x01-diamond\/?$/,parts:[{i:20}]},{pattern:/^\/1x05-polka\/?$/,parts:[{i:21}]}];const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ct,wt,Ot,kt=!1,Dt=[],Ht="{}";const Nt={page:et({}),preloading:et(null),session:et(jt&&jt.session)};let qt,Ut;Nt.session.subscribe(async t=>{if(qt=t,!kt)return;Ut=!0;const e=Mt(new URL(location.href)),n=wt={},{redirect:r,props:s,branch:o}=await Xt(e);n===wt&&await Wt(r,o,s,e.page)});let zt,It=null;let Tt,Bt=1;const Jt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Vt={};function Kt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Mt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!At.some(t=>t.test(e)))for(let n=0;n<Lt.length;n+=1){const r=Lt[n],s=r.pattern.exec(e);if(s){const n=Kt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}async function Gt(t,e,n,r){if(e)Tt=e;else{const t=Ft();Vt[Tt]=t,e=Tt=++Bt,Vt[Tt]=n?t:{x:0,y:0}}Tt=e,Ct&&Nt.preloading.set(!0);const s=It&&It.href===t.href?It.promise:Xt(t);It=null;const o=wt={},{redirect:a,props:i,branch:c}=await s;if(o===wt&&(await Wt(a,c,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Vt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Vt[Tt]=t,t&&scrollTo(t.x,t.y)}}async function Wt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Mt(new URL(t,document.baseURI));return n?(Jt[e.replaceState?"replaceState":"pushState"]({id:Tt},"",t),Gt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),Ct)Ct.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await Ot};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Qt(t.nextSibling);Qt(t),Qt(e)}Ct=new yt({target:zt,props:n,hydrate:!0})}Dt=e,Ht=JSON.stringify(r.query),kt=!0,Ut=!1}async function Xt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let i;Ot||(Ot=jt.preloaded[0]||dt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt));let c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const p=r[i];if(function(t,e,n,r){if(r!==Ht)return!0;const s=Dt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,p,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:p};const f=c++;if(!Ut&&!u&&Dt[i]&&Dt[i].part===e.i)return Dt[i];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Rt[e.i]);let m;return m=kt||!jt.preloaded[i+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:jt.preloaded[i+1],o[`level${f}`]={component:d,props:m,segment:p,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function Yt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Qt(t){t.parentNode.removeChild(t)}function Zt(t){const e=Mt(new URL(t,document.baseURI));if(e)return It&&t===It.href||function(t,e){It={href:t,promise:e}}(t,Xt(e)),It.promise}let te;function ee(t){clearTimeout(te),te=setTimeout(()=>{ne(t)},20)}function ne(t){const e=se(t.target);e&&"prefetch"===e.rel&&Zt(e.href)}function re(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=se(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Mt(s);if(o){Gt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Jt.pushState({id:Tt},"",s.href)}}function se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function oe(t){if(Vt[Tt]=Ft(),t.state){const e=Mt(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Tt=t}(Bt),Jt.replaceState({id:Tt},"",location.href)}var ae;Sentry.init({dsn:"https://eb561649e0434bfb83ca2019d8518b8b@sentry.io/5175761"}),ae={target:document.querySelector("#sapper")},"scrollRestoration"in Jt&&(Jt.scrollRestoration="manual"),function(t){zt=t}(ae.target),addEventListener("click",re),addEventListener("popstate",oe),addEventListener("touchstart",ne),addEventListener("mousemove",ee),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Jt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=jt;Ot||(Ot=o&&o[0]),Wt(null,[],{error:i,status:a,session:s,level0:{props:Ot},level1:{props:{status:a,error:i},component:vt},segments:o},{host:e,path:n,query:Kt(r),params:{}})}();const r=Mt(n);return r?Gt(r,Bt,!0,t):void 0});export{Z as S,G as a,V as b,F as c,u as d,X as e,p as f,$ as g,_ as h,Q as i,g as j,l as k,c as l,W as m,t as n,b as o,m as p,S as q,R as r,a as s,J as t,d as u,x as v,f as w,v as x};
