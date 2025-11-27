/**
 * @param {number[]} arr - Sorted array, which can include negative numbers
 * @returns {number} Returns a number of unique values of the array
 *
 * @description
 * A function which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 *
 * Bonus
 * You must do this with constant or O(1) space and O(n) time.
 *
 * @pseudocode
 * If array length === 0, return false
 * Initialize a counter of type number
 * Go through the array and count each unique value, by checking if value before it was the same one
 * (Works due to array being sorted)
 * Return the counter
 *
 * // Set version
 * If array length === 0, return false
 * Make set out of array, return set size
 *
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(1) || O(n) for the Set version
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let count = 1 // at least one unique value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++
    }
  }
  return count
}

function countUniqueValuesSet(arr) {
  if (arr.length === 0) return 0
  const uniqueValues = new Set(arr)
  return uniqueValues.size
}

// Example usage:
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
