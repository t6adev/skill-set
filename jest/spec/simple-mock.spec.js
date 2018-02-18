jest.mock('../src/simple');
const { addNum } = require('../src/simple');

describe('simple mock', () => {
  it('add numbers as mock', () => {
    addNum.mockImplementation(() => 1);
    expect(addNum(4, 6)).toBe(1);
  });
});
