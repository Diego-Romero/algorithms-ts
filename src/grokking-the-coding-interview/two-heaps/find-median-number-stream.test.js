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

class MedianOfAStream {
  smallNumbers;
  largeNumbers;
  constructor() {
    this.smallNumbers = new Heap([], MAX_HEAP_FUNC);
    this.largeNumbers = new Heap([], MIN_HEAP_FUNC);
  }
  // N log N, as we are inserting N numbers
  insert_num(num) {
    // if the num is larger than the one at large insert there, then re balance
    // else store in small numbers and rebalance
    if (num > this.largeNumbers.peek()) {
      this.largeNumbers.insert(num);
      if (this.largeNumbers.heap.length > this.smallNumbers.heap.length) {
        this.smallNumbers.insert(this.largeNumbers.remove());
      }
    } else {
      this.smallNumbers.insert(num);
      if (this.smallNumbers.heap.length >= this.largeNumbers.heap.length + 2) {
        this.largeNumbers.insert(this.smallNumbers.remove()); // now is just one bigger
      }
    }
    console.log(this.smallNumbers.heap, this.largeNumbers.heap);
  }

  // 2 options, either they are same length, or small numbers is larger
  find_median() {
    if (this.smallNumbers.heap.length === this.largeNumbers.heap.length) {
      return (this.smallNumbers.peek() + this.largeNumbers.peek()) / 2;
    } else {
      return this.smallNumbers.peek();
    }
  }
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`); // 2
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`); // 3
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`); // 3.5
