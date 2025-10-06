'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "e2b7d7d46722c7015db94ba8c59c1cd5",
"icons/Icon-maskable-512.png": "e2b7d7d46722c7015db94ba8c59c1cd5",
"icons/Icon-192.png": "36496fdc341d783ec0d2e7e7733b9a9a",
"icons/Icon-maskable-192.png": "36496fdc341d783ec0d2e7e7733b9a9a",
"manifest.json": "8920e13f314c1f7f14844099ff3071cb",
"index.html": "e805ad337d7f15fa923192b840e75059",
"/": "e805ad337d7f15fa923192b840e75059",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "cfc6a2c95880c7deb4fd6f94c13d5d4e",
"assets/assets/translations/en.json": "8103f2bd7d5429e20075699da9e102ee",
"assets/assets/translations/sw.json": "e91e9ec9a9332a327f46414d4e956d24",
"assets/images/qrcode.png": "521ac29c2efa8f37472e398e75340433",
"assets/images/family.png": "64a369a6fbcbbd0d7d0f438791fdefb0",
"assets/images/group_icon.png": "9e16cdc95c3ac396c96df5b3dc660093",
"assets/images/passcode.png": "3ee3f45eff4858d484a01534cac1c23b",
"assets/images/cash.png": "a23352ad28485d5a26d371eeb46ec6ac",
"assets/images/group_ico.png": "ed2b5628adf180a15f16a06ed3b5a313",
"assets/images/tick.png": "de69ec60eaf0d94def66bc24de5ffc72",
"assets/images/user_icon.png": "eb76b7a31ff519d439005af24cce66f9",
"assets/images/back.png": "6e367c647ef30606123b365bc91e8fdd",
"assets/images/icon.png": "e2b7d7d46722c7015db94ba8c59c1cd5",
"assets/images/placeholder.gif": "baeaf0c7f02777839e58eed62cc714c4",
"assets/images/password.png": "47bf547408b8fb7d367a58716e3d0f0d",
"assets/images/icon_warning.png": "6ef94b77690f0ae1a2198be1dc0d7b73",
"assets/images/electricity.png": "f0db7ceace372ec6f6675799ae1a1175",
"assets/images/airtel_logo.png": "88cfe79cae7576a71a3a29111b0d493f",
"assets/images/question.png": "3fd3c7d5069313154d50ad4962de6f68",
"assets/images/tcb_logo.png": "47f36669dd0dda215f91af841f88499c",
"assets/images/icon.jpeg": "d6a8e69dc291f6bb4337f63f48a16117",
"assets/images/warning_icon.png": "e137c60e2ea6aa935b5ca39e13c42e9b",
"assets/images/money.png": "00e56676e23522eee0ccea3c67e65388",
"assets/images/member.png": "fa5d75127443c4368a6685db86794b4f",
"assets/images/refinery.png": "93474827a85b26945dd9dafe2cfec289",
"assets/images/filter_variant.png": "1631cc9d137f072e772858a0a31b1227",
"assets/images/peoples.png": "e9a7b72d7d1023fb9e8788a6749c9692",
"assets/images/group.png": "a3b90c725a63edb53bbfdcb004492b66",
"assets/images/loan.png": "ba79792e203171a8bc7c9f05af48e04a",
"assets/fonts/FiraSans-LightItalic.ttf": "6d15364fb3883d074dea8096229942a7",
"assets/fonts/FiraSans-ExtraLightItalic.ttf": "c606dc72dd989c9b294d4377851f78a0",
"assets/fonts/FiraSans-Regular.ttf": "895f5b025a6cc4924b263f6beb06c777",
"assets/fonts/FiraSans-Light.ttf": "034229170eceddca9e300e8d2a4c8208",
"assets/fonts/MaterialIcons-Regular.otf": "e9637b759813407cace62e361d1014b2",
"assets/fonts/FiraSans-ThinItalic.ttf": "68cf3ce6260664b260e5474d7169cd39",
"assets/fonts/FiraSans-ExtraLight.ttf": "882c94daf9a5a47d4450feef12da7c22",
"assets/fonts/FiraSans-Thin.ttf": "979e1f11f340455e5a96e81b0e7de352",
"assets/NOTICES": "314897aa5a6dd70e09a0ea6ff0631889",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/FontManifest.json": "44d30559de9af592c6d449118f2c7e52",
"assets/AssetManifest.bin": "e3fcc4093ccff95356ed648323028946",
"assets/AssetManifest.json": "6c3c61f4421a70605b12656ebbbdae94",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "e2b7d7d46722c7015db94ba8c59c1cd5",
"flutter_bootstrap.js": "7d864091a752969a16f80c1901aad67d",
"version.json": "eb71e2347b76bd8a524df526406d88c5",
"main.dart.js": "98a813aeaaaac99e5f107a14f4836d21"};
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
