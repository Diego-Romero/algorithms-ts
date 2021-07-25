export function heapSort(array: number[]) {
  buildMaxHeap(array);
  for (let end = array.length - 1; end > 0; end--) {
    swap(0, end, array);
    siftDown(0, end - 1, array);
  }

  return array;
}

function buildMaxHeap(array: number[]) {
  const firstParent = Math.floor((array.length - 2) / 2);
  for (let current = firstParent; current >= 0; current--) {
    siftDown(current, array.length - 1, array);
  }
}

function siftDown(current: number, end: number, heap: number[]) {
  let childOne = current * 2 + 1;
  while (childOne <= end) {
    const childTwo = current * 2 + 2 <= end ? current * 2 + 2 : -1;
    let indexToSwap;
    if (childTwo !== -1 && heap[childTwo] > heap[childOne]) {
      indexToSwap = childTwo;
    } else indexToSwap = childOne;
    if (heap[indexToSwap] > heap[current]) {
      swap(current, indexToSwap, heap);
      current = indexToSwap;
      childOne = current * 2 + 1;
    } else return;
  }
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}
