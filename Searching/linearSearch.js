/**
 * Linear Search Algorithm
 *
 * @function linearSearch
 * @param {Array} arr - The array to search through
 * @param {any} val - The value to search for
 * @returns {number} The index of the found value or -1 if not found
 *
 * @description
 * Searches for a value in an array using linear search.
 *
 * @pseudocode
 * 1. Loop through each element in the array
 * 2. If the current element matches the value, return its index
 * 3. If the loop ends without finding the value, return -1
 * 
 * @complexity
 * Time Complexity: O(n)         // worst case: value is at the end or not present
 * Space Complexity: O(1)        // constant space usage
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// Examples
console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 200)) // -1
