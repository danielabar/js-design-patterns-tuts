// methods is a placeholder, won't be used in the function
// don't understand why its there if we don't use it?
// var mixin = function(target, source, methods) {
var mixin = function(target, source) {

  // index starting with methods parameter is 2
  for (var ii = 2, ll = arguments.length; ii < ll; ii++) {
    var method = arguments[ii];
    // preserve 'this' reference
    // target[method] = source[method].bind(source);
    target[method] = source[method];
  }

};

module.exports = mixin;