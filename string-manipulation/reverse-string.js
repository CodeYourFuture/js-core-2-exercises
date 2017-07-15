/*
    1. Remove .skip from the test
    2. Implement the function to make the test pass
*/

function reverseString(originalString) {
    // Code! - Hint: use the array functions you've learned to achieve this
    return originalString.split('').reverse().join('');
}

module.exports = reverseString;