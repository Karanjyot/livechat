var express = require("express");

// App setup

var app = express();
PORT = 8080
var server = app.listen(PORT, ()=>{
    console.log(`connected to PORT ${PORT}`)
})

// static files
app.use(express.static("public"));