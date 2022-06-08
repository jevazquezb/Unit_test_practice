const capitalize = require('./capitalize');

it('String type and first capital letter', () => {
  expect(typeof capitalize('hello')).toEqual('string');
  expect(capitalize('hello')).toEqual('Hello');
});