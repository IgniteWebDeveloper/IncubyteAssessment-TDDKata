const { stringCalculatorTdd } = require("./stringCalculatorTdd");

test("returns 0 for empty string", () => {
    expect(stringCalculatorTdd("")).toBe(0);
});


test("returns sum of the numbers in the string", () => {
    expect(stringCalculatorTdd("1,5")).toBe(6);
});

