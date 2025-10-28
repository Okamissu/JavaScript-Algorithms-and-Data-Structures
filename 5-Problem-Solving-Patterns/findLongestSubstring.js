/**
 * @param {string} str any string
 * @returns {number} The length of the longest substring with all distinct characters
 *
 * @description
 * Accepts a string and returns the length of the longest substring with all distinct characters.
 *
 * @pseudocode
 * 1. Initialize longest and start variables to 0
 * 2. Initialize seenChars object
 * 3. Go through string in a for loop - i serves as right boundary
 *  a. If Character is seen in the seenChars obj, set start to maximum of either start or seenChars[char]
 *    - This ensures we only move start forward
 *  b. Set the longest to maximum of longest or i - start + 1
 *    - Similarly, this ensures we correctly set the new max length
 *  c. seenChars[char] = i + 1
 * 4. Return longest
 *
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function findLongestSubstring(str) {
  let longest = 0
  let start = 0
  const seenChars = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seenChars[char]) {
      start = Math.max(start, seenChars[char])
    }

    longest = Math.max(longest, i - start + 1)

    seenChars[char] = i + 1
  }
  return longest
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
