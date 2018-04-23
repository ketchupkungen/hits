const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');
const SALT_I = 10;

const userSchema = mongoose.Schema({
	name:{
		type:String,
		trim:true,
		maxlength:20
	},
	lastname:{
		type:String,
		trim:true,
		maxlength:20
	},
	email:{
		type:String,
		required:true,
		trim:true,
		unique:true,
		lowercase:true,
		maxlength:30
	},
	username:{
		type:String,
		required:true,
		trim:true,
		unique:true,
		lowercase:true,
		maxlength:20
	},
	phone: {
		type:String,
		trim:true,
		unique:true,
		maxlength:20
	},
	career:{
		type:String,
		trim:true,
		maxlength:100
	},
	image:{
		type:String,
		trim:true
	},
	password:{
		type:String,
		required:true,
		trim:true,
		minlength:6
	},
	// Role is for what rights, guest, regular user or admin
	// Not done yet.
	role:{
		type:Number,
		trim:true,
		default:0
	},
	token:{
		type:String
	}
},{timestamps:true})

userSchema.pre('save',function(next){
	var user = this;

	if(user.isModified('password')){
		bcrypt.genSalt(SALT_I,function(err,salt){
			if(err) return next(err);

			bcrypt.hash(user.password,salt,function(err,hash){
				if(err) return next(err);
				user.password = hash;
				next();
			})
		})
	} else {
		next()
	}
})

userSchema.methods.comparePassword = function(candidatePassword,cb){
	bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
		if(err) return cb(err);
		cb(null,isMatch);
	})
}

userSchema.methods.generateToken = function(cb){
	var user = this;
	var token = jwt.sign(user._id.toHexString(),keys.SECRET);

	user.token = token;
	user.save(function(err,user){
		if(err) return cb(err);
		cb(null,user)
	})
}

userSchema.statics.findByToken = function(token,cb){
	var user  = this;

	jwt.verify(token,keys.SECRET,function(err,decode){
		user.findOne({"_id":decode,"token":token},function(err,user){
			if(err) return cb(err);
			cb(null,user)
		})
	})
}


userSchema.methods.deleteToken = function(token,cb){
	var user = this;

	user.update({$unset:{token:1}},(err,user)=>{
		if(err) return cb(err);
		cb(null,user)
	})
}


const User = mongoose.model('User',userSchema)

module.exports = User