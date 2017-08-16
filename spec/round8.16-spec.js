const main= require('../main/round8.16.js');
describe('round8.16', () => {

  it('测试用例', () => {

    const result =main(['a','ab','ed','da','a','ed','b'])

    expect(result).toEqual('a,ed');
  });

});