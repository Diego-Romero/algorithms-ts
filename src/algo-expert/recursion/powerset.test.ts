// every time we double the amount of N, the Big O is 2 ^ N
// runtime: O(N * 2 ^ N) time as well as space, because 2^N is the number of sets that we have and each set can be up to N
export function powerset(array: number[]) {
  let queue: number[][] = [[]];

  for (let n of array) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const copy = [...queue[i], n];
      queue.push(copy);
    }
  }

  return queue;
}

/**
- grabs an array of unique integers, returns powerset

[] = []
[1] = [], [1]
[1, 2] = [], [1], [2], [1, 2]
etc.

- steps:
create a queue, that has an empty array



*/
