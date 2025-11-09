/**
 * @param {string[]} arr - Array of strings to capitalize.
 * @returns {string[]} A new array with the first letter of each string capitalized.
 *
 * @description
 * Recursively capitalizes the first letter of each string in the input array.
 * Handles empty strings and does not modify the original array.
 *
 * @pseudocode
 * 1. If arr is empty, return [] (base case)
 * 2. If arr[0] is an empty string, push '' to result
 * 3. Otherwise, capitalize arr[0][0] + arr[0].slice(1)
 * 4. Return [capitalized, ...capitalizeFirst(arr.slice(1))]
 *
 * @complexity
 * Time Complexity: O(n) — each element processed once.
 * Space Complexity: O(n) — recursion depth and new array creation.
 */
function capitalizeFirst(arr) {
  if (arr.length === 0) return []

  const first = arr[0]
  const capitalized = first ? first[0].toUpperCase() + first.slice(1) : '' // handles empty string safely

  return [capitalized, ...capitalizeFirst(arr.slice(1))]
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']
console.log(capitalizeFirst(['apple', 'orange', 'pear'])) // ['Apple','Orange','Pear']
console.log(capitalizeFirst(['hello', 'there', 'friend'])) // ['Hello','There','Friend']
console.log(capitalizeFirst([])) // []
console.log(capitalizeFirst(['', 'b', 'c'])) // ['','B','C']
console.log(capitalizeFirst(['a'])) // ['A']
