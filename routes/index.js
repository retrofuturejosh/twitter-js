const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  next();
});

router.get('/users/:name', function(req, res){
  var userName = req.params.name;
  var tweets = tweetBank.find({userName: userName});
  res.render('index', {tweets: tweets})
})

module.exports = router;