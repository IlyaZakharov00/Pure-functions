test("basic test", () => {
  let result = 4;
  expect(result).toBe(4);
});

import status from "../src/status.js";

test.each([
  [{ name: "Маг", health: 90 }, "healthy"],
  [{ name: "Дрыщ", health: 40 }, "wounded"],
  [{ name: "Труп", health: 10 }, "critical"],
])(
  "testing status",
  (man, expected) => {
    const result = status(man);
    expect(result).toBe(expected);
  }
);
