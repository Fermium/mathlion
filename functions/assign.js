var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js');
var Chainable = require('../../../src/core_plugins/timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var mathenviroment = require('./math-enviroment');

module.exports = new Chainable('math-assign', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    },
    {
      name: 'name',
      types: ['string']
    }
  ],
  help: 'assign the selected serie to a variable',
  fn: function assign(args, tlConfig) {
    var envName = tlConfig.server._sources[0]._requestCounter.value + ' ';
    mathenviroment.initSubEnviroment(envName);
    var varname = args.byName.name;

    function assign(name,values,times) {
      var y = new Object();
      y[name] = values;
      mathenviroment.setValues(envName,y);
      mathenviroment.setTimes(envName,times);
      return;
    }
    return alter(args, function (eachSeries) {
      var times = _.map(eachSeries.data, 0);
      var values = _.map(eachSeries.data, 1);
      assign(varname,values,times);
      console.re.log(tlConfig.server._sources[0]._requestCounter.value);
      console.re.log('envName=' + envName);
      return eachSeries;
    });
  }
});
