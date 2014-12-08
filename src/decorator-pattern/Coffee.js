// var DEFAULT_SIZE = 'medium';
var DEFAULT_COST = 5;

function Coffee() { }

Coffee.prototype.cost = function() {
  return DEFAULT_COST;
};

// Small decorator decrements price by a dollar
Coffee.small = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost - 1;
  };
};

// Medium (default) decorator is a no-op
/* jshint unused: false */
Coffee.medium = function (coffeeObj) { };

// Large decorator increments price by a dollar
Coffee.large = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 1;
  };
};

// Sugar decorator increments price by 15 cents
Coffee.sugar = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 0.15;
  };
};

// Cream decorator increments price by 15 cents
Coffee.cream = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 0.15;
  };
};

// Whipped cream decorator increments price by 15 cents
Coffee.whippedCream = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 0.15;
  };
};

// Milk decorator increments price by 15 cents
Coffee.milk = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 0.15;
  };
};

// Foam decorator increments price by 15 cents
Coffee.foam = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 0.15;
  };
};

// Chocolate decorator increments price by 15 cents
Coffee.chocolate = function (coffeeObj) {
  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost + 0.15;
  };
};

// Mocha decorator makes use of milk, foam, and chocolate decorators
Coffee.mocha = function (coffeeObj) {
  // Accumulate the cost of mocha ingredients
  Coffee.milk(coffeeObj);
  Coffee.foam(coffeeObj);
  Coffee.chocolate(coffeeObj);

  var cost = coffeeObj.cost();

  coffeeObj.cost = function() {
    return cost;
  };
};

module.exports = Coffee;