var alter = require('../../timelion/server/lib/alter.js');
var Datasource = require('../../timelion/server/lib/classes/datasource');
var _ = require('lodash');
var math = require('mathjs');
var jsonfile = require('jsonfile');
module.exports = new Datasource('math', {
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
  fn: function randomFn(args, tlConfig) {
    var file = './scope.json';
    var scope = jsonfile.readFile(file, function (err) { console.re.log(err); });
    var target = tlConfig.getTargetSeries();
    var equation = args.byName.function;
    function solve(eq) {
      var vectoreq = eq.replace('*','.*').replace('/','./').replace('^','.^');
      var code = math.compile(vectoreq);
      return code.eval(scope);
    }
    var values = solve(equation);
    var times = _.map(target, 0);
    var data = _.zip(times, values);
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
