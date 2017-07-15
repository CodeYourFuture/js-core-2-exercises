var reverseString = require('./reverse-string');

describe('reverseString', function() {
    test('should reverse CodeYourFuture', function(){
        var originalString = 'CodeYourFuture';
        var result = reverseString(originalString);
        expect(result).toEqual('erutuFruoYedoC');
    });
    test('should reverse MohammedDwina', function () {
        var originalString = 'MohammedDwina';
        var result = reverseString(originalString);
        expect(result).toEqual('aniwDdemmahoM');
    });

    //add more tests
});