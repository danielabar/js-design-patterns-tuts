var ol = require('../src/object-literals');

exports.testDotNotation = function(test) {
  test.expect(1);
  test.equal(ol.getObject().firstName, 'Jeremy', 'property is accessible via dot notation');
  test.done();
};

exports.squareBracketsNotation = function(test) {
  test.expect(1);
  test.equal(ol.getObject()['lastName'], 'Smith', 'property is accessible via square bracket notation');
  test.done();
};