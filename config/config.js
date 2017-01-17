var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
module.exports = function (app, envConfig) {
    app.set('views', path.join(envConfig.rootPath, 'views'));
    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(envConfig.rootPath, 'public')));
};