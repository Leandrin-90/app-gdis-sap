const CACHE='onde-esta-v1.64-sem-carregando';
const CORE=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./dispositivos.json','./nd_search.json','./alimentadores.bin','./alimentadores-meta.json','./devicesGeo.bin','./tabelas_nd/ND-5.1.pdf','./tabelas_nd/ND-5.2.pdf'];
const ND=[];
for(let i=1;i<=24;i++) ND.push('./nd_pages/nd51-'+String(i).padStart(2,'0')+'.jpg');
for(let i=1;i<=38;i++) ND.push('./nd_pages/nd52-'+String(i).padStart(2,'0')+'.jpg');
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE.concat(ND))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
