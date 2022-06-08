const stringLength = require('./length');

it('Short string', () => {
    expect(stringLength('wolf')).toEqual(true);
});

it('Long string', () => {
    expect(stringLength('parangaricutirimicuaro')).toEqual(false);
});

it('A single character', () => {
    expect(stringLength('z')).toEqual(true);
});

it('A string of ten characters', () => {
    expect(stringLength('characters')).toEqual(true);
});

it('Empty string', () => {
    expect(stringLength('')).toEqual(false);
});

it('String with more than 10 characters', () => {
    expect(stringLength('incomprehensible')).toEqual(false);
});