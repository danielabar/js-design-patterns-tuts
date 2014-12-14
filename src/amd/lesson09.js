// In this file, we want to use dom utility defined in lesson09_module. To do so, we must require it.
//  1. array of dependencies
//  2. function that will be executed after dependencies are loaded, dependency array is mapped to function parameters
require(['lesson09_module'], function(dom) {
  var el = dom.create('div');
  var el2 = dom.create('div');
  console.log(el.id);
  console.log(el2.id);
});