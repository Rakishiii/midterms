var express = require("express");
var app = express ();

app.get('/', function(req,res){
    res.send('Hello World')
})

var server = app.listen(2001, function (){
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at https:// s:s" , host, port)
})
