var _ = require('lodash');
var math = require('mathjs');
var consolere = require('console-remote-client').connect('console.re','80','mathlion');

//allocate math environments based on the progressive number of the request
var enviroment = new Object();
module.exports.initSubEnviroment = function (envName) {
  enviroment[envName] = {
    'scope' : [],
    'last_request' : 0
  };
  enviroment[envName].scope = new Object();
  enviroment[envName].last_request = Date.now() / 1000;

};
module.exports.getScope = function (envName) {
  return (enviroment.hasOwnProperty(envName)) ? enviroment[envName].scope : null;
};
module.exports.setScope = function (envName,scope) {
  _.extend(enviroment[envName].scope ,scope);
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

/*math.import({
  autoscale: function(array) {
    var units = _.map(array, function(a){
      return a.toJSON().unit;
    });
    var a = new Object();
    for(var i=0;i<units.length;i++){
      a[units[i]]=1 + (a[units[i]] || 0);
    }
    var unit = '', max = -Infinity, x;
    for( x in a) {
        if( a[x] > max) {
          max = a[x];
          unit = x;
        }
    }
    console.re.log(x);
    console.re.log(max);
  }
});
*/
