const skiJump = require("../challenges/skiJump");

describe("skiJump", () => {
  test("returns the lenght of the resulting jump", () => {
    const actual = skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********']);
    expect(actual).toBe(86.40);
  });
  
  test("returns the length of the resulting jump as a string in the following format", () => {
    const actual = skiJump(['*', '**', '***', '****', '*****', '******']);
    expect(actual).toBe('48.60 metres: He\'s flying!');
  });
});