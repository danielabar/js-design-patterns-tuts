function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayName = function() {
    return "My name is " + this.firstName + " " + this.lastName;
  };
}

Person.prototype.aBetterSayName = function() {
  return "My name is " + this.firstName + " " + this.lastName;
};

module.exports = Person;
