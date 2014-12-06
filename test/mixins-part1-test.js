var PersonModule = require('../src/mixins-part1/Person');
var DogModule = require('../src/mixins-part1/Dog');

exports.testPersonHasMixinFunctions = function(test) {
  var person = new PersonModule('Joe');

  test.expect(5);
  test.equal(person.speak(), 'Joe is speaking', 'Person object received speak mixin');
  test.equal(person.walk(), 'Joe is walking', 'Person object received walk mixin');
  test.equal(person.run(), 'Joe is running', 'Person object received run mixin');
  test.equal(person.add(), 'Joe is adding numbers together', 'person object has arithmetic mixin');
  test.equal(person.multiply(), 'Joe is multiplying numbers together', 'person object has arithmetic mixin');
  test.done();
};

exports.testDogHasMixinFunctions = function(test) {
  var dog = new DogModule('Fido');

  test.expect(3);
  test.equal(dog.speak(), 'Fido is speaking', 'Dog object received speak mixin');
  test.equal(dog.walk(), 'Fido is walking', 'Dog object received walk mixin');
  test.equal(dog.run(), 'Fido is running', 'Dog object received run mixin');
  test.done();
};

exports.testMixinFunctionsAreEqual = function(test) {
  var person = new PersonModule('Joe');
  var dog = new DogModule('Fido');

  test.expect(3);
  test.equal(person.speak, dog.speak, 'mixin functions are the same object');
  test.equal(person.walk, dog.walk, 'mixin functions are the same object');
  test.equal(person.run, dog.run, 'mixin functions are the same object');
  test.done();
};

exports.testDogHasNoArithmeticMixin = function(test) {
  var dog = new DogModule('Fido');

  test.expect(2);
  test.equal(dog.add, undefined, 'Dog has no arithmetic mixin');
  test.equal(dog.multiply, undefined, 'Dog has no arithmetic mixin');
  test.done();
};