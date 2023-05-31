
function twoSum(array, target) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(array[i], i);
  }

  return [];
}
const array1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(array1, target1)); // Output: [0, 1]

const array2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(array2, target2)); // Output: [1, 2]

const array3 = [7, 3];
const target3 = 10;
console.log(twoSum(array3, target3)); // Output: [0, 1]
