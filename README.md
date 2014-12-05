JavaScript Design Patterns
==========

> Learning JavaScript Design Patterns with Tuts Plus [course](https://code.tutsplus.com/courses/javascript-design-patterns).

## Project Setup

  ```bash
  npm install -g nodeunit
  npm install -g grunt-cli
  cd ~/projects
  git clone git@github.com:danielabar/js-design-patterns-tuts.git
  cd js-design-patterns-tuts
  npm install
  grunt watch
  ```

The watch task will [lint](http://jshint.com/docs/) and run tests using [nodeunit](https://github.com/caolan/nodeunit)

## Creating Objects with Literals

[Source](src/object-literals.js) | [Test](test/object-literals-test.js)

Ways to create an object

* literal `{}`
* `new Object()` (not recommended)

Creating and populating object properties

* dot notation
* square bracket notation (more flexible, can use spaces or reserved keywords as property names, though not recommended)
* ES5 `defineProperty` (can configure property to be writeable, enumerable, getters and setters)
* ES5 `defineProperties`

Typically if you know at object creation time what data will go in the object,
then its cleaner to use object literal, that keeps the object creation and its data together in the code.

If you need more control over property behaviour, such as whether its writeable or not, then use defineProperty.

