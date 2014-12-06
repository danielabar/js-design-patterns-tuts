var johnDoe = {
  firstName: 'John',
  lastName: 'Doe',
  sayName: function() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName;
  }
};

// Create janeDoe object based on johnDoe, overridding 'firstName' property
var janeDoe = Object.create(johnDoe, {
  firstName: { value : 'Jane' }
});

module.exports.johnDoe = johnDoe;
module.exports.janeDoe = janeDoe;