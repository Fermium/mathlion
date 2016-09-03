var alter = require('../../timelion/server/lib/alter.js');
var Chainable = require('../../timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var consolere = require('console-remote-client').connect('console.re','80','mathlion');
var fs = require('fs');

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
  help: 'Assign this series to a variable.',
  fn: function assign(args) {

    var varname = args.byName.name;

    function assign(name,values,times) {
      var y = new Object();
      y[name] = values;
      _.extend(mathenviroment.scope,y);
      mathenviroment.scopetime=times;
      return;
    }
    return alter(args, function (eachSeries) {
      var times = _.map(eachSeries.data, 0);
      var values = _.map(eachSeries.data, 1);
      assign(varname,values,times);
      console.re.log(eachSeries);
      return eachSeries;
    });
  }
});
