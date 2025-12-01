/**
 * Selection Sort
 *
 * @function selectionSort
 * @param {Array} array - The array of numbers to sort
 * @param {Function} [comparator] - Optional comparison function.
 *   Should return:
 *     - negative if a < b
 *     - zero if a === b
 *     - positive if a > b
 *   Defaults to numeric ascending.
 * @returns {Array} The same array, sorted in ascending order (in-place)
 *
 * @description
 * Classic selection sort:
 *  - Iterate from left to right
 *  - For each position i, find the smallest element in the rest of the array
 *    according to the comparator
 *  - Swap it into position i
 *
 * @complexity
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function selectionSort(array, comparator) {
  if (!Array.isArray(array)) return array
  if (array.length < 2) return array

  const compare = comparator ?? ((a, b) => a - b)

  for (let i = 0; i < array.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[j], array[minIndex]) < 0) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }

  return array
}

// ### Examples ###
console.log(selectionSort([4, 20, 12, 10, 7, 9])) // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])) // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])) // [1, 2, 3]
console.log(selectionSort([]))

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
]
console.log(selectionSort(nums)) // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']

function strComp(a, b) {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }
  return 0
}

console.log(selectionSort(kitties, strComp)) // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

let moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
]

function oldestToYoungest(a, b) {
  return b.age - a.age
}

console.log(selectionSort(moarKittyData, oldestToYoungest))
