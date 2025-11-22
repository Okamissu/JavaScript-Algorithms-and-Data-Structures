/**
Naive Substring Search (Brute-Force)

@function naiveSearch
@param {string} text - The text in which to search
@param {string} pattern - The substring pattern to look for
@returns {number} The number of occurrences of the pattern in the text

@description
Checks every possible starting position in the text to see
whether the pattern matches character by character.
(This means, the algorithm counts overlapping substrings - so all possibilities)

@pseudocode
For each index i in the text:
  a. Compare pattern with text starting at i.
  b. If all characters match, increment count.
Return the number of matches.

@complexity
Time Complexity: O(n * m) — n = text length, m = pattern length
Space Complexity: O(1)
*/
function naiveSearch(text, pattern) {
  let count = 0

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== text[i + j]) break
      if (j === pattern.length - 1) count++
    }
  }

  return count
}

console.log(naiveSearch('lorie loled lolol', 'lol'))
