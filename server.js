process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var conf = require('./config/config.js');
var express = require('./config/express');

var app = express();
app.listen(conf.port);
module.exports = app;

console.log('Server is running at http://localhost:' +
  conf.port);