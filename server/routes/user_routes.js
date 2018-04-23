const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = app => {

	// GET
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

	// DELETE
	app.delete('/api/delete_user',(req,res)=>{
		let id = req.query.id;

		User.findByIdAndRemove(id,(err,data)=>{
			if(err) return res.status(400).send(err);
			res.json(true)
		})
	})
}