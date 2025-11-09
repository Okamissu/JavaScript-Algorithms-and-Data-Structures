/**
 * @param {number[]} arr
 * @param {number} i - current index (used for recursion)
 * @returns {number}
 *
 * @description
 * Takes in an array of numbers and returns the product of them all.
 *
 * @pseudocode
 * 1. Define a recursive helper that takes index i (starting at 0)
 * 2. If i equals arr.length, return 1 (base case)
 * 3. Return arr[i] * productOfArray(arr, i + 1)
 *
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(n) — due to recursion call stack
 */

function productOfArray(arr, i = 0) {
  if (i === arr.length) return 1
  return arr[i] * productOfArray(arr, i + 1)
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60
