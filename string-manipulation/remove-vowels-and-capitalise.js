/*
    In this exercise, use the array methods to manipualte the string
    (remember a string is an array of characters - to get an array from a string, do myString.split('') - try on the console)
    1. Remove skip from the test (see it fail in your console - RED)
    2. Implement the function so that the test passes (Green)
    3. Try and use all four of .split, .filter, .map, and .join in your implementation (if you don't any of these Google it)

*/
var vowels = ["a", "e", "i", "o", "u"];
/*
function removeVowelsAndCapitalise(letters) {
    // your code here - use .split, .filter, .map and .join in your implementation
    letters.split('').filter(function (item) {
        return item;
    })
};

module.exports = removeVowelsAndCapitalise;
*/
//var test = removeVowelsAndCapitalise('CodeYourFuture');
function removeVowelsAndCapitalise(letters) {
    const result = letters.split('').filter((letter) => {
        return letter;
    }).map((letter) => {
         if(!vowels.includes(letter)) {
             return letter.toUpperCase();
        }      
    }).join('');
    return result;
};
//console.log(removeVowelsAndCapitalise(test));
module.exports = removeVowelsAndCapitalise;
