/*!
 * koa-middlewares - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

exports.resourceRouter = exports.ResourceRouter = require('koa-resource-router');
exports.bodyparser = exports.bodyParser = require('koa-bodyparser');
exports.redisStore = exports.RedisStore = require('koa-redis');
exports.conditional = require('koa-conditional-get');
exports.staticCache = require('koa-static-cache');
exports.session = require('koa-generic-session');
exports.cookieSession = require('koa-session');
exports.compress = require('koa-compress');
exports.jsonp = require('koa-safe-jsonp');
exports.onerror = require('koa-onerror');
exports.favicon = require('koa-favicon');
exports.rewrite = require('koa-rewrite');
exports.router = require('koa-router');
exports.logger = require('koa-logger');
exports.etag = require('koa-etag');
exports.csrf = require('koa-csrf');
exports.ejs = require('koa-ejs');
exports.rt = require('koa-rt');
