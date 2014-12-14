// define our module using 'define' function, which takes 3 arguments:
//  1. id  optional, if not provided, its an anonymous module, which is very common
//  2. array of dependencies that this module depends upon, these are strings that refer to a path
//  3. function, immediately invoked, dependencies specified in second arg are mapped as parameters in this function
define(function() {

  var _counter = 0;

  var generateId = function() {
    return 'customId' + _counter++;
  };

  var create = function(tagName, id) {
    var el = document.createElement(tagName);
    el.id = id || generateId();
    return el;
  };

  var reset = function() {
    _counter = 0;
  };

  return {
    create: create,
    reset: reset
  };

});