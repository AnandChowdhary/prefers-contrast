import prefersContrast from "./index";

test("should be a string", () => {
  expect(typeof prefersContrast()).toBe("string");
});

test("should be high, low or no-preference", () => {
  expect(["high", "low", "no-preference"].includes(prefersContrast())).toBeTruthy();
});

test("should be high, no-preference, or unknown", () => {
  expect(["high", "low", "no-preference", "unknown"].includes(prefersContrast())).toBeTruthy();
});
