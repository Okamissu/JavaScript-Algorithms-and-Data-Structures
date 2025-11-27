/**
 * @param {number[]} arr - An array of positive integers.
 * @returns {number[]} An array of integers that appear exactly twice in the input array, in ascending order.
 *
 * @description
 * Given an array of positive integers, some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 *
 * @pseudocode
 * Use frequency counter pattern
 *
 * 0. Check if arr is an array, return empty array if not
 * 1. Initialize a counter & populate it
 * 2. Iterate through the counter and collect keys with a value of 2 into the result array
 * 3. Return the array
 *
 * @complexity
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function findAllDuplicates(arr) {
  if (!Array.isArray(arr)) {
    // Invalid input: not an array. Return empty array.
    return []
  }

  const counter = {}

  for (const num of arr) {
    counter[num] = (counter[num] || 0) + 1
  }

  const duplicates = []

  for (const [key, value] of Object.entries(counter)) {
    if (value === 2) duplicates.push(+key) // Cast to number as obj keys are strings
  }

  return duplicates
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // Expected output: [2, 3]
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // Expected output: []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // Expected output: [1, 2, 3]
