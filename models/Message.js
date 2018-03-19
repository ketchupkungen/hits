const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const messageSchema = new Schema({
  user: String,
  text: String,
	// Relationship field. Therefore the '_'something
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date
});

mongoose.model('messages', messageSchema);