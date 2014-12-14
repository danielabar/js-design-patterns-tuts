<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [JavaScript Design Patterns](#javascript-design-patterns)
  - [Project Setup](#project-setup)
  - [Creational Patterns](#creational-patterns)
    - [Creating Objects with Literals](#creating-objects-with-literals)
    - [Generating Objects with Object.create()](#generating-objects-with-objectcreate)
    - [The Constructor Pattern](#the-constructor-pattern)
  - [Code Reuse Patterns (Structural)](#code-reuse-patterns-structural)
    - [The Inheritance Pattern](#the-inheritance-pattern)
    - [Mixins](#mixins)
    - [Decorator Pattern](#decorator-pattern)
  - [Modules](#modules)
    - [The Basic Module Pattern](#the-basic-module-pattern)
    - [The AMD Format](#the-amd-format)

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

## Code Reuse Patterns (Structural)

### The Inheritance Pattern

In JavaScript, objects inherit from other objects, as opposed to classical object oriented languages where classes inherit from each other.

Inheritance can be achieved in JavaScript by chaining prototypes.

[Source 1](src/inheritance-pattern-beverage.js) | [Source 2](src/inheritance-pattern-coffee.js) | [Test](test/inheritance-pattern-test.js)

### Mixins

[Source 1](src/mixins-part1/Person.js) | [Source 2](src/mixins-part1/Dog.js) | [Test](test/mixins-part1-test.js)

With inheritance, one object extends another to get more functionality without redefining it.
This approach works very well, but has some shortcomings.

Syntax - requires setting up prototype chain, and remembering to call prototype's constructor inside child constructor.

Performance - poor performance results from having a long prototype chain.

Mixin pattern can make multiple inheritance easy.
The concept of a mixin is to take an object, and "mix in" the functionality of another object.
Mixins allow for use of same functionality among different objects, and also to define unique functionality for an object.

jQuery has [extend](http://api.jquery.com/jquery.extend/) to perform mixins.
Custom [implementation](src/mixins-part1/Mixin.js) of extend. This function is "all or nothing" approach to mixin.
Takes ALL of source functions and copies them to target object.

This [implementation](src/mixins-part2/Mixin2.js) provides flexibility to specify which methods should be copied.

### Decorator Pattern

Inheritance isn't always the best choice to achieve code re-use.
For example, going back to [Coffee example](src/inheritance-pattern-coffee.js).

Now would like to implement different preferences, for example CoffeeWithCream, CoffeeWithSugar, with cream and sugar etc.
Inheritance would be too messy for this.

Decorator is a wrapper used to extend functionality of an object, while maintainig that object's interface.

Easiest way to wrap an object is to pass it to another function. [Example](src/decorator-pattern/Coffee.js)

This example is not the most efficient because every decorator must do two things:
- retrieve the current cost of the coffee
- create a new cost method

This repition can be avoided by using inheritance and the prototype.
A more advanced [example](src/decorator-pattern/Beverage.js) and [test](test/advanced-decorator-test.js)

## Modules

JavaScript lacks the concept of privacy.
This can cause problems as demonstrated in this [example](src/module-pattern/no-privacy.js) and [test](uitest/no-privacy-test.js)


### The Basic Module Pattern

Privacy can be somewhat emulated using functional scope and closures,
as demonstrated in this [example](src/module-pattern/simple-module.js) and [test](uitest/simple-module-test.js)

Basic module pattern is implemented with an immediatelely invoked function and returns an object.
It makes uses of the local scope of the immediately invoked function to emulate privacy, and only the attributes of the returned object are public.

### The AMD Format

Asynchronous module definition. Popular format supported by many script loaders.
This lesson uses [RequireJS](http://requirejs.org/).

[Module](src/amd/lesson09_module.js) | [Configure](src/amd/lesson09.js) | [HTML](src/amd/index.html) | [Test](uiamdtest/dom-tests.js)

