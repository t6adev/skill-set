import path from 'path';
import { readLines } from '../../src/file-system/read';

describe('read', () => {
  it('get lines by text file', () => {
    const filepath = path.join(__dirname, '../../data/sample01.txt');
    expect(readLines(filepath)).toEqual(['I', 'am', 'tell-y.', '']);
  });
});
