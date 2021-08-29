/*
Problem Statement ##
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

// O(N) time | constant space
const insert = function (intervals, insertingInterval) {
  // check the correct place where the inserting interval goes
  const result = [];
  let i = 0;
  while (
    i < intervals.length &&
    insertingInterval.start >= intervals[i].start
  ) {
    result.push(intervals[i]); // 5, 7
    i++;
  }

  let current = insertingInterval;
  while (i < intervals.length) {
    // current is the earliest start date
    if (current.end >= intervals[i].start) {
      // they overlap
      current.start = Math.min(current.start, intervals[i].start);
      current.end = Math.max(current.end, intervals[i].end);
    } else {
      result.push(current);
      current = intervals[i];
    }
    i++;
  }
  result.push(current);

  return result;
};

// process.stdout.write("Intervals sits in between");
// let result = insert(
//   [new Interval(1, 2), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(3, 4)
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();
// process.stdout.write("Intervals is not overlapping and in the end");
// result = insert(
//   [new Interval(1, 2), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(13, 14)
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

process.stdout.write("Intervals after inserting the new interval: ");
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

/*
Reflexion:
- 
*/