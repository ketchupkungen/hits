const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  text:{
    type:String,
    required:true
  },
  ownerId:{
    type:String,
    required:true
  }
},{timestamps:true})

const Message = mongoose.model('Message',messageSchema )

module.exports = { Message }