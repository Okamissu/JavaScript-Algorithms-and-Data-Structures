const swap = (arr, i, j) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotVal = arr[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivotVal > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }

  swap(arr, start, swapIndex)
  return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)

    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
