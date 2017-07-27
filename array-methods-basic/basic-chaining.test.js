var getUpperCaseVowels = require('./basic-chaining');

describe('getUpperCaseVowels', function() {
    test('returns an array of vowels in UPPER CASE', function() {
        // Arrange
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        // Act
        var result = getUpperCaseVowels(alphabet);

        // Assert
        expect(result).toEqual(["A", "E", "I", "O", "U"]);

    });
});
    
//     test('the function returns an array of positions where a needle is found', function() {
//     var haystack = ['needle', 'hay', 'rabbit', 'needle', 'hat'];
//     var position = findMultipleNeedles(haystack);
//     expect(position).toEqual([0, 3]);
// });