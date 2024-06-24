'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bc4cce1675720630e6052456dc6a0666",
"index.html": "b1093030c4923289c96c6dc79710d37d",
"/": "b1093030c4923289c96c6dc79710d37d",
"main.dart.js": "9429071185e44839718362e62a0410d2",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"tmafirst.png": "ddf10149f54c609405092509b881b2f7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b77a96df26b3d51052e70acb713d183",
".git/config": "befbd690ba2bffc63644ff003cc98e82",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/6c9e70d8b013f7cf2c43f94e674811d7d3dfda": "44fe827cc874ce5832e66741f8ba358e",
".git/objects/04/5ffa4e7b494c87755c28d46e2f6fd9551cca14": "7c0c91dfa6ca35cf3330353bb3a1bb5a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/5a/59cd05b987e64bfc6b6ab66048996a4f237e76": "7d94af65801c266a116791e12c01a568",
".git/objects/9c/228237fe6109503f312cec390ffdae137f5e01": "281f571d3d19562130919240dd39b808",
".git/objects/a3/bc744c90f307018de21edd7d0e8b929702f80b": "a1a982c0479d5d49924da003c991b21a",
".git/objects/d9/f247bb52b991a49473493b13d8e98c14958a33": "9a6122b528248bbef66f780fb8b58357",
".git/objects/d9/6a7949cb242bc3de544ac9256a8637ac153e36": "8558ad9983ff9375e9f912919ecd8d42",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b3/352746bcde4e313668e56ebe1ab2bb9b35656c": "0a47fb3c6b4631a3e6dfa6f50ac934c0",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/696e20fa6115459dda81b4ef2fab89def425e2": "9e6de8be76d5c1867f968204b94bc990",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/52dcb9483e754b29ca83bf82a48c6c32e3b218": "5f399cf6f279bf6b32875223fc194a0f",
".git/objects/c8/3f37a125d8b56be7bb8f8712579610d70b4600": "e2c36c800e3515e6a040d17a919d3fad",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/b5f83bec794705b1e723356c9bd9f157409ca9": "fd9e355bf14d7b194638deca115635a4",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/44f5d3cb994d12038c0ad1c44f860f99e5d0f1": "1a90504b9d185521d5f0b636dc3fe494",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/53f98ef0145a5ae7a80751da765f2c55587fdf": "f3181fe38291115700716864e6654cad",
".git/objects/17/4170958699ee2942c93a497f7907d6303e346a": "73d6f46dfa794959f6d10a9a7fced243",
".git/objects/7b/2b0e0582d36d4898582103ce5c034fbe87bd6a": "c6bad666af4022a09a927211119e9036",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/1bf48117d35513a21f1e1435045cbdb516849c": "c8dc7482faa2f3d5d9360fe4dc66c93b",
".git/objects/2a/7ce5031c8f746aee305538648c9c1746dd8eb2": "9afa689443cf1d580d8ec726aa5712d8",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/0c567202d6011b8ae11fda0ac448727a269e32": "3908f245efd1a8a1a18b5a5229cb0d50",
".git/objects/36/53e92ad7ec5ab43f08834b53611c6b1826b584": "7fda500f6fcc0ab628176f238a1b2c5f",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/8b8e9cb1ac386db51e38d9bf30b4e024f54bcf": "cc5f2d917e59ed6ded420d19d822e929",
".git/objects/62/d9aef5f5b5e3240b4ce9daee89992b21e94bf9": "55cce262efe0ea3d2c405b6046a6ca7f",
".git/objects/98/5be63edd55200208221279c8c0074621c9496e": "25336a7d607b835c90b93473810851ce",
".git/objects/3f/66d7d1e0f1f163139443b8b84da44de7e4af2c": "1c2ea0ddd267c0176740608edea5182b",
".git/objects/5e/916f84253f73c49c696bbf012fc547ae1c5e4d": "087e97a07edf13f8c862044b5e1018e9",
".git/objects/01/da270304aca90ac22b85fe7242629af42b740e": "faa4f61963bfa6cb355102be17efea85",
".git/objects/06/68c6e5e682e81324667fd363514ed204e4075b": "c37c5f69c5df7e34e13984a2e0fd2cf9",
".git/objects/90/34cbb39159dda330a5f9b9d7ff8bdb2ce52a5d": "a356917193237efc66b1240e4b7c9141",
".git/objects/d3/f2dae38484acfe91272dafa07d4664b982e577": "1194c92f5f0ba37538660b676af11749",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/b55cb4034ad78fa6aecfeff0b2ea4f15ff29ce": "0163d2ee58b7c2919ca5c79503c0c9cc",
".git/objects/b7/54c454eebcf2a367b508c7cd50e5f55682d304": "da5848e2aaf2c867c57288e1c0df9bfa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b92d3066c8eadd97acde6da0ef4b372cb3bc58": "56a95c97340b248c6a0fb4986e428025",
".git/objects/fa/ba0be322ceda5742d06d09ec2a00722e0cd07e": "fac21aff6ccfada13ab407e8ed205c6a",
".git/objects/ff/2b61c482a768221ba600158f5a99b3d2f6189d": "4e0ccff2c44dc20b167de430fec17323",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/3a08556b3aa79c044bb40f959d2c0b7ab484ec": "0d8d01936263ae229368c08bfa187f12",
".git/objects/83/34d2ff0ccbe543685f4e98a3ddea68dcf1f6b7": "4dae94a3ade5e9c614a91d240cf4d886",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/84/ab44a0bffcadc4ea2d54cce9eb601711a6207e": "ccc2d1aef5e746c9f96365454810ac5b",
".git/objects/4a/7ff00ccfbc2ec481364c26a6ae409c14f021b7": "e75eb0dcd6c70694ff2c14c7fda23ec3",
".git/objects/24/149f800b271284d888bf8aa8a595abde1a596f": "9c65f09a52090ee432374573390ea944",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/f35683290e76d00ad57c953f3da99d082f63f4": "69e4e8811041466a295124480f6efa83",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/f0baeb3262679b859151edab1c37191f90a956": "9f53cbcec7f2da4e20fd1b85d29147b9",
".git/objects/2e/9631139c0840927b6abf5f92862408d117994d": "b64e7791d9558584dca553a54a367ffe",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/cc208eff3fc5fe6429b56c20eddfe25d469e31": "c25d3b9d209bdab1c41358ded526d7fb",
".git/objects/8b/57906793ac510c1c8ef566e3843bb506c6bf5a": "e95747dced7c555534a12e6acf76ad50",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8d18604d64b708bddd912da87142d12",
".git/logs/refs/heads/master": "b8d18604d64b708bddd912da87142d12",
".git/logs/refs/remotes/origin/master": "7b4f6e873c6c2bcef19c3fac1f4cb36c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "962e8610ce1eb87047efcb73df080ed9",
".git/refs/remotes/origin/master": "b5daf65fc6b9959caa8ed77fc1667686",
".git/index": "c9bad125c2d82a80ab6ed7aee4367f8c",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a53eedb8a68062f5efac43a5f5917e36",
"topconnect-manifest.json": "4cba118b423bd6837f6578ede00a4939",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "7861d1c8d89b2e92d922d4b525d2afe6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
