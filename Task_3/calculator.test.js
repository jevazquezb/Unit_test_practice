const calculator = require('./calculator');

describe('Addition tests', () => {
  it('Type of return value', () => {
    expect(typeof calculator.add(3, 5)).toEqual('number');
  });

  it('Sum of positive numbers', () => {
    expect(calculator.add(3, 5)).toEqual(8);
  });

  it('Sum with a negative value', () => {
    expect(calculator.add(3, -12)).toEqual(-9);
  });

  it('Sum with a negative value #2', () => {
    expect(calculator.add(-17, 24)).toEqual(7);
  });

  it('Sum of negative numbers', () => {
    expect(calculator.add(-3, -12)).toEqual(-15);
  });
});

describe('Subtraction tests', () => {
  it('Type of return value', () => {
    expect(typeof calculator.subtract(3, 5)).toEqual('number');
  });

  it('Subtraction of positive numbers', () => {
    expect(calculator.subtract(3, 5)).toEqual(-2);
  });

  it('Subtraction with a negative value', () => {
    expect(calculator.subtract(3, -12)).toEqual(15);
  });

  it('Subtraction with a negative value #2', () => {
    expect(calculator.subtract(-17, 24)).toEqual(-41);
  });

  it('Subtraction of negative numbers', () => {
    expect(calculator.subtract(-3, -12)).toEqual(9);
  });
});

describe('Division tests', () => {
  it('Type of return value', () => {
    expect(typeof calculator.divide(3, 5)).toEqual('number');
  });

  it('Division of positive numbers', () => {
    expect(calculator.divide(24, 2)).toEqual(12);
  });

  it('Division with a negative value', () => {
    expect(calculator.divide(24, -6)).toEqual(-4);
  });

  it('Division of negative numbers', () => {
    expect(calculator.divide(-54, -6)).toEqual(9);
  });

  it('Dividend equal to zero', () => {
    expect(calculator.divide(0, 1)).toEqual(0);
  });

  it('Positive dividiend and Divisor equal to zero', () => {
    expect(calculator.divide(10, 0)).toEqual(Infinity);
  });

  it('Negative dividiend and Divisor equal to zero', () => {
    expect(calculator.divide(-10, 0)).toEqual(-Infinity);
  });

  it('Dividend and Divisor equal to zero', () => {
    expect(calculator.divide(0, 0)).toEqual(NaN);
  });
});

describe('Multiplication tests', () => {
  it('Type of return value', () => {
    expect(typeof calculator.multiply(3, 5)).toEqual('number');
  });

  it('Multiplication of positive numbers', () => {
    expect(calculator.multiply(3, 5)).toEqual(15);
  });

  it('Multiplication with a negative factor', () => {
    expect(calculator.multiply(7, -6)).toEqual(-42);
  });

  it('Multiplication of negative numbers', () => {
    expect(calculator.multiply(-11, -13)).toEqual(143);
  });

  it('Multiplication with one of the factors equal to zero', () => {
    expect(calculator.multiply(0, 8)).toEqual(0);
  });

  it('Multiplication with both factors equal to zero', () => {
    expect(calculator.multiply(0, 0)).toEqual(0);
  });
});