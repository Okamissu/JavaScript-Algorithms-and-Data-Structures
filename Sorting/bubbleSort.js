/**
 * Bubble Sort
 *
 * @function bubbleSort
 * @param {Array} array - The array of elements to sort.
 * @param {Function} [comparator] - Optional comparison function.
 *   Should return a negative number if a < b, zero if a === b, and positive if a > b.
 *   Defaults to numeric ascending order.
 * @returns {Array} The sorted array (in place).
 *
 * @description
 * Sorts an array using the bubble sort algorithm. Repeatedly compares adjacent
 * elements and swaps them if out of order according to the comparator.
 * Optimizations:
 *   - Early termination if no swaps in a pass.
 *   - Reduce inner loop to the last swap index to skip already sorted tail.
 *
 * @pseudocode
 * 1. If no comparator is provided, use default numeric ascending comparator
 * 2. Set n = array length
 * 3. While n > 1:
 *    a. Initialize lastSwapIndex = 0
 *    b. Loop i from 0 to n - 2:
 *       i. If comparator(array[i], array[i+1]) > 0:
 *          - Swap array[i] and array[i+1]
 *          - Set lastSwapIndex = i + 1
 *    c. Set n = lastSwapIndex (reduce next pass to unsorted portion)
 * 4. Return array
 *
 * @complexity
 * Time Complexity:
 *   - Worst Case: O(n^2)
 *   - Best Case: O(n) with swapped flag (early termination)
 *   - Average Case: O(n^2)
 * Space Complexity: O(1) – sorts in place.
 */
const bubbleSort = (array, comparator) => {
  if (!Array.isArray(array)) return array
  if (array.length < 2) return array

  // Default comparator works for numeric arrays - provide a custom comparator for non-numeric arrays
  const compare = comparator ?? ((a, b) => a - b)

  let n = array.length
  while (n > 1) {
    let lastSwapIndex = 0
    for (let i = 0; i < n - 1; i++) {
      if (compare(array[i], array[i + 1]) > 0) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        lastSwapIndex = i + 1
      }
    }
    n = lastSwapIndex
  }

  return array
}

// Usage examples
console.log(bubbleSort([4, 20, 12, 10, 7, 9]))
console.log(bubbleSort([0, -10, 7, 4]))
console.log(bubbleSort([1, 2, 3]))
console.log(bubbleSort([]))

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
]
console.log(bubbleSort(nums))

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']
const stringComparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
console.log(bubbleSort(kitties, stringComparator))

const moarKittyData = [
  { name: 'LilBub', age: 7 },
  { name: 'Garfield', age: 40 },
  { name: 'Heathcliff', age: 45 },
  { name: 'Blue', age: 1 },
  { name: 'Grumpy', age: 6 },
]
const oldestToYoungest = (a, b) => b.age - a.age
console.log(bubbleSort(moarKittyData, oldestToYoungest))
