/**
 * Given a k integer representing the number of workers and an array of positive integers representing durations of tasks that must be completed by the workers. Specifically each worker must complete two unique tasks and can only work on one task at a time. The number of tasks will always be equal to 2k, such that each worker always has exactly two tasks to complete. All tasks are independent of one another and can be completed in any order. Workers will complete their assigned tasks in parallel, and the time taken to complete all tasks will equal to the time taken to complete all tasks, will be equal to the time taken to complete the longest pair of tasks.
 *
 *
 * Write a function that returns the optimal assignment of tasks to each worker such that the tasks are completed as fast as possible. The function should return a list of pairs, where each pair stores the indices of the tasks that should be completed by one worker.
 *
 * Note, K will always be bigger than 0;
 */

export function taskAssignment(k: number, tasks: number[]): number[][] {
  const result: number[][] = [];
  const taskWithOriginalIndex: number[][] = [];
  for (let i in tasks) {
    const index = parseInt(i);
    const element = tasks[index];
    taskWithOriginalIndex.push([element, index])
  }
  const sorted = taskWithOriginalIndex.sort((a, b) => a[0] - b[0]);
  // console.log(taskWithOriginalIndex)
  let l = 0,
    r = sorted.length - 1;
  while (l < r) {
    result.push([ taskWithOriginalIndex[l][1], taskWithOriginalIndex[r][1] ])
    l++;
    r--;
  }
  // console.log(result);

  return result;
}

describe("task assignment", () => {
  test("should return the optimal time for assigning tasks to workers", () => {
    const tasks = [1, 3, 5, 3, 1, 4];

    const result = [
      [0, 2],
      [4, 5],
      [1, 3],
    ];
    expect(taskAssignment(3, tasks)).toEqual(result);
  });
});
