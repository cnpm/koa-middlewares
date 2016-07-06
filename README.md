koa-middlewares
===============

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/koa-middlewares.svg?style=flat
[npm-url]: https://npmjs.org/package/koa-middlewares
[travis-image]: https://img.shields.io/travis/cnpm/koa-middlewares.svg?style=flat
[travis-url]: https://travis-ci.org/cnpm/koa-middlewares
[david-image]: https://img.shields.io/david/cnpm/koa-middlewares.svg?style=flat
[david-url]: https://david-dm.org/cnpm/koa-middlewares
[snyk-image]: https://snyk.io/test/npm/koa-middlewares/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/koa-middlewares
[download-image]: https://img.shields.io/npm/dm/koa-middlewares.svg?style=flat-square
[download-url]: https://npmjs.org/package/koa-middlewares

easy way to use some small but useful koa middlewares.

**PRs** are welcome, but only for those small and general middlewares.

## install

```bash
npm install koa-middlewares --save
```

## middlewares

* [koa-bodyparser](https://github.com/dead-horse/koa-body-parser)
* [koa-compress](https://github.com/koajs/koa-compress)
* [koa-conditional-get](https://github.com/koajs/koa-conditional-get)
* [koa-csrf](https://github.com/koajs/csrf)
* [koa-ejs](https://github.com/dead-horse/koa-ejs)
* [koa-etag](https://github.com/koajs/etag)
* [koa-favicon](https://github.com/koajs/favicon)
* [koa-generic-session](https://github.com/koajs/generic-session)
* [koa-logger](https://github.com/koajs/logger)
* [koa-onerror](https://github.com/koajs/onerror)
* [koa-redis](https://github.com/dead-horse/koa-redis)
* [koa-resource-router](https://github.com/alexmingoia/koa-resource-router)
* [koa-rewrite](https://github.com/koajs/rewrite)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-rt](https://github.com/dead-horse/koa-rt)
* [koa-safe-jsonp](https://github.com/koajs/koa-safe-jsonp)
* [koa-session](https://github.com/koajs/session)
* [koa-static-cache](https://github.com/koajs/static-cache)

see [exports](index.js)

## Usage

```js

var koa = require('koa');
var middlewares = require('koa-middlewares');
var router = middlewares.router();

var app = koa();

router.get('/', function *(){
  this.body = 'hello koa-middlewares';
});

app.use(middlewares.bodyParser());
app.use(middlewares.conditional());
app.use(middlewares.etag());
app.use(middlewares.compress());
middlewares.csrf(app);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(7001);
```

## Middlewares Quick Guide

* **koa-bodyparser**: post body parser,
for `application/json` and `application/x-www-form-urlencoded`.

```js
app.use(middlewares.bodyParser({
  limit: '10mb'
}));

app.use(function *(next) {
  var postBody = this.request.body;
});
```

* **koa-csrf**: CSRF tokens.

```js
middlewares.csrf(app);
app.use(function *checkCsrf(next) {
  if (this.method === 'GET' ||
      this.method === 'HEAD' ||
      this.method === 'OPTIONS') {
    return yield *next;
  }

  this.assertCsrf();
  yield next;
});
```

* **koa-ejs**: ejs view render middleware. support all feature of ejs.

```js
middlewares.render(app, {
  root: path.join(__dirname, 'view')
});

app.use(function *() {
  yield this.render('page.html', {foo: 'bar'});
});
```

* **koa-etag**: ETag support for Koa responses.
* **koa-conditional-get**: HTTP response freshness testing middleware base on node-fresh.
use it upstream from etag.

```js
app.use(middlewares.conditional());
app.use(middlewares.etag());
```

* **koa-favicon**: Bounce favicon requests with a 404.

```js
app.use(middlewares.favicon());
```

* **koa-safe-jsonp**: A safe jsonp plugins for koa.

```js
middlewares.jsonp(app);

app.use(function* () {
  this.jsonp = {foo: 'bar'};
});
```

* **koa-logger**: Development style logger.

```js
app.use(middlewares.logger());
```

* **koa-session**: cookie base session.

```js
app.use(middlewares.cookieSession());
```

* **koa-generic-session**: A session like connect with memory,
has friendly APIs for work with other Stores such as `redis`, `mongo`.
* **koa-redis**: Work togather with `koa-generic-session`, provide a redis store from koa-sess.

```js
app.use(middlewares.session({
  store: middlewares.RedisStore(),
  defer: true
}));

app.use(function *() {
  var session = yield this.session;
  session.foo = 'bar';
  this.body = this.session.foo;
});
```

* **koa-router**: Provide express-style routing using app.get, app.put, app.post.

```js
var router = middlewares.router();

router.get('/', function *() {
  this.body = 'Hello koa-router';
});

app.use(router.routes());
app.use(router.allowedMethods());
```

* **koa-resource-router**: RESTful resource routing for koa.

```js
var users = new middlewares.Resource('users');
app.use(users.middleware());

app.get('/users', function *() {
  this.body = [{name: 'Lee'}, {name: 'Han'}];
});
```

* **koa-rewrite**: URL rewrite middleware.

```js
app.use(middlewares.rewrite('/js/*', '/public/assets/js/$1'));
```

* **koa-rt**: Log response time, support custom with microtime.

```js
var microtime = require('microtime');
app.use(middlewares.rt({
  timer: microtime
}));
```

* **koa-static-cache**: Static file serving from memory.

```js
app.use(middlewares.staticCache(path.join(__dirname, 'public'), {
  buffer: true,
  maxAge: 60 * 60 * 24 * 7,
  dir: path.join(rootdir, 'public')
}));
```

* **koa-compress**: Compress middleware for Koa, support `gzip` and `deflate`

```js
var app = koa()
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))
```

* **koa-onerror**: Error handler

```js
var app = koa()
onerror(app);
```

## License

[MIT](LICENSE)
