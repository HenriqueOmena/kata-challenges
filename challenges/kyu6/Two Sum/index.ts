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


console.log('just a test to commit')
console.log(twoSum([1, 3, 9, 7, 2], 11), "expected [3,4]");
console.log(twoSum([2, 27, 3, 123], 9), "expected [1,2]");
