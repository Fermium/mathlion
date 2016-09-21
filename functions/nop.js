var alter = require('../../timelion/server/lib/alter.js');
var Datasource = require('../../timelion/server/lib/classes/datasource');
var _ = require('lodash');
var math = require('mathjs');
var mathenviroment = require('./math-enviroment');
module.exports = new Datasource('nop', {
  args: [  ],
  help: 'nope',
  fn: function nop(args, tlConfig) {
    return Promise.resolve({
      type: 'seriesList',
      list: [
        {
          data: [0],
          type: 'series',
          label: '',
          fit: args.byName.fit || 'average'
        }
      ]
    });
  }
});
