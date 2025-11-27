/**
 * Binary Search Algorithm
 *
 * @function binarySearch
 * @param {Array} array - Sorted array to search within
 * @param {any} value - Value to search for
 * @returns {number} Index of the value if found, otherwise -1
 *
 * @description
 * Searches for a value in a sorted array using the binary search algorithm.
 *
 * @pseudocode
 * 1. Initialize leftPointer to 0 and rightPointer to the last index of the array
 * 2. While leftPointer is less than or equal to rightPointer:
 *   a. Calculate midPointer as the floor of (rightPointer + leftPointer) / 2
 *   b. If the element at midPointer equals the value, return midPointer
 *   c. If the element at midPointer is less than the value, set leftPointer to midPointer + 1
 *   d. If the element at midPointer is greater than the value, set rightPointer to midPointer - 1
 * 3. If the value is not found, return -1
 * 
 *
 * @complexity
 * Time Complexity: O(log n) 
 * Space Complexity: O(1) 
 */
function binarySearch(array, value) {
  let leftPointer = 0
  let rightPointer = array.length - 1

  while (leftPointer <= rightPointer) {
    const midPointer = Math.floor((rightPointer + leftPointer) / 2)
    if (array[midPointer] === value) return midPointer
    else if (array[midPointer] < value) leftPointer = midPointer + 1
    else if (array[midPointer] > value) rightPointer = midPointer - 1
  }

  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
) // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
) // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
) // -1
