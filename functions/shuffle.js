var alter = require('../../timelion/server/lib/alter.js');
var Chainable = require('../../timelion/server/lib/classes/chainable');
var _ = require('lodash');

module.exports = new Chainable('shuffle', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    }
  ],
  help: 'Shuffles the values of a series randomly',
  fn: function shuffle(args) {
    function shuffle(arr) {
      var ci = arr.length;
      var ri;
      var temp;

      while (0 !== ci) {
        ri = Math.floor(Math.random() * ci);
        ci -= 1;
        temp = arr[ci];
        arr[ci] = arr[ri];
        arr[ri] = temp;
      }

      return arr;
    }

    return alter(args, function (eachSeries) {
      var times = _.map(eachSeries.data, 0);
      var values = _.map(eachSeries.data, 1);
      shuffle(values);

      eachSeries.data = _.zip(times, values);

      return eachSeries;
    });
  }
});
