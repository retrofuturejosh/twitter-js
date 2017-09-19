const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
var tweets = tweetBank.list();
var userNames = tweets.map(function(tweet){
  return tweet.userName
})

router.get('/:name', function(req, res) {
    if (userNames.includes(req.params.name)){
        var userName = req.params.name;     //calls the parameter named "name"
        var filteredTweets = tweetBank.find({userName: userName});
        res.render('index', {tweets: filteredTweets}) 
      }
      else res.send('404 Error!')
})

module.exports = router;