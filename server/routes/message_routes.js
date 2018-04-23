const mongoose = require('mongoose');
const Message = require('../models/message');

module.exports = app => {

	// GET
	app.get('/api/get_message',(req,res)=>{
		let id = req.query.id;

		Message.findById(id,(err,data)=>{
			if(err) return res.status(400).send(err);
			res.send(data);
		})
	})

	app.get('/api/messages',(req,res)=>{
		Message.find({},(err,data)=>{
			if(err) return res.status(400).send(err);
			res.status(200).json(data)
		})
	})

	// POST
	app.post('/api/message',(req,res)=>{
		const message = new Message(req.body)

		message.save((err,data)=>{
			if(err) return res.status(400).send(err);
			res.status(200).json(data);
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
}

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

/*app.post('/api/message',(req,res)=>{
	const message = new Message(req.body)

	message.save((err,data)=>{
		if(err) return res.status(400).send(err);
		res.status(200).json(data);
	})
})*/