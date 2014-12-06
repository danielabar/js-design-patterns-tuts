<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [JavaScript Design Patterns](#javascript-design-patterns)
  - [Project Setup](#project-setup)
  - [Creational Patterns](#creational-patterns)
    - [Creating Objects with Literals](#creating-objects-with-literals)
    - [Generating Objects with Object.create()](#generating-objects-with-objectcreate)
    - [The Constructor Pattern](#the-constructor-pattern)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Creational Patterns

### Creating Objects with Literals

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

### Generating Objects with Object.create()

[Source](src/object-create.js) | [Test](test/object-create-test.js)

Create method was introduced in ES5.
More powerful than object literal because object can be created BASED on another object.

`Object.create` builds a prototype chain.
Object passed as first argument is set as prototype for the object being created.

Use [Object.getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) property to determine what prototype its based on.

### The Constructor Pattern

A constructor function is another way to create objects.
It's a special function that gets called with the `new` keyword.

By convention, the name of the function should begin with an upper-case letter,
to distinguish it as a constructor.

[Source](src/constructor-pattern.js) | [Test](test/constructor-pattern-test.js)

A constructor function is another way to create objects.
It's a special function that gets called with the `new` keyword.

By convention, the name of the function should begin with an upper-case letter,
to distinguish it from a regular function.

Inside a constructor function, `this` refers to object that is being created.

`instanceof` operator can be used to determine if a given object is an intance of, i.e. was created with a given constructor.

Problem with `Person` constructor in [example](src/constructor-pattern.js) is that a new function object `sayName` is created every time constructor is called.
This results in increased memory usage because every instance of Person has its own version of sayName function.
This can also cause inheritance problems (instructor in course did not expand on this topic though).

A better way to define functions is on the object's prototype.
Any property defined on the prototype is shared between all instances of that constructor function.