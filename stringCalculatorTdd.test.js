const { add } = require("./stringCalculatorTdd");

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});