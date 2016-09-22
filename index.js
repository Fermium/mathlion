module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'mathlion',
    require: ['timelion'],
    init: function (server) {
      server.plugins.timelion.addFunction(require('./functions/nop'));
      server.plugins.timelion.addFunction(require('./functions/math'));
    }
  });
};
