var express = require('express');
var app = express () ;
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
console.log("There is GET request for the homepage!");
res.send( 'Here is the GET Method! ');
})
// This responds a POST request for the homepage
app.post ('/', function (req, res) {
console.log("A POST request for the homepage is accessed. /home_page");
res.send( 'Here is the POST Method' );
})
// This responds a GET request for the /list_user page.
app.get ('/list_user', function (req, res) {
console.log("Got a GET request for /list_user");
res.send( 'This is Page Listing' );
})
// This responds a GET request for abcd, abxcd, abl23cd, and so on
app.get ('/my_profile', function(req, res) {
console.log("Got a GET request for /my_profile");
res.send( 'Rakishi Dungca' );
})
var server = app.listen(4001, function () {
    var host = server. address ().address
    var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})