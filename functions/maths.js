var alter = require('../../timelion/server/lib/alter.js');
var Datasource = require('../../timelion/server/lib/classes/datasource');
var Chainable = require('../../timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var mathenviroment = require('./math-enviroment');
module.exports = new Datasource('maths', {
  args: [
    {
      name: 'function',
      types: ['string']
    },
    {
      name: 'label',
      types: ['string', 'null']
    }
  ],
  help: 'math stuff and whatever',
  fn: function mathFunction(args, tlConfig) {
    console.re.log('starting math');
    var target = tlConfig.getTargetSeries();
    var inputequation = args.byName.function;
    function solve(equation) {
      var vectoreq = equation.replace('*','.*').replace('/','./').replace('^','.^');
      console.re.log(vectoreq);
      var code = math.compile(vectoreq);
      return code.eval(mathenviroment.scope);
    }
    var values = solve(inputequation);
    var times = _.map(target, 0);
    var data = _.zip(times, values);
    console.re.log('math done');
    return Promise.resolve({
      type: 'seriesList',
      list: [
        {
          data: data,
          type: 'series',
          label: args.byName.label == null ? 'math stuff' : args.byName.label,
          fit: args.byName.fit || 'average'
        }
      ]
    });
  }
});
