const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/pro.html',
  '/all.html',
  '/mega.html',
  '/gig.html',
  '/spin.html',
  '/terr.html',
  '/style.css',
  '/terr.css',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});