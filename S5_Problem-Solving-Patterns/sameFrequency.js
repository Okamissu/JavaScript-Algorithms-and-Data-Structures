/**
 * @param {number} n - First integer number
 * @param {number} m - Second integer number
 * @returns {boolean} Returns true if the numbers have same frequencies of individual digits, false otherwise.
 *
 * @description
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * @pseudocode
 * 1. Check if same length, if not return false
 * 2. Initialize a counter object
 * 3. populate with first number digits
 * 4. Go over digit one - checking if value falsy or <= 0
 *    true: return false
 *    false: subtract one out of value of digit key
 * 5. return true
 *
 * @complexity
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function sameFrequency(n, m) {
  // Validate that both inputs are positive integers
  if (n < 0 || m < 0)
    throw new Error('Both arguments must be positive integers')

  const num1 = n.toString()
  const num2 = m.toString()

  if (num1.length !== num2.length) return false

  const counter = {}
  for (const digit of num1) {
    counter[digit] = (counter[digit] || 0) + 1
  }

  for (const digit of num2) {
    if (!counter[digit] || counter[digit] <= 0) return false

    counter[digit]--
  }

  return true
}

// Example usage:
console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
