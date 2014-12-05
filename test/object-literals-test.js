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
  test.equal(ol.getObject()['key with spaces is ok'], 'this key has spaces and its ok', 'square bracket notation allows keys with spaces');
  test.done();
};

exports.testKeyWithReservedKeyword = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['new'], 'new is a reserved keyword', 'square bracket notation allows keys with reserved keywords');
  test.done();
};

exports.testDefineProperty = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['country'], 'Canada', 'properies can be set via ES5 defineProperty');
  test.done();
};