const { add } = require("./stringCalculatorTdd");

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});


test("returns sum of the numbers in the string", () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test("handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
});

