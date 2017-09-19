const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
var tweets = tweetBank.tweetBankList;

router.get('/:tweet', function(req, res){
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