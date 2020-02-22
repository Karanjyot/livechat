var express = require("express");
var socket = require("socket.io");
var clients = {};
var db = require("./models")
// App setup

var app = express();
PORT = 8080


// static files
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// api routes

require("./routes/apiroutes.js")(app);



db.sequelize.sync().then(function(){
 var server =  app.listen(PORT, ()=>{
        console.log(`connected to PORT ${PORT}`)
    });
    // Socket setup
    var io= socket(server);

    io.on('connection', function(socket){
        console.log(`made socket connection`, socket.id);
    
        
    
    //listen for chat message

    socket.on('add-user', function(data){
        clients[data.username] = {
          "socket": socket.id
        };

        console.log(clients)
      });
    
    // socket.on('chat', data =>{
    //     io.sockets.emit('chat', data);
    // });

    socket.on('typing', data =>{

        socket.broadcast.emit('typing', data)
    });

    socket.on('private-message', data =>{
        io.sockets.connected[clients[data.to].socket].emit("private-message", data);
    });

});
});




   
