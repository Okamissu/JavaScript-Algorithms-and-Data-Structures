/**
 * @param {number[]} arr - The sorted array to search (must be sorted in non-decreasing order).
 * @param {number} num - The number whose frequency is to be found.
 * @returns {number} The frequency of the number in the array, or -1 if not found.
 *
 * @description
 * Returns the frequency of a number in a sorted array.
 *
 * @complexity
 * Time Complexity: Each search is O(log n); overall O(log n)
 * Space Complexity: O(1)
 */
function sortedFrequency(arr, num) {
  let firstIndex = findFirst(arr, num)
  if (firstIndex === -1) return firstIndex
  let lastIndex = findLast(arr, num)
  return lastIndex - firstIndex + 1
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    // Condition: found the first occurrence
    if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
      return mid
    }
    // If num is bigger, search the right half
    else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high)
    }
    // Otherwise, search the left half
    else {
      return findFirst(arr, num, low, mid - 1)
    }
  }
  return -1
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)

    // Condition: found the last occurrence
    if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
      return mid
    }
    // If num is smaller, go left half
    else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1)
    }
    // Otherwise, go right half
    else {
      return findLast(arr, num, mid + 1, high)
    }
  }
  return -1
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1
