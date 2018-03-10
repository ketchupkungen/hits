const _ = require('lodash');
const Path = require('path-parser');
// A default/integrated module in the node js system
// Get´s installed when installing node
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = app => {
	// Show all surveys on dashboard
	app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
    	.select({
    		recipients: false
    	});

    res.send(surveys);
  });

	// Make sure user is logged in, also make sure user has enough credits
	app.post('/api/chat', requireLogin, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};