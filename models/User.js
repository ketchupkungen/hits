//const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
  username: String,
  imageUrl: String

  //googleName: String,
  //googleImageUrl: String
});

const User = mongoose.model('users',userSchema);

module.exports = User;
//mongoose.model('users', userSchema);