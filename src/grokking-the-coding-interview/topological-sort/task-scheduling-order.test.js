/*
Problem Statement#
There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write a method to find the ordering of tasks we should pick to finish all tasks.

Example 1:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
Output: [0, 1, 2]
Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs
to finish before '2' can be scheduled. A possible scheduling of tasks is: [0, 1, 2] 
Example 2:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
Output: []
Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.
Example 3:

Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
Output: [0 1 4 3 2 5] 
Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5] 

*/

const find_order = function (tasks, prerequisites) {
  const result = [];
  const adjacent = {};
  const counts = {};

  for (let i = 0; i < tasks; i++) {
    adjacent[i] = [];
    counts[i] = 0;
  }

  // populate the counts and map
  for (let [node, target] of prerequisites) {
    adjacent[node].push(target);
    counts[target]++;
  }

  // console.log(adjacent);
  // console.log(counts);

  const queue = [];
  for (let [k, v] of Object.entries(counts)) {
    if (v === 0) queue.push(k);
  }

  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      result.push(node);
      const children = adjacent[node];
      for (let child of children) {
        counts[child]--;
        if (counts[child] === 0) {
          queue.push(child);
        }
      }
    }
  }
  // need to check if the length of the result is the same, in order to confirm it doesn't have a cycle
  if (result.length !== tasks) return [];

  return result;
};

console.log(
  `Is scheduling possible: ${find_order(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
); // [0,1,4,3,2,5]

console.log(
  `Is scheduling possible: ${find_order(3, [
    [0, 1],
    [1, 2],
  ])}`
); // [0,1,2]

console.log(
  `Is scheduling possible: ${find_order(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
); // cant do it as there is a cycle in the graph
