const loopDownward = (n) => {
  for (var i = n; i >= 0; i--) {
    return i
  }
}

const recurseDownward = (n) => {
  while (n >= 0) {
    return recurseDownward(n - 1)
  }

  return n
}

const exponent = (base, expo) => {
  while (expo > 1) {
    return base * exponent(base, expo - 1)
  }

  return base
}

const recursiveMultiplier = (arr, num) => {
  if (!arr.length) return arr
  var last = arr.pop()

  recursiveMultiplier(arr, num)
  arr.push(last * num)

  return arr
}

const recursiveReverse = (arr) => {
  if (!arr.length) return arr
  let first = arr.shift()

  recursiveReverse(arr)
  arr.push(first)

  return arr
}
