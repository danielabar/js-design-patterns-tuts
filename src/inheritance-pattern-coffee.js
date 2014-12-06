var BeverageModule = require('./inheritance-pattern-beverage');

function Coffee(type) {
  // call super constructor to invoke prototype chain
  BeverageModule.call(this, 'coffee', 'hot');
  this.type = type;
}

// Coffee "inherits" from Beverage
Coffee.prototype = Object.create(BeverageModule.prototype);

Coffee.prototype.sip = function() {
  return 'Sipping some awesome ' + this.type + ' ' + this.name;
};

module.exports = Coffee;