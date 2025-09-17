const { stringCalculatorTdd } = require("./stringCalculatorTdd");

test("returns 0 for empty string", () => {
    expect(stringCalculatorTdd("")).toBe(0);
});