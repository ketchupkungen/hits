const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  //id: String,
  text:{
    type:String,
    required:true
  },
  user: Object,
  ownerId:{
    type:String,
    required:true
  }
},{timestamps:true})

const Message = mongoose.model('Message',messageSchema )

module.exports = { Message }