const swap = (arr, i, j) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const compare = comparator || ((a, b) => a - b)

  let pivotVal = arr[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (compare(arr[i], pivotVal) < 0) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }

  swap(arr, start, swapIndex)
  return swapIndex
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, comparator, left, right)

    quickSort(arr, comparator, left, pivotIdx - 1)
    quickSort(arr, comparator, pivotIdx + 1, right)
  }
  return arr
}
