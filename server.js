var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

//make a new server 
app.use(express.static(__dirname)); 

//listen for requests on port 3000
var server = app.listen(port, () =>{
    console.log('server is listening on port',server.address().port); 
});