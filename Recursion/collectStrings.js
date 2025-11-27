/**
 * Recursively collects all string values from an object and its nested objects.
 *
 * @param {Record<string, any>} obj - The input object to search through.
 * @returns {string[]} An array containing all string values found.
 *
 * @description
 * Traverses an object recursively and returns all string values.
 * Ignores arrays, functions, and non-plain objects.
 *
 * @pseudocode
 * 1. Initialize an empty array `strings`.
 * 2. For each value in the object:
 *    a. If the value is a string, push it to `strings`.
 *    b. If the value is a plain object (non-null and not an array),
 *       recursively collect strings and append them.
 * 3. Return the collected strings.
 *
 * @complexity
 * Time Complexity: O(n) — n is the total number of properties visited.
 * Space Complexity: O(m) — m is the number of string values plus recursion depth.
 */
function collectStrings(obj) {
  const strings = []

  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const value of Object.values(obj)) {
      if (typeof value === 'string') {
        strings.push(value)
      } else if (value && typeof value === 'object' && !Array.isArray(value)) {
        strings.push(...collectStrings(value))
      }
    }
  }

  return strings
}

// Example:
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"]
