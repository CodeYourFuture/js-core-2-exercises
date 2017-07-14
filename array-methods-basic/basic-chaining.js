/*
    Refactor this to use .map and .filter together (chaining)
*/
var vowels = ["a", "e", "i", "o", "u"];

function getUpperCaseVowels(letters) {
    const upperVowel = letters.filter(function (vowel) {
        return (vowels.indexOf(vowel) != -1)

    })
        .map((vowel) => {
            return vowel.toUpperCase();
        })
    return upperVowel;
};
module.exports = getUpperCaseVowels;

// var result = [];
// letter.forEach(function (vowel) {
// if (vowels.indexOf(letters[i]) !== -1) {
//             result.push(letters[i].toUpperCase());
//         }
//     })
//     return result;