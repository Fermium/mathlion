var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js');
var Chainable = require('../../../src/core_plugins/timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var mathenviroment = require('./math-enviroment');
module.exports = new Chainable('math', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    },
    {
      name: 'function',
      types: ['string'],
      help: 'The function you want to evaluate'
    },
    {
      name: 'label',
      types: ['string', 'null']
    }
  ],
  help: 'math stuff and whatever',
  fn: function mathChain(args, tlConfig) {
    var envName = tlConfig.server._sources[0]._requestCounter.value + ' ';
    if (mathenviroment.exists(envName)) {
      mathenviroment.updateRequest(envName);
	}
    var scope = new Object();
    var target = tlConfig.getTargetSeries();
    var inputequation = args.byName.function;
    var label = args.byName.label;
    function solve(equation,scope,length) {
      var vectoreq = equation.split('*').join('.*').split('/').join('./').split('^').join('.^');
      vectoreq = vectoreq.split('..*').join('.*').split('../').join('./').split('..^').join('.^');
      var code = math.compile(vectoreq);
      return code.eval(scope);
    }
    return alter(args, function (eachSeries) {
      var times = _.map(eachSeries.data, 0);
      if (inputequation.indexOf('this') !== -1) { // eslint-disable-line no-use-before-define
        var val = _.map(eachSeries.data, 1);
        scope['this'] = val; // eslint-disable-line no-use-before-define
      }
      _.extend(scope,mathenviroment.getValues(envName));
      var values = solve(inputequation,scope,times.length);
      eachSeries.data = _.zip(times, values);
      var eq = inputequation.split('this').join(eachSeries.label);// eslint-disable-line no-use-before-define
      eachSeries.label = label !== null ? label : math.parse(eq).toString();
      return eachSeries;
    });
  }
});
