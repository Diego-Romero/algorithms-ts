// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
export class ContinuousMedianHandler {
  median: number | null;
  greaters: Heap;
  lowers: Heap;

  constructor() {
    // Write your code here.
    this.median = null;
    this.greaters = new Heap([], MIN_HEAP_FUNC);
    this.lowers = new Heap([], MAX_HEAP_FUNC);
  }

  insert(number: number) {
    // insert in the right heap
    if (!this.lowers.length || number < this.lowers.peek())
      this.lowers.insert(number);
    else this.greaters.insert(number);

    // re-balance heaps if necessary

    if (this.lowers.length - this.greaters.length === 2)
      this.greaters.insert(this.lowers.remove()!);
    else if (this.greaters.length - this.lowers.length === 2)
      this.lowers.insert(this.greaters.remove()!);

    // set the median
    if (this.greaters.length === this.lowers.length) {
      this.median = (this.greaters.peek() + this.lowers.peek()) / 2;
    } else {
      this.median =
        this.greaters.length > this.lowers.length
          ? this.greaters.peek()
          : this.lowers.peek();
    }
    // console.log(this.minHeap.heap, this.maxHeap.heap, this.median);
  }

  getMedian() {
    return this.median;
  }
}

export class Heap {
  heap: number[];
  comparisonFunc: (a: number, b: number) => boolean;
  length: number;

  constructor(
    array: number[] = [],
    comparisonFunc: (a: number, b: number) => boolean
  ) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  // O(N) time | O(1)space
  buildHeap(array: number[]) {
    const firstParentIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIndex; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  // O(Log N) time | O(1) space
  siftDown(index: number, array: number[]) {
    // we need to compare the current node with its children and swap it for the smallest one
    const end = array.length - 1;
    let currentIndex = index;
    let childOneIndex = currentIndex * 2 + 1;
    while (childOneIndex <= end) {
      let childTwoIndex =
        currentIndex * 2 + 2 <= end ? currentIndex * 2 + 2 : -1;
      let indexToSwap: number;
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
  siftUp(index: number, array: number[]) {
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

  swap(i: number, j: number, array: number[]) {
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
    this.length--;
    return val;
  }

  // O(Log N) time | O(1) space
  insert(value: number) {
    // first insert the value at the end of the array
    this.heap.push(value);
    this.length++;
    // sift the values up so that the heap is in its right position again
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

function MAX_HEAP_FUNC(a: number, b: number) {
  return a > b;
}
function MIN_HEAP_FUNC(a: number, b: number) {
  return a < b;
}
