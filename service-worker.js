!function(){"use strict";const e=["client/client.88534193.js","client/index.dff6104c.js","client/translucent-borders.061196b1.js","client/client.44b367af.js"].concat(["service-worker-index.html","favicon.ico","icons/icon-144x144.png","icons/icon-192x192.png","icons/icon-256x256.png","icons/icon-384x384.png","icons/icon-48x48.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","manifest.json"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1585329628502").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1585329628502"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&n.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585329628502").then(async n=>{try{const t=await fetch(e.request);return n.put(e.request,t.clone()),t}catch(t){const c=await n.match(e.request);if(c)return c;throw t}}))))})}();
