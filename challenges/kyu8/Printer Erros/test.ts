import { printError } from "./";

test("should pass in test with 0/14", () => {
  expect(printError("aaabbbbhaijjjm")).toBe("0/14");
});
