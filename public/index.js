var socket = io.connect("http://localhost:8080");

//DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('btn');
var output = document.getElementById('output');


// Emit events

btn.addEventListener("click", ()=>{

    socket.emit('chat', {
        message: mesasge.value,
        handle:handle.value
    });
});