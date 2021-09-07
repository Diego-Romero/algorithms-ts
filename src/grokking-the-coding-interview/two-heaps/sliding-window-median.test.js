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

class SlidingWindowMedian {
  constructor() {
    this.low = new Heap([], MAX_HEAP_FUNC);
    this.high = new Heap([], MIN_HEAP_FUNC);
  }

  find_sliding_window_median(numbers, k) {
    result = [];
    // have to insert the numbers first 
    for (let i = 0; i < numbers.length; i++) {
      if (i < k) {
        this.insert(numbers[i]);
      } else {
        result.push(this.getMedian());
      }
    }
    result.push(this.getMedian());
    
    return result;
  }

  insert(num) {
    if (this.low.heap.length === 0 || num < this.low.peek()) {
      this.low.insert(num)
    } else {
      this.high.insert(num)
    }
  }

  balanceHeaps() {
    // two options
    const lowLength = this.low.heap.length;
    const highLength = this.high.heap.length;
    if (lowLength > highLength + 1) {
      this.high.insert(this.low.remove());
    } else if (highLength > lowLength) {
      this.low.insert(this.high.remove());
    }
  }

  getMedian() {
    const lowTop = this.low.peek()
    const highTop = this.high.peek()
    if (this.low.heap.length === this.high.heap.length) return (lowTop + highTop) / 2;
    return lowTop;
  }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`); // 1.5 0.5 1.0. 4.0

// slidingWindowMedian = new SlidingWindowMedian();
// result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
// console.log(`Sliding window medians are: ${result}`);
