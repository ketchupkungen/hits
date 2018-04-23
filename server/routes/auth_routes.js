const mongoose = require('mongoose');
const User = require('../models/user'),
 			auth = require('../middleware/auth');

module.exports = app => {

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

	// POST
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
}