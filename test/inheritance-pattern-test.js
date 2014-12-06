var CoffeeModule = require('../src/inheritance-pattern-coffee');
var BeverageModule = require('../src/inheritance-pattern-beverage');

exports.testCoffeeSip = function(test) {
  var coffee = new CoffeeModule('bold');

  test.expect(1);
  test.equal(coffee.sip(), 'Sipping some awesome bold coffee', 'coffee sip function incorporates coffee type and beverage name');
  test.done();
};

exports.testCoffeeDrink = function(test) {
  var coffee = new CoffeeModule('whatever');

  test.expect(1);
  test.equal(coffee.drink(), 'I\\\'m drinking coffee', 'coffee drink function inherited from Beverage prototype');
  test.done();
};

exports.testBeverageDrink = function(test) {
  var water = new BeverageModule('water', 'cold');

  test.expect(1);
  test.equal(water.drink(), 'I\\\'m drinking water', 'beverage drink method');
  test.done();
};