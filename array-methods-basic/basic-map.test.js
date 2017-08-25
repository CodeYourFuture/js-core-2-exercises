var doubleNumber = require('./basic-map');

describe('doubleNumber', function () {
    test('doubles every number in the array', function () {
        var numbers = [1, 3, 4];
        var result = doubleNumber(numbers);
        expect(result).toEqual([2, 6, 8]);
    });

    test('doubles larger numbers in the array', function () {
        var numbers = [5, 10, 15, 20];
        var result = doubleNumber(numbers);
        expect(result).toEqual([10, 20, 30, 40]);
    });

    test('returns empty array', function () {
        var numbers = [];
        var result = doubleNumber(numbers);
        expect(result).toEqual([]);
    });

    test('doubles larger numbers in the array', function () {
        var numbers = [-2, 0.2, 0];
        var result = doubleNumber(numbers);
        expect(result).toEqual([-4,0.4,0]);
    });
})