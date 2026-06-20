import prefersContrast from "./index";

afterEach(() => {
  delete (window as any).matchMedia;
});

test("should be a string", () => {
  expect(typeof prefersContrast()).toBe("string");
});

test("should use matchMedia when available", () => {
  const queries: string[] = [];
  (window as any).matchMedia = jest.fn((query: string) => {
    queries.push(query);
    return { matches: query === "(prefers-contrast: high)" };
  });

  expect(prefersContrast()).toBe("high");
  expect(queries).toEqual(["(prefers-contrast: high)"]);
});

test("should return unknown from matchMedia when fallback is disabled", () => {
  const queries: string[] = [];
  (window as any).matchMedia = jest.fn((query: string) => {
    queries.push(query);
    return { matches: false };
  });

  expect(prefersContrast(false)).toBe("unknown");
  expect(queries).toEqual([
    "(prefers-contrast: high)",
    "(prefers-contrast: low)",
    "(prefers-contrast: no-preference)"
  ]);
});

test("should be high, low or no-preference", () => {
  expect(["high", "low", "no-preference"].includes(prefersContrast())).toBeTruthy();
});

test("should be high, no-preference, or unknown", () => {
  expect(["high", "low", "no-preference", "unknown"].includes(prefersContrast())).toBeTruthy();
});
