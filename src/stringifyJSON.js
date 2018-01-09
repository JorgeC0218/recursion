// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// Input - object
// Output - string
var stringifyJSON = function(obj) {
  var newObj = JSON.stringify(obj);
  return newObj;
// define return var
  // check if param is obj
  // if true make into string
  // else make into obj and assign to return var
  // return
};
