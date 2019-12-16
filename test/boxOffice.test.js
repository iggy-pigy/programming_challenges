const tickets = require("../challenges/boxOffice");

describe("tickets", () => {
  test("returns YES, if clerck can sell a ticket to every person and give change with the bills he has at hand at that moment, otherwise returns NO.", () => {
    const actual = tickets([25, 100]);
    expect(actual).toBe("YES");
  });
});