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
  return a[0] > b[0];
}
function MIN_HEAP_FUNC(a, b) {
  return a[0] < b[0];
}

/*
Problem Statement#
Given a set of investment projects with their respective profits, we need to find the most profitable projects. We are given an initial capital and are allowed to invest only in a fixed number of projects. Our goal is to choose projects that give us the maximum profit. Write a function that returns the maximum total capital after selecting the most profitable projects.

We can start an investment project only when we have the required capital. Once a project is selected, we can assume that its profit has become our capital.

Example 1:

Input: Project Capitals=[0,1,2], Project Profits=[1,2,3], Initial Capital=1, Number of Projects=2
Output: 6
Explanation:

With initial capital of ‘1’, we will start the second project which will give us profit of ‘2’. Once we selected our first project, our total capital will become 3 (profit + initial capital).
With ‘3’ capital, we will select the third project, which will give us ‘3’ profit.
After the completion of the two projects, our total capital will be 6 (1+2+3).

Example 2:

Input: Project Capitals=[0,1,2,3], Project Profits=[1,2,3,5], Initial Capital=0, Number of Projects=3
Output: 8
Explanation:

With ‘0’ capital, we can only select the first project, bringing out capital to 1.
Next, we will select the second project, which will bring our capital to 3.
Next, we will select the fourth project, giving us a profit of 5.
After selecting the three projects, our total capital will be 8 (1+2+5).
*/

// Brute force approach
// put the projects in a max heap, sorted by profit
// while we can select projects, grab the project from the top of the heap that we can do, this has to be a copy
// repeat whilst we have projects
// This will take O(N) to build the heap, then iterate over the number of projects, removing elements from the heap
// O(N + P log N) time | O(N) space

// Optimal solution is to use 2 heaps, a max heap for profits and a min heap for cost
// this solution would run in O(N log N + P Log N) where P is the number of projects we have, N log N at the start as we could be inserting as many projects as N
const find_maximum_capital = function (
  capital,
  profits,
  numberOfProjects,
  initialCapital
) {
  const minCapital = new Heap([], MIN_HEAP_FUNC);
  const maxProfit = new Heap([], MAX_HEAP_FUNC);
  let currentCapital = initialCapital;

  // insert all the projects, sorted by the  min capital
  for (let i = 0; i < capital.length; i++) minCapital.insert([capital[i], i]);

  // try to find the best projects with our current capital
  for (let i = 0; i < numberOfProjects; i++) {
    // find all the projects that can be done with the current capital,
    // add them into the max heap
    while (
      minCapital.heap.length > 0 &&
      minCapital.peek()[0] <= currentCapital
    ) {
      const [capital, index] = minCapital.remove();
      maxProfit.insert([profits[index], index]);
    }

    if (maxProfit.heap.length === 0) break;
    // as we can only select one at the time, we just add the one from the top
    const [profit, index] = maxProfit.remove();
    currentCapital += profit;
  }

  // while (projectsDone < numberOfProjects) {
  // 	// I want to put in the projects for which I have capital, and see which one gives me the max profit
  // 	for (let i = 0; i < capital.length; i++) {

  // 	}
  // }

  return currentCapital;
};

console.log(
  `Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`
); // answer is 6
console.log(
  `Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`
);
