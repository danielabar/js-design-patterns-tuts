var utils = require('./utils');
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

function Person(name) {
  this.name = name;
}

// mixin
$.extend(Person.prototype, utils.speaker, utils.mover, utils.arithmetic);

module.exports = Person;