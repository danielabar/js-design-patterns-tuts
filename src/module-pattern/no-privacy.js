/* jshint unused: false */
var dom = {

  // by convenstion, underscore means private, but this is not enforced in this object
  _counter : 0,

  generateId : function() {
    return "customId" + this._counter++;
  },

  create: function (tagName, id) {
    var el = document.createElement(tagName);
    el.id = id || this.generateId();
    return el;
  },

  reset: function() {
    this._counter = 0;
  }

};