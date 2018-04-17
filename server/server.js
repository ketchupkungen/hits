const express = require('express'),
			app = express(),
			path = require('path'),
			bodyParser = require('body-parser'),
			cookieParser = require('cookie-parser'),
			mongoose = require('mongoose'),
			socketIo = require('socket.io'),
			keys = require('./config/keys'),
			cors = require('cors');

mongoose.connect(keys.mongoURI);
process.env.PORT = process.env.PORT || 5000;

const { User } = require('./models/user'),
		  { Message } = require('./models/message'),
 			{ auth } = require('./middleware/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// GET //
app.get('/api/auth',auth,(req,res)=>{
	res.json({
		isAuth:true,
		id:req.user._id,
		email:req.user.email,
		name:req.user.name,
		lastname:req.user.lastname,
		username:req.user.username,
		phone:req.user.phone,
		image:req.user.image,
		career:req.user.career
	})
});

app.get('/api/logout',auth,(req,res)=>{
	req.user.deleteToken(req.token,(err,user)=>{
		if(err) return res.status(400).send(err);
		res.sendStatus(200)
	})
})

app.get('/api/get_message',(req,res)=>{
	let id = req.query.id;

	Message.findById(id,(err,data)=>{
		if(err) return res.status(400).send(err);
		res.send(data);
	})
})

// Prototype for rendering old messages on scroll
//
/*app.get('/api/messages',(req,res)=>{
	let skip = parseInt(req.query.skip);
	let limit = parseInt(req.query.limit);

	Message.find().skip(skip).limit(limit).exec((err,data)=>{
		if(err) return res.status(400).send(err);
			res.send(data);
	})
})*/

// WORKS
app.get('/api/messages',(req,res)=>{
	Message.find({},(err,messages)=>{
		if(err) return res.status(400).send(err);
		res.status(200).send(messages)
	})
})

app.get('/api/get_sender',(req,res)=>{
	let id = req.query.id;

	User.findById(id,(err,data)=>{
		if(err) return res.status(400).send(err);
		res.json({
			name: data.name,
			lastname: data.lastname,
			email:data.email,
			username:data.username,
			phone:data.phone,
			image:data.image,
			career:data.career
		})
	})
})

app.get('/api/users',(req,res)=>{
	User.find({},(err,users)=>{
		if(err) return res.status(400).send(err);
		res.status(200).send(users)
	})
})

/*app.get('/api/user_posts',(req,res)=>{
	Message.find({ownerId:req.query.user}).exec((err,data)=>{
		if(err) return res.status(400).send(err);
		res.send(data)
	})
})*/


// POST //
app.post('/api/message',(req,res)=>{
	const message = new Message(req.body)

	message.save((err,data)=>{
		if(err) return res.status(400).send(err);
		res.status(200).json({
			post:true,
			messageId: data._id
		})
	})
})

app.post('/api/register',(req,res)=>{
	const user = new User(req.body);

	user.save((err,data)=>{
		if(err) return res.json({success:false});
		res.status(200).json({
			success:true,
			user:data
		})
	})
})

app.post('/api/login',(req,res)=>{
	User.findOne({'username':req.body.username},(err,user)=>{
		if(!user) return res.json({isAuth:false,message:'Sorry, user was not found'})

		user.comparePassword(req.body.password,(err,isMatch)=>{
			if(!isMatch) return res.json({
				isAuth:false,
				message:'Wrong password'
			});

			user.generateToken((err,user)=>{
				if(err) return res.status(400).send(err);
				res.cookie('auth',user.token).json({
					isAuth:true,
					id:user._id,
					username:user.username
				})
			})
		})
	})
})



// UPDATE //
app.post('/api/edit_message',(req,res)=>{
	Message.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,data)=>{
		if(err) return res.status(400).send(err);
		res.json({
			success:true,
			data
		})
	})
})

// DELETE //

app.delete('/api/delete_message',(req,res)=>{
	let id = req.query.id;

	Message.findByIdAndRemove(id,(err,data)=>{
		if(err) return res.status(400).send(err);
		res.json(true)
	})
})

app.delete('/api/delete_user',(req,res)=>{
	let id = req.query.id;

	User.findByIdAndRemove(id,(err,data)=>{
		if(err) return res.status(400).send(err);
		res.json(true)
	})
})

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

const server = app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('server listening on port: %s', process.env.PORT );
});

const io = new socketIo(server, {path: '/api/chat'})
const socketEvents = require('./socketEvents')(io);