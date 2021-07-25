export function laptopRentals(times: number[][]) {
  // sort the times by start
  // keep a min heap that keeps track of the earliest end time, if they overlap add a new number, the result is the length of the min heap
  const minHeap = new Heap([], MIN_HEAP_FUNC);
  const sorted = times.sort((a, b) => a[0] - b[0]);

  for (let time of sorted) {
    if (minHeap.length === 0) minHeap.insert(time[1]);
    else if (time[0] >= minHeap.peek()) {
      // if we have available space, from the last one then pop it and insert the new endtime
      minHeap.remove();
      minHeap.insert(time[1]);
    } else {
      // if couldn't match the start time with the earliest end time we need another laptop
      minHeap.insert(time[1]);
    }
  }

  return minHeap.length;
}

/**
given some time intervals, we need to find out how many laptops we need to students


*/

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
