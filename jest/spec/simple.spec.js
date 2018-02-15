import { addNum, concatObject } from '../src/simple';

describe('simple', () => {
  it('add numbers', () => {
    expect(addNum(4, 6)).toBe(10);
  });

  it('concat object', () => {
    const arr = [
      { a: 'aaa' },
      { b: 'bbb' },
    ];
    const obj = { c: 'ccc' };
    expect(concatObject(arr, obj)).toEqual([
      { a: 'aaa' },
      { b: 'bbb' },
      { c: 'ccc' },
    ]);
  });
});
