const express = require('express')
const app = express()
const socketio = require('socket.io')
const PORT = process.env.port || 5000
const http = require('http')
const server = http.createServer(app)
const io = socketio(server)

app.use(require('./router'))

io.on('connection', function(socket){
	console.log("Connection added")
	socket.on('disconnect', function(){
		console.log("disconnected!!!!")
	})
})

server.listen(PORT,() => {
	console.log("Listennin on port 5000")
})



