/**
 * @param {Array} sortedArr - a sorted array of integers (can be negative or positive)
 * @param {number} targetAverage - the target average to find in the array
 * @returns {boolean} True if a pair with the target average exists, otherwise false
 *
 * @description
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 *
 * @pseudocode
 * Use multiple pointers pattern.
 *
 * 1. Create a left pointer at the start of the array and a right pointer at the end of the array
 * 2. While the left pointer comes before the right pointer:
 *    a. Calculate the average of the pair
 *    b. If the average equals the target, return true
 *    c. If the average is less than the target, move the left pointer up
 *    d. If the average is greater than the target, move the right pointer down
 * 3. Return false
 *
 * @complexity
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function averagePair(sortedArr, targetAverage) {
  if (!Array.isArray(sortedArr)) {
    // Invalid input: not an array. Return false.
    return false
  } else if (isNaN(targetAverage)) {
    // Invalid input: not a number. Return false.
    return false
  }

  let left = 0
  let right = sortedArr.length - 1

  while (left < right) {
    const average = (sortedArr[left] + sortedArr[right]) / 2
    if (average === targetAverage) return true
    else if (average < targetAverage) left++
    else if (average > targetAverage) right--
  }

  return false
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
