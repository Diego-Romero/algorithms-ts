// in order to be a Heap it must satisfy the property that every nodes value, must be smaller than any of its children node
class Heap {
  heap;
  comparisonFunc;

  constructor(array = [], comparisonFunc) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
  }

  // O(N) time | O(1)space
  buildHeap(array) {
    const firstParentIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIndex; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  // O(Log N) time | O(1) space
  siftDown(index, array) {
    // we need to compare the current node with its children and swap it for the smallest one
    const end = array.length - 1;
    let currentIndex = index;
    let childOneIndex = currentIndex * 2 + 1;
    while (childOneIndex <= end) {
      let childTwoIndex =
        currentIndex * 2 + 2 <= end ? currentIndex * 2 + 2 : -1;
      let indexToSwap;
      if (childTwoIndex !== -1) {
        if (this.comparisonFunc(array[childTwoIndex], array[childOneIndex])) {
          indexToSwap = childTwoIndex;
        } else indexToSwap = childOneIndex;
      } else indexToSwap = childOneIndex;

      if (this.comparisonFunc(array[indexToSwap], array[currentIndex])) {
        this.swap(currentIndex, indexToSwap, array);
        currentIndex = indexToSwap;
        childOneIndex = currentIndex * 2 + 1;
      } else return;
    }
  }

  // O(Log N) time | O(1) space
  siftUp(index, array) {
    // we want to keep switching the value with its parent, until its in its right place
    let currentIndex = index;
    let parentIndex = Math.floor((index - 1) / 2);
    while (currentIndex > 0) {
      if (this.comparisonFunc(array[currentIndex], array[parentIndex])) {
        this.swap(currentIndex, parentIndex, array);
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      } else return;
    }
  }

  swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  // O(1) time & space
  peek() {
    return this.heap[0];
  }

  // O(Log N) time | space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const val = this.heap.pop();
    this.siftDown(0, this.heap);
    return val;
  }

  // O(Log N) time | O(1) space
  insert(value) {
    // first insert the value at the end of the array
    this.heap.push(value);
    // sift the values up so that the heap is in its right position again
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

function MAX_HEAP_FUNC(a, b) {
  return a > b;
}
function MIN_HEAP_FUNC(a, b) {
  return a < b;
}

/**
 * K-Messed Array Sort

Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[input] integer k

0 ≤ k ≤ 20
[output] array.integer
 */

// Solution in O(N log K) time | O(K) space.
function sortKMessedArray(arr, k) {
  const minHeap = new Heap([], MIN_HEAP_FUNC);
  let j = 0;
  while (j < k) {
    // need to check that J is in the valid range
    if (j >= arr.length) break;
    minHeap.insert(arr[j]);
    j++;
  }
  // j === k
  for (let i = 0; i < arr.length; i++) {
    if (j <= arr.length) {
      minHeap.insert(arr[j]);
      j++;
    }
    arr[i] = minHeap.remove();
  }
  arr[arr.length - 1] = minHeap.remove();
  console.log(arr);
}

describe("sort K messed array", () => {
  it("should work 1", () => {
    // k = 2
    const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], // 3, 4, 5
      //                                     j
      //                              i
      //           1,
      k = 2,
      output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sortKMessedArray(arr, k);
    expect(arr).toEqual(output);
  });

  it("should work when k is 3", () => {
    const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9],
      k = 3,
      output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sortKMessedArray(arr, k)).toEqual(output);
  });

  it("should work when k is 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      k = 1,
      output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sortKMessedArray(arr, k)).toEqual(output);
  });

  it("should work when k is the length of the array or bigger", () => {
    const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9],
      k = 20,
      output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sortKMessedArray(arr, k)).toEqual(output);
  });
});
