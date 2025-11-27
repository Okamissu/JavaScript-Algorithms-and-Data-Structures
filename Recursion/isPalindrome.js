/**
 * @param {string} str
 * @returns {boolean}
 *
 * @description
 * Determines if a given string is a palindrome using recursion.
 * A palindrome reads the same forwards and backwards.
 *
 * @pseudocode
 * 1. If the string length is 1 or less, return true (base case)
 * 2. If the first and last characters are the same:
 *      - return isPalindrome(str.slice(1, -1))
 * 3. Otherwise, return false
 *
 * @complexity
 * Time Complexity: O(n)         // each character is checked once
 * Space Complexity: O(n)        // recursion depth = n/2
 */
function isPalindrome(str) {
  if (str.length <= 1) return true
  else if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1))

  return false
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
