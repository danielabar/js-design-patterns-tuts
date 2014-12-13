var BeverageModule = require('../src/decorator-pattern/Beverage');

exports.testCoffee = function(test) {
  var coffee = new BeverageModule.Coffee();
  test.expect(1);
  test.equal(coffee.cost(), 5, 'default coffee cost');
  test.done();
};

exports.testSmallCoffee = function(test) {
  var coffee = new BeverageModule.Coffee();
  coffee = new BeverageModule.Small(coffee);
  test.expect(1);
  test.equal(coffee.cost(), 4, 'small coffee cost');
  test.done();
};

exports.testLargeCoffeeWithSugar = function(test) {
  var coffee = new BeverageModule.Coffee();
  coffee = new BeverageModule.Large(coffee);
  coffee = new BeverageModule.Sugar(coffee);
  test.expect(1);
  test.equal(coffee.cost(), 6.15, '1large coffee with sugar cost');
  test.done();
};