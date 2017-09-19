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
  var userName = req.params.name;     //calls the parameter named "name"
  var filteredTweets = tweetBank.find({userName: userName});
  res.render('index', {tweets: filteredTweets}) 
  next();
})

router.get('/tweets/:tweet', function(req, res){
  var tweetID = Number(req.params.tweet);     //calls the parameter named "name"
  var filteredTweets = tweetBank.find({tweetID: tweetID});
  res.render('index', {tweets: filteredTweets}) 
})


module.exports = router;