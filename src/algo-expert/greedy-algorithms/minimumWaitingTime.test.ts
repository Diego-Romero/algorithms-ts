export function minimumWaitingTime(queries: number[]) {
  if (queries.length < 2) return 0;
  queries.sort((a, b) => a - b);
  console.log(queries);
  let currentSum = 0;
  let total = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    currentSum += queries[i];
    queries[i] = currentSum;
    total += queries[i];
  }

  return total;
}

/**
- given an array of positive integers, indicating the amount of time a query takes to execute
- only one query can be executed at a time, executed in any order
- allowed to mutate the input array
- return the minimum amount of total waiting time

- Greedy algorithm just means, that at every step we make a greedy choice,
we peak the shortest possible answer, hence why its greedy.
*/
