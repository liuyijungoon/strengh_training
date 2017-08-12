const find_all= require('../main/round5.js');
describe('round5', () => {

  it('find 水仙花数', () => {

    const result =find_all()

    expect(result).toEqual([ 153, 370, 371, 407 ]);
  });
});