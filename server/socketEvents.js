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
}