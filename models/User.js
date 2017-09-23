const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const UserSchema = Schema({
  username: String,
  password: String
});

// methods ======================
// generating a hash
UserSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', UserSchema);
