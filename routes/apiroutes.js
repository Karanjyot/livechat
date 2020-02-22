var db = require("../models");

module.exports = function(app){

    app.post("/api/post", function(req, res){

        console.log(req.body)
        db.Chat.create({
            sender: req.body.sender,
            reciever:req.body.reciever,
            chats: req.body.chat
        }).then(function(dbUser){
        
        })

        
    })

    app.post("/api/chats", function(req,res){
            var chatsArr = []
     

        db.Chat.findAll({
            where: {
              reciever: req.body.reciever,
              sender: req.body.sender
            }
          })
            .then(function(dbChat) {
                for (var i=0; i<dbChat.length; i++){
            
                    chatsArr.push(dbChat[i].chats)
    
                   
                }
                res.end(JSON.stringify(chatsArr));
            });
    })


    app.post("/api/users", function(req,res){

            //dynamically create button based off user table

            var arr =[]



            db.User.findAll().then(function(dbUser){
            
                for (var i=0; i<dbUser.length; i++){
            
                    arr.push(dbUser[i].name)

                   
                }

                res.end(JSON.stringify(arr));
                console.log(arr)

                
            });
                    

    })

    
}