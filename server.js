var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

// add sockets io
var io = require('socket.io')(http);

app.use(express.static(__dirname+ '/public'));

// on connection event
io.on('connection',function(){
	console.log('user connected via socket io');
})

http.listen(PORT,function(){
	console.log('Server listening on port '+PORT);	
})


