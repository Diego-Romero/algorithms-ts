// in order to be a Heap it must satisfy the property that every nodes value, must be smaller than any of its children node
export class MaxHeap {
  heap: number[];

  constructor(array: number[] = []) {
    this.heap = this.buildHeap(array);
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
    // we need to compare the current node with its children and swap it for the correct one
    const end = array.length - 1;
    let currentIndex = index;
    let childOneIndex = currentIndex * 2 + 1;
    while (childOneIndex <= end) {
      let childTwoIndex =
        currentIndex * 2 + 2 <= end ? currentIndex * 2 + 2 : -1;
      let indexToSwap: number;

      if (childTwoIndex !== -1 && array[childTwoIndex] > array[childOneIndex])
        indexToSwap = childTwoIndex;
      else indexToSwap = childOneIndex;

      if (array[indexToSwap] > array[currentIndex]) {
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
    while (currentIndex > 0 && array[currentIndex] > array[parentIndex]) {
      this.swap(currentIndex, parentIndex, array);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
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
    return val;
  }

  // O(Log N) time | O(1) space
  insert(value: number) {
    // first insert the value at the end of the array
    this.heap.push(value);
    // sift the values up so that the heap is in its right position again
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

describe("max heap", () => {
  test("should build the heap", () => {
    const initial = [9, 32, 14, 18, 22, 7, 5, 1, 4];
    const heap = new MaxHeap(initial);
    // heap.insert(9);
    // console.log(heap.heap);
    heap.insert(100);
    heap.insert(1000);
    while (heap.heap.length > 0) {
      console.log(heap.remove());
    }
  });
});
