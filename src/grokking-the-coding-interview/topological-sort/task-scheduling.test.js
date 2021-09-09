/*
Problem Statement#
There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, find out if it is possible to schedule all the tasks.

Example 1:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
Output: true
Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs 
to finish before '2' can be scheduled. One possible scheduling of tasks is: [0, 1, 2] 
Example 2:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
Output: false
Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.
Example 3:

Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
Output: true
Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5] 
*/

const is_scheduling_possible = function (tasks, prerequisites) {
  // create 2 maps, one with counts and one with adjacents, based on the tasks we have
  const adjacent = {},
    counts = {};

  // setting defaults
  for (let i = 0; i < tasks; i++) {
    adjacent[i] = [];
    counts[i] = 0;
  }

  for (let [node, target] of prerequisites) {
    counts[target]++;
    adjacent[node].push(target);
  }

  // use a Queue to do BFS, starting from the nodes that have no dependencies
  const queue = [];
  for (let [key, value] of Object.entries(counts)) {
    if (value === 0) queue.push(key);
  }

  if (queue.length === 0) return false; // we have a circular structure

  // console.log(queue, queue.length);
  // keep count if we have cleared all the nodes
  let cleared = 0;

  while (queue.length > 0) {
    const size = queue.length;
    console.log("queue", queue);
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      cleared++;
      // decrease count of the children
      const children = adjacent[node];
      for (let child of children) {
        counts[child]--;
        if (counts[child] === 0) queue.push(child);
      }
    }
  }

  // console.log("cleared", cleared);
  return cleared === tasks;
};

console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
  ])}`
); // true

console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
); // false
console.log(
  `Is scheduling possible: ${is_scheduling_possible(6, [
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
); // true
