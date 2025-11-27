/**
 * @function countZeroes
 * @param {number[]} arr array of numbers - which has all 1s first, followed by all 0s 
 * @returns {number} number of zeroes in the array
 *
 * @description
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, returns the number of zeroes in the array
 *
 * @pseudocode
 * 1. Use binary search to locate the first occurrence of 0.
 * 2. Initialize start = 0 and end = arr.length - 1.
 * 3. While start <= end:
 *    a. mid = start + floor((end - start) / 2)
 *    b. If arr[mid] === 0 and (mid === 0 or arr[mid - 1] === 1) -> mid is first zero, return mid.
 *    c. If arr[mid] === 1 -> search right half (start = mid + 1).
 *    d. Else (arr[mid] === 0 but not first) -> search left half (end = mid - 1).
 * 4. If no zero found return -1.
 * 5. In countZeroes, if firstZero === -1 return 0, else return arr.length - firstZero.
 *
 * @complexity
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) (due to recursion stack in the worst case)
 */
function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0

  return arr.length - firstZero
}


/**
* @function findFirst
* @param {number[]} arr - Array of numbers (all 1s followed by all 0s)
* @param {number} [start=0] - Starting index for the search (default is 0)
* @param {number} [end=arr.length-1] - Ending index for the search (default is arr.length - 1)
* @returns {number} Index of the first occurrence of 0, or -1 if not found
 */
  function findFirst(arr, start = 0, end = arr.length - 1) {
    if (end >= start) {
      let mid = start + Math.floor((end - start) / 2)
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, end)
      }
      return findFirst(arr, start, mid - 1)
    }
    return -1
  }


console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0
