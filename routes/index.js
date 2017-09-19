const express = require('express');
const router = express.Router(); // could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
var tweets = tweetBank.tweetBankList;

router.use('/users', require('./users'))
router.use('/tweets', require('./tweets'))

router.post('/', function(req, res, next) {

})

router.get('/', function (req, res) {
  res.render( 'index', { tweets: tweets, showForm: true} );
});

module.exports = router;