/**
 * @param {string} message - a message
 * @param {string} letters - some letters
 * @returns {boolean} Returns true if message can be arranged using letters, false otherwise
 *
 * @description
 * The function should return
 *  true if the message can be built with the letters that you are given,
 *  or it should return false.
 *
 * Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
 *
 * Bonus Constraints:
 * If M is the length of message and N is the length of letters:
 * Time Complexity: O(M+N)
 * Space Complexity: O(N)
 *
 * @pseudocode
 * Use frequency counter pattern
 *
 * 0. Ensure message and letters are strings
 * 1. Create a counter
 * 2. Populate it with letters
 * 3. Go over message in a loop
 *    checking if value of letter key is falsy or <= 0
 *    true: return false
 *    false: subtract one out of value of digit key
 * 4. Return true
 *
 * @complexity
 * Time Complexity: O(M+N)
 * Space Complexity: O(N)
 */

function constructNote(message, letters) {
  if (typeof message !== 'string') {
    throw new TypeError('The "message" parameter must be a string.')
  }

  if (typeof letters !== 'string') {
    throw new TypeError('The "letters" parameter must be a string.')
  }

  // Frequency counter for letters in the 'letters' string
  const letterCounter = {}

  // Populate it
  for (const letter of letters) {
    letterCounter[letter] = (letterCounter[letter] || 0) + 1
  }

  for (const char of message) {
    if (!letterCounter[char] || letterCounter[char] <= 0) {
      return false
    }

    letterCounter[char]--
  }

  return true
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
