koa-middlewares [![Dependency Status](https://gemnasium.com/dead-horse/koa-middlewares.png)](https://gemnasium.com/dead-horse/koa-middlewares)
===============

easy way to use some small but useful koa middlewares.

**PRs** are welcome, but only for those small and general middlewares.

## install

```
npm install koa-middlewares --save
```

## middlewares

* [koa-bodyparser@0.0.2](https://github.com/dead-horse/koa-body-parser)
* [koa-csrf@1.0.1](https://github.com/koajs/csrf)
* [koa-ejs@0.0.1](https://github.com/dead-horse/koa-ejs)
* [koa-etag@1.2.3](https://github.com/koajs/etag)
* [koa-favicon@1.0.1](https://github.com/koajs/favicon)
* [koa-fresh@0.0.1](https://github.com/fengmk2/koa-fresh)
* [koa-jsonp@0.0.3](https://github.com/kilianc/koa-jsonp)
* [koa-logger@1.2.0](https://github.com/koajs/logger)
* [koa-redis@0.1.0](https://github.com/dead-horse/koa-redis)
* [koa-resource-router@0.2.0](https://github.com/alexmingoia/koa-resource-router)
* [koa-rewrite@1.1.0](https://github.com/koajs/rewrite)
* [koa-router@3.0.2](https://github.com/alexmingoia/koa-router)
* [koa-rt@0.0.2](https://github.com/dead-horse/koa-rt)
* [koa-sess@0.1.0](https://github.com/dead-horse/koa-session)
* [koa-static-cache@1.0.4](https://github.com/koajs/static-cache)


## Usage

```js

var koa = require('koa');
var middlewares = require('koa-middlewares');

var app = koa();

app.use(middlewares.bodyParser());
app.use(middlewares.jsonp());
app.use(middlewares.router(app));
app.use(middlewares.fresh());
app.use(middlewares.etag());
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
    return yield next;
  }

  this.assertCsrf();
  yield next;
});
```

* **koa-ejs**: ejs view render middleware. support all feature of ejs.

```
middewares.render(app, {
  root: path.join(__dirname, 'view')
});

app.use(function *() {
  yield this.render('page.html', {foo: 'bar'});
});
```

* **koa-etag**: ETag support for Koa responses.
* **koa-fresh**: HTTP response freshness testing middleware base on node-fresh.
It works togather with koa-etag.

```
app.use(middlewares.fresh());
app.use(middlewares.etag());
```

* **koa-favicon**: Bounce favicon requests with a 404.

```
app.use(middlewares.favicon());
```

* **koa-jsonp**: A koajs streaming friendly JSONP middleware that supports GET/POST JSONP requests.

```
app.use(middlewares.jsonp());
```

* **koa-logger**: Development style logger.

```
app.use(middlewares.logger());
```

* **koa-sess**: A session like connect with memory,
has friendly APIs for work with other Stores such as `redis`, `mongo`.
* **koa-redis**: Work togather with `koa-sess`, provide a redis store from koa-sess.

```
app.use(middlewares.session({
  store: middlewares.RedisStore()
}));

app.use(function *() {
  this.session = {foo: 'bar'};
  this.body = this.session;
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

## License
MIT
