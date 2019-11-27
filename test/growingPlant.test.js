const growingPlant = require("../challenges/growingPlant");

describe("growingPlant", () => {
  test ("returns the number of days which is needed for plant to reach a certain level", () => {
    const actual = growingPlant(100, 10, 910);
    expect(actual).toBe(10);
});
});