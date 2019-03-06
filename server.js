var express = require('express');

var app = express() 

//make a new server 
app.use(express.static(__dirname)); 

//listen for requests on port 3000
var server = app.listen(3000, () =>{
    console.log('server is listening on port',server.address().port); 
});