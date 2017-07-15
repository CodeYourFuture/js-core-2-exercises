require('./remove-vowels-prototype');

test('removing vowels in Codeyourfuture', function(){
    const result = 'CodeYourFuture'.removeVowels();
    expect(result).toEqual('CdYrFtr')
});


test('removing vowels in Codeyourfuture then CAPITALISE', function(){
    const result = 'CodeYourFuture'.removeVowels(true).toUpperCase();
    expect(result).toEqual('CDYRFTR');
});

test('removing vowels in MohammedDwina', function () {
    const result = 'MohammedDwina'.removeVowels();
    expect(result).toEqual('MhmmdDwn');
});