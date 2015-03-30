var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password) {
        return password.length >= 6;
      },
      'Password should be longer'
    ],
    required: true
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.post('save', function(next) {
  if (this.isNew) {
    console.log('A new user was created.');
  } else {
    console.log('A user updated its details');
  }
});

UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  var splitName = fullName.split(' ');
  this.firstName = splitName[0] || '';
  this.lastName = splitName[1] || '';
});

mongoose.model('User', UserSchema);