!function(){"use strict";const e=["client/client.d472c9bc.js","client/index.89dd9557.js","client/2x03-vintage-envelope-border-image.047b508f.js","client/Borders.ca59fc9a.js","client/2x01-continouse-image-border.4adb2c57.js","client/0x02-extended-position-bg.758b6283.js","client/0x00-translucent-borders.45250564.js","client/1x00-horizontal-stripes.34eaa05c.js","client/Backgrounds.7b09fa1e.js","client/1x03-diagnal-60-stripes.6c632d0a.js","client/0x03-background-origin.cefc93ce.js","client/0x01-multiple-borders.1b6e642f.js","client/1x01-vertical-stripes.402e4337.js","client/1x07-checkerboard-svg.ccf936c4.js","client/2x02-vintage-envelope.3c328858.js","client/0x04-background-calc.414d4f0f.js","client/1x02-diagnal-stripes.6d596a66.js","client/0x05-inner-rounding.3f60118a.js","client/3x00-parallelograms.9474b228.js","client/1x06-checkerboard.9b0c900c.js","client/2x00-border-image.fdde7a00.js","client/1x04-blueprint.508d0707.js","client/2x04-ant-match.5887d39c.js","client/3x01-diamond.37a58541.js","client/4x00-typing.098d4b4e.js","client/1x05-polka.c72fbb2b.js","client/client.1bcb7a2c.js"].concat(["service-worker-index.html","code-pirate.svg","favicon.ico","icons/icon-144x144.png","icons/icon-192x192.png","icons/icon-256x256.png","icons/icon-384x384.png","icons/icon-48x48.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","manifest.json","stone-art.jpg"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1632174758616").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1632174758616"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1632174758616").then(async n=>{try{const c=await fetch(e.request);return n.put(e.request,c.clone()),c}catch(c){const t=await n.match(e.request);if(t)return t;throw c}}))))})}();
