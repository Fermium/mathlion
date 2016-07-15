var alter = require('../../timelion/server/lib/alter.js');
var Datasource = require('../../timelion/server/lib/classes/datasource');
var _ = require('lodash');

module.exports = new Datasource('random', {
  args: [
    {
      name: 'min',
      types: ['number']
    },
    {
      name: 'max',
      types: ['number']
    },
    {
      name: 'label',
      types: ['string', 'null']
    }
  ],
  help: 'Generate a random series with the specified limits',
  fn: function randomFn(args, tlConfig) {
    var target = tlConfig.getTargetSeries();
    var min = args.byName.min == null ? 0 : args.byName.min;
    var max = args.byName.min == null ? 1 : args.byName.max;

    function random(min,max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var data = _.map(target, function (bucket) {
      return [bucket[0], random(min, max)];
    });

    return Promise.resolve({
      type: 'seriesList',
      list: [
        {
          data: data,
          type: 'series',
          label: args.byName.label == null ? 'Random' : args.byName.label,
          fit: args.byName.fit || 'average'
        }
      ]
    });
  }
});
