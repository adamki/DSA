#Elementary Sorting

Quadratic Sorts - O(n^2)
===

### Bubble Sort:
##### Summary:
Requires two `for` loops to sort. `Bubble Sort` is a comparison sort
that repeatedly swaps adjacent values and places them in order.

`tl;dr` - values 'bubble up' to the top of the data list.

##### Psuedocode

```
Outer loop runs in linear time -> O(n)
  Inner loop runs in linear time -> O(n)
    if current item is greater than next item
      Swapping of values runs in constant time -> O(1)

```

##### Time complexity
BubbleSort(n) = runs in quadratic time - O(n^2)

##### Optimization
It is not necesarry to loop to the end, however, looping to `i - 2` saves a
marginal number of executions and does not improve performance.



### Selection Sort:
Selection Sort is an `in-place` comparison based sorting algorithm.

This sort works by keeping the left most part of the array as a sorted section,
and the right most part of the array as an iterable pool of values to select from.

For each pass through the list, a `minIndex` is set. The `minIndex` is used to
track the unsorted section of the array. Looping and selecting occurs between
`minIndex` and the last item of the array.

tl;dr select the smallest value and place it in the left-most position of a new array

##### PsuedoCode
```
For each pass through the loop, set the minIndex as the current index -> O(n)
  For loop(from minIndex to end) and commpare adjacent values. -> O(n)
    Every time a 'lowest' value is found, swap it with the minValue index. -> O(1)
```

##### Time complexity
SelectionSort(n) = runs in quadratic time - O(n^2)

##### Optimization
Similar to Bubble Sort, optimization comes in the form of setting a smaller loop
range. Improvements are marginal.

### Insert Sort:
##### Summary
Insertion Sort uses a partition to keep add sorted values to the left most part of the array.
Looping iterates from left to right. For every index, it `Inserts` the current `i`
value in the correct position by comparing adjecent values.

[(35), 24, 1, 6]
[35, (24), 1, 6]
[24, 35, (1), 6]
[1, 35, 24, (6)]
[1, 6, 35, 24]


##### PsuedoCode
```
For every Index of the array, set a 'partition' equal to current index -> O(n)
  Use a nested loop to compare each index from `0..partition` -> O(n)
    Compare each index to the adjacent values until position is determined. ->O(1)
    Swap the current partition value with the found index. -> O(1)
```

##### Time Complexity
InsertionSort(n) = runs in quadratic time - O(n^2)

##### Optimization
Similar to Bubble Sort, optimization comes in the form of setting a smaller loop
range. Improvements are marginal.


Logarithmic Sorts - O(logn) A.K.A Divide and Conquer
===

### Merge Sort
##### Summary
Step 1: *Divide* Merge Sort takes an un sorted array and recursively 'halves' the array until the
arrays reach a length of 1.
Step 2: *Conquer* Merge Sort compares a given left and right array. The merge process
concats || pushes loest values into a new array. This process is repeated until 
all sub arrays have been added to the final array.

No comparitive sort can operate this fast.

##### PsuedoCode
```
merge(arr)
  if arr.length is > 1
    cut the array in half(left and right)
    merge(left)
    merge(right)

    return compare(left, right)

compare(left, right)
  using seperate indexPointers, search for the lowest value between
  left[currentPointer] and right[currentPointer]
  push lowest values in a newArray and increases the appropriate currentPointer

  returns newArray
```

##### Time Complexity
MergeSort(n) = runs in O(n logn)

##### Optimization


### Quick Sort
##### Summary
Step 1: * Divide * Quick sort uses a Divide and conquer approach by tracking a
partition index as well as a left and right collection. For every iteration,
Quick sort starts with a pivot and compares it to every index of the given array.

I used the [Lomuto](http://www.geeksforgeeks.org/hoares-vs-lomuto-partition-scheme-quicksort/)
partition scheme which returns an index value that represents the current partition.
I can then recursively call quick() for both the left and right side.

##### PsuedoCode
```
lomutoPartition(arr, lo, hi)
  set pivotLoc var to first item aka "lo" index

  for each index from lo - hi
    if current value is less than arr[hi]
      swap i with pivotLoc

  swap pivotLoc with hi
  return pivotLoc

quick(arr, lo, hi)
  handle undefined lo and hi values

  if lo is less than hi
    set partition using lomuto(lo, hi)
    quick(arr, lo, partition - 1)
    quick(arr, partition + 1, hi)

  return arr
```

##### Time Complexity
QuickSort(n) = runs in O(n logn)

Linear Sorts - O(n)
===





