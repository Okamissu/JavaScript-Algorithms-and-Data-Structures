/**
 * Selection Sort
 *
 * @function selectionSort
 * @param {Array} array - The array of numbers to sort
 * @returns {Array} The same array, sorted in ascending order (in-place)
 *
 * @description
 * Classic selection sort: scan the remaining array to find
 * the smallest value and swap it into position
 *
 * @complexity
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    if (lowest !== i) {
      ;[array[i], array[lowest]] = [array[lowest], array[i]]
    }
  }

  return array
}
