const _ = require('lodash');

const data = [];

module.exports.add = function (name, content){
    data.push({name: name, content: content})
};
module.exports.list = function (){
    return _.clodeDeep(data);
};
module.exports.find = function (properties){
    return _.cloneDeep(_.filter(data, properties));
};
