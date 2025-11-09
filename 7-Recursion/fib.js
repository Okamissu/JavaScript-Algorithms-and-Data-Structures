/**
 * @param {number} num - The position (n) in the Fibonacci sequence to compute.
 * @param {Object} [memo={}] - An object used to store previously computed Fibonacci numbers for memoization.
 * @returns {number} The n-th Fibonacci number.
 *
 * @description
 * Computes the n-th Fibonacci number using recursion with memoization
 * to optimize performance by caching intermediate results.
 *
 * @pseudocode
 * 1. If num <= 2, return 1 (base case)
 * 2. If num exists in memo, return memo[num]
 * 3. Compute fib(num - 1, memo) + fib(num - 2, memo)
 * 4. Store the result in memo[num]
 * 5. Return memo[num]
 *
 * @complexity
 * Time Complexity: O(n) — each Fibonacci number up to n is computed once.
 * Space Complexity: O(n) — due to the recursion stack and memo storage.
 */
function fib(num, memo = {}) {
  if (num <= 2) return 1
  if (num in memo) return memo[num]

  memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
  return memo[num]
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
