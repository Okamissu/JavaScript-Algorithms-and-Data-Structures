// Check if same length if not, return false
// Take 2 arrays
// Declare counter
// Populate counter
// Go over array a, check if there is counter[number*number]
// If not return false
// Continue array, removing counter[square] occurrence first, so: counter[square]--
// After whole for-loop return true

// ~Complexity
// O(time) -> O(n)
// O(space) -> O(n)

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
