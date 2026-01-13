const { add, square } = require("./add.utill");
const fc = require("fast-check");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("squares 3 to equal 9", () => {
  expect(square(3)).toBe(9);
});

test("adds 1 + 2 to equal 3 fast-check", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
      expect(add(a, b)).toBe(a + b);
    })
  );
});

test("squares x to equal x * x fast-check", () => {
  fc.assert(
    fc.property(fc.integer(), (x) => {
      expect(square(x)).toBe(x * x);
    })
  );
});
