/* jshint unused: false */
var domSingleton = (function() {

  var _counter = 0;

  var instance;

  function generateId() {
    return 'customId' + _counter++;
  }

  function create(tagName, id) {
    var el = document.createElement(tagName);
    el.id = id || generateId();
    return el;
  }

  function reset() {
    _counter = 0;
  }

  function createInstance() {
    return {
      generateId: generateId,
      create: create,
      reset: reset
    };
  }

  // This pattern implements the singleton
  return {
    getInstance: function() {
      return instance || (instance = createInstance());
    }
  };

}());