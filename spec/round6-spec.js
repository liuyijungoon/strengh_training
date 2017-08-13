const find_median= require('../main/round6.js');
describe('round6', () => {

  it('find median of 1,2,3', () => {

    const result =find_median([1,2,3])

    expect(result).toEqual(2);
  });
  
    it('find median of 1,2,3,4', () => {

    const result =find_median([1,2,3,4])

    expect(result).toEqual(2.5);
  });
});