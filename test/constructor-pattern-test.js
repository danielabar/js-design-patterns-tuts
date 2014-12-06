var PersonModule = require('../src/constructor-pattern');

exports.testPerson = function(test) {
  var aPerson = new PersonModule('Bugs', 'Bunny');

  test.expect(3);
  test.equal(aPerson.firstName, 'Bugs', 'Person firstName property');
  test.equal(aPerson.lastName, 'Bunny', 'Person lastName property');
  test.equal(aPerson.sayName(), 'My name is Bugs Bunny', 'Person sayName function');
  test.done();
};

exports.testPersonInstanceOf = function(test) {
  var johnDoe = new PersonModule('John', 'Doe');
  var janeDoe = new PersonModule('Jane', 'Doe');
  var jimSmith = {
    firstName : 'Jim',
    lastName : 'Smith',
    sayName : function() { return "My name is " + this.firstName + " " + this.lastName; }
  };

  test.expect(3);
  test.ok(johnDoe instanceof PersonModule, 'johnDoe is a Person');
  test.ok(janeDoe instanceof PersonModule, 'janeDoe is a Person');
  test.ok(!(jimSmith instanceof PersonModule), 'jimSmith is NOT a Person');
  test.done();
};

exports.testFunctionOjectDefinedInConstructor = function(test) {
  var johnDoe = new PersonModule('John', 'Doe');
  var janeDoe = new PersonModule('Jane', 'Doe');

  test.expect(1);
  test.notEqual(johnDoe.sayName, janeDoe.sayName, 'function property defined in constructor is different for each instance');
  test.done();
};

exports.testFunctionOjectDefinedInPrototype = function(test) {
  var johnDoe = new PersonModule('John', 'Doe');
  var janeDoe = new PersonModule('Jane', 'Doe');

  test.expect(1);
  test.equal(johnDoe.aBetterSayName, janeDoe.aBetterSayName, 'function property defined in prototype is the same for each instance');
  test.done();
};

exports.testPrototype = function(test) {
  var fredJones = new PersonModule('Fred', 'Jones');

  test.expect(1);
  test.equal(fredJones.aBetterSayName(), 'My name is Fred Jones', 'reason or message');
  test.done();
};