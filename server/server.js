const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI);
//process.env.PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000;

const { User } = require('./models/user');
const { Message } = require('./models/message');
const { auth } = require('./middleware/auth')

app.use(bodyParser.json());
app.use(cookieParser());

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

app.get('/api/getMessage',(req,res)=>{
    let id = req.query.id;

    Message.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/messages',(req,res)=>{
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Message.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})


app.get('/api/getSender',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname,
            email:doc.email,
            username:doc.username,
            phone:doc.phone,
            image:doc.image,
            career:doc.career
        })
    })
})

app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})

app.get('/api/user_posts',(req,res)=>{
    Message.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})


// POST //
app.post('/api/message',(req,res)=>{
    const message = new Message(req.body)

    message.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            messageId: doc._id
        })
    })
})

app.post('/api/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
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
app.post('/api/edit-message',(req,res)=>{
    Message.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

// DELETE //

app.delete('/api/delete_message',(req,res)=>{
    let id = req.query.id;

    Message.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

app.delete('/api/delete_user',(req,res)=>{
    let id = req.query.id;

    User.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})


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
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(PORT);

/*const server = app.listen(process.env.PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server listening on port: %s', process.env.PORT);
});

io = socketIo(server);

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected')
    });

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});*/
//const io = new socketIo(server, {path: '/api/chat'})
//const socketEvents = require('./socketEvents')(io);

