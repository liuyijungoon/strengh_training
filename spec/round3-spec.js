const find_num = require('../main/round3.js');
describe('round3', () => {

  it('找出只有一个那个数', () => {
    const n=[1,2,3,5,6,3,2,1,4,5,6];

    const result = find_num(n);

    expect(result).toEqual(4);
  });
});