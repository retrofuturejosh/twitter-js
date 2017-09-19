const _ = require('lodash');
const data = [];
var tweetCount = 0;

module.exports.add = function (name, content){
  var userName = name.split(' ').map(function(word){
    return word.toLowerCase();
  }).join('_');
  tweetCount ++;
  data.push({name: name, content: content, userName: userName, tweetID: tweetCount});
};
module.exports.list = function (){
    return _.cloneDeep(data);
};
module.exports.find = function (properties){
    return _.cloneDeep(_.filter(data, properties));
};

const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };
  
  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };
  
  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }

  module.exports.add('Josh Sohn', "this is my tweet");