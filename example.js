/*!
 * koa-middlewares - example.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var koa = require('koa');
var middlewares = require('./');

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
