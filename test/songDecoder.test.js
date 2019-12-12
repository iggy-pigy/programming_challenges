const songDecoder = require("../challenges/songDecoder");

describe("songDecoder", () => {
  test("returns the words of the initial song whitout word WUB", () => {
    const actual = songDecoder("AWUBBWUBC");
    expect(actual).toBe("A B C");
  });
  test("returns the words of the initial song, multiples WUB should be replaced by only 1 space", () => {
    const actual = songDecoder("AWUBWUBWUBBWUBWUBWUBC");
    expect(actual).toBe("A B C");
  });
});