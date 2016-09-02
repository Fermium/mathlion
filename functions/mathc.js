var alter = require('../../timelion/server/lib/alter.js');
var Datasource = require('../../timelion/server/lib/classes/datasource');
var Chainable = require('../../timelion/server/lib/classes/chainable');
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
    var scope = new Object();
    var target = tlConfig.getTargetSeries();
    var inputequation = args.byName.function;
    var label = args.byName.label;
    console.re.log('starting math chain ');
    function solve(equation,scope,length) {
      var vectoreq = equation.split('*').join('.*').split('/').join('./').split('^').join('.^');
      vectoreq = vectoreq.split('..*').join('.*').split('../').join('./').split('..^').join('.^');
      vectoreq = vectoreq.split('').join()
      console.re.log(vectoreq);
      var code = math.compile(vectoreq);
      return code.eval(scope);
    }
    return alter(args, function (eachSeries) {
      var times = _.map(eachSeries.data, 0);
      if (inputequation.indexOf('this') !== -1) {
        var val = _.map(eachSeries.data, 1);
        scope['this'] = val;
      }
      _.extend(scope,mathenviroment.scope);
      var values = solve(inputequation,scope,times.length);
      eachSeries.data = _.zip(times, values);
      eachSeries.label = label;
      console.re.log('mathChain done');
      console.re.log(eachSeries);
      return eachSeries;
    });
  }
});
