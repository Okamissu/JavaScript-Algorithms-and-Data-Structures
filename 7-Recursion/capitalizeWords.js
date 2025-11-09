/**
 *
 * @param {Array} arr
 * @returns {Array}
 *
 * @description
 * Capitalizes all words in an array of strings using recursion.
 *
 * @pseudocode
 * 1. If the array is empty, return an empty array (base case)
 * 2. Capitalize the first word and concatenate it with the result of capitalizeWords on the rest of the array
 *
 * @complexity
 * Time Complexity: O(n) - where n is the number of words in the array
 * Space Complexity: O(n) - due to recursion call stack and new array creation
 */
function capitalizeWords(arr) {
  if (arr.length > 0) {
    const word = typeof arr[0] === 'string' ? arr[0].toUpperCase() : arr[0];
    return [word, ...capitalizeWords(arr.slice(1))];
  }

  return [...arr]
}

console.log(capitalizeWords([])) // []
console.log(capitalizeWords(['hello', 'world'])) // ['HELLO', 'WORLD']
console.log(capitalizeWords(['JavaScript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']
console.log(capitalizeWords(['a', 'b', 'c'])) // ['A', 'B', 'C']
console.log(capitalizeWords(['recursion'])) // ['RECURSION']
console.log(capitalizeWords([''])) // ['']
console.log(capitalizeWords(['mixed', 123, 'types'])) // ['MIXED', 123, 'TYPES']