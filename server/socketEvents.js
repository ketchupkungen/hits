io.on('connection', (socket) => {
    console.log(socket.id);

		socket.on('disconnect', () => {
	    console.log('user disconnected')
	  });

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});