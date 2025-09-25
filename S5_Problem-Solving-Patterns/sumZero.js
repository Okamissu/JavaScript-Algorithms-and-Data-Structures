/**
 * Pseudocode:
 * 1. Initialize two pointers: start at the beginning, end at the end of the array.
 * 2. While start is less than end:
 *    a. Calculate the sum of the values at start and end.
 *    b. If the sum is zero, return the pair.
 *    c. If the sum is greater than zero, move the end pointer left.
 *    d. If the sum is less than zero, move the start pointer right.
 * 3. If no pair is found, return undefined.
 */

/**
 * Finds the first pair of numbers in a sorted array whose sum is zero.
 *
 * @param {number[]} arr - Sorted array of numbers.
 * @returns {(number[]|undefined)} - The pair whose sum is zero, or `undefined` if no such pair exists.
 */
function sumZero(arr) {
  let end = arr.length - 1
  let start = 0

  while (start < end) {
    const sum = arr[start] + arr[end]
    if (sum === 0) {
      return [arr[start], arr[end]]
    } else if (sum > 0) {
      end--
    } else {
      start++
    }
  }

  return undefined
}
// Example usage:
// Expected output: [-3, 3] (first pair whose sum is zero)
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
// Expected output: undefined
console.log(sumZero([-2, 0, 1, 3]))
// Expected output: undefined
console.log(sumZero([1, 2, 3]))
