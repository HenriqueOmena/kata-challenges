/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numbers: number[], target: number): number[] => {
  let result = [];
  numbers.forEach((number, index, array) => {
    const nextIndex = index + 1;
    if (number + array[nextIndex] == target) {
      return result.push(index, nextIndex);
    }
  });

  return result;
};

console.log(twoSum([2, 7, 11, 15], 9), "expected [1,2]");
console.log(twoSum([2, 27, 3, 123], 9), "expected [1,2]");
