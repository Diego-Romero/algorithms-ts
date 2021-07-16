
// solution in O(N log N) | N space
export function mergeOverlappingIntervals(array: number[][]) {
  const sorted = array.sort((a, b) => a[0] - b[0]);

  let current = array[0];
  let i = 1;
  let result: number[][] = [];

  while (i < array.length) {
    // check if they are overlapping
    let interval = array[i];
    if (current[1] >= interval[0]) {
      // if the ending of the current one, is overlapping with the start of the next one
      current = [current[0], Math.max(current[1], interval[1])];
    } else {
      result.push(current);
      current = interval;
    }

    i++;
  }
  result.push(current);

  return result;
}

/**
- non empty array of arbitrary intervals
- merges any overlapping ones

- avoid doing a N^2 operation
- sort them, this would give us a N log N operation
*/
