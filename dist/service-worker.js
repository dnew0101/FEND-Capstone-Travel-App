if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>s(e,t),c={module:{uri:t},exports:o,require:f};i[t]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"47d2620139d200b7fc2ad0d48fa77c24"},{url:"bundle.css",revision:"f8ff4583457bdcbeff262f2151e3e402"},{url:"main.js",revision:"8a4abd1ffae823848355d2a3e41634ea"},{url:"main.js.LICENSE.txt",revision:"1d121bc5614259f832f5cb9652eec4af"}],{})}));