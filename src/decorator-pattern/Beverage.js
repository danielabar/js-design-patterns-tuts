// Beverage functions as an abstract class
function Beverage() {
  this._cost = 0;
}
Beverage.prototype.cost = function() {
  return this._cost;
};

// Decorator must have same interface as object, just adds extra functionality
// A prototypal implementation of a decorator
// This decorator constructor will accept the object that is being decorated
function BeverageDecorater (beverage) {
  Beverage.call(this);
  this.beverage = beverage;
}
BeverageDecorater.prototype = Object.create(Beverage.prototype);

// Another cost method because cost of decorator must be added to cost of beverage
BeverageDecorater.prototype.cost = function() {
  return this._cost + this.beverage.cost();
};

// Construct a Small decorator inheriting from BeverageDecorater
function Small(beverage) {
  BeverageDecorater.call(this, beverage);
  this._cost = -1;
}
Small.prototype = Object.create(BeverageDecorater.prototype);

// Construct a Large decorator inheriting from BeverageDecorater
function Large(beverage) {
  BeverageDecorater.call(this, beverage);
  this._cost = 1;
}
Large.prototype = Object.create(BeverageDecorater.prototype);

// Construct a Sugar decorator inheriting from BeverageDecorater
function Sugar(beverage) {
  BeverageDecorater.call(this, beverage);
  this._cost = 0.15;
}
Sugar.prototype = Object.create(BeverageDecorater.prototype);

// Coffee class inherits from Beverage
function Coffee() {
  Beverage.call(this);
  this._cost = 5;
}
Coffee.prototype = Object.create(Beverage.prototype);

module.exports.Coffee = Coffee;
module.exports.Small = Small;
module.exports.Large = Large;
module.exports.Sugar = Sugar;