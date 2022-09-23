const { shuffleArray } = require('./utils');

describe('shuffleArray should', () => {
  test('check to see if length is the same', () => {
    let arr = [1, 2, 3, 4, 5];
    let results = shuffleArray(arr);
    expect(arr.length).toBe(results.length);
  });

  test('array has same items', () => {
    let arr = [1, 2, 3, 4, 5];
    let results = shuffleArray(arr);

    let Var = true;

    for (let i = 0; i < results.length; i++) {
      if (arr.includes(results[i]) === false) {
        Var = false;
        return;
      }
    }
    expect(Var).toBe(true);
  });
});
