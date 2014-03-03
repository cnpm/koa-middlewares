/*!
 * koa-middlewares - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

exports.bodyParser = require('koa-bodyparser');
exports.render = require('koa-ejs');
exports.session = require('koa-sess');
exports.RedisStore = require('koa-redis');
exports.staticCache = require('koa-static-cache');
exports.rt = require('koa-rt');
exports.jsonp = require('koa-jsonp');
exports.router = require('koa-router');
exports.ResourceRouter = require('koa-resource-router');
exports.csrf = require('koa-csrf');
exports.logger = require('koa-logger');
exports.favicon = require('koa-favicon');
exports.rewrite = require('koa-rewrite');
exports.etag = require('koa-etag');
exports.fresh = require('koa-fresh');
exports.gzip = require('koa-gzip');
