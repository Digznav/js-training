const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer, 5));

console.log('// -------------------------------------');

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    accumulator.push(...currentValue);
    return accumulator;
  },
  []
);

console.log(flattened);

console.log('// -------------------------------------');

// function reduce(value, callback, initVal) {
//   var initExists = Boolean(initVal);
//   var accumulator = initVal ? initVal : null;

//   for(var i = 0; i < value.length; i++) {
//     accumulator = callback(accumulator, value[i]);
//   }
  
//   return accumulator;
// }

function reduce(value, callback, initVal) {
  var initExists = Boolean(initVal);
  var accumulator = initExists ? initVal: value[0];

  for(var i = (initExists ? 0 : 1); i < value.length; i++) {
    accumulator = callback(accumulator, value[i]);
  }
  
  return accumulator;
}

var arr = [1, 2, 3, 4];
var cb = (accumulator, currentValue) => accumulator + currentValue;;
var initalVal = 5;
console.log(reduce(arr, cb, initalVal));