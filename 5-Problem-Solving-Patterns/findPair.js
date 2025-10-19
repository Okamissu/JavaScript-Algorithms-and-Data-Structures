/**
 * @function findPair
 * @param {number[]} arr - An array of unsorted integers.
 * @param {number} n - The target difference to find between any two elements.
 * @returns {boolean} - Returns true if there exists a pair of elements in the array whose absolute difference is `n`, otherwise false.
 *
 * @description
 * Given an unsorted array and a number `n`, this function checks whether there exists
 * a pair of elements in the array such that the absolute difference between them is exactly `n`.
 * It uses a frequency counter pattern for an efficient solution with linear time and space complexity.
 *
 * This function satisfies the following complexity requirements:
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @pseudocode
 * Frequency Counter Approach:
 * 1. If n is 0:
 *    a. Iterate through the array while tracking the frequency of each element.
 *    b. If any element appears more than once, return true.
 *    c. Otherwise, return false.
 *
 * 2. If n is not 0:
 *    a. Normalize n to be positive using Math.abs(n).
 *    b. Create an empty Set to store seen numbers.
 *    c. For each number in the array:
 *        i.   Check if (number + n) or (number - n) exists in the Set.
 *        ii.  If yes, return true.
 *        iii. Otherwise, add the current number to the Set.
 *    d. If no such pair is found, return false.
 */
function findPair(arr, n) {
  if (n === 0) {
    const freq = new Map()
    for (let num of arr) {
      // This returns immediately on the first duplicate found; does not collect all pairs or their indices.
      if (freq.has(num)) return true
      freq.set(num, 1)
    }
    return false
  }
  n = Math.abs(n) // Ensure n is non-negative
  n = Math.abs(n) // Normalize negative n

  const seen = new Set()
  for (let num of arr) {
    if (seen.has(num + n) || seen.has(num - n)) {
      return true
    }
    seen.add(num)
  }

  return false
}

const testCases = [
  [[6, 1, 4, 10, 2, 4], 2],
  [[8, 6, 2, 4, 1, 0, 2, 5, 13], 1],
  [[4, -2, 3, 10], -6],
  [[6, 1, 4, 10, 2, 4], 22],
  [[], 0],
  [[5, 5], 0],
  [[-4, 4], -8],
  [[-4, 4], 8],
  [[1, 3, 4, 6], -2],
  [[0, 1, 3, 4, 6], -2],
  [[1, 2, 3], 0],
]

console.log('=== Frequency Counter ===')
for (const [arr, n] of testCases) {
  console.log(`findPair(${JSON.stringify(arr)}, ${n}) =>`, findPair(arr, n))
}

/**
 * @function findPairSorted
 * @param {number[]} arr - An array of unsorted integers.
 * @param {number} n - The target difference to find between any two elements.
 * @returns {boolean} - Returns true if there exists a pair of elements in the array whose absolute difference is `n`, otherwise false.
 *
 * @description
 * Given an unsorted array and a number `n`, this function checks whether there exists
 * a pair of elements in the array such that the absolute difference between them is exactly `n`.
 * It uses the multiple pointers pattern for an efficient solution with O(n log n) time and O(1) space.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 *
 * @pseudocode
 * 1. Sort the array in ascending order.
 * 2. Initialize two pointers: left = 0, right = 1.
 * 3. While right < array length:
 *    a. Compute diff = arr[right] - arr[left].
 *    b. If diff === n and left !== right → return true.
 *    c. If diff < n → increment right (to increase diff).
 *    d. If diff > n → increment left (to decrease diff).
 *    e. If left catches up to right → increment right.
 * 4. If no such pair found → return false.
 */
function findPairSorted(arr, n) {
  arr = [...arr].sort((a, b) => a - b)
  n = Math.abs(n)

  let left = 0
  let right = 1

  while (right < arr.length) {
    const diff = arr[right] - arr[left]

    if (diff === n && left !== right) {
      return true
    } else if (diff < n) {
      right++
    } else {
      left++
    }

    // Ensure right always stays ahead of left
    if (left === right) right++
  }

  return false
}

console.log('=== Multiple Pointers ===')
for (const [arr, n] of testCases) {
  console.log(
    `findPairSorted(${JSON.stringify(arr)}, ${n}) =>`,
    findPairSorted(arr, n)
  )
}
