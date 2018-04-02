const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  //user:
  text: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date
});

mongoose.model('messages', messageSchema);