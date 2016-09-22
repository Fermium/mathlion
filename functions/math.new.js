var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js');
var Chainable = require('../../../src/core_plugins/timelion/server/lib/classes/chainable');
var _ = require('lodash');
var math = require('mathjs');
var mathenviroment = require('./math-enviroment');
module.exports = new Chainable('math', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    },
    {
      name: 'function',
      types: ['string'],
      help: 'The function you want to evaluate'
    },
    {
      name: 'label',
      types: ['string', 'null']
    }
  ],
  help: 'math stuff and whatever',
  fn: function mathChain(args, tlConfig) {
    var envName = tlConfig.server._sources[0]._requestCounter.value + ' '; //Name of the enviroment (# of the request)
    var target = tlConfig.getTargetSeries(); //Gets the target series
    var inputequation = args.byName.function; //Gets the equation to evaluate
    var label = args.byName.label; //Possible label for the plot

    mathenviroment.initSubEnviroment(envName);//Sets up the enviroment if necessary
    mathenviroment.updateRequest(envName);//Updates the request

    /* Function that evaluate the equation and returns
    the evaluated values if the function is to plot
    or the datasource array of values of it has not to
    */
    function evaluate(equation,scope) {
      var vectoreq = equation.split('*').join('.*').split('/').join('./').split('^').join('.^');  //this +
      vectoreq = vectoreq.split('..*').join('.*').split('../').join('./').split('..^').join('.^');//this to clean the string and let it operate with arrays
      var isElaboration = vectoreq.split(';').slice(-1)[0].indexOf('=') !== -1; //check if eachseries is being elaborated
      var evaluated = math.eval(vectoreq,scope);//evaluate the new value/function in the scope
      return (isElaboration) ? scope['this'] : evaluated;//return the correct thing to display
    }
    return alter(args, function (eachSeries) {
      var times = _.map(eachSeries.data, 0);//get the times
      inputequation = inputequation.split('source').join('this');//Set source as alias for this
      var val = _.map(eachSeries.data, 1); //get old values
      mathenviroment.setScope(envName,{'this':val}); // add this to the enviroment
      var values = evaluate(inputequation,mathenviroment.getScope(envName)); //evaluate stuff
      eachSeries.data = _.zip(times, values);//fix new series
      var eq = inputequation.split('this').join(eachSeries.label);//translate eq into label
      eachSeries.label = label !== null ? label : math.parse(eq).toString();//set label
      return eachSeries;
    });
  }
});
