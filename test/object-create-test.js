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
  var expectedJaneSayName = 'Hello, my name is Jane Doe';
  var expectedJohnSayName = 'Hello, my name is John Doe';

  test.expect(2);
  test.equal(oc.janeDoe.sayName(), expectedJaneSayName, 'janeDoe sayName should use overridden firstName');
  test.equal(oc.johnDoe.sayName(), expectedJohnSayName, 'johnDoe sayName should use use its own firstName property');
  test.done();
};

exports.testFunctionOnlyOnChildObject = function(test) {
  var person = { firstName : 'Fred' };
  var expectedGreeting = 'Hi there Fred';

  test.expect(1);
  test.equal(oc.janeDoe.greet(person), expectedGreeting, 'greet method exists on janeDoe object');
  test.done();
};

exports.testFunctionIsUndefinedOnParentObject = function(test) {
  test.expect(1);
  test.equal(oc.johnDoe.greet, undefined, 'greet function does not exist on johnDoe object');
  test.done();
};

exports.testInheritedFunction = function(test) {
  var person = { firstName : 'Fred' };
  var expectedGreeting = 'Hi there Fred';

  test.expect(1);
  test.equal(oc.jimSmith.greet(person), expectedGreeting, 'jimSmith object inherits greet method from janeDoe object');
  test.done();
};

exports.testProto = function(test) {
  var expectedJohnDoeProto = {};
  var expectedJaneDoeProto = oc.johnDoe;
  var expectedJimSmithProto = oc.janeDoe;

  test.expect(3);
  test.deepEqual(Object.getPrototypeOf(oc.johnDoe), expectedJohnDoeProto, 'johnDoe proto is {}');
  test.deepEqual(Object.getPrototypeOf(oc.janeDoe), expectedJaneDoeProto, 'janeDoe proto is johnDoe');
  test.deepEqual(Object.getPrototypeOf(oc.jimSmith), expectedJimSmithProto, 'jimSmith proto is janeDoe');
  test.done();
};