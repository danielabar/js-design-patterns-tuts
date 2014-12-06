// Base type
function Beverage(name, temperature) {
  this.name = name;
  this.temperature = temperature;
}

Beverage.prototype.drink = function() {
  return 'I\\\'m drinking ' + this.name;
};

module.exports = Beverage;