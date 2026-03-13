function merge(arr1, arr2, comparator) {
  const result = []
  let i = 0
  let j = 0

  const compare = comparator ?? ((a, b) => a - b)

  const len1 = arr1.length
  const len2 = arr2.length

  while (i < len1 && j < len2) {
    if (compare(arr1[i], arr2[j]) < 0) {
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

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftSide = mergeSort(arr.slice(0, mid), comparator)
  const rightSide = mergeSort(arr.slice(mid), comparator)

  return merge(leftSide, rightSide, comparator)
}

// #### Examples

console.log(mergeSort([4, 20, 12, 10, 7, 9])) // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])) // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])) // [1, 2, 3]
console.log(mergeSort([]))

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
]
console.log(mergeSort(nums)) // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']

function strComp(a, b) {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }
  return 0
}

console.log(mergeSort(kitties, strComp)) // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
]

function oldestToYoungest(a, b) {
  return b.age - a.age
}

console.log(mergeSort(moarKittyData, oldestToYoungest)) // sorted by age in descending order
