var doubleNumber = require('./basic-map');

describe('doubleNumber', function() {
    test('doubles every number in the array', function() {
        var numbers = [1, 3, 4];
        var result = doubleNumber(numbers);
        expect(result).toEqual([2, 6, 8]);
    });
})

test('doubles every number in the array', function () {
    var numbers = [6, 8, 9];
    var result = doubleNumber(numbers);
    expect(result).toEqual([12, 16, 18]);
});

test('doubles every number in the array', function () {
    var numbers = [2, 5, 7];
    var result = doubleNumber(numbers);
    expect(result).toEqual([4, 10, 14]);
});