const express = require('express'),
			app = express(),
			bodyParser = require('body-parser'),
			cookieParser = require('cookie-parser'),
			mongoose = require('mongoose'),
			keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
process.env.PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cookieParser());

// api routes
require('./routes/auth_routes')(app);
require('./routes/user_routes')(app);
require('./routes/message_routes')(app);

// Config for behavior in production mode
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('client/build'));

		// Express will serve up the index.html file
		// if it doesn't recognize the route
		const path = require('path');
		// Return the index.html file
		app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
	});
}

app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('server listening on port: %s', process.env.PORT );
});