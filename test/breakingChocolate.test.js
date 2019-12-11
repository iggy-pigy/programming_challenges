const breakingChocolate = require("../challenges/breakingChocolate");

describe("breakingChocolate", () => {
  test("returns the minimum number of breaks needed to split chocolate bar of given dimension n x m into small squares (each square is of size 1x1 and unbreakable)", () => {
    const actual = breakingChocolate(3, 3);
    expect(actual).toBe(8);
  });
  test("returns the minimum number of breaks needed to split chocolate bar of given dimension n x m into small squares (if input data is invalid (negative integer) or no breaks needed, will return 0)", () => {
    const actual = breakingChocolate(1, 1);
    expect(actual).toBe(0);
  });
});