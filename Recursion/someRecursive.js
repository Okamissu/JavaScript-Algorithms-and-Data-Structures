/**
 * @param {any[]} arr - The array to check.
 * @param {(value: any) => boolean} callback - Function called on each element.
 * @returns {boolean} True if at least one element passes the callback, otherwise false.
 *
 * @description
 * Accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 *
 * @pseudocode
 * 1. If the array is empty, return false (base case)
 * 2. If the callback returns true for the first element, return true
 * 3. Otherwise, return someRecursive(arr.slice(1), callback)
 *
 * @complexity
 * Time Complexity: O(n)         // each element is checked once
 * Space Complexity: O(n)        // recursion depth = n
 */
function someRecursive(arr, callback) {
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

// SAMPLE INPUT
const isOdd = (val) => val % 2 !== 0

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)) // false
