/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numbers: number[], target: number): number[] => {
  for (let p1 = 0; p1 < numbers.length; p1++) {
    const numberToFindIntoArray = target - numbers[p1];
    for (let p2 = 0; p2 < numbers.length; p2++) {
      if (numberToFindIntoArray === numbers[p2]) return [p1, p2];
    }
  }
  return [];
};

console.log(twoSum([1, 3, 9, 7, 2], 11), "expected [3,4]");
console.log(twoSum([2, 7, 3, 123], 9), "expected [1,2]");

const twoSumOptimized = (numbers: number[], target: number): number[] => {
  const numbersMap = {};
  for (let p = 0; p < numbers.length; p++) {
    const currentMapValue = numbersMap[numbers[p]];

    if (currentMapValue >= 0) {
      return [currentMapValue, p];
    } else {
      const numberToFind = target - numbers[p];
      numbersMap[numberToFind] = p;
    }
  }
  return null;
};

console.log(twoSumOptimized([1, 3, 9, 7, 2], 11), "expected [3,4]");
console.log(twoSumOptimized([2, 7, 3, 123], 9), "expected [1,2]");
