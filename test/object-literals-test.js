var ol = require('../src/object-literals');

exports.testDotNotation = function(test) {
  test.expect(1);
  test.equal(ol.getObject().firstName, 'Jeremy', 'property is accessible via dot notation');
  test.done();
};

exports.testSquareBracketsNotation = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['lastName'], 'Smith', 'property is accessible via square bracket notation');
  test.done();
};

exports.testKeyWithSpaces = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['key with spaces is ok'], 'aok', 'square bracket notation allows keys with spaces');
  test.done();
};

exports.testKeyWithReservedKeyword = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['new'], 'yep', 'square bracket notation allows keys with reserved keywords');
  test.done();
};

exports.testDefineProperty = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['country'], 'Canada', 'properies can be set via ES5 defineProperty');
  test.done();
};

exports.testDefineProperties = function(test) {
  test.expect(2);
  test.equal(ol.getObject()['twitter'], 'myhandle', 'multiple properties can be set at once using ES5 defineProerties');
  test.equal(ol.getObject()['email'], 'me@whatever.com', 'multiple properties can be set at once using ES5 defineProerties');
  test.done();
};

exports.testDefinePropertyDefaultNotWriteable = function(test) {
  var myObj = {};
  Object.defineProperty(myObj, 'foo', {
    value: 'never gonna change'
  });
  myObj.foo = 'something different';

  test.expect(1);
  test.equal(myObj.foo, 'never gonna change', 'defineProperty defaults to writeable false');
  test.done();
};

exports.testDefinePropertyWriteableTrue = function(test) {
  var myObj = {};
  Object.defineProperty(myObj, 'foo', {
    value: 'never gonna change',
    writable: true
  });
  myObj.foo = 'something different';

  test.expect(1);
  test.equal(myObj.foo, 'something different', 'defineProperty set with writeable true');
  test.done();
};