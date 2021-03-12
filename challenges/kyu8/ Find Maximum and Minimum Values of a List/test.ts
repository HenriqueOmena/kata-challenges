import { min, max } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(min([1, 2, -43, -65, 90])).toBe(-65);
});

test("get the biggest number into array", () => {
  expect(max([2, 3, 4, 5, 6, 100, 4, 3, 2, 5])).toBe(100);
});
