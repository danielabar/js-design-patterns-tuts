describe('No Privacy', function() {

  it('Auto generates an id when none is provided', function() {
    var div1 = dom.create('div');
    chai.expect(div1.id).to.match(/^customId/);
  });

});