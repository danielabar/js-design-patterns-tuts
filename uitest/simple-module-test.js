describe('Simple module test', function () {

  afterEach(function() {
    dom2.reset();
  });

  it('Makes use of provided id', function() {
    var div1 = dom2.create('div', 'main');
    chai.expect(div1.id).to.equal('main');
  });

  it('Auto generates an id when none is provided', function() {
    var div1 = dom2.create('div');
    chai.expect(div1.id).to.equal('customId0');

    var div2 = dom2.create('div');
    chai.expect(div2.id).to.equal('customId1');
  });

  it('No visibility to private counter', function() {
    var div1 = dom2.create('div');
    chai.expect(div1.id).to.equal('customId0');

    dom2._counter = 'ha ha ha!';

    var div2 = dom2.create('div');
    chai.expect(div2.id).to.equal('customId1');
  });

  it('Mixins other modules', function() {
    var result = dom2.useFoo();
    chai.expect(result).to.equal('Hello');
  });

});