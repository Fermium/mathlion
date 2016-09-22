var _ = require('lodash');
var math = require('mathjs');

//allocate math environments based on the progressive number of the request
var enviroment = new Object();
module.exports.initSubEnviroment = function (envName) {
  enviroment[envName] = {
    'scope' : [],
    'time' : [],
    'last_request' : 0
  };
  enviroment[envName].scope = new Object();
  enviroment[envName].time = new Object();
  enviroment[envName].last_request = Date.now() / 1000;

};
module.exports.getScope = function (envName) {
  return (enviroment.hasOwnProperty(envName)) ? enviroment[envName].scope : null;
};
module.exports.getTimes = function (envName) {
  return (enviroment.hasOwnProperty(envName)) ? enviroment[envName].times : null;
};
module.exports.setScope = function (envName,scope) {
  _.extend(enviroment[envName].scope ,scope);
};
module.exports.setTimes = function (envName,times) {
  enviroment[envName].time = times;
};
module.exports.updateRequest = function (envName) {
  enviroment[envName].last_request = Date.now() / 1000;
};
module.exports.exists = function (envName) {
  return enviroment.hasOwnProperty(envName);
};
//destroy elements older than 10 seconds
var interval = setInterval (function (enviroment) {
  var now = Date.now() / 1000;
  for (var key in enviroment) {
    if (typeof enviroment[key] !== 'function' && now - enviroment[key].last_request > 10) {
      delete enviroment[key];
    }
  }
} , 10000,enviroment);
