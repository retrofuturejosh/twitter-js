const express = require( 'express' );
const app = express(); // creates an instance of an express application
const http = require('http');
const PORT = 3000;
const server = http.createServer();

server.on('request', app);
server.listen(PORT, function(){
    console.log('server listening')
})

app.get('/', function(req, res, next){
    res.send('Hello World!');
})