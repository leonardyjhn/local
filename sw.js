const CACHE_NAME = 'rifas-sucre-cache-v3'; // Incrementa la versión
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/js/html2canvas.min.js',
  '/css/all.min.css',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-solid-900.ttf',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-brands-400.ttf',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-regular-400.ttf',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-192.png',
  '/icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache-first strategy
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
