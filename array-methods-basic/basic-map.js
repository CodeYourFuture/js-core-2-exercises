/*
1. Refactor this function to use to .map and ES6 syntax
2. Write more tests to check it is working properly
*/

const doubleAll = (numbers)=>{
  const result = []
  numbers.map((params => result.push(params * 2)));
  return result
}
/*
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}*/

module.exports = doubleAll;