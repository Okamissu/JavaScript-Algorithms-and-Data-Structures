/**
 * Insertion Sort
 *
 * @function insertionSort
 * @param {Array} array - The array of numbers to sort
 * @param {Function} [comparator] - Optional comparison function.
 *   Should return a negative number if a < b, zero if a === b, and positive if a > b.
 *   Defaults to numeric ascending order.
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

function insertionSort(array, comparator) {
  if (!Array.isArray(array)) return array
  if (array.length < 2) return array

  // Default comparator works for numeric arrays - provide a custom comparator for non-numeric arrays
  const compare = comparator ?? ((a, b) => a - b)

  for (let i = 1; i < array.length; i++) {
    let currectVal = array[i]
    let j
    for (j = i - 1; (j >= 0) & (compare(array[j], currectVal) > 0); j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = currectVal
  }
  return array
}

// Usage examples
console.log(insertionSort([4, 20, 12, 10, 7, 9]))
console.log(insertionSort([0, -10, 7, 4]))
console.log(insertionSort([1, 2, 3]))
console.log(insertionSort([]))

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
]
console.log(insertionSort(nums))

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']
const stringComparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
console.log(insertionSort(kitties, stringComparator))

const moarKittyData = [
  { name: 'LilBub', age: 7 },
  { name: 'Garfield', age: 40 },
  { name: 'Heathcliff', age: 45 },
  { name: 'Blue', age: 1 },
  { name: 'Grumpy', age: 6 },
]
const oldestToYoungest = (a, b) => b.age - a.age
console.log(insertionSort(moarKittyData, oldestToYoungest))

console.log(insertionSort([2, 1, 9, 76, 4]))
