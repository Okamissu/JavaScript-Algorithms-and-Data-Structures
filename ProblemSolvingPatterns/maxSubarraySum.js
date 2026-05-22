/**
 * @param {number[]} array array of integers
 * @param {number} num length of the subarray
 * @returns {number|null} Maximum sum of subarray of given length, or null if array is too short
 *
 * @description
 * Given an array of integers and a number, write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * Subarray must consist of consecutive elements from the original array.
 *
 * @pseudocode
 * 1. If the length of the array is less than num, return null.
 * 2. Compute the sum of the first num elements and assign it to maxSum.
 * 3. Set tempSum equal to maxSum.
 * 4. For each index i from num to array.length - 1:
 *    a. Add array[i] to tempSum and subtract array[i - num] from tempSum.
 *    b. If tempSum is greater than maxSum, update maxSum to tempSum.
 * 5. After the loop, return maxSum.
 *
 * @complexity
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
function maxSubarraySum(array, num) {
  if (array.length < num) {
    return null
  }

  let maxSum = 0
  for (let i = 0; i < num; i++) {
    maxSum += array[i]
  }

  let tempSum = maxSum

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - num]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null

