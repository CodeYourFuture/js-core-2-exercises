/* 
HARD

Implement a function shiftLetters that takes a string and uses .map to return
an encoded string with each letter shifted down the
alphabet by one. Hint: Use Look up the JS functions String.fromCharCode()
and String.charCodeAt() and see if you can use
Ascii code to acomplish this.
Look at the tests for examples

1. Remove .skip from the tests and see it failing (RED)
2. Write code for the implementation
*//*
const shiftLetters = function(originalString){
  // code!
  const word = 'hello';
  String.charCodeAt()
  originalString.fromCharCode(65, 66, 67);
}*/
const test = 'Hello';
const shiftLetters = function (originalString) {
  const result = originalString.split('').map(item => {
    return item.charCodeAt();
  }).join(' ');
  return result;
}
console.log(shiftLetters(test));
//module.exports = shiftLetters;