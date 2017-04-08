const swap = require('./swap');


const insertion = (arr) => {
  for (var i = 1; i < arr.length; i ++) {
    let partition = i;
    let current = arr[i];

    for (var j = 0; j < partition; j ++) {
      if (current < arr[j]) {
        swap(arr, partition, j)
      }
    }
  }
  return arr
}

insertion([4, 5, 2, 3, 6, 1, -9])

