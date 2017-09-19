const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();

const tweetBank = require('../tweetBank');
var tweets = tweetBank.list();
var userNames = tweets.map(function(tweet){
  return tweet.userName
})
console.log(userNames);

router.get('/', function (req, res, next) {
  res.render( 'index', { tweets: tweets, showForm: true} );
  next();
});

router.get('/users/:name', function(req, res){
  if (userNames.includes(req.params.name)){
    var userName = req.params.name;     //calls the parameter named "name"
    var filteredTweets = tweetBank.find({userName: userName});
    res.render('index', {tweets: filteredTweets}) 
  }
  else res.send('404 Error!')
})

router.get('/tweets/:tweet', function(req, res){
  if (req.params.tweet){
    var tweetID = Number(req.params.tweet);     //calls the parameter named "name"
    var filteredTweets = tweetBank.find({tweetID: tweetID});
      if (filteredTweets.length < 1){
        res.render('index', {noTweet: true}) 
      } else {
        res.render('index', {tweets: filteredTweets}) 
      }
  }
})


module.exports = router;