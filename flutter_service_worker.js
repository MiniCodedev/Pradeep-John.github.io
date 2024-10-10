'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0e230023979239950f60768702c23222",
"assets/AssetManifest.bin.json": "7711b95ff80b6409a727cee7f99b2aff",
"assets/AssetManifest.json": "76faccaa750f9765f0f6873eee8c4f15",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/images/background.jpg": "5b4f1db718a8a142799a4142405f4232",
"assets/assets/images/email.svg": "5837d3c40f8f786fe50f08af0ca0937a",
"assets/assets/images/favicon.png": "1902f22bf6b6ba455a609faec23d7bb9",
"assets/assets/images/github.svg": "49bbaade04dd0f13bd243d6ad96429e3",
"assets/assets/images/instagram.svg": "daa4ae1419f7436e2f26fb07a08179f8",
"assets/assets/images/linkedin.svg": "c0b1f596616485a024f9782f6779fabf",
"assets/assets/images/profile.jpg": "98be914c3bfe86332070d910679e850b",
"assets/assets/images/skys/sky%2520(1).jpg": "fae0065dcea4a8f32628650cea27dad7",
"assets/assets/images/skys/sky%2520(10).jpg": "b58a31daee4f51d44c5f4d50a8dbf7c4",
"assets/assets/images/skys/sky%2520(11).jpg": "33dc0c195980785d40c418401da238a6",
"assets/assets/images/skys/sky%2520(12).jpg": "361f2c47e93a630117bea0444b932934",
"assets/assets/images/skys/sky%2520(2).jpg": "fc2f81d036576f1bb3c8c0decbb6998f",
"assets/assets/images/skys/sky%2520(3).jpg": "279fb1c9cf13bb664c616b97097f8291",
"assets/assets/images/skys/sky%2520(4).jpg": "a7e303804ee577be7b2d6f37e7b2802d",
"assets/assets/images/skys/sky%2520(5).jpg": "20011b4ec8a6032be942411919977f3a",
"assets/assets/images/skys/sky%2520(6).jpg": "40ada54922fa58671f37dbbf87ae1e9c",
"assets/assets/images/skys/sky%2520(7).jpg": "916873150870278898dfd1f827172110",
"assets/assets/images/skys/sky%2520(8).jpg": "c0773c3e6c929c0080a359a87da5d4b8",
"assets/assets/images/skys/sky%2520(9).jpg": "0d2eecc53e3f9e01682ad424e5398900",
"assets/assets/images/snapchat.svg": "13793ea38d37320019bec42da61cef15",
"assets/FontManifest.json": "814eddb2c668fa622b7eb0fa27a626c2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "49c665730a20bc998a3323628efe3094",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "3497491df36c0f7ac5dcba2647f2318c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7ed4f092b4618201da96e9836720fef0",
"icons/Icon-192.png": "629ad8db0bc69e6fcc46be7962e0dac3",
"icons/Icon-512.png": "795f1822b39597b66d9d96f313d21939",
"icons/Icon-maskable-192.png": "629ad8db0bc69e6fcc46be7962e0dac3",
"icons/Icon-maskable-512.png": "795f1822b39597b66d9d96f313d21939",
"index.html": "e3e92c4f8dbd83c0bbbd9f302f618edb",
"/": "e3e92c4f8dbd83c0bbbd9f302f618edb",
"main.dart.js": "5d2242d7c22e813269d9cec4999e46ef",
"manifest.json": "3fb5a5e71d30ce9a74576b3464ba0b26",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
