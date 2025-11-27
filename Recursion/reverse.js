/**
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 *
 *
 * @description
 * Reverses a string using recursion.
 *
 * @pseudocode
 * 1. If the string length is 1 or less, return the string (base case)
 * 2. Otherwise, return reverse(str.slice(1)) + str[0]
 *    - This takes the first character and appends it to the reversed substring
 *
 * @complexity
 * Time Complexity: O(n)         // each character is processed once
 * Space Complexity: O(n)        // recursion depth = n
 */
function reverse(str) {
  if (str.length <= 1) return str

  return reverse(str.slice(1)) + str[0]
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
console.log(reverse('hello')) // 'olleh'
console.log(reverse('abcd')) // 'dcba'
