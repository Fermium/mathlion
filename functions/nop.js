var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js');
var Datasource = require('../../../src/core_plugins/timelion/server/lib/classes/datasource');
var _ = require('lodash');
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
