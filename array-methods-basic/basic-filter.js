/*
1. Refactor this function to use to .filter and ES6 syntax
2. Refactor the function to take a second parameter "length"
 - if the parameter is not provided then it should default to 10
3. Write tests to cover the case where length is provided
 */

var getShortMessages = function (messages, length = 10) {
    const shortMessages = messages.filter(message => {
        return message.text.split(' ').length < length
    })
    return shortMessages;
}
module.exports = getShortMessages;

// var MESSAGE_LENGTH = 30;

// var getShortMessages = function(messages) {
//     var result = [];
//     for(var i = 0; i < messages.length; i++){
//         var message = messages[i];
//         if(message.text.length < MESSAGE_LENGTH){
//             result.push(message);
//         }
//     }
//     return result;
// };