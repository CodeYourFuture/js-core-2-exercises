/*
    Refactor this to use .map and .filter together (chaining)
*/
const vowels = ["a", "e", "i", "o", "u"];

const getUpperCaseVowels = (letters)=>{
    let result = [];
    letters.map((params)=>{
        (vowels.indexOf(params) !== -1) ? result.push(params.toUpperCase()) : false;
    });
    return result;
};
/*
const getUpperCaseVowels = (letters)=>{
    let result = [];
    letters.filter(function (params) {
        if (vowels.indexOf(params) !== -1) {
            result.push(params.toUpperCase());
        }
    });
    return result;
};*/
/*
function getUpperCaseVowels(letters) {
    const result = [];
    for(const i = 0; i < letters.length; i++) {
        if(vowels.indexOf(letters[i]) !== -1) {
            result.push(letters[i].toUpperCase());
        }
    }
    return result;
};*/

module.exports = getUpperCaseVowels;