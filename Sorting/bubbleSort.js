/**
 * Bubble Sort
 *
 * @function bubbleSort
 * @param {number[]} array - An array of numbers to be sorted.
 * @returns {number[]} The same array sorted in ascending order.
 *
 * @description
 * The algorithm repeatedly steps through the array, compares adjacent elements and swaps them if they are in the wrong order.
 * This process continues until the array is fully sorted.
 * This version modifies the original array in place.
 *
 * @pseudocode
 * 1. Start looping with i from the end of array towards the beginning.
 * 2. Start an inner loop with j from the beginning until i - 1.
 *    a. If array[j] > array[j+1], swap the values.
 * 3. Repeat until no more swaps are needed.
 * 4. Return the sorted array.
 *
 * @complexity
 * Time Complexity:
 *   - Worst Case: O(n^2) (array is in reverse order)
 *   - Best Case: O(n) (array is already sorted, if optimized with a swapped flag)
 *   - Average Case: O(n^2)
 * Space Complexity: O(1) – sorting is done in-place, no extra arrays used.
 */
function bubbleSort(array) {
  if (array.length < 2) return array

  for (let i = array.length - 1; i > 0; i--) {
    let swapped = false
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]] // inline swap
        swapped = true
      }
    }
    if (!swapped) break
  }

  return array
}

// Usage examples
console.log(bubbleSort([1, 3, 2, 1, 52, 31, 10, 7, 82, 81, 0, 9]))
console.log(bubbleSort([1, 2, 3, 4, 5]))
console.log(bubbleSort([5, 3, 2, 3, 1]))
