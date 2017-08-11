const main= require('../main/round4.js');
describe('round4', () => {

  it('find new str', () => {

    const result =main('1->2->3->3->4->5->3',3);

    expect(result).toEqual('1->2->4->5');
  });
});