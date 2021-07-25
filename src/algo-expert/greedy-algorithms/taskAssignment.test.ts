export function taskAssignment(k: number, tasks: number[]) {
  // need to have the number and their original index;
  const mapped = tasks.map((t, i) => [t, i]);
  mapped.sort((a, b) => a[0] - b[0]);
  let result: number[][] = [];
  let left = 0,
    right = tasks.length - 1;
  while (left < right) {
    const l = mapped[left][1];
    const r = mapped[right][1];
    result.push([l, r]);
    left++;
    right--;
  }

  return result;
}

/**
- each worker will always have 2 tasks to complete
- each worker has to complete 2 tasks
- task can be completed in any order
- K will always be greater than 0
*/
