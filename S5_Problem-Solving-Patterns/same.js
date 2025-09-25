/**
 *
 * @param {number[]} a - The first array of numbers to compare.
 * @param {number[]} b - The second array of numbers to compare against squared values of the first array.
 * @returns {boolean} Returns true if each value in `a` has its squared value in `b` with the same frequency, false otherwise.
 *
 * @description
 * Checks if every value in the first array has its squared value present in the second array, with matching frequencies.
 * Counter pattern
 *
 * @pseudocode
 * 1. If lengths of a and b are not equal, return false.
 * 2. Create an empty frequency counter object for b.
 * 3. For each number in b:
 *    a. Increment its count in the frequency counter.
 * 4. For each number in a:
 *    a. Compute its square.
 *    b. If the square is not in the frequency counter or its count is zero, return false.
 *    c. Otherwise, decrement the count for the square in the frequency counter.
 * 5. If all checks pass, return true.
 *
 * @complexity
 * Time Complexity: O(n), where n is the length of the input arrays.
 * Space Complexity: O(n), due to the frequency counter object.
 */
function isSameSquared(a, b) {
  if (a.length !== b.length) return false

  const counter = {}

  for (let number of b) {
    counter[number] = (counter[number] || 0) + 1
  }

  for (const number of a) {
    let square = number ** 2
    if (!counter[square]) {
      return false
    }
    counter[square]--
  }

  return true
}

console.log(isSameSquared([1, 2, 3], [4, 1, 9])) // true
console.log(isSameSquared([1, 2, 3], [1, 9])) // false
console.log(isSameSquared([1, 2, 3], [1, 9, 5])) // false
console.log(isSameSquared([1, 2, 1], [4, 4, 1])) // false
console.log(isSameSquared([1, 2, 3, 2], [9, 1, 4, 4])) //true
