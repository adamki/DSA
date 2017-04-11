var swap = require('./swap');

const lomuto = (arr, lo, hi) => {
  let pivotLoc = lo

  for (let i = lo; i < hi; i ++) {
    if (arr[i] < arr[hi]) {
      swap(arr, pivotLoc ++, i)
    }
  }

  swap(arr, pivotLoc, hi)
  return pivotLoc
}

const quick = (arr, lo, hi) => {
  if (!lo) { lo = 0 }
  if (!hi) { hi = arr.length - 1 }

  if (lo <  hi) {
    let partition = lomuto(arr, lo,hi)

    quick(arr, lo, partition - 1)
    quick(arr, partition + 1, hi)
  }

  return arr
}
