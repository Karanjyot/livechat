var express = require("express");
var socket = require("socket.io");

// App setup

var app = express();
PORT = 8080
var server = app.listen(PORT, ()=>{
    console.log(`connected to PORT ${PORT}`)
})

// static files
app.use(express.static("public"));

// Socket setup
var io= socket(server);

io.on('connection', function(socket){
    console.log(`made socket connection`, socket.id);

    //listen for chat message
    socket.on('chat', data =>{
        io.sockets.emit('chat', data);
    });
});