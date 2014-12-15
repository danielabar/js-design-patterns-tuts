describe('Singleton', function() {

  afterEach(function() {
    domSingleton.getInstance().reset();
  });

  it('Is a singleton', function() {
    var instance = domSingleton.getInstance();
    chai.expect(instance === domSingleton.getInstance()).to.be.ok;
  });

  it('Makes use of provided id', function() {
    var div1 = domSingleton.getInstance().create('div', 'main');
    chai.expect(div1.id).to.equal('main');
  });

  it('Auto generates an id when none is provided', function() {
    var div1 = domSingleton.getInstance().create('div');
    chai.expect(div1.id).to.equal('customId0');

    var div2 = domSingleton.getInstance().create('div');
    chai.expect(div2.id).to.equal('customId1');
  });

  it('No visibility to private counter', function() {
    var div1 = domSingleton.getInstance().create('div');
    chai.expect(div1.id).to.equal('customId0');

    domSingleton.getInstance()._counter = 'ha ha ha!';

    var div2 = domSingleton.getInstance().create('div');
    chai.expect(div2.id).to.equal('customId1');
  });

});