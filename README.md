koa-middlewares [![Dependency Status](https://gemnasium.com/dead-horse/koa-middlewares.png)](https://gemnasium.com/dead-horse/koa-middlewares)
===============

easy way to use some useful koa middlewares

## install

```
npm install koa-middlewares --save
```

## middlewares

```
"koa-bodyparser": "0.0.2",
"koa-csrf": "1.0.1",
"koa-ejs": "0.0.1",
"koa-etag": "1.2.3",
"koa-favicon": "1.0.1",
"koa-fresh": "0.0.1",
"koa-jsonp": "0.0.3",
"koa-logger": "1.2.0",
"koa-redis": "0.1.0",
"koa-resource-router": "0.2.0",
"koa-rewrite": "1.1.0",
"koa-router": "3.0.2",
"koa-rt": "0.0.2",
"koa-sess": "0.1.0",
"koa-static-cache": "1.0.4"
```

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

## License
MIT
