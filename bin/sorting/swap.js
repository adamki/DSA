const swap = (arr, i1, i2) => {
  const temp = arr[i1]

  arr[i1] = arr[i2]; arr[i2] = temp
  return arr
}

module.exports = swap

