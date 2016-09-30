var alter = require('../../timelion/server/lib/alter.js');
var Datasource = require('../../timelion/server/lib/classes/datasource');
var _ = require('lodash');
module.exports = new Datasource('nop', {
  args: [  ],
  help: 'No operation. Is equivalent to value(0)',
  fn: function nop(args, tlConfig) {
    var target = tlConfig.getTargetSeries();
    var data = _.map(target, function(bucket){
      return [bucket[0],null];
    });
    return Promise.resolve({
      type: 'seriesList',
      list: [
        {
          data: data,
          type: 'series',
          label: null,
          fit: args.byName.fit || 'average'
        }
      ]
    });
  }
});
