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
  return a[0].value < b[0].value;
}

/*
Problem Statement ##
Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

Example 1:

Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
Example 2:

Input: L1=[5, 8, 9], L2=[1, 7]
Output: [1, 5, 7, 8, 9]
*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*
use a heap to keep track of the head of every list, as well as the index of that list, whenever we pop it, we just get the next number of that list
*/

// space O(K) k being the amount of lists we have
// time O(N log K) N being the total number of elements in the array, as we are inserting every element into the heap (log N)
const merge_lists = function (lists) {
  const preHead = new ListNode(null);
  let iterator = null;
  const minHeap = new Heap([], MIN_HEAP_FUNC);
  // put the first element of all the lists
  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    if (list !== null) minHeap.insert([list, i]);
  }

  console.log(minHeap);

  while (minHeap.heap.length > 0) {
    const [node, index] = minHeap.remove();
    console.log(node.value, index);
    if (preHead.next === null) {
      preHead.next = node;
      iterator = node;
    } else {
      iterator.next = node;
      iterator = iterator.next;
    }
    if (node.next !== null) {
      console.log("inserting", node.value, index);
      minHeap.insert([node.next, index]);
    }
  }

  return preHead.next;
};

l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

result = merge_lists([l1, l2, l3]);
output = "Here are the elements form the merged list: ";
while (result != null) {
  output += result.value + " ";
  result = result.next;
}
console.log(output);
