var oc = require('../src/object-create');

exports.testPropertyOverride = function(test) {
  test.expect(1);
  test.equal('Jane', oc.janeDoe.firstName, 'janeDoe object overrides firstName property from johnDoe');
  test.done();
};

exports.testPropertyValueSame = function(test) {
  test.expect(2);
  test.equal('Doe', oc.janeDoe.lastName, 'janeDoe object does not override lastName property from johnDoe');
  test.equal('Doe', oc.johnDoe.lastName, 'johnDoe object should maintain its last name property');
  test.done();
};

exports.testPropertyOverrideInFunction = function(test) {
  var expectedJaneGreeting = 'Hello, my name is Jane Doe';
  var expectedJohnGreeting = 'Hello, my name is John Doe';

  test.expect(2);
  test.equal(oc.janeDoe.sayName(), expectedJaneGreeting, 'janeDoe greeting should use overridden firstName');
  test.equal(oc.johnDoe.sayName(), expectedJohnGreeting, 'johnDoe greeting should use use its own firstName property');
  test.done();
};