var express = require('./config/express');

var app = express();
app.listen(process.env.PORT);
module.exports = app;

console.log('Server running at http://localhost:' +
  process.env.PORT);