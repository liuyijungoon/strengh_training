const find_fibonacci_N = require('../main/round2.js');
describe('round2', () => {

  it('求斐波那契数列的第n个数', () => {
    const n=8;

    const result = find_fibonacci_N(n);

    expect(result).toEqual(13);
  });
});