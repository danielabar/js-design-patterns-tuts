var CoffeeModule = require('../src/decorator-pattern/Coffee');

exports.testDefaultCoffee = function(test) {
  var coffeeObj = new CoffeeModule();

  test.expect(1);
  test.equal(coffeeObj.cost(), 5, 'default coffee price');
  test.done();
};

exports.testSmallCoffee = function(test) {
  var coffeeObj = new CoffeeModule();
  CoffeeModule.small(coffeeObj);

  test.expect(1);
  test.equal(coffeeObj.cost(), 4, 'small coffee price');
  test.done();
};

exports.testLargeCoffee = function(test) {
  var coffeeObj = new CoffeeModule();
  CoffeeModule.large(coffeeObj);

  test.expect(1);
  test.equal(coffeeObj.cost(), 6, 'large coffee price');
  test.done();
};

exports.testLargeCoffeeWithSugar = function(test) {
  var coffeeObj = new CoffeeModule();
  CoffeeModule.large(coffeeObj);
  CoffeeModule.sugar(coffeeObj);

  test.expect(1);
  test.equal(coffeeObj.cost(), 6.15, 'large coffee with sugar');
  test.done();
};

exports.testMediumMocha = function(test) {
  var mochaObj = new CoffeeModule();
  CoffeeModule.medium(mochaObj);
  CoffeeModule.mocha(mochaObj);

  // JavaScript floating point weirdness, outside the scope of this course
  var roundedActualCost = Math.round((mochaObj.cost() + 0.00001) * 100) / 100;

  test.expect(1);
  test.equal(roundedActualCost, 5.45, 'medium mocha has milk, foam, and chocolate');
  test.done();
};