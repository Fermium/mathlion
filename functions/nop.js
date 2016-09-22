var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js');
var Datasource = require('../../../src/core_plugins/timelion/server/lib/classes/datasource');
var _ = require('lodash');
module.exports = new Datasource('nop', {
  args: [  ],
  help: 'nope',
  fn: function nop(args, tlConfig) {
    var target = tlConfig.getTargetSeries();
    var data = _.map(target, function(bucket){
      return [bucket[0],0];
    });
    return Promise.resolve({
      type: 'seriesList',
      list: [
        {
          data: data,
          type: 'series',
          label: '',
          fit: args.byName.fit || 'average'
        }
      ]
    });
  }
});
