const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');

const User = mongoose.model('users');

// Takes user model and put some
// identifying piece of information into the cookie
passport.serializeUser((user,done)=>{
	done(null, user.id);
});

// Pulls it back out and turns it back into a user,
// sometime in the future
passport.deserializeUser((id,done)=>{
	User.findById(id)
		.then(user => {
			done(null,user);
		})
});

// console.developers.google.com
// require the key.js file with client keys
// Cookies based authentication

// Google login
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			/*const existingUser = await User.findOne({ googleId: profile.id });

			if(existingUser){
				// I already have a record with the given profile ID
				return done(null, existingUser);
			}*/
      if(profile._json.hd === "gmail.com"){
        // find or create user in database, etc
        await User.findOne({ googleId: profile.id }).done(done);
      }else{
        // fail
        done(new Error("Invalid host domain"));
      }
			// I dont´t have a user record with this ID,
			// make a new record
			const user = await new User({
        googleId: profile.id,
        username: profile.displayName,
        imageUrl: profile._json.image.url
      }).save();
			done(null,user);
			// Testing logs
			/*console.log('access token', accessToken);
			console.log('refresh token', refreshToken);
			console.log('access Token', profile);*/
		}
	)
);


// Local Login
module.exports = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  // find a user by email address
  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
});

// Local register
module.exports = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});