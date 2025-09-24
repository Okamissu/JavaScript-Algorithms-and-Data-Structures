// Check if two words are same length, if not -> return false. END

// Create a freq counter for the second word
// Populate it ^ as such {a: 2, b: 1, z: 4}

// Go over first word letters
// Check if there is such letter.
// False -> return false, can't be anagram. END
// True -> minus one of the value of key letter
// Continue this loop

// If loop passed without returning early, return true. END

/**
 * Checks if two strings are anagrams of each other.
 *
 * @param {string} a
 * @param {string} b
 *
 * @returns {boolean}
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
  }

  return true
}

// Example usage:
console.log(isAnagram('listen', 'silent')) // true
console.log(isAnagram('triangle', 'integral')) // true
console.log(isAnagram('apple', 'papel')) // true
console.log(isAnagram('rat', 'car')) // false
console.log(isAnagram('hello', 'bello')) // false
