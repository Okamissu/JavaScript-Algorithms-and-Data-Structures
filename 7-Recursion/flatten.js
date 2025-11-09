/**
 * @param {Array} arr - The array to flatten.
 * @returns {Array} - The flattened array.
 *
 * @description
 * Flattens a nested array structure into a single-level array.
 *
 * @pseudocode
 * 1. Initialize an empty array to hold the flattened result.
 * 2. Loop through each item in the input array:
 *    a. If the item is an array, recursively flatten it and concatenate the result to the new array.
 *    b. If the item is not an array, push it directly to the new array.
 * 3. Return the new flattened array.
 *
 * @complexity
 * Time Complexity: O(n) - where n is the total number of elements in all nested arrays.
 * Space Complexity: O(n) - for storing the flattened array.
 */
function flatten(arr) {
  const newArr = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      newArr.push(...flatten(item))
    } else {
      newArr.push(item)
    }
  }

  return newArr
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
