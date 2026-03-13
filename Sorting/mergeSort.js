function merge(arr1, arr2) {
  const result = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const middlePointer = Math.floor(arr.length / 2)
  const leftSide = mergeSort(arr.slice(0, middlePointer))
  const rightSide = mergeSort(arr.slice(middlePointer))

  return merge(leftSide, rightSide)
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))
