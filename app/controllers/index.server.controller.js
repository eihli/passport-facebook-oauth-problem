exports.render = function(req, res) {
  res.render('index', {
    title: 'Hello to all the World!',
    userFullName: req.user? req.user.fullName : ''
  });
};