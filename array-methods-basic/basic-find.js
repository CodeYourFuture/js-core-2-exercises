/*
1. Refactor this function to use to .find and ES6 syntax
2. Refactor the function to take a second parameter "word" - if the parameter is not provided then it should default to 'Lorem'
3. Write tests to cover where a word is provided
4. Write a test to check if your function is case insensitive
5. If it is not case insensitive, then make it!
 */
const WORD_TO_FIND = 'Lorem';
const findMessages = function (messages) {
const result = messages.find((params)=>{
        return params.text.match(WORD_TO_FIND) ? params : false;
    })
    return result;
};
/*
var findMessages = function(messages) {
    for(var i = 0; i < messages.length; i++){
        var message = messages[i];
        if(message.text.match(WORD_TO_FIND)){
            return message
        }
    }
};
*/
module.exports = findMessages;