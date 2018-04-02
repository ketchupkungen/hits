const passport = require('passport');

module.exports = app =>{

	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
			prompt: 'select_account'
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/chat');
		}
	);

	// kills the cookie and logs user out
	app.get('/api/logout', (req,res)=>{
		req.logout();
		res.redirect('/')
	})
	// Shows current user
	app.get('/api/current_user', (req,res)=>{
		res.send(req.user);
	});

	app.get('/login',
	  function(req, res){
	    res.render('login');
	  });

	// If login fails, send back to Home
	app.post('/login',
	  passport.authenticate('local', { failureRedirect: '/login' }),
	  function(req, res) {
	    res.redirect('/');
	  });

	app.post(
		'/register',
		passport.authenticate('local-signup'),
		(req,res) => {
		res.json(req.user);
		}
	);



	// Shows profile page
	app.get('/profile',
	  require('connect-ensure-login').ensureLoggedIn(),
	  function(req, res){
	    res.render('profile', { user: req.user });
	  });

	// get usernames for validating whether a username is available
  app.get('/all_usernames', function(req, res) {
    User.find({'local.username': { $exists: true } }, {'local.username': 1, _id:0}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });

};