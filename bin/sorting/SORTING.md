I've included several basic sorting algorithms.
They are as follows:

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




