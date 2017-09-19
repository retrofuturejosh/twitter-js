const express = require( 'express' );
const app = express(); // creates an instance of an express application
const http = require('http');
const PORT = 3000;
const server = http.createServer();

server.on('request', app);
server.listen(PORT, function(){
    console.log('server listening')
})

app.use(function(req, res, next){
    console.log('verb ', req.method, 'route ', req.path);
    next();
})

app.get('/:stats', function(req, res, next){
    if (req.params.stats == 'news'){
        if (req.query.goodnews){
            res.send('The news is good, right?');
        }
        res.send('The news is grim, right?');
    }
    res.send('Hello World!');
})

