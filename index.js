module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'mathlion',
    require: ['timelion'],
    init: function (server) {
      // Initialize your function plugins here
      server.plugins.timelion.addFunction(require('./functions/nop'));
      //server.plugins.timelion.addFunction(require('./functions/math'));
      //server.plugins.timelion.addFunction(require('./functions/assign'));
      //server.plugins.timelion.addFunction(require('./functions/math-define'));
      server.plugins.timelion.addFunction(require('./functions/math'));
    }
  });
};
