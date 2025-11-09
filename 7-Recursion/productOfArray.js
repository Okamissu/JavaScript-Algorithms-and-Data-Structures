/**
 * @param {number[]} arr
 * @returns {number}
 *
 * @description
 * Takes in an array of numbers and returns the product of them all.
 *
 * @pseudocode
 * 1. If arr.length is 1, return arr[0]
 * 2. If arr.length is 0, return 1
 * 3. Return arr[0] * productOfArray(arr.slice(1))
 *
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else if (arr.length === 0) {
    return 1
  }

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60
