var johnDoe = {
  firstName: 'John',
  lastName: 'Doe',
  sayName: function() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName;
  }
};

// Create janeDoe based on johnDoe, overridding 'firstName' property
var janeDoe = Object.create(johnDoe, {
  firstName: { value : 'Jane' },
  greet: {
    value : function(person) {
      return 'Hi there ' + person.firstName;
    }
  }
});

// Create jimSmith based on janeDoe
var jimSmith = Object.create(janeDoe, {
  firstName: { value : 'Jim'},
  lastName: { value : 'Smith'}
});

module.exports.johnDoe = johnDoe;
module.exports.janeDoe = janeDoe;
module.exports.jimSmith = jimSmith;