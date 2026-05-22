/**
 * @param {number[]} array - The rotated sorted array to search.
 * @param {number} num - The number to find in the array.
 * @returns {number} The index of the number in the array, or -1 if not found.
 *
 * @description
 * Finds the index of a given number in a rotated sorted array.
 * Uses a modified binary search to efficiently find the index of a target value in a rotated sorted array.
 *
 * @pseudocode
 * 1. Find the pivot where the array rotation occurs.
 * 2. Determine which subarray to search based on the target value.
 * 3. Perform binary search in the selected subarray.
 *
 * @complexity
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function findRotatedIndex(array, num) {
  let pivot = findPivot(array)
  // If the number lies between array[0] and array[pivot - 1],
  // search in the left (pre-rotation) half
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1)
  }
  // Otherwise, search in the rotated (post-pivot) half
  else {
    return binarySearch(array, num, pivot, array.length - 1)
  }
}

function binarySearch(array, num, start = 0, end = array.length - 1) {
  if (array.length === 0) return -1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] === num) {
      return mid
    } else if (num < array[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

function findPivot(arr) {
  let start = 0
  let end = arr.length - 1
  if (arr.length === 0) return 0
  if (arr[start] < arr[end]) return 0 // not rotated

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    // Pivot found: the "drop" point
    if (arr[mid] > arr[mid + 1]) return mid + 1
    // Left half is sorted, rotation must be on the right
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    }
    // Otherwise, rotation must be on the left
    else {
      end = mid - 1
    }
  }
  return 0 // fallback (unrotated)
}
