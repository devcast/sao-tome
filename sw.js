importScripts('/bower_components/sw-toolbox/sw-toolbox.js');

var VERSION = 4

self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting())
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim())
});

toolbox.router.get('/(images|js|css|bower_components)/*', toolbox.fastest, {
    cache: {
        name: 'blog-assets-' + VERSION,
        maxEntries: 31
    }
});

toolbox.router.get('/:slug?', toolbox.fastest, {
    cache: {
        name: 'blog-pages-' + VERSION,
        maxEntries: 31
    }
});

// Google APIs
// currently not working as expected
// https://github.com/GoogleChrome/sw-toolbox/issues/125
toolbox.router.get('/*', toolbox.fastest, {
    debug: true,
    origin: /https:\/\/fonts.(googleapis|gstatic).com/,
    cache: {
        name: 'google-fonts-' + VERSION,
        maxEntries: 31,
    }
});
