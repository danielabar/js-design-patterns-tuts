var utils = require('./utils');
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var extend = require('./Mixin');

// var extend = function(target) {

//   // If no arguments are provided, simply return because there is nothing to do
//   if (!arguments[1]) {
//     return;
//   }

//   // Iterate over arguments, naming iterator var 'ii' makes it easier to search
//   for (var ii = 1, ll = arguments.length; ii < ll; ii++) {
//     var source = arguments[ii];
//     // Only copy those properties that are not already within the target AND do not copy prototype properties
//     for (var prop in source) {
//       if (!target[prop] && source.hasOwnProperty(prop)) {
//         target[prop] = source[prop];
//       }
//     }
//   }
// };

function Dog(name) {
  this.name = name;
}

// mixin
// $.extend(Dog.prototype, utils.speaker, utils.mover);
extend(Dog.prototype, utils.speaker, utils.mover);

module.exports = Dog;