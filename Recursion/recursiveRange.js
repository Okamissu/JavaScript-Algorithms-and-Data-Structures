/**
 * @param {number} num
 * @returns {number}
 *
 * @description
 * Takes in a number and returns the sum of all numbers from 0 to num.
 *
 * @pseudocode
 * 1. If num <= 0, return 0  (base case)
 * 2. Return num + recursiveRange(num - 1)
 *
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function recursiveRange(num) {
  if (num <= 0) return 0
  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55
console.log(recursiveRange(100)) // 5050