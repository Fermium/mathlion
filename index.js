module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'timelion-random',
    require: ['kibana', 'elasticsearch', 'timelion'],
    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
    init: function (server) {
      // Add server routes and initalize the plugin here
      server.plugins.timelion.addFunction(require('./functions/random'));
    }
  });
};
