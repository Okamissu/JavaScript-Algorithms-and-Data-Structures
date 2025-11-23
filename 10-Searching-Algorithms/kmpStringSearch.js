/**
 * KMP Substring Search
 *
 * @function kmpStringSearch
 * @param {string} text - The text in which to search
 * @param {string} pattern - The substring pattern to look for
 * @returns {number} The number of occurrences of the pattern in the text
 *
 * @description
 * Knuth-Morris-Pratt string search algorithm efficiently finds all occurrences
 * of a substring (pattern) in a text.
 * It first preprocesses the pattern to create the LPS (Longest Prefix Suffix) table,
 * which allows the search phase to skip unnecessary comparisons
 * and avoid backtracking in the text.
 *
 * @pseudocode
 * 1. Build the LPS table for the pattern
 * 2. Set two pointers: one for text, one for pattern
 * 3. While scanning through the text:
 *    a. If characters match, move both pointers
 *    b. If pattern pointer reaches the end = one match found
 *      - Increase match count.
 *      - Move pattern pointer using LPS table
 *    c. If characters do NOT match:
 *      - If pattern pointer is not at 0, jump using LPS
 *      - Otherwise move text pointer forward
 * 4. Return the match count
 *
 * @complexity
 * Time Complexity: O(n + m), where n = text.length, m = pattern.length
 * Space Complexity: O(m), for storing the LPS table
 */
function kmpStringSearch(text, pattern) {
  if (typeof text !== 'string' || typeof pattern !== 'string') return 0
  if (pattern === '') return text.length + 1

  const lpsTable = lpsStringPreprocess(pattern)
  let textIndex = 0
  let patternIndex = 0
  let matchCount = 0

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      textIndex++
      patternIndex++
      if (patternIndex === pattern.length) {
        matchCount++
        patternIndex = lpsTable[patternIndex - 1]
      }
    } else {
      if (patternIndex !== 0) {
        patternIndex = lpsTable[patternIndex - 1]
      } else {
        textIndex++
      }
    }
  }
  return matchCount
}

/**
 * LPS string Preprocessing
 *
 * @function lpsStringPreprocess
 * @param {string} pattern - The substring pattern to create LPS table for
 * @returns {number[]} LPS table (stored in an array) for the passed pattern
 *
 * @description
 * The LPS (Longest Prefix Suffix) table stores, for each index in the pattern,
 * the length of the longest proper prefix which is also a suffix for the substring
 * pattern[0..index]. This table is used during the KMP search to skip unnecessary
 * character comparisons.
 *
 * @pseudocode
 * 1. Create LPS array filled with 0
 * 2. Set two pointers: currentIndex and lengthOfPrefix
 * 3. While currentIndex < pattern length:
 *    a. If characters match:
 *      - Increase prefix length
 *      - Save it into LPS at currentIndex
 *      - Move currentIndex forward
 *    b. If they do NOT match:
 *      - If prefix length > 0, jump back using LPS
 *      - Else set LPS[currentIndex] = 0 and move forward
 * 4. Return the LPS array
 * 
 * @complexity
 * Time Complexity: O(m), where m = pattern.length
 * Space Complexity: O(m), for storing the LPS table
 */
function lpsStringPreprocess(pattern) {
  const lpsTable = Array(pattern.length).fill(0)
  let longestPrefixSuffixLength = 0
  let currentIndex = 1

  while (currentIndex < pattern.length) {
    if (pattern[currentIndex] === pattern[longestPrefixSuffixLength]) {
      longestPrefixSuffixLength++
      lpsTable[currentIndex] = longestPrefixSuffixLength
      currentIndex++
    } else {
      if (longestPrefixSuffixLength !== 0) {
        longestPrefixSuffixLength = lpsTable[longestPrefixSuffixLength - 1]
      } else {
        currentIndex++
      }
    }
  }
  return lpsTable
}
