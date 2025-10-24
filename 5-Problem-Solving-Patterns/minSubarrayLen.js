/**
 * @param {number[]} nums - An array of positive integers.
 * @param {number} targetSum - A positive integer target sum.
 * @returns {number} The minimal length of a contiguous subarray
 *                   whose sum >= targetSum, or 0 if no such subarray exists.
 *
 * @description
 * Finds the minimal length of a contiguous subarray
 * whose sum is greater than or equal to the target sum.
 *
 * @pseudocode
 * 1. Initialize totalSum to 0, start index to 0, and minLen to Infinity.
 * 2. Iterate end from 0 to the end of the array:
 *    a. Add nums[end] to totalSum.
 *    b. While totalSum >= targetSum:
 *       i. Update minLen to the smaller of minLen and end - start + 1.
 *       ii. Subtract nums[start] from totalSum.
 *       iii. Increment start to shrink the window.
 * 3. If minLen is Infinity, return 0 (no valid subarray).
 * 4. Otherwise, return minLen.
 *
 * @complexity
 * Time Complexity: O(n) - each element is visited at most twice.
 * Space Complexity: O(1) - only a few variables are used.
 */
function minSubarrayLen(nums, targetSum) {
  let totalSum = 0
  let start = 0
  let minLen = Infinity

  for (let end = 0; end < nums.length; end++) {
    totalSum += nums[end]

    while (totalSum >= targetSum) {
      minLen = Math.min(minLen, end - start + 1)
      totalSum -= nums[start]
      start++
    }
  }

  return minLen === Infinity ? 0 : minLen
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0
