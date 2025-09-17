const { add } = require("./add");

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});


test("returns sum of the numbers in the string", () => {
    expect(add("1,5")).toBe(6);
});

