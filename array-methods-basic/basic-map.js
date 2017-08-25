/*
1. Refactor this function to use to .map and ES6 syntax
2. Write more tests to check it is working properly
*/

function doubleAll(numbers) {

  var newNumber = numbers.map(function (num) {
    return num * 2
  });
  return newNumber
}


















module.exports = doubleAll;


