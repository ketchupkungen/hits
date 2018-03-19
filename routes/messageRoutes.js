const _ = require('lodash');
const Path = require('path-parser');
// A default/integrated module in the node js system
// Get´s installed when installing node
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Message = mongoose.model('messages');

module.exports = app => {
	// Show all messages on dashboard
	app.get('/api/chat', requireLogin, async (req, res) => {
    const messages = await Message.find({ _user: req.user.id })
    	.select({
    		recipients: false
    	});

    res.send(messages);
  });

	// Make sure user is logged in to post
	app.post('/api/chat', requireLogin, async (req, res) => {
    const { user, text } = req.body;

    const message = new Message({
      user,
      text,
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      await message.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};