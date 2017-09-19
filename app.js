const express = require( 'express' );
const app = express(); // creates an instance of an express application
const http = require('http');
const PORT = 3000;
const server = http.createServer();
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

var obj = {
    title: 'example',
    people: [
        {name: 'Josh'},
        {name: 'Erika'}
    ]
}

nunjucks.render('index.html', obj, function (err, output) {
    console.log(output);
});

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
            res.render( 'index', obj );
        }
        res.render( 'index', obj );
    }
    res.render( 'index', obj );
})

