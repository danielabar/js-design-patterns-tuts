module.exports = {

  getObject: function() {

    // Object literal is a pair of curly braces
    var obj = {};
    // Can also use new, but don't need to do this, takes more bytes than literal
    // var obj = new Object();

    // Can store properties in objects in 4 different ways
    // 1. Dot notation
    obj.firstName = 'Jeremy';

    // 2. Square brackets
    obj['lastName'] = 'Smith';

    // For the most part, dot and square bracket notations are interchangeable,
    // But brackets provides more flexibility, for example:

    // A. Can use characters in key that are not allowed in dot notation
    obj['key with spaces is ok'] = 'this key has spaces and its ok';

    // B. Can use reserved keywords as keys via square bracket notation, BUT NOT GOOD PRACTICE
    obj['new'] = 'new is a reserved keyword';

    // 3. As of ES5
    Object.defineProperty(obj, 'country', {
      value : 'Canada'
    });

    return obj;
  }
};


