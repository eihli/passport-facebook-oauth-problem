module.exports = {
  // Development configuration options
  port: 3000,
  db: 'mongodb://localhost/mean',
  sessionSecret: 'devSeshSecret',
  facebook: {
    clientID: '447277535442137',
    clientSecret: '0a08e802c12f4185de3035ca8974db81',
    callbackURL: 'http://192.168.1.145:3000/oauth/facebook/callback'
  }
};