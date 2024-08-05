var express = require("express");
var app = express ();

app.get('/', function (req,res){
res.send ('You have successfully create your second app !0')
})

var server = app.listen(2001,function(){
    var host = server.address().address
    var port = server.address().port
    console.log ("example app listening at https://%s%:%s", host,port)

})