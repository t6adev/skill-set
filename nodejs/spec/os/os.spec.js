import { getTempDir } from '../../src/os';

describe('os', () => {
  it('get temp directory filepath', () => {
    const tempDir = getTempDir();
    console.log(tempDir);
    expect(tempDir).toBeTruthy();
  });
});
