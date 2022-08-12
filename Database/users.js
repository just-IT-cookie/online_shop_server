const mongoose = require('mongoose');
const crypto = require("crypto");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  avatar: {
    type: String
  },
  name: {
    type: String
  },
  surname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  permissions: {
    type: String,
    default: 'Base user'
  },
  salt: {
      type: String,
      required: true
  },
  hashedPassword: {
      type: String,
      required: true
  },
  createdDate: {
      type: Date,
      default: Date.now
  },
});

userSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password.toString()).digest('hex');
}

userSchema.methods.checkPassword = function(password) {
  return this.hashedPassword === crypto.createHmac('sha1', this.salt).update(password.toString()).digest('hex');
}

userSchema.virtual('password')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = Math.random().toFixed(6) + '';
        this.hashedPassword = this.encryptPassword(password)
    })
    .get(function() {
        return this._plainPassword;
    })

module.exports = mongoose.model('user', userSchema)