exports = module.exports = (io) => {
	io.on('connection',(socket) => {
		socket.join('General');
		socket.on('chat mounted', (user)=>{
			socket.emit('receive socket', socket.id)
		});
		socket.on('new message', (data) =>{
			socket.emit('new message', data)
		});
		socket.on('disconnect', () => {
			console.log('user disconnected')
		});
	})

	/*io.on('connection', (socket) => {
    console.log('socket.id');

		socket.on('disconnect', () => {
	    console.log('user disconnected')
	  });

    socket.on('SEND_MESSAGE', (data) => {
      io.emit('RECEIVE_MESSAGE', data);
    })
	});*/
}