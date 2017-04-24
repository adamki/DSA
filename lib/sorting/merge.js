const compare = (left, right) => {
  let lPointer = 0; let rPointer = 0; let mergedArray = []

  while (mergedArray.length < left.length + right.length) {
    if (!left[lPointer]) {
      mergedArray.push(right[rPointer])
    } else if (!right[rPointer]) {
      mergedArray.push(left[lPointer])
    } else if (left[lPointer] < right[rPointer]) {
      mergedArray.push(left[lPointer++])
    } else {
      mergedArray.push(right[rPointer++])
    }
  }

  return mergedArray
}

const merge = arr => {
  if (arr.length > 1) {
    const half = Math.ceil(arr.length / 2)
    const left = arr.splice(0, half)
    const right = arr

    const l = merge(left)
    const r = merge(right)

    return compare(l, r)
  }

  return arr
}
