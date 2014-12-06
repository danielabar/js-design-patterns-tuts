var utils = require('./utils');

// Example using jQuery extend
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

// Example using custom implementation of extend
var extend = require('./Mixin');

function Person(name) {
  this.name = name;
}

// mixin via jQuery
// $.extend(Person.prototype, utils.speaker, utils.mover, utils.arithmetic);

// mixin via custom implementation
extend(Person.prototype, utils.speaker, utils.mover, utils.arithmetic);

module.exports = Person;