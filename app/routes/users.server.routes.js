var users = require('../../app/controllers/users.server.controller'),
  passport = require('passport');

module.exports = function(app) {
  app.route('/signup')
  .get(users.renderSignup)
  .post(users.signup)

  app.route('/signin')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true
    }));

  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/signin',
    scope: ['email']
  }));
  app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/signin',
    successRedirect: '/',
  }), function (req, res) {
    res.send(JSON.stringify(req.user.access_token));
  }, function(err, req, res, next) {
    if (err) {
      passport.authenticate('facebook', {authType: 'reauthenticate'});
    }
  });

  app.get('/signout', users.signout);
  app.param('userId', users.userByID);
};