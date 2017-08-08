const prime_factor = require('../main/round1.js');
describe('round1', () => {

  it('因式分解', () => {
    const interg=90;

    const result = prime_factor(interg);

    expect(result).toEqual('90=2335');
  });
});
