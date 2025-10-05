/**
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {boolean} Returns true if the strings are anagrams, false otherwise.
 *
 * @description
 * Checks if two strings are anagrams of each other.
 * Counter pattern
 *
 * @pseudocode
 * 1. If length of a is not equal to length of b, return false.
 * 2. Create an empty object letterCountB.
 * 3. For each letter in b:
 *    a. Increment letterCountB[letter] by 1.
 * 4. For each letter in a:
 *    a. If letter is not in letterCountB, return false.
 *    b. Decrement letterCountB[letter] by 1.
 *    c. If letterCountB[letter] < 0, return false.
 * 5. Return true.
 *
 * @complexity
 * Time Complexity: O(n), where n is the length of the input strings.
 * Space Complexity: O(n), due to the frequency counter object.
 */
function isAnagram(a, b) {
  if (a.length !== b.length) return false

  const letterCountB = {}
  for (const letter of b) {
    letterCountB[letter] = (letterCountB[letter] || 0) + 1
  }

  for (const letter of a) {
    if (!(letter in letterCountB)) return false

    letterCountB[letter]--
    if (letterCountB[letter] < 0) return false
  }

  return true
}

// Example usage:
console.log(isAnagram('listen', 'silent')) // true
console.log(isAnagram('triangle', 'integral')) // true
console.log(isAnagram('apple', 'papel')) // true
console.log(isAnagram('rat', 'car')) // false
console.log(isAnagram('hello', 'bello')) // false

console.log(isAnagram('', '')) // true
console.log(isAnagram('aaz', 'zza')) // false
console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('awesome', 'awesom')) // false
console.log(isAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(isAnagram('qwerty', 'qeywrt')) // true
console.log(isAnagram('texttwisttime', 'timetwisttext')) // true
