const swap = require('./swap');

const bubble = (arr) => {
  for (let i = 1; i < arr.length - 1; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      var current = arr[j]
      var next = arr[j + 1]

      if (current > next) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// var answer = bubble([3, 53, 12, 74, 30, 301, 45, 23, 78, 34])
