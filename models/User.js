var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Item = require('../models/Item');
var Grocer = require('../models/Grocer');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,

  facebook: { type: String, unique: true, sparse: true },
  twitter: { type: String, unique: true, sparse: true },
  google: { type: String, unique: true, sparse: true },
  github: { type: String, unique: true, sparse: true },
  tokens: Array,

  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  },

  items: Array,
  grocers: Array

});

/**
 * Hash the password for security.
 */

userSchema.pre('save', function(next) {
  var user = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

/**
 *  Get a URL to a user's Gravatar email.
 */

userSchema.methods.gravatar = function(size, defaults) {
  if (!size) size = 200;
  if (!defaults) defaults = 'retro';
  var md5 = crypto.createHash('md5').update(this.email);
  return 'https://gravatar.com/avatar/' + md5.digest('hex').toString() + '?s=' + size + '&d=' + defaults;
};

userSchema.methods.addItem = function(data, cb) {
  var user = this;

  var item = new Item({
    name: data.name
  });

  user.items.push(item);
  user.save(function(err) {
    if (err) return next(err);
    cb();
  });
};


userSchema.methods.addGrocer = function(data, cb) {
  var user = this;

  var grocer = new Grocer({
    name: data.name
  });

  user.grocers.push(grocer);
  user.save(function(err) {
    if (err) return next(err);
    cb();
  });
};

module.exports = mongoose.model('User', userSchema);
