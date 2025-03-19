
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: 'C:/Program Files/Git/Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/movie"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5007, hash: '8ba7ead247b2e7dffa22bbe044679ce9c7ccc184e12750b486385b3f68ac6ac4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5547, hash: 'd75b84c1741ced9812bb79758cf2b59a0820b8f152f14ffc366db4e6a5cdf96a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5294, hash: 'a525fefe7f62265b2ded82b442b5977d059d37f1dccabd7b9a6ef9698be1ae94', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'movie/index.html': {size: 11520, hash: '2e921a5032218db508550c5157edd68358636c589f9085e41a36d90151101aba', text: () => import('./assets-chunks/movie_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11724, hash: '555725def7e86940d8fb83bfe8bab2a6666fdf25e1d497255c8e40155d528563', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}
  },
};
