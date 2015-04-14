module.exports = {
  // Development configuration options
  port: 3000,
  db: 'mongodb://localhost/mean',
  sessionSecret: 'devSeshSecret',
  facebook: {
    clientID: '447277535442137',
    clientSecret: '0a08e802c12f4185de3035ca8974db81',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'UMlz7S9AVIR3cozPZqS6BGRpF',
    clientSecret: '8hLMP2u0wpncVUS7jLFYDv8gbU8xqLdIrqc7XwkbE5t5UKzRAN',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '879637434868-ui7bt5qvrbol7l37ro9jg5mh9mcrgd16.apps.googleusercontent.com',
    clientSecret: '5sSXwzqRG84OCrzW4mwdaeG4',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};