const getCacheVersion = () => new Date().toISOString().slice(0, 10);
let CACHE_VERSION = getCacheVersion();

const getCacheName = () => `cache-${CACHE_VERSION}`;
let CASHE_NAME = getCacheName();

function updateDynamicCache() {
  if (CACHE_VERSION !== getCacheVersion()) {
    CACHE_VERSION = getCacheVersion();
    CASHE_NAME = getCacheName();
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName !== CASHE_NAME;
          })
          .forEach(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    });
  }
}

setInterval(updateDynamicCache, 60 * 1000);

const staticAssets = [
  "./",
  "./index.html",
  "./images/icons/icon-128x128.png",
  "./images/icons/icon-192x192.png",
  "./main.js",
  "./vendors~main.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then(function (cache) {
        return cache.addAll(staticAssets);
      })
      .then(() => {
        console.log("Service worker has been installed");
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName !== CASHE_NAME;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(CASHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
