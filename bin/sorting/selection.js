const swap = require('./swap');

const selection = (arr) => {
  for(let i = 0; i < arr.length - 1; i ++) {
    let minIndex = i; let minValue = arr[i]

    for (let j = minIndex; j < arr.length; j ++) {
      if (arr[j] < minValue) {
        minValue = arr[j]; swap(arr, minIndex, j)
      }
    }
  }

  return arr
}

// var answer = selection([32, 5, 40, 0, 1, -83, 3, 99, 13])
