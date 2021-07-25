class Heap {
  heap: number[][];
  comparisonFunc: (a: number, b: number) => boolean;
  length: number;

  constructor(
    array: number[][] = [],
    comparisonFunc: (a: number, b: number) => boolean
  ) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  // O(N) time | O(1)space
  buildHeap(array: number[][]) {
    const firstParentIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIndex; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  // O(Log N) time | O(1) space
  siftDown(index: number, array: number[][]) {
    // we need to compare the current node with its children and swap it for the smallest one
    const end = array.length - 1;
    let currentIndex = index;
    let childOneIndex = currentIndex * 2 + 1;
    while (childOneIndex <= end) {
      let childTwoIndex =
        currentIndex * 2 + 2 <= end ? currentIndex * 2 + 2 : -1;
      let indexToSwap: number;
      if (childTwoIndex !== -1) {
        if (
          this.comparisonFunc(array[childTwoIndex][0], array[childOneIndex][0])
        ) {
          indexToSwap = childTwoIndex;
        } else indexToSwap = childOneIndex;
      } else indexToSwap = childOneIndex;

      if (this.comparisonFunc(array[indexToSwap][0], array[currentIndex][0])) {
        this.swap(currentIndex, indexToSwap, array);
        currentIndex = indexToSwap;
        childOneIndex = currentIndex * 2 + 1;
      } else return;
    }
  }

  // O(Log N) time | O(1) space
  siftUp(index: number, array: number[][]) {
    // we want to keep switching the value with its parent, until its in its right place
    let currentIndex = index;
    let parentIndex = Math.floor((index - 1) / 2);
    while (currentIndex > 0) {
      if (this.comparisonFunc(array[currentIndex][0], array[parentIndex][0])) {
        this.swap(currentIndex, parentIndex, array);
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      } else return;
    }
  }

  swap(i: number, j: number, array: number[][]) {
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
  insert(value: number[]) {
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

export function mergeSortedArrays(arrays: number[][]) {
  // make the heap work with two values, using the first one as the sorting property
  // insert one element from each array into the heap
  const heap = new Heap([], MIN_HEAP_FUNC);

  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    heap.insert([array.shift()!, i]);
  }
	const result: number[] = [];
	while(heap.length) {
		const [n, index] = heap.remove()!;
		result.push(n);
		const indexArray = arrays[index];
		if (indexArray.length > 0) heap.insert([indexArray.shift()!, index])
		
	}

  return result;
}

/**
- non empty list of non empty sorted arrays
- the arrays are sorted

// we could take advantage of the fact that the arrays are sorted to use a min heap
*/

describe("merge sorted arrays algoexpert", () => {
  test("should work", () => {
    const example = [
      [1, 5, 9, 21],
      [-1, 0],
      [-124, 81, 121],
      [3, 6, 12, 20, 150],
    ];

    const result = mergeSortedArrays(example);
    console.log(result);
  });
});
