/*
    Refactor this to use .map and .filter together (chaining)
*/
const vowels = ["a", "e", "i", "o", "u"];

const getUpperCaseVowels = (letters)=>{
    const result = letters.filter((letter)=>{
       return vowels.includes(letter) ?  letter : false;
    }).map((letter)=>{
        return letter.toUpperCase();
    });
    return result;
};
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