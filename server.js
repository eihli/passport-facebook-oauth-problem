process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();
app.listen(process.env.PORT);
module.exports = app;

console.log('Server is running at http://localhost:' +
  process.env.PORT);