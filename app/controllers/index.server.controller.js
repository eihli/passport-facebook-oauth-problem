exports.render = function(req, res) {
  res.send('Hello World! Your environment is: ' + process.env.NODE_ENV);
};