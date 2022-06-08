const reverseString = require('./reverse');

it('Type of return value', () => {
  expect(typeof reverseString('hello')).toEqual('string');
});

it('Reverses single word', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

it('Reverses single word #2', () => {
  expect(reverseString('Howdy')).toEqual('ydwoH');
});

it('Reverses multiple words', () => {
  expect(reverseString('hello there')).toEqual('ereht olleh');
});

it('Reverses multiple words #2', () => {
  expect(reverseString('Greetings from Earth')).toEqual('htraE morf sgniteerG');
});

it('Works with numbers and punctuation', () => {
  expect(reverseString('123! abc!')).toEqual('!cba !321');
});

it('Works with blank strings', () => {
  expect(reverseString('')).toEqual('');
});