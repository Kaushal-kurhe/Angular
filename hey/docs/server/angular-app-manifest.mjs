
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
    'index.csr.html': {size: 5007, hash: '8627fc75920af5f00ffcd402f0a433bae9e59e1d5a1959525db640c74e3214f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5547, hash: '69c68c98609d97473312f3c7b9ba52eb9367e6603f4027a42031150f97e563e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5294, hash: '059f52f9692497a91880fde31ef46b579fc4068acf6f90a7a5c7c89b4d988bb6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11679, hash: '680d2b03f5ba2c62318441c7a324e82f8246cc038d02608fff9a0be4b91b831b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'movie/index.html': {size: 11520, hash: '5fc8985afa1a6dfd3983277ee0a85019a950115810081ff4fd4f75ffeb5eadab', text: () => import('./assets-chunks/movie_index_html.mjs').then(m => m.default)}
  },
};
