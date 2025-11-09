/**
 * @param {Object} obj - The object to search for even numbers.
 * @returns {number} The sum of all even numbers found.
 *
 * @description
 * Recursively calculates the sum of all even numbers in a nested object.
 *
 * @pseudocode
 * 1. Initialize sum to 0
 * 2. For each key in obj:
 *    a. If the value is an object, call nestedEvenSum recursively
 *    b. If the value is an even number, add it to sum
 * 3. Return sum
 *
 * @complexity
 * Time Complexity: O(n) - where n is the total number of properties in the object
 * Space Complexity: O(d) - where d is the maximum depth of the nested objects
 */
function nestedEvenSum(obj) {
  let sum = 0

  for (const value of Object.values(obj)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      sum += nestedEvenSum(value)
    } else if (typeof value === 'number' && value % 2 === 0) {
      sum += value
    }
  }

  return sum
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
}

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10
