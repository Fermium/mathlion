var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js');
var Chainable = require('../../../src/core_plugins/timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var mathenviroment = require('./math-enviroment');

module.exports = new Chainable('math-define', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    },
    {
      name: 'function',
      types: ['string']
    }
  ],
  help: 'Define a function or a constant',
  fn: function assign(args, tlConfig) {
    var envName = tlConfig.server._sources[0]._requestCounter.value + ' ';
    mathenviroment.initSubEnviroment(envName);
    var _function = args.byName.function;

    function define(_function) {
      var f=_function.split('*').join('.*').split('/').join('./').split('^').join('.^');
       f=f.split('..*').join('.*').split('../').join('./').split('..^').join('.^');
      math.eval(f,mathenviroment.getValues(envName));
      return;
    }
    return alter(args, function (eachSeries) {
      define(_function);
      return eachSeries;
    });
  }
});
