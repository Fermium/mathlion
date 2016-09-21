var _ = require('lodash');

var scope = new Object();
module.exports.initSubEnviroment = function (envName) {
  scope[envName] = {
    'values' : [],
    'time' : [],
    'last_request' : 0
  };
  scope[envName].values = new Object();
  scope[envName].time = new Object();
  scope[envName].last_request = Date.now() / 1000;

};
module.exports.getValues = function (envName) {
  return scope[envName].values;
};
module.exports.getTimes = function (envName) {
  return scope[envName].times;
};
module.exports.setValues = function (envName,values) {
  _.extend(scope[envName].values ,values);
};
module.exports.setTimes = function (envName,times) {
  scope[envName].time = times;
};
module.exports.updateRequest = function (envName) {
  scope[envName].last_request = Date.now() / 1000;
};


var interval = setInterval (function (scope) {
  var now = Date.now() / 1000;
  for (var key in scope) {
    if (typeof scope[key] !== 'function' && now - scope[key].last_request > 10) {
      delete scope[key];
    }
  }
} , 10000,scope);
