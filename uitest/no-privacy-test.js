describe('No Privacy', function() {

  afterEach(function() {
    dom.reset();
  });

  it('Makes use of provided id', function() {
    var div1 = dom.create('div', 'main');
    chai.expect(div1.id).to.equal('main');
  });

  it('Auto generates an id when none is provided', function() {
    var div1 = dom.create('div');
    chai.expect(div1.id).to.equal('customId0');

    var div2 = dom.create('div');
    chai.expect(div2.id).to.equal('customId1');
  });

  it('Outside interference can break id generation', function() {
    dom._counter = 'ha ha ha!';
    var div1 = dom.create('div');
    chai.expect(div1.id).to.equal('customIdNaN');

    var div2 = dom.create('div');
    chai.expect(div2.id).to.equal('customIdNaN');
  });

});