process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  conf = require('./config/config'),
  express = require('./config/express'),
  passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(conf.port);
module.exports = app;

console.log('Server is running at http://localhost:' +
  conf.port);