/*
    Refactor this to use .map and .filter together (chaining)
*/
var vowels = ["a", "e", "i", "o", "u"];

// function getUpperCaseVowels(letters) {
//     var result = [];
//     for(var i = 0; i < letters.length; i++) {
//         if(vowels.indexOf(letters[i]) !== -1) {
//             result.push(letters[i].toUpperCase());
//         }
//     }
//     return result;
// };
function getUpperCaseVowels(letters) {
    var result = [];

    result = letters.filter(function (letter) {

        return vowels.indexOf(letter) !== -1;

    });
    console.log(result);
    result = result.map(function (letter) {
        return letter.toUpperCase();

    });
    console.log(result);

    return result;

}

module.exports = getUpperCaseVowels;