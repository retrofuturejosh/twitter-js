const express = require( 'express' );
const app = express(); // creates an instance of an express application
const http = require('http');
const PORT = 3000;
const server = http.createServer();
const nunjucks = require('nunjucks');
const routes = require('./routes');         //the folder with the index.js file


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

server.on('request', app);
server.listen(PORT, function(){
    console.log('server listening')
})

app.use(express.static('public'))  //staticly routing to our public folder which contains our CSS stylesheets

app.use('/', routes);   //all requests are sent to the routes subfolder (aka index.js)

app.use(function(req, res, next){
    console.log('verb ', req.method, 'route ', req.path);
    next();
})
