/* jshint unused: false */
/* global foo */
var dom2 = (function(f) {

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

  var useFoo = function() {
    return foo.sayHello();
  };

  return {
    create: create,
    reset: reset,
    useFoo: useFoo
  };

})(foo);