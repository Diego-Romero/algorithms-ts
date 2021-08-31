// in order to be a Heap it must satisfy the property that every nodes value, must be smaller than any of its children node
class Heap {
  heap;
  comparisonFunc;

  constructor(array = [], comparisonFunc) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
    console.log(this.comparisonFunc);
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
  return a.end > b.end;
}
function MIN_HEAP_FUNC(a, b) {
  return a.end < b.end;
}

/*
Maximum CPU Load (hard)#
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

Example 1:

Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).
Example 2:

Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
Example 3:

Jobs: [[1,4,2], [2,4,1], [3,6,5]]
Output: 8
Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 
*/

class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
}

// // Brute force solution in O(J * M) J = jobs, M = longest job | O(J * M) space
// const find_max_cpu_load = function (jobs) {
//   if (!jobs.length) return 0;
//   // generate all the possible intervals, including the amount of cpu power consumed there
//   // [1, 4, 2], [2, 4, 1], [3, 6, 5] should generate [1,2,3], [2, 4, 8],
//   // jobs.sort((a, b) => a.start - b.start);
//   // let maxCount = jobs.cpu_load;
//   let counts = {};
//   for (let job of jobs) {
//     for (let i = job.start; i <= job.end; i++) {
//       if (!counts[i]) counts[i] = 0;
//       counts[i] += job.cpu_load;
//     }
//   }
//   // console.log(counts);

//   let max = -1;
//   for (let value of Object.values(counts)) {
//     // console.log(value);
//     max = Math.max(value, max);
//   }

//   return max;
// };

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a.start - b.start);
  let maxCpuLoad = 0,
    currentCPULoad = 0;
  console.log(jobs);
  const minHeap = new Heap([], MIN_HEAP_FUNC);
  for (let i = 0; i < jobs.length; i++) {
    const currentJob = jobs[i];
    while (minHeap.length > 0 && currentJob.start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpu_load;
    }

    minHeap.push(currentJob);
    currentCPULoad += currentJob.cpu_load;
    maxCpuLoad = Math.max(maxCpuLoad, currentCPULoad);
  }
  return maxCpuLoad;
};

console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 3),
    new Job(2, 5, 4),
    new Job(7, 9, 6),
  ])}`
);
// console.log(
//   `Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(6, 7, 10),
//     new Job(2, 4, 11),
//     new Job(8, 12, 15),
//   ])}`
// );
// console.log(
//   `"Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(1, 4, 2),
//     new Job(2, 4, 1),
//     new Job(3, 6, 5),
//   ])}`
// );
