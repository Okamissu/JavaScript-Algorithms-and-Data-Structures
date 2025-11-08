/**
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 *
 * @description
 * Calculates base raised to the power of exponent using recursion and
 * the exponentiation by squaring method (fast exponentiation).
 *
 * @pseudocode
 * 1. If exponent is 0, return 1
 * 2. If exponent is even:
 *      - return power(base * base, exponent / 2)
 * 3. If exponent is odd:
 *      - return base * power(base, exponent - 1)
 *
 * @complexity
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */
function power(base, exponent) {
  if (exponent === 0) return 1

  if (exponent % 2 === 0) {
    return power(base * base, exponent / 2)
  } else {
    return base * power(base, exponent - 1)
  }
}

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16
console.log(power(2, 10)) // 1024
