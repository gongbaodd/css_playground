import{S as s,i as t,s as e,e as a,c as r,a as n,d as l,b as c,f as o,g as i,h as u,l as f,n as d,o as p,j as h,k as m,m as $,t as x,p as y,r as g}from"./client.c3c487c6.js";function v(s){let t,e,p;return{c(){t=a("div"),e=a("textarea"),this.h()},l(s){t=r(s,"DIV",{class:!0});var a=n(t);e=r(a,"TEXTAREA",{class:!0,style:!0,rows:!0}),n(e).forEach(l),a.forEach(l),this.h()},h(){c(e,"class","block svelte-v20xe1"),c(e,"style",s[0]),c(e,"rows","5"),c(t,"class","border svelte-v20xe1")},m(a,r,n){o(a,t,r),i(t,e),u(e,s[0]),n&&p(),p=f(e,"input",s[2])},p(s,[t]){1&t&&c(e,"style",s[0]),1&t&&u(e,s[0])},i:d,o:d,d(s){s&&l(t),p()}}}function b(s,t,e){let a,{style:r}=t;return p(()=>{e(0,a=r)}),s.$set=s=>{"style"in s&&e(1,r=s.style)},[a,r,function(){a=this.value,e(0,a)}]}class E extends s{constructor(s){super(),t(this,s,b,v,e,{style:1})}}function j(s){let t;const e=new E({props:{style:s[0]}});return{c(){h(e.$$.fragment)},l(s){m(e.$$.fragment,s)},m(s,a){$(e,s,a),t=!0},p:d,i(s){t||(x(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){g(e,s)}}}function k(s){return[["border: 10px solid hsla(0, 0%, 100%, .5);","background-clip: padding-box;"].join("")]}export default class extends s{constructor(s){super(),t(this,s,k,j,e,{})}}