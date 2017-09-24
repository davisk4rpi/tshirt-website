const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String
});

// methods ======================
// generating a hash
// Using function notation to preserve the context of this
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
// Using function notation to preserve the context of this
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', UserSchema);
