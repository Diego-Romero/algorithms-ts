
/**
 * You are given an array with numbers that represent the amount of waiting time necessary for a query to execute
 * i.e. [5,1,4] would take 0 + (5) + (5+1) to execute, the first query has no waiting time.
 * Write a function that returns the minim amount of total waiting time for all queries
 * 
 * Potential clarifying questions:
 * - Are we only dealing with positive integers? Do we have to consider floating point numbers or integer overflow errors?
 * - What are the minimum amount of queries that I will be given?
 */

/**
 * solution in O(N Log N) but using N space
 */
// export function minimumWaitingTime(queries: number[]): number {
//   let sum = 0;
//   queries.sort((a, b) => a - b)
//   const allSums = []
//   for (let i = 1; i < queries.length; i++) {
//     sum += queries[i - 1]
//     allSums.push(sum)
//   }
//   return allSums.reduce((cur, prev) => cur + prev, 0)
// }

/**
 * solution in O(N Log N) and constant space
 */
export function minimumWaitingTime(queries: number[]): number {
  let sum = 0, counter = 0;
  queries.sort((a, b) => a - b)
  for (let i = 0; i < queries.length - 1; i++) {
    const n = queries[i]
    counter++;
    sum += n * (queries.length - counter);
  }
  return sum
}

describe('minimum waiting time', () => {
  test('should return the minimum waiting time', () => {
    expect(minimumWaitingTime([3,2,1,2,6])).toEqual(17)
  })
  
})
