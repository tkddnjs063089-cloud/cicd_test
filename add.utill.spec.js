const { add } = require("./add.utill");
const fc = require("fast-check");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3 fast-check", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
      expect(add(a, b)).toBe(a + b);
    })
  );
});
