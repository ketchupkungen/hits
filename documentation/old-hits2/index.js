const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const SocketIo = require('socket.io');
require('./models/User');
require('./models/Message');

const app = express();

const login = require('./config/passport');
passport.use('passport', login);

// pass the authenticaion checker middleware
//const authCheckMiddleware = require('./middlewares/auth-check');
//app.use('/api', authCheckMiddleware);

mongoose.connect(keys.mongoURI);

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.use(bodyParser.json());
app.use(
    cookieSession({
		// I want this cookie to last for 30 days before it expires
		maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Login routes
require('./routes/authRoutes')(app);
// Survey routes
require('./routes/messageRoutes')(app);
// Message routes
//require('./routes/messageRoutes')(app);
// Channel routes
//require('./routes/channelRoutes')(app);

// Config for behavior in production mode
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	// Fine return the index.html file
	app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// If there isn´t enviroment variable that has been already defined by heroku
// go ahead and asign tht varible to PORT, otherwise use 5000
//const PORT = process.env.PORT || 5000;
//app.listen(PORT);
process.env.PORT = process.env.PORT || 5000;
const server = app.listen(process.env.PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server listening on port: %s', process.env.PORT);
});

const io = new SocketIo(server, {path: '/api/chat'})
const socketEvents = require('./config/socketEvents')(io);
