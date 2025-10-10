/**
 * @param {...(string|number)} args - The values to check for duplicates.
 * @returns {boolean} Returns true if there are any duplicate values, false otherwise.
 *
 * @description
 * Checks if any duplicates exist among the provided arguments using the Frequency Counter pattern.
 *
 * @pseudocode
 * 1. Create an empty object `seen`.
 * 2. For each argument:
 *    a. If the value already exists in `seen`, return true.
 *    b. Otherwise, mark it as seen.
 * 3. If no duplicates found, return false.
 *
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function areThereDuplicatesFrequencyCounter(...args) {
  const seen = {}

  for (let val of args) {
    if (seen[val]) return true
    seen[val] = true
  }

  return false
}

/**
 * @param {...(string|number)} args - The values to check for duplicates.
 * @returns {boolean} Returns true if there are any duplicate values, false otherwise.
 *
 * @description
 * Checks if any duplicates exist among the provided arguments using the Multiple Pointers pattern.
 * This version sorts the array first, then compares adjacent values.
 *
 * @pseudocode
 * 1. Sort the input arguments.
 * 2. Loop through the sorted array:
 *    a. If any two adjacent elements are equal, return true.
 * 3. Return false if no duplicates found.
 *
 * @complexity
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function areThereDuplicatesMultiplePointers(...args) {
  args.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b
    }
    return String(a).localeCompare(String(b))
  })

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) return true
  }

  return false
}

/**
 * @param {...(string|number)} args - The values to check for duplicates.
 * @returns {boolean} Returns true if there are any duplicate values, false otherwise.
 *
 * @description
 * Checks for duplicates by comparing the number of unique elements to the total number of arguments.
 * Uses a Set to automatically remove duplicates.
 *
 * @pseudocode
 * 1. Create a new Set from the arguments.
 * 2. If the size of the Set is smaller than the total number of arguments, return true.
 * 3. Otherwise, return false.
function areThereDuplicatesSet(...args) {
  return new Set(args).size !== args.length
}
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const areThereDuplicatesSet = (...args) => new Set(args).size !== args.length

// Example usage:
console.log(areThereDuplicatesFrequencyCounter(1, 2, 3)) // false
console.log(areThereDuplicatesFrequencyCounter(1, 2, 2)) // true
console.log(areThereDuplicatesFrequencyCounter('a', 'b', 'c', 'a')) // true

console.log(areThereDuplicatesMultiplePointers(1, 2, 3)) // false
console.log(areThereDuplicatesMultiplePointers(1, 2, 2)) // true
console.log(areThereDuplicatesMultiplePointers('a', 'b', 'c', 'a')) // true

console.log(areThereDuplicatesSet(1, 2, 3)) // false
console.log(areThereDuplicatesSet(1, 2, 2)) // true
console.log(areThereDuplicatesSet('a', 'b', 'c', 'a')) // true
