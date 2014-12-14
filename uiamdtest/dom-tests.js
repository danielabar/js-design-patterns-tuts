define(['dom', 'chai'], function(dom, chai) {

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

  it('No visibility to private counter', function() {
    var div1 = dom.create('div');
    chai.expect(div1.id).to.equal('customId0');

    dom._counter = 'ha ha ha!';

    var div2 = dom.create('div');
    chai.expect(div2.id).to.equal('customId1');
  });

});
