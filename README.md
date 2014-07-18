koa-middlewares [![Dependency Status](https://gemnasium.com/cnpm/koa-middlewares.svg)](https://gemnasium.com/dead-horse/koa-middlewares)
===============

easy way to use some small but useful koa middlewares.

**PRs** are welcome, but only for those small and general middlewares.

## install

```
npm install koa-middlewares --save
```

## middlewares

* [koa-bodyparser](https://github.com/dead-horse/koa-body-parser)
* [koa-csrf](https://github.com/koajs/csrf)
* [koa-ejs](https://github.com/dead-horse/koa-ejs)
* [koa-compress](https://github.com/koajs/koa-compress)
* [koa-conditional-get](https://github.com/koajs/koa-conditional-get)
* [koa-etag](https://github.com/koajs/etag)
* [koa-favicon](https://github.com/koajs/favicon)
* [koa-safe-jsonp](https://github.com/koajs/koa-safe-jsonp)
* [koa-logger](https://github.com/koajs/logger)
* [koa-redis](https://github.com/dead-horse/koa-redis)
* [koa-resource-router](https://github.com/alexmingoia/koa-resource-router)
* [koa-rewrite](https://github.com/koajs/rewrite)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-rt](https://github.com/dead-horse/koa-rt)
* [koa-session](https://github.com/koajs/session)
* [koa-generic-session](https://github.com/koajs/generic-session)
* [koa-static-cache](https://github.com/koajs/static-cache)
* [koa-onerror](https://github.com/koajs/onerror)

see [exports](https://github.com/dead-horse/koa-middlewares/blob/master/index.js)

## Usage

```js

var koa = require('koa');
var middlewares = require('koa-middlewares');

var app = koa();

app.use(middlewares.bodyParser());
app.use(middlewares.router(app));
app.use(middlewares.conditional());
app.use(middlewares.etag());
app.use(middlewares.compress());
middlewares.csrf(app);

app.use(function *() {
  this.body = 'hello koa-middlewares';
});

app.listen(7001);
```

## Middlewares Quick Guide

* **koa-bodyparser**: post body parser,
for `application/json` and `application/x-www-form-urlencoded`.

```
app.use(middlewares.bodyParser({
  limit: '10mb'
}));

app.use(function *(next) {
  var postBody = this.request.body;
});
```

* **koa-csrf**: CSRF tokens.

```
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

```
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

```
app.use(middlewares.conditional());
app.use(middlewares.etag());
```

* **koa-favicon**: Bounce favicon requests with a 404.

```
app.use(middlewares.favicon());
```

* **koa-safe-jsonp**: A safe jsonp plugins for koa.

```
middlewares.jsonp(app);

app.use(function* () {
  this.jsonp = {foo: 'bar'};
});
```

* **koa-logger**: Development style logger.

```
app.use(middlewares.logger());
```

* **koa-session**: cookie base session.

```
app.use(middlewares.cookieSession());
```

* **koa-generic-session**: A session like connect with memory,
has friendly APIs for work with other Stores such as `redis`, `mongo`.
* **koa-redis**: Work togather with `koa-generic-session`, provide a redis store from koa-sess.

```
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

```
app.use(middlewares.router(app));
app.get('/', function *() {
  this.body = 'Hello koa-router';
});
```

* **koa-resource-router**: RESTful resource routing for koa.

```
var users = new middlewares.Resource('users');
app.use(users.middleware());

app.get('/users', function *() {
  this.body = [{name: 'Lee'}, {name: 'Han'}];
});
```

* **koa-rewrite**: URL rewrite middleware.

```
app.use(middlewares.rewrite('/js/*', '/public/assets/js/$1'));
```

* **koa-rt**: Log response time, support custom with microtime.

```
var microtime = require('microtime');
app.use(middlewares.rt({
  timer: microtime
}));
```

* **koa-static-cache**: Static file serving from memory.

```
app.use(middlewares.staticCache(path.join(__dirname, 'public'), {
  buffer: true,
  maxAge: 60 * 60 * 24 * 7,
  dir: path.join(rootdir, 'public')
}));
```

* **koa-compress**: Compress middleware for Koa, support `gzip` and `deflate`

```
var app = koa()
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))
```

* **koa-onerror**: Error handler

```
var app = koa()
onerror(app);
```

## License
MIT
