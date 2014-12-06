// Rather than using jQuery extend to do mixins, here is a custom implementation

var extend = function(target) {

  // If no arguments are provided, simply return because there is nothing to do
  if (!arguments[1]) {
    return;
  }

  // Iterate over arguments, naming iterator var 'ii' makes it easier to search
  for (var ii = 1, ll = arguments.length; ii < ll; ii++) {
    var source = arguments[ii];
    // Only copy those properties that are not already within the target AND do not copy prototype properties
    for (var prop in source) {
      if (!target[prop] && source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
};

// module.exports.extend = extend;
module.exports = extend;