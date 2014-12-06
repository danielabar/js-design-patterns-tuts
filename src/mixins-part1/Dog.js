var utils = require('./utils');

// Example using jQuery extend
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

// Example using custom implementation of extend
var extend = require('./Mixin');

function Dog(name) {
  this.name = name;
}

// mixin via jQuery
// $.extend(Dog.prototype, utils.speaker, utils.mover);

// mixin via custom implementation
extend(Dog.prototype, utils.speaker, utils.mover);

module.exports = Dog;