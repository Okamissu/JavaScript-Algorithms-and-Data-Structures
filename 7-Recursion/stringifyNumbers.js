/**
 * @param {Record<string, any>} obj - The input object to process.
 * @returns {Record<string, any>} A new object with all number values converted to strings.
 *
 * @description
 * Recursively converts all number values in an object to strings.
 *
 * Takes in an object and converts all number values to strings. Nested objects
 * are processed recursively. Arrays and other non-number values are preserved
 * as-is. The original object remains unchanged.
 *
 * @pseudocode
 * 1. Create a new object to hold the results.
 * 2. Loop through each [key, value] pair in the input object:
 *    a. If the value is a number, convert it to a string and add to the new object.
 *    b. If the value is a plain object (not an array or null), recursively call stringifyNumbers and add result to the new object.
 *    c. Otherwise, add the value to the new object as-is.
 * 3. Return the new object.
 *
 * @complexity
 * Time Complexity: O(n) - where n is the total number of properties in the object and nested objects
 * Space Complexity: O(n) - for the new object created and recursive call stack
 */
function stringifyNumbers(obj) {
  const newObj = {}

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      newObj[key] = String(value)
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      newObj[key] = stringifyNumbers(value) // recursive call
    } else {
      newObj[key] = value
    }
  }

  return newObj
}

// Example usage
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
}

console.log(stringifyNumbers(obj))
/*
Output:
{
  num: "1",
  test: [],
  data: { val: "4", info: { isRight: true, random: "66" } }
}
*/
