var alter = require('../../timelion/server/lib/alter.js');
var Chainable = require('../../timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var consolere = require('console-remote-client').connect('console.re','80','mathlion');
var fs = require('fs');

var mathenviroment = require('./math-enviroment');

module.exports = new Chainable('assign', {
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
  fn: function assign(args) {

    var varname = args.byName.name;
    console.re.log('starting assign ' + varname);
    function assign(name,arr) {
      var y = new Object();
      y[name] = arr;
      _.extend(mathenviroment.scope,y);
      console.re.log(mathenviroment.scope);
      return;
    }
    return alter(args, function (eachSeries) {
      var values = _.map(eachSeries.data, 1);
      assign(varname,values);
      console.re.log('assign done ' + varname);
      return eachSeries;
    });
  }
});
