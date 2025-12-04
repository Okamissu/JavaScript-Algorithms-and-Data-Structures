/**
 * Insertion Sort
 *
 * @function insertionSort
 * @param {Array} array - The array of numbers to sort
 * @returns {Array} The array sorted in ascending order (in-place)
 *
 * @pseudocode
 * 1. Start by picking the 2nd element in the array
 * 2. Compare it to the 1 before it and swap if needed
 * 3. Continue to the next element - if in incorrect order, iterate through the sorted part to find correct place.
 * 4. Repeat until sorted
 *
 * @complexity
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currectVal = array[i]
    let j
    for (j = i - 1; (j >= 0) & (array[j] > currectVal); j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = currectVal
  }
  return array
}

console.log(insertionSort([2, 1, 9, 76, 4]))
