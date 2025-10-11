/**
 * @param {string} str1 - The string to check as a subsequence.
 * @param {string} str2 - The string to check against.
 * @returns {boolean} - Returns true if str1 is a subsequence of str2, otherwise false.
 *
 * @description
 *  Checks if the characters in the first string form a subsequence of the characters in the second string.
 *
 * @pseudocode
 * 1. If either argument is not a string, return false.
 * 2. Initialize two pointers i and j to 0.
 * 3. While j is less than the length of str2:
 *    a. If str2[j] equals str1[i], increment i.
 *    b. If i equals the length of str1, return true.
 *    c. Increment j.
 * 4. Return false.
 *
 * @complexity
 * Time Complexity: O(N+M)
 * Space Complexity: O(1)
 */
function isSubsequence(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return false

  let i = 0,
    j = 0

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }

  return false
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
