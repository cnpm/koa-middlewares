/*!
 * koa-middlewares - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

exports.bodyparser = exports.bodyParser = require('koa-bodyparser');
exports.ejs = require('koa-ejs');
exports.session = require('koa-generic-session');
exports.cookieSession = require('koa-session');
exports.redisStore = exports.RedisStore = require('koa-redis');
exports.staticCache = require('koa-static-cache');
exports.rt = require('koa-rt');
exports.jsonp = require('koa-safe-jsonp');
exports.router = require('koa-router');
exports.resourceRouter = exports.ResourceRouter = require('koa-resource-router');
exports.csrf = require('koa-csrf');
exports.logger = require('koa-logger');
exports.favicon = require('koa-favicon');
exports.rewrite = require('koa-rewrite');
exports.etag = require('koa-etag');
exports.compress = require('koa-compress');
exports.conditional = require('koa-conditional-get');
exports.onerror = require('koa-onerror');
