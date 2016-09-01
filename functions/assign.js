var alter = require('../../timelion/server/lib/alter.js');
var Chainable = require('../../timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var jsonfile = require('jsonfile');
var consolere = require('console-remote-client').connect('console.re','80','mathlion');
var fs = require('fs');
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
    function assign(name,arr) {
      var file = './scope.json';
      var scope = new Object();
      var x = new Object();
      x[name] = arr;
      _.extend(scope,x);
      console.re.log(scope);
      jsonfile.writeFile(file, scope, function (err) { console.re.log(err); });
      return;
    }


    return alter(args, function (eachSeries) {

      var values = _.map(eachSeries.data, 1);

      assign(varname,values);
      return eachSeries;
    });
  }

});
