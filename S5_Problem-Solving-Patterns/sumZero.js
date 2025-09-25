/**
 *
 * @param {number[]} arr - A sorted array of numbers to search for a zero-sum pair.
 * @returns {(number[]|undefined)} Returns an array containing the pair of numbers whose sum is zero, or `undefined` if no such pair exists.
 *
 * @description
 * Finds the first pair of numbers in a sorted array whose sum is zero.
 * Pointers pattern
 *
 * 
 * @pseudocode
 * 1. Initialize two pointers: start at the beginning, end at the end of the array.
 * 2. While start < end:
 *    a. Calculate sum of arr[start] + arr[end].
 *    b. If sum is zero, return [arr[start], arr[end]].
 *    c. If sum > 0, decrement end.
 *    d. If sum < 0, increment start.
 * 3. If no pair found, return undefined.

* @complexity
* Time Complexity: O(n), where n is the length of the input array.
* Space Complexity: O(1), as no additional space is used beyond variables for pointers.
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
