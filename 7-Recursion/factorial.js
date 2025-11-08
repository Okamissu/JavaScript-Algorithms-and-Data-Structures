/**
 * @param {number} num
 * @param {number} acc
 * @returns {number}
 *
 * @description
 * Calculates the factorial of a number using tail recursion.
 * The result is accumulated in the `acc` parameter to avoid building up
 * multiplications on the call stack.
 * For example, factorial(4) = 4 * 3 * 2 * 1 = 24.
 *
 * @pseudocode
 * 1. If num <= 1, return acc (accumulator holds the result)
 * 2. Otherwise, call factorial(num - 1, acc * num)
 *
 * @complexity
 * Time Complexity: O(n)          // multiplies each number once
 * Space Complexity: O(n)         // recursion depth = n (JS does not optimize tail calls)
 */
function factorial(num, acc = 1) {
  if (num <= 1) return acc
  return factorial(num - 1, acc * num)
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
