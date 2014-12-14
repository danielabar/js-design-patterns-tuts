require.config({
  paths: {
    'mocha'         : '../node_modules/mocha/mocha',
    'chai'          : '../node_modules/chai/chai',
    'dom'           : '../src/amd/lesson09_module'
  },
  shim: {
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    }
  }
});

define(['mocha', 'chai'], function(mocha, chai) {
  // var chai = require('chai');
  // var mocha = require('mocha');

  // Chai
  // chai.should();
  expect = chai.expect;

  mocha.setup('bdd');

  require([
    'dom-tests.js',
  ], function(require) {
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
  });

});