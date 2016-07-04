'use strict';

const koa = require('koa');
const middlewares = require('./');

const app = koa();

app.use(middlewares.bodyParser());
app.use(middlewares.gzip({minLength: 100}));
app.use(middlewares.router(app));
app.use(middlewares.fresh());
app.use(middlewares.etag());
middlewares.csrf(app);

app.use(function *() {
  this.body = 'hello koa-middlewares';
});

app.listen(7001);
