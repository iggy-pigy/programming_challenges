const nbYear = require("../challenges/growthOfPopulation");

describe("nbYear", () => {
  test("returns number of years (15) which are needed to reach the population of 5000 people, if starting population is 1500 and every year it grows by 5% and 100 people", () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
  });
  test("returns number of years (10) which are needed to reach the population of 2000000 people, if starting population is 1500000 and every year it grows by 2.5% and 10000 people", () => {
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
  });
});
