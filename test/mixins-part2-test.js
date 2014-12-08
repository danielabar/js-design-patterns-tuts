var DogModule = require('../src/mixins-part2/Dog');
// var PersonModule = require('..src/mixins-part2/Person');
var mixin = require('../src/mixins-part2/Mixin2');
var utils = require('../src/mixins-part1/Utils');

exports.testMixin = function(test) {
  var dog = new DogModule('Fido');
  // var person = new PersonModule('Joe');

  mixin(dog, utils.speaker, 'speak');

  test.expect(1);
  test.equal(dog.speak(), 'Fido is speaking', 'reason or message');
  test.done();
};